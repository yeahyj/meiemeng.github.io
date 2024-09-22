System.register("chunks:///_virtual/BagInfoPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-list-view.ts', './export.type.ts', './app.ts', './BagItem.ts', './ListView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, instantiate, Toggle, Label, ItemType, ItemTypeName, app, BagItem, ListView;
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
      Component = module.Component;
      instantiate = module.instantiate;
      Toggle = module.Toggle;
      Label = module.Label;
    }, null, function (module) {
      ItemType = module.ItemType;
      ItemTypeName = module.ItemTypeName;
    }, function (module) {
      app = module.app;
    }, function (module) {
      BagItem = module.BagItem;
    }, function (module) {
      ListView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1a89esgPqRE96hdnjMVsEmJ", "BagInfoPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BagInfoPrefab = exports('BagInfoPrefab', (_dec = ccclass('BagInfoPrefab'), _dec2 = property(ListView), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BagInfoPrefab, _Component);
        function BagInfoPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectNode", _descriptor2, _assertThisInitialized(_this));
          //背包按钮arr
          _this.bagBtnNameArr = [ItemType.weapon, ItemType.equipment, ItemType.skillPlugin, ItemType.magicStone, ItemType.resource];
          _this.bagBtnToggleMap = new Map();
          //选中类型
          _this.selectType = ItemType.weapon;
          return _this;
        }
        var _proto = BagInfoPrefab.prototype;
        _proto.onLoad = function onLoad() {
          this.initUI();
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.initUI = function initUI() {
          var _this2 = this;
          var _loop = function _loop(i) {
            var item = _this2.selectNode.children[i];
            if (!item) {
              item = instantiate(_this2.selectNode.children[0]);
              item.active = true;
              item.parent = _this2.selectNode;
            }
            var toggle = item.getComponent(Toggle);
            _this2.bagBtnToggleMap.set(_this2.bagBtnNameArr[i], toggle);
            var name = ItemTypeName[_this2.bagBtnNameArr[i]];
            item.getChildByName('nameLab').getComponent(Label).string = name;
            toggle.node.on(Toggle.EventType.CLICK, function () {
              _this2.onSelectBag(_this2.bagBtnNameArr[i]);
            });
          };
          //加载背包按钮
          for (var i = 0; i < this.bagBtnNameArr.length; i++) {
            _loop(i);
          }
          this.bagBtnToggleMap.get(this.selectType).isChecked = true;
          this.updateUI();
        };
        _proto.updateUI = function updateUI() {
          this.onSelectBag(this.selectType);
        };
        _proto.onSelectBag = function onSelectBag(type) {
          this.selectType = type;
          var propData = app.store.player.bag.get(type);
          var propNum = propData ? propData.length : 0;
          var num = propNum < app.config.game.BagCapacity ? app.config.game.BagCapacity : propNum;
          this.listView.count = num;
        };
        _proto.onRenderEvent = function onRenderEvent(node, index) {
          var data = app.store.player.getBagItem(this.selectType)[index];
          node.getComponent(BagItem).updateUI(data, index);
        };
        return BagInfoPrefab;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec3], {
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

System.register("chunks:///_virtual/BagItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './export.type.ts', './app.ts', './IconConfig.ts', './BattleUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, SpriteFrame, Sprite, Component, ItemType, app, DB_IconConfig, BattleUtil;
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
      Label = module.Label;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      ItemType = module.ItemType;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DB_IconConfig = module.DB_IconConfig;
    }, function (module) {
      BattleUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0ee54DUPi5CLad6S+gSPv4A", "BagItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BagItem = exports('BagItem', (_dec = ccclass('BagItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BagItem, _Component);
        function BagItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boxNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nameLab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectNode", _descriptor4, _assertThisInitialized(_this));
          _this._itemData = void 0;
          _this._itemindex = void 0;
          return _this;
        }
        var _proto = BagItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Button.EventType.CLICK, this.onClickItem, this);
        };
        _proto.start = function start() {};
        _proto.updateUI = function updateUI(data, index) {
          var _this2 = this;
          this._itemData = data;
          this._itemindex = index;
          // this.selectNode.active = false;
          var isActive = !!data && !!data.id;
          this.boxNode.active = !isActive;
          this.iconNode.active = isActive;
          this.nameLab.node.active = isActive;
          if (isActive) {
            var config = BattleUtil.getItemConfigByTypeAndId(data.id, data.type);
            this.nameLab.string = config.name;
            var iconId = config.icon;
            var iconPath = DB_IconConfig[iconId].path;
            app.manager.loader.load({
              path: 'icon/' + iconPath + '/spriteFrame',
              bundle: 'battle',
              type: SpriteFrame,
              onComplete: function onComplete(result) {
                if (!_this2.isValid) {
                  console.log('item已经被销毁');
                  return;
                }
                _this2.iconNode.getComponent(Sprite).spriteFrame = result;
              }
            });
          }
        }

        //选中
        ;

        _proto.onSelect = function onSelect() {
          this.selectNode.active = true;
        }

        //取消选中
        ;

        _proto.unSelect = function unSelect() {
          this.selectNode.active = false;
        };
        _proto.onClickItem = function onClickItem() {
          if (this._itemData) {
            if (this._itemData.type == ItemType.skillPlugin) ;else if (this._itemData.type == ItemType.weapon) ;else if (this._itemData.type == ItemType.equipment) {
              app.manager.ui.show({
                name: 'PopEquipInfo',
                data: {
                  index: this._itemindex
                }
              });
            }
          }
        };
        return BagItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pop-player-info", ['./PopPlayerInfo.ts', './BagInfoPrefab.ts', './BagItem.ts', './RoleInfoItem.ts', './RoleInfoPrefab.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopPlayerInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts', './export.type.ts', './BattleUtil.ts', './EquipConfig.ts', './BattleController.ts', './BagInfoPrefab.ts', './RoleInfoPrefab.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, BaseView, app, EquipmentSlot, BattleUtil, DB_EquipConfig, BattleController, BagInfoPrefab, RoleInfoPrefab;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
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
      EquipmentSlot = module.EquipmentSlot;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      DB_EquipConfig = module.DB_EquipConfig;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      BagInfoPrefab = module.BagInfoPrefab;
    }, function (module) {
      RoleInfoPrefab = module.RoleInfoPrefab;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "37a0bWbJMZPIYN1qFzWToyl", "PopPlayerInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopPlayerInfo = exports('PopPlayerInfo', (_dec = ccclass('PopPlayerInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PopPlayerInfo, _BaseView$BindControl);
        function PopPlayerInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "headNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chestNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "handsNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "legsNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "feetNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "accessoryNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ringLeftNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ringRightNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weapon1Node", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weapon2Node", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weapon3Node", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bagNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bagViewNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoViewNode", _descriptor16, _assertThisInitialized(_this));
          //装备MAP
          _this.equipmentMap = new Map();
          return _this;
        }
        var _proto = PopPlayerInfo.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.controller.on(BattleController.Event.ChangeEquip, this.changeEquip, this);
          this.equipmentMap.set(EquipmentSlot.head, this.headNode);
          this.equipmentMap.set(EquipmentSlot.chest, this.chestNode);
          this.equipmentMap.set(EquipmentSlot.hands, this.handsNode);
          this.equipmentMap.set(EquipmentSlot.legs, this.legsNode);
          this.equipmentMap.set(EquipmentSlot.feet, this.feetNode);
          this.equipmentMap.set(EquipmentSlot.accessory, this.accessoryNode);
          this.equipmentMap.set(EquipmentSlot.ringLeft, this.ringLeftNode);
          this.equipmentMap.set(EquipmentSlot.ringRight, this.ringRightNode);
          this.equipmentMap.set(EquipmentSlot.weapon1, this.weapon1Node);
          this.equipmentMap.set(EquipmentSlot.weapon2, this.weapon2Node);
          this.equipmentMap.set(EquipmentSlot.weapon3, this.weapon3Node);
          this.closeNode.on(Button.EventType.CLICK, this.onClose, this);
          this.bagNode.on(Button.EventType.CLICK, this.onBag, this);
          this.infoNode.on(Button.EventType.CLICK, this.onInfo, this);
          this.initUI();
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopPlayerInfo>({name: 'PopPlayerInfo', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.initUI = function initUI() {
          var _this2 = this;
          this.equipmentMap.forEach(function (item, type) {
            item.on(Button.EventType.CLICK, function () {
              _this2.onClickEquipment(type);
            }, _this2);
            _this2.updateItem(type);
          });
          this.bagViewNode.active = false;
          this.infoViewNode.active = true;
        };
        _proto.updateItem = function updateItem(type) {
          var item = this.equipmentMap.get(type);
          //获取装备信息
          var itemData = app.store.player.equipments.get(type);
          item.getChildByName('nameLab').active = !itemData;
          item.getChildByName('iconSp').active = !!itemData;
          if (itemData) {
            item.active = true;
            BattleUtil.loadIcon(item.getChildByName('iconSp'), itemData.id, DB_EquipConfig);
          }
        };
        _proto.updateUI = function updateUI() {
          var _this3 = this;
          this.equipmentMap.forEach(function (item, type) {
            _this3.updateItem(type);
          });
        };
        _proto.onClickEquipment = function onClickEquipment(type) {
          var itemData = app.store.player.equipments.get(type);
          if (itemData) {
            //装备详情
            app.manager.ui.show({
              name: 'PopEquipInfo'
            });
          }
        };
        _proto.onBag = function onBag() {
          this.bagViewNode.active = true;
          this.infoViewNode.active = false;
        };
        _proto.onInfo = function onInfo() {
          this.infoViewNode.active = true;
          this.bagViewNode.active = false;
        };
        _proto.changeEquip = function changeEquip() {
          this.bagViewNode.getComponent(BagInfoPrefab).updateUI();
          this.infoViewNode.getComponent(RoleInfoPrefab).updateUI();
          this.updateUI();
          //关闭界面
          app.manager.ui.hide({
            name: 'PopEquipInfo'
          });
        };
        _proto.onClose = function onClose() {
          app.manager.ui.hide({
            name: 'PopPlayerInfo'
          });
        };
        return PopPlayerInfo;
      }(BaseView.BindController(BattleController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chestNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "handsNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "legsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "feetNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "accessoryNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ringLeftNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ringRightNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "weapon1Node", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "weapon2Node", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "weapon3Node", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "closeNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bagNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "infoNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bagViewNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "infoViewNode", [_dec17], {
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

System.register("chunks:///_virtual/RoleInfoItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5a1577ROm5EIb5s+LUzLHsu", "RoleInfoItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoleInfoItem = exports('RoleInfoItem', (_dec = ccclass('RoleInfoItem'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoleInfoItem, _Component);
        function RoleInfoItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "keyLab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueLab", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RoleInfoItem.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.updateUI = function updateUI(key, value) {
          this.keyLab.string = key;
          this.valueLab.string = value;
        };
        return RoleInfoItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "keyLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueLab", [_dec3], {
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

System.register("chunks:///_virtual/RoleInfoPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-list-view.ts', './export.type.ts', './RoleInfoItem.ts', './app.ts', './ListView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, AttributeType, AttributeName, RoleInfoItem, app, ListView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, null, function (module) {
      AttributeType = module.AttributeType;
      AttributeName = module.AttributeName;
    }, function (module) {
      RoleInfoItem = module.RoleInfoItem;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ListView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cdfe5t8wuVCj4newcqqstT+", "RoleInfoPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoleInfoPrefab = exports('RoleInfoPrefab', (_dec = ccclass('RoleInfoPrefab'), _dec2 = property(ListView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoleInfoPrefab, _Component);
        function RoleInfoPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listView", _descriptor, _assertThisInitialized(_this));
          _this.keys = [];
          _this.values = [];
          return _this;
        }
        var _proto = RoleInfoPrefab.prototype;
        _proto.onLoad = function onLoad() {
          //循环遍历AttributeType
          var keys = Object.keys(AttributeType);
          this.keys = keys;
          this.values = keys.map(function (key) {
            return AttributeType[key];
          });
          this.updateUI();
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.updateUI = function updateUI() {
          this.listView.count = this.keys.length;
        };
        _proto.onRenderEvent = function onRenderEvent(item, index) {
          var _item$getComponent;
          var key = this.keys[index];
          var value = app.store.player.attributes[key];
          (_item$getComponent = item.getComponent(RoleInfoItem)) == null || _item$getComponent.updateUI(AttributeName[key], value.toString());
        };
        return RoleInfoPrefab;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-player-info', 'chunks:///_virtual/pop-player-info'); 
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