import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cus-main',
  templateUrl: './cus-main.component.html',
  styleUrls: ['./cus-main.component.scss']
})
export class CusMainComponent implements OnInit {

  leadId: any
  leadData:any
  constructor(
    private route: ActivatedRoute,
    private acc: AccAccountsService,
        private router: Router,
    private adm: AdminGeneralInfoService
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
  tabs = ['Customer Details', 'Contacts', 'Call logs', 'Schedulers', 'Reminders', "Enquiry", "Quotation", "Orders"];
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    this.router.navigate(['/crm/crmcusmain/' + this.leadId], { queryParams: { tab: tabName } });
  }
  getLeadData() {
    var usr = this.adm.getUserCompleteInformation().usr;
    let leadbyidform = {
      id: this.leadId,
      branch_id : usr.bCode,
      customer_code : usr.cCode
    }
    this.acc.GetCRMAllLeadsBy(leadbyidform).subscribe(
      (res) => {
        this.leadData = res;
        console.log(this.leadData);
      })
  }

  // markAsCustomer(): void {
  //   if (this.leadId && this.leadData) {
  //     const payload = {
  //       id: this.leadId,
  //       isCustomer: true, // Flag to indicate the lead is now a customer
  //     };
     
  //     this.acc.getLeadsToCustomer(payload).subscribe(
  //       (res) => {
  //         console.log('Lead marked as customer successfully', res);
  //         Swal.fire('Success', 'Lead has been marked as a customer!', 'success');
  //         this.router.navigate(['/crm/customerListing']); // Redirect to customers list
  //       },
  //       (error) => {
  //         console.error('Error marking lead as customer:', error);
  //         Swal.fire('Error', 'An error occurred while marking the lead as a customer.', 'error');
  //       }
  //     );
  //   }
  // }

}
