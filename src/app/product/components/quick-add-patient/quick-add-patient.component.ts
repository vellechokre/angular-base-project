import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-add-patient',
  templateUrl: './quick-add-patient.component.html',
  styleUrls: ['./quick-add-patient.component.scss']
})
export class QuickAddPatientComponent implements OnInit {

  patient: PatientDetail = new PatientDetail()
  address: Address = new Address();
  patientData: PatientData = new PatientData();
  appointmentDetails: AppointmentDetails = new AppointmentDetails();

  genders = [
    { value: '', label: 'Gender' },
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'Others' }
  ];
  
  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.patient = new PatientDetail();
  }

  savePatient() {
    this.patientData.patientDetail = this.patient;
    this.patientData.addressDetail = this.address;
    this.patientService.create(this.patientData,null, '/save')
      .subscribe((response) => {
        this.patient = new PatientDetail();
        this.address = new Address();
        this.cancel()
      });
  }

  cancel() {
    this.router.navigate(['/patient'])
  }
}
