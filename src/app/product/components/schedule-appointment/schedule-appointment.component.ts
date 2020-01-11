import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { AppointmentDetails } from '../../modals/appointment';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { AppointmentService } from '../../services/appointment.service';
import { AppComponent } from '../../../app.component';
import { AlertService } from '../../../core/services/Alert.service';
@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.scss']
})

export class ScheduleAppointmentComponent implements OnInit {

  display: boolean = false;

  filteredPatients: any[] = [];

  patients: any[] = [];

  filteredConsultants: any[] = [];

  consultants: any[] = [];

  patient: PatientDetail = new PatientDetail();
  
  appointment: AppointmentDetails = new AppointmentDetails();

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private patientService: PatientService,
    private appointmentService: AppointmentService,
    public app: AppComponent,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.patientService.get().subscribe((response) => {
      if (response) this.patients = response['_embedded']['patients']
    })
  }

  filterPatients(event) {
    this.filteredPatients = [];
    for (let i = 0; i < this.patients.length; i++) {
      let patient = this.patients[i];
      if (patient.firstname && patient.firstname.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredPatients.push(patient);
      }
    }
  }

  onHide() {
    this.display = false;
    this.router.navigate(['/'])
  }

  filterConsultants(event) {
    /* this.filteredConsultants = [];
    for (let i = 0; i < this.consultants.length; i++) {
      let consultant = this.consultants[i];
      if (consultant.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredConsultants.push(consultant);
      }
    } */
  }

  onPatientSelect(event) {
    this.patient = event;
  }

  saveAppointment() {
    this.isLoading = true;
    this.appointmentService.create(this.appointment, null, '/save').subscribe((response) => {
      if(response) {
        this.appointment = new AppointmentDetails();
        this.app.rightPanelClick = true;
        this.app.rightPanelActive = !this.app.rightPanelActive;
        this.isLoading = false;
        this.alertService.success('Appointment Add', 'Appointment Added Successfully');
      };
    }, (error) => {
      this.alertService.error('Appointment Add Failed', JSON.parse(error.error).message);
    })
  }

  onDialogClose() {
    
  }
}
