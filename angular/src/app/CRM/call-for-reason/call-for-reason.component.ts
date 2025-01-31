import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-call-for-reason',
  templateUrl: './call-for-reason.component.html',
  styleUrls: ['./call-for-reason.component.scss']
})
export class CallForReasonComponent implements OnInit {

  public callforreasonform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',

  }
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService) { }

  ngOnInit(): void {
    this.getcrmcallforreason();
  }
  savecrmcallforreason(){
    debugger;
    if(this.callforreasonform.id>0){
      var usr=this.adm.getUserCompleteInformation().usr;
      this.callforreasonform.branch_id=usr.bCode;
      this.callforreasonform.customer_code=usr.cCode;
      this.admusrservice.updatecrmcallforreason(this.callforreasonform).subscribe(res=>{
       this.adm.showMessage("Call Reason details updated successfully","success",1)
      this.getcrmcallforreason();
      })
    }else{
    var usr=this.adm.getUserCompleteInformation().usr;
    this.callforreasonform.branch_id=usr.bCode;
    this.callforreasonform.customer_code=usr.cCode;
    this.admusrservice.savecrmcallforreason(this.callforreasonform).subscribe(res=>{
     this.adm.showMessage("Call Reason details saved successfully","success",1)
    this.getcrmcallforreason();
    })
  }
  }
  lstdatacallforreason:any;
  getcrmcallforreason(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.callforreasonform.branch_id=usr.bCode;
    this.callforreasonform.customer_code=usr.cCode;
    this.admusrservice.getcrmcallforreason(this.callforreasonform).subscribe(res=>{
      this.lstdatacallforreason=res;
     })
  }
  lstdatacallforreasonbyid:any;
  editcallforreason(id:any){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.callforreasonform.id=id;    
    this.callforreasonform.branch_id=usr.bCode;
    this.callforreasonform.customer_code=usr.cCode;
    this.admusrservice.getcrmcallforreasonById(this.callforreasonform).subscribe((res:any)=>{
      debugger;
      this.lstdatacallforreasonbyid=res;
      this.callforreasonform.description=res.description;
     })
  }
  
  deletecallforreason(id:any){
   
    var usr=this.adm.getUserCompleteInformation().usr;
    this.callforreasonform.id=id;    
    this.callforreasonform.branch_id=usr.bCode;
    this.callforreasonform.customer_code=usr.cCode;
    this.admusrservice.deletecrmcallforreason(this.callforreasonform).subscribe(res=>{
      this.lstdatacallforreasonbyid=res;
    this.getcrmcallforreason();
     })
  
  
  }


}
