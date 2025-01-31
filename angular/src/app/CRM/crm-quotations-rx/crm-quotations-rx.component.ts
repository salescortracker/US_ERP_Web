import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PurPurchaseEnquiryService } from 'app/services/purchases/pur-purchase-enquiry.service';
import { PurPurchaseQuotationService } from 'app/services/purchases/pur-purchase-quotation.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { json } from 'ngx-custom-validators/src/app/json/validator';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
const now:Date = new Date(); 
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
 


})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { 

  }
}

@Component({
  selector: 'app-crm-quotations-rx',
  templateUrl: './crm-quotations-rx.component.html',
  styleUrls: ['./crm-quotations-rx.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmQuotationsRxComponent implements OnInit {
 
  public fileName:string='../../../assets/img/employee.jpg';
  public fileobj:any;
  public NewfileReqObj:any[]=[];
  fileevent: any;
  public fileNames:any[]=[];
  public files:File[]=[];
  public fileReqObj:any; 
  filename: any = '';
  public modeltype:number=0;
public discper:number=0;
 

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  public dateCheck:Boolean=false;
 // swal =  swalFunctions;
  public saveStr:string='';
 
  public recordID:number=0;
  public title:string='';
public units:any;
public totalunits:any;
public purchaseorders:any;
public suppliers:any;
public totaladdresses:any;
public addresses:any;
public addr:string='';
public telecallingno:string='';
public enquiryno:string='';
public itemtax:number=0;
public itemtaxes:any[]=[];
public employee:any={
  recordid:null,
  name:'',
  mobile:'',
  designation:''
}
public telecalldetails:any={
  telecallingno:'',
  customer:'',
  reasonforcall:'',
  mobile:'',
  status:'',
  callerComments:'',
  customerComments:'',
  dat:'',
  email:'',
  nextCallDate:''

}
public custid:number=null;
public supdetail:any={
  accountId:0,
  accountname:'',
  address:'',
  country:' ',
  stat:' ',
  district:'',
  city:'',
  zip:'',
  mobile:'',
  tel:'',
  fax:'',
  email:'',
  webid:'',
  pricelist:'',
  telecallingno:'',
  enquiryno:'',
  quotationstatus:'',
};
public enquiries:any;
public enqid:number=-1;
public quotationstatusnew:string='New';
public poseq:string='';
public items:any={};
public material:any={
  grp: '',
itemcode: '',
itemname:  '',
recordId:-1,
reorderqty: 0,
shelflife:0,
statu: '',
stdrat: 0,
stdum: '',
stdumId:0
};
public orderstatusform:any={
  id:0,
  description:'',
  branch_id:'',
  customer_code:'',

}
public slno:number=1;
public itemdetails:any[]=[];

public terms:String[]=[];
public term:String;

public taxes:any[]=[];


public tradat:Date=new Date();
public validitydate:Date=new Date();
   
public qty:number=null;
public umid:number=-1;
public rat:number=null;
public leaddays:number=null;
public baseAmt:number=0;
public discount:number=0;
public taxesAmt:number=0;
public otherAmt:number=0;
public totalAmt:number=0;

public advanceCheck:boolean=false;
public advseq:string='';
public advanceamt:number=0;
public advancemode:string=' ';
public advanbankdet:string='';
public pono:string='';
public advasupplier:string='';
public orderamt:number=0;
public advvoucher:string='';
 
public totalrequirements:any;

public listdat:Date=new Date();
  public opened:boolean=false;
  closeResult: string;
 
  constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,private ino:CrmQuotationService,private par:PartyDetailsService
    ,private modalService: NgbModal, 
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private inv:InvMastersService
   ) {
if(this.adm.screenCheck(7,2,3,0))
{
  this.delCheck=this.adm.screenCheck(7,2,3,3);
  this.dateCheck=this.adm.screenCheck(7,2,3,4);
    this.listAdd();
}
else
{
  this.router.navigateByUrl('crm/crmunauthorize');
}
   }

  ngOnInit(): void {
   // this.listAdd();
  
   //this.loadenquiries();
   this.loadorderstatus();
  }
  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(7,2,3,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.validitydate.setDate( this.validitydate.getDate() + 15 );
    this.slno=1;
    this.delVisible=false;
    this.recordID=0;
    this.supdetail={
      accountId:0,
      accountname:'',
      address:'',
      country:' ',
      stat:' ',
      district:'',
      city:'',
      zip:'',
      mobile:'',
      tel:'',
      fax:'',
      email:'',
      webid:'',
      pricelist:''
    };
    this.itemdetails=[];
    for(var i=0;i<this.taxes.length;i++)
    {
      this.taxes[i].taxvalue=0;
    }
    this.baseAmt=0;
    this.discount=0;
    this.taxesAmt=0;
    this.otherAmt=0;
    this.totalAmt=0;
  }
  openOld(obj:any)
  {
  
   if(obj.pos <= 2)
   {
    this.recordID=obj.recordId;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

      this.ino.getCRMQuotation(this.recordID).subscribe(res =>
        {
            var dets:any=res;

           // var result:any=JSON.parse(dets);
var result:any=res;
            console.log(result,'result');
            if(result.result=='OK')
            {
              this.delVisible=true;
              this.creCheck=this.adm.screenCheck(7,2,3,2);
              this.saveStr='Modify';
              this.opened=true;

              if(result.header)
              {
              this.supdetail={
                accountId:result.header.partyId,
                accountname:result.header.partyName,
                address:result.header.addr,
                country:null,
                empno:result.header.refEmployee,
                stat:result.header.stat,
                district:result.header.district,
                city:result.header.city,
                zip:result.header.zip,
                mobile:result.header.mobile,
                tel:result.header.tel,
                fax:result.header.fax,
                email:result.header.email,
                webid:result.header.webid,
                
              };
              this.custid=result.header.partyId;
              this.baseAmt=result.header.baseamt;
              this.discount=result.header.discount;
              this.taxesAmt=result.header.taxes;
              this.otherAmt=result.header.others;
              this.totalAmt=result.header.totalAmt;
              
              this.poseq=result.header.seq;
              this.itemdetails=[];
              for(var i=0;i<result.lines.length;i++)
              {
                
                this.itemdetails.push({
                  slno:result.lines[i].sno,
                
                  itemid:result.lines[i].itemId,
                  itemname:result.lines[i].itemName,
                  umid:result.lines[i].um,
                  um:result.lines[i].branchId,
                  qty:result.lines[i].qty,
                  rat:result.lines[i].rat,
                  discper:result.lines[i].discPer,
                  leaddays:result.lines[i].leadDays,
                  
                  value:(+result.lines[i].qty)*(+result.lines[i].rat)
                });
              }
             
              
   
this.taxes=[];
              for(var i=0;i<result.taxes.length;i++)
              {
               this.taxes.push({
                taxcode:result.taxes[i].taxCode,
                taxper:result.taxes[i].taxper,
                taxvalu:  result.taxes[i].taxValue,
                lineid: result.taxes[i].lineId,
                itemname:this.findItemName(result,result.taxes[i].lineId)
               });
              }
          
              for(var i=0;i<result.terms.length;i++)
              {
                var det=this.terms.filter(a => a.includes(result.terms[i].term));
                if(det.length <= 0)
                {
                    this.terms.push(result.terms[i].term);
                } 
              }

             
            }
             
            this.makeEmployee();
              this.spinner.hide();
            }
            else
            {
              this.adm.showMessage(result.result,'Error',4);
              this.spinner.hide();
            }
        });
      }
      else
      {
        this.adm.showMessage('This quotation is processed for further transaction','Warning',3);
      }
  }
  private findItemName(result:any,x:number):string
  {
    var det=result.lines.filter(a => a.sno==x);
    var str:string='';
    if(det.length > 0)
    {
      str=det[0].itemName;
    }
    return str;
  }
  valChk():Boolean
{
  
  return true;
}
public delete()
{
  


  Swal.fire({  
    title:  'Deletes Sale Quotation Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
       



      
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
   var header:any=
      {
        RecordId:this.recordID,
        Dat:new Date(this.adm.stringData(this.tradat)),
        PurchaseType:'General',
       // RefQuotation:this.refQuo,
       RefQuotationId:+this.enqid,
        Validity:new Date(this.adm.stringData(this.validitydate)),
        Vendorid:this.supdetail.accountId,
        Vendorname:this.supdetail.accountname,
        Addr:this.supdetail.address,
        Country:this.supdetail.country,
        Stat:this.supdetail.stat,
        District:this.supdetail.district,
        City:this.supdetail.city,
        Zip:this.supdetail.zip,
        Mobile:this.supdetail.mobile,
        Tel:this.supdetail.tel,
        Fax:this.supdetail.fax,
        Email:this.supdetail.email,
        Webid:this.supdetail.webid,
        Baseamt:this.baseAmt,
        Discount:this.discount,
        Taxes:this.taxesAmt,
        Others:this.otherAmt,
        TotalAmt:this.totalAmt,
      
      };
   
  var lines:any[]=[];
      for(var i=0;i<this.itemdetails.length;i++)
        {
          lines.push({
            ItemId:this.itemdetails[i].itemid,
            ItemName:this.itemdetails[i].itemname,
            Qty:this.itemdetails[i].qty,
            Um:this.itemdetails[i].umid,
            Rat:this.itemdetails[i].rat,
            LeadDays:this.itemdetails[i].leaddays
          });
 
        }
        var term:any[]=[];
      for(var i=0;i<this.terms.length;i++)
      {
        term.push({
      Term:this.terms[i]
      
        });
      }
      
        var taxe:any[]=[];
      for(var i=0;i<this.taxes.length;i++)
      {
        if(this.taxes[i].taxvalue > 0)
        {
          taxe.push({
            Taxcode:this.taxes[i].taxcode,
            Taxper:this.taxes[i].taxper,
            Taxvalue:this.taxes[i].taxvalue
          });
        }
      }
  
  this.ino.setCRMQuotation(header,lines,term, taxe,3).subscribe(res =>
      {
        var result:any=res;
        if(result.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Your Sale Quotation deleted.',  
            'success'  
          )  ;
          this.listAdd();
          this.makeCle();
          this.opened=false;
          
       }
  else
  {
    Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
 //   this.adm.showMessage(result.result,'Error',4);
  }
  this.spinner.hide();
  });
















    
    } else if (result.dismiss === Swal.DismissReason.cancel) {  
     /* Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  */
    }  
  })  ;



}
public addTerms()
{

}

