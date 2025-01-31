import { Injectable } from '@angular/core';
import { AdminGeneralInfoService, UserCompleteInfo } from '../admin/admin-general-info.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrmEnquiryregisterServiceService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public saveEnquiryregister(enquiryregisterForm: string) {
   debugger;
    return this.http.post(this.adm.getActualURL() + 'api/CRMEnquiryRegister/Savecrmenquiryregister',enquiryregisterForm,this.adm.makeConfig());
  }
  public getEnquiryregister() {
   
     var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.get(this.adm.getActualURL() + 'api/CRMEnquiryRegister/Getcrmenquiryregister',this.adm.makeConfig());
  }
  public getEnquiryregisterById(recordId:number) {
    debugger;
   //var  requestData = { recordId }
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMEnquiryRegister/GetcrmenquiryregisterById',recordId,this.adm.makeConfig());
 }
  public updateEnquiryregister(enquiryregisterForm:any) {
  
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMEnquiryRegister/Updatecrmenquiryregister',enquiryregisterForm,this.adm.makeConfig());
 }
 public deleteEnquiryregister(data: any) {

  var usr=this.adm.getUserCompleteInformation().usr;
 return this.http.post(this.adm.getActualURL() + 'api/CRMEnquiryRegister/GetcrmenquiryregisterDeleteById',data,this.adm.makeConfig());
}
}
