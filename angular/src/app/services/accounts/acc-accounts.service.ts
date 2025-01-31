import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccAccountsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAccounts()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetAccounts',this.userdetails.usr);

  }
  
  public setAccount(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var details:any={
      acc:obj,
      tracheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/setAccount',details,this.adm.makeConfig());
  }
  public getTreeWiseAccounts(str:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:str,
      usr:usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/accAccountGroups/GetAccountTypeWiseTreeView',inf,this.adm.makeConfig());
  }

  public getAccountsTypeWise(str:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:str,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetAccountsTypeWise',inf,this.adm.makeConfig())
    
  }

  public getPartyDetails()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/accParty/GetFinPartyDetails',usr,this.adm.makeConfig())
  }
  public getCompleteAssetsandLiabilities()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetTotalAssetsandLiabilitiesAccounts',usr,this.adm.makeConfig())
  }

  public setPartyDetails(party:any,typ:String):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      party:party,
      actype:typ,
      usr:usr
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/accParty/SetFinPartyDetails',tot,this.adm.makeConfig())
  }

  public getAccountsForTransactions()
  {
       var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/accCompleteInformation',usr,this.adm.makeConfig())
  }

  public getBlankSuppliers()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankSuppliers',usr,this.adm.makeConfig())

    
  }

  public getAccountsForTransfers()
  {
       var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/accTransactionAccInformation',usr,this.adm.makeConfig())
  }


  public getPartiesForTransactions(str:string)
  {
    var inf:any={
      detail:str,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/finPartyDetailsForTransactions',inf,this.adm.makeConfig())
  }


  public getAccountDetailsForAssignForPurchases()
  {
var usr=this.adm.getUserCompleteInformation().usr;
return this.http.post(this.adm.getActualURL() + 'api/accountsassign/GetAccountsAssignDetailsPurchases',usr,this.adm.makeConfig())


  }
  public setAccountDetailsForAssign(obj:any[])
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      list:obj,
      usr:usr
    }

return this.http.post(this.adm.getActualURL() + 'api/accountsassign/SetAccountsAssignDetails',tot,this.adm.makeConfig())

  }

  public getcrmcallforreason(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmcallforreason',obj,this.adm.makeConfig())

  }
  public savecrmcallforreason(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/savecrmcallforreason',obj,this.adm.makeConfig())

  }

  public updatecrmcallforreason(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updatecrmcallforreason',obj,this.adm.makeConfig())

  }
  public deletecrmcallforreason(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deletecrmcallforreason',obj,this.adm.makeConfig())

  }
  public getcrmcallforreasonById(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmcallforreasonById',obj,this.adm.makeConfig())

  }

  //order status
  public getcrmorderstatus(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmorderstatus',obj,this.adm.makeConfig())

  }
  public getadmorderstage(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getadmorderstage',obj,this.adm.makeConfig())

  }
  public saveindustrytype(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveindustrytype',obj,this.adm.makeConfig())

  }
  public allindustrytypes()
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/allindustrytypes',this.adm.makeConfig())

  }
  public savecrmorderstatus(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/savecrmorderstatus',obj,this.adm.makeConfig())

  }

  public saveLeadSource(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadSource',obj,this.adm.makeConfig())

  }
  public updateLeadSource(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadSource',obj,this.adm.makeConfig())

  }
  public deleteLeadSource(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadSource',obj,this.adm.makeConfig())

  }
  public getcrmleadsourceById(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadsourceById',obj,this.adm.makeConfig())

  }
  public getsaveLeadSourcebycustomercode(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadsource',obj,this.adm.makeConfig())

  }

  public updatecrmcorderstatus(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updatecrmcorderstatus',obj,this.adm.makeConfig())

  }
  public deletecrmorderstatus(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deletecrmorderstatus',obj,this.adm.makeConfig())

  }
  public getcrmorderstatusById(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmorderstatusById',obj,this.adm.makeConfig())

  }

  
  //mail status
  public getcrmdispatchemail(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmdispatchemail',obj,this.adm.makeConfig())

  }
  public savecrmdispatchemail(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/savecrmdispatchemail',obj,this.adm.makeConfig())

  }

  public updatcrmdispatchemail(obj:any)
  {
   
    

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updatcrmdispatchemail',obj,this.adm.makeConfig())

  }
  public deletecrmdispatchemail(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deletecrmdispatchemail',obj,this.adm.makeConfig())

  }
  public getcrmdispatchemailById(obj:any)
  {
   

     return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmorderstatusById',obj,this.adm.makeConfig())

  }
//order stage

  //lead owner 
public getcrmleadowner(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadowner',obj,this.adm.makeConfig())

}
public saveCalltype(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveCalltype',obj,this.adm.makeConfig())

}
public allCalltypes(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/GetAllCrmCallTypes',obj,this.adm.makeConfig())

}
public deleteorderstage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteorderstage',obj,this.adm.makeConfig())

}
public getorderstageById(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getorderstageById',obj,this.adm.makeConfig())

}
public savecrmleadowner(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/savecrmleadowner',obj,this.adm.makeConfig())

}
public saveorderstage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveorderstage',obj,this.adm.makeConfig())

}

