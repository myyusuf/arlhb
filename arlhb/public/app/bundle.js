/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ApplicationData = __webpack_require__(1);

	var _MainMenu = __webpack_require__(2);

	var _MainMenu2 = _interopRequireDefault(_MainMenu);

	var _RolePage = __webpack_require__(6);

	var _RolePage2 = _interopRequireDefault(_RolePage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rolePage = new _RolePage2.default({});
	var mainMenu = new _MainMenu2.default({
	  onClick: function onClick(e) {
	    $('#content').empty();
	    if (e == 2) {
	      rolePage.render($('#content'));
	    }
	  }
	});

	mainMenu.render($('#top-menu'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getMenuData = getMenuData;
	function getMenuData() {
	    var data = [{
	        "id": "1",
	        "text": "Home",
	        "parentid": "-1",
	        "subMenuWidth": '250px'
	    }, {
	        "text": "Customer Payment",
	        "id": "2",
	        "parentid": "-1",
	        "subMenuWidth": '250px'
	    }, {
	        "id": "3",
	        "text": "Customer Transaction",
	        "parentid": "-1"
	    }, {
	        "id": "4",
	        "text": "Bank Transaction",
	        "parentid": "-1"
	    }, {
	        "id": "5",
	        "text": "Administration",
	        "parentid": "-1"
	    }, {
	        "id": "6",
	        "text": "Report",
	        "parentid": "-1"
	    }, {
	        "id": "51",
	        "text": "Active Session",
	        "parentid": "5"
	    }, {
	        "id": "52",
	        "text": "Corporate Entity",
	        "parentid": "5"
	    }, {
	        "id": "53",
	        "text": "Country Zone",
	        "parentid": "5"
	    }, {
	        "id": "54",
	        "text": "Customer",
	        "parentid": "5"
	    }, {
	        "id": "55",
	        "text": "Holidays",
	        "parentid": "5"
	    }, {
	        "id": "56",
	        "text": "Location",
	        "parentid": "5"
	    }, {
	        "id": "57",
	        "text": "Operational Time",
	        "parentid": "5"
	    }, {
	        "id": "58",
	        "text": "Role",
	        "parentid": "5"
	    }, {
	        "id": "59",
	        "text": "User",
	        "parentid": "5"
	    }];

	    return data;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Menu = __webpack_require__(4);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainMenu = function (_Component) {
	    _inherits(MainMenu, _Component);

	    function MainMenu(options) {
	        _classCallCheck(this, MainMenu);

	        var _this = _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, options));

	        var menuData = [{
	            "id": "1",
	            "text": "Home",
	            "parentid": "-1",
	            "subMenuWidth": '250px'
	        }, {
	            "id": "2",
	            "text": "Customer Payment",
	            "parentid": "-1",
	            "subMenuWidth": '250px'
	        }, {
	            "id": "3",
	            "text": "Customer Transaction",
	            "parentid": "-1"
	        }, {
	            "id": "4",
	            "text": "Bank Transaction",
	            "parentid": "-1"
	        }, {
	            "id": "5",
	            "text": "Administration",
	            "parentid": "-1"
	        }, {
	            "id": "51",
	            "text": "Active Sessions",
	            "parentid": "5"
	        }, {
	            "id": "52",
	            "text": "Corporate Entity",
	            "parentid": "5"
	        }, {
	            "id": "53",
	            "text": "Country Zone",
	            "parentid": "5"
	        }, {
	            "id": "54",
	            "text": "Customer",
	            "parentid": "5"
	        }, {
	            "id": "55",
	            "text": "Holidays",
	            "parentid": "5"
	        }, {
	            "id": "56",
	            "text": "Location",
	            "parentid": "5"
	        }, {
	            "id": "57",
	            "text": "Operational Time",
	            "parentid": "5"
	        }, {
	            "id": "58",
	            "text": "Role",
	            "parentid": "5"
	        }, {
	            "id": "59",
	            "text": "User",
	            "parentid": "5"
	        }, {
	            "id": "6",
	            "text": "Report",
	            "parentid": "-1"
	        }];

	        _this.menu = new _Menu2.default({
	            data: menuData,
	            onClick: function onClick(e) {
	                if (options.onClick) {
	                    options.onClick(e);
	                }
	            },
	            jqxOptions: {
	                width: '100%',
	                height: '100%'
	            }
	        });
	        return _this;
	    }

	    _createClass(MainMenu, [{
	        key: "render",
	        value: function render(container) {

	            this.menu.render(container);
	        }
	    }]);

	    return MainMenu;
	}(_Component3.default);

	exports.default = MainMenu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.guid = guid;
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = function (_Component) {
	  _inherits(Menu, _Component);

	  function Menu(options) {
	    _classCallCheck(this, Menu);

	    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, options));

	    _this2.data = options.data;
	    _this2.onClick = options.onClick;

	    var source = {
	      datatype: "json",
	      datafields: [{ name: 'id' }, { name: 'parentid' }, { name: 'text' }, { name: 'subMenuWidth' }],
	      id: 'id',
	      localdata: _this2.data
	    };

	    var dataAdapter = new $.jqx.dataAdapter(source);
	    dataAdapter.dataBind();

	    _this2.records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
	    _this2.jqxOptions['source'] = _this2.records;

	    return _this2;
	  }

	  _createClass(Menu, [{
	    key: "render",
	    value: function render(container) {

	      var _this = this;

	      var menuContainer = $('<div></div>');
	      menuContainer.appendTo(container);

	      menuContainer.jqxMenu(this.jqxOptions);

	      menuContainer.on('itemclick', function (event) {
	        var args = event.args;
	        if (_this.onClick) {
	          _this.onClick(args.id);
	        }
	      });
	    }
	  }]);

	  return Menu;
	}(_Component3.default);

	exports.default = Menu;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	  function Component(options) {
	    _classCallCheck(this, Component);

	    this.id = (0, _Utils.guid)();

	    var defaultTheme = 'metro';

	    if (options.jqxOptions) {
	      this.jqxOptions = options.jqxOptions;
	    } else {
	      this.jqxOptions = {};
	    }

	    if (this.jqxOptions.theme == undefined) {
	      this.jqxOptions['theme'] = defaultTheme;
	    }
	  }

	  _createClass(Component, [{
	    key: 'getId',
	    value: function getId() {
	      return this.id;
	    }
	  }, {
	    key: 'render',
	    value: function render(container) {}
	  }]);

	  return Component;
	}();

	exports.default = Component;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _SearchText = __webpack_require__(8);

	var _SearchText2 = _interopRequireDefault(_SearchText);

	var _RoleList = __webpack_require__(10);

	var _RoleList2 = _interopRequireDefault(_RoleList);

	var _AddRoleWindow = __webpack_require__(13);

	var _AddRoleWindow2 = _interopRequireDefault(_AddRoleWindow);

	var _EditRoleWindow = __webpack_require__(24);

	var _EditRoleWindow2 = _interopRequireDefault(_EditRoleWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RolePage = function (_Component) {
	  _inherits(RolePage, _Component);

	  function RolePage(options) {
	    _classCallCheck(this, RolePage);

	    var _this2 = _possibleConstructorReturn(this, (RolePage.__proto__ || Object.getPrototypeOf(RolePage)).call(this, options));

	    var _this = _this2;

	    if (options.title) {
	      _this2.title = option.title;
	    } else {
	      _this2.title = "Role Management";
	    }

	    var onEditButtonClick = function onEditButtonClick(value) {
	      var editRoleWindow = new _EditRoleWindow2.default({
	        data: value,
	        onSaveSuccess: function onSaveSuccess() {
	          _this.dataGrid.refresh();
	        }
	      });
	      editRoleWindow.render($('#dialogWindowContainer'));
	      editRoleWindow.open();
	    };

	    _this2.roleList = new _RoleList2.default({
	      onEditButtonClick: onEditButtonClick
	    });

	    _this2.addRoleButton = new _Button2.default({
	      title: 'Add Role',
	      height: 26,
	      onClick: function onClick(e) {
	        var addRoleWindow = new _AddRoleWindow2.default({
	          onSaveSuccess: function onSaveSuccess() {
	            _this.dataGrid.refresh();
	          }
	        });
	        addRoleWindow.render($('#dialogWindowContainer'));
	        addRoleWindow.open();
	      },
	      jqxOptions: {
	        theme: 'light',
	        template: 'primary'
	      }
	    });

	    _this2.searchText = new _SearchText2.default({
	      onSearch: function onSearch(value) {
	        _this.roleList.filter(value);
	      }
	    });
	    return _this2;
	  }

	  _createClass(RolePage, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var table = $('<table style="height: 100%; width: 100%; "></table>');
	      var tr = $('<tr></tr>');
	      var td = $('<td colspan="2" style="padding: 10px; padding-bottom: 5px; height: 20px; "></td>');
	      table.appendTo(container);
	      tr.appendTo(table);
	      td.appendTo(tr);
	      td.html('<span class="page-title">' + this.title + '</span>');

	      tr = $('<tr></tr>');
	      td = $('<td style="padding-left: 10px; height: 20px; width: 30px;"></td>');
	      tr.appendTo(table);
	      td.appendTo(tr);
	      this.addRoleButton.render(td);

	      td = $('<td style=""></td>');
	      td.appendTo(tr);
	      this.searchText.render(td);

	      tr = $('<tr></tr>');
	      td = $('<td colspan="2" style=""></td>');
	      tr.appendTo(table);
	      td.appendTo(tr);

	      this.roleList.render(td);
	    }
	  }]);

	  return RolePage;
	}(_Component3.default);

	exports.default = RolePage;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button(options) {
	    _classCallCheck(this, Button);

	    var _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, options));

	    _this2.onClick = options.onClick;

	    if (options.title) {
	      _this2.title = options.title;
	    } else {
	      _this2.title = '';
	    }

	    return _this2;
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;

	      var buttonContainer = $('<input type="button" />');
	      buttonContainer.attr('id', this.id);
	      buttonContainer.attr('value', this.title);
	      buttonContainer.appendTo(container);

	      buttonContainer.jqxButton(this.jqxOptions);

	      if (this.onClick) {
	        $('#' + this.id).on('click', function () {
	          _this.onClick();
	        });
	      }
	    }
	  }]);

	  return Button;
	}(_Component3.default);

	exports.default = Button;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _TextBox = __webpack_require__(9);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchText = function (_Component) {
	  _inherits(SearchText, _Component);

	  function SearchText(options) {
	    _classCallCheck(this, SearchText);

	    var _this2 = _possibleConstructorReturn(this, (SearchText.__proto__ || Object.getPrototypeOf(SearchText)).call(this, options));

	    var _this = _this2;

	    _this2.searchTextBox = new _TextBox2.default({
	      jqxOptions: { placeHolder: 'Role Name', width: 250, height: 24 }
	    });

	    var jqxOptions = {
	      imgSrc: '/arlhb_assets/images/search.png',
	      width: 30,
	      height: 26
	    };
	    _this2.searchButton = new _Button2.default({
	      jqxOptions: jqxOptions,
	      onClick: function onClick() {
	        if (options.onSearch) {
	          options.onSearch(_this.searchTextBox.getValue());
	        }
	      }
	    });

	    return _this2;
	  }

	  _createClass(SearchText, [{
	    key: 'render',
	    value: function render(container) {

	      var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
	      var innerTr = $('<tr></tr>');
	      var innerTd = $('<td style="width: 50px; height: 100%;"></td>');
	      innerTable.appendTo(container);
	      innerTr.appendTo(innerTable);
	      innerTd.appendTo(innerTr);
	      this.searchTextBox.render(innerTd);

	      innerTd = $('<td style="height: 100%; "></td>');
	      var _tempContainer = $('<div style="margin-left: -5px;"></div>');
	      _tempContainer.appendTo(innerTd);
	      innerTd.appendTo(innerTr);
	      this.searchButton.render(_tempContainer);
	    }
	  }]);

	  return SearchText;
	}(_Component3.default);

	exports.default = SearchText;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextBox = function (_Component) {
	  _inherits(TextBox, _Component);

	  function TextBox(options) {
	    _classCallCheck(this, TextBox);

	    var _this = _possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call(this, options));

	    if (options.title) {
	      _this.title = options.title;
	    } else {
	      _this.title = 'Button';
	    }

	    _this.initialValue = options.value;
	    return _this;
	  }

	  _createClass(TextBox, [{
	    key: 'render',
	    value: function render(container) {
	      var textBoxContainer = $('<input type="text" />');
	      textBoxContainer.attr('id', this.id);
	      textBoxContainer.appendTo(container);

	      textBoxContainer.jqxInput(this.jqxOptions);

	      if (this.initialValue) {
	        textBoxContainer.val(this.initialValue);
	      }

	      this.component = textBoxContainer;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      if (this.component) {
	        return this.component.val();
	      } else {
	        return this.initialValue;
	      }
	    }
	  }]);

	  return TextBox;
	}(_Component3.default);

	exports.default = TextBox;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _DataGrid = __webpack_require__(11);

	var _DataGrid2 = _interopRequireDefault(_DataGrid);

	var _SearchHeader = __webpack_require__(12);

	var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RoleList = function (_Component) {
	  _inherits(RoleList, _Component);

	  function RoleList(options) {
	    _classCallCheck(this, RoleList);

	    var _this2 = _possibleConstructorReturn(this, (RoleList.__proto__ || Object.getPrototypeOf(RoleList)).call(this, options));

	    var _this = _this2;

	    var source = {
	      datatype: "json",
	      datafields: [{ name: 'roleId', type: 'int' }, { name: 'roleName', type: 'string' }, { name: 'description', type: 'string' }],
	      id: "roleId",
	      url: "/roles"
	    };

	    var onSearch = function onSearch(data) {
	      data['searchTxt'] = _this.searchTxt;
	      return data;
	    };

	    var onEditButtonClick = function onEditButtonClick(value) {
	      if (options.onEditButtonClick) {
	        options.onEditButtonClick(value.bounddata);
	      }
	    };

	    var jqxOptions = {
	      width: '100%',
	      height: '100%',
	      rowsheight: 40,
	      pageable: true,
	      altrows: true,
	      theme: 'metro',
	      virtualmode: true,
	      rendergridrows: function rendergridrows(params) {
	        return params.data;
	      },
	      columns: [{ text: 'Role Name', datafield: 'roleName', width: '30%' }, { text: 'Description', datafield: 'description', width: '40%' }, {
	        text: 'Actions',
	        datafield: 'actions',
	        width: '30%',
	        createwidget: function createwidget(row, column, value, htmlElement) {
	          var table = $('<table style="height: 100%; width: 100%; text-align: center;"></table>');
	          var tr = $('<tr></tr>');
	          var td = $('<td style="width: 50%;"></td>');
	          table.appendTo(htmlElement);
	          tr.appendTo(table);
	          td.appendTo(tr);

	          td = $('<td></td>');
	          td.appendTo(tr);
	          var button = $("<div style='margin: 5px;'>" + "Edit" + "</div>");
	          button.appendTo(td);
	          button.jqxButton({ theme: 'light', template: "success", width: 70 });
	          button.click(function (event) {
	            onEditButtonClick(row);
	          });

	          td = $('<td style="width: 50%;"></td>');
	          td.appendTo(tr);
	        },
	        initwidget: function initwidget(row, column, value, htmlElement) {
	          // var imgurl = '../../images/' + value.toLowerCase() + '.png';
	          // $(htmlElement).find('.buttonValue')[0].innerHTML = value;
	          // $(htmlElement).find('img')[0].src = imgurl;
	        }
	      }],
	      groups: []
	    };

	    _this2.dataGrid = new _DataGrid2.default({
	      source: source,
	      onSearch: onSearch,
	      jqxOptions: jqxOptions
	    });
	    return _this2;
	  }

	  _createClass(RoleList, [{
	    key: 'render',
	    value: function render(container) {
	      this.dataGrid.render(container);
	    }
	  }, {
	    key: 'filter',
	    value: function filter(value) {
	      this.searchTxt = value;
	      this.dataGrid.refresh();
	    }
	  }]);

	  return RoleList;
	}(_Component3.default);

	exports.default = RoleList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataGrid = function (_Component) {
	  _inherits(DataGrid, _Component);

	  function DataGrid(options) {
	    _classCallCheck(this, DataGrid);

	    var _this2 = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, options));

	    var _this = _this2;

	    _this2.source = options.source;
	    _this2.onSearch = options.onSearch;
	    _this2.onRowDoubleClick = options.onRowDoubleClick;

	    var dataAdapter = new $.jqx.dataAdapter(_this2.source, {
	      formatData: function formatData(data) {
	        if (_this.onSearch) {
	          return _this.onSearch(data);
	        } else {
	          return data;
	        }
	      },
	      downloadComplete: function downloadComplete(data, status, xhr) {
	        if (!_this.source.totalRecords) {
	          _this.source.totalRecords = data.totalRecords;
	        }
	      }

	    });
	    _this2.jqxOptions['source'] = dataAdapter;
	    _this2.jqxOptions['altrows'] = true;
	    _this2.jqxOptions['columnsresize'] = true;
	    _this2.jqxOptions['pagesizeoptions'] = ['20', '50', '100'];
	    _this2.jqxOptions['pagesize'] = '20';
	    return _this2;
	  }

	  _createClass(DataGrid, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;

	      var dataGridContainer = $('<div style="width: 100%; height: 100%"></div>');
	      dataGridContainer.appendTo(container);
	      dataGridContainer.jqxGrid(this.jqxOptions);

	      if (this.onRowDoubleClick) {
	        dataGridContainer.on('rowdoubleclick', function (event) {
	          var args = event.args;
	          var rowIndex = args.rowindex;
	          var data = dataGridContainer.jqxGrid('getrowdata', rowIndex);
	          _this.onRowDoubleClick(data);
	        });
	      }

	      this.dataGridContainer = dataGridContainer;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.dataGridContainer.jqxGrid('gotopage', 0);
	      this.dataGridContainer.jqxGrid('updatebounddata');
	    }
	  }, {
	    key: 'addGroup',
	    value: function addGroup(groupName) {
	      this.dataGridContainer.jqxGrid('addgroup', groupName);
	    }
	  }]);

	  return DataGrid;
	}(_Component3.default);

	exports.default = DataGrid;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _TextBox = __webpack_require__(9);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchHeader = function (_Component) {
	  _inherits(SearchHeader, _Component);

	  function SearchHeader(options) {
	    _classCallCheck(this, SearchHeader);

	    var _this = _possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this, options));

	    var jqxOptions = { placeHolder: 'Role Name', width: 250, height: 24 };
	    _this.searchTextBox = new _TextBox2.default({
	      jqxOptions: jqxOptions
	    });

	    var jqxOptions = {
	      imgSrc: '/arlhb_assets/images/search.png',
	      width: 30,
	      height: 26
	    };
	    _this.searchButton = new _Button2.default({
	      jqxOptions: jqxOptions,
	      onClick: function onClick() {
	        if (options.onSearchButtonClick) {
	          options.onSearchButtonClick(e);
	        }
	      }
	    });

	    _this.addRoleButton = new _Button2.default({
	      title: 'Add Role',
	      height: 26,
	      onClick: function onClick(e) {
	        if (options.onAddButtonClick) {
	          options.onAddButtonClick(e);
	        }
	      },
	      jqxOptions: {
	        theme: 'light',
	        template: 'primary'
	      }
	    });

	    return _this;
	  }

	  _createClass(SearchHeader, [{
	    key: 'render',
	    value: function render(container) {

	      var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
	      var innerTr = $('<tr></tr>');
	      var innerTd = $('<td style="padding-top: 6px; padding-left: 10px; padding-right: 8px; width: 50px; height: 100%;"></td>');
	      innerTable.appendTo(container);
	      innerTr.appendTo(innerTable);
	      innerTd.appendTo(innerTr);
	      this.addRoleButton.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; width: 200px; height: 100%;"></td>');
	      innerTd.appendTo(innerTr);
	      this.searchTextBox.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; height: 100%; "></td>');
	      var _tempContainer = $('<div style="margin-left: -5px;"></div>');
	      _tempContainer.appendTo(innerTd);
	      innerTd.appendTo(innerTr);
	      this.searchButton.render(_tempContainer);
	    }
	  }]);

	  return SearchHeader;
	}(_Component3.default);

	exports.default = SearchHeader;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _AddWindow = __webpack_require__(15);

	var _AddWindow2 = _interopRequireDefault(_AddWindow);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _RoleForm = __webpack_require__(19);

	var _RoleForm2 = _interopRequireDefault(_RoleForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddRoleWindow = function (_Component) {
	  _inherits(AddRoleWindow, _Component);

	  function AddRoleWindow(options) {
	    _classCallCheck(this, AddRoleWindow);

	    var _this2 = _possibleConstructorReturn(this, (AddRoleWindow.__proto__ || Object.getPrototypeOf(AddRoleWindow)).call(this, options));

	    var _this = _this2;

	    var roleForm = new _RoleForm2.default({ onSaveSuccess: options.onSaveSuccess });

	    var jqxOptions = {
	      width: 430,
	      height: 430
	    };

	    _this2.window = new _AddWindow2.default({
	      title: 'Add Role',
	      content: roleForm,
	      onSave: function onSave() {
	        roleForm.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      },
	      jqxOptions: jqxOptions
	    });

	    return _this2;
	  }

	  _createClass(AddRoleWindow, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;
	      this.window.render(container);
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.window.open();
	    }
	  }]);

	  return AddRoleWindow;
	}(_Component3.default);

	exports.default = AddRoleWindow;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_Component) {
	  _inherits(Form, _Component);

	  function Form(options) {
	    _classCallCheck(this, Form);

	    var _this2 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, options));

	    _this2.items = options.items;
	    _this2.onValidationSuccess = options.onValidationSuccess;
	    _this2.labelColumnWidth = options.labelColumnWidth;
	    _this2.contentColumnWidth = options.contentColumnWidth;
	    return _this2;
	  }

	  _createClass(Form, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      this.formItems = [];

	      var validationRules = [];
	      var form = $('<form></form>');
	      form.appendTo(container);
	      var table = $('<table style="width: 100%;"></table>');
	      table.appendTo(form);
	      for (var i = 0; i < this.items.length; i++) {
	        var tr = $('<tr></tr>');
	        tr.appendTo(table);

	        var td = $('<td></td>');
	        td.appendTo(tr);
	        td.css('padding-top', '5px');
	        td.css('padding-bottom', '5px');
	        if (this.labelColumnWidth) {
	          td.css('width', this.labelColumnWidth);
	        }

	        var label = $('<span>' + this.items[i].label + '</span>');
	        label.appendTo(td);

	        td = $('<td></td>');
	        td.appendTo(tr);
	        td.css('padding-top', '3px');
	        td.css('padding-bottom', '3px');
	        if (this.contentColumnWidth) {
	          td.css('width', this.contentColumnWidth);
	        }

	        this.items[i].content.render(td);
	        this.formItems.push({
	          name: this.items[i].name,
	          content: this.items[i].content
	        });

	        var content = this.items[i].content;
	        var contentId = content.getId();

	        var itemValidation = this.items[i].validation;
	        if (itemValidation) {
	          if (itemValidation.type == 'COMBOBOX') {
	            if (itemValidation.rule == 'required') {

	              //---Closure
	              (function f() {

	                var closureContent = content;
	                validationRules.push({
	                  input: '#' + contentId,
	                  message: 'Wajib diisi',
	                  action: 'select', rule: function rule(input) {
	                    var value = closureContent.getValue();
	                    if (value == null || value == '') {
	                      return false;
	                    } else {
	                      return true;
	                    }
	                  }
	                });
	              })();
	              //----------
	            }
	          } else {
	            if (itemValidation.rule == 'required') {
	              validationRules.push({ input: '#' + contentId, message: 'Wajib diisi', action: 'keyup, blur', rule: 'required' });
	            }
	          }
	        }
	      }

	      form.jqxValidator({
	        rules: validationRules
	      });

	      form.on('validationSuccess', function () {
	        if (_this.onValidationSuccess) {
	          var formValues = {};
	          for (var i = 0; i < _this.formItems.length; i++) {
	            formValues[_this.formItems[i].name] = _this.formItems[i].content.getValue();
	          }
	          _this.onValidationSuccess(formValues);
	        }
	      });

	      this.form = form;
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      this.form.jqxValidator('validate');
	    }
	  }]);

	  return Form;
	}(_Component3.default);

	exports.default = Form;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _ModalWindow2 = __webpack_require__(16);

	var _ModalWindow3 = _interopRequireDefault(_ModalWindow2);

	var _Label = __webpack_require__(18);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddWindow = function (_ModalWindow) {
	  _inherits(AddWindow, _ModalWindow);

	  function AddWindow(options) {
	    _classCallCheck(this, AddWindow);

	    var _this = _possibleConstructorReturn(this, (AddWindow.__proto__ || Object.getPrototypeOf(AddWindow)).call(this, options));

	    if (options.content) {
	      _this.content = options.content;
	    } else {
	      _this.content = new _Label2.default({ text: 'No Content' });
	    }

	    _this.saveButton = new _Button2.default({
	      title: 'Save',
	      onClick: function onClick() {
	        if (options.onSave) {
	          options.onSave();
	        }
	      },
	      jqxOptions: {
	        theme: 'light',
	        template: 'success'
	      }
	    });

	    _this.cancelButton = new _Button2.default({
	      title: 'Cancel',
	      onClick: function onClick() {
	        if (options.onCancel) {
	          options.onCancel();
	        }
	      },
	      jqxOptions: {
	        theme: 'light',
	        template: 'default'
	      }
	    });

	    return _this;
	  }

	  _createClass(AddWindow, [{
	    key: 'appendWindowContentChild',
	    value: function appendWindowContentChild(windowContent) {
	      var table = $('<table style="height: 100%; width: 100%;"></table>');
	      var tr = $('<tr></tr>');
	      var td = $('<td></td>');
	      table.appendTo(windowContent);
	      tr.appendTo(table);
	      td.appendTo(tr);
	      this.content.render(td);

	      tr = $('<tr></tr>');
	      td = $('<td></td>');
	      tr.appendTo(table);
	      td.appendTo(tr);

	      var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
	      var innerTr = $('<tr></tr>');
	      var innerTd = $('<td style="width: 90%;"></td>');
	      innerTable.appendTo(td);
	      innerTr.appendTo(innerTable);
	      innerTd.appendTo(innerTr);

	      innerTd = $('<td></td>');
	      innerTd.appendTo(innerTr);
	      this.cancelButton.render(innerTd);

	      innerTd = $('<td></td>');
	      innerTd.appendTo(innerTr);
	      this.saveButton.render(innerTd);
	    }
	  }]);

	  return AddWindow;
	}(_ModalWindow3.default);

	exports.default = AddWindow;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _Window2 = __webpack_require__(17);

	var _Window3 = _interopRequireDefault(_Window2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalWindow = function (_Window) {
	  _inherits(ModalWindow, _Window);

	  function ModalWindow(options) {
	    _classCallCheck(this, ModalWindow);

	    var _this = _possibleConstructorReturn(this, (ModalWindow.__proto__ || Object.getPrototypeOf(ModalWindow)).call(this, options));

	    _this.jqxOptions['isModal'] = true;
	    _this.jqxOptions['autoOpen'] = false;
	    return _this;
	  }

	  return ModalWindow;
	}(_Window3.default);

	exports.default = ModalWindow;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Window = function (_Component) {
	  _inherits(Window, _Component);

	  function Window(options) {
	    _classCallCheck(this, Window);

	    var _this2 = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, options));

	    if (options.title) {
	      _this2.title = options.title;
	    } else {
	      _this2.title = '';
	    }

	    return _this2;
	  }

	  _createClass(Window, [{
	    key: 'appendWindowContentChild',
	    value: function appendWindowContentChild(windowContent) {}
	  }, {
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var windowContainer = $('<div></div>');
	      windowContainer.appendTo(container);

	      windowContainer.attr('id', this.id);

	      var windowTitle = $('<div class="window-title">' + this.title + '</div>');
	      windowTitle.appendTo(windowContainer);

	      var windowContent = $('<div></div>');
	      windowContent.appendTo(windowContainer);

	      this.appendWindowContentChild(windowContent);

	      windowContainer.jqxWindow(this.jqxOptions);

	      windowContainer.on('close', function (event) {
	        windowContainer.jqxWindow('destroy');
	      });

	      this.windowContainer = windowContainer;
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      return this.id;
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.windowContainer.jqxWindow('open');
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.windowContainer.jqxWindow('close');
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.windowContainer.jqxWindow('destroy');
	    }
	  }]);

	  return Window;
	}(_Component3.default);

	exports.default = Window;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = function (_Component) {
	  _inherits(Label, _Component);

	  function Label(options) {
	    _classCallCheck(this, Label);

	    var _this2 = _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, options));

	    _this2.text = options.text;
	    _this2.bold = options.bold;
	    return _this2;
	  }

	  _createClass(Label, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var labelContainer = $('<span>' + this.text + '</span>');
	      labelContainer.appendTo(container);
	      if (this.bold) {
	        labelContainer.css('font-weight', 'bold');
	      }
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      return this.id;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.text;
	    }
	  }]);

	  return Label;
	}(_Component3.default);

	exports.default = Label;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _AddWindow = __webpack_require__(15);

	var _AddWindow2 = _interopRequireDefault(_AddWindow);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _TextBox = __webpack_require__(9);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _TextArea = __webpack_require__(20);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Label = __webpack_require__(18);

	var _Label2 = _interopRequireDefault(_Label);

	var _AuthoritiesTree = __webpack_require__(21);

	var _AuthoritiesTree2 = _interopRequireDefault(_AuthoritiesTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RoleForm = function (_Component) {
	  _inherits(RoleForm, _Component);

	  function RoleForm(options) {
	    _classCallCheck(this, RoleForm);

	    var _this2 = _possibleConstructorReturn(this, (RoleForm.__proto__ || Object.getPrototypeOf(RoleForm)).call(this, options));

	    var _this = _this2;

	    var role = {};

	    if (options.data) {
	      role = options.data;
	    }
	    _this2.onSaveSuccess = options.onSaveSuccess;

	    var roleNameTextBox = new _TextBox2.default({
	      value: role.roleName,
	      jqxOptions: {
	        height: 25,
	        width: 270
	      }
	    });
	    var roleDescriptionTextArea = new _TextArea2.default({
	      value: role.description,
	      jqxOptions: {
	        height: 70,
	        width: 275
	      }
	    });

	    var data = [{ label: "Item 1", expanded: true, items: [{ label: "Item 1.1" }, { label: "Item 1.2", selected: true }]
	    }];
	    var checkBoxTree = new _AuthoritiesTree2.default({});

	    var formItems = [{
	      name: 'roleName',
	      label: 'Role Name',
	      content: roleNameTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'roleDescription',
	      label: 'Role Description',
	      content: roleDescriptionTextArea,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'authorities',
	      label: 'Authorities',
	      content: checkBoxTree
	    }];
	    var formOptions = {
	      items: formItems,
	      labelColumnWidth: '120px',
	      onValidationSuccess: function onValidationSuccess(formValue) {

	        console.log(formValue);
	        // $.ajax({
	        //       method: "POST",
	        //       url: "/roles",
	        //       data: JSON.stringify(formValue),
	        //       beforeSend: function(xhr){
	        //         xhr.setRequestHeader('Accept', 'application/json');
	        //         xhr.setRequestHeader('Content-Type', 'application/json');
	        //       }
	        //     }).done(function() {
	        //         $("#successNotification").jqxNotification("open");
	        //         _this.window.close();
	        //         if(_this.onSaveSuccess){
	        //           _this.onSaveSuccess();
	        //         }
	        //     }).fail(function( jqXHR, textStatus, errorThrown) {
	        //         var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	        //         $("#errorNotification").html('<div>' + errorMessage + '</div>');
	        //         $("#errorNotification").jqxNotification("open");
	        //     });
	      }
	    };

	    _this2.form = new _Form2.default(formOptions);

	    return _this2;
	  }

	  _createClass(RoleForm, [{
	    key: 'render',
	    value: function render(container) {
	      this.form.render(container);
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      this.form.validate();
	    }
	  }]);

	  return RoleForm;
	}(_Component3.default);

	exports.default = RoleForm;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextArea = function (_Component) {
	  _inherits(TextArea, _Component);

	  function TextArea(options) {
	    _classCallCheck(this, TextArea);

	    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, options));

	    _this.initialValue = options.value;
	    return _this;
	  }

	  _createClass(TextArea, [{
	    key: 'render',
	    value: function render(container) {
	      var textAreaContainer = $('<textarea></textarea>');
	      textAreaContainer.attr('id', this.id);
	      textAreaContainer.appendTo(container);

	      textAreaContainer.jqxInput(this.jqxOptions);

	      if (this.initialValue) {
	        textAreaContainer.val(this.initialValue);
	      }

	      this.component = textAreaContainer;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.component.val();
	    }
	  }]);

	  return TextArea;
	}(_Component3.default);

	exports.default = TextArea;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _CheckBoxTree = __webpack_require__(22);

	var _CheckBoxTree2 = _interopRequireDefault(_CheckBoxTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthoritiesTree = function (_Component) {
	  _inherits(AuthoritiesTree, _Component);

	  function AuthoritiesTree(options) {
	    _classCallCheck(this, AuthoritiesTree);

	    var _this2 = _possibleConstructorReturn(this, (AuthoritiesTree.__proto__ || Object.getPrototypeOf(AuthoritiesTree)).call(this, options));

	    var _this = _this2;

	    _this2.data = [];

	    _this2.checkBoxTree = new _CheckBoxTree2.default({
	      data: _this2.data,
	      jqxOptions: {
	        height: 200,
	        width: 275
	      }
	    });

	    return _this2;
	  }

	  _createClass(AuthoritiesTree, [{
	    key: 'render',
	    value: function render(container) {
	      this.checkBoxTree.render(container);
	      this.loadAuthorities();
	    }
	  }, {
	    key: 'loadAuthorities',
	    value: function loadAuthorities() {
	      var _this = this;

	      var url = "/user/authorities";
	      $.ajax({
	        method: "GET",
	        url: url,
	        data: {}
	      }).done(function (data) {
	        var _convertedToHierarchical = _this._convertArray(data);
	        _this.checkBoxTree.refreshData(_convertedToHierarchical);
	      }).fail(function () {
	        var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	        $("#errorNotification").html('<div>' + errorMessage + '</div>');
	        $("#errorNotification").jqxNotification("open");
	      });
	    }
	  }, {
	    key: '_convertArray',
	    value: function _convertArray(array) {

	      var map = {};
	      for (var i = 0; i < array.length; i++) {
	        var obj = array[i];
	        obj.items = [];

	        map[obj.id] = obj;

	        var parent = obj.parentId || '-';
	        if (!map[parent]) {
	          map[parent] = {
	            items: []
	          };
	        }
	        map[parent].items.push(obj);
	      }
	      return map['-'].items;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.checkBoxTree.getValue();
	    }
	  }]);

	  return AuthoritiesTree;
	}(_Component3.default);

	exports.default = AuthoritiesTree;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tree2 = __webpack_require__(23);

	var _Tree3 = _interopRequireDefault(_Tree2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckBoxTree = function (_Tree) {
	  _inherits(CheckBoxTree, _Tree);

	  function CheckBoxTree(options) {
	    _classCallCheck(this, CheckBoxTree);

	    var _this = _possibleConstructorReturn(this, (CheckBoxTree.__proto__ || Object.getPrototypeOf(CheckBoxTree)).call(this, options));

	    _this.jqxOptions['hasThreeStates'] = true;
	    _this.jqxOptions['checkboxes'] = true;
	    return _this;
	  }

	  _createClass(CheckBoxTree, [{
	    key: 'getValue',
	    value: function getValue() {
	      return this.treeContainer.jqxTree('getCheckedItems');
	    }
	  }]);

	  return CheckBoxTree;
	}(_Tree3.default);

	exports.default = CheckBoxTree;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = function (_Component) {
	  _inherits(Tree, _Component);

	  function Tree(options) {
	    _classCallCheck(this, Tree);

	    var _this2 = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));

	    _this2.data = options.data;
	    _this2.onClick = options.onClick;
	    return _this2;
	  }

	  _createClass(Tree, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var treeContainer = $('<div></div>');
	      treeContainer.appendTo(container);

	      this.jqxOptions['source'] = this.data;
	      treeContainer.jqxTree(this.jqxOptions);

	      treeContainer.on('itemClick', function (event) {
	        var args = event.args;
	        var item = treeContainer.jqxTree('getItem', args.element);
	        if (_this.onClick) {
	          _this.onClick(item);
	        }
	      });

	      this.treeContainer = treeContainer;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.treeContainer.jqxTree('refresh');
	    }
	  }, {
	    key: 'refreshData',
	    value: function refreshData(data) {
	      this.treeContainer.jqxTree({ source: data });
	    }
	  }]);

	  return Tree;
	}(_Component3.default);

	exports.default = Tree;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _AddWindow = __webpack_require__(15);

	var _AddWindow2 = _interopRequireDefault(_AddWindow);

	var _Component2 = __webpack_require__(5);

	var _Component3 = _interopRequireDefault(_Component2);

	var _RoleForm = __webpack_require__(19);

	var _RoleForm2 = _interopRequireDefault(_RoleForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditRoleWindow = function (_Component) {
	  _inherits(EditRoleWindow, _Component);

	  function EditRoleWindow(options) {
	    _classCallCheck(this, EditRoleWindow);

	    var _this2 = _possibleConstructorReturn(this, (EditRoleWindow.__proto__ || Object.getPrototypeOf(EditRoleWindow)).call(this, options));

	    var _this = _this2;

	    var roleForm = new _RoleForm2.default({
	      data: options.data,
	      onSaveSuccess: options.onSaveSuccess
	    });

	    var jqxOptions = {
	      width: 430,
	      height: 430
	    };

	    _this2.window = new _AddWindow2.default({
	      title: 'Edit Role',
	      content: roleForm,
	      onSave: function onSave() {
	        roleForm.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      },
	      jqxOptions: jqxOptions
	    });

	    return _this2;
	  }

	  _createClass(EditRoleWindow, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;
	      this.window.render(container);
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.window.open();
	    }
	  }]);

	  return EditRoleWindow;
	}(_Component3.default);

	exports.default = EditRoleWindow;

/***/ }
/******/ ]);