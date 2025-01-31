import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HrdKeyRepDepartmentsComponent } from 'app/HRD/hrd-key-rep-departments/hrd-key-rep-departments.component';
import { HrdKeyRepDesignationsComponent } from 'app/HRD/hrd-key-rep-designations/hrd-key-rep-designations.component';
import { HrdKeyRepEmployeesComponent } from 'app/HRD/hrd-key-rep-employees/hrd-key-rep-employees.component';
import { InvKeyRepUnitsComponent } from 'app/inventory/inv-key-rep-units/inv-key-rep-units.component';
import { InvKeyRepStoresComponent } from 'app/inventory/inv-key-rep-stores/inv-key-rep-stores.component';
import { InvKeyRepItemGroupsComponent } from 'app/inventory/inv-key-rep-item-groups/inv-key-rep-item-groups.component';
import { InvKeyRepItemsComponent } from 'app/inventory/inv-key-rep-items/inv-key-rep-items.component';
import { InvKeyRepDepartmentsComponent } from 'app/inventory/inv-key-rep-departments/inv-key-rep-departments.component';
import { InvKeyRepLossesComponent } from 'app/inventory/inv-key-rep-losses/inv-key-rep-losses.component';
import { InvStoRepClosingStocksComponent } from 'app/inventory/inv-sto-rep-closing-stocks/inv-sto-rep-closing-stocks.component';
import { InvStoRepDayInfoComponent } from 'app/inventory/inv-sto-rep-day-info/inv-sto-rep-day-info.component';
import { InvCostRepClosingValuesComponent } from 'app/inventory/inv-cost-rep-closing-values/inv-cost-rep-closing-values.component';
import { PurKeyRepListOfSupplierGroupsComponent } from 'app/purchases/pur-key-rep-list-of-supplier-groups/pur-key-rep-list-of-supplier-groups.component';
import { PurKeyRepListOfSuppliersComponent } from 'app/purchases/pur-key-rep-list-of-suppliers/pur-key-rep-list-of-suppliers.component';
import { PurRepOrderManagementRequestsComponent } from 'app/purchases/pur-rep-order-management-requests/pur-rep-order-management-requests.component';
import { PurRepOrderManagementRequestsPendingComponent } from 'app/purchases/pur-rep-order-management-requests-pending/pur-rep-order-management-requests-pending.component';
import { PurRepOrderManagementRequestsExpiredComponent } from 'app/purchases/pur-rep-order-management-requests-expired/pur-rep-order-management-requests-expired.component';
import { PurRepOrderManagementRequestsUnOrderedComponent } from 'app/purchases/pur-rep-order-management-requests-un-ordered/pur-rep-order-management-requests-un-ordered.component';
import { PurRepOrderManagementRequestsTobeApprovedComponent } from 'app/purchases/pur-rep-order-management-requests-tobe-approved/pur-rep-order-management-requests-tobe-approved.component';
import { PurRepOrderManagementEnquiriesListComponent } from 'app/purchases/pur-rep-order-management-enquiries-list/pur-rep-order-management-enquiries-list.component';
import { PurRepOrderManagementEnquiriesPendingComponent } from 'app/purchases/pur-rep-order-management-enquiries-pending/pur-rep-order-management-enquiries-pending.component';
import { PurRepOrderManagementEnquiriesExpiredComponent } from 'app/purchases/pur-rep-order-management-enquiries-expired/pur-rep-order-management-enquiries-expired.component';
import { PurRepOrderManagementListOfOrdersComponent } from 'app/purchases/pur-rep-order-management-list-of-orders/pur-rep-order-management-list-of-orders.component';
import { PurRepOrderManagementSupplierWiseAdvancesComponent } from 'app/purchases/pur-rep-order-management-supplier-wise-advances/pur-rep-order-management-supplier-wise-advances.component';
import { PurRepOrderManagementSupplierWiseOrdersComponent } from 'app/purchases/pur-rep-order-management-supplier-wise-orders/pur-rep-order-management-supplier-wise-orders.component';
import { PurRepOrderManagementPendingOrdersComponent } from 'app/purchases/pur-rep-order-management-pending-orders/pur-rep-order-management-pending-orders.component';
import { PurRepOrderManagementExpectedMaterialsComponent } from 'app/purchases/pur-rep-order-management-expected-materials/pur-rep-order-management-expected-materials.component';
import { PurRepOrderManagementDelayedOrdersComponent } from 'app/purchases/pur-rep-order-management-delayed-orders/pur-rep-order-management-delayed-orders.component';
import { PurRepOrderManagementPendingAdvancesComponent } from 'app/purchases/pur-rep-order-management-pending-advances/pur-rep-order-management-pending-advances.component';
import { PurRepCostListofPurchasesComponent } from 'app/purchases/pur-rep-cost-listof-purchases/pur-rep-cost-listof-purchases.component';
import { PurRepCostListofPurchasesConsolidatedComponent } from 'app/purchases/pur-rep-cost-listof-purchases-consolidated/pur-rep-cost-listof-purchases-consolidated.component';
import { PurRepCostListofPurchasesDetailedComponent } from 'app/purchases/pur-rep-cost-listof-purchases-detailed/pur-rep-cost-listof-purchases-detailed.component';
import { PurRepCostListofPurchasesSupplierWiseComponent } from 'app/purchases/pur-rep-cost-listof-purchases-supplier-wise/pur-rep-cost-listof-purchases-supplier-wise.component';
import { PurRepCostListofPurchasesSupplierWiseConsolidatedComponent } from 'app/purchases/pur-rep-cost-listof-purchases-supplier-wise-consolidated/pur-rep-cost-listof-purchases-supplier-wise-consolidated.component';
import { PurRepCostListOfPurchaseReturnsComponent } from 'app/purchases/pur-rep-cost-list-of-purchase-returns/pur-rep-cost-list-of-purchase-returns.component';
import { PurRepCostConsolidatedPurchaseReturnsComponent } from 'app/purchases/pur-rep-cost-consolidated-purchase-returns/pur-rep-cost-consolidated-purchase-returns.component';
import { PurRepCostSupplierwisePurchaseReturnsComponent } from 'app/purchases/pur-rep-cost-supplierwise-purchase-returns/pur-rep-cost-supplierwise-purchase-returns.component';
import { PurRepCostPurchaseToReturnsComponent } from 'app/purchases/pur-rep-cost-purchase-to-returns/pur-rep-cost-purchase-to-returns.component';
import { PurRepCostListOfNotesComponent } from 'app/purchases/pur-rep-cost-list-of-notes/pur-rep-cost-list-of-notes.component';
import { PurRepCostSupplierDayBookComponent } from 'app/purchases/pur-rep-cost-supplier-day-book/pur-rep-cost-supplier-day-book.component';
import { PurRepCostSupplierLedgerComponent } from 'app/purchases/pur-rep-cost-supplier-ledger/pur-rep-cost-supplier-ledger.component';
import { PurRepCostSupplierSnapShotComponent } from 'app/purchases/pur-rep-cost-supplier-snap-shot/pur-rep-cost-supplier-snap-shot.component';
import { PurRepCostSupplierAgingComponent } from 'app/purchases/pur-rep-cost-supplier-aging/pur-rep-cost-supplier-aging.component';
import { PurRepCostSupplierWisePendingComponent } from 'app/purchases/pur-rep-cost-supplier-wise-pending/pur-rep-cost-supplier-wise-pending.component';
import { PurRepStockDayBookComponent } from 'app/purchases/pur-rep-stock-day-book/pur-rep-stock-day-book.component';
import { PurRepStockItemwiseLedgerComponent } from 'app/purchases/pur-rep-stock-itemwise-ledger/pur-rep-stock-itemwise-ledger.component';
import { PurRepStockItemwiseConsolidationsComponent } from 'app/purchases/pur-rep-stock-itemwise-consolidations/pur-rep-stock-itemwise-consolidations.component';
import { PurRepStockTopPurchasesComponent } from 'app/purchases/pur-rep-stock-top-purchases/pur-rep-stock-top-purchases.component';
import { PurRepStockLeastPurchasesComponent } from 'app/purchases/pur-rep-stock-least-purchases/pur-rep-stock-least-purchases.component';
import { PurRepStockNoPurchasesComponent } from 'app/purchases/pur-rep-stock-no-purchases/pur-rep-stock-no-purchases.component';
import { PurRepAnalysisPricesComparisonComponent } from 'app/purchases/pur-rep-analysis-prices-comparison/pur-rep-analysis-prices-comparison.component';
import { PurRepAnalysisStdToActualComponent } from 'app/purchases/pur-rep-analysis-std-to-actual/pur-rep-analysis-std-to-actual.component';
import { PurRepAnalysisReplinishment1Component } from 'app/purchases/pur-rep-analysis-replinishment1/pur-rep-analysis-replinishment1.component';
import { PurRepAnalysisReplinishment2Component } from 'app/purchases/pur-rep-analysis-replinishment2/pur-rep-analysis-replinishment2.component';
import { QcRepMIRPendingsComponent } from 'app/QC/qc-rep-mirpendings/qc-rep-mirpendings.component';
import { QcRepMIRTestResultsComponent } from 'app/QC/qc-rep-mirtest-results/qc-rep-mirtest-results.component';
import { QcRepMIRSupplierRankingComponent } from 'app/QC/qc-rep-mirsupplier-ranking/qc-rep-mirsupplier-ranking.component';
import { PpcRepMassAchievementsComponent } from 'app/Production/ppc-rep-mass-achievements/ppc-rep-mass-achievements.component';
import { PpcRepRunningBatchesComponent } from 'app/Production/ppc-rep-running-batches/ppc-rep-running-batches.component';
import { PpcRepMaterialCostingComponent } from 'app/Production/ppc-rep-material-costing/ppc-rep-material-costing.component';
import { PpcRepPendingProcessesComponent } from 'app/Production/ppc-rep-pending-processes/ppc-rep-pending-processes.component';
import { PpcRepMachineUsageComponent } from 'app/Production/ppc-rep-machine-usage/ppc-rep-machine-usage.component';
import { PpcRepMaterialWastageComponent } from 'app/Production/ppc-rep-material-wastage/ppc-rep-material-wastage.component';
import { PpcRepMaterialRequirementComponent } from 'app/Production/ppc-rep-material-requirement/ppc-rep-material-requirement.component';
import { MaiKeyRepEquipmentGroupsComponent } from 'app/Maintenance/mai-key-rep-equipment-groups/mai-key-rep-equipment-groups.component';
import { MaiKeyRepEquipmentDetailsComponent } from 'app/Maintenance/mai-key-rep-equipment-details/mai-key-rep-equipment-details.component';
import { MaiRepListOfPreventiveMaintenancesComponent } from 'app/Maintenance/mai-rep-list-of-preventive-maintenances/mai-rep-list-of-preventive-maintenances.component';
import { MaiRepProjectedPreventiveMaintenancesComponent } from 'app/Maintenance/mai-rep-projected-preventive-maintenances/mai-rep-projected-preventive-maintenances.component';
import { MaiRepExpiredPreventiveMaintenancesComponent } from 'app/Maintenance/mai-rep-expired-preventive-maintenances/mai-rep-expired-preventive-maintenances.component';
import { MaiRepListOfBrekdownsComponent } from 'app/Maintenance/mai-rep-list-of-brekdowns/mai-rep-list-of-brekdowns.component';
import { MaiRepBreakdownUnassignedComponent } from 'app/Maintenance/mai-rep-breakdown-unassigned/mai-rep-breakdown-unassigned.component';
import { MaiRepBreakdownUnclearedComponent } from 'app/Maintenance/mai-rep-breakdown-uncleared/mai-rep-breakdown-uncleared.component';
import { MaiRepBreakdownMachineHoursComponent } from 'app/Maintenance/mai-rep-breakdown-machine-hours/mai-rep-breakdown-machine-hours.component';
import { MaiRepVendorRankingComponent } from 'app/Maintenance/mai-rep-vendor-ranking/mai-rep-vendor-ranking.component';
import { MaiRepMaintenanceCostingComponent } from 'app/Maintenance/mai-rep-maintenance-costing/mai-rep-maintenance-costing.component';
import { MaiRepMaintenanceEquipmentWiseComponent } from 'app/Maintenance/mai-rep-maintenance-equipment-wise/mai-rep-maintenance-equipment-wise.component';
import { MaiRepListofPlantDownComponent } from 'app/Maintenance/mai-rep-listof-plant-down/mai-rep-listof-plant-down.component';
import { MaiRepPlantDownReasonwiseComponent } from 'app/Maintenance/mai-rep-plant-down-reasonwise/mai-rep-plant-down-reasonwise.component';
import { SalRepListOfSalesComponent } from 'app/pos/sal-rep-list-of-sales/sal-rep-list-of-sales.component';
import { SalRepDetailedSalesComponent } from 'app/pos/sal-rep-detailed-sales/sal-rep-detailed-sales.component';
import { SalRepConsolidatedSalesComponent } from 'app/pos/sal-rep-consolidated-sales/sal-rep-consolidated-sales.component';
import { SalRepCustomerWiseConsolidatedComponent } from 'app/pos/sal-rep-customer-wise-consolidated/sal-rep-customer-wise-consolidated.component';
import { AccKeyRepGroupsComponent } from 'app/accounts/acc-key-rep-groups/acc-key-rep-groups.component';
import { AccKeyRepAccountsComponent } from 'app/accounts/acc-key-rep-accounts/acc-key-rep-accounts.component';
import { AccKeyRepAssetsComponent } from 'app/accounts/acc-key-rep-assets/acc-key-rep-assets.component';
import { AccFinRepCashBookComponent } from 'app/accounts/acc-fin-rep-cash-book/acc-fin-rep-cash-book.component';
import { AccFinRepBankBookComponent } from 'app/accounts/acc-fin-rep-bank-book/acc-fin-rep-bank-book.component';
import { AccFinRepDayBookComponent } from 'app/accounts/acc-fin-rep-day-book/acc-fin-rep-day-book.component';
import { AccFinRepCompleteDayInfoComponent } from 'app/accounts/acc-fin-rep-complete-day-info/acc-fin-rep-complete-day-info.component';
import { AccFinRepLedgersStdComponent } from 'app/accounts/acc-fin-rep-ledgers-std/acc-fin-rep-ledgers-std.component';
import { AccFinRepLedgersDetailedComponent } from 'app/accounts/acc-fin-rep-ledgers-detailed/acc-fin-rep-ledgers-detailed.component';
import { AccFinRepSchedulesComponent } from 'app/accounts/acc-fin-rep-schedules/acc-fin-rep-schedules.component';
import { AccFinRepPNLAccountComponent } from 'app/accounts/acc-fin-rep-pnlaccount/acc-fin-rep-pnlaccount.component';
import { AccFinRepBalanceSheetComponent } from 'app/accounts/acc-fin-rep-balance-sheet/acc-fin-rep-balance-sheet.component';
import { AccFinRepTrialBalanceComponent } from 'app/accounts/acc-fin-rep-trial-balance/acc-fin-rep-trial-balance.component';
 

