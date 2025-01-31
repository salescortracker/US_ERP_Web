import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-leadview-main',
  templateUrl: './leadview-main.component.html',
  styleUrls: ['./leadview-main.component.scss']
})
export class LeadviewMainComponent implements OnInit {

  leadId: any
  leadData: any
  constructor(
    private route: ActivatedRoute,
    private acc: AccAccountsService,
    private adm: AdminGeneralInfoService,
    private router: Router,
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
    this.route.queryParamMap.subscribe(params => {
      let tab = params.get('tab');
      console.log(tab);
      if (tab) {
        this.selectedTab = Number(tab);
      }
    })
  }
  ngOnInit(): void {
    this.getLeadData()
  }
  tabs = ['Lead Details', 'Contacts', 'Call logs', 'Schedulers', 'Reminders', "Enquiry", "Quotation", "Orders"];
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }
  convertedcustomer:any=true;
  getLeadData() {
    var usr = this.adm.getUserCompleteInformation().usr;
    let leadbyidform = {
      id: this.leadId,
      branch_id: usr.bCode,
      customer_code: usr.cCode
    }
    this.acc.GetCRMAllLeadsById(leadbyidform).subscribe(
      (res) => {
        this.leadData = res[0]
        console.log(this.leadData);
        this.convertedcustomer=this.leadData.convert_customer;
      })
  }
  markAsCustomer(): void {
    if (this.leadId && this.leadData) {
      const payload = {
        id: this.leadId,
        isCustomer: true, // Flag to indicate the lead is now a customer
      };

      this.acc.getLeadsToCustomer(payload).subscribe(
        (res) => {
          console.log('Lead marked as customer successfully', res);
          Swal.fire('Success', 'Lead has been marked as a customer!', 'success');
          this.router.navigate(['/crm/customerListing']); // Redirect to customers list
        },
        (error) => {
          console.error('Error marking lead as customer:', error);
          Swal.fire('Error', 'An error occurred while marking the lead as a customer.', 'error');
        }
      );
    }
  }


}
