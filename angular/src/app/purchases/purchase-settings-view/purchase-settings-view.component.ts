import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-settings-view',
  templateUrl: './purchase-settings-view.component.html',
  styleUrls: ['./purchase-settings-view.component.scss']
})
export class PurchaseSettingsViewComponent implements OnInit {
  tabs = ["Purchase Types","Terms","Setting","Accounts","Mail Settings","Covering Enquiry","Covering Order","Covering Return"];
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    //this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }

}
