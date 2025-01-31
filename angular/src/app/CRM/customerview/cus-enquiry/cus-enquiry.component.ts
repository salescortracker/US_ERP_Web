import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cus-enquiry',
  templateUrl: './cus-enquiry.component.html',
  styleUrls: ['./cus-enquiry.component.scss']
})
export class CusEnquiryComponent implements OnInit {
@Input() childData:any
  leadId: any
  enquiry = 1
  traCheck = 1
  myList: any[] = [];
  contactlst: any;
  enquiryDetails = {
    enquiryId: 0,
    contactName: "",
    customer_id: 0,
    contactId: 0,
    enquiryDate: "",
    comments: "",
    followupDate: "",
    additionalCharges: 0,
    grandTotal: 0.0,
    subtotal: 0.0,
    leadId: 0,
    customerCode: 0,
    branchCode: "",
  }
  items: any;
  totalunits: any;
  units: any;
  enquirylist: any
  leadDetails: any
  customer_id: any;


  constructor(
    private route: ActivatedRoute,
    private admusrservice: AccAccountsService,
    private adm: AdminGeneralInfoService,
    private ino: CrmQuotationService,
    private router: Router
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
    this.enquiryDetails.customer_id = Number(this.leadId)
   
    this.addenquiry()
    var usr = this.adm.getUserCompleteInformation().usr;
    this.enquiryDetails.customerCode = usr.cCode
    this.enquiryDetails.branchCode = usr.bCode
  }
  ngOnInit(): void {
    if(this.childData>0){
      this.leadId=this.childData;
      this.enquiryDetails.customer_id=this.leadId;
    }
    this.getcontacts()
    this.getInfo()
    console.log(this.myList);
  }
  addenquiry() {
    var usr = this.adm.getUserCompleteInformation().usr;
    this.myList.push({
      itemId: 0,
      itemName: "",
      itemCode: "",
      customer_id: 0,
      qty: 0,
      unitPrice: 0,
      discount: 0,
      discountAmount: 0.00,
      uomId: 0,
      uomname: "",
      leadDays: 0,
      totalPrice: 0.00,
      totalAmt: 0.00,
      customerCode: usr.cCode,
      branchCode: usr.bCode,
      units: []
    })
  }
  _delete(i: any) {
    this.myList.splice(i, 1)
    this.calculEnquiryTotal()
  }
  editEnquiry(e, view) {
    debugger;
    this.enquiry = view
    this.traCheck = 2
    this.admusrservice.GetCRMRxEnquiry(e).subscribe(
      (res) => {
        console.log(res);
        this.myList = res.enquiryLines
       
        this.enquiryDetails = res.enquiry
        this.leadDetails = res.leadDetails
        this.enquiryDetails.enquiryDate =new Date(res.enquiry.enquiryDate).getFullYear()+'-'+new Date(res.enquiry.enquiryDate).getMonth()+1+'-'+(new Date(res.enquiry.enquiryDate).getDate());// new Date(this.enquiryDetails.enquiryDate).toISOString().split('T')[0];
        this.enquiryDetails.followupDate = new Date(res.enquiry.followupDate).getFullYear()+'-'+new Date(res.enquiry.followupDate).getMonth()+1+'-'+(new Date(res.enquiry.followupDate).getDate());//new Date(this.enquiryDetails.followupDate).toISOString().split('T')[0];
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
    this.admusrservice.GetCRMRxEnquiries(this.enquiryDetails.customer_id).subscribe(
      (res) => {
        this.enquirylist = res.data;
        console.log(this.enquirylist);
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
        obj: this.enquiryDetails,
        lines: lines,
        traCheck: this.traCheck,
        usr: this.adm.getUserCompleteInformation().usr
      }
      console.log(req);
      this.admusrservice.AddCRMRxEnquiry(req).subscribe(
        (res) => {
          console.log(res);
          this.getInfo()
          this.editEnquiry(res.enquiryId, 3)
          if (this.traCheck == 1) {
            this.adm.showMessage('Enquiry Added successfully!', "success", 1);
          }
          else if (this.traCheck == 2) {
            this.adm.showMessage('Enquiry Updated successfully!', "success", 1);
          }
          this.close()
        },
        (error) => {
          console.error('Error fetching contacts:', error);
        }
      );
    }
  }

  downloadPDF() {
    const element = document.querySelector('.cor-print') as HTMLElement;

    html2canvas(element).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Enquiry_' + this.enquiryDetails.enquiryId + '.pdf');
    });
  }
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
  uomName(e: any, index: any) {
    console.log(e);
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

    const { qty, unitPrice, discount } = lineitem;

    const quantity = Number(qty) || 0;
    const pricePerUnit = Number(unitPrice) || 0;
    const discountPercentage = Number(discount) || 0;

    const grossAmount = quantity * pricePerUnit;
    const discountAmount = (discountPercentage / 100) * grossAmount;
    const totalAmount = grossAmount - discountAmount;

    this.myList[index] = {
      ...lineitem,
      discountAmount,
      totalAmt: totalAmount,
    };
    this.calculEnquiryTotal()
  }
  calculEnquiryTotal() {
    let subtotal = 0
    for (let a of this.myList) {
      subtotal += a.totalAmt
    }
    this.enquiryDetails.subtotal = subtotal
    this.enquiryDetails.grandTotal = subtotal + Number(this.enquiryDetails.additionalCharges)
  }
  contactChanged(e) {
    var det = this.contactlst.filter(a => a.id == e);
    this.enquiryDetails.contactId = Number(det[0].id)
    this.enquiryDetails.contactName = det[0].firstName + " " + det[0].lastName
  }
  close() {
    this.enquiry = 1
    this.traCheck = 1
    this.myList = []
    this.enquiryDetails = {
      enquiryId: 0,
      contactName: "",
      contactId: 0,
      customer_id: 0,
      enquiryDate: "",
      comments: "",
      followupDate: "",
      additionalCharges: 0,
      grandTotal: 0.0,
      subtotal: 0.0,
      leadId: 0,
      customerCode: 0,
      branchCode: "",
    }
    this.addenquiry()
  }

