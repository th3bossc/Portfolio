import { Component } from '@angular/core';
import { FetchDataService, project } from '../Services/fetch-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects$ : Observable<project[]>;
  constructor(private projectDataService : FetchDataService) {}
  ngOnInit() {
    // this.projectDataService.getData().subscribe((data) => {
    //   this.projects = Object.values(data);
    //   this.projects.reverse();
    // })
    this.projects$ = this.projectDataService.getData();
  }
}
