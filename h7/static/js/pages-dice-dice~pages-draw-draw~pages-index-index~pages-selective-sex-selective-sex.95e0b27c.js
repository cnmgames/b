(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dice-dice~pages-draw-draw~pages-index-index~pages-selective-sex-selective-sex"], {
    "1def": function(e, t, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "game-button",
            props: {
                color: {
                    default: "#2af598",
                    type: String
                },
                str: {
                    required: !0,
                    type: String
                }
            },
            data: function() {
                return {}
            },
            methods: {
                onclick: function() {
                    this.$emit("click")
                }
            }
        };
        t.default = i
    },
    "2a34": function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return i
        }
        )),
        a.d(t, "c", (function() {
            return n
        }
        )),
        a.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-uni-view", {
                staticClass: "main-btn"
            }, [a("v-uni-view", {
                staticClass: "btn",
                style: [{
                    color: e.color
                }, {
                    "box-shadow": "0 0 1px " + e.color
                }],
                attrs: {
                    "hover-class": "onbtn",
                    "hover-stay-time": "200"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.onclick.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-text", {
                staticClass: "no0"
            }, [e._v(e._s(e.str))]), a("v-uni-view", {
                staticClass: "line"
            }, [a("v-uni-text", {
                staticClass: "span span1",
                style: {
                    background: "linear-gradient(90deg, transparent," + e.color + ")"
                }
            }), a("v-uni-text", {
                staticClass: "span span2",
                style: {
                    background: "linear-gradient(180deg, transparent," + e.color + ")"
                }
            }), a("v-uni-text", {
                staticClass: "span span3",
                style: {
                    background: "linear-gradient(270deg, transparent," + e.color + ")"
                }
            }), a("v-uni-text", {
                staticClass: "span span4",
                style: {
                    background: "linear-gradient(360deg, transparent," + e.color + ")"
                }
            })], 1)], 1)], 1)
        }
          , n = []
    },
    3947: function(e, t, a) {
        var i = a("7037").default;
        a("cb29"),
        a("14d9"),
        a("a434"),
        a("ac1f"),
        a("5319"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("2b3d"),
        a("9861"),
        a("e25e"),
        a("c975");
        var n = function(e, t) {
            var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
            this.pJS = {
                canvas: {
                    el: a,
                    w: a.offsetWidth,
                    h: a.offsetHeight
                },
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#fff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#ff0000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 1,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 2,
                            opacity_min: 0,
                            sync: !1
                        }
                    },
                    size: {
                        value: 20,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 20,
                            size_min: 0,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 100,
                        color: "#fff",
                        opacity: 1,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 2,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 3e3,
                            rotateY: 3e3
                        }
                    },
                    array: []
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !0,
                            mode: "grab"
                        },
                        onclick: {
                            enable: !0,
                            mode: "push"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 100,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 200,
                            size: 80,
                            duration: .4
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    },
                    mouse: {}
                },
                retina_detect: !1,
                fn: {
                    interact: {},
                    modes: {},
                    vendors: {}
                },
                tmp: {}
            };
            var n = this.pJS;
            t && Object.deepExtend(n, t),
            n.tmp.obj = {
                size_value: n.particles.size.value,
                size_anim_speed: n.particles.size.anim.speed,
                move_speed: n.particles.move.speed,
                line_linked_distance: n.particles.line_linked.distance,
                line_linked_width: n.particles.line_linked.width,
                mode_grab_distance: n.interactivity.modes.grab.distance,
                mode_bubble_distance: n.interactivity.modes.bubble.distance,
                mode_bubble_size: n.interactivity.modes.bubble.size,
                mode_repulse_distance: n.interactivity.modes.repulse.distance
            },
            n.fn.retinaInit = function() {
                n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio,
                n.tmp.retina = !0) : (n.canvas.pxratio = 1,
                n.tmp.retina = !1),
                n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio,
                n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio,
                n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio,
                n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio,
                n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio,
                n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio,
                n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio,
                n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio,
                n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio,
                n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio,
                n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
            }
            ,
            n.fn.canvasInit = function() {
                n.canvas.ctx = n.canvas.el.getContext("2d")
            }
            ,
            n.fn.canvasSize = function() {
                n.canvas.el.width = n.canvas.w,
                n.canvas.el.height = n.canvas.h,
                n && n.interactivity.events.resize && window.addEventListener("resize", (function() {
                    n.canvas.w = n.canvas.el.offsetWidth,
                    n.canvas.h = n.canvas.el.offsetHeight,
                    n.tmp.retina && (n.canvas.w *= n.canvas.pxratio,
                    n.canvas.h *= n.canvas.pxratio),
                    n.canvas.el.width = n.canvas.w,
                    n.canvas.el.height = n.canvas.h,
                    n.particles.move.enable || (n.fn.particlesEmpty(),
                    n.fn.particlesCreate(),
                    n.fn.particlesDraw(),
                    n.fn.vendors.densityAutoParticles()),
                    n.fn.vendors.densityAutoParticles()
                }
                ))
            }
            ,
            n.fn.canvasPaint = function() {
                n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
            }
            ,
            n.fn.canvasClear = function() {
                n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
            }
            ,
            n.fn.particle = function(e, t, a) {
                if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value,
                n.particles.size.anim.enable && (this.size_status = !1,
                this.vs = n.particles.size.anim.speed / 100,
                n.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
                this.x = a ? a.x : Math.random() * n.canvas.w,
                this.y = a ? a.y : Math.random() * n.canvas.h,
                this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
                this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
                n.particles.move.bounce && n.fn.vendors.checkOverlap(this, a),
                this.color = {},
                "object" == i(e.value))
                    if (e.value instanceof Array) {
                        var r = e.value[Math.floor(Math.random() * n.particles.color.value.length)];
                        this.color.rgb = s(r)
                    } else
                        void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                            r: e.value.r,
                            g: e.value.g,
                            b: e.value.b
                        }),
                        void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                            h: e.value.h,
                            s: e.value.s,
                            l: e.value.l
                        });
                else
                    "random" == e.value ? this.color.rgb = {
                        r: Math.floor(256 * Math.random()) + 0,
                        g: Math.floor(256 * Math.random()) + 0,
                        b: Math.floor(256 * Math.random()) + 0
                    } : "string" == typeof e.value && (this.color = e,
                    this.color.rgb = s(this.color.value));
                this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value,
                n.particles.opacity.anim.enable && (this.opacity_status = !1,
                this.vo = n.particles.opacity.anim.speed / 100,
                n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
                var c = {};
                switch (n.particles.move.direction) {
                case "top":
                    c = {
                        x: 0,
                        y: -1
                    };
                    break;
                case "top-right":
                    c = {
                        x: .5,
                        y: -.5
                    };
                    break;
                case "right":
                    c = {
                        x: 1,
                        y: -0
                    };
                    break;
                case "bottom-right":
                    c = {
                        x: .5,
                        y: .5
                    };
                    break;
                case "bottom":
                    c = {
                        x: 0,
                        y: 1
                    };
                    break;
                case "bottom-left":
                    c = {
                        x: -.5,
                        y: 1
                    };
                    break;
                case "left":
                    c = {
                        x: -1,
                        y: 0
                    };
                    break;
                case "top-left":
                    c = {
                        x: -.5,
                        y: -.5
                    };
                    break;
                default:
                    c = {
                        x: 0,
                        y: 0
                    };
                    break
                }
                n.particles.move.straight ? (this.vx = c.x,
                this.vy = c.y,
                n.particles.move.random && (this.vx = this.vx * Math.random(),
                this.vy = this.vy * Math.random())) : (this.vx = c.x + Math.random() - .5,
                this.vy = c.y + Math.random() - .5),
                this.vx_i = this.vx,
                this.vy_i = this.vy;
                var o = n.particles.shape.type;
                if ("object" == i(o)) {
                    if (o instanceof Array) {
                        var l = o[Math.floor(Math.random() * o.length)];
                        this.shape = l
                    }
                } else
                    this.shape = o;
                if ("image" == this.shape) {
                    var d = n.particles.shape;
                    this.img = {
                        src: d.image.src,
                        ratio: d.image.width / d.image.height
                    },
                    this.img.ratio || (this.img.ratio = 1),
                    "svg" == n.tmp.img_type && void 0 != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this),
                    n.tmp.pushing && (this.img.loaded = !1))
                }
            }
            ,
            n.fn.particle.prototype.draw = function() {
                var e = this;
                if (void 0 != e.radius_bubble)
                    var t = e.radius_bubble;
                else
                    t = e.radius;
                if (void 0 != e.opacity_bubble)
                    var a = e.opacity_bubble;
                else
                    a = e.opacity;
                if (e.color.rgb)
                    var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + a + ")";
                else
                    i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + a + ")";
                switch (n.canvas.ctx.fillStyle = i,
                n.canvas.ctx.beginPath(),
                e.shape) {
                case "circle":
                    n.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    n.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                    break;
                case "triangle":
                    n.fn.vendors.drawShape(n.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                    break;
                case "polygon":
                    n.fn.vendors.drawShape(n.canvas.ctx, e.x - t / (n.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    n.fn.vendors.drawShape(n.canvas.ctx, e.x - 2 * t / (n.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    if ("svg" == n.tmp.img_type)
                        var s = e.img.obj;
                    else
                        s = n.tmp.img_obj;
                    s && function() {
                        n.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
                    }();
                    break
                }
                n.canvas.ctx.closePath(),
                n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color,
                n.canvas.ctx.lineWidth = n.particles.shape.stroke.width,
                n.canvas.ctx.stroke()),
                n.canvas.ctx.fill()
            }
            ,
            n.fn.particlesCreate = function() {
                for (var e = 0; e < n.particles.number.value; e++)
                    n.particles.array.push(new n.fn.particle(n.particles.color,n.particles.opacity.value))
            }
            ,
            n.fn.particlesUpdate = function() {
                for (var e = 0; e < n.particles.array.length; e++) {
                    var t = n.particles.array[e];
                    if (n.particles.move.enable) {
                        var a = n.particles.move.speed / 2;
                        t.x += t.vx * a,
                        t.y += t.vy * a
                    }
                    if (n.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= n.particles.opacity.value && (t.opacity_status = !1),
                    t.opacity += t.vo) : (t.opacity <= n.particles.opacity.anim.opacity_min && (t.opacity_status = !0),
                    t.opacity -= t.vo),
                    t.opacity < 0 && (t.opacity = 0)),
                    n.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= n.particles.size.value && (t.size_status = !1),
                    t.radius += t.vs) : (t.radius <= n.particles.size.anim.size_min && (t.size_status = !0),
                    t.radius -= t.vs),
                    t.radius < 0 && (t.radius = 0)),
                    "bounce" == n.particles.move.out_mode)
                        var i = {
                            x_left: t.radius,
                            x_right: n.canvas.w,
                            y_top: t.radius,
                            y_bottom: n.canvas.h
                        };
                    else
                        i = {
                            x_left: -t.radius,
                            x_right: n.canvas.w + t.radius,
                            y_top: -t.radius,
                            y_bottom: n.canvas.h + t.radius
                        };
                    switch (t.x - t.radius > n.canvas.w ? (t.x = i.x_left,
                    t.y = Math.random() * n.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right,
                    t.y = Math.random() * n.canvas.h),
                    t.y - t.radius > n.canvas.h ? (t.y = i.y_top,
                    t.x = Math.random() * n.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom,
                    t.x = Math.random() * n.canvas.w),
                    n.particles.move.out_mode) {
                    case "bounce":
                        (t.x + t.radius > n.canvas.w || t.x - t.radius < 0) && (t.vx = -t.vx),
                        (t.y + t.radius > n.canvas.h || t.y - t.radius < 0) && (t.vy = -t.vy);
                        break
                    }
                    if (r("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(t),
                    (r("bubble", n.interactivity.events.onhover.mode) || r("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(t),
                    (r("repulse", n.interactivity.events.onhover.mode) || r("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(t),
                    n.particles.line_linked.enable || n.particles.move.attract.enable)
                        for (var s = e + 1; s < n.particles.array.length; s++) {
                            var c = n.particles.array[s];
                            n.particles.line_linked.enable && n.fn.interact.linkParticles(t, c),
                            n.particles.move.attract.enable && n.fn.interact.attractParticles(t, c),
                            n.particles.move.bounce && n.fn.interact.bounceParticles(t, c)
                        }
                }
            }
            ,
            n.fn.particlesDraw = function() {
                n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h),
                n.fn.particlesUpdate();
                for (var e = 0; e < n.particles.array.length; e++) {
                    var t = n.particles.array[e];
                    t.draw()
                }
            }
            ,
            n.fn.particlesEmpty = function() {
                n.particles.array = []
            }
            ,
            n.fn.particlesRefresh = function() {
                cancelRequestAnimFrame(n.fn.checkAnimFrame),
                cancelRequestAnimFrame(n.fn.drawAnimFrame),
                n.tmp.source_svg = void 0,
                n.tmp.img_obj = void 0,
                n.tmp.count_svg = 0,
                n.fn.particlesEmpty(),
                n.fn.canvasClear(),
                n.fn.vendors.start()
            }
            ,
            n.fn.interact.linkParticles = function(e, t) {
                var a = e.x - t.x
                  , i = e.y - t.y
                  , s = Math.sqrt(a * a + i * i);
                if (s <= n.particles.line_linked.distance) {
                    var r = n.particles.line_linked.opacity - s / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
                    if (r > 0) {
                        var c = n.particles.line_linked.color_rgb_line;
                        n.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")",
                        n.canvas.ctx.lineWidth = n.particles.line_linked.width,
                        n.canvas.ctx.beginPath(),
                        n.canvas.ctx.moveTo(e.x, e.y),
                        n.canvas.ctx.lineTo(t.x, t.y),
                        n.canvas.ctx.stroke(),
                        n.canvas.ctx.closePath()
                    }
                }
            }
            ,
            n.fn.interact.attractParticles = function(e, t) {
                var a = e.x - t.x
                  , i = e.y - t.y
                  , s = Math.sqrt(a * a + i * i);
                if (s <= n.particles.line_linked.distance) {
                    var r = a / (1e3 * n.particles.move.attract.rotateX)
                      , c = i / (1e3 * n.particles.move.attract.rotateY);
                    e.vx -= r,
                    e.vy -= c,
                    t.vx += r,
                    t.vy += c
                }
            }
            ,
            n.fn.interact.bounceParticles = function(e, t) {
                var a = e.x - t.x
                  , i = e.y - t.y
                  , n = Math.sqrt(a * a + i * i)
                  , s = e.radius + t.radius;
                n <= s && (e.vx = -e.vx,
                e.vy = -e.vy,
                t.vx = -t.vx,
                t.vy = -t.vy)
            }
            ,
            n.fn.modes.pushParticles = function(e, t) {
                n.tmp.pushing = !0;
                for (var a = 0; a < e; a++)
                    n.particles.array.push(new n.fn.particle(n.particles.color,n.particles.opacity.value,{
                        x: t ? t.pos_x : Math.random() * n.canvas.w,
                        y: t ? t.pos_y : Math.random() * n.canvas.h
                    })),
                    a == e - 1 && (n.particles.move.enable || n.fn.particlesDraw(),
                    n.tmp.pushing = !1)
            }
            ,
            n.fn.modes.removeParticles = function(e) {
                n.particles.array.splice(0, e),
                n.particles.move.enable || n.fn.particlesDraw()
            }
            ,
            n.fn.modes.bubbleParticle = function(e) {
                if (n.interactivity.events.onhover.enable && r("bubble", n.interactivity.events.onhover.mode)) {
                    var t = function() {
                        e.opacity_bubble = e.opacity,
                        e.radius_bubble = e.radius
                    }
                      , a = e.x - n.interactivity.mouse.pos_x
                      , i = e.y - n.interactivity.mouse.pos_y
                      , s = Math.sqrt(a * a + i * i)
                      , c = 1 - s / n.interactivity.modes.bubble.distance;
                    if (s <= n.interactivity.modes.bubble.distance) {
                        if (c >= 0 && "mousemove" == n.interactivity.status) {
                            if (n.interactivity.modes.bubble.size != n.particles.size.value)
                                if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                                    var o = e.radius + n.interactivity.modes.bubble.size * c;
                                    o >= 0 && (e.radius_bubble = o)
                                } else {
                                    var l = e.radius - n.interactivity.modes.bubble.size;
                                    o = e.radius - l * c;
                                    e.radius_bubble = o > 0 ? o : 0
                                }
                            if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
                                if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value) {
                                    var d = n.interactivity.modes.bubble.opacity * c;
                                    d > e.opacity && d <= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = d)
                                } else {
                                    d = e.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * c;
                                    d < e.opacity && d >= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = d)
                                }
                        }
                    } else
                        t();
                    "mouseleave" == n.interactivity.status && t()
                } else if (n.interactivity.events.onclick.enable && r("bubble", n.interactivity.events.onclick.mode)) {
                    var v = function(t, a, i, r, c) {
                        if (t != a)
                            if (n.tmp.bubble_duration_end) {
                                if (void 0 != i) {
                                    var o = r - p * (r - t) / n.interactivity.modes.bubble.duration
                                      , l = t - o;
                                    v = t + l,
                                    "size" == c && (e.radius_bubble = v),
                                    "opacity" == c && (e.opacity_bubble = v)
                                }
                            } else if (s <= n.interactivity.modes.bubble.distance) {
                                if (void 0 != i)
                                    var d = i;
                                else
                                    d = r;
                                if (d != t) {
                                    var v = r - p * (r - t) / n.interactivity.modes.bubble.duration;
                                    "size" == c && (e.radius_bubble = v),
                                    "opacity" == c && (e.opacity_bubble = v)
                                }
                            } else
                                "size" == c && (e.radius_bubble = void 0),
                                "opacity" == c && (e.opacity_bubble = void 0)
                    };
                    if (n.tmp.bubble_clicking) {
                        a = e.x - n.interactivity.mouse.click_pos_x,
                        i = e.y - n.interactivity.mouse.click_pos_y,
                        s = Math.sqrt(a * a + i * i);
                        var p = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
                        p > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0),
                        p > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1,
                        n.tmp.bubble_duration_end = !1)
                    }
                    n.tmp.bubble_clicking && (v(n.interactivity.modes.bubble.size, n.particles.size.value, e.radius_bubble, e.radius, "size"),
                    v(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
                }
            }
            ,
            n.fn.modes.repulseParticle = function(e) {
                if (n.interactivity.events.onhover.enable && r("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
                    var t = e.x - n.interactivity.mouse.pos_x
                      , a = e.y - n.interactivity.mouse.pos_y
                      , i = Math.sqrt(t * t + a * a)
                      , s = {
                        x: t / i,
                        y: a / i
                    }
                      , c = n.interactivity.modes.repulse.distance
                      , o = function(e, t, a) {
                        return Math.min(Math.max(e, t), a)
                    }(1 / c * (-1 * Math.pow(i / c, 2) + 1) * c * 100, 0, 50)
                      , l = {
                        x: e.x + s.x * o,
                        y: e.y + s.y * o
                    };
                    "bounce" == n.particles.move.out_mode ? (l.x - e.radius > 0 && l.x + e.radius < n.canvas.w && (e.x = l.x),
                    l.y - e.radius > 0 && l.y + e.radius < n.canvas.h && (e.y = l.y)) : (e.x = l.x,
                    e.y = l.y)
                } else if (n.interactivity.events.onclick.enable && r("repulse", n.interactivity.events.onclick.mode))
                    if (n.tmp.repulse_finish || (n.tmp.repulse_count++,
                    n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)),
                    n.tmp.repulse_clicking) {
                        c = Math.pow(n.interactivity.modes.repulse.distance / 6, 3);
                        var d = n.interactivity.mouse.click_pos_x - e.x
                          , v = n.interactivity.mouse.click_pos_y - e.y
                          , p = d * d + v * v
                          , u = -c / p * 1;
                        p <= c && function() {
                            var t = Math.atan2(v, d);
                            if (e.vx = u * Math.cos(t),
                            e.vy = u * Math.sin(t),
                            "bounce" == n.particles.move.out_mode) {
                                var a = {
                                    x: e.x + e.vx,
                                    y: e.y + e.vy
                                };
                                (a.x + e.radius > n.canvas.w || a.x - e.radius < 0) && (e.vx = -e.vx),
                                (a.y + e.radius > n.canvas.h || a.y - e.radius < 0) && (e.vy = -e.vy)
                            }
                        }()
                    } else
                        0 == n.tmp.repulse_clicking && (e.vx = e.vx_i,
                        e.vy = e.vy_i)
            }
            ,
            n.fn.modes.grabParticle = function(e) {
                if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
                    var t = e.x - n.interactivity.mouse.pos_x
                      , a = e.y - n.interactivity.mouse.pos_y
                      , i = Math.sqrt(t * t + a * a);
                    if (i <= n.interactivity.modes.grab.distance) {
                        var s = n.interactivity.modes.grab.line_linked.opacity - i / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
                        if (s > 0) {
                            var r = n.particles.line_linked.color_rgb_line;
                            n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")",
                            n.canvas.ctx.lineWidth = n.particles.line_linked.width,
                            n.canvas.ctx.beginPath(),
                            n.canvas.ctx.moveTo(e.x, e.y),
                            n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y),
                            n.canvas.ctx.stroke(),
                            n.canvas.ctx.closePath()
                        }
                    }
                }
            }
            ,
            n.fn.vendors.eventsListeners = function() {
                "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el,
                (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", (function(e) {
                    if (n.interactivity.el == window)
                        var t = e.clientX
                          , a = e.clientY;
                    else
                        t = e.offsetX || e.clientX,
                        a = e.offsetY || e.clientY;
                    n.interactivity.mouse.pos_x = t,
                    n.interactivity.mouse.pos_y = a,
                    n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio,
                    n.interactivity.mouse.pos_y *= n.canvas.pxratio),
                    n.interactivity.status = "mousemove"
                }
                )),
                n.interactivity.el.addEventListener("mouseleave", (function(e) {
                    n.interactivity.mouse.pos_x = null,
                    n.interactivity.mouse.pos_y = null,
                    n.interactivity.status = "mouseleave"
                }
                ))),
                n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", (function() {
                    if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x,
                    n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y,
                    n.interactivity.mouse.click_time = (new Date).getTime(),
                    n.interactivity.events.onclick.enable)
                        switch (n.interactivity.events.onclick.mode) {
                        case "push":
                            n.particles.move.enable || 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
                            break;
                        case "remove":
                            n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
                            break;
                        case "bubble":
                            n.tmp.bubble_clicking = !0;
                            break;
                        case "repulse":
                            n.tmp.repulse_clicking = !0,
                            n.tmp.repulse_count = 0,
                            n.tmp.repulse_finish = !1,
                            setTimeout((function() {
                                n.tmp.repulse_clicking = !1
                            }
                            ), 1e3 * n.interactivity.modes.repulse.duration);
                            break
                        }
                }
                ))
            }
            ,
            n.fn.vendors.densityAutoParticles = function() {
                if (n.particles.number.density.enable) {
                    var e = n.canvas.el.width * n.canvas.el.height / 1e3;
                    n.tmp.retina && (e /= 2 * n.canvas.pxratio);
                    var t = e * n.particles.number.value / n.particles.number.density.value_area
                      , a = n.particles.array.length - t;
                    a < 0 ? n.fn.modes.pushParticles(Math.abs(a)) : n.fn.modes.removeParticles(a)
                }
            }
            ,
            n.fn.vendors.checkOverlap = function(e, t) {
                for (var a = 0; a < n.particles.array.length; a++) {
                    var i = n.particles.array[a]
                      , s = e.x - i.x
                      , r = e.y - i.y
                      , c = Math.sqrt(s * s + r * r);
                    c <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * n.canvas.w,
                    e.y = t ? t.y : Math.random() * n.canvas.h,
                    n.fn.vendors.checkOverlap(e))
                }
            }
            ,
            n.fn.vendors.createSvgImg = function(e) {
                var t = n.tmp.source_svg
                  , a = t.replace(/#([0-9A-F]{3,6})/gi, (function(t, a, i, n) {
                    if (e.color.rgb)
                        var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                    else
                        s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                    return s
                }
                ))
                  , i = new Blob([a],{
                    type: "image/svg+xml;charset=utf-8"
                })
                  , s = window.URL || window.webkitURL || window
                  , r = s.createObjectURL(i)
                  , c = new Image;
                c.addEventListener("load", (function() {
                    e.img.obj = c,
                    e.img.loaded = !0,
                    s.revokeObjectURL(r),
                    n.tmp.count_svg++
                }
                )),
                c.src = r
            }
            ,
            n.fn.vendors.destroypJS = function() {
                cancelAnimationFrame(n.fn.drawAnimFrame),
                a.remove(),
                pJSDom = null
            }
            ,
            n.fn.vendors.drawShape = function(e, t, a, i, n, s) {
                var r = n * s
                  , c = n / s
                  , o = 180 * (c - 2) / c
                  , l = Math.PI - Math.PI * o / 180;
                e.save(),
                e.beginPath(),
                e.translate(t, a),
                e.moveTo(0, 0);
                for (var d = 0; d < r; d++)
                    e.lineTo(i, 0),
                    e.translate(i, 0),
                    e.rotate(l);
                e.fill(),
                e.restore()
            }
            ,
            n.fn.vendors.exportImg = function() {
                window.open(n.canvas.el.toDataURL("image/png"), "_blank")
            }
            ,
            n.fn.vendors.loadImg = function(e) {
                if (n.tmp.img_error = void 0,
                "" != n.particles.shape.image.src)
                    if ("svg" == e) {
                        var t = new XMLHttpRequest;
                        t.open("GET", n.particles.shape.image.src),
                        t.onreadystatechange = function(e) {
                            4 == t.readyState && (200 == t.status ? (n.tmp.source_svg = e.currentTarget.response,
                            n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                            n.tmp.img_error = !0))
                        }
                        ,
                        t.send()
                    } else {
                        var a = new Image;
                        a.addEventListener("load", (function() {
                            n.tmp.img_obj = a,
                            n.fn.vendors.checkBeforeDraw()
                        }
                        )),
                        a.src = n.particles.shape.image.src
                    }
                else
                    console.log("Error pJS - No image.src"),
                    n.tmp.img_error = !0
            }
            ,
            n.fn.vendors.draw = function() {
                "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(),
                n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : void 0 != n.tmp.img_obj ? (n.fn.particlesDraw(),
                n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(),
                n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
            }
            ,
            n.fn.vendors.checkBeforeDraw = function() {
                "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && void 0 == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame),
                n.tmp.img_error || (n.fn.vendors.init(),
                n.fn.vendors.draw())) : (n.fn.vendors.init(),
                n.fn.vendors.draw())
            }
            ,
            n.fn.vendors.init = function() {
                n.fn.retinaInit(),
                n.fn.canvasInit(),
                n.fn.canvasSize(),
                n.fn.canvasPaint(),
                n.fn.particlesCreate(),
                n.fn.vendors.densityAutoParticles(),
                n.particles.line_linked.color_rgb_line = s(n.particles.line_linked.color)
            }
            ,
            n.fn.vendors.start = function() {
                r("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3),
                n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
            }
            ,
            n.fn.vendors.eventsListeners(),
            n.fn.vendors.start()
        };
        function s(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, a, i) {
                return t + t + a + a + i + i
            }
            ));
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }
        function r(e, t) {
            return t.indexOf(e) > -1
        }
        Object.deepExtend = function(e, t) {
            for (var a in t)
                t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {},
                arguments.callee(e[a], t[a])) : e[a] = t[a];
            return e
        }
        ,
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(),
        window.cancelRequestAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        }(),
        window.pJSDom = [],
        window.particlesJS = function(e, t) {
            "string" != typeof e && (t = e,
            e = "particles-js"),
            e || (e = "particles-js");
            var a = document.getElementById(e)
              , i = a.getElementsByClassName("particles-js-canvas-el");
            if (i.length)
                while (i.length > 0)
                    a.removeChild(i[0]);
            var s = document.createElement("canvas");
            s.className = "particles-js-canvas-el",
            s.style.width = "100%",
            s.style.height = "100%";
            var r = document.getElementById(e).appendChild(s);
            null != r && pJSDom.push(new n(e,t))
        }
        ;
        var c = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#74b3d2"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .5,
                    random: !0,
                    anim: {
                        enable: !0,
                        speed: 1,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 30,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 4,
                        size_min: 3,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !1,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .4,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 1,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 600
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: !0,
                        mode: "repulse"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0,
                        speed: 3
                    },
                    repulse: {
                        distance: 400,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        };
        window.particlesJS.load = function(e, t, a) {
            window.particlesJS(e, c)
        }
    },
    "5e18": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("c077")
          , n = a.n(i);
        for (var s in i)
            ["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(s);
        t["default"] = n.a
    },
    "5e36": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("fd65")
          , n = a("5e18");
        for (var s in n)
            ["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(s);
        a("730e");
        var r = a("f0c5")
          , c = Object(r["a"])(n["default"], i["b"], i["c"], !1, null, "706daf34", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    6394: function(e, t, a) {
        var i = a("b6dc");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var n = a("4f06").default;
        n("967f8bf4", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "730e": function(e, t, a) {
        "use strict";
        var i = a("6394")
          , n = a.n(i);
        n.a
    },
    9786: function(e, t, a) {
        "use strict";
        var i = a("fc78")
          , n = a.n(i);
        n.a
    },
    b6dc: function(e, t, a) {
        var i = a("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */#particles[data-v-706daf34]{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:50% 50%}', ""]),
        e.exports = t
    },
    c077: function(e, t, a) {
        "use strict";
        a("7a82");
        var i = a("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        i(a("3947"));
        var n = {
            name: "akira-particles",
            props: ["particlestyle"],
            mounted: function() {
                particlesJS.load("particles", "../../../../uni_modules/aki-particles/static/aki-particles/particles-" + this.particlestyle.style + ".json")
            },
            data: function() {
                return {}
            }
        };
        t.default = n
    },
    cb29: function(e, t, a) {
        var i = a("23e7")
          , n = a("81d5")
          , s = a("44d2");
        i({
            target: "Array",
            proto: !0
        }, {
            fill: n
        }),
        s("fill")
    },
    e2b0: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("1def")
          , n = a.n(i);
        for (var s in i)
            ["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(s);
        t["default"] = n.a
    },
    eabf: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("2a34")
          , n = a("e2b0");
        for (var s in n)
            ["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(s);
        a("9786");
        var r = a("f0c5")
          , c = Object(r["a"])(n["default"], i["b"], i["c"], !1, null, "5b6d0d5c", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    f225: function(e, t, a) {
        var i = a("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.main-btn[data-v-5b6d0d5c]{position:relative;height:%?72?%;width:%?240?%}.main-btn .btn[data-v-5b6d0d5c]{position:relative;height:%?72?%;width:%?240?%;line-height:%?72?%;text-align:center;font-size:%?32?%;font-weight:700;cursor:pointer;border-radius:4px;letter-spacing:4px}.main-btn .btn .line[data-v-5b6d0d5c]{position:absolute;top:0;height:%?72?%;width:%?240?%;overflow:hidden}.main-btn .btn .span[data-v-5b6d0d5c]{position:absolute;display:block}.main-btn .btn .span1[data-v-5b6d0d5c]{top:0;left:-100%;width:100%;height:2px;-webkit-animation:anim1-data-v-5b6d0d5c 4s linear infinite;animation:anim1-data-v-5b6d0d5c 4s linear infinite}@-webkit-keyframes anim1-data-v-5b6d0d5c{0%{left:-100%}50%,\n  100%{left:100%}}@keyframes anim1-data-v-5b6d0d5c{0%{left:-100%}50%,\n  100%{left:100%}}.main-btn .btn .span2[data-v-5b6d0d5c]{right:0;top:-100%;width:2px;height:100%;-webkit-animation:anim2-data-v-5b6d0d5c 4s linear infinite;animation:anim2-data-v-5b6d0d5c 4s linear infinite;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes anim2-data-v-5b6d0d5c{0%{top:-100%}50%,\n  100%{top:100%}}@keyframes anim2-data-v-5b6d0d5c{0%{top:-100%}50%,\n  100%{top:100%}}.main-btn .btn .span3[data-v-5b6d0d5c]{bottom:0;right:-100%;width:100%;height:2px;-webkit-animation:anim3-data-v-5b6d0d5c 4s linear infinite;animation:anim3-data-v-5b6d0d5c 4s linear infinite;-webkit-animation-delay:1.9s;animation-delay:1.9s}@-webkit-keyframes anim3-data-v-5b6d0d5c{0%{right:-100%}50%,\n  100%{right:100%}}@keyframes anim3-data-v-5b6d0d5c{0%{right:-100%}50%,\n  100%{right:100%}}.main-btn .btn .span4[data-v-5b6d0d5c]{left:0;bottom:-100%;width:2px;height:100%;-webkit-animation:anim4-data-v-5b6d0d5c 4s linear infinite;animation:anim4-data-v-5b6d0d5c 4s linear infinite;-webkit-animation-delay:2.9s;animation-delay:2.9s}@-webkit-keyframes anim4-data-v-5b6d0d5c{0%{bottom:-100%}50%,\n  100%{bottom:100%}}@keyframes anim4-data-v-5b6d0d5c{0%{bottom:-100%}50%,\n  100%{bottom:100%}}.main-btn .onbtn[data-v-5b6d0d5c]{background-color:#2af598;color:#fff!important;box-shadow:0 0 5px #2af598,0 0 25px #2af598,0 0 50px #2af598,0 0 100px #2af598!important}', ""]),
        e.exports = t
    },
    fc78: function(e, t, a) {
        var i = a("f225");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var n = a("4f06").default;
        n("4b5db479", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    fd65: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return i
        }
        )),
        a.d(t, "c", (function() {
            return n
        }
        )),
        a.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("v-uni-view", [t("v-uni-view", {
                style: "background-color: " + this.particlestyle.bgcolor + ";z-index: " + this.particlestyle.zindex,
                attrs: {
                    id: "particles"
                }
            })], 1)
        }
          , n = []
    }
}]);