public addItems()
{

  this.rat=this.material.stdrat
  if(!this.material.itemname)
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return;
  }
  if(this.material.itemname=='')
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return;
  }
  if(this.qty <=0)
  {
    this.adm.showMessage('Qty not mentioned','Warning',3);
    return;
  }
  if(this.rat <=0)
  {
    this.adm.showMessage('Rate not mentioned','Warning',3);
    return;
  }



  this.itemdetails.push({
    slno:this.slno,
    itemid:this.material.recordId,
    itemname:this.material.itemname,
    umid:+this.umid,
    um:this.findUnit(+this.umid),
    qty:this.qty,
    discper:this.discper,
    discount: this.qty*this.rat*this.discper/100,
    
    taxid:this.itemtax,
    leaddays:+this.leaddays,
    rat:this.rat,
    value:this.qty*this.rat
  });
  this.slno++;
    this.material={
    grp: '',
  itemcode: '',
  itemname:  '',
  recordId:-1,
  reorderqty: 0,
  shelflife:0,
  statu: '',
  stdrat: 0,
  stdum: '',
  stdumId:0
  };
  this.qty=null;
  this.rat=null;
  this.leaddays=null;
  this.discper=0;
  this.makeCalcu();
}
 
private findUnit(rec):string
{
  var det=this.units.filter(a => a.umid==rec);
  if(det.length > 0)
  {
    return(det[0].um);
  }
  else
  {
    return ' ';
  }
}
public deleteItem(obj:any)
{
  var index=this.itemdetails.indexOf(obj);
  if(index >= 0)
  {
    this.itemdetails.splice(index,1);
      this.makeCalcu();
  }
}


