import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../../services/patient.service';
import { PatientDetail } from '../../../modals/patient';

@Component({
  selector: 'app-patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientGridComponent implements OnInit {

  private displayPendingAmountPatientGrid: boolean = false;
  patients: PatientDetail[] = [];

  constructor(
    public router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.patientService.get()
      .subscribe((response) => {
        if (response) this.patients = response['_embedded']['patients']
      })
  }

  addPatient() {
    this.router.navigate(['/patient/addpatient']);
  }

  pendingAmountPatient() {
    this.displayPendingAmountPatientGrid = true;
  }

  editPatient(patient) {
    this.router.navigate(['patient/editpatient', patient.id])
  }

}
