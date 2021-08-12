import { Component, OnInit } from '@angular/core';
import { MlmService } from '../../services/mlm.service';

@Component({
  selector: 'ngx-user-history',
  templateUrl: './user-history.component.html',
  styleUrls:['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  historyData=[]
  constructor(private mlm:MlmService) { }

  ngOnInit(): void {
    this.userHistory();
  }

  userHistory() {
    this.mlm.history().subscribe((history: any) => {
      console.log("user history =================>>>>>>>", history.data);
      this.historyData = history.data  
      console.log("***** > ",this.historyData)
    });
  }

}
