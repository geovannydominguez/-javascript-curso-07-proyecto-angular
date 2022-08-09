import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public url: string = "";

  constructor(private _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      {
        next: (response) => {
          if (response.projects) {
            this.projects = response.projects;
          }
        },
        error: (error) => {
          console.log(<any>error);
        }
      }

    );
  }

}
