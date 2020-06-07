import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './models/login.request';

const api = environment.apiUrl;

@Injectable()
export class LoginService {
  private loginURI = '/login';

  constructor(private readonly http: HttpClient) {}

  login(loginRequest: LoginRequest) {
    const options = {headers: {Authorization: 'Bearer <credentials>'}};
    return this.http.post(`${api}${this.loginURI}`, loginRequest);
  }
}
