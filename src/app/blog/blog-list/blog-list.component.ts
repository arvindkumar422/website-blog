import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpBlogService} from '../BlogServices/http-blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogData: any = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private httpBlogService: HttpBlogService ) { }

  ngOnInit() {
    this.getBlogData();
  }

  getBlogData() {
    this.httpBlogService.getAllBlogs().subscribe(
      res => {
        console.log(res);
        this.blogData = res;
      }
    );
  }

  goToBlog(id: string) {
    console.log(id);
    this.router.navigate(['blog', id]);
  }

}
