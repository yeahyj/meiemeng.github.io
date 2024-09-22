System.register("chunks:///_virtual/pop-wearable-equipment", ['./PopWearableEquipment.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopWearableEquipment.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
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
      cclegacy._RF.push({}, "7ebb3OHTedJc6F0Vv7UZzYI", "PopWearableEquipment", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopWearableEquipment = exports('PopWearableEquipment', (_dec = ccclass('PopWearableEquipment'), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopWearableEquipment, _BaseView);
        function PopWearableEquipment() {
          return _BaseView.apply(this, arguments) || this;
        }
        var _proto = PopWearableEquipment.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {}

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopWearableEquipment>({name: 'PopWearableEquipment', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        return PopWearableEquipment;
      }(BaseView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-wearable-equipment', 'chunks:///_virtual/pop-wearable-equipment'); 
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