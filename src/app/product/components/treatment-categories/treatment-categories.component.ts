import { Component, OnInit } from '@angular/core';
import { TreatmentCategoriesService } from '../../services/treatmentCategories';
import { TreatmentType } from '../../modals/treatment-type';
import { TreatmentTypesService } from '../../services/treatmenttypes.service';
import { AlertService } from '../../../core/services/Alert.service';
import { TreatmentCategories } from '../../modals/treatment-categories';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-treatmentCategories',
  templateUrl: './treatment-categories.component.html',
  styleUrls: ['./treatment-categories.component.scss']
})

export class TreatmentCategoriesComponent implements OnInit {

  display: boolean = false;

  description: string;

  treatmentCategories: any[] = [];

  treatmentTypes: TreatmentType[] = [];

  treatmentCategory: TreatmentCategories = new TreatmentCategories();

  constructor( 
    private treatmentCategoriesService: TreatmentCategoriesService,
    private treatmentTypeService: TreatmentTypesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {  
    this.getTreatmentCategories();
    this.getTreatmentTypes();
  }

  getTreatmentCategories() {
    this.treatmentCategoriesService.get(null, '/all').subscribe((response) => {
      this.treatmentCategories = response['data'];
    })
  }

  getTreatmentTypes() {
    this.treatmentTypeService.get(null, '/all').subscribe((response) => {
      if(response) this.treatmentTypes = response['data'];
    }, (error) => {
      this.alertService.error('Error Fetching Treatments', JSON.parse(error.error).message);
    })
  }

  addTreatmentCategory() {
    this.display = true;
  }

  saveTreatment() { 
    if(!this.treatmentCategory.treatmentType) {
      this.alertService.error('Please select Treatment Type', 'Please select Treatment Type');
      return
    }
    this.treatmentCategoriesService.create(this.treatmentCategory).subscribe((response) => {
      this.alertService.success('Treatment Category Added', 'Treatment Category Added Successfully.');
      this.display = false;
      this.getTreatmentCategories();
    }, (error) => {
      this.alertService.error('Error Fetching Treatments', JSON.parse(error.error).message);
      this.display = false;
    })
  }

  editTreamentCategory(category) {
    this.treatmentCategory = category;
    this.display = true;
  }

}
