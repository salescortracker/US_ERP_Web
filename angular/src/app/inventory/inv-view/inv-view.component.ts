import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inv-view',
  templateUrl: './inv-view.component.html',
  styleUrls: ['./inv-view.component.scss']
})
export class InvViewComponent implements OnInit {
  // tabs = ["Material Issues","Material Losses","Sample Inwards","Sample Outwards"];
  tabs = ["Opening Stock","Closing Stock","Price List","Material issues","Material Losses","Sample Inwards","Sample Outwards"];
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab = 0;
  selectTab(tabName: any) {
    this.selectedTab = tabName;
    console.log(this.selectedTab)
    //this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: tabName } });
  }
}
