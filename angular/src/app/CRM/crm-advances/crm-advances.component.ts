import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyTransactionsService } from 'app/services/accounts/party-transactions.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { CrmLeadManagementService } from 'app/services/crm/crm-lead-management.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
const now = new Date();

@Component({
  selector: 'app-crm-advances',
  templateUrl: './crm-advances.component.html',
  styleUrls: ['./crm-advances.component.scss']
})
export class CrmAdvancesComponent implements OnInit {
  public validity: boolean = false;
  public purchaseorders: any;
  public fromdate: Date = new Date();
  public todate: Date = new Date();
  public recordID: number = 0;
  public advanceId: number = 0;

  public reveAccounts: any;
  public revAcc: number = 0;
  public totalAccounts: any;
  public advPaymentMode: string = '';
  public delAdvVisible: boolean = false;
  public creAdvCheck: Boolean = false;
  public delAdvCheck: Boolean = false;
  public datAdvCheck: Boolean = false;
  public saveAdvanceStr: string = 'Save';
  public advanprev: number = 0;
  // public prevadvances: any[] = [];
  public pono: string = '';
  public advasupplier: string = '';
  public advmobile: string = '';
  public orderamt: number = 0;
  public advvoucher: string = '';
  public prevadvance: number = 0;
  public det1: string = '';
  public det2: string = '';
  public det3: string = '';

  public purchase: any;

