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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/Gigya.Js.Adapters.Mobile/index.ts");
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

/***/ "./src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts":
/*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var localStorage_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
function newApiAdapter(nativeProxy) {
    return new MobileAdapter(nativeProxy);
}
exports.newApiAdapter = newApiAdapter;
exports.mobileCallbacks = {};
var URL_PREFIX = 'gsapi://';
var IS_SESSION_VALID = 'is_session_valid';
var SEND_REQUEST = 'send_request';
var SEND_OAUTH_REQUEST = 'send_oauth_request';
var GET_IDS = 'get_ids';
var ON_PLUGIN_EVENT = 'on_plugin_event';
var ON_CUSTOM_EVENT = 'on_custom_event';
var REGISTER_FOR_NAMESPACE_EVENTS = 'register_for_namespace_events';
var CLEAR_SESSION = 'clear_session';
var ON_JS_LOG = 'on_js_log';
var defaultAdapterFeatures = [IS_SESSION_VALID, SEND_REQUEST, SEND_OAUTH_REQUEST, GET_IDS, ON_PLUGIN_EVENT, ON_CUSTOM_EVENT, REGISTER_FOR_NAMESPACE_EVENTS];
var defaultAdapterSettings = {
    logLevel: [],
};
var MobileAdapter = /** @class */ (function () {
    function MobileAdapter(nativeProxy) {
        this.nativeProxy = nativeProxy;
        this._storage = new localStorage_1.MemoryStorageAdapter();
        this.name = 'Mobile';
    }
    MobileAdapter.prototype.getStorage = function () {
        return this._storage;
    };
    MobileAdapter.prototype.init = function (callback) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (this.nativeProxy && typeof this.nativeProxy.getFeatures === 'function')
                    this.features = window.gigya.utils.JSON.deserialize(this.nativeProxy.getFeatures());
                else
                    this.features = defaultAdapterFeatures;
                if (this.nativeProxy && typeof this.nativeProxy.getSettings === 'function') {
                    this.settings = window.gigya.utils.JSON.deserialize(this.nativeProxy.getSettings());
                    this.settings.logLevel = window.gigya.utils.array.getArrayFromString(this.settings.logLevel || defaultAdapterSettings.logLevel.join(','), ',');
                }
                else {
                    this.settings = defaultAdapterSettings;
                }
                if (this.nativeProxy && typeof this.nativeProxy.getObfuscationStrategy === 'function') {
                    this.obfuscationStrategy = this.nativeProxy.getObfuscationStrategy();
                }
                // #49789 - Required for gigya.saml.js, which can init with mobile adapter.
                window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(window.gigya.partnerSettings.plugins.apiDomain, window.gigya.defaultApiDomain);
                window.gigya.events.addMap({
                    defaultMethod: function (eventObject) {
                        _this.onPluginEvent(eventObject);
                    },
                    eventMap: [{ events: '*', args: ['$event'] }],
                });
                this.sendToMobile(GET_IDS, {}, function (response) {
                    _this.ucid = response.ucid;
                    _this.gcid = response.gcid;
                    for (var namespace in window.gigya.events.global._activeNamespaces) {
                        _this.registerForNamespaceEvents(namespace);
                    }
                    callback();
                });
                return [2 /*return*/];
            });
        });
    };
    MobileAdapter.prototype.getTokenParam = function (APIKey, paramName) {
        return '';
    };
    MobileAdapter.prototype.onPluginEvent = function (event) {
        if (!event.isGlobal) {
            this.sendToMobile(ON_PLUGIN_EVENT, event);
        }
    };
    MobileAdapter.prototype.onCustomEvent = function (event) {
        this.sendToMobile(ON_CUSTOM_EVENT, event);
    };
    MobileAdapter.prototype.onJSLog = function (logType, logInfo) {
        if (!this.isLogLevelSupported(logType))
            return;
        var log = {
            logType: logType,
            logInfo: logInfo,
        };
        this.sendToMobile(ON_JS_LOG, log);
    };
    MobileAdapter.prototype.registerForNamespaceEvents = function (namespace) {
        this.sendToMobile(REGISTER_FOR_NAMESPACE_EVENTS, { namespace: namespace });
    };
    MobileAdapter.prototype.getGmidTicket = function (callback) {
        if (!callback)
            return;
        var params = { expires: 30 };
        var settings = { forceHttps: true };
        this.sendRequest('socialize.getGmidTicket', params, function (response) {
            callback(response['gmidTicket']);
        }, settings);
        return '';
    };
    MobileAdapter.prototype.clearSession = function (params, callback) {
        this.sendToMobile(CLEAR_SESSION, params, callback);
    };
    MobileAdapter.prototype.isSessionValid = function (params, callback) {
        this.sendToMobile(IS_SESSION_VALID, {}, callback);
    };
    MobileAdapter.prototype.sendRequest = function (methodName, params, callback, settings) {
        this.sendToMobile(SEND_REQUEST, params, callback, methodName, settings);
    };
    MobileAdapter.prototype.sendOauthRequest = function (methodName, params, callback, settings) {
        this.sendToMobile(SEND_OAUTH_REQUEST, params, callback, methodName, settings);
    };
    MobileAdapter.prototype.sendToMobile = function (action, params, callback, method, settings) {
        var _this = this;
        if (method === void 0) { method = ''; }
        if (!this.isActionSupported(action)) {
            if (callback) {
                callback({
                    errorCode: GSErrors_1.GSErrors.NOT_SUPPORTED,
                    errorMessage: 'Mobile SDK does not support feature ' + action,
                });
            }
        }
        else {
            if (params)
                delete params['APIKey'];
            var callbackID_1 = '';
            if (callback) {
                callbackID_1 = new Date().getTime() + '_' + Math.random();
                exports.mobileCallbacks[callbackID_1] = function (response) {
                    callback(_this.unobfuscate(response, true));
                    delete exports.mobileCallbacks[callbackID_1];
                };
            }
            var serializedParams = this.obfuscate(window.gigya.utils.keyValue.serialize(params));
            var serializedSettings = window.gigya.utils.keyValue.serialize(settings);
            var queryString = "callbackID=" + callbackID_1 + "&params=" + encodeURIComponent(serializedParams) + "&settings=" + encodeURIComponent(serializedSettings);
            if (!this.nativeProxy.sendToMobile) {
                this.sendWithIframe(action, method, queryString, callbackID_1);
            }
            else {
                var doesNativeSupport = this.nativeProxy.sendToMobile(action, method, queryString);
                if (!doesNativeSupport) {
                    var msg = 'The Native Mobile SDK does not support feature ' + action;
                    window.gigya.logger.error(msg);
                    exports.mobileCallbacks[callbackID_1]({
                        errorCode: GSErrors_1.GSErrors.NOT_SUPPORTED,
                        errorMessage: msg,
                    });
                }
            }
        }
    };
    MobileAdapter.prototype.sendWithIframe = function (action, method, queryString, callbackID) {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = "" + URL_PREFIX + action + "/" + method + "?" + queryString;
        function clean() {
            if (iframe) {
                try {
                    document.documentElement.removeChild(iframe);
                    iframe.remove();
                }
                catch (e) {
                    // ignore
                }
            }
        }
        if (callbackID && exports.mobileCallbacks[callbackID]) {
            var originalCallback_1 = exports.mobileCallbacks[callbackID];
            exports.mobileCallbacks[callbackID] = function (res) {
                originalCallback_1(res);
                clean();
            };
        }
        else {
            window.setTimeout(function () { return clean(); }, 300);
        }
        // iframe appended outside the event to prevent keyboard from closing in web view Bug 37156
        window.setTimeout(function () { return document.documentElement.appendChild(iframe); }, 0);
    };
    MobileAdapter.prototype.onSDKEvent = function (eventObject) {
        if (eventObject && eventObject['user']) {
            window.gigya._.convertIdentitiesArrayToObject(eventObject['user']);
        }
        window.gigya.events.global.dispatch(eventObject);
    };
    MobileAdapter.prototype.isActionSupported = function (action) {
        if (!action)
            return false;
        return window.gigya.utils.array.indexOf(this.features, action) > -1;
    };
    MobileAdapter.prototype.isLogLevelSupported = function (logType) {
        return window.gigya.utils.array.indexOf(this.settings.logLevel, '*') != -1 || window.gigya.utils.array.indexOf(this.settings.logLevel, logType) != -1;
    };
    MobileAdapter.prototype.setGltexpFromSSO = function (apiKey) {
        return gigya.Promise.resolve(false);
    };
    MobileAdapter.prototype.obfuscate = function (string) {
        if (this.obfuscationStrategy === 'base64') {
            return btoa(string);
        }
        else {
            return string;
        }
    };
    MobileAdapter.prototype.unobfuscate = function (string, isJSON) {
        if (this.obfuscationStrategy === 'base64') {
            var plainString = atob(string);
            if (isJSON) {
                return JSON.parse(plainString);
            }
            else {
                return plainString;
            }
        }
        else {
            return string;
        }
    };
    return MobileAdapter;
}());
exports.MobileAdapter = MobileAdapter;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts":
/*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function showPlugin(plugin, params) {
    var parts = plugin.split('.');
    var pluginName = parts.splice(parts.length - 1, 1)[0];
    if (!parts.length)
        parts = ['socialize'];
    if (plugin == 'commentsUI')
        parts = ['comments'];
    var funcName = 'show' + window.gigya.utils.stringUtils.capitalize(pluginName);
    parts.push(funcName);
    var obj = window.gigya;
    while (obj && parts.length)
        obj = obj[parts.shift()];
    if (typeof obj !== 'function') {
        return window.gigya.events.dispatchInvalidParamError(window.gigya.utils.object.merge([{ plugin: plugin }, params]), 'plugin');
    }
    obj(params);
}
exports.showPlugin = showPlugin;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Mobile/index.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_ApiAdaptersMobile = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter */ "./src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts");
var Gigya_ApiAdaptersMobile_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Mobile/app/showPlugin */ "./src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.apiAdapters) {
    window.gigya._.apiAdapters = {};
}
if (!window.gigya._.apiAdapters.mobile) {
    window.gigya._.apiAdapters.mobile = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.apiAdapters.mobile, Gigya_ApiAdaptersMobile, Gigya_ApiAdaptersMobile_1);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

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


/***/ }),

/***/ "./src/core/Gigya.Js/app/LocalInfo.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var domains_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var userAgent = navigator.userAgent.toLowerCase();
exports.localInfo = {
    baseDomain: '',
    isBrowserSupportsFilesAPI: (function () {
        return typeof FileReader === 'function' || typeof FileReader === 'object';
    })(),
    initTime: new Date(),
    version: 0,
    pageDomain: document.location.hostname,
    protocol: document.location.protocol == 'http:' ? 'http' : 'https',
    userAgent: userAgent,
    isWin: userAgent.indexOf('win') != -1,
    isIE: userAgent.indexOf('msie') != -1 || (userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident') != -1),
    isIE6: userAgent.indexOf('msie 6.') != -1,
    isIE7: userAgent.indexOf('msie 7.') != -1,
    isIE8: userAgent.indexOf('msie 8.') != -1,
    isIE9: userAgent.indexOf('msie 9.') != -1,
    isIE10: userAgent.indexOf('msie 10.') != -1,
    isIE11: userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident/7.0') != -1,
    isEdge: userAgent.indexOf('edge') != -1,
    isIOS: userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1 || userAgent.indexOf('ipod') != -1,
    isSafari534: userAgent.indexOf('safari/534') != -1,
    isWeChat: userAgent.indexOf('micromessenger') != -1,
    iosVersion: (function () {
        if (userAgent.indexOf('applewebkit') != -1 && userAgent.indexOf('version/') != -1) {
            return parseInt(userAgent.split('version/')[1].split(' ')[0]);
        }
        else
            return 0;
    })(),
    isAndroid: userAgent.indexOf('android') != -1,
    isAndroidBrowser: (function (userAgent) {
        if (userAgent.indexOf('mozilla/5.0') === -1)
            return false;
        if (userAgent.indexOf('android 4') === -1)
            return false;
        if (userAgent.indexOf('applewebkit') === -1)
            return false;
        if (userAgent.indexOf('windows phone') !== -1)
            return false;
        // Special user agents found so far that violate the existance of chrome rule
        // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
        // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
        // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
        // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
        var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
        if (!chromeInfo)
            return true;
        var chromeVersion = parseInt(chromeInfo[1]);
        return chromeVersion < 20;
    })(userAgent),
    currentBrowser: '',
    androidVersion: (function () {
        if (userAgent.indexOf('android') != -1) {
            return parseFloat(userAgent.slice(userAgent.indexOf('android') + 8));
        }
        else
            return 0;
    })(),
    isChrome: userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edge') == -1,
    isGoogleBot: userAgent.indexOf('googlebot') != -1,
    isFF: userAgent.indexOf('firefox') != -1,
    isOpera: userAgent.indexOf('opera') != -1,
    isSafari: navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
        navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
        userAgent.indexOf('android') == -1,
    isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isIOSChrome: userAgent.indexOf('crios') != -1,
    isMAC: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf('mac') != -1,
    isWindowsPhone: userAgent.indexOf('windows phone') != -1,
    isFacebookBrowser: userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
    supportsPostMessage: window.postMessage != null && (userAgent.indexOf('msie') == -1 || userAgent.indexOf('iemobile') != -1),
    supportsLocalStorage: false,
    supportsSessionStorage: false,
    supportsFlash: (function () {
        // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
        var supportsFlash = false;
        try {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                supportsFlash = true;
            }
            else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    supportsFlash = true;
                }
            }
        }
        catch (e) { }
        return supportsFlash;
    })(),
    quirksMode: document.compatMode == 'BackCompat' && userAgent.indexOf('msie') != -1,
    backCompat: document.compatMode == 'BackCompat',
    // TODO: Add isTablet function for devices non-Mobile
    isMobile: (function () {
        var mobileClients = [
            'iphone',
            'ipod',
            'android',
            'midp',
            '240x320',
            'blackberry',
            'netfront',
            'nokia',
            'panasonic',
            'portalmmm',
            'sharp',
            'sie-',
            'sonyericsson',
            'symbian',
            'windows ce',
            'benq',
            'mda',
            'mot-',
            'opera mini',
            'philips',
            'pocket pc',
            'sagem',
            'samsung',
            'htc',
        ];
        for (var i in mobileClients) {
            if (userAgent.indexOf(mobileClients[i]) != -1) {
                return true;
            }
        }
        return false;
    })(),
    isMobileApp: (function () {
        if (!document.getElementsByTagName)
            // for old IE
            return false;
        var metaTags = document.getElementsByTagName('meta');
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('name') == 'viewport') {
                var content = metaTags[i].getAttribute('content');
                if (content && content.indexOf('width=device-width') !== -1)
                    return true;
            }
        }
        return false;
    })(),
    isNativeMobileApp: false,
    isTouch: (function () {
        if ('ontouchstart' in window)
            // works on most browsers
            return true;
        if ('onmsgesturechange' in window) {
            // works on ie10
            // Try to determine if IE is open in metro mode. Metro doesn't allow activeX, that's the best test available as of IE11.
            try {
                new ActiveXObject('htmlfile');
                return false;
            }
            catch (e) {
                return true;
            }
        }
        return false;
    })(),
    isOnLine: function () { return navigator.onLine; },
    messagingMethod: 0
};
var isStorageEnabled = function (storageName) {
    try {
        var storage = window[storageName];
        if (!storage) {
            return false;
        }
        var testName = '_gig_localStorage_test';
        var testValue = 'just checking for localStorage';
        storage.setItem(testName, testValue);
        var result = storage.getItem(testName) === testValue;
        storage.removeItem(testName);
        return result;
    }
    catch (ex) {
        // Reasons:
        // - Inside 3rd party API proxy iFrame.
        // - Safari in incognito mode will error with "quota exceeded".
        // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
        return false;
    }
};
exports.localInfo.supportsLocalStorage = isStorageEnabled('localStorage');
exports.localInfo.supportsSessionStorage = isStorageEnabled('sessionStorage');
if (exports.localInfo.isIE11 && !window.indexedDB)
    // IE10-11 support postMessage between iframes but not inPrivate mode
    exports.localInfo.supportsPostMessage = false;
exports.localInfo.isMAC = exports.localInfo.isMAC && !exports.localInfo.isIOS;
var os = exports.localInfo.isWin
    ? 'windows'
    : exports.localInfo.isWindowsPhone
        ? 'winphone'
        : exports.localInfo.isIOS
            ? 'ios-v' + exports.localInfo.iosVersion
            : exports.localInfo.isMAC
                ? 'mac'
                : exports.localInfo.isAndroid
                    ? 'android'
                    : '';
if (os)
    os += ' ';
var browser = exports.localInfo.isChrome
    ? 'chrome'
    : exports.localInfo.isFF
        ? 'firefox'
        : exports.localInfo.isSafari
            ? 'safari'
            : exports.localInfo.isEdge
                ? 'edge'
                : exports.localInfo.isIE11
                    ? 'ie11'
                    : exports.localInfo.isIE10
                        ? 'ie10'
                        : exports.localInfo.isIE9
                            ? 'ie9'
                            : exports.localInfo.isIE8
                                ? 'ie8'
                                : '';
