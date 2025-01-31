import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccDashboardServiceService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getDashboard()
  {
    return this.http.post(this.adm.getActualURL() + 'api/accounts/GetDashBoardDetails',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
}
