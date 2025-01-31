import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmKeyReportsService } from 'app/services/crm/crm-key-reports.service';
import { CrmPreSaleReportsService } from 'app/services/crm/crm-pre-sale-reports.service';
const now = new Date();

@Component({
  selector: 'app-crm-pre-rep-callerwise-calls',
  templateUrl: './crm-pre-rep-callerwise-calls.component.html',
  styleUrls: ['./crm-pre-rep-callerwise-calls.component.scss']
})
export class CrmPreRepCallerwiseCallsComponent implements OnInit {
  public details:any;

  public pdffile:string='';

  public excelfile:string='';

  public searchtext:string='';

  public authCheck:boolean=false;

  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  

  page = 1;

  pageSize = 5;

  collectionSize = 0;



  premiumData : any[] = [];

  getEnquiriesList: any;





  constructor(private crm:CrmPreSaleReportsService,private adm:AdminGeneralInfoService,

    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService

   ) { 

    if(this.adm.screenCheck(7,9,2,0))

    {

     this.authCheck=true;

     }

    else

    {

     this.authCheck=false;

     this.router.navigateByUrl('fo/unAuthorize');

    }



   }

   listAdd()

   {

     

     this.spinner.show(undefined,

       {

         type: 'ball-triangle-path',

         size: 'medium',

         bdColor: 'rgba(0, 0, 0, 0.8)',

         color: '#fff',

         fullScreen: true

       });

     

     this.crm.getTeleCallsList(this.adm.strDate(this.fromdate),this.adm.strDate(this.todate)).subscribe(

       async res => {

         var det:any=res;

         console.log(det);

         if(det)

         {

         this.details=det.details;

        this.pdffile= this.adm.getReportsURL() + det.pdfFile;

        this.excelfile= this.adm.getReportsURL() + det.excelFile;

        this.collectionSize = this.details.length;

        this.getlstdata();

         }

        

       this.spinner.hide(); 

       });

       

   }

  

   

  ngOnInit(): void {

  }

  getlstdata(){

    

    this.details =  this.details

     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

     

   }

  

  getPremiumData(){

    

    // this.details =  this.details

    //  .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

     this.listAdd();

   }

}
