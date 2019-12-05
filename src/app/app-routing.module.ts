import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component'
import { SecondComponent } from './second/second.component'

const routes:Routes=[
  {path:'detail',component:DetailComponent},
  {path:'second',component:SecondComponent},
]
@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
