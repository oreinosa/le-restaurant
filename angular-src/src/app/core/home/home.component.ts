import { HOST } from './../../shared/host';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  total: number = 0;
  user: string;
  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  generateReceipt() {
    const body = {
      total: this.total,
      user: this.user
    };
    this.http.post(HOST + 'receipt', body, { responseType: 'blob' })
      .subscribe(blob => {
        console.log(blob);
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        a.href = url;
        a.download = 'receipt.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      }, e => console.log(e));
  }

}
