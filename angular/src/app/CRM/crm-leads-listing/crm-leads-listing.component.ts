import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
@Component({
  selector: 'app-crm-leads-listing',
  templateUrl: './crm-leads-listing.component.html',
  styleUrls: ['./crm-leads-listing.component.scss']
})
export class CrmLeadsListingComponent implements OnInit {
  public leadcreateform: any = {
    id: 0,
    code: 0,
    customer: '',
    branchid: 0,
    customercode: 0,
    lead_group: '',
    status: '',
    lead_owner: 0,
    company: '',
    first_name: '',
    last_name: '',
    description: '',
    business_email: '',
    secondary_email: '',
    phonenumber: 0,
    alternate_number: 0,
    lead_status: 0,
    lead_source: 0,
    lead_stage: 0,
    website: '',
    industry: '',
    numberofemployees: '',
    annual_revenue: 0,
    rating: '',
    emailoutputformat: '',
    skypeid: '',
    title: '',
    phone: '',
    fax: '',
    twitter: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''

  }
  id: any;
  leads: any; // Define the type based on your leads structure
  leadmanagementform: any;
  public leadlisting: any = {
    branch_id: '',
    customer_code: ''
  }
  public displayColumns = {
    leadOwner: true,
    companyName: true,
    leadSource: true,
    leadStage: false,
    leadStatus: true,
    createdAt: true,
    industry: false,
    code: false,
    branchId: false,
    customerCode: false,
    status: false,
    firstName: true,
    lastName: true,
    businessEmail: true,
    secondaryEmail: false,
    leadGroup: false,
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
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  getPremiumData() {
    this.getLeads();
  }
  getlstdata() {
    this.leads = this.leads.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  public columnKeys = [
    { key: 'leadOwner', label: 'Lead Owner' },
    { key: 'companyName', label: 'Company Name' },
    { key: 'leadSource', label: 'Lead Source' },
    { key: 'leadStage', label: 'Lead Stage' },
    { key: 'leadStatus', label: 'Lead Status' },
     { key: 'createdAt', label: 'Creation Date' },
    { key: 'industry', label: 'Industry' },
    // { key: 'code', label: 'Code' },
    { key: 'branchId', label: 'Branch ID' },
    { key: 'customerCode', label: 'Customer Code' },
    // { key: 'status', label: 'Status' },
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
    // { key: 'rating', label: 'Rating' },
    // { key: 'emailOutputFormat', label: 'Email Output Format' },
    // { key: 'skypeId', label: 'Skype ID' },
    // { key: 'leadGroup', label: 'Lead Main Group' },
  ];


  constructor(
    private par: PartyDetailsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private acc: AccAccountsService,
    private adm: AdminGeneralInfoService,
    private hrd: HrdEmployeesService
  ) { }

  ngOnInit(): void {
    this.getLeads(); // Fetch leads on component initialization 
    // this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id) {
    //   this.edit(this.id);
    // }
    this.getcrmleadowner();
    this.loadEmployees(); // Load employees for the dropdown

  }
  lstleadownerdt: any;
  getcrmleadowner() {
    var usr = this.adm.getUserCompleteInformation().usr;
    this.leadcreateform.branch_id = usr.bCode;
    this.leadcreateform.customer_code = usr.cCode;
    this.acc.getcrmleadowner(this.leadcreateform).subscribe(res => {
      this.lstleadownerdt = res;
    })
  }
  onCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    for (let a of this.leads) {
      a.checkvalue = isChecked
    }
  }

  // Redirect to CRMLeadView with lead ID
  // contactview(id: any): void {
  //   this.router.navigate(['crmleadview', id]); // Navigate to crmleadview with the leadId
  // }


  loadEmployees(): void {
    this.hrd.getHRDEmployeesbyDepartment().subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees); // Debugging output
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  getLeads(): void {
    this.spinner.show(); // Show spinner while loading data
    var usr = this.adm.getUserCompleteInformation().usr;
    this.leadlisting.branch_id = usr.bCode;
    this.leadlisting.customer_code = usr.cCode;
    this.acc.GetCRMAllLeads(this.leadlisting).subscribe(
      (res) => {
        console.log(res); // Debugging the response
        this.leads = res; // Store the leads in the component
        this.collectionSize = this.leads.length;
        this.getlstdata();
        this.spinner.hide(); // Hide the spinner once data is loaded
      },
      (error) => {
        console.error('Error fetching leads:', error); // Log any errors
        this.toastr.error('Error fetching leads'); // Show error message to the user
        this.spinner.hide(); // Hide the spinner in case of error
      }
    );
  }
  assignto(obj:any){
    this.leadcreateform.lead_owner=obj;
  }
  employees: any;
  lstleadowner: any;
  selectedOwner: any = 0;
  updateleadOwner() {
    const usr = this.adm.getUserCompleteInformation().usr;
    const obj = {
      Leads: [],
      CustomerCode: usr.cCode,
      AssignTo: Number(this.leadcreateform.lead_owner),
    };
  
    for (let a of this.leads) {
      if (a.checkvalue) {
        obj.Leads.push(a.id);
      }
    }
  
    if (obj.Leads.length === 0) {
      this.adm.showMessage('Select at least one Lead', 'Warning', 3);
      return;
    }
  
    if (!obj.AssignTo) {
      this.adm.showMessage('Select Lead Owner', 'Warning', 3);
      return;
    }
  
    console.log('Assigning leads to:', obj);
    this.acc.updateassignleadowners(obj).subscribe((res) => {
      this.adm.showMessage('Assigned leads updated successfully', 'success', 1);
    });
  }
 
  

  // Method to delete a lead
  deleteLead(leadId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this lead?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.spinner.show(); // Show spinner during delete operation
        this.par.deleteLead(leadId).subscribe(
          (res) => {
            console.log('Lead deleted successfully', res);
            this.getLeads(); // Refresh the list after deletion
            this.toastr.success('Lead deleted successfully');
            this.spinner.hide();
          },
          (error) => {
            console.error('Error deleting lead', error);
            this.toastr.error('An error occurred while deleting the lead. Please try again.');
            this.spinner.hide(); // Hide spinner if error occurs
          }
        );
      }
    });
  }

  // Method to edit an existing lead
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

  
}
