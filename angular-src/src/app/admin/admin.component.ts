import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  links: any[];
  constructor() { }

  ngOnInit() {
    this.links = [
      { label: "Users", route: "users", icon: "people" },
      { label: "Products", route: "products", icon: "fastfood" },
      { label: "Categories", route: "categories", icon: "assignment" },
      { label: "Combos", route: "combos", icon: "restaurant" }
    ];
  }
}