exports.localInfo.currentBrowser = os + browser;
var baseDomains;
if ((_b = (_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.baseDomains) === null || _b === void 0 ? void 0 : _b.length) {
    baseDomains = window.gigya.partnerSettings.baseDomains;
}
else {
    if (window.self === window.top) {
        // only in the top frame
        window.gigya.logger.warn('gigya: missing base domains for site');
    }
    baseDomains = [document.location.hostname];
}
exports.localInfo.baseDomain = domains_1.getBaseDomain(baseDomains);


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/DOM.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/DOM.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var viewportUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/viewport */ "./src/core/Gigya.Js/app/Utils/viewport.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
exports._popupContainers = [];
exports._pseudoContainers = [];
var _nextZIndex = 999999999;
var backListener = null;
function getNextZIndex() {
    _nextZIndex++;
    return _nextZIndex;
}
exports.getNextZIndex = getNextZIndex;
function getGigyaScriptElement(fileNames) {
    var scripts = document.getElementsByTagName('script');
    var scriptElement;
    var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src !== '') {
            if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
                var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                if (isFileNameExistInSrc) {
                    scriptElement = script;
                    break;
                }
            }
        }
    }
    return scriptElement;
}
exports.getGigyaScriptElement = getGigyaScriptElement;
function dispatch(el, eventName) {
    var event;
    try {
        event = new Event(eventName);
    }
    catch (e) {
        // IE10 and below support
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, {});
    }
    el.dispatchEvent(event);
}
exports.dispatch = dispatch;
function addButtonSubmitListener(el, handler, event, debugName) {
    if (event === void 0) { event = 'click'; }
    // Just in case the element does not exist.
    if (!el) {
        return;
    }
    el.setAttribute('role', 'button');
    if (el.getAttribute('tabindex') != '-1') {
        el.setAttribute('tabindex', '0');
    }
    addEventListener(el, event, function (e) { return handler(e); });
    addEventListener(el, 'keydown', function (e) {
        if ((e.which || e.keyCode) == 13) {
            e.preventDefault();
            handler(e);
        }
    });
}
exports.addButtonSubmitListener = addButtonSubmitListener;
function addEventListener(el, eventName, handler) {
    if (!el || !handler)
        return;
    if (el.addEventListener) {
        el.addEventListener(eventName, handler, true);
    }
    else {
        el.attachEvent('on' + eventName, handler);
    }
}
exports.addEventListener = addEventListener;
function removeEventListener(el, eventName, handler) {
    if (!handler)
        return;
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler, true);
    }
    else {
        el.detachEvent('on' + eventName, handler);
    }
}
exports.removeEventListener = removeEventListener;
function disableDefaultEventHandling(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    else if (window.event) {
        window.event.returnValue = false;
    }
}
exports.disableDefaultEventHandling = disableDefaultEventHandling;
function addDialogBackListener(handler) {
    _removeDialogBackListener();
    // This should fire when back is clicked
    backListener = function (e) {
        if (e && e.newURL && e.newURL.indexOf('|gigyaMobileDialog') == -1) {
            handler(e);
            _removeDialogBackListener();
        }
    };
    // hash could change right after the call if it was initiated from a link that didn't return false
    window.setTimeout(function () {
        if (window.location.hash.indexOf('|gigyaMobileDialog') == -1) {
            window.location.hash = window.location.hash + '|gigyaMobileDialog';
        }
        addEventListener(window, 'hashchange', backListener);
    }, 50);
}
exports.addDialogBackListener = addDialogBackListener;
function _removeDialogBackListener() {
    if (!backListener)
        return;
    removeEventListener(window, 'hashchange', backListener);
    backListener = null;
    //restore previous hash
    window.location.hash = window.location.hash.replace('|gigyaMobileDialog', '');
}
exports._removeDialogBackListener = _removeDialogBackListener;
function appendToBody(el, document) {
    if (document === void 0) { document = window.document; }
    if (!document.body)
        return;
    if (document.body.insertBefore && document.body.firstChild) {
        document.body.insertBefore(el, document.body.firstChild);
    }
    else {
        document.body.appendChild(el);
    }
}
exports.appendToBody = appendToBody;
function removeElement(el) {
    if (el && el.parentElement) {
        el.parentElement.removeChild(el);
    }
}
exports.removeElement = removeElement;
function isChildOf(child, parent) {
    var directParent = child.parentNode;
    while (directParent) {
        if (parent == directParent) {
            return true;
        }
        directParent = directParent.parentNode;
    }
    return false;
}
exports.isChildOf = isChildOf;
function isVisible(el) {
    while (el) {
        var computedStyle = getComputedStyle(el);
        if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
            return false;
        }
        else {
            el = el.parentElement;
        }
    }
    return true;
}
exports.isVisible = isVisible;
function getCenteredDivID(name) {
    return 'gig_' + LocalInfo_1.localInfo.initTime.getTime().toString() + '_' + name;
}
exports.getCenteredDivID = getCenteredDivID;
function createElementWithAttributes(domElemName, domElemAttrs) {
    var newDomElem = document.createElement(domElemName);
    if (domElemAttrs) {
        for (var elemAttr in domElemAttrs) {
            newDomElem[elemAttr] = domElemAttrs[elemAttr];
        }
    }
    return newDomElem;
}
exports.createElementWithAttributes = createElementWithAttributes;
function createTopLevelDiv(id) {
    var el = document.createElement('div');
    if (el.style.zIndex != null) {
        el.style.zIndex = '' + getNextZIndex();
    }
    el.innerHTML = '';
    if (id) {
        el.id = id;
    }
    if (document.body) {
        if (document.body.insertBefore && document.body.firstChild) {
            document.body.insertBefore(el, document.body.firstChild);
        }
        else if (document.body.appendChild) {
            document.body.appendChild(el);
        }
    }
    return el;
}
exports.createTopLevelDiv = createTopLevelDiv;
function hideByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = 'none';
    }
}
exports.hideByID = hideByID;
function showByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = LocalInfo_1.localInfo.isIE6 ? (el.tagName == 'TD' ? 'table-cell' : el.tagName == 'TR' ? '' : el.tagName == 'TABLE' ? '' : 'block') : '';
    }
}
exports.showByID = showByID;
function clearByID(id) {
    try {
        var c = document.getElementById(id);
        if (c != null) {
            c.innerHTML = '';
        }
    }
    catch (e) { }
}
exports.clearByID = clearByID;
function getHTMLSize(html, container) {
    var divMeasure = document.createElement('div');
    divMeasure.style.position = 'absolute';
    divMeasure.style.left = '-1000px';
    divMeasure.innerHTML = html;
    container.appendChild(divMeasure);
    var w = divMeasure.offsetWidth;
    var h = divMeasure.offsetHeight;
    divMeasure.parentNode.removeChild(divMeasure);
    return { w: w, h: h };
}
exports.getHTMLSize = getHTMLSize;
function getElementsByClass(parentElement, className, includeParent) {
    if (!parentElement) {
        return [];
    }
    var arEls = [];
    if (includeParent && isElementClass(parentElement, className)) {
        arEls.push(parentElement);
    }
    var els = parentElement.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
        if (isElementClass(els[i], className)) {
            arEls.push(els[i]);
        }
    }
    return arEls || [];
}
exports.getElementsByClass = getElementsByClass;
function getElementsByAttribute(parentElement, tagName, attributeName, attributeValue) {
    var arEls = [];
    var els = parentElement.getElementsByTagName(tagName);
    for (var i = 0; i < els.length; i++) {
        if (els[i].getAttribute(attributeName) == attributeValue) {
            arEls.push(els[i]);
        }
    }
    return arEls;
}
exports.getElementsByAttribute = getElementsByAttribute;
function getElementPosition(el) {
    if (!el) {
        return { left: 0, top: 0, bottom: 0, right: 0 };
    }
    var rect = el.getBoundingClientRect();
    var scroll = viewportUtils.getScroll();
    var left = rect.left + scroll.left;
    var top = rect.top + scroll.top;
    return {
        left: left,
        top: top,
        right: left + rect.width,
        bottom: top + rect.height,
    };
}
exports.getElementPosition = getElementPosition;
function addClassToElement(el, className) {
    if (!el) {
        return;
    }
    var existingClasses = el.className ? getClassNames(el) : [];
    var existingOriginalLength = existingClasses.length;
    var newClasses = className.split(' ');
    for (var j in newClasses) {
        var exists = false;
        if (!newClasses[j]) {
            break;
        }
        for (var i in existingClasses) {
            if (existingClasses[i] === newClasses[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            existingClasses.push(newClasses[j]);
        }
    }
    if (existingClasses.length !== existingOriginalLength) {
        el.className = existingClasses.join(' ');
    }
}
exports.addClassToElement = addClassToElement;
function removeClassFromElement(el, className, substring) {
    if (substring === void 0) { substring = false; }
    if (!el) {
        return;
    }
    var arClass = getClassNames(el);
    for (var i = arClass.length - 1; i >= 0; i--) {
        if (arClass[i] === className || (substring && arClass[i].indexOf(className) !== -1)) {
            arClass.splice(i, 1);
        }
    }
    el.className = arClass.join(' ');
}
exports.removeClassFromElement = removeClassFromElement;
function getClassNames(el) {
    var classes = [];
    if (typeof el.className === 'string') {
        classes = el.className.split(' ');
    }
    return classes;
}
exports.getClassNames = getClassNames;
function isElementClass(el, className) {
    if (!el)
        return false;
    else if (!className)
        return true;
    else if (!el.className)
        return false;
    var exists = false;
    var arClass = getClassNames(el);
    for (var i = 0; i < arClass.length; i++) {
        if (arClass[i] === className) {
            exists = true;
            break;
        }
    }
    return exists;
}
exports.isElementClass = isElementClass;
function cancelEvent(event) {
    if (!event)
        return;
    if ('cancelable' in event)
        // All browsers except <IE9
        event.preventDefault();
    else
        event.returnValue = false;
}
exports.cancelEvent = cancelEvent;
function createElement(type, name) {
    var divContainer = document.createElement('div');
    name = name || '';
    divContainer.innerHTML = '<' + type + ' name="' + name + '" id="' + name + '"></' + type + '>';
    return divContainer.firstChild;
}
exports.createElement = createElement;
function setSize(container, w, h, center) {
    if (container == null || container.style == null) {
        return;
    }
    if (w) {
        w = '' + w;
        var isWidthPrecentage = w.indexOf('%') > 0;
        if (!isNaN(w) || isWidthPrecentage) {
            var widthValue = '' + (isWidthPrecentage ? w : w + 'px');
            if (container.style.width != widthValue) {
                container.style.width = widthValue;
            }
        }
    }
    if (h) {
        h = '' + h;
        var isHeightPrecentage = h.indexOf('%') > 0;
        if (!isNaN(w) || isHeightPrecentage) {
            var heightValue = '' + (isHeightPrecentage ? h : h + 'px');
            if (container.style.height !== heightValue) {
                container.style.height = heightValue;
            }
        }
    }
    if (center && w && h) {
        if (container.style.zIndex == null || center) {
            container.style.zIndex = '' + getNextZIndex();
        }
        var vp = viewportUtils.getInnerSize();
        var scrl = viewportUtils.getScroll();
        var vpt = scrl.top;
        var vpl = scrl.left;
        container.style.top = '' + Math.max(0, vpt + Math.floor((vp.h - h) / 2)) + 'px';
        container.style.left = '' + Math.max(0, vpl + Math.floor((vp.w - w) / 2)) + 'px';
        container.style.visibility = '';
    }
}
exports.setSize = setSize;
function createHiddenIframe(src) {
    var ifr = document.createElement('iframe');
    ifr.src = src;
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (document.body) {
        appendToBody(ifr);
    }
    else {
        functionsUtils.invokeOnPageLoad(function () {
            appendToBody(ifr);
        });
    }
    return ifr;
}
exports.createHiddenIframe = createHiddenIframe;
function attributeEncode(value) {
    return value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#39;'); // IE8 doesn't support &apos;
}
exports.attributeEncode = attributeEncode;
function manipulateAttributes(elements, matcher, replacePredicate, criteria) {
    if (criteria === void 0) { criteria = function () { return true; }; }
    elements.forEach(function (el) {
        if (!el.attributes)
            return;
        Array.prototype.slice.call(el.attributes).forEach(function (attr) {
            if (criteria(attr)) {
                attr.value = attr.value.replace(matcher, replacePredicate);
            }
        });
    });
}
exports.manipulateAttributes = manipulateAttributes;
function textNodesUnder(el) {
    var n;
    var textNodes = [];
    var treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    while ((n = treeWalker.nextNode())) {
        textNodes.push(n);
    }
    return textNodes;
}
exports.textNodesUnder = textNodesUnder;
function isHTMLBooleanAttribute(attrName) {
    return ['autocomplete', 'autofocus', 'checked', 'disabled', 'hidden', 'readonly', 'required', 'selected'].indexOf(attrName) > -1;
}
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
function isBelongToGigyaFieldset(el) {
    if (!el || el instanceof HTMLFormElement) {
        return false; // end of recursion - element is not a child of a fieldset
    }
    if (isElementClass(el.parentElement, 'gigya-fieldset')) {
        return true;
    }
    return isBelongToGigyaFieldset(el.parentElement);
}
exports.isBelongToGigyaFieldset = isBelongToGigyaFieldset;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/JSON.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
    if (includeFunctions === void 0) { includeFunctions = false; }
    if (prettyPrint === void 0) { prettyPrint = false; }
    if (l === void 0) { l = 0; }
    if (maxLevel === void 0) { maxLevel = 20; }
    if (!LocalInfo_1.localInfo.isIE8) {
        return window['JSON'].stringify(obj);
    }
    else {
        if (!l)
            l = 0;
        if (l > maxLevel)
            return '[Too deep]';
        var prefix = '';
        var newline = '';
        var tab = '';
        if (prettyPrint) {
            tab = '\t';
            newline = '\n';
            for (var i = 0; i < l + 1; i++) {
                prefix += tab;
            }
        }
        var t = typeof obj;
        if (t == 'function') {
            return t.toString();
        }
        if (t != 'object' || obj === null) {
            // simple data type
            if (t == 'string')
                obj = '"' + obj.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
            return String(obj);
        }
        else {
            var n, v, json = [], arr = obj && obj.constructor == Array;
            if (arr) {
                for (var i = 0; i < obj.length; i++) {
                    v = obj[i];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = '';
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions)
                            v = 'Function';
                        else
                            v = '';
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + String(v));
                }
            }
            else {
                for (n in obj) {
                    v = obj[n];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = String(v);
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions) {
                            v = 'Function';
                        }
                        else {
                            v = '';
                        }
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = newline + serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + '"' + n.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '":' + String(v));
                }
            }
            return newline + prefix + (arr ? '[' : '{') + newline + json.join(',' + newline) + newline + prefix + (arr ? ']' : '}');
        }
    }
}
exports.serialize = serialize;
function deserialize(json, defaultValue, scope) {
    // Return default value if is empty string (or similar).
    if (!json || !json.replace(/^\s+|\s+$/g, '')) {
        return defaultValue || {};
    }
    // Attempt to parse. On error, warn in console and return default value.
    try {
        var keys = [];
        var values = [];
        if (scope) {
            for (var key in scope) {
                keys.push(key);
                values.push(scope[key]);
            }
        }
        var fn = eval("(function(" + keys.join(',') + ") { return " + json.trim() + "; })");
        return fn.apply(undefined, values);
    }
    catch (e) {
        console.warn('Error deserializing JavaScript', e);
        return defaultValue || {};
    }
}
exports.deserialize = deserialize;
function parse(json, defaultValue) {
    if (LocalInfo_1.localInfo.isIE8) {
        return deserialize(json, defaultValue);
    }
    else {
        try {
            return window['JSON'].parse(json);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
}
exports.parse = parse;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/Uri.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var Uri = /** @class */ (function () {
    function Uri(url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        this._anchor = document.createElement('a');
        var protocol = document.location.protocol == 'http:' ? 'http' : 'https';
        if (isAbsolute && url.indexOf('://') === -1 && url.charAt(0) !== '/')
            url = protocol + "://" + url;
        this._anchor.href = url;
    }
    Object.defineProperty(Uri.prototype, "domain", {
        get: function () {
            return this._anchor.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "path", {
        get: function () {
            return this._anchor.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "href", {
        get: function () {
            return this._anchor.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "search", {
        get: function () {
            return this._anchor.search.slice(1);
        } // dropping '?'
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "hash", {
        get: function () {
            return this._anchor.hash.slice(1);
        } // dropping '#'
        ,
        enumerable: true,
        configurable: true
    });
    Uri.prototype.toString = function () {
        return this._anchor.href;
    };
    Uri.prototype.addToSearch = function (params) {
        for (var name in params) {
            var val = params[name];
            if ((typeof val == 'boolean' || typeof val == 'number' || typeof val == 'string') && name != 'eventName') {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search += "" + addition + name + "=" + encodeURIComponent(params[name]);
            }
        }
        return this;
    };
    Uri.prototype.fetch = function (retries) {
        if (retries === void 0) { retries = 0; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 8]);
                        if (!window.fetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.browserFetch()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.xhr()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        e_1 = _b.sent();
                        if (retries <= 0)
                            throw new Error("fetch failed: " + e_1);
                        return [4 /*yield*/, this.delay(1)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.fetch(retries - 1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Uri.prototype.isBaseOf = function (url) {
        return Uri.parse(url).isIn(this);
    };
    Uri.prototype.isIn = function (base) {
        if (typeof base === 'string') {
            base = Uri.parse(base);
        }
        return ((this.domain == base.domain || // page is the base domain
            this.isSubDomainOf(base)) && // or sub-domain of it
            (!base.path || this.path.indexOf(base.path) == 0)); // page is also in base's defined path;
    };
    Uri.prototype.isForSubDomains = function () {
        return this.domain.indexOf('.') == 0;
    };
    Uri.prototype.isSubDomainOf = function (base) {
        var domain = '';
        if (!base.isForSubDomains())
            domain = '.';
        domain += base.domain;
        return stringUtilsUtils.endsWith(this.domain, domain);
    };
    Uri.parse = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        if (!url)
            return undefined;
        return new Uri(url, isAbsolute);
    };
    Uri.prototype.browserFetch = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.toString();
                        return [4 /*yield*/, window.fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("fetch failed");
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Uri.prototype.xhr = function () {
        var url = this.toString();
        return new gigya.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onerror = reject;
            xhr.onload = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return reject("xhr failed - " + xhr.status + " - " + xhr.statusText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    return resolve(jsonResponse);
                }
                catch (e) {
                    return reject(e);
                }
            };
        });
    };
    Uri.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    return Uri;
}());
exports.Uri = Uri;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/array.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/array.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function indexOf(ar, o) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == o)
            return i;
    }
    return -1;
}
exports.indexOf = indexOf;
function clone(ar) {
    var ar2 = [];
    for (var i = 0; i < ar.length; i++) {
        ar2[i] = ar[i];
    }
    return ar2;
}
exports.clone = clone;
function removeByValue(ar, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByValue = removeByValue;
function removeByProperty(ar, property, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i][property] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByProperty = removeByProperty;
function getArrayFromString(str, delimiter, lowerCase) {
    // check for string type in the input and not empty.
    if (!str || typeof str != 'string')
        return [];
    // lowercase if demended
    if (lowerCase)
        str = str.toLowerCase();
    // clean the string:
    str = str.replace(/[ ]/g, '').replace(/,,/g, ',');
    // if string empty
    if (!str)
        return [];
    // return array from string
    return str.split(delimiter);
}
exports.getArrayFromString = getArrayFromString;
function intersect(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (array == null)
        return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
        var item = array[i];
        if (this.indexOf(result, item) != -1)
            continue;
        for (var j = 1; j < argsLength; j++) {
            var arr = arguments[j];
            if (arr == null || this.indexOf(arr, item) == -1)
                break;
        }
        if (j === argsLength)
            result.push(item);
    }
    return result;
}
exports.intersect = intersect;
function lastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
function forEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.forEach = forEach;
function forEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.forEachProp = forEachProp;
function some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.some = some;
function every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.every = every;
function everyProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.everyProp = everyProp;
function map(arr, action) {
    var result = new Array();
    forEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.map = map;
function firstIndex(arr, condition) {
    var result = -1;
    some(arr, function (item, index, arr) {
        if (condition(item, index, arr)) {
            result = index;
            return true;
        }
        return false;
    });
    return result;
}
exports.firstIndex = firstIndex;
function first(arr, condition) {
    return arr[firstIndex(arr, condition)];
}
exports.first = first;
function getAllEnumValues(enumType) {
    var results = [];
    for (var i in enumType)
        if (typeof enumType[i] == 'number')
            results.push(enumType[i]);
    return results;
}
exports.getAllEnumValues = getAllEnumValues;
function getUniqueValues(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
    }
    return arr;
}
exports.getUniqueValues = getUniqueValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/cookie.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function _getBaseDomain() {
    return LocalInfo_1.localInfo.baseDomain || '';
}
exports._getBaseDomain = _getBaseDomain;
function getDefaultDomain(pageDomain, baseDomain) {
    if (pageDomain === void 0) { pageDomain = LocalInfo_1.localInfo.pageDomain; }
    if (baseDomain === void 0) { baseDomain = _getBaseDomain(); }
    var cookieDomain;
    cookieDomain =
        baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length
            ? baseDomain
            : pageDomain;
    return cookieDomain;
}
exports.getDefaultDomain = getDefaultDomain;
function get(name) {
    name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1').replace(/^[ \t]+|[ \t]+$/g, '');
    var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
    var match = document.cookie.match(regex);
    return match && unescape(match[1]);
}
exports.get = get;
function set(name, value, expires_in, cookieDomain, dontUseRootPath) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    if (cookieDomain == null) {
        cookieDomain = getDefaultDomain();
    }
    var expireMs;
    if (expires_in == null || expires_in === '' || isNaN(expires_in)) {
        expireMs = 1000 * getInfiniteExpirationTimeInSeconds();
    }
    else if (expires_in == 0) {
        // 0 means Session
        expireMs = null;
    }
    else {
        // Any other value is number of seconds (A negative value would mean expire now!)
        expireMs = expires_in * 1000;
    }
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expireMs);
    var cookieString = name +
        '=' +
        escape(value) +
        (dontUseRootPath ? '' : '; path=/') +
        (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
        (cookieDomain && cookieDomain != '' && cookieDomain.indexOf('.') != -1 ? '; domain=' + cookieDomain : '');
    document.cookie = cookieString;
    // Some browsers like IE8 don't like some domains (e.g. domains of the form xx.yy)
    // http://stackoverflow.com/questions/1189638/internet-explorer-xx-yy-website-issue
    if ((!expireMs || expireMs > 0) && !get(name)) {
        cookieString =
            name +
                '=' +
                escape(value) +
                (dontUseRootPath ? '' : '; path=/') +
                (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
                (pageDomain && pageDomain != '' && pageDomain.indexOf('.') != -1 ? '; domain=' + pageDomain : '');
        document.cookie = cookieString;
    }
}
exports.set = set;
function remove(name) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    var baseDomain = _getBaseDomain();
    if (baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length) {
        set(name, '', -1, baseDomain); // remove also from the subDomain.
        set(name, '', -1, baseDomain, true);
    }
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain);
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain, true);
    set(name, '', -1, '');
    set(name, '', -1, '', true);
}
exports.remove = remove;
function getInfiniteExpirationTimeInSeconds() {
    // Set expiration time to 1 years
    return 60 * 60 * 24 * 365;
}
exports.getInfiniteExpirationTimeInSeconds = getInfiniteExpirationTimeInSeconds;
function canSaveCookie(doc) {
    if (doc === void 0) { doc = document; }
    var d = new Date(new Date().getTime() + 1000); // 1 second expiration.
    try {
        doc.cookie = 'gig3pctest=true;expires=' + d['toGMTString']();
        return doc.cookie.indexOf('gig3pctest') !== -1;
    }
    catch (e) {
        // iOS 10 webview throws in some scenarios
        return false;
    }
}
exports.canSaveCookie = canSaveCookie;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/domains.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var gigyaDomainNamespaces = ['socialize', 'accounts', 'fidm', 'gm', 'comments', 'gcs', 'ids', 'ds', 'gscounters'];
function apiDomainFactory(apiDomain, defaultApiDomain) {
    if (apiDomain === void 0) { apiDomain = resolveApiDomain(); }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(Uri_1.Uri.parse(defaultApiDomain));
    return function (namespace) {
        if (namespace && shouldAddNamespace) {
            var subDomain = namespace.split('.')[0];
            if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error("trying to send request to an invalid domain");
                subDomain = gigyaDomainNamespaces[0];
            }
            return subDomain + "." + apiDomain;
        }
        else {
            return apiDomain;
        }
    };
}
exports.apiDomainFactory = apiDomainFactory;
function getGigyaDomain(namespace, dataCenter, defaultDomain) {
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultDomain === void 0) { defaultDomain = window.gigya.defaultApiDomain; }
    var domain = dataCenter + "." + defaultDomain;
    if (namespace)
        return namespace + "." + domain;
    else
        return domain;
}
exports.getGigyaDomain = getGigyaDomain;
function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
    if (baseDomains === void 0) { baseDomains = window.gigya.partnerSettings.baseDomains; }
    if (currentDomain === void 0) { currentDomain = location.hostname; }
    if (defaultDomains === void 0) { defaultDomains = ['gigya.com', 'gigya-api.cn', window.gigya.defaultApiDomain]; }
    // #49786 - Support webview without hostname.
    if (!currentDomain) {
        return '';
    }
    if (typeof baseDomains == 'string') {
        baseDomains = baseDomains.split(',');
    }
    var originURI = Uri_1.Uri.parse(currentDomain);
    if (defaultDomains) {
        baseDomains = baseDomains.concat(defaultDomains);
    }
    for (var _i = 0, baseDomains_1 = baseDomains; _i < baseDomains_1.length; _i++) {
        var rawDomain = baseDomains_1[_i];
        // This does not take care of wildcards in the middle of string.
        var baseDomain = stringUtilsUtils.replaceAll(rawDomain, '*', '');
        var baseUri = Uri_1.Uri.parse(baseDomain);
        if (baseUri && originURI.isIn(baseUri)) {
            if (baseUri.isForSubDomains()) {
                return originURI.domain;
            }
            else {
                return baseUri.domain;
            }
        }
    }
    // fallback to the parent's window domain (for backward compatibility).
    return originURI.domain;
}
exports.getBaseDomain = getBaseDomain;
function resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultApiDomain) {
    if (customApiDomainPrefix === void 0) { customApiDomainPrefix = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix; }
    if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain; }
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    if (customApiDomainPrefix && baseDomain && baseDomain !== defaultApiDomain) {
        return customApiDomainPrefix + "." + baseDomain;
    }
    else {
        return getGigyaDomain(undefined, dataCenter, defaultApiDomain);
    }
}
exports.resolveApiDomain = resolveApiDomain;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/functions.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/functions.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callFunction(name, arParams) {
    var fn = eval(name);
    var arParts = name.split('.');
    arParts.splice(arParts.length - 1, 1);
    var scope = eval(arParts.join('.'));
    fn.apply(scope, arParams);
}
exports.callFunction = callFunction;
function invokeOnPageLoad(func, completeOnly) {
    if ((!document.readyState && document.body) ||
        document.readyState === 'complete' ||
        (!completeOnly && document.readyState === 'interactive' && document.body)) {
        func();
    }
    else {
        var called_1 = false;
        var fnOnLoad = function () {
            if (!called_1) {
                called_1 = true;
                func();
            }
        };
        window.setTimeout(fnOnLoad, 20000); // fallback - sometimes readystate stays stuck on interactive
        DOMUtils.addEventListener(window, 'load', fnOnLoad);
        DOMUtils.addEventListener(document, 'DOMContentLoaded', fnOnLoad);
    }
}
exports.invokeOnPageLoad = invokeOnPageLoad;
function createAlias(publicName, fnc) {
    var arNameSegments = publicName.split('.');
    var oCurrentSegment = window;
    for (var iSegment = 0; iSegment < arNameSegments.length - 1; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        if (!oCurrentSegment[sSegment]) {
            oCurrentSegment[sSegment] = {};
        }
        oCurrentSegment = oCurrentSegment[sSegment];
    }
    oCurrentSegment[arNameSegments[arNameSegments.length - 1]] = fnc;
}
exports.createAlias = createAlias;
function debounce(fn, delayMilliseconds) {
    var timer = undefined;
    return function () {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = undefined;
            fn();
        }, delayMilliseconds);
    };
}
exports.debounce = debounce;
function addSrcToIFrameIfNeeded(iframe, src) {
    if (src === void 0) { src = cdn_1.getCdnResource('/'); }
    if (LocalInfo_1.localInfo.isIOSWebView || (LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat)) {
        iframe.setAttribute('src', src);
    }
}
exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/localStorage.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AbstractLocalStorageAdapter = /** @class */ (function () {
    function AbstractLocalStorageAdapter() {
    }
    AbstractLocalStorageAdapter.getName = function () {
        return 'AbstractAdapter';
    };
    /**
     * Set object to storage.
     */
    AbstractLocalStorageAdapter.prototype.setObject = function (key, o) {
        this.setItem(key, JSONUtils.serialize(o));
    };
    /**
     * Get object from local storage.
     */
    AbstractLocalStorageAdapter.prototype.getObject = function (key, defaultValue) {
        return JSONUtils.deserialize(this.getItem(key), defaultValue);
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    AbstractLocalStorageAdapter.prototype.isPersistent = function () {
        return true;
    };
    return AbstractLocalStorageAdapter;
}());
exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
var AbstractAsyncLocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractAsyncLocalStorageAdapter, _super);
    function AbstractAsyncLocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.isLoaded = false;
        return _this;
    }
    AbstractAsyncLocalStorageAdapter.prototype.isReady = function () {
        return this.isLoaded;
    };
    /**
     * Used when there is initialization time on the local storage adapter.
     */
    AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (callback) {
        var _this = this;
        if (this.isReady()) {
            callback();
            return;
        }
        else {
            setTimeout(function () { return _this.waitForService(callback); }, 50);
        }
    };
    return AbstractAsyncLocalStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.AbstractAsyncLocalStorageAdapter = AbstractAsyncLocalStorageAdapter;
var StorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(StorageAdapter, _super);
    function StorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAdapter.prototype.getItem = function (key) {
        return this.storage[key];
    };
    StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            this.storage[key] = value;
        }
        catch (ex) { }
    };
    StorageAdapter.prototype.removeItem = function (key) {
        this.storage.removeItem(key);
    };
    return StorageAdapter;
}(AbstractLocalStorageAdapter));
var LocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageAdapter, _super);
    function LocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.localStorage;
        return _this;
    }
    LocalStorageAdapter.getName = function () {
        return 'LocalStorageAdapter';
    };
    LocalStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsLocalStorage;
    };
    return LocalStorageAdapter;
}(StorageAdapter));
var SessionStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageAdapter, _super);
    function SessionStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.sessionStorage;
        return _this;
    }
    SessionStorageAdapter.getName = function () {
        return 'SessionStorageAdapter';
    };
    SessionStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsSessionStorage;
    };
    return SessionStorageAdapter;
}(StorageAdapter));
var FirefoxStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FirefoxStorageAdapter, _super);
    function FirefoxStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirefoxStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.isFF && window['globalStorage'];
    };
    FirefoxStorageAdapter.getName = function () {
        return 'FirefoxStorageAdapter';
    };
    FirefoxStorageAdapter.prototype.getItem = function (key) {
        return window['globalStorage'][location.hostname][key];
    };
    FirefoxStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            window['globalStorage'][location.hostname][key] = value;
        }
        catch (ex) { }
    };
    FirefoxStorageAdapter.prototype.removeItem = function (key) {
        delete window['globalStorage'][location.hostname][key];
    };
    return FirefoxStorageAdapter;
}(AbstractLocalStorageAdapter));
var FlashAsyncStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FlashAsyncStorageAdapter, _super);
    function FlashAsyncStorageAdapter() {
        var _this = _super.call(this) || this;
        // Load SWF store library.
        _this.loadSwfStore(function (isSuccess) {
            _this.isLoaded = true;
        });
        return _this;
    }
    FlashAsyncStorageAdapter.isAvailable = function () {
        // There is no current scenario where using Flash Storage is helpful outside of IE.
        return LocalInfo_1.localInfo.supportsFlash && (LocalInfo_1.localInfo.isIE || LocalInfo_1.localInfo.isEdge);
    };
    FlashAsyncStorageAdapter.getName = function () {
        return 'FlashAsyncStorageAdapter';
    };
    /**
     * First, load the JavaScript swfstore SDK.
     */
    FlashAsyncStorageAdapter.prototype.loadSwfStore = function (callback) {
        var _this = this;
        // Load SwfStore if necessary.
        if (window['SwfStore']) {
            this.initializeSwfStore(function () { return _this.loadSwfStore(callback); });
            return;
        }
        scriptUtils.load('https://cdns.gigya.com/gs/js/swfstore.min.js', function () {
            // Error handler.
            console.log('Failed to load Gigya SwfStore.');
            callback(false);
        }, function () {
            // Success handler.
            _this.initializeSwfStore(callback);
        }, true);
    };
    /**
     * Iniitalize the SwfStore class.
     */
    FlashAsyncStorageAdapter.prototype.initializeSwfStore = function (callback) {
        this.swfStore = new SwfStore({
            namespace: 'gigSSO',
            swf_url: 'https://cdns.gigya.com/gs/swf/swfstore.swf',
            onready: function () {
                callback(true);
            },
            onerror: function () {
                console.log('Failed to initialize Gigya SwfStore.');
                callback(false);
            },
        });
    };
    FlashAsyncStorageAdapter.prototype.getItem = function (key) {
        return this.swfStore.get(key);
    };
    FlashAsyncStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.swfStore.set(key, value);
    };
    FlashAsyncStorageAdapter.prototype.removeItem = function (key) {
        this.swfStore.clear(key);
    };
    return FlashAsyncStorageAdapter;
}(AbstractAsyncLocalStorageAdapter));
var CookieStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(CookieStorageAdapter, _super);
    function CookieStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CookieStorageAdapter.isAvailable = function () {
        return cookieUtils.canSaveCookie();
    };
    CookieStorageAdapter.getName = function () {
        return 'CookieStorageAdapter';
    };
    CookieStorageAdapter.prototype.getItem = function (key) {
        return cookieUtils.get(key);
    };
    CookieStorageAdapter.prototype.setItem = function (key, value, expiresIn, domain) {
        cookieUtils.set(key, value, expiresIn, domain);
    };
    CookieStorageAdapter.prototype.removeItem = function (key) {
        cookieUtils.remove(key);
    };
    return CookieStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.CookieStorageAdapter = CookieStorageAdapter;
var MemoryStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(MemoryStorageAdapter, _super);
    function MemoryStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.memory = {};
        return _this;
    }
    MemoryStorageAdapter.isAvailable = function () {
        return true;
    };
    MemoryStorageAdapter.getName = function () {
        return 'MemoryStorageAdapter';
    };
    MemoryStorageAdapter.prototype.getItem = function (key) {
        return this.memory[key];
    };
    MemoryStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.memory[key] = value;
    };
    MemoryStorageAdapter.prototype.removeItem = function (key) {
        delete this.memory[key];
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    MemoryStorageAdapter.prototype.isPersistent = function () {
        return false;
    };
    return MemoryStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.MemoryStorageAdapter = MemoryStorageAdapter;
exports.adapters = [
    LocalStorageAdapter,
    SessionStorageAdapter,
    FirefoxStorageAdapter,
    FlashAsyncStorageAdapter,
    CookieStorageAdapter,
    MemoryStorageAdapter,
];
exports.instances = {};
function initializeAdapter(adapter) {
    var adapterName = adapter.getName() || adapter.name;
    if (!exports.instances[adapterName]) {
        exports.instances[adapterName] = new adapter();
    }
    return exports.instances[adapterName];
}
exports.initializeAdapter = initializeAdapter;
function waitForService(callback) {
    // Select compatible adapter.
    var storage;
    for (var _i = 0, adapters_1 = exports.adapters; _i < adapters_1.length; _i++) {
        var adapter_1 = adapters_1[_i];
        if (adapter_1.isAvailable()) {
            // Don't select adapter if it's async and a callback wasn't provided.
            if (adapter_1.prototype instanceof AbstractAsyncLocalStorageAdapter && !callback) {
                continue;
            }
            storage = initializeAdapter(adapter_1);
            break;
        }
    }
    // Fallback to memory-based non-persistent storage.
    if (!storage) {
        storage = initializeAdapter(MemoryStorageAdapter);
    }
    // Trigger callback when adapter finishes loading (or instantly, if not required to wait).
    if (callback) {
        if (storage instanceof AbstractAsyncLocalStorageAdapter) {
            storage.waitForService(function () {
                callback(storage);
            });
        }
        else {
            callback(storage);
        }
    }
    return storage;
}
exports.waitForService = waitForService;
var adapter = waitForService();
function getItem(key) {
    return adapter.getItem(key);
}
exports.getItem = getItem;
function setItem(key, value, expiresIn) {
    return adapter.setItem(key, value, expiresIn);
}
exports.setItem = setItem;
function removeItem(key) {
    return adapter.removeItem(key);
}
exports.removeItem = removeItem;
function setObject(key, o) {
    return adapter.setObject(key, o);
}
exports.setObject = setObject;
function getObject(key, defaultValue) {
    return adapter.getObject(key, defaultValue);
}
exports.getObject = getObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/script.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/script.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var pending = {};
function addSdkVersion(url) {
    var scriptUrl = Uri_1.Uri.parse(url);
    scriptUrl.addToSearch({ version: window.gigya.build.version });
    return scriptUrl.toString();
}
function formatSrcUrl(src) {
    // remove cdn domain number
    return src.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, 'http$1://cdn$2.gigya.com/');
}
function isLoaded(src) {
    var pendingSrc = formatSrcUrl(src);
    return Boolean(pending[pendingSrc] && pending[pendingSrc].loaded);
}
exports.isLoaded = isLoaded;
function load(src, fnOnError, fnOnLoad, loadOnce, removeAfter, treatTogether) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var oScript;
    if (src.indexOf('//') === 0) {
        src = LocalInfo_1.localInfo.protocol + ':' + src;
    }
    if (loadOnce) {
        var pendingSrc = formatSrcUrl(src);
        if (pending[pendingSrc]) {
            if (pending[pendingSrc].loaded) {
                window.gigya.logger.debug("script was already loaded:", { src: src });
                if (fnOnLoad) {
                    fnOnLoad();
                }
            }
            else {
                pending[pendingSrc].onLoad.push(fnOnLoad);
                pending[pendingSrc].onError.push(fnOnError);
            }
            return;
        }
        oScript = pending[pendingSrc] = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
        if (treatTogether && treatTogether.length > 0) {
            arrayUtils.forEach(treatTogether, function (url) {
                pending[url] = oScript;
            });
        }
    }
    else {
        // multiple loads
        oScript = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
    }
    var scriptLoader = function () {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        var done = false;
        var fnOnScriptLoad = function () {
            if (!done) {
                if (oScript.onLoad && oScript.onLoad.length) {
                    for (var i = 0; i < oScript.onLoad.length; i++) {
                        if (typeof oScript.onLoad[i] === 'function') {
                            oScript.onLoad[i]();
                        }
                    }
                }
                oScript.loaded = true;
                oScript.onError = oScript.onLoad = null; // remove memory leak
                done = true;
                if (removeAfter === true) {
                    removeAfter = 0;
                }
                if (removeAfter !== false) {
                    setTimeout(function () {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                    }, removeAfter);
                }
            }
        };
        script.onload = fnOnScriptLoad;
        script['onreadystatechange'] = function () {
            if (this.readyState === 'loaded') {
                fnOnScriptLoad();
            }
        };
        script.onerror = function () {
            for (var i = 0; i < oScript.onError.length; i++) {
                if (typeof oScript.onError[i] === 'function') {
                    oScript.onError[i]();
                }
            }
            delete pending[src];
        };
        var head = document.getElementsByTagName('head');
        if (head && head.length > 0) {
            head[0].appendChild(script);
        }
        var fnSetScriptSrc = function () {
            var webSdkResourcesDomain = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain);
            var scriptSrc = webSdkResourcesDomain.test(src) ? addSdkVersion(src) : src;
            script.src = scriptSrc;
        };
        if (LocalInfo_1.localInfo.iosVersion >= 6) {
            // iOS 6 breaks setTimeout when animation is active (switching tabs back from a login sequence)
            fnSetScriptSrc();
        }
        else {
            setTimeout(fnSetScriptSrc, 1); // Doing this async gives better performance in older browsers
        }
    };
    if (LocalInfo_1.localInfo.isIE) {
        functionsUtils.invokeOnPageLoad(scriptLoader);
    }
    else {
        scriptLoader();
    }
}
exports.load = load;
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["script"] = 0] = "script";
    ResourceTypes[ResourceTypes["image"] = 1] = "image";
    ResourceTypes[ResourceTypes["iframe"] = 2] = "iframe";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function triggerResource(url, callback, resourceType, removeAfter) {
    if (resourceType === void 0) { resourceType = ResourceTypes.image; }
    if (removeAfter === void 0) { removeAfter = 5000; }
    switch (resourceType) {
        case ResourceTypes.script:
            load(url, callback, callback, false, removeAfter);
            break;
        case ResourceTypes.image:
            loadImage(url, callback);
            break;
        case ResourceTypes.iframe:
            loadIframe(url, callback, removeAfter);
            break;
        default:
            throw new Error('Unsupported resource type');
    }
}
exports.triggerResource = triggerResource;
function loadImage(url, callback) {
    var img = new Image();
    var loaded = false;
    var fnOnLoad = function () {
        if (!loaded) {
            loaded = true;
            callback();
        }
    };
    img.onload = img.onerror = fnOnLoad;
    img.src = url;
}
function loadIframe(url, callback, removeAfter) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var ifr = document.createElement('iframe');
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (removeAfter === true) {
        removeAfter = 0;
    }
    var fnOnLoad = function (e) {
        var el;
        if (e && e.srcElement) {
            el = e.srcElement;
        }
        else if (e && e.target) {
            el = e.target;
        }
        else {
            el = this;
        }
        if (!el.loaded && el.parentNode) {
            el.loaded = true;
            callback();
            if (removeAfter !== false) {
                window.setTimeout(function () {
                    try {
                        document.body.removeChild(el);
                    }
                    catch (ex) { }
                }, removeAfter);
            }
        }
    };
    DOMUtils.addEventListener(ifr, 'load', fnOnLoad);
    DOMUtils.addEventListener(ifr, 'error', fnOnLoad);
    ifr.onload = function (e) {
        fnOnLoad(e);
    };
    ifr.onerror = fnOnLoad;
    ifr.src = url;
    DOMUtils.appendToBody(ifr);
}
function loadService(serviceName, fnOnError, fnOnLoad) {
    var url = cdn_1.getCdnResource() + '/js/gigya.services.' + serviceName + '.js';
    load(url, function () {
        if (typeof console === 'object' && console.error) {
            console.error('error loading gigya service ' + serviceName + ' from url: ' + url);
            if (fnOnError) {
                fnOnError();
            }
        }
    }, fnOnLoad, true);
}
exports.loadService = loadService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringUtils.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function trim(s) {
    return s.replace(/^\s*(\S*(.*\S)?)\s*$/, '$1');
}
exports.trim = trim;
function format(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i + 1] != null) {
            s = s.split('{' + i + '}').join(arguments[i + 1]);
        }
    }
    return s;
}
exports.format = format;
function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
exports.capitalize = capitalize;
function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
exports.escapeRegExp = escapeRegExp;
function replaceAll(str, find, replace) {
    if (!find)
        return str;
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
function mergeCommaSeparatedValues(str1, str2) {
    if (str1 === void 0) { str1 = ''; }
    if (str2 === void 0) { str2 = ''; }
    var arr = str1.concat(',', str2).split(',');
    return window.gigya.utils.array.getUniqueValues(arr).filter(function (x) { return x; }).join(',');
}
exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/viewport.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/viewport.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getScroll() {
    var scrOfX = 0, scrOfY = 0;
    if (typeof window.pageYOffset == 'number') {
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return { left: scrOfX, top: scrOfY };
}
exports.getScroll = getScroll;
function getFullSize() {
    var de = document.documentElement;
    var db = document.body;
    var h = de.clientHeight;
    if (h == 0)
        h = db.clientHeight;
    var w = de.clientWidth;
    if (w == 0)
        w = db.clientWidth;
    return { w: w, h: h };
}
exports.getFullSize = getFullSize;
function getOrientation() {
    var orientation = parseInt(window['orientation'] || '0');
    if (orientation < 0)
        orientation += 360;
    return orientation;
}
exports.getOrientation = getOrientation;
function getInnerSize() {
    var h;
    var w;
    var de = document.documentElement;
    var db = document.body;
    if (window.innerHeight) {
        h = window.innerHeight;
        w = window.innerWidth;
    }
    else {
        h = de.clientHeight;
        if (h == 0)
            h = db.clientHeight;
        w = de.clientWidth;
        if (w == 0)
            w = db.clientWidth;
    }
    return { w: w, h: h };
}
exports.getInnerSize = getInnerSize;
function getMiddleCenter() {
    var scroll = getScroll();
    var size = getInnerSize();
    return {
        top: scroll.top + Math.floor(size.h / 2),
        left: scroll.left + Math.floor(size.w / 2),
    };
}
exports.getMiddleCenter = getMiddleCenter;
function isRectHorizontallyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectHorizontallyVisible = isRectHorizontallyVisible;
function isRectFullyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.top >= scroll.top && rect.bottom <= scroll.top + size.h && rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectFullyVisible = isRectFullyVisible;
function scrollIntoView(element) {
    if (element && element.scrollIntoView) {
        element.scrollIntoView();
    }
}
exports.scrollIntoView = scrollIntoView;


/***/ }),

