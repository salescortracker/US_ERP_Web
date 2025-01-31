import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-orderstage',
  templateUrl: './orderstage.component.html',
  styleUrls: ['./orderstage.component.scss']
})
export class OrderstageComponent implements OnInit {
  lstorderstage:any;
  public orderstageform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',

  }
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService) { }
ngOnInit(): void {
  this.getcrmorderstage();
    
}
saveorderstage(){
  debugger;
  if(this.orderstageform.id>0){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstageform.branch_id=usr.bCode;
    this.orderstageform.customer_code=usr.cCode;
    this.admusrservice.updateorderstage(this.orderstageform).subscribe(res=>{
     this.adm.showMessage("Order status details updated successfully","success",1)
    this.getcrmorderstage();
    })
  }else{
  var usr=this.adm.getUserCompleteInformation().usr;
  this.orderstageform.branch_id=usr.bCode;
  this.orderstageform.customer_code=usr.cCode;
  this.admusrservice.saveorderstage(this.orderstageform).subscribe(res=>{
   this.adm.showMessage("Order Status details saved successfully","success",1)
  this.getcrmorderstage();
  })
}
}

getcrmorderstage(){
  var usr=this.adm.getUserCompleteInformation().usr;
  this.orderstageform.branch_id=usr.bCode;
  this.orderstageform.customer_code=usr.cCode;
  this.admusrservice.getadmorderstage(this.orderstageform).subscribe(res=>{
    this.lstorderstage=res;
   })
}
lstdatacallforreasonbyid:any;
editorderstagebyid(id:any){
  var usr=this.adm.getUserCompleteInformation().usr;
  this.orderstageform.id=id;    
  this.orderstageform.branch_id=usr.bCode;
  this.orderstageform.customer_code=usr.cCode;
  this.admusrservice.getorderstageById(this.orderstageform).subscribe((res:any)=>{
    debugger;
    this.lstdatacallforreasonbyid=res;
    this.orderstageform.description=res.description;
   })
}

deleteorderstage(id:any){
 
  var usr=this.adm.getUserCompleteInformation().usr;
  this.orderstageform.id=id;    
  this.orderstageform.branch_id=usr.bCode;
  this.orderstageform.customer_code=usr.cCode;
  this.admusrservice.deleteorderstage(this.orderstageform).subscribe(res=>{
    this.adm.showMessage("Order Status details Deleted successfully","success",1)
    this.lstdatacallforreasonbyid=res;
  this.getcrmorderstage();
   })


}



}
