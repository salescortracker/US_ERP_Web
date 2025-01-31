// import { Component, OnInit } from '@angular/core';
// import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
// import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
// import { Router } from '@angular/router';
// import { PartyDetailsService } from 'app/services/accounts/party-details.service';
// import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
// import { number } from 'ngx-custom-validators/src/app/number/validator';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2';
// import { ActivatedRoute } from '@angular/router';
// import { data } from 'app/shared/data/smart-data-table';
// import { InvMastersService } from 'app/services/inventory/inv-masters.service';
// import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
// import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';

interface Event {
  EventTitle: string;
  EventTime: string;
  EventQuests: string;
  MeetingLink: string;
  MeetingLocation: string;
  date: string;
  LeadId:number
}

interface CalendarDay {
  date: number;
  isCurrent: boolean;
  isToday: boolean;
  events: Event[];
}
@Component({
  selector: 'app-cus-events',
  templateUrl: './cus-events.component.html',
  styleUrls: ['./cus-events.component.scss']
})
export class CusEventsComponent implements OnInit {
  @Input() childData:any
leadId: any  
  newEvent=false
  currentEvent: any = {
    eventTitle: '',
    eventTime: '',
    EventGuests: '',
    meetingLink: '',
    MeetingLocation: '',
    customer_id:0
  };
  id: any;
  employees: ArrayBuffer;
  
  
  constructor(
    private route: ActivatedRoute,private admusrservice:AccAccountsService,private adm:AdminGeneralInfoService,private hrd:HrdEmployeesService,
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if(this.childData>0){
      this.leadId=this.childData;
    
    }
    this.getEvents();
    this.loadEmployees();
  }

  saveEvents(): void {
    debugger;
    var usr = this.adm.getUserCompleteInformation().usr;
    this.currentEvent.branchId = usr.bCode;
    this.currentEvent.customerCode = usr.cCode;
    this.currentEvent.customer_id=this.leadId;
    if(this.eventCheck()){
    if (this.currentEvent.id > 0) {
      this.admusrservice.updateEvents(this.currentEvent).subscribe(
        response => {
          console.log('Event updated successfully', response);
          alert('Event updated successfully!');
         
          this.getEvents(); 
          this.newEvent = false; // Refresh data or calendar
        },
        error => {
          console.error('Error updating Event', error);
          alert('Error updating Event. Please try again.');
        }
      );
    } else {
      this.admusrservice.saveEvents(this.currentEvent).subscribe(
        response => {
          this.getEvents();
            console.log('Event saved successfully:', response);
            alert('Event saved successfully!');
            this.newEvent = false; // Refresh data or calendar
        },
        error => {
            console.error('Error saving Event:', error);
        }
    );
    this.getEvents();
    this.newEvent = false; 
  }
}
  
  }

  editEvent(data:any) {
    this.currentEvent.id = data;
    this.admusrservice.getEventsById(this.currentEvent).subscribe(
      (res: any) => {
        this.currentEvent = {
          id: res.id,
          eventTitle: res.eventTitle,
          eventTime: res.eventTime,
          MeetingLocation: res.meetingLocation,
          EventGuests: res.eventGuests,
          meetingLink: res.meetingLink
        };
        this.newEvent = true; // Open the form
        console.log('Editing event details:', this.currentEvent);
      },
      (error) => {
        alert('An error occurred while fetching event details.');
        console.error('Fetch error', error);
      }
    );
  }
  
    selectedDayEvents:any;
  
    getEvents() {
      debugger;
  
      var usr = this.adm.getUserCompleteInformation().usr;
  
      this.currentEvent = {
        branchId: usr.bCode,
        customerCode: usr.cCode,
        customer_id:this.leadId
      };
      this.admusrservice.getEvents(this.currentEvent).subscribe(
        (res) => {
         
          this.selectedDayEvents = res; 
        },
  
   
        (error) => {
          console.error('Error fetching event:', error);
        }
      );
    
    }
   
    deleteEvent(data: any){
      debugger;
         this.currentEvent.id = data;
         var usr = this.adm.getUserCompleteInformation().usr;
         this.currentEvent.branchId = usr.bCode;
         this.currentEvent.customerCode = usr.cCode;
         if (confirm('Are you sure you want to delete this event?')) {
           this.admusrservice.deleteEvents(this.currentEvent).subscribe(
             (res: any) => {
              this.getEvents();
               console.log('event deleted successfully', res);
            
             },
              );
         }
         else{
          error => {
               console.error('Error deleting event', error);
               
               alert('An error occurred while deleting the event. Please try again.');
             }
         
         }
         this.getEvents();
       }
  
       loadEmployees(): void {
        debugger;
        this.hrd.getHRDEmployees().subscribe(
          (data) => {
            this.employees = data;
          },
          (error) => {
            console.error('Error fetching employees:', error);
          }
        );
      }
      
  eventCheck() {
    console.log(this.currentEvent);
    if (!this.currentEvent.eventTitle ) {
      this.adm.showMessage('Event Title is Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.eventTime ) {
      this.adm.showMessage('Event Time is Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.EventGuests ) {
      this.adm.showMessage('Event Guests Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.meetingLink) {
      this.adm.showMessage('Meeting Link Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.MeetingLocation) {
      this.adm.showMessage('Meeting Location Required', 'Warning', 3);
      return;
    }
    return true
  }
}



