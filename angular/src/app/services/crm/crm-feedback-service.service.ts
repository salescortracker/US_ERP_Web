import { Injectable } from '@angular/core';
import { AdminGeneralInfoService, UserCompleteInfo } from '../admin/admin-general-info.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrmFeedbackServiceService {
  userdetails: UserCompleteInfo = null;

  constructor(private adm: AdminGeneralInfoService, private http: HttpClient) { }

  // Create feedback
  public createFeedback(feedbackForm: any) {
    return this.http.post(this.adm.getActualURL() + 'api/feedback/SaveFeedbackForm', feedbackForm, this.adm.makeConfig());
  }

  // Get feedback
  public getFeedbackForms() {
    const user = this.adm.getUserCompleteInformation().usr;
    const url = this.adm.getActualURL() + 'api/feedback/GetAllFeedbackForms';
  
    return this.http.get(url, this.adm.makeConfig());
  }
  

  // Get feedback by ID
  public getFeedbackById(recordId: number): Observable<any> {
    this.userdetails = this.adm.getUserCompleteInformation();
    return this.http.get(
      this.adm.getActualURL() + `GetFeedbackFormById/${recordId}`,
      this.adm.makeConfig()
    );
  }
  // Update feedback
  public updateFeedback(feedbackForm: any): Observable<any> {
    return this.http.post(
      this.adm.getActualURL() + 'UpdateFeedbackForm',
      feedbackForm,
      this.adm.makeConfig()
    );
  }
  // Delete feedback
  // public deleteFeedback(data) {
  //   return this.http.delete(this.adm.getActualURL() + `DeleteFeedbackFormById`,data,this.adm.makeConfig()
  //   );
  // }

  public deleteFeedback(data: any) {
 debugger;
    var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/feedbackform/GetfeedbackformDeleteById',data,this.adm.makeConfig());
  }
}
