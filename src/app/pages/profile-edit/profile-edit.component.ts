import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MlmService } from '../../services/mlm.service';

@Component({
  selector: 'ngx-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  profileData = new FormGroup({
    first_name:new FormControl('',[Validators.required]),
    middle_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    gender:new FormControl(''),
    checkbox:new FormControl(''),
  })

  submitted: boolean;

  constructor(private _profile:MlmService,private router:Router) { }

  ngOnInit(): void {
    this._profile.getDetails().subscribe(
      (res:any)=>{
        console.log(res)
        this.profileData= new FormGroup({
          first_name: new FormControl(res.data['first_name']),
          middle_name:new FormControl(res.data['middle_name']),
          last_name:new FormControl(res.data['last_name']),
          email:new FormControl(res.data['email']),
          password:new FormControl(res.data['password']),
          phone:new FormControl(res.data['phone']),
          address:new FormControl(res.data['address']),
          gender: new FormControl(res.data['gender'])
        })
      }
    )
  }

  update(){
    this._profile.postDetails(this.profileData.value).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['/pages/profile'])
      }
    )
  }

}
