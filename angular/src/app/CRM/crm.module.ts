import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import { CRMRoutingModule } from "./crm-routing.module";

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
import { CRMDashBoardBlanksComponent } from './crmdash-board-blanks/crmdash-board-blanks.component';
import { CrmTeleCallPreComponent } from './crm-tele-call-pre/crm-tele-call-pre.component';
import { CrmEnquiriesRXComponent } from './crm-enquiries-rx/crm-enquiries-rx.component';
import { CrmQuotationsRxComponent } from './crm-quotations-rx/crm-quotations-rx.component';
import { CrmOrdersRxComponent } from './crm-orders-rx/crm-orders-rx.component';
import { CrmBillSubmissionsComponent } from './crm-bill-submissions/crm-bill-submissions.component';
import { CrmTeleCallPostComponent } from './crm-tele-call-post/crm-tele-call-post.component';
import { CrmComplaintsPostComponent } from './crm-complaints-post/crm-complaints-post.component';
import { CrmSaleReturnsComponent } from './crm-sale-returns/crm-sale-returns.component';
import { CrmReceiptsFromCustomersComponent } from './crm-receipts-from-customers/crm-receipts-from-customers.component';
import { CrmTempOrdersComponent } from './crm-temp-orders/crm-temp-orders.component';
import { CrmRepClosedOrdersComponent } from './crm-rep-closed-orders/crm-rep-closed-orders.component';
import { CrnRxPriceListComponent } from './crn-rx-price-list/crn-rx-price-list.component';
import { CrmRxDiscountsListComponent } from './crm-rx-discounts-list/crm-rx-discounts-list.component';
import { CrmCustomerGroupsComponent } from './crm-customer-groups/crm-customer-groups.component';
import { CrmOpeningBalancesComponent } from './crm-opening-balances/crm-opening-balances.component';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { CrmMarketingComponent } from './crm-marketing/crm-marketing.component';
import { CrmPriceListComponent } from './crm-price-list/crm-price-list.component';
import { CrmTaxAssigingsComponent } from './crm-tax-assigings/crm-tax-assigings.component';
import { CrmUnauthorizeComponent } from './crm-unauthorize/crm-unauthorize.component';
import { CrmRepAnalysisCustomerWiseBusinessComponent } from './crm-rep-analysis-customer-wise-business/crm-rep-analysis-customer-wise-business.component';
import { CrmDiscountListComponent } from './crm-discount-list/crm-discount-list.component';
import { CrmMINNDashComponent } from './crm-minndash/crm-minndash.component';
import { CrmCustomersComponent } from './crm-customers/crm-customers.component';
import { CrmSettingsComponent } from './crm-settings/crm-settings.component';
import { CrmTargetSettingComponent } from './crm-target-setting/crm-target-setting.component';
import { CrmLeadsManagementComponent } from './crm-leads-management/crm-leads-management.component';
import { CrmAgentsManagementComponent } from './crm-agents-management/crm-agents-management.component';
import { CrmPostBillSubmissionsComponent } from './crm-post-bill-submissions/crm-post-bill-submissions.component';
import { CrmPostFollowUpComponent } from './crm-post-follow-up/crm-post-follow-up.component';
import { CrmPostTicketsComponent } from './crm-post-tickets/crm-post-tickets.component';
import { CrmPostTicketClearancesComponent } from './crm-post-ticket-clearances/crm-post-ticket-clearances.component';
import { CrmPostSaleReturnsComponent } from './crm-post-sale-returns/crm-post-sale-returns.component';
import { CrmPostSaleBillClearancesComponent } from './crm-post-sale-bill-clearances/crm-post-sale-bill-clearances.component';
import { CrmCustomersChildComponent } from './crm-customers-child/crm-customers-child.component';
import { CrmMaterialsChildComponent } from './crm-materials-child/crm-materials-child.component';
import { CrmAdvancesComponent } from './crm-advances/crm-advances.component';
import { CrmKeyRepCustomerGroupsComponent } from './crm-key-rep-customer-groups/crm-key-rep-customer-groups.component';
import { CrmKeyRepCustomersComponent } from './crm-key-rep-customers/crm-key-rep-customers.component';
import { CrmAccountsAssignComponent } from './crm-accounts-assign/crm-accounts-assign.component';
import { CrmPreRepTeleCallsListComponent } from './crm-pre-rep-tele-calls-list/crm-pre-rep-tele-calls-list.component';
import { CrmPreRepTeleCallsPendingComponent } from './crm-pre-rep-tele-calls-pending/crm-pre-rep-tele-calls-pending.component';
import { CrmPreRepEnquiriesListComponent } from './crm-pre-rep-enquiries-list/crm-pre-rep-enquiries-list.component';
import { CrmPreRepEnquiriesPendingComponent } from './crm-pre-rep-enquiries-pending/crm-pre-rep-enquiries-pending.component';
import { CrmPreRepCallerwiseCallsComponent } from './crm-pre-rep-callerwise-calls/crm-pre-rep-callerwise-calls.component';
import { CrmPreRepOrdersListComponent } from './crm-pre-rep-orders-list/crm-pre-rep-orders-list.component';
import { CrmPreRepOrdersPendingComponent } from './crm-pre-rep-orders-pending/crm-pre-rep-orders-pending.component';
import { CrmPreRepOrdersCustomerwiseComponent } from './crm-pre-rep-orders-customerwise/crm-pre-rep-orders-customerwise.component';
import { CrmPreRepItemWisePendingsComponent } from './crm-pre-rep-item-wise-pendings/crm-pre-rep-item-wise-pendings.component';
import { CrmPreRepOrdersDelayedComponent } from './crm-pre-rep-orders-delayed/crm-pre-rep-orders-delayed.component';
import { CrmPreRepAdvancesLiableComponent } from './crm-pre-rep-advances-liable/crm-pre-rep-advances-liable.component';
import { CrmPreRepAdvancesCustomerwiseComponent } from './crm-pre-rep-advances-customerwise/crm-pre-rep-advances-customerwise.component';
import { CrmPreRepEmployeewiseDetailsComponent } from './crm-pre-rep-employeewise-details/crm-pre-rep-employeewise-details.component';
import { CrmPostRepSaleReturnsComponent } from './crm-post-rep-sale-returns/crm-post-rep-sale-returns.component';
import { CrmPostRepCustomerSnapshotComponent } from './crm-post-rep-customer-snapshot/crm-post-rep-customer-snapshot.component';
import { CrmPostRepCustomerAgingComponent } from './crm-post-rep-customer-aging/crm-post-rep-customer-aging.component';
import { CrmEmailConfigurationComponent } from './crm-email-configuration/crm-email-configuration.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { CallForReasonComponent } from './call-for-reason/call-for-reason.component';
import { CrmorderstatusComponent } from './crmorderstatus/crmorderstatus.component';
import { CrmQuotationCreateComponent } from './crm-quotation-create/crm-quotation-create.component';
import { CrmLeadsListingComponent } from './crm-leads-listing/crm-leads-listing.component';
import { CrmAddLeadsComponent } from './crm-add-leads/crm-add-leads.component';
import { EnquiryRegisterComponent } from './enquiry-register/enquiry-register.component';
import { CustomerInwardsComponent } from './customer-inwards/customer-inwards.component';
import { InvProcessComponent } from './inv-process/inv-process.component';
import { CustomerFeedbackFormComponent } from './customer-feedback-form/customer-feedback-form.component';
import { CrmLeadViewComponent } from './crm-lead-view/crm-lead-view.component';
import { CrmContactViewComponent } from './crm-contact-view/crm-contact-view.component';
import { CrmLeadsCalllogsComponent } from './crm-leads-calllogs/crm-leads-calllogs.component';
import { CrmLeadEventsComponent } from './crm-lead-events/crm-lead-events.component';
import { CrmLeadRemaindersComponent } from './crm-lead-remainders/crm-lead-remainders.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { CrmcalltypesComponent } from './crmcalltypes/crmcalltypes.component';
import { CrmleadsourceComponent } from './crmleadsource/crmleadsource.component';
import { CrmleadstatusComponent } from './crmleadstatus/crmleadstatus.component';
import { CrmleadindustryComponent } from './crmleadindustry/crmleadindustry.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { CustomerManagementListingComponent } from './customer-management-listing/customer-management-listing.component';
import { CreateCustomerTelecallingComponent } from './telecalling/create-customer-telecalling/create-customer-telecalling.component';
import { CreateLeadCustomerComponent } from './telecalling/create-lead-customer/create-lead-customer.component';
import { CrmUnitsComponent } from './crm-units/crm-units.component';
import { CrmLeadStageComponent } from './crm-lead-stage/crm-lead-stage.component';
import { LeadviewCalllogComponent } from './leadview/leadview-calllog/leadview-calllog.component';
import { LeadviewContactComponent } from './leadview/leadview-contact/leadview-contact.component';
import { LeadviewDocumentComponent } from './leadview/leadview-document/leadview-document.component';
import { LeadviewEnquiryComponent } from './leadview/leadview-enquiry/leadview-enquiry.component';
import { LeadviewEventsComponent } from './leadview/leadview-events/leadview-events.component';
import { LeadviewMainComponent } from './leadview/leadview-main/leadview-main.component';
import { LeadviewOrdersComponent } from './leadview/leadview-orders/leadview-orders.component';
import { LeadviewPageComponent } from './leadview/leadview-page/leadview-page.component';
import { LeadviewQuotationComponent } from './leadview/leadview-quotation/leadview-quotation.component';
import { LeadviewReminderComponent } from './leadview/leadview-reminder/leadview-reminder.component';
import { TelecallingComponent } from './telecalling/telecalling.component';
import { CusMainComponent } from './customerview/cus-main/cus-main.component';
import { CusPageComponent } from './customerview/cus-page/cus-page.component';
import { CusContactsComponent } from './customerview/cus-contacts/cus-contacts.component';
import { CusEnquiryComponent } from './customerview/cus-enquiry/cus-enquiry.component';
import { CusEventsComponent } from './customerview/cus-events/cus-events.component';
import { CusOrderComponent } from './customerview/cus-order/cus-order.component';
import { CusQuotationComponent } from './customerview/cus-quotation/cus-quotation.component';
import { CusRemindersComponent } from './customerview/cus-reminders/cus-reminders.component';
import { CustomerviewCalllogComponent } from './customerview/customerview-calllog/customerview-calllog.component';
import { CusDocumentsComponent } from './customerview/cus-documents/cus-documents.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
@NgModule({
    imports: [
        CommonModule,
        CRMRoutingModule,
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
    CRMDashBoardBlanksComponent,
    CrmTeleCallPreComponent,
    CrmEnquiriesRXComponent,
    CrmQuotationsRxComponent,
    CrmOrdersRxComponent,
    CrmBillSubmissionsComponent,
    CrmTeleCallPostComponent,
    CrmComplaintsPostComponent,
    CrmSaleReturnsComponent,
    CrmReceiptsFromCustomersComponent,
    CrmTempOrdersComponent,
    CrmRepClosedOrdersComponent,
    CrnRxPriceListComponent,
    CrmRxDiscountsListComponent,
    CrmCustomerGroupsComponent,
    CrmOpeningBalancesComponent,
    CrmDashboardComponent,
    CrmMarketingComponent,
    CrmPriceListComponent,
    CrmTaxAssigingsComponent,
    CreateLeadCustomerComponent,
    CrmUnauthorizeComponent,
    CrmRepAnalysisCustomerWiseBusinessComponent,
    CrmDiscountListComponent,
    CrmMINNDashComponent,
    CrmCustomersComponent,
    CrmSettingsComponent,
    CrmTargetSettingComponent,
    CrmLeadsManagementComponent,
    CrmAgentsManagementComponent,
    CrmPostBillSubmissionsComponent,
    CrmPostFollowUpComponent,
    CrmPostTicketsComponent,
    CrmPostTicketClearancesComponent,
    CrmPostSaleReturnsComponent,
    CrmPostSaleBillClearancesComponent,
    CrmCustomersChildComponent,
    CrmMaterialsChildComponent,
    CrmAdvancesComponent,
    CrmKeyRepCustomerGroupsComponent,
    CrmKeyRepCustomersComponent,
    CrmAccountsAssignComponent,
    CrmPreRepTeleCallsListComponent,
    CrmPreRepTeleCallsPendingComponent,
    CrmPreRepEnquiriesListComponent,
    CrmPreRepEnquiriesPendingComponent,
    CrmPreRepCallerwiseCallsComponent,
    CrmPreRepOrdersListComponent,
    CrmPreRepOrdersPendingComponent,
    CrmPreRepOrdersCustomerwiseComponent,
    CrmPreRepItemWisePendingsComponent,
    CrmPreRepOrdersDelayedComponent,
    CrmPreRepAdvancesLiableComponent,
    CrmPreRepAdvancesCustomerwiseComponent,
    CrmPreRepEmployeewiseDetailsComponent,
    CrmPostRepSaleReturnsComponent,
    CrmPostRepCustomerSnapshotComponent,
    CrmPostRepCustomerAgingComponent,
    CrmEmailConfigurationComponent,
    BulkUploadComponent,
    CallForReasonComponent,
    CrmorderstatusComponent,
    CrmQuotationCreateComponent,
    CrmLeadsListingComponent,
    CrmAddLeadsComponent,
    EnquiryRegisterComponent,
    CustomerInwardsComponent,
    InvProcessComponent,
    CustomerFeedbackFormComponent,
    CrmLeadViewComponent,
    CrmContactViewComponent,
    CrmLeadsCalllogsComponent,
    CrmLeadEventsComponent,
    CrmLeadRemaindersComponent,
    CreateLeadComponent,
    CrmcalltypesComponent,
    CrmleadsourceComponent,
    CrmleadstatusComponent,
    CrmleadindustryComponent,
    CustomerManagementComponent,
    CustomerManagementListingComponent,
    CreateCustomerTelecallingComponent,
    TelecallingComponent,
    CrmUnitsComponent,
    CrmLeadStageComponent,
    LeadviewCalllogComponent,
    LeadviewContactComponent,
    LeadviewDocumentComponent,
    LeadviewEnquiryComponent,
    LeadviewEventsComponent,
    LeadviewMainComponent,
    LeadviewOrdersComponent,
    LeadviewPageComponent,
    LeadviewQuotationComponent,
    LeadviewReminderComponent,
    CusMainComponent,
    CusPageComponent,
    CusContactsComponent,
    CusEnquiryComponent,
    CusEventsComponent,
    CusOrderComponent,
    CusQuotationComponent,
    CusRemindersComponent,
    CustomerviewCalllogComponent,
    CusDocumentsComponent,
    PaymentViewComponent],
    providers:[MenuServiceService]
})
export class CRMModule { }
