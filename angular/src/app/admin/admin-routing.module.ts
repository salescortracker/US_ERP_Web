import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdmContriesComponent } from './adm-contries/adm-contries.component';
import { AdmRolesComponent } from './adm-roles/adm-roles.component';
import { AdmStatesComponent } from './adm-states/adm-states.component';
import { AdmSystemMakeComponent } from './adm-system-make/adm-system-make.component';
import { AdmSystemVerificationComponent } from './adm-system-verification/adm-system-verification.component';
import { AdmTargetsComponent } from './adm-targets/adm-targets.component';
import { AdmTaxesComponent } from './adm-taxes/adm-taxes.component';
import { AdmUsersComponent } from './adm-users/adm-users.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdmlicenseComponent } from './admlicense/admlicense.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { CustrailsComponent } from './custrails/custrails.component';
import { CustrailsCreateComponent } from './custrails-create/custrails-create.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { OrderstageComponent } from './orderstage/orderstage.component';
import { CrmPriceListComponent } from 'app/CRM/crm-price-list/crm-price-list.component';
import { CrmDiscountListComponent } from 'app/CRM/crm-discount-list/crm-discount-list.component';
import { CrmCustomerGroupsComponent } from 'app/CRM/crm-customer-groups/crm-customer-groups.component';
import { CrmCustomersComponent } from 'app/CRM/crm-customers/crm-customers.component';
import { CrmLeadsListingComponent } from 'app/CRM/crm-leads-listing/crm-leads-listing.component';
import { PurSupplierGroupsComponent } from 'app/purchases/pur-supplier-groups/pur-supplier-groups.component';
import { PurRepCostSupplierAgingComponent } from 'app/purchases/pur-rep-cost-supplier-aging/pur-rep-cost-supplier-aging.component';
import { PurSuppliersComponent } from 'app/purchases/pur-suppliers/pur-suppliers.component';
import { PurSupplierOpeningBalancesComponent } from 'app/purchases/pur-supplier-opening-balances/pur-supplier-opening-balances.component';
import { HrdDepartmentsComponent } from 'app/HRD/hrd-departments/hrd-departments.component';
import { HrdAllowancesDeductionsComponent } from 'app/HRD/hrd-allowances-deductions/hrd-allowances-deductions.component';
import { HrdLeavesComponent } from 'app/HRD/hrd-leaves/hrd-leaves.component';
import { HrdDesignationsComponent } from 'app/HRD/hrd-designations/hrd-designations.component';
import { HrdRangeWiseAllowancesComponent } from 'app/HRD/hrd-range-wise-allowances/hrd-range-wise-allowances.component';
import { HrdEmployeesComponent } from 'app/HRD/hrd-employees/hrd-employees.component';
import { HrdShiftAssignmentComponent } from 'app/HRD/hrd-shift-assignment/hrd-shift-assignment.component';
import { HrdShiftMastersComponent } from 'app/HRD/hrd-shift-masters/hrd-shift-masters.component';
import { InvUMComponent } from 'app/inventory/inv-um/inv-um.component';
import { InvStoreToStoreStocksComponent } from 'app/inventory/inv-store-to-store-stocks/inv-store-to-store-stocks.component';
import { InvStoresListComponent } from 'app/inventory/inv-stores-list/inv-stores-list.component';
import { InvItemGroupsComponent } from 'app/inventory/inv-item-groups/inv-item-groups.component';
import { InvItemsListComponent } from 'app/inventory/inv-items-list/inv-items-list.component';
import { InvItemsTraComponent } from 'app/inventory/inv-items-tra/inv-items-tra.component';
import { InvOpeningShikshaComponent } from 'app/inventory/inv-opening-shiksha/inv-opening-shiksha.component';
import { InvOpeningStocksComponent } from 'app/inventory/inv-opening-stocks/inv-opening-stocks.component';
import { InvDepartmentsListComponent } from 'app/inventory/inv-departments-list/inv-departments-list.component';
import { InvLossesListComponent } from 'app/inventory/inv-losses-list/inv-losses-list.component';
import { InvDepartmentsComponent } from 'app/inventory/inv-departments/inv-departments.component';
import { QcTestsingMaterialsComponent } from 'app/QC/qc-testsing-materials/qc-testsing-materials.component';
import { QcTestsingsComponent } from 'app/QC/qc-testsings/qc-testsings.component';
import { QcTestsingSaleReturnsComponent } from 'app/QC/qc-testsing-sale-returns/qc-testsing-sale-returns.component';
import { CrmOpeningBalancesComponent } from 'app/CRM/crm-opening-balances/crm-opening-balances.component';

