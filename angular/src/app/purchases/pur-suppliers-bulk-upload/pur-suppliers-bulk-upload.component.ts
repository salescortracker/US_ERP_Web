import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ExcelConverterService } from 'app/services/crm/excel-converter.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-pur-suppliers-bulk-upload',
  templateUrl: './pur-suppliers-bulk-upload.component.html',
  styleUrls: ['./pur-suppliers-bulk-upload.component.scss']
})
export class PurSuppliersBulkUploadComponent implements OnInit {

  constructor(
    private excelRead: ExcelConverterService,
    private adm: AdminGeneralInfoService,
    private par:PartyDetailsService,
    private router: Router,
    private  spinner:NgxSpinnerService
  ) { }
  ngOnInit(): void {
  }
  uploadPage = 0
  uploadedData: any;
  downloadFile() {
    const link = document.createElement('a');
    link.href = `../../../assets/bulkupload/suppliers_bulk_upload.xlsx`;
    link.download = 'suppliers_Bulk_Upload.xlsx';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.excelRead.readExcel(file)
        .then(data => {
          this.uploadedData = this.addmandatoryfields(data);
          console.log(this.uploadedData);
          this.uploadPage = 1
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  uploadData() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    // this.par.partyBulkUpload(this.uploadedData).subscribe(res => {
    //   this.spinner.hide();
    //   console.log(res)
    //   this.adm.showMessage("Supplier Uploaded Successfully","success",1);
    //   this.router.navigate(['/purchases/pursuppliers']);
    // });
  }
  addmandatoryfields(obj: any) {
    var u = this.adm.getUserCompleteInformation().usr;
    obj.forEach((a) => {
      a.cCode = u.cCode
      a.bCode = u.bCode
      a.partyType = "SUP"
      a.customerGroup = 101
      a.contactMobile = String(a.contactMobile)
    })
    return obj
  }
}
