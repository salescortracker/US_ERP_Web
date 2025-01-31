import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import { AnalysisRoutingModule } from "./analysis-routing.module";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
 import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { NgSelectModule } from '@ng-select/ng-select';
import { AnalysisDashboardComponent } from './analysis-dashboard/analysis-dashboard.component';
import { CrmrepkeyrepcustgroupsComponent } from './reports/crmrepkeyrepcustgroups/crmrepkeyrepcustgroups.component';
import { CrmrepkeyrepcustomersComponent } from './reports/crmrepkeyrepcustomers/crmrepkeyrepcustomers.component';
import { RepcrmreptelecallslistComponent } from './reports/repcrmreptelecallslist/repcrmreptelecallslist.component';
import { RepcrmreptelecallspendingsComponent } from './reports/repcrmreptelecallspendings/repcrmreptelecallspendings.component';
import { RepcrmenquiryrxComponent } from './reports/repcrmenquiryrx/repcrmenquiryrx.component';
import { RepcrmrepenquiriespendingsComponent } from './reports/repcrmrepenquiriespendings/repcrmrepenquiriespendings.component';
import { RepcrmrepcallerwisecallsComponent } from './reports/repcrmrepcallerwisecalls/repcrmrepcallerwisecalls.component';
import { RepcrmreporderslistComponent } from './reports/repcrmreporderslist/repcrmreporderslist.component';
import { RepcrmreporderscustomerwiseComponent } from './reports/repcrmreporderscustomerwise/repcrmreporderscustomerwise.component';
import { RepcrmreporderspendingsComponent } from './reports/repcrmreporderspendings/repcrmreporderspendings.component';
import { RepcrmrepordersitemwiseComponent } from './reports/repcrmrepordersitemwise/repcrmrepordersitemwise.component';
import { RepcrmrepadvancesliableComponent } from './reports/repcrmrepadvancesliable/repcrmrepadvancesliable.component';
import { RepcrmpostrepsalereturnsComponent } from './reports/repcrmpostrepsalereturns/repcrmpostrepsalereturns.component';
import { RepcrmpostrepsnapshotComponent } from './reports/repcrmpostrepsnapshot/repcrmpostrepsnapshot.component';
import { RepcrmpostrepagingsComponent } from './reports/repcrmpostrepagings/repcrmpostrepagings.component';
import { ReppursuppliergroupsComponent } from './reports/purchases/reppursuppliergroups/reppursuppliergroups.component';
import { ReppursuppliersComponent } from './reports/purchases/reppursuppliers/reppursuppliers.component';
import { ReppurrepomrequestsComponent } from './reports/purchases/reppurrepomrequests/reppurrepomrequests.component';
import { ReppurrepomrequestspendingComponent } from './reports/purchases/reppurrepomrequestspending/reppurrepomrequestspending.component';
import { ReppurrepomrequestsunorderedComponent } from './reports/purchases/reppurrepomrequestsunordered/reppurrepomrequestsunordered.component';
import { ReppurrepomlistofordersComponent } from './reports/purchases/reppurrepomlistoforders/reppurrepomlistoforders.component';
import { ReppurrepomsupplierwiseordersComponent } from './reports/purchases/reppurrepomsupplierwiseorders/reppurrepomsupplierwiseorders.component';
import { ReppurrepompendingordersComponent } from './reports/purchases/reppurrepompendingorders/reppurrepompendingorders.component';
@NgModule({
    imports: [
        CommonModule,
        AnalysisRoutingModule,
        NgxChartsModule,
        NgbModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        NgxSpinnerModule,


       
        SidebarModule.forRoot(),
        FormsModule,
        
        NgSelectModule
    ],
    declarations: [
      AnalysisDashboardComponent,
      CrmrepkeyrepcustgroupsComponent,
      CrmrepkeyrepcustomersComponent,
      RepcrmreptelecallslistComponent,
      RepcrmreptelecallspendingsComponent,
      RepcrmenquiryrxComponent,
      RepcrmrepenquiriespendingsComponent,
      RepcrmrepcallerwisecallsComponent,
      RepcrmreporderslistComponent,
      RepcrmreporderscustomerwiseComponent,
      RepcrmreporderspendingsComponent,
      RepcrmrepordersitemwiseComponent,
      RepcrmrepadvancesliableComponent,
      RepcrmpostrepsalereturnsComponent,
      RepcrmpostrepsnapshotComponent,
      RepcrmpostrepagingsComponent,
      ReppursuppliergroupsComponent,
      ReppursuppliersComponent,
      ReppurrepomrequestsComponent,
      ReppurrepomrequestspendingComponent,
      ReppurrepomrequestsunorderedComponent,
      ReppurrepomlistofordersComponent,
      ReppurrepomsupplierwiseordersComponent,
      ReppurrepompendingordersComponent
    ],
    providers:[MenuServiceService]
})
export class AnalysisModule { }
