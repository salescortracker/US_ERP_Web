import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmDashboardService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCRMDashboard():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/CRMDashboard/GetCRMDashboard",u,this.adm.makeConfig());
  }
  public getPendingCalls()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMDashboard/GetPendingCalls",u,this.adm.makeConfig());
}
public getReminderDate()
{
  var u=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + "api/CRMDashboard/GetNextCallDates",u,this.adm.makeConfig());
}
}
