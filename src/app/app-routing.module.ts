import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsLayoutComponent } from './components/tags-layout/tags-layout.component';

const routes: Routes = [
  { path: '', component: TagsLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
