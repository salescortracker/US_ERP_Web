import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-lead-owner',
  templateUrl: './lead-owner.component.html',
  styleUrls: ['./lead-owner.component.scss']
})
export class LeadOwnerComponent implements OnInit {

  lstleadowner:any;
  public leadownerform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',

  }
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService) { }
ngOnInit(): void {
  this.getcrmleadowner();
    
}
saveleadowner(){
  debugger;
  if(this.leadownerform.id>0){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadownerform.branch_id=usr.bCode;
    this.leadownerform.customer_code=usr.cCode;
    this.admusrservice.updatecrmleadowner(this.leadownerform).subscribe(res=>{
     this.adm.showMessage("Lead Owner details updated successfully","success",1)
    this.getcrmleadowner();
    })
  }else{
  var usr=this.adm.getUserCompleteInformation().usr;
  this.leadownerform.branch_id=usr.bCode;
  this.leadownerform.customer_code=usr.cCode;
  this.admusrservice.savecrmleadowner(this.leadownerform).subscribe(res=>{
   this.adm.showMessage("Lead  Owner details saved successfully","success",1)
  this.getcrmleadowner();
  })
}
}

getcrmleadowner(){
  var usr=this.adm.getUserCompleteInformation().usr;
  this.leadownerform.branch_id=usr.bCode;
  this.leadownerform.customer_code=usr.cCode;
  this.admusrservice.getcrmleadowner(this.leadownerform).subscribe(res=>{
    this.lstleadowner=res;
   })
}
lstdataleadownerbyid:any;
editleadownerbyid(id:any){
  var usr=this.adm.getUserCompleteInformation().usr;
  this.leadownerform.id=id;    
  this.leadownerform.branch_id=usr.bCode;
  this.leadownerform.customer_code=usr.cCode;
  this.admusrservice.getcrmleadownerById(this.leadownerform).subscribe((res:any)=>{
    debugger;
    this.lstdataleadownerbyid=res;
    this.leadownerform.description=res.description;
   })
}

deleteleadowner(id:any){
 
  var usr=this.adm.getUserCompleteInformation().usr;
  this.leadownerform.id=id;    
  this.leadownerform.branch_id=usr.bCode;
  this.leadownerform.customer_code=usr.cCode;
  this.admusrservice.deletecrmleadowner(this.leadownerform).subscribe(res=>{
    this.adm.showMessage("Lead Owner details Deleted successfully","success",1)
    this.lstdataleadownerbyid=res;
  this.getcrmleadowner();
   })


}

}
