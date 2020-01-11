import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentDetails } from '../../modals/appointment';
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

  appointments: AppointmentDetails[];

  popOverTitle: string;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.defaultDate = this.formatDate(new Date());

    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaDay,agendaWeek,month'
    };

    this.getAppointments();
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

  private getAppointments() {
    this.appointmentService.get({}, '/fetchAll').subscribe((result) => {
      this.events = result;
    })
  }

  handleMouseOver(e, op) {
    this.popOverTitle = e.calEvent.title;
    op.show(e, e.jsEvent.target);
}

}
