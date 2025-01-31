import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { CrmDiscountListService } from 'app/services/crm/crm-discount-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crm-add-leads',
  templateUrl: './crm-add-leads.component.html',
  styleUrls: ['./crm-add-leads.component.scss']
})
export class CrmAddLeadsComponent implements OnInit {
  statuses = ['1', '2', '3']; // Populate this array with real status values
  leadStatuses = ['1', '2', '3']; // Populate this array with real lead status values
  leadSources = ['1', '2', '3']; // Populate this array with real lead source values
  leadStages = ['1', '2', '3']; // Populate this array with real lead stages
  industries = ['1', '2', '3']; // Populate this array with real industry values


  // Initialize leadmanagementform object with necessary properties
  public leadmanagementform: any = {
    code: '',
    customer: '',
    branchId: '',
    customerCode: '',
    leadGroup: 0,
    status: '',
    leadOwner: 0,
    company: '',
    firstName: '',
    lastName: '',
    businessEmail: '',
    secondaryEmail: '',
    phoneNumber: '',
    alternateNumber: '',
    leadStatus: 0,
    leadSource: 0,
    leadStage: 0,
    description: '',
    website: '',
    industry: 0,
    numberOfEmployees: '',
    annualRevenue: '',
    rating: '',
    emailOutputFormat: '',
    skypeId: ''
  };
  

  constructor(
    private par: PartyDetailsService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router, // Inject Router
    private spinner: NgxSpinnerService
  ) {
    // this.id = this.route.snapshot.params['id']; 
    //  this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   console.log(+params['id']);
      this.id=this.route.snapshot.paramMap.get('id');
  // }); 
  }

  ngOnInit(): void {
    // this.initializeForm();
    console.log(this.id);
   
    this.getHrdEmployees(); // Call method to fetch HRD employees when component initializes
    this.getLeadGroups();
    this.getLeadStatus();
    this.getLeadSource();
    this.getLeadStage();
    this.getIndustry();
    this.edit(this.id)
  }
  
  id: any;
  employeesList:any;
  leadGroupsList:any;
  leadStatusList:any;
  leadSourceList:any;
  leadStageList:any;
  industryList:any;


// Method to fetch HRD employees from the backend
getHrdEmployees(): void {
  this.par.getHrdEmployees().subscribe(
    (data) => {
      console.log(data);
      this.employeesList = data; // Assign fetched data to employeesList
    },
    (error) => {
      console.error('Error fetching HRD employees:', error); // Log error if any
    }
  );
}
  
// Method to fetch Lead Groups from the backend
getLeadGroups(): void {
  this.par.getLeadGroups().subscribe(
    (data) => {
      console.log(data);
      this.leadGroupsList = data; // Assign fetched data to leadGroupsList
    },
    (error) => {
      console.error('Error fetching Lead Groups:', error); // Log error if any
    }
  );
}


// Method to fetch Lead Status from the backend
getLeadStatus(): void {
  this.par.getAllLeadStatus().subscribe(
    (data) => {
      console.log(data);
      this.leadStatusList = data; // Assign fetched data to leadStatusList
    },
    (error) => {
      console.error('Error fetching Lead Status:', error); // Log error if any
    }
  );
}

// Method to fetch Lead Source from the backend
getLeadSource(): void {
  this.par.getAllLeadSource().subscribe(
    (data) => {
      console.log(data);
      this.leadSourceList = data; // Assign fetched data to leadSourceList
    },
    (error) => {
      console.error('Error fetching Lead Source:', error); // Log error if any
    }
  );
}

// Method to fetch Lead Stage from the backend
getLeadStage(): void {
  this.par.getAllLeadStage().subscribe(
    (data) => {
      console.log(data);
      this.leadStageList = data; // Assign fetched data to leadStageList
    },
    (error) => {
      console.error('Error fetching Lead Stage:', error); // Log error if any
    }
  );
}

// Method to fetch Industry from the backend
getIndustry(): void {
  this.par.getAllIndustry().subscribe(
    (data) => {
      console.log(data);
      this.industryList = data; // Assign fetched data to industryList
    },
    (error) => {
      console.error('Error fetching Industry:', error); // Log error if any
    }
  );
}



  // Method to save lead
  saveLead() {
    if (this.id > 0) {
      this.leadmanagementform.id=+this.id;
      this.par.updateLead(this.leadmanagementform).subscribe(
        (response) => {
          this.toastr.success('Lead updated successfully!');
          this.router.navigate(['/crm/LeadsListing']);
        },
        (error) => {
          this.toastr.error('Error updating Lead');
          console.error('Update Lead error:', error);
        }
      );
    }
     else 
    {
      this.par.saveLead(this.leadmanagementform).subscribe(
        (res: any) => {
          console.log(res.data);
          this.toastr.success(res.message);
          this.leadmanagementform = {}; // Reset form after successful save

          // Redirect to the listing page after saving
          this.router.navigate(['/crm/LeadsListing']); // Change '/lead-list' to your actual route
        },
        (error) => {
          this.toastr.error('An error occurred while saving the lead. Please try again.');
          console.error('Save lead error:', error);
        }
      );
  }
}

edit(id: any) {
  this.spinner.show(); // Show spinner while fetching data
  this.par.getLeadById(id).subscribe(
    (res: any) => {
      // Assuming `res` contains the lead data
      this.leadmanagementform = {
        leadOwner: res.leadOwner,
        company: res.company,
        leadSource: res.leadSource,
        leadStage: res.leadStage,
        leadStatus: res.leadStatus,
        createdAt: res.createdAt,
        industry: res.industry,
        code: res.code,
        branchId: res.branchId,
        customerCode: res.customerCode,
        status: res.status,
        customer:res.customer,
        firstName: res.firstName,
        lastName: res.lastName,
        businessEmail: res.businessEmail,
        secondaryEmail: res.secondaryEmail,
        leadGroup: res.leadGroup,
        phoneNumber: res.phoneNumber,
        alternateNumber: res.alternateNumber,
        description: res.description,
        website: res.website,
        numberOfEmployees: res.numberOfEmployees,
        annualRevenue: res.annualRevenue,
        rating: res.rating,
        emailOutputFormat: res.emailOutputFormat,
        skypeId: res.skypeId
      };
      this.id = id; // Set the ID for updating
      this.spinner.hide(); // Hide spinner once data is loaded
    }
  );
}
}
