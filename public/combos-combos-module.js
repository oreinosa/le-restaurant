(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combos-combos-module"],{

/***/ "./src/app/admin/combos/combos-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/combos/combos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CombosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombosRoutingModule", function() { return CombosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/combos/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/combos/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/combos/create/create.component.ts");
/* harmony import */ var _combos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combos.component */ "./src/app/admin/combos/combos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _combos_component__WEBPACK_IMPORTED_MODULE_5__["CombosComponent"], children: [
            { path: 'add', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'update/:_id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'delete', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
            { path: 'delete/:_id', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
        ]
    },
];
var CombosRoutingModule = /** @class */ (function () {
    function CombosRoutingModule() {
    }
    CombosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CombosRoutingModule);
    return CombosRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/combos/combos.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/combos/combos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>Combos</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-list></app-list>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/combos/combos.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/combos/combos.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/combos/combos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/combos/combos.component.ts ***!
  \**************************************************/
/*! exports provided: CombosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombosComponent", function() { return CombosComponent; });
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

var CombosComponent = /** @class */ (function () {
    function CombosComponent() {
    }
    CombosComponent.prototype.ngOnInit = function () {
    };
    CombosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combos',
            template: __webpack_require__(/*! ./combos.component.html */ "./src/app/admin/combos/combos.component.html"),
            styles: [__webpack_require__(/*! ./combos.component.scss */ "./src/app/admin/combos/combos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CombosComponent);
    return CombosComponent;
}());



/***/ }),

/***/ "./src/app/admin/combos/combos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/combos/combos.module.ts ***!
  \***********************************************/
/*! exports provided: CombosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombosModule", function() { return CombosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _combos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combos-routing.module */ "./src/app/admin/combos/combos-routing.module.ts");
/* harmony import */ var _combos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combos.component */ "./src/app/admin/combos/combos.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/combos/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/combos/update/update.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/combos/list/list.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/combos/delete/delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CombosModule = /** @class */ (function () {
    function CombosModule() {
    }
    CombosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _combos_routing_module__WEBPACK_IMPORTED_MODULE_2__["CombosRoutingModule"]
            ],
            declarations: [_combos_component__WEBPACK_IMPORTED_MODULE_3__["CombosComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"]]
        })
    ], CombosModule);
    return CombosModule;
}());



/***/ }),

/***/ "./src/app/admin/combos/combos.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/combos/combos.service.ts ***!
  \************************************************/
/*! exports provided: CombosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombosService", function() { return CombosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_dao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes/dao */ "./src/app/shared/classes/dao.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var CombosService = /** @class */ (function (_super) {
    __extends(CombosService, _super);
    function CombosService(httpClient) {
        return _super.call(this, httpClient, "combos", "combo", "Combos") || this;
    }
    CombosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CombosService);
    return CombosService;
}(_shared_classes_dao__WEBPACK_IMPORTED_MODULE_1__["DAO"]));



/***/ }),

