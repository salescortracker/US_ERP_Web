import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmLeadManagementService } from 'app/services/crm/crm-lead-management.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
@Component({
  selector: 'app-cus-order',
  templateUrl: './cus-order.component.html',
  styleUrls: ['./cus-order.component.scss']
})
export class CusOrderComponent implements OnInit {
@Input() childData:any

  leadId: any
  enquiry = 1
  traCheck = 1
  myList: any[] = [];
  contactlst: any;
  soDetails = {
    soId: 0,
    customer_id:0,
    contactName: "",
    contactId: 0,
    soDate: "",
    comments: "",
    paymentTerms: "",
    terms: "",
    deliveryTerms: "",
    billingAddress: "",
    shippingAddress: "",
    additionalCharges: 0,
    freightCharge: 0,
    customsDuties: 0,
    grandTotal: 0.0,
    subtotal: 0.0,
    leadId: 0,
    customerCode: 0,
    branchCode: "",
  }
  items: any;
  totalunits: any;
  units: any;
  solist: any
  leadDetails: any
  taxesuni:any
  taxesdet:any

  constructor(
    private route: ActivatedRoute,
    private admusrservice: AccAccountsService,
    private acc:AccAccountsService,
    private adm: AdminGeneralInfoService,
    private ino: CrmQuotationService,
    private crmLead: CrmLeadManagementService,
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');   
    this.route.queryParamMap.subscribe(params => {
      let soId = params.get('soId')!;
      let quotationId = params.get('quotationid')!;
      if(soId){
        this.editso(soId,3)
      }
      if(quotationId){
        this.getQuoteDetails(quotationId,2)
      }
    });
    this.soDetails.customer_id = Number(this.leadId)
    this.getcontacts()
    this.getInfo()
    this.addso()
    var usr = this.adm.getUserCompleteInformation().usr;
    this.soDetails.customerCode = usr.cCode
    this.soDetails.branchCode = usr.bCode
  }
  ngOnInit(): void {
    if(this.childData>0){
      this.leadId=this.childData;
      this.soDetails.customer_id=this.leadId;
    }
    this.getcontacts()
    this.getInfo()
    console.log(this.myList);
  }
  addso() {
    var usr = this.adm.getUserCompleteInformation().usr;
    this.myList.push({
      itemId: 0,
      itemName: "",
      itemCode: "",
      customer_id:0,
      qty: 0,
      unitPrice: 0,
      discount: 0,
      discountAmount: 0.00,
      uomId: 0,
      uomname: "",
      leadDays: 0,
      totalPrice: 0.00,
      totalAmt: 0.00,
      taxId:0,
      taxName:"",
      taxpercentage:0,
      taxAmount: 0.00,
      customerCode: usr.cCode,
      branchCode: usr.bCode,
      units: []
    })
  }
  _delete(i: any) {
    this.myList.splice(i, 1)
    this.calculEnquiryTotal()
  }
  editso(e, view) {
    this.enquiry = view
    this.traCheck = 2
    this.acc.GetCRMRxso(e).subscribe(
      (res) => {
        console.log(res);
        this.myList = res.soLines
        this.soDetails = res.so
        this.leadDetails = res.leadDetails
        this.soDetails.soDate = new Date(res.so.soDate).getFullYear()+'-'+new Date(res.so.soDate).getMonth()+1+'-'+(new Date(res.so.soDate).getDate());//new Date(this.soDetails.soDate).toISOString().split('T')[0];
        for (let i = 0; i < this.myList.length; i++) {
          this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
        }
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  getInfo() {
    this.acc.GetCRMRxSos(this.leadId).subscribe(
      (res) => {
        this.solist = res.data;
        console.log(this.solist);
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
    this.ino.getCRMQuotationRequirements().subscribe(res => {
      var det: any = res;
      console.log('total', det);
      this.items = det.materials;
      this.totalunits = det.units;
      for (let i = 0; i < this.myList.length; i++) {
        this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
      }
      this.taxesuni = det.taxesuni
      this.taxesdet = det.taxesdet
      console.log('items', this.items);
      // this.totalrequirements = det;
      // this.suppliers = det.suppliers;
      // this.totaladdresses = det.addresses;
      // this.listdat = new Date(det.dat);
      // this.tradat = new Date(det.dat);
      // var taxes = det.taxes;
      // this.poseq = det.seq;
      // var ter: any = det.terms;
      // this.telecallingno = det.telecallingno;
      // this.enquiryno = det.enquiryno
      // this.supdetail.quotationstatus = det.quotationstatus;
      // for (var i = 0; i < ter.length; i++) {
      //   this.terms.push(ter[i].term);
      // }
    });
  }
  getQuoteDetails(e, view){
    this.enquiry = view
    this.crmLead.GetCRMRxQuotation(e).subscribe(
      (res) => {
        this.myList = res.quotationLines
        this.soDetails = res.quotation
        this.leadDetails = res.leadDetails
        this.soDetails.soDate = new Date(this.soDetails.soDate).toISOString().split('T')[0];
        for (let i = 0; i < this.myList.length; i++) {
          this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
        }
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  getcontacts() {
    var usr = this.adm.getUserCompleteInformation().usr;
    let contactForm = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
      customer_id: this.leadId
    }
    this.admusrservice.getContact(contactForm).subscribe(
      (res) => {
        console.log('Contact List:', res);
        this.contactlst = res;
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }

  submitEnquiry() {
    if (this.valCheck()) {
      let lines = []
      let copiedArray = JSON.parse(JSON.stringify(this.myList));
      for (let a of copiedArray) {
        let temp = a
        delete temp.units;
        lines.push(temp)
      }
      const req = {
        obj: this.soDetails,
        lines: lines,
        traCheck: this.traCheck,
        usr: this.adm.getUserCompleteInformation().usr
      }
      console.log(req);
      this.acc.AddCRMRxSo(req).subscribe(
        (res) => {
          console.log(res);
          this.getInfo()
          this.editso(res.enquiryId,3)
          if (this.traCheck == 1) {
            this.adm.showMessage('so Added successfully!', "success", 1);
          }
          else if (this.traCheck == 2) {
            this.adm.showMessage('so Updated successfully!', "success", 1);
          }
          this.close()
        },
        (error) => {
          console.error('Error fetching contacts:', error);
        }
      );
    }
  }

  // downloadPDF() {
  //   const element = document.querySelector('.cor-print') as HTMLElement;

  //   html2canvas(element).then((canvas: any) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

  //     const imgWidth = 210;
  //     const pageHeight = 295;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;

  //     let position = 0;

  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save('so_'+this.soDetails.soId+'.pdf');
  //   });
  // }
  public makeUnits(e, index: any) {
    var det = this.items.filter(a => a.recordId == e);
    // this.units = this.totalunits.filter(a => a.recordId == det[0].recordId);
    this.myList[index].units = this.totalunits.filter(a => a.recordId == det[0].recordId);
    console.log(det);
    if (det) {
      this.myList[index].itemId = det[0].recordId
      this.myList[index].itemCode = det[0].itemcode
      this.myList[index].itemName = det[0].itemname
      this.myList[index].unitPrice = Number(det[0].costPrice > 0 ? det[0].costPrice : 0)
      this.myList[index].uomId = Number(det[0].stdumId)
      this.uomName(det[0].stdumId, index)
    }
    console.log(this.myList);
  }
  selectedTax(e: any, index: any) {
    let totalTax = 0
    var det = this.taxesdet.filter(a => a.recordId == e);
    var taxesuni = this.taxesuni.filter(a => a.recordId == e);
    det.map(a=>totalTax += a.taxper)
    this.myList[index].taxName = taxesuni[0].taxName
    this.myList[index].taxId = taxesuni[0].recordId
    this.myList[index].taxpercentage = totalTax
    this.calculItemTotal(index)
  }
  uomName(e: any, index: any) {
    console.log(this.myList[index].units);
    var det = this.myList[index].units.filter(a => a.umid == e);
    console.log(det);
    this.myList[index].uomname = det[0].um
  }
  calculItemTotal(index: any) {
    const lineitem = this.myList[index];
  
    if (!lineitem || !lineitem.qty || !lineitem.unitPrice || lineitem.discount == null) {
      console.error("Invalid line item data at index:", index);
      return;
    }
  
    const { qty, unitPrice, discount, taxpercentage } = lineitem;
  
    const quantity = Number(qty) || 0;
    const pricePerUnit = Number(unitPrice) || 0;
    const discountPercentage = Number(discount) || 0;
    const taxPercentage = Number(taxpercentage) || 0;
  
    const grossAmount = quantity * pricePerUnit;
    const discountAmount = parseFloat(((discountPercentage / 100) * grossAmount).toFixed(2));
    const netAmount = parseFloat((grossAmount - discountAmount).toFixed(2));
    const tax = parseFloat(((taxPercentage / 100) * netAmount).toFixed(2));
    const totalAmount = parseFloat((netAmount + tax).toFixed(2));
    console.log(grossAmount);
    console.log(discountAmount);
    console.log(netAmount);
    console.log(tax);
    console.log(totalAmount);
  
    this.myList[index] = {
      ...lineitem,
      discountAmount,
      taxAmount: tax,
      totalAmt: totalAmount,
    };
  
    this.calculEnquiryTotal();
  }
  
  calculEnquiryTotal() {
    let subtotal = 0
    for (let a of this.myList) {
      subtotal += a.totalAmt
    }
    this.soDetails.subtotal = subtotal
    this.soDetails.grandTotal =
    subtotal +
    Number(this.soDetails.additionalCharges || 0) +
    Number(this.soDetails.freightCharge || 0) +
    Number(this.soDetails.customsDuties || 0);
  }
  contactChanged(e) {
    var det = this.contactlst.filter(a => a.id == e);
    this.soDetails.contactId = Number(det[0].id)
    this.soDetails.contactName = det[0].firstName + " " + det[0].lastName
  }
  close() {
    this.enquiry = 1
    this.traCheck = 1
    this.myList = []
    this.soDetails = {
      soId: 0,
      contactName: "",
      contactId: 0,
     customer_id:0,
      soDate: "",
      comments: "",
      paymentTerms: "",
      terms: "",
      deliveryTerms: "",
      billingAddress: "",
      shippingAddress: "",
      additionalCharges: 0,
      freightCharge: 0,
      customsDuties: 0,
      grandTotal: 0.0,
      subtotal: 0.0,
      leadId: 0,
      customerCode: 0,
      branchCode: "",
    }
    this.addso()
  }

  valCheck() {
    // console.log(this.soDetails,this.myList);
    // if (!this.soDetails.contactId) {
    //   this.adm.showMessage('Select Contact is Required', 'Warning', 3);
    //   return;
    // }
    // if (!this.soDetails.soDate) {
    //   this.adm.showMessage('so Date is Required', 'Warning', 3);
    //   return;
    // }
    // if (!this.soDetails.comments) {
    //   this.adm.showMessage('Comments is Required', 'Warning', 3);
    //   return;
    // }
    // if (!this.soDetails.paymentTerms) {
    //   this.adm.showMessage('so Validity is Required', 'Warning', 3);
    //   return;
    // }
    // if (this.myList.length == 0) {
    //   this.adm.showMessage('Minium One line is required', 'Warning', 3);
    //   return;
    // }
    // for (let i = 0 ;i<this.myList.length;i++) {
    //   console.log(this.myList[i]);
    //   if (!this.myList[i].itemId) {
    //     this.adm.showMessage((i + 1) + ' Line Material is Required', 'Warning', 3);
    //     return;
    //   }
    //   if (!this.myList[i].qty) {
    //     this.adm.showMessage((i + 1) + ' Line qty is Required', 'Warning', 3);
    //     return;
    //   }
    //   if (!this.myList[i].unitPrice) {
    //     this.adm.showMessage((i + 1) + ' Line Unit Price is Required', 'Warning', 3);
    //     return;
    //   }
    // }
    return true
  }
}
