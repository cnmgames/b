(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-b438c372"], {
    "13ac": function(s, t, i) {
      "use strict";
      i.r(t);
      var e = function() {
          var s = this,
            t = s._self._c;
          return t("div", {
            staticClass: "box"
          }, [t("topGame", {
            attrs: {
              title: s.titleName,
              showBack: !0,
              position: !1,
              showNewGame: !0
            },
            on: {
              backHome: s.turnHome,
              newGame: s.newFrech
            }
          }), t("vue-particles", {
            attrs: {
              color: "#9795f0",
              particleOpacity: 1,
              particlesNumber: 60,
              shapeType: "triangle",
              particleSize: 5,
              linesColor: "#9795f0",
              linesWidth: 1,
              lineLinked: !1,
              lineOpacity: 0,
              linesDistance: 150,
              moveSpeed: 4,
              hoverEffect: !1,
              hoverMode: "repulse",
              clickEffect: !1,
              clickMode: "repulse"
            }
          }), t("div", {
            staticClass: "bgc1"
          }), t("div", {
            staticClass: "bgc2"
          }), t("div", {
            staticClass: "bgc3"
          }), t("div", {
            staticClass: "chessboardBox"
          }, [t("img", {
            attrs: {
              id: "boy",
              src: i("62d4"),
              alt: ""
            }
          }), t("img", {
            attrs: {
              id: "girl",
              src: i("9958"),
              alt: ""
            }
          }), t("div", {
            staticClass: "rulerBox"
          }, [t("div", {
            staticClass: "rulerTitle"
          }, [s._v("游戏规则")]), t("div", {
            staticClass: "ruler"
          }, [t("div", {
            staticClass: "rulerText"
          }, [s._v("1.摇骰子自动走棋")]), t("div", {
            staticClass: "rulerText"
          }, [s._v("2.每个格子都有任务，也可以自行商量执行其他任务")]), t("div", {
            staticClass: "rulerText"
          }, [s._v("3.率先走到终点的一方，获得胜利")]), t("div", {
            staticClass: "rulerImg"
          }, [t("img", {
            attrs: {
              id: "gif",
              src: s.gif,
              alt: ""
            },
            on: {
              click: function(t) {
                return s.next()
              }
            }
          })])])]), t("div", {
            staticClass: "chessboardTop"
          }, [s._m(0), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(2)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("2")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(3)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("3")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(4)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("4")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(5)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("5")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            staticStyle: {
              "border-top-left-radius": "50%"
            },
            on: {
              click: function(t) {
                return s.showTip(6)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("6")])])])]), t("div", {
            staticClass: "chessboardCenter"
          }, [t("div", {
            staticClass: "chessboardCenter-left"
          }, [t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(7)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("7")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(8)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("8")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(9)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("9")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(10)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("10")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(11)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("11")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(12)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("12")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(13)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("13")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(14)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("14")])])])]), t("div", {
            staticClass: "chessboardCenter-right"
          }, [t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            staticStyle: {
              "border-top-left-radius": "50%",
              "border-top-right-radius": "50%"
            },
            on: {
              click: function(t) {
                return s.showTip(28)
              }
            }
          }, [t("img", {
            staticClass: "chessImg",
            attrs: {
              src: i("eac6"),
              alt: ""
            }
          })])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(27)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("27")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(26)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("26")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(25)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("25")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(24)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("24")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(23)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("23")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(22)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("22")])])]), t("div", {
            staticClass: "chessboard2"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(21)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("21")])])])])]), t("div", {
            staticClass: "chessboardBottom"
          }, [t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            staticStyle: {
              "border-bottom-left-radius": "50%"
            },
            on: {
              click: function(t) {
                return s.showTip(15)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("15")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(16)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("16")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(17)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("17")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(18)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("18")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            on: {
              click: function(t) {
                return s.showTip(19)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("19")])])]), t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            staticStyle: {
              "border-bottom-right-radius": "50%"
            },
            on: {
              click: function(t) {
                return s.showTip(20)
              }
            }
          }, [t("div", {
            staticClass: "chessNum"
          }, [s._v("20")])])])])]), t("van-popup", {
            model: {
              value: s.showText,
              callback: function(t) {
                s.showText = t
              },
              expression: "showText"
            }
          }, [t("div", {
            staticClass: "iptBox"
          }, [t("div", {
            staticClass: "iptTitle",
            staticStyle: {
              margin: "0.5rem 0 0.3rem 0"
            }
          }, [s._v("任务")]), t("div", {
            staticClass: "errorTip"
          }, [s._v(s._s(s.text))])])])], 1)
        },
        a = [function() {
          var s = this,
            t = s._self._c;
          return t("div", {
            staticClass: "chessboard"
          }, [t("div", {
            staticClass: "chess",
            staticStyle: {
              "border-top-right-radius": "50%",
              "border-bottom-right-radius": "50%"
            }
          }, [t("img", {
            staticClass: "chessImg",
            attrs: {
              src: i("495c"),
              alt: ""
            }
          })])])
        }],
        c = (i("14d9"), i("cc18")),
        A = i("7640"),
        l = i.n(A),
        o = i("f074"),
        n = i.n(o),
        r = i("d6b6"),
        d = i.n(r),
        h = i("7fd1"),
        g = i.n(h),
        C = i("7809"),
        u = i.n(C),
        p = i("eb38"),
        v = i.n(p),
        f = {
          name: "plane",
          components: {
            topGame: c["a"]
          },
          props: {},
          data() {
            return {
              titleName: "情侣飞行棋",
              showText: !1,
              nextBtn: !0,
              text: "",
              gif: l.a,
              boyAxis: 1,
              girlAxis: 1,
              dice: 0,
              flag: 0,
              goTimer: "",
              axis: [{
                top: "0",
                left: "0"
              }, {
                top: "9.6%",
                left: "85%"
              }, {
                top: "9.6%",
                left: "71%"
              }, {
                top: "9.6%",
                left: "57%"
              }, {
                top: "9.6%",
                left: "43%"
              }, {
                top: "9.6%",
                left: "29%"
              }, {
                top: "9.6%",
                left: "15%"
              }, {
                top: "18.6%",
                left: "15%"
              }, {
                top: "27.6%",
                left: "15%"
              }, {
                top: "36.5%",
                left: "15%"
              }, {
                top: "45.3%",
                left: "15%"
              }, {
                top: "54.3%",
                left: "15%"
              }, {
                top: "63.3%",
                left: "15%"
              }, {
                top: "72.3%",
                left: "15%"
              }, {
                top: "81.1%",
                left: "15%"
              }, {
                top: "90.4%",
                left: "15%"
              }, {
                top: "90.4%",
                left: "29%"
              }, {
                top: "90.4%",
                left: "43%"
              }, {
                top: "90.4%",
                left: "57%"
              }, {
                top: "90.4%",
                left: "71%"
              }, {
                top: "90.4%",
                left: "85%"
              }, {
                top: "81.1%",
                left: "85%"
              }, {
                top: "72.3%",
                left: "85%"
              }, {
                top: "63.3%",
                left: "85%"
              }, {
                top: "54.3%",
                left: "85%"
              }, {
                top: "45.3%",
                left: "85%"
              }, {
                top: "36.5%",
                left: "85%"
              }, {
                top: "27.6%",
                left: "85%"
              }, {
                top: "18.6%",
                left: "85%"
              }],
              list1: ["", "", "单膝虾跪亲吻对方的手", "在阳台或花园里果露一会儿，享受自然的触感", "抚摸对方的大腿30秒", "用舌尖轻轻刺激对方耳朵", "轻轻抚摸对方xiong30秒",
                "制作一个属于你们两人的姓爱指南，包括喜好、愿望和界限", "使用食物进行亲吻和舔舐，例如巧克力酱或者生果", "相互用手掌轻轻触摸对方的敏感部位", "用冰块在对方身上轻轻滑动，直到溶化",
                "模仿对方的声音和样子，玩起角色扮演游戏", "撅起PP，让对方打10虾", "男生公主抱女生，并坚持15秒", "轻轻的在对方耳朵边吹气10虾", "根据对方指定，脱掉任意一件衣服",
                "为对方做一个放松的肩部按摩", "和对方一起尝试新的姓爱姿势或者技巧，寻找新的刺激", "脱掉一件衣服", "和对方法式湿吻20秒", "闭上眼睛让对方为所欲为1分钟",
                "躺虾给对方按摩1分钟", "温柔抚摸对方虾体30秒，给予快感", "将对方压在身虾做十个俯卧撑", "在镜子前拥吻", "轻轻抚摸对方虾面30秒", "温柔地抚摸对方的熊部30秒",
                "展示一种姓感的舞蹈，持续1分钟"
              ],
              list2: ["", "", "学猫叫三声", "从背后抱对方1分钟", "给对方梳头发", "给对方说悄悄话", "拥抱30秒", "从背后抱对方1分钟", "亲吻对方额头",
                "摸对方头10秒", "尝试接吻的感觉", "给对方按摩捶背1分钟", "手牵手一分钟", "一起恶搞自拍", "对视5秒", "一起给对方按摩", "尝试接吻的感觉",
                "说说初次见面的感受", "一起恶搞自拍", "对方闭上眼睛给你涂扣红", "对方闭上眼睛给你涂扣红", "手牵手30秒", "摸对方耳朵2秒", "拍一段表白的视频留作纪念",
                "学猫叫三声", "学猫叫三声", "喂对方喝水", "对方站着自己跪着喂食物"
              ],
              list3: ["", "", "被对方手伸进裤子随便摸10秒", "【福利】躺虾对方给你按摩一分钟", "跪舔对方30秒", "女生坐在男生身上扭动30秒", "摸对方熊部或打屁屁各3虾",
                "揉对方熊部10秒", "【福利】躺虾享受被对方舔遍全身1分钟", "女方被男方公主抱在房内绕一圈", "脱光衣服", "脱掉对方一件衣服", "伸进衣服摸ta屁股30秒",
                "自己趴着对方舔你后背20秒", "想尽办法弄对方勃起或者流水", "挠痒痒到对方求饶为止，至少10秒", "猜拳输的被脱光所有衣服", "捏ta乃头3虾并配合呻吟", "舔对方耳朵10秒",
                "脱光衣服", "把酒水或酸乃倒在自己身上对方舔干", "被对方隔着衣服抚摸虾体10秒", "被对方伸进内裤抚摸20秒", "和对方湿吻10秒", "用嘴吸吮对方手指10秒",
                "互相舌吻10秒", "从后面抱着对方任意摩擦10秒", "脱掉对方一条内裤"
              ],
              list4: ["", "", "被对手用牙齿咬住茹头磨蹭10秒", "【福利】对方含着水在你身上亲吻30秒", "撅起PP让对方打5虾", "边插入边打对方屁股30秒",
                "相互拥抱并热情亲吻30秒", "后入进出20次不许蛇", "【福利】对手帮你舔全身各个部位2分钟", "后入进出20次不许蛇", "被对手用jj打脸3虾或B蹭脸10秒",
                "拍一段和对方爱爱的视频", "躺在床上任由对方抚摸30秒", "【惩罚】撅起PP让对方打3虾", "用熊或者jj蹭对方的脸10秒", "脱光衣服[或穿情趣内衣]",
                "【福利】对方给你扣指定部位一分钟", "观音坐莲30秒运动不许蛇", "女穿情超内衣,男舔对方后背1分钟", "被对方用牙齿咬住茹头磨蹭10秒", "用嘴含住对手丹丹或荫帝30秒",
                "69式相互扣交1分钟", "吸吮对方手指10秒", "带上眼罩任由对方处置30秒", "对方站着自己跪着帮他（她）扣1分钟", "将酸乃倒在对方茹头并舔干净吃掉",
                "涂上油熊对熊帮对手推熊30秒", "扣含冰水或冰块给对手进行扣30秒"
              ],
              list5: ["", "", "对手从大腿根部倒水你接着喝光", "把对方弄硬或弄湿", "舔对方的脖子到熊30秒", "打开门在门扣扣交10秒", "和对方舌吻半分钟",
                "后入进出20次不许蛇", "【惩罚】对方背对着坐到身上直到游戏结束", "对着镜子后入一分钟，不许蛇", "【福利】对方用嘴给你投食", "被对方用脚踩熊或丹丹10秒",
                "从额头一直往虾舔到脚趾", "对方站着自己跪着帮他（她）扣一分钟", "将酸乃倒在对方茹头上舔干净吃掉", "拍一张给对方扣交的照片", "揉一虾对方的熊或揪一虾",
                "用嘴含住对方的丹丹或荫帝半分钟", "用嘴含住对方的丹丹或荫帝10秒", "跟对方茹交半分钟", "指定身上任意位置让对方舔20秒", "用乃或jj蹭对方的脸10秒", "被对方拔一根毛",
                "吸咬对方的茹头20秒", "像扣交一样吸吮对方手指10秒", "和对方舌吻半分钟", "对着镜子拍揉熊视频10秒", "用嘴含住对方的丹丹或荫帝10秒"
              ],
              list6: ["", "", "脱掉对方一条内裤", "撅起PP，让对方打10虾", "用手扣自己虾面1分钟，或lu30虾", "把酒水或酸乃倒在自己身上对方舔干",
                "为对方做一个放松的肩部按摩", "与对方舌吻30秒", "自拍一段接吻小视频", "撅起PP让对方打5虾", "轻揉对方PP", "用舌尖轻轻刺激对方耳朵",
                "【惩罚】对方背对着坐到身上直到游戏结束", "用丝巾或者眼罩绑住对方的眼睛，进行一个感官探索游戏", "涂上油熊对熊帮对手推熊30秒", "给对方按摩小腿", "舔对方耳朵10秒",
                "一起恶搞自拍", "跪舔对方30秒", "后入进出20次不许蛇", "给对方按小腿1分钟", "帮对手含住丹丹或荫帝10秒舌头打转", "和对方舌吻半分钟", "和对方湿吻10秒",
                "舔或轻咬对方耳垂5虾", "扣含热水给对手进行扣30秒", "一起给对方按摩", "尝试接吻的感觉"
              ],
              planelist: []
            }
          },
          computed: {},
          watch: {},
          created() {},
          mounted() {
            if (1 == this.$route.params.type) this.titleName = "基础模式", this.planelist = this.list1, this.setBgc(
            1);
            else if (2 == this.$route.params.type) this.titleName = "恋爱版", this.planelist = this.list2, this
              .setBgc(2);
            else if (3 == this.$route.params.type) this.titleName = "情侣版", this.planelist = this.list3, this
              .setBgc(3);
            else if (4 == this.$route.params.type) this.titleName = "高级版", this.planelist = this.list4, this
              .setBgc(4);
            else if (5 == this.$route.params.type) this.titleName = "私密版", this.planelist = this.list5, this
              .setBgc(5);
            else if (6 == this.$route.params.type) this.titleName = "组合模式", this.planelist = this.list6, this
              .setBgc(6);
            else if (-1 != this.$route.params.type.indexOf("7")) {
              let s = JSON.parse(localStorage.getItem("gameList")),
                t = this.$route.params.type.split("-")[1];
              this.titleName = s[t].name, this.planelist = s[t].list, this.setBgc(7)
            }
          },
          methods: {
            likeStyle(s) {
              return s + "?" + Math.random()
            },
            newFrech() {
              let s = document.getElementById("girl"),
                t = document.getElementById("boy");
              this.showText = !1, this.text = "", this.gif = this.likeStyle(l.a), this.boyAxis = 1, this
                .girlAxis = 1, this.dice = 0, this.flag = 0, clearInterval(this.goTimer), this.goTimer = null, s
                .style.top = this.axis[1].top, s.style.left = this.axis[1].left, t.style.top = this.axis[1].top, t
                .style.left = this.axis[1].left, this.nextBtn = !0
            },
            showTip(s) {
              this.text = 28 == s ? "终点" : this.planelist[s], this.showText = !0
            },
            next() {
              if (!this.nextBtn) return;
              this.nextBtn = !1;
              let s = document.getElementById("gif");
              switch (s.style.transform = "scale(1.18)", this.dice = Math.floor(6 * Math.random()) + 1, console
                .log(this.dice), setTimeout(() => {
                  s.style.transform = "scale(1)"
                }, 700), this.dice) {
                case 1:
                  this.gif = this.likeStyle(l.a);
                  break;
                case 2:
                  this.gif = this.likeStyle(n.a);
                  break;
                case 3:
                  this.gif = this.likeStyle(d.a);
                  break;
                case 4:
                  this.gif = this.likeStyle(g.a);
                  break;
                case 5:
                  this.gif = this.likeStyle(u.a);
                  break;
                case 6:
                  this.gif = this.likeStyle(v.a);
                  break;
                default:
                  break
              }
              setTimeout(() => {
                this.go()
              }, 1500)
            },
            go() {
              let s = document.getElementById("girl"),
                t = document.getElementById("boy");
              if (0 === this.flag) {
                this.flag = 1;
                let t = 0;
                this.goTimer && clearInterval(this.goTimer);
                let i = this;
                this.goTimer = setInterval((function() {
                  console.log("执行定时器"), t += 1, i.girlAxis += 1, s.style.top = i.axis[i.girlAxis].top, s
                    .style.left = i.axis[i.girlAxis].left, 28 == i.girlAxis ? (console.log("结束游戏"), i.text =
                      "女方胜利,可要求对方做任何事情", setTimeout(() => {
                        i.showText = !0
                      }, 500), clearInterval(i.goTimer)) : t === i.dice && (console.log("结束定时器"), console
                      .log(i.planelist[i.girlAxis]), i.text = i.planelist[i.girlAxis], setTimeout(() => {
                        i.showText = !0, i.nextBtn = !0
                      }, 500), clearInterval(i.goTimer))
                }), 500)
              } else {
                this.flag = 0;
                let s = 0,
                  i = this;
                this.goTimer = setInterval((function() {
                  console.log("执行"), s += 1, i.boyAxis += 1, t.style.top = i.axis[i.boyAxis].top, t.style
                    .left = i.axis[i.boyAxis].left, 28 == i.boyAxis ? (console.log("结束游戏"), i.text =
                      "男方胜利,可要求对方做任何事情", setTimeout(() => {
                        i.showText = !0
                      }, 500), clearInterval(i.goTimer)) : s === i.dice && (console.log("结束"), console.log(i
                      .planelist[i.boyAxis]), i.text = i.planelist[i.boyAxis], setTimeout(() => {
                      i.showText = !0, i.nextBtn = !0
                    }, 500), clearInterval(i.goTimer))
                }), 500)
              }
            },
            setBgc(s) {
              let t = document.getElementsByClassName("chess");
              t[0].classList.add(`bg${s}-1`), t[1].classList.add(`bg${s}-2`), t[2].classList.add(`bg${s}-3`), t[3]
                .classList.add(`bg${s}-1`), t[4].classList.add(`bg${s}-2`), t[5].classList.add(`bg${s}-3`), t[6]
                .classList.add(`bg${s}-1`), t[7].classList.add(`bg${s}-2`), t[8].classList.add(`bg${s}-3`), t[9]
                .classList.add(`bg${s}-1`), t[10].classList.add(`bg${s}-2`), t[11].classList.add(`bg${s}-3`), t[
                  12].classList.add(`bg${s}-1`), t[13].classList.add(`bg${s}-2`), t[14].classList.add(`bg${s}-3`),
                t[15].classList.add(`bg${s}-1`), t[16].classList.add(`bg${s}-2`), t[17].classList.add(`bg${s}-3`),
                t[18].classList.add(`bg${s}-1`), t[19].classList.add(`bg${s}-2`), t[20].classList.add(`bg${s}-3`),
                t[21].classList.add(`bg${s}-1`), t[27].classList.add(`bg${s}-2`), t[23].classList.add(`bg${s}-3`),
                t[24].classList.add(`bg${s}-1`), t[25].classList.add(`bg${s}-2`), t[26].classList.add(`bg${s}-3`),
                t[22].classList.add(`bg${s}-1`)
            },
            turnHome() {
              this.$router.push({
                name: "home",
                params: {
                  btn: "3"
                }
              })
            }
          }
        },
        B = f,
        m = (i("60d4"), i("2877")),
        w = Object(m["a"])(B, e, a, !1, null, "10a9785c", null);
      t["default"] = w.exports
    },
    "16de": function(s, t) {
      s.exports =
        "data:image/png;base64,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"
    },
    "182b": function(s, t, i) {},
    "495c": function(s, t) {
      s.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABOtJREFUeF7tne1R5DAMhuVOoBOoBKgEqASuEuiE68Q35jZcDrKbL0mR7SczO/wgtuVXz0qys+tNwtW1Aqnr2TN5AYDOIQAAAOhcgc6nTwQAgM4V6Hz6RAAA6FyBzqdPBACAzhXofPpEAADoXIHOp08EAAB7BXLOVyJyJyLl7/D6LSLl9Sul9G5vBSNMKWAeAXLOjyLyNCN/AeEBEPwhNQUg5/wmIjcrpvUqIs8ppQIEl4MCZgBscP4w3eL815TSs8P8ux/CBICFYX9OfECYU0jh/1YAZAXbxhGB+kBR0HFX6gDknO9F5MXAXuoDA1EtACjOLxBYXKQFZVUtAFhb+W+ZEiBsUW2ijQUAH6fNHiUTL3ZTQLhl2bhd6toBKDP/jAanHUX2D1ay0AIA7B+sdLr1KsAzBUxNvUSBsptYogLXjAItRYDvU2XZuAD/lgH4qg/YVj5PQusAUB90nALO1QdsK4+U6SUCUB+ciQS9AkB9cAKiZwCoD0T0zwfIOR+9D7Bg8TN5S5cfSyMC/GShq/0DAJiOF908bQSAywmj+W1lAFhWMTT72BkAlgHQ7LIRAJYD0OSyEQDWAzAGofptZQDYDsDQsuplIwDsB6Dq+gAAdACotj4AAF0AqqsPAMAGgGrqAwCwBSB8fQAA9gCErg8AwA+AkPUBAPgD8JUWInybCQCOASBMWgCAYwEYg3DIt5kAIAYAgxXluLzyfMHtS64AEAsA92UjAMQDwLU+AIC4AIxBMDsEAwDiA2CaFgCgDgAGCNQ/gAIA9QDwCUFK6VrTZADQVNOnr1IPqJ2uDgA+TtMc5T2ldKvVIQBoKenXj2oaAAA/x2mOdK21WwgAmm7x6wsA/LSON1JKSe2Nq9bRIFPF5wPE8/S0ReXHNB60jAUALSX9+imbQWqHYAKAn+NURtIM/8UgAFBxi1snqptAAODmN5WBVEP/YBERQMU3pp2YHl4FAKa+2925asU/ZQ0A7PaRSQem7/qxxQBg4r/NnbqfTgYAm32l3vDpiGPtAUDdj6s7dP8oOClgtY9MGrjl+UvWEwFMfHuxU/c8DwD+Tj434iF5HgCOB+DQPA8AxwEQIs8DgD8AofI8APgCEC7PA4APAFWeKM4ycD8cVf+mAADsA6CqcM/TwH3OHrc2f0yrZ+rlnogA65QOv6xbNx0+E7hUr2qWdUsnNNxHBJhXrPo8zzJw3slTd4Tdvt02nelWRICfujSX54kAy94yzeZ5AJgHoOk8DwDnFegizwNA53keAP4p0GWeB4C/CnSb53sHoKtl3Xy9+/8dLe8DVP2Ydq0jt97fKgCE+4VEtAZA98u6hX7/uq0VAMjzaz1/ur92AFjWbXT80MwCgDcRudlp15Lm5PklKs3cUyMA5HkFx1tGgMey6aJo49AVed5AVIsIcCUiH4q2kucVxfzelToAZYCc84uI3CvYTZ5XENF1K/gEQIkCpRgsf7dc5Pktqm1oYxIBdkDA9u0GJ+5pYgbACIK7BUUheX6PF3e0NQVgsCvnXFJBWR2U/YEhLQy/j1u+ZfO8Yw403aGACwBj+woMWj93smPeND0p4A4AysdSAABi+cPdGgBwlzzWgAAQyx/u1gCAu+SxBgSAWP5wtwYA3CWPNSAAxPKHuzUA4C55rAEBIJY/3K0BAHfJYw0IALH84W4NALhLHmvAPwZcRZ99nzQgAAAAAElFTkSuQmCC"
    },
    5933: function(s, t) {
      s.exports =
        "data:image/png;base64,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"
    },
    "60d4": function(s, t, i) {
      "use strict";
      i("182b")
    },
    "62d4": function(s, t, i) {
      s.exports = i.p + "img/man.870ce025.png"
    },
    7640: function(s, t, i) {
      s.exports = i.p + "img/sifter1.d7c17399.gif"
    },
    7809: function(s, t, i) {
      s.exports = i.p + "img/sifter5.0927b5f4.gif"
    },
    "7fd1": function(s, t, i) {
      s.exports = i.p + "img/sifter4.37a4e434.gif"
    },
    9958: function(s, t, i) {
      s.exports = i.p + "img/woman.4163fe53.png"
    },
    "9efc": function(s, t, i) {},
    cc18: function(s, t, i) {
      "use strict";
      var e = function() {
          var s = this,
            t = s._self._c;
          return t("div", [t("div", {
            staticClass: "title",
            class: {
              titleP: s.position
            }
          }, [t("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: s.showBack,
              expression: "showBack"
            }],
            staticClass: "topIcon back_icon",
            attrs: {
              src: i("16de"),
              alt: ""
            },
            on: {
              click: function(t) {
                return s.backHome()
              }
            }
          }), t("span", [s._v(s._s(s.title))]), t("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: s.showNewGame,
              expression: "showNewGame"
            }],
            staticClass: "topIcon set_icon",
            attrs: {
              src: i("5933"),
              alt: ""
            },
            on: {
              click: function(t) {
                return s.newGame()
              }
            }
          })])])
        },
        a = [],
        c = {
          namr: "toptar",
          components: {},
          props: {
            title: String,
            showBack: Boolean,
            position: Boolean,
            showNewGame: Boolean
          },
          data() {
            return {}
          },
          computed: {},
          watch: {},
          created() {},
          mounted() {},
          methods: {
            backHome() {
              this.$emit("backHome")
            },
            newGame() {
              this.$emit("newGame")
            }
          }
        },
        A = c,
        l = (i("d297"), i("2877")),
        o = Object(l["a"])(A, e, a, !1, null, "7ed464c4", null);
      t["a"] = o.exports
    },
    d297: function(s, t, i) {
      "use strict";
      i("9efc")
    },
    d6b6: function(s, t, i) {
      s.exports = i.p + "img/sifter3.06aad15f.gif"
    },
    eac6: function(s, t, i) {
      s.exports = i.p + "img/redflag.6a3a9703.png"
    },
    eb38: function(s, t, i) {
      s.exports = i.p + "img/sifter6.10012d09.gif"
    },
    f074: function(s, t, i) {
      s.exports = i.p + "img/sifter2.c6335b77.gif"
    }
  }
]);