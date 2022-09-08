import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';

  constructor(
    private shareService: ShareService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.shareService.status.subscribe((res: any)=>{
      console.log(res);
      this.isLoggedIn = res.isLoggedIn || false;
      this.userName = res.name;
    })
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('userToken');
    this.route.navigateByUrl('/login');

  }
}
