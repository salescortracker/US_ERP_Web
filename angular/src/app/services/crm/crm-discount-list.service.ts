import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmDiscountListService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getDiscountListRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetDiscountListRequirements',usr,this.adm.makeConfig());
   }
   public getPriceListRxRequirements()
   {
     var usr=this.adm.getUserCompleteInformation().usr;
     return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetPriceListRequirementsRx',usr,this.adm.makeConfig());
    }
  public getDiscountLists()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetCRMDiscountLists',usr,this.adm.makeConfig());
  }
  public getDiscountListInfo(rec:number)
  {
   var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr};
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetCRMDiscountListDetails',inf,this.adm.makeConfig());
  }
  public setDiscountList(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/setCRMDiscountList',tot,this.adm.makeConfig());

  }

// Method to get all call logs ----------------------------------------------------------------------------
public getAllCallLogs(obj:any) {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all call logs
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/GetAllCallLogs',obj, // API endpoint for fetching all call logs
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}
public GetAllCallLogsCustomer(obj:any) {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all call logs
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/GetAllCallLogsCustomer',obj, // API endpoint for fetching all call logs
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to get all call types
public getAllCallTypes() {
  // Get the user information
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all call logs
  return this.http.get(
    this.adm.getActualURL() + 'api/CallLogs/GetAllCrmCallTypes', // API endpoint for fetching all call logs
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

   // Get call log by ID
   public getCallLogById(Id: any): Observable<any> {
    this.userdetails = this.adm.getUserCompleteInformation();
    return this.http.get(
      this.adm.getActualURL() + `api/CallLogs/GetCallLogById/${Id}`,
      this.adm.makeConfig()
    );
  }


  // Method to create a new call log
  public createCallLog(callLogData: any): Observable<any> {
    return this.http.post(this.adm.getActualURL() + 'api/CallLogs/SaveCallLog',
     callLogData, 
     this.adm.makeConfig());
  }

  // Update the call log
  public updateCallLog(Id: any): Observable<any> {
    this.userdetails = this.adm.getUserCompleteInformation();
    return this.http.post(
      this.adm.getActualURL() + 'api/CallLogs/UpdateCallLog',
      Id,
      this.adm.makeConfig()
    );
  }

  // Method to delete a call log by its ID
  public deleteCallLog(Id: any): Observable<any> {
    this.userdetails = this.adm.getUserCompleteInformation();

    // Make a POST request to delete the call log by ID
    return this.http.post(
      this.adm.getActualURL() + 'api/CallLogs/DeleteCallLogById', // API endpoint for deleting call log by ID
      { Id }, // Pass the call log ID to be deleted
      this.adm.makeConfig() // Passing the necessary configurations (like headers)
    );
  }





  // Method to get all events -------------------------------------------------------------------------------
public getAllEvent(obj:any) {
  // Get the user information (this might include authentication info like token)
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all events
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/GetAllEvents',obj, // API endpoint for fetching all events
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Get event by ID
public getEventById(Id: any): Observable<any> {
  // Get the user information (this might include authentication info like token)
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch a specific event by its ID
  return this.http.get(
    this.adm.getActualURL() + `api/CallLogs/GetEventById/${Id}`, // API endpoint for fetching event by ID
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to create a new event
public createEvent(eventData: any): Observable<any> {
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/SaveEvent', // API endpoint for saving a new event
    eventData, // The data to be sent in the request body
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to update the event
public updateEvent(eventData: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation(); // Get user details, if needed for authentication or other purposes
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/UpdateEvent', // API endpoint for updating an event
    eventData, // The data to be sent in the request body (e.g., the event object with updated data)
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to delete an event by its ID
public deleteEvent(Id: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation(); // Get user details, if needed for authentication or other purposes

  // Make a POST request to delete the event by ID
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/DeleteEventById', // API endpoint for deleting event by ID
    { Id }, // Pass the event ID to be deleted
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}



// Reminders------------------------------------------------------------------------------------------------\



public getAllReminders(obj:any) {
  // Get the user information (this might include authentication info like token)
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch all reminders
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/GetAllRemainders',obj, // API endpoint for fetching all reminders
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Get reminder by ID
public getReminderById(Id: any): Observable<any> {
  // Get the user information (this might include authentication info like token)
  this.userdetails = this.adm.getUserCompleteInformation();

  // Make a GET request to fetch a specific reminder by its ID
  return this.http.get(
    this.adm.getActualURL() + `api/CallLogs/GetReminderById/${Id}`, // API endpoint for fetching reminder by ID
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to create a new reminder
public createReminder(reminderData: any): Observable<any> {
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/SaveRemainder', // API endpoint for saving a new reminder
    reminderData, // The data to be sent in the request body
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to update a reminder
public updateReminder(recordId: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation(); // Get user details, if needed for authentication or other purposes
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/UpdateReminder', // API endpoint for updating a reminder
    recordId, // The data to be sent in the request body (e.g., the reminder object with updated data)
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}

// Method to delete a reminder by its ID
public deleteReminder(recordId: any): Observable<any> {
  this.userdetails = this.adm.getUserCompleteInformation(); // Get user details, if needed for authentication or other purposes

  // Make a POST request to delete the reminder by ID
  return this.http.post(
    this.adm.getActualURL() + 'api/CallLogs/DeleteReminderById', // API endpoint for deleting a reminder by ID
    { recordId }, // Pass the reminder ID to be deleted
    this.adm.makeConfig() // Passing the necessary configurations (like headers)
  );
}



}
