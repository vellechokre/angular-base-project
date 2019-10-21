import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';

@Component({
  selector: 'app-quick-add-patient',
  templateUrl: './quick-add-patient.component.html',
  styleUrls: ['./quick-add-patient.component.scss']
})
export class QuickAddPatientComponent implements OnInit {

  patient: PatientDetail = new PatientDetail()
  address: Address = new Address()
  appointmentDetails: AppointmentDetails = new AppointmentDetails();
  consultant: ConsultantDetails = new ConsultantDetails();
  patientData: PatientData = new PatientData();
  loading: boolean = false;

  genders = [
    { value: '', label: 'Gender' },
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'Others' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
