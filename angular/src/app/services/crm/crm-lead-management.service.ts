import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, userAddress, UserAssigns, UserCompleteInfo, UserPermissions, LoginInput, AdminGeneralInfoService } from '../admin/admin-general-info.service';
import { json } from 'ngx-custom-validators/src/app/json/validator';
@Injectable({
  providedIn: 'root'
})
export class CrmLeadManagementService {

  constructor(private adm: AdminGeneralInfoService, private http: HttpClient) { }
  public AddCRMRxEnquiry(obj: any): any {
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxEnquiry", obj, this.adm.makeConfig());
  }
  public GetCRMRxEnquiries(leadId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxEnquiries/" + leadId, u, this.adm.makeConfig());
  }
  public GetCRMRxEnquiry(EnquiryId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxEnquiry/" + EnquiryId, u, this.adm.makeConfig());
  }
  public GetCrmDocuments(mat: any, uploadfile: File, uploadfile1: File, uploadfile2: File, uploadfile3: File, uploadfile4: File, uploadfile5: File) {
    debugger;
    const formData = new FormData();
    formData.append("strData", JSON.stringify(mat));
    formData.append("file", uploadfile);
    formData.append("file1", uploadfile1);
    formData.append("file2", uploadfile2);
    formData.append("file3", uploadfile3);
    formData.append("file4", uploadfile4);
    formData.append("file5", uploadfile5);
    return this.http.post(this.adm.getActualURL() + 'api/invmaterial/CrmDocumentUpload', formData);
  }
  public AddCRMRxQuotation(obj: any): any {
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxQuotation", obj, this.adm.makeConfig());
  }
  public GetCRMRxQuotations(leadId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxQuotations/" + leadId, u, this.adm.makeConfig());
  }
  public GetCRMRxQuotation(QuotationId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxQuotation/" + QuotationId, u, this.adm.makeConfig());
  }
  public CreateQuotationFromEnquiry(enquiryId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/CreateQuotationFromEnquiry/" + enquiryId, u, this.adm.makeConfig());
  }
  public AddCRMRxSo(obj: any): any {
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/AddCRMRxSo", obj, this.adm.makeConfig());
  }
  public GetCRMRxSos(QuotationId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxSos/" + QuotationId, u, this.adm.makeConfig());
  }
  public GetCRMRxso(QuotationId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/GetCRMRxso/" + QuotationId, u, this.adm.makeConfig());
  }
  public CreateSoFromQuotation(enquiryId: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CrmLeadEnquiry/CreateSoFromQuotation/" + enquiryId, u, this.adm.makeConfig());
  }
  public GetAllCallLogsbyCompany(fromDate: any, toDate: any): any {
    let u = this.adm.getUserCompleteInformation().usr;
    let obj = {
      fromDate: fromDate,
      toDate: toDate,
      usr: u
    }
    return this.http.post(this.adm.getActualURL() + "api/CallLogs/GetAllCallLogsbyCompany", obj, this.adm.makeConfig());
  }
  public GetAllupcomingEvents() {
    var usr = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CallLogs/GetAllupcomingEvents', usr, this.adm.makeConfig());
  }
  public GetAllupcomingRemainders() {
    var usr = this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CallLogs/GetAllupcomingRemainders', usr, this.adm.makeConfig());
  }

  public GetAllCRMRxSos(validity: boolean, frmDate: string, toDate: string): any {
    // Create the input object for the request
    const inf: any = {
      recordId: validity ? 1 : 0, // Set recordId based on validity
      frmDate: frmDate,          // From date
      toDate: toDate,            // To date
      usr: this.adm.getUserCompleteInformation().usr // Include user information
    };

    // Make the POST request to the API
    return this.http.post(
      this.adm.getActualURL() + "api/CrmLeadEnquiry/GetAllCRMRxSos",
      inf, // Pass the input object as the request body
      this.adm.makeConfig() // Include necessary configuration headers
    );
  }

  getCrmLeadSoById(soId: number): any {
    // Fetch user details from AdminService
    const userDetails = this.adm.getUserCompleteInformation();

    // Prepare the request payload
    const payload = {
      recordId: soId, // Map SoId to recordId
      usr: userDetails.usr,
    };

    // Build the API endpoint
    const apiUrl = this.adm.getActualURL() + 'api/CrmLeadEnquiry/GetCrmLeadSoById';

    // Make the POST request
    return this.http.post(apiUrl, payload, this.adm.makeConfig());
  }

  public getAllAdvances(recordId: number, transactionType: string): any {
    const userDetails = this.adm.getUserCompleteInformation(); // Fetch user details from the service
  
    // Prepare the payload for the API call
    const payload = {
      recordId: recordId,           // Transaction ID
      detail: transactionType,      // Type of transaction
      usr: userDetails.usr          // User information (includes branch and customer codes)
    };
  
    // Make the HTTP POST request
    return this.http.post<any>(
      this.adm.getActualURL() + 'api/partyadvances/GetAdvances',
      payload,
      this.adm.makeConfig() // Add headers or other configurations
    );
  }
  
}
