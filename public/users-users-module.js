(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/admin/users/create/create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Add user</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='Name' [(ngModel)]='user.name' name='name' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='User name' [(ngModel)]='user.username' name='username' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"email\" placeholder='Email address' [(ngModel)]='user.email' name='email' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder='Role' [(ngModel)]='user.role' name='role' required [disabled]='f.submitted'>\r\n          <mat-option *ngFor='let role of roles' [value]='role'>{{ role }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='Password' [(ngModel)]='user.password' name='password' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Submit</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/users/create/create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.service */ "./src/app/admin/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/classes/user */ "./src/app/shared/classes/user.ts");
/* harmony import */ var _shared_classes_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/classes/create */ "./src/app/shared/classes/create.ts");
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
    function CreateComponent(usersService, router, route, notifications) {
        var _this = _super.call(this, usersService, notifications, router, route) || this;
        _this.usersService = usersService;
        _this.router = router;
        _this.route = route;
        _this.notifications = notifications;
        _this.user = new _shared_classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        _this.roles = [
            "Customer",
            "Admin"
        ];
        return _this;
    }
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/users/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/users/create/create.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], CreateComponent);
    return CreateComponent;
}(_shared_classes_create__WEBPACK_IMPORTED_MODULE_5__["Create"]));



/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>Delete {{service.className}}</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <ng-container *ngIf='object;else loading'>\n      <p>Delete {{service.className}} {{ object?._id }}</p>\n    </ng-container>\n    <ng-template #loading>\n      <mat-spinner class=\"col-12 mx-auto\"></mat-spinner>\n    </ng-template>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button type='button' (click)='onSubmit()'>Yes</button>\n    <button mat-button type='button' routerLink='../../'>No</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.service */ "./src/app/admin/users/users.service.ts");
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
    function DeleteComponent(usersService, notifications, router, route) {
        var _this = _super.call(this, usersService, notifications, router, route) || this;
        _this.usersService = usersService;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/users/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/admin/users/delete/delete.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeleteComponent);
    return DeleteComponent;
}(_shared_classes_delete__WEBPACK_IMPORTED_MODULE_4__["Delete"]));



/***/ }),

/***/ "./src/app/admin/users/list/list.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/users/list/list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button type='button' routerLink='add'>Add user</button>\r\n<div class=\"table-container\">\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n\r\n    <!-- ID Column -->\r\n    <!-- <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> ID </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n    </ng-container> -->\r\n\r\n    <!-- Created at Column -->\r\n    <ng-container matColumnDef=\"createdAt\">\r\n      <th mat-header-cell *matHeaderCellDef> Created at </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- User name Column -->\r\n    <ng-container matColumnDef=\"username\">\r\n      <th mat-header-cell *matHeaderCellDef> User name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Email address Column -->\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef> Email address </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Role Column -->\r\n    <ng-container matColumnDef=\"role\">\r\n      <th mat-header-cell *matHeaderCellDef> Role </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions Column -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-button type='button' (click)='onAction(\"update\",element)'>Update</button>\r\n        <button mat-button type='button' (click)='onAction(\"delete\",element)'>Delete</button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <ng-container *ngIf='loading'>\r\n    <mat-spinner class=\"mx-auto my-3\"></mat-spinner>\r\n  </ng-container>\r\n</div>\r\n<mat-paginator [length]='dataSource?.data?.length' [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>"

/***/ }),

/***/ "./src/app/admin/users/list/list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/users/list/list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-id {\n  width: 5%; }\n\n.mat-column-name {\n  width: 20%; }\n\n.mat-column-description {\n  width: 40%; }\n\n.mat-column-actions {\n  width: 20%; }\n\n.mat-table {\n  min-width: 700px; }\n"

/***/ }),

/***/ "./src/app/admin/users/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/users/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/admin/users/users.service.ts");
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
        var _this = _super.call(this, service, router, ["createdAt", "name", "username", "email", "role", "actions"]) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    ListComponent.prototype.onAction = function (action, user) {
        var username = "";
        if (user) {
            username = user['username'];
            this.service.setSelectedObject(user);
        }
        this.router.navigate(["admin", this.service.collectionName.toLowerCase(), action, username]);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/users/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/users/list/list.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss"), __webpack_require__(/*! ../../styles/list.scss */ "./src/app/admin/styles/list.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}(_shared_classes_list__WEBPACK_IMPORTED_MODULE_3__["List"]));



/***/ }),

/***/ "./src/app/admin/users/update/update.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Edit user</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf='object as user'>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='Name' [ngModel]='user.name' name='name' required [readonly]='f.submitted'>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='User name' [ngModel]='user.username' name='username' required [readonly]='f.submitted'>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder='Role' [ngModel]='user.role' name='role' required [disabled]='f.submitted'>\r\n            <mat-option *ngFor='let role of roles' [value]='role'>{{ role }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </ng-container>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Submit</button>\r\n      <button mat-button type='button' routerLink='../../' [disabled]='f.submitted'>Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/users/update/update.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/update/update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/admin/users/users.service.ts");
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
        _this.roles = [
            "Customer",
            "Admin"
        ];
        return _this;
    }
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/users/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/admin/users/update/update.component.scss"), __webpack_require__(/*! ../../styles/crud.scss */ "./src/app/admin/styles/crud.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UpdateComponent);
    return UpdateComponent;
}(_shared_classes_update__WEBPACK_IMPORTED_MODULE_4__["Update"]));



/***/ }),

/***/ "./src/app/admin/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/users/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/users/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/users/create/create.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], children: [
            { path: 'add', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'update/:_id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'delete', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
            { path: 'delete/:_id', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
        ]
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h2>Users</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <app-list></app-list>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet {\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/admin/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ "./src/app/admin/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/admin/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/users/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/users/update/update.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/users/delete/delete.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/users/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]],
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]
            ],
            providers: [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/admin/users/users.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/users/users.service.ts ***!
  \**********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/classes/dao */ "./src/app/shared/classes/dao.ts");
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



var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(httpClient) {
        return _super.call(this, httpClient, "users", "user", "Users") || this;
    }
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UsersService);
    return UsersService;
}(_shared_classes_dao__WEBPACK_IMPORTED_MODULE_2__["DAO"]));



/***/ }),

/***/ "./src/app/shared/classes/user.ts":
/*!****************************************!*\
  !*** ./src/app/shared/classes/user.ts ***!
  \****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, name, username, email, role, createdAt, password) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
        this.password = password;
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map