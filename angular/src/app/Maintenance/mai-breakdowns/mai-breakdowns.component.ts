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
import { MaiBreakdownService } from 'app/services/maintenance/mai-breakdown.service';

@Component({
  selector: 'app-mai-breakdowns',
  templateUrl: './mai-breakdowns.component.html',
  styleUrls: ['./mai-breakdowns.component.scss']
})
export class MaiBreakdownsComponent implements OnInit {
  public prevmains:any;
  public listdate:Date= new Date();
  public equips:any;
  public equipid:number=0;
  public tradate:Date= new Date();
  public totaldetails:any;
  public details:any;
  public sno:number=0;
  public detail:any;
  public descr:string='';
  public workdisturb:boolean=false;
  public opencheck:boolean=false;
  
  constructor(private mai:MaiBreakdownService, private adm:AdminGeneralInfoService,private equ:MaiEquipDetailsService,
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
         this.mai.getBreakdowns(this.adm.stringData(this.listdate)).subscribe(res =>
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
         this.equ.getEquipmentDetails().subscribe(res =>
          {
            var det:any=res;
            this.equips=det;
              this.spinner.hide();
          });
       }
       addbuttonenable:any=true;
       deletebuttonenable:any=true;
       modifybuttonenable:any=false;
       printbuttonenable:any=false;
       ngOnInit(): void {
         if(this.adm.screenCheck(9,2,2,1)){
           this.addbuttonenable=true;
         }
         else{
            this.addbuttonenable=false;
         }
         if(this.adm.screenCheck(9,2,2,2)){
          this.modifybuttonenable=true;
        }
        else{
           this.modifybuttonenable=false;
        }
        if(this.adm.screenCheck(9,2,2,3)){
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
       this.equipid=0;
       this.descr='';
       this.tradate=new Date();
    }
    close()
    {
      this.opencheck=false;
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
      BreakDownDate: new Date(this.adm.stringData(this.tradate)),
      BreakDownDescription:this.descr,
      WorkDisturbanceCheck:this.workdisturb?1:0
    };
      this.mai.setBreakdown(obj,1).subscribe(res =>
        {
            var det:any=res;
         if(det.result=='OK')
         {
           this.adm.showMessage('Breakdwon added successfully','Success',1);
            this.listAdd();
            this.makeCle();
         }
         else
         {
           this.adm.showMessage(det.result,'Error',4);
         }
        });
  }
  
  
  
  }
  