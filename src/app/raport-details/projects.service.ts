import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from './models';

const api = environment.apiUrl;

@Injectable()
export class ProjectsService {
  private projectsURI = '/projects';

  constructor(private readonly http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>(`${api}${this.projectsURI}`);
  }

  addProject(obj) {
    return this.http.post(`${api}/raports/addProject`, obj);
  }

  deleteProject(id) {
    return this.http.delete(`${api}/raports/deleteProject?projectId=${id}`);
  }
  patchProject(id, obj) {
    return this.http.patch(`${api}/raports/patchProject?projectId=${id}`, obj);
  }
}

