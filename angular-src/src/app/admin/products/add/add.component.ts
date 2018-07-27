import { ProductsService } from './../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component, OnInit } from "@angular/core";
import { Register } from "../../../shared/classes/register";
import { NgForm } from '@angular/forms';
import { Product } from '../../../shared/classes/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  product = new Register();
  roles = [
    "Customer",
    "Admin"
  ];
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private notifications: NotificationsService
  ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const product: Register = form.value;
    this.productsService.addProduct(product).subscribe(
      (product: Product) => {
        // console.log(product);
        this.notifications.show(
          `Added product (ID: ${product._id}`,
          "Products",
          "success"
        );
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        console.log(e.error);
        this.notifications.show(
          e.error,
          "Products",
          "danger"
        );
        form.resetForm();
      }
    );
  }
}