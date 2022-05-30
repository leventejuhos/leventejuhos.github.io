import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { StepsComponent } from './steps/steps.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderPanelComponent } from './order-panel/order-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TitleComponent,
    StepsComponent,
    ProfileComponent,
    OrderPanelComponent],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule
  ],
  exports: [
    TitleComponent,
    OrderPanelComponent,
    ProfileComponent,
    StepsComponent,
    TranslateModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
