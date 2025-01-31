import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdLeavesTraService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDLeaveRequirements()
  {
     return this.http.post(this.adm.getActualURL() + 'api/HRDLeavesTra/GetHRDLeaveRequestRequirements',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public setLeaveRequest(leave:any)
  {
    var tot:any={
      leave:leave,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDLeavesTra/setLeaveRequest',tot,this.adm.makeConfig());
 
  }
  public setLeaveRequestApproval(rec:number,chk:number)
  {
    var inf:any={
      recordId:rec,
      traCheck:chk,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDLeavesTra/setLeaveRequestApproval',inf,this.adm.makeConfig());
 
  }
}
