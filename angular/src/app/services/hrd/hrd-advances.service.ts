import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdAdvancesService {

  
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDAdvanceRequirements()
  {
     return this.http.post(this.adm.getActualURL() + 'api/HRDAdvances/GetHRDAdvanceRequirements',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public setHRDAdvance(advance:any)
  {
      var tot:any={
        advance:advance,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/HRDAdvances/setAdvance',tot,this.adm.makeConfig());
 
  }
  public getHRDAdvances(fromdate:string)
  {
    var inf:any={
      frmDate:fromdate,
      usr:this.adm.getUserCompleteInformation()
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDAdvances/GetHRDAdvances',inf,this.adm.makeConfig());
 
  }
}
