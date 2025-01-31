import { Component, OnInit } from '@angular/core';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crm-lead-stage',
  templateUrl: './crm-lead-stage.component.html',
  styleUrls: ['./crm-lead-stage.component.scss']
})
export class CrmLeadStageComponent implements OnInit {
  userdetails: any;
  allrecords: any;

  constructor(private adm: AdminGeneralInfoService, private admusrservice:AccAccountsService,private toastr:ToastrService) {
    this.userdetails = this.adm.getUserCompleteInformation();
    console.log(this.userdetails.usr);
  }

  formData = {
    id:0,
    description: "",
    recordId: 0,
    customerCode: 0,
    branchId: ""
  }

  ngOnInit(): void {
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.getData()
  }
  getData(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.formData.branchId=usr.bCode;
    this.formData.customerCode=usr.cCode;
    this.admusrservice.getcrmleadstage(this.formData).subscribe((res:any)=>{
      console.log(res);
      this.allrecords=res
     })
    
  }
  id:any;
  save() {
   
    if(this.id>0){
      this.userdetails = this.adm.getUserCompleteInformation();
      this.formData.branchId = this.userdetails.usr.bCode
      this.formData.customerCode = this.userdetails.usr.cCode
      console.log(this.formData);  
      this.admusrservice.updateLeadStage(this.formData).subscribe((res:any)=>{
        console.log(res);
        this.getData()
        this.id=0;
        this.toastr.success("Stage Details Updated Successfully");
        this.close()
       })
    }
    else{
      this.userdetails = this.adm.getUserCompleteInformation();
      this.formData.branchId = this.userdetails.usr.bCode
      this.formData.customerCode = this.userdetails.usr.cCode
      console.log(this.formData);  
      this.admusrservice.saveLeadStage(this.formData).subscribe((res:any)=>{
        console.log(res);
        this.getData()
        this.toastr.success("Stage Details Saved Successfully");
        this.close()
       })
     
    }
  }
  editItem(obj:any){
    this.userdetails = this.adm.getUserCompleteInformation();
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.formData.id=obj.id;
    this.id=obj.id;
    this.admusrservice.getcrmleadstageById(this.formData).subscribe((res:any)=>{
      console.log(res);
      debugger;
      this.formData.id=res.id;
      this.id=res.id;
      this.formData.description = res.description;

      //this.close()
     })
    
    //this.formData.recordId = obj.recordId
  }
  deleteitem(obj:any){
    this.userdetails = this.adm.getUserCompleteInformation();
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.formData.id=obj.id;
    this.id=obj.id;
    this.admusrservice.deleteLeadStage(this.formData).subscribe((res:any)=>{
      console.log(res);
      debugger;
      this.toastr.success("Stage Details Deleted Successfully");
      this.getData();
      //this.close()
     })
  }
  close(){
    this.formData.description = ""
    this.formData.recordId = 0
  }

}
