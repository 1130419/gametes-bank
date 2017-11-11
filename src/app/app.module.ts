import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LeftBarComponent } from './left-bar/left-bar.component';

//Services
import { SampleService } from './services/SampleService';
import { WorkListComponent } from './laboratory/work-list/work-list.component';

const appRoutes: Routes = [
  { path: 'laboratory', component: LaboratoryComponent,
    children: [
      { path: 'work-list', component: WorkListComponent}
    ]
},
];

@NgModule({
  declarations: [
    AppComponent,
    LaboratoryComponent,
    LeftBarComponent,
    WorkListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