public updateorderstage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateorderstage',obj,this.adm.makeConfig())

}


public updatecrmleadowner(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updatecrmleadowner',obj,this.adm.makeConfig())

}
public deletecrmleadowner(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deletecrmleadowner',obj,this.adm.makeConfig())

}
public getcrmleadownerById(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadownerById',obj,this.adm.makeConfig())

}
//lead status
public saveLeadStatus(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadStatus',obj,this.adm.makeConfig())

}
public updateLeadStatus(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadStatus',obj,this.adm.makeConfig())

}
public deleteLeadStatus(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadStatus',obj,this.adm.makeConfig())

}
public getcrmleadstatusById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadstatusById',obj,this.adm.makeConfig())

}
//lead status
public getcrmleadstage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadstage',obj,this.adm.makeConfig())

}
public saveLeadStage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadStage',obj,this.adm.makeConfig())

}
public updateLeadStage(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadStage',obj,this.adm.makeConfig())

}
public deleteLeadStage(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadStage',obj,this.adm.makeConfig())

}
public getcrmleadstageById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadstageById',obj,this.adm.makeConfig())

}
public getcrmleadcalltypes(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadcalltypes',obj,this.adm.makeConfig())

}
public saveLeadcalltypes(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadcalltypes',obj,this.adm.makeConfig())

}
public updateLeadcalltypes(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadcalltypes',obj,this.adm.makeConfig())

}
public deleteLeadcalltypes(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadcalltypes',obj,this.adm.makeConfig())

}
public getcrmleadcalltypesById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadcalltypesById',obj,this.adm.makeConfig())

}
//city
public getcrmleadcity(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadcity',obj,this.adm.makeConfig())

}
public saveLeadcity(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadcity',obj,this.adm.makeConfig())

}
public updateLeadcity(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadcity',obj,this.adm.makeConfig())

}
public deleteLeadcity(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadcity',obj,this.adm.makeConfig())

}
public getcrmleadcityById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadcityById',obj,this.adm.makeConfig())

}
//reminder type
//city
public getcrmleadremindertype(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadremindertype',obj,this.adm.makeConfig())

}
public saveLeadremindertype(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadremindertype',obj,this.adm.makeConfig())

}
public updateLeadremindertypes(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadremindertypes',obj,this.adm.makeConfig())

}
public deleteLeadremindertypes(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadremindertypes',obj,this.adm.makeConfig())

}
public getcrmleadreminerTypesById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadreminerTypesById',obj,this.adm.makeConfig())

}
//industry
public getcrmleadindustry(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadindustry',obj,this.adm.makeConfig())

}
public saveLeadindustry(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/saveLeadindustry',obj,this.adm.makeConfig())

}
public updateLeadindustry(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/updateLeadindustry',obj,this.adm.makeConfig())

}
public deleteLeadindustry(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/deleteLeadindustry',obj,this.adm.makeConfig())

}
public getcrmleadindustryById(obj:any)
{ 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadindustryById',obj,this.adm.makeConfig())

}
//lead source 
public getcrmleadsource(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadsource',obj,this.adm.makeConfig())

}
public getcrmleadstatus(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadstatus',obj,this.adm.makeConfig())

}
public SaveCRMLead(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/SaveCRMLead',obj,this.adm.makeConfig())

}
public SaveCRMCustomer(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/SaveCRMCustomer',obj,this.adm.makeConfig())

}
public updateCRMCustomer(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/updateCRMCustomer',obj,this.adm.makeConfig())

}
public updateCRMLead(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/updateCRMLead',obj,this.adm.makeConfig())

}
public GetCRMAllcustomerById(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMAllcustomerById',obj,this.adm.makeConfig())

}
public GetCRMAllLeads(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMAllLeads',obj,this.adm.makeConfig())

}
public GetAllCrmindustry(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMRx/getcrmleadindustry',obj,this.adm.makeConfig())

}
public GetAllcrmleadtitles()
{
 

   return this.http.get(this.adm.getActualURL() + 'api/CRMLead/GetAllcrmleadtitles',this.adm.makeConfig())

}
public GetCRMAllCustomerLeads(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMAllCustomerLeads',obj,this.adm.makeConfig())

}
public GetCRMAllLeadsById(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMAllLeadsById',obj,this.adm.makeConfig())

}
public GetCRMAllCustomersById(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMAllCustomersById',obj,this.adm.makeConfig())

}


