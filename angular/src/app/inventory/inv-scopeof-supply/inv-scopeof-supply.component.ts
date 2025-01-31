import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvScopeofSupplyService } from '../services/inv-scopeof-supply.service';
import { InvProcessService } from 'app/services/inventory/inv-process.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inv-scopeof-supply',
  templateUrl: './inv-scopeof-supply.component.html',
  styleUrls: ['./inv-scopeof-supply.component.scss']
})
export class InvScopeofSupplyComponent implements OnInit {

  lstsupply: any;  
  
  isSidebarVisible: boolean = false;  
  authCheck: boolean = true;  
  saveStr: string = 'Save';
  id: any;



  constructor( private invScope: InvScopeofSupplyService,
    private toastr: ToastrService,
    private adm: AdminGeneralInfoService,
    private router:Router) {}

  ngOnInit(){
   this.getScopeofSupply();
  }
  
  scopeForm:any={
    recordId:0,
    description:'',
    branchId:'',
    customerCode:''
  }

  

  openNew() {
    this.isSidebarVisible = true;
    // this.processForm = {};  // Reset form
    this.saveStr = 'Save';
  }

  
  

  // Save or update process
  save() {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    this.scopeForm.branchId=usr.bCode;
    this.scopeForm.customerCode=usr.cCode;
    if (this.scopeForm.recordId > 0) {
      
      this.invScope.updateScopeofSupply(this.scopeForm).subscribe(
          response => {
              console.log('Scope updated successfully', response);
              alert('Scope updated successfully!');
              this.ngOnInit();
              this.isSidebarVisible = false;
          },
          error => {
              console.error('Error updating Scope', error);
          }
      );
    } else {
    this.invScope.saveScopeofSupply(this.scopeForm).subscribe(
      response => {
          console.log('Scope saved successfully:', response);
          alert('Scope saved successfully!');
      },
      error => {
          console.error('Error saving Scope:', error);
      }
  );
 
 
}
this.ngOnInit();
  }


  edit(data: any) {
    this.isSidebarVisible = true;
    this.scopeForm.recordId = data; // Assuming 'data' contains the recordId
 this.id=data;
    this.invScope.getScopeofSupplyById(this.scopeForm).subscribe(
      (res: any) => {
        var det:any=res 
          this.scopeForm = {
              recordId:det.recordId,
              description:det.description,
            
         
          };
        
          this.id = this.scopeForm.recordId; // Save the record ID
          console.log('Editing Scope:', this.scopeForm);
         
      },
      (error) => {
        alert('An error occurred while fetching Scope.');
        console.error('Fetch error', error);
      }
    );
   
  }
  

  getScopeofSupply() {
    debugger;

    var usr = this.adm.getUserCompleteInformation().usr;

    this.scopeForm = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
    };
    this.invScope.getScopeofSupply().subscribe(
      (res) => {
       
        this.lstsupply = res;
      },
      (error) => {
        console.error('Error fetching Scope:', error);
      }
    );
  
 
  }

  // Delete a process by record ID
  delete(data: any){
 debugger;
    this.scopeForm.recordId = data;
    
    if (confirm('Are you sure you want to delete this product?')) {
      this.invScope.deleteScopeofSupply(this.scopeForm.recordId).subscribe(
        (res: any) => {
        
          console.log('Scope deleted successfully', res);
       
        },
        error => {
          console.error('Scope deleting process details', error);
          
          alert('An error occurred while deleting the Scope. Please try again.');
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
