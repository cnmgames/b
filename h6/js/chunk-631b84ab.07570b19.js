(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-631b84ab"], {
    "16de": function(t, s) {
      t.exports =
        "data:image/png;base64,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"
    },
    "254a": function(t, s, A) {},
    "3c81": function(t, s, A) {
      "use strict";
      A("254a")
    },
    "406a": function(t, s, A) {
      "use strict";
      A.r(s);
      var e = function() {
          var t = this,
            s = t._self._c;
          return s("div", {
            staticClass: "innerBox"
          }, [s("topGame", {
            attrs: {
              title: t.titleName,
              showBack: !0,
              position: !1,
              showNewGame: !1
            },
            on: {
              backHome: t.turnHome
            }
          }), s("vue-particles", {
            attrs: {
              color: "#6e87d6",
              particleOpacity: 1,
              particlesNumber: 50,
              shapeType: "circle",
              particleSize: 4,
              linesColor: "#9795f0",
              linesWidth: 0,
              lineLinked: !1,
              lineOpacity: 0,
              linesDistance: 0,
              moveSpeed: 5,
              hoverEffect: !1,
              hoverMode: "repulse",
              clickEffect: !1,
              clickMode: "repulse"
            }
          }), s("div", {
            staticClass: "bgc1"
          }), s("div", {
            staticClass: "bgc2"
          }), s("div", {
            staticClass: "bgc3"
          }), s("div", {
            staticClass: "tableTitle"
          }, [t._v(t._s("幸运转盘"))]), t._m(0), s("div", {
            staticClass: "pointer"
          }), s("div", {
            staticClass: "goBtn",
            on: {
              click: t.go
            }
          }, [t._v("GO")]), s("van-popup", {
            model: {
              value: t.showText,
              callback: function(s) {
                t.showText = s
              },
              expression: "showText"
            }
          }, [s("div", {
            staticClass: "iptBox"
          }, [s("div", {
            staticClass: "iptTitle",
            staticStyle: {
              margin: "0.5rem 0 0.3rem  0"
            }
          }, [t._v("任务")]), s("div", {
            staticClass: "errorTip"
          }, [t._v(t._s(t.text))])])])], 1)
        },
        a = [function() {
          var t = this,
            s = t._self._c;
          return s("div", {
            staticClass: "wrapper",
            attrs: {
              id: "wrapperBox"
            }
          }, [s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "light"
          }), s("div", {
            staticClass: "panel"
          }, [s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])]), s("div", {
            staticClass: "sector"
          }, [s("div", {
            staticClass: "sector-inner"
          }, [s("span")])])])])
        }],
        i = (A("14d9"), A("cc18")),
        o = {
          name: "dice",
          components: {
            topGame: i["a"]
          },
          props: {},
          data() {
            return {
              titleName: "",
              showText: !1,
              nextBtn: !0,
              gobtn: !0,
              text: "",
              tableList: [],
              list1: ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            }
          },
          computed: {},
          watch: {},
          created() {},
          mounted() {
            if (1 == this.$route.params.type) this.titleName = "基础模式", this.tableList = this.list1;
            else if (2 == this.$route.params.type);
            else if (-1 != this.$route.params.type.indexOf("auto")) {
              let t = JSON.parse(localStorage.getItem("tableList")),
                s = this.$route.params.type.split("-")[1];
              this.titleName = t[s].name, this.tableList = t[s].list
            }
          },
          methods: {
            go() {
              this.gobtn = !1, this.turn()
            },
            turn() {
              let t = document.getElementsByClassName.bind(document),
                s = document.getElementById("wrapperBox"),
                A = (t("pointer")[0], Array.prototype.slice.call(t("light")));
              A.forEach(t => {
                t.className += " light-twinkling"
              });
              let e = 360 * Math.random() + 1080,
                a = Math.floor((e + 18) % 360 / 36);
              console.log("num", e), console.log("index", 11 - a), s.style.transition = "all 0s", s.style
                .transform = "rotate(0deg)", setTimeout(() => {
                  s.style.transition = "all 5s ease", s.style.transform = `rotate(${e}deg)`
                }, 100), setTimeout(() => {
                  A.forEach(t => {
                    t.className = "light"
                  })
                }, 7e3), setTimeout(() => {
                  this.text = 0 == a ? this.tableList[1] : this.tableList[11 - a], this.showText = !0, this
                    .gobtn = !0
                }, 6e3)
            },
            turnHome() {
              this.$router.push({
                name: "home",
                params: {
                  btn: "4"
                }
              })
            }
          }
        },
        c = o,
        n = (A("3c81"), A("2877")),
        l = Object(n["a"])(c, e, a, !1, null, "a4f2ae3a", null);
      s["default"] = l.exports
    },
    5933: function(t, s) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACMNJREFUeF7tnYuNHDcMhkedxJUkrsRxJfFVEruS3FUSXyUK6EiGvJhZ8ScpjR5cwPABNy+Rn8iflPYmHP7Z2gJh69H74A8HYHMIHAAHYHMLbD58jwAOwOYW2Hz4HgEcgH0tEGP86ziOP47j+C1Z4fU4jpcQwvddrLJlBIgxksP/KRxf+puc/zWE8LIDBLsCQM6nmf/s82UHCLYDIMb453EcfzNn92sI4SPz2CkPcwDqbqOU8HFVXbAjACT8vtT9/ssRy0KwIwAkAP8FAaDDlxSH2wFAnowxkgYgLSD5LCUOdwWAogBBUKsErgBZBoItAUhRgCD4JNADGYrvIYQPkhAy0jnbApCdkLqBqCj8CcHsFcL2AKRoIKkMSgg+hxCojTzdxwFILkvtYUl1MHWFsC0AyeHkvLwQlH/mdgnPZvt04nB5AJKjSezRJ6/8lU63DttTQbAcAIXDydnSMk8LxTSdwyUAKJwuVfNah5+dPwUE0wJQOJ06ei1DugaO4SGYDoBBZ/szSIZuGE0DwISOL6Gg5eQh+wTDAzC54zMEw1YGQwMA7t7R5OrW51Kn8Gvrm0iuPyQAadZrVusktmh5zodRdxQNB0CMkWp32rTZ8pO3fdP/5RZw+jlXFGVloekn0A7jzy0Ho7n2UAAoV+au7EBOJQFG/7+hYizGyNlBfHXv4TeVDgOA0tCPDvixfUvi8HwhgzQ0vPNprLcDYGDo0vnUCfymzbeVL45wIu6wqv/x4W8FQLkEm8diulnTQIMMW/OfkXsbAEbON51pyrKTQJxuY8gtABg4n0QdGdvsS5xKATp8z/8qb3UHQJnzydD07V3TpopSgE4h9kYCQFpWmRtaCSPZdOgan6NWu0YAxUwzN7RBGjLVHxxntTimGwCKHGveRzdw/lRK/xk4XQBQlFZNDB1jpN2/kk0ktyj9h32N79TZtBLAvQCQGLyV85G/D1BOnls2dlxETrPeR3MAhF/EbOJ88qYwFZkLUE4+Z9hOrY2aAiAM/c2cnwBAVxvVRuY4++yYGGNknKvSSK0BQEu+5soaFIAq4zKcd3kIEKlUqakZAMAAshG6hVnmszWNRDU4mM+YLyOOUi0B4ISvnws6Pb9qXdlneIvSfwQCXJcQP3MTAEB6aey3zLYEAmmC39OGkXfrNnNtpl/9HkxVdBlRBG0FADL7RQ8uNexM54FRQDSRzAEQzP5hN0zeDYtgYwo8mVoAgDR9blPZdzuXe38wCsBawBQA8GGPEILp/blGne04cBENKqVNHcDoXJW299nPJBEUhFBfwBoAtvjz2c/0fjoMjALsqsoMADD8ixsXmNnWORq0L1sMWgKAtH1d+YNstkoDlgBww7/PftD5+XBQY7HSgAkAYHhy8ScHAFnJZFUDVgAgf3zZw78QADqNuUTMbg1bAcBu/rj6V3j/fwC4WotVDloB4Plf51f22WCrvaoD1ACAu348/7NdfX4gaO8uACCbLD3/6wFA3nhSFYIWEYD9l7Y9/yu9j3cFqyW3BQDcCoDdnbIx07pXAYRg1eYWAHBVaZXGdV1mOzKgIdQFAG4J6AAYcQAAUC0FLSIAF4CqIDGyz/KXAUrBLgBwewBeAhqhCQBQ3XRjEQG4AHgEsAOAXXrXKi8LADwFGDmWexkgAnRJAV4FcD1ndBwgArtUAVwAqg9jZJ/lLzMaANxGUDUcLe85owECf+CiWnpbaABuK9gBsAPATHhbAIDsUqmuThnZaNnLgHsDq6W3BQDI6pQDoEQT3H5XXX1VA9Bim5LSRkufDgjAahOIDGUFALcScB2gxNNSAFoCwBWCdE9PAwoIgE2hrM6rVQRAhCDrwRQ2WvZUoANINqjmf8sIgAhBTwNCRIHwz8r/ZgAkIcjVAZ4GBACA6r/aAMqPYJICEgBIGmA/oMBWS56CqP/0LgXWn9S3BABKA0kMmr3wYUmvF4MCxB87/JumgBQFuOsCdLhHASa14OyH7GoWAQRpYNrXrDD9ZnYYMvvRMtsUAIEYhGg1s+hEFwJnP7zk3gIARAzCf9VqIt+pHxX8GpioujIHQBAFvC9wgQrwBRC6gsiOrQBgb1pMY/fu4AMEYNePzq4u/Z5x1goAKgmR1797Kvi15EPSqHj2m5eBJWGC/OVVQTIg0vJNp4gX2JpEgAwCqGDpNFjFqpXWYBcA877aZq0BQLqD2RXb6gHBhCGbsVb9rjhvCkCqCFBBSKdtB4HQ+SLhV8LQAwBUEG4XCQSKXx36s5GbA5CiAEFAy8XoyxqXjwRC54tq/m5l4NmNwO3M5SWWbRcLBF+2i1j1P/qmSwQoqgKJHvhR5660fKx8a7lpVOwKQEoHyAbSEliz16XeWfkJ+iPl45qXyXcAQDrgEyl9oSNMZ4DwGeDTKq+q41zP3Pl00+4AFKKQIgGlBMlnqmiQhB6NFRXB2TZNnH8bAAUEyHrBGShDryEI3vp1NsZmzr8VgAICTTrIBiMQXgZ66SPNdhoXLepoPk2dfzsAxhDkaoF2w34LIXTdcGqQ4x9B6VL+3qIBzqaEsCHybHb90AnHcbyFEF410/Dq3MLpNNO1s728jbrFyx3vMACkaEBGJF0gFUtX4yYY8r+3tHuGDUVyNF2bnoveM2zt8DKVkfPZz8Z19NVxQwHQICXU7MNJE9YwXj1T83x/duPhAMgP2SAl1GC48/e39TaGBaCIBpp+wZ1O5dybQj2FfE4k4lwPPmZoAIpoIF1Shg3S6YRh+hdTAFCAQPU1RYReedmah+E6mFMBUKQFUuEWjRZrBz+rQqiuf+l1Q+59pgOgHFiD5gvXbtzjaMGre1OK+3B03NQAPGgEigpUo0sXmBC7PZ3px3G8j9KWrg1qCQBOokLrhk2+ZW4ukZpv1nGsOVHz++UAODNGShW5VUtRIovIx/8fTy/LM/o5d+immeE1OLYAoGaEnX/vAOzs/VVE4OY+VA3fI4DKfPOf7ADM70PVCBwAlfnmP9kBmN+HqhE4ACrzzX/yfy2BF72DP5G6AAAAAElFTkSuQmCC"
    },
    "9efc": function(t, s, A) {},
    cc18: function(t, s, A) {
      "use strict";
      var e = function() {
          var t = this,
            s = t._self._c;
          return s("div", [s("div", {
            staticClass: "title",
            class: {
              titleP: t.position
            }
          }, [s("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.showBack,
              expression: "showBack"
            }],
            staticClass: "topIcon back_icon",
            attrs: {
              src: A("16de"),
              alt: ""
            },
            on: {
              click: function(s) {
                return t.backHome()
              }
            }
          }), s("span", [t._v(t._s(t.title))]), s("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.showNewGame,
              expression: "showNewGame"
            }],
            staticClass: "topIcon set_icon",
            attrs: {
              src: A("5933"),
              alt: ""
            },
            on: {
              click: function(s) {
                return t.newGame()
              }
            }
          })])])
        },
        a = [],
        i = {
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
        o = i,
        c = (A("d297"), A("2877")),
        n = Object(c["a"])(o, e, a, !1, null, "7ed464c4", null);
      s["a"] = n.exports
    },
    d297: function(t, s, A) {
      "use strict";
      A("9efc")
    }
  }
]);