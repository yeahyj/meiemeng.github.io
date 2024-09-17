System.register("chunks:///_virtual/app-controller", ['./BattleController.ts', './StartController.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BattleController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d115b/6lNBOTqclJC1cA7Da", "BattleController", undefined);
      var BattleController = exports('BattleController', /*#__PURE__*/function (_BaseController) {
        _inheritsLoose(BattleController, _BaseController);
        function BattleController() {
          return _BaseController.apply(this, arguments) || this;
        }
        var _proto = BattleController.prototype;
        // controller中发射事件, view中监听事件:
        // 1、view中需要将 「extends BaseView」 改为=> 「extends BaseView.bindController(BattleController)」
        // 2、view中使用this.controller.on监听事件
        _proto.playerDead = function playerDead() {
          this.emit(BattleController.Event.PlayerDead);
        };
        _proto.addNPCInteractionMenu = function addNPCInteractionMenu(interaction) {
          this.emit(BattleController.Event.AddNPCInteractionMenu, interaction);
        };
        _proto.showTask = function showTask() {
          this.emit(BattleController.Event.ShowTask);
        };
        _proto.updateTaskProgress = function updateTaskProgress() {
          this.emit(BattleController.Event.UpdateTaskProgress);
        };
        _proto.hideTask = function hideTask() {
          this.emit(BattleController.Event.HideTask);
        };
        return BattleController;
      }(BaseController()));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f3c00c9xBdHTpKBR6AZ/efS", "StartController", undefined);
      var StartController = exports('StartController', /*#__PURE__*/function (_BaseController) {
        _inheritsLoose(StartController, _BaseController);
        function StartController() {
          return _BaseController.apply(this, arguments) || this;
        }
        var _proto = StartController.prototype;
        // controller中发射事件, view中监听事件:
        // 1、view中需要将 「extends BaseView」 改为=> 「extends BaseView.bindController(StartController)」
        // 2、view中使用this.controller.on监听事件
        _proto.SelectGameType = function SelectGameType(type) {
          this.emit(StartController.Event.SelectGameType, type);
        };
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