import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../shared/share.module';
import { CardProjectComponent } from './card-project/card-project.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ShareModule]

})
export class PagesModule { }
