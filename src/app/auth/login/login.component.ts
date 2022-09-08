import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../../share/share.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor(
    private service: AuthService,
    private route: Router,
    private shareService: ShareService
    ) { }

  ngOnInit(): void {
  }

  submit(){
    this.service.login({ email: this.email, password: this.password }).subscribe((res: any)=>{
      console.log('data: ', res);
      const name = res && res.result? res.result.firstName: '';
      if(name) {
        const obj: any = {
          name: name,
          isLoggedIn: true
        }
        localStorage.setItem('userToken', JSON.stringify(obj));
        this.shareService.setStatus(obj);
        this.route.navigate([name, 'blogs']);
      }

    }, (err)=>{
      console.log('err: ', err);
    })
  }

}
