System.register("chunks:///_virtual/top-loading", ['./TopLoading.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TopLoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, BaseView;
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
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e3c9dfISHpBgZSmSrVR4fS/", "TopLoading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TopLoading = exports('TopLoading', (_dec = ccclass('TopLoading'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(TopLoading, _BaseView);
        function TopLoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tipLab", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TopLoading.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          // 定义一个字符串数组，包含要显示的提示文字
          var tips = ['加载中', '加载中.', '加载中..', '加载中...'];
          var currentTipIndex = 0;

          // 创建一个定时器，每秒更新一次提示文字
          this.schedule(function () {
            _this2.tipLab.string = tips[currentTipIndex];
            currentTipIndex = (currentTipIndex + 1) % tips.length;
          }, 0.5);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<TopLoading>({name: 'TopLoading', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        return TopLoading;
      }(BaseView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/top-loading', 'chunks:///_virtual/top-loading'); 
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