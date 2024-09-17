System.register("chunks:///_virtual/paper-home-top-info", ['./PaperHomeTopInfo.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperHomeTopInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _createClass, cclegacy, _decorator, BaseView;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b19a0WqxxFA+7entjtkLGN5", "PaperHomeTopInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperHomeTopInfo = exports('PaperHomeTopInfo', (_dec = ccclass('PaperHomeTopInfo'), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(PaperHomeTopInfo, _BaseView);
        var _super = _createSuper(PaperHomeTopInfo);
        function PaperHomeTopInfo() {
          _classCallCheck(this, PaperHomeTopInfo);
          return _super.apply(this, arguments);
        }
        _createClass(PaperHomeTopInfo, [{
          key: "onLoad",
          value:
          // 初始化的相关逻辑写在这
          function onLoad() {}

          // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        }, {
          key: "onShow",
          value: function onShow(params) {}

          // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        }, {
          key: "onHide",
          value: function onHide(result) {
            // app.manager.ui.show<PaperHomeTopInfo>({name: 'PaperHomeTopInfo', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
            return result;
          }
        }]);
        return PaperHomeTopInfo;
      }(BaseView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/paper-home-top-info', 'chunks:///_virtual/paper-home-top-info'); 
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