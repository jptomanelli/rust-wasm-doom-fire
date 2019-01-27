(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/doom_fire.js":
/*!***************************!*\
  !*** ../pkg/doom_fire.js ***!
  \***************************/
/*! exports provided: __wbg_floor_12e75d22951301da, __wbg_random_ae55f5b83bdab2a0, Fire, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_floor_12e75d22951301da\", function() { return __wbg_floor_12e75d22951301da; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_ae55f5b83bdab2a0\", function() { return __wbg_random_ae55f5b83bdab2a0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fire\", function() { return Fire; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doom_fire_bg */ \"../pkg/doom_fire_bg.wasm\");\n/* tslint:disable */\n\n\nfunction __wbg_floor_12e75d22951301da(arg0) {\n    return Math.floor(arg0);\n}\n\nfunction __wbg_random_ae55f5b83bdab2a0() {\n    return Math.random();\n}\n\nfunction freeFire(ptr) {\n\n    _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_fire_free\"](ptr);\n}\n/**\n*/\nclass Fire {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Fire.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeFire(ptr);\n    }\n\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @param {number} arg2\n    * @returns {Fire}\n    */\n    static new(arg0, arg1, arg2) {\n        return Fire.__wrap(_doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"fire_new\"](arg0, arg1, arg2));\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        return _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"fire_get_width\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        return _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"fire_get_height\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_cells() {\n        return _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"fire_get_cells\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    update_cells() {\n        return _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"fire_update_cells\"](this.ptr);\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_doom_fire_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/doom_fire.js?");

/***/ }),

/***/ "../pkg/doom_fire_bg.wasm":
/*!********************************!*\
  !*** ../pkg/doom_fire_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __wbg_fire_free, fire_new, fire_get_width, fire_get_height, fire_get_cells, fire_update_cells */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./doom_fire */ \"../pkg/doom_fire.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/doom_fire_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var doom_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! doom-fire */ \"../pkg/doom_fire.js\");\n/* harmony import */ var doom_fire_doom_fire_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doom-fire/doom_fire_bg */ \"../pkg/doom_fire_bg.wasm\");\n\n\n\nclass DoomAnimation {\n\n    constructor(options = {}) {\n        this.options = Object.assign({\n           canvasSelector: 'canvas'\n        }, options);\n\n        this.palette = [\"#070707\", \"#1f0707\", \"#2f0f07\", \"#470f07\", \"#571707\", \"#671f07\", \"#771f07\", \"#8f2707\", \"#9f2f07\", \"#af3f07\", \"#bf4707\", \"#c74707\", \"#df4f07\", \"#df5707\", \"#df5707\", \"#d75f07\", \"#d75f07\", \"#d7670f\", \"#cf6f0f\", \"#cf770f\", \"#cf7f0f\", \"#cf8717\", \"#c78717\", \"#c78f17\", \"#c7971f\", \"#bf9f1f\", \"#bf9f1f\", \"#bfa727\", \"#bfa727\", \"#bfaf2f\", \"#b7af2f\", \"#b7b72f\", \"#b7b737\", \"#cfcf6f\", \"#dfdf9f\", \"#efefc7\", \"#ffffff\"];\n        this.canvas = document.querySelector(this.options.canvasSelector);\n        this.ctx = canvas.getContext('2d');\n\n        this.bind();\n        this.setCanvasDimensions();\n        this.setFireObject();\n        this.draw();\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n        this.fire.update_cells();\n\n        let color, ctr = 0;\n        for (let y = 0; y < this.height; y++) {\n            for (let x = 0; x < this.width; x++) {\n                color = this.palette[this.cells[ctr]];\n                this.ctx.fillStyle = color;\n                this.ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);\n                ctr += 1;\n\n            }\n        }\n        requestAnimationFrame(this.draw.bind(this));\n    }\n\n    bind() {}\n\n    setCanvasDimensions() {\n        this.canvas.style.width = '100%'\n        this.canvas.style.height = '100%';\n        this.canvas.width = canvas.offsetWidth;\n        this.canvas.height = canvas.offsetHeight;\n        this.pixelSize = 4;\n    }\n\n    setFireObject() {\n        this.height = Math.floor(this.canvas.height / this.pixelSize);\n        this.width = Math.floor(this.canvas.width / this.pixelSize);\n\n        const arrLen = this.height * this.width;\n\n        this.fire = doom_fire__WEBPACK_IMPORTED_MODULE_0__[\"Fire\"].new(this.height, this.width, this.palette.length);\n        this.fire.update_cells();\n\n        this.cells = new Uint8Array(doom_fire_doom_fire_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, this.fire.get_cells(), arrLen);\n    }\n\n}\n\nconst doom_animation = new DoomAnimation();\nwindow.doom_animation = doom_animation;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);