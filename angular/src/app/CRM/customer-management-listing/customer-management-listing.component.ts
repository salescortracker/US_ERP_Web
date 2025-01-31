// customer-management-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-customer-management-listing',
  templateUrl: './customer-management-listing.component.html',
  styleUrls: ['./customer-management-listing.component.scss']
})
export class CustomerManagementListingComponent implements OnInit {

  leads: any[] = []; // All customer data
  displayCustomers: any[] = []; // Paginated customer data
  page = 1;
  pageSize = 5;
  collectionSize = 0;

  id:any;
  // leads: any; // Define the type based on your leads structure
  leadmanagementform:any;
  public leadlisting:any={
    branch_id:'',
    customer_code:''
  }
  public displayColumns = {
    leadOwner: true,
    companyName: true,
    leadSource: true,
    leadStage: false,
    leadStatus: true,
    createdAt: false,
    industry: false,
    code: false,
    branchId: false,
    customerCode: false,
    status: false,
    firstName: true,
    lastName: true,
    businessEmail: true,
    secondaryEmail: false,
    leadGroup:false,
    phoneNumber: false,
    alternateNumber: false,
    description: false,
    website: false,
    numberOfEmployees: false,
    annualRevenue: false,
    rating: false,
    emailOutputFormat: false,
    skypeId: false,
};

public columnKeys = [
    { key: 'leadOwner', label: 'Lead Owner' },
    { key: 'companyName', label: 'Company Name' },
    { key: 'leadSource', label: 'Lead Source' },
    { key: 'leadStage', label: 'Lead Stage' },
    { key: 'leadStatus', label: 'Lead Status' },
    { key: 'createdAt', label: 'Creation Date' },
    { key: 'industry', label: 'Industry' },
    { key: 'code', label: 'Code' },
    { key: 'branchId', label: 'Branch ID' },
    { key: 'customerCode', label: 'Customer Code' },
    { key: 'status', label: 'Status' },
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'businessEmail', label: 'Business Email' },
    { key: 'secondaryEmail', label: 'Secondary Email' },
    { key: 'phoneNumber', label: 'Phone Number' },
    { key: 'alternateNumber', label: 'Alternate Number' },
    { key: 'description', label: 'Description' },
    { key: 'website', label: 'Website' },
    { key: 'numberOfEmployees', label: 'Number of Employees' },
    { key: 'annualRevenue', label: 'Annual Revenue' },
    { key: 'rating', label: 'Rating' },
    { key: 'emailOutputFormat', label: 'Email Output Format' },
    { key: 'skypeId', label: 'Skype ID' },
    { key: 'leadGroup', label: 'Lead Main Group' },
];

    customerlisting: any;

  constructor(
    private par: PartyDetailsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private acc:AccAccountsService,
    private adm:AdminGeneralInfoService
  ) {}

  ngOnInit(): void {
    this.getCustomers(); // Fetch leads on component initialization
  }

  getCustomers(): void {
    const usr = this.adm.getUserCompleteInformation().usr;
    const customerData = {
      branch_id: usr.bCode,
      customer_code: usr.cCode,
    };

    this.spinner.show();
    this.acc.getCRMAllCustomers(customerData).subscribe(
      (res: any[]) => {
        this.leads = res;
        this.collectionSize = this.leads.length;
        this.refreshCustomers();
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching customers:', error);
        this.toastr.error('Error fetching customers');
        this.spinner.hide();
      }
    );
  }

  // // Method to edit an existing lead
edit(id: any) {
  
  this.spinner.show(); // Show spinner while fetching data
  this.par.getLeadById(id).subscribe(
    (res: any) => {
      this.id = id; // Set the ID for updating
      this.router.navigate(['/crm/AddLeads', id]); // Navigate to the editing route
      this.spinner.hide(); // Hide spinner once data is loaded
    },
    (error) => {
      console.error('Error fetching lead details:', error);
      this.toastr.error('Error fetching lead details');
      this.spinner.hide(); // Hide the spinner in case of error
    }
 );
}

  refreshCustomers(): void {
    this.displayCustomers = this.leads.slice(
      (this.page - 1) * this.pageSize,
      this.page * this.pageSize
    );
  }

}
