(() => {
  var e = {
    898: e => {
      e.exports = {
        add: function (e, t) {
          return e + t
        }, mul: function (e, t) {
          return e * t
        }
      }
    }, 288: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => i});
      var r = n(645), o = n.n(r)()((function (e) {
        return e[1]
      }));
      o.push([e.id, "body {\n  font-size: 50px;\n  color: black;\n}\n", ""]);
      const i = o
    }, 58: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(645), o = n.n(r), i = n(667), a = n.n(i), s = n(926), c = o()((function (e) {
        return e[1]
      })), u = a()(s.Z);
      c.push([e.id, "body {\r\n  /*background-color: red;*/\r\n  background: url(" + u + ");\r\n}", ""]);
      const l = c
    }, 645: e => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map((function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
          })).join("")
        }, t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r) for (var i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (o[a] = !0)
          }
          for (var s = 0; s < e.length; s++) {
            var c = [].concat(e[s]);
            r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
          }
        }, t
      }
    }, 667: e => {
      "use strict";
      e.exports = function (e, t) {
        return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
      }
    }, 570: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {default: () => a});
      var r = n(379), o = n.n(r), i = n(288);
      o()(i.Z, {insert: "head", singleton: !1});
      const a = i.Z.locals || {}
    }, 131: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {default: () => a});
      var r = n(379), o = n.n(r), i = n(58);
      o()(i.Z, {insert: "head", singleton: !1});
      const a = i.Z.locals || {}
    }, 379: (e, t, n) => {
      "use strict";
      var r, o = function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            e[t] = n
          }
          return e[t]
        }
      }(), i = [];

      function a(e) {
        for (var t = -1, n = 0; n < i.length; n++) if (i[n].identifier === e) {
          t = n;
          break
        }
        return t
      }

      function s(e, t) {
        for (var n = {}, r = [], o = 0; o < e.length; o++) {
          var s = e[o], c = t.base ? s[0] + t.base : s[0], u = n[c] || 0, l = "".concat(c, " ").concat(u);
          n[c] = u + 1;
          var d = a(l), f = {css: s[1], media: s[2], sourceMap: s[3]};
          -1 !== d ? (i[d].references++, i[d].updater(f)) : i.push({
            identifier: l,
            updater: h(f, t),
            references: 1
          }), r.push(l)
        }
        return r
      }

      function c(e) {
        var t = document.createElement("style"), r = e.attributes || {};
        if (void 0 === r.nonce) {
          var i = n.nc;
          i && (r.nonce = i)
        }
        if (Object.keys(r).forEach((function (e) {
          t.setAttribute(e, r[e])
        })), "function" == typeof e.insert) e.insert(t); else {
          var a = o(e.insert || "head");
          if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          a.appendChild(t)
        }
        return t
      }

      var u, l = (u = [], function (e, t) {
        return u[e] = t, u.filter(Boolean).join("\n")
      });

      function d(e, t, n, r) {
        var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (e.styleSheet) e.styleSheet.cssText = l(t, o); else {
          var i = document.createTextNode(o), a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
      }

      function f(e, t, n) {
        var r = n.css, o = n.media, i = n.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r))
        }
      }

      var p = null, v = 0;

      function h(e, t) {
        var n, r, o;
        if (t.singleton) {
          var i = v++;
          n = p || (p = c(t)), r = d.bind(null, n, i, !1), o = d.bind(null, n, i, !0)
        } else n = c(t), r = f.bind(null, n, t), o = function () {
          !function (e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e)
          }(n)
        };
        return r(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r(e = t)
          } else o()
        }
      }

      e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
        var n = s(e = e || [], t);
        return function (e) {
          if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
            for (var r = 0; r < n.length; r++) {
              var o = a(n[r]);
              i[o].references--
            }
            for (var c = s(e, t), u = 0; u < n.length; u++) {
              var l = a(n[u]);
              0 === i[l].references && (i[l].updater(), i.splice(l, 1))
            }
            n = c
          }
        }
      }
    }, 926: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n.p + "img/0.43f03040.jpg"
    }
  }, t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = t[r] = {id: r, exports: {}};
    return e[r](i, i.exports, n), i.exports
  }

  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {a: t}), t
  }, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, n.p = "dist/bundle.js/", (() => {
    "use strict";
    var e = n(898), t = e.add, r = e.mul;
    console.log(t(20, 30)), console.log(r(50, 100)), console.log("why"), console.log("20"), console.log("1.88"), n(131), n(570), document.writeln("<h2>测试lessloader</h2>")
  })()
})();