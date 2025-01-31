import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adm-states',
  templateUrl: './adm-states.component.html',
  styleUrls: ['./adm-states.component.scss']
})
export class AdmStatesComponent implements OnInit {

  public countries:any;
  public cnt:number;
  public states:any;
  public totalstates:any;
  public statename:String;
  public newState:string='';
  public isArrowPaused: boolean = false;
  public isCountrySelected: boolean = false;
  @ViewChild('autoModal') autoModal: any; // Reference to the modal template
  constructor(private adm:AdminGeneralInfoService,private sta:AdmCountriesService,private router:Router, private modalService: NgbModal) { 
    if(this.adm.screenCheck(-1,-1,-1,-1))
    {
        this.listAdd();
    }
    else
  {
    this.router.navigateByUrl('admin/unauthorize');
  }



  }

  public listAdd()
  {
    this.sta.getAdmTotalCountries().subscribe(res => 
      {
          this.countries=res;
          
      });  
    this.sta.getTotalStates().subscribe(res => 
      {
        this.totalstates=[];
        var det:any=res;
        for(var i=0;i<det.length;i++)
      {
          this.totalstates.push({
            cntname:det[i].cntname, 
            customerCode:det[i].customerCode, 
            gstStart:det[i].gstStart, 
            recordId: det[i].recordId,
            stateName:det[i].stateName,
            chk:0
          }); 
      }
      })
     
  }

  public getStates()
  {
      this.states=this.totalstates.filter(a => a.cntname == this.cnt);
  }

  public saveState()
  {
    if(!this.cnt )
    {
      this.adm.showMessage('Country not selected','Warning',3);
          return;
    }
    if(!this.statename)
    {
      this.adm.showMessage('State not Entered','Warning',3);
      return;
    }
    if(this.statename.trim()=='')
    {
      this.adm.showMessage('State not Entered','Warning',3);
      return;
    }
      for(var i=0;i<this.states.length;i++)
      {
        if(this.states[i].stateName.toUpperCase() == this.statename.toUpperCase())
        {
          this.adm.showMessage('This State name is already existed','Warning',3);
          return;
        }
      } 
      var obj:any=
      {
        Cntname:+this.cnt,
        StateName:this.statename
      }

      this.sta.setState(obj,1).subscribe(res =>
        {
          var result:any=res;
          if(result.result=="OK")
          {
            
            this.adm.showMessage('State Saved Successfully','Success',1);
            this.totalstates.push({
              cntname:+this.cnt,
              stateName:this.statename
            });
            this.states.push({
              cntname:+this.cnt,
              stateName:this.statename
            });
             this.statename='';
              // Trigger modal after 5 seconds
        setTimeout(() => {
          this.openAutoModal();
        }, 5000);
          }
          else
          {
            this.adm.showMessage(result.result,'Error',4);
          }
        });

  }
  ngOnInit(): void {
  }
  deleteState(obj:any)
  {
    this.sta.deleteState(obj.recordId).subscribe(res =>
      {
          var det:any=res;
          if(det.result=='OK')
          {
            this.adm.showMessage('State Deleted successfully','Success',1);
            var index=this.totalstates.indexOf(obj);
            this.totalstates.splice(index,1);
            this.getStates();
          }
          else
          {
            this.adm.showMessage(det.result,'Error',4);
          }
      });
     
  }
  public modifyState(obj:any)
  {
    console.log('newstate',this.newState);
    this.sta.updateState(obj.recordId,this.newState).subscribe(res =>
      {
        var det:any=res;
        if(det.result=='OK')
        {
          this.adm.showMessage('State Modified successfully','Success',1);
          obj.stateName=this.newState;
          obj.chk=0;
        }
        else
        {
          this.adm.showMessage(det.result,'Error',4);
        }
      });
  }
 public oldState(obj:any)
 {
   this.newState=obj.stateName;
  obj.chk=1;
 }
public closeState(obj:any)
{
  obj.chk=0;
}
  // Open modal method
  openAutoModal(): void {
    const modalRef: NgbModalRef = this.modalService.open(this.autoModal, { centered: true });
  }

  // Arrow control methods
  stopArrowMovement(): void {
    this.isArrowPaused = true;
  }

  startArrowMovement(): void {
    this.isArrowPaused = false;
  }

  onCountryChange() {
    this.getStates();
    this.isCountrySelected = true; // Trigger state arrow movement
  }

  // Redirect to Taxes Page
  redirectToTaxes(modal: NgbModalRef): void {
    modal.close(); // Close the modal
    this.router.navigateByUrl('/admin/taxes'); // Navigate to taxes page
  }

}
