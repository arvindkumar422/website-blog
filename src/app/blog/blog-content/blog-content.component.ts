import { Component, OnInit } from '@angular/core';
import {HttpBlogService} from '../BlogServices/http-blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogModel} from '../BlogModels/blog.model';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  id: string;
  blog: BlogModel;
  blogLoaded = false;
  urlIdString: string;

  constructor( private httpBlogService: HttpBlogService, router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.urlIdString = 'id';
    this.id = this.activatedRoute.snapshot.params[this.urlIdString];
    this.getBlogContents();
  }

  getBlogContents() {
    this.httpBlogService.getBlogById(this.id).subscribe(
      res => {
        this.blog = res as BlogModel;
        this.blogLoaded = true;
      }
    );
  }

}
