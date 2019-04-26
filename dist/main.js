(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nh1{\r\n    color: blueviolet;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Vladimir Sylivanov's {{ title }}!\n  </h1>\n</div>\n<app-skype-component></app-skype-component>\n<app-tel-component></app-tel-component>\n<app-email-component></app-email-component>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Anonymizer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _skype_component_skype_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skype-component/skype-component.component */ "./src/app/skype-component/skype-component.component.ts");
/* harmony import */ var _tel_component_tel_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tel-component/tel-component.component */ "./src/app/tel-component/tel-component.component.ts");
/* harmony import */ var _email_component_email_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-component/email-component.component */ "./src/app/email-component/email-component.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _skype_component_skype_component_component__WEBPACK_IMPORTED_MODULE_5__["SkypeComponentComponent"],
                _tel_component_tel_component_component__WEBPACK_IMPORTED_MODULE_6__["TelComponentComponent"],
                _email_component_email_component_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponentComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/email-component/email-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/email-component/email-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: #369;\r\n    font-size: 200%;\r\n}\r\ninput {\r\n  border: unset;\r\n  border-bottom: 1px blue solid;\r\n  margin-right: 10px;\r\n  outline: none;\r\n  width: 75%;\r\n}\r\n.b-email-container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n.b-email-container div {\r\n  flex: 33%;\r\n}\r\nselect {\r\n    display: block;\r\n    width: 30%;\r\n    padding: 4px 7px;\r\n    border: 1px solid #aaa;\r\n    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);\r\n    border-radius: .5em;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    background-color: #fff;\r\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\r\n      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: right .7em top 50%, 0 0;\r\n    background-size: .65em auto, 100%;\r\n}\r\nselect:hover {\r\n    border-color: #888;\r\n  }\r\nselect:focus {\r\n    border-color: #aaa;\r\n    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);\r\n    box-shadow: 0 0 0 3px -moz-mac-focusring;\r\n    color: #222; \r\n    outline: none;\r\n  }\r\nselect option {\r\n    font-weight:normal;\r\n  }\r\n.b-email-container{\r\n    margin-bottom: 75px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtY29tcG9uZW50L2VtYWlsLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCO3lEQUNxRDtJQUNyRCxvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLGlDQUFpQztBQUNyQztBQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0Y7SUFDSSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLWNvbXBvbmVudC9lbWFpbC1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGNvbG9yOiAjMzY5O1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG59XHJcbmlucHV0IHtcclxuICBib3JkZXI6IHVuc2V0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBibHVlIHNvbGlkO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuLmItZW1haWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuLmItZW1haWwtY29udGFpbmVyIGRpdiB7XHJcbiAgZmxleDogMzMlO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjA0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRScpLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCNlNWU1ZTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogLjY1ZW0gYXV0bywgMTAwJTtcclxufVxyXG4gIHNlbGVjdDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gIHNlbGVjdDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDU5LCAxNTMsIDI1MiwgLjcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IC1tb3otbWFjLWZvY3VzcmluZztcclxuICAgIGNvbG9yOiAjMjIyOyBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5zZWxlY3Qgb3B0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5iLWVtYWlsLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/email-component/email-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/email-component/email-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Email anonymizer</h2>\n<div class=\"b-email-container\">\n  <div>\n  <h4>Input your text here</h4>\n  <input type=\"text\" [(ngModel)]='email' />\n  </div>\n  <div>\n  <h4>Select encode symbol</h4>\n  <select [(ngModel)]='selectedOperator'>\n    <option *ngFor='let o of operators' [value]='o'>\n        {{o}}\n    </option>\n  </select>\n  </div>\n  <div>\n  <h4>Encoded text is here</h4>\n  <p>{{encodeEmail(email)}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/email-component/email-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/email-component/email-component.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponentComponent", function() { return EmailComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailComponentComponent = /** @class */ (function () {
    function EmailComponentComponent() {
        this.operators = ["#", "X", "*"];
        this.allowedSymbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    EmailComponentComponent.prototype.isAllowed = function (char) {
        if (this.allowedSymbols.indexOf(char) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EmailComponentComponent.prototype.isAllowedEmail = function (char) {
        var eAllowedSymbols = this.allowedSymbols + "_" + "-" + "+" + "." + '@';
        if (eAllowedSymbols.indexOf(char) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EmailComponentComponent.prototype.encodeEmail = function (str) {
        if (this.selectedOperator === undefined) {
            this.selectedOperator = "*";
        }
        if (str === undefined) {
            return;
        }
        if (!str.includes("@")) {
            return str;
        }
        var pos = -1;
        var emailName;
        var domainName;
        while ((pos = str.indexOf("@", pos + 1)) != -1) {
            var tmpPos = void 0;
            var tmpCounter = 0;
            for (var i = pos; i >= 0; i--) {
                if (!this.isAllowedEmail(str[i])) {
                    tmpCounter++;
                }
                if (str[i - 1] === " " || i == 0) {
                    emailName = str.slice(i, pos);
                    tmpPos = i;
                    break;
                }
            }
            for (var i = pos; i < str.length; i++) {
                if (!this.isAllowedEmail(str[i])) {
                    tmpCounter++;
                }
                if (str[i + 1] === " " || i + 1 === str.length) {
                    domainName = str.slice(pos + 1, i + 1);
                    break;
                }
            }
            if (domainName.length === 0 ||
                !domainName.includes(".") ||
                !this.isAllowed(domainName[0]) ||
                !this.isAllowed(domainName[domainName.length - 1]) ||
                tmpCounter > 0 ||
                !this.isAllowed(emailName[0]) ||
                !this.isAllowed(emailName[emailName.length - 1])) {
                continue;
            }
            emailName = emailName.split("");
            if (emailName.length <= 2) {
                for (var i = 0; i < emailName.length; i++) {
                    emailName[i] = this.selectedOperator;
                }
            }
            else {
                for (var i = 1; i < emailName.length - 1; i++) {
                    emailName[i] = this.selectedOperator;
                }
            }
            str = str.split("");
            for (var i = tmpPos; i <= pos; i++) {
                for (var _i = 0, emailName_1 = emailName; _i < emailName_1.length; _i++) {
                    var j = emailName_1[_i];
                    str[i] = j;
                    emailName.shift();
                    break;
                }
            }
            str = str.join("");
        }
        return str;
    };
    EmailComponentComponent.prototype.ngOnInit = function () { };
    EmailComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-email-component",
            template: __webpack_require__(/*! ./email-component.component.html */ "./src/app/email-component/email-component.component.html"),
            styles: [__webpack_require__(/*! ./email-component.component.css */ "./src/app/email-component/email-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailComponentComponent);
    return EmailComponentComponent;
}());



/***/ }),

/***/ "./src/app/skype-component/skype-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/skype-component/skype-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: #369;\r\n    font-size: 200%;\r\n}\r\ninput {\r\n  border: unset;\r\n  border-bottom: 1px blue solid;\r\n  margin-right: 10px;\r\n  outline: none;\r\n  width: 75%;\r\n}\r\n.b-skype-container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n}\r\n.b-skype-container div {\r\n  flex: 33%;\r\n}\r\nselect {\r\n    display: block;\r\n    width: 30%;\r\n    padding: 4px 7px;\r\n    border: 1px solid #aaa;\r\n    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);\r\n    border-radius: .5em;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    background-color: #fff;\r\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\r\n      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: right .7em top 50%, 0 0;\r\n    background-size: .65em auto, 100%;\r\n}\r\nselect:hover {\r\n    border-color: #888;\r\n  }\r\nselect:focus {\r\n    border-color: #aaa;\r\n    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);\r\n    box-shadow: 0 0 0 3px -moz-mac-focusring;\r\n    color: #222; \r\n    outline: none;\r\n  }\r\nselect option {\r\n    font-weight:normal;\r\n}\r\n.b-skype-container{\r\n  margin-bottom: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t5cGUtY29tcG9uZW50L3NreXBlLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qjt5REFDcUQ7SUFDckQsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxpQ0FBaUM7QUFDckM7QUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9za3lwZS1jb21wb25lbnQvc2t5cGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjb2xvcjogIzM2OTtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiB1bnNldDtcclxuICBib3JkZXItYm90dG9tOiAxcHggYmx1ZSBzb2xpZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcbi5iLXNreXBlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iLXNreXBlLWNvbnRhaW5lciBkaXYge1xyXG4gIGZsZXg6IDMzJTtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogNHB4IDdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDFweCByZ2JhKDAsMCwwLC4wNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyOTIuNCUyMiUyMGhlaWdodCUzRCUyMjI5Mi40JTIyJTNFJTNDcGF0aCUyMGZpbGwlM0QlMjIlMjMwMDdDQjIlMjIlMjBkJTNEJTIyTTI4NyUyMDY5LjRhMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAtMTMtNS40SDE4LjRjLTUlMjAwLTkuMyUyMDEuOC0xMi45JTIwNS40QTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwJTIwMCUyMDgyLjJjMCUyMDUlMjAxLjglMjA5LjMlMjA1LjQlMjAxMi45bDEyOCUyMDEyNy45YzMuNiUyMDMuNiUyMDcuOCUyMDUuNCUyMDEyLjglMjA1LjRzOS4yLTEuOCUyMDEyLjgtNS40TDI4NyUyMDk1YzMuNS0zLjUlMjA1LjQtNy44JTIwNS40LTEyLjglMjAwLTUtMS45LTkuMi01LjUtMTIuOHolMjIlMkYlM0UlM0MlMkZzdmclM0UnKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwjZTVlNWU1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLjdlbSB0b3AgNTAlLCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IC42NWVtIGF1dG8sIDEwMCU7XHJcbn1cclxuICBzZWxlY3Q6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gIH1cclxuICBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAzcHggcmdiYSg1OSwgMTUzLCAyNTIsIC43KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAtbW96LW1hYy1mb2N1c3Jpbmc7XHJcbiAgICBjb2xvcjogIzIyMjsgXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuc2VsZWN0IG9wdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbn1cclxuLmItc2t5cGUtY29udGFpbmVye1xyXG4gIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skype-component/skype-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/skype-component/skype-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Skype anonymizer</h2>\n<div class=\"b-skype-container\">\n  <div>\n  <h4>Input your text here</h4>\n  <input type=\"text\" [(ngModel)]='skype' />\n  </div>\n  <div>\n  <h4>Select encode symbol</h4>\n  <select [(ngModel)]='selectedOperator'>\n    <option *ngFor='let o of operators' [value]='o'>\n        {{o}}\n    </option>\n  </select>\n  </div>\n  <div>\n  <h4>Encoded text is here</h4>\n  <p>{{encodeSkype(skype)}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skype-component/skype-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/skype-component/skype-component.component.ts ***!
  \**************************************************************/
/*! exports provided: SkypeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkypeComponentComponent", function() { return SkypeComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkypeComponentComponent = /** @class */ (function () {
    function SkypeComponentComponent() {
        this.operators = ["#", "X", "*"];
        this.allowedSymbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    SkypeComponentComponent.prototype.isAllowed = function (char) {
        if (this.allowedSymbols.indexOf(char) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SkypeComponentComponent.prototype.encodeSkype = function (str) {
        if (this.selectedOperator === undefined) {
            this.selectedOperator = "*";
        }
        if (str === undefined) {
            return;
        }
        var target = "skype:";
        if (!str.includes(target)) {
            return str;
        }
        var pos = -1;
        var skypeLogin;
        while ((pos = str.indexOf(target, pos + 1)) != -1) {
            str = str.split("");
            for (var i = pos + 6; i < str.length; i++) {
                if (!this.isAllowed(str[i])) {
                    if (str[i] === " " || str[i] === "?") {
                        skypeLogin = str.slice(pos + 7, i + 1);
                        if (skypeLogin.length > 0) {
                            str.splice(pos + 6, skypeLogin.length, this.selectedOperator);
                            break;
                        }
                        else {
                            str.splice(pos + 7, 0, " ");
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                if (i + 1 === str.length || i + 1 > str.length) {
                    skypeLogin = str.slice(pos + 6, i + 1);
                    if (skypeLogin.length > 0) {
                        str.splice(pos + 6, skypeLogin.length, this.selectedOperator);
                        break;
                    }
                }
            }
            str = str.join("");
        }
        return str;
    };
    SkypeComponentComponent.prototype.ngOnInit = function () { };
    SkypeComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-skype-component",
            template: __webpack_require__(/*! ./skype-component.component.html */ "./src/app/skype-component/skype-component.component.html"),
            styles: [__webpack_require__(/*! ./skype-component.component.css */ "./src/app/skype-component/skype-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkypeComponentComponent);
    return SkypeComponentComponent;
}());



/***/ }),

/***/ "./src/app/tel-component/tel-component.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tel-component/tel-component.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: #369;\r\n    font-size: 200%;\r\n}\r\ninput {\r\n  border: unset;\r\n  border-bottom: 1px blue solid;\r\n  margin-right: 10px;\r\n  outline: none;\r\n  width: 90%;\r\n}\r\n.b-phone-container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n.b-phone-container div {\r\n  flex: 20%;\r\n}\r\n.b-phone-container div:last-child{\r\n  flex: 30%;\r\n}\r\n.b-phone-define{\r\n  flex: 15%;\r\n}\r\n.b-phone-define input{\r\n  width: 25%;\r\n}\r\nselect {\r\n    display: block;\r\n    width: 30%;\r\n    padding: 4px 7px;\r\n    border: 1px solid #aaa;\r\n    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);\r\n    border-radius: .5em;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    background-color: #fff;\r\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\r\n      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: right .7em top 50%, 0 0;\r\n    background-size: .65em auto, 100%;\r\n}\r\nselect:hover {\r\n    border-color: #888;\r\n  }\r\nselect:focus {\r\n    border-color: #aaa;\r\n    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);\r\n    box-shadow: 0 0 0 3px -moz-mac-focusring;\r\n    color: #222; \r\n    outline: none;\r\n  }\r\nselect option {\r\n    font-weight:normal;\r\n  }\r\n.b-phone-container{\r\n    margin-bottom: 75px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVsLWNvbXBvbmVudC90ZWwtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCO3lEQUNxRDtJQUNyRCxvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLGlDQUFpQztBQUNyQztBQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0Y7SUFDSSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RlbC1jb21wb25lbnQvdGVsLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY29sb3I6ICMzNjk7XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogdW5zZXQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsdWUgc29saWQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4uYi1waG9uZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYi1waG9uZS1jb250YWluZXIgZGl2IHtcclxuICBmbGV4OiAyMCU7XHJcbn1cclxuLmItcGhvbmUtY29udGFpbmVyIGRpdjpsYXN0LWNoaWxke1xyXG4gIGZsZXg6IDMwJTtcclxufVxyXG4uYi1waG9uZS1kZWZpbmV7XHJcbiAgZmxleDogMTUlO1xyXG59XHJcbi5iLXBob25lLWRlZmluZSBpbnB1dHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjA0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRScpLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCNlNWU1ZTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogLjY1ZW0gYXV0bywgMTAwJTtcclxufVxyXG4gIHNlbGVjdDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gIHNlbGVjdDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDU5LCAxNTMsIDI1MiwgLjcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IC1tb3otbWFjLWZvY3VzcmluZztcclxuICAgIGNvbG9yOiAjMjIyOyBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5zZWxlY3Qgb3B0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5iLXBob25lLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tel-component/tel-component.component.html":
/*!************************************************************!*\
  !*** ./src/app/tel-component/tel-component.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Phone number anonymizer</h2>\n<div class=\"b-phone-container\">\n  <div>\n  <h4>Input your number here</h4>\n  <input type=\"text\" [(ngModel)]='inputPhoneN' />\n  </div>\n  <div>\n  <h4>Select mark char</h4>\n  <select [(ngModel)]='selectedOperator'>\n    <option *ngFor='let o of operators' [value]='o'>\n        {{o}}\n    </option>\n  </select>\n  </div>\n  <div class=\"b-phone-define\">\n    <h4>Define digits to hide (from 0 to 9)</h4>\n    <input type=\"number\" [(ngModel)]='numsOfMasks'>\n  </div>\n  <div>\n  <h4>Encoded text is here</h4>\n  <p>{{encodePhone(inputPhoneN)}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tel-component/tel-component.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tel-component/tel-component.component.ts ***!
  \**********************************************************/
/*! exports provided: TelComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelComponentComponent", function() { return TelComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TelComponentComponent = /** @class */ (function () {
    function TelComponentComponent() {
        this.operators = ["#", "X", "*"];
    }
    TelComponentComponent.prototype.numsOfMasksToF = function (numb) {
        if (numb === undefined || numb < 0) {
            numb = 0;
        }
        else if (numb > 9) {
            numb = 9;
        }
        return numb;
    };
    TelComponentComponent.prototype.encodePhone = function (str) {
        if (this.selectedOperator === undefined) {
            this.selectedOperator = "*";
        }
        if (str === undefined) {
            return;
        }
        if (!str.includes("+")) {
            return str;
        }
        var pos = -1;
        var phoneNumber = [];
        while ((pos = str.indexOf("+", pos + 1)) != -1) {
            var counter = 0;
            var tmp = str.indexOf(" ", pos);
            var isNan = 0;
            for (var i = pos + 1; i < tmp; i++) {
                if (isNaN(str[i] / 2)) {
                    isNan++;
                }
            }
            if (isNan > 0) {
                continue;
            }
            for (var i = tmp + 1; i < tmp + 12; i++) {
                if (typeof +str[i] === "number" && str[i] !== " ") {
                    counter++;
                    phoneNumber.push(str[i]);
                }
            }
            if (counter !== 9) {
                continue;
            }
            var numbOfM = this.numsOfMasksToF(this.numsOfMasks);
            for (var i = phoneNumber.length - 1; i >= phoneNumber.length - numbOfM; i--) {
                phoneNumber[i] = this.selectedOperator;
            }
            str = str.split("");
            for (var i = tmp + 1; i < tmp + 12; i++) {
                for (var _i = 0, phoneNumber_1 = phoneNumber; _i < phoneNumber_1.length; _i++) {
                    var j = phoneNumber_1[_i];
                    if (str[i] === " ") {
                        i++;
                    }
                    str[i] = j;
                    phoneNumber.shift();
                    break;
                }
            }
            str = str.join("");
        }
        return str;
    };
    TelComponentComponent.prototype.ngOnInit = function () { };
    TelComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tel-component",
            template: __webpack_require__(/*! ./tel-component.component.html */ "./src/app/tel-component/tel-component.component.html"),
            styles: [__webpack_require__(/*! ./tel-component.component.css */ "./src/app/tel-component/tel-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TelComponentComponent);
    return TelComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Compyter\Desktop\testP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map