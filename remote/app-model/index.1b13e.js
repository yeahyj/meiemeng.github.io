System.register("chunks:///_virtual/app-model", ['./config.game.ts', './export.type.ts', './store.game.ts', './store.help.ts', './store.player.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/config.game.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d293bAC3XdCpL8FJpeJKpuv", "config.game", undefined);
      // config中不能定义任何方法, 任何变量在外部访问都是readonly
      var Game = exports('default', function Game() {
        /**战斗武器个数 */
        this.BattleWeaponNum = 3;
        /**战斗道具个数 */
        this.BattleItemNum = 0;
        /**每种类型背包格子数 */
        this.BagCapacity = 20;
        /**仓库格子数 */
        this.WarehouseCapacity = 100;
        /**普通怪物技能插件掉落概率 */
        this.NormalMonsterSkillPluginDropRate = 0.02;
        /**精英怪物技能插件掉落概率 */
        this.EliteMonsterSkillPluginDropRate = 0.06;
        /**boss怪物技能插件掉落概率 */
        this.BossMonsterSkillPluginDropRate = 0.1;
        /**魔法石掉落概率 */
        this.MagicStoneDropRate = 0;
        /**装备掉落概率 */
        this.EquipmentDropRate = 0.05;
        /**武器掉落概率 */
        this.WeaponDropRate = 0.05;
        /**金钱掉落概率 */
        this.MoneyDropRate = 0.4;
        /**金钱掉落范围 */
        this.MoneyDropRange = [100, 1000];
        /**道具收集距离 */
        this.CollectItemDistance = 100;
        /**小秘境难度 */
        this.MiniDungeonDifficulty = [0.5, 1, 3, 6];
        /**小秘境难度名字 */
        this.MiniDungeonDifficultyName = ['简单', '普通', '困难', '地狱'];
        /**角色满级 */
        this.PlayerMaxLv = 70;
        /**默认暴击伤害倍率 */
        this.CritDamageRate = 4;
        /**无限地图长宽 */
        this.InfiniteMapSize = 9999999;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/export.type.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _AttributeName, _RoleAnimLoop;
      cclegacy._RF.push({}, "b20efjNx5VI55n41mbdWKvS", "export.type", undefined); // 🔥切记: 当前文件处于分包中, 由于加载顺序的原因，不可以在「主包」中使用此文件内导出的变量
      // 存放直接导出的interface、type或enum等
      // export type IString = string;
      // export enum Type { None };
      /**装备类型 */
      /**魔法杖类型 */
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
      var AttributeTypeName = exports('AttributeTypeName', {
        //生命
        hp: '生命',
        //生命恢复
        hpRecover: '生命恢复',
        //攻击
        atk: '攻击',
        //攻击速度
        atkSpeed: '攻击速度',
        //速度
        speed: '速度',
        //暴击几率
        crit: '暴击几率',
        //暴击伤害
        critDamage: '暴击伤害',
        //冷却缩减
        cdReduce: '冷却缩减',
        //反伤
        reflectDamage: '反伤'
      });

      //属性对应的名字
      var AttributeName = exports('AttributeName', (_AttributeName = {}, _AttributeName[AttributeType.hp] = '生命', _AttributeName[AttributeType.hpRecover] = '生命恢复', _AttributeName[AttributeType.atk] = '攻击', _AttributeName[AttributeType.atkSpeed] = '攻击速度', _AttributeName[AttributeType.speed] = '速度', _AttributeName[AttributeType.crit] = '暴击几率', _AttributeName[AttributeType.critDamage] = '暴击伤害', _AttributeName[AttributeType.cdReduce] = '冷却缩减', _AttributeName[AttributeType.reflectDamage] = '反伤', _AttributeName.quality = '品质', _AttributeName.lvLimit = '等级限制', _AttributeName.reduceLv = '降低等级', _AttributeName.def = '防御', _AttributeName.hpSteal = '生命偷取', _AttributeName.sockets = '插槽数', _AttributeName.magicStone = '魔法石', _AttributeName));
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
        ItemType["magicStone"] = "magicStone";
        ItemType["resource"] = "resource";
        return ItemType;
      }({}));
      var ItemTypeName = exports('ItemTypeName', /*#__PURE__*/function (ItemTypeName) {
        ItemTypeName["weapon"] = "\u6B66\u5668";
        ItemTypeName["equipment"] = "\u88C5\u5907";
        ItemTypeName["skillPlugin"] = "\u6280\u80FD\u77F3";
        ItemTypeName["magicStone"] = "\u9B54\u6CD5\u77F3";
        ItemTypeName["resource"] = "\u8D44\u6E90";
        return ItemTypeName;
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
        EquipmentSlot["weapon1"] = "weapon1";
        EquipmentSlot["weapon2"] = "weapon2";
        EquipmentSlot["weapon3"] = "weapon3";
        return EquipmentSlot;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.game.ts", ['cc', './app.ts'], function (exports) {
  var cclegacy, app;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      cclegacy._RF.push({}, "709d0GRCitND5vlAD4OlWul", "store.game", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var Game = exports('default', /*#__PURE__*/function () {
        function Game() {}
        var _proto = Game.prototype;
        _proto.init = function init() {
          var _app$lib$storage$get, _data$player;
          var data = (_app$lib$storage$get = app.lib.storage.get('GameData-player')) != null ? _app$lib$storage$get : {};
          app.store.player.init((_data$player = data['player']) != null ? _data$player : {});
        };
        _proto.save = function save() {
          app.store.player.save();
        };
        return Game;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.help.ts", ['cc', './EquipConfig.ts', './RoleConfig.ts', './WeaponConfig.ts', './export.type.ts', './MagicStoneConfig.ts', './ResourceConfig.ts', './SkillPluginConfig.ts'], function (exports) {
  var cclegacy, DB_EquipConfig, DB_RoleConfig, DB_WeaponConfig, WeaponAttributeType, AttributeType, FactionType, ItemType, DB_MagicStoneConfig, DB_ResourceConfig, DB_SkillPluginConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DB_EquipConfig = module.DB_EquipConfig;
    }, function (module) {
      DB_RoleConfig = module.DB_RoleConfig;
    }, function (module) {
      DB_WeaponConfig = module.DB_WeaponConfig;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
      AttributeType = module.AttributeType;
      FactionType = module.FactionType;
      ItemType = module.ItemType;
    }, function (module) {
      DB_MagicStoneConfig = module.DB_MagicStoneConfig;
    }, function (module) {
      DB_ResourceConfig = module.DB_ResourceConfig;
    }, function (module) {
      DB_SkillPluginConfig = module.DB_SkillPluginConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "16746sYUKNFhL/XAr224pm1", "store.help", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var Help = exports('default', /*#__PURE__*/function () {
        function Help() {}
        var _proto = Help.prototype;
        /**
         * 根据装备id创建装备
         * @param equipId 装备ID
         * @returns 创建的装备数据
         */
        _proto.createEquipment = function createEquipment(equipId) {
          //生成属性值
          var attrValues = {
            id: 0,
            equipmentId: 0,
            reduceLv: 0,
            atk: 0,
            def: 0,
            hp: 0,
            hpRecover: 0,
            mp: 0,
            mpRecover: 0,
            atkSpeed: 0,
            crit: 0,
            critDamage: 0,
            cdReduce: 0,
            hpSteal: 0,
            sockets: 0,
            magicStone: [],
            reflectDamage: 0
          };
          var configData = DB_EquipConfig[equipId];
          //属性限制个数
          var attrLimit = configData.attrLimit;
          //获取有效属性值
          var attrKeys = ['reduceLv', 'atk', 'def', 'hp', 'hpRecover', 'mp', 'mpRecover', 'atkSpeed', 'crit', 'critDamage', 'cd', 'hpSteal', 'sockets'];
          //在attrKeys随机取attrLimit个
          // 从attrKeys中随机选择attrLimit个属性
          var attrs = [].concat(attrKeys);
          var attrCount = Math.min(attrLimit, attrs.length);
          for (var i = attrs.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [attrs[j], attrs[i]];
            attrs[i] = _ref[0];
            attrs[j] = _ref[1];
          }
          attrs = attrs.slice(0, attrCount);
          for (var _i = 0; _i < attrCount; _i++) {
            var attr = attrs[_i];
            if (attr in configData) {
              var value = 0;
              //configData[attr]如果是数组
              if (Array.isArray(configData[attr])) {
                var value1 = configData[attr][0];
                var value2 = configData[attr][1];
                value = this.randomBetweenTwoValues(value1, value2);
              } else {
                value = configData[attr];
              }
              attrValues[attr] = value;
            }
          }

          // 添加魔法石
          var magicStone = configData.magicStone;
          if (magicStone.length > 0) {
            attrValues.magicStone = magicStone;
          }
          //加上其他必须属性
          attrValues.id = configData.id;
          //获取一个不会重复的id
          attrValues.equipmentId = this.generateUniqueId();
          return attrValues;
        }

        /**
         * 在两个值之间生成随机数
         * @param min 最小值
         * @param max 最大值
         * @returns 生成的随机数
         */;
        _proto.randomBetweenTwoValues = function randomBetweenTwoValues(min, max) {
          //如果其中一个为undefined，则返回另一个
          if (min == undefined) {
            return max;
          }
          if (max == undefined) {
            return min;
          }

          // 确保min和max是数字

          min = Number(min);
          max = Number(max);

          // 如果min大于max，交换它们的值
          if (min > max) {
            var _ref2 = [max, min];
            min = _ref2[0];
            max = _ref2[1];
          }

          // 计算随机值
          var random = Math.random() * (max - min) + min;

          // 处理小数情况
          var minDecimalPlaces = (min.toString().split('.')[1] || '').length;
          var maxDecimalPlaces = (max.toString().split('.')[1] || '').length;
          var decimalPlaces = Math.max(minDecimalPlaces, maxDecimalPlaces);

          // 返回结果，保留适当的小数位数
          return Number(random.toFixed(decimalPlaces));
        }

        /**
         * 根据id创建法杖
         * @param weaponId 武器ID
         * @returns 创建的武器数据
         */;
        _proto.createWeapon = function createWeapon(weaponId) {
          var _attrValues;
          var configData = DB_WeaponConfig[weaponId];
          var attrValues = (_attrValues = {}, _attrValues[WeaponAttributeType.id] = 0, _attrValues[WeaponAttributeType.isDisorder] = false, _attrValues[WeaponAttributeType.castNum] = 0, _attrValues[WeaponAttributeType.castDelay] = 0, _attrValues[WeaponAttributeType.chargeTime] = 0, _attrValues[WeaponAttributeType.mpMax] = 0, _attrValues[WeaponAttributeType.mpChargeSpeed] = 0, _attrValues[WeaponAttributeType.capacity] = 0, _attrValues[WeaponAttributeType.scatter] = 0, _attrValues[WeaponAttributeType.skillPlugin] = [], _attrValues);
          for (var attr in attrValues) {
            if (attr in configData) {
              var value = 0;
              // 如果configData[attr]是数组
              if (Array.isArray(configData[attr])) {
                var value1 = configData[attr][0];
                var value2 = configData[attr][1];
                value = this.randomBetweenTwoValues(value1, value2);
              } else {
                value = configData[attr];
              }
              attrValues[attr] = value;
            }
          }
          return attrValues;
        }

        /**
         * 生成唯一ID
         * @returns 生成的唯一ID
         */;
        _proto.generateUniqueId = function generateUniqueId() {
          //TODO:后面优化
          return Math.floor(Math.random() * 90000000) + 10000000;
        }

        /**
         * 获取角色属性
         * @param roleId 角色ID
         * @param lv 等级
         * @param difficulty 难度
         * @returns 角色属性数据
         */;
        _proto.getRoleAttribute = function getRoleAttribute(roleId, lv, difficulty) {
          var _ref3;
          var roleConfig = DB_RoleConfig[roleId];
          return _ref3 = {}, _ref3[AttributeType.hp] = (roleConfig[AttributeType.hp] + this.getUpgradeAttribute(roleId, lv, AttributeType.hp)) * difficulty, _ref3[AttributeType.hpRecover] = (roleConfig[AttributeType.hpRecover] + this.getUpgradeAttribute(roleId, lv, AttributeType.hpRecover)) * difficulty, _ref3[AttributeType.atk] = (roleConfig[AttributeType.atk] + this.getUpgradeAttribute(roleId, lv, AttributeType.atk)) * difficulty, _ref3[AttributeType.atkSpeed] = roleConfig[AttributeType.atkSpeed] + this.getUpgradeAttribute(roleId, lv, AttributeType.atkSpeed), _ref3[AttributeType.speed] = roleConfig[AttributeType.speed] + this.getUpgradeAttribute(roleId, lv, AttributeType.speed), _ref3[AttributeType.crit] = roleConfig[AttributeType.crit] + this.getUpgradeAttribute(roleId, lv, AttributeType.crit), _ref3[AttributeType.critDamage] = roleConfig[AttributeType.critDamage] + this.getUpgradeAttribute(roleId, lv, AttributeType.critDamage), _ref3[AttributeType.cdReduce] = roleConfig[AttributeType.cdReduce] + this.getUpgradeAttribute(roleId, lv, AttributeType.cdReduce), _ref3[AttributeType.reflectDamage] = roleConfig[AttributeType.reflectDamage] + this.getUpgradeAttribute(roleId, lv, AttributeType.reflectDamage), _ref3;
        }

        /**
         * 获取升级属性
         * @param roleId 角色ID
         * @param lv 等级
         * @param arr 属性类型
         * @returns 升级后的属性值
         */;
        _proto.getUpgradeAttribute = function getUpgradeAttribute(roleId, lv, arr) {
          var _roleConfig$upgradeAt;
          var roleConfig = DB_RoleConfig[roleId];
          var upgradeLv = lv - 1;
          return upgradeLv * ((_roleConfig$upgradeAt = roleConfig.upgradeAttribute[arr]) != null ? _roleConfig$upgradeAt : 0);
        }

        /**
         * 获取敌对阵营
         * @param faction 当前阵营
         * @returns 敌对阵营
         */;
        _proto.getEnemyFaction = function getEnemyFaction(faction) {
          if (faction == FactionType.ALLY) {
            return FactionType.ENEMY;
          } else if (faction == FactionType.ENEMY) {
            return FactionType.ALLY;
          }
        }

        /**
         * 根据类型和ID获取物品配置
         * @param id 物品ID
         * @param type 物品类型
         * @returns 物品配置
         */;
        _proto.getItemConfigByTypeAndId = function getItemConfigByTypeAndId(id, type) {
          var config = null;
          if (type == ItemType.skillPlugin) {
            config = DB_SkillPluginConfig[id];
          } else if (type == ItemType.weapon) {
            config = DB_WeaponConfig[id];
          } else if (type == ItemType.magicStone) {
            config = DB_MagicStoneConfig[id];
          } else if (type == ItemType.resource) {
            config = DB_ResourceConfig[id];
          } else if (type == ItemType.equipment) {
            config = DB_EquipConfig[id];
          }
          return config;
        };
        return Help;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.player.ts", ['cc', './app.ts', './export.type.ts', './EquipConfig.ts', './MagicStoneConfig.ts'], function (exports) {
  var cclegacy, js, app, WeaponAttributeType, ItemType, AttributeType, DB_EquipConfig, DB_MagicStoneConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      app = module.app;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
      ItemType = module.ItemType;
      AttributeType = module.AttributeType;
    }, function (module) {
      DB_EquipConfig = module.DB_EquipConfig;
    }, function (module) {
      DB_MagicStoneConfig = module.DB_MagicStoneConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a19dwlYqlMO7JZnnJZermx", "store.player", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var Player = exports('default', /*#__PURE__*/function () {
        function Player() {
          /**id */
          this.id = 0;
          /**角色id */
          this.roleId = 0;
          /**等级 */
          this.lv = 1;
          /**经验 */
          this.exp = 0;
          /**装备 */
          this.equipments = new Map();
          /**背包 */
          this.bag = new Map();
          /**仓库 */
          this.warehouse = [];
          /**战斗道具 */
          this.attleItem = [];
          /**战斗武器 */
          this.battleWeapon = [];
          /**属性 */
          this.attributes = void 0;
        }
        var _proto = Player.prototype;
        //TODO:后面优化属性结构
        /**初始化数据 */
        _proto.init = function init(data) {
          var _data$id, _data$roleId, _data$lv, _data$exp, _data$equipments, _data$bag, _data$warehouse, _data$attleItem, _weapon, _data$battleWeapon;
          this.id = (_data$id = data.id) != null ? _data$id : 1;
          this.roleId = (_data$roleId = data.roleId) != null ? _data$roleId : 10001;
          this.lv = (_data$lv = data.lv) != null ? _data$lv : 1;
          this.exp = (_data$exp = data.exp) != null ? _data$exp : 0;
          this.equipments = (_data$equipments = data.equipments) != null ? _data$equipments : new Map();
          this.bag = (_data$bag = data.bag) != null ? _data$bag : new Map();
          this.warehouse = (_data$warehouse = data.warehouse) != null ? _data$warehouse : [];
          this.attleItem = (_data$attleItem = data.attleItem) != null ? _data$attleItem : [];
          this.attributes = app.store.help.getRoleAttribute(this.roleId, this.lv, 1);
          // this.attributes[AttributeType.hp] = 100; //TODO:测试代码

          //TODO:测试代码
          var weapon = (_weapon = {}, _weapon[WeaponAttributeType.id] = 100101, _weapon[WeaponAttributeType.isDisorder] = false, _weapon[WeaponAttributeType.castNum] = 1, _weapon[WeaponAttributeType.castDelay] = 0.1, _weapon[WeaponAttributeType.chargeTime] = 0.5, _weapon[WeaponAttributeType.mpMax] = 600, _weapon[WeaponAttributeType.mpChargeSpeed] = 10, _weapon[WeaponAttributeType.capacity] = 5, _weapon[WeaponAttributeType.scatter] = 10, _weapon[WeaponAttributeType.skillPlugin] = [100101], _weapon);
          for (var i = 0; i < 8; i++) {
            var equipId = [100101, 200101, 300101, 400101, 500101, 600101, 700101, 800101];
            var _data = app.store.help.createEquipment(equipId[i]);
            var itemData = {
              id: _data.id,
              num: 1,
              type: ItemType.equipment,
              data: _data
            };
            console.log('equipment itemData', itemData);
            this.putItemToBag(itemData);
          }
          for (var _i = 0; _i < 5; _i++) {
            var _itemData = {
              id: 100101,
              num: 1,
              type: ItemType.magicStone
            };
            console.log('magicStone itemData', _itemData);
            this.putItemToBag(_itemData);
          }
          this.battleWeapon = (_data$battleWeapon = data.battleWeapon) != null ? _data$battleWeapon : [{
            id: 100101,
            num: 1,
            type: ItemType.weapon,
            data: weapon
          }];
        }

        //背包格子和武器技能格子交换
        ;

        _proto.exchangeWeaponAndBag = function exchangeWeaponAndBag(bagSlotIndex, weaponSlotIndex, weaponIndex) {
          if (bagSlotIndex >= 0 && weaponSlotIndex >= 0) {
            if (!this.getBagItem(ItemType.skillPlugin)[bagSlotIndex] || this.getBagItem(ItemType.skillPlugin)[bagSlotIndex].id > 0 && this.getBagItem(ItemType.skillPlugin)[bagSlotIndex].type == ItemType.skillPlugin) {
              var wewaponItemData = this.battleWeapon[weaponIndex];
              var weaponData = wewaponItemData.data;
              if (weaponSlotIndex < weaponData[WeaponAttributeType.capacity]) {
                var temp = weaponData[WeaponAttributeType.skillPlugin][weaponSlotIndex];
                weaponData[WeaponAttributeType.skillPlugin][weaponSlotIndex] = this.getBagItem(ItemType.skillPlugin)[bagSlotIndex] ? this.getBagItem(ItemType.skillPlugin)[bagSlotIndex].id : undefined;
                this.getBagItem(ItemType.skillPlugin)[bagSlotIndex] = temp > 0 ? {
                  id: temp,
                  type: ItemType.skillPlugin
                } : undefined;
              }
            }
          }
        }

        //增加道具到背包
        ;

        _proto.addItemToBag = function addItemToBag(item) {
          //背包空位置
          var index = this.getBagItem(item.type).findIndex(function (v) {
            return !v || !v.id;
          });
          var bagCapacity = app.config.game.BagCapacity;
          index = index == -1 && this.getBagItem(item.type).length < bagCapacity ? this.getBagItem(item.type).length : index;
          if (index >= 0 && index < app.config.game.BagCapacity) {
            this.getBagItem(item.type)[index] = item;
            return true;
          }
          return false;
        }

        //删除背包的道具
        ;

        _proto.removeItemFromBag = function removeItemFromBag(index, type) {
          this.getBagItem(type)[index] = undefined;
        }

        //增加道具到仓库
        ;

        _proto.addItemToWarehouse = function addItemToWarehouse(item) {
          //仓库空位置
          var index = this.warehouse.findIndex(function (v) {
            return !v || !v.id;
          });
          var warehouseCapacity = app.config.game.WarehouseCapacity;
          index = index == -1 && this.warehouse.length < warehouseCapacity ? this.warehouse.length : index;
          if (index >= 0 && index < app.config.game.WarehouseCapacity) {
            this.warehouse[index] = item;
            return true;
          }
          return false;
        }

        //删除仓库的道具
        ;

        _proto.removeItemFromWarehouse = function removeItemFromWarehouse(index) {
          this.warehouse[index] = undefined;
        }

        //增加经验
        ;

        _proto.addExp = function addExp(exp) {
          //是否升级
          var isUpgrade = false;
          this.exp += exp;
          var lv = this.lv;
          while (this.exp >= this.getExpToUpgrade()) {
            this.exp -= this.getExpToUpgrade();
            lv++;
          }
          isUpgrade = lv > this.lv;
          this.lv = lv;
          if (isUpgrade) {
            this.attributes = app.store.help.getRoleAttribute(this.roleId, this.lv, 1);
          }
          return isUpgrade;
        }

        /**
         * 获取当前等级需要升级的经验
         * @param lv 当前等级
         * @returns 升级所需经验值
         */;
        _proto.getExpToUpgrade = function getExpToUpgrade() {
          var lv = this.lv;
          var expNeeded = 0;
          if (lv <= 30) {
            expNeeded = 100 * Math.pow(1.1, lv - 1);
          } else if (lv <= 60) {
            expNeeded = 100 * Math.pow(1.1, 29) + 200 * Math.pow(1.2, lv - 30);
          } else {
            expNeeded = 100 * Math.pow(1.1, 29) + 200 * Math.pow(1.2, 30) + 400 * Math.pow(1.4, lv - 60);
          }
          return Math.floor(expNeeded);
        }

        //获取背包的道具
        ;

        _proto.getBagItem = function getBagItem(type) {
          var bag = this.bag.get(type);
          if (!bag) {
            bag = [];
            this.bag.set(type, bag);
          }
          return bag;
        }

        //放入背包道具
        ;

        _proto.putItemToBag = function putItemToBag(item) {
          var bag = this.getBagItem(item.type);
          if (bag.length >= app.config.game.BagCapacity) {
            console.warn("\u80CC\u5305\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u653E\u5165\u9053\u5177");
            return false;
          } else {
            bag.push(item);
            return true;
          }
        }

        //卸载装备
        ;

        _proto.unequipItem = function unequipItem(slot) {
          var item = this.equipments.get(slot);
          if (item) {
            this.putItemToBag(item);
            this.equipments.set(slot, undefined);

            //TODO:后面优化属性结构
            var data = item.data;
            this.attributes[AttributeType.hp] -= data.hp;
            this.attributes[AttributeType.hpRecover] -= data.hpRecover;
            this.attributes[AttributeType.atk] -= data.atk;
            this.attributes[AttributeType.atkSpeed] -= data.atkSpeed;
            // this.attributes[AttributeType.speed] -= data.speed;
            this.attributes[AttributeType.crit] -= data.crit;
            this.attributes[AttributeType.critDamage] -= data.critDamage;
            this.attributes[AttributeType.cdReduce] -= data.cdReduce;
            this.attributes[AttributeType.reflectDamage] -= data.reflectDamage;

            //卸载魔法石
            var magicStone = data.magicStone;
            if (magicStone.length > 0) {
              for (var i = 0; i < magicStone.length; i++) {
                //TODO:后面排除重复添加
                var config = DB_MagicStoneConfig[magicStone[i]];
                var comp = js.getClassByName(config.className);
                app.manager.battle.playerEntity.remove(comp);
              }
            }
          }
        }

        //装备装备
        ;

        _proto.equipItem = function equipItem(index) {
          var bag = this.getBagItem(ItemType.equipment);
          var equipData = bag[index];
          if (equipData) {
            var slot = DB_EquipConfig[equipData.id].type;
            this.unequipItem(slot);
            this.equipments.set(slot, equipData);
            bag.splice(index, 1);

            //TODO:后面优化属性结构
            var data = equipData.data;
            this.attributes[AttributeType.hp] += data.hp;
            this.attributes[AttributeType.hpRecover] += data.hpRecover;
            this.attributes[AttributeType.atk] += data.atk;
            this.attributes[AttributeType.atkSpeed] += data.atkSpeed;
            // this.attributes[AttributeType.speed] += data.speed;
            this.attributes[AttributeType.crit] += data.crit;
            this.attributes[AttributeType.critDamage] += data.critDamage;
            this.attributes[AttributeType.cdReduce] += data.cdReduce;
            this.attributes[AttributeType.reflectDamage] += data.reflectDamage;

            //添加魔法石
            var magicStone = data.magicStone;
            if (magicStone.length > 0) {
              for (var i = 0; i < magicStone.length; i++) {
                //TODO:后面排除重复添加
                var config = DB_MagicStoneConfig[magicStone[i]];
                var comp = js.getClassByName(config.className);
                app.manager.battle.playerEntity.add(comp);
              }
            }
          }
        };
        _proto.save = function save() {
          var data = {
            id: this.id,
            roleId: this.roleId,
            lv: this.lv,
            exp: this.exp,
            equipments: this.equipments,
            bag: this.bag,
            warehouse: this.warehouse,
            attleItem: this.attleItem,
            battleWeapon: this.battleWeapon
          };
          app.lib.storage.set('GameData-player', data);
        };
        return Player;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-model', 'chunks:///_virtual/app-model'); 
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