import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  public title: string = '';
  public imageUrl: string = '';
  public description: string = '';

  constructor(
    private service: DashboardService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }
  submit(){
    const user: any = localStorage.getItem('userToken');
    const obj = {
      title: this.title,
      imageUrl: this.imageUrl,
      description: this.description,
      name: JSON.parse(user).name
    }
    this.service.createBlog(obj).subscribe((res)=>{
      console.log(res)
      this.route.navigate([':name/blogs'])

    },(err)=>{
      console.log(err)

    })
  }
}
