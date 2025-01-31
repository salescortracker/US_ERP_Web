import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSettingsService } from 'app/services/purchases/pur-settings.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-pur-purchase-return-covering-letter',
  templateUrl: './pur-purchase-return-covering-letter.component.html',
  styleUrls: ['./pur-purchase-return-covering-letter.component.scss']
})
export class PurPurchaseReturnCoveringLetterComponent implements OnInit {
  public typ:string='PUR_PRT';
  public letter:any={
    Typ:this.typ,
    Subjec:'',
    Body:'',
    Salutation:'',
    Img:''
  };
    constructor(private pur:PurSettingsService, private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
      if(this.adm.screenCheck(2,8,6,0))
        {
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
  
            this.pur.getPurCoveringLetterInfo(this.typ).subscribe(res =>
              {
                var det:any=res;
                if(det)
                {
                    this.letter.Subjec=det.subjec;
                    this.letter.Body=det.body;
                    this.letter.Salutation=det.salutation;
                    this.letter.Img=det.img;
                }
  
                this.spinner.hide();
              });
  
  
  
          }
          else
          {
            this.router.navigateByUrl('purchases/unauthorize');
          }
    
    }
  
    addbuttonenable:any=true;
    modifybuttonenable:any=true;
    deletebuttonenable:any=true;
    ngOnInit(): void {
    // this.listAdd();
    
    if(this.adm.screenCheck(2,8,8,1)){
     this.addbuttonenable=true;
    }
    else{
      this.addbuttonenable=false;
    }
    if(this.adm.screenCheck(2,8,8,2)){
    this.modifybuttonenable=true;
    }
    else{
     this.modifybuttonenable=false;
    }
    if(this.adm.screenCheck(2,8,8,3)){
    this.deletebuttonenable=true;
    }
    else{
     this.deletebuttonenable=false;
    }
  
    
    
    }
  
  save()
  {
    Swal.fire({  
      title:   'Reverts Setting Details',  
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
        
          this.pur.setPurCoveringLetterInfo(this.letter).subscribe(res =>
            {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Details saved',  
                    'success'  
                  )  ;
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Some error in transaction',  
                    'error'  
                  )  
                }
            });
  
  
  
  
      }
  
    });
  }
  
  }
  