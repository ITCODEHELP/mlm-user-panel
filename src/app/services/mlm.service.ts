import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpsService } from './https.service';
@Injectable({
  providedIn: 'root'
})
export class MlmService {

  constructor(private _mlm:HttpsService) { }

  getPlan():Observable<any>{
    return this._mlm.get('/dashboard/plan_type')
  }

  recentlyAdd():Observable<any>{
    return this._mlm.get('/dashboard/recently_added')
  }

  summary():Observable<any>{
    return this._mlm.get('/dashboard/summary')
  }

  // User History

  history():Observable<any>{
    return this._mlm.get('/userhistory')
  }

  // My Earning

  earning():Observable<any>{
    return this._mlm.get('/earning/1000')
  }

  // Profile

  getDetails():Observable<any>{
    return this._mlm.get('/profile')
  }

  postDetails(data:string):Observable<any>{
    return this._mlm.post('/profile',data)
  }

  //admin

  // Users(){
  //   return this._mlm.getAdmin('/dashboard/totalUser')
  // }

}
