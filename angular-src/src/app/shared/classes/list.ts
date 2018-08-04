import { OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { switchMap, tap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { DAO } from "./dao";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

export class List<T> implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  public dataSource = new MatTableDataSource<T>([]);
  loading = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // public objects: T[];

  constructor(
    public service: DAO<T>,
    public router: Router,
    public displayedColumns: string[]
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.service
      .all()
      .pipe(
        tap(() => this.loading = false),
        switchMap(() => this.service.objects),
        takeUntil(this.ngUnsubscribe),
        tap(objects => console.log(`${this.service.collectionName} : `, objects)),
    )
      .subscribe((objects: T[]) => this.dataSource.data = objects);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onAction(action: string, object: T) {
    let _id = "";
    if (object) {
      _id = object['_id'];
      this.service.setSelectedObject(object);
    }
    this.router.navigate(["admin", this.service.collectionName.toLowerCase(), action, _id]);
  }
}
