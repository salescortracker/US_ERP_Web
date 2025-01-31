import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MaiPreveMaintenancesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getMaiPrevMaintenanceRequirements():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
        return this.http.post(this.adm.getActualURL() + "api/maiPreventiveMaintenance/GetMaiEquipmentPMRequirements",u,this.adm.makeConfig());

  }
  public getMaiPrevMaintenances(fromdate:string):any
  {

    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/maiPreventiveMaintenance/GetMaiEquipmentPMList",inf,this.adm.makeConfig());
  }
  public setMaiEquipmentPM(obj:any):any
  {
var tot:any={
  pm:obj,
  usr:this.adm.getUserCompleteInformation().usr
}
return this.http.post(this.adm.getActualURL() + "api/maiPreventiveMaintenance/SetMaiEquipmentPM",tot,this.adm.makeConfig());

  }
}