public makeCalcu()
{
 
this.makeTaxes();
this.baseAmt=0;
this.discount=0;
for(var i=0;i<this.itemdetails.length;i++)
{
  this.baseAmt=this.baseAmt+(+this.itemdetails[i].qty * +this.itemdetails[i].rat);
  this.discount=this.discount + (+this.itemdetails[i].qty * +this.itemdetails[i].rat)*(+this.itemdetails[i].discper/100) ;
}
 
this.makeOthers();

}
public makeTaxes()
{
 
    this.taxes=[];
  for(var i=0;i<this.itemdetails.length;i++)
  {
       var taxes=this.totalrequirements.taxesdet.filter(a => a.recordId==this.itemdetails[i].taxid);
       if(taxes.length > 0)
       {
         for(var j=0;j<taxes.length;j++)
         {
         this.taxes.push({
          taxcode:taxes[j].taxCode,
          taxper:taxes[j].taxper,
          taxvalu: Math.round((this.itemdetails[i].qty*this.itemdetails[i].rat-this.itemdetails[i].discount)*taxes[j].taxper/100),
          lineid:this.itemdetails[i].slno,
          itemname:this.itemdetails[i].itemname
         });
        }
       }
  }
  this.taxesAmt=0;
  for(var i=0;i<this.taxes.length;i++)
  {
    this.taxesAmt=this.taxesAmt+this.taxes[i].taxvalu;
  }
  this.makeOthers();
}
makeOthers()
{
  this.totalAmt=this.baseAmt+this.taxesAmt-this.discount+this.otherAmt;
}