const routes: Routes = [
    {
        path: '',children: [{path: 'anadashboard', component: AnalysisDashboardComponent}]
    },
    {
        path: 'crmkeyrepcustgroups', component:CrmrepkeyrepcustgroupsComponent
    },
    {
        path: 'crmkeyrepcustomers' , component: CrmrepkeyrepcustomersComponent
    },
    {
        path: 'repcrmreptelecallslist' , component: RepcrmreptelecallslistComponent
    },
    {
        path: 'repcrmreptelecallspendings' , component: RepcrmreptelecallspendingsComponent
    },
    {
        path: 'repcrmenquiryrx' , component: RepcrmenquiryrxComponent
    },
    {
        path: 'repcrmrepenquiriespendings' , component: RepcrmrepenquiriespendingsComponent
    },
    {
        path: 'repcrmrepcallerwisecalls' , component: RepcrmrepcallerwisecallsComponent
    },
    {
        path: 'repcrmreporderslist' , component: RepcrmreporderslistComponent
    },
    {
        path: 'repcrmreporderscustomerwise' , component: RepcrmreporderscustomerwiseComponent
    },
    {
        path: 'repcrmreporderspendings' , component: RepcrmreporderspendingsComponent
    },
    {
        path: 'repcrmrepordersitemwise' , component: RepcrmrepordersitemwiseComponent
    }, {
        path: 'repcrmrepadvancesliable' , component: RepcrmrepadvancesliableComponent
    },
    {
        path: 'repcrmpostrepsalereturns' , component: RepcrmpostrepsalereturnsComponent
    },
    {
        path: 'repcrmpostrepsnapshot' , component: RepcrmpostrepsnapshotComponent
    },
    {
        path: 'repcrmpostrepagings' , component: RepcrmpostrepagingsComponent
    },
    //purchases
    {
        path: 'reppursuppliergroups' , component: ReppursuppliergroupsComponent
    },
    {
        path: 'reppursuppliers' , component:  ReppursuppliersComponent
    },
    {
        path: 'reppurrepomrequests' , component:  ReppurrepomrequestsComponent
    },
    {
        path: 'reppurrepomrequestspending' , component:  ReppurrepomrequestspendingComponent
    },
    {
        path: 'reppurrepomrequestsunordered' , component:  ReppurrepomrequestsunorderedComponent
    },
    {
        path: 'reppurrepomlistoforders' , component:  ReppurrepomlistofordersComponent
    }, 
    {
        path: 'reppurrepomsupplierwiseorders' , component:  ReppurrepomsupplierwiseordersComponent
    },
    {
        path: 'reppurrepompendingorders' , component:  ReppurrepompendingordersComponent
    },
    //hrd
    {
        path: 'hrdkeyrepdepts', component: HrdKeyRepDepartmentsComponent
    },
    {
        path: '',children: [{path: 'hrdkeyrepdesigs', component: HrdKeyRepDesignationsComponent}]
    },
    {
        path: '',children: [{path: 'hrdkeyrepemployees', component: HrdKeyRepEmployeesComponent}]
    },
    //analysis
    {
        path: '',
        children: [{
            path: 'invkeyrepum',
            component: InvKeyRepUnitsComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invkeyrepstores',
            component: InvKeyRepStoresComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invkeyrepitemgroups',
            component: InvKeyRepItemGroupsComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invkeyrepitems',
            component: InvKeyRepItemsComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invkeyrepdepartments',
            component: InvKeyRepDepartmentsComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invkeyreplosses',
            component: InvKeyRepLossesComponent
        }
        ]
      },
      
      {
        path: '',
        children: [{
            path: 'invstorepclosingstocks',
            component: InvStoRepClosingStocksComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invstorepdayinfo',
            component: InvStoRepDayInfoComponent
        }
        ]
      },
      {
        path: '',
        children: [{
            path: 'invcostrepclosingvalue',
            component: InvCostRepClosingValuesComponent
        }
        ]
      },    
      //purchases
      {
        path: '',
         children: [{
             path: 'purkeyrepsuppliergroups',
             component: PurKeyRepListOfSupplierGroupsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purkeyrepsuppliers',
             component:PurKeyRepListOfSuppliersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequests',
             component:PurRepOrderManagementRequestsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestspending',
             component: PurRepOrderManagementRequestsPendingComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestsexpired',
             component:PurRepOrderManagementRequestsExpiredComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestsunordered',
             component:PurRepOrderManagementRequestsUnOrderedComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequeststobeapproved',
             component:PurRepOrderManagementRequestsTobeApprovedComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiries',
             component:PurRepOrderManagementEnquiriesListComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiriespending',
             component:PurRepOrderManagementEnquiriesPendingComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiriesexpired',
             component:PurRepOrderManagementEnquiriesExpiredComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomlistoforders',
             component:PurRepOrderManagementListOfOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomlistoforders',
             component:PurRepOrderManagementSupplierWiseOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomsupplierwiseorders',
             component: PurRepOrderManagementSupplierWiseOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepompendingorders',
             component:PurRepOrderManagementPendingOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomexpectedmaterials',
             component:PurRepOrderManagementExpectedMaterialsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomdelayedorders',
             component:PurRepOrderManagementDelayedOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepompendingadvances',
             component:PurRepOrderManagementPendingAdvancesComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomsupplierwiseadvances',
             component: PurRepOrderManagementSupplierWiseAdvancesComponent
         }
         ]
     },
//Purchase Reports
{
    path: '',
     children: [{
         path: 'purreppurlistofpurhcases',
         component:PurRepCostListofPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasesconsolidated',
         component:PurRepCostListofPurchasesConsolidatedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasesdetailed',
         component:PurRepCostListofPurchasesDetailedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasessupplierwise',
         component:PurRepCostListofPurchasesSupplierWiseComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasessupplierwiseconsolidated',
         component:PurRepCostListofPurchasesSupplierWiseConsolidatedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostlistofpr',
         component:PurRepCostListOfPurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostconsolidatedpr',
         component:PurRepCostConsolidatedPurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupplierwisepr',
         component:PurRepCostSupplierwisePurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostpuchasestopr',
         component:PurRepCostPurchaseToReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostlistofnotes',
         component:PurRepCostListOfNotesComponent
     }
     ]
 },
 //Cost Reports
 {
    path: '',
     children: [{
         path: 'purrepcostsupdaybook',
         component:PurRepCostSupplierDayBookComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupledger',
         component:PurRepCostSupplierLedgerComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupsnap',
         component:PurRepCostSupplierSnapShotComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupaging',
         component:PurRepCostSupplierAgingComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupcbalances',
         component:PurRepCostSupplierWisePendingComponent
     }
     ]
 },

//Stock Reports
{
    path: '',
     children: [{
         path: 'purrepstockdbook',
         component:PurRepStockDayBookComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockitemwiseledger',
         component:PurRepStockItemwiseLedgerComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockitemwiseconsolidations',
         component:PurRepStockItemwiseConsolidationsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstocktoppur',
         component:PurRepStockTopPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockleastpur',
         component:PurRepStockLeastPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstocknopur',
         component:PurRepStockNoPurchasesComponent
     }
     ]
 },
     //Analysis
     {
        path: '',
         children: [{
             path: 'purrepanalypricecompare',
             component:PurRepAnalysisPricesComparisonComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanastdtoactual',
             component:PurRepAnalysisStdToActualComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanalyreplinish1',
             component:PurRepAnalysisReplinishment1Component
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanalyreplinish2',
             component:PurRepAnalysisReplinishment2Component
         }
         ]
     },
     //QCReports
{
    path: '',
    children: [{
        path: 'qcmirpending',
        component:QcRepMIRPendingsComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'qcmirresults',
        component:QcRepMIRTestResultsComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'qcmirsupplierrating',
        component:QcRepMIRSupplierRankingComponent
    }
    ]
},
//producion repors
 //Reports
 {
    path: '',
    children: [{
        path: 'ppcrepmassachieve',
        component:PpcRepMassAchievementsComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcrepmaterialrequired',
        component:PpcRepMaterialRequirementComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcreprunningbatches',
        component:PpcRepRunningBatchesComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcrepmaterialcosting',
        component:PpcRepMaterialCostingComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcreppendingprocesses',
        component:PpcRepPendingProcessesComponent 
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcrepmachineusage',
        component:PpcRepMachineUsageComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'ppcrepmaterialwastage',
        component:PpcRepMaterialWastageComponent
    }
    ]
},
//maintenance reports
  //Key Reports
  {
    path: '',children: [{path: 'maikeyrepequipmentgroups', component:MaiKeyRepEquipmentGroupsComponent}]
},
{
    path: '',children: [{path: 'maikeyrepequipment', component:MaiKeyRepEquipmentDetailsComponent }]
},
{
    path: '',children: [{path: 'maireplistofpm', component:MaiRepListOfPreventiveMaintenancesComponent}]
},
   {
    path: '',children: [{path: 'mairepprojectedpm', component:MaiRepProjectedPreventiveMaintenancesComponent }]
},
{
    path: '',children: [{path: 'mairepexpiredpm', component:MaiRepExpiredPreventiveMaintenancesComponent}]
},   
{
    path: '',children: [{path: 'mairepcomplaints', component:MaiRepListOfBrekdownsComponent }]
},
{
    path: '',children: [{path: 'mairepunassignedbreakdown', component:MaiRepBreakdownUnassignedComponent}]
},
{
    path: '',children: [{path: 'mairepunclearedbreakdown', component:MaiRepBreakdownUnclearedComponent}]
},
{
    path: '',children: [{path: 'mairepmachinehourlosses', component:MaiRepBreakdownMachineHoursComponent}]
},
{
    path: '',children: [{path: 'mairepvendorranking', component:MaiRepVendorRankingComponent}]
},
{
    path: '',children: [{path: 'mairepcosting', component:MaiRepMaintenanceCostingComponent  }]
},
{
    path: '',children: [{path: 'mairepequipmentwise', component:MaiRepMaintenanceEquipmentWiseComponent}]
},
{
    path: '',children: [{path: 'maireplistofplantdown', component:MaiRepListofPlantDownComponent }]
},
{
    path: '',children: [{path: 'mairepreasonwiseplantdown', component:MaiRepPlantDownReasonwiseComponent}]
},
//sales
{
    path: '',
     children: [{
         path: 'salreplistofsales',
         component:SalRepListOfSalesComponent 
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'salrepdetailedsales',
         component:SalRepDetailedSalesComponent 
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'salrepconsolidated',
         component:SalRepConsolidatedSalesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'salrepcustomerwise',
         component: SalRepCustomerWiseConsolidatedComponent
     }
     ]
 },
 //accounts
    //Key Reports
    {
        path: '',children: [{path: 'acckeyrepgroups', component: AccKeyRepGroupsComponent }]
    },
    {
        path: '',children: [{path: 'acckerepaccounts', component:AccKeyRepAccountsComponent}]
    },
    {
        path: '',children: [{path: 'acckeyrepassets', component:AccKeyRepAssetsComponent}]
    },
     //Books
     {
        path: '',children: [{path: 'accfinrepcashbook', component: AccFinRepCashBookComponent }]
    },
    {
        path: '',children: [{path: 'accfinrepbankbook', component:AccFinRepBankBookComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepdaybook', component:AccFinRepDayBookComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepcompletedayinfo', component:AccFinRepCompleteDayInfoComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepledgerstd', component:AccFinRepLedgersStdComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepledgerdetailed', component:AccFinRepLedgersDetailedComponent }]
    },

    //Financial Statements
    {
        path: '',children: [{path: 'accfinreptrialbalance', component:AccFinRepTrialBalanceComponent  }]
    },
    {
        path: '',children: [{path: 'accfinrepschedules', component:AccFinRepSchedulesComponent }]
    },
    {
        path: '',children: [{path: 'accfinreppnlacc', component:AccFinRepPNLAccountComponent }]
    },
    {
        path: '',children: [{path: 'accfinrepbalancesheet', component:AccFinRepBalanceSheetComponent }]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalysisRoutingModule { }
