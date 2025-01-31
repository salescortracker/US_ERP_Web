import { Component, OnInit } from '@angular/core';
import { AdmRolesService } from 'app/services/admin/adm-roles.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccountsMenuService } from 'app/services/menus/accounts-menu.service';
import { AnalysisMenuService } from 'app/services/menus/analysis-menu.service';
import { CrmMenuService } from 'app/services/menus/crm-menu.service';
import { FoMenuService } from 'app/services/menus/fo-menu.service';
import { HrdMenuService } from 'app/services/menus/hrd-menu.service';
import { InventoryMenuService } from 'app/services/menus/inventory-menu.service';
import { MaintenanceMenuService } from 'app/services/menus/maintenance-menu.service';
import { PosMenuService } from 'app/services/menus/pos-menu.service';

import { ProductionMenuService } from 'app/services/menus/production-menu.service';
import { PurchasesMenuService } from 'app/services/menus/purchases-menu.service';
import { QcMenuService } from 'app/services/menus/qc-menu.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AdmMenuService } from 'app/menus/adm-menu.service';
@Component({
  selector: 'app-user-roles-permissions',
  templateUrl: './user-roles-permissions.component.html',
  styleUrls: ['./user-roles-permissions.component.scss']
})
export class UserRolesPermissionsComponent implements OnInit {

