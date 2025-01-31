import { Component, OnInit } from '@angular/core';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-leadview-page',
  templateUrl: './leadview-page.component.html',
  styleUrls: ['./leadview-page.component.scss']
})
export class LeadviewPageComponent implements OnInit {
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
    this.acc.GetCRMAllLeadsById(leadbyidform).subscribe(
      (res) => {
        this.leadData = res[0]
        console.log(this.leadData);
      })
  }

}
