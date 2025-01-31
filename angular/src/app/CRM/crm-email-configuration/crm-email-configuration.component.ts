import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
@Component({
  selector: 'app-crm-email-configuration',
  templateUrl: './crm-email-configuration.component.html',
  styleUrls: ['./crm-email-configuration.component.scss']
})
export class CrmEmailConfigurationComponent implements OnInit {

  constructor(private admusrservice:AdmUsersService,private adm:AdminGeneralInfoService) { }

  ngOnInit(): void {
    this.getCustbody();
    this.getCustsignature();
  }
  lstdatacustbody:any;
  getCustbody(){
    var usr=this.adm.getUserCompleteInformation().usr;
  
    this.admusrservice.customEmailBodygetBycustomer(usr.cCode).subscribe(res=>{
      this.lstdatacustbody=res;
     })
  }
  lstdatacustsignature:any;
  getCustsignature(){
    var usr=this.adm.getUserCompleteInformation().usr;  
    this.admusrservice.customEmailsignaturegetBycustomer(usr.cCode).subscribe(res=>{
      this.lstdatacustsignature=res;
     })
  }

}
