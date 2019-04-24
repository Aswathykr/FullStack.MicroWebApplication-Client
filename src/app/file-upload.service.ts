import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadOld(file) {
    const url = `http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com//videos/1`;
    var fd = new FormData();
    fd.append('file', file);
    fd.append('title', "title");
    fd.append('desc', "description");
    fd.append('format', "video/mp4");
    console.log("calling server");
    return this.httpClient.post(url, fd, {
      headers: { 'Content-Type': undefined }
    }).pipe(map((resp: any) => resp));;
  }

  upload(file, title, description) : Observable<any> {
    // Note that setting a content-type header
    // for mutlipart forms breaks some built in
    // request parsers like multer in express.
    const options = {} as any; // Set any options you like
    const fd = new FormData();
    console.log(title + description + " *****");
    fd.append('file', file);
    fd.append('title', title);
    fd.append('desc', description);
    fd.append('format', "mp4");
  
    // Send it.
    return this.httpClient.post('http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/videos/1',
     fd, options);
      // .toPromise()
      // .catch((e) => {
      //   console.log(e)
      // });
  }
}
