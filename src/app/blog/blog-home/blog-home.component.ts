import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  blogData = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }


  newBlog() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
