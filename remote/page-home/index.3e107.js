System.register("chunks:///_virtual/page-home", ['./PageHome.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageHome.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, BaseView, app;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "45304IjdH9MmrLnz92GhtC0", "PageHome", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageHome = exports('PageHome', (_dec = ccclass('PageHome'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PageHome, _BaseView);
        function PageHome() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "startNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "supportNode", _descriptor2, _assertThisInitialized(_this));
          // 子界面列表，数组顺序为子界面排列顺序
          _this.miniViews = [];
          return _this;
        }
        var _proto = PageHome.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.startNode.on(Button.EventType.CLICK, this.onClickStartGame, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {
          this.showMiniViews({
            views: this.miniViews
          });
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PageHome>({name: 'PageHome', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onClickStartGame = function onClickStartGame() {
          app.manager.ui.show({
            name: 'TopLoading',
            onShow: function onShow() {
              app.manager.ui.show({
                name: 'PageBattle'
              });
            }
          });
        };
        return PageHome;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "supportNode", [_dec3], {
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
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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