import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartyDetailsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPartyDetails(partytype:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartyDetails',inf,this.adm.makeConfig());

  }
  public getPartyDetail(partytype:String,rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
      recordId:rec,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartyDetail',inf,this.adm.makeConfig());

  }
  public GetGeneratePartyCode()
{
  debugger;
   var inf:any={
   
    usr:this.userdetails.usr
   }
   return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetGenerateNewPartyCode',inf,this.adm.makeConfig());
}
  public setPartyDetail(party:any,addresses:any[],departments:any[], traCheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      party:party,
      addresses:addresses,
      departments:departments,
      traCheck:traCheck,
      usr:this.userdetails.usr
    };
    console.log('supplier',tot);
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/SetPartyDetail',tot,this.adm.makeConfig());

  }

  public GetPartyOpeningBalances(partytype:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
       usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartiesOpeningBalances',inf,this.adm.makeConfig());
  }
  public SetPartyOpeningBalances(supports:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      supports:supports,
       usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/SetPartiesOpeningBalances',tot,this.adm.makeConfig());
  }
public GetPartyCompleteDetails(partytype:string)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:partytype,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetCompleteInfoForParty',inf,this.adm.makeConfig());

}
public getCompletePartyDetailsById(partytype:string)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:partytype,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/getCompletePartyDetailsById',inf,this.adm.makeConfig());

}
public GetCrmtelcalls(customer:any)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:customer,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCrmtelcalls',inf,this.adm.makeConfig());

}
public GetCrmtelcallsbynumber(telecalno:any)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:telecalno,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCrmtelcallsbynumber',inf,this.adm.makeConfig());

}
public Getcrmenquiriesbytelecalno(telecalno:any)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:telecalno,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/Getcrmenquiriesbytelecalno',inf,this.adm.makeConfig());

}
public Getcrmenquiries()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/Getcrmenquiries',inf,this.adm.makeConfig());

}
public Getcrmquotations()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/Getcrmquotations',inf,this.adm.makeConfig());

}
public Getcrmorders()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/Getcrmorders',inf,this.adm.makeConfig());

}
public Getcrmquotationsbycustomers(customer:any)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:customer,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/Getcrmquotationsbycustomers',inf,this.adm.makeConfig());

}

public GetSupplierCompletePendingBalances(rec:number)
{
  var inf:any={
      recordId:rec,
    usr:this.userdetails.usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetSupplierPendingBalancesDetails',inf,this.adm.makeConfig());

}
public GetCustomerCompletePendingBalances(rec:number)
{
  var inf:any={
      recordId:rec,
    usr:this.userdetails.usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetCustomerPendingBalancesDetails',inf,this.adm.makeConfig());

}
/// Method to get all leads
public getAllLeads() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all leads
  return this.http.get(
    this.adm.getActualURL() + 'api/CRMLead/GetAllLeads', // API endpoint for fetching all leads
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to save a lead
public saveLead(leadData: any) {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a POST request to save the lead
  return this.http.post(
    this.adm.getActualURL() + 'api/CRMLead/SaveLead', // API endpoint for saving a lead
    leadData, // Pass the lead data to be saved
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}
  

// Method to get lead by ID with ID in the URL
getLeadById(id: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation();
  return this.http.get(
    this.adm.getActualURL() + `api/CRMLead/GetLeadById/${id}`,  // Append the id to the URL
    this.adm.makeConfig()
  );
}


// Update the lead
public updateLead(Id: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation();
  return this.http.post(
     this.adm.getActualURL() + 'api/CRMLead/UpdateLead', 
      Id ,
    this.adm.makeConfig()
  );
}

// Method to delete a lead by its ID
public deleteLead(Id: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a POST request to delete the lead by ID
  return this.http.post(
    this.adm.getActualURL() + 'api/CRMLead/DeleteLeadById', // API endpoint for deleting lead by ID
    { Id }, // Pass the lead ID to be deleted
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}


//-----------------------------------------------------------------------------------
// Method to get all HRD employees
public getHrdEmployees() {
  // Get the user information (assuming `userInfo` is passed as a parameter)
  let usr = this.adm.getUserCompleteInformation().usr;

  // Make a POST request to fetch HRD employees data
  return this.http.post(
    this.adm.getActualURL() + 'api/HRDEmployees/GetHRDEmployees',usr, // API endpoint for fetching HRD employees
    this.adm.makeConfig() // Passing necessary configurations (like headers)
  );
}

//--------------------------------------------------------------------------------

// Method to get all Lead Groups
public getLeadGroups() {
  // Get the user information (assuming `userInfo` is passed as a parameter)
  let usr = this.adm.getUserCompleteInformation().usr;

  // Make a POST request to fetch Lead Groups data
  return this.http.post(
    this.adm.getActualURL() + 'api/CRMCustomerGroups/GetCustomerGroupsTreeView', usr, // API endpoint for fetching Lead Groups
    this.adm.makeConfig() // Passing necessary configurations (like headers)
  );
}



//------------------------------------------------------------------------------


// Method to get all Lead Status
public getAllLeadStatus() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all lead statuses
  return this.http.get(
    this.adm.getActualURL() + 'api/CRMLead/GetAllCrmLeadStatuses', // API endpoint for fetching all lead statuses
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to get all Lead Source
public getAllLeadSource() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all lead sources
  return this.http.get(
    this.adm.getActualURL() + 'api/CRMLead/GetAllCrmLeadSources', // API endpoint for fetching all lead sources
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to get all Lead Stage
public getAllLeadStage() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all lead stages
  return this.http.get(
    this.adm.getActualURL() + 'api/CRMLead/GetAllCrmLeadStages', // API endpoint for fetching all lead stages
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to get all Industry
public getAllIndustry() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all industries
  return this.http.get(
    this.adm.getActualURL() + 'api/CRMLead/GetAllCrmIndustries', // API endpoint for fetching all industries
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

}

