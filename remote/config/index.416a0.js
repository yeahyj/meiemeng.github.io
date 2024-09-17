System.register("chunks:///_virtual/CompConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fedaaTOjmhJqJJxRO5/uoHe", "CompConfig", undefined);
      var DB_CompConfig = exports('DB_CompConfig', {
        '100101': {
          'id': 100101,
          'className': 'Enemy1FsmComp',
          'des': '敌人行为树'
        },
        '100201': {
          'id': 100201,
          'className': 'DropComp',
          'des': '掉落道具'
        },
        '100202': {
          'id': 100202,
          'className': 'DropPlayerExpComp',
          'des': '掉落玩家经验'
        },
        '100301': {
          'id': 100301,
          'className': 'NotOutBoundsComp',
          'des': '不出边界'
        },
        '200101': {
          'id': 200101,
          'className': 'InfiniteMapCom',
          'des': '无限地图'
        },
        '200102': {
          'id': 200102,
          'className': 'DungeonComp',
          'des': '地牢地图'
        },
        '200103': {
          'id': 200103,
          'className': 'BigMapComp',
          'des': '大地图'
        },
        '300101': {
          'id': 300101,
          'className': 'RandomlyGenerateMonsterComp',
          'des': '随机生成敌人'
        },
        '400101': {
          'id': 400101,
          'className': 'DropTaskExpComp',
          'des': '敌人死亡增加任务经验'
        },
        '500101': {
          'id': 500101,
          'className': 'TaskExpComp',
          'des': '收集精魄任务初始化'
        },
        '500201': {
          'id': 500201,
          'className': 'GenerateOneRoleComp',
          'des': '消灭其他敌人，生成一个boss,消灭一个boss'
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/config", ['./CompConfig.ts', './EquipConfig.ts', './IconConfig.ts', './InteractionConfig.ts', './MapConfig.ts', './MonsterFactoryConfig.ts', './ResourceConfig.ts', './RoleConfig.ts', './SkillPluginConfig.ts', './TaskConfig.ts', './WeaponConfig.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/EquipConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9fd49E7oGFI9IRdGA34lMLt", "EquipConfig", undefined);
      var DB_EquipConfig = exports('DB_EquipConfig', {
        '100101': {
          'id': 100101,
          'name': '小匕首',
          'type': 'weapon',
          'quality': 1,
          'attrLimit': 3,
          'lvLimit': 1,
          'reduceLv': [],
          'atk': [1, 5],
          'def': [1, 5],
          'hp': [1, 5],
          'hpRecover': [1, 5],
          'mp': [1, 5],
          'mpRecover': [1, 5],
          'atkSpeed': [0.01, 0.02],
          'crit': [0.01, 0.02],
          'critDamage': [0.01, 0.02],
          'cd': [0.01, 0.02],
          'hpSteal': [0.01, 0.02],
          'sockets': [1, 2],
          'specialAttr': []
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IconConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49a6fPK6atKo4uZTvF/afuO", "IconConfig", undefined);
      var DB_IconConfig = exports('DB_IconConfig', {
        '500001': {
          'id': 500001,
          'path': '闪闪币'
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InteractionConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ef161MNLYtNgqCu02mK80Vj", "InteractionConfig", undefined);
      var DB_InteractionConfig = exports('DB_InteractionConfig', {
        '100101': {
          'id': 100101,
          'txt': '仓库',
          'resultType': 'openUI',
          'resultData': 'PopWarehouse',
          'unlockKey': [],
          'unlockValue': []
        },
        '200101': {
          'id': 200101,
          'txt': '传送',
          'resultType': 'openUI',
          'resultData': 'PopTransmit',
          'unlockKey': [],
          'unlockValue': []
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "707beVYHKxOurfH/vvOVNrb", "MapConfig", undefined);
      var DB_MapConfig = exports('DB_MapConfig', {
        '100101': {
          'id': 100101,
          'name': '城镇1',
          'type': 'city',
          'size': [2000, 1500],
          'npc': [{
            'id': 100101,
            'pos': [300, 900]
          }, {
            'id': 200101,
            'pos': [500, 900]
          }],
          'startPos': [50, 700],
          'comps': [],
          'roleExtraComp': [100301],
          'skillExtraComp': [],
          'task': null
        },
        '200101': {
          'id': 200101,
          'name': '小秘境',
          'type': 'battlefield',
          'size': [],
          'npc': [],
          'startPos': [0],
          'comps': [200101],
          'roleExtraComp': [100201, 100202],
          'skillExtraComp': [],
          'task': 100101
        },
        '200201': {
          'id': 200201,
          'name': '地牢',
          'type': 'battlefield',
          'size': [1500, 1500],
          'npc': [],
          'startPos': [750, 750],
          'comps': [200102],
          'roleExtraComp': [],
          'skillExtraComp': [],
          'task': null
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MonsterFactoryConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d3762xA77dLvoOcpgoZut37", "MonsterFactoryConfig", undefined);
      var DB_MonsterFactoryConfig = exports('DB_MonsterFactoryConfig', {
        '1001': {
          'id': 1001,
          'monster': [{
            'id': 20001,
            'probability': 10
          }, {
            'id': 30001,
            'probability': 1
          }]
        },
        '2001': {
          'id': 2001,
          'monster': [{
            'id': 40001,
            'probability': 1
          }]
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f68cDurStN6oRoFlLMbaIH", "ResourceConfig", undefined);
      var DB_ResourceConfig = exports('DB_ResourceConfig', {
        '100101': {
          'id': 100101,
          'name': '闪闪币'
        },
        '100102': {
          'id': 100102,
          'name': '金币'
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f598C7pzNORZTlzwbhtOfV", "RoleConfig", undefined);
      var DB_RoleConfig = exports('DB_RoleConfig', {
        '10001': {
          'id': 10001,
          'path': '10002',
          'type': 'role',
          'comp': [],
          'interaction': [],
          'name': '角色1',
          'agentWeight': 0.5,
          'colliderSize': [30, 80],
          'pursueRadius': 500,
          'attackRadius': 200,
          'hp': 1000,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 200,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': []
        },
        '20001': {
          'id': 20001,
          'path': '10001',
          'type': 'normal',
          'comp': [100101],
          'interaction': [],
          'name': '怪物1',
          'agentWeight': 0.3,
          'colliderSize': [30, 80],
          'pursueRadius': 900,
          'attackRadius': 150,
          'hp': 100,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 100,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': [[100001]]
        },
        '30001': {
          'id': 30001,
          'path': '10003',
          'type': 'elite',
          'comp': [100101],
          'interaction': [],
          'name': '怪物1',
          'agentWeight': 0.3,
          'colliderSize': [30, 80],
          'pursueRadius': 900,
          'attackRadius': 300,
          'hp': 500,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 100,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': [[100001]]
        },
        '40001': {
          'id': 40001,
          'path': '10004',
          'type': 'boss',
          'comp': [100101],
          'interaction': [],
          'name': '怪物1',
          'agentWeight': 0.7,
          'colliderSize': [30, 80],
          'pursueRadius': 900,
          'attackRadius': 150,
          'hp': 2000,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 200,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': [[100001]]
        },
        '100101': {
          'id': 100101,
          'path': '10004',
          'type': 'npc',
          'comp': [],
          'interaction': [100101],
          'name': '仓库管理员',
          'agentWeight': 1,
          'colliderSize': [30, 80],
          'pursueRadius': 900,
          'attackRadius': 150,
          'hp': 2000,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 200,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': [[100001]]
        },
        '200101': {
          'id': 200101,
          'path': '10001',
          'type': 'mapElement',
          'comp': [],
          'interaction': [200101],
          'name': '传送',
          'agentWeight': 1,
          'colliderSize': [30, 80],
          'pursueRadius': 900,
          'attackRadius': 150,
          'hp': 2000,
          'hpRecover': 0,
          'atk': 100,
          'atkSpeed': 1,
          'cdReduce': 0,
          'speed': 200,
          'crit': 0,
          'critDamage': 4,
          'upgradeAttribute': {
            'hp': 500,
            'hpRecover': 1,
            'atk': 50,
            'atkSpeed': 0,
            'cdReduce': 0,
            'speed': 0,
            'crit': 0,
            'critDamage': 0
          },
          'WeaponDepot': [[100001]]
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillPluginConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa7d4b1LiJCOKrSR9iwfQFA", "SkillPluginConfig", undefined);
      var DB_SkillPluginConfig = exports('DB_SkillPluginConfig', {
        '100001': {
          id: 100001,
          type: 'skill',
          influence: 'skill',
          isCast: true,
          extraCast: 0,
          className: 'NormalAtkComp',
          name: '普通攻击',
          resourceCost: [],
          mpCost: 10,
          damage: 100,
          speed: 500,
          lifeTime: 5,
          maxLifeTime: 10,
          delayTime: 0.3,
          chargeTime: 3,
          scatteringAngle: 0,
          pierce: 1,
          collisionInterval: 999,
          crit: 0,
          critDamage: 0,
          unlockLv: 9999,
          dropWeight: 0
        },
        '100101': {
          id: 100101,
          type: 'skill',
          influence: 'skill',
          isCast: true,
          extraCast: 0,
          className: 'FireballComp',
          name: '火球术',
          resourceCost: [],
          mpCost: 10,
          damage: 100,
          speed: 500,
          lifeTime: 1,
          maxLifeTime: 10,
          delayTime: 0.3,
          chargeTime: 0.5,
          scatteringAngle: 10,
          pierce: 1,
          collisionInterval: 999,
          crit: 0.1,
          critDamage: 2,
          unlockLv: 1,
          dropWeight: 100
        },
        '100102': {
          id: 100102,
          type: 'skill',
          influence: 'skill',
          isCast: true,
          extraCast: 0,
          className: 'CollisionFireballComp',
          name: '碰撞火球术',
          resourceCost: [],
          mpCost: 10,
          damage: 100,
          speed: 500,
          lifeTime: 1,
          maxLifeTime: 10,
          delayTime: 0.3,
          chargeTime: 0.5,
          scatteringAngle: 10,
          pierce: 1,
          collisionInterval: 999,
          crit: 0.1,
          critDamage: 2,
          unlockLv: 10,
          dropWeight: 20
        },
        '100201': {
          id: 100201,
          type: 'skill',
          influence: 'skill',
          isCast: true,
          extraCast: 0,
          className: 'BombComp',
          name: '炸弹',
          resourceCost: [],
          mpCost: 10,
          damage: 100,
          speed: 500,
          lifeTime: 1,
          maxLifeTime: 10,
          delayTime: 0.3,
          chargeTime: 0.5,
          scatteringAngle: 10,
          pierce: 1,
          collisionInterval: 999,
          crit: 0.1,
          critDamage: 2,
          unlockLv: 5,
          dropWeight: 50
        },
        '100251': {
          id: 100251,
          type: 'effect',
          influence: 'skill',
          isCast: false,
          extraCast: 0,
          className: 'BombExplosionComp',
          name: '炸弹爆炸效果',
          resourceCost: [],
          mpCost: 0,
          damage: 0,
          speed: 0,
          lifeTime: 5,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 1,
          collisionInterval: 999,
          crit: 0.1,
          critDamage: 2,
          unlockLv: 9999,
          dropWeight: 0
        },
        '100301': {
          id: 100301,
          type: 'skill',
          influence: 'skill',
          isCast: true,
          extraCast: 0,
          className: 'ChainSawComp',
          name: '链锯',
          resourceCost: [],
          mpCost: 10,
          damage: 100,
          speed: 500,
          lifeTime: 5,
          maxLifeTime: 10,
          delayTime: 0.3,
          chargeTime: 0.5,
          scatteringAngle: 10,
          pierce: 999,
          collisionInterval: 0.2,
          crit: 0.1,
          critDamage: 2,
          unlockLv: 15,
          dropWeight: 20
        },
        '200101': {
          id: 200101,
          type: 'modify',
          influence: 'move',
          isCast: false,
          extraCast: 0,
          className: 'LinearMoveComp',
          name: '直线发射',
          resourceCost: [],
          mpCost: 0,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 9999,
          dropWeight: 0
        },
        '200102': {
          id: 200102,
          type: 'modify',
          influence: 'move',
          isCast: false,
          extraCast: 0,
          className: 'PursueEnemyMoveComp',
          name: '追踪敌人移动',
          resourceCost: [],
          mpCost: 0,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 9999,
          dropWeight: 0
        },
        '200201': {
          id: 200201,
          type: 'modify',
          influence: 'multipleCast',
          isCast: true,
          extraCast: 2,
          className: 'DoubleCastComp',
          name: '双倍释放',
          resourceCost: [],
          mpCost: 10,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 20,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 8,
          dropWeight: 10
        },
        '200301': {
          id: 200301,
          type: 'modify',
          influence: 'trigger',
          isCast: false,
          extraCast: 1,
          className: 'CollisionTriggerComp',
          name: '碰撞触发',
          resourceCost: [],
          mpCost: 0,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 9999,
          dropWeight: 0
        },
        '200401': {
          id: 200401,
          type: 'modify',
          influence: 'modify',
          isCast: false,
          extraCast: 0,
          className: 'CollisionReboundComp',
          name: '碰撞反弹',
          resourceCost: [],
          mpCost: 10,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 9999,
          dropWeight: 0
        },
        '200402': {
          id: 200402,
          type: 'modify',
          influence: 'modify',
          isCast: false,
          extraCast: 0,
          className: 'CollisionMotionlessComp',
          name: '碰撞静止',
          resourceCost: [],
          mpCost: 10,
          damage: 0,
          speed: 0,
          lifeTime: 0,
          maxLifeTime: 0,
          delayTime: 1,
          chargeTime: 0.1,
          scatteringAngle: 0,
          pierce: 0,
          collisionInterval: null,
          crit: null,
          critDamage: null,
          unlockLv: 9999,
          dropWeight: 0
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c96505MqmhF94M4g7SJ5bQe", "TaskConfig", undefined);
      var DB_TaskConfig = exports('DB_TaskConfig', {
        '100101': {
          'id': 100101,
          'name': '收集精魄',
          'nextId': 100201,
          'comps': [500101, 300101],
          'roleExtraComp': [400101],
          'skillExtraComp': [],
          'data': {
            'monsterFactory': 1001
          },
          'des': '消灭敌人可以收集精魄'
        },
        '100201': {
          'id': 100201,
          'name': '消灭Boss',
          'nextId': null,
          'comps': [500201],
          'roleExtraComp': [],
          'skillExtraComp': [],
          'data': {
            'monsterFactory': 2001
          },
          'des': '消灭其他敌人，生成一个boss'
        },
        '100202': {
          'id': 100202,
          'name': '消灭Boss',
          'nextId': null,
          'comps': [],
          'roleExtraComp': [],
          'skillExtraComp': [],
          'data': null,
          'des': '不会消灭其他敌人，生成一个boss'
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeaponConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77960qc99BMV5iwI/cQgqSR", "WeaponConfig", undefined);
      var DB_WeaponConfig = exports('DB_WeaponConfig', {
        '100101': {
          'id': 100101,
          'name': '小法杖',
          'isDisorder': false,
          'castNum': 1,
          'attrLimit': [0.1, 0.1],
          'lvLimit': [0.5, 0.5],
          'reduceLv': [400, 600],
          'atk': [1, 5],
          'def': [1, 5],
          'hp': [1, 5]
        }
      });
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/config', 'chunks:///_virtual/config'); 
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