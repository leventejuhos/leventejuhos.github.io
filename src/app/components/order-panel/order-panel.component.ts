import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.css']
})
export class OrderPanelComponent implements OnInit {

  tel: string;
  email: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tel = this.dataService.tel
    this.email = this.dataService.email
  }

}
