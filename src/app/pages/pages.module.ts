import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../shared/share.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ShareModule]

})
export class PagesModule { }
