import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpsService {

  headers = new HttpHeaders({ "Content-Type": "application/json",
  'Authorization': "Bearer "+ this.getToken() });

  getToken(){
    return localStorage.getItem('token')
  }


  // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // headers.append('Access-Control-Allow-Credentials', 'true');

  options = { headers: this.headers, withCredintials: true };

  constructor(private http: HttpClient) { }

  // nativeheader = new this.nativehttp.setHeader('https://054898cd.ngrok.io', 'Content-Type', 'application/json');

  post(serviceName: string, data: any)
  {
    const url = environment.API + serviceName;
    return this.http.post(url, data, this.options);
  }

  get(serviceName: string)
  {
    const url = environment.API + serviceName;
    return this.http.get(url, this.options);
  }

  // getAdmin(endpoint:string){
  //   const url = environment.Admin + endpoint
  //   return this.http.get(url,this.options)
  // }
  
}
