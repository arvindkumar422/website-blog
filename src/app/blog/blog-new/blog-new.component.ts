import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpBlogService} from '../BlogServices/http-blog.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {

  @ViewChild('blogForm') blogForm: NgForm;

  constructor(private httpBlogService: HttpBlogService) { }

  ngOnInit() {
  }

  onSubmitBlog() {
    var div = document.createElement("div");
    div.innerHTML = this.blogForm.value.blogData.content;
    console.log(String(div.outerHTML))

    this.httpBlogService.postBlog(this.blogForm.value.blogData.title,
      String(div.outerHTML),
      this.blogForm.value.blogData.blogImgUrl).subscribe(
      data => {
        console.log(data);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
