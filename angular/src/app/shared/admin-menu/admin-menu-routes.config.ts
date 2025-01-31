import { RouteInfo } from './admin-menu.metadata';


export const ROUTES: RouteInfo[] = [
    {
      path: '', title: 'Administration', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',  isExternalLink: false,  submenu: [
        { path: '/admin/countries', title: 'Countries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/states', title: 'States', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/taxes', title: 'Taxes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/roles', title: 'Roles', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/users', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/userrole', title: 'User Role Permission', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       // { path: '/admin/targets', title: 'Targets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //  { path: '/admin/sysver', title: 'System Requirement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/admin/sysmake', title: 'System Making', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }, // not required now when ever required enable
        // { path: '/admin/emailsetting', title: 'Email Setting', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
        // { path: '/admin/custrails', title: 'Trail Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []  },
     
        { path: '/admin/license', title: 'License', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/admin/orderstage', title: 'Order Status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         ],
      
    },
    
    { path: '', title: 'HRD', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/admin/hrddepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/admin/hrdallowances', title: 'Allowances Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/admin/hrdleaves', title: 'Leaves', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/admin/hrddesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/admin/hrdrangewise', title: 'Range wise Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/admin/hrdemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
    ]},
    
    // {path: '', title: 'Purchases', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
    //   {path: '/admin/pursuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      
    //   ]},
    //   {path: '/admin/pursuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      
    //   ]},
    //   { path: '/admin/pursupopeningbalances', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
    // ]},
    //{
      // path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        {path: '', title: 'CRM', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          {path: '/admin/crmpricelist', title: 'Price List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          
          ]},
          {path: '/admin/crmdiscountlist', title: 'Discount List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          
          ]},
          { path: '/admin/crmcusgrps', title: 'Customer Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmcustomers', title: 'Customers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          // { path: '/admin/LeadsListing', title: 'Leads Management', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
          { path: '/admin/crmtargets', title: 'Target', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmTaxes', title: 'Tax Assigning', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          // { path: '/admin/crmTaxes', title: 'Tax Assigning', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmsettings', title: 'Target Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmaccounts', title: 'Accounts Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmcallforreason', title: 'Reason For Call', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmorderforstatus', title: 'Quotation Status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/scopeofsupply', title: 'Scope of Supply', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/process', title: 'Process Master', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmsaledispatch', title: 'Dispatch Email', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmleadowner', title: 'Lead Owner', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmcalltypes', title: 'Call Types', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmleadstatus', title: 'Lead status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmleadsource', title: 'Lead Source', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmleadstage', title: 'Lead Stage', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmindustry', title: 'Industry', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/admin/crmcity', title: 'City', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]},
        // {path: '', title: 'Inventory', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   { path: '/admin/invum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invitemgroupslist', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invitemstra', title: 'Item Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invopeningsotcks', title: 'Opening Stocks', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/invlosseslist', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        
        // ]},
        // {path: '', title: 'Purchases', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   {path: '/admin/pursuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          
        //   ]},
        //   {path: '/admin/pursuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          
        //   ]},
        //   { path: '/admin/pursupopeningbalances', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        
        // ]},
        // {path: '', title: 'QC', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   { path: '/admin/qctestsraw', title: 'Material Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/qctestspro', title: 'Process tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/qctestssalereturn', title: 'Sale Return Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          
        
        // ]},
        // {path: '', title: 'Production', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   { path: '/admin/ppcprocess', title: 'Processes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/ppcprocessattachments', title: 'Producti Attachments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
          
        
        // ]},
        // {path: '', title: 'Maintenance', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   { path: '/admin/maiequipgroups', title: 'Equipment Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/maiequipment', title: 'Equipment', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
          
        
        // ]},
        // {path: '', title: 'Accounts', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        //   { path: '/admin/accaccountgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/accaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/accopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //   { path: '/admin/accassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
          
        
        // ]}
    //   ]
    // }
    
  ];