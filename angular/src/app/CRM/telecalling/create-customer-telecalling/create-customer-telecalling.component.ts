import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create-customer-telecalling',
  templateUrl: './create-customer-telecalling.component.html',
  styleUrls: ['./create-customer-telecalling.component.scss']
})
export class CreateCustomerTelecallingComponent implements OnInit {

  Obj:any;
  public leadcustenable:any=false;
  public custenable:any=false;
  constructor(private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService,
    private par: PartyDetailsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private act:ActivatedRoute,
    private spinner: NgxSpinnerService,
    private acc:AccAccountsService,
   private crm:CrmDiscountListService,
    private modalService: NgbModal
  ) { this.act.queryParams.subscribe(params => {
    this.Obj = params['lead'];
    debugger;
    if(this.Obj=="1"){
     this.leadcustenable=true;
    }
    else{
      this.custenable=true;
    }
  })}

  ngOnInit(): void {
  
  
    this.getLeads();
    this.getCallTypes();
    this.getcrmcallforreason();
  }
  public openNewEnquiry = false
  openEnquiryModal(customContent) {
    this.openNewEnquiry = true
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
   
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }
  public openNewQuotation = false
  openQuotationModal(customContent) {
    this.openNewQuotation = true
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
   
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }
  public openNewOrder = false
  openorderModal(customContent) {
    this.openNewOrder = true
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
   
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }
  public openNewevent = false
  eventmodal(customContent) {
    this.openNewevent = true
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
   
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }
  public openNewreminder = false
  remindermodal(customContent) {
    this.openNewreminder = true
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
   
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }
  saveCallLog(){

  }
  public leadformenable:any={
    leadcustenable:false,
    custenable:false
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
  getCallTypes(): void {
    this.userdetails = this.adm.getUserCompleteInformation();
    this.formData.branchId = this.userdetails.usr.bCode
    this.formData.customerCode = this.userdetails.usr.cCode
    this.acc.getcrmleadcalltypes(this.formData).subscribe((res:any)=>{
      
        this.calltypeslist = res; // Assign fetched data to calltypeslist
      },
      (error) => {
        console.error('Error fetching call types', error); // Log error if any
      }
    );
  }
  calltypeslist:any;
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
    reasonforcall:'',
    customer_id:0,
  };
  contactlst:any;
  contactForm: any = {
    id: 0,
    leadid:0,
    // leadName: '',
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    designation: "",
    location: "",
    customer_id:0
  };
  telecallingcustomerform:any={
    id:0,
    customer_id:0,
    lead_Id:0,
    contactid:'',
    reasonforcall:0,
    calltypes:0,
    branchid:'',
    customercode:0,
    callernotes:'',
    customernotes:'',
  }
  leadcust:any;
  fnleadcust(obj:any){
    debugger;
this.leadcust=obj.target.value;
this.getcontacts();
//this.onReasonChange()
  }
  savecustomerlog(){
    if(this.checkvaluevalidate()){
    var usr = this.adm.getUserCompleteInformation().usr;      
    this.telecallingcustomerform.branchId = usr.bCode;
      this.telecallingcustomerform.customerCode = usr.cCode;
      this.admusrservice.Savecrmtelecalldetails(this.telecallingcustomerform).subscribe(
        (res) => {       
          this.toastr.success("Customer Information Saved Successfully","success")
          this.router.navigate(['/crm/crmtelecalling'])
        },
        (error) => {
          console.error('Error fetching contacts:', error); // Log errors
        }
      );
    }
  }
  checkvaluevalidate(){
    if(this.telecallingcustomerform.customer_id=="")
      {
        this.adm.showMessage('Lead Name is required','Warning',3);
        return;
      }
     else if(this.telecallingcustomerform.contactid=="")
      {
          this.adm.showMessage('Contact Name  is required','Warning',3);
          return;
      }
      else if(this.telecallingcustomerform.reasonforcall=="")
      {
          this.adm.showMessage('Reason Call is required','Warning',3);
           return;
      }
  
      else if(this.telecallingcustomerform.calltypes=="")
      {
          this.adm.showMessage('Call Type is required','Warning',3);
          return;
      }
      else if(this.telecallingcustomerform.callernotes=='')
      {
          this.adm.showMessage('Caller Notes is required','Warning',3);
          return;
      }
      else if(this.telecallingcustomerform.customernotes=='')
      {
          this.adm.showMessage('Customer Notes is required','Warning',3);
          return;
      }
      return true
  }
  getcontacts() {
    debugger;
    var usr = this.adm.getUserCompleteInformation().usr;      
    this.contactForm.branchId = usr.bCode;
      this.contactForm.customerCode = usr.cCode;
      this.contactForm.customer_id=this.leadcust;
    this.admusrservice.getContact(this.contactForm).subscribe(
      (res) => {       
        this.contactlst = res;
      },
      (error) => {
        console.error('Error fetching contacts:', error); // Log errors
      }
    );
  }

  leads:any;
  public leadlisting:any={
    branch_id:'',
    customer_code:''
  }
  fnredirectlead(){
    this.router.navigate(["/crm/customercreate"])
  }

  getLeads(): void {
    this.spinner.show(); // Show spinner while loading data
    var usr=this.adm.getUserCompleteInformation().usr;
    this.leadlisting.branch_id=usr.bCode;
    this.leadlisting.customer_code=usr.cCode;
    this.acc.GetCRMAllCustomerLeads(this.leadlisting).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.leads = res; // Store the leads in the component
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching leads:', error); // Log any errors
        this.toastr.error('Error fetching leads'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }
  onReasonChange(customcontent,customquotation,customorder) {
    const selectedReason = this.telecallingcustomerform.reasonforcall;
    // if (selectedReason < 0) {
    //   if (this.telecallingcustomerform.customer_id > 0) {
    //     this.router.navigate(['/crm/crmcusmain/' + this.telecallingcustomerform.customer_id], { queryParams: { tab: Math.abs(selectedReason) } });
    //   }
    //   else {
    //     this.adm.showMessage('Customer is required', 'Warning', 3);
    //   }
    // }
    if (selectedReason < 0) {
    if(selectedReason=="-5"){
      this.openEnquiryModal(customcontent);
    }
    if(selectedReason=="-6"){
      this.openQuotationModal(customquotation);
    }
    if(selectedReason=="-7"){
      this.openorderModal(customorder);
    }
  }
  }
}
