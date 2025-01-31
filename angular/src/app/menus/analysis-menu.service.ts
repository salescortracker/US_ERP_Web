import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
@Injectable({
  providedIn: 'root'
})
export class AnalysisMenuService {

  constructor(private adm:AdminGeneralInfoService) { }
  public getanalysisMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'HRD',
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
  public getMainChildren(){

  }
  public getAnalysisHorizontalMenuMake():any[]
  {
    var anaysis:any[]=[];
    var hrdreports:any[]=[];
    var hrdsubreports:any[]=[];
    if(this.adm.screenCheck(8,8,1,1)){
      hrdsubreports.push(
        { path: '/analysis/hrdkeyrepdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
      )
    }
    if(this.adm.screenCheck(8,8,1,2)){
      hrdsubreports.push(
        { path: '/analysis/hrdkeyrepdesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
      )
    } if(this.adm.screenCheck(8,8,1,3)){
      hrdsubreports.push(
        { path: '/analysis/hrdkeyrepemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
      
      )
    }
    if(this.adm.screenCheck(8,8,1,0))
      {
        hrdreports.push(   
          { path: '', title: 'Key Reports', icon: 'ft-user', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: 
           hrdsubreports
        },
      
        )
      }
     
      if(hrdreports.length > 0)
        {
          anaysis.push(
            {path: '', title: 'HRD', icon: 'ft-user', class: 'dropdown nav-item has-sub',  isExternalLink: false,  submenu:  hrdreports
           }
          )
        }
        var crmreports:any[]=[];
        var crmkeysubreports:any[]=[];
        var crmpressubreports:any[]=[];
        var crmpostsubreports:any[]=[];
        if(this.adm.screenCheck(7,9,1,1)){
          crmkeysubreports.push(
            { 
              path: '/analysis/crmkeyrepcustgroups', 
              title: 'Customer Groups', 
              icon: 'ft-arrow-right submenu-icon', 
              class: '', 
              badge: '', 
              badgeClass: '', 
              isExternalLink: false, 
              submenu: [] 
          },
        )
      }
      if(this.adm.screenCheck(7,9,1,2)){
        crmkeysubreports.push(
          { 
            path: '/analysis/crmkeyrepcustomers', 
            title: 'Customers', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        }
        )
      } 
      if(this.adm.screenCheck(7,9,2,1)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmreptelecallslist', 
            title: 'Tele Calls', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,2)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmreptelecallspendings', 
            title: 'Pending Calls', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,3)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmenquiryrx', 
            title: 'Enquiries', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,4)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmrepenquiriespendings', 
            title: 'Pending Enquiries', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,5)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmrepcallerwisecalls', 
            title: 'Caller Wise Calls', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,6)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmreporderslist', 
            title: 'Orders', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,7)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmreporderscustomerwise', 
            title: 'Customer Wise Orders', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,8)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmreporderspendings', 
            title: 'Pending Orders', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,9)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmrepordersitemwise', 
            title: 'Item to be Dispatched', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,2,10)){
        crmpressubreports.push(
          { 
            path: '/analysis/repcrmrepadvancesliable', 
            title: 'Advances Liable', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        }
        )
      }
      if(this.adm.screenCheck(7,9,3,1)){
        crmpostsubreports.push(
          { 
            path: '/analysis/repcrmpostrepsalereturns', 
            title: 'Sale Returns', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,3,2)){
        crmpostsubreports.push(
          { 
            path: '/analysis/repcrmpostrepsnapshot', 
            title: 'Customer Snap Shot', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        },
        )
      }
      if(this.adm.screenCheck(7,9,3,3)){
        crmpostsubreports.push(
          { 
            path: '/analysis/repcrmpostrepagings', 
            title: 'Customer Wise Aging', 
            icon: 'ft-arrow-right submenu-icon', 
            class: '', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false, 
            submenu: [] 
        }
        )
      }
    
        if(this.adm.screenCheck(7,9,1,0))
          {
            crmreports.push(   {
             path: '', 
            title: 'Key Reports', 
            icon: 'ft-arrow-right submenu-icon', 
            class: 'has-sub', 
            badge: '', 
            badgeClass: '', 
            isExternalLink: false,   submenu: 
                crmkeysubreports
             },
          
            )
          }
          if(this.adm.screenCheck(7,9,2,0))
            {
              crmreports.push(   
                
                  {
                    path: '', 
                    title: 'Pre Sale Reports', 
                    icon: 'ft-arrow-right submenu-icon', 
                    class: 'has-sub', 
                    badge: '', 
                    badgeClass: '', 
                    isExternalLink: false, submenu:  
                  crmpressubreports
               },
            
              )
            }
            if(this.adm.screenCheck(7,9,3,0))
              {
                crmreports.push(   
                  
                    {
                      path: '', 
                      title: 'Post Sale Reports', 
                      icon: 'ft-arrow-right submenu-icon', 
                      class: 'has-sub', 
                      badge: '', 
                      badgeClass: '', 
                      isExternalLink: false, submenu: 
                    crmpostsubreports
                },
              
                )
              }
         
          if(crmreports.length > 0)
            {
              anaysis.push(
                {
                  path: '', 
                  title: 'CRM', 
                  icon: 'ft-home', 
                  class: 'has-sub', 
                  badge: '', 
                  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', 
                  isExternalLink: false,  submenu:  crmreports
               }
              )
            }
        var invreports:any[]=[];
        var invsubreports:any[]=[];
        var invstksubreports:any[]=[];
        if(this.adm.screenCheck(3,9,3,1)){
          invstksubreports.push(
            { path: '/analysis/invcostrepclosingvalue', title: 'Closing Stock', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         
        )
      }
      if(this.adm.screenCheck(3,9,2,1)){
        invsubreports.push(
          { path: '/analysis/invkeyrepum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
      )
    }
        if(this.adm.screenCheck(3,9,2,2)){
          invsubreports.push(
            { path: '/analysis/invkeyrepstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         
        )
      }
      if(this.adm.screenCheck(3,9,2,3)){
        invsubreports.push(
          { path: '/analysis/invkeyrepitemgroups', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
         
        )
      } if(this.adm.screenCheck(3,9,2,4)){
        invsubreports.push(
             { path: '/analysis/invkeyrepitems', title: 'Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        
        )
      }
        if(this.adm.screenCheck(3,9,2,5)){
          invsubreports.push(
            { path: '/analysis/invkeyrepdepartments', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
          
          )
      }
    
      if(this.adm.screenCheck(3,9,2,6)){
        invsubreports.push(
          { path: '/analysis/invkeyreplosses', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        
        )
    }
        if(this.adm.screenCheck(3,9,2,0))
          {
            invreports.push(   
              { path: '', title: 'Key Reports', icon: 'icon-basket-loaded', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: 
                invsubreports
             },
            )
           
          }
          if(this.adm.screenCheck(3,9,3,0)){
          invreports.push(   
            { path: '', title: 'Stock Reports', icon: 'icon-basket-loaded', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
              invstksubreports
          },
        
          )
        }
          
          if(invreports.length > 0)
            {
              anaysis.push(
                {path: '', title: 'INVENTORY', icon: 'icon-basket-loaded', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  invreports
               }
              )
            }
            var purreports:any[]=[];
            var purkeyreports:any[]=[];
            var purordersubreports:any[]=[];
            var purpursubreports:any[]=[];
            var purcostsubreports:any[]=[];
            var purstksubreports:any[]=[];
            var puranasubreports:any[]=[];
            if(this.adm.screenCheck(2,11,1,1)){
              purkeyreports.push(
                { path: '/analysis/purkeyrepsuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
             
            )
          }
          if(this.adm.screenCheck(2,11,1,2)){
            purkeyreports.push(
              { path: '/analysis/purkeyrepsuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           
          )
        }
            if(this.adm.screenCheck(2,11,2,1)){
              purordersubreports.push(
                { path: '/analysis/purrepomrequests', title: 'List of Requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
             
            )
          }
          if(this.adm.screenCheck(2,11,2,2)){
            purordersubreports.push(
              { path: '/analysis/purrepomrequestspending', title: 'Pending Requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
             
            )
          } if(this.adm.screenCheck(2,11,2,3)){
            purordersubreports.push(
              { path: '/analysis/purrepomrequestsunordered', title: 'Item wise pending requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
            
            )
          }
            if(this.adm.screenCheck(2,11,2,4)){
              purordersubreports.push(
                { path: '/analysis/purrepomlistoforders', title: 'List of Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
              
              )
          }
        
          if(this.adm.screenCheck(2,11,2,5)){
            purordersubreports.push(
              { path: '/analysis/purrepomsupplierwiseorders', title: 'Supplierwise Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
            
            )
        }
        if(this.adm.screenCheck(2,11,2,6)){
          purordersubreports.push(
            { path: '/analysis/purrepompendingorders', title: 'Pending Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
          
          )
      }
      if(this.adm.screenCheck(2,11,2,7)){
        purordersubreports.push(
          { path: '/analysis/purrepomexpectedmaterials', title: 'Expected Material', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,   submenu: []},
        
        )
    }
    if(this.adm.screenCheck(2,11,2,8)){
      purordersubreports.push(
        { path: '/analysis/purrepomdelayedorders', title: 'Delayed Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
      
      )
  }
  if(this.adm.screenCheck(2,11,2,9)){
    purordersubreports.push(
      { path: '/analysis/purrepompendingadvances', title: 'Pending Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
    
    )
}
if(this.adm.screenCheck(2,11,2,10)){
  purordersubreports.push(
    { path: '/analysis/purrepomsupplierwiseadvances', title: 'Supplier wise Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,1)){
  purpursubreports.push(
    { path: '/analysis/purreppurlistofpurhcases', title: 'List of Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,2)){
  purpursubreports.push(
    { path: '/analysis/purreppurlistofpurhcasesdetailed', title: 'Detailed Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,3)){
  purpursubreports.push(
    { path: '/analysis/purreppurlistofpurhcasesconsolidated', title: 'Consolidated Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,4)){
  purpursubreports.push(
    { path: '/analysis/purreppurlistofpurhcasessupplierwise', title: 'Supplier wise Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,5)){
  purpursubreports.push(
    { path: '/analysis/purreppurlistofpurhcasessupplierwiseconsolidated', title: 'Supplier wise Consolidation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,6)){
  purpursubreports.push(
    { path: '/analysis/purrepcostlistofpr', title: 'Purchases Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,7)){
  purpursubreports.push(
    { path: '/analysis/purrepcostconsolidatedpr', title: 'Consolidated PR', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,8)){
  purpursubreports.push(
    { path: '/analysis/purrepcostsupplierwisepr', title: 'Supplier wise Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,9)){
  purpursubreports.push(
    { path: '/analysis/purrepcostpuchasestopr', title: 'Purchases to returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,3,10)){
  purpursubreports.push(
    { path: '/analysis/purrepcostlistofnotes', title: 'List of notes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,4,1)){
  purcostsubreports.push(
    { path: '/analysis/purrepcostsupdaybook', title: 'Supplier day book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,4,2)){
  purcostsubreports.push(
    { path: '/analysis/purrepcostsupledger', title: 'Supplier Ledger', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,4,3)){
  purcostsubreports.push(
    { path: '/analysis/purrepcostsupsnap', title: 'Supplier Snap Shot', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,4,4)){
  purcostsubreports.push(
    { path: '/analysis/purrepcostsupaging', title: 'Suppliers Aging', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,4,5)){
  purcostsubreports.push(
    { path: '/analysis/purrepcostsupcbalances', title: 'Supplier wise Pending details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,5,1)){
  purstksubreports.push(
    { path: '/analysis/purrepstockdbook', title: 'Purchases Daybook', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,5,2)){
  purstksubreports.push(
    { path: '/analysis/purrepstockitemwiseconsolidations', title: 'Consolidated Item', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,5,3)){
  purstksubreports.push(
    { path: '/analysis/purrepstocktoppur', title: 'Top Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,5,4)){
  purstksubreports.push(
  
    { path: '/analysis/purrepstockleastpur', title: 'Least Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,5,5)){
  purstksubreports.push(
  
    { path: '/analysis/purrepstocknopur', title: 'No Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,6,1)){
  puranasubreports.push(
  
    { path: '/analysis/purrepanalypricecompare', title: 'Price Comparison', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,6,2)){
  puranasubreports.push(
  
    { path: '/analysis/purrepanastdtoactual', title: 'Std to Actual', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,6,3)){
  puranasubreports.push(
  
      { path: '/analysis/purrepanalyreplinish1', title: 'Replinishment1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  
  )
}
if(this.adm.screenCheck(2,11,6,4)){
  puranasubreports.push(
  
    { path: '/analysis/purrepanalyreplinish2', title: 'Replinshment2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
  
  )
}
            if(this.adm.screenCheck(2,11,1,0))
              {
                purreports.push(   
                   { path: '', title: 'Key Reports', icon: 'icon-key', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: 
                    purkeyreports
                 },
                )
               
              }
              if(this.adm.screenCheck(2,11,2,0)){
              purreports.push(   
                { path: '', title: 'Order Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                  purordersubreports
              },
            
              )
            }
            if(this.adm.screenCheck(2,11,3,0)){
              purreports.push(   
                { path: '', title: 'Purchase Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                  purpursubreports
              },
            
              )
            }
            if(this.adm.screenCheck(2,11,4,0)){
              purreports.push(   
                { path: '', title: 'Cost Reports', icon: 'ft-dollar-sign', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                  purcostsubreports
              },
            
              )
            }
            if(this.adm.screenCheck(2,11,5,0)){
              purreports.push(   
                { path: '', title: 'Stock & Accounts Reports', icon: 'ft-shopping-cart', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                  purstksubreports
              },
            
              )
            }
            if(this.adm.screenCheck(2,11,6,0)){
              purreports.push(   
                { path: '', title: 'Analysis', icon: 'icon-pie-chart', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                  puranasubreports
              },
            
              )
            }
              
              if(purreports.length > 0)
                {
                  anaysis.push(
                    {path: '', title: 'PURCHASES', icon: 'ft-shopping-cart', class: 'dropdown nav-item has-sub',  isExternalLink: false,  submenu:  purreports
                   }
                  )
                }
            var qcreports:any[]=[];
            var qcsubreports:any[]=[];
            if(this.adm.screenCheck(11,7,1,1)){
              qcsubreports.push(
              { path: '/analysis/qcmirpending', title: 'MIR to be approved', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
             
            )
          }
          if(this.adm.screenCheck(11,7,1,2)){
            qcsubreports.push(
              { path: '/analysis/qcmirresults', title: 'MIR Test Results', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
             
            )
          } if(this.adm.screenCheck(11,7,1,3)){
            qcsubreports.push(
              { path: '/analysis/qcmirsupplierrating', title: 'Supplier wise Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
            
            )
          }
            if(this.adm.screenCheck(11,7,1,0))
              {
                qcreports.push(   
                  { path: '', title: 'Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: 
                    qcsubreports
                 },
              
                )
              }
             
              if(qcreports.length > 0)
                {
                  anaysis.push(
                    {path: '', title: 'QC', icon: 'ft-check-circle', class: 'dropdown nav-item has-sub',  isExternalLink: false,  submenu:  qcreports
                   }
                  )
                }
                var proreports:any[]=[];
                var prosubreports:any[]=[];
                if(this.adm.screenCheck(10,7,1,1)){
                  prosubreports.push(
                    { path: '/analysis/ppcrepmassachieve', title: 'Mass Acheivements', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                 
                )
              }
              if(this.adm.screenCheck(10,7,1,2)){
                prosubreports.push(
                  { path: '/analysis/ppcrepmaterialrequired', title: 'Material Requirement', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                 
                )
              } if(this.adm.screenCheck(10,7,1,3)){
                prosubreports.push(
                  { path: '/analysis/ppcrepmaterialcosting', title: 'Material Cost', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                
                )
              }
              if(this.adm.screenCheck(10,7,1,4)){
                prosubreports.push(
                  { path: '/analysis/ppcreppendingprocesses', title: 'Pending Processes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
                
                )
              }
              if(this.adm.screenCheck(10,7,1,5)){
                prosubreports.push(
                  { path: '/analysis/ppcrepmaterialwastage', title: 'Material Wastage/gain', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
                
                )
              }
                if(this.adm.screenCheck(10,7,1,0))
                  {
                    proreports.push(   
                      { path: '', title: 'Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu: 
                        prosubreports
                     },
                  
                    )
                  }
                 
                  if(proreports.length > 0)
                    {
                      anaysis.push(
                        {path: '', title: 'PRODUCTION', icon: 'ft-pie-chart', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  proreports
                       }
                      )
                    }
                    var maireports:any[]=[];
                    var maisubreports:any[]=[];
                    var maistksubreports:any[]=[];
                    if(this.adm.screenCheck(9,8,1,1)){
                      maisubreports.push(
                        { path: '/analysis/maikeyrepequipmentgroups', title: 'Equipment Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                     
                    )
                  }
                  if(this.adm.screenCheck(9,8,1,2)){
                    maisubreports.push(
                      { path: '/analysis/maikeyrepequipment', title: 'Equipment', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
                   
                  )
                }
                  if(this.adm.screenCheck(9,8,2,1)){
                    maistksubreports.push(
                      { path: '/analysis/maireplistofpm', title: 'List of PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
                   
                  )
                }
                    if(this.adm.screenCheck(9,8,2,2)){
                      maistksubreports.push(
                        { path: '/analysis/mairepprojectedpm', title: 'Projected PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] },
                     
                    )
                  }
                  if(this.adm.screenCheck(9,8,2,3)){
                    maistksubreports.push(
                      { path: '/analysis/mairepexpiredpm', title: 'Expired PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                     
                    )
                  } if(this.adm.screenCheck(9,8,2,4)){
                    maistksubreports.push(
                      { path: '/analysis/mairepcomplaints', title: 'Eqiupment Complaints', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                    
                    )
                  }
                    if(this.adm.screenCheck(9,8,2,5)){
                      maistksubreports.push(
                        { path: '/analysis/mairepunassignedbreakdown', title: 'Breakdown Unassigned', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                      
                      )
                  }
                
                  if(this.adm.screenCheck(9,8,2,6)){
                    maistksubreports.push(
                      { path: '/analysis/mairepunclearedbreakdown', title: 'Breakdown Uncleared', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                    
                    )
                }
                if(this.adm.screenCheck(9,8,2,7)){
                  maistksubreports.push(
                    { path: '/analysis/mairepmachinehourlosses', title: 'Machine hours Loss', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                  
                  )
              }
              if(this.adm.screenCheck(9,8,2,8)){
                maistksubreports.push(
                  { path: '/analysis/mairepvendorranking', title: 'Vendor wise Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                
                )
            }
            if(this.adm.screenCheck(9,8,2,9)){
              maistksubreports.push(
                { path: '/analysis/mairepcosting', title: 'Maintenance Costing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
              
              )
          }
          if(this.adm.screenCheck(9,8,2,10)){
            maistksubreports.push(
              { path: '/analysis/mairepequipmentwise', title: 'Equipment wise performance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
            
            )
        }
        if(this.adm.screenCheck(9,8,2,11)){
          maistksubreports.push(
            { path: '/analysis/maireplistofplantdown', title: 'Plant Down', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
          
          )
      }
      if(this.adm.screenCheck(9,8,2,12)){
        maistksubreports.push(
          { path: '/analysis/mairepreasonwiseplantdown', title: 'Reason wise Plant down hours', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        
        )
    }
                    if(this.adm.screenCheck(9,8,1,0))
                      {
                        maireports.push(   
                          { path: '', title: 'Key Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu: 
                            maisubreports
                         },
                        )
                       
                      }
                      if(this.adm.screenCheck(9,8,2,0)){
                        maireports.push(   
                        { path: '', title: 'Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,   submenu: 
                          maistksubreports
                       },
                    
                      )
                    }
                      
                      if(maireports.length > 0)
                        {
                          anaysis.push(
                            {path: '', title: 'MAINTENANCE', icon: 'icon-note', class: 'dropdown nav-item has-sub',  isExternalLink: false,submenu:  maireports
                           }
                          )
                        }
                        var salreports:any[]=[];
                        var salsubreports:any[]=[];
                        if(this.adm.screenCheck(5,9,1,1)){
                          salsubreports.push(
                            { path: '/analysis/salreplistofsales', title: 'List of Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                         
                        )
                      }
                      if(this.adm.screenCheck(5,9,1,2)){
                        salsubreports.push(
                          { path: '/analysis/salrepdetailedsales', title: 'Detailed Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                         
                        )
                      } if(this.adm.screenCheck(5,9,1,3)){
                        salsubreports.push(
                          { path: '/analysis/salrepconsolidated', title: 'Consolidated Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                        
                        )
                      }
                      if(this.adm.screenCheck(5,9,1,4)){
                        salsubreports.push(
                          { path: '/analysis/salrepcustomerwise', title: 'Item wise Consolidation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                        
                        )
                      }
                        if(this.adm.screenCheck(5,9,1,0))
                          {
                            salreports.push(   
                              { path: '', title: 'Sale Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,  submenu:  
                                salsubreports
                            },
                          
                            )
                          }
                         
                          if(salreports.length > 0)
                            {
                              anaysis.push(
                                {path: '', title: 'SALES', icon: 'ft-bar-chart', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  salreports
                               }
                              )
                            }
                            var accreports:any[]=[];
                            var acckeysubreports:any[]=[];
                            var accbookssubreports:any[]=[];
                            var accfinancesubreports:any[]=[];
                            if(this.adm.screenCheck(1,8,1,1)){
                              acckeysubreports.push(
                                { path: '/analysis/acckeyrepgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                             
                            )
                          }
                          if(this.adm.screenCheck(1,8,1,2)){
                            acckeysubreports.push(
                              { path: '/analysis/acckerepaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: [] },
                             
                            )
                          } if(this.adm.screenCheck(1,8,1,3)){
                            acckeysubreports.push(
                              { path: '/analysis/acckeyrepassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,2,1)){
                            accbookssubreports.push(
                              { path: '/analysis/accfinrepcashbook', title: 'Cash Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,2,2)){
                            accbookssubreports.push(
                              { path: '/analysis/accfinrepbankbook', title: 'Bank Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,2,3)){
                            accbookssubreports.push(
                              { path: '/analysis/accfinrepdaybook', title: 'Day Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,2,4)){
                            accbookssubreports.push(
                              { path: '/analysis/accfinrepledgerdetailed', title: 'Ledgers Detailed', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,3,1)){
                            accfinancesubreports.push(
                              { path: '/analysis/accfinreptrialbalance', title: 'Trial Balance', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,3,2)){
                            accfinancesubreports.push(
                              { path: '/analysis/accfinrepschedules', title: 'Schedules', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,3,3)){
                            accfinancesubreports.push(
                              { path: '/analysis/accfinreppnlacc', title: 'P & L Account', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                            
                            )
                          }
                          if(this.adm.screenCheck(1,8,3,4)){
                            accfinancesubreports.push(
                              {path: '/analysis/accfinrepbalancesheet', title: 'Balance Sheet', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false,  submenu: []},
                            
                            )
                          }
                          
                            if(this.adm.screenCheck(1,8,1,0))
                              {
                                accreports.push(   
                                  { path: '', title: 'Key Reports', icon: 'icon-key', class: 'dropdown nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false,   submenu: 
                                    acckeysubreports
                                 },
                              
                                )
                              }
                              if(this.adm.screenCheck(1,8,2,0))
                                {
                                  accreports.push(   
                                    {
                                      path: '', title: 'Books', icon: 'icon-note', class: 'dropdown nav-item has-sub',   isExternalLink: false,  submenu:  
                                      accbookssubreports
                                   },
                                
                                  )
                                }
                                if(this.adm.screenCheck(1,8,3,0))
                                  {
                                    accreports.push(   
                                      {
                                        path: '', title: 'Financial Statements', icon: 'ft-dollar-sign', class: 'dropdown nav-item has-sub', isExternalLink: false,submenu: 
                                        accfinancesubreports
                                    },
                                  
                                    )
                                  }
                             
                              if(accreports.length > 0)
                                {
                                  anaysis.push(
                                    {path: '', title: 'ACCOUNTS', icon: 'ft-clipboard', class: 'dropdown nav-item has-sub',  isExternalLink: false,  submenu:  accreports
                                   }
                                  )
                                }
    return anaysis;
  }
}
