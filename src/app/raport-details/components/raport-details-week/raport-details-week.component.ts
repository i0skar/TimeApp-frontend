import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Week } from '../../models/week';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-raport-details-week',
  templateUrl: './raport-details-week.component.html',
  styleUrls: ['./raport-details-week.component.scss'],
})
export class RaportDetailsWeekComponent {
  @Input() week: Week;
  @Input() isClosed: boolean;
  @Output() updateWeek = new EventEmitter();
  @Output() editProject = new EventEmitter();

  constructor(private projectsService: ProjectsService) {}

  delete(project) {
    console.log(project);
    this.projectsService.deleteProject(project.id).subscribe(() => window.location.reload(), () => window.location.reload());
  }

  edit(project) {
    this.editProject.emit(project);
  }
}