/***/ "./src/app/admin/combos/create/create.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/create/create.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Add combo</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class='add-products row'>\r\n        <div class=\"col-12\">\r\n          <h3>Add products</h3>\r\n        </div>\r\n        <ng-container *ngIf='allCategories'>\r\n          <div class=\"col-12\">\r\n            <!-- Categories input -->\r\n            <mat-form-field>\r\n              <input type=\"text\" placeholder=\"Categories\" matInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"categoryAuto\">\r\n              <mat-autocomplete #categoryAuto=\"matAutocomplete\" [displayWith]=\"displayCategoryFn\" (optionSelected)='filterProductsByCategory($event.option.value.name)'>\r\n                <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n                  {{ category.name }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf='allProducts  && allProductsByCategory'>\r\n          <div class=\"col-12\">\r\n            <!-- product input -->\r\n            <mat-form-field>\r\n              <input type=\"text\" placeholder=\"Products\" matInput [formControl]=\"productCtrl\" [matAutocomplete]=\"auto\" required>\r\n              <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayProductFn\">\r\n                <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product\">\r\n                  {{product.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12\" *ngIf='productCtrl.value as previewProduct'>\r\n            <img [src]=\"previewProduct.imageURL\" alt=\"previewProduct.name\" class=\"img-fluid\">\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <!-- add product button -->\r\n            <button type=\"button\" mat-button [disabled]='productCtrl.invalid' (click)='addProduct(productCtrl.value)'>Add product</button>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Submit</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/combos/create/create.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/create/create.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/combos/create/create.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/combos/create/create.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../products/products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../combos.service */ "./src/app/admin/combos/combos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_combo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/classes/combo */ "./src/app/shared/classes/combo.ts");
/* harmony import */ var _shared_classes_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/classes/create */ "./src/app/shared/classes/create.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function CreateComponent(combosService, router, route, notifications, productsService, categoriesService) {
        var _this = _super.call(this, combosService, notifications, router, route) || this;
        _this.combosService = combosService;
        _this.router = router;
        _this.route = route;
        _this.notifications = notifications;
        _this.productsService = productsService;
        _this.categoriesService = categoriesService;
        _this.combo = new _shared_classes_combo__WEBPACK_IMPORTED_MODULE_7__["Combo"]();
        _this.productCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        _this.addedProducts = [];
        _this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]({ name: "All" });
        return _this;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService
            .all().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (products) { return products.map(function (product) {
            return {
                name: product.name,
                _id: product._id,
                price: product.price,
                category: product.category
            };
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (products) {
            console.log('Products : ', products);
            _this.allProducts = products;
        }))
            .subscribe(function () { return _this.filterProductsByCategory('all'); });
        this.filteredProducts = this.productCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return value instanceof Object ? value.name : value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return _this.filterProducts(value); }));
        this.categoriesService
            .all().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (categories) { return categories.concat([{ name: "All" }]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (categories) { return categories.map(function (category) {
            return {
                name: category.name,
                _id: category._id,
            };
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (categories) { return console.log('Categories : ', categories); }))
            .subscribe(function (categories) { return _this.allCategories = categories; });
        this.filteredCategories = this.categoryCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return value instanceof Object ? value.name : value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return _this.filterCategories(value); }));
    };
    CreateComponent.prototype.filterCategories = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.name.toLowerCase().includes(filterValue); });
    };
    CreateComponent.prototype.displayCategoryFn = function (category) {
        return category ? category.name : "";
    };
    CreateComponent.prototype.filterProducts = function (value) {
        var filterValue = value.toLowerCase();
        return this.allProductsByCategory.filter(function (product) { return product.name.toLowerCase().includes(filterValue); });
    };
    CreateComponent.prototype.filterProductsByCategory = function (category) {
        var filterValue = category.toLowerCase();
        if (filterValue === "all") {
            this.allProductsByCategory = this.allProducts.slice();
        }
        else {
            this.allProductsByCategory = this.allProducts.filter(function (product) { return product.category.name.toLowerCase() === filterValue; });
        }
        this.productCtrl.setValue("");
    };
    CreateComponent.prototype.displayProductFn = function (product) {
        return product ? product.name : "";
    };
    CreateComponent.prototype.addProduct = function (product) {
        this.addedProducts.push(product);
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/combos/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/combos/create/create.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_combos_service__WEBPACK_IMPORTED_MODULE_3__["CombosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"]])
    ], CreateComponent);
    return CreateComponent;
}(_shared_classes_create__WEBPACK_IMPORTED_MODULE_8__["Create"]));



/***/ }),