  public advance: any = {
    RecordId: null,
    Seq: '',
    TransactionId: 0,
    Tratype: '',
    Dat: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() },
    Amt: 0,
    Paymentmode: '-',
    Remarks: '',
    Bankdetails: '',

  };
  showDetails: boolean;
  constructor(private adm: AdminGeneralInfoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private par: PartyDetailsService,
    private adv: InvPurchaseOrderService,
    private adp: PartyTransactionsService,
    private crmLead: CrmLeadManagementService,
    private ino:CrmQuotationService,
  ) {
    if (this.adm.screenCheck(7, 2, 5, 0)) {
      this.showOrders();
      this.getInfo();
      this.delAdvCheck = this.adm.screenCheck(7, 2, 5, 3);
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.adv.getAdvanceRequirements().subscribe(res => {
        var det: any = res;
        this.advance.Seq = det.voucher;
        this.totalAccounts = det.accounts;
        this.spinner.hide();
      });

    }
    else {
      this.router.navigateByUrl('purchases/purunauthorize');
    }
  }


  ngOnInit(): void {
    // this.loadorders();
    console.log(this.myList);
    this.getInfo();
    this.getAdvances();
  }
  public showOrders() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.adv.GetSaleOrdersForAdvances(this.validity, this.adm.stringData(this.fromdate), this.adm.stringData(this.todate)).subscribe(res => {
      this.purchaseorders = res;
      this.spinner.hide();
      this.getInfo();
    });
  }
  public modeofpayment: any;
 
  public setModeWiseAccounts() {
    this.det1 = '';
    this.det2 = '';
    this.det3 = '';

    if (this.advance.Paymentmode == 'CASH') {
      this.reveAccounts = this.totalAccounts.filter(a => a.acType == 'CAS');
    }
    if (this.advance.Paymentmode == 'CARD' || this.advance.Paymentmode == 'CHEQUE' || this.advance.Paymentmode == 'ONLINE') {
      this.reveAccounts = this.totalAccounts.filter(a => a.acType == 'BAN');
    }
    if (this.advance.Paymentmode == 'MWALLET') {
      this.reveAccounts = this.totalAccounts.filter(a => a.acType == 'MOB');
    }

  }


  public advancesAdd() {



  }

  prevadvances:any;
  public getAdvances() {
    this.crmLead.getAllAdvances(12345, 'PUR_ADV').subscribe(res => {
      console.log(res);
      var det: any = res;
      this.prevadvances=res;
      this.advance.Seq = det.voucher;
      this.spinner.hide();
    });
    this.advancesAdd();
    this.advanceClear();
  }

  // public getAdvances() {
  //   this.crmLead.getAllAdvances(12345, 'PUR_ADV').subscribe(res => {
  //     console.log('Advances:', res); 
  //     var det: any = res;
  //     this.prevadvances=res;
  //     this.advance.Seq = det.voucher;
  //     this.spinner.hide();
  //   });
  //     this.getAdvances();
  //   this.advancesAdd();
  //   this.advanceClear();
  // }


  
  public close() {
    this.recordID = 0;
  }

  public advanceClear() {
    this.advance = {
      RecordId: null,
      Seq: '',
      TransactionId: 0,
      Tratype: '',
      Dat: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() },
      Amt: 0,
      Paymentmode: '-',
      Remarks: '',
      Bankdetails: '',

    };
  }
  public openAdvanceDetails(obj: any) {
    this.creAdvCheck = this.adm.screenCheck(2, 3, 44, 12);
    this.delAdvVisible = true;
    this.delAdvCheck = this.adm.screenCheck(2, 3, 44, 13);
    this.saveAdvanceStr = 'Modify';
    var dat = new Date(obj.dat)
    console.log(obj);
    this.advance = {
      RecordId: obj.recordId,
      Seq: obj.seq,
      TransactionId: obj.transactionId,
      Tratype: 'PUR_ADV',
      Dat: { year: dat.getFullYear(), month: dat.getMonth() + 1, day: dat.getDate() },
      Amt: obj.amt,
      Paymentmode: obj.paymentmode,
      Remarks: obj.remarks,
      Bankdetails: obj.bankdetails,

    };
    this.setModeWiseAccounts();
    this.revAcc = obj.accountId;
    this.det1 = obj.detail1;
    this.det2 = obj.detail2;
    this.det3 = obj.detail3;
  }
  public confirmAdvanceDelete() {

  }
 public confirmAdvanceSave() {
  if (this.advance.Amt <= 0) {
    this.adm.showMessage('Amount not entered', 'Warning', 3);
    return;
  }
  if (this.advance.Paymentmode == '-') {
    this.adm.showMessage('Payment mode not selected', 'Warning', 3);
    return;
  }
  if (this.revAcc == 0) {
    this.adm.showMessage('Reverse Account not selected', 'Warning', 3);
    return;
  }
  Swal.fire({
    title: this.advance.RecordId == null ? 'Confirms Advance Details' : 'Modifies Advance Details',
    text: 'You will not be able to recover this file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, confirm it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.saveAdvance(); // Call the method to save the advance
    }
  });
}

  public saveAdvance() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    var obj: any =
    {
      RecordId: this.advance.RecordId,
      TransactionId: this.recordID,
      Tratype: "SAL_REC",
      Dat: this.adm.makePresentDate(this.advance.Dat),
      Amt: this.advance.Amt,
      Paymentmode: this.advance.Paymentmode,
      Remarks: this.advance.Remarks,
      partyId: this.purchase.vendorid,
      accountId: +this.revAcc,
      detail1: this.det1,
      detail2: this.det2,
      detail3: this.det3
    }
    this.adv.SetPurchaseAdvance(obj, this.advance.RecordId == null ? 1 : 2).subscribe(res => {
      var result: any = res;
      if (result.result == 'OK') {

        Swal.fire(
          'Advance Details Saved Successfully!',
          'Advance saved.',
          'success'
        );
        this.advancesAdd();
        // this.recordID = 0;
      }
      else {
        Swal.fire(
          result.result,
          'Some error in transaction',
          'error'
        )
      }

      this.spinner.hide();
    });
  }


  public confirmPrintAdvance(obj: any) {
    if (obj.printCount == 0) {
      this.printAdvance(obj);
    }
    else {
      Swal.fire({
        title: 'This Receipt is aleady printed ' + obj.printCount + ' time(s) Do you wish to print again?',
        text: 'You will not be able to recover this file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Print',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          if (this.adm.screenCheck(2, 2, 44, 18)) {
            this.printAdvance(obj);
          }
          else {
            this.adm.showMessage('You are not authorised to re print', 'Error', 4);
          }


        }
      });
    }
  }



  public printAdvance(obj: any) {
    console.log(obj);

    var advance: any = {
      RecordId: obj.recordId,
      Seq: obj.seq,
      TransactionId: obj.transactionId,
      Tratype: obj.tratype,
      Dat: obj.dat,
      Amt: obj.amt,
      Paymentmode: obj.paymentmode,
      Remarks: obj.remarks,
      Bankdetails: obj.bankdetails,
      UsrName: obj.usrName,
      PartyId: obj.partyId,

    }
    this.adp.printPartyAdvance(advance).subscribe(res => {

      var result: any = res;
      if (result.result == 'OK') {
        if (result.fname != '') {
          window.open(this.adm.getReportsURL() + result.fname, '_blank');
          //    this.advancesAdd();

        }
      }
    });
  }


  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  lstquotationsdata: any
  loadorders() {
    this.par.Getcrmorders().subscribe(res => {
      this.lstquotationsdata = res;
    });
  }


  //--------------------------------------------------------------------------
  items: any;
  totalunits: any;
  units: any;
  solist: any
  leadDetails: any
  taxesuni:any
  taxesdet:any
  myList: any[] = [];



  frmDate: string = '';  // Will hold the start date
  toDate: string = '';   // Will hold the end date


   // Function to call API and fetch data based on selected dates
   getInfo() {
    this.crmLead.GetAllCRMRxSos(this.validity, this.frmDate, this.toDate).subscribe(
      (res) => {
        this.solist=res;
        console.log(this.solist); // Log the result for debugging
      },
      (error) => {
        console.error('Error fetching CRM RxSos:', error);
      }
    );
  }

  SoId: any;

  getSoDetails(soId: any) {
    console.log('SoId passed to getSoDetails:', soId);
  
    // Validate SoId
    if (!soId) {
      console.error('Invalid SoId provided:', soId);
      this.adm.showMessage('Invalid SoId. Please try again.', 'Error', 3);
      return;
    }
  
    console.log('Fetching details for SoId:', soId);
    this.spinner.show();
  
    // Fetch details from the service
    this.crmLead.getCrmLeadSoById(soId).subscribe(
      (res: any) => {
        console.log('Response:', res);
        this.purchase = res; // Store fetched details
        this.showDetails = true; // Flag to show the details page
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching details:', error);
        this.adm.showMessage('Error fetching details. Please try again.', 'Error', 3);
        this.spinner.hide();
      }
    );
    this.recordID = soId;
  }
  
  
}
