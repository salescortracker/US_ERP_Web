import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmFeedbackServiceService } from 'app/services/crm/crm-feedback-service.service';
import { Console } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-feedback-form',
  templateUrl: './customer-feedback-form.component.html',
  styleUrls: ['./customer-feedback-form.component.scss']
})
export class CustomerFeedbackFormComponent implements OnInit {
  formData = {
    id:0,
    from: '',
    ms: '',
    date: null,
    quality: '',
    delivery: '',
    communication: '',
    improvements: '',
    averageScore: 0,
    signature: ''
  };

  // // Method to log form data to console
  // onSubmit() {
  //   console.log(this.formData);
  // }


  crecheck: boolean = true; // Assuming you want this as a boolean

  showFeedbackList: boolean = true;
  enquiry:any
  feedbackEntries:any
  showFeedbackDetail: boolean = false;
  feedbackList: any[] = [];
  searchtext: string = '';
  public savestr: string = 'Save';

  // Feedback form structure
  feedbackForm: any = {
    recordId: 0,
    customer_id: '',
    order_id: '',
    from_name: '',
    company_name: '',
    feedback_date: null,
    Quality_pro_serv: '',
    delivery_sch_serv: '',
    communication_serv: '',
    request_elaborate_improve: '',
    feedback_designation: '',
    feedback_Score: '',
  };
  toastr: any;

  constructor(
    private cfbs: CrmFeedbackServiceService,
    private adm: AdminGeneralInfoService,
    private router:Router,
    private  spinner:NgxSpinnerService,
    private fb: FormBuilder
   
  ) {}

  ngOnInit() {
    //this.getFeedbackList();
    this.getFeedbackList();
  }

  // Open a new form
  openNew() {
    this.showFeedbackList = false;
    this.showFeedbackDetail = true;
    this.savestr = 'Save'; // Reset the button label to 'Save'

    // Reset feedback form
    this.feedbackForm = {
      customer_id:  "",
      delivery_sch_serv: "",
      communication_serv: "",

      feedback_Score : "",
      feedback_date:  null,
      feedback_designation: "",
      from_name:  "",
      order_id: "",
      recordId: 0,
      request_elaborate_improve: ""
    };
  }

  // Get feedback list from the server
  getFeedbackList() {
    this.cfbs.getFeedbackForms().subscribe(
      (res) => {
        
        console.log("ajay",res);
        this.feedbackEntries = res;
      },
      (error) => {
       // this.toastr.error('Error fetching feedback list');
        console.error('Error fetching feedback list:', error);
      }
    );
  }


  save(){
    if (this.formData.id > 0) { // Checking if we're updating an existing log
      // Call the update service
      this.cfbs.updateFeedback(this.formData).subscribe(
        (response) => {
          console.log(response);
          this.enquiry = {}; // Reset form after successful save
          this.getFeedbackList(); // Refresh the logs
        },
        (error) => {
          this.toastr.error('Error updating call log');
          console.error('Update Call Log error:', error);
        }
      );
  } else {
  
      // Save new call log
      this.cfbs.createFeedback(this.formData).subscribe(
          (res: any) => {
              this.enquiry = {}; // Reset form after successful save
              this.getFeedbackList();
          },
          (error) => {
              this.toastr.error('An error occurred while saving the call log. Please try again.');
              console.error('Save Call Log error:', error);
          }
      );
  }
  }
  // editEntry(){

  // }
  deleteEntry(data: any) {
    debugger;
    this.feedbackForm.recordId = data;
    
    if (confirm('Are you sure you want to delete this product?')) {
      this.cfbs.deleteFeedback(this.feedbackForm.recordId).subscribe(
        (res: any) => {
        
          console.log('inward material deleted successfully', res);
       
        },
        error => {
          console.error('Error deleting inward material', error);
          
          alert('An error occurred while deleting the inward material. Please try again.');
        }
      );
    }
    this.ngOnInit();
  }


}
