import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers = ["ID", "User1", "User2", "PlanAmount", "Amount","Date"];

  rows = [
    {
      "ID" : "1",
      "User1" : "satani",
      "User2" : "yagnik",
      "PlanAmount" : "1000",
      "Amount" : "1500",
      "Date" : "01/01/2021"
     
    },
    {
      "ID" : "2",
      "User1" : "satani",
      "User2" : "bk",
      "PlanAmount" : "1000",
      "Amount" : "3000",
      "Date" : "01/01/2021"
      
    },
    {
      "ID" : "3",
      "User1" : "satani",
      "User2" : "pankaj",
      "PlanAmount" : "2000",
      "Amount" : "4000",
      "Date" : "01/01/2021"
    },
    {
      "ID" : "4",
      "User1" : "satani",
      "User2" : "mihir",
      "PlanAmount" : "1000",
      "Amount" : "3500",
      "Date" : "01/01/2021"

    },
    {
      "ID" : "5",
      "User1" : "satani",
      "User2" : "hiren",
      "PlanAmount" : "1000",
      "Amount" : "5000",
      "Date" : "01/01/2021"
      
    },
    {
      "ID" : "6",
      "User1" : "satani",
      "User2" : "zeel",
      "PlanAmount" : "1000",
      "Amount" : "3500",
      "Date" : "01/01/2021"
      
    }
  ]

}