  valCheck() {
    console.log(this.enquiryDetails, this.myList);
    if (!this.enquiryDetails.contactId) {
      this.adm.showMessage('Select Contact is Required', 'Warning', 3);
      return;
    }
    if (!this.enquiryDetails.enquiryDate) {
      this.adm.showMessage('Enquiry Date is Required', 'Warning', 3);
      return;
    }
    if (!this.enquiryDetails.comments) {
      this.adm.showMessage('Comments is Required', 'Warning', 3);
      return;
    }
    if (!this.enquiryDetails.followupDate) {
      this.adm.showMessage('Follow up Date is Required', 'Warning', 3);
      return;
    }
    if (this.myList.length == 0) {
      this.adm.showMessage('Minium One line is required', 'Warning', 3);
      return;
    }
    for (let i = 0; i < this.myList.length; i++) {
      console.log(this.myList[i]);
      if (!this.myList[i].itemId) {
        this.adm.showMessage((i + 1) + ' Line Material is Required', 'Warning', 3);
        return;
      }
      if (!this.myList[i].qty) {
        this.adm.showMessage((i + 1) + ' Line qty is Required', 'Warning', 3);
        return;
      }
      if (!this.myList[i].unitPrice) {
        this.adm.showMessage((i + 1) + ' Line Unit Price is Required', 'Warning', 3);
        return;
      }
    }
    return true
  }
  createQuote(track) {
    if (track == 1) {
      this.admusrservice.CreateQuotationFromEnquiry(this.enquiryDetails.enquiryId).subscribe(
        (res) => {
          console.log(res);
          this.adm.showMessage('Quotation Added successfully!', "success", 1);
          this.router.navigate(['/crm/crmcusmain/' + this.customer_id], { queryParams: { tab: '6', quotationId: res.quotationId } });
        },
        (error) => {
          console.error('Error fetching contacts:', error);
        }
      );
    }
    else if (track == 2) {
      this.router.navigate(['/crm/crmcusmain/' + this.leadId], { queryParams: { tab: '6', enquiryid: this.enquiryDetails.enquiryId } });
    }
  }

}
