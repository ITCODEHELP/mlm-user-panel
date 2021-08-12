import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { AuthService } from "../../services/auth.service";
import { MlmService } from "../../services/mlm.service";


@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  recent_user: [];

  addData = new FormGroup({
    phone: new FormControl(""),
    password: new FormControl(""),
  });

  // user={mobile:'',password:''}

  submitted: boolean;

  constructor(
    private _login: AuthService,
    private router: Router,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.addData.value);
    this._login.loginUser(this.addData.value).subscribe((res: any) => {
      console.log("Login ==========>>>", res);
      if (res.status === 200) {
        this.toastr.success("Login successfully.",res.message);
        console.log("res.data.token ==========>>>", res.data.token);
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
        this.router.navigate(["/pages"]);
          
        }, 1000);
      }else{
      
        this.toastr.danger("Error !!!!!",res.message);
      }
     
     
    });
  }
}
