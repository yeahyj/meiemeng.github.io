System.register("chunks:///_virtual/paper-battle-info", ['./PaperBattleInfo.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperBattleInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './BattleController.ts', './RoleModelComp.ts', './ConstType.ts', './HpComp.ts', './MpComp.ts', './WeaponDepotComp.ts', './WeaponModelComp.ts', './WeaponManagerComp.ts', './ItemPrefab.ts', './app.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Node, Button, instantiate, BaseView, BattleController, RoleModelComp, AttributeType, WeaponAttributeType, HpComp, MpComp, WeaponDepotComp, WeaponModelComp, WeaponManagerComp, ItemPrefab, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Button = module.Button;
      instantiate = module.instantiate;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      AttributeType = module.AttributeType;
      WeaponAttributeType = module.WeaponAttributeType;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      MpComp = module.MpComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }, function (module) {
      WeaponManagerComp = module.WeaponManagerComp;
    }, function (module) {
      ItemPrefab = module.ItemPrefab;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "3c102aCI/9Oz712+vdbHxtH", "PaperBattleInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperBattleInfo = exports('PaperBattleInfo', (_dec = ccclass('PaperBattleInfo'), _dec2 = property(ProgressBar), _dec3 = property(ProgressBar), _dec4 = property(ProgressBar), _dec5 = property(ProgressBar), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PaperBattleInfo, _BaseView$BindControl);
        function PaperBattleInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hpProg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mpProg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cdProg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expProg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "battleWeaponNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PaperBattleInfo.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.battleWeaponNode.on(Button.EventType.CLICK, this.openPopAssembleWeapon, this);
          var weaponNum = app.config.game.BattleWeaponNum;
          for (var i = 0; i < weaponNum; i++) {
            var node = this.battleWeaponNode.children[i];
            if (!node) {
              node = instantiate(this.battleWeaponNode.children[0]);
              this.battleWeaponNode.addChild(node);
            }
            node.getComponent(ItemPrefab).updateUI(app.store.player.battleWeapon[i]);
            node.getComponent(Button).destroy();
          }
        };
        _proto.update = function update() {
          this.onRefreshHp();
          this.onRefreshMp();
          this.onRefreshCd();
          this.onRefreshExp();
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PaperBattleInfo>({name: 'PaperBattleInfo', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onRefreshHp = function onRefreshHp() {
          var player = app.manager.battle.playerEntity;
          var data = player.get(RoleModelComp);
          this.hpProg.progress = player.get(HpComp).hp / data.attributes.get(AttributeType.hp).maxValue;
        };
        _proto.onRefreshMp = function onRefreshMp() {
          var player = app.manager.battle.playerEntity;
          var weapon = player.get(WeaponDepotComp).curWeapon;
          this.mpProg.progress = player.get(MpComp).mp / weapon.get(WeaponModelComp).data[WeaponAttributeType.mpMax];
        };
        _proto.onRefreshCd = function onRefreshCd() {
          var player = app.manager.battle.playerEntity;
          var weapon = player.get(WeaponDepotComp).curWeapon;
          var comp = weapon.get(WeaponManagerComp);
          if (comp) {
            this.cdProg.progress = 1 - comp.skillDelay / comp.maxSkillDelay;
          }
        };
        _proto.onRefreshExp = function onRefreshExp() {
          var lv = app.store.player.lv;
          if (lv < app.config.game.PlayerMaxLv) {
            var exp = app.store.player.exp;
            var maxExp = app.store.player.getExpToUpgrade();
            this.expProg.progress = exp / maxExp;
          } else {
            this.expProg.progress = 1;
          }
        };
        _proto.openPopAssembleWeapon = function openPopAssembleWeapon() {
          app.manager.ui.show({
            name: 'PopAssembleWeapon'
          });
        };
        return PaperBattleInfo;
      }(BaseView.BindController(BattleController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpProg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mpProg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cdProg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expProg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "battleWeaponNode", [_dec6], {
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
  r('virtual:///prerequisite-imports/paper-battle-info', 'chunks:///_virtual/paper-battle-info'); 
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