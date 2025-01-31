import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crm-lead-remainders',
  templateUrl: './crm-lead-remainders.component.html',
  styleUrls: ['./crm-lead-remainders.component.scss']
})
export class CrmLeadRemaindersComponent implements OnInit {

  open = 1;

  reminders: any;
  toastr: any;
  id: any;

  newReminder: any = {
    recordId: 0,               // Reminder ID, default is 0
    reminderName: '',    // Name of the reminder, default is an empty string
    reminderDate: '',    // Date of the reminder, default is an empty string
    reminderTime: '',    // Time of the reminder, default is an empty string
    notes: ''            // Notes for the reminder, default is an empty string
  };



  constructor(
    private crm: CrmDiscountListService,
    private adm: AdminGeneralInfoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder, // FormBuilder to create forms
    private par: PartyDetailsService,
  ) { }

  ngOnInit(): void {
    this.getReminders();
  }

  getReminders(): void {
    this.spinner.show(); // Show spinner while loading data
    // this.crm.getAllReminders().subscribe(
    //   (res) => {
    //     console.log(res); // Debugging the response
    //     this.reminders = res; // Store the reminders in the component
    //     this.spinner.hide(); // Hide the spinner once data is loaded
    //   },
    //   (error) => {
    //     console.error('Error fetching reminders:', error); // Log any errors
    //     this.toastr.error('Error fetching reminders'); // Show error message to the user
    //     this.spinner.hide(); // Hide the spinner in case of error
    //   }
    // );
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
        this.toastr.error('Error fetching reminder details'); // Show error message
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }

  // Submit the form to either update an existing reminder or add a new one
  saveReminder() {
    // this.newReminder.reminderTime=
    if (this.newReminder.id > 0) { // Checking if we're updating an existing reminder
      // Call the update service
      this.newReminder.recordId=this.newReminder.id;
      this.crm.updateReminder(this.newReminder).subscribe(
        (response) => {
          console.log(response);
          this.newReminder = {}; // Reset form after successful save
          this.open = 1; // Show the list again
          this.getReminders(); // Refresh the reminders
        },
        (error) => {
          this.toastr.error('Error updating reminder');
          console.error('Update Reminder error:', error);
        }
      );
    } else {
      
      // Save new reminder
      this.crm.createReminder(this.newReminder).subscribe(
        (res: any) => {
          console.group(res);
          this.newReminder = {}; // Reset form after successful save
          this.open = 1; // Redirect to the listing page after saving
          this.getReminders(); // Refresh the reminders
        },
        (error) => {
          this.toastr.error('An error occurred while saving the reminder. Please try again.');
          console.error('Save Reminder error:', error);
        }
      );
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
            this.toastr.error('An error occurred while deleting the reminder. Please try again.');
            this.spinner.hide(); // Hide spinner if error occurs
          }
        );
      }
    });
  }


  openReminderForm() {
    this.open = 2;
  }

  closeForm() {
    this.open = 1;
  }


  resetForm() {
    this.newReminder = {
      recordId: 0,             // Reset to default ID
      reminderName: '',   // Clear reminder name
      reminderDate: '',   // Clear reminder date
      reminderTime: '',   // Clear reminder time
      notes: ''           // Clear notes
    };
  }


}
