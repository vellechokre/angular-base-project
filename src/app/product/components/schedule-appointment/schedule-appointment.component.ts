import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { AppointmentDetails } from '../../modals/appointment';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { AppointmentService } from '../../services/appointment.service';
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

  loading: boolean = false;

  constructor(
    private router: Router,
    private patientService: PatientService,
    private appointmentService: AppointmentService
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
    this.appointmentService.create(this.appointment, null, '/save').subscribe((response) => {
      if(response) {
        this.appointment = new AppointmentDetails();
        this.router.navigate(['/patient']);
        this.display = false;
      };
    })
  }

  onDialogClose() {
    
  }
}
