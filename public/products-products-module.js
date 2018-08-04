(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/admin/products/create/create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/create/create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Add product</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-lg-4 offset-lg-1\">\r\n          <input type=\"text\" placeholder='Image URL' [(ngModel)]='product.imageURL' name='imageURL' class='d-none'>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder='Name' [(ngModel)]='product.name' name='name' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder='Price' [(ngModel)]='product.price' name='price' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder='Cost' [(ngModel)]='product.cost' name='cost' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select placeholder='Category' [(ngModel)]='product.category' name='category' required>\r\n              <mat-option *ngFor='let category of categories' [value]='category'>{{ category.name }}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-lg-6 offset-lg-1 text-center my-2\">\r\n          <app-upload></app-upload>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted || !upload?.fileURL'>Submit</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/admin/products/create/create.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/create/create.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/create/create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/create/create.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_classes_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/classes/product */ "./src/app/shared/classes/product.ts");
/* harmony import */ var _shared_classes_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/classes/create */ "./src/app/shared/classes/create.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateComponent = /** @class */ (function (_super) {
    __extends(CreateComponent, _super);
    function CreateComponent(productsService, router, route, notifications, categoriesService) {
        var _this = _super.call(this, productsService, notifications, router, route) || this;
        _this.productsService = productsService;
        _this.router = router;
        _this.route = route;
        _this.notifications = notifications;
        _this.categoriesService = categoriesService;
        _this.product = new _shared_classes_product__WEBPACK_IMPORTED_MODULE_7__["Product"]();
        return _this;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService
            .all()
            .pipe(
        // tslint:disable-next-line:arrow-return-shorthand
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (categories) {
            return categories.map(function (category) {
                return { name: category.name, _id: category._id };
            });
        }))
            .subscribe(function (categories) { return (_this.categories = categories); });
    };
    CreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.upload.onSubmit("products", this.product.name).subscribe(function (imageURL) {
            console.log(imageURL);
            // this.product.imageURL = imageURL;
            var imageCtrl = form.controls.imageURL;
            imageCtrl.setValue(imageURL); // set imageURL input value to the resolt of the upload POST event
            // form.setValue({ ...form.value, "imageURL": res.data });
            console.log(form.value);
            _super.prototype.onSubmit.call(_this, form);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__["UploadComponent"]),
        __metadata("design:type", _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__["UploadComponent"])
    ], CreateComponent.prototype, "upload", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/products/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/products/create/create.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]])
    ], CreateComponent);
    return CreateComponent;
}(_shared_classes_create__WEBPACK_IMPORTED_MODULE_8__["Create"]));



/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>Delete {{service.className}}</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <ng-container *ngIf='object;else loading'>\n      <p>Delete {{service.className}} {{ object?._id }}</p>\n    </ng-container>\n    <ng-template #loading>\n      <mat-spinner class=\"col-12 mx-auto\"></mat-spinner>\n    </ng-template>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button type='button' (click)='onSubmit()'>Yes</button>\n    <button mat-button type='button' routerLink='../../'>No</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../upload/upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_classes_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/classes/delete */ "./src/app/shared/classes/delete.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteComponent = /** @class */ (function (_super) {
    __extends(DeleteComponent, _super);
    function DeleteComponent(service, notifications, router, route, uploadService) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        _this.uploadService = uploadService;
        return _this;
    }
    DeleteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.uploadService.deleteFile(this.object.imageURL).subscribe(function (res) {
            console.log(res);
            _super.prototype.onSubmit.call(_this);
        }, function (error) { return console.log(error); });
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-delete",
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/products/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/admin/products/delete/delete.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _upload_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"]])
    ], DeleteComponent);
    return DeleteComponent;
}(_shared_classes_delete__WEBPACK_IMPORTED_MODULE_5__["Delete"]));



/***/ }),

/***/ "./src/app/admin/products/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/products/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button type='button' routerLink='add'>Add product</button>\r\n<div class=\"table-container\">\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n\r\n    <!-- ID Column -->\r\n    <!-- <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> ID </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n    </ng-container> -->\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Price Column -->\r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.price | currency }} </td>\r\n    </ng-container>\r\n\r\n    <!-- Cost Column -->\r\n    <ng-container matColumnDef=\"cost\">\r\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.cost | currency }} </td>\r\n    </ng-container>\r\n\r\n    <!-- Category Column -->\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element?.category?.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Image Column -->\r\n    <ng-container matColumnDef=\"imageURL\">\r\n      <th mat-header-cell *matHeaderCellDef> Image </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <img [src]=\"element?.imageURL | viewImage\" alt='{{element?.name}} image not available' class='img-fluid'>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions Column -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-button type='button' (click)='onAction(\"update\",element)'>Update</button>\r\n        <button mat-button type='button' (click)='onAction(\"delete\",element)'>Delete</button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <ng-container *ngIf='loading'>\r\n    <mat-spinner class=\"mx-auto my-3\"></mat-spinner>\r\n  </ng-container>\r\n</div>\r\n<mat-paginator [length]='dataSource?.data?.length' [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>"

