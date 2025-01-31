import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { ToastrService } from 'ngx-toastr';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
@Component({
  selector: 'app-cus-contacts',
  templateUrl: './cus-contacts.component.html',
  styleUrls: ['./cus-contacts.component.scss']
})
export class CusContactsComponent implements OnInit {

  leadId: any
  newContact = false

  contactForm: any = {
    id: 0,
    customer_id: 0,
    // leadName: '',
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    primaryContact:false,
    designation: "",
    location: ""
  };
  constructor(
    private route: ActivatedRoute,
    private adm: AdmUsersService,
    private admg: AdminGeneralInfoService,
    private acc: AccAccountsService
  ) {
    this.leadId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getcontacts();
  }

  ContactCheck() {
    console.log(this.contactForm);
    if (this.contactForm.firstName == "") {
      this.admg.showMessage('First Name is Required', 'Warning', 3);
      return;
    }
    if (this.contactForm.lastName == "") {
      this.admg.showMessage('Last Name is Required', 'Warning', 3);
      return;
    }
    if (this.contactForm.email == "") {
      this.admg.showMessage('Email is Required', 'Warning', 3);
      return;
    }
    if (!this.contactForm.mobile) {
      this.admg.showMessage('Mobile is Required', 'Warning', 3);
      return;
    }
    if (!this.isValidEmail(this.contactForm.email)) {
      this.admg.showMessage('Enter Valid email', 'Warning', 3);
      return;
    }
    return true
  }
  editcontact(data: any) {
    this.newContact = true;
    this.contactForm.id = data;
    console.log('Editing contact with ID:', data);


    this.acc.getContactById(this.contactForm).subscribe(
      (res: any) => {
        console.log('Response from getContactById:', res);
        this.contactForm = {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          mobile: res.mobile,
          email: res.email,
          designation: res.designation,
          location: res.location,
          primaryContact: res.primaryContact,
        };


        console.log('Contact Form after fetching details:', this.contactForm);
      },
      (error) => {
        alert('An error occurred while fetching the contact details.');
        console.error('Error fetching contact details:', error);
      }
    );
  }


  delete(data: any) {
    debugger;
    this.contactForm.id = data;

    if (confirm('Are you sure you want to delete this contact?')) {
      this.acc.deleteContact(this.contactForm.id).subscribe(
        (res: any) => {
          console.log('Contact deleted successfully', res);
          this.getcontacts();
          // Remove the deleted contact from the list
          this.contactlst = this.contactlst.filter(contact => contact.id !== this.contactForm.Id);
          this.admg.showMessage('Contact deleted successfully!', "success", 1)
          // Show a success message (Optional: Use Toastr or Alert)

        },
        error => {
          console.error('Error deleting Contact', error);
          alert('An error occurred while deleting the Contact. Please try again.');
        }
      );
    }
    this.getcontacts();
  }
  letterOnly(event) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
  saveContact() {
    var usr = this.admg.getUserCompleteInformation().usr;
    this.contactForm.branchId = usr.bCode;
    this.contactForm.customerCode = usr.cCode;
    this.contactForm.customer_id = this.leadId;
    if (this.ContactCheck()) {
      if (this.contactForm.id > 0) {
        this.acc.updateContact(this.contactForm).subscribe(
          response => {
            this.resetcontact();
            this.getcontacts();
            this.newContact = false;
            console.log('Enquiry updated successfully', response);
            this.admg.showMessage('Contact updated successfully!', "success", 1);

          },
          error => {
            console.error('Error updating enquiry', error);
          }
        );
      } else {
        this.acc.saveContact(this.contactForm).subscribe(
          response => {
            this.resetcontact();
            this.getcontacts();
            console.log('Contact saved successfully', response);
            this.admg.showMessage('Contact saved successfully!', "success", 1);
            this.newContact = false;

          },
          error => {
            if (error.status === 400) {
              if (error.error === 'Email address already exists. Please enter a unique email address.') {
                 this.admg.showMessage('Email address already exists. Please enter a unique email address.', 'Warning', 3);
               } else if (error.error === 'Phone number already exists. Please enter a unique phone number.') {
                 this.admg.showMessage('Phone number already exists. Please enter a unique phone number.', 'Warning', 3);
               }
             }
            console.error('Error saving Contact', error);
          }
        );
      }
    }
  }
  contactlst: any;
  getcontacts() {
    debugger;
    var usr = this.admg.getUserCompleteInformation().usr;

    console.log('User Information:', usr);
    this.contactForm.branchId = usr.bCode;
    this.contactForm.customerCode = usr.cCode;
    this.contactForm.customer_id = this.leadId;


    console.log('Contact Form:', this.contactForm);

    this.acc.getContact(this.contactForm).subscribe(
      (res) => {
        console.log('Contact List:', res); // Log the response
        this.contactlst = res;
      },
      (error) => {
        console.error('Error fetching contacts:', error); // Log errors
      }
    );
  }
  resetcontact() {
    this.contactForm.firstName = "",
      this.contactForm.lastName = "",
      this.contactForm.email = "",
      this.contactForm.mobile = 0,
      this.contactForm.designation = "",
      this.contactForm.location = "",
      this.contactForm.primaryContact = false
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}
