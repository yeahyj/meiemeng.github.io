System.register("chunks:///_virtual/paper-battle-rocker", ['./PaperBattleRocker.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperBattleRocker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './cc-ctrl-rocker.ts', './DirectionComp.ts', './WeaponCastComp.ts', './WeaponDepotComp.ts', './WeaponDirectionComp.ts', './app.ts', './Rocker.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, BaseView, DirectionComp, WeaponCastComp, WeaponDepotComp, WeaponDirectionComp, app, RockerEventType;
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
      Vec3 = module.Vec3;
    }, function (module) {
      BaseView = module.default;
    }, null, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      WeaponCastComp = module.WeaponCastComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      WeaponDirectionComp = module.WeaponDirectionComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      RockerEventType = module.RockerEventType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9e7979NVnVEjr7WLNBsRExM", "PaperBattleRocker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperBattleRocker = exports('PaperBattleRocker', (_dec = ccclass('PaperBattleRocker'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PaperBattleRocker, _BaseView);
        function PaperBattleRocker() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atkNode", _descriptor2, _assertThisInitialized(_this));
          _this.movePos = void 0;
          _this.moveLong = void 0;
          _this.atkPos = void 0;
          _this.atkLong = void 0;
          return _this;
        }
        var _proto = PaperBattleRocker.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.moveNode.on(RockerEventType.Change, this.onMoveChange, this);
          this.moveNode.on(RockerEventType.Stop, this.onMoveChange, this);
          this.atkNode.on(RockerEventType.Change, this.onAtkRockerChange, this);
          this.atkNode.on(RockerEventType.Stop, this.onAtkRockerChange, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PaperBattleRocker>({name: 'PaperBattleRocker', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onMoveChange = function onMoveChange(pos, _long) {
          this.movePos = pos;
          this.moveLong = _long;
        };
        _proto.onAtkRockerChange = function onAtkRockerChange(pos, _long2) {
          this.atkPos = pos;
          this.atkLong = _long2;
        };
        _proto.update = function update(dt) {
          var _this$movePos, _this$moveLong;
          this.movePos = (_this$movePos = this.movePos) != null ? _this$movePos : new Vec3(0, 0, 0);
          this.moveLong = (_this$moveLong = this.moveLong) != null ? _this$moveLong : 0;
          var player = app.manager.battle.playerEntity;
          player.get(DirectionComp).setDirection({
            dir: this.movePos.multiplyScalar(this.moveLong),
            weight: 1
          });
          if (this.atkPos) {
            var weapon = player.get(WeaponDepotComp).curWeapon;
            var dirComp = weapon.get(WeaponDirectionComp);
            dirComp.direction = this.atkPos;
          }
          if (this.atkLong >= 1) {
            if (!player.get(WeaponCastComp)) {
              player.add(WeaponCastComp);
            }
          } else {
            if (player.get(WeaponCastComp)) {
              player.remove(WeaponCastComp);
            }
          }
        };
        return PaperBattleRocker;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "atkNode", [_dec3], {
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
  r('virtual:///prerequisite-imports/paper-battle-rocker', 'chunks:///_virtual/paper-battle-rocker'); 
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