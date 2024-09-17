System.register("chunks:///_virtual/pop-assemble-weapon", ['./PopAssembleWeapon.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopAssembleWeapon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './WeaponDepotComp.ts', './app.ts', './ConstType.ts', './ItemPrefab.ts', './WeaponConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Prefab, Button, instantiate, BaseView, WeaponDepotComp, app, WeaponAttributeType, ItemType, ItemPrefab, DB_WeaponConfig;
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
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      instantiate = module.instantiate;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
      ItemType = module.ItemType;
    }, function (module) {
      ItemPrefab = module.ItemPrefab;
    }, function (module) {
      DB_WeaponConfig = module.DB_WeaponConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "683c1eqP6xBC5hQtV6jXMa4", "PopAssembleWeapon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopAssembleWeapon = exports('PopAssembleWeapon', (_dec = ccclass('PopAssembleWeapon'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopAssembleWeapon, _BaseView);
        function PopAssembleWeapon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameLab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pluginNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bagNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pluginPfefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backCityNode", _descriptor6, _assertThisInitialized(_this));
          //选中的武器技能格子
          _this.selectPluginNodeIndex = void 0;
          //选中的背包格子
          _this.selectBagNodeIndex = void 0;
          return _this;
        }
        var _proto = PopAssembleWeapon.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.closeNode.on(Button.EventType.CLICK, this.onClose, this);
          this.backCityNode.on(Button.EventType.CLICK, this.onBackCity, this);
          this.updateUI();
        };
        _proto.updateUI = function updateUI() {
          var _this2 = this;
          //武器
          var curWeaponIndex = app.manager.battle.playerEntity.get(WeaponDepotComp).curWeaponIndex;
          var wewaponItemData = app.store.player.battleWeapon[curWeaponIndex];
          var weaponData = wewaponItemData.data;
          var config = DB_WeaponConfig[wewaponItemData.id];
          this.nameLab.string = config.name;
          var capacity = weaponData[WeaponAttributeType.capacity];
          var skillPlugin = weaponData[WeaponAttributeType.skillPlugin];
          var _loop = function _loop(i) {
            var _this2$pluginNode$chi;
            var data = {
              id: skillPlugin[i],
              type: ItemType.skillPlugin
            };
            var node = (_this2$pluginNode$chi = _this2.pluginNode.children[i]) != null ? _this2$pluginNode$chi : instantiate(_this2.pluginPfefab);
            if (!node.parent) _this2.pluginNode.addChild(node);
            node.getComponent(ItemPrefab).updateUI(data, function () {
              _this2.onSelectWeaponNode(i);
            });
          };
          for (var i = 0; i < capacity; i++) {
            _loop(i);
          }
          //背包
          var bagData = app.store.player.bag;
          var _loop2 = function _loop2(_i) {
            var _this2$bagNode$childr;
            var node = (_this2$bagNode$childr = _this2.bagNode.children[_i]) != null ? _this2$bagNode$childr : instantiate(_this2.pluginPfefab);
            if (!node.parent) _this2.bagNode.addChild(node);
            var data = undefined;
            if (bagData[_i] && bagData[_i].type == ItemType.skillPlugin) {
              data = bagData[_i];
            }
            node.getComponent(ItemPrefab).updateUI(data, function () {
              _this2.onSelectBagNode(_i);
            });
          };
          for (var _i = 0; _i < app.config.game.BagCapacity; _i++) {
            _loop2(_i);
          }
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopAssembleWeapon>({name: 'PopAssembleWeapon', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onBackCity = function onBackCity() {
          app.manager.battle.switchMap({
            mapId: 100101
          });
          this.onClose();
        };
        _proto.onClose = function onClose() {
          app.manager.ui.hide({
            name: 'PopAssembleWeapon'
          });
        }

        //选中武器格子
        ;

        _proto.onSelectWeaponNode = function onSelectWeaponNode(index) {
          var _this$pluginNode$chil3;
          if (this.selectPluginNodeIndex === index) {
            var _this$pluginNode$chil;
            this.selectPluginNodeIndex = undefined;
            (_this$pluginNode$chil = this.pluginNode.children[this.selectPluginNodeIndex]) == null || (_this$pluginNode$chil = _this$pluginNode$chil.getComponent(ItemPrefab)) == null || _this$pluginNode$chil.unSelect();
            return;
          }
          if (this.selectPluginNodeIndex !== undefined) {
            var _this$pluginNode$chil2;
            (_this$pluginNode$chil2 = this.pluginNode.children[this.selectPluginNodeIndex]) == null || (_this$pluginNode$chil2 = _this$pluginNode$chil2.getComponent(ItemPrefab)) == null || _this$pluginNode$chil2.unSelect();
          }
          this.selectPluginNodeIndex = index;
          (_this$pluginNode$chil3 = this.pluginNode.children[this.selectPluginNodeIndex]) == null || (_this$pluginNode$chil3 = _this$pluginNode$chil3.getComponent(ItemPrefab)) == null || _this$pluginNode$chil3.onSelect();
          this.onExchange();
        }

        //选中背包格子
        ;

        _proto.onSelectBagNode = function onSelectBagNode(index) {
          var _this$bagNode$childre3;
          if (this.selectBagNodeIndex === index) {
            var _this$bagNode$childre;
            this.selectBagNodeIndex = undefined;
            (_this$bagNode$childre = this.bagNode.children[this.selectBagNodeIndex]) == null || (_this$bagNode$childre = _this$bagNode$childre.getComponent(ItemPrefab)) == null || _this$bagNode$childre.unSelect();
            return;
          }
          if (this.selectBagNodeIndex !== undefined) {
            var _this$bagNode$childre2;
            (_this$bagNode$childre2 = this.bagNode.children[this.selectBagNodeIndex]) == null || (_this$bagNode$childre2 = _this$bagNode$childre2.getComponent(ItemPrefab)) == null || _this$bagNode$childre2.unSelect();
          }
          this.selectBagNodeIndex = index;
          (_this$bagNode$childre3 = this.bagNode.children[this.selectBagNodeIndex]) == null || (_this$bagNode$childre3 = _this$bagNode$childre3.getComponent(ItemPrefab)) == null || _this$bagNode$childre3.onSelect();
          this.onExchange();
        }

        //交换
        ;

        _proto.onExchange = function onExchange() {
          var _this$bagNode$childre4, _this$pluginNode$chil4;
          if (this.selectBagNodeIndex === undefined || this.selectPluginNodeIndex === undefined) {
            return;
          }
          app.store.player.exchangeWeaponAndBag(this.selectBagNodeIndex, this.selectPluginNodeIndex, app.manager.battle.playerEntity.get(WeaponDepotComp).curWeaponIndex);
          (_this$bagNode$childre4 = this.bagNode.children[this.selectBagNodeIndex]) == null || (_this$bagNode$childre4 = _this$bagNode$childre4.getComponent(ItemPrefab)) == null || _this$bagNode$childre4.unSelect();
          (_this$pluginNode$chil4 = this.pluginNode.children[this.selectPluginNodeIndex]) == null || (_this$pluginNode$chil4 = _this$pluginNode$chil4.getComponent(ItemPrefab)) == null || _this$pluginNode$chil4.unSelect();
          this.selectBagNodeIndex = undefined;
          this.selectPluginNodeIndex = undefined;
          this.updateUI();
        };
        _proto.onDestroy = function onDestroy() {};
        return PopAssembleWeapon;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pluginNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bagNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pluginPfefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "backCityNode", [_dec7], {
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
  r('virtual:///prerequisite-imports/pop-assemble-weapon', 'chunks:///_virtual/pop-assemble-weapon'); 
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