import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AdmUsersService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAdmUsers()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/getUsers',this.userdetails.usr,this.adm.makeConfig());
  }
  public setAdmUser(user:any,profile:any)
  {
    var tot:any={
      user:user,
      profile:profile,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/addUser',tot,this.adm.makeConfig());
 
  }
  public resetUserPassword(ur:string)
  {
    var inf:any={
      detail:ur,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/admPasswordReset',inf,this.adm.makeConfig());
  }
  public userBlock(ur:string)
  {
    var inf:any={
      detail:ur,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/admUserBlock',inf,this.adm.makeConfig());
  }
  public getRegistrationDetails()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var cCode=usr.cCode;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/GetCustomerRegistration?cCode=' + cCode,this.adm.makeConfig());
  }
  public getRegistrationDetailsGetcustcode(code:any)
  {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
    var cCode=code;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/GetCustomerRegistration?cCode=' + cCode,this.adm.makeConfig());
  }  
  public savecustomEmailBycustomer(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.post(this.adm.getActualURL() + 'api/LoginControl/customEmailSave', cCode,this.adm.makeConfig());
  }  
  public savecustEmailBody(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.post(this.adm.getActualURL() + 'api/LoginControl/saveCustomBody', cCode,this.adm.makeConfig());
  }  
  public savecustEmailsignature(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.post(this.adm.getActualURL() + 'api/LoginControl/saveCustomsignature', cCode,this.adm.makeConfig());
  }  
   public savecustomEmailBycust(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/customEmailSaveBycustomer?customercode='+ cCode,this.adm.makeConfig());
  }  
  public customEmailBodygetBycustomer(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/customEmailBodygetBycustomer?customercode='+ cCode,this.adm.makeConfig());
  }  
  public customEmailsignaturegetBycustomer(code:any)
  {
    debugger;    
    var cCode=code;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/customEmailsignaturegetBycustomer?customercode='+ cCode,this.adm.makeConfig());
  }  
  public UpdateRegistrationTrails(code:any)
  {
 
    return this.http.post(this.adm.getActualURL() + 'api/LoginControl/UpdateRegistrationTrails', code,this.adm.makeConfig());
  }
  public getRegistrationDetailstrails()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var cCode=usr.cCode;
    return this.http.get(this.adm.getActualURL() + 'api/LoginControl/GetCustomerRegistrationTrails?cCode=' + cCode,this.adm.makeConfig());
  }
}
