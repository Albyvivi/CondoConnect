import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData } from '../models/AuthData';

const apiUrl = environment.apiUrl + '/account';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<AuthData | null>;
  public currentUser: Observable<AuthData | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthData | null {
    if (!localStorage.getItem('currentUser')) {
      return null;
    }
    return JSON.parse(localStorage.getItem('currentUser')!);
    // return this.currentUserSubject.value;
  }

  login(userName: string, password: string) {
    return this.http.post<AuthData>(`${apiUrl}/login`, { userName, password });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
