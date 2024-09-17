System.register("chunks:///_virtual/paper-battle-map", ['./PaperBattleMap.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperBattleMap.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Camera, BaseView, app;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Camera = module.Camera;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e4b38LtPRBBvKcr/1RmPjZ+", "PaperBattleMap", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperBattleMap = exports('PaperBattleMap', (_dec = ccclass('PaperBattleMap'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inherits(PaperBattleMap, _BaseView);
        var _super = _createSuper(PaperBattleMap);
        function PaperBattleMap() {
          var _this;
          _classCallCheck(this, PaperBattleMap);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "gameMap", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "layerNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "mapCamera", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        _createClass(PaperBattleMap, [{
          key: "onLoad",
          value:
          // 初始化的相关逻辑写在这
          function onLoad() {
            // app.manager.battle.initECS();
            app.manager.battle.startGame({
              layerNode: this.layerNode,
              gameMap: this.gameMap,
              mapCamera: this.mapCamera
            });
          }

          // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        }, {
          key: "onShow",
          value: function onShow(params) {}

          // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        }, {
          key: "onHide",
          value: function onHide(result) {
            // app.manager.ui.show<PaperBattleMap>({name: 'PaperBattleMap', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
            return result;
          }
        }]);
        return PaperBattleMap;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layerNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapCamera", [_dec4], {
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
  r('virtual:///prerequisite-imports/paper-battle-map', 'chunks:///_virtual/paper-battle-map'); 
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