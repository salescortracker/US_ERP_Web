import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-view',
  templateUrl: './purchase-view.component.html',
  styleUrls: ['./purchase-view.component.scss']
})
export class PurchaseViewComponent implements OnInit {
  tabs = ["Requests","Request Approvals","Enquiries","Enquiries Approvals","Quotations","Quotation Approvals","Orders","Order Approvals","Bulk Orders"];
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    //this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }
}
