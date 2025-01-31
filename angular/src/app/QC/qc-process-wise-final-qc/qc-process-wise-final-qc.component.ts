import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { QcBatchesService } from 'app/services/qc/qc-batches.service';
import { QcMastersService } from 'app/services/qc/qc-masters.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
import { ThemeService } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';
 
@Component({
  selector: 'app-qc-process-wise-final-qc',
  templateUrl: './qc-process-wise-final-qc.component.html',
  styleUrls: ['./qc-process-wise-final-qc.component.scss']
})
export class QcProcessWiseFinalQCComponent implements OnInit {
public headers:any;
public totallines:any;
public lines:any;
public batch:any;
rectificationvalue:number=0;
rejected:number=0;
public saveCheck:boolean=false;
  constructor(private adm:AdminGeneralInfoService,private router:Router,private spinner: NgxSpinnerService,
    private qc:QcBatchesService,private mas:QcMastersService )  {
      this.requirementsAdd();
     }


  public requirementsAdd()
  {
    this.qc.getFinalQCRequirements().subscribe(res =>
      {
        var det:any=res;
        console.log(det);
        this.headers=det.header;
        this.totallines=det.lines;
      });
  }
  public findDetails(obj:any)
  {
    
    this.batch=obj;
    var x=0;
    this.rejected=0;
    this.rectificationvalue=0;
    this.lines=this.totallines.filter(a => a.batchid==obj.batchid);
    for(var i=0;i<this.lines.length;i++)
    {
      this.rejected=this.rejected+this.lines[i].rejected;
      this.rectificationvalue=this.rectificationvalue+this.lines[i].rectificationvalue;
      if(this.lines[i].statu != 'Completed')
      {
        x++;
      }
    }
    if(x==0)
    {
      this.saveCheck=true;
    }
    else
    {
      this.saveCheck=false;
    }
  }
  addbuttonenable:any=true;
  //deletebuttonenable:any=true;
  //modifybuttonenable:any=false;
  ngOnInit(): void {
    if(this.adm.screenCheck(11,2,4,1)){
      this.addbuttonenable=true;
    }
    else{
       this.addbuttonenable=false;
    }
    
   
   
  }
public openMIR(obj:any)
{

}
public save()
{
  var qty=(+this.batch.qty- (+this.rejected));
  var obj:any={
    ItemName: +this.batch.itemid,
    BatchNo: this.batch.batchno,
    Qtyin:qty,
    Qtyout: 0,
    Rat: ((+this.batch.materialcost + (+this.rectificationvalue)))/qty,
    ProductBatchNo:+this.batch.batchid

  };
  this.qc.setFinalQC(obj).subscribe(res =>
    {
      var det:any=res;
      if(det.result=='OK')
      {
        this.adm.showMessage('Batch saved Successfully','Success',1);
        this.requirementsAdd();
        this.lines=[];
        this.batch=null;
      }
      else
      {
        this.adm.showMessage(det.result,'Error',4);
      }
    });
}
}
