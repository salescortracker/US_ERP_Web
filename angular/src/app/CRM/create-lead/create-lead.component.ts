import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { data } from 'app/shared/data/smart-data-table';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss']
})
export class CreateLeadComponent implements OnInit {
  contactForm: any = {
    id: 0,
    leadid:0,
    // leadName: '',
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    designation: "",
    location: ""
  };
  leadbyidform:any={
    id:0,
    branch_id:'',
    customer_code:''
  }
  enquirybyidform:any={
    lead_id:0,
    branchid:'',
    customercode:''
  }
  public leadcreateform:any={
    id:0,
    code:0,
    customer:'',
    branchid:0,
    customercode:0,
    lead_group:'',
    status:'',
    lead_owner:0,
    company:'',
    first_name:'',
    last_name:'',
    description:'',
    business_email:'',
    secondary_email:'',
    phonenumber:0,
    alternate_number:0,
    lead_status:0,
    lead_source:0,
    lead_stage:0,
    website:'',
    industry:'',
    numberofemployees:'',
    annual_revenue:0,
    rating:'',
    emailoutputformat:'',
    skypeid:'',
    title:'',
    phone:'',
    fax:'',
    twitter:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    designation: "",
    location: ""

  }
  lead=true;
  contact=false;
  calllog=false;
  enquiry=false;
  quotation=false;
  orders=false;
  events=false;
  reminders=false;
  documents=false;
  leadbtn="active";
  contactbtn="";
  calllogbtn="";
  enquirybtn="";
  quotationbtn="";
  ordersbtn="";
  eventsbtn="";
  remindersbtn="";
  documentsbtn="";
  contactlst: any;
  leadid:any;
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService,private router:Router,
    private spinner: NgxSpinnerService,
 private crm:CrmDiscountListService,
    private par: PartyDetailsService,
    private act:ActivatedRoute,
    private hrd: HrdEmployeesService,
    // private router:ActivatedRoute,
    private acc:AccAccountsService,
    private inv:InvMastersService,
     private admg: AdminGeneralInfoService,
    private toastr: ToastrService // Add toastr service,
    ,private ino: CrmQuotationService,
  ) {
    
    
    this.act.queryParamMap.subscribe(params => {
      this.telecall = params.get('telecall');
      console.log(this.telecall);
    })

    this.act.queryParams.subscribe(params => {
     this.leadid = params['id'];
    console.log(data);
    console.log(JSON.stringify(data));
  });}

