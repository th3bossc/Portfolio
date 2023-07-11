import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ExtraOptions } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path : '', component : DetailsComponent},
  {path : 'test', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
