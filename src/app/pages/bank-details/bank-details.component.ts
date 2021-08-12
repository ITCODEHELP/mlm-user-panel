import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from '../../models/file-upload.model';
import { FileUploadService } from '../../services/file-upload.service';
import { MlmService } from '../../services/mlm.service';

@Component({
  selector: 'ngx-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  selectedFiles?: FileList;
  url: any;

  
  currentFileUpload?: FileUpload;
  percentage!: number;
  progressshow: boolean = false;
  constructor(    private route: Router,
    private uploadService: FileUploadService,private _user:MlmService) { }

  ngOnInit(): void {
    // this.totalUser()
  }

  imageupload(event){
    console.log(event.target.files[0])
  }
   // file upload code
   selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log("selectFile main : ",this.selectedFiles);

  }

  upload(): void {
    const file: any = this.selectedFiles?.item(0);
    
    
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    console.log("currentFileUpload : ",this.currentFileUpload);
    
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        console.log("in api : ",percentage);
        
        this.percentage = Math.round(percentage);
        console.log(percentage);
        this.progressshow = true;

        if (percentage === 100) {
          console.log('url', this.uploadService.downloadurl);
        }
      },
      (error) => {
        console.log("error : ",error);
      }
    );

    this.uploadService.uploadTask.then(async (res: any) => {
      const a = await this.uploadService.storageRef
        .getDownloadURL()
        .toPromise();
      this.url = a;
      console.log('downloadurl', a);
      if (a) {
        this.progressshow = false;
      }
    });
  }
  //file upload code puro

  // totalUser(){
  //   this._user.Users().subscribe(
  //     (res:any)=>{
  //       console.log(res)
  //     }
  //   )
  // }

}
