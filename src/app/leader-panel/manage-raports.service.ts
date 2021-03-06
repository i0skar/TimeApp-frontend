import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Raport } from '../raports/models';

const api = environment.apiUrl;

@Injectable()
export class ManageRaportsService {
  private raportsURI = '/raports';

  constructor(private readonly http: HttpClient) {}

  getClosedRaports() {
    // let params = new HttpParams();
    // params = params.append('isClosed', 'true');
    return this.http.get<Raport[]>(`${api}${this.raportsURI}/getClosedRaports`);
  }

  acceptRaport(raportId: number) {
    return this.http.patch(`${api}${this.raportsURI}/accept?raportId=${raportId}`, raportId, {responseType: 'text'});
  }

  rejectRaport(raportId: number) {
    return this.http.patch(`${api}${this.raportsURI}/reject?raportId=${raportId}`, raportId, {responseType: 'text'});
  }
}
