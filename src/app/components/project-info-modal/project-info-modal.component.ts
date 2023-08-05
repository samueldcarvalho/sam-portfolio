import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-project-info-modal',
  templateUrl: './project-info-modal.component.html',
  styleUrls: ['./project-info-modal.component.scss']
})
export class ProjectInfoModalComponent {
  /**
   *
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Project,
    public dialogRef: MatDialogRef<ProjectInfoModalComponent>) { }

}
