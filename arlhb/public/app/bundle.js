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

	var _NavigationBar = __webpack_require__(2);

	var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

	var _Splitter = __webpack_require__(4);

	var _Splitter2 = _interopRequireDefault(_Splitter);

	var _Tree = __webpack_require__(5);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _Menu = __webpack_require__(6);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Tabs = __webpack_require__(7);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _UserList = __webpack_require__(9);

	var _UserList2 = _interopRequireDefault(_UserList);

	var _RoleList = __webpack_require__(20);

	var _RoleList2 = _interopRequireDefault(_RoleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var splitter = new _Splitter2.default();
	splitter.render($('#content-inside'));

	var data = [{
	  label: "Security",
	  expanded: true,
	  items: [{
	    id: 'role_list',
	    label: "Roles",
	    selected: true
	  }]
	}, {
	  label: "Report",
	  expanded: true,
	  items: [{
	    id: 'report1',
	    label: "Report 1"
	  }]
	}];

	var tree = new _Tree2.default({
	  data: data,
	  onClick: function onClick(item) {

	    if (!tabs.selectTabByTitle(item.label)) {
	      if (item.id == 'role_list') {
	        tabs.add(item.id, item.label, roleList);
	      }
	    }
	  }
	});

	var menu = new _Menu2.default({
	  data: (0, _ApplicationData.getMenuData)(),
	  onClick: function onClick(id) {

	    var label = '';

	    if (id == '58') {
	      label = 'Roles';
	    } else if (id == '59') {
	      label = 'User';
	    }

	    if (!tabs.selectTabByTitle(label)) {
	      if (id == '58') {
	        tabs.add(id, label, roleList);
	      } else if (id == '59') {
	        tabs.add(id, label, userList);
	      }
	    }
	  }

	});
	menu.render($('#top-menu'));

	var userList = new _UserList2.default();
	var roleList = new _RoleList2.default();

	var navigationBar = new _NavigationBar2.default([{
	  title: 'Application',
	  content: tree
	}, {
	  title: 'Settings'
	}]);
	navigationBar.render($('#left-content'));

	// var workspaceView = new WorkspaceView();

	var tabs = new _Tabs2.default([{
	  id: 'role_list',
	  title: 'Roles',
	  content: roleList
	}]);

	tabs.render($('#right-content'));

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavigationBar = function () {
	  function NavigationBar(items) {
	    _classCallCheck(this, NavigationBar);

	    this.id = (0, _Utils.guid)();
	    this.items = items;
	  }

	  _createClass(NavigationBar, [{
	    key: 'render',
	    value: function render(container) {
	      var navigationBarContainer = $('<div></div>');
	      navigationBarContainer.attr('id', this.id);
	      for (var i = 0; i < this.items.length; i++) {

	        var title = $('<div>' + this.items[i].title + '</div>');
	        title.appendTo(navigationBarContainer);

	        var contentContainer = $('<div></div>');
	        contentContainer.appendTo(navigationBarContainer);

	        if (this.items[i].content) {
	          this.items[i].content.render(contentContainer);
	        }
	      }
	      navigationBarContainer.appendTo(container);

	      navigationBarContainer.jqxNavigationBar({
	        theme: 'metro',
	        width: '101%',
	        height: '100%'
	      });
	    }
	  }]);

	  return NavigationBar;
	}();

	exports.default = NavigationBar;

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Splitter = function () {
	  function Splitter() {
	    _classCallCheck(this, Splitter);

	    this.id = (0, _Utils.guid)();
	  }

	  _createClass(Splitter, [{
	    key: 'render',
	    value: function render(container) {
	      container.jqxSplitter({ theme: 'metro', width: '100%', height: '100%', panels: [{ size: 200 }] });
	    }
	  }]);

	  return Splitter;
	}();

	exports.default = Splitter;

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

	var Tree = function () {
	  function Tree(options) {
	    _classCallCheck(this, Tree);

	    this.id = (0, _Utils.guid)();
	    this.source = options.data;
	    this.onClick = options.onClick;
	  }

	  _createClass(Tree, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var treeContainer = $('<div></div>');
	      treeContainer.appendTo(container);
	      treeContainer.jqxTree({
	        theme: 'metro',
	        // source: this.records,
	        source: this.source,
	        width: '100%',
	        height: '100%'
	      });

	      treeContainer.on('itemClick', function (event) {
	        var args = event.args;
	        var item = treeContainer.jqxTree('getItem', args.element);
	        if (_this.onClick) {
	          _this.onClick(item);
	        }
	      });
	    }
	  }]);

	  return Tree;
	}();

	exports.default = Tree;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function () {
	  function Menu(options) {
	    _classCallCheck(this, Menu);

	    this.id = (0, _Utils.guid)();
	    this.data = options.data;
	    this.onClick = options.onClick;
	  }

	  _createClass(Menu, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var source = {
	        datatype: "json",
	        datafields: [{ name: 'id' }, { name: 'parentid' }, { name: 'text' }, { name: 'subMenuWidth' }],
	        id: 'id',
	        localdata: _this.data
	      };

	      var dataAdapter = new $.jqx.dataAdapter(source);
	      dataAdapter.dataBind();

	      var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);

	      var menuContainer = $('<div></div>');
	      menuContainer.appendTo(container);
	      menuContainer.jqxMenu({
	        theme: 'metro',
	        source: records,
	        width: '100%',
	        height: '100%'
	      });

	      menuContainer.on('itemclick', function (event) {
	        var args = event.args;
	        if (_this.onClick) {
	          _this.onClick(args.id);
	        }
	      });
	    }
	  }]);

	  return Menu;
	}();

	exports.default = Menu;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tabs = function () {
	  function Tabs(items) {
	    _classCallCheck(this, Tabs);

	    this.id = (0, _Utils.guid)();
	    this.items = items;
	  }

	  _createClass(Tabs, [{
	    key: 'render',
	    value: function render(container) {
	      var tabContainer = $('<div style="margin-top: -1px;"></div>');
	      tabContainer.appendTo(container);
	      tabContainer.attr('id', this.id);
	      var ul = $('<ul></ul>');
	      ul.appendTo(tabContainer);

	      for (var i = 0; i < this.items.length; i++) {

	        var title = $('<li>' + this.items[i].title + '</li>');
	        title.appendTo(ul);
	      }

	      var tempContainer = [];
	      for (var i = 0; i < this.items.length; i++) {

	        var contentContainer = $('<div></div>');
	        contentContainer.appendTo(tabContainer);
	        tempContainer.push(contentContainer);
	      }

	      tabContainer.jqxTabs({
	        theme: 'metro',
	        position: 'top',
	        showCloseButtons: true,
	        width: '100%',
	        height: '100.5%'
	      });

	      for (var i = 0; i < this.items.length; i++) {

	        if (this.items[i].content) {
	          this.items[i].content.render(tempContainer[i]);
	        }
	      }

	      this.component = tabContainer;
	    }
	  }, {
	    key: 'add',
	    value: function add(childTabId, title, content) {

	      var id = this.id + '_' + childTabId;
	      var _contentContainer = '<div id="' + id + '" style="height: 100%;"></div>';
	      this.component.jqxTabs('addLast', title, _contentContainer);

	      content.render($('#' + id));
	    }
	  }, {
	    key: 'selectTabByTitle',
	    value: function selectTabByTitle(title) {
	      var tabFound = false;
	      var tabsLength = this.component.jqxTabs('length');

	      for (var i = 0; i < tabsLength; i++) {
	        var tabTitle = this.component.jqxTabs('getTitleAt', i);
	        if (title == tabTitle) {
	          tabFound = true;
	          this.component.jqxTabs('select', i);
	          break;
	        }
	      }

	      return tabFound;
	    }
	  }]);

	  return Tabs;
	}();

	exports.default = Tabs;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Button = function () {
	  function Button(options) {
	    _classCallCheck(this, Button);

	    this.id = (0, _Utils.guid)();
	    this.onClick = options.onClick;

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = '';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    if (options.imgSrc) {
	      this.imgSrc = options.imgSrc;
	    }

	    this.template = options.template;
	    this.theme = options.theme;
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;

	      var buttonContainer = $('<input type="button" value="' + this.title + '" />');
	      buttonContainer.attr('id', this.id);
	      buttonContainer.appendTo(container);

	      var buttonOptions = {
	        theme: 'light'
	      };

	      if (this.template) {
	        buttonOptions['template'] = this.template;
	      }

	      if (this.theme) {
	        buttonOptions['theme'] = this.theme;
	      }

	      if (this.width) {
	        buttonOptions['width'] = this.width;
	      }

	      if (this.height) {
	        buttonOptions['height'] = this.height;
	      }

	      if (this.imgSrc) {
	        buttonOptions['imgSrc'] = this.imgSrc;
	      }

	      buttonContainer.jqxButton(buttonOptions);

	      if (this.onClick) {
	        $('#' + this.id).on('click', function () {
	          _this.onClick();
	        });
	      }
	    }
	  }]);

	  return Button;
	}();

	exports.default = Button;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _ToggleButton = __webpack_require__(10);

	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _DataGrid = __webpack_require__(12);

	var _DataGrid2 = _interopRequireDefault(_DataGrid);

	var _AddUserWindow = __webpack_require__(13);

	var _AddUserWindow2 = _interopRequireDefault(_AddUserWindow);

	var _EditUserWindow = __webpack_require__(18);

	var _EditUserWindow2 = _interopRequireDefault(_EditUserWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserList = function () {
	  function UserList() {
	    _classCallCheck(this, UserList);

	    this.id = (0, _Utils.guid)();
	  }

	  _createClass(UserList, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var url = "/users";

	      var source = {
	        datatype: "json",
	        datafields: [{ name: 'id', type: 'int' }, { name: 'firstName', type: 'string' }, { name: 'lastName', type: 'string' }, { name: 'status', type: 'String' }, { name: 'depo', type: 'string' }, { name: 'time', type: 'date' }, { name: 'role', type: 'date' }],
	        id: "id",
	        url: url
	      };

	      var onSearch = function onSearch(data) {
	        data['searchTxt'] = searchTextBox.getValue();
	        return data;
	      };

	      var columnWidth = 100 / 7 + '%';

	      var dataGridOptions = {
	        width: '100%',
	        height: '100%',
	        pageable: true,
	        altrows: true,
	        theme: 'metro',
	        virtualmode: true,
	        rendergridrows: function rendergridrows(params) {
	          return params.data;
	        },
	        columns: [{ text: 'id', datafield: 'id', width: columnWidth }, { text: 'First Name', datafield: 'firstName', width: columnWidth }, { text: 'Last Name', datafield: 'lastName', width: columnWidth }, { text: 'Status', datafield: 'status', width: columnWidth }, { text: 'Depo', datafield: 'depo', width: columnWidth }, { text: 'Time', datafield: 'time', width: columnWidth }, { text: 'Role', datafield: 'role', width: columnWidth }],
	        groups: []
	      };

	      this.dataGrid = new _DataGrid2.default({
	        source: source,
	        onSearch: onSearch,
	        onRowDoubleClick: function onRowDoubleClick(data) {
	          var editUserWindow = new _EditUserWindow2.default({
	            data: data,
	            onSaveSuccess: function onSaveSuccess() {
	              _this.dataGrid.refresh();
	            }
	          });
	          editUserWindow.render($('#dialogWindowContainer'));
	          editUserWindow.open();
	        },
	        dataGridOptions: dataGridOptions
	      });

	      var searchTextBox = new _TextBox2.default({ placeHolder: 'Kode atau Nama', width: 250, height: 24 });
	      var searchButton = new _Button2.default({
	        imgSrc: '/arlhb_assets/images/search.png',
	        theme: 'metro',
	        width: 30,
	        height: 26,
	        onClick: function onClick() {
	          _this.dataGrid.refresh();
	        }
	      });

	      var addUserButton = new _Button2.default({
	        title: 'Tambah Proyek',
	        template: 'primary',
	        height: 26,
	        onClick: function onClick() {
	          var addUserWindow = new _AddUserWindow2.default({
	            onSaveSuccess: function onSaveSuccess() {
	              _this.dataGrid.refresh();
	            }
	          });
	          addUserWindow.render($('#dialogWindowContainer'));
	          addUserWindow.open();
	        }
	      });

	      var table = $('<table style="height: 100%; width: 100%; margin: -3px; "></table>');
	      var tr = $('<tr></tr>');
	      var td = $('<td style="padding: 0; height: 40px;"></td>');
	      table.appendTo(container);
	      tr.appendTo(table);
	      td.appendTo(tr);

	      var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
	      var innerTr = $('<tr></tr>');
	      var innerTd = $('<td style="padding-top: 6px; padding-left: 10px; padding-right: 8px; width: 50px; height: 100%;"></td>');
	      innerTable.appendTo(td);
	      innerTr.appendTo(innerTable);
	      innerTd.appendTo(innerTr);
	      addUserButton.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; width: 200px; height: 100%;"></td>');
	      innerTd.appendTo(innerTr);
	      searchTextBox.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; height: 100%; "></td>');
	      var _tempContainer = $('<div style="margin-left: -5px;"></div>');
	      _tempContainer.appendTo(innerTd);
	      innerTd.appendTo(innerTr);
	      searchButton.render(_tempContainer);

	      tr = $('<tr></tr>');
	      td = $('<td style="padding: 0;"></td>');
	      tr.appendTo(table);
	      td.appendTo(tr);

	      this.dataGrid.render(td);
	    }
	  }]);

	  return UserList;
	}();

	exports.default = UserList;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToggleButton = function () {
	  function ToggleButton(options) {
	    _classCallCheck(this, ToggleButton);

	    this.id = (0, _Utils.guid)();

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = 'Button';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    this.onButtonToggled = options.onButtonToggled;
	    this.onButtonNotToggled = options.onButtonNotToggled;
	  }

	  _createClass(ToggleButton, [{
	    key: 'render',
	    value: function render(container) {
	      var buttonContainer = $('<button>' + this.title + '</button>');
	      buttonContainer.appendTo(container);

	      var buttonOptions = {
	        theme: 'light'
	      };

	      if (this.width) {
	        buttonOptions['width'] = this.width;
	      }

	      if (this.height) {
	        buttonOptions['height'] = this.height;
	      }

	      buttonContainer.jqxToggleButton(buttonOptions);

	      var _this = this;

	      buttonContainer.on('click', function () {
	        var toggled = buttonContainer.jqxToggleButton('toggled');
	        if (toggled) {
	          if (_this.onButtonToggled) {
	            _this.onButtonToggled();
	          }
	        } else {
	          if (_this.onButtonNotToggled) {
	            _this.onButtonNotToggled();
	          }
	        }
	      });
	    }
	  }]);

	  return ToggleButton;
	}();

	exports.default = ToggleButton;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextBox = function () {
	  function TextBox(options) {
	    _classCallCheck(this, TextBox);

	    this.id = (0, _Utils.guid)();

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = 'Button';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    this.placeHolder = options.placeHolder;

	    this.initialValue = options.value;
	  }

	  _createClass(TextBox, [{
	    key: 'render',
	    value: function render(container) {
	      var textBoxContainer = $('<input type="text" />');
	      textBoxContainer.attr('id', this.id);
	      textBoxContainer.appendTo(container);

	      var textBoxOptions = {
	        theme: 'metro'
	      };

	      if (this.width) {
	        textBoxOptions['width'] = this.width;
	      }

	      if (this.height) {
	        textBoxOptions['height'] = this.height;
	      }

	      if (this.placeHolder) {
	        textBoxOptions['placeHolder'] = this.placeHolder;
	      }

	      textBoxContainer.jqxInput(textBoxOptions);

	      if (this.initialValue) {
	        textBoxContainer.val(this.initialValue);
	      }

	      this.component = textBoxContainer;
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      return this.id;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.component.val();
	    }
	  }]);

	  return TextBox;
	}();

	exports.default = TextBox;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataGrid = function () {
	  function DataGrid(options) {
	    _classCallCheck(this, DataGrid);

	    this.id = (0, _Utils.guid)();
	    this.source = options.source;
	    this.onSearch = options.onSearch;
	    this.dataGridOptions = options.dataGridOptions;
	    this.onRowDoubleClick = options.onRowDoubleClick;
	  }

	  _createClass(DataGrid, [{
	    key: 'render',
	    value: function render(container) {
	      var _this = this;

	      var dataAdapter = new $.jqx.dataAdapter(this.source, {
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
	      this.dataGridOptions['source'] = dataAdapter;
	      this.dataGridOptions['altrows'] = true;
	      this.dataGridOptions['columnsresize'] = true;
	      this.dataGridOptions['pagesizeoptions'] = ['50', '100', '500'];
	      this.dataGridOptions['pagesize'] = '50';

	      var dataGridContainer = $('<div style="height: 100%"></div>');
	      dataGridContainer.appendTo(container);
	      dataGridContainer.jqxGrid(this.dataGridOptions);

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
	}();

	exports.default = DataGrid;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _AddWindow = __webpack_require__(15);

	var _AddWindow2 = _interopRequireDefault(_AddWindow);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _TextArea = __webpack_require__(16);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Label = __webpack_require__(17);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddUserWindow = function () {
	  function AddUserWindow(options) {
	    _classCallCheck(this, AddUserWindow);

	    var _this = this;

	    this.id = (0, _Utils.guid)();

	    var user = options.data;
	    this.onSaveSuccess = options.onSaveSuccess;

	    var codeTextBox = new _TextBox2.default({ height: 25, width: '90%' });
	    var nameTextBox = new _TextBox2.default({ height: 25, width: '90%' });
	    var descriptionTextBox = new _TextArea2.default({ height: 80, width: '92.5%' });

	    var formItems = [{
	      name: 'code',
	      label: 'Code',
	      content: codeTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'name',
	      label: 'Name',
	      content: nameTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'description',
	      label: 'Description',
	      content: descriptionTextBox
	    }];
	    var formOptions = {
	      items: formItems,
	      labelColumnWidth: '120px',
	      onValidationSuccess: function onValidationSuccess(formValue) {
	        $.ajax({
	          method: "POST",
	          url: "/users",
	          data: JSON.stringify(formValue),
	          beforeSend: function beforeSend(xhr) {
	            xhr.setRequestHeader('Accept', 'application/json');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	          }
	        }).done(function () {
	          $("#successNotification").jqxNotification("open");
	          _this.window.close();
	          if (_this.onSaveSuccess) {
	            _this.onSaveSuccess();
	          }
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	          $("#errorNotification").html('<div>' + errorMessage + '</div>');
	          $("#errorNotification").jqxNotification("open");
	        });
	      }
	    };

	    var form = new _Form2.default(formOptions);

	    this.window = new _AddWindow2.default({
	      width: 390,
	      height: 280,
	      title: 'Add User',
	      content: form,
	      onSave: function onSave() {
	        form.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      }
	    });
	  }

	  _createClass(AddUserWindow, [{
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

	  return AddUserWindow;
	}();

	exports.default = AddUserWindow;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Form = function () {
	  function Form(options) {
	    _classCallCheck(this, Form);

	    this.id = (0, _Utils.guid)();
	    this.items = options.items;
	    this.onValidationSuccess = options.onValidationSuccess;
	    this.labelColumnWidth = options.labelColumnWidth;
	    this.contentColumnWidth = options.contentColumnWidth;
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
	}();

	exports.default = Form;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddWindow = function () {
	  function AddWindow(options) {
	    _classCallCheck(this, AddWindow);

	    this.id = (0, _Utils.guid)();
	    this.content = options.content;

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = '';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    if (options.buttons) {} else {
	      this.saveButton = new _Button2.default({
	        title: 'Save',
	        template: 'success',
	        onClick: function onClick() {
	          if (options.onSave) {
	            options.onSave();
	          }
	        }
	      });

	      this.cancelButton = new _Button2.default({
	        title: 'Cancel',
	        onClick: function onClick() {
	          if (options.onCancel) {
	            options.onCancel();
	          }
	        }
	      });
	    }
	  }

	  _createClass(AddWindow, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var windowContainer = $('<div></div>');
	      windowContainer.appendTo(container);

	      windowContainer.attr('id', this.id);

	      var windowTitle = $('<div>' + this.title + '</div>');
	      windowTitle.appendTo(windowContainer);

	      var windowContent = $('<div></div>');
	      windowContent.appendTo(windowContainer);

	      var windowOptions = {
	        theme: 'metro',
	        isModal: true,
	        autoOpen: false
	      };

	      if (this.width) {
	        windowOptions['width'] = this.width;
	      }

	      if (this.height) {
	        windowOptions['height'] = this.height;
	      }

	      windowContainer.jqxWindow(windowOptions);

	      windowContainer.on('close', function (event) {
	        windowContainer.jqxWindow('destroy');
	      });

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

	  return AddWindow;
	}();

	exports.default = AddWindow;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextArea = function () {
	  function TextArea(options) {
	    _classCallCheck(this, TextArea);

	    this.id = (0, _Utils.guid)();

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = 'Button';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    this.placeHolder = options.placeHolder;

	    this.initialValue = options.value;
	  }

	  _createClass(TextArea, [{
	    key: 'render',
	    value: function render(container) {
	      var textAreaContainer = $('<textarea></textarea>');
	      textAreaContainer.attr('id', this.id);
	      textAreaContainer.appendTo(container);

	      var textAreaOptions = {
	        theme: 'metro'
	      };

	      if (this.width) {
	        textAreaOptions['width'] = this.width;
	      }

	      if (this.height) {
	        textAreaOptions['height'] = this.height;
	      }

	      if (this.placeHolder) {
	        textAreaOptions['placeHolder'] = this.placeHolder;
	      }

	      textAreaContainer.jqxInput(textAreaOptions);

	      if (this.initialValue) {
	        textAreaContainer.val(this.initialValue);
	      }

	      this.component = textAreaContainer;
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      return this.id;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.component.val();
	    }
	  }]);

	  return TextArea;
	}();

	exports.default = TextArea;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Label = function () {
	  function Label(options) {
	    _classCallCheck(this, Label);

	    this.id = (0, _Utils.guid)();
	    this.text = options.text;
	    this.bold = options.bold;
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
	}();

	exports.default = Label;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _EditWindow = __webpack_require__(19);

	var _EditWindow2 = _interopRequireDefault(_EditWindow);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _TextArea = __webpack_require__(16);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Label = __webpack_require__(17);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EditUserWindow = function () {
	  function EditUserWindow(options) {
	    _classCallCheck(this, EditUserWindow);

	    var _this = this;

	    this.id = (0, _Utils.guid)();

	    var user = options.data;
	    this.onSaveSuccess = options.onSaveSuccess;

	    var codeTextBox = new _TextBox2.default({ value: user.code, height: 25, width: '90%' });
	    var nameTextBox = new _TextBox2.default({ value: user.name, height: 25, width: '90%' });
	    var descriptionTextBox = new _TextArea2.default({ value: user.description, height: 80, width: '92.5%' });

	    var formItems = [{
	      name: 'code',
	      label: 'Code',
	      content: codeTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'name',
	      label: 'Name',
	      content: nameTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'description',
	      label: 'Description',
	      content: descriptionTextBox
	    }];
	    var formOptions = {
	      items: formItems,
	      labelColumnWidth: '120px',
	      onValidationSuccess: function onValidationSuccess(formValue) {
	        $.ajax({
	          method: "PUT",
	          url: "/users/" + user.code,
	          data: JSON.stringify(formValue),
	          beforeSend: function beforeSend(xhr) {
	            xhr.setRequestHeader('Accept', 'application/json');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	          }
	        }).done(function () {
	          $("#successNotification").jqxNotification("open");
	          _this.window.close();
	          if (_this.onSaveSuccess) {
	            _this.onSaveSuccess();
	          }
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	          $("#errorNotification").html('<div>' + errorMessage + '</div>');
	          $("#errorNotification").jqxNotification("open");
	        });
	      }
	    };

	    var form = new _Form2.default(formOptions);

	    this.window = new _EditWindow2.default({
	      width: 390,
	      height: 280,
	      title: 'Edit User',
	      content: form,
	      onSave: function onSave() {
	        form.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      },
	      onDelete: function onDelete() {
	        var r = confirm("Proses hapus data akan dilakukan!");
	        if (r == true) {
	          $.ajax({
	            method: "DELETE",
	            url: "/users/" + user.code,
	            data: {}
	          }).done(function () {
	            $("#successNotification").jqxNotification("open");
	            _this.window.close();
	            if (_this.onSaveSuccess) {
	              _this.onSaveSuccess();
	            }
	          }).fail(function () {
	            var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	            $("#errorNotification").html('<div>' + errorMessage + '</div>');
	            $("#errorNotification").jqxNotification("open");
	          });
	        }
	      }
	    });
	  }

	  _createClass(EditUserWindow, [{
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

	  return EditUserWindow;
	}();

	exports.default = EditUserWindow;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EditWindow = function () {
	  function EditWindow(options) {
	    _classCallCheck(this, EditWindow);

	    this.id = (0, _Utils.guid)();
	    this.content = options.content;

	    if (options.title) {
	      this.title = options.title;
	    } else {
	      this.title = '';
	    }

	    if (options.width) {
	      this.width = options.width;
	    }

	    if (options.height) {
	      this.height = options.height;
	    }

	    if (options.buttons) {} else {
	      this.deleteButton = new _Button2.default({
	        title: 'Delete',
	        template: 'danger',
	        onClick: function onClick() {
	          if (options.onDelete) {
	            options.onDelete();
	          }
	        }
	      });

	      this.saveButton = new _Button2.default({
	        title: 'Save',
	        template: 'success',
	        onClick: function onClick() {
	          if (options.onSave) {
	            options.onSave();
	          }
	        }
	      });

	      this.cancelButton = new _Button2.default({
	        title: 'Cancel',
	        onClick: function onClick() {
	          if (options.onCancel) {
	            options.onCancel();
	          }
	        }
	      });
	    }
	  }

	  _createClass(EditWindow, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var windowContainer = $('<div></div>');
	      windowContainer.appendTo(container);

	      windowContainer.attr('id', this.id);

	      var windowTitle = $('<div>' + this.title + '</div>');
	      windowTitle.appendTo(windowContainer);

	      var windowContent = $('<div></div>');
	      windowContent.appendTo(windowContainer);

	      var windowOptions = {
	        theme: 'metro',
	        isModal: true,
	        autoOpen: false
	      };

	      if (this.width) {
	        windowOptions['width'] = this.width;
	      }

	      if (this.height) {
	        windowOptions['height'] = this.height;
	      }

	      windowContainer.jqxWindow(windowOptions);

	      windowContainer.on('close', function (event) {
	        windowContainer.jqxWindow('destroy');
	      });

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
	      innerTd.css('padding-right', '20px');
	      this.deleteButton.render(innerTd);

	      innerTd = $('<td></td>');
	      innerTd.appendTo(innerTr);
	      this.cancelButton.render(innerTd);

	      innerTd = $('<td></td>');
	      innerTd.appendTo(innerTr);
	      this.saveButton.render(innerTd);

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

	  return EditWindow;
	}();

	exports.default = EditWindow;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _ToggleButton = __webpack_require__(10);

	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _DataGrid = __webpack_require__(12);

	var _DataGrid2 = _interopRequireDefault(_DataGrid);

	var _AddRoleWindow = __webpack_require__(21);

	var _AddRoleWindow2 = _interopRequireDefault(_AddRoleWindow);

	var _EditRoleWindow = __webpack_require__(22);

	var _EditRoleWindow2 = _interopRequireDefault(_EditRoleWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RoleList = function () {
	  function RoleList() {
	    _classCallCheck(this, RoleList);

	    this.id = (0, _Utils.guid)();
	  }

	  _createClass(RoleList, [{
	    key: 'render',
	    value: function render(container) {

	      var _this = this;

	      var url = "/roles";

	      var source = {
	        datatype: "json",
	        datafields: [{ name: 'roleId', type: 'int' }, { name: 'roleName', type: 'string' }, { name: 'description', type: 'string' }],
	        id: "roleId",
	        url: url
	      };

	      var onSearch = function onSearch(data) {
	        data['searchTxt'] = searchTextBox.getValue();
	        return data;
	      };

	      var cellsrenderer = function cellsrenderer(row, columnfield, value, defaulthtml, columnproperties) {
	        var roleTypeDescription = "";

	        if (value == 1) {
	          roleTypeDescription = "Role Type";
	        }

	        return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + ';">' + roleTypeDescription + '</span>';
	      };

	      var dataGridOptions = {
	        width: '100%',
	        height: '100%',
	        pageable: true,
	        altrows: true,
	        theme: 'metro',
	        virtualmode: true,
	        rendergridrows: function rendergridrows(params) {
	          return params.data;
	        },
	        columns: [{ text: 'Role Id', datafield: 'roleId', width: '30%' }, { text: 'Role Name', datafield: 'roleName', width: '30%' }, { text: 'Description', datafield: 'description', width: '40%' }],
	        groups: []
	      };

	      this.dataGrid = new _DataGrid2.default({
	        source: source,
	        onSearch: onSearch,
	        onRowDoubleClick: function onRowDoubleClick(data) {
	          var editRoleWindow = new _EditRoleWindow2.default({
	            data: data,
	            onSaveSuccess: function onSaveSuccess() {
	              _this.dataGrid.refresh();
	            }
	          });
	          editRoleWindow.render($('#dialogWindowContainer'));
	          editRoleWindow.open();
	        },
	        dataGridOptions: dataGridOptions
	      });

	      var searchTextBox = new _TextBox2.default({ placeHolder: 'Role Name', width: 250, height: 24 });
	      var searchButton = new _Button2.default({
	        imgSrc: '/arlhb_assets/images/search.png',
	        theme: 'metro',
	        width: 30,
	        height: 26,
	        onClick: function onClick() {
	          _this.dataGrid.refresh();
	        }
	      });

	      var addRoleButton = new _Button2.default({
	        title: 'Add Role',
	        template: 'primary',
	        height: 26,
	        onClick: function onClick() {
	          var addRoleWindow = new _AddRoleWindow2.default({
	            onSaveSuccess: function onSaveSuccess() {
	              _this.dataGrid.refresh();
	            }
	          });
	          addRoleWindow.render($('#dialogWindowContainer'));
	          addRoleWindow.open();
	        }
	      });

	      var table = $('<table style="height: 100%; width: 100%; margin: -3px; "></table>');
	      var tr = $('<tr></tr>');
	      var td = $('<td style="padding: 0; height: 40px;"></td>');
	      table.appendTo(container);
	      tr.appendTo(table);
	      td.appendTo(tr);

	      var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
	      var innerTr = $('<tr></tr>');
	      var innerTd = $('<td style="padding-top: 6px; padding-left: 10px; padding-right: 8px; width: 50px; height: 100%;"></td>');
	      innerTable.appendTo(td);
	      innerTr.appendTo(innerTable);
	      innerTd.appendTo(innerTr);
	      addRoleButton.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; width: 200px; height: 100%;"></td>');
	      innerTd.appendTo(innerTr);
	      searchTextBox.render(innerTd);

	      innerTd = $('<td style="padding-top: 6px; height: 100%; "></td>');
	      var _tempContainer = $('<div style="margin-left: -5px;"></div>');
	      _tempContainer.appendTo(innerTd);
	      innerTd.appendTo(innerTr);
	      searchButton.render(_tempContainer);

	      tr = $('<tr></tr>');
	      td = $('<td style="padding: 0;"></td>');
	      tr.appendTo(table);
	      td.appendTo(tr);

	      this.dataGrid.render(td);
	    }
	  }]);

	  return RoleList;
	}();

	exports.default = RoleList;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _AddWindow = __webpack_require__(15);

	var _AddWindow2 = _interopRequireDefault(_AddWindow);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _TextArea = __webpack_require__(16);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Label = __webpack_require__(17);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddRoleWindow = function () {
	  function AddRoleWindow(options) {
	    _classCallCheck(this, AddRoleWindow);

	    var _this = this;

	    this.id = (0, _Utils.guid)();

	    var role = options.data;
	    this.onSaveSuccess = options.onSaveSuccess;

	    var roleIdTextBox = new _TextBox2.default({ height: 25, width: '90%' });
	    var roleNameTextBox = new _TextBox2.default({ height: 25, width: '90%' });

	    var formItems = [{
	      name: 'roleId',
	      label: 'Role ID',
	      content: roleIdTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'roleName',
	      label: 'Role Name',
	      content: roleNameTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }];
	    var formOptions = {
	      items: formItems,
	      labelColumnWidth: '120px',
	      onValidationSuccess: function onValidationSuccess(formValue) {
	        $.ajax({
	          method: "POST",
	          url: "/roles",
	          data: JSON.stringify(formValue),
	          beforeSend: function beforeSend(xhr) {
	            xhr.setRequestHeader('Accept', 'application/json');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	          }
	        }).done(function () {
	          $("#successNotification").jqxNotification("open");
	          _this.window.close();
	          if (_this.onSaveSuccess) {
	            _this.onSaveSuccess();
	          }
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	          $("#errorNotification").html('<div>' + errorMessage + '</div>');
	          $("#errorNotification").jqxNotification("open");
	        });
	      }
	    };

	    var form = new _Form2.default(formOptions);

	    this.window = new _AddWindow2.default({
	      width: 340,
	      height: 180,
	      title: 'Add Role',
	      content: form,
	      onSave: function onSave() {
	        form.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      }
	    });
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
	}();

	exports.default = AddRoleWindow;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(14);

	var _Form2 = _interopRequireDefault(_Form);

	var _EditWindow = __webpack_require__(19);

	var _EditWindow2 = _interopRequireDefault(_EditWindow);

	var _TextBox = __webpack_require__(11);

	var _TextBox2 = _interopRequireDefault(_TextBox);

	var _TextArea = __webpack_require__(16);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Label = __webpack_require__(17);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EditRoleWindow = function () {
	  function EditRoleWindow(options) {
	    _classCallCheck(this, EditRoleWindow);

	    var _this = this;

	    this.id = (0, _Utils.guid)();

	    var role = options.data;
	    this.onSaveSuccess = options.onSaveSuccess;

	    var roleIdTextBox = new _TextBox2.default({ value: role.roleId, height: 25, width: '90%' });
	    var roleNameTextBox = new _TextBox2.default({ value: role.roleName, height: 25, width: '90%' });

	    var formItems = [{
	      name: 'roleId',
	      label: 'Role ID',
	      content: roleIdTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }, {
	      name: 'roleName',
	      label: 'Role Name',
	      content: roleNameTextBox,
	      validation: {
	        type: 'TEXTBOX',
	        rule: 'required'
	      }
	    }];
	    var formOptions = {
	      items: formItems,
	      labelColumnWidth: '120px',
	      onValidationSuccess: function onValidationSuccess(formValue) {
	        $.ajax({
	          method: "PUT",
	          url: "/roles/" + role.roleId,
	          data: JSON.stringify(formValue),
	          beforeSend: function beforeSend(xhr) {
	            xhr.setRequestHeader('Accept', 'application/json');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	          }
	        }).done(function () {
	          $("#successNotification").jqxNotification("open");
	          _this.window.close();
	          if (_this.onSaveSuccess) {
	            _this.onSaveSuccess();
	          }
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	          $("#errorNotification").html('<div>' + errorMessage + '</div>');
	          $("#errorNotification").jqxNotification("open");
	        });
	      }
	    };

	    var form = new _Form2.default(formOptions);

	    this.window = new _EditWindow2.default({
	      width: 340,
	      height: 180,
	      title: 'Edit Role',
	      content: form,
	      onSave: function onSave() {
	        form.validate();
	      },
	      onCancel: function onCancel() {
	        _this.window.close();
	      },
	      onDelete: function onDelete() {
	        var r = confirm("Proses hapus data akan dilakukan!");
	        if (r == true) {
	          $.ajax({
	            method: "DELETE",
	            url: "/roles/" + role.roleId,
	            data: {}
	          }).done(function () {
	            $("#successNotification").jqxNotification("open");
	            _this.window.close();
	            if (_this.onSaveSuccess) {
	              _this.onSaveSuccess();
	            }
	          }).fail(function () {
	            var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
	            $("#errorNotification").html('<div>' + errorMessage + '</div>');
	            $("#errorNotification").jqxNotification("open");
	          });
	        }
	      }
	    });
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
	}();

	exports.default = EditRoleWindow;

/***/ }
/******/ ]);