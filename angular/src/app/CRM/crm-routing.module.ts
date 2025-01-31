import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmRXPriceListService } from 'app/services/crm/crm-rxprice-list.service';
import { CrmAccountsAssignComponent } from './crm-accounts-assign/crm-accounts-assign.component';
import { CrmAdvancesComponent } from './crm-advances/crm-advances.component';
import { CrmAgentsManagementComponent } from './crm-agents-management/crm-agents-management.component';
import { CrmBillSubmissionsComponent } from './crm-bill-submissions/crm-bill-submissions.component';
import { CrmComplaintsPostComponent } from './crm-complaints-post/crm-complaints-post.component';
import { CrmCustomerGroupsComponent } from './crm-customer-groups/crm-customer-groups.component';
import { CrmCustomersComponent } from './crm-customers/crm-customers.component';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { CrmDiscountListComponent } from './crm-discount-list/crm-discount-list.component';
import { CrmEnquiriesRXComponent } from './crm-enquiries-rx/crm-enquiries-rx.component';
import { CrmKeyRepCustomerGroupsComponent } from './crm-key-rep-customer-groups/crm-key-rep-customer-groups.component';
import { CrmKeyRepCustomersComponent } from './crm-key-rep-customers/crm-key-rep-customers.component';
import { CrmLeadsManagementComponent } from './crm-leads-management/crm-leads-management.component';
import { CrmMarketingComponent } from './crm-marketing/crm-marketing.component';
import { CrmMINNDashComponent } from './crm-minndash/crm-minndash.component';
import { CrmOpeningBalancesComponent } from './crm-opening-balances/crm-opening-balances.component';
import { CrmOrdersRxComponent } from './crm-orders-rx/crm-orders-rx.component';
import { CrmPostBillSubmissionsComponent } from './crm-post-bill-submissions/crm-post-bill-submissions.component';
import { CrmPostFollowUpComponent } from './crm-post-follow-up/crm-post-follow-up.component';
import { CrmPostRepCustomerAgingComponent } from './crm-post-rep-customer-aging/crm-post-rep-customer-aging.component';
import { CrmPostRepCustomerSnapshotComponent } from './crm-post-rep-customer-snapshot/crm-post-rep-customer-snapshot.component';
import { CrmPostRepSaleReturnsComponent } from './crm-post-rep-sale-returns/crm-post-rep-sale-returns.component';
import { CrmPostSaleBillClearancesComponent } from './crm-post-sale-bill-clearances/crm-post-sale-bill-clearances.component';
import { CrmPostSaleReturnsComponent } from './crm-post-sale-returns/crm-post-sale-returns.component';
import { CrmPostTicketClearancesComponent } from './crm-post-ticket-clearances/crm-post-ticket-clearances.component';
import { CrmPostTicketsComponent } from './crm-post-tickets/crm-post-tickets.component';
import { CrmPreRepAdvancesCustomerwiseComponent } from './crm-pre-rep-advances-customerwise/crm-pre-rep-advances-customerwise.component';
import { CrmPreRepAdvancesLiableComponent } from './crm-pre-rep-advances-liable/crm-pre-rep-advances-liable.component';
import { CrmPreRepCallerwiseCallsComponent } from './crm-pre-rep-callerwise-calls/crm-pre-rep-callerwise-calls.component';
import { CrmPreRepEmployeewiseDetailsComponent } from './crm-pre-rep-employeewise-details/crm-pre-rep-employeewise-details.component';
import { CrmPreRepEnquiriesListComponent } from './crm-pre-rep-enquiries-list/crm-pre-rep-enquiries-list.component';
import { CrmPreRepEnquiriesPendingComponent } from './crm-pre-rep-enquiries-pending/crm-pre-rep-enquiries-pending.component';
import { CrmPreRepItemWisePendingsComponent } from './crm-pre-rep-item-wise-pendings/crm-pre-rep-item-wise-pendings.component';
import { CrmPreRepOrdersCustomerwiseComponent } from './crm-pre-rep-orders-customerwise/crm-pre-rep-orders-customerwise.component';
import { CrmPreRepOrdersDelayedComponent } from './crm-pre-rep-orders-delayed/crm-pre-rep-orders-delayed.component';
import { CrmPreRepOrdersListComponent } from './crm-pre-rep-orders-list/crm-pre-rep-orders-list.component';
import { CrmPreRepOrdersPendingComponent } from './crm-pre-rep-orders-pending/crm-pre-rep-orders-pending.component';
import { CrmPreRepTeleCallsListComponent } from './crm-pre-rep-tele-calls-list/crm-pre-rep-tele-calls-list.component';
import { CrmPreRepTeleCallsPendingComponent } from './crm-pre-rep-tele-calls-pending/crm-pre-rep-tele-calls-pending.component';
import { CrmPriceListComponent } from './crm-price-list/crm-price-list.component';
import { CrmQuotationsRxComponent } from './crm-quotations-rx/crm-quotations-rx.component';
import { CrmReceiptsFromCustomersComponent } from './crm-receipts-from-customers/crm-receipts-from-customers.component';
import { CrmRepAnalysisCustomerWiseBusinessComponent } from './crm-rep-analysis-customer-wise-business/crm-rep-analysis-customer-wise-business.component';
import { CrmRepClosedOrdersComponent } from './crm-rep-closed-orders/crm-rep-closed-orders.component';
import { CrmRxDiscountsListComponent } from './crm-rx-discounts-list/crm-rx-discounts-list.component';
import { CrmSaleReturnsComponent } from './crm-sale-returns/crm-sale-returns.component';
import { CrmSettingsComponent } from './crm-settings/crm-settings.component';
import { CrmTargetSettingComponent } from './crm-target-setting/crm-target-setting.component';
import { CrmTaxAssigingsComponent } from './crm-tax-assigings/crm-tax-assigings.component';
import { CrmTeleCallPostComponent } from './crm-tele-call-post/crm-tele-call-post.component';
import { CrmTeleCallPreComponent } from './crm-tele-call-pre/crm-tele-call-pre.component';
import { CrmTempOrdersComponent } from './crm-temp-orders/crm-temp-orders.component';
import { CrmUnauthorizeComponent } from './crm-unauthorize/crm-unauthorize.component';
import { CRMDashBoardBlanksComponent } from './crmdash-board-blanks/crmdash-board-blanks.component';
import { CrnRxPriceListComponent } from './crn-rx-price-list/crn-rx-price-list.component';
import { CrmEmailConfigurationComponent } from './crm-email-configuration/crm-email-configuration.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { CallForReasonComponent } from './call-for-reason/call-for-reason.component';
import { CrmorderstatusComponent } from './crmorderstatus/crmorderstatus.component';
import { CrmAddLeadsComponent } from './crm-add-leads/crm-add-leads.component';
import { CrmLeadsListingComponent } from './crm-leads-listing/crm-leads-listing.component';
import { EnquiryRegisterComponent } from './enquiry-register/enquiry-register.component';
import { CustomerInwardsComponent } from './customer-inwards/customer-inwards.component';
import { InvScopeofSupplyComponent } from 'app/inventory/inv-scopeof-supply/inv-scopeof-supply.component';
import { InvProcessComponent } from './inv-process/inv-process.component';
import { CrmLeadViewComponent } from './crm-lead-view/crm-lead-view.component';
import { CrmContactViewComponent } from './crm-contact-view/crm-contact-view.component';
import { CrmLeadsCalllogsComponent } from './crm-leads-calllogs/crm-leads-calllogs.component';
import { CrmLeadEventsComponent } from './crm-lead-events/crm-lead-events.component';
import { CrmLeadRemaindersComponent } from './crm-lead-remainders/crm-lead-remainders.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { TelecallingComponent } from './telecalling/telecalling.component';
import { CreateLeadCustomerComponent } from './telecalling/create-lead-customer/create-lead-customer.component';
import { CustomerManagementListingComponent } from './customer-management-listing/customer-management-listing.component';
import { CreateCustomerTelecallingComponent } from './telecalling/create-customer-telecalling/create-customer-telecalling.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { LeadviewMainComponent } from './leadview/leadview-main/leadview-main.component';
import { CusPageComponent } from './customerview/cus-page/cus-page.component';
import { CusOrderComponent } from './customerview/cus-order/cus-order.component';
import { CusQuotationComponent } from './customerview/cus-quotation/cus-quotation.component';
import { CusEnquiryComponent } from './customerview/cus-enquiry/cus-enquiry.component';
import { CusMainComponent } from './customerview/cus-main/cus-main.component';
import { CusContactsComponent } from './customerview/cus-contacts/cus-contacts.component';
import { CusRemindersComponent } from './customerview/cus-reminders/cus-reminders.component';
import { CusEventsComponent } from './customerview/cus-events/cus-events.component';
import { CustomerviewCalllogComponent } from './customerview/customerview-calllog/customerview-calllog.component';
import { CusDocumentsComponent } from './customerview/cus-documents/cus-documents.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';

