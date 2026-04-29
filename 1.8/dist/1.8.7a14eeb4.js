// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"agWFI":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 53351;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "487da4b07a14eeb4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1QViH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cropperjs = require("cropperjs");
var _cropperjsDefault = parcelHelpers.interopDefault(_cropperjs);
// Получаем элементы с типизацией
const imageInput = document.getElementById('imageInput');
const imageElement = document.getElementById('image');
const editorContainer = document.querySelector('.editor-container');
const cropBtn = document.getElementById('cropBtn');
const downloadBtn = document.getElementById('downloadBtn');
const resultContainer = document.querySelector('.result-container');
const croppedImageElement = document.getElementById('croppedImage');
let cropper = null;
// 1. Загрузка картинки
imageInput.addEventListener('change', (e)=>{
    console.log("Change event fired!"); // <--- СРАБОТАЛО ЛИ СОБЫТИЕ?
    const target = e.target;
    const file = target.files?.[0];
    if (!file) {
        console.log("No file selected");
        return;
    }
    console.log("File size:", file.size);
    if (file.size > 307200) {
        alert("\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439! \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: 300 \u041A\u0431.");
        return;
    }
    const reader = new FileReader();
    reader.onload = ()=>{
        console.log("Reader onload triggered"); // <--- ЗАГРУЗИЛСЯ ЛИ ФАЙЛ?
        if (typeof reader.result === 'string') {
            imageElement.src = reader.result;
            console.log("Image src set");
            // Показываем редактор
            if (editorContainer) {
                editorContainer.style.display = 'block';
                console.log("Editor container shown");
            } else console.error("Editor container not found!");
            resultContainer.style.display = 'none';
            if (cropper) cropper.destroy();
            // Инициализируем Cropper.js
            try {
                cropper = new (0, _cropperjsDefault.default)(imageElement, {
                    aspectRatio: NaN,
                    viewMode: 1,
                    autoCropArea: 0.8
                });
                console.log("Cropper initialized"); // <--- СОЗДАЛСЯ ЛИ КРОППЕР?
            } catch (err) {
                console.error("Error initializing Cropper:", err);
            }
        }
    };
    reader.readAsDataURL(file);
});
// 2. Обрезка картинки
// 2. Обрезка картинки
console.log("\u041F\u043E\u0438\u0441\u043A \u043A\u043D\u043E\u043F\u043A\u0438 cropBtn...", cropBtn); // Проверка, нашли ли кнопку
cropBtn.addEventListener('click', ()=>{
    console.log("\u041A\u043B\u0438\u043A \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 '\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C'!"); // <--- СРАБОТАЛ ЛИ КЛИК?
    if (!cropper) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430: Cropper \u043D\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D!");
        alert("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435!");
        return;
    }
    console.log("Cropper \u043D\u0430\u0439\u0434\u0435\u043D, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u043E\u0431\u0440\u0435\u0437\u043A\u0443...");
    try {
        // Получаем канвас
        const canvas = cropper.getCroppedCanvas();
        console.log("Canvas \u043F\u043E\u043B\u0443\u0447\u0435\u043D:", canvas);
        // Конвертируем в Data URL
        const croppedDataUrl = canvas.toDataURL('image/jpeg');
        console.log("Data URL \u0441\u043E\u0437\u0434\u0430\u043D");
        // Отображаем результат
        croppedImageElement.src = croppedDataUrl;
        // Показываем контейнер результата
        resultContainer.style.display = 'block';
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D");
        // Активируем кнопку скачивания
        downloadBtn.disabled = false;
        console.log("\u041A\u043D\u043E\u043F\u043A\u0430 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0435\u0437\u043A\u0435:", error);
        alert("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0435\u0437\u043A\u0435. \u0421\u043C. \u043A\u043E\u043D\u0441\u043E\u043B\u044C.");
    }
});
// 3. Скачивание картинки
downloadBtn.addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = croppedImageElement.src;
    link.download = 'cropped-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

},{"cropperjs":"ic6tD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ic6tD":[function(require,module,exports,__globalThis) {
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    var WINDOW = IS_BROWSER ? window : {};
    var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
    var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
    var NAMESPACE = 'cropper';
    // Actions
    var ACTION_ALL = 'all';
    var ACTION_CROP = 'crop';
    var ACTION_MOVE = 'move';
    var ACTION_ZOOM = 'zoom';
    var ACTION_EAST = 'e';
    var ACTION_WEST = 'w';
    var ACTION_SOUTH = 's';
    var ACTION_NORTH = 'n';
    var ACTION_NORTH_EAST = 'ne';
    var ACTION_NORTH_WEST = 'nw';
    var ACTION_SOUTH_EAST = 'se';
    var ACTION_SOUTH_WEST = 'sw';
    // Classes
    var CLASS_CROP = "".concat(NAMESPACE, "-crop");
    var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
    var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
    var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
    var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
    var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
    var CLASS_MOVE = "".concat(NAMESPACE, "-move");
    // Data keys
    var DATA_ACTION = "".concat(NAMESPACE, "Action");
    var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
    // Drag modes
    var DRAG_MODE_CROP = 'crop';
    var DRAG_MODE_MOVE = 'move';
    var DRAG_MODE_NONE = 'none';
    // Events
    var EVENT_CROP = 'crop';
    var EVENT_CROP_END = 'cropend';
    var EVENT_CROP_MOVE = 'cropmove';
    var EVENT_CROP_START = 'cropstart';
    var EVENT_DBLCLICK = 'dblclick';
    var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
    var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
    var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
    var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
    var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
    var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
    var EVENT_READY = 'ready';
    var EVENT_RESIZE = 'resize';
    var EVENT_WHEEL = 'wheel';
    var EVENT_ZOOM = 'zoom';
    // Mime types
    var MIME_TYPE_JPEG = 'image/jpeg';
    // RegExps
    var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
    var REGEXP_DATA_URL = /^data:/;
    var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
    var REGEXP_TAG_NAME = /^img|canvas$/i;
    // Misc
    // Inspired by the default width and height of a canvas element.
    var MIN_CONTAINER_WIDTH = 200;
    var MIN_CONTAINER_HEIGHT = 100;
    var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: '',
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: MIN_CONTAINER_WIDTH,
        minContainerHeight: MIN_CONTAINER_HEIGHT,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    };
    var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
    /**
   * Check if the given value is not a number.
   */ var isNaN = Number.isNaN || WINDOW.isNaN;
    /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */ function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */ var isPositiveNumber = function isPositiveNumber(value) {
        return value > 0 && value < Infinity;
    };
    /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */ function isUndefined(value) {
        return typeof value === 'undefined';
    }
    /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */ function isObject(value) {
        return _typeof(value) === 'object' && value !== null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */ function isPlainObject(value) {
        if (!isObject(value)) return false;
        try {
            var _constructor = value.constructor;
            var prototype = _constructor.prototype;
            return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
        } catch (error) {
            return false;
        }
    }
    /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */ function isFunction(value) {
        return typeof value === 'function';
    }
    var slice = Array.prototype.slice;
    /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */ function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
    }
    /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */ function forEach(data, callback) {
        if (data && isFunction(callback)) {
            if (Array.isArray(data) || isNumber(data.length)) toArray(data).forEach(function(value, key) {
                callback.call(data, value, key, data);
            });
            else if (isObject(data)) Object.keys(data).forEach(function(key) {
                callback.call(data, data[key], key, data);
            });
        }
        return data;
    }
    /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */ var assign = Object.assign || function assign(target) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (isObject(target) && args.length > 0) args.forEach(function(arg) {
            if (isObject(arg)) Object.keys(arg).forEach(function(key) {
                target[key] = arg[key];
            });
        });
        return target;
    };
    var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
    /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */ function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
    }
    var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
    /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */ function setStyle(element, styles) {
        var style = element.style;
        forEach(styles, function(value, property) {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) value = "".concat(value, "px");
            style[property] = value;
        });
    }
    /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */ function hasClass(element, value) {
        return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
    }
    /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */ function addClass(element, value) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                addClass(elem, value);
            });
            return;
        }
        if (element.classList) {
            element.classList.add(value);
            return;
        }
        var className = element.className.trim();
        if (!className) element.className = value;
        else if (className.indexOf(value) < 0) element.className = "".concat(className, " ").concat(value);
    }
    /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */ function removeClass(element, value) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                removeClass(elem, value);
            });
            return;
        }
        if (element.classList) {
            element.classList.remove(value);
            return;
        }
        if (element.className.indexOf(value) >= 0) element.className = element.className.replace(value, '');
    }
    /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */ function toggleClass(element, value, added) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                toggleClass(elem, value, added);
            });
            return;
        }
        // IE10-11 doesn't support the second parameter of `classList.toggle`
        if (added) addClass(element, value);
        else removeClass(element, value);
    }
    var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
    /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */ function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
    }
    /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */ function getData(element, name) {
        if (isObject(element[name])) return element[name];
        if (element.dataset) return element.dataset[name];
        return element.getAttribute("data-".concat(toParamCase(name)));
    }
    /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */ function setData(element, name, data) {
        if (isObject(data)) element[name] = data;
        else if (element.dataset) element.dataset[name] = data;
        else element.setAttribute("data-".concat(toParamCase(name)), data);
    }
    /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */ function removeData(element, name) {
        if (isObject(element[name])) try {
            delete element[name];
        } catch (error) {
            element[name] = undefined;
        }
        else if (element.dataset) // #128 Safari not allows to delete dataset property
        try {
            delete element.dataset[name];
        } catch (error) {
            element.dataset[name] = undefined;
        }
        else element.removeAttribute("data-".concat(toParamCase(name)));
    }
    var REGEXP_SPACES = /\s\s*/;
    var onceSupported = function() {
        var supported = false;
        if (IS_BROWSER) {
            var once = false;
            var listener = function listener() {};
            var options = Object.defineProperty({}, 'once', {
                get: function get() {
                    supported = true;
                    return once;
                },
                /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */ set: function set(value) {
                    once = value;
                }
            });
            WINDOW.addEventListener('test', listener, options);
            WINDOW.removeEventListener('test', listener, options);
        }
        return supported;
    }();
    /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */ function removeListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (!onceSupported) {
                var listeners = element.listeners;
                if (listeners && listeners[event] && listeners[event][listener]) {
                    handler = listeners[event][listener];
                    delete listeners[event][listener];
                    if (Object.keys(listeners[event]).length === 0) delete listeners[event];
                    if (Object.keys(listeners).length === 0) delete element.listeners;
                }
            }
            element.removeEventListener(event, handler, options);
        });
    }
    /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */ function addListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (options.once && !onceSupported) {
                var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
                _handler = function handler() {
                    delete listeners[event][listener];
                    element.removeEventListener(event, _handler, options);
                    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                    listener.apply(element, args);
                };
                if (!listeners[event]) listeners[event] = {};
                if (listeners[event][listener]) element.removeEventListener(event, listeners[event][listener], options);
                listeners[event][listener] = _handler;
                element.listeners = listeners;
            }
            element.addEventListener(event, _handler, options);
        });
    }
    /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */ function dispatchEvent(element, type, data) {
        var event;
        // Event and CustomEvent on IE9-11 are global objects, not constructors
        if (isFunction(Event) && isFunction(CustomEvent)) event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
        });
        else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, true, true, data);
        }
        return element.dispatchEvent(event);
    }
    /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */ function getOffset(element) {
        var box = element.getBoundingClientRect();
        return {
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
    }
    var location = WINDOW.location;
    var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */ function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
    }
    /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */ function addTimestamp(url) {
        var timestamp = "timestamp=".concat(new Date().getTime());
        return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
    }
    /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */ function getTransforms(_ref) {
        var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
        var values = [];
        if (isNumber(translateX) && translateX !== 0) values.push("translateX(".concat(translateX, "px)"));
        if (isNumber(translateY) && translateY !== 0) values.push("translateY(".concat(translateY, "px)"));
        // Rotate should come first before scale to match orientation transform
        if (isNumber(rotate) && rotate !== 0) values.push("rotate(".concat(rotate, "deg)"));
        if (isNumber(scaleX) && scaleX !== 1) values.push("scaleX(".concat(scaleX, ")"));
        if (isNumber(scaleY) && scaleY !== 1) values.push("scaleY(".concat(scaleY, ")"));
        var transform = values.length ? values.join(' ') : 'none';
        return {
            WebkitTransform: transform,
            msTransform: transform,
            transform: transform
        };
    }
    /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */ function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);
        var maxRatio = 0;
        forEach(pointers, function(pointer, pointerId) {
            delete pointers2[pointerId];
            forEach(pointers2, function(pointer2) {
                var x1 = Math.abs(pointer.startX - pointer2.startX);
                var y1 = Math.abs(pointer.startY - pointer2.startY);
                var x2 = Math.abs(pointer.endX - pointer2.endX);
                var y2 = Math.abs(pointer.endY - pointer2.endY);
                var z1 = Math.sqrt(x1 * x1 + y1 * y1);
                var z2 = Math.sqrt(x2 * x2 + y2 * y2);
                var ratio = (z2 - z1) / z1;
                if (Math.abs(ratio) > Math.abs(maxRatio)) maxRatio = ratio;
            });
        });
        return maxRatio;
    }
    /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */ function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX, pageY = _ref2.pageY;
        var end = {
            endX: pageX,
            endY: pageY
        };
        return endOnly ? end : _objectSpread2({
            startX: pageX,
            startY: pageY
        }, end);
    }
    /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */ function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach(pointers, function(_ref3) {
            var startX = _ref3.startX, startY = _ref3.startY;
            pageX += startX;
            pageY += startY;
            count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
            pageX: pageX,
            pageY: pageY
        };
    }
    /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */ function getAdjustedSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
            var adjustedWidth = height * aspectRatio;
            if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) height = width / aspectRatio;
            else width = height * aspectRatio;
        } else if (isValidWidth) height = width / aspectRatio;
        else if (isValidHeight) width = height * aspectRatio;
        return {
            width: width,
            height: height
        };
    }
    /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */ function getRotatedSizes(_ref5) {
        var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
        degree = Math.abs(degree) % 180;
        if (degree === 90) return {
            width: height,
            height: width
        };
        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
            width: newHeight,
            height: newWidth
        } : {
            width: newWidth,
            height: newHeight
        };
    }
    /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */ function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var maxSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: maxWidth,
            height: maxHeight
        });
        var minSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: minWidth,
            height: minHeight
        }, 'cover');
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
        // Note: should always use image's natural sizes for drawing as
        // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
        var destMaxSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: maxWidth,
            height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: minWidth,
            height: minHeight
        }, 'cover');
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params = [
            -destWidth / 2,
            -destHeight / 2,
            destWidth,
            destHeight
        ];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [
            image
        ].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
    }
    var fromCharCode = String.fromCharCode;
    /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */ function getStringFromCharCode(dataView, start, length) {
        var str = '';
        length += start;
        for(var i = start; i < length; i += 1)str += fromCharCode(dataView.getUint8(i));
        return str;
    }
    var REGEXP_DATA_URL_HEAD = /^data:.*,/;
    /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */ function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach(uint8, function(value, i) {
            uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
    }
    /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */ function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        // Chunk Typed Array for better performance (#435)
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while(uint8.length > 0){
            // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
            // eslint-disable-next-line prefer-spread
            chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
            uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
    }
    /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */ function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        // Ignores range error when the image does not have correct Exif information
        try {
            var littleEndian;
            var app1Start;
            var ifdStart;
            // Only handle JPEG image (start by 0xFFD8)
            if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
                var length = dataView.byteLength;
                var offset = 2;
                while(offset + 1 < length){
                    if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                        app1Start = offset;
                        break;
                    }
                    offset += 1;
                }
            }
            if (app1Start) {
                var exifIDCode = app1Start + 4;
                var tiffOffset = app1Start + 10;
                if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
                    var endianness = dataView.getUint16(tiffOffset);
                    littleEndian = endianness === 0x4949;
                    if (littleEndian || endianness === 0x4D4D /* bigEndian */ ) {
                        if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                            if (firstIFDOffset >= 0x00000008) ifdStart = tiffOffset + firstIFDOffset;
                        }
                    }
                }
            }
            if (ifdStart) {
                var _length = dataView.getUint16(ifdStart, littleEndian);
                var _offset;
                var i;
                for(i = 0; i < _length; i += 1){
                    _offset = ifdStart + i * 12 + 2;
                    if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */ ) {
                        // 8 is the offset of the current tag's value
                        _offset += 8;
                        // Get the original orientation value
                        orientation = dataView.getUint16(_offset, littleEndian);
                        // Override the orientation with its default value
                        dataView.setUint16(_offset, 1, littleEndian);
                        break;
                    }
                }
            }
        } catch (error) {
            orientation = 1;
        }
        return orientation;
    }
    /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */ function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch(orientation){
            // Flip horizontal
            case 2:
                scaleX = -1;
                break;
            // Rotate left 180°
            case 3:
                rotate = -180;
                break;
            // Flip vertical
            case 4:
                scaleY = -1;
                break;
            // Flip vertical and rotate right 90°
            case 5:
                rotate = 90;
                scaleY = -1;
                break;
            // Rotate right 90°
            case 6:
                rotate = 90;
                break;
            // Flip horizontal and rotate right 90°
            case 7:
                rotate = 90;
                scaleX = -1;
                break;
            // Rotate left 90°
            case 8:
                rotate = -90;
                break;
        }
        return {
            rotate: rotate,
            scaleX: scaleX,
            scaleY: scaleY
        };
    }
    var render = {
        render: function render() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();
            if (this.cropped) this.renderCropBox();
        },
        initContainer: function initContainer() {
            var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
            var minWidth = Number(options.minContainerWidth);
            var minHeight = Number(options.minContainerHeight);
            addClass(cropper, CLASS_HIDDEN);
            removeClass(element, CLASS_HIDDEN);
            var containerData = {
                width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
                height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
            };
            this.containerData = containerData;
            setStyle(cropper, {
                width: containerData.width,
                height: containerData.height
            });
            addClass(element, CLASS_HIDDEN);
            removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
            var containerData = this.containerData, imageData = this.imageData;
            var viewMode = this.options.viewMode;
            var rotated = Math.abs(imageData.rotate) % 180 === 90;
            var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
            var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
            var aspectRatio = naturalWidth / naturalHeight;
            var canvasWidth = containerData.width;
            var canvasHeight = containerData.height;
            if (containerData.height * aspectRatio > containerData.width) {
                if (viewMode === 3) canvasWidth = containerData.height * aspectRatio;
                else canvasHeight = containerData.width / aspectRatio;
            } else if (viewMode === 3) canvasHeight = containerData.width / aspectRatio;
            else canvasWidth = containerData.height * aspectRatio;
            var canvasData = {
                aspectRatio: aspectRatio,
                naturalWidth: naturalWidth,
                naturalHeight: naturalHeight,
                width: canvasWidth,
                height: canvasHeight
            };
            this.canvasData = canvasData;
            this.limited = viewMode === 1 || viewMode === 2;
            this.limitCanvas(true, true);
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            canvasData.left = (containerData.width - canvasData.width) / 2;
            canvasData.top = (containerData.height - canvasData.height) / 2;
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            this.initialCanvasData = assign({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var viewMode = options.viewMode;
            var aspectRatio = canvasData.aspectRatio;
            var cropped = this.cropped && cropBoxData;
            if (sizeLimited) {
                var minCanvasWidth = Number(options.minCanvasWidth) || 0;
                var minCanvasHeight = Number(options.minCanvasHeight) || 0;
                if (viewMode > 1) {
                    minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
                    minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
                    if (viewMode === 3) {
                        if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio;
                        else minCanvasHeight = minCanvasWidth / aspectRatio;
                    }
                } else if (viewMode > 0) {
                    if (minCanvasWidth) minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
                    else if (minCanvasHeight) minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
                    else if (cropped) {
                        minCanvasWidth = cropBoxData.width;
                        minCanvasHeight = cropBoxData.height;
                        if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio;
                        else minCanvasHeight = minCanvasWidth / aspectRatio;
                    }
                }
                var _getAdjustedSizes = getAdjustedSizes({
                    aspectRatio: aspectRatio,
                    width: minCanvasWidth,
                    height: minCanvasHeight
                });
                minCanvasWidth = _getAdjustedSizes.width;
                minCanvasHeight = _getAdjustedSizes.height;
                canvasData.minWidth = minCanvasWidth;
                canvasData.minHeight = minCanvasHeight;
                canvasData.maxWidth = Infinity;
                canvasData.maxHeight = Infinity;
            }
            if (positionLimited) {
                if (viewMode > (cropped ? 0 : 1)) {
                    var newCanvasLeft = containerData.width - canvasData.width;
                    var newCanvasTop = containerData.height - canvasData.height;
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                    if (cropped && this.limited) {
                        canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                        canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                        canvasData.maxLeft = cropBoxData.left;
                        canvasData.maxTop = cropBoxData.top;
                        if (viewMode === 2) {
                            if (canvasData.width >= containerData.width) {
                                canvasData.minLeft = Math.min(0, newCanvasLeft);
                                canvasData.maxLeft = Math.max(0, newCanvasLeft);
                            }
                            if (canvasData.height >= containerData.height) {
                                canvasData.minTop = Math.min(0, newCanvasTop);
                                canvasData.maxTop = Math.max(0, newCanvasTop);
                            }
                        }
                    }
                } else {
                    canvasData.minLeft = -canvasData.width;
                    canvasData.minTop = -canvasData.height;
                    canvasData.maxLeft = containerData.width;
                    canvasData.maxTop = containerData.height;
                }
            }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            if (transformed) {
                var _getRotatedSizes = getRotatedSizes({
                    width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
                    height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
                    degree: imageData.rotate || 0
                }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
                var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
                var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
                canvasData.left -= (width - canvasData.width) / 2;
                canvasData.top -= (height - canvasData.height) / 2;
                canvasData.width = width;
                canvasData.height = height;
                canvasData.aspectRatio = naturalWidth / naturalHeight;
                canvasData.naturalWidth = naturalWidth;
                canvasData.naturalHeight = naturalHeight;
                this.limitCanvas(true, false);
            }
            if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) canvasData.left = canvasData.oldLeft;
            if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) canvasData.top = canvasData.oldTop;
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            this.limitCanvas(false, true);
            canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
            canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            setStyle(this.canvas, assign({
                width: canvasData.width,
                height: canvasData.height
            }, getTransforms({
                translateX: canvasData.left,
                translateY: canvasData.top
            })));
            this.renderImage(changed);
            if (this.cropped && this.limited) this.limitCropBox(true, true);
        },
        renderImage: function renderImage(changed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
            var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
            assign(imageData, {
                width: width,
                height: height,
                left: (canvasData.width - width) / 2,
                top: (canvasData.height - height) / 2
            });
            setStyle(this.image, assign({
                width: imageData.width,
                height: imageData.height
            }, getTransforms(assign({
                translateX: imageData.left,
                translateY: imageData.top
            }, imageData))));
            if (changed) this.output();
        },
        initCropBox: function initCropBox() {
            var options = this.options, canvasData = this.canvasData;
            var aspectRatio = options.aspectRatio || options.initialAspectRatio;
            var autoCropArea = Number(options.autoCropArea) || 0.8;
            var cropBoxData = {
                width: canvasData.width,
                height: canvasData.height
            };
            if (aspectRatio) {
                if (canvasData.height * aspectRatio > canvasData.width) cropBoxData.height = cropBoxData.width / aspectRatio;
                else cropBoxData.width = cropBoxData.height * aspectRatio;
            }
            this.cropBoxData = cropBoxData;
            this.limitCropBox(true, true);
            // Initialize auto crop area
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            // The width/height of auto crop area must large than "minWidth/Height"
            cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
            cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
            cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
            cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            this.initialCropBoxData = assign({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
            var aspectRatio = options.aspectRatio;
            if (sizeLimited) {
                var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
                var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
                var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
                var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
                // The min/maxCropBoxWidth/Height must be less than container's width/height
                minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
                minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
                if (aspectRatio) {
                    if (minCropBoxWidth && minCropBoxHeight) {
                        if (minCropBoxHeight * aspectRatio > minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio;
                        else minCropBoxWidth = minCropBoxHeight * aspectRatio;
                    } else if (minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio;
                    else if (minCropBoxHeight) minCropBoxWidth = minCropBoxHeight * aspectRatio;
                    if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                    else maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                }
                // The minWidth/Height must be less than maxWidth/Height
                cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
                cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
                cropBoxData.maxWidth = maxCropBoxWidth;
                cropBoxData.maxHeight = maxCropBoxHeight;
            }
            if (positionLimited) {
                if (limited) {
                    cropBoxData.minLeft = Math.max(0, canvasData.left);
                    cropBoxData.minTop = Math.max(0, canvasData.top);
                    cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
                    cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
                } else {
                    cropBoxData.minLeft = 0;
                    cropBoxData.minTop = 0;
                    cropBoxData.maxLeft = containerData.width - cropBoxData.width;
                    cropBoxData.maxTop = containerData.height - cropBoxData.height;
                }
            }
        },
        renderCropBox: function renderCropBox() {
            var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
            if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) cropBoxData.left = cropBoxData.oldLeft;
            if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) cropBoxData.top = cropBoxData.oldTop;
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            this.limitCropBox(false, true);
            cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
            cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            if (options.movable && options.cropBoxMovable) // Turn to move the canvas when the crop box is equal to the container
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
            setStyle(this.cropBox, assign({
                width: cropBoxData.width,
                height: cropBoxData.height
            }, getTransforms({
                translateX: cropBoxData.left,
                translateY: cropBoxData.top
            })));
            if (this.cropped && this.limited) this.limitCanvas(true, true);
            if (!this.disabled) this.output();
        },
        output: function output() {
            this.preview();
            dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
    };
    var preview = {
        initPreview: function initPreview() {
            var element = this.element, crossOrigin = this.crossOrigin;
            var preview = this.options.preview;
            var url = crossOrigin ? this.crossOriginUrl : this.url;
            var alt = element.alt || 'The image to preview';
            var image = document.createElement('img');
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = url;
            image.alt = alt;
            this.viewBox.appendChild(image);
            this.viewBoxImage = image;
            if (!preview) return;
            var previews = preview;
            if (typeof preview === 'string') previews = element.ownerDocument.querySelectorAll(preview);
            else if (preview.querySelector) previews = [
                preview
            ];
            this.previews = previews;
            forEach(previews, function(el) {
                var img = document.createElement('img');
                // Save the original size for recover
                setData(el, DATA_PREVIEW, {
                    width: el.offsetWidth,
                    height: el.offsetHeight,
                    html: el.innerHTML
                });
                if (crossOrigin) img.crossOrigin = crossOrigin;
                img.src = url;
                img.alt = alt;
                /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */ img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
                el.innerHTML = '';
                el.appendChild(img);
            });
        },
        resetPreview: function resetPreview() {
            forEach(this.previews, function(element) {
                var data = getData(element, DATA_PREVIEW);
                setStyle(element, {
                    width: data.width,
                    height: data.height
                });
                element.innerHTML = data.html;
                removeData(element, DATA_PREVIEW);
            });
        },
        preview: function preview() {
            var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
            var width = imageData.width, height = imageData.height;
            var left = cropBoxData.left - canvasData.left - imageData.left;
            var top = cropBoxData.top - canvasData.top - imageData.top;
            if (!this.cropped || this.disabled) return;
            setStyle(this.viewBoxImage, assign({
                width: width,
                height: height
            }, getTransforms(assign({
                translateX: -left,
                translateY: -top
            }, imageData))));
            forEach(this.previews, function(element) {
                var data = getData(element, DATA_PREVIEW);
                var originalWidth = data.width;
                var originalHeight = data.height;
                var newWidth = originalWidth;
                var newHeight = originalHeight;
                var ratio = 1;
                if (cropBoxWidth) {
                    ratio = originalWidth / cropBoxWidth;
                    newHeight = cropBoxHeight * ratio;
                }
                if (cropBoxHeight && newHeight > originalHeight) {
                    ratio = originalHeight / cropBoxHeight;
                    newWidth = cropBoxWidth * ratio;
                    newHeight = originalHeight;
                }
                setStyle(element, {
                    width: newWidth,
                    height: newHeight
                });
                setStyle(element.getElementsByTagName('img')[0], assign({
                    width: width * ratio,
                    height: height * ratio
                }, getTransforms(assign({
                    translateX: -left * ratio,
                    translateY: -top * ratio
                }, imageData))));
            });
        }
    };
    var events = {
        bind: function bind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) addListener(element, EVENT_CROP_START, options.cropstart);
            if (isFunction(options.cropmove)) addListener(element, EVENT_CROP_MOVE, options.cropmove);
            if (isFunction(options.cropend)) addListener(element, EVENT_CROP_END, options.cropend);
            if (isFunction(options.crop)) addListener(element, EVENT_CROP, options.crop);
            if (isFunction(options.zoom)) addListener(element, EVENT_ZOOM, options.zoom);
            addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
            if (options.zoomable && options.zoomOnWheel) addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                passive: false,
                capture: true
            });
            if (options.toggleDragModeOnDblclick) addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
            if (options.responsive) addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
        },
        unbind: function unbind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) removeListener(element, EVENT_CROP_START, options.cropstart);
            if (isFunction(options.cropmove)) removeListener(element, EVENT_CROP_MOVE, options.cropmove);
            if (isFunction(options.cropend)) removeListener(element, EVENT_CROP_END, options.cropend);
            if (isFunction(options.crop)) removeListener(element, EVENT_CROP, options.crop);
            if (isFunction(options.zoom)) removeListener(element, EVENT_ZOOM, options.zoom);
            removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
            if (options.zoomable && options.zoomOnWheel) removeListener(cropper, EVENT_WHEEL, this.onWheel, {
                passive: false,
                capture: true
            });
            if (options.toggleDragModeOnDblclick) removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
            removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
            removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
            if (options.responsive) removeListener(window, EVENT_RESIZE, this.onResize);
        }
    };
    var handlers = {
        resize: function resize() {
            if (this.disabled) return;
            var options = this.options, container = this.container, containerData = this.containerData;
            var ratioX = container.offsetWidth / containerData.width;
            var ratioY = container.offsetHeight / containerData.height;
            var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
            // Resize when width changed or height changed
            if (ratio !== 1) {
                var canvasData;
                var cropBoxData;
                if (options.restore) {
                    canvasData = this.getCanvasData();
                    cropBoxData = this.getCropBoxData();
                }
                this.render();
                if (options.restore) {
                    this.setCanvasData(forEach(canvasData, function(n, i) {
                        canvasData[i] = n * ratio;
                    }));
                    this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                        cropBoxData[i] = n * ratio;
                    }));
                }
            }
        },
        dblclick: function dblclick() {
            if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) return;
            this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
            var _this = this;
            var ratio = Number(this.options.wheelZoomRatio) || 0.1;
            var delta = 1;
            if (this.disabled) return;
            event.preventDefault();
            // Limit wheel speed to prevent zoom too fast (#21)
            if (this.wheeling) return;
            this.wheeling = true;
            setTimeout(function() {
                _this.wheeling = false;
            }, 50);
            if (event.deltaY) delta = event.deltaY > 0 ? 1 : -1;
            else if (event.wheelDelta) delta = -event.wheelDelta / 120;
            else if (event.detail) delta = event.detail > 0 ? 1 : -1;
            this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
            var buttons = event.buttons, button = event.button;
            if (this.disabled || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && // No primary button (Usually the left button)
            (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) return;
            var options = this.options, pointers = this.pointers;
            var action;
            if (event.changedTouches) // Handle touch event
            forEach(event.changedTouches, function(touch) {
                pointers[touch.identifier] = getPointer(touch);
            });
            else // Handle mouse event and pointer event
            pointers[event.pointerId || 0] = getPointer(event);
            if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) action = ACTION_ZOOM;
            else action = getData(event.target, DATA_ACTION);
            if (!REGEXP_ACTIONS.test(action)) return;
            if (dispatchEvent(this.element, EVENT_CROP_START, {
                originalEvent: event,
                action: action
            }) === false) return;
            // This line is required for preventing page zooming in iOS browsers
            event.preventDefault();
            this.action = action;
            this.cropping = false;
            if (action === ACTION_CROP) {
                this.cropping = true;
                addClass(this.dragBox, CLASS_MODAL);
            }
        },
        cropMove: function cropMove(event) {
            var action = this.action;
            if (this.disabled || !action) return;
            var pointers = this.pointers;
            event.preventDefault();
            if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
                originalEvent: event,
                action: action
            }) === false) return;
            if (event.changedTouches) forEach(event.changedTouches, function(touch) {
                // The first parameter should not be undefined (#432)
                assign(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
            else assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
            this.change(event);
        },
        cropEnd: function cropEnd(event) {
            if (this.disabled) return;
            var action = this.action, pointers = this.pointers;
            if (event.changedTouches) forEach(event.changedTouches, function(touch) {
                delete pointers[touch.identifier];
            });
            else delete pointers[event.pointerId || 0];
            if (!action) return;
            event.preventDefault();
            if (!Object.keys(pointers).length) this.action = '';
            if (this.cropping) {
                this.cropping = false;
                toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
            }
            dispatchEvent(this.element, EVENT_CROP_END, {
                originalEvent: event,
                action: action
            });
        }
    };
    var change = {
        change: function change(event) {
            var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
            var action = this.action;
            var aspectRatio = options.aspectRatio;
            var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
            var right = left + width;
            var bottom = top + height;
            var minLeft = 0;
            var minTop = 0;
            var maxWidth = containerData.width;
            var maxHeight = containerData.height;
            var renderable = true;
            var offset;
            // Locking aspect ratio in "free mode" by holding shift key
            if (!aspectRatio && event.shiftKey) aspectRatio = width && height ? width / height : 1;
            if (this.limited) {
                minLeft = cropBoxData.minLeft;
                minTop = cropBoxData.minTop;
                maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
                maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
            }
            var pointer = pointers[Object.keys(pointers)[0]];
            var range = {
                x: pointer.endX - pointer.startX,
                y: pointer.endY - pointer.startY
            };
            var check = function check(side) {
                switch(side){
                    case ACTION_EAST:
                        if (right + range.x > maxWidth) range.x = maxWidth - right;
                        break;
                    case ACTION_WEST:
                        if (left + range.x < minLeft) range.x = minLeft - left;
                        break;
                    case ACTION_NORTH:
                        if (top + range.y < minTop) range.y = minTop - top;
                        break;
                    case ACTION_SOUTH:
                        if (bottom + range.y > maxHeight) range.y = maxHeight - bottom;
                        break;
                }
            };
            switch(action){
                // Move crop box
                case ACTION_ALL:
                    left += range.x;
                    top += range.y;
                    break;
                // Resize crop box
                case ACTION_EAST:
                    if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_EAST);
                    width += range.x;
                    if (width < 0) {
                        action = ACTION_WEST;
                        width = -width;
                        left -= width;
                    }
                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top += (cropBoxData.height - height) / 2;
                    }
                    break;
                case ACTION_NORTH:
                    if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_NORTH);
                    height -= range.y;
                    top += range.y;
                    if (height < 0) {
                        action = ACTION_SOUTH;
                        height = -height;
                        top -= height;
                    }
                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left += (cropBoxData.width - width) / 2;
                    }
                    break;
                case ACTION_WEST:
                    if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_WEST);
                    width -= range.x;
                    left += range.x;
                    if (width < 0) {
                        action = ACTION_EAST;
                        width = -width;
                        left -= width;
                    }
                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top += (cropBoxData.height - height) / 2;
                    }
                    break;
                case ACTION_SOUTH:
                    if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_SOUTH);
                    height += range.y;
                    if (height < 0) {
                        action = ACTION_NORTH;
                        height = -height;
                        top -= height;
                    }
                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left += (cropBoxData.width - width) / 2;
                    }
                    break;
                case ACTION_NORTH_EAST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_EAST);
                        if (range.x >= 0) {
                            if (right < maxWidth) width += range.x;
                            else if (range.y <= 0 && top <= minTop) renderable = false;
                        } else width += range.x;
                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_NORTH_WEST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_NORTH_WEST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                        left += cropBoxData.width - width;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_WEST);
                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y <= 0 && top <= minTop) renderable = false;
                        } else {
                            width -= range.x;
                            left += range.x;
                        }
                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_NORTH_EAST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_SOUTH_WEST:
                    if (aspectRatio) {
                        if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_WEST);
                        width -= range.x;
                        left += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_WEST);
                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                        } else {
                            width -= range.x;
                            left += range.x;
                        }
                        if (range.y >= 0) {
                            if (bottom < maxHeight) height += range.y;
                        } else height += range.y;
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_EAST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_SOUTH_EAST:
                    if (aspectRatio) {
                        if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_EAST);
                        width += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_EAST);
                        if (range.x >= 0) {
                            if (right < maxWidth) width += range.x;
                            else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                        } else width += range.x;
                        if (range.y >= 0) {
                            if (bottom < maxHeight) height += range.y;
                        } else height += range.y;
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_WEST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = -height;
                        top -= height;
                    }
                    break;
                // Move canvas
                case ACTION_MOVE:
                    this.move(range.x, range.y);
                    renderable = false;
                    break;
                // Zoom canvas
                case ACTION_ZOOM:
                    this.zoom(getMaxZoomRatio(pointers), event);
                    renderable = false;
                    break;
                // Create crop box
                case ACTION_CROP:
                    if (!range.x || !range.y) {
                        renderable = false;
                        break;
                    }
                    offset = getOffset(this.cropper);
                    left = pointer.startX - offset.left;
                    top = pointer.startY - offset.top;
                    width = cropBoxData.minWidth;
                    height = cropBoxData.minHeight;
                    if (range.x > 0) action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                    else if (range.x < 0) {
                        left -= width;
                        action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                    }
                    if (range.y < 0) top -= height;
                    // Show the crop box if is hidden
                    if (!this.cropped) {
                        removeClass(this.cropBox, CLASS_HIDDEN);
                        this.cropped = true;
                        if (this.limited) this.limitCropBox(true, true);
                    }
                    break;
            }
            if (renderable) {
                cropBoxData.width = width;
                cropBoxData.height = height;
                cropBoxData.left = left;
                cropBoxData.top = top;
                this.action = action;
                this.renderCropBox();
            }
            // Override
            forEach(pointers, function(p) {
                p.startX = p.endX;
                p.startY = p.endY;
            });
        }
    };
    var methods = {
        // Show the crop box manually
        crop: function crop() {
            if (this.ready && !this.cropped && !this.disabled) {
                this.cropped = true;
                this.limitCropBox(true, true);
                if (this.options.modal) addClass(this.dragBox, CLASS_MODAL);
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.setCropBoxData(this.initialCropBoxData);
            }
            return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
            if (this.ready && !this.disabled) {
                this.imageData = assign({}, this.initialImageData);
                this.canvasData = assign({}, this.initialCanvasData);
                this.cropBoxData = assign({}, this.initialCropBoxData);
                this.renderCanvas();
                if (this.cropped) this.renderCropBox();
            }
            return this;
        },
        // Clear the crop box
        clear: function clear() {
            if (this.cropped && !this.disabled) {
                assign(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                });
                this.cropped = false;
                this.renderCropBox();
                this.limitCanvas(true, true);
                // Render canvas after crop box rendered
                this.renderCanvas();
                removeClass(this.dragBox, CLASS_MODAL);
                addClass(this.cropBox, CLASS_HIDDEN);
            }
            return this;
        },
        /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */ replace: function replace(url) {
            var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!this.disabled && url) {
                if (this.isImg) this.element.src = url;
                if (hasSameSize) {
                    this.url = url;
                    this.image.src = url;
                    if (this.ready) {
                        this.viewBoxImage.src = url;
                        forEach(this.previews, function(element) {
                            element.getElementsByTagName('img')[0].src = url;
                        });
                    }
                } else {
                    if (this.isImg) this.replaced = true;
                    this.options.data = null;
                    this.uncreate();
                    this.load(url);
                }
            }
            return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
            if (this.ready && this.disabled) {
                this.disabled = false;
                removeClass(this.cropper, CLASS_DISABLED);
            }
            return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
            if (this.ready && !this.disabled) {
                this.disabled = true;
                addClass(this.cropper, CLASS_DISABLED);
            }
            return this;
        },
        /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */ destroy: function destroy() {
            var element = this.element;
            if (!element[NAMESPACE]) return this;
            element[NAMESPACE] = undefined;
            if (this.isImg && this.replaced) element.src = this.originalUrl;
            this.uncreate();
            return this;
        },
        /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */ move: function move(offsetX) {
            var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
            var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
            return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },
        /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */ moveTo: function moveTo(x) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
            var canvasData = this.canvasData;
            var changed = false;
            x = Number(x);
            y = Number(y);
            if (this.ready && !this.disabled && this.options.movable) {
                if (isNumber(x)) {
                    canvasData.left = x;
                    changed = true;
                }
                if (isNumber(y)) {
                    canvasData.top = y;
                    changed = true;
                }
                if (changed) this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */ zoom: function zoom(ratio, _originalEvent) {
            var canvasData = this.canvasData;
            ratio = Number(ratio);
            if (ratio < 0) ratio = 1 / (1 - ratio);
            else ratio = 1 + ratio;
            return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },
        /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */ zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
            var options = this.options, canvasData = this.canvasData;
            var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
            ratio = Number(ratio);
            if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
                var newWidth = naturalWidth * ratio;
                var newHeight = naturalHeight * ratio;
                if (dispatchEvent(this.element, EVENT_ZOOM, {
                    ratio: ratio,
                    oldRatio: width / naturalWidth,
                    originalEvent: _originalEvent
                }) === false) return this;
                if (_originalEvent) {
                    var pointers = this.pointers;
                    var offset = getOffset(this.cropper);
                    var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                        pageX: _originalEvent.pageX,
                        pageY: _originalEvent.pageY
                    };
                    // Zoom from the triggering point of the event
                    canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
                    canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
                } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                    canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
                    canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
                } else {
                    // Zoom from the center of the canvas
                    canvasData.left -= (newWidth - width) / 2;
                    canvasData.top -= (newHeight - height) / 2;
                }
                canvasData.width = newWidth;
                canvasData.height = newHeight;
                this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */ rotate: function rotate(degree) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },
        /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */ rotateTo: function rotateTo(degree) {
            degree = Number(degree);
            if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
                this.imageData.rotate = degree % 360;
                this.renderCanvas(true, true);
            }
            return this;
        },
        /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */ scaleX: function scaleX(_scaleX) {
            var scaleY = this.imageData.scaleY;
            return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },
        /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */ scaleY: function scaleY(_scaleY) {
            var scaleX = this.imageData.scaleX;
            return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },
        /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */ scale: function scale(scaleX) {
            var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
            var imageData = this.imageData;
            var transformed = false;
            scaleX = Number(scaleX);
            scaleY = Number(scaleY);
            if (this.ready && !this.disabled && this.options.scalable) {
                if (isNumber(scaleX)) {
                    imageData.scaleX = scaleX;
                    transformed = true;
                }
                if (isNumber(scaleY)) {
                    imageData.scaleY = scaleY;
                    transformed = true;
                }
                if (transformed) this.renderCanvas(true, true);
            }
            return this;
        },
        /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */ getData: function getData() {
            var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
                data = {
                    x: cropBoxData.left - canvasData.left,
                    y: cropBoxData.top - canvasData.top,
                    width: cropBoxData.width,
                    height: cropBoxData.height
                };
                var ratio = imageData.width / imageData.naturalWidth;
                forEach(data, function(n, i) {
                    data[i] = n / ratio;
                });
                if (rounded) {
                    // In case rounding off leads to extra 1px in right or bottom border
                    // we should round the top-left corner and the dimension (#343).
                    var bottom = Math.round(data.y + data.height);
                    var right = Math.round(data.x + data.width);
                    data.x = Math.round(data.x);
                    data.y = Math.round(data.y);
                    data.width = right - data.x;
                    data.height = bottom - data.y;
                }
            } else data = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            if (options.rotatable) data.rotate = imageData.rotate || 0;
            if (options.scalable) {
                data.scaleX = imageData.scaleX || 1;
                data.scaleY = imageData.scaleY || 1;
            }
            return data;
        },
        /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */ setData: function setData(data) {
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
            var cropBoxData = {};
            if (this.ready && !this.disabled && isPlainObject(data)) {
                var transformed = false;
                if (options.rotatable) {
                    if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                        imageData.rotate = data.rotate;
                        transformed = true;
                    }
                }
                if (options.scalable) {
                    if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                        imageData.scaleX = data.scaleX;
                        transformed = true;
                    }
                    if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                        imageData.scaleY = data.scaleY;
                        transformed = true;
                    }
                }
                if (transformed) this.renderCanvas(true, true);
                var ratio = imageData.width / imageData.naturalWidth;
                if (isNumber(data.x)) cropBoxData.left = data.x * ratio + canvasData.left;
                if (isNumber(data.y)) cropBoxData.top = data.y * ratio + canvasData.top;
                if (isNumber(data.width)) cropBoxData.width = data.width * ratio;
                if (isNumber(data.height)) cropBoxData.height = data.height * ratio;
                this.setCropBoxData(cropBoxData);
            }
            return this;
        },
        /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */ getContainerData: function getContainerData() {
            return this.ready ? assign({}, this.containerData) : {};
        },
        /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */ getImageData: function getImageData() {
            return this.sized ? assign({}, this.imageData) : {};
        },
        /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */ getCanvasData: function getCanvasData() {
            var canvasData = this.canvasData;
            var data = {};
            if (this.ready) forEach([
                'left',
                'top',
                'width',
                'height',
                'naturalWidth',
                'naturalHeight'
            ], function(n) {
                data[n] = canvasData[n];
            });
            return data;
        },
        /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */ setCanvasData: function setCanvasData(data) {
            var canvasData = this.canvasData;
            var aspectRatio = canvasData.aspectRatio;
            if (this.ready && !this.disabled && isPlainObject(data)) {
                if (isNumber(data.left)) canvasData.left = data.left;
                if (isNumber(data.top)) canvasData.top = data.top;
                if (isNumber(data.width)) {
                    canvasData.width = data.width;
                    canvasData.height = data.width / aspectRatio;
                } else if (isNumber(data.height)) {
                    canvasData.height = data.height;
                    canvasData.width = data.height * aspectRatio;
                }
                this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */ getCropBoxData: function getCropBoxData() {
            var cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) data = {
                left: cropBoxData.left,
                top: cropBoxData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
            };
            return data || {};
        },
        /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */ setCropBoxData: function setCropBoxData(data) {
            var cropBoxData = this.cropBoxData;
            var aspectRatio = this.options.aspectRatio;
            var widthChanged;
            var heightChanged;
            if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
                if (isNumber(data.left)) cropBoxData.left = data.left;
                if (isNumber(data.top)) cropBoxData.top = data.top;
                if (isNumber(data.width) && data.width !== cropBoxData.width) {
                    widthChanged = true;
                    cropBoxData.width = data.width;
                }
                if (isNumber(data.height) && data.height !== cropBoxData.height) {
                    heightChanged = true;
                    cropBoxData.height = data.height;
                }
                if (aspectRatio) {
                    if (widthChanged) cropBoxData.height = cropBoxData.width / aspectRatio;
                    else if (heightChanged) cropBoxData.width = cropBoxData.height * aspectRatio;
                }
                this.renderCropBox();
            }
            return this;
        },
        /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */ getCroppedCanvas: function getCroppedCanvas() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) return null;
            var canvasData = this.canvasData;
            var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
            // Returns the source canvas if it is not cropped.
            if (!this.cropped) return source;
            var _this$getData = this.getData(), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
            var ratio = source.width / Math.floor(canvasData.naturalWidth);
            if (ratio !== 1) {
                initialX *= ratio;
                initialY *= ratio;
                initialWidth *= ratio;
                initialHeight *= ratio;
            }
            var aspectRatio = initialWidth / initialHeight;
            var maxSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.maxWidth || Infinity,
                height: options.maxHeight || Infinity
            });
            var minSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.minWidth || 0,
                height: options.minHeight || 0
            }, 'cover');
            var _getAdjustedSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.width || (ratio !== 1 ? source.width : initialWidth),
                height: options.height || (ratio !== 1 ? source.height : initialHeight)
            }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
            width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
            height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = options.fillColor || 'transparent';
            context.fillRect(0, 0, width, height);
            var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
            context.imageSmoothingEnabled = imageSmoothingEnabled;
            if (imageSmoothingQuality) context.imageSmoothingQuality = imageSmoothingQuality;
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
            var sourceWidth = source.width;
            var sourceHeight = source.height;
            // Source canvas parameters
            var srcX = initialX;
            var srcY = initialY;
            var srcWidth;
            var srcHeight;
            // Destination canvas parameters
            var dstX;
            var dstY;
            var dstWidth;
            var dstHeight;
            if (srcX <= -initialWidth || srcX > sourceWidth) {
                srcX = 0;
                srcWidth = 0;
                dstX = 0;
                dstWidth = 0;
            } else if (srcX <= 0) {
                dstX = -srcX;
                srcX = 0;
                srcWidth = Math.min(sourceWidth, initialWidth + srcX);
                dstWidth = srcWidth;
            } else if (srcX <= sourceWidth) {
                dstX = 0;
                srcWidth = Math.min(initialWidth, sourceWidth - srcX);
                dstWidth = srcWidth;
            }
            if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
                srcY = 0;
                srcHeight = 0;
                dstY = 0;
                dstHeight = 0;
            } else if (srcY <= 0) {
                dstY = -srcY;
                srcY = 0;
                srcHeight = Math.min(sourceHeight, initialHeight + srcY);
                dstHeight = srcHeight;
            } else if (srcY <= sourceHeight) {
                dstY = 0;
                srcHeight = Math.min(initialHeight, sourceHeight - srcY);
                dstHeight = srcHeight;
            }
            var params = [
                srcX,
                srcY,
                srcWidth,
                srcHeight
            ];
            // Avoid "IndexSizeError"
            if (dstWidth > 0 && dstHeight > 0) {
                var scale = width / initialWidth;
                params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
            }
            // All the numerical parameters should be integer for `drawImage`
            // https://github.com/fengyuanchen/cropper/issues/476
            context.drawImage.apply(context, [
                source
            ].concat(_toConsumableArray(params.map(function(param) {
                return Math.floor(normalizeDecimalNumber(param));
            }))));
            return canvas;
        },
        /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */ setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;
            if (!this.disabled && !isUndefined(aspectRatio)) {
                // 0 -> NaN
                options.aspectRatio = Math.max(0, aspectRatio) || NaN;
                if (this.ready) {
                    this.initCropBox();
                    if (this.cropped) this.renderCropBox();
                }
            }
            return this;
        },
        /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */ setDragMode: function setDragMode(mode) {
            var options = this.options, dragBox = this.dragBox, face = this.face;
            if (this.ready && !this.disabled) {
                var croppable = mode === DRAG_MODE_CROP;
                var movable = options.movable && mode === DRAG_MODE_MOVE;
                mode = croppable || movable ? mode : DRAG_MODE_NONE;
                options.dragMode = mode;
                setData(dragBox, DATA_ACTION, mode);
                toggleClass(dragBox, CLASS_CROP, croppable);
                toggleClass(dragBox, CLASS_MOVE, movable);
                if (!options.cropBoxMovable) {
                    // Sync drag mode to crop box when it is not movable
                    setData(face, DATA_ACTION, mode);
                    toggleClass(face, CLASS_CROP, croppable);
                    toggleClass(face, CLASS_MOVE, movable);
                }
            }
            return this;
        }
    };
    var AnotherCropper = WINDOW.Cropper;
    var Cropper = /*#__PURE__*/ function() {
        /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */ function Cropper(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Cropper);
            if (!element || !REGEXP_TAG_NAME.test(element.tagName)) throw new Error('The first argument is required and must be an <img> or <canvas> element.');
            this.element = element;
            this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
            this.cropped = false;
            this.disabled = false;
            this.pointers = {};
            this.ready = false;
            this.reloading = false;
            this.replaced = false;
            this.sized = false;
            this.sizing = false;
            this.init();
        }
        _createClass(Cropper, [
            {
                key: "init",
                value: function init() {
                    var element = this.element;
                    var tagName = element.tagName.toLowerCase();
                    var url;
                    if (element[NAMESPACE]) return;
                    element[NAMESPACE] = this;
                    if (tagName === 'img') {
                        this.isImg = true;
                        // e.g.: "img/picture.jpg"
                        url = element.getAttribute('src') || '';
                        this.originalUrl = url;
                        // Stop when it's a blank image
                        if (!url) return;
                        // e.g.: "https://example.com/img/picture.jpg"
                        url = element.src;
                    } else if (tagName === 'canvas' && window.HTMLCanvasElement) url = element.toDataURL();
                    this.load(url);
                }
            },
            {
                key: "load",
                value: function load(url) {
                    var _this = this;
                    if (!url) return;
                    this.url = url;
                    this.imageData = {};
                    var element = this.element, options = this.options;
                    if (!options.rotatable && !options.scalable) options.checkOrientation = false;
                    // Only IE10+ supports Typed Arrays
                    if (!options.checkOrientation || !window.ArrayBuffer) {
                        this.clone();
                        return;
                    }
                    // Detect the mime type of the image directly if it is a Data URL
                    if (REGEXP_DATA_URL.test(url)) {
                        // Read ArrayBuffer from Data URL of JPEG images directly for better performance
                        if (REGEXP_DATA_URL_JPEG.test(url)) this.read(dataURLToArrayBuffer(url));
                        else // Only a JPEG image may contains Exif Orientation information,
                        // the rest types of Data URLs are not necessary to check orientation at all.
                        this.clone();
                        return;
                    }
                    // 1. Detect the mime type of the image by a XMLHttpRequest.
                    // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
                    var xhr = new XMLHttpRequest();
                    var clone = this.clone.bind(this);
                    this.reloading = true;
                    this.xhr = xhr;
                    // 1. Cross origin requests are only supported for protocol schemes:
                    // http, https, data, chrome, chrome-extension.
                    // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
                    // in some browsers as IE11 and Safari.
                    xhr.onabort = clone;
                    xhr.onerror = clone;
                    xhr.ontimeout = clone;
                    xhr.onprogress = function() {
                        // Abort the request directly if it not a JPEG image for better performance
                        if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) xhr.abort();
                    };
                    xhr.onload = function() {
                        _this.read(xhr.response);
                    };
                    xhr.onloadend = function() {
                        _this.reloading = false;
                        _this.xhr = null;
                    };
                    // Bust cache when there is a "crossOrigin" property to avoid browser cache error
                    if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) url = addTimestamp(url);
                    // The third parameter is required for avoiding side-effect (#682)
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer';
                    xhr.withCredentials = element.crossOrigin === 'use-credentials';
                    xhr.send();
                }
            },
            {
                key: "read",
                value: function read(arrayBuffer) {
                    var options = this.options, imageData = this.imageData;
                    // Reset the orientation value to its default value 1
                    // as some iOS browsers will render image with its orientation
                    var orientation = resetAndGetOrientation(arrayBuffer);
                    var rotate = 0;
                    var scaleX = 1;
                    var scaleY = 1;
                    if (orientation > 1) {
                        // Generate a new URL which has the default orientation value
                        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
                        var _parseOrientation = parseOrientation(orientation);
                        rotate = _parseOrientation.rotate;
                        scaleX = _parseOrientation.scaleX;
                        scaleY = _parseOrientation.scaleY;
                    }
                    if (options.rotatable) imageData.rotate = rotate;
                    if (options.scalable) {
                        imageData.scaleX = scaleX;
                        imageData.scaleY = scaleY;
                    }
                    this.clone();
                }
            },
            {
                key: "clone",
                value: function clone() {
                    var element = this.element, url = this.url;
                    var crossOrigin = element.crossOrigin;
                    var crossOriginUrl = url;
                    if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
                        if (!crossOrigin) crossOrigin = 'anonymous';
                        // Bust cache when there is not a "crossOrigin" property (#519)
                        crossOriginUrl = addTimestamp(url);
                    }
                    this.crossOrigin = crossOrigin;
                    this.crossOriginUrl = crossOriginUrl;
                    var image = document.createElement('img');
                    if (crossOrigin) image.crossOrigin = crossOrigin;
                    image.src = crossOriginUrl || url;
                    image.alt = element.alt || 'The image to crop';
                    this.image = image;
                    image.onload = this.start.bind(this);
                    image.onerror = this.stop.bind(this);
                    addClass(image, CLASS_HIDE);
                    element.parentNode.insertBefore(image, element.nextSibling);
                }
            },
            {
                key: "start",
                value: function start() {
                    var _this2 = this;
                    var image = this.image;
                    image.onload = null;
                    image.onerror = null;
                    this.sizing = true;
                    // Match all browsers that use WebKit as the layout engine in iOS devices,
                    // such as Safari for iOS, Chrome for iOS, and in-app browsers.
                    var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
                    var done = function done(naturalWidth, naturalHeight) {
                        assign(_this2.imageData, {
                            naturalWidth: naturalWidth,
                            naturalHeight: naturalHeight,
                            aspectRatio: naturalWidth / naturalHeight
                        });
                        _this2.initialImageData = assign({}, _this2.imageData);
                        _this2.sizing = false;
                        _this2.sized = true;
                        _this2.build();
                    };
                    // Most modern browsers (excepts iOS WebKit)
                    if (image.naturalWidth && !isIOSWebKit) {
                        done(image.naturalWidth, image.naturalHeight);
                        return;
                    }
                    var sizingImage = document.createElement('img');
                    var body = document.body || document.documentElement;
                    this.sizingImage = sizingImage;
                    sizingImage.onload = function() {
                        done(sizingImage.width, sizingImage.height);
                        if (!isIOSWebKit) body.removeChild(sizingImage);
                    };
                    sizingImage.src = image.src;
                    // iOS WebKit will convert the image automatically
                    // with its orientation once append it into DOM (#279)
                    if (!isIOSWebKit) {
                        sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
                        body.appendChild(sizingImage);
                    }
                }
            },
            {
                key: "stop",
                value: function stop() {
                    var image = this.image;
                    image.onload = null;
                    image.onerror = null;
                    image.parentNode.removeChild(image);
                    this.image = null;
                }
            },
            {
                key: "build",
                value: function build() {
                    if (!this.sized || this.ready) return;
                    var element = this.element, options = this.options, image = this.image;
                    // Create cropper elements
                    var container = element.parentNode;
                    var template = document.createElement('div');
                    template.innerHTML = TEMPLATE;
                    var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
                    var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
                    var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
                    var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
                    var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
                    this.container = container;
                    this.cropper = cropper;
                    this.canvas = canvas;
                    this.dragBox = dragBox;
                    this.cropBox = cropBox;
                    this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
                    this.face = face;
                    canvas.appendChild(image);
                    // Hide the original image
                    addClass(element, CLASS_HIDDEN);
                    // Inserts the cropper after to the current image
                    container.insertBefore(cropper, element.nextSibling);
                    // Show the hidden image
                    removeClass(image, CLASS_HIDE);
                    this.initPreview();
                    this.bind();
                    options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
                    options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
                    options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
                    addClass(cropBox, CLASS_HIDDEN);
                    if (!options.guides) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
                    if (!options.center) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
                    if (options.background) addClass(cropper, "".concat(NAMESPACE, "-bg"));
                    if (!options.highlight) addClass(face, CLASS_INVISIBLE);
                    if (options.cropBoxMovable) {
                        addClass(face, CLASS_MOVE);
                        setData(face, DATA_ACTION, ACTION_ALL);
                    }
                    if (!options.cropBoxResizable) {
                        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
                        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
                    }
                    this.render();
                    this.ready = true;
                    this.setDragMode(options.dragMode);
                    if (options.autoCrop) this.crop();
                    this.setData(options.data);
                    if (isFunction(options.ready)) addListener(element, EVENT_READY, options.ready, {
                        once: true
                    });
                    dispatchEvent(element, EVENT_READY);
                }
            },
            {
                key: "unbuild",
                value: function unbuild() {
                    if (!this.ready) return;
                    this.ready = false;
                    this.unbind();
                    this.resetPreview();
                    var parentNode = this.cropper.parentNode;
                    if (parentNode) parentNode.removeChild(this.cropper);
                    removeClass(this.element, CLASS_HIDDEN);
                }
            },
            {
                key: "uncreate",
                value: function uncreate() {
                    if (this.ready) {
                        this.unbuild();
                        this.ready = false;
                        this.cropped = false;
                    } else if (this.sizing) {
                        this.sizingImage.onload = null;
                        this.sizing = false;
                        this.sized = false;
                    } else if (this.reloading) {
                        this.xhr.onabort = null;
                        this.xhr.abort();
                    } else if (this.image) this.stop();
                }
            }
        ], [
            {
                key: "noConflict",
                value: function noConflict() {
                    window.Cropper = AnotherCropper;
                    return Cropper;
                }
            },
            {
                key: "setDefaults",
                value: function setDefaults(options) {
                    assign(DEFAULTS, isPlainObject(options) && options);
                }
            }
        ]);
        return Cropper;
    }();
    assign(Cropper.prototype, render, preview, events, handlers, change, methods);
    return Cropper;
});

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["agWFI","1QViH"], "1QViH", "parcelRequire322b", {})

//# sourceMappingURL=1.8.7a14eeb4.js.map
