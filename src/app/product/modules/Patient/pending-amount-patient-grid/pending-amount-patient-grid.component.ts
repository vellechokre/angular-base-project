import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-pending-amount-patient-grid',
  templateUrl: './pending-amount-patient-grid.component.html',
  styleUrls: ['./pending-amount-patient-grid.component.scss']
})
export class PendingAmountPatientGrid implements OnInit {

  pendingPatientList: any[];

  constructor( private patientService: PatientService) { }

  ngOnInit() {
    this.getPatientWithPendingAmount();
  }

  getPatientWithPendingAmount(){
    this.patientService.get(null,'/getPatientWithPendingAmount')
    .subscribe((response) => {
      if (response) this.pendingPatientList = response['data'];
    })
  }

}
