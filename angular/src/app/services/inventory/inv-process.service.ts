import { Injectable } from '@angular/core';
import { AdminGeneralInfoService, UserCompleteInfo } from '../admin/admin-general-info.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InvProcessService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public saveprocess(processForm:string) {
  
    return this.http.post(this.adm.getActualURL() + 'api/Inventory/SaveProcess',processForm,this.adm.makeConfig());
  }
  public getprocess() {
  
     var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetProcess',usr,this.adm.makeConfig());
  }

  public deleteprocess(data: any) {

    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetProcessDeleteById',data,this.adm.makeConfig());
  }
  public updateprocess(processForm:any) {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/Inventory/UpdateProcess',processForm,this.adm.makeConfig());
 }
 public getprocessById(recordId:number){
  
  debugger;
  var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetProcessById',recordId,this.adm.makeConfig());
}


}
