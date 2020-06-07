import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Raport } from './models';

const api = environment.apiUrl;

@Injectable()
export class RaportsService {
  private raportsURI = '/raports';

  constructor(private readonly http: HttpClient) {}

  getUserRaports(email: string) {
    let params = new HttpParams();
    params = params.append('userEmail', email);
    return this.http.get<Raport[]>(`${api}${this.raportsURI}`, { params });
  }

  closeRaport(raportId: number, raport: Raport) {
    return this.http.patch(`${api}${this.raportsURI}/${raportId}`, raport);
  }
}
