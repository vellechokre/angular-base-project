import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { AlertService } from '../../../core/services/Alert.service';

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
  isLoading: boolean = false;

  genders = [
    { value: '', label: 'Gender' },
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'Others' }
  ];
  
  constructor(
    private patientService: PatientService,
    private router: Router,
    public app: AppComponent,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.patient = new PatientDetail();
  }

  savePatient() {
    this.isLoading = true;
    this.patientData.patientDetail = this.patient;
    this.patientData.addressDetail = this.address;
    this.patientService.create(this.patientData,null, '/save')
      .subscribe  ((response) => {
        this.patient = new PatientDetail();
        this.address = new Address();
        this.cancel()
        this.isLoading = false;
        this.alertService.success('Patient Add', 'Patient Added Successfully');
      }, (error) => {
          this.alertService.error('Patient Add Failed', JSON.parse(error.error).message);
        }
      );
  }

  cancel() {
    this.app.rightPanelClick = true;
    this.app.rightPanelActive = !this.app.rightPanelActive;
  }
}
