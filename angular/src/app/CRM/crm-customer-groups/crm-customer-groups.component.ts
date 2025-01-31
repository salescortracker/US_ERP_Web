
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 
import Swal from 'sweetalert2/dist/sweetalert2.js';
 import { CrmCustomerGroupsService } from 'app/services/crm/crm-customer-groups.service';

 import { Component, OnInit, ViewChild } from '@angular/core';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-crm-customer-groups',
  templateUrl: './crm-customer-groups.component.html',
  styleUrls: ['./crm-customer-groups.component.scss']
})
export class CrmCustomerGroupsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  page = 1; //pagination code
  pageSize = 15; //pagination code
  collectionSize = 0; //pagination code
  public saveStr:string='';
 
  public recordID:number=0;


  public treeObj:any;

  public isArrowPaused: boolean = false;
  @ViewChild('autoModal') autoModal: any;

public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;


  public opened:boolean=false;
  public grps:any;
  public totalgrps:any;
  public searchtext:string='';
  public authCheck:boolean=false;
  
  constructor(private sgrp:CrmCustomerGroupsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(7,1,3,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(7,1,3,3);
  
    this.listAdd();
 //   this.treeAdd();
}
else
{
this.router.navigateByUrl('crm/crmunauthorize');
this.authCheck=false;
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(7,1,3,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.maingrp='';
    this.subgrp='';
    this.maingrpid=0;
  }

  openOld(obj:any)
  {
    
   if(obj.chk > 0)
   {
     
    this.recordID=obj.recordId;
   
    this.subgrp=obj.sGrp;
    this.maingrp=obj.mGrp;
    
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(7,1,3,2);
    this.saveStr='Modify';
    this.opened=true;
    
   }
   else
   {
    this.toastr.warning('Builtin groups can not be modified / deleted','Warning');
   }
  }
valChk():Boolean
{
  if(this.subgrp.trim()=='')
  {
    this.toastr.warning('Sub Group not mentioned','Warning');
    return false;
  }
  if(this.maingrp.trim()=='')
  {
    // this.toastr.warning('Main Group not selected','Warning');
    // return false;
    this.maingrp="MAIN";
  }
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Group Details' ,  
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


        var obj:any={
          RecordId:this.recordID,
          MGrp:this.maingrp,
          SGrp:this.subgrp
  
        };
        var tracheck=3;
       this.sgrp.setCustomerGroup(obj,tracheck).subscribe(
          async res => {
            var result:any=res;
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Group Details deleted.',  
            'success'  
          )  ;

          if(this.recordID==0)
        {
           this.opened=true;
        }
        else
        {
             this.opened=false;
        }
        this.makeCle();
        this.listAdd();
        this.treeAdd();
   }
   else
   {
  Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
  }
      
   
  this.spinner.hide();
  });
}
});

}

  public save()
  {
     if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==0?'Confirms Group Details':'Modifies Group Details',  
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
    
    
            var obj:any={
           
              MGrp:this.maingrp,
              SGrp:this.subgrp
      
            };
            var tracheck=this.recordID==0?1:2;
            if(this.recordID != 0)
            {
              obj.RecordId=this.recordID;
            }
           this.sgrp.setCustomerGroup(obj,tracheck).subscribe(
              async res => {
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Group Details saved.',  
                'success'  
              )  ;

              if(this.recordID==0)
            {
               this.opened=true;
              
            }
            else
            {
                 this.opened=false;
                
            }
            this.makeCle();
            this.listAdd();
            this.treeAdd();
            this.close();//added by amrutha for redirect CRM -   s - Enquiries ( Customer details aren't appearing after selecting the edit option)
       }
       else
       {
      Swal.fire(  
          result.result,  
          'Some error in transaction',  
          'error'  
        )  
      }
          
      this.close(); 
      this.spinner.hide();
      });
    }
  });

}
  }

  close()
  {
    this.opened=false;
  }
listAdd()
{
  debugger;
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.sgrp.getCustomerGroups().subscribe(
    async res => {
      debugger;
      this.totalgrps=res;
    
      this.grps=this.totalgrps;
      this.searchItems();
     this.treeAdd();
    
   // this.spinner.hide(); 
    });
    
}
////pagination code
getlstdata(){

  this.totalgrps =  this.totalgrps

   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

   

 }
//pagination code
getPremiumData(){

  

  // this.details =  this.details

  //  .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

   this.listAdd();

 }
treeAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.sgrp.getCustomerGroupsTreeWise().subscribe(
    async res => {
      this.treeObj=res;
      
    this.spinner.hide(); 
    });
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
  this.maingrp=obj.subGroup;
  
}
public searchItems()
{
    this.grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
    this.collectionSize = this.grps.length; //pagination code
    this.getlstdata(); //pagination code
}
stopArrowMovement(): void {
  this.isArrowPaused = true;
}
startArrowMovement(): void {
  this.isArrowPaused = false;
}
}
