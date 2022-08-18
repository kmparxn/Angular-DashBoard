import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'calendar', component:CalendarComponent},
  {path: 'documents', component:DocumentsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'team', component:TeamComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
