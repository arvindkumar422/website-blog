import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit, AfterViewInit {


  blogData = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private elementRef : ElementRef ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(../../../assets/images/blog-bg.jpg)';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }

  newBlog() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
