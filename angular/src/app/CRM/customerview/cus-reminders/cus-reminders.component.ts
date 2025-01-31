import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { ToastrService } from 'ngx-toastr';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cus-reminders',
  templateUrl: './cus-reminders.component.html',
  styleUrls: ['./cus-reminders.component.scss']
})
export class CusRemindersComponent implements OnInit {

  leadId: any  
  newdisableReminder:any=false;
  newReminder: any = {
    recordId: 0,
     customer_id:0,
    // Reminder ID, default is 0
    reminderName: '',    // Name of the reminder, default is an empty string
    reminderDate: '',    // Date of the reminder, default is an empty string
    reminderTime: '',    // Time of the reminder, default is an empty string
    notes: ''            // Notes for the reminder, default is an empty string
    ,leadid:0,
    reminder_type:0
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
    this.getReminders();
    this.getremindertypeData();
  }
  reminder: any;
  
  newreminderform:any={
    leadid:0,
    branchId:'',
    customerCode:'',
    customer_id:0,
  }
  close(){
    this.newdisableReminder=false;
  }
    getReminders(): void {
      var usr = this.admg.getUserCompleteInformation().usr;
      this.newreminderform.customer_id=this.leadId;
      this.newreminderform.branchId = usr.bCode;
      this.newreminderform.customerCode = usr.cCode;
      this.dis.getAllReminders(this.newreminderform).subscribe(
        (res) => {
          console.log(res); // Debugging the response
          this.reminder = res; // Store the reminders in the component
          
        },
        (error) => {
          console.error('Error fetching reminders:', error); // Log any errors
          //this.toastr.error('Error fetching reminders'); // Show error message to the user          
        }
      );
    }
  
    id:any;
    // Method to edit an existing reminder
    editReminder(recordId: any) {    
      this.dis.getReminderById(recordId).subscribe(
        (res: any) => {
          // Assuming `res` contains the reminder data
          this.newReminder = {
            id: res.recordId,
            reminderName: res.reminderName,
            reminderDate: res.reminderDate,
            reminderTime: res.reminderTime,
            reminder_type:res.reminder_type,
            notes: res.notes
          };
          this.newReminder.id = recordId;
          this.id = recordId; // Set the ID for updating
          this.newdisableReminder=true;
          this.newReminder.reminderDate;
        },
        (error) => {
          console.error('Error fetching reminder details:', error);
         // this.toastr.error('Error fetching reminder details'); // Show error message
        
        }
      );
    }
  
    // Submit the form to either update an existing reminder or add a new one
    saveReminder() {
      if(this.saveRemindercheck()){
      // this.newReminder.reminderTime=
      if (this.newReminder.id > 0) { // Checking if we're updating an existing reminder
        // Call the update service
        var usr = this.admg.getUserCompleteInformation().usr;
      this.newReminder.branchId = usr.bCode;
      this.newReminder.customerCode = usr.cCode;
        this.newReminder.customer_id=this.leadId;
      
        this.newReminder.recordId=this.newReminder.id;
        this.dis.updateReminder(this.newReminder).subscribe(
          (response) => {
            console.log(response);
            this.newReminder = {}; // Reset form after successful save
           this.newdisableReminder=false;
            this.getReminders(); // Refresh the reminders
            this.toaster.success("Remainder Details updated Successfully","success");
          },
          (error) => {
           // this.toastr.error('Error updating reminder');
            console.error('Update Reminder error:', error);
          }
        );
      } else {
        this.newReminder.customer_id=this.leadId;
        var usr = this.admg.getUserCompleteInformation().usr;
        this.newReminder.branchId = usr.bCode;
        this.newReminder.customerCode = usr.cCode;
        // Save new reminder
        this.dis.createReminder(this.newReminder).subscribe(
          (res: any) => {
            console.group(res);
            this.newReminder = {}; // Reset form after successful save
            this.newdisableReminder=false;
            this.getReminders(); // Refresh the reminders
            this.toaster.success("Remainder Details Saved Successfully","success");
          },
          (error) => {
            //this.toastr.error('An error occurred while saving the reminder. Please try again.');
            console.error('Save Reminder error:', error);
          }
        );
      }
    }
    }
    saveRemindercheck(){
      console.log(this.newReminder);
      if(!this.newReminder.reminderName){
        this.admg.showMessage('Reminder Name is Required','Warning',3);
        return;
      }
      if(!this.newReminder.reminderDate){
        this.admg.showMessage('Reminder Date is Required','Warning',3);
        return;
      }
      if(!this.newReminder.reminderTime){
        this.admg.showMessage('Reminder Time is Required','Warning',3);
        return;
      }
      if(!this.newReminder.notes){
        this.admg.showMessage('Notes is Required','Warning',3);
        return;
      }
      return true
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
        
          this.dis.deleteReminder(recordId).subscribe(
            (res) => {
              console.log('Reminder deleted successfully', res);
              this.getReminders(); // Refresh the list after deletion
              this.toaster.success('Reminder deleted successfully');
             
            },
            (error) => {
              console.error('Error deleting reminder', error);
             // this.toastr.error('An error occurred while deleting the reminder. Please try again.');
             
            }
          );
        }
      });
    }
    formData = {
      id:0,
      description: "",
      recordId: 0,
      customer_Code: 0,
      branch_Id: "",
      customer_id:0,
    }
    userdetails:any;
    allrecords:any;
    getremindertypeData(){
      this.userdetails = this.admg.getUserCompleteInformation();
      this.formData.branch_Id = this.userdetails.usr.bCode
      this.formData.customer_Code = this.userdetails.usr.cCode
      this.acc.getcrmleadremindertype(this.formData).subscribe((res:any)=>{
        console.log(res);
        this.allrecords=res
       })
    }

}
