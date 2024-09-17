System.register("chunks:///_virtual/paper-battle-task", ['./PaperBattleTask.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperBattleTask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './BattleController.ts', './TaskModelComp.ts', './TaskConfig.ts', './app.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _createClass, _applyDecoratedDescriptor, cclegacy, _decorator, ProgressBar, Label, Sprite, v3, UIOpacity, tween, BaseView, BattleController, TaskModelComp, DB_TaskConfig, app;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Sprite = module.Sprite;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ceadfwGaw1Nor6rlQiUFFa3", "PaperBattleTask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperBattleTask = exports('PaperBattleTask', (_dec = ccclass('PaperBattleTask'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inherits(PaperBattleTask, _BaseView$BindControl);
        var _super = _createSuper(PaperBattleTask);
        function PaperBattleTask() {
          var _this;
          _classCallCheck(this, PaperBattleTask);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "taskProg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "taskLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "taskSp", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        _createClass(PaperBattleTask, [{
          key: "onLoad",
          value:
          // 初始化的相关逻辑写在这
          function onLoad() {
            this.hideTask();
            this.controller.on(BattleController.Event.ShowTask, this.showTask, this);
            this.controller.on(BattleController.Event.UpdateTaskProgress, this.updateTaskProgress, this);
            this.controller.on(BattleController.Event.HideTask, this.hideTask, this);
          }

          // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        }, {
          key: "onShow",
          value: function onShow(params) {}

          // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        }, {
          key: "onHide",
          value: function onHide(result) {
            // app.manager.ui.show<PaperBattleTask>({name: 'PaperBattleTask', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
            return result;
          }

          //展示任务
        }, {
          key: "showTask",
          value: function showTask() {
            this.taskProg.node.active = true;
            var taskEntity = app.manager.battle.taskEntity;
            var taskModel = taskEntity.get(TaskModelComp);
            var taskId = taskModel.taskId;
            var taskConfig = DB_TaskConfig[taskId];
            this.taskLab.string = taskConfig.name;

            // 节点从右到左位移过来动画
            var oldX = this.taskProg.node.position.x;
            var newX = oldX - 500; // 假设向左移动200个单位
            var duration = 0.5; // 动画持续时间为0.5秒
            this.taskProg.node.setPosition(v3(newX, this.taskProg.node.position.y));
            this.taskProg.node.getComponent(UIOpacity).opacity = 0;
            tween(this.taskProg.node).to(duration, {
              position: v3(oldX, this.taskProg.node.position.y)
            }, {
              easing: 'cubicOut'
            }).start();
            tween(this.taskProg.node.getComponent(UIOpacity)).to(duration, {
              opacity: 255
            }, {
              easing: 'cubicOut'
            }).start();
            this.updateTaskProgress();
          }

          //更新任务进度
        }, {
          key: "updateTaskProgress",
          value: function updateTaskProgress() {
            var taskEntity = app.manager.battle.taskEntity;
            var taskModel = taskEntity.get(TaskModelComp);
            var totalProgress = taskModel.totalProgress;
            var currentProgress = taskModel.currentProgress;
            this.taskProg.progress = currentProgress / totalProgress;
          }

          //隐藏任务
        }, {
          key: "hideTask",
          value: function hideTask() {
            this.taskProg.node.active = false;
          }
        }]);
        return PaperBattleTask;
      }(BaseView.BindController(BattleController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "taskProg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "taskLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "taskSp", [_dec4], {
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
  r('virtual:///prerequisite-imports/paper-battle-task', 'chunks:///_virtual/paper-battle-task'); 
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