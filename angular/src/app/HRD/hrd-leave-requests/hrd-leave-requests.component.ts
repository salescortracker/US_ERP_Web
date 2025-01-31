import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdLeavesTraService } from 'app/services/hrd/hrd-leaves-tra.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hrd-leave-requests',
  templateUrl: './hrd-leave-requests.component.html',
  styleUrls: ['./hrd-leave-requests.component.scss']
})
export class HrdLeaveRequestsComponent implements OnInit {
public employees:any;
public empid:number=-1;
public employee:any={
  recordid:0,
  empno:'',
  empname:'',
  mobile:'',
  department:'',
  designation:'',
  prevleaves:0
};
public fromdate:Date= new Date();
public todate:Date=new Date();
  constructor(private spinner:NgxSpinnerService,private hrd:HrdLeavesTraService,private adm:AdminGeneralInfoService)
{ 
  this.requirementsAdd();
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
    this.hrd.getHRDLeaveRequirements().subscribe(res =>
      {
        var det:any=res;
          this.employees=det.employees;
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
    prevleaves:0
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
      prevleaves:det[0].prevleaves
    };
  }
}


addbuttonenable:any=true;
modifybuttonenable:any=true;
deletebuttonenable:any=true;
ngOnInit(): void {
// this.listAdd();

if(this.adm.screenCheck(8,3,3,1)){
 this.addbuttonenable=true;
}
else{
  this.addbuttonenable=false;
}
if(this.adm.screenCheck(8,3,3,2)){
this.modifybuttonenable=true;
}
else{
 this.modifybuttonenable=false;
}
if(this.adm.screenCheck(8,3,3,3)){
this.deletebuttonenable=true;
}
else{
 this.deletebuttonenable=false;
}



}
public save()
{
if(+this.empid > 0)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    var obj:any={
      Empno: +this.empid,
      LeaveFrom: new Date(this.adm.stringData(this.fromdate)),
      LeaveTo: new Date(this.adm.stringData(this.todate)),
    };
    this.hrd.setLeaveRequest(obj).subscribe(res =>
      {
        var det:any=res;
        if(det.result=='OK')
        {
          this.adm.showMessage('Leave applied successfully','Success',1);
          this.employee={
            recordid:0,
            empno:'',
            empname:'',
            mobile:'',
            department:'',
            designation:'',
            prevleaves:0
          };
          this.empid=-1;
          
        }
        else
        {
          this.adm.showMessage(det.result,'Error',4);
        }
        this.spinner.hide();
      });
}
else
{
  this.adm.showMessage('Select Employee','Warning',3);
}
}
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
}
