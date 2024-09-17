System.register("chunks:///_virtual/app-controller", ['./BattleController.ts', './StartController.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BattleController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _createClass, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d115b/6lNBOTqclJC1cA7Da", "BattleController", undefined);
      var BattleController = exports('BattleController', /*#__PURE__*/function (_BaseController) {
        _inherits(BattleController, _BaseController);
        var _super = _createSuper(BattleController);
        function BattleController() {
          _classCallCheck(this, BattleController);
          return _super.apply(this, arguments);
        }
        _createClass(BattleController, [{
          key: "playerDead",
          value:
          // controller中发射事件, view中监听事件:
          // 1、view中需要将 「extends BaseView」 改为=> 「extends BaseView.bindController(BattleController)」
          // 2、view中使用this.controller.on监听事件

          function playerDead() {
            this.emit(BattleController.Event.PlayerDead);
          }
        }, {
          key: "addNPCInteractionMenu",
          value: function addNPCInteractionMenu(interaction) {
            this.emit(BattleController.Event.AddNPCInteractionMenu, interaction);
          }
        }, {
          key: "showTask",
          value: function showTask() {
            this.emit(BattleController.Event.ShowTask);
          }
        }, {
          key: "updateTaskProgress",
          value: function updateTaskProgress() {
            this.emit(BattleController.Event.UpdateTaskProgress);
          }
        }, {
          key: "hideTask",
          value: function hideTask() {
            this.emit(BattleController.Event.HideTask);
          }
        }]);
        return BattleController;
      }(BaseController()));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _createClass, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f3c00c9xBdHTpKBR6AZ/efS", "StartController", undefined);
      var StartController = exports('StartController', /*#__PURE__*/function (_BaseController) {
        _inherits(StartController, _BaseController);
        var _super = _createSuper(StartController);
        function StartController() {
          _classCallCheck(this, StartController);
          return _super.apply(this, arguments);
        }
        _createClass(StartController, [{
          key: "SelectGameType",
          value:
          // controller中发射事件, view中监听事件:
          // 1、view中需要将 「extends BaseView」 改为=> 「extends BaseView.bindController(StartController)」
          // 2、view中使用this.controller.on监听事件
          function SelectGameType(type) {
            this.emit(StartController.Event.SelectGameType, type);
          }
        }]);
        return StartController;
      }(BaseController()));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-controller', 'chunks:///_virtual/app-controller'); 
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