import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Component({
  selector: 'app-cus-page',
  templateUrl: './cus-page.component.html',
  styleUrls: ['./cus-page.component.scss']
})
export class CusPageComponent implements OnInit {

  
  leadId: any
  leadData:any
  
  constructor(
    private route: ActivatedRoute,
    private acc: AccAccountsService,
    private adm: AdminGeneralInfoService
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getLeadData()
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



}
