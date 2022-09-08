import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public fname: string = "";
  public lname: string = "";
  public email: string = "";
  public phoneNo: string = "";
  public password: string = "";
  public status: string = "";
  public isError: boolean = false;

  constructor(
    private authservice:AuthService,
    private route: Router
     
    ) { }

  ngOnInit(): void {
  }
  submit(){
    const obj={
     firstName: this.fname,
     lastName: this.lname,
     email: this.email,
     phoneNo: this.phoneNo,
     password: this.password
    }
    console.log(obj)
    this.authservice.signup(obj).subscribe((res: any)=>{
      this.status = res.message || '';
      this.isError = res.message && res.message=== 'Invalid Data!!'? true: false; 
      this.route.navigateByUrl('/login');
    }, (err)=>{
      this.status = err.error.text;
      this.isError = true;
    })
  }

}
