webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.myVar = 10;
    }
    AboutComponent.prototype.onClick = function () {
        this.myVar += 10;
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-about',
        template: "\n   <h1>About Page</h1>\n",
        styles: []
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.barrel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/task-list/task-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__task_list_task_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__title_title_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_task_component__ = __webpack_require__("../../../../../src/app/task/task.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__task_task_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony reexport RouterModule */
/* unused harmony reexport Routes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_task_new_task_component__ = __webpack_require__("../../../../../src/app/new-task/new-task.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__new_task_new_task_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/task-detail/task-detail.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__task_detail_task_detail_component__["a"]; });













//# sourceMappingURL=app.barrel.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        //title: string = "Hello Angular";
        this.title = "Task Manager";
        this.myProperty = false;
    }
    AppComponent.prototype.getTitle = function () {
        return this.title;
    };
    AppComponent.prototype.onClick = function (val) {
        // if (this.myProperty) this.myProperty = false;
        // else this.myProperty = true;
        this.myProperty = !this.myProperty;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n    <!-- Replace components dynamically -->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_barrel__ = __webpack_require__("../../../../../src/app/module.barrel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_barrel__ = __webpack_require__("../../../../../src/app/app.barrel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__module_barrel__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__module_barrel__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__module_barrel__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__module_barrel__["d" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_1__module_barrel__["e" /* AppRouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_barrel__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["b" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["c" /* TaskListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_barrel__["d" /* TitleComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["e" /* TaskComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["f" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["g" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_barrel__["h" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["i" /* NewTaskComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["j" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_3__app_barrel__["k" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_barrel__["l" /* TaskDetailComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_barrel__["a" /* AppComponent */]],
        exports: []
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-contact',
        template: "<h1>Contact Page</h1>",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-footer',
        template: " \n  \n  <div class=\"container\">\n    &copy; 2017 taskmanager.com\n  </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-header',
        template: "<header>\n  <nav>\n  \n      <div class=\"container\">\n          <div class=\"navbar navbar-inverse\">\n              <div class=\"navbar-header\">\n                  <div class=\"navbar-brand\">\n                      My Task Manager\n                  </div>\n              </div>\n              <ul class=\"nav navbar-nav\">\n                  <li><a routerLink=\"/\">Home</a></li>\n                  <li><a routerLink=\"/about\">About</a></li>\n                  <li><a routerLink=\"/tasks\">Tasks</a></li>\n                  <li><a routerLink=\"/contact\">Contact</a></li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n</header>  "
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    //change detection
    function HomeComponent(taskSvc) {
        this.taskSvc = taskSvc;
        this.count = 0;
        // this.interval = setInterval(() => this.count++, 1000);
    }
    HomeComponent.prototype.inc = function () {
        this.count++;
    };
    HomeComponent.prototype.call = function () {
        var _this = this;
        this.taskSvc.get()
            .subscribe(function () { return _this.count = 10; });
    };
    HomeComponent.prototype.ngOnDesstroy = function () {
        this.interval.clearInterval();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-home',
        template: "<h2>Home Page</h2>\n    <h1 [dlShow]=\"true\">Show directive demo</h1>\n\n    <h1 *dlIf=\"false\">If Directive Demo</h1>\n\n    \n    <h1>{{count}}</h1>\n\n    <button class=\"btn btn-success\" (click)=\"inc()\">Increment</button>\n    <button class=\"btn btn-success\" (click)=\"call()\">Make Call</button>\n\n\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/module.barrel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__angular_http__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_module__ = __webpack_require__("../../../../../src/app/router.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__router_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/shared/shared.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a"]; });





//# sourceMappingURL=module.barrel.js.map

/***/ }),

