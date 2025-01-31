import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MaiInsurancesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInsurances(fromdate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/maiInsurances/GetInsurances",inf,this.adm.makeConfig());
  }
  public setInsurance(header:any,equips:number[],tracheck:number)
  {
var tot:any=
{
  header:header,
  equips:equips,
  traCheck:tracheck,
  usr:this.adm.getUserCompleteInformation().usr
};
return this.http.post(this.adm.getActualURL() + "api/maiInsurances/GentInsurance",tot,this.adm.makeConfig());

  }
  public getAmcs(fromdate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/maiAMC/GetAmcs",inf,this.adm.makeConfig());
  }
  public setAmc(header:any,equips:number[],tracheck:number)
  {
var tot:any=
{
  header:header,
  equips:equips,
  traCheck:tracheck,
  usr:this.adm.getUserCompleteInformation().usr
};
return this.http.post(this.adm.getActualURL() + "api/maiAMC/setAMC",tot,this.adm.makeConfig());

  }

  
}
