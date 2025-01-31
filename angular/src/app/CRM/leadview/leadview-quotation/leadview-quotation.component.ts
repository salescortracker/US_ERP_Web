import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
import { CrmLeadManagementService } from 'app/services/crm/crm-lead-management.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-leadview-quotation',
  templateUrl: './leadview-quotation.component.html',
  styleUrls: ['./leadview-quotation.component.scss']
})
export class LeadviewQuotationComponent implements OnInit {
  @Input() childData:any
  quotationlist: any[] = [];
  filteredQuotationList: any[] = [];

  // Selected filter values
  selectedQuotationId: any = '0';
  selectedContactName: any = '0';
  selectedQuotationDate: any = '0';

  leadId: any
  enquiry = 1
  traCheck = 1
  myList: any[] = [];
  contactlst: any;
  quotationDetails = {
    quotationId: 0,
    contactName: "",
    contactId: 0,
    quotationDate: "",
    comments: "",
    quotationValidity: "",
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
  //  quotationlist: any
  leadDetails: any
  taxesuni: any
  taxesdet: any

  constructor(
    private route: ActivatedRoute,
    private admusrservice: AccAccountsService,
    private adm: AdminGeneralInfoService,
    private crmLead: CrmLeadManagementService,
    private ino: CrmQuotationService,
    private router: Router
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
    this.leadId = Number(this.leadId)
    this.getInfo()
    this.quotationDetails.leadId = Number(this.leadId)
  
    this.addquotation()
    var usr = this.adm.getUserCompleteInformation().usr;
    this.quotationDetails.customerCode = usr.cCode
    this.quotationDetails.branchCode = usr.bCode
  }
  ngOnInit(): void {
    if(this.childData>0){
      this.leadId=this.childData;
      this.quotationDetails.leadId = Number(this.leadId)
    }
    this.getcontacts()
    console.log(this.totalunits);
    this.route.queryParamMap.subscribe(params => {
      let quotationId = params.get('quotationId')!;
      let enquiryid = params.get('enquiryid')!;
      if (quotationId) {
        this.editQuotation(quotationId, 3)
      }
      if (enquiryid) {
        this.getenquiryDetails(enquiryid, 2)
      }
    });
  }

  // Method to search the quotations based on selected filters
  searchQuotations(): void {
    this.filterQuotations();
  }

  // Filter quotations based on selected values
  filterQuotations(): void {
    let filteredList = this.quotationlist;

    // Filter by Quotation ID if selected
    if (this.selectedQuotationId !== '0') {
      filteredList = filteredList.filter(q => q.quotation_seq_id === this.selectedQuotationId);
    }

    // Filter by Contact Name if selected
    if (this.selectedContactName !== '0') {
      filteredList = filteredList.filter(q => q.contactName === this.selectedContactName);
    }
  



    // Filter by Quotation Date if selected
    if (this.selectedQuotationDate) {
      const selectedDate = new Date(this.selectedQuotationDate).toLocaleDateString();
      filteredList = filteredList.filter(
        (q) => new Date(q.quotationDate).toLocaleDateString() === selectedDate
      );
    }

    this.filteredQuotationList = filteredList;
  }
  createSo(e:any) {
    if(e==1){
      this.crmLead.CreateSoFromQuotation(this.quotationDetails.quotationId).subscribe(
        (res) => {
          this.adm.showMessage('So Added successfully!', "success", 1);
          this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: '7', soId: res.soId } });
        },
        (error) => {
          console.error('Error fetching contacts:', error);
        }
      );
    }
    else if(e==2){
      this.router.navigate(['/crm/LeadsView/' + this.leadId], { queryParams: { tab: '7', quotationid: this.quotationDetails.quotationId } });
    }
  }


  addquotation() {
    var usr = this.adm.getUserCompleteInformation().usr;
    this.myList.push({
      itemId: 0,
      itemName: "",
      itemCode: "",
      qty: 0,
      unitPrice: 0,
      discount: 0,
      discountAmount: 0.00,
      uomId: 0,
      uomname: "",
      leadDays: 0,
      totalPrice: 0.00,
      totalAmt: 0.00,
      taxId: 0,
      taxName: "",
      taxpercentage: 0,
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
  editQuotation(e, view) {
    this.enquiry = view
    this.traCheck = 2
    this.crmLead.GetCRMRxQuotation(e).subscribe(
      (res) => {
        this.myList = res.quotationLines
        this.quotationDetails = res.quotation
        this.leadDetails = res.leadDetails
        this.quotationDetails.quotationDate = new Date(res.enquiry.quotationDate).getFullYear()+'-'+new Date(res.enquiry.quotationDate).getMonth()+1+'-'+(new Date(res.enquiry.quotationDate).getDate());//new Date(this.quotationDetails.quotationDate).toISOString().split('T')[0];
        this.quotationDetails.quotationValidity =new Date(res.enquiry.quotationValidity).getFullYear()+'-'+new Date(res.enquiry.quotationValidity).getMonth()+1+'-'+(new Date(res.enquiry.quotationValidity).getDate()); //new Date(this.quotationDetails.quotationValidity).toISOString().split('T')[0];
        for (let i = 0; i < this.myList.length; i++) {
          this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
        }
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  getenquiryDetails(e, view) {
    this.enquiry = view
    this.crmLead.GetCRMRxEnquiry(e).subscribe(
      (res) => {
        this.myList = res.enquiryLines
        this.quotationDetails = res.enquiry
        this.leadDetails = res.leadDetails
        console.log(this.totalunits);
        if (this.totalunits) {
          for (let i = 0; i < this.myList.length; i++) {
            this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
          }
        }
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );

  }
  getInfo() {
    this.crmLead.GetCRMRxQuotations(this.leadId).subscribe(
      (res) => {
        this.quotationlist = res.data;
        this.filteredQuotationList = this.quotationlist;
        console.log(this.quotationlist);
      },
      (error) => {
        console.error('Error fetching quotations:', error);
      }
    );
    this.ino.getCRMQuotationRequirements().subscribe(res => {
      var det: any = res;
      this.items = det.materials;
      this.totalunits = det.units;
      console.log(this.totalunits);
      this.taxesuni = det.taxesuni
      this.taxesdet = det.taxesdet
      for (let i = 0; i < this.myList.length; i++) {
        this.myList[i].units = this.totalunits.filter(a => a.recordId == this.myList[i].itemId);
      }
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
      leadid: this.leadId
    }
    this.admusrservice.getContact(contactForm).subscribe(
      (res) => {
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
        obj: this.quotationDetails,
        lines: lines,
        traCheck: this.traCheck,
        usr: this.adm.getUserCompleteInformation().usr
      }
      this.crmLead.AddCRMRxQuotation(req).subscribe(
        (res) => {
          this.getInfo()
          this.editQuotation(res.enquiryId, 3)
          if (this.traCheck == 1) {
            this.adm.showMessage('Quotation Added successfully!', "success", 1);
          }
          else if (this.traCheck == 2) {
            this.adm.showMessage('Quotation Updated successfully!', "success", 1);
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

      pdf.save('Quotation_' + this.quotationDetails.quotationId + '.pdf');
    });
  }
  public makeUnits(e, index: any) {
    var det = this.items.filter(a => a.recordId == e);
    // this.units = this.totalunits.filter(a => a.recordId == det[0].recordId);
    this.myList[index].units = this.totalunits.filter(a => a.recordId == det[0].recordId);
    if (det) {
      this.myList[index].itemId = det[0].recordId
      this.myList[index].itemCode = det[0].itemcode
      this.myList[index].itemName = det[0].itemname
      this.myList[index].unitPrice = Number(det[0].costPrice > 0 ? det[0].costPrice : 0)
      this.myList[index].uomId = Number(det[0].stdumId)
      this.uomName(det[0].stdumId, index)
    }
  }
  selectedTax(e: any, index: any) {
    let totalTax = 0
    var det = this.taxesdet.filter(a => a.recordId == e);
    var taxesuni = this.taxesuni.filter(a => a.recordId == e);
    det.map(a => totalTax += a.taxper)
    this.myList[index].taxName = taxesuni[0].taxName
    this.myList[index].taxId = taxesuni[0].recordId
    this.myList[index].taxpercentage = totalTax
    this.calculItemTotal(index)
  }
  uomName(e: any, index: any) {
    var det = this.myList[index].units.filter(a => a.umid == e);
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
    console.log(this.quotationDetails);
    this.quotationDetails.subtotal = subtotal
    this.quotationDetails.grandTotal =
      subtotal +
      Number(this.quotationDetails.additionalCharges || 0) +
      Number(this.quotationDetails.freightCharge || 0) +
      Number(this.quotationDetails.customsDuties || 0);
  }
  contactChanged(e) {
    var det = this.contactlst.filter(a => a.id == e);
    this.quotationDetails.contactId = Number(det[0].id)
    this.quotationDetails.contactName = det[0].firstName + " " + det[0].lastName
  }
  close() {
    this.enquiry = 1
    this.traCheck = 1
    this.myList = []
    this.quotationDetails = {
      quotationId: 0,
      contactName: "",
      contactId: 0,
      quotationDate: "",
      comments: "",
      quotationValidity: "",
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
    this.addquotation()
  }

  valCheck() {
    if (!this.quotationDetails.contactId) {
      this.adm.showMessage('Select Contact is Required', 'Warning', 3);
      return;
    }
    if (!this.quotationDetails.quotationDate) {
      this.adm.showMessage('Quotation Date is Required', 'Warning', 3);
      return;
    }
    if (!this.quotationDetails.comments) {
      this.adm.showMessage('Comments is Required', 'Warning', 3);
      return;
    }
    if (!this.quotationDetails.quotationValidity) {
      this.adm.showMessage('Quotation Validity is Required', 'Warning', 3);
      return;
    }
    if (this.myList.length == 0) {
      this.adm.showMessage('Minium One line is required', 'Warning', 3);
      return;
    }
    for (let i = 0; i < this.myList.length; i++) {
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

}
