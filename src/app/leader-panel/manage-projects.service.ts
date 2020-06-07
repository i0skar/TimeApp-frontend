import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from './models/project';

const api = environment.apiUrl;

@Injectable()
export class ManageProjectsService {
  private projectsURI = '/projects';

  constructor(private readonly http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>(`${api}${this.projectsURI}`);
  }
}
