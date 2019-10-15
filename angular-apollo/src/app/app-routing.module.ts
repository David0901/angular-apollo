import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { TestDetailComponent } from './test-detail/test-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TestListComponent
  },
  {
    path: ':id',
    component: TestDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
