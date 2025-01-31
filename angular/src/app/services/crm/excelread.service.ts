import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class ExcelreadService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  readExcel(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = (event: any) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        resolve(jsonData);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  public getCustomeruploads(data:any)
  {
    
    return this.http.post(this.adm.getActualURL() + "api/PartyDetails/bulkupload",data,this.adm.makeConfig());
  }

}
