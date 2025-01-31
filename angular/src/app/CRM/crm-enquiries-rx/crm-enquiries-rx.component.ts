import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmTelecallingService } from 'app/services/crm/crm-telecalling.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
const now = new Date();



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
  selector: 'app-crm-enquiries-rx',
  templateUrl: './crm-enquiries-rx.component.html',
  styleUrls: ['./crm-enquiries-rx.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmEnquiriesRXComponent implements OnInit {
  @Input() openNewEnquiry;

  public creCheck: Boolean = false;
  public itemtax: number = 0;
  public rat: number = null;
  public delCheck: Boolean = false;
  public totalunits: any;
  public leaddays: number = null;
  public delVisible: Boolean = false;
  public itemtaxes: any[] = [];
  public fromdate: Date = new Date();
  public todate: Date = new Date();
  public totalrequirements: any;
  public slno: number = 1;
  public country: any = '';
  public states: any;
  public baseAmt: number = 0;
  public discount: number = 0;
  public taxes: any[] = [];
  public totalAmt: number = 0;
  public taxesAmt: number = 0;
  public otherAmt: number = 0;
  title: any;
  closeResult: string;
  selectedItem: 0;
  totalparties: any;
  totaladdresses: any;
  public umid: number = -1;
  public discper: number = 0;
  public units: any;
  suppliers: any;
  public supdetail: any = {
    accountId: 0,
    accountname: '',
    address: '',
    country: ' ',
    stat: ' ',
    district: '',
    city: '',
    zip: '',
    mobile: '',
    tel: '',
    fax: '',
    email: '',
    webid: '',
    pricelist: '',
    telecallingno: '',
    enquiryno: '',
    quotationstatus: '',
  };
  public material: any = {
    grp: '',
    itemcode: '',
    itemname: '',
    recordId: -1,
    reorderqty: 0,
    shelflife: 0,
    statu: '',
    stdrat: 0,
    stdum: '',
    stdumId: 0
  };
  public itemdetails: any[] = [];
  public saveStr: string = 'Save';
  public employees: any[] = [];
  public tradate: any = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  public tradates: string = '';
  public listdate: any = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  public nextdate: any = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
  public telecalldetails: any = {
    telecallingno: '',
    customer: '',
    reasonforcall: '',
    mobile: '',
    status: '',
    callerComments: '',
    customerComments: '',
    dat: '',
    email: '',
    nextCallDate: ''

  }
  public call: any = {
    RecordId: 0,
    Seq: 'aa',
    Dat: '',
    Callerid: 0,
    Customer: '',
    Addr: '',
    Country: '',
    Stat: '',
    District: '',
    City: '',
    Zip: '',
    Mobile: '',
    Tel: '',
    Fax: '',
    Email: '',
    Webid: '',
    PrevcallId: null,
    PrevCallMode: '',
    CustomerComments: '',
    CallerComments: '',
    CallPosition: 0,
    NextCallDate: '',
    NextCallMode: 0,
    telecallingno: '',
    total: 0,
    others: 0,
    discount: 0,
    base: 0,
  };
  public pendinginfo: any =
    {
      id: null,
      seq: '',
      callerid: 0,
      callername: '',
      customer: '',
      mobile: '',
      mode: '',
      dat: null,
      customercomments: '',
      username: ''
    };

  public completeDet: any;
  public recordID: number = 0;

  public opened: boolean = false;
  public details: any[] = [];
  public qty: number = null;
  items: any;
  constructor(private crm: CrmTelecallingService, private adm: AdminGeneralInfoService, private par: PartyDetailsService,
    private spinner: NgxSpinnerService, private ino: CrmQuotationService, private router: Router, private toastr: ToastrService, private modalService: NgbModal
  ) {
    if (this.adm.screenCheck(7, 2, 1, 0)) {
      this.tradates = this.adm.stringData(new Date());
      this.crm.gerCompleteEnquiryRxRequirements().subscribe(res => {
        this.completeDet = res;
        console.log(this.completeDet);

        this.call.Seq = this.completeDet.seq;

      });
      this.delCheck = this.adm.screenCheck(7, 2, 1, 3);
      this.listAdd();
    }
    else {
      this.router.navigateByUrl('pages/unAuthorize')
    }
  }

  ngOnInit(): void {
    this.call.others = 0
    this.listAdd();
    this.loadCustomers();
    //this.loadtelecalls();
    console.log(this.openNewEnquiry);
    if(this.openNewEnquiry){
      this.opened = true
    }
  }
  public openPending(obj: any) {
    console.log(obj);
    this.pendinginfo.callername = '';
    this.pendinginfo.id = obj.id;
    this.pendinginfo.seq = obj.seq;
    this.pendinginfo.callerid = obj.callerId;
    this.pendinginfo.customer = obj.customer;
    this.pendinginfo.mobile = obj.mobile;
    this.pendinginfo.mode = obj.mode;
    this.pendinginfo.dat = obj.dat;// this.adm.stringData(new Date(obj.dat));
    this.pendinginfo.customercomments = obj.customercomments;
    this.pendinginfo.username = obj.username;
    this.call.Customer = obj.customer;
    this.call.Mobile = obj.mobile;
    this.modalService.dismissAll('Work over');

  }

  openNew() {
    this.makeCle();
    this.creCheck = this.adm.screenCheck(7, 2, 1, 1);
    this.saveStr = 'Save';
    this.opened = true;
    this.call.Seq = this.completeDet ? this.completeDet.seq : '';
  }
  private makeCle() {
    this.delVisible = false;
    this.recordID = 0;
    this.call = {
      RecordId: 0,
      //   Seq:this.completeDet.seq,
      Dat: '',
      Callerid: 0,
      Customer: '',
      Mobile: '',
      Email: '',
      PrevcallId: null,
      PrevCallMode: '',
      CustomerComments: '',
      CallerComments: '',
      CallPosition: 0,
      NextCallDate: '',
      NextCallMode: 0,
      telecallingno: ''

    };
  }

  openOld(obj: any) {
    console.log(obj);
    this.crm.getEnquirybyId(obj.recordId).subscribe(res => {
      console.log(res);
      console.log(this.itemdetails);
      let det = res
      this.call.RecordId = res.call.recordId;
      this.call.Seq = res.call.seq;
      this.call.Dat = res.call.dat;
      this.call.Callerid = res.call.callerid;
      this.call.Customer = res.call.customer;
      this.call.Addr = res.call.addr;
      this.call.Country = res.call.country;
      this.call.Stat = res.call.stat;
      this.call.District = res.call.district;
      this.call.City = res.call.city;
      this.call.Zip = res.call.zip;
      this.call.Mobile = res.call.mobile;
      this.call.Tel = res.call.tel;
      this.call.Fax = res.call.fax;
      this.call.Email = res.call.email;
      this.call.Webid = res.call.webid;
      this.call.PrevcallId = res.call.prevcallId;
      this.call.PrevCallMode = res.call.prevCallMode;
      this.call.CustomerComments = res.call.customerComments;
      this.call.CallerComments = res.call.callerComments;
      this.call.CallPosition = res.call.callPosition;
      this.call.NextCallDate = res.call.nextCallDate;
      this.call.NextCallMode = res.call.nextCallMode;
      this.call.telecallingno = res.call.telecallingno;
      this.call.base = res.call.base;
      this.call.total = res.call.total;
      this.call.discount = res.call.discount;
      this.call.others = res.call.others;
      this.itemdetails = res.lines

    });

    this.recordID = obj.recordId;
    this.call.Seq = obj.seq;
    this.delVisible = true;
    this.creCheck = this.adm.screenCheck(7, 2, 1, 2);
    this.saveStr = 'Modify';
    this.opened = true;
  }

  public makeStates() {

    this.states = this.completeDet.states.filter(a => a.cntname == this.call.Country);
  }
  public deleteCall() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    this.call.RecordId = this.recordID;
    this.call.Dat = this.adm.strDate(this.tradate);
    var tracheck = 3;
    this.crm.setTeleCall(this.call, tracheck).subscribe(
      async res => {
        var result: any = res;
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
        if (result.result == 'OK') {
          this.toastr.success('Call Deleted Successfully', 'Success');
          this.listAdd();
          this.makeCle();
          this.opened = false;
          this.spinner.hide();
        }
        else {
          this.toastr.error(result.result, 'Error');
          this.spinner.hide();
        }

      });



  }


  valChk(): Boolean {

    if (!this.call.Customer) {
      this.adm.showMessage('Customer not entered', 'Warning', 3);
      return false;
    }
    if (this.call.Customer.trim() == '') {
      this.adm.showMessage('Customer not entered', 'Warning', 3);
      return false;
    }
    if (!this.call.Mobile) {
      this.adm.showMessage('Mobile not entered', 'Warning', 3);
      return false;
    }
    if (this.call.Mobile.trim() == '') {
      this.adm.showMessage('Mobile not entered', 'Warning', 3);
      return false;
    }

    if (!this.call.CustomerComments) {
      this.adm.showMessage('Customer comments not entered', 'Warning', 3);
      return false;
    }
    if (this.call.CustomerComments.trim() == '') {
      this.adm.showMessage('Customer comments not entered', 'Warning', 3);
      return false;
    }
    if (!this.call.CallerComments) {
      this.adm.showMessage('Caller comments not entered', 'Warning', 3);
      return false;
    }
    if (this.call.CallerComments.trim() == '') {
      this.adm.showMessage('Caller comments not entered', 'Warning', 3);
      return false;
    }
    if (this.call.CallPosition <= 0) {
      this.adm.showMessage('Call Position not selected', 'Warning', 3);
      return false;
    }



    return true;
  }
  public saveCall() {





    if (this.valChk()) {
      Swal.fire({
        title: this.recordID == 0 ? 'Confirms Enquiry Details' : 'Modifies Enquiry Details',
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

          this.call.CallPosition = +this.call.CallPosition;


          this.call.Dat = this.adm.makePresentDate(this.tradate);
          this.call.NextCallDate = this.adm.makePresentDate(this.nextdate);
          this.call.NextCallMode = +this.call.NextCallMode;
          this.call.telecallingno = this.call.telecallingno;
          var tracheck = this.recordID == 0 ? 1 : 2;
          for (let a of this.itemdetails) {
            delete a.taxid;
          }
          for (let a of this.taxes) {
            a.TaxValue = a.taxvalu
            a.TaxPer = a.taxper
            a.TaxCode = a.taxcode
            delete a.taxcode;
            delete a.taxper;
            delete a.taxvalu;
            delete a.itemname;
          }

          this.crm.setEnquiryRX(this.call, this.itemdetails, this.taxes, tracheck).subscribe(
            async res => {
              var result: any = res;

              if (result.result == 'OK') {
                Swal.fire(
                  'Transaction Completed Successfully!',
                  'Enquiry Details saved.',
                  'success'
                );
                if (this.recordID == 0) {
                  this.makeCle();

                  this.opened = true;
                }
                else {
                  this.makeCle();
                  this.opened = false;

                }
                this.listAdd();
              }
              else {
                Swal.fire(
                  result.result,
                  'Some error in transaction',
                  'error'
                )
              }
              this.close();
              this.spinner.hide();
            });
        };
      });
    }
  }

  close() {
    this.opened = false;
    this.itemdetails = []
    this.call = {
      RecordId: 0,
      Seq: 'aa',
      Dat: '',
      Callerid: 0,
      Customer: '',
      Addr: '',
      Country: '',
      Stat: '',
      District: '',
      City: '',
      Zip: '',
      Mobile: '',
      Tel: '',
      Fax: '',
      Email: '',
      Webid: '',
      PrevcallId: null,
      PrevCallMode: '',
      CustomerComments: '',
      CallerComments: '',
      CallPosition: 0,
      NextCallDate: '',
      NextCallMode: 0,
      telecallingno: '',
      total: 0,
      others: 0,
      discount: 0,
      base: 0,
    };
  }

  openModal(customContent) {
    //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
    this.modalService.open(customContent, { windowClass: 'terms-modal' });
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
    var frmdate = this.adm.strDate(this.listdate);
    this.crm.getListOfRXEnquiries(this.adm.strDate(this.fromdate), this.adm.strDate(this.todate)).subscribe(
      async res => {
        console.log(res);
        var deta: any = res;
        this.details = [];
        for (var i = 0; i < deta.length; i++) {
          this.details.push({
            recordId: deta[i].recordId,
            seq: deta[i].seq,
            customer: deta[i].customer,
            caller: deta[i].username,
            mobile: deta[i].mobile,
            statu: this.findstatus(deta[i].stau),
            telecallingno: deta[i].telecallingno
          });
        }
        console.log(this.details);
        this.spinner.hide();
      });
  }
  findcaller(x): string {
    var det = this.employees.filter(a => a.empid == x);
    var ename = '';
    if (det.length > 0) {
      ename = det[0].empname;
    }
    else {
      ename = '';
    }
    return ename;
  }
  findstatus(x): string {
    /* if(x==1)
       return 'Space';
     else
       return 'Universe';
     }*/
    if (x == 1)
      return 'Active';
    else
      return 'Inactive';
  }
  public findAddresses(e: any) {
    // Update the call.Customer directly with the selected recordId
    this.call.Customer = e.target.value;
    console.log(this.call.customer);
    this.loadtelecalls();
    this.par.getCompletePartyDetailsById(e.target.value).subscribe(res => {

      var result: any = res;

      this.call.Mobile = result.parties[0].contactMobile;
      this.call.Email = result.parties[0].contactEmail;
      this.call.Addr = result.addresses[0].addres;
      this.call.Zip = result.addresses[0].zip;
      this.call.Country = result.addresses[0].country;
      this.call.Tel = result.addresses[0].tel;
      this.call.Stat = result.addresses[0].stat;
      this.call.Fax = result.addresses[0].fax;
      this.call.District = result.addresses[0].district;
      this.call.City = result.addresses[0].city;
      this.call.Web = result.addresses[0].webid;
      this.spinner.hide();
    });
  }

  loadCustomers() {
    this.par.GetPartyCompleteDetails('CUS').subscribe(res => {


      var result: any = res;

      this.totalparties = result.parties;
      this.totaladdresses = result.addresses;
      this.suppliers = result.parties;
      console.log(result.parties);
      this.spinner.hide();
    });
    this.ino.getCRMQuotationRequirements().subscribe(res => {
      var det: any = res;
      console.log('total', det);
      this.items = det.materials;
      this.totalunits = det.units;
      this.totalrequirements = det;
      this.suppliers = det.suppliers;
      this.totaladdresses = det.addresses;
      this.items = det.materials;
      // this.listdat = new Date(det.dat);
      // this.tradat = new Date(det.dat);
      var taxes = det.taxes;
      // this.poseq = det.seq;
      this.totalunits = det.units;
      var ter: any = det.terms;
      // this.telecallingno = det.telecallingno;
      // this.enquiryno = det.enquiryno

    });
  }
  lsttelecallsdata: any
  loadtelecalls() {
    this.par.GetCrmtelcalls(this.call.Customer).subscribe(res => {
      this.lsttelecallsdata = res;


    });
  }
  getTelecallDetails(customtele: any) {

    this.modalService.open(customtele, { windowClass: 'terms-modal' });
  }
  lstcalldetails: any;
  gettelecallnumber(telecalnumber: any) {

    this.par.GetCrmtelcallsbynumber(telecalnumber.target.value).subscribe(res => {
      this.lstcalldetails = res;
      this.telecalldetails.telecallingno = telecalnumber.target.value;
      this.telecalldetails.customer = res[0].customer;
      this.telecalldetails.reasonforcall = res[0].callreason;
      this.telecalldetails.mobile = res[0].mobile;
      this.telecalldetails.status = res[0].status;
      this.telecalldetails.callerComments = res[0].callerComments;
      this.telecalldetails.customerComments = res[0].customerComments;
      this.telecalldetails.dat = res[0].dat != null ? res[0].dat.split('T')[0] : '';
      this.telecalldetails.email = res[0].email;
      this.telecalldetails.nextCallDate = res[0].nextCallDate != null ? res[0].nextCallDate.split('T')[0] : "";


    });
    //this.telecalldetails.telecallingno=telecalnumber.target.value;
  }
  public makeUnits(e) {
    var det = this.items.filter(a => a.recordId == e);
    this.rat = det[0].stdrat;
    if (det) {
      this.material = {
        grp: det[0].grp,
        itemcode: det[0].itemcode,
        itemname: det[0].itemname,
        recordId: det[0].recordId,
        reorderqty: det[0].reorderqty,
        shelflife: 0,
        statu: '',
        //stdrat: 0,
        stdrat: det[0].stdrat,
        stdum: det[0].stdum,
        stdumId: det[0].stdumId
      };
    }
    this.rat = det[0].stdrat;
    this.units = this.totalunits.filter(a => a.recordId == this.material.recordId);
    if (this.units.length > 0) {
      this.umid = this.units[0].umid;
    }
    var sup = this.totalrequirements.suppliers.filter(a => a.recordId == this.supdetail.accountId);
    var price = '';
    var disc = '';
    if (sup.length > 0) {
      price = sup[0].pricelist;
      disc = sup[0].discountlist;
    }
    var priceuni = this.totalrequirements.pricesuni.filter(a => a.priceListName == price);
    var priceid = 0;
    if (priceuni.length > 0) {
      priceid = priceuni[0].recordId;
    }
    var taxid = -1;
    var details = this.totalrequirements.pricesdet.filter(a => a.recordId == priceid && a.productId == this.material.recordId);
    if (details.length > 0) {
      this.rat = details[0].price;
      taxid = +details[0].taxId;
    }
    var discid = 0;
    var discuni = this.totalrequirements.discsuni.filter(a => a.discountListName == disc);
    if (discuni.length > 0) {
      discid = discuni[0].recordId;
    }
    details = this.totalrequirements.discsdet.filter(a => a.recordId == discid && a.productId == this.material.recordId);
    if (details.length > 0) {
      this.discper = details[0].call.discount;
    }
    var taxnos: number[] = [];

    if (taxid) {
      if (taxid > 0) {
        taxnos.push(taxid);
        this.itemtax = taxid;
      }
    }
    if (taxnos.length == 0) {
      var taxn = this.totalrequirements.pricesdet.filter(a => a.productId == this.material.recordId && a.taxId > 0);
      for (var i = 0; i < taxn.length; i++) {
        var chk = 0;
        for (var j = 0; j < taxnos.length; j++) {
          if (taxnos[j] == taxn[i].taxId) {
            chk++;
          }

        }
        if (chk == 0) {
          taxnos.push(taxn[i].taxId);
        }
      }
    }
    this.itemtaxes = [];
    if (taxnos.length == 0) {
      for (var i = 0; i < this.totalrequirements.taxesuni.length; i++) {
        this.itemtaxes.push({
          taxid: this.totalrequirements.taxesuni[i].recordId,
          taxname: this.totalrequirements.taxesuni[i].taxName
        });
      }
      this.itemtax = taxnos[0];
    }
    else {
      this.itemtax = taxnos[0];
      for (var i = 0; i < taxnos.length; i++) {
        var deta = this.totalrequirements.taxesuni.filter(a => a.recordId == taxnos[i]);
        if (deta.length > 0) {
          this.itemtaxes.push({
            taxid: deta[0].recordId,
            taxname: deta[0].taxName
          });
        }
      }
    }
  }
  public addItems() {
    let userDetails = this.adm.getUserCompleteInformation().usr
    // console.log(this.rat, this.qty, this.material)

    // this.rat = this.material.stdrat
    if (!this.material.itemname) {
      this.adm.showMessage('Material not selected', 'Warning', 3);
      return;
    }
    if (this.material.itemname == '') {
      this.adm.showMessage('Material not selected', 'Warning', 3);
      return;
    }
    if (this.qty <= 0) {
      this.adm.showMessage('Qty not mentioned', 'Warning', 3);
      return;
    }
    if (this.rat <= 0) {
      this.adm.showMessage('Rate not mentioned', 'Warning', 3);
      return;
    }



    console.log(this.material, this.adm.getUserCompleteInformation().usr)
    if (this.itemdetails.length == 0) {
      this.call.others = 0
    }
    this.itemdetails.push({
      sno: this.slno,
      itemid: this.material.recordId,
      itemName: this.material.itemname,
      ItemDescription: this.material.itemname,
      qty: this.qty,
      um: this.findUnit(+this.umid),
      // rat: this.rat,
      // discper: this.discper,
      leadDays: +this.leaddays,
      branchId: userDetails.bCode,
      customerCode: userDetails.cCode,
      rate: this.rat,
      value: this.qty * this.rat,
      discount: this.qty * this.rat * this.discper / 100,

      // umid: +this.umid,
      taxid: this.itemtax,
    });
    console.log(this.itemdetails)
    this.slno++;
    this.material = {
      grp: '',
      itemcode: '',
      itemname: '',
      recordId: -1,
      reorderqty: 0,
      shelflife: 0,
      statu: '',
      stdrat: 0,
      stdum: '',
      stdumId: 0
    };
    this.qty = null;
    this.rat = null;
    this.leaddays = null;
    this.discper = 0;
    this.selectedItem = 0
    this.makeCalcu();
  }
  private findUnit(rec): string {
    var det = this.units.filter(a => a.umid == rec);
    if (det.length > 0) {
      return (det[0].um);
    }
    else {
      return ' ';
    }
  }
  public makeCalcu() {

    this.makeTaxes();
    this.call.base = 0;
    this.call.discount = 0;
    for (var i = 0; i < this.itemdetails.length; i++) {
      this.call.base = this.call.base + (+this.itemdetails[i].qty * +this.itemdetails[i].rate);
      this.call.discount = this.call.discount + (+this.itemdetails[i].qty * +this.itemdetails[i].rate) * (+this.itemdetails[i].discount / 100);
      console.log(this.call)
    }

    this.makeOthers();

  }
  public makeTaxes() {
    console.log(this.totalrequirements, this.itemdetails)

    this.taxes = [];
    for (var i = 0; i < this.itemdetails.length; i++) {
      var taxes = this.totalrequirements.taxesdet.filter(a => a.recordId == this.itemdetails[i].taxid);
      if (taxes.length > 0) {
        for (var j = 0; j < taxes.length; j++) {
          this.taxes.push({
            taxcode: taxes[j].taxCode,
            taxper: taxes[j].taxper,
            taxvalu: Math.round((this.itemdetails[i].qty * this.itemdetails[i].rate - this.itemdetails[i].discount) * taxes[j].taxper / 100),
            lineid: this.itemdetails[i].slno,
            itemname: this.itemdetails[i].itemname
          });
        }
      }
    }
    this.taxesAmt = 0;
    for (var i = 0; i < this.taxes.length; i++) {
      this.taxesAmt = this.taxesAmt + this.taxes[i].taxvalu;
    }
    console.log(this.taxes)
    this.makeOthers();
  }
  makeOthers() {
    this.call.total = this.call.base + this.taxesAmt - this.call.discount + this.call.others;
  }
  public deleteItem(obj: any) {
    var index = this.itemdetails.indexOf(obj);
    if (index >= 0) {
      this.itemdetails.splice(index, 1);
      this.makeCalcu();
    }
  }
  open(content, x) {
    this.title = "Taxes"
    this.modalService.open(content, { windowClass: 'terms-modal' }).result.then((result) => {
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

}
