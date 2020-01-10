/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/accounts/Gigya.JS.Plugin.screenSet2/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = __webpack_provided_Object_dot_assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = gigya.Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new gigya.Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? gigya.Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new gigya.Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { gigya.Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts":
/*!*****************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var BaseServerWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
var PasswordInputs_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs.ts");
var Consent_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.Form_CONSTS = {
    originalSuccessScreen: 'data-original-success-screen',
    successScreen: 'data-on-success-screen',
    autoSkipScreen: 'data-on-auto-skip-screen',
    autoSkipFlag: 'data-auto-skip',
    screenSetSkippedScreen: 'data-on-screenset-skipped-screen',
    formErrorClass: 'gigya-form-error',
    defaultCheckedAttribute: 'data-checked',
};
exports.CUSTOM_VALIDATION_TIMEOUT_WARNING = 10000;
utils_1.DeepFreeze(exports.Form_CONSTS);
var NOT_IMPLEMENTED = 'Not implemented';
var BaseForm = /** @class */ (function (_super) {
    tslib_1.__extends(BaseForm, _super);
    function BaseForm(_screen, elForm, gigyaClass) {
        var _this = _super.call(this, elForm, _screen) || this;
        _this._screen = _screen;
        _this.gigyaClass = gigyaClass;
        _this.formErrors = {};
        // Form inputs
        _this.dataToServer = new Array();
        _this._dynamicInputs = new Array();
        _this._inputs = new Array();
        _this._errorDisplayElements = {};
        _this._widgets = new Array();
        _this._passwordInputs = new Array();
        _this._passwordRetypes = new Array();
        _this._secretQuestions = new Array();
        _this._autoSkipContainers = new Array();
        _this._serverWidgets = new Array();
        _this._needContainerHistory = false;
        _this.filters = new Array();
        _this.isPopulated = false;
        _this.dataStore = _this._screenSet.data;
        _this.bindID = _this.publishID ? _this.ID : gigyaClass;
        _this.originalSuccessScreen = elForm.getAttribute(exports.Form_CONSTS.successScreen);
        _this.successScreen = _this._screenSet.chooseNextScreen(_this.originalSuccessScreen);
        _this.autoSkip = elForm.getAttribute(exports.Form_CONSTS.autoSkipFlag) == 'true';
        _this.autoSkipScreen = elForm.getAttribute(exports.Form_CONSTS.autoSkipScreen) || _this.successScreen;
        _this.screenSetSkippedScreen = elForm.getAttribute(exports.Form_CONSTS.screenSetSkippedScreen) || _this.successScreen;
        _this.registerFormInputs();
        _this.registerBoundedErrorElements();
        _this._widgets = BaseFormWidget_1.BaseFormWidget.registerWidgets(_this);
        _this.submitHandler = function (event) {
            window.gigya.utils.DOM.disableDefaultEventHandling(event);
            _this.submit();
        };
        _this.addEventListener('submit', _this.submitHandler);
        _this.fieldChangedHandler = function (event) {
            _this.evaluateConditionalAttributes();
        };
        return _this;
    }
    Object.defineProperty(BaseForm.prototype, "submitButtonClicked", {
        get: function () {
            return this._submitButtonClicked;
        },
        enumerable: true,
        configurable: true
    });
    BaseForm.addFormToLibrary = function (form) {
        BaseForm.FormsLibrary[form.CONSTS.gigyaClass] = form;
    };
    BaseForm.registerForms = function (parent) {
        var forms = new Array();
        utils_1.ForEachProp(BaseForm.FormsLibrary, function (formType, gigyaClass) {
            var elements = parent.templateElement.querySelectorAll("form." + gigyaClass);
            utils_1.ForEach(elements, function (el) {
                // #43904 - Ensure form is never submitted, even in case of initialization error.
                // This works by modifying the HTML attribute of the instance element before initialization.
                // When the element is cloned into an instance, all submissions will be cancelled by default.
                el.setAttribute('onsubmit', 'return false;');
                forms.push(new formType(parent, el, gigyaClass));
            });
        });
        return forms;
    };
    BaseForm.prototype.registerFormInputs = function () {
        this._inputs = FormInput_1.FormInput.registerFormInputs(this.templateElement.elements, this);
        if (this._passwordInputs.length > 0)
            this._validatedPassword = this._passwordInputs[0];
    };
    BaseForm.prototype.addDataField = function (field) {
        this.dataToServer.push(field);
    };
    BaseForm.prototype.addDynamicWidgets = function (rootEl) {
        var _this = this;
        var newWidgets = BaseFormWidget_1.BaseFormWidget.registerDynamicWidgets(this, rootEl);
        utils_1.ForEach(newWidgets, function (w) { return w.linkInstanceElement(_this.instanceElement); });
        this._widgets = this._widgets.concat(newWidgets);
        return newWidgets;
    };
    BaseForm.prototype.removeDynamicWidgets = function (widgetsToRemove) {
        if (!this._widgets || !this._widgets.length)
            return;
        this._widgets = this._widgets.filter(function (w) { return widgetsToRemove.indexOf(w) < 0; });
        widgetsToRemove.forEach(function (widget) {
            widget.unlinkInstanceElement();
            widget.unlinkTemplate();
        });
    };
    BaseForm.prototype.isFormBoundedElement = function (boundedElement) {
        if (boundedElement.boundedTo === this.bindID)
            return true;
        var el = boundedElement.instanceElement || boundedElement.templateElement;
        var thisEl = this.instanceElement || this.templateElement;
        while (el && el !== thisEl && el !== document.documentElement)
            el = el.parentElement;
        return el === thisEl;
    };
    BaseForm.prototype.linkAndPopulateElements = function (items) {
        var _this = this;
        var linkItem = function (i) { return i.linkInstanceElement(_this.instanceElement); };
        utils_1.ForEach(items, linkItem);
        this.prePopulate();
    };
    BaseForm.prototype.ignoredFields = function () {
        return {
            'g-recaptcha-response': true,
            'fc-token': true,
        };
    };
    BaseForm.prototype.registerBoundedErrorElements = function () {
        var _this = this;
        // Find all error display elements on the screen in this form.
        var formBoundedElements = new Array();
        this._errorDisplayElements = {};
        utils_1.ForEachProp(this._screen._errorDisplayElements, function (boundedElements) {
            utils_1.ForEach(boundedElements, function (boundedElement) {
                if (_this.isFormBoundedElement(boundedElement)) {
                    formBoundedElements.push(boundedElement);
                }
            });
        });
        // Loop through each error element on this form.
        utils_1.ForEach(formBoundedElements, function (boundedElement) {
            boundedElement._form = _this;
            // Unless bound to this form, normalize field name (for example, "birthYear" becomes "profile.birthYear").
            var boundedTo = boundedElement.boundedTo === _this.bindID ? _this.bindID : _this.getNormalizedFieldName(boundedElement.boundedTo);
            // Add to list of elements bound to specific ID.
            var boundedList = _this._errorDisplayElements[boundedTo];
            if (!boundedList) {
                boundedList = _this._errorDisplayElements[boundedTo] = [];
            }
            boundedList.push(boundedElement);
        });
    };
    BaseForm.prototype.unlinkTemplate = function () {
        this.removeEventListener('submit', this.submitHandler);
        var unlinkItem = function (i) { return i.unlinkTemplate(); };
        utils_1.ForEach(this._widgets, unlinkItem);
        utils_1.ForEach(this._inputs, unlinkItem);
        _super.prototype.unlinkTemplate.call(this);
    };
    BaseForm.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            this.linkAndPopulateElements(this._inputs);
            this.linkAndPopulateElements(this._widgets);
            // Add event listener after link to instance elements.
            this.addEventListener('fieldChanged', this.fieldChangedHandler);
        }
    };
    BaseForm.prototype.getLoginProviders = function () {
        return LoginModes_1.LoginModes.standard.getLoginProviders(this._screenSet.data.apiData, this._screenSet.params, this._screenSet.data.regToken);
    };
    BaseForm.prototype.unlinkInstanceElement = function () {
        // The event listener needs to be removed so that it can't be triggered when instance elements don't exist.
        this.removeEventListener('fieldChanged', this.fieldChangedHandler);
        this.clearDynamicFields(this._dynamicInputs);
        this._dynamicInputs = [];
        if (this.instanceElement) {
            var unlinkItem = function (i) { return i.unlinkInstanceElement(); };
            utils_1.ForEach(this._widgets, unlinkItem);
            utils_1.ForEach(this._inputs, unlinkItem);
        }
        _super.prototype.unlinkInstanceElement.call(this);
    };
    //#region pre-populate form
    BaseForm.prototype.prePopulateDataFrom = function () {
        return [];
    };
    BaseForm.prototype.prePopulateData = function () {
        var apiData = this._screenSet.getApiData();
        var apiDataForForm = [{}];
        utils_1.ForEach(this.prePopulateDataFrom(), function (field) {
            apiDataForForm.push(window.gigya.utils.object.getPropertyBySerializedName(apiData, field, false));
        });
        return window.gigya.utils.object.merge(apiDataForForm);
    };
    BaseForm.prototype.getErrorKey = function (response) {
        var errorCode = response.errorCode;
        switch (errorCode) {
            case GSErrors_1.GSErrors.ACCOUNT_TEMPORARILY_LOCKED_OUT:
                return 'account_temporarily_locked_out';
            case GSErrors_1.GSErrors.ACCOUNT_DISABLED:
                return 'account_is_disabled';
            case GSErrors_1.GSErrors.LOGIN_FAILED_CAPTCHA_REQUIRED:
            case GSErrors_1.GSErrors.LOGIN_FAILED_WRONG_CAPTCHA:
                return 'login_captcha_error';
            case GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS:
                return 'login_identifier_exists';
            case GSErrors_1.GSErrors.UNIQUE_IDENTIFIER_EXISTS:
                return 'unique_identifier_exists';
            case GSErrors_1.GSErrors.UNDERAGE_USER:
                return 'sorry_we_are_not_able_to_process_your_registration'; //COPPA
            case GSErrors_1.GSErrors.INVALID_LOGINID:
                return 'invalid_login_or_password';
            case GSErrors_1.GSErrors.LOGINID_DOES_NOT_EXIST:
                return 'there_is_no_user_with_that_username_or_email';
            case GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE: // invalid parameter value
                return 'there_are_errors_in_your_form_please_try_again';
            case GSErrors_1.GSErrors.OLD_PASSWORD_USED:
                return 'old_password_cannot_be_the_same_as_new_password';
            case GSErrors_1.GSErrors.NETWORK_ERROR:
                return 'network_error';
            case GSErrors_1.GSErrors.VALIDATION_ERROR: // Validation_error
                var captchaError = response.validationErrors.filter(function (err) { return err.errorCode === GSErrors_1.GSErrors.CAPTCHA_VERIFICATION_FAILED; })[0];
                return captchaError ? 'register_captcha_error' : 'there_are_errors_in_your_form_please_try_again';
            case GSErrors_1.GSErrors.OK:
            default:
                // Nothing to do for the error message here
                return '';
        }
    };
    // Pre-populate form data from server or default values.
    BaseForm.prototype.prePopulate = function () {
        var _this = this;
        var populateData = this.prePopulateData();
        this.updateDynamicFields();
        var updateField = function (field) {
            var fieldName = field.getName(true);
            if (fieldName) {
                var dataValue = null;
                var arrayRootField = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayRootAttribute);
                if (!arrayRootField) {
                    dataValue = window.gigya.utils.object.getPropertyBySerializedName(populateData, fieldName, false);
                }
                else {
                    var arrayKeyField = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyFieldAttribute);
                    var arrayKeyValue = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute);
                    if (!arrayKeyField || !arrayKeyValue) {
                        _this.warn('Field not populated because data-array-root provided without data-array-key-field and data-array-key-value', fieldName);
                    }
                    else {
                        var arrayRoot = window.gigya.utils.object.getPropertyBySerializedName(populateData, arrayRootField, false);
                        if (arrayRoot && arrayRoot.constructor === Array && arrayRoot.length) {
                            // Find element.
                            for (var _i = 0, arrayRoot_1 = arrayRoot; _i < arrayRoot_1.length; _i++) {
                                var o = arrayRoot_1[_i];
                                var arrayKeyFieldValue = window.gigya.utils.object.getPropertyBySerializedName(o, arrayKeyField, false);
                                if (arrayKeyValue === String(arrayKeyFieldValue)) {
                                    dataValue = window.gigya.utils.object.getPropertyBySerializedName(o, fieldName.substr(arrayRootField.length + 1), false);
                                    break;
                                }
                            }
                        }
                    }
                }
                if (dataValue !== null) {
                    field.prePopulate(dataValue);
                }
                else if (field.type === 'checkbox') {
                    var checkboxInstanceElement = field.instanceElement;
                    var defaultCheckedCondition = field.instanceElement.getAttribute(exports.Form_CONSTS.defaultCheckedAttribute);
                    if (defaultCheckedCondition) {
                        checkboxInstanceElement.checked = Boolean(field.evaluateExpression({ condition: defaultCheckedCondition }));
                    }
                    // Set default value to checked property.
                    // This is necessary to trigger conditionals that rely on the checkbox's value.
                    field.setValue(checkboxInstanceElement.checked);
                }
            }
        };
        utils_1.ForEach(this._inputs, updateField);
        utils_1.ForEach(this._dynamicInputs, updateField);
        this.isPopulated = true;
    };
    BaseForm.prototype.getExtraProfileFields = function (missingOnly) {
        var _this = this;
        var alreadyHandledFields = {};
        return this.dataToServer
            .map(function (field) { return field.normalizedFieldName; })
            .concat(this._widgets.reduce(function (res, widget) { return res.concat(widget.getFieldsNames()); }, [])) // get also fieldNames from widgets that may not be filled in dataToServer
            .filter(function (n) { return utils_1.firstPart(n, '.') === _this.profileObjectName(); }) // make sure it is in profile namespace
            .map(function (n) { return utils_1.firstPart(n.replace(_this.profileObjectName() + '.', ''), '.'); }) // get the property name itself
            .reduce(function (fieldNames, fn) {
            if (alreadyHandledFields[fn])
                return fieldNames;
            alreadyHandledFields[fn] = true;
            var profile = _this._screenSet.getProfile();
            if (!missingOnly || !profile || !profile[fn]) {
                fieldNames.push(fn);
            }
            return fieldNames;
        }, []);
    };
    BaseForm.prototype.getNeededData = function (formContext) {
        var neededData = {};
        if (this._needContainerHistory) {
            neededData['getUserSettings'] = {
                params: {
                    group: 'gigya_container_history-' + this._screenSet.params.containerID,
                    regToken: this._screenSet.data.regToken,
                    disableLocalSettings: true,
                },
                cache: false,
            };
        }
        // Fetch password complexity for the password widget and validation if password field exists on screen.
        var isPasswordPoliciesNeeded = utils_1.Some(this.dataToServer, this.isPasswordPolicyNeededForField);
        if (isPasswordPoliciesNeeded) {
            neededData['getPolicies'] = {
                params: {
                    sections: 'passwordComplexity',
                },
                cache: true,
            };
        }
        return neededData;
    };
    BaseForm.prototype.isPasswordPolicyNeededForField = function (field) {
        return field instanceof PasswordInputs_1.BasePasswordInput && (field.isPasswordSchemaValidated() || field.isPasswordStrengthWidgetBound());
    };
    //#endregion
    //#region Dynamic fields
    // explicitly add dynamic inputs, more efficient
    BaseForm.prototype.addDynamicInputs = function (rootEl) {
        var _this = this;
        var inputsElements = rootEl.querySelectorAll('input,select,fieldset');
        var inputs = FormInput_1.FormInput.registerFormInputs(inputsElements, this);
        inputs.forEach(function (input) {
            TemplateElement_1.TemplateElement.prepareTemplateInstanceElement(input.templateElement, false);
            input.linkInstanceElement(_this.instanceElement);
        });
        this._inputs = this._inputs.concat(inputs);
        return inputs;
    };
    BaseForm.prototype.removeDynamicInputs = function (inputsToRemove) {
        var _this = this;
        this._inputs = this._inputs.filter(function (i) { return inputsToRemove.indexOf(i) < 0; });
        inputsToRemove.forEach(function (input) {
            var dataIndex = window.gigya.utils.array.indexOf(_this.dataToServer, input);
            if (dataIndex !== -1) {
                _this.dataToServer.splice(dataIndex, 1);
            }
            input.unlinkInstanceElement();
            input.unlinkTemplate();
        });
    };
    BaseForm.prototype.clearDynamicFields = function (dynamics) {
        var _this = this;
        utils_1.ForEach(dynamics, function (old) {
            old.unlinkInstanceElement();
            old.unlinkTemplate();
            var dataIndex = window.gigya.utils.array.indexOf(_this.dataToServer, old);
            if (dataIndex !== -1)
                _this.dataToServer.splice(dataIndex, 1);
        });
    };
    BaseForm.prototype.isDynamicFieldObsolete = function (dynamicElement) {
        var parent = dynamicElement.templateElement.parentElement;
        while (parent && parent !== this.instanceElement && parent !== document.documentElement)
            parent = parent.parentElement;
        return parent !== this.instanceElement;
    };
    BaseForm.prototype.isDynamicFieldToAdd = function (el) {
        var _this = this;
        var ignoredFields = this.ignoredFields();
        var instanceOfArray = el[TemplateElement_1.TemplateElement_CONSTS.instanceOfArray];
        if (instanceOfArray && utils_1.Some(instanceOfArray, function (instance) { return instance instanceof FormInput_1.FormInput && instance._form === _this; }))
            return false;
        var name = el.getAttribute('name');
        if (ignoredFields[name])
            return false;
        return true;
    };
    BaseForm.prototype.updateDynamicFields = function () {
        var _this = this;
        var oldDynamicInputs = new Array();
        var validDynamicInputs = new Array();
        // separate valid from invalid existing dynamics
        utils_1.ForEach(this._dynamicInputs, function (existingDynamicInput) {
            if (_this.isDynamicFieldObsolete(existingDynamicInput))
                oldDynamicInputs.push(existingDynamicInput);
            else
                validDynamicInputs.push(existingDynamicInput);
        });
        // remove invalid dynamics
        this.clearDynamicFields(oldDynamicInputs);
        // add new dynamics
        var newDynamics = new Array();
        // find new dynamic elements
        utils_1.ForEach(this.instanceElement.elements, function (el) {
            if (_this.isDynamicFieldToAdd(el))
                newDynamics.push(el);
        });
        // create instances for new dynamics
        var newDynamicInputs = FormInput_1.FormInput.registerFormInputs(newDynamics, this);
        utils_1.ForEach(newDynamicInputs, function (newDynamicInput) {
            TemplateElement_1.TemplateElement.prepareTemplateInstanceElement(newDynamicInput.templateElement, false);
            newDynamicInput.linkInstanceElement(_this.instanceElement);
            newDynamicInput.dynamicField = true;
            validDynamicInputs.push(newDynamicInput);
        });
        // store new dynamics list
        this._dynamicInputs = validDynamicInputs;
    };
    //#endregion
    //#region validation
    BaseForm.prototype.requiredFields = function () {
        return this.specialFields();
    };
    BaseForm.prototype.onInputChange = function (input, setByScript) {
        var _this = this;
        if (setByScript) {
            window.gigya.utils.DOM.dispatch(this.instanceElement, 'fieldChanged');
            return this.afterInputChange({
                field: input,
                errorCode: GSErrors_1.GSErrors.OK,
                setByScript: setByScript,
            });
        }
        else {
            var value = input.getValue();
            input.validate(function (validationinfo) {
                var fieldChangeEvent = {
                    eventName: 'fieldChanged',
                    screen: _this._screen.ID,
                    form: _this.bindID,
                    field: input.fieldName,
                    isValid: !validationinfo.errorCode,
                    errMsg: validationinfo.errorCode,
                    value: value,
                };
                _this._screen.dispatchEvent('fieldChanged', fieldChangeEvent);
                window.gigya.utils.DOM.dispatch(_this.instanceElement, 'fieldChanged');
                _this.afterInputChange(validationinfo);
            });
        }
    };
    BaseForm.prototype.afterInputChange = function (validationInfo) {
        if (validationInfo.field.fieldName === 'newPassword' || validationInfo.field.fieldName === 'password') {
            utils_1.ForEach(this._passwordRetypes, function (p) {
                p.setValue('', validationInfo.setByScript);
            });
        }
        this.showFieldError(validationInfo.field, validationInfo.errorCode, true);
    };
    BaseForm.prototype.isPasswordSchemaValidated = function () {
        return this.schemaValidated();
    };
    BaseForm.prototype.schemaValidated = function () {
        return false;
    };
    BaseForm.prototype.getFieldSchema = function (field) {
        var schema = this.getSchemaOf(field.fieldNamespace || 'profile');
        return schema && schema[field.fieldBaseName];
    };
    BaseForm.prototype.getSchemaOf = function (schemaName) {
        var apiData = this._screenSet.getApiData();
        var schemaRoot = this.getSchemaRoot(schemaName);
        return apiData.getSchema && apiData.getSchema[schemaRoot] && apiData.getSchema[schemaRoot].fields;
    };
    BaseForm.prototype.getSchemaRoot = function (namespace) {
        switch (namespace) {
            case 'data':
                return 'dataSchema';
            case 'profile':
                return 'profileSchema';
            case 'subscriptions':
                return 'subscriptionsSchema';
            case 'preferences':
                return 'preferencesSchema';
            case 'organization':
                return 'organizationSchema';
            case 'requester':
                return 'requesterSchema';
        }
    };
    BaseForm.prototype.showFieldError = function (field, errorCode, isBoundToField, customErrMsg) {
        var errorMessage = customErrMsg || this._screen.getErrorMessage(errorCode, isBoundToField, field);
        var errorInfo = {
            errorCode: errorCode,
            errorMessage: errorMessage,
        };
        if (errorCode !== GSErrors_1.GSErrors.OK && errorCode !== GSErrors_1.GSErrors.Data_Pending) {
            this.formErrors[field.fieldName] = errorInfo;
        }
        var shouldHandleError = true;
        // display error on bounded error elements
        if (isBoundToField) {
            var fieldValidity = void 0;
            switch (errorCode) {
                case 0:
                    fieldValidity = FormInput_1.ValidityStates.valid;
                    break;
                case GSErrors_1.GSErrors.Data_Pending:
                    fieldValidity = FormInput_1.ValidityStates.pending;
                    shouldHandleError = false;
                    break;
                default:
                    fieldValidity = FormInput_1.ValidityStates.error;
                    break;
            }
            // Display error on the field itself.
            field.setValidityState(fieldValidity);
            // Dealing with gigya-error-msg and gigya-error-display within the same form as the input.
            var arBoundElements = this._errorDisplayElements[field.normalizedFieldName] || [];
            utils_1.ForEach(arBoundElements, function (elBound) {
                // Do not consider the field bound if it's a different array element.
                var fieldArrayKeyValue = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute);
                if (fieldArrayKeyValue && fieldArrayKeyValue !== elBound.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute)) {
                    return;
                }
                if (errorInfo.errorMessage && elBound.isErrorCodeAllowed(errorCode)) {
                    elBound.showError(errorInfo);
                }
                else {
                    elBound.hideError();
                }
            });
        }
        return shouldHandleError;
    };
    BaseForm.prototype.showCustomFormError = function (errMsg) {
        var errorInfo = {
            errorMessage: errMsg,
            errorCode: GSErrors_1.GSErrors.VALIDATION_ERROR,
        };
        this.formErrors['form'] = errorInfo;
        this.showErrors([errorInfo], true); // isServerError = true (force the display of the error message)
        window.gigya.utils.DOM.addClassToElement(this.instanceElement, exports.Form_CONSTS.formErrorClass);
    };
    BaseForm.prototype.createOnBeforeValidationEvent = function (formData) {
        return {
            data: this._screenSet.getSchemaData(),
            profile: this._screenSet.getProfile(),
            subscriptions: this._screenSet.getSubScriptions(),
            preferences: this._screenSet.getPreferences(),
            eventName: 'beforeValidation',
            form: this.bindID,
            formData: formData,
            screen: this._screen.ID,
        };
    };
    BaseForm.prototype.createOnAfterValidationEvent = function (formData) {
        return {
            data: this._screenSet.getSchemaData(),
            profile: this._screenSet.getProfile(),
            subscriptions: this._screenSet.getSubScriptions(),
            preferences: this._screenSet.getPreferences(),
            eventName: 'afterValidation',
            form: this.bindID,
            formData: formData,
            screen: this._screen.ID,
            formErrors: Object.keys(this.formErrors).length > 0 ? this.formErrors : undefined,
        };
    };
    BaseForm.prototype.applyCustomValidation = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var isValid, customErrMsgs, formData, beforeValidationEvent, validationResult, _customValidationTimeout, _a, _b, ex_1, errors;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        isValid = true;
                        customErrMsgs = undefined;
                        this._screenSet.dimScreenSet();
                        formData = this.getFlatFormData(true, false);
                        beforeValidationEvent = this.createOnBeforeValidationEvent(formData);
                        validationResult = this._screen.dispatchEvent(beforeValidationEvent.eventName, beforeValidationEvent);
                        _customValidationTimeout = setTimeout(function () {
                            console.warn("[Gigya]: custom validation did not resolve after more than " + exports.CUSTOM_VALIDATION_TIMEOUT_WARNING + " seconds");
                        }, exports.CUSTOM_VALIDATION_TIMEOUT_WARNING);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        _b = (_a = window.gigya.utils.object).unflatten;
                        return [4 /*yield*/, gigya.Promise.resolve(validationResult)];
                    case 2:
                        customErrMsgs = _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 5];
                    case 3:
                        ex_1 = _c.sent();
                        console.warn("[Gigya]: custom validation threw an error", ex_1);
                        customErrMsgs = undefined;
                        return [3 /*break*/, 5];
                    case 4:
                        this._screenSet.undimScreenSet();
                        clearTimeout(_customValidationTimeout);
                        return [7 /*endfinally*/];
                    case 5:
                        errors = window.gigya.utils.object.merge([window.gigya.utils.object.flatten(customErrMsgs, true), window.gigya.utils.object.flatten(customErrMsgs)]);
                        if (errors && typeof errors === 'object') {
                            utils_1.ForEach(Object.keys(errors), function (fieldName) {
                                if (errors.hasOwnProperty(fieldName)) {
                                    var errMsg = errors[fieldName];
                                    if (fieldName === 'form') {
                                        isValid = false;
                                        _this.showCustomFormError(errMsg);
                                    }
                                    else {
                                        var field = _this.getFieldByData(fieldName, formData);
                                        if (field) {
                                            isValid = false;
                                            _this.showFieldError(field, GSErrors_1.GSErrors.VALIDATION_ERROR, true, errMsg);
                                        }
                                    }
                                }
                            });
                        }
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    BaseForm.prototype.getFieldByData = function (fieldName, formData) {
        var _this = this;
        if (formData === void 0) { formData = {}; }
        if (!Object.keys(formData).length) {
            return this.getField(fieldName);
        }
        //For store as array fields, loop through all fields to find the correct match
        var formModel = window.gigya.utils.object.unflatten(formData);
        var formDataWithAllKeys = window.gigya.utils.object.merge([window.gigya.utils.object.flatten(formModel, true), window.gigya.utils.object.flatten(formModel)]);
        var storeAsArrayField = Object.keys(formDataWithAllKeys)
            .filter(function (key) { return key !== fieldName && utils_1.hasIndex(key) && utils_1.removeSerializedKeyEdgeProperty(key) === utils_1.removeSerializedKeyEdgeProperty(fieldName); })
            .map(function (key) { return _this.getField(utils_1.removeSerializedKeyLastEnumerator(fieldName), formDataWithAllKeys[key]); })
            .filter(function (field) { return Boolean(field); })[0];
        var field = storeAsArrayField || this.getField(fieldName);
        return field;
    };
    BaseForm.prototype.onAfterValidation = function () {
        var formData = this.getFlatFormData(true, false);
        var afterValidationEvent = this.createOnAfterValidationEvent(formData);
        this._screen.dispatchEvent(afterValidationEvent.eventName, afterValidationEvent);
    };
    BaseForm.prototype.validate = function (callback) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var isValid, flatFormData, fieldsLeft, arValidationErrors, fieldValidationCallback;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.formErrors = {};
                        return [4 /*yield*/, this.applyCustomValidation()];
                    case 1:
                        isValid = _a.sent();
                        if (!isValid) {
                            return [2 /*return*/, this.onAfterValidation()];
                        }
                        flatFormData = this.getFlatFormData(true, true);
                        fieldsLeft = this.dataToServer.length;
                        arValidationErrors = new Array();
                        fieldValidationCallback = function (validationInfo) {
                            if (validationInfo.errorCode !== GSErrors_1.GSErrors.OK) {
                                isValid = false;
                                var errorInfo = {
                                    fieldName: validationInfo.field.fieldName,
                                    errorCode: validationInfo.errorCode,
                                };
                                arValidationErrors.push(errorInfo);
                                errorInfo.handled = _this.showFieldError(validationInfo.field, validationInfo.errorCode, true);
                            }
                            if (--fieldsLeft < 0) {
                                _this.showErrors(arValidationErrors, false);
                                _this.onAfterValidation();
                                return callback(isValid);
                            }
                        };
                        utils_1.ForEach(this.dataToServer, function (field) { return field.validate(fieldValidationCallback, flatFormData); });
                        fieldValidationCallback({ errorCode: GSErrors_1.GSErrors.OK, field: null }); // trigger at least once to ensure callback trigger
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseForm.prototype.showErrors = function (arErrors, isServerError) {
        this._screen.showErrors(this, arErrors, isServerError);
    };
    BaseForm.prototype.isRequiredField = function (fieldName) {
        var fieldNamespace = utils_1.firstPart(fieldName, '.');
        var schemaName = fieldNamespace == 'data' ? 'dataSchema' : 'profileSchema';
        if (fieldNamespace == 'data' || fieldNamespace == 'profile') {
            fieldName = fieldName.substring(fieldNamespace.length + 1);
        }
        var requiredFields = this.requiredFields();
        if (requiredFields[fieldName]) {
            return true;
        }
        var apiData = this._screenSet.getApiData(); // TODO shouldn't this be dependant on is schemaValidated?
        if (apiData.getSchema && apiData.getSchema[schemaName] && apiData.getSchema[schemaName].fields) {
            var schema = apiData.getSchema[schemaName].fields[fieldName];
            if (schema && schema.required) {
                return true;
            }
        }
        return false;
    };
    //#endregion
    BaseForm.prototype.checkAutoSkip = function (formContext, callback) {
        if (!this.autoSkip || utils_1.Some(this._autoSkipContainers, function (c) { return !c.checkAutoSkip(); }))
            return callback(false);
        this.validate(callback);
    };
    //#region form data
    BaseForm.prototype.getNormalizedFieldName = function (fieldName) {
        if (!fieldName) {
            return fieldName;
        }
        // If special field or local field, use as-is.
        var specialFields = this.specialFields();
        if (specialFields[fieldName] || fieldName.indexOf('local.') === 0) {
            return fieldName;
        }
        // Get data and profile namespace.
        var profileNamespace = this.profileObjectName();
        var dataNamespace = this.dataObjectName();
        var subscriptionNamespace = this.subscriptionObjectName();
        var preferencesNamespace = this.preferencesObjectName();
        var organizationNamespace = this.organizationObjectName();
        var requesterNamespace = this.requesterObjectName();
        // Default to profile namespace if not provided and not special field.
        var nameParts = fieldName.split('.');
        var ns = nameParts.length > 1 ? nameParts.shift() : profileNamespace;
        // Change "profile.data.field" to "data.field".
        if (ns === profileNamespace && nameParts.length > 1 && nameParts[0] === dataNamespace) {
            ns = nameParts.shift();
        }
        // Default to profile namespace if unknown namespace was provided.
        if ([dataNamespace, profileNamespace, subscriptionNamespace, preferencesNamespace, organizationNamespace, requesterNamespace].indexOf(ns) == -1) {
            ns = profileNamespace;
        }
        // Push namespace back onto array of strings.
        if (ns) {
            nameParts.unshift(ns);
        }
        // Return string.
        var normalizedFieldName = nameParts.join('.');
        return normalizedFieldName;
    };
    BaseForm.prototype.getField = function (fieldName, arrayKeyValue) {
        var result;
        fieldName = this.getNormalizedFieldName(fieldName);
        utils_1.Some(this.dataToServer, function (field) {
            if (field.normalizedFieldName === fieldName) {
                if (!arrayKeyValue || arrayKeyValue === field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute)) {
                    result = field;
                    return true;
                }
            }
            return false;
        });
        return result;
    };
    BaseForm.prototype.isSpecialField = function (field) {
        return !!this.specialFields()[field.fieldName];
    };
    BaseForm.prototype.getFormData = function (ignoreHiddenContainers, normalizeFields, replaceEmptyStringWithNull) {
        var _this = this;
        if (replaceEmptyStringWithNull === void 0) { replaceEmptyStringWithNull = false; }
        var oData = {};
        // Get existing account for array merging.
        var accountInfo = this._screenSet.getApiData().getAccountInfo || {};
        var trackCreatedObjKeys = {};
        // Create form data.
        utils_1.ForEach(this.dataToServer, function (field) {
            var _a;
            if ((!field.disabled() || _this.isSpecialField(field)) && (!ignoreHiddenContainers || !field.isInHiddenContainer())) {
                var fieldKey = field.getName(normalizeFields, true);
                var currentValue = window.gigya.utils.object.getPropertyBySerializedName(accountInfo, fieldKey, false);
                var arrayRootField = field.getArrayRoot(true);
                var fieldValue = field.getValue(field.instanceElement, currentValue || oData[fieldKey]);
                if (fieldValue) {
                    // currently we do not support the field's original data-type.
                    fieldValue = window.gigya.utils.object.parseToObject(fieldValue.toString()) || fieldValue;
                }
                // Typical path for non-array fields.
                if (!arrayRootField) {
                    if (fieldValue != null) {
                        // This is used when gathering parameters to send to the server. do not convert empty array to null.
                        if (replaceEmptyStringWithNull && String(fieldValue) === '' && fieldValue.constructor !== Array) {
                            fieldValue = null;
                        }
                        oData[fieldKey] = fieldValue;
                    }
                }
                else {
                    // Array root is provided, switch to array mode. Verify all required attributes are provided.
                    var arrayKeyField = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyFieldAttribute);
                    var arrayKeyValue = field.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute);
                    if (!arrayKeyField || !arrayKeyValue) {
                        _this.warn('Field ignored because data-array-root provided without data-array-key-field and data-array-key-value', fieldKey);
                        return;
                    }
                    if (!oData[arrayRootField] || oData[arrayRootField].constructor !== Array) {
                        var arr = void 0;
                        if (accountInfo) {
                            arr = window.gigya.utils.object.clone(window.gigya.utils.object.getPropertyBySerializedName(accountInfo, arrayRootField, false), false);
                        }
                        if (!arr || arr.constructor !== Array) {
                            arr = [];
                        }
                        oData[arrayRootField] = arr;
                    }
                    var arrayRoot = oData[arrayRootField];
                    // Find or create object inside of array.
                    var obj = void 0;
                    for (var i = 0; i < arrayRoot.length; i++) {
                        var o = arrayRoot[i];
                        if (o[arrayKeyField] && String(o[arrayKeyField]) === arrayKeyValue) {
                            // If object was found from server, remove object from array root and re-create.
                            // The merge logic replaces entire objects but keeps the other elements in the array.
                            if (!trackCreatedObjKeys[arrayRootField] || window.gigya.utils.array.indexOf(trackCreatedObjKeys[arrayRootField], arrayKeyValue) === -1) {
                                arrayRoot.splice(i, 1);
                            }
                            else {
                                obj = o;
                            }
                            break;
                        }
                    }
                    // Create new object or append key to existing object only if a field value is present.
                    // This is what allows an object to be deleted from the array.
                    if (fieldValue) {
                        if (!obj) {
                            obj = (_a = {},
                                _a[arrayKeyField] = arrayKeyValue,
                                _a);
                            arrayRoot.push(obj);
                            if (!trackCreatedObjKeys[arrayRootField]) {
                                trackCreatedObjKeys[arrayRootField] = [];
                            }
                            trackCreatedObjKeys[arrayRootField].push(arrayKeyValue);
                        }
                        // Add value to object.
                        var subKey = fieldKey.substr(arrayRootField.length + 1);
                        obj[subKey] = fieldValue;
                    }
                }
            }
        });
        oData = this.postProcessFormData(oData);
        // The form data may be a mix of flattened and unflattened data. Ensure it is unflattened.
        oData = window.gigya.utils.object.unflatten(oData);
        // Filter the data.
        utils_1.ForEach(this.filters, function (wid) {
            oData = wid.filterOutWidgetsToSend(oData);
        });
        return oData;
    };
    BaseForm.prototype.postProcessFormData = function (oData) {
        var res = window.gigya.utils.object.clone(oData);
        res = Consent_1.postProcessForm(res, this.getSchemaOf(Consent_1.namespace));
        return res;
    };
    BaseForm.prototype.getFlatFormData = function (ignoreHiddenContainers, normalizeFields, replaceEmptyStringWithNull) {
        if (replaceEmptyStringWithNull === void 0) { replaceEmptyStringWithNull = false; }
        return window.gigya.utils.object.flatten(this.getFormData(ignoreHiddenContainers, normalizeFields, replaceEmptyStringWithNull));
    };
    BaseForm.prototype.specialFields = function () {
        return {};
    };
    BaseForm.prototype.subscriptionObjectName = function () {
        return 'subscriptions';
    };
    BaseForm.prototype.dataObjectName = function () {
        return 'data';
    };
    BaseForm.prototype.profileObjectName = function () {
        return 'profile';
    };
    BaseForm.prototype.preferencesObjectName = function () {
        return 'preferences';
    };
    BaseForm.prototype.organizationObjectName = function () {
        return 'organization';
    };
    BaseForm.prototype.requesterObjectName = function () {
        return 'requester';
    };
    BaseForm.prototype.queryStringToSubmitParamMap = function () {
        return {};
    };
    BaseForm.prototype.defaultSubmitParams = function () {
        var qsParams = this.queryStringToSubmitParamMap();
        var ret = {};
        Object.keys(qsParams).forEach(function (p) {
            var submitParam = qsParams[p];
            var value = window.gigya.utils.URL.getParamValueFromURL(p, location.search, undefined);
            if (value) {
                ret[submitParam] = value;
            }
        });
        return ret;
    };
    //#endregion
    //#region submit
    BaseForm.prototype.submitApi = function () {
        throw new Error(NOT_IMPLEMENTED);
    };
    BaseForm.prototype._getSubmitApiParams = function (params) {
        return window.gigya.utils.object.removeUndefined(params);
    };
    BaseForm.prototype.performSubmit = function (formData) {
        var _this = this;
        var submitApi = this.submitApi();
        var extraEventData = this._screenSet.data.extraEventData;
        if (this._rememberMe) {
            extraEventData.rememberMe = Boolean(this._rememberMe.getValue());
        }
        var remember = extraEventData.rememberMe;
        // Make sure to use the latest regtoken if it was set by a child screenset
        if (this._screenSet.data.regToken) {
            this._screenSet.params.regToken = this._screenSet.data.regToken;
        }
        var apiParams = this._getSubmitApiParams(window.gigya.utils.object.clone(this._screenSet.params, true));
        this._screen.dimScreen();
        var options = {
            dontHandleScreenSet: true,
            callback: function (response) { return _this.onAfterSubmit(response); },
            remember: remember,
            sessionExpiration: remember && this._screenSet.params.rememberSessionExpiration
                ? this._screenSet.params.rememberSessionExpiration
                : this._screen._screenSet.params.sessionExpiration,
        };
        submitApi(apiParams, formData, options, this.defaultSubmitParams());
    };
    BaseForm.prototype.submit = function () {
        var _this = this;
        this._submitButtonClicked = true;
        //#region - code to be removed: the following code block should be removed when the old photo upload widget will not be supported along with BaseServerWidget
        var waitForServerResponse = utils_1.Some(this._serverWidgets, function (w) {
            if (w.serverState === BaseServerWidget_1.ServerStates.InProgress) {
                w.runOnServerDone(_this.submitHandler);
                return true;
            }
            return false;
        });
        if (waitForServerResponse)
            return;
        //#endregion
        this.updateDynamicFields();
        this.validate(function (isValid) {
            _this.onAfterValidation();
            if (isValid) {
                _this.getCaptchaToken()
                    .then(function (captchaToken) {
                    // Generate object to pass as params.
                    var formDataForServer = _this.getFormData(true, true, true);
                    // Generate flat form data for event.
                    var flatFormDataForEvent = _this.getFlatFormData(true, false);
                    if (typeof flatFormDataForEvent['password'] !== 'undefined') {
                        delete flatFormDataForEvent['password']; // meaningless in terms of security but less shocking for clients :)
                    }
                    var event = {
                        eventName: 'beforeSubmit',
                        screen: _this._screen.ID,
                        form: _this.bindID,
                        profile: _this._screenSet.getProfile(),
                        data: _this._screenSet.getSchemaData(),
                        preferences: _this._screenSet.getPreferences(),
                        subscriptions: _this._screenSet.getSubScriptions(),
                        formData: flatFormDataForEvent,
                    };
                    var eventResult = _this._screen.dispatchEvent('beforeSubmit', event);
                    // Check if the submit was cancelled before proceeding.
                    if (eventResult !== false) {
                        var submitEvent = {
                            eventName: 'submit',
                            screen: _this._screen.ID,
                            form: _this.bindID,
                            accountInfo: {
                                profile: _this._screenSet.getProfile(),
                                data: _this._screenSet.getSchemaData(),
                                preferences: _this._screenSet.getPreferences(),
                                subscriptions: _this._screenSet.getSubScriptions(),
                            },
                            formModel: formDataForServer,
                        };
                        var submitResult = _this._screen.dispatchEvent('submit', submitEvent);
                        if (typeof captchaToken === 'string')
                            formDataForServer['captchaToken'] = captchaToken;
                        if (submitResult && typeof submitResult.then === 'function') {
                            submitResult.then(function (x) { return _this.performSubmit(window.gigya.utils.object.merge([formDataForServer, x])); });
                        }
                        else {
                            _this.performSubmit(window.gigya.utils.object.merge([formDataForServer, submitResult]));
                        }
                    }
                })
                    .catch(function (e) {
                    // all other exceptions gets swallowed, also if it happened for example inside form's onAfterSubmit method (!)
                    window.gigya.logger.error('exception when submitting a form', { e: e, form: _this.gigyaClass });
                    if (e && e.message === 'captchaNeeded') {
                        var errorInfo = {
                            errorMessage: _this._screenSet.getText('login_captcha_error'),
                            errorCode: GSErrors_1.GSErrors.VALIDATION_ERROR,
                            errorFlags: e.message,
                        };
                        _this.showErrors([errorInfo], true);
                    }
                });
            }
        });
    };
    //#endregion
    BaseForm.prototype.getCaptchaToken = function () {
        var captchas = this._screen._captchas.filter(function (captcha) { return Boolean(captcha) && !captcha.isHidden(); });
        return captchas.length ? captchas[0].getToken() : gigya.Promise.resolve(undefined);
    };
    BaseForm.prototype.onAfterSubmit = function (response) {
        this._screen.undimScreen();
        if (response.errorCode == GSErrors_1.GSErrors.OK) {
            window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, exports.Form_CONSTS.formErrorClass);
        }
        else {
            window.gigya.utils.DOM.addClassToElement(this.instanceElement, exports.Form_CONSTS.formErrorClass);
        }
        this._screenSet.onScreenResponse(response, this);
    };
    BaseForm.prototype.evaluateConditionalAttributes = function () {
        var _this = this;
        if (!this.hasConditionalAttributes()) {
            return;
        }
        window.gigya.logger.group("form conditional attributes evaluation").endWhen(function () {
            _super.prototype.evaluateConditionalAttributes.call(_this);
            utils_1.ForEach(_this._dynamicInputs, function (dynamicInput) {
                dynamicInput.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._widgets, function (widget) {
                widget.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._inputs, function (input) {
                input.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._passwordInputs, function (passwordInput) {
                passwordInput.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._passwordRetypes, function (passwordRetype) {
                passwordRetype.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._secretQuestions, function (sec) {
                sec.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._autoSkipContainers, function (auto) {
                auto.evaluateConditionalAttributes();
            });
            utils_1.ForEach(_this._serverWidgets, function (serv) {
                serv.evaluateConditionalAttributes();
            });
            if (_this._rememberMe) {
                _this._rememberMe.evaluateConditionalAttributes();
            }
        });
        this.originalSuccessScreen = this.instanceElement.getAttribute(exports.Form_CONSTS.successScreen);
        this.successScreen = this._screenSet.chooseNextScreen(this.originalSuccessScreen);
        this.autoSkip = this.instanceElement.getAttribute(exports.Form_CONSTS.autoSkipFlag) == 'true';
        this.autoSkipScreen = this.instanceElement.getAttribute(exports.Form_CONSTS.autoSkipScreen) || this.successScreen;
        this.screenSetSkippedScreen = this.instanceElement.getAttribute(exports.Form_CONSTS.screenSetSkippedScreen) || this.successScreen;
    };
    BaseForm.prototype.hasConditionalAttributes = function () {
        if (_super.prototype.hasConditionalAttributes.call(this))
            return true;
        var children = [].concat(this._widgets, this._inputs, this._dynamicInputs, this._passwordInputs, this._passwordRetypes, this._secretQuestions, this._autoSkipContainers, this._serverWidgets);
        return window.gigya.utils.array.some(children, function (child) { return child.hasConditionalAttributes(); });
    };
    BaseForm.prototype.resetLastConditionalValues = function () {
        _super.prototype.resetLastConditionalValues.call(this);
        utils_1.ForEach(this._dynamicInputs, function (dynamicInput) {
            dynamicInput.resetLastConditionalValues();
        });
        utils_1.ForEach(this._widgets, function (widget) {
            widget.resetLastConditionalValues();
        });
        utils_1.ForEach(this._inputs, function (input) {
            input.resetLastConditionalValues();
        });
        utils_1.ForEach(this._passwordInputs, function (passwordInput) {
            passwordInput.resetLastConditionalValues();
        });
        utils_1.ForEach(this._passwordRetypes, function (passwordRetype) {
            passwordRetype.resetLastConditionalValues();
        });
        utils_1.ForEach(this._secretQuestions, function (sec) {
            sec.resetLastConditionalValues();
        });
        utils_1.ForEach(this._autoSkipContainers, function (auto) {
            auto.resetLastConditionalValues();
        });
        utils_1.ForEach(this._serverWidgets, function (serv) {
            serv.resetLastConditionalValues();
        });
    };
    //#region Form library
    BaseForm.FormsLibrary = {};
    return BaseForm;
}(TemplateElement_1.TemplateElement));
exports.BaseForm = BaseForm;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts":
/*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget.ts");
var BaseFormWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BaseFormWidget, _super);
    function BaseFormWidget(_form, el, resetCSS) {
        var _this = _super.call(this, el, _form, _form._screen, resetCSS) || this;
        _this._form = _form;
        return _this;
    }
    BaseFormWidget.addWidgetToLibrary = function (widget) {
        BaseFormWidget.FormWidgetsLibrary[widget.CONSTS.selector] = widget;
    };
    BaseFormWidget.registerWidgets = function (parent) {
        return BaseWidget_1.BaseWidget.registerTypedWidgets(parent.templateElement, BaseFormWidget.FormWidgetsLibrary, function (type, el) { return new type(parent, el); });
    };
    BaseFormWidget.registerDynamicWidgets = function (parent, rootEl) {
        return BaseWidget_1.BaseWidget.registerTypedWidgets(rootEl, BaseFormWidget.FormWidgetsLibrary, function (type, el) { return new type(parent, el); });
    };
    BaseFormWidget.prototype.getFieldsNames = function () {
        return [];
    };
    BaseFormWidget.prototype.update = function () { };
    BaseFormWidget.FormWidgetsLibrary = {};
    return BaseFormWidget;
}(BaseWidget_1.BaseWidget));
exports.BaseFormWidget = BaseFormWidget;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts":
/*!*************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget.ts");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BaseScreenWidget, _super);
    function BaseScreenWidget(_screen, el, resetCSS) {
        var _this = _super.call(this, el, _screen, _screen, resetCSS) || this;
        _this._childWidgets = [];
        return _this;
    }
    BaseScreenWidget.prototype.unlinkInstanceElement = function () {
        _super.prototype.unlinkInstanceElement.call(this);
        this.unlinkWidgets();
    };
    BaseScreenWidget.prototype.unlinkWidgets = function () {
        utils_1.ForEach(this._childWidgets, function (widget) {
            widget.unlinkInstanceElement();
        });
        this._childWidgets = [];
    };
    BaseScreenWidget.prototype.linkWidgets = function () {
        var _this = this;
        // Widgets that render html inside them, must register internal widgets
        if (!this._screen || !this._screen.instanceElement)
            return;
        this._childWidgets =
            BaseScreenWidget.registerDynamicWidgets(this._screen, this.instanceElement)
                .filter(function (childWidget) { return !_this.deps || !_this.deps.some(function (dep) { return childWidget instanceof dep; }); });
        utils_1.ForEach(this._childWidgets, function (widget) {
            widget.linkInstanceElement(_this._screen.instanceElement);
        });
    };
    BaseScreenWidget.addWidgetToLibrary = function (widget) {
        BaseScreenWidget.ScreenWidgetsLibrary[widget.CONSTS.selector] = widget;
    };
    BaseScreenWidget.registerWidgets = function (parent) {
        return BaseWidget_1.BaseWidget.registerTypedWidgets(parent.templateElement, BaseScreenWidget.ScreenWidgetsLibrary, function (type, el) { return new type(parent, el); });
    };
    BaseScreenWidget.registerDynamicWidgets = function (parent, rootEl) {
        return BaseWidget_1.BaseWidget.registerTypedWidgets(rootEl, BaseScreenWidget.ScreenWidgetsLibrary, function (type, el) { return new type(parent, el); });
    };
    BaseScreenWidget.ScreenWidgetsLibrary = {};
    return BaseScreenWidget;
}(BaseWidget_1.BaseWidget));
exports.BaseScreenWidget = BaseScreenWidget;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts":
/*!*************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var ServerStates;
(function (ServerStates) {
    ServerStates[ServerStates["NotStarted"] = 0] = "NotStarted";
    ServerStates[ServerStates["InProgress"] = 1] = "InProgress";
    ServerStates[ServerStates["Done"] = 2] = "Done";
    ServerStates[ServerStates["Error"] = 3] = "Error";
})(ServerStates = exports.ServerStates || (exports.ServerStates = {}));
utils_1.DeepFreeze(ServerStates);
var BaseServerWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BaseServerWidget, _super);
    function BaseServerWidget(form, el, resetCSS) {
        var _this = _super.call(this, form, el, resetCSS) || this;
        _this.nextServerQueryId = 0;
        _this.serverState = ServerStates.NotStarted;
        _this.callbacks = new Array();
        form._serverWidgets.push(_this);
        return _this;
    }
    BaseServerWidget.prototype.startServerQuery = function () {
        this.serverState = ServerStates.InProgress;
        return ++this.nextServerQueryId;
    };
    BaseServerWidget.prototype.onServerQueryEnd = function (serverQueryId, newState, data) {
        if (serverQueryId === this.nextServerQueryId)
            this.serverQueryDone(newState, data);
        else
            this.warn('Ignoring server response #' + serverQueryId);
    };
    BaseServerWidget.prototype.serverQueryDone = function (newState, data) {
        var _this = this;
        this.serverState = newState;
        utils_1.ForEach(this.callbacks, function (callback) { return callback(newState, _this); });
        this.callbacks = new Array();
    };
    BaseServerWidget.prototype.runOnServerDone = function (callback) {
        if (this.serverState !== ServerStates.InProgress)
            callback(this.serverState, this);
        else
            this.callbacks.push(callback);
    };
    return BaseServerWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.BaseServerWidget = BaseServerWidget;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget.ts":
/*!*************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseServerWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts");
var NOT_IMPLEMENTED = 'Not Implemented';
exports.BaseUploadWidget_CONSTS = {
    setDimentionsDelay: 500,
    uploadCheckInterval: 500,
    uploading: 'data-upload-status',
    uploadForm: 'screenSetUploadForm',
};
utils_1.DeepFreeze(exports.BaseUploadWidget_CONSTS);
var nextGeneratedId = 0;
var BaseUploadWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BaseUploadWidget, _super);
    function BaseUploadWidget(form, el, resetCSS) {
        var _this = _super.call(this, form, el, resetCSS) || this;
        var uploadId = nextGeneratedId++;
        _this._uploadIframeID = _this._screenSet.params.containerID + '_upload' + uploadId + '_target';
        _this.formDivID = _this._screenSet.params.containerID + '_upload' + uploadId + '_form';
        _this.listenOnIframe = function () {
            var iframeStateName = _this.uploadIframe.getAttribute(exports.BaseUploadWidget_CONSTS.uploading);
            var iframeState = BaseServerWidget_1.ServerStates[iframeStateName];
            if (iframeState !== _this.serverState)
                _this.onServerQueryEnd(_this._lastQueryId, iframeState);
        };
        _this.fileInputChanged = function () { return _this.onFileInputChange(); };
        return _this;
    }
    BaseUploadWidget.prototype.onFileInputChange = function () {
        this.startServerQuery();
    };
    BaseUploadWidget.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            // add upload iframe
            this.uploadIframe = document.createElement('iframe');
            this.uploadIframe.style.display = 'none';
            this.uploadIframe.id = this._uploadIframeID;
            this.uploadIframe.setAttribute('name', this._uploadIframeID);
            this.uploadIframe.setAttribute(exports.BaseUploadWidget_CONSTS.uploading, BaseServerWidget_1.ServerStates[BaseServerWidget_1.ServerStates.NotStarted]);
            this.uploadIframe.setAttribute('onload', "this.setAttribute('" + exports.BaseUploadWidget_CONSTS.uploading + "','" + BaseServerWidget_1.ServerStates[BaseServerWidget_1.ServerStates.Done] + "')");
            this.instanceElement.appendChild(this.uploadIframe);
            // place form for the user to interfact with
            this._formDiv = document.createElement('div');
            this._formDiv.id = this.formDivID;
            this._formDiv.className = 'gigya-attach-file-upload-form';
            this._formDiv.innerHTML = this.getFormHtml();
            this._formDiv.style.zIndex = '' + window.gigya.utils.DOM.getNextZIndex();
            this.instanceElement.appendChild(this._formDiv);
            // set dimentions
            window.setTimeout(function () { return _this.setFormDimentions(); }, exports.BaseUploadWidget_CONSTS.setDimentionsDelay);
            this._uploadForm = this.getFormElement();
            this.fileInput = this._uploadForm.elements['_profilePhoto'];
            window.gigya.utils.DOM.addClassToElement(this.fileInput, 'gigya-attach-file-upload-file-input'); // TODO Change uses css for ie patch instead of style
            window.gigya.utils.DOM.addEventListener(this.fileInput, 'change', this.fileInputChanged);
        }
    };
    BaseUploadWidget.prototype.getFormHtml = function () {
        throw new Error(NOT_IMPLEMENTED);
    };
    BaseUploadWidget.prototype.getFormElement = function () {
        throw new Error(NOT_IMPLEMENTED);
    };
    BaseUploadWidget.prototype.getFileElement = function () {
        throw new Error(NOT_IMPLEMENTED);
    };
    BaseUploadWidget.prototype.setFormDimentions = function () {
        // TODO behavior change: uses timeout rather than interval
        if (this.instanceElement) {
            if (this.instanceElement.offsetHeight != 0) {
                this._formDiv.style.height = this.instanceElement.offsetHeight + 'px';
                this._formDiv.style.width = this.instanceElement.offsetWidth + 'px';
            }
        }
    };
    BaseUploadWidget.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement) {
            if (this.uploadCheckInterval)
                this.onServerQueryEnd(this._lastQueryId, BaseServerWidget_1.ServerStates.Error);
            window.gigya.utils.DOM.removeEventListener(this.fileInput, 'change', this.onFileInputChange);
            this.fileInput = null;
            this._uploadForm = null;
            this._formDiv.parentElement.removeChild(this._formDiv);
            this._formDiv = null;
            this.instanceElement.removeChild(this.uploadIframe);
            this.uploadIframe = null;
        }
        _super.prototype.unlinkInstanceElement.call(this);
    };
    BaseUploadWidget.prototype.stopUploadCheck = function () {
        if (this.uploadCheckInterval) {
            window.clearInterval(this.uploadCheckInterval);
            this.uploadCheckInterval = 0;
        }
    };
    BaseUploadWidget.prototype.serverQueryDone = function (newState) {
        this.stopUploadCheck();
        _super.prototype.serverQueryDone.call(this, newState);
    };
    BaseUploadWidget.prototype.submitUploadForm = function () {
        this._uploadForm.submit();
    };
    BaseUploadWidget.prototype.startServerQuery = function () {
        this._lastQueryId = _super.prototype.startServerQuery.call(this);
        this.uploadIframe.setAttribute(exports.BaseUploadWidget_CONSTS.uploading, BaseServerWidget_1.ServerStates[this.serverState]);
        if (!this.uploadCheckInterval)
            this.uploadCheckInterval = window.setInterval(this.listenOnIframe, exports.BaseUploadWidget_CONSTS.uploadCheckInterval);
        this.submitUploadForm();
        return this._lastQueryId;
    };
    BaseUploadWidget.prototype.getServerParameters = function () {
        var params = window.gigya.utils.object.extractProperties(this._screenSet.params, {}, 'APIKey|cid|oauth_token|login_token|source|sourceData|regToken'); // TODO: remove the any type
        params.authMode = params['oauth_token'] ? 'token' : 'cookie';
        var webAdapter = window.gigya._.apiAdapters.web;
        if (webAdapter) {
            // TODO: remove casting
            params.login_token = window.gigya._.apiAdapters.web.tokenStore.get(params['APIKey']);
            params.gmidTicket = window.gigya._.apiAdapter.getGmidTicket();
        }
        if (!params.APIKey)
            params.APIKey = window.gigya.thisScript.APIKey;
        if (this._screenSet.data.regToken)
            params.regToken = this._screenSet.data.regToken;
        return params;
    };
    return BaseUploadWidget;
}(BaseServerWidget_1.BaseServerWidget));
exports.BaseUploadWidget = BaseUploadWidget;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget.ts":
/*!*******************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BaseWidget, _super);
    function BaseWidget(el, parent, _screen, resetCss) {
        if (resetCss === void 0) { resetCss = true; }
        var _this = _super.call(this, el, parent) || this;
        _this._screen = _screen;
        _this.params = {};
        _this.renderWidgetUI = false;
        _this.params = _this.getElementParams(el);
        if (resetCss)
            window.gigya.utils.DOM.addClassToElement(el, 'gigya-reset');
        return _this;
    }
    BaseWidget.registerTypedWidgets = function (parentElement, widgetLibrary, factory) {
        var widgets = new Array();
        utils_1.ForEachProp(widgetLibrary, function (type, gigyaClass) {
            var elements = parentElement.querySelectorAll(type.CONSTS.selector);
            utils_1.ForEach(elements, function (el) {
                widgets.push(factory(type, el));
            });
        });
        return widgets;
    };
    //#endregion
    BaseWidget.prototype.getElementParams = function (el) {
        var _this = this;
        var params = {};
        var self = this;
        utils_1.ForEach(el.querySelectorAll('param'), function (param) {
            params[param.name] = param.value;
            var widgetExpressions;
            try {
                widgetExpressions = utils_1.getConditionalAttributeExpressions(param, true);
            }
            catch (e) {
                _this.warn('Error in param conditionals, conditionals ignored');
                widgetExpressions = [];
            }
            if (widgetExpressions.length > 0) {
                self.conditionalExpressions = self.conditionalExpressions.concat(widgetExpressions);
            }
        });
        return params;
    };
    BaseWidget.prototype.evaluateConditionalAttributes = function () {
        if (!this.widgetParams) {
            // first time the widget is loaded.
            this.widgetParams = this.params;
            this.renderWidgetUI = true;
        }
        _super.prototype.evaluateConditionalAttributes.call(this);
        if (this.renderWidgetUI) {
            this.renderWidget();
        }
    };
    // overrides 'executeConditionalResult' in TemplateElement
    BaseWidget.prototype.executeConditionalResult = function (evaluationResult, conditionalAtt, element) {
        if (!conditionalAtt.isWidgetParamTag) {
            return _super.prototype.executeConditionalResult.call(this, evaluationResult, conditionalAtt, element);
        }
        else {
            if (evaluationResult === '' && conditionalAtt.defaultValue) {
                evaluationResult = conditionalAtt.defaultValue;
            }
            if (!evaluationResult && !conditionalAtt.defaultValue) {
                conditionalAtt.lastAttributeValue = evaluationResult;
                // First check that the param is inside the widget params so
                // I can set the 'reRenderWidget' flag.
                if (this.widgetParams[conditionalAtt.attributeName]) {
                    delete this.widgetParams[conditionalAtt.attributeName];
                    this.renderWidgetUI = true;
                }
            }
            else if (evaluationResult !== conditionalAtt.lastAttributeValue) {
                conditionalAtt.lastAttributeValue = evaluationResult;
                this.widgetParams[conditionalAtt.attributeName] = evaluationResult;
                this.renderWidgetUI = true;
            }
            return evaluationResult;
        }
    };
    BaseWidget.prototype.renderWidget = function () {
        //virtual method - implemented only by widgets who are 'pluginWidgets'
    };
    return BaseWidget;
}(TemplateElement_1.TemplateElement));
exports.BaseWidget = BaseWidget;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Captcha.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Captcha.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.consentFieldName = 'isConsentGranted';
exports.namespace = 'preferences';
function postProcessForm(formData, preferencesSchema) {
    var displayedPreferences = getDisplayedPreferences(formData, preferencesSchema);
    if (displayedPreferences) {
        formData = window.gigya.utils.object.merge([formData, { displayedPreferences: displayedPreferences }]);
    }
    return formData;
}
exports.postProcessForm = postProcessForm;
function getDisplayedPreferences(formData, preferencesSchema) {
    if (!formData)
        return undefined;
    if (!preferencesSchema) {
        // gigya.logger.error(`form has preferences - but it doesn't exist in schema`);
        return undefined;
    }
    var consents = Object.keys(formData)
        .filter(isConsentField)
        .map(toConsentName);
    if (!consents.length)
        return undefined;
    return consents.reduce(function (res, curr) {
        var consent = preferencesSchema[curr];
        if (!consent) {
            window.gigya.logger.warn("form input bound to " + exports.namespace + "." + curr + " but it doesn't exist on schema");
        }
        else {
            res[curr] = {
                docVersion: consent.currentDocVersion,
                docDate: consent.currentDocDate,
            };
        }
        return res;
    }, {});
}
function isConsentField(fieldName) {
    // todo: after ie11 deprecation, replace with startsWith & endsWith.
    return fieldName.indexOf(exports.namespace + ".") == 0 && fieldName.substr(fieldName.length - exports.consentFieldName.length, fieldName.length) === exports.consentFieldName;
}
function toConsentName(consentFieldName) {
    // removing preferences namespace and isConsentGranted
    var fieldParts = consentFieldName.split('.');
    return fieldParts.slice(1, fieldParts.length - 1).join('.');
}


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug.ts":
/*!**************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function warn(screensetID, msg) {
    // TODO: this probably should use some general debug warn method or in the base plugin
    if (typeof console == 'object' && console.warn)
        console.warn('Gigya Screenset (' + screensetID + ') - ' + msg);
}
exports.warn = warn;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var ErrorElementPolicies = {
    'gigya-error-display': {
        showError: function (el, errorMessage) { return window.gigya.utils.DOM.addClassToElement(el, 'gigya-error-display-active'); },
        hideError: function (el) { return window.gigya.utils.DOM.removeClassFromElement(el, 'gigya-error-display-active'); },
    },
    'gigya-error-msg': {
        showError: function (el, errorMessage) {
            window.gigya.utils.DOM.addClassToElement(el, 'gigya-error-msg-active');
            el.innerHTML = errorMessage;
        },
        hideError: function (el) {
            window.gigya.utils.DOM.removeClassFromElement(el, 'gigya-error-msg-active');
            el.innerHTML = '';
        },
    },
};
utils_1.DeepFreeze(ErrorElementPolicies);
var ErrorScopes;
(function (ErrorScopes) {
    ErrorScopes[ErrorScopes["boundObjectError"] = 0] = "boundObjectError";
    ErrorScopes[ErrorScopes["firstError"] = 1] = "firstError";
    ErrorScopes[ErrorScopes["anyError"] = 2] = "anyError";
    ErrorScopes[ErrorScopes["allErrors"] = 3] = "allErrors";
    ErrorScopes[ErrorScopes["bound-object-error"] = 0] = "bound-object-error";
    ErrorScopes[ErrorScopes["first-error"] = 1] = "first-error";
    ErrorScopes[ErrorScopes["any-error"] = 2] = "any-error";
    ErrorScopes[ErrorScopes["all-errors"] = 3] = "all-errors";
})(ErrorScopes = exports.ErrorScopes || (exports.ErrorScopes = {}));
utils_1.DeepFreeze(ErrorScopes);
exports.ErrorDisplayElement_CONSTS = {
    gigyaClasses: ['gigya-error-display', 'gigya-error-msg'],
    boundedTo: 'data-bound-to',
    errorCodes: 'data-error-codes',
    scope: 'data-scope',
    flags: 'data-error-flags',
    errorClassPrefix: 'gigya-error-code-',
};
utils_1.DeepFreeze(exports.ErrorDisplayElement_CONSTS);
var ErrorDisplayElement = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorDisplayElement, _super);
    function ErrorDisplayElement(el, _screen) {
        var _this = _super.call(this, el, _screen) || this;
        _this._screen = _screen;
        _this.boundedTo = el.getAttribute(exports.ErrorDisplayElement_CONSTS.boundedTo);
        _this.scope = ErrorScopes[el.getAttribute(exports.ErrorDisplayElement_CONSTS.scope)] || ErrorScopes.boundObjectError;
        var errorCodes = el.getAttribute(exports.ErrorDisplayElement_CONSTS.errorCodes);
        if (errorCodes)
            _this.allowedErrorCodes = utils_1.Map(errorCodes.split(','), function (code) { return parseInt(code); });
        else
            _this.allowedErrorCodes = [];
        var flags = el.getAttribute(exports.ErrorDisplayElement_CONSTS.flags);
        if (flags)
            _this.allowedFlags = flags.split(',');
        else
            _this.allowedFlags = [];
        for (var className in ErrorElementPolicies) {
            if (window.gigya.utils.DOM.isElementClass(el, className)) {
                _this.policy = ErrorElementPolicies[className];
                break;
            }
        }
        _this.policy.hideError(el); // clear error as initial appearance
        // WCAG: Set role=alert and aria-atomic so that screen readers will automatically read updated error text.
        // See: https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html
        el.setAttribute('aria-atomic', 'true');
        el.setAttribute('role', 'alert');
        return _this;
    }
    ErrorDisplayElement.prototype.isErrorCodeAllowed = function (errorCode, flags) {
        var _this = this;
        if (flags === void 0) { flags = null; }
        var allowedCode = (this.allowedErrorCodes.length === 0 && errorCode !== GSErrors_1.GSErrors.Data_Pending) || window.gigya.utils.array.indexOf(this.allowedErrorCodes, errorCode) !== -1;
        var allowedFlag = this.allowedFlags.length === 0; // Allow all flags if flags are not specified
        if (this.allowedFlags.length && flags) {
            var arFlags = flags.split(',');
            allowedFlag = utils_1.Some(arFlags, function (flag) {
                if (window.gigya.utils.array.indexOf(_this.allowedFlags, flag) !== -1) {
                    allowedFlag = true;
                    return true;
                }
                return false;
            });
        }
        return allowedCode && allowedFlag;
    };
    ErrorDisplayElement.prototype.showError = function (error) {
        this.setLastError(error);
        this.policy.showError(this.instanceElement, error.errorMessage);
        this._screenSet.centerModal();
    };
    ErrorDisplayElement.prototype.hideError = function () {
        this.policy.hideError(this.instanceElement);
        this.removeLastError();
    };
    ErrorDisplayElement.prototype.setLastError = function (error) {
        this.removeLastError();
        this.lastError = error;
        if (this.instanceElement) {
            window.gigya.utils.DOM.addClassToElement(this.instanceElement, exports.ErrorDisplayElement_CONSTS.errorClassPrefix + error.errorCode);
            this._screenSet.centerModal();
        }
    };
    ErrorDisplayElement.prototype.removeLastError = function () {
        if (this.lastError) {
            if (this.instanceElement) {
                window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, exports.ErrorDisplayElement_CONSTS.errorClassPrefix + this.lastError.errorCode);
                this._screenSet.centerModal();
            }
            this.lastError = null;
        }
    };
    ErrorDisplayElement.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.boundedTo = this.instanceElement.getAttribute(exports.ErrorDisplayElement_CONSTS.boundedTo);
        var errorCodes = this.instanceElement.getAttribute(exports.ErrorDisplayElement_CONSTS.errorCodes);
        if (errorCodes)
            this.allowedErrorCodes = utils_1.Map(errorCodes.split(','), function (code) { return parseInt(code); });
        else
            this.allowedErrorCodes = [];
        this.scope = ErrorScopes[this.instanceElement.getAttribute(exports.ErrorDisplayElement_CONSTS.scope)] || ErrorScopes.boundObjectError;
        var flags = this.instanceElement.getAttribute(exports.ErrorDisplayElement_CONSTS.flags);
        if (flags)
            this.allowedFlags = flags.split(',');
        else
            this.allowedFlags = [];
    };
    return ErrorDisplayElement;
}(TemplateElement_1.TemplateElement));
exports.ErrorDisplayElement = ErrorDisplayElement;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors.ts":
/*!***************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var ScreenOptions_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.PendingErrorAttributes = {};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNTS_LINKED] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.accountsLinkedScreen,
    nextScreen: function (form) { return form._screen.accountsLinkedScreen || '_finish'; },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_PENDING_REGISTRATION] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingRegistrationScreen,
    nextScreen: function (form) {
        var apiData = form._screenSet.getApiData();
        delete apiData.getSchema; // cleaning cached schema
        return form._screen.pendingRegistrationScreen;
    },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS] = exports.PendingErrorAttributes[GSErrors_1.GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.existingLoginIdentifierScreen,
    nextScreen: function (form) { return form._screenSet.data.regToken && form._screen.existingLoginIdentifierScreen; },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_PENDING_VERIFICATION] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingVerificationScreen,
    nextScreen: function (form) { return form._screen.pendingVerificationScreen; },
    resetFinalizeNeededState: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_MISSING_LOGINID] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.missingLoginIdScreen,
    nextScreen: function (form) { return form._screen.missingLoginIdScreen; },
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.PENDING_PASSWORD_CHANGE] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingPasswordChangeScreen,
    nextScreen: function (form) { return form._screen.pendingPasswordChangeScreen; },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingTfaVerificationScreen,
    nextScreen: function (form) { return form._screen.pendingTfaVerificationScreen; },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingTfaRegistrationScreen,
    nextScreen: function (form) { return form._screen.pendingTfaRegistrationScreen; },
    requiresFinalize: true,
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingReAuthenticationScreen,
    nextScreen: function (form) { return form._screen.pendingReAuthenticationScreen; },
};
exports.PendingErrorAttributes[GSErrors_1.GSErrors.PENDING_CODE_VERIFICATION] = {
    name: ScreenOptions_1.ScreenOptions_CONSTS.pendingCodeVerificationScreen,
    requiresFinalize: true,
    nextScreen: function (form) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var apiData, accountInfo;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiData = form._screenSet.getApiData();
                    accountInfo = apiData.getAccountInfo = apiData.getAccountInfo || {};
                    if (!(!accountInfo.email && !(accountInfo.profile && accountInfo.profile.email))) return [3 /*break*/, 2];
                    return [4 /*yield*/, new gigya.Promise(function (r) { return form._screenSet.updateAccountInfo(r); })];
                case 1:
                    accountInfo = _a.sent();
                    _a.label = 2;
                case 2:
                    accountInfo.email = accountInfo.email || (accountInfo.profile && accountInfo.profile.email);
                    window.gigya.accounts.otp.sendCode({
                        regToken: form._screenSet.data.regToken,
                        email: accountInfo.email,
                        callback: function (res) {
                            if (res.errorCode == GSErrors_1.GSErrors.OK) {
                                form._screenSet.data.otpData.vToken = res.vToken;
                            }
                        }
                    });
                    return [2 /*return*/, form._screen.pendingCodeVerificationScreen];
            }
        });
    }); }
};
utils_1.DeepFreeze(exports.PendingErrorAttributes);
function notImplementerAbstract() {
    throw new Error('NOT IMPLEMENTED');
}
exports.notImplementerAbstract = notImplementerAbstract;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/AuthMethodsForm.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/AuthMethodsForm.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var getAttribute = window.gigya._.plugins.utils.DOM.getAttribute;
exports.AuthMethodsForm_CONSTS = {
    gigyaClass: 'gigya-auth-methods-form',
};
utils_1.DeepFreeze(exports.AuthMethodsForm_CONSTS);
var AuthMethodsForm = /** @class */ (function (_super) {
    tslib_1.__extends(AuthMethodsForm, _super);
    function AuthMethodsForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._authMethodButtons = [];
        return _this;
    }
    AuthMethodsForm.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        this.instanceElement.querySelectorAll('[data-auth-method]')
            .forEach(function (el) { return _this._authMethodButtons.push(el); });
    };
    AuthMethodsForm.prototype.checkAutoSkip = function (formContext, callback) {
        var _this = this;
        _super.prototype.checkAutoSkip.call(this, formContext, function (formCanSkip) {
            if (formCanSkip) { // auto-skip is enabled
                var enabledAuthMethods = _this.getEnabledAuthMethods();
                if (enabledAuthMethods.length == 1 // only 1 active auth method
                    || !formContext.explicitSwitchScreen) { // navigation to screen wasn't explicit (explicit means: clicking on a link that says "Change auth method")
                    _this.autoSkipScreen = _this.getDefaultAuthScreen(enabledAuthMethods);
                    return callback(true);
                }
            }
            return callback(false);
        });
    };
    AuthMethodsForm.prototype.getDefaultAuthScreen = function (enabledAuthMethods) {
        if (!enabledAuthMethods || !enabledAuthMethods.length) {
            window.gigya.logger.warn('could not find default auth method');
            return null;
        }
        var defaultAuthMethod = enabledAuthMethods[enabledAuthMethods.length - 1]; // get last enabled auth method
        var authMethodButton = this._authMethodButtons.find(function (x) { return getAttribute(x, 'data-auth-method') === defaultAuthMethod; });
        if (!authMethodButton) {
            // remove the last auth-method from the list (the one we could'nt find a match for)
            enabledAuthMethods.pop();
            return this.getDefaultAuthScreen(enabledAuthMethods);
        }
        var defaultAuthScreen = getAttribute(authMethodButton, 'data-switch-screen');
        window.gigya.logger.info('found default auth-screen', { successScreen: defaultAuthScreen });
        return defaultAuthScreen;
    };
    AuthMethodsForm.prototype.getEnabledAuthMethods = function () {
        var _a, _b;
        var apiData = this._screenSet.getApiData();
        return ((_b = (_a = apiData.getAccountInfo) === null || _a === void 0 ? void 0 : _a.authMethods) === null || _b === void 0 ? void 0 : _b.slice()) || [];
    };
    AuthMethodsForm.CONSTS = exports.AuthMethodsForm_CONSTS;
    return AuthMethodsForm;
}(BaseForm_1.BaseForm));
exports.AuthMethodsForm = AuthMethodsForm;
BaseForm_1.BaseForm.addFormToLibrary(AuthMethodsForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LinkAccountsForm.ts":
/*!*******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LinkAccountsForm.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
exports.LinkAccountsForm_CONSTS = {
    gigyaClass: 'gigya-link-accounts-form',
};
utils_1.DeepFreeze(exports.LinkAccountsForm_CONSTS);
var LinkAccountsForm = /** @class */ (function (_super) {
    tslib_1.__extends(LinkAccountsForm, _super);
    function LinkAccountsForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    LinkAccountsForm.prototype.prePopulateData = function () {
        var populateData = _super.prototype.prePopulateData.call(this);
        var apiData = this._screenSet.getApiData();
        var conflictingAccount = apiData && apiData.getConflictingAccount && apiData.getConflictingAccount.conflictingAccount;
        if (conflictingAccount)
            populateData.loginID = conflictingAccount.loginID || (conflictingAccount.emails && conflictingAccount.emails[0]);
        return populateData;
    };
    LinkAccountsForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                loginID: true,
                password: true,
            },
        ]);
    };
    LinkAccountsForm.prototype.submitApi = function () {
        return window.gigya.accounts.login;
    };
    LinkAccountsForm.prototype.getNeededData = function () {
        var neededData = _super.prototype.getNeededData.call(this);
        if (this._screenSet.data.regToken) {
            neededData = window.gigya.utils.object.merge([
                // only bring in conflicting accounts if there is a regToken present
                neededData,
                {
                    getConflictingAccount: {
                        params: {
                            regToken: this._screenSet.data.regToken,
                        },
                    },
                },
            ]);
        }
        return neededData;
    };
    LinkAccountsForm.prototype.defaultSubmitParams = function () {
        var apiData = this._screenSet.getApiData();
        var conflictingAccount = apiData && apiData.getConflictingAccount && apiData.getConflictingAccount.conflictingAccount;
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            {
                loginMode: LoginModes_1.LoginModes.link.name,
                loginID: conflictingAccount && (conflictingAccount.loginID || (conflictingAccount.emails && conflictingAccount.emails[0])),
                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,subscriptions,preferences', this._screenSet.params.include)
            },
        ]);
    };
    LinkAccountsForm.prototype.getLoginProviders = function () {
        return LoginModes_1.LoginModes.link.getLoginProviders(this._screenSet.data.apiData, this._screenSet.params, this._screenSet.data.regToken);
    };
    LinkAccountsForm.prototype.onSkipped = function (response) {
        this._screenSet.data.extraEventData.allowAccountsLinking = true;
    };
    LinkAccountsForm.CONSTS = exports.LinkAccountsForm_CONSTS;
    return LinkAccountsForm;
}(BaseForm_1.BaseForm));
exports.LinkAccountsForm = LinkAccountsForm;
BaseForm_1.BaseForm.addFormToLibrary(LinkAccountsForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm.ts":
/*!************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.LoginForm_CONSTS = {
    gigyaClass: 'gigya-login-form',
};
utils_1.DeepFreeze(exports.LoginForm_CONSTS);
var LoginForm = /** @class */ (function (_super) {
    tslib_1.__extends(LoginForm, _super);
    function LoginForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    LoginForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                loginID: true,
                password: true,
                captchaText: true,
                captchaToken: true,
            },
        ]);
    };
    LoginForm.prototype.submitApi = function () {
        return window.gigya.accounts.login;
    };
    LoginForm.prototype.getErrorKey = function (response) {
        if (response.errorCode === GSErrors_1.GSErrors.OLD_PASSWORD_USED) {
            return 'old_password_used';
        }
        return _super.prototype.getErrorKey.call(this, response);
    };
    LoginForm.prototype._getSubmitApiParams = function (params) {
        params = LoginModes_1.LoginModes.standard.filterParams(params);
        return _super.prototype._getSubmitApiParams.call(this, params);
    };
    LoginForm.prototype.defaultSubmitParams = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            {
                loginMode: LoginModes_1.LoginModes.standard.name,
                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,emails,subscriptions,preferences', this._screenSet.params.include)
            },
        ]);
    };
    LoginForm.CONSTS = exports.LoginForm_CONSTS;
    return LoginForm;
}(BaseForm_1.BaseForm));
exports.LoginForm = LoginForm;
BaseForm_1.BaseForm.addFormToLibrary(LoginForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.NewsletterSignup_CONSTS = {
    gigyaClass: 'gigya-subscribe-with-email-form',
};
utils_1.DeepFreeze(exports.NewsletterSignup_CONSTS);
var NewsletterSignupForm = /** @class */ (function (_super) {
    tslib_1.__extends(NewsletterSignupForm, _super);
    function NewsletterSignupForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    NewsletterSignupForm.prototype.prePopulateDataFrom = function () {
        return ['getAccountInfo', 'getAccountInfo.profile'];
    };
    NewsletterSignupForm.prototype.getNeededData = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                getSchema: {
                    params: {},
                },
                getAccountInfo: {
                    params: {
                        include: 'emails,profile,subscriptions,preferences',
                    },
                },
            },
        ]);
    };
    NewsletterSignupForm.prototype.performSubmit = function (oParams) {
        var _this = this;
        var regTok = this._screenSet.params.regToken || this._screenSet.data.regToken;
        if (this._screenSet.getApiData().getAccountInfo.status === 'OK' || regTok) {
            oParams = this.setSubscriptions(oParams, regTok);
            _super.prototype.performSubmit.call(this, oParams);
        }
        else {
            window.gigya.accounts.initRegistration({
                isLite: true,
                callback: function (res) {
                    if (res.regToken) {
                        oParams = _this.setSubscriptions(oParams, res.regToken);
                    }
                    _super.prototype.performSubmit.call(_this, oParams);
                },
            });
        }
    };
    NewsletterSignupForm.prototype.setSubscriptions = function (oParams, regToken) {
        if (regToken) {
            oParams['regToken'] = regToken;
            // this should store the regToken for future screens in the same screen set...
            this._screenSet.params.regToken = regToken;
            this._screenSet.data.regToken = regToken;
        }
        return oParams;
    };
    NewsletterSignupForm.prototype.submitApi = function () {
        return window.gigya.accounts.setAccountInfo;
    };
    NewsletterSignupForm.prototype.onAfterSubmit = function (response) {
        if (response.errorCode == GSErrors_1.GSErrors.OK) {
            var formData = this.getFormData(true, false);
            if (formData.email) {
                if (!formData.profile)
                    formData.profile = {};
                formData.profile.email = formData.email;
                delete formData.email;
            }
            this._screenSet.onAccountInfo(formData);
        }
        _super.prototype.onAfterSubmit.call(this, response);
    };
    NewsletterSignupForm.prototype.requiredFields = function () {
        var requiredFields = _super.prototype.requiredFields.call(this);
        requiredFields['email'] = true;
        return requiredFields;
    };
    NewsletterSignupForm.prototype.schemaValidated = function () {
        return true;
    };
    NewsletterSignupForm.CONSTS = exports.NewsletterSignup_CONSTS;
    return NewsletterSignupForm;
}(BaseForm_1.BaseForm));
exports.NewsletterSignupForm = NewsletterSignupForm;
BaseForm_1.BaseForm.addFormToLibrary(NewsletterSignupForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OrganizationRegistrationForm.ts":
/*!*******************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OrganizationRegistrationForm.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
exports.OrgRegisterForm_CONSTS = {
    gigyaClass: 'gigya-org-register-form',
};
utils_1.DeepFreeze(exports.OrgRegisterForm_CONSTS);
var OrgRegisterForm = /** @class */ (function (_super) {
    tslib_1.__extends(OrgRegisterForm, _super);
    function OrgRegisterForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    // merges the "organizationSchema" and "requesterSchema" fields
    // from the getOrganizationSchema response
    // into the "general" schema (getSchema response)
    OrgRegisterForm.prototype.mergeOrgSchemaIntoMainSchema = function (mainSchema, orgSchema) {
        return window.gigya.utils.object.merge([mainSchema, {
                organizationSchema: orgSchema.organizationSchema,
                requesterSchema: orgSchema.requesterSchema
            }], true);
    };
    OrgRegisterForm.prototype.prePopulateDataFrom = function () {
        return ['getOrganizationSchema'];
    };
    OrgRegisterForm.prototype.getNeededData = function () {
        var _this = this;
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                getOrganizationSchema: {
                    params: {},
                    responseHandler: function (orgSchema) {
                        var mainSchema = _this._screenSet.getApiData().getSchema;
                        if (mainSchema)
                            _this._screenSet.getApiData().getSchema = _this.mergeOrgSchemaIntoMainSchema(mainSchema, orgSchema);
                        return orgSchema; // return getOrgSchemaResponse
                    },
                },
                getSchema: {
                    params: {},
                    responseHandler: function (mainSchema) {
                        var orgSchema = _this._screenSet.getApiData().getOrganizationSchema;
                        return _this.mergeOrgSchemaIntoMainSchema(mainSchema, orgSchema || {}); // return the merged schema
                    }
                }
            },
        ]);
    };
    OrgRegisterForm.prototype.schemaValidated = function () {
        return true;
    };
    OrgRegisterForm.prototype.submitApi = function () {
        return window.gigya.accounts.b2b.registerOrganization;
    };
    OrgRegisterForm.CONSTS = exports.OrgRegisterForm_CONSTS;
    return OrgRegisterForm;
}(BaseForm_1.BaseForm));
exports.OrgRegisterForm = OrgRegisterForm;
BaseForm_1.BaseForm.addFormToLibrary(OrgRegisterForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpLoginForm.ts":
/*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpLoginForm.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var OtpVerificationBaseForm_1 = __webpack_require__(/*! ./OtpVerificationBaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpVerificationBaseForm.ts");
exports.OtpLoginForm_CONSTS = {
    gigyaClass: 'gigya-otp-login-form',
};
utils_1.DeepFreeze(exports.OtpLoginForm_CONSTS);
var OtpLoginForm = /** @class */ (function (_super) {
    tslib_1.__extends(OtpLoginForm, _super);
    function OtpLoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtpLoginForm.prototype.submitApi = function () {
        return window.gigya.accounts.otp.login;
    };
    OtpLoginForm.CONSTS = exports.OtpLoginForm_CONSTS;
    return OtpLoginForm;
}(OtpVerificationBaseForm_1.OtpVerificationBaseForm));
exports.OtpLoginForm = OtpLoginForm;
BaseForm_1.BaseForm.addFormToLibrary(OtpLoginForm);
// region mobile-login backward compatibility
// for old screen sets that uses 'gigya-mobile-verification-form'
exports.MobileLoginVerificationForm_CONSTS = {
    gigyaClass: 'gigya-mobile-verification-form',
};
utils_1.DeepFreeze(exports.MobileLoginVerificationForm_CONSTS);
var MobileLoginVerificationForm = /** @class */ (function (_super) {
    tslib_1.__extends(MobileLoginVerificationForm, _super);
    function MobileLoginVerificationForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileLoginVerificationForm.CONSTS = exports.MobileLoginVerificationForm_CONSTS;
    return MobileLoginVerificationForm;
}(OtpLoginForm));
exports.MobileLoginVerificationForm = MobileLoginVerificationForm;
BaseForm_1.BaseForm.addFormToLibrary(MobileLoginVerificationForm);
// endregion


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpSendCodeForm.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpSendCodeForm.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
exports.OtpSendCodeForm_CONSTS = {
    gigyaClass: 'gigya-otp-send-code-form',
};
utils_1.DeepFreeze(exports.OtpSendCodeForm_CONSTS);
var OtpSendCodeForm = /** @class */ (function (_super) {
    tslib_1.__extends(OtpSendCodeForm, _super);
    function OtpSendCodeForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtpSendCodeForm.prototype.submitApi = function () {
        return window.gigya.accounts.otp.sendCode;
    };
    OtpSendCodeForm.prototype.prePopulateDataFrom = function () {
        return ['getAccountInfo', 'getAccountInfo.profile'];
    };
    OtpSendCodeForm.prototype.onAfterSubmit = function (response) {
        this._screenSet.data.otpData.vToken = response['vToken'];
        _super.prototype.onAfterSubmit.call(this, response);
    };
    OtpSendCodeForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                phoneNumber: true,
                email: true
            },
        ]);
    };
    OtpSendCodeForm.prototype.performSubmit = function (oParams) {
        this._saveSpecialFieldsInCache();
        _super.prototype.performSubmit.call(this, oParams);
    };
    OtpSendCodeForm.prototype._saveSpecialFieldsInCache = function () {
        var _this = this;
        var formData = this.getFormData(true, true, true);
        this._screenSet.getApiData().getAccountInfo = this._screenSet.getApiData().getAccountInfo || {};
        var specialFields = this.specialFields();
        Object.keys(specialFields)
            .filter(function (specialField) { return Boolean(specialFields[specialField]); })
            .forEach(function (specialField) {
            var _a;
            __webpack_provided_Object_dot_assign(_this._screenSet.getApiData().getAccountInfo, (_a = {}, _a[specialField] = formData[specialField], _a));
        });
    };
    OtpSendCodeForm.CONSTS = exports.OtpSendCodeForm_CONSTS;
    return OtpSendCodeForm;
}(BaseForm_1.BaseForm));
exports.OtpSendCodeForm = OtpSendCodeForm;
BaseForm_1.BaseForm.addFormToLibrary(OtpSendCodeForm);
// region mobile-login backward compatibility
// for old screen sets that uses 'gigya-mobile-verification-form'
exports.MobileLoginForm_CONSTS = {
    gigyaClass: 'gigya-mobile-login-form',
};
utils_1.DeepFreeze(exports.MobileLoginForm_CONSTS);
var MobileLoginForm = /** @class */ (function (_super) {
    tslib_1.__extends(MobileLoginForm, _super);
    function MobileLoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileLoginForm.CONSTS = exports.MobileLoginForm_CONSTS;
    return MobileLoginForm;
}(OtpSendCodeForm));
exports.MobileLoginForm = MobileLoginForm;
BaseForm_1.BaseForm.addFormToLibrary(MobileLoginForm);
// endregion

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpUpdateForm.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpUpdateForm.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var OtpVerificationBaseForm_1 = __webpack_require__(/*! ./OtpVerificationBaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpVerificationBaseForm.ts");
exports.OtpUpdateForm_CONSTS = {
    gigyaClass: 'gigya-otp-update-form',
};
utils_1.DeepFreeze(exports.OtpUpdateForm_CONSTS);
var OtpUpdateForm = /** @class */ (function (_super) {
    tslib_1.__extends(OtpUpdateForm, _super);
    function OtpUpdateForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtpUpdateForm.prototype.submitApi = function () {
        return window.gigya.accounts.otp.update;
    };
    OtpUpdateForm.CONSTS = exports.OtpUpdateForm_CONSTS;
    return OtpUpdateForm;
}(OtpVerificationBaseForm_1.OtpVerificationBaseForm));
exports.OtpUpdateForm = OtpUpdateForm;
BaseForm_1.BaseForm.addFormToLibrary(OtpUpdateForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpVerificationBaseForm.ts":
/*!**************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpVerificationBaseForm.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var OtpVerificationBaseForm = /** @class */ (function (_super) {
    tslib_1.__extends(OtpVerificationBaseForm, _super);
    function OtpVerificationBaseForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtpVerificationBaseForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                code: true
            },
        ]);
    };
    OtpVerificationBaseForm.prototype.getErrorKey = function (response) {
        if (response.errorCode === GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE && response.errorDetails) {
            return utils_1.endsWith(response.errorDetails, 'Token has been revoked') ?
                'otp_code_expired' :
                utils_1.endsWith(response.errorDetails, 'phoneNumber already exists') ?
                    'phone_number_exists' :
                    utils_1.endsWith(response.errorDetails, 'code') ?
                        'please_enter_a_valid_code' :
                        _super.prototype.getErrorKey.call(this, response);
        }
        return _super.prototype.getErrorKey.call(this, response);
    };
    OtpVerificationBaseForm.prototype.defaultSubmitParams = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            { vToken: this._screenSet.data.otpData.vToken }
        ]);
    };
    return OtpVerificationBaseForm;
}(BaseForm_1.BaseForm));
exports.OtpVerificationBaseForm = OtpVerificationBaseForm;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordAuthMethodForm.ts":
/*!*************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordAuthMethodForm.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var LoginForm_1 = __webpack_require__(/*! ./LoginForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm.ts");
exports.PasswordAuthMethodForm_CONSTS = {
    gigyaClass: 'gigya-password-auth-method-form',
};
utils_1.DeepFreeze(exports.PasswordAuthMethodForm_CONSTS);
var PasswordAuthMethodForm = /** @class */ (function (_super) {
    tslib_1.__extends(PasswordAuthMethodForm, _super);
    function PasswordAuthMethodForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordAuthMethodForm.prototype.submitApi = function () {
        var _this = this;
        return function (params, formData, options, defaultParams) {
            var accountInfo = _this._screenSet.getApiData().getAccountInfo || {};
            formData = window.gigya.utils.object.merge([formData, {
                    loginID: accountInfo.identifier,
                    password: formData.password
                }]);
            window.gigya.accounts.login(params, formData, options, defaultParams);
        };
    };
    PasswordAuthMethodForm.CONSTS = exports.PasswordAuthMethodForm_CONSTS;
    return PasswordAuthMethodForm;
}(LoginForm_1.LoginForm));
exports.PasswordAuthMethodForm = PasswordAuthMethodForm;
BaseForm_1.BaseForm.addFormToLibrary(PasswordAuthMethodForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordlessLoginForm.ts":
/*!************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordlessLoginForm.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.PasswordlessLoginForm_CONSTS = {
    gigyaClass: 'gigya-passwordless-login-form',
};
utils_1.DeepFreeze(exports.PasswordlessLoginForm_CONSTS);
var PasswordlessLoginForm = /** @class */ (function (_super) {
    tslib_1.__extends(PasswordlessLoginForm, _super);
    function PasswordlessLoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordlessLoginForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            { loginID: true }
        ]);
    };
    PasswordlessLoginForm.prototype.submitApi = function () {
        return function (params, formData, options, defaultParams) {
            window.gigya.accounts.auth.getMethods({
                identifier: formData.loginID,
                callback: options.callback
            });
        };
    };
    PasswordlessLoginForm.prototype.getErrorKey = function (response) {
        return response.errorCode === GSErrors_1.GSErrors.NOT_FOUND
            ? 'invalid_login_identifier'
            : _super.prototype.getErrorKey.call(this, response);
    };
    PasswordlessLoginForm.prototype.onAfterSubmit = function (response) {
        this.saveInAccountInfo({
            identifier: response.requestParams.identifier,
            authMethods: response.methods
        });
        _super.prototype.onAfterSubmit.call(this, response);
    };
    PasswordlessLoginForm.prototype.saveInAccountInfo = function (obj) {
        var apiData = this._screenSet.getApiData();
        apiData.getAccountInfo = apiData.getAccountInfo || {};
        __webpack_provided_Object_dot_assign(apiData.getAccountInfo, obj);
    };
    PasswordlessLoginForm.CONSTS = exports.PasswordlessLoginForm_CONSTS;
    return PasswordlessLoginForm;
}(BaseForm_1.BaseForm));
exports.PasswordlessLoginForm = PasswordlessLoginForm;
BaseForm_1.BaseForm.addFormToLibrary(PasswordlessLoginForm);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm.ts":
/*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
exports.ProfileForm_CONSTS = {
    gigyaClass: 'gigya-profile-form',
    specialFields: {
        username: true,
        oldPassword: true,
        password: true,
        newPassword: true,
        passwordRetype: true,
        secretQuestion: true,
        secretAnswer: true,
        addLoginEmails: true,
        removeLoginEmails: true,
    },
};
utils_1.DeepFreeze(exports.ProfileForm_CONSTS);
var ProfileForm = /** @class */ (function (_super) {
    tslib_1.__extends(ProfileForm, _super);
    function ProfileForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    ProfileForm.prototype.prePopulateDataFrom = function () {
        return ['getAccountInfo', 'getAccountInfo.profile', 'getAccountInfo.subscriptions', 'getAccountInfo.loginIDs', 'getAccountInfo.preferences'];
    };
    ProfileForm.prototype.getNeededData = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                getSchema: {
                    params: {},
                },
                getAccountInfo: {
                    params: {
                        include: 'loginIDs,emails,profile,data,subscriptions,preferences',
                    },
                },
                getProviders: {
                    params: {
                        sections: 'activeProviders',
                    },
                },
            },
        ]);
    };
    ProfileForm.prototype.schemaValidated = function () {
        return true;
    };
    ProfileForm.prototype.isPasswordSchemaValidated = function () {
        if (window.gigya.thisScript.globalConf['toggles'] && typeof window.gigya.thisScript.globalConf['toggles']['alwaysValidatePassword'] != 'undefined') {
            return window.gigya.thisScript.globalConf['toggles']['alwaysValidatePassword'];
        }
        else {
            window.gigya.logger.report('alwaysValidatePassword not adopted completely', { globalConf: JSON.stringify(window.gigya.thisScript.globalConf) }, false);
        }
        return false;
    };
    ProfileForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([_super.prototype.specialFields.call(this), exports.ProfileForm_CONSTS.specialFields]);
    };
    ProfileForm.prototype.getLoginProviders = function () {
        return LoginModes_1.LoginModes.reAuth.getLoginProviders(this._screenSet.data.apiData, this._screenSet.params, this._screenSet.data.regToken);
    };
    ProfileForm.prototype.submitApi = function () {
        return window.gigya.accounts.setAccountInfo;
    };
    ProfileForm.prototype.defaultSubmitParams = function () {
        var conflictHandling = this._screenSet.params.conflictHandling
            || LoginModes_1.ConflictHandling[this._screenSet.data.regToken ? LoginModes_1.ConflictHandling.saveProfileAndFail : LoginModes_1.ConflictHandling.fail];
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            {
                conflictHandling: conflictHandling,
            },
        ]);
    };
    ProfileForm.prototype.getExtraProfileFields = function (missingOnly) {
        var missingFields = _super.prototype.getExtraProfileFields.call(this, missingOnly);
        if (window.gigya.utils.array.indexOf(missingFields, 'samlData') === -1) {
            missingFields.push('samlData');
        }
        return missingFields;
    };
    ProfileForm.CONSTS = exports.ProfileForm_CONSTS;
    return ProfileForm;
}(BaseForm_1.BaseForm));
exports.ProfileForm = ProfileForm;
BaseForm_1.BaseForm.addFormToLibrary(ProfileForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PushAuthMethodForm.ts":
/*!*********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PushAuthMethodForm.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! ../BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.PushAuthMethodForm_CONSTS = {
    gigyaClass: 'gigya-push-auth-method-form'
};
utils_1.DeepFreeze(exports.PushAuthMethodForm_CONSTS);
var PushAuthMethodForm = /** @class */ (function (_super) {
    tslib_1.__extends(PushAuthMethodForm, _super);
    function PushAuthMethodForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pollingStartTime = 0;
        _this._pollingLimit = _this._screenSet.params['isVerifiedPollingLimit'] || 1000 * 60 * 2; // default 2 min
        _this._pollingInterval = _this._screenSet.params['isVerifiedPollingInterval'] || 1000 * 3; // default 3 sec
        return _this;
    }
    PushAuthMethodForm.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.startPushVerificationFlow();
    };
    PushAuthMethodForm.prototype.unlinkInstanceElement = function () {
        this.stopPolling();
        _super.prototype.unlinkInstanceElement.call(this);
    };
    PushAuthMethodForm.prototype.startPushVerificationFlow = function () {
        var _this = this;
        var accountInfo = this.dataStore.apiData.getAccountInfo || {};
        window.gigya.accounts.auth.push.sendVerification({
            identifier: accountInfo.identifier,
            callback: function (res) { return _this.onSendVerificationResponse(res); }
        });
        this.startPolling();
    };
    PushAuthMethodForm.prototype.submitApi = function () {
        var _this = this;
        return function (params, data, options, defaultParams) {
            window.gigya.accounts.auth.login({
                accessToken: _this._accessToken,
                callback: options.callback
            });
        };
    };
    PushAuthMethodForm.prototype.stopPolling = function () {
        this._pollingStartTime = 0;
        clearTimeout(this._timeoutId);
    };
    PushAuthMethodForm.prototype.onSendVerificationResponse = function (res) {
        if (res.errorCode == 0 && res.vToken) {
            this.dataStore.pushData.vToken = res.vToken;
        }
        else {
            window.gigya.logger.error('gigya.accounts.auth.push.sendVerification failed', { res: res });
        }
    };
    PushAuthMethodForm.prototype.checkIsVerified = function () {
        var _this = this;
        // vToken may change in the data-store by the form's controls ("resend" button)
        var vToken = this.dataStore.pushData.vToken;
        if (vToken) {
            window.gigya.accounts.auth.push.isVerified({ vToken: vToken, callback: function (res) { return _this.onIsVerifiedResponse(res); } });
        }
        else {
            this.onIsVerifiedResponse({ errorCode: GSErrors_1.GSErrors.OK });
        }
    };
    ;
    PushAuthMethodForm.prototype.onPushVerified = function (accessToken) {
        this._accessToken = accessToken;
        this.stopPolling();
        this.submit(); // automatically submits the form so it'll send the accounts.auth.login request
    };
    PushAuthMethodForm.prototype.onIsVerifiedResponse = function (res) {
        var _this = this;
        // success
        if (res.accessToken)
            return this.onPushVerified(res.accessToken);
        // error
        if (res.errorCode != GSErrors_1.GSErrors.OK)
            window.gigya.logger.error('gigya.accounts.auth.push.isVerified failed', { res: res });
        // keep polling
        this._timeoutId = window.setTimeout(function () {
            if (_this.shouldContinuePolling())
                _this.checkIsVerified();
        }, this._pollingInterval);
    };
    PushAuthMethodForm.prototype.shouldContinuePolling = function () {
        var now = window.gigya.utils.date.now();
        return (now - this._pollingStartTime) < this._pollingLimit; // polling limit not reached
    };
    PushAuthMethodForm.prototype.startPolling = function () {
        this._pollingStartTime = window.gigya.utils.date.now();
        this.checkIsVerified();
    };
    PushAuthMethodForm.CONSTS = exports.PushAuthMethodForm_CONSTS;
    return PushAuthMethodForm;
}(BaseForm_1.BaseForm));
exports.PushAuthMethodForm = PushAuthMethodForm;
BaseForm_1.BaseForm.addFormToLibrary(PushAuthMethodForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ReauthenticationForm.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ReauthenticationForm.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
exports.ReauthenticationForm_CONSTS = {
    gigyaClass: 'gigya-reauthentication-form',
};
utils_1.DeepFreeze(exports.ReauthenticationForm_CONSTS);
var ReauthenticationForm = /** @class */ (function (_super) {
    tslib_1.__extends(ReauthenticationForm, _super);
    function ReauthenticationForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    ReauthenticationForm.prototype.prePopulateData = function () {
        var populateData = _super.prototype.prePopulateData.call(this);
        var apiData = this._screenSet.getApiData();
        var loginIDs = apiData && apiData.getAccountInfo && apiData.getAccountInfo.loginIDs;
        if (loginIDs)
            populateData.loginID = loginIDs.username || (loginIDs.emails && loginIDs.emails[0]);
        return populateData;
    };
    ReauthenticationForm.prototype.submitApi = function () {
        return window.gigya.accounts.login;
    };
    ReauthenticationForm.prototype.getNeededData = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                getSchema: {
                    params: {},
                },
                getAccountInfo: {
                    params: {
                        include: 'identities-active,loginIDs',
                    },
                    cache: false,
                },
            },
        ]);
    };
    ReauthenticationForm.prototype.getLoginProviders = function () {
        return LoginModes_1.LoginModes.reAuth.getLoginProviders(this._screenSet.data.apiData, this._screenSet.params, this._screenSet.data.regToken);
    };
    ReauthenticationForm.prototype.defaultSubmitParams = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            {
                loginMode: LoginModes_1.LoginModes.reAuth.name,
                loginID: 'no-one',
            },
        ]);
    };
    ReauthenticationForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                password: true,
                captchaText: true,
                captchaToken: true,
                loginID: true,
            },
        ]);
    };
    ReauthenticationForm.CONSTS = exports.ReauthenticationForm_CONSTS;
    return ReauthenticationForm;
}(BaseForm_1.BaseForm));
exports.ReauthenticationForm = ReauthenticationForm;
BaseForm_1.BaseForm.addFormToLibrary(ReauthenticationForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm.ts":
/*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
exports.RegisterForm_CONSTS = {
    gigyaClass: 'gigya-register-form',
};
utils_1.DeepFreeze(exports.RegisterForm_CONSTS);
var RegisterForm = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterForm, _super);
    function RegisterForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    RegisterForm.prototype.requiredFields = function () {
        var requiredFields = _super.prototype.requiredFields.call(this);
        requiredFields = window.gigya.utils.object.merge([requiredFields, this.specialFields()]);
        requiredFields['username'] = requiredFields['email'] = true;
        return requiredFields;
    };
    RegisterForm.prototype.prePopulateDataFrom = function () {
        return ['getAccountInfo', 'getAccountInfo.profile', 'getAccountInfo.loginIDs'];
    };
    RegisterForm.prototype.getNeededData = function () {
        var _this = this;
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                initRegistration: {
                    cache: false,
                    params: {},
                    responseHandler: function (res) {
                        window.gigya.logger.info("clearing account info from screenset cache");
                        var apiData = _this._screenSet.getApiData();
                        delete apiData.getAccountInfo;
                        return res; // pass result on to the screenSet
                    },
                },
                getSchema: {
                    params: {},
                },
            },
        ]);
    };
    RegisterForm.prototype.schemaValidated = function () {
        return true;
    };
    RegisterForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                username: true,
                email: true,
                password: true,
                passwordRetype: true,
                secretQuestion: true,
                secretAnswer: true,
                captchaText: true,
                captchaToken: true,
                regSource: true,
                siteUID: true,
            },
        ]);
    };
    RegisterForm.prototype.performSubmit = function (oParams) {
        if (!this._screenSet.doesScreenHaveForms(this.successScreen)) {
            oParams.finalizeRegistration = true;
        }
        else {
            this._screenSet.data.finalizeRegistrationNeeded = true;
        }
        return _super.prototype.performSubmit.call(this, oParams);
    };
    RegisterForm.prototype.submitApi = function () {
        return window.gigya.accounts.register;
    };
    RegisterForm.prototype.queryStringToSubmitParamMap = function () {
        return {
            gig_email: 'email',
        };
    };
    RegisterForm.prototype.defaultSubmitParams = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.defaultSubmitParams.call(this),
            {
                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,emails,loginIDs,subscriptions,preferences', this._screenSet.params.include)
            },
        ]);
    };
    RegisterForm.CONSTS = exports.RegisterForm_CONSTS;
    return RegisterForm;
}(BaseForm_1.BaseForm));
exports.RegisterForm = RegisterForm;
BaseForm_1.BaseForm.addFormToLibrary(RegisterForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResendVerificationCodeForm.ts":
/*!*****************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResendVerificationCodeForm.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
exports.ResendVerificationCodeForm_CONSTS = {
    gigyaClass: 'gigya-resend-verification-code-form',
};
utils_1.DeepFreeze(exports.ResendVerificationCodeForm_CONSTS);
var ResendVerificationCodeForm = /** @class */ (function (_super) {
    tslib_1.__extends(ResendVerificationCodeForm, _super);
    function ResendVerificationCodeForm(screen, elForm, gigyaClass) {
        return _super.call(this, screen, elForm, gigyaClass) || this;
    }
    ResendVerificationCodeForm.prototype.getNeededData = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.getNeededData.call(this),
            {
                getAccountInfo: {
                    params: {
                        include: 'emails',
                    },
                },
            },
        ]);
    };
    ResendVerificationCodeForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                email: true,
            },
        ]);
    };
    ResendVerificationCodeForm.prototype.submitApi = function () {
        return window.gigya.accounts.resendVerificationCode;
    };
    ResendVerificationCodeForm.CONSTS = exports.ResendVerificationCodeForm_CONSTS;
    return ResendVerificationCodeForm;
}(BaseForm_1.BaseForm));
exports.ResendVerificationCodeForm = ResendVerificationCodeForm;
BaseForm_1.BaseForm.addFormToLibrary(ResendVerificationCodeForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResetPasswordForm.ts":
/*!********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResetPasswordForm.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.ResetPasswordForm_CONSTS = {
    gigyaClass: 'gigya-reset-password-form',
};
utils_1.DeepFreeze(exports.ResetPasswordForm_CONSTS);
var ResetPasswordForm = /** @class */ (function (_super) {
    tslib_1.__extends(ResetPasswordForm, _super);
    function ResetPasswordForm(screen, elForm, gigyaClass) {
        var _this = _super.call(this, screen, elForm, gigyaClass) || this;
        _this.filters.push({
            filterOutWidgetsToSend: function (formData) {
                if (formData['securityFields'] && formData['securityFields']['passwordRetype'])
                    delete formData['securityFields']['passwordRetype'];
                return formData;
            },
        });
        return _this;
    }
    ResetPasswordForm.prototype.specialFields = function () {
        return window.gigya.utils.object.merge([
            _super.prototype.specialFields.call(this),
            {
                loginID: true,
                newPassword: true,
                email: true,
                secretAnswer: true,
            },
        ]);
    };
    ResetPasswordForm.prototype.getErrorKey = function (response) {
        if (response.errorCode === GSErrors_1.GSErrors.INVALID_TOKEN) {
            return 'invalid_password_reset_token';
        }
        return _super.prototype.getErrorKey.call(this, response);
    };
    ResetPasswordForm.prototype.schemaValidated = function () {
        // Necessary to show error message for password complexity.
        // PasswordInputs.ts will not generate password complexity error callback if schemaValidated returns false.
        return !!this.getField('newPassword');
    };
    ResetPasswordForm.prototype.profileObjectName = function () {
        return 'securityFields';
    };
    ResetPasswordForm.prototype.submitApi = function () {
        return window.gigya.accounts.resetPassword;
    };
    ResetPasswordForm.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this._screenSet.data.finalizeRegistrationNeeded = false;
    };
    ResetPasswordForm.prototype.prePopulateData = function () {
        var populateData = _super.prototype.prePopulateData.call(this);
        var apiData = this._screenSet.getApiData();
        // if login already exists
        var loginIDs = apiData && apiData.getAccountInfo && apiData.getAccountInfo.loginIDs;
        if (loginIDs) {
            populateData.loginID = loginIDs.username || (loginIDs.emails && loginIDs.emails[0]);
        }
        // for link accounts
        var conflictingAccount = apiData && apiData.getConflictingAccount && apiData.getConflictingAccount.conflictingAccount;
        if (conflictingAccount) {
            populateData.loginID = conflictingAccount.loginID || (conflictingAccount.emails && conflictingAccount.emails[0]);
        }
        return populateData;
    };
    ResetPasswordForm.prototype.defaultSubmitParams = function () {
        var params = _super.prototype.defaultSubmitParams.call(this);
        // Check for password field in form. Return default submit params if password field is not present in form.
        // In the future, we may divide into separate forms.
        if (!this.getField('newPassword')) {
            return params;
        }
        // Password field is in form, so we care about the password reset token.
        var passwordResetToken = this._screenSet.params && this._screenSet.params.passwordResetToken
            ? this._screenSet.params.passwordResetToken
            : window.gigya.utils.URL.getParamValueFromURL('pwrt', window.location.toString(), undefined);
        if (passwordResetToken) {
            params.passwordResetToken = passwordResetToken;
        }
        return params;
    };
    ResetPasswordForm.CONSTS = exports.ResetPasswordForm_CONSTS;
    return ResetPasswordForm;
}(BaseForm_1.BaseForm));
exports.ResetPasswordForm = ResetPasswordForm;
BaseForm_1.BaseForm.addFormToLibrary(ResetPasswordForm);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts":
/*!*******************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var ApiLinkWidget_1 = __webpack_require__(/*! ../../Widgets/ApiLinkWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ApiLinkWidget.ts");
var BaseApiHandler = /** @class */ (function () {
    function BaseApiHandler(dataStore, _serverApi) {
        this.dataStore = dataStore;
        this._serverApi = _serverApi;
    }
    BaseApiHandler.prototype.send = function () {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            var reqParams = __webpack_provided_Object_dot_assign(_this.dataStore.params || {}, _this.getRequestParams());
            reqParams['callback'] = function (response) {
                _this.handleResponse(response);
                resolve(response);
            };
            try {
                _this._serverApi.run(reqParams);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Object.defineProperty(BaseApiHandler.prototype, "methodName", {
        get: function () {
            return this._serverApi.methodName;
        },
        enumerable: true,
        configurable: true
    });
    BaseApiHandler.getHandler = function (methodName, handlerDataStore, serverApis) {
        var handler = this._handlers[methodName] || this._defaultHandler;
        if (handler) {
            var serverApi = serverApis.filter(function (api) { return api.methodName === methodName; })[0];
            if (!serverApi) {
                window.gigya.logger.warn("[" + ApiLinkWidget_1.ApiLink_CONSTS.attributeName + "]: unable to create api link for: \"" + methodName + "\", the method is not supported");
                return null;
            }
            return new handler(handlerDataStore, serverApi);
        }
        return null;
    };
    BaseApiHandler.addHandler = function (methodName, handler) {
        if (this._handlers[methodName]) {
            throw new Error("Can't re-register api link handler, " + methodName + " handler already exist");
        }
        this._handlers[methodName] = handler;
    };
    BaseApiHandler.addDefaultHandler = function (handler) {
        if (this._defaultHandler) {
            window.gigya.logger.error("Can't register default API handler, one is already registered");
            return;
        }
        this._defaultHandler = handler;
    };
    BaseApiHandler._handlers = {};
    return BaseApiHandler;
}());
exports.BaseApiHandler = BaseApiHandler;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendOtpCodeHandler.ts":
/*!***********************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendOtpCodeHandler.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseApiHandler_1 = __webpack_require__(/*! ./BaseApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts");
var SendOtpCodeHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SendOtpCodeHandler, _super);
    function SendOtpCodeHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendOtpCodeHandler.prototype.getRequestParams = function () {
        this.dataStore.apiData.getAccountInfo = this.dataStore.apiData.getAccountInfo || {};
        return {
            phoneNumber: this.dataStore.apiData.getAccountInfo.phoneNumber,
            email: this.dataStore.apiData.getAccountInfo.email
        };
    };
    SendOtpCodeHandler.prototype.handleResponse = function (response) {
        this.dataStore.otpData.vToken = response['vToken'];
    };
    return SendOtpCodeHandler;
}(BaseApiHandler_1.BaseApiHandler));
exports.SendOtpCodeHandler = SendOtpCodeHandler;
BaseApiHandler_1.BaseApiHandler.addHandler('accounts.otp.sendCode', SendOtpCodeHandler);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendVerificationHandler.ts":
/*!****************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendVerificationHandler.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseApiHandler_1 = __webpack_require__(/*! ./BaseApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts");
var SendVerificationHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SendVerificationHandler, _super);
    function SendVerificationHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendVerificationHandler.prototype.getRequestParams = function () {
        var accountInfo = this.dataStore.apiData.getAccountInfo || {};
        return { identifier: accountInfo.identifier };
    };
    SendVerificationHandler.prototype.handleResponse = function (response) {
        if (response.errorCode == 0 && response.vToken) {
            this.dataStore.pushData.vToken = response.vToken;
        }
        else {
            window.gigya.logger.error('gigya.accounts.auth.push.sendVerification failed');
        }
    };
    return SendVerificationHandler;
}(BaseApiHandler_1.BaseApiHandler));
exports.SendVerificationHandler = SendVerificationHandler;
BaseApiHandler_1.BaseApiHandler.addHandler('accounts.auth.push.sendVerification', SendVerificationHandler);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/StandardHandler.ts":
/*!********************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/StandardHandler.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseApiHandler_1 = __webpack_require__(/*! ./BaseApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts");
var StandardApiHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StandardApiHandler, _super);
    function StandardApiHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardApiHandler.prototype.getRequestParams = function () {
        return {};
    };
    StandardApiHandler.prototype.handleResponse = function (response) { };
    return StandardApiHandler;
}(BaseApiHandler_1.BaseApiHandler));
exports.StandardApiHandler = StandardApiHandler;
BaseApiHandler_1.BaseApiHandler.addDefaultHandler(StandardApiHandler);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./BaseApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/BaseApiHandler.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./StandardHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/StandardHandler.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./SendOtpCodeHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendOtpCodeHandler.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./SendVerificationHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/SendVerificationHandler.ts"), exports);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts":
/*!***************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var CaptchaProvider;
(function (CaptchaProvider) {
    CaptchaProvider["GOOGLE"] = "Google";
    CaptchaProvider["FUNCAPTCHA"] = "FunCaptcha";
})(CaptchaProvider = exports.CaptchaProvider || (exports.CaptchaProvider = {}));
exports.CaptchaHandlers = {};
var CaptchaMode;
(function (CaptchaMode) {
    CaptchaMode[CaptchaMode["Visible"] = 0] = "Visible";
    CaptchaMode[CaptchaMode["Invisible"] = 1] = "Invisible";
})(CaptchaMode = exports.CaptchaMode || (exports.CaptchaMode = {}));
var nextCaptchaID = 0;
var BaseCaptchaHandler = /** @class */ (function () {
    function BaseCaptchaHandler(params) {
        if (params === void 0) { params = {}; }
        this.params = params;
        this._ID = "gig_captcha_" + ++nextCaptchaID;
    }
    BaseCaptchaHandler.prototype.init = function (hostElement) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.siteKey) {
                            window.gigya.logger.warn('Missing captcha configuration');
                            return [2 /*return*/, false];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadProvider()];
                    case 2:
                        _a.sent();
                        this.render(hostElement);
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        window.gigya.logger.warn(e_1.message || e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BaseCaptchaHandler.prototype.getID = function () {
        return this._ID;
    };
    BaseCaptchaHandler.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.captchaToken;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lazyExecuteOrFail()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2: return [2 /*return*/, _a];
                }
            });
        });
    };
    BaseCaptchaHandler.prototype.reset = function () {
        this.captchaToken = null;
    };
    Object.defineProperty(BaseCaptchaHandler.prototype, "siteKey", {
        get: function () {
            return this.isInvisible ? this.invisibleSiteKey : this.visibleSiteKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCaptchaHandler.prototype, "isInvisible", {
        get: function () {
            return this.params.mode === CaptchaMode.Invisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCaptchaHandler.prototype, "callbackID", {
        get: function () {
            return "gig_" + this.provider + "_onLoad";
        },
        enumerable: true,
        configurable: true
    });
    return BaseCaptchaHandler;
}());
exports.BaseCaptchaHandler = BaseCaptchaHandler;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/FunCaptchaHandler.ts":
/*!**************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/FunCaptchaHandler.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseCaptchaHandler_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts");
var funCaptchaLoad;
var FunCaptchaHandler = /** @class */ (function (_super) {
    tslib_1.__extends(FunCaptchaHandler, _super);
    function FunCaptchaHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunCaptchaHandler.prototype.render = function (hostElement) {
        var _this = this;
        this.challengeExecutor = new gigya.Promise(function (resolve) {
            var callback = function () {
                var tokenInput = hostElement.querySelector('[name="fc-token"]');
                _this.captchaToken = tokenInput && tokenInput.value;
                resolve(_this.captchaToken);
            };
            var id = _this.getID() + "_" + Date.now();
            hostElement.innerHTML = "<div id=\"" + id + "\"></div>";
            _this.challengeRef = new FunCaptcha({
                public_key: _this.siteKey,
                language: _this.params.lang,
                target_html: id,
                callback: callback,
            });
        });
    };
    FunCaptchaHandler.prototype.reset = function () {
        if (typeof FunCaptcha != 'undefined' && this.challengeRef && this.captchaToken) {
            this.challengeRef.refresh_session();
        }
        _super.prototype.reset.call(this);
    };
    FunCaptchaHandler.prototype.loadProvider = function () {
        var _this = this;
        if (typeof FunCaptcha !== 'undefined')
            return;
        else if (!funCaptchaLoad) {
            funCaptchaLoad = new gigya.Promise(function (resolve, reject) {
                window[_this.callbackID] = function () {
                    delete window[_this.callbackID];
                    typeof FunCaptcha !== 'undefined' ? resolve() : reject("error while trying to load FunCaptcha");
                };
                window.gigya.utils.script.load(_this.providerURL, reject);
            });
        }
        return funCaptchaLoad;
    };
    FunCaptchaHandler.prototype.lazyExecuteOrFail = function () {
        // FunCaptcha don't have lazy execution as - for example - google's invisible captcha
        throw new Error('captchaNeeded');
    };
    Object.defineProperty(FunCaptchaHandler.prototype, "provider", {
        get: function () {
            return BaseCaptchaHandler_1.CaptchaProvider.FUNCAPTCHA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunCaptchaHandler.prototype, "providerURL", {
        get: function () {
            return "//funcaptcha.com/fc/api/?onload=" + this.callbackID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunCaptchaHandler.prototype, "invisibleSiteKey", {
        get: function () {
            return window.gigya.partnerSettings.funCaptcha && window.gigya.partnerSettings.funCaptcha.siteKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunCaptchaHandler.prototype, "visibleSiteKey", {
        get: function () {
            return window.gigya.partnerSettings.funCaptcha && window.gigya.partnerSettings.funCaptcha.siteKey;
        },
        enumerable: true,
        configurable: true
    });
    return FunCaptchaHandler;
}(BaseCaptchaHandler_1.BaseCaptchaHandler));
exports.FunCaptchaHandler = FunCaptchaHandler;
BaseCaptchaHandler_1.CaptchaHandlers[BaseCaptchaHandler_1.CaptchaProvider.FUNCAPTCHA] = FunCaptchaHandler;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/GoogleCaptchaHandler.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/GoogleCaptchaHandler.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseCaptchaHandler_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts");
var screenSetUtils = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var uniqueGoogleLocaleCodes = {
    br: 'bg',
    he: 'iw',
    'es-mx': 'es-419',
    tl: 'fil',
};
var GoogleCaptchaHandler = /** @class */ (function (_super) {
    tslib_1.__extends(GoogleCaptchaHandler, _super);
    function GoogleCaptchaHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleCaptchaHandler.prototype.render = function (hostElement) {
        var _this = this;
        if (!this.isInvisible && screenSetUtils.inIFrame()) {
            window.gigya.logger.warn('reCAPTCHA v2 cannot be loaded inside iFrame');
            return;
        }
        var callback = function (token) {
            _this.captchaToken = token;
            _this._challengeResolver(token);
        };
        var recaptchaParams = {
            sitekey: this.siteKey,
            callback: callback,
            type: this.params['type'],
            theme: this.params['theme'],
            size: this.params['size'],
        };
        if (this.isInvisible) {
            recaptchaParams.badge = this.params['badge'];
            recaptchaParams.size = 'invisible';
        }
        var id = this.getID() + "_" + Date.now();
        hostElement.innerHTML = "<div id=\"" + id + "\"></div>";
        this._createChallengeExecutor();
        this.challengeRef = grecaptcha.render(id, recaptchaParams);
    };
    GoogleCaptchaHandler.prototype.reset = function () {
        if (typeof grecaptcha !== 'undefined' && typeof this.challengeRef !== 'undefined') {
            grecaptcha.reset(this.challengeRef);
            this._createChallengeExecutor();
        }
        _super.prototype.reset.call(this);
    };
    GoogleCaptchaHandler.prototype.loadProvider = function () {
        var _this = this;
        if (typeof grecaptcha !== 'undefined')
            return;
        else if (!exports.greCaptchaLoad) {
            var timeoutId_1;
            exports.greCaptchaLoad = new gigya.Promise(function (resolve, reject) {
                var reloadFromRecaptchaDomain = function () {
                    clearTimeout(timeoutId_1);
                    window.gigya.logger.debug("Loading google captcha from " + GoogleCaptchaHandler.RECAPTCHA_DOMAIN);
                    if (typeof grecaptcha !== 'undefined') {
                        window.gigya.logger.debug('Aborting. Google captcha already loaded');
                        return resolve();
                    }
                    if (_this.params['googleCaptchaDomain'] === GoogleCaptchaHandler.RECAPTCHA_DOMAIN) {
                        window.gigya.logger.debug("Aborting. Already tried to load from " + GoogleCaptchaHandler.RECAPTCHA_DOMAIN + " and failed'");
                        return reject("Failed to load google's captcha from " + GoogleCaptchaHandler.RECAPTCHA_DOMAIN);
                    }
                    _this.params['googleCaptchaDomain'] = GoogleCaptchaHandler.RECAPTCHA_DOMAIN;
                    window.gigya.utils.script.load(_this.providerURL, reject);
                };
                timeoutId_1 = setTimeout(reloadFromRecaptchaDomain, GoogleCaptchaHandler.RETRY_FROM_RECAPTCHA_TIMEOUT);
                window[_this.callbackID] = function () {
                    delete window[_this.callbackID];
                    typeof grecaptcha !== 'undefined' ? resolve() : reject("Error while trying to load grecaptcha");
                };
                window.gigya.logger.debug("Loading grecaptcha from " + _this._domain);
                window.gigya.utils.script.load(_this.providerURL, reloadFromRecaptchaDomain);
            });
        }
        return exports.greCaptchaLoad;
    };
    GoogleCaptchaHandler.prototype.lazyExecuteOrFail = function () {
        if (this.isInvisible) {
            grecaptcha.execute(this.challengeRef);
            return this.challengeExecutor;
        }
        throw new Error('captchaNeeded');
    };
    Object.defineProperty(GoogleCaptchaHandler.prototype, "provider", {
        get: function () {
            return BaseCaptchaHandler_1.CaptchaProvider.GOOGLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleCaptchaHandler.prototype, "providerURL", {
        get: function () {
            return "//" + this._domain + "/recaptcha/api.js?render=explicit&onload=" + this.callbackID + "&hl=" + this._lang;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleCaptchaHandler.prototype, "invisibleSiteKey", {
        get: function () {
            return window.gigya.partnerSettings.invisibleRecaptcha && window.gigya.partnerSettings.invisibleRecaptcha.siteKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleCaptchaHandler.prototype, "visibleSiteKey", {
        get: function () {
            return window.gigya.partnerSettings.recaptchaV2 && window.gigya.partnerSettings.recaptchaV2.siteKey;
        },
        enumerable: true,
        configurable: true
    });
    GoogleCaptchaHandler.prototype._createChallengeExecutor = function () {
        var _this = this;
        this.challengeExecutor = new gigya.Promise(function (resolve) {
            _this._challengeResolver = resolve;
        });
    };
    Object.defineProperty(GoogleCaptchaHandler.prototype, "_domain", {
        get: function () {
            var isCNDataCenter = window.gigya.dataCenter.toLowerCase().indexOf('cn1') === 0 || window.gigya.utils.stringUtils.endsWith(window.gigya.dataCenter, 'gigay-api.cn');
            return this.params['googleCaptchaDomain'] || (isCNDataCenter ? GoogleCaptchaHandler.RECAPTCHA_DOMAIN : GoogleCaptchaHandler.GOOGLE_DOMAIN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleCaptchaHandler.prototype, "_lang", {
        get: function () {
            return uniqueGoogleLocaleCodes[this.params.lang] || this.params.lang;
        },
        enumerable: true,
        configurable: true
    });
    GoogleCaptchaHandler.RECAPTCHA_DOMAIN = 'www.recaptcha.net';
    GoogleCaptchaHandler.GOOGLE_DOMAIN = 'www.google.com';
    GoogleCaptchaHandler.RETRY_FROM_RECAPTCHA_TIMEOUT = 3 * 1000;
    return GoogleCaptchaHandler;
}(BaseCaptchaHandler_1.BaseCaptchaHandler));
exports.GoogleCaptchaHandler = GoogleCaptchaHandler;
BaseCaptchaHandler_1.CaptchaHandlers[BaseCaptchaHandler_1.CaptchaProvider.GOOGLE] = GoogleCaptchaHandler;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/index.ts":
/*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./ApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/index.ts"), exports);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/ButtonInput.ts":
/*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/ButtonInput.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var ButtonInput = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonInput, _super);
    function ButtonInput(context) {
        return _super.call(this, context, false) || this;
    }
    ButtonInput.FORM_TYPE_CRITERIA = function (context) {
        return context.type === 'submit' || context.type === 'reset' || context.type === 'button' || context.element.nodeName.toLowerCase() === 'button';
    };
    ButtonInput.prototype.setValue = function () {
        return; // our form should never set value to buttons
    };
    return ButtonInput;
}(FormInput_1.FormInput));
exports.ButtonInput = ButtonInput;
FormInput_1.FormInput.addInputToLibrary(ButtonInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput.ts":
/*!*****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.CheckboxInput_CONSTS = {
    errorClass: 'gigya-terms-error',
    validClass: 'gigya-terms-valid',
    dataValueInArray: 'data-value-in-array',
};
var CheckboxInput = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxInput, _super);
    function CheckboxInput(context) {
        return _super.call(this, context) || this;
    }
    CheckboxInput.FORM_TYPE_CRITERIA = function (context) {
        return context.type === 'checkbox';
    };
    CheckboxInput.prototype.required = function () {
        // See #44030.
        if (/^(.+\.)?terms$/.test(this.fieldName)) {
            return _super.prototype.required.call(this);
        }
        else {
            return this.isClientRequired();
        }
    };
    CheckboxInput.prototype.isClientRequired = function () {
        return this._schema && this._schema.format && this._schema.format.toLowerCase() == 'true';
    };
    CheckboxInput.prototype._isValueEmpty = function (value) {
        return !value; // override default handling of checkboxes
    };
    CheckboxInput.prototype.validateValue = function (formData, fieldValue, callback) {
        if (this.required() && !fieldValue) {
            return callback({
                errorCode: GSErrors_1.GSErrors.REQUIRED_VALUE_VALIDATION_ERROR,
                field: this,
            });
        }
        _super.prototype.validateValue.call(this, formData, fieldValue, callback);
    };
    CheckboxInput.prototype._showValidityOnInput = function () {
        this.setValitidyClass(this.instanceElement.parentElement, this._validityState, exports.CheckboxInput_CONSTS.validClass, exports.CheckboxInput_CONSTS.errorClass);
    };
    CheckboxInput.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.setValitidyClass(this.instanceElement.parentElement, this._validityState, exports.CheckboxInput_CONSTS.validClass, exports.CheckboxInput_CONSTS.errorClass);
    };
    CheckboxInput.prototype.prePopulate = function (value) {
        var el = this.instanceElement;
        var dataValueInArray = el.getAttribute(exports.CheckboxInput_CONSTS.dataValueInArray);
        if (!dataValueInArray)
            _super.prototype.prePopulate.call(this, value);
        else if (value instanceof Array) {
            var pos = value.indexOf(dataValueInArray);
            _super.prototype.prePopulate.call(this, pos >= 0);
        }
        else {
            //todo : warn about illegal value (undefiend, null..)
            _super.prototype.prePopulate.call(this, false);
        }
    };
    CheckboxInput.prototype.setValue = function (dataValue, setByScript) {
        if (setByScript === void 0) { setByScript = true; }
        // Set new value directly on the DOM.
        var el = this.instanceElement;
        el.checked = dataValue && dataValue !== 'false'; // Boolean can be saved as "true" or "false" (string).
        // Trigger change.
        this.onFieldChange(setByScript);
    };
    CheckboxInput.prototype.getValue = function (el, currentValue) {
        if (el === void 0) { el = this.instanceElement; }
        var value = el.checked;
        var arrayItemValue = el.getAttribute(exports.CheckboxInput_CONSTS.dataValueInArray);
        if (arrayItemValue) {
            if (!currentValue)
                currentValue = [];
            var pos = currentValue.indexOf(arrayItemValue);
            if (el.checked && pos < 0) {
                currentValue.push(arrayItemValue);
            }
            else if (!el.checked && pos >= 0) {
                currentValue.splice(pos, 1);
            }
            value = currentValue;
        }
        return value;
    };
    return CheckboxInput;
}(FormInput_1.FormInput));
exports.CheckboxInput = CheckboxInput;
FormInput_1.FormInput.addInputToLibrary(CheckboxInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/EmailInput.ts":
/*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/EmailInput.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var LoginForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var EmailInput = /** @class */ (function (_super) {
    tslib_1.__extends(EmailInput, _super);
    function EmailInput(context) {
        return _super.call(this, context) || this;
    }
    EmailInput.FORM_TYPE_CRITERIA = function (context) {
        return !(context.form instanceof LoginForm_1.LoginForm) && (context.fieldName === 'email' || context.type === 'email');
    };
    EmailInput.prototype.validateValue = function (formData, fieldValue, callback) {
        if (fieldValue && !window.gigya.pluginUtils.validation.isValidEmailLoginID(fieldValue))
            return callback({
                errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE,
                field: this,
            });
        return _super.prototype.validateValue.call(this, formData, fieldValue, callback);
    };
    return EmailInput;
}(FormInput_1.FormInput));
exports.EmailInput = EmailInput;
FormInput_1.FormInput.addInputToLibrary(EmailInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts":
/*!*************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var Consent_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent.ts");
var ArrayManagerWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget.ts");
var Errors_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var ValidityStates;
(function (ValidityStates) {
    ValidityStates[ValidityStates["_undefined"] = 0] = "_undefined";
    ValidityStates[ValidityStates["valid"] = 1] = "valid";
    ValidityStates[ValidityStates["error"] = 2] = "error";
    ValidityStates[ValidityStates["pending"] = 3] = "pending";
})(ValidityStates = exports.ValidityStates || (exports.ValidityStates = {}));
utils_1.DeepFreeze(ValidityStates);
exports.fieldsNameData = {
    loginID: { autoFillName: 'username', paramName: 'loginID' },
    passwordRetype: { autoFillName: '', paramName: '' },
};
utils_1.DeepFreeze(exports.fieldsNameData);
var fieldsDisplayNames = {
    loginID: 'username',
    secretQuestion: 'secret question',
    secretAnswer: 'secret answer',
};
utils_1.DeepFreeze(fieldsDisplayNames);
var WriteAccessModes;
(function (WriteAccessModes) {
    WriteAccessModes[WriteAccessModes["clientModify"] = 0] = "clientModify";
    WriteAccessModes[WriteAccessModes["clientCreate"] = 1] = "clientCreate";
})(WriteAccessModes = exports.WriteAccessModes || (exports.WriteAccessModes = {}));
exports.FormInput_CONSTS = {
    fieldName: 'data-gigya-name',
    displayName: 'data-display-name',
    captcha: 'gigya-captcha',
    allowEmpty: 'data-allow-empty',
    required: 'data-required',
    originalValue: 'data-original-value',
    serverValidation: 'data-invalid-error-code',
    showValidCheckmark: 'show-valid-checkmark',
    showCheckmarkClass: 'gigya-show-checkmark',
    errorClass: 'gigya-error',
    validClass: 'gigya-valid',
    pendingClass: 'gigya-pending',
    emptyClass: 'gigya-empty',
    placeholderAttribute: 'data-gigya-placeholder',
    arrayRootAttribute: 'data-array-root',
    arrayKeyFieldAttribute: 'data-array-key-field',
    arrayKeyValueAttribute: 'data-array-key-value',
};
utils_1.DeepFreeze(exports.FormInput_CONSTS);
var FormInputsLibrary = {};
var FormInputPriorities;
(function (FormInputPriorities) {
    FormInputPriorities[FormInputPriorities["_start"] = 0] = "_start";
    FormInputPriorities[FormInputPriorities["Important"] = 1] = "Important";
    FormInputPriorities[FormInputPriorities["Normal"] = 2] = "Normal";
    FormInputPriorities[FormInputPriorities["Fallback"] = 3] = "Fallback";
    FormInputPriorities[FormInputPriorities["_end"] = 4] = "_end";
})(FormInputPriorities = exports.FormInputPriorities || (exports.FormInputPriorities = {}));
var FormInput = /** @class */ (function (_super) {
    tslib_1.__extends(FormInput, _super);
    //#endregion
    function FormInput(context, isDataField, keypressValidationDelay) {
        if (isDataField === void 0) { isDataField = true; }
        if (keypressValidationDelay === void 0) { keypressValidationDelay = 1000; }
        var _this = _super.call(this, context.element, context.form) || this;
        _this.isDataField = isDataField;
        _this.dynamicField = false;
        _this.isCaptcha = false;
        _this._validityState = ValidityStates._undefined;
        _this._showValidityMarker = {};
        _this.isCurrnetValuePlaceholderText = true;
        _this.isCtrlKeyUp = false;
        _this.KEY_CODE_DELETE = 46;
        _this.KEY_CODE_BACKSPACE = 8;
        _this.KEYCODE_LETTER_X = 88;
        _this.previousValue = null;
        _this.intervalID = 0;
        _this.validityStateListeners = new Array();
        _this._form = context.form;
        _this.type = context.type;
        _this._screen = _this._form._screen;
        _this.update(context.element, context.fieldName, isDataField);
        if (_this.showValidCheckmark(_this.templateElement)) {
            _this._showValidityMarker[ValidityStates.valid] = _this._showValidityMarker[ValidityStates.pending] = true;
        }
        // Ensure the onFieldChanged event isn't fired for every keypress.
        _this.onFieldChangeDebounced = window.gigya.utils.functions.debounce(function () { return _this.onFieldChange(); }, _this._screenSet.params['debounceDelay'] || keypressValidationDelay);
        return _this;
    }
    //#region formInput library
    FormInput.addInputToLibrary = function (type, priority) {
        if (priority === void 0) { priority = FormInputPriorities.Normal; }
        var inputList = FormInputsLibrary[priority] || [];
        inputList.push(type);
        FormInputsLibrary[priority] = inputList;
    };
    FormInput.inputLibraryByPriority = function () {
        var lib = new Array();
        for (var priority = FormInputPriorities._start; priority <= FormInputPriorities._end; ++priority) {
            var priorityList = FormInputsLibrary[priority];
            if (priorityList)
                lib = lib.concat(priorityList);
        }
        return lib;
    };
    FormInput.registerFormInputs = function (elements, parent) {
        var inputs = new Array();
        var lib = FormInput.inputLibraryByPriority();
        var ignoredFields = parent.ignoredFields();
        utils_1.ForEach(elements, function (el) {
            var type;
            var fieldName = el.getAttribute(exports.FormInput_CONSTS.fieldName) || el.getAttribute('name');
            // ignore fields that are on the form ignore list
            if (ignoredFields[fieldName]) {
                return;
            }
            // ignore fields that are part of a fieldset (in case of composition of inputs the fieldset will represent its inputs as a whole)
            if (window.gigya.utils.DOM.isBelongToGigyaFieldset(el)) {
                return;
            }
            var context = {
                form: parent,
                fieldName: fieldName,
                element: el,
                type: el.getAttribute('type'),
                params: parent._screenSet.params,
            };
            utils_1.Some(lib, function (t) {
                var match = t.FORM_TYPE_CRITERIA(context);
                if (match)
                    type = t;
                return match;
            });
            if (type)
                inputs.push(new type(context));
        });
        return inputs;
    };
    FormInput.FORM_TYPE_CRITERIA = function (context) {
        return true;
    };
    FormInput.prototype.onKeyUp = function (e) {
        // Ignore tab, ctrl, windows key, escape, caps lock, etc.
        if (e.keyCode !== 9 &&
            e.keyCode !== 13 &&
            e.keyCode !== 16 &&
            e.keyCode !== 17 &&
            e.keyCode !== 91 &&
            e.keyCode !== 92 &&
            e.keyCode !== 20 &&
            e.keyCode !== 27) {
            this.onFieldChangeDebounced();
        }
    };
    /**
     * Called when an element's value MAY have changed.
     */
    FormInput.prototype.onFieldChange = function (setByScript) {
        if (setByScript === void 0) { setByScript = false; }
        // May be called after a small delay, ensure the element still exists.
        // Specifically check to ensure the screen-set container still exists to handle the case where container is killed with the escape key.
        if (!this.instanceElement || !this._screenSet.container) {
            return;
        }
        // Avoid triggering twice when a user finishes typing (triggering keydown) and then leaves the field (triggering change).
        // Exempt radio type because each individual element is unique instance, so it can't track state. Regardless, it's not necessary.
        var value = this.getValue();
        if (this.previousValue === value && this.type !== 'radio') {
            return;
        }
        this.previousValue = value;
        // Triggered when field is changed:
        this.updateCssClasses();
        this._form.onInputChange(this, setByScript);
    };
    FormInput.prototype.updateCssClasses = function () {
        if (this.isEmpty()) {
            window.gigya.utils.DOM.addClassToElement(this.instanceElement, exports.FormInput_CONSTS.emptyClass);
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, exports.FormInput_CONSTS.emptyClass);
        }
    };
    FormInput.prototype.update = function (element, fieldName, isDataField) {
        var _this = this;
        if (element === void 0) { element = this.instanceElement; }
        if (fieldName === void 0) { fieldName = this.instanceElement.getAttribute('name'); }
        this.fieldName = fieldName;
        this.normalizedFieldName = this._form.getNormalizedFieldName(this.fieldName);
        if (this.normalizedFieldName) {
            // calculate field name parts
            var fieldNameParts = this.normalizedFieldName.split('.');
            if (fieldNameParts.length > 1) {
                this.fieldNamespace = fieldNameParts.shift();
            }
            // when binding to the consent's grant field, we need to treat the base name as the consent itself (schema validations mainly)
            if (this.fieldNamespace == Consent_1.namespace && fieldNameParts[fieldNameParts.length - 1] == Consent_1.consentFieldName) {
                fieldNameParts.pop();
            }
            this.fieldBaseName = fieldNameParts.join('.').replace(ArrayManagerWidget_1.ArrayManager_CONST.indexMatcher, '');
            // Keep name saved for future screenset instances
            if (this.fieldName !== element.getAttribute(exports.FormInput_CONSTS.fieldName)) {
                element.setAttribute(exports.FormInput_CONSTS.fieldName, this.fieldName);
            }
        }
        var fieldData = exports.fieldsNameData[this.fieldBaseName];
        this.paramName = fieldData ? fieldData.paramName : this.normalizedFieldName;
        if (fieldData && fieldData.autoFillName) {
            element.setAttribute('name', fieldData.autoFillName);
        }
        if (isDataField && this.normalizedFieldName) {
            this._form.addDataField(this);
            // save the original value
            element.setAttribute(exports.FormInput_CONSTS.originalValue, String(this.getValue(element)));
            this.keyUpHandler = function (e) { return _this.onKeyUp(e); };
            this.addEventListener('keyup', this.keyUpHandler);
            this.changeHandler = function () { return _this.onFieldChange(); };
            this.addEventListener('change', this.changeHandler);
        }
        this.updateDisplayName(element);
    };
    FormInput.prototype.updateDisplayName = function (element) {
        if (element === void 0) { element = this.templateElement; }
        this.displayName = element.getAttribute(exports.FormInput_CONSTS.displayName) || this.fieldBaseName;
    };
    FormInput.prototype.getArrayRoot = function (flatten) {
        if (flatten === void 0) { flatten = false; }
        var arrayRoot = this.instanceElement ? this.instanceElement.getAttribute(exports.FormInput_CONSTS.arrayRootAttribute) : '';
        if (arrayRoot && flatten) {
            arrayRoot = arrayRoot.replace(ArrayManagerWidget_1.ArrayManager_CONST.indexMatcher, '.$1');
        }
        return arrayRoot;
    };
    FormInput.prototype.getName = function (isNormalized, flatten) {
        if (flatten === void 0) { flatten = false; }
        var name = !isNormalized ? this.fieldName : this.normalizedFieldName;
        return flatten ? name.replace(ArrayManagerWidget_1.ArrayManager_CONST.indexMatcher, '.$1') : name;
    };
    FormInput.prototype.isEmpty = function (value) {
        if (value === void 0) { value = this.getValue(); }
        return this._isValueEmpty(value);
    };
    FormInput.prototype._isValueEmpty = function (value) {
        return !value || value === false;
    };
    FormInput.prototype.allowEmpty = function () {
        return Boolean(this.instanceElement && this.instanceElement.getAttribute(exports.FormInput_CONSTS.allowEmpty)); // hasAttribute is not supported in IE9
    };
    FormInput.prototype.getTruncatedValue = function (val) {
        return window.gigya.utils.stringUtils.trim(String(val));
    };
    FormInput.prototype.validate = function (callback, formData) {
        if (formData === void 0) { formData = this._form.getFlatFormData(false, true); }
        if (this.isInHiddenContainer()) {
            return callback({
                errorCode: GSErrors_1.GSErrors.OK,
                field: this,
            });
        }
        this.validateValue(formData, this.getValidateValue(formData), callback);
    };
    FormInput.prototype.getValidateValue = function (formData) {
        return this.getValue();
    };
    FormInput.prototype.clearServerError = function () {
        this.instanceElement.removeAttribute(exports.FormInput_CONSTS.serverValidation);
    };
    FormInput.prototype.getServerError = function () {
        var code = this.instanceElement.getAttribute(exports.FormInput_CONSTS.serverValidation);
        if (code)
            return parseInt(code);
        return GSErrors_1.GSErrors.OK;
    };
    FormInput.prototype.setServerError = function (errorCode) {
        var validityState = errorCode == GSErrors_1.GSErrors.OK ? ValidityStates.valid : ValidityStates.error;
        this.instanceElement.setAttribute(exports.FormInput_CONSTS.serverValidation, errorCode + '');
        this.setValidityState(validityState, true);
    };
    FormInput.prototype.validateValue = function (formData, fieldValue, callback) {
        var fieldIsEmpty = fieldValue == null || this.getTruncatedValue(fieldValue) === '';
        if (this.required() && fieldIsEmpty)
            return callback({
                errorCode: GSErrors_1.GSErrors.REQUIRED_VALUE_VALIDATION_ERROR,
                field: this,
            });
        // schema validation
        if (this._schema) {
            var schemaError = GSErrors_1.GSErrors.OK;
            utils_1.Some(this.schemaChecks, function (check) {
                schemaError = check(fieldValue);
                return schemaError != GSErrors_1.GSErrors.OK;
            });
            if (schemaError !== GSErrors_1.GSErrors.OK)
                return callback({
                    errorCode: schemaError,
                    field: this,
                });
        }
        // Server validation
        if (this.instanceElement) {
            var serverCode = this.instanceElement.getAttribute(exports.FormInput_CONSTS.serverValidation); // hasAttribute is not supported in IE9
            if (serverCode) {
                // serverValidation already returned
                var serverValidationErrorCode = this.getServerError();
                if (serverValidationErrorCode != GSErrors_1.GSErrors.OK)
                    return callback({
                        errorCode: serverValidationErrorCode,
                        field: this,
                    });
            }
            else {
                // initiate server validation
                if (this.serverValidated())
                    return this.startServerValidation(fieldValue, callback);
            }
        }
        return callback({
            errorCode: GSErrors_1.GSErrors.OK,
            field: this,
        });
    };
    FormInput.prototype.serverValidated = function () {
        return false;
    };
    FormInput.prototype.startServerValidation = function (fieldValue, callback) {
        Errors_1.notImplementerAbstract();
    };
    FormInput.prototype.required = function () {
        // Schema requires this field.
        if (this._schemaRequired) {
            return true;
        }
        // Form requires this field.
        if (!this.allowEmpty() && this._form.requiredFields()[this.fieldName]) {
            return true;
        }
        // Field is required on this screen.
        if (this.instanceElement.getAttribute(exports.FormInput_CONSTS.required)) {
            return true;
        }
        return false;
    };
    //#endregion
    //#region show error
    FormInput.prototype.showValidCheckmark = function (element) {
        if (element === void 0) { element = this.instanceElement; }
        return (Boolean(element.getAttribute(exports.FormInput_CONSTS.showValidCheckmark)) && // ie9 has no hasAttribute
            !window.gigya.utils.validation.isExplicitFalse(element.getAttribute(exports.FormInput_CONSTS.showValidCheckmark)));
    };
    FormInput.prototype.addValidityStateListener = function (listener) {
        if (listener)
            this.validityStateListeners.push(listener);
    };
    FormInput.prototype.removeValidityStateListener = function (listener) {
        if (listener)
            this.validityStateListeners.splice(window.gigya.utils.array.indexOf(this.validityStateListeners, listener), 1);
    };
    FormInput.prototype.triggerValidityStateChange = function (validityState, fromServer) {
        var _this = this;
        utils_1.ForEach(this.validityStateListeners, function (listener) { return listener(validityState, fromServer, _this); });
    };
    FormInput.prototype.getValidityState = function () {
        return this._validityState;
    };
    FormInput.prototype.setValidityState = function (validityState, fromServer) {
        if (fromServer === void 0) { fromServer = false; }
        if (validityState !== this._validityState) {
            this._validityState = validityState;
            this._showValidityOnInput();
            this.triggerValidityStateChange(this._validityState, fromServer);
        }
    };
    FormInput.prototype._showValidityOnInput = function (element, validityState, allowValidityMarker) {
        if (element === void 0) { element = this.instanceElement; }
        if (validityState === void 0) { validityState = this._validityState; }
        if (allowValidityMarker === void 0) { allowValidityMarker = true; }
        this.setValitidyClass(element, validityState);
        if (this._showValidityMarker[validityState] && allowValidityMarker)
            window.gigya.utils.DOM.addClassToElement(element, exports.FormInput_CONSTS.showCheckmarkClass);
        else
            window.gigya.utils.DOM.removeClassFromElement(element, exports.FormInput_CONSTS.showCheckmarkClass);
    };
    FormInput.prototype.setValitidyClass = function (element, validityState, validClass, errorClass, pendingClass) {
        if (validClass === void 0) { validClass = exports.FormInput_CONSTS.validClass; }
        if (errorClass === void 0) { errorClass = exports.FormInput_CONSTS.errorClass; }
        if (pendingClass === void 0) { pendingClass = exports.FormInput_CONSTS.pendingClass; }
        if (!element)
            return;
        var currentClass;
        switch (validityState) {
            case ValidityStates.valid:
                currentClass = validClass;
                break;
            case ValidityStates.error:
                currentClass = errorClass;
                break;
            case ValidityStates.pending:
                currentClass = pendingClass;
                break;
        }
        this.setElementValidationClass(element, currentClass, validClass, errorClass, pendingClass);
        if (this.placeHolderElement) {
            this.setElementValidationClass(this.placeHolderElement, currentClass, validClass, errorClass, pendingClass);
        }
    };
    FormInput.prototype.setElementValidationClass = function (element, validationClass, validClass, errorClass, pendingClass) {
        if (validClass === void 0) { validClass = exports.FormInput_CONSTS.validClass; }
        if (errorClass === void 0) { errorClass = exports.FormInput_CONSTS.errorClass; }
        if (pendingClass === void 0) { pendingClass = exports.FormInput_CONSTS.pendingClass; }
        window.gigya.utils.DOM.removeClassFromElement(element, validClass);
        window.gigya.utils.DOM.removeClassFromElement(element, errorClass);
        window.gigya.utils.DOM.removeClassFromElement(element, pendingClass);
        if (validationClass) {
            window.gigya.utils.DOM.addClassToElement(element, validationClass);
        }
        if (validationClass === errorClass) {
            // Validation failed.
            element.setAttribute('aria-invalid', 'true');
        }
        else {
            // No errors detected.
            element.setAttribute('aria-invalid', 'false');
        }
    };
    //#endregion
    FormInput.prototype.unlinkTemplate = function () {
        if (this.changeHandler) {
            this.removeEventListener('change', this.changeHandler);
        }
        if (this.keyUpHandler) {
            this.removeEventListener('keydown', this.keyUpHandler);
        }
        _super.prototype.unlinkTemplate.call(this);
    };
    FormInput.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this._schemaWriteAccessMode = WriteAccessModes.clientModify;
        this._schemaRequired = false;
        if (this.instanceElement) {
            if (this._form.schemaValidated()) {
                this._schema = this._form.getFieldSchema(this);
                if (this._schema) {
                    this.schemaChecks = new Array();
                    if (this._schema.type) {
                        var typeCheck = SchemaTypeChecks[this._schema.type];
                        if (typeCheck)
                            this.schemaChecks.push(typeCheck);
                    }
                    // currently we support only regex format checks - will change.
                    if (this._schema.format && this._schema.format.match(formatPattern))
                        this.schemaChecks.push(schemaFormatCheck(this._schema.format));
                    this._schemaRequired = this._schema.required || utils_1.Some(this.schemaChecks, function (check) { return check('') != GSErrors_1.GSErrors.OK; }); // schema define this field as required // schema checks do not pass if there is no value
                    this._schemaWriteAccessMode = WriteAccessModes[this._schema.writeAccess] || WriteAccessModes.clientModify;
                }
            }
            this.setPlaceholderValue();
            this.setAriaRequired();
            // Set input's default value as previous value.
            // prePopulate will override this if a value exists.
            this.previousValue = this.getValue();
        }
    };
    /**
     * Used for browsers that do not support native placeholders.
     */
    FormInput.prototype.createPlaceholderElement = function (elName, elType) {
        if (elName === 'input' && elType !== 'checkbox' && elType !== 'radio') {
            this.placeHolderElement = window.gigya.utils.DOM.createElement('input', '');
        }
        else if (elName === 'textarea') {
            this.placeHolderElement = window.gigya.utils.DOM.createElement('textarea', '');
        }
        if (window.gigya.localInfo.isIE8) {
            this.placeHolderElement.style.width = this.instanceElement['currentStyle'].width;
        }
        else {
            this.placeHolderElement.style.width = window.getComputedStyle(this.instanceElement).width;
        }
        if (elName === 'input' || elName === 'textarea') {
            this.placeHolderElement['screenSetInstanceOf'] = [this];
            this.placeHolderElement.setAttribute('value', this.placeholderAttributeValue);
            this.placeHolderElement.setAttribute('style', window.gigya._.plugins.utils.DOM.getAttribute(this.instanceElement, 'style'));
            this.placeHolderElement.setAttribute('class', window.gigya._.plugins.utils.DOM.getAttribute(this.instanceElement, 'class') + ' gigya-placeholder');
            this.instanceElement.parentNode.insertBefore(this.placeHolderElement, this.instanceElement);
            // the following line is for vertically aligning the text inside the element
            window.gigya.pluginUtils.DOM.hideElement(this.instanceElement);
        }
        // Attach events.
        if (elName === 'textarea' || (elName === 'input' && elType !== 'checkbox' && elType !== 'radio')) {
            this.placeHolderElement['attachEvent']('onkeydown', this.onPlaceholderKeyDown);
            //this.placeHolderElement.attachEvent('onselectstart', this.onTextSelectionStart);
            this.addEventListener('keydown', this.onKeyDownForPlaceholder);
            this.addEventListener('blur', this.onBlurForPlaceholder);
            this.placeHolderElement['attachEvent']('oncontextmenu', this.onContextMenuOpened);
            this.placeHolderElement['attachEvent']('onfocus', this.onPlaceholderFocused);
            //this.addEventListener('select', this.onTextSelected);
            this.addEventListener('keyup', this.onKeyUpForPlaceholder);
            this.togglePlaceholderStateView(true);
        }
        // WCAG: Hide placeholder input from screen readers.
        this.placeHolderElement.setAttribute('aria-hidden', 'true');
    };
    FormInput.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement) {
            this._schemaRequired = false;
            this.schemaChecks = this._schema = null;
            this.setValue('');
            this.setValidityState(ValidityStates._undefined);
        }
        _super.prototype.unlinkInstanceElement.call(this);
    };
    FormInput.prototype.getValue = function (el, currentValue) {
        if (el === void 0) { el = this.instanceElement; }
        if (el.value === undefined)
            return '';
        return this.type === 'password' ? el.value : window.gigya.utils.stringUtils.trim(el.value);
    };
    FormInput.prototype.prePopulate = function (value) {
        this.previousValue = value;
        // Hidden fields are not pre-populated because it may overwrite a static value.
        if (this.type !== 'hidden') {
            this.setValue(value);
        }
        if (this._schemaWriteAccessMode === WriteAccessModes.clientCreate && !this.isEmpty(value)) {
            this.instanceElement.setAttribute('disabled', 'disabled');
        }
    };
    FormInput.prototype.disabled = function () {
        return Boolean(this.instanceElement && this.instanceElement.getAttribute('disabled'));
    };
    FormInput.prototype.setValue = function (dataValue, setByScript) {
        if (setByScript === void 0) { setByScript = true; }
        // Set new value directly on the DOM.
        var el = this.instanceElement;
        if (el.value !== dataValue) {
            el.value = String(dataValue);
        }
        // Trigger change.
        this.onFieldChange(setByScript);
    };
    FormInput.prototype.isHidden = function () {
        return utils_1.isHidden(this.instanceElement);
    };
    FormInput.prototype.isInHiddenContainer = function () {
        return utils_1.isFieldInHiddenContainer(this.instanceElement);
    };
    FormInput.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.updateDisplayName(this.instanceElement || this.templateElement);
        if (this.showValidCheckmark(this.templateElement)) {
            this._showValidityMarker[ValidityStates.valid] = this._showValidityMarker[ValidityStates.pending] = true;
            this._showValidityOnInput();
        }
    };
    FormInput.prototype.executeConditionalResult = function (evaluationResult, conditionalAtt, element) {
        // Grab the last attribute value before it's set to the new value.
        var lastAttributeValue = conditionalAtt.lastAttributeValue;
        // Set new attributes in the DOM.
        evaluationResult = _super.prototype.executeConditionalResult.call(this, evaluationResult, conditionalAtt, element);
        // Only interested in changes.
        if (evaluationResult === lastAttributeValue) {
            return lastAttributeValue;
        }
        if (conditionalAtt.attributeName === exports.FormInput_CONSTS.required) {
            // The field may have been marked as required in the UI and triggered an error.
            // Triggering the field change event will clear the error if it was caused by the required status.
            if (this.getValidityState() === ValidityStates.error) {
                this.onFieldChange();
            }
            // The placeholder value needs the asterisk appended to it.
            this.setPlaceholderValue();
            // WCAG compliance.
            this.setAriaRequired();
        }
        else if (conditionalAtt.attributeName === exports.FormInput_CONSTS.placeholderAttribute) {
            // Placeholder value updated via conditional attribute.
            this.setPlaceholderValue();
        }
        return evaluationResult;
    };
    FormInput.prototype.setAriaRequired = function () {
        // #69533
        if (this.type === 'submit' || this.type === 'button') {
            return;
        }
        this.instanceElement.setAttribute('aria-required', this.required() ? 'true' : 'false');
    };
    FormInput.prototype.setPlaceholderValue = function () {
        var placeholderText = this.instanceElement.getAttribute(exports.FormInput_CONSTS.placeholderAttribute);
        if (placeholderText) {
            this.placeholderAttributeValue = placeholderText ? "" + placeholderText + (this.required() ? ' *' : '') : '';
        }
        if (this.placeholderAttributeValue) {
            var elementName = this.instanceElement.tagName.toLowerCase();
            var elementType = this.instanceElement.getAttribute('type');
            if (window.gigya.localInfo.isIE8 || window.gigya.localInfo.isIE9) {
                if (!this.placeHolderElement) {
                    this.createPlaceholderElement(elementName, elementType);
                }
                else {
                    window.gigya._.plugins.utils.DOM.setAttribute(this.placeHolderElement, 'value', this.placeholderAttributeValue);
                }
            }
            else {
                if ((elementName === 'input' && elementType !== 'checkbox' && elementType !== 'radio') || elementName === 'textarea') {
                    this.instanceElement.setAttribute('placeholder', this.placeholderAttributeValue);
                }
            }
        }
    };
    FormInput.prototype.onKeyUpForPlaceholder = function (e) {
        var input = e.srcElement['screenSetInstanceOf'][0];
        if (input.isCtrlKeyUp) {
            var keycode = e.keyCode;
            if (keycode === this.KEYCODE_LETTER_X) {
                // x character, backspace or delete
                input.togglePlaceholderStateView(true);
            }
        }
    };
    FormInput.prototype.onBlurForPlaceholder = function (event) {
        var el = event.srcElement;
        var currentValue = el['value'];
        var input = event.srcElement['screenSetInstanceOf'][0];
        if (!currentValue) {
            input.togglePlaceholderStateView(true);
        }
    };
    // this handler is for suppressing the text selection on the placeholder
    //public onTextSelectionStart(e)
    //{
    //    var input = e.srcElement['screenSetInstanceOf'][0] as FormInput;
    //    if (input.isCurrnetValuePlaceholderText) {
    //        event.returnValue = false;
    //    }
    //}
    FormInput.prototype.onContextMenuOpened = function (e) {
        event.returnValue = false;
    };
    FormInput.prototype.onPlaceholderFocused = function (e) {
        var element = e.srcElement;
        var input = element['screenSetInstanceOf'][0];
        input.togglePlaceholderStateView(false, e);
        event.cancelBubble = true;
        if (input._screenSet._placeholderIntervalID === -1) {
            input.togglePlaceholderStateView(false, e);
            input._screenSet._placeholderIntervalID = setInterval(function () {
                if (input._screenSet._placeholderIntervalID === -1) {
                    input.togglePlaceholderStateView(false, e);
                }
                else {
                    clearInterval(input._screenSet._placeholderIntervalID);
                }
            }, 100);
        }
    };
    //this handler is for cases where the user selects the text inside the element (in order to delete part of it)
    //public onTextSelected() {
    //    var el = event.srcElement as HTMLElement;
    //    var input = event.srcElement['screenSetInstanceOf'][0] as FormInput;
    //    input.isTextSelected = true;
    //}
    FormInput.prototype.onPlaceholderKeyDown = function (e) {
        var keycode = e.keyCode;
        var isEnteredValueDisplayable = utils_1.isKeyCodeDisplayable(keycode);
        var element = e.srcElement;
        var input = element['screenSetInstanceOf'][0];
        if (isEnteredValueDisplayable) {
            // hide the placeholder element and show the actual element
            input.togglePlaceholderStateView(false);
        }
        else if (keycode === input.KEY_CODE_BACKSPACE || keycode === input.KEY_CODE_DELETE) {
            event.returnValue = false;
        }
    };
    FormInput.prototype.onKeyDownForPlaceholder = function (e) {
        var keycode = e.keyCode;
        var isEnteredValueDisplayable = utils_1.isKeyCodeDisplayable(keycode);
        var input = e.srcElement['screenSetInstanceOf'][0];
        var lastValue = input.instanceElement.getAttribute('value');
        if (!isEnteredValueDisplayable && input.isCurrnetValuePlaceholderText && keycode == input.KEY_CODE_BACKSPACE) {
            event.returnValue = false;
        }
        else if (lastValue && lastValue.length == 1 && keycode == input.KEY_CODE_BACKSPACE) {
            // @ts-ignore
            e.srcElement.setAttribute('value', '');
            event.returnValue = false;
        }
        else if (input.isTextSelected && (keycode == input.KEY_CODE_DELETE || keycode == input.KEY_CODE_BACKSPACE)) {
            input.isTextSelected = false;
            input.togglePlaceholderStateView(true, event);
        }
        else if (e.ctrlKey) {
            input.isCtrlKeyUp = true;
        }
        else if (isEnteredValueDisplayable && input.isCurrnetValuePlaceholderText) {
            input.togglePlaceholderStateView(false);
        }
        else if (input.isCurrnetValuePlaceholderText && keycode == input.KEY_CODE_DELETE) {
            event.returnValue = false;
        }
    };
    FormInput.prototype.togglePlaceholderStateView = function (showPlaceholder, e) {
        var _this = this;
        if (e === void 0) { e = null; }
        // e: MSEventObj
        if (showPlaceholder) {
            if (e) {
                //this is to handle the select event where the text is erased and the placeholder value isn't set
                e.returnValue = false;
            }
            window.gigya.pluginUtils.DOM.showElement(this.placeHolderElement);
            window.gigya.pluginUtils.DOM.hideElement(this.instanceElement);
            window.gigya._.plugins.utils.DOM.setAttribute(this.instanceElement, 'value', '');
            if (!this.placeHolderElement) {
                setTimeout(function () {
                    _this.placeHolderElement.focus();
                }, 1000);
            }
        }
        else {
            window.gigya.pluginUtils.DOM.hideElement(this.placeHolderElement);
            window.gigya.pluginUtils.DOM.showElement(this.instanceElement);
            window.gigya._.plugins.utils.DOM.setAttribute(this.placeHolderElement, 'value', this.placeholderAttributeValue);
            this.instanceElement.focus();
        }
        this.isCurrnetValuePlaceholderText = showPlaceholder;
        this.isCtrlKeyUp = false;
        this.isTextSelected = false;
    };
    FormInput.prototype.getLoggerName = function () {
        return this.fieldName || _super.prototype.getLoggerName.call(this);
    };
    return FormInput;
}(TemplateElement_1.TemplateElement));
exports.FormInput = FormInput;
function integerCheck(fieldValue) {
    if (fieldValue && isNaN(parseInt(fieldValue)))
        return GSErrors_1.GSErrors.VALIDATION_ERROR;
    return GSErrors_1.GSErrors.OK;
}
function floatCheck(fieldValue) {
    if (fieldValue && isNaN(parseFloat(fieldValue)))
        return GSErrors_1.GSErrors.VALIDATION_ERROR;
    return GSErrors_1.GSErrors.OK;
}
function booleanCheck(fieldValue) {
    if (fieldValue == null)
        return GSErrors_1.GSErrors.VALIDATION_ERROR;
    return GSErrors_1.GSErrors.OK;
}
function dateCheck(fieldValue) {
    if (fieldValue) {
        var dateResult = window.gigya.global.date.getISODate(fieldValue); // Format is always ISO
        if (!dateResult)
            return GSErrors_1.GSErrors.VALIDATION_ERROR;
    }
    return GSErrors_1.GSErrors.OK;
}
var SchemaTypeChecks = {
    integer: integerCheck,
    long: integerCheck,
    float: floatCheck,
    boolean: booleanCheck,
    date: dateCheck,
};
utils_1.DeepFreeze(SchemaTypeChecks);
var formatPattern = /(.*?)\([\'\"](.*?)[\'\"]\)$/;
function schemaFormatCheck(format) {
    var arFormat = format.match(formatPattern);
    if (arFormat) {
        var formatType = arFormat[1];
        var formatValue = arFormat[2];
        if (formatType && formatValue) {
            if (formatType === 'regex') {
                try {
                    var regexFormat_1 = new RegExp(formatValue);
                    regexFormat_1.test(''); // Run regex to make sure that regex will crush if necesary during schema load
                    return function (fieldValue) {
                        if (fieldValue && !regexFormat_1.test(fieldValue))
                            return GSErrors_1.GSErrors.VALIDATION_ERROR;
                        return GSErrors_1.GSErrors.OK;
                    };
                }
                catch (e) {
                    throw new Error('Unsupported regEx pattern: ' + e);
                }
            }
        }
    }
    throw new Error('Unsupported format: ' + format);
}
FormInput.addInputToLibrary(FormInput, FormInputPriorities.Fallback);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/LoginIdInput.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/LoginIdInput.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var RegisterForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LoginIdInput = /** @class */ (function (_super) {
    tslib_1.__extends(LoginIdInput, _super);
    function LoginIdInput(context) {
        var _this = _super.call(this, context) || this;
        _this.isServerValidationEnabled = true;
        _this._serverValidateAvaliability = _this.showValidCheckmark(context.element);
        _this.loginIdMustBeEmail = context.fieldName === 'email';
        return _this;
    }
    LoginIdInput.FORM_TYPE_CRITERIA = function (context) {
        return context.form instanceof RegisterForm_1.RegisterForm && (context.fieldName === 'email' || context.fieldName === 'username');
    };
    LoginIdInput.prototype.showDataPending = function () {
        if (this.instanceElement) {
            this._form.showFieldError(this, GSErrors_1.GSErrors.Data_Pending, true);
        }
    };
    LoginIdInput.prototype.onKeyUp = function (e) {
        if (this.getValue() !== this.previousValue) {
            // Force all events to be fired because we've touched the field error status.
            this.previousValue = undefined;
            this.lastCheck = undefined;
            this.showDataPending();
        }
        _super.prototype.onKeyUp.call(this, e);
    };
    LoginIdInput.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        var email = this.getEmailFromQueryParams();
        if (email) {
            this.prePopulate(email);
            this.instanceElement.setAttribute('disabled', 'disabled');
        }
    };
    LoginIdInput.prototype.serverValidated = function () {
        return this._serverValidateAvaliability;
    };
    LoginIdInput.prototype.startServerValidation = function (fieldValue, callback) {
        var _this = this;
        if (!this.instanceElement) {
            return;
        }
        if (fieldValue === this.lastCheck) {
            // Nothing has changed since last check, no need to query the server again
            return;
        }
        this.showDataPending();
        this.lastCheck = fieldValue;
        this.clearServerError();
        this.instanceElement.removeAttribute(FormInput_1.FormInput_CONSTS.serverValidation);
        this.setValidityState(FormInput_1.ValidityStates.pending);
        if (this.isServerValidationEnabled === false) {
            // We've already tried to use the server-side validation and discovered that it's disabled.
            // Save API calls and don't try again.
            callback({
                errorCode: GSErrors_1.GSErrors.OK,
                field: this,
            });
        }
        else {
            window.gigya.accounts.isAvailableLoginID({
                loginID: fieldValue,
                callback: function (res) { return _this.serverQueryDone(res, fieldValue, callback); },
            });
        }
    };
    LoginIdInput.prototype.serverQueryDone = function (res, checkedValue, callback) {
        // response is no longer relevant due to screen going out of view
        if (!this.instanceElement) {
            return;
        }
        // response is no longer relevant due to value change
        if (this.getValue() !== checkedValue) {
            return;
        }
        var errorCode = res.errorCode;
        switch (errorCode) {
            case GSErrors_1.GSErrors.OK:
                if (!window.gigya.utils.validation.isExplicitTrue(res.isAvailable)) {
                    errorCode = GSErrors_1.GSErrors.UNIQUE_IDENTIFIER_EXISTS;
                }
                break;
            // Console Site Settings has "Protect against login identifier harvesting" option.
            // This causes error code 403026 to be returned for all isAvailableLoginID calls.
            // This shouldn't show any error to the client, so transform to an "OK" response.
            case GSErrors_1.GSErrors.UNAUTHORIZED_ACCESS_ERROR:
                this.isServerValidationEnabled = false;
                errorCode = GSErrors_1.GSErrors.OK;
                break;
        }
        this.setServerError(errorCode);
        this._form.onInputChange(this, false); // triggers revalidation
        callback({
            errorCode: errorCode,
            field: this,
        });
    };
    LoginIdInput.prototype.validateValue = function (formData, fieldValue, callback) {
        if (this.isServerValidationEnabled &&
            fieldValue !== this.lastCheck) {
            this.clearServerError();
        }
        if (fieldValue) {
            if (this.loginIdMustBeEmail &&
                (!this._schema || !this._schema.format) && // continue to hard coded email validation only if schema lacks format
                !window.gigya.pluginUtils.validation.isValidEmailLoginID(fieldValue)) {
                return callback({
                    errorCode: 400006 /* INVALID_PARAMETER_VALUE */,
                    field: this,
                });
            }
        }
        return _super.prototype.validateValue.call(this, formData, fieldValue, callback);
    };
    LoginIdInput.prototype.getEmailFromQueryParams = function () {
        return window.gigya.utils.URL.getParamValueFromURL('gig_email', window.location.search, undefined);
    };
    return LoginIdInput;
}(FormInput_1.FormInput));
exports.LoginIdInput = LoginIdInput;
FormInput_1.FormInput.addInputToLibrary(LoginIdInput, FormInput_1.FormInputPriorities.Important);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var PasswordStrengthWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var ScreenConsts_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.BasePasswordInput_CONSTS = {
    showPasswordStrength: 'show-password-strength',
};
utils_1.DeepFreeze(exports.BasePasswordInput_CONSTS);
var BasePasswordInput = /** @class */ (function (_super) {
    tslib_1.__extends(BasePasswordInput, _super);
    function BasePasswordInput(context) {
        var _this = _super.call(this, context) || this;
        _this.showPasswordStrengthConditionalExists = false;
        _this.showPasswordStrengthAttribute = '';
        utils_1.ForEach(_this.conditionalExpressions, function (el) {
            if (el.attributeName == exports.BasePasswordInput_CONSTS.showPasswordStrength) {
                _this.showPasswordStrengthConditionalExists = true;
                _this.showPasswordStrengthConditional = el;
            }
        });
        _this.showPasswordStrengthAttribute = window.gigya._.plugins.utils.DOM.getAttribute(_this.templateElement, exports.BasePasswordInput_CONSTS.showPasswordStrength);
        if (_this.showPasswordStrengthAttribute != null && _this.showPasswordStrengthAttribute.length) {
            _this.passwordStrengthOrientation = PasswordStrengthWidget_1.BubbleOrientations[_this.showPasswordStrengthAttribute];
            if (typeof _this.passwordStrengthOrientation === 'undefined')
                _this.passwordStrengthOrientation = _this._screenSet.isModal ? PasswordStrengthWidget_1.BubbleOrientations.left : PasswordStrengthWidget_1.BubbleOrientations.up;
            _this.showPasswordStrength =
                (typeof _this.passwordStrengthOrientation !== 'undefined' && _this.passwordStrengthOrientation != PasswordStrengthWidget_1.BubbleOrientations.none) ||
                    _this.showPasswordStrengthConditionalExists;
        }
        else {
            _this.showPasswordStrength = false;
        }
        return _this;
    }
    BasePasswordInput.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.showPasswordStrength) {
            var bubbleHtml = '';
            if (this.showPasswordStrengthAttribute &&
                typeof this.passwordStrengthOrientation !== 'undefined' &&
                this.passwordStrengthOrientation !== PasswordStrengthWidget_1.BubbleOrientations.none) {
                bubbleHtml = window.gigya.utils.templates.fill(this._screenSet.getTemplates().inlinedPasswordStrength, {
                    orientation: PasswordStrengthWidget_1.BubbleOrientations[this.passwordStrengthOrientation],
                });
            }
            else {
                bubbleHtml = window.gigya.utils.templates.fill(this._screenSet.getTemplates().inlinedPasswordStrength, {
                    orientation: PasswordStrengthWidget_1.BubbleOrientations[PasswordStrengthWidget_1.BubbleOrientations.none],
                });
            }
            this.instanceElement.insertAdjacentHTML('afterend', bubbleHtml);
            var bubbleElement = (this.instanceElement.nextElementSibling
                ? this.instanceElement.nextElementSibling
                : this.instanceElement.nextSibling); // IE8 compatability
            this.passwordStrengthWidget = new PasswordStrengthWidget_1.PasswordStrengthWidget(this._form, bubbleElement);
            if (this.showPasswordStrengthConditionalExists) {
                this.passwordStrengthWidget.templateElement.setAttribute(ScreenConsts_1.Screen_CONSTS.conditionalAttributePrefix + 'data-bubble-orientation', this.showPasswordStrengthConditional.condition);
                var conditional = {
                    attributeName: 'data-bubble-orientation',
                    condition: this.showPasswordStrengthConditional.condition,
                    defaultValue: this.showPasswordStrengthConditional.defaultValue,
                    lastAttributeValue: this.showPasswordStrengthConditional.defaultValue,
                    isWidgetParamTag: false,
                };
                this.passwordStrengthWidget.conditionalExpressions.push(conditional);
            }
            this.passwordStrengthWidget._passwordField = this; // bind to this password field
            TemplateElement_1.TemplateElement.prepareTemplateInstanceElement(bubbleElement, false);
            this.passwordStrengthWidget.linkInstanceElement(bubbleElement.parentElement);
        }
    };
    BasePasswordInput.prototype.unlinkInstanceElement = function () {
        if (this.showPasswordStrength) {
            this.passwordStrengthWidget.unlinkInstanceElement();
            this.passwordStrengthWidget.unlinkTemplate();
            this.passwordStrengthWidget = null;
        }
        _super.prototype.unlinkInstanceElement.call(this);
    };
    BasePasswordInput.prototype.getTruncatedValue = function (val) {
        return String(val);
    };
    BasePasswordInput.prototype.validateValue = function (formData, fieldValue, callback) {
        var _this = this;
        _super.prototype.validateValue.call(this, formData, fieldValue, function (validationInfo) {
            if (validationInfo.errorCode !== GSErrors_1.GSErrors.OK)
                return callback(validationInfo);
            if (_this.isPasswordSchemaValidated()) {
                var apiData = _this._screenSet.getApiData();
                if (apiData.getPolicies && apiData.getPolicies.passwordComplexity) {
                    var oComplexity = apiData.getPolicies.passwordComplexity || {};
                    var oPassStrength = PasswordStrengthWidget_1.getPasswordStrengthData(fieldValue);
                    if (!PasswordStrengthWidget_1.isPasswordStrengthValid(fieldValue, oPassStrength, oComplexity))
                        return callback({
                            errorCode: GSErrors_1.GSErrors.VALIDATION_ERROR,
                            field: _this,
                        });
                }
            }
            callback(validationInfo);
        });
    };
    BasePasswordInput.prototype.isPasswordSchemaValidated = function () {
        return this._form.isPasswordSchemaValidated();
    };
    BasePasswordInput.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        if (this.passwordStrengthWidget) {
            this.passwordStrengthWidget.evaluateConditionalAttributes();
        }
    };
    BasePasswordInput.prototype.isPasswordStrengthWidgetBound = function () {
        return this.showPasswordStrength;
    };
    return BasePasswordInput;
}(FormInput_1.FormInput));
exports.BasePasswordInput = BasePasswordInput;
var PasswordInput = /** @class */ (function (_super) {
    tslib_1.__extends(PasswordInput, _super);
    function PasswordInput(context) {
        var _this = _super.call(this, context) || this;
        _this._form._passwordInputs.push(_this);
        return _this;
    }
    PasswordInput.FORM_TYPE_CRITERIA = function (context) {
        return context.fieldName === 'password';
    };
    PasswordInput.prototype.isPasswordSchemaValidated = function () {
        return _super.prototype.isPasswordSchemaValidated.call(this);
    };
    return PasswordInput;
}(BasePasswordInput));
exports.PasswordInput = PasswordInput;
FormInput_1.FormInput.addInputToLibrary(PasswordInput);
var NewPasswordInput = /** @class */ (function (_super) {
    tslib_1.__extends(NewPasswordInput, _super);
    function NewPasswordInput(context) {
        var _this = _super.call(this, context) || this;
        _this._form._passwordInputs.unshift(_this);
        return _this;
    }
    NewPasswordInput.FORM_TYPE_CRITERIA = function (context) {
        return context.fieldName === 'newPassword';
    };
    return NewPasswordInput;
}(BasePasswordInput));
exports.NewPasswordInput = NewPasswordInput;
FormInput_1.FormInput.addInputToLibrary(NewPasswordInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PhoneNumberInput.ts":
/*!********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PhoneNumberInput.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var FormInput_2 = __webpack_require__(/*! ./FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var regExMatchingForE164 = /^\+?[1-9]\d{1,14}$/;
exports.gigyaPhoneNumberInput = 'gigya-phone-number-input';
var PhoneNumberInput = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumberInput, _super);
    function PhoneNumberInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countryCodesDataStructure = {};
        _this.onCountryCodeSelected = function (setByScript) {
            _this.countryCodeSelectHadChanged = true;
            var selectedValue = _this.countryCodeSelect.value;
            if (selectedValue === '0') // the default value - it represents no value
                return;
            _this.countryCodeSelect.options[0].value = selectedValue;
            _this.countryCodeSelect.options[0].text = selectedValue;
            _this.countryCodeSelect.selectedIndex = 0;
            // Trigger change.
            _this.onFieldChange(setByScript);
        };
        _this.onSubscriberNumberChanged = function () {
            _this.subscriberNumberHadChanged = true;
        };
        return _this;
    }
    PhoneNumberInput.FORM_TYPE_CRITERIA = function (context) {
        return context.element instanceof HTMLFieldSetElement
            && context.type === exports.gigyaPhoneNumberInput;
    };
    PhoneNumberInput.prototype.generateCountryCodesDataStructure = function () {
        var _this = this;
        // get all option with value attr except the one with value "0"
        var countryCodeOptions = this.countryCodeSelect.querySelectorAll('option[value]:not([value="0"])');
        countryCodeOptions.forEach(function (countryCodeOption) {
            var ds = _this.countryCodesDataStructure;
            for (var _i = 0, _a = countryCodeOption.value; _i < _a.length; _i++) {
                var digit = _a[_i];
                if (!ds[digit]) {
                    ds[digit] = {};
                }
                ds = ds[digit];
            }
        });
    };
    PhoneNumberInput.prototype.getCountryCode = function (phoneNumber) {
        var res = ""; // initialize as an empty string
        var ds = this.countryCodesDataStructure;
        for (var _i = 0, phoneNumber_1 = phoneNumber; _i < phoneNumber_1.length; _i++) {
            var digit = phoneNumber_1[_i];
            if (!ds[digit]) {
                break;
            }
            res = "" + res + digit;
            ds = ds[digit];
        }
        return res;
    };
    PhoneNumberInput.prototype.getSubscriberNumber = function (phoneNumber, countryCode) {
        countryCode = countryCode.replace('\+', '\\+');
        var regExp = new RegExp("^" + countryCode);
        return phoneNumber.replace(regExp, '');
    };
    PhoneNumberInput.prototype.setupChangeEventHandler = function () {
        this.countryCodeSelect.addEventListener('change', this.onCountryCodeSelected);
        this.subscriberNumber.addEventListener('input', this.onSubscriberNumberChanged);
    };
    PhoneNumberInput.prototype.removeChangeEventHandler = function () {
        this.countryCodeSelect.removeEventListener('change', this.onCountryCodeSelected);
        this.subscriberNumber.removeEventListener('input', this.onSubscriberNumberChanged);
    };
    PhoneNumberInput.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.countryCodeSelect = this.instanceElement.querySelector('select');
        this.subscriberNumber = this.instanceElement.querySelector('input');
        if (!this.countryCodeSelect || !this.subscriberNumber) {
            window.gigya.logger.warn("Phone Number Input: missing country select or mobile phone text box");
            return;
        }
        this.generateCountryCodesDataStructure();
        this.setupChangeEventHandler();
    };
    PhoneNumberInput.prototype._showValidityOnInput = function (element) {
        if (element === void 0) { element = this.instanceElement; }
        if (!this.shouldValidate())
            return;
        var countryCodeValidityState = this.getCountryCodeValidityState();
        _super.prototype._showValidityOnInput.call(this, this.countryCodeSelect, countryCodeValidityState, false);
        if (countryCodeValidityState === FormInput_2.ValidityStates.error) {
            this.countryCodeSelect.blur();
        }
        var subscriberNumberValidityState = this.getSubscriberNumberValidityState();
        var allowValidityMarker = (countryCodeValidityState === FormInput_2.ValidityStates.valid && subscriberNumberValidityState === FormInput_2.ValidityStates.valid);
        _super.prototype._showValidityOnInput.call(this, this.subscriberNumber, subscriberNumberValidityState, allowValidityMarker);
    };
    PhoneNumberInput.prototype.unlinkInstanceElement = function () {
        _super.prototype.unlinkInstanceElement.call(this);
        this.removeChangeEventHandler();
    };
    PhoneNumberInput.prototype.setValidityState = function (validityState, fromServer) {
        if (fromServer === void 0) { fromServer = false; }
        if (this.countryCodeSelect.value !== this.countryCodeSelectPreviousValue
            || this.subscriberNumber.value !== this.subscriberNumberPreviousValue) {
            this.countryCodeSelectPreviousValue = this.countryCodeSelect.value;
            this.subscriberNumberPreviousValue = this.subscriberNumber.value;
            this._validityState = FormInput_2.ValidityStates._undefined;
        }
        _super.prototype.setValidityState.call(this, validityState, fromServer);
    };
    PhoneNumberInput.prototype.validateValue = function (formData, fieldValue, callback) {
        var _this = this;
        if (!this.shouldValidate())
            return callback({ errorCode: GSErrors_1.GSErrors.OK, field: this });
        if (!this.countryCodeSelect.value || this.countryCodeSelect.value === '0' || !this.subscriberNumber.value)
            fieldValue = '';
        return _super.prototype.validateValue.call(this, formData, fieldValue, function (validationInfo) {
            if (validationInfo.errorCode !== GSErrors_1.GSErrors.OK)
                return callback(validationInfo); // basic validation failed
            var errorCode = regExMatchingForE164.test(fieldValue) ?
                GSErrors_1.GSErrors.OK : // valid phone number in e.164 format
                GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE;
            return callback({
                errorCode: errorCode, field: _this,
            });
        });
    };
    PhoneNumberInput.prototype.getValue = function (el, currentValue) {
        if (el === void 0) { el = this.instanceElement; }
        if (!this.countryCodeSelect || !this.subscriberNumber)
            return '';
        var countryCode = this.countryCodeSelect.value === '0' ? "" : this.countryCodeSelect.value;
        var subscriberNumber = this.subscriberNumber.value.replace(/\s/gm, ''); // removes any whitespace character
        if (countryCode !== '+39') { // Italy (phone must start with 0)
            subscriberNumber = subscriberNumber.replace(/^0+/, '');
        }
        return "" + countryCode + subscriberNumber;
    };
    PhoneNumberInput.prototype.setValue = function (phoneNumber, setByScript) {
        if (setByScript === void 0) { setByScript = true; }
        if (!this.countryCodeSelect || !this.subscriberNumber) {
            return;
        }
        if (this.getValue() !== phoneNumber) {
            var countryCode = this.getCountryCode(phoneNumber);
            var subscriberNumber = this.getSubscriberNumber(phoneNumber, countryCode);
            this.countryCodeSelect.value = countryCode;
            this.subscriberNumber.value = subscriberNumber;
            this.onCountryCodeSelected(setByScript);
        }
    };
    PhoneNumberInput.prototype.getCountryCodeValidityState = function () {
        return (!this.countryCodeSelect.value || this.countryCodeSelect.value === '0')
            ? FormInput_2.ValidityStates.error
            : FormInput_2.ValidityStates.valid;
    };
    PhoneNumberInput.prototype.getSubscriberNumberValidityState = function () {
        return (!this.subscriberNumber.value ||
            (this.getCountryCodeValidityState() === FormInput_2.ValidityStates.valid &&
                !regExMatchingForE164.test(this.getValue())))
            ? FormInput_2.ValidityStates.error
            : FormInput_2.ValidityStates.valid;
    };
    PhoneNumberInput.prototype.shouldValidate = function () {
        return this._form.submitButtonClicked ||
            (this.countryCodeSelectHadChanged && this.subscriberNumberHadChanged);
    };
    return PhoneNumberInput;
}(FormInput_1.FormInput));
exports.PhoneNumberInput = PhoneNumberInput;
FormInput_1.FormInput.addInputToLibrary(PhoneNumberInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RadioInput.ts":
/*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RadioInput.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var RadioInput = /** @class */ (function (_super) {
    tslib_1.__extends(RadioInput, _super);
    function RadioInput(context) {
        return _super.call(this, context) || this;
    }
    RadioInput.FORM_TYPE_CRITERIA = function (context) {
        return context.type === 'radio';
    };
    RadioInput.prototype.getValidateValue = function (formData) {
        return formData[this.getName(false, true)];
    };
    RadioInput.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this._schema = undefined; // disable schema checks for radio buttons
        this.groupRadioButtonArrayFields();
    };
    RadioInput.prototype.setValue = function (dataValue, setByScript) {
        if (setByScript === void 0) { setByScript = true; }
        // Set new value directly on the DOM.
        var el = this.instanceElement;
        el.checked = dataValue.toString() === el.value;
        // Trigger change.
        this.onFieldChange(setByScript);
    };
    RadioInput.prototype.getValue = function (el) {
        if (el === void 0) { el = this.instanceElement; }
        var value = _super.prototype.getValue.call(this, el);
        return el.checked ? value : null;
    };
    RadioInput.prototype.groupRadioButtonArrayFields = function () {
        if (this.instanceElement) {
            // #44366 - Group radio buttons by schema field name and array key field.
            var name = this.instanceElement.getAttribute('name');
            var arrayKeyValue = this.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute);
            if (name && arrayKeyValue) {
                this.instanceElement.setAttribute('name', name + "[" + arrayKeyValue + "]");
            }
        }
    };
    return RadioInput;
}(FormInput_1.FormInput));
exports.RadioInput = RadioInput;
FormInput_1.FormInput.addInputToLibrary(RadioInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RememeberInput.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RememeberInput.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var CheckboxInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var RememeberInput = /** @class */ (function (_super) {
    tslib_1.__extends(RememeberInput, _super);
    function RememeberInput(context) {
        var _this = _super.call(this, context) || this;
        _this._form._rememberMe = _this;
        return _this;
    }
    RememeberInput.FORM_TYPE_CRITERIA = function (context) {
        return context.fieldName === 'remember';
    };
    return RememeberInput;
}(CheckboxInput_1.CheckboxInput));
exports.RememeberInput = RememeberInput;
FormInput_1.FormInput.addInputToLibrary(RememeberInput, FormInput_1.FormInputPriorities.Important);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RetypePasswordInput.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RetypePasswordInput.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var RetypePasswordInput = /** @class */ (function (_super) {
    tslib_1.__extends(RetypePasswordInput, _super);
    function RetypePasswordInput(context) {
        var _this = _super.call(this, context) || this;
        _this._form._passwordRetypes.push(_this);
        return _this;
    }
    RetypePasswordInput.FORM_TYPE_CRITERIA = function (context) {
        return context.fieldName === 'passwordRetype';
    };
    RetypePasswordInput.prototype.validateValue = function (formData, fieldValue, callback) {
        if (this._form._validatedPassword) {
            var passwordValue = this._form._validatedPassword.getValue();
            if (passwordValue !== '' && passwordValue !== fieldValue)
                return callback({
                    field: this,
                    errorCode: GSErrors_1.GSErrors.VALIDATION_ERROR,
                });
        }
        _super.prototype.validateValue.call(this, formData, fieldValue, callback);
    };
    return RetypePasswordInput;
}(FormInput_1.FormInput));
exports.RetypePasswordInput = RetypePasswordInput;
FormInput_1.FormInput.addInputToLibrary(RetypePasswordInput);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts":
/*!*******************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var ConflictHandling;
(function (ConflictHandling) {
    ConflictHandling[ConflictHandling["fail"] = 0] = "fail";
    ConflictHandling[ConflictHandling["saveProfileAndFail"] = 1] = "saveProfileAndFail";
})(ConflictHandling = exports.ConflictHandling || (exports.ConflictHandling = {}));
exports.LoginModes = {
    standard: {
        name: 'standard',
        getLoginProviders: function (apiData, params, regToken) {
            var enabledProviders = params['enabledProviders'];
            if (typeof enabledProviders !== 'string')
                return null;
            return enabledProviders.toLowerCase();
        },
        filterParams: function (params) {
            delete params.regToken;
            delete params.instanceID;
            delete params.getInstance;
            return params;
        },
    },
    reAuth: {
        name: 'reAuth',
        getLoginProviders: function (apiData, params, regToken) {
            var currentProviders = apiData.getAccountInfo && apiData.getAccountInfo.socialProviders;
            var identities = apiData.getAccountInfo && apiData.getAccountInfo.identities;
            if (!currentProviders)
                return null;
            currentProviders = currentProviders.toLowerCase();
            var providers = currentProviders.split(',');
            if (identities) {
                // remove identities that are allowLogin false
                utils_1.ForEach(identities, function (identity) {
                    if (!identity.allowsLogin) {
                        var idx = providers.indexOf(identity.provider.toLowerCase());
                        if (idx > -1)
                            providers.splice(idx, 1);
                    }
                });
            }
            return providers.join(',');
        },
        filterParams: function (params) {
            delete params.instanceID;
            delete params.getInstance;
            return params;
        },
    },
    link: {
        name: 'link',
        getLoginProviders: function (apiData, params, regToken) {
            if (!regToken)
                return null;
            return (apiData.getConflictingAccount &&
                apiData.getConflictingAccount.conflictingAccount &&
                apiData.getConflictingAccount.conflictingAccount.loginProviders &&
                apiData.getConflictingAccount.conflictingAccount.loginProviders.join(',').toLowerCase());
        },
        filterParams: function (params) {
            delete params.instanceID;
            delete params.getInstance;
            return params;
        },
    },
};
utils_1.DeepFreeze(exports.LoginModes);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen.ts":
/*!***************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var ScreenOptions_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var ErrorDisplayElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var ScreenConsts_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var Screen = /** @class */ (function (_super) {
    tslib_1.__extends(Screen, _super);
    function Screen(_screenSet, templateElement) {
        var _this = _super.call(this, templateElement, _screenSet) || this;
        _this._screenSet = _screenSet;
        _this.templateElement = templateElement;
        _this._errorDisplayElements = {};
        _this._profilePhotos = new Array();
        _this._captchas = new Array();
        _this._others = new Array();
        if (!_this.ID)
            _this.warn('screen is missing an id');
        if (/[^-_0-9a-zA-Z]/.test(_this.ID))
            _this.warn('screen id contains special characters that may contain special meaning');
        ScreenOptions_1.ScreenOptions.call(_this, templateElement, _screenSet.screenOptions);
        _this.prepareBoundedToFormElements();
        _this._forms = BaseForm_1.BaseForm.registerForms(_this);
        _this._widgets = BaseScreenWidget_1.BaseScreenWidget.registerWidgets(_this);
        // handling of normal DOM elements that use gigya logic
        _this.prepareOtherElements();
        _this.setCssClass();
        return _this;
    }
    Screen.prototype.prepareBoundedToFormElements = function () {
        var _this = this;
        var boundedElements = new Array();
        Screen.utils.ForEach(ErrorDisplayElement_1.ErrorDisplayElement_CONSTS.gigyaClasses, function (gigyaClass) {
            boundedElements = boundedElements.concat(Array.prototype.slice.call(_this.templateElement.querySelectorAll("." + gigyaClass)));
        });
        Screen.utils.ForEach(boundedElements, function (el) {
            var boundedElement = new ErrorDisplayElement_1.ErrorDisplayElement(el, _this);
            var boundedList = _this._errorDisplayElements[boundedElement.boundedTo];
            if (!boundedList)
                boundedList = _this._errorDisplayElements[boundedElement.boundedTo] = [];
            boundedList.push(boundedElement);
        });
    };
    Screen.prototype.addSpecificErrorBinds = function (boundedElements) {
        var _this = this;
        if (boundedElements === void 0) { boundedElements = []; }
        var boundedErrorElements = [];
        Screen.utils.ForEach(boundedElements, function (el) {
            var boundedElement = new ErrorDisplayElement_1.ErrorDisplayElement(el, _this);
            _this._errorDisplayElements[boundedElement.boundedTo] = (_this._errorDisplayElements[boundedElement.boundedTo] || []).concat([boundedElement]);
            boundedErrorElements.push(boundedElement);
        });
        boundedErrorElements.forEach(function (el) { return el.linkInstanceElement(_this.instanceElement); });
        return boundedErrorElements;
    };
    Screen.prototype.removeSpecificErrorBinds = function (boundedErrors) {
        var _this = this;
        if (boundedErrors === void 0) { boundedErrors = []; }
        Screen.utils.ForEach(boundedErrors, function (errorDisplay) {
            delete _this._errorDisplayElements[errorDisplay.boundedTo];
            errorDisplay.unlinkInstanceElement();
        });
    };
    Screen.prototype.addDynamicWidgets = function (rootEl) {
        var _this = this;
        var newWidgets = BaseScreenWidget_1.BaseScreenWidget.registerDynamicWidgets(this, rootEl);
        Screen.utils.ForEach(newWidgets, function (w) { return w.linkInstanceElement(_this.instanceElement); });
        this._widgets = this._widgets.concat(newWidgets);
        return newWidgets;
    };
    Screen.prototype.removeDynamicWidgets = function (widgetsToRemove) {
        if (!this._widgets || !this._widgets.length)
            return;
        this._widgets = this._widgets.filter(function (w) { return widgetsToRemove.indexOf(w) < 0; });
        widgetsToRemove.forEach(function (widget) {
            widget.unlinkInstanceElement();
            widget.unlinkTemplate();
        });
    };
    Screen.prototype.prepareOtherElements = function () {
        // These elements are evaluated because they have an ID.
        var otherElements = Screen.utils.getElementsByHavingAttribute(this.templateElement, '*', 'id');
        // These elements are evaluated because they have conditional attributes.
        var attributePrefixes = [ScreenConsts_1.Screen_CONSTS.conditionalAttributePrefix, ScreenConsts_1.Screen_CONSTS.expressionAttributePrefix];
        var conditionalElements = Screen.utils.getElementsByHavingAttributePrefix(this.templateElement, attributePrefixes, ['param']);
        // Combine and de-dup arrays.
        for (var _i = 0, conditionalElements_1 = conditionalElements; _i < conditionalElements_1.length; _i++) {
            var conditionalElement = conditionalElements_1[_i];
            if (window.gigya.utils.array.indexOf(otherElements, conditionalElement) === -1) {
                otherElements.push(conditionalElement);
            }
        }
        // Add TemplateElement to other elements.
        for (var _a = 0, otherElements_1 = otherElements; _a < otherElements_1.length; _a++) {
            var el = otherElements_1[_a];
            if (!TemplateElement_1.TemplateElement.isTemplateInstance(el)) {
                this._others.push(new TemplateElement_1.TemplateElement(el, this));
            }
        }
    };
    Screen.prototype.overrideTemplateCaption = function (caption) {
        // override caption attributes and remove the caption expression, NOTICE: this mean that it will no longer be evaluated
        this.instanceElement.removeAttribute(ScreenConsts_1.Screen_CONSTS.expressionAttributePrefix + ":" + ScreenOptions_1.ScreenOptions_CONSTS.caption);
        this.instanceElement.setAttribute(ScreenOptions_1.ScreenOptions_CONSTS.caption, caption);
        this.caption = caption;
    };
    Screen.prototype.haveForms = function () {
        return this._forms.length || this._hasTfa;
    };
    Screen.prototype.getFormByElement = function (element) {
        for (var _i = 0, _a = this._forms; _i < _a.length; _i++) {
            var form = _a[_i];
            if (form.instanceElement.contains(element)) {
                return form;
            }
        }
    };
    Screen.prototype.setCssClass = function () {
        this.cssClass = this.templateElement.getAttribute(ScreenConsts_1.Screen_CONSTS.cssClass);
    };
    Screen.prototype.unlinkTemplate = function () {
        var unlinkItem = function (i) { return i.unlinkTemplate(); };
        Screen.utils.ForEach(this._forms, unlinkItem);
        Screen.utils.ForEachProp(this._errorDisplayElements, function (boundedElements) {
            Screen.utils.ForEach(boundedElements, unlinkItem);
        });
        Screen.utils.ForEach(this._others, unlinkItem);
        Screen.utils.ForEach(this._widgets, unlinkItem);
        _super.prototype.unlinkTemplate.call(this);
    };
    Screen.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            var linkItem = function (i) { return i.linkInstanceElement(_this.instanceElement); };
            Screen.utils.ForEach(this._widgets, linkItem);
            Screen.utils.ForEach(this._others, linkItem);
            Screen.utils.ForEachProp(this._errorDisplayElements, function (boundedElements) {
                Screen.utils.ForEach(boundedElements, linkItem);
            });
            Screen.utils.ForEach(this._forms, linkItem);
        }
        if (window.gigya.localInfo.isIE9 || window.gigya.localInfo.isIE8) {
            Screen.utils.ForEach(this._forms, function (form) {
                form.filters.push({
                    filterOutWidgetsToSend: function (dataToFilter) {
                        if (dataToFilter.profile) {
                            delete dataToFilter.profile._profilePhoto;
                        }
                        return dataToFilter;
                    },
                });
            });
        }
    };
    Screen.prototype.placeContentInElement = function (instanceElement) {
        Screen.utils.ForEach(this.templateElement.attributes, function (a) { return instanceElement.setAttribute(a.name, a.value); });
        instanceElement.innerHTML = this.templateElement.innerHTML;
    };
    Screen.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement) {
            var unlinkItem = function (i) { return i.unlinkInstanceElement(); };
            Screen.utils.ForEach(this._forms, unlinkItem);
            Screen.utils.ForEachProp(this._errorDisplayElements, function (boundedElements) {
                Screen.utils.ForEach(boundedElements, unlinkItem);
            });
            Screen.utils.ForEach(this._others, unlinkItem);
            Screen.utils.ForEach(this._widgets, unlinkItem);
        }
        _super.prototype.unlinkInstanceElement.call(this);
    };
    Screen.prototype.getErrorMessage = function (errorCode, isBoundToField, field) {
        return this._screenSet.getErrorMessage(errorCode, isBoundToField, field.fieldName, field.displayName);
    };
    Screen.prototype.dispatchEvent = function (eventName, event) {
        return this._screenSet.dispatchScreenSetEvent(eventName, event);
    };
    // TODO: make async stack
    Screen.prototype.performAutoSkip = function (formContext) {
        var _this = this;
        return new gigya.Promise(function (resolve) {
            if (!_this._forms.length)
                resolve(null);
            var formsLeft = _this._forms.length;
            var screenCanSkip = true;
            var callback = function (formCanSkip) {
                if (!formCanSkip)
                    screenCanSkip = false;
                if (--formsLeft <= 0)
                    resolve(screenCanSkip ? _this._forms[0] : null);
            };
            Screen.utils.ForEach(_this._forms, function (f) {
                return f.checkAutoSkip(formContext, callback);
            });
        });
    };
    Screen.prototype.hideErrors = function () {
        var _this = this;
        this._forms.map(function (f) {
            return (_this._errorDisplayElements[f.bindID] || []).forEach(function (elBound) {
                return elBound.hideError();
            });
        });
    };
    Screen.prototype.showErrors = function (form, arErrors, isServerError) {
        var _this = this;
        var arBoundElements = this._errorDisplayElements[form.bindID] || [];
        Screen.utils.ForEach(arBoundElements, function (elBound) {
            if (!isServerError && elBound.scope !== ErrorDisplayElement_1.ErrorScopes.firstError && elBound.scope !== ErrorDisplayElement_1.ErrorScopes.anyError && elBound.scope !== ErrorDisplayElement_1.ErrorScopes.allErrors)
                return;
            var firstError;
            var arErrorMessages = new Array();
            var shouldDisplay = false;
            Screen.utils.ForEach(arErrors, function (error) {
                if (elBound.isErrorCodeAllowed(error.errorCode, error.errorFlags)) {
                    error.handled = true;
                    var errorMessage = error.customMessage || error.errorMessage;
                    if (!firstError)
                        firstError = error.errorCode;
                    if (!errorMessage) {
                        var field = form.getField(error.fieldName);
                        if (field)
                            errorMessage = _this._screenSet.getErrorMessage(error.errorCode, false, field.fieldName, field.displayName);
                    }
                    if (errorMessage) {
                        shouldDisplay = true;
                        arErrorMessages.push(errorMessage);
                    }
                }
            });
            if (shouldDisplay) {
                var errorMsg;
                if (elBound.scope === ErrorDisplayElement_1.ErrorScopes.firstError || isServerError) {
                    errorMsg = arErrorMessages[0];
                }
                else {
                    errorMsg = '<ul><li>' + arErrorMessages.join('</li><li>') + '</li></ul>';
                }
                elBound.showError({
                    errorCode: firstError,
                    errorMessage: errorMsg,
                });
            }
            else {
                elBound.hideError();
            }
        });
        if (Screen.utils.Some(arErrors, function (error) { return !error.handled; })) {
            form.warn('Missing error-msg or error-display for form');
        }
    };
    Screen.prototype.dimScreen = function () {
        return this._screenSet.dimScreenSet();
    };
    Screen.prototype.undimScreen = function () {
        return this._screenSet.undimScreenSet();
    };
    Screen.prototype.setProfilePhoto = function (thumbnailUrl) {
        Screen.utils.ForEach(this._profilePhotos, function (pPhoto) { return pPhoto.setThumbnailUrl(thumbnailUrl); });
    };
    Screen.prototype.getExtraProfileFields = function (missingOnly) {
        var missingFields = new Array();
        Screen.utils.ForEach(this._forms, function (f) { return (missingFields = missingFields.concat(f.getExtraProfileFields(missingOnly))); });
        return missingFields;
    };
    Screen.prototype.getNeededData = function (formContext) {
        var neededData = {};
        Screen.utils.ForEach(this._forms, function (f) {
            var formNeededData = f.getNeededData(formContext);
            Screen.utils.ForEachProp(formNeededData, function (val, name) { return (neededData[name] = val); });
        });
        return neededData;
    };
    /// Override TemplateElement's hasConditionalAttributes
    Screen.prototype.hasConditionalAttributes = function () {
        if (_super.prototype.hasConditionalAttributes.call(this))
            return true;
        var children = [].concat(this._forms, this._widgets, this._captchas, this._profilePhotos, this._others);
        window.gigya.utils.array.forEachProp(this._errorDisplayElements, function (templateElements) { return children.concat(templateElements); });
        return window.gigya.utils.array.some(children, function (child) { return child.hasConditionalAttributes(); });
    };
    Screen.prototype.evaluateConditionalAttributes = function () {
        var _this = this;
        if (!this.hasConditionalAttributes()) {
            return;
        }
        window.gigya.logger.group("screen conditional attributes evaluation").endWhen(function () {
            var lastDataWidthAttributeValue = _this.width;
            var lastDataHeightAttributeValue = _this.height;
            _super.prototype.evaluateConditionalAttributes.call(_this);
            ScreenOptions_1.ScreenOptions.call(_this, _this.instanceElement, _this._screenSet.screenOptions);
            // Assign the 'data-' attributes of the screen.
            // Note: the screen's 'data-' attributes will override CSS properties and will take precedence
            // in case the current data-width is 'auto', no width value will be set to the 'Screen' element.
            var currentDataWidthAttributeValue = _this.width;
            var currentDataHeightAttributeValue = _this.height;
            // The following line is for a scenario that conditional attributes were evaluated on the screen level
            // and there's a chance that the modal also needs to be resized accordingly
            var screenDimensions = _this.getScreenDimensionsWithUnitType();
            if (lastDataWidthAttributeValue != currentDataWidthAttributeValue || lastDataHeightAttributeValue != currentDataHeightAttributeValue) {
                _this._screenSet.resizeModal({ width: screenDimensions.width, height: screenDimensions.height });
            }
            var captionWidth = _this.instanceElement ? _this.instanceElement.offsetWidth + 'px' : '';
            _this._screenSet.setCaption(_this.caption, captionWidth);
            Screen.utils.ForEach(_this._forms, function (form) {
                form.evaluateConditionalAttributes();
            });
            Screen.utils.ForEachProp(_this._errorDisplayElements, function (boundedElements) {
                Screen.utils.ForEach(boundedElements, function (boundedElement) {
                    boundedElement.evaluateConditionalAttributes();
                });
            });
            Screen.utils.ForEach(_this._others, function (oth) {
                oth.evaluateConditionalAttributes();
            });
            Screen.utils.ForEach(_this._widgets, function (widget) {
                widget.evaluateConditionalAttributes();
            });
        });
    };
    Screen.prototype.resetLastConditionalValues = function () {
        window.gigya.logger.debug("resetting conditional values");
        _super.prototype.resetLastConditionalValues.call(this);
        Screen.utils.ForEach(this._forms, function (form) {
            form.resetLastConditionalValues();
        });
        Screen.utils.ForEachProp(this._errorDisplayElements, function (boundedElements) {
            Screen.utils.ForEach(boundedElements, function (boundedElement) {
                boundedElement.resetLastConditionalValues();
            });
        });
        Screen.utils.ForEach(this._others, function (oth) {
            oth.resetLastConditionalValues();
        });
        Screen.utils.ForEach(this._widgets, function (widget) {
            widget.resetLastConditionalValues();
        });
    };
    Screen.prototype.getScreenDimensionsWithUnitType = function () {
        var isLegacy = this._screenSet.getPluginStyle() == PluginStyles_1.PluginStyle.legacy;
        var widthVal;
        if (this.width) {
            var widthUnits;
            widthUnits = Screen.utils.getUnitMeasurementType(this.width);
            if (widthUnits !== utils_1.UnitMeasurementType.auto && (!isLegacy || widthUnits != utils_1.UnitMeasurementType.percentage)) {
                widthVal = parseFloat(this.width) + widthUnits;
            }
        }
        var heightVal;
        if (this.height) {
            var heightUnits;
            heightUnits = Screen.utils.getUnitMeasurementType(this.height);
            if (heightUnits !== utils_1.UnitMeasurementType.auto && (!isLegacy || heightUnits != utils_1.UnitMeasurementType.percentage)) {
                heightVal = parseFloat(this.height) + heightUnits;
            }
        }
        return { width: widthVal, height: heightVal };
    };
    // Overridable dependencies ///
    Screen.utils = {
        ForEach: utils_1.ForEach,
        getElementsByHavingAttribute: utils_1.getElementsByHavingAttribute,
        getElementsByHavingAttributePrefix: utils_1.getElementsByHavingAttributePrefix,
        ForEachProp: utils_1.ForEachProp,
        Some: utils_1.Some,
        getUnitMeasurementType: utils_1.getUnitMeasurementType,
    };
    return Screen;
}(TemplateElement_1.TemplateElement));
exports.Screen = Screen;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts":
/*!*********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen_CONSTS = {
    gigyaClass: 'gigya-screen',
    conditionalAttributePrefix: 'gigya-conditional',
    expressionAttributePrefix: 'gigya-expression',
    cssClass: 'data-css-class',
};


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts":
/*!**********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
exports.ScreenOptions_CONSTS = {
    accountsLinkedScreen: 'data-on-accounts-linked-screen',
    pendingTfaRegistrationScreen: 'data-on-pending-tfa-registration-screen',
    pendingTfaVerificationScreen: 'data-on-pending-tfa-verification-screen',
    pendingRegistrationScreen: 'data-on-pending-registration-screen',
    existingLoginIdentifierScreen: 'data-on-existing-login-identifier-screen',
    pendingVerificationScreen: 'data-on-pending-verification-screen',
    pendingCodeVerificationScreen: 'data-on-pending-email-verification-code',
    missingLoginIdScreen: 'data-on-missing-loginid-screen',
    pendingPasswordChangeScreen: 'data-on-pending-password-change-screen',
    pendingReAuthenticationScreen: 'data-on-pending-recent-login-screen',
    width: 'data-width',
    height: 'data-height',
    caption: 'data-caption',
};
utils_1.DeepFreeze(exports.ScreenOptions_CONSTS);
var ScreenOptions = /** @class */ (function () {
    function ScreenOptions(el, parent) {
        parent = parent || {};
        this.accountsLinkedScreen = el.getAttribute(exports.ScreenOptions_CONSTS.accountsLinkedScreen) || parent.accountsLinkedScreen;
        this.pendingTfaRegistrationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingTfaRegistrationScreen) || parent.pendingTfaRegistrationScreen;
        this.pendingTfaVerificationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingTfaVerificationScreen) || parent.pendingTfaVerificationScreen;
        this.pendingRegistrationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingRegistrationScreen) || parent.pendingRegistrationScreen;
        this.existingLoginIdentifierScreen = el.getAttribute(exports.ScreenOptions_CONSTS.existingLoginIdentifierScreen) || parent.existingLoginIdentifierScreen;
        this.pendingVerificationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingVerificationScreen) || parent.pendingVerificationScreen;
        this.pendingCodeVerificationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingCodeVerificationScreen) || parent.pendingCodeVerificationScreen;
        this.missingLoginIdScreen = el.getAttribute(exports.ScreenOptions_CONSTS.missingLoginIdScreen) || parent.missingLoginIdScreen;
        this.pendingPasswordChangeScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingPasswordChangeScreen) || parent.pendingPasswordChangeScreen;
        this.pendingReAuthenticationScreen = el.getAttribute(exports.ScreenOptions_CONSTS.pendingReAuthenticationScreen) || parent.pendingReAuthenticationScreen;
        this.width = el.getAttribute(exports.ScreenOptions_CONSTS.width) || parent.width;
        this.height = el.getAttribute(exports.ScreenOptions_CONSTS.height) || parent.height;
        this.caption = el.getAttribute(exports.ScreenOptions_CONSTS.caption) || parent.caption;
    }
    return ScreenOptions;
}());
exports.ScreenOptions = ScreenOptions;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData.ts":
/*!**********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ScreenSetData = /** @class */ (function () {
    function ScreenSetData(params) {
        this.params = params;
        this.apiData = {}; // Each form can have its own server API data
        this.lastSubmittedFormResponse = {};
        this.finalizeRegistrationNeeded = false;
        this.neededData = {};
        this.extraEventData = {};
        this.otpData = {};
        this.pushData = {};
        this.regToken = params.regToken;
        this.finalizeRegistrationNeeded = params.finalizeRegistration;
    }
    return ScreenSetData;
}());
exports.ScreenSetData = ScreenSetData;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin.ts":
/*!************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var ScreenSetData_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData.ts");
var CloseReasons_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/CloseReasons */ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts");
var Screen_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var Errors_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var ScreenOptions_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts");
var IBaseObjectConfig_1 = __webpack_require__(/*! src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig */ "./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var NewsletterSignupForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm.ts");
var ScreenConsts_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts");
var constants_1 = __webpack_require__(/*! src/accounts/constants */ "./src/accounts/constants.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var ScreenSetPlugin_CONSTS = {
    namespace: 'accounts',
    pluginName: 'screenSet',
    showScreenSetName: 'showScreenSet',
    switchScreenName: 'switchScreen',
    hideScreenSetName: 'hideScreenSet',
    stayOnScreen: '_stay',
};
utils_1.DeepFreeze(ScreenSetPlugin_CONSTS);
utils_1.DeepFreeze(CloseReasons_1.CloseReasons);
exports.EndFlowScreens = {
    _skip: CloseReasons_1.CloseReasons.skip,
    _finish: CloseReasons_1.CloseReasons.finished,
    _cancel: CloseReasons_1.CloseReasons.cancel,
};
utils_1.DeepFreeze(exports.EndFlowScreens);
exports.ScreenSet_CONSTS = {
    gigyaClass: 'gigya-screen-set',
    mobileDialogClass: 'gigya-screen-dialog-mobile',
    webDialogClass: 'gigya-screen-dialog',
    contentClass: 'gigya-screen-dialog-content',
    topElementClass: 'gigya-screen-dialog-top',
    calculateSizeClass: 'gigya-calculate-size',
    gigyaHidden: 'gigya-hidden',
    startScreen: 'data-start-screen',
    isResponsive: 'data-responsive',
    dialogStyle: 'data-dialog-style',
};
utils_1.DeepFreeze(exports.ScreenSet_CONSTS);
var ScreenSetPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(ScreenSetPlugin, _super);
    function ScreenSetPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._addedCSS = false;
        _this._screens = {};
        _this._random = Math.random();
        _this._placeholderIntervalID = -1;
        _this.onUserStateChange = function (res) { return _this.onAccountInfo(res); };
        // ITemplateElementParent implementation
        _this._screenSet = _this;
        return _this;
    }
    ScreenSetPlugin.prototype.getConfig = function () {
        return {
            requiredParams: ['screenSet'],
            defaultParams: { screenSet: '' },
            defaultModalParams: {
                screenSet: '',
            },
            defaultDeviceType: IBaseObjectConfig_1.DeviceTypes.auto,
            hasMobileUI: true,
            allowModal: true,
            disableModalContainerInit: true,
            defaultDialogStyle: PluginStyles_1.PluginStyle.legacy,
            supportsResponsive: true,
            enableSizePolling: true,
            enableViewportPolling: true,
        };
    };
    ScreenSetPlugin.injectionInfo = function () {
        return {
            name: 'screenSet',
            namespace: 'accounts',
            methodName: 'showScreenSet',
            jsName: 'gigya.services.accounts.plugins.screenSet',
            publicMethods: {
                hideScreenSet: { instanceMethod: 'cancel', argNames: [] },
                switchScreen: { instanceMethod: 'switchScreen', argNames: ['screen'] },
            },
        };
    };
    /// TODO: son objects should use be injected with this screen-set event dispatcher and warn method (above).
    ScreenSetPlugin.prototype.dispatchScreenSetEvent = function (eventName, obj) {
        return this.dispatchPluginEvent(eventName, obj);
    };
    //#region static methods
    // TODO: will have a support structure in BasePlugin that will find the instance
    ScreenSetPlugin._calculateInstanceId = function (p) {
        var containerID = p.containerID || '';
        return p.screenSet + '_' + containerID;
    };
    //#endregion
    ScreenSetPlugin.prototype.init = function (callback) {
        var _this = this;
        this.loadTemplate(function (success, translations, serverParams) {
            if (!success) {
                window.gigya.logger.error('failed loading screen set template');
            }
            else {
                window.gigya.logger.info('screen set template loaded');
                utils_1.IETemplateElementPolyfill();
                // Re-create parameters using server-loaded params.
                if (serverParams) {
                    // Merge the explicit params on top of the server-provided params to create a new set of explicit params.
                    _this.explicitParams = window.gigya.utils.object.merge([serverParams, _this.explicitParams], false);
                    // Create a new set of params by merging with global conf.
                    _this.params = window.gigya.utils.object.merge([_this.params, window.gigya.thisScript.globalConf, _this.explicitParams], false);
                }
                // Merge translations from parameters to support translations being overridden on the client-side.
                _this.params.customLang = window.gigya.utils.object.merge([translations || {}, _this.params.customLang || {}]);
                // Normalize all translation keys to lowercase in addition to their original casing.
                for (var key in _this.params.customLang) {
                    _this.params.customLang[key.toLowerCase()] = _this.params.customLang[key];
                }
            }
            // #71502 | support regToken in query string for LiteAccount users
            var gig_regToken = window.gigya.utils.URL.getParamsFromURL(document.location.href)['gig_regToken'];
            if (gig_regToken) {
                _this.params.regToken = gig_regToken;
            }
            if (_this.params.parentData) {
                _this._isChild = true;
                _this.data = _this.params.parentData;
                delete _this.params.parentData; // remove to prevent circular refrences inside params
            }
            else {
                _this._isChild = false;
                _this.data = new ScreenSetData_1.ScreenSetData(_this.params);
                _this.params.regToken = _this.data.regToken;
            }
            _this.params.isChild = _this._isChild; // make the is child accessible to event listeners
            // parent screenSet should listen to global login/out events
            if (!_this._isChild) {
                _this.registerGlobalEvents();
            }
            if (!_this.params.regSource) {
                _this.params.regSource = utils_1.firstPart(utils_1.firstPart(document.location.href, '?'), '#');
            }
            _this._instanceId = ScreenSetPlugin._calculateInstanceId(_this.params);
            if (success) {
                _this.initContainer();
                _this.initScreens();
            }
            else {
                _this.dispatchErrorFromResponse(translations); // second argument is used as error response in case of failure
                if (_this.container) {
                    _this.container.innerText = 'An error has occurred. Please try again later.';
                }
            }
            callback(success);
        });
    };
    /**
     * There are two ways to provide a screen-set template.
     * 1. Place the screen-set template element on the page with the screen-set ID. In this case, it is assumed CSS and JS are provided.
     * 2. Load screen-set from Gigya servers, which includes CSS and extra JS parameters. After load, the screen-set is cached in a DOM element.
     */
    ScreenSetPlugin.prototype.loadTemplate = function (callback) {
        var _this = this;
        // Check to see if we've already loaded the template.
        if (this.templateElement) {
            callback(true);
            return;
        }
        // Set screen-set ID.
        var screenSetID = (this._ID = this.isMobileUI && this.params.mobileScreenSet ? this.params.mobileScreenSet : this.params.screenSet);
        // Find (create if needed) screen-set template container on the page.
        var screenSetTemplateContainerID = "__gigyaScreenSet_" + screenSetID;
        var screenSetTemplateContainer = document.getElementById(screenSetTemplateContainerID);
        if (!screenSetTemplateContainer) {
            // Check for site-provided screen-set template element on the page. Use instead of loading from Gigya servers.
            // No JavaScript is loaded in this case because the screen-set was provided by the site.
            this.templateElement = document.getElementById(screenSetID);
            // #52641 - Ensure local screen-set template is not loaded from inside a Gigya-created screen-set template container.
            if (this.templateElement &&
                this.templateElement.parentElement &&
                this.templateElement.parentElement.id &&
                this.templateElement.parentElement.id.indexOf('__gigyaScreenSet_') === 0) {
                this.templateElement = undefined;
            }
            if (this.templateElement) {
                callback(true);
                return;
            }
            screenSetTemplateContainer = document.createElement('div');
            screenSetTemplateContainer.id = screenSetTemplateContainerID;
            screenSetTemplateContainer.style.display = 'none';
            window.gigya.utils.DOM.appendToBody(screenSetTemplateContainer);
        }
        var lang = this.getLangForScreenSet();
        // Look within the template for cached screen-set element.
        // It may have been populated by a previous call.
        var screenSetEl = screenSetTemplateContainer.querySelector("div." + exports.ScreenSet_CONSTS.gigyaClass);
        if (screenSetEl) {
            this.templateElement = screenSetEl;
            if (!ScreenSetPlugin.CACHE[screenSetID]) {
                ScreenSetPlugin.CACHE[screenSetID] = {
                    javascript: undefined,
                    translations: {},
                };
            }
            var javascript_1 = ScreenSetPlugin.CACHE[screenSetID].javascript
                ? window.gigya.utils.JSON.deserialize(ScreenSetPlugin.CACHE[screenSetID].javascript)
                : undefined;
            // First, check to see if we've cached translations from the server in the language requested.
            // (don't fallback to root/default lang when trying to get translations from cache)
            var cachedTranslations = window.gigya.pluginUtils.lang.getTranslationsFromContainer(ScreenSetPlugin.CACHE[screenSetID], lang, false);
            if (cachedTranslations) {
                callback(true, cachedTranslations, javascript_1);
            }
            else {
                // We need to fetch translations for this language from the server.
                // This is a rare case that's hit only when the user already loaded the screen-set in one language and now it's being rendered in a different language.
                window.gigya.accounts.getScreenSets(this.params, {
                    lang: lang,
                    include: 'translations',
                    screenSetIDs: screenSetID,
                    callback: this.prepareCallback(function (res) {
                        if (res.errorCode != 0 || !res.screenSets || !res.screenSets.length) {
                            callback(false, res);
                            return;
                        }
                        // Cache translations from server.
                        var oScreenSet = res.screenSets[0];
                        var translations = window.gigya.pluginUtils.lang.getTranslationsFromContainer(oScreenSet, lang) || {};
                        // saving the translations in cache with {{lang}} as the key,
                        // even if the translations are fallback from root/default lang
                        // to enable loading the same screen-set with a different missing lang/variation
                        ScreenSetPlugin.CACHE[screenSetID].translations[lang] = translations;
                        callback(true, translations, javascript_1);
                    }),
                });
            }
        }
        else {
            // Load screen-set from server.
            // NOTE: This can be triggered twice if 2 screen-sets load at the same time.
            window.gigya.accounts.getScreenSets(this.params, {
                lang: lang,
                include: 'html,css,javascript,translations',
                screenSetIDs: screenSetID,
                callback: this.prepareCallback(function (res) {
                    var _a;
                    if (res.errorCode != 0 || !res.screenSets || !res.screenSets.length || !res.screenSets[0].html) {
                        callback(false, res);
                        return;
                    }
                    var serverParams = undefined;
                    var oScreenSet = res.screenSets[0];
                    var translations = window.gigya.pluginUtils.lang.getTranslationsFromContainer(oScreenSet, lang) || {};
                    ScreenSetPlugin.CACHE[screenSetID] = {
                        javascript: oScreenSet.javascript,
                        translations: (_a = {},
                            _a[lang] = translations,
                            _a),
                    };
                    // Check to be sure the screen-set DOM wasn't already created while waiting for response.
                    // It is vital we don't re-render it or IE11 will break. See #47181.
                    if (!screenSetTemplateContainer.innerHTML) {
                        screenSetTemplateContainer.innerHTML = oScreenSet.html;
                    }
                    // For compatibility, storing this for injection AFTER modalDialog's css.
                    _this._loadedScreensetCss = oScreenSet.css;
                    // Set template element.
                    _this.templateElement = screenSetTemplateContainer.querySelector('div');
                    // If JavaScript is present, also store as an attribute on the template container for future screen-set calls.
                    if (oScreenSet.javascript) {
                        serverParams = window.gigya.utils.JSON.deserialize(oScreenSet.javascript);
                    }
                    callback(true, translations, serverParams);
                }),
            });
        }
    };
    ScreenSetPlugin.prototype.injectScreenSetCSS = function () {
        if (!this._addedCSS) {
            if (this._style != PluginStyles_1.PluginStyle.none) {
                var css = window.gigya.utils.templates.fill(this.getCss().defaultCSS, { imgBase: this._imgBase });
                window.gigya._.plugins.utils.css.addCss(css, this.params.cssPrefix, false);
            }
            if (this._loadedScreensetCss) {
                window.gigya._.plugins.utils.css.addCss(this._loadedScreensetCss);
                delete this._loadedScreensetCss;
            }
            this._addedCSS = true;
        }
    };
    /// Override from BasePlugin.
    ScreenSetPlugin.prototype.initContainer = function () {
        // BasePlugin's initContainer method is invoked in its sync run process,
        // but here we want to initialize the container [in page or modal] only after the template async load is completed [needed for getPluginStyle method].
        if (this.templateElement) {
            var isModalLegacy = this.isModal && this.getPluginStyle() == PluginStyles_1.PluginStyle.legacy;
            // pre-init container
            this.config.defaultModalParams.dimDialogBackground = !isModalLegacy;
            _super.prototype.initContainer.call(this);
            // post-init container
            if (isModalLegacy) {
                this.config.enableViewportPolling = false;
                this._modalDialog.getModalDialogContainer().setAttribute('gigid', this.config.methodName);
            }
        }
        // Basic sync in-page initializing. --legacy
        else if (!this.isModal) {
            window.gigya.utils.DOM.setSize(this.container, this.params.width, this.params.height, false);
            if (this.params.responsive)
                this.container.style.width = 'auto';
            this._loadingIndicator = new window.gigya._.plugins.LoadDimmer(this.container);
        }
    };
    ScreenSetPlugin.prototype.initScreens = function () {
        var _this = this;
        this.isResponsive = this.templateElement.getAttribute(exports.ScreenSet_CONSTS.isResponsive) == 'true';
        this.screenOptions = new ScreenOptions_1.ScreenOptions(this.templateElement);
        window.gigya.logger.info("screenset screens:", this.screenOptions);
        this.injectScreenSetCSS();
        if (!this._isChild) {
            // Child screenSet does not need to listen, parent already listens
            this.addGlobalEventHandler('onLogin', function () {
                _this.data.finalizeRegistrationNeeded = false;
            });
        }
        this.prepareScreenSetContainer();
        this.prepareScreens();
        this._startScreen =
            this.params.startScreen || // parameters
                this.templateElement.getAttribute(ScreenSetPlugin.CONSTS.startScreen) || // screen set definition
                this._startScreen; // first screen that was set when screens where parsed
        if (this.isMobileUI && this.isModal) {
            window.scrollTo(0, 0);
        }
        if (this.params.initialResponse) {
            if (!this.params.initialResponse.operation && this.params.initialMethod) {
                this.params.initialResponse.operation = "/" + this.params.initialMethod;
            }
            this.onScreenResponse(this.params.initialResponse, {
                ID: this._ID,
                bindID: this._ID,
                _screen: this._screens[this._startScreen],
                _screenSet: this,
            });
        }
        else {
            this.switchScreen(this._startScreen, this.params.formContext);
        }
    };
    /// Overriding BasePlugin's
    ScreenSetPlugin.prototype.getPluginStyle = function () {
        /// priority: params > screenset template attr > config
        /// if template hasn't loaded yet - return undefined style.
        return (PluginStyles_1.PluginStyle[this.params.dialogStyle] ||
            (this.templateElement && (PluginStyles_1.PluginStyle[this.templateElement.getAttribute(exports.ScreenSet_CONSTS.dialogStyle)] || this.getConfig().defaultDialogStyle)) ||
            PluginStyles_1.PluginStyle._undefined);
    };
    ScreenSetPlugin.prototype.prepareScreenSetContainer = function () {
        var containerID = this.containerID;
        var template;
        if (this.isModal) {
            template = this.getTemplates().screenSet_dialog;
        }
        else {
            template = this.getTemplates().screenSet;
        }
        var innerContainerID = containerID + '_content';
        var childContainerID = containerID + '_child';
        this.container.insertAdjacentHTML('beforeend', window.gigya.utils.templates.fill(template, {
            innerContainerID: innerContainerID,
            childContainerID: childContainerID,
        }));
        /// TODO: for ie8 support, need to be async in order to get elements that were added by the above.
        if (!this._captionElement) {
            var captionId;
            // Child screenset takes over parent's caption.
            if (this._isChild) {
                document.getElementById(innerContainerID + '_caption').style.display = 'none';
                captionId = this.container.parentElement.id + '_content_caption';
            }
            else {
                captionId = innerContainerID + '_caption';
            }
            this._captionElement = document.getElementById(captionId);
        }
        this._elContainer = document.getElementById(innerContainerID);
        if (this.isModal && this._style == PluginStyles_1.PluginStyle.legacy)
            window.gigya.utils.DOM.addClassToElement(this._elContainer, exports.ScreenSet_CONSTS.contentClass);
        // Add class with current locale.
        // This is used by CSS in the default screen-sets for RTL languages.
        window.gigya.utils.DOM.addClassToElement(this._elContainer, "gigya-locale-" + window.gigya.thisScript.lang.langCode);
        this._elChildContainer = document.getElementById(childContainerID);
    };
    ScreenSetPlugin.prototype.getApiData = function () {
        return this.data.apiData;
    };
    ScreenSetPlugin.prototype.getProfile = function () {
        var apiData = this.getApiData();
        var profile = apiData && apiData.getAccountInfo && apiData.getAccountInfo.profile;
        return profile || {};
    };
    ScreenSetPlugin.prototype.getSchemaData = function () {
        var apiData = this.getApiData();
        var data = apiData && apiData.getAccountInfo && apiData.getAccountInfo.data;
        return data || {};
    };
    ScreenSetPlugin.prototype.getSubScriptions = function () {
        var apiData = this.getApiData();
        var subscriptions = apiData && apiData.getAccountInfo && apiData.getAccountInfo.subscriptions;
        return subscriptions || {};
    };
    ScreenSetPlugin.prototype.getPreferences = function () {
        var apiData = this.getApiData();
        var preferences = apiData && apiData.getAccountInfo && apiData.getAccountInfo.preferences;
        return preferences || {};
    };
    ScreenSetPlugin.prototype.removeRegToken = function () {
        this.data.regToken = this.params.regToken = null;
    };
    ScreenSetPlugin.prototype.establishRegToken = function (regToken) {
        this.params.regToken = this.data.regToken = regToken;
    };
    // TODO perhaps the form could also be the widget that originated the screenSet request (like anchor widget or the TFA widget)
    ScreenSetPlugin.prototype.onScreenResponse = function (response, form, afterFinalizeRegistration) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nextScreen, originalAfterSubmitHandler, fnOnInfoUpdated_1, apiData, errorForm;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!form)
                            form = {};
                        this.data.lastSubmittedFormID = form.ID;
                        this.data.lastSubmittedFormResponse = response;
                        nextScreen = form.successScreen;
                        if (response.response)
                            response = response.response;
                        if (response.autoSkip)
                            // autoSkip is being set on the checkAutoSkip and sent back here in a dummy response
                            nextScreen = form.autoSkipScreen;
                        if (CloseReasons_1.CloseReasons[response.childScreenSetCloseReason] === CloseReasons_1.CloseReasons.skip)
                            nextScreen = form.screenSetSkippedScreen;
                        if (nextScreen === '_finish') {
                            // Resetting 'nextScreen' to be undefined in order to prevent side effects such as 'onAfterSubmit' event being fired twice (#69819)
                            // This is because UI-Builder inconsistently sets the next-screen value to '_finish'/undefined
                            nextScreen = undefined;
                        }
                        if (response.regToken) {
                            this.establishRegToken(response.regToken);
                        }
                        this.onAccountInfo(response); //will update the profile/data cache from the response
                        if (afterFinalizeRegistration || (this.data.lastSubmittedFormID && (nextScreen || !this.endFlowIsPending()))) {
                            originalAfterSubmitHandler = this.params.onAfterSubmit;
                            fnOnInfoUpdated_1 = function (response) {
                                var submitResponse = _this.unwrapResponse(response);
                                var afterSubmitEvent = {
                                    eventName: 'afterSubmit',
                                    screen: form._screen.ID,
                                    form: form.bindID,
                                    profile: _this.getProfile(),
                                    data: _this.getSchemaData(),
                                    preferences: _this.getPreferences(),
                                    subscriptions: _this.getSubScriptions(),
                                    response: submitResponse,
                                };
                                if (!_this.params.onAfterSubmit)
                                    _this.params.onAfterSubmit = originalAfterSubmitHandler;
                                _this.dispatchPluginEvent(afterSubmitEvent.eventName, afterSubmitEvent);
                            };
                            if (form instanceof NewsletterSignupForm_1.NewsletterSignupForm) {
                                fnOnInfoUpdated_1(response);
                            }
                            // Need to get the updated info since setAccountInfo updated it.
                            else if (response.operation === '/accounts.setAccountInfo' && response.errorCode == GSErrors_1.GSErrors.OK && (!response.profile || !response.data)) {
                                this.updateAccountInfo(function (accountInfoResponse) { return fnOnInfoUpdated_1(accountInfoResponse); });
                            }
                            // If missing info
                            else if (this.isAccountInfoRequired(response.operation) &&
                                (!this.getApiData().getAccountInfo || !this.getApiData().getAccountInfo.profile || !this.getApiData().getAccountInfo.data)) {
                                this.updateAccountInfo(function (accountInfoResponse) { return fnOnInfoUpdated_1(response); });
                            }
                            else {
                                fnOnInfoUpdated_1(response);
                            }
                        }
                        if (!(response.errorCode == GSErrors_1.GSErrors.OK)) return [3 /*break*/, 1];
                        apiData = this.getApiData();
                        if (response.operation == '/accounts.register' && apiData.initRegistration) {
                            // a successful call to accounts.register revokes the previous initRegistration response so that a new regToken will be generated for other register forms
                            window.gigya.logger.info("clearing screenset initRegistration cache (regToken)");
                            delete apiData.initRegistration;
                        }
                        this._currentScreen && this._currentScreen.hideErrors();
                        if (nextScreen && (!this._currentScreen || nextScreen != this._currentScreen.ID)) {
                            this.switchScreen(nextScreen, response, form);
                        }
                        else if (!nextScreen) {
                            window.gigya.logger.info("no next screen so...");
                            this.params.remember = this.data.extraEventData.rememberMe;
                            this.endFlow(response, form, CloseReasons_1.CloseReasons.finished);
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.handlePendingErrors(response, form)];
                    case 2:
                        // Response indicate an error
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        errorForm = form instanceof BaseForm_1.BaseForm ? form : form.getErrorDisplayForm ? form.getErrorDisplayForm() : undefined;
                        if (errorForm) {
                            this.displayServerErrors(response, errorForm);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScreenSetPlugin.prototype.isAccountInfoRequired = function (method) {
        return ([
            // method that DON'T require account info
            '/accounts.resetPassword',
            '/accounts.resendVerificationCode',
            '/accounts.tfa.initTFA',
        ].indexOf(method) == -1);
    };
    ScreenSetPlugin.prototype.unwrapResponse = function (response) {
        var submitResponse;
        if (response.event && response.event.response) {
            // unwrap social login response
            submitResponse = response.event.response;
        }
        else {
            submitResponse = response;
        }
        return window.gigya.utils.object.clone(submitResponse);
    };
    /// TODO: move to BasePlugin?
    ScreenSetPlugin.prototype.displayServerErrors = function (response, form) {
        var _this = this;
        if (response.secretQuestion) {
            utils_1.ForEach(form._secretQuestions, function (secretQuestionWidget) { return secretQuestionWidget.setQuestion(response.secretQuestion); });
        }
        else {
            // TODO why else - can't an error be indicated along with the need for secret question? (validation error for example)
            var errorKey = form.getErrorKey(response);
            if (errorKey) {
                response.errorMessage = this.getText(errorKey);
            }
            var errorDetails;
            switch (response.errorDetailsCode // TODO Why this is not dependant on a specific main error code?
            ) {
                case GSErrors_1.GSErrorDetails.Same_password:
                    errorDetails = this.getText('old_password_cannot_be_the_same_as_new_password');
                    break;
                case GSErrors_1.GSErrorDetails.Invalid_password:
                    errorDetails = this.getText('wrong_password');
                    break;
            }
            this.error(response.errorMessage, response.errorCode, {
                screen: form._screen.ID,
                form: form.ID,
                response: window.gigya.utils.object.clone(this.data.lastSubmittedFormResponse),
            });
            // error when no screen is loaded - prerequisites where not met
            if (!this._currentScreen) {
                this.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.error]);
                return;
            }
            window.gigya.logger.info("reloading captchas");
            utils_1.ForEach(this._currentScreen._captchas, function (c) { return c.reload(); });
            var serverError = {
                errorCode: response.errorCode,
                errorMessage: response.customMessage || errorDetails || response.errorMessage,
                errorFlags: response.errorFlags,
            };
            var arFormErrors = new Array();
            if (response.validationErrors) {
                window.gigya.logger.group("screenset validation errors").endWhen(function () {
                    utils_1.ForEach(response.validationErrors, function (error, i) {
                        var field = form.getField(error.fieldName);
                        if (!field) {
                            var fieldNamespace = utils_1.firstPart(error.fieldName, '.');
                            if (fieldNamespace === 'profile')
                                field = form.getField(error.fieldName.replace('profile.', ''));
                        }
                        if (field) {
                            if (i === 0 && field.instanceElement)
                                // first validation error
                                field.instanceElement.focus();
                            var validationError = window.gigya.utils.object.clone(error); // TODO remove the clone
                            arFormErrors.push(validationError);
                            if (form.showFieldError(field, error.errorCode, true, error.customMessage))
                                error.handled = true;
                        }
                        else {
                            // server reported error with no matching field
                            if (error.fieldName === 'captchaText') {
                                _this.warn('Captcha is required but captcha widget is missing from the submitted form');
                            }
                            else {
                                _this.warn(error.fieldName + ' is mandatory/invalid but its field is missing from the submitted form');
                            }
                        }
                    });
                });
            }
            arFormErrors.push(serverError);
            form.showErrors([serverError], true);
            form.showErrors(arFormErrors, false);
            form.onAfterValidation();
        }
    };
    ScreenSetPlugin.prototype.prepareScreens = function () {
        var _this = this;
        var screenElements = this.templateElement.querySelectorAll("." + ScreenConsts_1.Screen_CONSTS.gigyaClass);
        var firstScreen = true;
        utils_1.ForEach(screenElements, function (screenElement, i) {
            var screen = new Screen_1.Screen(_this, screenElement);
            _this._screens[screen.ID] = screen;
            if (firstScreen) {
                firstScreen = false;
                _this._startScreen = screen.ID;
            }
        });
    };
    //called when modal dialog is close to unlink widgets in screen
    ScreenSetPlugin.prototype.close = function () {
        this.cancel();
    };
    ScreenSetPlugin.prototype.cancel = function () {
        this.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.canceled], null, true);
    };
    ScreenSetPlugin.prototype.hide = function (reason, response, alwaysClearContainer) {
        this.undimScreenSet();
        if (this.isModal && this._currentScreen) {
            this._currentScreen.unlinkInstanceElement();
            this._currentScreen = null;
        }
        if (alwaysClearContainer)
            this.container.innerHTML = '';
        _super.prototype.close.call(this, reason, window.gigya.utils.object.removeUndefined({
            user: response && response.user,
        }));
    };
    ScreenSetPlugin.prototype.dispose = function () {
        if (this._isDisposed) {
            return;
        }
        if (this._child) {
            this._child.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.canceledByParent]);
            this._child.dispose();
            this._child = null;
        }
        utils_1.ForEachProp(this._screens, function (s) { return s.unlinkTemplate(); });
        if (!this._child) {
            this.unregisterGlobalEvents();
        }
        _super.prototype.dispose.call(this);
    };
    ScreenSetPlugin.prototype.registerGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
    };
    ScreenSetPlugin.prototype.unregisterGlobalEvents = function () {
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
    };
    /// TODO: move to BasePlugin?
    ScreenSetPlugin.prototype.getErrorMessage = function (errorCode, isBoundToField, fieldName, fieldDisplayName) {
        if (errorCode == GSErrors_1.GSErrors.OK)
            return '';
        switch (errorCode) {
            case GSErrors_1.GSErrors.REQUIRED_VALUE_VALIDATION_ERROR:
                return this.getRequiredValueValidationErrorMessage(isBoundToField, fieldDisplayName);
            case GSErrors_1.GSErrors.UNIQUE_IDENTIFIER_EXISTS:
                return this.getUniqueIdentifierValidationErrorMessage(fieldName);
            case GSErrors_1.GSErrors.NETWORK_ERROR:
                return this.getText('network_error');
            case GSErrors_1.GSErrors.VALIDATION_ERROR:
            default:
                return this.getValidationErrorMessage(fieldName, fieldDisplayName);
        }
    };
    ScreenSetPlugin.prototype.getRequiredValueValidationErrorMessage = function (isBoundToField, fieldDisplayName) {
        if (isBoundToField) {
            // #49968 - Replace %fieldname even though the defaults don't use it to support %fieldname in customLang.
            return this.getText('this_field_is_required', '%fieldname', fieldDisplayName);
        }
        return this.getText('please_enter_fieldname', '%fieldname', fieldDisplayName);
    };
    ScreenSetPlugin.prototype.getUniqueIdentifierValidationErrorMessage = function (fieldName) {
        switch (fieldName) {
            case 'username':
                return this.getText('username_already_exists');
            case 'email':
                return this.getText('email_already_exists');
        }
        return '';
    };
    ScreenSetPlugin.prototype.getValidationErrorMessage = function (fieldName, fieldDisplayName) {
        switch (fieldName) {
            case 'email':
                return this.getText('email_address_is_invalid');
            case 'password':
            case 'newPassword':
                return this.getText('password_does_not_meet_complexity_requirements');
            case 'passwordRetype':
                return this.getText('passwords_do_not_match');
            case 'loginID':
                return this.getText('invalid_login_or_password');
            default:
                return this.getText('invalid_fieldname', '%fieldname', fieldDisplayName);
        }
    };
    ScreenSetPlugin.prototype.updateAccountInfo = function (fnCallback) {
        var _this = this;
        window.gigya.accounts.getAccountInfo(this.params, {
            include: 'profile,data',
            callback: function (response) {
                _this.onAccountInfo(response);
                fnCallback(response);
            },
        });
    };
    ScreenSetPlugin.prototype.onAccountInfo = function (response) {
        var accountInfo = response.accountInfo || response;
        var apiData = this.getApiData();
        if (!apiData.getAccountInfo) {
            apiData.getAccountInfo = {};
        }
        utils_1.ForEach(['profile', 'data', 'emails', 'loginIDs'], function (prop) {
            if (accountInfo[prop]) {
                apiData.getAccountInfo[prop] = window.gigya.utils.object.merge([apiData.getAccountInfo[prop] || {}, accountInfo[prop]]);
                window.gigya.logger.info("screenset accountInfo." + prop + " cache updated:", apiData.getAccountInfo[prop]);
            }
        });
        // Ensure any conditions that rely on account info are updated.
        if (this._currentScreen) {
            this._currentScreen.evaluateConditionalAttributes();
        }
    };
    ScreenSetPlugin.prototype.onApiData = function (response, formContext) {
        window.gigya.logger.debug("updating screenset cache of " + response.operation);
        var apiData = this.getApiData();
        var apiMethodKey = this.getApiMethodFromFullNamespace(response.operation);
        if (response.operation.indexOf('getProviders') > -1) {
            apiData[apiMethodKey] = { activeProviders: this.getEditableTfaProvider(response.activeProviders) };
        }
        else {
            apiData[apiMethodKey] = response;
        }
        if (response.regToken) {
            window.gigya.logger.info("updating screenset regToken");
            this.establishRegToken(response.regToken);
        }
        var gotAllNeededData = true;
        for (var methodName in this.data.neededData) {
            if (!apiData[methodName]) {
                gotAllNeededData = false;
                break;
            }
        }
        if (gotAllNeededData) {
            window.gigya.logger.info("got all required data");
            this.loadNextScreen(formContext);
        }
    };
    ScreenSetPlugin.prototype.chooseNextScreen = function (nextScreenValue) {
        if (!nextScreenValue)
            return;
        var possibleScreens = nextScreenValue.split(',');
        // Weighted screen possibilities
        var weightSum = 0;
        var weightedParts = [];
        utils_1.ForEach(possibleScreens, function (screen) {
            var parts = screen.split(':');
            var weight = parts.length > 1 ? parseInt(parts[1]) : 1;
            weightSum += weight;
            weightedParts.push({
                screen: parts[0],
                weight: weight,
            });
        });
        var random = this._random * weightSum;
        var selectedScreen;
        utils_1.Some(weightedParts, function (w) {
            random -= w.weight;
            if (random > 0)
                return false;
            selectedScreen = w.screen;
            return true;
        });
        return selectedScreen;
    };
    ScreenSetPlugin.prototype.getEditableTfaProvider = function (activeProviders) {
        if (activeProviders === void 0) { activeProviders = []; }
        var editableProviders = [];
        for (var i = 0; i < activeProviders.length - 0; i++) {
            var isEditable = this.isTfaProviderEditable(activeProviders[i].name);
            if (isEditable) {
                editableProviders.push(activeProviders[i].name);
            }
        }
        return editableProviders;
    };
    ScreenSetPlugin.prototype.isTfaProviderEditable = function (providerToCheck) {
        // go over the list of editable providers
        return constants_1.EditableTfaProvidersTypes[providerToCheck] != undefined;
    };
    ScreenSetPlugin.prototype.getApiMethodFromFullNamespace = function (operation) {
        var apiUrlSegments = operation.split('.');
        return apiUrlSegments[apiUrlSegments.length - 1];
    };
    ScreenSetPlugin.prototype.switchToChildScreenSet = function (screenSetName, screenID, form) {
        var _this = this;
        window.gigya.logger.info("opening child screenset: " + screenSetName + "/" + screenID);
        var hideChildHandler = function (e) {
            _this.params.regToken = _this.data.regToken;
            switch (CloseReasons_1.CloseReasons[e.reason]) {
                case CloseReasons_1.CloseReasons.canceledByParent:
                    break;
                case CloseReasons_1.CloseReasons.error:
                case CloseReasons_1.CloseReasons.canceled:
                    _this.hide(e.reason);
                    break;
                case CloseReasons_1.CloseReasons.pendingError:
                    _this.onScreenResponse(_this.data.lastSubmittedFormResponse, form, false);
                    break;
                case CloseReasons_1.CloseReasons.finished:
                case CloseReasons_1.CloseReasons.skip:
                case CloseReasons_1.CloseReasons.missing:
                default:
                    // Any arbitrary reason will be treated as finished flow
                    _this.onScreenResponse({
                        errorCode: GSErrors_1.GSErrors.OK,
                        childScreenSetCloseReason: e.reason,
                        user: e.user,
                    }, form, false);
                    break;
            }
        };
        var onError = function (e) {
            if (_this.params.onError)
                _this.params.onError(e);
            _this.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.error]);
        };
        var childParams = {
            screenSet: screenSetName,
            lang: this.getLangForScreenSet(),
            customLang: this.params.customLang,
            width: this.params.width,
            height: this.params.height,
            context: this.params.context,
            cid: this.params.cid,
            regSource: this.params.regSource,
            regToken: this.params.regToken,
            onError: this.params.onError,
            onBeforeSubmit: this.params.onBeforeSubmit,
            onAfterSubmit: this.params.onAfterSubmit,
            onBeforeScreenLoad: this.params.onBeforeScreenLoad,
            onAfterScreenLoad: this.params.onAfterScreenLoad,
            onFieldChanged: this.params.onFieldChanged,
            ignoreApiQueue: this.params.ignoreApiQueue,
            onHide: hideChildHandler,
            parentData: this.data,
            getInstance: function (child) {
                _this._child = child;
            },
            _allowMultipleInstances: true,
        };
        if (screenID)
            childParams.startScreen = screenID;
        this.hideScreenSetContainer();
        if (this.isModal) {
            childParams.newModal = true;
        }
        else {
            childParams.containerID = this._elChildContainer.id;
        }
        window.gigya[ScreenSetPlugin_CONSTS.namespace][ScreenSetPlugin_CONSTS.showScreenSetName](childParams);
        return true;
    };
    // Returns whether screen was switched
    ScreenSetPlugin.prototype.switchScreen = function (screenID, response, oForm) {
        var screenParts = screenID.split('/');
        var screenSetName;
        if (screenParts.length > 1)
            screenSetName = screenParts.shift();
        screenID = screenParts.join('/');
        // if you request the same screen set - just work within the current screenSet
        if (screenSetName === this.params.screenSet) {
            screenSetName = null;
            if (!screenID) {
                this.warn('Attempt to open screen-set "' + screenSetName + '" from within the same screen-set, without specifing screen to move to.');
                return false;
            }
        }
        if (screenSetName)
            return this.switchToChildScreenSet(screenSetName, screenID, oForm);
        return this.switchToLocalScreen(screenID, response, oForm);
    };
    ScreenSetPlugin.prototype.switchToLocalScreen = function (screenID, response, oForm) {
        var _this = this;
        if (exports.EndFlowScreens[screenID]) {
            this.endFlow(response, oForm, exports.EndFlowScreens[screenID]);
            return true;
        }
        if (screenID === ScreenSetPlugin_CONSTS.stayOnScreen) {
            return true;
        }
        if (this._currentScreen && this._currentScreen.ID === screenID)
            // nothing to do already on the screen
            return false;
        window.gigya.logger.info("switching to screen: " + screenID);
        this._nextScreen = this._screens[screenID];
        if (!this._nextScreen) {
            this.warn('Missing screen "' + screenID + '"');
            this.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.missing]);
            return false;
        }
        if (this.data.finalizeRegistrationNeeded && !this._nextScreen.haveForms()) {
            // TODO: Why not allow a screen that contains only an ad and screen links?
            this.endFlow(response, oForm, CloseReasons_1.CloseReasons.finished);
        }
        if (!this._currentScreen)
            this.setNextScreenSize(); // draw an empty screen with a progress
        var shouldWaitForData = false;
        var extraProfileFields = this._nextScreen.getExtraProfileFields(false).join(',');
        var formContext = response;
        this.data.neededData = this._nextScreen.getNeededData(formContext);
        var apiData = this.getApiData();
        var callback = this.prepareCallback(function (res) { return _this.onApiData(res, formContext); });
        window.gigya.logger.info("required data for the screen:", this.data.neededData);
        utils_1.ForEachProp(this.data.neededData, function (methodInfo, methodName) {
            var disableCache = window.gigya.utils.validation.isExplicitFalse(methodInfo.cache);
            if (disableCache && apiData)
                delete apiData[methodName];
            if (!apiData[methodName] || (methodName === 'getAccountInfo' && extraProfileFields !== '')) {
                if (apiData[methodName])
                    delete apiData[methodName];
                _this.dimScreenSet();
                shouldWaitForData = true;
                var extraParams = { callback: callback };
                if (methodInfo.responseHandler)
                    // If method has a specific response handler, go through it before passing the data to the screenSet
                    extraParams.callback = function (res) { return _this.onApiData(methodInfo.responseHandler(res), formContext); };
                if (methodName === 'getAccountInfo') {
                    if (extraProfileFields) {
                        extraParams['extraProfileFields'] = extraProfileFields;
                    }
                }
                var method = window.gigya.utils.object.expressionHelper(window.gigya.accounts).getField(methodName)
                    || window.gigya.socialize[methodName] || window.gigya.accounts.tfa[methodName] || window.gigya.accounts.b2b[methodName];
                var methodParams = window.gigya.utils.object.removeUndefined(methodInfo.params);
                if (methodParams && methodParams['include'] && _this.params) {
                    methodParams['include'] =
                        window.gigya.utils.stringUtils.mergeCommaSeparatedValues(methodParams['include'], _this.params['include']);
                }
                method(_this.params, methodParams, extraParams);
            }
        });
        if (shouldWaitForData) {
            window.gigya.logger.info("waiting for required data");
        }
        else {
            this.loadNextScreen(formContext);
        }
        return true;
    };
    ScreenSetPlugin.prototype.shouldClose = function () {
        return this.isModal;
    };
    ScreenSetPlugin.prototype.loadNextScreen = function (formContext) {
        var _this = this;
        var screenID = this._nextScreen.ID;
        var logger = window.gigya.logger.group("loading screen " + screenID);
        var beforeLoadEvent = window.gigya.utils.object.removeUndefined({
            eventName: 'beforeScreenLoad',
            currentScreen: this._currentScreen && this._currentScreen.ID,
            form: this.data.lastSubmittedFormID,
            response: window.gigya.utils.object.clone(this.data.lastSubmittedFormResponse),
            profile: this.getProfile(),
            data: this.getSchemaData(),
            subscriptions: this.getSubScriptions(),
            preferences: this.getPreferences(),
            nextScreen: screenID,
            schema: this.getApiData().getSchema,
        });
        var eventResult = this.dispatchPluginEvent(beforeLoadEvent.eventName, beforeLoadEvent);
        this.undimScreenSet();
        if (!eventResult)
            return;
        this.setNextScreenSize(this._nextScreen);
        this._elContainer.innerHTML = '';
        if (this._currentScreen) {
            window.gigya.logger.debug("unlinking current screen: " + this._currentScreen.ID);
            this._currentScreen.unlinkInstanceElement();
            this._currentScreen = null;
        }
        var tempElContainer = this.prepareNextScreen();
        this._nextScreen.performAutoSkip(formContext).then(function (skippedForm) {
            if (skippedForm) {
                window.gigya.logger.info("auto skipping screen: " + _this._nextScreen.ID);
                _this._nextScreen.undimScreen();
                _this._nextScreen.unlinkInstanceElement();
                var response = { errorCode: GSErrors_1.GSErrors.OK, autoSkip: true };
                _this._screenSet.onScreenResponse(response, skippedForm); // Behaves as if the first form was submitted (if there is one)
                return;
            }
            tempElContainer.style.display = '';
            if (_this._elContainer && _this._elContainer.parentNode) {
                _this._elContainer.parentNode.removeChild(_this._elContainer);
            }
            _this.container.appendChild(tempElContainer);
            _this._elContainer = tempElContainer;
            _this._currentScreen = _this._nextScreen;
            _this._nextScreen = null;
            _this._currentScreen.resetLastConditionalValues();
            _this._currentScreen.evaluateConditionalAttributes();
            var screenWidth = _this._currentScreen.instanceElement ? _this._currentScreen.instanceElement.offsetWidth + 'px' : '';
            _this.setCaption(_this._currentScreen.caption, screenWidth);
            _this.showScreenSetContainer();
            var afterLoadEvent = window.gigya.utils.object.removeUndefined({
                eventName: 'afterScreenLoad',
                currentScreen: screenID,
                form: _this.data.lastSubmittedFormID,
                response: window.gigya.utils.object.clone(_this.data.lastSubmittedFormResponse),
                profile: _this.getProfile(),
                preferences: _this._screenSet.getPreferences(),
                data: _this.getSchemaData(),
            });
            _this.dispatchPluginEvent(afterLoadEvent.eventName, afterLoadEvent);
            logger.end();
        });
    };
    ScreenSetPlugin.prototype.prepareNextScreen = function () {
        window.gigya.logger.info("preparing next screen: " + this._nextScreen.ID);
        var elScreen = document.createElement('div'), elContainer = document.createElement('div');
        utils_1.ForEach(this._elContainer.attributes, function (a) { return elContainer.setAttribute(a.name, a.value); });
        elContainer.appendChild(elScreen);
        document.body.appendChild(elContainer);
        this._nextScreen.placeContentInElement(elScreen);
        TemplateElement_1.TemplateElement.prepareTemplateInstances(elContainer);
        this._nextScreen.linkInstanceElement(elContainer);
        elContainer.style.display = 'none';
        return elContainer;
    };
    ScreenSetPlugin.prototype.setCaption = function (caption, width) {
        // Do not attempt to set caption if there is no element.
        // Do not attempt to set caption if we are not in a modal and there is a child screen-set (child will control caption).
        if (!this._captionElement || (!this.isModal && this._child)) {
            return;
        }
        if (!caption) {
            // TODO why this behavior? why if it is empty and on mobile to set content with hidden style?
            if (!this.isModal)
                this._captionElement.style.display = 'none';
        }
        else {
            this._captionElement.style.display = '';
        }
        this._captionElement.innerHTML = caption || '&nbsp;';
        if (!this.isModal && !this.isMobileUI && width !== undefined) {
            this._captionElement.style.width = width;
        }
    };
    ScreenSetPlugin.prototype.setNextScreenSize = function (nextScreen) {
        this._elContainer.style.display = '';
        var w;
        var h;
        if (nextScreen) {
            w = nextScreen.width;
            h = nextScreen.height;
            if (!w || !h) {
                var elTempScreen = document.createElement('div');
                nextScreen.placeContentInElement(elTempScreen);
                window.gigya.utils.DOM.addClassToElement(elTempScreen, exports.ScreenSet_CONSTS.calculateSizeClass);
                window.gigya.utils.DOM.setSize(elTempScreen, w, h);
                this.container.appendChild(elTempScreen);
                var bnp = window.gigya.global.getBordersAndPaddings(elTempScreen);
                if (!w)
                    w = String(elTempScreen.offsetWidth + Math.ceil(bnp.w) + 30);
                if (!h)
                    h = String(elTempScreen.offsetHeight + 1);
                elTempScreen.parentNode.removeChild(elTempScreen);
            }
        }
        if (w) {
            if (!this.isMobileUI && (this.isModal || !this.isResponsive)) {
                // do not set width in % units for legacy.
                if (this.getPluginStyle() != PluginStyles_1.PluginStyle.legacy || utils_1.getUnitMeasurementType(w) != utils_1.UnitMeasurementType.percentage) {
                    window.gigya.utils.DOM.setSize(this._elContainer, w, undefined);
                }
            }
            else {
                var maxWidth = w == 'auto' ? 'none' : '' + (('' + w).indexOf('%') > 0 ? w : w + 'px');
                this._elContainer.style.maxWidth = maxWidth;
                if (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE8 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode))
                    this._elContainer.style['_width'] = maxWidth; // Fix for old IE that does not recognize maxWidth
            }
        }
        if (this.isModal && !this.isMobileUI) {
            //if (h) {
            //    this._elContainer.style.minHeight = h + 'px';
            //    if (gigya.localInfo.isIE7 || gigya.localInfo.isIE8 || (gigya.localInfo.isIE && gigya.localInfo.quirksMode))
            //        this._elContainer.style['_height'] = h + 'px'; // Workaround for old IE that does not support minHeight
            //}
        }
    };
    ScreenSetPlugin.prototype.shouldFinalizeFlow = function (reason) {
        return !this._isChild && this.endFlowIsPending() && reason !== CloseReasons_1.CloseReasons.cancel;
    };
    ScreenSetPlugin.prototype.doesScreenHaveForms = function (screenId) {
        return screenId && this._screens[screenId] && this._screens[screenId].haveForms();
    };
    ScreenSetPlugin.prototype.dimScreenSet = function () {
        this._loadingIndicator && this._loadingIndicator.show();
    };
    ScreenSetPlugin.prototype.undimScreenSet = function () {
        this._loadingIndicator && this._loadingIndicator.hide();
    };
    ScreenSetPlugin.prototype.handlePendingErrors = function (response, oForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var errorInfo, nextScreen;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorInfo = Errors_1.PendingErrorAttributes[response.errorCode] || {};
                        window.gigya.logger.info("screenset routing error code " + response.errorCode + " --> " + errorInfo.name);
                        if (!errorInfo.nextScreen) return [3 /*break*/, 2];
                        return [4 /*yield*/, errorInfo.nextScreen(oForm)];
                    case 1:
                        nextScreen = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (nextScreen) {
                            if (errorInfo.requiresFinalize) {
                                this.data.finalizeRegistrationNeeded = true;
                            }
                            else if (errorInfo.resetFinalizeNeededState) {
                                this.data.finalizeRegistrationNeeded = false;
                            }
                            // TODO add a warning that the pending screen does not have a form and can not deal with the pending issue
                            return [2 /*return*/, this.switchScreen(nextScreen, response, oForm)];
                        }
                        else {
                            if (this._isChild)
                                // allow parent to handle pending error
                                this.hide(CloseReasons_1.CloseReasons[CloseReasons_1.CloseReasons.pendingError], response);
                            // this is the parent
                            else
                                window.gigya.logger.warn("Missing ScreenSet attribute " + errorInfo.name + " for pending error: " + response.errorCode);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScreenSetPlugin.prototype.endFlowIsPending = function () {
        return this.data.finalizeRegistrationNeeded && this.data.regToken;
    };
    ScreenSetPlugin.prototype.endFlow = function (res, oForm, reason) {
        var _this = this;
        window.gigya.logger.info("ending screenset flow");
        if (reason === CloseReasons_1.CloseReasons.skip) {
            if (oForm && oForm.onSkipped) {
                oForm.onSkipped(res);
            }
        }
        if (this.shouldFinalizeFlow(reason)) {
            if (typeof this.data.extraEventData.allowAccountsLinking !== 'undefined')
                this.params.allowAccountsLinking = this.data.extraEventData.allowAccountsLinking;
            var regToken_1 = this.data.regToken || this.params.regToken;
            this.removeRegToken();
            window.gigya.logger.info("screenset finalizing registration");
            window.gigya.accounts.finalizeRegistration(this.params, {
                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,emails,subscriptions,preferences', this._screenSet.params.include),
                dontHandleScreenSet: true,
                regToken: regToken_1,
                callback: function (response) {
                    if (response.errorCode == 0) {
                        window.gigya.logger.info("registration finalized - clearing cache");
                        _this.data.finalizeRegistrationNeeded = false;
                        _this.data.apiData = {};
                    }
                    else {
                        window.gigya.logger.info("registration failed finalizing - re-using existing regToken");
                        _this.data.regToken = _this.params.regToken = regToken_1;
                    }
                    _this.onScreenResponse(response, oForm, true);
                },
            });
        }
        else {
            this.hide(CloseReasons_1.CloseReasons[reason], res);
        }
    };
    // BasePlugin Override
    ScreenSetPlugin.prototype.resizeModal = function (size) {
        // TODO not sure we need this at all
        if (this.getPluginStyle() !== PluginStyles_1.PluginStyle.legacy) {
            if (size.height)
                this._elContainer.style.height = size.height;
            if (size.width)
                this._elContainer.style.width = size.width;
        }
        else {
            /* legacy adjustments */
            if (utils_1.getUnitMeasurementType(size.width) == utils_1.UnitMeasurementType.percentage) {
                delete size.width;
                this._elContainer.style.width = '';
            }
            if (utils_1.getUnitMeasurementType(size.height) == utils_1.UnitMeasurementType.percentage) {
                delete size.height;
                this._elContainer.style.height = '';
            }
        }
        _super.prototype.resizeModal.call(this, size);
    };
    ScreenSetPlugin.prototype.resizePlugin = function (old, curr) {
        this.onViewportSizeChanged();
    };
    ScreenSetPlugin.prototype.onViewportSizeChanged = function (oldViewportSize, currentViewportSize) {
        if (this._currentScreen) {
            this._currentScreen.evaluateConditionalAttributes();
        }
    };
    ScreenSetPlugin.prototype.showScreenSetContainer = function () {
        if (this._modalDialog) {
            window.gigya.utils.DOM.removeClassFromElement(this._modalDialog.getModalDialogContainer(), exports.ScreenSet_CONSTS.gigyaHidden);
            this._modalDialog.showAll();
        }
        else {
            // in place screen-set
            window.gigya.utils.DOM.removeClassFromElement(this._elContainer, exports.ScreenSet_CONSTS.gigyaHidden);
            window.gigya.utils.DOM.addClassToElement(this._elChildContainer, exports.ScreenSet_CONSTS.gigyaHidden);
        }
    };
    ScreenSetPlugin.prototype.hideScreenSetContainer = function () {
        if (this._modalDialog) {
            this._modalDialog.hideAll();
            window.gigya.utils.DOM.addClassToElement(this._modalDialog.getModalDialogContainer(), exports.ScreenSet_CONSTS.gigyaHidden);
        }
        else {
            // in place screen-set
            window.gigya.utils.DOM.addClassToElement(this._elContainer, exports.ScreenSet_CONSTS.gigyaHidden);
            window.gigya.utils.DOM.removeClassFromElement(this._elChildContainer, exports.ScreenSet_CONSTS.gigyaHidden);
        }
    };
    ScreenSetPlugin.prototype.getLangForScreenSet = function () {
        return this.params._explicitLang
            ? this.params.lang // use explicit lang param if supplied
            : window.gigya.thisScript.lang.originalLang; // otherwise, use the original (full) lang from globalConf
    };
    /**
     * Used to cache reference to JavaScript and translations downloaded for each screen-set.
     *
     * The object reference is placed on the gigya object directly to avoid being cleared when this file is reloaded by a site switching languages.
     */
    ScreenSetPlugin.CACHE = (window.gigya['__screenSetPluginCache'] = window.gigya['__screenSetPluginCache'] || {});
    ScreenSetPlugin.CONSTS = exports.ScreenSet_CONSTS;
    return ScreenSetPlugin;
}(window.gigya._.plugins.BasePlugin));
exports.ScreenSetPlugin = ScreenSetPlugin;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources.ts":
/*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordStrength = __webpack_require__(/*! ./templates/passwordStrength.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength.html");
exports.passwordStrength_strengthMeter = __webpack_require__(/*! ./templates/passwordStrength_strengthMeter.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_strengthMeter.html");
exports.passwordStrength_minimumRequirements = __webpack_require__(/*! ./templates/passwordStrength_minimumRequirements.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_minimumRequirements.html");
exports.screenSet_dialog = __webpack_require__(/*! ./templates/screenSet_dialog.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet_dialog.html");
exports.screenSet = __webpack_require__(/*! ./templates/screenSet.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet.html");
exports.photoUpload_ui = __webpack_require__(/*! ./templates/photoUpload_ui.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_ui.html");
exports.photoUpload_form = __webpack_require__(/*! ./templates/photoUpload_form.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_form.html");
exports.inlinedPasswordStrength = __webpack_require__(/*! ./templates/inlinedPasswordStrength.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/inlinedPasswordStrength.html");
exports.consent = __webpack_require__(/*! ./templates/consent.html */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/consent.html");


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/SwitchScreenWidget.ts":
/*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/SwitchScreenWidget.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! ./BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
exports.SwitchScreen_CONSTS = {
    selector: '[data-switch-screen]',
    switchScreen: 'data-switch-screen',
    successScreen: 'data-on-success-screen',
    screenSetSkippedScreen: 'data-on-screenset-skipped-screen',
};
utils_1.DeepFreeze(exports.SwitchScreen_CONSTS);
var SwitchScreenWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SwitchScreenWidget, _super);
    function SwitchScreenWidget(_screen, el) {
        var _this = _super.call(this, _screen, el, false) || this;
        _this._screen = _screen;
        // No definition of what should be the id in case that no ID is published.
        _this.bindID = _this.ID;
        return _this;
    }
    SwitchScreenWidget.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        this.updateAttributes();
        this.clickHandler = function (event) {
            var form = _this._screen.getFormByElement(_this.instanceElement);
            var formContext = {
                errorCode: GSErrors_1.GSErrors.OK,
                explicitSwitchScreen: true
            };
            _this._screenSet.switchScreen(_this.switchScreen, formContext, form);
        };
        this.addEventListener('click', this.clickHandler);
    };
    SwitchScreenWidget.prototype.unlinkInstanceElement = function () {
        _super.prototype.unlinkInstanceElement.call(this);
        this.removeEventListener('click', this.clickHandler);
    };
    SwitchScreenWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.updateAttributes();
    };
    SwitchScreenWidget.prototype.updateAttributes = function () {
        this.switchScreen = this.instanceElement.getAttribute(exports.SwitchScreen_CONSTS.switchScreen);
        this.instanceElement.setAttribute('href', 'javascript:void(0)');
        this.instanceElement.removeAttribute('target');
    };
    SwitchScreenWidget.CONSTS = exports.SwitchScreen_CONSTS;
    return SwitchScreenWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.SwitchScreenWidget = SwitchScreenWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(SwitchScreenWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts":
/*!************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var Debug_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug.ts");
var ElementRoles;
(function (ElementRoles) {
    ElementRoles[ElementRoles["_undefined"] = 0] = "_undefined";
    ElementRoles[ElementRoles["template"] = 1] = "template";
    ElementRoles[ElementRoles["instance"] = 2] = "instance";
})(ElementRoles = exports.ElementRoles || (exports.ElementRoles = {}));
var generatedIdNumber = 0;
exports.TemplateElement_CONSTS = {
    elementId: 'data-screenset-element-id',
    publishElementId: 'data-screenset-element-id-publish',
    templateForArray: 'screenSetTemplateFor',
    instanceOfArray: 'screenSetInstanceOf',
    screenSetRoles: 'data-screenset-roles',
};
utils_1.DeepFreeze(exports.TemplateElement_CONSTS);
var conditionalFunction = new Function('screenset', 'viewport', 'formData', 'profile', 'data', 'subscriptions', 'preferences', 'accountInfo', 'tfaProviders', 'authMethods', 'conflictingAccount', 'schema', '_account', 'value', 'return eval(value);');
var TemplateElement = /** @class */ (function () {
    function TemplateElement(templateElement, _parent) {
        this.templateElement = templateElement;
        this._parent = _parent;
        this.eventHandlers = {};
        this.conditionalExpressions = new Array();
        this._screenSet = _parent._screenSet;
        if (TemplateElement.isTemplateInstance(this.templateElement)) {
            // Creating multiple TemplateElement instances on the same element
            this.ID = this.templateElement.getAttribute(exports.TemplateElement_CONSTS.elementId) || '';
            this.publishID = this.templateElement.getAttribute(exports.TemplateElement_CONSTS.publishElementId) === 'true';
        }
        else {
            // Creating the first TemplateElement instance for this element
            this.ID = this.templateElement.id || '';
            if (this.ID !== '') {
                this.publishID = true;
                this.templateElement.removeAttribute('id'); // eliminate the id from the template to make sure that id only exists on the running instance of the element
            }
            else {
                var generatedNumber = ++generatedIdNumber + '_' + new Date().getTime(); // make sure every ID is as unique as possible
                this.ID = '__gig_template_element_' + generatedNumber;
                this.publishID = false;
            }
            this.templateElement.setAttribute(exports.TemplateElement_CONSTS.elementId, this.ID);
            this.templateElement.setAttribute(exports.TemplateElement_CONSTS.publishElementId, String(this.publishID));
        }
        this.ID = this.ID.trim();
        // mark role on the element
        var currentRoles = TemplateElement.getRoles(this.templateElement);
        currentRoles.push(ElementRoles.template);
        TemplateElement.setRoles(this.templateElement, currentRoles);
        // link JS object to template element
        var templateFor = templateElement[exports.TemplateElement_CONSTS.templateForArray];
        if (!templateFor) {
            templateFor = new Array();
            templateElement[exports.TemplateElement_CONSTS.templateForArray] = templateFor;
        }
        this.conditionalExpressions = this.getConditionalExpression(this.templateElement);
        templateFor.push(this);
    }
    TemplateElement.prototype.unlinkTemplate = function () {
        // remove instance link
        var templateFor = this.templateElement[exports.TemplateElement_CONSTS.templateForArray];
        if (templateFor) {
            var i = utils_1.LastIndexOf(templateFor, this);
            templateFor.splice(i, 1);
        }
        // remove role
        var currentRoles = TemplateElement.getRoles(this.templateElement);
        var lastRole = currentRoles.pop();
        if (lastRole === ElementRoles.template)
            TemplateElement.setRoles(this.templateElement, currentRoles);
        else
            this.warn('unlinkTemplate without matching role');
    };
    TemplateElement.prototype.getConditionalExpression = function (el) {
        var conditionalExpressions = [];
        try {
            conditionalExpressions = utils_1.getConditionalAttributeExpressions(el);
        }
        catch (e) {
            this.warn('Error parsing conditional expressions.');
        }
        return conditionalExpressions;
    };
    TemplateElement.getRoles = function (element) {
        var roleNames = (element.getAttribute(exports.TemplateElement_CONSTS.screenSetRoles) || '').split(',');
        if (roleNames[0] === '')
            roleNames.pop();
        return utils_1.Map(roleNames, function (roleName) { return ElementRoles[roleName] || ElementRoles._undefined; });
    };
    TemplateElement.setRoles = function (element, roles) {
        var rolesNames = utils_1.Map(roles, function (role) { return ElementRoles[role]; });
        element.setAttribute(exports.TemplateElement_CONSTS.screenSetRoles, rolesNames.join(','));
    };
    TemplateElement.prototype.warn = function (msg, id) {
        this._parent.warn(msg, id ? this.ID + '.' + id : this.ID);
    };
    // Assumes that prepareTemplateInstance was called on the template instance before this call
    TemplateElement.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        var instanceElements = window.gigya.utils.DOM.getElementsByAttribute(parent, '*', exports.TemplateElement_CONSTS.elementId, this.ID);
        if (!instanceElements || !instanceElements.length || !instanceElements[0]) {
            this.warn('Failed to find the instance element to link to');
            return;
        }
        this.instanceElement = instanceElements[0];
        // mark roles
        var currentRoles = TemplateElement.getRoles(this.instanceElement);
        currentRoles.push(ElementRoles.instance);
        TemplateElement.setRoles(this.instanceElement, currentRoles);
        // link JS object to instance element
        var instanceOf = this.instanceElement[exports.TemplateElement_CONSTS.instanceOfArray];
        if (!instanceOf) {
            instanceOf = new Array();
            this.instanceElement[exports.TemplateElement_CONSTS.instanceOfArray] = instanceOf;
        }
        // register event listeners
        utils_1.ForEachProp(this.eventHandlers, function (handlers, eventName) {
            return utils_1.ForEach(handlers, function (handler) { return window.gigya.utils.DOM.addEventListener(_this.instanceElement, eventName, handler); });
        });
        instanceOf.push(this);
        this.initFromInstanceElement();
    };
    TemplateElement.prototype.unlinkInstanceElement = function () {
        var _this = this;
        if (this.instanceElement) {
            // unregister event listeners
            utils_1.ForEachProp(this.eventHandlers, function (handlers, eventName) {
                return utils_1.ForEach(handlers, function (handler) { return window.gigya.utils.DOM.removeEventListener(_this.instanceElement, eventName, handler); });
            });
            // remove role
            var currentRoles = TemplateElement.getRoles(this.instanceElement);
            var lastRole = currentRoles.pop();
            if (lastRole === ElementRoles.instance)
                TemplateElement.setRoles(this.instanceElement, currentRoles);
            else
                this.warn('unlinkInstanceElement without matching role');
            // remove link to JS object from instance element
            var instanceOf = this.instanceElement[exports.TemplateElement_CONSTS.instanceOfArray];
            if (instanceOf)
                instanceOf.splice(window.gigya.utils.array.indexOf(instanceOf, this), 1);
            this.instanceElement = null;
        }
    };
    TemplateElement.isTemplateInstance = function (el) {
        return el.getAttribute(exports.TemplateElement_CONSTS.elementId);
    };
    TemplateElement.prepareTemplateInstanceElement = function (element, removeTemplateRole) {
        var ID = element.getAttribute(exports.TemplateElement_CONSTS.elementId);
        var publishId = element.getAttribute(exports.TemplateElement_CONSTS.publishElementId) === 'true';
        if (!ID) {
            Debug_1.warn('', 'Failed to find elementId'); // TODO perhaps message should include more information
            return;
        }
        if (publishId)
            element.setAttribute('id', ID);
        // remove the template role
        if (removeTemplateRole) {
            var roles = TemplateElement.getRoles(element);
            if (roles.pop() === ElementRoles.template)
                TemplateElement.setRoles(element, roles);
        }
    };
    TemplateElement.prepareTemplateInstances = function (templateRoot) {
        var els = templateRoot.querySelectorAll("*[" + exports.TemplateElement_CONSTS.elementId + "]");
        utils_1.ForEach(els, function (e) { return TemplateElement.prepareTemplateInstanceElement(e, true); });
    };
    //#region events
    TemplateElement.prototype.addEventListener = function (eventName, handler) {
        var handlers = this.eventHandlers[eventName];
        if (!handlers) {
            handlers = new Array();
            this.eventHandlers[eventName] = handlers;
        }
        handlers.push(handler);
        if (this.instanceElement)
            window.gigya.utils.DOM.addEventListener(this.instanceElement, eventName, handler);
    };
    TemplateElement.prototype.removeEventListener = function (eventName, handler) {
        if (this.instanceElement)
            window.gigya.utils.DOM.removeEventListener(this.instanceElement, eventName, handler);
        var handlers = this.eventHandlers[eventName];
        if (handlers) {
            var i = utils_1.LastIndexOf(handlers, handler);
            if (i > -1)
                handlers.splice(i, 1);
        }
    };
    TemplateElement.prototype.getLoggerName = function () {
        return '';
    };
    // Evaluate conditional attribute
    TemplateElement.prototype.evaluateConditionalAttributes = function () {
        var _this = this;
        this.conditionalExpressions = this.getConditionalExpression(this.instanceElement);
        if (!this.hasConditionalAttributes()) {
            return;
        }
        window.gigya.logger.group(("conditional expressions for " + (this.constructor['name'] || this.ID) + " " + this.getLoggerName()).trim()).endWhen(function () {
            window.gigya.logger.info('template element:', _this);
            utils_1.ForEach(_this.conditionalExpressions, function (conditionalAtt) {
                var evaluationResult = _this.evaluateExpression(conditionalAtt);
                _this.executeConditionalResult(evaluationResult, conditionalAtt, _this.instanceElement);
            });
        });
        this.initFromInstanceElement();
    };
    TemplateElement.prototype.initFromInstanceElement = function () {
        /// Virtual method to be overriden by derived class.
    };
    TemplateElement.prototype.hasConditionalAttributes = function () {
        return this.conditionalExpressions && this.conditionalExpressions.length > 0;
    };
    TemplateElement.prototype.evaluateExpression = function (conditionalExpression) {
        var expressionData = this.getExpressionData();
        window.gigya.logger.debug("evaluating:", { conditionalExpression: conditionalExpression, expressionData: expressionData });
        try {
            return conditionalFunction(expressionData.screenset, expressionData.viewport, expressionData.formData, expressionData.profile, expressionData.data, expressionData.subscriptions, expressionData.preferences, expressionData.accountInfo, expressionData.tfaProviders, expressionData.authMethods, expressionData.conflictingAccount, expressionData.schema, window.gigya.utils.object.expressionHelper(expressionData), conditionalExpression.condition);
        }
        catch (e) {
            if (!conditionalExpression.ignoreError) {
                window.gigya.logger.warn("Screenset exception in conditional expression!", {
                    condition: conditionalExpression.condition,
                    e: e,
                });
            }
            return conditionalExpression.defaultValue;
        }
    };
    TemplateElement.prototype.getExpressionData = function () {
        var apiData = this._screenSet.getApiData();
        var viewportSize = window.gigya.utils.viewport.getInnerSize();
        var expressionData = {
            // Form data contains special field values (like loginID) and local fields.
            formData: {},
            // This reflects the account info response (for logged in user) with the form data merged on top of it.
            // User is not logged in, start with blank account info.
            profile: {},
            data: {},
            preferences: {},
            subscriptions: {},
            authMethods: [],
            // api data
            schema: apiData.getSchema || {},
            accountInfo: apiData.getAccountInfo || {},
            tfaProviders: apiData.getProviders || {},
            conflictingAccount: apiData.getConflictingAccount || {},
            // Prepare screenset object.
            // Translations are made available specifically for attributes that need to be localized, such as the placeholder attribute.
            screenset: {
                width: this._screenSet.container.offsetWidth,
                height: this._screenSet.container.offsetHeight,
                translations: this._screenSet.params.customLang || {},
                lang: this._screenSet.lang,
                isModal: this._screenSet.isModal,
                isMobile: this._screenSet.isMobileUI,
            },
            viewport: {
                width: viewportSize.w,
                height: viewportSize.h,
                orientation: window.gigya.utils.viewport.getOrientation(),
            },
        };
        // First, attempt to get the account info. The user may not be logged in.
        if (apiData.getAccountInfo) {
            // Set merged data to account info.
            expressionData = window.gigya.utils.object.clone(window.gigya.utils.object.extractProperties(apiData.getAccountInfo, expressionData, 'profile|data|preferences|subscriptions|authMethods'), true);
        }
        // Populate form data if element is within form. Otherwise, profile/data fields are populated by API data.
        // Parent is typically either form or screen element.
        if ( /*this._parent instanceof BaseForm && */this._parent['isPopulated']) {
            // Generate flat form data in the same way it's generated for other events.
            expressionData.formData = this._parent.getFlatFormData(true, false);
            // Deep merge form data on top of account info API data.
            var formData = this._parent.getFormData(false, false);
            expressionData = window.gigya.utils.object.merge([expressionData, formData], true);
        }
        return expressionData;
    };
    TemplateElement.prototype.executeConditionalResult = function (evaluationResult, conditionalAtt, element) {
        evaluationResult = window.gigya.utils.validation.isExplicitFalse(evaluationResult) ? evaluationResult : evaluationResult || conditionalAtt.defaultValue;
        if (evaluationResult === conditionalAtt.lastAttributeValue) {
            window.gigya.logger.info("attribute '" + conditionalAtt.attributeName + "' remained the same: " + evaluationResult);
        }
        else {
            window.gigya.logger.info("attribute '" + conditionalAtt.attributeName + "' changed: " + JSON.stringify(conditionalAtt.lastAttributeValue) + " => " + JSON.stringify(evaluationResult));
            conditionalAtt.lastAttributeValue = evaluationResult;
            if (conditionalAtt.attributeName === 'class' && this.cssClass) {
                evaluationResult = ((evaluationResult || '') + " " + this.cssClass).trim();
            }
            if (!evaluationResult && // value is falsy and
                (!window.gigya.utils.validation.isExplicitFalse(evaluationResult) || // it's not explicit false (i.e null, undefined, '')
                    window.gigya.utils.DOM.isHTMLBooleanAttribute(conditionalAtt.attributeName))) {
                // or it's an html boolean attribute (false value requires to fully remove it)
                window.gigya._.plugins.utils.DOM.setAttribute(element, conditionalAtt.attributeName, null);
            }
            else {
                var attrVal = typeof evaluationResult == 'object' ? JSON.stringify(evaluationResult) : evaluationResult;
                window.gigya._.plugins.utils.DOM.setAttribute(element, conditionalAtt.attributeName, attrVal);
            }
        }
        return evaluationResult;
    };
    TemplateElement.prototype.resetLastConditionalValues = function () {
        utils_1.ForEach(this.conditionalExpressions, function (conditionalAtt) {
            conditionalAtt.lastAttributeValue = '';
        });
    };
    return TemplateElement;
}());
exports.TemplateElement = TemplateElement;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Templates.ts":
/*!******************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Templates.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ScreenSetResources_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources.ts");
var TemplatesCache = /** @class */ (function () {
    function TemplatesCache() {
        this._map = {};
    }
    TemplatesCache.prototype.get = function (key) {
        return this._map[key];
    };
    TemplatesCache.prototype.set = function (key, value) {
        // TODO: value need to support both string and string array perhaps with templates this is not needed anymore
        this._map[key] = value instanceof Array ? value.join('') : value;
    };
    return TemplatesCache;
}());
exports.TemplatesCache = TemplatesCache;
function createDefaultTemplates() {
    var templates = new TemplatesCache();
    templates.set('passwordStrength', ScreenSetResources_1.passwordStrength);
    templates.set('passwordStrength-strengthMeter', ScreenSetResources_1.passwordStrength_strengthMeter);
    templates.set('passwordStrength-minimumRequirements', ScreenSetResources_1.passwordStrength_minimumRequirements);
    templates.set('screenSet-dialog', ScreenSetResources_1.screenSet_dialog);
    templates.set('screenSet', ScreenSetResources_1.screenSet);
    templates.set('photoUpload_ui', ScreenSetResources_1.photoUpload_ui);
    templates.set('photoUpload_form', ScreenSetResources_1.photoUpload_form);
    templates.set('inlinedPasswordStrength', ScreenSetResources_1.inlinedPasswordStrength);
    templates.set('consent', ScreenSetResources_1.consent);
    return templates;
}
exports.createDefaultTemplates = createDefaultTemplates;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ApiLinkWidget.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ApiLinkWidget.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseScreenWidget_1 = __webpack_require__(/*! ../BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var ApiHandler_1 = __webpack_require__(/*! ../Handlers/ApiHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/ApiHandler/index.ts");
var TranslatedWidget_1 = __webpack_require__(/*! ./TranslatedWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget.ts");
exports.ApiLink_CONSTS = {
    selector: '[data-gigya-api-link]',
    attributeName: 'data-gigya-api-link',
    disableTimeoutInSeconds: 'data-disable-timeout',
    disabledClass: 'gigya-disabled-text',
    deps: [TranslatedWidget_1.TranslatedWidget] //deps doesn't do anything, only make sure TranslatedWidget is registered before this one (by importing it)
};
var ApiLinkWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ApiLinkWidget, _super);
    function ApiLinkWidget(_screen, el, _apiList, _domUtils, _config) {
        if (_apiList === void 0) { _apiList = window.gigya._.arApiList; }
        if (_domUtils === void 0) { _domUtils = window.gigya.utils.DOM; }
        if (_config === void 0) { _config = { defaultDisableTimeout: 10 }; }
        var _this = _super.call(this, _screen, el, false) || this;
        _this._apiList = _apiList;
        _this._domUtils = _domUtils;
        _this._config = _config;
        _this._clickHandler = function () {
            _this._disable();
            _this._apiHandler.send();
        };
        return _this;
    }
    ApiLinkWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this._apiHandler = this._getApiHandler();
        if (this._apiHandler) {
            this._setDisableTimeout();
            this._addClickHandler();
        }
    };
    ApiLinkWidget.prototype.unlinkInstanceElement = function () {
        this._removeClickHandler();
        _super.prototype.unlinkInstanceElement.call(this);
    };
    ApiLinkWidget.prototype._getApiHandler = function () {
        var methodName = this.instanceElement.getAttribute(exports.ApiLink_CONSTS.attributeName);
        if (!methodName) {
            window.gigya.logger.warn("[" + exports.ApiLink_CONSTS.attributeName + "]: missing api method name");
            return null;
        }
        var serverApis = this._apiList.filter(function (api) { return api instanceof window.gigya._.ServerApi; });
        return ApiHandler_1.BaseApiHandler.getHandler(methodName, this._screenSet.data, serverApis);
    };
    ApiLinkWidget.prototype._addClickHandler = function () {
        this._domUtils.addEventListener(this.instanceElement, 'click', this._clickHandler);
    };
    ApiLinkWidget.prototype._removeClickHandler = function () {
        this._domUtils.removeEventListener(this.instanceElement, 'click', this._clickHandler);
    };
    ApiLinkWidget.prototype._setDisableTimeout = function () {
        var disableTimeout = this.instanceElement.getAttribute(exports.ApiLink_CONSTS.disableTimeoutInSeconds);
        if (!disableTimeout || isNaN(Number(disableTimeout))) {
            disableTimeout = String(this._config.defaultDisableTimeout);
        }
        this._disableTimeout = Number(disableTimeout) * 1000;
    };
    ApiLinkWidget.prototype._disable = function () {
        var _this = this;
        this._removeClickHandler();
        this._domUtils.addClassToElement(this.instanceElement, exports.ApiLink_CONSTS.disabledClass);
        setTimeout(function () {
            _this._enable();
        }, this._disableTimeout);
    };
    ApiLinkWidget.prototype._enable = function () {
        this._addClickHandler();
        this._domUtils.removeClassFromElement(this.instanceElement, exports.ApiLink_CONSTS.disabledClass);
    };
    ApiLinkWidget.CONSTS = exports.ApiLink_CONSTS;
    return ApiLinkWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.ApiLinkWidget = ApiLinkWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(ApiLinkWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var ErrorDisplayElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement.ts");
exports.ArrayManager_CONST = {
    selector: '.gigya-composite-control-array-widget',
    containerSelector: '.gigya-array-manager',
    formElSelector: 'input,select,.gigya-array-manager',
    addButtonSelector: 'button.gigya-array-add-btn',
    removeButtonSelector: 'button.gigya-array-remove-btn',
    itemWrapperClass: 'gigya-array-template',
    inputsWrapperClass: 'inputs-wrapper',
    buttonsWrapperClass: 'buttons-wrapper',
    templateItemAttr: 'data-array-template-id',
    arrayManagerRootAttr: 'data-array-manager-root',
    deleteDisabledClass: 'disable-delete',
    indexMatcher: /\[([0-9])]/g,
};
utils_1.DeepFreeze(exports.ArrayManager_CONST);
var _idGenerator = 0;
var ArrayManagerItem = /** @class */ (function () {
    function ArrayManagerItem(arrayManager, _index) {
        this.arrayManager = arrayManager;
        this._index = _index;
        this._container = document.createElement('div');
        this._inputsWrapper = document.createElement('div');
        this._buttonsWrapper = document.createElement('div');
        this.onDispose = [];
        this.screenWidgets = [];
        this.formInputs = [];
        this.formWidgets = [];
        this.boundedErrors = [];
        this._form = arrayManager._form;
        this._screen = arrayManager._screen;
        this._uniqueItemID = "array-template-" + Date.now() + "-" + _index;
        this._buttonsWrapper.id = this._uniqueItemID + "_" + exports.ArrayManager_CONST.buttonsWrapperClass;
        window.gigya.utils.DOM.addClassToElement(this._buttonsWrapper, exports.ArrayManager_CONST.buttonsWrapperClass);
        window.gigya.utils.DOM.addClassToElement(this._inputsWrapper, exports.ArrayManager_CONST.inputsWrapperClass);
        this._inputsWrapper.appendChild(arrayManager.createInputsWrapper());
        var removeButton = arrayManager.attachRemoveButton(this);
        this._buttonsWrapper.appendChild(removeButton);
        this._container.appendChild(this._inputsWrapper);
        this._container.appendChild(this._buttonsWrapper);
        window.gigya.utils.DOM.addClassToElement(this._container, exports.ArrayManager_CONST.itemWrapperClass);
        this._container.setAttribute(exports.ArrayManager_CONST.templateItemAttr, this._uniqueItemID);
        // map old ids to the new ids, we have to do this since each id must always map to the same new id
        var idsMap = this._getAllElements()
            .filter(function (el) { return Boolean(el.id); })
            .reduce(function (obj, el) {
            obj[el.id] = el.id + "_" + ++_idGenerator;
            return obj;
        }, {});
        // replace any occurrence of the id with the newly generated id
        window.gigya.utils.DOM.manipulateAttributes(this._getAllElements(), new RegExp(Object.keys(idsMap).join('|'), 'g'), function (id) { return idsMap[id]; });
        this._indexNameBindings();
    }
    ArrayManagerItem.prototype.getID = function () {
        return this._uniqueItemID;
    };
    ArrayManagerItem.prototype.getIndex = function () {
        return this._index;
    };
    ArrayManagerItem.prototype.setIndex = function (index) {
        this._index = index;
        this.update();
    };
    ArrayManagerItem.prototype.attachAddButton = function (addButton) {
        this._buttonsWrapper.insertBefore(addButton, this._buttonsWrapper.firstChild);
    };
    ArrayManagerItem.prototype.linkInstance = function () {
        this._linkToScreen();
        this._linkToForm();
    };
    ArrayManagerItem.prototype.getContainer = function () {
        return this._container;
    };
    ArrayManagerItem.prototype.dispose = function () {
        this.onDispose.forEach(function (cb) { return cb(); });
        this._unlinkScreen();
        this._unlinkForm();
        if (this._container.parentNode) {
            this._container.parentNode.removeChild(this._container);
        }
    };
    ArrayManagerItem.prototype.update = function () {
        this._indexNameBindings();
        this._screen.removeSpecificErrorBinds(this.boundedErrors);
        this.boundedErrors = this._screen.addSpecificErrorBinds(getErrorBindings(this._inputsWrapper));
        this._form.registerBoundedErrorElements();
        this.formInputs.forEach(function (i) { return i.update(); });
        this.formWidgets.forEach(function (w) { return w.update(); });
    };
    ArrayManagerItem.prototype._getAllElements = function () {
        return Array.prototype.slice.call(this._inputsWrapper.querySelectorAll('*'));
    };
    ArrayManagerItem.prototype._indexNameBindings = function () {
        var _this = this;
        var namesToMap = this.arrayManager.getFieldsNames().concat(this.arrayManager.getStoreAsArrayRoots());
        var rootName = this.arrayManager.getRootName();
        var baseRootName = rootName.replace(exports.ArrayManager_CONST.indexMatcher, '');
        // match any occurrence of any binding, with or without index clause.
        // an example of the output: "ancestorRoot(index)?.root(index)?.fieldName1|ancestorRoot(index)?.root(index)?.fieldName2"
        var bindingMatcher = namesToMap
            .filter(function (name) { return Boolean(name); })
            .map(function (name) {
            return rootName.replace(exports.ArrayManager_CONST.indexMatcher, '(?:\\[[0-9]])?') + // convert any existing index in "rootName" to be optional match
                '(?:\\[[0-9]])?' + // optional current index
                name.substr(baseRootName.length);
        }) // actual field name
            .join('|');
        // add current index to each field name
        window.gigya.utils.DOM.manipulateAttributes(this._getAllElements(), new RegExp(bindingMatcher, 'g'), function (match) { return addIndex(match, rootName, _this._index); }, function (attr) { return /^name|^data-|^gigya/i.test(attr.name); });
    };
    ArrayManagerItem.prototype._linkToScreen = function () {
        this.screenWidgets = this._screen.addDynamicWidgets(this._container);
        this.boundedErrors = this._screen.addSpecificErrorBinds(getErrorBindings(this._inputsWrapper));
    };
    ArrayManagerItem.prototype._unlinkScreen = function () {
        this._screen.removeDynamicWidgets(this.screenWidgets);
    };
    ArrayManagerItem.prototype._linkToForm = function () {
        this.formInputs = this._form.addDynamicInputs(this._inputsWrapper);
        this._form.registerBoundedErrorElements();
        this.formWidgets = this._form.addDynamicWidgets(this._inputsWrapper);
    };
    ArrayManagerItem.prototype._unlinkForm = function () {
        this._form.removeDynamicWidgets(this.formWidgets);
        this._form.registerBoundedErrorElements();
        this._form.removeDynamicInputs(this.formInputs);
    };
    return ArrayManagerItem;
}());
exports.ArrayManagerItem = ArrayManagerItem;
var ArrayManagerWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayManagerWidget, _super);
    function ArrayManagerWidget(_form, el) {
        var _this = _super.call(this, _form, el, false) || this;
        _this.onDispose = new Array();
        _this._items = [];
        var templates = _this.templateElement.querySelectorAll('template');
        _this._inputsTemplate = templates[0];
        _this._buttonsTemplate = templates[1];
        if (!_this._inputsTemplate && console && console.warn)
            console.warn('gigya: Array Manager is provided with invalid template');
        _this._minimumItems = Number(_this.params['minimum']) || 1;
        _this._fieldsNames = Array.prototype.slice
            .call(_this._inputsTemplate.content.querySelectorAll(exports.ArrayManager_CONST.formElSelector))
            .map(function (i) { return _this._form.getNormalizedFieldName(i.getAttribute('name')); });
        _this._storeAsArrayRoots = Array.prototype.slice
            .call(_this._inputsTemplate.content.querySelectorAll("[" + FormInput_1.FormInput_CONSTS.arrayRootAttribute + "]"))
            .map(function (i) { return i.getAttribute(FormInput_1.FormInput_CONSTS.arrayRootAttribute); });
        return _this;
    }
    ArrayManagerWidget.prototype.createInputsWrapper = function () {
        return document.importNode(this._inputsTemplate.content, true);
    };
    ArrayManagerWidget.prototype.attachRemoveButton = function (item) {
        var _this = this;
        var listener = function () { return _this.removeItem(item.getID()); }, button = this._getButton('remove', listener);
        item.onDispose.push(function () { return button.removeEventListener('click', listener); });
        return button;
    };
    ArrayManagerWidget.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        this._arrayContainer = this.instanceElement.querySelector(exports.ArrayManager_CONST.containerSelector);
        var addListener = function () { return _this.addItem(); };
        this._addButton = this._getButton('add', addListener);
        this.onDispose.push(function () { return _this._addButton.removeEventListener('click', addListener); });
        this._arrayRootName = this._arrayContainer.getAttribute('name');
        //Arrange pre-populate data fields
        var populateData = this._form.prePopulateData(), arrayRoot = window.gigya.utils.object.getPropertyBySerializedName(populateData, this._arrayRootName, false);
        var len = this._minimumItems;
        if (arrayRoot && arrayRoot instanceof Array) {
            len = Math.max(this._minimumItems, arrayRoot.length);
        }
        for (var i = 0; i < len; i++) {
            this.addItem();
        }
    };
    ArrayManagerWidget.prototype.unlinkInstanceElement = function () {
        var _this = this;
        this._items.forEach(function (item) {
            _this._screen.removeSpecificErrorBinds(item.boundedErrors);
            _this._form.registerBoundedErrorElements();
            item.dispose();
        });
        this._items = [];
        this.onDispose.forEach(function (cb) { return cb(); });
        _super.prototype.unlinkInstanceElement.call(this);
    };
    ArrayManagerWidget.prototype.addItem = function () {
        var item = new ArrayManagerItem(this, this._items.length);
        this._arrayContainer.appendChild(item.getContainer());
        item.attachAddButton(this._addButton);
        item.linkInstance();
        this._items.push(item);
        this._applyCurrentState();
    };
    ArrayManagerWidget.prototype.removeItem = function (itemID) {
        var removeIndex = -1, itemToRemove = null;
        utils_1.Some(this._items, function (item, i) {
            if (item.getID() === itemID) {
                removeIndex = i;
                itemToRemove = item;
                return true;
            }
            return false;
        });
        if (!itemToRemove)
            return;
        this._screen.removeSpecificErrorBinds(itemToRemove.boundedErrors);
        this._form.registerBoundedErrorElements();
        this._items.splice(removeIndex, 1);
        this._reindexItems(removeIndex);
        itemToRemove.dispose();
        if (this._items.length > 0) {
            this._items[this._items.length - 1].attachAddButton(this._addButton);
        }
        this._applyCurrentState();
    };
    ArrayManagerWidget.prototype.getFieldsNames = function () {
        return this._fieldsNames;
    };
    ArrayManagerWidget.prototype.getStoreAsArrayRoots = function () {
        return this._storeAsArrayRoots;
    };
    ArrayManagerWidget.prototype._reindexItems = function (startIndex) {
        for (var i = startIndex; i < this._items.length; ++i) {
            this._items[i].setIndex(i);
        }
    };
    ArrayManagerWidget.prototype._applyCurrentState = function () {
        if (this._items.length <= this._minimumItems) {
            window.gigya.utils.DOM.addClassToElement(this._arrayContainer, exports.ArrayManager_CONST.deleteDisabledClass);
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(this._arrayContainer, exports.ArrayManager_CONST.deleteDisabledClass);
        }
        this._screenSet.centerModal();
    };
    ArrayManagerWidget.prototype.getRootName = function () {
        return this._arrayRootName;
    };
    ArrayManagerWidget.prototype.update = function () {
        this._arrayRootName = this._arrayContainer.getAttribute('name');
        this._items.forEach(function (item) { return item.update(); });
    };
    ArrayManagerWidget.prototype._getButton = function (type, listener) {
        var btn = document.importNode(this._buttonsTemplate.content.querySelectorAll(exports.ArrayManager_CONST[type + "ButtonSelector"])[0], true);
        if (listener) {
            btn.addEventListener('click', listener);
        }
        return btn;
    };
    ArrayManagerWidget.CONSTS = exports.ArrayManager_CONST;
    return ArrayManagerWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.ArrayManagerWidget = ArrayManagerWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(ArrayManagerWidget);
function getErrorBindings(container) {
    var boundedElements = [], binds = Array.prototype.slice
        .call(container.querySelectorAll("[" + ErrorDisplayElement_1.ErrorDisplayElement_CONSTS.boundedTo + "]"))
        .map(function (el) { return el.getAttribute(ErrorDisplayElement_1.ErrorDisplayElement_CONSTS.boundedTo); });
    utils_1.ForEach(ErrorDisplayElement_1.ErrorDisplayElement_CONSTS.gigyaClasses, function (gigyaClass) {
        var bindedSelectors = [];
        binds.forEach(function (bindID) {
            bindedSelectors.push("." + gigyaClass + "[" + ErrorDisplayElement_1.ErrorDisplayElement_CONSTS.boundedTo + "=\"" + bindID + "\"]");
        });
        boundedElements = boundedElements.concat(Array.prototype.slice.call(container.querySelectorAll(bindedSelectors.join(','))));
    });
    return boundedElements;
}
exports.getErrorBindings = getErrorBindings;
function addIndex(original, arrayRoot, index) {
    if (!original || !arrayRoot)
        return '';
    original = original.replace(exports.ArrayManager_CONST.indexMatcher, '');
    var baseArrayRoot = arrayRoot.replace(exports.ArrayManager_CONST.indexMatcher, '');
    return arrayRoot + "[" + index + "]." + original.substr(baseArrayRoot.length + 1);
}
exports.addIndex = addIndex;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/BindingWidget.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/BindingWidget.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var TranslatedWidget_1 = __webpack_require__(/*! ./TranslatedWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget.ts");
exports.Binding_CONSTS = {
    selector: '*[data-binding]',
    dataBindingAttribute: 'data-binding',
};
utils_1.DeepFreeze(exports.Binding_CONSTS);
var BindingWidget = /** @class */ (function (_super) {
    tslib_1.__extends(BindingWidget, _super);
    function BindingWidget(_screen, el) {
        var _this = 
        // Turn resetCSS off.
        _super.call(this, _screen, el, false) || this;
        _this.deps = [TranslatedWidget_1.TranslatedWidget];
        return _this;
    }
    BindingWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.supportInterpolation = this.templateElement.getAttribute(BindingWidget.CONSTS.dataBindingAttribute) == 'true';
        this.originalString = this.instanceElement.innerHTML;
        this.lastValue = null;
        this.updateValue();
    };
    BindingWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.updateValue();
    };
    BindingWidget.prototype.getBindingKey = function () {
        return this.originalString;
    };
    /**
     * Get Value from apiData
     */
    BindingWidget.prototype.getValue = function () {
        return this.evaluate(this.getBindingKey());
    };
    /**
     * Set bounded text.
     */
    BindingWidget.prototype.updateValue = function () {
        var value = this.getValue();
        if (value && this.lastValue !== value) {
            this.unlinkWidgets();
            this.lastValue = value.replace('undefined', '');
            this.instanceElement.innerHTML = this.lastValue;
            this.linkWidgets();
        }
    };
    BindingWidget.prototype.evaluate = function (text) {
        if (text === void 0) { text = ''; }
        var basicMatcher = /{{(.*?)}}/g, splitter = /({{.*?}})/g, placeholder = /'{{(.*?)}}'/g;
        if (!text.match(basicMatcher) || !this.supportInterpolation)
            return text;
        return this.evaluateExpression({
            ignoreError: true,
            condition: text
                .split(splitter)
                .map(function (p) { return "'" + p + "'"; })
                .join(' + ')
                .replace(/(\r\n|\n|\r)/gm, '')
                .replace(placeholder, '$1'),
        });
    };
    BindingWidget.CONSTS = exports.Binding_CONSTS;
    return BindingWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.BindingWidget = BindingWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(BindingWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/CaptchaWidget.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/CaptchaWidget.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var BaseCaptchaHandler_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts");
var RegisterForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm.ts");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
exports.CaptchaWidget_CONSTS = {
    selector: 'div.gigya-captcha',
};
var CaptchaWidget = /** @class */ (function (_super) {
    tslib_1.__extends(CaptchaWidget, _super);
    function CaptchaWidget(form, el) {
        var _this = _super.call(this, form, el) || this;
        _this._index = form._screen._captchas.length;
        form._screen._captchas.push(_this);
        var handlerConfig = window.gigya.utils.object.merge([
            _this.params,
            {
                lang: _this._screenSet.params['lang'],
                mode: form instanceof RegisterForm_1.RegisterForm ? BaseCaptchaHandler_1.CaptchaMode.Invisible : BaseCaptchaHandler_1.CaptchaMode.Visible,
            },
        ]);
        var activeHandler = BaseCaptchaHandler_1.CaptchaHandlers[window.gigya.partnerSettings.captchaProvider];
        if (activeHandler && typeof activeHandler === 'function') {
            _this._captchaHandler = new activeHandler(handlerConfig);
        }
        else {
            throw new Error("[Gigya]: unsupported captcha provider");
        }
        return _this;
    }
    CaptchaWidget.prototype.linkInstanceElement = function (parent) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var initResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.linkInstanceElement.call(this, parent);
                        return [4 /*yield*/, this._captchaHandler.init(this.instanceElement)];
                    case 1:
                        initResponse = _a.sent();
                        if (!initResponse) {
                            this.unlinkInstanceElement();
                            this._form._screen._captchas.splice(this._index, 1);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CaptchaWidget.prototype.isHidden = function () {
        return utils_1.isHidden(this.instanceElement);
    };
    CaptchaWidget.prototype.reload = function () {
        this._captchaHandler.reset();
    };
    CaptchaWidget.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._captchaHandler.getToken()];
            });
        });
    };
    CaptchaWidget.CONSTS = exports.CaptchaWidget_CONSTS;
    return CaptchaWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.CaptchaWidget = CaptchaWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(CaptchaWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ConsentWidget.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ConsentWidget.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
exports.Consent_CONSTS = {
    selector: 'div.gigya-consent',
};
utils_1.DeepFreeze(exports.Consent_CONSTS);
var ConsentWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ConsentWidget, _super);
    function ConsentWidget(_form, el) {
        // Turn resetCSS off.
        return _super.call(this, _form, el, false) || this;
    }
    ConsentWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.loadWidget();
    };
    ConsentWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.loadWidget();
    };
    ConsentWidget.prototype.loadWidget = function () {
        var accountInfo = this._screenSet.getApiData().getAccountInfo;
        var termName = this.instanceElement.getAttribute('name');
        var consent = window.gigya.utils.object.expressionHelper(accountInfo).getField(termName);
        if (consent && consent.isConsentGranted === true) {
            var docId = consent.docDate ? this.formatTime(consent.docDate) : consent.docVersion;
            var lastConsentModified = this.formatTime(consent.lastConsentModified);
            this.instanceElement.innerHTML = window.gigya.utils.templates.fill(this._screenSet.getTemplates().consent, {
                label: this.instanceElement.getAttribute('data-label'),
                docId: docId,
                approvedOnLabel: this.instanceElement.getAttribute('data-approved-on-label') || 'Approved on',
                approved: lastConsentModified,
            });
        }
    };
    ConsentWidget.prototype.formatTime = function (dateString) {
        var date = Date.parse(dateString); // returns NaN if it can't parse
        return isNaN(date) ? '' : new Date(date).toLocaleDateString();
    };
    ConsentWidget.CONSTS = exports.Consent_CONSTS;
    return ConsentWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.ConsentWidget = ConsentWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(ConsentWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ContainerWidget.ts":
/*!********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ContainerWidget.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
exports.ContainerWidget_CONSTS = {
    selector: 'div.gigya-container',
    activeClass: 'gigya-container-enabled',
    emptyFields: 'data-empty-fields',
    displayCap: 'data-display-cap',
    displayFreq: 'data-display-freq',
    loginIdentities: 'data-login-idenities',
    conditionAttr: 'data-condition',
    onRenderAttr: 'data-on-render',
};
utils_1.DeepFreeze(exports.ContainerWidget_CONSTS);
var ContainerWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerWidget, _super);
    function ContainerWidget(_form, el) {
        var _this = _super.call(this, _form, el, false) || this;
        _this.onElementChange = function () { return _this.refresh(); };
        _this.name = el.getAttribute('name');
        _this.emptyFields = el.getAttribute(exports.ContainerWidget_CONSTS.emptyFields);
        if (_this.emptyFields)
            _form._autoSkipContainers.push(_this);
        if (_this.name && (el.getAttribute(exports.ContainerWidget_CONSTS.displayCap) || el.getAttribute(exports.ContainerWidget_CONSTS.displayFreq)))
            _form._needContainerHistory = true;
        _this.update(el);
        return _this;
    }
    ContainerWidget.prototype.update = function (el) {
        if (el === void 0) { el = this.instanceElement; }
        this.renderingConditions = registeredConditions(el, conditionSets.rendering);
        this.validationConditions = registeredConditions(el, conditionSets.validation);
    };
    ContainerWidget.prototype.checkAutoSkip = function () {
        return !dataEmptyFields(this.emptyFields, this);
    };
    ContainerWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        var shouldDisplay = this.testRendering();
        this.originalRenderingStatus = this.conditionStatus = shouldDisplay;
        if (this.originalRenderingStatus) {
            this.onElementChange();
        }
    };
    ContainerWidget.prototype.refresh = function () {
        var shouldDisplay = (this.validationPassed = this.testValidations());
        this.conditionStatus = this.originalRenderingStatus && shouldDisplay;
        if (this.conditionStatus) {
            window.gigya.utils.DOM.addClassToElement(this.instanceElement, exports.ContainerWidget_CONSTS.activeClass);
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, exports.ContainerWidget_CONSTS.activeClass);
        }
    };
    ContainerWidget.prototype.testRendering = function () {
        return this.testContainer(this.renderingConditions);
    };
    ContainerWidget.prototype.testValidations = function () {
        return this.testContainer(this.validationConditions);
    };
    ContainerWidget.prototype.testContainer = function (conditions) {
        var _this = this;
        // Testing if there's an empty required field in the container (stronger than all tests except those that override it)
        var fields = {
            hasRequiredEmptyFields: this.containsEmptyRequiredFields(),
        };
        var filterResults = utils_1.Every(conditions, function (cond) { return cond(_this, fields); });
        return fields.hasRequiredEmptyFields || filterResults;
    };
    ContainerWidget.prototype.containsEmptyRequiredFields = function () {
        var _this = this;
        if (!this._form.isPopulated)
            return false;
        var fields = utils_1.getElementsByHavingAttribute(this.instanceElement, '*', FormInput_1.FormInput_CONSTS.fieldName);
        var containsRequired = utils_1.Some(fields, function (field) {
            var fieldName = field.getAttribute(FormInput_1.FormInput_CONSTS.fieldName);
            if (fieldName) {
                var isRequired = _this._form.isRequiredField(fieldName);
                if (isRequired && !field.value)
                    return true;
            }
            return false;
        });
        return containsRequired;
    };
    ContainerWidget.prototype.getHistoryFromSettings = function () {
        var apiData = this._screenSet.getApiData();
        if (!this.name)
            return null;
        if (!apiData.getUserSettings || apiData.getUserSettings.errorCode > 0)
            return null;
        var containerHistories = apiData.getUserSettings.settings;
        if (!containerHistories)
            return null;
        var history = containerHistories[this.name] || {};
        if (!history.displayCount)
            history.displayCount = 0;
        if (!history.lastDisplay)
            history.lastDisplay = -1;
        return history;
    };
    ContainerWidget.prototype.saveHistoryInSettings = function (history) {
        var apiData = this._screenSet.getApiData();
        if (!apiData.getUserSettings || apiData.getUserSettings.errorCode > 0)
            return null;
        var containerHistories = apiData.getUserSettings.settings;
        if (!containerHistories)
            return null;
        containerHistories[this.name] = history;
        var settings = {};
        settings[this.name] = {
            displayCount: history.displayCount,
            lastDisplay: history.lastDisplay,
        };
        window.gigya.socialize.setUserSettings({
            group: 'gigya_container_history-' + this._form.ID,
            regToken: this._screenSet.data.regToken,
            settings: settings,
            disableLocalSettings: true,
        });
    };
    ContainerWidget.prototype.evaluateConditionalAttributes = function () {
        this.update(this.instanceElement);
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.emptyFields = this.instanceElement.getAttribute(exports.ContainerWidget_CONSTS.emptyFields);
        if (this.originalRenderingStatus) {
            this.onElementChange();
        }
    };
    ContainerWidget.prototype.hasConditionalAttributes = function () {
        return true;
    };
    ContainerWidget.CONSTS = exports.ContainerWidget_CONSTS;
    return ContainerWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.ContainerWidget = ContainerWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(ContainerWidget);
function registeredConditions(el, conditionSet) {
    function bindCondition(value, condition, oneTime) {
        if (oneTime === void 0) { oneTime = false; }
        return function (container, fields) { return condition(value, container, oneTime); };
    }
    function bindOverriteFieldsCondition(value, condition) {
        return function (container, fields) {
            var result = condition(value, container);
            if (!result)
                fields.hasRequiredEmptyFields = false;
            return result;
        };
    }
    var selectedConditions = new Array();
    utils_1.ForEachProp(conditionSet, function (condition, attr) {
        if (el.getAttribute(attr)) {
            var value = el.getAttribute(attr);
            var oneTimeCondition = false;
            if (value && el.getAttribute(ContainerWidget.CONSTS.onRenderAttr) == 'true') {
                oneTimeCondition = true;
            }
            if (condition['overwriteFields'])
                selectedConditions.push(bindOverriteFieldsCondition(value, condition));
            else
                selectedConditions.push(bindCondition(value, condition, oneTimeCondition));
        }
    });
    return selectedConditions;
}
function dataDomains(value) {
    var allowedDomains = value.split(',');
    return utils_1.Some(allowedDomains, function (domain) { return window.gigya.pluginUtils.domain.isInDomain(domain); });
}
function dataApikeys(value) {
    var apikeys = value.split(',');
    return window.gigya.utils.array.indexOf(apikeys, window.gigya.thisScript.APIKey) != -1;
}
function dataProb(value, container) {
    // Show container based on probability
    return container._screenSet._random <= parseFloat(value);
}
function dataAfterDate(value) {
    var timeValue = window.gigya.global.date.getISODate(value); // Partner place date in ISO format
    return new Date().getTime() > timeValue.getTime();
}
function dataBeforeDate(value) {
    var timeValue = window.gigya.global.date.getISODate(value); // Partner place date in ISO format
    return new Date().getTime() <= timeValue.getTime();
}
function dataDisplayCap(value, container) {
    var containerHistory = container.getHistoryFromSettings();
    if (!containerHistory)
        return false;
    if (value <= containerHistory.displayCount)
        return false;
    if (!containerHistory.wasUpdated) {
        containerHistory.displayCount++;
        containerHistory.wasUpdated = true;
        container.saveHistoryInSettings(containerHistory);
    }
    return true;
}
function dataDisplayFreq(value, container) {
    var containerHistory = container.getHistoryFromSettings();
    if (!containerHistory)
        return false;
    var now = new Date().getTime();
    var timePassed = (now - containerHistory.lastDisplay) / 1000; // Miliseconds -> seconds
    if (containerHistory.lastDisplay !== -1 && value >= timePassed)
        return false;
    if (!containerHistory.wasUpdated) {
        containerHistory.lastDisplay = now;
        containerHistory.wasUpdated = true;
        container.saveHistoryInSettings(containerHistory);
    }
    return true;
}
function dataEmptyFields(value, container) {
    // TODO perhaps get the field instances from the form
    var checkEmptyFields = new Array();
    if (value === '*') {
        // all fields
        var inputs = utils_1.getElementsByHavingAttribute(container.instanceElement, '*', FormInput_1.FormInput_CONSTS.fieldName);
        utils_1.ForEach(inputs, function (i) {
            var name = i.getAttribute(FormInput_1.FormInput_CONSTS.fieldName);
            if (name)
                checkEmptyFields.push(i);
        });
    }
    else {
        // named fields
        utils_1.ForEach(value.split(','), function (fieldName) {
            var field = window.gigya.utils.DOM.getElementsByAttribute(container.instanceElement, '*', FormInput_1.FormInput_CONSTS.fieldName, fieldName)[0];
            checkEmptyFields.push(field);
        });
    }
    return utils_1.Some(checkEmptyFields, function (field) { return !field.value; });
}
var SpecialProviders;
(function (SpecialProviders) {
    SpecialProviders[SpecialProviders["social"] = 0] = "social";
    SpecialProviders[SpecialProviders["site"] = 1] = "site";
    SpecialProviders[SpecialProviders["siteOnly"] = 2] = "siteOnly";
    SpecialProviders[SpecialProviders["socialOnly"] = 3] = "socialOnly";
    SpecialProviders[SpecialProviders["siteAndSocial"] = 4] = "siteAndSocial";
    SpecialProviders[SpecialProviders["site-only"] = 2] = "site-only";
    SpecialProviders[SpecialProviders["social-only"] = 3] = "social-only";
    SpecialProviders[SpecialProviders["site-and-social"] = 4] = "site-and-social";
})(SpecialProviders = exports.SpecialProviders || (exports.SpecialProviders = {}));
utils_1.DeepFreeze(SpecialProviders);
loginIdentities['overwriteFields'] = true;
function loginIdentities(value, container) {
    var allowedProviders = value.split(',');
    var loginProvidersList = container._form.getLoginProviders();
    var site = utils_1.Some(allowedProviders, function (p) { return p === SpecialProviders[SpecialProviders.site]; });
    var anySocial = utils_1.Some(allowedProviders, function (p) { return p === SpecialProviders[SpecialProviders.social]; });
    var siteOnly = utils_1.Some(allowedProviders, function (p) { return p === SpecialProviders[SpecialProviders.siteOnly]; });
    var socialOnly = utils_1.Some(allowedProviders, function (p) { return p === SpecialProviders[SpecialProviders.socialOnly]; });
    var siteAndSocial = utils_1.Some(allowedProviders, function (p) { return p === SpecialProviders[SpecialProviders.siteAndSocial]; });
    var hasSocial;
    var hasSite;
    var loginProviders;
    if (typeof loginProvidersList !== 'string') {
        // no list everything is allowed, specific options will fail
        loginProviders = [];
        hasSocial = hasSite = true;
    }
    else {
        loginProviders = loginProvidersList.split(',');
        hasSocial = utils_1.Some(loginProviders, function (p) { return p !== SpecialProviders[SpecialProviders.site]; });
        hasSite = utils_1.Some(loginProviders, function (p) { return p === SpecialProviders[SpecialProviders.site]; });
    }
    if (siteOnly)
        return hasSite && !hasSocial;
    if (socialOnly)
        return hasSocial && !hasSite;
    if (siteAndSocial)
        return hasSite && hasSocial;
    if (anySocial)
        return hasSocial;
    if (site)
        return hasSite;
    var hasMatchingProvider = utils_1.Some(allowedProviders, function (ap) { return utils_1.Some(loginProviders, function (lp) { return lp === ap; }); });
    return hasMatchingProvider;
}
function dataCondition(value, container, oneTime) {
    if (oneTime === void 0) { oneTime = false; }
    if (oneTime && container.validationPassed) {
        return true;
    }
    return Boolean(container.evaluateExpression({ condition: value }));
}
var conditionSets = {
    rendering: {
        'data-domains': dataDomains,
        'data-apikeys': dataApikeys,
        'data-prob': dataProb,
        'data-after-date': dataAfterDate,
        'data-before-date': dataBeforeDate,
        'data-display-cap': dataDisplayCap,
        'data-display-freq': dataDisplayFreq,
        'data-empty-fields': dataEmptyFields,
        'data-login-identities': loginIdentities,
    },
    validation: {
        'data-condition': dataCondition,
    },
};


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ImageWidget.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ImageWidget.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var ScreenSetPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin.ts");
exports.Image_CONSTS = {
    selector: 'div.gigya-image',
    srcAttribute: 'data-src',
    widthAttribute: 'data-width',
    heightAttribute: 'data-height',
    backgroundSizeAttribute: 'data-background-size',
};
utils_1.DeepFreeze(exports.Image_CONSTS);
var ImageWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ImageWidget, _super);
    function ImageWidget(_form, el) {
        // Turn resetCSS off.
        return _super.call(this, _form, el, false) || this;
    }
    ImageWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.setBackgroundImage();
    };
    ImageWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        // Handle case where attributes are updated via conditional attr.
        this.setBackgroundImage();
    };
    /**
     * Set background image and handle HTTPS proxying.
     */
    ImageWidget.prototype.setBackgroundImage = function () {
        var el = this.instanceElement;
        // Get attributes from elements.
        var src = el.getAttribute(ImageWidget.CONSTS.srcAttribute);
        var width = el.getAttribute(ImageWidget.CONSTS.widthAttribute);
        var height = el.getAttribute(ImageWidget.CONSTS.heightAttribute);
        var backgroundSize = el.getAttribute(ImageWidget.CONSTS.backgroundSizeAttribute);
        // Hide element if no src provided.
        if (!src) {
            window.gigya.utils.DOM.addClassToElement(this.instanceElement, ScreenSetPlugin_1.ScreenSet_CONSTS.gigyaHidden);
            return;
        }
        window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, ScreenSetPlugin_1.ScreenSet_CONSTS.gigyaHidden);
        // Set width and height.
        if (width) {
            el.style.width = this.getSize(width);
        }
        if (height) {
            el.style.height = this.getSize(height);
        }
        // Set default background size if none set.
        if (!backgroundSize) {
            el.setAttribute(ImageWidget.CONSTS.backgroundSizeAttribute, 'fit');
        }
        // Since this is processed on every conditional expression, we don't want to re-calculate secure photo URLs every time.
        // The CDN rotates and we'll get a new URL each time, leading to the image being reloaded.
        if (this.prevSrc !== src) {
            this.prevSrc = src;
            // Avoid both HTTPS and embedded images.
            if (window.gigya.localInfo.protocol === 'https' && src.indexOf('http://') === 0) {
                src = window.gigya.global.getPhotoURL(src);
            }
            // Set background image.
            el.style.backgroundImage = "url(\"" + src + "\")";
        }
    };
    /**
     * Translate width/height to CSS-ready value.
     */
    ImageWidget.prototype.getSize = function (size) {
        var sizeNumber = Number(size);
        if (isNaN(sizeNumber)) {
            // Size included dimension already.
            return size;
        }
        else {
            // Just a number was passed. Add "px" to it.
            return size + 'px';
        }
    };
    ImageWidget.CONSTS = exports.Image_CONSTS;
    return ImageWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.ImageWidget = ImageWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(ImageWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/LogInAvailabilityWidget.ts":
/*!****************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/LogInAvailabilityWidget.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
exports.LoginAvailabilityWidget_CONSTS = {
    selector: 'div.gigya-loginID-availability',
    boundTo: 'data-bound-to',
};
utils_1.DeepFreeze(exports.LoginAvailabilityWidget_CONSTS);
var LoginAvailabilityWidget = /** @class */ (function (_super) {
    tslib_1.__extends(LoginAvailabilityWidget, _super);
    function LoginAvailabilityWidget(form, el) {
        var _this = _super.call(this, form, el) || this;
        _this.init(form, el);
        return _this;
    }
    LoginAvailabilityWidget.prototype.init = function (form, el) {
        var _this = this;
        this.loginIdStateListener = function (state) { return _this.onLoginIdStateChange(state, true); };
        this.originalDisplay = el.style.display;
        this.reset(el);
    };
    LoginAvailabilityWidget.prototype.reset = function (el) {
        this.boundedField =
            this._form.getField(el.getAttribute(LoginAvailabilityWidget.CONSTS.boundTo)) ||
                this._form.getField('loginID') ||
                this._form.getField('username') ||
                this._form.getField('email');
        if (this.boundedField) {
            this.boundedField['_serverValidateAvaliability'] = true; // trigger the server validation of the loginId
            this.boundedField.addValidityStateListener(this.loginIdStateListener);
        }
        else {
            this.warn(exports.LoginAvailabilityWidget_CONSTS.selector + ' is missing a field to bound to');
        }
    };
    LoginAvailabilityWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.boundedField)
            this.onLoginIdStateChange(this.boundedField.getValidityState(), false);
    };
    LoginAvailabilityWidget.prototype.unlinkTemplate = function () {
        if (this.boundedField)
            this.boundedField.removeValidityStateListener(this.loginIdStateListener);
        _super.prototype.unlinkTemplate.call(this);
    };
    LoginAvailabilityWidget.prototype.onLoginIdStateChange = function (state, fromServer) {
        if (!fromServer)
            // treat local validations as no relevant to widget
            state = FormInput_1.ValidityStates._undefined;
        if (!this.instanceElement)
            return;
        window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, 'gigya-loginID-availability-progress');
        window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, 'gigya-loginID-availability-not-available');
        window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, 'gigya-loginID-availability-available');
        switch (state) {
            case FormInput_1.ValidityStates.valid:
                this.instanceElement.style.display = this.originalDisplay;
                this.instanceElement.innerHTML = this._screenSet.getText('available');
                window.gigya.utils.DOM.addClassToElement(this.instanceElement, 'gigya-loginID-availability-available');
                break;
            case FormInput_1.ValidityStates.error:
                this.instanceElement.style.display = this.originalDisplay;
                this.instanceElement.innerHTML = this._screenSet.getText('not_available');
                window.gigya.utils.DOM.addClassToElement(this.instanceElement, 'gigya-loginID-availability-not-available');
                break;
            case FormInput_1.ValidityStates.pending:
                this.instanceElement.style.display = this.originalDisplay;
                this.instanceElement.innerHTML = this._screenSet.getText('checking');
                window.gigya.utils.DOM.addClassToElement(this.instanceElement, 'gigya-loginID-availability-progress');
                break;
            default:
                this.instanceElement.innerHTML = '';
                this.instanceElement.style.display = 'none';
                break;
        }
    };
    LoginAvailabilityWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        /// if [for some reason] this widget need to support conditional attrs...
        // this.reset(this.instanceElement);
    };
    LoginAvailabilityWidget.CONSTS = exports.LoginAvailabilityWidget_CONSTS;
    return LoginAvailabilityWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.LoginAvailabilityWidget = LoginAvailabilityWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(LoginAvailabilityWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/MyPhotoWidget.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/MyPhotoWidget.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var nextGeneratedContainerId = 0;
exports.MyPhotoWidget_CONSTS = {
    selector: 'div.gigya-myPhoto',
};
utils_1.DeepFreeze(exports.MyPhotoWidget_CONSTS);
var MyPhotoWidget = /** @class */ (function (_super) {
    tslib_1.__extends(MyPhotoWidget, _super);
    function MyPhotoWidget(_screen, el) {
        var _this = _super.call(this, _screen, el) || this;
        _this.containerId = _this._screenSet.containerID + '_myPhoto_' + nextGeneratedContainerId++;
        return _this;
    }
    MyPhotoWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            if (this.instanceElement)
                this.instanceElement.innerHTML = '<div id="' + this.containerId + '"></div>';
            if (!this.params['containerID']) {
                this.widgetParams = this.params;
                this.renderWidget();
            }
        }
    };
    MyPhotoWidget.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement)
            this.instanceElement.innerHTML = ''; // To make sure no ID conflicts will be generated
        if (this._instance)
            this._instance.dispose();
        _super.prototype.unlinkInstanceElement.call(this);
    };
    MyPhotoWidget.prototype.renderWidget = function () {
        var _this = this;
        //re-render the plugin with the new new conditional values.
        window.gigya.accounts.showMyPhotoUI(this.widgetParams, {
            containerID: this.containerId,
            lang: this._screenSet.lang,
            regToken: this._screenSet.params['regToken'],
            getInstance: function (instance) {
                _this._instance = instance;
            },
            onLoad: function () {
                _this._screenSet.centerModal();
            },
        });
        this.renderWidgetUI = false;
    };
    MyPhotoWidget.CONSTS = exports.MyPhotoWidget_CONSTS;
    return MyPhotoWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.MyPhotoWidget = MyPhotoWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(MyPhotoWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget.ts":
/*!***************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
exports.DisplayModes = {
    policy: {
        hasMinimumRequirements: true,
        hasStrengthMeter: false,
        getTemplate: function (templates) {
            return templates.passwordStrength_minimumRequirements;
        },
    },
    meter: {
        hasMinimumRequirements: false,
        hasStrengthMeter: true,
        getTemplate: function (templates) {
            return templates.passwordStrength_strengthMeter;
        },
    },
    combined: {
        hasMinimumRequirements: true,
        hasStrengthMeter: true,
        getTemplate: function (templates) {
            return templates.passwordStrength_strengthMeter + templates.passwordStrength_minimumRequirements;
        },
    },
};
var BubbleOrientations;
(function (BubbleOrientations) {
    BubbleOrientations[BubbleOrientations["right"] = 0] = "right";
    BubbleOrientations[BubbleOrientations["left"] = 1] = "left";
    BubbleOrientations[BubbleOrientations["up"] = 2] = "up";
    BubbleOrientations[BubbleOrientations["down"] = 3] = "down";
    BubbleOrientations[BubbleOrientations["none"] = 4] = "none";
})(BubbleOrientations = exports.BubbleOrientations || (exports.BubbleOrientations = {}));
utils_1.DeepFreeze(BubbleOrientations);
exports.PasswordStrengthWidget_CONSTS = {
    selector: 'div.gigya-password-strength',
    bubbleClass: 'gigya-password-strength-bubble',
    mobileClass: 'mobile-bubble',
    desktopClass: 'desktop-bubble',
    displayMode: 'data-display-mode',
    bubble: 'data-on-focus-bubble',
    bubbleOrientation: 'data-bubble-orientation',
};
utils_1.DeepFreeze(exports.PasswordStrengthWidget_CONSTS);
var PasswordStrengthWidget = /** @class */ (function (_super) {
    tslib_1.__extends(PasswordStrengthWidget, _super);
    function PasswordStrengthWidget(form, el) {
        var _this = _super.call(this, form, el) || this;
        _this.bubbleLastTop = '';
        _this.originalClass = el.className;
        _this.originalStyle = el.getAttribute('style');
        _this.originalDisplay = el.style.display;
        el.style.display = 'none';
        // Automatically bound to the form password field
        _this._passwordField = form.getField('newPassword') || form.getField('password');
        if (!_this._passwordField) {
            _this.warn(exports.PasswordStrengthWidget_CONSTS.selector + "'s form is missing password field to bound to");
            return _this;
        }
        _this.getText = function (t) { return _this._screenSet.getText(t); };
        _this.displayMode = exports.DisplayModes[el.getAttribute(exports.PasswordStrengthWidget_CONSTS.displayMode)] || exports.DisplayModes['combined'];
        _this.template = window.gigya.utils.templates.fill(_this._screenSet.getTemplates().passwordStrength, {
            content: _this.displayMode.getTemplate(_this._screenSet.getTemplates()),
        });
        _this.isBubble = Boolean(el.getAttribute(exports.PasswordStrengthWidget_CONSTS.bubble));
        if (_this.isBubble) {
            _this.bubbleOrientation = BubbleOrientations[el.getAttribute(exports.PasswordStrengthWidget_CONSTS.bubbleOrientation)];
            if (typeof _this.bubbleOrientation === 'undefined')
                _this.bubbleOrientation = _this._screenSet.isModal ? BubbleOrientations.left : BubbleOrientations.up;
            _this.bubbleID = _this._screenSet.params.containerID + '_bubble';
            _this.onBlur = function () { return _this.hideBubble(); };
            _this.onFocus = function () { return _this.showBubble(); };
            _this.onScroll = function () {
                var balloonDiv = window.gigya.global['divGMBalloon'];
                if (balloonDiv && balloonDiv.style.top == _this.bubbleLastTop)
                    _this.refreshBubble();
            };
        }
        _this.fnKeyUp = function () { return _this.onPasswordChange(); };
        window.gigya.utils.DOM.addEventListener(_this._passwordField, 'keyup', _this.fnKeyUp);
        if (_this.isBubble) {
            _this._passwordField.addEventListener('focus', _this.onFocus);
            _this._passwordField.addEventListener('blur', _this.onBlur);
            window.gigya.utils.DOM.addEventListener(document, 'scroll', _this.onScroll);
        }
        _this._screenSet.onRefreshExternalComponentsEvent().add(function () {
            _this.refreshBubble();
        });
        return _this;
    }
    PasswordStrengthWidget.prototype.unlinkTemplate = function () {
        window.gigya.utils.DOM.removeEventListener(document, 'scroll', this.onScroll);
        if (this._passwordField) {
            if (this.isBubble) {
                this._passwordField.removeEventListener('blur', this.onBlur);
                this._passwordField.removeEventListener('focus', this.onFocus);
            }
            this.hideBubble();
            window.gigya.utils.DOM.removeEventListener(this._passwordField, 'keyup', this.fnKeyUp);
        }
        _super.prototype.unlinkTemplate.call(this);
    };
    PasswordStrengthWidget.prototype.showBubble = function () {
        this.instanceElement.style.display = '';
        var bubbleW = this.instanceElement.offsetWidth || 250;
        this.instanceElement.style.display = 'none';
        var bubbleClasses = exports.PasswordStrengthWidget_CONSTS.bubbleClass +
            ' ' +
            (this._screenSet.isMobileUI ? exports.PasswordStrengthWidget_CONSTS.mobileClass : exports.PasswordStrengthWidget_CONSTS.desktopClass);
        var styleCalculator = document.createElement('div');
        styleCalculator.setAttribute('style', this.instanceElement.getAttribute('style'));
        if (styleCalculator.style.display === 'none')
            styleCalculator.style.display = '';
        var bubbleHTML = '<div id="' +
            this.bubbleID +
            '_content" class="' +
            this.instanceElement.className +
            '" style="' +
            styleCalculator.getAttribute('style') +
            '">' +
            this.getPasswordBubbleContent() +
            '</div>';
        window.gigya.global.putGMBalloonNextTo(this._passwordField.instanceElement, bubbleHTML, null, bubbleW, null, true, this.bubbleID, true, this.getBubbleOrientations(), bubbleClasses);
        this.isBubbleVisible = true;
        this.bubbleLastTop = window.gigya.global['divGMBalloon'].style.top;
    };
    PasswordStrengthWidget.prototype.getBubbleOrientations = function () {
        var orientations = [BubbleOrientations[this.bubbleOrientation]];
        var first = orientations[0];
        var up = BubbleOrientations[BubbleOrientations.up];
        var down = BubbleOrientations[BubbleOrientations.down];
        // add or set up orientation
        if (typeof first === 'undefined')
            first = up;
        else if (first !== up)
            orientations.push(up);
        // add down orientation
        if (first !== down)
            orientations.push(down);
        return orientations;
    };
    PasswordStrengthWidget.prototype.hideBubble = function () {
        window.gigya.global.removeGMBalloon();
        this.isBubbleVisible = false;
    };
    PasswordStrengthWidget.prototype.getPasswordBubbleContent = function () {
        var item = {
            TEXT: this.getText,
        };
        var oPassStrength = getPasswordStrengthData(String(this._passwordField.getValue()));
        var apiData = this._screenSet.getApiData();
        var oComplexity = apiData.getPolicies ? apiData.getPolicies.passwordComplexity : null;
        if (!oComplexity)
            oComplexity = {};
        oComplexity.minLength = oComplexity.minLength || 0;
        oComplexity.minCharGroups = oComplexity.minCharGroups || 0;
        if (this.displayMode.hasStrengthMeter) {
            var score = 0;
            var scoreTextID = 'too_weak';
            if (isPasswordStrengthValid(String(this._passwordField.getValue()), oPassStrength, oComplexity)) {
                scoreTextID = 'weak';
                if (oPassStrength.length > 4)
                    score += 40;
                if (oPassStrength.length > 5)
                    score += 21; // combines score = 61
                if (oPassStrength.length > 7)
                    score += 18; // combines score = 79
                if (oPassStrength.charGroups > 1)
                    score += 21;
                if (oPassStrength.charGroups > 2)
                    score += 17; // combines score += 38
                if (oPassStrength.charGroups > 3)
                    score += 23; // combines score += 61
                if (score > 60)
                    scoreTextID = 'fair';
                if (score > 80)
                    scoreTextID = 'strong';
                if (score > 100)
                    scoreTextID = 'very_strong';
            }
            item.score = score;
            item.scoreClass = 'gigya-passwordStrength-' + scoreTextID;
            item.scoreText = this._screenSet.getText(scoreTextID);
            item.barIndicatorClass = 'gigya-passwordStrength-bar-' + scoreTextID;
        }
        if (this.displayMode.hasMinimumRequirements) {
            var arRequirements = [];
            if (oComplexity.minLength > 0) {
                var minLengthText = this._screenSet.getText('num_characters_total', '%num', oComplexity.minLength);
                if (minLengthText)
                    arRequirements.push(minLengthText);
            }
            if (oComplexity.minCharGroups > 0) {
                var minCharGroupsText = this._screenSet.getText('num_of_the_following_groups', '%num', oComplexity.minCharGroups);
                if (minCharGroupsText)
                    arRequirements.push(minCharGroupsText);
            }
            item.requirements = '';
            if (arRequirements.length > 0) {
                var lastReq = arRequirements.pop();
                item.requirements = this._screenSet.getText('password_must_contain_at_least') + ' ';
                if (arRequirements.length > 0)
                    item.requirements += arRequirements.join(', ') + ' ' + this._screenSet.getText('and') + ' ';
                item.requirements += lastReq;
            }
            item.requirements = window.gigya.pluginUtils.text.fixTextWidows(item.requirements);
        }
        return window.gigya.utils.templates.fill(this.template, item);
    };
    PasswordStrengthWidget.prototype.onPasswordChange = function () {
        var html = this.getPasswordBubbleContent();
        if (this.isBubble) {
            document.getElementById(this.bubbleID + '_content').innerHTML = html;
        }
        else {
            // inline display
            this.instanceElement.innerHTML = html;
            this.instanceElement.style.display = this.originalDisplay;
        }
    };
    PasswordStrengthWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        if (this.isBubble) {
            this.bubbleOrientation = BubbleOrientations[this.instanceElement.getAttribute(exports.PasswordStrengthWidget_CONSTS.bubbleOrientation)];
            if (typeof this.bubbleOrientation === 'undefined')
                this.bubbleOrientation = this._screenSet.isModal ? BubbleOrientations.left : BubbleOrientations.up;
        }
    };
    PasswordStrengthWidget.prototype.refreshBubble = function () {
        if (this.isBubbleVisible) {
            this.showBubble();
        }
    };
    PasswordStrengthWidget.CONSTS = exports.PasswordStrengthWidget_CONSTS;
    return PasswordStrengthWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.PasswordStrengthWidget = PasswordStrengthWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(PasswordStrengthWidget);
function passwordStrengthMatchToNumber(match) {
    if (match && match.length)
        return match.length;
    return 0;
}
function getPasswordStrengthData(pass) {
    if (!pass)
        pass = '';
    var oResult = {
        lower: passwordStrengthMatchToNumber(pass.match(/[a-z]/g)),
        upper: passwordStrengthMatchToNumber(pass.match(/[A-Z]/g)),
        digits: passwordStrengthMatchToNumber(pass.match(/\d/g)),
        specialChars: passwordStrengthMatchToNumber(pass.match(/[^\dA-Za-z]/g)),
        length: pass.length,
        charGroups: 0,
    };
    if (oResult.lower)
        oResult.charGroups++;
    if (oResult.upper)
        oResult.charGroups++;
    if (oResult.digits)
        oResult.charGroups++;
    if (oResult.specialChars)
        oResult.charGroups++;
    return oResult;
}
exports.getPasswordStrengthData = getPasswordStrengthData;
function isPasswordStrengthValid(pass, oPassStrength, oComplexityPolicy) {
    if (!pass || !oPassStrength || !oComplexityPolicy)
        return;
    if (oComplexityPolicy.regExp) {
        var regexFormat = new RegExp(oComplexityPolicy.regExp);
        return regexFormat.test(pass);
    }
    else {
        return !(oPassStrength.lower < oComplexityPolicy.minLowercase ||
            oPassStrength.upper < oComplexityPolicy.minUppercase ||
            oPassStrength.digits < oComplexityPolicy.minDigit ||
            oPassStrength.specialChars < oComplexityPolicy.minSpecialChars ||
            oPassStrength.charGroups < oComplexityPolicy.minCharGroups ||
            oPassStrength.length < oComplexityPolicy.minLength);
    }
}
exports.isPasswordStrengthValid = isPasswordStrengthValid;


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PhotoUploadWidget.ts":
/*!**********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PhotoUploadWidget.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseUploadWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget.ts");
var BaseServerWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var nextDownloadContext = 0;
exports.PhotoUploadWidget_CONSTS = {
    selector: 'div.gigya-photo-upload',
};
utils_1.DeepFreeze(exports.PhotoUploadWidget_CONSTS);
var PhotoUploadWidget = /** @class */ (function (_super) {
    tslib_1.__extends(PhotoUploadWidget, _super);
    function PhotoUploadWidget(_form, el) {
        var _this = _super.call(this, _form, el) || this;
        _this.photoElementID = _this._uploadIframeID + '_photo';
        _this.pathContainerID = _this._uploadIframeID + '_path';
        _this.defaultBGImage = window.gigya._.getCdnResource() + '/gs/i/accounts/avatar_64.png'; // TODO This should be replaced by CSS
        var template = _this._screenSet.getTemplates().photoUpload_ui;
        _this.uiHtml = window.gigya.utils.templates.fill(template, {
            pathContainerID: _this.pathContainerID,
            photoElementID: _this.photoElementID,
            choose_file: _this._screenSet.getText('choose_file'),
            no_file_chosen: _this._screenSet.getText('no_file_chosen'),
            tip: _this._screenSet.getText('maximum_size_of_3mb.') + ' JPG, GIF, PNG.',
        });
        el.innerHTML = '';
        if (window.gigya.localInfo.isIE9 || window.gigya.localInfo.isIE8) {
            _this._form.filters.push({
                filterOutWidgetsToSend: function (dataToFilter) {
                    if (dataToFilter.profile) {
                        delete dataToFilter.profile._profilePhoto;
                    }
                    return dataToFilter;
                },
            });
        }
        return _this;
    }
    PhotoUploadWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        // add instance ui
        this.uiDiv = document.createElement('div');
        this.uiDiv.innerHTML = this.uiHtml;
        this.instanceElement.appendChild(this.uiDiv);
        this.restoreDefaultBg();
    };
    PhotoUploadWidget.prototype.unlinkInstanceElement = function () {
        this.instanceElement.removeChild(this.uiDiv);
        this.uiDiv = null;
        _super.prototype.unlinkInstanceElement.call(this);
    };
    PhotoUploadWidget.prototype.restoreDefaultBg = function () {
        var elPhoto = document.getElementById(this.photoElementID);
        if (elPhoto)
            elPhoto.style.backgroundImage = "url('" + this.defaultBGImage + "')";
    };
    PhotoUploadWidget.prototype.getFormHtml = function () {
        return window.gigya.utils.templates.fill(this._screenSet.getTemplates().photoUpload_form, {
            formTarget: this._uploadIframeID,
        });
    };
    PhotoUploadWidget.prototype.getFormElement = function () {
        return this._formDiv.getElementsByTagName('form')[0];
    };
    PhotoUploadWidget.prototype.getFileElement = function () {
        return this._uploadForm.elements['_profilePhoto'];
    };
    PhotoUploadWidget.prototype.submitUploadForm = function () {
        // set up new action & responseId
        this.lastResponseId = this._uploadIframeID + '_' + this._lastQueryId;
        var formAction = window.gigya.utils.stringUtils.format("https://" + window.gigya._.getApiDomain('accounts') + "/accounts.uploadProfilePhoto?publish=true&context={0}&saveResponseID={0}&{1}", this.lastResponseId, window.gigya.utils.keyValue.serialize(this.getServerParameters()));
        this._uploadForm.action = formAction;
        // place upload image
        var pathElement = document.getElementById(this.pathContainerID);
        pathElement.style.backgroundImage = "url('" + window.gigya._.getCdnResource() + "/gs/i/accounts/smallLoader.gif')";
        _super.prototype.submitUploadForm.call(this);
    };
    PhotoUploadWidget.prototype.serverQueryDone = function (newState) {
        var _this = this;
        this.stopUploadCheck();
        // get last error from server since iframe does not report errors across domains
        var params = window.gigya.utils.object.removeUndefined(this.getServerParameters());
        params.saveResponseID = this.lastResponseId;
        params.noAuth = true;
        delete params.login_token;
        delete params.regToken;
        window.gigya._.apiAdapter.sendRequest('socialize.getSavedResponse', params, function (res) { return _this.onUploadSavedResponse(res); }, {
            jsSdkRequestId: this.lastResponseId,
        });
    };
    PhotoUploadWidget.prototype.onUploadSavedResponse = function (res) {
        var pathElement = document.getElementById(this.pathContainerID);
        pathElement.style.backgroundImage = '';
        switch (res.errorCode) {
            case GSErrors_1.GSErrors.OK:
                this.onUploadSuccess();
                break;
            case GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE: // Assume request did not reach the server due to IIS blocking large files
                this.onServerError({
                    errorCode: GSErrors_1.GSErrors.PROFILE_PHOTO_TOO_LARGE,
                    errorMessage: this._screenSet.getText('profilePhoto_fileSizeError'),
                });
                break;
            default:
                // Any other error
                this.onServerError(res);
                break;
        }
    };
    PhotoUploadWidget.prototype.onUploadSuccess = function () {
        var _this = this;
        // Get the new image from the server
        var elPath = document.getElementById(this.pathContainerID);
        if (elPath)
            elPath.style.backgroundImage = '';
        var getProfilePhotoParams = this.getServerParameters();
        getProfilePhotoParams.type = 'thumbnail';
        getProfilePhotoParams.context = this._uploadIframeID + ++nextDownloadContext;
        var img = new Image();
        var thumbnailUrlDomain = window.gigya._.getApiDomain('accounts');
        var thumbnailUrl = (getProfilePhotoParams.login_token || getProfilePhotoParams.regToken ? 'https' : window.gigya.localInfo.protocol) + "://" + thumbnailUrlDomain + "/accounts.getProfilePhoto?" + window.gigya.utils.keyValue.serialize(getProfilePhotoParams);
        img.onload = function () {
            var elPhoto = document.getElementById(_this.photoElementID);
            var imageUrl = img.src;
            if (elPhoto)
                elPhoto.style.backgroundImage = "url('" + imageUrl + "')";
            _this._form._screen.setProfilePhoto(imageUrl);
            img = img.onload = img.onerror = null; // remove memory leak
        };
        img.onerror = function () {
            _this.onServerError({
                errorCode: GSErrors_1.GSErrors.RESOURCE_NOT_FOUND,
                errorMessage: 'Profile photo inaccesible.',
            });
            _this._form._screen.setProfilePhoto('');
            img = img.onload = img.onerror = null; // remove memory leak
        };
        img.src = thumbnailUrl;
        _super.prototype.serverQueryDone.call(this, BaseServerWidget_1.ServerStates.Done);
    };
    PhotoUploadWidget.prototype.onServerError = function (response) {
        this.restoreDefaultBg();
        this._form._screen._screenSet.onScreenResponse(response, this._form);
        _super.prototype.serverQueryDone.call(this, BaseServerWidget_1.ServerStates.Error);
    };
    PhotoUploadWidget.CONSTS = exports.PhotoUploadWidget_CONSTS;
    return PhotoUploadWidget;
}(BaseUploadWidget_1.BaseUploadWidget));
exports.PhotoUploadWidget = PhotoUploadWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(PhotoUploadWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ProfilePhotoWidget.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ProfilePhotoWidget.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
exports.ProfilePhotoWidget_CONSTS = {
    selector: 'div.gigya-profile-photo',
};
utils_1.DeepFreeze(exports.ProfilePhotoWidget_CONSTS);
var ProfilePhotoWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ProfilePhotoWidget, _super);
    function ProfilePhotoWidget(_screen, el) {
        var _this = _super.call(this, _screen, el) || this;
        _screen._profilePhotos.push(_this);
        return _this;
    }
    ProfilePhotoWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        var profile = this._screenSet.getProfile();
        var thumbnailURL = profile.thumbnailURL ? window.gigya.global.getPhotoURL(profile.thumbnailURL) : '';
        this.setThumbnailUrl(thumbnailURL);
    };
    ProfilePhotoWidget.prototype.setThumbnailUrl = function (thumbnailURL) {
        this.instanceElement.innerHTML = thumbnailURL ? '<img src="' + thumbnailURL + '" />' : '';
    };
    ProfilePhotoWidget.CONSTS = exports.ProfilePhotoWidget_CONSTS;
    return ProfilePhotoWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.ProfilePhotoWidget = ProfilePhotoWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(ProfilePhotoWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/RequiredDisplayWidget.ts":
/*!**************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/RequiredDisplayWidget.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var FormInput_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var ScreenSetPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin.ts");
exports.RequiredDisplayWidget_CONSTS = {
    selector: '.gigya-required-display',
    boundTo: 'data-bound-to',
};
utils_1.DeepFreeze(exports.RequiredDisplayWidget_CONSTS);
var RequiredDisplayWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RequiredDisplayWidget, _super);
    function RequiredDisplayWidget(form, el) {
        var _this = _super.call(this, form, el) || this;
        // The asterisk may be hidden by default. We'll replace this with the gigya-hidden class.
        if (el.style.display === 'none') {
            el.style.display = '';
        }
        // WCAG: Don't read the asterisk to user when using screen reader.
        // The form element has aria-required which will convey to the user that the field is required.
        el.setAttribute('aria-hidden', 'true');
        return _this;
    }
    RequiredDisplayWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.updateVisibility();
    };
    RequiredDisplayWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        this.updateVisibility();
    };
    RequiredDisplayWidget.prototype.updateBoundedField = function (field) {
        this.boundTo = this.instanceElement.getAttribute(exports.RequiredDisplayWidget_CONSTS.boundTo);
        this.boundToField = field;
    };
    RequiredDisplayWidget.prototype.updateVisibility = function () {
        var el = this.instanceElement;
        if (el) {
            this.boundTo = el.getAttribute(exports.RequiredDisplayWidget_CONSTS.boundTo);
            if (!this.boundTo) {
                this.warn(exports.RequiredDisplayWidget_CONSTS.selector + " is missing " + exports.RequiredDisplayWidget_CONSTS.boundTo + " attribute");
                this.hide();
                return;
            }
            this.boundToField = this._form.getField(this.boundTo, this.instanceElement.getAttribute(FormInput_1.FormInput_CONSTS.arrayKeyValueAttribute));
            if (!this.boundToField) {
                this.warn(exports.RequiredDisplayWidget_CONSTS.selector + "'s form is missing field " + this.boundTo + " to bound to");
                this.hide();
                return;
            }
        }
        if (this.boundToField && this.boundToField.required()) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    RequiredDisplayWidget.prototype.show = function () {
        window.gigya.utils.DOM.removeClassFromElement(this.instanceElement, ScreenSetPlugin_1.ScreenSet_CONSTS.gigyaHidden);
    };
    RequiredDisplayWidget.prototype.hide = function () {
        window.gigya.utils.DOM.addClassToElement(this.instanceElement, ScreenSetPlugin_1.ScreenSet_CONSTS.gigyaHidden);
    };
    RequiredDisplayWidget.CONSTS = exports.RequiredDisplayWidget_CONSTS;
    return RequiredDisplayWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.RequiredDisplayWidget = RequiredDisplayWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(RequiredDisplayWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SecretQuestionWidget.ts":
/*!*************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SecretQuestionWidget.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var TemplateElement_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
exports.SecretQuestionWidget_CONSTS = {
    selector: 'div.gigya-secret-question',
    allowEmpty: 'data-allow-empty',
};
utils_1.DeepFreeze(exports.SecretQuestionWidget_CONSTS);
var SecretQuestionWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SecretQuestionWidget, _super);
    function SecretQuestionWidget(form, el) {
        var _this = _super.call(this, form, el, false) || this;
        _this.questions = new Array();
        form._secretQuestions.push(_this);
        var questionElements = el.querySelectorAll('*[name="secretQuestion"]');
        utils_1.ForEach(questionElements, function (questionEl) { return _this.questions.push(new QuestionElement(questionEl, _this)); });
        _this.answerField = form.getField('secretAnswer');
        if (!_this.answerField) {
            _this.warn(exports.SecretQuestionWidget_CONSTS.selector + "'s form is missing secretAnswer field to link to");
            return _this;
        }
        return _this;
    }
    SecretQuestionWidget.prototype.unlinkTemplate = function () {
        utils_1.ForEach(this.questions, function (q) { return q.unlinkTemplate(); });
        _super.prototype.unlinkTemplate.call(this);
    };
    SecretQuestionWidget.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            if (this.answerField)
                this.answerField.instanceElement.setAttribute(exports.SecretQuestionWidget_CONSTS.allowEmpty, '1'); // TODO perhaps use a different value
            utils_1.ForEach(this.questions, function (q) { return q.linkInstanceElement(_this.instanceElement); });
        }
    };
    SecretQuestionWidget.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement)
            utils_1.ForEach(this.questions, function (q) { return q.unlinkInstanceElement(); });
        _super.prototype.unlinkInstanceElement.call(this);
    };
    SecretQuestionWidget.prototype.setQuestion = function (question) {
        utils_1.ForEach(this.questions, function (q) { return (q.instanceElement.innerHTML = question); });
        if (this.answerField)
            this.answerField.instanceElement.removeAttribute(exports.SecretQuestionWidget_CONSTS.allowEmpty);
        this.instanceElement.style.display = 'inline'; // TODO why this is needed
    };
    SecretQuestionWidget.CONSTS = exports.SecretQuestionWidget_CONSTS;
    return SecretQuestionWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.SecretQuestionWidget = SecretQuestionWidget;
var QuestionElement = /** @class */ (function (_super) {
    tslib_1.__extends(QuestionElement, _super);
    function QuestionElement(el, parent) {
        return _super.call(this, el, parent) || this;
    }
    return QuestionElement;
}(TemplateElement_1.TemplateElement));
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(SecretQuestionWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SocialLoginWidget.ts":
/*!**********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SocialLoginWidget.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var LoginModes_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
var BaseForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var nextGeneratedContainerId = 0;
exports.SocialLoginWidget_CONSTS = {
    selector: 'div.gigya-social-login',
};
utils_1.DeepFreeze(exports.SocialLoginWidget_CONSTS);
var SocialLoginWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SocialLoginWidget, _super);
    function SocialLoginWidget(_screen, el) {
        var _this = _super.call(this, _screen, el) || this;
        _this.bindID = _this.publishID ? _this.ID : exports.SocialLoginWidget_CONSTS.selector;
        _this.loginMode = LoginModes_1.LoginModes[_this.params['loginMode'] || 'standard'];
        _this.containerId = _this._screenSet.containerID + '_social_' + nextGeneratedContainerId++; // TODO Change use the same id for the same screenSet instance, regardless of how many times it is reused, unlike existing implementation that uses a new id each time
        _this.onErrorResponse = function (e) {
            // Hot fix for "no providers" error that goes into the infinite loop - see #44285
            // Hot fix for "invalid parameter" - see #56153
            if (e.errorCode !== GSErrors_1.GSErrors.NO_PROVIDERS && e.errorCode !== GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE) {
                return _this._screenSet.onScreenResponse(e, _this);
            }
        };
        _this.onLoginResponse = function (e) {
            _this._screenSet.removeRegToken();
            _this._screenSet.onScreenResponse({ errorCode: 0, event: e }, _this);
        };
        return _this;
    }
    SocialLoginWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            while (this.instanceElement.firstChild) {
                // clearing the instance element. Notice this is faster than innerHTML=''.
                this.instanceElement.removeChild(this.instanceElement.firstChild);
            }
            this._container = document.createElement('div');
            this._container.className = 'gigya-social-login-container';
            this._container.id = this.containerId;
            this.instanceElement.appendChild(this._container);
            this.calculateEnabledProviders();
            this.apiParams = this.loginMode.filterParams(window.gigya.utils.object.clone(this._screenSet.params));
            if (!this.params['containerID']) {
                this.widgetParams = this.params;
                this.renderWidget();
            }
        }
    };
    /**
     * Surface errors in containing form.
     */
    SocialLoginWidget.prototype.getErrorDisplayForm = function () {
        return this._screen.getFormByElement(this.instanceElement);
    };
    /// Override from TemplateElement
    SocialLoginWidget.prototype.initFromInstanceElement = function () {
        this.successScreen = this._screenSet.chooseNextScreen(this.instanceElement.getAttribute(BaseForm_1.Form_CONSTS.successScreen));
    };
    SocialLoginWidget.prototype.calculateEnabledProviders = function () {
        var loginProviders = this.loginMode.getLoginProviders(this._screenSet.data.apiData, this.params, this._screenSet.data.regToken);
        if (loginProviders !== null && typeof loginProviders !== 'undefined')
            this.params['enabledProviders'] = loginProviders;
    };
    SocialLoginWidget.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement)
            this.instanceElement.innerHTML = ''; // To make sure no ID conflicts will be generated
        if (this._instance)
            this._instance.dispose();
        _super.prototype.unlinkInstanceElement.call(this);
    };
    SocialLoginWidget.prototype.renderWidget = function () {
        var _this = this;
        // because rendering the widget is async, we set the container size to take room accordingly - so the screenset will center correctly.
        this.setContainerSize(this.widgetParams['width'], this.widgetParams['height']);
        //re-render plugin and call the plugin API again with the new parameters after the conditionals.
        window.gigya.socialize.showLoginUI(this.apiParams, this.widgetParams, {
            containerID: this.containerId,
            accountsSocialLogin: true,
            onLogin: this.onLoginResponse,
            onError: this.onErrorResponse,
            finalizeRegistration: true,
            dontHandleScreenSet: true,
            UIMode: this.loginMode !== LoginModes_1.LoginModes.link ? 'Login' : 'LinkAccount',
            include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data,emails,subscriptions,preferences', this._screenSet.params.include),
            regSource: this._screenSet.params.regSource || utils_1.firstPart(utils_1.firstPart(location.href, '?'), '#'),
            getInstance: function (instances) {
                _this._instance = instances;
            },
        });
        this.renderWidgetUI = false;
    };
    SocialLoginWidget.prototype.setContainerSize = function (width, height) {
        if (width) {
            var widthUnits = utils_1.getUnitMeasurementType(width);
            if (widthUnits != utils_1.UnitMeasurementType.auto)
                this._container.style.width = parseFloat(width) + widthUnits;
        }
        if (height) {
            var heightUnits = utils_1.getUnitMeasurementType(height);
            if (heightUnits != utils_1.UnitMeasurementType.auto)
                this._container.style.height = parseFloat(height) + heightUnits;
        }
    };
    SocialLoginWidget.CONSTS = exports.SocialLoginWidget_CONSTS;
    return SocialLoginWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.SocialLoginWidget = SocialLoginWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(SocialLoginWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SubscriptionWidget.ts":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SubscriptionWidget.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseFormWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var ProfileForm_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm.ts");
exports.SubscriptionWidget_CONSTS = {
    selector: 'div.gigya-subscription',
    subscriptionName: 'name',
};
utils_1.DeepFreeze(exports.SubscriptionWidget_CONSTS);
var SubscriptionWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SubscriptionWidget, _super);
    function SubscriptionWidget(form, el) {
        var _this = _super.call(this, form, el) || this;
        _this._shouldPopulate = form instanceof ProfileForm_1.ProfileForm;
        return _this;
    }
    SubscriptionWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            // subscription name: subscription.<name>.<channel>
            var subscriptionName = this.instanceElement.getAttribute(SubscriptionWidget.CONSTS.subscriptionName).split('.');
            subscriptionName.shift(); // remove preceding subscriptions
            this.subscriptionObj = {
                channel: subscriptionName.pop(),
                name: subscriptionName.join('.'),
            };
            var checked = this.templateElement.hasAttribute('data-checked');
            if (this._shouldPopulate) {
                var subscriptionsInfo = this._screenSet.getApiData().getAccountInfo;
                if (subscriptionsInfo && subscriptionsInfo.subscriptions && subscriptionsInfo.subscriptions.hasOwnProperty(this.subscriptionObj.name)) {
                    var subscription = subscriptionsInfo.subscriptions[this.subscriptionObj.name];
                    var channel = subscription[this.subscriptionObj.channel];
                    if (channel) {
                        if (channel.hasOwnProperty('isSubscribed')) {
                            checked = channel['isSubscribed'];
                        }
                        if (channel.hasOwnProperty('doubleOptIn') && channel['doubleOptIn']['status'].toLowerCase() === 'pending') {
                            this._statusElement = document.createElement('div');
                            this._statusElement.className = 'subscription-status-label';
                            this._statusElement.style.paddingLeft = '18px';
                            this._statusElement.style.color = 'grey';
                            this._statusElement.style.fontStyle = 'italic';
                            this._statusElement.innerText = this._screenSet.getText('subscription_pending_confirmation');
                        }
                    }
                }
            }
            this._inuptElement = document.createElement('input');
            this._inuptElement.id = "subs-checkbox-" + this.subscriptionObj.name;
            this._inuptElement.name = "subscriptions." + this.subscriptionObj.name + "." + this.subscriptionObj.channel + ".isSubscribed";
            this._inuptElement.className = 'gigya-input-checkbox subscription-checkbox';
            this._inuptElement.type = 'checkbox';
            this._inuptElement.checked = checked;
            this._labelElement = document.createElement('label');
            this._labelElement.className = 'subscription-name-label';
            this._labelElement.style.display = 'inline-block';
            this._labelElement.style.verticalAlign = 'middle';
            this._labelElement.style.paddingLeft = '5px';
            this._labelElement.setAttribute('for', this._inuptElement.id);
            this._container = document.createElement('div');
            this._container.className = 'subs-widget-container';
            //add checkbox
            this._container.appendChild(this._inuptElement);
            //add label near checkbox
            this._container.appendChild(this._labelElement);
            //add 'pending' status element
            if (this._statusElement) {
                this._container.appendChild(this._statusElement);
            }
            this.instanceElement.appendChild(this._container);
            this.renderWidget();
        }
    };
    SubscriptionWidget.prototype.renderWidget = function () {
        _super.prototype.renderWidget.call(this);
        this._labelElement.innerHTML = !this.instanceElement ? '' : this.instanceElement.getAttribute('data-label');
    };
    SubscriptionWidget.CONSTS = exports.SubscriptionWidget_CONSTS;
    return SubscriptionWidget;
}(BaseFormWidget_1.BaseFormWidget));
exports.SubscriptionWidget = SubscriptionWidget;
BaseFormWidget_1.BaseFormWidget.addWidgetToLibrary(SubscriptionWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TfaWidget.ts":
/*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TfaWidget.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var nextTfaContainerId = 0;
exports.TfaWidget_CONSTS = {
    selector: 'div.gigya-tfa',
};
utils_1.DeepFreeze(exports.TfaWidget_CONSTS);
var TfaWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TfaWidget, _super);
    function TfaWidget(_screen, el) {
        var _this = _super.call(this, _screen, el) || this;
        _this.bindID = _this.publishID ? _this.ID : exports.TfaWidget_CONSTS.selector;
        _screen._hasTfa = true;
        // TODO Change use the same id for the same screenSet instance, regardless of how many times it is reused, unlike existing implementation that uses a new id each time
        _this.tfaContainerId = (_this._screenSet.params.containerID || 'showScreenSet') + '_showTfaUI_' + nextTfaContainerId++;
        return _this;
    }
    TfaWidget.prototype.linkInstanceElement = function (parent) {
        var _this = this;
        _super.prototype.linkInstanceElement.call(this, parent);
        if (this.instanceElement) {
            this.instanceElement.innerHTML = '<div id="' + this.tfaContainerId + '"></div>';
            this._screen.dimScreen();
            if (!this.widgetParams) {
                this.widgetParams = this.params;
            }
            window.gigya.accounts.showTfaUI(this.params, this.widgetParams, {
                dontHandleScreenSet: false,
                regToken: this._screenSet.data.regToken,
                lang: this._screenSet.params.lang,
                containerID: this.tfaContainerId,
                cssPrefix: 'div.gigya-tfa',
                width: 'auto',
                source: this._screenSet.injectionInfo.methodName,
                onDone: function (e) {
                    _this._screen.dimScreen();
                    _this._screenSet.onScreenResponse(e.response, _this);
                },
                onLoad: function () {
                    _this._screen.undimScreen();
                },
                onAfterScreenLoad: function (e) {
                    if (e && e.caption && e.caption.length) {
                        _this._screen.overrideTemplateCaption(e.caption);
                        _this._screenSet.setCaption(e.caption);
                    }
                    _this._screenSet.centerModal();
                },
                ignoreApiQueue: this._screenSet.params['ignoreApiQueue'],
                customLang: this._screenSet.params.customLang,
            });
        }
    };
    TfaWidget.prototype.unlinkInstanceElement = function () {
        if (this.instanceElement)
            this.instanceElement.innerHTML = ''; // To make sure no ID conflicts will be generated
        if (this._instance)
            this._instance.dispose();
        _super.prototype.unlinkInstanceElement.call(this);
    };
    TfaWidget.prototype.renderWidget = function () {
        var _this = this;
        //re-render the plugin with the new new conditional values.
        window.gigya.accounts.showTfaUI(this.widgetParams, {
            dontHandleScreenSet: false,
            regToken: this._screenSet.data.regToken,
            containerID: this.tfaContainerId,
            cssPrefix: 'div.gigya-tfa',
            width: 'auto',
            deviceType: this._screenSet.params.deviceType,
            source: this._screenSet.injectionInfo.methodName,
            onDone: function (e) {
                _this._screen.dimScreen();
                _this._screenSet.onScreenResponse(e.response, _this);
            },
            onLoad: function () {
                _this._screen.undimScreen();
            },
            onAfterScreenLoad: function (e) {
                if (e && e.caption && e.caption.length) {
                    _this._screen.overrideTemplateCaption(e.caption);
                    _this._screenSet.setCaption(e.caption);
                }
                _this._screenSet.centerModal();
            },
            getInstance: function (instances) {
                _this._instance = instances;
            },
            ignoreApiQueue: this._screenSet.params['ignoreApiQueue'],
        });
        this.renderWidgetUI = false;
    };
    TfaWidget.CONSTS = exports.TfaWidget_CONSTS;
    return TfaWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.TfaWidget = TfaWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(TfaWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget.ts":
/*!*********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var BaseScreenWidget_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
exports.Translated_CONSTS = {
    selector: '*[data-translation-key]',
    translationKeyAttribute: 'data-translation-key',
};
utils_1.DeepFreeze(exports.Translated_CONSTS);
var TranslatedWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TranslatedWidget, _super);
    function TranslatedWidget(_screen, el) {
        // Turn resetCSS off.
        return _super.call(this, _screen, el, false) || this;
    }
    TranslatedWidget.prototype.linkInstanceElement = function (parent) {
        _super.prototype.linkInstanceElement.call(this, parent);
        this.updateTranslation();
    };
    TranslatedWidget.prototype.unlinkInstanceElement = function () {
        _super.prototype.unlinkInstanceElement.call(this);
    };
    /**
     * Handle case where translation key is updated via conditional attr.
     */
    TranslatedWidget.prototype.evaluateConditionalAttributes = function () {
        _super.prototype.evaluateConditionalAttributes.call(this);
        if (this.renderedTranslationKey !== this.instanceElement.getAttribute(TranslatedWidget.CONSTS.translationKeyAttribute).toLowerCase()) {
            this.updateTranslation();
        }
    };
    /**
     * Normalize translation key lowercase.
     */
    TranslatedWidget.prototype.getTranslationKey = function () {
        return this.instanceElement.getAttribute(TranslatedWidget.CONSTS.translationKeyAttribute).toLowerCase();
    };
    /**
     * Set translated text.
     */
    TranslatedWidget.prototype.updateTranslation = function () {
        this.renderedTranslationKey = this.getTranslationKey();
        if (this._screenSet.params.customLang && this._screenSet.params.customLang[this.renderedTranslationKey]) {
            // Unlink any widgets before HTML is cleared.
            this.unlinkWidgets();
            // Replace inner HTML.
            this.instanceElement.innerHTML = this._screenSet.params.customLang[this.renderedTranslationKey];
            this.linkWidgets();
        }
    };
    TranslatedWidget.CONSTS = exports.Translated_CONSTS;
    return TranslatedWidget;
}(BaseScreenWidget_1.BaseScreenWidget));
exports.TranslatedWidget = TranslatedWidget;
BaseScreenWidget_1.BaseScreenWidget.addWidgetToLibrary(TranslatedWidget);


/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/index.ts":
/*!**************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var BaseForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm.ts");
var BaseFormWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget.ts");
var BaseScreenWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget.ts");
var BaseServerWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget.ts");
var BaseUploadWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget.ts");
var BaseWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget.ts");
var Consent = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Consent.ts");
var Debug = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug.ts");
var ErrorDisplayElement = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ErrorDisplayElement.ts");
var Errors = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors.ts");
var LoginModes = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts");
var Screen = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen.ts");
var ScreenConsts = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts");
var ScreenOptions = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions.ts");
var ScreenSetData = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData.ts");
var ScreenSetPlugin = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin.ts");
var ScreenSetHtmlResources = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetResources.ts");
var TemplateElement = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement.ts");
var Templates = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Templates */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Templates.ts");
var utils = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts");
var LinkAccountsForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LinkAccountsForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LinkAccountsForm.ts");
var LoginForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/LoginForm.ts");
var PasswordlessLoginForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordlessLoginForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordlessLoginForm.ts");
var AuthMethodsForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/AuthMethodsForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/AuthMethodsForm.ts");
var PasswordAuthMethodForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordAuthMethodForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PasswordAuthMethodForm.ts");
var PushAuthMethodForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PushAuthMethodForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/PushAuthMethodForm.ts");
var NewsletterSignupForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/NewsletterSignupForm.ts");
var ProfileForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ProfileForm.ts");
var ReAuthenticationForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ReauthenticationForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ReauthenticationForm.ts");
var RegisterForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/RegisterForm.ts");
var ResendVerificationCodeForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResendVerificationCodeForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResendVerificationCodeForm.ts");
var ResetPasswordForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResetPasswordForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/ResetPasswordForm.ts");
var OrgRegisterForm = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OrganizationRegistrationForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OrganizationRegistrationForm.ts");
var ButtonInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/ButtonInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/ButtonInput.ts");
var CheckboxInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/CheckboxInput.ts");
var EmailInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/EmailInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/EmailInput.ts");
var FormInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput.ts");
var LoginIdInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/LoginIdInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/LoginIdInput.ts");
var PasswordInputs = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PasswordInputs.ts");
var PhoneNumberInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PhoneNumberInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/PhoneNumberInput.ts");
var RadioInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RadioInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RadioInput.ts");
var RememberInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RememeberInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RememeberInput.ts");
var RetypePasswordInput = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RetypePasswordInput */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/RetypePasswordInput.ts");
var ArrayManagerWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ArrayManagerWidget.ts");
var BindingWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/BindingWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/BindingWidget.ts");
var CaptchaWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/CaptchaWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/CaptchaWidget.ts");
var ConsentWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ConsentWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ConsentWidget.ts");
var ContainerWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ContainerWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ContainerWidget.ts");
var ImageWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ImageWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ImageWidget.ts");
var LogInAvailabilityWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/LogInAvailabilityWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/LogInAvailabilityWidget.ts");
var MyPhotoWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/MyPhotoWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/MyPhotoWidget.ts");
var PasswordStrengthWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PasswordStrengthWidget.ts");
var PhotoUploadWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PhotoUploadWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/PhotoUploadWidget.ts");
var ProfilePhotoWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ProfilePhotoWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ProfilePhotoWidget.ts");
var RequiredDisplayWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/RequiredDisplayWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/RequiredDisplayWidget.ts");
var SecretQuestionWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SecretQuestionWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SecretQuestionWidget.ts");
var SocialLoginWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SocialLoginWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SocialLoginWidget.ts");
var SubscriptionWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SubscriptionWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/SubscriptionWidget.ts");
var TfaWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TfaWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TfaWidget.ts");
var TranslatedWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/TranslatedWidget.ts");
var SwitchScreenWidget = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/SwitchScreenWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/SwitchScreenWidget.ts");
var BaseCaptchaHandler = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler.ts");
var FunCaptchaHandler = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/FunCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/FunCaptchaHandler.ts");
var GoogleCaptchaHandler = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/GoogleCaptchaHandler */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/GoogleCaptchaHandler.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpSendCodeForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpSendCodeForm.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpUpdateForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpUpdateForm.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpLoginForm */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Forms/OtpLoginForm.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ApiLinkWidget */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Widgets/ApiLinkWidget.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Captcha */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Captcha.ts");
__webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/index.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.ScreenSet) {
    window.gigya._.plugins.ScreenSet = {};
}
if (!window.gigya._.plugins.ScreenSet.consent) {
    window.gigya._.plugins.ScreenSet.consent = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.screenSet) {
    window.gigya._.plugins.resources.html.screenSet = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.ScreenSet, SwitchScreenWidget, BaseForm, BaseFormWidget, BaseScreenWidget, BaseServerWidget, BaseUploadWidget, BaseWidget, Debug, ErrorDisplayElement, Errors, LoginModes, Screen, ScreenConsts, ScreenOptions, ScreenSetData, ScreenSetPlugin, TemplateElement, Templates, utils, LinkAccountsForm, LoginForm, PasswordlessLoginForm, AuthMethodsForm, PasswordAuthMethodForm, PushAuthMethodForm, NewsletterSignupForm, ProfileForm, ReAuthenticationForm, RegisterForm, ResendVerificationCodeForm, ResetPasswordForm, OrgRegisterForm, ButtonInput, CheckboxInput, EmailInput, FormInput, LoginIdInput, PasswordInputs, PhoneNumberInput, RadioInput, RememberInput, RetypePasswordInput, ArrayManagerWidget, BindingWidget, CaptchaWidget, ConsentWidget, ContainerWidget, ImageWidget, LogInAvailabilityWidget, MyPhotoWidget, PasswordStrengthWidget, PhotoUploadWidget, ProfilePhotoWidget, RequiredDisplayWidget, SecretQuestionWidget, SocialLoginWidget, SubscriptionWidget, TfaWidget, TranslatedWidget, BaseCaptchaHandler, FunCaptchaHandler, GoogleCaptchaHandler);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.ScreenSet.consent, Consent);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.screenSet, ScreenSetHtmlResources);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/consent.html":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/consent.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"consent\">\r\n\r\n    <div class=\"gigya-consent-title\">${label}</div>\r\n    <div class=\"gigya-consent-subtitle\" >${docId}</div>\r\n    <span class=\"gigya-consent-text\">${approvedOnLabel}</span> <span class=\"gigya-consent-text\">${approved}</span>\r\n\r\n</div>";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/inlinedPasswordStrength.html":
/*!********************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/inlinedPasswordStrength.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-password-strength\" data-on-focus-bubble=\"true\" data-bubble-orientation=\"${orientation}\"></div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength.html":
/*!*************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"${scoreClass}\" aria-atomic=\"true\" aria-live=\"polite\">${content}</div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_minimumRequirements.html":
/*!*********************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_minimumRequirements.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-passwordStrength-text-requirements\">$requirements</div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_strengthMeter.html":
/*!***************************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/passwordStrength_strengthMeter.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-passwordStrength-text\">\r\n    <span class=\"gigya-passwordStrength-text\">$TEXT('password_strength_colon')</span>\r\n    <span class=\"gigya-passwordStrength-text gigya-passwordStrength-scoreText\">${scoreText}</span>\r\n</div>\r\n<div class=\"gigya-passwordStrength-bar\">\r\n    <div class=\"${barIndicatorClass}\"></div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_form.html":
/*!*************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_form.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form enctype=\"multipart/form-data\" method=\"post\" class=\"gigya-photo-upload-form\" target=\"${formTarget}\" action=\"\">\r\n    <input type=\"file\" accept=\"image/*\" name=\"_profilePhoto\" />\r\n</form>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_ui.html":
/*!***********************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/photoUpload_ui.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-photo-upload-image\" id=\"${photoElementID}\"></div>\r\n<div>\r\n    <div class=\"gigya-photo-upload-button\">$choose_file</div>\r\n    <div class=\"gigya-photo-upload-path\" id=\"${pathContainerID}\">$no_file_chosen</div>\r\n    <div class=\"gigya-photo-upload-text\">$tip</div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet.html":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"gigya-screen-caption\" id=\"${innerContainerID}_caption\"></h1>\r\n<div id=\"${childContainerID}\" class=\"gigya-hidden\"></div>\r\n<div id=\"${innerContainerID}\" class=\"gigya-screen-content\"></div>\r\n";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet_dialog.html":
/*!*************************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/templates/screenSet_dialog.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"${innerContainerID}\" class=\"gigya-screen-content\"></div>";

/***/ }),

/***/ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts":
/*!**************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ScreenConsts_1 = __webpack_require__(/*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ "./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts");
function isHidden(el) {
    while (el && el.parentElement) {
        if (el.style.visibility === 'hidden' || // hidden element
            el.style.display === 'none' || // hidden element
            (window.gigya.utils.DOM.isElementClass(el, 'gigya-error-display') && !window.gigya.utils.DOM.isElementClass(el, 'gigya-error-display-active')) || // hidden error message
            window.gigya.utils.DOM.isElementClass(el, 'ng-hide')) {
            // angular hidden element
            return true;
        }
        else {
            el = el.parentElement;
        }
    }
    return false;
}
exports.isHidden = isHidden;
function inIFrame() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}
exports.inIFrame = inIFrame;
function isFieldInHiddenContainer(el) {
    var curr = el;
    while (curr) {
        if (window.gigya.utils.DOM.isElementClass(curr, 'gigya-container') && !window.gigya.utils.DOM.isElementClass(curr, 'gigya-container-enabled'))
            return true;
        curr = curr.parentElement;
    }
    return false;
}
exports.isFieldInHiddenContainer = isFieldInHiddenContainer;
function firstPart(str, seperator) {
    var index = str.indexOf(seperator);
    return index > -1 ? str.substring(0, index) : str;
}
exports.firstPart = firstPart;
function LastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.LastIndexOf = LastIndexOf;
function ForEach(arr, action) {
    for (var i = 0; i < arr.length; ++i) {
        action(arr[i], i, arr);
    }
}
exports.ForEach = ForEach;
function ForEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.ForEachProp = ForEachProp;
function Some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.Some = Some;
function Every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.Every = Every;
function EveryProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.EveryProp = EveryProp;
function Map(arr, action) {
    var result = new Array();
    ForEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.Map = Map;
function DeepFreeze(obj) {
    // Only once IE9 is the minimum - currently IE7 is supported
    /*
        if (obj instanceof Object && !Object.isFrozen(obj[key])) {
            ForEachProp(obj, (prop) => DeepFreeze(prop));

            Object.freeze(obj);
        }
        */
}
exports.DeepFreeze = DeepFreeze;
function getElementsByHavingAttribute(parentElement, tagName, attributeName) {
    var arEls = new Array();
    var els = parentElement.getElementsByTagName(tagName);
    ForEach(els, function (el) {
        if (el.getAttribute(attributeName)) {
            arEls.push(el);
        }
    });
    return arEls;
}
exports.getElementsByHavingAttribute = getElementsByHavingAttribute;
function getElementsByHavingAttributePrefix(parentElement, attributePrefixes, tagNamesExceptions) {
    if (tagNamesExceptions === void 0) { tagNamesExceptions = []; }
    if (typeof attributePrefixes === 'string') {
        attributePrefixes = [attributePrefixes];
    }
    var elements = parentElement.getElementsByTagName('*');
    var matchingElements = new Array();
    for (var i = 0; i <= elements.length - 1; i++) {
        var el = elements.item(i);
        if (window.gigya.utils.array.indexOf(tagNamesExceptions, el.tagName.toLowerCase()) !== -1) {
            continue;
        }
        for (var _i = 0, attributePrefixes_1 = attributePrefixes; _i < attributePrefixes_1.length; _i++) {
            var attributePrefix = attributePrefixes_1[_i];
            if (isElementContainAttributePrefix(elements[i], attributePrefix)) {
                matchingElements.push(elements[i]);
                continue;
            }
        }
    }
    return matchingElements;
}
exports.getElementsByHavingAttributePrefix = getElementsByHavingAttributePrefix;
function isElementContainAttributePrefix(el, subString) {
    var elementAttributes = el.attributes;
    var containConditionalAttribute = false;
    if (elementAttributes) {
        for (var i = 0; i < elementAttributes.length; i++) {
            if (elementAttributes[i].nodeName.indexOf(subString) !== -1) {
                containConditionalAttribute = true;
                break;
            }
        }
    }
    return containConditionalAttribute;
}
exports.isElementContainAttributePrefix = isElementContainAttributePrefix;
function getConditionalAttributeExpressions(element, isWidgetContext) {
    if (isWidgetContext === void 0) { isWidgetContext = false; }
    var conditionalExpressions = new Array();
    var conditionalDefaultValue;
    var lastAttributeValue;
    var isParamTag = false;
    var attributes = getAttributesAsArray(element);
    ForEach(attributes, function (at) {
        try {
            // Check for conditional attribute prefix which determines if this attribute be evaluated.
            var isConditionalAttribute = at.nodeName.indexOf(ScreenConsts_1.Screen_CONSTS.conditionalAttributePrefix) !== -1;
            var isExpressionAttribute = at.nodeName.indexOf(ScreenConsts_1.Screen_CONSTS.expressionAttributePrefix) !== -1;
            if (isConditionalAttribute || isExpressionAttribute) {
                var colonIndex = at.nodeName.indexOf(':');
                if (colonIndex !== -1) {
                    var targetAttribute = void 0;
                    if (isWidgetContext) {
                        conditionalDefaultValue = window.gigya._.plugins.utils.DOM.getAttribute(element, 'value');
                        targetAttribute = window.gigya._.plugins.utils.DOM.getAttribute(element, 'name');
                        isParamTag = element.tagName.toLowerCase() === 'param';
                    }
                    else {
                        targetAttribute = at.nodeName.substring(colonIndex + 1, at.nodeName.length);
                        lastAttributeValue = window.gigya._.plugins.utils.DOM.getAttribute(element, targetAttribute);
                        var defaultValueAttribute = 'gigya-default-' + targetAttribute;
                        if (!window.gigya._.plugins.utils.DOM.getAttribute(element, defaultValueAttribute)) {
                            window.gigya._.plugins.utils.DOM.setAttribute(element, defaultValueAttribute, lastAttributeValue !== null ? lastAttributeValue : 'null');
                        }
                        var val = window.gigya._.plugins.utils.DOM.getAttribute(element, defaultValueAttribute);
                        conditionalDefaultValue = val !== 'null' ? val : null;
                    }
                    // Conditionals are always ternary with special escaping and parsing done.
                    // In: expression ? value : otherValue
                    // Out: expression ? 'value' : 'otherValue'
                    //
                    // Expressions are parsed as-is and the returned value is set.
                    var conditionalExpression = !isExpressionAttribute
                        ? setupConditionalExpressionValue(at.nodeValue, conditionalDefaultValue)
                        : at.nodeValue;
                    var conditional = {
                        attributeName: targetAttribute,
                        condition: conditionalExpression,
                        defaultValue: conditionalDefaultValue,
                        lastAttributeValue: lastAttributeValue,
                        isWidgetParamTag: isParamTag,
                    };
                    conditionalExpressions.push(conditional);
                }
            }
        }
        catch (e) {
            throw new Error('Conditional format error: ' + e);
        }
    });
    return conditionalExpressions;
}
exports.getConditionalAttributeExpressions = getConditionalAttributeExpressions;
function setupConditionalExpressionValue(conditionalValue, defaultValue) {
    var expressionWithFalseValue = setupConditionalFalseValue(conditionalValue, defaultValue);
    var expressionWithEscaping = escapeCharactersInConditionalValue(expressionWithFalseValue);
    var finalConditionalExpression = setUpLastFalseValue(expressionWithEscaping);
    if (!defaultValue) {
        // fix default value to be a falsy value instead of a string literal
        var defaultValueLocation = finalConditionalExpression.lastIndexOf(":'" + defaultValue + "'");
        if (defaultValueLocation > -1) {
            finalConditionalExpression = finalConditionalExpression.substring(0, defaultValueLocation) + ":null";
        }
    }
    return finalConditionalExpression;
}
exports.setupConditionalExpressionValue = setupConditionalExpressionValue;
function setupConditionalFalseValue(conditionalValue, defaultValue) {
    // Make sure that the last 'false' value has a ':' sign and if it doesn't, add it and assign the default value, if there's one.
    var indexOfLastConditionResults = conditionalValue.lastIndexOf('?');
    var subStringOfLastConditionResults = conditionalValue.substr(indexOfLastConditionResults + 1, conditionalValue.length);
    var indexOfLastConditionResultsDivider = subStringOfLastConditionResults.indexOf(':');
    if (indexOfLastConditionResultsDivider === -1) {
        conditionalValue += ':';
        if (defaultValue) {
            conditionalValue += defaultValue;
        }
    }
    else {
        // check if there's a 'false' value or just an empty string
        var emptyFalseValue = subStringOfLastConditionResults.substr(indexOfLastConditionResultsDivider + 1, subStringOfLastConditionResults.length);
        if (emptyFalseValue === '') {
            conditionalValue = conditionalValue.substr(0, conditionalValue.length) + defaultValue;
        }
    }
    return conditionalValue;
}
function escapeCharactersInConditionalValue(conditionalValue) {
    // Escape any "'" signs.
    conditionalValue = conditionalValue.replace(/\'/g, "'");
    // Enclose all the 'true' values in ''
    conditionalValue = conditionalValue.replace(/\?/g, "?'");
    conditionalValue = conditionalValue.replace(/:/g, "':");
    return conditionalValue;
}
function setUpLastFalseValue(conditionalValue) {
    // Set an aphostrophe in the last 'false' if there isn't one
    // First: trim the last 'false' value for the aphostrophe insertion
    var indexOfLastConditionResults = conditionalValue.lastIndexOf('?');
    var subStringOfLastConditionResults = conditionalValue.substr(indexOfLastConditionResults + 1, conditionalValue.length);
    var falseResultStartIndex = subStringOfLastConditionResults.indexOf(':') + 1;
    var lastFalseResultValue = subStringOfLastConditionResults.substr(falseResultStartIndex, subStringOfLastConditionResults.length);
    lastFalseResultValue = window.gigya.utils.stringUtils.trim(lastFalseResultValue);
    if (lastFalseResultValue[0] != "'") {
        lastFalseResultValue = "'" + lastFalseResultValue;
    }
    if (lastFalseResultValue[lastFalseResultValue.length] != "'") {
        lastFalseResultValue += "'";
    }
    var lastTrueResultValue = subStringOfLastConditionResults.substr(0, falseResultStartIndex - 1);
    conditionalValue = conditionalValue.substr(0, indexOfLastConditionResults + 1) + lastTrueResultValue + ':' + lastFalseResultValue;
    return conditionalValue;
}
function isKeyCodeDisplayable(keycode) {
    return ((keycode > 47 && keycode < 58) || // number keys
        (keycode == 32 || keycode == 13) || // spacebar & return key(s)
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223)); // [\]' (in order)
}
exports.isKeyCodeDisplayable = isKeyCodeDisplayable;
exports.UnitMeasurementType = {
    pixel: 'px',
    percentage: '%',
    auto: '',
};
function getUnitMeasurementType(value) {
    if (value === void 0) { value = ''; }
    var unitType;
    if (value === null || value == 'auto') {
        unitType = exports.UnitMeasurementType.auto;
    }
    else {
        unitType = value.indexOf('%') != -1 ? exports.UnitMeasurementType.percentage : exports.UnitMeasurementType.pixel;
    }
    return unitType;
}
exports.getUnitMeasurementType = getUnitMeasurementType;
function getAttributesAsArray(el) {
    var attributes = [];
    var elementAttributes = el.attributes;
    // A workaround for IE8
    for (var i = 0; i < elementAttributes.length; i++) {
        attributes.push(elementAttributes[i]);
    }
    return attributes;
}
exports.getAttributesAsArray = getAttributesAsArray;
function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function hasIndex(key) {
    return /\[[0-9]]|\.[0-9]/.test(key);
}
exports.hasIndex = hasIndex;
function removeSerializedKeyLastEnumerator(key) {
    return key.replace(/[0-9]\.(?=[^.]*$)/, '').replace(/\[[0-9]](?=[^\[]*$)/, '');
}
exports.removeSerializedKeyLastEnumerator = removeSerializedKeyLastEnumerator;
function removeSerializedKeyEdgeProperty(key) {
    return key.substr(0, key.lastIndexOf('.'));
}
exports.removeSerializedKeyEdgeProperty = removeSerializedKeyEdgeProperty;
function IETemplateElementPolyfill(doc) {
    if (doc === void 0) { doc = document; }
    var support = 'content' in document.createElement('template');
    // Set the content property if missing
    if (!support) {
        var /**
             * Prefer an array to a NodeList
             * Otherwise, updating the content property of a node
             * will update the NodeList and we'll loose the nested <template>
             */ templates = Array.prototype.slice.call(document.getElementsByTagName('template')), template, content, fragment, node, i = 0, j;
        // For each <template> element get its content and wrap it in a document fragment
        while ((template = templates[i++]) && !template.content) {
            content = template.children;
            fragment = document.createDocumentFragment();
            while (content[0]) {
                fragment.appendChild(content[0]);
            }
            template.content = fragment;
        }
    }
    // // Prepare a clone function to allow nested <template> elements
    // function clone() {
    //     var
    //         templates = this.querySelectorAll("template"),
    //         fragments = [],
    //         template,
    //         i = 0;
    //
    //     // If the support is OK simply clone and return
    //     if (support) {
    //         template  = this.cloneNode(true);
    //         templates = template.content.querySelectorAll("template");
    //
    //         // Set the clone method for each nested <template> element
    //         for (; templates[i]; i++) {
    //             templates[i].clone = clone;
    //         }
    //
    //         return template;
    //     }
    //
    //     // Loop through nested <template> to retrieve the content property
    //     for (; templates[i]; i++) {
    //         fragments.push(templates[i].content);
    //     }
    //
    //     // Now, clone the document fragment
    //     template = this.cloneNode(true);
    //
    //     // Makes sure the clone have a "content" and "clone" properties
    //     template.content = this.content;
    //     template.clone   = clone;
    //
    //     /**
    //      * Retrieve the nested <template> once again
    //      * Since we just cloned the document fragment,
    //      * the content's property of the nested <template> might be undefined
    //      * We have to re-set it using the fragment array we previously got
    //      */
    //     templates = template.querySelectorAll("template");
    //
    //     // Loop to set the content property of each nested template
    //     for (i = 0; templates[i]; i++) {
    //         templates[i].content = fragments[i];
    //         templates[i].clone   = clone; // Makes sure to set the clone method as well
    //     }
    //
    //     return template;
    // }
    //
    // var
    //     templates = document.querySelectorAll("template") as any,
    //     template, i = 0;
    //
    // // Pollute the DOM with a "clone" method on each <template> element
    // while ((template = templates[i++])) {
    //     template.clone = clone;
    // }
}
exports.IETemplateElementPolyfill = IETemplateElementPolyfill;


/***/ }),

/***/ "./src/accounts/constants.ts":
/*!***********************************!*\
  !*** ./src/accounts/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EditableTfaProvidersTypes;
(function (EditableTfaProvidersTypes) {
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPhone"] = 0] = "gigyaPhone";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaTotp"] = 1] = "gigyaTotp";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPush"] = 2] = "gigyaPush";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["livelink"] = 3] = "livelink";
})(EditableTfaProvidersTypes = exports.EditableTfaProvidersTypes || (exports.EditableTfaProvidersTypes = {}));
exports.gigyaAssertionExpiration = 60 * 5 * 1000;


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/CloseReasons.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CloseReasons.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CloseReasons;
(function (CloseReasons) {
    CloseReasons[CloseReasons["pendingError"] = 0] = "pendingError";
    CloseReasons[CloseReasons["missing"] = 1] = "missing";
    CloseReasons[CloseReasons["finished"] = 2] = "finished";
    CloseReasons[CloseReasons["canceled"] = 3] = "canceled";
    CloseReasons[CloseReasons["backButton"] = 4] = "backButton";
    CloseReasons[CloseReasons["canceledByParent"] = 5] = "canceledByParent";
    CloseReasons[CloseReasons["skip"] = 6] = "skip";
    CloseReasons[CloseReasons["error"] = 7] = "error";
    CloseReasons[CloseReasons["cancel"] = 8] = "cancel";
})(CloseReasons = exports.CloseReasons || (exports.CloseReasons = {}));


/***/ }),

/***/ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginStyles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PluginStyle;
(function (PluginStyle) {
    PluginStyle[PluginStyle["_undefined"] = 0] = "_undefined";
    PluginStyle[PluginStyle["none"] = 1] = "none";
    PluginStyle[PluginStyle["legacy"] = 2] = "legacy";
    PluginStyle[PluginStyle["modern"] = 3] = "modern";
})(PluginStyle = exports.PluginStyle || (exports.PluginStyle = {}));
function getPluginStyleClass(style) {
    return 'gigya-style-' + PluginStyle[style];
}
exports.getPluginStyleClass = getPluginStyleClass;


/***/ }),

/***/ "./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var DeviceTypes;
(function (DeviceTypes) {
    DeviceTypes[DeviceTypes["_undefined"] = 0] = "_undefined";
    DeviceTypes[DeviceTypes["desktop"] = 1] = "desktop";
    DeviceTypes[DeviceTypes["mobile"] = 2] = "mobile";
    DeviceTypes[DeviceTypes["auto"] = 3] = "auto";
})(DeviceTypes = exports.DeviceTypes || (exports.DeviceTypes = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/GSErrors.ts":
/*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/GSErrors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors;
(function (GSErrors) {
    GSErrors[GSErrors["OK"] = 0] = "OK";
    GSErrors[GSErrors["Data_Pending"] = 100001] = "Data_Pending";
    GSErrors[GSErrors["NETWORK_ERROR"] = 500026] = "NETWORK_ERROR";
    GSErrors[GSErrors["DATA_PENDING"] = 100001] = "DATA_PENDING";
    GSErrors[GSErrors["OPERATION_CANCELED"] = 200001] = "OPERATION_CANCELED";
    GSErrors[GSErrors["PERMISSION_GRANTED"] = 200002] = "PERMISSION_GRANTED";
    GSErrors[GSErrors["PERMISSION_NOT_GRANTED"] = 200003] = "PERMISSION_NOT_GRANTED";
    GSErrors[GSErrors["REDIRECT"] = 200004] = "REDIRECT";
    GSErrors[GSErrors["NEW_USER"] = 200005] = "NEW_USER";
    GSErrors[GSErrors["OPERATION_DONE"] = 200006] = "OPERATION_DONE";
    GSErrors[GSErrors["UPDATE_USER"] = 200007] = "UPDATE_USER";
    GSErrors[GSErrors["OK_WITH_ERRORS"] = 200008] = "OK_WITH_ERRORS";
    GSErrors[GSErrors["ACCOUNTS_LINKED"] = 200009] = "ACCOUNTS_LINKED";
    GSErrors[GSErrors["OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS"] = 200010] = "OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["ACCOUNT_PENDING_REGISTRATION"] = 206001] = "ACCOUNT_PENDING_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_VERIFICATION"] = 206002] = "ACCOUNT_PENDING_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_MISSING_LOGINID"] = 206003] = "ACCOUNT_MISSING_LOGINID";
    GSErrors[GSErrors["IDENTITY_ALREADY_ASSIGNED"] = 206004] = "IDENTITY_ALREADY_ASSIGNED";
    GSErrors[GSErrors["AFTER_EMAIL_VERIFICATION"] = 206005] = "AFTER_EMAIL_VERIFICATION";
    GSErrors[GSErrors["PENDING_CODE_VERIFICATION"] = 206006] = "PENDING_CODE_VERIFICATION";
    GSErrors[GSErrors["CLIENT_LOG"] = 300001] = "CLIENT_LOG";
    GSErrors[GSErrors["INVALID_DATA_CENTER"] = 301001] = "INVALID_DATA_CENTER";
    GSErrors[GSErrors["INVALID_REQUEST_FORMAT"] = 400001] = "INVALID_REQUEST_FORMAT";
    GSErrors[GSErrors["MISSING_REQUIRED_PARAMETER"] = 400002] = "MISSING_REQUIRED_PARAMETER";
    GSErrors[GSErrors["UNIQUE_IDENTIFIER_EXISTS"] = 400003] = "UNIQUE_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["INVALID_PARAMETER_FORMAT"] = 400004] = "INVALID_PARAMETER_FORMAT";
    GSErrors[GSErrors["INVALID_PARAMETER_VALUE"] = 400006] = "INVALID_PARAMETER_VALUE";
    GSErrors[GSErrors["DUPLICATE_VALUE"] = 400007] = "DUPLICATE_VALUE";
    GSErrors[GSErrors["INVALID_AUTHENTICATION_HEADER"] = 400008] = "INVALID_AUTHENTICATION_HEADER";
    GSErrors[GSErrors["VALIDATION_ERROR"] = 400009] = "VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_REDIRECT_URI"] = 400011] = "INVALID_REDIRECT_URI";
    GSErrors[GSErrors["INVALID_RESPONSE_TYPE"] = 400012] = "INVALID_RESPONSE_TYPE";
    GSErrors[GSErrors["UNSUPPORTED_GRANT_TYPE"] = 400013] = "UNSUPPORTED_GRANT_TYPE";
    GSErrors[GSErrors["INVALID_GRANT"] = 400014] = "INVALID_GRANT";
    GSErrors[GSErrors["CODE_EXPIRED"] = 400015] = "CODE_EXPIRED";
    GSErrors[GSErrors["SCHEMA_VALIDATION_FAILED"] = 400020] = "SCHEMA_VALIDATION_FAILED";
    GSErrors[GSErrors["CAPTCHA_VERIFICATION_FAILED"] = 400021] = "CAPTCHA_VERIFICATION_FAILED";
    GSErrors[GSErrors["UNIQUE_INDEX_VALIDATION_ERROR"] = 400022] = "UNIQUE_INDEX_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_TYPE_VALIDATION_ERROR"] = 400023] = "INVALID_TYPE_VALIDATION_ERROR";
    GSErrors[GSErrors["DYNAMIC_FIELDS_VALIDATION_ERROR"] = 400024] = "DYNAMIC_FIELDS_VALIDATION_ERROR";
    GSErrors[GSErrors["WRITE_ACCESS_VALIDATION_ERROR"] = 400025] = "WRITE_ACCESS_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_FORMAT_VALIDATION_ERROR"] = 400026] = "INVALID_FORMAT_VALIDATION_ERROR";
    GSErrors[GSErrors["REQUIRED_VALUE_VALIDATION_ERROR"] = 400027] = "REQUIRED_VALUE_VALIDATION_ERROR";
    GSErrors[GSErrors["EMAIL_NOT_VERIFIED"] = 400028] = "EMAIL_NOT_VERIFIED";
    GSErrors[GSErrors["SCHEMA_CONFLICT_ERROR"] = 400029] = "SCHEMA_CONFLICT_ERROR";
    GSErrors[GSErrors["OPERATION_NOT_ALLOWED"] = 400030] = "OPERATION_NOT_ALLOWED";
    GSErrors[GSErrors["SECURITY_VERIFICATION_FAILED"] = 400050] = "SECURITY_VERIFICATION_FAILED";
    GSErrors[GSErrors["INVALID_APIKEY_PARAMETER"] = 400093] = "INVALID_APIKEY_PARAMETER";
    GSErrors[GSErrors["NOT_SUPPORTED"] = 400096] = "NOT_SUPPORTED";
    GSErrors[GSErrors["UNSUPPORTED_USER_AGENT"] = 400097] = "UNSUPPORTED_USER_AGENT";
    GSErrors[GSErrors["NO_PROVIDERS"] = 400100] = "NO_PROVIDERS";
    GSErrors[GSErrors["POPUP_BLOCKED"] = 400101] = "POPUP_BLOCKED";
    GSErrors[GSErrors["INVALID_EVENT_HANDLER"] = 400102] = "INVALID_EVENT_HANDLER";
    GSErrors[GSErrors["INVALID_CONTAINERID"] = 400103] = "INVALID_CONTAINERID";
    GSErrors[GSErrors["NOT_CONNECTED"] = 400106] = "NOT_CONNECTED";
    GSErrors[GSErrors["INVALID_SITE_DOMAIN"] = 400120] = "INVALID_SITE_DOMAIN";
    GSErrors[GSErrors["PROVIDER_CONFIGURATION_ERROR"] = 400122] = "PROVIDER_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LIMIT_REACHED"] = 400124] = "LIMIT_REACHED";
    GSErrors[GSErrors["FREQUENCY_LIMIT_REACHED"] = 400125] = "FREQUENCY_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_ACTION"] = 400126] = "INVALID_ACTION";
    GSErrors[GSErrors["INSUFFICIENT_POINTS_TO_REDEEM"] = 400127] = "INSUFFICIENT_POINTS_TO_REDEEM";
    GSErrors[GSErrors["SIGNATURE_TIMESTAMP_EXPIRED"] = 400128] = "SIGNATURE_TIMESTAMP_EXPIRED";
    GSErrors[GSErrors["INVALID_POLICY_CONFIGURATION"] = 401000] = "INVALID_POLICY_CONFIGURATION";
    GSErrors[GSErrors["SUSPECTED_SPAM"] = 401010] = "SUSPECTED_SPAM";
    GSErrors[GSErrors["LOGIN_FAILED_CAPTCHA_REQUIRED"] = 401020] = "LOGIN_FAILED_CAPTCHA_REQUIRED";
    GSErrors[GSErrors["LOGIN_FAILED_WRONG_CAPTCHA"] = 401021] = "LOGIN_FAILED_WRONG_CAPTCHA";
    GSErrors[GSErrors["OLD_PASSWORD_USED"] = 401030] = "OLD_PASSWORD_USED";
    GSErrors[GSErrors["FORBIDDEN"] = 403000] = "FORBIDDEN";
    GSErrors[GSErrors["INVALID_SESSION_TOKEN"] = 403001] = "INVALID_SESSION_TOKEN";
    GSErrors[GSErrors["REQUEST_HAS_EXPIRED"] = 403002] = "REQUEST_HAS_EXPIRED";
    GSErrors[GSErrors["INVALID_REQUEST_SIGNATURE"] = 403003] = "INVALID_REQUEST_SIGNATURE";
    GSErrors[GSErrors["DUPLICATE_NONCE"] = 403004] = "DUPLICATE_NONCE";
    GSErrors[GSErrors["UNAUTHORIZED_USER"] = 403005] = "UNAUTHORIZED_USER";
    GSErrors[GSErrors["SENSITIVE_DATA_SENT_OVER_HTTP"] = 403006] = "SENSITIVE_DATA_SENT_OVER_HTTP";
    GSErrors[GSErrors["PERMISSION_DENIED"] = 403007] = "PERMISSION_DENIED";
    GSErrors[GSErrors["INVALID_OPENID_URL"] = 403008] = "INVALID_OPENID_URL";
    GSErrors[GSErrors["PROVIDER_SESSION_EXPIRED"] = 403009] = "PROVIDER_SESSION_EXPIRED";
    GSErrors[GSErrors["INVALID_SECRET"] = 403010] = "INVALID_SECRET";
    GSErrors[GSErrors["SESSION_HAS_EXPIRED"] = 403011] = "SESSION_HAS_EXPIRED";
    GSErrors[GSErrors["NO_VALID_SESSION"] = 403012] = "NO_VALID_SESSION";
    GSErrors[GSErrors["UNVERIFIED_USER"] = 403013] = "UNVERIFIED_USER";
    GSErrors[GSErrors["MISSING_REQUEST_REFERRER"] = 403015] = "MISSING_REQUEST_REFERRER";
    GSErrors[GSErrors["UNEXPECTED_PROVIDER_USER"] = 403017] = "UNEXPECTED_PROVIDER_USER";
    GSErrors[GSErrors["PERMISSION_NOT_REQUESTED"] = 403022] = "PERMISSION_NOT_REQUESTED";
    GSErrors[GSErrors["NO_USER_PERMISSION"] = 403023] = "NO_USER_PERMISSION";
    GSErrors[GSErrors["PROVIDER_LIMIT_REACHED"] = 403024] = "PROVIDER_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_TOKEN"] = 403025] = "INVALID_TOKEN";
    GSErrors[GSErrors["UNAUTHORIZED_ACCESS_ERROR"] = 403026] = "UNAUTHORIZED_ACCESS_ERROR";
    GSErrors[GSErrors["DIFFERENT_USER_FOR_REAUTH"] = 403027] = "DIFFERENT_USER_FOR_REAUTH";
    GSErrors[GSErrors["SESSION_EXPIRED_RETRY"] = 403030] = "SESSION_EXPIRED_RETRY";
    GSErrors[GSErrors["APPROVED_BY_MODERATOR"] = 403031] = "APPROVED_BY_MODERATOR";
    GSErrors[GSErrors["TOKEN_HAS_RENEWED"] = 403032] = "TOKEN_HAS_RENEWED";
    GSErrors[GSErrors["NO_USER_COOKIE"] = 403035] = "NO_USER_COOKIE";
    GSErrors[GSErrors["UNAUTHORIZED_PARTNER"] = 403036] = "UNAUTHORIZED_PARTNER";
    GSErrors[GSErrors["POST_DENIED"] = 403037] = "POST_DENIED";
    GSErrors[GSErrors["NO_LOGIN_TICKET"] = 403040] = "NO_LOGIN_TICKET";
    GSErrors[GSErrors["ACCOUNT_DISABLED"] = 403041] = "ACCOUNT_DISABLED";
    GSErrors[GSErrors["INVALID_LOGINID"] = 403042] = "INVALID_LOGINID";
    GSErrors[GSErrors["LOGIN_IDENTIFIER_EXISTS"] = 403043] = "LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["UNDERAGE_USER"] = 403044] = "UNDERAGE_USER";
    GSErrors[GSErrors["INVALID_SITE_CONFIGURATION_ERROR"] = 403045] = "INVALID_SITE_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LOGINID_DOES_NOT_EXIST"] = 403047] = "LOGINID_DOES_NOT_EXIST";
    GSErrors[GSErrors["API_RATE_LIMIT_EXCEEDED"] = 403048] = "API_RATE_LIMIT_EXCEEDED";
    GSErrors[GSErrors["PENDING_PASSWORD_CHANGE"] = 403100] = "PENDING_PASSWORD_CHANGE";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_VERIFICATION"] = 403101] = "ACCOUNT_PENDING_TFA_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_REGISTRATION"] = 403102] = "ACCOUNT_PENDING_TFA_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_RECENT_LOGIN"] = 403110] = "ACCOUNT_PENDING_RECENT_LOGIN";
    GSErrors[GSErrors["ACCOUNT_TEMPORARILY_LOCKED_OUT"] = 403120] = "ACCOUNT_TEMPORARILY_LOCKED_OUT";
    GSErrors[GSErrors["REDUNDANT_OPERATION"] = 403200] = "REDUNDANT_OPERATION";
    GSErrors[GSErrors["INVALID_APPLICATION_ID"] = 403201] = "INVALID_APPLICATION_ID";
    GSErrors[GSErrors["NOT_FOUND"] = 404000] = "NOT_FOUND";
    GSErrors[GSErrors["FRIEND_NOT_FOUND"] = 404001] = "FRIEND_NOT_FOUND";
    GSErrors[GSErrors["CATEGORY_NOT_FOUND"] = 404002] = "CATEGORY_NOT_FOUND";
    GSErrors[GSErrors["UID_NOT_FOUND"] = 404003] = "UID_NOT_FOUND";
    GSErrors[GSErrors["RESOURCE_NOT_FOUND"] = 404004] = "RESOURCE_NOT_FOUND";
    GSErrors[GSErrors["INVALID_API_METHOD"] = 405001] = "INVALID_API_METHOD";
    GSErrors[GSErrors["IDENTITY_EXISTS"] = 409001] = "IDENTITY_EXISTS";
    GSErrors[GSErrors["GONE"] = 410000] = "GONE";
    GSErrors[GSErrors["REQUEST_ENTITY_TOO_LARGE"] = 413001] = "REQUEST_ENTITY_TOO_LARGE";
    GSErrors[GSErrors["COMMENT_TEXT_TOO_LARGE"] = 413002] = "COMMENT_TEXT_TOO_LARGE";
    GSErrors[GSErrors["OBJECT_TOO_LARGE"] = 413003] = "OBJECT_TOO_LARGE";
    GSErrors[GSErrors["PROFILE_PHOTO_TOO_LARGE"] = 413004] = "PROFILE_PHOTO_TOO_LARGE";
    GSErrors[GSErrors["REQUEST_URI_TOO_LONG"] = 414000] = "REQUEST_URI_TOO_LONG";
    GSErrors[GSErrors["MISSING_USER_PHOTO"] = 409010] = "MISSING_USER_PHOTO";
    GSErrors[GSErrors["COUNTER_NOT_REGISTERED"] = 409011] = "COUNTER_NOT_REGISTERED";
    GSErrors[GSErrors["INVALID_GMID_TICKET"] = 409012] = "INVALID_GMID_TICKET";
    GSErrors[GSErrors["SAML_MAPPED_ATTRIBUTE_NOT_FOUND"] = 409013] = "SAML_MAPPED_ATTRIBUTE_NOT_FOUND";
    GSErrors[GSErrors["SAML_CERTIFICATE_NOT_FOUND"] = 409014] = "SAML_CERTIFICATE_NOT_FOUND";
    GSErrors[GSErrors["SAML_MESSAGE_NOT_FOUND"] = 409015] = "SAML_MESSAGE_NOT_FOUND";
    GSErrors[GSErrors["GENERAL_SERVER_ERROR"] = 500001] = "GENERAL_SERVER_ERROR";
    GSErrors[GSErrors["SERVER_LOGIN_ERROR"] = 500002] = "SERVER_LOGIN_ERROR";
    GSErrors[GSErrors["DEFAULT_APPLICATION_CONFIGURATION_ERROR"] = 500003] = "DEFAULT_APPLICATION_CONFIGURATION_ERROR";
    GSErrors[GSErrors["SESSION_MIGRATION_ERROR"] = 500014] = "SESSION_MIGRATION_ERROR";
    GSErrors[GSErrors["PROVIDER_ERROR"] = 500023] = "PROVIDER_ERROR";
    GSErrors[GSErrors["DATABASE_ERROR"] = 500028] = "DATABASE_ERROR";
    GSErrors[GSErrors["USERNAME_REQUIRED"] = 500029] = "USERNAME_REQUIRED";
    GSErrors[GSErrors["NO_PROVIDER_APPLICATION"] = 500031] = "NO_PROVIDER_APPLICATION";
    GSErrors[GSErrors["LOAD_FAILED"] = 500032] = "LOAD_FAILED";
    GSErrors[GSErrors["INVALID_ENVIRONMENT_CONFIG"] = 500033] = "INVALID_ENVIRONMENT_CONFIG";
    GSErrors[GSErrors["ERROR_DURING_BACKEND_OPERATION"] = 500034] = "ERROR_DURING_BACKEND_OPERATION";
    GSErrors[GSErrors["TIMEOUT"] = 504001] = "TIMEOUT";
    GSErrors[GSErrors["CLIENTTIMEOUT"] = 504002] = "CLIENTTIMEOUT";
    GSErrors[GSErrors["INVALID_URL"] = 404004] = "INVALID_URL";
    GSErrors[GSErrors["MEDIA_ITEMS_NOT_SUPPORTED"] = 401001] = "MEDIA_ITEMS_NOT_SUPPORTED";
    GSErrors[GSErrors["MISSING_ERROR_CODE"] = 599999] = "MISSING_ERROR_CODE";
})(GSErrors = exports.GSErrors || (exports.GSErrors = {}));
var GSErrorDetails;
(function (GSErrorDetails) {
    GSErrorDetails[GSErrorDetails["None"] = 0] = "None";
    GSErrorDetails[GSErrorDetails["Same_password"] = 100001] = "Same_password";
    GSErrorDetails[GSErrorDetails["Invalid_password"] = 100002] = "Invalid_password";
    GSErrorDetails[GSErrorDetails["Invalid_counters_query_with_cursor"] = 100003] = "Invalid_counters_query_with_cursor";
})(GSErrorDetails = exports.GSErrorDetails || (exports.GSErrorDetails = {}));


/***/ })

/******/ });