public save()
{
  if(!this.supdetail.accountname)
  {
    this.adm.showMessage('Customer not selected','Warning',3);
    return;
  }
  if(this.itemdetails.length <= 0)
  {
    this.adm.showMessage('Items not selected','Warning',3);
    return;
  }




  Swal.fire({  
    title: this.recordID==0? 'Confirms Sale Quotation Details':'Modifies Sale Quotation Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
       



      
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
   var header:any=
      {
        Dat:new Date(this.adm.stringData(this.tradat)),
        SaleType:'General',
         RefEmployee:+this.supdetail.empno,

        Validity:new Date(this.adm.stringData(this.validitydate)),
        PartyId:this.supdetail.accountId,
        PartyName:this.supdetail.accountname,
        Addr:this.supdetail.address,
        Country:this.supdetail.country,
        Stat:this.supdetail.stat,
        District:this.supdetail.district,
        City:this.supdetail.city,
        Zip:this.supdetail.zip,
        Mobile:this.supdetail.mobile,
        Tel:this.supdetail.tel,
        Fax:this.supdetail.fax,
        Email:this.supdetail.email,
        Webid:this.supdetail.webid,
        Baseamt:this.baseAmt,
        Discount:this.discount,
        Taxes:this.taxesAmt,
        Others:this.otherAmt,
        TotalAmt:this.totalAmt,
        telecallingno:this.telecallingno,
        enquiryno:this.enquiryno,
        quotationstatus:this.quotationstatusnew,
      };
      if(this.recordID > 0)
      {
        header.RecordId=this.recordID;
      }
  
  var lines:any[]=[];
      for(var i=0;i<this.itemdetails.length;i++)
        {
          lines.push({
            Sno:this.itemdetails[i].slno,
            ItemId:this.itemdetails[i].itemid,
            ItemName:this.itemdetails[i].itemname,
            Qty:this.itemdetails[i].qty,
            Um:this.itemdetails[i].umid,
            Rat:this.itemdetails[i].rat,
            DiscPer:this.itemdetails[i].discper,
            LeadDays:this.itemdetails[i].leaddays
          });
 
        }
        var term:any[]=[];
      for(var i=0;i<this.terms.length;i++)
      {
        term.push({
      Term:this.terms[i]
      
        });
      }
      
        var taxe:any[]=[];
      for(var i=0;i<this.taxes.length;i++)
      {
        if(this.taxes[i].taxvalu > 0)
        {
          taxe.push({
            Taxcode:this.taxes[i].taxcode,
            Taxper:this.taxes[i].taxper,
            Taxvalue:this.taxes[i].taxvalu,
            LineId:this.taxes[i].lineid
          });
        }
      }
  
  this.ino.setCRMQuotation(header,lines, term, taxe,this.recordID==0?1:2).subscribe(res =>
      {
        var result:any=res;
        if(result.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Your Purchase Quotation saved.',  
            'success'  
          )  ;
          this.listAdd();
          this.makeCle();
          if(this.recordID != 0)
          {
            this.opened=false;
            //this.advanceCheck=true;
         //   this.pono=result.header.seq;
           // this.advasupplier=result.header.vendorname;
            //this.orderamt=result.header.totalAmt;

          }
       }
  else
  {
    Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
 //   this.adm.showMessage(result.result,'Error',4);
  }
  this.spinner.hide();
  this.close();
  });
















    
    } else if (result.dismiss === Swal.DismissReason.cancel) {  
     /* Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  */
    }  
  })  ;



  //if(confirm("Confirms Purchase Order Details" )) {
    

  
}

