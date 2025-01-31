import { Component,Input, OnInit } from '@angular/core';
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
  LeadId: number
}

interface CalendarDay {
  date: number;
  isCurrent: boolean;
  isToday: boolean;
  events: Event[];
}
@Component({
  selector: 'app-leadview-events',
  templateUrl: './leadview-events.component.html',
  styleUrls: ['./leadview-events.component.scss']
})
export class LeadviewEventsComponent implements OnInit {
    @Input() childData:any
  leadId: any
  newEvent = false
  currentEvent: any = {
    eventTitle: '',
    eventTime: '',
    EventGuests: '',
    meetingLink: '',
    MeetingLocation: '',
    leadid: 0
  };
  id: any;
  employees: any;


  constructor(
    private route: ActivatedRoute, 
    private admg: AdminGeneralInfoService,private admusrservice: AccAccountsService, private adm: AdminGeneralInfoService, private hrd: HrdEmployeesService,
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
    this.currentEvent.leadid = this.leadId;
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

  editEvent(data: any) {
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

  selectedDayEvents: any;

  getEvents() {
    debugger;

    var usr = this.adm.getUserCompleteInformation().usr;

    this.currentEvent = {
      branchId: usr.bCode,
      customerCode: usr.cCode,
      leadid: this.leadId
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

  deleteEvent(data: any) {
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
    else {
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
      this.admg.showMessage('Event Title is Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.eventTime ) {
      this.admg.showMessage('Event Time is Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.EventGuests ) {
      this.admg.showMessage('Event Guests Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.meetingLink) {
      this.admg.showMessage('Meeting Link Required', 'Warning', 3);
      return;
    }
    if (!this.currentEvent.MeetingLocation) {
      this.admg.showMessage('Meeting Location Required', 'Warning', 3);
      return;
    }
    return true
  }
}
