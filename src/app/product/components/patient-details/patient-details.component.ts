import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {

  patient: PatientDetail = new PatientDetail()
  
  address: Address = new Address();

  appointmentDetails: AppointmentDetails = new AppointmentDetails();
  
  consultant: ConsultantDetails = new ConsultantDetails();

  patientData: PatientData = new PatientData();

  consultantList: ConsultantDetails[] = [];

  filteredConsultantList: ConsultantDetails[] = [];
  
  loading:boolean = false;


  genders = [
    { value: '', label: 'Gender' },
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'Others' }
  ];

  bloodGroups = [
    { value: '', label: 'Blood Group' },
    { value: 'ab+', label: 'AB+' },
    { value: 'ab-', label: 'AB-' },
    { value: 'b+', label: 'B+' },
    { value: 'b-', label: 'B-' },
    { value: 'a+', label: 'A+' },
    { value: 'a-', label: 'A-' },
    { value: 'o+', label: 'O+' },
    { value: 'o-', label: 'O-' },
  ];

  languages = [
    { value: '', label: 'Preferred Language' },
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'gujarati', label: 'Gujarati' },

  ];
  
  constructor() { }
  ngOnInit() {
  }
}
