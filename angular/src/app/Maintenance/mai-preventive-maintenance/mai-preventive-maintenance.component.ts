import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MaiEquipGroupsService } from 'app/services/maintenance/mai-equip-groups.service';
import { MaiEquipDetailsService } from 'app/services/maintenance/mai-equip-details.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { MaiPreveMaintenancesService } from 'app/services/maintenance/mai-preve-maintenances.service';

@Component({
  selector: 'app-mai-preventive-maintenance',
  templateUrl: './mai-preventive-maintenance.component.html',
  styleUrls: ['./mai-preventive-maintenance.component.scss']
})
export class MaiPreventiveMaintenanceComponent implements OnInit {
public prevmains:any;
public listdate:Date= new Date();
public equips:any;
public equipid:number=0;

public totaldetails:any;
public details:any;
public sno:number=0;
public detail:any;
public descr:string='';

public opencheck:boolean=false;

constructor(private mai:MaiPreveMaintenancesService, private adm:AdminGeneralInfoService,
  private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService) {
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
       this.mai.getMaiPrevMaintenances(this.adm.stringData(this.listdate)).subscribe(res =>
        {
          this.prevmains=res;
          this.spinner.hide();
        });
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
       this.mai.getMaiPrevMaintenanceRequirements().subscribe(res =>
        {
          var det:any=res;
          this.equips=det.equipment;
          this.totaldetails=det.details;
          console.log(det);
          this.spinner.hide();
        });
     }
     addbuttonenable:any=true;
     deletebuttonenable:any=true;
     modifybuttonenable:any=false;
     printbuttonenable:any=false;
     ngOnInit(): void {
       if(this.adm.screenCheck(9,2,1,1)){
         this.addbuttonenable=true;
       }
       else{
          this.addbuttonenable=false;
       }
       if(this.adm.screenCheck(9,2,1,2)){
        this.modifybuttonenable=true;
      }
      else{
         this.modifybuttonenable=false;
      }
      if(this.adm.screenCheck(9,2,1,3)){
        this.deletebuttonenable=true;
      }
      else{
         this.deletebuttonenable=false;
      }
     
       
      
      
     }
  openNew()
  {
    this.opencheck=true;
  }
  makeCle()
  {
    this.details=null;
    this.detail=null;
    this.equipid=0;
  }
  close()
  {
    this.opencheck=false;
  }
  public findDetails()
  {
    this.details=this.totaldetails.filter(a => a.recordId == +this.equipid);
  }

  public findPmDetails()
  {
    var det=this.details.filter(a => a.recordId == +this.equipid && a.sno == this.sno);
    if(det.length > 0)
    {
        this.detail={
recordid:det[0].recordId,
sno:det[0].sno,
prevmaintenance:det[0].prevmaintenance,
prevdate:det[0].prevdate,
nextdate:det[0].nextdate
        };
    }
    else
    {
      this.detail=null;
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
  var obj:any={
    Equipid: +this.equipid,
    Sno: +this.sno,
    Descriptio:this.descr
  };
    this.mai.setMaiEquipmentPM(obj).subscribe(res =>
      {
          var det:any=res;
       if(det.result=='OK')
       {
         this.adm.showMessage('Maintenance added successfully','Success',1);
         this.requirementsAdd();
         this.listAdd();
       }
       else
       {
         this.adm.showMessage(det.result,'Error',4);
       }
      });
}



}
