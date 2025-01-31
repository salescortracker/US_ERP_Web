import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class QcBatchesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getQCProcessRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    
    return this.http.post(this.adm.getActualURL() + "api/QCBatches/GetQCBatchRequirements",u,this.adm.makeConfig());
  }
  public setQCProcess(obj:any)
  {
    var tot:any={
      testdet:obj,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/QCBatches/SetQCProcessSet",tot,this.adm.makeConfig());

  }
  public getFinalQCRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    
    return this.http.post(this.adm.getActualURL() + "api/QCBatches/GetFinalProductionQCRequirements",u,this.adm.makeConfig());
 
  }
  public setFinalQC(obj:any)
  {
    var tot:any={
mgt:obj,
usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/QCBatches/SetFinalProductionQC",tot,this.adm.makeConfig());
 
    
  }
}
