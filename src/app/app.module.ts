import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { StudentComponent } from './student/student.component';

const appRoutes: Routes = [
  {path: 'groups', component: GroupComponent},
  {path: 'groups/:id', component: StudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
