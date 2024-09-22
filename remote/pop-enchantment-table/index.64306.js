System.register("chunks:///_virtual/pop-enchantment-table", ['./PopEnchantmentTable.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopEnchantmentTable.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "577b1B8HsNA3IsZHHEYkKrq", "PopEnchantmentTable", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopEnchantmentTable = exports('PopEnchantmentTable', (_dec = ccclass('PopEnchantmentTable'), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopEnchantmentTable, _BaseView);
        function PopEnchantmentTable() {
          return _BaseView.apply(this, arguments) || this;
        }
        var _proto = PopEnchantmentTable.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {}

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopEnchantmentTable>({name: 'PopEnchantmentTable', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        return PopEnchantmentTable;
      }(BaseView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-enchantment-table', 'chunks:///_virtual/pop-enchantment-table'); 
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