close()
{
  this.opened=false;
}
listAdd()
{

this.spinner.show(undefined,
  {
    type: 'ball-triangle-path',
    size: 'medium',
    bdColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    fullScreen: true
  });

this.ino.getCRMQuotationRequirements().subscribe(res =>
{
  var det:any=res;
  console.log('total',det);
  this.totalrequirements=det;
  this.suppliers=det.suppliers;
  this.totaladdresses=det.addresses;
  this.items=det.materials;
  this.listdat=new Date(det.dat);
  this.tradat=new Date(det.dat);
  var taxes=det.taxes;
  this.poseq=det.seq;
  this.totalunits=det.units;
  var ter:any=det.terms;
   this.telecallingno=det.telecallingno;
   this.enquiryno=det.enquiryno
this.supdetail.quotationstatus=det.quotationstatus;
  for(var i=0;i<ter.length;i++)
  {
    this.terms.push(ter[i].term);
  }
  /*for(var i=0;i<det.taxes.length;i++)
  {
    this.taxes.push({
taxcode:det.taxes[i].taxCode,
taxper:det.taxes[i].taxPer,
taxvalue:0
    });
  }*/
  this.spinner.hide();
  
this.ShowOrders();
});


}

public ShowOrders()
{
  var dat1=this.adm.stringData(this.listdat);
  var dat2=dat1;
  this.ino.getCRMQuotations(dat1,dat2).subscribe(res =>
    {
        this.purchaseorders=res;
         
    });
}

openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
}

openModal(customContent,x) {
//  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
this.modeltype=x;
this.modalService.open(customContent, { windowClass: 'terms-modal'  });
}

 // Open default modal
 open(content,x) {

 if(x==1)
 {
   this.title="Terms";
 }
 else
 {
   this.title="Taxes"
 }
  this.modalService.open(content, { windowClass: 'terms-modal'  }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });


}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return `with: ${reason}`;
  }
}
public makeUnits(e)
{
  var det=this.items.filter(a => a.recordId==e);
  this.rat=det[0].stdrat;
  if(det)
  {
this.material={
  grp: det[0].grp,
itemcode: det[0].itemcode,
itemname:  det[0].itemname,
recordId:det[0].recordId,
reorderqty: det[0].reorderqty,
shelflife:0,
statu: '',
//stdrat: 0,
stdrat: det[0].stdrat,
stdum: det[0].stdum,
stdumId: det[0].stdumId
};
  }
this.rat=det[0].stdrat;
  this.units=this.totalunits.filter(a => a.recordId == this.material.recordId);
  if(this.units.length > 0)
  {
    this.umid=this.units[0].umid;
  }
 var sup=this.totalrequirements.suppliers.filter(a => a.recordId==this.supdetail.accountId);
 var price='';
 var disc='';
 if(sup.length > 0)
 {
   price=sup[0].pricelist;
   disc=sup[0].discountlist;
 }
 var priceuni=this.totalrequirements.pricesuni.filter(a => a.priceListName==price);
 var priceid=0;
 if(priceuni.length > 0)
 {
   priceid=priceuni[0].recordId;
 }
 var taxid=-1;
 var details=this.totalrequirements.pricesdet.filter(a => a.recordId==priceid && a.productId ==  this.material.recordId);
 if(details.length > 0)
 {
    this.rat=details[0].price;
    taxid= +details[0].taxId;
 }
 var discid=0;
 var discuni=this.totalrequirements.discsuni.filter(a => a.discountListName == disc);
 if(discuni.length > 0)
 {
   discid=discuni[0].recordId;
 }
 details= this.totalrequirements.discsdet.filter(a => a.recordId ==discid && a.productId == this.material.recordId);
if(details.length > 0)
{
  this.discper=details[0].discount;
}
var taxnos:number[]=[];
 
if(taxid)
{
  if(taxid > 0)
  {
    taxnos.push(taxid);
    this.itemtax=taxid;
  }
}
if(taxnos.length ==0)
{
  var taxn=this.totalrequirements.pricesdet.filter(a => a.productId == this.material.recordId && a.taxId > 0);
  for(var i=0;i<taxn.length;i++)
  {
    var chk=0;
    for(var j=0;j<taxnos.length;j++)
    {
      if(taxnos[j] == taxn[i].taxId)
      {
        chk++;
      }
      
    }
    if(chk==0)
    {
      taxnos.push(taxn[i].taxId);
    }
  }
}
this.itemtaxes=[];
if(taxnos.length==0)
{
  for(var i=0;i<this.totalrequirements.taxesuni.length;i++)
  {
    this.itemtaxes.push({
        taxid:this.totalrequirements.taxesuni[i].recordId,
        taxname:this.totalrequirements.taxesuni[i].taxName
    });
  }
  this.itemtax=taxnos[0];
}
else
{
  this.itemtax=taxnos[0];
  for(var i=0;i<taxnos.length;i++)
  {
      var deta=this.totalrequirements.taxesuni.filter(a => a.recordId == taxnos[i]);
      if(deta.length > 0)
      {
        this.itemtaxes.push({
          taxid:deta[0].recordId,
          taxname:deta[0].taxName
      });
      }
  }
}



}
public addTerm()
{
  if(!this.term)
  {
    this.adm.showMessage("Term not mentioned",'Warning',3);
    return;
  }
  this.terms.push(this.term);
  this.term='';
}
public delTerm(ter:String)
{
  var index=this.terms.indexOf(ter);
  this.terms.splice(index,1);
}

