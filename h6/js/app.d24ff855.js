(function(e) {
  function n(n) {
    for (var a, c, u = n[0], s = n[1], i = n[2], f = 0, d = []; f < u.length; f++) c = u[f], Object.prototype
      .hasOwnProperty.call(r, c) && r[c] && d.push(r[c][0]), r[c] = 0;
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    l && l(n);
    while (d.length) d.shift()();
    return o.push.apply(o, i || []), t()
  }

  function t() {
    for (var e, n = 0; n < o.length; n++) {
      for (var t = o[n], a = !0, c = 1; c < t.length; c++) {
        var u = t[c];
        0 !== r[u] && (a = !1)
      }
      a && (o.splice(n--, 1), e = s(s.s = t[0]))
    }
    return e
  }
  var a = {},
    c = {
      app: 0
    },
    r = {
      app: 0
    },
    o = [];

  function u(e) {
    return s.p + "js/" + ({} [e] || e) + "." + {
      "chunk-07d4e268": "9ab36a71",
      "chunk-0b5b327c": "97419d45",
      "chunk-370fa336": "2a2b2ac2",
      "chunk-38297f09": "3fb35fd9",
      "chunk-3a6b8ea4": "c47e7d57",
      "chunk-631b84ab": "07570b19",
      "chunk-643f51c6": "266479fa",
      "chunk-b0a6332a": "09c3a94c",
      "chunk-b438c372": "679bde4d",
      "chunk-f2c55184": "a9d83b99"
    } [e] + ".js"
  }

  function s(n) {
    if (a[n]) return a[n].exports;
    var t = a[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports
  }
  s.e = function(e) {
    var n = [],
      t = {
        "chunk-07d4e268": 1,
        "chunk-0b5b327c": 1,
        "chunk-370fa336": 1,
        "chunk-38297f09": 1,
        "chunk-3a6b8ea4": 1,
        "chunk-631b84ab": 1,
        "chunk-643f51c6": 1,
        "chunk-b0a6332a": 1,
        "chunk-b438c372": 1,
        "chunk-f2c55184": 1
      };
    c[e] ? n.push(c[e]) : 0 !== c[e] && t[e] && n.push(c[e] = new Promise((function(n, t) {
      for (var a = "css/" + ({} [e] || e) + "." + {
          "chunk-07d4e268": "ccb578d6",
          "chunk-0b5b327c": "5c70c3c2",
          "chunk-370fa336": "7125a636",
          "chunk-38297f09": "524610d9",
          "chunk-3a6b8ea4": "6fab17dc",
          "chunk-631b84ab": "c5d2da31",
          "chunk-643f51c6": "c37df722",
          "chunk-b0a6332a": "2eea0d65",
          "chunk-b438c372": "63185018",
          "chunk-f2c55184": "df750192"
        } [e] + ".css", r = s.p + a, o = document.getElementsByTagName("link"), u = 0; u < o.length; u++) {
        var i = o[u],
          f = i.getAttribute("data-href") || i.getAttribute("href");
        if ("stylesheet" === i.rel && (f === a || f === r)) return n()
      }
      var d = document.getElementsByTagName("style");
      for (u = 0; u < d.length; u++) {
        i = d[u], f = i.getAttribute("data-href");
        if (f === a || f === r) return n()
      }
      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = n, l.onerror = function(n) {
        var a = n && n.target && n.target.src || r,
          o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
        o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete c[e], l.parentNode.removeChild(l), t(o)
      }, l.href = r;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(l)
    })).then((function() {
      c[e] = 0
    })));
    var a = r[e];
    if (0 !== a)
      if (a) n.push(a[2]);
      else {
        var o = new Promise((function(n, t) {
          a = r[e] = [n, t]
        }));
        n.push(a[2] = o);
        var i, f = document.createElement("script");
        f.charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.src = u(e);
        var d = new Error;
        i = function(n) {
          f.onerror = f.onload = null, clearTimeout(l);
          var t = r[e];
          if (0 !== t) {
            if (t) {
              var a = n && ("load" === n.type ? "missing" : n.type),
                c = n && n.target && n.target.src;
              d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + c + ")", d.name = "ChunkLoadError", d
                .type = a, d.request = c, t[1](d)
            }
            r[e] = void 0
          }
        };
        var l = setTimeout((function() {
          i({
            type: "timeout",
            target: f
          })
        }), 12e4);
        f.onerror = f.onload = i, document.head.appendChild(f)
      } return Promise.all(n)
  }, s.m = e, s.c = a, s.d = function(e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    })
  }, s.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, s.t = function(e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e)
      for (var a in e) s.d(t, a, function(n) {
        return e[n]
      }.bind(null, a));
    return t
  }, s.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e["default"]
    } : function() {
      return e
    };
    return s.d(n, "a", n), n
  }, s.o = function(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, s.p = "", s.oe = function(e) {
    throw console.error(e), e
  };
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    f = i.push.bind(i);
  i.push = n, i = i.slice();
  for (var d = 0; d < i.length; d++) n(i[d]);
  var l = f;
  o.push([0, "chunk-vendors"]), t()
})({
  0: function(e, n, t) {
    e.exports = t("56d7")
  },
  "15cd": function(e, n, t) {
    "use strict";
    t("4d6e")
  },
  "199c": function(e, n) {
    (function() {
      var e = document.createElement("script");
      e.src = "https://hm.baidu.com/hm.js?d05afb69d24551bc889e1c0c0c15dda4";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(e, n)
    })()
  },
  "23be": function(e, n, t) {
    "use strict";
    var a = t("199c"),
      c = t.n(a);
    n["default"] = c.a
  },
  2438: function(e, n, t) {},
  "3dfd": function(e, n, t) {
    "use strict";
    var a = t("8e0a"),
      c = t("23be"),
      r = (t("9a8b"), t("2877")),
      o = Object(r["a"])(c["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = o.exports
  },
  "4d6e": function(e, n, t) {},
  "54f4": function(e, n, t) {
    const a = e => e.keys().map(e),
      c = t("cfd9");
    a(c)
  },
  "56d7": function(e, n, t) {
    "use strict";
    t.r(n);
    t("66b9");
    var a = t("b650"),
      c = (t("9a83"), t("f564")),
      r = (t("e7e5"), t("d399")),
      o = (t("91d5"), t("f0ca")),
      u = (t("6d73"), t("473d")),
      s = (t("2cbd"), t("ab2c")),
      i = (t("5246"), t("6b41")),
      f = (t("a52c"), t("2ed4")),
      d = (t("c3a6"), t("ad06")),
      l = (t("537a"), t("ac28")),
      p = (t("66cf"), t("343b")),
      b = (t("4056"), t("44bf")),
      h = (t("18e9"), t("471a")),
      m = (t("da3c"), t("0b33")),
      v = (t("bda7"), t("5e46")),
      g = (t("2994"), t("2bdd")),
      k = (t("ab71"), t("58e6")),
      y = (t("c194"), t("7744")),
      w = (t("0653"), t("34e9")),
      _ = (t("e17f"), t("2241")),
      O = (t("be7f"), t("565f")),
      x = (t("5852"), t("d961")),
      E = (t("5d17"), t("f9bd")),
      S = (t("342a"), t("1437")),
      T = (t("8a58"), t("e41f")),
      j = (t("d1cf"), t("ee83")),
      N = (t("5f5f"), t("f253")),
      P = (t("a909"), t("3acc")),
      I = (t("3c32"), t("417e")),
      D = (t("2b28"), t("9ed2")),
      F = (t("a44c"), t("e27c")),
      C = (t("4ddd"), t("9f14")),
      A = (t("e930"), t("8f80")),
      L = (t("480b"), t("a37c")),
      M = (t("7844"), t("5596")),
      B = (t("4b0a"), t("2bb1")),
      R = (t("09d3"), t("2d6d")),
      G = (t("61ae"), t("d314")),
      U = (t("afd4"), t("ca19")),
      q = (t("9e6b"), t("c41f")),
      $ = (t("8fec"), t("7bd9")),
      J = (t("4662"), t("28a2")),
      K = t("ba4c"),
      Z = t.n(K),
      H = t("3dfd"),
      W = t("8c4f"),
      Y = t("2f62"),
      z = t("0e44");
    Z.a.use(Y["a"]);
    var Q = new Y["a"].Store({
      state: {
        token: "",
        power: [],
        userinfo: {}
      },
      getters: {
        token: e => e.token,
        power: e => e.power,
        userinfo: e => e.userinfo
      },
      mutations: {
        SET_TOKEN: (e, n) => {
          e.token = n
        },
        SET_POWER: (e, n) => {
          e.power = n
        },
        SET_USERINFO: (e, n) => {
          e.userinfo = n
        }
      },
      actions: {},
      modules: {},
      plugins: [Object(z["a"])({
        storage: window.localStorage
      })]
    });
    Z.a.use(W["a"]);
    const V = [{
        path: "/",
        name: "home",
        component: () => t.e("chunk-643f51c6").then(t.bind(null, "37f9"))
      }, {
        path: "/truthOrDare/:type",
        name: "truthOrDare",
        component: () => t.e("chunk-0b5b327c").then(t.bind(null, "b350"))
      }, {
        path: "/plane/:type",
        name: "plane",
        component: () => t.e("chunk-b438c372").then(t.bind(null, "13ac"))
      }, {
        path: "/setPlane",
        name: "setPlane",
        component: () => t.e("chunk-b0a6332a").then(t.bind(null, "06d6"))
      }, {
        path: "/dice/:type",
        name: "dice",
        component: () => t.e("chunk-f2c55184").then(t.bind(null, "fadc"))
      }, {
        path: "/setDice",
        name: "setDice",
        component: () => t.e("chunk-3a6b8ea4").then(t.bind(null, "e248"))
      }, {
        path: "/turnTable/:type",
        name: "turnTable",
        component: () => t.e("chunk-631b84ab").then(t.bind(null, "406a"))
      }, {
        path: "/setTable",
        name: "setTable",
        component: () => t.e("chunk-07d4e268").then(t.bind(null, "8e35"))
      }, {
        path: "/rose/:type",
        name: "rose",
        component: () => t.e("chunk-370fa336").then(t.bind(null, "c058"))
      }, {
        path: "/setRose",
        name: "setRose",
        component: () => t.e("chunk-38297f09").then(t.bind(null, "5b16"))
      }],
      X = new W["a"]({
        base: "",
        routes: V
      });
    X.beforeEach(async (e, n, t) => {
      let a = localStorage.getItem("pass") || !1;
      "/" === e.path || "/plane/1" === e.path || "/plane/2" === e.path || a ? t() : t("/")
    });
    var ee = X,
      ne = (t("499a"), function() {
        var e = this,
          n = e._self._c;
        return n("svg", e._g({
          class: e.svgClass,
          attrs: {
            "aria-hidden": "true"
          }
        }, e.$listeners), [n("use", {
          attrs: {
            "xlink:href": e.iconName
          }
        })])
      }),
      te = [],
      ae = {
        name: "SvgIcon",
        props: {
          icon: {
            type: String,
            required: !0
          },
          className: {
            type: String,
            default: ""
          }
        },
        computed: {
          iconName() {
            return "#icon-" + this.icon
          },
          svgClass() {
            return this.className ? "svg-icon " + this.className : "svg-icon"
          }
        }
      },
      ce = ae,
      re = (t("15cd"), t("2877")),
      oe = Object(re["a"])(ce, ne, te, !1, null, "ebe2db8e", null),
      ue = oe.exports,
      se = (t("54f4"), t("98c9"));
    Z.a.component("svg-icon", ue), Z.a.prototype.$ImagePreview = J["a"], Z.a.use(se["a"]), Z.a.config
      .productionTip = !1, Z.a.config.productionTip = !1, Z.a.use(a["a"]).use(c["a"]).use(r["a"]).use(o["a"]).use(u[
        "a"]).use(s["a"]).use(i["a"]).use(f["a"]).use(d["a"]).use(l["a"]).use(p["a"]).use(b["a"]).use(h["a"]).use(m[
        "a"]).use(v["a"]).use(g["a"]).use(k["a"]).use(y["a"]).use(w["a"]).use(_["a"]).use(O["a"]).use(x["a"]).use(E[
        "a"]).use(S["a"]).use(T["a"]).use(j["a"]).use(N["a"]).use(P["a"]).use(I["a"]).use(D["a"]).use(F["a"]).use(C[
        "a"]).use(A["a"]).use(L["a"]).use(M["a"]).use(B["a"]).use(R["a"]).use(G["a"]).use(U["a"]).use(q["a"]).use($[
        "a"]), new Z.a({
        router: ee,
        store: Q,
        render: e => e(H["default"])
      }).$mount("#app")
  },
  "8e0a": function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
      return a
    })), t.d(n, "b", (function() {
      return c
    }));
    var a = function() {
        var e = this,
          n = e._self._c;
        e._self._setupProxy;
        return n("div", {
          attrs: {
            id: "app"
          }
        }, [n("router-view")], 1)
      },
      c = []
  },
  "9a8b": function(e, n, t) {
    "use strict";
    t("2438")
  },
  a23a: function(e, n, t) {
    "use strict";
    t.r(n);
    var a = t("e017"),
      c = t.n(a),
      r = t("21a1"),
      o = t.n(r),
      u = new c.a({
        id: "icon-vite",
        use: "icon-vite-usage",
        viewBox: "0 0 256 257",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257" id="icon-vite"><defs><linearGradient id="icon-vite_IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF" /><stop offset="100%" stop-color="#BD34FE" /></linearGradient><linearGradient id="icon-vite_IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83" /><stop offset="8.333%" stop-color="#FFDD35" /><stop offset="100%" stop-color="#FFA800" /></linearGradient></defs><path fill="url(#icon-vite_IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" /><path fill="url(#icon-vite_IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" /></symbol>'
      });
    o.a.add(u);
    n["default"] = u
  },
  cfd9: function(e, n, t) {
    var a = {
      "./vite.svg": "a23a"
    };

    function c(e) {
      var n = r(e);
      return t(n)
    }

    function r(e) {
      if (!t.o(a, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND", n
      }
      return a[e]
    }
    c.keys = function() {
      return Object.keys(a)
    }, c.resolve = r, e.exports = c, c.id = "cfd9"
  }
});