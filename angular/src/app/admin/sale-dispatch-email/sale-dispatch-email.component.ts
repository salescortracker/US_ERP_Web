import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-sale-dispatch-email',
  templateUrl: './sale-dispatch-email.component.html',
  styleUrls: ['./sale-dispatch-email.component.scss']
})
export class SaleDispatchEmailComponent implements OnInit {
  public saledispatchform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',

  }
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService) { }

  ngOnInit(): void {
    this.getcrmsaledispatch();
  }
  savecrmsaledispatch(){
    debugger;
    if(this.saledispatchform.id>0){
      var usr=this.adm.getUserCompleteInformation().usr;
      this.saledispatchform.branch_id=usr.bCode;
      this.saledispatchform.customer_code=usr.cCode;
      this.admusrservice.updatcrmdispatchemail(this.saledispatchform).subscribe(res=>{
       this.adm.showMessage("Dispatch Email  details updated successfully","success",1)
      this.getcrmsaledispatch();
      })
    }else{
    var usr=this.adm.getUserCompleteInformation().usr;
    this.saledispatchform.branch_id=usr.bCode;
    this.saledispatchform.customer_code=usr.cCode;
    this.admusrservice.savecrmdispatchemail(this.saledispatchform).subscribe(res=>{
     this.adm.showMessage("Dispatch Email details saved successfully","success",1)
    this.getcrmsaledispatch();
    })
  }
  }
  lstdatasaledispatch:any;
  getcrmsaledispatch(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.saledispatchform.branch_id=usr.bCode;
    this.saledispatchform.customer_code=usr.cCode;
    this.admusrservice.getcrmdispatchemail(this.saledispatchform).subscribe(res=>{
      this.lstdatasaledispatch=res;
     })
  }
  lstdatasaledispatchbyid:any;
  editcrmdispatchemail(id:any){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.saledispatchform.id=id;    
    this.saledispatchform.branch_id=usr.bCode;
    this.saledispatchform.customer_code=usr.cCode;
    this.admusrservice.getcrmdispatchemailById(this.saledispatchform).subscribe((res:any)=>{
      debugger;
      this.lstdatasaledispatchbyid=res;
      this.saledispatchform.description=res.description;
     })
  }
  
  deletecrmdispatchemail(id:any){
   
    var usr=this.adm.getUserCompleteInformation().usr;
    this.saledispatchform.id=id;    
    this.saledispatchform.branch_id=usr.bCode;
    this.saledispatchform.customer_code=usr.cCode;
    this.admusrservice.deletecrmdispatchemail(this.saledispatchform).subscribe(res=>{
      this.lstdatasaledispatchbyid=res;
    this.getcrmsaledispatch();
     })
  
  
  }

}
