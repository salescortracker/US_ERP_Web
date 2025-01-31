import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';
@Injectable({
  providedIn: 'root'
})
export class PosMenuService {

  constructor(private adm:AdminGeneralInfoService) { }
  public getSalesMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Sales',
      modulecode:5,
      menucode:0,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getMainChildren()
    }];

    return mainmenu;
  }

  private getMainChildren():any[]
{
  var mainchildren:any[]=[];
  mainchildren.push({
    menu:'Dashboard',
    modulecode:5,
    menucode:0,
    sceecode:0,
    trancode:1,
    opencheck:true,
    actualcheck:false,
    children:[]

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:5,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:5,
    menucode:7,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });

  // mainchildren.push({
  //   menu:'Setup',
  //   modulecode:5,
  //   menucode:9,
  //   sceecode:0,
  //   trancode:0,
  //   opencheck:true,
  //   actualcheck:false,
  //   children:this.getSetupChildren()

  // }); 


return mainchildren;
}



public getMasterChildren():any[]
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Outlets',
  modulecode:5,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:5,
    menucode:1,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:5,
    menucode:1,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:5,
    menucode:1,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

 

return masterchildren;
}


public getTransactionChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'Invoice Temp',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });

  transchildren.push({
    menu:'Invoicing',
    modulecode:5,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
      {
        
        menu:'Create',
        modulecode:5,
        menucode:2,
        sceecode:2,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:5,
        menucode:2,
        sceecode:2,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:5,
        menucode:2,
        sceecode:2,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      },
       
      
        ]
  });
  transchildren.push({
    menu:'Dispatch Clearance',
    modulecode:5,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
      {
        
        menu:'Generate',
        modulecode:5,
        menucode:2,
        sceecode:3,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Clear',
        modulecode:5,
        menucode:2,
        sceecode:3,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
     
       
      
        ]
  });
      

  
 
  return transchildren;
}




public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Sale Reports',
    modulecode:5,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[{
      menu:'List of Sales',
      modulecode:5,
      menucode:9,
      sceecode:1,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Detailed Sales',
      modulecode:5,
      menucode:9,
      sceecode:1,
      trancode:2,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Consolidated Sales',
      modulecode:5,
      menucode:9,
      sceecode:1,
      trancode:3,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Item wise Consolidation',
      modulecode:5,
      menucode:9,
      sceecode:1,
      trancode:4,
      opencheck:true,
      actualcheck:false,
    }
  ]
  });
  // repchildren.push({
  //   menu:'Costing Reports',
  //   modulecode:5,
  //   menucode:9,
  //   sceecode:2,
  //   trancode:0,
  //   opencheck:true,
  //   actualcheck:false,
  //   children:[]
  // });
  // repchildren.push({
  //   menu:'Stock Reports',
  //   modulecode:5,
  //   menucode:9,
  //   sceecode:3,
  //   trancode:0,
  //   opencheck:true,
  //   actualcheck:false,
  //   children:[]
  // });
  // repchildren.push({
  //   menu:'Analysis Reports',
  //   modulecode:5,
  //   menucode:9,
  //   sceecode:4,
  //   trancode:0,
  //   opencheck:true,
  //   actualcheck:false,
  //   children:[]
  // });

  
  return repchildren;
}


public getSetupChildren():any[]
{
  var setupChildren:any[]=[];
  setupChildren.push({
    menu:'Sale Types',
    modulecode:5,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Settings',
    modulecode:5,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Sale Types',
    modulecode:5,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  return setupChildren;
}

public getSalesMenuMake():any[]
{
  var menu:any[]=[];
  if(this.adm.screenCheck(5,0,0,1))
  {
    menu.push({
      path: '/pos/salesdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,  submenu:[]
    });
   }
  var masters:any[]=[];


 var transactions1:any[]=[];
 
if(this.adm.screenCheck(5,2,1,0))
{
 menu.push( 
  { path: '/pos/saldispatches', title: 'Invoice-Temp', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(this.adm.screenCheck(5,2,2,0))
{
  menu.push( 
  { path: '/pos/sales2', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(this.adm.screenCheck(5,2,3,0))
{
  menu.push( 
  { path: '/pos/saldespatchclear', title: 'Dispatch Clearances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(transactions1.length > 0)
 {
  // menu.push(
  //   {  path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions1
  //   }
  //  )
 }


  return menu;
}
 

}

