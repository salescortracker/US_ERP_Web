import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmLeadManagementService } from 'app/services/crm/crm-lead-management.service';

@Component({
  selector: 'app-leadview-document',
  templateUrl: './leadview-document.component.html',
  styleUrls: ['./leadview-document.component.scss']
})
export class LeadviewDocumentComponent implements OnInit {
  newleaddocuments:any=false;
  leadId:any;
  constructor(private crmservice:CrmLeadManagementService,  private route: ActivatedRoute,) { 

    this.leadId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  uploadimg:any;
  selectedFileName: any = 'Choose file';
  Uploaddocument(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg = event.target.files[0];
            this.selectedFileName = this.uploadimg.name;
          };
        }     
    }
  }
  uploadimg1:any;
  selectedFileName1: any = 'Choose file';
  Uploaddocument1(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg1 = event.target.files[0];
            this.selectedFileName1 = this.uploadimg.name;
          };
        }     
    }
    
  }
  uploadimg2:any;
  selectedFileName2: any = 'Choose file';
  Uploaddocument2(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg2 = event.target.files[0];
            this.selectedFileName2 = this.uploadimg.name;
          };
        }     
    }
  }
  uploadimg3:any;
  selectedFileName3: any = 'Choose file';
  Uploaddocument3(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg3 = event.target.files[0];
            this.selectedFileName3 = this.uploadimg.name;
          };
        }     
    }
  }
  uploadimg4:any;
  selectedFileName4: any = 'Choose file';
  Uploaddocument4(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg4 = event.target.files[0];
            this.selectedFileName4 = this.uploadimg.name;
          };
        }     
    }
  }
  uploadimg5:any;
  selectedFileName5: any = 'Choose file';
  Uploaddocument5(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
      if (event.target.files && event.target.files.length) {
        for (const file of event.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (loadRes: any) => {
            this.uploadimg5 = event.target.files[0];
            this.selectedFileName5 = this.uploadimg.name;
          };
        }     
    }
  }
  savedocuments(){
    debugger;
    this.crmservice.GetCrmDocuments(this.leadId,this.uploadimg,this.uploadimg1,this.uploadimg2,this.uploadimg3,this.uploadimg4,this.uploadimg5).subscribe(res=>{

    })
  }

}
