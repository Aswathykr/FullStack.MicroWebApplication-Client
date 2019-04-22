// import { Injectable } from '@angular/core';
// import {Observable, of} from "rxjs";
// import {Video} from "./video";
// import {catchError, tap} from "rxjs/operators";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Comment} from "@angular/compiler";
// import {VideoService} from "./video.service";
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CommentService {
//   private comment: string;
//   private id: Video;
//
//   constructor(private http: HttpClient, private videoService: VideoService){
//
//   }
//
//   // comments: string[] = [];
//
//
//   getComments(id: number): Observable<Comment[]> {
//     const url = `http://localhost:8080//videos/comments/${id}`;
//     console.log(url);
//     return this.http.get<Comment[]>(url).pipe(
//       catchError(this.handleError<Comment[]>('getComments', [])));
//   }
//
//   private log(comment: string) {
//     this.comment = comment;
//   }
//   // clear() {
//   //   this.comments = [];
//   // }
//
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error); // log to console instead
//       this.log(`${operation} failed: ${error.message}`);
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }
// }
