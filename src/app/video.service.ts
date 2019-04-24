
import { Injectable } from '@angular/core';
import { Video } from './video';
import {Comment} from "./comment";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})



export class VideoService {
  private urlAddress = 'http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/';
  constructor(private http: HttpClient) {
  }
  /** GET heroes from the server */
  getVideos (): Observable<Video[]> {
     return this.http.get<Video[]>('http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/videos/all').pipe(
      catchError(this.handleError<Video[]>('getVideos', []))
    );
  }
  /** Log a VideoService message with the MessageService */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);};
  }

  getVideo(id: number): Observable<Video> {
    const url = `http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/videos/${id}`;
    return this.http.get<Video>(url).pipe(
      tap(_ => console.log(`fetched video id=${id}`)),
      catchError(this.handleError<Video>(`getVideo id=${id}`))
    );
  }

  getComments(id: number): Observable<Comment[]> {
    const url = `http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/videos/comments/${id}`;
    console.log("url"+url);
    return this.http.get<Comment[]>(url).pipe(
      catchError(this.handleError<Comment[]>(`getComments=${id}`)));

  }

  addComment (id:number,comment:Comment): Observable<Comment> {
    const url = `http://phoenixvideos-env.qrsnwtvitv.us-east-2.elasticbeanstalk.com/videos/comment/1/${id}`;
    console.log("-----"+url);
    return this.http.post<Comment>(url,comment,).pipe(
        catchError(this.handleError('addComment', comment))
      );
  }
}