/***/ "../../../../../src/app/new-task/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_task_model__ = __webpack_require__("../../../../../src/shared/models/task.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewTaskComponent = (function () {
    function NewTaskComponent(taskSvc, router) {
        this.taskSvc = taskSvc;
        this.router = router;
        this.task = new __WEBPACK_IMPORTED_MODULE_3__shared_models_task_model__["a" /* Task */]();
    }
    NewTaskComponent.prototype.onSave = function () {
        var _this = this;
        this.task.id = Math.floor((Math.random() * 100));
        this.taskSvc.save(this.task)
            .subscribe(function () {
            _this.router.navigate(["/tasks"]);
            _this.clearAll();
        });
    };
    NewTaskComponent.prototype.clearAll = function () {
        this.task = new __WEBPACK_IMPORTED_MODULE_3__shared_models_task_model__["a" /* Task */]();
    };
    return NewTaskComponent;
}());
NewTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-new-task',
        template: __webpack_require__("../../../../../src/app/new-task/new-task.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewTaskComponent);

var _a, _b;
//# sourceMappingURL=new-task.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-task/new-task.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <form #frm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <input #txtName=\"ngModel\" required type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"task.name\" />\r\n                <span class=\"text-danger\" *ngIf=\"txtName.dirty && txtName.errors?.required\">Required</span>\r\n                <span class=\"text-danger\" *ngIf=\"txtName.dirty && txtName.errors?.minlength\">Min 3 Chars</span>\r\n                <span class=\"text-danger\" *ngIf=\"txtName.dirty && txtName.errors?.maxlength\">Max 10 Chars</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\r\n                <select #txtCategory=\"ngModel\" [(ngModel)]=\"task.category\" name=\"category\" class=\"form-control\" required>\r\n                    <optgroup>\r\n                        <option>--select--</option>\r\n                        <option>General</option>\r\n                        <option>Shopping</option>\r\n                        <option>Other</option>\r\n                    </optgroup>\r\n                </select>\r\n\r\n                <!-- <input type=\"text\" #txtCategory=\"ngModel\" name=\"category\" placeholder=\"Category\" class=\"form-control\" [(ngModel)]=\"task.category\"\r\n                    /> -->\r\n                <span class=\"text-danger\" *ngIf=\"txtCategory.dirty&&txtCategory.errors?.required\">Required</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                High <input type=\"radio\" name=\"priority\" value=\"High\" [(ngModel)]=\"task.priority\"/>\r\n                Low <input type=\"radio\" name=\"priority\" value=\"Low\" [(ngModel)]=\"task.priority\"/>\r\n                Medium <input type=\"radio\" name=\"priority\" value=\"Medium\" [(ngModel)]=\"task.priority\"/>\r\n                <!-- <input type=\"text\" name=\"priority\" placeholder=\"Priority\" class=\"form-control\" [(ngModel)]=\"task.priority\" /> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-success pull-right\" (click)=\"onSave()\" [disabled]=\"frm.invalid\">\r\n                    Save New task\r\n                    <i class=\"glyphicon glyphicon-plus\"></i>\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_task_new_task_component__ = __webpack_require__("../../../../../src/app/new-task/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_task_resolver__ = __webpack_require__("../../../../../src/shared/task.resolver.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_4__task_list_task_list_component__["a" /* TaskListComponent */], resolve: { tasks: __WEBPACK_IMPORTED_MODULE_8__shared_task_resolver__["a" /* TaskResolver */] } },
    { path: 'tasks/new', component: __WEBPACK_IMPORTED_MODULE_5__new_task_new_task_component__["a" /* NewTaskComponent */] },
    { path: 'tasks/:id', component: __WEBPACK_IMPORTED_MODULE_6__task_detail_task_detail_component__["a" /* TaskDetailComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(ROUTES)],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_task_resolver__["a" /* TaskResolver */]]
    })
], AppRouterModule);

//# sourceMappingURL=router.module.js.map

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskDetailComponent = (function () {
    function TaskDetailComponent(taskSvc, activeRoute) {
        this.taskSvc = taskSvc;
        this.activeRoute = activeRoute;
        this.task = {};
        //light weight
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activeRoute.snapshot.params.id;
        this.taskSvc.getById(id)
            .subscribe(function (response) { return _this.task = response; });
    };
    TaskDetailComponent.prototype.ngOnDestroy = function () {
        console.log("Cleanup logic");
    };
    return TaskDetailComponent;
}());
TaskDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-task-detail',
        template: " <div class=\"panel panel-info\">\n    <div class=\"panel-heading\"><h3>{{task.name}}</h3></div>\n    <div class=\"panel-body\">\n      <div>{{task.category}}</div>\n      <div>{{task.priority}}</div>\n    </div>\n  </div>",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TaskDetailComponent);

