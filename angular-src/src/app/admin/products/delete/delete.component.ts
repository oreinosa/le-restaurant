import { ProductsService } from './../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap, filter, takeUntil } from 'rxjs/operators';
import { NotificationsService } from '../../../notifications/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  _id: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.route
      .paramMap.pipe(
        takeUntil(this.ngUnsubscribe),
        map(params => params.get('_id')),
        // tap(_id => !!_id ? false : this.router.navigate(['../'], { relativeTo: this.route })),
        filter(_id => !!_id))
      .subscribe(_id => this._id = _id);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    this.productsService.deleteProduct(this._id)
      .subscribe(
        (res: any) => {
          this.notifications.show('Product deleted successfully', 'Products', 'success');
        },
        (e: HttpErrorResponse) => {
          this.notifications.show(e.error, 'Products', 'danger');
        },
        () => this.router.navigate(['../../'], { relativeTo: this.route }));
  }

}
