System.register("chunks:///_virtual/EquipItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-list-view.ts', './export.type.ts', './BattleUtil.ts', './EquipConfig.ts', './app.ts', './BattleController.ts', './ListView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Node, Button, Component, AttributeName, BattleUtil, DB_EquipConfig, app, BattleController, ListView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }, null, function (module) {
      AttributeName = module.AttributeName;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      DB_EquipConfig = module.DB_EquipConfig;
    }, function (module) {
      app = module.app;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      ListView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b998b9q9LdDAZ/4GQ1OPsA3", "EquipItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EquipItem = exports('EquipItem', (_dec = ccclass('EquipItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(ListView), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EquipItem, _Component);
        function EquipItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconSp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nameLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listView", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnLab", _descriptor5, _assertThisInitialized(_this));
          _this.keys = [];
          _this.equipData = null;
          _this.isEquip = false;
          _this.index = 0;
          return _this;
        }
        var _proto = EquipItem.prototype;
        _proto.onLoad = function onLoad() {
          this.btnNode.on(Button.EventType.CLICK, this.onClick, this);
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {}

        /**
         * 更新UI
         * @param data 数据
         * @param isEquip 是否装备
         * @param index 如果在背包，就有索引
         */;
        _proto.updateUI = function updateUI(data, isEquip, index) {
          this.equipData = data.data;
          this.isEquip = isEquip;
          this.index = index;
          this.btnLab.string = isEquip ? '卸下' : '装备';
          this.nameLab.string = DB_EquipConfig[data.id].name;
          BattleUtil.loadIcon(this.iconSp.node, data.id, DB_EquipConfig);
          var equipData = this.equipData;
          var keys = Object.keys(equipData);
          this.keys = keys;
          this.listView.count = keys.length;
        };
        _proto.onRenderEvent = function onRenderEvent(item, index) {
          var key = this.keys[index];
          item.getChildByName('keyLab').getComponent(Label).string = AttributeName[key];
          item.getChildByName('valueLab').getComponent(Label).string = this.equipData[key];
        };
        _proto.onClick = function onClick() {
          if (this.isEquip) {
            //卸下
            var slot = DB_EquipConfig[this.equipData.id].type;
            app.store.player.unequipItem(slot);
          } else {
            //装备
            app.store.player.equipItem(this.index);
          }
          //刷新界面
          BattleController.inst.changeEquip();
        };
        return EquipItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pop-equip-info", ['./PopEquipInfo.ts', './EquipItem.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopEquipInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts', './export.type.ts', './EquipItem.ts', './EquipConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, BaseView, app, ItemType, EquipItem, DB_EquipConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ItemType = module.ItemType;
    }, function (module) {
      EquipItem = module.EquipItem;
    }, function (module) {
      DB_EquipConfig = module.DB_EquipConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "86329TYye5A1a39k8aETGwX", "PopEquipInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopEquipInfo = exports('PopEquipInfo', (_dec = ccclass('PopEquipInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopEquipInfo, _BaseView);
        function PopEquipInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "myEquipNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "otherEquipNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopEquipInfo.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.closeNode.on(Button.EventType.CLICK, this.onClose, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {
          var equipData = app.store.player.getBagItem(ItemType.equipment);
          var otherData = equipData[params.index];
          var type = DB_EquipConfig[otherData.id].type;
          var myData = app.store.player.equipments.get(type);
          if (myData) {
            this.myEquipNode.active = true;
            this.myEquipNode.getComponent(EquipItem).updateUI(myData, true);
          } else {
            this.myEquipNode.active = false;
          }
          this.otherEquipNode.getComponent(EquipItem).updateUI(otherData, false, params.index);
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopEquipInfo>({name: 'PopEquipInfo', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onClose = function onClose() {
          app.manager.ui.hide({
            name: 'PopEquipInfo'
          });
        };
        return PopEquipInfo;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myEquipNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "otherEquipNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-equip-info', 'chunks:///_virtual/pop-equip-info'); 
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