telecall:any;

  ngOnInit(): void {
    this.getQuotations();
    this.getinvmaterials();
    this.getcrmcallforreason();
    //this.getcrmleadowner();
    this.getcrmleadsource();
    this.getcrmleadstatus();
    this.GetActiveCountries();
    this.GetTotalStates();
    this.getEvents();
    this.getReminders();
    this.getCallLogs();
    this.getCallTypes(); // Fetch call types when component initializes
    this.getHrdEmployees();
    this.getcontacts();
    this.getLeadsbyid();
    this.getcrmleadenquiry();
    this.getcrmorders();
    this.getcrmindustry();
    this.getData();
    this.getcityData();

    this.loadEmployees();

    this.getcrmleadtitle();

  }
  items:any;
  loadunits(){
    this.ino.getCRMQuotationRequirements().subscribe(res => {
      var det: any = res;
      console.log('total', det);
      this.items = det.materials;
    })
  }
  existingEntries =[
    {company:''},
    {first_name:''},
    {last_name:''},
    {business_email: ''},
    { phonenumber: ''}

  ];
  errorMessages={
    company: '',
    first_name: '',
    last_name:'',
    business_email: '',
    phonenumber: '',
    
  }
  checkDuplicate(field: string, value: string) {
    const duplicates = this.existingEntries.find((entry) =>
      entry[field] === value.trim()
    );

    if (duplicates) {
      this.errorMessages[field] = `${field.replace('_', ' ')} already exists.`;
    } else {
      this.errorMessages[field] = '';
    }
  }
  alphaNumberOnly (e) {  // Accept only alpha numerics, not special characters 
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
  }

  onPaste(e) {
    e.preventDefault();
    return false;
  }
  letterOnly(event) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
  mobilevalidate(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
//   savecrmlead(){
//     debugger;
//     if(this.checkValueForLead()){
//     var usr=this.adm.getUserCompleteInformation().usr;
//   this.leadcreateform.branchid=usr.bCode;
//   this.leadcreateform.customercode=usr.cCode;
//   if(this.leadcreateform.id>0){
//     this.admusrservice.updateCRMLead(this.leadcreateform).subscribe(res=>{
//       console.log(res)
//       this.closes();
//      this.adm.showMessage("Lead  details updated successfully","success",1)
//     })
//   }
//   else{
//   this.admusrservice.SaveCRMLead(this.leadcreateform).subscribe(res=>{
//     console.log(res)
//     this.closes();
//    this.adm.showMessage("Lead  details saved successfully","success",1)
//   })
// }
// }
// }
// savecrmlead() {
//   debugger;
//   if (this.checkValueForLead()) {
//     const usr = this.adm.getUserCompleteInformation().usr;
//     this.leadcreateform.branchid = usr.bCode;
//     this.leadcreateform.customercode = usr.cCode;

//     if (this.leadcreateform.id > 0) {
//       this.admusrservice.updateCRMLead(this.leadcreateform).subscribe(
//         (res) => {
//           console.log(res);
//           this.closes();
//           this.adm.showMessage('Lead details updated successfully', 'success', 1);
//         },
//         (err) => {
//           console.error(err);
//           this.adm.showMessage(err.error || 'Failed to update lead details', 'Error', 2);
//         }
//       );
//     } else {
//       this.admusrservice.SaveCRMLead(this.leadcreateform).subscribe(
//         (res) => {
//           console.log(res);
//           this.closes();
//           this.adm.showMessage('Lead details saved successfully', 'success', 1);
//         },
//         (err) => {
//           console.error(err);
//           // Check for duplicate error message
//           if (err.status === 400 && err.error === 'Company name already exists. Please enter a unique company name.') {
//             this.adm.showMessage('Company name already exists. Please enter a unique company name.', 'Warning', 3);
//           } else {
//             this.adm.showMessage(err.error || 'Failed to save lead details', 'Error', 2);
//           }
//         }
//       );
//     }
//   }
// }


validateNumberOfEmployees() {
  // Ensure the input is no longer than 10 digits
  if (this.leadcreateform.numberofemployees && this.leadcreateform.numberofemployees.toString().length > 10) {
    this.leadcreateform.numberofemployees = this.leadcreateform.numberofemployees.toString().slice(0, 10);
    alert('Maximum of 10 digits allowed for No. of Employees.');
  }
}
 // Validate "Annual Revenue" field
 validateAnnualRevenue() {
  const revenue = this.leadcreateform.annual_revenue;

  // Check if the entered value is a valid number
  if (revenue && isNaN(revenue)) {
    alert('Please enter a valid number for Annual Revenue.');
    this.leadcreateform.annual_revenue = '';  // Clear the invalid input
  }
}
savecrmlead() {
  // Validate the website URL before proceeding
  // if (!this.leadcreateform.website || !/^https?:\/\/.+/.test(this.leadcreateform.website)) {
  //   alert('Please enter a valid website URL.');
  //   return; // Stop further execution if the website URL is invalid
  // }
  if (this.checkValueForLead()) {
    const usr = this.adm.getUserCompleteInformation().usr;

    this.leadcreateform.branchid = usr.bCode;
    this.leadcreateform.customercode = usr.cCode;

    if (this.leadcreateform.id > 0) {
      this.admusrservice.updateCRMLead(this.leadcreateform).subscribe(
        (res) => {
          console.log(res);
          this.closes();
          this.adm.showMessage('Lead details updated successfully', 'success', 1);
        },
        (err) => {
          console.error(err);
          // Handle error messages for different fields
          if (err.status === 400) {
            if (err.error === 'Company name already exists. Please enter a unique company name.') {
              this.adm.showMessage('Company name already exists. Please enter a unique company name.', 'Warning', 3);
            } else if (err.error === 'Email address already exists. Please enter a unique email address.') {
              this.adm.showMessage('Email address already exists. Please enter a unique email address.', 'Warning', 3);
            } else if (err.error === 'Phone number already exists. Please enter a unique phone number.') {
              this.adm.showMessage('Phone number already exists. Please enter a unique phone number.', 'Warning', 3);
            } else if (err.error === 'A lead with the same first name and last name already exists.') {
              this.adm.showMessage('A lead with the same first name and last name already exists.', 'Warning', 3);
            } else {
              this.adm.showMessage(err.error || 'Failed to update lead details', 'Error', 2);
            }
          } else {
            this.adm.showMessage('Failed to update lead details', 'Error', 2);
          }
        }
      );
    } else {
       if (this.checkvalueforcontact() ){
      this.admusrservice.SaveCRMLead(this.leadcreateform).subscribe(
        (res) => {
          console.log(res);
          this.closes();
          this.adm.showMessage('Lead details saved successfully', 'success', 1);
        },
        (err) => {
          console.error(err);
          // Handle error messages for different fields
          if (err.status === 400) {
            if (err.error === 'Company name already exists. Please enter a unique company name.') {
              this.adm.showMessage('Company name already exists. Please enter a unique company name.', 'Warning', 3);
            } else if (err.error === 'Email address already exists. Please enter a unique email address.') {
              this.adm.showMessage('Email address already exists. Please enter a unique email address.', 'Warning', 3);
            } else if (err.error === 'Phone number already exists. Please enter a unique phone number.') {
              this.adm.showMessage('Phone number already exists. Please enter a unique phone number.', 'Warning', 3);
            } else if (err.error === 'A lead with the same first name and last name already exists.') {
              this.adm.showMessage('A lead with the same first name and last name already exists.', 'Warning', 3);
            } else {
              this.adm.showMessage(err.error || 'Failed to save lead details', 'Error', 2);
            }
          } else {
            this.adm.showMessage('Failed to save lead details', 'Error', 2);
          }
        }
      
      );
    
    }
  }
  }
}

checkvalueforcontact(){
  if(this.leadcreateform.firstName=='')
    {
      this.adm.showMessage('Contact First name is required','Warning',3);
      return;
    }
   else if(this.leadcreateform.lastName=='')
    {
        this.adm.showMessage('Contact Last name is required','Warning',3);
        return;
    }
    else if(this.leadcreateform.email=='')
    {
        this.adm.showMessage('Contact Email is required','Warning',3);
         return;
    }

    else if(this.leadcreateform.mobile=='')
    {
        this.adm.showMessage('Contact mobile is required','Warning',3);
        return;
    }
  
    return true

}




checkValueForLead(){
  console.log(this.leadcreateform);
    if(this.leadcreateform.lead_owner<1){
      this.adm.showMessage('Lead Owner not selected','Warning',3);
      return;
    }
    if(this.leadcreateform.lead_source<1){
      this.adm.showMessage('Lead Source not selected','Warning',3);
      return;
    }
    if(this.leadcreateform.lead_status<1){
      this.adm.showMessage('Lead Status not selected','Warning',3);
      return;
    }
    if(this.leadcreateform.company=='')
    {
      this.adm.showMessage('company name is required','Warning',3);
      return;
    }
    if(this.leadcreateform.first_name=='')
    {
      this.adm.showMessage('First name is required','Warning',3);
      return;
    }
    if(this.leadcreateform.business_email=='')
    {
      this.adm.showMessage('Email is required','Warning',3);
      return;
    }
    if(!this.leadcreateform.phonenumber)
    {
      this.adm.showMessage('Phone is required','Warning',3);
      return;
    }
    if(!this.leadcreateform.country)
    {
      this.adm.showMessage('Country is required','Warning',3);
      return;
    }
    if(!this.leadcreateform.state)
    {
      this.adm.showMessage('State is required','Warning',3);
      return;
    }
    if(!this.isValidEmail(this.leadcreateform.business_email))
    {
      this.adm.showMessage('Enter Valid email','Warning',3);
      return;
    }
    if(this.leadcreateform.secondary_email.length > 0 &&  !this.isValidEmail(this.leadcreateform.secondary_email))
    {
      this.adm.showMessage('Enter Valid Secondry email','Warning',3);
      return;
    }
    
    return true
}
isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
ContactCheck(){
  console.log(this.contactForm);
  if(this.contactForm.firstName==""){
    this.adm.showMessage('First Name is Required','Warning',3);
    return;
  }
  if(this.contactForm.lastName==""){
    this.adm.showMessage('Last Name is Required','Warning',3);
    return;
  }
  if(this.contactForm.email==""){
    this.adm.showMessage('Email is Required','Warning',3);
    return;
  }
  if(!this.contactForm.mobile){
    this.adm.showMessage('Mobile is Required','Warning',3);
    return;
  }
  return true
}
  openTab(str:any){
    if(str=='lead'){
      this.lead=true;
      this.contact=false;
      this.calllog=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.leadbtn="active";
      this.contactbtn="";
      this.calllogbtn="";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
    }
    if(str=='contact'){
      this.lead=false;
      this.contact=true;
      this.calllog=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.leadbtn="";
      this.calllogbtn="";
      this.contactbtn="active";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
     }
     if(str=='calllog'){
      this.lead=false;
      this.contact=false;
      this.calllog=true;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.leadbtn="";
      this.contactbtn="";
      this.calllogbtn="active";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
     }
     if(str=='events'){
      this.lead=false;
      this.contact=false;
      this.calllog=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=true;
      this.reminders=false;
      this.documents=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="active";
      this.remindersbtn="";
      this.documentsbtn="";
     }
     if(str=='reminders'){
      this.lead=false;
      this.contact=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=true;
      this.documents=false;
      this.calllog=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="active";
      this.calllogbtn="";
      this.documentsbtn="";
     }
     if(str=='enquiry'){
      this.lead=false;
      this.contact=false;
      this.enquiry=true;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.calllog=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="active";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
      this.calllogbtn="";
     }
     if(str=='quotation'){
      this.lead=false;
      this.contact=false;
      this.enquiry=false;
      this.quotation=true;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.calllog=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="";
      this.quotationbtn="active";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
      this.calllogbtn="";
     }
     if(str=='orders'){
      this.lead=false;
      this.contact=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=true;
      this.events=false;
      this.reminders=false;
      this.documents=false;
      this.calllog=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="active";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="";
      this.calllogbtn="";
     }
     if(str=='documents'){
      this.lead=false;
      this.contact=false;
      this.enquiry=false;
      this.quotation=false;
      this.orders=false;
      this.events=false;
      this.reminders=false;
      this.documents=true;
      this.calllog=false;
      this.leadbtn="";
      this.contactbtn="";
      this.enquirybtn="";
      this.quotationbtn="";
      this.ordersbtn="";
      this.eventsbtn="";
      this.remindersbtn="";
      this.documentsbtn="active";
      this.calllogbtn="";
     }
  }
  // Quotation form
  public material: any = {
    recordId: 0,
    sno: 0,
    itemId: 0,
    itemName: "",
    itemDescription: 0,
    qty: 0,
    um: 0,
    leaddays: 0,
    branchId: 0,
    customerCode: 0,
    value: 0,
    discount: 0,
    rate: 0,
    discount_percent: 0,
    lead_id: 0,
    customerId: 0,
    tax: 0,
  };
orderidform:any={
  lead_id:0,
  customerCode:0,
  branchId:'',
}
orderForm: any = {
  recordId:0,
  sno:0,
  itemid:0,
  itemDescription:'',
  itemName: '',
  qty: null,
  um: '',
  rat: null,
  discPer: null,
  reqdBy: null,
  tax:null,
  
  discount:null,
  taxes:null,
 
  delivery_date:null,
  order_description:'',
  mode_of_payment:0,
  order_status:0,
branchid:'',
customerCode:0,
lead_id:0,
customer_id:0
};
itemList:any;
  getinvmaterials() {
    debugger;
    
    var usr = this.adm.getUserCompleteInformation().usr;
  
    console.log('User Information:', usr);
    this.quotationForm.branchId = usr.bCode;
    this.quotationForm.customerCode = usr.cCode;
  
    console.log('Quotation Form:', this.quotationForm);
  
    this.inv.getInventoryItems().subscribe(
      (res) => {
        console.log('Material List:', res); 
        this.itemList = res;
      },
      (error) => {
        //console.error('Error fetching mateials:', error); 
      }
    );
  }
  // lstleadowner:any;
  // getcrmleadowner(){
  //   var usr=this.adm.getUserCompleteInformation().usr;
  //   this.leadcreateform.branch_id=usr.bCode;
  //   this.leadcreateform.customer_code=usr.cCode;
  //   this.admusrservice.getcrmleadowner(this.leadcreateform).subscribe(res=>{
  //     this.lstleadowner=res;
  //    })
  // }
  saveleadEnquiryData(){
    debugger;
    if(this.saveEnquirycheck()){
    this.material.lead_id=this.leadid;
      var usr = this.adm.getUserCompleteInformation().usr;
      this.material.branchId = usr.bCode;
      this.material.customercode = usr.cCode;
      // Save new event
      this.acc.Savecrmleadenquiry(this.material).subscribe(
        (res: any) => {
          console.log(res);
         
          this.getcrmleadenquiry(); // Refresh the events
          this.toastr.success('Enquiry created successfully!'); // Show success message
        },
        (error) => {
         // this.toastr.error('An error occurred while saving the Enquiry. Please try again.');
          //console.error('Save Event error:', error);
        }
      );
    }
  }
  lstleadenquiry:any;
  getcrmleadenquiry(){
    this.enquirybyidform.lead_id=this.leadid;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.enquirybyidform.branchid=usr.bCode;
    this.enquirybyidform.customercode=usr.cCode;
    this.acc.Getcrmleadenquiry(this.enquirybyidform).subscribe(res=>{
      this.lstleadenquiry=res;
     })
  }
  lstleadcountry:any;
  GetActiveCountries(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branch_id=usr.bCode;
    this.leadcreateform.customer_code=usr.cCode;
    this.admusrservice.GetActiveCountries(usr).subscribe(res=>{
      this.lstleadcountry=res;
     })
  }
  lstleadstates:any;
  GetTotalStates(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branch_id=usr.bCode;
    this.leadcreateform.customer_code=usr.cCode;
    this.admusrservice.GetTotalStates(usr).subscribe(res=>{
      this.lstleadstates=res;
     })
  }
  lstleadsource:any;
  getcrmleadsource(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branchid=usr.bCode;
    this.leadcreateform.customercode=usr.cCode;
    this.admusrservice.getcrmleadsource(this.leadcreateform).subscribe(res=>{
      this.lstleadsource=res;
     })
  }
  lstleadtitle:any;
  getcrmleadtitle(){
    this.admusrservice.GetAllcrmleadtitles().subscribe(res=>{
      this.lstleadtitle=res;
     })
  }
  lstcrmindustry:any;
  getcrmindustry(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branchid=usr.bCode;
    this.leadcreateform.customercode=usr.cCode;
    this.admusrservice.GetAllCrmindustry(this.leadcreateform).subscribe(res=>{
      this.lstcrmindustry=res;
     })
  }
  lstcrmleadstage:any;
  getData(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branchId=usr.bCode;
    this.leadcreateform.customerCode=usr.cCode;
    this.admusrservice.getcrmleadstage(this.leadcreateform).subscribe((res:any)=>{
      console.log(res);
      this.lstcrmleadstage=res
     })
    
  }
  lstleadstatus:any;
  getcrmleadstatus(){
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branchid=usr.bCode;
    this.leadcreateform.customercode=usr.cCode;
    this.admusrservice.getcrmleadstatus(this.leadcreateform).subscribe(res=>{
      this.lstleadstatus=res;
     })
  }
  close(){
    this.router.navigate(["/crm/LeadsListing"]);
  }
  getLeadsbyid(): void {
    this.spinner.show(); // Show spinner while loading data
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadbyidform.id=this.leadid;
    this.leadbyidform.branch_id=usr.bCode;
    this.leadbyidform.customer_code=usr.cCode;
    debugger;
    this.acc.GetCRMAllLeadsById(this.leadbyidform).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        
        this.leadcreateform.company=res[0].company;
        this.leadcreateform.first_name=res[0].first_name;
        this.leadcreateform.last_name=res[0].last_name;
        this.leadcreateform.lead_owner=res[0].lead_owner;
        this.leadcreateform.title=res[0].title;
        this.leadcreateform.business_email=res[0].business_email;
        this.leadcreateform.phonenumber=res[0].phonenumber;
        this.leadcreateform.fax=res[0].fax;
        this.leadcreateform.alternate_number=res[0].alternate_number;
        this.leadcreateform.website=res[0].website;
        this.leadcreateform.lead_source=res[0].lead_source;
        this.leadcreateform.lead_status=res[0].lead_status;
        this.leadcreateform.industry=res[0].industry;
        this.leadcreateform.numberofemployees=res[0].numberofemployees;
        this.leadcreateform.annual_revenue=res[0].annual_revenue;
        this.leadcreateform.rating=res[0].rating;
        this.leadcreateform.emailoutputformat=res[0].emailoutputformat;
        this.leadcreateform.skypeid=res[0].skypeid;
        this.leadcreateform.secondary_email=res[0].secondary_email;
        this.leadcreateform.twitter=res[0].twitter;
        this.leadcreateform.city=res[0].city;
        this.leadcreateform.state=res[0].state;
        this.leadcreateform.street=res[0].street;
        this.leadcreateform.zipcode=res[0].zipcode;
        this.leadcreateform.country=res[0].country;
        this.leadcreateform.description=res[0].description;
        this.leadcreateform.id=res[0].id;
        this.leadcreateform.lead_stage=res[0].lead_stage;
        // Store the leads in the component
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
       // console.error('Error fetching leads:', error); // Log any errors
        //this.toastr.error('Error fetching leads'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }

  

  //////////////////////////////////////////Events/////////////////////////////////////////////////////////


  open: number = 1; // 1 for listing, 2 for form
  event: any; // Events list
  currentEvent: any = { id: 0, EventTitle: '', EventTime: '', EventGuests: '', MeetingLocation: '',leadid:0,branchid:'',customercode:'' };
  id: any;




  // Open the Create Event form
  openCreateEvent() {
    this.open = 2;
    this.resetForm();
  }

  // Close the form and go back to the listing
  closeForm() {
    this.open = 1;
    this.resetForm();
  }

  // Reset the current event form
  resetForm() {
    this.currentEvent = { id: 0, EventTitle: '', EventTime: '', EventGuests: '', MeetingLocation: '' };
  }

  // ngOnInit(): void {
  //   this.getEvents(); // Call the getEvents method to fetch data
  // }

  neweventform:any={
    leadid:0,
    branchid:'',
    customercode:'',
  }
  getEvents(): void {
    this.spinner.show(); // Show spinner while loading data
    var usr = this.adm.getUserCompleteInformation().usr;
    this.neweventform.branchid = usr.bCode;
    this.neweventform.customercode = usr.cCode;
     
    this.neweventform.leadid=this.leadid;
    this.crm.getAllEvent(this.neweventform).subscribe(
      (res) => {
        console.log('API Response:', res); // Check the response here
        if (Array.isArray(res)) {
          this.event = res; // Store the events in the component if the response is an array
        } else {
          console.error('Expected an array of events, but received:', res);
        //  this.toastr.error('Error: Invalid data format received.');
        }
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching events:', error); // Log any errors
       // this.toastr.error('Error fetching events'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }

  // Save a new or edited event
  saveEvent() {
    if(this.saveEventcheck()){
    if (this.currentEvent.id > 0) { // Check if we're updating an existing event
      // Call the update service
      var usr = this.adm.getUserCompleteInformation().usr;
      this.currentEvent.branchid = usr.bCode;
      this.currentEvent.customercode = usr.cCode;
       
      this.currentEvent.leadid=this.leadid;
      this.currentEvent.recordId = this.currentEvent.id; // Optional: You may need to use the actual property for ID matching
     
      this.crm.updateEvent(this.currentEvent).subscribe(
        (response) => {
          console.log(response);
          this.currentEvent = { id: 0, EventTitle: '', EventTime: '', EventGuests: '', MeetingLocation: '' }; // Reset form after successful save
          this.open = 1; // Show the event list again
          this.getEvents(); // Refresh the event list
          this.toastr.success('Event updated successfully!'); // Show success message
        },
        (error) => {
         // this.toastr.error('Error updating event');
          console.error('Update Event error:', error);
        }
      );
    } else {
      this.currentEvent.leadid=this.leadid;
      var usr = this.adm.getUserCompleteInformation().usr;
      this.currentEvent.branchId = usr.bCode;
      this.currentEvent.customercode = usr.cCode;
      // Save new event
      this.crm.createEvent(this.currentEvent).subscribe(
        (res: any) => {
          console.log(res);
          this.currentEvent = { id: null, EventTitle: '', EventTime: '', EventGuests: '', MeetingLocation: '' }; // Reset form after successful save
          this.open = 1; // Show the event list again after saving
          this.getEvents(); // Refresh the events
          this.toastr.success('Event created successfully!'); // Show success message
        },
        (error) => {
         // this.toastr.error('An error occurred while saving the event. Please try again.');
          console.error('Save Event error:', error);
        }
      );
    }
  }
  }

// Method to edit an existing event
editEvent(eventId: any): void {
  this.spinner.show(); // Show spinner while fetching data
  this.crm.getEventById(eventId).subscribe(
    (res: any) => {
      // Assuming `res` contains the event data
      this.currentEvent = {
        id: res.id,
        EventTitle: res.eventTitle,
        EventTime: res.eventTime,
        EventGuests: res.eventGuests,
        MeetingLocation: res.meetingLocation
      };
      this.id = eventId;
      this.open = 2; // Open the form section for editing
      this.spinner.hide(); // Hide the spinner once data is loaded
    },
    (error) => {
      console.error('Error fetching event details:', error);
     // this.toastr.error('Error fetching event details');
      this.spinner.hide(); // Hide the spinner in case of error
    }
  );
}

  // Method to delete an event
  deleteEvent(eventId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this event?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.spinner.show(); // Show spinner during delete operation
        this.crm.deleteEvent(eventId).subscribe(
          (res) => {
            console.log('Event deleted successfully', res);
            this.getEvents(); // Refresh the list after deletion
            this.toastr.success('Event deleted successfully');
            this.spinner.hide();
          },
          (error) => {
            console.error('Error deleting event', error);
           // this.toastr.error('An error occurred while deleting the event. Please try again.');
            this.spinner.hide(); // Hide spinner if error occurs
          }
        );
      }
    });
  }




  //////////////////////////////////////////////Reminders///////////////////////////////////////////////////




  newReminder: any = {
    recordId: 0,               // Reminder ID, default is 0
    reminderName: '',    // Name of the reminder, default is an empty string
    reminderDate: '',    // Date of the reminder, default is an empty string
    reminderTime: '',    // Time of the reminder, default is an empty string
    notes: ''            // Notes for the reminder, default is an empty string
    ,leadid:0
  };


 
  reminder: any;
  // toastr: any;
  // id: any;



  // constructor(
  //   private crm: CrmDiscountListService,
  //   private adm: AdminGeneralInfoService,
  //   private router: Router,
  //   private spinner: NgxSpinnerService,
  //   private fb: FormBuilder, // FormBuilder to create forms
  //   private par: PartyDetailsService,
  // ) { }

  // ngOnInit(): void {
  //   this.getReminders();
  // }
newreminderform:any={
  leadid:0,
  branchId:'',
  customerCode:''
}
  getReminders(): void {
    this.spinner.show(); // Show spinner while loading data
    
    var usr = this.adm.getUserCompleteInformation().usr;
    this.newreminderform.leadid=this.leadid;
    this.newreminderform.branchId = usr.bCode;
    this.newreminderform.customerCode = usr.cCode;
    this.crm.getAllReminders(this.newreminderform).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.reminder = res; // Store the reminders in the component
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching reminders:', error); // Log any errors
        //this.toastr.error('Error fetching reminders'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }


  // Method to edit an existing reminder
  editReminder(recordId: any) {
    this.spinner.show(); // Show spinner while fetching data
    this.crm.getReminderById(recordId).subscribe(
      (res: any) => {
        // Assuming `res` contains the reminder data
        this.newReminder = {
          id: res.recordId,
          reminderName: res.reminderName,
          reminderDate: res.reminderDate,
          reminderTime: res.reminderTime,
          notes: res.notes
        };
        this.newReminder.id = recordId;
        this.id = recordId; // Set the ID for updating
        this.open = 2; // Open the form section for editing
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching reminder details:', error);
       // this.toastr.error('Error fetching reminder details'); // Show error message
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }

  // Submit the form to either update an existing reminder or add a new one
  saveReminder() {
    if(this.saveRemindercheck()){
    // this.newReminder.reminderTime=
    if (this.newReminder.id > 0) { // Checking if we're updating an existing reminder
      // Call the update service
      var usr = this.adm.getUserCompleteInformation().usr;
    this.newReminder.branchId = usr.bCode;
    this.newReminder.customerCode = usr.cCode;
      this.newReminder.leadid=this.leadid;
    
      this.newReminder.recordId=this.newReminder.id;
      this.crm.updateReminder(this.newReminder).subscribe(
        (response) => {
          console.log(response);
          this.newReminder = {}; // Reset form after successful save
          this.open = 1; // Show the list again
          this.getReminders(); // Refresh the reminders
          this.toastr.success("Remainder Details Saved Successfully","success");
        },
        (error) => {
         // this.toastr.error('Error updating reminder');
          console.error('Update Reminder error:', error);
        }
      );
    } else {
      this.newReminder.leadid=this.leadid;
      var usr = this.adm.getUserCompleteInformation().usr;
      this.newReminder.branchId = usr.bCode;
      this.newReminder.customerCode = usr.cCode;
      // Save new reminder
      this.crm.createReminder(this.newReminder).subscribe(
        (res: any) => {
          console.group(res);
          this.newReminder = {}; // Reset form after successful save
          this.open = 1; // Redirect to the listing page after saving
          this.getReminders(); // Refresh the reminders
          this.toastr.success("Remainder Details Saved Successfully","success");
        },
        (error) => {
          //this.toastr.error('An error occurred while saving the reminder. Please try again.');
          console.error('Save Reminder error:', error);
        }
      );
    }
  }
  }

  // Method to delete a reminder
  deleteReminder(recordId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this reminder?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.spinner.show(); // Show spinner during delete operation
        this.crm.deleteReminder(recordId).subscribe(
          (res) => {
            console.log('Reminder deleted successfully', res);
            this.getReminders(); // Refresh the list after deletion
            this.toastr.success('Reminder deleted successfully');
            this.spinner.hide();
          },
          (error) => {
            console.error('Error deleting reminder', error);
           // this.toastr.error('An error occurred while deleting the reminder. Please try again.');
            this.spinner.hide(); // Hide spinner if error occurs
          }
        );
      }
    });
  }


  openReminderForm() {
    this.open = 2;
  }

  closeForms() {
    this.open = 1;
  }


  resetForms() {
    this.newReminder = {
      recordId: 0,             // Reset to default ID
      reminderName: '',   // Clear reminder name
      reminderDate: '',   // Clear reminder date
      reminderTime: '',   // Clear reminder time
      notes: ''           // Clear notes
    };
  }




////////////////////////////////////////////////callLogs////////////////////////////////////////////////

  
  callLogForm: any = {
    id:0,
    leadid:0,
    contactId: '',
    leadOwnerId: 0,
    callTypes: '',
    callDate: '',
    comments: '',
    callernotes:'',
    customernotes:'',
    reasonforcall:''
  };
  
isEditing: boolean = false; // Track whether the user is editing a call log



employeesList:any;
  opens = 1;
  callLogs: any;
  calltypeslist:any;
  // toastr: any;


  // constructor(private crm:CrmDiscountListService, 
  //   private adm:AdminGeneralInfoService,
  //   private router:Router,
  //   private  spinner:NgxSpinnerService,
  //   private fb: FormBuilder, // FormBuilder to create forms
  //   private par:PartyDetailsService,
  //   ) {}

  // ngOnInit() {
  //   this.getCallLogs();
  //   this.getCallTypes(); // Fetch call types when component initializes
  //   this.getHrdEmployees();
  // }


  

  getCallLogs(): void {
    this.spinner.show(); // Show spinner while loading data
    var usr = this.adm.getUserCompleteInformation().usr;
    this.callLogForm.branchId = usr.bCode;
    this.callLogForm.customerCode = usr.cCode;
    this.callLogForm.leadid=this.leadid;
    this.callLogForm.reasonforcall=0;
    this.crm.getAllCallLogs(this.callLogForm).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.callLogs = res; // Store the call logs in the component
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching call logs:', error); // Log any errors
       // this.toastr.error('Error fetching call logs'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }

  // Method to fetch HRD employees from the backend
getHrdEmployees(): void {
  this.par.getHrdEmployees().subscribe(
    (data) => {
      console.log(data);
      this.employeesList = data; // Assign fetched data to employeesList
    },
    (error) => {
      console.error('Error fetching HRD employees:', error); // Log error if any
    }
  );
}

    // Method to fetch call types from the backend
    getCallTypes(): void {
      this.crm.getAllCallTypes().subscribe(
        (data) => {
          this.calltypeslist = data; // Assign fetched data to calltypeslist
        },
        (error) => {
          console.error('Error fetching call types', error); // Log error if any
        }
      );
    }

    
      // Method to edit an existing call log
  editCallLog(callLogId: any) {
    this.spinner.show(); // Show spinner while fetching data
    this.crm.getCallLogById(callLogId).subscribe(
      (res: any) => {
        // Assuming `res` contains the call log data
        this.callLogForm = {
          id:res.id,
          contactId: res.contactId,
          leadOwnerId: res.leadOwnerId,
          callTypes: res.callTypes,
          callDate: res.callDate,
          comments: res.comments,
          callernotes:res.callernotes,
          customernotes:res.customernotes,
          reasonforcall:res.reasonforcall
        };
        this.id = callLogId; // Set the ID for updating
        this.open = 2; // Open the form section for editing
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching call log details:', error);
        this.toastr.error('Error fetching call log details');
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }



// id:any;
// Submit the form to either update an existing call log or add a new one
saveCallLog() {
  if(this.saveCallcheck()){
  if (this.callLogForm.id > 0) { // Checking if we're updating an existing log
    this.callLogForm.leadid=this.leadid;
      // Save new call log
      var usr = this.adm.getUserCompleteInformation().usr;
      this.callLogForm.branchId = usr.bCode;
      this.callLogForm.customerCode = usr.cCode;
      // Call the update service
      this.crm.updateCallLog(this.callLogForm).subscribe(
        (response) => {
          console.log(response);
          this.callLogForm = {}; // Reset form after successful save
          this.open = 1; // Show the list again
          this.toastr.success("Call Log Details Updated Successfully","success");
          this.getCallLogs(); // Refresh the logs
        },
        (error) => {
          this.toastr.error('Error updating call log');
          console.error('Update Call Log error:', error);
        }
      );
  } else {
  this.callLogForm.leadid=this.leadid;
      // Save new call log
      var usr = this.adm.getUserCompleteInformation().usr;
      this.callLogForm.branchId = usr.bCode;
      this.callLogForm.customerCode = usr.cCode;
      this.crm.createCallLog(this.callLogForm).subscribe(
          (res: any) => {
              this.callLogForm = {}; // Reset form after successful save
              this.open = 1; // Redirect to the listing page after saving
              this.getCallLogs();
              this.toastr.success("Call Log Details Saved Successfully","success");
          },
          (error) => {
              this.toastr.error('An error occurred while saving the call log. Please try again.');
              console.error('Save Call Log error:', error);
          }
      );
  }
}
}


   // Method to delete a call log
   deleteCallLog(callLogId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this call log?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.spinner.show(); // Show spinner during delete operation
        this.crm.deleteCallLog(callLogId).subscribe(
          (res) => {
            console.log('Call log deleted successfully', res);
            this.getCallLogs(); // Refresh the list after deletion
            this.toastr.success('Call log deleted successfully');
            this.spinner.hide();
          },
          (error) => {
            console.error('Error deleting call log', error);
            this.toastr.error('An error occurred while deleting the call log. Please try again.');
            this.spinner.hide(); // Hide spinner if error occurs
          }
        );
      }
    });
  }



  
 openCreateCallLog() {
  this.open = 2; // Show form section
  this.isEditing = false; // New entry, not editing
}
  

  // Function to close the form and go back to the call logs list
  closeFormss() {
    this.open = 1; // Set open to 1 to show the call logs list again
  }
  resetFormss() {
    this.callLogForm = {
      leadid:0,
      contactId: '',
      leadOwnerId: '',
      callTypes: '',
      callDate: '',
      comments: '',
      callernotes:'',
      customernotes:'',
      reasonforcall:''
    };
  }

  leadId: any
  saveContact() {
    var usr = this.admg.getUserCompleteInformation().usr;
    this.contactForm.branchId = usr.bCode;
    this.contactForm.customerCode = usr.cCode;
    this.contactForm.leadid = this.leadId;
    if (this.ContactCheck()) {
      if (this.contactForm.id > 0) {
        this.acc.updateContact(this.contactForm).subscribe(
          response => {
            this.resetcontact();
            this.getcontacts();
            this.contact = false;
            console.log('Enquiry updated successfully', response), this.contact;
            this.admg.showMessage('Contact updated successfully!', "success", 1);

          },
          error => {
            console.error('Error updating enquiry', error);
          }
        );
      } else {
        this.acc.saveContact(this.contactForm).subscribe(
          response => {
            this.resetcontact();
            this.getcontacts();
            console.log('Contact saved successfully', response);
            this.admg.showMessage('Contact saved successfully!', "success", 1);
          },
          error => {
            console.error('Error saving Contact', error);
          }
        );
      }
    }
  }
//   saveContact(){
//     var usr = this.adm.getUserCompleteInformation().usr;
//     this.contactForm.branchId = usr.bCode;
//     this.contactForm.customerCode = usr.cCode;
// this.contactForm.leadid=this.leadid;
// if(this.ContactCheck()){
//     if (this.contactForm.id > 0) {
//       this.admusrservice.updateContact(this.contactForm).subscribe(
//         response => {
//           this.resetcontact();
//           this.getcontacts();
//           console.log('Enquiry updated successfully', response);
//           this.adm.showMessage('Contact updated successfully!',"success",1);
         
//         },
//         error => {
//           console.error('Error updating enquiry', error);
//         }
//       );
//     } else {
//     this.admusrservice.saveContact(this.contactForm).subscribe(
//       response => {
//        this.resetcontact();
//        this.getcontacts();
//         console.log('Contact saved successfully', response);
//         this.adm.showMessage('Contact saved successfully!',"success",1);
          
        
//       },
//       error => {
//         console.error('Error saving Contact', error);
//       }
//     );
//   }
// }
// }
resetcontact(){
  this.contactForm.firstName= "",
  this.contactForm.lastName= "",
  this.contactForm.email= "",
  this.contactForm.mobile= 0,
  this.contactForm.designation= "",
  this.contactForm.location= ""
}
saveCallcheck(){
  console.log(this.callLogForm);
  if(!this.callLogForm.contactId){
    this.adm.showMessage('Contact is Required','Warning',3);
    return;
  }
  if(!this.callLogForm.reasonforcall){
    this.adm.showMessage('Reason for call is Required','Warning',3);
    return;
  }
  if(!this.callLogForm.callTypes){
    this.adm.showMessage('Call Types is Required','Warning',3);
    return;
  }
  if(!this.callLogForm.callernotes){
    this.adm.showMessage('Caller notes is Required','Warning',3);
    return;
  }
  if(!this.callLogForm.customernotes){
    this.adm.showMessage('Customer notes is Required','Warning',3);
    return;
  }
  return true
}
saveEventcheck(){
  console.log(this.currentEvent);
  if(!this.currentEvent.EventTitle){
    this.adm.showMessage('Event Title is Required','Warning',3);
    return;
  }
  if(!this.currentEvent.EventTime){
    this.adm.showMessage('Event Time is Required','Warning',3);
    return;
  }
  return true
}
saveRemindercheck(){
  console.log(this.newReminder);
  if(!this.newReminder.reminderName){
    this.adm.showMessage('Reminder Name is Required','Warning',3);
    return;
  }
  if(!this.newReminder.reminderDate){
    this.adm.showMessage('Reminder Date is Required','Warning',3);
    return;
  }
  if(!this.newReminder.reminderTime){
    this.adm.showMessage('Reminder Time is Required','Warning',3);
    return;
  }
  if(!this.newReminder.notes){
    this.adm.showMessage('Notes is Required','Warning',3);
    return;
  }
  return true
}
saveEnquirycheck(){    
  console.log(this.material);
  if(!this.material.itemId){
    this.adm.showMessage('Material is Required','Warning',3);
    return;
  }
  if(!this.material.qty){
    this.adm.showMessage('qty is Required','Warning',3);
    return;
  }
  if(!this.material.um){
    this.adm.showMessage('Um is Required','Warning',3);
    return;
  }
  if(!this.material.rate){
    this.adm.showMessage('Rate is Required','Warning',3);
    return;
  }
  if(!this.material.discount){
    this.adm.showMessage('Discount is Required','Warning',3);
    return;
  }
  return true
}
saveQuotationcheck(){
  console.log(this.quotationForm);
  if(!this.quotationForm.itemName){
    this.adm.showMessage('Material is Required','Warning',3);
    return;
  }
  if(!this.quotationForm.qty){
    this.adm.showMessage('qty is Required','Warning',3);
    return;
  }
  if(!this.quotationForm.um){
    this.adm.showMessage('UOM is Required','Warning',3);
    return;
  }
  if(!this.quotationForm.rate){
    this.adm.showMessage('rate is Required','Warning',3);
    return;
  }
  if(!this.quotationForm.baseAmt){
    this.adm.showMessage('Base Amount is Required','Warning',3);
    return;
  }
  if(!this.quotationForm.totalAmt){
    this.adm.showMessage('Total Amount is Required','Warning',3);
    return;
  }
  return true
}
saveorderscheck(){
  console.log(this.orderForm);
  if(!this.orderForm.itemid){
    this.adm.showMessage('Material is Required','Warning',3);
    return;
  }
  if(!this.orderForm.qty){
    this.adm.showMessage('Quantity is Required','Warning',3);
    return;
  }
  if(!this.orderForm.rat){
    this.adm.showMessage('Rate is Required','Warning',3);
    return;
  }
  if(!this.orderForm.um){
    this.adm.showMessage('UOM is Required','Warning',3);
    return;
  }
  if(!this.orderForm.discPer){
    this.adm.showMessage('Discocunt is Required','Warning',3);
    return;
  }
  if(!this.orderForm.totalAmt){
    this.adm.showMessage('Total Amount is Required','Warning',3);
    return;
  }
  return true
} 

// getcontacts() {
//   debugger;
   
//   var usr = this.adm.getUserCompleteInformation().usr;

//   this.contactForm = {
//     branchId: usr.bCode,
//     customerCode: usr.cCode,
//   };

//   this.leadcontact.getContact().subscribe(
//     (res) => {
//       this.contactlst = res;
//     },
//     (error) => {
//       console.error('Error fetching enquiries:', error);
//     }
//   );
// }

getcontacts() {
  debugger;
  var usr = this.adm.getUserCompleteInformation().usr;

  console.log('User Information:', usr);
  this.contactForm.branchId = usr.bCode;
    this.contactForm.customerCode = usr.cCode;
this.contactForm.leadid=this.leadid;
  // this.contactForm = {
  //   branchId: usr?.bCode || '',
  //   customerCode: usr?.cCode || '',
  // };

  console.log('Contact Form:', this.contactForm);

  this.admusrservice.getContact(this.contactForm).subscribe(
    (res) => {
      console.log('Contact List:', res); // Log the response
      this.contactlst = res;
    },
    (error) => {
      console.error('Error fetching contacts:', error); // Log errors
    }
  );
}
public callforreasonform:any={
  id:0,
  description:'',
  branch_id:'',
  customer_code:'',

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
formData = {
  id:0,
  description: "",
  recordId: 0,
  customerCode: 0,
  branchId: ""
}
userdetails:any;
allrecords:any;
getcityData(){
  this.userdetails = this.adm.getUserCompleteInformation();
  this.formData.branchId = this.userdetails.usr.bCode
  this.formData.customerCode = this.userdetails.usr.cCode
  this.admusrservice.getcrmleadcity(this.formData).subscribe((res:any)=>{
    console.log(res);
    this.allrecords=res
   })
  
}
// id:any;
// edit(data: any) {
//   this.contactForm.id = data; // Assuming 'data' contains the recordId
//   this.id=data;
//   this.leadcontact.getContactById(this.contactForm).subscribe(
//     (res: any) => {
//       var det:any=res 
//         this.contactForm = {
//         id:det.id,
//         firstName:det.firstName,
//         lastName:det.lastName,
//         mobile:det.mobile,
//         email:det.email,
//         designation:det.designation,
//         location:det.location
          
//         };
      
//         this.id = this.contactForm.recordId; // Save the record ID
//         console.log('Editing contacts:', this.contactForm);
       
//     },
//     (error) => {
//       alert('An error occurred while fetching customer.');
//       console.error('Fetch error', error);
//     }
//   );
// }
editcontact(data: any) {
 
  this.contactForm.id = data;
  console.log('Editing contact with ID:', data);

  
  this.admusrservice.getContactById(this.contactForm).subscribe(
    (res: any) => {
      console.log('Response from getContactById:', res);
      this.contactForm = {
        id: res.id,
        firstName: res.firstName,
        lastName: res.lastName,
        mobile: res.mobile,
        email: res.email,
        designation: res.designation,
        location: res.location,
     
      };

      
      console.log('Contact Form after fetching details:', this.contactForm);
    },
    (error) => {
      alert('An error occurred while fetching the contact details.');
      console.error('Error fetching contact details:', error);
    }
  );
}


delete(data: any) {
  debugger;
  this.contactForm.id = data;

  if (confirm('Are you sure you want to delete this contact?')) {
    this.admusrservice.deleteContact(this.contactForm.id).subscribe(
      (res: any) => {
        console.log('Contact deleted successfully', res);
      this.getcontacts();
        // Remove the deleted contact from the list
        this.contactlst = this.contactlst.filter(contact => contact.id !== this.contactForm.Id);
this.adm.showMessage('Contact deleted successfully!',"success",1)
        // Show a success message (Optional: Use Toastr or Alert)
       
      },
      error => {
        console.error('Error deleting Contact', error);
        alert('An error occurred while deleting the Contact. Please try again.');
      }
    );
  }
  this.getcontacts();
}
// Quotation form

quotationForm: any = {
  id:0,
  itemName: '',
  qty: "",
  um: '',
  leadDays: "",
  rate: "",
  disper: "",
  tax: "",
  baseAmt: "",
  discount: "",
  taxes: "",
  totalAmt: "",
  itemDescription: '',
  leadid:0
};


saveQuotation(){
  var usr = this.adm.getUserCompleteInformation().usr;
  this.quotationForm.branchId = usr.bCode;
  this.quotationForm.customerCode = usr.cCode;
 
  this.quotationForm.leadid=this.leadid;
  if(this.saveQuotationcheck()){
  if (this.quotationForm.id > 0) {
    this.acc.updateQuotation(this.quotationForm).subscribe(
      response => {
        console.log('Quotation updated successfully', response);
        alert('Quotation updated successfully!');
       
      },
      error => {
        console.error('Error updating Quotation', error);
      }
    
    );
    this.ngOnInit();
  } else {
  this.acc.saveQuotation(this.quotationForm).subscribe(
    response => {
      console.log('Quotation saved successfully', response);
      alert('Quotation saved successfully!');
      this.ngOnInit();
    },
    error => {
      console.error('Error saving Quotation', error);
    }
  );
}
  }
}
quotationlst:any;
getQuotations() {
  debugger;
  var usr = this.adm.getUserCompleteInformation().usr;
 this.quotationForm.leadid=this.leadid;
  console.log('User Information:', usr);
  this.quotationForm.branchId = usr.bCode;
  this.quotationForm.customerCode = usr.cCode;
  // Make sure `itemName` is a valid ID or remove the `+` if it's not a number
  //this.quotationForm.itemName = +this.quotationForm.itemName; // Ensure this is correct
  
  console.log('Quotation Form:', this.quotationForm);

  this.acc.getQuotation(this.quotationForm).subscribe(
    (res) => {
      console.log('Quotation List:', res); // Log the response
      this.quotationlst = res;
    },
    (error) => {
      console.error('Error fetching quotation:', error); // Log errors
    }
  );
}


editQuotation(data: any) {
  this.quotationForm.id=data;

  this.acc.getQuotationById(this.quotationForm).subscribe(
      (res:any) => {
      
    
        var det:any=res
        this.contactForm = {
         id:det.id,
         itemName:det.itemName,
        };
        this.id=this.quotationForm.id;
          console.log('Editing Quotation:', this.contactForm);
      },
      (error) => {
       
          alert('An error occurred while fetching product details.');
          console.error('Fetch error', error);
      }
  );

}




onItemChange() {

  debugger;
  var selectedItem = this.itemList.find(item => item.recordId === this.quotationForm.itemName);

  if (selectedItem) {
    // Auto-populate the fields based on the selected item
    this.quotationForm.um = selectedItem.uom;
    this.quotationForm.leadDays = selectedItem.leadDays;
    this.quotationForm.rate = selectedItem.rate;
    
    // Optional: Calculate the base amount (if needed)
    if (this.quotationForm.qty != null) {
      this.quotationForm.baseAmt = this.quotationForm.qty * selectedItem.rate;
    }
  }
}
saveorders() {
 if(this.saveorderscheck()){
    this.orderForm.lead_id=this.leadid;
    var usr = this.adm.getUserCompleteInformation().usr;
    this.orderForm.branchId = usr.bCode;
    this.orderForm.customercode = usr.cCode;
    // Save new event
    this.acc.Savecrmleadorders(this.orderForm).subscribe(
      (res: any) => {
        console.log(res);
      
       
        this.toastr.success('Order created successfully!'); // Show success message
      },
      (error) => {
        this.toastr.error('An error occurred while saving the event. Please try again.');
        console.error('Save Event error:', error);
      }
    );
 }
}
orderslst:any;
getcrmorders() {
  debugger;
  var usr = this.adm.getUserCompleteInformation().usr;
 this.orderidform.lead_id=this.leadid;
  console.log('User Information:', usr);
  this.orderidform.branchId = usr.bCode;
  this.orderidform.customerCode = usr.cCode;
  // Make sure `itemName` is a valid ID or remove the `+` if it's not a number
  //this.quotationForm.itemName = +this.quotationForm.itemName; // Ensure this is correct
  
  console.log('Quotation Form:', this.quotationForm);

  this.acc.Getcrmleadorder(this.orderidform).subscribe(
    (res) => {
      console.log('Quotation List:', res); // Log the response
      this.orderslst = res;
    },
    (error) => {
      console.error('Error fetching quotation:', error); // Log errors
    }
  );
}

closes() {
  if (this.telecall) {
    // this.router.navigate(['/crm/crmleadcustomer?lead=1']);
    this.router.navigate(["/crm/crmleadcustomer"], { queryParams: { lead: this.telecall } });
  }
  else {
    this.router.navigate(['/crm/LeadsListing']);
  }
}

employees: any;

  loadEmployees(): void {
    debugger;
    this.hrd.getHRDEmployeesbyDepartment().subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees)
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  
}
