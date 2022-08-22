import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  tel : string;

  constructor(private dataService: DataService, 
    private translate: TranslateService) {
    translate.addLangs(['hu', 'ro']);
    translate.setDefaultLang('ro');
    translate.use('ro');
  }

  ngOnInit(): void {
    this.tel = this.dataService.tel
  }

  public useLanguage(language: string): void{
    this.translate.use(language);
  }
}
