import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   
})
export class AppComponent {
  title = 'client';
  data = {} as any;
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.data = data);
  }

}
