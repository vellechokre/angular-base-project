import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Alert, AlertType } from '../../modals/alert';
import { AlertService } from '../../services/Alert.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {

  alerts: Message[] = [];
  
  constructor( 
    private alertService: AlertService,
    private messageService: MessageService ) { }

  ngOnInit() {
      this.alertService.getAlert().subscribe((alert: Alert) => {
        if (!alert) {
            // clear alerts when an empty alert is received
            this.alerts = [];
            return;
        }
        // add alert to array
        this.alerts = [...this.alerts, ...this.getAlertMessage(alert)];
    });
  }

  getAlertMessage(alert: Alert): Message[] {
    let message: Message = {detail: alert.detail, severity: AlertType[alert.severity].toLowerCase(), summary: alert.summary};
    return [message];
  }
}
