import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerData = new FormGroup({
    first_name:new FormControl(''),
    middle_name:new FormControl(''),
    last_name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    gender:new FormControl(''),
    ref_code_applied:new FormControl(''),
    plan_type:new FormControl('')
  })

  submitted: boolean;
  selectedItem=""

  constructor(private _signup:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerData.value)
    this._signup.registerUser(this.registerData.value).subscribe(
      (res:any)=>{
        console.log('APi===================>>>',res)
        this.router.navigate(['/'])
      },
      err=>console.log(err)
    )
  }
  

}
