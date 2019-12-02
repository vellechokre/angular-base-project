import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
@Component({
  selector: 'app-record-visit-search',
  templateUrl: './record-visit-search.component.html',
  styleUrls: ['./record-visit-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecordVisitSearchComponent implements OnInit {

  patients: any[] = [];

  filteredPatients: any[] = [];

  selectedPatient: any;

  @Output() eSelectedPatient: EventEmitter<any> = new EventEmitter()

  constructor(
    private patientService: PatientService
  ) { 
    
  }

  ngOnInit() {
    this.patientService.get()
      .subscribe((response) => {
        if (response) this.patients = response['_embedded']['patients']
      })
  }

  search(event) {
    this.filteredPatients = [];
    for(let i = 0; i < this.patients.length; i++) {
        let branch = this.patients[i];
        if(branch.firstname.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredPatients.push(branch);
        }
    } 
  }

  onPatientSelect() {
    this.eSelectedPatient.emit(this.selectedPatient);
    this.selectedPatient = null;
  }
}
