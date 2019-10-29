import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-record-visit-search',
  templateUrl: './record-visit-search.component.html',
  styleUrls: ['./record-visit-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecordVisitSearchComponent implements OnInit {

  patients: any[] = [];

  selectedPatient: any;

  constructor() { }

  ngOnInit() {
  }

  search(event) {}
}
