import { Component } from "@angular/core";
import { CombosService } from "../combos.service";
import { Combo } from "../../../shared/classes/combo";
import { Router } from "@angular/router";
import { List } from "../../../shared/classes/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss", "../../styles/crud.scss", "../../styles/list.scss"]
})

export class ListComponent extends List<Combo> {
  constructor(
    public service: CombosService,
    public router: Router,
  ) {
    super(
      service,
      router,
      ["products", "actions"]
    );
  }
}
