import { Injectable } from '@angular/core';
import { AdminGeneralInfoService,UserCompleteInfo } from 'app/services/admin/admin-general-info.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvScopeofSupplyService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public saveScopeofSupply(scopeForm:string) {
  
    return this.http.post(this.adm.getActualURL() + 'api/Inventory/SaveScopeofSupply',scopeForm,this.adm.makeConfig());
  }
  public getScopeofSupply() {
  
     var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetScopeOfSupply',usr,this.adm.makeConfig());
  }
  
  public deleteScopeofSupply(data: any) {
  
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetScopeofSupplyDeleteById',data,this.adm.makeConfig());
  }
  public updateScopeofSupply(scopeForm:any) {
    debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/Inventory/UpdateScopeofSupply',scopeForm,this.adm.makeConfig());
  }
  public getScopeofSupplyById(recordId:number){
  
  debugger;
  var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/Inventory/GetScopeofSupplyById',recordId,this.adm.makeConfig());
  }
}
