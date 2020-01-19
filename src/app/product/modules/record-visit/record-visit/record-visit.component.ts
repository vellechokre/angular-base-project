import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../../modals/patient';
import { TreatmentTypesService } from '../../../services/treatmenttypes.service';
import { RecordVisitService } from '../../../services/record-visit.service';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.scss']
})
export class RecordVisitComponent implements OnInit {

  patient: any;

  recordVisits: any;

  constructor(
    private recordVisitService: RecordVisitService
  ) { }

  ngOnInit() {
  }

  onPatientSelection(selectedPatient) {
    this.patient = selectedPatient;
    this.getRecordVisitByPatientId(selectedPatient.id)
  }

  getRecordVisitByPatientId(id) {
    this.recordVisitService.get(null, `/${id}`).subscribe((response) => {
      if( response ) this.recordVisits = response['data'];
    })
  }

}
