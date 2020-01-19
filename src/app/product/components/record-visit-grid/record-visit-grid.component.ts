import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDetail } from '../../modals/patient';
import { PatientService } from '../../services/patient.service';
import { RecordVisitService } from '../../services/record-visit.service';

@Component({
  selector: 'app-record-visit-grid',
  templateUrl: './record-visit-grid.component.html',
  styleUrls: ['./record-visit-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecordVisitGridComponent implements OnInit {

  private displayPendingAmountPatientGrid: boolean = false;
  patients: PatientDetail[] = [];

  constructor(
    public router: Router,
    private recordVisitService: RecordVisitService
  ) { }

  ngOnInit() {
    this.recordVisitService.get(null, '/all')
      .subscribe((response) => {
        if (response) this.patients = response['data']
      })
  }

  addRecordVisit() {
    this.router.navigate(['/record-visit']);
  }

  pendingAmountPatient() {
    this.displayPendingAmountPatientGrid = true;
  }

}
