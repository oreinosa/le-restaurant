import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
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
