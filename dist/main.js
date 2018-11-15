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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return Builder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Builder =
/*#__PURE__*/
function () {
  function Builder() {
    _classCallCheck(this, Builder);
  }

  _createClass(Builder, null, [{
    key: "createNewElement",
    value: function createNewElement(tag) {
      var innerContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var classStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var attr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var el = document.createElement(tag);
      el.innerHTML = innerContent ? innerContent : "";
      el.className = classStr ? classStr : "";

      if (attr) {
        attr.map(function (attr_rl) {
          return el.setAttribute(attr_rl.name, attr_rl.value);
        });
      }

      return el;
    }
  }, {
    key: "attachChildrenToParent",
    value: function attachChildrenToParent(html, array_el) {
      array_el.map(function (el) {
        return html.appendChild(el);
      });
      return html;
    }
  }]);

  return Builder;
}();

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/*! exports provided: Catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/builder.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Catalog =
/*#__PURE__*/
function () {
  function Catalog(per_page) {
    _classCallCheck(this, Catalog);

    this.element = document.getElementById("catalog");
    this.per_page = per_page;
  }

  _createClass(Catalog, [{
    key: "createCard",
    value: function createCard(product, index) {
      var link = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("a", "Add to cart", "btn btn-primary", [{
        name: "href",
        value: "#"
      }]);
      var show_more = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("a", "More", "btn btn-success product_more", [{
        name: "href",
        value: "#"
      }, {
        name: "data-id",
        value: index
      }]);
      var p = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("p", product.description, "card-text");
      var title = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("h5", product.name, "card-title");
      var cardBody = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("div", null, "card-body"), [title, p, link, show_more]);
      var image = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("img", null, "card-img-top", [{
        name: "src",
        value: "images/" + product.image
      }, {
        name: "alt",
        value: product.name
      }]);
      var card = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("div", null, "card"), [image, cardBody]);
      var catalogItem = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);
      return catalogItem;
    }
  }, {
    key: "startFromFirstProducts",
    value: function startFromFirstProducts() {
      return this.current_page * this.per_page;
    }
  }, {
    key: "isLastProductInPage",
    value: function isLastProductInPage(i, array_products) {
      return i < this.current_page * this.per_page + this.per_page && i < array_products.length;
    }
  }, {
    key: "renderProducts",
    value: function renderProducts(array_products, current_page, paginator) {
      this.current_page = current_page;
      this.element.innerHTML = "";
      var i = this.startFromFirstProducts();

      for (i; this.isLastProductInPage(i, array_products); i++) {
        this.element.appendChild(this.createCard(array_products[i], i));
      }

      paginator.createPagination(_page__WEBPACK_IMPORTED_MODULE_1__["Page"].getProducts());
    }
  }]);

  return Catalog;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator */ "./src/paginator.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./src/catalog.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/search.js");




var searchForm = new _search__WEBPACK_IMPORTED_MODULE_3__["SearchProduct"]();
var catalog = new _catalog__WEBPACK_IMPORTED_MODULE_2__["Catalog"](_page__WEBPACK_IMPORTED_MODULE_0__["Page"].getPerPage());
var paginator = new _paginator__WEBPACK_IMPORTED_MODULE_1__["Paginator"](catalog);
catalog.renderProducts(_page__WEBPACK_IMPORTED_MODULE_0__["Page"].getProducts(), _page__WEBPACK_IMPORTED_MODULE_0__["Page"].getCurrentPage(), paginator);
paginator.createPagination(_page__WEBPACK_IMPORTED_MODULE_0__["Page"].getProducts());
searchForm.createSearchHTML();

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var currentPage = 0;
var perPage = 6;
var products = [{
  "name": "Snikers #1",
  "price": 103.50,
  "image": "bg-01.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #2",
  "price": 152.14,
  "image": "bg-02.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #3",
  "price": 202.22,
  "image": "bg-03.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #4",
  "price": 240.00,
  "image": "bg-04.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #5",
  "price": 180.30,
  "image": "bg-05.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #6",
  "price": 186.50,
  "image": "bg-06.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #7",
  "price": 111.60,
  "image": "bg-07.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #8",
  "price": 169.64,
  "image": "bg-08.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "LeBron 16 #9",
  "price": 215.20,
  "image": "bg-09.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Nike Zoom KD11 #10",
  "price": 245.00,
  "image": "bg-10.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #11",
  "price": 109.30,
  "image": "bg-05.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #12",
  "price": 198.50,
  "image": "bg-06.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #13",
  "price": 128.69,
  "image": "bg-01.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #14",
  "price": 179.00,
  "image": "bg-02.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #15",
  "price": 260.20,
  "image": "bg-03.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}, {
  "name": "Snikers #16",
  "price": 301.20,
  "image": "bg-03.jpg",
  "description": "This is very cool snikers. Nice colorfull and quality"
}];
var Page =
/*#__PURE__*/
function () {
  function Page() {
    _classCallCheck(this, Page);
  }

  _createClass(Page, null, [{
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return currentPage;
    }
  }, {
    key: "getPerPage",
    value: function getPerPage() {
      return perPage;
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return products;
    }
  }, {
    key: "setCurrentPage",
    value: function setCurrentPage(pageNumber) {
      currentPage = pageNumber;
    }
  }]);

  return Page;
}();

