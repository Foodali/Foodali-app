import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from './session';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  // Base url
  baseurl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }

  // POST
  CreateSession(data): Observable<Session> {
    
    return this.http.post<Session>(this.baseurl + '/createSession', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
    
  }  

  // GET
  GetIssue(id): Observable<Session> {
    return this.http.get<Session>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetIssues(): Observable<Session> {
    return this.http.get<Session>(this.baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateBug(id, data): Observable<Session> {
    return this.http.put<Session>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteBug(id){
    return this.http.delete<Session>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