import { MaiEquipGroupsComponent } from 'app/Maintenance/mai-equip-groups/mai-equip-groups.component';
import { MaiEquipDetailsComponent } from 'app/Maintenance/mai-equip-details/mai-equip-details.component';
import { AccAccountGroupsComponent } from 'app/accounts/acc-account-groups/acc-account-groups.component';
import { AccAccountsComponent } from 'app/accounts/acc-accounts/acc-accounts.component';
import { AccOpeningBalancesComponent } from 'app/accounts/acc-opening-balances/acc-opening-balances.component';
import { AccAssetsComponent } from 'app/accounts/acc-assets/acc-assets.component';
import { PpcProcessMasterComponent } from 'app/Production/ppc-process-master/ppc-process-master.component';
import { EmployeesComponent } from './employees/employees.component';
import { PprProductWiseDetailsComponent } from 'app/Production/ppr-product-wise-details/ppr-product-wise-details.component';
import { CrmAddLeadsComponent } from 'app/CRM/crm-add-leads/crm-add-leads.component';
import { UserRolesPermissionsComponent } from './user-roles-permissions/user-roles-permissions.component';
import { CrmTargetSettingComponent } from 'app/CRM/crm-target-setting/crm-target-setting.component';
import { CrmTaxAssigingsComponent } from 'app/CRM/crm-tax-assigings/crm-tax-assigings.component';
import { CrmSettingsComponent } from 'app/CRM/crm-settings/crm-settings.component';
import { CrmAccountsAssignComponent } from 'app/CRM/crm-accounts-assign/crm-accounts-assign.component';
import { CrmUnauthorizeComponent } from 'app/CRM/crm-unauthorize/crm-unauthorize.component';
import { CallForReasonComponent } from 'app/CRM/call-for-reason/call-for-reason.component';
import { CrmorderstatusComponent } from 'app/CRM/crmorderstatus/crmorderstatus.component';
import { InvProcessComponent } from 'app/CRM/inv-process/inv-process.component';
import { InvScopeofSupplyComponent } from 'app/inventory/inv-scopeof-supply/inv-scopeof-supply.component';
import { SaleDispatchEmailComponent } from './sale-dispatch-email/sale-dispatch-email.component';
import { LeadOwnerComponent } from './lead-owner/lead-owner.component';
import { CrmcalltypesComponent } from 'app/CRM/crmcalltypes/crmcalltypes.component';
import { CrmleadstatusComponent } from 'app/CRM/crmleadstatus/crmleadstatus.component';
import { CrmleadsourceComponent } from 'app/CRM/crmleadsource/crmleadsource.component';
import { CrmleadindustryComponent } from 'app/CRM/crmleadindustry/crmleadindustry.component';
import { CrmLeadStageComponent } from 'app/CRM/crm-lead-stage/crm-lead-stage.component';
import { CrmLeadCityComponent } from './crm-lead-city/crm-lead-city.component';


