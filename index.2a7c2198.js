// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVZrN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "14689a032a7c2198";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lMT80":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOpenModal", ()=>eventOpenModal);
var _uiElementsJs = require("./constants/ui-elements.js");
var _changeNameJs = require("./user/change-name.js");
var _sendMessageJs = require("./user/send-message.js");
var _authorizationJs = require("./authorization/authorization.js");
var _utilitsJs = require("./authorization/utilits.js");
var _modalJs = require("./modal.js");
var _validationJs = require("./validation.js");
var _dataMessagesJs = require("./users-messages/data-messages.js");
const eventOpenModal = (0, _uiElementsJs.modalElements).btnSettings.addEventListener("click", (0, _modalJs.openModal));
const eventCloseModal = (0, _uiElementsJs.modalElements).modalOverlay.addEventListener("click", (0, _modalJs.closeModal));
const eventValidateEmptyMessage = (0, _uiElementsJs.chatElements).messageInput.addEventListener("input", (0, _validationJs.validateEmptyMessage));
const eventSendMessageToUser = (0, _uiElementsJs.chatElements).formForMessage.addEventListener("submit", (0, _sendMessageJs.sendMessage));
const eventGoToEnterCode = (0, _uiElementsJs.authorization).btnEnterCode.addEventListener("click", (0, _utilitsJs.switchToEnterCode));
const eventGoToEnterBack = (0, _uiElementsJs.authorization).btn\u0421omeBack.addEventListener("click", (0, _utilitsJs.switchToAuthorizarion));
const eventAuthorization = (0, _uiElementsJs.authorization).formAuthorization.addEventListener("submit", (0, _authorizationJs.sendCodeToUser));
const eventLogInToChat = (0, _uiElementsJs.authorization).formLogIn.addEventListener("submit", (0, _authorizationJs.logInToChat));
const eventChangeName = (0, _uiElementsJs.modalElements).formChangeName.addEventListener("submit", (0, _changeNameJs.changeName));

},{"./constants/ui-elements.js":"bu1WM","./user/change-name.js":"hzufp","./user/send-message.js":"7wAAX","./authorization/authorization.js":"3KaEz","./authorization/utilits.js":"13YuS","./modal.js":"guy4I","./validation.js":"68QtQ","./users-messages/data-messages.js":"2Ocsw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bu1WM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalElements", ()=>modalElements);
parcelHelpers.export(exports, "chatElements", ()=>chatElements);
parcelHelpers.export(exports, "authorization", ()=>authorization);
const modalElements = {
    btnSettings: document.querySelector(".top-actions-communication__btn-settings"),
    modalOverlay: document.querySelector(".modal-overlay"),
    setingsModal: document.querySelector(".settings-modal"),
    btnCloseModal: document.querySelector(".top-modal-settings__close"),
    inputChangeName: document.querySelector("#input-change-name"),
    formChangeName: document.querySelector("#form-change-name"),
    textSuccsess: document.querySelector(".top-modal-settings__success")
};
const chatElements = {
    formForMessage: document.querySelector(".footer-actions-communication__form"),
    messageInput: document.querySelector(".footer-actions-communication__input"),
    areaMessanges: document.querySelector(".area-messages__list"),
    template: document.querySelector("#message"),
    messageFrom: document.querySelector(".area-messages__send-from"),
    btnSendMsg: document.querySelector(".footer-actions-communication__btn-send-message")
};
const authorization = {
    modalAuthorization: document.querySelector("#authorization"),
    modalLogIn: document.querySelector("#log-in"),
    formAuthorization: document.querySelector("#authorization-form"),
    formLogIn: document.querySelector("#form-log-in"),
    inputEmail: document.querySelector("#input-email"),
    btnEnterCode: document.querySelector("#btn-inter-code"),
    btn\u0421omeBack: document.querySelector("#btn-come-back"),
    inputLogIn: document.querySelector("#input-code"),
    authorizationWrapper: document.querySelector("#authorization-wrapper"),
    error: document.querySelector(".authorization-error"),
    errorToken: document.querySelector("#error-token"),
    success: document.querySelector(".authorization-success")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hzufp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeName", ()=>changeName);
var _serverDataJs = require("../constants/server-data.js");
var _uiElementsJs = require("../constants/ui-elements.js");
var _utilsFunctionsJs = require("../utils-functions.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
async function changeName(e) {
    e.preventDefault();
    const userName = (0, _uiElementsJs.modalElements).inputChangeName.value;
    const token = (0, _jsCookieDefault.default).get("userToken");
    const response = await fetch((0, _serverDataJs.DATA_SERVER).URL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: userName
        })
    });
    if (response.ok) {
        (0, _uiElementsJs.modalElements).textSuccsess.classList.add("show");
        (0, _utilsFunctionsJs.resetInput)((0, _uiElementsJs.modalElements).inputChangeName);
    }
}

},{"../constants/server-data.js":"fvwtp","../constants/ui-elements.js":"bu1WM","../utils-functions.js":"jvcxR","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvwtp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MESSAGES", ()=>MESSAGES);
parcelHelpers.export(exports, "DATA_SERVER", ()=>DATA_SERVER);
const MESSAGES = [
    {
        TEXT: "\u041F\u0440\u0438\u0432\u0435\u0442!",
        NAME: "\u042F:",
        TIME: "18:55"
    },
    {
        TEXT: "\u0414\u0430\u0440\u043E\u0432\u0430",
        NAME: "\u041C\u0435\u043D\u0442\u043E\u0440:",
        TIME: "18:56"
    },
    {
        TEXT: "\u042F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0434\u0435\u043B\u0430\u043B \u0437\u0430\u0434\u0430\u043D\u0438\u0435, \u0431\u044B\u043B\u043E \u043E\u0447\u0435\u043D\u044C \u0437\u0430\u043C\u0443\u0434\u0440\u0435\u043D\u043D\u043E \u0438 \u0442\u044F\u0436\u0435\u043B\u043E",
        NAME: "\u042F:",
        TIME: "18:57"
    },
    {
        TEXT: "\u0423\u0447\u0438\u0441\u044C \u0449\u0435\u043D\u043E\u043A, \u0434\u0430\u043B\u044C\u0448\u0435 \u0431\u0443\u0434\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0445\u0443\u0436\u0435))",
        NAME: "\u041C\u0435\u043D\u0442\u043E\u0440:",
        TIME: "18:58"
    }
];
const DATA_SERVER = {
    URL: "https://edu.strada.one/api/user",
    USER_INFORM: "https://edu.strada.one/api/user/me",
    MESSAGES: "https://edu.strada.one/api/messages/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvcxR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetInput", ()=>resetInput);
