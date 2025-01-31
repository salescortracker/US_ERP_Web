import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'app/services/admin/menu-service.service';

import { NgxSpinnerService } from "ngx-spinner";


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
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccDashboardServiceService } from 'app/services/accounts/acc-dashboard-service.service';

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
var themeColors = [$primary, $danger, $success, $danger, $info];
var piecolors=[  $success,$primary,$warning, $danger];
var chartcolors = [$danger, $warning, $success,  $info];

@Component({
  selector: 'app-acc-dash-board',
  templateUrl: './acc-dash-board.component.html',
  styleUrls: ['./acc-dash-board.component.scss']
})
export class AccDashBoardComponent implements OnInit,AfterViewInit {

  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData1:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];
  public turnoverData2:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];



public sales:any[]=[];
public credits:any[]=[];

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
  ngOnInit(): void {
  }


  ngAfterViewInit()
  {
     
  }
  constructor(private menu:MenuServiceService,private spinner: NgxSpinnerService,private acc:AccDashboardServiceService, private adm:AdminGeneralInfoService) {
    if(this.adm.screenCheck(1,0,0,1))
    {
     
      this.makeDash();
      this.makeDash1();
    }
    else
    {
      this.makeDash();
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
          this.turnoverData1=[];
          this.turnoverData2=[];
          for(var i=0;i<det2.length;i++)
          {
            this.turnoverLabels.push(det2[i].descr);
            this.turnoverData1.push(det2[i].fir);
            this.turnoverData2.push(det2[i].sec);

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
      this.spinner.hide();
    });
 
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
    data: this.turnoverData2,
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
      labels: [],
      series: [],
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

   


   

   

  

}
