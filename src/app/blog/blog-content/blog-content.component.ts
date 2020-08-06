import { Component, OnInit, AfterViewInit, ApplicationRef, Injector } from '@angular/core';
import { HttpBlogService } from '../BlogServices/http-blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from '../BlogModels/blog.model';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit, AfterViewInit {

  id: string;
  blog: BlogModel;
  blogLoaded = false;
  urlIdString: string;
  window: any;
  bodyHtml: HTMLElement;

  constructor(private httpBlogService: HttpBlogService, router: Router, private activatedRoute: ActivatedRoute,
    private injector: Injector,
    private app: ApplicationRef) { }

  ngOnInit() {
    this.urlIdString = 'id';
    this.id = this.activatedRoute.snapshot.params[this.urlIdString];
    this.getBlogContents();
  }

  ngAfterViewInit() {


  }


  getBlogContents() {
    this.httpBlogService.getBlogById(this.id).subscribe(
      res => {
        this.blog = res as BlogModel;
        this.printBlogHtml();
        this.blogLoaded = true;
      }
    );
  }

  printBlogHtml(): any {

    var support = (function () {
      if (!(window as any).DOMParser) return false;
      var parser = new DOMParser();
      try {
        parser.parseFromString('x', 'text/html');
      } catch (err) {
        return false;
      }
      return true;
    })();

    /**
     * Convert a template string into HTML DOM nodes
     * @param  {String} str The template string
     * @return {Node}       The template HTML
     */
    var stringToHTML = function (str) {

      // If DOMParser is supported, use it
      if (support) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
      }

      console.log("old style")
      // Otherwise, fallback to old-school method
      var dom = document.createElement('div');
      dom.innerHTML = str;
      return dom;

    };

    this.bodyHtml = stringToHTML(this.blog.body);
    console.log(this.bodyHtml)
  }

}
