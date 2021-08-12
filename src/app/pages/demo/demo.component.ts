import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlmService } from '../../services/mlm.service';

@Component({
  selector: 'ngx-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  all_plans=[]
  summarys:any
  recent_user = []

  constructor(private mlm:MlmService,private router:Router) { }

  ngOnInit(): void {
    this.recently();
    this.plans();
    this.summary();
  }

  plans() {
    this.mlm.getPlan().subscribe((plan: any) => {
      console.log("Plan ==================>>>>>>", plan.data);
      this.all_plans = plan.data
    });
  }

  recently() {
    this.mlm.recentlyAdd().subscribe((recent: any) => {
      console.log("recent =================>>>>>>>", recent.data);
      this.recent_user = recent.data  
      // console.log("***** > ",this.recent_user)
    });
  }

  summary() {
    this.mlm.summary().subscribe((summary: any) => {
      console.log("summary ============>>>>>", summary.data);
      this.summarys = summary.data
      // console.log(this.summarys)
    
    });
  }

  onClick() {
    this.router.navigate(["/pages/miscellaneous/not-found"]);
  }
  enable1: boolean = false;
  enable2: boolean = false;
  enable3: boolean = false;
  enable4: boolean = false;
  enable5: boolean = false;

  selectedInput(event: any) {
    if (event === "1") {
      this.enable2 = false;
      this.enable3 = false;
      this.enable4 = false;
      this.enable5 = false;
      this.enable1 = true;
    }
    if (event === "2") {
      this.enable1 = false;
      this.enable3 = false;
      this.enable4 = false;
      this.enable5 = false;
      this.enable2 = true;
    }
    if (event === "3") {
      this.enable1 = false;
      this.enable2 = false;
      this.enable4 = false;
      this.enable5 = false;
      this.enable3 = true;
    }
    if (event === "4") {
      this.enable1 = false;
      this.enable2 = false;
      this.enable3 = false;
      this.enable5 = false;
      this.enable4 = true;
    }
    if (event === "5") {
      this.enable1 = false;
      this.enable2 = false;
      this.enable3 = false;
      this.enable4 = false;
      this.enable5 = true;
    }
  }

}
