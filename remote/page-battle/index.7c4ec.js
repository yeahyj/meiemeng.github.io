System.register("chunks:///_virtual/page-battle", ['./PageBattle.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageBattle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, BaseView, app;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f06f8MRvTNGuaMMe5/TALcx", "PageBattle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageBattle = exports('PageBattle', (_dec = ccclass('PageBattle'), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(PageBattle, _BaseView);
        var _super = _createSuper(PageBattle);
        function PageBattle() {
          var _this;
          _classCallCheck(this, PageBattle);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          // 子界面列表，数组顺序为子界面排列顺序
          _defineProperty(_assertThisInitialized(_this), "miniViews", ['PaperBattleMap', 'PaperBattleRocker', 'PaperBattleInfo', 'PaperBattleInteractionMenu', 'PaperBattleTask']);
          return _this;
        }
        _createClass(PageBattle, [{
          key: "onLoad",
          value:
          // 初始化的相关逻辑写在这
          function onLoad() {
            //为了测试效果，这里加载时间设置为2秒
            this.scheduleOnce(function () {
              app.manager.ui.hide({
                name: 'TopLoading'
              });
            }, 1);
          }
        }, {
          key: "start",
          value: function start() {}

          // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        }, {
          key: "onShow",
          value: function onShow(params) {
            this.showMiniViews({
              views: this.miniViews
            });
          }

          // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        }, {
          key: "onHide",
          value: function onHide(result) {
            // app.manager.ui.show<PageBattle>({name: 'PageBattle', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
            return result;
          }
        }]);
        return PageBattle;
      }(BaseView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/page-battle', 'chunks:///_virtual/page-battle'); 
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