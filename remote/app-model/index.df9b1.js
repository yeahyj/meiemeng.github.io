System.register("chunks:///_virtual/app-model", ['./config.game.ts', './export.type.ts', './store.game.ts', './store.player.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/config.game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d293bAC3XdCpL8FJpeJKpuv", "config.game", undefined);
      // config中不能定义任何方法, 任何变量在外部访问都是readonly
      var Game = exports('default', /*#__PURE__*/_createClass(function Game() {
        _classCallCheck(this, Game);
        /**战斗武器个数 */
        _defineProperty(this, "BattleWeaponNum", 3);
        /**战斗道具个数 */
        _defineProperty(this, "BattleItemNum", 0);
        /**背包格子数 */
        _defineProperty(this, "BagCapacity", 20);
        /**仓库格子数 */
        _defineProperty(this, "WarehouseCapacity", 100);
        /**普通怪物技能插件掉落概率 */
        _defineProperty(this, "NormalMonsterSkillPluginDropRate", 0.02);
        /**精英怪物技能插件掉落概率 */
        _defineProperty(this, "EliteMonsterSkillPluginDropRate", 0.06);
        /**boss怪物技能插件掉落概率 */
        _defineProperty(this, "BossMonsterSkillPluginDropRate", 0.1);
        /**道具收集距离 */
        _defineProperty(this, "CollectItemDistance", 100);
        /**小秘境难度 */
        _defineProperty(this, "MiniDungeonDifficulty", [0.5, 1, 3, 6]);
        /**小秘境难度名字 */
        _defineProperty(this, "MiniDungeonDifficultyName", ['简单', '普通', '困难', '地狱']);
        /**角色满级 */
        _defineProperty(this, "PlayerMaxLv", 70);
      }));
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
      cclegacy._RF.push({}, "b20efjNx5VI55n41mbdWKvS", "export.type", undefined); // 🔥切记: 当前文件处于分包中, 由于加载顺序的原因，不可以在「主包」中使用此文件内导出的变量
      // 存放直接导出的interface、type或enum等
      // export type IString = string;
      // export enum Type { None };
      /**装备类型 */
      /**装备部位 */
      var EquipmentSlot = exports('EquipmentSlot', /*#__PURE__*/function (EquipmentSlot) {
        EquipmentSlot[EquipmentSlot["Head"] = 1] = "Head";
        EquipmentSlot[EquipmentSlot["Chest"] = 2] = "Chest";
        EquipmentSlot[EquipmentSlot["Leg"] = 3] = "Leg";
        EquipmentSlot[EquipmentSlot["Hand"] = 4] = "Hand";
        EquipmentSlot[EquipmentSlot["Foot"] = 5] = "Foot";
        return EquipmentSlot;
      }({}));

      /**魔法杖类型 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _createClass, _classCallCheck, cclegacy, app;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      cclegacy._RF.push({}, "709d0GRCitND5vlAD4OlWul", "store.game", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var Game = exports('default', /*#__PURE__*/function () {
        function Game() {
          _classCallCheck(this, Game);
        }
        _createClass(Game, [{
          key: "init",
          value: function init() {
            var _app$lib$storage$get, _data$player;
            var data = (_app$lib$storage$get = app.lib.storage.get('GameData-player')) !== null && _app$lib$storage$get !== void 0 ? _app$lib$storage$get : {};
            app.store.player.init((_data$player = data['player']) !== null && _data$player !== void 0 ? _data$player : {});
          }
        }, {
          key: "save",
          value: function save() {
            app.store.player.save();
          }
        }]);
        return Game;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleUtil.ts', './ConstType.ts', './app.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, BattleUtil, WeaponAttributeType, ItemType, app;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BattleUtil = module.default;
    }, function (module) {
      WeaponAttributeType = module.WeaponAttributeType;
      ItemType = module.ItemType;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a19dwlYqlMO7JZnnJZermx", "store.player", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var Player = exports('default', /*#__PURE__*/function () {
        function Player() {
          _classCallCheck(this, Player);
          /**id */
          _defineProperty(this, "id", 0);
          /**角色id */
          _defineProperty(this, "roleId", 0);
          /**等级 */
          _defineProperty(this, "lv", 1);
          /**经验 */
          _defineProperty(this, "exp", 0);
          /**装备 */
          _defineProperty(this, "equipments", new Map());
          /**背包 */
          _defineProperty(this, "bag", []);
          /**仓库 */
          _defineProperty(this, "warehouse", []);
          /**战斗道具 */
          _defineProperty(this, "attleItem", []);
          /**战斗武器 */
          _defineProperty(this, "battleWeapon", []);
          /**属性 */
          _defineProperty(this, "attributes", void 0);
        }
        _createClass(Player, [{
          key: "init",
          value: /**初始化数据 */
          function init(data) {
            var _data$id, _data$roleId, _data$lv, _data$exp, _data$equipments, _data$bag, _data$warehouse, _data$attleItem, _weapon, _data$battleWeapon;
            this.id = (_data$id = data.id) !== null && _data$id !== void 0 ? _data$id : 1;
            this.roleId = (_data$roleId = data.roleId) !== null && _data$roleId !== void 0 ? _data$roleId : 10001;
            this.lv = (_data$lv = data.lv) !== null && _data$lv !== void 0 ? _data$lv : 1;
            this.exp = (_data$exp = data.exp) !== null && _data$exp !== void 0 ? _data$exp : 0;
            this.equipments = (_data$equipments = data.equipments) !== null && _data$equipments !== void 0 ? _data$equipments : new Map();
            this.bag = (_data$bag = data.bag) !== null && _data$bag !== void 0 ? _data$bag : [];
            this.warehouse = (_data$warehouse = data.warehouse) !== null && _data$warehouse !== void 0 ? _data$warehouse : [];
            this.attleItem = (_data$attleItem = data.attleItem) !== null && _data$attleItem !== void 0 ? _data$attleItem : [];
            this.attributes = BattleUtil.getRoleAttribute(this.roleId, this.lv, 1);
            // this.attributes[AttributeType.hp] = 100; //TODO:测试代码

            //TODO:测试代码
            var weapon = (_weapon = {}, _defineProperty(_weapon, WeaponAttributeType.id, 100101), _defineProperty(_weapon, WeaponAttributeType.isDisorder, false), _defineProperty(_weapon, WeaponAttributeType.castNum, 1), _defineProperty(_weapon, WeaponAttributeType.castDelay, 0.1), _defineProperty(_weapon, WeaponAttributeType.chargeTime, 0.5), _defineProperty(_weapon, WeaponAttributeType.mpMax, 600), _defineProperty(_weapon, WeaponAttributeType.mpChargeSpeed, 10), _defineProperty(_weapon, WeaponAttributeType.capacity, 5), _defineProperty(_weapon, WeaponAttributeType.scatter, 10), _defineProperty(_weapon, WeaponAttributeType.skillPlugin, [100101]), _weapon);
            this.battleWeapon = (_data$battleWeapon = data.battleWeapon) !== null && _data$battleWeapon !== void 0 ? _data$battleWeapon : [{
              id: 100101,
              num: 1,
              type: ItemType.weapon,
              data: weapon
            }];
          }

          //背包格子和武器技能格子交换
        }, {
          key: "exchangeWeaponAndBag",
          value: function exchangeWeaponAndBag(bagSlotIndex, weaponSlotIndex, weaponIndex) {
            if (bagSlotIndex >= 0 && weaponSlotIndex >= 0) {
              if (!this.bag[bagSlotIndex] || this.bag[bagSlotIndex].id > 0 && this.bag[bagSlotIndex].type == ItemType.skillPlugin) {
                var wewaponItemData = this.battleWeapon[weaponIndex];
                var weaponData = wewaponItemData.data;
                if (weaponSlotIndex < weaponData[WeaponAttributeType.capacity]) {
                  var temp = weaponData[WeaponAttributeType.skillPlugin][weaponSlotIndex];
                  weaponData[WeaponAttributeType.skillPlugin][weaponSlotIndex] = this.bag[bagSlotIndex] ? this.bag[bagSlotIndex].id : undefined;
                  this.bag[bagSlotIndex] = temp > 0 ? {
                    id: temp,
                    type: ItemType.skillPlugin
                  } : undefined;
                }
              }
            }
          }

          //增加道具到背包
        }, {
          key: "addItemToBag",
          value: function addItemToBag(item) {
            //背包空位置
            var index = this.bag.findIndex(function (v) {
              return !v || !v.id;
            });
            var bagCapacity = app.config.game.BagCapacity;
            index = index == -1 && this.bag.length < bagCapacity ? this.bag.length : index;
            if (index >= 0 && index < app.config.game.BagCapacity) {
              this.bag[index] = item;
              return true;
            }
            return false;
          }

          //删除背包的道具
        }, {
          key: "removeItemFromBag",
          value: function removeItemFromBag(index) {
            this.bag[index] = undefined;
          }

          //增加道具到仓库
        }, {
          key: "addItemToWarehouse",
          value: function addItemToWarehouse(item) {
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
        }, {
          key: "removeItemFromWarehouse",
          value: function removeItemFromWarehouse(index) {
            this.warehouse[index] = undefined;
          }

          //增加经验
        }, {
          key: "addExp",
          value: function addExp(exp) {
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
              this.attributes = BattleUtil.getRoleAttribute(this.roleId, this.lv, 1);
            }
            return isUpgrade;
          }

          /**
           * 获取当前等级需要升级的经验
           * @param lv 当前等级
           * @returns 升级所需经验值
           */
        }, {
          key: "getExpToUpgrade",
          value: function getExpToUpgrade() {
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
        }, {
          key: "save",
          value: function save() {
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
          }
        }]);
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