import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../../modals/patient';
import { TreatmentTypesService } from '../../../services/treatmenttypes.service';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.scss']
})
export class RecordVisitComponent implements OnInit {

  patient: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  onPatientSelection(selectedPatient) {
    this.patient = selectedPatient;
  }

}
