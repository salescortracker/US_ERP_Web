import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmEnquiryregisterServiceService } from 'app/services/crm/crm-enquiryregister-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-enquiry-register',
  templateUrl: './enquiry-register.component.html',
  styleUrls: ['./enquiry-register.component.scss']
})
export class EnquiryRegisterComponent implements OnInit {

  lstEnquiries: any;
  isFormVisible: boolean = false; 
  lstProcess:any;
  id: any;
  openNewEnquiry() {
    this.isFormVisible = true;
    this.saveStr = 'Save';
  }

  public enquiryregisterForm: any = {
    recordId: 0,
    date: '',
    enquiryFrom: '',
    enquiryDetails: '',
    productRange: '',
    process: 0,
    quotationSubmissionDetails: '',
    negotiationDetails: '',
    orderAcceptanceDetails: false,
    expectedDateOfDelivery: '',
    actualDateOfDelivery: '',
    remarks: '',
    branchId:'',
    customerCode:'',
    preparedBy:'',
    approvedBy:'',

  };

  creCheck = true;
  saveStr = 'Save';
orderAccepted: any;

  constructor(
   
    private enq: CrmEnquiryregisterServiceService,
    private toastr: ToastrService,
    private adm: AdminGeneralInfoService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getEnquiries();
    //this.getprocessDetails();
  }

  save() {
    debugger;
    var usr = this.adm.getUserCompleteInformation().usr;
    this.enquiryregisterForm.branchId = usr.bCode;
    this.enquiryregisterForm.customerCode = usr.cCode;
    //this.leadStatusForm.stageId=+this.leadStatusForm.stageId;
    this.enquiryregisterForm.process=+this.enquiryregisterForm.process;

    if (this.enquiryregisterForm.recordId > 0) {
      this.enq.updateEnquiryregister(this.enquiryregisterForm).subscribe(
        response => {
          console.log('Enquiry updated successfully', response);
          alert('Enquiry updated successfully!');
          this.close();
        },
        error => {
          console.error('Error updating enquiry', error);
        }
      );
    } else {
    
      this.enq.saveEnquiryregister(this.enquiryregisterForm).subscribe(
        response => {
          console.log('Enquiry saved successfully', response);
          alert('Enquiry saved successfully!');
          this.ngOnInit();
        },
        error => {
          console.error('Error saving enquiry', error);
        }
      );
    }
   
  }

  getEnquiries() {
   
    var usr = this.adm.getUserCompleteInformation().usr;

    this.enquiryregisterForm = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
    };
 
    this.enq.getEnquiryregister().subscribe(
      (res) => {
        this.lstEnquiries = res;
      },
      (error) => {
        console.error('Error fetching enquiries:', error);
      }
    );
  }

  edit(data: any) {
    this.isFormVisible = true;
    this.enquiryregisterForm.recordId = data; // Assuming 'data' contains the recordId
    this.enq.getEnquiryregisterById(this.enquiryregisterForm).subscribe(
      (res: any) => {
        var det: any = res;
        this.enquiryregisterForm = {
          recordId: det.recordId,
          date: det.date,
          enquiryFrom: det.enquiryFrom,
          enquiryDetails: det.enquiryDetails,
          productRange: det.productRange,
          process: det.process,
          quotationSubmissionDetails: det.quotationSubmissionDetails,
          negotiationDetails: det.negotiationDetails,
          orderAcceptanceDetails: det.orderAcceptanceDetails,
          expectedDateOfDelivery: det.expectedDateOfDelivery,
          actualDateOfDelivery: det.actualDateOfDelivery,
          remarks: det.remarks,
          preparedBy:det.preparedBy,
          approvedBy:det.approvedBy
        };
        this.id = res.id;
        console.log('Editing enquiry:', this.enquiryregisterForm);
      },
      (error) => {
        alert('An error occurred while fetching enquiry details.');
        console.error('Fetch error', error);
      }
    );
    this.ngOnInit();
  }

  delete(data:any) {
    this.enquiryregisterForm.recordId=data
    if (confirm('Are you sure you want to delete this enquiry?')) {
      this.enq.deleteEnquiryregister(this.enquiryregisterForm.recordId).subscribe(
        (res: any) => {
          console.log('Enquiry deleted successfully', res);
        },
        error => {
          console.error('Error deleting enquiry', error);
          alert('An error occurred while deleting the enquiry. Please try again.');
        }
      );
    }
    this.ngOnInit();
  }


  // getprocessDetails() {
  
  //   this.invprocess.getprocess().subscribe(
  //     (res) => {
  //      console.log(res);
  //       this.lstProcess = res;
  //     },
  //     (error) => {
  //       console.error('Error fetching process details:', error);
  //     }
  //   );
  
 
  // }
  close() {
    this.isFormVisible = false;
    this.getEnquiries(); 
  }
  next(){
    this.router.navigate(['/crm/crmEnquiryReview'])
  }
}
