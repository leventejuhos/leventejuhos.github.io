import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  tel: string;
  email: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tel = this.dataService.tel
    this.name = this.dataService.name
    this.email = this.dataService.email
  }

}