var _a, _b;
//# sourceMappingURL=task-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    //constructor injection
    function TaskListComponent(taskSvc, activatedRoute) {
        this.taskSvc = taskSvc;
        this.activatedRoute = activatedRoute;
        this.task = {};
    }
    //life cycle hook
    TaskListComponent.prototype.ngOnInit = function () {
        this.tasks = this.activatedRoute.snapshot.data["tasks"];
    };
    TaskListComponent.prototype.ngOnDestroy = function () {
        // console.log("unsubscribing");
        // this.obs.unsubscribe();
    };
    TaskListComponent.prototype.loadData = function () {
        var _this = this;
        this.obs = this.taskSvc.get()
            .subscribe(function (data) { return _this.tasks = data; }, function (err) { return _this.hasError = true; });
    };
    TaskListComponent.prototype.onNotified = function (event) {
        console.log(event);
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-task-list',
        template: __webpack_require__("../../../../../src/app/task-list/task-list.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TaskListComponent);

var _a, _b;
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <button class=\"btn btn-success\" routerLink=\"/tasks/new\">New Task</button>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"hasError\" class=\"alert alert-danger\">\r\n    Failed to load data. Please try again\r\n</div>\r\n\r\n<div class=\"col-md-5\">\r\n    <div class=\"well\" *ngFor=\"let task of tasks\">\r\n        <app-task [routerLink]=\"'/tasks/'+task.id\" [task]=\"task\" (notify)=\"onNotified($event)\"></app-task>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskComponent = (function () {
    function TaskComponent(taskSvc) {
        this.taskSvc = taskSvc;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    TaskComponent.prototype.onRemove = function (id) {
        this.notify.emit({ id: 1 });
        // this.taskSvc.remove(id)
        //     .subscribe(
        //     () => this.notify.emit()
        //     );
    };
    return TaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], TaskComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], TaskComponent.prototype, "notify", void 0);
TaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-task',
        template: "\n    <div class=\"row\">\n        <h3>{{task.name | uppercase}}</h3>\n           <b class=\"text-muted\">{{task.category | lowercase}}</b>\n           <div class=\"text-muted\">Completed: \n                <input type=\"checkbox\" disabled=\"true\" [(ngModel)]=\"task.completed\"/>\n           </div>\n           <div>\n              <i [ngClass]=\"task.priority==='high'?'text-danger':'text-success'\" class=\"glyphicon glyphicon-time\"> {{task.priority}}</i>\n           </div>\n           <div class=\"pull-right\">\n            {{task.createdDate | date: 'MM-dd-yyyy hh:mm'}}\n                {{task.createdDate | time}}\n           </div>\n           </div>\n           <div class=\"row\">\n           <button class=\"btn btn-danger btn-sm pull-right\" (click)=\"onRemove(task.id)\">\n               Remove\n               <i class=\"glyphicon glyphicon-remove\"></i>\n           </button>\n      </div>\n        \n           "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */]) === "function" && _b || Object])
], TaskComponent);

