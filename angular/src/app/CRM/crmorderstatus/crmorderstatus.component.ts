import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-crmorderstatus',
  templateUrl: './crmorderstatus.component.html',
  styleUrls: ['./crmorderstatus.component.scss']
})
export class CrmorderstatusComponent implements OnInit {

  public orderstatusform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',

  }
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService) { }

  ngOnInit(): void {
    this.getcrmorderstatus();
  }
  savecrmcorderstatus(){
    debugger;
    if(this.orderstatusform.id>0){
      var usr=this.adm.getUserCompleteInformation().usr;
      this.orderstatusform.branch_id=usr.bCode;
      this.orderstatusform.customer_code=usr.cCode;
      this.admusrservice.updatecrmcorderstatus(this.orderstatusform).subscribe(res=>{
       this.adm.showMessage("Call Reason details updated successfully","success",1)
      this.getcrmorderstatus();
      })
    }else{
    var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstatusform.branch_id=usr.bCode;
    this.orderstatusform.customer_code=usr.cCode;
    this.admusrservice.savecrmorderstatus(this.orderstatusform).subscribe(res=>{
     this.adm.showMessage("Call Reason details saved successfully","success",1)
    this.getcrmorderstatus();
    })
  }
  }
  lstdatacallforreason:any;
  getcrmorderstatus(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstatusform.branch_id=usr.bCode;
    this.orderstatusform.customer_code=usr.cCode;
    this.admusrservice.getcrmorderstatus(this.orderstatusform).subscribe(res=>{
      this.lstdatacallforreason=res;
     })
  }
  lstdatacallforreasonbyid:any;
  editorderstatus(id:any){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstatusform.id=id;    
    this.orderstatusform.branch_id=usr.bCode;
    this.orderstatusform.customer_code=usr.cCode;
    this.admusrservice.getcrmorderstatusById(this.orderstatusform).subscribe((res:any)=>{
      debugger;
      this.lstdatacallforreasonbyid=res;
      this.orderstatusform.description=res.description;
     })
  }
  
  deletecrmorderstatus(id:any){
   
    var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstatusform.id=id;    
    this.orderstatusform.branch_id=usr.bCode;
    this.orderstatusform.customer_code=usr.cCode;
    this.admusrservice.deletecrmorderstatus(this.orderstatusform).subscribe(res=>{
      this.lstdatacallforreasonbyid=res;
    this.getcrmorderstatus();
     })
  
  
  }

}
