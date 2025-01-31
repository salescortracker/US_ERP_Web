import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CustomerInwardService } from 'app/services/crm/customer-inward.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crm-units',
  templateUrl: './crm-units.component.html',
  styleUrls: ['./crm-units.component.scss']
})
export class CrmUnitsComponent implements OnInit {
  lstunits: any;  
  
  isSidebarVisible: boolean = false;  
  authCheck: boolean = true;  
  saveStr: string = 'Save';
  id: any;



  constructor( private inw: CustomerInwardService,
    private toastr: ToastrService,
    private adm: AdminGeneralInfoService,
    private router:Router) {}

  ngOnInit(){
   this.getUnits();
  }
  
  Form:any={
    recordId:0,
    units:'',
    branchId:'',
    customerCode:''
  }

  

  openNew() {
    this.isSidebarVisible = true;
    // this.processForm = {};  // Reset form
    this.saveStr = 'Save';
  }

  
  

  // Save or update process
  saveUnits() {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.Form.branchId=usr.bCode;
    this.Form.customerCode=usr.cCode;
    if (this.Form.recordId > 0) {
      
      this.inw.updateUnits(this.Form).subscribe(
          response => {
              console.log('Units updated successfully', response);
              alert('Units updated successfully!');
              this.ngOnInit();
              this.isSidebarVisible = false;
          },
          error => {
              console.error('Error updating Units', error);
          }
      );
    } else {
    this.inw.saveUnits(this.Form).subscribe(
      response => {
          console.log('Units saved successfully:', response);
          alert('Units saved successfully!');
      },
      error => {
          console.error('Error saving Units:', error);
      }
  );
 
 
}
this.ngOnInit();
  }


  editUnits(data: any) {
    this.isSidebarVisible = true;
    this.Form.recordId = data; // Assuming 'data' contains the recordId
 this.id=data;
    this.inw.getUnitsById(this.Form).subscribe(
      (res: any) => {
        var det:any=res 
          this.Form = {
              recordId:det.recordId,
              units:det.units,
            
         
          };
        
          this.id = this.Form.recordId; // Save the record ID
          console.log('Editing Units:', this.Form);
         
      },
      (error) => {
        alert('An error occurred while fetching Units.');
        console.error('Fetch error', error);
      }
    );
   
  }
  

  getUnits() {
    debugger;

    var usr = this.adm.getUserCompleteInformation().usr;

    this.Form = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
    };
    this.inw.getUnits().subscribe(
      (res) => {
       
        this.lstunits = res;
      },
      (error) => {
        console.error('Error fetching units:', error);
      }
    );
  
 
  }

  // Delete a process by record ID
  deleteUnits(data: any){
 debugger;
    this.Form.recordId = data;
    
    if (confirm('Are you sure you want to delete this Units?')) {
      this.inw.deleteUnits(this.Form.recordId).subscribe(
        (res: any) => {
        
          console.log('Units deleted successfully', res);
       
        },
        error => {
          console.error('Units deleting process details', error);
          
          alert('An error occurred while deleting the Units. Please try again.');
        }
      );
    }
    this.ngOnInit();
  }

  // Close the sidebar
  close() {
    this.isSidebarVisible = false;
    //this.processForm = {};  // Clear form
  }
}
