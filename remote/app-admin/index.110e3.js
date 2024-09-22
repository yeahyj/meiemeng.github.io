System.register("chunks:///_virtual/app-admin", ['./executor.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/executor.ts", ['cc', './app.ts', './index.ts', './index2.ts', './index3.ts', './SoundManager.ts', './UIManager.ts', './config.game.ts', './store.game.ts', './store.help.ts', './store.player.ts'], function (exports) {
  var cclegacy, app, SoundManager, UIManager, Game, Game$1, Help, Player;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }, null, null, null, function (module) {
      SoundManager = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      Game = module.default;
    }, function (module) {
      Game$1 = module.default;
    }, function (module) {
      Help = module.default;
    }, function (module) {
      Player = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f187bY5C+FCHKyW84kaJgMh", "executor", undefined);
      /**界面名字枚举(在main、resources、app-model与app-controller所在的Asset Bundle中无法使用此枚举) @deprecated 请使用UIManager.ViewName*/
      var ViewName = exports('ViewName', UIManager.ViewName);
      /**子界面名字枚举(在main、resources、app-model与app-controller所在的Asset Bundle中无法使用此枚举) @deprecated 请使用UIManager.MiniViewName*/
      var MiniViewName = exports('MiniViewName', UIManager.MiniViewName);
      /**音乐名字枚举(在main、resources、app-model与app-controller所在的Asset Bundle中无法使用此枚举) @deprecated 请使用SoundManager.MusicName*/
      var MusicName = exports('MusicName', SoundManager.MusicName);
      /**音效名字枚举(在main、resources、app-model与app-controller所在的Asset Bundle中无法使用此枚举) @deprecated 请使用SoundManager.EffectName*/
      var EffectName = exports('EffectName', SoundManager.EffectName);
      Object.assign(app.data, {});
      Object.assign(app.config, {
        game: new Game()
      });
      Object.assign(app.store, {
        game: new Game$1(),
        help: new Help(),
        player: new Player()
      });
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-admin', 'chunks:///_virtual/app-admin'); 
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