/***/ "./src/app/admin/combos/delete/delete.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/delete/delete.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>Delete {{service.className}}</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <ng-container *ngIf='object;else loading'>\n      <p>Delete {{service.className}} {{ object?._id }}</p>\n    </ng-container>\n    <ng-template #loading>\n      <mat-spinner class=\"col-12 mx-auto\"></mat-spinner>\n    </ng-template>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button type='button' (click)='onSubmit()'>Yes</button>\n    <button mat-button type='button' routerLink='../../'>No</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/combos/delete/delete.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/delete/delete.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/combos/delete/delete.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/combos/delete/delete.component.ts ***!
  \*********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../combos.service */ "./src/app/admin/combos/combos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_classes_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/classes/delete */ "./src/app/shared/classes/delete.ts");
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
    function DeleteComponent(service, notifications, router, route) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-delete",
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/combos/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/admin/combos/delete/delete.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_combos_service__WEBPACK_IMPORTED_MODULE_0__["CombosService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeleteComponent);
    return DeleteComponent;
}(_shared_classes_delete__WEBPACK_IMPORTED_MODULE_4__["Delete"]));



/***/ }),

/***/ "./src/app/admin/combos/list/list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/combos/list/list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button type='button' routerLink='add'>Add combo</button>\r\n<div class=\"table-container\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n\r\n    <!-- ID Column -->\r\n    <!-- <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> ID </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n    </ng-container> -->\r\n\r\n    <!-- Products Column -->\r\n    <ng-container matColumnDef=\"products\">\r\n      <th mat-header-cell *matHeaderCellDef> Products </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.products}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions Column -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-button type='button' (click)='onAction(\"update\",element)'>Update</button>\r\n        <button mat-button type='button' (click)='onAction(\"delete\",element)'>Delete</button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <ng-container *ngIf='loading'>\r\n    <mat-spinner class=\"mx-auto my-3\"></mat-spinner>\r\n  </ng-container>\r\n</div>\r\n<mat-paginator [length]='dataSource?.data?.length' [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>"

/***/ }),

/***/ "./src/app/admin/combos/list/list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin/combos/list/list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/combos/list/list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/combos/list/list.component.ts ***!
  \*****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../combos.service */ "./src/app/admin/combos/combos.service.ts");
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
        var _this = _super.call(this, service, router, ["products", "actions"]) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/combos/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/combos/list/list.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss"), __webpack_require__(/*! ../../styles/list.scss */ "./src/app/admin/styles/list.scss")]
        }),
        __metadata("design:paramtypes", [_combos_service__WEBPACK_IMPORTED_MODULE_1__["CombosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}(_shared_classes_list__WEBPACK_IMPORTED_MODULE_3__["List"]));



/***/ }),

/***/ "./src/app/admin/combos/update/update.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/update/update.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Edit combo</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf='object as combo'>\r\n        <!-- <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='Name' [ngModel]='combo.name' name='name' required [readonly]='f.submitted'>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='Description' [ngModel]='combo.description' name='description' required [readonly]='f.submitted'>\r\n        </mat-form-field> -->\r\n      </ng-container>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Submit</button>\r\n      <button mat-button type='button' routerLink='../../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/combos/update/update.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/combos/update/update.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/combos/update/update.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/combos/update/update.component.ts ***!
  \*********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combos.service */ "./src/app/admin/combos/combos.service.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_classes_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/classes/update */ "./src/app/shared/classes/update.ts");
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
    function UpdateComponent(service, notifications, router, route) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/combos/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/admin/combos/update/update.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_combos_service__WEBPACK_IMPORTED_MODULE_2__["CombosService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UpdateComponent);
    return UpdateComponent;
}(_shared_classes_update__WEBPACK_IMPORTED_MODULE_4__["Update"]));



/***/ }),

/***/ "./src/app/shared/classes/combo.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/classes/combo.ts ***!
  \*****************************************/
/*! exports provided: Combo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combo", function() { return Combo; });
var Combo = /** @class */ (function () {
    function Combo(products) {
        this.products = products;
    }
    return Combo;
}());



/***/ })

}]);
//# sourceMappingURL=combos-combos-module.js.map