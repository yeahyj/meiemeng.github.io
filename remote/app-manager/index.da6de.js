System.register("chunks:///_virtual/app-manager", ['./BattleManager.ts', './ConfigManager.ts', './NodePoolManager.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BattleManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts', './ConstType.ts', './ControlEntity.ts', './ControlSystem.ts', './MapEntity.ts', './RoleEntity.ts', './ECS.ts', './CameraFollowComp.ts', './ColliderComp.ts', './FactionTypeComp.ts', './RoleViewComp.ts', './MapLoadComp.ts', './NPCInteractionMenuComp.ts', './IsPlayerComp.ts', './PlayerDeathComp.ts', './RoleModelComp.ts', './WeaponDepotComp.ts', './app.ts', './ECSModel.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _defineProperty, _assertThisInitialized, _createClass, _get, _getPrototypeOf, cclegacy, _decorator, Node, UITransform, Widget, BaseManager, MapLayerNames, FactionType, EntityType, ControlEntity, ControlSystem, MapEntity, RoleEntity, ecs, CameraFollowComp, ColliderComp, FactionTypeComp, RoleViewComp, MapLoadComp, NPCInteractionMenuComp, IsPlayerComp, PlayerDeathComp, RoleModelComp, WeaponDepotComp, app, ECSModel;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _get = module.get;
      _getPrototypeOf = module.getPrototypeOf;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Widget = module.Widget;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      MapLayerNames = module.MapLayerNames;
      FactionType = module.FactionType;
      EntityType = module.EntityType;
    }, function (module) {
      ControlEntity = module.ControlEntity;
    }, function (module) {
      ControlSystem = module.ControlSystem;
    }, function (module) {
      MapEntity = module.MapEntity;
    }, function (module) {
      RoleEntity = module.RoleEntity;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CameraFollowComp = module.CameraFollowComp;
    }, function (module) {
      ColliderComp = module.ColliderComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      RoleViewComp = module.RoleViewComp;
    }, function (module) {
      MapLoadComp = module.MapLoadComp;
    }, function (module) {
      NPCInteractionMenuComp = module.NPCInteractionMenuComp;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      PlayerDeathComp = module.PlayerDeathComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ECSModel = module.ECSModel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "55440Zy79VEG76MOGL//8AH", "BattleManager", undefined);
      var ccclass = _decorator.ccclass;
      var BattleManager = exports('BattleManager', (_dec = ccclass('BattleManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inherits(BattleManager, _BaseManager);
        var _super = _createSuper(BattleManager);
        function BattleManager() {
          var _this;
          _classCallCheck(this, BattleManager);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          /** ECS */
          _defineProperty(_assertThisInitialized(_this), "ecs", new ecs.RootSystem());
          /** 战斗控制器实体  */
          _defineProperty(_assertThisInitialized(_this), "controlEntity", void 0);
          /**地图控制实体 */
          _defineProperty(_assertThisInitialized(_this), "mapEntity", void 0);
          /**地图组件实体 */
          _defineProperty(_assertThisInitialized(_this), "mapCompEntity", void 0);
          /**玩家实体 */
          _defineProperty(_assertThisInitialized(_this), "playerEntity", void 0);
          /**任务实体 */
          _defineProperty(_assertThisInitialized(_this), "taskEntity", void 0);
          /**战斗layer */
          _defineProperty(_assertThisInitialized(_this), "layerNode", void 0);
          /**地图 */
          _defineProperty(_assertThisInitialized(_this), "gameMap", void 0);
          /**地图摄像机 */
          _defineProperty(_assertThisInitialized(_this), "mapCamera", void 0);
          /**battlePage */
          _defineProperty(_assertThisInitialized(_this), "battlePage", void 0);
          /**所有角色 */
          _defineProperty(_assertThisInitialized(_this), "roleMap", new Map());
          /**当前第几帧,用来判断ecs是否在同一帧 */
          _defineProperty(_assertThisInitialized(_this), "frame", 0);
          /**地图id */
          _defineProperty(_assertThisInitialized(_this), "mapId", void 0);
          /**加载数量 */
          _defineProperty(_assertThisInitialized(_this), "loadCount", 0);
          /**当前加载数量 */
          _defineProperty(_assertThisInitialized(_this), "currentLoadCount", 0);
          return _this;
        }
        _createClass(BattleManager, [{
          key: "onLoad",
          value:
          // [无序] 加载完成时触发
          function onLoad() {}

          // [无序] 自身初始化完成, init执行完毕后被调用
        }, {
          key: "onInited",
          value: function onInited() {}

          // [无序] 所有manager初始化完成
        }, {
          key: "onFinished",
          value: function onFinished() {}

          // [无序] 初始化manager，在初始化完成后，调用finish方法
          // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        }, {
          key: "init",
          value: function init(finish) {
            _get(_getPrototypeOf(BattleManager.prototype), "init", this).call(this, finish);
            this.ecs = new ecs.RootSystem();
            this.ecs.add(new ControlSystem());
          }

          /**开始游戏 */
        }, {
          key: "startGame",
          value: function startGame(data) {
            this.layerNode = data.layerNode;
            this.gameMap = data.gameMap;
            this.mapCamera = data.mapCamera;
            for (var i = 0; i < MapLayerNames.length; ++i) {
              var layerNode = this.createFullScreenNode();
              layerNode.name = 'layer_' + (MapLayerNames[i] ? MapLayerNames[i] : i);
              this.layerNode.addChild(layerNode);
            }
            this.controlEntity = ecs.getEntity(ControlEntity);
            this.controlEntity.add(ColliderComp);
            this.mapEntity = ecs.getEntity(MapEntity);
            this.mapEntity.add(CameraFollowComp);
            this.mapEntity.get(CameraFollowComp).camera = this.mapCamera;
            this.playerEntity = ecs.getEntity(RoleEntity);
            this.playerEntity.add(NPCInteractionMenuComp);
            this.playerEntity.add(IsPlayerComp);
            this.playerEntity.get(RoleModelComp).init({
              roleId: app.store.player.roleId,
              lv: app.store.player.lv,
              difficulty: 1
            });
            this.playerEntity.addComponents(PlayerDeathComp);
            this.playerEntity.get(FactionTypeComp).faction = FactionType.ALLY;
            this.playerEntity.get(FactionTypeComp).type = EntityType.ROLE;
            this.playerEntity.get(WeaponDepotComp).addMoreWeapon(app.store.player.battleWeapon);
            this.switchMap({
              mapId: 100101
            });
          }

          /**切换地图 */
        }, {
          key: "switchMap",
          value: function switchMap(data) {
            app.store.game.save();
            this.clearEntities();
            this.mapEntity.add(MapLoadComp).init(data);
          }

          /**清除实体 */
        }, {
          key: "clearEntities",
          value: function clearEntities() {
            var _this2 = this;
            ECSModel.eid2Entity.forEach(function (e) {
              if (e.eid != _this2.playerEntity.eid && e.eid != _this2.mapEntity.eid && e.eid != _this2.controlEntity.eid && (!e.parent || e.parent.eid != _this2.playerEntity.eid)) {
                e.destroy();
              }
            });
          }

          /**地图新增节点 */
        }, {
          key: "addChildren",
          value: function addChildren(node, layer) {
            var layerNode = this.layerNode.getChildByName('layer_' + MapLayerNames[layer]);
            if (layerNode) {
              layerNode.addChild(node);
              node.layer = this.gameMap.layer;
              for (var i = 0; i < node.children.length; i++) {
                node.children[i].layer = layerNode.layer;
              }
              this.pushRoleByFaction(node);
            } else {
              console.error('layerNode not found', layer);
            }
          }

          /**
           * Pushes a role by faction.
           *
           * @param {Node} roleNode - The role node to push.
           */
        }, {
          key: "pushRoleByFaction",
          value: function pushRoleByFaction(roleNode) {
            var view = roleNode.getComponent(RoleViewComp);
            if (view) {
              var role = view.ent;
              var funcComp = role.get(FactionTypeComp);
              if (funcComp) {
                var faction = funcComp.faction;
                var list = this.roleMap.get(faction);
                list = list || [];
                if (list.indexOf(role) == -1) {
                  list.push(role);
                }
                this.roleMap.set(faction, list);
              }
            }
          }

          /**创建全屏节点 */
        }, {
          key: "createFullScreenNode",
          value: function createFullScreenNode() {
            var node = new Node();
            node.layer = this.gameMap.layer;
            var uiTransform = node.addComponent(UITransform);
            uiTransform.anchorX = 0;
            uiTransform.anchorY = 0;
            var widget = node.addComponent(Widget);
            widget.isAlignBottom = true;
            widget.isAlignTop = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.left = 0;
            widget.right = 0;
            widget.top = 0;
            widget.bottom = 0;
            return node;
          }
        }, {
          key: "update",
          value: function update(dt) {
            var _this$ecs;
            this.frame++;
            (_this$ecs = this.ecs) === null || _this$ecs === void 0 || _this$ecs.execute(dt);
          }
        }]);
        return BattleManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _createClass, _get, _getPrototypeOf, cclegacy, _decorator, BaseManager;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _createClass = module.createClass;
      _get = module.get;
      _getPrototypeOf = module.getPrototypeOf;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "517bbVvSv9HJYYmTaA7woIp", "ConfigManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ConfigManager = exports('ConfigManager', (_dec = ccclass('ConfigManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inherits(ConfigManager, _BaseManager);
        var _super = _createSuper(ConfigManager);
        function ConfigManager() {
          _classCallCheck(this, ConfigManager);
          return _super.apply(this, arguments);
        }
        _createClass(ConfigManager, [{
          key: "onLoad",
          value:
          // [无序] 加载完成时触发
          function onLoad() {}

          // [无序] 自身初始化完成, init执行完毕后被调用
        }, {
          key: "onInited",
          value: function onInited() {}

          // [无序] 所有manager初始化完成
        }, {
          key: "onFinished",
          value: function onFinished() {}

          // [无序] 初始化manager，在初始化完成后，调用finish方法
        }, {
          key: "init",
          value: function init(finish) {
            _get(_getPrototypeOf(ConfigManager.prototype), "init", this).call(this, finish);
          }
        }]);
        return ConfigManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodePoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inherits, _createSuper, _classCallCheck, _createClass, _get, _getPrototypeOf, cclegacy, _decorator, BaseManager;
  return {
    setters: [function (module) {
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _createClass = module.createClass;
      _get = module.get;
      _getPrototypeOf = module.getPrototypeOf;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b06402GMrlCs6MxszfTtSv9", "NodePoolManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NodePoolManager = exports('NodePoolManager', (_dec = ccclass('NodePoolManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inherits(NodePoolManager, _BaseManager);
        var _super = _createSuper(NodePoolManager);
        function NodePoolManager() {
          _classCallCheck(this, NodePoolManager);
          return _super.apply(this, arguments);
        }
        _createClass(NodePoolManager, [{
          key: "onLoad",
          value:
          // [无序] 加载完成时触发
          function onLoad() {}

          // [无序] 自身初始化完成, init执行完毕后被调用
        }, {
          key: "onInited",
          value: function onInited() {}

          // [无序] 所有manager初始化完成
        }, {
          key: "onFinished",
          value: function onFinished() {}

          // [无序] 初始化manager，在初始化完成后，调用finish方法
        }, {
          key: "init",
          value: function init(finish) {
            _get(_getPrototypeOf(NodePoolManager.prototype), "init", this).call(this, finish);
          }
        }]);
        return NodePoolManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-manager', 'chunks:///_virtual/app-manager'); 
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