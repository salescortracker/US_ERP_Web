import { Injectable } from '@angular/core';
import { AdminGeneralInfoService, UserCompleteInfo } from '../admin/admin-general-info.service';
import { HttpClient } from '@angular/common/http';
import { de } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class CustomerInwardService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public saveInward(inwardForm:string) {
  
    return this.http.post(this.adm.getActualURL() + 'api/CustomerInward/SaveInward',inwardForm,this.adm.makeConfig());
  }
  public getInwards() {

     var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CustomerInward/GetInward',usr,this.adm.makeConfig());
  }

  public deleteInward(data: any) {
 
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CustomerInward/GetInwardDeleteById',data,this.adm.makeConfig());
  }
  public updateInward(inwardForm:any) {

    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CustomerInward/UpdateInward',inwardForm,this.adm.makeConfig());
 }
 public getInwardById(recordId:number){
  
  debugger;
  var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/CustomerInward/GetInwardById',recordId,this.adm.makeConfig());
}
// Units

public saveUnits(Form:string) {
  
  return this.http.post(this.adm.getActualURL() + 'api/SaveUnits',Form,this.adm.makeConfig());
}
public getUnits() {

   var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/GetUnits',usr,this.adm.makeConfig());
}

public deleteUnits(data: any) {

  var usr=this.adm.getUserCompleteInformation().usr;
 return this.http.post(this.adm.getActualURL() + 'api/GetUnitsDeleteById',data,this.adm.makeConfig());
}
public updateUnits(Form:any) {

  var usr=this.adm.getUserCompleteInformation().usr;
 return this.http.post(this.adm.getActualURL() + 'api/UpdateUnits',Form,this.adm.makeConfig());
}
public getUnitsById(recordId:number){

debugger;
var usr=this.adm.getUserCompleteInformation().usr;
return this.http.post(this.adm.getActualURL() + 'api/GetUnitsById',recordId,this.adm.makeConfig());
}
}
