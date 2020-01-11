import { Component, OnInit, Input } from '@angular/core';
import { PatientDetail } from '../../../modals/patient';
import { VisitDetails } from '../../../modals/visit-details';
import { PaymentDetail } from '../../../modals/payment-details';
import { RecortVisit } from '../../../modals/record-visit';
import { Http } from '@angular/http';
import { TreatmentTypesService } from '../../../services/treatmenttypes.service';
import { TreatmentCategoriesService } from '../../../services/treatmentCategories';
@Component({
  selector: 'app-record-visit-detail',
  templateUrl: './record-visit-detail.component.html',
  styleUrls: ['./record-visit-detail.component.scss']
})
export class RecordVisitDetailComponent implements OnInit {

  patientDetail: PatientDetail = new PatientDetail();

  visitDetail: VisitDetails = new VisitDetails();

  visitDetails: VisitDetails[] = [];

  subcategories: any[] = [];

  paymentDetails: PaymentDetail = new PaymentDetail();

  recordVisit: RecortVisit = new RecortVisit();

  totalPrice:number = 0;

  discountPrice:number = 0;

  netPrice:number = 0;

  patientId: number;

  @Input() patient: any;
  
  items: Object[] 
  
  constructor(
    private http: Http,
    private treatmentTypesService: TreatmentTypesService,
    private treatmentCategoriesService: TreatmentCategoriesService
  ) { }

  ngOnInit() {
    this.treatmentTypesService.get(null, '/all').subscribe((response) => {
      this.items = response['data']
    })
  }

  category(item) {
    this.visitDetail = new VisitDetails();
    this.visitDetail.patient = this.patientDetail;
    this.visitDetail.category = item.description;
    this.treatmentCategoriesService.get(null, `/${item.id}`).subscribe((response) => {
      this.subcategories = [];
      this.subcategories = response['data'];
    })
  }

  subcategory(subitem) {
    this.visitDetail = new VisitDetails();
    this.visitDetail.subcategory = subitem.description;
    this.visitDetail.patient = this.patientDetail;
    this.visitDetails.push(this.visitDetail);

  }

  delete(i: number) {
    this.visitDetails.splice(i, 1)
  }

  setFinalPrice(i) {
    this.netPrice = this.visitDetails[i].amount - this.visitDetails[i].discount;
    this.addPrice(i, this.visitDetails[i].amount, this.visitDetails[i].discount, this.netPrice);
  }

  addPrice(i, price, discount, final) {
    this.visitDetails[i].amount = price;
    this.visitDetails[i].discount = discount;
    this.visitDetails[i].netAmount = final;
  }
}
