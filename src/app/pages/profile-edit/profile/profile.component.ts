import { Component, OnInit } from '@angular/core';
import { MlmService } from '../../../services/mlm.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData:any
  constructor(private _mlm:MlmService) { }

  ngOnInit(): void {
    this.profileDetails()
  }

  profileDetails(){
    this._mlm.getDetails().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.profileData = res.data
      }
    )
  }

}
