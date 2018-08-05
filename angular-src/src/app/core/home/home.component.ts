import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId: string = "asd";
  receiptNumber = 0;
  subtotal = 0;
  tax = 0;
  total = 0;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  onChangeSubtotal(){
    this.tax = this.subtotal * 0.1;
    this.total = this.subtotal + this.tax;
  }

  generateReceipt() {
    const body = {
      userId: this.userId,
      receiptNumber: this.receiptNumber,
      subtotal: this.subtotal,
      tax: this.tax,
      total: this.total,
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
