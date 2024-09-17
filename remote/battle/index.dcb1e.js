System.register("chunks:///_virtual/AfterDeathMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './DeathComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, DeathComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      DeathComp = module.DeathComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b30c4rIH2lB/7P6mEWRaa9/", "AfterDeathMarkerComp", undefined);

      /**
       * 死亡后
       * 用来死亡逻辑
       */
      var AfterDeathMarkerComp = exports('AfterDeathMarkerComp', (_dec = ecs.register('AfterDeathMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(AfterDeathMarkerComp, _ecs$Comp);
        function AfterDeathMarkerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //当前时间
          _this.curTime = 5;
          return _this;
        }
        var _proto = AfterDeathMarkerComp.prototype;
        _proto.reset = function reset() {
          this.curTime = 5;
        };
        return AfterDeathMarkerComp;
      }(ecs.Comp)) || _class));

      /**死亡后系统 */
      var AfterDeathMarkerSystem = exports('AfterDeathMarkerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(AfterDeathMarkerSystem, _ecs$ComblockSystem);
        var _proto2 = AfterDeathMarkerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(AfterDeathMarkerComp);
        };
        function AfterDeathMarkerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(AfterDeathMarkerComp);
          if (comp.curTime <= 0) {
            e.add(DeathComp);
          } else {
            comp.curTime -= this.dt;
          }
        };
        return AfterDeathMarkerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssassinMsComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleModelComp.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, RoleModelComp, AttributeType, CorrectionSourceType, CorrectionType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      AttributeType = module.AttributeType;
      CorrectionSourceType = module.CorrectionSourceType;
      CorrectionType = module.CorrectionType;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "833aet5WgtDtZHlY4Bxbt5e", "AssassinMsComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落物品组件
       */
      var AssassinMsComp = exports('AssassinMsComp', (_dec = ccclass('AssassinMsComp'), _dec2 = ecs.register('AssassinMsComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(AssassinMsComp, _ecs$Comp);
        function AssassinMsComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.correctionAttributeData = {
            source: CorrectionSourceType.EQUIP,
            value: 2,
            type: CorrectionType.MODIFIER
          };
          return _this;
        }
        var _proto = AssassinMsComp.prototype;
        _proto.reset = function reset() {};
        return AssassinMsComp;
      }(ecs.Comp)) || _class) || _class));

      /**掉落物品组件系统 */
      var PrecisionMsSystem = exports('PrecisionMsSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(PrecisionMsSystem, _ref);
        var _proto2 = PrecisionMsSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(AssassinMsComp);
        };
        function PrecisionMsSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.get(RoleModelComp).attributes.addCorrection(AttributeType.critDamage, e.get(AssassinMsComp).correctionAttributeData);
        };
        _proto2.entityRemove = function entityRemove(e) {
          e.get(RoleModelComp).attributes.removeCorrection(AttributeType.critDamage, e.get(AssassinMsComp).correctionAttributeData);
        };
        return PrecisionMsSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AtkDetectorComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Object.ts', './ECS.ts', './FactionTypeComp.ts', './Collider.ts', './Shape.ts', './ConstType.ts', './StateMachineComp.ts', './DeathComp.ts', './BaseUnit.ts', './AfterDeathMarkerComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, PhysicsSystem, Vec3, Dirty, cObject, ecs, FactionTypeComp, cCollider, ShapeType, EntityType, RoleStateMachineType, StateMachineComp, DeathComp, BaaseUnit, AfterDeathMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem = module.PhysicsSystem;
      Vec3 = module.Vec3;
    }, function (module) {
      Dirty = module.Dirty;
      cObject = module.cObject;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      cCollider = module.cCollider;
    }, function (module) {
      ShapeType = module.ShapeType;
    }, function (module) {
      EntityType = module.EntityType;
      RoleStateMachineType = module.RoleStateMachineType;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }, function (module) {
      DeathComp = module.DeathComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "5dcf5AwerZNIKhzNSNpNeuy", "AtkDetectorComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //Payer 探测触发器
      var AtkDetectorComp = exports('AtkDetectorComp', (_dec = ccclass('AtkDetectorComp'), _dec2 = ecs.register('AtkDetectorComp', false), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_cObject) {
        _inheritsLoose(AtkDetectorComp, _cObject);
        function AtkDetectorComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cObject.call.apply(_cObject, [this].concat(args)) || this;
          _this.pursueRadius = 500;
          _this.attackRadius = 300;
          _this.canRecycle = void 0;
          _this.ent = void 0;
          return _this;
        }
        var _proto = AtkDetectorComp.prototype;
        _proto.onLoad = function onLoad() {
          this.type = ShapeType.Sphere;
          this.radius = this.pursueRadius;
          _cObject.prototype.onLoad.call(this);
        };
        _proto.start = function start() {
          //自定义设置掩码,收集范围内的敌人和物品
          // this.body.group = this.ent.get(FactionTypeComp).detectorGroup; //不接受任何掩码
          this.body.group = 0; //不接受任何掩码
          // this.body.mask = this.ent.get(FactionTypeComp).mask;
          this.body.mask = PhysicsSystem.instance.collisionMatrix[this.ent.get(FactionTypeComp).group];
          // this.removeCollider();
        };

        _proto.update = function update(dt) {
          //需要实时，同步更新 player 位置
          this.isDirty |= Dirty.T;
        }

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          _cObject.prototype.onTriggerEnter.call(this, b);
          //找到了可以攻击的目标
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          _cObject.prototype.onTriggerStay.call(this, b);
          if (this.ent && this.ent.get(FactionTypeComp).type == EntityType.ROLE) {
            //世界中心坐标
            var cb = b.getCenter();
            var ca = this.body.getCenter();
            var lengthSqr = Vec3.squaredDistance(ca, cb);
            var state = this.ent.get(StateMachineComp);
            var enemyEnt = b.object.getComponent(BaaseUnit).ent;
            //攻击半径
            if (enemyEnt && enemyEnt.get(FactionTypeComp).type == EntityType.ROLE && lengthSqr < this.pursueRadius * this.pursueRadius && state.currentStateType != RoleStateMachineType.Pursue && state.currentStateType != RoleStateMachineType.Atk && !this.ent.get(DeathComp) && !this.ent.get(AfterDeathMarkerComp)) {
              this.ent.get(StateMachineComp).changeState(RoleStateMachineType.Pursue);
              this.ent.get(StateMachineComp).nextData = b.object.getComponent(BaaseUnit).ent;
            }
          }
        }

        /**碰撞退出 */;
        _proto.onTriggerExit = function onTriggerExit(b) {
          _cObject.prototype.onTriggerExit.call(this, b);
        }

        //加入碰撞
        ;

        _proto.addCollider = function addCollider() {
          cCollider.inst.insert(this.body);
        }

        //推出碰撞
        ;

        _proto.removeCollider = function removeCollider() {
          cCollider.inst.remove(this.body);
        };
        _proto.reset = function reset() {};
        return AtkDetectorComp;
      }(cObject), _class2.tid = -1, _class2.compName = void 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './WeaponCastMarkerComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponCastMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponCastMarkerComp = module.WeaponCastMarkerComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1c4c7RJzLZNLoWj5aPLHmaG", "AutoCastComp", undefined);

      /**
       * 自动施法组件
       */
      var AutoCastComp = exports('AutoCastComp', (_dec = ecs.register('AutoCastComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(AutoCastComp, _ecs$Comp);
        function AutoCastComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = AutoCastComp.prototype;
        _proto.reset = function reset() {};
        return AutoCastComp;
      }(ecs.Comp)) || _class));

      /**自动施法系统 */
      var AutoCastSystem = exports('AutoCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(AutoCastSystem, _ecs$ComblockSystem);
        var _proto2 = AutoCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(AutoCastComp);
        };
        function AutoCastSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.add(WeaponCastMarkerComp);
          e.remove(AutoCastComp);
        };
        return AutoCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50b2f+QuHFCAp9SENTQBMKs", "BaseEntity", undefined);

      /**
       * 基础实体
       */
      var BaseEntity = exports('BaseEntity', /*#__PURE__*/function (_ecs$Entity) {
        _inheritsLoose(BaseEntity, _ecs$Entity);
        function BaseEntity() {
          return _ecs$Entity.apply(this, arguments) || this;
        }
        var _proto = BaseEntity.prototype;
        _proto.init = function init() {
          // 初始化实体常住 ECS 组件，定义实体特性
          this.addComponents();
        };
        _proto.destroy = function destroy() {
          var _this$get;
          // 销毁实体时，清理节点
          (_this$get = this.get(UnitComp)) == null || (_this$get = _this$get.unit) == null || (_this$get = _this$get.node) == null || _this$get.destroy();
          _ecs$Entity.prototype.destroy.call(this);
        };
        return BaseEntity;
      }(ecs.Entity));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSkillComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      cclegacy._RF.push({}, "097ffLycsZCd6ZxHzo6F63p", "BaseSkillComp", undefined);
      /**
       * 基础技能组件
       */
      var BaseSkillComp = exports('BaseSkillComp', /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(BaseSkillComp, _ecs$Comp);
        function BaseSkillComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.skillId = 0;
          _this.weaponManager = null;
          _this.skillPlugin = [];
          _this.modifyPlugin = [];
          //额外组件
          _this.extraModifyPlugin = [];
          _this.lv = 1;
          return _this;
        }
        var _proto = BaseSkillComp.prototype;
        _proto.reset = function reset() {};
        _proto.init = function init(data) {
          this.weaponManager = data.weaponManager;
          this.skillId = data.skillId;
          this.skillPlugin = data.skillPlugin;
          this.modifyPlugin = data.modifyPlugin;
          this.lv = 1;
          this.initSkill();
        };
        _proto.initSkill = function initSkill() {}

        //升级组件
        ;

        _proto.upgrade = function upgrade() {
          this.lv++;
        };
        return BaseSkillComp;
      }(ecs.Comp));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUnit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Object.ts', './Collider.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, cObject, cCollider;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      cObject = module.cObject;
    }, function (module) {
      cCollider = module.cCollider;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9ef1192W4pKM7Tj7zUJYON8", "BaseUnit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      /**
       *  基础单位
       */
      var BaaseUnit = exports('BaaseUnit', /*#__PURE__*/function (_cObject) {
        _inheritsLoose(BaaseUnit, _cObject);
        function BaaseUnit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cObject.call.apply(_cObject, [this].concat(args)) || this;
          /**所属实体 */
          _this.ent = void 0;
          return _this;
        }
        var _proto = BaaseUnit.prototype;
        _proto.onLoad = function onLoad() {
          _cObject.prototype.onLoad.call(this);
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {}

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {}

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {}

        /**碰撞退出 */;
        _proto.onTriggerExit = function onTriggerExit(b) {}

        /**加入碰撞检测 */;
        _proto.addCollision = function addCollision() {
          // this.body.isAgent = false;
          // this.group = PhysicsSystem.PhysicsGroup.DEFAULT;
          // this.trigger = false;
          this.getPosition();
        }

        /**取消碰撞检测 */;
        _proto.removeCollision = function removeCollision() {
          cCollider.inst.remove(this.body, false); //TODO:这里回收会导致后面取的body没有开启碰撞，后面有时间查
          // this.remove();
        };

        return BaaseUnit;
      }(cObject));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/battle", ['./BaseSkillComp.ts', './BaseUnit.ts', './SkillMoveComp.ts', './SkillRenderComp.ts', './BaseEntity.ts', './CollisionMarkerComp.ts', './ColliderComp.ts', './CreateTaskComp.ts', './GameFailComp.ts', './GameSuccessComp.ts', './MonsterFactoryComp.ts', './PlayerShowComp.ts', './ControlEntity.ts', './ControlSystem.ts', './CollectDropComp.ts', './DropItemAfterDeathComp.ts', './DropModelComp.ts', './DropViewComp.ts', './IsDropComp.ts', './Drop.ts', './DropEntity.ts', './BigMapComp.ts', './CameraFollowComp.ts', './CreateRoleComp.ts', './DungeonComp.ts', './InfiniteMapCom.ts', './MapLoadComp.ts', './MapModelComp.ts', './MapCompEntity.ts', './MapEntity.ts', './AtkDetectorComp.ts', './AutoCastComp.ts', './CollisionComp.ts', './DamageFlyTextComp.ts', './DeathComp.ts', './DeathExpComp.ts', './DirectionComp.ts', './DropComp.ts', './DropPlayerExpComp.ts', './DropTaskExpComp.ts', './DropViewLoadComp.ts', './EnabledComp.ts', './Enemy1FsmComp.ts', './FactionTypeComp.ts', './FixedEntPositionComp.ts', './HpComp.ts', './IsPlayerComp.ts', './MoveComp.ts', './MoveOnTileComp.ts', './MpComp.ts', './MpRecoverComp.ts', './NPCInteractionMenuComp.ts', './NormalAtkComp.ts', './NotOutBoundsComp.ts', './PlayerDeathComp.ts', './PositionComp.ts', './PursueComp.ts', './PursuePlayerMoveComp.ts', './RestrictMoveComp.ts', './RoleAfterDeathComp.ts', './RoleAutoCastComp.ts', './RoleCastComp.ts', './RoleMapExtraCompComp.ts', './RoleModelComp.ts', './RoleShowAnimation1Comp.ts', './RoleStateComp.ts', './RoleTaskExtraCompComp.ts', './RoleViewComp.ts', './RoleViewLoadComp.ts', './SkeletonViewComp.ts', './SpeedComp.ts', './SpeedObstacleAvoidanceComp.ts', './StateMachineComp.ts', './TriggerNPCInteractionMenuComp.ts', './UnitComp.ts', './UpgradeComp.ts', './WeaponDepotComp.ts', './WeaponDirectionComp.ts', './AssassinMsComp.ts', './PrecisionMsComp.ts', './AfterDeathMarkerComp.ts', './BerforeDeathMarkerComp.ts', './RoleAtkMarkerComp.ts', './RoleShowMarkerComp.ts', './RoleEntity.ts', './BombComp.ts', './BombExplosionComp.ts', './ChainSawComp.ts', './CollisionFireballComp.ts', './CollisionMotionlessComp.ts', './CollisionReboundComp.ts', './CollisionTriggerComp.ts', './CreateBombExplosionComp.ts', './DeathBombExplosionComp.ts', './FireballComp.ts', './IsRoleComp.ts', './IsSkillComp.ts', './IsWeaponComp.ts', './MasterComp.ts', './SkillAfterDeathComp.ts', './SkillCompManagerComp.ts', './SkillLifeOverstepBoundaryComp.ts', './SkillLifeTimeComp.ts', './SkillManagerComp.ts', './SkillModelComp.ts', './SkillRenderLoadComp.ts', './WeaponAutoCastComp.ts', './WeaponCastComp.ts', './WeaponCompManagerComp.ts', './WeaponManagerComp.ts', './WeaponModelComp.ts', './WeaponCastMarkerComp.ts', './WeaponChargeSuccessfulMarkerComp.ts', './WeaponSilenceMarkerComp.ts', './LinearSkillMoveComp.ts', './PursueEnemyMoveComp.ts', './DoubleCastComp.ts', './Bomb.ts', './BombExplosion.ts', './ChainSaw.ts', './Fireball.ts', './SkillEntity.ts', './WeaponEntity.ts', './GenerateOneRoleComp.ts', './RandomlyGenerateMonsterComp.ts', './ShowTaskComp.ts', './TaskExpComp.ts', './TaskModelComp.ts', './TaskRoleComp.ts', './TaskRoleDeathComp.ts', './TaskEntity.ts', './BattleUtil.ts', './DamageFlyText.ts', './RoleNumeric.ts', './RoleNumericMap.ts', './SkillNumeric.ts', './SkillNumericMap.ts', './WeaponNumeric.ts', './WeaponNumericMap.ts', './ConstType.ts', './ItemPrefab.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BattleUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './MapModelComp.ts', './PositionComp.ts', './FactionTypeComp.ts', './ConstType.ts', './EnabledComp.ts', './DamageFlyText.ts', './RoleConfig.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, Vec3, instantiate, app, MapModelComp, PositionComp, FactionTypeComp, FactionType, AttributeType, MapLayersType, EnabledComp, DamageFlyText, DB_RoleConfig;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      FactionType = module.FactionType;
      AttributeType = module.AttributeType;
      MapLayersType = module.MapLayersType;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      DamageFlyText = module.DamageFlyText;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d0633V9EGhBi7XLay5cimeZ", "BattleUtil", undefined);
      var BattleUtil = exports('default', /*#__PURE__*/function () {
        function BattleUtil() {}
        /**地图里面随机取一个点 */
        BattleUtil.randomPointInMap = function randomPointInMap() {
          var comp = app.manager.battle.mapEntity.get(MapModelComp);
          //长高随机取值
          var x = Math.random() * comp.width / 2 * (Math.random() > 0.5 ? 1 : -1);
          var y = Math.random() * comp.height / 2 * (Math.random() > 0.5 ? 1 : -1);
          return new Vec3(x, y);
        }

        /**主角周围随机取点 */;
        BattleUtil.randomPointAroundPlayer = function randomPointAroundPlayer(radius) {
          var player = app.manager.battle.playerEntity;
          var map = app.manager.battle.mapEntity;
          var mapData = map.get(MapModelComp);
          var playerPos = player.get(PositionComp).getPosition(true);
          //左边有效地图最远点
          var leftX = playerPos.x - radius;
          leftX = leftX < -mapData.width / 2 ? -mapData.width / 2 : leftX;
          //右边有效地图最远点
          var rightX = playerPos.x + radius;
          rightX = rightX > mapData.width / 2 ? mapData.width / 2 : rightX;
          //下边有效地图最远点
          var downY = playerPos.y - radius;
          downY = downY < -mapData.height / 2 ? -mapData.height / 2 : downY;
          //上边有效地图最远点
          var upY = playerPos.y + radius;
          upY = upY > mapData.height / 2 ? mapData.height / 2 : upY;
          //随机取一个点
          var x = Math.random() * (rightX - leftX) + leftX;
          var y = Math.random() * (upY - downY) + downY;
          return new Vec3(x, y);
        }

        /**获取角色最近的敌人 */;
        BattleUtil.getNearestEnemy = function getNearestEnemy(role) {
          var faction = role.get(FactionTypeComp).faction;
          var enemyFaction = this.getEnemyFaction(faction);
          var list = app.manager.battle.roleMap.get(enemyFaction);
          var minDis = Number.MAX_VALUE;
          var target;
          for (var i = 0; i < list.length; i++) {
            var enemy = list[i];
            if (enemy && enemy.get(EnabledComp)) {
              var pos = role.get(PositionComp).getPosition(true);
              var enemyPos = enemy.get(PositionComp).getPosition();
              var dis = pos.subtract(enemyPos).length();
              if (dis < minDis) {
                minDis = dis;
                target = enemy;
              }
            } else {
              list.splice(i, 1);
              i--;
            }
          }
          return target;
        }

        /**获取距离最近的敌人 */;
        BattleUtil.getNearestEnemyByPos = function getNearestEnemyByPos(pos, faction) {
          var newPos = pos.clone();
          var enemyFaction = this.getEnemyFaction(faction);
          var list = app.manager.battle.roleMap.get(enemyFaction);
          var minDis = Number.MAX_VALUE;
          var target;
          for (var i = 0; i < list.length; i++) {
            var enemy = list[i];
            if (enemy && enemy.get(EnabledComp)) {
              var enemyPos = enemy.get(PositionComp).getPosition();
              var dis = newPos.subtract(enemyPos).length();
              if (dis < minDis) {
                minDis = dis;
                target = enemy;
              }
            } else {
              list.splice(i, 1);
              i--;
            }
          }
          return target;
        };
        BattleUtil.deepClone = function deepClone(obj) {
          if (obj === null || typeof obj !== 'object') {
            return obj;
          }
          if (Array.isArray(obj)) {
            return obj.map(function (item) {
              return BattleUtil.deepClone(item);
            });
          }
          var clonedObj = {};
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              clonedObj[key] = BattleUtil.deepClone(obj[key]);
            }
          }
          return clonedObj;
        }

        //根据自己阵营获取敌对阵营
        ;

        BattleUtil.getEnemyFaction = function getEnemyFaction(faction) {
          if (faction == FactionType.ALLY) {
            return FactionType.ENEMY;
          } else if (faction == FactionType.ENEMY) {
            return FactionType.ALLY;
          }
        }

        /**在数组里面随机取值，数组里面的是对象，对象里面又一个probability参数，总值可能大于1 */;
        BattleUtil.randomSelectWithProbability = function randomSelectWithProbability(arr) {
          if (arr.length === 0) {
            return null;
          }
          var totalProbability = arr.reduce(function (sum, item) {
            return sum + item.probability;
          }, 0);
          var randomValue = Math.random() * totalProbability;
          var accumulatedProbability = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            accumulatedProbability += item.probability;
            if (randomValue <= accumulatedProbability) {
              return item;
            }
          }
          return arr[arr.length - 1];
        };
        BattleUtil.getRoleAttribute = function getRoleAttribute(roleId, lv, difficulty) {
          var _ref;
          var roleConfig = DB_RoleConfig[roleId];
          var upgradeLv = lv - 1;
          return _ref = {}, _ref[AttributeType.hp] = (roleConfig[AttributeType.hp] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.hp]) * difficulty, _ref[AttributeType.hpRecover] = (roleConfig[AttributeType.hpRecover] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.hpRecover]) * difficulty, _ref[AttributeType.atk] = (roleConfig[AttributeType.atk] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.atk]) * difficulty, _ref[AttributeType.atkSpeed] = roleConfig[AttributeType.atkSpeed] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.atkSpeed], _ref[AttributeType.speed] = roleConfig[AttributeType.speed] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.speed], _ref[AttributeType.crit] = roleConfig[AttributeType.crit] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.crit], _ref[AttributeType.critDamage] = roleConfig[AttributeType.critDamage] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.critDamage], _ref[AttributeType.cdReduce] = roleConfig[AttributeType.cdReduce] + upgradeLv * roleConfig.upgradeAttribute[AttributeType.cdReduce], _ref[AttributeType.reflectDamage] = 100, _ref;
        }

        // // Add your battle utility methods here
        // // static createRole(roleId: string, baseData: any): RoleEntity {
        // //     let role = ecs.getEntity<RoleEntity>(RoleEntity);
        // //     role.get(RoleModelComp).init({ att: baseData, roleId: roleId });
        // //     return role;
        // // }
        // //节点角度转换vec3向量方向
        // static angleToVec3(angle: number, vec3: Vec3) {
        //     let radian = (angle * Math.PI) / 180;
        //     vec3.x = Math.cos(radian);
        //     vec3.y = Math.sin(radian);
        //     vec3.normalize();
        // }
        // //vec3向量方向转换节点角度
        // static vec3ToAngle(vec3: Vec3) {
        //     let angle = (Math.atan2(vec3.y, vec3.x) * 180) / Math.PI;
        //     return angle;
        // }
        // //获取伤害值
        // static getDamageValue(e: ecs.Entity) {
        //     // let damage = 0;
        //     // let roleModelComp = e.get(RoleModelComp);
        //     // if (roleModelComp) {
        //     //     damage = 10;
        //     // } else {
        //     //     let attributes = e.get(SkillModelComp).attributes;
        //     //     damage = attributes.get(SkillAttributeType.damageRatio).value * attributes.get(SkillAttributeType.spellPower).value;
        //     // }
        //     return 1; //damage;
        // }
        // //加载资源
        // static loadRes<T>(
        //     url: string,
        //     type: any,
        //     callback: (err: any, assets: T) => void,
        // ) {
        //     // let bundle = assetManager.getBundle(BundleDef.MAIN);
        //     // bundle.load(url, type, (err, asset: any) => {
        //     //     if (callback) {
        //     //         callback(err, asset);
        //     //     }
        //     // });
        // }
        // /**获取敌对身份 */
        // static getEnemyFaction(faction: FactionType) {
        //     if (faction == FactionType.ALLY) {
        //         return FactionType.ENEMY;
        //     } else if (faction == FactionType.ENEMY) {
        //         return FactionType.ALLY;
        //     }
        // }
        // // 检测点是否在多边形内部
        // static isPointInside(point: Vec2, polygon: Vec2[]): boolean {
        //     let inside = false;
        //     const polygonLength = polygon.length;
        //     for (let i = 0, j = polygonLength - 1; i < polygonLength; j = i++) {
        //         const vertexI = polygon[i];
        //         const vertexJ = polygon[j];
        //         if (
        //             vertexI.y > point.y !== vertexJ.y > point.y &&
        //             point.x <
        //                 ((vertexJ.x - vertexI.x) * (point.y - vertexI.y)) /
        //                     (vertexJ.y - vertexI.y) +
        //                     vertexI.x
        //         ) {
        //             inside = !inside;
        //         }
        //     }
        //     return inside;
        // }
        // // 旋转点
        // static rotatePoint(point: Vec2, center: Vec2, angle: number): Vec2 {
        //     const cosAngle = Math.cos(angle);
        //     const sinAngle = Math.sin(angle);
        //     const translatedX = point.x - center.x;
        //     const translatedY = point.y - center.y;
        //     const rotatedX = translatedX * cosAngle - translatedY * sinAngle;
        //     const rotatedY = translatedX * sinAngle + translatedY * cosAngle;
        //     const finalX = rotatedX + center.x;
        //     const finalY = rotatedY + center.y;
        //     return new Vec2(finalX, finalY);
        // }
        // // 两点之间的随机数，包含两点
        // static randomBetweenTwoPoints(min: number, max: number): number {
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        // }
        // // //根据dt获取真实的速度
        // // static getRealSpeedBySpeedDt(speed: Vec3, dt: number) {
        // //     let lerpValue = dt > app.config.battle.MIN_FRAME_INTERVAL_TIME ? 1 : dt / app.config.battle.MIN_FRAME_INTERVAL_TIME;
        // //     return speed.clone().multiplyScalar(lerpValue);
        // // }
        //创建飘字
        ;

        BattleUtil.createDamageFlyText = function createDamageFlyText(value, startPos) {
          app.manager.loader.load({
            path: 'common/prefab/DamageFlyText',
            bundle: 'battle',
            onComplete: function onComplete(result) {
              var node = instantiate(result);
              app.manager.battle.addChildren(node, MapLayersType.TIP);
              node.getComponent(DamageFlyText).init(value, startPos);
            }
          });
        }
        // // //获取item配置
        // // static getPropConfig(data: ItemData) {
        // //     if (data.type == BagType.equip) {
        // //         return DB_EquipConfig[data.id];
        // //     } else if (data.type == BagType.magicStone) {
        // //         return DB_MagicStoneConfig[data.id];
        // //     } else if (data.type == BagType.resource) {
        // //         return DB_ResourceConfig[data.id];
        // //     }
        // // }
        // //角度转换单位向量
        // static angleToUnitVector(angle: number): Vec3 {
        //     let radian = (angle * Math.PI) / 180; // 将角度转换为弧度
        //     return v3(Math.cos(radian), Math.sin(radian));
        // }
        // //向量转换为角度
        // static vectorToAngle(vector: Vec3): number {
        //     return (Math.atan2(vector.y, vector.x) * 180) / Math.PI;
        // }
        // // //实例一个装备
        // // static getRandomAttrEquip(equipId: string) {
        // //     let data = DB_EquipConfig[equipId];
        // //     //属性限制个数
        // //     let attrLimit = data.attrLimit;
        // //     //随机一个个数
        // //     let attrCount = attrLimit;//BattleUtil.randomBetweenTwoValues(attrLimit[0], attrLimit[1]);
        // //     //获取所有有值的属性，除了specialAttr
        // //     let attrs = [];
        // //     for (let key in data) {
        // //         if (key != 'specialAttr' && key != 'attrLimit') {
        // //             let attr = data[key];
        // //             if (Array.isArray(attr) && attr.length > 0) {
        // //                 attrs.push(key);
        // //             }
        // //         }
        // //     }
        // //     //随机取出attrCount个属性，不重复
        // //     let randomAttrs = [];
        // //     for (let i = 0; i < attrCount; i++) {
        // //         let randomIndex = BattleUtil.randomBetweenTwoPoints(0, attrs.length - 1);
        // //         randomAttrs.push(attrs[randomIndex]);
        // //         attrs.splice(randomIndex, 1);
        // //     }
        // //     //生成属性值
        // //     let attrValues = {};
        // //     for (let attr of randomAttrs) {
        // //         let value = BattleUtil.randomBetweenTwoValues(Number(data[attr][0]), Number(data[attr][1]));
        // //         attrValues[attr] = value;
        // //     }
        // //     //加上特殊属性
        // //     let specialAttr = data.specialAttr;
        // //     if (specialAttr.length > 0) {
        // //         let value = BattleUtil.randomBetweenTwoValues(Number(specialAttr[0]), Number(specialAttr[1]));
        // //         attrValues['specialAttr'] = value;
        // //     }
        // //     //加上其他必须属性
        // //     attrValues['id'] = data.id;
        // //     attrValues['name'] = data.name;
        // //     attrValues['quality'] = data.quality;
        // //     attrValues['type'] = data.type;
        // //     attrValues['lvLimit'] = data.lvLimit;
        // //     //获取一个不会重复的id
        // //     attrValues['equiupId'] = this.generateUniqueId();
        // //     return attrValues;
        // // }
        // //在两个值的范围内随机获取一个值，如果是小数则保留第一个值的小数的个数，例如(0.01, 0.03)则随机获取一个值，可能是0.01，0.02，0.03
        // static randomBetweenTwoValues(min: number, max: number): number {
        //     let minStr = min.toString();
        //     if (!max) {
        //         max = min;
        //     }
        //     let maxStr = max.toString();
        //     let minDecimal = minStr.split('.')[1];
        //     let maxDecimal = maxStr.split('.')[1];
        //     let decimalCount = Math.max(
        //         minDecimal ? minDecimal.length : 0,
        //         maxDecimal ? maxDecimal.length : 0,
        //     );
        //     let random = Math.random() * (max - min) + min;
        //     return parseFloat(random.toFixed(decimalCount));
        // }
        // static generateUniqueId() {
        //     return (
        //         Date.now().toString(36) + Math.random().toString(36).substring(2)
        //     );
        // }
        ;

        return BattleUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BerforeDeathMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './UnitComp.ts', './AfterDeathMarkerComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, UnitComp, AfterDeathMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "327d1VKVORK14b1pdceQ1l0", "BerforeDeathMarkerComp", undefined);

      /**
       * 死亡前
       * 用来处理死亡时的其他逻辑
       */
      var BerforeDeathMarkerComp = exports('BerforeDeathMarkerComp', (_dec = ecs.register('BerforeDeathMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(BerforeDeathMarkerComp, _ecs$Comp);
        function BerforeDeathMarkerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**逻辑结束帧 */
          _this.frame = 1;
          return _this;
        }
        var _proto = BerforeDeathMarkerComp.prototype;
        _proto.reset = function reset() {
          this.frame = 1;
        };
        return BerforeDeathMarkerComp;
      }(ecs.Comp)) || _class));

      /**死亡前系统 */
      var BerforeDeathMarkerSystem = exports('BerforeDeathMarkerSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(BerforeDeathMarkerSystem, _ref);
        var _proto2 = BerforeDeathMarkerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(BerforeDeathMarkerComp);
        };
        function BerforeDeathMarkerSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var _e$get;
          if (!e.get(UnitComp) || !e.get(UnitComp).unit) {
            console.error('BerforeDeathMarkerSystem entityEnter error', e);
          }
          (_e$get = e.get(UnitComp)) == null || (_e$get = _e$get.unit) == null || _e$get.removeCollision();
        };
        _proto2.update = function update(e) {
          var comp = e.get(BerforeDeathMarkerComp);
          if (comp.frame > 0) {
            comp.frame--;
            return;
          } else {
            //死亡前逻辑
            e.add(AfterDeathMarkerComp);
            e.remove(BerforeDeathMarkerComp);
          }
        };
        return BerforeDeathMarkerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BigMapComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "5b558bbuIND5bmzN7UWFXSd", "BigMapComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 摄像机跟随组件
       */
      var BigMapComp = exports('BigMapComp', (_dec = ccclass('BigMapComp'), _dec2 = ecs.register('BigMapComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(BigMapComp, _ecs$Comp);
        function BigMapComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = BigMapComp.prototype;
        _proto.reset = function reset() {};
        return BigMapComp;
      }(ecs.Comp)) || _class) || _class));

      /**摄像机跟随系统 */
      var BigMapSystem = exports('BigMapSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(BigMapSystem, _ecs$ComblockSystem);
        var _proto2 = BigMapSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(BigMapComp);
        };
        function BigMapSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          // let comp = app.manager.battle.mapEntity.get(MapModelComp);
          // let limitWidth = 200;
          // let limitHeight = 200;
          // let rowNum = Math.ceil(comp.height / limitHeight);
          // let columnNum = Math.ceil(comp.width / limitWidth);
          // let totalNum = rowNum * columnNum;
          // // 在地图上随机取totalNum个点
          // let mapConfig = DB_MapConfig[comp.mapId];
          // //TODO:后面这里读配置表
          // let monsterFactoryConfig = DB_MonsterFactoryConfig[1000];
          // let normalMonster = monsterFactoryConfig.normalMonster;
          // let allMonsterData: MapMonsterData[] = [];
          // for (let i = 0; i < totalNum; i++) {
          //     let x = Math.floor(Math.random() * comp.width);
          //     let y = Math.floor(Math.random() * comp.height);
          //     let data = BattleUtil.randomSelectWithProbability(normalMonster);
          //     allMonsterData.push({ roleId: data.id, pos: v3(x, y) });
          // }
          // //TODO:暂时先在这里加载敌人
          // for (let monsterData of allMonsterData) {
          //     let monsterId = monsterData.roleId;
          //     let role = ecs.getEntity<RoleEntity>(RoleEntity);
          //     role.get(RoleModelComp).init(monsterId, comp.mapLv);
          //     let pos = BattleUtil.randomPointAroundPlayer(1000);
          //     role.get(PositionComp).setPosition(pos, true);
          //     role.get(FactionTypeComp).faction = FactionType.ENEMY;
          //     role.get(FactionTypeComp).type = EntityType.ROLE;
          //     role.add(RoleShowAnimation1Comp);
          // }
          // console.log(`已在地图上生成 ${allMonsterData.length} 个敌人`);
        };
        return BigMapSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bomb.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './FactionTypeComp.ts', './SkillCompManagerComp.ts', './CollisionComp.ts', './DeathBombExplosionComp.ts', './cc-comp-frame-animation.ts', './BaseUnit.ts', './FrameAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PhysicsSystem, ecs, FactionTypeComp, SkillCompManagerComp, CollisionComp, DeathBombExplosionComp, BaaseUnit, FrameAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      SkillCompManagerComp = module.SkillCompManagerComp;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      DeathBombExplosionComp = module.DeathBombExplosionComp;
    }, null, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      FrameAnimation = module.FrameAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d2a7dPRjE1AZ7G45j70uMCr", "Bomb", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 火球
       */
      var Bomb = exports('Bomb', (_dec = ccclass('Bomb'), _dec2 = ecs.register('Bomb', false), _dec3 = property(FrameAnimation), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(Bomb, _BaaseUnit);
        function Bomb() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniClip", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Bomb.prototype;
        _proto.onLoad = function onLoad() {
          this.group = this.ent.get(FactionTypeComp).group;
          this.agent = false;
          this.center.x = 0;
          this.center.y = 25;
          this.maxRadius = 15;
          this.ent.get(SkillCompManagerComp).addCompByid(200101);
          this.ent.add(DeathBombExplosionComp);
          _BaaseUnit.prototype.onLoad.call(this);
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {
          var angle = Math.atan2(dir.y, dir.x);
          this.node.angle = angle * 180 / Math.PI;
        }

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        };
        _proto.reset = function reset() {
          this.remove();
          this.node.destroy();
        };
        return Bomb;
      }(BaaseUnit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BombComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillRenderComp.ts', './EnabledComp.ts', './PositionComp.ts', './UnitComp.ts', './app.ts', './ECS.ts', './ConstType.ts', './BaseUnit.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Prefab, instantiate, SkillRenderComp, EnabledComp, PositionComp, UnitComp, app, ecs, MapLayersType, BaaseUnit;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "f17f9noeMBPNZaksPXfYWSm", "BombComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 炸弹
       */
      var BombComp = exports('BombComp', (_dec = ccclass('BombComp'), _dec2 = ecs.register('BombComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(BombComp, _SkillRenderComp);
        function BombComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = BombComp.prototype;
        _proto.reset = function reset() {};
        return BombComp;
      }(SkillRenderComp)) || _class) || _class));

      /**炸弹系统 */
      var BombSystem = exports('BombSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(BombSystem, _ecs$ComblockSystem);
        var _proto2 = BombSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(BombComp);
        };
        function BombSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'skill/bomb/Bomb',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
            }
          });
        };
        _proto2.exit = function exit(e) {};
        return BombSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BombExplosion.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './cc-comp-frame-animation.ts', './FactionTypeComp.ts', './CollisionComp.ts', './AfterDeathMarkerComp.ts', './SkillAfterDeathComp.ts', './BaseUnit.ts', './FrameAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PhysicsSystem, ecs, FactionTypeComp, CollisionComp, AfterDeathMarkerComp, SkillAfterDeathComp, BaaseUnit, FrameAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ecs = module.ecs;
    }, null, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      SkillAfterDeathComp = module.SkillAfterDeathComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      FrameAnimation = module.FrameAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "075eaKTT0ZGQLlqns98cFhS", "BombExplosion", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 炸弹爆炸
       */
      var BombExplosion = exports('BombExplosion', (_dec = ccclass('BombExplosion'), _dec2 = ecs.register('BombExplosion', false), _dec3 = property(FrameAnimation), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(BombExplosion, _BaaseUnit);
        function BombExplosion() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniClip", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BombExplosion.prototype;
        _proto.onLoad = function onLoad() {
          this.aniClip.play('animation', 1);
          this.aniClip.node.on(FrameAnimation.EventType.FINISHED, this.onFinished, this);
          this.group = this.ent.get(FactionTypeComp).group;
          this.agent = false;
          _BaaseUnit.prototype.onLoad.call(this);
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {
          var angle = Math.atan2(dir.y, dir.x);
          this.node.angle = angle * 180 / Math.PI;
        }

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        };
        _proto.onFinished = function onFinished() {
          this.ent.add(AfterDeathMarkerComp);
          this.ent.get(SkillAfterDeathComp).curTime = 0;
          if (this.ent.get(AfterDeathMarkerComp)) this.ent.get(AfterDeathMarkerComp).curTime = 0;
          this.node.active = false;
        };
        _proto.reset = function reset() {
          this.remove();
          this.node.destroy();
        };
        return BombExplosion;
      }(BaaseUnit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BombExplosionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillRenderComp.ts', './EnabledComp.ts', './PositionComp.ts', './UnitComp.ts', './SkillAfterDeathComp.ts', './app.ts', './ECS.ts', './ConstType.ts', './BaseUnit.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Prefab, instantiate, SkillRenderComp, EnabledComp, PositionComp, UnitComp, SkillAfterDeathComp, app, ecs, MapLayersType, BaaseUnit;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      SkillAfterDeathComp = module.SkillAfterDeathComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "6ef0e3oA8VP9KLVVCf7pWNa", "BombExplosionComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 炸弹爆炸
       */
      var BombExplosionComp = exports('BombExplosionComp', (_dec = ccclass('BombExplosionComp'), _dec2 = ecs.register('BombExplosionComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(BombExplosionComp, _SkillRenderComp);
        function BombExplosionComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = BombExplosionComp.prototype;
        _proto.reset = function reset() {};
        return BombExplosionComp;
      }(SkillRenderComp)) || _class) || _class));

      /**武器开火系统 */
      var BombExplosionSystem = exports('BombExplosionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(BombExplosionSystem, _ecs$ComblockSystem);
        var _proto2 = BombExplosionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(BombExplosionComp);
        };
        function BombExplosionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'skill/bomb/BombExplosion',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
              e.get(SkillAfterDeathComp).curTime = 10;
            }
          });
        };
        _proto2.exit = function exit(e) {};
        return BombExplosionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraFollowComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './ECS.ts', './PositionComp.ts', './MapModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, ecs, PositionComp, MapModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7b70eMEN5xBooU7IWBDdrg0", "CameraFollowComp", undefined);

      /**
       * 摄像机跟随组件
       */
      var CameraFollowComp = exports('CameraFollowComp', (_dec = ecs.register('CameraFollowComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CameraFollowComp, _ecs$Comp);
        function CameraFollowComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**摄像机 */
          _this.camera = null;
          /**跟随的实体 */
          _this.followEty = null;
          /**跟随的点 */
          _this.followPos = null;
          return _this;
        }
        var _proto = CameraFollowComp.prototype;
        _proto.reset = function reset() {};
        return CameraFollowComp;
      }(ecs.Comp)) || _class));

      /**摄像机跟随系统 */
      var CameraFollowSystem = exports('CameraFollowSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(CameraFollowSystem, _ref);
        var _proto2 = CameraFollowSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CameraFollowComp);
        };
        function CameraFollowSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.get(CameraFollowComp).camera = app.manager.battle.mapCamera;
        };
        _proto2.update = function update(e) {
          var comp = e.get(CameraFollowComp);
          if (comp.followPos) {
            comp.camera.node.setPosition(comp.followPos);
            this.noOutBounds(e);
          } else if (comp.followEty) {
            var pos = comp.followEty.get(PositionComp).getPosition();
            comp.camera.node.setPosition(pos);
            comp.followPos = null;
            this.noOutBounds(e);
          }
        };
        _proto2.noOutBounds = function noOutBounds(e) {
          //不要超出界外
          var comp = e.get(CameraFollowComp);
          var cameraPos = comp.camera.node.getPosition();
          var mapModel = app.manager.battle.mapEntity.get(MapModelComp);
          // 获取正交相机的高度
          var height = app.manager.battle.mapCamera.orthoHeight * 2;
          var width = height * app.manager.battle.mapCamera.camera.aspect;
          if (cameraPos.x + width / 2 > mapModel.width) {
            cameraPos.x = mapModel.width - width / 2;
          } else if (cameraPos.x - width / 2 < 0) {
            cameraPos.x = width / 2;
          }
          if (cameraPos.y + height / 2 > mapModel.height) {
            cameraPos.y = mapModel.height - height / 2;
          } else if (cameraPos.y - height / 2 < 0) {
            cameraPos.y = height / 2;
          }
          comp.camera.node.setPosition(cameraPos);
        };
        return CameraFollowSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChainSaw.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './cc-comp-frame-animation.ts', './FactionTypeComp.ts', './SkillCompManagerComp.ts', './CollisionComp.ts', './BaseUnit.ts', './FrameAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PhysicsSystem, ecs, FactionTypeComp, SkillCompManagerComp, CollisionComp, BaaseUnit, FrameAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ecs = module.ecs;
    }, null, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      SkillCompManagerComp = module.SkillCompManagerComp;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      FrameAnimation = module.FrameAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7f0e5jmFMJEtrybNMfKVPfP", "ChainSaw", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 链锯
       */
      var ChainSaw = exports('ChainSaw', (_dec = ccclass('ChainSaw'), _dec2 = ecs.register('ChainSaw', false), _dec3 = property(FrameAnimation), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(ChainSaw, _BaaseUnit);
        function ChainSaw() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniClip", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ChainSaw.prototype;
        _proto.onLoad = function onLoad() {
          this.group = this.ent.get(FactionTypeComp).group;
          this.agent = false;
          this.center.x = 0;
          this.center.y = 25;
          this.maxRadius = 15;
          this.ent.get(SkillCompManagerComp).addCompByid(200101);
          _BaaseUnit.prototype.onLoad.call(this);
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {
          var angle = Math.atan2(dir.y, dir.x);
          this.node.angle = angle * 180 / Math.PI;
        }

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        };
        _proto.reset = function reset() {
          this.remove();
          this.node.destroy();
        };
        return ChainSaw;
      }(BaaseUnit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChainSawComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillRenderComp.ts', './CollisionMotionlessComp.ts', './CollisionReboundComp.ts', './app.ts', './ConstType.ts', './BaseUnit.ts', './EnabledComp.ts', './PositionComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Prefab, instantiate, ecs, SkillRenderComp, CollisionMotionlessComp, CollisionReboundComp, app, MapLayersType, BaaseUnit, EnabledComp, PositionComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      CollisionMotionlessComp = module.CollisionMotionlessComp;
    }, function (module) {
      CollisionReboundComp = module.CollisionReboundComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "90a5fxXa/1NhZmKjZ8TMnkO", "ChainSawComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       *  链锯
       */
      var ChainSawComp = exports('ChainSawComp', (_dec = ccclass('ChainSawComp'), _dec2 = ecs.register('ChainSawComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(ChainSawComp, _SkillRenderComp);
        function ChainSawComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = ChainSawComp.prototype;
        _proto.reset = function reset() {};
        return ChainSawComp;
      }(SkillRenderComp)) || _class) || _class));

      /**链锯系统 */
      var ChainSawSystem = exports('ChainSawSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(ChainSawSystem, _ecs$ComblockSystem);
        var _proto2 = ChainSawSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(ChainSawComp);
        };
        function ChainSawSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'skill/chainSaw/ChainSaw',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
            }
          });

          //一般概率反弹，一般概率静止
          // e.add(CollisionMotionlessComp);
          if (Math.random() < 0.5) {
            e.add(CollisionReboundComp);
          } else {
            e.add(CollisionMotionlessComp);
          }
        };
        _proto2.exit = function exit(e) {};
        return ChainSawSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollectDropComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './ECS.ts', './BerforeDeathMarkerComp.ts', './PositionComp.ts', './DropModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, ecs, BerforeDeathMarkerComp, PositionComp, DropModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      DropModelComp = module.DropModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "774cdIaATlJc6YP54bnp3S/", "CollectDropComp", undefined);

      /**
       * 掉落物品组件
       */
      var CollectDropComp = exports('CollectDropComp', (_dec = ecs.register('CollectDropComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CollectDropComp, _ecs$Comp);
        function CollectDropComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //是否在拾取范围
          _this.isInCollectRange = false;
          return _this;
        }
        var _proto = CollectDropComp.prototype;
        _proto.reset = function reset() {};
        return CollectDropComp;
      }(ecs.Comp)) || _class));

      /**掉落物品组件系统 */
      var CollectDropSystem = exports('CollectDropSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollectDropSystem, _ecs$ComblockSystem);
        var _proto2 = CollectDropSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollectDropComp);
        };
        function CollectDropSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var pos = e.get(PositionComp).getPosition(true);
          var playerPos = app.manager.battle.playerEntity.get(PositionComp).getPosition(true);
          var dis = pos.subtract(playerPos).length();
          if (dis <= app.config.game.CollectItemDistance) {
            console.log('collect drop');
            e.add(BerforeDeathMarkerComp);
            var result = app.store.player.addItemToBag(e.get(DropModelComp).data);
            if (result) {
              e.remove(CollectDropComp);
            } else if (!e.get(CollectDropComp).isInCollectRange) {
              e.get(CollectDropComp).isInCollectRange = true;
              app.manager.ui.showToast('背包已满');
            }
          } else {
            e.get(CollectDropComp).isInCollectRange = false;
          }
        };
        return CollectDropSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColliderComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Collider.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, cCollider, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cCollider = module.cCollider;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "db549bFF4dFTIvjgHR3/h7m", "ColliderComp", undefined);
      var ColliderComp = exports('ColliderComp', (_dec = ecs.register('ColliderComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(ColliderComp, _ecs$Comp);
        function ColliderComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = ColliderComp.prototype;
        _proto.reset = function reset() {};
        return ColliderComp;
      }(ecs.Comp)) || _class));

      /**碰撞检测系统 */
      var ColliderSystem = exports('ColliderSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(ColliderSystem, _ecs$ComblockSystem);
        var _proto2 = ColliderSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(ColliderComp);
        };
        function ColliderSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          cCollider.inst.update(this.dt);
        };
        _proto2.exit = function exit(e) {};
        return ColliderSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillPluginConfig.ts', './ECS.ts', './ConstType.ts', './CollisionMarkerComp.ts', './SkillModelComp.ts', './EnabledComp.ts', './FactionTypeComp.ts', './HpComp.ts', './RoleModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, DB_SkillPluginConfig, ecs, EntityType, AttributeType, CollisionMarkerComp, SkillModelComp, EnabledComp, FactionTypeComp, HpComp, RoleModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      EntityType = module.EntityType;
      AttributeType = module.AttributeType;
    }, function (module) {
      CollisionMarkerComp = module.CollisionMarkerComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ce004uOzbtHlayVTBe3coUW", "CollisionComp", undefined);
      var CollisionComp = exports('CollisionComp', (_dec = ecs.register('CollisionComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CollisionComp, _ecs$Comp);
        function CollisionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**碰撞过的实体，会更新碰撞时间 */
          _this.colliderResult = new Map();
          /**碰撞,会执行碰撞结果 */
          _this.collisonResult = [];
          /**是否碰撞 */
          _this.isCollision = true;
          return _this;
        }
        var _proto = CollisionComp.prototype;
        _proto.reset = function reset() {
          this.colliderResult.clear();
          this.collisonResult = [];
        };
        _proto.addCollision = function addCollision(ent) {
          if (!this.colliderResult.get(ent.eid)) {
            this.collisonResult.push(ent);
            this.colliderResult.set(ent.eid, {
              time: 0,
              ent: ent
            });
          }
        };
        return CollisionComp;
      }(ecs.Comp)) || _class));

      /**碰撞盒系统 */
      var CollisionSystem = exports('CollisionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionComp, HpComp);
        };
        function CollisionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var _this2 = this;
          var comp = e.get(CollisionComp);
          comp.colliderResult.forEach(function (result) {
            if (!result.ent || !result.ent.get(EnabledComp) || !result.ent.get(EnabledComp).enable) {
              comp.colliderResult["delete"](result.ent.eid);
              return;
            }
            result.time += _this2.dt;

            //这里碰撞检测时间取值最小的，因为两个碰撞检测要同步
            var resultEnt = result.ent;
            var interval = 999;
            if (resultEnt.get(FactionTypeComp).type == EntityType.SKILL) {
              var id = resultEnt.get(SkillModelComp).skillId;
              var config = DB_SkillPluginConfig[id];
              interval = interval > config.collisionInterval ? config.collisionInterval : interval;
            }
            if (e.get(FactionTypeComp).type == EntityType.SKILL) {
              var _id = e.get(SkillModelComp).skillId;
              var _config = DB_SkillPluginConfig[_id];
              interval = interval > _config.collisionInterval ? _config.collisionInterval : interval;
            }
            if (resultEnt.get(FactionTypeComp).type == EntityType.ROLE || e.get(FactionTypeComp).type == EntityType.ROLE) {
              //TODO:角色碰撞间隔，后面读取配置
              interval = interval > 3 ? 3 : interval;
            }
            if (!result.ent.get(EnabledComp).enable || result.time >= interval) {
              comp.colliderResult["delete"](result.ent.eid);
            }
          });

          //这里是我对我碰撞的对象进行伤害计算
          for (var i = 0; i < comp.collisonResult.length; i++) {
            var damageData = void 0; //因为可能暴击，所以这里需要每次都计算
            if (e.get(FactionTypeComp).type == EntityType.SKILL) {
              damageData = e.get(SkillModelComp).getDamage();
            } else {
              damageData = {
                damage: e.get(RoleModelComp).attributes.get(AttributeType.reflectDamage).value,
                isCrit: false
              };
            }

            //碰撞结果
            var data = {
              isCrit: damageData.isCrit,
              value: -damageData.damage,
              isShow: true
            };
            //对方会受到伤害
            var enemy = comp.collisonResult[i];
            enemy.get(HpComp).addHp(data);
            enemy.add(CollisionMarkerComp);
          }
          comp.collisonResult = [];
        };
        _proto2.exit = function exit(e) {};
        return CollisionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionFireballComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillRenderComp.ts', './PositionComp.ts', './SkillPluginConfig.ts', './SkillManagerComp.ts', './app.ts', './ConstType.ts', './BaseUnit.ts', './EnabledComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, js, Prefab, instantiate, ecs, SkillRenderComp, PositionComp, DB_SkillPluginConfig, SkillManagerComp, app, MapLayersType, BaaseUnit, EnabledComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      js = module.js;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      SkillManagerComp = module.SkillManagerComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "ca07cHECsFBgbOC1USj8lpP", "CollisionFireballComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 碰撞触发火球
       */
      var CollisionFireballComp = exports('CollisionFireballComp', (_dec = ccclass('CollisionFireballComp'), _dec2 = ecs.register('CollisionFireballComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(CollisionFireballComp, _SkillRenderComp);
        function CollisionFireballComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = CollisionFireballComp.prototype;
        _proto.initSkill = function initSkill() {
          var skillId = 200301;
          var config = DB_SkillPluginConfig[skillId];
          var plugCompObj = js.getClassByName(config.className);
          var plugComp = new plugCompObj();
          this.extraModifyPlugin.push(plugComp);
          plugComp.init({
            weaponManager: this.weaponManager,
            skillId: skillId,
            skillPlugin: [],
            modifyPlugin: []
          });
        };
        _proto.reset = function reset() {};
        return CollisionFireballComp;
      }(SkillRenderComp)) || _class) || _class));

      /**碰撞触发火球系统 */
      var CollisionFireballSystem = exports('CollisionFireballSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionFireballSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionFireballSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionFireballComp);
        };
        function CollisionFireballSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'skill/fireball/Fireball',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
            }
          });
          var comp = e.get(CollisionFireballComp);
          for (var i = 0; i < comp.extraModifyPlugin.length; i++) {
            var skill = comp.extraModifyPlugin[i];
            e.get(SkillManagerComp).addSkillComp(skill);
          }
        };
        _proto2.exit = function exit(e) {};
        return CollisionFireballSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d0f56IzCxFMJ6/RhMy+g5Oh", "CollisionMarkerComp", undefined);
      /**
       * 碰撞标记
       */
      var CollisionMarkerComp = exports('CollisionMarkerComp', (_dec = ecs.register('CollisionMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CollisionMarkerComp, _ecs$Comp);
        function CollisionMarkerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = CollisionMarkerComp.prototype;
        _proto.reset = function reset() {};
        return CollisionMarkerComp;
      }(ecs.Comp)) || _class));

      /**死亡后系统 */
      var CollisionMarkerSystem = exports('CollisionMarkerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionMarkerSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionMarkerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionMarkerComp);
        };
        function CollisionMarkerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.remove(CollisionMarkerComp);
        };
        return CollisionMarkerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionMotionlessComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './CollisionMarkerComp.ts', './RestrictMoveComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, CollisionMarkerComp, RestrictMoveComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CollisionMarkerComp = module.CollisionMarkerComp;
    }, function (module) {
      RestrictMoveComp = module.RestrictMoveComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f5343uWRuxOUZolq6Y7xJGC", "CollisionMotionlessComp", undefined);

      /**
       *  碰撞静止组件
       */
      var CollisionMotionlessComp = exports('CollisionMotionlessComp', (_dec = ecs.register('CollisionMotionlessComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CollisionMotionlessComp, _ecs$Comp);
        function CollisionMotionlessComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = CollisionMotionlessComp.prototype;
        _proto.reset = function reset() {};
        return CollisionMotionlessComp;
      }(ecs.Comp)) || _class));

      /**碰撞静止系统 */
      var CollisionMotionlessSystem = exports('CollisionMotionlessSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionMotionlessSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionMotionlessSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionMotionlessComp, CollisionMarkerComp);
        };
        function CollisionMotionlessSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.add(RestrictMoveComp).coolTime = 999;
          e.remove(CollisionMotionlessComp);
        };
        return CollisionMotionlessSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionReboundComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './CollisionMarkerComp.ts', './DirectionComp.ts', './LinearSkillMoveComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, ecs, CollisionMarkerComp, DirectionComp, LinearSkillMoveComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CollisionMarkerComp = module.CollisionMarkerComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      LinearSkillMoveComp = module.LinearSkillMoveComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "81155XDZF5NKo0sLWH6E57/", "CollisionReboundComp", undefined);

      /**
       *  碰撞回弹组件
       */
      var CollisionReboundComp = exports('CollisionReboundComp', (_dec = ecs.register('CollisionReboundComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CollisionReboundComp, _ecs$Comp);
        function CollisionReboundComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = CollisionReboundComp.prototype;
        _proto.reset = function reset() {};
        return CollisionReboundComp;
      }(ecs.Comp)) || _class));

      /**碰撞回弹系统 */
      var CollisionReboundSystem = exports('CollisionReboundSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionReboundSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionReboundSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionReboundComp, CollisionMarkerComp);
        };
        function CollisionReboundSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //随机方向
          var direction = new Vec3(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
          e.get(DirectionComp).setDirection({
            dir: direction,
            weight: 999
          });
          e.get(LinearSkillMoveComp).direction = direction;
        };
        return CollisionReboundSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollisionTriggerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillRenderComp.ts', './SkillPluginConfig.ts', './BerforeDeathMarkerComp.ts', './ConstType.ts', './FactionTypeComp.ts', './PositionComp.ts', './SkillEntity.ts', './MasterComp.ts', './SkillModelComp.ts', './SkillManagerComp.ts', './BattleUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, ecs, SkillRenderComp, DB_SkillPluginConfig, BerforeDeathMarkerComp, SkillAttributeType, EntityType, FactionTypeComp, PositionComp, SkillEntity, MasterComp, SkillModelComp, SkillManagerComp, BattleUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      SkillAttributeType = module.SkillAttributeType;
      EntityType = module.EntityType;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      SkillEntity = module.SkillEntity;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }, function (module) {
      SkillManagerComp = module.SkillManagerComp;
    }, function (module) {
      BattleUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "320efHJc+tOaJOpFJJPYxlX", "CollisionTriggerComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 碰撞1次触发
       */
      var CollisionTriggerComp = exports('CollisionTriggerComp', (_dec = ccclass('CollisionTriggerComp'), _dec2 = ecs.register('CollisionTriggerComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(CollisionTriggerComp, _SkillRenderComp);
        function CollisionTriggerComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = CollisionTriggerComp.prototype;
        _proto.initSkill = function initSkill() {
          this.skillPlugin = [];
          this.modifyPlugin = [];
          var config = DB_SkillPluginConfig[this.skillId];
          var extraCast = config.extraCast;
          var manager = this.weaponManager;
          while (extraCast > 0) {
            var skillId = manager.getSkill({
              skillPlugin: this.skillPlugin,
              modifyPlugin: this.modifyPlugin,
              isBack: false,
              source: 'skill'
            });
            if (skillId) {
              var _config = DB_SkillPluginConfig[skillId];
              extraCast -= _config.isCast ? 1 : 0;
            } else {
              extraCast = 0;
            }
          }
        };
        _proto.reset = function reset() {};
        return CollisionTriggerComp;
      }(SkillRenderComp)) || _class) || _class));

      /**碰撞1次触发系统 */
      var CollisionTriggerSystem = exports('CollisionTriggerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CollisionTriggerSystem, _ecs$ComblockSystem);
        var _proto2 = CollisionTriggerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CollisionTriggerComp, BerforeDeathMarkerComp);
        };
        function CollisionTriggerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.get(CollisionTriggerComp);
          for (var i = 0; i < comp.skillPlugin.length; i++) {
            var _att;
            var skillEntity = ecs.getEntity(SkillEntity);
            var skillManager = skillEntity.get(SkillManagerComp);
            //先添加修正后添加技能
            for (var k = 0; k < comp.modifyPlugin.length; k++) {
              skillManager.addSkillNewComp(comp.modifyPlugin[k]);
            }
            skillManager.addSkillNewComp(comp.skillPlugin[i]);
            var config = DB_SkillPluginConfig[comp.skillPlugin[i].skillId];
            //最近敌人的方向
            var pos = e.get(PositionComp).getPosition(true);
            var enemy = BattleUtil.getNearestEnemyByPos(pos, e.get(FactionTypeComp).faction);
            var dir = null;
            if (enemy) {
              var enemyPos = enemy.get(PositionComp).getPosition(true);
              dir = enemyPos.subtract(pos).normalize();
            } else {
              //随机方向
              dir = new Vec3(Math.random() - 0.5, Math.random() - 0.5).normalize();
            }
            skillEntity.get(SkillModelComp).init({
              att: (_att = {}, _att[SkillAttributeType.hp] = config.pierce, _att[SkillAttributeType.atk] = config.damage, _att[SkillAttributeType.speed] = config.speed, _att[SkillAttributeType.crit] = config.crit, _att[SkillAttributeType.critDamage] = config.critDamage, _att[SkillAttributeType.lifeTime] = config.lifeTime, _att),
              skillId: comp.skillPlugin[i].skillId,
              scatteringAngle: 0,
              direction: dir
            });
            skillEntity.get(FactionTypeComp).faction = e.get(FactionTypeComp).faction;
            skillEntity.get(FactionTypeComp).type = EntityType.SKILL;
            skillEntity.get(MasterComp).master = e.get(MasterComp).master;
            skillEntity.get(PositionComp).setPosition(pos);
          }
          e.remove(CollisionTriggerComp);
        };
        _proto2.exit = function exit(e) {};
        return CollisionTriggerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConstType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _RoleAnimLoop;
      cclegacy._RF.push({}, "8743bkn+QRN9aRX9lVwNKIH", "ConstType", undefined);
      var AttributeType = exports('AttributeType', /*#__PURE__*/function (AttributeType) {
        AttributeType["hp"] = "hp";
        AttributeType["hpRecover"] = "hpRecover";
        AttributeType["atk"] = "atk";
        AttributeType["atkSpeed"] = "atkSpeed";
        AttributeType["speed"] = "speed";
        AttributeType["crit"] = "crit";
        AttributeType["critDamage"] = "critDamage";
        AttributeType["cdReduce"] = "cdReduce";
        AttributeType["reflectDamage"] = "reflectDamage";
        return AttributeType;
      }({}));
      //属性修正来源
      var CorrectionSourceType = exports('CorrectionSourceType', /*#__PURE__*/function (CorrectionSourceType) {
        CorrectionSourceType[CorrectionSourceType["SKILL"] = 0] = "SKILL";
        CorrectionSourceType[CorrectionSourceType["BUFF"] = 1] = "BUFF";
        CorrectionSourceType[CorrectionSourceType["DEBUFF"] = 2] = "DEBUFF";
        CorrectionSourceType[CorrectionSourceType["WEAPON"] = 3] = "WEAPON";
        CorrectionSourceType[CorrectionSourceType["EQUIP"] = 4] = "EQUIP";
        CorrectionSourceType[CorrectionSourceType["OTHER"] = 5] = "OTHER";
        return CorrectionSourceType;
      }({}));

      //属性修正类型
      var CorrectionType = exports('CorrectionType', /*#__PURE__*/function (CorrectionType) {
        CorrectionType[CorrectionType["FIXED"] = 0] = "FIXED";
        CorrectionType[CorrectionType["MODIFIER"] = 1] = "MODIFIER";
        CorrectionType[CorrectionType["GROWTH"] = 2] = "GROWTH";
        return CorrectionType;
      }({}));
      var FactionType = exports('FactionType', /*#__PURE__*/function (FactionType) {
        FactionType["ALLY"] = "ALLY";
        FactionType["ENEMY"] = "ENEMY";
        FactionType["NEUTRAL"] = "NEUTRAL";
        return FactionType;
      }({}));
      var EntityType = exports('EntityType', /*#__PURE__*/function (EntityType) {
        EntityType["ROLE"] = "ROLE";
        EntityType["SKILL"] = "SKILL";
        return EntityType;
      }({})); // 技能

      /**地图层级 */
      var MapLayersType = exports('MapLayersType', /*#__PURE__*/function (MapLayersType) {
        MapLayersType[MapLayersType["MAP"] = 0] = "MAP";
        MapLayersType[MapLayersType["ENTITY"] = 1] = "ENTITY";
        MapLayersType[MapLayersType["SKILL"] = 2] = "SKILL";
        MapLayersType[MapLayersType["TIP"] = 3] = "TIP";
        MapLayersType[MapLayersType["TOP"] = 4] = "TOP";
        MapLayersType[MapLayersType["NUM"] = 5] = "NUM";
        return MapLayersType;
      }({}));

      /**地图层级名字 */
      var MapLayerNames = exports('MapLayerNames', ['map', 'entity', 'skill', 'tip', 'top']);

      /**技能插件类型 */
      var SkillPluginType = exports('SkillPluginType', /*#__PURE__*/function (SkillPluginType) {
        SkillPluginType["skill"] = "skill";
        SkillPluginType["modify"] = "modify";
        return SkillPluginType;
      }({}));

      /** 技能插件影响 */
      var SkillPluginInfluence = exports('SkillPluginInfluence', /*#__PURE__*/function (SkillPluginInfluence) {
        SkillPluginInfluence["render"] = "render";
        SkillPluginInfluence["move"] = "move";
        SkillPluginInfluence["multipleCast"] = "multipleCast";
        SkillPluginInfluence["trigger"] = "trigger";
        return SkillPluginInfluence;
      }({}));

      /**技能状态类型 */
      var SkillStateType = exports('SkillStateType', /*#__PURE__*/function (SkillStateType) {
        SkillStateType[SkillStateType["None"] = 0] = "None";
        SkillStateType[SkillStateType["Charging"] = 1] = "Charging";
        SkillStateType[SkillStateType["Charged"] = 2] = "Charged";
        SkillStateType[SkillStateType["Casting"] = 3] = "Casting";
        SkillStateType[SkillStateType["Silenced"] = 4] = "Silenced";
        return SkillStateType;
      }({}));
      var RoleStateMachineType = exports('RoleStateMachineType', /*#__PURE__*/function (RoleStateMachineType) {
        RoleStateMachineType[RoleStateMachineType["Pursue"] = 1] = "Pursue";
        RoleStateMachineType[RoleStateMachineType["Atk"] = 2] = "Atk";
        RoleStateMachineType[RoleStateMachineType["Move"] = 3] = "Move";
        RoleStateMachineType[RoleStateMachineType["Dead"] = 4] = "Dead";
        return RoleStateMachineType;
      }({}));

      //角色状态类型
      var RoleStateType = exports('RoleStateType', /*#__PURE__*/function (RoleStateType) {
        RoleStateType[RoleStateType["Idle"] = 1] = "Idle";
        RoleStateType[RoleStateType["Move"] = 2] = "Move";
        RoleStateType[RoleStateType["Pursue"] = 3] = "Pursue";
        RoleStateType[RoleStateType["Atk"] = 4] = "Atk";
        RoleStateType[RoleStateType["Dead"] = 5] = "Dead";
        return RoleStateType;
      }({}));
      var RoleAnimType = exports('RoleAnimType', /*#__PURE__*/function (RoleAnimType) {
        RoleAnimType["idle"] = "idle";
        RoleAnimType["dizzy"] = "dizzy";
        RoleAnimType["run"] = "run";
        RoleAnimType["atk"] = "atk";
        RoleAnimType["dead"] = "dead";
        RoleAnimType["hit"] = "hit";
        return RoleAnimType;
      }({}));
      var RoleAnimLoop = exports('RoleAnimLoop', (_RoleAnimLoop = {}, _RoleAnimLoop[RoleAnimType.idle] = true, _RoleAnimLoop[RoleAnimType.dizzy] = false, _RoleAnimLoop[RoleAnimType.run] = true, _RoleAnimLoop[RoleAnimType.atk] = false, _RoleAnimLoop[RoleAnimType.dead] = false, _RoleAnimLoop[RoleAnimType.hit] = false, _RoleAnimLoop));

      /**武器属性 */
      var WeaponAttributeType = exports('WeaponAttributeType', /*#__PURE__*/function (WeaponAttributeType) {
        WeaponAttributeType["id"] = "id";
        WeaponAttributeType["isDisorder"] = "isDisorder";
        WeaponAttributeType["castNum"] = "castNum";
        WeaponAttributeType["castDelay"] = "castDelay";
        WeaponAttributeType["chargeTime"] = "chargeTime";
        WeaponAttributeType["mpMax"] = "mpMax";
        WeaponAttributeType["mpChargeSpeed"] = "mpChargeSpeed";
        WeaponAttributeType["capacity"] = "capacity";
        WeaponAttributeType["scatter"] = "scatter";
        WeaponAttributeType["skillPlugin"] = "skillPlugin";
        return WeaponAttributeType;
      }({}));
      /**技能属性 */
      var SkillAttributeType = exports('SkillAttributeType', /*#__PURE__*/function (SkillAttributeType) {
        SkillAttributeType["hp"] = "hp";
        SkillAttributeType["atk"] = "atk";
        SkillAttributeType["speed"] = "speed";
        SkillAttributeType["crit"] = "crit";
        SkillAttributeType["critDamage"] = "critDamage";
        SkillAttributeType["lifeTime"] = "lifeTime";
        return SkillAttributeType;
      }({}));
      var ItemType = exports('ItemType', /*#__PURE__*/function (ItemType) {
        ItemType["weapon"] = "weapon";
        ItemType["equipment"] = "equipment";
        ItemType["skillPlugin"] = "skillPlugin";
        return ItemType;
      }({}));
      var RoleType = exports('RoleType', /*#__PURE__*/function (RoleType) {
        RoleType["normal"] = "normal";
        RoleType["elite"] = "elite";
        RoleType["boss"] = "boss";
        return RoleType;
      }({}));
      var NPCtype = exports('NPCtype', /*#__PURE__*/function (NPCtype) {
        NPCtype["merchant"] = "merchant";
        NPCtype["smallSecret"] = "smallSecret";
        return NPCtype;
      }({}));
      //装备部位
      var EquipmentSlot = exports('EquipmentSlot', /*#__PURE__*/function (EquipmentSlot) {
        EquipmentSlot["head"] = "head";
        EquipmentSlot["chest"] = "chest";
        EquipmentSlot["hands"] = "hands";
        EquipmentSlot["legs"] = "legs";
        EquipmentSlot["feet"] = "feet";
        EquipmentSlot["accessory"] = "accessory";
        EquipmentSlot["ringLeft"] = "ringLeft";
        EquipmentSlot["ringRight"] = "ringRight";
        EquipmentSlot["weapon"] = "weapon";
        return EquipmentSlot;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ControlEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './CreateRoleComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, CreateRoleComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      CreateRoleComp = module.CreateRoleComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "aaa8b1pW1pCzo1YOYV8WX+I", "ControlEntity", undefined);

      /**
       * 游戏控制器实体
       */
      var ControlEntity = exports('ControlEntity', (_dec = ecs.register('ControlEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(ControlEntity, _BaseEntity);
        function ControlEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = ControlEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(CreateRoleComp);
        };
        return ControlEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ControlSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './CameraFollowComp.ts', './CollisionComp.ts', './DamageFlyTextComp.ts', './DeathComp.ts', './DirectionComp.ts', './Enemy1FsmComp.ts', './HpComp.ts', './AfterDeathMarkerComp.ts', './BerforeDeathMarkerComp.ts', './RoleAtkMarkerComp.ts', './MoveComp.ts', './MpComp.ts', './NormalAtkComp.ts', './PositionComp.ts', './PursueComp.ts', './PursuePlayerMoveComp.ts', './RestrictMoveComp.ts', './RoleAfterDeathComp.ts', './RoleAutoCastComp.ts', './RoleCastComp.ts', './RoleViewLoadComp.ts', './SkeletonViewComp.ts', './SpeedComp.ts', './SpeedObstacleAvoidanceComp.ts', './StateMachineComp.ts', './WeaponDepotComp.ts', './LinearSkillMoveComp.ts', './PursueEnemyMoveComp.ts', './FireballComp.ts', './SkillAfterDeathComp.ts', './SkillLifeOverstepBoundaryComp.ts', './SkillLifeTimeComp.ts', './WeaponAutoCastComp.ts', './WeaponCastComp.ts', './WeaponCompManagerComp.ts', './WeaponManagerComp.ts', './ColliderComp.ts', './MonsterFactoryComp.ts', './PlayerShowComp.ts', './BombExplosionComp.ts', './BombComp.ts', './CreateBombExplosionComp.ts', './DeathBombExplosionComp.ts', './IsSkillComp.ts', './CollisionFireballComp.ts', './CollisionTriggerComp.ts', './CollisionReboundComp.ts', './ChainSawComp.ts', './CollisionMarkerComp.ts', './CollisionMotionlessComp.ts', './DropComp.ts', './DropViewComp.ts', './CollectDropComp.ts', './DropItemAfterDeathComp.ts', './TriggerNPCInteractionMenuComp.ts', './NPCInteractionMenuComp.ts', './MapLoadComp.ts', './InfiniteMapCom.ts', './NotOutBoundsComp.ts', './BigMapComp.ts', './RandomlyGenerateMonsterComp.ts', './ShowTaskComp.ts', './TaskExpComp.ts', './CreateTaskComp.ts', './TaskModelComp.ts', './RoleMapExtraCompComp.ts', './MapModelComp.ts', './CreateRoleComp.ts', './DropTaskExpComp.ts', './RoleTaskExtraCompComp.ts', './GenerateOneRoleComp.ts', './TaskRoleComp.ts', './DropPlayerExpComp.ts', './UpgradeComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, CameraFollowSystem, CollisionSystem, DamageFlyTextSystem, DeathSystem, ResetDirectionSystem, Enemy1FsmSystem, HpSystem, AfterDeathMarkerSystem, BerforeDeathMarkerSystem, RoleAtkMarkerSystem, MoveSystem, MpSystem, NormalAtkSystem, PositionSystem, WeaponPositionSystem, PursueSystem, PursuePlayerMoveSystem, RestrictMoveSystem, RoleAfterDeathSystem, RoleAutoCastSystem, RoleCastSystem, RoleViewLoadSystem, SkeletonViewSystem, SpeedSystem, SpeedObstacleAvoidanceSystem, StateMachineSystem, WeaponDepotSystem, LinearMoveSystem, PursueEnemyMoveSystem, FireballSystem, SkillAfterDeathSystem, SkillLifeOverstepBoundarySystem, SkillLifeTimeSystem, WeaponAutoCastSystem, WeaponCastSystem, WeaponCompManagerSystem, WeaponManagerSystem, ColliderSystem, MonsterFactorySystem, PlayerShowSystem, BombExplosionSystem, BombSystem, CreateBombExplosionSystem, DeathBombExplosionSystem, IsSkillSystem, CollisionFireballSystem, CollisionTriggerSystem, CollisionReboundSystem, ChainSawSystem, CollisionMarkerSystem, CollisionMotionlessSystem, DropSystem, DropViewSystem, CollectDropSystem, DropItemAfterDeathSystem, TriggerNPCInteractionMenuSystem, NPCInteractionMenuSystem, MapLoadSystem, InfiniteMapSystem, NotOutBoundsSystem, BigMapSystem, RandomlyGenerateMonsterSystem, ShowTaskSystem, TaskExpSystem, CreateTaskSystem, TaskModelSystem, RoleMapExtraCompSystem, MapModelSystem, CreateRoleSystem, DropTaskExpSystem, RoleTaskExtraCompSystem, GenerateOneRoleSystem, TaskRoleSystem, DropPlayerExpSystem, UpgradeSystem;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CameraFollowSystem = module.CameraFollowSystem;
    }, function (module) {
      CollisionSystem = module.CollisionSystem;
    }, function (module) {
      DamageFlyTextSystem = module.DamageFlyTextSystem;
    }, function (module) {
      DeathSystem = module.DeathSystem;
    }, function (module) {
      ResetDirectionSystem = module.ResetDirectionSystem;
    }, function (module) {
      Enemy1FsmSystem = module.Enemy1FsmSystem;
    }, function (module) {
      HpSystem = module.HpSystem;
    }, function (module) {
      AfterDeathMarkerSystem = module.AfterDeathMarkerSystem;
    }, function (module) {
      BerforeDeathMarkerSystem = module.BerforeDeathMarkerSystem;
    }, function (module) {
      RoleAtkMarkerSystem = module.RoleAtkMarkerSystem;
    }, function (module) {
      MoveSystem = module.MoveSystem;
    }, function (module) {
      MpSystem = module.MpSystem;
    }, function (module) {
      NormalAtkSystem = module.NormalAtkSystem;
    }, function (module) {
      PositionSystem = module.PositionSystem;
      WeaponPositionSystem = module.WeaponPositionSystem;
    }, function (module) {
      PursueSystem = module.PursueSystem;
    }, function (module) {
      PursuePlayerMoveSystem = module.PursuePlayerMoveSystem;
    }, function (module) {
      RestrictMoveSystem = module.RestrictMoveSystem;
    }, function (module) {
      RoleAfterDeathSystem = module.RoleAfterDeathSystem;
    }, function (module) {
      RoleAutoCastSystem = module.RoleAutoCastSystem;
    }, function (module) {
      RoleCastSystem = module.RoleCastSystem;
    }, function (module) {
      RoleViewLoadSystem = module.RoleViewLoadSystem;
    }, function (module) {
      SkeletonViewSystem = module.SkeletonViewSystem;
    }, function (module) {
      SpeedSystem = module.SpeedSystem;
    }, function (module) {
      SpeedObstacleAvoidanceSystem = module.SpeedObstacleAvoidanceSystem;
    }, function (module) {
      StateMachineSystem = module.StateMachineSystem;
    }, function (module) {
      WeaponDepotSystem = module.WeaponDepotSystem;
    }, function (module) {
      LinearMoveSystem = module.LinearMoveSystem;
    }, function (module) {
      PursueEnemyMoveSystem = module.PursueEnemyMoveSystem;
    }, function (module) {
      FireballSystem = module.FireballSystem;
    }, function (module) {
      SkillAfterDeathSystem = module.SkillAfterDeathSystem;
    }, function (module) {
      SkillLifeOverstepBoundarySystem = module.SkillLifeOverstepBoundarySystem;
    }, function (module) {
      SkillLifeTimeSystem = module.SkillLifeTimeSystem;
    }, function (module) {
      WeaponAutoCastSystem = module.WeaponAutoCastSystem;
    }, function (module) {
      WeaponCastSystem = module.WeaponCastSystem;
    }, function (module) {
      WeaponCompManagerSystem = module.WeaponCompManagerSystem;
    }, function (module) {
      WeaponManagerSystem = module.WeaponManagerSystem;
    }, function (module) {
      ColliderSystem = module.ColliderSystem;
    }, function (module) {
      MonsterFactorySystem = module.MonsterFactorySystem;
    }, function (module) {
      PlayerShowSystem = module.PlayerShowSystem;
    }, function (module) {
      BombExplosionSystem = module.BombExplosionSystem;
    }, function (module) {
      BombSystem = module.BombSystem;
    }, function (module) {
      CreateBombExplosionSystem = module.CreateBombExplosionSystem;
    }, function (module) {
      DeathBombExplosionSystem = module.DeathBombExplosionSystem;
    }, function (module) {
      IsSkillSystem = module.IsSkillSystem;
    }, function (module) {
      CollisionFireballSystem = module.CollisionFireballSystem;
    }, function (module) {
      CollisionTriggerSystem = module.CollisionTriggerSystem;
    }, function (module) {
      CollisionReboundSystem = module.CollisionReboundSystem;
    }, function (module) {
      ChainSawSystem = module.ChainSawSystem;
    }, function (module) {
      CollisionMarkerSystem = module.CollisionMarkerSystem;
    }, function (module) {
      CollisionMotionlessSystem = module.CollisionMotionlessSystem;
    }, function (module) {
      DropSystem = module.DropSystem;
    }, function (module) {
      DropViewSystem = module.DropViewSystem;
    }, function (module) {
      CollectDropSystem = module.CollectDropSystem;
    }, function (module) {
      DropItemAfterDeathSystem = module.DropItemAfterDeathSystem;
    }, function (module) {
      TriggerNPCInteractionMenuSystem = module.TriggerNPCInteractionMenuSystem;
    }, function (module) {
      NPCInteractionMenuSystem = module.NPCInteractionMenuSystem;
    }, function (module) {
      MapLoadSystem = module.MapLoadSystem;
    }, function (module) {
      InfiniteMapSystem = module.InfiniteMapSystem;
    }, function (module) {
      NotOutBoundsSystem = module.NotOutBoundsSystem;
    }, function (module) {
      BigMapSystem = module.BigMapSystem;
    }, function (module) {
      RandomlyGenerateMonsterSystem = module.RandomlyGenerateMonsterSystem;
    }, function (module) {
      ShowTaskSystem = module.ShowTaskSystem;
    }, function (module) {
      TaskExpSystem = module.TaskExpSystem;
    }, function (module) {
      CreateTaskSystem = module.CreateTaskSystem;
    }, function (module) {
      TaskModelSystem = module.TaskModelSystem;
    }, function (module) {
      RoleMapExtraCompSystem = module.RoleMapExtraCompSystem;
    }, function (module) {
      MapModelSystem = module.MapModelSystem;
    }, function (module) {
      CreateRoleSystem = module.CreateRoleSystem;
    }, function (module) {
      DropTaskExpSystem = module.DropTaskExpSystem;
    }, function (module) {
      RoleTaskExtraCompSystem = module.RoleTaskExtraCompSystem;
    }, function (module) {
      GenerateOneRoleSystem = module.GenerateOneRoleSystem;
    }, function (module) {
      TaskRoleSystem = module.TaskRoleSystem;
    }, function (module) {
      DropPlayerExpSystem = module.DropPlayerExpSystem;
    }, function (module) {
      UpgradeSystem = module.UpgradeSystem;
    }],
    execute: function () {
      cclegacy._RF.push({}, "442bdDqlD9NZZPKU1jXHt44", "ControlSystem", undefined);

      /**游戏控制系统 */
      var ControlSystem = exports('ControlSystem', /*#__PURE__*/function (_ecs$System) {
        _inheritsLoose(ControlSystem, _ecs$System);
        function ControlSystem() {
          var _this;
          _this = _ecs$System.call(this) || this;
          //哪里触发标记，标记组件就放哪里的上面，如果多个地方触发，到时候再说
          //影响属性的系统放在最前面
          _this.add(new RoleMapExtraCompSystem());
          _this.add(new MapModelSystem());
          _this.add(new RoleTaskExtraCompSystem());
          _this.add(new TaskModelSystem());
          _this.add(new CreateRoleSystem());
          _this.add(new ShowTaskSystem());
          _this.add(new BigMapSystem());
          _this.add(new RandomlyGenerateMonsterSystem());
          _this.add(new GenerateOneRoleSystem());
          _this.add(new RoleMapExtraCompSystem());
          _this.add(new InfiniteMapSystem());
          _this.add(new PlayerShowSystem());
          _this.add(new MonsterFactorySystem());
          _this.add(new RoleViewLoadSystem());
          _this.add(new DropViewSystem());
          _this.add(new WeaponDepotSystem());

          //任务
          _this.add(new CreateTaskSystem());
          _this.add(new TaskExpSystem());
          _this.add(new TaskRoleSystem());

          //--------角色buff系统--------
          _this.add(new RoleCastSystem());
          _this.add(new RoleAutoCastSystem());

          //
          _this.add(new StateMachineSystem());
          _this.add(new Enemy1FsmSystem());
          _this.add(new PursuePlayerMoveSystem());

          //--------这里放技能系统--------
          _this.add(new WeaponManagerSystem());
          //这里放武器修正系统
          _this.add(new WeaponAutoCastSystem());
          _this.add(new WeaponCastSystem());
          _this.add(new NormalAtkSystem());

          //放在

          // this.add(new SkillManagerSystem());
          _this.add(new FireballSystem());
          _this.add(new CollisionFireballSystem());
          _this.add(new BombSystem());
          _this.add(new CreateBombExplosionSystem());
          _this.add(new BombExplosionSystem());
          _this.add(new ChainSawSystem());
          _this.add(new CollisionTriggerSystem());
          //--------这里放技能系统--------

          _this.add(new RoleAtkMarkerSystem());
          //-----------------这里放速度系统-----------------
          _this.add(new LinearMoveSystem());
          _this.add(new PursueEnemyMoveSystem());
          _this.add(new PursueSystem());
          _this.add(new CollisionMotionlessSystem());
          _this.add(new CollisionReboundSystem());
          _this.add(new RestrictMoveSystem());
          _this.add(new SpeedSystem());
          _this.add(new SpeedObstacleAvoidanceSystem());
          _this.add(new ColliderSystem());
          _this.add(new MoveSystem());
          _this.add(new NotOutBoundsSystem());
          _this.add(new PositionSystem());
          _this.add(new WeaponPositionSystem());
          //-----------------这里放速度系统-----------------

          //--------这里放关于 碰撞的系统--------
          _this.add(new CollisionMarkerSystem());
          _this.add(new CollisionSystem());
          //-----------------这里属性系统-------------------
          _this.add(new HpSystem());
          _this.add(new MpSystem());
          //-----------------这里属性系统-------------------

          //--------这里放关于死亡的系统--------
          _this.add(new DropSystem());
          _this.add(new DropPlayerExpSystem());
          _this.add(new DropTaskExpSystem());
          _this.add(new SkillLifeOverstepBoundarySystem());
          _this.add(new SkillLifeTimeSystem());
          _this.add(new DeathBombExplosionSystem());
          _this.add(new BerforeDeathMarkerSystem());
          _this.add(new AfterDeathMarkerSystem());
          _this.add(new RoleAfterDeathSystem());
          _this.add(new SkillAfterDeathSystem());
          _this.add(new DropItemAfterDeathSystem());
          _this.add(new DeathSystem());
          //--------这里放关于死亡的系统--------
          //--------这里靠后的系统--------
          _this.add(new SkeletonViewSystem());
          _this.add(new CameraFollowSystem());
          _this.add(new DamageFlyTextSystem());
          _this.add(new WeaponCompManagerSystem());
          _this.add(new ResetDirectionSystem());
          _this.add(new CollectDropSystem());
          _this.add(new IsSkillSystem());
          _this.add(new TriggerNPCInteractionMenuSystem());
          _this.add(new NPCInteractionMenuSystem());
          _this.add(new MapLoadSystem());
          _this.add(new UpgradeSystem());
          return _this;
        }
        return ControlSystem;
      }(ecs.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreateBombExplosionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './SkillRenderComp.ts', './PositionComp.ts', './SkillEntity.ts', './SkillPluginConfig.ts', './FactionTypeComp.ts', './MasterComp.ts', './SkillModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, js, ecs, SkillAttributeType, EntityType, SkillRenderComp, PositionComp, SkillEntity, DB_SkillPluginConfig, FactionTypeComp, MasterComp, SkillModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      js = module.js;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillAttributeType = module.SkillAttributeType;
      EntityType = module.EntityType;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      SkillEntity = module.SkillEntity;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "b7dc9xd2+xIgZtsk8AnJm0d", "CreateBombExplosionComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 创建炸弹爆炸实体
       */
      var CreateBombExplosionComp = exports('CreateBombExplosionComp', (_dec = ccclass('CreateBombExplosionComp'), _dec2 = ecs.register('CreateBombExplosionComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(CreateBombExplosionComp, _SkillRenderComp);
        function CreateBombExplosionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SkillRenderComp.call.apply(_SkillRenderComp, [this].concat(args)) || this;
          _this.pos = new Vec3();
          _this.atk = 0;
          return _this;
        }
        var _proto = CreateBombExplosionComp.prototype;
        _proto.initData = function initData(data) {
          this.pos.set(data.pos);
          this.atk = data.atk;
        };
        _proto.reset = function reset() {};
        return CreateBombExplosionComp;
      }(SkillRenderComp)) || _class) || _class));

      /**创建炸弹爆炸实体系统 */
      var CreateBombExplosionSystem = exports('CreateBombExplosionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CreateBombExplosionSystem, _ecs$ComblockSystem);
        var _proto2 = CreateBombExplosionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CreateBombExplosionComp);
        };
        function CreateBombExplosionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var _att;
          var skillEntity = ecs.getEntity(SkillEntity);
          var skillId = 100251;
          var config = DB_SkillPluginConfig[skillId];
          skillEntity.get(SkillModelComp).init({
            att: (_att = {}, _att[SkillAttributeType.hp] = config.pierce, _att[SkillAttributeType.atk] = e.get(SkillModelComp).attributes.get(SkillAttributeType.atk).value, _att[SkillAttributeType.speed] = 0, _att[SkillAttributeType.crit] = config.crit, _att[SkillAttributeType.critDamage] = config.critDamage, _att[SkillAttributeType.lifeTime] = config.lifeTime, _att),
            skillId: skillId,
            scatteringAngle: 0,
            direction: new Vec3(0, 0)
          });
          skillEntity.get(FactionTypeComp).faction = e.get(FactionTypeComp).faction;
          skillEntity.get(FactionTypeComp).type = EntityType.SKILL;
          skillEntity.get(MasterComp).master = e.get(MasterComp).master;
          skillEntity.get(PositionComp).setPosition(e.get(PositionComp).getPosition());
          var plugCompObj = js.getClassByName(config.className);
          var plugComp = new plugCompObj();
          skillEntity.add(plugComp);
        };
        _proto2.exit = function exit(e) {};
        return CreateBombExplosionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreateRoleComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './RoleEntity.ts', './app.ts', './DeathComp.ts', './EnabledComp.ts', './FactionTypeComp.ts', './AfterDeathMarkerComp.ts', './PositionComp.ts', './RoleModelComp.ts', './RoleShowAnimation1Comp.ts', './MapModelComp.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, ecs, EntityType, RoleEntity, app, DeathComp, EnabledComp, FactionTypeComp, AfterDeathMarkerComp, PositionComp, RoleModelComp, RoleShowAnimation1Comp, MapModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      RoleEntity = module.RoleEntity;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DeathComp = module.DeathComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      RoleShowAnimation1Comp = module.RoleShowAnimation1Comp;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "16c92FNRUlKU5l04NzpoDBz", "CreateRoleComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 摄像机跟随组件
       */
      var CreateRoleComp = exports('CreateRoleComp', (_dec = ccclass('CreateRoleComp'), _dec2 = ecs.register('CreateRoleComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CreateRoleComp, _ecs$Comp);
        function CreateRoleComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**待生成的角色 */
          _this.awaitAddRoleData = [];
          /**已经生成的角色 */
          _this.alreadyAddRole = new Map();
          return _this;
        }
        var _proto = CreateRoleComp.prototype;
        _proto.addRoleData = function addRoleData(data) {
          this.awaitAddRoleData.push(data);
        };
        _proto.addAlreadyAddRole = function addAlreadyAddRole(role) {
          var faction = role.get(FactionTypeComp).faction;
          if (!this.alreadyAddRole.has(faction)) {
            this.alreadyAddRole.set(faction, []);
          }
          this.alreadyAddRole.get(faction).push(role);
        };
        _proto.getAwaitAddRoleDataLength = function getAwaitAddRoleDataLength() {
          return this.awaitAddRoleData.length;
        };
        _proto.getAlreadyAddRoleLength = function getAlreadyAddRoleLength(faction) {
          var _this$alreadyAddRole$;
          return ((_this$alreadyAddRole$ = this.alreadyAddRole.get(faction)) == null ? void 0 : _this$alreadyAddRole$.length) || 0;
        };
        _proto.clearRoleData = function clearRoleData(faction) {
          //清除已经生成的
          var roles = this.alreadyAddRole.get(faction);
          if (roles) {
            for (var _iterator = _createForOfIteratorHelperLoose(roles), _step; !(_step = _iterator()).done;) {
              var role = _step.value;
              if (!role.get(DeathComp)) role.add(DeathComp);
              if (!role.get(AfterDeathMarkerComp)) role.add(AfterDeathMarkerComp);
            }
          }
          //清除待生成的
          for (var i = 0; i < this.awaitAddRoleData.length; i++) {
            if (this.awaitAddRoleData[i].faction == faction) {
              this.awaitAddRoleData.splice(i, 1);
              i--;
            }
          }
        };
        _proto.reset = function reset() {
          this.awaitAddRoleData.length = 0;
          this.alreadyAddRole.clear();
        };
        return CreateRoleComp;
      }(ecs.Comp)) || _class) || _class));

      /**摄像机跟随系统 */
      var CreateRoleSystem = exports('CreateRoleSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CreateRoleSystem, _ecs$ComblockSystem);
        var _proto2 = CreateRoleSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CreateRoleComp);
        };
        function CreateRoleSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(CreateRoleComp);
          var mapComp = app.manager.battle.mapEntity.get(MapModelComp);
          if (comp.awaitAddRoleData.length > 0) {
            var data = comp.awaitAddRoleData.shift();
            var role = ecs.getEntity(RoleEntity);
            role.get(RoleModelComp).init({
              roleId: data.roleId,
              lv: mapComp.mapLv,
              difficulty: mapComp.difficulty
            });
            role.get(PositionComp).setPosition(data.pos, true);
            role.get(FactionTypeComp).faction = data.faction;
            role.get(FactionTypeComp).type = EntityType.ROLE;
            role.add(RoleShowAnimation1Comp);
            if (data.extraComps) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(data.extraComps), _step2; !(_step2 = _iterator2()).done;) {
                var _comp = _step2.value;
                role.add(_comp);
              }
            }
            comp.addAlreadyAddRole(role);
          }
          if (comp.alreadyAddRole.size > 0) {
            // 遍历所有敌人，删除不在地图上的敌人
            for (var _iterator3 = _createForOfIteratorHelperLoose(comp.alreadyAddRole.keys()), _step3; !(_step3 = _iterator3()).done;) {
              var faction = _step3.value;
              var roles = comp.alreadyAddRole.get(faction);
              for (var i = 0; i < roles.length; i++) {
                var _role = roles[i];
                if (!_role || !_role.get(EnabledComp)) {
                  roles.splice(i, 1);
                  i--;
                }
              }
            }
          }
        };
        return CreateRoleSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreateTaskComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CompConfig.ts', './TaskConfig.ts', './ECS.ts', './EnabledComp.ts', './ShowTaskComp.ts', './TaskModelComp.ts', './TaskEntity.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_CompConfig, DB_TaskConfig, ecs, EnabledComp, ShowTaskComp, TaskModelComp, TaskEntity, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      ShowTaskComp = module.ShowTaskComp;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      TaskEntity = module.TaskEntity;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d243ezykyBNTqu/+W9GsslE", "CreateTaskComp", undefined);
      var CreateTaskComp = exports('CreateTaskComp', (_dec = ecs.register('CreateTaskComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(CreateTaskComp, _ecs$Comp);
        function CreateTaskComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.taskId = void 0;
          return _this;
        }
        var _proto = CreateTaskComp.prototype;
        _proto.reset = function reset() {};
        return CreateTaskComp;
      }(ecs.Comp)) || _class));

      /**碰撞检测系统 */
      var CreateTaskSystem = exports('CreateTaskSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(CreateTaskSystem, _ecs$ComblockSystem);
        var _proto2 = CreateTaskSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(CreateTaskComp);
        };
        function CreateTaskSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var task = app.manager.battle.taskEntity;
          if (task && task.get(EnabledComp)) {
            task.destroy();
          }
          //创建新任务实体
          var taskEntity = ecs.getEntity(TaskEntity);
          var taskConfig = DB_TaskConfig[e.get(CreateTaskComp).taskId];
          if (taskConfig && taskConfig.comps) {
            taskEntity.get(TaskModelComp).taskId = taskConfig.id;
            for (var i = 0; i < taskConfig.comps.length; i++) {
              var compId = taskConfig.comps[i];
              var comp = new (js.getClassByName(DB_CompConfig[compId].className))();
              taskEntity.add(comp);
            }
            taskEntity.add(ShowTaskComp);
          }
          app.manager.battle.taskEntity = taskEntity;
          e.remove(CreateTaskComp);
        };
        _proto2.exit = function exit(e) {};
        return CreateTaskSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DamageFlyText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, Color, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Color = module.Color;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5890esn84NIdKZgtqs2klRN", "DamageFlyText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DamageFlyText = exports('DamageFlyText', (_dec = ccclass('DamageFlyText'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DamageFlyText, _Component);
        function DamageFlyText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.duration = 1.0;
          // 飘字持续时间
          _this.riseHeight = 50;
          return _this;
        }
        var _proto = DamageFlyText.prototype;
        // 飘字上升高度
        // 初始化飘字控件
        _proto.init = function init(value, startPosition) {
          var _this2 = this;
          var label = this.getComponent(Label);
          label.string = value.toString();
          var color = value < 0 ? Color.RED : Color.GREEN;
          label.color = color;
          this.node.setPosition(startPosition);
          var endPosition = new Vec3(startPosition.x, startPosition.y + this.riseHeight);
          tween(this.node).to(this.duration, {
            position: endPosition
          }, {
            easing: 'sineOut'
          }).call(function () {
            _this2.node.destroy();
          }).start();
        };
        return DamageFlyText;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DamageFlyTextComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BattleUtil.ts', './PositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BattleUtil, PositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      PositionComp = module.PositionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "586ffurIC5KV4vm5Gr2NvaM", "DamageFlyTextComp", undefined);

      /**
       * 伤害飘字
       */
      var DamageFlyTextComp = exports('DamageFlyTextComp', (_dec = ecs.register('DamageFlyTextComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DamageFlyTextComp, _ecs$Comp);
        function DamageFlyTextComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //等待中的
          _this.readyText = [];
          //间隔时间
          _this.interval = 0.3;
          //当前间隔时间
          _this.curInterval = 0.3;
          return _this;
        }
        var _proto = DamageFlyTextComp.prototype;
        _proto.addText = function addText(text) {
          this.readyText.push(text);
          this.curInterval = 0.3;
        };
        _proto.reset = function reset() {};
        return DamageFlyTextComp;
      }(ecs.Comp)) || _class));

      /**生命检测系统 */
      var DamageFlyTextSystem = exports('DamageFlyTextSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DamageFlyTextSystem, _ecs$ComblockSystem);
        var _proto2 = DamageFlyTextSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DamageFlyTextComp);
        };
        function DamageFlyTextSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var clyTextComp = e.get(DamageFlyTextComp);
          if (clyTextComp.readyText.length > 0 && clyTextComp.curInterval >= clyTextComp.interval) {
            var text = clyTextComp.readyText.shift();
            //创建飘字
            BattleUtil.createDamageFlyText(text, e.get(PositionComp).getPosition());
            clyTextComp.curInterval = 0;
          } else if (clyTextComp.curInterval < clyTextComp.interval) {
            clyTextComp.curInterval += this.dt;
          }
        };
        _proto2.exit = function exit(e) {};
        return DamageFlyTextSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathBombExplosionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './SkillRenderComp.ts', './PositionComp.ts', './BerforeDeathMarkerComp.ts', './SkillModelComp.ts', './CreateBombExplosionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, SkillAttributeType, SkillRenderComp, PositionComp, BerforeDeathMarkerComp, SkillModelComp, CreateBombExplosionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillAttributeType = module.SkillAttributeType;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }, function (module) {
      CreateBombExplosionComp = module.CreateBombExplosionComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "09294TGpItBpLCgvkxLpk9O", "DeathBombExplosionComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 死亡后炸弹爆炸
       */
      var DeathBombExplosionComp = exports('DeathBombExplosionComp', (_dec = ccclass('DeathBombExplosionComp'), _dec2 = ecs.register('DeathBombExplosionComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(DeathBombExplosionComp, _SkillRenderComp);
        function DeathBombExplosionComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = DeathBombExplosionComp.prototype;
        _proto.reset = function reset() {};
        return DeathBombExplosionComp;
      }(SkillRenderComp)) || _class) || _class));

      /**死亡后炸弹爆炸系统 */
      var DeathBombExplosionSystem = exports('DeathBombExplosionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DeathBombExplosionSystem, _ecs$ComblockSystem);
        var _proto2 = DeathBombExplosionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DeathBombExplosionComp, BerforeDeathMarkerComp);
        };
        function DeathBombExplosionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.add(CreateBombExplosionComp);
          comp.initData({
            pos: e.get(PositionComp).getPosition(true),
            atk: e.get(SkillModelComp).attributes.get(SkillAttributeType.atk).value
          });
          e.remove(DeathBombExplosionComp);
        };
        _proto2.exit = function exit(e) {};
        return DeathBombExplosionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleController.ts', './app.ts', './ECS.ts', './IsPlayerComp.ts', './AfterDeathMarkerComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BattleController, app, ecs, IsPlayerComp, AfterDeathMarkerComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a8ae5AKT5RMoobsWYLnKo9W", "DeathComp", undefined);

      /**
       * 死亡
       */
      var DeathComp = exports('DeathComp', (_dec = ecs.register('DeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DeathComp, _ecs$Comp);
        function DeathComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DeathComp.prototype;
        _proto.reset = function reset() {};
        return DeathComp;
      }(ecs.Comp)) || _class));

      /**死亡系统 */
      var DeathSystem = exports('DeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DeathSystem, _ecs$ComblockSystem);
        var _proto2 = DeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DeathComp, AfterDeathMarkerComp);
        };
        function DeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          if (e.get(IsPlayerComp)) {
            app.manager.ui.showToast('死亡');
            BattleController.inst.playerDead();
          } else {
            console.log('死亡' + e.get(UnitComp).unit.name, e);
            e.destroy();
          }
        };
        _proto2.exit = function exit(e) {};
        return DeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathExpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './AfterDeathMarkerComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, AfterDeathMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4c620MHul1O06+ab5Dz55BZ", "DeathExpComp", undefined);

      /**
       * 死亡经验
       */
      var DeathExpComp = exports('DeathExpComp', (_dec = ecs.register('DeathExpComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DeathExpComp, _ecs$Comp);
        function DeathExpComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DeathExpComp.prototype;
        _proto.reset = function reset() {};
        return DeathExpComp;
      }(ecs.Comp)) || _class));

      /**死亡系统 */
      var DeathExpSystem = exports('DeathExpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DeathExpSystem, _ecs$ComblockSystem);
        var _proto2 = DeathExpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DeathExpComp, AfterDeathMarkerComp);
        };
        function DeathExpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {};
        _proto2.exit = function exit(e) {};
        return DeathExpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DirectionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, Vec3, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d0cf9aUg95D6ZQvbkhI0QVi", "DirectionComp", undefined);

      /**
       * 方向组件
       */
      var DirectionComp = exports('DirectionComp', (_dec = ecs.register('DirectionComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DirectionComp, _ecs$Comp);
        function DirectionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**方向 */
          _this._direction = v3(0, 0, 0);
          /** 权重 */
          _this.weight = -1;
          return _this;
        }
        var _proto = DirectionComp.prototype;
        /**
         *
         * @param data.dir 方向
         * @param data.weight 权重
         */
        _proto.setDirection = function setDirection(data) {
          if (this.weight <= data.weight) {
            this._direction.x = data.dir.x;
            this._direction.y = data.dir.y;
            this.weight = data.weight;
            // if (this.ent.get(PlayerComp)) {
            //     console.log('setDirection', this.direction, this.weight);
            // }
          }
        };

        _proto.reset = function reset() {};
        _createClass(DirectionComp, [{
          key: "direction",
          get: function get() {
            return Vec3.clone(this._direction);
          },
          set: function set(value) {
            this._direction.x = value.x;
            this._direction.y = value.y;
          }
        }]);
        return DirectionComp;
      }(ecs.Comp)) || _class));

      /**方向系统 */
      var ResetDirectionSystem = exports('ResetDirectionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(ResetDirectionSystem, _ecs$ComblockSystem);
        var _proto2 = ResetDirectionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DirectionComp);
        };
        function ResetDirectionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          e.get(DirectionComp).weight = -1;
          e.get(DirectionComp).direction = v3(0, 0);
        };
        return ResetDirectionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DoubleCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillRenderComp.ts', './SkillPluginConfig.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, SkillRenderComp, DB_SkillPluginConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "84069UiHBxP86cBQME3oynK", "DoubleCastComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 二重施法
       */
      var DoubleCastComp = exports('DoubleCastComp', (_dec = ccclass('DoubleCastComp'), _dec2 = ecs.register('DoubleCastComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(DoubleCastComp, _SkillRenderComp);
        function DoubleCastComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = DoubleCastComp.prototype;
        _proto.initSkill = function initSkill() {
          var config = DB_SkillPluginConfig[this.skillId];
          var extraCast = config.extraCast;
          var manager = this.weaponManager;
          manager.castNum += extraCast;
        };
        _proto.reset = function reset() {};
        return DoubleCastComp;
      }(SkillRenderComp)) || _class) || _class));

      /**武器开火系统 */
      var DoubleCastSystem = exports('DoubleCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DoubleCastSystem, _ecs$ComblockSystem);
        var _proto2 = DoubleCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DoubleCastComp);
        };
        function DoubleCastSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //TODO:加载Fireball预制体
        };
        _proto2.exit = function exit(e) {};
        return DoubleCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Drop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-frame-animation.ts', './ECS.ts', './ItemPrefab.ts', './DropModelComp.ts', './BaseUnit.ts', './FrameAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ecs, ItemPrefab, DropModelComp, BaaseUnit, FrameAnimation;
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
    }, null, function (module) {
      ecs = module.ecs;
    }, function (module) {
      ItemPrefab = module.ItemPrefab;
    }, function (module) {
      DropModelComp = module.DropModelComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      FrameAnimation = module.FrameAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "16b975Bx6ZCZLj/SLlCCGun", "Drop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落物
       */
      var Drop = exports('Drop', (_dec = ccclass('Drop'), _dec2 = ecs.register('Drop', false), _dec3 = property(FrameAnimation), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(Drop, _BaaseUnit);
        function Drop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniClip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Drop.prototype;
        _proto.initUI = function initUI() {
          this.itemNode.getComponent(ItemPrefab).updateUI(this.ent.get(DropModelComp).data);
        };
        _proto.reset = function reset() {
          this.remove();
          this.node.destroy();
        };
        return Drop;
      }(BaaseUnit), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DropModelComp.ts', './DropEntity.ts', './IsPlayerComp.ts', './BerforeDeathMarkerComp.ts', './PositionComp.ts', './RoleModelComp.ts', './BattleUtil.ts', './app.ts', './RoleConfig.ts', './SkillPluginConfig.ts', './ECS.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, DropModelComp, DropEntity, IsPlayerComp, BerforeDeathMarkerComp, PositionComp, RoleModelComp, BattleUtil, app, DB_RoleConfig, DB_SkillPluginConfig, ecs, RoleType, ItemType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      DropModelComp = module.DropModelComp;
    }, function (module) {
      DropEntity = module.DropEntity;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleType = module.RoleType;
      ItemType = module.ItemType;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "0fd1bumxEBKTqixA1+dvcLA", "DropComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落物品组件
       */
      var DropComp = exports('DropComp', (_dec = ccclass('DropComp'), _dec2 = ecs.register('DropComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropComp, _ecs$Comp);
        function DropComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DropComp.prototype;
        _proto.reset = function reset() {};
        return DropComp;
      }(ecs.Comp)) || _class) || _class));

      /**掉落物品组件系统 */
      var DropSystem = exports('DropSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropSystem, _ecs$ComblockSystem);
        var _proto2 = DropSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropComp, BerforeDeathMarkerComp).excludeOf(IsPlayerComp);
        };
        function DropSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var roleId = e.get(RoleModelComp).roleId;
          var config = DB_RoleConfig[roleId];
          var dropRate = 0;
          if (config.type == RoleType.normal) {
            dropRate = app.config.game.NormalMonsterSkillPluginDropRate;
          } else if (config.type == RoleType.elite) {
            dropRate = app.config.game.EliteMonsterSkillPluginDropRate;
          } else if (config.type == RoleType.boss) {
            dropRate = app.config.game.BossMonsterSkillPluginDropRate;
          }
          if (Math.random() < dropRate) {
            //掉落技能插件
            //TODO:后面优化
            var skillPlugin = DB_SkillPluginConfig;
            var dropSkillPlugin = [];
            for (var key in skillPlugin) {
              var plugin = skillPlugin[key];
              if (plugin.unlockLv <= app.store.player.lv) {
                //掉落
                dropSkillPlugin.push({
                  id: plugin.id,
                  probability: plugin.dropWeight
                });
              }
            }
            if (dropSkillPlugin.length > 0) {
              var _plugin = BattleUtil.randomSelectWithProbability(dropSkillPlugin);
              if (_plugin) {
                //掉落
                console.log('掉落技能插件', _plugin);
                var dropEntity = ecs.getEntity(DropEntity);
                dropEntity.get(DropModelComp).init({
                  id: _plugin.id,
                  type: ItemType.skillPlugin
                });
                dropEntity.get(PositionComp).setPosition(e.get(PositionComp).getPosition());
              }
            }
          }
        };
        _proto2.exit = function exit(e) {};
        return DropSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './EnabledComp.ts', './FactionTypeComp.ts', './UnitComp.ts', './PositionComp.ts', './DropModelComp.ts', './DropViewComp.ts', './DirectionComp.ts', './DropItemAfterDeathComp.ts', './IsDropComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, EnabledComp, FactionTypeComp, UnitComp, PositionComp, DropModelComp, DropViewComp, DirectionComp, DropItemAfterDeathComp, IsDropComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      DropModelComp = module.DropModelComp;
    }, function (module) {
      DropViewComp = module.DropViewComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      DropItemAfterDeathComp = module.DropItemAfterDeathComp;
    }, function (module) {
      IsDropComp = module.IsDropComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "67491I9jTRPOYzzuG1a1mkU", "DropEntity", undefined);

      /** 掉落物实体 */
      var DropEntity = exports('DropEntity', (_dec = ecs.register('DropEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(DropEntity, _BaseEntity);
        function DropEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = DropEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(PositionComp, EnabledComp, FactionTypeComp, UnitComp, DropModelComp, DropViewComp, DirectionComp, DropItemAfterDeathComp, IsDropComp);
        };
        return DropEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropItemAfterDeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './AfterDeathMarkerComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, AfterDeathMarkerComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f0f08Caix9IEqtJgmsgNFP7", "DropItemAfterDeathComp", undefined);

      /**
       * 掉落物死亡后
       * 用来死亡逻辑
       */
      var DropItemAfterDeathComp = exports('DropItemAfterDeathComp', (_dec = ecs.register('DropItemAfterDeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropItemAfterDeathComp, _ecs$Comp);
        function DropItemAfterDeathComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //当前时间
          _this.curTime = 0.2;
          return _this;
        }
        var _proto = DropItemAfterDeathComp.prototype;
        _proto.reset = function reset() {
          this.curTime = 0.2;
        };
        return DropItemAfterDeathComp;
      }(ecs.Comp)) || _class));

      /**死亡后系统 */
      var DropItemAfterDeathSystem = exports('DropItemAfterDeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropItemAfterDeathSystem, _ecs$ComblockSystem);
        var _proto2 = DropItemAfterDeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropItemAfterDeathComp, AfterDeathMarkerComp);
        };
        function DropItemAfterDeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var _e$get$unit;
          (_e$get$unit = e.get(UnitComp).unit) == null || _e$get$unit.removeCollision();
          e.get(AfterDeathMarkerComp).curTime = e.get(DropItemAfterDeathComp).curTime;
        };
        return DropItemAfterDeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e270bvpELBAnoeywue89PC4", "DropModelComp", undefined);
      /**
       * 技能数据
       */
      var DropModelComp = exports('DropModelComp', (_dec = ecs.register('DropModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropModelComp, _ecs$Comp);
        function DropModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.data = void 0;
          return _this;
        }
        var _proto = DropModelComp.prototype;
        _proto.init = function init(data) {
          this.data = data;
        };
        _proto.reset = function reset() {};
        return DropModelComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropPlayerExpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoleConfig.ts', './ECS.ts', './ConstType.ts', './IsPlayerComp.ts', './BerforeDeathMarkerComp.ts', './RoleModelComp.ts', './UpgradeComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, DB_RoleConfig, ecs, RoleType, IsPlayerComp, BerforeDeathMarkerComp, RoleModelComp, UpgradeComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleType = module.RoleType;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      UpgradeComp = module.UpgradeComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "07a3cEaXZZMkbrt08hYrYwq", "DropPlayerExpComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落玩家经验组件
       */
      var DropPlayerExpComp = exports('DropPlayerExpComp', (_dec = ccclass('DropPlayerExpComp'), _dec2 = ecs.register('DropPlayerExpComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropPlayerExpComp, _ecs$Comp);
        function DropPlayerExpComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DropPlayerExpComp.prototype;
        _proto.reset = function reset() {};
        return DropPlayerExpComp;
      }(ecs.Comp)) || _class) || _class));

      /**掉落玩家经验组件系统 */
      var DropPlayerExpSystem = exports('DropPlayerExpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropPlayerExpSystem, _ecs$ComblockSystem);
        var _proto2 = DropPlayerExpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropPlayerExpComp, BerforeDeathMarkerComp).excludeOf(IsPlayerComp);
        };
        function DropPlayerExpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //怪物类型
          var roleId = e.get(RoleModelComp).roleId;
          var config = DB_RoleConfig[roleId];
          var exp = 0;
          if (config.type == RoleType.normal) {
            exp = 20;
          } else if (config.type == RoleType.elite) {
            exp = 40;
          } else if (config.type == RoleType.boss) {
            exp = 100;
          }
          var isUpgrade = app.store.player.addExp(exp);
          if (isUpgrade) {
            app.manager.battle.playerEntity.add(UpgradeComp);
          }
        };
        return DropPlayerExpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropTaskExpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoleConfig.ts', './ECS.ts', './ConstType.ts', './IsPlayerComp.ts', './BerforeDeathMarkerComp.ts', './RoleModelComp.ts', './TaskModelComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, DB_RoleConfig, ecs, RoleType, IsPlayerComp, BerforeDeathMarkerComp, RoleModelComp, TaskModelComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleType = module.RoleType;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "7a38eHJTolLX7YYzHKB+erT", "DropTaskExpComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落任务经验组件
       */
      var DropTaskExpComp = exports('DropTaskExpComp', (_dec = ccclass('DropTaskExpComp'), _dec2 = ecs.register('DropTaskExpComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropTaskExpComp, _ecs$Comp);
        function DropTaskExpComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DropTaskExpComp.prototype;
        _proto.reset = function reset() {};
        return DropTaskExpComp;
      }(ecs.Comp)) || _class) || _class));

      /**掉落任务经验组件系统 */
      var DropTaskExpSystem = exports('DropTaskExpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropTaskExpSystem, _ecs$ComblockSystem);
        var _proto2 = DropTaskExpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropTaskExpComp, BerforeDeathMarkerComp).excludeOf(IsPlayerComp);
        };
        function DropTaskExpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var roleId = e.get(RoleModelComp).roleId;
          var config = DB_RoleConfig[roleId];
          var exp = 0;
          if (config.type == RoleType.normal) {
            exp = 1;
          } else if (config.type == RoleType.elite) {
            exp = 50;
          } else if (config.type == RoleType.boss) {
            exp = 200;
          }
          app.manager.battle.taskEntity.get(TaskModelComp).currentProgress += exp;
        };
        return DropTaskExpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropViewComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CollectDropComp.ts', './app.ts', './ECS.ts', './ConstType.ts', './BaseUnit.ts', './EnabledComp.ts', './PositionComp.ts', './UnitComp.ts', './Drop.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Prefab, instantiate, CollectDropComp, app, ecs, MapLayersType, BaaseUnit, EnabledComp, PositionComp, UnitComp, Drop;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      CollectDropComp = module.CollectDropComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      Drop = module.Drop;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8d470Mbw1xJU7zTtViVrqg6", "DropViewComp", undefined);

      /**
       * 掉落物品组件
       */
      var DropViewComp = exports('DropViewComp', (_dec = ecs.register('DropViewComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropViewComp, _ecs$Comp);
        function DropViewComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DropViewComp.prototype;
        _proto.reset = function reset() {};
        return DropViewComp;
      }(ecs.Comp)) || _class));

      /**掉落物品组件系统 */
      var DropViewSystem = exports('DropViewSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropViewSystem, _ecs$ComblockSystem);
        var _proto2 = DropViewSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropViewComp);
        };
        function DropViewSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'drop/Drop',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
              node.getComponent(Drop).initUI();
              e.add(CollectDropComp);
            }
          });
        };
        return DropViewSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropViewLoadComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, MapLayersType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f1dfbq1tIhHq7I83uPN6sLO", "DropViewLoadComp", undefined);

      /**
       * 角色数据
       */
      var DropViewLoadComp = exports('DropViewLoadComp', (_dec = ecs.register('DropViewLoadComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DropViewLoadComp, _ecs$Comp);
        function DropViewLoadComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DropViewLoadComp.prototype;
        _proto.reset = function reset() {};
        return DropViewLoadComp;
      }(ecs.Comp)) || _class));

      /**追击系统 */
      var DropViewLoadSystem = exports('DropViewLoadSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DropViewLoadSystem, _ecs$ComblockSystem);
        var _proto2 = DropViewLoadSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DropViewLoadComp);
        };
        function DropViewLoadSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var layer = MapLayersType.ENTITY;
          // app.manager.battle.loadRes('entity/drop/DropViewComp', Prefab, (result: Prefab) => {
          //     let enable = e.get(EnabledComp);
          //     if (!enable) {
          //         console.error('节点名为【DropViewComp】的角色实体已被销毁');
          //         return;
          //     }

          //     let node = instantiate(result);
          //     // e.add(node.getComponent(DropViewComp));
          //     e.get(NodeComp).unitNode = node;
          //     app.manager.battle.addChildren(node, layer);
          // });

          e.remove(DropViewLoadComp);
        };
        return DropViewLoadSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DungeonComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "a61daQMfwBEvZkojdB3F1yb", "DungeonComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**无限地图 */
      var DungeonComp = exports('DungeonComp', (_dec = ccclass('DungeonComp'), _dec2 = ecs.register('DungeonComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(DungeonComp, _ecs$Comp);
        function DungeonComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = DungeonComp.prototype;
        _proto.reset = function reset() {};
        return DungeonComp;
      }(ecs.Comp)) || _class) || _class));
      var DungeonSystem = exports('DungeonSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(DungeonSystem, _ecs$ComblockSystem);
        var _proto2 = DungeonSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(DungeonComp);
        };
        function DungeonSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {};
        _proto2.update = function update(e) {};
        return DungeonSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnabledComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "46fceAK80ROcrHEyCfej1RC", "EnabledComp", undefined);

      /**
       * 有效组件
       */
      var EnabledComp = exports('EnabledComp', (_dec = ecs.register('EnabledComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(EnabledComp, _ecs$Comp);
        function EnabledComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.enable = true;
          return _this;
        }
        var _proto = EnabledComp.prototype;
        _proto.reset = function reset() {};
        return EnabledComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enemy1FsmComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './PursueComp.ts', './PursuePlayerMoveComp.ts', './RoleAutoCastComp.ts', './SkeletonViewComp.ts', './StateMachineComp.ts', './AtkDetectorComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, RoleStateMachineType, RoleAnimType, PursueComp, PursuePlayerMoveComp, RoleAutoCastComp, SkeletonViewComp, StateMachineComp, AtkDetectorComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleStateMachineType = module.RoleStateMachineType;
      RoleAnimType = module.RoleAnimType;
    }, function (module) {
      PursueComp = module.PursueComp;
    }, function (module) {
      PursuePlayerMoveComp = module.PursuePlayerMoveComp;
    }, function (module) {
      RoleAutoCastComp = module.RoleAutoCastComp;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }, function (module) {
      AtkDetectorComp = module.AtkDetectorComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "bc430kH+vBGZY8Wu2MnSEIF", "Enemy1FsmComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Enemy1FsmComp = exports('Enemy1FsmComp', (_dec = ccclass('Enemy1FsmComp'), _dec2 = ecs.register('Enemy1FsmComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(Enemy1FsmComp, _ecs$Comp);
        function Enemy1FsmComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = Enemy1FsmComp.prototype;
        _proto.reset = function reset() {};
        return Enemy1FsmComp;
      }(ecs.Comp)) || _class) || _class));

      /**碰撞检测系统 */
      var Enemy1FsmSystem = exports('Enemy1FsmSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(Enemy1FsmSystem, _ecs$ComblockSystem);
        var _proto2 = Enemy1FsmSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(Enemy1FsmComp);
        };
        function Enemy1FsmSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //普通敌人状态机
          var stateMachineComp = e.get(StateMachineComp);
          //移动
          var move = {
            enter: function enter() {
              var _e$get;
              e.add(PursuePlayerMoveComp);
              (_e$get = e.get(SkeletonViewComp)) == null || _e$get.playAnim(RoleAnimType.idle);
              console.log('move enter');
            },
            update: function update(dt) {
              //判断是否在攻击检测范围内
            },
            exit: function exit() {
              e.remove(PursuePlayerMoveComp);
              console.log('move exit');
            }
          };

          //追击
          var pursue = {
            enter: function enter() {
              var _e$get2;
              if (!e.get(PursueComp)) {
                e.add(PursueComp).pursueEntity = stateMachineComp.nextData;
              } else {
                e.get(PursueComp).pursueEntity = stateMachineComp.nextData;
              }
              e.get(AtkDetectorComp).addCollider();
              (_e$get2 = e.get(SkeletonViewComp)) == null || _e$get2.playAnim(RoleAnimType.idle);
              console.log('pursue enter');
            },
            update: function update(dt) {},
            exit: function exit() {
              console.log('pursue exit');
            }
          };

          //攻击
          var atk = {
            enter: function enter() {
              console.log('atk enter');
              if (!e.get(RoleAutoCastComp)) {
                e.add(RoleAutoCastComp).atkEntity = stateMachineComp.nextData;
              }
            },
            update: function update(dt) {},
            exit: function exit() {
              console.log('atk exit');
              e.remove(RoleAutoCastComp);
              // e.remove(NormalAtkComp);
            }
          };

          stateMachineComp.addState(RoleStateMachineType.Pursue, pursue);
          stateMachineComp.addState(RoleStateMachineType.Atk, atk);
          stateMachineComp.addState(RoleStateMachineType.Move, move);
          stateMachineComp.addState(RoleStateMachineType.Dead, move);
          stateMachineComp.changeState(RoleStateMachineType.Move);
          e.remove(Enemy1FsmComp);
        };
        _proto2.exit = function exit(e) {};
        return Enemy1FsmSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FactionTypeComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, PhysicsSystem, ecs, FactionType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      FactionType = module.FactionType;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e292a+SctZOirDOgKOIjLyN", "FactionTypeComp", undefined);

      /**
       * 角色属性数据
       */
      var FactionTypeComp = exports('FactionTypeComp', (_dec = ecs.register('FactionTypeComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(FactionTypeComp, _ecs$Comp);
        function FactionTypeComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**阵营 */
          _this.faction = void 0;
          /**类型 */
          _this.type = void 0;
          return _this;
        }
        var _proto = FactionTypeComp.prototype;
        _proto.reset = function reset() {
          this.faction = null;
          this.type = null;
        }

        /**根据角色Faction获取碰撞组 */;
        _proto.getGroupByFaction = function getGroupByFaction(faction) {
          var group = PhysicsSystem.PhysicsGroup;
          if (faction == FactionType.ENEMY) {
            return group['ENEMY'];
          } else if (faction == FactionType.ALLY) {
            return group['ALLY'];
          } else {
            return group['NEUTRAL'];
          }
        }

        /**根据角色Faction获取碰撞组 */;
        _proto.getMaskByFaction = function getMaskByFaction(faction) {
          var group = PhysicsSystem.PhysicsGroup;
          if (faction == FactionType.ENEMY) {
            return group['ALLY'];
          } else if (faction == FactionType.ALLY) {
            return group['ENEMY'];
          } else {
            return group['ENEMY'] | group['ALLY'] | group['NEUTRAL'];
          }
        };
        _createClass(FactionTypeComp, [{
          key: "group",
          get: /**碰撞组 */
          function get() {
            return this.getGroupByFaction(this.faction);
          }

          /**敌人碰撞组 */
        }, {
          key: "mask",
          get: function get() {
            return this.getMaskByFaction(this.faction);
          }

          /**检测器碰撞组 */
        }, {
          key: "detectorGroup",
          get: function get() {
            var group = PhysicsSystem.PhysicsGroup;
            if (this.faction == FactionType.ENEMY) {
              return group['ENEMYDET'];
            } else if (this.faction == FactionType.ALLY) {
              return group['ALLYDET'];
            } else {
              return group['ENEMY'] | group['ALLY'] | group['NEUTRAL'];
            }
          }
        }]);
        return FactionTypeComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fireball.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cc-comp-frame-animation.ts', './FactionTypeComp.ts', './SkillCompManagerComp.ts', './CollisionComp.ts', './BaseUnit.ts', './FrameAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PhysicsSystem, FactionTypeComp, SkillCompManagerComp, CollisionComp, BaaseUnit, FrameAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem = module.PhysicsSystem;
    }, null, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      SkillCompManagerComp = module.SkillCompManagerComp;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      FrameAnimation = module.FrameAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ab467tMhIxMLL6w1ryalEit", "Fireball", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 火球
       */
      var Fireball = exports('Fireball', (_dec = ccclass('Fireball'), _dec2 = property(FrameAnimation), _dec(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(Fireball, _BaaseUnit);
        function Fireball() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniClip", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Fireball.prototype;
        _proto.onLoad = function onLoad() {
          this.group = this.ent.get(FactionTypeComp).group;
          this.agent = false;
          this.center.x = 0;
          this.center.y = 25;
          this.maxRadius = 15;
          this.ent.get(SkillCompManagerComp).addCompByid(200101);
          _BaaseUnit.prototype.onLoad.call(this);
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {
          var angle = Math.atan2(dir.y, dir.x);
          this.node.angle = angle * 180 / Math.PI;
        }

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET']) {
            this.ent.get(CollisionComp).addCollision(b.object.getComponent(BaaseUnit).ent);
          }
        };
        _proto.reset = function reset() {
          this.remove();
          this.node.destroy();
        };
        return Fireball;
      }(BaaseUnit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniClip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FireballComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillRenderComp.ts', './PositionComp.ts', './app.ts', './ConstType.ts', './BaseUnit.ts', './EnabledComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Prefab, instantiate, ecs, SkillRenderComp, PositionComp, app, MapLayersType, BaaseUnit, EnabledComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillRenderComp = module.SkillRenderComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "1cd15io6ilDOYL0gXNDX95W", "FireballComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 火球
       */
      var FireballComp = exports('FireballComp', (_dec = ccclass('FireballComp'), _dec2 = ecs.register('FireballComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillRenderComp) {
        _inheritsLoose(FireballComp, _SkillRenderComp);
        function FireballComp() {
          return _SkillRenderComp.apply(this, arguments) || this;
        }
        var _proto = FireballComp.prototype;
        _proto.reset = function reset() {};
        return FireballComp;
      }(SkillRenderComp)) || _class) || _class));

      /**武器开火系统 */
      var FireballSystem = exports('FireballSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(FireballSystem, _ecs$ComblockSystem);
        var _proto2 = FireballSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(FireballComp);
        };
        function FireballSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'skill/fireball/Fireball',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              node.getComponent(BaaseUnit).ent = e;
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              node.setPosition(e.get(PositionComp).getPosition());
            }
          });
        };
        _proto2.exit = function exit(e) {};
        return FireballSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FixedEntPositionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './PositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, PositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      PositionComp = module.PositionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "11ebfUIlylKELgSR3Y0rQar", "FixedEntPositionComp", undefined);

      /**
       * 固定在具体的实体身上 ,也会随之转身
       */
      var FixedEntPositionComp = exports('FixedEntPositionComp', (_dec = ecs.register('FixedEntPositionComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(FixedEntPositionComp, _ecs$Comp);
        function FixedEntPositionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.fixedEnt = null;
          return _this;
        }
        var _proto = FixedEntPositionComp.prototype;
        _proto.reset = function reset() {};
        return FixedEntPositionComp;
      }(ecs.Comp)) || _class));

      /**固定系统 */
      var FixedEntPositionSystem = exports('FixedEntPositionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(FixedEntPositionSystem, _ecs$ComblockSystem);
        var _proto2 = FixedEntPositionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(FixedEntPositionComp);
        };
        function FixedEntPositionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var posComp = e.get(PositionComp);
          var fixedEnt = e.get(FixedEntPositionComp).fixedEnt;
          if (fixedEnt && posComp) {
            var fixedEntPos = fixedEnt.get(PositionComp);
            posComp.setPosition(fixedEntPos.position);
            posComp.bodyAngle = fixedEntPos.bodyAngle;
          }
        };
        _proto2.exit = function exit(e) {};
        return FixedEntPositionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameFailComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "480b9S8o5NA8ZEvc4e6eBaz", "GameFailComp", undefined);
      /**
       *  游戏失败组件
       */
      var GameFailComp = exports('GameFailComp', (_dec = ecs.register('GameFailComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(GameFailComp, _ecs$Comp);
        function GameFailComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = GameFailComp.prototype;
        _proto.reset = function reset() {};
        return GameFailComp;
      }(ecs.Comp)) || _class));
      var GameFailSystem = exports('GameFailSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(GameFailSystem, _ecs$ComblockSystem);
        var _proto2 = GameFailSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(GameFailComp);
        };
        function GameFailSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.ui.showToast('游戏失败');
        };
        return GameFailSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameSuccessComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "39673oVOg9FU7uAfOPGfeo7", "GameSuccessComp", undefined);
      /**
       *  游戏成功组件
       */
      var GameSuccessComp = exports('GameSuccessComp', (_dec = ecs.register('GameSuccessComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(GameSuccessComp, _ecs$Comp);
        function GameSuccessComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = GameSuccessComp.prototype;
        _proto.reset = function reset() {};
        return GameSuccessComp;
      }(ecs.Comp)) || _class));
      var GameSuccessSystem = exports('GameSuccessSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(GameSuccessSystem, _ecs$ComblockSystem);
        var _proto2 = GameSuccessSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(GameSuccessComp);
        };
        function GameSuccessSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.ui.showToast('游戏成功');
        };
        return GameSuccessSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GenerateOneRoleComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BattleUtil.ts', './MapModelComp.ts', './MonsterFactoryConfig.ts', './CreateRoleComp.ts', './ConstType.ts', './TaskRoleComp.ts', './TaskConfig.ts', './TaskModelComp.ts', './app.ts', './PositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, ecs, BattleUtil, MapModelComp, DB_MonsterFactoryConfig, CreateRoleComp, FactionType, TaskRoleComp, DB_TaskConfig, TaskModelComp, app, PositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      DB_MonsterFactoryConfig = module.DB_MonsterFactoryConfig;
    }, function (module) {
      CreateRoleComp = module.CreateRoleComp;
    }, function (module) {
      FactionType = module.FactionType;
    }, function (module) {
      TaskRoleComp = module.TaskRoleComp;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      PositionComp = module.PositionComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "1ea6901YJFPyYb38SfIHKS+", "GenerateOneRoleComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**随机生成怪物 */
      var GenerateOneRoleComp = exports('GenerateOneRoleComp', (_dec = ccclass('GenerateOneRoleComp'), _dec2 = ecs.register('GenerateOneRoleComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(GenerateOneRoleComp, _ecs$Comp);
        function GenerateOneRoleComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = GenerateOneRoleComp.prototype;
        _proto.reset = function reset() {};
        return GenerateOneRoleComp;
      }(ecs.Comp)) || _class) || _class));
      var GenerateOneRoleSystem = exports('GenerateOneRoleSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(GenerateOneRoleSystem, _ecs$ComblockSystem);
        var _proto2 = GenerateOneRoleSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(GenerateOneRoleComp);
        };
        function GenerateOneRoleSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //先清除其他所有敌人
          var createRoleComp = app.manager.battle.controlEntity.get(CreateRoleComp);
          createRoleComp.clearRoleData(FactionType.ENEMY);

          //生成一个boss
          var mapComp = app.manager.battle.mapEntity.get(MapModelComp);
          var monsterId = this.getRandomMonsterId(e);
          var pos = this.getRandomPositionAroundPlayer(mapComp);
          createRoleComp.addRoleData({
            roleId: monsterId,
            pos: pos,
            faction: FactionType.ENEMY,
            extraComps: [TaskRoleComp]
          });
        };
        _proto2.getRandomMonsterId = function getRandomMonsterId(e) {
          var taskConfig = DB_TaskConfig[e.get(TaskModelComp).taskId];
          var monsterFactoryConfig = DB_MonsterFactoryConfig[taskConfig.data.monsterFactory];
          var monster = monsterFactoryConfig.monster;
          var data = BattleUtil.randomSelectWithProbability(monster);
          return data.id;
        }

        // 在玩家半径处随机取一点，这一点要在地图中
        ;

        _proto2.getRandomPositionAroundPlayer = function getRandomPositionAroundPlayer(mapComp) {
          var radius = 1100 + Math.random() * 400;
          var player = app.manager.battle.playerEntity;
          var playerPos = player.get(PositionComp).getPosition(true);
          var x, y;
          do {
            var angle = Math.random() * Math.PI * 2;
            var r = Math.sqrt(Math.random()) * radius;
            x = playerPos.x + r * Math.cos(angle);
            y = playerPos.y + r * Math.sin(angle);
          } while (x < 0 || x > mapComp.width || y < 0 || y > mapComp.height);
          return v3(x, y);
        };
        return GenerateOneRoleSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './DamageFlyTextComp.ts', './FactionTypeComp.ts', './AfterDeathMarkerComp.ts', './BerforeDeathMarkerComp.ts', './SkeletonViewComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, EntityType, RoleAnimType, DamageFlyTextComp, FactionTypeComp, AfterDeathMarkerComp, BerforeDeathMarkerComp, SkeletonViewComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      EntityType = module.EntityType;
      RoleAnimType = module.RoleAnimType;
    }, function (module) {
      DamageFlyTextComp = module.DamageFlyTextComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "41f6f4yTrtALaDJ883eaIAJ", "HpComp", undefined);

      /**
       * 角色属性数据
       */
      var HpComp = exports('HpComp', (_dec = ecs.register('HpComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(HpComp, _ecs$Comp);
        function HpComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.hp = 0;
          //变化的血量
          _this.changeHp = [];
          return _this;
        }
        var _proto = HpComp.prototype;
        _proto.init = function init(value) {
          this.hp = value;
        };
        _proto.addHp = function addHp(data) {
          this.changeHp.push(data);
        };
        _proto.clearChangeHp = function clearChangeHp() {
          this.changeHp = [];
        };
        _proto.reset = function reset() {
          console.log('HpComp reset');
        };
        return HpComp;
      }(ecs.Comp)) || _class));

      /**生命检测系统 */
      var HpSystem = exports('HpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(HpSystem, _ecs$ComblockSystem);
        var _proto2 = HpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(HpComp).excludeOf(BerforeDeathMarkerComp, AfterDeathMarkerComp);
        };
        function HpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var changeHp = e.get(HpComp).changeHp;
          var isHit = false;
          for (var i = 0; i < changeHp.length; i++) {
            var value = e.get(FactionTypeComp).type == EntityType.SKILL ? -1 : changeHp[i].value;
            var isShow = e.get(FactionTypeComp).type == EntityType.SKILL ? false : changeHp[i].isShow;
            e.get(HpComp).hp += value;
            if (changeHp[i].value < 0) {
              isHit = true;
            }
            if (isShow) {
              //伤害飘字
              e.get(DamageFlyTextComp).addText(changeHp[i].value);
            }
          }
          if (changeHp.length > 0) {
            e.get(HpComp).clearChangeHp();
            if (e.get(HpComp).hp <= 0) {
              e.add(BerforeDeathMarkerComp);
            } else {
              if (isHit && e.get(FactionTypeComp).type == EntityType.ROLE) {
                //受击
                e.get(SkeletonViewComp).playAnim(RoleAnimType.hit);
              }
            }
          }
        };
        _proto2.exit = function exit(e) {};
        return HpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InfiniteMapCom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './app.ts', './ConstType.ts', './PositionComp.ts', './MapModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, Node, Sprite, UITransform, SpriteFrame, Size, ecs, app, MapLayersType, PositionComp, MapModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Node = module.Node;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      SpriteFrame = module.SpriteFrame;
      Size = module.Size;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "39fde4I8blKbpbu38qym1ow", "InfiniteMapCom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**无限地图 */
      var InfiniteMapCom = exports('InfiniteMapCom', (_dec = ccclass('InfiniteMapCom'), _dec2 = ecs.register('InfiniteMapCom'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(InfiniteMapCom, _ecs$Comp);
        function InfiniteMapCom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          // 视图大小
          _this.viewSize = new Size(0, 0);
          // 地图块大小
          _this.chunkSize = 512;
          // 已加载的地图块
          _this.loadedChunks = new Map();
          //地图块对象池
          _this.chunkPool = [];
          return _this;
        }
        var _proto = InfiniteMapCom.prototype;
        _proto.reset = function reset() {
          this.viewSize.set(0, 0);
          this.loadedChunks.clear();
        };
        return InfiniteMapCom;
      }(ecs.Comp)) || _class) || _class));
      var InfiniteMapSystem = exports('InfiniteMapSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(InfiniteMapSystem, _ref);
        var _proto2 = InfiniteMapSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(InfiniteMapCom);
        };
        function InfiniteMapSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var viewSize = view.getVisibleSize();
          var comp = e.get(InfiniteMapCom);
          comp.viewSize.set(viewSize.width, viewSize.height);
          app.manager.battle.mapEntity.get(MapModelComp).width = 99999999;
          app.manager.battle.mapEntity.get(MapModelComp).height = 99999999;
        };
        _proto2.update = function update(e) {
          var _this2 = this;
          var comp = e.get(InfiniteMapCom);
          var player = app.manager.battle.playerEntity;
          if (player) {
            var playerPos = player.get(PositionComp).getPosition(true);
            var surroundingChunks = this.getSurroundingChunks(playerPos, comp.viewSize, comp.chunkSize);

            // 加载新的地图块
            surroundingChunks.forEach(function (chunkKey) {
              if (!comp.loadedChunks.has(chunkKey)) {
                _this2.loadChunk(comp, chunkKey);
              }
            });

            // 卸载不需要的地图块
            comp.loadedChunks.forEach(function (node, chunkKey) {
              if (!surroundingChunks.has(chunkKey)) {
                _this2.unloadChunk(comp, chunkKey);
              }
            });
          }
        };
        _proto2.getSurroundingChunks = function getSurroundingChunks(playerPos, viewSize, chunkSize) {
          var surroundingChunks = new Set();
          var halfWidth = Math.ceil(viewSize.width / 2);
          var halfHeight = Math.ceil(viewSize.height / 2);

          // 计算玩家所在的地图块坐标
          var playerChunkX = Math.floor(playerPos.x / chunkSize);
          var playerChunkY = Math.floor(playerPos.y / chunkSize);

          // 计算需要加载的地图块范围，额外扩展一个块以确保覆盖
          var startX = playerChunkX - Math.ceil(halfWidth / chunkSize) - 1;
          var startY = playerChunkY - Math.ceil(halfHeight / chunkSize) - 1;
          var endX = playerChunkX + Math.ceil(halfWidth / chunkSize) + 1;
          var endY = playerChunkY + Math.ceil(halfHeight / chunkSize) + 1;
          for (var x = startX; x <= endX; x++) {
            for (var y = startY; y <= endY; y++) {
              surroundingChunks.add(x + "&" + y);
            }
          }
          return surroundingChunks;
        };
        _proto2.loadChunk = function loadChunk(comp, chunkKey) {
          var node;
          if (comp.chunkPool.length > 0) {
            node = comp.chunkPool.pop();
            node.active = true;
          } else {
            node = new Node();
            node.addComponent(Sprite);
            node.getComponent(UITransform).anchorX = 0;
            node.getComponent(UITransform).anchorY = 0;
            app.manager.loader.load({
              path: 'map/textures/bb1/spriteFrame',
              bundle: 'battle',
              type: SpriteFrame,
              onComplete: function onComplete(result) {
                node.getComponent(Sprite).spriteFrame = result;
              }
            });
          }
          var _chunkKey$split$map = chunkKey.split('&').map(Number),
            x = _chunkKey$split$map[0],
            y = _chunkKey$split$map[1];
          node.setPosition(x * comp.chunkSize, y * comp.chunkSize, 0);
          comp.loadedChunks.set(chunkKey, node);
          app.manager.battle.addChildren(node, MapLayersType.MAP);
        };
        _proto2.unloadChunk = function unloadChunk(comp, chunkKey) {
          var node = comp.loadedChunks.get(chunkKey);
          if (node) {
            comp.chunkPool.push(node);
            node.removeFromParent();
            comp.loadedChunks["delete"](chunkKey);
          }
        };
        return InfiniteMapSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IsDropComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "db8cb5gzvtLS4HcP0/NjbTi", "IsDropComp", undefined);

      /**
       * 掉落物组件
       */
      var IsDropComp = exports('IsDropComp', (_dec = ecs.register('IsDropComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(IsDropComp, _ecs$Comp);
        function IsDropComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = IsDropComp.prototype;
        _proto.reset = function reset() {};
        return IsDropComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IsPlayerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "aca91jGl4JPopE9CRR8tGuY", "IsPlayerComp", undefined);

      /**
       * 玩家组件
       */
      var IsPlayerComp = exports('IsPlayerComp', (_dec = ecs.register('IsPlayerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(IsPlayerComp, _ecs$Comp);
        function IsPlayerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = IsPlayerComp.prototype;
        _proto.reset = function reset() {};
        return IsPlayerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IsRoleComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "45ef3MU2ddMD7fJS6IkZAZ8", "IsRoleComp", undefined);

      /**
       * 是否是角色组件
       */
      var IsRoleComp = exports('IsRoleComp', (_dec = ecs.register('IsRoleComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(IsRoleComp, _ecs$Comp);
        function IsRoleComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = IsRoleComp.prototype;
        _proto.reset = function reset() {};
        return IsRoleComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IsSkillComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9a5f571Q/dIZIFb7rc+qrmq", "IsSkillComp", undefined);
      /**
       * 技能组件
       */
      var IsSkillComp = exports('IsSkillComp', (_dec = ecs.register('IsSkillComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(IsSkillComp, _ecs$Comp);
        function IsSkillComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = IsSkillComp.prototype;
        _proto.reset = function reset() {};
        return IsSkillComp;
      }(ecs.Comp)) || _class));

      /**死亡系统 */
      var IsSkillSystem = exports('IsSkillSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(IsSkillSystem, _ecs$ComblockSystem);
        var _proto2 = IsSkillSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(IsSkillComp);
        };
        function IsSkillSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          // console.log('技能系统', e);
        };
        _proto2.exit = function exit(e) {};
        return IsSkillSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IsWeaponComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "61e256pLwhPDplt7As/OpT5", "IsWeaponComp", undefined);

      /**
       * 武器组件
       */
      var IsWeaponComp = exports('IsWeaponComp', (_dec = ecs.register('IsWeaponComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(IsWeaponComp, _ecs$Comp);
        function IsWeaponComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = IsWeaponComp.prototype;
        _proto.reset = function reset() {};
        return IsWeaponComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConstType.ts', './SkillPluginConfig.ts', './WeaponConfig.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, SpriteFrame, Sprite, Component, ItemType, DB_SkillPluginConfig, DB_WeaponConfig, app;
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
      Label = module.Label;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      ItemType = module.ItemType;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      DB_WeaponConfig = module.DB_WeaponConfig;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b335aMkemVKsLwCj+m98EeQ", "ItemPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ItemPrefab = exports('ItemPrefab', (_dec = ccclass('ItemPrefab'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemPrefab, _Component);
        function ItemPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boxNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nameLab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectNode", _descriptor4, _assertThisInitialized(_this));
          _this._clickCb = void 0;
          return _this;
        }
        var _proto = ItemPrefab.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.on(Button.EventType.CLICK, function () {
            if (_this2._clickCb) {
              _this2._clickCb();
            }
          }, this);
        };
        _proto.start = function start() {};
        _proto.updateUI = function updateUI(data, clickCb) {
          var _this3 = this;
          this._clickCb = clickCb;
          // this.selectNode.active = false;
          var isActive = !!data && !!data.id;
          this.boxNode.active = !isActive;
          this.iconNode.active = isActive;
          this.nameLab.node.active = isActive;
          if (isActive) {
            if (data.type == ItemType.skillPlugin) {
              var config = DB_SkillPluginConfig[data.id];
              this.nameLab.string = config.name;
            } else if (data.type == ItemType.weapon) {
              var _config = DB_WeaponConfig[data.id];
              this.nameLab.string = _config.name;
            }
            app.manager.loader.load({
              path: 'icon/' + data.id + '/spriteFrame',
              bundle: 'home',
              type: SpriteFrame,
              onComplete: function onComplete(result) {
                if (!_this3.isValid) {
                  console.log('item已经被销毁');
                  return;
                }
                _this3.iconNode.getComponent(Sprite).spriteFrame = result;
              }
            });
          }
        }

        //选中
        ;

        _proto.onSelect = function onSelect() {
          this.selectNode.active = true;
        }

        //取消选中
        ;

        _proto.unSelect = function unSelect() {
          this.selectNode.active = false;
        };
        return ItemPrefab;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LinearSkillMoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillMoveComp.ts', './ECS.ts', './DirectionComp.ts', './SkillModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SkillMoveComp, ecs, DirectionComp, SkillModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SkillMoveComp = module.SkillMoveComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "deb5drk8lJN2LVen4i2TjRl", "LinearSkillMoveComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      /**
       * 直线运动
       */
      var LinearSkillMoveComp = exports('LinearSkillMoveComp', (_dec = ccclass('LinearMoveComp'), _dec2 = ecs.register('LinearMoveComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillMoveComp) {
        _inheritsLoose(LinearSkillMoveComp, _SkillMoveComp);
        function LinearSkillMoveComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SkillMoveComp.call.apply(_SkillMoveComp, [this].concat(args)) || this;
          //角度
          _this.direction = void 0;
          return _this;
        }
        var _proto = LinearSkillMoveComp.prototype;
        _proto.reset = function reset() {};
        return LinearSkillMoveComp;
      }(SkillMoveComp)) || _class) || _class));

      /**移动系统 */
      var LinearMoveSystem = exports('LinearMoveSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(LinearMoveSystem, _ref);
        var _proto2 = LinearMoveSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(LinearSkillMoveComp);
        };
        function LinearMoveSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var data = e.get(SkillModelComp);
          //随机散射角度，-scatteringAngle和scatteringAngle之间
          var scatteringAngle = data.scatteringAngle;
          var angle = Math.random() * scatteringAngle * 2 - scatteringAngle;
          var direction = data.direction.clone();
          // 计算旋转矩阵
          var radian = angle * (Math.PI / 180); // 将角度转换为弧度
          var cos = Math.cos(radian);
          var sin = Math.sin(radian);

          // 应用旋转矩阵到当前方向向量
          var newX = direction.x * cos - direction.y * sin;
          var newY = direction.x * sin + direction.y * cos;

          // 设置新的方向向量
          direction.x = newX;
          direction.y = newY;
          e.get(LinearSkillMoveComp).direction = direction;
        };
        _proto2.update = function update(e) {
          var direction = e.get(LinearSkillMoveComp).direction;
          e.get(DirectionComp).direction = direction;
        };
        _proto2.exit = function exit(e) {};
        return LinearMoveSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapCompEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "180c0p4HP1N4pv0Bao+9NEL", "MapCompEntity", undefined);

      /** 游戏用来地图的额外功能 */
      var MapCompEntity = exports('MapCompEntity', (_dec = ecs.register('MapCompEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(MapCompEntity, _BaseEntity);
        function MapCompEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = MapCompEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents();
        };
        return MapCompEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './CameraFollowComp.ts', './MapModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, CameraFollowComp, MapModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      CameraFollowComp = module.CameraFollowComp;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "117cdyUXktDw4c1jNxlTloQ", "MapEntity", undefined);

      /** 游戏地图 */
      var MapEntity = exports('MapEntity', (_dec = ecs.register('MapEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(MapEntity, _BaseEntity);
        function MapEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = MapEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(MapModelComp, CameraFollowComp);
        };
        return MapEntity;
      }(BaseEntity)) || _class));
      var MapSystem = exports('MapSystem', /*#__PURE__*/function (_ecs$System) {
        _inheritsLoose(MapSystem, _ecs$System);
        function MapSystem() {
          return _ecs$System.call(this) || this;
        }
        return MapSystem;
      }(ecs.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapLoadComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MapConfig.ts', './ECS.ts', './RoleEntity.ts', './RoleModelComp.ts', './ConstType.ts', './FactionTypeComp.ts', './PositionComp.ts', './PlayerShowComp.ts', './MapCompEntity.ts', './CompConfig.ts', './MapModelComp.ts', './CreateTaskComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, UITransform, Widget, v3, js, DB_MapConfig, ecs, RoleEntity, RoleModelComp, FactionType, EntityType, FactionTypeComp, PositionComp, PlayerShowComp, MapCompEntity, DB_CompConfig, MapModelComp, CreateTaskComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      Widget = module.Widget;
      v3 = module.v3;
      js = module.js;
    }, function (module) {
      DB_MapConfig = module.DB_MapConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleEntity = module.RoleEntity;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      FactionType = module.FactionType;
      EntityType = module.EntityType;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      PlayerShowComp = module.PlayerShowComp;
    }, function (module) {
      MapCompEntity = module.MapCompEntity;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      CreateTaskComp = module.CreateTaskComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2540e8utBdGwqTD55tIZRuu", "MapLoadComp", undefined);

      /**地图数据 */
      var MapLoadComp = exports('MapLoadComp', (_dec = ecs.register('MapLoadComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MapLoadComp, _ecs$Comp);
        function MapLoadComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.loadData = void 0;
          return _this;
        }
        var _proto = MapLoadComp.prototype;
        _proto.init = function init(data) {
          var _data$mapLv;
          data.mapLv = (_data$mapLv = data.mapLv) != null ? _data$mapLv : app.store.player.lv;
          this.loadData = data;
        };
        _proto.reset = function reset() {
          this.loadData = null;
        };
        return MapLoadComp;
      }(ecs.Comp)) || _class));
      var MapLoadSystem = exports('MapLoadSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MapLoadSystem, _ecs$ComblockSystem);
        var _proto2 = MapLoadSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MapLoadComp);
        };
        function MapLoadSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var mapLoadComp = e.get(MapLoadComp);
          //TODO:加载地图
          //加载地图元素
          var config = DB_MapConfig[mapLoadComp.loadData.mapId];
          var gameMap = app.manager.battle.gameMap;
          gameMap.getComponent(UITransform).width = config.size ? config.size[0] : 0;
          gameMap.getComponent(UITransform).height = config.size ? config.size[1] : 0;
          gameMap.getComponent(Widget).updateAlignment();
          var npc = config.npc;
          for (var i = 0; i < npc.length; i++) {
            var roleId = npc[i].id;
            var role = ecs.getEntity(RoleEntity);
            role.get(RoleModelComp).init({
              roleId: roleId,
              lv: mapLoadComp.loadData.mapLv,
              difficulty: mapLoadComp.loadData.difficulty
            });
            role.get(PositionComp).setPosition(v3(npc[i].pos[0], npc[i].pos[1]), true);
            role.get(FactionTypeComp).faction = FactionType.ALLY;
            role.get(FactionTypeComp).type = EntityType.ROLE;
          }
          e.add(PlayerShowComp).startPos = v3(config.startPos[0], config.startPos[1]);
          if (config.comps) {
            //增加额外的功能
            var mapCompEntity = ecs.getEntity(MapCompEntity);
            for (var _i = 0; _i < config.comps.length; _i++) {
              var compId = config.comps[_i];
              var comp = new (js.getClassByName(DB_CompConfig[compId].className))();
              mapCompEntity.add(comp);
            }
            e.addChild(mapCompEntity);
            app.manager.battle.mapCompEntity = mapCompEntity;
          }
          var mapModel = e.get(MapModelComp);
          mapModel.mapId = mapLoadComp.loadData.mapId;
          mapModel.mapLv = mapLoadComp.loadData.mapLv;
          mapModel.width = config.size ? config.size[0] : 0;
          mapModel.height = config.size ? config.size[1] : 0;
          mapModel.roleExtraComp = config.roleExtraComp;
          mapModel.skillExtraComp = config.skillExtraComp;
          mapModel.isNew = true;
          app.manager.battle.controlEntity.add(CreateTaskComp).taskId = config.task;
          e.remove(MapLoadComp);
        };
        return MapLoadSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fe828B2U0xIFb+1J+FkBYuC", "MapModelComp", undefined);
      /**地图数据 */
      var MapModelComp = exports('MapModelComp', (_dec = ecs.register('MapModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MapModelComp, _ecs$Comp);
        function MapModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /** 地图名 */
          _this.name = 'map';
          /**地图id */
          _this.mapId = 0;
          /**地图等级 */
          _this.mapLv = 0;
          /**难度 */
          _this.difficulty = 1;
          /** 地形宽度 */
          _this.width = 5120;
          /** 地形高度 */
          _this.height = 5120;
          /**角色额外组件 */
          _this.roleExtraComp = [];
          /**技能额外组件 */
          _this.skillExtraComp = [];
          /**地图经验 */
          _this.exp = 0;
          /**是否是新地图 */
          _this.isNew = true;
          return _this;
        }
        var _proto = MapModelComp.prototype;
        _proto.reset = function reset() {
          this.name = null;
          this.width = 0;
          this.height = 0;
        };
        return MapModelComp;
      }(ecs.Comp)) || _class));

      /**任务模型系统 */
      var MapModelSystem = exports('MapModelSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MapModelSystem, _ecs$ComblockSystem);
        var _proto2 = MapModelSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MapModelComp);
        };
        function MapModelSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(MapModelComp);
          if (comp.isNew) {
            comp.isNew = false;
          }
        };
        return MapModelSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MasterComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cc34fPlSVZDBa9q3g6WFvS1", "MasterComp", undefined);
      /**
       * 主人组件
       * 武器的主人是角色
       * 技能的主人是武器
       */
      var MasterComp = exports('MasterComp', (_dec = ecs.register('MasterComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MasterComp, _ecs$Comp);
        function MasterComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**
           * 主人
           */
          _this._master = void 0;
          return _this;
        }
        var _proto = MasterComp.prototype;
        _proto.reset = function reset() {};
        _createClass(MasterComp, [{
          key: "master",
          get: function get() {
            return this._master;
          },
          set: function set(value) {
            this._master = value;
          }
        }]);
        return MasterComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MonsterFactoryComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "acee3oDrP1AU4nwa4shoRF5", "MonsterFactoryComp", undefined);
      /**怪物工厂
       * 用于生成怪物
       */
      var MonsterFactoryComp = exports('MonsterFactoryComp', (_dec = ecs.register('MonsterFactoryComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MonsterFactoryComp, _ecs$Comp);
        function MonsterFactoryComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**id */
          _this.id = 0;
          /**等级 */
          _this.lv = 0;
          /**一共怪物数量 */
          _this.totalSpawnCount = 0;
          /**当前怪物数量 */
          _this.currentSpawnCount = 0;
          /**当前冷却时间 */
          _this.currentCoolTime = 0;
          /**当前游戏时间 */
          _this.currentGameTime = 0;
          /**当前消灭怪物数量 */
          _this.currentKillCount = 0;
          /**当前积分 */
          _this.currentIntegral = 0;
          /**boss状态，未出现，出现，死亡 */
          _this.bossState = 'NotAppeared';
          return _this;
        }
        var _proto = MonsterFactoryComp.prototype;
        _proto.reset = function reset() {};
        _proto.init = function init(data) {
          this.id = data.mapId;
          this.lv = data.lv;
          this.totalSpawnCount = 10;
          this.currentCoolTime = 0;
          this.currentGameTime = 0;
          this.currentKillCount = 0;
          this.currentIntegral = 0;
          this.bossState = 'NotAppeared';
        };
        return MonsterFactoryComp;
      }(ecs.Comp)) || _class));
      var MonsterFactorySystem = exports('MonsterFactorySystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MonsterFactorySystem, _ecs$ComblockSystem);
        var _proto2 = MonsterFactorySystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MonsterFactoryComp);
        };
        function MonsterFactorySystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          // let comp = e.get(MonsterFactoryComp);
          // let config = DB_MonsterFactoryConfig[comp.id];
          // if (
          //     (comp.currentKillCount >= config.totalSpawnCount ||
          //         comp.currentGameTime >= config.limitTime ||
          //         comp.currentIntegral >= config.limiTintegral) &&
          //     comp.bossState === 'NotAppeared'
          // ) {
          //     this.spawnMonster(comp, 'boss');
          //     e.remove(MonsterFactoryComp);
          // } else if (
          //     comp.currentCoolTime <= 0 &&
          //     (comp.currentSpawnCount < config.currentSpawnCount || comp.totalSpawnCount < config.totalSpawnCount)
          // ) {
          //     this.spawnMonster(comp, 'normal');
          //     comp.currentCoolTime = config.spawnFrequency;
          //     return;
          // } else {
          //     comp.currentCoolTime -= this.dt;
          // }
        }

        /**生成怪物 */;
        _proto2.spawnMonster = function spawnMonster(comp, type) {
          // let config = DB_MonsterFactoryConfig[comp.id];
          // let monster = type === 'normal' ? config.normalMonster : config.bossMonster;
          // let monsterId = this.getMonsterByProbability(monster);
          // let roleConfig = DB_RoleConfig[monsterId];
          // let role = ecs.getEntity<RoleEntity>(RoleEntity);
          // role.get(RoleModelComp).init(monsterId, comp.lv);
          // let pos = BattleUtil.randomPointAroundPlayer(1000);
          // role.get(PositionComp).setPosition(pos, true);
          // role.get(FactionTypeComp).faction = FactionType.ENEMY;
          // role.get(FactionTypeComp).type = EntityType.ROLE;
          // role.add(RoleShowAnimation1Comp);
          // // role.get(WeaponDepotComp).init(roleConfig.WeaponDepot);
        }

        /**根据概率获取怪物 */;
        _proto2.getMonsterByProbability = function getMonsterByProbability(monster) {
          var total = 0;
          for (var i = 0; i < monster.length; i++) {
            total += monster[i][1];
          }
          var random = Math.random();
          var sum = 0;
          for (var _i = 0; _i < monster.length; _i++) {
            sum += monster[_i][1];
            if (random <= sum / total) {
              return monster[_i][0];
            }
          }
        };
        return MonsterFactorySystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './AfterDeathMarkerComp.ts', './PositionComp.ts', './SpeedComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, v3, ecs, AfterDeathMarkerComp, PositionComp, SpeedComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      SpeedComp = module.SpeedComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7ee80iJzyxIlrQW7lSAGYSb", "MoveComp", undefined);
      /**
       * 移动组件 ，只有玩家才有
       */
      var MoveComp = exports('MoveComp', (_dec = ecs.register('MoveComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MoveComp, _ecs$Comp);
        function MoveComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = MoveComp.prototype;
        _proto.reset = function reset() {};
        return MoveComp;
      }(ecs.Comp)) || _class));

      /**移动系统 */
      var MoveSystem = exports('MoveSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MoveSystem, _ecs$ComblockSystem);
        var _proto2 = MoveSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MoveComp, SpeedComp).excludeOf(AfterDeathMarkerComp);
        };
        function MoveSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var speedComp = e.get(SpeedComp);
          var speed = speedComp.speed;
          if (speed.x != 0 || speed.y != 0) {
            var posCmp = e.get(PositionComp);
            var pos = posCmp.getPosition(true);
            posCmp.setPosition(v3(pos.x + speed.x, pos.y + speed.y));
          } else {
            return;
          }
        };
        _proto2.exit = function exit(e) {};
        return MoveSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveOnTileComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bd3b8yWESVBkZA96TKoRotj", "MoveOnTileComp", undefined);

      /**
       * 在格子上移动组件 ,用于修正速度
       */
      var MoveOnTileComp = exports('MoveOnTileComp', (_dec = ecs.register('MoveOnTileComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MoveOnTileComp, _ecs$Comp);
        function MoveOnTileComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = MoveOnTileComp.prototype;
        _proto.reset = function reset() {};
        return MoveOnTileComp;
      }(ecs.Comp)) || _class));

      /**在格子上移动组件 ,用于修正速度 */
      var MoveOnTileSystem = exports('MoveOnTileSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MoveOnTileSystem, _ecs$ComblockSystem);
        var _proto2 = MoveOnTileSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MoveOnTileComp);
        };
        function MoveOnTileSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          // //位移后的终点
          // let curPos = e.get(PositionComp).getPosition();
          // let speed = e.get(SpeedComp).speedPerFrame;
          // //是否在格子里
          // if (MapHelper.getInstance().isInMoveMapByGamePos(v3(curPos.x + speed.x, curPos.y + speed.y))) {
          //     return;
          // } else if (MapHelper.getInstance().isInMoveMapByGamePos(v3(curPos.x + speed.x, curPos.y))) {
          //     speed.y = 0;
          // } else if (MapHelper.getInstance().isInMoveMapByGamePos(v3(curPos.x, curPos.y + speed.y))) {
          //     speed.x = 0;
          // } else {
          //     speed.x = 0;
          //     speed.y = 0;
          // }
        }

        // 插值函数
        ;

        _proto2.lerp = function lerp(start, end, t) {
          return start + (end - start) * t;
        };
        _proto2.exit = function exit(e) {};
        return MoveOnTileSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './WeaponModelComp.ts', './WeaponDepotComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponAttributeType, WeaponModelComp, WeaponDepotComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b9f1aekPzZHkYiChz0EKXZi", "MpComp", undefined);

      /**
       * 角色魔法值数据
       */
      var MpComp = exports('MpComp', (_dec = ecs.register('MpComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MpComp, _ecs$Comp);
        function MpComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.mp = 0;
          return _this;
        }
        var _proto = MpComp.prototype;
        _proto.reset = function reset() {};
        return MpComp;
      }(ecs.Comp)) || _class));

      /**魔法值检测系统 */
      var MpSystem = exports('MpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MpSystem, _ecs$ComblockSystem);
        var _proto2 = MpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MpComp);
        };
        function MpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.get(MpComp);
          var weapon = e.get(WeaponDepotComp).curWeapon;
          if (weapon) {
            var data = weapon.get(WeaponModelComp).data;
            comp.mp = data[WeaponAttributeType.mpMax];
          }
        };
        _proto2.update = function update(e) {
          var comp = e.get(MpComp);
          var weapon = e.get(WeaponDepotComp).curWeapon;
          if (weapon) {
            var data = weapon.get(WeaponModelComp).data;
            //恢复
            comp.mp += data[WeaponAttributeType.mpChargeSpeed] * this.dt;
            var maxMp = data[WeaponAttributeType.mpMax];
            if (comp.mp > maxMp) {
              comp.mp = maxMp;
            }
          }
        };
        _proto2.exit = function exit(e) {};
        return MpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MpRecoverComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, RoleModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "73c5fcXwftAKYmHwhKOiKcC", "MpRecoverComp", undefined);

      /**
       * 法力恢复
       */
      var MpRecoverComp = exports('MpRecoverComp', (_dec = ecs.register('MpRecoverComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(MpRecoverComp, _ecs$Comp);
        function MpRecoverComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = MpRecoverComp.prototype;
        _proto.reset = function reset() {};
        return MpRecoverComp;
      }(ecs.Comp)) || _class));

      /**生命检测系统 */
      var MpRecoverSystem = exports('MpRecoverSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MpRecoverSystem, _ecs$ComblockSystem);
        var _proto2 = MpRecoverSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(MpRecoverComp, RoleModelComp);
        };
        function MpRecoverSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          // let mpRecover = this.dt * e.get(RoleModelComp).getAttribute(AttributeType.mpRecover);
          // e.get(MpComp).addChangeMp({ value: mpRecover, isShow: false });
        };
        _proto2.exit = function exit(e) {};
        return MpRecoverSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NormalAtkComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './AtkDetectorComp.ts', './EnabledComp.ts', './HpComp.ts', './PositionComp.ts', './StateMachineComp.ts', './MasterComp.ts', './SkeletonViewComp.ts', './RestrictMoveComp.ts', './BattleUtil.ts', './RoleAtkMarkerComp.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, ecs, RoleAnimType, RoleStateMachineType, AtkDetectorComp, EnabledComp, HpComp, PositionComp, StateMachineComp, MasterComp, SkeletonViewComp, RestrictMoveComp, BattleUtil, RoleAtkMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleAnimType = module.RoleAnimType;
      RoleStateMachineType = module.RoleStateMachineType;
    }, function (module) {
      AtkDetectorComp = module.AtkDetectorComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }, function (module) {
      RestrictMoveComp = module.RestrictMoveComp;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      RoleAtkMarkerComp = module.RoleAtkMarkerComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "660a1AQ+T1Ifacx3fxq2lIG", "NormalAtkComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NormalAtkComp = exports('NormalAtkComp', (_dec = ccclass('NormalAtkComp'), _dec2 = ecs.register('NormalAtkComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(NormalAtkComp, _ecs$Comp);
        function NormalAtkComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //攻击目标
          _this._pursueEntity = null;
          //冷却时间
          _this.coolTime = 5;
          //当前时间
          _this.curTime = 0;
          return _this;
        }
        var _proto = NormalAtkComp.prototype;
        _proto.reset = function reset() {};
        _createClass(NormalAtkComp, [{
          key: "pursueEntity",
          get: function get() {
            return this._pursueEntity;
          },
          set: function set(value) {
            this._pursueEntity = value;
          }
        }]);
        return NormalAtkComp;
      }(ecs.Comp)) || _class) || _class));

      /**普通攻击系统 */
      var NormalAtkSystem = exports('NormalAtkSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(NormalAtkSystem, _ecs$ComblockSystem);
        function NormalAtkSystem() {
          return _ecs$ComblockSystem.apply(this, arguments) || this;
        }
        var _proto2 = NormalAtkSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(NormalAtkComp);
        };
        _proto2.update = function update(e) {
          var normalAtkComp = e.get(NormalAtkComp);
          var role = e.get(MasterComp).master;
          var atkEntity = BattleUtil.getNearestEnemy(role);
          if (atkEntity && atkEntity.get(EnabledComp)) {
            var pos = role.get(PositionComp).getPosition(true);
            //计算我和敌人的距离
            var pursuePos = atkEntity.get(PositionComp).getPosition();
            normalAtkComp.curTime -= this.dt;
            if (normalAtkComp.curTime <= 0) {
              normalAtkComp.curTime = normalAtkComp.coolTime;
              var distance = pos.subtract(pursuePos).length();
              var detector = role.get(AtkDetectorComp);
              if (distance <= detector.attackRadius) {
                atkEntity.get(HpComp).addHp({
                  isCrit: false,
                  value: -100,
                  isShow: true
                });
              }
              role.get(SkeletonViewComp).playAnim(RoleAnimType.atk);
              role.add(RestrictMoveComp).coolTime = 3;
              role.add(RoleAtkMarkerComp);
            }
            return;
          }

          //要么没有目标,要么目标脱离攻击范围
          e.get(StateMachineComp).changeState(RoleStateMachineType.Move);
        };
        return NormalAtkSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NotOutBoundsComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './MapModelComp.ts', './PositionComp.ts', './SpeedComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, MapModelComp, PositionComp, SpeedComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      SpeedComp = module.SpeedComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "08599X97sBBH7aPmfBsBX0J", "NotOutBoundsComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 不出边界组件
       */
      var NotOutBoundsComp = exports('NotOutBoundsComp', (_dec = ccclass('NotOutBoundsComp'), _dec2 = ecs.register('NotOutBoundsComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(NotOutBoundsComp, _ecs$Comp);
        function NotOutBoundsComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = NotOutBoundsComp.prototype;
        _proto.reset = function reset() {};
        return NotOutBoundsComp;
      }(ecs.Comp)) || _class) || _class));

      /**移动系统 */
      var NotOutBoundsSystem = exports('NotOutBoundsSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(NotOutBoundsSystem, _ecs$ComblockSystem);
        var _proto2 = NotOutBoundsSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(NotOutBoundsComp, SpeedComp);
        };
        function NotOutBoundsSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          //出了边界就不移动
          var comp = e.get(PositionComp);
          var mapModel = app.manager.battle.mapEntity.get(MapModelComp);
          var pos = comp.getPosition();
          if (pos.x < 0) {
            pos.x = 0;
          } else if (pos.x > mapModel.width) {
            pos.x = mapModel.width;
          }
          if (pos.y < 0) {
            pos.y = 0;
          } else if (pos.y > mapModel.height) {
            pos.y = mapModel.height;
          }
        };
        _proto2.exit = function exit(e) {};
        return NotOutBoundsSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NPCInteractionMenuComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleController.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, _extends, cclegacy, BattleController, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8ae72vZ355GgZamss84ml7N", "NPCInteractionMenuComp", undefined);
      /**
       * 玩家功能
       */
      var NPCInteractionMenuComp = exports('NPCInteractionMenuComp', (_dec = ecs.register('NPCInteractionMenuComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(NPCInteractionMenuComp, _ecs$Comp);
        function NPCInteractionMenuComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //对话数据
          _this.data = {
            id: 0,
            interaction: [],
            weight: 99999
          };
          //是否刷新
          _this.isRefresh = false;
          return _this;
        }
        var _proto = NPCInteractionMenuComp.prototype;
        /**权重是小的优先 */
        _proto.addInteraction = function addInteraction(interactionData) {
          if (!interactionData) return; // 防止传入空数据

          var shouldUpdate = !this.data || this.data.weight > interactionData.weight || this.data.id === interactionData.id;
          if (shouldUpdate) {
            this.isRefresh = !this.data || this.data.id !== interactionData.id;
            this.data = _extends({}, interactionData); // 创建新对象，避免引用问题
          }
        }

        /**删除对话 */;
        _proto.removeChat = function removeChat(id) {
          if (this.data && this.data.id === id) {
            this.isRefresh = true;
            this.data = {
              id: 0,
              interaction: [],
              weight: 99999
            };
          }
        };
        _proto.reset = function reset() {
          this.data = {
            id: 0,
            interaction: [],
            weight: 99999
          };
          this.isRefresh = false;
        };
        return NPCInteractionMenuComp;
      }(ecs.Comp)) || _class));
      var NPCInteractionMenuSystem = exports('NPCInteractionMenuSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(NPCInteractionMenuSystem, _ecs$ComblockSystem);
        var _proto2 = NPCInteractionMenuSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(NPCInteractionMenuComp);
        };
        function NPCInteractionMenuSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(NPCInteractionMenuComp);
          if (comp.isRefresh) {
            //TODO:这里添加交互功能需要判断是否解锁
            BattleController.inst.addNPCInteractionMenu(comp.data.interaction);
            comp.isRefresh = false; // 重置刷新标志
          }
        };

        return NPCInteractionMenuSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerDeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DeathComp.ts', './ECS.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, DeathComp, ecs, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DeathComp = module.DeathComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c4c5dP8hC9GTajAzL+hvBOC", "PlayerDeathComp", undefined);

      /**
       * 玩家死亡
       */
      var PlayerDeathComp = exports('PlayerDeathComp', (_dec = ecs.register('PlayerDeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PlayerDeathComp, _ecs$Comp);
        function PlayerDeathComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = PlayerDeathComp.prototype;
        _proto.reset = function reset() {};
        return PlayerDeathComp;
      }(ecs.Comp)) || _class));

      /**死亡系统 */
      var PlaayerDeathSystem = exports('PlaayerDeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(PlaayerDeathSystem, _ecs$ComblockSystem);
        var _proto2 = PlaayerDeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PlayerDeathComp, DeathComp);
        };
        function PlaayerDeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          app.manager.ui.showToast('玩家死亡');
        };
        _proto2.exit = function exit(e) {};
        return PlaayerDeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerShowComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './CameraFollowComp.ts', './PositionComp.ts', './UnitComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, CameraFollowComp, PositionComp, UnitComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CameraFollowComp = module.CameraFollowComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4acb7Mx4sdL9556vBN7nydV", "PlayerShowComp", undefined);

      /**
       * 角色出场组件
       */
      var PlayerShowComp = exports('PlayerShowComp', (_dec = ecs.register('PlayerShowComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PlayerShowComp, _ecs$Comp);
        function PlayerShowComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //起点
          _this.startPos = void 0;
          return _this;
        }
        var _proto = PlayerShowComp.prototype;
        _proto.reset = function reset() {};
        return PlayerShowComp;
      }(ecs.Comp)) || _class));
      var PlayerShowSystem = exports('PlayerShowSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(PlayerShowSystem, _ecs$ComblockSystem);
        var _proto2 = PlayerShowSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PlayerShowComp);
        };
        function PlayerShowSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var player = app.manager.battle.playerEntity;
          player.get(PositionComp).setPosition(e.get(PlayerShowComp).startPos, true);
          app.manager.battle.mapEntity.get(CameraFollowComp).followEty = player;
          if (player.get(UnitComp).unit) {
            player.get(UnitComp).unit.setPosition(e.get(PlayerShowComp).startPos);
          }
          e.remove(PlayerShowComp);
        };
        return PlayerShowSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PositionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './UnitComp.ts', './DirectionComp.ts', './IsWeaponComp.ts', './MasterComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, ecs, UnitComp, DirectionComp, IsWeaponComp, MasterComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      IsWeaponComp = module.IsWeaponComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ae091iCAtlBt5xfAGWiVCV2", "PositionComp", undefined);

      /**
       * 位置
       */
      var PositionComp = exports('PositionComp', (_dec = ecs.register('PositionComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PositionComp, _ecs$Comp);
        function PositionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.position = new Vec3();
          //身体角度
          _this.bodyAngle = 0;
          return _this;
        }
        var _proto = PositionComp.prototype;
        _proto.reset = function reset() {
          this.position.set(0, 0, 0);
        }

        /**
         * 设置实体的位置
         * @param x - x坐标或Vec3位置向量
         * @param y - y坐标或是否刷新标志
         * @param isRefresh - 是否刷新单位节点位置
         */;
        _proto.setPosition = function setPosition(xOrPos, yOrIsRefresh, isRefresh) {
          // 处理传入数字坐标的情况
          if (typeof xOrPos === 'number' && typeof yOrIsRefresh === 'number') {
            var _isRefresh;
            this.position.set(xOrPos, yOrIsRefresh, 0);
            isRefresh = (_isRefresh = isRefresh) != null ? _isRefresh : false;
          }
          // 处理传入Vec3向量的情况
          else if (xOrPos instanceof Vec3) {
            var _ref;
            this.position.set(xOrPos);
            isRefresh = (_ref = yOrIsRefresh) != null ? _ref : false;
          }
          // 处理无效参数的情况
          else {
            throw new Error('Invalid arguments for setPosition');
          }

          // 如果需要刷新且单位节点存在，则更新单位节点的位置
          var unitNode = this.ent.get(UnitComp).unit;
          if (unitNode && isRefresh) {
            unitNode.setPosition(this.position);
          }
        }

        /**
         * 获取实体位置
         * @param clone 是否克隆位置对象
         * @param target 目标向量，用于存储克隆结果
         * @returns 实体位置的Vec3对象
         */;
        _proto.getPosition = function getPosition(clone, target) {
          if (clone === void 0) {
            clone = false;
          }
          if (clone) {
            // 如果需要克隆，则返回新的Vec3对象
            return target ? target.set(this.position) : new Vec3(this.position);
          } else {
            // 如果不需要克隆，则直接返回原始位置对象
            return this.position;
          }
        };
        return PositionComp;
      }(ecs.Comp)) || _class));

      /**位置系统 */
      var PositionSystem = exports('PositionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(PositionSystem, _ecs$ComblockSystem);
        var _proto2 = PositionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PositionComp, UnitComp);
        };
        function PositionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var unitNode = e.get(UnitComp).unit;
          if (unitNode && unitNode.node) {
            var _pos = e.get(PositionComp).getPosition();
            var dir = e.get(DirectionComp).direction;
            unitNode.setPosition(_pos);
            unitNode.setDirection(dir);
            // e.get(RoleViewComp) && (e.get(RoleViewComp).direction = e.get(PositionComp).bodyAngle);
          } else {
            return;
          }
        };
        _proto2.exit = function exit(e) {};
        return PositionSystem;
      }(ecs.ComblockSystem));

      /**武器位置系统 */
      var WeaponPositionSystem = exports('WeaponPositionSystem', /*#__PURE__*/function (_ecs$ComblockSystem2) {
        _inheritsLoose(WeaponPositionSystem, _ecs$ComblockSystem2);
        var _proto3 = WeaponPositionSystem.prototype;
        _proto3.filter = function filter() {
          return ecs.allOf(PositionComp, IsWeaponComp);
        };
        function WeaponPositionSystem() {
          return _ecs$ComblockSystem2.call(this) || this;
        }
        _proto3.update = function update(e) {
          var master = e.get(MasterComp).master;
          if (master) {
            var _pos2 = master.get(PositionComp).getPosition();
            e.get(PositionComp).setPosition(_pos2);
          }
        };
        _proto3.exit = function exit(e) {};
        return WeaponPositionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrecisionMsComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleModelComp.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, RoleModelComp, AttributeType, CorrectionSourceType, CorrectionType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      AttributeType = module.AttributeType;
      CorrectionSourceType = module.CorrectionSourceType;
      CorrectionType = module.CorrectionType;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "09bacrG7r1IfabDJ3odIlJZ", "PrecisionMsComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落物品组件
       */
      var PrecisionMsComp = exports('PrecisionMsComp', (_dec = ccclass('PrecisionMsComp'), _dec2 = ecs.register('PrecisionMsComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PrecisionMsComp, _ecs$Comp);
        function PrecisionMsComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.correctionAttributeData = {
            source: CorrectionSourceType.EQUIP,
            value: 0.5,
            type: CorrectionType.MODIFIER
          };
          return _this;
        }
        var _proto = PrecisionMsComp.prototype;
        _proto.reset = function reset() {};
        return PrecisionMsComp;
      }(ecs.Comp)) || _class) || _class));

      /**掉落物品组件系统 */
      var PrecisionMsSystem = exports('PrecisionMsSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(PrecisionMsSystem, _ref);
        var _proto2 = PrecisionMsSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PrecisionMsComp);
        };
        function PrecisionMsSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.get(RoleModelComp).attributes.addCorrection(AttributeType.crit, e.get(PrecisionMsComp).correctionAttributeData);
        };
        _proto2.entityRemove = function entityRemove(e) {
          e.get(RoleModelComp).attributes.removeCorrection(AttributeType.crit, e.get(PrecisionMsComp).correctionAttributeData);
        };
        return PrecisionMsSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PursueComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './AtkDetectorComp.ts', './DirectionComp.ts', './EnabledComp.ts', './PositionComp.ts', './StateMachineComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, RoleStateMachineType, AtkDetectorComp, DirectionComp, EnabledComp, PositionComp, StateMachineComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleStateMachineType = module.RoleStateMachineType;
    }, function (module) {
      AtkDetectorComp = module.AtkDetectorComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "237aey/LNVIcry44GaAjlc/", "PursueComp", undefined);

      /**
       * 追击
       */
      var PursueComp = exports('PursueComp', (_dec = ecs.register('PursueComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PursueComp, _ecs$Comp);
        function PursueComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.pursueEntity = null;
          return _this;
        }
        var _proto = PursueComp.prototype;
        _proto.reset = function reset() {};
        return PursueComp;
      }(ecs.Comp)) || _class));

      /**追击系统 */
      var PursueSystem = exports('PursueSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(PursueSystem, _ecs$ComblockSystem);
        var _proto2 = PursueSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PursueComp);
        };
        function PursueSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var pursueEntity = e.get(PursueComp).pursueEntity;
          if (pursueEntity && pursueEntity.get(EnabledComp)) {
            var pursuePos = pursueEntity.get(PositionComp).getPosition(true);
            var pos = e.get(PositionComp).getPosition();
            //计算我和敌人的距离
            var distance = pos.clone().subtract(pursuePos).length();
            var detector = e.get(AtkDetectorComp);
            if (distance <= detector.attackRadius) {
              //进入攻击范围
              e.get(StateMachineComp).changeState(RoleStateMachineType.Atk);
              e.get(StateMachineComp).nextData = pursueEntity;
              e.remove(PursueComp);
              // e.get(FindPathComp).endPos = null;
              return;
            } else {
              //方向，单位向量
              var dir = pursuePos.subtract(e.get(PositionComp).getPosition()).normalize();
              e.get(DirectionComp).setDirection({
                dir: dir,
                weight: 1
              });
              // e.get(FindPathComp).endPos = pursuePos;
            }
          } else {
            // e.get(FindPathComp).endPos = null;
            e.get(StateMachineComp).changeState(RoleStateMachineType.Move);
          }
        };
        _proto2.exit = function exit(e) {};
        return PursueSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PursueEnemyMoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillMoveComp.ts', './ECS.ts', './DirectionComp.ts', './PositionComp.ts', './BattleUtil.ts', './FactionTypeComp.ts', './LinearSkillMoveComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SkillMoveComp, ecs, DirectionComp, PositionComp, BattleUtil, FactionTypeComp, LinearSkillMoveComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SkillMoveComp = module.SkillMoveComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      LinearSkillMoveComp = module.LinearSkillMoveComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "aa633TpPpJGfIOYH0vTI3Jd", "PursueEnemyMoveComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      /**
       * 追踪敌人
       */
      var PursueEnemyMoveComp = exports('PursueEnemyMoveComp', (_dec = ccclass('PursueEnemyMoveComp'), _dec2 = ecs.register('PursueEnemyMoveComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_SkillMoveComp) {
        _inheritsLoose(PursueEnemyMoveComp, _SkillMoveComp);
        function PursueEnemyMoveComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SkillMoveComp.call.apply(_SkillMoveComp, [this].concat(args)) || this;
          /**追踪目标 */
          _this.pursueEntity = void 0;
          return _this;
        }
        var _proto = PursueEnemyMoveComp.prototype;
        _proto.reset = function reset() {};
        return PursueEnemyMoveComp;
      }(SkillMoveComp)) || _class) || _class));

      /**移动系统 */
      var PursueEnemyMoveSystem = exports('PursueEnemyMoveSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(PursueEnemyMoveSystem, _ref);
        var _proto2 = PursueEnemyMoveSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PursueEnemyMoveComp);
        };
        function PursueEnemyMoveSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var enetity = BattleUtil.getNearestEnemyByPos(e.get(PositionComp).getPosition(), e.get(FactionTypeComp).faction);
          if (enetity) {
            e.get(PursueEnemyMoveComp).pursueEntity = enetity;
          } else {
            e.remove(PursueEnemyMoveComp);
            e.add(LinearSkillMoveComp);
          }
        };
        _proto2.update = function update(e) {
          var pursueEntity = e.get(PursueEnemyMoveComp).pursueEntity;
          if (pursueEntity) {
            var pursuePos = pursueEntity.get(PositionComp).getPosition(true);
            //方向，单位向量
            var dir = pursuePos.subtract(e.get(PositionComp).getPosition()).normalize();
            e.get(DirectionComp).setDirection({
              dir: dir,
              weight: 1
            });
          }
        };
        _proto2.exit = function exit(e) {};
        return PursueEnemyMoveSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PursuePlayerMoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './PositionComp.ts', './DirectionComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, PositionComp, DirectionComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c17abW1imxH8INrmWeQRTtW", "PursuePlayerMoveComp", undefined);

      /**
       * 追踪玩家移动组件
       */
      var PursuePlayerMoveComp = exports('PursuePlayerMoveComp', (_dec = ecs.register('PursuePlayerMoveComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(PursuePlayerMoveComp, _ecs$Comp);
        function PursuePlayerMoveComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = PursuePlayerMoveComp.prototype;
        _proto.reset = function reset() {};
        return PursuePlayerMoveComp;
      }(ecs.Comp)) || _class));

      /**追击系统 */
      var PursuePlayerMoveSystem = exports('PursuePlayerMoveSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(PursuePlayerMoveSystem, _ecs$ComblockSystem);
        var _proto2 = PursuePlayerMoveSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(PursuePlayerMoveComp);
        };
        function PursuePlayerMoveSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var pursuePos = app.manager.battle.playerEntity.get(PositionComp).getPosition(true);
          var pos = e.get(PositionComp).getPosition(true);
          var dir = pursuePos.subtract(pos).normalize();
          e.get(DirectionComp).setDirection({
            dir: dir,
            weight: 1
          });
        };
        _proto2.exit = function exit(e) {};
        return PursuePlayerMoveSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RandomlyGenerateMonsterComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BattleUtil.ts', './MapModelComp.ts', './MonsterFactoryConfig.ts', './CreateRoleComp.ts', './TaskConfig.ts', './TaskModelComp.ts', './app.ts', './ConstType.ts', './PositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, ecs, BattleUtil, MapModelComp, DB_MonsterFactoryConfig, CreateRoleComp, DB_TaskConfig, TaskModelComp, app, FactionType, PositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      DB_MonsterFactoryConfig = module.DB_MonsterFactoryConfig;
    }, function (module) {
      CreateRoleComp = module.CreateRoleComp;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      FactionType = module.FactionType;
    }, function (module) {
      PositionComp = module.PositionComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "1fdabgF+YdNUaM4HgDxaZaE", "RandomlyGenerateMonsterComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**随机生成怪物 */
      var RandomlyGenerateMonsterComp = exports('RandomlyGenerateMonsterComp', (_dec = ccclass('RandomlyGenerateMonsterComp'), _dec2 = ecs.register('RandomlyGenerateMonsterComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RandomlyGenerateMonsterComp, _ecs$Comp);
        function RandomlyGenerateMonsterComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**敌人生成时间间隔 */
          _this.enemySpawnInterval = 1;
          /**敌人当前生成时间 */
          _this.currentEnemySpawnTime = 0;
          /**敌人最大存在数量 */
          _this.maxEnemyCount = 30;
          return _this;
        }
        var _proto = RandomlyGenerateMonsterComp.prototype;
        _proto.reset = function reset() {
          this.currentEnemySpawnTime = 0;
        };
        return RandomlyGenerateMonsterComp;
      }(ecs.Comp)) || _class) || _class));
      var RandomlyGenerateMonsterSystem = exports('RandomlyGenerateMonsterSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RandomlyGenerateMonsterSystem, _ecs$ComblockSystem);
        var _proto2 = RandomlyGenerateMonsterSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RandomlyGenerateMonsterComp);
        };
        function RandomlyGenerateMonsterSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(RandomlyGenerateMonsterComp);
          var mapComp = app.manager.battle.mapEntity.get(MapModelComp);
          comp.currentEnemySpawnTime += this.dt;
          var createRoleComp = app.manager.battle.controlEntity.get(CreateRoleComp);
          if (comp.currentEnemySpawnTime >= comp.enemySpawnInterval && createRoleComp.getAlreadyAddRoleLength(FactionType.ENEMY) < comp.maxEnemyCount) {
            var monsterId = this.getRandomMonsterId(e);
            var pos = this.getRandomPositionAroundPlayer(mapComp);
            createRoleComp.addRoleData({
              roleId: monsterId,
              pos: pos,
              faction: FactionType.ENEMY
            });
            comp.currentEnemySpawnTime = 0;
          }
        };
        _proto2.getRandomMonsterId = function getRandomMonsterId(e) {
          var taskConfig = DB_TaskConfig[e.get(TaskModelComp).taskId];
          var monsterFactoryConfig = DB_MonsterFactoryConfig[taskConfig.data.monsterFactory];
          var monster = monsterFactoryConfig.monster;
          var data = BattleUtil.randomSelectWithProbability(monster);
          return data.id;
        }

        // 在玩家半径处随机取一点，这一点要在地图中
        ;

        _proto2.getRandomPositionAroundPlayer = function getRandomPositionAroundPlayer(mapComp) {
          var radius = 1100 + Math.random() * 400;
          var player = app.manager.battle.playerEntity;
          var playerPos = player.get(PositionComp).getPosition(true);
          var x, y;
          do {
            var angle = Math.random() * Math.PI * 2;
            var r = Math.sqrt(Math.random()) * radius;
            x = playerPos.x + r * Math.cos(angle);
            y = playerPos.y + r * Math.sin(angle);
          } while (x < 0 || x > mapComp.width || y < 0 || y > mapComp.height);
          return v3(x, y);
        };
        return RandomlyGenerateMonsterSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RestrictMoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './DirectionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, ecs, DirectionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "df480G+UJZJHLxCvmLQz4wv", "RestrictMoveComp", undefined);

      /**
       * 禁足组件
       * 用于禁止角色移动
       */
      var RestrictMoveComp = exports('RestrictMoveComp', (_dec = ecs.register('RestrictMoveComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RestrictMoveComp, _ecs$Comp);
        function RestrictMoveComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //冷却时间
          _this.coolTime = 5;
          //当前时间
          _this.curTime = 0;
          return _this;
        }
        var _proto = RestrictMoveComp.prototype;
        _proto.reset = function reset() {};
        return RestrictMoveComp;
      }(ecs.Comp)) || _class));

      /**禁足系统 */
      var RestrictMoveSystem = exports('RestrictMoveSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RestrictMoveSystem, _ecs$ComblockSystem);
        var _proto2 = RestrictMoveSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RestrictMoveComp);
        };
        function RestrictMoveSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(RestrictMoveComp);
          if (comp.curTime < comp.coolTime) {
            e.get(DirectionComp).setDirection({
              dir: new Vec3(0, 0, 0),
              weight: 100
            });
            comp.curTime += this.dt;
          } else {
            e.remove(RestrictMoveComp);
          }
        };
        return RestrictMoveSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleAfterDeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AfterDeathMarkerComp.ts', './ECS.ts', './ConstType.ts', './SkeletonViewComp.ts', './StateMachineComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AfterDeathMarkerComp, ecs, RoleAnimType, RoleStateMachineType, SkeletonViewComp, StateMachineComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleAnimType = module.RoleAnimType;
      RoleStateMachineType = module.RoleStateMachineType;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ea667E1XcZFYJ8ZgD7mWYLz", "RoleAfterDeathComp", undefined);

      /**
       * 角色死亡后
       * 用来死亡逻辑
       */
      var RoleAfterDeathComp = exports('RoleAfterDeathComp', (_dec = ecs.register('RoleAfterDeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleAfterDeathComp, _ecs$Comp);
        function RoleAfterDeathComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //当前时间
          _this.curTime = 5;
          return _this;
        }
        var _proto = RoleAfterDeathComp.prototype;
        _proto.reset = function reset() {};
        return RoleAfterDeathComp;
      }(ecs.Comp)) || _class));

      /**死亡后系统 */
      var RoleAfterDeathSystem = exports('RoleAfterDeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleAfterDeathSystem, _ecs$ComblockSystem);
        var _proto2 = RoleAfterDeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleAfterDeathComp, AfterDeathMarkerComp);
        };
        function RoleAfterDeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //死亡逻辑
          e.get(SkeletonViewComp).playAnim(RoleAnimType.dead);
          e.get(StateMachineComp).changeState(RoleStateMachineType.Dead);
          e.get(AfterDeathMarkerComp).curTime = 5;
        };
        return RoleAfterDeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleAtkMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './StateMachineComp.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, StateMachineComp, RoleStateMachineType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }, function (module) {
      RoleStateMachineType = module.RoleStateMachineType;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "03bf2g9vyRIBqx8lcV4SHQx", "RoleAtkMarkerComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoleAtkMarkerComp = exports('RoleAtkMarkerComp', (_dec = ccclass('RoleAtkMarkerComp'), _dec2 = ecs.register('RoleAtkMarkerComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleAtkMarkerComp, _ecs$Comp);
        function RoleAtkMarkerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //当前时间
          _this.curTime = 1;
          return _this;
        }
        var _proto = RoleAtkMarkerComp.prototype;
        _proto.reset = function reset() {
          this.curTime = 1;
        };
        return RoleAtkMarkerComp;
      }(ecs.Comp)) || _class) || _class));

      /**普通攻击系统 */
      var RoleAtkMarkerSystem = exports('RoleAtkMarkerSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(RoleAtkMarkerSystem, _ref);
        function RoleAtkMarkerSystem() {
          return _ref.apply(this, arguments) || this;
        }
        var _proto2 = RoleAtkMarkerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleAtkMarkerComp);
        };
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.get(RoleAtkMarkerComp);
          comp.curTime = 1;
        };
        _proto2.update = function update(e) {
          var comp = e.get(RoleAtkMarkerComp);
          if (comp.curTime <= 0) {
            e.get(StateMachineComp).changeState(RoleStateMachineType.Move);
            e.remove(RoleAtkMarkerComp);
          } else {
            comp.curTime -= this.dt;
          }
        };
        return RoleAtkMarkerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleAutoCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './WeaponAutoCastComp.ts', './WeaponDepotComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponAutoCastComp, WeaponDepotComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponAutoCastComp = module.WeaponAutoCastComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "91d47UmLnhFaI+f+NthMAZt", "RoleAutoCastComp", undefined);

      /**
       * 角色自动施法组件
       * 就是让角色下面的武器自动开火
       */
      var RoleAutoCastComp = exports('RoleAutoCastComp', (_dec = ecs.register('RoleAutoCastComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleAutoCastComp, _ecs$Comp);
        function RoleAutoCastComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.atkEntity = null;
          return _this;
        }
        var _proto = RoleAutoCastComp.prototype;
        _proto.reset = function reset() {};
        return RoleAutoCastComp;
      }(ecs.Comp)) || _class));

      /**自动施法系统 */
      var RoleAutoCastSystem = exports('RoleAutoCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleAutoCastSystem, _ecs$ComblockSystem);
        var _proto2 = RoleAutoCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleAutoCastComp);
        };
        function RoleAutoCastSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(WeaponDepotComp);
          var allWeapon = comp.weaponArr;
          for (var i = 0; i < allWeapon.length; i++) {
            var weaponEntity = allWeapon[i];
            if (!weaponEntity.get(WeaponAutoCastComp)) {
              weaponEntity.add(WeaponAutoCastComp);
            }
          }
        };
        return RoleAutoCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './WeaponCastComp.ts', './WeaponDepotComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponCastComp, WeaponDepotComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponCastComp = module.WeaponCastComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4901ctk3BBJF7V/nq2WXbYG", "RoleCastComp", undefined);

      /**
       * 角色 开火组件
       * 就是让角色下面的武器开火
       */
      var RoleCastComp = exports('RoleCastComp', (_dec = ecs.register('RoleCastComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleCastComp, _ecs$Comp);
        function RoleCastComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = RoleCastComp.prototype;
        _proto.reset = function reset() {};
        return RoleCastComp;
      }(ecs.Comp)) || _class));

      /**武器开火系统 */
      var RoleCastSystem = exports('RoleCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleCastSystem, _ecs$ComblockSystem);
        var _proto2 = RoleCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleCastComp);
        };
        function RoleCastSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(WeaponDepotComp);
          var allWeapon = comp.weaponArr;
          for (var i = 0; i < allWeapon.length; i++) {
            var weaponEntity = allWeapon[i];
            if (!weaponEntity.get(WeaponCastComp)) {
              weaponEntity.add(WeaponCastComp);
            }
          }
        };
        return RoleCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './CollisionComp.ts', './DamageFlyTextComp.ts', './DirectionComp.ts', './EnabledComp.ts', './FactionTypeComp.ts', './HpComp.ts', './MoveComp.ts', './UnitComp.ts', './PositionComp.ts', './RoleModelComp.ts', './RoleViewLoadComp.ts', './SpeedComp.ts', './StateMachineComp.ts', './WeaponDepotComp.ts', './RoleAfterDeathComp.ts', './MpComp.ts', './IsRoleComp.ts', './RoleMapExtraCompComp.ts', './RoleTaskExtraCompComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, CollisionComp, DamageFlyTextComp, DirectionComp, EnabledComp, FactionTypeComp, HpComp, MoveComp, UnitComp, PositionComp, RoleModelComp, RoleViewLoadComp, SpeedComp, StateMachineComp, WeaponDepotComp, RoleAfterDeathComp, MpComp, IsRoleComp, RoleMapExtraCompComp, RoleTaskExtraCompComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      DamageFlyTextComp = module.DamageFlyTextComp;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      MoveComp = module.MoveComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      RoleViewLoadComp = module.RoleViewLoadComp;
    }, function (module) {
      SpeedComp = module.SpeedComp;
    }, function (module) {
      StateMachineComp = module.StateMachineComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      RoleAfterDeathComp = module.RoleAfterDeathComp;
    }, function (module) {
      MpComp = module.MpComp;
    }, function (module) {
      IsRoleComp = module.IsRoleComp;
    }, function (module) {
      RoleMapExtraCompComp = module.RoleMapExtraCompComp;
    }, function (module) {
      RoleTaskExtraCompComp = module.RoleTaskExtraCompComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "639e48l761HDrVe/UAwN7GV", "RoleEntity", undefined);

      /** 角色实体 */
      var RoleEntity = exports('RoleEntity', (_dec = ecs.register('RoleEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(RoleEntity, _BaseEntity);
        function RoleEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = RoleEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(EnabledComp, RoleModelComp, HpComp, MpComp, MoveComp, PositionComp, CollisionComp, FactionTypeComp, SpeedComp, DamageFlyTextComp, StateMachineComp, UnitComp, WeaponDepotComp, RoleViewLoadComp, DirectionComp, RoleAfterDeathComp, IsRoleComp, RoleMapExtraCompComp, RoleTaskExtraCompComp);
        };
        return RoleEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleMapExtraCompComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CompConfig.ts', './ECS.ts', './MapModelComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_CompConfig, ecs, MapModelComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "40d34KZqpVJjJw3QZWV2wD5", "RoleMapExtraCompComp", undefined);

      /**
       * 地图对角色的额外组件
       */
      var RoleMapExtraCompComp = exports('RoleMapExtraCompComp', (_dec = ecs.register('RoleMapExtraCompComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleMapExtraCompComp, _ecs$Comp);
        function RoleMapExtraCompComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.extraComps = [];
          return _this;
        }
        var _proto = RoleMapExtraCompComp.prototype;
        _proto.reset = function reset() {};
        return RoleMapExtraCompComp;
      }(ecs.Comp)) || _class));

      /**地图额外组件系统 */
      var RoleMapExtraCompSystem = exports('RoleMapExtraCompSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(RoleMapExtraCompSystem, _ref);
        var _proto2 = RoleMapExtraCompSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleMapExtraCompComp);
        };
        function RoleMapExtraCompSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          this.removeExtraComp(e);
          this.addExtraComp(e);
        };
        _proto2.update = function update(e) {
          var mapModel = app.manager.battle.mapEntity.get(MapModelComp);
          if (mapModel.isNew) {
            this.removeExtraComp(e);
            this.addExtraComp(e);
          }
        };
        _proto2.addExtraComp = function addExtraComp(e) {
          var mapModel = app.manager.battle.mapEntity.get(MapModelComp);
          var roleExtraComp = mapModel.roleExtraComp;
          if (roleExtraComp) {
            for (var i = 0; i < roleExtraComp.length; i++) {
              var _DB_CompConfig$roleEx;
              var compNme = (_DB_CompConfig$roleEx = DB_CompConfig[roleExtraComp[i]]) == null ? void 0 : _DB_CompConfig$roleEx.className;
              if (compNme) {
                var ctor = js.getClassByName(compNme);
                if (!e.get(ctor)) {
                  e.add(ctor);
                  e.get(RoleMapExtraCompComp).extraComps.push(ctor);
                }
              }
            }
          }
        };
        _proto2.removeExtraComp = function removeExtraComp(e) {
          var comp = e.get(RoleMapExtraCompComp);
          if (comp) {
            for (var i = 0; i < comp.extraComps.length; i++) {
              var ctor = comp.extraComps[i];
              if (e.get(ctor)) {
                e.remove(ctor);
              }
            }
            comp.extraComps.length = 0;
          }
        };
        return RoleMapExtraCompSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CompConfig.ts', './RoleConfig.ts', './ECS.ts', './RoleNumericMap.ts', './ConstType.ts', './HpComp.ts', './TriggerNPCInteractionMenuComp.ts', './BattleUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_CompConfig, DB_RoleConfig, ecs, RoleNumericMap, AttributeType, HpComp, TriggerNPCInteractionMenuComp, BattleUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleNumericMap = module.RoleNumericMap;
    }, function (module) {
      AttributeType = module.AttributeType;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      TriggerNPCInteractionMenuComp = module.TriggerNPCInteractionMenuComp;
    }, function (module) {
      BattleUtil = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ef4c4NzCHFHOaKxbVD1swbE", "RoleModelComp", undefined);

      /**
       * 角色数据
       */
      var RoleModelComp = exports('RoleModelComp', (_dec = ecs.register('RoleModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleModelComp, _ecs$Comp);
        function RoleModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /** 角色属性 */
          _this.attributes = null;
          /**角色id */
          _this.roleId = void 0;
          /**角色等级 */
          _this.lv = void 0;
          return _this;
        }
        var _proto = RoleModelComp.prototype;
        /**
         * 初始化角色数据
         * @param roleId 角色id
         * @param lv 角色等级
         */
        _proto.init = function init(data) {
          this.roleId = data.roleId;
          this.lv = data.lv;
          this.attributes = new RoleNumericMap();
          this.initAttributes(data.lv, data.difficulty);
          var config = DB_RoleConfig[this.roleId];
          if (config.interaction.length) {
            this.ent.add(TriggerNPCInteractionMenuComp);
          }
          //角色额外功能
          if (config.comp) {
            for (var i = 0; i < config.comp.length; i++) {
              var func = config.comp[i];
              var compConfig = DB_CompConfig[func];
              var comp = new (js.getClassByName(compConfig.className))();
              this.ent.add(comp);
            }
          }
        }

        /**
         * 升级
         * @param lv 角色等级
         */;
        _proto.upgrade = function upgrade(lv) {
          this.lv = lv;
          this.initAttributes(lv, 1);
        }

        /**
         * 初始化角色属性
         * @param lv 角色等级
         */;
        _proto.initAttributes = function initAttributes(lv, difficulty) {
          this.attributes.init(BattleUtil.getRoleAttribute(this.roleId, lv, difficulty));
          this.ent.get(HpComp).hp = this.attributes.get(AttributeType.hp).value;
        }

        /**
         * 添加修正属性
         * @param type 属性类型
         * @param data 修正属性数据
         */;
        _proto.addCorrection = function addCorrection(type, data) {
          this.attributes.addCorrection(type, data);
          if (type == AttributeType.hp) {
            var hpData = {
              isCrit: false,
              isShow: false,
              value: data.value
            };
            this.ent.get(HpComp).addHp(hpData);
          }
        }

        /**
         * 获取角色属性
         * @param type AttributeType 属性类型
         * @returns number
         */;
        _proto.getAttribute = function getAttribute(type) {
          return this.attributes.get(type).value;
        }

        /**
         * 获取角色配置
         * @returns 角色配置
         */;
        _proto.getConfig = function getConfig() {
          return DB_RoleConfig[this.roleId];
        };
        _proto.update = function update() {
          this.attributes.update();
        };
        _proto.reset = function reset() {};
        return RoleModelComp;
      }(ecs.Comp)) || _class));
      var RoleModelSystem = exports('RoleModelSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleModelSystem, _ecs$ComblockSystem);
        var _proto2 = RoleModelSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleModelComp);
        };
        function RoleModelSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          e.get(RoleModelComp).update();
        };
        _proto2.exit = function exit(e) {};
        return RoleModelSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleNumeric.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConstType.ts'], function (exports) {
  var _createClass, cclegacy, CorrectionType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CorrectionType = module.CorrectionType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5565079T3JNp7JldpSO7spj", "RoleNumeric", undefined);
      var RoleNumeric = exports('RoleNumeric', /*#__PURE__*/function () {
        function RoleNumeric(type) {
          /** 属性类型 */
          this.type = null;
          /**基础 */
          this.base = 0;
          /**成长 */
          this.growth = [];
          /**修饰器 */
          this.modifier = [];
          /**固定 */
          this.fixed = null;
          /** 缓存的属性最大值 */
          this.cachedMaxValue = null;
          /** 缓存的属性真实值 */
          this.cachedValue = null;
          this.type = type;
        }
        var _proto = RoleNumeric.prototype;
        _proto.init = function init(value) {
          this.base = value;
        }

        /**属性真实值 */;
        _proto.addCorrection = function addCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            this.growth.push(data);
          } else if (data.type === CorrectionType.MODIFIER) {
            this.modifier.push(data);
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = data;
          }
        };
        _proto.removeCorrection = function removeCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            var index = this.growth.indexOf(data);
            if (index !== -1) {
              this.growth.splice(index, 1);
            }
          } else if (data.type === CorrectionType.MODIFIER) {
            var _index = this.modifier.indexOf(data);
            if (_index !== -1) {
              this.modifier.splice(_index, 1);
            }
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = null;
          }
        };
        _proto.update = function update() {
          this.cachedMaxValue = null;
          this.cachedValue = null;
        };
        _proto.reset = function reset() {
          this.update();
        };
        _createClass(RoleNumeric, [{
          key: "value",
          get: function get() {
            if (this.cachedValue === null) {
              var value = 0;
              if (this.fixed) {
                value = this.fixed.value;
              } else {
                value = this.maxValue;
                this.modifier.forEach(function (element) {
                  value += element.value;
                });
              }
              this.cachedValue = value;
            }
            return this.cachedValue;
          }

          /**属性最大值 */
        }, {
          key: "maxValue",
          get: function get() {
            if (this.cachedMaxValue === null) {
              var value = this.base;
              this.growth.forEach(function (element) {
                value += element.value;
              });
              this.cachedMaxValue = value;
            }
            return this.cachedMaxValue;
          }

          /**属性基础值 */
        }, {
          key: "baseValue",
          get: function get() {
            return this.base;
          }
        }]);
        return RoleNumeric;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleNumericMap.ts", ['cc', './RoleNumeric.ts'], function (exports) {
  var cclegacy, RoleNumeric;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      RoleNumeric = module.RoleNumeric;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e317eRM1yRMLbPql0r+/Pvt", "RoleNumericMap", undefined);

      /** 角色数值装饰器 */
      var RoleNumericDecorator = exports('RoleNumericDecorator', function RoleNumericDecorator() {
        /** 属性类型 */
        this.attribute = null;
        /** 属性数值 */
        this.value = 0;
      });

      /** 所有模块角色属性集合 */
      var RoleNumericMap = exports('RoleNumericMap', /*#__PURE__*/function () {
        function RoleNumericMap() {
          /** 角色属性 */
          this.attributes = new Map();
        }
        var _proto = RoleNumericMap.prototype;
        _proto.init = function init(data) {
          for (var key in data) {
            var dataKey = key;
            var value = data[dataKey];
            var rn = this.get(dataKey);
            rn.init(value);
          }
        }

        /** 获取角色属性 */;
        _proto.get = function get(type) {
          var attr = this.attributes.get(type);
          if (attr == null) {
            attr = new RoleNumeric(type);
            this.attributes.set(type, attr);
          }
          return attr;
        };
        _proto.addCorrection = function addCorrection(type, data) {
          var attr = this.get(type);
          attr.addCorrection(data);
        };
        _proto.removeCorrection = function removeCorrection(type, data) {
          var attr = this.get(type);
          attr.removeCorrection(data);
        };
        _proto.update = function update() {
          this.attributes.forEach(function (value) {
            value.update();
          });
        }

        /** 重置属性值为零 */;
        _proto.reset = function reset() {
          this.attributes.forEach(function (value) {
            value.reset();
          });
        };
        return RoleNumericMap;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleShowAnimation1Comp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleShowMarkerComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, RoleShowMarkerComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleShowMarkerComp = module.RoleShowMarkerComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a382481bbRPuaV9qBlYW/nM", "RoleShowAnimation1Comp", undefined);

      /**
       * 角色出现动画1，叉叉出现
       */
      var RoleShowAnimation1Comp = exports('RoleShowAnimation1Comp', (_dec = ecs.register('RoleShowAnimation1Comp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleShowAnimation1Comp, _ecs$Comp);
        function RoleShowAnimation1Comp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = RoleShowAnimation1Comp.prototype;
        _proto.reset = function reset() {};
        return RoleShowAnimation1Comp;
      }(ecs.Comp)) || _class));
      var MonsterFactorySystem = exports('MonsterFactorySystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(MonsterFactorySystem, _ecs$ComblockSystem);
        var _proto2 = MonsterFactorySystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleShowAnimation1Comp, RoleShowMarkerComp);
        };
        function MonsterFactorySystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.get(UnitComp).unit.node.active = true;
        };
        return MonsterFactorySystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleShowMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ea133B3PZ5HZ4h4uYiZC8TS", "RoleShowMarkerComp", undefined);

      /**
       * 角色出现标记
       */
      var RoleShowMarkerComp = exports('RoleShowMarkerComp', (_dec = ecs.register('RoleShowMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleShowMarkerComp, _ecs$Comp);
        function RoleShowMarkerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = RoleShowMarkerComp.prototype;
        _proto.reset = function reset() {};
        return RoleShowMarkerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleStateComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, RoleStateType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleStateType = module.RoleStateType;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4cec2ru5dpIg51KIhaOwBrm", "RoleStateComp", undefined);

      /**
       * 角色状态
       */
      var RoleStateComp = exports('RoleStateComp', (_dec = ecs.register('RoleStateComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleStateComp, _ecs$Comp);
        function RoleStateComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.state = RoleStateType.Idle;
          return _this;
        }
        var _proto = RoleStateComp.prototype;
        _proto.reset = function reset() {
          console.log('HpComp reset');
        };
        return RoleStateComp;
      }(ecs.Comp)) || _class));

      /**角色状态系统 */
      var RoleStateSystem = exports('RoleStateSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleStateSystem, _ecs$ComblockSystem);
        var _proto2 = RoleStateSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleStateComp);
        };
        function RoleStateSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {};
        _proto2.exit = function exit(e) {};
        return RoleStateSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleTaskExtraCompComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CompConfig.ts', './ECS.ts', './TaskModelComp.ts', './TaskConfig.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_CompConfig, ecs, TaskModelComp, DB_TaskConfig, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80619gOQlBFdJkW5vAKdHRE", "RoleTaskExtraCompComp", undefined);

      /**
       * 地图对角色的额外组件
       */
      var RoleTaskExtraCompComp = exports('RoleTaskExtraCompComp', (_dec = ecs.register('RoleTaskExtraCompComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleTaskExtraCompComp, _ecs$Comp);
        function RoleTaskExtraCompComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.extraComps = [];
          return _this;
        }
        var _proto = RoleTaskExtraCompComp.prototype;
        _proto.reset = function reset() {};
        return RoleTaskExtraCompComp;
      }(ecs.Comp)) || _class));

      /**任务额外组件系统 */
      var RoleTaskExtraCompSystem = exports('RoleTaskExtraCompSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(RoleTaskExtraCompSystem, _ref);
        var _proto2 = RoleTaskExtraCompSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleTaskExtraCompComp);
        };
        function RoleTaskExtraCompSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          this.removeExtraComp(e);
          this.addExtraComp(e);
        };
        _proto2.update = function update(e) {
          var taskEntity = app.manager.battle.taskEntity;
          if (taskEntity) {
            var taskModel = taskEntity.get(TaskModelComp);
            if (taskModel && taskModel.isNew) {
              this.removeExtraComp(e);
              this.addExtraComp(e);
            }
          }
        };
        _proto2.addExtraComp = function addExtraComp(e) {
          var taskEntity = app.manager.battle.taskEntity;
          if (taskEntity) {
            var taskModel = taskEntity.get(TaskModelComp);
            if (taskModel) {
              var _DB_TaskConfig$taskMo;
              var roleExtraComp = (_DB_TaskConfig$taskMo = DB_TaskConfig[taskModel.taskId]) == null ? void 0 : _DB_TaskConfig$taskMo.roleExtraComp;
              if (roleExtraComp) {
                for (var i = 0; i < roleExtraComp.length; i++) {
                  var compNme = DB_CompConfig[roleExtraComp[i]].className;
                  var ctor = js.getClassByName(compNme);
                  if (!e.get(ctor)) {
                    e.add(ctor);
                    e.get(RoleTaskExtraCompComp).extraComps.push(ctor);
                  }
                }
              }
            }
          }
        };
        _proto2.removeExtraComp = function removeExtraComp(e) {
          var comp = e.get(RoleTaskExtraCompComp);
          if (comp) {
            for (var i = 0; i < comp.extraComps.length; i++) {
              var ctor = comp.extraComps[i];
              if (e.get(ctor)) {
                e.remove(ctor);
              }
            }
            comp.extraComps.length = 0;
          }
        };
        return RoleTaskExtraCompSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleViewComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './FactionTypeComp.ts', './SkeletonViewComp.ts', './AtkDetectorComp.ts', './RoleModelComp.ts', './RoleConfig.ts', './CollisionComp.ts', './IsDropComp.ts', './BaseUnit.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v3, PhysicsSystem, ecs, FactionTypeComp, SkeletonViewComp, AtkDetectorComp, RoleModelComp, DB_RoleConfig, CollisionComp, IsDropComp, BaaseUnit;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }, function (module) {
      AtkDetectorComp = module.AtkDetectorComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      IsDropComp = module.IsDropComp;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c9c99fm1SVJQLXskE27udt7", "RoleViewComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 角色显示组件 */
      var RoleViewComp = exports('RoleViewComp', (_dec = ccclass('RoleViewComp'), _dec2 = ecs.register('RoleViewComp', false), _dec3 = property(SkeletonViewComp), _dec4 = property(AtkDetectorComp), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaaseUnit) {
        _inheritsLoose(RoleViewComp, _BaaseUnit);
        function RoleViewComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaaseUnit.call.apply(_BaaseUnit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "skeletonComp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detector", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RoleViewComp.prototype;
        _proto.onLoad = function onLoad() {
          this.group = this.ent.get(FactionTypeComp).group;
          var roleId = this.ent.get(RoleModelComp).roleId;
          var config = DB_RoleConfig[roleId];
          this.size.x = config.colliderSize[0];
          this.size.y = config.colliderSize[1];
          this.weight = config.agentWeight;
          this.maxRadius = Math.min(this.size.x, this.size.y) / 2;
          this.detector.pursueRadius = config.pursueRadius;
          this.detector.attackRadius = config.attackRadius;
          this.trigger = true;
          this.agent = true;
          _BaaseUnit.prototype.onLoad.call(this);
          this.addCommonComp();
        }

        /**设置方向 */;
        _proto.setDirection = function setDirection(dir) {
          //判断左右方向
          this.setScale(v3(dir.x > 0 ? 1 : -1, 1));
        }

        /**加入组件 */;
        _proto.addCommonComp = function addCommonComp() {}

        /**首次碰撞 */;
        _proto.onTriggerEnter = function onTriggerEnter(b) {
          var enemyEnt = b.object.getComponent(BaaseUnit).ent;
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET'] && !this.ent.get(IsDropComp) && !enemyEnt.get(IsDropComp)) {
            this.ent.get(CollisionComp).addCollision(enemyEnt);
          }
        }

        /**碰撞停留 */;
        _proto.onTriggerStay = function onTriggerStay(b) {
          var enemyEnt = b.object.getComponent(BaaseUnit).ent;
          if (b.group != PhysicsSystem.PhysicsGroup['ENEMYDET'] && b.group != PhysicsSystem.PhysicsGroup['ALLYDET'] && !this.ent.get(IsDropComp) && !enemyEnt.get(IsDropComp)) {
            this.ent.get(CollisionComp).addCollision(enemyEnt);
          }
        };
        _proto.reset = function reset() {
          this.remove();
          this.detector.remove();
          this.node.destroy();
          this.detector.node.destroy();
        };
        return RoleViewComp;
      }(BaaseUnit), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skeletonComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "detector", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleViewLoadComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoleModelComp.ts', './ECS.ts', './ConstType.ts', './app.ts', './BaseUnit.ts', './EnabledComp.ts', './IsPlayerComp.ts', './PositionComp.ts', './RoleViewComp.ts', './SkeletonViewComp.ts', './SpeedObstacleAvoidanceComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Prefab, instantiate, RoleModelComp, ecs, MapLayersType, RoleAnimType, app, BaaseUnit, EnabledComp, IsPlayerComp, PositionComp, RoleViewComp, SkeletonViewComp, SpeedObstacleAvoidanceComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MapLayersType = module.MapLayersType;
      RoleAnimType = module.RoleAnimType;
    }, function (module) {
      app = module.app;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      RoleViewComp = module.RoleViewComp;
    }, function (module) {
      SkeletonViewComp = module.SkeletonViewComp;
    }, function (module) {
      SpeedObstacleAvoidanceComp = module.SpeedObstacleAvoidanceComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b5b5dl2X59KJ6AyKOY1Ee0c", "RoleViewLoadComp", undefined);

      /**
       * 角色视图加载组件
       */
      var RoleViewLoadComp = exports('RoleViewLoadComp', (_dec = ecs.register('RoleViewLoadComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(RoleViewLoadComp, _ecs$Comp);
        function RoleViewLoadComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = RoleViewLoadComp.prototype;
        _proto.reset = function reset() {};
        return RoleViewLoadComp;
      }(ecs.Comp)) || _class));

      /**角色视图加载系统 */
      var RoleViewLoadSystem = exports('RoleViewLoadSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(RoleViewLoadSystem, _ecs$ComblockSystem);
        var _proto2 = RoleViewLoadSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(RoleViewLoadComp, RoleModelComp);
        };
        function RoleViewLoadSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          app.manager.loader.load({
            path: 'role/prefab/RoleViewComp',
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('实体已经被销毁');
                return;
              }
              var node = instantiate(result);
              e.add(SpeedObstacleAvoidanceComp);
              node.getComponent(RoleViewComp).ent = e;
              e.add(node.getComponent(RoleViewComp).detector);
              e.add(node.getComponent(RoleViewComp).skeletonComp);
              node.setPosition(e.get(PositionComp).getPosition());
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
              e.get(SkeletonViewComp).playAnim(RoleAnimType.idle);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              if (e.get(IsPlayerComp)) {
                node.name = 'player';
              }
            }
          });
          e.remove(RoleViewLoadComp);
        };
        return RoleViewLoadSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShowTaskComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleController.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BattleController, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d2b9afbjplBap7IMaB5ejWP", "ShowTaskComp", undefined);
      /**
       * 展示任务
       */
      var ShowTaskComp = exports('ShowTaskComp', (_dec = ecs.register('ShowTaskComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(ShowTaskComp, _ecs$Comp);
        function ShowTaskComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**展示倒计时 */
          _this.showCountDown = 2;
          return _this;
        }
        var _proto = ShowTaskComp.prototype;
        _proto.reset = function reset() {};
        return ShowTaskComp;
      }(ecs.Comp)) || _class));

      /**掉落物品组件系统 */
      var ShowTaskSystem = exports('ShowTaskSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(ShowTaskSystem, _ecs$ComblockSystem);
        var _proto2 = ShowTaskSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(ShowTaskComp);
        };
        function ShowTaskSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var showTaskComp = e.get(ShowTaskComp);
          showTaskComp.showCountDown -= this.dt;
          if (showTaskComp.showCountDown <= 0) {
            BattleController.inst.showTask();
            e.remove(ShowTaskComp);
          }
        };
        return ShowTaskSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkeletonViewComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConstType.ts', './RoleConfig.ts', './ECS.ts', './RoleModelComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sp, isValid, Component, RoleAnimType, RoleAnimLoop, DB_RoleConfig, ecs, RoleModelComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      RoleAnimType = module.RoleAnimType;
      RoleAnimLoop = module.RoleAnimLoop;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "f7913ASLsFOvYE73mlSWUrF", "SkeletonViewComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 角色显示组件 */
      var SkeletonViewComp = exports('SkeletonViewComp', (_dec = ccclass('SkeletonViewComp'), _dec2 = ecs.register('SkeletonViewComp', false), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkeletonViewComp, _Component);
        function SkeletonViewComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.canRecycle = void 0;
          _this.ent = void 0;
          /**当前动画 */
          _this.curAnim = void 0;
          /**下一个动画 */
          _this.nextAnim = void 0;
          _this.skeletonView = void 0;
          return _this;
        }
        var _proto = SkeletonViewComp.prototype;
        _proto.reset = function reset() {};
        _proto.loadView = function loadView() {};
        _proto.playAnim = function playAnim(name) {
          if (this.curAnim == name) return;
          this.nextAnim = name;
        };
        return SkeletonViewComp;
      }(Component), _class2.tid = -1, _class2.compName = void 0, _class2)) || _class) || _class));

      /**骨骼动画系统 */
      var SkeletonViewSystem = exports('SkeletonViewSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(SkeletonViewSystem, _ref);
        var _proto2 = SkeletonViewSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkeletonViewComp);
        };
        function SkeletonViewSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          this.loadView(e);
        };
        _proto2.update = function update(e) {
          this.playAnim(e);
        };
        _proto2.loadView = function loadView(e) {
          var comp = e.get(SkeletonViewComp);
          var roleId = e.get(RoleModelComp).roleId;
          var config = DB_RoleConfig[roleId];
          var path = config.path;
          app.manager.loader.load({
            path: 'role/spine/' + path,
            bundle: 'battle',
            type: sp.SkeletonData,
            onComplete: function onComplete(item) {
              if (isValid(comp.node)) {
                comp.skeletonView = comp.node.getComponent(sp.Skeleton);
                comp.skeletonView.skeletonData = item;
                comp.playAnim(RoleAnimType.idle);
                comp.skeletonView.setCompleteListener(function (trackEntry) {
                  if (trackEntry.animation.name != RoleAnimType.idle && trackEntry.animation.name != RoleAnimType.dead) {
                    comp.playAnim(RoleAnimType.idle);
                  }
                });
              }
            }
          });
        };
        _proto2.playAnim = function playAnim(e) {
          var comp = e.get(SkeletonViewComp);
          if (comp.nextAnim && comp.skeletonView) {
            comp.skeletonView.setAnimation(0, comp.nextAnim, RoleAnimLoop[comp.nextAnim]);
            comp.curAnim = comp.nextAnim;
            comp.nextAnim = null;
          }
        };
        return SkeletonViewSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillAfterDeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './AfterDeathMarkerComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, AfterDeathMarkerComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fbca5c4FHVIBLvz2ZnKecR9", "SkillAfterDeathComp", undefined);

      /**
       * 技能死亡后
       * 用来死亡逻辑
       */
      var SkillAfterDeathComp = exports('SkillAfterDeathComp', (_dec = ecs.register('SkillAfterDeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillAfterDeathComp, _ecs$Comp);
        function SkillAfterDeathComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //当前时间
          _this.curTime = 0;
          return _this;
        }
        var _proto = SkillAfterDeathComp.prototype;
        _proto.reset = function reset() {};
        return SkillAfterDeathComp;
      }(ecs.Comp)) || _class));

      /**死亡后系统 */
      var SkillAfterDeathSystem = exports('SkillAfterDeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SkillAfterDeathSystem, _ecs$ComblockSystem);
        var _proto2 = SkillAfterDeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillAfterDeathComp, AfterDeathMarkerComp);
        };
        function SkillAfterDeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var _e$get$unit;
          (_e$get$unit = e.get(UnitComp).unit) == null || _e$get$unit.removeCollision();
          e.get(AfterDeathMarkerComp).curTime = e.get(SkillAfterDeathComp).curTime;
        };
        return SkillAfterDeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillCompManagerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillPluginConfig.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_SkillPluginConfig, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5d2e7cDyoFGOLmwBIJ4qWC1", "SkillCompManagerComp", undefined);
      /**
       * 技能组件管理组件
       */
      var SkillCompManagerComp = exports('SkillCompManagerComp', (_dec = ecs.register('SkillCompManagerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillCompManagerComp, _ecs$Comp);
        function SkillCompManagerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**技能id */
          _this.compIdsMap = new Map();
          /**技能id */
          _this.compIds = [];
          return _this;
        }
        var _proto = SkillCompManagerComp.prototype;
        _proto.reset = function reset() {};
        _proto.init = function init() {};
        _proto.addCompByid = function addCompByid(id) {
          var config = DB_SkillPluginConfig[id];
          this.ent.add(js.getClassByName(config.className));
        };
        _proto.addCompsByIds = function addCompsByIds(ids) {};
        return SkillCompManagerComp;
      }(ecs.Comp)) || _class));

      /**技能管理系统 */
      var SkillCompManagerSystem = exports('SkillCompManagerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SkillCompManagerSystem, _ecs$ComblockSystem);
        var _proto2 = SkillCompManagerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillCompManagerComp);
        };
        function SkillCompManagerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {};
        return SkillCompManagerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './DirectionComp.ts', './EnabledComp.ts', './FactionTypeComp.ts', './MoveComp.ts', './UnitComp.ts', './PositionComp.ts', './SpeedComp.ts', './SkillCompManagerComp.ts', './SkillManagerComp.ts', './SkillModelComp.ts', './HpComp.ts', './MasterComp.ts', './CollisionComp.ts', './SkillAfterDeathComp.ts', './SkillLifeTimeComp.ts', './SkillLifeOverstepBoundaryComp.ts', './IsSkillComp.ts', './MapModelComp.ts', './app.ts', './CompConfig.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, ecs, BaseEntity, DirectionComp, EnabledComp, FactionTypeComp, MoveComp, UnitComp, PositionComp, SpeedComp, SkillCompManagerComp, SkillManagerComp, SkillModelComp, HpComp, MasterComp, CollisionComp, SkillAfterDeathComp, SkillLifeTimeComp, SkillLifeOverstepBoundaryComp, IsSkillComp, MapModelComp, app, DB_CompConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      MoveComp = module.MoveComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      SpeedComp = module.SpeedComp;
    }, function (module) {
      SkillCompManagerComp = module.SkillCompManagerComp;
    }, function (module) {
      SkillManagerComp = module.SkillManagerComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      CollisionComp = module.CollisionComp;
    }, function (module) {
      SkillAfterDeathComp = module.SkillAfterDeathComp;
    }, function (module) {
      SkillLifeTimeComp = module.SkillLifeTimeComp;
    }, function (module) {
      SkillLifeOverstepBoundaryComp = module.SkillLifeOverstepBoundaryComp;
    }, function (module) {
      IsSkillComp = module.IsSkillComp;
    }, function (module) {
      MapModelComp = module.MapModelComp;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DB_CompConfig = module.DB_CompConfig;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f328aiyn7VDfqLxK0IpuCAW", "SkillEntity", undefined);

      /** 技能实体 */
      var SkillEntity = exports('SkillEntity', (_dec = ecs.register('SkillEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(SkillEntity, _BaseEntity);
        function SkillEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = SkillEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(SkillManagerComp, SkillCompManagerComp, PositionComp, EnabledComp, MoveComp, FactionTypeComp, SpeedComp, UnitComp, DirectionComp, SkillModelComp, HpComp, MasterComp, CollisionComp, SkillAfterDeathComp, SkillLifeTimeComp, SkillLifeOverstepBoundaryComp, IsSkillComp);
          var mapModel = app.manager.battle.mapEntity.get(MapModelComp);
          var skillExtraComp = mapModel.skillExtraComp;
          if (skillExtraComp) {
            for (var i = 0; i < skillExtraComp.length; i++) {
              var compNme = DB_CompConfig[skillExtraComp[i]].className;
              if (compNme) {
                this.addComponents(new (js.getClassByName(compNme))());
              }
            }
          }
        };
        return SkillEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillLifeOverstepBoundaryComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './ECS.ts', './PositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, ecs, PositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      PositionComp = module.PositionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "328aaW2Ix1B6IeMcA/p0W99", "SkillLifeOverstepBoundaryComp", undefined);

      /**
       * 技能出界组件
       * 出界就销毁
       */
      var SkillLifeOverstepBoundaryComp = exports('SkillLifeOverstepBoundaryComp', (_dec = ecs.register('SkillLifeOverstepBoundaryComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillLifeOverstepBoundaryComp, _ecs$Comp);
        function SkillLifeOverstepBoundaryComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**技能生命周期 */
          _this.lifeTime = 0;
          return _this;
        }
        var _proto = SkillLifeOverstepBoundaryComp.prototype;
        _proto.reset = function reset() {};
        return SkillLifeOverstepBoundaryComp;
      }(ecs.Comp)) || _class));

      /**技能出界系统 */
      var SkillLifeOverstepBoundarySystem = exports('SkillLifeOverstepBoundarySystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SkillLifeOverstepBoundarySystem, _ecs$ComblockSystem);
        var _proto2 = SkillLifeOverstepBoundarySystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillLifeOverstepBoundaryComp);
        };
        function SkillLifeOverstepBoundarySystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var pos = e.get(PositionComp).getPosition(true);
          var playerPos = app.manager.battle.playerEntity.get(PositionComp).getPosition();
          var distance = pos.subtract(playerPos).length();
          if (distance >= 1000) {
            e.destroy();
          }
        };
        return SkillLifeOverstepBoundarySystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillLifeTimeComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './ConstType.ts', './BerforeDeathMarkerComp.ts', './SkillModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, SkillAttributeType, BerforeDeathMarkerComp, SkillModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillAttributeType = module.SkillAttributeType;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a06cehc41JHYbzI9NcxzPH/", "SkillLifeTimeComp", undefined);

      /**
       * 技能组件
       */
      var SkillLifeTimeComp = exports('SkillLifeTimeComp', (_dec = ecs.register('SkillLifeTimeComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillLifeTimeComp, _ecs$Comp);
        function SkillLifeTimeComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**技能生命周期 */
          _this.lifeTime = 0;
          return _this;
        }
        var _proto = SkillLifeTimeComp.prototype;
        _proto.reset = function reset() {};
        return SkillLifeTimeComp;
      }(ecs.Comp)) || _class));

      /**技能生命周期系统 */
      var SkillLifeTimeSystem = exports('SkillLifeTimeSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(SkillLifeTimeSystem, _ref);
        var _proto2 = SkillLifeTimeSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillLifeTimeComp);
        };
        function SkillLifeTimeSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.get(SkillLifeTimeComp);
          comp.lifeTime = e.get(SkillModelComp).attributes.get(SkillAttributeType.lifeTime).value;
        };
        _proto2.update = function update(e) {
          var lifeTime = e.get(SkillLifeTimeComp);
          if (lifeTime.lifeTime <= 0) {
            e.add(BerforeDeathMarkerComp);
            e.remove(SkillLifeTimeComp);
          } else {
            lifeTime.lifeTime -= this.dt;
          }
        };
        return SkillLifeTimeSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillManagerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillPluginConfig.ts', './ECS.ts', './ConstType.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_SkillPluginConfig, ecs, SkillPluginInfluence;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillPluginInfluence = module.SkillPluginInfluence;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "278364LpzpMd4z45JZL8CGn", "SkillManagerComp", undefined);
      /**
       * 技能管理组件
       */
      var SkillManagerComp = exports('SkillManagerComp', (_dec = ecs.register('SkillManagerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillManagerComp, _ecs$Comp);
        function SkillManagerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**按照类型分组的已经添加的技能组件 */
          _this.skillCompByType = new Map();
          return _this;
        }
        var _proto = SkillManagerComp.prototype;
        _proto.addSkillNewComp = function addSkillNewComp(comp) {
          var _this$skillCompByType;
          var config = DB_SkillPluginConfig[comp.skillId];
          var typeComp = (_this$skillCompByType = this.skillCompByType.get(config.type)) != null ? _this$skillCompByType : [];
          if (config.influence == SkillPluginInfluence.move && typeComp.length > 0) {
            console.log('唯一技能组件已经存在');
            return;
          }

          //这里 重新new一个组件，是因为技能组件是可以重复添加的，但是每次添加的组件都是新的
          var newComp = new comp.constructor();
          newComp.skillId = comp.skillId;
          newComp.weaponManager = comp.weaponManager;
          newComp.skillPlugin = comp.skillPlugin;
          newComp.modifyPlugin = comp.modifyPlugin;
          newComp.lv = comp.lv;
          this.ent.add(comp);
        };
        _proto.addSkillComp = function addSkillComp(comp) {
          var _this$skillCompByType2;
          var config = DB_SkillPluginConfig[comp.skillId];
          var typeComp = (_this$skillCompByType2 = this.skillCompByType.get(config.type)) != null ? _this$skillCompByType2 : [];
          if (config.influence == SkillPluginInfluence.move && typeComp.length > 0) {
            console.log('唯一技能组件已经存在');
            return;
          }
          this.ent.add(comp);
        };
        _proto.addSkillCompById = function addSkillCompById(id) {
          var config = DB_SkillPluginConfig[id];
          var comp = this.ent.add(js.getClassByName(config.className));
          this.addSkillNewComp(comp);
        };
        _proto.reset = function reset() {
          this.skillCompByType.clear();
        };
        return SkillManagerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './SkillNumericMap.ts', './ConstType.ts', './HpComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, ecs, SkillNumericMap, SkillAttributeType, HpComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      SkillNumericMap = module.SkillNumericMap;
    }, function (module) {
      SkillAttributeType = module.SkillAttributeType;
    }, function (module) {
      HpComp = module.HpComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "eb13fbb5fZPrarub7REfN5i", "SkillModelComp", undefined);

      /**
       * 技能数据
       */
      var SkillModelComp = exports('SkillModelComp', (_dec = ecs.register('SkillModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillModelComp, _ecs$Comp);
        function SkillModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**技能 id */
          _this.skillId = 0;
          /** 技能属性 */
          _this.attributes = null;
          /**方向 */
          _this.direction = new Vec3();
          /**散射角度 */
          _this.scatteringAngle = 0;
          return _this;
        }
        var _proto = SkillModelComp.prototype;
        _proto.init = function init(data) {
          this.attributes = new SkillNumericMap();
          this.attributes.init(data.att);
          this.skillId = data.skillId;
          this.direction = data.direction.clone();
          this.scatteringAngle = data.scatteringAngle;
          this.ent.get(HpComp).hp = this.attributes.get(SkillAttributeType.hp).value;
        };
        _proto.addCorrection = function addCorrection(type, data) {
          this.attributes.addCorrection(type, data);
          if (type == SkillAttributeType.hp) {
            var hpData = {
              isCrit: false,
              isShow: false,
              value: data.value
            };
            this.ent.get(HpComp).addHp(hpData);
          }
        }

        /**
         * 获取技能属性
         * @param type SkillAttributeType 属性类型
         * @returns number
         */;
        _proto.getAttribute = function getAttribute(type) {
          return this.attributes.get(type).value;
        }

        /**获取造成伤害 */;
        _proto.getDamage = function getDamage() {
          var atk = this.attributes.get(SkillAttributeType.atk).value;
          //是否暴击
          var isCrit = Math.random() < this.attributes.get(SkillAttributeType.crit).value;
          var damage = atk * (isCrit ? this.attributes.get(SkillAttributeType.critDamage).value : 1);
          return {
            damage: damage,
            isCrit: isCrit
          };
        };
        _proto.update = function update() {
          this.attributes.update();
        };
        _proto.reset = function reset() {};
        return SkillModelComp;
      }(ecs.Comp)) || _class));
      var SkillModelSystem = exports('SkillModelSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SkillModelSystem, _ecs$ComblockSystem);
        var _proto2 = SkillModelSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillModelComp);
        };
        function SkillModelSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          e.get(SkillModelComp).update();
        };
        _proto2.exit = function exit(e) {};
        return SkillModelSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillMoveComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      cclegacy._RF.push({}, "38a6aIoFYNG76ez7aLm26f6", "SkillMoveComp", undefined);

      /**
       * 技能运动组件
       */
      var SkillMoveComp = exports('SkillMoveComp', /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillMoveComp, _ecs$Comp);
        function SkillMoveComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = SkillMoveComp.prototype;
        _proto.reset = function reset() {};
        return SkillMoveComp;
      }(ecs.Comp));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillNumeric.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConstType.ts'], function (exports) {
  var _createClass, cclegacy, CorrectionType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CorrectionType = module.CorrectionType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd7aa37d/JPhZv0SQ9Z248a", "SkillNumeric", undefined);
      var SkillNumeric = exports('SkillNumeric', /*#__PURE__*/function () {
        function SkillNumeric(type) {
          /** 属性类型 */
          this.type = null;
          /**基础 */
          this.base = 0;
          /**成长 */
          this.growth = [];
          /**修饰器 */
          this.modifier = [];
          /**固定 */
          this.fixed = null;
          /** 缓存的属性最大值 */
          this.cachedMaxValue = null;
          /** 缓存的属性真实值 */
          this.cachedValue = null;
          this.type = type;
        }
        var _proto = SkillNumeric.prototype;
        _proto.init = function init(value) {
          this.base = value;
        }

        /**属性真实值 */;
        _proto.addCorrection = function addCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            this.growth.push(data);
          } else if (data.type === CorrectionType.MODIFIER) {
            this.modifier.push(data);
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = data;
          }
        };
        _proto.removeCorrection = function removeCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            var index = this.growth.indexOf(data);
            if (index !== -1) {
              this.growth.splice(index, 1);
            }
          } else if (data.type === CorrectionType.MODIFIER) {
            var _index = this.modifier.indexOf(data);
            if (_index !== -1) {
              this.modifier.splice(_index, 1);
            }
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = null;
          }
        };
        _proto.update = function update() {
          this.cachedMaxValue = null;
          this.cachedValue = null;
        };
        _proto.reset = function reset() {
          this.update();
        };
        _createClass(SkillNumeric, [{
          key: "value",
          get: function get() {
            if (this.cachedValue === null) {
              var value = 0;
              if (this.fixed) {
                value = this.fixed.value;
              } else {
                value = this.maxValue;
                this.modifier.forEach(function (element) {
                  value += element.value;
                });
              }
              this.cachedValue = value;
            }
            return this.cachedValue;
          }

          /**属性最大值 */
        }, {
          key: "maxValue",
          get: function get() {
            if (this.cachedMaxValue === null) {
              var value = this.base;
              this.growth.forEach(function (element) {
                value += element.value;
              });
              this.cachedMaxValue = value;
            }
            return this.cachedMaxValue;
          }

          /**属性基础值 */
        }, {
          key: "baseValue",
          get: function get() {
            return this.base;
          }
        }]);
        return SkillNumeric;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillNumericMap.ts", ['cc', './SkillNumeric.ts'], function (exports) {
  var cclegacy, SkillNumeric;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SkillNumeric = module.SkillNumeric;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bc6bbM0cNtA2KyWZnNY47wx", "SkillNumericMap", undefined);

      /** 武器数值装饰器 */
      var SkillNumericDecorator = exports('SkillNumericDecorator', function SkillNumericDecorator() {
        /** 属性类型 */
        this.attribute = null;
        /** 属性数值 */
        this.value = 0;
      });

      /** 所有模块角色属性集合 */
      var SkillNumericMap = exports('SkillNumericMap', /*#__PURE__*/function () {
        function SkillNumericMap() {
          /** 武器属性 */
          this.attributes = new Map();
        }
        var _proto = SkillNumericMap.prototype;
        _proto.init = function init(data) {
          for (var key in data) {
            var dataKey = key;
            var value = data[dataKey];
            var rn = this.get(dataKey);
            rn.init(value);
          }
        }

        /** 获取角色属性 */;
        _proto.get = function get(type) {
          var attr = this.attributes.get(type);
          if (attr == null) {
            attr = new SkillNumeric(type);
            this.attributes.set(type, attr);
          }
          return attr;
        };
        _proto.addCorrection = function addCorrection(type, data) {
          var attr = this.get(type);
          attr.addCorrection(data);
        };
        _proto.removeCorrection = function removeCorrection(type, data) {
          var attr = this.get(type);
          attr.removeCorrection(data);
        };
        _proto.update = function update() {
          this.attributes.forEach(function (value) {
            value.update();
          });
        }

        /** 重置属性值为零 */;
        _proto.reset = function reset() {
          this.attributes.forEach(function (value) {
            value.reset();
          });
        };
        return SkillNumericMap;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillRenderComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseSkillComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseSkillComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseSkillComp = module.BaseSkillComp;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54e65OT4JxAkadDdQQBko3F", "SkillRenderComp", undefined);

      /**
       * 技能渲染组件
       */
      var SkillRenderComp = exports('SkillRenderComp', /*#__PURE__*/function (_BaseSkillComp) {
        _inheritsLoose(SkillRenderComp, _BaseSkillComp);
        function SkillRenderComp() {
          return _BaseSkillComp.apply(this, arguments) || this;
        }
        var _proto = SkillRenderComp.prototype;
        _proto.reset = function reset() {};
        return SkillRenderComp;
      }(BaseSkillComp));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillRenderLoadComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './app.ts', './ConstType.ts', './BaseUnit.ts', './EnabledComp.ts', './UnitComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Prefab, instantiate, ecs, app, MapLayersType, BaaseUnit, EnabledComp, UnitComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      app = module.app;
    }, function (module) {
      MapLayersType = module.MapLayersType;
    }, function (module) {
      BaaseUnit = module.BaaseUnit;
    }, function (module) {
      EnabledComp = module.EnabledComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a3614zkgOFDL4PZwOfT7fCA", "SkillRenderLoadComp", undefined);

      /**
       * 技能渲染组件加载组件
       */
      var SkillRenderLoadComp = exports('SkillRenderLoadComp', (_dec = ecs.register('SkillRenderLoadComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SkillRenderLoadComp, _ecs$Comp);
        function SkillRenderLoadComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**渲染组件名字 */
          _this.className = void 0;
          return _this;
        }
        var _proto = SkillRenderLoadComp.prototype;
        _proto.reset = function reset() {};
        return SkillRenderLoadComp;
      }(ecs.Comp)) || _class));

      /**技能渲染组件加载组件系统 */
      var SkillRenderLoadSystem = exports('SkillRenderLoadSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SkillRenderLoadSystem, _ecs$ComblockSystem);
        var _proto2 = SkillRenderLoadSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SkillRenderLoadComp);
        };
        function SkillRenderLoadSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var comp = e.get(SkillRenderLoadComp);
          app.manager.loader.load({
            path: 'skill/render/' + comp.className,
            bundle: 'battle',
            type: Prefab,
            onComplete: function onComplete(result) {
              if (!e.get(EnabledComp)) {
                console.log('技能已经被销毁');
                return;
              }
              var node = instantiate(result);
              var skillCom = node.getComponent(comp.className);
              e.add(skillCom);
              e.get(UnitComp).unit = node.getComponent(BaaseUnit);
              //添加修正组件
              app.manager.battle.addChildren(node, MapLayersType.ENTITY);
            }
          });
        };
        _proto2.exit = function exit(e) {};
        return SkillRenderLoadSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleModelComp.ts', './ConstType.ts', './DirectionComp.ts', './SkillModelComp.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, ecs, RoleModelComp, AttributeType, SkillAttributeType, DirectionComp, SkillModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      AttributeType = module.AttributeType;
      SkillAttributeType = module.SkillAttributeType;
    }, function (module) {
      DirectionComp = module.DirectionComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f49e6h4Ov9FrJw8JL5EBI3E", "SpeedComp", undefined);

      /**
       * 移动组件
       */
      var SpeedComp = exports('SpeedComp', (_dec = ecs.register('SpeedComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SpeedComp, _ecs$Comp);
        function SpeedComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**1帧的速度，具有方向性 */
          _this._speed = v3(0, 0, 0);
          return _this;
        }
        var _proto = SpeedComp.prototype;
        _proto.reset = function reset() {};
        _createClass(SpeedComp, [{
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set: function set(value) {
            this._speed.x = value.x;
            this._speed.y = value.y;
          }
        }]);
        return SpeedComp;
      }(ecs.Comp)) || _class));

      /**速度系统 */
      var SpeedSystem = exports('SpeedSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SpeedSystem, _ecs$ComblockSystem);
        var _proto2 = SpeedSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SpeedComp, DirectionComp);
        };
        function SpeedSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var speedValue = 0;
          if (e.get(RoleModelComp)) {
            speedValue = e.get(RoleModelComp).attributes.get(AttributeType.speed).value;
          } else if (e.get(SkillModelComp)) {
            speedValue = e.get(SkillModelComp).attributes.get(SkillAttributeType.speed).value;
          }
          var dir = e.get(DirectionComp).direction;
          var speed = dir.multiplyScalar(speedValue);
          e.get(SpeedComp).speed = speed.multiplyScalar(this.dt);
        };
        _proto2.exit = function exit(e) {};
        return SpeedSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedObstacleAvoidanceComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './UnitComp.ts', './SpeedComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, UnitComp, SpeedComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      SpeedComp = module.SpeedComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "de382SbnXFHUpoA1HLbQmQ8", "SpeedObstacleAvoidanceComp", undefined);

      /**
       * 速度避障修正
       */
      var SpeedObstacleAvoidanceComp = exports('SpeedObstacleAvoidanceComp', (_dec = ecs.register('SpeedObstacleAvoidanceComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(SpeedObstacleAvoidanceComp, _ecs$Comp);
        function SpeedObstacleAvoidanceComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**避障时间间隔 */
          _this.avoidTime = 0.2;
          /**当前避障时间 */
          _this.curAvoidTime = 0;
          return _this;
        }
        var _proto = SpeedObstacleAvoidanceComp.prototype;
        _proto.reset = function reset() {};
        return SpeedObstacleAvoidanceComp;
      }(ecs.Comp)) || _class));

      /**速度避障修正系统 */
      var SpeedObstacleAvoidanceSystem = exports('SpeedObstacleAvoidanceSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(SpeedObstacleAvoidanceSystem, _ecs$ComblockSystem);
        var _proto2 = SpeedObstacleAvoidanceSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(SpeedObstacleAvoidanceComp);
        };
        function SpeedObstacleAvoidanceSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var oAComp = e.get(SpeedObstacleAvoidanceComp);
          var speedComp = e.get(SpeedComp);
          if (oAComp.curAvoidTime > oAComp.avoidTime) {
            var unit = e.get(UnitComp).unit;
            unit.tryVelocity = speedComp.speed;
            unit.velocity = speedComp.speed;
            unit.body.maxVelocity = speedComp.speed.length();
            oAComp.curAvoidTime = 0;
          }
          oAComp.curAvoidTime += this.dt;
        };
        _proto2.exit = function exit(e) {};
        return SpeedObstacleAvoidanceSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateMachineComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './AfterDeathMarkerComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, AfterDeathMarkerComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      AfterDeathMarkerComp = module.AfterDeathMarkerComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "eb1fbFfb1dKFpo6FWwdcu4H", "StateMachineComp", undefined);
      var StateMachineComp = exports('StateMachineComp', (_dec = ecs.register('StateMachineComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(StateMachineComp, _ecs$Comp);
        function StateMachineComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.states = new Map();
          /**当前状态 */
          _this.currentState = void 0;
          /**当前状态类型 */
          _this.currentStateType = void 0;
          /**下一个状态类型 */
          _this.nextStateType = void 0;
          /**下一个状态会用到的数据 */
          _this.nextData = void 0;
          return _this;
        }
        var _proto = StateMachineComp.prototype;
        _proto.addState = function addState(state, stateBase) {
          this.states.set(state, stateBase);
        };
        _proto.changeState = function changeState(state) {
          this.nextStateType = state;
        };
        _proto.reset = function reset() {
          this.states.clear();
          this.currentState = null;
          this.currentStateType = null;
          this.nextStateType = null;
          this.nextData = null;
        };
        return StateMachineComp;
      }(ecs.Comp)) || _class));

      /**碰撞检测系统 */
      var StateMachineSystem = exports('StateMachineSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(StateMachineSystem, _ecs$ComblockSystem);
        var _proto2 = StateMachineSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(StateMachineComp).excludeOf(AfterDeathMarkerComp);
        };
        function StateMachineSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var _stateMachineComp$cur3;
          var stateMachineComp = e.get(StateMachineComp);
          if (stateMachineComp.nextStateType && stateMachineComp.states.has(stateMachineComp.nextStateType)) {
            var _stateMachineComp$cur, _stateMachineComp$cur2;
            (_stateMachineComp$cur = stateMachineComp.currentState) == null || _stateMachineComp$cur.exit();
            stateMachineComp.currentState = stateMachineComp.states.get(stateMachineComp.nextStateType);
            (_stateMachineComp$cur2 = stateMachineComp.currentState) == null || _stateMachineComp$cur2.enter();
            stateMachineComp.currentStateType = stateMachineComp.nextStateType;
            stateMachineComp.nextStateType = undefined;
          }
          (_stateMachineComp$cur3 = stateMachineComp.currentState) == null || _stateMachineComp$cur3.update(this.dt);
        };
        return StateMachineSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './TaskModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, TaskModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c85fcs6A2NNUYz22Q8JaZJV", "TaskEntity", undefined);

      /** 角色实体 */
      var TaskEntity = exports('TaskEntity', (_dec = ecs.register('TaskEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(TaskEntity, _BaseEntity);
        function TaskEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = TaskEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(TaskModelComp);
        };
        return TaskEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskExpComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './TaskModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, TaskModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "9c525SZj6tO/7t1fYht9QSc", "TaskExpComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * exp任务
       */
      var TaskExpComp = exports('TaskExpComp', (_dec = ccclass('TaskExpComp'), _dec2 = ecs.register('TaskExpComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(TaskExpComp, _ecs$Comp);
        function TaskExpComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.totalProgress = 10;
          return _this;
        }
        var _proto = TaskExpComp.prototype;
        _proto.reset = function reset() {};
        return TaskExpComp;
      }(ecs.Comp)) || _class) || _class));

      /**exp任务系统 */
      var TaskExpSystem = exports('TaskExpSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(TaskExpSystem, _ecs$ComblockSystem);
        var _proto2 = TaskExpSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(TaskExpComp);
        };
        function TaskExpSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          e.get(TaskModelComp).totalProgress = e.get(TaskExpComp).totalProgress;
          e.remove(TaskExpComp);
        };
        return TaskExpSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleController.ts', './app.ts', './TaskConfig.ts', './ECS.ts', './CreateTaskComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BattleController, app, DB_TaskConfig, ecs, CreateTaskComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BattleController = module.BattleController;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DB_TaskConfig = module.DB_TaskConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      CreateTaskComp = module.CreateTaskComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "db32e6WtB5GLrnwzY1E7PBP", "TaskModelComp", undefined);

      /**
       * 任务数据数据
       */
      var TaskModelComp = exports('TaskModelComp', (_dec = ecs.register('TaskModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(TaskModelComp, _ecs$Comp);
        function TaskModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /** 任务id */
          _this.taskId = void 0;
          /**任务总进度 */
          _this.totalProgress = 0;
          /**任务当前进度 */
          _this.currentProgress = 0;
          /**是否是新任务 */
          _this.isNew = true;
          return _this;
        }
        var _proto = TaskModelComp.prototype;
        _proto.reset = function reset() {
          this.totalProgress = 0;
          this.currentProgress = 0;
        };
        return TaskModelComp;
      }(ecs.Comp)) || _class));

      /**任务模型系统 */
      var TaskModelSystem = exports('TaskModelSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(TaskModelSystem, _ecs$ComblockSystem);
        var _proto2 = TaskModelSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(TaskModelComp);
        };
        function TaskModelSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(TaskModelComp);
          if (comp.currentProgress >= comp.totalProgress && comp.totalProgress != 0) {
            //任务完成
            //开始下一个任务
            var taskConfig = DB_TaskConfig[comp.taskId];
            if (taskConfig.nextId) {
              e.destroy();
              app.manager.battle.controlEntity.add(CreateTaskComp).taskId = taskConfig.nextId;
            }
          } else if (comp.totalProgress != 0) {
            BattleController.inst.updateTaskProgress();
          }
          if (comp.isNew) {
            comp.isNew = false;
          }
        };
        return TaskModelSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskRoleComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './TaskModelComp.ts', './RoleModelComp.ts', './ConstType.ts', './HpComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, TaskModelComp, RoleModelComp, AttributeType, HpComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      AttributeType = module.AttributeType;
    }, function (module) {
      HpComp = module.HpComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "e8386wW1+RJ56A5GgmSxNeD", "TaskRoleComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 实体任务
       */
      var TaskRoleComp = exports('TaskRoleComp', (_dec = ccclass('TaskRoleComp'), _dec2 = ecs.register('TaskRoleComp'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(TaskRoleComp, _ecs$Comp);
        function TaskRoleComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = TaskRoleComp.prototype;
        _proto.reset = function reset() {};
        return TaskRoleComp;
      }(ecs.Comp)) || _class) || _class));

      /**exp任务系统 */
      var TaskRoleSystem = exports('TaskRoleSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(TaskRoleSystem, _ref);
        var _proto2 = TaskRoleSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(TaskRoleComp);
        };
        function TaskRoleSystem() {
          return _ref.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var maxHp = e.get(RoleModelComp).attributes.get(AttributeType.hp).maxValue;
          var taskModel = app.manager.battle.taskEntity.get(TaskModelComp);
          taskModel.currentProgress = 0;
          taskModel.totalProgress = maxHp;
        };
        _proto2.update = function update(e) {
          var hp = e.get(HpComp).hp;
          var taskModel = app.manager.battle.taskEntity.get(TaskModelComp);
          taskModel.currentProgress = taskModel.totalProgress - hp;
        };
        return TaskRoleSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskRoleDeathComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BerforeDeathMarkerComp.ts', './IsPlayerComp.ts', './TaskModelComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, BerforeDeathMarkerComp, IsPlayerComp, TaskModelComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BerforeDeathMarkerComp = module.BerforeDeathMarkerComp;
    }, function (module) {
      IsPlayerComp = module.IsPlayerComp;
    }, function (module) {
      TaskModelComp = module.TaskModelComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a77d67owDxCoquj5C8o7g4A", "TaskRoleDeathComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 实体任务
       */
      var TaskRoleDeathComp = exports('TaskRoleDeathComp', (_dec = ecs.register('TaskRoleDeathComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(TaskRoleDeathComp, _ecs$Comp);
        function TaskRoleDeathComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = TaskRoleDeathComp.prototype;
        _proto.reset = function reset() {};
        return TaskRoleDeathComp;
      }(ecs.Comp)) || _class));

      /**exp任务系统 */
      var TaskRoleDeathSystem = exports('TaskRoleDeathSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(TaskRoleDeathSystem, _ecs$ComblockSystem);
        var _proto2 = TaskRoleDeathSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(TaskRoleDeathComp, BerforeDeathMarkerComp).excludeOf(IsPlayerComp);
        };
        function TaskRoleDeathSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          var taskModel = app.manager.battle.taskEntity.get(TaskModelComp);
          taskModel.currentProgress = taskModel.totalProgress;
        };
        return TaskRoleDeathSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TriggerNPCInteractionMenuComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './RoleConfig.ts', './ECS.ts', './NPCInteractionMenuComp.ts', './PositionComp.ts', './RoleModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, DB_RoleConfig, ecs, NPCInteractionMenuComp, PositionComp, RoleModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      NPCInteractionMenuComp = module.NPCInteractionMenuComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "11a4aEaZV9OuZ4VfykjZqHK", "TriggerNPCInteractionMenuComp", undefined);

      /**
       * 触发功能
       */
      var TriggerNPCInteractionMenuComp = exports('TriggerNPCInteractionMenuComp', (_dec = ecs.register('TriggerNPCInteractionMenuComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(TriggerNPCInteractionMenuComp, _ecs$Comp);
        function TriggerNPCInteractionMenuComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          //触发距离
          _this.distance = 300;
          return _this;
        }
        var _proto = TriggerNPCInteractionMenuComp.prototype;
        _proto.reset = function reset() {};
        return TriggerNPCInteractionMenuComp;
      }(ecs.Comp)) || _class));
      var TriggerNPCInteractionMenuSystem = exports('TriggerNPCInteractionMenuSystem', /*#__PURE__*/function (_ref) {
        _inheritsLoose(TriggerNPCInteractionMenuSystem, _ref);
        var _proto2 = TriggerNPCInteractionMenuSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(TriggerNPCInteractionMenuComp);
        };
        function TriggerNPCInteractionMenuSystem() {
          return _ref.call(this) || this;
        }
        _proto2.update = function update(e) {
          var player = app.manager.battle.playerEntity;
          if (player) {
            var playerPos = player.get(PositionComp).getPosition(true);
            var comp = e.get(TriggerNPCInteractionMenuComp);
            var pos = e.get(PositionComp).getPosition(true);
            var dis = playerPos.subtract(pos).length();
            if (dis < comp.distance) {
              //触发功能
              var roleId = e.get(RoleModelComp).roleId;
              var interaction = DB_RoleConfig[roleId].interaction;
              if (interaction) {
                player.get(NPCInteractionMenuComp).addInteraction({
                  id: e.eid,
                  interaction: interaction,
                  weight: dis
                });
              }
            } else {
              player.get(NPCInteractionMenuComp).removeChat(e.eid);
            }
          }
        };
        _proto2.entityRemove = function entityRemove(e) {
          var player = app.manager.battle.playerEntity;
          player.get(NPCInteractionMenuComp).removeChat(e.eid);
        };
        return TriggerNPCInteractionMenuSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnitComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "063fchizClD8L/uy7nI9FCN", "UnitComp", undefined);
      /**
       * 节点
       */
      var UnitComp = exports('UnitComp', (_dec = ecs.register('UnitComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(UnitComp, _ecs$Comp);
        function UnitComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**单位节点 */
          _this.unit = null;
          return _this;
        }
        var _proto = UnitComp.prototype;
        _proto.reset = function reset() {
          var _this$unit;
          (_this$unit = this.unit) == null || _this$unit.node.destroy();
          this.unit = null;
        };
        return UnitComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './RoleModelComp.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ecs, RoleModelComp, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      RoleModelComp = module.RoleModelComp;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "11cc5tytMdIIZAvhfU9YgIQ", "UpgradeComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 掉落玩家经验组件
       */
      var UpgradeComp = exports('UpgradeComp', (_dec = ecs.register('UpgradeComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(UpgradeComp, _ecs$Comp);
        function UpgradeComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = UpgradeComp.prototype;
        _proto.reset = function reset() {};
        return UpgradeComp;
      }(ecs.Comp)) || _class));

      /**掉落玩家经验组件系统 */
      var UpgradeSystem = exports('UpgradeSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(UpgradeSystem, _ecs$ComblockSystem);
        var _proto2 = UpgradeSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(UpgradeComp);
        };
        function UpgradeSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.entityEnter = function entityEnter(e) {
          //恢复hp，mp
          app.manager.ui.showToast('升级了');
          e.get(RoleModelComp).upgrade(app.store.player.lv);
          e.remove(UpgradeComp);
        };
        return UpgradeSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponAutoCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './WeaponCastMarkerComp.ts', './WeaponChargeSuccessfulMarkerComp.ts', './WeaponSilenceMarkerComp.ts', './WeaponCastComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponCastMarkerComp, WeaponChargeSuccessfulMarkerComp, WeaponSilenceMarkerComp, WeaponCastComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponCastMarkerComp = module.WeaponCastMarkerComp;
    }, function (module) {
      WeaponChargeSuccessfulMarkerComp = module.WeaponChargeSuccessfulMarkerComp;
    }, function (module) {
      WeaponSilenceMarkerComp = module.WeaponSilenceMarkerComp;
    }, function (module) {
      WeaponCastComp = module.WeaponCastComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "06f47OhSRRPUpTbTgkfW+j5", "WeaponAutoCastComp", undefined);

      /**
       * 自动施法组件
       */
      var WeaponAutoCastComp = exports('WeaponAutoCastComp', (_dec = ecs.register('WeaponAutoCastComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponAutoCastComp, _ecs$Comp);
        function WeaponAutoCastComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = WeaponAutoCastComp.prototype;
        _proto.reset = function reset() {};
        return WeaponAutoCastComp;
      }(ecs.Comp)) || _class));

      /**自动施法系统 */
      var WeaponAutoCastSystem = exports('WeaponAutoCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponAutoCastSystem, _ecs$ComblockSystem);
        function WeaponAutoCastSystem() {
          return _ecs$ComblockSystem.apply(this, arguments) || this;
        }
        var _proto2 = WeaponAutoCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponAutoCastComp, WeaponChargeSuccessfulMarkerComp).excludeOf(WeaponSilenceMarkerComp);
        };
        _proto2.entityEnter = function entityEnter(e) {
          e.add(WeaponCastMarkerComp);
          e.add(WeaponCastComp);
          e.remove(WeaponChargeSuccessfulMarkerComp);
        };
        return WeaponAutoCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponCastComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './WeaponManagerComp.ts', './SkillEntity.ts', './SkillManagerComp.ts', './WeaponDepotComp.ts', './SkillModelComp.ts', './ConstType.ts', './SkillPluginConfig.ts', './FactionTypeComp.ts', './MasterComp.ts', './PositionComp.ts', './MpComp.ts', './WeaponModelComp.ts', './WeaponDirectionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, WeaponManagerComp, SkillEntity, SkillManagerComp, WeaponDepotComp, SkillModelComp, WeaponAttributeType, SkillAttributeType, EntityType, DB_SkillPluginConfig, FactionTypeComp, MasterComp, PositionComp, MpComp, WeaponModelComp, WeaponDirectionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      WeaponManagerComp = module.WeaponManagerComp;
    }, function (module) {
      SkillEntity = module.SkillEntity;
    }, function (module) {
      SkillManagerComp = module.SkillManagerComp;
    }, function (module) {
      WeaponDepotComp = module.WeaponDepotComp;
    }, function (module) {
      SkillModelComp = module.SkillModelComp;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
      SkillAttributeType = module.SkillAttributeType;
      EntityType = module.EntityType;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      FactionTypeComp = module.FactionTypeComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      MpComp = module.MpComp;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }, function (module) {
      WeaponDirectionComp = module.WeaponDirectionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7242bj3OvhGBrKZnx0I5i53", "WeaponCastComp", undefined);

      /**
       * 武器开火组件
       */
      var WeaponCastComp = exports('WeaponCastComp', (_dec = ecs.register('WeaponCastComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponCastComp, _ecs$Comp);
        function WeaponCastComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.skillPlugin = [];
          _this.modifyPlugin = [];
          return _this;
        }
        var _proto = WeaponCastComp.prototype;
        _proto.reset = function reset() {};
        return WeaponCastComp;
      }(ecs.Comp)) || _class));

      /**武器开火系统 */
      var WeaponCastSystem = exports('WeaponCastSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponCastSystem, _ecs$ComblockSystem);
        var _proto2 = WeaponCastSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponCastComp);
        };
        function WeaponCastSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var weapon = e.get(WeaponDepotComp).curWeapon;
          var weaponManager = weapon.get(WeaponManagerComp);
          if (weaponManager.skillDelay <= 0) {
            weaponManager.maxSkillDelay = 0;
            //施法
            var comp = e.get(WeaponCastComp);
            var skillPlugin = comp.skillPlugin;
            var modifyPlugin = comp.modifyPlugin;
            if (skillPlugin.length == 0 && modifyPlugin.length == 0) {
              var data = weapon.get(WeaponModelComp).data;
              weaponManager.castNum = data[WeaponAttributeType.castNum];
              while (weaponManager.castNum > 0) {
                var skillId = weaponManager.getSkill({
                  skillPlugin: skillPlugin,
                  modifyPlugin: modifyPlugin,
                  isBack: false,
                  source: 'weapon'
                });
                if (skillId) {
                  var config = DB_SkillPluginConfig[skillId];
                  weaponManager.castNum -= config.isCast ? 1 : 0;
                } else {
                  weaponManager.castNum = 0;
                }
              }
            }
            if (skillPlugin.length > 0) {
              //计算消耗的mp
              var costMp = 0;
              var scatteringAngle = 0;
              for (var i = 0; i < skillPlugin.length; i++) {
                costMp += DB_SkillPluginConfig[skillPlugin[i].skillId].mpCost;
                scatteringAngle += DB_SkillPluginConfig[skillPlugin[i].skillId].scatteringAngle;
              }
              for (var _i = 0; _i < modifyPlugin.length; _i++) {
                costMp += DB_SkillPluginConfig[modifyPlugin[_i].skillId].mpCost;
                scatteringAngle += DB_SkillPluginConfig[modifyPlugin[_i].skillId].scatteringAngle;
              }
              if (costMp <= e.get(MpComp).mp) {
                e.get(MpComp).mp -= costMp;
                for (var _i2 = 0; _i2 < skillPlugin.length; _i2++) {
                  var _att;
                  var skillEntity = ecs.getEntity(SkillEntity);
                  var skillManager = skillEntity.get(SkillManagerComp);
                  //先添加修正后添加技能
                  for (var k = 0; k < modifyPlugin.length; k++) {
                    skillManager.addSkillNewComp(modifyPlugin[k]);
                  }
                  skillManager.addSkillNewComp(skillPlugin[_i2]);
                  var _config = DB_SkillPluginConfig[skillPlugin[_i2].skillId];
                  skillEntity.get(SkillModelComp).init({
                    att: (_att = {}, _att[SkillAttributeType.hp] = _config.pierce, _att[SkillAttributeType.atk] = _config.damage, _att[SkillAttributeType.speed] = _config.speed, _att[SkillAttributeType.crit] = _config.crit, _att[SkillAttributeType.critDamage] = _config.critDamage, _att[SkillAttributeType.lifeTime] = _config.lifeTime, _att),
                    skillId: skillPlugin[_i2].skillId,
                    scatteringAngle: scatteringAngle,
                    direction: weapon.get(WeaponDirectionComp).direction
                  });
                  skillEntity.get(FactionTypeComp).faction = e.get(FactionTypeComp).faction;
                  skillEntity.get(FactionTypeComp).type = EntityType.SKILL;
                  skillEntity.get(MasterComp).master = weapon;
                  skillEntity.get(PositionComp).setPosition(weapon.get(PositionComp).getPosition());
                }
                skillPlugin.length = 0;
                modifyPlugin.length = 0;
                weaponManager.maxSkillDelay = weaponManager.skillDelay;
              }
            }
          }
        };
        return WeaponCastSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponCastMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bd28fZ+TWVFJay04YFE4Ny7", "WeaponCastMarkerComp", undefined);

      /**
       *  武器施法组件
       */
      var WeaponCastMarkerComp = exports('WeaponCastMarkerComp', (_dec = ecs.register('WeaponCastMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponCastMarkerComp, _ecs$Comp);
        function WeaponCastMarkerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = WeaponCastMarkerComp.prototype;
        _proto.reset = function reset() {};
        return WeaponCastMarkerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponChargeSuccessfulMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2b6fgW371CbKoO05Gg+QU4", "WeaponChargeSuccessfulMarkerComp", undefined);

      /**
       * 武器充能成功组件
       */
      var WeaponChargeSuccessfulMarkerComp = exports('WeaponChargeSuccessfulMarkerComp', (_dec = ecs.register('WeaponChargeSuccessfulMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponChargeSuccessfulMarkerComp, _ecs$Comp);
        function WeaponChargeSuccessfulMarkerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = WeaponChargeSuccessfulMarkerComp.prototype;
        _proto.reset = function reset() {};
        return WeaponChargeSuccessfulMarkerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponCompManagerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillPluginConfig.ts', './ECS.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, js, DB_SkillPluginConfig, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0629dQH8M9GgZfJOOhQ5MMY", "WeaponCompManagerComp", undefined);

      /**
       * 武器组件管理组件,这里增加的组件会在每帧最后删除
       */
      var WeaponCompManagerComp = exports('WeaponCompManagerComp', (_dec = ecs.register('WeaponCompManagerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponCompManagerComp, _ecs$Comp);
        function WeaponCompManagerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**技能id */
          _this.compIds = [];
          return _this;
        }
        var _proto = WeaponCompManagerComp.prototype;
        _proto.reset = function reset() {};
        _proto.init = function init() {};
        _proto.addCompByid = function addCompByid(id) {
          var config = DB_SkillPluginConfig[id];
          var comp = this.ent.get(js.getClassByName(config.className));
          if (comp) {
            comp.upgrade();
          } else {
            this.ent.add(js.getClassByName(config.className));
            this.compIds.push(id);
          }
        };
        _proto.addCompsByIds = function addCompsByIds(ids) {};
        return WeaponCompManagerComp;
      }(ecs.Comp)) || _class));

      /**技能管理系统 */
      var WeaponCompManagerSystem = exports('WeaponCompManagerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponCompManagerSystem, _ecs$ComblockSystem);
        var _proto2 = WeaponCompManagerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponCompManagerComp);
        };
        function WeaponCompManagerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(WeaponCompManagerComp);
          for (var _iterator = _createForOfIteratorHelperLoose(comp.compIds), _step; !(_step = _iterator()).done;) {
            var id = _step.value;
            var config = DB_SkillPluginConfig[id];
            e.remove(js.getClassByName(config.className));
          }
          comp.compIds.length = 0;
        };
        return WeaponCompManagerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponDepotComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WeaponModelComp.ts', './ECS.ts', './MasterComp.ts', './WeaponEntity.ts', './FixedEntPositionComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, WeaponModelComp, ecs, MasterComp, WeaponEntity, FixedEntPositionComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      WeaponEntity = module.WeaponEntity;
    }, function (module) {
      FixedEntPositionComp = module.FixedEntPositionComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "22996pk2g1CE7zpAvSWwFba", "WeaponDepotComp", undefined);

      /**
       * 武器库组件
       */
      var WeaponDepotComp = exports('WeaponDepotComp', (_dec = ecs.register('WeaponDepotComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponDepotComp, _ecs$Comp);
        function WeaponDepotComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**武器集合 */
          _this.weaponArr = [];
          /**当前使用的武器 */
          _this.curWeapon = void 0;
          /** 当前使用武器索引 */
          _this.curWeaponIndex = -1;
          /**下一个切换的武器索引 */
          _this.nextWeaponIndex = 0;
          return _this;
        }
        var _proto = WeaponDepotComp.prototype;
        _proto.addMoreWeapon = function addMoreWeapon(weaponData) {
          for (var i = 0; i < weaponData.length; i++) {
            this.addOneWeapon(weaponData[i].data);
          }
        };
        _proto.addOneWeapon = function addOneWeapon(weaponData) {
          var weaponEntity = ecs.getEntity(WeaponEntity);
          weaponEntity.get(MasterComp).master = this.ent;
          weaponEntity.get(WeaponModelComp).init(weaponData);
          weaponEntity.get(FixedEntPositionComp).fixedEnt = this.ent;
          this.weaponArr.push(weaponEntity);
          this.ent.addChild(weaponEntity);
        };
        _proto.reset = function reset() {};
        return WeaponDepotComp;
      }(ecs.Comp)) || _class));

      /**武器库系统 */
      var WeaponDepotSystem = exports('WeaponDepotSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponDepotSystem, _ecs$ComblockSystem);
        var _proto2 = WeaponDepotSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponDepotComp);
        };
        function WeaponDepotSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var weaponDepot = e.get(WeaponDepotComp);
          if (weaponDepot.curWeaponIndex !== weaponDepot.nextWeaponIndex) {
            weaponDepot.curWeaponIndex = weaponDepot.nextWeaponIndex;
            weaponDepot.curWeapon = weaponDepot.weaponArr[weaponDepot.curWeaponIndex];
          }
        };
        return WeaponDepotSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponDirectionComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "dfaa3Kt/RBAG7d+TfMnfb9r", "WeaponDirectionComp", undefined);

      /**
       * 武器方向组件
       */
      var WeaponDirectionComp = exports('WeaponDirectionComp', (_dec = ecs.register('WeaponDirectionComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponDirectionComp, _ecs$Comp);
        function WeaponDirectionComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**方向 */
          _this._direction = v3(0, 0, 0);
          return _this;
        }
        var _proto = WeaponDirectionComp.prototype;
        _proto.reset = function reset() {};
        _createClass(WeaponDirectionComp, [{
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            this._direction.x = value.x;
            this._direction.y = value.y;
          }
        }]);
        return WeaponDirectionComp;
      }(ecs.Comp)) || _class));

      /**武器方向系统 */
      var WeaponDirectionSystem = exports('WeaponDirectionSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponDirectionSystem, _ecs$ComblockSystem);
        var _proto2 = WeaponDirectionSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponDirectionComp);
        };
        function WeaponDirectionSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {};
        return WeaponDirectionSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts', './BaseEntity.ts', './FixedEntPositionComp.ts', './PositionComp.ts', './UnitComp.ts', './WeaponDirectionComp.ts', './IsWeaponComp.ts', './MasterComp.ts', './WeaponCompManagerComp.ts', './WeaponManagerComp.ts', './WeaponModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs, BaseEntity, FixedEntPositionComp, PositionComp, UnitComp, WeaponDirectionComp, IsWeaponComp, MasterComp, WeaponCompManagerComp, WeaponManagerComp, WeaponModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BaseEntity = module.BaseEntity;
    }, function (module) {
      FixedEntPositionComp = module.FixedEntPositionComp;
    }, function (module) {
      PositionComp = module.PositionComp;
    }, function (module) {
      UnitComp = module.UnitComp;
    }, function (module) {
      WeaponDirectionComp = module.WeaponDirectionComp;
    }, function (module) {
      IsWeaponComp = module.IsWeaponComp;
    }, function (module) {
      MasterComp = module.MasterComp;
    }, function (module) {
      WeaponCompManagerComp = module.WeaponCompManagerComp;
    }, function (module) {
      WeaponManagerComp = module.WeaponManagerComp;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "96ef7xaGQtCgaSNWyubD4kp", "WeaponEntity", undefined);

      /** 技能管理实体 */
      var WeaponEntity = exports('WeaponEntity', (_dec = ecs.register('WeaponEntity'), _dec(_class = /*#__PURE__*/function (_BaseEntity) {
        _inheritsLoose(WeaponEntity, _BaseEntity);
        function WeaponEntity() {
          return _BaseEntity.apply(this, arguments) || this;
        }
        var _proto = WeaponEntity.prototype;
        _proto.init = function init() {
          _BaseEntity.prototype.init.call(this);
          this.addComponents(MasterComp, WeaponManagerComp, WeaponCompManagerComp, WeaponModelComp, WeaponDirectionComp, PositionComp, IsWeaponComp, FixedEntPositionComp, UnitComp);
        };
        return WeaponEntity;
      }(BaseEntity)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponManagerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillPluginConfig.ts', './ECS.ts', './BattleUtil.ts', './ConstType.ts', './WeaponModelComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, DB_SkillPluginConfig, ecs, BattleUtil, SkillPluginType, WeaponAttributeType, WeaponModelComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }, function (module) {
      ecs = module.ecs;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      SkillPluginType = module.SkillPluginType;
      WeaponAttributeType = module.WeaponAttributeType;
    }, function (module) {
      WeaponModelComp = module.WeaponModelComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "90215KtSL5P+7QGoA4I4yeC", "WeaponManagerComp", undefined);

      /**
       * 武器管理组件
       */
      var WeaponManagerComp = exports('WeaponManagerComp', (_dec = ecs.register('WeaponManagerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponManagerComp, _ecs$Comp);
        function WeaponManagerComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          /**法术组件id */
          _this.skillIdArr = [];
          /**施法位置 */
          _this.skillIndex = 999;
          /**回绕位置 */
          _this.skillBackIndex = 0;
          /**施法延迟 */
          _this.skillDelay = 0;
          /**施法数量 */
          _this.castNum = 0;
          /**最大施法延迟，用于界面展示 */
          _this.maxSkillDelay = 0;
          return _this;
        }
        var _proto = WeaponManagerComp.prototype;
        /**获取一个法术或者修正 */
        _proto.getSkill = function getSkill(data) {
          var skillId = null;
          for (var i = this.skillIndex; i < this.skillIdArr.length; i++) {
            if (this.skillIdArr[i]) {
              skillId = this.skillIdArr[i];
              this.skillIndex = i + 1;
              break;
            }
          }
          if (!skillId && data.isBack) {
            //法术回绕
            skillId = this.skillIdArr[this.skillBackIndex];
            this.skillBackIndex++;
          } else if (!skillId && !data.isBack) {
            //不法术回绕
            this.castNum = 0;
          }
          if (skillId) {
            var config = DB_SkillPluginConfig[skillId];
            // this.castNum -= config.isCast ? 1 : 0;
            var plugCompObj = js.getClassByName(config.className);
            var plugComp = new plugCompObj();
            if (config.type == SkillPluginType.skill) {
              data.skillPlugin.push(plugComp);
            } else {
              data.modifyPlugin.push(plugComp);
            }
            this.skillDelay += config.delayTime;
            plugComp.init({
              weaponManager: this,
              skillId: skillId,
              skillPlugin: data.skillPlugin,
              modifyPlugin: data.modifyPlugin
            });
          }
          return skillId;
        };
        _proto.reset = function reset() {};
        return WeaponManagerComp;
      }(ecs.Comp)) || _class));

      /**技能管理系统 */
      var WeaponManagerSystem = exports('WeaponManagerSystem', /*#__PURE__*/function (_ecs$ComblockSystem) {
        _inheritsLoose(WeaponManagerSystem, _ecs$ComblockSystem);
        var _proto2 = WeaponManagerSystem.prototype;
        _proto2.filter = function filter() {
          return ecs.allOf(WeaponManagerComp);
        };
        function WeaponManagerSystem() {
          return _ecs$ComblockSystem.call(this) || this;
        }
        _proto2.update = function update(e) {
          var comp = e.get(WeaponManagerComp);
          this.updateWeapinSkillIds(e);
          if (comp.skillDelay > 0) {
            comp.skillDelay -= this.dt;
          }
        };
        _proto2.updateWeapinSkillIds = function updateWeapinSkillIds(e) {
          var comp = e.get(WeaponManagerComp);
          var data = e.get(WeaponModelComp).data;
          var isHaveSkill = false;
          for (var i = comp.skillIndex; i < comp.skillIdArr.length; i++) {
            if (comp.skillIdArr[i]) {
              isHaveSkill = true;
              break;
            }
          }
          if (!isHaveSkill || comp.skillIndex >= comp.skillIdArr.length && data[WeaponAttributeType.skillPlugin].length != 0) {
            var _data = e.get(WeaponModelComp).data;
            if (_data[WeaponAttributeType.isDisorder]) {
              comp.skillIdArr = BattleUtil.deepClone(_data[WeaponAttributeType.skillPlugin].sort(function () {
                return Math.random() - 0.5;
              }));
            } else {
              comp.skillIdArr = BattleUtil.deepClone(_data[WeaponAttributeType.skillPlugin]);
            }
            comp.skillBackIndex = 0;
            comp.skillIndex = 0;
            comp.castNum = _data[WeaponAttributeType.castNum];
            comp.skillDelay += _data[WeaponAttributeType.chargeTime];
            comp.maxSkillDelay = comp.skillDelay;
          }
        };
        return WeaponManagerSystem;
      }(ecs.ComblockSystem));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponModelComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "877e1yonrtEUb6dax1IvsJl", "WeaponModelComp", undefined);
      /**
       * 武器数据 组件
       */
      var WeaponModelComp = exports('WeaponModelComp', (_dec = ecs.register('WeaponModelComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponModelComp, _ecs$Comp);
        function WeaponModelComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ecs$Comp.call.apply(_ecs$Comp, [this].concat(args)) || this;
          _this.data = void 0;
          return _this;
        }
        var _proto = WeaponModelComp.prototype;
        _proto.reset = function reset() {};
        _proto.init = function init(data) {
          this.data = data;
        };
        return WeaponModelComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponNumeric.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConstType.ts'], function (exports) {
  var _createClass, cclegacy, CorrectionType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CorrectionType = module.CorrectionType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aeee11ndstPtItul4buHZzV", "WeaponNumeric", undefined);
      var WeaponNumeric = exports('WeaponNumeric', /*#__PURE__*/function () {
        function WeaponNumeric(type) {
          /** 属性类型 */
          this.type = null;
          /**基础 */
          this.base = 0;
          /**成长 */
          this.growth = [];
          /**修饰器 */
          this.modifier = [];
          /**固定 */
          this.fixed = null;
          /** 缓存的属性最大值 */
          this.cachedMaxValue = null;
          /** 缓存的属性真实值 */
          this.cachedValue = null;
          this.type = type;
        }
        var _proto = WeaponNumeric.prototype;
        _proto.init = function init(value) {
          this.base = value;
        }

        /**属性真实值 */;
        _proto.addCorrection = function addCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            this.growth.push(data);
          } else if (data.type === CorrectionType.MODIFIER) {
            this.modifier.push(data);
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = data;
          }
        };
        _proto.removeCorrection = function removeCorrection(data) {
          if (data.type === CorrectionType.GROWTH) {
            var index = this.growth.indexOf(data);
            if (index !== -1) {
              this.growth.splice(index, 1);
            }
          } else if (data.type === CorrectionType.MODIFIER) {
            var _index = this.modifier.indexOf(data);
            if (_index !== -1) {
              this.modifier.splice(_index, 1);
            }
          } else if (data.type === CorrectionType.FIXED) {
            this.fixed = null;
          }
        };
        _proto.update = function update() {
          this.cachedMaxValue = null;
          this.cachedValue = null;
        };
        _proto.reset = function reset() {
          this.update();
        };
        _createClass(WeaponNumeric, [{
          key: "value",
          get: function get() {
            if (this.cachedValue === null) {
              var value = 0;
              if (this.fixed) {
                value = this.fixed.value;
              } else {
                value = this.maxValue;
                this.modifier.forEach(function (element) {
                  value += element.value;
                });
              }
              this.cachedValue = value;
            }
            return this.cachedValue;
          }

          /**属性最大值 */
        }, {
          key: "maxValue",
          get: function get() {
            if (this.cachedMaxValue === null) {
              var value = this.base;
              this.growth.forEach(function (element) {
                value += element.value;
              });
              this.cachedMaxValue = value;
            }
            return this.cachedMaxValue;
          }

          /**属性基础值 */
        }, {
          key: "baseValue",
          get: function get() {
            return this.base;
          }
        }]);
        return WeaponNumeric;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponNumericMap.ts", ['cc', './WeaponNumeric.ts'], function (exports) {
  var cclegacy, WeaponNumeric;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      WeaponNumeric = module.WeaponNumeric;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f7fb39PRzZGjJs265XVq0+C", "WeaponNumericMap", undefined);

      /** 武器数值装饰器 */
      var WeaponNumericDecorator = exports('WeaponNumericDecorator', function WeaponNumericDecorator() {
        /** 属性类型 */
        this.attribute = null;
        /** 属性数值 */
        this.value = 0;
      });

      /** 所有模块角色属性集合 */
      var WeaponNumericMap = exports('WeaponNumericMap', /*#__PURE__*/function () {
        function WeaponNumericMap() {
          /** 武器属性 */
          this.attributes = new Map();
        }
        var _proto = WeaponNumericMap.prototype;
        _proto.init = function init(data) {
          for (var key in data) {
            var dataKey = key;
            var value = data[dataKey];
            var rn = this.get(dataKey);
            rn.init(value);
          }
        }

        /** 获取角色属性 */;
        _proto.get = function get(type) {
          var attr = this.attributes.get(type);
          if (attr == null) {
            attr = new WeaponNumeric(type);
            this.attributes.set(type, attr);
          }
          return attr;
        };
        _proto.addCorrection = function addCorrection(type, data) {
          var attr = this.get(type);
          attr.addCorrection(data);
        };
        _proto.removeCorrection = function removeCorrection(type, data) {
          var attr = this.get(type);
          attr.removeCorrection(data);
        };
        _proto.update = function update() {
          this.attributes.forEach(function (value) {
            value.update();
          });
        }

        /** 重置属性值为零 */;
        _proto.reset = function reset() {
          this.attributes.forEach(function (value) {
            value.reset();
          });
        };
        return WeaponNumericMap;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponSilenceMarkerComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECS.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ecs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ecs = module.ecs;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fa2cayzrXNJEIrPe/Ve5FvU", "WeaponSilenceMarkerComp", undefined);

      /**
       * 沉默
       * 禁止施法组件
       */
      var WeaponSilenceMarkerComp = exports('WeaponSilenceMarkerComp', (_dec = ecs.register('WeaponSilenceMarkerComp'), _dec(_class = /*#__PURE__*/function (_ecs$Comp) {
        _inheritsLoose(WeaponSilenceMarkerComp, _ecs$Comp);
        function WeaponSilenceMarkerComp() {
          return _ecs$Comp.apply(this, arguments) || this;
        }
        var _proto = WeaponSilenceMarkerComp.prototype;
        _proto.reset = function reset() {};
        return WeaponSilenceMarkerComp;
      }(ecs.Comp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/battle', 'chunks:///_virtual/battle'); 
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