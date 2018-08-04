import { UploadService } from './../../../upload/upload.service';
import { ProductsService } from "./../products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Delete } from "../../../shared/classes/delete";
import { Product } from "../../../shared/classes/product";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss", "../../styles/crud.scss"]
})
export class DeleteComponent extends Delete<Product> {
  constructor(
    public service: ProductsService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute,
    private uploadService: UploadService
  ) {
    super(service, notifications, router, route);
  }

  onSubmit() {
    this.uploadService.deleteFile(this.object.imageURL).subscribe(
      (res: string) => {
        console.log(res);
        super.onSubmit();
      },
      (error: any) => console.log(error)
    )

  }
}
