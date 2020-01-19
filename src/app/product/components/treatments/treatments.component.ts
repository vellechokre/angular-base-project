import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentDetails } from '../../modals/appointment';
import { TreatmentTypesService } from '../../services/treatmenttypes.service';
import { TreatmentType } from '../../modals/treatment-type';
import { AlertService } from '../../../core/services/Alert.service';
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})

export class TreatmentsComponent implements OnInit {

  display: boolean = false;

  treatmentType: TreatmentType = new TreatmentType();

  isLoading: boolean = false;

  treatments: any[] = [];

  constructor( 
    private treatmentTypesService: TreatmentTypesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {  
    this.getTreatments();
  }

  addTreatment() {
    this.display = true;
  }

  getTreatments() {
    this.isLoading = true;
    this.treatmentTypesService.get(null, '/all').subscribe((response) => {
      if(response) this.treatments = response['data'];
      this.isLoading = false;
    }, (error) => {
      this.alertService.error('Error Fetching Treatments', JSON.parse(error.error).message);
      this.isLoading = false;
    })
  }

  saveTreatment() { 
    this.treatmentTypesService.create(this.treatmentType).subscribe((response) => {
      this.isLoading = false;
      this.display = false;
      this.alertService.success('Treatment Added', 'Treatment Added Successfully');
      this.getTreatments();
    }, (error) => {
      this.alertService.error('Treatment Add Failed', JSON.parse(error.error).message);
    })
  }

  editTreament(treatment) {
    this.treatmentType = JSON.parse(JSON.stringify(treatment));
    this.display = true;
  }

}