public GetActiveCountries(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/countries/GetActiveCountries',obj,this.adm.makeConfig())

}
public GetTotalStates(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/countries/GetTotalStates',obj,this.adm.makeConfig())

}
public saveContact(contactForm:string) {
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/SavecrmleadContact',contactForm,this.adm.makeConfig());
 }
 public getContact(obj:any) {
   
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Getcrmleadcontact',obj,this.adm.makeConfig());
 }

 public deleteContact(data: any) {

   var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetcrmleadcontactDeleteById',data,this.adm.makeConfig());
 }
 public updateContact(contactForm:any) {

   var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Updatecrmleadcontact',contactForm,this.adm.makeConfig());
}
public getContactById(id:number){
 
 
 var usr=this.adm.getUserCompleteInformation().usr;
 return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetcrmleadcontactById',id,this.adm.makeConfig());
}
public Savecrmleadorders(obj:any){ 
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Savecrmleadorders',obj,this.adm.makeConfig());
}
public Getcrmleadorder(obj:any){ 
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Getcrmleadorder',obj,this.adm.makeConfig());
}
public Savecrmleadenquiry(obj:any){ 
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/SaveCrmLeadCustEnquiryLineItem',obj,this.adm.makeConfig());
}
public Getcrmleadenquiry(obj:any){ 
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCrmLeadCustEnquiryLineItem',obj,this.adm.makeConfig());
}
// Quotation

public saveQuotation(quotationForm:string) {
   
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Savecrmleadquotation',quotationForm,this.adm.makeConfig());
 }
 public getQuotation(obj:any) {
   
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetcrmleadQuotation',obj,this.adm.makeConfig());
 }
 
 public deleteQuotation(data: any) {
 
   var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetcrmleadQuotationDeleteById',data,this.adm.makeConfig());
 }
 public updateQuotation(quotationForm:any) {
 
   var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/CRMLead/UpdatecrmleadQuotation',quotationForm,this.adm.makeConfig());
 }
 public getQuotationById(id:number){
 
 
 var usr=this.adm.getUserCompleteInformation().usr;
 return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetcrmleadquotationById',id,this.adm.makeConfig());
 }
 public Savecrmtelecalldetails(obj:any){
 
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMLead/Savecrmtelecalldetails',obj,this.adm.makeConfig());
  }
  public getcrmtelecalldetails(obj:any){ 
  
    return this.http.post(this.adm.getActualURL() + 'api/CRMLead/getcrmtelecalldetails',obj,this.adm.makeConfig());
    }
    public updateassignleadowners(obj:any)
{
   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/updateassignleadowners',obj,this.adm.makeConfig())
}
getLeadsToCustomer(obj: any): Observable<any> {
   const apiUrl = this.adm.getActualURL() + 'api/CRMLead/GetLeadsToCustomer';
   return this.http.post(apiUrl, obj, this.adm.makeConfig());
 }
 
 getCRMAllCustomers(obj: any): Observable<any> {
   
   const apiUrl = this.adm.getActualURL() + 'api/CRMLead/GetCRMAllCustomers';
   return this.http.post(apiUrl, obj, this.adm.makeConfig());
}
public GetCRMAllLeadsBy(obj:any)
{
 

   return this.http.post(this.adm.getActualURL() + 'api/CRMLead/GetCRMCustomerById',obj,this.adm.makeConfig())

}
public CreateQuotationFromEnquiry(enquiryId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/CreateQuotationFromEnquiry/"+enquiryId, u, this.adm.makeConfig());
 }
 public AddCRMRxEnquiry(obj:any): any {
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxEnquiry", obj, this.adm.makeConfig());
 }
 public GetCRMRxEnquiries(leadId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxEnquiries/"+leadId, u, this.adm.makeConfig());
 }
 public GetCRMRxEnquiry(EnquiryId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxEnquiry/"+EnquiryId, u, this.adm.makeConfig());
 }
 public saveEvents(currentEvent:string) {
   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/SaveEvent',currentEvent,this.adm.makeConfig());
   }
   public getEvents(obj:any) {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/GetAllEvents',obj,this.adm.makeConfig());
   }
   public deleteEvents(data: any) {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/DeleteEventById',data,this.adm.makeConfig());
   }
   public updateEvents(eventForm:any) {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/UpdateEvent',eventForm,this.adm.makeConfig());
   }
   public getEventsById(recordId:number){
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/CallLogs/GetEventById',recordId,this.adm.makeConfig());
   }
   
 public AddCRMRxSo(obj:any): any {
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxSo", obj, this.adm.makeConfig());
 }

 public GetCRMRxSos(QuotationId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxSos/"+QuotationId, u, this.adm.makeConfig());
 }
 public GetCRMRxso(QuotationId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxso/"+QuotationId, u, this.adm.makeConfig());
 }
 public CreateSoFromQuotation(enquiryId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/CreateSoFromQuotation/"+enquiryId, u, this.adm.makeConfig());
 }
 public AddCRMRxQuotation(obj:any): any {
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxQuotation", obj, this.adm.makeConfig());
 }

 public GetCRMRxQuotations(leadId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxQuotations/"+leadId, u, this.adm.makeConfig());
 }

 public GetCRMRxQuotation(QuotationId:any): any {
   let u = this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxQuotation/"+QuotationId, u, this.adm.makeConfig());
 }



}
