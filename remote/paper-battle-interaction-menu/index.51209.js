System.register("chunks:///_virtual/MenuItemPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionConfig.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Component, DB_InteractionConfig, app;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      DB_InteractionConfig = module.DB_InteractionConfig;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2da7bVRuKVFi4zQLnAxRkBV", "MenuItemPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MenuItemPrefab = exports('MenuItemPrefab', (_dec = ccclass('MenuItemPrefab'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuItemPrefab, _Component);
        function MenuItemPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "desLabel", _descriptor, _assertThisInitialized(_this));
          _this.config = void 0;
          return _this;
        }
        var _proto = MenuItemPrefab.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Button.EventType.CLICK, this.onClick, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.updateData = function updateData(interactionId) {
          //TODO:后面根据类型变换背景
          var config = DB_InteractionConfig[interactionId];
          this.config = config;
          this.desLabel.string = config.txt;
        };
        _proto.onClick = function onClick() {
          if (this.config.resultType == 'openUI') {
            app.manager.ui.show({
              name: this.config.resultData
            });
          }
        };
        return MenuItemPrefab;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "desLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/paper-battle-interaction-menu", ['./PaperBattleInteractionMenu.ts', './MenuItemPrefab.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperBattleInteractionMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './BattleController.ts', './MenuItemPrefab.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, BaseView, BattleController, MenuItemPrefab;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      MenuItemPrefab = module.MenuItemPrefab;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "65addGvemBHjJhCBYgmoveU", "PaperBattleInteractionMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperBattleInteractionMenu = exports('PaperBattleInteractionMenu', (_dec = ccclass('PaperBattleInteractionMenu'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PaperBattleInteractionMenu, _BaseView$BindControl);
        function PaperBattleInteractionMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menuListNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PaperBattleInteractionMenu.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.controller.on(BattleController.Event.AddNPCInteractionMenu, this.onAddNPCInteractionMenu, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PaperBattleLnteractionMenu>({name: 'PaperBattleLnteractionMenu', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onAddNPCInteractionMenu = function onAddNPCInteractionMenu(interaction) {
          for (var i = 0; i < interaction.length; i++) {
            var item = this.menuListNode.children[i];
            if (!item) {
              item = instantiate(this.itemPrefab);
              this.menuListNode.addChild(item);
            }
            item.active = true;
            item.getComponent(MenuItemPrefab).updateData(interaction[i]);
          }

          //隐藏多余的节点
          for (var _i = interaction.length; _i < this.menuListNode.children.length; _i++) {
            this.menuListNode.children[_i].active = false;
          }
        };
        return PaperBattleInteractionMenu;
      }(BaseView.BindController(BattleController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "menuListNode", [_dec3], {
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
  r('virtual:///prerequisite-imports/paper-battle-interaction-menu', 'chunks:///_virtual/paper-battle-interaction-menu'); 
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