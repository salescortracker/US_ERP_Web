import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ExcelConverterService } from 'app/services/crm/excel-converter.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-inv-bulk-upload',
  templateUrl: './inv-bulk-upload.component.html',
  styleUrls: ['./inv-bulk-upload.component.scss']
})
export class InvBulkUploadComponent implements OnInit {

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
    link.href = `../../../assets/bulkupload/Material_bulk_upload.xlsx`;
    link.download = 'Material_Bulk_Upload.xlsx';
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
    // this.par.materialsBulkUpload(this.uploadedData).subscribe(res => {
    //   this.spinner.hide();
    //   console.log(res)
    //   this.adm.showMessage("Leads Uploaded Successfully","success",1);
    //   this.router.navigate(['/inventory/invitemstra']);
    // });
  }
  addmandatoryfields(obj: any) {
    var u = this.adm.getUserCompleteInformation().usr;
    obj.forEach((a) => {
      a.cCode = u.cCode
      a.bCode = u.bCode
      a.partyType = "CUS"
      a.customerGroup = 106
      a.contactMobile = String(a.contactMobile)
    })
    return obj
  }

}
