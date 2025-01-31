import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAppoinementsService } from 'app/services/hrd/hrd-appoinements.service';
import { HrdAttendancesService } from 'app/services/hrd/hrd-attendances.service';
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { HrdInterviewsService } from 'app/services/hrd/hrd-interviews.service';
import { HrdResumeService } from 'app/services/hrd/hrd-resume.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-hrd-attendances',
  templateUrl: './hrd-attendances.component.html',
  styleUrls: ['./hrd-attendances.component.scss']
})
export class HrdAttendancesComponent implements OnInit {
public details:any;
public dat:Date=new Date();
  constructor(private hrd:HrdAttendancesService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router ) { 
      
    }

    public getDetails()
    {
      this.hrd.getHRDAttendanceRequirements(this.adm.stringData(this.dat)).subscribe(res =>
        {
          this.details=res;
          for(var i=0;i<this.details.length;i++)
          {
            this.details[i].attend='X';
          }
        });
    }

    addbuttonenable:any=true;
    modifybuttonenable:any=true;
    deletebuttonenable:any=true;
    ngOnInit(): void {
    // this.listAdd();
    
    if(this.adm.screenCheck(8,3,2,1)){
     this.addbuttonenable=true;
    }
    else{
      this.addbuttonenable=false;
    }
    if(this.adm.screenCheck(8,3,2,2)){
    this.modifybuttonenable=true;
    }
    else{
     this.modifybuttonenable=false;
    }
    if(this.adm.screenCheck(8,3,2,3)){
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
  save()
  {

  }
}
