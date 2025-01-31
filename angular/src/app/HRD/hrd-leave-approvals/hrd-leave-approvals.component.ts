import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdLeavesTraService } from 'app/services/hrd/hrd-leaves-tra.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hrd-leave-approvals',
  templateUrl: './hrd-leave-approvals.component.html',
  styleUrls: ['./hrd-leave-approvals.component.scss']
})
export class HrdLeaveApprovalsComponent implements OnInit {
public pendings:any;
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
            this.pendings=det.pendingrequests;
            this.spinner.hide();
        });
  }

  public save(obj:any)
  {
    if(obj.statu)
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.hrd.setLeaveRequestApproval(+obj.recordid, +obj.statu).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                this.adm.showMessage('Approval / Deny Submitted Successfully','Success',1);
                this.requirementsAdd();
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
      this.adm.showMessage('Select Status','Warning',3);
    }
  }
  addbuttonenable:any=true;
  modifybuttonenable:any=true;
  deletebuttonenable:any=true;
  ngOnInit(): void {
  // this.listAdd();
  
  if(this.adm.screenCheck(8,3,4,1)){
   this.addbuttonenable=true;
  }
  else{
    this.addbuttonenable=false;
  }
  
  
  
  
  }

}
