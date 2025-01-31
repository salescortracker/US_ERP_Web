import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MaiBreakdownService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getBreakdowns(fromdate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/maiBreakdown/GetBreakdownList",inf,this.adm.makeConfig());
  }
  public setBreakdown(detail:any,tracheck:number)
  {
      var tot:any={
        detail:detail,
        usr:this.adm.getUserCompleteInformation().usr,
        traCheck:tracheck
      };
      return this.http.post(this.adm.getActualURL() + "api/maiBreakdown/SetMaiBreakdown",tot,this.adm.makeConfig());

  }
  public getServiceAssignsList(fromdate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/maiBreakdown/GetServiceAssignsList",inf,this.adm.makeConfig());
  }

  public setServiceAssign(detail:any,taxes:any[],tracheck:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      detail:detail,
      traCheck:tracheck,
      taxes:taxes,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/maiBreakdown/SetServiceAssign",tot,this.adm.makeConfig());
  }
  
}
