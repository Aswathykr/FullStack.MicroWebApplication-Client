import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('outer') htmlbody:ElementRef;
  constructor(private uploadService:FileUploadService) { 
    
    
  }
  @ViewChild("fileInput") fileInputVariable: any;
  ngOnInit() {
    
  }
  public upload(){
    console.log("upload ******")
    document.body.classList.add('busy-cursor');

    const files = this.fileInputVariable.nativeElement.files;
    this.uploadService.upload(files[0], this.title,this.description)
    .subscribe(something => {
      document.body.classList.remove('busy-cursor');
      alert("Sucessfully uploaded your file to server");
    },error => {
      document.body.classList.remove('busy-cursor');
      alert("An error occured while trying to uploaded, please try again!!");
    });
    alert("uploading");
  }
}
