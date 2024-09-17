System.register("chunks:///_virtual/pop-warehouse", ['./PopWarehouse.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopWarehouse.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './ItemPrefab.ts', './app.ts', './BattleUtil.ts', './cc-comp-list-view.ts', './ListView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, BaseView, ItemPrefab, app, BattleUtil, ListView;
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
      ItemPrefab = module.ItemPrefab;
    }, function (module) {
      app = module.app;
    }, function (module) {
      BattleUtil = module.default;
    }, null, function (module) {
      ListView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e82effC9z1O1IxKbFgkIAa7", "PopWarehouse", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopWarehouse = exports('PopWarehouse', (_dec = ccclass('PopWarehouse'), _dec2 = property(ListView), _dec3 = property(ListView), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopWarehouse, _BaseView);
        function PopWarehouse() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "warehouseListView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bagListView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopWarehouse.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.updateUI();
          this.closeNode.on(Button.EventType.CLICK, this.onClose, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopWarehouse>({name: 'PopWarehouse', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.updateUI = function updateUI() {
          this.warehouseListView.count = app.config.game.WarehouseCapacity;
          this.bagListView.count = app.config.game.BagCapacity;
        };
        _proto.onBagRenderEvent = function onBagRenderEvent(item, index) {
          var _this2 = this;
          var data = app.store.player.bag[index];
          item.getComponent(ItemPrefab).updateUI(data, function () {
            // 背包的道具放到仓库
            app.store.player.addItemToWarehouse(BattleUtil.deepClone(data));
            //删除背包的道具
            app.store.player.removeItemFromBag(index);
            // 更新UI
            _this2.updateUI();
          });
        };
        _proto.onWarehouseRenderEvent = function onWarehouseRenderEvent(item, index) {
          var _this3 = this;
          var data = app.store.player.warehouse[index];
          item.getComponent(ItemPrefab).updateUI(data, function () {
            // 仓库的道具放到背包
            app.store.player.addItemToBag(BattleUtil.deepClone(data));
            //删除仓库的道具
            app.store.player.removeItemFromWarehouse(index);
            // 更新UI
            _this3.updateUI();
          });
        };
        _proto.onClose = function onClose() {
          app.manager.ui.hide({
            name: 'PopWarehouse'
          });
        };
        return PopWarehouse;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "warehouseListView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bagListView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeNode", [_dec4], {
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
  r('virtual:///prerequisite-imports/pop-warehouse', 'chunks:///_virtual/pop-warehouse'); 
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