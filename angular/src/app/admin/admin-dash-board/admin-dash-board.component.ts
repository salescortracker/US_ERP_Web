import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent implements OnInit {

  // public ccode:string='';
  // constructor(private adm:AdminGeneralInfoService) { 

  //   var usr=this.adm.getUserCompleteInformation().usr;
  //   this.ccode=usr.cCode.toString();

  // }

  // ngOnInit(): void {
  // }

 autoModal: any;
  public ccode: string = '';
  private modalRef: NgbModalRef | null = null;

  constructor(
    private adm: AdminGeneralInfoService, 
    private modalService: NgbModal
  ) {
    const usr = this.adm.getUserCompleteInformation().usr;
    this.ccode = usr?.cCode?.toString() || '';
  }

  ngOnInit(): void {
    if (this.autoModal) {
      this.openModal();
    }
  }

  openModal() {
    this.modalRef = this.modalService.open(this.autoModal, { ariaLabelledBy: 'modal-basic-title' });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close('Next button clicked');
      console.log('Modal closed.');
    }
  }
}
