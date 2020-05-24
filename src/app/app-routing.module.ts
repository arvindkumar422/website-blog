import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BlogHomeComponent} from './Blog/blog-home/blog-home.component';
import {BlogNewComponent} from './Blog/blog-new/blog-new.component';
import {BlogListComponent} from './Blog/blog-list/blog-list.component';
import {BlogContentComponent} from './Blog/blog-content/blog-content.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogHomeComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'new', component: BlogNewComponent },
      { path: 'list', component: BlogListComponent },
      { path: ':id', component: BlogContentComponent },
    ] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
