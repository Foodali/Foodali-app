import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  CreateBug(data): Observable<User> {
    
    //http://localhost:8080/createUser?phoneNo=%2B91-7683922389
    return this.http.post<User>(this.baseurl + '/createUser', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
  }  

  // GET
  GetIssue(id): Observable<User> {
    return this.http.get<User>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // GET
    GetUserId(phoneNo): Observable<User> {
      return this.http.get<User>(this.baseurl + '/getUserByPhone?phoneNo=' + phoneNo)
      .pipe(
        catchError(this.errorHandl)
      )
    }

  // GET
  GetIssues(): Observable<User> {
    return this.http.get<User>(this.baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateBug(id, data): Observable<User> {
    return this.http.put<User>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteBug(id){
    return this.http.delete<User>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
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
