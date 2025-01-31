import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccDashboardServiceService } from 'app/services/accounts/acc-dashboard-service.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { CrmDashboardService } from 'app/services/crm/crm-dashboard.service';
import { DashBoardCompleteService } from 'app/services/dashboard/dash-board-complete.service';
import { PurDashboardService } from 'app/services/purchases/pur-dashboard.service';
//import{VerticalMenuComponent} from '../../shared/vertical-menu/vertical-menu.component';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[],
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[],
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels,
  stroke: ApexStroke,
  grid: ApexGrid,
  legend?: ApexLegend,
  tooltip?: ApexTooltip,
  plotOptions?: ApexPlotOptions,
  labels?: string[],
  fill: ApexFill,
  markers?: ApexMarkers,
  theme: ApexTheme,
  responsive: ApexResponsive[]
};
 
var $primary = "#975AFF",
  $success = "#40C057",
  $info = "#2F8BE6",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $warning, $success, $danger, $info];
var piecolors=[  $success,$primary,$warning, $danger];
var chartcolors = [$danger, $warning, $success,  $info];
var piecolors1=[  "#E26EE5", "#7E30E1", "#49108B","#EF4040","#C21292","#DC8686","#00FFD1"];


@Component({
  selector: 'app-dashboard-usine',
  templateUrl: './dashboard-usine.component.html',
  styleUrls: ['./dashboard-usine.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardUsineComponent implements OnInit,AfterViewInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];
 
  menus = [
    {
      "name": "Dashboard",
      "icon": "fa-solid fa-tachometer-alt",
      "url": "dashboard"
    },
    {
      "name": "Order Management",
      "icon": "fa-solid fa-box-open",
      "url": "order/customers",
      "submenus": [
        {
          "name": "Customers",
          "icon": "fa-solid fa-users",
          "sub_url": "order/customers"
        },
        {
          "name": "Quotes",
          "icon": "fa-solid fa-file-contract",
          "sub_url": "order/quote"
        },
        {
          "name": "Sales Order",
          "icon": "fa-solid fa-receipt",
          "sub_url": "order/sale-order"
        },
        {
          "name": "Invoice",
          "icon": "fa-solid fa-file-invoice-dollar",
          "sub_url": "order/invoice"
        },
        {
          "name": "Payments",
          "icon": "fa-solid fa-credit-card",
          "sub_url": "order/payments"
        },
        {
          "name": "RMA",
          "icon": "fa-solid fa-undo-alt",
          "sub_url": "order/rma"
        },
        {
          "name": "Credit Memo",
          "icon": "fa-solid fa-file-invoice",
          "sub_url": "order/credit-memo"
        },
        {
          "name": "Order Management Reports",
          "icon": "fa-solid fa-chart-bar",
          "sub_url": "order/order-reports"
        }
      ]
    },
    {
      "name": "Logistics",
      "icon": "fa-solid fa-truck",
      "url": "logistics/package",
      "submenus": [
        {
          "name": "Packages",
          "icon": "fa-solid fa-box",
          "sub_url": "logistics/package"
        },
        {
          "name": "Shipments",
          "icon": "fa-solid fa-shipping-fast",
          "sub_url": "logistics/shipment"
        },
        {
          "name": "Delivery Note",
          "icon": "fa-solid fa-file-alt",
          "sub_url": "logistics/delivery"
        },
        {
          "name": "Carrier Management",
          "icon": "fa-solid fa-people-carry",
          "sub_url": "logistics/carrier"
        },
        {
          "name": "Freight Management",
          "icon": "fa-solid fa-truck-loading",
          "sub_url": "logistics/freight"
        },
        {
          "name": "Logistics Reports",
          "icon": "fa-solid fa-chart-pie",
          "sub_url": "logistics/reports"
        }
      ]
    },
    {
      "name": "Procurement",
      "icon": "fa-solid fa-shopping-cart",
      "url": "procurement/suppliers",
      "submenus": [
        {
          "name": "Supplier Management",
          "icon": "fa-solid fa-user-tie",
          "sub_url": "procurement/suppliers"
        },
        {
          "name": "Purchase Orders (PO)",
          "icon": "fa-solid fa-file-signature",
          "sub_url": "procurement/po"
        },
        {
          "name": "Supplier Return",
          "icon": "fa-solid fa-undo-alt",
          "sub_url": "procurement/supplier-return"
        },
        {
          "name": "Procurement Reports",
          "icon": "fa-solid fa-chart-line",
          "sub_url": "procurement/reports"
        }
      ]
    },
    {
      "name": "Manufacturing",
      "icon": "fa-solid fa-cogs",
      "url": "manufacturing/bom",
      "submenus": [
        {
          "name": "Bill of Materials (BOM)",
          "icon": "fa-solid fa-clipboard-list",
          "sub_url": "manufacturing/bom"
        },
        {
          "name": "Production Planning",
          "icon": "fa-solid fa-project-diagram",
          "sub_url": "manufacturing/production"
        },
        {
          "name": "Work Orders",
          "icon": "fa-solid fa-tasks",
          "sub_url": "manufacturing/work-order"
        },
        {
          "name": "Quality Control",
          "icon": "fa-solid fa-check-circle",
          "sub_url": "manufacturing/qc"
        },
        {
          "name": "Manufacturing Reports",
          "icon": "fa-solid fa-chart-area",
          "sub_url": "manufacturing/reports"
        }
      ]
    },
    {
      "name": "Inventory",
      "icon": "fa-solid fa-warehouse",
      "url": "inventory/stock",
      "submenus": [
        {
          "name": "Add Stock",
          "icon": "fa-solid fa-plus-square",
          "sub_url": "inventory/stock"
        },
        {
          "name": "Inventory Details",
          "icon": "fa-solid fa-list-alt",
          "sub_url": "inventory/detail"
        },
        {
          "name": "Inventory Replenishment",
          "icon": "fa-solid fa-sync",
          "sub_url": "inventory/replenishment"
        },
        {
          "name": "Lot",
          "icon": "fa-solid fa-th-large",
          "sub_url": "inventory/lot"
        },
        {
          "name": "Inventory Reports",
          "icon": "fa-solid fa-chart-bar",
          "sub_url": "inventory/reports"
        }
      ]
    },
    {
      "name": "Warehouse",
      "icon": "fa-solid fa-boxes",
      "url": "warehouse/warehouse-details",
      "submenus": [
        {
          "name": "Warehouse Details",
          "icon": "fa-solid fa-info-circle",
          "sub_url": "warehouse/warehouse-details"
        },
        {
          "name": "Add Stock",
          "icon": "fa-solid fa-plus",
          "sub_url": "warehouse/add-stock"
        },
        {
          "name": "Stock Transfer Form",
          "icon": "fa-solid fa-exchange-alt",
          "sub_url": "warehouse/stock-transfer-forms"
        },
        {
          "name": "Stock Adjustment Requests",
          "icon": "fa-solid fa-sliders-h",
          "sub_url": "warehouse/stock-adjustment"
        }
      ]
    },
    {
      "name": "Settings",
      "icon": "fa-solid fa-cog",
      "url": "setting/users",
      "submenus": [
        {
          "name": "User Management",
          "icon": "fa-solid fa-user-cog",
          "sub_url": "setting/users"
        },
        {
          "name": "Administration",
          "icon": "fa-solid fa-tools",
          "sub_url": "setting/administration"
        }
      ]
    },
    {
  
    }
  ];
  


  lineAreaChartOptions : Partial<ChartOptions>;
  public menuItems$: Observable<any>;
  pCode:string='';
  public usrname:string='';
  public bytearrays:any[]=[];
  public bytearray:any;
  public fileNames:any[]=[];
  public files:File[]=[];
  public fileobj:any;
  public fileReqObj:any;
  public NewfileReqObj:any[]=[];

  public sales:any[]=[];
public credits:any[]=[];


filename: any = '';
fileevent: any;

public usersList:any[]=[];
public pieLabels:string[]=['00-30','30-60','60-90','>90'];
public piedata:number[]=[10,10,10,10];
barChartOptions : Partial<ChartOptions>;
pieChartOptions : Partial<ChartOptions>;

public pnlfir:number=0;
  public pnlsec:number=0;


  public casfir:number=0;
  public cassec:number=0;


  public banfir:number=0;
  public bansec:number=0;

  public mobfir:number=0;
  public mobsec:number=0;

  public supfir:number=0;
  public supsec:number=0;
  
  public cusfir:number=0;
  public cussec:number=0;

  public listdet:any[]=[];

  public activesups:number=0;
  public inactivesups:number=0;
 public approvedrequests:number=0;
 public pendingrequests:number=0;
public materialpurchases:number=0;
public otherpurchases:number=0;
public totalcredit:number=0;
public delayedcredit:number=0;
public activeorders:number=0;
public expiredorders:number=0;
public activeordervalue:number=0;
public expiredordervalue:number=0;

  public turnoverLabels1:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData1:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];

  public piedata1:number[]=[1500, 1400, 1200, 1000, 950, 800, 750];
  public pielabels1:string[]=['Raw Matrials', 'Products', 'Maintenance', 'Spares','Tools','Home','Others'];

  public suppurchases1:any[]=[
    {
      name:'Relience India',
      busi:250000,
      role:11.2
    },
    {
      name:'Tata Agro Ltd',
      busi:225000,
      role:10.2
    },
    {
      name:'L & T Tools',
      busi:205000,
      role:9.8
    },
    {
      name:'Kalva Engineers',
      busi:195000,
      role:9.3
    },
    {
      name:'Top Ramen',
      busi:145000,
      role: 8.0
    },
    
  
  ];
  
  
  public supcredits1:any[]=[
    {
      name:'Relience India',
      busi:250000,
      role:11.2
    },
    {
      name:'Tata Agro Ltd',
      busi:225000,
      role:10.2
    },
    {
      name:'L & T Tools',
      busi:205000,
      role:9.8
    },
    {
      name:'Kalva Engineers',
      busi:195000,
      role:9.3
    },
    {
      name:'Top Ramen',
      busi:145000,
      role: 8.0
    },
    
  
  ];
   
    
    barChartOptions1 : Partial<ChartOptions>;
    
    supChartOptions11 : Partial<ChartOptions>;
    supChartOptions21 : Partial<ChartOptions>;
    authCheck:boolean=false;
    pieChartOptions1 : Partial<ChartOptions>;


    public turnoverData7:number[]=[3,4,5,6,7,8,9,10,11,12,13,14];
    barChartOptions7 : Partial<ChartOptions>;
    pieChartOptions7 : Partial<ChartOptions>;
    
    public piedata7:number[]=[1500, 1400, 1700, 1000 ];
    public pielabels7:string[]=['Emp1', 'Emp2', 'Emp3', 'Emp4'];

    public target1:number=0;
    public target2:number=0;
    public target:number=0;
  public calls1:number=0;
  public calls2:number=0;
  public calls:number=0;
  public credits1:number=0;
  public credits2:number=0;
  
    public telecalls:any;
    public enquiries:any;

    @ViewChild('myModal', { static: true }) autoModal: any;
    @ViewChild('mySecondModal', { static: true }) secondModal: any;  
    
    public ccode: string = '';
  private modalRef: NgbModalRef | null = null;
  private secondModalRef: NgbModalRef | null = null;
  ngOnInit(): void {
    if(!(localStorage.getItem("modalopened"))){
    this.openModal1();
    }
    if(this.adm.screenCheck(1,0,0,0))
      {
        this.accenable=true;
      }
      else{
        this.accenable=false;
      }
      if(this.adm.screenCheck(2,0,0,0))
        {
          this.purenable=true;
        }
        else{
          this.purenable=false;
        }
        if(this.adm.screenCheck(7,0,0,0))
        {
          this.crmenable=true;
        }
        else{
          this.crmenable=false;
        }
        if(this.adm.screenCheck(10,0,0,0))
        {
           this.proenable=true;
        }
        else{
          this.proenable=false;
        }
        if(this.adm.screenCheck(11,0,0,0))
          {
             this.qcenable=true;
          }
          else{
            this.qcenable=false;
          }
          if(this.adm.screenCheck(3,0,0,1))
            {
               this.invenable=true;
            }
            else{
              this.invenable=false;
            }
            if(this.adm.screenCheck(5,0,0,0))
              {
                 this.salenable=true;
              }
              else{
                this.salenable=false;
              }
              if(this.adm.screenCheck(8,0,0,0))
                {
                   this.hrdenable=true;
                }
                else{
                  this.hrdenable=false;
                }
                if(this.adm.screenCheck(9,0,0,0))
                  {
                     this.maienable=true;
                  }
                  else{
                    this.maienable=false;
                  }
                  if(this.adm.screenCheck(99,0,0,0))
                    {
                       this.repenable=true;
                    }
                    else{
                      this.repenable=false;
                    }
  }
  openModal1() {
    localStorage.setItem("modalopened","opened");
    this.modalRef = this.modalService.open(this.autoModal, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  onNextClick() {
    if (this.modalRef) {
      this.modalRef.close();
    }
    this.openSecondModal();
  }

  openSecondModal() {
    this.secondModalRef = this.modalService.open(this.secondModal, {
      ariaLabelledBy: 'modal-second-title',
    });
  }

  closeSecondModal() {
    if (this.secondModalRef) {
      this.secondModalRef.close();
      console.log('Second modal closed.');
    }
  }
  constructor(private menu:MenuServiceService,private spinner: NgxSpinnerService,
    private dashboard:DashBoardCompleteService,
    private crm:CrmDashboardService,
    private acc:AccDashboardServiceService,
    private pur:PurDashboardService,
    private modalService: NgbModal,private router:Router,private adm:AdminGeneralInfoService) { 





    this.usrname=this.adm.getUserCompleteInformation().usr.uCode;
    this.dashboard.getCompleteUsers().subscribe(res =>
      {
        var det:any=res;
        for(var i=0;i<det.length;i++)
        {
          this.usersList.push({
              usercode:det[i].usrName,
              username:det[i].roleName
          });
        }
      })

     if(this.adm.screenCheck(2,0,0,1))



      if(this.adm.screenCheck(1,0,0,1))
        {
         
          this.makeDash1();
          // this.makeDash1();
        }
        else
        {
          this.authCheck=false;
        }
    
       
        if(this.adm.screenCheck(2,0,0,1))
          {
             this.makeDash2();
            this.makeDash3();
             this.authCheck=true;
            }
            else
            {
              this.authCheck=false;
            }



            if(this.adm.screenCheck(2,0,0,1))
              {
                 this.makeDash7();
                // this.makeDash1();
                this.spinner.show(undefined,
                  {
                    type: 'ball-triangle-path',
                    size: 'medium',
                    bdColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    fullScreen: true
                  });
                  this.crm.getPendingCalls().subscribe(res =>
                    {
                        var det:any=res;
                        this.telecalls=det.filter(a => a.mode=="1");
                        this.enquiries=det.filter(a => a.mode=="2");
                        console.log(det,'pendings');
                        this.spinner.hide();
                    });
                 this.authCheck=true;
                }
                else
                {
                  this.authCheck=false;
                }
      
                 





          }

          private makeDash7()
          {
            this.spinner.show(undefined,
              {
                type: 'ball-triangle-path',
                size: 'medium',
                bdColor: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                fullScreen: true
              });
            this.crm.getCRMDashboard().subscribe(res =>
              {
                var det:any=res;
                console.log(det);
                if(det)
                {
                var firstdetails=det.filter(a => a.typ < 10);
                for(var i=0;i < firstdetails.length;i++)
                {
                  switch(firstdetails[i].typ)
                  {
                    case 1:
                        this.target1=firstdetails[i].fir;
                        this.target2=firstdetails[i].sec;
                      break;
                    
                    case 2:
                      this.calls1=firstdetails[i].fir;
                      this.calls2=firstdetails[i].sec;
                      break;
                      case 3:
                        this.target=firstdetails[i].fir;
                        this.calls=firstdetails[i].sec;
                        break;
                    case 4:
                      this.credits1=firstdetails[i].fir;
                      this.credits2=firstdetails[i].sec;
                  }
                }
      
      
                this.turnoverLabels=[];
                this.turnoverData=[];
                var seconddetails=det.filter(a => a.typ > 100 && a.typ < 200);
                for(var i=0;i<seconddetails.length;i++)
                {
                  this.turnoverLabels.push(seconddetails[i].descr);
                  this.turnoverData.push(seconddetails[i].fir);
                }
      
                this.pielabels7=[];
                this.piedata=[];
                var thirddetails=det.filter(a => a.typ > 200 && a.typ < 300);
                for(var i=0;i<thirddetails.length;i++)
                {
                  this.pielabels7.push(thirddetails[i].descr);
                  this.piedata.push(thirddetails[i].fir)
      
                }
      
                this.makeDash8();
              }
              else
              {
                this.makeDash8();
              }
        this.spinner.hide();
              });
          }



          makeDash8()
          {
             
            this.barChartOptions7 = {
              chart: {
                height: 300,
                  width: 600,
                type: 'line',
              },
              colors: themeColors,
              plotOptions: {
                bar: {
                  horizontal: false,
                }
              },
              dataLabels: {
                enabled: false
              },
              series: [
                {
                  name:"Orders",
                data: this.turnoverData7,
              },
             
            ],
              xaxis: {
                categories: this.turnoverLabels1,
                tickAmount: 5
              }
            }
            this.pieInformation7();
          }
        
        
          private pieInformation7(): void {
            this.pieChartOptions7 = {
              chart: {
                type: 'donut',
                height: 300,
                width: 580,
              },
              colors: piecolors,
              labels: this.pielabels7,
              series: this.piedata7,
              legend: {
                itemMargin: {
                  horizontal: 2
                },
              },
              responsive: [{
                breakpoint: 576,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            };
          }
          
          private makeDash2()
          {
            this.showSpinner();
            this.pur.getPurchaseDashboardDetails().subscribe(res =>
              {
                  var det:any=res;
                  console.log('Dashboard ',det);
          
          
                  var det1=det.filter(a => a.typ < 10);
                  for(var i=0;i<det1.length;i++)
                  {
                      switch(det1[i].typ)
                      {
                        case 1:
                          this.activesups= +det1[i].sec;
                          this.inactivesups= +det1[i].fir - +det1[i].sec
                          break;
                        case 2:
                          this.approvedrequests=+det1[i].sec;
                          this.pendingrequests=+det1[i].fir- +det1[i].sec;
                          break;
                        case 3:
                          this.materialpurchases= +det1[i].fir;
                          this.otherpurchases= +det1[i].sec;
                          break;
                          case 4:
                            this.totalcredit= +det1[i].fir;
                            this.delayedcredit= +det1[i].sec;
                          break;
                          case 5:
                            this.activeorders= +det1[i].fir-+det1[i].sec;
                            this.expiredorders= +det1[i].sec;
                          break;
                          case 6:
                            this.activeordervalue= +det1[i].fir-+det1[i].sec;
                            this.expiredordervalue= +det1[i].sec;
                          break;
                      }
                  }
          
                  var det2=det.filter(a => a.typ > 100 && a.typ < 200);
                  this.turnoverLabels1=[];
                  this.turnoverData1=[];
                  for(var i=0;i<det2.length;i++)
                  {
                    this.turnoverLabels1.push(det2[i].descr);
                    this.turnoverData1.push(+det2[i].fir);
                  }
                  var det3=det.filter(a => a.typ > 200 && a.typ < 300)
                  this.piedata1=[];
                  this.pielabels1=[];
                  for(var i=0;i<det3.length;i++)
                  {
                    this.piedata1.push(det3[i].fir);
                    this.pielabels1.push(det3[i].descr)
                  }
                  this.suppurchases1=[];
                  this.supcredits1=[];
                  var det4=det.filter(a => a.typ > 300 && a.typ < 400);
                  for(var i=0;i<det4.length;i++)
                  {
                    this.suppurchases1.push({
                        name:det4[i].descr,
                        busi:det4[i].fir
                    });
                  }
                  var det5=det.filter(a => a.typ > 400 && a.typ < 500);
                  for(var i=0;i<det5.length;i++)
                  {
                    this.supcredits1.push({
                        name:det5[i].descr,
                        busi:det5[i].fir
                    });
                  }
                  this.makeDash1();
                  this.spinner.hide();
              });
          }
          
            private makeDash3()
            {
               
              this.barChartOptions1 = {
                chart: {
                  height: 350,
                  width: 600,
                  type: 'area',
                },
                colors: themeColors,
                plotOptions: {
                  bar: {
                    horizontal: false,
                  }
                },
                dataLabels: {
                  enabled: false
                },
                series: [
                  {
                    name:"Purchases",
                  data: this.turnoverData1,
                }
               
              ],
                xaxis: {
                  categories: this.turnoverLabels1,
                  type: 'category'
                }
            
           
                
              }
            
            
            
               this.pieInformation1();
            }
            private pieInformation1():void
            {
             this.pieChartOptions1 = {
               chart: {
                 type: 'pie',
                 height: 300,
                 width: 580,
                 
               },
               colors: piecolors1,
               labels: this.pielabels1,
               series: this.piedata1,
               legend: {
                 itemMargin: {
                   horizontal: 2
                 },
               },
               responsive: [{
                 breakpoint: 576,
                 options: {
                   chart: {
                     width: 600
                   },
                   legend: {
                     position: 'bottom'
                   }
                 }
               }]
             }
            }
         
  
  
  ngAfterViewInit()
  {
    //this.menu.setMenuDetails('');
  }
  
  
  
  
    onResized(event: any) {
      setTimeout(() => {
        this.fireRefreshEventOnWindow();
      }, 300);
    }
  
    fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };

       
openModal(customContent) {
  this.bytearrays=[];
  this.fileNames=[];
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    windowClass:'terms-model'
};
   this.modalService.open(customContent,ngbModalOptions);
  }
  convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array:any = new Uint8Array(new ArrayBuffer(rawLength));
   // var array:number[]=[];
    
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  public onSelectFile(e)
{
   
  if(e.target.files)
  {
    var reader= new FileReader();
    var fi=e.target.files[0];
    this.fileevent = e;
    this.UploadAttach();
    this.files.push(e.target.files[0]);
    for(var i=0;i<e.target.files.length;i++)
    {
    reader.readAsDataURL(e.target.files[i]);
    reader.onload=(event:any)=>
      {
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
  }
}

UploadAttach() {
  var filedata: any = document.getElementById("upload");
  if (filedata.files.length > 0) {
    const file = filedata.files[0];
    this.filename = file.name;
    var type = this.filename.split('.')[this.filename.split('.').length - 1];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileobj = reader.result;
      var splitfile = this.fileobj.split(',');
      this.fileobj = splitfile[1];
      debugger
      if (type.toUpperCase() == 'JPG' || type.toUpperCase() == 'PNG' || type.toUpperCase() == 'TXT' || type.toUpperCase() == 'PDF' || type.toUpperCase() == 'XLS' || type.toUpperCase() == 'XLSX' || type.toUpperCase() == 'JPG' || type.toUpperCase() == 'JPEG' || type.toUpperCase() == 'GIF') {
        this.fileReqObj = {
          "Filename": this.filename,
          "ContentType": 'application/' + type,
          "Contents": this.fileobj,
          "FileType": type,
          "MsgID": "",
          "Private": false,
          "Public": true,
          "Description": this.filename,
        }
        this.NewfileReqObj.push(this.fileReqObj);
         
      }  
    };
  }
}
public postDetails()
{
  var req = {
    "postinfo":'Ravi is a bad boy',
    "imgs": this.NewfileReqObj ? this.NewfileReqObj : null
  };
  this.dashboard.uploadFiles(req).subscribe((res: any) => {
    setTimeout(() => {
      
    }, 1000); 
    
  }, (error: any) => {
     alert(error);
  });
}
 
crmenable:any=true;
admenable:any=true;
hrdenable:any=true;
accenable:any=true;
purenable:any=true;
proenable:any=true;
qcenable:any=true;
invenable:any=true;
maienable:any=true;
salenable:any=true;
repenable:any=true;
    public setModule(str)
    {
     
      switch(str)
      {
        case 'acc':
            if(this.adm.screenCheck(1,0,0,0))
            {
              this.router.navigateByUrl('accounts/accdashboard');
              this.accenable=true;
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
              this.accenable=false;
            }
          break;
          case 'pur':
            if(this.adm.screenCheck(2,0,0,0))
            {
              this.router.navigateByUrl('purchases/purdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
          break;
          case 'crm':
          if(this.adm.screenCheck(7,0,0,0))
          {
            this.router.navigateByUrl('crm/crmdashboard');
          }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
            break;
        case 'pro':
          if(this.adm.screenCheck(10,0,0,0))
          {
            this.router.navigateByUrl('production/dashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Authorize',4);
          }
          break;
        case 'qc':
          if(this.adm.screenCheck(11,0,0,0))
          {
            this.router.navigateByUrl('qc/dashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Authorize',4);
          }
          break;
          case 'inv':
            if(this.adm.screenCheck(3,0,0,1))
            {
              this.router.navigateByUrl('inventory/invdashusine');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
            break;
          case 'sale':
            if(this.adm.screenCheck(5,0,0,0))
            {
              this.router.navigateByUrl('pos/salesdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
            break;
            case 'hrd':
              if(this.adm.screenCheck(8,0,0,0))
              {
                this.router.navigateByUrl('hrd/hrddashboard');
              }
              else
              {
                this.adm.showMessage('You are not authorised to view this module','Authorize',4);
              }
              break;
        
              case 'mai':
                if(this.adm.screenCheck(9,0,0,0))
                {
                  this.router.navigateByUrl('maintenance/maindashboard');
                }
                else
                {
                  this.adm.showMessage('You are not authorised to view this module','Authorize',4);
                }
                break;
            case 'ana':
              if(this.adm.screenCheck(99,0,0,0))
              {
                this.router.navigateByUrl('analysis/anadashboard');
              }
              else
              {
                this.adm.showMessage('You are not authorised to view this module','Authorize',4);
              }
              break;
       case 'adm':
           // if(this.adm.screenCheck(-1,-1,-1,-1))
            //{
              this.router.navigateByUrl('admin/admdashboard');
            //}
            // else
            // {
            //   this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            // }
          break;
        
      }
    }
    
    private makeDash1()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.acc.getDashboard().subscribe(res =>
        {
            var dets:any=res;
            var det=dets.filter(a => a.typ == 1);
            console.log('Dashboard',det);
            this.listdet=[];
              for(var i=0;i<det.length;i++)
              {
                  if(det[i].sno==1)
                  {
                    this.pnlfir=det[i].fir;
                    this.pnlsec=det[i].sec;
                  }
                  if(det[i].sno==2)
                  {
                    this.casfir=det[i].fir;
                    this.cassec=det[i].sec;
                  }
                  if(det[i].sno==3)
                  {
                    this.banfir=det[i].fir;
                    this.bansec=det[i].sec;
                  }
                  if(det[i].sno==4)
                  {
                    this.mobfir=det[i].fir;
                    this.mobsec=det[i].sec;
                  }
                  if(det[i].sno==5)
                  {
                    this.supfir=det[i].fir;
                    this.supsec=det[i].sec;
                  }
                  if(det[i].sno==6)
                  {
                    this.cusfir=det[i].fir;
                    this.cussec=det[i].sec;
                  }
                  
              }
              var det2=dets.filter(a => a.typ == 2);
              
              this.turnoverLabels=[];
              this.turnoverData=[];
              this.turnoverData=[];
              for(var i=0;i<det2.length;i++)
              {
                this.turnoverLabels.push(det2[i].descr);
                this.turnoverData.push(det2[i].fir);
                this.turnoverData.push(det2[i].sec);
    
              }
              this.pieLabels=[];
              this.piedata=[];
              var det3=dets.filter(a => a.typ == 3);
              for(var i=0;i<det3.length;i++)
              {
                this.pieLabels.push(det3[i].descr);
                this.piedata.push(det3[i].fir);
              }
              var det4=dets.filter(a => a.typ==4);
              this.sales=[];
              for(var i=0;i<det4.length;i++)
              {
                this.sales.push({
                    name:det4[i].descr,
                    busi:+det4[i].fir,
                    rol:+det4[i].sec
                });
              }
    
              var det5=dets.filter(a => a.typ==5);
                this.credits=[];
                for(var i=0;i<det5.length;i++)
                {
                  this.credits.push({
                      name:det5[i].descr,
                      busi:+det5[i].fir
                      
                  });
                }
          this.makeDash();
          
        });
        this.spinner.hide();
    }
       private makeDash()
       {
         
       this.barChartOptions = {
        chart: {
          
          height: 350,
          type: 'bar',
          
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min))
            }
          },
          toolbar:{
            show:true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              customIcons: []
            }
          }
          
        },
        colors: themeColors,
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
    
        dataLabels: {
          enabled: false
        },
        series: [{
          data: this.turnoverData1,
          name:'abc'
        },
      {
        data: this.turnoverData1,
      }
      ],
        xaxis: {
          categories: this.turnoverLabels,
          tickAmount: 5
        }
      }
    
      this.pieInformation();
      
       }
    
       showSpinner()
       {
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
       }
       hideSpinner()
       {
         this.spinner.hide();
       }
    
       private pieInformation():void
       {
           this.pieChartOptions = {
          chart: {
            type: 'pie',
            height: 320
          },
          colors: piecolors,
          labels: this.pieLabels,
          series: this.piedata,
          legend: {
            itemMargin: {
              horizontal: 2
            },
          },
          responsive: [{
            breakpoint: 576,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
       }

       onHover(event: MouseEvent, index: number): void {
       
      }
    
      
  
  }
  