  public modules: any = [];
  public accMenu: any[] = [];
  public purMenu: any[] = [];
  public productionMenu: any[] = [];
  public crmMenu: any[] = [];
  public qcMenu: any[] = [];
  public inventoryMenu: any[] = [];
  public salesMenu: any[] = [];
  public hrdMenu: any[] = [];
  public maintMenu: any[] = [];
  public analyMenu: any[] = [];
  public admmenu:any[]=[];
  public foMenu: any[] = [];
  public menuname: string = ' ';
  public rolesList: any;
  public cCode: number = this.adm.getUserCompleteInformation().usr.cCode;
  public pCode: string = this.adm.getUserCompleteInformation().usr.pCode;
  public crecheck: boolean = false;
  public rolename: string = '';
  public rolenamedisable: boolean = false;
  public totallist: any[] = [];
  constructor(private adm: AdminGeneralInfoService, private rol: AdmRolesService, private spinner: NgxSpinnerService,
    private acc: AccountsMenuService, private pro: ProductionMenuService, private qc: QcMenuService, private inv: InventoryMenuService, private pur: PurchasesMenuService, private crm: CrmMenuService,
    private sales: PosMenuService, private hrd: HrdMenuService, private mai: MaintenanceMenuService, private anal: AnalysisMenuService
  ,private admser:AdmMenuService) {
    this.accMenu = this.acc.getAccountsMenu();
    this.purMenu = this.pur.getPurchasesMenu();
    this.crmMenu = this.crm.getCRMMenu();
    this.productionMenu = this.pro.getProductionMenu();
    this.qcMenu = this.qc.getQCMenu();
    this.inventoryMenu = this.inv.getInventoryMenu();
    this.salesMenu = this.sales.getSalesMenu();
    this.hrdMenu = this.hrd.getHRDMenu();
    this.maintMenu = this.mai.getMaintenanceMenu();
    this.analyMenu = this.anal.getAnalysisMenu();
    this.admmenu=this.admser.getadminMenu();
    console.log(this.inventoryMenu);


    this.makeModules();
    this.listAdd();

  }
  openmenu(obj:any){
    this.menuname=obj.target.value;
    this.openOld();
  }
  listAdd() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.rol.getAdmRoles().subscribe(res => {
      this.rolesList = res;
      this.spinner.hide();
    });
  }

  makeModules() {
    var usr = this.adm.getUserCompleteInformation().usr;
    console.log(usr);
    switch (usr.pCode) {
      case "D-USI":
        this.modules.push(
          { modulename: 'Admin' },
          { modulename: 'Accounts' },
          { modulename: 'Purchases' },
          { modulename: 'CRM' },
          { modulename: 'Production' },
          { modulename: 'QC' },
          { modulename: 'Inventory' },
          { modulename: 'Sales' },
          { modulename: 'HRD' },
          { modulename: 'Maintenance' });
         // { modulename: 'Analysis' });
        break;

    }

  }

  makeTotalTreeClear(obj: any) {
    for (var i = 0; i < obj.length; i++) {
      obj[i].actualcheck = false;
      obj[i].actualcheck = false;
      for (var j = 0; j < obj[i].children.length; j++) {
        obj[i].children[j].actualcheck = false;
        obj[i].children[j].actualcheck = false;
        for (var k = 0; k < obj[i].children[j].children.length; k++) {
          obj[i].children[j].children[k].actualcheck = false;
          obj[i].children[j].children[k].actualcheck = false;
        }
      }
    }
  }
  makeTreeClear() {
    this.makeTotalTreeClear(this.accMenu);
    this.makeTotalTreeClear(this.purMenu);
    this.makeTotalTreeClear(this.crmMenu);
    this.makeTotalTreeClear(this.foMenu);
    this.makeTotalTreeClear(this.productionMenu);
    this.makeTotalTreeClear(this.qcMenu);
    this.makeTotalTreeClear(this.inventoryMenu);
    this.makeTotalTreeClear(this.salesMenu);
    this.makeTotalTreeClear(this.hrdMenu);
    this.makeTotalTreeClear(this.admmenu);
  }

  openNew() {
    this.makeTreeClear();
    this.rolename = '';
    this.rolenamedisable = false;
    this.crecheck = true;
  }
  makeCle() {

  }
  close() {
    this.crecheck = false;
  }
  openOld() {
   // this.makeTreeClear();
    // this.rolename=rolename;
    this.rolenamedisable = true;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.makeTreeClear();
    this.rol.getAdmRole(this.rolename).subscribe(res => {
      var det: any = res;
      console.log(det);
      var admresult = det.filter(a => a.moduleCode == 12);
      for (var i = 0; i < admresult.length; i++) {
        this.makeMenuCheck(this.admmenu, admresult[i]);
      }
      var accresult = det.filter(a => a.moduleCode == 1);
      for (var i = 0; i < accresult.length; i++) {
        this.makeMenuCheck(this.accMenu, accresult[i]);
      }
      var purresult = det.filter(a => a.moduleCode == 2);
      for (var i = 0; i < purresult.length; i++) {
        this.makeMenuCheck(this.purMenu, purresult[i]);
      }
      var crmresult = det.filter(a => a.moduleCode == 7);
      for (var i = 0; i < crmresult.length; i++) {
        this.makeMenuCheck(this.crmMenu, crmresult[i]);
      }
      var productionresult = det.filter(a => a.moduleCode == 10);
      for (var i = 0; i < productionresult.length; i++) {
        this.makeMenuCheck(this.productionMenu, productionresult[i]);
      }
      var qcresut = det.filter(a => a.moduleCode == 11);
      for (var i = 0; i < qcresut.length; i++) {
        this.makeMenuCheck(this.qcMenu, qcresut[i]);
      }
      var inventoryresult = det.filter(a => a.moduleCode == 3);
      for (var i = 0; i < inventoryresult.length; i++) {
        this.makeMenuCheck(this.inventoryMenu, inventoryresult[i]);
      }
      console.log(inventoryresult);
      var salesresult = det.filter(a => a.moduleCode == 5)
      for (var i = 0; i < salesresult.length; i++) {
        this.makeMenuCheck(this.salesMenu, salesresult[i]);
      }
      var hrdresult = det.filter(a => a.moduleCode == 8);
      for (var i = 0; i < hrdresult.length; i++) {
        this.makeMenuCheck(this.hrdMenu, hrdresult[i]);
      }
      var mainresult = det.filter(a => a.moduleCode == 9)

      for (var i = 0; i < mainresult.length; i++) {
        this.makeMenuCheck(this.maintMenu, mainresult[i]);
      }
      var analyresult = det.filter(a => a.moduleCode == 100)

      for (var i = 0; i < analyresult.length; i++) {
        this.makeMenuCheck(this.analyMenu, analyresult[i]);
      }
      var foresult = det.filter(a => a.moduleCode == 6);
      if (this.pCode == "D-MIN" || this.pCode == "O-MIN") {
        for (var i = 0; i < foresult.length; i++) {
          this.makeMenuCheck(this.foMenu, det[i]);
        }
      }
      this.crecheck = true;
      this.spinner.hide();
      console.log('det',det)
      console.log('Accounts Menu:', this.accMenu);
      console.log('Purchases Menu:', this.purMenu);
      console.log('CRM Menu:', this.crmMenu);
      console.log('Production Menu:', this.productionMenu);
      console.log('Quality Control Menu:', this.qcMenu);
      console.log('Inventory Menu:', this.inventoryMenu);
      console.log('Sales Menu:', this.salesMenu);
      console.log('HRD Menu:', this.hrdMenu);
      console.log('Maintenance Menu:', this.maintMenu);
      console.log('Analysis Menu:', this.analyMenu); 
    });   
  }
  makeMenuCheck(menu: any[], obj: any) {
    for (var i = 0; i < menu.length; i++) {
      if (obj.moduleCode == menu[i].modulecode && obj.menuCode == menu[i].menucode
        && obj.screenCode == menu[i].sceecode && obj.transCode == menu[i].trancode
      ) {
        menu[i].actualcheck = true;
      }
      for (var j = 0; j < menu[i].children.length; j++) {

        if (obj.moduleCode == menu[i].children[j].modulecode && obj.menuCode == menu[i].children[j].menucode
          && obj.screenCode == menu[i].children[j].sceecode && obj.transCode == menu[i].children[j].trancode
        ) {
          menu[i].children[j].actualcheck = true;
        }

        for (var k = 0; k < menu[i].children[j].children.length; k++) {
          if (obj.moduleCode == menu[i].children[j].children[k].modulecode && obj.menuCode == menu[i].children[j].children[k].menucode
            && obj.screenCode == menu[i].children[j].children[k].sceecode && obj.transCode == menu[i].children[j].children[k].trancode
          ) {
            menu[i].children[j].children[k].actualcheck = true;
          }

          for (var l = 0; l < menu[i].children[j].children[k].children.length; l++) {
            if (obj.moduleCode == menu[i].children[j].children[k].children[l].modulecode &&
              obj.menuCode == menu[i].children[j].children[k].children[l].menucode
              && obj.screenCode == menu[i].children[j].children[k].children[l].sceecode
              && obj.transCode == menu[i].children[j].children[k].children[l].trancode
            ) {
              menu[i].children[j].children[k].children[l].actualcheck = true;
            }
          }
        }
      }
    }
  }


  ngOnInit(): void {
  }

  valChk(): boolean {
    if (this.rolename.trim() == '') {
      this.adm.showMessage('Role name not mentioned', 'Warning', 3);
      return false;
    }
    if (!this.rolenamedisable) {
      for (var i = 0; i < this.rolesList.length; i++) {
        if (this.rolesList[i].toUpperCase() == this.rolename.toUpperCase()) {
          this.adm.showMessage('This role is already existed', 'Warning', 3);
          return false;
        }
      }
    }
    return true;
  }
  public Save() {

    if (this.valChk()) {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });

      this.totallist = [];
      if(this.menuname=="Admin"){
        this.makeMenuForData(this.admmenu);
      }
      if(this.menuname=="Accounts"){
        this.makeMenuForData(this.accMenu);
      }
      if(this.menuname=="Purchases"){
        this.makeMenuForData(this.purMenu);
      }
      if(this.menuname=="CRM"){
         this.makeMenuForData(this.crmMenu);
      }
      if(this.menuname=="Production"){        
        this.makeMenuForData(this.productionMenu);
      }
      if(this.menuname=="QC"){
        this.makeMenuForData(this.qcMenu);
      }
      if(this.menuname=="Inventory"){
          this.makeMenuForData(this.inventoryMenu);
      }
      if(this.menuname=="Sales"){
        this.makeMenuForData(this.salesMenu);
      }
      if(this.menuname=="HRD"){
        this.makeMenuForData(this.hrdMenu);
      }
      if(this.menuname=="Maintenance"){
        this.makeMenuForData(this.maintMenu);
      }
      if(this.menuname=="Analysis"){
       this.makeMenuForData(this.analyMenu);
      }
     // if (this.totallist.length > 0) {
        console.log(this.totallist)
        this.rol.setAdmRole(this.totallist, this.rolename,this.menuname).subscribe(res => {

          this.spinner.hide();
          var result: any = res;
          if (result.result == 'OK') {
            this.adm.showMessage('Role Saved Successfully', 'Success', 1);
            //this.rolename = '';
            this.listAdd();
          }
          else {
            this.adm.showMessage(result.result, 'Error', 4);
          }
        });
      // }
      // else {
      //   this.adm.showMessage('No detail selected fro role', 'Warning', 3);
      //   this.spinner.hide();
      // }
    }
  }

  private makeMenuForData(menu: any[]) {
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].actualcheck) {
        this.totallist.push({
          RoleName: this.rolename,
          ModuleCode: menu[i].modulecode,
          MenuCode: menu[i].menucode,
          ScreenCode: menu[i].sceecode,
          TransCode: menu[i].trancode,
          CustomerCode: this.cCode,
          Pos: 1
        });
      }

      for (var j = 0; j < menu[i].children.length; j++) {
        if (menu[i].children[j].actualcheck) {
          this.totallist.push({
            RoleName: this.rolename,
            ModuleCode: menu[i].children[j].modulecode,
            MenuCode: menu[i].children[j].menucode,
            ScreenCode: menu[i].children[j].sceecode,
            TransCode: menu[i].children[j].trancode,
            CustomerCode: this.cCode,
            Pos: 1
          });
        }
        for (var k = 0; k < menu[i].children[j].children.length; k++) {
          if (menu[i].children[j].children[k].actualcheck) {
            this.totallist.push({
              RoleName: this.rolename,
              ModuleCode: menu[i].children[j].children[k].modulecode,
              MenuCode: menu[i].children[j].children[k].menucode,
              ScreenCode: menu[i].children[j].children[k].sceecode,
              TransCode: menu[i].children[j].children[k].trancode,
              CustomerCode: this.cCode,
              Pos: 1
            });
          }

          for (var l = 0; l < menu[i].children[j].children[k].children.length; l++) {
            if (menu[i].children[j].children[k].children[l].actualcheck) {
              this.totallist.push({
                RoleName: this.rolename,
                ModuleCode: menu[i].children[j].children[k].children[l].modulecode,
                MenuCode: menu[i].children[j].children[k].children[l].menucode,
                ScreenCode: menu[i].children[j].children[k].children[l].sceecode,
                TransCode: menu[i].children[j].children[k].children[l].trancode,
                CustomerCode: this.cCode,
                Pos: 1
              });
            }
          }

        }
      }



    }
  }


  toggleTreeView(obj) {
    obj.opencheck = !obj.opencheck;
  }

  makeSubCheckings(obj1) {

    var b = obj1.actualcheck
    for (var i = 0; i < obj1.children.length; i++) {
      obj1.children[i].actualcheck = b;
      var obj2 = obj1.children[i];
      if (obj2.children) {
        for (var j = 0; j < obj2.children.length; j++) {

          obj2.children[j].actualcheck = b;
          var obj3 = obj2.children[j];
          if (obj3.children) {
            for (var k = 0; k < obj3.children.length; k++) {
              obj3.children[k].actualcheck = b;
              var obj4 = obj3.children[k];
              if (obj4.children) {
                for (var l = 0; l < obj4.children.length; l++) {
                  obj4.children[l].actualcheck = b;
                }
              }
            }
          }
        }
      }
    }
  }

}
