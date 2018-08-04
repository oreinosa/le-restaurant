(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module~combos-combos-module~products-products-module~users-users-module"],{

/***/ "./src/app/admin/styles/crud.scss":
/*!****************************************!*\
  !*** ./src/app/admin/styles/crud.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-bottom: 15px; }\n\n.mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/admin/styles/list.scss":
/*!****************************************!*\
  !*** ./src/app/admin/styles/list.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-table, .mat-paginator {\n  background-color: inherit; }\n\n.mat-header-cell {\n  color: grey !important; }\n\n.mat-cell, .mat-header-cell {\n  padding: 5px 10px; }\n\n.mat-cell {\n  overflow-wrap: break-word; }\n\n.table-container {\n  position: relative;\n  max-height: 500px;\n  overflow: auto; }\n\ntable {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/classes/create.ts":
/*!******************************************!*\
  !*** ./src/app/shared/classes/create.ts ***!
  \******************************************/
/*! exports provided: Create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
var Create = /** @class */ (function () {
    function Create(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
    }
    Create.prototype.onSubmit = function (form) {
        var _this = this;
        var product = form.value;
        this.service.create(product).subscribe(function (addedObject) {
            console.log(addedObject);
            _this.notifications.show("Added " + _this.service.className + " (ID: " + addedObject["_id"], _this.service.collectionName, "success");
            _this.router.navigate(["../"], { relativeTo: _this.route });
        }, function (e) {
            console.log(e.error);
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
            form.resetForm();
        });
    };
    return Create;
}());



/***/ }),

/***/ "./src/app/shared/classes/dao.ts":
/*!***************************************!*\
  !*** ./src/app/shared/classes/dao.ts ***!
  \***************************************/
/*! exports provided: DAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return DAO; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var DAO = /** @class */ (function () {
    function DAO(http, api, className, collectionName) {
        this.http = http;
        this.api = api;
        this.className = className;
        this.collectionName = collectionName;
        this.selectedProductSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.objects = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + api + "/";
    }
    DAO.prototype.getSelectedObject = function () {
        return this.selectedProductSubject.asObservable();
    };
    DAO.prototype.setSelectedObject = function (object) {
        return this.selectedProductSubject.next(object);
    };
    DAO.prototype.isObjectSelected = function () {
        return !!this.selectedProductSubject.getValue();
    };
    DAO.prototype.all = function () {
        var _this = this;
        return this.http.get(this.api).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            // console.log(res.data);
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (objects) {
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.one = function (_id) {
        return this.http.get(this.api + _id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }));
    };
    DAO.prototype.create = function (newObject) {
        var _this = this;
        return this.http.post(this.api, newObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (addedProduct) {
            var objects = _this.objects.getValue().slice();
            objects.push(addedProduct);
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.update = function (_id, object) {
        var _this = this;
        return this.http.put(this.api + _id, object).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (editedProduct) {
            var objects = _this.objects.getValue().slice();
            var index = objects.findIndex(function (_object) { return _object["_id"] === editedProduct["_id"]; });
            objects[index] = editedProduct;
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.delete = function (_id) {
        var _this = this;
        return this.http.delete(this.api + _id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            var objects = _this.objects.getValue().slice();
            var index = objects.findIndex(function (_object) { return _object["_id"] === _id; });
            objects.splice(index, 1);
            _this.objects.next(objects);
        }));
    };
    return DAO;
}());



/***/ }),

/***/ "./src/app/shared/classes/delete.ts":
/*!******************************************!*\
  !*** ./src/app/shared/classes/delete.ts ***!
  \******************************************/
/*! exports provided: Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Delete = /** @class */ (function () {
    function Delete(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Delete.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return params.get("_id"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_id) {
            return !!_id
                ? false
                : _this.router.navigate(["../"], { relativeTo: _this.route });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (_id) { return !!_id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (_id) { return _this.service.isObjectSelected()
            ? _this.service.getSelectedObject()
            : _this.service.one(_id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (object) { return _this.object = object; });
    };
    Delete.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Delete.prototype.onSubmit = function () {
        var _this = this;
        this.service.delete(this.object["_id"]).subscribe(function () {
            _this.notifications.show("Deleted " + _this.service.className + " successfully", _this.service.collectionName, "success");
        }, function (e) {
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
        }, function () { return _this.router.navigate(["../../"], { relativeTo: _this.route }); });
    };
    return Delete;
}());



/***/ }),

/***/ "./src/app/shared/classes/list.ts":
/*!****************************************!*\
  !*** ./src/app/shared/classes/list.ts ***!
  \****************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var List = /** @class */ (function () {
    // public objects: T[];
    function List(service, router, displayedColumns) {
        this.service = service;
        this.router = router;
        this.displayedColumns = displayedColumns;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.loading = true;
    }
    List.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.service
            .all()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.loading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () { return _this.service.objects; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (objects) { return console.log(_this.service.collectionName + " : ", objects); }))
            .subscribe(function (objects) { return _this.dataSource.data = objects; });
    };
    List.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    List.prototype.onAction = function (action, object) {
        var _id = "";
        if (object) {
            _id = object['_id'];
            this.service.setSelectedObject(object);
        }
        this.router.navigate(["admin", this.service.collectionName.toLowerCase(), action, _id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], List.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], List.prototype, "paginator", void 0);
    return List;
}());



/***/ }),

/***/ "./src/app/shared/classes/update.ts":
/*!******************************************!*\
  !*** ./src/app/shared/classes/update.ts ***!
  \******************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Update = /** @class */ (function () {
    function Update(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Update.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return params.get("_id"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_id) {
            _this._id = _id;
            if (_id === null || !_id) {
                _this.router.navigate(["../"], { relativeTo: _this.route });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (_id) { return !!_id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (_id) {
            return _this.service.isObjectSelected()
                ? _this.service.getSelectedObject()
                : _this.service.one(_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngUnsubscribe)
        // tap(object => console.log(object))
        )
            .subscribe(function (object) { return (_this.object = object); });
    };
    Update.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Update.prototype.onSubmit = function (form) {
        var _this = this;
        var object = form.value;
        this.service.update(this._id, object).subscribe(function (editedObject) {
            _this.notifications.show("Edited " + _this.service.className + " (ID: " + editedObject["_id"], _this.service.collectionName, "success");
            _this.router.navigate(["../../"], { relativeTo: _this.route });
        }, function (e) {
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
            form.resetForm(object);
        });
    };
    return Update;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module~combos-combos-module~products-products-module~users-users-module.js.map