import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subtotal = 0;
  user: string;
  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  generateReceipt() {
    const body = {
      subtotal: this.subtotal,
      user: this.user
    };
    this.http.post(environment.api + 'receipt', body, { responseType: 'blob' })
      .subscribe(blob => {
        console.log(blob);
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        a.href = url;
        a.download = 'receipt.pdf';
        // a.click();
        const frame = document.createElement('iframe');   // CREATE AN IFRAME.
        frame.style.visibility = "hidden";    // HIDE THE FRAME.
        frame.src = url;
        document.body.appendChild(frame);  // APPEND THE FRAME TO THE PAGE.
        frame.contentWindow.focus();
        frame.contentWindow.print();
      }, e => console.log(e));
  }

}
