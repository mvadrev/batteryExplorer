import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private notifier: NotifierService) {
    this.notifier = notifier;
   }

  ngOnInit(): void {
    this.showNotification('error', 'error')
    console.log("done")
  }

  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}


}
