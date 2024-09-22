System.register("chunks:///_virtual/app.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './handle.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, game, Game, Core, cccInited, appInited;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      cccInited = module.cccInited;
      appInited = module.appInited;
    }],
    execute: function () {
      cclegacy._RF.push({}, "121dfhPYx1FV4MaGWQefe6o", "app", undefined);
      var App = exports('App', /*#__PURE__*/function (_Core) {
        _inheritsLoose(App, _Core);
        function App() {
          return _Core.call(this) || this;
        }
        _createClass(App, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new App();
            return this._inst;
          }
        }]);
        return App;
      }(Core));
      App._inst = null;
      var app = exports('app', App.inst);
      {
        //@ts-ignore
        window['app'] = app;
        //@ts-ignore
        window['App'] = App;
      }
      {
        cccInited && game.once(Game.EVENT_ENGINE_INITED, function () {});
        appInited && app.once(App.EventType.EVENT_APPINIT_FINISHED, function () {});
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAppInit.ts', './app.ts', './Core.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UIOpacity, tween, settings, Settings, assetManager, ModelBundleName, ControllerBundleName, BaseAppInit, app, Core;
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
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      settings = module.settings;
      Settings = module.Settings;
      assetManager = module.assetManager;
    }, function (module) {
      ModelBundleName = module.ModelBundleName;
      ControllerBundleName = module.ControllerBundleName;
      BaseAppInit = module.default;
    }, function (module) {
      app = module.app;
    }, function (module) {
      Core = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "598f2EhUohEebUzsqwXHool", "AppInit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AppInit = exports('AppInit', (_dec = ccclass('AppInit'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAppInit) {
        _inheritsLoose(AppInit, _BaseAppInit);
        function AppInit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseAppInit.call.apply(_BaseAppInit, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "logo", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AppInit.prototype;
        /**
         * 获得用户资源总量，这里返回几，就需要用户自行调用几次nextInit
         */
        _proto.getUserAssetNum = function getUserAssetNum() {
          return 0;
        };
        _proto.onLoad = function onLoad() {
          app.Manager.UI.setting.autoFit = true;
          // 执行初始化操作
          var opacity = this.logo.getComponent(UIOpacity);
          opacity.opacity = 0;
          tween(opacity).to(0.5, {
            opacity: 255
          }).delay(1).to(0.5, {
            opacity: 0
          }).call(function () {}).start();
          this.initData();
        };
        _proto.start = function start() {}

        /**初始化数据 */;
        _proto.initData = function initData() {
          var _this2 = this;
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          Core.inst.lib.task.createAny().add([function (next, retry) {
            app.manager.loader.loadBundle({
              bundle: 'config',
              onComplete: function onComplete() {
                console.log('Config 加载完成');
                next();
              }
            });
          }, function (next, retry) {
            app.manager.loader.loadBundle({
              bundle: 'extensions',
              onComplete: function onComplete() {
                console.log('extensions 加载完成');
                next();
              }
            });
          }, function (next, retry) {
            if (projectBundles.indexOf(ModelBundleName) === -1) return next();
            assetManager.loadBundle(ModelBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            if (projectBundles.indexOf(ControllerBundleName) === -1) return next();
            assetManager.loadBundle(ControllerBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            app.manager.loader.loadBundle({
              bundle: 'battle',
              onComplete: function onComplete() {
                console.log('battle 加载完成');
                next();
              }
            });
          }]).start(function () {
            _this2.startInit();
          });
        };
        _proto.onUserInit = function onUserInit() {
          app.store.game.init();
        }

        // BaseAppInit中使用start方法作为初始化入口，如果重写start方法，请注意调用父类方法
        // protected start() {  }
        ;

        _proto.onFinish = function onFinish() {
          app.store.game.init();
          // 执行完成操作
          this.node.destroy();
        };
        return AppInit;
      }(BaseAppInit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "logo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Audio.ts", ['cc'], function (exports) {
  var cclegacy, AudioSource, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioSource = module.AudioSource;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a40e7emzaxEXKUMqM7SQR28", "Audio", undefined);
      var Audio = exports('default', /*#__PURE__*/function () {
        function Audio() {
          this.volume = 1;
          this.volumeScale = 1;
          this.mute = false;
          this.endedCallback = null;
          this.startedCallback = null;
          this.audioSource = null;
          var node = new Node('audio');
          this.audioSource = node.addComponent(AudioSource);
          node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
          node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this);
        }
        var _proto = Audio.prototype;
        _proto.onAudioEnded = function onAudioEnded() {
          if (this.endedCallback) {
            var endedCallback = this.endedCallback;
            this.endedCallback = null;
            endedCallback();
          }
        };
        _proto.onAudioStarted = function onAudioStarted() {
          if (this.startedCallback) {
            var startedCallback = this.startedCallback;
            this.startedCallback = null;
            startedCallback();
          }
        };
        _proto.play = function play(clip, onEnded, onStarted) {
          if (onEnded === void 0) {
            onEnded = null;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          this.audioSource.clip = clip;
          this.endedCallback = onEnded;
          this.startedCallback = onStarted;
          this.audioSource.play();
          return this;
        };
        _proto.stop = function stop() {
          this.audioSource.stop();
          this.audioSource.node.emit(AudioSource.EventType.ENDED);
          return this;
        };
        _proto.pause = function pause() {
          this.audioSource.pause();
          return this;
        };
        _proto.resume = function resume() {
          this.audioSource.play();
          return this;
        };
        _proto.setVolume = function setVolume(volume, scale) {
          if (volume === void 0) {
            volume = 1;
          }
          this.volume = volume;
          if (typeof scale === 'number') this.volumeScale = scale;
          this.audioSource.volume = volume * this.volumeScale * (this.mute ? 0 : 1);
          return this;
        };
        _proto.getVolume = function getVolume() {
          return this.volume;
        };
        _proto.setVolumeScale = function setVolumeScale(scale) {
          if (scale === void 0) {
            scale = 1;
          }
          this.volumeScale = scale;
          this.audioSource.volume = this.volume * scale * (this.mute ? 0 : 1);
          return this;
        };
        _proto.getVolumeScale = function getVolumeScale() {
          return this.volumeScale;
        };
        _proto.setLoop = function setLoop(loop) {
          this.audioSource.loop = loop;
          return this;
        };
        _proto.getLoop = function getLoop() {
          return this.audioSource.loop;
        };
        _proto.setMute = function setMute(mute) {
          if (mute === void 0) {
            mute = true;
          }
          this.mute = mute;
          this.setVolume(this.volume);
          return this;
        };
        _proto.getMute = function getMute() {
          return this.mute;
        };
        _proto.onEnded = function onEnded(endedCallback) {
          this.endedCallback = endedCallback;
          return this;
        };
        _proto.clear = function clear() {
          this.volume = 1;
          this.volumeScale = 1;
          this.mute = false;
          this.endedCallback = null;
          this.startedCallback = null;
          if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.volume = 1;
            this.audioSource.clip = null;
            this.audioSource.loop = false;
          }
          return this;
        };
        _proto.destroy = function destroy() {
          this.clear();
          this.audioSource.destroy();
          this.audioSource.node.destroy();
          this.audioSource = null;
        };
        return Audio;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioEngine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts'], function (exports) {
  var _createClass, cclegacy, AudioManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a6389cgB9OaYjMP8cuG+mF", "AudioEngine", undefined);
      var AudioEngine = exports('default', /*#__PURE__*/function () {
        function AudioEngine() {
          /**effect的id从1开始，music的id始终为0 */
          this.audioID = 1;
          this.endedCallbackMap = new Map();
          this.effectMap = new Map();
          this.music = null;
          this.musicMute = false;
          this.effectMute = false;
          this.musicVolume = 1;
          this.musicVolumeScale = 1;
          this.effectVolume = 1;
          this.effectVolumeScale = 1;
        }
        var _proto = AudioEngine.prototype;
        ////////////////////////////////
        // 音效                        //
        ////////////////////////////////
        _proto.playEffect = function playEffect(audioClip, volume, loop, onStarted, onEnded) {
          var _this = this;
          if (volume === void 0) {
            volume = 1;
          }
          if (loop === void 0) {
            loop = false;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          if (onEnded === void 0) {
            onEnded = null;
          }
          if (this.audioID > 100000) this.audioID = 1;
          var audioID = this.audioID++;
          var audio = AudioManager.inst.getAudio();
          this.effectMap.set(audioID, audio);
          if (onEnded) this.endedCallbackMap.set(audioID, onEnded);
          audio.setLoop(loop).setMute(this.effectMute).setVolume(volume, this.effectVolumeScale).play(audioClip, function () {
            AudioManager.inst.putAudio(audio);
            _this.effectMap["delete"](audioID);
            var callback = _this.endedCallbackMap.get(audioID);
            if (callback) {
              _this.endedCallbackMap["delete"](audioID);
              callback();
            }
          }, function () {
            onStarted && onStarted(audioID);
          });
          return audioID;
        };
        _proto.stopEffect = function stopEffect(id) {
          var _this$effectMap$get;
          return !!((_this$effectMap$get = this.effectMap.get(id)) != null && _this$effectMap$get.stop());
        };
        _proto.stopAllEffects = function stopAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.stop();
          });
        };
        _proto.pauseEffect = function pauseEffect(id) {
          var _this$effectMap$get2;
          return !!((_this$effectMap$get2 = this.effectMap.get(id)) != null && _this$effectMap$get2.pause());
        };
        _proto.pauseAllEffects = function pauseAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.pause();
          });
        };
        _proto.resumeEffect = function resumeEffect(id) {
          var _this$effectMap$get3;
          return !!((_this$effectMap$get3 = this.effectMap.get(id)) != null && _this$effectMap$get3.resume());
        };
        _proto.resumeAllEffects = function resumeAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.resume();
          });
        };
        _proto.setEffectMute = function setEffectMute(id, mute) {
          var _this$effectMap$get4;
          return !!((_this$effectMap$get4 = this.effectMap.get(id)) != null && _this$effectMap$get4.setMute(mute));
        };
        _proto.setAllEffectsMute = function setAllEffectsMute(mute) {
          this.effectMute = mute;
          this.effectMap.forEach(function (audio) {
            audio.setMute(mute);
          });
        };
        _proto.getEffectMute = function getEffectMute(id) {
          var _this$effectMap$get5;
          return !!((_this$effectMap$get5 = this.effectMap.get(id)) != null && _this$effectMap$get5.getMute());
        };
        _proto.getAllEffectsMute = function getAllEffectsMute() {
          return this.effectMute;
        };
        _proto.setEffectVolume = function setEffectVolume(id, volume) {
          var _this$effectMap$get6;
          return !!((_this$effectMap$get6 = this.effectMap.get(id)) != null && _this$effectMap$get6.setVolume(volume));
        };
        _proto.setAllEffectsVolume = function setAllEffectsVolume(volume) {
          this.effectVolume = volume;
          this.effectMap.forEach(function (audio) {
            audio.setVolume(volume);
          });
        };
        _proto.getEffectVolume = function getEffectVolume(id) {
          var _this$effectMap$get7;
          return ((_this$effectMap$get7 = this.effectMap.get(id)) == null ? void 0 : _this$effectMap$get7.getVolume()) || 0;
        };
        _proto.getAllEffectsVolume = function getAllEffectsVolume() {
          return this.effectVolume;
        };
        _proto.setEffectVolumeScale = function setEffectVolumeScale(id, volume) {
          var _this$effectMap$get8;
          return !!((_this$effectMap$get8 = this.effectMap.get(id)) != null && _this$effectMap$get8.setVolumeScale(volume));
        };
        _proto.setAllEffectsVolumeScale = function setAllEffectsVolumeScale(scale) {
          this.effectVolumeScale = scale;
          this.effectMap.forEach(function (audio) {
            audio.setVolumeScale(scale);
          });
        };
        _proto.getEffectVolumeScale = function getEffectVolumeScale(id) {
          var _this$effectMap$get9;
          return ((_this$effectMap$get9 = this.effectMap.get(id)) == null ? void 0 : _this$effectMap$get9.getVolumeScale()) || 0;
        };
        _proto.getAllEffectsVolumeScale = function getAllEffectsVolumeScale() {
          return this.effectVolumeScale;
        }

        ////////////////////////////////
        // 音乐                        //
        ////////////////////////////////
        ;

        _proto.playMusic = function playMusic(audioClip, volume, onStarted) {
          if (volume === void 0) {
            volume = 1;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          if (this.music) {
            this.music.destroy();
          }
          this.music = AudioManager.inst.getAudio();
          this.music.setLoop(true).setVolume(volume).play(audioClip, null, onStarted);
          return 0;
        };
        _proto.stopMusic = function stopMusic() {
          var _this$music;
          return !!((_this$music = this.music) != null && _this$music.stop());
        };
        _proto.pauseMusic = function pauseMusic() {
          var _this$music2;
          return !!((_this$music2 = this.music) != null && _this$music2.pause());
        };
        _proto.resumeMusic = function resumeMusic() {
          var _this$music3;
          return !!((_this$music3 = this.music) != null && _this$music3.resume());
        };
        _proto.setMusicMute = function setMusicMute(mute) {
          var _this$music4;
          this.musicMute = mute;
          return !!((_this$music4 = this.music) != null && _this$music4.setMute(mute));
        };
        _proto.getMusicMute = function getMusicMute() {
          return this.musicMute;
        };
        _proto.setMusicVolume = function setMusicVolume(volume) {
          var _this$music5;
          this.musicVolume = volume;
          return !!((_this$music5 = this.music) != null && _this$music5.setVolume(volume));
        };
        _proto.getMusicVolume = function getMusicVolume() {
          return this.musicVolume;
        };
        _proto.setMusicVolumeScale = function setMusicVolumeScale(scale) {
          var _this$music6;
          this.musicVolumeScale = scale;
          return !!((_this$music6 = this.music) != null && _this$music6.setVolumeScale(scale));
        };
        _proto.getMusicVolumeScale = function getMusicVolumeScale() {
          return this.musicVolumeScale;
        }

        ////////////////////////////////
        // 通用                        //
        ////////////////////////////////
        ;

        _proto.setEndedCallback = function setEndedCallback(audioID, callback) {
          if (audioID === 0) {
            var _this$music7;
            return !!((_this$music7 = this.music) != null && _this$music7.onEnded(callback));
          } else {
            if (this.effectMap.has(audioID)) {
              this.endedCallbackMap.set(audioID, callback);
              return true;
            }
            return false;
          }
        };
        _proto.stop = function stop(audioID) {
          if (audioID === 0) {
            return this.stopMusic();
          } else {
            return this.stopEffect(audioID);
          }
        };
        _proto.pause = function pause(audioID) {
          if (audioID === 0) {
            return this.pauseMusic();
          } else {
            return this.pauseEffect(audioID);
          }
        };
        _proto.resume = function resume(audioID) {
          if (audioID === 0) {
            return this.resumeMusic();
          } else {
            return this.resumeEffect(audioID);
          }
        };
        _proto.pauseAll = function pauseAll() {
          this.pauseMusic();
          this.pauseAllEffects();
        };
        _proto.resumeAll = function resumeAll() {
          this.resumeMusic();
          this.resumeAllEffects();
        };
        _proto.stopAll = function stopAll() {
          this.stopMusic();
          this.stopAllEffects();
        };
        _proto.setVolume = function setVolume(audioID, volume) {
          if (audioID === 0) {
            return this.setMusicVolume(volume);
          } else {
            return this.setEffectVolume(audioID, volume);
          }
        };
        _proto.getVolume = function getVolume(audioID) {
          if (audioID === 0) {
            return this.getMusicVolume();
          } else {
            return this.getEffectVolume(audioID);
          }
        };
        _proto.setVolumeScale = function setVolumeScale(audioID, scale) {
          if (audioID === 0) {
            return this.setMusicVolumeScale(scale);
          } else {
            return this.setEffectVolumeScale(audioID, scale);
          }
        };
        _proto.getVolumeScale = function getVolumeScale(audioID) {
          if (audioID === 0) {
            return this.getMusicVolumeScale();
          } else {
            return this.getEffectVolumeScale(audioID);
          }
        };
        _createClass(AudioEngine, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new AudioEngine();
            return this._inst;
          }
        }]);
        return AudioEngine;
      }());
      AudioEngine._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Audio.ts'], function (exports) {
  var _createClass, cclegacy, Audio;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Audio = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5902c7PSWZGdZWpqw8PJxhX", "AudioManager", undefined);
      var AudioManager = exports('default', /*#__PURE__*/function () {
        function AudioManager() {
          this.audioArray = [];
        }
        var _proto = AudioManager.prototype;
        _proto.getAudio = function getAudio() {
          if (this.audioArray.length) {
            return this.audioArray.pop();
          }
          return new Audio();
        };
        _proto.putAudio = function putAudio(audio) {
          audio.clear();
          this.audioArray.push(audio);
        };
        _createClass(AudioManager, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new AudioManager();
            return this._inst;
          }
        }]);
        return AudioManager;
      }());
      AudioManager._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseAppInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, settings, Settings, assetManager, Button, Node, isValid, EventTouch, Component, Core, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      settings = module.settings;
      Settings = module.Settings;
      assetManager = module.assetManager;
      Button = module.Button;
      Node = module.Node;
      isValid = module.isValid;
      EventTouch = module.EventTouch;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2110bB6HGxDDrnZkm2wbIsw", "BaseAppInit", undefined);
      var ccclass = _decorator.ccclass;
      var AdminBundleName = exports('AdminBundleName', 'app-admin');
      var ModelBundleName = exports('ModelBundleName', 'app-model');
      var ControlBundleName = exports('ControlBundleName', 'app-control');
      var ControllerBundleName = exports('ControllerBundleName', 'app-controller');
      var ManagerBundleName = exports('ManagerBundleName', 'app-manager');
      var BaseAppInit = exports('default', (_dec = ccclass('BaseAppInit'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseAppInit, _Component);
        function BaseAppInit() {
          var _this;
          _this = _Component.call(this) || this;
          _this._base_completed = 0;
          _this._base_completed_cache = 0;
          _this._base_inited = false;
          _this._base_finished = false;
          return _this;
        }

        /**
         * [避免重写] 开始初始化
         */
        var _proto = BaseAppInit.prototype;
        _proto.startInit = function startInit() {
          var _this2 = this;
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          Core.inst.lib.task.createAny()
          // 预加载control、model、admin、manager
          .add([function (next, retry) {
            // 预加载control(废弃)
            if (projectBundles.indexOf(ControlBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ControlBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载controller
            if (projectBundles.indexOf(ControllerBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ControllerBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载model
            if (projectBundles.indexOf(ModelBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ModelBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载admin
            if (projectBundles.indexOf(AdminBundleName) === -1) return next();
            assetManager.preloadAny({
              url: AdminBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载manage
            if (projectBundles.indexOf(ManagerBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ManagerBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }])
          // 加载control(废弃)
          .add(function (next, retry) {
            if (projectBundles.indexOf(ControlBundleName) === -1) return next();
            assetManager.loadBundle(ControlBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载controller
          .add(function (next, retry) {
            if (projectBundles.indexOf(ControllerBundleName) === -1) return next();
            assetManager.loadBundle(ControllerBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载model
          .add(function (next, retry) {
            if (projectBundles.indexOf(ModelBundleName) === -1) return next();
            assetManager.loadBundle(ModelBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载admin
          .add(function (next, retry) {
            if (projectBundles.indexOf(AdminBundleName) === -1) return next();
            assetManager.loadBundle(AdminBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载manager
          .add(function (next) {
            BaseManager.init(ManagerBundleName, next);
          }).start(function () {
            _this2._base_inited = true;
            _this2.onProgress(0, _this2._base_total);

            // 初始化app, 使用complete来实现onUserInit的切换以确保manager已完全加载
            BaseManager.initManagers(function () {
              _this2.nextInit();
            }, function () {
              if (_this2._base_user_total <= 0) return;
              _this2.onUserInit(_this2._base_completed - _this2._base_mgr_total);
            });
          });
        }

        /**
         * [避免重写] 初始化下一步，用户部分每完成一步需要调用一次
         */;
        _proto.nextInit = function nextInit() {
          var _this3 = this;
          if (this._base_finished) return;
          if (!this._base_inited) {
            this._base_completed_cache += 1;
            return;
          }
          this._base_completed += 1;
          // 进度回调
          this.onProgress(this._base_completed + this._base_completed_cache, this._base_total);

          // 全部加载完成
          if (this._base_completed + this._base_completed_cache >= this._base_total) {
            this._base_finished = true;
            Core.emit(Core.EventType.EVENT_APPINIT_FINISHED);
            // 默认音效(Button点击触发, 这个方案可以正常触发input事件)
            if (Core.inst.Manager.Sound.setting.defaultEffectName) {
              var playDefaultEffect = function playDefaultEffect(e) {
                // SoundManager.setButtonEffect会将Button所在节点的useDefaultEffect设为false
                if (e.target['useDefaultEffect'] === false) return;
                Core.inst.manager.ui.onceUserInterface(Node.EventType.TOUCH_END, function (event) {
                  if (!event.target.getComponent(Button)) return;
                  setTimeout(function () {
                    if (!isValid(Core.inst.manager.sound)) return;
                    // 如果是scrollView中的button，在滑动后不播放点击音效
                    if (event.eventPhase === EventTouch.CAPTURING_PHASE) return;
                    Core.inst.manager.sound.playDefaultEffect();
                  });
                }, null, true);
              };
              var onEnable = Button.prototype.onEnable;
              Button.prototype.onEnable = function () {
                onEnable.call(this);
                this.node.on(Node.EventType.TOUCH_START, playDefaultEffect);
              };
              var onDisable = Button.prototype.onDisable;
              Button.prototype.onDisable = function () {
                this.node.off(Node.EventType.TOUCH_START, playDefaultEffect);
                onDisable.call(this);
              };
            }
            return Core.inst.manager.ui.showDefault(function () {
              // 初始化完成
              _this3.onFinish();
              // 默认音效(Button点击触发, 这个方案会阻挡input事件)
              // if (Core.inst.Manager.Sound.setting.defaultEffectName) {
              //     Core.inst.manager.ui.onUIRoot2D(Node.EventType.TOUCH_END, function (event: EventTouch) {
              //         if (!event.target.getComponent(Button)) return;
              //         setTimeout(() => {
              //             if (!isValid(Core.inst.manager.sound)) return;
              //             // 如果是scrollView中的button，在滑动后不播放点击音效
              //             if (event.eventPhase === EventTouch.CAPTURING_PHASE) return;
              //             Core.inst.manager.sound.playDefaultEffect();
              //         });
              //     }, null, true);
              // }
              // 默认音乐(默认播放)
              if (Core.inst.Manager.Sound.setting.defaultMusicName) {
                var onTouch = function onTouch() {
                  var _this4 = this;
                  if (!isValid(Core.inst.manager.sound)) return;
                  if (Core.inst.manager.sound.isMusicPlaying && !Core.inst.manager.sound.isMusicPaused) {
                    Core.inst.manager.sound.replayMusic(function () {
                      Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, _this4, true);
                    });
                  } else {
                    Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, this, true);
                  }
                };
                Core.inst.manager.ui.onUserInterface(Node.EventType.TOUCH_START, onTouch, _this3, true);
                Core.inst.manager.sound.playDefaultMusic(function () {
                  Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, _this3, true);
                });
              }
            });
          }

          // 系统部分加载完毕，开始加载用户自定义
          if (this._base_completed > this._base_mgr_total) {
            this.onUserInit(this._base_completed + this._base_completed_cache - this._base_mgr_total);
          }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////        以下可重写        ////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * [可以重写] 默认start调用startInit，可以重写后自定义时机
         */;
        _proto.start = function start() {
          this.startInit();
        }

        /**
         * [建议重写] 监听进度
         * @param {Number} completed
         * @param {Number} total
         */;
        _proto.onProgress = function onProgress(completed, total) {
          return completed / total;
        }

        /**
         * [建议重写] 监听用户初始化数据
         * @param {Number} index
         */;
        _proto.onUserInit = function onUserInit(index) {
          return index;
        }

        /**
         * [建议重写] 获得用户资源总量，这里返回几，就需要用户自行调用几次nextInit
         */;
        _proto.getUserAssetNum = function getUserAssetNum() {
          return 0;
        }

        /**
         * [建议重写] 初始化完成
         */;
        _proto.onFinish = function onFinish() {};
        _createClass(BaseAppInit, [{
          key: "_base_user_total",
          get: function get() {
            return Math.max(0, this.getUserAssetNum());
          }
        }, {
          key: "_base_mgr_total",
          get: function get() {
            return Math.max(0, BaseManager.getTotalAssetNum());
          }
        }, {
          key: "_base_total",
          get: function get() {
            return this._base_mgr_total + this._base_user_total;
          }
        }]);
        return BaseAppInit;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', BaseControl);
      cclegacy._RF.push({}, "fb103m5F/JDta0mjXTmkbT1", "BaseControl", undefined);
      var CallbackInfo = function CallbackInfo(callback, target, once) {
        if (target === void 0) {
          target = null;
        }
        if (once === void 0) {
          once = false;
        }
        this.callback = null;
        this.target = null;
        this.once = false;
        this.callback = callback;
        this.target = target;
        this.once = once;
      };
      var CallbackList = /*#__PURE__*/function () {
        function CallbackList() {
          this.callbacks = [];
        }
        var _proto = CallbackList.prototype;
        _proto.size = function size() {
          return this.callbacks.length;
        };
        _proto.add = function add(callback, target, once) {
          if (target === void 0) {
            target = null;
          }
          if (once === void 0) {
            once = false;
          }
          this.callbacks.push(new CallbackInfo(callback, target, once));
        };
        _proto.emit = function emit(args) {
          for (var index = 0; index < this.callbacks.length; index++) {
            var info = this.callbacks[index];
            // 先移除
            if (info.once) {
              this.callbacks.splice(index, 1);
              --index;
            }
            if (info.callback) {
              info.callback.apply(info.target, args);
            }
          }
        };
        _proto.call = function call(args) {
          if (this.callbacks.length === 0) return;
          var info = this.callbacks[0];

          // 先移除
          if (info.once) this.callbacks.splice(0, 1);
          if (!info.callback) return;
          return info.callback.apply(info.target, args);
        };
        _proto.remove = function remove(callback, target) {
          if (target === void 0) {
            target = null;
          }
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback || info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByCallback = function removeByCallback(callback) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByTarget = function removeByTarget(target) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        return CallbackList;
      }();
      var EventEmitter = /*#__PURE__*/function () {
        function EventEmitter() {
          this.listeners = {};
        }
        var _proto2 = EventEmitter.prototype;
        _proto2.on = function on(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target);
        };
        _proto2.once = function once(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target, true);
        };
        _proto2.off = function off(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) return;
          this.listeners[event].remove(cb, target);
        };
        _proto2.targetOff = function targetOff(target) {
          if (!target) return;
          for (var key in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, key)) {
              var element = this.listeners[key];
              element.removeByTarget(target);
            }
          }
        };
        _proto2.emit = function emit(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          this.listeners[event].emit(args);
        };
        _proto2.call = function call(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          return this.listeners[event].call(args);
        };
        return EventEmitter;
      }();
      var SuperBaseControl = /*#__PURE__*/function () {
        function SuperBaseControl() {
          //用于类型提示推导//
          this.e = void 0;
          ////
          this.t = void 0;
          ////
          /////////////////
          this.event = new EventEmitter();
        }
        var _proto3 = SuperBaseControl.prototype;
        _proto3.call = function call(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return this.event.call.call(this.event, key, args);
        };
        _proto3.emit = function emit(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return this.event.emit.call(this.event, key, args);
        };
        _proto3.on = function on() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return this.event.on.apply(this.event, args);
        };
        _proto3.once = function once() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.event.once.apply(this.event, args);
        };
        _proto3.off = function off() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return this.event.off.apply(this.event, args);
        };
        _proto3.targetOff = function targetOff(target) {
          return this.event.targetOff.call(this.event, target);
        };
        return SuperBaseControl;
      }();
      /**
       * @deprecated 废弃，请使用Controller代替Control
       */
      function BaseControl(Event) {
        var _class5;
        return _class5 = /*#__PURE__*/function (_SuperBaseControl) {
          _inheritsLoose(BaseControl, _SuperBaseControl);
          function BaseControl() {
            return _SuperBaseControl.apply(this, arguments) || this;
          }
          _createClass(BaseControl, null, [{
            key: "inst",
            get: function get() {
              if (this._base_inst === null) {
                this._base_inst = new this();
              }
              return this._base_inst;
            }
          }]);
          return BaseControl;
        }(SuperBaseControl), _class5.Event = Event, _class5._base_inst = null, _class5;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', BaseController);
      cclegacy._RF.push({}, "a7da7CB5gRIfo4MfUWP27NW", "BaseController", undefined);
      var CallbackInfo = function CallbackInfo(callback, target, once) {
        if (target === void 0) {
          target = null;
        }
        if (once === void 0) {
          once = false;
        }
        this.callback = null;
        this.target = null;
        this.once = false;
        this.callback = callback;
        this.target = target;
        this.once = once;
      };
      var CallbackList = /*#__PURE__*/function () {
        function CallbackList() {
          this.callbacks = [];
        }
        var _proto = CallbackList.prototype;
        _proto.size = function size() {
          return this.callbacks.length;
        };
        _proto.add = function add(callback, target, once) {
          if (target === void 0) {
            target = null;
          }
          if (once === void 0) {
            once = false;
          }
          this.callbacks.push(new CallbackInfo(callback, target, once));
        };
        _proto.emit = function emit(args) {
          for (var index = 0; index < this.callbacks.length; index++) {
            var info = this.callbacks[index];
            // 先移除
            if (info.once) {
              this.callbacks.splice(index, 1);
              --index;
            }
            if (info.callback) {
              info.callback.apply(info.target, args);
            }
          }
        };
        _proto.call = function call(args) {
          if (this.callbacks.length === 0) return;
          var info = this.callbacks[0];

          // 先移除
          if (info.once) this.callbacks.splice(0, 1);
          if (!info.callback) return;
          return info.callback.apply(info.target, args);
        };
        _proto.remove = function remove(callback, target) {
          if (target === void 0) {
            target = null;
          }
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback || info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByCallback = function removeByCallback(callback) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByTarget = function removeByTarget(target) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        return CallbackList;
      }();
      var EventEmitter = /*#__PURE__*/function () {
        function EventEmitter() {
          this.listeners = {};
        }
        var _proto2 = EventEmitter.prototype;
        _proto2.on = function on(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target);
        };
        _proto2.once = function once(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target, true);
        };
        _proto2.off = function off(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) return;
          this.listeners[event].remove(cb, target);
        };
        _proto2.targetOff = function targetOff(target) {
          if (!target) return;
          for (var _key in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, _key)) {
              var element = this.listeners[_key];
              element.removeByTarget(target);
            }
          }
        };
        _proto2.emit = function emit(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          this.listeners[event].emit(args);
        };
        _proto2.call = function call(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          return this.listeners[event].call(args);
        };
        return EventEmitter;
      }();
      var SuperBaseController = /*#__PURE__*/function () {
        function SuperBaseController() {
          //用于类型提示推导//
          this.t = void 0;
          ////
          /////////////////
          this.event = new EventEmitter();
        }
        var _proto3 = SuperBaseController.prototype;
        /**获取第一个事件回调的返回值 */
        _proto3.call = function call(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return this.event.call.call(this.event, key, args);
        }

        /**发射事件 */;
        _proto3.emit = function emit(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          return this.event.emit.call(this.event, key, args);
        };
        _proto3.on = function on() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.event.on.apply(this.event, args);
        };
        _proto3.once = function once() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return this.event.once.apply(this.event, args);
        };
        _proto3.off = function off() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return this.event.off.apply(this.event, args);
        };
        _proto3.targetOff = function targetOff(target) {
          return this.event.targetOff.call(this.event, target);
        };
        return SuperBaseController;
      }();
      function BaseController() {
        var _class5;
        return _class5 = /*#__PURE__*/function (_SuperBaseController) {
          _inheritsLoose(BaseController, _SuperBaseController);
          function BaseController() {
            return _SuperBaseController.apply(this, arguments) || this;
          }
          _createClass(BaseController, null, [{
            key: "inst",
            get: function get() {
              if (this._base_inst === null) {
                this._base_inst = new this();
              }
              return this._base_inst;
            }
          }]);
          return BaseController;
        }(SuperBaseController), _class5.Event = new Proxy({}, {
          get: function get(target, key) {
            if (target[key]) return target[key];
            target[key] = key;
            return key;
          }
        }), _class5._base_inst = null, _class5;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, EventTarget, js, error, Widget, settings, assetManager, Prefab, find, path, instantiate, Component, Core;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      js = module.js;
      error = module.error;
      Widget = module.Widget;
      settings = module.settings;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      find = module.find;
      path = module.path;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }],
    execute: function () {
      var _dec, _class2, _class3;
      cclegacy._RF.push({}, "302056smx5PRICBe3D/jWxS", "BaseManager", undefined);
      var ccclass = _decorator.ccclass;
      var UserManagerRoot = 'Root2D/UserManager';
      var uuid = new ( /*#__PURE__*/function () {
        function UUID() {
          this.index = 0;
        }
        var _proto = UUID.prototype;
        _proto.create = function create() {
          if (this.index++ > 10000000) {
            this.index = 0;
          }
          return Date.now() + "-" + this.index;
        };
        return UUID;
      }())();
      var loadBegin = window.console.log.bind(window.console, '%c %s %c %s ', 'background:#32cd32; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #32cd32; color: #fff; font-weight: normal;', "[BaseManager] \u4E0B\u8F7D\u5F00\u59CB " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #32cd32; color: #32cd32; font-weight: normal;');
      var loadFinish = window.console.log.bind(window.console, '%c %s %c %s ', 'background:#00ae9d; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #00ae9d; color: #fff; font-weight: normal;', "[BaseManager] \u4E0B\u8F7D\u5B8C\u6210 " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #00ae9d; color: #00ae9d; font-weight: normal;');
      var loadError = window.console.log.bind(window.console, '%c %s %c %s ', 'background:#ff4757; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff4757; color: #fff; font-weight: normal;', "[BaseManager] \u4E0B\u8F7D\u5931\u8D25 " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff4757; color: #ff4757; font-weight: normal;');
      var initBegin = window.console.log.bind(window.console, '%c %s %c %s ', 'background:#3e4145; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #3e4145; color: #fff; font-weight: normal;', "[BaseManager] \u521D\u59CB\u5316\u5F00\u59CB " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #3e4145; color: #3e4145; font-weight: normal;');
      var initFinish = window.console.log.bind(window.console, '%c %s %c %s ', 'background:#008080; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #008080; color: #fff; font-weight: normal;', "[BaseManager] \u521D\u59CB\u5316\u5B8C\u6210 " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #008080; color: #008080; font-weight: normal;');
      var BaseManager = exports('default', (_dec = ccclass('BaseManager'), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseManager, _Component);
        function BaseManager() {
          var _this;
          _this = _Component.call(this) || this;
          // 事件管理器
          _this._base_event = new EventTarget();
          // manager名字
          _this._base_manager_name = js.getClassName(_assertThisInitialized(_this));
          if (_this._base_manager_name !== 'Manager' && _this._base_manager_name.slice(-7) === 'Manager') {
            var managerName = _this._base_manager_name.slice(0, -7);
            Core.inst.Manager[managerName] = _this.constructor;
            Core.inst.manager[managerName.toLocaleLowerCase()] = _assertThisInitialized(_this);
          } else {
            error("[" + _this._base_manager_name + "] manager\u547D\u540D\u9519\u8BEF(\u5E94\u4E3A xxxxManager \u4EE5Manager\u7ED3\u5C3E)");
          }
          return _this;
        }

        // 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
        var _proto2 = BaseManager.prototype;
        _proto2.resetInEditor = function resetInEditor() {
          var widget = this.node.getComponent(Widget) || this.node.addComponent(Widget);
          widget.isAlignBottom = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.isAlignTop = true;
          widget.top = 0;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
        }

        /**
         * [无序] 自身初始化完成, init执行完毕后被调用
         */;
        _proto2.onInited = function onInited() {}

        /**
         * [无序] 所有manager初始化完成
         */;
        _proto2.onFinished = function onFinished() {}

        /**
         * [无序] 初始化manager，在初始化完成后，调用finish方法
         * @param {Function} finish 
         */;
        _proto2.init = function init(finish) {
          finish && finish();
        };
        _proto2.createUUID = function createUUID() {
          return uuid.create();
        };
        _proto2.emit = function emit(event) {
          var _this$_base_event;
          for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            data[_key - 1] = arguments[_key];
          }
          (_this$_base_event = this._base_event).emit.apply(_this$_base_event, [event].concat(data));
        };
        _proto2.on = function on(event, cb, target) {
          this._base_event.on(event, cb, target);
        };
        _proto2.once = function once(event, cb, target) {
          this._base_event.once(event, cb, target);
        };
        _proto2.off = function off(event, cb, target) {
          this._base_event.off(event, cb, target);
        };
        _proto2.targetOff = function targetOff(target) {
          this._base_event.targetOff(target);
        }

        /***********************************静态***********************************/
        /**
         * 将串式命名转成驼峰命名
         * @param str 串式字符串
         * @param lower 首字母是否小写(默认大写)
         * @returns 
         */;
        BaseManager.stringCase = function stringCase(str, lower) {
          if (lower === void 0) {
            lower = false;
          }
          str = str.replace(/-/g, '_');
          var arr = str.split('_');
          return arr.map(function (str, index) {
            if (index === 0 && lower) {
              return str.charAt(0).toLocaleLowerCase() + str.slice(1);
            }
            return str.charAt(0).toLocaleUpperCase() + str.slice(1);
          }).join('');
        }

        /**
         * 将驼峰命名转成串式命名
         * @param str 驼峰字符串
         * @returns 
         */;
        BaseManager.stringCaseNegate = function stringCaseNegate(str) {
          return str.replace(/[A-Z]/g, function (searchStr, startIndex) {
            if (startIndex === 0) {
              return searchStr.toLocaleLowerCase();
            } else {
              return '-' + searchStr.toLocaleLowerCase();
            }
          });
        }
        /**
         * manager asset bundle
         */;
        /**
         * 初始化操作
         * @private
         */
        BaseManager.init = function init(bundleName, onFinish) {
          var _this2 = this;
          // 避免game.restart()时读取错误的缓存
          // if (this.bundle) return onFinish && onFinish();
          this.bundle = null;
          var projectBundles = settings.querySettings('assets', 'projectBundles');
          if (projectBundles.indexOf(bundleName) === -1) return onFinish && onFinish();

          // 一定会加载成功
          Core.inst.lib.task.execute(function (retry) {
            assetManager.loadBundle(bundleName, function (err, bundle) {
              if (err) return retry(1);
              _this2.bundle = bundle;
              onFinish && onFinish();
            });
          });
        }

        /**
         * 获得初始化资源的数量(包括sysMgrCount)
         * @private
         */;
        BaseManager.getTotalAssetNum = function getTotalAssetNum() {
          var count = this.sysMgrCount;
          if (!this.bundle) return count;
          var array = this.bundle.getDirWithPath('/', Prefab);
          array.forEach(function (item) {
            if (item.path.endsWith('Manager')) {
              count++;
            }
          });
          return count;
        }

        /**
         * 获得初始化资源的数量
         * @private
         */;
        BaseManager.getUserAssetUrls = function getUserAssetUrls() {
          var pathArr = [];
          if (!this.bundle) return pathArr;
          var array = this.bundle.getDirWithPath('/', Prefab);
          array.forEach(function (item) {
            if (item.path.endsWith('Manager')) {
              pathArr.push(item.path);
            }
          });
          return pathArr;
        }

        /**
         * 静态方法，初始化manager，该方法必须在场景初始化完毕之后调用
         * @private
         */;
        BaseManager.initManagers = function initManagers(progress, complete) {
          var bundle = this.bundle;
          var urls = this.getUserAssetUrls();
          var totalAsset = urls.length + this.sysMgrCount;
          var completeAsset = 0;
          var onProgress = function onProgress(next, manager) {
            {
              var _window;
              var startTime = (_window = window) != null && (_window = _window.performance) != null && _window.now ? performance.now() : Date.now();
              initBegin(manager.managerName);
              return function () {
                manager.onInited();
                {
                  var _window2;
                  var endTime = (_window2 = window) != null && (_window2 = _window2.performance) != null && _window2.now ? performance.now() : Date.now();
                  initFinish(manager.managerName + " \u8017\u65F6:" + (endTime - startTime).toFixed(6) + " ms");
                }
                progress && progress(++completeAsset, totalAsset);
                next();
              };
            }
          };

          // 用户manager(动态添加)
          var userMgrList = [];
          // 系统manager(静态内置)
          var sysMgrList = [Core.inst.manager.event, Core.inst.manager.timer, Core.inst.manager.loader, Core.inst.manager.ui, Core.inst.manager.sound];

          // 初始化系统manager
          var initSysMgrTask = Core.inst.lib.task.createASync();
          sysMgrList.forEach(function (manager) {
            initSysMgrTask.add(function (next) {
              manager.init(onProgress(next, manager));
            });
          });

          // 加载用户manager
          var loadUserMgrTask = Core.inst.lib.task.createASync();
          var userManagerRoot = find(UserManagerRoot);
          urls.forEach(function (url) {
            loadUserMgrTask.add(function (next, retry) {
              {
                var _window3;
                var managerName = path.basename(url);
                var startTime = (_window3 = window) != null && (_window3 = _window3.performance) != null && _window3.now ? performance.now() : Date.now();
                loadBegin(managerName);
                bundle.load(url, Prefab, function (err, prefab) {
                  if (err || !prefab) {
                    loadError(managerName, '重试...');
                    retry(1);
                  } else {
                    var _window4;
                    var endTime = (_window4 = window) != null && (_window4 = _window4.performance) != null && _window4.now ? performance.now() : Date.now();
                    loadFinish(managerName + " \u8017\u65F6:" + (endTime - startTime).toFixed(6) + " ms");
                    var node = instantiate(prefab);
                    node.parent = userManagerRoot;
                    node.active = true;
                    userMgrList.push(node.getComponent(BaseManager));
                    next();
                  }
                });
                return;
              }
            });
          });
          Core.inst.lib.task.createAny().add([function (next) {
            return initSysMgrTask.start(next);
          }, function (next) {
            return loadUserMgrTask.start(next);
          }]).add(function (next) {
            Core.emit(Core.EventType.EVENT_SYS_MANAGER_INITED);
            next();
          }).add(function (next) {
            // 初始化用户manager
            var initUserMgrTask = Core.inst.lib.task.createASync();
            userMgrList.forEach(function (manager) {
              initUserMgrTask.add(function (next) {
                manager.init(onProgress(next, manager));
              });
            });
            initUserMgrTask.start(next);
          }).add(function (next) {
            Core.emit(Core.EventType.EVENT_USER_MANAGER_INITED);
            Core.emit(Core.EventType.EVENT_MANAGER_INITED);
            next();
          }).add(function (next) {
            // 所有manager初始化完成后，触发回调
            sysMgrList.forEach(function (manager) {
              manager.onFinished();
            });
            userMgrList.forEach(function (manager) {
              manager.onFinished();
            });
            next();
          }).start(function () {
            Core.emit(Core.EventType.EVENT_MANAGER_FINISHED);
            complete && complete(totalAsset);
          });
        };
        _createClass(BaseManager, [{
          key: "managerName",
          get: function get() {
            return this._base_manager_name;
          }
        }, {
          key: "log",
          get: function get() {
            return window.console.log.bind(window.console, '%c %s %c %s ', 'background:#4169e1; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #4169e1; color: #fff; font-weight: normal;', "[" + this._base_manager_name + "] LOG " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #4169e1; color: #4169e1; font-weight: normal;');
          }
        }, {
          key: "warn",
          get: function get() {
            return window.console.warn.bind(window.console, '%c %s %c %s ', 'background:#ff7f50; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff7f50; color: #fff; font-weight: normal;', "[" + this._base_manager_name + "] WARN " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff7f50; color: #ff7f50; font-weight: normal;');
          }
        }, {
          key: "error",
          get: function get() {
            return window.console.error.bind(window.console, '%c %s %c %s ', 'background:#ff4757; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff4757; color: #fff; font-weight: normal;', "[" + this._base_manager_name + "] ERROR " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff4757; color: #ff4757; font-weight: normal;');
          }
        }], [{
          key: "sysMgrCount",
          get:
          /**
           * 系统内置manager的数量
           * @private
           */
          function get() {
            return 5;
          }
        }]);
        return BaseManager;
      }(Component), _class3.bundle = null, _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseModel.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a377zr4IZOcZm99E2rQNJP", "BaseModel", undefined); // export type IModel<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? '❌此处不能定义任何方法'
      //     : (
      //         T[P] extends Array<infer R>
      //         ? (
      //             R extends Function
      //             ? '❌此处不能定义任何方法'
      //             : T[P]
      //         )
      //         : T[P] // IModel<T[P]> 性能消耗大
      //     );
      // };
      // export type IStore<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? T[P]
      //     : (
      //         T[P] extends Array<infer R>
      //         ? (
      //             R extends Function
      //             ? '❌此处不能定义任何方法'
      //             : IModel<T[P]>
      //         )
      //         : IModel<T[P]>
      //     );
      // };
      // export type IStore<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? T[P]
      //     : IModel<T[P]>;
      // };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Node, Enum, js, Scene, director, UITransform, Font, isValid, sp, SpriteFrame, Component, Core;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Enum = module.Enum;
      js = module.js;
      Scene = module.Scene;
      director = module.director;
      UITransform = module.UITransform;
      Font = module.Font;
      isValid = module.isValid;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "eddc0QRQjlCPYcQd/35Kv/C", "BaseView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockEvents = [Node.EventType.TOUCH_START, Node.EventType.TOUCH_MOVE, Node.EventType.TOUCH_END, Node.EventType.TOUCH_CANCEL, Node.EventType.MOUSE_DOWN, Node.EventType.MOUSE_MOVE, Node.EventType.MOUSE_UP, Node.EventType.MOUSE_ENTER, Node.EventType.MOUSE_LEAVE, Node.EventType.MOUSE_WHEEL];
      var HideEvent = Enum({
        destroy: 1,
        active: 2
      });
      var ViewType = exports('ViewType', /*#__PURE__*/function (ViewType) {
        ViewType["Page"] = "Page";
        ViewType["Paper"] = "Paper";
        ViewType["PaperAll"] = "PaperAll";
        ViewType["Pop"] = "Pop";
        ViewType["Top"] = "Top";
        return ViewType;
      }({}));
      var ViewState = /*#__PURE__*/function (ViewState) {
        ViewState[ViewState["BeforeShow"] = 0] = "BeforeShow";
        ViewState[ViewState["Showing"] = 1] = "Showing";
        ViewState[ViewState["Showed"] = 2] = "Showed";
        ViewState[ViewState["BeforeHide"] = 3] = "BeforeHide";
        ViewState[ViewState["Hiding"] = 4] = "Hiding";
        ViewState[ViewState["Hid"] = 5] = "Hid";
        return ViewState;
      }(ViewState || {});
      var Group = {
        id: 'BaseView',
        name: 'Settings',
        displayOrder: -Infinity,
        style: 'section'
      };

      // 记录PaperAll的owner
      var PaperAllToOwner = new Map();
      var BaseView = exports('default', (_dec = ccclass('BaseView'), _dec2 = property({
        group: Group,
        type: HideEvent,
        tooltip: '何种模式隐藏节点\n1、destroy: 销毁UI并释放对应的所有资源\n2、active: 缓存UI并加速下次的打开速度'
      }), _dec3 = property({
        group: Group,
        tooltip: '是否是单例模式\n1、单例模式: UI只会被创建一次(onShow会被重复触发)\n2、非单例模式: UI会被重复创建'
      }), _dec4 = property({
        group: Group,
        tooltip: '是否捕获焦点<响应onLostFocus和onFocus>\n1、当一个捕获焦点的UI处于最上层并展示时\n下层的UI永远不会响应focus事件',
        visible: function visible() {
          if (this.is3D()) return false;
          return true;
        }
      }), _dec5 = property({
        group: Group,
        tooltip: '是否需要底层遮罩',
        visible: function visible() {
          if (this.is3D()) return false;
          if (this.isPage()) return false;
          return true;
        }
      }), _dec6 = property({
        group: Group,
        tooltip: '是否禁止点击事件向下层传递',
        visible: function visible() {
          if (this.is3D()) return false;
          return true;
        }
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseView, _Component);
        function BaseView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 是否被调用过
          _this._isOnCreateCalled = false;
          // view状态
          _this._base_view_state = ViewState.Hid;
          // 当前view的名字
          _this._base_view_name = js.getClassName(_assertThisInitialized(_this));
          // 触摸是否有效
          _this._base_touch_enable = true;
          // show/hide等待列表
          _this._base_show_hide_delays = [];
          // 子界面融合相关
          _this._base_mini_show = new Set();
          _initializerDefineProperty(_this, "_hideEvent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_singleton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_captureFocus", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_shade", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blockInput", _descriptor5, _assertThisInitialized(_this));
          /**
           * 子界面(只能用于Page)
           */
          _this.miniViews = [];
          return _this;
        }
        /**
         * @deprecated 废弃，请使用BindController代替BindControl
         */
        BaseView.BindControl = function BindControl(Control) {
          return /*#__PURE__*/function (_BaseView) {
            _inheritsLoose(BindControl, _BaseView);
            function BindControl() {
              return _BaseView.apply(this, arguments) || this;
            }
            _createClass(BindControl, [{
              key: "control",
              get: function get() {
                return Control ? Control.inst : null;
              }
            }]);
            return BindControl;
          }(BaseView);
        }

        /**
         * 给UI绑定一个控制器，绑定后可以通过this.controller访问，并能访问一些内部方法(emit、on、once、off、targetOff)
         */;
        BaseView.BindController = function BindController(Controller) {
          return /*#__PURE__*/function (_BaseView2) {
            _inheritsLoose(BindController, _BaseView2);
            function BindController() {
              return _BaseView2.apply(this, arguments) || this;
            }
            _createClass(BindController, [{
              key: "controller",
              get: function get() {
                return Controller ? Controller.inst : null;
              }
            }]);
            return BindController;
          }(BaseView);
        }

        /**
         * 是否有效，如果返回false的话，app.manager.ui.show会触发onError回调
         */;
        BaseView.isViewValid = function isViewValid(next, data) {
          next && next(true);
        };
        BaseView.isPage = function isPage(name) {
          return name.indexOf(ViewType.Page) === 0;
        };
        BaseView.isPaper = function isPaper(name) {
          return name.indexOf(ViewType.Paper) === 0;
        };
        BaseView.isPaperAll = function isPaperAll(name) {
          return name.indexOf(ViewType.PaperAll) === 0;
        };
        BaseView.isPop = function isPop(name) {
          return name.indexOf(ViewType.Pop) === 0;
        };
        BaseView.isTop = function isTop(name) {
          return name.indexOf(ViewType.Top) === 0;
        };
        var _proto = BaseView.prototype;
        _proto.isPage = function isPage() {
          return BaseView.isPage(this._base_view_name);
        };
        _proto.isPaper = function isPaper() {
          return BaseView.isPaper(this._base_view_name);
        };
        _proto.isPaperAll = function isPaperAll() {
          return BaseView.isPaperAll(this._base_view_name);
        };
        _proto.isPop = function isPop() {
          return BaseView.isPop(this._base_view_name);
        };
        _proto.isTop = function isTop() {
          return BaseView.isTop(this._base_view_name);
        };
        _proto.is2D = function is2D() {
          return !this.is3D();
        };
        _proto.is3D = function is3D() {
          if (this.node.parent instanceof Scene) {
            return this.node.parent.name === this.viewName;
          }
          var scene = director.getScene();
          return scene.name === this.viewName;
        };
        /**
         * 是否show了某个子界面
         */
        _proto.isMiniViewShow = function isMiniViewShow(name) {
          return this._base_mini_show.has(name);
        }

        // 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
        ;

        _proto.resetInEditor = function resetInEditor() {}

        /**
         * 设置是否可点击
         */;
        _proto.setTouchEnabled = function setTouchEnabled(enabled) {
          if (enabled === void 0) {
            enabled = true;
          }
          this._base_touch_enable = !!enabled;
        };
        _proto.blockPropagation = function blockPropagation(event) {
          if (this.blockInput) {
            event.propagationStopped = true;
            if (event.type === Node.EventType.TOUCH_START) {
              this.log('阻断触摸向下层传递');
            }
          }
        };
        _proto.stopPropagation = function stopPropagation(event) {
          if (!this._base_touch_enable) {
            event.propagationStopped = true;
            event.propagationImmediateStopped = true;
            if (event.type === Node.EventType.TOUCH_START) {
              this.log('屏蔽触摸');
            }
          }
        };
        _proto.onCreate = function onCreate() {
          var _this2 = this;
          if (this.is3D()) return;
          var uiTransform = this.getComponent(UITransform);
          if (uiTransform) uiTransform.hitTest = function () {
            if (_this2.blockInput) {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return UITransform.prototype.hitTest.apply(uiTransform, args);
            }
            return false;
          };
          for (var i = 0; i < BlockEvents.length; i++) {
            this.node.on(BlockEvents[i], this.blockPropagation, this);
            this.node.on(BlockEvents[i], this.stopPropagation, this, true);
          }
        }

        /**
         * 关闭所有子界面
         */;
        _proto.hideAllMiniViews = function hideAllMiniViews(data) {
          this._base_mini_show.forEach(function (name) {
            Core.inst.manager.ui.hide({
              name: name,
              data: data
            });
          });
          this._base_mini_show.clear();
        }

        /**
         * 关闭子界面
         */;
        _proto.hideMiniViews = function hideMiniViews(_ref) {
          var _this3 = this;
          var data = _ref.data,
            views = _ref.views;
          if (this.miniViews.length === 0) return;
          if (views.length === 0) return;
          views.forEach(function (name) {
            if (_this3.miniViews.indexOf(name) === -1) {
              _this3.warn('hideMiniViews', name + "\u4E0D\u5728miniViews\u4E2D, \u5DF2\u8DF3\u8FC7");
              return;
            }

            // 验证
            if (!_this3._base_mini_show.has(name)) return;
            // 关闭
            Core.inst.manager.ui.hide({
              name: name,
              data: data
            });
          });
        }

        /**
         * 展示子界面
         */;
        _proto.showMiniViews = function showMiniViews(_ref2) {
          var _this4 = this;
          var data = _ref2.data,
            views = _ref2.views,
            onShow = _ref2.onShow,
            onHide = _ref2.onHide,
            onFinish = _ref2.onFinish;
          if (views.length === 0) return false;
          if (this.typeName !== ViewType.Page) {
            this.warn('showMiniViews', '仅支持Page类型');
            return false;
          }
          var task = Core.inst.lib.task.createSync();
          var _loop = function _loop() {
            var names = views[index];
            if (names instanceof Array) {
              task.add(function (next) {
                _this4.createMixMiniViewsTask(names, data, onShow, onHide).start(next);
              });
            } else {
              task.add(function (next) {
                _this4.createMixMiniViewsTask([names], data, onShow, onHide).start(next);
              });
            }
          };
          for (var index = 0; index < views.length; index++) {
            _loop();
          }
          task.start(onFinish && function () {
            onFinish();
          });
          return true;
        }

        /**
         * 创建自定义加载任务
         */;
        _proto.createMixMiniViewsTask = function createMixMiniViewsTask(views, data, _onShow, _onHide) {
          var _this5 = this;
          if (views === void 0) {
            views = [];
          }
          var task = Core.inst.lib.task.createSync();
          if (this.typeName !== ViewType.Page) {
            this.warn('showMiniViews', '仅支持Page类型');
            return task;
          }
          views = views.filter(function (name) {
            if (!name) {
              _this5.warn('showMiniViews', 'name不能为空');
              return false;
            }
            if (_this5._base_mini_show.has(name)) {
              _this5.warn('showMiniViews', "\u91CD\u590D\u878D\u5408" + name + ", \u5DF2\u8DF3\u8FC7");
              return false;
            }
            if (_this5.miniViews.indexOf(name) === -1) {
              _this5.warn('showMiniViews', name + "\u4E0D\u5728miniViews\u4E2D, \u5DF2\u8DF3\u8FC7");
              return false;
            }
            if (name.indexOf(_this5.baseName) !== ViewType.Paper.length && name.indexOf(ViewType.PaperAll) !== 0) {
              _this5.warn('showMiniViews', name + "\u4E0D\u5C5E\u4E8E\u5F53\u524DPage, \u5DF2\u8DF3\u8FC7");
              return false;
            }
            _this5._base_mini_show.add(name);
            return true;
          });
          if (views.length === 0) return task;

          // 先load全部
          task.add(function (next) {
            var aSync = Core.inst.lib.task.createASync();
            views.forEach(function (name) {
              aSync.add(function (next, retry) {
                _this5.log("\u4E0B\u8F7D\u5B50\u9875\u9762: " + name);
                Core.inst.manager.ui.load(name, function (result) {
                  result ? next() : _this5.scheduleOnce(retry, 0.1);
                });
              });
            });
            aSync.start(next);
          });

          // 再show全部
          task.add(function (next) {
            var aSync = Core.inst.lib.task.createASync();
            views.forEach(function (name) {
              aSync.add(function (next) {
                var _this5$_base_mini_sho;
                if (!((_this5$_base_mini_sho = _this5._base_mini_show) != null && _this5$_base_mini_sho.has(name))) return next();
                _this5.log("\u5C55\u793A\u5B50\u9875\u9762: " + name);
                // 是PaperAll,设置owner
                if (BaseView.isPaperAll(name)) {
                  PaperAllToOwner.set(name, _this5.uuid);
                }
                Core.inst.manager.ui.show({
                  name: name,
                  data: data,
                  silent: true,
                  attr: {
                    zIndex: _this5.miniViews.indexOf(name)
                  },
                  onShow: function onShow(result) {
                    if (_onShow) _onShow(name, result);
                    next();
                  },
                  onHide: function onHide(result) {
                    var _this5$_base_mini_sho2;
                    if (BaseView.isPaperAll(name)) {
                      // 验证PaperAll是否属于当前Page
                      var owner = PaperAllToOwner.get(name);
                      if (owner && owner === _this5.uuid) {
                        PaperAllToOwner["delete"](name);
                      }
                    }
                    (_this5$_base_mini_sho2 = _this5._base_mini_show) == null || _this5$_base_mini_sho2["delete"](name);
                    if (_onHide) _onHide(name, result);
                  },
                  onError: function onError(result, code) {
                    var _this5$_base_mini_sho3;
                    if (code === Core.inst.Manager.UI.ErrorCode.LoadError) return true;
                    if (BaseView.isPaperAll(name)) {
                      // 验证PaperAll是否属于当前Page
                      var owner = PaperAllToOwner.get(name);
                      if (owner && owner === _this5.uuid) {
                        PaperAllToOwner["delete"](name);
                        Core.inst.manager.ui.hide({
                          name: name
                        });
                      }
                    }
                    (_this5$_base_mini_sho3 = _this5._base_mini_show) == null || _this5$_base_mini_sho3["delete"](name);
                    _this5.warn('忽略子页面', name, result);
                    next();
                  }
                });
              });
            });
            aSync.start(next);
          });
          return task;
        }

        /**
         * 设置节点属性
         */;
        _proto.setNodeAttr = function setNodeAttr(attr) {
          if (!attr) return;
          if (typeof attr.zIndex === 'number') {
            // 以z坐标来代替2.x时代的zIndex
            this.node.position.set(this.node.position.x, this.node.position.y, attr.zIndex);
          }
          if (typeof attr.siblingIndex === 'number') {
            this.node.setSiblingIndex(attr.siblingIndex);
          }
        };
        _proto.show = function show(data, attr, onShow, onHide, beforeShow) {
          var _this6 = this;
          // 当前show操作需要等待其它流程
          if (this._base_view_state !== ViewState.Showed && this._base_view_state !== ViewState.Hid) {
            this._base_show_hide_delays.push(this.show.bind(this, data, attr, onShow, onHide, beforeShow));
            return;
          }

          // show流程
          var changeState = this._base_view_state === ViewState.Hid;
          if (changeState) this._base_view_state = ViewState.BeforeShow;
          var next = function next(error) {
            if (!error) {
              // 所有Paper只会是单例，而且所有Paper都不允许被当前Page重复show
              // 但PaprAll比较特殊，会被不同的Page使用，在PaperAll被不同的Page重复show时，清除之前的onHide
              if (_this6.isPaperAll()) _this6.node.emit('onHide');
            }
            beforeShow && beforeShow(error);
            if (!error) {
              // 设置展示中
              if (changeState) _this6._base_view_state = ViewState.Showing;
              onHide && _this6.node.once('onHide', onHide);

              // 触发onCreate
              if (_this6._isOnCreateCalled === false) {
                _this6._isOnCreateCalled = true;
                _this6.onCreate();
              }

              // 设置属性
              _this6.setNodeAttr(attr);

              // 触发onLoad、onEnable
              if (_this6.node.active !== true) {
                _this6.node.active = true;
              }
              _this6.log('onShow');
              var _result = null;
              try {
                _result = _this6.onShow(data);
              } catch (err) {
                _this6.onError();
                console.error(err);
              }

              // 设置遮罩，触发focus逻辑
              Core.inst.manager.ui.refreshShade();
              try {
                onShow && onShow(_result);
                _this6.node.emit('onShow', _result);
                Core.inst.manager.ui.emit(_this6._base_view_name, {
                  event: 'onShow',
                  result: _result
                });
                Core.inst.manager.ui.emit('onShow', {
                  name: _this6._base_view_name,
                  result: _result
                });
              } catch (err) {
                console.error(err);
              }
              if (changeState) _this6._base_view_state = ViewState.Showed;
            } else {
              if (changeState) _this6._base_view_state = ViewState.Hid;
            }
            if (_this6._base_show_hide_delays.length > 0) {
              _this6._base_show_hide_delays.shift()();
            }
          };
          this.log('beforeShow');
          var isNextCalled = false;
          this.beforeShow(function (error) {
            if (isNextCalled) return _this6.error('beforeShow', 'next被重复调用');
            isNextCalled = true;
            next(error || null);
          }, data);
        };
        _proto.hide = function hide(
        //@ts-ignore
        data, onHide) {
          // 当前hide操作需要等待其它流程
          if (this._base_view_state !== ViewState.Hid && this._base_view_state !== ViewState.Showed) {
            this._base_show_hide_delays.push(this.hide.bind(this, data, onHide));
            return;
          }

          // hide流程
          var changeState = this._base_view_state === ViewState.Showed;
          if (changeState) this._base_view_state = ViewState.BeforeHide;
          this.log('beforeHide');
          var error = this.beforeHide(data);
          if (!error) {
            this.log('onHide');
            if (changeState) this._base_view_state = ViewState.Hiding;
            this.hideAllMiniViews(data);
            var _result2 = null;
            try {
              _result2 = this.onHide(data);
            } catch (error) {
              console.error(error);
            }
            try {
              onHide && onHide(_result2);
              this.node.emit('onHide', _result2);
              Core.inst.manager.ui.emit(this._base_view_name, {
                event: 'onHide',
                result: _result2
              });
              Core.inst.manager.ui.emit('onHide', {
                name: this._base_view_name,
                result: _result2
              });
            } catch (error) {
              console.error(error);
            }
            if (changeState) this._base_view_state = ViewState.Hid;
            if (this.hideEvent === HideEvent.active) {
              this.node.active = false;
            } else if (this.hideEvent === HideEvent.destroy) {
              Core.inst.manager.ui.release(this);
            }
            Core.inst.manager.ui.refreshShade();
          } else {
            if (changeState) this._base_view_state = ViewState.Showed;
          }
          if (this._base_show_hide_delays.length > 0) {
            this._base_show_hide_delays.shift()();
          }
        };
        _proto.focus = function focus(boo) {
          var result = null;
          var event = '';
          if (boo) {
            result = this.onFocus();
            event = 'onFocus';
          } else {
            result = this.onLostFocus();
            event = 'onLostFocus';
          }
          this.node.emit(event, result);
          Core.inst.manager.ui.emit(this._base_view_name, {
            event: event,
            result: result
          });
          Core.inst.manager.ui.emit(event, {
            name: this._base_view_name,
            result: result
          });
        }

        /**
         * 加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * @param callback 回调
         * this.loadRes('Bag', Prefab, function(asset){})
         */;
        _proto.loadRes = function loadRes(path, type, callback) {
          Core.inst.manager.ui.loadRes(this, path, type, callback);
        }

        /**
         * 预加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * this.preloadRes('Bag', Prefab)
         */;
        _proto.preloadRes = function preloadRes(path, type) {
          Core.inst.manager.ui.preloadRes(this, path, type);
        }

        /**
         * 加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * @param callback 回调
         * this.loadResDir('Bag', Prefab, function(asset){})
         */;
        _proto.loadResDir = function loadResDir(path, type, callback) {
          Core.inst.manager.ui.loadResDir(this, path, type, callback);
        }

        /**
         * 预加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * this.preloadResDir('Bag', Prefab)
         */;
        _proto.preloadResDir = function preloadResDir(path, type) {
          Core.inst.manager.ui.preloadResDir(this, path, type);
        }

        /**
         * 设置字体资源
         * @param path UI的resources目录下的相对路径
         */;
        _proto.setFont = function setFont(target, path, onComplete) {
          this.loadRes(path, Font, function (font) {
            if (!font || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.font = font;
            onComplete && onComplete(true);
          });
        }

        /**
         * 设置Spine资源
         * @param path UI的resources目录下的相对路径
         */;
        _proto.setSpine = function setSpine(target, path, onComplete) {
          this.loadRes(path, sp.SkeletonData, function (skeletonData) {
            if (!skeletonData || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.skeletonData = skeletonData;
            onComplete && onComplete(true);
          });
        }

        /**
         * 设置图片资源
         * @param path UI的resources目录下的相对路径
         */;
        _proto.setSprite = function setSprite(target, path, onComplete) {
          this.loadRes(path, SpriteFrame, function (spriteFrame) {
            if (!spriteFrame || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.spriteFrame = spriteFrame;
            onComplete && onComplete(true);
          });
        };
        //////////////以下为可重写//////////////
        /**
        * 展示
        * @param data 传递给onShow的参数
        * @returns 
        */
        _proto.onShow = function onShow(data) {
          return data;
        }

        /**
         * 隐藏
         * @param data 传递给onHide的参数
         * @returns 
         */;
        _proto.onHide = function onHide(data) {
          return data;
        }

        /**
         * 失去焦点
         * @returns 
         */;
        _proto.onLostFocus = function onLostFocus() {
          return true;
        }

        /**
         * 获得焦点
         * @returns 
         */;
        _proto.onFocus = function onFocus() {
          return true;
        }

        /**
         * onShow前调用
         * @param next 回调，传递的error不为空时，表示错误，onShow不会执行
         * @param data 传递给onShow的参数
         */;
        _proto.beforeShow = function beforeShow(next, data) {
          next(null);
        }

        /**
         * hide前调用
         * @param data 传递给onHide的参数
         * @returns 如果返回字符串，则表示错误信息
         */;
        _proto.beforeHide = function beforeHide(data) {
          return null;
        }

        /**
         * onShow报错会执行
         */;
        _proto.onError = function onError() {
          return;
        }

        /**
         * 背景遮照的参数
         */;
        _proto.onShade = function onShade() {
          return {};
        };
        _createClass(BaseView, [{
          key: "hideEvent",
          get: function get() {
            if (this.is3D()) return HideEvent.destroy;
            return this._hideEvent;
          },
          set: function set(value) {
            if (this.is3D() && value !== HideEvent.destroy) {
              this.log('3D模式下只能是destroy模式');
              return;
            }
            this._hideEvent = value;
          }
        }, {
          key: "singleton",
          get: function get() {
            if (this.isPage()) return true;
            if (this.isPaperAll()) return true;
            if (this.isPaper()) return true;
            return this._singleton && this.constructor._singleton;
          },
          set: function set(value) {
            if (!value) {
              if (this.isPage()) {
                this.log('Page只能是单例模式');
                return;
              }
              if (this.isPaper()) {
                this.log('Paper只能是单例模式');
                return;
              }
            }
            this._singleton = this.constructor._singleton = !!value;
          }
        }, {
          key: "captureFocus",
          get: function get() {
            if (this.is3D()) return false;
            return this._captureFocus;
          },
          set: function set(value) {
            if (value && this.is3D()) {
              this.log('只有2D模式下才可以捕获焦点');
              return;
            }
            this._captureFocus = value;
          }
        }, {
          key: "shade",
          get: function get() {
            if (this.is3D()) return false;
            if (this.isPage()) return false;
            return this._shade;
          },
          set: function set(value) {
            if (value) {
              if (this.is3D()) {
                this.log('只有2D模式下才可以设置底层遮罩');
                return;
              }
              if (this.isPage()) {
                this.log('Page不可以设置底层遮罩');
                return;
              }
            }
            if (this._shade !== value) {
              var _Core$inst;
              this._shade = value;
              (_Core$inst = Core.inst) == null || (_Core$inst = _Core$inst.manager) == null || (_Core$inst = _Core$inst.ui) == null || _Core$inst.refreshShade();
            } else {
              this._shade = value;
            }
          }
        }, {
          key: "blockInput",
          get: function get() {
            if (this.is3D()) return false;
            return this._blockInput;
          },
          set: function set(value) {
            if (value && this.is3D()) {
              this.log('只有2D模式下才可以设置阻断点击事件');
              return;
            }
            this._blockInput = value;
          }
        }, {
          key: "viewName",
          get:
          /**
           * 当前view名字
           */
          function get() {
            return this._base_view_name;
          }

          /**
           * 基础名字, 如PageHome => Home
           */
        }, {
          key: "baseName",
          get: function get() {
            return this._base_view_name.slice(this.typeName.length);
          }

          /**
           * 类型名字, 如PageHome => Page
           */
        }, {
          key: "typeName",
          get: function get() {
            if (this._base_view_name.indexOf(ViewType.Paper) === 0) return ViewType.Paper;
            if (this._base_view_name.indexOf(ViewType.Pop) === 0) return ViewType.Pop;
            if (this._base_view_name.indexOf(ViewType.Top) === 0) return ViewType.Top;
            return ViewType.Page;
          }

          /**
           * 是否是单例模式
           */
        }, {
          key: "isSingleton",
          get: function get() {
            return this.singleton;
          }

          /**
           * 是否捕获焦点
           */
        }, {
          key: "isCaptureFocus",
          get: function get() {
            return this.captureFocus;
          }

          /**
           * 是否需要遮罩
           */
        }, {
          key: "isNeedShade",
          get: function get() {
            return this.shade;
          }

          /**
           * 是否展示了(不为Hid状态)
           */
        }, {
          key: "isShow",
          get: function get() {
            return this._base_view_state != ViewState.Hid;
          }
        }, {
          key: "log",
          get: function get() {
            return window.console.log.bind(window.console, '%c %s %c %s ', 'background:#1e90ff; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #1e90ff; color: #fff; font-weight: normal;', "[" + this._base_view_name + "] LOG " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #1e90ff; color: #1e90ff; font-weight: normal;');
          }
        }, {
          key: "warn",
          get: function get() {
            return window.console.warn.bind(window.console, '%c %s %c %s ', 'background:#ff7f50; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff7f50; color: #fff; font-weight: normal;', "[" + this._base_view_name + "] WARN " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff7f50; color: #ff7f50; font-weight: normal;');
          }
        }, {
          key: "error",
          get: function get() {
            return window.console.error.bind(window.console, '%c %s %c %s ', 'background:#ff4757; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff4757; color: #fff; font-weight: normal;', "[" + this._base_view_name + "] ERROR " + new Date().toLocaleString(), 'background:#ffffff; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff4757; color: #ff4757; font-weight: normal;');
          }
        }]);
        return BaseView;
      }(Component), _class3._singleton = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_hideEvent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HideEvent.destroy;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "hideEvent", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "hideEvent"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_singleton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "singleton", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "singleton"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_captureFocus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "captureFocus", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "captureFocus"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_shade", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shade", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "shade"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_blockInput", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blockInput", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "blockInput"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cc-comp-frame-animation.ts", ['cc', './index2.ts', './FrameAnimation.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      var _setter = {};
      _setter.FrameAnimation = module.FrameAnimation;
      _setter.FrameAnimationClip = module.FrameAnimationClip;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "b378fCNvMlNg4uQbiO0hWzI", "cc-comp-frame-animation", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cc-comp-list-view.ts", ['cc', './index.ts', './ListView.ts', './ListItem.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      exports('ListView', module.default);
    }, function (module) {
      exports('ListItem', module.default);
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b79fEtxRxITroJTfQbiYmq", "cc-comp-list-view", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cc-ctrl-rocker.ts", ['cc', './index3.ts', './Rocker.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      var _setter = {};
      _setter.Rocker = module.Rocker;
      _setter.RockerEventType = module.RockerEventType;
      _setter.RockerType = module.RockerType;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1755F4Rk9KebQIB8Z/QdVO", "cc-ctrl-rocker", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Core.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './debug.ts', './logger.ts', './storage.ts', './task.ts'], function (exports) {
  var _createClass, cclegacy, EventTarget, js, debug, logger, storage, task;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
      js = module.js;
    }, function (module) {
      debug = module;
    }, function (module) {
      logger = module.default;
    }, function (module) {
      storage = module.default;
    }, function (module) {
      task = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4a49Ny+p5ESLkbKbyXAdn/", "Core", undefined);
      var EventType = /*#__PURE__*/function (EventType) {
        EventType["EVENT_APPINIT_FINISHED"] = "EVENT_APPINIT_FINISHED";
        EventType["EVENT_SYS_MANAGER_INITED"] = "EVENT_SYS_MANAGER_INITED";
        EventType["EVENT_USER_MANAGER_INITED"] = "EVENT_USER_MANAGER_INITED";
        EventType["EVENT_MANAGER_INITED"] = "EVENT_MANAGER_INITED";
        EventType["EVENT_MANAGER_FINISHED"] = "EVENT_MANAGER_FINISHED";
        return EventType;
      }(EventType || {});
      var EventMap = {};
      var Lib = {
        task: task,
        storage: storage,
        debug: debug,
        logger: logger
      };
      var Config = {};
      var Data = {};
      var Store = {};
      var Manager = {};
      var manager = {};
      var eventTarget = new EventTarget();
      var Core = exports('default', /*#__PURE__*/function () {
        function Core() {
          this.lib = Lib;
          this.config = null;
          this.data = null;
          this.store = null;
          this.Manager = null;
          this.manager = null;
          this.config = Config;
          this.data = Data;
          this.store = Store;
          this.Manager = Manager;
          this.manager = manager;
          {
            if (this.constructor !== Core && !js.getClassById('App')) {
              js.setClassAlias(this.constructor, 'App');
            }
          }
        }
        var _proto = Core.prototype;
        _proto.on = function on(event, callback, target) {
          if (EventMap[event]) callback.call(target);
          eventTarget.on(event, callback, target);
        };
        _proto.once = function once(event, callback, target) {
          if (EventMap[event]) {
            callback.call(target);
          } else {
            eventTarget.once(event, callback, target);
          }
        };
        _proto.off = function off(event, callback, target) {
          eventTarget.off(event, callback, target);
        };
        _proto.targetOff = function targetOff(target) {
          eventTarget.targetOff(target);
        }

        /**
         * 请不要手动调用
         */;
        Core.emit = function emit(event) {
          EventMap[event] = true;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          eventTarget.emit.apply(eventTarget, [event].concat(args));
        };
        _createClass(Core, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new Core();
            return this._inst;
          }
        }]);
        return Core;
      }());
      Core.EventType = EventType;
      Core._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
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
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('unobservable', unobservable);
      cclegacy._RF.push({}, "c0d5do7I/BADoW7bHVLnAjr", "debug", undefined);
      /**
       * 将某个变量设置为不可观测(不可在浏览器中打印)
       * @param owner object | string | number | boolean | Array | Function | ...
       * @param callback 被观测时触发回调
       * @returns 
       */
      function unobservable(owner, callback) {
        return;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EventTarget, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b4ea6NEN3hCPZiqp3hRVbvU", "EventManager", undefined);
      var ccclass = _decorator.ccclass;
      var EventManager = exports('default', (_dec = ccclass('EventManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(EventManager, _BaseManager);
        function EventManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this.events = new Map();
          return _this;
        }
        var _proto = EventManager.prototype;
        _proto.clear = function clear() {
          return this.events.clear();
        };
        _proto["delete"] = function _delete(rootName) {
          return this.events["delete"](rootName);
        };
        _proto.get = function get(rootName) {
          if (this.events.has(rootName)) {
            return this.events.get(rootName);
          }
          var event = new EventTarget();
          this.events.set(rootName, event);
          return event;
        };
        return EventManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FrameAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, SpriteFrame, Sprite, Component, EDITOR;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      EDITOR = module.EDITOR;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class6;
      cclegacy._RF.push({}, "ffafaIVuOdM4beJRo/7GrvZ", "FrameAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent;
      var EventType = /*#__PURE__*/function (EventType) {
        EventType["PLAY"] = "play";
        EventType["STOP"] = "stop";
        EventType["PAUSE"] = "pause";
        EventType["RESUME"] = "resume";
        EventType["LASTFRAME"] = "lastframe";
        EventType["FINISHED"] = "finished";
        return EventType;
      }(EventType || {});
      /**播放完成回调 */
      /**自动播放生命周期枚举 */
      var Time = /*#__PURE__*/function (Time) {
        Time[Time["none"] = 0] = "none";
        Time[Time["onLoad"] = 1] = "onLoad";
        Time[Time["start"] = 2] = "start";
        Time[Time["onEnable"] = 3] = "onEnable";
        return Time;
      }(Time || {});
      /**自动播放生命周期声明 */
      var timeEnum = Enum(Time);
      var FrameAnimationClip = exports('FrameAnimationClip', (_dec = ccclass('pkg:FrameAnimationClip'), _dec2 = property([SpriteFrame]), _dec(_class = (_class2 = function FrameAnimationClip() {
        _initializerDefineProperty(this, "animation", _descriptor, this);
        _initializerDefineProperty(this, "frameRate", _descriptor2, this);
        _initializerDefineProperty(this, "spriteFrames", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'animation';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frameRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      var FrameAnimation = exports('FrameAnimation', (_dec3 = ccclass('pkg:FrameAnimation'), _dec4 = requireComponent(Sprite), _dec5 = menu('pkg/FrameAnimation'), _dec6 = property([FrameAnimationClip]), _dec7 = property({
        tooltip: '播放速度倍率'
      }), _dec8 = property({
        type: timeEnum,
        tooltip: '自动播放时机 none为不播放'
      }), _dec9 = property({
        visible: function visible() {
          return this.autoPlay !== Time.none;
        }
      }), _dec10 = property({
        visible: function visible() {
          return this.autoPlay !== Time.none;
        }
      }), _dec3(_class4 = _dec4(_class4 = _dec5(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FrameAnimation, _Component);
        function FrameAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clips", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_timeScale", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPlay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_loop", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_animation", _descriptor8, _assertThisInitialized(_this));
          /**渲染组件 */
          _this.sprite = null;
          /**渲染下标 */
          _this._renderIndex = 0;
          /**渲染等待时间 */
          _this._renderDelayTime = 0;
          /**完成回调 */
          _this._completeCallback = null;
          /**循环次数 */
          _this._loopTimes = 0;
          /**已经完成的次数 */
          _this._completeTimes = 0;
          /**是否正在播放 */
          _this._playing = false;
          /**是否暂停了 */
          _this._paused = false;
          /**是否播放完成自动销毁 */
          _this._autoDestroy = false;
          return _this;
        }
        var _proto = FrameAnimation.prototype;
        _proto.getClip = function getClip(animation) {
          return this.clips.find(function (clip) {
            return clip.animation === animation;
          });
        };
        _proto.display = function display() {
          this.render(this.getClip(this.animation), this.timeScale >= 0 ? 0 : -1);
        };
        _proto.render = function render(clip, index) {
          if (!clip) {
            this.sprite.spriteFrame = null;
            return index;
          }
          index = index >= 0 ? index % clip.spriteFrames.length : index % clip.spriteFrames.length + clip.spriteFrames.length - 1;
          var frame = clip.spriteFrames[index];
          if (!frame) return index;

          // 必须先设置null，不然在编辑器中预览会导致不刷新
          this.sprite.spriteFrame = null;
          this.sprite.spriteFrame = frame;
          return index;
        };
        /**完成一次播放 */
        _proto.onComplete = function onComplete() {
          this._completeTimes++;
          // 循环时每次完成都进行回调
          this._completeCallback && this._completeCallback(true);
          if (this._loopTimes > 0 && this._completeTimes >= this._loopTimes) {
            this.stop();
            // 自动销毁
            if (this._autoDestroy) this.node.destroy();
          }
        };
        _proto.onLoad = function onLoad() {
          this.sprite = this.node.getComponent(Sprite);
          this.display();

          // 自动播放处理
          if (this.autoPlay === Time.onLoad && !EDITOR) {
            this.play(this.animation, this.loop ? -1 : 1);
          }
        };
        _proto.start = function start() {
          if (this.autoPlay === Time.start && !EDITOR) {
            this.play(this.animation, this.loop ? -1 : 1);
          }
        };
        _proto.onEnable = function onEnable() {
          if (this.autoPlay === Time.onEnable && !EDITOR) {
            this.play(this.animation, this.loop ? -1 : 1);
          }
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.update = function update(dt) {
          if (!this._playing || this._paused) return;
          if (this.timeScale === 0) return;
          if (this._renderDelayTime > 0) {
            this._renderDelayTime -= dt;
          }
          if (this._renderDelayTime <= 0) {
            var clip = this.getClip(this.animation);
            if (!clip) {
              this._renderDelayTime = 0;
              return;
            }
            if (this.timeScale > 0) {
              this._renderIndex = this.render(clip, this._renderIndex) + 1;
              this._renderDelayTime += 1 / clip.frameRate / this.timeScale;
              if (this._renderIndex >= clip.spriteFrames.length) {
                {
                  if (this.loop) this.node.emit(FrameAnimation.EventType.LASTFRAME);
                  this.node.emit(FrameAnimation.EventType.FINISHED);
                  this.onComplete();
                }
              }
            } else {
              this._renderIndex = this.render(clip, this._renderIndex) - 1;
              this._renderDelayTime += 1 / clip.frameRate / Math.abs(this.timeScale);
              if (this._renderIndex <= -1) {
                {
                  if (this.loop) this.node.emit(FrameAnimation.EventType.LASTFRAME);
                  this.node.emit(FrameAnimation.EventType.FINISHED);
                  this.onComplete();
                }
              }
            }
          }
        }

        /**
         * @description: 播放动画
         * @param {string} animation 动画名称
         * @param {number} times 播放次数
         * @param {{onComplete?: IComplete, timeScale?: number, autoDestroy?: boolean}} opts 可选项
         */;
        _proto.play = function play(animation, times, opts) {
          var _opts$timeScale;
          if (times === void 0) {
            times = 1;
          }
          // 先停止
          this.stop();
          // 无效名称返回
          if (!animation) return;
          // 设置播放速率
          this.timeScale = (_opts$timeScale = opts == null ? void 0 : opts.timeScale) != null ? _opts$timeScale : this.timeScale;
          // 设置自动销毁
          this._autoDestroy = (opts == null ? void 0 : opts.autoDestroy) || false;
          // 设置回调
          this._completeCallback = (opts == null ? void 0 : opts.onComplete) || null;
          // 设置循环次数
          this._loopTimes = Math.floor(times);
          // 初始化数据
          this.loop = true;
          this._renderIndex = this.timeScale >= 0 ? 0 : -1;
          this._renderDelayTime = 0;
          this._completeTimes = 0;
          this._paused = false;
          this._playing = true;
          // 设置动画名称
          this.animation = animation;
          this.node.emit(FrameAnimation.EventType.PLAY);
        }

        /**
         * @description: 播放1次动画
         * @param {string} animation 动画名称
         * @param {{onComplete?: IComplete, timeScale?: number, autoDestroy?: boolean }} opts 可选项
         */;
        _proto.playOnce = function playOnce(animation, opts) {
          this.play(animation, 1, opts);
        }

        /**
         * @description: 循环播放动画
         * @param {string} animation 动画名称
         * @param {{onComplete?: IComplete, timeScale?: number}} opts 可选项
         */;
        _proto.playLoop = function playLoop(animation, opts) {
          this.play(animation, -1, opts);
        }

        /**
         * @description: 停止播放
         */;
        _proto.stop = function stop() {
          if (this._playing) {
            this._playing = false;
            this._paused = false;
            this.display();
            // 完成一次播放的中途被停止了执行失败回调
            if ((this._loopTimes < 0 || this._loopTimes > this._completeTimes) && this._completeCallback) {
              this._completeCallback(false);
              this._completeCallback = null;
            }
            this.node.emit(FrameAnimation.EventType.STOP);
            return true;
          }
          return false;
        }

        /**
         * @description: 暂停
         * @returns {boolean}
         */;
        _proto.pause = function pause() {
          if (this._playing) {
            this._paused = true;
            this.node.emit(FrameAnimation.EventType.PAUSE);
            return true;
          }
          return false;
        }

        /**
         * @description: 恢复暂停
         * @returns {boolean}
         */;
        _proto.resume = function resume() {
          if (this._playing) {
            this._paused = false;
            this.node.emit(FrameAnimation.EventType.RESUME);
            return true;
          }
          return false;
        };
        _createClass(FrameAnimation, [{
          key: "timeScale",
          get: function get() {
            return this._timeScale;
          },
          set: function set(value) {
            this._timeScale = value;
          }
        }, {
          key: "loop",
          get: function get() {
            if (this._loop === false) return this._loop;
            return this.autoPlay === Time.none ? false : this._loop;
          },
          set: function set(value) {
            this._loop = value;
          }
        }, {
          key: "animation",
          get: function get() {
            return this._animation;
          },
          set: function set(value) {
            this._animation = value;
          }
        }]);
        return FrameAnimation;
      }(Component), _class6.EventType = EventType, _class6), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "clips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "_timeScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "timeScale", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "timeScale"), _class5.prototype), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "autoPlay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Time.none;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "_loop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "loop", [_dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "loop"), _class5.prototype), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "_animation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'animation';
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "animation", [_dec10], Object.getOwnPropertyDescriptor(_class5.prototype, "animation"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/handle.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        appInited: appInited,
        appReady: appReady,
        cccInited: cccInited,
        cccReady: cccReady
      });
      cclegacy._RF.push({}, "8afafha+81CE6rLLpM3km/u", "handle", undefined);
      /**
       * ccc除物理引擎等外的基础功能已经准备好了
       */
      function cccReady(app) {}

      /**
       * ccc全部功能都初始化完毕了
       */
      function cccInited(app) {}

      /**
       * app除了用户自定义Manager未加载外，其它都已准备好了
       */
      function appReady(app) {}

      /**
       * app全部功能都初始化完毕了
       */
      function appInited(app) {}
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './ListView.ts', './ListItem.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('ListView', module.default);
    }, function (module) {
      exports('ListItem', module.default);
    }],
    execute: function () {
      cclegacy._RF.push({}, "18eab+eSyNN370gFQ4JtPmf", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc', './FrameAnimation.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.FrameAnimation = module.FrameAnimation;
      _setter.FrameAnimationClip = module.FrameAnimationClip;
      _setter.default = module.FrameAnimation;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "778e6YATpBN5KggwXkL4uVD", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index3.ts", ['cc', './Rocker.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.Rocker = module.Rocker;
      _setter.RockerEventType = module.RockerEventType;
      _setter.RockerType = module.RockerType;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "c4c7dhwmsdDSo+GshRkeiNo", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Node, SpriteFrame, Sprite, EventHandler, UITransform, tween, Vec3, Button, Component, DEV;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      EventHandler = module.EventHandler;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      DEV = module.DEV;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "8568a9J4opFTrH0kTvW/HX4", "ListItem", undefined);
      /******************************************
       * @author kL <klk0@qq.com>
       * @date 2019/12/9
       * @doc 列表Item组件.
       * 说明：
       *      1、此组件须配合List组件使用。（配套的配套的..）
       * @end
       ******************************************/
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        menu = _decorator.menu,
        executionOrder = _decorator.executionOrder;
      var SelectedType = /*#__PURE__*/function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
        SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
        return SelectedType;
      }(SelectedType || {});
      var ListItem = exports('default', (_dec = ccclass('pkg:ListItem'), _dec2 = disallowMultiple(), _dec3 = menu('pkg/ListItem'), _dec4 = executionOrder(-5001), _dec5 = property({
        type: Enum(SelectedType),
        tooltip: DEV
      }), _dec6 = property({
        type: Node,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode > SelectedType.NONE;
        }
      }), _dec7 = property({
        type: SpriteFrame,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode == SelectedType.SWITCH;
        }
      }), _dec8 = property({
        tooltip: DEV
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);
        function ListItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //选择模式
          _initializerDefineProperty(_this, "selectedMode", _descriptor, _assertThisInitialized(_this));
          //被选标志
          _initializerDefineProperty(_this, "selectedNode", _descriptor2, _assertThisInitialized(_this));
          //被选择的SpriteFrame
          _initializerDefineProperty(_this, "selectedSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          //未被选择的SpriteFrame
          _this._unselectedSpriteFrame = null;
          //自适应尺寸
          _initializerDefineProperty(_this, "adaptiveSize", _descriptor4, _assertThisInitialized(_this));
          //选择
          _this._selected = false;
          //按钮组件
          _this._btnCom = void 0;
          //依赖的List组件
          _this.list = void 0;
          //是否已经注册过事件
          _this._eventReg = false;
          //序列id
          _this.listId = void 0;
          return _this;
        }
        var _proto = ListItem.prototype;
        _proto.onLoad = function onLoad() {
          // //没有按钮组件的话，selectedFlag无效
          // if (!this.btnCom)
          //     this.selectedMode == SelectedType.NONE;
          //有选择模式时，保存相应的东西
          if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedNode.getComponent(Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        };
        _proto._registerEvent = function _registerEvent() {
          if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
              this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }
            if (this.adaptiveSize) {
              this.node.on(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = true;
          }
        };
        _proto._onSizeChange = function _onSizeChange() {
          this.list._onItemAdaptive(this.node);
        }
        /**
         * 创建事件
         * @param {cc.Component} component 组件脚本
         * @param {string} handlerName 触发函数名称
         * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
         * @returns cc.Component.EventHandler
         */;
        _proto.createEvt = function createEvt(component, handlerName, node) {
          if (node === void 0) {
            node = null;
          }
          if (!component.isValid) return; //有些异步加载的，节点以及销毁了。
          component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
          var evt = new EventHandler();
          evt.target = node || component.node;
          evt.component = component['comName'];
          evt.handler = handlerName;
          return evt;
        };
        _proto.showAni = function showAni(aniType, callFunc, del) {
          var t = this;
          var twe;
          var ut = t.node.getComponent(UITransform);
          switch (aniType) {
            case 0:
              //向上消失
              twe = tween(t.node).to(0.2, {
                scale: new Vec3(0.7, 0.7)
              }).by(0.3, {
                position: new Vec3(0, ut.height * 2)
              });
              break;
            case 1:
              //向右消失
              twe = tween(t.node).to(0.2, {
                scale: new Vec3(0.7, 0.7)
              }).by(0.3, {
                position: new Vec3(ut.width * 2, 0)
              });
              break;
            case 2:
              //向下消失
              twe = tween(t.node).to(0.2, {
                scale: new Vec3(0.7, 0.7)
              }).by(0.3, {
                position: new Vec3(0, ut.height * -2)
              });
              break;
            case 3:
              //向左消失
              twe = tween(t.node).to(0.2, {
                scale: new Vec3(0.7, 0.7)
              }).by(0.3, {
                position: new Vec3(ut.width * -2, 0)
              });
              break;
            default:
              //默认：缩小消失
              twe = tween(t.node).to(0.3, {
                scale: new Vec3(0.1, 0.1)
              });
              break;
          }
          if (callFunc || del) {
            twe.call(function () {
              if (del) {
                t.list._delSingleItem(t.node);
                for (var n = t.list.displayData.length - 1; n >= 0; n--) {
                  if (t.list.displayData[n].id == t.listId) {
                    t.list.displayData.splice(n, 1);
                    break;
                  }
                }
              }
              callFunc();
            });
          }
          twe.start();
        };
        _proto.onClickThis = function onClickThis() {
          this.list.selectedId = this.listId;
        };
        _createClass(ListItem, [{
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(val) {
            this._selected = val;
            if (!this.selectedNode) return;
            switch (this.selectedMode) {
              case SelectedType.TOGGLE:
                this.selectedNode.active = val;
                break;
              case SelectedType.SWITCH:
                var sp = this.selectedNode.getComponent(Sprite);
                if (sp) {
                  sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                }
                break;
            }
          }
        }, {
          key: "btnCom",
          get: function get() {
            if (!this._btnCom) this._btnCom = this.node.getComponent(Button);
            return this._btnCom;
          }
        }]);
        return ListItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectedType.NONE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "adaptiveSize", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './ListItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ScrollView, Enum, Node, Prefab, CCFloat, EventHandler, CCBoolean, CCInteger, isValid, UITransform, Layout, instantiate, NodePool, Vec3, Size, Widget, tween, Component, DEV, ListItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Enum = module.Enum;
      Node = module.Node;
      Prefab = module.Prefab;
      CCFloat = module.CCFloat;
      EventHandler = module.EventHandler;
      CCBoolean = module.CCBoolean;
      CCInteger = module.CCInteger;
      isValid = module.isValid;
      UITransform = module.UITransform;
      Layout = module.Layout;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
      Size = module.Size;
      Widget = module.Widget;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      DEV = module.DEV;
    }, function (module) {
      ListItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "9a7ca2towZB6Y5PU6kN2hBG", "ListView", undefined);
      /******************************************
       * @author kL <klk0@qq.com>
       * @date 2020/12/9
       * @doc 列表组件.
       * @end
       ******************************************/
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        menu = _decorator.menu,
        executionOrder = _decorator.executionOrder,
        requireComponent = _decorator.requireComponent;
      var TemplateType = /*#__PURE__*/function (TemplateType) {
        TemplateType[TemplateType["NODE"] = 1] = "NODE";
        TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
        return TemplateType;
      }(TemplateType || {});
      var SlideType = /*#__PURE__*/function (SlideType) {
        SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
        SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
        SlideType[SlideType["PAGE"] = 3] = "PAGE";
        return SlideType;
      }(SlideType || {}); //页面模式，将强制关闭滚动惯性
      var SelectedType = /*#__PURE__*/function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
        SelectedType[SelectedType["MULT"] = 2] = "MULT";
        return SelectedType;
      }(SelectedType || {}); //多选
      var ListView = exports('default', (_dec = ccclass('pkg:ListView'), _dec2 = disallowMultiple(), _dec3 = menu('pkg/ListView'), _dec4 = requireComponent(ScrollView), _dec5 = executionOrder(-5000), _dec6 = property({
        type: Enum(TemplateType),
        tooltip: DEV
      }), _dec7 = property({
        type: Node,
        tooltip: DEV,
        visible: function visible() {
          return this.templateType == TemplateType.NODE;
        }
      }), _dec8 = property({
        type: Prefab,
        tooltip: DEV,
        visible: function visible() {
          return this.templateType == TemplateType.PREFAB;
        }
      }), _dec9 = property({}), _dec10 = property({
        type: Enum(SlideType),
        tooltip: DEV
      }), _dec11 = property({
        type: CCFloat,
        range: [0, 1, 0.1],
        tooltip: DEV,
        slide: true,
        visible: function visible() {
          return this._slideMode == SlideType.PAGE;
        }
      }), _dec12 = property({
        type: EventHandler,
        tooltip: DEV,
        visible: function visible() {
          return this._slideMode == SlideType.PAGE;
        }
      }), _dec13 = property({}), _dec14 = property({
        type: CCBoolean,
        tooltip: DEV
      }), _dec15 = property({
        tooltip: DEV,
        visible: function visible() {
          var val = /*this.virtual &&*/this.slideMode == SlideType.NORMAL;
          if (!val) this.cyclic = false;
          return val;
        }
      }), _dec16 = property({
        tooltip: DEV,
        visible: function visible() {
          return this.virtual;
        }
      }), _dec17 = property({
        tooltip: DEV,
        visible: function visible() {
          var val = this.virtual && !this.lackCenter;
          if (!val) this.lackSlide = false;
          return val;
        }
      }), _dec18 = property({
        type: CCInteger
      }), _dec19 = property({
        type: CCInteger,
        range: [0, 6, 1],
        tooltip: DEV,
        slide: true
      }), _dec20 = property({
        type: CCInteger,
        range: [0, 12, 1],
        tooltip: DEV,
        slide: true
      }), _dec21 = property({
        type: EventHandler,
        tooltip: DEV
      }), _dec22 = property({
        type: Enum(SelectedType),
        tooltip: DEV
      }), _dec23 = property({
        type: EventHandler,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode > SelectedType.NONE;
        }
      }), _dec24 = property({
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode == SelectedType.SINGLE;
        }
      }), _dec25 = property({
        type: CCInteger,
        tooltip: DEV,
        visible: function visible() {
          return this.selectedMode == SelectedType.MULT;
        }
      }), _dec26 = property({
        serializable: false
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListView, _Component);
        function ListView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //模板类型
          _initializerDefineProperty(_this, "templateType", _descriptor, _assertThisInitialized(_this));
          //模板Item（Node）
          _initializerDefineProperty(_this, "tmpNode", _descriptor2, _assertThisInitialized(_this));
          //模板Item（Prefab）
          _initializerDefineProperty(_this, "tmpPrefab", _descriptor3, _assertThisInitialized(_this));
          //滑动模式
          _initializerDefineProperty(_this, "_slideMode", _descriptor4, _assertThisInitialized(_this));
          //翻页作用距离
          _initializerDefineProperty(_this, "pageDistance", _descriptor5, _assertThisInitialized(_this));
          //页面改变事件
          _initializerDefineProperty(_this, "pageChangeEvent", _descriptor6, _assertThisInitialized(_this));
          //是否为虚拟列表（动态列表）
          _initializerDefineProperty(_this, "_virtual", _descriptor7, _assertThisInitialized(_this));
          //是否为循环列表
          _initializerDefineProperty(_this, "cyclic", _descriptor8, _assertThisInitialized(_this));
          //缺省居中
          _initializerDefineProperty(_this, "lackCenter", _descriptor9, _assertThisInitialized(_this));
          //缺省可滑动
          _initializerDefineProperty(_this, "lackSlide", _descriptor10, _assertThisInitialized(_this));
          //刷新频率
          _initializerDefineProperty(_this, "_updateRate", _descriptor11, _assertThisInitialized(_this));
          //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
          _initializerDefineProperty(_this, "frameByFrameRenderNum", _descriptor12, _assertThisInitialized(_this));
          //渲染事件（渲染器）
          _initializerDefineProperty(_this, "renderEvent", _descriptor13, _assertThisInitialized(_this));
          //选择模式
          _initializerDefineProperty(_this, "selectedMode", _descriptor14, _assertThisInitialized(_this));
          //触发选择事件
          _initializerDefineProperty(_this, "selectedEvent", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "repeatEventSingle", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multSelectedMaxNum", _descriptor17, _assertThisInitialized(_this));
          //当前选择id
          _this._selectedId = -1;
          _this._lastSelectedId = void 0;
          _this.multSelected = void 0;
          _this._forceUpdate = false;
          _this._align = void 0;
          _this._horizontalDir = void 0;
          _this._verticalDir = void 0;
          _this._startAxis = void 0;
          _this._alignCalcType = void 0;
          _this.content = void 0;
          _this._contentUt = void 0;
          _this.firstListId = void 0;
          _this.displayItemNum = void 0;
          _this._updateDone = true;
          _this._updateCounter = void 0;
          _this._actualCount = void 0;
          _this._cyclicNum = void 0;
          _this._cyclicPos1 = void 0;
          _this._cyclicPos2 = void 0;
          //列表数量
          _initializerDefineProperty(_this, "_count", _descriptor18, _assertThisInitialized(_this));
          _this._inited = false;
          _this._scrollView = void 0;
          _this._layout = void 0;
          _this._resizeMode = void 0;
          _this._topGap = void 0;
          _this._rightGap = void 0;
          _this._bottomGap = void 0;
          _this._leftGap = void 0;
          _this._columnGap = void 0;
          _this._lineGap = void 0;
          _this._colLineNum = void 0;
          _this._lastDisplayData = void 0;
          _this.displayData = void 0;
          _this._pool = void 0;
          _this._itemTmp = void 0;
          _this._itemTmpUt = void 0;
          _this._needUpdateWidget = false;
          _this._itemSize = void 0;
          _this._sizeType = void 0;
          _this._customSize = void 0;
          _this.frameCount = void 0;
          _this._aniDelRuning = false;
          _this._aniDelCB = void 0;
          _this._aniDelItem = void 0;
          _this._aniDelBeforePos = void 0;
          _this._aniDelBeforeScale = void 0;
          _this.viewTop = void 0;
          _this.viewRight = void 0;
          _this.viewBottom = void 0;
          _this.viewLeft = void 0;
          _this._doneAfterUpdate = false;
          _this.elasticTop = void 0;
          _this.elasticRight = void 0;
          _this.elasticBottom = void 0;
          _this.elasticLeft = void 0;
          _this.scrollToListId = void 0;
          _this.adhering = false;
          _this._adheringBarrier = false;
          _this.nearestListId = void 0;
          _this.curPageNum = 0;
          _this._beganPos = void 0;
          _this._scrollPos = void 0;
          _this._curScrollIsTouch = void 0;
          //当前滑动是否为手动
          _this._scrollToListId = void 0;
          _this._scrollToEndTime = void 0;
          _this._scrollToSo = void 0;
          _this._lack = void 0;
          _this._allItemSize = void 0;
          _this._allItemSizeNoEdge = void 0;
          _this._scrollItem = void 0;
          //当前控制 ScrollView 滚动的 Item
          _this._thisNodeUt = void 0;
          return _this;
        }
        var _proto = ListView.prototype;
        //----------------------------------------------------------------------------
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.onDestroy = function onDestroy() {
          var t = this;
          if (isValid(t._itemTmp)) t._itemTmp.destroy();
          if (isValid(t.tmpNode)) t.tmpNode.destroy();
          t._pool && t._pool.clear();
        };
        _proto.onEnable = function onEnable() {
          // if (!EDITOR)
          this._registerEvent();
          this._init();
          // 处理重新显示后，有可能上一次的动画移除还未播放完毕，导致动画卡住的问题
          if (this._aniDelRuning) {
            this._aniDelRuning = false;
            if (this._aniDelItem) {
              if (this._aniDelBeforePos) {
                this._aniDelItem.position = this._aniDelBeforePos;
                delete this._aniDelBeforePos;
              }
              if (this._aniDelBeforeScale) {
                this._aniDelItem.scale = this._aniDelBeforeScale;
                delete this._aniDelBeforeScale;
              }
              delete this._aniDelItem;
            }
            if (this._aniDelCB) {
              this._aniDelCB();
              delete this._aniDelCB;
            }
          }
        };
        _proto.onDisable = function onDisable() {
          // if (!EDITOR)
          this._unregisterEvent();
        }
        //注册事件
        ;

        _proto._registerEvent = function _registerEvent() {
          var t = this;
          t.node.on(Node.EventType.TOUCH_START, t._onTouchStart, t);
          t.node.on('touch-up', t._onTouchUp, t);
          t.node.on(Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
          t.node.on('scroll-began', t._onScrollBegan, t);
          t.node.on('scroll-ended', t._onScrollEnded, t);
          t.node.on('scrolling', t._onScrolling, t);
          t.node.on(Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }
        //卸载事件
        ;

        _proto._unregisterEvent = function _unregisterEvent() {
          var t = this;
          t.node.off(Node.EventType.TOUCH_START, t._onTouchStart, t);
          t.node.off('touch-up', t._onTouchUp, t);
          t.node.off(Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
          t.node.off('scroll-began', t._onScrollBegan, t);
          t.node.off('scroll-ended', t._onScrollEnded, t);
          t.node.off('scrolling', t._onScrolling, t);
          t.node.off(Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        }
        //初始化各种..
        ;

        _proto._init = function _init() {
          var t = this;
          if (t._inited) return;
          t._thisNodeUt = t.node.getComponent(UITransform);
          t._scrollView = t.node.getComponent(ScrollView);
          t.content = t._scrollView.content;
          t._contentUt = t.content.getComponent(UITransform);
          if (!t.content) {
            console.error(t.node.name + "'s ScrollView unset content!");
            return;
          }
          t._layout = t.content.getComponent(Layout);
          t._align = t._layout.type; //排列模式
          t._resizeMode = t._layout.resizeMode; //自适应模式
          t._startAxis = t._layout.startAxis;
          t._topGap = t._layout.paddingTop; //顶边距
          t._rightGap = t._layout.paddingRight; //右边距
          t._bottomGap = t._layout.paddingBottom; //底边距
          t._leftGap = t._layout.paddingLeft; //左边距

          t._columnGap = t._layout.spacingX; //列距
          t._lineGap = t._layout.spacingY; //行距

          t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;

          t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
          t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向

          t.setTemplateItem(instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));

          // 特定的滑动模式处理
          if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
            t._scrollView.inertia = false;
            t._scrollView._onMouseWheel = function () {
              return;
            };
          }
          if (!t.virtual)
            // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
          t._lastDisplayData = []; //最后一次刷新的数据
          t.displayData = []; //当前数据
          t._pool = new NodePool(); //这是个池子..
          t._forceUpdate = false; //是否强制更新
          t._updateCounter = 0; //当前分帧渲染帧数
          t._updateDone = true; //分帧渲染是否完成

          t.curPageNum = 0; //当前页数

          if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
              return false;
            };
          }
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              {
                switch (t._horizontalDir) {
                  case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    t._alignCalcType = 1;
                    break;
                  case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    t._alignCalcType = 2;
                    break;
                }
                break;
              }
            case Layout.Type.VERTICAL:
              {
                switch (t._verticalDir) {
                  case Layout.VerticalDirection.TOP_TO_BOTTOM:
                    t._alignCalcType = 3;
                    break;
                  case Layout.VerticalDirection.BOTTOM_TO_TOP:
                    t._alignCalcType = 4;
                    break;
                }
                break;
              }
            case Layout.Type.GRID:
              {
                switch (t._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    switch (t._verticalDir) {
                      case Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                      case Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                    }
                    break;
                  case Layout.AxisDirection.VERTICAL:
                    switch (t._horizontalDir) {
                      case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                      case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                    }
                    break;
                }
                break;
              }
          }
          // 清空 content
          // t.content.children.forEach((child: Node) => {
          //     child.removeFromParent();
          //     if (child != t.tmpNode && child.isValid)
          //         child.destroy();
          // });
          t.content.removeAllChildren();
          t._inited = true;
        }
        /**
         * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
         * @param {Number} dt
         */;
        _proto._processAutoScrolling = function _processAutoScrolling(dt) {
          // ------------- scroll-view 里定义的一些常量 -------------
          var OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
          var EPSILON = 1e-4;
          var ZERO = new Vec3();
          var quintEaseOut = function quintEaseOut(time) {
            time -= 1;
            return time * time * time * time * time + 1;
          };
          // ------------- scroll-view 里定义的一些常量 -------------

          var sv = this._scrollView;
          var isAutoScrollBrake = sv['_isNecessaryAutoScrollBrake']();
          var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
          sv['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
          var percentage = Math.min(1, sv['_autoScrollAccumulatedTime'] / sv['_autoScrollTotalTime']);
          if (sv['_autoScrollAttenuate']) {
            percentage = quintEaseOut(percentage);
          }
          var clonedAutoScrollTargetDelta = sv['_autoScrollTargetDelta'].clone();
          clonedAutoScrollTargetDelta.multiplyScalar(percentage);
          var clonedAutoScrollStartPosition = sv['_autoScrollStartPosition'].clone();
          clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
          var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
          var fireEvent = Math.abs(percentage - 1) <= sv['getScrollEndedEventTiming']();
          if (fireEvent && !sv['_isScrollEndedWithThresholdEventFired']) {
            sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);
            sv['_isScrollEndedWithThresholdEventFired'] = true;
          }
          if (sv['elastic']) {
            var brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
            brakeOffsetPosition.subtract(sv['_autoScrollBrakingStartPosition']);
            if (isAutoScrollBrake) {
              brakeOffsetPosition.multiplyScalar(brakingFactor);
            }
            clonedAutoScrollStartPosition.set(sv['_autoScrollBrakingStartPosition']);
            clonedAutoScrollStartPosition.add(brakeOffsetPosition);
          } else {
            var moveDelta = clonedAutoScrollStartPosition.clone();
            moveDelta.subtract(sv['_getContentPosition']());
            var outOfBoundary = sv['_getHowMuchOutOfBoundary'](moveDelta);
            if (!outOfBoundary.equals(ZERO, EPSILON)) {
              clonedAutoScrollStartPosition.add(outOfBoundary);
              reachedEnd = true;
            }
          }
          if (reachedEnd) {
            sv['_autoScrolling'] = false;
          }
          var deltaMove = new Vec3(clonedAutoScrollStartPosition);
          deltaMove.subtract(sv['_getContentPosition']());
          sv['_clampDelta'](deltaMove);
          sv['_moveContent'](deltaMove, reachedEnd);
          sv['_dispatchEvent'](ScrollView.EventType.SCROLLING);
          if (!sv['_autoScrolling']) {
            sv['_isBouncing'] = false;
            sv['_scrolling'] = false;
            sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENDED);
          }
        }
        //设置模板Item
        ;

        _proto.setTemplateItem = function setTemplateItem(item) {
          if (!item) return;
          var t = this;
          t._itemTmp = item;
          t._itemTmpUt = item.getComponent(UITransform);
          if (t._resizeMode == Layout.ResizeMode.CHILDREN) t._itemSize = t._layout.cellSize;else {
            var itemUt = item.getComponent(UITransform);
            t._itemSize = new Size(itemUt.width, itemUt.height);
          }

          //获取ListItem，如果没有就取消选择模式
          var com = item.getComponent(ListItem);
          var remove = false;
          if (!com) remove = true;
          // if (com) {
          //     if (!com._btnCom && !item.getComponent(cc.Button)) {
          //         remove = true;
          //     }
          // }
          if (remove) {
            t.selectedMode = SelectedType.NONE;
          }
          com = item.getComponent(Widget);
          if (com && com.enabled) {
            t._needUpdateWidget = true;
          }
          if (t.selectedMode == SelectedType.MULT) t.multSelected = [];
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              t._colLineNum = 1;
              t._sizeType = false;
              break;
            case Layout.Type.VERTICAL:
              t._colLineNum = 1;
              t._sizeType = true;
              break;
            case Layout.Type.GRID:
              switch (t._startAxis) {
                case Layout.AxisDirection.HORIZONTAL:
                  //计算列数
                  var trimW = t._contentUt.width - t._leftGap - t._rightGap;
                  t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                  t._sizeType = true;
                  break;
                case Layout.AxisDirection.VERTICAL:
                  //计算行数
                  var trimH = t._contentUt.height - t._topGap - t._bottomGap;
                  t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                  t._sizeType = false;
                  break;
              }
              break;
          }
        }
        /**
         * 检查是否初始化
         * @param {Boolean} printLog 是否打印错误信息
         * @returns
         */;
        _proto.checkInited = function checkInited(printLog) {
          if (printLog === void 0) {
            printLog = true;
          }
          if (!this._inited) {
            if (printLog) console.error('List initialization not completed!');
            return false;
          }
          return true;
        }
        //禁用 Layout 组件，自行计算 Content Size
        ;

        _proto._resizeContent = function _resizeContent() {
          var t = this;
          var result;
          switch (t._align) {
            case Layout.Type.HORIZONTAL:
              {
                if (t._customSize) {
                  var fixed = t._getFixedSize(null);
                  result = t._leftGap + fixed.val + t._itemSize.width * (t._count - fixed.count) + t._columnGap * (t._count - 1) + t._rightGap;
                } else {
                  result = t._leftGap + t._itemSize.width * t._count + t._columnGap * (t._count - 1) + t._rightGap;
                }
                break;
              }
            case Layout.Type.VERTICAL:
              {
                if (t._customSize) {
                  var _fixed = t._getFixedSize(null);
                  result = t._topGap + _fixed.val + t._itemSize.height * (t._count - _fixed.count) + t._lineGap * (t._count - 1) + t._bottomGap;
                } else {
                  result = t._topGap + t._itemSize.height * t._count + t._lineGap * (t._count - 1) + t._bottomGap;
                }
                break;
              }
            case Layout.Type.GRID:
              {
                //网格模式不支持居中
                if (t.lackCenter) t.lackCenter = false;
                switch (t._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    var lineNum = Math.ceil(t._count / t._colLineNum);
                    result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
                    break;
                  case Layout.AxisDirection.VERTICAL:
                    var colNum = Math.ceil(t._count / t._colLineNum);
                    result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
                    break;
                }
                break;
              }
          }
          var layout = t.content.getComponent(Layout);
          if (layout) layout.enabled = false;
          t._allItemSize = result;
          t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
          if (t.cyclic) {
            var totalSize = t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width;
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
          }

          t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
          var slideOffset = (!t._lack || !t.lackCenter) && t.lackSlide ? 0 : 0.1;
          var targetWH = t._lack ? (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
          if (targetWH < 0) targetWH = 0;
          if (t._sizeType) {
            t._contentUt.height = targetWH;
          } else {
            t._contentUt.width = targetWH;
          }

          // cc.log('_resizeContent()  count =', t._count, '，content =', t.content);
        }

        //滚动进行时...
        ;

        _proto._onScrolling = function _onScrolling(ev) {
          if (ev === void 0) {
            ev = null;
          }
          if (this.frameCount == null) this.frameCount = this._updateRate;
          if (!this._forceUpdate && ev && ev.type != 'scroll-ended' && this.frameCount > 0) {
            this.frameCount--;
            return;
          } else this.frameCount = this._updateRate;
          if (this._aniDelRuning) return;

          //循环列表处理
          if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? new Vec3(0, addVal, 0) : new Vec3(addVal, 0, 0);
            var contentPos = this.content.getPosition();
            switch (this._alignCalcType) {
              case 1:
                //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                if (scrollPos > -this._cyclicPos1) {
                  contentPos.set(-this._cyclicPos2, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                  // if (this._beganPos) {
                  //     this._beganPos += add;
                  // }
                } else if (scrollPos < -this._cyclicPos2) {
                  contentPos.set(-this._cyclicPos1, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                  // if (this._beganPos) {
                  //     this._beganPos -= add;
                  // }
                }

                break;
              case 2:
                //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                if (scrollPos < this._cyclicPos1) {
                  contentPos.set(this._cyclicPos2, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                } else if (scrollPos > this._cyclicPos2) {
                  contentPos.set(this._cyclicPos1, contentPos.y, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                }
                break;
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (scrollPos < this._cyclicPos1) {
                  contentPos.set(contentPos.x, this._cyclicPos2, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                } else if (scrollPos > this._cyclicPos2) {
                  contentPos.set(contentPos.x, this._cyclicPos1, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                }
                break;
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (scrollPos > -this._cyclicPos1) {
                  contentPos.set(contentPos.x, -this._cyclicPos2, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                  }
                } else if (scrollPos < -this._cyclicPos2) {
                  contentPos.set(contentPos.x, -this._cyclicPos1, contentPos.z);
                  this.content.setPosition(contentPos);
                  if (this._scrollView.isAutoScrolling()) {
                    this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                  }
                }
                break;
            }
          }
          this._calcViewPos();
          var vTop, vRight, vBottom, vLeft;
          if (this._sizeType) {
            vTop = this.viewTop;
            vBottom = this.viewBottom;
          } else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
          }
          if (this._virtual) {
            this.displayData = [];
            var itemPos;
            var curId = 0;
            var endId = this._count - 1;
            if (this._customSize) {
              var breakFor = false;
              //如果该item的位置在可视区域内，就推入displayData
              for (; curId <= endId && !breakFor; curId++) {
                itemPos = this._calcItemPos(curId);
                switch (this._align) {
                  case Layout.Type.HORIZONTAL:
                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                      this.displayData.push(itemPos);
                    } else if (curId != 0 && this.displayData.length > 0) {
                      breakFor = true;
                    }
                    break;
                  case Layout.Type.VERTICAL:
                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                      this.displayData.push(itemPos);
                    } else if (curId != 0 && this.displayData.length > 0) {
                      breakFor = true;
                    }
                    break;
                  case Layout.Type.GRID:
                    switch (this._startAxis) {
                      case Layout.AxisDirection.HORIZONTAL:
                        if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                          this.displayData.push(itemPos);
                        } else if (curId != 0 && this.displayData.length > 0) {
                          breakFor = true;
                        }
                        break;
                      case Layout.AxisDirection.VERTICAL:
                        if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                          this.displayData.push(itemPos);
                        } else if (curId != 0 && this.displayData.length > 0) {
                          breakFor = true;
                        }
                        break;
                    }
                    break;
                }
              }
            } else {
              var ww = this._itemSize.width + this._columnGap;
              var hh = this._itemSize.height + this._lineGap;
              switch (this._alignCalcType) {
                case 1:
                  //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                  curId = (vLeft - this._leftGap) / ww;
                  endId = (vRight - this._leftGap) / ww;
                  break;
                case 2:
                  //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                  curId = (-vRight - this._rightGap) / ww;
                  endId = (-vLeft - this._rightGap) / ww;
                  break;
                case 3:
                  //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                  curId = (-vTop - this._topGap) / hh;
                  endId = (-vBottom - this._topGap) / hh;
                  break;
                case 4:
                  //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                  curId = (vBottom - this._bottomGap) / hh;
                  endId = (vTop - this._bottomGap) / hh;
                  break;
              }
              curId = Math.floor(curId) * this._colLineNum;
              endId = Math.ceil(endId) * this._colLineNum;
              endId--;
              if (curId < 0) curId = 0;
              if (endId >= this._count) endId = this._count - 1;
              for (; curId <= endId; curId++) {
                this.displayData.push(this._calcItemPos(curId));
              }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._count) {
              //if none, delete all.
              this._lastDisplayData = [];
              return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
              // 如果是逐帧渲染，需要排序
              if (this.frameByFrameRenderNum > 0) {
                this._lastDisplayData.sort(function (a, b) {
                  return a - b;
                });
              }
              // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
              haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) {
              //如果是强制更新
              if (this.frameByFrameRenderNum > 0) {
                // if (this._updateDone) {
                // this._lastDisplayData = [];
                //逐帧渲染
                if (this._count > 0) {
                  if (!this._updateDone) {
                    this._doneAfterUpdate = true;
                  } else {
                    this._updateCounter = 0;
                  }
                  this._updateDone = false;
                } else {
                  this._updateCounter = 0;
                  this._updateDone = true;
                }
                // }
              } else {
                //直接渲染
                this._lastDisplayData = [];
                // cc.log('List Display Data II::', this.displayData);
                for (var c = 0; c < this.displayItemNum; c++) {
                  this._createOrUpdateItem(this.displayData[c]);
                }
                this._forceUpdate = false;
              }
            }
            this._calcNearestItem();
          }
        }
        //计算可视范围
        ;

        _proto._calcViewPos = function _calcViewPos() {
          var scrollPos = this.content.getPosition();
          switch (this._alignCalcType) {
            case 1:
              //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
              this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
              this.viewRight = this.viewLeft + this._thisNodeUt.width;
              this.elasticRight = this.viewRight > this._contentUt.width ? Math.abs(this.viewRight - this._contentUt.width) : 0;
              this.viewRight += this.elasticRight;
              // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
              break;
            case 2:
              //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
              this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
              this.viewLeft = this.viewRight - this._thisNodeUt.width;
              this.elasticLeft = this.viewLeft < -this._contentUt.width ? Math.abs(this.viewLeft + this._contentUt.width) : 0;
              this.viewLeft -= this.elasticLeft;
              // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
              break;
            case 3:
              //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
              this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
              this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
              this.viewBottom = this.viewTop - this._thisNodeUt.height;
              this.elasticBottom = this.viewBottom < -this._contentUt.height ? Math.abs(this.viewBottom + this._contentUt.height) : 0;
              this.viewBottom += this.elasticBottom;
              // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
              break;
            case 4:
              //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
              this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
              this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
              this.viewTop = this.viewBottom + this._thisNodeUt.height;
              this.elasticTop = this.viewTop > this._contentUt.height ? Math.abs(this.viewTop - this._contentUt.height) : 0;
              this.viewTop -= this.elasticTop;
              // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
              break;
          }
        }
        //计算位置 根据id
        ;

        _proto._calcItemPos = function _calcItemPos(id) {
          var width, height, top, bottom, left, right, itemX, itemY;
          switch (this._align) {
            case Layout.Type.HORIZONTAL:
              switch (this._horizontalDir) {
                case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                  {
                    if (this._customSize) {
                      var fixed = this._getFixedSize(id);
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
                      var cs = this._customSize[id];
                      width = cs > 0 ? cs : this._itemSize.width;
                    } else {
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
                      width = this._itemSize.width;
                    }
                    if (this.lackCenter) {
                      left -= this._leftGap;
                      var offset = this._contentUt.width / 2 - this._allItemSizeNoEdge / 2;
                      left += offset;
                    }
                    right = left + width;
                    return {
                      id: id,
                      left: left,
                      right: right,
                      x: left + this._itemTmpUt.anchorX * width,
                      y: this._itemTmp.y
                    };
                  }
                case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                  {
                    if (this._customSize) {
                      var _fixed2 = this._getFixedSize(id);
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - _fixed2.count) - (_fixed2.val + this._columnGap * _fixed2.count);
                      var _cs = this._customSize[id];
                      width = _cs > 0 ? _cs : this._itemSize.width;
                    } else {
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
                      width = this._itemSize.width;
                    }
                    if (this.lackCenter) {
                      right += this._rightGap;
                      var _offset = this._contentUt.width / 2 - this._allItemSizeNoEdge / 2;
                      right -= _offset;
                    }
                    left = right - width;
                    return {
                      id: id,
                      right: right,
                      left: left,
                      x: left + this._itemTmpUt.anchorX * width,
                      y: this._itemTmp.y
                    };
                  }
              }
              break;
            case Layout.Type.VERTICAL:
              {
                switch (this._verticalDir) {
                  case Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      if (this._customSize) {
                        var _fixed3 = this._getFixedSize(id);
                        top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - _fixed3.count) - (_fixed3.val + this._lineGap * _fixed3.count);
                        var _cs2 = this._customSize[id];
                        height = _cs2 > 0 ? _cs2 : this._itemSize.height;
                      } else {
                        top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
                        height = this._itemSize.height;
                      }
                      if (this.lackCenter) {
                        top += this._topGap;
                        var _offset2 = this._contentUt.height / 2 - this._allItemSizeNoEdge / 2;
                        top -= _offset2;
                      }
                      bottom = top - height;
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: this._itemTmp.x,
                        y: bottom + this._itemTmpUt.anchorY * height
                      };
                    }
                  case Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      if (this._customSize) {
                        var _fixed4 = this._getFixedSize(id);
                        bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - _fixed4.count) + (_fixed4.val + this._lineGap * _fixed4.count);
                        var _cs3 = this._customSize[id];
                        height = _cs3 > 0 ? _cs3 : this._itemSize.height;
                      } else {
                        bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
                        height = this._itemSize.height;
                      }
                      if (this.lackCenter) {
                        bottom -= this._bottomGap;
                        var _offset3 = this._contentUt.height / 2 - this._allItemSizeNoEdge / 2;
                        bottom += _offset3;
                      }
                      top = bottom + height;
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: this._itemTmp.x,
                        y: bottom + this._itemTmpUt.anchorY * height
                      };
                    }
                }
              }
            case Layout.Type.GRID:
              {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                  case Layout.AxisDirection.HORIZONTAL:
                    {
                      switch (this._verticalDir) {
                        case Layout.VerticalDirection.TOP_TO_BOTTOM:
                          {
                            top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
                            bottom = top - this._itemSize.height;
                            itemY = bottom + this._itemTmpUt.anchorY * this._itemSize.height;
                            break;
                          }
                        case Layout.VerticalDirection.BOTTOM_TO_TOP:
                          {
                            bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
                            top = bottom + this._itemSize.height;
                            itemY = bottom + this._itemTmpUt.anchorY * this._itemSize.height;
                            break;
                          }
                      }
                      itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);
                      switch (this._horizontalDir) {
                        case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          {
                            itemX += this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX -= this._contentUt.anchorX * this._contentUt.width;
                            break;
                          }
                        case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          {
                            itemX += (1 - this._itemTmpUt.anchorX) * this._itemSize.width;
                            itemX -= (1 - this._contentUt.anchorX) * this._contentUt.width;
                            itemX *= -1;
                            break;
                          }
                      }
                      return {
                        id: id,
                        top: top,
                        bottom: bottom,
                        x: itemX,
                        y: itemY
                      };
                    }
                  case Layout.AxisDirection.VERTICAL:
                    {
                      switch (this._horizontalDir) {
                        case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          {
                            left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
                            right = left + this._itemSize.width;
                            itemX = left + this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX -= this._contentUt.anchorX * this._contentUt.width;
                            break;
                          }
                        case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          {
                            right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
                            left = right - this._itemSize.width;
                            itemX = left + this._itemTmpUt.anchorX * this._itemSize.width;
                            itemX += (1 - this._contentUt.anchorX) * this._contentUt.width;
                            break;
                          }
                      }
                      itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);
                      switch (this._verticalDir) {
                        case Layout.VerticalDirection.TOP_TO_BOTTOM:
                          {
                            itemY -= (1 - this._itemTmpUt.anchorY) * this._itemSize.height;
                            itemY += (1 - this._contentUt.anchorY) * this._contentUt.height;
                            break;
                          }
                        case Layout.VerticalDirection.BOTTOM_TO_TOP:
                          {
                            itemY -= this._itemTmpUt.anchorY * this._itemSize.height;
                            itemY += this._contentUt.anchorY * this._contentUt.height;
                            itemY *= -1;
                            break;
                          }
                      }
                      return {
                        id: id,
                        left: left,
                        right: right,
                        x: itemX,
                        y: itemY
                      };
                    }
                }
                break;
              }
          }
        }
        //计算已存在的Item的位置
        ;

        _proto._calcExistItemPos = function _calcExistItemPos(id) {
          var item = this.getItemByListId(id);
          if (!item) return null;
          var ut = item.getComponent(UITransform);
          var pos = item.getPosition();
          var data = {
            id: id,
            x: pos.x,
            y: pos.y
          };
          if (this._sizeType) {
            data.top = pos.y + ut.height * (1 - ut.anchorY);
            data.bottom = pos.y - ut.height * ut.anchorY;
          } else {
            data.left = pos.x - ut.width * ut.anchorX;
            data.right = pos.x + ut.width * (1 - ut.anchorX);
          }
          return data;
        }
        //获取Item位置
        ;

        _proto.getItemPos = function getItemPos(id) {
          if (this._virtual) return this._calcItemPos(id);else {
            if (this.frameByFrameRenderNum) return this._calcItemPos(id);else return this._calcExistItemPos(id);
          }
        }
        //获取固定尺寸
        ;

        _proto._getFixedSize = function _getFixedSize(listId) {
          if (!this._customSize) return null;
          if (listId == null) listId = this._count;
          var fixed = 0;
          var count = 0;
          for (var id in this._customSize) {
            if (parseInt(id) < listId) {
              fixed += this._customSize[id];
              count++;
            }
          }
          return {
            val: fixed,
            count: count
          };
        }
        //滚动结束时..
        ;

        _proto._onScrollBegan = function _onScrollBegan() {
          this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        }
        //滚动结束时..
        ;

        _proto._onScrollEnded = function _onScrollEnded() {
          var t = this;
          t._curScrollIsTouch = false;
          if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
              tween(item).to(0.1, {
                scale: 1.06
              }).to(0.1, {
                scale: 1
              }).start();
            }
          }
          t._onScrolling();
          if (t._slideMode == SlideType.ADHERING && !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null && t._curScrollIsTouch) {
              this._pageAdhere();
            } else {
              t.adhere();
            }
          }
        }
        // 触摸时
        ;

        _proto._onTouchStart = function _onTouchStart(ev, captureListeners) {
          if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners)) return;
          this._curScrollIsTouch = true;
          var isMe = ev.eventPhase === Event.AT_TARGET && ev.target === this.node;
          if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent) itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
          }
        }
        //触摸抬起时..
        ;

        _proto._onTouchUp = function _onTouchUp() {
          var t = this;
          t._scrollPos = null;
          if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering) this._adheringBarrier = true;
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
              this._pageAdhere();
            } else {
              t.adhere();
            }
          }
          this._scrollItem = null;
        };
        _proto._onTouchCancelled = function _onTouchCancelled(ev, captureListeners) {
          var t = this;
          if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate) return;
          t._scrollPos = null;
          if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering) t._adheringBarrier = true;
            t.adhere();
          } else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
              t._pageAdhere();
            } else {
              t.adhere();
            }
          }
          this._scrollItem = null;
        }
        //当尺寸改变
        ;

        _proto._onSizeChanged = function _onSizeChanged() {
          if (this.checkInited(false)) this._onScrolling();
        }
        //当Item自适应
        ;

        _proto._onItemAdaptive = function _onItemAdaptive(item) {
          var ut = item.getComponent(UITransform);
          // if (this.checkInited(false)) {
          if (!this._sizeType && ut.width != this._itemSize.width || this._sizeType && ut.height != this._itemSize.height) {
            if (!this._customSize) this._customSize = {};
            var val = this._sizeType ? ut.height : ut.width;
            if (this._customSize[item._listId] != val) {
              this._customSize[item._listId] = val;
              this._resizeContent();
              // this.content.children.forEach((child: Node) => {
              //     this._updateItemPos(child);
              // });
              this.updateAll();
              // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
              if (this._scrollToListId != null) {
                this._scrollPos = null;
                this.unschedule(this._scrollToSo);
                this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1000));
              }
            }
          }
          // }
        }
        //PAGE粘附
        ;

        _proto._pageAdhere = function _pageAdhere() {
          var t = this;
          if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
          var curPos = t._sizeType ? t.viewTop : t.viewLeft;
          var dis = (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) * t.pageDistance;
          var canSkip = Math.abs(t._beganPos - curPos) > dis;
          if (canSkip) {
            var timeInSecond = 0.5;
            switch (t._alignCalcType) {
              case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (t._beganPos > curPos) {
                  t.prePage(timeInSecond);
                  // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                } else {
                  t.nextPage(timeInSecond);
                  // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                }

                break;
              case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (t._beganPos < curPos) {
                  t.prePage(timeInSecond);
                } else {
                  t.nextPage(timeInSecond);
                }
                break;
            }
          } else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
          }
          t._beganPos = null;
        }
        //粘附
        ;

        _proto.adhere = function adhere() {
          var t = this;
          if (!t.checkInited()) return;
          if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
          t.adhering = true;
          t._calcNearestItem();
          var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
          var timeInSecond = 0.7;
          t.scrollTo(t.nearestListId, timeInSecond, offset);
        }
        //Update..
        ;

        _proto.update = function update() {
          if (this.frameByFrameRenderNum <= 0 || this._updateDone) return;
          // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
          if (this._virtual) {
            var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;
            for (var n = this._updateCounter; n < len; n++) {
              var data = this.displayData[n];
              if (data) {
                this._createOrUpdateItem(data);
              }
            }
            if (this._updateCounter >= this.displayItemNum - 1) {
              //最后一个
              if (this._doneAfterUpdate) {
                this._updateCounter = 0;
                this._updateDone = false;
                // if (!this._scrollView.isScrolling())
                this._doneAfterUpdate = false;
              } else {
                this._updateDone = true;
                this._delRedundantItem();
                this._forceUpdate = false;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
              }
            } else {
              this._updateCounter += this.frameByFrameRenderNum;
            }
          } else {
            if (this._updateCounter < this._count) {
              var _len2 = this._updateCounter + this.frameByFrameRenderNum > this._count ? this._count : this._updateCounter + this.frameByFrameRenderNum;
              for (var _n = this._updateCounter; _n < _len2; _n++) {
                this._createOrUpdateItem2(_n);
              }
              this._updateCounter += this.frameByFrameRenderNum;
            } else {
              this._updateDone = true;
              this._calcNearestItem();
              if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
            }
          }
        }
        /**
         * 创建或更新Item（虚拟列表用）
         * @param {Object} data 数据
         */;
        _proto._createOrUpdateItem = function _createOrUpdateItem(data) {
          var item = this.getItemByListId(data.id);
          if (!item) {
            //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
              item = this._pool.get();
              // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            } else {
              item = instantiate(this._itemTmp);
              this.node.emit('create-item', item);
              // cc.log('新建::', data.id, item);
            }

            if (!canGet && !isValid(item)) {
              item = instantiate(this._itemTmp);
              this.node.emit('create-item', item);
              canGet = false;
            }
            if (item._listId != data.id) {
              item._listId = data.id;
              var ut = item.getComponent(UITransform);
              ut.setContentSize(this._itemSize);
            }
            item.setPosition(new Vec3(data.x, data.y, 0));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
              var widget = item.getComponent(Widget);
              if (widget) widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.children.length - 1);
            var listItem = item.getComponent(ListItem);
            item['listItem'] = listItem;
            if (listItem) {
              listItem.listId = data.id;
              listItem.list = this;
              listItem._registerEvent();
            }
            if (this.renderEvent) {
              var index = data.id % this._actualCount;
              EventHandler.emitEvents([this.renderEvent], item, index);
              this.node.emit('update-item', item, index);
            }
          } else if (this._forceUpdate && this.renderEvent) {
            //强制更新
            item.setPosition(new Vec3(data.x, data.y, 0));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
              var _index = data.id % this._actualCount;
              EventHandler.emitEvents([this.renderEvent], item, _index);
              this.node.emit('update-item', item, _index);
            }
          }
          this._resetItemSize(item);
          this._updateListItem(item['listItem']);
          if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
          }
        }
        //创建或更新Item（非虚拟列表用）
        ;

        _proto._createOrUpdateItem2 = function _createOrUpdateItem2(listId) {
          var item = this.content.children[listId];
          var listItem;
          if (!item) {
            //如果不存在
            item = instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem);
            item['listItem'] = listItem;
            if (listItem) {
              listItem.listId = listId;
              listItem.list = this;
              listItem._registerEvent();
            }
            if (this.renderEvent) {
              var index = listId % this._actualCount;
              EventHandler.emitEvents([this.renderEvent], item, index);
              this.node.emit('update-item', item, index);
            }
          } else if (this._forceUpdate && this.renderEvent) {
            //强制更新
            item._listId = listId;
            if (listItem) listItem.listId = listId;
            if (this.renderEvent) {
              var _index2 = listId % this._actualCount;
              EventHandler.emitEvents([this.renderEvent], item, _index2);
              this.node.emit('update-item', item, _index2);
            }
          }
          this._updateListItem(listItem);
          if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
          }
        };
        _proto._updateListItem = function _updateListItem(listItem) {
          if (!listItem) return;
          if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
              case SelectedType.SINGLE:
                listItem.selected = this.selectedId == item._listId;
                break;
              case SelectedType.MULT:
                listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                break;
            }
          }
        }
        //仅虚拟列表用
        ;

        _proto._resetItemSize = function _resetItemSize(item) {
          return;
        }
        /**
         * 更新Item位置
         * @param {Number||Node} listIdOrItem
         */;
        _proto._updateItemPos = function _updateItemPos(listIdOrItem) {
          var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
          var pos = this.getItemPos(item._listId);
          item.setPosition(pos.x, pos.y);
        }
        /**
         * 设置多选
         * @param {Array} args 可以是单个listId，也可是个listId数组
         * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
         */;
        _proto.setMultSelected = function setMultSelected(args, bool) {
          var t = this;
          if (!t.checkInited()) return;
          if (!Array.isArray(args)) {
            args = [args];
          }
          if (bool == null) {
            t.multSelected = args;
          } else {
            var listId, sub;
            if (bool) {
              for (var n = args.length - 1; n >= 0; n--) {
                listId = args[n];
                sub = t.multSelected.indexOf(listId);
                if (sub < 0) {
                  t.multSelected.push(listId);
                }
              }
            } else {
              for (var _n2 = args.length - 1; _n2 >= 0; _n2--) {
                listId = args[_n2];
                sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                  t.multSelected.splice(sub, 1);
                }
              }
            }
          }
          t._forceUpdate = true;
          t._onScrolling();
        }
        /**
         * 获取多选数据
         * @returns
         */;
        _proto.getMultSelected = function getMultSelected() {
          return this.multSelected;
        }
        /**
         * 多选是否有选择
         * @param {number} listId 索引
         * @returns
         */;
        _proto.hasMultSelected = function hasMultSelected(listId) {
          return this.multSelected && this.multSelected.indexOf(listId) >= 0;
        }
        /**
         * 更新指定的Item
         * @param {Array} args 单个listId，或者数组
         * @returns
         */;
        _proto.updateItem = function updateItem(args) {
          if (!this.checkInited()) return;
          if (!Array.isArray(args)) {
            args = [args];
          }
          for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item) EventHandler.emitEvents([this.renderEvent], item, listId % this._actualCount);
          }
        }
        /**
         * 更新全部
         */;
        _proto.updateAll = function updateAll() {
          if (!this.checkInited()) return;
          this.count = this.count;
        }
        /**
         * 根据ListID获取Item
         * @param {Number} listId
         * @returns
         */;
        _proto.getItemByListId = function getItemByListId(listId) {
          if (this.content) {
            for (var n = this.content.children.length - 1; n >= 0; n--) {
              var item = this.content.children[n];
              if (item._listId == listId) return item;
            }
          }
        }
        /**
         * 获取在显示区域外的Item
         * @returns
         */;
        _proto._getOutsideItem = function _getOutsideItem() {
          var item;
          var result = [];
          for (var n = this.content.children.length - 1; n >= 0; n--) {
            item = this.content.children[n];
            if (!this.displayData.find(function (d) {
              return d.id == item._listId;
            })) {
              result.push(item);
            }
          }
          return result;
        }
        //删除显示区域以外的Item
        ;

        _proto._delRedundantItem = function _delRedundantItem() {
          if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
              var item = arr[n];
              if (this._scrollItem && item._listId == this._scrollItem._listId) continue;
              item.isCached = true;
              this._pool.put(item);
              for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                if (this._lastDisplayData[m] == item._listId) {
                  this._lastDisplayData.splice(m, 1);
                  break;
                }
              }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
          } else {
            while (this.content.children.length > this._count) {
              this._delSingleItem(this.content.children[this.content.children.length - 1]);
            }
          }
        }
        //删除单个Item
        ;

        _proto._delSingleItem = function _delSingleItem(item) {
          // cc.log('DEL::', item['_listId'], item);
          item.removeFromParent();
          if (item.destroy) item.destroy();
          item = null;
        }
        /**
         * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
         * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
         */;
        _proto.aniDelItem = function aniDelItem(listId, callFunc, aniType) {
          var t = this;
          if (!t.checkInited() || t.cyclic || !t._virtual) return console.error('This function is not allowed to be called!');
          if (!callFunc) return console.error('CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!');
          if (t._aniDelRuning) return console.warn('Please wait for the current deletion to finish!');
          var item = t.getItemByListId(listId);
          var listItem;
          if (!item) {
            callFunc(listId);
            return;
          } else {
            listItem = item.getComponent(ListItem);
          }
          t._aniDelRuning = true;
          t._aniDelCB = callFunc;
          t._aniDelItem = item;
          t._aniDelBeforePos = item.position;
          t._aniDelBeforeScale = item.scale;
          var curLastId = t.displayData[t.displayData.length - 1].id;
          var resetSelectedId = listItem.selected;
          listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._count - 2) {
              newId = curLastId + 1;
            }
            if (newId != null) {
              var newData = t._calcItemPos(newId);
              t.displayData.push(newData);
              if (t._virtual) t._createOrUpdateItem(newData);else t._createOrUpdateItem2(newId);
            } else t._count--;
            if (t.selectedMode == SelectedType.SINGLE) {
              if (resetSelectedId) {
                t._selectedId = -1;
              } else if (t._selectedId - 1 >= 0) {
                t._selectedId--;
              }
            } else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
              var sub = t.multSelected.indexOf(listId);
              if (sub >= 0) {
                t.multSelected.splice(sub, 1);
              }
              //多选的数据，在其后的全部减一
              for (var n = t.multSelected.length - 1; n >= 0; n--) {
                var id = t.multSelected[n];
                if (id >= listId) t.multSelected[n]--;
              }
            }
            if (t._customSize) {
              if (t._customSize[listId]) delete t._customSize[listId];
              var newCustomSize = {};
              var size;
              for (var _id in t._customSize) {
                size = t._customSize[_id];
                var idNumber = parseInt(_id);
                newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
              }
              t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = 0.2333;
            var twe, haveCB;
            for (var _n3 = newId != null ? newId : curLastId; _n3 >= listId + 1; _n3--) {
              item = t.getItemByListId(_n3);
              if (item) {
                var posData = t._calcItemPos(_n3 - 1);
                twe = tween(item).to(sec, {
                  position: new Vec3(posData.x, posData.y, 0)
                });
                if (_n3 <= listId + 1) {
                  haveCB = true;
                  twe.call(function () {
                    t._aniDelRuning = false;
                    callFunc(listId);
                    delete t._aniDelCB;
                  });
                }
                twe.start();
              }
            }
            if (!haveCB) {
              t._aniDelRuning = false;
              callFunc(listId);
              t._aniDelCB = null;
            }
          }, true);
        }
        /**
         * 滚动到..
         * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
         * @param {Number} timeInSecond 时间
         * @param {Number} offset 索引目标位置偏移，0-1
         * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
         */;
        _proto.scrollTo = function scrollTo(listId, timeInSecond, offset, overStress) {
          if (timeInSecond === void 0) {
            timeInSecond = 0.5;
          }
          if (offset === void 0) {
            offset = null;
          }
          if (overStress === void 0) {
            overStress = false;
          }
          var t = this;
          if (!t.checkInited(false)) return;
          // t._scrollView.stopAutoScroll();
          if (timeInSecond == null)
            //默认0.5
            timeInSecond = 0.5;else if (timeInSecond < 0) timeInSecond = 0;
          if (listId < 0) listId = 0;else if (listId >= t._count) listId = t._count - 1;
          // 以防设置了numItems之后layout的尺寸还未更新
          if (!t._virtual && t._layout && t._layout.enabled) t._layout.updateLayout();
          var pos = t.getItemPos(listId);
          if (!pos) {
            return DEV;
          }
          var targetX, targetY;
          switch (t._alignCalcType) {
            case 1:
              //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
              targetX = pos.left;
              if (offset != null) targetX -= t._thisNodeUt.width * offset;else targetX -= t._leftGap;
              pos = new Vec3(targetX, 0, 0);
              break;
            case 2:
              //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
              targetX = pos.right - t._thisNodeUt.width;
              if (offset != null) targetX += t._thisNodeUt.width * offset;else targetX += t._rightGap;
              pos = new Vec3(targetX + t._contentUt.width, 0, 0);
              break;
            case 3:
              //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
              targetY = pos.top;
              if (offset != null) targetY += t._thisNodeUt.height * offset;else targetY += t._topGap;
              pos = new Vec3(0, -targetY, 0);
              break;
            case 4:
              //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
              targetY = pos.bottom + t._thisNodeUt.height;
              if (offset != null) targetY -= t._thisNodeUt.height * offset;else targetY -= t._bottomGap;
              pos = new Vec3(0, -targetY + t._contentUt.height, 0);
              break;
          }
          var viewPos = t.content.getPosition();
          viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
          var comparePos = t._sizeType ? pos.y : pos.x;
          var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > 0.5;
          // cc.log(runScroll, t._scrollPos, viewPos, comparePos)

          // t._scrollView.stopAutoScroll();
          if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = new Date().getTime() / 1000 + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
              if (!t._adheringBarrier) {
                t.adhering = t._adheringBarrier = false;
              }
              t._scrollPos = t._scrollToListId = t._scrollToEndTime = t._scrollToSo = null;
              //cc.log('2222222222', t._adheringBarrier)
              if (overStress) {
                // t.scrollToListId = listId;
                var item = t.getItemByListId(listId);
                if (item) {
                  tween(item).to(0.1, {
                    scale: 1.05
                  }).to(0.1, {
                    scale: 1
                  }).start();
                }
              }
            }, timeInSecond + 0.1);
            if (timeInSecond <= 0) {
              t._onScrolling();
            }
          }
        }
        /**
         * 计算当前滚动窗最近的Item
         */;
        _proto._calcNearestItem = function _calcNearestItem() {
          var t = this;
          t.nearestListId = null;
          var data, center;
          if (t._virtual) t._calcViewPos();
          var vTop, vRight, vBottom, vLeft;
          vTop = t.viewTop;
          vRight = t.viewRight;
          vBottom = t.viewBottom;
          vLeft = t.viewLeft;
          var breakFor = false;
          for (var n = 0; n < t.content.children.length && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
              center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
              switch (t._alignCalcType) {
                case 1:
                  //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                  if (data.right >= vLeft) {
                    t.nearestListId = data.id;
                    if (vLeft > center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 2:
                  //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                  if (data.left <= vRight) {
                    t.nearestListId = data.id;
                    if (vRight < center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 3:
                  //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                  if (data.bottom <= vTop) {
                    t.nearestListId = data.id;
                    if (vTop < center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
                case 4:
                  //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                  if (data.top >= vBottom) {
                    t.nearestListId = data.id;
                    if (vBottom > center) t.nearestListId += t._colLineNum;
                    breakFor = true;
                  }
                  break;
              }
            }
          }
          //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
          data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._count - 1);
          if (data && data.id == t._count - 1) {
            center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
            switch (t._alignCalcType) {
              case 1:
                //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                if (vRight > center) t.nearestListId = data.id;
                break;
              case 2:
                //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                if (vLeft < center) t.nearestListId = data.id;
                break;
              case 3:
                //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                if (vBottom < center) t.nearestListId = data.id;
                break;
              case 4:
                //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                if (vTop > center) t.nearestListId = data.id;
                break;
            }
          }
          // cc.log('t.nearestListId =', t.nearestListId);
        }
        //上一页
        ;

        _proto.prePage = function prePage(timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = 0.5;
          }
          // cc.log('👈');
          if (!this.checkInited()) return;
          this.skipPage(this.curPageNum - 1, timeInSecond);
        }
        //下一页
        ;

        _proto.nextPage = function nextPage(timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = 0.5;
          }
          // cc.log('👉');
          if (!this.checkInited()) return;
          this.skipPage(this.curPageNum + 1, timeInSecond);
        }
        //跳转到第几页
        ;

        _proto.skipPage = function skipPage(pageNum, timeInSecond) {
          var t = this;
          if (!t.checkInited()) return;
          if (t._slideMode != SlideType.PAGE) return console.error('This function is not allowed to be called, Must SlideMode = PAGE!');
          if (pageNum < 0 || pageNum >= t._count) return;
          if (t.curPageNum == pageNum) return;
          // cc.log(pageNum);
          t.curPageNum = pageNum;
          if (t.pageChangeEvent) {
            EventHandler.emitEvents([t.pageChangeEvent], pageNum);
          }
          t.scrollTo(pageNum, timeInSecond);
        }
        //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
        ;

        _proto.calcCustomSize = function calcCustomSize(count) {
          var t = this;
          if (!t.checkInited()) return;
          if (!t._itemTmp) return console.error('Unset template item!');
          if (!t.renderEvent) return console.error('Unset Render-Event!');
          t._customSize = {};
          var temp = instantiate(t._itemTmp);
          var ut = temp.getComponent(UITransform);
          t.content.addChild(temp);
          for (var n = 0; n < count; n++) {
            EventHandler.emitEvents([t.renderEvent], temp, n);
            if (ut.height != t._itemSize.height || ut.width != t._itemSize.width) {
              t._customSize[n] = t._sizeType ? ut.height : ut.width;
            }
          }
          if (!Object.keys(t._customSize).length) t._customSize = null;
          temp.removeFromParent();
          if (temp.destroy) temp.destroy();
          return t._customSize;
        };
        _createClass(ListView, [{
          key: "slideMode",
          get: function get() {
            return this._slideMode;
          },
          set: function set(val) {
            this._slideMode = val;
          }
        }, {
          key: "virtual",
          get: function get() {
            return this._virtual;
          },
          set: function set(val) {
            if (val != null) this._virtual = val;
            if (this._count != 0) {
              this._onScrolling();
            }
          }
        }, {
          key: "updateRate",
          get: function get() {
            return this._updateRate;
          },
          set: function set(val) {
            if (val >= 0 && val <= 6) {
              this._updateRate = val;
            }
          }
        }, {
          key: "selectedId",
          get: function get() {
            return this._selectedId;
          },
          set: function set(val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
              case SelectedType.SINGLE:
                {
                  if (!t.repeatEventSingle && val == t._selectedId) return;
                  item = t.getItemByListId(val);
                  // if (!item && val >= 0)
                  //     return;
                  var listItem;
                  if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;
                  //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                  else t._lastSelectedId = null;
                  t._selectedId = val;
                  if (item) {
                    listItem = item.getComponent(ListItem);
                    listItem.selected = true;
                  }
                  if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                    var lastItem = t.getItemByListId(t._lastSelectedId);
                    if (lastItem) {
                      lastItem.getComponent(ListItem).selected = false;
                    }
                  }
                  if (t.selectedEvent) {
                    EventHandler.emitEvents([t.selectedEvent], item, val % this._actualCount, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualCount);
                    t.node.emit('select-item', item, val % this._actualCount, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualCount);
                  }
                  break;
                }
              case SelectedType.MULT:
                {
                  item = t.getItemByListId(val);
                  if (!item) return;
                  var _listItem = item.getComponent(ListItem);
                  var bool = !_listItem.selected;
                  if (bool && t.multSelectedMaxNum != -1 && t.multSelected.length == t.multSelectedMaxNum) {
                    return;
                  }
                  if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;
                  t._selectedId = val;
                  _listItem.selected = bool;
                  var sub = t.multSelected.indexOf(val);
                  if (bool && sub < 0) {
                    t.multSelected.push(val);
                  } else if (!bool && sub >= 0) {
                    t.multSelected.splice(sub, 1);
                  }
                  if (t.selectedEvent) {
                    EventHandler.emitEvents([t.selectedEvent], item, val % this._actualCount, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualCount, bool);
                    t.node.emit('select-item', item, val % this._actualCount, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualCount, bool);
                  }
                  break;
                }
            }
          }
        }, {
          key: "count",
          get: function get() {
            return this._actualCount;
          },
          set: function set(val) {
            var t = this;
            if (!t.checkInited(false)) return;
            if (val == null || val < 0) {
              console.error('count set the wrong::', val);
              return;
            }
            t._actualCount = t._count = val;
            t._forceUpdate = true;
            if (t._virtual) {
              t._resizeContent();
              if (t.cyclic) {
                t._count = t._cyclicNum * t._count;
              }
              t._onScrolling();
              if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE) t.curPageNum = t.nearestListId;
            } else {
              if (t.cyclic) {
                t._resizeContent();
                t._count = t._cyclicNum * t._count;
              }
              var layout = t.content.getComponent(Layout);
              if (layout) {
                layout.enabled = true;
              }
              t._delRedundantItem();
              t.firstListId = 0;
              if (t.frameByFrameRenderNum > 0) {
                //先渲染几个出来
                var len = t.frameByFrameRenderNum > t._count ? t._count : t.frameByFrameRenderNum;
                for (var n = 0; n < len; n++) {
                  t._createOrUpdateItem2(n);
                }
                if (t.frameByFrameRenderNum < t._count) {
                  t._updateCounter = t.frameByFrameRenderNum;
                  t._updateDone = false;
                }
              } else {
                for (var _n4 = 0; _n4 < t._count; _n4++) {
                  t._createOrUpdateItem2(_n4);
                }
                t.displayItemNum = t._count;
              }
            }
          }
        }, {
          key: "scrollView",
          get: function get() {
            return this._scrollView;
          }
        }]);
        return ListView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateType", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TemplateType.NODE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tmpNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tmpPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_slideMode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideType.NORMAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "slideMode", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "slideMode"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pageDistance", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageChangeEvent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_virtual", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "virtual", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "virtual"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cyclic", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lackCenter", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lackSlide", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_updateRate", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "updateRate", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "updateRate"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "frameByFrameRenderNum", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "renderEvent", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectedType.NONE;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "selectedEvent", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "repeatEventSingle", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "multSelectedMaxNum", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_count", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoaderManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, _extends, cclegacy, _decorator, SceneAsset, assetManager, Asset, Font, isValid, sp, SpriteFrame, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SceneAsset = module.SceneAsset;
      assetManager = module.assetManager;
      Asset = module.Asset;
      Font = module.Font;
      isValid = module.isValid;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b3bf5M3DHNHcYe1nnNZYr6B", "LoaderManager", undefined);
      var ccclass = _decorator.ccclass;
      var LoaderManager = exports('default', (_dec = ccclass('LoaderManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(LoaderManager, _BaseManager);
        function LoaderManager() {
          return _BaseManager.apply(this, arguments) || this;
        }
        var _proto = LoaderManager.prototype;
        _proto.handle = function handle(_handle, _ref) {
          var _this = this;
          var bundle = _ref.bundle,
            version = _ref.version,
            path = _ref.path,
            type = _ref.type,
            onProgress = _ref.onProgress,
            _onComplete = _ref.onComplete;
          if (!_handle) {
            this.error('handle is empty');
            return _onComplete && _onComplete(null);
          }
          if (!path) {
            this.error(_handle + " fail. path is empty");
            return _onComplete && _onComplete(null);
          }
          if (!bundle) bundle = 'resources';
          var args = [path];
          if (type) args.push(type);
          if (onProgress) args.push(onProgress);
          args.push(function (err, res) {
            if (err) {
              _this.error(_handle + " \"" + path + "\" fail", err);
              _onComplete && _onComplete(null);
            } else {
              _onComplete && _onComplete(res);
            }
          });
          this.loadBundle({
            bundle: bundle,
            version: version,
            onComplete: function onComplete(bundle) {
              if (!bundle) return _onComplete && _onComplete(null);
              bundle[_handle](args[0], args[1], args[2], args[3]);
            }
          });
        }

        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto.preload = function preload(params) {
          if (SceneAsset === params.type) {
            this.handle('preloadScene', {
              path: params.path,
              bundle: params.bundle,
              version: params.version,
              onProgress: params.onProgress,
              onComplete: params.onComplete
            });
          } else {
            this.handle('preload', params);
          }
        }

        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto.preloadDir = function preloadDir(params) {
          this.handle('preloadDir', params);
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.load = function load(params) {
          if (SceneAsset === params.type) {
            this.handle('loadScene', {
              path: params.path,
              bundle: params.bundle,
              version: params.version,
              onProgress: params.onProgress,
              onComplete: params.onComplete
            });
          } else {
            this.handle('load', params);
          }
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadAsync = function loadAsync(params) {
          var _this2 = this;
          return new Promise(function (resolve) {
            _this2.load(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadDir = function loadDir(params) {
          this.handle('loadDir', params);
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadDirAsync = function loadDirAsync(params) {
          var _this3 = this;
          return new Promise(function (resolve) {
            _this3.loadDir(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 销毁一个bundle中对应path和type的资源
         * @param params.bundle 默认为resources，如果是远程bundle，则使用url末位作为bundel名
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.release = function release(_ref2) {
          var _assetManager$getBund;
          var path = _ref2.path,
            bundle = _ref2.bundle,
            type = _ref2.type;
          if (!bundle) bundle = 'resources';
          (_assetManager$getBund = assetManager.getBundle(bundle)) == null || _assetManager$getBund.release(path, type);
        }

        /**
         * 销毁一个bundle中所有的资源
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundel名
         */;
        _proto.releaseAll = function releaseAll(bundle) {
          if (!bundle) bundle = 'resources';
          var _bundle = assetManager.getBundle(bundle);
          if (!_bundle) return;
          // 只释放自己内部的资源，依赖的资源只减少引用计数
          _bundle.getDirWithPath('/', Asset).forEach(function (asset) {
            _bundle.release(asset.path, asset.ctor);
          });
          // cocos提供的方法会将依赖的资源也卸载(这个设计很奇怪)
          // _bundle?.releaseAll();
        }

        /**
         * 销毁一个bundle中未使用的资源
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundel名
         */;
        _proto.releaseUnused = function releaseUnused(bundle) {
          var _assetManager$getBund2;
          if (!bundle) bundle = 'resources';
          //@ts-ignore
          (_assetManager$getBund2 = assetManager.getBundle(bundle)) == null || _assetManager$getBund2.releaseUnusedAssets();
        }

        /**
         * 加载一个bundle
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto.loadBundle = function loadBundle(_ref3) {
          var bundle = _ref3.bundle,
            version = _ref3.version,
            onComplete = _ref3.onComplete;
          if (!bundle) bundle = 'resources';
          if (version) {
            assetManager.loadBundle(bundle, {
              version: version
            }, function (err, bundle) {
              onComplete && onComplete(err ? null : bundle);
            });
          } else {
            assetManager.loadBundle(bundle, function (err, bundle) {
              onComplete && onComplete(err ? null : bundle);
            });
          }
        }

        /**
         * 加载一个bundle
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto.loadBundleAsync = function loadBundleAsync(params) {
          var _this4 = this;
          return new Promise(function (resolve) {
            _this4.loadBundle(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 获取一个已经加载的bundle
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundel名
         */;
        _proto.getBundle = function getBundle(bundle) {
          if (!bundle) bundle = 'resources';
          return assetManager.getBundle(bundle);
        }

        /**
         * 移除一个已经加载的bundle
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundel名
         */;
        _proto.removeBundle = function removeBundle(bundle) {
          if (!bundle) bundle = 'resources';
          var b = assetManager.getBundle(bundle);
          if (b) assetManager.removeBundle(b);
        }

        /**
         * 加载远程资源
         * @example
         * loadRemote({url:'', ext:'.png', onComplete:(){result}})
         */;
        _proto.loadRemote = function loadRemote(_ref4) {
          var _this5 = this;
          var url = _ref4.url,
            ext = _ref4.ext,
            onComplete = _ref4.onComplete;
          if (ext) {
            assetManager.loadRemote(url, {
              ext: ext
            }, function (error, res) {
              if (error) {
                _this5.error("loadRemote " + url + " fail");
                return onComplete && onComplete(null);
              }
              onComplete && onComplete(res);
            });
          } else {
            assetManager.loadRemote(url, function (error, res) {
              if (error) {
                _this5.error("loadRemote " + url + " fail");
                return onComplete && onComplete(null);
              }
              onComplete && onComplete(res);
            });
          }
        }

        /**
         * 加载远程资源
         * @example
         * await loadRemoteAsync({url:'', ext:'.png'})
         */;
        _proto.loadRemoteAsync = function loadRemoteAsync(params) {
          var _this6 = this;
          return new Promise(function (resolve) {
            _this6.loadRemote(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 设置字体资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setFont({target:label, path:'font/num', bundle:'resources', onComplete:(succ)=>{}})
         */;
        _proto.setFont = function setFont(params) {
          this.load({
            path: params.path,
            bundle: params.bundle,
            type: Font,
            onComplete: function onComplete(font) {
              if (!font || !isValid(params.target)) {
                params.onFail && params.onFail();
                params.onComplete && params.onComplete(false);
                return;
              }
              params.target.font = font;
              params.onSuccess && params.onSuccess();
              params.onComplete && params.onComplete(true);
            }
          });
        }

        /**
         * 设置Spine资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSpine({target:spine, path:'spine/role', bundle:'resources', onComplete:(succ)=>{}})
         */;
        _proto.setSpine = function setSpine(params) {
          this.load({
            path: params.path,
            bundle: params.bundle,
            type: sp.SkeletonData,
            onComplete: function onComplete(skeletonData) {
              if (!skeletonData || !isValid(params.target)) {
                params.onFail && params.onFail();
                params.onComplete && params.onComplete(false);
                return;
              }
              params.target.skeletonData = skeletonData;
              params.onSuccess && params.onSuccess();
              params.onComplete && params.onComplete(true);
            }
          });
        }

        /**
         * 设置图片资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSprite({target:sprite, path:'img/a/spriteFrame', bundle:'resources', onComplete:(succ)=>{}})
         */;
        _proto.setSprite = function setSprite(params) {
          this.load({
            path: params.path,
            bundle: params.bundle,
            type: SpriteFrame,
            onComplete: function onComplete(spriteFrame) {
              if (!spriteFrame || !isValid(params.target)) {
                params.onFail && params.onFail();
                params.onComplete && params.onComplete(false);
                return;
              }
              params.target.spriteFrame = spriteFrame;
              params.onSuccess && params.onSuccess();
              params.onComplete && params.onComplete(true);
            }
          });
        };
        return LoaderManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/logger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b581Lotn1LqYPYEsoeRs/Q", "logger", undefined);
      /**
       * 日志管理类，用于统一日志输出格式
       */
      var Logger = /*#__PURE__*/function () {
        function Logger() {}
        _createClass(Logger, [{
          key: "log",
          get:
          /**
           * 用于输出一般信息
           */
          function get() {
            return window.console.log.bind(window.console, '%c %s %c %s ', 'background:#6495ed; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #6495ed; color: #000; font-weight: normal;', "[LOG] " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #6495ed; color: #6495ed; font-weight: normal;');
          }

          /**
           * 用于输出警告信息
           */
        }, {
          key: "warn",
          get: function get() {
            return window.console.warn.bind(window.console, '%c %s %c %s ', 'background:#ff7f50; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff7f50; color: #000; font-weight: normal;', "[WARN] " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff7f50; color: #ff7f50; font-weight: normal;');
          }

          /**
           * 用于输出错误信息
           */
        }, {
          key: "error",
          get: function get() {
            return window.console.error.bind(window.console, '%c %s %c %s ', 'background:#ff4757; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff4757; color: #000; font-weight: normal;', "[ERROR] " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff4757; color: #ff4757; font-weight: normal;');
          }

          /**
           * 用于输出调试信息
           */
        }, {
          key: "debug",
          get: function get() {
            return window.console.log.bind(window.console, '%c %s %c %s ', 'background:#ff6347; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #ff6347; color: #000; font-weight: normal;', "[DEBUG] " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #ff6347; color: #ff6347; font-weight: normal;');
          }

          /**
           * 用于输出成功信息
           */
        }, {
          key: "success",
          get: function get() {
            return window.console.log.bind(window.console, '%c %s %c %s ', 'background:#00ae9d; padding: 2px; border-radius: 5px 0 0 5px; border: 1px solid #00ae9d; color: #000; font-weight: normal;', "[SUCC] " + new Date().toLocaleString(), 'background:#ffffff ; padding: 2px; border-radius: 0 5px 5px 0; border: 1px solid #00ae9d; color: #00ae9d; font-weight: normal;');
          }
        }]);
        return Logger;
      }();
      var logger = exports('default', new Logger());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './AppInit.ts', './app.ts', './handle.ts', './setting.ts', './cc-comp-list-view.ts', './cc-comp-frame-animation.ts', './cc-ctrl-rocker.ts', './Core.ts', './BaseAppInit.ts', './BaseControl.ts', './BaseController.ts', './BaseManager.ts', './BaseModel.ts', './BaseView.ts', './debug.ts', './logger.ts', './storage.ts', './task.ts', './EventManager.ts', './LoaderManager.ts', './Audio.ts', './AudioEngine.ts', './AudioManager.ts', './SoundManager.ts', './TimerManager.ts', './UIManager.ts', './UIMgrLoading.ts', './UIMgrShade.ts', './UIMgrToast.ts', './UIMgrToastCell.ts', './UIMgrZOrder.ts', './ListItem.ts', './ListView.ts', './index.ts', './FrameAnimation.ts', './index2.ts', './Rocker.ts', './index3.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Rocker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, Enum, Node, v3, math, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Enum = module.Enum;
      Node = module.Node;
      v3 = module.v3;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "e39cabYBRxKOZNL69KLmpeC", "Rocker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        menu = _decorator.menu;
      var RockerType = exports('RockerType', /*#__PURE__*/function (RockerType) {
        RockerType[RockerType["Static"] = 0] = "Static";
        RockerType[RockerType["Free"] = 1] = "Free";
        return RockerType;
      }({}));
      var RockerEventType = exports('RockerEventType', /*#__PURE__*/function (RockerEventType) {
        RockerEventType["Change"] = "rocker-change";
        RockerEventType["Stop"] = "rocker-stop";
        return RockerEventType;
      }({}));
      var Rocker = exports('Rocker', (_dec = ccclass('pkg:Rocker'), _dec2 = menu('pkg/Rocker'), _dec3 = requireComponent(UITransform), _dec4 = property({
        type: Enum(RockerType),
        tooltip: 'Static: 固定位置, 固定在原点\nFree: 自由位置, 跟随手指位置'
      }), _dec5 = property({
        type: Node,
        tooltip: '底座节点'
      }), _dec6 = property({
        type: Node,
        tooltip: '摇杆节点'
      }), _dec7 = property({
        tooltip: '摇杆半径'
      }), _dec8 = property({
        tooltip: '是否自动隐藏'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rocker, _Component);
        function Rocker() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pedestal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "joystick", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radius", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHide", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Rocker.prototype;
        _proto.show = function show() {
          this.joystick.active = true;
          this.pedestal.active = true;
        };
        _proto.hide = function hide() {
          this.joystick.active = false;
          this.pedestal.active = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          if (this.autoHide) this.hide();
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          this.show();
          var location = event.getUILocation();
          var pos = this.node.inverseTransformPoint(v3(), v3(location.x, location.y, 0));
          if (this.type === RockerType.Free) {
            this.joystick.setPosition(pos.x, pos.y, 0);
            this.pedestal.setPosition(pos.x, pos.y, 0);
          } else if (this.type === RockerType.Static) {
            this.pedestal.setPosition(0, 0, 0);
            var radius = math.clamp(pos.length(), 0, this.radius);
            pos.normalize(); // 归一化
            this.joystick.setPosition(pos.x * radius, pos.y * radius, 0);
            this.node.emit(RockerEventType.Change, pos, radius / this.radius);
          }
        };
        _proto.onTouchMove = function onTouchMove(event) {
          var location = event.getUILocation();
          var pos = this.node.inverseTransformPoint(v3(), v3(location.x, location.y, 0));
          var delta = pos.subtract(this.pedestal.position);
          var radius = math.clamp(delta.length(), 0, this.radius);
          delta.normalize(); // 归一化
          this.joystick.setPosition(this.pedestal.position.x + delta.x * radius, this.pedestal.position.y + delta.y * radius, 0);
          this.node.emit(RockerEventType.Change, delta, radius / this.radius);
        };
        _proto.onTouchEnd = function onTouchEnd() {
          this.node.emit(RockerEventType.Stop);
          this.joystick.setPosition(this.pedestal.position);
          if (this.autoHide) this.hide();
        };
        return Rocker;
      }(Component), _class3.Type = RockerType, _class3.EventType = RockerEventType, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RockerType.Free;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pedestal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "joystick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "autoHide", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/setting.ts", ['cc', './SoundManager.ts', './UIManager.ts'], function () {
  var cclegacy, SoundManager, UIManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      UIManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9a8d2pAnrJAWIiDp94P7b0z", "setting", undefined);

      // 预加载的UI(符合app.lib.task.createAny规则)
      UIManager.setting.preload = ['PageHome'];
      // 默认UI, 会在首屏流程后自动show
      UIManager.setting.defaultUI = 'PageHome';
      // 弹窗默认遮罩展现动画配置
      UIManager.setting.shade = {
        delay: 0,
        begin: 60,
        end: 180,
        speed: 100
      };

      // 预加载的音频(按数组顺序依次预加载)
      SoundManager.setting.preload = [];
      // 默认音乐, 会在首屏流程后自动播放
      SoundManager.setting.defaultMusicName = '';
      // 默认音效, 会在Button被点击后播放
      SoundManager.setting.defaultEffectName = '';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts', './AudioEngine.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _extends, _regeneratorRuntime, cclegacy, _decorator, AudioClip, game, Game, isValid, Button, sys, Core, BaseManager, AudioEngine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _extends = module.extends;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      game = module.game;
      Game = module.Game;
      isValid = module.isValid;
      Button = module.Button;
      sys = module.sys;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      AudioEngine = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "58002Ha2adOWbt2LDr8rmBT", "SoundManager", undefined);
      var ccclass = _decorator.ccclass;
      var storage = {
        set: function set(key, value) {
          sys.localStorage.setItem(key, JSON.stringify(value));
        },
        get: function get(key) {
          var data = sys.localStorage.getItem(key);
          if (data && typeof data === 'string') {
            return JSON.parse(data);
          }
          return undefined;
        }
      };

      /**
       * 音乐名字枚举
       */
      var MusicName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });

      /**
       * 音效名字枚举
       */
      var EffectName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });
      var BundleName = 'app-sound';
      var SoundManager = exports('default', (_dec = ccclass('SoundManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(SoundManager, _BaseManager);
        function SoundManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this.musicMuteCacheKey = 'musicMute';
          _this.effectMuteCacheKey = 'effectMute';
          _this.musicVolumeScaleCacheKey = 'musicVolumeScale';
          _this.effectVolumeScaleCacheKey = 'effectVolumeScale';
          _this.defaultMusicName = '';
          _this.defaultMusicVolume = 1;
          _this.defaultEffectName = '';
          _this.defaultEffectVolume = 1;
          _this.audioCache = {};
          _this.effectInterval = {};
          _this.playingMusic = {
            uuid: '',
            id: -1,
            name: '',
            volume: 1,
            playing: false,
            paused: false
          };
          return _this;
        }
        var _proto = SoundManager.prototype;
        _proto.init = function init(finish) {
          var _setting$preload;
          var setting = SoundManager.setting;

          // 缓存的key名
          if (setting.musicMuteCacheKey) this.musicMuteCacheKey = setting.musicMuteCacheKey;
          if (setting.effectMuteCacheKey) this.musicMuteCacheKey = setting.effectMuteCacheKey;
          if (setting.musicVolumeScaleCacheKey) this.musicVolumeScaleCacheKey = setting.musicVolumeScaleCacheKey;
          if (setting.effectVolumeScaleCacheKey) this.effectVolumeScaleCacheKey = setting.effectVolumeScaleCacheKey;

          // 默认音乐
          if (setting.defaultMusicName) this.defaultMusicName = setting.defaultMusicName;
          if (typeof setting.defaultMusicVolume === 'number') this.defaultMusicVolume = setting.defaultMusicVolume;

          // 默认按钮音效
          if (setting.defaultEffectName) this.defaultEffectName = setting.defaultEffectName;
          if (typeof setting.defaultEffectVolume === 'number') this.defaultEffectVolume = setting.defaultEffectVolume;
          if (this.musicMuteCacheKey) {
            var musicMute = storage.get(this.musicMuteCacheKey) === true;
            AudioEngine.inst.setMusicMute(musicMute);
          } else {
            this.warn('musicMuteCacheKey不能为空');
          }
          if (this.effectMuteCacheKey) {
            var effectMute = storage.get(this.effectMuteCacheKey) === true;
            AudioEngine.inst.setAllEffectsMute(effectMute);
          } else {
            this.warn('effectMuteCacheKey不能为空');
          }
          if (this.musicVolumeScaleCacheKey) {
            var musicVolumeScale = storage.get(this.musicVolumeScaleCacheKey);
            if (typeof musicVolumeScale === 'number') AudioEngine.inst.setMusicVolumeScale(musicVolumeScale);
          } else {
            this.warn('musicVolumeScaleCacheKey不能为空');
          }
          if (this.effectVolumeScaleCacheKey) {
            var effectVolumeScale = storage.get(this.effectVolumeScaleCacheKey);
            if (typeof effectVolumeScale === 'number') AudioEngine.inst.setAllEffectsVolumeScale(effectVolumeScale);
          } else {
            this.warn('effectVolumeScaleCacheKey不能为空');
          }
          _BaseManager.prototype.init.call(this, finish);

          // 预加载
          (_setting$preload = setting.preload) == null || _setting$preload.forEach(function (path) {
            Core.inst.manager.loader.preload({
              bundle: BundleName,
              type: AudioClip,
              path: path
            });
          });
        };
        _proto.onLoad = function onLoad() {
          game.on(Game.EVENT_HIDE, function () {
            AudioEngine.inst.pauseAll();
          });
          game.on(Game.EVENT_SHOW, function () {
            AudioEngine.inst.resumeAll();
          });
        }

        /**
         * 预加载声音资源
         * @param soundPath sound路径
         */;
        _proto.preload = function preload(soundPath, complete) {
          if (!soundPath) {
            this.error('preload', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }
          if (soundPath.indexOf('effect') !== 0 && soundPath.indexOf('music') !== 0) {
            this.error('preload', 'fail', soundPath);
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }

          // 远程加载
          Core.inst.manager.loader.preload({
            bundle: BundleName,
            path: soundPath,
            type: AudioClip,
            onComplete: complete
          });
        }

        /**
         * 加载声音资源
         * @param soundPath sound路径
         * @param progress 加载进度回调
         * @param complete 加载完成回调
         */;
        _proto.load = function load(soundPath) {
          var _this2 = this;
          var progress = (arguments.length <= 2 ? undefined : arguments[2]) && (arguments.length <= 1 ? undefined : arguments[1]);
          var complete = (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 1 ? undefined : arguments[1]);
          if (!soundPath) {
            this.error('load', 'fail');
            complete && setTimeout(function () {
              if (!isValid(_this2)) return;
              complete(null);
            });
            return;
          }
          if (soundPath.indexOf('effect') !== 0 && soundPath.indexOf('music') !== 0) {
            this.error('load', 'fail', soundPath);
            complete && setTimeout(function () {
              if (!isValid(_this2)) return;
              complete(null);
            });
            return;
          }

          // 判断有无缓存
          var audio = this.audioCache[soundPath];
          if (audio) {
            complete && setTimeout(function () {
              if (!isValid(_this2)) return;
              complete(audio);
            });
            return;
          }

          // 远程加载
          Core.inst.manager.loader.load({
            bundle: BundleName,
            path: soundPath,
            type: AudioClip,
            onProgress: progress,
            onComplete: function onComplete(audioClip) {
              if (!isValid(_this2)) return;
              if (audioClip) {
                _this2.audioCache[soundPath] = audioClip;
                complete && complete(audioClip);
              } else {
                complete && complete(null);
              }
            }
          });
        }

        /**
         * 释放声音资源
         * @param soundPath 声音路径
         */;
        _proto.release = function release(soundPath) {
          if (soundPath.indexOf('effect') !== 0 && soundPath.indexOf('music') !== 0) {
            this.error("release " + soundPath + " fail");
            return;
          }
          delete this.audioCache[soundPath];
          Core.inst.manager.loader.release({
            bundle: BundleName,
            path: soundPath,
            type: AudioClip
          });
        }

        /**
         * 播放默认音乐
         */;
        _proto.playDefaultMusic = function playDefaultMusic(onPlay) {
          if (this.defaultMusicName) {
            this.playMusic({
              name: this.defaultMusicName,
              volume: this.defaultMusicVolume,
              onPlay: onPlay
            });
          } else {
            this.warn('defaultMusicName 不存在');
          }
        }

        /**
         * 播放默认音效
         */;
        _proto.playDefaultEffect = function playDefaultEffect(onPlay) {
          if (this.defaultEffectName) {
            this.playEffect({
              name: this.defaultEffectName,
              volume: this.defaultEffectVolume,
              onPlay: onPlay
            });
          } else {
            this.warn('defaultEffectName 不存在');
          }
        }

        /**
         * 设置按钮点击播放的音效，优先级高于默认音效
         * @param name 音效(如果为空，则使用默认音效)
         * @param opts.volume 音量
         * @param opts.interval 多少秒内不会重复播放
         */;
        _proto.setButtonEffect = function setButtonEffect(target, name, opts) {
          if (name) {
            var _ref = opts || {},
              _ref$volume = _ref.volume,
              volume = _ref$volume === void 0 ? 1 : _ref$volume,
              _ref$interval = _ref.interval,
              interval = _ref$interval === void 0 ? 0 : _ref$interval;
            //@ts-ignore
            target.node['useDefaultEffect'] = false;
            target.node.targetOff(this);
            target.node.on(Button.EventType.CLICK, function () {
              this.playEffect({
                name: name,
                volume: volume,
                interval: interval
              });
            }, this);
          } else {
            //@ts-ignore
            target.node['useDefaultEffect'] = true;
            target.node.targetOff(this);
          }
        }

        /**
         * 播放音效
         * @param name 音效
         * @param loop 循环播放
         * @param volume 音量
         * @param interval 多少秒内不会重复播放
         */;
        _proto.playEffect = function (_playEffect) {
          function playEffect() {
            return _playEffect.apply(this, arguments);
          }
          playEffect.toString = function () {
            return _playEffect.toString();
          };
          return playEffect;
        }(function (_temp) {
          var _this3 = this;
          var _ref2 = _temp === void 0 ? {
              name: ''
            } : _temp,
            name = _ref2.name,
            _ref2$volume = _ref2.volume,
            volume = _ref2$volume === void 0 ? 1 : _ref2$volume,
            _ref2$loop = _ref2.loop,
            loop = _ref2$loop === void 0 ? false : _ref2$loop,
            _ref2$interval = _ref2.interval,
            interval = _ref2$interval === void 0 ? 0 : _ref2$interval,
            onEnded = _ref2.onEnded,
            onPlay = _ref2.onPlay,
            onError = _ref2.onError;
          if (!name) {
            onError && onError();
            return;
          }
          // 静音不允许播放
          if (this.isEffectMute) {
            onError && onError();
            return;
          }
          // 正在播放中，不允许重复播放
          if (this.effectInterval[name] && Date.now() < this.effectInterval[name]) {
            onError && onError();
            return;
          }

          // 加载音乐
          this.load(name, function (audioClip) {
            if (!isValid(_this3)) {
              onError && onError();
              return;
            }
            // 静音不允许播放
            if (_this3.isEffectMute) {
              onError && onError();
              return;
            }
            // 正在播放中，不允许重复播放
            if (_this3.effectInterval[name] && Date.now() < _this3.effectInterval[name]) {
              onError && onError();
              return;
            }
            if (!audioClip) {
              _this3.error("playEffect " + name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              onError && onError();
              return;
            }
            if (interval > 0) {
              _this3.effectInterval[name] = Date.now() + interval * 1000;
            }
            AudioEngine.inst.playEffect(audioClip, volume, loop, onPlay, onEnded);
          });
        }

        /**
         * 播放音效
         * @param name 音效
         * @param loop 循环播放
         * @param volume 音量
         * @param interval 多少秒内不会重复播放
         * @returns 如果Promise返回值是null(非真)，则播放失败
         */);
        _proto.playEffectAsync = function (_playEffectAsync) {
          function playEffectAsync() {
            return _playEffectAsync.apply(this, arguments);
          }
          playEffectAsync.toString = function () {
            return _playEffectAsync.toString();
          };
          return playEffectAsync;
        }( /*#__PURE__*/
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
          var _this4 = this;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (params === void 0) {
                  params = {
                    name: ''
                  };
                }
                return _context.abrupt("return", new Promise(function (resolve) {
                  _this4.playEffect(_extends({}, params, {
                    onPlay: function onPlay(audioID) {
                      resolve(audioID);
                    },
                    onError: function onError() {
                      resolve(null);
                    }
                  }));
                }));
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))
        /**
         * 暂停音效
         * @param id 
         * @returns 
         */);

        _proto.pauseEffect = function pauseEffect(id) {
          return AudioEngine.inst.pauseEffect(id);
        }

        /**
         * 暂停所有音效
         * @returns 
         */;
        _proto.pauseAllEffects = function pauseAllEffects() {
          return AudioEngine.inst.pauseAllEffects();
        }

        /**
         * 恢复音效
         * @param id 
         * @returns 
         */;
        _proto.resumeEffect = function resumeEffect(id) {
          return AudioEngine.inst.resumeEffect(id);
        }

        /**
         * 恢复所有音效
         * @returns 
         */;
        _proto.resumeAllEffects = function resumeAllEffects() {
          return AudioEngine.inst.resumeAllEffects();
        }

        /**
         * 停止音效
         * @param id 
         * @returns 
         */;
        _proto.stopEffect = function stopEffect(id) {
          return AudioEngine.inst.stopEffect(id);
        }

        /**
         * 停止所有音效
         * @returns 
         */;
        _proto.stopAllEffects = function stopAllEffects() {
          return AudioEngine.inst.stopAllEffects();
        }

        /**
         * 播放音乐
         * @param volume 音量
         * @param force 是否强制重新播放
         */;
        _proto.playMusic = function (_playMusic) {
          function playMusic() {
            return _playMusic.apply(this, arguments);
          }
          playMusic.toString = function () {
            return _playMusic.toString();
          };
          return playMusic;
        }(function (_temp2) {
          var _this5 = this;
          var _ref4 = _temp2 === void 0 ? {
              name: ''
            } : _temp2,
            name = _ref4.name,
            _ref4$volume = _ref4.volume,
            volume = _ref4$volume === void 0 ? 1 : _ref4$volume,
            _ref4$force = _ref4.force,
            force = _ref4$force === void 0 ? false : _ref4$force,
            onPlay = _ref4.onPlay,
            onError = _ref4.onError;
          if (!name) {
            onError && onError();
            return;
          }

          // 该音乐正在播放中
          if (!force && this.playingMusic.id !== -1 && this.playingMusic.name === name) {
            AudioEngine.inst.setMusicVolume(volume);
            onPlay && onPlay();
            return;
          }

          // 先停止当前音乐
          this.stopMusic();

          // 播放操作uuid
          var uuid = this.createUUID();
          this.playingMusic.uuid = uuid;
          // 记录要播放音乐的名字
          this.playingMusic.name = name;
          // 记录要播放音乐的音量
          this.playingMusic.volume = volume;
          // 记录音乐状态
          this.playingMusic.playing = true;
          this.playingMusic.paused = false;

          // 静音
          if (this.isMusicMute) {
            onPlay && onPlay();
            return;
          }

          // 加载音乐
          this.load(name, function (audioClip) {
            if (!isValid(_this5)) {
              onError && onError();
              return;
            }
            // 不合法
            if (_this5.playingMusic.id !== -1) {
              onError && onError();
              return;
            }
            if (_this5.playingMusic.name !== name) {
              onError && onError();
              return;
            }
            if (_this5.playingMusic.uuid !== _this5.playingMusic.uuid) {
              onError && onError();
              return;
            }
            // 不存在
            if (!audioClip) {
              _this5.error("playMusic " + name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              onError && onError();
              return;
            }
            // 静音
            if (_this5.isMusicMute) {
              onPlay && onPlay();
              return;
            }
            _this5.playingMusic.id = AudioEngine.inst.playMusic(audioClip, volume, onPlay);
          });
        }

        /**
         * 播放音乐
         * @param volume 音量
         * @param force 是否强制重新播放
         * @returns 如果Promise返回值是false，则播放失败
         */);
        _proto.playMusicAsync = function (_playMusicAsync) {
          function playMusicAsync() {
            return _playMusicAsync.apply(this, arguments);
          }
          playMusicAsync.toString = function () {
            return _playMusicAsync.toString();
          };
          return playMusicAsync;
        }(function (params) {
          var _this6 = this;
          if (params === void 0) {
            params = {
              name: ''
            };
          }
          return new Promise(function (resolve) {
            _this6.playMusic(_extends({}, params, {
              onPlay: function onPlay() {
                resolve(true);
              },
              onError: function onError() {
                resolve(false);
              }
            }));
          });
        }

        /**
         * 重新播放音乐
         */);
        _proto.replayMusic = function replayMusic(onPlay) {
          if (!this.playingMusic.playing) return;
          if (!this.playingMusic.name) return;
          this.playMusic({
            name: this.playingMusic.name,
            volume: this.playingMusic.volume,
            force: true,
            onPlay: onPlay
          });
        }

        /**
         * 暂停音乐
         */;
        _proto.pauseMusic = function pauseMusic() {
          if (!this.playingMusic.playing) return false;
          this.playingMusic.paused = true;
          return AudioEngine.inst.pauseMusic();
        }

        /**
         * 恢复音乐
         */;
        _proto.resumeMusic = function resumeMusic() {
          if (!this.playingMusic.playing) return false;
          this.playingMusic.paused = false;
          return AudioEngine.inst.resumeMusic();
        }

        /**
         * 停止音乐
         */;
        _proto.stopMusic = function stopMusic() {
          this.playingMusic.playing = false;
          this.playingMusic.paused = false;
          this.playingMusic.volume = 1;
          this.playingMusic.name = '';
          this.playingMusic.uuid = '';
          this.playingMusic.id = -1;
          return AudioEngine.inst.stopMusic();
        }

        /**
         * 设置音乐静音
         * @param mute 是否静音
         * @param isCache 静音状态是否写入缓存(通过localstorage)
         */;
        _proto.setMusicMute = function setMusicMute(mute, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          isCache && storage.set(this.musicMuteCacheKey, mute);
          AudioEngine.inst.setMusicMute(mute);
          if (!mute && this.playingMusic.name) {
            this.playMusic({
              name: this.playingMusic.name,
              volume: this.playingMusic.volume
            });
          }
        }

        /**
         * 音乐是否正在播放
         */;
        /**
         * 设置音效静音
         * @param mute 是否静音
         * @param isCache 静音状态是否写入缓存(通过localstorage)
         */
        _proto.setEffectMute = function setEffectMute(mute, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setAllEffectsMute(mute);
          isCache && storage.set(this.effectMuteCacheKey, mute);
        }

        /**
         * 音效是否静音
         */;
        /**
         * 设置音乐音量倍率
         * @param scale 
         * @param isCache 音量倍率是否写入缓存(通过localstorage)
         */
        _proto.setMusicVolumeScale = function setMusicVolumeScale(scale, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setMusicVolumeScale(scale);
          isCache && storage.set(this.musicVolumeScaleCacheKey, scale);
        }

        /**
         * 音乐音量倍率
         */;
        /**
         * 设置音效音量倍率
         * @param scale 
         * @param isCache 音量倍率是否写入缓存(通过localstorage)
         */
        _proto.setEffectVolumeScale = function setEffectVolumeScale(scale, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setAllEffectsVolumeScale(scale);
          isCache && storage.set(this.effectVolumeScaleCacheKey, scale);
        }

        /**
         * 音效音量倍率
         */;
        _createClass(SoundManager, [{
          key: "isMusicPlaying",
          get: function get() {
            return this.playingMusic.playing;
          }

          /**
           * 音乐是否暂停
           */
        }, {
          key: "isMusicPaused",
          get: function get() {
            return this.playingMusic.paused;
          }

          /**
           * 音乐是否静音
           */
        }, {
          key: "isMusicMute",
          get: function get() {
            return AudioEngine.inst.getMusicMute();
          }
        }, {
          key: "isEffectMute",
          get: function get() {
            return AudioEngine.inst.getAllEffectsMute();
          }
        }, {
          key: "musicVolumeScale",
          get: function get() {
            return AudioEngine.inst.getMusicVolumeScale();
          }
        }, {
          key: "effectVolumeScale",
          get: function get() {
            return AudioEngine.inst.getAllEffectsVolumeScale();
          }
        }]);
        return SoundManager;
      }(BaseManager), _class2.setting = {}, _class2.MusicName = MusicName, _class2.EffectName = EffectName, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storage.ts", ['cc'], function (exports) {
  var cclegacy, sys, log, error, js;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      log = module.log;
      error = module.error;
      js = module.js;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be3dafKG7VKQYlL+CdRx47y", "storage", undefined);
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      function encode(text, key) {
        key = key || chars;
        var encrypted = '';
        for (var i = 0; i < text.length; i++) {
          var charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          encrypted += String.fromCharCode(charCode);
        }
        return encrypted;
      }
      function decode(encryptedText, key) {
        key = key || chars;
        var decrypted = '';
        for (var i = 0; i < encryptedText.length; i++) {
          var charCode = encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          decrypted += String.fromCharCode(charCode);
        }
        return decrypted;
      }
      var weekOfYear = function weekOfYear(curDate) {
        /*
         date1是当前日期
         date2是当年第一天
         d是当前日期是今年第多少天
         用d + 当前年的第一天的周差距的和在除以7就是本年第几周
         */
        curDate = curDate || new Date();
        var a = curDate.getFullYear();
        var b = curDate.getMonth() + 1;
        var c = curDate.getDate();
        var date1 = new Date(a, b - 1, c),
          date2 = new Date(a, 0, 1),
          d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
        return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
      };
      var getWeekUpdateTime = function getWeekUpdateTime() {
        var date = new Date();
        var year = date.getFullYear();
        var week = weekOfYear(date);
        return year + '' + week;
      };
      var getDayUpdateTime = function getDayUpdateTime(curDate) {
        curDate = curDate || new Date();
        return curDate.toLocaleDateString();
      };
      var Storage = /*#__PURE__*/function () {
        function Storage() {
          this._cache = {};
          /**
           * 加密密钥  
           * - 如果需要加密内容，请设置密钥的值
           */
          this.secretKey = '';
        }
        var _proto = Storage.prototype;
        /**
         * 返回值为false代表调用失败
         */
        _proto.set = function set(key, value) {
          if (typeof key === 'string' && typeof value !== 'undefined') {
            try {
              var data = JSON.stringify(value);
              if (this.secretKey) {
                sys.localStorage.setItem(key, encode(data, this.secretKey));
              } else {
                sys.localStorage.setItem(key, data);
              }
              // 设置缓存
              this._cache[key] = data;
              return true;
            } catch (err) {
              log(err);
            }
          } else {
            error('storage set error');
          }
          return false;
        }

        /**
         * 返回值为undefined代表调用失败
         */;
        _proto.get = function get(key) {
          // 先读取缓存
          if (typeof this._cache[key] !== 'undefined') {
            return JSON.parse(this._cache[key]);
          }
          var result = null;
          try {
            var data = sys.localStorage.getItem(key);
            if (data && typeof data === 'string') {
              if (this.secretKey) data = decode(data, this.secretKey);
              // 设置缓存
              this._cache[key] = data;
              result = JSON.parse(data);
            } else if (data !== '' && data !== null) {
              result = undefined;
            }
          } catch (e) {
            result = undefined;
          }
          return result;
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.add = function add(key, value) {
          if (value === void 0) {
            value = 1;
          }
          var result = this.get(key);
          if (result !== undefined) {
            result = result || 0;
            result += value;
            if (this.set(key, result)) {
              return result;
            }
          }
          return false;
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.remove = function remove(key) {
          try {
            sys.localStorage.removeItem(key);
            delete this._cache[key];
            return true;
          } catch (err) {
            return false;
          }
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.clear = function clear() {
          try {
            sys.localStorage.clear();
            js.clear(this._cache);
            return true;
          } catch (err) {
            return false;
          }
        }

        /**
         * 设置本周数据 [返回值为false代表调用失败]
         * @param {Function} cb 当已存在本周的数据时，会根据cb的返回决定是否存储，true代表存储
         */;
        _proto.setWeek = function setWeek(key, value, cb) {
          var updateTime = getWeekUpdateTime();
          if (cb) {
            var data = this.getWeek(key);
            if (data !== undefined) {
              if (data === null || cb(data, value)) {
                return this.set(key, {
                  data: value,
                  updateTime: updateTime
                });
              }
            }
          } else {
            return this.set(key, {
              data: value,
              updateTime: updateTime
            });
          }
          return false;
        }

        /**
         * 获取本周数据 [返回值为undefined代表调用失败]
         */;
        _proto.getWeek = function getWeek(key) {
          var data = this.get(key);
          if (data && data.updateTime == getWeekUpdateTime()) {
            return data.data;
          }
          return data && null;
        }

        /**
         * 设置本天数据 [返回值为false代表调用失败]
         * @param {Function} cb 当已存在本天的数据时，会根据cb的返回决定是否存储，true代表存储
         */;
        _proto.setDay = function setDay(key, value, cb) {
          var updateTime = getDayUpdateTime();
          if (cb) {
            var data = this.getDay(key);
            if (data !== undefined) {
              if (data === null || cb(data, value)) {
                return this.set(key, {
                  data: value,
                  updateTime: updateTime
                });
              }
            }
          } else {
            return this.set(key, {
              data: value,
              updateTime: updateTime
            });
          }
          return false;
        }

        /**
         * 获取本天数据 [返回值为undefined代表调用失败]
         * @param {*} key 
         */;
        _proto.getDay = function getDay(key) {
          var data = this.get(key);
          if (data && data.updateTime == getDayUpdateTime()) {
            return data.data;
          }
          return data && null;
        };
        return Storage;
      }();
      var storage = exports('default', new Storage());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/task.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "721e63MqrNI1qpO4br4ISY7", "task", undefined);
      /**
       * 顺序执行
       */
      var Sync = /*#__PURE__*/function () {
        function Sync() {
          this.running = false;
          this.index = -1;
          this.list = [];
          this.finish = null;
          /**
           * 每个handle的返回值，通过next或end存储
           */
          this.results = [];
        }
        var _proto = Sync.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto.size = function size() {
          return this.list.length;
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto.add = function add(handle) {
          this.list.push(handle);
          this.results.push(undefined);
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto.start = function start(finish) {
          if (this.running) {
            return this;
          }
          this.running = true;
          this.index = -1;
          this.finish = finish;
          this.next(this.index);
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto.stop = function stop() {
          if (!this.running) {
            return false;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, false);
          }
          return true;
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto.isRunning = function isRunning() {
          return this.running;
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto.isStop = function isStop() {
          return !this.running;
        };
        _proto.end = function end(data) {
          if (!this.running) {
            return false;
          }
          if (typeof data !== 'undefined') {
            this.results[this.index] = data;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, true);
          }
          return true;
        };
        _proto.next = function next(index, data) {
          if (!this.running) {
            return false;
          }
          if (index !== this.index) return false;
          if (typeof data !== 'undefined') {
            this.results[this.index] = data;
          }
          if (++this.index < this.list.length) {
            this.retry(this.index);
          } else {
            this.end();
          }
          return true;
        };
        _proto.retry = function retry(index) {
          var _this = this;
          if (!this.running) {
            return false;
          }
          if (index !== this.index) return false;
          var handle = this.list[index];
          handle && handle(function (data) {
            return _this.next(index, data);
          }, function (timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            return new Promise(function (resolve) {
              if (timeout > 0) {
                setTimeout(function () {
                  resolve(_this.retry(index));
                }, timeout * 1000);
              } else {
                resolve(_this.retry(index));
              }
            });
          }, function (data) {
            return _this.end(data);
          });
          return true;
        };
        return Sync;
      }();
      /**
       * 同时执行
       */
      var ASync = /*#__PURE__*/function () {
        function ASync() {
          this.running = false;
          this.count = 0;
          this.list = [];
          this.finish = null;
          /**
           * 每个handle的返回值，通过next或end存储
           */
          this.results = [];
        }
        var _proto2 = ASync.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto2.size = function size() {
          return this.list.length;
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto2.add = function add(handle) {
          this.list.push(handle);
          this.results.push(undefined);
          if (this.running) {
            this.retry(this.list.length - 1);
          }
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto2.start = function start(finish) {
          if (this.running) {
            return this;
          }
          this.running = true;
          this.count = 0;
          this.finish = finish;
          if (this.list.length) {
            for (var index = 0; index < this.list.length; index++) {
              this.retry(index);
            }
          } else {
            this.end && this.end(this.count);
          }
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto2.stop = function stop() {
          if (!this.running) {
            return false;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, false);
          }
          return true;
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto2.isRunning = function isRunning() {
          return this.running;
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto2.isStop = function isStop() {
          return !this.running;
        };
        _proto2.end = function end(index, data) {
          if (!this.running) {
            return false;
          }
          if (index >= 0 && index < this.results.length) {
            if (this.results[index] || this.results[index] === null) return false;
            this.results[index] = typeof data !== 'undefined' ? data : null;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, true);
          }
          return true;
        };
        _proto2.next = function next(index, data) {
          if (!this.running) {
            return false;
          }
          if (index >= 0 && index < this.results.length) {
            if (this.results[index] || this.results[index] === null) return false;
            this.results[index] = typeof data !== 'undefined' ? data : null;
          }
          if (++this.count === this.list.length) {
            this.end && this.end(this.count);
          }
          return true;
        };
        _proto2.retry = function retry(index) {
          var _this2 = this;
          if (!this.running) {
            return false;
          }
          var handle = this.list[index];
          handle && handle(function (data) {
            return _this2.next(index, data);
          }, function (timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            return new Promise(function (resolve) {
              if (timeout > 0) {
                setTimeout(function () {
                  resolve(_this2.retry(index));
                }, timeout * 1000);
              } else {
                resolve(_this2.retry(index));
              }
            });
          }, function (data) {
            return _this2.end(index, data);
          });
          return true;
        };
        return ASync;
      }();
      var Any = /*#__PURE__*/function () {
        function Any() {
          this.task = new Sync();
        }
        var _proto3 = Any.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto3.size = function size() {
          return this.task.size();
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto3.add = function add(handles) {
          if (handles instanceof Array) {
            var async = new ASync();
            handles.forEach(function (handle) {
              return async.add(handle);
            });
            this.task.add(async.start.bind(async));
          } else {
            this.task.add(handles);
          }
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto3.start = function start(finish) {
          this.task.start(finish);
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto3.stop = function stop() {
          return this.task.stop();
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto3.isRunning = function isRunning() {
          return this.task.isRunning();
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto3.isStop = function isStop() {
          return this.task.isStop();
        };
        _createClass(Any, [{
          key: "results",
          get:
          /**
           * 每个handle的返回值，通过next或end存储
           */
          function get() {
            return this.task.results;
          }
        }]);
        return Any;
      }();
      var task = exports('default', {
        /**
         * 任务顺序执行
         */
        createSync: function createSync() {
          return new Sync();
        },
        /**
         * 任务同时执行
         */
        createASync: function createASync() {
          return new ASync();
        },
        /**
         * 根据参数指定执行顺序
         * @example
         * createAny()
         * .add(1).add(2).add(3).add(4)
         * .add([5,6,7])
         * .add(8)
         * 执行顺序，1，2，3，4依次执行，然后同时执行5，6，7，最后执行8
         */
        createAny: function createAny() {
          return new Any();
        },
        /**
         * 执行单个任务
         */
        execute: function execute(fun, retryMax, retryFinish) {
          if (retryMax === void 0) {
            retryMax = -1;
          }
          fun(function retry(timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            if (retryMax === 0) return retryFinish && retryFinish();
            retryMax = retryMax > 0 ? retryMax - 1 : retryMax;
            if (timeout > 0) {
              setTimeout(function () {
                return task.execute(fun, retryMax, retryFinish);
              }, timeout * 1000);
            } else {
              task.execute(fun, retryMax, retryFinish);
            }
          });
        },
        /**
         * 执行单个任务
         * @deprecated
         */
        excute: function excute(fun, retryMax, retryFinish) {
          if (retryMax === void 0) {
            retryMax = -1;
          }
          return this.execute(fun, retryMax, retryFinish);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimerManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class3;
      cclegacy._RF.push({}, "b5636+NNRZFEKq6dPkgK4qf", "TimerManager", undefined);
      var ccclass = _decorator.ccclass;
      var Time = /*#__PURE__*/function () {
        function Time(time, callback, target) {
          this._beginHour = 0;
          this._beginMinute = 0;
          this._beginSecond = 0;
          this._endHour = 0;
          this._endMinute = 0;
          this._endSecond = 0;
          this.checkCallback = 0;
          this.callback = null;
          this.target = null;
          this.callback = callback;
          this.target = target;
          var _time$split = time.split('-'),
            time0 = _time$split[0],
            time1 = _time$split[1];
          var time0Array = time0.split(':');
          this._beginHour = Number(time0Array[0]) || 0;
          this._beginMinute = Number(time0Array[1] || 0) || 0;
          this._beginSecond = Number(time0Array[2] || 0) || 0;
          if (time1) {
            var time1Array = time1.split(':');
            this._endHour = Number(time1Array[0]) || 0;
            this._endMinute = Number(time1Array[1] || 0) || 0;
            this._endSecond = Number(time1Array[2] || 0) || 0;
          } else {
            this._endHour = this._beginHour;
            this._endMinute = this._beginMinute;
            this._endSecond = this._beginSecond;
          }
        }
        _createClass(Time, [{
          key: "beginTime",
          get: function get() {
            var date = new Date();
            date.setHours(this._beginHour);
            date.setMinutes(this._beginMinute);
            date.setSeconds(this._beginSecond);
            return date.getTime();
          }
        }, {
          key: "endTime",
          get: function get() {
            var date = new Date();
            date.setHours(this._endHour);
            date.setMinutes(this._endMinute);
            date.setSeconds(this._endSecond);
            return date.getTime();
          }
        }]);
        return Time;
      }();
      // @ccclass
      var Timer = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Timer, _Component);
        function Timer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.times = [];
          return _this;
        }
        var _proto = Timer.prototype;
        _proto.registerDailyTrigger = function registerDailyTrigger(time, callback, target) {
          this.times.push(new Time(time, callback, target));
        };
        _proto.unregisterDailyTrigger = function unregisterDailyTrigger(callback) {
          for (var index = 0; index < this.times.length; index++) {
            var _time = this.times[index];
            if (_time.callback === callback) {
              this.times.splice(index, 1);
              break;
            }
          }
        };
        _proto.update = function update() {
          var date = new Date();
          var dateTime = date.getTime();
          var dateDay = date.getDay();
          this.times.forEach(function (time) {
            if (time.checkCallback !== dateDay && time.beginTime <= dateTime && time.endTime >= dateTime) {
              time.checkCallback = dateDay;
              time.callback.call(time.target);
            }
          });
        };
        return Timer;
      }(Component);
      var TimerManager = exports('default', (_dec = ccclass('TimerManager'), _dec(_class3 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(TimerManager, _BaseManager);
        function TimerManager() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this2.timers = new Map();
          return _this2;
        }
        var _proto2 = TimerManager.prototype;
        _proto2.clear = function clear() {
          this.timers.forEach(function (timer) {
            timer.destroy();
          });
          this.timers.clear();
        };
        _proto2["delete"] = function _delete(rootName) {
          var timer = this.timers.get(rootName);
          if (timer) {
            this.timers["delete"](rootName);
            timer.destroy();
          }
        };
        _proto2.get = function get(rootName) {
          if (this.timers.has(rootName)) {
            return this.timers.get(rootName);
          }
          var timer = this.node.addComponent(Timer);
          this.timers.set(rootName, timer);
          return timer;
        };
        return TimerManager;
      }(BaseManager)) || _class3));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts', './BaseView.ts', './UIMgrLoading.ts', './UIMgrShade.ts', './UIMgrToast.ts', './UIMgrZOrder.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _createClass, cclegacy, _decorator, Node, Prefab, find, Camera, director, instantiate, settings, Settings, size, screen, Layers, UITransform, Widget, Scene, js, isValid, SceneAsset, Canvas, ResolutionPolicy, view, Core, BaseManager, ViewType, BaseView, UIMgrLoading, UIMgrShade, UIMgrToast, UIMgrZOrder;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      find = module.find;
      Camera = module.Camera;
      director = module.director;
      instantiate = module.instantiate;
      settings = module.settings;
      Settings = module.Settings;
      size = module.size;
      screen = module.screen;
      Layers = module.Layers;
      UITransform = module.UITransform;
      Widget = module.Widget;
      Scene = module.Scene;
      js = module.js;
      isValid = module.isValid;
      SceneAsset = module.SceneAsset;
      Canvas = module.Canvas;
      ResolutionPolicy = module.ResolutionPolicy;
      view = module.view;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      ViewType = module.ViewType;
      BaseView = module.default;
    }, function (module) {
      UIMgrLoading = module.default;
    }, function (module) {
      UIMgrShade = module.default;
    }, function (module) {
      UIMgrToast = module.default;
    }, function (module) {
      UIMgrZOrder = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "234f6Lx69NNFJ9vC2nHCWRJ", "UIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIScene = 'UIRoot';
      var Root2DPath = 'Root2D';
      var UserInterfacePath = 'Root2D/UserInterface';
      var ViewTypes = [ViewType.Page, ViewType.Paper, ViewType.Pop, ViewType.Top];
      var BlockEvents = [Node.EventType.TOUCH_START, Node.EventType.TOUCH_MOVE, Node.EventType.TOUCH_END, Node.EventType.TOUCH_CANCEL, Node.EventType.MOUSE_DOWN, Node.EventType.MOUSE_MOVE, Node.EventType.MOUSE_UP, Node.EventType.MOUSE_ENTER, Node.EventType.MOUSE_LEAVE, Node.EventType.MOUSE_WHEEL];

      /**
       * 错误码
       */
      var ErrorCode = /*#__PURE__*/function (ErrorCode) {
        ErrorCode[ErrorCode["LoadError"] = 0] = "LoadError";
        ErrorCode[ErrorCode["LogicError"] = 1] = "LogicError";
        ErrorCode[ErrorCode["InvalidError"] = 2] = "InvalidError";
        return ErrorCode;
      }(ErrorCode || {});
      /**
       * 界面名字枚举
       */
      var ViewName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });

      /**
       * 子界面名字枚举
       */
      var MiniViewName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });
      var UIManager = exports('default', (_dec = ccclass('UIManager'), _dec2 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrLoading'
      }), _dec3 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrShade'
      }), _dec4 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrToast'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(UIManager, _BaseManager);
        function UIManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingPre", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shadePre", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toastPre", _descriptor3, _assertThisInitialized(_this));
          // 2D根节点
          _this.Root2D = null;
          // UI根节点
          _this.UserInterface = null;
          // 加载和遮罩节点
          _this.loading = null;
          _this.shade = null;
          _this.toast = null;
          _this.defaultUI = null;
          _this.defaultData = '';
          _this.currScene = '';
          _this.currPage = null;
          _this.currFocus = null;
          // 预制体缓存
          _this.prefabCache = {};
          _this.sceneCache = {};
          // 全局触摸有效
          _this.touchEnabled = true;
          // 记录触摸屏蔽
          _this.touchMaskMap = new Map();
          // 记录展示加载
          _this.showLoadingMap = new Map();
          // 记录正在加载中的有效的ui
          _this.uiLoadingMap = new Map();
          // 记录正在展示中的有效的ui
          _this.uiShowingMap = new Map();
          _this.showQueue = [];
          return _this;
        }
        var _proto = UIManager.prototype;
        _proto.init = function init(finish) {
          var _setting$preload,
            _this2 = this;
          var setting = UIManager.setting;
          this.defaultUI = setting.defaultUI;
          this.defaultData = setting.defaultData;
          _BaseManager.prototype.init.call(this, finish);

          // 预加载,符合AnyTask规则
          if ((_setting$preload = setting.preload) != null && _setting$preload.length) {
            var task = Core.inst.lib.task.createAny();
            setting.preload.forEach(function (preload) {
              if (preload instanceof Array) {
                task.add(preload.map(function (name) {
                  return function (next) {
                    return _this2.preload(name, next);
                  };
                }));
              } else {
                task.add(function (next) {
                  return _this2.preload(preload, next);
                });
              }
            });
            task.start();
          }
        };
        _proto.onLoad = function onLoad() {
          this.Root2D = find(Root2DPath);
          this.UserInterface = find(UserInterfacePath);
          this.Root2D.getComponentsInChildren(Camera).forEach(function (camera) {
            // 避免camera.priority<0的情况，否则会造成渲染异常
            if (camera.priority < 0) camera.priority = 0;
            // 避免camera.far<=camera.near的情况，否则会造成渲染异常
            if (camera.far <= camera.near) camera.far = camera.near + 1;
          });
          director.addPersistRootNode(this.Root2D);
          this.initUITypes();
          this.shade = instantiate(this.shadePre);
          this.loading = instantiate(this.loadingPre);
          this.shade.active = false;
          this.loading.active = false;
          this.shade.parent = this.UserInterface;
          this.loading.parent = this.UserInterface;

          // toast是后面加的，需要做容错
          if (this.toastPre) {
            this.toast = instantiate(this.toastPre);
            this.toast.parent = this.UserInterface;
          }

          // 自动适配分辨率策略
          if (UIManager.setting.autoFit) {
            var designResolution = settings.querySettings(Settings.Category.SCREEN, 'designResolution');
            var windowSize = size(screen.windowSize);
            var resolutionPolicy = designResolution.policy;
            var autoFitResolutionPolicy = function autoFitResolutionPolicy() {
              if (designResolution.policy === ResolutionPolicy.FIXED_WIDTH) {
                if (windowSize.width / windowSize.height > designResolution.width / designResolution.height) {
                  if (resolutionPolicy === ResolutionPolicy.FIXED_HEIGHT) return;
                  view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
                  resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;
                } else {
                  if (resolutionPolicy === ResolutionPolicy.FIXED_WIDTH) return;
                  view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
                  resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;
                }
              } else if (designResolution.policy === ResolutionPolicy.FIXED_HEIGHT) {
                if (windowSize.height / windowSize.width > designResolution.height / designResolution.width) {
                  if (resolutionPolicy === ResolutionPolicy.FIXED_HEIGHT) return;
                  view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
                  resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;
                } else {
                  if (resolutionPolicy === ResolutionPolicy.FIXED_HEIGHT) return;
                  view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
                  resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;
                }
              }
            };
            autoFitResolutionPolicy();
            this.schedule(function () {
              if (windowSize.equals(screen.windowSize)) return;
              windowSize.set(screen.windowSize);
              autoFitResolutionPolicy();
            }, 0.5);
          }
        };
        _proto.initUITypes = function initUITypes() {
          var _this3 = this;
          ViewTypes.forEach(function (type) {
            var d2 = new Node(type);
            d2.layer = Layers.Enum.UI_2D;
            d2.addComponent(UIMgrZOrder);
            d2.parent = _this3.UserInterface;
            d2.addComponent(UITransform);
            var widget = d2.addComponent(Widget);
            widget.isAlignBottom = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.isAlignTop = true;
            widget.top = 0;
            widget.left = 0;
            widget.right = 0;
            widget.bottom = 0;
            widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          });
        };
        _proto.addTouchMaskListener = function addTouchMaskListener() {
          if (!this.touchEnabled) return;
          if (this.touchMaskMap.size > 0) return;
          for (var i = 0; i < BlockEvents.length; i++) {
            this.UserInterface.on(BlockEvents[i], this.stopPropagation, this, true);
          }
        };
        _proto.removeTouchMaskListener = function removeTouchMaskListener() {
          if (!this.touchEnabled) return;
          if (this.touchMaskMap.size > 0) return;
          for (var i = 0; i < BlockEvents.length; i++) {
            this.UserInterface.off(BlockEvents[i], this.stopPropagation, this, true);
          }
        };
        _proto.stopPropagation = function stopPropagation(event) {
          if (!this.touchEnabled || this.touchMaskMap.size > 0) {
            event.propagationStopped = true;
            if (event.type !== Node.EventType.MOUSE_MOVE) {
              this.log('屏蔽触摸');
            }
          }
        }

        /**
         * 获取一个节点上的BaseView组件, 获取不到返回null
         */;
        _proto.getBaseView = function getBaseView(node) {
          if (!node) return null;
          return node.components.find(function (component) {
            return component instanceof BaseView;
          });
        }

        /**
         * 在所有父节点中找到一个最近的view组件
         * @param target 
         * @returns 
         */;
        _proto.getViewInParents = function getViewInParents(target) {
          var node = target;
          var com = null;
          while (node.parent && !(node.parent instanceof Scene)) {
            com = this.getBaseView(node.parent);
            if (!com) {
              node = node.parent;
            } else {
              break;
            }
          }
          return com;
        }

        /**
         * 在子节点中找到一个最近的view组件
         * @param target 
         * @returns 
         */;
        _proto.getViewInChildren = function getViewInChildren(target) {
          for (var index = 0; index < target.children.length; index++) {
            var node = target.children[index];
            var com = this.getBaseView(node);
            if (com) return com;
          }
          return null;
        }

        /**
         * 根据UI名字获取它的脚本类
         */;
        _proto.getUIClass = function getUIClass(name) {
          return js.getClassByName(name);
        }

        /**
         * 根据UI名字获取UI路径
         * @param name ui名字
         * @returns 
         */;
        _proto.getUIPath = function getUIPath(name) {
          return name;
        }

        /**
         * 获取前缀
         * @param name    ui名字
         */;
        _proto.getUIPrefix = function getUIPrefix(name) {
          for (var index = 0; index < ViewTypes.length; index++) {
            var typeName = ViewTypes[index];
            if (name.indexOf(typeName) === 0) {
              return typeName;
            }
          }
          this.error('getUIPrefix', "" + name);
        }

        /**
         * 根据UI名字查询父节点
         * @param name    ui名字
         */;
        _proto.getUIParent = function getUIParent(name) {
          if (this.currScene === name) {
            return director.getScene();
          }
          var prefix = this.getUIPrefix(name);
          for (var index = 0; index < ViewTypes.length; index++) {
            var viewType = ViewTypes[index];
            if (viewType === prefix) {
              return this.UserInterface.getChildByName(viewType);
            }
          }
          this.error('getUIParent', "\u627E\u4E0D\u5230" + name + "\u5BF9\u5E94\u7684Parent");
          return null;
        }

        /**
         * 根据UI名字获取场景内的节点
         * @param name    ui名字
         */;
        _proto.getUIInScene = function getUIInScene(name, multiple) {
          if (multiple === void 0) {
            multiple = false;
          }
          var parent = this.getUIParent(name);
          if (multiple) {
            var _result = parent.children.filter(function (node) {
              return node.name === name;
            });
            if (_result.length) return _result.filter(function (node) {
              return isValid(node, true);
            });
          } else {
            var _result2 = parent.children.find(function (node) {
              return node.name === name;
            });
            if (_result2) return isValid(_result2, true) ? _result2 : null;
          }
          return multiple ? [] : null;
        }

        /**
         * 根据UI名字获取展示中的节点
         * @param name    ui名字
         */;
        _proto.getUIInShowing = function getUIInShowing(name, multiple) {
          if (multiple === void 0) {
            multiple = false;
          }
          if (multiple) {
            var _result3 = [];
            this.uiShowingMap.forEach(function (_name, com) {
              if (_name === name) _result3.push(com.node);
            });
            return _result3;
          } else {
            var _result4 = null;
            this.uiShowingMap.forEach(function (_name, com) {
              if (!_result4 && _name === name) _result4 = com.node;
            });
            return _result4;
          }
        }

        /**
         * 获取UI骨架Bundle名字
         * @deprecated 将会移除，请改为其它方案
         */;
        _proto.getNativeBundleName = function getNativeBundleName(uiName) {
          // 兼容旧版本
          var oldBundleName = "app-view_" + uiName;
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          if (projectBundles && projectBundles.indexOf(oldBundleName) >= 0) {
            return oldBundleName;
          }
          return BaseManager.stringCaseNegate(uiName);
        }

        /**
         * 获取UI资源Bundle名字
         * @deprecated 将会移除，请改为其它方案
         */;
        _proto.getResBundleName = function getResBundleName(uiName) {
          // 兼容旧版本
          var oldBundleName = "app-view_" + uiName + "_Res";
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          if (projectBundles && projectBundles.indexOf(oldBundleName) >= 0) {
            return oldBundleName;
          }
          return BaseManager.stringCaseNegate(uiName) + "-res";
        }

        /**
         * 初始化Bundle
         */;
        _proto.initBundle = function initBundle(name, onFinish) {
          var _this4 = this;
          Core.inst.lib.task.createASync().add(function (next) {
            Core.inst.manager.loader.loadBundle({
              bundle: _this4.getNativeBundleName(name),
              onComplete: next
            });
          }).add(function (next) {
            Core.inst.manager.loader.loadBundle({
              bundle: _this4.getResBundleName(name),
              onComplete: next
            });
          }).start(onFinish);
        }

        /**
         * 安装UI
         */;
        _proto.installUI = function installUI(name, complete, progress) {
          var _this5 = this;
          if (this.sceneCache[name]) {
            complete && setTimeout(function () {
              if (!isValid(_this5)) return;
              complete(_this5.sceneCache[name]);
            });
            return;
          } else if (this.prefabCache[name]) {
            complete && setTimeout(function () {
              if (!isValid(_this5)) return;
              complete(_this5.prefabCache[name]);
            });
            return;
          }
          var task = Core.inst.lib.task.createSync().add(function (next) {
            _this5.initBundle(name, next);
          }).add(function (next) {
            // 失败
            var uiBundles = task.results[0];
            if (!uiBundles || !uiBundles[0] || !uiBundles[1]) return next(null);
            var isScene = uiBundles[0].getSceneInfo(name);
            Core.inst.manager.loader.load({
              bundle: _this5.getNativeBundleName(name),
              path: _this5.getUIPath(name),
              type: isScene ? SceneAsset : Prefab,
              onProgress: progress,
              onComplete: next
            });
          }).start(function (results) {
            if (!isValid(_this5)) return;
            // 验证缓存
            var cache = _this5.sceneCache[name] || _this5.prefabCache[name];
            if (cache) {
              return complete && complete(cache);
            }
            // 验证有效
            var asset = results[1];
            if (!asset) {
              return complete && complete(null);
            }
            // 添加引用计数
            asset.addRef();
            // 添加缓存
            if (asset instanceof Prefab) {
              _this5.prefabCache[name] = asset;
            } else {
              _this5.sceneCache[name] = asset;
            }
            _this5.log("\u52A0\u8F7D: " + name);
            return complete && complete(asset);
          });
        }

        /**
         * 卸载UI
         */;
        _proto.uninstallUI = function uninstallUI(name) {
          if (this.sceneCache[name]) {
            // 释放引用计数
            this.sceneCache[name].decRef();
            // 删除缓存
            delete this.sceneCache[name];
          } else if (this.prefabCache[name]) {
            // 释放引用计数
            this.prefabCache[name].decRef();
            // 删除缓存
            delete this.prefabCache[name];
          }
          var resBundle = this.getResBundleName(name);
          var naBundle = this.getNativeBundleName(name);
          Core.inst.manager.loader.releaseAll(resBundle);
          Core.inst.manager.loader.releaseAll(naBundle);
          Core.inst.manager.loader.removeBundle(resBundle);
          Core.inst.manager.loader.removeBundle(naBundle);
          this.log("\u5378\u8F7D: " + name);
        }

        /**
         * 加载ui内部资源
         */;
        _proto.loadRes = function loadRes(target, path, type, callback) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.load({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: callback
            });
          } else {
            var _view = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view) {
              Core.inst.manager.loader.load({
                bundle: this.getResBundleName(_view.viewName),
                path: path,
                type: type,
                onComplete: callback
              });
            } else {
              this.error('loadRes', target.name, path);
              callback && callback(null);
            }
          }
        }

        /**
         * 预加载ui内部资源
         */;
        _proto.preloadRes = function preloadRes(target, path, type) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.preload({
              bundle: this.getResBundleName(target),
              path: path,
              type: type
            });
          } else {
            var _view2 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view2) {
              Core.inst.manager.loader.preload({
                bundle: this.getResBundleName(_view2.viewName),
                path: path,
                type: type
              });
            } else {
              this.error('preloadRes', target.name, path);
            }
          }
        }

        /**
         * 加载ui内部资源
         */;
        _proto.loadResDir = function loadResDir(target, path, type, callback) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.loadDir({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: callback
            });
          } else {
            var _view3 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view3) {
              Core.inst.manager.loader.loadDir({
                bundle: this.getResBundleName(_view3.viewName),
                path: path,
                type: type,
                onComplete: callback
              });
            } else {
              this.error('loadResDir', target.name, path);
              callback && callback([]);
            }
          }
        }

        /**
         * 预加载ui内部资源
         */;
        _proto.preloadResDir = function preloadResDir(target, path, type) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.preloadDir({
              bundle: this.getResBundleName(target),
              path: path,
              type: type
            });
          } else {
            var _view4 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view4) {
              Core.inst.manager.loader.preloadDir({
                bundle: this.getResBundleName(_view4.viewName),
                path: path,
                type: type
              });
            } else {
              this.error('preloadResDir', target.name, path);
            }
          }
        }

        /**
         * 预加载UI
         */;
        _proto.preload = function preload(name, complete) {
          var _this6 = this;
          // 验证name是否为真
          if (!name) {
            this.error('preload', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }
          this.initBundle(name, function (_ref) {
            var naBundle = _ref[0];
            var isScene = naBundle.getSceneInfo(name);
            Core.inst.manager.loader.preload({
              bundle: _this6.getNativeBundleName(name),
              path: _this6.getUIPath(name),
              type: isScene ? SceneAsset : Prefab,
              onComplete: complete
            });
          });
        }

        /**
         * 加载UI
         */;
        _proto.load = function load(name) {
          var progress = (arguments.length <= 2 ? undefined : arguments[2]) && (arguments.length <= 1 ? undefined : arguments[1]);
          var complete = (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 1 ? undefined : arguments[1]);

          // 验证name是否为真
          if (!name) {
            this.error('load', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }

          // 异步加载
          this.installUI(name, function (result) {
            if (!result) return complete && complete(null);
            return complete && complete(result);
          }, progress);
        }

        /**
         * 销毁ui，释放ui的资源(hideEvent为destroy模式的UI，无需手动调用)
         * - release会直接销毁UI，不管UI是否是show状态
         */;
        _proto.release = function release(nameOrCom) {
          var _this7 = this;
          var uiName = '';
          if (typeof nameOrCom === 'string') {
            uiName = nameOrCom;
          } else {
            uiName = nameOrCom.viewName;
          }
          if (!uiName) {
            this.error('release', nameOrCom + " fail");
            return;
          }

          // 传入字符串是释放所有
          if (typeof nameOrCom === 'string') {
            var _nodes = this.getUIInScene(uiName, true);
            _nodes.forEach(function (node) {
              if (!node || !isValid(node, true)) return;
              {
                if (_this7.getBaseView(node).isShow) _this7.warn('release', uiName + "\u6B63\u5904\u4E8Eshow\u72B6\u6001, \u6B64\u5904\u5C06\u76F4\u63A5destroy");
              }
              node.parent = null;
              node.destroy();
            });
          }
          // 传入节点或组件是释放单个
          else {
            var node = nameOrCom.node;
            if (node && isValid(node, true)) {
              {
                if (this.getBaseView(node).isShow) this.warn('release', uiName + "\u6B63\u5904\u4E8Eshow\u72B6\u6001, \u6B64\u5904\u5C06\u76F4\u63A5destroy");
              }
              node.parent = null;
              node.destroy();
            }
          }

          // 当全部释放时才清除缓存
          var nodes = this.getUIInScene(uiName, true);
          if (nodes.length === 0 || nodes.every(function (node) {
            return !isValid(node, true);
          })) {
            this.uninstallUI(uiName);
            this.log("\u91CA\u653E\u8D44\u6E90: " + uiName);
          }
        }

        /**
         * 检查UI是否有效
         * - -1: 加载失败
         * - 0: UI无效
         * - 1: UI有效
         */;
        _proto.checkUIValid = function checkUIValid(name, data, callback) {
          var _this8 = this;
          this.installUI(name, function (result) {
            if (!result) return callback(-1);
            var View = _this8.getUIClass(name);
            if (!View) return callback(0);
            if (!View.isViewValid) return callback(1);
            View.isViewValid(function (valid) {
              callback(valid ? 1 : 0);
            }, data);
          });
        }

        /**
         * 更新阴影的层级及显示
         */;
        _proto.refreshShade = function refreshShade() {
          // 借助refreshShade实现onFocus、onLostFocus(onFocus不会被每次都触发，只有产生变化时才触发)
          var onFocus = false;
          // 倒序遍历uiRoots
          var uiRoots = this.UserInterface.children;
          for (var index = uiRoots.length - 1; index >= 0; index--) {
            var uiRoot = uiRoots[index];
            if (uiRoot !== this.shade && uiRoot !== this.loading) {
              // 倒序遍历uiRoot
              var children = uiRoot.children;
              for (var i = children.length - 1; i >= 0; i--) {
                var node = children[i];
                if (node === this.shade) continue;
                var com = this.getBaseView(node);
                if (!com) continue;

                // 触发onFocus
                if (!onFocus && com.isCaptureFocus && com.isShow) {
                  onFocus = true;
                  if (this.currFocus !== com) {
                    isValid(this.currFocus, true) && this.currFocus.constructor.prototype.focus.call(this.currFocus, false);
                    this.currFocus = com;
                    this.currFocus.constructor.prototype.focus.call(this.currFocus, true);
                  }
                }
                // 添加遮罩
                if (com.isNeedShade && com.isShow) {
                  var shadeSetting = Object.assign({}, UIManager.setting.shade, com.constructor.prototype.onShade.call(com));
                  this.shade.getComponent(UIMgrShade).init(typeof shadeSetting.delay !== 'number' ? 0 : shadeSetting.delay, typeof shadeSetting.begin !== 'number' ? 60 : shadeSetting.begin, typeof shadeSetting.end !== 'number' ? 180 : shadeSetting.end, typeof shadeSetting.speed !== 'number' ? 100 : shadeSetting.speed);
                  this.shade.layer = node.layer;
                  this.shade.parent = uiRoot;
                  this.shade.active = true;
                  // 以z坐标来代替2.x时代的zIndex
                  this.shade.setPosition(this.shade.position.x, this.shade.position.y, node.position.z);
                  var shadeIndex = this.shade.getSiblingIndex();
                  var nodeIndex = node.getSiblingIndex();
                  if (shadeIndex > nodeIndex) {
                    this.shade.setSiblingIndex(nodeIndex);
                  } else {
                    this.shade.setSiblingIndex(nodeIndex - 1);
                  }
                  return;
                }
              }
            }
          }
          this.shade.active = false;
          this.shade.getComponent(UIMgrShade).clear();
          if (!onFocus) {
            isValid(this.currFocus, true) && this.currFocus.constructor.prototype.focus.call(this.currFocus, false);
            this.currFocus = null;
          }
        }

        // 解析prefab
        ;

        _proto.parsingPrefab = function parsingPrefab(prefab, name) {
          var _node$getComponent;
          if (!prefab) return null;
          var node = instantiate(prefab);
          node.active = false;
          if (node.name !== name) {
            this.warn('parsingPrefab', "\u8282\u70B9\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            node.name = name;
          }
          node.parent = this.getUIParent(name);
          (_node$getComponent = node.getComponent(Widget)) == null || _node$getComponent.updateAlignment();
          return node;
        }

        // 解析scene
        ;

        _proto.parsingScene = function parsingScene(asset, name) {
          if (!asset || !asset.scene) return null;
          if (asset.scene.name !== name) {
            this.warn('parsingScene', "\u573A\u666F\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            asset.scene.name = name;
          }
          var view = this.getViewInChildren(asset.scene);
          if (!view) {
            this.error('parsingScene', "\u89E3\u6790\u573A\u666F\u65F6\u672A\u67E5\u8BE2\u5230\u6839\u8282\u70B9\u5B58\u5728BaseView: " + this.getUIPath(name));
            return null;
          }
          view.node.active = false;
          if (view.node.name !== name) {
            this.warn('parsingScene', "\u8282\u70B9\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            view.node.name = name;
          }
          return view.node;
        };
        _proto.addUILoadingUuid = function addUILoadingUuid(name) {
          var uuid = this.createUUID();
          if (!this.uiLoadingMap.has(name)) {
            this.uiLoadingMap.set(name, [uuid]);
          } else {
            this.uiLoadingMap.get(name).push(uuid);
          }
          return uuid;
        };
        _proto.removeUILoadingUuid = function removeUILoadingUuid(name, uuid) {
          if (!this.uiLoadingMap.has(name)) return false;
          var index = this.uiLoadingMap.get(name).indexOf(uuid);
          if (index === -1) return false;
          this.uiLoadingMap.get(name).splice(index, 1);
          return true;
        }

        /**
         * 创建UI
         */;
        _proto.createUI = function createUI(name, silent, callback) {
          var _this9 = this;
          // 添加触摸屏蔽
          var maskUUID = silent ? '' : this.addTouchMask();
          if (!name) {
            setTimeout(function () {
              if (!isValid(_this9)) return;
              // 移除触摸屏蔽
              _this9.removeTouchMask(maskUUID);
              callback(null);
            });
            return;
          }

          // 生成一个UI加载的UUID
          var uiLoadingUuid = this.addUILoadingUuid(name);

          // 判断是否已经存在节点并且是单例模式
          var node = this.getUIInScene(name);
          if (isValid(node, true) && this.getBaseView(node).isSingleton === true) {
            setTimeout(function () {
              if (!isValid(_this9)) return;
              // 移除触摸屏蔽
              _this9.removeTouchMask(maskUUID);
              // 验证本次加载是否有效
              if (_this9.removeUILoadingUuid(name, uiLoadingUuid) === false) return;
              // 验证节点是否有效
              if (isValid(node, true)) {
                callback(node);
              } else {
                _this9.createUI(name, silent, callback);
              }
            });
            return;
          }

          // 加载prefab
          var loadingUuid = silent ? '' : this.showLoading();
          this.load(name, function (asset) {
            if (!isValid(_this9)) return;
            // 移除触摸屏蔽
            _this9.removeTouchMask(maskUUID);

            // 验证本次加载是否有效
            if (_this9.removeUILoadingUuid(name, uiLoadingUuid) === false) {
              return _this9.hideLoading(loadingUuid);
            }

            // 是场景
            if (asset instanceof SceneAsset) {
              callback(_this9.parsingScene(asset, name), asset.scene);
              _this9.hideLoading(loadingUuid);
              return;
            }

            // 验证是否是单例(一个单例会有被同时load多次的情况，因为判断一个ui是否是单例，必须要至少实例化一个后才能获取)
            var node = _this9.getUIInScene(name);
            if (!isValid(node, true) || _this9.getBaseView(node).isSingleton === false) {
              callback(_this9.parsingPrefab(asset, name));
              _this9.hideLoading(loadingUuid);
            } else {
              callback(node);
              _this9.hideLoading(loadingUuid);
            }
          });
        }

        /**
         * 展示默认View
         */;
        _proto.showDefault = function showDefault(onShow) {
          if (this.defaultUI) {
            this.show({
              name: this.defaultUI,
              data: this.defaultData,
              onShow: onShow
            });
          } else {
            Core.inst.manager.ui.showToast('请先设置首界面\n在setting.ts中修改defaultUI', 100);
            onShow && onShow();
            this.warn('defaultUI不存在，请在setting.ts中修改');
          }
        }

        /**
         * 是否展示了(包括加载中和队列中)
         */;
        _proto.isShow = function isShow(name) {
          return !!this.getUIInShowing(name) || this.isInQueue(name) || this.isLoading(name);
        }

        /**
         * 是否在队列中
         */;
        _proto.isInQueue = function isInQueue(name) {
          return !!this.showQueue.find(function (v) {
            return v.name == name;
          });
        }

        /**
         * 是否在加载中
         */;
        _proto.isLoading = function isLoading(name) {
          return this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length > 0;
        }

        /**
         * 放入队列
         */;
        _proto.putInShowQueue = function putInShowQueue(data) {
          if (data.queue === 'join' || this.showQueue.length === 0) {
            this.showQueue.push(data);
          } else {
            this.showQueue.splice(1, 0, data);
          }
          if (this.showQueue.length === 1) {
            this.consumeShowQueue();
          }
        }

        /**
         * 消耗队列
         */;
        _proto.consumeShowQueue = function consumeShowQueue() {
          var _this10 = this;
          if (this.showQueue.length === 0) return;
          var data = this.showQueue[0];
          this.show({
            name: data.name,
            data: data.data,
            onShow: data.onShow,
            onHide: function onHide(result) {
              data.onHide && data.onHide(result);
              _this10.showQueue.shift();
              _this10.consumeShowQueue();
            },
            onError: data.onError ? function (error, code) {
              var ret = data.onError(error, code);
              _this10.showQueue.shift();
              _this10.consumeShowQueue();
              return ret;
            } : undefined,
            top: data.top,
            attr: data.attr,
            silent: data.silent
          });
        };
        _proto.showUI = function showUI(params) {
          var _this11 = this;
          var name = params.name,
            data = params.data,
            onShow = params.onShow,
            onHide = params.onHide,
            onError = params.onError,
            _params$top = params.top,
            top = _params$top === void 0 ? true : _params$top,
            _params$attr = params.attr,
            attr = _params$attr === void 0 ? null : _params$attr,
            _params$silent = params.silent,
            silent = _params$silent === void 0 ? false : _params$silent;
          this.createUI(name, silent, function (node, scene) {
            if (!node) {
              _this11.error('show', name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              // 「没有指定onError」或「onError返回true」会自动发起重试
              if (onError && onError(name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25", UIManager.ErrorCode.LoadError) !== true) {
                return;
              }
              _this11.scheduleOnce(function () {
                return _this11.showUI(params);
              }, 1);
              if (!silent) _this11.showLoading(1);
              return;
            }
            !scene && top && node.setSiblingIndex(-1);
            var com = _this11.getBaseView(node);
            _this11.uiShowingMap.set(com, name);
            com.constructor.prototype.show.call(com, data, attr,
            // onShow
            function (result) {
              _this11.uiShowingMap.set(com, name);
              onShow && onShow(result);
            },
            // onHide
            function (result) {
              _this11.uiShowingMap["delete"](com);
              onHide && onHide(result);
            },
            // beforeShow
            function (error) {
              if (error) {
                _this11.uiShowingMap["delete"](com);
                onError && onError(error, UIManager.ErrorCode.LogicError);
              } else if (BaseView.isPage(name)) {
                _this11.uiShowingMap.set(com, name);
                if (isValid(_this11.currPage, true) && _this11.currPage !== com && _this11.currPage.isShow) {
                  _this11.currPage.constructor.prototype.hide.call(_this11.currPage, {
                    name: name
                  });
                }
                _this11.currPage = com;
                if (scene) {
                  if (_this11.currScene !== name) {
                    _this11.currScene = name;
                    director.runSceneImmediate(scene, null, function () {
                      _this11.log("\u5207\u6362\u573A\u666F: " + name);
                    });
                  }
                } else if (_this11.currScene !== UIScene) {
                  _this11.currScene = UIScene;
                  var _scene = new Scene(UIScene);
                  _scene.autoReleaseAssets = true;
                  director.runSceneImmediate(_scene, null, function () {
                    _this11.log("\u5207\u6362\u573A\u666F: " + UIScene);
                  });
                }
              }
            });
          });
        }

        /**
         * 展示一个UI
         * - 此流程一定是异步的
         */;
        _proto.show = function show(params // @ts-ignore
        ) {
          var _this12 = this;
          var name = params.name,
            data = params.data,
            queue = params.queue,
            onError = params.onError,
            _params$silent2 = params.silent,
            silent = _params$silent2 === void 0 ? false : _params$silent2;

          // 加入队列中
          if (queue) {
            this.putInShowQueue(params);
            return;
          }
          this.log("show: " + name);

          // 判断ui是否有效
          var showLoadingUuid = silent ? '' : this.showLoading();
          Core.inst.lib.task.execute(function (retry) {
            _this12.checkUIValid(name, data, function (valid) {
              // 加载失败
              if (valid === -1) {
                _this12.error('show', name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
                // 「没有指定onError」或「onError返回true」会自动发起重试
                if (onError && onError(name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25", UIManager.ErrorCode.LoadError) !== true) {
                  return _this12.hideLoading(showLoadingUuid);
                }
                return retry(1);
              }

              // ui无效
              if (valid === 0) {
                _this12.warn('show', name + " \u65E0\u6548");
                _this12.uninstallUI(name);
                onError && onError(name + " \u65E0\u6548", UIManager.ErrorCode.InvalidError);
                _this12.hideLoading(showLoadingUuid);
                return;
              }
              _this12.showUI(params);
              _this12.hideLoading(showLoadingUuid);
            });
          });
        }

        /**
         * 展示一个UI
         * - 此流程一定是异步的
         */;
        _proto.showAsync = function showAsync(params // @ts-ignore
        ) {
          var _this13 = this;
          return new Promise(function (resolve) {
            _this13.show(_extends({}, params, {
              onHide: function onHide(result) {
                resolve(result);
              }
            }));
          });
        }

        /**
         * 关闭View
         * - 此流程一定是同步的
         */;
        _proto.hide = function hide(_ref2 // @ts-ignore
        ) {
          var name = _ref2.name,
            data = _ref2.data,
            onHide = _ref2.onHide;
          var nodes = this.getUIInShowing(name, true);
          this.log("hide: " + name);
          if (nodes.length === 0) {
            if (!this.uiLoadingMap.has(name) || this.uiLoadingMap.get(name).length === 0) {
              return this.warn('hide', name + " \u4E0D\u5B58\u5728");
            }
          }
          if (this.uiLoadingMap.has(name)) this.uiLoadingMap.get(name).length = 0;
          for (var index = nodes.length - 1; index >= 0; index--) {
            var node = nodes[index];
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
          }
        }

        /**
         * 从顶部关闭一个View(不会重复关闭节点)
         * - 此流程一定是同步的
         */;
        _proto.pop = function pop(_ref3 // @ts-ignore
        ) {
          var name = _ref3.name,
            data = _ref3.data,
            onHide = _ref3.onHide;
          var nodes = this.getUIInShowing(name, true);
          if (this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length) {
            this.uiLoadingMap.get(name).pop();
            this.log("pop: " + name);
            return;
          }
          if (nodes.length) {
            var node = nodes.pop();
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
            this.log("pop: " + name);
            return;
          }
          this.warn('pop', name + " \u4E0D\u5B58\u5728");
        }

        /**
         * 从底部关闭一个View(不会重复关闭节点)
         * - 此流程一定是同步的
         */;
        _proto.shift = function shift(_ref4 // @ts-ignore
        ) {
          var name = _ref4.name,
            data = _ref4.data,
            onHide = _ref4.onHide;
          var nodes = this.getUIInShowing(name, true);
          if (nodes.length) {
            var node = nodes[0];
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
            this.log("shift: " + name);
            return;
          }
          if (this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length) {
            this.uiLoadingMap.get(name).shift();
            this.log("shift: " + name);
            return;
          }
          this.warn('shift', name + " \u4E0D\u5B58\u5728");
        }

        /**
         * 关闭全部View
         * - 不关闭展示中的Page(加载中的会停止)
         * - 此流程一定是同步的
         */;
        _proto.hideAll = function hideAll(_temp) {
          var _this14 = this;
          var _ref5 = _temp === void 0 ? {} : _temp,
            data = _ref5.data,
            exclude = _ref5.exclude;
          this.log('hideAll');
          // 展示中的
          this.uiShowingMap.forEach(function (name, com) {
            if (BaseView.isPaper(name)) return;
            if (exclude && exclude.indexOf(name) !== -1) return;
            if (com === _this14.currPage) return;
            com.constructor.prototype.hide.call(com, data);
          });
          // 加载中的
          this.uiLoadingMap.forEach(function (value, name) {
            if (BaseView.isPaper(name)) return;
            if (exclude && exclude.indexOf(name) !== -1) return;
            value.length = 0;
          });
        };
        _proto.showLoading = function showLoading(timeout) {
          var _this15 = this;
          if (timeout === void 0) {
            timeout = 0;
          }
          this.loading.active = true;
          this.loading.getComponentInChildren(UIMgrLoading).init();
          var uuid = this.createUUID();
          this.showLoadingMap.set(uuid, true);
          if (timeout > 0) this.scheduleOnce(function () {
            _this15.hideLoading(uuid);
          }, timeout);
          return uuid;
        };
        _proto.hideLoading = function hideLoading(uuid) {
          if (!uuid) return;
          this.showLoadingMap["delete"](uuid);
          if (this.showLoadingMap.size === 0) {
            this.loading.getComponentInChildren(UIMgrLoading).clear();
            this.loading.active = false;
          }
        }

        /**
         * 添加触摸屏蔽
         */;
        _proto.addTouchMask = function addTouchMask(timeout) {
          var _this16 = this;
          if (timeout === void 0) {
            timeout = 0;
          }
          this.addTouchMaskListener();
          var uuid = this.createUUID();
          this.touchMaskMap.set(uuid, true);
          if (timeout > 0) this.scheduleOnce(function () {
            _this16.removeTouchMask(uuid);
          }, timeout);
          return uuid;
        }

        /**
         * 移除触摸屏蔽
         * @param uuid addTouchMask的返回值
         */;
        _proto.removeTouchMask = function removeTouchMask(uuid) {
          if (!uuid) return;
          this.touchMaskMap["delete"](uuid);
          this.removeTouchMaskListener();
        }

        /**
         * 显示Toast
         * @param message 文本
         * @param timeout 持续时间(秒)，默认2秒
         */;
        _proto.showToast = function showToast(message, timeout) {
          if (!this.toast) {
            return this.error('showToast', '请确认首场景中「Root2D/Manager/UIManager」的「Toast Pre」属性存在');
          }
          this.toast.getComponent(UIMgrToast).add({
            message: message,
            timeout: timeout
          });
        }

        /**
         * 清理Toast
         */;
        _proto.clearToast = function clearToast() {
          if (!this.toast) return;
          this.toast.getComponent(UIMgrToast).clear();
        }

        /**
         * 设置触摸是否启用
         * @param enabled 是否启用
         */;
        _proto.setTouchEnabled = function setTouchEnabled(enabled) {
          if (enabled) {
            this.touchEnabled = true;
            this.removeTouchMaskListener();
          } else {
            this.addTouchMaskListener();
            this.touchEnabled = false;
          }
          this.warn('setTouchEnabled', this.touchEnabled);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.onUserInterface = function onUserInterface() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          Node.prototype.on.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.onceUserInterface = function onceUserInterface() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          Node.prototype.once.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.offUserInterface = function offUserInterface() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          Node.prototype.off.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.targetOffUserInterface = function targetOffUserInterface() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          Node.prototype.targetOff.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         * @deprecated 
         */;
        _proto.onUIRoot2D = function onUIRoot2D() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          Node.prototype.on.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         * @deprecated 
         */;
        _proto.onceUIRoot2D = function onceUIRoot2D() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          Node.prototype.once.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         * @deprecated 
         */;
        _proto.offUIRoot2D = function offUIRoot2D() {
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }
          Node.prototype.off.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         * @deprecated 
         */;
        _proto.targetOffUIRoot2D = function targetOffUIRoot2D() {
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }
          Node.prototype.targetOff.apply(this.UserInterface, args);
        }

        /**
         * 立即给2DUI的子节点排序
         */;
        _proto.sortUserInterface = function sortUserInterface(name) {
          var _this$UserInterface;
          (_this$UserInterface = this.UserInterface) == null || (_this$UserInterface = _this$UserInterface.getChildByName(name)) == null || (_this$UserInterface = _this$UserInterface.getComponent(UIMgrZOrder)) == null || _this$UserInterface.updateZOrder();
        };
        _createClass(UIManager, [{
          key: "camera",
          get: /**相机 */
          function get() {
            return this.Root2D.getComponent(Canvas).cameraComponent;
          }

          /**画布*/
        }, {
          key: "canvas",
          get: function get() {
            return this.Root2D.getComponent(Canvas);
          }
        }]);
        return UIManager;
      }(BaseManager), _class3.setting = {}, _class3.ErrorCode = ErrorCode, _class3.ViewName = ViewName, _class3.MiniViewName = MiniViewName, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shadePre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toastPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrLoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Graphics, UITransform, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "4a8e5aXrnhKSo0IF6zGgjon", "UIMgrLoading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrLoading = exports('default', (_dec = ccclass('UIMgrLoading'), _dec2 = requireComponent(Graphics), _dec3 = requireComponent(UITransform), _dec4 = property({
        tooltip: '等待几秒后开始动画'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrLoading, _Component);
        function UIMgrLoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "delay", _descriptor, _assertThisInitialized(_this));
          _this.progress = 0;
          _this.ringScale = 1;
          _this.reverse = false;
          _this.angleSpeed = 120;
          _this.ringSpeed = 0.02;
          _this.inited = false;
          _this.drawing = false;
          _this.timedown = 0;
          return _this;
        }
        var _proto = UIMgrLoading.prototype;
        _proto.init = function init() {
          if (this.inited) return;
          this.inited = true;
          this.progress = 0;
          this.ringScale = 1;
          this.node.angle = 0;
          this.reverse = false;
          this.drawing = false;
          this.timedown = this.delay;
          this.getComponent(Graphics).clear();
        };
        _proto.clear = function clear() {
          this.inited = false;
          this.drawing = false;
        }

        /**
         * 需要重写
         */;
        _proto.onDraw = function onDraw() {
          var uiTransform = this.node.getComponent(UITransform);
          var graphics = this.getComponent(Graphics);
          var centerX = uiTransform.width * (0.5 - uiTransform.anchorX);
          var centerY = uiTransform.height * (0.5 - uiTransform.anchorY);
          var r = Math.min(uiTransform.width / 2, uiTransform.height / 2);
          var allPI = Math.PI;
          var offst = 0;
          graphics.clear();
          if (this.reverse) {
            var start = 0.5 * Math.PI + offst;
            var end = 0.5 * Math.PI + this.progress * 2 * allPI + offst;
            graphics.arc(centerX, centerY, r, start, end, true);
          } else {
            var _start = 0.5 * Math.PI - offst;
            var _end = 0.5 * Math.PI - this.progress * 2 * allPI - offst;
            graphics.arc(centerX, centerY, r, _start, _end, false);
          }
          graphics.stroke();
        };
        _proto.update = function update(dt) {
          if (!this.inited) return;

          // 倒计时
          if (!this.drawing) {
            if (this.timedown > 0) {
              this.timedown -= dt;
            }
            if (this.timedown <= 0) {
              this.drawing = true;
            } else {
              return;
            }
          }

          // 旋转
          this.node.angle -= this.angleSpeed * dt;
          if (this.node.angle >= 360 || this.node.angle <= -360) {
            this.node.angle = this.node.angle % 360;
          }

          // 进度
          if (this.ringScale > 0) {
            this.progress = Math.min(1, this.progress + this.ringSpeed * this.ringScale);
            if (this.progress == 1) {
              this.ringScale = -1;
              this.reverse = !this.reverse;
            }
          } else {
            this.progress = Math.max(0, this.progress + this.ringSpeed * this.ringScale);
            if (this.progress == 0) {
              this.ringScale = 1;
              this.reverse = !this.reverse;
            }
          }
          this.onDraw();
        };
        return UIMgrLoading;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrShade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, UIOpacity, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "d02952bsB1JPJ4xXteObDOr", "UIMgrShade", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrShade = exports('default', (_dec = ccclass('UIMgrShade'), _dec2 = requireComponent(UIOpacity), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrShade, _Component);
        function UIMgrShade() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_delay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_begin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_end", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor4, _assertThisInitialized(_this));
          _this.inited = false;
          _this.drawing = false;
          _this.timedown = 0;
          return _this;
        }
        var _proto = UIMgrShade.prototype;
        _proto.init = function init(delay, begin, end, speed) {
          this.delay = delay;
          this.begin = begin;
          this.end = end;
          this.speed = speed;
          if (this.inited) return;
          this.inited = true;
          this.drawing = false;
          this.timedown = this.delay;
          this.node.getComponent(UIOpacity).opacity = 0;
        };
        _proto.clear = function clear() {
          this.inited = false;
          this.drawing = false;
        };
        _proto.update = function update(dt) {
          if (!this.inited) return;
          if (!this.drawing) {
            if (this.timedown > 0) {
              this.timedown -= dt;
            }
            if (this.timedown <= 0) {
              this.node.getComponent(UIOpacity).opacity = this.begin;
              this.drawing = true;
            } else {
              return;
            }
          }
          var uiOpacity = this.node.getComponent(UIOpacity);
          if (this.speed > 0) {
            uiOpacity.opacity += this.speed * dt;
            if (uiOpacity.opacity > this.end) {
              uiOpacity.opacity = this.end;
            }
          } else if (this.speed < 0) {
            uiOpacity.opacity += this.speed * dt;
            if (uiOpacity.opacity < this.end) {
              uiOpacity.opacity = this.end;
            }
          }
          if (uiOpacity.opacity == this.end) {
            this.clear();
          }
        };
        _createClass(UIMgrShade, [{
          key: "delay",
          get: function get() {
            return this._delay;
          },
          set: function set(v) {
            this._delay = Math.max(v, 0);
          }
        }, {
          key: "begin",
          get: function get() {
            return this._begin;
          },
          set: function set(v) {
            if (v >= 0 && v <= 255) this._begin = v;
          }
        }, {
          key: "end",
          get: function get() {
            return this._end;
          },
          set: function set(v) {
            if (v >= 0 && v <= 255) this._end = v;
          }
        }, {
          key: "speed",
          get: function get() {
            if (this.begin == this.end) {
              return 0;
            } else if (this.begin > this.end) {
              return this._speed > 0 ? -this._speed : this._speed;
            } else {
              return this._speed >= 0 ? this._speed : -this._speed;
            }
          },
          set: function set(v) {
            this._speed = v;
          }
        }]);
        return UIMgrShade;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "delay", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "delay"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_begin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "begin", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "begin"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_end", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "end", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "end"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrToast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIMgrToastCell.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, UITransform, Prefab, NodePool, instantiate, UIOpacity, tween, Tween, view, Component, UIMgrToastCell;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Prefab = module.Prefab;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      view = module.view;
      Component = module.Component;
    }, function (module) {
      UIMgrToastCell = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cde15KM9mxA9L3SJ78TjOHf", "UIMgrToast", undefined);
      var property = _decorator.property,
        ccclass = _decorator.ccclass,
        requireComponent = _decorator.requireComponent;
      var UIMgrToast = exports('default', (_dec = ccclass('UIMgrToast'), _dec2 = requireComponent(UITransform), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrToast, _Component);
        function UIMgrToast() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cell", _descriptor, _assertThisInitialized(_this));
          /**每条信息显示几秒 */
          _this.lifeTime = 2;
          /**消失时花费几秒渐隐 */
          _this.outTime = 0.2;
          /**挤压基础速度 */
          _this.squeezeSpeed = 200;
          /**节点缓存池子 */
          _this.pool = new NodePool();
          return _this;
        }
        var _proto = UIMgrToast.prototype;
        _proto.add = function add(data) {
          var _this2 = this;
          var cell = this.pool.get() || instantiate(this.cell);
          cell.setPosition(0, 0, 0);
          cell.parent = this.node;
          cell.active = true;
          cell.getComponent(UIMgrToastCell).init(data.message);
          cell.getComponent(UIOpacity).opacity = 255;
          tween(cell.getComponent(UIOpacity)).delay(data.timeout || this.lifeTime).to(this.outTime, {
            opacity: 0
          }).call(function () {
            _this2.pool.put(cell);
          }).start();
        };
        _proto.clear = function clear() {
          var children = this.node.children;
          for (var index = children.length - 1; index >= 0; index--) {
            Tween.stopAllByTarget(children[index].getComponent(UIOpacity));
            children[index].destroy();
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.clear();
          this.pool.clear();
        };
        _proto.update = function update(dt) {
          var children = this.node.children;
          for (var index = children.length - 1, recovery = false; index >= 0; index--) {
            var zero = index === children.length - 1;
            var curr = children[index];

            // 直接触发回收逻辑
            if (recovery) {
              Tween.stopAllByTarget(curr.getComponent(UIOpacity));
              this.pool.put(curr);
              continue;
            }
            if (zero) {
              var currUT = curr.getComponent(UITransform);
              var lastMaxY = 0 - currUT.height / 2;
              var currMinY = curr.position.y + lastMaxY;
              if (currMinY > lastMaxY) {
                // 存在空隙
                var addLen = Math.max(-this.squeezeSpeed * dt * (children.length - index), lastMaxY - currMinY);
                curr.setPosition(curr.position.add3f(0, addLen, 0));
              }
            } else {
              var last = children[index + 1];
              var _currUT = curr.getComponent(UITransform);
              var lastUT = last.getComponent(UITransform);
              var _currMinY = curr.position.y - _currUT.height / 2 - 6; //6像素的间隔
              var _lastMaxY = last.position.y + lastUT.height / 2;
              if (_currMinY < _lastMaxY) {
                // 存在重叠
                var _addLen = Math.min(this.squeezeSpeed * dt * (children.length - index - 1), _lastMaxY - _currMinY);
                curr.setPosition(curr.position.add3f(0, _addLen, 0));
                var winSize = view.getVisibleSize();
                if (_currMinY > winSize.height / 2) {
                  // 触发回收逻辑
                  recovery = true;
                  Tween.stopAllByTarget(curr.getComponent(UIOpacity));
                  this.pool.put(curr);
                }
              } else if (_currMinY > _lastMaxY) {
                // 存在空隙
                var _addLen2 = Math.max(-this.squeezeSpeed * dt * (children.length - index), _lastMaxY - _currMinY);
                curr.setPosition(curr.position.add3f(0, _addLen2, 0));
              }
            }
          }
        };
        _createClass(UIMgrToast, [{
          key: "size",
          get: function get() {
            return this.node.children.length;
          }
        }]);
        return UIMgrToast;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cell", [_dec3], {
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

System.register("chunks:///_virtual/UIMgrToastCell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, UITransform, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6cc63HWsI5O44ve4wfEKIc0", "UIMgrToastCell", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrToastCell = exports('default', (_dec = ccclass('UIMgrToastCell'), _dec2 = requireComponent(UIOpacity), _dec3 = requireComponent(UITransform), _dec4 = property(Label), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrToastCell, _Component);
        function UIMgrToastCell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIMgrToastCell.prototype;
        _proto.init = function init(title) {
          if (title.split('\n').find(function (v) {
            return v.length > 30;
          })) {
            this.title.overflow = Label.Overflow.RESIZE_HEIGHT;
            this.title.getComponent(UITransform).width = 600;
          } else {
            this.title.overflow = Label.Overflow.NONE;
          }
          this.title.string = title;
          this.title.updateRenderData(true);
        };
        _proto.unuse = function unuse() {
          this.title.string = '';
        };
        return UIMgrToastCell;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrZOrder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, director, Director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Director = module.Director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ad5cbUQY55AwqzdOZrQBim5", "UIMgrZOrder", undefined);
      var ccclass = _decorator.ccclass;
      var UIMgrZOrder = exports('default', (_dec = ccclass('UIMgrZOrder'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrZOrder, _Component);
        function UIMgrZOrder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.zOrder = false;
          _this.tempArr = [];
          return _this;
        }
        var _proto = UIMgrZOrder.prototype;
        _proto.onLoad = function onLoad() {
          this.checkUpdateZOrder();
          this.node.on(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.node.on(Node.EventType.CHILD_REMOVED, this.onChildRemoveed, this);
          if (Node.EventType.CHILDREN_ORDER_CHANGED) {
            this.node.on(Node.EventType.CHILDREN_ORDER_CHANGED, this.checkUpdateZOrder, this);
          } else {
            this.node.on(Node.EventType.SIBLING_ORDER_CHANGED, this.checkUpdateZOrder, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          director.off(Director.EVENT_AFTER_UPDATE, this.updateZOrder, this);
          this.node.off(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.node.off(Node.EventType.CHILD_REMOVED, this.onChildRemoveed, this);
          if (Node.EventType.CHILDREN_ORDER_CHANGED) {
            this.node.off(Node.EventType.CHILDREN_ORDER_CHANGED, this.checkUpdateZOrder, this);
          } else {
            this.node.off(Node.EventType.SIBLING_ORDER_CHANGED, this.checkUpdateZOrder, this);
          }
        };
        _proto.onChildAdded = function onChildAdded(child) {
          this.checkUpdateZOrder();
          child.on(Node.EventType.TRANSFORM_CHANGED, this.checkUpdateZOrder, this);
        };
        _proto.onChildRemoveed = function onChildRemoveed(child) {
          child.off(Node.EventType.TRANSFORM_CHANGED, this.checkUpdateZOrder, this);
        };
        _proto.checkUpdateZOrder = function checkUpdateZOrder() {
          if (this.zOrder) return;
          this.zOrder = true;
          director.once(Director.EVENT_AFTER_UPDATE, this.updateZOrder, this);
        }

        /**
         * 更新节点树排序
         */;
        _proto.updateZOrder = function updateZOrder() {
          if (!this.zOrder) return;
          Array.prototype.push.apply(this.tempArr, this.node.children);
          this.tempArr.sort(function (a, b) {
            return a.position.z - b.position.z || a.getSiblingIndex() - b.getSiblingIndex();
          }).forEach(function (child, index) {
            child.setSiblingIndex(index);
          });

          // 一定要放到最后再设置false，
          // 避免更新过程中设置siblingIndex，
          // 导致无限重复调用
          this.zOrder = false;
          this.tempArr.length = 0;
        };
        return UIMgrZOrder;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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