const routes: Routes = [
    
    {
        path: '',children: [{path: 'crmpricelist', component: CrmPriceListComponent}]
     },
     {
        path:'',children:[{path: 'crmdiscountlist', component: CrmDiscountListComponent}]
    },
    {
       path: '',children: [{path: 'crmdashboardbla', component: CRMDashBoardBlanksComponent}]
    },
    {
        path: '',children: [{path: 'crmdashboard', component: CrmDashboardComponent}]
     },
     {
        path: '',children: [{path: 'crmleadsmgt', component: CrmLeadsManagementComponent}]
     },
     {
        path: '',children: [{path: 'crmleadview', component: CrmLeadViewComponent}]
     },
     {
        path: '',children: [{path: 'crmcusdocument', component: CusDocumentsComponent}]
     },
     {
        path: '',children: [{path: 'crmcuscalllogs', component: CustomerviewCalllogComponent}]
     },
     {
        path: '',children: [{path: 'crmcusevents', component: CusEventsComponent}]
     },
     {
        path: '',children: [{path: 'crmcusreminders', component: CusRemindersComponent}]
     },
     {
        path: '',children: [{path: 'crmcuscontactview', component: CusContactsComponent}]
     },
     
     {
        path: '',children: [{path: 'crmcusmain/:id', component: CusMainComponent}]
     },
      {
        path: '',children: [{path: 'crmcusenquiry', component: CusEnquiryComponent}]
     },
     {
        path: '',children: [{path: 'crmcusquotations', component: CusQuotationComponent}]
     },
     {
        path: '',children: [{path: 'crmcusorders', component: CusOrderComponent}]
     },
     {
        path: '',children: [{path: 'crmcusPage', component: CusPageComponent}]
     },
     {
        path: '',children: [{path: 'crmleadcalllogs', component: CrmLeadsCalllogsComponent}]
     },
     {
        path: '',children: [{path: 'crmleadevents', component: CrmLeadEventsComponent}]
     },
     {
        path: '',children: [{path: 'crmleadreminders', component: CrmLeadRemaindersComponent}]
     },
     {
        path: '',children: [{path: 'crmcontactview', component: CrmContactViewComponent}]
     },
     {
        path:'',children:[{path: 'AddLeads', component: CrmAddLeadsComponent}]
    }, 
    {
        path:'',children:[{path: 'AddLeads/:id', component: CrmAddLeadsComponent}]
    },
    {
        path:'',children:[{path: 'LeadsListing', component: CrmLeadsListingComponent}]
    },
    {
        path:'',children:[{path: 'Leadscreate', component: CreateLeadComponent}]
    },
 
     {
        path: '',children: [{path: 'crmcustomers', component: CrmCustomersComponent}]
     },
     {
        path: '',children: [{path: 'crmagentsmgt', component: CrmAgentsManagementComponent},{path: 'crmbulkupload', component: BulkUploadComponent}]
     },
     {
        path: '',children: [{path: 'crmmarket', component: CrmMarketingComponent}]
     },
    
     {
        path:'',children:[{path: 'crmrxpricelist', component: CrnRxPriceListComponent}]
    },
    
    {
        path: '',children: [{path: 'crmopenings', component: CrmOpeningBalancesComponent}]
     },
     {
        path: '',children: [{path: 'crmtargets', component: CrmTargetSettingComponent}]
     },
    {
        path:'',children:[{path: 'crmtelecallblapre', component: CrmTeleCallPreComponent}]
    },
    {
        path:'',children:[{path: 'crmtelecalling', component: TelecallingComponent}]
    },
    {
        path:'',children:[{path: 'customerListing', component: CustomerManagementListingComponent}]
    },
    {
        path:'',children:[{path: 'LeadsView/:id', component: LeadviewMainComponent}]
    },
    {
        path:'',children:[{path: 'customercreate', component: CustomerManagementComponent}]
    },
    {
        path:'',children:[{path: 'Leadscreate', component: CreateLeadComponent}]
    },
    {
        path:'',children:[{path: 'crmleadcustomer', component: CreateLeadCustomerComponent}]
    },
    {
        path:'',children:[{path: 'crmcustomertele', component: CreateCustomerTelecallingComponent}]
    },
    {
        path:'',children:[{path: 'crmenquiryrx', component: CrmEnquiriesRXComponent}]
    },
    {
        path:'',children:[{path: 'crmemail', component: CrmEmailConfigurationComponent}]
    },
    {
        path:'',children:[{path: 'crmquotationrx', component: CrmQuotationsRxComponent}]
    },
    {
        path:'',children:[{path: 'crmordersrx', component: CrmOrdersRxComponent}]
    },
    {
        path:'',children:[{path: 'crmadvances', component: CrmAdvancesComponent}]
    },
    {
        path:'',children:[{path: 'crmbillsub', component: CrmBillSubmissionsComponent}]
    },
    {
        path:'',children:[{path: 'crmtelecallblapost', component: CrmTeleCallPostComponent}]
    },

    {
        path:'',children:[{path: 'crmcomplaints', component: CrmComplaintsPostComponent}]
    },
    {
        path:'',children:[{path: 'crmsalereturn', component: CrmSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmacr', component: CrmReceiptsFromCustomersComponent}]
    },
    
    {
        path:'',children:[{path: 'crmtemporders', component: CrmTempOrdersComponent}]
    },
    {
        path:'',children:[{path: 'crmrepclosedorders', component: CrmRepClosedOrdersComponent}]
    },
   
    {
        path:'',children:[{path: 'crmrxdiscountlist', component: CrmRxDiscountsListComponent}]
    },
    {
        path:'',children:[{path: 'crmcusgrps', component: CrmCustomerGroupsComponent}]
    },
    {
        path:'',children:[{path: 'enquiryregister', component:EnquiryRegisterComponent}]
    },
    {
        path:'',children:[{path: 'customerinward', component:CustomerInwardsComponent}]
    },
    {
        path:'',children:[{path: 'scopeofsupply', component:InvScopeofSupplyComponent}]
    },
    {
        path:'',children:[{path: 'process', component:InvProcessComponent}]
    },
    //Post Sales
    {
        path:'',children:[{path: 'crmbillsubmissions', component: CrmPostBillSubmissionsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsalefollowup', component: CrmPostFollowUpComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsaletickets', component: CrmPostTicketsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsaleticketclearances', component: CrmPostTicketClearancesComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsalereturns', component: CrmPostSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostbillclearances', component: CrmPostSaleBillClearancesComponent}]
    },
    {
        path:'',children:[{path: 'crmpayment', component: PaymentViewComponent}]
    },

    
      {
        path:'',children:[{path: 'crmkeyrepcustgroups', component: CrmKeyRepCustomerGroupsComponent}]
    },
    {
        path:'',children:[{path: 'crmkeyrepcustomers', component: CrmKeyRepCustomersComponent}]
    },

    //    Reports
    {
        path:'',children:[{path: 'crmreptelecallslist', component: CrmPreRepTeleCallsListComponent}]
    },
    {
        path:'',children:[{path: 'crmreptelecallspendings', component: CrmPreRepTeleCallsPendingComponent}]
    },
    {
        path:'',children:[{path: 'crmrepenquirieslist', component: CrmPreRepEnquiriesListComponent}]
    },
    {
        path:'',children:[{path: 'crmrepenquiriespendings', component: CrmPreRepEnquiriesPendingComponent}]
    },

    {
        path:'',children:[{path: 'crmrepcallerwisecalls', component: CrmPreRepCallerwiseCallsComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderslist', component: CrmPreRepOrdersListComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderscustomerwise', component: CrmPreRepOrdersCustomerwiseComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderspendings', component: CrmPreRepOrdersPendingComponent}]
    },
    {
        path:'',children:[{path: 'crmrepordersitemwise', component: CrmPreRepItemWisePendingsComponent}]
    },
    {
        path:'',children:[{path: 'crmrepordersdelayed', component: CrmPreRepOrdersDelayedComponent}]
    },
    {
        path:'',children:[{path: 'crmrepadvancesliable', component: CrmPreRepAdvancesLiableComponent}]
    },
    {
        path:'',children:[{path: 'crmrepadvancescustomerwise', component: CrmPreRepAdvancesCustomerwiseComponent}]
    },
    {
        path:'',children:[{path: 'crmrepemployeewise', component: CrmPreRepEmployeewiseDetailsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepsalereturns', component: CrmPostRepSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepsnapshot', component: CrmPostRepCustomerSnapshotComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepagings', component: CrmPostRepCustomerAgingComponent}]
    },
    //Analysis
    {
        path:'',children:[{path: 'crmrepanacustomerwise', component: CrmRepAnalysisCustomerWiseBusinessComponent}]
    },
    {
        path:'',children:[{path: 'crmminndash', component: CrmMINNDashComponent}]
    },
    

//Settings
{
    path:'',children:[{path: 'crmTaxes', component: CrmTaxAssigingsComponent}]
},
{
    path:'',children:[{path: 'crmsettings', component: CrmSettingsComponent}]
},
{
    path:'',children:[{path: 'crmaccounts', component: CrmAccountsAssignComponent}]
},
{
    path:'',children:[{path: 'crmunauthorize', component: CrmUnauthorizeComponent}]
},
{
    path:'',children:[{path: 'crmcallforreason', component: CallForReasonComponent}]
},
{
    path:'',children:[{path: 'crmorderforstatus', component: CrmorderstatusComponent}]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CRMRoutingModule { }
