import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogContentComponent } from './blog-content/blog-content.component';

@NgModule({
  declarations: [ BlogHomeComponent, BlogNewComponent, BlogListComponent, BlogContentComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    // BlogHomeComponent
    // Do this when you need to use <app-blog-home> in components of other modules (like NgModule).
    // Can't be used there unless exported like this.
  ]
})
export class BlogModule { }