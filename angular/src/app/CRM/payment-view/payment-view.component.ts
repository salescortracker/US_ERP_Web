import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent implements OnInit {
  tabs = ["Advances","Bill Submissions","Follow Up","Sale Returns","Bill Clearances"];
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
   // this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }

}
