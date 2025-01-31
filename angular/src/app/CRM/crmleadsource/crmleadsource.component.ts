import { Component, OnInit } from '@angular/core';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crmleadsource',
  templateUrl: './crmleadsource.component.html',
  styleUrls: ['./crmleadsource.component.scss']
})
export class CrmleadsourceComponent implements OnInit {
  userdetails: any;
  allrecords: any;

  constructor(private adm: AdminGeneralInfoService, private admusrservice:AccAccountsService,private toastr:ToastrService) {
  
   // console.log(this.userdetails.usr);
  }

  formData = {
    id:0,
    description: "",
    recordId: 0,
    customerCode: "",
    branchId: ""
  }

  ngOnInit(): void {
   
    this.getData()
  }
  getData(){
    this.userdetails = this.adm.getUserCompleteInformation();
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.admusrservice.getsaveLeadSourcebycustomercode(this.formData).subscribe((res:any)=>{
      console.log(res);
      this.allrecords=res
     })
    
  }
  save() {

    if(this.id>0){
      this.userdetails = this.adm.getUserCompleteInformation();
      this.formData.branchId = this.userdetails.usr.bCode
      this.formData.customerCode = this.userdetails.usr.cCode
      console.log(this.formData);  
      this.admusrservice.updateLeadSource(this.formData).subscribe((res:any)=>{
        console.log(res);
        this.getData()
        this.id=0;
        this.toastr.success("Source Details Updated Successfully");
        this.close()
       })
    }
    else{
      this.userdetails = this.adm.getUserCompleteInformation();
      this.formData.branchId = this.userdetails.usr.bCode
      this.formData.customerCode = this.userdetails.usr.cCode
      console.log(this.formData);  
      this.admusrservice.saveLeadSource(this.formData).subscribe((res:any)=>{
        console.log(res);
        this.getData()
        this.toastr.success("Source Details Saved Successfully");
        this.close()
       })
     
    }
  }
  id:any;
  editItem(obj:any){
    this.userdetails = this.adm.getUserCompleteInformation();
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.formData.id=obj.id;
    this.id=obj.id;
    this.admusrservice.getcrmleadsourceById(this.formData).subscribe((res:any)=>{
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
    this.admusrservice.deleteLeadSource(this.formData).subscribe((res:any)=>{
      console.log(res);
      debugger;
      this.toastr.success("Source Details Deleted Successfully");
      this.getData();
      //this.close()
     })
  }
  close(){
    this.formData.description = ""
    this.formData.recordId = 0
  }

}
