import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-lab-screen-list',
  templateUrl: './lab-screen-list.component.html',
  styleUrls: ['./lab-screen-list.component.scss']
})
export class LabScreenListComponent implements OnInit {

  isFormVisible = false;
  listlabForm: any;
  Id: number;
  

  openNew() {
    this.isFormVisible = true; // Show form and hide table
  }

  close() {
    this.isFormVisible = false; // Hide form and show table
  }

  labForm: any = {
   recordId:0,
    labCode: '',
    labName: '',
    chemicalName: '',
    description: '',
    labIncharge: '',
    customer: null,
    status:null
  };
  

  // openNew()
  // {
  //     this.router.navigate(['/inventory/invlabscreen']);
  // }
  
  constructor(private inv:InvMastersService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ){}
   statusList: Array<{ statusID: number; statusName: string }> = [];
   creCheck: boolean = true; // Determines if the submit button is enabled
   saveStr: string = 'Save';

  ngOnInit(){this.loadStatusList();
    this.getLabDetails();
    this.loadStatusList();
  }

  loadStatusList(){
    this.statusList = [
      { statusID: 1, statusName: 'Active' },
      { statusID: 2, statusName: 'Inactive' },
      { statusID: 3, statusName: 'Pending' }
    ];
  }

  // Handle status change
  onStatusChange(selectedStatusID: string) {
    this.labForm.status = parseInt(selectedStatusID, 10);
  }

 
  getLabDetails() {
    this.spinner.show();
    this.inv.getLabScreen().subscribe(
      (res) => {
        console.log(res); 
        this.listlabForm = res;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching lab details:', error);
        this.toastr.error('Error fetching lab details');
        this.spinner.hide();
      }
    );
  }

  save() {
    debugger;
   
    const usr = this.adm.getUserCompleteInformation().usr;
    this.labForm.branchId = usr.bCode;
    this.labForm.customerCode = usr.cCode;

    if (this.labForm.recordID > 0) {
        this.inv.updateLabScreen(this.labForm).subscribe(
            response => {
                console.log('chemical updated successfully:', response);
                alert('chemical updated successfully!');
            },
            error => {
                console.error('Error updating chemical:', error);
            }
        );
    } else {
        this.inv.saveLabScreen(this.labForm).subscribe(
            response => {
                console.log('Item saved successfully:', response);
                alert('Item saved successfully!');
            },
            error => {
                console.error('Error saving enquiry:', error);
            }
        );
    }
}


editLabDetails(data: any) {
  this.isFormVisible = true; 
  this.labForm.recordId=data;
 
 // this.openNew();
  this.inv.getLabScreenById(this.labForm).subscribe(
      (res:any) => {
        
      
        debugger;
        var det:any=res
        this.labForm = {
          recordID:det.recordID,
          labCode: det.labCode,
          labName: det.labName,
          chemicalName: det.chemicalName,
          description: det.description,
          labIncharge: det.labIncharge,
          customer: det.customer,
          status: det.status
        };
        this.Id=this.labForm.recordId;
          console.log('Editing chemical:', this.labForm);
      },
      (error) => {
        debugger;
          alert('An error occurred while fetching product details.');
          console.error('Fetch error', error);
      }
  );

 
    
}


// editLabDetails(data: any) {
//     debugger;
//     this.labForm.Id = data; // Assuming 'data' is the Id

//     // Log the ID before calling the service
//     console.log('Fetching lab details for Id:', this.labForm);

//     this.inv.getLabScreenById(this.labForm).subscribe(
//         (res: any) => {
//             console.log('Response from getLabScreenById:', res);
            
//             // Ensure res has data before assigning
//             if (res) {
//                 this.labForm = {
//                     labCode: res.labCode,
//                     labName: res.labName,
//                     chemicalName: res.chemicalName,
//                     description: res.description,
//                     labIncharge: res.labIncharge,
//                     customer: res.customer,
//                     status: res.status
//                 };
//                 this.Id = res.id; // Save the record ID
//                 console.log('Lab form updated with response data:', this.labForm);
//             } else {
//                 console.warn('No data found in response for the given Id');
//             }
//         },
//         (error) => {
//             alert('An error occurred while fetching lab details.');
//             console.error('Fetch error:', error);
//         }
//     );
// }




  deleteLabDetail(Id: number) {
    debugger;
    this.labForm.RecordID=Id;
   
      this.inv.deleteLabScreen(Id).subscribe(
        (res: any) => {
          console.log('Lab Reocrd deleted successfully', res);
          this.getLabDetails();
        
        },
        error => {
          console.error('Error deleting Group', error);
          alert('An error occurred while deleting the Group. Please try again.');
        }
      );
   
  }

}
