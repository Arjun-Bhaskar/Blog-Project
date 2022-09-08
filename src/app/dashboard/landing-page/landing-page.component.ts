import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // public blogs: any = []
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    // this.getBlogsList();
  }

  // getBlogsList(){
  //   this.service.getBlogsList().subscribe((res: any)=>{
  //     console.log(res);
  //     this.blogs = res.result;
  //   }, (err)=>{
  //     console.log(err);
  //   })
  // }



}
