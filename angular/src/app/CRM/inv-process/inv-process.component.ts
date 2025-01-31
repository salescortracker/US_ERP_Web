import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvProcessService } from 'app/services/inventory/inv-process.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inv-process',
  templateUrl: './inv-process.component.html',
  styleUrls: ['./inv-process.component.scss']
})
export class InvProcessComponent implements OnInit {

  lstProcess: any;  
  
  isSidebarVisible: boolean = false;  
  authCheck: boolean = true;  
  saveStr: string = 'Save';
  id: any;



  constructor( private invprocess: InvProcessService,
    private toastr: ToastrService,
    private adm: AdminGeneralInfoService,
    private router:Router) {}

  ngOnInit(){
   this.getprocessDetails();
  }
  
  processForm:any={
    recordId:0,
    processName:'',
    branchId:'',
    customerCode:''
  }

  

  openNewProcess() {
    this.isSidebarVisible = true;
    // this.processForm = {};  // Reset form
    this.saveStr = 'Save';
  }

  
  

  // Save or update process
  saveProcess() {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.processForm.branchId=usr.bCode;
    this.processForm.customerCode=usr.cCode;
    if (this.processForm.recordId > 0) {
      
      this.invprocess.updateprocess(this.processForm).subscribe(
          response => {
              console.log('process updated successfully', response);
              alert('process updated successfully!');
              this.ngOnInit();
              this.isSidebarVisible = false;
          },
          error => {
              console.error('Error updating process', error);
          }
      );
    } else {
    this.invprocess.saveprocess(this.processForm).subscribe(
      response => {
          console.log('processname saved successfully:', response);
          alert('processname saved successfully!');
      },
      error => {
          console.error('Error saving processname:', error);
      }
  );
 
 
}
this.ngOnInit();
  }


  editProcess(data: any) {
    this.isSidebarVisible = true;
    this.processForm.recordId = data; // Assuming 'data' contains the recordId
 this.id=data;
    this.invprocess.getprocessById(this.processForm).subscribe(
      (res: any) => {
        var det:any=res 
          this.processForm = {
              recordId:det.recordId,
              processName:det.processName,
            
         
          };
        
          this.id = this.processForm.recordId; // Save the record ID
          console.log('Editing inward details:', this.processForm);
         
      },
      (error) => {
        alert('An error occurred while fetching inward details.');
        console.error('Fetch error', error);
      }
    );
   
  }
  

  getprocessDetails() {
    debugger;

    var usr = this.adm.getUserCompleteInformation().usr;

    this.processForm = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
    };
    this.invprocess.getprocess().subscribe(
      (res) => {
       
        this.lstProcess = res;
      },
      (error) => {
        console.error('Error fetching process details:', error);
      }
    );
  
 
  }

  // Delete a process by record ID
  deleteProcess(data: any){
 debugger;
    this.processForm.recordId = data;
    
    if (confirm('Are you sure you want to delete this product?')) {
      this.invprocess.deleteprocess(this.processForm.recordId).subscribe(
        (res: any) => {
        
          console.log('process details deleted successfully', res);
       
        },
        error => {
          console.error('Error deleting process details', error);
          
          alert('An error occurred while deleting the process details. Please try again.');
        }
      );
    }
    this.ngOnInit();
  }

  // Close the sidebar
  closeProcess() {
    this.isSidebarVisible = false;
    //this.processForm = {};  // Clear form
  }

}
