import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Project } from "../../models/project";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string = "";
  public save_project: any;
  public filesToUpload: Array<File> = [];
  public url: string = "";

  constructor(private _projectService: ProjectService, private _uploadService: UploadService) {
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2019, '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {

    this._projectService.saveProject(this.project).subscribe(
      {
        next: (response) => {
          if (response.project) {

            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {

                this.save_project = result.project;
                console.log(response);

                this.status = 'success';
                form.reset();
              });

          } else {
            this.status = 'failed';
          }

        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