public closeAdvance()
{
  this.advanceCheck=false;
}



// Confirm Text
ConfirmText() {
  Swal.fire({  
    title: 'Confirms Purchase Quotation Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
      this.save(); 
      Swal.fire(  
        'Transaction Completed Successfully!',  
        'Your Purchase Order saved.',  
        'success'  
      )  
    } else if (result.dismiss === Swal.DismissReason.cancel) {  
     /* Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  */
    }  
  })  ;





 
  
}
 


parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
 
public findAddresses(e)
{
   
  var det=this.suppliers.filter(a => a.recordId==e);
  this.loadtelecalls(det[0].partyName);
  if(det)
  {
    this.supdetail={
      accountId:det[0].recordId,
      accountname:det[0].partyName,
      empno:det[0].employee,
      pricelist:det[0].pricelist
    };
  }
  this.addresses=this.totaladdresses.filter(a => a.recordId==this.supdetail.accountId);
 this.employee={
   recordid:null,
   name:'',
  mobile:'',
  designation:''
}
this.makeEmployee();
}
private makeEmployee()
{
  var emp=this.totalrequirements.employees.filter(a => a.recordId==this.supdetail.empno);
if(emp.length > 0)
{
  this.employee={
    name:emp[0].empname,
    mobile:emp[0].mobile,
      designation:emp[0].tel
  }
}
}
public assignAddress()
{
  var det=this.addresses.filter(a => a.addressName == this.addr);
  if(det)
  {
    if(det.length > 0)
    {
      this.supdetail.address=det[0].addres;
      this.supdetail.country=det[0].country;
      this.supdetail.stat=det[0].stat;
      this.supdetail.district=det[0].district;
      this.supdetail.city=det[0].city;
      this.supdetail.zip=det[0].zip;
      this.supdetail.mobile=det[0].mobile;
      this.supdetail.tel=det[0].tel;
      this.supdetail.fax=det[0].fax;
      this.supdetail.email=det[0].email;
      this.supdetail.webid=det[0].webid;
    }
  }
}
public onSelectFile(e)
{
    
  this.NewfileReqObj=[];
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
        this.fileName=event.target.result;
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
  }



}

