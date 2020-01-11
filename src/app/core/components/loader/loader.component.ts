import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Alert, AlertType } from '../../modals/alert';
import { AlertService } from '../../services/Alert.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {

  alerts: Message[] = [];
  
  constructor(  ) { }

  ngOnInit() {
      
  }
}
