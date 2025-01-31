import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm-lead-view',
  templateUrl: './crm-lead-view.component.html',
  styleUrls: ['./crm-lead-view.component.scss']
})
export class CrmLeadViewComponent implements OnInit {

 
  selectedTab = 0;

  constructor() { }

  ngOnInit(): void { }

  selectTab(index: number) {
    this.selectedTab = index;
}

}
