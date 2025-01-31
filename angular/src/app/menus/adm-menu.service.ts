import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
@Injectable({
  providedIn: 'root'
})
export class AdmMenuService {

  constructor(private adm:AdminGeneralInfoService) { }
  public getadminMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Administration',
      modulecode:12,
      menucode:0,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getMainChildren()
    }];

    return mainmenu;
  }
  private getMainChildren()
  {
    var mainchildren:any[]=[];
    mainchildren.push({
      menu:'Countries',
      modulecode:12,
      menucode:1,
      sceecode:1,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'States',
      modulecode:12,
      menucode:2,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'Taxes',
      modulecode:12,
      menucode:3,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'Roles',
      modulecode:12,
      menucode:4,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'Users',
      modulecode:12,
      menucode:5,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'User Role Permission',
      modulecode:12,
      menucode:6,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'License',
      modulecode:12,
      menucode:7,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'Order Status',
      modulecode:12,
      menucode:8,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    return mainchildren;
  }
  public getAdminHorizontalMenuMake():any[]
{
  
 
   var admin:any[]=[];
  

  var masters:any[]=[];
  if(this.adm.screenCheck(12,1,1,0))
    {
      masters.push(   
        { path: '/admin/countries', title: 'Countries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        
      )
    }
  if(this.adm.screenCheck(12,2,0,0))
    {
      masters.push(   
        { path: '/admin/states', title: 'States', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        
      )
    }
    if(this.adm.screenCheck(12,3,0,0))
      {
        masters.push(   
          { path: '/admin/taxes', title: 'Taxes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          
        )
      }
      if(this.adm.screenCheck(12,4,0,0))
        {
          masters.push(   
            { path: '/admin/roles', title: 'Roles', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
            
          )
        }
        if(this.adm.screenCheck(12,5,0,0))
          {
            masters.push(   
              { path: '/admin/users', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
              
            )
          }
          if(this.adm.screenCheck(12,6,0,0))
            {
              masters.push(   
                { path: '/admin/userrole', title: 'User Role Permission', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
                
              )
            }
            if(this.adm.screenCheck(12,7,0,0))
              {
                masters.push(   
                  { path: '/admin/license', title: 'License', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,   submenu: [] },
                  
                )
              }
              // if(this.adm.screenCheck(12,8,0,0))
              //   {
              //     masters.push(   
              //       { path: '/admin/orderstage', title: 'Order Status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,   submenu: [] },
                    
              //     )
              //   }
  if(masters.length > 0)
    {
      admin.push(
       { path: '', title: 'Administration', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',  isExternalLink: false, submenu:  masters
       }
      )
    }
    
    var hrdmenumasters:any[]=[];
    if(this.adm.screenCheck(8,1,1,0))
      {
        hrdmenumasters.push(   
          { path: '/admin/hrddepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          
        )
      }
      if(this.adm.screenCheck(8,1,2,0))
        {
          hrdmenumasters.push(   
            { path: '/admin/hrdallowances', title: 'Allowances Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
          )
        }
        if(this.adm.screenCheck(8,1,3,0))
          {
            hrdmenumasters.push(   
              { path: '/admin/hrdleaves', title: 'Leaves', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              
            )
          }
          if(this.adm.screenCheck(8,1,4,0))
            {
              hrdmenumasters.push(   
                { path: '/admin/hrddesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                
              )
            }
            if(this.adm.screenCheck(8,1,5,0))
              {
                hrdmenumasters.push(   
                  { path: '/admin/hrdrangewise', title: 'Range wise Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                  
                )
              }
              if(this.adm.screenCheck(8,1,6,0))
                {
                  hrdmenumasters.push(   
                    { path: '/admin/hrdemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    
                  )
                }
      if(hrdmenumasters.length > 0)
        {
          admin.push(
            { path: '', title: 'HRD', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  hrdmenumasters
           }
          )
        }
 var crmmenumasters:any[]=[];
 if(this.adm.screenCheck(7,1,1,0))
  {
    crmmenumasters.push(   
      {path: '/admin/crmpricelist', title: 'Price List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
      
    )
  }
  if(this.adm.screenCheck(7,1,2,0))
  {
      crmmenumasters.push(   
        {path: '/admin/crmdiscountlist', title: 'Discount List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
        
      )
  }
  if(this.adm.screenCheck(7,1,3,0))
  {
        crmmenumasters.push(   
          { path: '/admin/crmcusgrps', title: 'Customer Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
          
        )
  }
  
  if(this.adm.screenCheck(7,1,4,0))
    {
            crmmenumasters.push(   
              { path: '/admin/crmcustomers', title: 'Customers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
              
            )
    }
    if(this.adm.screenCheck(7,1,6,0))
    {
          crmmenumasters.push(   
           { path: '/admin/crmopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
                
          )
    }
    if(this.adm.screenCheck(12,2,0,0))
      {
        crmmenumasters.push(   
          { path: '/admin/crmtargets', title: 'Target', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
                  
        )
      }
      if(this.adm.screenCheck(12,2,0,0))
      {
          crmmenumasters.push(   
            { path: '/admin/crmTaxes', title: 'Tax Assigning', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
                    
          )
      }
      if(this.adm.screenCheck(12,2,0,0))
      {
            crmmenumasters.push(   
              { path: '/admin/crmsettings', title: 'Target Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                      
            )
      }
      if(this.adm.screenCheck(12,2,0,0))
        {
          crmmenumasters.push(   
           { path: '/admin/crmaccounts', title: 'Accounts Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                     
          )
        }
        if(this.adm.screenCheck(12,2,0,0))
        {
            crmmenumasters.push(   
              { path: '/admin/crmcallforreason', title: 'Reason For Call', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                          
            )
        }
        if(this.adm.screenCheck(12,2,0,0))
          {
              crmmenumasters.push(   
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
                { path: '/admin/crmcity', title: 'City', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                            
              )
          }
          if(crmmenumasters.length > 0)
            {
              admin.push(
                {path: '', title: 'CRM', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  crmmenumasters
               }
              )
            }
var invmenumasters:any[]=[];
if(this.adm.screenCheck(3,1,1,0)){
  invmenumasters.push(   
    { path: '/admin/invum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                
  )
}
if(this.adm.screenCheck(3,1,2,0)){
  invmenumasters.push(
    { path: '/admin/invstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
  )
}
if(this.adm.screenCheck(3,1,3,0)){
invmenumasters.push(
  { path: '/admin/invitemgroupslist', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
 
)
}
if(this.adm.screenCheck(3,1,4,0)){
  invmenumasters.push(
    { path: '/admin/invitemstra', title: 'Item Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
  )
}
if(this.adm.screenCheck(3,1,5,0)){
  invmenumasters.push(
    { path: '/admin/invopeningsotcks', title: 'Opening Stocks', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  
  )
}
if(this.adm.screenCheck(3,1,6,0)){
  invmenumasters.push(
    { path: '/admin/invdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  
  )
}
if(this.adm.screenCheck(3,1,7,0)){
  invmenumasters.push(
    { path: '/admin/invlosseslist', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
  )
}

if(invmenumasters.length > 0)
  {
    admin.push(
      {path: '', title: 'Inventory', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  invmenumasters
     }
    )
  }
  var purmenumasters:any[]=[];
  if(this.adm.screenCheck(2,1,1,0)){
  purmenumasters.push(   
    {path: '/admin/pursuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          
    ]},
          
  )
}
if(this.adm.screenCheck(2,1,2,0)){
  purmenumasters.push(   
  {path: '/admin/pursuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
    
  ]},
)
}
if(this.adm.screenCheck(2,1,3,0)){
purmenumasters.push(   
  { path: '/admin/pursupopeningbalances', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

)  
}
  if(purmenumasters.length > 0)
    {
      admin.push(
        {path: '', title: 'Purchases', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  purmenumasters
       }
      )
    }
    var qcmenumasters:any[]=[];
    if(this.adm.screenCheck(11,1,1,0)){
    qcmenumasters.push(   
      { path: '/admin/qctestsraw', title: 'Material Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            
      ]},
    )}
    if(this.adm.screenCheck(11,1,2,0)){
    qcmenumasters.push(   
      { path: '/admin/qctestspro', title: 'Process tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      
      ]},
    )}if(this.adm.screenCheck(11,1,3,0)){
    qcmenumasters.push(   
      { path: '/admin/qctestssalereturn', title: 'Sale Return Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
    
                  
    )
  }
    if(qcmenumasters.length > 0)
      {
        admin.push(
          {path: '', title: 'QC', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  qcmenumasters
         }
        )
      }
      var promenumasters:any[]=[];
      if(this.adm.screenCheck(10,1,1,0)){
      promenumasters.push(   
        { path: '/admin/ppcprocess', title: 'Processes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          
      )
    }
    if(this.adm.screenCheck(10,1,2,0)){
      promenumasters.push(
        { path: '/admin/ppcprocessattachments', title: 'Producti Attachments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                  
      )
    }
      if(promenumasters.length > 0)
        {
          admin.push(
            {path: '', title: 'Production', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  promenumasters
           }
          )
        }
        var maimenumasters:any[]=[];
        if(this.adm.screenCheck(9,1,1,0)){
        maimenumasters.push(   
          { path: '/admin/maiequipgroups', title: 'Equipment Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        )
      }
      if(this.adm.screenCheck(9,1,2,0)){
        maimenumasters.push(
          { path: '/admin/maiequipment', title: 'Equipment', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        
        )
      }
        if(maimenumasters.length > 0)
          {
            admin.push(
              {path: '', title: 'Maintenance', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu:  maimenumasters
             }
            )
          }
          var accmenumasters:any[]=[];
          if(this.adm.screenCheck(1,1,1,0)){
          accmenumasters.push(   
            { path: '/admin/accaccountgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           
          )
        }
        if(this.adm.screenCheck(1,1,2,0)){
          accmenumasters.push(
            { path: '/admin/accaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
          )
        }
        if(this.adm.screenCheck(1,1,3,0)){
          accmenumasters.push(
            { path: '/admin/accopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
          )
        }
        if(this.adm.screenCheck(1,1,4,0)){
          accmenumasters.push(
            { path: '/admin/accassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                 
          )
        }
          if(accmenumasters.length > 0)
            {
              admin.push(
                {path: '', title: 'Accounts', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu:  accmenumasters
               }
              )
            }
 return admin;
}
}
