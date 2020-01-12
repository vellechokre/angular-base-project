import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentDetails } from '../../modals/appointment';
@Component({
  selector: 'app-treatmentCategories',
  templateUrl: './treatment-categories.component.html',
  styleUrls: ['./treatment-categories.component.scss']
})

export class TreatmentCategoriesComponent implements OnInit {

  display: boolean = false;

  description: string;

  constructor( ) { }

  ngOnInit() {  }

  addTreatmentCategory() {
    this.display = true;
  }

  saveTreatment() { }

}
