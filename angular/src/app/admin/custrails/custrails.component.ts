import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
@Component({
  selector: 'app-custrails',
  templateUrl: './custrails.component.html',
  styleUrls: ['./custrails.component.scss']
})
export class CustrailsComponent implements OnInit {
  custtrails:any;

  constructor(private service:AdmUsersService) { }
  public pageno:number=1;
  public PAGESIZE:number=1;
  public totalpages:number=1;
  page4=1;
  
  ngOnInit(): void {
    this.gettrailsdetails();
    this.loadPage(1);
    
  }
  loadPage(event)
{
  if(event)
  {
  this.pageno=event;
  this.page4=event;
  }
  else
  {
    this.pageno=1;
    this.page4=1;
  }
  console.log('Event',event);
  // debugger;
  // this.totalpages=this.custtrails.length/this.PAGESIZE*10;
    
}
  gettrailsdetails(){
    this.service.getRegistrationDetailstrails().subscribe(res=>{
      debugger;
      console.log(res);
      this.custtrails=res;
    })
  }

}
