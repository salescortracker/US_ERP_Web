import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purpay-view',
  templateUrl: './purpay-view.component.html',
  styleUrls: ['./purpay-view.component.scss']
})
export class PurpayViewComponent implements OnInit {
  tabs = ["Advances","Purchases","Purchase Returns","Credit Notes","Supplier Payments"];
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    //this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }
}
