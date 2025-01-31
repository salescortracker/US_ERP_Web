import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CrmLeadManagementService } from 'app/services/crm/crm-lead-management.service';
@Component({
  selector: 'app-telecalling',
  templateUrl: './telecalling.component.html',
  styleUrls: ['./telecalling.component.scss']
})
export class TelecallingComponent implements OnInit {
  leadvalue: any;
  toDate =  new Date()
  fromDate = new Date()
  calllogs:any
  constructor(private router: Router,    
    private crmLead: CrmLeadManagementService,
  ) {
    this.fromDate.setDate(this.toDate.getDate() - 1);
   }

  ngOnInit(): void {
    this.getInfo()
  }
  fnleadcustomer(obj: any) {
    this.leadvalue = obj;
    if (this.leadvalue == 1) {
      this.router.navigate(["/crm/crmleadcustomer"], { queryParams: { lead: this.leadvalue } })
    }
    else {
      this.router.navigate(["/crm/crmcustomertele"], { queryParams: { lead: this.leadvalue } })
    }

  }
  getInfo() {
    this.crmLead.GetAllCallLogsbyCompany(this.fromDate,this.toDate).subscribe(
      (res) => {
        this.calllogs = res
        console.log(this.calllogs);
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }

}
