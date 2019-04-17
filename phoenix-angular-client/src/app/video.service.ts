
import { Injectable } from '@angular/core';
import { Video } from './video';
import { Observable, of } from 'rxjs';
import { CommentService } from './comment.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient,
              public messageService: CommentService) { 
  }
  /** GET heroes from the server */
  getVideos (): Observable<Video[]> {
     return this.http.get<Video[]>('http://localhost:8080/videos/all').pipe(
      catchError(this.handleError<Video[]>('getVideos', []))
    );
  }
  
  /** Log a VideoService message with the MessageService */
  private log(comment: string) {
    this.messageService.add(`VideoService: ${comment}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getVideo(id: number): Observable<Video> {
    const url = `http://localhost:8080//videos/${id}`;
    return this.http.get<Video>(url).pipe(
      tap(_ => this.log(`fetched video id=${id}`)),
      catchError(this.handleError<Video>(`getVideo id=${id}`))
    );
  }
}

