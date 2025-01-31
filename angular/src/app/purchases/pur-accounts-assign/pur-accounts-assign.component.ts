import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurPurchaseTypesService } from 'app/services/purchases/pur-purchase-types.service';
import { findIndex } from 'rxjs/operators';
 

@Component({
  selector: 'app-pur-accounts-assign',
  templateUrl: './pur-accounts-assign.component.html',
  styleUrls: ['./pur-accounts-assign.component.scss']
})
export class PurAccountsAssignComponent implements OnInit {
public details:any[]=[];
public accounts:any[]=[];
public authCheck:boolean=false;
  constructor(private pur:PurPurchaseTypesService, private acc:AccAccountsService, private adm:AdminGeneralInfoService,private router:Router) { 
    if(this.adm.screenCheck(2,8,4,0))
    {
      this.authCheck=true;
   
      this.acc.getAccountsForTransactions().subscribe(res =>
        {
          var acco:any=res;
          this.accounts=acco;

          this.pur.getPurchaseAccountsAssign().subscribe(res =>
            {
              var det:any=res;
                this.details=det;
                for(var i=0;i<this.details.length;i++)
                {
                  this.findGroup(this.details[i]);
                }
            });
      
           
        });
      }
      else
      {
        this.authCheck=false;
      }

  }

  addbuttonenable:any=true;
  modifybuttonenable:any=true;
  deletebuttonenable:any=true;
  ngOnInit(): void {
  // this.listAdd();
  
  if(this.adm.screenCheck(2,8,4,1)){
   this.addbuttonenable=true;
  }
  else{
    this.addbuttonenable=false;
  }
  if(this.adm.screenCheck(2,8,4,2)){
  this.modifybuttonenable=true;
  }
  else{
   this.modifybuttonenable=false;
  }
  if(this.adm.screenCheck(2,8,4,3)){
  this.deletebuttonenable=true;
  }
  else{
   this.deletebuttonenable=false;
  }

  
  
  }
public findGroup(obj:any)
{
  debugger
  var det=this.accounts.filter(a => a.accountId == obj.accountId);
  if(det.length >0)
  {
    obj.grp=det[0].grp;
  }
}
public save()
{
  console.log(this.details);
  var obj:any[]=[];
  for(var i=0;i<this.details.length;i++)
  {
    obj.push({
      Transcode:this.details[i].transcode,
      Account:+this.details[i].accountId,
      Module:'PUR'
    });
  }
  this.acc.setAccountDetailsForAssign(obj).subscribe(res =>
    {
        var result:any=res;
        if(result.result=='OK')
        {
            this.adm.showMessage('Accounts reverted successfully','Success',1);
        }
        else
        {
          this.adm.showMessage(result.result,'Error',4);
        }
    });
}
}
