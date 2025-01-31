import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-crm-contact-view',
  templateUrl: './crm-contact-view.component.html',
  styleUrls: ['./crm-contact-view.component.scss']
})
export class CrmContactViewComponent implements OnInit {

  id: any; // Lead ID
  leads: any;
 

  constructor(
    private par: PartyDetailsService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.id = this.route.snapshot.params['id']; // Capture the ID from the route
  }

  ngOnInit(): void {
    this.getLeads();     // Fetch lead details based on the ID
    // this.getRequiredData(); // Fetch the required data when the component initializes
    // this.leads = this.route.snapshot.paramMap.get('id');
    // this.id = this.route.snapshot.params['id']; // Capture the ID from the route
    // this.getLeadDetails(); // Fetch lead details based on the ID
    this.getRequiredData(); // Fetch the required data when the component initializes
  }

  // // Fetch lead details based on lead ID
  // getLeadDetails() {
  //   this.spinner.show(); // Show loading spinner
  //   this.par.getLeadById(this.id).subscribe(
  //     (res) => {
  //       if (res.status) {
  //         this.leads = res.data; // Assuming the response contains an array of data
  //         console.log('Lead Details:', this.id);
  //       } else {
  //         this.toastr.error('Failed to fetch lead details');
  //       }
  //       this.spinner.hide(); // Hide spinner after fetching
  //     },
  //     (error) => {
  //       console.error('Error fetching lead details:', error);
  //       this.toastr.error('Error fetching lead details');
  //       this.spinner.hide(); // Hide spinner in case of error
  //     }
  //   );
  // }

  getLeads(): void {
    const leadId = this.route.snapshot.params['id']; // Get lead ID from route parameters
    this.spinner.show(); // Show spinner while loading data
    this.par.getAllLeads().subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.leads = res; // Store the leads in the component
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching leads:', error); // Log any errors
        this.toastr.error('Error fetching leads'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }
    // Fetch lead details, stages, and statuses
    getRequiredData(): void {
      this.spinner.show(); // Show loading spinner
      this.par.getLeadById(this.id).subscribe(
        (res) => {
          if (res.status) {
            this.leads = res.data[0]; // Assign the data from the API response
            console.log('Lead Details:', this.leads);
          }
          this.spinner.hide(); // Hide spinner after fetching
        },
        (error) => {
          console.error('Error fetching lead details:', error);
          this.toastr.error('Error fetching lead details');
          this.spinner.hide(); // Hide spinner if there is an error
        }
      );
    }

}
