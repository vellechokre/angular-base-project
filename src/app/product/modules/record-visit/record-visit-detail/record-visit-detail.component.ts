import { Component, OnInit, Input } from '@angular/core';
import { PatientDetail } from '../../../modals/patient';
import { VisitDetails } from '../../../modals/visit-details';
import { PaymentDetail } from '../../../modals/payment-details';
import { RecortVisit } from '../../../modals/record-visit';
import { Http } from '@angular/http';
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
  
  items: Object[] = [
    {
      id: 1,
      title: 'General',
    },
    {
      id: 2,
      title: 'Extraction',
    },
    {
      id: 3,
      title: 'Restoration',
    },
    {
      id: 4,
      title: 'Endodontics',
    },
    {
      id: 5,
      title: 'Periodontist',
    },
    {
      id: 6,
      title: 'Dentaures',
    },
    
    {
      id: 7,
      title: 'FPD',
    },
    {
      id: 8,
      title: 'Implant',
    },
    {
      id: 9,
      title: 'Other',
    },
    /*{
      id: 10,
      title: 'Extra',
    }*/
  ];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  category(item) {
    this.visitDetail = new VisitDetails();
    this.visitDetail.patient = this.patientDetail;
    this.visitDetail.category = item.title;
    this.http.get("/assets/" + item.id + ".json")
      .subscribe((data) => {
        this.subcategories = data.json()['general']
      })
  }

  subcategory(subitem) {
    this.visitDetail = new VisitDetails();
    this.visitDetail.subcategory = subitem.name;
    this.visitDetail.patient = this.patientDetail;
    this.visitDetails.push(this.visitDetail);

  }
}
