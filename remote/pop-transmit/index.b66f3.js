System.register("chunks:///_virtual/MiniDungeonItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-list-view.ts', './app.ts', './ListView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Node, Label, Button, Component, app, ListView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, null, function (module) {
      app = module.app;
    }, function (module) {
      ListView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "da5037/0qhL2pUqWsV4hsGq", "MiniDungeonItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiniDungeonItem = exports('MiniDungeonItem', (_dec = ccclass('MiniDungeonItem'), _dec2 = property(Node), _dec3 = property(ListView), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inherits(MiniDungeonItem, _Component);
        var _super = _createSuper(MiniDungeonItem);
        function MiniDungeonItem() {
          var _this;
          _classCallCheck(this, MiniDungeonItem);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "startNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "listView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "tipNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "tipLab", _descriptor4, _assertThisInitialized(_this));
          //选择的难度
          _defineProperty(_assertThisInitialized(_this), "_selectIndex", 0);
          return _this;
        }
        _createClass(MiniDungeonItem, [{
          key: "onLoad",
          value: function onLoad() {
            this.startNode.on(Button.EventType.CLICK, this.onClickStart, this);
            this.tipNode.on(Button.EventType.CLICK, this.onClickShrink, this);
            this.listView.renderEvent.target = this.node;
            this.listView.renderEvent.component = 'MiniDungeonItem';
            this.listView.renderEvent.handler = 'onRenderEvent';
            this.listView.count = app.config.game.MiniDungeonDifficulty.length;
            this.listView.node.active = false;
            this.updateUI();
          }
        }, {
          key: "updateUI",
          value: function updateUI() {
            var nameLab = this.tipNode.getChildByName('nameLab').getComponent(Label);
            nameLab.string = app.config.game.MiniDungeonDifficultyName[this._selectIndex];
            this.tipLab.string = '敌人生命:' + app.config.game.MiniDungeonDifficulty[this._selectIndex] * 100 + '%' + '\n' + '敌人攻击:' + app.config.game.MiniDungeonDifficulty[this._selectIndex] * 100 + '%' + '\n' + '魔法道具掉落概率:' + app.config.game.MiniDungeonDifficulty[this._selectIndex] * 100 + '%';
          }
        }, {
          key: "onRenderEvent",
          value: function onRenderEvent(node, index) {
            var nameLab = node.getChildByName('nameLab').getComponent(Label);
            nameLab.string = app.config.game.MiniDungeonDifficultyName[index];
            node.getChildByName('checkNode').active = index === this._selectIndex;
            node.getComponent(Button).clickEvents[0].target = this.node;
            node.getComponent(Button).clickEvents[0].component = 'MiniDungeonItem';
            node.getComponent(Button).clickEvents[0].handler = 'onClickSelect';
            node.getComponent(Button).clickEvents[0].customEventData = index + '';
          }
        }, {
          key: "onClickStart",
          value: function onClickStart() {
            app.manager.battle.switchMap({
              mapId: 200101,
              mapLv: app.store.player.lv,
              difficulty: app.config.game.MiniDungeonDifficulty[this._selectIndex]
            });
            app.manager.ui.hide({
              name: 'PopTransmit'
            });
          }
        }, {
          key: "onClickShrink",
          value: function onClickShrink() {
            this.listView.node.active = !this.listView.node.active;
            if (this.listView.node.active) {
              this.listView.count = app.config.game.MiniDungeonDifficulty.length;
            }
            this.listView.scrollTo(this._selectIndex);
          }
        }, {
          key: "onClickSelect",
          value: function onClickSelect(event, data) {
            this._selectIndex = +data;
            event.target.getChildByName('checkNode').active = true;
            this.updateUI();
            this.onClickShrink();
          }
        }]);
        return MiniDungeonItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pop-transmit", ['./PopTransmit.ts', './MiniDungeonItem.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopTransmit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Node, Label, Button, BaseView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "93467d/BhtBPKevXD3CWgvz", "PopTransmit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopTransmit = exports('PopTransmit', (_dec = ccclass('PopTransmit'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inherits(PopTransmit, _BaseView);
        var _super = _createSuper(PopTransmit);
        function PopTransmit() {
          var _this;
          _classCallCheck(this, PopTransmit);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "detailsNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "typeNode", _descriptor2, _assertThisInitialized(_this));
          //上次点击按钮
          _defineProperty(_assertThisInitialized(_this), "lastClickIndex", 0);
          return _this;
        }
        _createClass(PopTransmit, [{
          key: "onLoad",
          value:
          // 初始化的相关逻辑写在这
          function onLoad() {
            var _this2 = this;
            //TODO: 后面 应该是读取配置表的
            var nameList = ['小秘境', '大秘境'];
            var children = this.typeNode.children;
            var _loop = function _loop(i) {
              var child = children[i];
              child.getChildByName('nameLab').getComponent(Label).string = nameList[i];
              child.on(Button.EventType.CLICK, function () {
                _this2.updateChallenge(i);
              }, _this2);
            };
            for (var i = 0; i < children.length; i++) {
              _loop(i);
            }
            this.updateChallenge(0);
          }

          // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        }, {
          key: "onShow",
          value: function onShow(params) {}

          // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        }, {
          key: "onHide",
          value: function onHide(result) {
            // app.manager.ui.show<PopTransmit>({name: 'PopTransmit', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
            return result;
          }
        }, {
          key: "updateChallenge",
          value: function updateChallenge(index) {
            if (this.lastClickIndex == index) {
              return;
            }
            var children = this.typeNode.children;
            if (children[this.lastClickIndex]) {
              children[this.lastClickIndex].getChildByName('checkNode').active = false;
            }
            if (children[index]) {
              children[index].getChildByName('checkNode').active = true;
            }
            this.lastClickIndex = index;
            this.detailsNode.children[index].active = true;
          }
        }]);
        return PopTransmit;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "detailsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "typeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-transmit', 'chunks:///_virtual/pop-transmit'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});