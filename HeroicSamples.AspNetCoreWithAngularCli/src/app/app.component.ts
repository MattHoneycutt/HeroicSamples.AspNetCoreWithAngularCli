import { Component, OnInit } from '@angular/core';
import { ApiClient } from './apiClient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  response: any;

  constructor(
    private apiClient: ApiClient
  ) {
  }

  async ngOnInit() {
    this.response = await this.apiClient.get<any>('Values').toPromise();
  }

}
