import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../demo/service/carservice';
import {EventService} from '../../../demo/service/eventservice';
import {Car} from '../../../demo/domain/car';
import {SelectItem} from 'primeng/primeng';
import { AppointmentService } from '../../services/appointment.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    patientLastWeekCount: number = 0;

    totalPatientsVisisted: number = 0;

    appointmentCounts: number = 0;

    patientByTreatment: any;
    
    constructor(
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.getPatientVisitedLastWeek();
        this.getTotalPatients();
        this.getTodaysAppointments();
        this.getPatientByTreatmentType();
    }

    getPatientVisitedLastWeek() {
        this.dashboardService.get(null, '/patient-visited-week').subscribe((response) => {
            if(response) this.patientLastWeekCount = response['data']
        })
    }

    getTotalPatients() {
        this.dashboardService.get(null, '/total-patient-visited').subscribe((response) => {
            if(response) this.totalPatientsVisisted = response['data']
        })
    }

    getTodaysAppointments() {
        this.dashboardService.get(null, '/todays-appointment').subscribe((response) => {
            if(response) this.appointmentCounts = response['data'].length;
        })
    }

    getPatientByTreatmentType() {
        this.dashboardService.get(null, '/patient-by-treatmentType').subscribe((response) => {
            if(response) this.patientByTreatment = response['data'];
        })
    }
}
