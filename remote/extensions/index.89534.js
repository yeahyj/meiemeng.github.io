System.register("chunks:///_virtual/Agent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Maths.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, Vec3, Vector2, RVOMath, Line;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      Vector2 = module.Vector2;
      RVOMath = module.RVOMath;
      Line = module.Line;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27880uNZi9CTLwDzDTO1CDR", "Agent", undefined);
      var ObserverObj = exports('ObserverObj', /*#__PURE__*/_createClass(function ObserverObj(val) {
        _classCallCheck(this, ObserverObj);
        _defineProperty(this, "value", void 0);
        if (val) this.value = val;
      }));
      var KeyValuePair = exports('KeyValuePair', /*#__PURE__*/_createClass(function KeyValuePair(key, value) {
        _classCallCheck(this, KeyValuePair);
        _defineProperty(this, "Key", void 0);
        _defineProperty(this, "Value", void 0);
        this.Key = key;
        this.Value = value;
      }));
      var RVOConfig = exports('RVOConfig', /*#__PURE__*/_createClass(function RVOConfig() {
        _classCallCheck(this, RVOConfig);
      }));
      /**代理对象总数 */
      _defineProperty(RVOConfig, "agentCount", 10);
      /**代理对象之间的距离 */
      _defineProperty(RVOConfig, "neighborDist", 0.75);
      //25;
      /**代理对象的半径 */
      _defineProperty(RVOConfig, "radius", 0.5);
      //10;
      /**代理对象的最大移动速度 */
      _defineProperty(RVOConfig, "maxSpeed", 1);
      /**代理对象的初始速度 */
      _defineProperty(RVOConfig, "velocity", new Vec3());
      /**最大邻居数 */
      _defineProperty(RVOConfig, "maxNeighbors", 10);
      /**安全单位时间，值越大，就会越早做出避让行为 */
      _defineProperty(RVOConfig, "timeHorizon", 5);
      //25;
      /**与timeHorizon类似，只针对障碍物 */
      _defineProperty(RVOConfig, "timeHorizonObst", 0);
      /**步骤帧 */
      _defineProperty(RVOConfig, "timeStep", 0.05);
      var Agent = exports('Agent', /*#__PURE__*/function () {
        function Agent() {
          _classCallCheck(this, Agent);
        }
        _createClass(Agent, [{
          key: "check",
          value: function check(a, b) {
            var invTimeHorizon = 1.0 / RVOConfig.timeHorizon;
            var relativePosition = Vector2.subtract(b.getCenter(), a.getCenter());
            var relativeVelocity = Vector2.subtract(a.newVelocity, b.newVelocity);
            var combinedRadius = a.neighborDist + b.neighborDist;
            var combinedRadiusSq = RVOMath.sqr(combinedRadius);
            var distSq = RVOMath.absSq(relativePosition);
            var u = new Vector2();
            var direction = new Vector2();
            if (distSq > combinedRadiusSq) {
              var w = Vector2.subtract(relativeVelocity, Vector2.multiply2(invTimeHorizon, relativePosition));
              var wLengthSq = RVOMath.absSq(w);
              var dotProduct1 = Vector2.multiply(w, relativePosition);
              if (dotProduct1 < 0 && RVOMath.sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
                var wLength = RVOMath.sqrt(wLengthSq);
                var unitW = Vector2.division(w, wLength);
                direction = new Vector2(unitW.y, -unitW.x);
                u = Vector2.multiply2(combinedRadius * invTimeHorizon - wLength, unitW);
              } else {
                var leg = RVOMath.sqrt(distSq - combinedRadiusSq);
                if (RVOMath.det(relativePosition, w) > 0) {
                  direction = Vector2.division(new Vector2(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg), distSq);
                } else {
                  direction = Vector2.division(new Vector2(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg), -distSq);
                }
                var dotProduct2 = Vector2.multiply(relativeVelocity, direction);
                u = Vector2.subtract(Vector2.multiply2(dotProduct2, direction), relativeVelocity);
              }
            } else {
              var invTimeStep = 1.0 / RVOConfig.timeStep;
              var _w = Vector2.subtract(relativeVelocity, Vector2.multiply2(invTimeStep, relativePosition));
              var _wLength = RVOMath.abs(_w);
              var _unitW = Vector2.division(_w, _wLength);
              direction = new Vector2(_unitW.y, -_unitW.x);
              u = Vector2.multiply2(combinedRadius * invTimeStep - _wLength, _unitW);
            }
            var lineA = new Line();
            var weight = a.weight / (a.weight + b.weight); //0.5
            lineA.direction = new Vector2(direction.x, direction.y);
            lineA.point = Vector2.addition(a.newVelocity, Vector2.multiply2(weight, u));
            a.orcaLines.push(lineA);
          }
        }, {
          key: "process",
          value: function process(bodys) {
            for (var i = 0, j = bodys.length; i < j; i++) {
              var body = bodys[i];
              if (body.isAgent && body.orcaLines.length > 0) {
                if (!body.isRemove && body.object) {
                  var numObstLines = 0; //默认0wh
                  var tempVelocity_ = new ObserverObj(new Vector2(body.newVelocity.x, body.newVelocity.y));
                  var lineFail = this.linearProgram2(body.orcaLines, body.maxVelocity, body.prefVelocity, false, tempVelocity_);
                  if (lineFail < body.orcaLines.length) {
                    this.linearProgram3(body.orcaLines, body.weight, numObstLines, lineFail, body.maxVelocity, tempVelocity_);
                  }
                  if (body.object) {
                    //更新物体速度
                    var value = tempVelocity_.value;
                    var v = body.object.velocity;
                    v.x = value.x;
                    v.y = value.y;
                    v.z = 0;
                  }
                }
                body.orcaLines.length = 0;
              }
            }
          }
        }, {
          key: "linearProgram1",
          value: function linearProgram1(lines, lineNo, radius, optVelocity, directionOpt, result) {
            var dotProduct = Vector2.multiply(lines[lineNo].point, lines[lineNo].direction);
            var discriminant = RVOMath.sqr(dotProduct) + RVOMath.sqr(radius) - RVOMath.absSq(lines[lineNo].point);
            if (discriminant < 0) {
              return false;
            }
            var sqrtDiscriminant = RVOMath.sqrt(discriminant);
            var tLeft = -dotProduct - sqrtDiscriminant;
            var tRight = -dotProduct + sqrtDiscriminant;
            for (var i = 0; i < lineNo; ++i) {
              var denominator = RVOMath.det(lines[lineNo].direction, lines[i].direction);
              var numerator = RVOMath.det(lines[i].direction, Vector2.subtract(lines[lineNo].point, lines[i].point));
              if (RVOMath.fabs(denominator) <= RVOMath.RVO_EPSILON) {
                if (numerator < 0) {
                  return false;
                }
                continue;
              }
              var t = numerator / denominator;
              if (denominator > 0) {
                tRight = Math.min(tRight, t);
              } else {
                tLeft = Math.max(tLeft, t);
              }
              if (tLeft > tRight) {
                return false;
              }
            }
            if (directionOpt) {
              if (Vector2.multiply(optVelocity, lines[lineNo].direction) > 0) {
                result.value = Vector2.addition(lines[lineNo].point, Vector2.multiply2(tRight, lines[lineNo].direction));
              } else {
                result.value = Vector2.addition(lines[lineNo].point, Vector2.multiply2(tLeft, lines[lineNo].direction));
              }
            } else {
              var _t = Vector2.multiply(lines[lineNo].direction, Vector2.subtract(optVelocity, lines[lineNo].point));
              if (_t < tLeft) {
                result.value = Vector2.addition(lines[lineNo].point, Vector2.multiply2(tLeft, lines[lineNo].direction));
              } else if (_t > tRight) {
                result.value = Vector2.addition(lines[lineNo].point, Vector2.multiply2(tRight, lines[lineNo].direction));
              } else {
                result.value = Vector2.addition(lines[lineNo].point, Vector2.multiply2(_t, lines[lineNo].direction));
              }
            }
            return true;
          }
        }, {
          key: "linearProgram2",
          value: function linearProgram2(lines, radius, optVelocity, directionOpt, result) {
            if (directionOpt) {
              result.value = Vector2.multiply2(radius, optVelocity);
            } else if (RVOMath.absSq(optVelocity) > RVOMath.sqr(radius)) {
              result.value = Vector2.multiply2(radius, RVOMath.normalize(optVelocity));
            } else {
              result.value = optVelocity;
            }
            for (var i = 0; i < lines.length; ++i) {
              if (RVOMath.det(lines[i].direction, Vector2.subtract(lines[i].point, result.value)) > 0) {
                var tempResult = new Vector2(result.value.x, result.value.y);
                if (!this.linearProgram1(lines, i, radius, optVelocity, directionOpt, result)) {
                  result.value = tempResult;
                  return i;
                }
              }
            }
            return lines.length;
          }
        }, {
          key: "linearProgram3",
          value: function linearProgram3(lines, agentWeight, numObstLines, beginLine, radius, result) {
            var distance = 0;
            for (var i = beginLine; i < lines.length; ++i) {
              if (RVOMath.det(lines[i].direction, Vector2.subtract(lines[i].point, result.value)) > distance) {
                var projLines = [];
                for (var ii = 0; ii < numObstLines; ++ii) {
                  projLines[projLines.length] = lines[ii];
                }
                for (var j = numObstLines; j < i; ++j) {
                  var line = new Line();
                  var determinant = RVOMath.det(lines[i].direction, lines[j].direction);
                  if (RVOMath.fabs(determinant) <= RVOMath.RVO_EPSILON) {
                    if (Vector2.multiply(lines[i].direction, lines[j].direction) > 0.0) {
                      continue;
                    } else {
                      line.point = Vector2.multiply2(agentWeight /*0.5 =*/, Vector2.addition(lines[i].point, lines[j].point));
                    }
                  } else {
                    line.point = Vector2.addition(lines[i].point, Vector2.multiply2(RVOMath.det(lines[j].direction, Vector2.subtract(lines[i].point, lines[j].point)) / determinant, lines[i].direction));
                  }

                  // line.direction = RVOMath.normalize(Vector2.subtract(lines[j].direction, lines[i].direction));
                  // projLines[projLines.length] = line;

                  var d = Vector2.subtract(lines[j].direction, lines[i].direction);
                  if (RVOMath.absSq(d) > 0) {
                    line.direction = RVOMath.normalize(d);
                    projLines[projLines.length] = line;
                  }
                }
                var tempResult = new Vector2(result.value.x, result.value.y);
                if (this.linearProgram2(projLines, radius, new Vector2(-lines[i].direction.y, lines[i].direction.x), true, result) < projLines.length) {
                  result.value = tempResult;
                }
                distance = RVOMath.det(lines[i].direction, Vector2.subtract(lines[i].point, result.value));
              }
            }
          }
        }], [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new Agent();
            }
            return this._inst;
          }
        }]);
        return Agent;
      }());
      _defineProperty(Agent, "_inst", null);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AILib.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, Vec3, Quat, Vec2;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      exports({
        sphereAABBDistance: sphereAABBDistance,
        sphereOBBDistance: sphereOBBDistance
      });
      cclegacy._RF.push({}, "e200arLWgRK2aEVd3mb65un", "AILib", undefined);
      var localP = {
        x: 0,
        y: 0,
        z: 0
      };
      var maxDist = {
        x: 0,
        y: 0,
        z: 0
      };
      var localCenter = {
        x: 0,
        y: 0,
        z: 0
      };
      var obbToLocal = {
        x: 0,
        y: 0,
        z: 0,
        w: 1.0
      };

      // 计算球体到 AABB 的 SDF 距离
      function sphereAABBDistance(center, radius, size) {
        // 计算离包围盒最近的点
        maxDist.x = Math.max(-size.x, Math.min(center.x, size.x));
        maxDist.y = Math.max(-size.y, Math.min(center.y, size.y));
        maxDist.z = Math.max(-size.z, Math.min(center.z, size.z));
        Vec3.subtract(maxDist, maxDist, center);
        var distSqr = Vec3.dot(maxDist, maxDist);
        return distSqr <= radius * radius;
      }

      // 计算球体到 OBB 的 SDF 距离
      function sphereOBBDistance(sphereCenter,
      // 球体中心点坐标
      radius,
      // 球体半径
      obbCenter,
      // OBB 中心点坐标
      obbQuaternion,
      // OBB 旋转四元数
      obbHalfExtents // OBB 半扩展尺寸
      ) {
        Vec3.subtract(localCenter, sphereCenter, obbCenter);
        Quat.conjugate(obbToLocal, obbQuaternion);
        Vec3.transformQuat(localP, localCenter, obbToLocal);
        return sphereAABBDistance(localP, radius, obbHalfExtents);
      }
      var obbIntersect = exports('obbIntersect', function obbIntersect(centerA, halfA, rotA, centerB, halfB, rotB) {
        var ae0 = halfA.x,
          ae1 = halfA.y,
          ae2 = halfA.z,
          au00 = rotA.m00,
          au01 = rotA.m01,
          au02 = rotA.m02,
          au10 = rotA.m03,
          au11 = rotA.m04,
          au12 = rotA.m05,
          au20 = rotA.m06,
          au21 = rotA.m07,
          au22 = rotA.m08;
        var be0 = halfB.x,
          be1 = halfB.y,
          be2 = halfB.z,
          bu00 = rotB.m00,
          bu01 = rotB.m01,
          bu02 = rotB.m02,
          bu10 = rotB.m03,
          bu11 = rotB.m04,
          bu12 = rotB.m05,
          bu20 = rotB.m06,
          bu21 = rotB.m07,
          bu22 = rotB.m08;
        var R00 = au00 * bu00 + au01 * bu01 + au02 * bu02;
        var R01 = au00 * bu10 + au01 * bu11 + au02 * bu12;
        var R02 = au00 * bu20 + au01 * bu21 + au02 * bu22;
        var R10 = au10 * bu00 + au11 * bu01 + au12 * bu02;
        var R11 = au10 * bu10 + au11 * bu11 + au12 * bu12;
        var R12 = au10 * bu20 + au11 * bu21 + au12 * bu22;
        var R20 = au20 * bu00 + au21 * bu01 + au22 * bu02;
        var R21 = au20 * bu10 + au21 * bu11 + au22 * bu12;
        var R22 = au20 * bu20 + au21 * bu21 + au22 * bu22;
        var v0 = centerB.x - centerA.x,
          v1 = centerB.y - centerA.y,
          v2 = centerB.z - centerA.z;
        var t0 = v0 * au00 + v1 * au01 + v2 * au02;
        var t1 = v0 * au10 + v1 * au11 + v2 * au12;
        var t2 = v0 * au20 + v1 * au21 + v2 * au22;
        var ra, rb, abs;
        var epsilon = Number.EPSILON;
        var A00 = (R00 >= 0 ? R00 : -R00) + epsilon,
          A01 = (R01 >= 0 ? R01 : -R01) + epsilon,
          A02 = (R02 >= 0 ? R02 : -R02) + epsilon;
        var A10 = (R10 >= 0 ? R10 : -R10) + epsilon,
          A11 = (R11 >= 0 ? R11 : -R11) + epsilon,
          A12 = (R12 >= 0 ? R12 : -R12) + epsilon;
        var A20 = (R20 >= 0 ? R20 : -R20) + epsilon,
          A21 = (R21 >= 0 ? R21 : -R21) + epsilon,
          A22 = (R22 >= 0 ? R22 : -R22) + epsilon;
        ra = ae0;
        rb = be0 * A00 + be1 * A01 + be2 * A02;
        if ((t0 >= 0 ? t0 : -t0) > ra + rb) return false;
        ra = ae1;
        rb = be0 * A10 + be1 * A11 + be2 * A12;
        if ((t1 >= 0 ? t1 : -t1) > ra + rb) return false;
        ra = ae2;
        rb = be0 * A20 + be1 * A21 + be2 * A22;
        if ((t2 >= 0 ? t2 : -t2) > ra + rb) return false;
        rb = be0;
        ra = ae0 * A00 + ae1 * A10 + ae2 * A20;
        abs = t0 * R00 + t1 * R10 + t2 * R20;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        rb = be1;
        ra = ae0 * A01 + ae1 * A11 + ae2 * A21;
        abs = t0 * R01 + t1 * R11 + t2 * R21;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        rb = be2;
        ra = ae0 * A02 + ae1 * A12 + ae2 * A22;
        abs = t0 * R02 + t1 * R12 + t2 * R22;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A0 x B0
        ra = ae1 * A20 + ae2 * A10;
        rb = be1 * A02 + be2 * A01;
        abs = t2 * R10 - t1 * R20;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A0 x B1
        ra = ae1 * A21 + ae2 * A11;
        rb = be0 * A02 + be2 * A00;
        abs = t2 * R11 - t1 * R21;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A0 x B2
        ra = ae1 * A22 + ae2 * A12;
        rb = be0 * A01 + be1 * A00;
        abs = t2 * R12 - t1 * R22;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A1 x B0
        ra = ae0 * A20 + ae2 * A00;
        rb = be1 * A12 + be2 * A11;
        abs = t0 * R20 - t2 * R00;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A1 x B1
        ra = ae0 * A21 + ae2 * A01;
        rb = be0 * A12 + be2 * A10;
        abs = t0 * R21 - t2 * R01;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A1 x B2
        ra = ae0 * A22 + ae2 * A02;
        rb = be0 * A11 + be1 * A10;
        abs = t0 * R22 - t2 * R02;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A2 x B0

        ra = ae0 * A10 + ae1 * A00;
        rb = be1 * A22 + be2 * A21;
        abs = t1 * R00 - t0 * R10;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A2 x B1
        ra = ae0 * A11 + ae1 * A01;
        rb = be0 * A22 + be2 * A20;
        abs = t1 * R01 - t0 * R11;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;

        // test axis L = A2 x B2
        ra = ae0 * A12 + ae1 * A02;
        rb = be0 * A21 + be1 * A20;
        abs = t1 * R02 - t0 * R12;
        if ((abs >= 0 ? abs : -abs) > ra + rb) return false;
        return true;
      });

      /**
       * @en Test line and line
       * @zh 测试线段与线段是否相交
       */
      function lineLine(a1, a2, b1, b2) {
        // jshint camelcase:false

        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
          var ua = ua_t / u_b;
          var ub = ub_t / u_b;
          if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
            return true;
          }
        }
        return false;
      }
      var tempR1 = new Vec2();
      var tempR2 = new Vec2();
      var tempR3 = new Vec2();
      var tempR4 = new Vec2();

      /**
       * @en Test line and rect
       * @zh 测试线段与矩形是否相交
       */
      function lineRect(a1, a2, b) {
        var r0 = tempR1.set(b.x, b.y);
        var r1 = tempR2.set(b.x, b.yMax);
        var r2 = tempR3.set(b.xMax, b.yMax);
        var r3 = tempR4.set(b.xMax, b.y);
        if (lineLine(a1, a2, r0, r1)) return true;
        if (lineLine(a1, a2, r1, r2)) return true;
        if (lineLine(a1, a2, r2, r3)) return true;
        if (lineLine(a1, a2, r3, r0)) return true;
        return false;
      }

      /**
       * @en Test line and polygon
       * @zh 测试线段与多边形是否相交
       */
      function linePolygon(a1, a2, b) {
        var length = b.length;
        for (var i = 0; i < length; ++i) {
          var b1 = b[i];
          var b2 = b[(i + 1) % length];
          if (lineLine(a1, a2, b1, b2)) return true;
        }
        return false;
      }

      /**
       * @en Test rect and rect
       * @zh 测试矩形与矩形是否相交
       */
      function rectRect(a, b) {
        // jshint camelcase:false

        var a_min_x = a.x;
        var a_min_y = a.y;
        var a_max_x = a.x + a.width;
        var a_max_y = a.y + a.height;
        var b_min_x = b.x;
        var b_min_y = b.y;
        var b_max_x = b.x + b.width;
        var b_max_y = b.y + b.height;
        return a_min_x <= b_max_x && a_max_x >= b_min_x && a_min_y <= b_max_y && a_max_y >= b_min_y;
      }

      /**
       * @en Test rect and polygon
       * @zh 测试矩形与多边形是否相交
       */
      function rectPolygon(a, b) {
        var r0 = tempR1.set(a.x, a.y);
        var r1 = tempR2.set(a.x, a.yMax);
        var r2 = tempR3.set(a.xMax, a.yMax);
        var r3 = tempR4.set(a.xMax, a.y);

        // intersection check
        if (linePolygon(r0, r1, b)) return true;
        if (linePolygon(r1, r2, b)) return true;
        if (linePolygon(r2, r3, b)) return true;
        if (linePolygon(r3, r0, b)) return true;

        // check if a contains b
        for (var i = 0, l = b.length; i < l; ++i) {
          if (a.contains(b[i])) return true;
        }

        // check if b contains a
        if (pointInPolygon(r0, b)) return true;
        if (pointInPolygon(r1, b)) return true;
        if (pointInPolygon(r2, b)) return true;
        if (pointInPolygon(r3, b)) return true;
        return false;
      }

      /**
       * @en Test polygon and polygon
       * @zh 测试多边形与多边形是否相交
       */
      function polygonPolygon(a, b) {
        var i;
        var l;

        // check if a intersects b
        for (i = 0, l = a.length; i < l; ++i) {
          var a1 = a[i];
          var a2 = a[(i + 1) % l];
          if (linePolygon(a1, a2, b)) return true;
        }

        // check if a contains b
        for (i = 0, l = b.length; i < l; ++i) {
          if (pointInPolygon(b[i], a)) return true;
        }

        // check if b contains a
        for (i = 0, l = a.length; i < l; ++i) {
          if (pointInPolygon(a[i], b)) return true;
        }
        return false;
      }

      /**
       * @en Test circle and circle
       * @zh 测试圆形与圆形是否相交
       */
      function circleCircle(c1p, c1r, c2p, c2r) {
        var distance = Vec2.distance(c1p, c2p);
        return distance < c1r + c2r;
      }

      /**
       * @en Test polygon and circle
       * @zh 测试多边形与圆形是否相交
       */
      function polygonCircle(polygon, cp, cr) {
        var position = cp;
        if (pointInPolygon(position, polygon)) {
          return true;
        }
        for (var i = 0, l = polygon.length; i < l; i++) {
          var start = i === 0 ? polygon[polygon.length - 1] : polygon[i - 1];
          var end = polygon[i];
          if (pointLineDistance(position, start, end, true) < cr) {
            return true;
          }
        }
        return false;
      }

      /**
       * @en Test rect and circle
       * @zh 测试矩形与圆形是否相交
       */
      function rectCircle(rect, cp, cr) {
        var cx = cp.x;
        var cy = cp.y;
        var rx = rect.x;
        var ry = rect.y;
        var rw = rect.width;
        var rh = rect.height;

        // temporary variables to set edges for testing
        var testX = cx;
        var testY = cy;

        // which edge is closest?
        if (cx < rx) testX = rx; // test left edge
        else if (cx > rx + rw) testX = rx + rw; // right edge
        if (cy < ry) testY = ry; // top edge
        else if (cy > ry + rh) testY = ry + rh; // bottom edge

        // get distance from closest edges
        var distX = cx - testX;
        var distY = cy - testY;
        var distance = Math.sqrt(distX * distX + distY * distY);

        // if the distance is less than the radius, collision!
        if (distance <= cr) {
          return true;
        }
        return false;
      }

      /**
       * @en Test whether the point is in the polygon
       * @zh 测试一个点是否在一个多边形中
       */
      function pointInPolygon(point, polygon) {
        var inside = false;
        var x = point.x;
        var y = point.y;

        // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js
        var length = polygon.length;
        for (var i = 0, j = length - 1; i < length; j = i++) {
          var xi = polygon[i].x;
          var yi = polygon[i].y;
          var xj = polygon[j].x;
          var yj = polygon[j].y;
          var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }
        return inside;
      }

      /**
       * @en Calculate the distance of point to line.
       * @zh 计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。
       */
      function pointLineDistance(point, start, end, isSegment) {
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        var d = dx * dx + dy * dy;
        var t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / d;
        var p;
        if (!isSegment) {
          p = tempR1.set(start.x + t * dx, start.y + t * dy);
        } else if (d) {
          if (t < 0) p = start;else if (t > 1) p = end;else p = tempR1.set(start.x + t * dx, start.y + t * dy);
        } else {
          p = start;
        }
        dx = point.x - p.x;
        dy = point.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
      }

      /**
       * @en Intersection2D helper class
       * @zh 辅助类，用于测试形状与形状是否相交
       * @class Intersection2D
       */
      var Intersection2D = exports('default', /*#__PURE__*/_createClass(function Intersection2D() {
        _classCallCheck(this, Intersection2D);
      }));
      _defineProperty(Intersection2D, "lineLine", lineLine);
      _defineProperty(Intersection2D, "lineRect", lineRect);
      _defineProperty(Intersection2D, "linePolygon", linePolygon);
      _defineProperty(Intersection2D, "rectRect", rectRect);
      _defineProperty(Intersection2D, "rectPolygon", rectPolygon);
      _defineProperty(Intersection2D, "rectCircle", rectCircle);
      _defineProperty(Intersection2D, "polygonPolygon", polygonPolygon);
      _defineProperty(Intersection2D, "circleCircle", circleCircle);
      _defineProperty(Intersection2D, "polygonCircle", polygonCircle);
      _defineProperty(Intersection2D, "pointInPolygon", pointInPolygon);
      _defineProperty(Intersection2D, "pointLineDistance", pointLineDistance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Body.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Object.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, Vec3, Mat3, Quat, Vec2, Dirty;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Mat3 = module.Mat3;
      Quat = module.Quat;
      Vec2 = module.Vec2;
    }, function (module) {
      Dirty = module.Dirty;
    }],
    execute: function () {
      cclegacy._RF.push({}, "35d5eaYM9dJwrqPskERJ5FA", "Body", undefined);
      var cBody = exports('cBody', /*#__PURE__*/function () {
        function cBody(obj) {
          _classCallCheck(this, cBody);
          _defineProperty(this, "id", 0);
          _defineProperty(this, "fid", -1);
          _defineProperty(this, "mask", 0);
          _defineProperty(this, "group", 0);
          _defineProperty(this, "shape", null);
          _defineProperty(this, "object", null);
          _defineProperty(this, "weight", 0);
          //脏区更新标记
          _defineProperty(this, "isDirty", 1 | 2 | 4);
          //缓存
          _defineProperty(this, "lower", 0);
          _defineProperty(this, "upper", 0);
          _defineProperty(this, "aabb", [0, 0, 0, 0, 0, 0]);
          //状态
          _defineProperty(this, "isRemove", false);
          _defineProperty(this, "isRetrieve", true);
          _defineProperty(this, "isIdentity", true);
          _defineProperty(this, "inCollider", false);
          //缓存
          _defineProperty(this, "raidus", 0);
          _defineProperty(this, "points", []);
          _defineProperty(this, "center", new Vec3());
          _defineProperty(this, "rotMat3", new Mat3());
          _defineProperty(this, "halfSize", new Vec3());
          _defineProperty(this, "scale", new Vec3(1, 1, 1));
          //Agent
          _defineProperty(this, "isAgent", false);
          //Agent 开关
          _defineProperty(this, "maxNeighbors", 0);
          _defineProperty(this, "neighborDist", 0);
          //物体半径
          _defineProperty(this, "maxVelocity", 0);
          //最大速度
          _defineProperty(this, "newVelocity", new Vec3());
          _defineProperty(this, "prefVelocity", new Vec3());
          _defineProperty(this, "orcaLines", []);
          this.object = obj;
        }
        _createClass(cBody, [{
          key: "updateBound",
          value: function updateBound() {
            var isDirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Dirty.NON;
            var object = this.object;
            isDirty |= object.hasChangeDirty();
            if (this.isAgent) {
              this.newVelocity.set(object.velocity); //当前速度
              this.prefVelocity.set(object.tryVelocity); //期望速度

              //强制跟随，在Agent没碰撞情况下，保证全速跟随
              object.velocity.set(object.tryVelocity);
            }
            if (isDirty > 0) {
              var aabbChange = false;
              var shape = this.shape;
              if (isDirty & Dirty.S) {
                aabbChange = true;
                var s = this.getScale();
                this.scale.x = s.x >= 0 ? s.x : -s.x;
                this.scale.y = s.y >= 0 ? s.y : -s.y;
                this.scale.z = s.z >= 0 ? s.z : -s.z;
              }
              if (isDirty & Dirty.R) {
                //旋转更新aabb
                this.isIdentity = false;
                var rot = this.getRotation();
                this.rotMat3.fromQuat(rot); //计算缓存Mat3

                if (rot.equals(Quat.IDENTITY, 0.0001)) {
                  this.isIdentity = true;
                }
                aabbChange = true;
              }
              if (aabbChange) shape.updateAABB(this.getScale(), this.getRotMat3(), this.isIdentity);
              var AABB = this.aabb; // world aabb
              var aabb = shape.aabb; //local aabb
              var p = this.getPosition(); //world postion

              AABB[0] = aabb[0] + p.x;
              AABB[1] = aabb[1] + p.y;
              AABB[2] = aabb[2] + p.z;
              AABB[3] = aabb[3] + p.x;
              AABB[4] = aabb[4] + p.y;
              AABB[5] = aabb[5] + p.z;
              this.isDirty = 1 | 2 | 4 | 8; //设置脏区标记

              return true;
            }
            return false;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.shape = null;
            this.object = null;
            this.isRemove = false;
            this.inCollider = false;
            this.orcaLines.length = 0;
          }

          //body 坐标统一使用世界数据进行计算
        }, {
          key: "getRotMat3",
          value: function getRotMat3() {
            return this.rotMat3;
          } //world rotate mat3
        }, {
          key: "getScale",
          value: function getScale() {
            return this.object.node.worldScale;
          } // world scale
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.object.node.worldPosition;
          } //wold position
        }, {
          key: "getRotation",
          value: function getRotation() {
            return this.object.node.worldRotation;
          } //world rotation
        }, {
          key: "getCenter",
          value: function getCenter() {
            if (this.isDirty & 1) {
              this.isDirty &= ~1;
              var aabb = this.aabb;
              var center = this.center;
              center.x = (aabb[0] + aabb[3]) * 0.5;
              center.y = (aabb[1] + aabb[4]) * 0.5;
              center.z = (aabb[2] + aabb[5]) * 0.5;
            }
            return this.center; //world center
          }
        }, {
          key: "getRaidus",
          value: function getRaidus() {
            if (this.isDirty & 2) {
              this.isDirty &= ~2;
              var scale = this.scale;
              var raidus = this.shape.radius;
              this.raidus = Math.max(scale.x, scale.y, scale.z) * raidus;
            }
            return this.raidus; //world raidus
          }
        }, {
          key: "getHalfSize",
          value: function getHalfSize() {
            if (this.isDirty & 4) {
              this.isDirty &= ~4;
              var scale = this.scale;
              var size = this.shape.size;
              var halfSize = this.halfSize;
              halfSize.x = scale.x * size.x * 0.5;
              halfSize.y = scale.y * size.y * 0.5;
              halfSize.z = scale.z * size.z * 0.5;
            }
            return this.halfSize; //world halfsize
          }
        }, {
          key: "getPoints",
          value: function getPoints() {
            if (this.isDirty & 8) {
              this.isDirty &= ~8;
              var scale = this.scale;
              var m = this.getRotMat3();
              var center = this.getCenter();
              var points = this.points;
              var sp = this.shape.point2Ds;
              var length = sp.length;
              for (var i = 0; i < length; i++) {
                var x = sp[i].x * scale.x;
                var y = sp[i].y * scale.y;
                var z = 0;
                if (points[i] == undefined) {
                  points[i] = new Vec2();
                }
                points[i].x = x * m.m00 + y * m.m03 + z * m.m06 + center.x;
                points[i].y = x * m.m01 + y * m.m04 + z * m.m07 + center.y;
                // out.z = x * m.m02 + y * m.m05 + z * m.m08;
              }

              points.length = length;
            }
            return this.points; //world points
          }
        }]);

        return cBody;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Collider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Agent.ts', './Body.ts', './Object.ts', './Shape.ts'], function (exports) {
  var _createClass, _defineProperty, _classCallCheck, cclegacy, Agent, cBody, Dirty, Trigger, ShapeSupport;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Agent = module.Agent;
    }, function (module) {
      cBody = module.cBody;
    }, function (module) {
      Dirty = module.Dirty;
      Trigger = module.Trigger;
    }, function (module) {
      ShapeSupport = module.ShapeSupport;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9918lPZAlNEZGC1kb/9cqo", "Collider", undefined);
      var cCollider = exports('cCollider', /*#__PURE__*/function () {
        function cCollider() {
          _classCallCheck(this, cCollider);
          _defineProperty(this, "id", 0);
          _defineProperty(this, "pools", []);
          _defineProperty(this, "axis", -1);
          _defineProperty(this, "frameID", 0);
          _defineProperty(this, "insertID", 0);
          _defineProperty(this, "bodys", []);
          _defineProperty(this, "isDirty", false);
          _defineProperty(this, "pairs", new Map());
        }
        _createClass(cCollider, [{
          key: "create",
          value: function create(obj) {
            var body = this.pools.pop();
            if (!body) {
              body = new cBody(obj);
              body.id = this.id++;
              return body;
            }
            body.object = obj;
            return body;
          }

          //插入 body, force 强制更新数据
        }, {
          key: "insert",
          value: function insert(body) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!body) return;
            if (!body.inCollider) {
              //不在列表,重新插入
              this.bodys.push(body);
              body.inCollider = true;
            }

            //复位状态

            body.isRemove = false;
            body.isRetrieve = false;
            body.fid = this.insertID++;

            //强制刷新body数据
            if (force && body.object) {
              body.object.isDirty = Dirty.RTS;
              // body.updateBound(Dirty.RTS);
            }
          }

          //删除 body: 提前标记删除 , update中执行移除
        }, {
          key: "remove",
          value: function remove(body) {
            var retrieve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!body) return;
            body.isRemove = true; //标记移除body
            body.isRetrieve = retrieve; //是否回收复用body?
          }

          //重置回收bodys
        }, {
          key: "reset",
          value: function reset() {
            this.axis = -1;
            this.frameID = 0;
            this.isDirty = true;

            //回收bodys
            var bodys = this.bodys;
            for (var i = bodys.length - 1; i >= 0; i--) {
              var body = bodys[i];
              this.pools.push(body);
              body.clear();
            }
            bodys.length = 0;
          }

          //退出释放bodys
        }, {
          key: "clear",
          value: function clear() {
            this.id = 0;
            this.axis = -1;
            this.frameID = 0;
            this.isDirty = true;
            this.pools.length = 0;

            //清空bodys
            var bodys = this.bodys;
            for (var i = bodys.length - 1; i >= 0; i--) {
              bodys[i].clear();
            }
            bodys.length = 0;
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.reBuild();
            this.triggers();
            Agent.inst.process(this.bodys);
          }

          //相交碰撞测试
        }, {
          key: "triggers",
          value: function triggers() {
            //resultCB: (a: Body, b: Body) => void

            ++this.frameID;
            var axis = this.axis,
              n = axis >> 2 & 0x3,
              m = axis >> 4 & 0x3;
            var bodys = this.bodys;
            var agentMgr = Agent.inst;
            var i = 0,
              j = 0,
              N = bodys.length;
            for (i = 0; i < N; i++) {
              var bi = bodys[i];
              if (bi.isRemove) continue;
              var A = bi.aabb,
                an = A[n],
                am = A[m],
                mask = bi.mask,
                group = bi.group,
                upper = bi.upper,
                objA = bi.object;
              for (j = i + 1; j < N; j++) {
                var bj = bodys[j];
                if (bj.isRemove) continue;
                if (upper <= bj.lower) {
                  break;
                }
                var B = bj.aabb,
                  objB = bj.object;
                var a2b = mask & bj.group,
                  b2a = bj.mask & group;
                if (!(an > B[n + 3] || B[n] > A[n + 3] || am > B[m + 3] || B[m] > A[m + 3])) {
                  if (bi.isAgent && bj.isAgent) {
                    agentMgr.check(bi, bj);
                    agentMgr.check(bj, bi);
                  }
                  if (a2b || b2a) {
                    var at = objA.shape.type;
                    var bt = objB.shape.type;
                    if (at > bt) {
                      if (!ShapeSupport[bt | at](bj, bi)) continue;
                    } else {
                      if (!ShapeSupport[at | bt](bi, bj)) continue;
                    }
                    if (bi.id < bj.id) this.onTrigger(bj, bi, (b2a ? 1 : 0) | (a2b ? 2 : 0));else this.onTrigger(bi, bj, (a2b ? 1 : 0) | (b2a ? 2 : 0));
                  }
                }
              }
            }
            this.endTrigger();
          }
        }, {
          key: "onTrigger",
          value: function onTrigger(bi, bj, state) {
            var trigger = 0;
            var id = (bi.id * (bi.id + 1) >> 1) + bj.id - 1;
            var pairs = this.pairs;
            var data = pairs.get(id);
            if (data !== undefined) {
              trigger = Trigger.stay;
              if (data.fida != bi.fid || data.fidb != bj.fid) {
                trigger = Trigger.enter;
                data.fida = bi.fid;
                data.fidb = bj.fid;
              }
              data.frameID = this.frameID;
              data.state = state;
            } else {
              trigger = Trigger.enter;
              pairs.set(id, {
                id: id,
                a: bi,
                b: bj,
                fida: bi.fid,
                fidb: bj.fid,
                frameID: this.frameID,
                state: state
              });
            }
            var objA = bi.object;
            if (state & 1 && objA && objA.trigger && !bi.isRemove) {
              objA.onTrigger(bj, trigger);
            }
            var objB = bj.object;
            if (state & 2 && objB && objB.trigger && !bj.isRemove) {
              objB.onTrigger(bi, trigger);
            }
          }
        }, {
          key: "endTrigger",
          value: function endTrigger() {
            var deletes = [];
            var pairs = this.pairs;
            var length = pairs.size;
            var frameID = this.frameID;
            var entries = pairs.values();
            for (var i = 0; i < length; i++) {
              var data = entries.next().value;
              var bi = data.a;
              var bj = data.b;
              if (data.frameID != frameID || bi.isRemove || bj.isRemove) {
                if (data.fida == bi.fid && data.fidb == bj.fid) {
                  var objA = bi.object;
                  if (objA && objA.trigger && !bi.isRemove) objA.onTrigger(bj, Trigger.exit);
                  var objB = bj.object;
                  if (objB && objB.trigger && !bj.isRemove) objB.onTrigger(bi, Trigger.exit);
                }
                deletes.push(data.id);
              }
            }
            length = deletes.length - 1;
            while (length >= 0) {
              pairs["delete"](deletes[length--]);
            }
            deletes.length = 0;
          }
        }, {
          key: "reBuild",
          value: function reBuild() {
            var change = false;
            var axis = this.preBuildAxis();
            if ((axis & 0x3) != (this.axis & 0x3) || this.axis < 0) {
              this.axis = axis;
              change = true;
            }
            if (change || this.isDirty) {
              this.isDirty = false;
              var bodys = this.bodys;
              axis = this.axis & 0x3;
              for (var i = 0, N = bodys.length; i !== N; i++) {
                var bi = bodys[i];
                var aabb = bi.aabb;
                bi.lower = aabb[axis];
                bi.upper = aabb[axis + 3];
              }
              if (!change) this.sort(bodys);else bodys.sort(function (a, b) {
                return a.lower - b.lower;
              });
            }
          }
        }, {
          key: "sort",
          value: function sort(a) {
            var i = 0,
              j = 0,
              l = 0;
            for (i = 1, l = a.length; i < l; i++) {
              var v = a[i];
              var lower = v.lower;
              for (j = i - 1; j >= 0; j--) {
                var w = a[j];
                if (w.lower <= lower) {
                  break;
                }
                a[j + 1] = w;
              }
              if (j + 1 != i) {
                a[j + 1] = v;
              }
            }
          }
        }, {
          key: "preBuildAxis",
          value: function preBuildAxis() {
            var axis = 0,
              sumX = 0,
              sumX2 = 0,
              sumY = 0,
              sumY2 = 0,
              sumZ = 0,
              sumZ2 = 0,
              x = 0.0,
              y = 0.0,
              z = 0.0;
            var bodys = this.bodys;
            var N = bodys.length;
            var length = 0;
            var isDirty = false;
            for (var i = 0; i < N; i++) {
              var body = bodys[i];

              //删除body
              if (body.isRemove) {
                //是否回收body
                if (body.isRetrieve) {
                  this.pools.push(body);
                  body.clear();
                }
                //已从collider移除
                body.inCollider = false;
                continue;
              }
              if (++length <= i) {
                bodys[length - 1] = body;
              }
              if (body.updateBound()) isDirty = true;
              var s = body.aabb,
                sx = s[3] - s[0],
                sy = s[4] - s[1],
                sz = s[5] - s[2];
              x += sx * sx;
              y += sy * sy;
              z += sz * sz;
              var cX = (s[3] + s[0]) * 0.5;
              sumX += cX;
              sumX2 += cX * cX;
              var cY = (s[4] + s[1]) * 0.5;
              sumY += cY;
              sumY2 += cY * cY;
              var cZ = (s[5] + s[2]) * 0.5;
              sumZ += cZ;
              sumZ2 += cZ * cZ;
            }
            this.bodys.length = length;
            this.isDirty = isDirty;
            var invN = 1.0 / length;
            x = x > 0 ? length / x : 0;
            y = y > 0 ? length / y : 0;
            z = z > 0 ? length / z : 0;
            var X = (sumX2 - sumX * sumX * invN) * x;
            var Y = (sumY2 - sumY * sumY * invN) * y;
            var Z = (sumZ2 - sumZ * sumZ * invN) * z;
            if (X == 0) X = x;
            if (Y == 0) Y = y;
            if (Z == 0) Z = z;
            if (X > Y) {
              if (X > Z) {
                axis = 0;
                axis |= Y > Z ? 1 << 2 | 2 << 4 : 1 << 4 | 2 << 2; //yz:zy;
              } else {
                axis = 2;
                axis |= X > Y ? 0 << 2 | 1 << 4 : 0 << 4 | 1 << 2; //xy:yx;
              }
            } else if (Y > Z) {
              axis = 1;
              axis |= X > Z ? 0 << 2 | 2 << 4 : 0 << 4 | 2 << 2; //xz:zx;
            } else {
              axis = 2;
              axis |= X > Y ? 0 << 2 | 1 << 4 : 0 << 4 | 1 << 2; //xy:yx;
            }

            return axis;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new cCollider();
            }
            return this._inst;
          }
        }]);
        return cCollider;
      }());
      _defineProperty(cCollider, "_inst", null);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECS.ts", ['cc', './ECSComp.ts', './ECSEntity.ts', './ECSMatcher.ts', './ECSModel.ts', './ECSSystem.ts'], function (exports) {
  var cclegacy, ECSComp, ECSEntity, ECSMatcher, ECSModel, ECSSystem, ECSRootSystem, ECSComblockSystem;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSComp = module.ECSComp;
    }, function (module) {
      ECSEntity = module.ECSEntity;
    }, function (module) {
      ECSMatcher = module.ECSMatcher;
    }, function (module) {
      ECSModel = module.ECSModel;
    }, function (module) {
      ECSSystem = module.ECSSystem;
      ECSRootSystem = module.ECSRootSystem;
      ECSComblockSystem = module.ECSComblockSystem;
    }],
    execute: function () {
      exports('ecs', void 0);
      cclegacy._RF.push({}, "be87fT76plLkaUKEYpkuV0n", "ECS", undefined);

      /**
       * ECSEntity对象在destroy后，会回收到ECSModel.entityPool实体对象池中
       * ECSComp对象从ECSEntity.remove后，数据组件会回收到ECSModel.compPools组件对象池中
       */

      /** Entity-Component-System（实体-组件-系统）框架 */
      var ecs;
      (function (_ecs) {
        /** 实体 - 一个概念上的定义，指的是游戏世界中的一个独特物体，是一系列组件的集合 */

        /** 组件 - 一堆数据的集合，即不存在任何的行为，只用来存储状态 */

        /** 系统 - 关注实体上组件数据变化，处理游戏逻辑 */

        /** 根系统 - 驱动游戏中所有系统工作 */

        /** 处理游戏逻辑系统对象 - 继承此对象实现自定义业务逻辑 */

        /** 实体 - 一个概念上的定义，指的是游戏世界中的一个独特物体，是一系列组件的集合 */
        var Entity = _ecs.Entity = ECSEntity;
        var Comp = _ecs.Comp = ECSComp;
        var System = _ecs.System = ECSSystem;
        var RootSystem = _ecs.RootSystem = ECSRootSystem;
        var ComblockSystem = _ecs.ComblockSystem = ECSComblockSystem;

        //#region 接口

        /** 组件接口 */

        /** 实体匹配器接口 */

        /**
         * 监听组件首次添加到实体上时，在ComblockSystem上实现这个接口
         * 1. entityEnter会在update方法之前执行，实体进入后，不会再次进入entityEnter方法中
         * 2. 当实体从当前System移除，下次再次符合条件进入System也会执行上述流程
         * @example
        export class RoleUpgradeSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
            filter(): ecs.IMatcher {
                return ecs.allOf(RoleUpgradeComp, RoleModelLevelComp);
            }
              entityEnter(e: Role): void {
                e.remove(RoleUpgradeComp);
            }
        }
         */

        /** 监听组件从实体上移除时，在ComblockSystem上实现这个接口 */

        /** 监听系统第一次执行update处理实体时，在ComblockSystem上实现这个接口 */

        /** 监听系统执行update处理实体时，在ComblockSystem上实现这个接口 */

        //#endregion

        /**
         * 注册组件到ecs系统中
         * @param name   由于js打包会改变类名，所以这里必须手动传入组件的名称
         * @param canNew 标识是否可以new对象。想继承自Cocos Creator的组件就不能去new，需要写成@ecs.register('name', false)
         * @example
        // 注册实体
        @ecs.register('Role')
        export class Role extends ecs.Entity {
          }
          // 注册数据组件
        @ecs.register('RoleModel')
        export class RoleModelComp extends ecs.Comp {
            id: number = -1;
              reset() {
                this.id =  -1;
            }
        }
          // 注册系统组件
        @ecs.register('Initialize')
        export class InitResSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
          }
          // 注册显示对象组件
        @ccclass('RoleViewComp')
        @ecs.register('RoleView', false)
        export class RoleViewComp extends CCComp {
            onLoad(){
                
            }
        }
        */
        function register(name) {
          var canNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return function (ctor) {
            // 注册系统
            if (ctor.s) {
              var system = ECSModel.systems.get(name);
              if (system == null) {
                system = new ecs.System();
                ECSModel.systems.set(name, system);
              }
              system.add(new ctor());
            }
            // 注册实体
            else if (ctor.tid == undefined) {
              ECSModel.entityCtors.set(ctor, name);
            }
            // 注册组件
            else {
              if (ctor.tid === -1) {
                ctor.tid = ECSModel.compTid++;
                ctor.compName = name;
                if (canNew) {
                  ECSModel.compCtors.push(ctor); // 注册不同类型的组件
                  ECSModel.compPools.set(ctor.tid, []);
                } else {
                  ECSModel.compCtors.push(null);
                }
                ECSModel.compAddOrRemove.set(ctor.tid, []);
              } else {
                throw new Error("\u91CD\u590D\u6CE8\u518C\u7EC4\u4EF6\uFF1A ".concat(name, "."));
              }
            }
          };
        }
        _ecs.register = register;
        function getEntity(ctor) {
          // 获取实体对象名
          var entityName = ECSModel.entityCtors.get(ctor);
          if (entityName == undefined) console.error("".concat(ctor.name, " \u5B9E\u4F53\u6CA1\u6709\u6CE8\u518C"));

          // 获取实体对象池
          var entitys = ECSModel.entityPool.get(entityName) || [];
          var entity = entitys.pop();

          // 缓存中没有同类实体，则创建一个新的
          if (!entity) {
            entity = new ctor();
            entity.eid = ECSModel.eid++; // 实体唯一编号
            entity.name = entityName;
          }

          // 触发实体初始化逻辑
          if (entity.init) entity.init();else console.error("".concat(ctor.name, " \u5B9E\u4F53\u7F3A\u5C11 init \u65B9\u6CD5\u521D\u59CB\u5316\u9ED8\u8BA4\u7EC4\u4EF6"));
          ECSModel.eid2Entity.set(entity.eid, entity);
          return entity;
        }
        _ecs.getEntity = getEntity;
        function query(matcher) {
          var group = ECSModel.groups.get(matcher.mid);
          if (!group) {
            group = ECSModel.createGroup(matcher);
            ECSModel.eid2Entity.forEach(group.onComponentAddOrRemove, group);
          }
          return group.matchEntities;
        }
        _ecs.query = query;
        function clear() {
          ECSModel.eid2Entity.forEach(function (entity) {
            entity.destroy();
          });
          ECSModel.groups.forEach(function (group) {
            group.clear();
          });
          ECSModel.compAddOrRemove.forEach(function (callbackLst) {
            callbackLst.length = 0;
          });
          ECSModel.eid2Entity.clear();
          ECSModel.groups.clear();
        }
        _ecs.clear = clear;
        function getEntityByEid(eid) {
          return ECSModel.eid2Entity.get(eid);
        }
        _ecs.getEntityByEid = getEntityByEid;
        function activeEntityCount() {
          return ECSModel.eid2Entity.size;
        }
        _ecs.activeEntityCount = activeEntityCount;
        /** 创建实体 */
        function createEntity() {
          var entity = new Entity();
          entity.eid = ECSModel.eid++; // 实体id也是有限的资源
          ECSModel.eid2Entity.set(entity.eid, entity);
          return entity;
        }

        /**
         * 指定一个组件创建实体，返回组件对象。
         * @param ctor
         */
        function createEntityWithComp(ctor) {
          var entity = createEntity();
          return entity.add(ctor);
        }

        //#region 过滤器
        /**
         * 表示只关心这些组件的添加和删除动作。虽然实体可能有这些组件之外的组件，但是它们的添加和删除没有被关注，所以不会存在对关注之外的组件
         * 进行添加操作引发Group重复添加实体。
         * @param args
         * @example
         * ecs.allOf(AComponent, BComponent, CComponent);
         */
        function allOf() {
          var _ECSMatcher;
          return (_ECSMatcher = new ECSMatcher()).allOf.apply(_ECSMatcher, arguments);
        }
        _ecs.allOf = allOf;
        function anyOf() {
          var _ECSMatcher2;
          return (_ECSMatcher2 = new ECSMatcher()).anyOf.apply(_ECSMatcher2, arguments);
        }
        _ecs.anyOf = anyOf;
        function onlyOf() {
          var _ECSMatcher3;
          return (_ECSMatcher3 = new ECSMatcher()).onlyOf.apply(_ECSMatcher3, arguments);
        }
        _ecs.onlyOf = onlyOf;
        function excludeOf() {
          var _ECSMatcher4;
          return (_ECSMatcher4 = new ECSMatcher()).excludeOf.apply(_ECSMatcher4, arguments);
        }
        _ecs.excludeOf = excludeOf;
        function getSingleton(ctor) {
          if (!ECSModel.tid2comp.has(ctor.tid)) {
            var comp = createEntityWithComp(ctor);
            ECSModel.tid2comp.set(ctor.tid, comp);
          }
          return ECSModel.tid2comp.get(ctor.tid);
        }
        _ecs.getSingleton = getSingleton;
        function addSingleton(obj) {
          var tid = obj.constructor.tid;
          if (!ECSModel.tid2comp.has(tid)) {
            ECSModel.tid2comp.set(tid, obj);
          }
        }
        _ecs.addSingleton = addSingleton;
      })(ecs || (ecs = exports('ecs', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "3d017ZhAZRH4bPfpLr5++8F", "ECSComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-05 14:03:54
       */
      /**
       * 组件抽象类
       * 注：建议组件里面只放数据可能在实际写代码会碰到一些比较麻烦的问题，如果是单纯对组件内的数据操作可以在组件里面写方法
       */
      var ECSComp = exports('ECSComp', /*#__PURE__*/_createClass(function ECSComp() {
        _classCallCheck(this, ECSComp);
        /** 拥有该组件的实体 */
        _defineProperty(this, "ent", void 0);
        /**
         * 是否可回收组件对象，默认情况下都是可回收的
         * 注：如果该组件对象是由ecs系统外部创建的，则不可回收，需要用户自己手动进行回收
         */
        _defineProperty(this, "canRecycle", true);
      }));
      /** 组件的类型编号，-1表示未给该组件分配编号 */
      _defineProperty(ECSComp, "tid", -1);
      /** 组件名 */
      _defineProperty(ECSComp, "compName", void 0);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECSMask.ts', './ECSModel.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, ECSMask, ECSModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSMask = module.ECSMask;
    }, function (module) {
      ECSModel = module.ECSModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1fb62WC3PZPvLhjoZQfrREJ", "ECSEntity", undefined);

      //#region 辅助方法

      /**
       * 实体身上组件有增删操作，广播通知对应的观察者
       * @param entity 实体对象
       * @param componentTypeId 组件类型id
       */
      function broadcastCompAddOrRemove(entity, componentTypeId) {
        var events = ECSModel.compAddOrRemove.get(componentTypeId);
        for (var i = events.length - 1; i >= 0; i--) {
          events[i](entity);
        }
        // 判断是不是删了单例组件
        if (ECSModel.tid2comp.has(componentTypeId)) {
          ECSModel.tid2comp["delete"](componentTypeId);
        }
      }

      /**
       * 创建组件对象
       * @param ctor
       */
      function createComp(ctor) {
        var cct = ECSModel.compCtors[ctor.tid];
        if (!cct) {
          throw Error("\u6CA1\u6709\u627E\u5230\u8BE5\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u68C0\u67E5".concat(ctor.compName, "\u662F\u5426\u4E3A\u4E0D\u53EF\u6784\u9020\u7684\u7EC4\u4EF6"));
        }
        var comps = ECSModel.compPools.get(ctor.tid);
        var component = comps.pop() || new cct();
        return component;
      }

      /**
       * 销毁实体
       *
       * 缓存销毁的实体，下次新建实体时会优先从缓存中拿。
       * @param entity
       */
      function destroyEntity(entity) {
        if (ECSModel.eid2Entity.has(entity.eid)) {
          var entitys = ECSModel.entityPool.get(entity.name);
          if (entitys == null) {
            entitys = [];
            ECSModel.entityPool.set(entity.name, entitys);
          }
          entitys.push(entity);
          ECSModel.eid2Entity["delete"](entity.eid);
        } else {
          console.warn('试图销毁不存在的实体');
        }
      }

      //#endregion

      /** ECS实体对象 */
      var ECSEntity = exports('ECSEntity', /*#__PURE__*/function () {
        function ECSEntity() {
          _classCallCheck(this, ECSEntity);
          /** 实体唯一标识，不要手动修改 */
          _defineProperty(this, "eid", -1);
          /** 实体对象名 */
          _defineProperty(this, "name", '');
          /** 组件过滤数据 */
          _defineProperty(this, "mask", new ECSMask());
          /** 当前实体身上附加的组件构造函数 */
          _defineProperty(this, "compTid2Ctor", new Map());
          /** 配合 entity.remove(Comp, false)， 记录组件实例上的缓存数据，在添加时恢复原数据 */
          _defineProperty(this, "compTid2Obj", new Map());
          _defineProperty(this, "_parent", null);
          _defineProperty(this, "_children", null);
        }
        _createClass(ECSEntity, [{
          key: "parent",
          get: /** 父实体 */
          function get() {
            return this._parent;
          }
        }, {
          key: "children",
          get: /** 子实体集合 */
          function get() {
            if (this._children == null) {
              this._children = new Map();
            }
            return this._children;
          }

          /**
           * 添加子实体
           * @param entity 被添加的实体对象
           */
        }, {
          key: "addChild",
          value: function addChild(entity) {
            entity._parent = this;
            this.children.set(entity.eid, entity);
          }

          /**
           * 移除子实体
           * @param entity    被移除的实体对象
           * @param isDestroy 被移除的实体是否释放，默认为释放
           * @returns
           */
        }, {
          key: "removeChild",
          value: function removeChild(entity) {
            var isDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (this.children == null) return;
            this.children["delete"](entity.eid);
            if (isDestroy) entity.destroy();
            if (this.children.size == 0) {
              this._children = null;
            }
          }

          /**
           * 根据组件类动态创建组件，并通知关心的系统。如果实体存在了这个组件，那么会先删除之前的组件然后添加新的
           *
           * 注意：不要直接new Component，new来的Component不会从Component的缓存池拿缓存的数据
           * @param componentTypeId   组件类
           * @param isReAdd           true-表示用户指定这个实体可能已经存在了该组件，那么再次add组件的时候会先移除该组件然后再添加一遍。false-表示不重复添加组件
           */
        }, {
          key: "add",
          value: function add(ctor) {
            var isReAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (typeof ctor === 'function') {
              var compTid = ctor.tid;
              if (ctor.tid === -1) {
                throw Error('组件未注册！');
              }
              if (this.compTid2Ctor.has(compTid)) {
                // 判断是否有该组件，如果有则先移除
                if (isReAdd) {
                  this.remove(ctor);
                } else {
                  console.log("\u5DF2\u7ECF\u5B58\u5728\u7EC4\u4EF6\uFF1A".concat(ctor.compName));
                  // @ts-ignore
                  return this[ctor.compName];
                }
              }
              this.mask.set(compTid);
              var comp;
              if (this.compTid2Obj.has(compTid)) {
                comp = this.compTid2Obj.get(compTid);
                this.compTid2Obj["delete"](compTid);
              } else {
                // 创建组件对象
                comp = createComp(ctor);
              }

              // 将组件对象直接附加到实体对象身上，方便直接获取
              // @ts-ignore
              this[ctor.compName] = comp;
              this.compTid2Ctor.set(compTid, ctor);
              comp.ent = this;
              // 广播实体添加组件的消息
              broadcastCompAddOrRemove(this, compTid);
              return comp;
            } else {
              var tmpCtor = ctor.constructor;
              var _compTid = tmpCtor.tid;
              // console.assert(compTid !== -1 || !compTid, '组件未注册！');
              // console.assert(this.compTid2Ctor.has(compTid), '已存在该组件！');
              if (_compTid === -1 || _compTid == null) {
                throw Error('组件未注册');
              }
              if (this.compTid2Ctor.has(_compTid)) {
                throw Error('已经存在该组件');
              }
              this.mask.set(_compTid);
              //@ts-ignore
              this[tmpCtor.compName] = ctor;
              this.compTid2Ctor.set(_compTid, tmpCtor);
              //@ts-ignore
              ctor.ent = this;
              //@ts-ignore
              ctor.canRecycle = false;
              broadcastCompAddOrRemove(this, _compTid);
              return this;
            }
          }

          /**
           * 批量添加组件
           * @param ctors 组件类
           * @returns
           */
        }, {
          key: "addComponents",
          value: function addComponents() {
            for (var _len = arguments.length, ctors = new Array(_len), _key = 0; _key < _len; _key++) {
              ctors[_key] = arguments[_key];
            }
            for (var _i = 0, _ctors = ctors; _i < _ctors.length; _i++) {
              var _ctor = _ctors[_i];
              this.add(_ctor);
            }
            return this;
          }

          /**
           * 获取一个组件实例
           * @param ctor 组件类
           */
        }, {
          key: "get",
          value: function get(ctor) {
            // @ts-ignore
            return this[ctor.compName];
          }

          /**
           * 组件是否在实体存在内
           * @param ctor 组件类
           */
        }, {
          key: "has",
          value: function has(ctor) {
            if (typeof ctor == 'number') {
              return this.mask.has(ctor);
            } else {
              return this.compTid2Ctor.has(ctor.tid);
            }
          }

          /**
           * 从实体上删除指定组件
           * @param ctor      组件构造函数或者组件Tag
           * @param isRecycle 是否回收该组件对象。对于有些组件上有大量数据，当要描述移除组件但是不想清除组件上的数据是可以
           * 设置该参数为false，这样该组件对象会缓存在实体身上，下次重新添加组件时会将该组件对象添加回来，不会重新从组件缓存
           * 池中拿一个组件来用。
           */
        }, {
          key: "remove",
          value: function remove(ctor) {
            var isRecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var hasComp = false;
            //@ts-ignore
            var componentTypeId = ctor.tid;
            //@ts-ignore
            var compName = ctor.compName;
            if (this.mask.has(componentTypeId)) {
              hasComp = true;
              //@ts-ignore
              var comp = this[ctor.compName];
              //@ts-ignore
              comp.ent = null;
              if (isRecycle) {
                comp.reset();

                // 回收组件到指定缓存池中
                if (comp.canRecycle) {
                  var compPoolsType = ECSModel.compPools.get(componentTypeId);
                  compPoolsType.push(comp);
                }
              } else {
                this.compTid2Obj.set(componentTypeId, comp); // 用于缓存显示对象组件
              }
            }

            // 删除实体上的组件逻辑
            if (hasComp) {
              //@ts-ignore
              this[compName] = null;
              this.mask["delete"](componentTypeId);
              this.compTid2Ctor["delete"](componentTypeId);
              broadcastCompAddOrRemove(this, componentTypeId);
            }
          }
        }, {
          key: "_remove",
          value: function _remove(comp) {
            this.remove(comp, true);
          }

          /** 销毁实体，实体会被回收到实体缓存池中 */
        }, {
          key: "destroy",
          value: function destroy() {
            var _this = this;
            if (this._children) {
              this._children.forEach(function (e) {
                _this.removeChild(e);
                e.destroy();
              });
            }
            this.compTid2Ctor.forEach(this._remove, this);
            destroyEntity(this);
            this.compTid2Obj.clear();
          }
        }]);
        return ECSEntity;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "c21a23o9P5FNJamcMmoYWfs", "ECSGroup", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-05 14:21:54
       */
      var ECSGroup = exports('ECSGroup', /*#__PURE__*/function () {
        function ECSGroup(matcher) {
          _classCallCheck(this, ECSGroup);
          /** 实体筛选规则 */
          _defineProperty(this, "matcher", void 0);
          _defineProperty(this, "_matchEntities", new Map());
          _defineProperty(this, "_entitiesCache", null);
          /**
           * 当前group中实体的数量
           *
           * 注：不要手动修改这个属性值。
           * 注：其实可以通过this._matchEntities.size获得实体数量，但是需要封装get方法。为了减少一次方法的调用所以才直接创建一个count属性
           */
          _defineProperty(this, "count", 0);
          _defineProperty(this, "_enteredEntities", null);
          _defineProperty(this, "_removedEntities", null);
          this.matcher = matcher;
        }
        _createClass(ECSGroup, [{
          key: "matchEntities",
          get:
          /**
           * 符合规则的实体
           */
          function get() {
            if (this._entitiesCache === null) {
              this._entitiesCache = Array.from(this._matchEntities.values());
            }
            return this._entitiesCache;
          }
        }, {
          key: "entity",
          get: /** 获取matchEntities中第一个实体 */
          function get() {
            return this.matchEntities[0];
          }
        }, {
          key: "onComponentAddOrRemove",
          value: function onComponentAddOrRemove(entity) {
            if (this.matcher.isMatch(entity)) {
              // Group只关心指定组件在实体身上的添加和删除动作。
              this._matchEntities.set(entity.eid, entity);
              this._entitiesCache = null;
              this.count++;
              if (this._enteredEntities) {
                this._enteredEntities.set(entity.eid, entity);
                this._removedEntities["delete"](entity.eid);
              }
            } else if (this._matchEntities.has(entity.eid)) {
              // 如果Group中有这个实体，但是这个实体已经不满足匹配规则，则从Group中移除该实体
              this._matchEntities["delete"](entity.eid);
              this._entitiesCache = null;
              this.count--;
              if (this._enteredEntities) {
                this._enteredEntities["delete"](entity.eid);
                this._removedEntities.set(entity.eid, entity);
              }
            }
          }
        }, {
          key: "watchEntityEnterAndRemove",
          value: function watchEntityEnterAndRemove(enteredEntities, removedEntities) {
            this._enteredEntities = enteredEntities;
            this._removedEntities = removedEntities;
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this$_enteredEntitie, _this$_removedEntitie;
            this._matchEntities.clear();
            this._entitiesCache = null;
            this.count = 0;
            (_this$_enteredEntitie = this._enteredEntities) === null || _this$_enteredEntitie === void 0 || _this$_enteredEntitie.clear();
            (_this$_removedEntitie = this._removedEntities) === null || _this$_removedEntitie === void 0 || _this$_removedEntitie.clear();
          }
        }]);
        return ECSGroup;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECSModel.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, cclegacy, ECSModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSModel = module.ECSModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d18694PPbtGs5Ipgo/vaJBX", "ECSMask", undefined);
      var ECSMask = exports('ECSMask', /*#__PURE__*/function () {
        function ECSMask() {
          _classCallCheck(this, ECSMask);
          _defineProperty(this, "mask", void 0);
          _defineProperty(this, "size", 0);
          var length = Math.ceil(ECSModel.compTid / 31);
          this.mask = new Uint32Array(length);
          this.size = length;
        }
        _createClass(ECSMask, [{
          key: "set",
          value: function set(num) {
            // https://stackoverflow.com/questions/34896909/is-it-correct-to-set-bit-31-in-javascript
            // this.mask[((num / 32) >>> 0)] |= ((1 << (num % 32)) >>> 0);
            this.mask[num / 31 >>> 0] |= 1 << num % 31;
          }
        }, {
          key: "delete",
          value: function _delete(num) {
            this.mask[num / 31 >>> 0] &= ~(1 << num % 31);
          }
        }, {
          key: "has",
          value: function has(num) {
            return !!(this.mask[num / 31 >>> 0] & 1 << num % 31);
          }
        }, {
          key: "or",
          value: function or(other) {
            for (var i = 0; i < this.size; i++) {
              // &操作符最大也只能对2^30进行操作，如果对2^31&2^31会得到负数。当然可以(2^31&2^31) >>> 0，这样多了一步右移操作。
              if (this.mask[i] & other.mask[i]) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: "and",
          value: function and(other) {
            for (var i = 0; i < this.size; i++) {
              if ((this.mask[i] & other.mask[i]) != this.mask[i]) {
                return false;
              }
            }
            return true;
          }
        }, {
          key: "clear",
          value: function clear() {
            for (var i = 0; i < this.size; i++) {
              this.mask[i] = 0;
            }
          }
        }]);
        return ECSMask;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSMatcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECSMask.ts', './ECSModel.ts'], function (exports) {
  var _createClass, _classCallCheck, _defineProperty, _construct, _createForOfIteratorHelper, _inherits, _createSuper, cclegacy, ECSMask, ECSModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
      _construct = module.construct;
      _createForOfIteratorHelper = module.createForOfIteratorHelper;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSMask = module.ECSMask;
    }, function (module) {
      ECSModel = module.ECSModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "37e8arlqPlN7amZYyHFvBIp", "ECSMatcher", undefined);
      var macherId = 1;

      /**
       * 筛选规则间是“与”的关系
       * 比如：ecs.Macher.allOf(...).excludeOf(...)表达的是allOf && excludeOf，即实体有“这些组件” 并且 “没有这些组件”
       */
      var ECSMatcher = exports('ECSMatcher', /*#__PURE__*/function () {
        function ECSMatcher() {
          _classCallCheck(this, ECSMatcher);
          _defineProperty(this, "rules", []);
          _defineProperty(this, "_indices", null);
          _defineProperty(this, "isMatch", void 0);
          _defineProperty(this, "mid", -1);
          _defineProperty(this, "_key", null);
          this.mid = macherId++;
        }

        /**
         * 匹配器关注的组件索引。在创建Group时，Context根据组件id去给Group关联组件的添加和移除事件。
         */
        _createClass(ECSMatcher, [{
          key: "key",
          get: function get() {
            if (!this._key) {
              var s = '';
              for (var i = 0; i < this.rules.length; i++) {
                s += this.rules[i].getKey();
                if (i < this.rules.length - 1) {
                  s += ' && ';
                }
              }
              this._key = s;
            }
            return this._key;
          }
        }, {
          key: "indices",
          get: function get() {
            var _this = this;
            if (this._indices === null) {
              this._indices = [];
              this.rules.forEach(function (rule) {
                Array.prototype.push.apply(_this._indices, rule.indices);
              });
            }
            return this._indices;
          }

          /**
           * 组件间是或的关系，表示关注拥有任意一个这些组件的实体。
           * @param args 组件索引
           */
        }, {
          key: "anyOf",
          value: function anyOf() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            this.rules.push(_construct(AnyOf, args));
            this.bindMatchMethod();
            return this;
          }

          /**
           * 组件间是与的关系，表示关注拥有所有这些组件的实体。
           * @param args 组件索引
           */
        }, {
          key: "allOf",
          value: function allOf() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            this.rules.push(_construct(AllOf, args));
            this.bindMatchMethod();
            return this;
          }

          /**
           * 表示关注只拥有这些组件的实体
           *
           * 注意：
           *  不是特殊情况不建议使用onlyOf。因为onlyOf会监听所有组件的添加和删除事件。
           * @param args 组件索引
           */
        }, {
          key: "onlyOf",
          value: function onlyOf() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            this.rules.push(_construct(AllOf, args));
            var otherTids = [];
            var _iterator = _createForOfIteratorHelper(ECSModel.compCtors),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var ctor = _step.value;
                if (args.indexOf(ctor) < 0) {
                  otherTids.push(ctor);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.rules.push(_construct(ExcludeOf, otherTids));
            this.bindMatchMethod();
            return this;
          }

          /**
           * 不包含指定的任意一个组件
           * @param args
           */
        }, {
          key: "excludeOf",
          value: function excludeOf() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            this.rules.push(_construct(ExcludeOf, args));
            this.bindMatchMethod();
            return this;
          }
        }, {
          key: "bindMatchMethod",
          value: function bindMatchMethod() {
            if (this.rules.length === 1) {
              this.isMatch = this.isMatch1;
            } else if (this.rules.length === 2) {
              this.isMatch = this.isMatch2;
            } else {
              this.isMatch = this.isMatchMore;
            }
          }
        }, {
          key: "isMatch1",
          value: function isMatch1(entity) {
            return this.rules[0].isMatch(entity);
          }
        }, {
          key: "isMatch2",
          value: function isMatch2(entity) {
            return this.rules[0].isMatch(entity) && this.rules[1].isMatch(entity);
          }
        }, {
          key: "isMatchMore",
          value: function isMatchMore(entity) {
            var _iterator2 = _createForOfIteratorHelper(this.rules),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var rule = _step2.value;
                if (!rule.isMatch(entity)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return true;
          }
        }, {
          key: "clone",
          value: function clone() {
            var newMatcher = new ECSMatcher();
            newMatcher.mid = macherId++;
            this.rules.forEach(function (rule) {
              return newMatcher.rules.push(rule);
            });
            return newMatcher;
          }
        }]);
        return ECSMatcher;
      }());
      var BaseOf = /*#__PURE__*/function () {
        function BaseOf() {
          _classCallCheck(this, BaseOf);
          _defineProperty(this, "indices", []);
          _defineProperty(this, "mask", new ECSMask());
          var componentTypeId = -1;
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          var len = args.length;
          for (var i = 0; i < len; i++) {
            if (typeof args[i] === 'number') {
              componentTypeId = args[i];
            } else {
              componentTypeId = args[i].tid;
            }
            if (componentTypeId == -1) {
              throw Error('存在没有注册的组件！');
            }
            this.mask.set(componentTypeId);
            if (this.indices.indexOf(componentTypeId) < 0) {
              // 去重
              this.indices.push(componentTypeId);
            }
          }
          if (len > 1) {
            this.indices.sort(function (a, b) {
              return a - b;
            }); // 对组件类型id进行排序，这样关注相同组件的系统就能共用同一个group
          }
        }

        _createClass(BaseOf, [{
          key: "toString",
          value: function toString() {
            return this.indices.join('-'); // 生成group的key
          }
        }]);

        return BaseOf;
      }();
      /**
       * 用于描述包含任意一个这些组件的实体
       */
      var AnyOf = /*#__PURE__*/function (_BaseOf) {
        _inherits(AnyOf, _BaseOf);
        var _super = _createSuper(AnyOf);
        function AnyOf() {
          _classCallCheck(this, AnyOf);
          return _super.apply(this, arguments);
        }
        _createClass(AnyOf, [{
          key: "isMatch",
          value: function isMatch(entity) {
            // @ts-ignore
            return this.mask.or(entity.mask);
          }
        }, {
          key: "getKey",
          value: function getKey() {
            return 'anyOf:' + this.toString();
          }
        }]);
        return AnyOf;
      }(BaseOf);
      /**
       * 用于描述包含了“这些”组件的实体，这个实体除了包含这些组件还可以包含其他组件
       */
      var AllOf = /*#__PURE__*/function (_BaseOf2) {
        _inherits(AllOf, _BaseOf2);
        var _super2 = _createSuper(AllOf);
        function AllOf() {
          _classCallCheck(this, AllOf);
          return _super2.apply(this, arguments);
        }
        _createClass(AllOf, [{
          key: "isMatch",
          value: function isMatch(entity) {
            // @ts-ignore
            return this.mask.and(entity.mask);
          }
        }, {
          key: "getKey",
          value: function getKey() {
            return 'allOf:' + this.toString();
          }
        }]);
        return AllOf;
      }(BaseOf);
      /**
       * 不包含指定的任意一个组件
       */
      var ExcludeOf = /*#__PURE__*/function (_BaseOf3) {
        _inherits(ExcludeOf, _BaseOf3);
        var _super3 = _createSuper(ExcludeOf);
        function ExcludeOf() {
          _classCallCheck(this, ExcludeOf);
          return _super3.apply(this, arguments);
        }
        _createClass(ExcludeOf, [{
          key: "getKey",
          value: function getKey() {
            return 'excludeOf:' + this.toString();
          }
        }, {
          key: "isMatch",
          value: function isMatch(entity) {
            // @ts-ignore
            return !this.mask.or(entity.mask);
          }
        }]);
        return ExcludeOf;
      }(BaseOf);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECSGroup.ts'], function (exports) {
  var _createClass, _defineProperty, _classCallCheck, cclegacy, ECSGroup;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _classCallCheck = module.classCallCheck;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSGroup = module.ECSGroup;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d60egM6r9Gta4Op3VABSGM", "ECSModel", undefined);

      /** 组件类型 */

      /** 实体构造器接口 */

      /** 组件构造器接口 */

      /** ECS框架内部数据 */
      var ECSModel = exports('ECSModel', /*#__PURE__*/function () {
        function ECSModel() {
          _classCallCheck(this, ECSModel);
        }
        _createClass(ECSModel, null, [{
          key: "createGroup",
          value:
          /**
           * 创建group，每个group只关心对应组件的添加和删除
           * @param matcher 实体筛选器
           */
          function createGroup(matcher) {
            var group = ECSModel.groups.get(matcher.mid);
            if (!group) {
              group = new ECSGroup(matcher);
              ECSModel.groups.set(matcher.mid, group);
              var careComponentTypeIds = matcher.indices;
              for (var i = 0; i < careComponentTypeIds.length; i++) {
                ECSModel.compAddOrRemove.get(careComponentTypeIds[i]).push(group.onComponentAddOrRemove.bind(group));
              }
            }
            return group;
          }

          /** 系统组件 */
        }]);

        return ECSModel;
      }());
      /** 实体自增id */
      _defineProperty(ECSModel, "eid", 1);
      /** 实体造函数 */
      _defineProperty(ECSModel, "entityCtors", new Map());
      /** 实体对象缓存池 */
      _defineProperty(ECSModel, "entityPool", new Map());
      /** 通过实体id查找实体对象 */
      _defineProperty(ECSModel, "eid2Entity", new Map());
      /** 组件类型id */
      _defineProperty(ECSModel, "compTid", 0);
      /** 组件缓存池 */
      _defineProperty(ECSModel, "compPools", new Map());
      /** 组件构造函数，用于ecs.register注册时，记录不同类型的组件 */
      _defineProperty(ECSModel, "compCtors", []);
      /**
       * 每个组件的添加和删除的动作都要派送到“关心”它们的group上。goup对当前拥有或者之前（删除前）拥有该组件的实体进行组件规则判断。判断该实体是否满足group
       * 所期望的组件组合。
       */
      _defineProperty(ECSModel, "compAddOrRemove", new Map());
      /** 编号获取组件 */
      _defineProperty(ECSModel, "tid2comp", new Map());
      /**
       * 缓存的group
       *
       * key是组件的筛选规则，一个筛选规则对应一个group
       */
      _defineProperty(ECSModel, "groups", new Map());
      _defineProperty(ECSModel, "systems", new Map());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECSSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECSModel.ts'], function (exports) {
  var _createClass, _defineProperty, _classCallCheck, _createForOfIteratorHelper, cclegacy, ECSModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _classCallCheck = module.classCallCheck;
      _createForOfIteratorHelper = module.createForOfIteratorHelper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECSModel = module.ECSModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9261fRWg2RBY5kxbFJsY1QC", "ECSSystem", undefined);

      /** 继承此类实现具体业务逻辑的系统 */
      var ECSComblockSystem = exports('ECSComblockSystem', /*#__PURE__*/function () {
        /** 构造函数 */
        function ECSComblockSystem() {
          _classCallCheck(this, ECSComblockSystem);
          _defineProperty(this, "group", void 0);
          _defineProperty(this, "dt", 0);
          _defineProperty(this, "enteredEntities", null);
          _defineProperty(this, "removedEntities", null);
          _defineProperty(this, "hasEntityEnter", false);
          _defineProperty(this, "hasEntityRemove", false);
          _defineProperty(this, "hasUpdate", false);
          _defineProperty(this, "tmpExecute", null);
          _defineProperty(this, "execute", void 0);
          var hasOwnProperty = Object.hasOwnProperty;
          var prototype = Object.getPrototypeOf(this);
          var hasEntityEnter = hasOwnProperty.call(prototype, 'entityEnter');
          var hasEntityRemove = hasOwnProperty.call(prototype, 'entityRemove');
          var hasFirstUpdate = hasOwnProperty.call(prototype, 'firstUpdate');
          var hasUpdate = hasOwnProperty.call(prototype, 'update');
          this.hasEntityEnter = hasEntityEnter;
          this.hasEntityRemove = hasEntityRemove;
          this.hasUpdate = hasUpdate;
          if (hasEntityEnter || hasEntityRemove) {
            this.enteredEntities = new Map();
            this.removedEntities = new Map();
            this.execute = this.execute1;
            this.group = ECSModel.createGroup(this.filter());
            this.group.watchEntityEnterAndRemove(this.enteredEntities, this.removedEntities);
          } else {
            this.execute = this.execute0;
            this.group = ECSModel.createGroup(this.filter());
          }
          if (hasFirstUpdate) {
            this.tmpExecute = this.execute;
            this.execute = this.updateOnce;
          }
        }

        /** 系统实始化 */
        _createClass(ECSComblockSystem, [{
          key: "init",
          value: function init() {}

          /** 系统释放事件 */
        }, {
          key: "onDestroy",
          value: function onDestroy() {}

          /** 是否存在实体 */
        }, {
          key: "hasEntity",
          value: function hasEntity() {
            return this.group.count > 0;
          }

          /**
           * 先执行entityEnter，最后执行firstUpdate
           * @param dt
           * @returns
           */
        }, {
          key: "updateOnce",
          value: function updateOnce(dt) {
            if (this.group.count === 0) {
              return;
            }
            this.dt = dt;

            // 处理刚进来的实体
            if (this.enteredEntities.size > 0) {
              var entities = this.enteredEntities.values();
              var _iterator = _createForOfIteratorHelper(entities),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var entity = _step.value;
                  this.entityEnter(entity);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              this.enteredEntities.clear();
            }

            // 只执行firstUpdate
            var _iterator2 = _createForOfIteratorHelper(this.group.matchEntities),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _entity = _step2.value;
                this.firstUpdate(_entity);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            this.execute = this.tmpExecute;
            this.execute(dt);
            this.tmpExecute = null;
          }

          /**
           * 只执行update
           * @param dt
           * @returns
           */
        }, {
          key: "execute0",
          value: function execute0(dt) {
            if (this.group.count === 0) return;
            this.dt = dt;

            // 执行update
            if (this.hasUpdate) {
              var _iterator3 = _createForOfIteratorHelper(this.group.matchEntities),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var entity = _step3.value;
                  this.update(entity);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }

          /**
           * 先执行entityRemove，再执行entityEnter，最后执行update
           * @param dt
           * @returns
           */
        }, {
          key: "execute1",
          value: function execute1(dt) {
            var entities;
            if (this.removedEntities.size > 0) {
              if (this.hasEntityRemove) {
                entities = this.removedEntities.values();
                var _iterator4 = _createForOfIteratorHelper(entities),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var entity = _step4.value;
                    this.entityRemove(entity);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
              this.removedEntities.clear();
            }
            if (this.group.count === 0) return;
            this.dt = dt;

            // 处理刚进来的实体
            if (this.enteredEntities.size > 0) {
              if (this.hasEntityEnter) {
                entities = this.enteredEntities.values();
                var _iterator5 = _createForOfIteratorHelper(entities),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _entity2 = _step5.value;
                    this.entityEnter(_entity2);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              this.enteredEntities.clear();
            }

            // 执行update
            if (this.hasUpdate) {
              var _iterator6 = _createForOfIteratorHelper(this.group.matchEntities),
                _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _entity3 = _step6.value;
                  this.update(_entity3);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }

          /**
           * 实体过滤规则
           *
           * 根据提供的组件过滤实体。
           */
        }]);

        return ECSComblockSystem;
      }());

      /** 根System，对游戏中的System遍历从这里开始，一个System组合中只能有一个RootSystem，可以有多个并行的RootSystem */
      _defineProperty(ECSComblockSystem, "s", true);
      var ECSRootSystem = exports('ECSRootSystem', /*#__PURE__*/function () {
        function ECSRootSystem() {
          _classCallCheck(this, ECSRootSystem);
          _defineProperty(this, "executeSystemFlows", []);
          _defineProperty(this, "systemCnt", 0);
        }
        _createClass(ECSRootSystem, [{
          key: "add",
          value: function add(system) {
            if (system instanceof ECSSystem) {
              // 将嵌套的System都“摊平”，放在根System中进行遍历，减少execute的频繁进入退出。
              Array.prototype.push.apply(this.executeSystemFlows, system.comblockSystems);
            } else {
              this.executeSystemFlows.push(system);
            }
            this.systemCnt = this.executeSystemFlows.length;
            return this;
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;
            // 自动注册系统组件
            ECSModel.systems.forEach(function (sys) {
              return _this.add(sys);
            });

            // 初始化组件
            this.executeSystemFlows.forEach(function (sys) {
              return sys.init();
            });
          }
        }, {
          key: "execute",
          value: function execute(dt) {
            for (var i = 0; i < this.systemCnt; i++) {
              // @ts-ignore
              this.executeSystemFlows[i].execute(dt);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.executeSystemFlows.forEach(function (sys) {
              return sys.onDestroy();
            });
          }
        }]);
        return ECSRootSystem;
      }());

      /** 系统组合器，用于将多个相同功能模块的系统逻辑上放在一起，系统也可以嵌套系统 */
      var ECSSystem = exports('ECSSystem', /*#__PURE__*/function () {
        function ECSSystem() {
          _classCallCheck(this, ECSSystem);
          _defineProperty(this, "_comblockSystems", []);
        }
        _createClass(ECSSystem, [{
          key: "comblockSystems",
          get: function get() {
            return this._comblockSystems;
          }
        }, {
          key: "add",
          value: function add(system) {
            if (system instanceof ECSSystem) {
              Array.prototype.push.apply(this._comblockSystems, system._comblockSystems);
              system._comblockSystems.length = 0;
            } else {
              this._comblockSystems.push(system);
            }
            return this;
          }
        }]);
        return ECSSystem;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/extensions", ['./AILib.ts', './Agent.ts', './Body.ts', './Collider.ts', './Maths.ts', './Object.ts', './Shape.ts', './ECS.ts', './ECSComp.ts', './ECSEntity.ts', './ECSGroup.ts', './ECSMask.ts', './ECSMatcher.ts', './ECSModel.ts', './ECSSystem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Maths.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "82bedpBhDZGm7EUB0uAnjUn", "Maths", undefined);
      var Line = exports('Line', /*#__PURE__*/_createClass(function Line() {
        _classCallCheck(this, Line);
        _defineProperty(this, "weight", 0.5);
        _defineProperty(this, "direction", void 0);
        _defineProperty(this, "point", void 0);
      }));
      var Vector2 = exports('Vector2', /*#__PURE__*/function () {
        function Vector2() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          _classCallCheck(this, Vector2);
          _defineProperty(this, "x", void 0);
          _defineProperty(this, "y", void 0);
          this.x = x;
          this.y = y;
        }
        _createClass(Vector2, null, [{
          key: "multiply",
          value: function multiply(vector1, vector2) {
            return vector1.x * vector2.x + vector1.y * vector2.y;
          }
        }, {
          key: "multiply2",
          value: function multiply2(scalar, vector) {
            return new Vector2(vector.x * scalar, vector.y * scalar);
          }
        }, {
          key: "division",
          value: function division(vector, scalar) {
            if (scalar == 0) scalar = 1;
            return new Vector2(vector.x / scalar, vector.y / scalar);
          }
        }, {
          key: "subtract",
          value: function subtract(vector1, vector2) {
            return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
          }
        }, {
          key: "addition",
          value: function addition(vector1, vector2) {
            return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
          }
        }]);
        return Vector2;
      }());
      var RVOMath = exports('RVOMath', /*#__PURE__*/function () {
        function RVOMath() {
          _classCallCheck(this, RVOMath);
        }
        _createClass(RVOMath, null, [{
          key: "abs",
          value: function abs(vector) {
            return this.sqrt(this.absSq(vector));
          }
        }, {
          key: "absSq",
          value: function absSq(vector) {
            return Vector2.multiply(vector, vector);
          }
        }, {
          key: "normalize",
          value: function normalize(vector) {
            return Vector2.division(vector, this.abs(vector));
          }
        }, {
          key: "det",
          value: function det(vector1, vector2) {
            return vector1.x * vector2.y - vector1.y * vector2.x;
          }
        }, {
          key: "distSqPointLineSegment",
          value: function distSqPointLineSegment(vector1, vector2, vector3) {
            var r = Vector2.multiply(Vector2.subtract(vector3, vector1), Vector2.subtract(vector2, vector1)) / this.absSq(Vector2.subtract(vector2, vector1));
            if (r < 0) {
              return this.absSq(Vector2.subtract(vector3, vector1));
            }
            if (r > 1) {
              return this.absSq(Vector2.subtract(vector3, vector2));
            }
            return this.absSq(Vector2.subtract(vector3, Vector2.addition(vector1, Vector2.multiply2(r, Vector2.subtract(vector2, vector1)))));
          }
        }, {
          key: "fabs",
          value: function fabs(scalar) {
            return Math.abs(scalar);
          }
        }, {
          key: "leftOf",
          value: function leftOf(a, b, c) {
            return this.det(Vector2.subtract(a, c), Vector2.subtract(b, a));
          }
        }, {
          key: "sqr",
          value: function sqr(scalar) {
            return scalar * scalar;
          }
        }, {
          key: "sqrt",
          value: function sqrt(scalar) {
            return Math.sqrt(scalar);
          }
        }, {
          key: "transfromFloat",
          value: function transfromFloat(value) {
            return Math.floor(value * 10) / 10;
          }
        }]);
        return RVOMath;
      }());
      _defineProperty(RVOMath, "RVO_EPSILON", 0.00001);
      _defineProperty(RVOMath, "RVO_POSITIVEINFINITY", 10000000000000);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Object.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Collider.ts', './Shape.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inherits, _createSuper, _classCallCheck, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, ccenum, Vec2, Vec3, PhysicsSystem, UITransform, Node, Component, cCollider, ShapeType, cPolygon, cSphere, cBox;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ccenum = module.ccenum;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      PhysicsSystem = module.PhysicsSystem;
      UITransform = module.UITransform;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      cCollider = module.cCollider;
    }, function (module) {
      ShapeType = module.ShapeType;
      cPolygon = module.cPolygon;
      cSphere = module.cSphere;
      cBox = module.cBox;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "f834eM8pElOqJ717Yz/Xt9+", "Object", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Trigger = exports('Trigger', /*#__PURE__*/function (Trigger) {
        Trigger[Trigger["default"] = 0] = "default";
        Trigger[Trigger["enter"] = 1] = "enter";
        Trigger[Trigger["stay"] = 2] = "stay";
        Trigger[Trigger["exit"] = 3] = "exit";
        return Trigger;
      }({}));
      var Dirty = exports('Dirty', /*#__PURE__*/function (Dirty) {
        Dirty[Dirty["R"] = 1] = "R";
        Dirty[Dirty["T"] = 2] = "T";
        Dirty[Dirty["S"] = 4] = "S";
        Dirty[Dirty["RTS"] = 7] = "RTS";
        Dirty[Dirty["RS"] = 5] = "RS";
        Dirty[Dirty["NON"] = 0] = "NON";
        return Dirty;
      }({}));
      ccenum(ShapeType);
      var cObject = exports('cObject', (_dec = ccclass('cObject'), _dec2 = property({
        group: 'Body'
      }), _dec3 = property({
        type: ShapeType,
        group: 'Shape'
      }), _dec4 = property({
        group: 'Shape'
      }), _dec5 = property({
        group: 'Shape',
        visible: function visible() {
          return this.type == ShapeType.Box;
        }
      }), _dec6 = property({
        group: 'Shape',
        visible: function visible() {
          return this.type == ShapeType.Sphere;
        }
      }), _dec7 = property({
        type: [Vec2],
        group: 'Shape',
        visible: function visible() {
          return this.type == ShapeType.Polygon;
        }
      }), _dec8 = property({
        group: 'Agent'
      }), _dec9 = property({
        min: 0.01,
        max: 1.0,
        step: 0.01,
        group: 'Agent',
        visible: function visible() {
          return this.agent;
        }
      }), _dec10 = property({
        group: 'Agent',
        visible: function visible() {
          return this.agent;
        }
      }), _dec11 = property({
        group: 'Agent',
        visible: function visible() {
          return this.agent;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inherits(cObject, _Component);
        var _super = _createSuper(cObject);
        function cObject() {
          var _this;
          _classCallCheck(this, cObject);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _initializerDefineProperty(_assertThisInitialized(_this), "trigger", _descriptor, _assertThisInitialized(_this));
          //碰撞开关
          _initializerDefineProperty(_assertThisInitialized(_this), "type", _descriptor2, _assertThisInitialized(_this));
          //相交形状类型
          _initializerDefineProperty(_assertThisInitialized(_this), "center", _descriptor3, _assertThisInitialized(_this));
          //偏移位置，是shape相对node节点的中心偏移
          _initializerDefineProperty(_assertThisInitialized(_this), "size", _descriptor4, _assertThisInitialized(_this));
          //方块的长宽高
          _initializerDefineProperty(_assertThisInitialized(_this), "radius", _descriptor5, _assertThisInitialized(_this));
          //半径，sphere 或者 capsule
          _initializerDefineProperty(_assertThisInitialized(_this), "points", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_assertThisInitialized(_this), "agent", _descriptor7, _assertThisInitialized(_this));
          //Agent开关
          _initializerDefineProperty(_assertThisInitialized(_this), "weight", _descriptor8, _assertThisInitialized(_this));
          //Agent 权值越小，穿透力越强
          _initializerDefineProperty(_assertThisInitialized(_this), "maxRadius", _descriptor9, _assertThisInitialized(_this));
          //Agent碰撞半径,小于等于物体体积
          _initializerDefineProperty(_assertThisInitialized(_this), "maxVelocity", _descriptor10, _assertThisInitialized(_this));
          //Agent 最大速度上限
          _defineProperty(_assertThisInitialized(_this), "tryVelocity", new Vec3());
          //最大期望速度
          _defineProperty(_assertThisInitialized(_this), "velocity", new Vec3());
          //当前实际速度
          _defineProperty(_assertThisInitialized(_this), "isDirty", Dirty.RTS);
          _defineProperty(_assertThisInitialized(_this), "shape", null);
          _defineProperty(_assertThisInitialized(_this), "body", null);
          _defineProperty(_assertThisInitialized(_this), "group", PhysicsSystem.PhysicsGroup.DEFAULT);
          return _this;
        }
        _createClass(cObject, [{
          key: "onLoad",
          value:
          //碰撞分组

          function onLoad() {
            //创建碰撞形状
            switch (this.type) {
              case ShapeType.Box:
                this.shape = new cBox(this.center, this.size);
                break;
              case ShapeType.Sphere:
                this.shape = new cSphere(this.center, this.radius);
                break;
              case ShapeType.Polygon:
                this.shape = new cPolygon(this.center, this.points);
                break;
            }

            //创建碰撞body容器
            this.body = cCollider.inst.create(this);
            this.body.shape = this.shape; //绑定碰撞形状
            this.body.group = this.group; //碰撞分组掩码
            this.body.isAgent = this.agent; // agent 检测开关
            this.body.weight = this.weight; // agent 避让优先级
            this.body.neighborDist = this.maxRadius; // agent 体积半径
            this.body.maxVelocity = this.maxVelocity; // agent 最大速度
            this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group];

            //把body加入碰撞管理
            cCollider.inst.insert(this.body);
            this.isDirty = Dirty.RTS; //首次更新标记
          }

          //同步位置到body
        }, {
          key: "setPosition",
          value: function setPosition(position) {
            if (!this.node) {
              console.warn('cObject.setPosition: node is null');
            }
            this.node.position = position;
            this.isDirty |= Dirty.T;
          }

          //同步旋转到body
        }, {
          key: "setRotation",
          value: function setRotation(rotation) {
            this.node.rotation = rotation;
            this.isDirty |= Dirty.R;
          }

          //同步缩放到body
        }, {
          key: "setScale",
          value: function setScale(scale) {
            this.node.scale = scale;
            this.isDirty |= Dirty.S;
          }

          //设置瞄点，2D专用
        }, {
          key: "setAnchor",
          value: function setAnchor(anchor) {
            var c0 = this.center;
            var c1 = this.shape.center;
            var uts = this.node.getComponent(UITransform);
            if (uts) {
              uts.anchorPoint = anchor;
              var s = uts.contentSize;
              c1.x = (0.5 - anchor.x) * s.width + c0.x;
              c1.y = (0.5 - anchor.y) * s.height + c0.y;
              this.isDirty |= Dirty.T;
            }
          }
        }, {
          key: "getRotation",
          value: function getRotation() {
            return this.node.rotation;
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.node.position;
          }
        }, {
          key: "getScale",
          value: function getScale() {
            return this.node.scale;
          }

          //删除当前节点
        }, {
          key: "remove",
          value: function remove() {
            var retrieve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            //移除body, retrieve: 是否回收body ？
            cCollider.inst.remove(this.body, retrieve);

            //从父节点移除
            this.node.removeFromParent();

            //最后node用户自己控制回收和释放
            //this.remove().destroy() // 回收body，释放node
            //pool.push(this.remove(false)); //不回收body , 回收node

            return this.node;
          }

          //重新添加到父节点
        }, {
          key: "insert",
          value: function insert(parent) {
            //插入body, 强制更新body数据
            cCollider.inst.insert(this.body, true);

            //添加到父节点
            if (this.node.parent != parent) parent.addChild(this.node);
          }
        }, {
          key: "setAnimation",
          value: function setAnimation(name) {}
        }, {
          key: "setColor",
          value: function setColor(color) {}
        }, {
          key: "init",
          value: function init(customParam) {}

          //trigger 回调 enter,stay exit
        }, {
          key: "onTrigger",
          value: function onTrigger(b, trigger) {
            switch (trigger) {
              case Trigger.enter:
                this.onTriggerEnter(b);
                break;
              case Trigger.stay:
                this.onTriggerStay(b);
                break;
              case Trigger.exit:
                this.onTriggerExit(b);
                break;
            }
          }

          /**首次碰撞 */
        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(b) {}

          /**碰撞停留 */
        }, {
          key: "onTriggerStay",
          value: function onTriggerStay(b) {}

          /**碰撞退出 */
        }, {
          key: "onTriggerExit",
          value: function onTriggerExit(b) {}
        }, {
          key: "hasChangeDirty",
          value: function hasChangeDirty() {
            var isDirty = this.isDirty;
            var flag = this.node.hasChangedFlags;
            if (flag) {
              if (flag & Node.TransformBit.POSITION) isDirty |= Dirty.T;
              if (flag & Node.TransformBit.ROTATION) isDirty |= Dirty.R;
              if (flag & Node.TransformBit.SCALE) isDirty |= Dirty.S;
            }
            this.isDirty = Dirty.NON;
            return isDirty;
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            cCollider.inst.remove(this.body, true);
            this.unscheduleAllCallbacks();
            this.shape = null;
            this.body = null;
          }
        }]);
        return cObject;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trigger", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ShapeType.Box;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "points", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "agent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "maxVelocity", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Shape.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AILib.ts'], function (exports) {
  var _createClass, _inherits, _createSuper, _classCallCheck, _defineProperty, cclegacy, Vec2, Vec3, obbIntersect, sphereAABBDistance, sphereOBBDistance, Intersection2D;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _inherits = module.inherits;
      _createSuper = module.createSuper;
      _classCallCheck = module.classCallCheck;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
    }, function (module) {
      obbIntersect = module.obbIntersect;
      sphereAABBDistance = module.sphereAABBDistance;
      sphereOBBDistance = module.sphereOBBDistance;
      Intersection2D = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83d94jbLnZF7oVs2WQ1jJK+", "Shape", undefined);
      var ShapeType = exports('ShapeType', /*#__PURE__*/function (ShapeType) {
        ShapeType[ShapeType["Box"] = 1] = "Box";
        ShapeType[ShapeType["Sphere"] = 2] = "Sphere";
        ShapeType[ShapeType["Polygon"] = 4] = "Polygon";
        return ShapeType;
      }({})); //AI TODO
      var cShape = exports('cShape', /*#__PURE__*/function () {
        function cShape(center, type) {
          _classCallCheck(this, cShape);
          _defineProperty(this, "radius", 0);
          _defineProperty(this, "height", 0);
          _defineProperty(this, "type", ShapeType.Box);
          _defineProperty(this, "point2Ds", []);
          _defineProperty(this, "size", {
            x: 0,
            y: 0,
            z: 0
          });
          _defineProperty(this, "scale", {
            x: 1,
            y: 1,
            z: 1
          });
          _defineProperty(this, "center", {
            x: 0,
            y: 0,
            z: 0
          });
          _defineProperty(this, "aabb", [0, 0, 0, 0, 0, 0]);
          this.type = type;
          // this.isDirty = true;
          this.center.x = center.x;
          this.center.y = center.y;
          this.center.z = center.z;
        }
        _createClass(cShape, [{
          key: "updateAABB",
          value: function updateAABB(scale, world) {
            var isIdentity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var size = this.size;
            var center = this.center;
            var sx = scale.x,
              sy = scale.y,
              sz = scale.z;
            var cx = center.x,
              cy = center.y,
              cz = center.z;
            var x = size.x * 0.5,
              y = size.y * 0.5,
              z = size.z * 0.5;
            var aabb = this.aabb;
            if (!isIdentity) {
              var uX = world.m00 * sx,
                uY = world.m01 * sx,
                uZ = world.m02 * sx;
              var vX = world.m03 * sy,
                vY = world.m04 * sy,
                vZ = world.m05 * sy;
              var wX = world.m06 * sz,
                wY = world.m07 * sz,
                wZ = world.m08 * sz;

              // 计算新的中心点
              var cX = uX * cx + vX * cy + wX * cz;
              var cY = uY * cx + vY * cy + wY * cz;
              var cZ = uZ * cx + vZ * cy + wZ * cz;

              // 计算新的包围盒宽度、高度和深度
              var absU = Math.abs(uX) * x + Math.abs(vX) * y + Math.abs(wX) * z;
              var absV = Math.abs(uY) * x + Math.abs(vY) * y + Math.abs(wY) * z;
              var absW = Math.abs(uZ) * x + Math.abs(vZ) * y + Math.abs(wZ) * z;

              // 计算新的最小和最大顶点
              aabb[0] = cX - absU;
              aabb[1] = cY - absV;
              aabb[2] = cZ - absW;
              aabb[3] = cX + absU;
              aabb[4] = cY + absV;
              aabb[5] = cZ + absW;
            } else {
              x = Math.abs(x * sx);
              y = Math.abs(y * sy);
              z = Math.abs(z * sz);
              aabb[0] = cx * sx - x;
              aabb[1] = cy * sy - y;
              aabb[2] = cz * sz - z;
              aabb[3] = cx * sx + x;
              aabb[4] = cy * sy + y;
              aabb[5] = cz * sz + z;
            }
            return aabb;
          }
        }]);
        return cShape;
      }());
      var cBox = exports('cBox', /*#__PURE__*/function (_cShape) {
        _inherits(cBox, _cShape);
        var _super = _createSuper(cBox);
        function cBox(center, size) {
          var _this;
          _classCallCheck(this, cBox);
          _this = _super.call(this, center, ShapeType.Box);
          _this.size.x = size.x;
          _this.size.y = size.y;
          _this.size.z = size.z;

          //2d 多边形, 点队列
          var points = _this.point2Ds;
          points[0] = new Vec2(-size.x / 2, size.y / 2);
          points[1] = new Vec2(size.x / 2, size.y / 2);
          points[2] = new Vec2(size.x / 2, -size.y / 2);
          points[3] = new Vec2(-size.x / 2, -size.y / 2);
          return _this;
        }
        return _createClass(cBox);
      }(cShape));
      var cSphere = exports('cSphere', /*#__PURE__*/function (_cShape2) {
        _inherits(cSphere, _cShape2);
        var _super2 = _createSuper(cSphere);
        function cSphere(center, radius) {
          var _this2;
          _classCallCheck(this, cSphere);
          _this2 = _super2.call(this, center, ShapeType.Sphere);
          _this2.radius = radius;
          _this2.size.x = radius * 2;
          _this2.size.y = radius * 2;
          _this2.size.z = radius * 2;
          return _this2;
        }
        return _createClass(cSphere);
      }(cShape));

      //默认y轴竖向
      var cPolygon = exports('cPolygon', /*#__PURE__*/function (_cShape3) {
        _inherits(cPolygon, _cShape3);
        var _super3 = _createSuper(cPolygon);
        function cPolygon(center, points) {
          var _this3;
          _classCallCheck(this, cPolygon);
          _this3 = _super3.call(this, center, ShapeType.Polygon);

          //2d 多边形, 点队列
          _this3.point2Ds = points;
          var minX = points[0].x;
          var minY = points[0].y;
          var maxX = minX,
            maxY = minY;
          var length = points.length;
          for (var i = 1; i < length; i++) {
            var x = points[i].x;
            var y = points[i].y;
            if (minX >= x) minX = x;else if (maxX <= x) maxX = x;
            if (minY >= y) minY = y;else if (maxY <= y) maxY = y;
          }
          _this3.size.x = maxX - minX;
          _this3.size.y = maxY - minY;
          _this3.size.z = 0;
          return _this3;
        }
        return _createClass(cPolygon);
      }(cShape));
      var center = new Vec3();
      var center2 = new Vec2();
      var ShapeSupport = exports('ShapeSupport', []);
      ShapeSupport[ShapeType.Box | ShapeType.Box] = function (a, b) {
        //a,b 没有旋转,已进行AABB处理 , 直接返回 true
        if (a.isIdentity && b.isIdentity) return true;
        return obbIntersect(a.getCenter(), a.getHalfSize(), a.getRotMat3(), b.getCenter(), b.getHalfSize(), b.getRotMat3());
      };
      ShapeSupport[ShapeType.Box | ShapeType.Sphere] = function (a, b) {
        //a没有旋转当AABB处理
        if (a.isIdentity) {
          // 转换到 aabb 坐标系下
          Vec3.subtract(center, b.getCenter(), a.getCenter());
          return sphereAABBDistance(center, b.getRaidus(), a.getHalfSize());
        }
        return sphereOBBDistance(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
      };
      ShapeSupport[ShapeType.Sphere | ShapeType.Sphere] = function (a, b) {
        var ca = a.getCenter();
        var cb = b.getCenter();
        Vec3.subtract(center, ca, cb);
        var lengthSqr = center.lengthSqr();
        var radii = a.getRaidus() + b.getRaidus();
        return lengthSqr <= radii * radii;
      };
      ShapeSupport[ShapeType.Box | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        return Intersection2D.polygonPolygon(a.getPoints(), b.getPoints());
      };
      ShapeSupport[ShapeType.Sphere | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        var ca = a.getCenter();
        var radius = a.getRaidus();
        center2.x = ca.x;
        center2.y = ca.y;
        return Intersection2D.polygonCircle(b.getPoints(), center2, radius);
      };
      ShapeSupport[ShapeType.Polygon | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        return Intersection2D.polygonPolygon(a.getPoints(), b.getPoints());
      };
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/extensions', 'chunks:///_virtual/extensions'); 
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