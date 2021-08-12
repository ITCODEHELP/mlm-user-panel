import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
private basePath = '/uploads';

downloadurl:any;
uploadTask:any;
storageRef:any;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
   
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    // console.log("infcfb ",filePath);
    
     this.storageRef = this.storage.ref(filePath);
    this.uploadTask = this.storage.upload(filePath, fileUpload.file);


    this.uploadTask.snapshotChanges().pipe(
      finalize(() => {
        console.log("in uploadTask : ",finalize);
        
        this.storageRef.getDownloadURL().subscribe((downloadURL:any) => {
          console.log("downloadURL::",downloadURL);

          fileUpload.url = downloadURL;
          this.downloadurl = downloadURL;
          
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    
    return this.uploadTask.percentageChanges();
  }



  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems:any): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }


}