//this.NewfileReqObj ? this.NewfileReqObj : null
UploadAttach() {
  var filedata: any = document.getElementById("file-upload");
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



public getNewSupplier(data)
{ 
 console.log('new customer',data);
  if(data)
  {
     this.suppliers.push({
      recordId:data.recordid,
      partyName:data.supplier.PartyName,
      employee:data.supplier.Employee,
      pricelist:data.supplier.Pricelist,
      discountlist:data.supplier.Discountlist,
     });
    this.totaladdresses.push({
        recordId:data.recordid,
        addressName:data.addresses[0].AddressName,
        addres:data.addresses[0].Addres,
        country:data.addresses[0].Country,
        stat:data.addresses[0].Stat,
        district:data.addresses[0].District,
        city:data.addresses[0].City,
        zip:data.addresses[0].Zip,
        mobile:data.addresses[0].Mobile,
        tel:data.addresses[0].Tel,
        fax:data.addresses[0].Fax,
        email:data.addresses[0].Email,
        webid:data.addresses[0].Webid,
    });
}
}

public getNewMaterial(data)
{
    console.log(data,'MAterial new');
    var det:any=data;
    if(data)
    {
     this.items.push({
        recordId:data.recordid,
        itemcode:data.item.Itemid,
        itemname:data.item.ItemName,
        grp:data.itemgroup,
        stdrat:0,
        shelflife:0,
        reorderqty:0,
        statu:1,
        stdum:data.units.length > 0?data.units[0].stdum:'',
        stdumId:data.units.length > 0?+data.units[0].stdid:-1,
        costingType:0
     });

     for(var i=0;i<data.units.length;i++)
     {
     this.totalunits.push({
      recordId:data.recordid,
      umid:+data.units[i].mainid,
      um:data.units[i].mainum,
      cofactor:+data.units[i].cove,
      stdumid:+data.units[i].stdid,
      stdum:data.units[i].stdum
     });
    }
  }
  }
public printOrder(obj:any)
{ 
  
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.ino.printQuotation(obj.recordId).subscribe(res =>
    {
      
var det:any=res;
if(det.filename != '') 
{
window.open( this.adm.getReportsURL() + det.filename,'_blank');
obj.printCount=obj.printCount+1;
}
 
this.spinner.hide();
    });
}
lsttelecallsdata:any
loadtelecalls(customername:any){
  debugger;
  this.par.GetCrmtelcalls(customername).subscribe(res =>
    {
   
   
      this.lsttelecallsdata=res;
  
   
    });
}
lstenquriesdata:any
loadenquiries(telecalno:any){
  this.par.Getcrmenquiriesbytelecalno(telecalno).subscribe(res =>
    {
   
   
      this.lstenquriesdata=res;
  
   
    });
}
lstorderstatusdata:any
loadorderstatus(){
  var usr=this.adm.getUserCompleteInformation().usr;
    this.orderstatusform.branch_id=usr.bCode;
    this.orderstatusform.customer_code=usr.cCode;
 
  this.acc.getcrmorderstatus(this.orderstatusform).subscribe(res =>
    {
   
   
      this.lstorderstatusdata=res;
  
   
    });
}
getTelecallDetails(customtele:any){
 
  this.modalService.open(customtele, { windowClass: 'terms-modal'  });
}
lstcalldetails:any;
gettelecallnumber(telecalnumber:any){
  debugger;
  this.loadenquiries(telecalnumber.target.value);
  this.par.GetCrmtelcallsbynumber(telecalnumber.target.value).subscribe(res =>
    {
      this.lstcalldetails=res; 
      this.telecalldetails.telecallingno=telecalnumber.target.value;
      this.telecalldetails.customer=res[0].customer;
      this.telecalldetails.reasonforcall=res[0].callreason;
      this.telecalldetails.mobile=res[0].mobile;
      this.telecalldetails.status=res[0].status;
      this.telecalldetails.callerComments=res[0].callerComments;
      this.telecalldetails.customerComments=res[0].customerComments;
      this.telecalldetails.dat=res[0].dat!=null?res[0].dat.split('T')[0]:'';
      this.telecalldetails.email=res[0].email;
      this.telecalldetails.nextCallDate=res[0].nextCallDate!=null?res[0].nextCallDate.split('T')[0]:"";

   
    });
    
  //this.telecalldetails.telecallingno=telecalnumber.target.value;
}

}
