import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { SalSalesService } from 'app/services/pos/sal-sales.service';
import { SalDispatchesService } from 'app/services/sales/sal-dispatches.service';
import { EmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

@Component({
  selector: 'app-sal-despatch-clearances',
  templateUrl: './sal-despatch-clearances.component.html',
  styleUrls: ['./sal-despatch-clearances.component.scss']
})
export class SalDespatchClearancesComponent implements OnInit {

public sales:any;
  constructor(private sal:SalDispatchesService,private adm:AdminGeneralInfoService) {
    this.listAdd();
   }

  public listAdd()
  {
    this.sal.getPendingDispatches().subscribe(res =>
      { 
          this.sales=res;
      });
  }
  generatebuttonenable:any=true; 
  clearbuttonenable:any=false;
  ngOnInit(): void {
    if(this.adm.screenCheck(5,2,3,1)){
      this.generatebuttonenable=true;
    }
    else{
       this.generatebuttonenable=false;
    }
    if(this.adm.screenCheck(5,2,3,2)){
     this.clearbuttonenable=true;
   }
   else{
      this.clearbuttonenable=false;
   }

  }
  salGenerateCode(obj:any){
    debugger;
    this.sal.salGenerateCode(obj.recordId).subscribe(res =>
      {
        this.adm.showMessage('Generated Code and sent an email Successfully','Success',1);
      });
  }
  public checkPass(obj:any)
  {
    debugger;
    if(obj.pass !="")
    {
        this.sal.setPendingDispatchClearance(obj.recordId).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                  this.adm.showMessage('Cleared Successfully','Success',1);
                  this.listAdd();
              }
              else
              {
                this.adm.showMessage(det.result,'Error',4);
              }
          });
    }
    else
    {
      this.adm.showMessage('Invalid pass code','Warning',3);
    }
  }

}
