(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(29418);
        },
      ]);
    },
    40471: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = s(85893),
        r = s(67294),
        a = s(91148),
        i = s(31139),
        n = s(14431),
        c = s(2728);
      function o(e) {
        let {
            width: t,
            height: s,
            src: o,
            fallbackSrc: d,
            fallbackColor: m,
            alt: x,
            onClick: h,
            domRef: u,
            className: f,
            style: g,
          } = e,
          b = (0, r.useRef)(null);
        (0, n.e)(b, { onClick: h });
        let p = (0, a.DB)([o].flat()),
          j = p.length > 0 ? (0, a.Do)([o, d].flat()) : [],
          v = j.join(" "),
          [N, w] = (0, r.useState)(0),
          y = j[N] || d,
          Z = null != x ? x : (0, c.a)(null != y ? y : "");
        return (
          (0, r.useEffect)(() => {
            w(0);
          }, [v]),
          (0, r.useEffect)(() => {
            var e;
            let t = (e) => {
              w((e) => e + 1);
            };
            return (
              null === (e = b.current) ||
                void 0 === e ||
                e.addEventListener("error", t),
              () => {
                var e;
                null === (e = b.current) ||
                  void 0 === e ||
                  e.removeEventListener("error", t);
              }
            );
          }, []),
          (0, l.jsx)("img", {
            width: t,
            height: s,
            ref: (0, i.Z)(u, b),
            className: "Image ".concat(null != f ? f : ""),
            src: y,
            alt: Z,
            style: { ...g, backgroundColor: m },
          })
        );
      }
    },
    92618: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var l = s(85893),
        r = s(91371),
        a = s(37012),
        i = s(31139),
        n = s(50352),
        c = s(27993),
        o = s(67294),
        d = s(66180),
        m = s(6994),
        x = s(36868);
      function h(e) {
        let {
            componentRef: t,
            className: s,
            panelClassName: c,
            arrowClassName: h,
            children: f,
            forceOpen: g,
            placement: b = "top",
            triggerBy: p,
            closeBy: j = "click-outside-but-trigger",
            disable: v,
            defaultOpen: N,
            darkGradient: w = !1,
            autoClose: y,
            ...Z
          } = e,
          k = (0, o.useRef)(),
          T = (0, o.useMemo)(
            () =>
              (0, n.kp)(f, u, (e) =>
                (0, a.Z)(e, { $isRenderByMain: !0, $popoverRef: k })
              ),
            [f]
          ),
          R = (0, r.ZP)((e) => e.isMobile);
        return (0, l.jsxs)(x.Z, {
          componentRef: (0, i.Z)(t, k),
          canOpen: !v,
          placement: R ? "top" : b,
          defaultOpen: N,
          triggerBy: null != p ? p : R ? "click" : "hover",
          forceOpen: g,
          className: s,
          triggerDelay: 100,
          closeBy: j,
          closeDelay: 100,
          autoClose: y,
          ...Z,
          children: [
            (0, l.jsx)(x.Z.Button, { children: f }),
            (0, l.jsx)(x.Z.Panel, {
              children: (e) => {
                let { locationInfo: t } = e;
                return (0, l.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, l.jsx)("div", {
                      className: (0, d.m)(
                        "w-2 h-2 absolute bg-[#0C0926] rotate-45 -translate-x-1 -translate-y-1",
                        w ? "bg-[transparent]" : "",
                        h
                      ),
                      style: t
                        ? {
                            top: t.arrowTopRelativeToPanel,
                            left: t.arrowLeftRelativeToPanel,
                          }
                        : { visibility: "hidden" },
                    }),
                    (0, l.jsx)(m.Z, {
                      className: (0, d.m)(
                        "TooltipPanel p-4 bg-[#0C0926] rounded-lg text-xs text-white",
                        c
                      ),
                      style: {
                        background: w
                          ? "linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134D 0%, #1B1659 100%)"
                          : "default",
                        border: w
                          ? "1px solid  rgba(171, 196, 255, 0.2)"
                          : "none",
                      },
                      children: T,
                    }),
                  ],
                });
              },
            }),
          ],
        });
      }
      function u(e) {
        var t;
        let {
          $isRenderByMain: s,
          $popoverRef: r,
          children: a,
          className: i,
        } = e;
        return s
          ? (0, l.jsx)("div", {
              className: i,
              children: (0, c.u)(a, [
                null !== (t = null == r ? void 0 : r.current) && void 0 !== t
                  ? t
                  : {},
              ]),
            })
          : null;
      }
      h.Panel = u;
    },
    29787: function (e, t, s) {
      "use strict";
      function l(e) {
        "document" in globalThis &&
          Object.assign(globalThis.document.createElement("a"), {
            target: "_blank",
            href: e,
            rel: "nofollow noopener noreferrer",
          }).click();
      }
      s.d(t, {
        Z: function () {
          return l;
        },
      });
    },
    99881: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = s(72573);
      function r(e) {
        let {
          groupSeparator: t = ",",
          fractionLength: s = 2,
          groupSize: r = 3,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return void 0 === e
          ? "0"
          : [
              (e) => (0, l.B)(e),
              (e) =>
                "auto" === s
                  ? e
                  : (function (e, t) {
                      var s;
                      let [, l = "", r = "", a = ""] =
                        null !== (s = e.match(/(-?)(\d*)\.?(\d*)/)) &&
                        void 0 !== s
                          ? s
                          : [];
                      return a
                        ? a.length < t
                          ? String(e)
                          : Number(e).toFixed(t)
                        : String(e);
                    })(e, s),
              (e) => {
                var s;
                let [, l = "", a = "", i = ""] =
                    null !== (s = e.match(/(-?)(\d*)\.?(\d*)/)) && void 0 !== s
                      ? s
                      : [],
                  n = [...a].reduceRight((e, s, l, a) => {
                    let i = a.length - 1 - l;
                    return s + (0 !== i && i % r == 0 ? t : "") + e;
                  }, "");
                return i
                  ? "".concat(l).concat(n, ".").concat(i)
                  : "".concat(l).concat(n);
              },
            ].reduce((e, t) => t(e), e);
      }
    },
    12754: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = s(67294);
      function r(e) {
        (0, l.useEffect)(() => {
          var t;
          globalThis.document &&
            e &&
            Reflect.set(
              null !== (t = globalThis.document) && void 0 !== t ? t : {},
              "title",
              e
            );
        }, []);
      }
    },
    43066: function (e, t, s) {
      "use strict";
      s.d(t, {
        N: function () {
          return a;
        },
      });
      var l = s(67294),
        r = s(85503);
      function a() {
        let {
            loop: e,
            disable: t,
            disableWhenDocumentInvisiable: s = !0,
            onLoop: a,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          { documentVisible: i } = (0, r.x)(),
          [n, c] = (0, l.useState)(0),
          o = (0, l.useCallback)(() => c((e) => e + 1), []),
          d = (0, l.useRef)(),
          m = (0, l.useMemo)(() => (!s || i) && !t, [t, s, i]);
        return (
          (0, l.useEffect)(() => {
            if (e) {
              if (m) {
                let t = globalThis.setInterval(() => {
                  null == a || a(), o();
                }, e);
                return (d.current = t), () => globalThis.clearInterval(t);
              }
              globalThis.clearInterval(d.current);
            }
          }, [m, e]),
          [n, o]
        );
      }
    },
    29418: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return O;
          },
        });
      var l = s(85893),
        r = s(11163),
        a = s(91371),
        i = s(67294),
        n = s(62512),
        c = s(43066),
        o = s(85356),
        d = s(59277),
        m = s(43067),
        x = s(6994),
        h = s(54592),
        u = s(60421),
        f = s(48162),
        g = s(40471),
        b = s(66042),
        p = s(66180),
        j = s(72305),
        v = s(99881),
        N = s(81451),
        w = s(51523),
        y = s(72573);
      function Z(e) {
        var t, s;
        let {
            className: r,
            currentValue: a,
            children: n,
            initValue: c,
            totalDuration: o = 600,
            eachLoopDuration: d = 50,
            maxDeltaPercent: m,
            groupSeparator: x = ",",
            groupSize: h = 3,
            fractionLength: u,
            formatter: f = (e) =>
              (0, v.Z)(e, {
                groupSeparator: x,
                groupSize: h,
                fractionLength: u,
              }),
          } = e,
          g = null !== (t = null != a ? a : n) && void 0 !== t ? t : j.xEJ,
          b = (0, i.useRef)(null != c ? c : g),
          Z = (0, i.useRef)(null),
          k = (e) => String(f(e));
        if (null != m) {
          let e = (0, w.lu)(g, b.current),
            t = (0, w.hi)(e, g),
            l = (0, N.lt)(t, -m) || (0, N.gt)(t, m);
          l &&
            (b.current =
              ((s = b.current),
              (0, w.uZ)((0, w.dC)(g, 1 - 1 * m), s, (0, w.dC)(g, 1 + 1 * m))));
        }
        return (
          (0, i.useEffect)(() => {
            let e = (0, w.hi)((0, w.lu)(g, b.current), o / d),
              t = (0, N.lt)(b.current, g),
              s = setInterval(() => {
                b.current = (0, y.B)((0, w.IH)(e, b.current));
                let l = (t ? N.gt : N.lt)(b.current, a);
                if (l)
                  Z.current && (Z.current.innerHTML = k((0, y.B)(a))),
                    clearInterval(s);
                else {
                  let e = (0, y.B)(b.current),
                    t = k(e);
                  Z.current && (Z.current.innerHTML = t);
                }
              }, d);
            return () => clearInterval(s);
          }, [g, c]),
          (0, l.jsx)("div", {
            ref: Z,
            className: (0, p.m)("NumberJelly tabular-nums inline-block", r),
            children: k((0, y.B)(b.current)),
          })
        );
      }
      var k = s(51800),
        T = s(92618),
        R = s(29787),
        P = s(12754);
      function C(e) {
        let { children: t } = e;
        return (
          (0, i.useEffect)(() => {
            let e;
            if (!("document" in globalThis)) return;
            let t = () => {
              globalThis.document.body.style.setProperty("--is-scrolling", "1"),
                globalThis.clearTimeout(e),
                (e = globalThis.setTimeout(() => {
                  globalThis.document.body.style.setProperty(
                    "--is-scrolling",
                    "0"
                  );
                }, 500));
            };
            return (
              document.addEventListener("scroll", t, { passive: !0 }),
              () => {
                document.removeEventListener("scroll", t),
                  globalThis.clearTimeout(e);
              }
            );
          }, []),
          (0, P.Z)("Raydium"),
          (0, l.jsx)("div", {
            className: "flow-root overflow-x-hidden",
            style: {
              backgroundColor: "#141041",
              backgroundImage:
                "url('/backgroundImages/home-page-bg-lights.webp')",
              backgroundSize: "100% 95%",
              backgroundRepeat: "no-repeat",
            },
            children: t,
          })
        );
      }
      function I() {
        let e = (0, a.ZP)((e) => e.isMobile),
          { push: t } = (0, r.useRouter)();
        return (0, l.jsxs)(k.Z, {
          className:
            "justify-between mobile:justify-center py-12 px-[min(160px,8vw)]",
          children: [
            (0, l.jsx)("div", {
              src: "/logo/logo-with-text.svg",
            }),
            !e &&
              (0, l.jsx)(m.Z, {
                className: "frosted-glass-teal connect-wallet",
                onClick: () => {
                  //   t("/swap");
                },
                children: "Claim Reflection",
              }),
          ],
        });
      }
      function S() {
        let e = (0, a.ZP)((e) => e.isMobile),
          { push: t } = (0, r.useRouter)(),
          { tvl: s, totalvolume: h } = (function () {
            let [e] = (0, c.N)({ loop: 6e4 }),
              [t, s] = (0, o.Z)("tvl"),
              [l, a] = (0, o.Z)("totalVolume"),
              m = (0, d.ZP)((e) => e.apiUrls.info),
              x = (0, i.useRef)(),
              { pathname: h } = (0, r.useRouter)(),
              u = (0, i.useCallback)(async () => {
                let e = await (function () {
                    let e = d.ZP.getState().apiUrls.info;
                    return (0, n.Z)(e, { ignoreCache: !0 });
                  })(),
                  { tvl: r, totalvolume: i } = null != e ? e : {};
                null != r && r != t && s(r), null != i && i != l && a(i);
              }, [e, t, l, m]);
            return (
              (0, i.useEffect)(() => {
                if ("/" === h)
                  return (
                    u(),
                    (x.current = setInterval(u, 6e4)),
                    () => {
                      clearInterval(x.current);
                    }
                  );
              }, [h]),
              { tvl: t, totalvolume: l }
            );
          })();
        return (0, l.jsxs)("section", {
          className: "grid-child-center grid-cover-container mb-16 relative",
          children: [
            (0, l.jsx)(g.Z, {
              src: "../backgroundImages/home-bg-element-1.png",
              className: "w-[744px] mobile:w-[394px]",
            }),
            (0, l.jsxs)("div", {
              className: "grid-cover-content children-center",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "font-light text-[64px] mobile:text-[30px] text-white mb-4 mt-14 mobile:mt-9 leading-[60px] mobile:leading-[32px]",
                  children: [
                    "Powerful for developers ",
                    (0, l.jsx)("br", {}),
                    "Fast for everyone",
                    " ",
                    (0, l.jsx)("span", {
                      className:
                        "font-bold text-transparent bg-clip-text hidden",
                      style: {
                        background:
                          "radial-gradient(circle at top right,#39d0d8,#2b6aff)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                      },
                      children: "DeFi",
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "font-normal text-xl mobile:text-base text-[#adc6ff] mb-6",
                  children: [
                    "Bring blockchain to the people. Solana supports experiences for power users, ",
                    e ? (0, l.jsx)("br", {}) : "",
                    " new consumers, and everyone in between.",
                  ],
                }),
                (0, l.jsxs)(k.Z, {
                  className:
                    "gap-8 mobile:gap-4 mb-16 mobile:mb-6 grid grid-cols-2-fr",
                  children: [
                    (0, l.jsx)(m.Z, {
                      className:
                        "home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4 connect-wallet",
                      onClick: () => {
                        // t("/swap");
                      },
                      children: (0, l.jsxs)(k.Z, {
                        className: "items-center gap-2",
                        children: [
                          (0, l.jsx)("div", { children: "Connect Wallet" }),
                          (0, l.jsx)(f.Z, {
                            heroIconName: "chevron-right",
                            size: "xs",
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(m.Z, {
                      className:
                        "frosted-glass-teal text-white mobile:text-xs px-5 mobile:px-4 forsted-blur connect-wallet",
                      onClick: () => {
                        // (0, R.Z)("https://raydium.gitbook.io/raydium/");
                      },
                      children: (0, l.jsxs)(k.Z, {
                        className: "items-center gap-2",
                        children: [
                          (0, l.jsx)("div", { children: "Claim Reward" }),
                          (0, l.jsx)(f.Z, {
                            className: "hidden",
                            iconSrc: "/icons/gitbook.svg",
                            size: "sm",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(k.Z, {
                  className: "gap-6 mobile:gap-3 mb-9 grid grid-cols-2-fr",
                  children: [
                    (0, l.jsxs)(x.Z, {
                      className:
                        "frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "text-sm text-[#adc6ff] mb-1 mobile:text-[8px]",
                          children: "TOTAL VALUE LOCKED",
                        }),
                        (0, l.jsxs)(k.Z, {
                          className:
                            "justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider",
                          children: [
                            (0, l.jsx)("div", {
                              className: "mr-1",
                              children: "$",
                            }),
                            s &&
                              (0, l.jsx)(Z, {
                                fractionLength: 0,
                                eachLoopDuration: 400,
                                totalDuration: 48e4,
                                maxDeltaPercent: 0.05,
                                currentValue: s,
                                initValue: s ? 0.999 * s : void 0,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "text-sm text-[#adc6ff] mb-1 mobile:text-[8px]",
                          children: "TOTAL TRADING VOLUME",
                        }),
                        (0, l.jsxs)(k.Z, {
                          className:
                            "justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider",
                          children: [
                            (0, l.jsx)("div", {
                              className: "mr-1",
                              children: "$",
                            }),
                            h &&
                              (0, l.jsx)(Z, {
                                fractionLength: 0,
                                eachLoopDuration: 200,
                                totalDuration: 48e4,
                                maxDeltaPercent: 0.05,
                                currentValue: h,
                                initValue: h ? 0.999 * h : void 0,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(g.Z, {
                  src: "/logo/build-on-slogan.svg",
                  className: "transform mobile:scale-75",
                }),
              ],
            }),
          ],
        });
      }
      function L() {
        let { push: e } = (0, r.useRouter)();
        return (0, l.jsxs)("section", {
          className:
            "grid-child-center overflow-hidden relative mx-auto tablet:mx-5 px-24 mb-10 tablet:p-8 max-w-[1320px] min-h-[506px] hidden rounded-[100px] mobile:rounded-[40px]",
          style: {
            background:
              "radial-gradient(at center top, transparent 20%, hsl(245, 60%, 16%, 0.2)), url('/backgroundImages/home-page-section1-light.webp'), #1b1659",
            boxShadow:
              "8px 8px 10px rgba(20, 16, 65, 0.05), -8px -8px 10px rgba(197, 191, 255, 0.05), inset 0 6px 20px rgba(197, 191, 255, 0.2), inset 0 -1px 25px rgba(197, 191, 255, 0.1)",
            backgroundSize: "100% 100%",
          },
          children: [
            (0, l.jsx)("div", {
              className: "absolute inset-0 opacity-30",
              style: {
                background:
                  "linear-gradient(245.22deg, #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)",
                maskImage: "url('/backgroundImages/home-bg-element-2.png')",
                WebkitMaskImage:
                  "url('/backgroundImages/home-bg-element-2.png')",
                maskSize: "cover",
                WebkitMaskSize: "cover",
              },
            }),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: "mb-8",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-10 h-px my-2 mx-auto rounded-full",
                      style: {
                        background:
                          "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                      },
                    }),
                    (0, l.jsx)("div", {
                      className: "text-lg",
                      children:
                        "A suite of features powering the evolution of DeFi on Solana",
                    }),
                  ],
                }),
                (0, l.jsxs)(u.Z, {
                  className:
                    "gap-5 grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1",
                  children: [
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-trade.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Swap/Exchange",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children:
                            "Fix issues with swapping/exchange of tokens.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/swap");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-yield.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Validation",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "For all forms of validation.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/farms");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-pool.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Claim Airdrop",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Claim airdroop.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/liquidity/add");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Rectification",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Rectification node issues.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            //  // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),

                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-trade.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Buy/Sell",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Buy/Sell tokens on decentralized dapps.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/swap");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-yield.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Verification",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "For all forms of verification.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/farms");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-pool.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Withdrawal",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "For withdrawal related issues.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                            // e("/liquidity/add");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Staking",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Staking related issues.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Unstake",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children:
                            "Issues redeeming assets to your spot/dapp wallet.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Login Issues",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children:
                            "Issues relating to authentication of wallets.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Farm/Pool",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Farm/Pool Issues.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Missing Funds",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Recover missing funds/irregular balance.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "High Gas",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Issues relating to high gas fees.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Transaction Error",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Unsuccessful/failing transaction.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Mint",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Can not mint tokens.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Buy Presale",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Buy tokens before they're listed.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl mb-10",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Claim Presale",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children:
                            "Claim presale tokens that are ready for listing.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl mb-10",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Withdraw Token",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Fix all withdrawal issues on tokens.",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl mb-10",
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-acceleraytor.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Swap Token",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-sm text-[#c4d6ff] mb-5",
                          children: "Fix all swap related issues",
                        }),
                        (0, l.jsx)(m.Z, {
                          className: "frosted-glass-teal connect-wallet",
                          onClick: () => {
                             // e("https://v1.raydium.io/acceleRaytor");
                          },
                          children: "Click here",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function E() {
        let e = (0, a.ZP)((e) => e.isMobile),
          t = (0, a.ZP)((e) => e.isTablet);
        return (0, l.jsxs)("section", {
          className: "hidden ", //grid-child-center grid-cover-container",
          children: [
            (0, l.jsx)("div", {
              className: "w-screen h-full",
              style: {
                background:
                  e || t
                    ? "url('/backgroundImages/home-bg-element-4.png') 0% 0% / 100% 100%"
                    : "url('/backgroundImages/home-bg-element-3.png') 0% 0% / 100% 100%",
              },
            }),
            (0, l.jsxs)("div", {
              className:
                "max-w-[1220px] px-14 tablet:px-4 mt-28 mx-16 tablet:mx-4 mb-44",
              children: [
                (0, l.jsxs)("div", {
                  className: "mb-8",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-10 h-px my-2 mx-auto rounded-full",
                      style: {
                        background:
                          "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                      },
                    }),
                    (0, l.jsx)("div", {
                      className: "text-lg",
                      children:
                        "Raydium provides Ecosystem-Wide Liquidity for users and projects",
                    }),
                  ],
                }),
                (0, l.jsxs)(u.Z, {
                  className:
                    "gap-6 grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 justify-items-center",
                  children: [
                    (0, l.jsxs)(x.Z, {
                      className:
                        "max-w-[356px] grid children-center frosted-glass-smoke  forsted-blur-sm py-6 px-10 rounded-3xl",
                      style: {
                        gridTemplateRows: "auto auto 1fr",
                        alignItems: "normal",
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-order-book-AMM.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Order Book AMM",
                        }),
                        (0, l.jsxs)("div", {
                          className: "font-light text-[#c4d6ff] mb-5",
                          children: [
                            "Raydium",
                            "'",
                            "s AMM interacts with OpenBook",
                            "'",
                            "s central limit order book, meaning that pools have access to all order flow and liquidity on OpenBook, and vice versa.",
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "max-w-[356px] grid children-center frosted-glass-smoke  forsted-blur-sm py-6 px-10 rounded-3xl",
                      style: {
                        gridTemplateRows: "auto auto 1fr",
                        alignItems: "normal",
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-yield.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Best Price Swaps",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-[#c4d6ff] mb-5",
                          children:
                            "Raydium determines the best swap route among all pools in order to provide the best price for users, and executes accordingly.",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(x.Z, {
                      className:
                        "max-w-[356px] grid children-center frosted-glass-smoke  forsted-blur-sm py-6 px-10 rounded-3xl",
                      style: {
                        gridTemplateRows: "auto auto 1fr",
                        alignItems: "normal",
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: "frosted-glass-teal p-3 mb-3 rounded-xl",
                          children: (0, l.jsx)(f.Z, {
                            iconSrc: "/icons/home-pool.svg",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "font-semibold text-lg text-white mb-2",
                          children: "Premissionless Liquidity",
                        }),
                        (0, l.jsx)("div", {
                          className: "font-light text-[#c4d6ff] mb-5",
                          children:
                            "Raydium enables the permissionless creation of liquidity pools and farms so projects can launch and bootstrap liquidity in a decentralized manner.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function M() {
        let e = (0, a.ZP)((e) => e.isMobile),
          t = (0, a.ZP)((e) => e.isTablet);
        return (0, l.jsxs)("footer", {
          className: "pt-56 overflow-hidden",
          style: {
            background:
              t || e
                ? "url('/backgroundImages/home-footer-bg.webp') 0 0 / auto 100%"
                : "url('/backgroundImages/home-footer-bg.webp') 0 0 / 100% 100%",
          },
          children: [
            (0, l.jsxs)(u.Z, {
              className:
                "mobile:gap-14 justify-around px-[10%] grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 gap-16 gap-y-4",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-8",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-sm mb-3 tablet:text-center",
                          children: "ABOUT",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "w-6 h-px my-2 rounded-full tablet:mx-auto",
                          style: {
                            background:
                              "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                          },
                        }),
                      ],
                    }),
                    (0, l.jsxs)(h.Z, {
                      className: "gap-6",
                      children: [
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://raydium.gitbook.io/raydium/",
                          children: "Documentation",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://coinmarketcap.com/currencies/raydium/",
                          children: "CoinMarketCap",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://www.coingecko.com/en/coins/raydium",
                          children: "CoinGecko",
                        }),
                        (0, l.jsx)(b.Z, {
                          openInNewTab: !0,
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "/docs/disclaimer",
                          children: "Disclaimer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-8",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-sm mb-3 tablet:text-center",
                          children: "PROTOCOL",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "w-6 h-px my-2 rounded-full tablet:mx-auto",
                          style: {
                            background:
                              "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                          },
                        }),
                      ],
                    }),
                    (0, l.jsxs)(h.Z, {
                      className: "gap-6",
                      children: [
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://forms.gle/Fjq4MiRA2qWbPyt29",
                          children: "Apply for DropZone",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses",
                          children: "Apply for Fusion Pool",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses",
                          children: "Apply for AcceleRaytor",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://raydium.gitbook.io/raydium/permissionless/creating-a-pool",
                          children: "Permissionless Pool",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-8",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-sm mb-3 tablet:text-center",
                          children: "SUPPORT",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "w-6 h-px my-2 rounded-full tablet:mx-auto",
                          style: {
                            background:
                              "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                          },
                        }),
                      ],
                    }),
                    (0, l.jsxs)(h.Z, {
                      className: "gap-6",
                      children: [
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://raydium.gitbook.io/raydium/trading-on-serum/spl-wallets",
                          children: "Getting Started on Raydium",
                        }),
                        (0, l.jsx)(b.Z, {
                          className:
                            "text-[#c4d6ff] hover:text-white tablet:text-center",
                          href: "https://raydium.gitbook.io/raydium/trading-on-serum/faq",
                          children: "FAQ",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "tablet:col-span-full tablet:justify-self-center",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-8 tablet:hidden",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-sm mb-3",
                          children: "COMMUNITY",
                        }),
                        (0, l.jsx)("div", {
                          className: "w-6 h-px my-2 rounded-full",
                          style: {
                            background:
                              "radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
                          },
                        }),
                      ],
                    }),
                    (0, l.jsxs)(u.Z, {
                      className:
                        "flex flex-col tablet:flex-row gap-6 tablet:gap-10",
                      children: [
                        (0, l.jsx)(b.Z, {
                          className: "text-[#c4d6ff] hover:text-white",
                          href: "https://twitter.com/RaydiumProtocol",
                          children: (0, l.jsxs)(k.Z, {
                            className: "items-center gap-2",
                            children: [
                              (0, l.jsx)(f.Z, {
                                className:
                                  "frosted-glass-teal p-1.5 rounded-lg text",
                                iconClassName: "w-5 h-5 tablet:w-6 tablet:h-6",
                                iconSrc: "icons/media-twitter.svg",
                              }),
                              (0, l.jsx)("div", {
                                className: "tablet:hidden",
                                children: "Twitter",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(b.Z, {
                          className: "text-[#c4d6ff] hover:text-white",
                          href: "https://raydium.medium.com/",
                          children: (0, l.jsxs)(k.Z, {
                            className: "items-center gap-2",
                            children: [
                              (0, l.jsx)(f.Z, {
                                className:
                                  "frosted-glass-teal p-1.5 rounded-lg text",
                                iconClassName: "w-5 h-5 tablet:w-6 tablet:h-6",
                                iconSrc: "icons/media-medium.svg",
                              }),
                              (0, l.jsx)("div", {
                                className: "tablet:hidden",
                                children: "Medium",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(b.Z, {
                          className: "text-[#c4d6ff] hover:text-white",
                          href: "https://discord.gg/raydium",
                          children: (0, l.jsxs)(k.Z, {
                            className: "items-center gap-2",
                            children: [
                              (0, l.jsx)(f.Z, {
                                className:
                                  "frosted-glass-teal p-1.5 rounded-lg text",
                                iconClassName: "w-5 h-5 tablet:w-6 tablet:h-6",
                                iconSrc: "icons/media-discord.svg",
                              }),
                              (0, l.jsx)("div", {
                                className: "tablet:hidden",
                                children: "Discord",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(k.Z, {
                          className: "items-center gap-2",
                          children: (0, l.jsxs)(T.Z, {
                            triggerBy: "click",
                            placement: t || e ? "left" : "right",
                            children: [
                              (0, l.jsxs)(k.Z, {
                                className:
                                  "text-[#c4d6ff] hover:text-white items-center gap-1 cursor-pointer",
                                children: [
                                  (0, l.jsx)(f.Z, {
                                    className:
                                      "frosted-glass-teal p-1.5 rounded-lg text",
                                    iconClassName:
                                      "w-5 h-5 tablet:w-6 tablet:h-6",
                                    iconSrc: "/icons/media-telegram.svg",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "tablet:hidden",
                                    children: "Telegram",
                                  }),
                                  (0, l.jsx)(f.Z, {
                                    size: "sm",
                                    heroIconName: "chevron-down",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(T.Z.Panel, {
                                children: (0, l.jsxs)(h.Z, {
                                  className: "divide-y-1.5",
                                  children: [
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/raydiumprotocol",
                                      children: "Telegram (EN)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/RaydiumChina",
                                      children: "Telegram (CN)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/raydiumkorea",
                                      children: "Telegram (KR)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/raydiumjapan",
                                      children: "Telegram (JP)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/RaydiumSpanish",
                                      children: "Telegram (ES)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/RaydiumTurkey",
                                      children: "Telegram (TR)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/RaydiumVietnam",
                                      children: "Telegram (VN)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/RaydiumRussian",
                                      children: "Telegram (RU)",
                                    }),
                                    (0, l.jsx)(b.Z, {
                                      className:
                                        "border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",
                                      href: "https://t.me/raydiumthailand",
                                      children: "Telegram (TH)",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(g.Z, {
              className:
                "mx-auto p-20 transform scale-125 pointer-events-none hidden",
              src: "/logo/logo-with-text.svg",
            }),
          ],
        });
      }
      function O() {
        return (0, l.jsxs)(C, {
          children: [
            (0, l.jsx)(I, {}),
            (0, l.jsx)(S, {}),
            (0, l.jsx)(L, {}),
            (0, l.jsx)(E, {}),
            (0, l.jsx)(M, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