/***/ }),

/***/ "./src/app/admin/products/list/list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/products/list/list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  height: 250px; }\n\n.mat-column-name {\n  width: 20%; }\n\n.mat-column-price {\n  width: 15%; }\n\n.mat-column-cost {\n  width: 15%; }\n\n.mat-column-category {\n  width: 15%; }\n\n.mat-column-imageURL {\n  width: 20%;\n  text-align: center; }\n\n.mat-column-actions {\n  width: 15%; }\n\n.mat-table {\n  min-width: 700px; }\n"

/***/ }),

/***/ "./src/app/admin/products/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/products/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_classes_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/classes/list */ "./src/app/shared/classes/list.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(service, router) {
        var _this = _super.call(this, service, router, ["name", "price", "cost", "category", "imageURL", "actions"]) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/products/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/products/list/list.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss"), __webpack_require__(/*! ../../styles/list.scss */ "./src/app/admin/styles/list.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}(_shared_classes_list__WEBPACK_IMPORTED_MODULE_3__["List"]));



/***/ }),

/***/ "./src/app/admin/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/products/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/products/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/products/create/create.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ "./src/app/admin/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], children: [
            { path: 'add', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'update/:_id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'delete', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
            { path: 'delete/:_id', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
        ]
    },
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>Products</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-list></app-list>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/admin/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/admin/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../upload/upload.module */ "./src/app/upload/upload.module.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/admin/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ "./src/app/admin/products/products.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/products/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/products/update/update.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/products/delete/delete.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/products/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _upload_upload_module__WEBPACK_IMPORTED_MODULE_0__["UploadModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsRoutingModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]
            ],
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/admin/products/update/update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/update/update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Edit product</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf='object as product'>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-lg-4 offset-lg-1\">\r\n            <input type=\"text\" placeholder='Image URL' [(ngModel)]='product.imageURL' name='imageURL' class='d-none'>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder='Name' [ngModel]='product.name' name='name' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" placeholder='Price' [ngModel]='product.price' name='price' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" placeholder='Cost' [ngModel]='product.cost' name='cost' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-select placeholder='Category' [ngModel]='product.category' name='category' required [disabled]='f.submitted' [compareWith]='compareCategoryFn'>\r\n                <mat-option *ngFor='let category of categories' [value]='category'>{{ category.name }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-lg-6 offset-lg-1 text-center my-2\">\r\n            <app-upload [fileURL]='product.imageURL | viewImage'></app-upload>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Submit</button>\r\n      <button mat-button type='button' routerLink='../../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/products/update/update.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/update/update.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/update/update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/update/update.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_classes_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/classes/update */ "./src/app/shared/classes/update.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../upload/upload.component */ "./src/app/upload/upload.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateComponent = /** @class */ (function (_super) {
    __extends(UpdateComponent, _super);
    function UpdateComponent(service, notifications, router, route, categoriesService) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        _this.categoriesService = categoriesService;
        return _this;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.categoriesService
            .all().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (categories) { return categories.map(function (category) { return { name: category.name, _id: category._id }; }); }))
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    UpdateComponent.prototype.compareCategoryFn = function (a, b) {
        if (a && b) {
            return a._id === b._id;
        }
        return false;
    };
    UpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.upload.onSubmit("products", this.object.name).subscribe(function (imageURL) {
            console.log(imageURL);
            // this.product.imageURL = imageURL;
            var imageCtrl = form.controls.imageURL;
            imageCtrl.setValue(imageURL); // set imageURL input value to the resolt of the upload POST event
            // form.setValue({ ...form.value, "imageURL": res.data });
            console.log(form.value);
            _super.prototype.onSubmit.call(_this, form);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"]),
        __metadata("design:type", _upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"])
    ], UpdateComponent.prototype, "upload", void 0);
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/products/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/admin/products/update/update.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"]])
    ], UpdateComponent);
    return UpdateComponent;
}(_shared_classes_update__WEBPACK_IMPORTED_MODULE_6__["Update"]));



