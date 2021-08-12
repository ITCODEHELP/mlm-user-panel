import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlmService } from '../../services/mlm.service';

@Component({
  selector: 'ngx-my-earning',
  templateUrl: './my-earning.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  styleUrls: ['./my-earning.component.scss'],
})
export class MyEarningComponent implements OnInit {

  myEarn = []
  all_plans=[]

  constructor(private _earning:MlmService,private router:Router) { }

  amount1: any =  1000;
  amount2: any =  2000;
  amount3: any =  3000;
  amount4: any =  4000;
  amount5: any =  5000;


  ngOnInit() {
    this.myEarning();
    this.plans()
  }

  plans() {
    this._earning.getPlan().subscribe((plan: any) => {
      console.log("Plan ==================>>>>>>", plan.data);
      this.all_plans = plan.data
    });
  }

  myEarning(){
    this._earning.earning().subscribe(
      (earn:any)=>{
        console.log('My Earning ============>>>>>',earn.data)
        this.myEarn = earn.data
      }
    )
  }

  complete(event:any){
    console.log(event.tabTitle)
  }

  productSelected: boolean = false;
  selectedProduct?: string;
  addedProduct:any;
  products: any;

  onClick(product:any){
    this.productSelected = true;
    this.selectedProduct = product;
  }

  onAdd(){
    this.addedProduct = this.selectedProduct;
  }

}
