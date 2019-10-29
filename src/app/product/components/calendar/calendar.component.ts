import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  events: any[];

  header: any;

  headerConfig: any;

  defaultDate: string;

  constructor() { }

  ngOnInit() {
    this.defaultDate = this.formatDate(new Date());

    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaDay,agendaWeek,month'
    };
  }

  formatDate(date) {
    var d = date,
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
