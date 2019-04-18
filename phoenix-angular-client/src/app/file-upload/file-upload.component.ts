import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

 const URL = 'http://localhost:3000/api/upload';
 @Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  description : string;
  title : string;
  constructor(private uploadService:FileUploadService) { 

  }
  @ViewChild("fileInput") fileInputVariable: any;
  ngOnInit() {
    
  }
  public upload(){
    console.log("upload ******")
    const files = this.fileInputVariable.nativeElement.files;
    this.uploadService.upload(files[0], this.title,this.description)
    .subscribe(something => {console.log(something)});
  }
}