var _a, _b;
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    return TitleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], TitleComponent.prototype, "title", void 0);
TitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-title',
        template: "<h1>{{title}}</h1>"
    }),
    __metadata("design:paramtypes", [])
], TitleComponent);

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(http) {
        this.http = http;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.users = this.http.get('https://api.github.com/users')
            .map(function (response) { return response.json(); })
            .toPromise()
            .then(this.success)
            .catch(this.error);
        // .subscribe(function (response) {
        //   this.users = response;
        //   console.log(this.users);
        // });
    };
    UserListComponent.prototype.success = function (data) {
        console.log(data);
    };
    UserListComponent.prototype.error = function (err) {
        console.log(err);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-user-list',
        template: "\n<div class=\"col-md-5\">\n  <div class=\"well\" *ngFor=\"let user of users | async\">\n  \n    <h4>{{user.login}}</h4>\n    <img class=\"img img-circle\" [src]=\"user.avatar_url\" width=\"180\" height=\"180\"/>\n  \n  </div>\n  \n</div>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/shared/if.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IfDirective = (function () {
    function IfDirective(template, container) {
        this.template = template;
        this.container = container;
    }
    Object.defineProperty(IfDirective.prototype, "dlIf", {
        set: function (val) {
            if (val) {
                this.container.createEmbeddedView(this.template);
            }
            else {
                this.container.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return IfDirective;
}());
IfDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */])({
        selector: '[dlIf]',
        inputs: ['dlIf']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewContainerRef */]) === "function" && _b || Object])
], IfDirective);

var _a, _b;
//# sourceMappingURL=if.directive.js.map

/***/ }),

/***/ "../../../../../src/shared/models/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());

// export class Address{
//     address1:string;
//     city:string;
//     state:string;
//     zip:string;
//     phone:string;,
//     emails:Array<Email>;
// }
// export class Email{
//     emailId:string;
//     primary:boolean;
//     type:string;
// } 
//# sourceMappingURL=task.model.js.map

/***/ }),

/***/ "../../../../../src/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_pipe__ = __webpack_require__("../../../../../src/shared/time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_directive__ = __webpack_require__("../../../../../src/shared/show.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__if_directive__ = __webpack_require__("../../../../../src/shared/if.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__time_pipe__["a" /* TimePipe */], __WEBPACK_IMPORTED_MODULE_3__show_directive__["a" /* ShowDirective */], __WEBPACK_IMPORTED_MODULE_4__if_directive__["a" /* IfDirective */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__time_pipe__["a" /* TimePipe */], __WEBPACK_IMPORTED_MODULE_3__show_directive__["a" /* ShowDirective */], __WEBPACK_IMPORTED_MODULE_4__if_directive__["a" /* IfDirective */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/shared/show.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowDirective = (function () {
    function ShowDirective(template, render) {
        this.template = template;
        this.render = render;
    }
    Object.defineProperty(ShowDirective.prototype, "dlShow", {
        set: function (val) {
            if (val) {
                // this.template.nativeElement.style.display = "inline";
                this.render.setElementStyle(this.template.nativeElement, 'display', 'inline');
            }
            else {
                this.render.setElementStyle(this.template.nativeElement, 'display', 'none');
            }
        },
        enumerable: true,
        configurable: true
    });
    return ShowDirective;
}());
ShowDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */])({
        selector: '[dlShow]',
        inputs: ['dlShow']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Renderer */]) === "function" && _b || Object])
], ShowDirective);

var _a, _b;
//# sourceMappingURL=show.directive.js.map

/***/ }),

/***/ "../../../../../src/shared/task.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/shared/task.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskResolver = (function () {
    function TaskResolver(taskSvc) {
        this.taskSvc = taskSvc;
    }
    TaskResolver.prototype.resolve = function () {
        return this.taskSvc.get();
    };
    return TaskResolver;
}());
TaskResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], TaskResolver);

var _a;
//# sourceMappingURL=task.resolver.js.map

/***/ }),

/***/ "../../../../../src/shared/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.url = "http://localhost:4000/tasks/";
    }
    TaskService.prototype.get = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); }); //serialization
    };
    TaskService.prototype.save = function (task) {
        return this.http.post(this.url, task)
            .map(function (response) { return response.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(err); });
    };
    TaskService.prototype.remove = function (id) {
        return this.http.delete("" + this.url + id)
            .map(function (response) { return response.json(); });
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get("" + this.url + id)
            .map(function (response) { return response.json(); });
    };
    return TaskService;
}());
TaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TaskService);

var _a;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ "../../../../../src/shared/time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).fromNow();
    };
    return TimePipe;
}());
TimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'time'
    })
], TimePipe);

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map