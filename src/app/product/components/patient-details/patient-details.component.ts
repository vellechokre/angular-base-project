import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';
import { TriStateCheckbox } from 'primeng/primeng';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {

  private patient: PatientDetail = new PatientDetail(); 
  
  private address: Address = new Address();

  private appointmentDetails: AppointmentDetails = new AppointmentDetails();
  
  private consultant: ConsultantDetails = new ConsultantDetails();

  private patientData: PatientData = new PatientData();

  private consultantList: ConsultantDetails[] = [];

  private filteredConsultantList: ConsultantDetails[] = [];
  
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
  
  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() { }

  savePatientDetails() {
    this.patientData.patientDetail = this.patient;
    this.patientData.addressDetail = this.address;
    this.patientData.appointmentDetail = this.appointmentDetails;

    this.patientService.create(this.patientData).subscribe((response) => console.log("response on save patient is", response))
  }
}
