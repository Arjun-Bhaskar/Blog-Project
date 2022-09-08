import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent,
    CreateBlogComponent,
    DeleteBlogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
