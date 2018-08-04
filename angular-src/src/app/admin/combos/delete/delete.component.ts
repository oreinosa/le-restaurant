import { CombosService } from "./../combos.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Delete } from "../../../shared/classes/delete";
import { Combo } from "../../../shared/classes/combo";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss", "../../styles/crud.scss"]
})
export class DeleteComponent extends Delete<Combo> {
  constructor(
    public service: CombosService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }
}
