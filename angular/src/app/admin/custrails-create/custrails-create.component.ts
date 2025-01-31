import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { email } from 'ngx-custom-validators/src/app/email/validator';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-custrails-create',
  templateUrl: './custrails-create.component.html',
  styleUrls: ['./custrails-create.component.scss']
})
export class CustrailsCreateComponent implements OnInit {
 public mobile:any;
 public expDate:any;
  companyName:any;
  id:any;
  public custtrails:any={
    expDate:'',
    mobile:'',
    nooflogins:'',
    dispatch_email:'',
    addr:'',
    city:'',
    country:'',
    customer:'',
    dat:'',
    district:'',
    email:'',
    fax:'',
    headcount:'',
    industry:'',
    location:'',
    mode:'',
    ownerEmail:'',
    ownerName:'',
    pocEmail:'',
    pocName:'',
    product:'',
    regDate:'',
    stat:'',
    websiteUrl:'',
    zip:'',
    tel:'',
    companyName:'',
   CustomerId:'',
  };
  constructor(private acivatedroute:ActivatedRoute,private menuserv:AdmUsersService,private adm:AdminGeneralInfoService,private router:Router) { this.id = this.acivatedroute.snapshot.queryParams['id']}
  trailform:any;
  ngOnInit(): void {
  
  
   this.getcusttrailregistrations();
  }
  resdet:any;
  getcusttrailregistrations(){
    this.menuserv.getRegistrationDetailsGetcustcode(this.id).subscribe(res=>{
      debugger;
      console.log(res);
      this.resdet=res;
      this.companyName=this.resdet.companyName;
      this.custtrails.companyName=this.resdet.companyName;
      this.custtrails.mobile=this.resdet.contactNo;
      this.custtrails.expDate=this.formatdate(new Date(this.resdet.expDate));
      this.custtrails.nooflogins=this.resdet.noofLogins;
      this.custtrails.dispatch_email=this.resdet.dispatch_email;
       this.custtrails.addr=this.resdet.addr;
       this.custtrails.city=this.resdet.city;
       this.custtrails.country=this.resdet.country;
       this.custtrails.customer=this.resdet.customer;
       this.custtrails.dat=this.resdet.dat;
       this.custtrails.district=this.resdet.district;
       this.custtrails.email=this.resdet.email;
       this.custtrails.fax=this.resdet.fax;
       this.custtrails.headcount=this.resdet.headCount;
       this.custtrails.industry=this.resdet.industry;
       this.custtrails.location=this.resdet.location;
       this.custtrails.mode=this.resdet.mode;
       this.custtrails.ownerEmail=this.resdet.ownerEmail;
       this.custtrails.ownerName=this.resdet.ownerName;
       this.custtrails.pocEmail=this.resdet.pocEmail;
       this.custtrails.pocName=this.resdet.pocName;
       this.custtrails.product=this.resdet.product;
       this.custtrails.regDate=this.formatdate(new Date(this.resdet.regDate));
       this.custtrails.stat=this.resdet.stat;
       this.custtrails.websiteUrl=this.resdet.websiteURL;
       this.custtrails.zip=this.resdet.zip;
       this.custtrails.tel=this.resdet.tel;
       this.custtrails.CustomerId=+this.id;
       
       
    });
  }
  formatdate(date:any){
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    var fulldate=(year+"-"+(month>9? month:"0"+month)+'-'+(day>9? day:"0"+day))
    return fulldate;
  }
  
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
  updateRegTrails(){
    this.menuserv.UpdateRegistrationTrails(this.custtrails).subscribe(res=>{
this.router.navigate(['/admin/custrails']);
this.adm.showMessage("Record Updated Successfully","success",1);
    });
  }

}
