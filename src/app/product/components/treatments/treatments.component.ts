import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentDetails } from '../../modals/appointment';
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})

export class TreatmentsComponent implements OnInit {

  display: boolean = false;

  description: string;

  constructor( ) { }

  ngOnInit() {  }

  addTreatment() {
    this.display = true;
  }

  saveTreatment() { }

}
