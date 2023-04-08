import { Component } from '@angular/core';
import { NSWService } from './nsw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nsw-cams';

  message: String;

  constructor(private nswService: NSWService) {
    this.message = nswService.getData();
  }
}
