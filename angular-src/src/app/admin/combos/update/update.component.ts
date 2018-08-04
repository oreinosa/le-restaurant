import { Component } from "@angular/core";
import { Combo } from "../../../shared/classes/combo";
import { Router, ActivatedRoute } from "@angular/router";
import { CombosService } from "../combos.service";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Update } from "../../../shared/classes/update";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss", "../../styles/crud.scss"]
})
export class UpdateComponent extends Update<Combo> {
  constructor(
    public service: CombosService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }
}
