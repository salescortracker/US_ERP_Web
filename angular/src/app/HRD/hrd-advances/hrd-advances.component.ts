import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAdvancesService } from 'app/services/hrd/hrd-advances.service';
import { HrdLeavesTraService } from 'app/services/hrd/hrd-leaves-tra.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hrd-advances',
  templateUrl: './hrd-advances.component.html',
  styleUrls: ['./hrd-advances.component.scss']
})

export class HrdAdvancesComponent implements OnInit {
  public fromdate:Date= new Date();
  public advances:any;
  public opencheck:boolean=false;
public empid:number;
public employees:any;
  public advance:any={
    Empno:null,
    AdvanceDebit:0,
    AdvanceCutOff:0
  };
  public AdvanceDebit:number=0;
  public employee:any={
    recordid:0,
    empno:'',
    empname:'',
    mobile:'',
    department:'',
    designation:'',
    prevadvance:0,
    monthlydeduction:0
  };
  constructor(private spinner:NgxSpinnerService,private hrd:HrdAdvancesService,private adm:AdminGeneralInfoService)
{
  this.fromdate= new Date();
  this.listAdd();
  this.requirementsAdd();
 }

public listAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.hrd.getHRDAdvances(this.adm.stringData(this.fromdate)).subscribe(res =>
      {
        this.advances=res;
        this.spinner.hide();
      });
}
public findDetails()
{
  this.employee={
    recordid:0,
    empno:'',
    empname:'',
    mobile:'',
    department:'',
    designation:'',
    prevadvance:0,
    monthlydeduction:0
  };
  var det=this.employees.filter(a => a.recordid== +this.empid);
  if(det.length > 0)
  {
    this.employee={
      recordid:det[0].recordid,
      empno:det[0].empno,
      empname:det[0].empname,
      mobile:det[0].mobile,
      department:det[0].department,
      designation:det[0].designation,
      prevadvance:det[0].prevadvance,
      monthlydeduction:det[0].monthlydeduction
    };
  }
}

public requirementsAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.hrd.getHRDAdvanceRequirements().subscribe(res =>
      {
          this.employees=res;
          this.spinner.hide();
      });
}

openNew()
{
  this.makeCle();
  this.opencheck=true;
}
private makeCle()
{
  this.employee={
    recordid:0,
    empno:'',
    empname:'',
    mobile:'',
    department:'',
    designation:'',
    prevadvance:0,
    monthlydeduction:0
  };
  
  this.advance={
    Empno:null,
    AdvanceDebit:0,
    AdvanceCutOff:0
  };
}
close()
{
  this.opencheck=false;
}

  
addbuttonenable:any=true;
modifybuttonenable:any=true;
deletebuttonenable:any=true;
ngOnInit(): void {
// this.listAdd();

if(this.adm.screenCheck(8,3,5,1)){
 this.addbuttonenable=true;
}
else{
  this.addbuttonenable=false;
}
if(this.adm.screenCheck(8,3,5,2)){
this.modifybuttonenable=true;
}
else{
 this.modifybuttonenable=false;
}
if(this.adm.screenCheck(8,3,5,3)){
this.deletebuttonenable=true;
}
else{
 this.deletebuttonenable=false;
}



}
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
private valCheck():boolean
{
  if(+this.empid <= 0)
  {
    this.adm.showMessage('Select Employee','Warning',3);
    return false;
  }
  if(+this.AdvanceDebit <= 0)
  {
    this.adm.showMessage('Select Advance amount','Warning',3);
    return false;
  }
  if(+this.employee.monthlydeduction <=0)
  {
    this.adm.showMessage('Monthly Deduction not mentioned','Warning',3);
    return false;
  }
  return true;
}
  save()
  {
     if(this.valCheck())
     {
       this.advance={
        Empno:+this.empid,
        AdvanceDebit: +this.AdvanceDebit,
        AdvanceCutOff: +this.employee.monthlydeduction
      };

      this.hrd.setHRDAdvance(this.advance).subscribe(res =>
        {
            var det:any=res;
            if(det.result=='OK')
            {
                this.adm.showMessage('Advance details saved successfully','Success',1);
                this.makeCle();
                this.opencheck=false;
            }
            else
            {
              this.adm.showMessage(det.result,'Error',4);
            }
        });

     }
  }
}
