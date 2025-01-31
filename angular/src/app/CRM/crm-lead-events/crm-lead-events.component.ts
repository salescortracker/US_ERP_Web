import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm-lead-events',
  templateUrl: './crm-lead-events.component.html',
  styleUrls: ['./crm-lead-events.component.scss']
})
export class CrmLeadEventsComponent {

// Variables to handle the current month, year, and calendar days

// Variables for managing the event form and modal
showModal: boolean = false;
currentEvent: any = {
  EventTitle: '',
  EventTime: '',
  EventGuests: '',
  MeetingLink: '',
  MeetingLocation: ''
};
selectedDay: any;
guests: string[] = ['John Doe', 'Jane Doe', 'Alice', 'Bob']; // Example guest list

constructor() {
  const today = new Date();
   this.currentMonth = today.getMonth();
   this.currentYear = today.getFullYear();
 
  
}

// Calendar Data
currentMonth: number;
currentYear: number;
months: string[] = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
calendarDays: any[] = []; // This will hold the days to display in the calendar




// Generate days for the calendar
//  generateCalendarDays(): void {
//    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
//    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
//    const today = new Date();
//    const isToday = (year: number, month: number, day: number) =>
//      today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

//    this.calendarDays = [];
//    for (let i = 0; i < firstDay; i++) {
//      this.calendarDays.push({ date: '', isCurrent: false, isToday: false, events: [] });
//    }

//    for (let day = 1; day <= daysInMonth; day++) {
//      this.calendarDays.push({
//        date: day,
//        isCurrent: true,
//        isToday: isToday(this.currentYear, this.currentMonth, day),
//        events: [] // You can populate this with actual events
//      });
//    }
//  }


generateCalendarDays(): void {
 const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
 const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
 
 this.calendarDays = [];
 
 for (let i = 0; i < firstDay; i++) {
   this.calendarDays.push({ date: '', isCurrent: false, isToday: false, events: [] });
 }

 for (let day = 1; day <= daysInMonth; day++) {
   this.calendarDays.push({
     date: day,
     isCurrent: true,
     isToday: (this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth() && day === new Date().getDate()),
     events: [] // Placeholder for events
   });
 }
}
ngOnInit(): void {
  this.generateCalendarDays();//added
}
// Navigate to the previous month
prevMonth(): void {
  if (this.currentMonth === 0) {
    this.currentMonth = 11;
    this.currentYear--;
  } else {
    this.currentMonth--;
  }
  this.generateCalendarDays();
}

// Navigate to the next month
nextMonth(): void {
  if (this.currentMonth === 11) {
    this.currentMonth = 0;
    this.currentYear++;
  } else {
    this.currentMonth++;
  }
  this.generateCalendarDays();
}

// Handle day selection
selectDay(day: any): void {
  if (day.isCurrent) {
    this.selectedDay = day;
    this.showModal = true;
  }
}

// Open modal
openModal(): void {
  this.showModal = true;
}

// Close modal
closeModal(): void {
  this.showModal = false;
  this.resetCurrentEvent();
}

// Reset current event form
resetCurrentEvent(): void {
  this.currentEvent = {
    eventTitle: '',
    eventTime: '',
    guests: '',
    meetingLink: '',
    location: ''
  };
}
// Delete an event
deleteEvent(event: any, e: Event) {
  e.stopPropagation(); // Prevent the calendar day click from closing the modal
  const index = this.selectedDay.events.indexOf(event);
  if (index > -1) {
    this.selectedDay.events.splice(index, 1);
  }
}

saveEvents(){

}

}
