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
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';

@Component({
  selector: 'app-mai-service-assign',
  templateUrl: './mai-service-assign.component.html',
  styleUrls: ['./mai-service-assign.component.scss']
})
export class MaiServiceAssignComponent implements OnInit {
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
  
  public baseamt:number=0;
  public discount:number=0;
  public totalamt:number=0;
  public taxamt:number=0;

  public opencheck:boolean=false;
  public suppliers:any;
  public supid:number=0;
  public taxes:any;

  public opened:boolean=false;
  constructor(private mai:MaiBreakdownService, private adm:AdminGeneralInfoService,private equ:MaiEquipDetailsService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService, private cnt:AdmCountriesService,
    private sup:PartyDetailsService) {
      this.listAdd();
      this.requirementsAdd();
      this.suppliersAdd();
      this.taxesAdd();
       }
       private taxesAdd()
       {
          this.cnt.getTaxes().subscribe(res =>
            {
                this.taxes=res;
                console.log(this.taxes);
            });
       }
       private suppliersAdd()
       {
         this.sup.getPartyDetails("SUP").subscribe(res =>
          {
              var det:any=res;
              this.suppliers=det.parties;
          });
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
         this.mai.getServiceAssignsList(this.adm.stringData(this.listdate)).subscribe(res =>
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
         this.mai.getBreakdowns(this.adm.stringData(this.listdate)).subscribe(res =>
          {
            var det:any=res;
            this.equips=det.filter(a => a.serviceassign=="Pending");
              this.spinner.hide();
          });
       }
       addbuttonenable:any=true;
       deletebuttonenable:any=true;
       modifybuttonenable:any=false;
       printbuttonenable:any=false;
       ngOnInit(): void {
         if(this.adm.screenCheck(9,2,6,1)){
           this.addbuttonenable=true;
         }
         else{
            this.addbuttonenable=false;
         }
         if(this.adm.screenCheck(9,2,6,2)){
          this.modifybuttonenable=true;
        }
        else{
           this.modifybuttonenable=false;
        }
        if(this.adm.screenCheck(9,2,6,3)){
          this.deletebuttonenable=true;
        }
        else{
           this.deletebuttonenable=false;
        }
       
         
        
        
       }
    openNew()
    {
      this.opencheck=true;
      this.makeCle();
    }
    makeCle()
    {
       this.equipid=0;
       this.descr='';
       this.tradate=new Date();
       this.detail=null;
       this.baseamt=0;
       this.discount=0;
       this.totalamt=0;
       for(var i=0;i<this.taxes.length;i++)
       {
         this.taxes[i].taxValue=0;
       }
    }
    close()
    {
      this.opencheck=false;
    }
    makeCalculations()
    {
        var tax:number=0;
        for(var i=0;i<this.taxes.length;i++)
        {
          if(this.taxes[i].taxValue)
          {
            tax=tax+this.taxes[i].taxValue;
          }
        }
        this.taxamt=tax;
        this.totalamt=this.baseamt-this.discount+tax;
    }
    public findDetails()
    {
      var det=this.equips.filter(a => a.recordid == +this.equipid);
      if(det.length > 0)
      {
        this.detail= det[0];
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
    if(this.valCheck())
    {
    var obj:any={
      RecordId: +this.equipid,
      ServiceProvider: +this.supid,
      ServiceBaseAmount: +this.baseamt,
      ServiceDiscount: +this.discount,
      ServiceTaxes: +this.taxamt,
      ServiceOtherAmt:0,
      ServiceTotalAmount: +this.totalamt,
     };
     var taxes:any[]=[];
      for(var i=0;i<this.taxes.length;i++)
      {
        if(this.taxes[i].taxAmt)
        {
          taxes.push({
            Taxid:this.taxes[i].taxCode,
            Taxper: +this.taxes[i].taxPer,
            TaxValue: +this.taxes[i].taxValue
          });
        }
      }
      this.mai.setServiceAssign(obj,taxes,1).subscribe(res =>
        {
            var det:any=res;
         if(det.result=='OK')
         {
           this.adm.showMessage('Service assigned successfully','Success',1);
            this.listAdd();
           
            this.requirementsAdd();
            this.makeCle();
           
         }
         else
         {
           this.adm.showMessage(det.result,'Error',4);
         }
        });
      }
  }

  valCheck():boolean
  {
    if(+this.equipid <=0)
    {
      this.adm.showMessage('Breakdown information not selected','Warning',3);
      return false;
    }
    if(+this.supid <=0)
    {
      this.adm.showMessage('Supplier not selected','Warning',3);
      return false;
    }

    return true;
  }
   
  
  
  }
  