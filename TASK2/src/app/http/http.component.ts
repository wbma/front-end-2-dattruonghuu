import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  someData = 'hello';
  baseURL = 'http://media.mw.metropolia.fi/wbma/media/';
  mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) { }

  getJSON() {
    interface Myinterface {
      license: string;
    }

    this.http.get<Myinterface>('assets/package.json').subscribe(data => {
      console.log(data);
      this.someData = data.license;
    });
  }

  getMedia() {
    this.http.get(this.baseURL).subscribe(media => {
      this.mediaURL += media[0].filename;
      console.log(this.mediaURL);
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }
}
