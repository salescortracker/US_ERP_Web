import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CustomerInwardService } from 'app/services/crm/customer-inward.service';
import { InvProcessService } from 'app/services/inventory/inv-process.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-inwards',
  templateUrl: './customer-inwards.component.html',
  styleUrls: ['./customer-inwards.component.scss']
})
export class CustomerInwardsComponent {

  lstProcess:any;
  id: number;
 
  constructor( private inw: CustomerInwardService,
    private invprocess:InvProcessService,
    private toastr: ToastrService,
    private adm: AdminGeneralInfoService,
    private router:Router) { }

  ngOnInit(){
    this.getInwardsMaterials();
    this.getprocessDetails();
  }

  isFormVisible: boolean = false;
 
  inwardForm: any = {
    recordId:0,
    inwardNo: 0,
    gpNo: 0,
    nameOfCompany: '',
    itemDescription: '',
    size: 0,
    process: 0,
    recordedQuantity: 0,
    dispatchQuantity: 0,
    dispatchRegisterNo:0,
    dateOfDelivery: '',
    balanceQuantity: 0,
    signature:'',
  };

  openNewInward() {
    this.isFormVisible = true;
    this.resetForm();
  }

  closeForm() {
    this.isFormVisible = false;
  }

  saveInward() {
   
    var usr=this.adm.getUserCompleteInformation().usr;
    this.inwardForm.branchId=usr.bCode;
    this.inwardForm.customerCode=usr.cCode;
    this.inwardForm.process=+this.inwardForm.process;
    if (this.inwardForm.recordId > 0) {
      
      this.inw.updateInward(this.inwardForm).subscribe(
          response => {
              console.log('inward Material updated successfully', response);
              alert('inward material updated successfully!');
              this.ngOnInit();
          },
          error => {
              console.error('Error updating Inward Material', error);
          }
      );
    } else {
    this.inw.saveInward(this.inwardForm).subscribe(
      response => {
          console.log('Material saved successfully:', response);
          alert('Item saved successfully!');
      },
      error => {
          console.error('Error saving Material:', error);
      }
  );
  }

  }

   editInward(data: any) {
    this.inwardForm.recordId = data; // Assuming 'data' contains the recordId
 this.id=data;
    this.inw.getInwardById(this.inwardForm).subscribe(
      (res: any) => {
        var det:any=res 
          this.inwardForm = {
            recordId:det.recordId,
            inwardNo:det.inwardNo,
            gpNo:det.gpNo,
            nameOfCompany:det.nameOfCompany,
            itemDescription:det.itemDescription,
            size: det.size,
            process: det.process,
            recordedQuantity: det.recordedQuantity,
            dispatchQuantity: det.dispatchQuantity,
            dispatchRegisterNo:det.dispatchRegisterNo,
            dateOfDelivery: det.dateOfDelivery,
            balanceQuantity: det.balanceQuantity,
            signature:det.signature,
         
          };
        
          this.id = this.inwardForm.recordId; // Save the record ID
          console.log('Editing inward details:', this.inwardForm);
          this.isFormVisible = true;
      },
      (error) => {
        alert('An error occurred while fetching inward details.');
        console.error('Fetch error', error);
      }
    );
  }
  

  lstinward:any;
  getInwardsMaterials() {
    

    var usr = this.adm.getUserCompleteInformation().usr;

    this.inwardForm = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
    };
    this.inw.getInwards().subscribe(
      (res) => {
       
        this.lstinward = res;
      },
      (error) => {
        console.error('Error fetching inward material:', error);
      }
    );
  
   
  }

  // editInward(inward: any) {
  //   this.inwardForm = { ...inward };
  //   this.isFormVisible = true;
  // }


  deleteInward(data: any) {
    this.inwardForm.recordId = data;
    
    if (confirm('Are you sure you want to delete this inward?')) {
      this.inw.deleteInward(this.inwardForm.recordId).subscribe(
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

  getprocessDetails() {
  
    this.invprocess.getprocess().subscribe(
      (res) => {
       console.log(res);
        this.lstProcess = res;
      },
      (error) => {
        console.error('Error fetching process details:', error);
      }
    );
  
 
  }

  resetForm() {
    
  }

}
