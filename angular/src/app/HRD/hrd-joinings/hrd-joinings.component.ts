import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAppoinementsService } from 'app/services/hrd/hrd-appoinements.service';
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { HrdInterviewsService } from 'app/services/hrd/hrd-interviews.service';
import { HrdResumeService } from 'app/services/hrd/hrd-resume.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
 


})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { 
  }
}
@Component({
  selector: 'app-hrd-joinings',
  templateUrl: './hrd-joinings.component.html',
  styleUrls: ['./hrd-joinings.component.scss']
})
export class HrdJoiningsComponent implements OnInit {
  
  public totalcandidates:any;
   
  
    constructor( private hrd:HrdAppoinementsService, private hrr:HrdResumeService,   private adm:AdminGeneralInfoService,
      private emp:HrdEmployeesService,  private router:Router,private spinner:NgxSpinnerService,private modalService: NgbModal,) { 
        if(this.adm.screenCheck(8,2,4,0))
        {
             this.makeRequirements();
        }
        else
        {
          this.router.navigateByUrl('hrd/unauthorzeid');
        }
      }
  
      public makeRequirements()
      {
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
          this.hrd.getJoiningRequirements().subscribe(res =>
            {
             this.totalcandidates=res;
              this.spinner.hide();
            });
      }
  
      
   
  private valCheck(obj:any):boolean
  {
    if(obj.empno==null)
    {
      this.adm.showMessage('Empno not selected','Warning',3);
      return false;
    }
    if(obj.empno.trim()=='')
    {
      this.adm.showMessage('Empno not selected','Warning',3);
      return false;
    }
    return true;
  
  }
  public save(obj:any)
  {
    if(this.valCheck(obj))
    {
      Swal.fire({  
        title:  'Confirms Joining Details' ,  
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

            var empno=obj.empno;
            var line:any={
              JoiningComments:obj.comments,
              RecordId:obj.recordId,
              ResumeId:obj.resumeId
            };
            this.hrd.setJoining(empno,line).subscribe(res =>
              {
                  var det:any=res;
                  if(det.result=='OK')
                  {
                    Swal.fire(  
                      'Transaction Completed Successfully!',  
                      'Joining Completed Successfully',  
                      'success'  
                    );
                    this.makeRequirements();
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
  addbuttonenable:any=true;
  modifybuttonenable:any=true;
  deletebuttonenable:any=true;
  ngOnInit(): void {
  // this.listAdd();
  
  if(this.adm.screenCheck(8,2,5,1)){
   this.addbuttonenable=true;
  }
  else{
    this.addbuttonenable=false;
  }
  if(this.adm.screenCheck(8,2,5,2)){
  this.modifybuttonenable=true;
  }
  else{
   this.modifybuttonenable=false;
  }
  if(this.adm.screenCheck(8,2,5,3)){
  this.deletebuttonenable=true;
  }
  else{
   this.deletebuttonenable=false;
  }
  
  
  
  }
  
  }
  