/***/ }),

/***/ "./src/paginator.js":
/*!**************************!*\
  !*** ./src/paginator.js ***!
  \**************************/
/*! exports provided: Paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/builder.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Paginator =
/*#__PURE__*/
function () {
  function Paginator(catalog) {
    _classCallCheck(this, Paginator);

    this.pagination_buttons = document.getElementsByClassName("page-link");
    this.pagination = document.getElementById("pagination");
    this.catalog = catalog;
  }

  _createClass(Paginator, [{
    key: "createPagination",
    value: function createPagination(array_products) {
      var _this = this;

      this.pagination.innerHTML = "";
      var ul = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("ul", null, "pagination");

      for (var i = 0; i < Math.ceil(array_products.length / _page__WEBPACK_IMPORTED_MODULE_1__["Page"].getPerPage()); i++) {
        var link = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("a", i + 1, "page-link", [{
          name: "data-link",
          value: i
        }]);
        var classNameLi = "page-item" + (i == _page__WEBPACK_IMPORTED_MODULE_1__["Page"].getCurrentPage() ? " active" : "");
        var li = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("li", null, classNameLi), [link]);
        ul.appendChild(li);
      }

      this.pagination.appendChild(ul);
      Array.from(this.pagination_buttons).map(function (el) {
        el.addEventListener("click", function (e) {
          _page__WEBPACK_IMPORTED_MODULE_1__["Page"].setCurrentPage(e.target.dataset.link);

          _this.catalog.renderProducts(array_products, _page__WEBPACK_IMPORTED_MODULE_1__["Page"].getCurrentPage(), _this);
        }, false);
      }); // Array.from(document.getElementsByClassName("product_more")).map((el)=>{
      //     el.addEventListener("click", eventHandle, false);
      // });
    }
  }]);

  return Paginator;
}();

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: SearchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProduct", function() { return SearchProduct; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/builder.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SearchProduct =
/*#__PURE__*/
function () {
  function SearchProduct() {
    _classCallCheck(this, SearchProduct);

    this.element = document.getElementById("search");
  }

  _createClass(SearchProduct, [{
    key: "createSearchHTML",
    value: function createSearchHTML() {
      var input = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("input", null, "form-control mr-sm-2", [{
        name: "placeholder",
        value: "Search"
      }, {
        name: "type",
        value: "search"
      }, {
        name: "id",
        value: "s"
      }]);
      var button = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("button", "Search", "btn btn-outline-success my-2 my-sm-0", [{
        name: "id",
        value: "searchButton"
      }]);
      var div = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("div", null, "form-inline my-2 col"), [input, button]);
      var row = _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].attachChildrenToParent(_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].createNewElement("div", null, "row"), [div]);
      this.element.appendChild(row);
      this.addSearchEventListener();
    }
  }, {
    key: "addSearchEventListener",
    value: function addSearchEventListener() {
      document.getElementById("searchButton").addEventListener("click", this.doSearch, false);
    }
  }, {
    key: "doSearch",
    value: function doSearch(e) {
      var searchPharase = document.getElementById("s").value;
      console.log(searchPharase);
    }
  }]);

  return SearchProduct;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map