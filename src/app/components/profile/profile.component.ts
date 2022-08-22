import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tel: string;
  email: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tel = this.dataService.tel
    this.email = this.dataService.email
  }

}
