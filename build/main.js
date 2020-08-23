(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_room_create_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-room/create-room.component */ "./src/app/create-room/create-room.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");






const routes = [
    { path: '', redirectTo: '/createroom', pathMatch: 'full' },
    { path: 'createroom', component: _create_room_create_room_component__WEBPACK_IMPORTED_MODULE_2__["CreateRoomComponent"] },
    { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'video-chat';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_room_create_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-room/create-room.component */ "./src/app/create-room/create-room.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _create_room_create_room_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoomComponent"],
        _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _create_room_create_room_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoomComponent"],
                    _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/create-room/create-room.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-room/create-room.component.ts ***!
  \******************************************************/
/*! exports provided: CreateRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomComponent", function() { return CreateRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _twilio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twilio.service */ "./src/app/twilio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socketio.service */ "./src/app/socketio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = ["onlineUsers"];
function CreateRoomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRoomComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendInvite(user_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3, " ");
} }
function CreateRoomComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRoomComponent_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRoomComponent_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const invitation_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.join(invitation_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "JOIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);
} }
class CreateRoomComponent {
    constructor(twilioService, router, socketService) {
        this.twilioService = twilioService;
        this.router = router;
        this.socketService = socketService;
        this.onlineUsersArray = [];
        this.invitations = [];
        this.socketService.setupSocketConnectionn();
        this.twilioService.msgSubject.subscribe((r) => {
            this.message = r;
        });
    }
    ngOnInit() {
        this.socketService.getUsers().subscribe((response) => {
            this.roomName = this.sessionId;
            this.sessionId = localStorage.getItem('sessionId');
            this.onlineUsersArray = response.filter((e) => e !== this.sessionId);
            console.log('users array', this.onlineUsersArray);
        });
        this.socketService.recieveMessage().subscribe((response) => {
            console.log('response', response);
            this.invitations.push(response);
        });
    }
    log(message) {
        this.message = message;
    }
    disconnect() {
        if (this.twilioService.roomObj && this.twilioService.roomObj !== null) {
            this.twilioService.roomObj.disconnect();
            this.twilioService.roomObj = null;
        }
    }
    sendInvite(userId) {
        console.log('userId :', userId);
        this.socketService.sendMessage(userId, this.roomName);
    }
    join(roomName) {
        console.log(roomName);
        let storage = JSON.parse(localStorage.getItem('token') || '{}');
        let date = Date.now();
        if (!roomName) {
            return;
        }
        this.twilioService.getToken(this.name, roomName).subscribe((d) => {
            this.accessToken = d['token'];
            localStorage.setItem('token', JSON.stringify({
                token: this.accessToken,
                created_at: date,
            }));
            this.router.navigate(['/room'], {
                queryParams: { roomName: roomName },
            });
        }, (error) => this.log(JSON.stringify(error)));
    }
    connect() {
        let storage = JSON.parse(localStorage.getItem('token') || '{}');
        let date = Date.now();
        if (!this.roomName) {
            console.log('in if');
            this.message = 'enter username and room name.';
            return;
        }
        this.twilioService.getToken(this.username, this.roomName).subscribe((d) => {
            this.accessToken = d['token'];
            localStorage.setItem('token', JSON.stringify({
                token: this.accessToken,
                created_at: date,
            }));
            this.router.navigate(['/room'], {
                queryParams: { roomName: this.roomName },
            });
        }, (error) => this.log(JSON.stringify(error)));
    }
}
CreateRoomComponent.ɵfac = function CreateRoomComponent_Factory(t) { return new (t || CreateRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"])); };
CreateRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateRoomComponent, selectors: [["app-create-room"]], viewQuery: function CreateRoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.onlineUsers = _t.first);
    } }, decls: 16, vars: 3, consts: [["id", "video-container"], ["onlineuUsers", ""], [2, "text-align", "center"], ["style", "margin-bottom: 10px;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["placeholder", "Enter Your Name", "type", "text", 3, "ngModel", "ngModelChange"], [1, "button", 3, "click"], [2, "margin-bottom", "10px"], [3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function CreateRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Online Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateRoomComponent_div_5_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Invitations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateRoomComponent_div_9_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Video Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRoomComponent_Template_input_ngModelChange_13_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRoomComponent_Template_button_click_14_listener() { return ctx.connect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onlineUsersArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invitations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["#video-container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 80%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .box[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    margin-right: 17px;\r\n    float: right;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 80%;\r\n    margin: auto;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXJvb20vY3JlYXRlLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXJvb20vY3JlYXRlLXJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI3ZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-room',
                templateUrl: './create-room.component.html',
                styleUrls: ['./create-room.component.css'],
            }]
    }], function () { return [{ type: _twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"] }]; }, { onlineUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['onlineUsers', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _twilio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twilio.service */ "./src/app/twilio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = ["localVideo"];
const _c1 = ["remoteVideo"];
class RoomComponent {
    constructor(twilioService, route) {
        this.twilioService = twilioService;
        this.route = route;
        this.route.queryParams.subscribe((params) => {
            this.roomName = params['roomName'];
        });
        let str = JSON.parse(localStorage.getItem('token'));
        this.accessToken = str.token;
        this.twilioService.msgSubject.subscribe((r) => {
            this.message = r;
        });
    }
    ngOnInit() {
        this.twilioService.localVideo = this.localVideo;
        this.twilioService.remoteVideo = this.remoteVideo;
        this.twilioService.connectToRoom(this.accessToken, {
            name: this.roomName,
            audio: true,
            video: { width: 240 },
        });
    }
    disconnect() {
        if (this.twilioService.roomObj && this.twilioService.roomObj !== null) {
            this.twilioService.roomObj.disconnect();
            this.twilioService.roomObj = null;
        }
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
    } }, decls: 11, vars: 0, consts: [["id", "local"], ["localVideo", ""], ["id", "remote"], ["remoteVideo", ""], [1, "button", 3, "click"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "local video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "remote video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_9_listener() { return ctx.disconnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Disconnect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#video-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  #remote[_ngcontent-%COMP%], #local[_ngcontent-%COMP%] {\r\n    width: 240px;\r\n    height: 240px;\r\n    margin: 45px auto;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top:39%;\r\n    right:30%;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    margin-right: 17px;\r\n  }\r\n  \r\n  #remote[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n  }\r\n  \r\n  #local[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n  }\r\n  \r\n  #remote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #local[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 50%;\r\n    margin: auto;\r\n    padding: 2px;\r\n    margin-top: 7px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjcmVtb3RlLCAjbG9jYWwge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIG1hcmdpbjogNDVweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MzklO1xyXG4gICAgcmlnaHQ6MzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgfVxyXG4gICNyZW1vdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgI2xvY2FsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgI3JlbW90ZSBwLCAjbG9jYWwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.css'],
            }]
    }], function () { return [{ type: _twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { localVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['localVideo', { static: true }]
        }], remoteVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['remoteVideo', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/socketio.service.ts":
/*!*************************************!*\
  !*** ./src/app/socketio.service.ts ***!
  \*************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class SocketioService {
    constructor() { }
    setupSocketConnectionn() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SOCKET_ENDPOINT);
        this.socket.on('connect', () => {
            localStorage.setItem('sessionId', this.socket.id);
        });
        this.socket.emit('new-user', 'Dharmil');
    }
    sendMessage(id, roomName) {
        this.socket.emit('sendMessage', { id: id, roomName: roomName });
    }
    recieveMessage() {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this.socket.on('recieveMessage', (message) => {
                observer.next(message);
            });
        });
    }
    getUsers() {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this.socket.on('new-users', (users) => {
                observer.next(users);
            });
        });
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/twilio.service.ts":
/*!***********************************!*\
  !*** ./src/app/twilio.service.ts ***!
  \***********************************/
/*! exports provided: TwilioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwilioService", function() { return TwilioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twilio-video */ "./node_modules/twilio-video/es5/index.js");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class TwilioService {
    constructor(http, router, rendererFactory) {
        this.http = http;
        this.router = router;
        this.rendererFactory = rendererFactory;
        this.msgSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.microphone = true;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    getToken(username, roomName) {
        return this.http.get(`/token?identity=${username}&roomName=${roomName}`);
    }
    mute() {
        this.roomObj.localParticipant.audioTracks.forEach(function (audioTrack) {
            audioTrack.track.disable();
        });
        this.microphone = false;
    }
    unmute() {
        this.roomObj.localParticipant.audioTracks.forEach(function (audioTrack) {
            audioTrack.track.enable();
        });
        this.microphone = true;
    }
    connectToRoom(accessToken, options) {
        Object(twilio_video__WEBPACK_IMPORTED_MODULE_1__["connect"])(accessToken, options).then((room) => {
            this.roomObj = room;
            if (!this.previewing && options['video']) {
                this.startLocalVideo();
                this.previewing = true;
            }
            this.roomParticipants = room.participants;
            room.participants.forEach((participant) => {
                this.attachParticipantTracks(participant);
            });
            room.on('participantDisconnected', (participant) => {
                this.detachTracks(participant);
            });
            room.on('participantConnected', (participant) => {
                this.roomParticipants = room.participants;
                this.attachParticipantTracks(participant);
                participant.on('trackPublished', (track) => {
                    const element = track.attach();
                    this.renderer.data.id = track.sid;
                    this.renderer.setStyle(element, 'height', '100 % ');
                    this.renderer.setStyle(element, 'max - width', '100 % ');
                    this.renderer.appendChild(this.remoteVideo.nativeElement, element);
                });
            });
            // When a Participant adds a Track, attach it to the DOM.
            room.on('trackPublished', (track, participant) => {
                this.attachTracks([track]);
            });
            // When a Participant removes a Track, detach it from the DOM.
            room.on('trackRemoved', (track, participant) => {
                this.detachTracks([track]);
            });
            room.once('disconnected', (room) => {
                room.localParticipant.tracks.forEach((track) => {
                    track.track.stop();
                    const attachedElements = track.track.detach();
                    attachedElements.forEach((element) => element.remove());
                    room.localParticipant.videoTracks.forEach((video) => {
                        const trackConst = [video][0].track;
                        trackConst.stop(); // <- error
                        trackConst.detach().forEach((element) => element.remove());
                        room.localParticipant.unpublishTrack(trackConst);
                    });
                    let element = this.remoteVideo.nativeElement;
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    let localElement = this.localVideo.nativeElement;
                    while (localElement.firstChild) {
                        localElement.removeChild(localElement.firstChild);
                    }
                    this.router.navigate(['createroom']);
                });
            });
        }, (error) => {
            alert(error.message);
        });
    }
    attachParticipantTracks(participant) {
        participant.tracks.forEach((part) => {
            this.trackPublished(part);
        });
    }
    trackPublished(publication) {
        if (publication.isSubscribed)
            this.attachTracks(publication.track);
        if (!publication.isSubscribed)
            publication.on('subscribed', (track) => {
                this.attachTracks(track);
            });
    }
    attachTracks(tracks) {
        const element = tracks.attach();
        this.renderer.data.id = tracks.sid;
        this.renderer.setStyle(element, 'height', '100 % ');
        this.renderer.setStyle(element, 'max - width', '100 % ');
        this.renderer.appendChild(this.remoteVideo.nativeElement, element);
    }
    startLocalVideo() {
        this.roomObj.localParticipant.videoTracks.forEach((publication) => {
            const element = publication.track.attach();
            this.renderer.data.id = publication.track.sid;
            this.renderer.setStyle(element, 'width', '25 % ');
            this.renderer.appendChild(this.localVideo.nativeElement, element);
        });
    }
    detachTracks(tracks) {
        tracks.tracks.forEach((track) => {
            let element = this.remoteVideo.nativeElement;
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        });
    }
}
TwilioService.ɵfac = function TwilioService_Factory(t) { return new (t || TwilioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
TwilioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TwilioService, factory: TwilioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwilioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();


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
const environment = {
    production: false,
    SOCKET_ENDPOINT: 'https://video-chat12.herokuapp.com',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dharmil\Desktop\twilio\video-chat\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map