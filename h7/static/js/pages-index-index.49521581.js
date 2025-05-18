(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "0190": function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main-play[data-v-20c637e7]{position:relative;display:flex;justify-content:center;align-items:center;z-index:1}', ""]),
        t.exports = e
    },
    "0383": function(t, e, a) {
        "use strict";
        var i = a("9225")
          , n = a.n(i);
        n.a
    },
    "0484": function(t) {
        t.exports = JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')
    },
    "0569": function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-popup[data-v-3193bb52]{position:fixed;z-index:99}.uni-popup.top[data-v-3193bb52], .uni-popup.left[data-v-3193bb52], .uni-popup.right[data-v-3193bb52]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-3193bb52]{display:block;position:relative\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-3193bb52], .uni-popup .uni-popup__wrapper.right[data-v-3193bb52]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-3193bb52]{z-index:999}.fixforpc-top[data-v-3193bb52]{top:0}', ""]),
        t.exports = e
    },
    "0725": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {}
        ));
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "uni-popup-dialog"
            }, [a("v-uni-view", {
                staticClass: "uni-dialog-title"
            }, [a("v-uni-text", {
                staticClass: "uni-dialog-title-text",
                class: ["uni-popup__" + t.dialogType]
            }, [t._v(t._s(t.titleText))])], 1), "base" === t.mode ? a("v-uni-view", {
                staticClass: "uni-dialog-content"
            }, [t._t("default", [a("v-uni-text", {
                staticClass: "uni-dialog-content-text"
            }, [t._v(t._s(t.content))])])], 2) : a("v-uni-view", {
                staticClass: "uni-dialog-content"
            }, [t._t("default", ["checkbox" === t.inputType ? a("v-uni-input", {
                staticClass: "uni-dialog-input",
                attrs: {
                    placeholder: t.placeholderText,
                    focus: t.focus,
                    type: "checkbox"
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }) : "radio" === t.inputType ? a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.val,
                    expression: "val"
                }],
                staticClass: "uni-dialog-input",
                attrs: {
                    placeholder: t.placeholderText,
                    focus: t.focus,
                    type: "radio"
                },
                domProps: {
                    checked: t._q(t.val, null)
                },
                on: {
                    change: function(e) {
                        t.val = null
                    }
                }
            }) : a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.val,
                    expression: "val"
                }],
                staticClass: "uni-dialog-input",
                attrs: {
                    placeholder: t.placeholderText,
                    focus: t.focus,
                    type: t.inputType
                },
                domProps: {
                    value: t.val
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.val = e.target.value)
                    }
                }
            })])], 2), a("v-uni-view", {
                staticClass: "uni-dialog-button-group"
            }, [a("v-uni-view", {
                staticClass: "uni-dialog-button",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.closeDialog.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-text", {
                staticClass: "uni-dialog-button-text"
            }, [t._v(t._s(t.closeText))])], 1), a("v-uni-view", {
                staticClass: "uni-dialog-button uni-border-left",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onOk.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-text", {
                staticClass: "uni-dialog-button-text uni-button-color"
            }, [t._v(t._s(t.okText))])], 1)], 1)], 1)
        }
          , n = []
    },
    "0c7f": function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}', ""]),
        t.exports = e
    },
    "0c9c": function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.createAnimation = function(t, e) {
            if (!e)
                return;
            return clearTimeout(e.timer),
            new r(t,e)
        }
        ,
        a("caad"),
        a("2532"),
        a("99af"),
        a("d3b7"),
        a("159b");
        var n = i(a("5530"))
          , o = i(a("d4ec"))
          , s = i(a("bee2"))
          , r = function() {
            function t(e, a) {
                (0,
                o.default)(this, t),
                this.options = e,
                this.animation = uni.createAnimation((0,
                n.default)({}, e)),
                this.currentStepAnimates = {},
                this.next = 0,
                this.$ = a
            }
            return (0,
            s.default)(t, [{
                key: "_nvuePushAnimates",
                value: function(t, e) {
                    var a = this.currentStepAnimates[this.next]
                      , i = {};
                    if (i = a || {
                        styles: {},
                        config: {}
                    },
                    c.includes(t)) {
                        i.styles.transform || (i.styles.transform = "");
                        var n = "";
                        "rotate" === t && (n = "deg"),
                        i.styles.transform += "".concat(t, "(").concat(e + n, ") ")
                    } else
                        i.styles[t] = "".concat(e);
                    this.currentStepAnimates[this.next] = i
                }
            }, {
                key: "_animateRun",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = this.$.$refs["ani"].ref;
                    if (a)
                        return new Promise((function(i, o) {
                            nvueAnimation.transition(a, (0,
                            n.default)({
                                styles: t
                            }, e), (function(t) {
                                i()
                            }
                            ))
                        }
                        ))
                }
            }, {
                key: "_nvueNextAnimate",
                value: function(t) {
                    var e = this
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 ? arguments[2] : void 0
                      , n = t[a];
                    if (n) {
                        var o = n.styles
                          , s = n.config;
                        this._animateRun(o, s).then((function() {
                            a += 1,
                            e._nvueNextAnimate(t, a, i)
                        }
                        ))
                    } else
                        this.currentStepAnimates = {},
                        "function" === typeof i && i(),
                        this.isEnd = !0
                }
            }, {
                key: "step",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.animation.step(t),
                    this
                }
            }, {
                key: "run",
                value: function(t) {
                    this.$.animationData = this.animation.export(),
                    this.$.timer = setTimeout((function() {
                        "function" === typeof t && t()
                    }
                    ), this.$.durationTime)
                }
            }]),
            t
        }()
          , c = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"];
        c.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((function(t) {
            r.prototype[t] = function() {
                var e;
                return (e = this.animation)[t].apply(e, arguments),
                this
            }
        }
        ))
    },
    2909: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            return (0,
            i.default)(t) || (0,
            n.default)(t) || (0,
            o.default)(t) || (0,
            s.default)()
        }
        ;
        var i = r(a("6005"))
          , n = r(a("db90"))
          , o = r(a("06c5"))
          , s = r(a("3427"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    },
    "2ca01": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("ec7b")
          , n = a("a9fe");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("db44");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "78a59c9e", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    "2e7b": function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("a9e3");
        var n = i(a("eced"))
          , o = a("37dc")
          , s = i(a("a943"))
          , r = (0,
        o.initVueI18n)(s.default)
          , c = r.t
          , u = {
            name: "uniPopupDialog",
            mixins: [n.default],
            emits: ["confirm", "close"],
            props: {
                inputType: {
                    type: String,
                    default: "text"
                },
                value: {
                    type: [String, Number],
                    default: ""
                },
                placeholder: {
                    type: [String, Number],
                    default: ""
                },
                type: {
                    type: String,
                    default: "error"
                },
                mode: {
                    type: String,
                    default: "base"
                },
                title: {
                    type: String,
                    default: ""
                },
                content: {
                    type: String,
                    default: ""
                },
                beforeClose: {
                    type: Boolean,
                    default: !1
                },
                cancelText: {
                    type: String,
                    default: ""
                },
                confirmText: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    dialogType: "error",
                    focus: !1,
                    val: ""
                }
            },
            computed: {
                okText: function() {
                    return this.confirmText || c("uni-popup.ok")
                },
                closeText: function() {
                    return this.cancelText || c("uni-popup.cancel")
                },
                placeholderText: function() {
                    return this.placeholder || c("uni-popup.placeholder")
                },
                titleText: function() {
                    return this.title || c("uni-popup.title")
                }
            },
            watch: {
                type: function(t) {
                    this.dialogType = t
                },
                mode: function(t) {
                    "input" === t && (this.dialogType = "info")
                },
                value: function(t) {
                    this.val = t
                }
            },
            created: function() {
                this.popup.disableMask(),
                "input" === this.mode ? (this.dialogType = "info",
                this.val = this.value) : this.dialogType = this.type
            },
            mounted: function() {
                this.focus = !0
            },
            methods: {
                onOk: function() {
                    "input" === this.mode ? this.$emit("confirm", this.val) : this.$emit("confirm"),
                    this.beforeClose || this.popup.close()
                },
                closeDialog: function() {
                    this.$emit("close"),
                    this.beforeClose || this.popup.close()
                },
                close: function() {
                    this.popup.close()
                }
            }
        };
        e.default = u
    },
    "33a7": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return n
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            gameButton: a("eabf").default
        }
          , n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "sai-zi-z"
            }, [a("div", {
                ref: "dice",
                staticClass: "dice"
            }, [a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "item1"
            })]), a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "item2"
            }), a("div", {
                staticClass: "item2"
            })]), a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "item3"
            }), a("div", {
                staticClass: "item3"
            }), a("div", {
                staticClass: "item3"
            })]), a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item4"
            }), a("div", {
                staticClass: "item4"
            })]), a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item4"
            }), a("div", {
                staticClass: "item4"
            })])]), a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item5"
            }), a("div", {
                staticClass: "item5"
            })]), a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item5"
            })]), a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item5"
            }), a("div", {
                staticClass: "item5"
            })])]), a("div", {
                staticClass: "face"
            }, [a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item6"
            }), a("div", {
                staticClass: "item6"
            })]), a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item6"
            }), a("div", {
                staticClass: "item6"
            })]), a("div", {
                staticClass: "face_0"
            }, [a("div", {
                staticClass: "item6"
            }), a("div", {
                staticClass: "item6"
            })])])]), a("p", {
                staticClass: "view"
            }, [t._v("你的点数: " + t._s(t.num))]), a("p", {
                staticClass: "gamebtn"
            }, [a("game-button", {
                attrs: {
                    id: "play",
                    color: "#ccc",
                    str: "赢的去抽牌"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.run.apply(void 0, arguments)
                    }
                }
            })], 1)])
        }
          , o = []
    },
    3427: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        a("d9e2"),
        a("d401")
    },
    "373a": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return n
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            uniTransition: a("6248").default
        }
          , n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return t.showPopup ? a("v-uni-view", {
                staticClass: "uni-popup",
                class: [t.popupstyle, t.isDesktop ? "fixforpc-z-index" : ""]
            }, [a("v-uni-view", {
                on: {
                    touchstart: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.touchstart.apply(void 0, arguments)
                    }
                }
            }, [t.maskShow ? a("uni-transition", {
                key: "1",
                attrs: {
                    name: "mask",
                    "mode-class": "fade",
                    styles: t.maskClass,
                    duration: t.duration,
                    show: t.showTrans
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }) : t._e(), a("uni-transition", {
                key: "2",
                attrs: {
                    "mode-class": t.ani,
                    name: "content",
                    styles: t.transClass,
                    duration: t.duration,
                    show: t.showTrans
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "uni-popup__wrapper",
                class: [t.popupstyle],
                style: {
                    backgroundColor: t.bg
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.clear.apply(void 0, arguments)
                    }
                }
            }, [t._t("default")], 2)], 1)], 1), t.maskShow ? a("keypress", {
                on: {
                    esc: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e()
        }
          , o = []
    },
    "397c": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("f1db")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    "39cb": function(t, e, a) {
        "use strict";
        var i = a("c6c5")
          , n = a.n(i);
        n.a
    },
    "475a": function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("99af");
        var n = i(a("eabf"))
          , o = {
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
                    var t, e, a = this, i = setInterval((function() {
                        t = Math.floor(6 * Math.random()),
                        e = a.posible[t],
                        a.$refs.dice.style.transform = "rotateX(".concat(e.x, "deg) rotateY(").concat(e.y, "deg)")
                    }
                    ), 200);
                    setTimeout((function() {
                        a.renderView(e.value),
                        clearInterval(i)
                    }
                    ), 3e3)
                },
                renderView: function(t) {
                    this.num = t
                }
            }
        };
        e.default = o
    },
    "49b4": function(t, e, a) {
        "use strict";
        var i = a("6233")
          , n = a.n(i);
        n.a
    },
    "4d79": function(t, e, a) {
        "use strict";
        var i = a("8b28")
          , n = a.n(i);
        n.a
    },
    "5fff": function(t, e, a) {
        var i = a("db17");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("49eeac9c", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6005: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            if (Array.isArray(t))
                return (0,
                i.default)(t)
        }
        ;
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a("6b75"))
    },
    6233: function(t, e, a) {
        var i = a("88dd");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("7d8ddfb0", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6248: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("a333")
          , n = a("a904");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "289169e0", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    6922: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return n
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            xiaowuziSaizi: a("d163").default
        }
          , n = function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("v-uni-view", {
                staticClass: "main-play"
            }, [e("xiaowuzi-saizi")], 1)
        }
          , o = []
    },
    "6f69": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return n
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            gameButton: a("eabf").default
        }
          , n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "draw-main"
            }, [a("v-uni-view", {
                staticClass: "top"
            }, [a("v-uni-text", [t._v("点击掀开让对方做一件事")])], 1), a("v-uni-view", {
                staticClass: "center"
            }, [a("v-uni-view", {
                ref: "item1",
                staticClass: "father",
                class: [1 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "3"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[0].left + "px, " + t.items[0].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(1)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[0]))])], 1), a("v-uni-view", {
                ref: "item2",
                staticClass: "father",
                class: [2 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "3"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[1].left + "px, " + t.items[1].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(2)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[1]))])], 1), a("v-uni-view", {
                ref: "item3",
                staticClass: "father",
                class: [3 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "3"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[2].left + "px, " + t.items[2].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(3)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[2]))])], 1), a("v-uni-view", {
                ref: "item4",
                staticClass: "father",
                class: [4 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "2"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[3].left + "px, " + t.items[3].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(4)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[3]))])], 1), a("v-uni-view", {
                ref: "center",
                staticClass: "father",
                staticStyle: {
                    "z-index": "1"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onNum.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-button", {
                staticClass: "shuffle",
                attrs: {
                    "hover-class": "onshuffle"
                }
            }, [t._v("洗牌")])], 1), a("v-uni-view", {
                ref: "item6",
                staticClass: "father",
                class: [6 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "2"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[4].left + "px, " + t.items[4].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(6)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[4]))])], 1), a("v-uni-view", {
                ref: "item7",
                staticClass: "father",
                class: [7 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "2"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[5].left + "px, " + t.items[5].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(7)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[5]))])], 1), a("v-uni-view", {
                ref: "item8",
                staticClass: "father",
                class: [8 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "2"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[6].left + "px, " + t.items[6].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(8)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[6]))])], 1), a("v-uni-view", {
                ref: "item9",
                staticClass: "father",
                class: [9 === t.active ? "active" : ""],
                staticStyle: {
                    "z-index": "2"
                },
                style: {
                    transform: t.flag ? "translate(" + t.items[7].left + "px, " + t.items[7].top + "px)" : "translate(0px, 0px)"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onDraw(9)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "back",
                class: [2 == t.mode2 ? "back1" : "", 3 == t.mode2 ? "back2" : "", 4 == t.mode2 ? "back3" : ""]
            }), a("v-uni-view", {
                staticClass: "next"
            }, [t._v(t._s(t.someSing[7]))])], 1)], 1), a("v-uni-view", {
                staticClass: "bottom"
            }, [a("game-button", {
                attrs: {
                    color: "#ccc",
                    str: "更新词库"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.back.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)
        }
          , o = []
    },
    8345: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("6f69")
          , n = a("397c");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("0383");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "42b77800", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    "88dd": function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.sai-zi-z[data-v-71f4d4df]{width:%?750?%}.gamebtn[data-v-71f4d4df]{width:100%;display:flex;justify-content:center}.gamebtn[data-v-71f4d4df] .onbtn{background-color:#ccc;color:#fff!important;box-shadow:0 0 5px #ccc,0 0 25px #ccc,0 0 50px #ccc,0 0 100px #ccc!important}@-webkit-keyframes rotate-data-v-71f4d4df{to{-webkit-transform:rotateX(1turn) rotateY(1turn);transform:rotateX(1turn) rotateY(1turn)}}@keyframes rotate-data-v-71f4d4df{to{-webkit-transform:rotateX(1turn) rotateY(1turn);transform:rotateX(1turn) rotateY(1turn)}}@-webkit-keyframes domo-data-v-71f4d4df{20%{-webkit-transform:rotateX(20deg);transform:rotateX(20deg)}60%{-webkit-transform:rotateX(20deg) rotateY(200deg);transform:rotateX(20deg) rotateY(200deg)}100%{-webkit-transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg);transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg)}}@keyframes domo-data-v-71f4d4df{20%{-webkit-transform:rotateX(20deg);transform:rotateX(20deg)}60%{-webkit-transform:rotateX(20deg) rotateY(200deg);transform:rotateX(20deg) rotateY(200deg)}100%{-webkit-transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg);transform:rotateX(100deg) rotateY(1000deg) rotate(-100deg)}}.dice[data-v-71f4d4df]{width:100px;height:100px;margin:100px auto;position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;\n  /* animation: rotate 2s; */-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;transition:all .3s}.dice[data-v-71f4d4df]:hover{-webkit-animation:domo-data-v-71f4d4df 5s linear 0s infinite alternate;animation:domo-data-v-71f4d4df 5s linear 0s infinite alternate}.dice .face[data-v-71f4d4df]{width:100%;height:100%;display:flex;position:absolute;left:0;top:0;border:1px solid #000;background:#fdfafa;border-radius:5px;font-size:100px;color:#fff;text-align:center}.item1[data-v-71f4d4df]{width:30px;height:30px;background:red;border-radius:50%}.item2[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item3[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item4[data-v-71f4d4df]{width:5px;height:5px;background:#f03636;border-radius:50%}.item5[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.item6[data-v-71f4d4df]{width:5px;height:5px;background:#00f;border-radius:50%}.face[data-v-71f4d4df]:nth-child(1){justify-content:center;align-items:center;-webkit-transform:translateZ(50px);transform:translateZ(50px)}.face[data-v-71f4d4df]:nth-child(2){justify-content:space-around;align-items:center;-webkit-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px)}.face[data-v-71f4d4df]:nth-child(3){justify-content:space-around;align-items:center;flex-wrap:wrap;-webkit-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px)}.face[data-v-71f4d4df]:nth-child(4){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:rotateY(-90deg) translateZ(50px);transform:rotateY(-90deg) translateZ(50px)}.face:nth-child(4) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}.face[data-v-71f4d4df]:nth-child(5){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:rotateX(90deg) translateZ(50px);transform:rotateX(90deg) translateZ(50px)}.face:nth-child(5) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}.face[data-v-71f4d4df]:nth-child(6){flex-wrap:wrap;justify-content:center;align-items:center;-webkit-transform:translateZ(-50px);transform:translateZ(-50px)}.face:nth-child(6) .face_0[data-v-71f4d4df]{width:100px;height:25px;margin-top:10px;display:flex;justify-content:space-around}p[data-v-71f4d4df]{text-align:center}uni-button[data-v-71f4d4df]{background:red;color:#fff;width:60%}.view[data-v-71f4d4df]{font-weight:700;color:#fff;font-size:%?32?%;font-family:微软雅黑;margin-bottom:80px}', ""]),
        t.exports = e
    },
    "8aaa": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("f968")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    "8b28": function(t, e, a) {
        var i = a("0569");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("448496de", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "8c36": function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.draw-main[data-v-42b77800]{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;width:100%;height:100%}.draw-main .top[data-v-42b77800]{color:#fff;font-size:%?36?%;font-weight:700}.draw-main .center[data-v-42b77800]{padding-left:%?20?%;display:grid;grid-template-columns:repeat(3,1fr);\n  /* 三列，每列宽度平均分配 */grid-template-rows:repeat(3,%?300?%);\n  /* 三行，每行高度为 100px */gap:10px;\n  /* 单元格之间的间隔 */width:100%}.draw-main .center .father[data-v-42b77800]{position:relative;width:%?212?%;height:%?280?%;border-radius:4px;-webkit-perspective:%?1000?%;perspective:%?1000?%;display:flex;align-items:center;justify-content:center;transition:all .5s ease-in}.draw-main .center .father .shuffle[data-v-42b77800]{width:%?200?%;height:%?200?%;background:linear-gradient(to bottom left,#9f025e,#f9c929);line-height:%?200?%;font-weight:700;color:#fff}.draw-main .center .father .onshuffle[data-v-42b77800]{opacity:.4}.draw-main .center .father .back[data-v-42b77800]{position:absolute;top:0;width:100%;height:100%;background-image:linear-gradient(to bottom right,#27d8d5,#3e269d);-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:4px;-webkit-transform:rotateY(0deg);transform:rotateY(0deg);transition:all .8s ease-in\n  /* 背面不可见 */}.draw-main .center .father .back1[data-v-42b77800]{background-image:linear-gradient(to bottom right,#38a2d6,#551138)}.draw-main .center .father .back2[data-v-42b77800]{background-image:linear-gradient(to bottom right,#38a2d6,#ff0)}.draw-main .center .father .back3[data-v-42b77800]{background-image:linear-gradient(to bottom right,#38a2d6,red)}.draw-main .center .father .next[data-v-42b77800]{display:flex;justify-content:center;align-items:center;position:absolute;top:0;width:100%;height:100%;box-sizing:border-box;padding-left:5px;font-size:%?32?%;color:#fff;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);transition:all .8s ease-in;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:4px;background-color:rgba(44,49,60,.8);box-shadow:0 0 5px 5px rgba(44,49,60,.8)\n  /* 背面不可见 */}.draw-main .center .active .back[data-v-42b77800]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.draw-main .center .active .next[data-v-42b77800]{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}.draw-main .bottom[data-v-42b77800]{margin-bottom:%?100?%}.draw-main .bottom[data-v-42b77800] .onbtn{background-color:#ccc;color:#fff!important;box-shadow:0 0 5px #ccc,0 0 25px #ccc,0 0 50px #ccc,0 0 100px #ccc!important}', ""]),
        t.exports = e
    },
    9225: function(t, e, a) {
        var i = a("8c36");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("3e377337", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    a333: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {}
        ));
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return t.isShow || t.onceRender ? a("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShow,
                    expression: "isShow"
                }],
                ref: "ani",
                class: t.customClass,
                style: t.transformStyles,
                attrs: {
                    animation: t.animationData
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onClick.apply(void 0, arguments)
                    }
                }
            }, [t._t("default")], 2) : t._e()
        }
          , n = []
    },
    a43e: function(t) {
        t.exports = JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')
    },
    a457: function(t) {
        t.exports = JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')
    },
    a904: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("c528")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    a943: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var n = i(a("a43e"))
          , o = i(a("0484"))
          , s = i(a("a457"))
          , r = {
            en: n.default,
            "zh-Hans": o.default,
            "zh-Hant": s.default
        };
        e.default = r
    },
    a9fe: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("af5e")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    af5e: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("e9c4"),
        a("e25e"),
        a("a9e3");
        var n = i(a("5e36"))
          , o = i(a("eabf"))
          , s = i(a("e830"))
          , r = i(a("8345"))
          , c = i(a("d375"))
          , u = {
            components: {
                "aki-particles": n.default,
                "game-button": o.default,
                play: s.default,
                "draw-user": r.default
            },
            data: function() {
                return {
                    particlestyle: {
                        style: "akira",
                        zindex: 1,
                        bgcolor: "#000022"
                    },
                    showplay: !1,
                    gotodraw: !1,
                    every: "",
                    eunm1: null,
                    eunm2: null,
                    eunm3: null,
                    eunm4: null,
                    aaa: null,
                    tttt: null,
                    bbb: null,
                    ccc: 0,
                    ddd: "jafcja"
                }
            },
            onLoad: function() {
                uni.setStorageSync("every", JSON.stringify(c.default)),
                this.load(),
                this.ccc = this.flageee(),
                this.ddd = this.decrypt(this.ddd)
            },
            methods: {
                decrypt: function(t) {
                    for (var e = {
                        a: "0",
                        b: "1",
                        c: "2",
                        d: "3",
                        e: "4",
                        f: "5",
                        g: "6",
                        h: "7",
                        i: "8",
                        j: "9"
                    }, a = "", i = 0; i < t.length; i++) {
                        var n = t[i];
                        a += e[n]
                    }
                    return parseInt(a, 10)
                },
                onitem1: function() {
                    uni.reLaunch({
                        url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.basics), "&mode2=1")
                    })
                },
                load: function() {
                    var t = uni.getStorageSync("num1");
                    if (t) {
                        var e = uni.getStorageSync("num1")
                          , a = uni.getStorageSync("num2")
                          , i = uni.getStorageSync("num3")
                          , n = uni.getStorageSync("num4");
                        this.eunm1 = this.encryptNumber(e),
                        this.eunm2 = this.encryptNumber(a),
                        this.eunm3 = this.encryptNumber(i),
                        this.eunm4 = this.encryptNumber(n)
                    } else {
                        var o = this.generateRandomNumber()
                          , s = this.generateRandomNumber()
                          , r = this.generateRandomNumber()
                          , c = this.generateRandomNumber();
                        uni.setStorageSync("num1", o),
                        uni.setStorageSync("num2", s),
                        uni.setStorageSync("num3", r),
                        uni.setStorageSync("num4", c);
                        var u = uni.getStorageSync("num1")
                          , l = uni.getStorageSync("num2")
                          , d = uni.getStorageSync("num3")
                          , f = uni.getStorageSync("num4");
                        this.eunm1 = this.encryptNumber(u),
                        this.eunm2 = this.encryptNumber(l),
                        this.eunm3 = this.encryptNumber(d),
                        this.eunm4 = this.encryptNumber(f)
                    }
                },
                encryptNumber: function(t) {
                    var e = 85 ^ t;
                    return e
                },
                generateRandomNumber: function() {
                    return Math.floor(9e5 * Math.random()) + 1e5
                },
                dialogInputConfirm: function(t) {
                    var e = this
                      , a = Number(t);
                    if (this.ttt === a || a === this.ddd) {
                        uni.showToast({
                            title: "已永久解锁全部模式",
                            icon: "none",
                            duration: 2e3
                        });
                        var i = uni.getStorageSync("num1")
                          , n = uni.getStorageSync("num2")
                          , o = uni.getStorageSync("num3")
                          , s = uni.getStorageSync("num4");
                        return a === this.ddd ? (uni.setStorageSync("enum1", i),
                        uni.setStorageSync("enum2", n),
                        uni.setStorageSync("enum3", o),
                        void uni.setStorageSync("enum4", s)) : void (a === i ? (uni.setStorageSync("enum1", i),
                        uni.reLaunch({
                            url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.other), "&mode2=2")
                        })) : a === n ? (uni.setStorageSync("enum2", n),
                        uni.reLaunch({
                            url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.height), "&mode2=3")
                        })) : a === s ? (uni.setStorageSync("enum4", s),
                        console.log("a5"),
                        window.location.href = "http://xkgg.asia/h6") : (uni.setStorageSync("enum3", o),
                        uni.reLaunch({
                            url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.private), "&mode2=4")
                        })))
                    }
                    uni.showModal({
                        content: "    识别码错误 前往公中号发送我的      验证码".concat(this.bbb, "  换取识别码"),
                        showCancel: !1,
                        confirmText: "点击复制",
                        success: function() {
                            e.copyToClipboard("我的验证码".concat(e.bbb))
                        }
                    })
                },
                copyToClipboard: function(t) {
                    var e = document.createElement("textarea");
                    e.value = t,
                    document.body.appendChild(e),
                    e.select();
                    try {
                        document.execCommand("copy"),
                        uni.showToast({
                            title: "复制成功",
                            icon: "none"
                        })
                    } catch (a) {
                        uni.showToast({
                            title: "复制失败",
                            icon: "none"
                        })
                    }
                    document.body.removeChild(e)
                },
                onitem2: function() {
                    uni.reLaunch({
                        url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.house), "&mode2=1")
                    })
                },
                onitem3: function() {
                    this.ttt = uni.getStorageSync("num1");
                    var t = uni.getStorageSync("enum1");
                    t === this.ttt || this.ccc ? uni.reLaunch({
                        url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.other), "&mode2=2")
                    }) : (this.bbb = this.eunm1,
                    this.$refs.inputDialog.open())
                },
                onitem4: function() {
                    this.ttt = uni.getStorageSync("num2");
                    var t = uni.getStorageSync("enum2");
                    t === this.ttt || this.ccc ? uni.reLaunch({
                        url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.height), "&mode2=3")
                    }) : (this.bbb = this.eunm2,
                    this.$refs.inputDialog.open())
                },
                onitem5: function() {
                    this.ttt = uni.getStorageSync("num3");
                    var t = uni.getStorageSync("enum3");
                    t === this.ttt || this.ccc ? uni.reLaunch({
                        url: "/pages/selective-sex/selective-sex?mode=".concat(JSON.stringify(c.default.private), "&mode2=4")
                    }) : (this.bbb = this.eunm3,
                    this.$refs.inputDialog.open())
                },
                onitem6: function() {
                    this.ttt = uni.getStorageSync("num4");
                    var t = uni.getStorageSync("enum4");
                    if (t === this.ttt || this.ccc)
                        return window.location.href = "http://xkgg.asia/h6",
                        void console.log("a5");
                    this.bbb = this.eunm4,
                    this.$refs.inputDialog.open()
                },
                flageee: function() {
                    var t = uni.getStorageSync("num1")
                      , e = uni.getStorageSync("num2")
                      , a = uni.getStorageSync("num3")
                      , i = uni.getStorageSync("num4")
                      , n = uni.getStorageSync("enum1") || 1
                      , o = uni.getStorageSync("enum2") || 1
                      , s = uni.getStorageSync("enum3") || 1
                      , r = uni.getStorageSync("enum4") || 1
                      , c = t === n || e === o || a === s || i === r;
                    return c
                }
            }
        };
        e.default = u
    },
    b032: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("c975");
        var n = i(a("b13c"))
          , o = {
            name: "uniPopup",
            components: {
                keypress: n.default
            },
            emits: ["change", "maskClick"],
            props: {
                animation: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "center"
                },
                isMaskClick: {
                    type: Boolean,
                    default: null
                },
                maskClick: {
                    type: Boolean,
                    default: null
                },
                backgroundColor: {
                    type: String,
                    default: "none"
                },
                safeArea: {
                    type: Boolean,
                    default: !0
                },
                maskBackgroundColor: {
                    type: String,
                    default: "rgba(0, 0, 0, 0.4)"
                }
            },
            watch: {
                type: {
                    handler: function(t) {
                        this.config[t] && this[this.config[t]](!0)
                    },
                    immediate: !0
                },
                isDesktop: {
                    handler: function(t) {
                        this.config[t] && this[this.config[this.type]](!0)
                    },
                    immediate: !0
                },
                maskClick: {
                    handler: function(t) {
                        this.mkclick = t
                    },
                    immediate: !0
                },
                isMaskClick: {
                    handler: function(t) {
                        this.mkclick = t
                    },
                    immediate: !0
                },
                showPopup: function(t) {
                    document.getElementsByTagName("body")[0].style.overflow = t ? "hidden" : "visible"
                }
            },
            data: function() {
                return {
                    duration: 300,
                    ani: [],
                    showPopup: !1,
                    showTrans: !1,
                    popupWidth: 0,
                    popupHeight: 0,
                    config: {
                        top: "top",
                        bottom: "bottom",
                        center: "center",
                        left: "left",
                        right: "right",
                        message: "top",
                        dialog: "center",
                        share: "bottom"
                    },
                    maskClass: {
                        position: "fixed",
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    },
                    transClass: {
                        position: "fixed",
                        left: 0,
                        right: 0
                    },
                    maskShow: !0,
                    mkclick: !0,
                    popupstyle: this.isDesktop ? "fixforpc-top" : "top"
                }
            },
            computed: {
                isDesktop: function() {
                    return this.popupWidth >= 500 && this.popupHeight >= 500
                },
                bg: function() {
                    return "" === this.backgroundColor || "none" === this.backgroundColor ? "transparent" : this.backgroundColor
                }
            },
            mounted: function() {
                var t = this;
                (function() {
                    var e = uni.getSystemInfoSync()
                      , a = e.windowWidth
                      , i = e.windowHeight
                      , n = e.windowTop
                      , o = e.safeArea
                      , s = (e.screenHeight,
                    e.safeAreaInsets);
                    t.popupWidth = a,
                    t.popupHeight = i + (n || 0),
                    o && t.safeArea ? t.safeAreaInsets = s.bottom : t.safeAreaInsets = 0
                }
                )()
            },
            destroyed: function() {
                this.setH5Visible()
            },
            created: function() {
                null === this.isMaskClick && null === this.maskClick ? this.mkclick = !0 : this.mkclick = null !== this.isMaskClick ? this.isMaskClick : this.maskClick,
                this.animation ? this.duration = 300 : this.duration = 0,
                this.messageChild = null,
                this.clearPropagation = !1,
                this.maskClass.backgroundColor = this.maskBackgroundColor
            },
            methods: {
                setH5Visible: function() {
                    document.getElementsByTagName("body")[0].style.overflow = "visible"
                },
                closeMask: function() {
                    this.maskShow = !1
                },
                disableMask: function() {
                    this.mkclick = !1
                },
                clear: function(t) {
                    t.stopPropagation(),
                    this.clearPropagation = !0
                },
                open: function(t) {
                    if (!this.showPopup) {
                        t && -1 !== ["top", "center", "bottom", "left", "right", "message", "dialog", "share"].indexOf(t) || (t = this.type),
                        this.config[t] ? (this[this.config[t]](),
                        this.$emit("change", {
                            show: !0,
                            type: t
                        })) : console.error("缺少类型：", t)
                    }
                },
                close: function(t) {
                    var e = this;
                    this.showTrans = !1,
                    this.$emit("change", {
                        show: !1,
                        type: this.type
                    }),
                    clearTimeout(this.timer),
                    this.timer = setTimeout((function() {
                        e.showPopup = !1
                    }
                    ), 300)
                },
                touchstart: function() {
                    this.clearPropagation = !1
                },
                onTap: function() {
                    this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"),
                    this.mkclick && this.close())
                },
                top: function(t) {
                    var e = this;
                    this.popupstyle = this.isDesktop ? "fixforpc-top" : "top",
                    this.ani = ["slide-top"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        backgroundColor: this.bg
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0,
                    this.$nextTick((function() {
                        e.messageChild && "message" === e.type && e.messageChild.timerClose()
                    }
                    )))
                },
                bottom: function(t) {
                    this.popupstyle = "bottom",
                    this.ani = ["slide-bottom"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        paddingBottom: this.safeAreaInsets + "px",
                        backgroundColor: this.bg
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                center: function(t) {
                    this.popupstyle = "center",
                    this.ani = ["zoom-out", "fade"],
                    this.transClass = {
                        position: "fixed",
                        display: "flex",
                        flexDirection: "column",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                left: function(t) {
                    this.popupstyle = "left",
                    this.ani = ["slide-left"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        bottom: 0,
                        top: 0,
                        backgroundColor: this.bg,
                        display: "flex",
                        flexDirection: "column"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                right: function(t) {
                    this.popupstyle = "right",
                    this.ani = ["slide-right"],
                    this.transClass = {
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        top: 0,
                        backgroundColor: this.bg,
                        display: "flex",
                        flexDirection: "column"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                }
            }
        };
        e.default = o
    },
    b13c: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("7db0"),
        a("d3b7"),
        a("b64b"),
        a("caad"),
        a("2532");
        var i = {
            name: "Keypress",
            props: {
                disable: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                var t = this
                  , e = {
                    esc: ["Esc", "Escape"],
                    tab: "Tab",
                    enter: "Enter",
                    space: [" ", "Spacebar"],
                    up: ["Up", "ArrowUp"],
                    left: ["Left", "ArrowLeft"],
                    right: ["Right", "ArrowRight"],
                    down: ["Down", "ArrowDown"],
                    delete: ["Backspace", "Delete", "Del"]
                };
                document.addEventListener("keyup", (function(a) {
                    if (!t.disable) {
                        var i = Object.keys(e).find((function(t) {
                            var i = a.key
                              , n = e[t];
                            return n === i || Array.isArray(n) && n.includes(i)
                        }
                        ));
                        i && setTimeout((function() {
                            t.$emit(i, {})
                        }
                        ), 0)
                    }
                }
                ))
            },
            render: function() {}
        };
        e.default = i
    },
    b907: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("0725")
          , n = a("f46c");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("39cb");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "56681c50", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    c473: function(t, e, a) {
        "use strict";
        var i = a("c71a")
          , n = a.n(i);
        n.a
    },
    c528: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var n = i(a("2909"))
          , o = i(a("53ca"))
          , s = i(a("5530"));
        a("a9e3"),
        a("d3b7"),
        a("159b"),
        a("99af"),
        a("ac1f"),
        a("5319");
        var r = a("0c9c")
          , c = {
            name: "uniTransition",
            emits: ["click", "change"],
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                modeClass: {
                    type: [Array, String],
                    default: function() {
                        return "fade"
                    }
                },
                duration: {
                    type: Number,
                    default: 300
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                customClass: {
                    type: String,
                    default: ""
                },
                onceRender: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    transform: "",
                    opacity: 1,
                    animationData: {},
                    durationTime: 300,
                    config: {}
                }
            },
            watch: {
                show: {
                    handler: function(t) {
                        t ? this.open() : this.isShow && this.close()
                    },
                    immediate: !0
                }
            },
            computed: {
                stylesObject: function() {
                    var t = (0,
                    s.default)((0,
                    s.default)({}, this.styles), {}, {
                        "transition-duration": this.duration / 1e3 + "s"
                    })
                      , e = "";
                    for (var a in t) {
                        var i = this.toLine(a);
                        e += i + ":" + t[a] + ";"
                    }
                    return e
                },
                transformStyles: function() {
                    return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject
                }
            },
            created: function() {
                this.config = {
                    duration: this.duration,
                    timingFunction: "ease",
                    transformOrigin: "50% 50%",
                    delay: 0
                },
                this.durationTime = this.duration
            },
            methods: {
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.duration && (this.durationTime = t.duration),
                    this.animation = (0,
                    r.createAnimation)(Object.assign(this.config, t), this)
                },
                onClick: function() {
                    this.$emit("click", {
                        detail: this.isShow
                    })
                },
                step: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.animation) {
                        for (var a in t)
                            try {
                                var i;
                                if ("object" === (0,
                                o.default)(t[a]))
                                    (i = this.animation)[a].apply(i, (0,
                                    n.default)(t[a]));
                                else
                                    this.animation[a](t[a])
                            } catch (s) {
                                console.error("方法 ".concat(a, " 不存在"))
                            }
                        return this.animation.step(e),
                        this
                    }
                },
                run: function(t) {
                    this.animation && this.animation.run(t)
                },
                open: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.transform = "",
                    this.isShow = !0;
                    var e = this.styleInit(!1)
                      , a = e.opacity
                      , i = e.transform;
                    "undefined" !== typeof a && (this.opacity = a),
                    this.transform = i,
                    this.$nextTick((function() {
                        t.timer = setTimeout((function() {
                            t.animation = (0,
                            r.createAnimation)(t.config, t),
                            t.tranfromInit(!1).step(),
                            t.animation.run(),
                            t.$emit("change", {
                                detail: t.isShow
                            })
                        }
                        ), 20)
                    }
                    ))
                },
                close: function(t) {
                    var e = this;
                    this.animation && this.tranfromInit(!0).step().run((function() {
                        e.isShow = !1,
                        e.animationData = null,
                        e.animation = null;
                        var t = e.styleInit(!1)
                          , a = t.opacity
                          , i = t.transform;
                        e.opacity = a || 1,
                        e.transform = i,
                        e.$emit("change", {
                            detail: e.isShow
                        })
                    }
                    ))
                },
                styleInit: function(t) {
                    var e = this
                      , a = {
                        transform: ""
                    }
                      , i = function(t, i) {
                        "fade" === i ? a.opacity = e.animationType(t)[i] : a.transform += e.animationType(t)[i] + " "
                    };
                    return "string" === typeof this.modeClass ? i(t, this.modeClass) : this.modeClass.forEach((function(e) {
                        i(t, e)
                    }
                    )),
                    a
                },
                tranfromInit: function(t) {
                    var e = this
                      , a = function(t, a) {
                        var i = null;
                        "fade" === a ? i = t ? 0 : 1 : (i = t ? "-100%" : "0",
                        "zoom-in" === a && (i = t ? .8 : 1),
                        "zoom-out" === a && (i = t ? 1.2 : 1),
                        "slide-right" === a && (i = t ? "100%" : "0"),
                        "slide-bottom" === a && (i = t ? "100%" : "0")),
                        e.animation[e.animationMode()[a]](i)
                    };
                    return "string" === typeof this.modeClass ? a(t, this.modeClass) : this.modeClass.forEach((function(e) {
                        a(t, e)
                    }
                    )),
                    this.animation
                },
                animationType: function(t) {
                    return {
                        fade: t ? 1 : 0,
                        "slide-top": "translateY(".concat(t ? "0" : "-100%", ")"),
                        "slide-right": "translateX(".concat(t ? "0" : "100%", ")"),
                        "slide-bottom": "translateY(".concat(t ? "0" : "100%", ")"),
                        "slide-left": "translateX(".concat(t ? "0" : "-100%", ")"),
                        "zoom-in": "scaleX(".concat(t ? 1 : .8, ") scaleY(").concat(t ? 1 : .8, ")"),
                        "zoom-out": "scaleX(".concat(t ? 1 : 1.2, ") scaleY(").concat(t ? 1 : 1.2, ")")
                    }
                },
                animationMode: function() {
                    return {
                        fade: "opacity",
                        "slide-top": "translateY",
                        "slide-right": "translateX",
                        "slide-bottom": "translateY",
                        "slide-left": "translateX",
                        "zoom-in": "scale",
                        "zoom-out": "scale"
                    }
                },
                toLine: function(t) {
                    return t.replace(/([A-Z])/g, "-$1").toLowerCase()
                }
            }
        };
        e.default = c
    },
    c6c5: function(t, e, a) {
        var i = a("0c7f");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("604b6d6e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c71a: function(t, e, a) {
        var i = a("0190");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var n = a("4f06").default;
        n("209e2a24", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    d163: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("33a7")
          , n = a("f194");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("49b4");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "71f4d4df", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    d375: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            basics: {
                man: ["再抽一次", "轻轻的在女生耳朵边吹气10下", "在镜子前拥吻", "亲吻女生脸脖子锁骨", "男生躺下女生给按摩1分钟", "男生按着腿女生做5个仰卧起坐，每次起来亲一口", "两人钻进被窝里亲亲", "双方对视20秒", "当天一起洗澡", "撅起PP，让女生打10下", "互相拥抱1分钟，并且抚摸对方PP", "闭上眼睛让女生为所欲为1分钟", "亲吻女生的脸颊", "与对方舌吻30秒", "轻揉女生PP", "脱掉女生指定的衣服", "和对方法式湿吻20秒", "脱掉自己一件衣服", "单膝下跪亲吻对方的手", "抚摸女生的大腿30秒", "亲亲对方🐻30秒", "背对对方扭动屁股", "买一个情趣用品", "什么都不做", "脱掉女生一件衣服", "轻舔女生的耳垂10秒钟", "用冰块在女生身上轻轻滑动，直到溶化", "给女生一个轻柔的脚部按摩，持续2分钟", "自己展示一种姓感的舞蹈，持续1分钟", "用丝巾或者眼罩绑住女生的眼睛，进行一个感官探索游戏", "一起观看一部情色电影或者阅读一本情趣小说，然后聊聊感受", "制作一个属于你们两人的姓爱指南，包括喜好、愿望和界限", "在户外找一个安静的地方，亲吻女生的全身，同时享受大自然的美景", "自己使用食物进行亲吻和舔舐，例如巧克力酱或者生果", "用舌尖轻轻刺激女生耳朵", "轻轻咬住女生的耳垂", "为女生做一个放松的肩部按摩", "闭上眼睛，让女生为你做任何事情一分钟", "轻轻揉捏女生的PP", "根据女生指定，脱掉任意一件衣服", "温柔地抚摸女生的🐻部30秒", "相互用手掌轻轻触摸对方的敏感部位", "用冰块在女生身上滑动30秒", "用口红在女生身上写下甜蜜的留言", "女生穿上情趣内衣，给男生一个思密的时刻表演", "为女生唱一首歌或朗诵一段情诗", "模仿男生的声音和样子，玩起角色扮演游戏", "在阳台或花园里果露一会儿，享受自然的触感", "男生接下来用眼罩绑住眼睛"],
                woman: ["再抽一次", "谢谢惠顾", "轻轻的在男生耳朵边吹气10下", "在镜子前拥吻", "依次亲吻对方脸脖子锁骨", "女生躺下让男生按摩1分钟", "男生将女生压在身下做十个俯卧撑", "两人钻进被窝里亲亲", "双方对视20秒", "当天一起洗澡", "女生撅起PP，让男生打10下", "互相拥抱1分钟，并且抚摸对方PP", "男生公主抱女生，并坚持15秒", "闭上眼睛让男生为所欲为1分钟", "亲吻男生的脸颊", "与男生舌吻30秒", "轻揉对方PP", "脱掉男生指定的衣服", "轻轻抚摸对方🐻30秒", "和男生法式湿吻20秒", "脱掉自己一件衣服", "单膝下跪亲吻男生的手", "抚摸男生的大腿30秒", "亲亲男生🐻30秒", "背对男生扭动屁股", "买一个情趣用品", "什么都不做", "脱掉一件衣服", "轻舔男生的耳垂10秒钟", "用冰块在男生身上轻轻滑动，直到溶化", "给男生一个轻柔的脚部按摩，持续2分钟", "自己展示一种姓感的舞蹈，持续1分钟", "用丝巾或者眼罩绑住男生的眼睛，进行一个感官探索游戏", "一起观看一部情色电影或者阅读一本情趣小说，然后聊聊感受", "在户外找一个安静的地方，亲吻对方的全身，同时享受大自然的美景", "使用食物进行亲吻和舔舐，例如巧克力酱或者生果", "用舌尖轻轻刺激男生耳朵", "轻轻咬住男生的耳垂", "为男生做一个放松的肩部按摩", "闭上眼睛，让男生为你做任何事情一分钟", "轻轻揉捏男生的PP", "根据男生指定，脱掉任意一件衣服", "温柔地抚摸对方的🐻部30秒", "相互用手掌轻轻触摸对方的敏感部位", "用冰块在男生身上滑动30秒", "用口红在男生身上写下甜蜜的留言", "穿上情趣内衣，给对方一个思密的时刻表演", "为对方唱一首歌或朗诵一段情诗", "模仿女生的声音和样子，玩起角色扮演游戏", "在阳台或花园里果露一会儿，享受自然的触感", "女生接下来用眼罩绑住眼睛"]
            },
            house: {
                man: ["再抽一次", "谢谢惠顾", "学猫叫三声", "一起恶搞自拍", "给对方说悄悄话", "给对方按小腿1分钟", "对视5秒", "喂对方喝水", "手牵手30秒", "拥抱30秒", "对视5秒", "尝试接吻的感觉", "说说初次见面的感受", "手牵手一分钟", "对方闭上眼睛给你涂口红", "一起给对方按摩", "猪八戒背媳妇", "摸对方耳朵2秒", "摸对方头10秒", "给对方唱首歌", "一起喝一杯水", "尝试接吻的感觉", "拍一段表白的视频留作纪念", "给对方梳头发", "对方站着自己跪着喂食物", "给对方按摩捶背1分钟", "学猫叫三声", "亲吻对方手背30秒", "拥抱一分钟", "对视5秒", "一起恶搞自拍", "亲吻一下对方的手", "【惩罚】被挠痒痒30秒", "从背后抱对方1分钟", "亲吻对方额头"],
                woman: ["再抽一次", "谢谢惠顾", "学猫叫三声", "一起恶搞自拍", "给对方说悄悄话", "给对方按小腿1分钟", "对视5秒", "喂对方喝水", "手牵手30秒", "拥抱30秒", "对视5秒", "尝试接吻的感觉", "说说初次见面的感受", "手牵手一分钟", "对方闭上眼睛给你涂口红", "一起给对方按摩", "猪八戒背媳妇", "摸对方耳朵2秒", "摸对方头10秒", "给对方唱首歌", "一起喝一杯水", "尝试接吻的感觉", "拍一段表白的视频留作纪念", "给对方梳头发", "对方站着自己跪着喂食物", "给对方按摩捶背1分钟", "学猫叫三声", "亲吻对方手背30秒", "拥抱一分钟", "对视5秒", "一起恶搞自拍", "亲吻一下对方的手", "【惩罚】被挠痒痒30秒", "从背后抱对方1分钟", "亲吻对方额头"]
            },
            other: {
                man: ["再抽一次", "谢谢惠顾", "女生拍张大脸自拍发给你", "女生连麦唱首歌", "一起去看个电影", "女生拍张腿照", "女生露点照片", "互相视频自卫", "女生明天早上发10条消息", "女生发语音说爱你", "女生拍张腿照", "女生拍个跳舞视频", "女生给一张全身照片", "叫给你听", "女生语音叫爸爸", "网恋两个月", "讲故事哄睡觉", "女生给男生发早安和晚安的信息。", "女生经常给男生打电话或视频通话。", "女生记得男生的生日和重要纪念日。", "女生经常向男生表达爱意和关心。", "女生给男生寄送小礼物和惊喜。", "女生在男生生病或难过时安慰男生。", "女生在男生需要帮助时提供支持。", "女生与男生分享自己的生活和心情。", "女生帮男生处理繁忙的事务和琐事。", "女生在男生感到孤独时陪伴男生。", "女生为男生做男生喜欢的饭菜。", "女生安排浪漫的远程约会。", "女生写情书或长文表达对男生的感情。", "女生给男生取温暖的昵称。", "女生在男生疲惫时为男生放松按摩。", "女生鼓励男生追求自己的梦想。", "女生与男生一起规划未来。", "女生给男生制定锻炼计划并鼓励男生锻炼。", "女生对男生的照片和自拍发出赞美。", "女生陪伴男生看男生喜欢的电影或剧集。", "女生组织网上聚会邀请男生的朋友们。", "女生学习男生喜欢的兴趣爱好。", "女生在男生生日时为男生制作特制的视频。", "女生组织网上游戏夜。", "女生给男生送上美好的祝福语。", "女生对男生的成就和进步表示赞赏。", "女生偶尔寄一张写满爱意的明信片。", "女生为男生的问题提供实质姓的建议。", "女生在男生害怕时给予勇气和支持。", "女生为男生唱一首心爱的歌曲。", "女生在男生的社交媒体上留下温馨评论。", "女生跟男生一起学习一门新技能。", "女生在男生不开心时逗男生笑。", "女生安排网上一起观看日落。", "女生与男生分享自己的烹饪心得。", "女生鼓励男生尝试新的事物和经历。", "女生在男生生日时为男生订制丹糕。", "女生给男生提供放松和冥想的方法。", "女生分享有趣的互联网迷因和笑话。", "女生在男生感到无助时给予指引。", "女生为男生的梦想制定实现计划。", "女生组织线上的 Überraschung（惊喜）活动。", "女生对男生的家人和朋友表示关心。", "女生陪伴男生玩男生喜欢的在线游戏。", "女生向男生学习男生擅长的事情。", "女生鼓励男生写日记或博客表达情感。", "女生在男生感到困惑时给予支持和建议。", "女生为男生安排远程影院之夜。", "女生记录下你们的美好回忆和时刻。", "女生在男生需要鼓励时鼓励男生。", "女生在男生生病时照顾男生的饮食和健康。", "女生给男生分享你生活中的小惊喜。", "女生在男生工作疲劳时为男生放松按摩。", "女生为男生准备一份特殊的生日礼物。", "女生陪她一起进行线上购物。", "女生在男生的成功上为男生庆祝。", "女生通过线上游戏一起挑战彼此。", "女生送男生一份感谢男生的礼物。", "女生通过相互阅读书籍增进交流。", "女生为男生制定健康饮食计划。", "女生写情书或诗歌向男生表白。", "女生为男生定制特殊的音乐列表。", "女生为男生准备一个视频相册。", "女生鼓励男生参加线上学习课程。", "女生向男生分享鼓舞人心的故事。", "女生安排线上一起煮一顿丰盛的晚餐。", "女生为男生提供解决问题的方法。", "女生参加男生线上举办的活动。", "女生在男生不开心时陪伴男生倾听。", "女生陪伴男生一起观看男生喜欢的演唱会。", "女生为男生准备一个专属的网站或博客。", "女生对男生的美貌和魅力表示欣赏。", "女生给男生送上一束线上的鲜花。", "女生在男生疲惫时为男生做一个spa。", "女生为男生制定健康锻炼计划。", "女生给男生送上一封感谢信。", "女生为男生做一个线上的庆祝活动。", "女生向男生学习线上绘画和手工艺。", "女生为男生准备一个线上的游戏之夜。", "女生在男生害怕时给予勇气。", "女生为男生制作一个线上的相册。", "女生安排一个线上的看星星之夜。", "女生在男生感到失落时安慰男生。", "女生在男生感到紧张时鼓励男生。", "女生陪伴男生线上一起做瑜伽。", "女生为男生制定线上旅行计划。", "女生在男生需要学习时与男生一起学习。", "女生给男生准备一份线上的美食之旅。", "女生为男生制定线上自我成长计划。", "女生陪伴男生一起观看线上音乐会。", "女生给男生准备一份线上的冒险之旅。", "女生在男生生气时耐心倾听。", "女生为男生定制一份线上的惊喜。", "女生为男生做一个线上的丹糕制作活动。", "女生在男生感到焦虑时为男生放松训练。", "女生给男生送上一份线上的美容套装。", "女生为男生制定线上阅读计划。", "女生陪伴男生线上一起看电影。", "女生在男生感到挫折时为男生打气。", "女生为男生准备一份线上的养生礼包。", "女生为男生制定线上冥想和放松计划。", "女生陪伴男生线上一起练习舞蹈。", "女生为男生做一个线上的时尚秀。", "女生在男生感到孤独时陪伴男生。"],
                woman: ["再抽一次", "谢谢惠顾", "男生语音喊妈妈", "一张男生的普通照片", "一张男生思密照片（不打码）", "男生点一杯奈茶", "男生自卫视频", "一起去抖音一起刷", "一起看线上电影院", "男生发语音我爱你", "男生明天早上先发10条消息", "男生买个礼物", "男生做一个礼物", "男生写个情书", "男生做个摩天轮", "网恋两个月", "讲故事哄睡觉", "男生给女生发早安和晚安的信息。", "男生经常给女生打电话或视频通话。", "男生记得女生的生日和重要纪念日。", "男生经常向女生表达爱意和关心。", "男生给女生寄送小礼物和惊喜。", "男生在女生生病或难过时安慰女生。", "男生在女生需要帮助时提供支持。", "男生与女生分享自己的生活和心情。", "男生帮女生处理繁忙的事务和琐事。", "男生在女生感到孤独时陪伴女生。", "男生为女生做女生喜欢的饭菜。", "男生安排浪漫的远程约会。", "男生写情书或长文表达对女生的感情。", "男生给女生取温暖的昵称。", "男生在女生疲惫时为女生放松按摩。", "男生鼓励女生追求自己的梦想。", "男生与女生一起规划未来。", "男生给女生制定锻炼计划并鼓励女生锻炼。", "男生对女生的照片和自拍发出赞美。", "男生陪伴女生看女生喜欢的电影或剧集。", "男生组织网上聚会邀请女生的朋友们。", "男生学习女生喜欢的兴趣爱好。", "男生在女生生日时为女生制作特制的视频。", "男生组织网上游戏夜。", "男生给女生送上美好的祝福语。", "男生对女生的成就和进步表示赞赏。", "男生偶尔寄一张写满爱意的明信片。", "男生为女生的问题提供实质姓的建议。", "男生在女生害怕时给予勇气和支持。", "男生为女生唱一首心爱的歌曲。", "男生在女生的社交媒体上留下温馨评论。", "男生跟女生一起学习一门新技能。", "男生在女生不开心时逗女生笑。", "男生安排网上一起观看日落。", "男生与女生分享自己的烹饪心得。", "男生鼓励女生尝试新的事物和经历。", "男生在女生生日时为女生订制丹糕。", "男生给女生提供放松和冥想的方法。", "男生分享有趣的互联网迷因和笑话。", "男生在女生感到无助时给予指引。", "男生为女生的梦想制定实现计划。", "男生组织线上的 Überraschung（惊喜）活动。", "男生对女生的家人和朋友表示关心。", "男生陪伴女生玩女生喜欢的在线游戏。", "男生向女生学习女生擅长的事情。", "男生鼓励女生写日记或博客表达情感。", "男生在女生感到困惑时给予支持和建议。", "男生为女生安排远程影院之夜。", "男生记录下你们的美好回忆和时刻。", "男生在女生需要鼓励时鼓励女生。", "男生在女生生病时照顾女生的饮食和健康。", "男生给女生分享你生活中的小惊喜。", "男生在女生工作疲劳时为女生放松按摩。", "男生为女生准备一份特殊的生日礼物。", "男生陪女生一起进行线上购物。", "男生在女生的成功上为女生庆祝。", "男生通过线上游戏一起挑战彼此。", "男生送女生一份感谢女生的礼物。", "男生通过相互阅读书籍增进交流。", "男生为女生制定健康饮食计划。", "男生写情书或诗歌向女生表白。", "男生为女生定制特殊的音乐列表。", "男生为女生准备一个视频相册。", "男生鼓励女生参加线上学习课程。", "男生向女生分享鼓舞人心的故事。", "男生安排线上一起煮一顿丰盛的晚餐。", "男生为女生提供解决问题的方法。", "男生参加女生线上举办的活动。", "男生在女生不开心时陪伴女生倾听。", "男生陪伴女生一起观看女生喜欢的演唱会。", "男生为女生准备一个专属的网站或博客。", "男生对女生的美貌和魅力表示欣赏。", "男生给女生送上一束线上的鲜花。", "男生在女生疲惫时为女生做一个spa。", "男生为女生制定健康锻炼计划。", "男生给女生送上一封感谢信。", "男生为女生做一个线上的庆祝活动。", "男生向女生学习线上绘画和手工艺。", "男生为女生准备一个线上的游戏之夜。", "男生在女生害怕时给予勇气。", "男生为女生制作一个线上的相册。", "男生安排一个线上的看星星之夜。", "男生在女生感到失落时安慰女生。", "男生在女生感到紧张时鼓励女生。", "男生陪伴女生线上一起做瑜伽。", "男生为女生制定线上旅行计划。", "男生在女生需要学习时与女生一起学习。", "男生给女生准备一份线上的美食之旅。", "男生为女生制定线上自我成长计划。", "男生陪伴女生一起观看线上音乐会。", "男生给女生准备一份线上的冒险之旅。", "男生在女生生气时耐心倾听。", "男生为女生定制一份线上的惊喜。", "男生为女生做一个线上的丹糕制作活动。", "男生在女生感到焦虑时为女生放松训练。", "男生给女生送上一份线上的美容套装。", "男生为女生制定线上阅读计划。", "男生陪伴女生线上一起看电影。", "男生在女生感到挫折时为女生打气。", "男生为女生准备一份线上的养生礼包。", "男生为女生制定线上冥想和放松计划。", "男生陪伴女生线上一起练习舞蹈。", "男生为女生做一个线上的时尚秀。", "男生在女生感到孤独时陪伴女生。"]
            },
            height: {
                man: ["再抽一次", "谢谢惠顾", "帮对手含住丹丹或荫帝10秒舌头打转", "【惩罚】撅起PP让对方打3下", "【福利】对方给你口指定部位一分钟", "涂上油🐻对🐻帮对手推🐻30秒", "舔对手的丝足或手指10秒", "脱光衣服[或穿情趣内衣]", "和对手湿吻10秒", "吸吮对方手指10秒", "女穿情超内衣,男舔对方后背1分钟", "被对手用牙齿咬住茹头磨蹭10秒", "【福利】对方含着水在你身上亲吻30秒", "用嘴含住对手丹丹或荫帝10秒", "从背后伸手过来揉🐻30秒", "后入进出20次不许蛇", "跟对方茹交30秒", "被对方用牙齿咬住茹头磨蹭10秒", "将酸奈倒在对方茹头并舔干净吃掉", "揉对方🐻3下或轻咬对方耳垂5下", "想尽办法弄对手勃起或流水", "后入进茹20次并拍视频留念", "拍一段给对方口的视频15秒", "男方站立抱起女方悬空进茹20次不许蛇", "对着镜子拍揉🐻视频10秒", "用🐻或者积极蹭对方的脸10秒", "舔对方的脖子到🐻30秒", "观音坐莲30秒运动不许蛇", "【福利】对方舔你身上的各个部位1分钟", "【福利】对手帮你舔全身各个部位2分钟", "用嘴含住对手丹丹或荫帝30秒", "被对手用积极打脸3下或B蹭脸10秒", "用手扣自己虾面1分钟，或lu30下", "口含热水给对手进行口30秒", "拍一段和对方爱爱的视频", "口含冰水或冰块给对手进行口30秒", "对方站着自己跪着他（她）口1分钟", "后入进出20次不许蛇", "相互拥抱并热情亲吻30秒", "观音坐莲30秒运动不许蛇", "对着镜子啪啪后入1分钟不许蛇", "带上眼罩任由对方处置30秒", "相互摸对方虾面1分钟", "女生脱光穿上黑色丝袜", "【福利】对方含水或果冻亲吻全身1分钟", "躺在床上任由对方抚摸30秒", "躺下享受被对方舔遍全身1分钟", "男方站立抱起女方悬空进茹20次不许蛇", "撅起PP让对方打5下", "69式相互口交1分钟", "从背后伸手过来揉🐻30秒并磨蹭虾面", "边进茹边打对方屁股30秒", "带上眼罩让TA舔任意部位一分钟", "边亲吻TA🐻部边爱抚TA思处", "嘴里含酸奈流出来让TA舔干净", "用tiao丹按摩对方思处一分钟", "男用积极磨蹭女生虾面一分钟（禁止进入)", "按住TA头帮自己舔任意部位30秒", "让TA穿上内库后舔勃起/出水", "女用虾面为男生积极按摩一分钟", "女生涂润滑油给TA按摩积极", "积极涂满奈油让女生舌舔干净", "撅起PP让TA吸吮B30秒", "虾面滴满蜂蜜让男生舌舔干净", "带眼罩含着TA虾面舌头打转30秒", "带上项圈被TA牵着绳子口交30秒", "拴上十字扣进出一分钟不许蛇", "女坐男脸上让TA舌舔思处一分钟", "手脚拷上让TA摧残30秒", "屁股填涂润滑油让TA边插边揉拍到泛红", "给TA带上口球或tiao丹挑逗一分钟", "用捆绳捆住TA用皮鞭抽15秒", "坐到TA脸上让TA吸吮30秒", "女生含住龟头吸吮一分钟然后咬一下", "带上眼罩被TA无情任意宰割", "用黄瓜为女生按摩并测量下女生虾面温度", "男用龟头绕女生蜜穴口正反画圈按摩（禁止进入）", "跪着张开嘴让TA虾面磨蹭30秒", "拴绳跪在TA面前口交30秒", "亲吻TA指定位置一分钟", "女拨开荫唇求TA舔一分钟", "男边吸吮荫帝边用手进出", "吸吮TA脚指头30秒", "酸奈倒🐻部至虾面让TA舌舔干净", "🐻夹铃铛后入进出一分钟", "捆绑拉倒卫生间淋湿", "带上项圈牵到门口抠一分钟", "后入式，边用皮鞭抽屁股一分钟", "穿上丝袜跪下让TA撕开丝袜进出30秒", "全身涂润滑油然后观音坐莲", "女生双手涂润滑油交替快速lu管", "男撅起积极被女生强行坐入反复10次", "被TA随意指定一项任务", "皮鞭抽🐻10下", "让他嘴夹铃铛口交30秒", "按在地板上进出30秒", "绑在椅子上紫薇给他看", "女张开嘴巴被男进出一分钟", "男用积极磨蹭女生虾面一分钟（禁止进入）", "帮TA含丹丹或荫帝10秒舌头打转", "涂润滑油按摩TA思处3分钟", "从额头一直往虾面舔", "男后入女生喊口令（1、2、1）男听令行事"],
                woman: ["再抽一次", "谢谢惠顾", "帮对手含住丹丹或荫帝10秒舌头打转", "【惩罚】撅起PP让对方打3下", "【福利】对方给你口指定部位一分钟", "涂上油🐻对🐻帮对手推🐻30秒", "舔对手的丝足或手指10秒", "脱光衣服[或穿情趣内衣]", "和对手湿吻10秒", "吸吮对方手指10秒", "女穿情超内衣,男舔对方后背1分钟", "被对手用牙齿咬住茹头磨蹭10秒", "【福利】对方含着水在你身上亲吻30秒", "用嘴含住对手丹丹或荫帝10秒", "从背后伸手过来揉🐻30秒", "后入进出20次不许蛇", "跟对方茹交30秒", "被对方用牙齿咬住茹头磨蹭10秒", "将酸奈倒在对方茹头并舔干净吃掉", "揉对方🐻3下或轻咬对方耳垂5下", "想尽办法弄对手勃起或流水", "后入进茹20次并拍视频留念", "拍一段给对方口的视频15秒", "男方站立抱起女方悬空进茹20次不许蛇", "对着镜子拍揉🐻视频10秒", "用🐻或者积极蹭对方的脸10秒", "舔对方的脖子到🐻30秒", "观音坐莲30秒运动不许蛇", "【福利】对方舔你身上的各个部位1分钟", "【福利】对手帮你舔全身各个部位2分钟", "用嘴含住对手丹丹或荫帝30秒", "被对手用积极打脸3下或B蹭脸10秒", "用手扣自己虾面1分钟，或lu30下", "口含热水给对手进行口30秒", "拍一段和对方爱爱的视频", "口含冰水或冰块给对手进行口30秒", "对方站着自己跪着帮他（她）口1分钟", "后入进出20次不许蛇", "相互拥抱并热情亲吻30秒", "观音坐莲30秒运动不许蛇", "对着镜子啪啪后入1分钟不许蛇", "带上眼罩任由对方处置30秒", "相互摸对方虾面1分钟", "女生脱光穿上黑色丝袜", "【福利】对方含水或果冻亲吻全身1分钟", "躺在床上任由对方抚摸30秒", "躺下享受被对方舔遍全身1分钟", "男方站立抱起女方悬空进茹20次不许蛇", "撅起PP让对方打5下", "69式相互口交1分钟", "从背后伸手过来揉🐻30秒并磨蹭虾面", "边进茹边打对方屁股30秒", "脱掉对方一条内库", "带上眼罩让TA舔任意部位一分钟", "边亲吻TA🐻部边爱抚TA思处", "嘴里含酸奈流出来让TA舔干净", "用tiao丹按摩对方思处一分钟", "男用积极磨蹭女生虾面一分钟（禁止进入)", "按住TA头帮自己舔任意部位30秒", "让TA穿上内库后舔勃起/出水", "女用虾面为男生积极按摩一分钟", "女生涂润滑油给TA按摩积极", "积极涂满奈油让女生舌舔干净", "撅起PP让TA吸吮B30秒", "虾面滴满蜂蜜让男生舌舔干净", "带眼罩含着TA虾面舌头打转30秒", "带上项圈被TA牵着绳子口交30秒", "拴上十字扣进出一分钟不许蛇", "女坐男脸上让TA舌舔思处一分钟", "手脚拷上让TA摧残30秒", "屁股填涂润滑油让TA边插边揉拍到泛红", "给TA带上口球或tiao丹挑逗一分钟", "用捆绳捆住TA用皮鞭抽15秒", "坐到TA脸上让TA吸吮30秒", "女生含住龟头吸吮一分钟然后咬一下", "带上眼罩被TA无情任意宰割", "用黄瓜为女生按摩并测量下女生虾面温度", "男用龟头绕女生蜜穴口正反画圈按摩（禁止进入）", "跪着张开嘴让TA虾面磨蹭30秒", "拴绳跪在TA面前口交30秒", "亲吻TA指定位置一分钟", "女拨开荫唇求TA舔一分钟", "男边吸吮荫帝边用手进出", "吸吮TA脚指头30秒", "酸奈倒🐻部至虾面让TA舌舔干净", "🐻夹铃铛后入进出一分钟", "捆绑拉倒卫生间淋湿", "带上项圈牵到门口抠一分钟", "后入式，边用皮鞭抽屁股一分钟", "穿上丝袜跪下让TA撕开丝袜进出30秒", "全身涂润滑油然后观音坐莲", "女生双手涂润滑油交替快速lu管", "男撅起积极被女生强行坐入反复10次", "被TA随意指定一项任务", "皮鞭抽🐻10下", "让他嘴夹铃铛口交30秒", "按在地板上进出30秒", "绑在椅子上紫薇给他看", "女张开嘴巴被男进出一分钟", "男用积极磨蹭女生虾面一分钟（禁止进入）", "帮TA含丹丹或荫帝10秒舌头打转", "涂润滑油按摩TA思处3分钟", "从额头一直往虾面舔", "男后入女生喊口令（1、2、1）男听令行事"]
            },
            private: {
                man: ["再抽一次", "谢谢惠顾", "和对方舌吻10秒", "把对方弄湿", "舔对手的脖子到🐻30秒", "【惩罚】女生背对着坐到身上一轮抽牌", "给对方口交15秒", "脱光", "吸咬女生的茹头20秒", "【福利】女生用嘴给你投食", "拍一张给女生口交的照片", "和对方舌吻半分钟", "用嘴含住对方荫帝10秒", "后入进出20次不许蛇", "揉一下对方的🐻或揪一下", "跟对方茹交半分钟", "对方站着自己跪着帮她口10秒", "将酸奈倒在对方茹头上舔干净吃掉", "被对方拔一根毛", "像口交一样吸吮对方手指10秒", "打开门在门口口交10秒", "对着镜子拍打飞机视频10秒", "用积极蹭对方的脸10秒", "用嘴含住对方的荫帝10秒", "舔对方的脖子到🐻30秒", "被对方用脚踩丹丹10秒", "和对方舌吻半分钟", "对方站着自己跪着帮她口10秒", "用嘴含住对方的荫帝半分钟", "吸咬对方的茹头30秒", "对着镜子后入一分钟，不许蛇", "对方站着自己跪着帮她口一分钟", "从额头一直往下舔到脚趾", "对手从大腿根部倒水你接着喝光", "指定身上任意位置让对方舔20秒", "戴上眼罩享受对方舔任意部位一分钟", "轻轻抚摸对方虾面30秒", "和对方一起尝试新的姓爱姿势或者技巧，寻找新的刺激", "轻轻抚摸女生🐻30秒", "双方一起尝试一种新的xo姿势", "温柔抚摸对方虾面30秒，给予快感", "脱掉对方一条内库", "舔对方耳朵10秒", "给对方按摩小腿", "【福利】躺下对方给你按摩一分钟", "和对方深情接吻30秒", "挠痒痒到对方求饶为止，至少10秒", "脱掉对方一件衣服", "脱掉对方的所有衣服", "挑逗对方敏感部位15秒", "被对方伸到内衣内抓🐻10秒", "女方被男方公主抱在房内绕一圈", "把酒水或酸奈倒在自己身上对方舔干", "自拍一段接吻小视频", "喝交杯酒并拍照", "脱光衣服", "用嘴吸吮对方手指10秒", "对方舔你上半身的各个部位超过30秒", "自己趴着对方舔你后背20秒", "吸吮对方🐻20秒", "和对方湿吻10秒", "亲吻对方大腿内侧10秒", "脱光衣服", "将对方捆住双手直到惩罚结束", "摸对方🐻或者打屁股一下", "被对方手伸进库子随便摸10秒", "【福利】对方口你虾面30秒", "揉对方nai一下", "舔对方脖子到🐻口30秒", "舔或轻咬对方耳垂5下", "跪舔对方30秒", "【福利】躺下享受被对方舔遍全身1分钟", "想尽办法弄对方勃起或者流水", "互相舌吻10秒", "伸手伸进对方衣服内挠痒痒10秒", "被对方隔着衣服抚摸虾面10秒", "被对方伸进内库抚摸20秒", "伸进衣服摸ta屁股30秒", "猜拳输的被脱光所有衣服", "给对方按摩小腿一分钟", "从后面抱着对方任意摩擦10秒", "揉对方🐻部10秒", "捏ta奈头3下并配合呻吟", "摸对方🐻部或打屁屁各3下", "被握住丹丹或奈头任意搓揉1分钟", "【惩罚】被对手捆住双手任意处置1分钟", "暴力撕破黑色丝袜并强吻30秒", "女生坐在男生身上扭动30秒", "被女生一边亲吻，一边用手隔着衣服抚摸男生思处", "命男生跳劲爆脱衣舞，拖到只剩内库后被女生使劲捏丹丹和积极", "跪着忘情的吸舔女生的脚趾头知道女生满意", "被女生一只手托起下巴欣赏，另一只手伸进库子把玩男生积极和丹丹", "被女生握住积极拍张高清照设置为手机屏幕", "被女生量长度和直径，并被女生使劲撰握测试积极硬度", "命男生隔着内库舌舔亲吻思处", "掀起内衣命令男生亲吻🐻部，同时扭动屁股摩擦男生思处", "命男生亲吻脖颈部和酥🐻同时掏出男生积极把玩", "坐男生身上抚摸🐻部并掀起BRA用茹头碰他鼻尖挑逗", "命令男生用舌头反复舔荫帝和荫道", "被女生坐在脸上反复摩擦嘴巴伸出舌头反复舔荫帝和荫道", "被女生坐在脸上反复摩擦嘴巴伸出舌头疯狂舔", "被女生lu管膨胀到最大，被女生坐入使劲夹积极", "被女生双腿锁住头部不停舌舔女生思处至女生松开腿", "命男生边亲吻奈子边进出", "女生用手紫薇后让男生吸吮手指反复多次", "命男生用积极在女生蜜穴用龟头打转", "女生双腿抱住男生腰部命其疯狂胡乱进出一分钟", "在男生屁股上写某某的男生让其撅屁股抓住积极拍照留念", "女生剥跟香蕉反复紫薇后喂男生吃掉", "命男生用积极捶背两分钟", "让男生舌头围荫帝打转一分钟吸住荫帝舌舔一分钟", "女生把棒棒糖塞入思处让男生舌舔", "使劲攥握男根使其达到最大硬度在被女生用大腿使劲夹住", "用gui头为女生🐻部按摩两分钟", "用积极为女生捶背一分钟", "🐻部涂抹酸奈让男生舔干净", "让男生积极在外荫摩擦三次然后内插一次，循环往复20次", "命男生用龟头不停摩擦荫帝和荫道三分钟（禁止进入）", "用脉动瓶子给男生紫薇，积极涂油全部塞入瓶内", "命令男生紫薇打飞机", "在男生勃起的积极上写上女生名字问男生这是谁的", "骑男生背上喊驾驾驾，用皮鞭抽腚演骑马游戏", "含住男生龟头用牙齿慢慢加力轻咬直到男生求饶为止", "被女生用跳丹按摩积极的没寸肌肤", "女生脱光衣服命男生吻遍全身每一寸肌肤", "命令男生用积极蘸番茄酱喂女生吃", "用跳丹不停在男生屁股菊花思处大腿内侧游走", "用老汉推车的招式伺候女生一分钟", "女生要体验不同进出速度和进出深度姓交快感", "男生为女生做背部推油并积极涂油为荫道推油", "男生带眼罩为女生丰🐻按摩两分钟", "双手被拷背后被女生墙建", "女生撅起屁股手拍屁股对男生说：是男人就把我草死", "男生进出时双腿交叉着收紧荫道口", "命男生快速进出拨出蛇在🐻部涂抹均匀为🐻部做jing液SPA", "听女生喊口令（1、2、1）时快时慢男生按节奏进出", "命男生内蛇再让其口交把淌出来的jing液舔干净"],
                woman: ["再抽一次", "谢谢惠顾", "和对方舌吻10秒", "男生公主抱女生，并坚持15秒", "温柔抚摸对方虾面30秒，给予快感", "双方一起尝试一种新的xo姿势", "轻轻抚摸对方虾面30秒", "和对方一起尝试新的姓爱姿势或者技巧，寻找新的刺激", "把对方弄硬", "舔对手的脖子到🐻30秒", "【惩罚】男生背对着坐到身上再来一轮", "给对方口交15秒", "脱光", "吸咬对方的茹头20秒", "【福利】男生用嘴给你投食", "拍一张给对方口交的照片", "和对方舌吻半分钟", "用嘴含住对方的丹丹10秒", "后入进出20次不许蛇", "揉一下对方的🐻或揪一下", "跟对方茹交半分钟", "对方站着自己跪着帮他口10秒", "将酸奈倒在对方茹头上舔干净吃掉", "被对方拔一根毛", "像口交一样吸吮对方手指10秒", "打开门在门口口交10秒", "对着镜子拍揉🐻视频10秒", "用奈蹭对方的脸10秒", "用嘴含住对方的丹丹10秒", "舔对方的脖子到🐻30秒", "被对方用脚踩🐻10秒", "和对方舌吻半分钟", "对方站着自己跪着帮他口10秒", "用嘴含住对方的丹丹半分钟", "吸咬对方的茹头30秒", "对着镜子后入一分钟，不许蛇", "对方站着自己跪着帮他口一分钟", "从额头一直往下舔到脚趾", "对手从大腿根部倒水你接着喝光", "指定身上任意位置让对方舔20秒", "戴上眼罩享受对方舔任意部位一分钟", "脱掉对方一条内库", "舔对方耳朵10秒", "给对方按摩小腿", "【福利】躺下对方给你按摩一分钟", "和对方深情接吻30秒", "挠痒痒到对方求饶为止，至少10秒", "脱掉对方一件衣服", "脱掉对方的所有衣服", "挑逗对方敏感部位15秒", "被对方伸到内衣内抓🐻10秒", "女方被男方公主抱在房内绕一圈", "把酒水或酸奈倒在自己身上对方舔干", "自拍一段接吻小视频", "喝交杯酒并拍照", "脱光衣服", "用嘴吸吮对方手指10秒", "对方舔你上半身的各个部位超过30秒", "自己趴着对方舔你后背20秒", "吸吮对方🐻20秒", "和对方湿吻10秒", "亲吻对方大腿内侧10秒", "脱光衣服", "将对方捆住双手直到惩罚结束", "摸对方🐻或者打屁股一下", "被对方手伸进库子随便摸10秒", "【福利】对方口你虾面30秒", "揉对方nai一下", "舔对方脖子到🐻口30秒", "舔或轻咬对方耳垂5下", "跪舔对方30秒", "【福利】躺下享受被对方舔遍全身1分钟", "想尽办法弄对方勃起或者流水", "互相舌吻10秒", "伸手伸进对方衣服内挠痒痒10秒", "被对方隔着衣服抚摸虾面10秒", "被对方伸进内库抚摸20秒", "伸进衣服摸ta屁股30秒", "猜拳输的被脱光所有衣服", "给对方按摩小腿一分钟", "从后面抱着对方任意摩擦10秒", "揉对方🐻部10秒", "捏ta奈头3下并配合呻吟", "摸对方🐻部或打屁屁各3下", "被握住丹丹或奈头任意搓揉1分钟", "【惩罚】被对手捆住双手任意处置1分钟", "暴力撕破黑色丝袜并强吻30秒", "女生坐在男生身上扭动30秒", "为男生捏肩捶背并不断吸吮男生耳垂", "为男生跳脱衣热舞掀衣让男生亲吻揉捏茹房", "被男生伸进内库和思处，边呻吟边扭动屁股", "亲吻吸吮男生脚趾头", "被男生暴力揉搓茹房并用两指夹住茹头使劲揪", "被疯狂吸吮茹头并被男生伸进内库用手指进出", "掀开内库将tiao丹塞入深处并将开关交由主人任意控制", "帮男生从拉链处掏出积极用舌尖刺激", "为主人爱抚积极同时用舌头不停舔男生茹头", "用双茹为男生推油按摩背部和臀部至男生满意", "竖起男生积极用思处为积极做360度环绕按摩", "跪着双手拷背后为男生忘我的抠交并拍视频", "跪着双手拷背后被男生疯狂的进出嘴巴一分钟", "趴着撅屁股男生快慢深浅不断变化的任意进出", "平躺扒开小荫唇说：痒，主人行行好快来草我吧", "自摸🐻部并扣模蜜穴说我好寂寞被男生拍视频", "被牵狗绳趴着为男生舔积极舔不好就被狠抽皮鞭", "被男生用棒棒糖进出后再甜食棒棒糖反复多次", "自己扒开蜜穴后被男生用黄瓜疯狂进出", "被男生进出3次虾面接着被男生插3次嘴巴，反复3次", "被男生再虾面塞跳跳糖后猛烈进出30秒", "用酒瓶紫薇并被拍视频紫薇思处被拍高清照", "荫帝被tiao丹强力刺激同时被男生用手暴力进出", "跳丹被男生塞入虾面然后用JB疯狂进出不止", "荫帝被男生用嘴巴嘬住不放两分钟并不停舌舔", "不断变化姿势让男生拍10张露荫道做手机壁纸", "男生积极上涂番茄酱让女生舔食干净反复数次", "为男生表演老虎吃香肠的魔术把香肠塞入虾面", "被男生后抱亲吻，左手捏🐻右手抚摸进出蜜穴", "被男生用色戒的姿势进出一分钟", "趴跪着被男生不断猛烈进茹抽出数次至求饶为止", "被男生紧紧抓住两个基本点逐步深入一个中心", "🐻部涂油为男生不停nai交和抠交至男生满意", "被男生边草边亲一分钟", "装醉酒女不省人事被主人任意摧残三分钟", "激烈反抗后被男生墙建，为了不吃亏把男生墙建", "双手涂油变换各种手势为男生积极做精致SPA", "女生用荫道吞下积极收紧荫道为男生反复拔罐", "被积极打脸后退3格", "后ru进出20次", "再淋浴房开着淋浴帮男生抠交", "进茹不动女生喊草我一次随后男生进出一次", "口含跳跳糖为男生抠交", "在荫道中倒满啤酒/白水供男生引用", "趴跪被男生双手抓胳膊用积极爆菊花一分钟", "撅腚剥开蜜穴自摸荫帝求男生草死自己算了", "在女生屁股写上：姓奴 后疯狂进出", "不断舌舔吸撸舌头打转让男生高潮口蛇并吞精"]
            }
        };
        e.default = i
    },
    db17: function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.container[data-v-78a59c9e]{width:100%;height:100%}.container .main[data-v-78a59c9e]{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;top:0;left:0;z-index:1;width:100%;height:100%}.container .main .item[data-v-78a59c9e]{height:%?72?%;width:%?240?%;margin-bottom:%?60?%}.container .main .item1[data-v-78a59c9e] .onbtn{background-color:#0ff;color:#fff!important;box-shadow:0 0 5px #0ff,0 0 25px #0ff,0 0 50px #0ff,0 0 100px #0ff!important}.container .main .item2[data-v-78a59c9e] .onbtn{background-color:purple;color:#fff!important;box-shadow:0 0 5px purple,0 0 25px purple,0 0 50px purple,0 0 100px purple!important}.container .main .item3[data-v-78a59c9e] .onbtn{background-color:#ff0;color:#fff!important;box-shadow:0 0 5px #ff0,0 0 25px #ff0,0 0 50px #ff0,0 0 100px #ff0!important}.container .main .item4[data-v-78a59c9e] .onbtn{background-color:red;color:#fff!important;box-shadow:0 0 5px red,0 0 25px red,0 0 50px red,0 0 100px red!important}.container .main .item5[data-v-78a59c9e]{position:relative;-webkit-animation:size22-data-v-78a59c9e 1s infinite linear;animation:size22-data-v-78a59c9e 1s infinite linear;overflow:hidden}.container .main .item5[data-v-78a59c9e] .onbtn{background-color:#5801d9;color:#fff!important;box-shadow:0 0 5px #5801d9,0 0 25px #5801d9,0 0 50px #5801d9,0 0 100px #5801d9!important}@-webkit-keyframes size22-data-v-78a59c9e{33%{-webkit-transform:scale(.9);transform:scale(.9)}66%{-webkit-transform:scale(1.1);transform:scale(1.1)}}@keyframes size22-data-v-78a59c9e{33%{-webkit-transform:scale(.9);transform:scale(.9)}66%{-webkit-transform:scale(1.1);transform:scale(1.1)}}', ""]),
        t.exports = e
    },
    db44: function(t, e, a) {
        "use strict";
        var i = a("5fff")
          , n = a.n(i);
        n.a
    },
    db90: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }
        ,
        a("a4d3"),
        a("e01a"),
        a("d3b7"),
        a("d28b"),
        a("3ca3"),
        a("ddb0"),
        a("a630")
    },
    e830: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("6922")
          , n = a("8aaa");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("c473");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "20c637e7", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    eb3e: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("373a")
          , n = a("fc2d");
        for (var o in n)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(o);
        a("4d79");
        var s = a("f0c5")
          , r = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, "3193bb52", null, !1, i["a"], void 0);
        e["default"] = r.exports
    },
    ec7b: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return n
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            akiParticles: a("5e36").default,
            gameButton: a("eabf").default,
            uniPopup: a("eb3e").default,
            uniPopupDialog: a("b907").default
        }
          , n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "container"
            }, [a("aki-particles", {
                attrs: {
                    particlestyle: t.particlestyle
                }
            }), a("v-uni-view", {
                staticClass: "main"
            }, [a("v-uni-view", {
                staticClass: "item"
            }, [a("game-button", {
                attrs: {
                    str: "基础模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem1.apply(void 0, arguments)
                    }
                }
            })], 1), a("v-uni-view", {
                staticClass: "item item1"
            }, [a("game-button", {
                attrs: {
                    color: "#00FFFF",
                    str: "甜蜜模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem2.apply(void 0, arguments)
                    }
                }
            })], 1), a("v-uni-view", {
                staticClass: "item item2"
            }, [a("game-button", {
                attrs: {
                    color: "#800080",
                    str: "异地模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem3.apply(void 0, arguments)
                    }
                }
            })], 1), a("v-uni-view", {
                staticClass: "item item3"
            }, [a("game-button", {
                attrs: {
                    color: "#FFFF00",
                    str: "高级模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem4.apply(void 0, arguments)
                    }
                }
            })], 1), a("v-uni-view", {
                staticClass: "item item4"
            }, [a("game-button", {
                attrs: {
                    color: "red",
                    str: "私密模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem5.apply(void 0, arguments)
                    }
                }
            })], 1), a("v-uni-view", {
                staticClass: "item item5"
            }, [a("game-button", {
                attrs: {
                    color: "#5801d9",
                    str: "组合模式"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onitem6.apply(void 0, arguments)
                    }
                }
            })], 1), a("uni-popup", {
                ref: "inputDialog",
                attrs: {
                    type: "dialog"
                }
            }, [a("uni-popup-dialog", {
                ref: "inputClose",
                attrs: {
                    mode: "input",
                    title: "内容过于**18周岁以下禁止使用",
                    placeholder: "点击确定获取识别码"
                },
                on: {
                    confirm: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.dialogInputConfirm.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1)
        }
          , o = []
    },
    eced: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            data: function() {
                return {}
            },
            created: function() {
                this.popup = this.getParent()
            },
            methods: {
                getParent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniPopup"
                      , e = this.$parent
                      , a = e.$options.name;
                    while (a !== t) {
                        if (e = e.$parent,
                        !e)
                            return !1;
                        a = e.$options.name
                    }
                    return e
                }
            }
        };
        e.default = i
    },
    f194: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("475a")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    f1db: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("14d9");
        var n = i(a("eabf"))
          , o = {
            name: "draw-user",
            components: {
                "game-button": n.default
            },
            props: {
                someSing: {
                    default: ["再来一次", "谢谢惠顾", "请喝奶茶", "说出你喜欢什么样的女生", "罚一杯酒", "陪我去看电影", "答应我一个请求"]
                },
                mode2: {
                    default: "1"
                }
            },
            data: function() {
                return {
                    active: null,
                    center: {
                        top: 0,
                        left: 0
                    },
                    items: [],
                    flag: !1,
                    noactive: !0
                }
            },
            created: function() {
                this.shuffleArray()
            },
            mounted: function() {
                this.getEl(),
                this.onNum()
            },
            methods: {
                onDraw: function(t) {
                    if (!this.noactive)
                        return this.active ? (this.onNum(),
                        uni.showToast({
                            title: "先洗牌哦",
                            icon: "none"
                        })) : void (this.active = t)
                },
                back: function() {
                    this.$emit("back")
                },
                onNum: function() {
                    var t = this;
                    this.noactive = !0,
                    this.active = null;
                    var e = setTimeout((function() {
                        t.flag = !0;
                        var a = setTimeout((function() {
                            t.flag = !1;
                            var e = setTimeout((function() {
                                t.flag = !0;
                                var a = setTimeout((function() {
                                    t.flag = !1,
                                    t.$emit("setarr"),
                                    t.shuffleArray(),
                                    t.noactive = !1,
                                    clearTimeout(a)
                                }
                                ), 160);
                                clearTimeout(e)
                            }
                            ), 160);
                            clearTimeout(a)
                        }
                        ), 500);
                        clearTimeout(e)
                    }
                    ), 500)
                },
                getEl: function() {
                    var t = this.$refs["center"].$el
                      , e = t.getBoundingClientRect();
                    this.center.top = e.top,
                    this.center.left = e.left;
                    for (var a = 1; a <= 9; a++) {
                        var i = "item".concat(a);
                        if (this.$refs[i]) {
                            var n = this.$refs[i].$el
                              , o = n.getBoundingClientRect()
                              , s = {
                                top: this.center.top - o.top,
                                left: this.center.left - o.left
                            };
                            this.items.push(s)
                        }
                    }
                },
                shuffleArray: function() {
                    var t = this.someSing.length;
                    while (0 !== t) {
                        var e = Math.floor(Math.random() * t);
                        t--;
                        var a = [this.someSing[e], this.someSing[t]];
                        this.someSing[t] = a[0],
                        this.someSing[e] = a[1]
                    }
                }
            }
        };
        e.default = o
    },
    f46c: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("2e7b")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    },
    f968: function(t, e, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var n = i(a("d163"))
          , o = {
            components: {
                "xiaowuzi-saizi": n.default
            },
            name: "play",
            data: function() {
                return {}
            }
        };
        e.default = o
    },
    fc2d: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("b032")
          , n = a.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        e["default"] = n.a
    }
}]);
