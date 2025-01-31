import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CrmDiscountListService } from '../../services/crm/crm-discount-list.service';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';

@Component({
  selector: 'app-crm-leads-calllogs',
  templateUrl: './crm-leads-calllogs.component.html',
  styleUrls: ['./crm-leads-calllogs.component.scss']
})
export class CrmLeadsCalllogsComponent implements OnInit {

  callLogForm: any = {
    id:0,
    contactId: '',
    leadOwnerId: 0,
    callTypes: '',
    callDate: '',
    comments: ''
  };
  
isEditing: boolean = false; // Track whether the user is editing a call log



employeesList:any;
  open = 1;
  callLogs: any;
  calltypeslist:any;
  toastr: any;


  constructor(private crm:CrmDiscountListService, 
    private adm:AdminGeneralInfoService,
    private router:Router,
    private  spinner:NgxSpinnerService,
    private fb: FormBuilder, // FormBuilder to create forms
    private par:PartyDetailsService,
    ) {}

  ngOnInit() {
    this.getCallLogs();
    this.getCallTypes(); // Fetch call types when component initializes
    this.getHrdEmployees();
  }


  

  getCallLogs(): void {
    this.spinner.show(); // Show spinner while loading data
    // this.crm.getAllCallLogs().subscribe(
    //   (res) => {
    //     console.log(res); // Debugging the response
    //     this.callLogs = res; // Store the call logs in the component
    //     this.spinner.hide(); // Hide the spinner once data is loaded
    //   },
    //   (error) => {
    //     console.error('Error fetching call logs:', error); // Log any errors
    //     this.toastr.error('Error fetching call logs'); // Show error message to the user
    //     this.spinner.hide(); // Hide the spinner in case of error
    //   }
    // );
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
          comments: res.comments
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



id:any;
// Submit the form to either update an existing call log or add a new one
saveCallLog() {
  if (this.callLogForm.id > 0) { // Checking if we're updating an existing log
      // Call the update service
      this.crm.updateCallLog(this.callLogForm).subscribe(
        (response) => {
          console.log(response);
          this.callLogForm = {}; // Reset form after successful save
          this.open = 1; // Show the list again
          this.getCallLogs(); // Refresh the logs
        },
        (error) => {
          this.toastr.error('Error updating call log');
          console.error('Update Call Log error:', error);
        }
      );
  } else {
  
      // Save new call log
      this.crm.createCallLog(this.callLogForm).subscribe(
          (res: any) => {
              this.callLogForm = {}; // Reset form after successful save
              this.open = 1; // Redirect to the listing page after saving
              this.getCallLogs();
          },
          (error) => {
              this.toastr.error('An error occurred while saving the call log. Please try again.');
              console.error('Save Call Log error:', error);
          }
      );
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
  closeForm() {
    this.open = 1; // Set open to 1 to show the call logs list again
  }
  resetForm() {
    this.callLogForm = {
      contactId: '',
      leadOwnerId: '',
      callTypes: '',
      callDate: '',
      comments: ''
    };
  }

}