parcelHelpers.export(exports, "getTemplateContent", ()=>getTemplateContent);
parcelHelpers.export(exports, "scrollToEnd", ()=>scrollToEnd);
parcelHelpers.export(exports, "buildElement", ()=>buildElement);
var _uiElementsJs = require("./constants/ui-elements.js");
function resetInput(input) {
    const emptyString = "";
    input.value = emptyString;
}
function getTemplateContent() {
    const li = (0, _uiElementsJs.chatElements).template.content.cloneNode(true);
    const messageSendFrom = li.querySelector(".area-messages__send-from");
    const user = li.querySelector(".user-message__user");
    const message = li.querySelector(".user-message__message");
    const sendTime = li.querySelector(".area-messages__send-time");
    return {
        li,
        messageSendFrom,
        user,
        message,
        sendTime
    };
}
function scrollToEnd() {
    const lastMessage = (0, _uiElementsJs.chatElements).areaMessanges.lastElementChild;
    const needPXToEnd = 15;
    lastMessage.scrollIntoView({
        block: "end",
        behavior: "instant"
    });
    (0, _uiElementsJs.chatElements).areaMessanges.scrollBy(0, needPXToEnd);
}
function buildElement(tagName, className, text) {
    const tag = document.createElement(tagName);
    tag.classList.add(className);
    tag.textContent = text;
    return tag;
}

},{"./constants/ui-elements.js":"bu1WM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(name, value, attributes) {
            if (typeof document === "undefined") return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += "; " + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
        }
        function get(name) {
            if (typeof document === "undefined" || arguments.length && !name) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split("=");
                var value = parts.slice(1).join("=");
                try {
                    var found = decodeURIComponent(parts[0]);
                    jar[found] = converter.read(value, found);
                    if (name === found) break;
                } catch (e) {}
            }
            return name ? jar[name] : jar;
        }
        return Object.create({
            set,
            get,
            remove: function(name, attributes) {
                set(name, "", assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: "/"
    });
    /* eslint-enable no-var */ return api;
});

},{}],"7wAAX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendMessage", ()=>sendMessage);
var _validation = require("../validation");
var _utilsFunctions = require("../utils-functions");
var _uiElements = require("../constants/ui-elements");
function sendMessage(e) {
    e.preventDefault();
    const messageValue = (0, _uiElements.chatElements).messageInput.value;
    if (!messageValue) return;
    const templateContent = (0, _utilsFunctions.getTemplateContent)();
    const li = templateContent.li;
    templateContent.message.textContent = messageValue;
    templateContent.messageSendFrom.classList.add("user-message");
    (0, _uiElements.chatElements).areaMessanges.append(li);
    (0, _utilsFunctions.resetInput)((0, _uiElements.chatElements).messageInput);
    (0, _utilsFunctions.scrollToEnd)();
}

},{"../validation":"68QtQ","../utils-functions":"jvcxR","../constants/ui-elements":"bu1WM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68QtQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showError", ()=>showError);
parcelHelpers.export(exports, "showSuccess", ()=>showSuccess);
parcelHelpers.export(exports, "validateEmptyMessage", ()=>validateEmptyMessage);
var _utilsFunctions = require("./utils-functions");
var _uiElements = require("./constants/ui-elements");
function showError(errorElement, successElement, inputWhichReset) {
    errorElement.classList.add("show");
    successElement.classList.remove("show");
    (0, _utilsFunctions.resetInput)(inputWhichReset);
}
function showSuccess(successElement, errorElement) {
    successElement.classList.add("show");
    errorElement.classList.remove("show");
}
function validateEmptyMessage() {
    if ((0, _uiElements.chatElements).messageInput.value.trim() === "") {
        (0, _uiElements.chatElements).messageInput.classList.add("border");
        (0, _uiElements.chatElements).btnSendMsg.classList.add("hide");
    } else {
        (0, _uiElements.chatElements).messageInput.classList.remove("border");
        (0, _uiElements.chatElements).btnSendMsg.classList.remove("hide");
    }
}

},{"./utils-functions":"jvcxR","./constants/ui-elements":"bu1WM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KaEz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendCodeToUser", ()=>sendCodeToUser);
parcelHelpers.export(exports, "logInToChat", ()=>logInToChat);
var _uiElementsJs = require("../constants/ui-elements.js");
var _serverDataJs = require("../constants/server-data.js");
var _validationJs = require("../validation.js");
var _utilsFunctionsJs = require("../utils-functions.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
async function sendCodeToUser(e) {
    e.preventDefault();
    const userEmail = (0, _uiElementsJs.authorization).inputEmail.value;
    const response = await fetch((0, _serverDataJs.DATA_SERVER).URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            email: userEmail
        })
    });
    if (response.ok) {
        (0, _validationJs.showSuccess)((0, _uiElementsJs.authorization).success, (0, _uiElementsJs.authorization).error);
        (0, _jsCookieDefault.default).set("user-email", userEmail);
    } else (0, _validationJs.showError)((0, _uiElementsJs.authorization).error, (0, _uiElementsJs.authorization).success, (0, _uiElementsJs.authorization).inputEmail);
}
async function logInToChat(e) {
    e.preventDefault();
    const token = (0, _uiElementsJs.authorization).inputLogIn.value;
    const response = await fetch((0, _serverDataJs.DATA_SERVER).USER_INFORM, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${token}`
        }
    });
    if (response.ok) {
        (0, _jsCookieDefault.default).set("userToken", token);
        (0, _uiElementsJs.authorization).modalLogIn.classList.add("hidden");
    } else {
        (0, _validationJs.showError)((0, _uiElementsJs.authorization).errorToken);
        (0, _utilsFunctionsJs.resetInput)((0, _uiElementsJs.authorization).inputLogIn);
    }
}

},{"../constants/ui-elements.js":"bu1WM","../constants/server-data.js":"fvwtp","../validation.js":"68QtQ","../utils-functions.js":"jvcxR","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13YuS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetAuthorization", ()=>resetAuthorization);
parcelHelpers.export(exports, "switchToAuthorizarion", ()=>switchToAuthorizarion);
parcelHelpers.export(exports, "switchToEnterCode", ()=>switchToEnterCode);
var _uiElements = require("../constants/ui-elements");
var _utilsFunctions = require("../utils-functions");
function resetAuthorization() {
    (0, _uiElements.authorization).error.classList.remove("show");
    (0, _uiElements.authorization).success.classList.remove("show");
    (0, _utilsFunctions.resetInput)((0, _uiElements.authorization).inputEmail);
}
function switchToEnterCode() {
    (0, _uiElements.authorization).modalAuthorization.classList.add("hidden");
    (0, _uiElements.authorization).modalLogIn.classList.remove("hidden");
    resetAuthorization();
}
function switchToAuthorizarion() {
    (0, _uiElements.authorization).modalAuthorization.classList.remove("hidden");
    (0, _uiElements.authorization).modalLogIn.classList.add("hidden");
    (0, _uiElements.authorization).errorToken.classList.remove("show");
    (0, _utilsFunctions.resetInput)((0, _uiElements.authorization).inputLogIn);
}

},{"../constants/ui-elements":"bu1WM","../utils-functions":"jvcxR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guy4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openModal", ()=>openModal);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
var _uiElementsJs = require("./constants/ui-elements.js");
const { modalOverlay, setingsModal, btnCloseModal } = (0, _uiElementsJs.modalElements);
function openModal(e) {
    const path = e.target.getAttribute("data-path");
    const currentModal = document.querySelector(`[data-target='${path}']`);
    currentModal.classList.add("modal__visible");
    modalOverlay.classList.add("modal-overlay__visible");
}
function closeModal(e) {
    if (e.target === modalOverlay || e.target === btnCloseModal) {
        modalOverlay.classList.remove("modal-overlay__visible");
        setingsModal.classList.remove("modal__visible");
        (0, _uiElementsJs.modalElements).textSuccsess.classList.remove("show");
    }
}

},{"./constants/ui-elements.js":"bu1WM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Ocsw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUsersMessages", ()=>getUsersMessages);
var _serverDataJs = require("../constants/server-data.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
async function getUsersMessages() {
    const token = (0, _jsCookieDefault.default).get("userToken");
    const response = await fetch((0, _serverDataJs.DATA_SERVER).MESSAGES, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${token}`
        }
    });
    if (response.ok) return response.json();
    else alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"); // Доделать нормальную ошибку
}

},{"../constants/server-data.js":"fvwtp","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cVZrN","lMT80"], "lMT80", "parcelRequire94c2")

//# sourceMappingURL=index.2a7c2198.js.map