/***/ }),

/***/ "./src/app/shared/classes/product.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/classes/product.ts ***!
  \*******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(_id, name, cost, price, imageURL, category) {
        this._id = _id;
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.imageURL = imageURL;
        this.category = category;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 mb-4\">\n    <div class=\"drop_zone my-2 hover\" (click)='addFile()' (drop)='onDrop($event)' (dragover)=\"onDragover($event);\">\n      Select/Drag a file here!\n    </div>\n    <input type=\"file\" #file style='display:none' name='foo' placeholder='File upload' (change)=\"previewFile($event)\" [accept]='types'\n    />\n  </div>\n  <div class=\"col-12 mb-4\">\n    <ng-container *ngIf='fileURL;else noFile'>\n      <ng-container [ngSwitch]='type'>\n        <ng-container *ngSwitchCase='\"image\"'>\n          <img [src]=\"fileURL\" alt=\"image\" class='img-fluid'>\n        </ng-container>\n        <ng-container *ngSwitchCase='\"document\"'>\n          document preview\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #noFile>\n      <p>(No {{ type }} uploaded yet)</p>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  max-height: 350px;\n  text-align: center; }\n\n.drop_zone {\n  height: 75px;\n  border: 1px solid #aaa;\n  background-color: #fafafa;\n  text-align: center;\n  padding: 25px;\n  font-size: 25px;\n  line-height: 25px; }\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.types = ".png,.jpeg,.jpg";
        this.mode = 'new';
    }
    UploadComponent.prototype.ngOnInit = function () {
        if (this.fileURL) {
            this.mode = 'edit';
            this.originalFileURL = this.fileURL;
            this.originalFileURL = this.originalFileURL.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].static, '');
        }
        if (this.types.search(/(jpg|png|jpeg)/)) {
            this.type = "image";
        }
        else if (this.types.search(/pdf/)) {
            this.type = "document";
        }
    };
    UploadComponent.prototype.addFile = function () {
        this.fileInput.nativeElement.click();
    };
    UploadComponent.prototype.previewFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            if (this.type === "image") {
                this.previewImage(this.file);
            }
        }
    };
    UploadComponent.prototype.previewImage = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.fileURL = event.target.result;
        };
        reader.readAsDataURL(image);
    };
    UploadComponent.prototype.onDrop = function (ev) {
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    this.file = ev.dataTransfer.items[i].getAsFile();
                    // console.log('... file[' + i + '].name = ' + file.name);
                }
            }
        }
        else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
                this.file = ev.dataTransfer.files[i];
            }
        }
        this.previewImage(this.file);
        // Pass event to removeDragData for cleanup
        this.removeDragData(ev);
    };
    UploadComponent.prototype.removeDragData = function (ev) {
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        }
        else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    };
    UploadComponent.prototype.onDragover = function (event) {
        // console.log('File(s) in drop zone');
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();
    };
    UploadComponent.prototype.onSubmit = function (fileRoute, fileName) {
        // console.log(this.file);
        var type = this.file.type;
        var fileTypeIndex = type.indexOf("/") + 1;
        fileName += "." + type.substring(fileTypeIndex);
        fileName = fileName.toLowerCase();
        console.log('submitting ', this.mode);
        if (this.mode === 'new') {
            return this.uploadService.uploadFile(fileRoute, fileName, this.file);
        }
        else if (this.mode === "edit") {
            if (this.originalFileURL === this.fileURL) {
                console.log('file did not change');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.fileURL);
            }
            else {
                return this.uploadService.editFile(fileRoute, fileName, this.file, this.originalFileURL);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], UploadComponent.prototype, "fileURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("file"),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "fileInput", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-upload",
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]],
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"]]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "upload/";
    }
    UploadService.prototype.uploadFile = function (route, fileName, file) {
        var formData = this.prepareUpload(route, fileName, file);
        return this.http.post(this.api, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data;
        }));
    };
    UploadService.prototype.editFile = function (route, fileName, file, oldFilePath) {
        var formData = this.prepareUpload(route, fileName, file);
        formData.append('oldFilePath', oldFilePath);
        return this.http.put(this.api, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data;
        }));
    };
    UploadService.prototype.deleteFile = function (oldFilePath) {
        return this.http.delete(this.api + oldFilePath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data;
        }));
    };
    UploadService.prototype.prepareUpload = function (route, fileName, file) {
        var formData = new FormData();
        fileName = fileName.replace(/\s+/g, "-");
        formData.append("image", file, fileName);
        formData.append("route", route);
        return formData;
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map