import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBlogService {

  constructor(private httpClient: HttpClient) { }

  postBlog(blogTitle: string, content:  string, imageUrl: string) {
    return this.httpClient.post('/api/createblog', {title: blogTitle, body: content, imgUrl: imageUrl});
  }


  getAllBlogs() {
    return this.httpClient.get('/api/blogs/');
  }


  getBlogById(id: string) {
    return this.httpClient.get('/api/blog/' + id);
  }

}

