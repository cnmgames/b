(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dice-dice"], {
    "0190": function(t, a, e) {
        var i = e("24fb");
        a = i(!1),
        a.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main-play[data-v-20c637e7]{position:relative;display:flex;justify-content:center;align-items:center;z-index:1}', ""]),
        t.exports = a
    },
    "33a7": function(t, a, e) {
        "use strict";
        e.d(a, "b", (function() {
            return n
        }
        )),
        e.d(a, "c", (function() {
            return r
        }
        )),
        e.d(a, "a", (function() {
            return i
        }
        ));
        var i = {
            gameButton: e("eabf").default
        }
          , n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("v-uni-view", {
                staticClass: "sai-zi-z"
            }, [e("div", {
                ref: "dice",
                staticClass: "dice"
            }, [e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "item1"
            })]), e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "item2"
            }), e("div", {
                staticClass: "item2"
            })]), e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "item3"
            }), e("div", {
                staticClass: "item3"
            }), e("div", {
                staticClass: "item3"
            })]), e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item4"
            }), e("div", {
                staticClass: "item4"
            })]), e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item4"
            }), e("div", {
                staticClass: "item4"
            })])]), e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item5"
            }), e("div", {
                staticClass: "item5"
            })]), e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item5"
            })]), e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item5"
            }), e("div", {
                staticClass: "item5"
            })])]), e("div", {
                staticClass: "face"
            }, [e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item6"
            }), e("div", {
                staticClass: "item6"
            })]), e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item6"
            }), e("div", {
                staticClass: "item6"
            })]), e("div", {
                staticClass: "face_0"
            }, [e("div", {
                staticClass: "item6"
            }), e("div", {
                staticClass: "item6"
            })])])]), e("p", {
                staticClass: "view"
            }, [t._v("你的点数: " + t._s(t.num))]), e("p", {
                staticClass: "gamebtn"
            }, [e("game-button", {
                attrs: {
                    id: "play",
                    color: "#ccc",
                    str: "赢的去抽牌"
                },
                on: {
                    click: function(a) {
                        arguments[0] = a = t.$handleEvent(a),
                        t.run.apply(void 0, arguments)
                    }
                }
            })], 1)])
        }
          , r = []
    },
    3914: function(t, a, e) {
        var i = e("24fb");
        a = i(!1),
        a.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.container[data-v-49a852dc]{width:100%;height:100%}.container .backHome[data-v-49a852dc]{position:absolute;top:20px;box-sizing:border-box;left:20px;z-index:3;color:#fff;font-size:%?24?%;padding:%?20?% %?40?%;background-color:rgba(0,0,0,.6);border:2px solid #fff;border-radius:5px;font-weight:700;overflow:hidden;-webkit-animation:new2-data-v-49a852dc 1s ease-in-out infinite;animation:new2-data-v-49a852dc 1s ease-in-out infinite}@-webkit-keyframes new2-data-v-49a852dc{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes new2-data-v-49a852dc{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}.container .backHome[data-v-49a852dc]::before{position:absolute;left:100%;top:0;content:"";width:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);height:20%;background-color:hsla(0,0%,100%,.8);-webkit-animation:new-data-v-49a852dc 2s ease-in-out infinite;animation:new-data-v-49a852dc 2s ease-in-out infinite}@-webkit-keyframes new-data-v-49a852dc{0%{left:100%}100%{left:-100%}}@keyframes new-data-v-49a852dc{0%{left:100%}100%{left:-100%}}.container .main[data-v-49a852dc]{position:absolute;left:0;top:0;width:100%;height:100%}.container .main .play[data-v-49a852dc]{position:relative;z-index:1;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.container .main .play .goTO[data-v-49a852dc]{width:%?375?%;height:%?90?%;font-weight:700;z-index:3}', ""]),
        t.exports = a
    },
    "475a": function(t, a, e) {
        "use strict";
        e("7a82");
        var i = e("4ea4").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        e("99af");
        var n = i(e("eabf"))
          , r = {
            components: {
                "game-button": n.default
            },
            data: function() {
                return {
                    num: "1",
                    posible: [{
                        value: 1,
                        x: 0,
                        y: 0
                    }, {
                        value: 6,
                        x: 0,
                        y: 180
                    }, {
                        value: 3,
                        x: 0,
                        y: -90
                    }, {
                        value: 4,
                        x: 0,
                        y: 90
                    }, {
                        value: 5,
                        x: -90,
                        y: 0
                    }, {
                        value: 2,
                        x: 90,
                        y: 0
                    }]
                }
            },
            methods: {
                run: function() {
                    var t, a, e = this, i = setInterval((function() {
                        t = Math.floor(6 * Math.random()),
                        a = e.posible[t],
                        e.$refs.dice.style.transform = "rotateX(".concat(a.x, "deg) rotateY(").concat(a.y, "deg)")
                    }
                    ), 200);
                    setTimeout((function() {
                        e.renderView(a.value),
                        clearInterval(i)
                    }
                    ), 3e3)
                },
                renderView: function(t) {
                    this.num = t
                }
            }
        };
        a.default = r
    },
    "49b4": function(t, a, e) {
        "use strict";
        var i = e("6233")
          , n = e.n(i);
        n.a
    },
    "5c6a": function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("b73c")
          , n = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return i[t]
                }
                ))
            }(r);
        a["default"] = n.a
    },
    6233: function(t, a, e) {
        var i = e("88dd");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = e("4f06").default;
        n("7d8ddfb0", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6922: function(t, a, e) {
        "use strict";
        e.d(a, "b", (function() {
            return n
        }
        )),
        e.d(a, "c", (function() {
            return r
        }
        )),
        e.d(a, "a", (function() {
            return i
        }
        ));
        var i = {
            xiaowuziSaizi: e("d163").default
        }
          , n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("v-uni-view", {
                staticClass: "main-play"
            }, [a("xiaowuzi-saizi")], 1)
        }
          , r = []
    },
    "86d4": function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("9b02")
          , n = e("5c6a");
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return n[t]
                }
                ))
            }(r);
        e("d579");
        var s = e("f0c5")
          , d = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "49a852dc", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    "88dd": function(t, a, e) {
        var i = e("24fb");
        a = i(!1),
        a.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.sai-zi-z[data-v-71f4d4df]{width:%?750?%}.gamebtn[data-v-71f4d4df]{width:100%;display:flex;justify-content:center}.gamebtn[data-v-71f4d4df] .onbtn{background-color:#ccc;color:#fff!important;box-shadow:0 0 5px #ccc,0 0 25px #ccc,0 0 50px #ccc,0 0 100px #ccc!important}@-webkit-keyframes rotate-data-v-71f4d4df{to{-webkit-transform:rotateX(1turn) rotateY(1turn);transform:rotateX(1turn) rotateY(1turn)}}@keyframes rotate-data-v-71f4d4df{to{-webkit-transform:rotateX(1turn) rotateY(1turn);transform:rotateX(1turn) rotateY(1turn)}}@-webkit-keyframes domo-data-v-71f4d4df{20%{-webkit-transform:rotateX(20deg);transform:rotateX(20deg)}60%{-webkit-transform:rotateX(20deg) rotateY(200deg);transform:rotateX(20deg) rotateY(200deg)}100%{-webkit-transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg);transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg)}}@keyframes domo-data-v-71f4d4df{20%{-webkit-transform:rotateX(20deg);transform:rotateX(20deg)}60%{-webkit-transform:rotateX(20deg) rotateY(200deg);transform:rotateX(20deg) rotateY(200deg)}100%{-webkit-transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg);transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg)}}.dice[data-v-71f4d4df]{width:100px;height:100px;margin:100px auto;position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;\n  /* animation: rotate 2s; */-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;transition:all .3s}.dice[data-v-71f4d4df]:hover{-webkit-animation:domo-data-v-71f4d4df 5s linear 0s infinite alternate;animation:domo-data-v-71f4d4df 5s linear 0s infinite alternate}.dice .face[data-v-71f4d4df]{width:100%;height:100%;display:flex;position:absolute;left:0;top:0;border:1px solid #000;background:#fdfafa;border-radius:5px;font-size:100px;color:#fff;text-align:center}.item1[data-v-71f4d4df]{width:30px;height:30px;background:red;border-radius:50%}.item2[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item3[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item4[data-v-71f4d4df]{width:5px;height:5px;background:#f03636;border-radius:50%}.item5[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item6[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.face[data-v-71f4d4df]:nth-child(1){justify-content:center;align-items:center;-webkit-transform:translateZ(50px);transform:translateZ(50px)}.face[data-v-71f4d4df]:nth-child(2){justify-content:space-around;align-items:center;-webkit-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px)}.face[data-v-71f4d4df]:nth-child(3){justify-content:space-around;align-items:center;flex-wrap:wrap;-webkit-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px)}.face[data-v-71f4d4df]:nth-child(4){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:rotateY(-90deg) translateZ(50px);transform:rotateY(-90deg) translateZ(50px)}.face:nth-child(4) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}.face[data-v-71f4d4df]:nth-child(5){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:rotateX(90deg) translateZ(50px);transform:rotateX(90deg) translateZ(50px)}.face:nth-child(5) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}.face[data-v-71f4d4df]:nth-child(6){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:translateZ(-50px);transform:translateZ(-50px)}.face:nth-child(6) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}p[data-v-71f4d4df]{text-align:center}uni-button[data-v-71f4d4df]{background:red;color:#fff;width:60%}.view[data-v-71f4d4df]{font-weight:700;color:#fff;font-size:%?32?%;font-family:微软雅黑;margin-bottom:80px}', ""]),
        t.exports = a
    },
    "8aaa": function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("f968")
          , n = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return i[t]
                }
                ))
            }(r);
        a["default"] = n.a
    },
    "9b02": function(t, a, e) {
        "use strict";
        e.d(a, "b", (function() {
            return n
        }
        )),
        e.d(a, "c", (function() {
            return r
        }
        )),
        e.d(a, "a", (function() {
            return i
        }
        ));
        var i = {
            akiParticles: e("5e36").default,
            play: e("e830").default
        }
          , n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("v-uni-view", {
                staticClass: "container"
            }, [e("aki-particles", {
                attrs: {
                    particlestyle: t.particlestyle
                }
            }), e("v-uni-view", {
                staticClass: "backHome",
                on: {
                    click: function(a) {
                        arguments[0] = a = t.$handleEvent(a),
                        t.backHome.apply(void 0, arguments)
                    }
                }
            }, [t._v("回到首页尝试更多玩法")]), e("v-uni-view", {
                staticClass: "main"
            }, [e("v-uni-view", {
                staticClass: "play"
            }, [e("play"), e("v-uni-button", {
                staticClass: "goTO",
                on: {
                    click: function(a) {
                        arguments[0] = a = t.$handleEvent(a),
                        t.gotoDraw.apply(void 0, arguments)
                    }
                }
            }, [t._v("去抽牌(更新词库)")])], 1)], 1)], 1)
        }
          , r = []
    },
    b73c: function(t, a, e) {
        "use strict";
        e("7a82"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        e("99af"),
        e("e9c4");
        var i = {
            data: function() {
                return {
                    particlestyle: {
                        style: "akira",
                        zindex: 1,
                        bgcolor: "#000022"
                    },
                    arr: [],
                    mode2: 1
                }
            },
            onLoad: function(t) {
                this.arr = JSON.parse(t.sex),
                this.mode2 = JSON.parse(t.mode2)
            },
            methods: {
                gotoDraw: function() {
                    uni.reLaunch({
                        url: "/pages/draw/draw?arr=".concat(JSON.stringify(this.arr), "&mode2=").concat(this.mode2)
                    })
                },
                backHome: function() {
                    uni.reLaunch({
                        url: "/pages/index/index"
                    })
                }
            }
        };
        a.default = i
    },
    bf87: function(t, a, e) {
        var i = e("3914");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = e("4f06").default;
        n("005b143a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c473: function(t, a, e) {
        "use strict";
        var i = e("c71a")
          , n = e.n(i);
        n.a
    },
    c71a: function(t, a, e) {
        var i = e("0190");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = e("4f06").default;
        n("209e2a24", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    d163: function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("33a7")
          , n = e("f194");
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return n[t]
                }
                ))
            }(r);
        e("49b4");
        var s = e("f0c5")
          , d = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "71f4d4df", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    d579: function(t, a, e) {
        "use strict";
        var i = e("bf87")
          , n = e.n(i);
        n.a
    },
    e830: function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("6922")
          , n = e("8aaa");
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return n[t]
                }
                ))
            }(r);
        e("c473");
        var s = e("f0c5")
          , d = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "20c637e7", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    f194: function(t, a, e) {
        "use strict";
        e.r(a);
        var i = e("475a")
          , n = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(t) {
                e.d(a, t, (function() {
                    return i[t]
                }
                ))
            }(r);
        a["default"] = n.a
    },
    f968: function(t, a, e) {
        "use strict";
        e("7a82");
        var i = e("4ea4").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var n = i(e("d163"))
          , r = {
            components: {
                "xiaowuzi-saizi": n.default
            },
            name: "play",
            data: function() {
                return {}
            }
        };
        a.default = r
    }
}]);
