import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customerview-calllog',
  templateUrl: './customerview-calllog.component.html',
  styleUrls: ['./customerview-calllog.component.scss']
})
export class CustomerviewCalllogComponent implements OnInit {


  leadId: any  
  newCalllog=false
  contactForm: any = {
    id: 0,
    leadid:0,
    customer_id:0,
    // leadName: '',
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    designation: "",
    location: ""
  };
  
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
  constructor(
    private route: ActivatedRoute,
    private adm:AdmUsersService,
    private admg:AdminGeneralInfoService,
    private acc:AccAccountsService,
    private toaster:ToastrService,
    private dis:CrmDiscountListService
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
  }  
  ngOnInit(): void {
    this.getcontacts();
    this.getCallTypes();
    this.getcrmcallforreason();
    this.getCallLogs();
  }
  contactlst:any;
getcontacts() {
  debugger;
  var usr = this.admg.getUserCompleteInformation().usr;

  console.log('User Information:', usr);
  this.contactForm.branchId = usr.bCode;
    this.contactForm.customerCode = usr.cCode;
this.contactForm.customer_id=this.leadId;
  

  console.log('Contact Form:', this.contactForm);

  this.acc.getContact(this.contactForm).subscribe(
    (res) => {
      console.log('Contact List:', res); // Log the response
      this.contactlst = res;
    },
    (error) => {
      console.error('Error fetching contacts:', error); // Log errors
    }
  );
}
callLogs:any;
  getCallLogs(): void {
  
    var usr = this.admg.getUserCompleteInformation().usr;
    this.callLogForm.branchId = usr.bCode;
    this.callLogForm.customerCode = usr.cCode;
    this.callLogForm.customer_id=this.leadId;
    this.callLogForm.reasonforcall=0;
    this.dis.GetAllCallLogsCustomer(this.callLogForm).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.callLogs = res; // Store the call logs in the component
       
      },
      (error) => {
        console.error('Error fetching call logs:', error); // Log any errors
       // this.toastr.error('Error fetching call logs'); // Show error message to the user
       // Hide the spinner in case of error
      }
    );
  }
  formData = {
    id:0,
    description: "",
    recordId: 0,
    customerCode: 0,
    branchId: ""
  }
  calltypeslist:any;
  userdetails:any;
    // Method to fetch call types from the backend
    getCallTypes(): void {
      this.userdetails = this.admg.getUserCompleteInformation();
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

    id:any;
      // Method to edit an existing call log
  editCallLog(callLogId: any) {
    // Show spinner while fetching data
    this.newCalllog=true;
    this.dis.getCallLogById(callLogId).subscribe(
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
       // Open the form section for editing
        // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching call log details:', error);
        this.toaster.error('Error fetching call log details');
        // Hide the spinner in case of error
      }
    );
  }
  saveCallcheck(){
    console.log(this.callLogForm);
    if(!this.callLogForm.contactId){
      this.admg.showMessage('Contact is Required','Warning',3);
      return;
    }
    if(!this.callLogForm.reasonforcall){
      this.admg.showMessage('Reason for call is Required','Warning',3);
      return;
    }
    if(!this.callLogForm.callTypes){
      this.admg.showMessage('Call Types is Required','Warning',3);
      return;
    }
    if(!this.callLogForm.callernotes){
      this.admg.showMessage('Caller notes is Required','Warning',3);
      return;
    }
    if(!this.callLogForm.customernotes){
      this.admg.showMessage('Customer notes is Required','Warning',3);
      return;
    }
    return true
  }
  public callforreasonform:any={
    id:0,
    description:'',
    branch_id:'',
    customer_code:'',
  
  }
  lstdatacallforreason:any;
  getcrmcallforreason(){
    var usr=this.admg.getUserCompleteInformation().usr;
    this.callforreasonform.branch_id=usr.bCode;
    this.callforreasonform.customer_code=usr.cCode;
    this.acc.getcrmcallforreason(this.callforreasonform).subscribe(res=>{
      this.lstdatacallforreason=res;
     })
  }
// id:any;
// Submit the form to either update an existing call log or add a new one
saveCallLog() {
  if(this.saveCallcheck()){
  if (this.callLogForm.id > 0) { // Checking if we're updating an existing log
    this.callLogForm.customer_id=this.leadId;
      // Save new call log
      var usr = this.admg.getUserCompleteInformation().usr;
      this.callLogForm.branchId = usr.bCode;
      this.callLogForm.customerCode = usr.cCode;
      // Call the update service
      this.dis.updateCallLog(this.callLogForm).subscribe(
        (response) => {
          console.log(response);
          this.newCalllog=false;
          this.callLogForm = {}; // Reset form after successful save
           // Show the list again
          this.toaster.success("Call Log Details Updated Successfully","success");
          this.getCallLogs(); // Refresh the logs
        },
        (error) => {
          this.toaster.error('Error updating call log');
          console.error('Update Call Log error:', error);
        }
      );
  } else {
  this.callLogForm.customer_id=this.leadId;
      // Save new call log
      var usr = this.admg.getUserCompleteInformation().usr;
      this.callLogForm.branchId = usr.bCode;
      this.callLogForm.customerCode = usr.cCode;
      this.dis.createCallLog(this.callLogForm).subscribe(
          (res: any) => {
              this.callLogForm = {}; // Reset form after successful save
              this.newCalllog=false;
              // Redirect to the listing page after saving
              this.getCallLogs();

              this.toaster.success("Call Log Details Saved Successfully","success");
          },
          (error) => {
              this.toaster.error('An error occurred while saving the call log. Please try again.');
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
        // Show spinner during delete operation
        this.dis.deleteCallLog(callLogId).subscribe(
          (res) => {
            console.log('Call log deleted successfully', res);
            this.getCallLogs(); // Refresh the list after deletion
            this.toaster.success('Call log deleted successfully');
           
          },
          (error) => {
            console.error('Error deleting call log', error);
            this.toaster.error('An error occurred while deleting the call log. Please try again.');
             // Hide spinner if error occurs
          }
        );
      }
    });
  }
}
