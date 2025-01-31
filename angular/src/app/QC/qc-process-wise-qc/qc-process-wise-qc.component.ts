import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { QcBatchesService } from 'app/services/qc/qc-batches.service';
import { QcMastersService } from 'app/services/qc/qc-masters.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
 
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-qc-process-wise-qc',
  templateUrl: './qc-process-wise-qc.component.html',
  styleUrls: ['./qc-process-wise-qc.component.scss']
})
export class QcProcessWiseQCComponent implements OnInit {

  public headers:any;
  public lines:any;
  public totallines:any;
  public tests:any;
 
public line:any={
RecordId:0,
Sno:null,
ItemName:'',
Batchno:'',
Qty:null,
BranchId:'',
Rat:null
};
public lineDet:any={
  transactionId:null,
  Lotno:null,
  Lottype:'MAT',
  Comments:'',
  CheckedQty:null,
  RectifiedQty:null,
  RejectedQty:null,
  ValueOfItem:null,
  rectificationCost:null

};
public processid:number=0;
public processes:any;
 public totpendings:any;
public pendings:any;
public lineDetails:any[]=[];
public username:string='';
  public testid:number=-1;
  constructor(private adm:AdminGeneralInfoService,private router:Router,private spinner: NgxSpinnerService,
    private qc:QcBatchesService,private mas:QcMastersService ) {
   this.username=this.adm.getUserCompleteInformation().usr.uCode;
    this.getRequirements();
     }
     public getRequirements()
     {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.qc.getQCProcessRequirements().subscribe(res =>
          {
              var det:any=res;
              console.log(det,'detail');
              this.processes=det.processes;
              this.totpendings=det.pendings;
               this.tests=det.tests;
              this.spinner.hide();
          });
     }
public findProcess()
{
this.pendings=this.totpendings.filter(a => a.processid== +this.processid);
}
public openMIR(obj:any)
{
  this.lines=this.totallines.filter(a => a.recordId==obj.recordId);
}
public openLine(obj:any)
{
  console.log(obj);
  this.line={
    RecordId:obj.recordId,
    Sno:obj.lineid,
    ItemName:obj.itemname,
    batchid: +obj.batchid,
    Batchno:obj.batchno,
    Qty:+obj.qty,
    BranchId:obj.branchId,
    Rat:+obj.valu/+obj.qty,
    Valu: +obj.valu,
    processid:obj.processid,
    };
}

addbuttonenable:any=true;
//deletebuttonenable:any=true;
modifybuttonenable:any=false;
ngOnInit(): void {
  if(this.adm.screenCheck(11,2,3,1)){
    this.addbuttonenable=true;
  }
  else{
     this.addbuttonenable=false;
  }
  if(this.adm.screenCheck(11,2,3,2)){
    this.modifybuttonenable=true;
  }
  else{
     this.modifybuttonenable=false;
  }
 
 
}
findRejectValue()
{
    this.lineDet.ValueOfItem=(+this.lineDet.RejectedQty)*(+this.line.Rat);
}
 addInfo()
 {
  
   this.lineDetails.push({
      transactionId:this.line.RecordId,
      Lotno:this.line.Sno,
      Lottype:'MAT',
      Comments:this.lineDet.Comments,
      CheckedQty:+this.lineDet.CheckedQty,
      RectifiedQty:+this.lineDet.RectifiedQty,
      RejectedQty:+this.lineDet.RejectedQty,
      ValueOfItem:+this.lineDet.ValueOfItem,
      rectificationCost:+this.lineDet.rectificationCost,
      ItemName:this.line.itemname
   });
   this.lineDet={
    transactionId:null,
    Lotno:null,
    Lottype:'MAT',
    Comments:'',
    CheckedQty:null,
    RectifiedQty:null,
    RejectedQty:null,
    ValueOfItem:null,
    rectificationCost:null
  
  };
  this.line={
    RecordId:0,
    Sno:null,
    ItemName:'',
    Batchno:'',
    Qty:null,
    BranchId:'',
    Rat:null
    };
 }

 deleteInfo(obj:any)
 {
   var index=this.lineDetails.indexOf(obj);
   if(index >= 0)
   {
     this.lineDetails.splice(index,1);
   }
 }
 private valChk():boolean
 {
   if(+this.testid <= 0)
   {  
      this.adm.showMessage('Test not selected','Warning',3);
      return false;
   }
   if(!this.line.Sno)
   {
    this.adm.showMessage('Batch not selected','Warning',3);
    return false;
   }
   if(!this.line.Sno)
   {
    this.adm.showMessage('Batch not selected','Warning',3);
    return false;
   }
   
   return true;
 }

 public saveQC()
 {
   if(this.valChk())
   {
  Swal.fire({  
    title:  'Confirms Quality Details' ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 

      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        console.log(this.lineDet,this.line);
       var obj:any={
        ProcessId:this.line.processid,
        QcIncharge:null,
        Test:+this.testid,
        SamplesCollected: +this.line.Qty,
        Rectified: +this.lineDet.RectifiedQty,
        Rejected: +this.lineDet.RejectedQty,
        RectificationValue: +this.lineDet.rectificationCost,
        RejectedValue: +this.lineDet.ValueOfItem,
        Descriptio: this.lineDet.Comments,
        BatchNo: +this.line.batchid
       };
       this.qc.setQCProcess(obj).subscribe(res =>
        {
            var det:any=res;
            if(det.result=='OK')
            {
              Swal.fire(  
                'Transaction Completed Successfully!',  
                'Quality Details saved.',  
                'success'  
              );

              this.line={};
              this.lineDet={};
              this.pendings=[];
              this.getRequirements();
            }
            else
            {
              Swal.fire(  
                det.result,  
                'Error in transaction.',  
                'error'  
              );
            }
            this.spinner.hide();
        });
      
}
});
   }
 }

}