const routes: Routes = [
    {
        path: '',children: [{path: 'admdashboard', component: AdminDashBoardComponent}]
    },
    {
        path: '',children: [{path: 'sysver', component: AdmSystemVerificationComponent}]
    },
    {
        path: '',children: [{path: 'sysmake', component: AdmSystemMakeComponent}]
    },
    {
        path: '',children: [{path: 'countries', component: AdmContriesComponent}]
    },
    {
        path: '',children: [{path: 'states', component: AdmStatesComponent}]
    },
    {
        path: '',children: [{path: 'taxes', component: AdmTaxesComponent}]
    },
    {
        path: '',children: [{path: 'roles', component: AdmRolesComponent}]
    },
    {
        path: '',children: [{path: 'users', component: AdmUsersComponent}]
    },
    {
        path: '',children: [{path: 'userrole', component: UserRolesPermissionsComponent}]
    },
    {
        path: '',children: [{path: 'targets', component: AdmTargetsComponent}]
    },
    {
        path: '',children: [{path: 'license', component: AdmlicenseComponent}]
    },
    {
        path: '',children: [{path: 'custrails', component: CustrailsComponent}]
    },
    {
        path: '',children: [{path: 'emailsetting', component: EmailSettingsComponent}]
    },
    {
        path: '',children: [{path: 'custrailcreate', component: CustrailsCreateComponent}]
    },
    {
        path: '',children: [{path: 'unauthorize', component: UnAuthorizeComponent}]
    },
    {
        path: '',children: [{path: 'orderstage', component: OrderstageComponent}]
    },
    {
        path: '',children: [{path: 'crmpricelist', component: CrmPriceListComponent}]
     },
     {
        path: '',children: [{path: 'crmdiscountlist', component: CrmDiscountListComponent}]
     },
     {
        path: '',children: [{path: 'crmcusgrps', component: CrmCustomerGroupsComponent}]
     },
     {
        path: '',children: [{path: 'crmcustomers', component: CrmCustomersComponent}]
     },
     {
        path: '',children: [{path: 'LeadsListing', component: CrmLeadsListingComponent}]
     },
     {
        path:'',children:[{path: 'AddLeads', component:CrmAddLeadsComponent}]
    }, 
    {
        path:'',children:[{path: 'AddLeads/:id', component: CrmAddLeadsComponent}]
    },
     {
        path: '',children: [{path: 'crmopenings', component: CrmOpeningBalancesComponent}]
     },
     {
        path: '',children: [{path: 'crmtargets', component: CrmTargetSettingComponent}]
     },
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
    {
        path:'',children:[{path: 'scopeofsupply', component:InvScopeofSupplyComponent}]
    },
    {
        path:'',children:[{path: 'process', component:InvProcessComponent}]
    },
    {
        path:'',children:[{path: 'crmsaledispatch', component:SaleDispatchEmailComponent}]
    },
    {
        path:'',children:[{path: 'crmleadowner', component:LeadOwnerComponent}]
    },
    {
        path:'',children:[{path: 'crmcalltypes', component:CrmcalltypesComponent}]
    },
    {
        path:'',children:[{path: 'crmleadstatus', component:CrmleadstatusComponent}]
    },
    {
        path:'',children:[{path: 'crmleadsource', component:CrmleadsourceComponent}]
    },
    {
        path:'',children:[{path: 'crmleadstage', component:CrmLeadStageComponent}]
    },
    {
        path:'',children:[{path: 'crmindustry', component:CrmleadindustryComponent}]
    },
    {
        path:'',children:[{path: 'crmcity', component:CrmLeadCityComponent}]
    },
     //purchases masters added by durga 15/11/2024
     {
        path: '',
         children: [{
             path: 'pursuppliergroups',
             component: PurSupplierGroupsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'pursuppliers',
             component: PurSuppliersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'pursupopeningbalances',
             component: PurSupplierOpeningBalancesComponent
         }
         ]
     },
       //HRD masters added by durga 15/11/2024
       {
        path: '',
         children: [{
             path: 'hrddepts',
             component: HrdDepartmentsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrdallowances',
             component: HrdAllowancesDeductionsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrdleaves',
             component: HrdLeavesComponent
            }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrddesigs',
             component: HrdDesignationsComponent
            }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrdrangewise',
             component: HrdRangeWiseAllowancesComponent
            }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrdemployees',
             component: HrdEmployeesComponent
            }
         ]
     },
     {
        path: '',
         children: [{
             path: 'hrdshifts',
             component: HrdShiftMastersComponent
            }
         ]
     },
     {
        path: 'invum',
        component: InvUMComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invstores',
        component: InvStoresListComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invitemgroupslist',
        component:  InvItemGroupsComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invitemslist',
        component:  InvItemsListComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invitemstra',
        component:  InvItemsTraComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invopeningsotcks',
        component: InvOpeningStocksComponent,
        data: {
          title: 'Dashboard 2'
        }
    },
    {
        path: 'invostocksshiksha',
        component: InvOpeningShikshaComponent,
        data: {
          title: 'Dashboard 2'
        }
    },
    {
        path: 'invdepts',
        component: InvDepartmentsComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invlosseslist',
        component: InvLossesListComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'invlosseslist',
        component: InvLossesListComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: '',
        children: [{
            path: 'qctestsraw',
            component: QcTestsingMaterialsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qctestspro',
            component: QcTestsingsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qctestssalereturn',
            component: QcTestsingSaleReturnsComponent
        }
        ]
    },
    //production 
    {
        path: '',
        children: [{
            path: 'ppcprocess',
            component:PpcProcessMasterComponent 
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcprocessattachments',
            component:PprProductWiseDetailsComponent
        }
        ]
    },
    //maintenance
    {
        path: '',children: [{path: 'maiequipgroups', component:MaiEquipGroupsComponent}]
    },
    {
        path: '',children: [{path: 'maiequipment', component:MaiEquipDetailsComponent}]
    },
    //accounts
    {
        path: '',children: [{path: 'accaccountgroups', component: AccAccountGroupsComponent}]
            },
        {
            path: '',children: [{path: 'accaccounts', component: AccAccountsComponent}]
        },
        {
            path: '',children: [{path: 'accopenings', component: AccOpeningBalancesComponent}]
        },
        {
            path: '',children: [{path: 'accassets', component: AccAssetsComponent}]
        },
     
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdmRoutingModule { }
