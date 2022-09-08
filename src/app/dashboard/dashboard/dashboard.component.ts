import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public blogs: any = []

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getBlogsList();
  }
  getBlogsList(){
    this.service.getBlogsList().subscribe((res: any)=>{
      console.log(res);
      this.blogs = res.result;
    }, (err)=>{
      console.log(err);
    })
  }
  deleteBlog(blog:any){
    console.log(blog)
    this.service.deleteBlog(blog._id).subscribe((res:any)=>{
    this.blogs = res.result;
    })
    

  }


}
