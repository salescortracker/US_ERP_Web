import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {

  constructor(private admusrservice:AdmUsersService,private adm:AdminGeneralInfoService) { }
  public customemails:any={
    recordId:0,
    emailFrom:'',
    emailPassword:'',
    emailCC:'',
    emailTo:'',
    emailSMTP:'',
    emailPort:+0,
    emailDefault:false,
    branchId:'',
    customerCode:'',

  }
  public custombody:any={
    recordId:0,
    admCustomemailId:0,
    customSubject:'',
    customBody:'',
    IsDefault:'',   
    branchId:'',
    customerCode:'',
    titleName:'',

  }
  public customsignature:any={
    recordId:0,
    admCustomemailId:0,
    customSignature:'',
    customSignatureText:'',
    IsDefault:'',   
    branchId:'',
    customerCode:'',

  }
  ngOnInit(): void {
    this.getCustEmail();
    this.getCustbody();
    this.getCustsignature();
  }
  customeremail=true;
  emailinbox=false;
  signature=false;
  customeremailbtn="active";
  signaturebtn="";
  emailinboxbtn="";
  lstcustemails:any;
  savecustEmails(){
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.customemails.branchId=usr.bCode;
    this.customemails.customerCode=usr.cCode;
    this.admusrservice.savecustomEmailBycustomer(this.customemails).subscribe(res=>{
     this.adm.showMessage("Email Settings details saved successfully","success",1)
     this.getCustEmail();
    })
  }
  savecustBody(){
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.custombody.branchId=usr.bCode;
    this.custombody.customerCode=usr.cCode;
    this.admusrservice.savecustEmailBody(this.custombody).subscribe(res=>{
     this.adm.showMessage("Email Body details saved successfully","success",1)
     this.getCustbody();
    })
  }
  savecustsignature(){
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.customsignature.branchId=usr.bCode;
    this.customsignature.customerCode=usr.cCode;
    this.admusrservice.savecustEmailsignature(this.customsignature).subscribe(res=>{
     this.adm.showMessage("Email Signature details saved successfully","success",1)
     this.getCustsignature();

    })
  }
  lstdatacustemail:any;
  getCustEmail(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.customemails.branchId=usr.bCode;
    this.customemails.customerCode=usr.cCode;
    this.admusrservice.savecustomEmailBycust(usr.cCode).subscribe(res=>{
      this.lstdatacustemail=res;
     })
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
  openEmailinbox(str:any){
    if(str=='customeremail'){
     this.customeremail=true;
     this.emailinbox=false;
     this.signature=false;
     this.customeremailbtn="active";
     this.signaturebtn="";
     this.emailinboxbtn="";
    }
    if(str=='emailinbox'){
      this.emailinbox=true;
      this.customeremail=false;
      this.signature=false;
       this.customeremailbtn='';
       this.signaturebtn="";
       this.emailinboxbtn="active";
     }
     if(str=='signature'){
      this.signature=true;
      this.emailinbox=false;
      this.customeremail=false;
      this.customeremailbtn='';
      this.signaturebtn="active";
      this.emailinboxbtn="";
     }
  }

}