/***/ "./src/core/Gigya.Js/app/cdn.ts":
/*!**************************************!*\
  !*** ./src/core/Gigya.Js/app/cdn.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var selectedCdnHostsIndex = 0;
exports.CDN_HOSTS = {
    http: ['cdn.gigya.com', 'cdn1.gigya.com', 'cdn2.gigya.com', 'cdn3.gigya.com'],
    https: ['cdns.gigya.com', 'cdns1.gigya.com', 'cdns2.gigya.com', 'cdns3.gigya.com'],
};
function getCdnResource(path) {
    var _a, _b, _c, _d;
    // gigya.thisScript may not exist if loaded for ssoOrig.
    var baseDomain = (_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.baseDomain, (_b !== null && _b !== void 0 ? _b : ''));
    var protocol = (_d = (_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.protocol, (_d !== null && _d !== void 0 ? _d : 'https'));
    // If no base domain or if base domain ends with .gigya.com, use Gigya CDN.
    // Otherwise use the base domain.
    if (!baseDomain || /cdns?\.gigya\.com$/.test(baseDomain)) {
        var selectedSchemaRepository = exports.CDN_HOSTS[protocol];
        if (selectedSchemaRepository.length <= selectedCdnHostsIndex) {
            selectedCdnHostsIndex = 0;
        }
        baseDomain = selectedSchemaRepository[selectedCdnHostsIndex++];
    }
    // Ensure the path starts with "/".
    if (path) {
        if (path.indexOf('/') !== 0) {
            path = '/' + path;
        }
    }
    return protocol + '://' + baseDomain + (path || '');
}
exports.getCdnResource = getCdnResource;
function getImgCdnResource() {
    return getCdnResource('/gs/i/');
}
exports.getImgCdnResource = getImgCdnResource;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5Nb2JpbGUvYXBwL01vYmlsZUFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuTW9iaWxlL2FwcC9zaG93UGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLk1vYmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2RvbWFpbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy92aWV3cG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvY2RuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVPO0FBQ1A7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRU87QUFDUCxlQUFlLG9DQUFhO0FBQzVCLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7O0FBRU87QUFDUCxtQ0FBbUMsb0NBQW9DO0FBQ3ZFOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDBCQUEwQixhQUFPO0FBQ2pDLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1AsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQXNGLGFBQWEsRUFBRTtBQUN0SCxzQkFBc0IsZ0NBQWdDLFlBQVksYUFBTyxrQkFBa0IsMENBQTBDLEVBQUUsRUFBRSxHQUFHO0FBQzVJLDJCQUEyQixNQUFNLGVBQWUsRUFBRSxZQUFZLG9CQUFvQixFQUFFO0FBQ3BGLHNCQUFzQiw4QkFBOEIsYUFBTywrREFBK0Q7QUFDMUgsNkJBQTZCLHVCQUF1QjtBQUNwRCw0QkFBNEIsd0JBQXdCO0FBQ3BELDJCQUEyQix5REFBeUQ7QUFDcEY7O0FBRU87QUFDUDtBQUNBLGlCQUFpQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDNUkseUJBQXlCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDako7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHNGQUFzRixhQUFhLEVBQUU7QUFDaE4sc0JBQXNCLDhCQUE4QixZQUFZLGFBQU8sNkJBQTZCLHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsQ0FBQyxhQUFPLDhCQUE4QixVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDbE1BLCtHQUF1RDtBQUN2RCx1SUFBMkU7QUFPM0UsU0FBZ0IsYUFBYSxDQUFDLFdBQStCO0lBQ3pELE9BQU8sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUZELHNDQUVDO0FBQ1ksdUJBQWUsR0FBeUMsRUFBRSxDQUFDO0FBQ3hFLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM1QixJQUFJLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQzFDLElBQUksWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNsQyxJQUFJLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO0FBQzlDLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUN4QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUN4QyxJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUN4QyxJQUFJLDZCQUE2QixHQUFHLCtCQUErQixDQUFDO0FBQ3BFLElBQUksYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUNwQyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDNUIsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBSTVKLElBQUksc0JBQXNCLEdBQXFCO0lBQzNDLFFBQVEsRUFBRSxFQUFFO0NBQ2YsQ0FBQztBQUNGO0lBVUksdUJBQW9CLFdBQWdDO1FBQWhDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUo1QyxhQUFRLEdBQUcsSUFBSSxtQ0FBb0IsRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBVyxRQUFRLENBQUM7SUFFK0IsQ0FBQztJQUVqRCxrQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUssNEJBQUksR0FBVixVQUFXLFFBQW9COytDQUFHLGFBQU87OztnQkFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEtBQUssVUFBVTtvQkFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBa0IsQ0FBQzs7b0JBQzdGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7Z0JBRTVDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMzSTtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO2lCQUMxQztnQkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixLQUFLLFVBQVUsRUFBRTtvQkFDbkYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDeEU7Z0JBRUQsMkVBQTJFO2dCQUMzRSxZQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxZQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFFakgsWUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2hCLGFBQWEsRUFBRSxxQkFBVzt3QkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztvQkFDRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDaEQsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxrQkFBUTtvQkFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUMxQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBRTFCLEtBQUssSUFBSSxTQUFTLElBQUksWUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7d0JBQ3pELEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDOUM7b0JBQ0QsUUFBUSxFQUFFLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDTjtJQUVELHFDQUFhLEdBQWIsVUFBYyxNQUFNLEVBQUUsU0FBUztRQUMzQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsS0FBVTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsS0FBVTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSxPQUFlO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTztRQUUvQyxJQUFJLEdBQUcsR0FBRztZQUNOLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0RBQTBCLEdBQTFCLFVBQTJCLFNBQWlCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLFFBQXVDO1FBQ2pELElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUV0QixJQUFJLE1BQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixJQUFJLFFBQVEsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsV0FBVyxDQUNaLHlCQUF5QixFQUN6QixNQUFNLEVBQ04sVUFBQyxRQUFnQjtZQUNiLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0QsUUFBUSxDQUNYLENBQUM7UUFFRixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLFFBQThCO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxRQUFvQztRQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFVBQWtCLEVBQUUsTUFBYyxFQUFFLFFBQXFDLEVBQUUsUUFBNkI7UUFDaEgsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixVQUFrQixFQUFFLE1BQWMsRUFBRSxRQUFxQyxFQUFFLFFBQTZCO1FBQ3JILElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLE1BQWMsRUFBRSxNQUFlLEVBQUUsUUFBa0MsRUFBRSxNQUFXLEVBQUUsUUFBNkI7UUFBcEksaUJBdUNDO1FBdkN5RixvQ0FBVztRQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pDLElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsQ0FBQztvQkFDTCxTQUFTLEVBQUUsbUJBQVEsQ0FBQyxhQUFhO29CQUNqQyxZQUFZLEVBQUUsc0NBQXNDLEdBQUcsTUFBTTtpQkFDaEUsQ0FBQyxDQUFDO2FBQ047U0FDSjthQUFNO1lBQ0gsSUFBSSxNQUFNO2dCQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBDLElBQUksWUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVwQixJQUFJLFFBQVEsRUFBRTtnQkFDVixZQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4RCx1QkFBZSxDQUFDLFlBQVUsQ0FBQyxHQUFHLGtCQUFRO29CQUNsQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0MsT0FBTyx1QkFBZSxDQUFDLFlBQVUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUM7YUFDTDtZQUVELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRixJQUFNLGtCQUFrQixHQUFHLFlBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRSxJQUFNLFdBQVcsR0FBRyxnQkFBYyxZQUFVLGdCQUFXLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGtCQUFhLGtCQUFrQixDQUFDLGtCQUFrQixDQUFHLENBQUM7WUFFakosSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVUsQ0FBQyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNILElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDckYsSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUNwQixJQUFNLEdBQUcsR0FBRyxpREFBaUQsR0FBRyxNQUFNLENBQUM7b0JBQ3ZFLFlBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4Qix1QkFBZSxDQUFDLFlBQVUsQ0FBQyxDQUFDO3dCQUN4QixTQUFTLEVBQUUsbUJBQVEsQ0FBQyxhQUFhO3dCQUNqQyxZQUFZLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTyxzQ0FBYyxHQUF0QixVQUF1QixNQUFjLEVBQUUsTUFBYyxFQUFFLFdBQW1CLEVBQUUsVUFBbUI7UUFDM0YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFHLFVBQVUsR0FBRyxNQUFNLFNBQUksTUFBTSxTQUFJLFdBQWEsQ0FBQztRQUMvRCxTQUFTLEtBQUs7WUFDVixJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJO29CQUNBLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ25CO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLFNBQVM7aUJBQ1o7YUFDSjtRQUNMLENBQUM7UUFFRCxJQUFJLFVBQVUsSUFBSSx1QkFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzNDLElBQU0sa0JBQWdCLEdBQUcsdUJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCx1QkFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQUc7Z0JBQzdCLGtCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQztTQUNMO2FBQU07WUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sWUFBSyxFQUFFLEVBQVAsQ0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsMkZBQTJGO1FBQzNGLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBNUMsQ0FBNEMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLFdBQW1CO1FBQzFCLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxZQUFLLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsWUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsTUFBYztRQUM1QixJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRTFCLE9BQU8sWUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixPQUFlO1FBQy9CLE9BQU8sWUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1SSxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsT0FBTyxhQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxRQUFRLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxNQUFjLEVBQUUsTUFBZTtRQUN2QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxRQUFRLEVBQUU7WUFDdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksTUFBTSxFQUFFO2dCQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxPQUFPLFdBQVcsQ0FBQzthQUN0QjtTQUNKO2FBQU07WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUFuT1ksc0NBQWE7Ozs7Ozs7Ozs7Ozs7QUM5QjFCLFNBQWdCLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBVztJQUNsRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQUUsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekMsSUFBSSxNQUFNLElBQUksWUFBWTtRQUFFLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWpELElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBUSxZQUFLLENBQUM7SUFFckIsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU07UUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRXJELElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQzNCLE9BQU8sWUFBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxZQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ25IO0lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hCLENBQUM7QUFwQkQsZ0NBb0JDOzs7Ozs7Ozs7Ozs7O0FDcEJELHlLQUErRjtBQUMvRixxS0FBOEY7QUFHOUYsSUFBSSxDQUFDLFlBQUssQ0FBQyxDQUFDLEVBQUU7SUFDVixZQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNoQjtBQUNELElBQUksQ0FBQyxZQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtJQUN0QixZQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Q0FDNUI7QUFDRCxJQUFJLENBQUMsWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO0lBQzdCLFlBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Q0FDbkM7QUFFRCxvQ0FBYSxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2Q5RixJQUFrQixRQWtKakI7QUFsSkQsV0FBa0IsUUFBUTtJQUN0QixtQ0FBTTtJQUNOLDREQUFxQjtJQUNyQiw4REFBc0I7SUFDdEIsNERBQXFCO0lBQ3JCLHdFQUEyQjtJQUMzQix3RUFBMkI7SUFDM0IsZ0ZBQStCO0lBQy9CLG9EQUFpQjtJQUNqQixvREFBaUI7SUFDakIsZ0VBQXVCO0lBQ3ZCLDBEQUFvQjtJQUNwQixnRUFBdUI7SUFDdkIsa0VBQXdCO0lBQ3hCLDhHQUE4QztJQUM5Qyw0RkFBcUM7SUFDckMsNEZBQXFDO0lBQ3JDLGtGQUFnQztJQUNoQyxzRkFBa0M7SUFDbEMsb0ZBQWlDO0lBQ2pDLHNGQUFrQztJQUNsQyx3REFBbUI7SUFDbkIsMEVBQTRCO0lBQzVCLGdGQUErQjtJQUMvQix3RkFBbUM7SUFDbkMsb0ZBQWlDO0lBQ2pDLG9GQUFpQztJQUNqQyxrRkFBZ0M7SUFDaEMsa0VBQXdCO0lBQ3hCLDhGQUFzQztJQUN0QyxvRUFBeUI7SUFDekIsNEVBQTZCO0lBQzdCLDhFQUE4QjtJQUM5QixnRkFBK0I7SUFDL0IsOERBQXNCO0lBQ3RCLDREQUFxQjtJQUNyQixvRkFBaUM7SUFDakMsMEZBQW9DO0lBQ3BDLDhGQUFzQztJQUN0Qyw4RkFBc0M7SUFDdEMsa0dBQXdDO0lBQ3hDLDhGQUFzQztJQUN0QyxrR0FBd0M7SUFDeEMsa0dBQXdDO0lBQ3hDLHdFQUEyQjtJQUMzQiw4RUFBOEI7SUFDOUIsOEVBQThCO0lBQzlCLDRGQUFxQztJQUNyQyxvRkFBaUM7SUFDakMsOERBQXNCO0lBQ3RCLGdGQUErQjtJQUMvQiw0REFBcUI7SUFDckIsOERBQXNCO0lBQ3RCLDhFQUE4QjtJQUM5QiwwRUFBNEI7SUFDNUIsOERBQXNCO0lBQ3RCLDBFQUE0QjtJQUM1Qiw0RkFBcUM7SUFDckMsOERBQXNCO0lBQ3RCLGtGQUFnQztJQUNoQyxnRUFBdUI7SUFDdkIsOEZBQXNDO0lBQ3RDLDBGQUFvQztJQUNwQyw0RkFBcUM7SUFDckMsZ0VBQXVCO0lBQ3ZCLDhGQUFzQztJQUN0Qyx3RkFBbUM7SUFDbkMsc0VBQTBCO0lBQzFCLHNEQUFrQjtJQUNsQiw4RUFBOEI7SUFDOUIsMEVBQTRCO0lBQzVCLHNGQUFrQztJQUNsQyxrRUFBd0I7SUFDeEIsc0VBQTBCO0lBQzFCLDhGQUFzQztJQUN0QyxzRUFBMEI7SUFDMUIsd0VBQTJCO0lBQzNCLG9GQUFpQztJQUNqQyxnRUFBdUI7SUFDdkIsMEVBQTRCO0lBQzVCLG9FQUF5QjtJQUN6QixrRUFBd0I7SUFDeEIsb0ZBQWlDO0lBQ2pDLG9GQUFpQztJQUNqQyxvRkFBaUM7SUFDakMsd0VBQTJCO0lBQzNCLGdGQUErQjtJQUMvQiw4REFBc0I7SUFDdEIsc0ZBQWtDO0lBQ2xDLHNGQUFrQztJQUNsQyw4RUFBOEI7SUFDOUIsOEVBQThCO0lBQzlCLHNFQUEwQjtJQUMxQixnRUFBdUI7SUFDdkIsNEVBQTZCO0lBQzdCLDBEQUFvQjtJQUNwQixrRUFBd0I7SUFDeEIsb0VBQXlCO0lBQ3pCLGtFQUF3QjtJQUN4QixrRkFBZ0M7SUFDaEMsOERBQXNCO0lBQ3RCLG9HQUF5QztJQUN6QyxnRkFBK0I7SUFDL0Isa0ZBQWdDO0lBQ2hDLGtGQUFnQztJQUNoQyxvR0FBeUM7SUFDekMsb0dBQXlDO0lBQ3pDLDRGQUFxQztJQUNyQyxnR0FBdUM7SUFDdkMsMEVBQTRCO0lBQzVCLGdGQUErQjtJQUMvQixzREFBa0I7SUFDbEIsb0VBQXlCO0lBQ3pCLHdFQUEyQjtJQUMzQiw4REFBc0I7SUFDdEIsd0VBQTJCO0lBQzNCLHdFQUEyQjtJQUMzQixrRUFBd0I7SUFDeEIsNENBQWE7SUFDYixvRkFBaUM7SUFDakMsZ0ZBQStCO0lBQy9CLG9FQUF5QjtJQUN6QixrRkFBZ0M7SUFDaEMsNEVBQTZCO0lBQzdCLHdFQUEyQjtJQUMzQixnRkFBK0I7SUFDL0IsMEVBQTRCO0lBQzVCLGtHQUF3QztJQUN4Qyx3RkFBbUM7SUFDbkMsZ0ZBQStCO0lBQy9CLDRFQUE2QjtJQUM3Qix3RUFBMkI7SUFDM0Isa0hBQWdEO0lBQ2hELGtGQUFnQztJQUNoQyxnRUFBdUI7SUFDdkIsZ0VBQXVCO0lBQ3ZCLHNFQUEwQjtJQUMxQixrRkFBZ0M7SUFDaEMsMERBQW9CO0lBQ3BCLHdGQUFtQztJQUNuQyxnR0FBdUM7SUFDdkMsa0RBQWdCO0lBQ2hCLDhEQUFzQjtJQUN0QiwwREFBb0I7SUFDcEIsc0ZBQWtDO0lBQ2xDLHdFQUEyQjtBQUMvQixDQUFDLEVBbEppQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQWtKekI7QUFDRCxJQUFrQixjQUtqQjtBQUxELFdBQWtCLGNBQWM7SUFDNUIsbURBQVE7SUFDUiwwRUFBc0I7SUFDdEIsZ0ZBQXlCO0lBQ3pCLG9IQUEyQztBQUMvQyxDQUFDLEVBTGlCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBSy9COzs7Ozs7Ozs7Ozs7OztBQ3hKRCwySEFBb0U7QUFLcEUsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QyxpQkFBUyxHQUFHO0lBQ25CLFVBQVUsRUFBRSxFQUFFO0lBQ2QseUJBQXlCLEVBQUUsQ0FBQztRQUN4QixPQUFPLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUM7SUFDOUUsQ0FBQyxDQUFDLEVBQUU7SUFDSixRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUU7SUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDVixVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRO0lBQ3RDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTztJQUNsRSxTQUFTLEVBQUUsU0FBUztJQUNwQixLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkgsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMs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SyxHQUFHLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBdkJELHdDQXVCQztBQUNELFNBQWdCLGlCQUFpQjtJQUM3QixPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRkQsOENBRUMiLCJmaWxlIjoiQXBpQWRhcHRlcnMvZ2lneWEuYWRhcHRlcnMubW9iaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5Nb2JpbGUvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQXBpQWRhcHRlckluaXRTZXR0aW5ncywgSUFwaUFkYXB0ZXIsIEFwaUFkYXB0ZXJTZXR0aW5ncyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2ludGVyZmFjZXMvSUFwaUFkYXB0ZXInO1xyXG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XHJcbmltcG9ydCB7TWVtb3J5U3RvcmFnZUFkYXB0ZXJ9IGZyb20gXCIuLi8uLi9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlXCI7XHJcbi8vIE1vYmlsZSBTREtzIGF1dGgvcmVxdWVzdHMvZXZlbnRzIGludGVyZmFjZSBmb3Igc29jaWFsaXplLmpzXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOYXRpdmVNb2JpbGVQcm94eSBleHRlbmRzIElBcGlBZGFwdGVySW5pdFNldHRpbmdzIHtcclxuICAgIHNlbmRUb01vYmlsZT86IChhY3Rpb246IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIHF1ZXJ5U3RyaW5nUGFyYW1zOiBzdHJpbmcpID0+IGJvb2xlYW47IC8vIGZyb20gYW5kcm9pZCBzZGsgMy4zLjIyXHJcbiAgICBnZXRPYmZ1c2NhdGlvblN0cmF0ZWd5PzogKCkgPT4gJ2Jhc2U2NCc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0FwaUFkYXB0ZXIobmF0aXZlUHJveHk6IElOYXRpdmVNb2JpbGVQcm94eSk6IElBcGlBZGFwdGVyIHtcclxuICAgIHJldHVybiBuZXcgTW9iaWxlQWRhcHRlcihuYXRpdmVQcm94eSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUNhbGxiYWNrczogeyBbaWQ6IHN0cmluZ106IChyZXNwb25zZSkgPT4gdm9pZCB9ID0ge307XHJcbnZhciBVUkxfUFJFRklYID0gJ2dzYXBpOi8vJztcclxudmFyIElTX1NFU1NJT05fVkFMSUQgPSAnaXNfc2Vzc2lvbl92YWxpZCc7XHJcbnZhciBTRU5EX1JFUVVFU1QgPSAnc2VuZF9yZXF1ZXN0JztcclxudmFyIFNFTkRfT0FVVEhfUkVRVUVTVCA9ICdzZW5kX29hdXRoX3JlcXVlc3QnO1xyXG52YXIgR0VUX0lEUyA9ICdnZXRfaWRzJztcclxudmFyIE9OX1BMVUdJTl9FVkVOVCA9ICdvbl9wbHVnaW5fZXZlbnQnO1xyXG52YXIgT05fQ1VTVE9NX0VWRU5UID0gJ29uX2N1c3RvbV9ldmVudCc7XHJcbnZhciBSRUdJU1RFUl9GT1JfTkFNRVNQQUNFX0VWRU5UUyA9ICdyZWdpc3Rlcl9mb3JfbmFtZXNwYWNlX2V2ZW50cyc7XHJcbnZhciBDTEVBUl9TRVNTSU9OID0gJ2NsZWFyX3Nlc3Npb24nO1xyXG52YXIgT05fSlNfTE9HID0gJ29uX2pzX2xvZyc7XHJcbnZhciBkZWZhdWx0QWRhcHRlckZlYXR1cmVzID0gW0lTX1NFU1NJT05fVkFMSUQsIFNFTkRfUkVRVUVTVCwgU0VORF9PQVVUSF9SRVFVRVNULCBHRVRfSURTLCBPTl9QTFVHSU5fRVZFTlQsIE9OX0NVU1RPTV9FVkVOVCwgUkVHSVNURVJfRk9SX05BTUVTUEFDRV9FVkVOVFNdO1xyXG5leHBvcnQgaW50ZXJmYWNlIElBZGFwdGVyU2V0dGluZ3Mge1xyXG4gICAgbG9nTGV2ZWw6IHN0cmluZ1tdO1xyXG59XHJcbnZhciBkZWZhdWx0QWRhcHRlclNldHRpbmdzOiBJQWRhcHRlclNldHRpbmdzID0ge1xyXG4gICAgbG9nTGV2ZWw6IFtdLFxyXG59O1xyXG5leHBvcnQgY2xhc3MgTW9iaWxlQWRhcHRlciBpbXBsZW1lbnRzIElBcGlBZGFwdGVyIHtcclxuICAgIHByaXZhdGUgdWNpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBnY2lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGZlYXR1cmVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogYW55O1xyXG4gICAgcHJpdmF0ZSBvYmZ1c2NhdGlvblN0cmF0ZWd5OiAnYmFzZTY0JyB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgX3N0b3JhZ2UgPSBuZXcgTWVtb3J5U3RvcmFnZUFkYXB0ZXIoKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnTW9iaWxlJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVByb3h5PzogSU5hdGl2ZU1vYmlsZVByb3h5KSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdG9yYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5uYXRpdmVQcm94eSAmJiB0eXBlb2YgdGhpcy5uYXRpdmVQcm94eS5nZXRGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUodGhpcy5uYXRpdmVQcm94eS5nZXRGZWF0dXJlcygpKSBhcyBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGVsc2UgdGhpcy5mZWF0dXJlcyA9IGRlZmF1bHRBZGFwdGVyRmVhdHVyZXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZVByb3h5ICYmIHR5cGVvZiB0aGlzLm5hdGl2ZVByb3h5LmdldFNldHRpbmdzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBnaWd5YS51dGlscy5KU09OLmRlc2VyaWFsaXplKHRoaXMubmF0aXZlUHJveHkuZ2V0U2V0dGluZ3MoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MubG9nTGV2ZWwgPSBnaWd5YS51dGlscy5hcnJheS5nZXRBcnJheUZyb21TdHJpbmcodGhpcy5zZXR0aW5ncy5sb2dMZXZlbCB8fCBkZWZhdWx0QWRhcHRlclNldHRpbmdzLmxvZ0xldmVsLmpvaW4oJywnKSwgJywnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdEFkYXB0ZXJTZXR0aW5ncztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZVByb3h5ICYmIHR5cGVvZiB0aGlzLm5hdGl2ZVByb3h5LmdldE9iZnVzY2F0aW9uU3RyYXRlZ3kgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmZ1c2NhdGlvblN0cmF0ZWd5ID0gdGhpcy5uYXRpdmVQcm94eS5nZXRPYmZ1c2NhdGlvblN0cmF0ZWd5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAjNDk3ODkgLSBSZXF1aXJlZCBmb3IgZ2lneWEuc2FtbC5qcywgd2hpY2ggY2FuIGluaXQgd2l0aCBtb2JpbGUgYWRhcHRlci5cclxuICAgICAgICBnaWd5YS5fLmdldEFwaURvbWFpbiA9IGdpZ3lhLl8uYXBpRG9tYWluRmFjdG9yeShnaWd5YS5wYXJ0bmVyU2V0dGluZ3MucGx1Z2lucy5hcGlEb21haW4sIGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pO1xyXG5cclxuICAgICAgICBnaWd5YS5ldmVudHMuYWRkTWFwKHtcclxuICAgICAgICAgICAgZGVmYXVsdE1ldGhvZDogZXZlbnRPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblBsdWdpbkV2ZW50KGV2ZW50T2JqZWN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnRNYXA6IFt7IGV2ZW50czogJyonLCBhcmdzOiBbJyRldmVudCddIH1dLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShHRVRfSURTLCB7fSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVjaWQgPSByZXNwb25zZS51Y2lkO1xyXG4gICAgICAgICAgICB0aGlzLmdjaWQgPSByZXNwb25zZS5nY2lkO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGdpZ3lhLmV2ZW50cy5nbG9iYWwuX2FjdGl2ZU5hbWVzcGFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3JOYW1lc3BhY2VFdmVudHMobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuUGFyYW0oQVBJS2V5LCBwYXJhbU5hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBvblBsdWdpbkV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWV2ZW50LmlzR2xvYmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKE9OX1BMVUdJTl9FVkVOVCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkN1c3RvbUV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShPTl9DVVNUT01fRVZFTlQsIGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkpTTG9nKGxvZ1R5cGU6IHN0cmluZywgbG9nSW5mbzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nTGV2ZWxTdXBwb3J0ZWQobG9nVHlwZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGxvZyA9IHtcclxuICAgICAgICAgICAgbG9nVHlwZTogbG9nVHlwZSxcclxuICAgICAgICAgICAgbG9nSW5mbzogbG9nSW5mbyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKE9OX0pTX0xPRywgbG9nKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZvck5hbWVzcGFjZUV2ZW50cyhuYW1lc3BhY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKFJFR0lTVEVSX0ZPUl9OQU1FU1BBQ0VfRVZFTlRTLCB7IG5hbWVzcGFjZTogbmFtZXNwYWNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdtaWRUaWNrZXQoY2FsbGJhY2s/OiAoZ21pZFRpY2tldDogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgcGFyYW1zID0geyBleHBpcmVzOiAzMCB9O1xyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHsgZm9yY2VIdHRwczogdHJ1ZSB9O1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0KFxyXG4gICAgICAgICAgICAnc29jaWFsaXplLmdldEdtaWRUaWNrZXQnLFxyXG4gICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZVsnZ21pZFRpY2tldCddKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0dGluZ3MsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2Vzc2lvbihwYXJhbXM6IE9iamVjdCwgY2FsbGJhY2s/OiAocmVzPzogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kVG9Nb2JpbGUoQ0xFQVJfU0VTU0lPTiwgcGFyYW1zLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZXNzaW9uVmFsaWQocGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrOiAoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKElTX1NFU1NJT05fVkFMSUQsIHt9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QobWV0aG9kTmFtZTogc3RyaW5nLCBwYXJhbXM6IE9iamVjdCwgY2FsbGJhY2s/OiAocmVzcG9uc2U6IE9iamVjdCkgPT4gdm9pZCwgc2V0dGluZ3M/OiBBcGlBZGFwdGVyU2V0dGluZ3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShTRU5EX1JFUVVFU1QsIHBhcmFtcywgY2FsbGJhY2ssIG1ldGhvZE5hbWUsIHNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kT2F1dGhSZXF1ZXN0KG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrPzogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQsIHNldHRpbmdzPzogQXBpQWRhcHRlclNldHRpbmdzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZW5kVG9Nb2JpbGUoU0VORF9PQVVUSF9SRVFVRVNULCBwYXJhbXMsIGNhbGxiYWNrLCBtZXRob2ROYW1lLCBzZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kVG9Nb2JpbGUoYWN0aW9uOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgY2FsbGJhY2s/OiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZCwgbWV0aG9kID0gJycsIHNldHRpbmdzPzogQXBpQWRhcHRlclNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aW9uU3VwcG9ydGVkKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5OT1RfU1VQUE9SVEVELFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01vYmlsZSBTREsgZG9lcyBub3Qgc3VwcG9ydCBmZWF0dXJlICcgKyBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMpIGRlbGV0ZSBwYXJhbXNbJ0FQSUtleSddO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrSUQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tJRCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIG1vYmlsZUNhbGxiYWNrc1tjYWxsYmFja0lEXSA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnVub2JmdXNjYXRlKHJlc3BvbnNlLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1vYmlsZUNhbGxiYWNrc1tjYWxsYmFja0lEXTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRQYXJhbXMgPSB0aGlzLm9iZnVzY2F0ZShnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTZXR0aW5ncyA9IGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYGNhbGxiYWNrSUQ9JHtjYWxsYmFja0lEfSZwYXJhbXM9JHtlbmNvZGVVUklDb21wb25lbnQoc2VyaWFsaXplZFBhcmFtcyl9JnNldHRpbmdzPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWRTZXR0aW5ncyl9YDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uYXRpdmVQcm94eS5zZW5kVG9Nb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFdpdGhJZnJhbWUoYWN0aW9uLCBtZXRob2QsIHF1ZXJ5U3RyaW5nLCBjYWxsYmFja0lEKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvZXNOYXRpdmVTdXBwb3J0ID0gdGhpcy5uYXRpdmVQcm94eS5zZW5kVG9Nb2JpbGUoYWN0aW9uLCBtZXRob2QsIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGlmICghZG9lc05hdGl2ZVN1cHBvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnVGhlIE5hdGl2ZSBNb2JpbGUgU0RLIGRvZXMgbm90IHN1cHBvcnQgZmVhdHVyZSAnICsgYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUNhbGxiYWNrc1tjYWxsYmFja0lEXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuTk9UX1NVUFBPUlRFRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtc2csXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kV2l0aElmcmFtZShhY3Rpb246IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIHF1ZXJ5U3RyaW5nOiBzdHJpbmcsIGNhbGxiYWNrSUQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBpZnJhbWUuc3JjID0gYCR7VVJMX1BSRUZJWH0ke2FjdGlvbn0vJHttZXRob2R9PyR7cXVlcnlTdHJpbmd9YDtcclxuICAgICAgICBmdW5jdGlvbiBjbGVhbigpIHtcclxuICAgICAgICAgICAgaWYgKGlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFja0lEICYmIG1vYmlsZUNhbGxiYWNrc1tjYWxsYmFja0lEXSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENhbGxiYWNrID0gbW9iaWxlQ2FsbGJhY2tzW2NhbGxiYWNrSURdO1xyXG4gICAgICAgICAgICBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF0gPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgY2xlYW4oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjbGVhbigpLCAzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWZyYW1lIGFwcGVuZGVkIG91dHNpZGUgdGhlIGV2ZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgZnJvbSBjbG9zaW5nIGluIHdlYiB2aWV3IEJ1ZyAzNzE1NlxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChpZnJhbWUpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNES0V2ZW50KGV2ZW50T2JqZWN0OiBPYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnRPYmplY3QgJiYgZXZlbnRPYmplY3RbJ3VzZXInXSkge1xyXG4gICAgICAgICAgICBnaWd5YS5fLmNvbnZlcnRJZGVudGl0aWVzQXJyYXlUb09iamVjdChldmVudE9iamVjdFsndXNlciddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2goZXZlbnRPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWN0aW9uU3VwcG9ydGVkKGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFhY3Rpb24pIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YodGhpcy5mZWF0dXJlcywgYWN0aW9uKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nTGV2ZWxTdXBwb3J0ZWQobG9nVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YodGhpcy5zZXR0aW5ncy5sb2dMZXZlbCwgJyonKSAhPSAtMSB8fCBnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKHRoaXMuc2V0dGluZ3MubG9nTGV2ZWwsIGxvZ1R5cGUpICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsdGV4cEZyb21TU08oYXBpS2V5Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JmdXNjYXRlKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5vYmZ1c2NhdGlvblN0cmF0ZWd5ID09PSAnYmFzZTY0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gYnRvYShzdHJpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVub2JmdXNjYXRlKHN0cmluZzogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLm9iZnVzY2F0aW9uU3RyYXRlZ3kgPT09ICdiYXNlNjQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWluU3RyaW5nID0gYXRvYihzdHJpbmcpO1xyXG4gICAgICAgICAgICBpZiAoaXNKU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwbGFpblN0cmluZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhaW5TdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd1BsdWdpbihwbHVnaW46IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcclxuICAgIHZhciBwYXJ0cyA9IHBsdWdpbi5zcGxpdCgnLicpO1xyXG4gICAgdmFyIHBsdWdpbk5hbWUgPSBwYXJ0cy5zcGxpY2UocGFydHMubGVuZ3RoIC0gMSwgMSlbMF07XHJcblxyXG4gICAgaWYgKCFwYXJ0cy5sZW5ndGgpIHBhcnRzID0gWydzb2NpYWxpemUnXTtcclxuXHJcbiAgICBpZiAocGx1Z2luID09ICdjb21tZW50c1VJJykgcGFydHMgPSBbJ2NvbW1lbnRzJ107XHJcblxyXG4gICAgdmFyIGZ1bmNOYW1lID0gJ3Nob3cnICsgZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuY2FwaXRhbGl6ZShwbHVnaW5OYW1lKTtcclxuXHJcbiAgICBwYXJ0cy5wdXNoKGZ1bmNOYW1lKTtcclxuICAgIHZhciBvYmo6IGFueSA9IGdpZ3lhO1xyXG5cclxuICAgIHdoaWxlIChvYmogJiYgcGFydHMubGVuZ3RoKSBvYmogPSBvYmpbcGFydHMuc2hpZnQoKV07XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gZ2lneWEuZXZlbnRzLmRpc3BhdGNoSW52YWxpZFBhcmFtRXJyb3IoZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFt7IHBsdWdpbjogcGx1Z2luIH0sIHBhcmFtc10pLCAncGx1Z2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqKHBhcmFtcyk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgR2lneWFfQXBpQWRhcHRlcnNNb2JpbGUgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuTW9iaWxlL2FwcC9Nb2JpbGVBZGFwdGVyJztcclxuaW1wb3J0ICogYXMgR2lneWFfQXBpQWRhcHRlcnNNb2JpbGVfMSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5Nb2JpbGUvYXBwL3Nob3dQbHVnaW4nO1xyXG5cclxuZGVjbGFyZSBjb25zdCBnaWd5YTogYW55O1xyXG5pZiAoIWdpZ3lhLl8pIHtcclxuICAgIGdpZ3lhLl8gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8uYXBpQWRhcHRlcnMpIHtcclxuICAgIGdpZ3lhLl8uYXBpQWRhcHRlcnMgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLl8uYXBpQWRhcHRlcnMubW9iaWxlKSB7XHJcbiAgICBnaWd5YS5fLmFwaUFkYXB0ZXJzLm1vYmlsZSA9IHt9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8uYXBpQWRhcHRlcnMubW9iaWxlLCBHaWd5YV9BcGlBZGFwdGVyc01vYmlsZSwgR2lneWFfQXBpQWRhcHRlcnNNb2JpbGVfMSk7XHJcbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcclxuICAgIE9LID0gMCxcclxuICAgIERhdGFfUGVuZGluZyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXHJcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXHJcbiAgICBPUEVSQVRJT05fQ0FOQ0VMRUQgPSAyMDAwMDEsIC8vIHVzZXIgY2FuY2VsZWQsIGluIGxvZ2luIHByb2Nlc3NcclxuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxyXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxyXG4gICAgUkVESVJFQ1QgPSAyMDAwMDQsIC8vIElubmVyIGNvZGVcclxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXHJcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxyXG4gICAgVVBEQVRFX1VTRVIgPSAyMDAwMDcsIC8vIElubmVyIGNvZGVcclxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxyXG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUl9MT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDIwMDAxMCwgLy8gRm9yIHNldEFjY291bnRJbmZvIHVzaW5nIHRoZSBjb25mbGljdEhhbmRsaW5nIHBhcmFtIC0gcHJvZmlsZSB3YXMgc2F2ZWQsIGJ1dCB0aGUgZW1haWwgY29uZmxpY3RzIHdpdGggYW5vdGhlciB1c2VyXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXHJcbiAgICBBQ0NPVU5UX01JU1NJTkdfTE9HSU5JRCA9IDIwNjAwMywgLy8gRm9yIGFjY291bnRzIEFQSVxyXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcclxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcclxuICAgIFBFTkRJTkdfQ09ERV9WRVJJRklDQVRJT04gPSAyMDYwMDYsXHJcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcclxuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXHJcbiAgICBJTlZBTElEX1JFUVVFU1RfRk9STUFUID0gNDAwMDAxLCAvLyBjb3VsZCBiZSBhbGwga2luZCBvZiBlcnJvcnMgd2l0aCB3cm9uZyByZXF1ZXN0IChub24gc2VjdXJlIHdoZW4gc2hvdWxkIGJlIHNlY3VyZSwgd3JvbmcgYXV0aGVudGljYXRpb24gaGVhZGVyKVxyXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXHJcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9GT1JNQVQgPSA0MDAwMDQsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcclxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcclxuICAgIElOVkFMSURfQVVUSEVOVElDQVRJT05fSEVBREVSID0gNDAwMDA4LCAvLyBPQXV0aDJcclxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfUkVTUE9OU0VfVFlQRSA9IDQwMDAxMiwgLy8gT0F1dGgyXHJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxyXG4gICAgQ09ERV9FWFBJUkVEID0gNDAwMDE1LCAvLyBPQXV0aDJcclxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcclxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcclxuICAgIFVOSVFVRV9JTkRFWF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIyLFxyXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXHJcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxyXG4gICAgV1JJVEVfQUNDRVNTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjUsXHJcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxyXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcclxuICAgIEVNQUlMX05PVF9WRVJJRklFRCA9IDQwMDAyOCxcclxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcclxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxyXG4gICAgU0VDVVJJVFlfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDA1MCxcclxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcclxuICAgIFVOU1VQUE9SVEVEX1VTRVJfQUdFTlQgPSA0MDAwOTcsIC8vXHJcbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cclxuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9FVkVOVF9IQU5ETEVSID0gNDAwMTAyLCAvLyBjbGllbnRcclxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxyXG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXHJcbiAgICBJTlZBTElEX1NJVEVfRE9NQUlOID0gNDAwMTIwLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcclxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcclxuICAgIEZSRVFVRU5DWV9MSU1JVF9SRUFDSEVEID0gNDAwMTI1LCAvLyBDb21tZW50cy9GZWVkIC0gU3BhbSBDYXBzIHdhcyByZWFjaGVkXHJcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XHJcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXHJcbiAgICBTSUdOQVRVUkVfVElNRVNUQU1QX0VYUElSRUQgPSA0MDAxMjgsIC8vIHRoZSB0aW1lc3RhbXAgaW5zaWRlIHRoZSBzaWduYXR1cmUgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxyXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXHJcbiAgICBMT0dJTl9GQUlMRURfQ0FQVENIQV9SRVFVSVJFRCA9IDQwMTAyMCwgLy8gYWNjb3VudHMubG9naW4gLSBjYXB0Y2hhIHJlcXVpcmVkXHJcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcclxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcclxuICAgIEZPUkJJRERFTiA9IDQwMzAwMCxcclxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcclxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xyXG4gICAgSU5WQUxJRF9SRVFVRVNUX1NJR05BVFVSRSA9IDQwMzAwMyxcclxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcclxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcclxuICAgIFNFTlNJVElWRV9EQVRBX1NFTlRfT1ZFUl9IVFRQID0gNDAzMDA2LCAvLyB3aGVuIHNlbmRpbmcgdGhlIHNlY3JldCBrZXkgaW4gUkVTVCBpdCBoYXMgdG8gYmUgb3ZlciBIVFRQU1xyXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxyXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXHJcbiAgICBQUk9WSURFUl9TRVNTSU9OX0VYUElSRUQgPSA0MDMwMDksIC8vIHRoZSB1c2VyIHNlc3Npb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcclxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcclxuICAgIE5PX1ZBTElEX1NFU1NJT04gPSA0MDMwMTIsIC8vIHJlcXVlc3RlZCB1c2VyIGhhcyBubyB2YWxpZCBzZXNzaW9uXHJcbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxyXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xyXG4gICAgVU5FWFBFQ1RFRF9QUk9WSURFUl9VU0VSID0gNDAzMDE3LCAvLyB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgZGlmZmVyZW50IGZyb20gdGhlIG9uZSBleHBlY3RlZFxyXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxyXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxyXG4gICAgUFJPVklERVJfTElNSVRfUkVBQ0hFRCA9IDQwMzAyNCwgLy8gdGhlIHByb3ZpZGVyIGxpbWl0IGZvciB0aGlzIGFjdGlvbiB3YXMgZXhjZWVkZWRcclxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxyXG4gICAgRElGRkVSRU5UX1VTRVJfRk9SX1JFQVVUSCA9IDQwMzAyNywgLy8gRGlmZmVyZW50IHVzZXIgdHJpZWQgdG8gcmUtYXV0aG9yaXplLlxyXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcclxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cclxuICAgIFRPS0VOX0hBU19SRU5FV0VEID0gNDAzMDMyLCAvLyB0aGUgdG9rZW4gaXMgbm8gbG9uZ2VyIHZhbGlkLCBidXQgd2UgaGF2ZSBuZXcgdG9rZW4gdG8gcHJvdmlkZVxyXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXHJcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxyXG4gICAgUE9TVF9ERU5JRUQgPSA0MDMwMzcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBvc3QgZGVuaWVkIHdoZW4gdGhlIHVzZXIgdHJpZWQgdG8gcmV2aWV3IHR3aWNlLlxyXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXHJcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXHJcbiAgICBJTlZBTElEX0xPR0lOSUQgPSA0MDMwNDIsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxyXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXHJcbiAgICBJTlZBTElEX1NJVEVfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMzA0NSwgLy8gRm9yIGFjY291bnRzIC0gc2l0ZSBEUyBpcyBlbmFibGVkIHRob3VnaCBubyBEU1NpemUgd2FzIGNvbmZpZ3VyZWQuXHJcbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcclxuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxyXG4gICAgUEVORElOR19QQVNTV09SRF9DSEFOR0UgPSA0MDMxMDAsIC8vIFRoZSB1c2VyJ3MgcGFzc3dvcmQgbmVlZHMgdG8gYmUgY2hhbmdlZFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gPSA0MDMxMTAsXHJcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcclxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxyXG4gICAgSU5WQUxJRF9BUFBMSUNBVElPTl9JRCA9IDQwMzIwMSwgLy8gVGhlIGFwcCBpZCBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgb25lIGNvbmZpZ3VyZWQgZm9yIHRoZSBzaXRlXHJcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cclxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgQ0FURUdPUllfTk9UX0ZPVU5EID0gNDA0MDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuXHJcbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxyXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcclxuICAgIElOVkFMSURfQVBJX01FVEhPRCA9IDQwNTAwMSwgLy8gaW50ZXJuYWwgZm9yIG91ciBKUyBBUElcclxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XHJcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFID0gNDEzMDAxLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBSZXF1ZXN0IHRvIGxhcmdlXHJcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXHJcbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxyXG4gICAgUFJPRklMRV9QSE9UT19UT09fTEFSR0UgPSA0MTMwMDQsIC8vIFByb2ZpbGUgcGhvdG8gaXMgdG9vIGxhcmdlLCBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBjb250ZW50IGxlbmd0aFxyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cclxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cclxuICAgIENPVU5URVJfTk9UX1JFR0lTVEVSRUQgPSA0MDkwMTEsIC8vIENvdW50ZXIgbm90IHJlZ2lzdGVyZWRcclxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxyXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcclxuICAgIFNBTUxfQ0VSVElGSUNBVEVfTk9UX0ZPVU5EID0gNDA5MDE0LCAvLyBVc2VkIHdoZW4gU0FNTCBjZXJ0aWZpY2F0ZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cclxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxyXG4gICAgU0VSVkVSX0xPR0lOX0VSUk9SID0gNTAwMDAyLCAvLyBnZW5lcmFsIGVycm9yIGR1cmluZyB0aGUgbG9naW4gcHJvY2Vzc1xyXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcclxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXHJcbiAgICBQUk9WSURFUl9FUlJPUiA9IDUwMDAyMywgLy8gZ2VuZXJhbCBlcnJvciBmcm9tIHRoZSBwcm92aWRlclxyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXHJcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxyXG4gICAgTk9fUFJPVklERVJfQVBQTElDQVRJT04gPSA1MDAwMzEsIC8vIHRoZSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBub3QgZGVmaW5lZCBmb3IgdGhpcyBzaXRlXHJcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXHJcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxyXG4gICAgRVJST1JfRFVSSU5HX0JBQ0tFTkRfT1BFUkFUSU9OID0gNTAwMDM0LFxyXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XHJcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcclxuICAgIElOVkFMSURfVVJMID0gNDA0MDA0LCAvLyBlbWJlZC5seSA0MDQgZXJyb3IgbWVzc2FnZSAtIHVybCBpcyBub3QgdmFsaWRcclxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcclxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcclxufVxyXG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFNhbWVfcGFzc3dvcmQgPSAxMDAwMDEsIC8vIFJlc2V0IFBhc3N3b3JkIC0gXCInb2xkUGFzc3dvcmQnIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyAnbmV3UGFzc3dvcmQnXCJcclxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXHJcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxyXG59XHJcbiIsImltcG9ydCB7IGdldEJhc2VEb21haW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XHJcbi8vIExvY2FsIGVudmlyb25tZW50IGluZm8gKGJyb3dzZXIsIGNhcGFiaWxpdGllcywgaG9zdGluZyBkb21haW4pXHJcblxyXG5kZWNsYXJlIGNvbnN0IEFjdGl2ZVhPYmplY3Q6IGFueTtcclxuXHJcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmV4cG9ydCB2YXIgbG9jYWxJbmZvID0ge1xyXG4gICAgYmFzZURvbWFpbjogJycsIC8vIGNhbGN1bGF0ZWQgbGF0ZXIgb25cclxuICAgIGlzQnJvd3NlclN1cHBvcnRzRmlsZXNBUEk6ICgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlUmVhZGVyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBGaWxlUmVhZGVyID09PSAnb2JqZWN0JztcclxuICAgIH0pKCksXHJcbiAgICBpbml0VGltZTogbmV3IERhdGUoKSxcclxuICAgIHZlcnNpb246IDAsIC8vVE9ET1xyXG4gICAgcGFnZURvbWFpbjogZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcbiAgICBwcm90b2NvbDogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcycsXHJcbiAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcclxuICAgIGlzV2luOiB1c2VyQWdlbnQuaW5kZXhPZignd2luJykgIT0gLTEsXHJcbiAgICBpc0lFOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xIHx8ICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50JykgIT0gLTEpLFxyXG4gICAgaXNJRTY6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDYuJykgIT0gLTEsXHJcbiAgICBpc0lFNzogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNy4nKSAhPSAtMSxcclxuICAgIGlzSUU4OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA4LicpICE9IC0xLFxyXG4gICAgaXNJRTk6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDkuJykgIT0gLTEsXHJcbiAgICBpc0lFMTA6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDEwLicpICE9IC0xLFxyXG4gICAgaXNJRTExOiB1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50LzcuMCcpICE9IC0xLFxyXG4gICAgaXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpICE9IC0xLFxyXG4gICAgaXNJT1M6IHVzZXJBZ2VudC5pbmRleE9mKCdpcGhvbmUnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBhZCcpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcG9kJykgIT0gLTEsXHJcbiAgICBpc1NhZmFyaTUzNDogdXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaS81MzQnKSAhPSAtMSxcclxuICAgIGlzV2VDaGF0OiB1c2VyQWdlbnQuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSAhPSAtMSxcclxuICAgIGlvc1ZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3ZlcnNpb24vJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNBbmRyb2lkOiB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xLFxyXG4gICAgaXNBbmRyb2lkQnJvd3NlcjogKHVzZXJBZ2VudCA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhLzUuMCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCA0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gU3BlY2lhbCB1c2VyIGFnZW50cyBmb3VuZCBzbyBmYXIgdGhhdCB2aW9sYXRlIHRoZSBleGlzdGFuY2Ugb2YgY2hyb21lIHJ1bGVcclxuICAgICAgICAvLyBCdWcgMzgzNjcgQW5kcm9pZCBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLXVzOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0pEUTM5KSBBcHBsZVdlYktpdC81MzUuMTkgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuMCBDaHJvbWUvMTguMC4xMDI1LjMwOCBNb2JpbGUgU2FmYXJpLzUzNS4xOVxyXG4gICAgICAgIC8vIEJ1ZyA0MDIwOSBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBTQU1TVU5HIFNHVC1JNzQ3IEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzM5LjAuMjE3MS45MyBNb2JpbGUgU2FmYXJpLzUzNy4zNlxyXG4gICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgQnJvd3NlcjogTW96aWxsYS81LjAgKE1vYmlsZTsgV2luZG93cyBQaG9uZSA4LjE7IEFuZHJvaWQgNC4wOyBBUk07IFRyaWRlbnQvNy4wOyBUb3VjaDsgcnY6MTEuMDsgSUVNb2JpbGUvMTEuMDsgTk9LSUE7IEx1bWlhIDkyMCkgbGlrZSBpUGhvbmUgT1MgN18wXzMgTWFjIE9TIFggQXBwbGVXZWJLaXQvNTM3IChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlIFNhZmFyaS81MzdcclxuICAgICAgICAvLyBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi1nYjsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS41IENocm9tZS8yOC4wLjE1MDAuOTQgTW9iaWxlIFNhZmFyaS81MzcuMzZcclxuXHJcbiAgICAgICAgdmFyIGNocm9tZUluZm8gPSAvY2hyb21lXFwvKFxcZCspLy5leGVjKHVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgIGlmICghY2hyb21lSW5mbykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoY2hyb21lSW5mb1sxXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaHJvbWVWZXJzaW9uIDwgMjA7XHJcbiAgICB9KSh1c2VyQWdlbnQpLFxyXG4gICAgY3VycmVudEJyb3dzZXI6ICcnLFxyXG4gICAgYW5kcm9pZFZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh1c2VyQWdlbnQuc2xpY2UodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSArIDgpKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjaHJvbWUnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpID09IC0xLCAvLyBlZGdlIGJyb3dzZXIgYWxzbyB1c2VzIENocm9tZSBpbiBpdHMgVUEgc3RyaW5nLlxyXG4gICAgaXNHb29nbGVCb3Q6IHVzZXJBZ2VudC5pbmRleE9mKCdnb29nbGVib3QnKSAhPSAtMSxcclxuICAgIGlzRkY6IHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEsXHJcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEnKSAhPSAtMSxcclxuICAgIGlzU2FmYXJpOlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPT0gLTEgJiZcclxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID09IC0xLFxyXG4gICAgaXNJT1NXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcbiAgICBpc0lPU0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2NyaW9zJykgIT0gLTEsXHJcbiAgICBpc01BQzogbmF2aWdhdG9yLmFwcFZlcnNpb24gJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSAhPSAtMSxcclxuICAgIGlzV2luZG93c1Bob25lOiB1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9IC0xLFxyXG4gICAgaXNGYWNlYm9va0Jyb3dzZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdmYmFuJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2ZiYXYnKSAhPSAtMSxcclxuICAgIHN1cHBvcnRzUG9zdE1lc3NhZ2U6IHdpbmRvdy5wb3N0TWVzc2FnZSAhPSBudWxsICYmICh1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpID09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpZW1vYmlsZScpICE9IC0xKSxcclxuICAgIHN1cHBvcnRzTG9jYWxTdG9yYWdlOiBmYWxzZSxcclxuICAgIHN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgc3VwcG9ydHNGbGFzaDogKCgpID0+IHtcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5ODI0NS9ob3ctY2FuLWktZGV0ZWN0LWlmLWZsYXNoLWlzLWluc3RhbGxlZC1hbmQtaWYtbm90LWRpc3BsYXktYS1oaWRkZW4tZGl2LXRoYXQtaW5mXHJcbiAgICAgICAgbGV0IHN1cHBvcnRzRmxhc2ggPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzICYmXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXS5lbmFibGVkUGx1Z2luXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIHJldHVybiBzdXBwb3J0c0ZsYXNoO1xyXG4gICAgfSkoKSxcclxuICAgIHF1aXJrc01vZGU6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnICYmIHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEsXHJcbiAgICBiYWNrQ29tcGF0OiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyxcclxuICAgIC8vIFRPRE86IEFkZCBpc1RhYmxldCBmdW5jdGlvbiBmb3IgZGV2aWNlcyBub24tTW9iaWxlXHJcbiAgICBpc01vYmlsZTogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtb2JpbGVDbGllbnRzID0gW1xyXG4gICAgICAgICAgICAnaXBob25lJyxcclxuICAgICAgICAgICAgJ2lwb2QnLFxyXG4gICAgICAgICAgICAnYW5kcm9pZCcsXHJcbiAgICAgICAgICAgICdtaWRwJyxcclxuICAgICAgICAgICAgJzI0MHgzMjAnLFxyXG4gICAgICAgICAgICAnYmxhY2tiZXJyeScsXHJcbiAgICAgICAgICAgICduZXRmcm9udCcsXHJcbiAgICAgICAgICAgICdub2tpYScsXHJcbiAgICAgICAgICAgICdwYW5hc29uaWMnLFxyXG4gICAgICAgICAgICAncG9ydGFsbW1tJyxcclxuICAgICAgICAgICAgJ3NoYXJwJyxcclxuICAgICAgICAgICAgJ3NpZS0nLFxyXG4gICAgICAgICAgICAnc29ueWVyaWNzc29uJyxcclxuICAgICAgICAgICAgJ3N5bWJpYW4nLFxyXG4gICAgICAgICAgICAnd2luZG93cyBjZScsXHJcbiAgICAgICAgICAgICdiZW5xJyxcclxuICAgICAgICAgICAgJ21kYScsXHJcbiAgICAgICAgICAgICdtb3QtJyxcclxuICAgICAgICAgICAgJ29wZXJhIG1pbmknLFxyXG4gICAgICAgICAgICAncGhpbGlwcycsXHJcbiAgICAgICAgICAgICdwb2NrZXQgcGMnLFxyXG4gICAgICAgICAgICAnc2FnZW0nLFxyXG4gICAgICAgICAgICAnc2Ftc3VuZycsXHJcbiAgICAgICAgICAgICdodGMnLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtb2JpbGVDbGllbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihtb2JpbGVDbGllbnRzW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzTW9iaWxlQXBwOiAoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUpXHJcbiAgICAgICAgICAgIC8vIGZvciBvbGQgSUVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbWV0YVRhZ3M6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKSBhcyBhbnk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICd2aWV3cG9ydCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gbWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudC5pbmRleE9mKCd3aWR0aD1kZXZpY2Utd2lkdGgnKSAhPT0gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNOYXRpdmVNb2JpbGVBcHA6IGZhbHNlLCAvLyB3aWxsIGNoYW5nZSBpZiBtb2JpbGUgYWRhcHRlciB3aWxsIGxvYWQgW2luIGl0cyAnaW5pdCcgbWV0aG9kXS5cclxuICAgIGlzVG91Y2g6IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxyXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgLy8gd29ya3Mgb24gaWUxMFxyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIGlmIElFIGlzIG9wZW4gaW4gbWV0cm8gbW9kZS4gTWV0cm8gZG9lc24ndCBhbGxvdyBhY3RpdmVYLCB0aGF0J3MgdGhlIGJlc3QgdGVzdCBhdmFpbGFibGUgYXMgb2YgSUUxMS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzT25MaW5lOiAoKSA9PiBuYXZpZ2F0b3Iub25MaW5lLFxyXG4gICAgbWVzc2FnaW5nTWV0aG9kOiAwXHJcbn07XHJcbmNvbnN0IGlzU3RvcmFnZUVuYWJsZWQgPSAoc3RvcmFnZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVzdE5hbWUgPSAnX2dpZ19sb2NhbFN0b3JhZ2VfdGVzdCc7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gJ2p1c3QgY2hlY2tpbmcgZm9yIGxvY2FsU3RvcmFnZSc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHRlc3ROYW1lLCB0ZXN0VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0TmFtZSkgPT09IHRlc3RWYWx1ZTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdE5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIC8vIFJlYXNvbnM6XHJcbiAgICAgICAgLy8gLSBJbnNpZGUgM3JkIHBhcnR5IEFQSSBwcm94eSBpRnJhbWUuXHJcbiAgICAgICAgLy8gLSBTYWZhcmkgaW4gaW5jb2duaXRvIG1vZGUgd2lsbCBlcnJvciB3aXRoIFwicXVvdGEgZXhjZWVkZWRcIi5cclxuICAgICAgICAvLyAtIENocm9tZSB3aXRoIDNyZCBwYXJ0eSBjb29raWVzIGRpc2FibGVkIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IGFjY2VzcyB0aGUgd2luZG93LmxvY2FsU3RvcmFnZSBvYmplY3QgaW4gQU5ZIHdheS5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ2xvY2FsU3RvcmFnZScpO1xyXG5sb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XHJcbmlmIChsb2NhbEluZm8uaXNJRTExICYmICF3aW5kb3cuaW5kZXhlZERCKVxyXG4gICAgLy8gSUUxMC0xMSBzdXBwb3J0IHBvc3RNZXNzYWdlIGJldHdlZW4gaWZyYW1lcyBidXQgbm90IGluUHJpdmF0ZSBtb2RlXHJcbiAgICBsb2NhbEluZm8uc3VwcG9ydHNQb3N0TWVzc2FnZSA9IGZhbHNlO1xyXG5sb2NhbEluZm8uaXNNQUMgPSBsb2NhbEluZm8uaXNNQUMgJiYgIWxvY2FsSW5mby5pc0lPUztcclxudmFyIG9zID0gbG9jYWxJbmZvLmlzV2luXHJcbiAgICA/ICd3aW5kb3dzJ1xyXG4gICAgOiBsb2NhbEluZm8uaXNXaW5kb3dzUGhvbmVcclxuICAgICAgICA/ICd3aW5waG9uZSdcclxuICAgICAgICA6IGxvY2FsSW5mby5pc0lPU1xyXG4gICAgICAgICAgICA/ICdpb3MtdicgKyBsb2NhbEluZm8uaW9zVmVyc2lvblxyXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc01BQ1xyXG4gICAgICAgICAgICAgICAgPyAnbWFjJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNBbmRyb2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnYW5kcm9pZCdcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5pZiAob3MpIG9zICs9ICcgJztcclxudmFyIGJyb3dzZXIgPSBsb2NhbEluZm8uaXNDaHJvbWVcclxuICAgID8gJ2Nocm9tZSdcclxuICAgIDogbG9jYWxJbmZvLmlzRkZcclxuICAgICAgICA/ICdmaXJlZm94J1xyXG4gICAgICAgIDogbG9jYWxJbmZvLmlzU2FmYXJpXHJcbiAgICAgICAgICAgID8gJ3NhZmFyaSdcclxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlXHJcbiAgICAgICAgICAgICAgICA/ICdlZGdlJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTExXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnaWUxMSdcclxuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWUxMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbmxvY2FsSW5mby5jdXJyZW50QnJvd3NlciA9IG9zICsgYnJvd3NlcjtcclxubGV0IGJhc2VEb21haW5zOiBzdHJpbmdbXXxzdHJpbmc7XHJcbmlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3M/LmJhc2VEb21haW5zPy5sZW5ndGgpIHtcclxuICAgIGJhc2VEb21haW5zID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zIGFzIHN0cmluZ1tdfHN0cmluZztcclxufSBlbHNlIHtcclxuICAgIGlmICh3aW5kb3cuc2VsZiA9PT0gd2luZG93LnRvcCkge1xyXG4gICAgICAgIC8vIG9ubHkgaW4gdGhlIHRvcCBmcmFtZVxyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKCdnaWd5YTogbWlzc2luZyBiYXNlIGRvbWFpbnMgZm9yIHNpdGUnKTtcclxuICAgIH1cclxuICAgIGJhc2VEb21haW5zID0gW2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXTtcclxufVxyXG5sb2NhbEluZm8uYmFzZURvbWFpbiA9IGdldEJhc2VEb21haW4oYmFzZURvbWFpbnMpO1xyXG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgdmlld3BvcnRVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmlld3BvcnQnO1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zJztcclxuXHJcbmV4cG9ydCB2YXIgX3BvcHVwQ29udGFpbmVycyA9IFtdO1xyXG5leHBvcnQgdmFyIF9wc2V1ZG9Db250YWluZXJzID0gW107XHJcbmxldCBfbmV4dFpJbmRleCA9IDk5OTk5OTk5OTtcclxudmFyIGJhY2tMaXN0ZW5lciA9IG51bGw7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0WkluZGV4KCkge1xyXG4gICAgX25leHRaSW5kZXgrKztcclxuICAgIHJldHVybiBfbmV4dFpJbmRleDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lczogc3RyaW5nW10pOiBIVE1MU2NyaXB0RWxlbWVudCB7XHJcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgIHZhciBzY3JpcHRFbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudDtcclxuICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xyXG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcclxuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzcmMgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YUNkblJlZ2V4LnRlc3Qoc3JjKSB8fCBzcmMuaW5kZXhPZignP2FwaWtleT0nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goZWw6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgdmFyIGV2ZW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJRTEwIGFuZCBiZWxvdyBzdXBwb3J0XHJcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJ1dHRvblN1Ym1pdExpc3RlbmVyKGVsOiBIVE1MRWxlbWVudCwgaGFuZGxlcjogRnVuY3Rpb24sIGV2ZW50OiAnY2xpY2snIHwgJ3RvdWNoZW5kJyA9ICdjbGljaycsIGRlYnVnTmFtZT86IHN0cmluZykge1xyXG4gICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9ICctMScpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCAoZTogTW91c2VFdmVudCkgPT4gaGFuZGxlcihlKSk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsLCAna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMTMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbCB8fCAhaGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbDogYW55LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xyXG4gICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5ldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREaWFsb2dCYWNrTGlzdGVuZXIoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaG91bGQgZmlyZSB3aGVuIGJhY2sgaXMgY2xpY2tlZFxyXG4gICAgYmFja0xpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUubmV3VVJMICYmIGUubmV3VVJMLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhc2ggY291bGQgY2hhbmdlIHJpZ2h0IGFmdGVyIHRoZSBjYWxsIGlmIGl0IHdhcyBpbml0aWF0ZWQgZnJvbSBhIGxpbmsgdGhhdCBkaWRuJ3QgcmV0dXJuIGZhbHNlXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignfGdpZ3lhTW9iaWxlRGlhbG9nJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCArICd8Z2lneWFNb2JpbGVEaWFsb2cnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBiYWNrTGlzdGVuZXIpO1xyXG4gICAgfSwgNTApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKCFiYWNrTGlzdGVuZXIpIHJldHVybjtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XHJcbiAgICBiYWNrTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgLy9yZXN0b3JlIHByZXZpb3VzIGhhc2hcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnfGdpZ3lhTW9iaWxlRGlhbG9nJywgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0JvZHkoZWw6IEhUTUxFbGVtZW50LCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KSByZXR1cm47XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGVsICYmIGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZE9mKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IE5vZGUpIHtcclxuICAgIHZhciBkaXJlY3RQYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG5cclxuICAgIHdoaWxlIChkaXJlY3RQYXJlbnQpIHtcclxuICAgICAgICBpZiAocGFyZW50ID09IGRpcmVjdFBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdFBhcmVudCA9IGRpcmVjdFBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgd2hpbGUgKGVsKSB7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJlZERpdklEKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICdnaWdfJyArIGxvY2FsSW5mby5pbml0VGltZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdfJyArIG5hbWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhkb21FbGVtTmFtZTogc3RyaW5nLCBkb21FbGVtQXR0cnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgbmV3RG9tRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tRWxlbU5hbWUpO1xyXG5cclxuICAgIGlmIChkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBlbGVtQXR0ciBpbiBkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICAgICAgbmV3RG9tRWxlbVtlbGVtQXR0cl0gPSBkb21FbGVtQXR0cnNbZWxlbUF0dHJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RG9tRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9wTGV2ZWxEaXYoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBpZiAoZWwuc3R5bGUuekluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGVsLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBsb2NhbEluZm8uaXNJRTYgPyAoZWwudGFnTmFtZSA9PSAnVEQnID8gJ3RhYmxlLWNlbGwnIDogZWwudGFnTmFtZSA9PSAnVFInID8gJycgOiBlbC50YWdOYW1lID09ICdUQUJMRScgPyAnJyA6ICdibG9jaycpIDogJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnlJRChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChjICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIVE1MU2l6ZShodG1sOiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xyXG4gICAgdmFyIGRpdk1lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdk1lYXN1cmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2TWVhc3VyZS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xyXG4gICAgZGl2TWVhc3VyZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xyXG4gICAgdmFyIHcgPSBkaXZNZWFzdXJlLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIGggPSBkaXZNZWFzdXJlLm9mZnNldEhlaWdodDtcclxuICAgIGRpdk1lYXN1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZNZWFzdXJlKTtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgaW5jbHVkZVBhcmVudD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdIHtcclxuICAgIGlmICghcGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHZhciBhckVscyA9IFtdO1xyXG5cclxuICAgIGlmIChpbmNsdWRlUGFyZW50ICYmIGlzRWxlbWVudENsYXNzKHBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBhckVscy5wdXNoKHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIGFzIGFueTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudENsYXNzKGVsc1tpXSwgY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzIHx8IFtdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5QXR0cmlidXRlKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YWdOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xyXG4gICAgdmFyIGFyRWxzID0gW107XHJcbiAgICB2YXIgZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZWxzW2ldLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSA9PSBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWw6IEhUTUxFbGVtZW50KTogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9IHtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHNjcm9sbCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcbiAgICB2YXIgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbC5sZWZ0O1xyXG4gICAgdmFyIHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsLnRvcDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgcmlnaHQ6IGxlZnQgKyByZWN0LndpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogdG9wICsgcmVjdC5oZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4aXN0aW5nQ2xhc3NlcyA9IGVsLmNsYXNzTmFtZSA/IGdldENsYXNzTmFtZXMoZWwpIDogW107XHJcbiAgICB2YXIgZXhpc3RpbmdPcmlnaW5hbExlbmd0aCA9IGV4aXN0aW5nQ2xhc3Nlcy5sZW5ndGg7XHJcbiAgICB2YXIgbmV3Q2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgIGZvciAodmFyIGogaW4gbmV3Q2xhc3Nlcykge1xyXG4gICAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIW5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gZXhpc3RpbmdDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NsYXNzZXNbaV0gPT09IG5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDbGFzc2VzLnB1c2gobmV3Q2xhc3Nlc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGlzdGluZ0NsYXNzZXMubGVuZ3RoICE9PSBleGlzdGluZ09yaWdpbmFsTGVuZ3RoKSB7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZXhpc3RpbmdDbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBzdWJzdHJpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XHJcbiAgICBmb3IgKHZhciBpID0gYXJDbGFzcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChhckNsYXNzW2ldID09PSBjbGFzc05hbWUgfHwgKHN1YnN0cmluZyAmJiBhckNsYXNzW2ldLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgIGFyQ2xhc3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsLmNsYXNzTmFtZSA9IGFyQ2xhc3Muam9pbignICcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc05hbWVzKGVsOiBIVE1MRWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgdmFyIGNsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGlmICh0eXBlb2YgZWwuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICghY2xhc3NOYW1lKSByZXR1cm4gdHJ1ZTtcclxuICAgIGVsc2UgaWYgKCFlbC5jbGFzc05hbWUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB2YXIgZXhpc3RzID0gZmFsc2U7XHJcbiAgICB2YXIgYXJDbGFzcyA9IGdldENsYXNzTmFtZXMoZWwpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyQ2xhc3NbaV0gPT09IGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhpc3RzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XHJcbiAgICBpZiAoJ2NhbmNlbGFibGUnIGluIGV2ZW50KVxyXG4gICAgICAgIC8vIEFsbCBicm93c2VycyBleGNlcHQgPElFOVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWUgPSBuYW1lIHx8ICcnO1xyXG4gICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9ICc8JyArIHR5cGUgKyAnIG5hbWU9XCInICsgbmFtZSArICdcIiBpZD1cIicgKyBuYW1lICsgJ1wiPjwvJyArIHR5cGUgKyAnPic7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdzogYW55LCBoOiBhbnksIGNlbnRlcj86IGJvb2xlYW4pIHtcclxuICAgIGlmIChjb250YWluZXIgPT0gbnVsbCB8fCBjb250YWluZXIuc3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodykge1xyXG4gICAgICAgIHcgPSAnJyArIHc7XHJcbiAgICAgICAgdmFyIGlzV2lkdGhQcmVjZW50YWdlID0gdy5pbmRleE9mKCclJykgPiAwO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzV2lkdGhQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aFZhbHVlOiBzdHJpbmcgPSAnJyArIChpc1dpZHRoUHJlY2VudGFnZSA/IHcgOiB3ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLndpZHRoICE9IHdpZHRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpZHRoVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGgpIHtcclxuICAgICAgICBoID0gJycgKyBoO1xyXG4gICAgICAgIHZhciBpc0hlaWdodFByZWNlbnRhZ2UgPSBoLmluZGV4T2YoJyUnKSA+IDA7XHJcblxyXG4gICAgICAgIGlmICghaXNOYU4odykgfHwgaXNIZWlnaHRQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHRWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNIZWlnaHRQcmVjZW50YWdlID8gaCA6IGggKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuc3R5bGUuaGVpZ2h0ICE9PSBoZWlnaHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjZW50ZXIgJiYgdyAmJiBoKSB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXggPT0gbnVsbCB8fCBjZW50ZXIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZwID0gdmlld3BvcnRVdGlscy5nZXRJbm5lclNpemUoKTtcclxuICAgICAgICB2YXIgc2NybCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcclxuICAgICAgICB2YXIgdnBsID0gc2NybC5sZWZ0O1xyXG5cclxuICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gJycgKyBNYXRoLm1heCgwLCB2cHQgKyBNYXRoLmZsb29yKCh2cC5oIC0gaCkgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJycgKyBNYXRoLm1heCgwLCB2cGwgKyBNYXRoLmZsb29yKCh2cC53IC0gdykgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpZGRlbklmcmFtZShzcmM6IHN0cmluZyk6IEhUTUxJRnJhbWVFbGVtZW50IHtcclxuICAgIHZhciBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGlmci5zcmMgPSBzcmM7XHJcbiAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XHJcbiAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xyXG4gICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBpZnIuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdW5jdGlvbnNVdGlscy5pbnZva2VPblBhZ2VMb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgYXBwZW5kVG9Cb2R5KGlmcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlmcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlRW5jb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXCIvZywgJyZxdW90OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJy9nLCAnJiMzOTsnKTsgLy8gSUU4IGRvZXNuJ3Qgc3VwcG9ydCAmYXBvcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFuaXB1bGF0ZUF0dHJpYnV0ZXMoXHJcbiAgICBlbGVtZW50czogRWxlbWVudFtdLFxyXG4gICAgbWF0Y2hlcjogUmVnRXhwLFxyXG4gICAgcmVwbGFjZVByZWRpY2F0ZTogKG1hdGNoOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBjcml0ZXJpYTogKGF0dHI/OiBBdHRyKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZSxcclxuKTogdm9pZCB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBpZiAoIWVsLmF0dHJpYnV0ZXMpIHJldHVybjtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3JpdGVyaWEoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobWF0Y2hlciwgcmVwbGFjZVByZWRpY2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Tm9kZXNVbmRlcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBuO1xyXG4gICAgY29uc3QgdGV4dE5vZGVzOiBUZXh0W10gPSBbXTtcclxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgd2hpbGUgKChuID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpIGFzIFRleHQpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dE5vZGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxCb29sZWFuQXR0cmlidXRlKGF0dHJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBbJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdoaWRkZW4nLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VsZWN0ZWQnXS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIWVsIHx8IGVsIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlbmQgb2YgcmVjdXJzaW9uIC0gZWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBhIGZpZWxkc2V0XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudENsYXNzKGVsLnBhcmVudEVsZW1lbnQsICdnaWd5YS1maWVsZHNldCcpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWwucGFyZW50RWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55LCBpbmNsdWRlRnVuY3Rpb25zID0gZmFsc2UsIHByZXR0eVByaW50ID0gZmFsc2UsIGwgPSAwLCBtYXhMZXZlbCA9IDIwKTogc3RyaW5nIHtcclxuICAgIGlmICghbG9jYWxJbmZvLmlzSUU4KSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snSlNPTiddLnN0cmluZ2lmeShvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWwpIGwgPSAwO1xyXG5cclxuICAgICAgICBpZiAobCA+IG1heExldmVsKSByZXR1cm4gJ1tUb28gZGVlcF0nO1xyXG5cclxuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgdmFyIG5ld2xpbmUgPSAnJztcclxuICAgICAgICB2YXIgdGFiID0gJyc7XHJcbiAgICAgICAgaWYgKHByZXR0eVByaW50KSB7XHJcbiAgICAgICAgICAgIHRhYiA9ICdcXHQnO1xyXG4gICAgICAgICAgICBuZXdsaW5lID0gJ1xcbic7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IHRhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdCA9IHR5cGVvZiBvYmo7XHJcbiAgICAgICAgaWYgKHQgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCAhPSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gc2ltcGxlIGRhdGEgdHlwZVxyXG5cclxuICAgICAgICAgICAgaWYgKHQgPT0gJ3N0cmluZycpIG9iaiA9ICdcIicgKyBvYmoucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuLFxyXG4gICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICAgIGpzb24gPSBbXSxcclxuICAgICAgICAgICAgICAgIGFyciA9IG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT0gQXJyYXk7XHJcbiAgICAgICAgICAgIGlmIChhcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtpXTtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdHlwZW9mIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnc3RyaW5nJykgdiA9ICdcIicgKyB2LnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB2ID0gJ0Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCkgdiA9IHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgU3RyaW5nKHYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gb2JqW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnc3RyaW5nJykgdiA9ICdcIicgKyB2LnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gJ0Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5wYXJlbnROb2RlICYmIHYuaW5uZXJIVE1MKSB2ID0gJ0hUTUxFbGVtZW50JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBuZXdsaW5lICsgc2VyaWFsaXplKHYsIGluY2x1ZGVGdW5jdGlvbnMsIHByZXR0eVByaW50LCBsICsgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyAnXCInICsgbi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCI6JyArIFN0cmluZyh2KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ1snIDogJ3snKSArIG5ld2xpbmUgKyBqc29uLmpvaW4oJywnICsgbmV3bGluZSkgKyBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICddJyA6ICd9Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZTxUPihqc29uOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IFQsIHNjb3BlPzogYW55KTogVCB7XHJcbiAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiBpcyBlbXB0eSBzdHJpbmcgKG9yIHNpbWlsYXIpLlxyXG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGVtcHQgdG8gcGFyc2UuIE9uIGVycm9yLCB3YXJuIGluIGNvbnNvbGUgYW5kIHJldHVybiBkZWZhdWx0IHZhbHVlLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNjb3BlW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBldmFsKGAoZnVuY3Rpb24oJHtrZXlzLmpvaW4oJywnKX0pIHsgcmV0dXJuICR7anNvbi50cmltKCl9OyB9KWApO1xyXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIHZhbHVlcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkZXNlcmlhbGl6aW5nIEphdmFTY3JpcHQnLCBlKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2U8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBUKTogVCB7XHJcbiAgICBpZiAobG9jYWxJbmZvLmlzSUU4KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplPFQ+KGpzb24sIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5wYXJzZShqc29uKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJpIHtcclxuICAgIHByaXZhdGUgX2FuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJztcclxuICAgICAgICBpZiAoaXNBYnNvbHV0ZSAmJiB1cmwuaW5kZXhPZignOi8vJykgPT09IC0xICYmIHVybC5jaGFyQXQoMCkgIT09ICcvJykgdXJsID0gYCR7cHJvdG9jb2x9Oi8vJHt1cmx9YDtcclxuICAgICAgICB0aGlzLl9hbmNob3IuaHJlZiA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRvbWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhvc3RuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5zZWFyY2guc2xpY2UoMSk7XHJcbiAgICB9IC8vIGRyb3BwaW5nICc/J1xyXG4gICAgcHVibGljIGdldCBoYXNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaGFzaC5zbGljZSgxKTtcclxuICAgIH0gLy8gZHJvcHBpbmcgJyMnXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvU2VhcmNoKHBhcmFtczogT2JqZWN0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyYW1zW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWwgPT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWwgPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PSAnc3RyaW5nJykgJiYgbmFtZSAhPSAnZXZlbnROYW1lJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5fYW5jaG9yLnNlYXJjaCA/ICcmJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5jaG9yLnNlYXJjaCArPSBgJHthZGRpdGlvbn0ke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1tuYW1lXSl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2g8VD4ocmV0cmllcyA9IDApOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZldGNoID8gYXdhaXQgdGhpcy5icm93c2VyRmV0Y2g8VD4oKSA6IGF3YWl0IHRoaXMueGhyPFQ+KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWQ6ICR7ZX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgxKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2gocmV0cmllcyAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNCYXNlT2YodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gVXJpLnBhcnNlKHVybCkuaXNJbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzSW4oYmFzZTogVXJpKTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgYmFzZSA9IFVyaS5wYXJzZShiYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICh0aGlzLmRvbWFpbiA9PSBiYXNlLmRvbWFpbiB8fCAvLyBwYWdlIGlzIHRoZSBiYXNlIGRvbWFpblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1YkRvbWFpbk9mKGJhc2UpKSAmJiAvLyBvciBzdWItZG9tYWluIG9mIGl0XHJcbiAgICAgICAgICAgICghYmFzZS5wYXRoIHx8IHRoaXMucGF0aC5pbmRleE9mKGJhc2UucGF0aCkgPT0gMClcclxuICAgICAgICApOyAvLyBwYWdlIGlzIGFsc28gaW4gYmFzZSdzIGRlZmluZWQgcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGb3JTdWJEb21haW5zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbWFpbi5pbmRleE9mKCcuJykgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTdWJEb21haW5PZihiYXNlOiBVcmkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZG9tYWluID0gJyc7XHJcblxyXG4gICAgICAgIGlmICghYmFzZS5pc0ZvclN1YkRvbWFpbnMoKSkgZG9tYWluID0gJy4nO1xyXG5cclxuICAgICAgICBkb21haW4gKz0gYmFzZS5kb21haW47XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmdVdGlsc1V0aWxzLmVuZHNXaXRoKHRoaXMuZG9tYWluLCBkb21haW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVXJpKHVybCwgaXNBYnNvbHV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBicm93c2VyRmV0Y2g8VD4oKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWRgKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgeGhyPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0IHx8IHhoci5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChgeGhyIGZhaWxlZCAtICR7eGhyLnN0YXR1c30gLSAke3hoci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGF5KG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJTnVtZXJpY01hcDxUPiB7XHJcbiAgICBba2V5OiBudW1iZXJdOiBUO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcDxUPiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBUO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudW1lcmFibGU8VD4ge1xyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBbaTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcjogYW55W10sIG86IGFueSk6IG51bWJlciB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyW2ldID09IG8pIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcjogYW55W10pIHtcclxuICAgIHZhciBhcjIgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhcjJbaV0gPSBhcltpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcjI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5VmFsdWUoYXI6IGFueVtdLCB2YWx1ZTogT2JqZWN0KSB7XHJcbiAgICBpZiAoIWFyKSByZXR1cm47XHJcbiAgICBmb3IgKHZhciBpID0gYXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoYXJbaV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgYXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlQcm9wZXJ0eShhcjogYW55W10sIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICghYXIpIHJldHVybjtcclxuICAgIGZvciAodmFyIGkgPSBhci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChhcltpXVtwcm9wZXJ0eV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgYXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlGcm9tU3RyaW5nKHN0cjogc3RyaW5nLCBkZWxpbWl0ZXI6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbikge1xyXG4gICAgLy8gY2hlY2sgZm9yIHN0cmluZyB0eXBlIGluIHRoZSBpbnB1dCBhbmQgbm90IGVtcHR5LlxyXG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPSAnc3RyaW5nJykgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIGxvd2VyY2FzZSBpZiBkZW1lbmRlZFxyXG4gICAgaWYgKGxvd2VyQ2FzZSkgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gY2xlYW4gdGhlIHN0cmluZzpcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bIF0vZywgJycpLnJlcGxhY2UoLywsL2csICcsJyk7XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGVtcHR5XHJcbiAgICBpZiAoIXN0cikgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIHJldHVybiBhcnJheSBmcm9tIHN0cmluZ1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWxpbWl0ZXIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3QoYXJyYXk6IGFueVtdLCAuLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gW107XHJcbiAgICB2YXIgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgdmFyIGFyZ3NMZW5ndGg6IG51bWJlciA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbTogYW55ID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhPZihyZXN1bHQsIGl0ZW0pICE9IC0xKSBjb250aW51ZTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgYXJyOiBhbnlbXSA9IGFyZ3VtZW50c1tqXTtcclxuICAgICAgICAgICAgaWYgKGFyciA9PSBudWxsIHx8IHRoaXMuaW5kZXhPZihhcnIsIGl0ZW0pID09IC0xKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGFzdEluZGV4T2Y8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgdmFsOiBULCBmcm9tSW5kZXggPSAwKTogbnVtYmVyIHtcclxuICAgIGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyAtLWkgPj0gZnJvbUluZGV4OyApIHtcclxuICAgICAgICBpZiAoYXJyW2ldID09PSB2YWwpIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBhY3Rpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IHZvaWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSBhY3Rpb24oYXJyW2ldLCBpLCBhcnIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcDxUPihvYmo6IElNYXA8VD4sIGFjdGlvbjogKHByb3A6IFQsIG5hbWU6IHN0cmluZywgb2JqOiBJTWFwPFQ+KSA9PiB2b2lkKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hQcm9wPFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwgYWN0aW9uOiAocHJvcDogYW55LCBuYW1lOiBzdHJpbmcsIG9iajogVCkgPT4gdm9pZCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcChvYmo6IE9iamVjdCwgYWN0aW9uOiAocHJvcDogYW55LCBuYW1lOiBzdHJpbmcsIG9iajogT2JqZWN0KSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIGFjdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNvbWU8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgY29uZGl0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiBib29sZWFuKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oYXJyW2ldLCBpLCBhcnIpKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoIWNvbmRpdGlvbihhcnJbaV0sIGksIGFycikpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wPFQ+KG9iajogSU1hcDxUPiwgY29uZGl0aW9uOiAocHJvcDogVCwgbmFtZTogc3RyaW5nLCBvYmo6IElNYXA8VD4pID0+IGJvb2xlYW4pO1xyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wPFQ+KG9iajogVCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IGJvb2xlYW4pO1xyXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlQcm9wKG9iajogT2JqZWN0LCBjb25kaXRpb246IChwcm9wLCBuYW1lOiBzdHJpbmcsIG9iajogT2JqZWN0KSA9PiBib29sZWFuKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkgJiYgIWNvbmRpdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaikpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFMsIFQ+KGFycjogSUVudW1lcmFibGU8Uz4sIGFjdGlvbjogKGVsZW1lbnQ6IFMsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxTPikgPT4gVCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxUPigpO1xyXG5cclxuICAgIGZvckVhY2goYXJyLCAoaXRlbSwgaWR4LCBhcnIpID0+IHJlc3VsdC5wdXNoKGFjdGlvbihpdGVtLCBpZHgsIGFycikpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaXJzdEluZGV4PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICB2YXIgcmVzdWx0OiBudW1iZXIgPSAtMTtcclxuICAgIHNvbWUoYXJyLCAoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oaXRlbSwgaW5kZXgsIGFycikpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3Q8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgY29uZGl0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiBib29sZWFuKTogVCB7XHJcbiAgICByZXR1cm4gYXJyW2ZpcnN0SW5kZXgoYXJyLCBjb25kaXRpb24pXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRW51bVZhbHVlczxUPihlbnVtVHlwZSk6IFRbXSB7XHJcbiAgICB2YXIgcmVzdWx0czogVFtdID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiBlbnVtVHlwZSkgaWYgKHR5cGVvZiBlbnVtVHlwZVtpXSA9PSAnbnVtYmVyJykgcmVzdWx0cy5wdXNoKGVudW1UeXBlW2ldKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlVmFsdWVzPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBhcnJbal0pIHtcclxuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIHVuZXNjYXBlKGVzY2FwZWRTdHI6IHN0cmluZyk6IHN0cmluZztcclxuZGVjbGFyZSBmdW5jdGlvbiBlc2NhcGUodW5lc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX2dldEJhc2VEb21haW4oKSB7XHJcbiAgICByZXR1cm4gbG9jYWxJbmZvLmJhc2VEb21haW4gfHwgJyc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHREb21haW4ocGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluLCBiYXNlRG9tYWluID0gX2dldEJhc2VEb21haW4oKSk6IHN0cmluZyB7XHJcbiAgICBsZXQgY29va2llRG9tYWluO1xyXG4gICAgY29va2llRG9tYWluID1cclxuICAgICAgICBiYXNlRG9tYWluLmxlbmd0aCA+IDAgJiYgcGFnZURvbWFpbi5sZW5ndGggPj0gYmFzZURvbWFpbi5sZW5ndGggJiYgcGFnZURvbWFpbi5sYXN0SW5kZXhPZihiYXNlRG9tYWluKSA9PT0gcGFnZURvbWFpbi5sZW5ndGggLSBiYXNlRG9tYWluLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGJhc2VEb21haW5cclxuICAgICAgICAgICAgOiBwYWdlRG9tYWluO1xyXG4gICAgcmV0dXJuIGNvb2tpZURvbWFpbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXlsgXFx0XSt8WyBcXHRdKyQvZywgJycpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBuYW1lICsgJz0oLio/KSg/Ojt8JCknKTtcclxuICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWdleCk7XHJcbiAgICByZXR1cm4gbWF0Y2ggJiYgdW5lc2NhcGUobWF0Y2hbMV0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzX2luPzogYW55LCBjb29raWVEb21haW4/OiBzdHJpbmcsIGRvbnRVc2VSb290UGF0aD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbjtcclxuICAgIGlmIChjb29raWVEb21haW4gPT0gbnVsbCkge1xyXG4gICAgICAgIGNvb2tpZURvbWFpbiA9IGdldERlZmF1bHREb21haW4oKTtcclxuICAgIH1cclxuICAgIGxldCBleHBpcmVNczogbnVtYmVyO1xyXG4gICAgaWYgKGV4cGlyZXNfaW4gPT0gbnVsbCB8fCBleHBpcmVzX2luID09PSAnJyB8fCBpc05hTihleHBpcmVzX2luKSkge1xyXG4gICAgICAgIGV4cGlyZU1zID0gMTAwMCAqIGdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKTtcclxuICAgIH0gZWxzZSBpZiAoZXhwaXJlc19pbiA9PSAwKSB7XHJcbiAgICAgICAgLy8gMCBtZWFucyBTZXNzaW9uXHJcbiAgICAgICAgZXhwaXJlTXMgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBbnkgb3RoZXIgdmFsdWUgaXMgbnVtYmVyIG9mIHNlY29uZHMgKEEgbmVnYXRpdmUgdmFsdWUgd291bGQgbWVhbiBleHBpcmUgbm93ISlcclxuICAgICAgICBleHBpcmVNcyA9IGV4cGlyZXNfaW4gKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZXhkYXRlLnNldFRpbWUoZXhkYXRlLmdldFRpbWUoKSArIGV4cGlyZU1zKTtcclxuXHJcbiAgICB2YXIgY29va2llU3RyaW5nID1cclxuICAgICAgICBuYW1lICtcclxuICAgICAgICAnPScgK1xyXG4gICAgICAgIGVzY2FwZSh2YWx1ZSkgK1xyXG4gICAgICAgIChkb250VXNlUm9vdFBhdGggPyAnJyA6ICc7IHBhdGg9LycpICtcclxuICAgICAgICAoZXhwaXJlTXMgPT0gbnVsbCA/ICcnIDogJzsgZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpICtcclxuICAgICAgICAoY29va2llRG9tYWluICYmIGNvb2tpZURvbWFpbiAhPSAnJyAmJiBjb29raWVEb21haW4uaW5kZXhPZignLicpICE9IC0xID8gJzsgZG9tYWluPScgKyBjb29raWVEb21haW4gOiAnJyk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcblxyXG4gICAgLy8gU29tZSBicm93c2VycyBsaWtlIElFOCBkb24ndCBsaWtlIHNvbWUgZG9tYWlucyAoZS5nLiBkb21haW5zIG9mIHRoZSBmb3JtIHh4Lnl5KVxyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTg5NjM4L2ludGVybmV0LWV4cGxvcmVyLXh4LXl5LXdlYnNpdGUtaXNzdWVcclxuICAgIGlmICgoIWV4cGlyZU1zIHx8IGV4cGlyZU1zID4gMCkgJiYgIWdldChuYW1lKSkge1xyXG4gICAgICAgIGNvb2tpZVN0cmluZyA9XHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICAnPScgK1xyXG4gICAgICAgICAgICBlc2NhcGUodmFsdWUpICtcclxuICAgICAgICAgICAgKGRvbnRVc2VSb290UGF0aCA/ICcnIDogJzsgcGF0aD0vJykgK1xyXG4gICAgICAgICAgICAoZXhwaXJlTXMgPT0gbnVsbCA/ICcnIDogJzsgZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgKHBhZ2VEb21haW4gJiYgcGFnZURvbWFpbiAhPSAnJyAmJiBwYWdlRG9tYWluLmluZGV4T2YoJy4nKSAhPSAtMSA/ICc7IGRvbWFpbj0nICsgcGFnZURvbWFpbiA6ICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBwYWdlRG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW47XHJcbiAgICB2YXIgYmFzZURvbWFpbiA9IF9nZXRCYXNlRG9tYWluKCk7XHJcblxyXG4gICAgaWYgKGJhc2VEb21haW4ubGVuZ3RoID4gMCAmJiBwYWdlRG9tYWluLmxlbmd0aCA+PSBiYXNlRG9tYWluLmxlbmd0aCAmJiBwYWdlRG9tYWluLmxhc3RJbmRleE9mKGJhc2VEb21haW4pID09PSBwYWdlRG9tYWluLmxlbmd0aCAtIGJhc2VEb21haW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgc2V0KG5hbWUsICcnLCAtMSwgYmFzZURvbWFpbik7IC8vIHJlbW92ZSBhbHNvIGZyb20gdGhlIHN1YkRvbWFpbi5cclxuICAgICAgICBzZXQobmFtZSwgJycsIC0xLCBiYXNlRG9tYWluLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldChuYW1lLCAnJywgLTEsIGxvY2FsSW5mby5wYWdlRG9tYWluKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsIGxvY2FsSW5mby5wYWdlRG9tYWluLCB0cnVlKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsICcnKTtcclxuICAgIHNldChuYW1lLCAnJywgLTEsICcnLCB0cnVlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpIHtcclxuICAgIC8vIFNldCBleHBpcmF0aW9uIHRpbWUgdG8gMSB5ZWFyc1xyXG4gICAgcmV0dXJuIDYwICogNjAgKiAyNCAqIDM2NTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FuU2F2ZUNvb2tpZShkb2MgPSBkb2N1bWVudCkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwMDApOyAvLyAxIHNlY29uZCBleHBpcmF0aW9uLlxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZG9jLmNvb2tpZSA9ICdnaWczcGN0ZXN0PXRydWU7ZXhwaXJlcz0nICsgZFsndG9HTVRTdHJpbmcnXSgpO1xyXG4gICAgICAgIHJldHVybiBkb2MuY29va2llLmluZGV4T2YoJ2dpZzNwY3Rlc3QnKSAhPT0gLTE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaU9TIDEwIHdlYnZpZXcgdGhyb3dzIGluIHNvbWUgc2NlbmFyaW9zXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xyXG5pbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XHJcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgdmFyIGdldEFwaURvbWFpbjogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nO1xyXG5jb25zdCBnaWd5YURvbWFpbk5hbWVzcGFjZXMgPSBbJ3NvY2lhbGl6ZScsICdhY2NvdW50cycsICdmaWRtJywgJ2dtJywgJ2NvbW1lbnRzJywgJ2djcycsICdpZHMnLCAnZHMnLCAnZ3Njb3VudGVycyddO1xyXG5leHBvcnQgZnVuY3Rpb24gYXBpRG9tYWluRmFjdG9yeShhcGlEb21haW4gPSByZXNvbHZlQXBpRG9tYWluKCksIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKTogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nIHtcclxuICAgIGNvbnN0IHNob3VsZEFkZE5hbWVzcGFjZSA9IFVyaS5wYXJzZShhcGlEb21haW4pLmlzSW4oVXJpLnBhcnNlKGRlZmF1bHRBcGlEb21haW4pKTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWVzcGFjZT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgc2hvdWxkQWRkTmFtZXNwYWNlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWJEb21haW4gPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcclxuICAgICAgICAgICAgaWYgKGdpZ3lhRG9tYWluTmFtZXNwYWNlcy5pbmRleE9mKHN1YkRvbWFpbikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgdHJ5aW5nIHRvIHNlbmQgcmVxdWVzdCB0byBhbiBpbnZhbGlkIGRvbWFpbmApO1xyXG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gZ2lneWFEb21haW5OYW1lc3BhY2VzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7c3ViRG9tYWlufS4ke2FwaURvbWFpbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGlEb21haW47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFEb21haW4obmFtZXNwYWNlPzogc3RyaW5nLCBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pIHtcclxuICAgIGNvbnN0IGRvbWFpbiA9IGAke2RhdGFDZW50ZXJ9LiR7ZGVmYXVsdERvbWFpbn1gO1xyXG5cclxuICAgIGlmIChuYW1lc3BhY2UpIHJldHVybiBgJHtuYW1lc3BhY2V9LiR7ZG9tYWlufWA7XHJcbiAgICBlbHNlIHJldHVybiBkb21haW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VEb21haW4oXHJcbiAgICBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgY3VycmVudERvbWFpbiA9IGxvY2F0aW9uLmhvc3RuYW1lLFxyXG4gICAgZGVmYXVsdERvbWFpbnMgPSBbJ2dpZ3lhLmNvbScsICdnaWd5YS1hcGkuY24nLCBnaWd5YS5kZWZhdWx0QXBpRG9tYWluXSxcclxuKTogc3RyaW5nIHtcclxuICAgIC8vICM0OTc4NiAtIFN1cHBvcnQgd2VidmlldyB3aXRob3V0IGhvc3RuYW1lLlxyXG4gICAgaWYgKCFjdXJyZW50RG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYmFzZURvbWFpbnMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yaWdpblVSSSA9IFVyaS5wYXJzZShjdXJyZW50RG9tYWluKTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdERvbWFpbnMpIHtcclxuICAgICAgICBiYXNlRG9tYWlucyA9IGJhc2VEb21haW5zLmNvbmNhdChkZWZhdWx0RG9tYWlucyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHJhd0RvbWFpbiBvZiBiYXNlRG9tYWlucykge1xyXG4gICAgICAgIC8vIFRoaXMgZG9lcyBub3QgdGFrZSBjYXJlIG9mIHdpbGRjYXJkcyBpbiB0aGUgbWlkZGxlIG9mIHN0cmluZy5cclxuICAgICAgICBjb25zdCBiYXNlRG9tYWluID0gc3RyaW5nVXRpbHNVdGlscy5yZXBsYWNlQWxsKHJhd0RvbWFpbiwgJyonLCAnJyk7XHJcbiAgICAgICAgY29uc3QgYmFzZVVyaSA9IFVyaS5wYXJzZShiYXNlRG9tYWluKTtcclxuICAgICAgICBpZiAoYmFzZVVyaSAmJiBvcmlnaW5VUkkuaXNJbihiYXNlVXJpKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZVVyaS5pc0ZvclN1YkRvbWFpbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVVyaS5kb21haW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhlIHBhcmVudCdzIHdpbmRvdyBkb21haW4gKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KS5cclxuICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXBpRG9tYWluKFxyXG4gICAgY3VzdG9tQXBpRG9tYWluUHJlZml4ID0gZ2lneWEucGFydG5lclNldHRpbmdzICYmIGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5jdXN0b21BUElEb21haW5QcmVmaXgsXHJcbiAgICBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4sXHJcbiAgICBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlcixcclxuICAgIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluLFxyXG4pIHtcclxuICAgIGlmIChjdXN0b21BcGlEb21haW5QcmVmaXggJiYgYmFzZURvbWFpbiAmJiBiYXNlRG9tYWluICE9PSBkZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2N1c3RvbUFwaURvbWFpblByZWZpeH0uJHtiYXNlRG9tYWlufWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZXRHaWd5YURvbWFpbih1bmRlZmluZWQsIGRhdGFDZW50ZXIsIGRlZmF1bHRBcGlEb21haW4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsRnVuY3Rpb24obmFtZTogc3RyaW5nLCBhclBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgIHZhciBmbiA9IGV2YWwobmFtZSk7XHJcbiAgICB2YXIgYXJQYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIGFyUGFydHMuc3BsaWNlKGFyUGFydHMubGVuZ3RoIC0gMSwgMSk7XHJcbiAgICB2YXIgc2NvcGUgPSBldmFsKGFyUGFydHMuam9pbignLicpKTtcclxuICAgIGZuLmFwcGx5KHNjb3BlLCBhclBhcmFtcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZU9uUGFnZUxvYWQoZnVuYzogRnVuY3Rpb24sIGNvbXBsZXRlT25seT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgICAoIWRvY3VtZW50LnJlYWR5U3RhdGUgJiYgZG9jdW1lbnQuYm9keSkgfHxcclxuICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8XHJcbiAgICAgICAgKCFjb21wbGV0ZU9ubHkgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBkb2N1bWVudC5ib2R5KVxyXG4gICAgKSB7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZm5PbkxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMjAwMDApOyAvLyBmYWxsYmFjayAtIHNvbWV0aW1lcyByZWFkeXN0YXRlIHN0YXlzIHN0dWNrIG9uIGludGVyYWN0aXZlXHJcblxyXG4gICAgICAgIERPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGZuT25Mb2FkKTtcclxuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGZuT25Mb2FkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxpYXMocHVibGljTmFtZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBhck5hbWVTZWdtZW50cyA9IHB1YmxpY05hbWUuc3BsaXQoJy4nKTtcclxuICAgIGxldCBvQ3VycmVudFNlZ21lbnQgPSB3aW5kb3c7XHJcbiAgICBmb3IgKGxldCBpU2VnbWVudCA9IDA7IGlTZWdtZW50IDwgYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMTsgaVNlZ21lbnQrKykge1xyXG4gICAgICAgIGNvbnN0IHNTZWdtZW50ID0gYXJOYW1lU2VnbWVudHNbaVNlZ21lbnRdO1xyXG4gICAgICAgIGlmICghb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSkge1xyXG4gICAgICAgICAgICBvQ3VycmVudFNlZ21lbnRbc1NlZ21lbnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9DdXJyZW50U2VnbWVudCA9IG9DdXJyZW50U2VnbWVudFtzU2VnbWVudF07XHJcbiAgICB9XHJcbiAgICBvQ3VycmVudFNlZ21lbnRbYXJOYW1lU2VnbWVudHNbYXJOYW1lU2VnbWVudHMubGVuZ3RoIC0gMV1dID0gZm5jO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbjogKCkgPT4gdm9pZCwgZGVsYXlNaWxsaXNlY29uZHM6IG51bWJlcik6ICgpID0+IHZvaWQge1xyXG4gICAgbGV0IHRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgfSwgZGVsYXlNaWxsaXNlY29uZHMpIGFzIGFueTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNyY1RvSUZyYW1lSWZOZWVkZWQoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgc3JjOiBzdHJpbmcgPSBnZXRDZG5SZXNvdXJjZSgnLycpKSB7XHJcbiAgICBpZiAobG9jYWxJbmZvLmlzSU9TV2ViVmlldyB8fCAobG9jYWxJbmZvLmlzSU9TICYmIGxvY2FsSW5mby5pc1dlQ2hhdCkpIHtcclxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XHJcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5pbXBvcnQgKiBhcyBzY3JpcHRVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc2NyaXB0JztcclxuaW1wb3J0ICogYXMgY29va2llVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Nvb2tpZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0Fic3RyYWN0QWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGdldEl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IG9iamVjdCB0byBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCBKU09OVXRpbHMuc2VyaWFsaXplKG8pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBvYmplY3QgZnJvbSBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0T2JqZWN0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBPYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBKU09OVXRpbHMuZGVzZXJpYWxpemUodGhpcy5nZXRJdGVtKGtleSksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBwZXJzaXN0ZW50IHN0b3JhZ2UuIFJldHVybnMgZmFsc2Ugd2hlbiBkYXRhIGlzIG5vdCBwZXJzaXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1BlcnNpc3RlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHByb3RlY3RlZCBpc0xvYWRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNSZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgd2hlbiB0aGVyZSBpcyBpbml0aWFsaXphdGlvbiB0aW1lIG9uIHRoZSBsb2NhbCBzdG9yYWdlIGFkYXB0ZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3YWl0Rm9yU2VydmljZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrKSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5hYnN0cmFjdCBjbGFzcyBTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZTogYW55O1xyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIExvY2FsU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnTG9jYWxTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlc3Npb25TdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ1Nlc3Npb25TdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRmlyZWZveFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5pc0ZGICYmIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0ZpcmVmb3hTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9IGNhdGNoIChleCkge31cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XTtcclxuICAgIH1cclxufVxyXG5kZWNsYXJlIGNsYXNzIFN3ZlN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IGFueSk7XHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgY2xlYXIoa2V5OiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbmNsYXNzIEZsYXNoQXN5bmNTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gY3VycmVudCBzY2VuYXJpbyB3aGVyZSB1c2luZyBGbGFzaCBTdG9yYWdlIGlzIGhlbHBmdWwgb3V0c2lkZSBvZiBJRS5cclxuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzRmxhc2ggJiYgKGxvY2FsSW5mby5pc0lFIHx8IGxvY2FsSW5mby5pc0VkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzd2ZTdG9yZTogU3dmU3RvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8gTG9hZCBTV0Ygc3RvcmUgbGlicmFyeS5cclxuICAgICAgICB0aGlzLmxvYWRTd2ZTdG9yZShpc1N1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdGbGFzaEFzeW5jU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyc3QsIGxvYWQgdGhlIEphdmFTY3JpcHQgc3dmc3RvcmUgU0RLLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFN3ZlN0b3JlKGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTG9hZCBTd2ZTdG9yZSBpZiBuZWNlc3NhcnkuXHJcbiAgICAgICAgaWYgKHdpbmRvd1snU3dmU3RvcmUnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVTd2ZTdG9yZSgoKSA9PiB0aGlzLmxvYWRTd2ZTdG9yZShjYWxsYmFjaykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JpcHRVdGlscy5sb2FkKFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG5zLmdpZ3lhLmNvbS9ncy9qcy9zd2ZzdG9yZS5taW4uanMnLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvciBoYW5kbGVyLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb2FkIEdpZ3lhIFN3ZlN0b3JlLicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzIGhhbmRsZXIuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVTd2ZTdG9yZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsIC8vIExvYWQgb25seSBvbmNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaWl0YWxpemUgdGhlIFN3ZlN0b3JlIGNsYXNzLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZVN3ZlN0b3JlKGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zd2ZTdG9yZSA9IG5ldyBTd2ZTdG9yZSh7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZTogJ2dpZ1NTTycsXHJcbiAgICAgICAgICAgIHN3Zl91cmw6ICdodHRwczovL2NkbnMuZ2lneWEuY29tL2dzL3N3Zi9zd2ZzdG9yZS5zd2YnLFxyXG4gICAgICAgICAgICBvbnJlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBHaWd5YSBTd2ZTdG9yZS4nKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3dmU3RvcmUuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3dmU3RvcmUuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zd2ZTdG9yZS5jbGVhcihrZXkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb29raWVVdGlscy5jYW5TYXZlQ29va2llKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnQ29va2llU3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29va2llVXRpbHMuc2V0KGtleSwgdmFsdWUsIGV4cGlyZXNJbiwgZG9tYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvb2tpZVV0aWxzLnJlbW92ZShrZXkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBtZW1vcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1lbW9yeSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ01lbW9yeVN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5W2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVtb3J5W2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgcGVyc2lzdGVudCBzdG9yYWdlLiBSZXR1cm5zIGZhbHNlIHdoZW4gZGF0YSBpcyBub3QgcGVyc2lzdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgYWRhcHRlcnM6IEFycmF5PGFueT4gPSBbXHJcbiAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLFxyXG4gICAgU2Vzc2lvblN0b3JhZ2VBZGFwdGVyLFxyXG4gICAgRmlyZWZveFN0b3JhZ2VBZGFwdGVyLFxyXG4gICAgRmxhc2hBc3luY1N0b3JhZ2VBZGFwdGVyLFxyXG4gICAgQ29va2llU3RvcmFnZUFkYXB0ZXIsXHJcbiAgICBNZW1vcnlTdG9yYWdlQWRhcHRlcixcclxuXTtcclxuZXhwb3J0IGNvbnN0IGluc3RhbmNlczogeyBba2V5OiBzdHJpbmddOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIgfSA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcjogeyBuYW1lPzogc3RyaW5nOyBnZXROYW1lOiAoKSA9PiBzdHJpbmcgfSAmIChuZXcgKCkgPT4gQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSkge1xyXG4gICAgY29uc3QgYWRhcHRlck5hbWUgPSBhZGFwdGVyLmdldE5hbWUoKSB8fCBhZGFwdGVyLm5hbWU7XHJcbiAgICBpZiAoIWluc3RhbmNlc1thZGFwdGVyTmFtZV0pIHtcclxuICAgICAgICBpbnN0YW5jZXNbYWRhcHRlck5hbWVdID0gbmV3IGFkYXB0ZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZXNbYWRhcHRlck5hbWVdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZSgpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZShjYWxsYmFjazogKHN0b3JhZ2U6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikgPT4gdm9pZCk6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrPzogKHN0b3JhZ2U6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikgPT4gdm9pZCk6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XHJcbiAgICAvLyBTZWxlY3QgY29tcGF0aWJsZSBhZGFwdGVyLlxyXG4gICAgbGV0IHN0b3JhZ2U6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcjtcclxuICAgIGZvciAoY29uc3QgYWRhcHRlciBvZiBhZGFwdGVycykge1xyXG4gICAgICAgIGlmIChhZGFwdGVyLmlzQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2VsZWN0IGFkYXB0ZXIgaWYgaXQncyBhc3luYyBhbmQgYSBjYWxsYmFjayB3YXNuJ3QgcHJvdmlkZWQuXHJcbiAgICAgICAgICAgIGlmIChhZGFwdGVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyICYmICFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrIHRvIG1lbW9yeS1iYXNlZCBub24tcGVyc2lzdGVudCBzdG9yYWdlLlxyXG4gICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IGluaXRpYWxpemVBZGFwdGVyKE1lbW9yeVN0b3JhZ2VBZGFwdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmlnZ2VyIGNhbGxiYWNrIHdoZW4gYWRhcHRlciBmaW5pc2hlcyBsb2FkaW5nIChvciBpbnN0YW50bHksIGlmIG5vdCByZXF1aXJlZCB0byB3YWl0KS5cclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChzdG9yYWdlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS53YWl0Rm9yU2VydmljZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soc3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0b3JhZ2U7XHJcbn1cclxuY29uc3QgYWRhcHRlciA9IHdhaXRGb3JTZXJ2aWNlKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBhZGFwdGVyLmdldEl0ZW0oa2V5KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5zZXRJdGVtKGtleSwgdmFsdWUsIGV4cGlyZXNJbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHJldHVybiBhZGFwdGVyLnJlbW92ZUl0ZW0oa2V5KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcclxuICAgIHJldHVybiBhZGFwdGVyLnNldE9iamVjdChrZXksIG8pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IE9iamVjdCB7XHJcbiAgICByZXR1cm4gYWRhcHRlci5nZXRPYmplY3Qoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG59XHJcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgYXJyYXlVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvYXJyYXknO1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zJztcclxuaW1wb3J0ICogYXMgRE9NVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0RPTSc7XHJcbmltcG9ydCB7IGdldENkblJlc291cmNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL2Nkbic7XHJcblxyXG5pbnRlcmZhY2UgSVNjcmlwdFBlbmRpbmcge1xyXG4gICAgbG9hZGVkOiBib29sZWFuO1xyXG4gICAgb25Mb2FkOiBGdW5jdGlvbltdO1xyXG4gICAgb25FcnJvcjogRnVuY3Rpb25bXTtcclxufVxyXG52YXIgcGVuZGluZzogeyBbc3JjOiBzdHJpbmddOiBJU2NyaXB0UGVuZGluZyB9ID0ge307XHJcbmZ1bmN0aW9uIGFkZFNka1ZlcnNpb24odXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHNjcmlwdFVybCA9IFVyaS5wYXJzZSh1cmwpO1xyXG4gICAgc2NyaXB0VXJsLmFkZFRvU2VhcmNoKHsgdmVyc2lvbjogZ2lneWEuYnVpbGQudmVyc2lvbiB9KTtcclxuICAgIHJldHVybiBzY3JpcHRVcmwudG9TdHJpbmcoKTtcclxufVxyXG5mdW5jdGlvbiBmb3JtYXRTcmNVcmwoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gcmVtb3ZlIGNkbiBkb21haW4gbnVtYmVyXHJcbiAgICByZXR1cm4gc3JjLnJlcGxhY2UoL15odHRwKHM/KTpcXC9cXC9jZG4ocz8pWzAtOV0qLmdpZ3lhLmNvbVxcLy8sICdodHRwJDE6Ly9jZG4kMi5naWd5YS5jb20vJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKHNyYzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICB2YXIgcGVuZGluZ1NyYyA9IGZvcm1hdFNyY1VybChzcmMpO1xyXG5cclxuICAgIHJldHVybiBCb29sZWFuKHBlbmRpbmdbcGVuZGluZ1NyY10gJiYgcGVuZGluZ1twZW5kaW5nU3JjXS5sb2FkZWQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkKFxyXG4gICAgc3JjOiBzdHJpbmcsXHJcbiAgICBmbk9uRXJyb3I/OiAoKSA9PiB2b2lkLFxyXG4gICAgZm5PbkxvYWQ/OiAoKSA9PiB2b2lkLFxyXG4gICAgbG9hZE9uY2U/OiBib29sZWFuLFxyXG4gICAgcmVtb3ZlQWZ0ZXI6IG51bWJlciB8IGJvb2xlYW4gPSA1MDAwLFxyXG4gICAgdHJlYXRUb2dldGhlcj86IHN0cmluZ1tdLFxyXG4pOiB2b2lkIHtcclxuICAgIHZhciBvU2NyaXB0OiBJU2NyaXB0UGVuZGluZztcclxuXHJcbiAgICBpZiAoc3JjLmluZGV4T2YoJy8vJykgPT09IDApIHtcclxuICAgICAgICBzcmMgPSBsb2NhbEluZm8ucHJvdG9jb2wgKyAnOicgKyBzcmM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvYWRPbmNlKSB7XHJcbiAgICAgICAgdmFyIHBlbmRpbmdTcmMgPSBmb3JtYXRTcmNVcmwoc3JjKTtcclxuXHJcbiAgICAgICAgaWYgKHBlbmRpbmdbcGVuZGluZ1NyY10pIHtcclxuICAgICAgICAgICAgaWYgKHBlbmRpbmdbcGVuZGluZ1NyY10ubG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHNjcmlwdCB3YXMgYWxyZWFkeSBsb2FkZWQ6YCwgeyBzcmMgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm5PbkxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbk9uTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1twZW5kaW5nU3JjXS5vbkxvYWQucHVzaChmbk9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nW3BlbmRpbmdTcmNdLm9uRXJyb3IucHVzaChmbk9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9TY3JpcHQgPSBwZW5kaW5nW3BlbmRpbmdTcmNdID0geyBsb2FkZWQ6IGZhbHNlLCBvbkxvYWQ6IFtmbk9uTG9hZF0sIG9uRXJyb3I6IFtmbk9uRXJyb3JdIH07XHJcblxyXG4gICAgICAgIGlmICh0cmVhdFRvZ2V0aGVyICYmIHRyZWF0VG9nZXRoZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcnJheVV0aWxzLmZvckVhY2godHJlYXRUb2dldGhlciwgdXJsID0+IHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdbdXJsXSA9IG9TY3JpcHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbXVsdGlwbGUgbG9hZHNcclxuICAgICAgICBvU2NyaXB0ID0geyBsb2FkZWQ6IGZhbHNlLCBvbkxvYWQ6IFtmbk9uTG9hZF0sIG9uRXJyb3I6IFtmbk9uRXJyb3JdIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNjcmlwdExvYWRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgc2NyaXB0LmNoYXJzZXQgPSAnVVRGLTgnO1xyXG5cclxuICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBmbk9uU2NyaXB0TG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob1NjcmlwdC5vbkxvYWQgJiYgb1NjcmlwdC5vbkxvYWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvU2NyaXB0Lm9uTG9hZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9TY3JpcHQub25Mb2FkW2ldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvU2NyaXB0Lm9uTG9hZFtpXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9TY3JpcHQubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9TY3JpcHQub25FcnJvciA9IG9TY3JpcHQub25Mb2FkID0gbnVsbDsgLy8gcmVtb3ZlIG1lbW9yeSBsZWFrXHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCByZW1vdmVBZnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmbk9uU2NyaXB0TG9hZDtcclxuICAgICAgICBzY3JpcHRbJ29ucmVhZHlzdGF0ZWNoYW5nZSddID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBmbk9uU2NyaXB0TG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvU2NyaXB0Lm9uRXJyb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb1NjcmlwdC5vbkVycm9yW2ldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1NjcmlwdC5vbkVycm9yW2ldKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlIHBlbmRpbmdbc3JjXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJyk7XHJcbiAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZuU2V0U2NyaXB0U3JjID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3ZWJTZGtSZXNvdXJjZXNEb21haW4gPSBuZXcgUmVnRXhwKGBeaHR0cHM/OlxcL1xcL2NkbnM/Lioke2dpZ3lhLmRlZmF1bHRBcGlEb21haW59YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdFNyYyA9IHdlYlNka1Jlc291cmNlc0RvbWFpbi50ZXN0KHNyYykgPyBhZGRTZGtWZXJzaW9uKHNyYykgOiBzcmM7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBzY3JpcHRTcmM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobG9jYWxJbmZvLmlvc1ZlcnNpb24gPj0gNikge1xyXG4gICAgICAgICAgICAvLyBpT1MgNiBicmVha3Mgc2V0VGltZW91dCB3aGVuIGFuaW1hdGlvbiBpcyBhY3RpdmUgKHN3aXRjaGluZyB0YWJzIGJhY2sgZnJvbSBhIGxvZ2luIHNlcXVlbmNlKVxyXG4gICAgICAgICAgICBmblNldFNjcmlwdFNyYygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZm5TZXRTY3JpcHRTcmMsIDEpOyAvLyBEb2luZyB0aGlzIGFzeW5jIGdpdmVzIGJldHRlciBwZXJmb3JtYW5jZSBpbiBvbGRlciBicm93c2Vyc1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2FsSW5mby5pc0lFKSB7XHJcbiAgICAgICAgZnVuY3Rpb25zVXRpbHMuaW52b2tlT25QYWdlTG9hZChzY3JpcHRMb2FkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzY3JpcHRMb2FkZXIoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZW51bSBSZXNvdXJjZVR5cGVzIHtcclxuICAgIHNjcmlwdCxcclxuICAgIGltYWdlLFxyXG4gICAgaWZyYW1lLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyUmVzb3VyY2UodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCwgcmVzb3VyY2VUeXBlID0gUmVzb3VyY2VUeXBlcy5pbWFnZSwgcmVtb3ZlQWZ0ZXI6IG51bWJlciB8IGJvb2xlYW4gPSA1MDAwKSB7XHJcbiAgICBzd2l0Y2ggKHJlc291cmNlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgUmVzb3VyY2VUeXBlcy5zY3JpcHQ6XHJcbiAgICAgICAgICAgIGxvYWQodXJsLCBjYWxsYmFjaywgY2FsbGJhY2ssIGZhbHNlLCByZW1vdmVBZnRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUmVzb3VyY2VUeXBlcy5pbWFnZTpcclxuICAgICAgICAgICAgbG9hZEltYWdlKHVybCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuaWZyYW1lOlxyXG4gICAgICAgICAgICBsb2FkSWZyYW1lKHVybCwgY2FsbGJhY2ssIHJlbW92ZUFmdGVyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCByZXNvdXJjZSB0eXBlJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB2YXIgbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGZuT25Mb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmbk9uTG9hZDtcclxuXHJcbiAgICBpbWcuc3JjID0gdXJsO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRJZnJhbWUodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCwgcmVtb3ZlQWZ0ZXI6IG51bWJlciB8IGJvb2xlYW4gPSA1MDAwKSB7XHJcbiAgICB2YXIgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XHJcbiAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xyXG4gICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBpZnIuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcclxuXHJcbiAgICBpZiAocmVtb3ZlQWZ0ZXIgPT09IHRydWUpIHtcclxuICAgICAgICByZW1vdmVBZnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZuT25Mb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBlbDtcclxuICAgICAgICBpZiAoZSAmJiBlLnNyY0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWwgPSBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFlbC5sb2FkZWQgJiYgZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBlbC5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBpZiAocmVtb3ZlQWZ0ZXIgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVBZnRlciBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGlmciwgJ2xvYWQnLCBmbk9uTG9hZCk7XHJcbiAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGlmciwgJ2Vycm9yJywgZm5PbkxvYWQpO1xyXG4gICAgaWZyLm9ubG9hZCA9IGUgPT4ge1xyXG4gICAgICAgIGZuT25Mb2FkKGUpO1xyXG4gICAgfTtcclxuICAgIGlmci5vbmVycm9yID0gZm5PbkxvYWQ7XHJcblxyXG4gICAgaWZyLnNyYyA9IHVybDtcclxuICAgIERPTVV0aWxzLmFwcGVuZFRvQm9keShpZnIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNlcnZpY2Uoc2VydmljZU5hbWU6IHN0cmluZywgZm5PbkVycm9yPzogKCkgPT4gdm9pZCwgZm5PbkxvYWQ/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICB2YXIgdXJsID0gZ2V0Q2RuUmVzb3VyY2UoKSArICcvanMvZ2lneWEuc2VydmljZXMuJyArIHNlcnZpY2VOYW1lICsgJy5qcyc7XHJcbiAgICBsb2FkKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgbG9hZGluZyBnaWd5YSBzZXJ2aWNlICcgKyBzZXJ2aWNlTmFtZSArICcgZnJvbSB1cmw6ICcgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZuT25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZuT25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbk9uTG9hZCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdHJpbShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyooXFxTKiguKlxcUyk/KVxccyokLywgJyQxJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzOiBzdHJpbmcsIC4uLnJlc3Q6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHNbaSArIDFdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcyA9IHMuc3BsaXQoJ3snICsgaSArICd9Jykuam9pbihhcmd1bWVudHNbaSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW5kc1dpdGgoczogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHMuaW5kZXhPZihzdWZmaXgsIHMubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbChzdHI6IHN0cmluZywgZmluZDogc3RyaW5nLCByZXBsYWNlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFmaW5kKSByZXR1cm4gc3RyO1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbWFTZXBhcmF0ZWRWYWx1ZXMoc3RyMTogc3RyaW5nID0gJycsIHN0cjI6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFyciA9IHN0cjEuY29uY2F0KCcsJywgc3RyMikuc3BsaXQoJywnKTtcclxuICAgIHJldHVybiBnaWd5YS51dGlscy5hcnJheS5nZXRVbmlxdWVWYWx1ZXMoYXJyKS5maWx0ZXIoeCA9PiB4KS5qb2luKCcsJyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIHZhciBzY3JPZlggPSAwLFxyXG4gICAgICAgIHNjck9mWSA9IDA7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5wYWdlWU9mZnNldCA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHNjck9mWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBzY3JPZlggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkgJiYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkpIHtcclxuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcclxuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHNjck9mWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbGVmdDogc2NyT2ZYLCB0b3A6IHNjck9mWSB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsU2l6ZSgpOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xyXG4gICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICB2YXIgaCA9IGRlLmNsaWVudEhlaWdodDtcclxuICAgIGlmIChoID09IDApIGggPSBkYi5jbGllbnRIZWlnaHQ7XHJcbiAgICB2YXIgdyA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgaWYgKHcgPT0gMCkgdyA9IGRiLmNsaWVudFdpZHRoO1xyXG4gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpOiBudW1iZXIge1xyXG4gICAgdmFyIG9yaWVudGF0aW9uID0gcGFyc2VJbnQoKHdpbmRvd1snb3JpZW50YXRpb24nXSBhcyBzdHJpbmcpIHx8ICcwJyk7XHJcbiAgICBpZiAob3JpZW50YXRpb24gPCAwKSBvcmllbnRhdGlvbiArPSAzNjA7XHJcblxyXG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lclNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBoO1xyXG4gICAgdmFyIHc7XHJcblxyXG4gICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGggPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKGggPT0gMCkgaCA9IGRiLmNsaWVudEhlaWdodDtcclxuICAgICAgICB3ID0gZGUuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKHcgPT0gMCkgdyA9IGRiLmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWRkbGVDZW50ZXIoKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbCgpO1xyXG4gICAgdmFyIHNpemUgPSBnZXRJbm5lclNpemUoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBzY3JvbGwudG9wICsgTWF0aC5mbG9vcihzaXplLmggLyAyKSxcclxuICAgICAgICBsZWZ0OiBzY3JvbGwubGVmdCArIE1hdGguZmxvb3Ioc2l6ZS53IC8gMiksXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlY3RIb3Jpem9udGFsbHlWaXNpYmxlKHJlY3Q6IHsgdG9wOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyOyBsZWZ0OiBudW1iZXI7IHJpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbCgpO1xyXG4gICAgdmFyIHNpemUgPSBnZXRJbm5lclNpemUoKTtcclxuICAgIHJldHVybiByZWN0LmxlZnQgPj0gc2Nyb2xsLmxlZnQgJiYgcmVjdC5yaWdodCA8PSBzY3JvbGwubGVmdCArIHNpemUudztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWN0RnVsbHlWaXNpYmxlKHJlY3Q6IHsgdG9wOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyOyBsZWZ0OiBudW1iZXI7IHJpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbCgpO1xyXG4gICAgdmFyIHNpemUgPSBnZXRJbm5lclNpemUoKTtcclxuICAgIHJldHVybiByZWN0LnRvcCA+PSBzY3JvbGwudG9wICYmIHJlY3QuYm90dG9tIDw9IHNjcm9sbC50b3AgKyBzaXplLmggJiYgcmVjdC5sZWZ0ID49IHNjcm9sbC5sZWZ0ICYmIHJlY3QucmlnaHQgPD0gc2Nyb2xsLmxlZnQgKyBzaXplLnc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5sZXQgc2VsZWN0ZWRDZG5Ib3N0c0luZGV4ID0gMDtcclxuZXhwb3J0IGNvbnN0IENETl9IT1NUUyA9IHtcclxuICAgIGh0dHA6IFsnY2RuLmdpZ3lhLmNvbScsICdjZG4xLmdpZ3lhLmNvbScsICdjZG4yLmdpZ3lhLmNvbScsICdjZG4zLmdpZ3lhLmNvbSddLFxyXG4gICAgaHR0cHM6IFsnY2Rucy5naWd5YS5jb20nLCAnY2RuczEuZ2lneWEuY29tJywgJ2NkbnMyLmdpZ3lhLmNvbScsICdjZG5zMy5naWd5YS5jb20nXSxcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENkblJlc291cmNlKHBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gZ2lneWEudGhpc1NjcmlwdCBtYXkgbm90IGV4aXN0IGlmIGxvYWRlZCBmb3Igc3NvT3JpZy5cclxuICAgIGxldCBiYXNlRG9tYWluID0gZ2lneWEudGhpc1NjcmlwdD8uYmFzZURvbWFpbiA/PyAnJztcclxuICAgIGNvbnN0IHByb3RvY29sID0gZ2lneWEudGhpc1NjcmlwdD8ucHJvdG9jb2wgPz8gJ2h0dHBzJztcclxuXHJcbiAgICAvLyBJZiBubyBiYXNlIGRvbWFpbiBvciBpZiBiYXNlIGRvbWFpbiBlbmRzIHdpdGggLmdpZ3lhLmNvbSwgdXNlIEdpZ3lhIENETi5cclxuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIGJhc2UgZG9tYWluLlxyXG4gICAgaWYgKCFiYXNlRG9tYWluIHx8IC9jZG5zP1xcLmdpZ3lhXFwuY29tJC8udGVzdChiYXNlRG9tYWluKSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2NoZW1hUmVwb3NpdG9yeSA9IENETl9IT1NUU1twcm90b2NvbF07XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU2NoZW1hUmVwb3NpdG9yeS5sZW5ndGggPD0gc2VsZWN0ZWRDZG5Ib3N0c0luZGV4KSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhc2VEb21haW4gPSBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnlbc2VsZWN0ZWRDZG5Ib3N0c0luZGV4KytdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgcGF0aCBzdGFydHMgd2l0aCBcIi9cIi5cclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgaWYgKHBhdGguaW5kZXhPZignLycpICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvdG9jb2wgKyAnOi8vJyArIGJhc2VEb21haW4gKyAocGF0aCB8fCAnJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEltZ0NkblJlc291cmNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pLycpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=