import { jsx as a, Fragment as _e, jsxs as w } from "react/jsx-runtime";
import * as m from "react";
import E, { useLayoutEffect as Dn, useState as q, useId as ee, useRef as ie, useImperativeHandle as Ln, useEffect as ce, useMemo as Lt, useCallback as le, createContext as Bn, useContext as Fn } from "react";
import * as Zr from "react-dom";
import $n, { createPortal as Ri } from "react-dom";
import { ChevronRight as rt, MoreHorizontal as Xe, MoreVertical as Qr, Check as Ie, X as Ne, ChevronDown as gt, HelpCircle as Ei, UploadCloud as Mi, Loader2 as Pi, AlertCircle as st, Upload as Ii, Image as Ai, FileText as yn, Archive as Oi, File as Ti, ZoomOut as ki, ZoomIn as Di, RotateCw as Li, Maximize2 as Bi, Download as vr, ScanSearch as Fi, ExternalLink as Jr, ChevronLeft as ft, FileX as $i, EyeOff as eo, FileSpreadsheet as zi, XCircle as ze, AlertTriangle as to, CheckCircle2 as no, Info as ro, EllipsisVertical as ji, CheckCircle as Yt, Search as Wi, Eye as Vi, Lock as Hi, Pin as Ui } from "lucide-react";
function je(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = m.createContext(s), c = n.length;
    n = [...n, s];
    const f = (d) => {
      var _;
      const { scope: p, children: h, ...b } = d, v = ((_ = p == null ? void 0 : p[e]) == null ? void 0 : _[c]) || l, g = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ a(v.Provider, { value: g, children: h });
    };
    f.displayName = i + "Provider";
    function u(d, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[c]) || l, b = m.useContext(h);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [f, u];
  }
  const o = () => {
    const i = n.map((s) => m.createContext(s));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, Gi(o, ...t)];
}
function Gi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((l, { useScope: c, scopeName: f }) => {
        const d = c(i)[`__scope${f}`];
        return { ...l, ...d };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function gr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = gr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : gr(e[o], null);
        }
      };
  };
}
function se(...e) {
  return m.useCallback(Xt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  const t = /* @__PURE__ */ Ki(e), n = m.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = m.Children.toArray(i), c = l.find(Xi);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ a(t, { ...s, ref: o, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ a(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const s = Zi(o), l = qi(i, o.props);
      return o.type !== m.Fragment && (l.ref = r ? Xt(r, s) : s), m.cloneElement(o, l);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var oo = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a(_e, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = oo, t;
}
function Xi(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oo;
}
function qi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const c = i(...l);
      return o(...l), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Zi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function zn(e) {
  const t = e + "CollectionProvider", [n, r] = je(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: _ } = v, N = E.useRef(null), y = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: g, itemMap: y, collectionRef: N, children: _ });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ zt(l), f = E.forwardRef(
    (v, g) => {
      const { scope: _, children: N } = v, y = i(l, _), C = se(g, y.collectionRef);
      return /* @__PURE__ */ a(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ zt(u), h = E.forwardRef(
    (v, g) => {
      const { scope: _, children: N, ...y } = v, C = E.useRef(null), M = se(g, C), P = i(u, _);
      return E.useEffect(() => (P.itemMap.set(C, { ref: C, ...y }), () => void P.itemMap.delete(C))), /* @__PURE__ */ a(p, { [d]: "", ref: M, children: N });
    }
  );
  h.displayName = u;
  function b(v) {
    const g = i(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const N = g.collectionRef.current;
      if (!N) return [];
      const y = Array.from(N.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, R) => y.indexOf(P.ref.current) - y.indexOf(R.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: f, ItemSlot: h },
    b,
    r
  ];
}
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Ae = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Qi = m[" useInsertionEffect ".trim().toString()] || Ae;
function qe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Ji({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, c = l ? e : o;
  {
    const u = m.useRef(e !== void 0);
    m.useEffect(() => {
      const d = u.current;
      d !== l && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, r]);
  }
  const f = m.useCallback(
    (u) => {
      var d;
      if (l) {
        const p = es(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function Ji({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Qi(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function es(e) {
  return typeof e == "function";
}
var ts = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ne = ts.reduce((e, t) => {
  const n = /* @__PURE__ */ zt(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ao(e, t) {
  e && Zr.flushSync(() => e.dispatchEvent(t));
}
function ns(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var We = (e) => {
  const { present: t, children: n } = e, r = rs(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = se(r.ref, os(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
We.displayName = "Presence";
function rs(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = ns(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const f = Pt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), Ae(() => {
    const f = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, h = Pt(f);
      e ? c("MOUNT") : h === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Ae(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = Pt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = Pt(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(f), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: m.useCallback((f) => {
      r.current = f ? getComputedStyle(f) : null, n(f);
    }, [])
  };
}
function Pt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function os(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var as = m[" useId ".trim().toString()] || (() => {
}), is = 0;
function Be(e) {
  const [t, n] = m.useState(as());
  return Ae(() => {
    n((r) => r ?? String(is++));
  }, [e]), t ? `radix-${t}` : "";
}
var qt = "Collapsible", [ss, io] = je(qt), [ls, jn] = ss(qt), so = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c, f] = qe({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: qt
    });
    return /* @__PURE__ */ a(
      ls,
      {
        scope: n,
        disabled: i,
        contentId: Be(),
        open: c,
        onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ a(
          ne.div,
          {
            "data-state": Vn(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
so.displayName = qt;
var lo = "CollapsibleTrigger", co = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = jn(lo, n);
    return /* @__PURE__ */ a(
      ne.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Vn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: U(e.onClick, o.onOpenToggle)
      }
    );
  }
);
co.displayName = lo;
var Wn = "CollapsibleContent", uo = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = jn(Wn, e.__scopeCollapsible);
    return /* @__PURE__ */ a(We, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(cs, { ...r, ref: t, present: i }) });
  }
);
uo.displayName = Wn;
var cs = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = jn(Wn, n), [l, c] = m.useState(r), f = m.useRef(null), u = se(t, f), d = m.useRef(0), p = d.current, h = m.useRef(0), b = h.current, v = s.open || l, g = m.useRef(v), _ = m.useRef(void 0);
  return m.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), Ae(() => {
    const N = f.current;
    if (N) {
      _.current = _.current || {
        transitionDuration: N.style.transitionDuration,
        animationName: N.style.animationName
      }, N.style.transitionDuration = "0s", N.style.animationName = "none";
      const y = N.getBoundingClientRect();
      d.current = y.height, h.current = y.width, g.current || (N.style.transitionDuration = _.current.transitionDuration, N.style.animationName = _.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ a(
    ne.div,
    {
      "data-state": Vn(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...i,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Vn(e) {
  return e ? "open" : "closed";
}
var ds = so, us = co, fs = uo, ps = m.createContext(void 0);
function Hn(e) {
  const t = m.useContext(ps);
  return e || t || "ltr";
}
var Ce = "Accordion", ms = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Un, hs, vs] = zn(Ce), [Zt] = je(Ce, [
  vs,
  io
]), Gn = io(), fo = E.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ a(Un.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ a(ws, { ...i, ref: t }) : /* @__PURE__ */ a(_s, { ...o, ref: t }) });
  }
);
fo.displayName = Ce;
var [po, gs] = Zt(Ce), [mo, bs] = Zt(
  Ce,
  { collapsible: !1 }
), _s = E.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [l, c] = qe({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Ce
    });
    return /* @__PURE__ */ a(
      po,
      {
        scope: e.__scopeAccordion,
        value: E.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: E.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ a(mo, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ a(ho, { ...s, ref: t }) })
      }
    );
  }
), ws = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, l] = qe({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Ce
  }), c = E.useCallback(
    (u) => l((d = []) => [...d, u]),
    [l]
  ), f = E.useCallback(
    (u) => l((d = []) => d.filter((p) => p !== u)),
    [l]
  );
  return /* @__PURE__ */ a(
    po,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ a(mo, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ a(ho, { ...i, ref: t }) })
    }
  );
}), [ys, Qt] = Zt(Ce), ho = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, l = E.useRef(null), c = se(l, t), f = hs(n), d = Hn(o) === "ltr", p = U(e.onKeyDown, (h) => {
      var I;
      if (!ms.includes(h.key)) return;
      const b = h.target, v = f().filter((T) => {
        var k;
        return !((k = T.ref.current) != null && k.disabled);
      }), g = v.findIndex((T) => T.ref.current === b), _ = v.length;
      if (g === -1) return;
      h.preventDefault();
      let N = g;
      const y = 0, C = _ - 1, M = () => {
        N = g + 1, N > C && (N = y);
      }, P = () => {
        N = g - 1, N < y && (N = C);
      };
      switch (h.key) {
        case "Home":
          N = y;
          break;
        case "End":
          N = C;
          break;
        case "ArrowRight":
          i === "horizontal" && (d ? M() : P());
          break;
        case "ArrowDown":
          i === "vertical" && M();
          break;
        case "ArrowLeft":
          i === "horizontal" && (d ? P() : M());
          break;
        case "ArrowUp":
          i === "vertical" && P();
          break;
      }
      const R = N % _;
      (I = v[R].ref.current) == null || I.focus();
    });
    return /* @__PURE__ */ a(
      ys,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ a(Un.Slot, { scope: n, children: /* @__PURE__ */ a(
          ne.div,
          {
            ...s,
            "data-orientation": i,
            ref: c,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), jt = "AccordionItem", [Ns, Kn] = Zt(jt), vo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, i = Qt(jt, n), s = gs(jt, n), l = Gn(n), c = Be(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ a(
      Ns,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ a(
          ds,
          {
            "data-orientation": i.orientation,
            "data-state": No(f),
            ...l,
            ...o,
            ref: t,
            disabled: u,
            open: f,
            onOpenChange: (d) => {
              d ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
vo.displayName = jt;
var go = "AccordionHeader", bo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qt(Ce, n), i = Kn(go, n);
    return /* @__PURE__ */ a(
      ne.h3,
      {
        "data-orientation": o.orientation,
        "data-state": No(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
bo.displayName = go;
var Nn = "AccordionTrigger", _o = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qt(Ce, n), i = Kn(Nn, n), s = bs(Nn, n), l = Gn(n);
    return /* @__PURE__ */ a(Un.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      us,
      {
        "aria-disabled": i.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: i.triggerId,
        ...l,
        ...r,
        ref: t
      }
    ) });
  }
);
_o.displayName = Nn;
var wo = "AccordionContent", yo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qt(Ce, n), i = Kn(wo, n), s = Gn(n);
    return /* @__PURE__ */ a(
      fs,
      {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
yo.displayName = wo;
function No(e) {
  return e ? "open" : "closed";
}
var Cs = fo, xs = vo, Ss = bo, Rs = _o, Es = yo;
function Ms() {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: "accordion__chevron",
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ a(
        "path",
        {
          d: "M5 7.5L10 12.5L15 7.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Pp({
  items: e,
  size: t = "medium",
  defaultValue: n,
  value: r,
  onValueChange: o,
  className: i
}) {
  return /* @__PURE__ */ a(
    Cs,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: o } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ w(
        xs,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ a(Ss, { className: "accordion__header", children: /* @__PURE__ */ w(Rs, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ a("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ a("span", { className: "accordion__title", children: l.header }),
              /* @__PURE__ */ a(Ms, {})
            ] }) }),
            /* @__PURE__ */ a(Es, { className: "accordion__content", children: /* @__PURE__ */ a("div", { className: "accordion__content-inner", children: l.content }) })
          ]
        },
        l.value
      ))
    }
  );
}
function Ee(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ps(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Is = "DismissableLayer", Cn = "dismissableLayer.update", As = "dismissableLayer.pointerDownOutside", Os = "dismissableLayer.focusOutside", br, Co = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yn = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = m.useContext(Co), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), b = se(t, (R) => d(R)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= _, M = Ds((R) => {
      const I = R.target, T = [...f.branches].some((k) => k.contains(I));
      !C || T || (o == null || o(R), s == null || s(R), R.defaultPrevented || l == null || l());
    }, p), P = Ls((R) => {
      const I = R.target;
      [...f.branches].some((k) => k.contains(I)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || l == null || l());
    }, p);
    return Ps((R) => {
      N === f.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && l && (R.preventDefault(), l()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (br = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), _r(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = br);
        };
    }, [u, p, n, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), _r());
    }, [u, f]), m.useEffect(() => {
      const R = () => h({});
      return document.addEventListener(Cn, R), () => document.removeEventListener(Cn, R);
    }, []), /* @__PURE__ */ a(
      ne.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: U(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: U(
          e.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }
);
Yn.displayName = Is;
var Ts = "DismissableLayerBranch", ks = m.forwardRef((e, t) => {
  const n = m.useContext(Co), r = m.useRef(null), o = se(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(ne.div, { ...e, ref: o });
});
ks.displayName = Ts;
function Ds(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          xo(
            As,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ls(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && xo(Os, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function _r() {
  const e = new CustomEvent(Cn);
  document.dispatchEvent(e);
}
function xo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ao(o, i) : o.dispatchEvent(i);
}
var dn = 0;
function Bs() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? wr()), document.body.insertAdjacentElement("beforeend", e[1] ?? wr()), dn++, () => {
      dn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), dn--;
    };
  }, []);
}
function wr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var un = "focusScope.autoFocusOnMount", fn = "focusScope.autoFocusOnUnmount", yr = { bubbles: !1, cancelable: !0 }, Fs = "FocusScope", So = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = m.useState(null), f = Ee(o), u = Ee(i), d = m.useRef(null), p = se(t, (v) => c(v)), h = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let v = function(y) {
        if (h.paused || !l) return;
        const C = y.target;
        l.contains(C) ? d.current = C : Le(d.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || Le(d.current, { select: !0 }));
      }, _ = function(y) {
        if (document.activeElement === document.body)
          for (const M of y)
            M.removedNodes.length > 0 && Le(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(_);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, h.paused]), m.useEffect(() => {
    if (l) {
      Cr.add(h);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const _ = new CustomEvent(un, yr);
        l.addEventListener(un, f), l.dispatchEvent(_), _.defaultPrevented || ($s(Hs(Ro(l)), { select: !0 }), document.activeElement === v && Le(l));
      }
      return () => {
        l.removeEventListener(un, f), setTimeout(() => {
          const _ = new CustomEvent(fn, yr);
          l.addEventListener(fn, u), l.dispatchEvent(_), _.defaultPrevented || Le(v ?? document.body, { select: !0 }), l.removeEventListener(fn, u), Cr.remove(h);
        }, 0);
      };
    }
  }, [l, f, u, h]);
  const b = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, _ = document.activeElement;
      if (g && _) {
        const N = v.currentTarget, [y, C] = zs(N);
        y && C ? !v.shiftKey && _ === C ? (v.preventDefault(), n && Le(y, { select: !0 })) : v.shiftKey && _ === y && (v.preventDefault(), n && Le(C, { select: !0 })) : _ === N && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ a(ne.div, { tabIndex: -1, ...s, ref: p, onKeyDown: b });
});
So.displayName = Fs;
function $s(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Le(r, { select: t }), document.activeElement !== n) return;
}
function zs(e) {
  const t = Ro(e), n = Nr(t, e), r = Nr(t.reverse(), e);
  return [n, r];
}
function Ro(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nr(e, t) {
  for (const n of e)
    if (!js(n, { upTo: t })) return n;
}
function js(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ws(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ws(e) && t && e.select();
  }
}
var Cr = Vs();
function Vs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = xr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = xr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function xr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hs(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Us = ["top", "right", "bottom", "left"], Fe = Math.min, he = Math.max, Wt = Math.round, It = Math.floor, Re = (e) => ({
  x: e,
  y: e
}), Gs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xn(e, t, n) {
  return he(e, Fe(t, n));
}
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Te(e) {
  return e.split("-")[0];
}
function lt(e) {
  return e.split("-")[1];
}
function Xn(e) {
  return e === "x" ? "y" : "x";
}
function qn(e) {
  return e === "y" ? "height" : "width";
}
function Se(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Zn(e) {
  return Xn(Se(e));
}
function Ks(e, t, n) {
  n === void 0 && (n = !1);
  const r = lt(e), o = Zn(e), i = qn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Vt(s)), [s, Vt(s)];
}
function Ys(e) {
  const t = Vt(e);
  return [Sn(e), t, Sn(t)];
}
function Sn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Sr = ["left", "right"], Rr = ["right", "left"], Xs = ["top", "bottom"], qs = ["bottom", "top"];
function Zs(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Rr : Sr : t ? Sr : Rr;
    case "left":
    case "right":
      return t ? Xs : qs;
    default:
      return [];
  }
}
function Qs(e, t, n, r) {
  const o = lt(e);
  let i = Zs(Te(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Sn)))), i;
}
function Vt(e) {
  const t = Te(e);
  return Gs[t] + e.slice(t.length);
}
function Js(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Eo(e) {
  return typeof e != "number" ? Js(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ht(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Er(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Se(t), s = Zn(t), l = qn(s), c = Te(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (lt(t)) {
    case "start":
      h[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && f ? -1 : 1);
      break;
  }
  return h;
}
async function el(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: c
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Oe(t, e), b = Eo(h), g = l[p ? d === "floating" ? "reference" : "floating" : d], _ = Ht(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: c
  })), N = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), C = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = Ht(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: N,
    offsetParent: y,
    strategy: c
  }) : N);
  return {
    top: (_.top - M.top + b.top) / C.y,
    bottom: (M.bottom - _.bottom + b.bottom) / C.y,
    left: (_.left - M.left + b.left) / C.x,
    right: (M.right - _.right + b.right) / C.x
  };
}
const tl = 50, nl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: el
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Er(f, r, c), p = r, h = 0;
  const b = {};
  for (let v = 0; v < i.length; v++) {
    const g = i[v];
    if (!g)
      continue;
    const {
      name: _,
      fn: N
    } = g, {
      x: y,
      y: C,
      data: M,
      reset: P
    } = await N({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: b,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, d = C ?? d, b[_] = {
      ...b[_],
      ...M
    }, P && h < tl && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (f = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = Er(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: b
  };
}, rl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: c
    } = t, {
      element: f,
      padding: u = 0
    } = Oe(e, t) || {};
    if (f == null)
      return {};
    const d = Eo(u), p = {
      x: n,
      y: r
    }, h = Zn(o), b = qn(h), v = await s.getDimensions(f), g = h === "y", _ = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[h] - p[h] - i.floating[b], M = p[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let R = P ? P[y] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(P))) && (R = l.floating[y] || i.floating[b]);
    const I = C / 2 - M / 2, T = R / 2 - v[b] / 2 - 1, k = Fe(d[_], T), S = Fe(d[N], T), A = k, z = R - v[b] - S, V = R / 2 - v[b] / 2 + I, Y = xn(A, V, z), W = !c.arrow && lt(o) != null && V !== Y && i.reference[b] / 2 - (V < A ? k : S) - v[b] / 2 < 0, $ = W ? V < A ? V - A : V - z : 0;
    return {
      [h]: p[h] + $,
      data: {
        [h]: Y,
        centerOffset: V - Y - $,
        ...W && {
          alignmentOffset: $
        }
      },
      reset: W
    };
  }
}), ol = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: f
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...g
      } = Oe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Te(o), N = Se(l), y = Te(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), M = p || (y || !v ? [Vt(l)] : Ys(l)), P = b !== "none";
      !p && P && M.push(...Qs(l, v, b, C));
      const R = [l, ...M], I = await c.detectOverflow(t, g), T = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && T.push(I[_]), d) {
        const V = Ks(o, s, C);
        T.push(I[V[0]], I[V[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((V) => V <= 0)) {
        var S, A;
        const V = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, Y = R[V];
        if (Y && (!(d === "alignment" ? N !== Se(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((B) => Se(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: V,
              overflows: k
            },
            reset: {
              placement: Y
            }
          };
        let W = (A = k.filter(($) => $.overflows[0] <= 0).sort(($, B) => $.overflows[1] - B.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var z;
              const $ = (z = k.filter((B) => {
                if (P) {
                  const O = Se(B.placement);
                  return O === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((O) => O > 0).reduce((O, j) => O + j, 0)]).sort((B, O) => B[1] - O[1])[0]) == null ? void 0 : z[0];
              $ && (W = $);
              break;
            }
            case "initialPlacement":
              W = l;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Mr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Pr(e) {
  return Us.some((t) => e[t] >= 0);
}
const al = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = Oe(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Mr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Pr(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Mr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Pr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Mo = /* @__PURE__ */ new Set(["left", "top"]);
async function il(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Te(n), l = lt(n), c = Se(n) === "y", f = Mo.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = Oe(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof b == "number" && (h = l === "end" ? b * -1 : b), c ? {
    x: h * u,
    y: p * f
  } : {
    x: p * f,
    y: h * u
  };
}
const sl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, c = await il(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, ll = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: (_) => {
            let {
              x: N,
              y
            } = _;
            return {
              x: N,
              y
            };
          }
        },
        ...f
      } = Oe(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Se(Te(o)), h = Xn(p);
      let b = u[h], v = u[p];
      if (s) {
        const _ = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", y = b + d[_], C = b - d[N];
        b = xn(y, b, C);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[_], C = v - d[N];
        v = xn(y, v, C);
      }
      const g = c.fn({
        ...t,
        [h]: b,
        [p]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: s,
            [p]: l
          }
        }
      };
    }
  };
}, cl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: l = 0,
        mainAxis: c = !0,
        crossAxis: f = !0
      } = Oe(e, t), u = {
        x: n,
        y: r
      }, d = Se(o), p = Xn(d);
      let h = u[p], b = u[d];
      const v = Oe(l, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[y] + g.mainAxis, M = i.reference[p] + i.reference[y] - g.mainAxis;
        h < C ? h = C : h > M && (h = M);
      }
      if (f) {
        var _, N;
        const y = p === "y" ? "width" : "height", C = Mo.has(Te(o)), M = i.reference[d] - i.floating[y] + (C && ((_ = s.offset) == null ? void 0 : _[d]) || 0) + (C ? 0 : g.crossAxis), P = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        b < M ? b = M : b > P && (b = P);
      }
      return {
        [p]: h,
        [d]: b
      };
    }
  };
}, dl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: c = () => {
        },
        ...f
      } = Oe(e, t), u = await s.detectOverflow(t, f), d = Te(o), p = lt(o), h = Se(o) === "y", {
        width: b,
        height: v
      } = i.floating;
      let g, _;
      d === "top" || d === "bottom" ? (g = d, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = b - u.left - u.right, C = Fe(v - u[g], N), M = Fe(b - u[_], y), P = !t.middlewareData.shift;
      let R = C, I = M;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (R = N), P && !p) {
        const k = he(u.left, 0), S = he(u.right, 0), A = he(u.top, 0), z = he(u.bottom, 0);
        h ? I = b - 2 * (k !== 0 || S !== 0 ? k + S : he(u.left, u.right)) : R = v - 2 * (A !== 0 || z !== 0 ? A + z : he(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: I,
        availableHeight: R
      });
      const T = await s.getDimensions(l.floating);
      return b !== T.width || v !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Jt() {
  return typeof window < "u";
}
function ct(e) {
  return Po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Me(e) {
  var t;
  return (t = (Po(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Po(e) {
  return Jt() ? e instanceof Node || e instanceof ve(e).Node : !1;
}
function we(e) {
  return Jt() ? e instanceof Element || e instanceof ve(e).Element : !1;
}
function ke(e) {
  return Jt() ? e instanceof HTMLElement || e instanceof ve(e).HTMLElement : !1;
}
function Ir(e) {
  return !Jt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ve(e).ShadowRoot;
}
function bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function ul(e) {
  return /^(table|td|th)$/.test(ct(e));
}
function en(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const fl = /transform|translate|scale|rotate|perspective|filter/, pl = /paint|layout|strict|content/, He = (e) => !!e && e !== "none";
let pn;
function Qn(e) {
  const t = we(e) ? ye(e) : e;
  return He(t.transform) || He(t.translate) || He(t.scale) || He(t.rotate) || He(t.perspective) || !Jn() && (He(t.backdropFilter) || He(t.filter)) || fl.test(t.willChange || "") || pl.test(t.contain || "");
}
function ml(e) {
  let t = $e(e);
  for (; ke(t) && !ot(t); ) {
    if (Qn(t))
      return t;
    if (en(t))
      return null;
    t = $e(t);
  }
  return null;
}
function Jn() {
  return pn == null && (pn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), pn;
}
function ot(e) {
  return /^(html|body|#document)$/.test(ct(e));
}
function ye(e) {
  return ve(e).getComputedStyle(e);
}
function tn(e) {
  return we(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $e(e) {
  if (ct(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ir(e) && e.host || // Fallback.
    Me(e)
  );
  return Ir(t) ? t.host : t;
}
function Io(e) {
  const t = $e(e);
  return ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ke(t) && bt(t) ? t : Io(t);
}
function pt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Io(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ve(o);
  if (i) {
    const l = Rn(s);
    return t.concat(s, s.visualViewport || [], bt(o) ? o : [], l && n ? pt(l) : []);
  } else
    return t.concat(o, pt(o, [], n));
}
function Rn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ao(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ke(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Wt(n) !== i || Wt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function er(e) {
  return we(e) ? e : e.contextElement;
}
function tt(e) {
  const t = er(e);
  if (!ke(t))
    return Re(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ao(t);
  let s = (i ? Wt(n.width) : n.width) / r, l = (i ? Wt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const hl = /* @__PURE__ */ Re(0);
function Oo(e) {
  const t = ve(e);
  return !Jn() || !t.visualViewport ? hl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ve(e) ? !1 : t;
}
function Ue(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = er(e);
  let s = Re(1);
  t && (r ? we(r) && (s = tt(r)) : s = tt(e));
  const l = vl(i, n, r) ? Oo(i) : Re(0);
  let c = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = ve(i), h = r && we(r) ? ve(r) : r;
    let b = p, v = Rn(b);
    for (; v && r && h !== b; ) {
      const g = tt(v), _ = v.getBoundingClientRect(), N = ye(v), y = _.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = _.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, b = ve(v), v = Rn(b);
    }
  }
  return Ht({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function nn(e, t) {
  const n = tn(e).scrollLeft;
  return t ? t.left + n : Ue(Me(e)).left + n;
}
function To(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - nn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function gl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Me(r), l = t ? en(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Re(1);
  const u = Re(0), d = ke(r);
  if ((d || !d && !i) && ((ct(r) !== "body" || bt(s)) && (c = tn(r)), d)) {
    const h = Ue(r);
    f = tt(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !d && !i ? To(s, c) : Re(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
  };
}
function bl(e) {
  return Array.from(e.getClientRects());
}
function _l(e) {
  const t = Me(e), n = tn(e), r = e.ownerDocument.body, o = he(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = he(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + nn(e);
  const l = -n.scrollTop;
  return ye(r).direction === "rtl" && (s += he(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const Ar = 25;
function wl(e, t) {
  const n = ve(e), r = Me(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Jn();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  const f = nn(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - h);
    b <= Ar && (i -= b);
  } else f <= Ar && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function yl(e, t) {
  const n = Ue(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ke(e) ? tt(e) : Re(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = o * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Or(e, t, n) {
  let r;
  if (t === "viewport")
    r = wl(e, n);
  else if (t === "document")
    r = _l(Me(e));
  else if (we(t))
    r = yl(t, n);
  else {
    const o = Oo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ht(r);
}
function ko(e, t) {
  const n = $e(e);
  return n === t || !we(n) || ot(n) ? !1 : ye(n).position === "fixed" || ko(n, t);
}
function Nl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pt(e, [], !1).filter((l) => we(l) && ct(l) !== "body"), o = null;
  const i = ye(e).position === "fixed";
  let s = i ? $e(e) : e;
  for (; we(s) && !ot(s); ) {
    const l = ye(s), c = Qn(s);
    !c && l.position === "fixed" && (o = null), (i ? !c && !o : !c && l.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || bt(s) && !c && ko(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = $e(s);
  }
  return t.set(e, r), r;
}
function Cl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? en(t) ? [] : Nl(t, this._c) : [].concat(n), r], l = Or(t, s[0], o);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const h = Or(t, s[p], o);
    c = he(h.top, c), f = Fe(h.right, f), u = Fe(h.bottom, u), d = he(h.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function xl(e) {
  const {
    width: t,
    height: n
  } = Ao(e);
  return {
    width: t,
    height: n
  };
}
function Sl(e, t, n) {
  const r = ke(t), o = Me(t), i = n === "fixed", s = Ue(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Re(0);
  function f() {
    c.x = nn(o);
  }
  if (r || !r && !i)
    if ((ct(t) !== "body" || bt(o)) && (l = tn(t)), r) {
      const h = Ue(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && f();
  i && !r && o && f();
  const u = o && !r && !i ? To(o, l) : Re(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function mn(e) {
  return ye(e).position === "static";
}
function Tr(e, t) {
  if (!ke(e) || ye(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Me(e) === n && (n = n.ownerDocument.body), n;
}
function Do(e, t) {
  const n = ve(e);
  if (en(e))
    return n;
  if (!ke(e)) {
    let o = $e(e);
    for (; o && !ot(o); ) {
      if (we(o) && !mn(o))
        return o;
      o = $e(o);
    }
    return n;
  }
  let r = Tr(e, t);
  for (; r && ul(r) && mn(r); )
    r = Tr(r, t);
  return r && ot(r) && mn(r) && !Qn(r) ? n : r || ml(e) || n;
}
const Rl = async function(e) {
  const t = this.getOffsetParent || Do, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Sl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function El(e) {
  return ye(e).direction === "rtl";
}
const Ml = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gl,
  getDocumentElement: Me,
  getClippingRect: Cl,
  getOffsetParent: Do,
  getElementRects: Rl,
  getClientRects: bl,
  getDimensions: xl,
  getScale: tt,
  isElement: we,
  isRTL: El
};
function Lo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pl(e, t) {
  let n = null, r;
  const o = Me(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), i();
    const f = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: p,
      height: h
    } = f;
    if (l || t(), !p || !h)
      return;
    const b = It(d), v = It(o.clientWidth - (u + p)), g = It(o.clientHeight - (d + h)), _ = It(u), y = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -_ + "px",
      threshold: he(0, Fe(1, c)) || 1
    };
    let C = !0;
    function M(P) {
      const R = P[0].intersectionRatio;
      if (R !== c) {
        if (!C)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Lo(f, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Il(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = er(e), u = o || i ? [...f ? pt(f) : [], ...t ? pt(t) : []] : [];
  u.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const d = f && l ? Pl(f, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((_) => {
    let [N] = _;
    N && N.target === f && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), f && !c && h.observe(f), t && h.observe(t));
  let b, v = c ? Ue(e) : null;
  c && g();
  function g() {
    const _ = Ue(e);
    v && !Lo(v, _) && n(), v = _, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var _;
    u.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (_ = h) == null || _.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const Al = sl, Ol = ll, Tl = ol, kl = dl, Dl = al, kr = rl, Ll = cl, Bl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ml,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return nl(e, t, {
    ...o,
    platform: i
  });
};
var Fl = typeof document < "u", $l = function() {
}, Bt = Fl ? Dn : $l;
function Ut(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ut(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ut(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Bo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dr(e, t) {
  const n = Bo(e);
  return Math.round(t * n) / n;
}
function hn(e) {
  const t = m.useRef(e);
  return Bt(() => {
    t.current = e;
  }), t;
}
function zl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: f
  } = e, [u, d] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = m.useState(r);
  Ut(p, r) || h(r);
  const [b, v] = m.useState(null), [g, _] = m.useState(null), N = m.useCallback((B) => {
    B !== P.current && (P.current = B, v(B));
  }, []), y = m.useCallback((B) => {
    B !== R.current && (R.current = B, _(B));
  }, []), C = i || b, M = s || g, P = m.useRef(null), R = m.useRef(null), I = m.useRef(u), T = c != null, k = hn(c), S = hn(o), A = hn(f), z = m.useCallback(() => {
    if (!P.current || !R.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    S.current && (B.platform = S.current), Bl(P.current, R.current, B).then((O) => {
      const j = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      V.current && !Ut(I.current, j) && (I.current = j, Zr.flushSync(() => {
        d(j);
      }));
    });
  }, [p, t, n, S, A]);
  Bt(() => {
    f === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const V = m.useRef(!1);
  Bt(() => (V.current = !0, () => {
    V.current = !1;
  }), []), Bt(() => {
    if (C && (P.current = C), M && (R.current = M), C && M) {
      if (k.current)
        return k.current(C, M, z);
      z();
    }
  }, [C, M, z, k, T]);
  const Y = m.useMemo(() => ({
    reference: P,
    floating: R,
    setReference: N,
    setFloating: y
  }), [N, y]), W = m.useMemo(() => ({
    reference: C,
    floating: M
  }), [C, M]), $ = m.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return B;
    const O = Dr(W.floating, u.x), j = Dr(W.floating, u.y);
    return l ? {
      ...B,
      transform: "translate(" + O + "px, " + j + "px)",
      ...Bo(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: j
    };
  }, [n, l, W.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: z,
    refs: Y,
    elements: W,
    floatingStyles: $
  }), [u, z, Y, W, $]);
}
const jl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? kr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? kr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Wl = (e, t) => {
  const n = Al(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Vl = (e, t) => {
  const n = Ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hl = (e, t) => ({
  fn: Ll(e).fn,
  options: [e, t]
}), Ul = (e, t) => {
  const n = Tl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gl = (e, t) => {
  const n = kl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Kl = (e, t) => {
  const n = Dl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yl = (e, t) => {
  const n = jl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Xl = "Arrow", Fo = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ a(
    ne.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ a("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Fo.displayName = Xl;
var ql = Fo;
function Zl(e) {
  const [t, n] = m.useState(void 0);
  return Ae(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, l;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          s = f.inlineSize, l = f.blockSize;
        } else
          s = e.offsetWidth, l = e.offsetHeight;
        n({ width: s, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var tr = "Popper", [$o, rn] = je(tr), [Ql, zo] = $o(tr), jo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ a(Ql, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
jo.displayName = tr;
var Wo = "PopperAnchor", Vo = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = zo(Wo, n), s = m.useRef(null), l = se(t, s), c = m.useRef(null);
    return m.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ a(ne.div, { ...o, ref: l });
  }
);
Vo.displayName = Wo;
var nr = "PopperContent", [Jl, ec] = $o(nr), Ho = m.forwardRef(
  (e, t) => {
    var G, J, Z, oe, fe, x;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: l = 0,
      avoidCollisions: c = !0,
      collisionBoundary: f = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: b,
      ...v
    } = e, g = zo(nr, n), [_, N] = m.useState(null), y = se(t, (L) => N(L)), [C, M] = m.useState(null), P = Zl(C), R = (P == null ? void 0 : P.width) ?? 0, I = (P == null ? void 0 : P.height) ?? 0, T = r + (i !== "center" ? "-" + i : ""), k = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, S = Array.isArray(f) ? f : [f], A = S.length > 0, z = {
      padding: k,
      boundary: S.filter(nc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: V, floatingStyles: Y, placement: W, isPositioned: $, middlewareData: B } = zl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...L) => Il(...L, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Wl({ mainAxis: o + I, alignmentAxis: s }),
        c && Vl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Hl() : void 0,
          ...z
        }),
        c && Ul({ ...z }),
        Gl({
          ...z,
          apply: ({ elements: L, rects: F, availableWidth: ue, availableHeight: Q }) => {
            const { width: pe, height: Pe } = F.reference, De = L.floating.style;
            De.setProperty("--radix-popper-available-width", `${ue}px`), De.setProperty("--radix-popper-available-height", `${Q}px`), De.setProperty("--radix-popper-anchor-width", `${pe}px`), De.setProperty("--radix-popper-anchor-height", `${Pe}px`);
          }
        }),
        C && Yl({ element: C, padding: l }),
        rc({ arrowWidth: R, arrowHeight: I }),
        p && Kl({ strategy: "referenceHidden", ...z })
      ]
    }), [O, j] = Ko(W), K = Ee(b);
    Ae(() => {
      $ && (K == null || K());
    }, [$, K]);
    const X = (G = B.arrow) == null ? void 0 : G.x, re = (J = B.arrow) == null ? void 0 : J.y, te = ((Z = B.arrow) == null ? void 0 : Z.centerOffset) !== 0, [D, H] = m.useState();
    return Ae(() => {
      _ && H(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ a(
      "div",
      {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: $ ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D,
          "--radix-popper-transform-origin": [
            (oe = B.transformOrigin) == null ? void 0 : oe.x,
            (fe = B.transformOrigin) == null ? void 0 : fe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((x = B.hide) == null ? void 0 : x.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a(
          Jl,
          {
            scope: n,
            placedSide: O,
            onArrowChange: M,
            arrowX: X,
            arrowY: re,
            shouldHideArrow: te,
            children: /* @__PURE__ */ a(
              ne.div,
              {
                "data-side": O,
                "data-align": j,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: $ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ho.displayName = nr;
var Uo = "PopperArrow", tc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Go = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = ec(Uo, r), s = tc[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ a(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ a(
          ql,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Go.displayName = Uo;
function nc(e) {
  return e !== null;
}
var rc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, _, N;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = Ko(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((_ = o.arrow) == null ? void 0 : _.x) ?? 0) + l / 2, h = (((N = o.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let b = "", v = "";
    return f === "bottom" ? (b = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (b = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, v = s ? d : `${h}px`) : f === "left" && (b = `${r.floating.width + c}px`, v = s ? d : `${h}px`), { data: { x: b, y: v } };
  }
});
function Ko(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var rr = jo, Yo = Vo, Xo = Ho, qo = Go, oc = "Portal", or = m.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  Ae(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? $n.createPortal(/* @__PURE__ */ a(ne.div, { ...r, ref: t }), s) : null;
});
or.displayName = oc;
var vn = "rovingFocusGroup.onEntryFocus", ac = { bubbles: !1, cancelable: !0 }, _t = "RovingFocusGroup", [En, Zo, ic] = zn(_t), [sc, Qo] = je(
  _t,
  [ic]
), [lc, cc] = sc(_t), Jo = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(En.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(En.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(dc, { ...e, ref: t }) }) })
);
Jo.displayName = _t;
var dc = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: c,
    onEntryFocus: f,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = m.useRef(null), h = se(t, p), b = Hn(i), [v, g] = qe({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: _t
  }), [_, N] = m.useState(!1), y = Ee(f), C = Zo(n), M = m.useRef(!1), [P, R] = m.useState(0);
  return m.useEffect(() => {
    const I = p.current;
    if (I)
      return I.addEventListener(vn, y), () => I.removeEventListener(vn, y);
  }, [y]), /* @__PURE__ */ a(
    lc,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (I) => g(I),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => N(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => R((I) => I + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => R((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        ne.div,
        {
          tabIndex: _ || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            M.current = !0;
          }),
          onFocus: U(e.onFocus, (I) => {
            const T = !M.current;
            if (I.target === I.currentTarget && T && !_) {
              const k = new CustomEvent(vn, ac);
              if (I.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const S = C().filter((W) => W.focusable), A = S.find((W) => W.active), z = S.find((W) => W.id === v), Y = [A, z, ...S].filter(
                  Boolean
                ).map((W) => W.ref.current);
                na(Y, u);
              }
            }
            M.current = !1;
          }),
          onBlur: U(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), ea = "RovingFocusGroupItem", ta = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = Be(), f = i || c, u = cc(ea, n), d = u.currentTabStopId === f, p = Zo(n), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ a(
      En.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          ne.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: U(e.onMouseDown, (g) => {
              r ? u.onItemFocus(f) : g.preventDefault();
            }),
            onFocus: U(e.onFocus, () => u.onItemFocus(f)),
            onKeyDown: U(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const _ = pc(g, u.orientation, u.dir);
              if (_ !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (_ === "last") y.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && y.reverse();
                  const C = y.indexOf(g.currentTarget);
                  y = u.loop ? mc(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => na(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
ta.displayName = ea;
var uc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pc(e, t, n) {
  const r = fc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return uc[r];
}
function na(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function mc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var hc = Jo, vc = ta, gc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qe = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), Ot = {}, gn = 0, ra = function(e) {
  return e && (e.host || ra(e.parentNode));
}, bc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ra(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _c = function(e, t, n, r) {
  var o = bc(t, Array.isArray(e) ? e : [e]);
  Ot[n] || (Ot[n] = /* @__PURE__ */ new WeakMap());
  var i = Ot[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  o.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), b = h !== null && h !== "false", v = (Qe.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          Qe.set(p, v), i.set(p, g), s.push(p), v === 1 && b && At.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), l.clear(), gn++, function() {
    s.forEach(function(d) {
      var p = Qe.get(d) - 1, h = i.get(d) - 1;
      Qe.set(d, p), i.set(d, h), p || (At.has(d) || d.removeAttribute(r), At.delete(d)), h || d.removeAttribute(n);
    }), gn--, gn || (Qe = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), Ot = {});
  };
}, wc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = gc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), _c(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, xe = function() {
  return xe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, xe.apply(this, arguments);
};
function oa(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function yc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ft = "right-scroll-bar-position", $t = "width-before-scroll-bar", Nc = "with-scroll-bars-hidden", Cc = "--removed-body-scroll-bar-size";
function bn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function xc(e, t) {
  var n = q(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Sc = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Lr = /* @__PURE__ */ new WeakMap();
function Rc(e, t) {
  var n = xc(null, function(r) {
    return e.forEach(function(o) {
      return bn(o, r);
    });
  });
  return Sc(function() {
    var r = Lr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || bn(l, null);
      }), i.forEach(function(l) {
        o.has(l) || bn(l, s);
      });
    }
    Lr.set(n, e);
  }, [e]), n;
}
function Ec(e) {
  return e;
}
function Mc(e, t) {
  t === void 0 && (t = Ec);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(l) {
          return l !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(i);
      }, f = function() {
        return Promise.resolve().then(c);
      };
      f(), n = {
        push: function(u) {
          s.push(u), f();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Pc(e) {
  e === void 0 && (e = {});
  var t = Mc(null);
  return t.options = xe({ async: !0, ssr: !1 }, e), t;
}
var aa = function(e) {
  var t = e.sideCar, n = oa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, xe({}, n));
};
aa.isSideCarExport = !0;
function Ic(e, t) {
  return e.useMedium(t), aa;
}
var ia = Pc(), _n = function() {
}, on = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: _n,
    onWheelCapture: _n,
    onTouchMoveCapture: _n
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, _ = e.as, N = _ === void 0 ? "div" : _, y = e.gapMode, C = oa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), M = p, P = Rc([n, t]), R = xe(xe({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(M, { sideCar: ia, removeScrollBar: f, shards: d, noRelative: h, noIsolation: b, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(l), xe(xe({}, R), { ref: P })) : m.createElement(N, xe({}, R, { className: c, ref: P }), l)
  );
});
on.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
on.classNames = {
  fullWidth: $t,
  zeroRight: Ft
};
var Ac = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Oc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ac();
  return t && e.setAttribute("nonce", t), e;
}
function Tc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function kc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Dc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Oc()) && (Tc(t, n), kc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Lc = function() {
  var e = Dc();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sa = function() {
  var e = Lc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Bc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Fc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [wn(n), wn(r), wn(o)];
}, $c = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bc;
  var t = Fc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, zc = sa(), nt = "data-scroll-locked", jc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Nc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(nt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ft, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat($t, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ft, " .").concat(Ft, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat($t, " .").concat($t, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nt, `] {
    `).concat(Cc, ": ").concat(l, `px;
  }
`);
}, Br = function() {
  var e = parseInt(document.body.getAttribute(nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Wc = function() {
  m.useEffect(function() {
    return document.body.setAttribute(nt, (Br() + 1).toString()), function() {
      var e = Br() - 1;
      e <= 0 ? document.body.removeAttribute(nt) : document.body.setAttribute(nt, e.toString());
    };
  }, []);
}, Vc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Wc();
  var i = m.useMemo(function() {
    return $c(o);
  }, [o]);
  return m.createElement(zc, { styles: jc(i, !t, o, n ? "" : "!important") });
}, Mn = !1;
if (typeof window < "u")
  try {
    var Tt = Object.defineProperty({}, "passive", {
      get: function() {
        return Mn = !0, !0;
      }
    });
    window.addEventListener("test", Tt, Tt), window.removeEventListener("test", Tt, Tt);
  } catch {
    Mn = !1;
  }
var Je = Mn ? { passive: !1 } : !1, Hc = function(e) {
  return e.tagName === "TEXTAREA";
}, la = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Hc(e) && n[t] === "visible")
  );
}, Uc = function(e) {
  return la(e, "overflowY");
}, Gc = function(e) {
  return la(e, "overflowX");
}, Fr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ca(e, r);
    if (o) {
      var i = da(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Kc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Yc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ca = function(e, t) {
  return e === "v" ? Uc(t) : Gc(t);
}, da = function(e, t) {
  return e === "v" ? Kc(t) : Yc(t);
}, Xc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, qc = function(e, t, n, r, o) {
  var i = Xc(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var h = da(e, l), b = h[0], v = h[1], g = h[2], _ = v - g - i * b;
    (b || _) && ca(e, l) && (d += _, p += b);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, kt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $r = function(e) {
  return [e.deltaX, e.deltaY];
}, zr = function(e) {
  return e && "current" in e ? e.current : e;
}, Zc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Qc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Jc = 0, et = [];
function ed(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(Jc++)[0], i = m.useState(sa)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = yc([e.lockRef.current], (e.shards || []).map(zr), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = m.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var _ = kt(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - _[0], C = "deltaY" in v ? v.deltaY : N[1] - _[1], M, P = v.target, R = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && R === "h" && P.type === "range")
      return !1;
    var I = window.getSelection(), T = I && I.anchorNode, k = T ? T === P || T.contains(P) : !1;
    if (k)
      return !1;
    var S = Fr(R, P);
    if (!S)
      return !0;
    if (S ? M = R : (M = R === "v" ? "h" : "v", S = Fr(R, P)), !S)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = M), !M)
      return !0;
    var A = r.current || M;
    return qc(A, g, v, A === "h" ? y : C);
  }, []), c = m.useCallback(function(v) {
    var g = v;
    if (!(!et.length || et[et.length - 1] !== i)) {
      var _ = "deltaY" in g ? $r(g) : kt(g), N = t.current.filter(function(M) {
        return M.name === g.type && (M.target === g.target || g.target === M.shadowParent) && Zc(M.delta, _);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(zr).filter(Boolean).filter(function(M) {
          return M.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(v, g, _, N) {
    var y = { name: v, delta: g, target: _, should: N, shadowParent: td(_) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = kt(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    f(v.type, $r(v), v.target, l(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    f(v.type, kt(v), v.target, l(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return et.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Je), document.addEventListener("touchmove", c, Je), document.addEventListener("touchstart", u, Je), function() {
      et = et.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, Je), document.removeEventListener("touchmove", c, Je), document.removeEventListener("touchstart", u, Je);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: Qc(o) }) : null,
    h ? m.createElement(Vc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function td(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const nd = Ic(ia, ed);
var ua = m.forwardRef(function(e, t) {
  return m.createElement(on, xe({}, e, { ref: t, sideCar: nd }));
});
ua.classNames = on.classNames;
var Pn = ["Enter", " "], rd = ["ArrowDown", "PageUp", "Home"], fa = ["ArrowUp", "PageDown", "End"], od = [...rd, ...fa], ad = {
  ltr: [...Pn, "ArrowRight"],
  rtl: [...Pn, "ArrowLeft"]
}, id = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, wt = "Menu", [mt, sd, ld] = zn(wt), [Ze, pa] = je(wt, [
  ld,
  rn,
  Qo
]), yt = rn(), ma = Qo(), [ha, Ve] = Ze(wt), [cd, Nt] = Ze(wt), va = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = yt(t), [c, f] = m.useState(null), u = m.useRef(!1), d = Ee(i), p = Hn(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(rr, { ...l, children: /* @__PURE__ */ a(
    ha,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ a(
        cd,
        {
          scope: t,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
va.displayName = wt;
var dd = "MenuAnchor", ar = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ a(Yo, { ...o, ...r, ref: t });
  }
);
ar.displayName = dd;
var ir = "MenuPortal", [ud, ga] = Ze(ir, {
  forceMount: void 0
}), ba = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Ve(ir, t);
  return /* @__PURE__ */ a(ud, { scope: t, forceMount: n, children: /* @__PURE__ */ a(We, { present: n || i.open, children: /* @__PURE__ */ a(or, { asChild: !0, container: o, children: r }) }) });
};
ba.displayName = ir;
var be = "MenuContent", [fd, sr] = Ze(be), _a = m.forwardRef(
  (e, t) => {
    const n = ga(be, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ve(be, e.__scopeMenu), s = Nt(be, e.__scopeMenu);
    return /* @__PURE__ */ a(mt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(We, { present: r || i.open, children: /* @__PURE__ */ a(mt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(pd, { ...o, ref: t }) : /* @__PURE__ */ a(md, { ...o, ref: t }) }) }) });
  }
), pd = m.forwardRef(
  (e, t) => {
    const n = Ve(be, e.__scopeMenu), r = m.useRef(null), o = se(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return wc(i);
    }, []), /* @__PURE__ */ a(
      lr,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), md = m.forwardRef((e, t) => {
  const n = Ve(be, e.__scopeMenu);
  return /* @__PURE__ */ a(
    lr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), hd = /* @__PURE__ */ zt("MenuContent.ScrollLock"), lr = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: l,
      onEntryFocus: c,
      onEscapeKeyDown: f,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: b,
      ...v
    } = e, g = Ve(be, n), _ = Nt(be, n), N = yt(n), y = ma(n), C = sd(n), [M, P] = m.useState(null), R = m.useRef(null), I = se(t, R, g.onContentChange), T = m.useRef(0), k = m.useRef(""), S = m.useRef(0), A = m.useRef(null), z = m.useRef("right"), V = m.useRef(0), Y = b ? ua : m.Fragment, W = b ? { as: hd, allowPinchZoom: !0 } : void 0, $ = (O) => {
      var G, J;
      const j = k.current + O, K = C().filter((Z) => !Z.disabled), X = document.activeElement, re = (G = K.find((Z) => Z.ref.current === X)) == null ? void 0 : G.textValue, te = K.map((Z) => Z.textValue), D = Ed(te, j, re), H = (J = K.find((Z) => Z.textValue === D)) == null ? void 0 : J.ref.current;
      (function Z(oe) {
        k.current = oe, window.clearTimeout(T.current), oe !== "" && (T.current = window.setTimeout(() => Z(""), 1e3));
      })(j), H && setTimeout(() => H.focus());
    };
    m.useEffect(() => () => window.clearTimeout(T.current), []), Bs();
    const B = m.useCallback((O) => {
      var K, X;
      return z.current === ((K = A.current) == null ? void 0 : K.side) && Pd(O, (X = A.current) == null ? void 0 : X.area);
    }, []);
    return /* @__PURE__ */ a(
      fd,
      {
        scope: n,
        searchRef: k,
        onItemEnter: m.useCallback(
          (O) => {
            B(O) && O.preventDefault();
          },
          [B]
        ),
        onItemLeave: m.useCallback(
          (O) => {
            var j;
            B(O) || ((j = R.current) == null || j.focus(), P(null));
          },
          [B]
        ),
        onTriggerLeave: m.useCallback(
          (O) => {
            B(O) && O.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: S,
        onPointerGraceIntentChange: m.useCallback((O) => {
          A.current = O;
        }, []),
        children: /* @__PURE__ */ a(Y, { ...W, children: /* @__PURE__ */ a(
          So,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: U(i, (O) => {
              var j;
              O.preventDefault(), (j = R.current) == null || j.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              Yn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ a(
                  hc,
                  {
                    asChild: !0,
                    ...y,
                    dir: _.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: M,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: U(c, (O) => {
                      _.isUsingKeyboardRef.current || O.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      Xo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": La(g.open),
                        "data-radix-menu-content": "",
                        dir: _.dir,
                        ...N,
                        ...v,
                        ref: I,
                        style: { outline: "none", ...v.style },
                        onKeyDown: U(v.onKeyDown, (O) => {
                          const K = O.target.closest("[data-radix-menu-content]") === O.currentTarget, X = O.ctrlKey || O.altKey || O.metaKey, re = O.key.length === 1;
                          K && (O.key === "Tab" && O.preventDefault(), !X && re && $(O.key));
                          const te = R.current;
                          if (O.target !== te || !od.includes(O.key)) return;
                          O.preventDefault();
                          const H = C().filter((G) => !G.disabled).map((G) => G.ref.current);
                          fa.includes(O.key) && H.reverse(), Sd(H);
                        }),
                        onBlur: U(e.onBlur, (O) => {
                          O.currentTarget.contains(O.target) || (window.clearTimeout(T.current), k.current = "");
                        }),
                        onPointerMove: U(
                          e.onPointerMove,
                          ht((O) => {
                            const j = O.target, K = V.current !== O.clientX;
                            if (O.currentTarget.contains(j) && K) {
                              const X = O.clientX > V.current ? "right" : "left";
                              z.current = X, V.current = O.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
_a.displayName = be;
var vd = "MenuGroup", cr = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(ne.div, { role: "group", ...r, ref: t });
  }
);
cr.displayName = vd;
var gd = "MenuLabel", wa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(ne.div, { ...r, ref: t });
  }
);
wa.displayName = gd;
var Gt = "MenuItem", jr = "menu.itemSelect", an = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), s = Nt(Gt, e.__scopeMenu), l = sr(Gt, e.__scopeMenu), c = se(t, i), f = m.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(jr, { bubbles: !0, cancelable: !0 });
        d.addEventListener(jr, (h) => r == null ? void 0 : r(h), { once: !0 }), ao(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      ya,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: U(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), f.current = !0;
        },
        onPointerUp: U(e.onPointerUp, (d) => {
          var p;
          f.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: U(e.onKeyDown, (d) => {
          const p = l.searchRef.current !== "";
          n || p && d.key === " " || Pn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
an.displayName = Gt;
var ya = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = sr(Gt, n), l = ma(n), c = m.useRef(null), f = se(t, c), [u, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const b = c.current;
      b && h((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      mt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a(vc, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: U(
              e.onPointerMove,
              ht((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              ht((b) => s.onItemLeave(b))
            ),
            onFocus: U(e.onFocus, () => d(!0)),
            onBlur: U(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), bd = "MenuCheckboxItem", Na = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(Ea, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      an,
      {
        role: "menuitemcheckbox",
        "aria-checked": Kt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": fr(n),
        onSelect: U(
          o.onSelect,
          () => r == null ? void 0 : r(Kt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Na.displayName = bd;
var Ca = "MenuRadioGroup", [_d, wd] = Ze(
  Ca,
  { value: void 0, onValueChange: () => {
  } }
), xa = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ee(r);
    return /* @__PURE__ */ a(_d, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(cr, { ...o, ref: t }) });
  }
);
xa.displayName = Ca;
var Sa = "MenuRadioItem", Ra = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = wd(Sa, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(Ea, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      an,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": fr(i),
        onSelect: U(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ra.displayName = Sa;
var dr = "MenuItemIndicator", [Ea, yd] = Ze(
  dr,
  { checked: !1 }
), Ma = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = yd(dr, n);
    return /* @__PURE__ */ a(
      We,
      {
        present: r || Kt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          ne.span,
          {
            ...o,
            ref: t,
            "data-state": fr(i.checked)
          }
        )
      }
    );
  }
);
Ma.displayName = dr;
var Nd = "MenuSeparator", Pa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Pa.displayName = Nd;
var Cd = "MenuArrow", Ia = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ a(qo, { ...o, ...r, ref: t });
  }
);
Ia.displayName = Cd;
var ur = "MenuSub", [xd, Aa] = Ze(ur), Oa = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Ve(ur, t), s = yt(t), [l, c] = m.useState(null), [f, u] = m.useState(null), d = Ee(o);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ a(rr, { ...s, children: /* @__PURE__ */ a(
    ha,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        xd,
        {
          scope: t,
          contentId: Be(),
          triggerId: Be(),
          trigger: l,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Oa.displayName = ur;
var ut = "MenuSubTrigger", Ta = m.forwardRef(
  (e, t) => {
    const n = Ve(ut, e.__scopeMenu), r = Nt(ut, e.__scopeMenu), o = Aa(ut, e.__scopeMenu), i = sr(ut, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(ar, { asChild: !0, ...f, children: /* @__PURE__ */ a(
      ya,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": La(n.open),
        ...e,
        ref: Xt(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: U(
          e.onPointerMove,
          ht((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          ht((d) => {
            var h, b;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (b = n.content) == null ? void 0 : b.dataset.side, g = v === "right", _ = g ? -5 : 5, N = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + _, y: d.clientY },
                  { x: N, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: N, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: U(e.onKeyDown, (d) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || ad[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Ta.displayName = ut;
var ka = "MenuSubContent", Da = m.forwardRef(
  (e, t) => {
    const n = ga(be, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ve(be, e.__scopeMenu), s = Nt(be, e.__scopeMenu), l = Aa(ka, e.__scopeMenu), c = m.useRef(null), f = se(t, c);
    return /* @__PURE__ */ a(mt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(We, { present: r || i.open, children: /* @__PURE__ */ a(mt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      lr,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: f,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          s.isUsingKeyboardRef.current && ((d = c.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: U(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: U(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: U(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = id[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Da.displayName = ka;
function La(e) {
  return e ? "open" : "closed";
}
function Kt(e) {
  return e === "indeterminate";
}
function fr(e) {
  return Kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Sd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Rd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ed(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Rd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Md(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function Pd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Md(n, t);
}
function ht(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Id = va, Ad = ar, Od = ba, Td = _a, kd = cr, Dd = wa, Ld = an, Bd = Na, Fd = xa, $d = Ra, zd = Ma, jd = Pa, Wd = Ia, Vd = Oa, Hd = Ta, Ud = Da, sn = "DropdownMenu", [Gd] = je(
  sn,
  [pa]
), de = pa(), [Kd, Ba] = Gd(sn), Fa = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = de(t), f = m.useRef(null), [u, d] = qe({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: sn
  });
  return /* @__PURE__ */ a(
    Kd,
    {
      scope: t,
      triggerId: Be(),
      triggerRef: f,
      contentId: Be(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ a(Id, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Fa.displayName = sn;
var $a = "DropdownMenuTrigger", za = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Ba($a, n), s = de(n);
    return /* @__PURE__ */ a(Ad, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      ne.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Xt(t, i.triggerRef),
        onPointerDown: U(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
za.displayName = $a;
var Yd = "DropdownMenuPortal", ja = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = de(t);
  return /* @__PURE__ */ a(Od, { ...r, ...n });
};
ja.displayName = Yd;
var Wa = "DropdownMenuContent", Va = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ba(Wa, n), i = de(n), s = m.useRef(!1);
    return /* @__PURE__ */ a(
      Td,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = o.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, (l) => {
          const c = l.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || f;
          (!o.modal || u) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Va.displayName = Wa;
var Xd = "DropdownMenuGroup", Ha = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(kd, { ...o, ...r, ref: t });
  }
);
Ha.displayName = Xd;
var qd = "DropdownMenuLabel", Ua = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Dd, { ...o, ...r, ref: t });
  }
);
Ua.displayName = qd;
var Zd = "DropdownMenuItem", Ga = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Ld, { ...o, ...r, ref: t });
  }
);
Ga.displayName = Zd;
var Qd = "DropdownMenuCheckboxItem", Ka = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Bd, { ...o, ...r, ref: t });
});
Ka.displayName = Qd;
var Jd = "DropdownMenuRadioGroup", Ya = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Fd, { ...o, ...r, ref: t });
});
Ya.displayName = Jd;
var eu = "DropdownMenuRadioItem", Xa = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a($d, { ...o, ...r, ref: t });
});
Xa.displayName = eu;
var tu = "DropdownMenuItemIndicator", qa = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(zd, { ...o, ...r, ref: t });
});
qa.displayName = tu;
var nu = "DropdownMenuSeparator", Za = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(jd, { ...o, ...r, ref: t });
});
Za.displayName = nu;
var ru = "DropdownMenuArrow", ou = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Wd, { ...o, ...r, ref: t });
  }
);
ou.displayName = ru;
var au = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = de(t), [l, c] = qe({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a(Vd, { ...s, open: l, onOpenChange: c, children: n });
}, iu = "DropdownMenuSubTrigger", Qa = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Hd, { ...o, ...r, ref: t });
});
Qa.displayName = iu;
var su = "DropdownMenuSubContent", Ja = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(
    Ud,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ja.displayName = su;
var Ct = Fa, xt = za, dt = ja, St = Va, lu = Ha, cu = Ua, Rt = Ga, du = Ka, uu = Ya, fu = Xa, ei = qa, pu = Za, mu = au, hu = Qa, vu = Ja;
function Wr({ type: e }) {
  return /* @__PURE__ */ a("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ a(rt, { size: 16 }) : /* @__PURE__ */ a("span", { children: "/" }) });
}
function gu({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(Ct, { children: [
    /* @__PURE__ */ a(xt, { asChild: !0, children: /* @__PURE__ */ a(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        "aria-haspopup": "menu",
        children: /* @__PURE__ */ a(Xe, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ a(dt, { children: /* @__PURE__ */ a(
      St,
      {
        className: "breadcrumbs__dropdown",
        sideOffset: 4,
        align: "start",
        children: e.map((n, r) => /* @__PURE__ */ a(
          Rt,
          {
            className: "breadcrumbs__dropdown-item",
            onSelect: () => {
              n.href && (t ? t(n.href) : window.location.href = n.href);
            },
            children: n.label
          },
          r
        ))
      }
    ) })
  ] });
}
function bu({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(Ct, { children: [
    /* @__PURE__ */ a(xt, { asChild: !0, children: /* @__PURE__ */ w(
      "button",
      {
        className: "breadcrumbs__menu-trigger",
        "aria-haspopup": "menu",
        title: e.label,
        children: [
          /* @__PURE__ */ a("span", { className: "breadcrumbs__label", children: e.label }),
          /* @__PURE__ */ a(rt, { size: 12, className: "breadcrumbs__menu-chevron" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(dt, { children: /* @__PURE__ */ a(
      St,
      {
        className: "breadcrumbs__dropdown",
        sideOffset: 4,
        align: "start",
        children: e.menu.map((n, r) => /* @__PURE__ */ a(
          Rt,
          {
            className: "breadcrumbs__dropdown-item",
            onSelect: () => {
              t ? t(n.href) : window.location.href = n.href;
            },
            children: n.label
          },
          r
        ))
      }
    ) })
  ] });
}
function _u({
  item: e,
  onNavigate: t
}) {
  if (e.current)
    return /* @__PURE__ */ a(
      "span",
      {
        className: "breadcrumbs__current",
        "aria-current": "page",
        title: e.label,
        children: /* @__PURE__ */ a("span", { className: "breadcrumbs__label", children: e.label })
      }
    );
  if (e.menu && e.menu.length > 0)
    return /* @__PURE__ */ a(bu, { item: e, onNavigate: t });
  const n = (r) => {
    t && e.href && (r.preventDefault(), t(e.href));
  };
  return /* @__PURE__ */ a(
    "a",
    {
      className: "breadcrumbs__link",
      href: e.href,
      title: e.label,
      onClick: n,
      children: /* @__PURE__ */ a("span", { className: "breadcrumbs__label", children: e.label })
    }
  );
}
function wu({
  items: e,
  separator: t = "chevron",
  maxItems: n,
  onNavigate: r,
  className: o
}) {
  const i = n !== void 0 && e.length > n, s = [];
  let l;
  if (i) {
    const f = Math.max(n - 2, 1), u = e[0], d = e.slice(e.length - f), p = e.slice(1, e.length - f);
    s.push(...p), l = [u, ...d];
  } else
    l = e;
  const c = [];
  return l.forEach((f, u) => {
    u === 0 || c.push(
      /* @__PURE__ */ a(Wr, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(gu, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ a(Wr, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(_u, { item: f, onNavigate: r }) }, u)
    );
  }), /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: ["breadcrumbs", o].filter(Boolean).join(" "),
      children: /* @__PURE__ */ a("ol", { className: "breadcrumbs__list", children: c })
    }
  );
}
function yu() {
  return /* @__PURE__ */ a("span", { className: "button__spinner", "aria-hidden": "true" });
}
const ge = E.forwardRef(
  function({
    variant: t = "fill",
    size: n = "medium",
    color: r = "primary",
    iconStart: o,
    iconEnd: i,
    loading: s = !1,
    disabled: l = !1,
    children: c,
    className: f,
    ...u
  }, d) {
    const p = c == null, h = s || !!o, b = !s && !!i;
    return /* @__PURE__ */ w(
      "button",
      {
        ref: d,
        className: ["button", f].filter(Boolean).join(" "),
        "data-variant": t,
        "data-size": n,
        "data-color": r,
        "data-loading": s ? "true" : void 0,
        "data-icon-only": p ? "" : void 0,
        "data-icon-start": h ? "" : void 0,
        "data-icon-end": b ? "" : void 0,
        disabled: l || s,
        "aria-busy": s ? !0 : void 0,
        ...u,
        children: [
          (s || o) && (s ? /* @__PURE__ */ a(yu, {}) : o),
          c,
          !s && i
        ]
      }
    );
  }
), me = E.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ a(ge, { ref: r, iconStart: t, ...n });
  }
), Nu = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function Cu(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function xu(e) {
  return e === "primary" ? "primary" : "neutral";
}
function Vr({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = Cu(e.type), o = xu(e.type);
  return t && e.icon ? /* @__PURE__ */ a(
    me,
    {
      icon: e.icon,
      "aria-label": e.label,
      variant: r,
      color: o,
      size: n,
      disabled: e.disabled,
      loading: e.loading,
      onClick: e.onClick,
      title: e.tooltip ?? e.label
    }
  ) : /* @__PURE__ */ a(
    ge,
    {
      variant: r,
      color: o,
      size: n,
      iconStart: e.icon,
      disabled: e.disabled,
      loading: e.loading,
      onClick: e.onClick,
      children: e.label
    }
  );
}
function Su({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ w(Ct, { children: [
    /* @__PURE__ */ a(xt, { asChild: !0, children: /* @__PURE__ */ a(
      me,
      {
        icon: /* @__PURE__ */ a(Qr, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ a(dt, { children: /* @__PURE__ */ a(
      St,
      {
        className: "buttons-toolbar__dropdown",
        sideOffset: 4,
        align: t === "left" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ w(
          Rt,
          {
            className: "buttons-toolbar__dropdown-item",
            disabled: n.disabled,
            onSelect: n.disabled ? void 0 : n.onClick,
            "data-disabled": n.disabled ? "" : void 0,
            children: [
              n.icon && /* @__PURE__ */ a("span", { className: "buttons-toolbar__dropdown-icon", "aria-hidden": "true", children: n.icon }),
              n.label
            ]
          },
          n.id
        ))
      }
    ) })
  ] });
}
function Ru({
  actions: e,
  variant: t = "full",
  iconOnly: n = !1,
  alignment: r = "left",
  className: o,
  style: i
}) {
  const s = (() => {
    const _ = [...e].reverse().findIndex((N) => N.type === "primary");
    return _ === -1 ? e.length - 1 : e.length - 1 - _;
  })(), l = e[s], c = e.filter((_, N) => N !== s), f = Nu[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const h = d.length > 0 ? /* @__PURE__ */ a(
    Su,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, b = u.map((_) => /* @__PURE__ */ a(Vr, { action: _, iconOnly: n }, _.id)), v = /* @__PURE__ */ a(Vr, { action: l, iconOnly: n }, l.id), g = r === "left" ? [h, ...b, v] : [v, ...b, h];
  return /* @__PURE__ */ a(
    "div",
    {
      role: "toolbar",
      "aria-label": "Page actions",
      className: ["buttons-toolbar", o].filter(Boolean).join(" "),
      "data-variant": t,
      "data-alignment": r,
      style: i,
      children: g
    }
  );
}
function Eu() {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: "checkbox__icon checkbox__icon--check",
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ a(
        "path",
        {
          d: "M2 6L5 9L10 3",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Mu() {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: "checkbox__icon checkbox__icon--dash",
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ a(
        "path",
        {
          d: "M2.5 6H9.5",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        }
      )
    }
  );
}
const Ip = E.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: o, id: i, className: s, ...l }, c) {
    const f = ee(), u = i ?? f, d = ie(null);
    return Ln(c, () => d.current), ce(() => {
      d.current && (d.current.indeterminate = n ?? !1);
    }, [n]), /* @__PURE__ */ w(
      "label",
      {
        htmlFor: u,
        className: ["checkbox", s].filter(Boolean).join(" "),
        "data-disabled": o || void 0,
        "data-validation": r,
        children: [
          /* @__PURE__ */ w("span", { className: "checkbox__control", children: [
            /* @__PURE__ */ a(
              "input",
              {
                ref: d,
                id: u,
                type: "checkbox",
                className: "checkbox__input",
                disabled: o,
                ...l
              }
            ),
            /* @__PURE__ */ w("span", { className: "checkbox__box", "aria-hidden": "true", children: [
              /* @__PURE__ */ a(Eu, {}),
              /* @__PURE__ */ a(Mu, {})
            ] })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), Ap = E.forwardRef(
  function({ legend: t, required: n, hint: r, validation: o, validationMessage: i, children: s, className: l }, c) {
    const f = ee(), u = ee();
    return /* @__PURE__ */ w(
      "fieldset",
      {
        ref: c,
        className: ["checkbox-group", l].filter(Boolean).join(" "),
        "data-validation": o,
        "aria-describedby": [r ? f : null, i ? u : null].filter(Boolean).join(" ") || void 0,
        children: [
          /* @__PURE__ */ w("legend", { className: "checkbox-group__legend", children: [
            t,
            n && /* @__PURE__ */ a("span", { className: "checkbox-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          r && /* @__PURE__ */ a("p", { id: f, className: "checkbox-group__hint", children: r }),
          /* @__PURE__ */ a("div", { className: "checkbox-group__items", children: s }),
          i && /* @__PURE__ */ a(
            "p",
            {
              id: u,
              className: "checkbox-group__message",
              role: o === "negative" ? "alert" : void 0,
              children: i
            }
          )
        ]
      }
    );
  }
), Pu = { small: 12, medium: 16 }, Op = E.forwardRef(
  function({
    label: t,
    variant: n,
    icon: r,
    count: o,
    size: i = "medium",
    disabled: s,
    selected: l,
    defaultSelected: c = !1,
    onChange: f,
    onRemove: u,
    className: d
  }, p) {
    const [h, b] = q(c), v = l !== void 0, g = v ? l : h, _ = Pu[i];
    if (n === "selectable") {
      const N = () => {
        if (s) return;
        const y = !g;
        v || b(y), f == null || f(y);
      };
      return /* @__PURE__ */ w(
        "button",
        {
          ref: p,
          type: "button",
          className: ["chip", d].filter(Boolean).join(" "),
          "data-variant": "selectable",
          "data-size": i,
          "aria-pressed": g,
          disabled: s,
          onClick: N,
          children: [
            g && /* @__PURE__ */ a(
              Ie,
              {
                className: "chip__check",
                size: _,
                "aria-hidden": "true"
              }
            ),
            r && /* @__PURE__ */ a("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
            /* @__PURE__ */ a("span", { className: "chip__label", children: t }),
            o !== void 0 && /* @__PURE__ */ a("span", { className: "chip__count", "aria-label": `${o} items`, children: o })
          ]
        }
      );
    }
    return /* @__PURE__ */ w(
      "span",
      {
        ref: p,
        className: ["chip", d].filter(Boolean).join(" "),
        "data-variant": "removable",
        "data-size": i,
        "data-disabled": s || void 0,
        children: [
          r && /* @__PURE__ */ a("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
          /* @__PURE__ */ a("span", { className: "chip__label", children: t }),
          o !== void 0 && /* @__PURE__ */ a("span", { className: "chip__count", "aria-label": `${o} items`, children: o }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "chip__remove",
              "aria-label": `Remove ${t}`,
              disabled: s,
              onClick: u,
              tabIndex: s ? -1 : void 0,
              children: /* @__PURE__ */ a(Ne, { size: _, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function Tp({
  "aria-label": e,
  gap: t = "default",
  children: n,
  className: r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-label": e,
      className: ["chip-group", r].filter(Boolean).join(" "),
      "data-gap": t,
      children: n
    }
  );
}
function Iu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function Au(e) {
  return e.flatMap((t) => t.items);
}
function Ou({
  label: e,
  onRemove: t,
  disabled: n
}) {
  return /* @__PURE__ */ w("span", { className: "combobox__tag", children: [
    /* @__PURE__ */ a("span", { className: "combobox__tag-label", children: e }),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "combobox__tag-remove",
        "aria-label": `Remove ${e}`,
        tabIndex: -1,
        disabled: n,
        onMouseDown: (r) => {
          r.preventDefault(), t();
        },
        children: /* @__PURE__ */ a(Ne, { size: 12, "aria-hidden": "true" })
      }
    )
  ] });
}
const kp = E.forwardRef(
  function(t, n) {
    const {
      options: r,
      label: o,
      placeholder: i = "Select or type to search…",
      hint: s,
      validation: l,
      validationMessage: c,
      size: f = "medium",
      labelPosition: u = "stacked",
      disabled: d,
      required: p,
      noResultsText: h = "No results found",
      id: b,
      className: v
    } = t, g = t.selection === "multi", _ = ee(), N = b ?? `combobox-${_}`, y = `${N}-listbox`, C = `${N}-hint`, M = `${N}-message`, P = ie(null), R = ie(null);
    ce(() => {
      n && (typeof n == "function" ? n(R.current) : n.current = R.current);
    }, [n]);
    const [I, T] = q(!1), [k, S] = q(""), [A, z] = q(-1), V = t.value !== void 0, [Y, W] = q(() => {
      if (g) return t.value ?? [];
      const x = t.value;
      return x ? [x] : [];
    }), $ = V ? g ? t.value ?? [] : t.value ? [t.value] : [] : Y, B = Lt(
      () => $.map((x) => r.find((L) => L.value === x)).filter(Boolean),
      [$, r]
    ), O = Lt(() => {
      const x = k.toLowerCase().trim(), L = x ? r.filter((F) => F.label.toLowerCase().includes(x)) : r;
      return Iu(L);
    }, [r, k]), j = Lt(() => Au(O), [O]), K = le(
      (x) => $.includes(x),
      [$]
    ), X = le(
      (x) => {
        var L, F;
        V || W(x), g ? (L = t.onChange) == null || L.call(t, x) : (F = t.onChange) == null || F.call(t, x[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [V, g]
    ), re = le(
      (x) => {
        var L;
        if (!x.disabled)
          if (g) {
            const F = K(x.value) ? $.filter((ue) => ue !== x.value) : [...$, x.value];
            X(F), S(""), (L = R.current) == null || L.focus();
          } else
            X([x.value]), S(""), T(!1), z(-1);
      },
      [g, K, $, X]
    ), te = le(
      (x) => {
        X($.filter((L) => L !== x));
      },
      [$, X]
    ), D = () => {
      d || (T(!0), z(-1));
    }, H = () => {
      T(!1), S(""), z(-1);
    };
    ce(() => {
      if (!I) return;
      const x = (L) => {
        var F;
        (F = P.current) != null && F.contains(L.target) || H();
      };
      return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
    }, [I]);
    const G = !g && !I && B.length > 0 ? B[0].label : k, J = (x) => {
      switch (x.key) {
        case "ArrowDown": {
          if (x.preventDefault(), !I) {
            D();
            return;
          }
          z((L) => Math.min(L + 1, j.length - 1));
          break;
        }
        case "ArrowUp": {
          x.preventDefault(), z((L) => Math.max(L - 1, 0));
          break;
        }
        case "Enter": {
          if (x.preventDefault(), !I) {
            D();
            return;
          }
          A >= 0 && j[A] && re(j[A]);
          break;
        }
        case "Escape": {
          x.preventDefault(), H();
          break;
        }
        case "Backspace": {
          g && k === "" && $.length > 0 && te($[$.length - 1]);
          break;
        }
      }
    };
    ce(() => {
      z(-1);
    }, [k]);
    const Z = ie(null);
    ce(() => {
      if (A < 0 || !Z.current) return;
      const x = Z.current.querySelector(`[data-index="${A}"]`);
      x == null || x.scrollIntoView({ block: "nearest" });
    }, [A]);
    const oe = A >= 0 && j[A] ? `${y}-${j[A].value}` : void 0, fe = [
      s ? C : null,
      c ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: P,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": I || void 0,
        "data-disabled": d || void 0,
        children: [
          o && /* @__PURE__ */ w("label", { className: "combobox__label", htmlFor: N, children: [
            o,
            p && /* @__PURE__ */ a("span", { className: "combobox__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ w(
            "div",
            {
              className: "combobox__field",
              onClick: () => {
                var x;
                I || D(), (x = R.current) == null || x.focus();
              },
              children: [
                g && B.map((x) => /* @__PURE__ */ a(
                  Ou,
                  {
                    label: x.label,
                    disabled: d,
                    onRemove: () => te(x.value)
                  },
                  x.value
                )),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: R,
                    id: N,
                    type: "text",
                    role: "combobox",
                    className: "combobox__input",
                    value: G,
                    placeholder: g && B.length > 0 ? "" : i,
                    disabled: d,
                    required: p,
                    "aria-expanded": I,
                    "aria-controls": I ? y : void 0,
                    "aria-activedescendant": oe,
                    "aria-autocomplete": "list",
                    "aria-describedby": fe,
                    "aria-required": p,
                    autoComplete: "off",
                    onChange: (x) => {
                      S(x.target.value), I || D(), !g && x.target.value === "" && $.length > 0 && X([]);
                    },
                    onFocus: D,
                    onKeyDown: J
                  }
                ),
                /* @__PURE__ */ a(
                  gt,
                  {
                    className: "combobox__chevron",
                    size: 16,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          s && /* @__PURE__ */ a("p", { id: C, className: "combobox__hint", children: s }),
          c && /* @__PURE__ */ a(
            "p",
            {
              id: M,
              className: "combobox__message",
              role: l === "negative" ? "alert" : void 0,
              children: c
            }
          ),
          I && /* @__PURE__ */ a(
            "ul",
            {
              ref: Z,
              id: y,
              role: "listbox",
              className: "combobox__listbox",
              "aria-label": o,
              "aria-multiselectable": g || void 0,
              children: j.length === 0 ? /* @__PURE__ */ a("li", { className: "combobox__no-results", role: "presentation", children: h }) : O.map((x, L) => /* @__PURE__ */ w(E.Fragment, { children: [
                x.name && /* @__PURE__ */ a("li", { role: "presentation", className: "combobox__group-header", children: x.name }),
                L > 0 && !x.name && /* @__PURE__ */ a("li", { role: "separator", className: "combobox__group-divider" }),
                x.items.map((F) => {
                  const ue = j.indexOf(F), Q = K(F.value), pe = ue === A;
                  return /* @__PURE__ */ w(
                    "li",
                    {
                      id: `${y}-${F.value}`,
                      role: "option",
                      "aria-selected": Q,
                      "aria-disabled": F.disabled || void 0,
                      className: "combobox__option",
                      "data-index": ue,
                      "data-active": pe || void 0,
                      "data-selected": Q || void 0,
                      "data-disabled": F.disabled || void 0,
                      onMouseDown: (Pe) => {
                        Pe.preventDefault(), re(F);
                      },
                      onMouseEnter: () => z(ue),
                      children: [
                        g && /* @__PURE__ */ a("span", { className: "combobox__option-check", "aria-hidden": "true", children: Q && /* @__PURE__ */ a(Ie, { size: 12 }) }),
                        F.icon && /* @__PURE__ */ a("span", { className: "combobox__option-icon", "aria-hidden": "true", children: F.icon }),
                        /* @__PURE__ */ w("span", { className: "combobox__option-content", children: [
                          /* @__PURE__ */ a("span", { className: "combobox__option-label", children: F.label }),
                          F.description && /* @__PURE__ */ a("span", { className: "combobox__option-description", children: F.description })
                        ] }),
                        !g && Q && /* @__PURE__ */ a(
                          Ie,
                          {
                            className: "combobox__option-selected-icon",
                            size: 16,
                            "aria-hidden": "true"
                          }
                        )
                      ]
                    },
                    F.value
                  );
                })
              ] }, x.name ?? `__group-${L}`))
            }
          )
        ]
      }
    );
  }
);
function Tu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? "";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function ku(e) {
  return Array.from(e.values()).flat();
}
function Dp({
  label: e,
  placeholder: t = "Select...",
  value: n,
  defaultValue: r,
  options: o,
  onChange: i,
  disabled: s,
  required: l,
  size: c = "medium",
  validation: f,
  validationMessage: u,
  helperText: d,
  id: p,
  className: h,
  "aria-label": b
}) {
  const v = ee(), g = p ?? v, _ = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, M = n !== void 0, [P, R] = q(r ?? ""), I = M ? n ?? "" : P, [T, k] = q(!1), [S, A] = q(-1), z = ie(null), V = ie(null), Y = ie(null), W = Tu(o), $ = ku(W), B = (x) => `${g}-option-${x}`, O = (x) => {
    for (let L = x + 1; L < $.length; L++)
      if (!$[L].disabled) return L;
    return x;
  }, j = (x) => {
    for (let L = x - 1; L >= 0; L--)
      if (!$[L].disabled) return L;
    return x;
  }, K = () => $.findIndex((x) => !x.disabled), X = () => {
    for (let x = $.length - 1; x >= 0; x--)
      if (!$[x].disabled) return x;
    return -1;
  };
  ce(() => {
    if (!T) return;
    const x = (L) => {
      var F;
      (F = Y.current) != null && F.contains(L.target) || (k(!1), A(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [T]), ce(() => {
    if (S < 0 || !V.current) return;
    const x = V.current.querySelector(`#${CSS.escape(B(S))}`);
    x == null || x.scrollIntoView({ block: "nearest" });
  }, [S]);
  const re = (x) => {
    var L;
    x.disabled || (M || R(x.value), i == null || i(x.value), k(!1), A(-1), (L = z.current) == null || L.focus());
  }, te = (x) => {
    const L = x !== void 0 ? x : I ? $.findIndex((F) => F.value === I) : K();
    A(L >= 0 ? L : K()), k(!0);
  }, D = (x) => {
    switch (x.key) {
      case "Enter":
      case " ":
        x.preventDefault(), T ? S >= 0 && re($[S]) : te();
        break;
      case "ArrowDown":
        x.preventDefault(), T ? A((L) => O(L < 0 ? -1 : L)) : te(K());
        break;
      case "ArrowUp":
        x.preventDefault(), T ? A((L) => j(L < 0 ? $.length : L)) : te(X());
        break;
      case "Home":
        x.preventDefault(), T && A(K());
        break;
      case "End":
        x.preventDefault(), T && A(X());
        break;
      case "Escape":
        x.preventDefault(), k(!1), A(-1);
        break;
      case "Tab":
        k(!1), A(-1);
        break;
    }
  }, H = $.find((x) => x.value === I), G = c === "small" ? 14 : c === "large" ? 18 : 16, J = S >= 0 && T ? B(S) : void 0, Z = [];
  let oe = 0;
  for (const [x, L] of W.entries())
    Z.push({
      groupName: x,
      items: L.map((F) => ({ option: F, idx: oe++ }))
    });
  const fe = Z.some((x) => x.groupName !== "");
  return /* @__PURE__ */ w(
    "div",
    {
      ref: Y,
      className: ["dropdown", h].filter(Boolean).join(" "),
      "data-size": c,
      "data-open": T || void 0,
      "data-disabled": s || void 0,
      "data-validation": f,
      children: [
        e && /* @__PURE__ */ w("label", { id: _, htmlFor: g, className: "dropdown__label", children: [
          e,
          l && /* @__PURE__ */ a("span", { className: "dropdown__required", "aria-hidden": "true", children: " *" })
        ] }),
        /* @__PURE__ */ w(
          "button",
          {
            ref: z,
            id: g,
            type: "button",
            className: "dropdown__trigger",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": T,
            "aria-controls": N,
            "aria-labelledby": b ? void 0 : _,
            "aria-label": b,
            "aria-activedescendant": J,
            "aria-describedby": [y, C].filter(Boolean).join(" ") || void 0,
            "aria-required": l || void 0,
            "aria-invalid": f === "negative" || void 0,
            disabled: s,
            onClick: () => {
              T ? (k(!1), A(-1)) : te();
            },
            onKeyDown: D,
            children: [
              /* @__PURE__ */ a("span", { className: H ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: H ? H.label : t }),
              /* @__PURE__ */ a(gt, { size: G, className: "dropdown__chevron", "aria-hidden": "true" })
            ]
          }
        ),
        T && /* @__PURE__ */ a(
          "ul",
          {
            ref: V,
            id: N,
            role: "listbox",
            className: "dropdown__listbox",
            "aria-label": b ?? e,
            children: Z.map((x, L) => /* @__PURE__ */ w(E.Fragment, { children: [
              fe && L > 0 && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
              x.groupName && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-header", children: x.groupName }),
              x.items.map(({ option: F, idx: ue }) => {
                const Q = F.value === I, pe = S === ue;
                return /* @__PURE__ */ w(
                  "li",
                  {
                    id: B(ue),
                    role: "option",
                    className: "dropdown__option",
                    "aria-selected": Q,
                    "aria-disabled": F.disabled || void 0,
                    "data-selected": Q || void 0,
                    "data-active": pe || void 0,
                    "data-disabled": F.disabled || void 0,
                    onMouseDown: (Pe) => Pe.preventDefault(),
                    onMouseEnter: () => !F.disabled && A(ue),
                    onClick: () => re(F),
                    children: [
                      /* @__PURE__ */ a("span", { className: "dropdown__option-check", "aria-hidden": "true", children: Q && /* @__PURE__ */ a(Ie, { size: 12, strokeWidth: 2.5 }) }),
                      F.icon && /* @__PURE__ */ a("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: F.icon }),
                      /* @__PURE__ */ w("span", { className: "dropdown__option-content", children: [
                        /* @__PURE__ */ a("span", { className: "dropdown__option-label", children: F.label }),
                        F.description && /* @__PURE__ */ a("span", { className: "dropdown__option-description", children: F.description })
                      ] })
                    ]
                  },
                  F.value
                );
              })
            ] }, x.groupName || "__ungrouped"))
          }
        ),
        d && !u && /* @__PURE__ */ a("p", { id: y, className: "dropdown__hint", children: d }),
        u && /* @__PURE__ */ a(
          "p",
          {
            id: C,
            className: "dropdown__message",
            role: f === "negative" ? "alert" : void 0,
            children: u
          }
        )
      ]
    }
  );
}
function Lp({
  label: e,
  description: t,
  required: n,
  optional: r,
  helpText: o,
  position: i = "stacked",
  htmlFor: s,
  id: l,
  className: c
}) {
  const f = ee();
  return /* @__PURE__ */ w(
    s ? "label" : "div",
    {
      htmlFor: s,
      id: l,
      className: ["field-label", c].filter(Boolean).join(" "),
      "data-position": i !== "stacked" ? i : void 0,
      children: [
        /* @__PURE__ */ w("span", { className: "field-label__header", children: [
          /* @__PURE__ */ a("span", { className: "field-label__text", title: e, children: e }),
          n && !r && /* @__PURE__ */ a("span", { className: "field-label__required", "aria-hidden": "true", children: " *" }),
          r && !n && /* @__PURE__ */ a("span", { className: "field-label__optional", children: " (optional)" }),
          o && /* @__PURE__ */ w("span", { className: "field-label__help", children: [
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "field-label__help-btn",
                "aria-label": "Help information",
                "aria-describedby": f,
                children: /* @__PURE__ */ a(Ei, { size: 14, "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ a(
              "span",
              {
                id: f,
                role: "tooltip",
                className: "field-label__tooltip",
                children: o
              }
            )
          ] })
        ] }),
        t && /* @__PURE__ */ a("span", { className: "field-label__description", children: t })
      ]
    }
  );
}
function Du() {
  return Math.random().toString(36).slice(2, 9);
}
function In(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Lu(e, t, n) {
  var r;
  if (t) {
    const o = t.split(",").map((c) => c.trim().toLowerCase()), i = "." + ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()), s = e.type.toLowerCase();
    if (!o.some((c) => c.endsWith("/*") ? s.startsWith(c.slice(0, -1)) : c.startsWith(".") ? i === c : s === c)) {
      const c = o.filter((f) => f.startsWith(".")).map((f) => f.slice(1).toUpperCase()).join(", ");
      return c ? `Invalid file type. Accepted: ${c}` : "Invalid file type";
    }
  }
  return n && e.size > n ? `File exceeds ${In(n)} limit` : null;
}
function Bu({ file: e, size: t = 16 }) {
  var o;
  const n = e.type.toLowerCase(), r = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ a(Ai, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ a(yn, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ a(yn, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ a(Oi, { size: t }) : /* @__PURE__ */ a(Ti, { size: t });
}
function Bp({
  label: e,
  description: t,
  required: n,
  hint: r,
  "aria-label": o,
  position: i = "bottom",
  showUploadButton: s = !1,
  accept: l,
  maxSize: c,
  formatText: f,
  disabled: u,
  multiple: d = !0,
  onFilesAdded: p,
  onUpload: h,
  onFileRemove: b,
  id: v,
  className: g
}) {
  const _ = ee(), N = v ?? _, y = `${N}-input`, C = e ? `${N}-label` : void 0, M = `${N}-live`, P = ie(null), [R, I] = q([]), [T, k] = q(!1), [S, A] = q(""), z = le((D) => {
    if (u) return;
    const G = Array.from(D).map((x) => {
      const L = Lu(x, l, c);
      return { id: Du(), file: x, status: L ? "error" : "added", errorMessage: L ?? void 0 };
    });
    I((x) => d ? [...x, ...G] : G);
    const J = G.filter((x) => x.status === "added").map((x) => x.file);
    J.length > 0 && (p == null || p(J));
    const Z = G.filter((x) => x.status === "added").length, oe = G.filter((x) => x.status === "error").length, fe = [];
    Z && fe.push(`${Z} file${Z > 1 ? "s" : ""} added`), oe && fe.push(`${oe} file${oe > 1 ? "s" : ""} failed validation`), A(fe.join(". ")), P.current && (P.current.value = "");
  }, [u, l, c, d, p]), V = le((D) => {
    I((H) => {
      const G = H.find((J) => J.id === D);
      return G && A(`${G.file.name} removed`), H.filter((J) => J.id !== D);
    }), b == null || b(D);
  }, [b]), Y = le(async () => {
    if (!h) return;
    const D = R.filter((H) => H.status === "added" || H.status === "error");
    if (D.length) {
      I((H) => H.map(
        (G) => D.find((J) => J.id === G.id) ? { ...G, status: "uploading", errorMessage: void 0 } : G
      )), A("Uploading files…");
      try {
        await h(D.map((H) => H.file)), I((H) => H.map(
          (G) => D.find((J) => J.id === G.id) ? { ...G, status: "uploaded" } : G
        )), A(`${D.length} file${D.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (H) {
        const G = H instanceof Error ? H.message : "Upload failed";
        I((J) => J.map(
          (Z) => D.find((oe) => oe.id === Z.id) ? { ...Z, status: "error", errorMessage: G } : Z
        )), A(`Upload failed: ${G}`);
      }
    }
  }, [R, h]), W = (D) => {
    D.preventDefault(), u || k(!0);
  }, $ = (D) => {
    D.currentTarget.contains(D.relatedTarget) || k(!1);
  }, B = (D) => {
    D.preventDefault(), k(!1), !u && z(D.dataTransfer.files);
  }, O = (D) => {
    var H;
    (H = D.target.files) != null && H.length && z(D.target.files);
  }, j = () => {
    var D;
    u || (D = P.current) == null || D.click();
  }, K = R.length > 0, X = R.some((D) => D.status === "added"), re = R.some((D) => D.status === "uploading"), te = [
    f,
    c ? `Max ${In(c)}` : null
  ].filter(Boolean).join(" · ");
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["file-uploader", g].filter(Boolean).join(" "),
      "data-position": i !== "bottom" ? i : void 0,
      "data-disabled": u || void 0,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            id: M,
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "false",
            className: "file-uploader__sr-only",
            children: S
          }
        ),
        e && /* @__PURE__ */ w("span", { id: C, className: "file-uploader__label", children: [
          e,
          n && /* @__PURE__ */ a("span", { className: "file-uploader__required", "aria-hidden": "true", children: " *" })
        ] }),
        t && /* @__PURE__ */ a("span", { className: "file-uploader__description", children: t }),
        /* @__PURE__ */ w("div", { className: "file-uploader__body", children: [
          /* @__PURE__ */ w(
            "div",
            {
              className: "file-uploader__zone",
              "data-dragging": T || void 0,
              "aria-labelledby": C,
              "aria-label": e ? void 0 : o ?? "File upload area",
              "aria-disabled": u || void 0,
              onDragOver: W,
              onDragLeave: $,
              onDrop: B,
              onClick: j,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (D) => {
                (D.key === "Enter" || D.key === " ") && (D.preventDefault(), j());
              },
              children: [
                /* @__PURE__ */ a(Mi, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ a("span", { className: "file-uploader__zone-text", children: "Drag & drop files here" }),
                /* @__PURE__ */ w("span", { className: "file-uploader__zone-browse", children: [
                  "or",
                  " ",
                  /* @__PURE__ */ a("span", { className: "file-uploader__browse-link", children: "browse files" })
                ] }),
                te && /* @__PURE__ */ a("span", { className: "file-uploader__zone-hint", children: te })
              ]
            }
          ),
          K && /* @__PURE__ */ a("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: R.map((D) => /* @__PURE__ */ w(
            "li",
            {
              className: "file-uploader__item",
              "data-status": D.status,
              children: [
                /* @__PURE__ */ a("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Bu, { file: D.file, size: 16 }) }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ a("span", { className: "file-uploader__item-name", title: D.file.name, children: D.file.name }),
                  /* @__PURE__ */ w("span", { className: "file-uploader__item-meta", children: [
                    In(D.file.size),
                    D.errorMessage && /* @__PURE__ */ w("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      D.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  D.status === "uploading" && /* @__PURE__ */ a(Pi, { size: 16, className: "file-uploader__spin" }),
                  D.status === "uploaded" && /* @__PURE__ */ a(Ie, { size: 16 }),
                  D.status === "error" && /* @__PURE__ */ a(st, { size: 16 })
                ] }),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${D.file.name}`,
                    disabled: D.status === "uploading",
                    onClick: () => V(D.id),
                    children: /* @__PURE__ */ a(Ne, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            D.id
          )) })
        ] }),
        s && h && K && /* @__PURE__ */ a("div", { className: "file-uploader__actions", children: /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !X || re || u,
            onClick: Y,
            children: [
              /* @__PURE__ */ a(Ii, { size: 14, "aria-hidden": "true" }),
              re ? "Uploading…" : "Upload files"
            ]
          }
        ) }),
        r && /* @__PURE__ */ a("span", { className: "file-uploader__hint", children: r }),
        /* @__PURE__ */ a(
          "input",
          {
            ref: P,
            id: y,
            type: "file",
            className: "file-uploader__input",
            accept: l,
            multiple: d,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: O
          }
        )
      ]
    }
  );
}
const Fu = {
  s: { svgSize: 16, strokeWidth: 2, r: 6, cx: 8, cy: 8 },
  m: { svgSize: 32, strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l: { svgSize: 64, strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 }
};
function Dt({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": o,
  className: i
}) {
  const s = E.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = Fu[e], p = 2 * Math.PI * f, h = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["spinner", i].filter(Boolean).join(" "),
      role: "status",
      "aria-live": "polite",
      "aria-label": n ? void 0 : o ?? "Loading",
      "aria-labelledby": n ? s : void 0,
      "data-size": e,
      "data-variant": t,
      "data-label-position": n ? r : void 0,
      children: [
        /* @__PURE__ */ w(
          "svg",
          {
            className: "spinner__svg",
            width: l,
            height: l,
            viewBox: `0 0 ${l} ${l}`,
            fill: "none",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ a(
                "circle",
                {
                  className: "spinner__track",
                  cx: u,
                  cy: d,
                  r: f,
                  strokeWidth: c
                }
              ),
              /* @__PURE__ */ a(
                "circle",
                {
                  className: "spinner__indicator",
                  cx: u,
                  cy: d,
                  r: f,
                  strokeWidth: c,
                  strokeDasharray: h,
                  strokeLinecap: "round",
                  transform: `rotate(-90 ${u} ${d})`
                }
              )
            ]
          }
        ),
        n && /* @__PURE__ */ a("span", { id: s, className: "spinner__label", children: n })
      ]
    }
  );
}
const Ge = Ct, Ke = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    xt,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ye = E.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: o, ...i }, s) {
  return /* @__PURE__ */ a(dt, { container: o, children: /* @__PURE__ */ a(
    St,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), ti = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    cu,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), $u = E.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(lu, { ref: n, ...t });
}), ae = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    Rt,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Fp = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    du,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ei, { children: /* @__PURE__ */ a(Ie, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), $p = E.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(uu, { ref: n, ...t });
}), zp = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    fu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ei, { children: /* @__PURE__ */ a(Ie, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), Et = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    pu,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), jp = mu, Wp = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    hu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-sub-trigger", t].filter(Boolean).join(" "),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a(rt, { size: 16, className: "flyout-menu-sub-trigger__chevron", "aria-hidden": !0 })
      ]
    }
  );
}), Vp = E.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...o }, i) {
  return /* @__PURE__ */ a(dt, { container: r, children: /* @__PURE__ */ a(
    vu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...o
    }
  ) });
}), Hp = E.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ a(
      "span",
      {
        ref: r,
        className: ["flyout-menu-shortcut", t].filter(Boolean).join(" "),
        "aria-hidden": !0,
        ...n
      }
    );
  }
);
function zu(e) {
  var r;
  const t = e.type.toLowerCase(), n = ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "";
  return t.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"].includes(n) ? "image" : t === "application/pdf" || n === "pdf" ? "pdf" : t === "text/plain" || n === "txt" ? "text" : t === "text/csv" || n === "csv" ? "csv" : "unsupported";
}
function ju(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Wu(e) {
  return e.trim().split(`
`).map(
    (t) => t.split(",").map((n) => n.trim().replace(/^"(.*)"$/, "$1"))
  );
}
const Hr = 50, Ur = 200, Gr = 25;
function Up({
  file: e,
  files: t,
  currentFileIndex: n = 0,
  showHeader: r = !0,
  showFooter: o = !1,
  allowDownload: i = !0,
  allowExpand: s = !0,
  allowZoom: l = !0,
  allowRotate: c = !0,
  maxHeight: f = "500px",
  onDownload: u,
  onExpand: d,
  onFileChange: p,
  className: h,
  "aria-label": b
}) {
  const v = ee(), g = zu(e), [_, N] = q(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = q(100), [M, P] = q(0), [R, I] = q(1), [T, k] = q(null), [S, A] = q(null), [z, V] = q("");
  ce(() => {
    C(100), P(0), I(1), k(null), A(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), ce(() => {
    if (g !== "text" && g !== "csv") return;
    let Q = !1;
    return fetch(e.url).then((pe) => {
      if (!pe.ok) throw new Error(`HTTP ${pe.status}`);
      return pe.text();
    }).then((pe) => {
      Q || (g === "text" ? k(pe) : A(Wu(pe)), N("loaded"));
    }).catch(() => {
      Q || N("error");
    }), () => {
      Q = !0;
    };
  }, [e.url, g]);
  const Y = () => {
    N("loaded"), V("File loaded");
  }, W = () => {
    N("error"), V("File failed to load");
  }, $ = () => N("loaded"), B = le(() => C((Q) => Math.min(Q + Gr, Ur)), []), O = le(() => C((Q) => Math.max(Q - Gr, Hr)), []), j = le(() => P((Q) => (Q + 90) % 360), []), K = le(() => {
    C(100), P(0);
  }, []), X = (t == null ? void 0 : t.length) ?? 0, re = X > 1 && n > 0, te = X > 1 && n < X - 1, D = () => p == null ? void 0 : p(n - 1), H = () => p == null ? void 0 : p(n + 1), G = e.pageCount ?? 0, J = G > 1 && R > 1, Z = G > 1 && R < G, oe = () => {
    if (u)
      u(e);
    else {
      const Q = document.createElement("a");
      Q.href = e.url, Q.download = e.name, Q.click();
    }
  }, fe = `scale(${y / 100}) rotate(${M}deg)`, x = () => {
    if (_ === "error")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a($i, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (_ === "unsupported")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(eo, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ w("button", { type: "button", className: "file-viewer__empty-action", onClick: oe, children: [
          /* @__PURE__ */ a(vr, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ w("div", { className: "file-viewer__img-wrap", children: [
        _ === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Dt, { size: "m" }) }),
        /* @__PURE__ */ a(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": _ === "loaded" || void 0,
            style: { transform: fe },
            onLoad: Y,
            onError: W
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ w("div", { className: "file-viewer__pdf-wrap", children: [
        _ === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Dt, { size: "m" }) }),
        /* @__PURE__ */ a(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": _ === "loaded" || void 0,
            onLoad: $
          }
        )
      ] });
    if (g === "text")
      return _ === "loading" ? /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Dt, { size: "m" }) }) : /* @__PURE__ */ w("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ w("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ a(yn, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ a("pre", { className: "file-viewer__text", children: T })
      ] });
    if (g === "csv") {
      if (_ === "loading")
        return /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Dt, { size: "m" }) });
      if (!(S != null && S.length))
        return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ a(zi, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [Q, ...pe] = S;
      return /* @__PURE__ */ a("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ w("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: Q.map((Pe, De) => /* @__PURE__ */ a("th", { className: "file-viewer__th", children: Pe }, De)) }) }),
        /* @__PURE__ */ a("tbody", { children: pe.map((Pe, De) => /* @__PURE__ */ a("tr", { className: "file-viewer__tr", children: Pe.map((xi, Si) => /* @__PURE__ */ a("td", { className: "file-viewer__td", children: xi }, Si)) }, De)) })
      ] }) });
    }
    return null;
  }, L = g === "image", F = L && l, ue = L && c;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["file-viewer", h].filter(Boolean).join(" "),
      role: "region",
      "aria-label": b ?? `File preview: ${e.name}`,
      "aria-labelledby": b ? void 0 : v,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            className: "file-viewer__sr-only",
            children: z
          }
        ),
        r && /* @__PURE__ */ w("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ a("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ w("div", { className: "file-viewer__header-actions", children: [
            F && /* @__PURE__ */ w("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(ki, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= Hr,
                  onClick: O
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(Di, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= Ur,
                  onClick: B
                }
              )
            ] }),
            ue && /* @__PURE__ */ a(
              me,
              {
                icon: /* @__PURE__ */ a(Li, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: j
              }
            ),
            s && d && /* @__PURE__ */ a(
              me,
              {
                icon: /* @__PURE__ */ a(Bi, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ w(Ge, { children: [
              /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(Xe, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ w(Ye, { align: "end", children: [
                i && /* @__PURE__ */ w(ae, { onSelect: oe, children: [
                  /* @__PURE__ */ a(vr, { size: 14, "aria-hidden": "true" }),
                  "Download"
                ] }),
                L && /* @__PURE__ */ w(ae, { onSelect: K, children: [
                  /* @__PURE__ */ a(Fi, { size: 14, "aria-hidden": "true" }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ w(ae, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ a(Jr, { size: 14, "aria-hidden": "true" }),
                  "Open in new tab"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            className: "file-viewer__preview",
            style: { maxHeight: f },
            children: x()
          }
        ),
        o && /* @__PURE__ */ w("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ w("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: ju(e.size) }),
            e.uploadDate && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ w("div", { className: "file-viewer__footer-nav", children: [
            G > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(ft, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !J,
                  onClick: () => I((Q) => Q - 1)
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                R,
                " / ",
                G
              ] }),
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(rt, { size: 14 }),
                  "aria-label": "Next page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !Z,
                  onClick: () => I((Q) => Q + 1)
                }
              )
            ] }),
            X > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(ft, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !re,
                  onClick: D
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                n + 1,
                " / ",
                X,
                " files"
              ] }),
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(rt, { size: 14 }),
                  "aria-label": "Next file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !te,
                  onClick: H
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Gp({ text: e, id: t, children: n, className: r }) {
  return /* @__PURE__ */ a(
    "p",
    {
      id: t,
      className: ["hint", r].filter(Boolean).join(" "),
      children: n ?? e
    }
  );
}
const ni = Bn({ onClose: () => {
}, titleId: "" }), Vu = () => Fn(ni), Kr = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function Hu(e, t) {
  ce(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(Kr);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(Kr));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [t, e]);
}
function Uu({
  open: e,
  onClose: t,
  side: n = "right",
  size: r = "medium",
  closeOnOverlayClick: o = !0,
  persistent: i = !1,
  "aria-label": s,
  children: l,
  className: c
}) {
  const f = ee(), u = ie(null), d = ie(null), [p, h] = q(e), [b, v] = q(!1);
  if (ce(() => {
    if (e) {
      d.current = document.activeElement, h(!0);
      const _ = requestAnimationFrame(
        () => requestAnimationFrame(() => v(!0))
      );
      return () => cancelAnimationFrame(_);
    } else {
      v(!1);
      const _ = window.setTimeout(() => h(!1), 260);
      return () => window.clearTimeout(_);
    }
  }, [e]), ce(() => {
    if (!e) return;
    const _ = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [e, t]), ce(() => {
    if (!e || i) return;
    const _ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = _;
    };
  }, [e, i]), Hu(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ w(ni.Provider, { value: { onClose: t, titleId: f }, children: [
    !i && /* @__PURE__ */ a(
      "div",
      {
        className: "drawer-overlay",
        "data-open": String(b),
        "aria-hidden": "true",
        onClick: o ? t : void 0
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: u,
        role: "dialog",
        "aria-modal": !i,
        "aria-labelledby": s ? void 0 : f,
        "aria-label": s,
        className: ["drawer", c].filter(Boolean).join(" "),
        "data-side": n,
        "data-size": r,
        "data-open": String(b),
        "data-persistent": i || void 0,
        children: l
      }
    )
  ] });
  return i ? g : $n.createPortal(g, document.body);
}
function Kp({ title: e, description: t, actions: n, className: r }) {
  const { onClose: o, titleId: i } = Vu();
  return /* @__PURE__ */ w("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ a("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ a("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ w("div", { className: "drawer__header-actions", children: [
      n,
      /* @__PURE__ */ a(
        me,
        {
          icon: /* @__PURE__ */ a(Ne, { size: 18, "aria-hidden": "true" }),
          "aria-label": "Close drawer",
          variant: "ghost",
          color: "neutral",
          size: "small",
          onClick: o
        }
      )
    ] })
  ] });
}
function Yp({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__tools", t].filter(Boolean).join(" "), children: e });
}
function Xp({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__content", t].filter(Boolean).join(" "), children: e });
}
function qp({ title: e, count: t, link: n, divider: r, children: o, className: i }) {
  const s = e || t !== void 0 || n;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["drawer__section", i].filter(Boolean).join(" "),
      "data-divider": r || void 0,
      children: [
        s && /* @__PURE__ */ w("div", { className: "drawer__section-header", children: [
          /* @__PURE__ */ w("div", { className: "drawer__section-header-start", children: [
            e && /* @__PURE__ */ a("span", { className: "drawer__section-title", children: e }),
            t !== void 0 && /* @__PURE__ */ a("span", { className: "drawer__section-count", children: t })
          ] }),
          n && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "drawer__section-link",
              onClick: n.onClick,
              children: n.label
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "drawer__section-body", children: o })
      ]
    }
  );
}
function Zp({
  label: e,
  icon: t,
  code: n,
  active: r,
  disabled: o,
  href: i,
  onClick: s,
  contextMenu: l,
  className: c
}) {
  return /* @__PURE__ */ w(
    i ? "a" : "button",
    {
      ...i ? { href: i } : { type: "button" },
      className: ["drawer__menu-item", c].filter(Boolean).join(" "),
      "aria-current": r ? "page" : void 0,
      "aria-disabled": o || void 0,
      "data-active": r || void 0,
      "data-disabled": o || void 0,
      onClick: o ? void 0 : s,
      children: [
        t && /* @__PURE__ */ a("span", { className: "drawer__menu-item-icon", "aria-hidden": "true", children: t }),
        /* @__PURE__ */ a("span", { className: "drawer__menu-item-label", children: e }),
        n && /* @__PURE__ */ a("span", { className: "drawer__menu-item-code", children: n }),
        l && /* @__PURE__ */ a(
          "span",
          {
            className: "drawer__menu-item-context",
            onClick: (u) => u.stopPropagation(),
            children: l
          }
        )
      ]
    }
  );
}
function Qp({
  label: e,
  icon: t,
  active: n,
  disabled: r,
  href: o,
  onClick: i,
  expanded: s,
  defaultExpanded: l = !1,
  onExpandedChange: c,
  children: f,
  className: u
}) {
  const d = s !== void 0, [p, h] = q(l), b = d ? s : p, v = () => {
    if (r) return;
    const _ = !b;
    d || h(_), c == null || c(_), i == null || i();
  }, g = o ? "a" : "button";
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["drawer__multi-item", u].filter(Boolean).join(" "),
      "data-expanded": b || void 0,
      children: [
        /* @__PURE__ */ w(
          g,
          {
            ...o ? { href: o } : { type: "button" },
            className: "drawer__multi-item-trigger",
            "aria-expanded": b,
            "aria-haspopup": "true",
            "aria-current": n ? "page" : void 0,
            "data-active": n || void 0,
            "data-disabled": r || void 0,
            "aria-disabled": r || void 0,
            onClick: v,
            children: [
              t && /* @__PURE__ */ a("span", { className: "drawer__menu-item-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ a("span", { className: "drawer__menu-item-label", children: e }),
              /* @__PURE__ */ a(
                gt,
                {
                  size: 14,
                  className: "drawer__multi-item-chevron",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        b && /* @__PURE__ */ a("div", { className: "drawer__multi-item-children", children: f })
      ]
    }
  );
}
function Jp({
  header: e,
  secondary: t,
  message: n,
  timestamp: r,
  unread: o,
  before: i,
  after: s,
  onClick: l,
  disabled: c,
  className: f
}) {
  return /* @__PURE__ */ w(
    "button",
    {
      type: "button",
      className: ["drawer__list-item", f].filter(Boolean).join(" "),
      "data-unread": o || void 0,
      "data-disabled": c || void 0,
      "aria-disabled": c || void 0,
      onClick: c ? void 0 : l,
      children: [
        o && /* @__PURE__ */ a("span", { className: "drawer__unread-dot", "aria-label": "Unread" }),
        i && /* @__PURE__ */ a("span", { className: "drawer__list-item-before", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ w("span", { className: "drawer__list-item-main", children: [
          /* @__PURE__ */ w("span", { className: "drawer__list-item-top", children: [
            /* @__PURE__ */ a("span", { className: "drawer__list-item-header", children: e }),
            r && /* @__PURE__ */ a("span", { className: "drawer__list-item-timestamp", children: r })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "drawer__list-item-secondary", children: t }),
          n && /* @__PURE__ */ a("span", { className: "drawer__list-item-message", children: n })
        ] }),
        s && /* @__PURE__ */ a("span", { className: "drawer__list-item-after", children: s })
      ]
    }
  );
}
function em({
  title: e,
  message: t,
  timestamp: n,
  unread: r,
  avatar: o,
  action: i,
  last: s,
  onClick: l,
  className: c
}) {
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["drawer__notification-item", c].filter(Boolean).join(" "),
      "data-unread": r || void 0,
      "data-last": s || void 0,
      onClick: l,
      role: l ? "button" : void 0,
      tabIndex: l ? 0 : void 0,
      onKeyDown: l ? (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), l());
      } : void 0,
      children: [
        r && /* @__PURE__ */ a("span", { className: "drawer__unread-dot", "aria-label": "Unread" }),
        o && /* @__PURE__ */ a("span", { className: "drawer__notification-avatar", "aria-hidden": "true", children: o }),
        /* @__PURE__ */ w("span", { className: "drawer__notification-body", children: [
          /* @__PURE__ */ w("span", { className: "drawer__notification-top", children: [
            /* @__PURE__ */ a("span", { className: "drawer__notification-title", children: e }),
            n && /* @__PURE__ */ a("span", { className: "drawer__list-item-timestamp", children: n })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "drawer__list-item-message", children: t }),
          i && /* @__PURE__ */ a("span", { className: "drawer__notification-action", children: i })
        ] })
      ]
    }
  );
}
function tm({
  onClick: e,
  "aria-label": t = "More options"
}) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "drawer__context-btn",
      "aria-label": t,
      onClick: e,
      children: /* @__PURE__ */ a(Xe, { size: 14, "aria-hidden": "true" })
    }
  );
}
const nm = E.forwardRef(
  function({ variant: t = "loud", size: n = "100", target: r, rel: o, children: i, className: s, ...l }, c) {
    const f = r === "_blank", u = f ? "noopener noreferrer" : o;
    return /* @__PURE__ */ w(
      "a",
      {
        ref: c,
        className: ["link", s].filter(Boolean).join(" "),
        "data-variant": t,
        "data-size": n,
        target: r,
        rel: u,
        ...l,
        children: [
          i,
          f && /* @__PURE__ */ a(Jr, { "aria-hidden": "true" })
        ]
      }
    );
  }
), Gu = E.forwardRef(
  function({ variant: t = "fill", size: n = "medium", color: r = "primary", icon: o, children: i, className: s, title: l, ...c }, f) {
    const d = l ?? (typeof i == "string" ? i : void 0);
    return /* @__PURE__ */ w(
      "span",
      {
        ref: f,
        className: ["badge", s].filter(Boolean).join(" "),
        "data-variant": t,
        "data-size": n,
        "data-color": r,
        title: d,
        ...c,
        children: [
          o && /* @__PURE__ */ a("span", { className: "badge__icon", "aria-hidden": "true", children: o }),
          /* @__PURE__ */ a("span", { className: "badge__label", children: i })
        ]
      }
    );
  }
), pr = E.forwardRef(
  function({ count: t, variant: n = "fill", size: r = "medium", color: o = "primary", className: i, ...s }, l) {
    const c = t > 99 ? "99+" : String(t);
    return /* @__PURE__ */ a(
      "span",
      {
        ref: l,
        className: ["counter", i].filter(Boolean).join(" "),
        "data-variant": n,
        "data-size": r,
        "data-color": o,
        ...s,
        children: c
      }
    );
  }
);
function Ku(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const Yu = E.forwardRef(
  function({ name: t, src: n, size: r = "l", href: o, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, h] = E.useState(!1), b = !!n && !p, v = Ku(t, r), g = !!o || !!i, _ = {
      className: ["avatar", s].filter(Boolean).join(" "),
      "data-size": r,
      "data-variant": b ? "image" : "initials",
      "aria-label": c ?? t,
      style: l,
      id: u,
      ...g ? { "data-interactive": "" } : {}
    }, N = b ? /* @__PURE__ */ a(
      "img",
      {
        src: n,
        alt: "",
        className: "avatar__img",
        onError: () => h(!0)
      }
    ) : /* @__PURE__ */ a("span", { className: "avatar__initials", "aria-hidden": "true", children: v });
    return o ? /* @__PURE__ */ a(
      "a",
      {
        ref: d,
        href: o,
        tabIndex: f,
        ..._,
        children: N
      }
    ) : i ? /* @__PURE__ */ a(
      "button",
      {
        ref: d,
        type: "button",
        onClick: i,
        tabIndex: f,
        ..._,
        children: N
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        ref: d,
        tabIndex: f,
        ..._,
        children: N
      }
    );
  }
), rm = E.forwardRef(
  function({ children: t, max: n, overlap: r = !0, size: o = "l", className: i, ...s }, l) {
    const c = E.Children.toArray(t), f = n !== void 0 ? c.slice(0, n) : c, u = n !== void 0 ? Math.max(0, c.length - n) : 0;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: l,
        className: ["avatar-group", i].filter(Boolean).join(" "),
        "data-overlap": r ? "true" : "false",
        ...s,
        children: [
          f,
          u > 0 && /* @__PURE__ */ w(
            "span",
            {
              className: "avatar-group__counter",
              "data-size": o,
              "aria-label": `${u} more`,
              children: [
                "+",
                u
              ]
            }
          )
        ]
      }
    );
  }
), Xu = {
  active: "Active",
  away: "Away",
  busy: "Busy",
  offline: "Offline"
}, om = E.forwardRef(
  function({ children: t, status: n, size: r = "l", className: o, style: i }, s) {
    return /* @__PURE__ */ w(
      "div",
      {
        ref: s,
        className: ["avatar-with-status", o].filter(Boolean).join(" "),
        "data-avatar-size": r,
        style: i,
        children: [
          t,
          /* @__PURE__ */ a(
            "span",
            {
              className: "avatar-with-status__dot",
              "data-status": n,
              role: "img",
              "aria-label": Xu[n]
            }
          )
        ]
      }
    );
  }
), qu = E.forwardRef(
  function({ children: t, size: n = "medium", color: r = "gray", icon: o, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["tag", i].filter(Boolean).join(" "),
        "data-size": n,
        "data-color": r,
        ...s,
        children: [
          o && /* @__PURE__ */ a("span", { className: "tag__icon", "aria-hidden": "true", children: o }),
          t
        ]
      }
    );
  }
), Zu = E.forwardRef(
  function({
    orientation: t = "horizontal",
    variant: n = "full",
    children: r,
    className: o,
    ...i
  }, s) {
    const l = t === "horizontal" && !r, c = l ? {} : {
      role: "separator",
      "aria-orientation": t === "vertical" ? "vertical" : void 0,
      "aria-label": typeof r == "string" ? r : void 0
    }, f = ["divider", o].filter(Boolean).join(" ");
    return l ? /* @__PURE__ */ a(
      "hr",
      {
        ref: s,
        className: f,
        "data-orientation": t,
        "data-variant": n,
        ...i
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: f,
        "data-orientation": t,
        "data-variant": n,
        ...c,
        ...i,
        children: r && /* @__PURE__ */ a("span", { className: "divider__label", "aria-hidden": "true", children: r })
      }
    );
  }
), am = E.forwardRef(
  function({
    variant: t = "elevated",
    interactive: n = !1,
    href: r,
    children: o,
    className: i,
    onClick: s,
    onKeyDown: l,
    ...c
  }, f) {
    const u = ["card", i].filter(Boolean).join(" "), d = (p) => {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), s == null || s(p)), l == null || l(p);
    };
    return n && r ? /* @__PURE__ */ a(
      "a",
      {
        ref: f,
        href: r,
        className: u,
        "data-variant": t,
        "data-interactive": "",
        onClick: s,
        onKeyDown: l,
        ...c,
        children: o
      }
    ) : n ? /* @__PURE__ */ a(
      "div",
      {
        ref: f,
        className: u,
        "data-variant": t,
        "data-interactive": "",
        role: "button",
        tabIndex: 0,
        onClick: s,
        onKeyDown: d,
        ...c,
        children: o
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        ref: f,
        className: u,
        "data-variant": t,
        onClick: s,
        onKeyDown: l,
        ...c,
        children: o
      }
    );
  }
), im = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["card-header", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
), sm = E.forwardRef(
  function({ as: t = "h3", children: n, className: r, ...o }, i) {
    return /* @__PURE__ */ a(
      t,
      {
        ref: i,
        className: ["card-title", r].filter(Boolean).join(" "),
        ...o,
        children: n
      }
    );
  }
), lm = E.forwardRef(
  function({ children: t, className: n, ...r }, o) {
    return /* @__PURE__ */ a(
      "p",
      {
        ref: o,
        className: ["card-description", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
), cm = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["card-content", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
), dm = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["card-footer", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
), um = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["card-section", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
), fm = E.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ a(
      Zu,
      {
        ref: r,
        orientation: "horizontal",
        variant: "full",
        className: t,
        ...n
      }
    );
  }
), Qu = {
  informative: ro,
  positive: no,
  notice: to,
  negative: ze
}, Ju = {
  informative: "status",
  positive: "status",
  notice: "alert",
  negative: "alert"
}, ef = {
  informative: "polite",
  positive: "polite",
  notice: "assertive",
  negative: "assertive"
}, pm = E.forwardRef(
  function({
    variant: t = "informative",
    title: n,
    children: r,
    actions: o,
    onClose: i,
    className: s,
    ...l
  }, c) {
    const f = Qu[t];
    return /* @__PURE__ */ w(
      "div",
      {
        ref: c,
        role: Ju[t],
        "aria-live": ef[t],
        className: ["banner-alert", s].filter(Boolean).join(" "),
        "data-variant": t,
        ...l,
        children: [
          /* @__PURE__ */ a("span", { className: "banner-alert__icon", "aria-hidden": "true", children: /* @__PURE__ */ a(f, {}) }),
          /* @__PURE__ */ w("div", { className: "banner-alert__content", children: [
            n && /* @__PURE__ */ a("strong", { className: "banner-alert__title", children: n }),
            /* @__PURE__ */ a("p", { className: "banner-alert__message", children: r })
          ] }),
          i && /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Ne, { size: 14, "aria-hidden": "true" }),
              "aria-label": "Close banner",
              onClick: i,
              className: "banner-alert__close"
            }
          ),
          o && /* @__PURE__ */ a("div", { className: "banner-alert__actions", children: o })
        ]
      }
    );
  }
), ri = E.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function tf() {
  return E.useContext(ri);
}
const nf = E.forwardRef(
  function({
    collapsible: t = !1,
    defaultExpanded: n = !0,
    onExpandedChange: r,
    children: o,
    className: i,
    ...s
  }, l) {
    const [c, f] = E.useState(n), u = E.useRef(r);
    u.current = r;
    const d = E.useCallback(() => {
      f((v) => {
        var _;
        const g = !v;
        return (_ = u.current) == null || _.call(u, g), g;
      });
    }, []), p = E.Children.toArray(o), h = p.find(
      (v) => E.isValidElement(v) && v.type.displayName === "PanelHeader"
    ), b = p.filter(
      (v) => !E.isValidElement(v) || v.type.displayName !== "PanelHeader"
    );
    return /* @__PURE__ */ a(ri.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ w(
      "div",
      {
        ref: l,
        className: ["panel", i].filter(Boolean).join(" "),
        "data-expanded": t ? String(c) : void 0,
        ...s,
        children: [
          h,
          t ? /* @__PURE__ */ a(
            "div",
            {
              className: "panel__collapsible",
              "data-collapsed": c ? void 0 : "",
              "aria-hidden": c ? void 0 : !0,
              children: /* @__PURE__ */ a("div", { className: "panel__collapsible-inner", children: b })
            }
          ) : b
        ]
      }
    ) });
  }
);
nf.displayName = "Panel";
const rf = E.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: o, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = tf();
    return /* @__PURE__ */ w(
      "div",
      {
        ref: l,
        className: ["panel__header", i].filter(Boolean).join(" "),
        ...s,
        children: [
          /* @__PURE__ */ w("div", { className: "panel__header-title", children: [
            /* @__PURE__ */ w("div", { className: "panel__header-title-row", children: [
              t && /* @__PURE__ */ a("span", { className: "panel__header-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ a("strong", { className: "panel__title typography-heading-m", children: o })
            ] }),
            n && /* @__PURE__ */ a("p", { className: "panel__subtitle", children: n })
          ] }),
          c ? /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(
                gt,
                {
                  className: "panel__collapse-icon",
                  "data-expanded": f ? "true" : "false",
                  "aria-hidden": "true"
                }
              ),
              "aria-expanded": f,
              "aria-label": f ? "Collapse panel" : "Expand panel",
              onClick: u,
              className: "panel__collapse-btn"
            }
          ) : r && /* @__PURE__ */ a("div", { className: "panel__header-end", children: r })
        ]
      }
    );
  }
);
rf.displayName = "PanelHeader";
const of = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["panel__body", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
);
of.displayName = "PanelBody";
const af = E.forwardRef(
  function({ padding: t, children: n, className: r, style: o, ...i }, s) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        className: ["panel__footer", r].filter(Boolean).join(" "),
        style: t ? { ...o, padding: t } : o,
        ...i,
        children: n
      }
    );
  }
);
af.displayName = "PanelFooter";
const sf = E.forwardRef(
  function({
    variant: t = "flat",
    heading: n,
    headingLevel: r = "h2",
    description: o,
    divider: i = !1,
    children: s,
    className: l,
    ...c
  }, f) {
    const u = r, d = /* @__PURE__ */ w(
      "section",
      {
        ref: f,
        className: ["section", l].filter(Boolean).join(" "),
        "data-variant": t,
        ...c,
        children: [
          (n || o) && /* @__PURE__ */ w("div", { className: "section__header", children: [
            n && /* @__PURE__ */ a(
              u,
              {
                className: "section__title",
                "data-level": r,
                children: n
              }
            ),
            o && /* @__PURE__ */ a("p", { className: "section__description", children: o })
          ] }),
          s && /* @__PURE__ */ a("div", { className: "section__body", children: s })
        ]
      }
    );
    return i ? /* @__PURE__ */ w(_e, { children: [
      d,
      /* @__PURE__ */ a("hr", { className: "section__divider" })
    ] }) : d;
  }
);
sf.displayName = "Section";
const oi = E.createContext({
  onClose: () => {
  },
  titleId: ""
});
function lf() {
  return E.useContext(oi);
}
const Yr = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function cf(e, t) {
  E.useEffect(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(Yr);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(Yr));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [t, e]);
}
let df = 0;
function uf({ open: e, onClose: t, size: n = "medium", children: r, className: o }) {
  const [i] = E.useState(() => `dialog-title-${++df}`), s = E.useRef(null), [l, c] = E.useState(e), [f, u] = E.useState(e);
  return E.useEffect(() => {
    if (e) {
      c(!0);
      const d = requestAnimationFrame(() => {
        requestAnimationFrame(() => u(!0));
      });
      return () => cancelAnimationFrame(d);
    } else {
      u(!1);
      const d = window.setTimeout(() => c(!1), 200);
      return () => window.clearTimeout(d);
    }
  }, [e]), E.useEffect(() => {
    if (!e) return;
    function d(p) {
      p.key === "Escape" && t();
    }
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [e, t]), E.useEffect(() => {
    if (!e) return;
    const d = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = d;
    };
  }, [e]), cf(s, e), l ? $n.createPortal(
    /* @__PURE__ */ w(oi.Provider, { value: { onClose: t, titleId: i }, children: [
      /* @__PURE__ */ a(
        "div",
        {
          className: "dialog-backdrop",
          "data-open": String(f),
          "aria-hidden": "true",
          onClick: t
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          className: "dialog-positioner",
          onClick: t,
          children: /* @__PURE__ */ a(
            "div",
            {
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": i,
              "data-size": n,
              "data-open": String(f),
              className: ["dialog", o].filter(Boolean).join(" "),
              onClick: (d) => d.stopPropagation(),
              children: r
            }
          )
        }
      )
    ] }),
    document.body
  ) : null;
}
uf.displayName = "Dialog";
const ff = E.forwardRef(
  function({ icon: t, children: n, className: r, ...o }, i) {
    const { onClose: s, titleId: l } = lf();
    return /* @__PURE__ */ w(
      "div",
      {
        ref: i,
        className: ["dialog__header", r].filter(Boolean).join(" "),
        ...o,
        children: [
          /* @__PURE__ */ w("div", { className: "dialog__header-start", children: [
            t && /* @__PURE__ */ a("span", { className: "dialog__header-icon", "aria-hidden": "true", children: t }),
            /* @__PURE__ */ a("h2", { id: l, className: "dialog__title", children: n })
          ] }),
          /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Ne, { "aria-hidden": "true" }),
              "aria-label": "Close dialog",
              onClick: s,
              className: "dialog__close"
            }
          )
        ]
      }
    );
  }
);
ff.displayName = "DialogHeader";
const pf = E.forwardRef(
  function({ children: t, className: n, ...r }, o) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        className: ["dialog__body", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
);
pf.displayName = "DialogBody";
const mf = E.forwardRef(
  function({ children: t, className: n, ...r }, o) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        className: ["dialog__footer", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
);
mf.displayName = "DialogFooter";
const ai = E.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function ii() {
  return E.useContext(ai);
}
let hf = 0;
function vf({
  value: e,
  onValueChange: t,
  size: n = "medium",
  children: r,
  className: o,
  ...i
}) {
  const [s] = E.useState(() => `tabs-${++hf}`);
  return /* @__PURE__ */ a(ai.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ a("div", { className: ["tabs", o].filter(Boolean).join(" "), ...i, children: r }) });
}
vf.displayName = "Tabs";
function gf({ variant: e = "loud", padding: t, children: n, className: r, style: o }) {
  const i = t ? { ...o, paddingLeft: t, paddingRight: t, "--_tab-inset": t } : o ?? {};
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tablist",
      "data-variant": e,
      className: ["tab-list", r].filter(Boolean).join(" "),
      style: i,
      children: n
    }
  );
}
gf.displayName = "TabList";
function bf({
  value: e,
  icon: t,
  counter: n,
  closable: r,
  onClose: o,
  onMenuClick: i,
  disabled: s,
  children: l,
  className: c
}) {
  const { activeTab: f, onChange: u, size: d, baseId: p } = ii(), h = f === e, b = r || !!i;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["tab-item", c].filter(Boolean).join(" "),
      "data-selected": h ? "" : void 0,
      "data-size": d,
      "data-disabled": s ? "" : void 0,
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            role: "tab",
            id: `${p}-tab-${e}`,
            "aria-selected": h,
            "aria-controls": `${p}-panel-${e}`,
            disabled: s,
            className: "tab",
            onClick: () => u(e),
            children: [
              t && /* @__PURE__ */ a("span", { className: "tab__icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ a("span", { className: "tab__label", children: l }),
              n && /* @__PURE__ */ a("span", { className: "tab__counter", children: n })
            ]
          }
        ),
        b && /* @__PURE__ */ w("span", { className: "tab__actions", children: [
          i && /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(ji, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: h ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Ne, { size: 14 }),
              "aria-label": "Close tab",
              tabIndex: h ? 0 : -1,
              onClick: o
            }
          )
        ] })
      ]
    }
  );
}
bf.displayName = "Tab";
function _f({ value: e, children: t, className: n, style: r }) {
  const { activeTab: o, baseId: i } = ii();
  return o !== e ? null : /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      id: `${i}-panel-${e}`,
      "aria-labelledby": `${i}-tab-${e}`,
      tabIndex: 0,
      className: ["tab-panel", n].filter(Boolean).join(" "),
      style: r,
      children: t
    }
  );
}
_f.displayName = "TabPanel";
const si = E.createContext({ size: "medium" });
function wf() {
  return E.useContext(si);
}
function yf({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ a(si.Provider, { value: { size: e }, children: /* @__PURE__ */ a(
    "ul",
    {
      role: "list",
      className: ["list", n].filter(Boolean).join(" "),
      style: r,
      children: t
    }
  ) });
}
yf.displayName = "List";
function Nf({
  header: e,
  description: t,
  contentBefore: n,
  contentAfter: r,
  size: o,
  interactive: i,
  onClick: s,
  href: l,
  bulkSelect: c,
  bulkSelectChecked: f = !1,
  onBulkSelectChange: u,
  unreadIndicator: d,
  disabled: p,
  className: h
}) {
  const { size: b } = wf(), v = o ?? b, g = i || !!s || !!l, _ = /* @__PURE__ */ w(_e, { children: [
    n && /* @__PURE__ */ a("span", { className: "list-item__before", children: n }),
    /* @__PURE__ */ w("span", { className: "list-item__content", children: [
      /* @__PURE__ */ a("span", { className: "list-item__header", children: e }),
      t && /* @__PURE__ */ a("span", { className: "list-item__description", children: t })
    ] }),
    r && /* @__PURE__ */ a("span", { className: "list-item__after", children: r })
  ] }), N = l ? /* @__PURE__ */ a("a", { href: l, className: "list-item__inner", children: _ }) : s ? /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "list-item__inner",
      onClick: s,
      disabled: p,
      children: _
    }
  ) : /* @__PURE__ */ a("div", { className: "list-item__inner", children: _ });
  return /* @__PURE__ */ w(
    "li",
    {
      className: ["list-item", h].filter(Boolean).join(" "),
      "data-size": v,
      "data-interactive": g ? "" : void 0,
      "data-unread": d ? "" : void 0,
      "data-disabled": p ? "" : void 0,
      children: [
        c && /* @__PURE__ */ a(
          "span",
          {
            className: "list-item__bulk-select",
            onClick: (y) => y.stopPropagation(),
            children: /* @__PURE__ */ a(
              "input",
              {
                type: "checkbox",
                className: "list-item__checkbox",
                checked: f,
                disabled: p,
                "aria-label": "Select item",
                onChange: (y) => u == null ? void 0 : u(y.target.checked)
              }
            )
          }
        ),
        N
      ]
    }
  );
}
Nf.displayName = "ListItem";
const mm = E.forwardRef(
  function({ label: t, labelPosition: n = "after", disabled: r, id: o, className: i, ...s }, l) {
    const c = ee(), f = o ?? c;
    return /* @__PURE__ */ w(
      "label",
      {
        htmlFor: f,
        className: ["switch", i].filter(Boolean).join(" "),
        "data-disabled": r || void 0,
        "data-label-position": t ? n : void 0,
        children: [
          t && n === "before" && /* @__PURE__ */ a("span", { className: "switch__label", children: t }),
          /* @__PURE__ */ w("span", { className: "switch__control", children: [
            /* @__PURE__ */ a(
              "input",
              {
                ref: l,
                id: f,
                type: "checkbox",
                role: "switch",
                className: "switch__input",
                disabled: r,
                ...s
              }
            ),
            /* @__PURE__ */ a("span", { className: "switch__track", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "switch__handle" }) })
          ] }),
          t && n === "after" && /* @__PURE__ */ a("span", { className: "switch__label", children: t })
        ]
      }
    );
  }
), li = E.createContext({
  variant: "ordered",
  interactive: !1
});
function Cf({
  variant: e = "ordered",
  interactive: t = !1,
  children: n,
  className: r,
  ...o
}) {
  let i = 0;
  const s = E.Children.map(n, (l) => E.isValidElement(l) ? (i++, E.cloneElement(l, {
    _stepNumber: i
  })) : l);
  return /* @__PURE__ */ a(li.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ a(
    "ol",
    {
      className: ["stepper", r].filter(Boolean).join(" "),
      "data-variant": e,
      ...o,
      children: s
    }
  ) });
}
Cf.displayName = "Stepper";
function xf({
  title: e,
  description: t,
  type: n = "default",
  active: r,
  disabled: o,
  icon: i,
  extras: s,
  onClick: l,
  _stepNumber: c,
  children: f,
  className: u,
  ...d
}) {
  const { variant: p, interactive: h } = E.useContext(li), b = h && !o && !!l, v = () => n === "checked" ? /* @__PURE__ */ a(Ie, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ a(st, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ a(ze, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ a("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ w(_e, { children: [
    /* @__PURE__ */ a("p", { className: "stepper-step__title", children: e }),
    t && /* @__PURE__ */ a("p", { className: "stepper-step__description", children: t })
  ] });
  return /* @__PURE__ */ w(
    "li",
    {
      className: ["stepper-step", u].filter(Boolean).join(" "),
      "data-type": n,
      "data-active": r || void 0,
      "data-disabled": o || void 0,
      "data-interactive": h && !o || void 0,
      "aria-current": r ? "step" : void 0,
      ...d,
      children: [
        /* @__PURE__ */ w("div", { className: "stepper-step__track", "aria-hidden": "true", children: [
          /* @__PURE__ */ a("div", { className: "stepper-step__indicator", children: v() }),
          /* @__PURE__ */ a("div", { className: "stepper-step__connector" })
        ] }),
        /* @__PURE__ */ w("div", { className: "stepper-step__body", children: [
          b ? /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "stepper-step__trigger",
              onClick: l,
              children: g
            }
          ) : /* @__PURE__ */ a("div", { className: "stepper-step__header", children: g }),
          s && /* @__PURE__ */ a("div", { className: "stepper-step__extras", children: s }),
          f
        ] })
      ]
    }
  );
}
xf.displayName = "StepperStep";
const hm = E.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: o, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          o,
          /* @__PURE__ */ a("span", { className: "icon-badge__counter", children: /* @__PURE__ */ a(pr, { count: t, size: "small", color: n, variant: r }) })
        ]
      }
    );
  }
);
function Sf(e, t) {
  if (t <= 1) return "full";
  const n = Math.min(t, 5), r = Math.min(t, 3), o = n * 120 + Math.max(n - 1, 0) * 8, i = r * 105 + Math.max(r - 1, 0) * 8;
  return e >= o ? "full" : e >= i ? "compact" : "minimal";
}
function ci(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Rf(e) {
  const t = ci(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function vm({
  title: e,
  description: t,
  date: n,
  showBreadcrumb: r = !1,
  breadcrumbItems: o = [],
  onBreadcrumbNavigate: i,
  tags: s = [],
  mainActions: l,
  secondaryToolbar: c,
  lastUpdateInfo: f,
  sticky: u = !1,
  compact: d = !1,
  truncateTitle: p = !1,
  className: h,
  style: b
}) {
  const [v, g] = q("minimal"), _ = ie(null), N = ie(null), y = ie(null), C = ie(null), M = le(() => {
    var j, K, X;
    if (!(l != null && l.length)) return;
    let O;
    if (p)
      O = ((j = y.current) == null ? void 0 : j.offsetWidth) ?? 0;
    else {
      const re = ((K = _.current) == null ? void 0 : K.offsetWidth) ?? 0, te = ((X = N.current) == null ? void 0 : X.scrollWidth) ?? 0;
      O = re - te - 24;
    }
    c && C.current && (O -= C.current.offsetWidth + 17), g(Sf(O, l.length));
  }, [l, c, p]);
  Dn(() => {
    M();
    const O = p ? y.current : _.current;
    if (!O) return;
    const j = new ResizeObserver(M);
    return j.observe(O), () => j.disconnect();
  }, [M, p]);
  const P = !!(l != null && l.length), R = P || !!c, I = !!c && P, T = r && o.length >= 2 ? o[o.length - 2] : null, k = l ? Rf(l) : [], S = l ? ci(l) : void 0, A = k.length > 0, z = r && o.length > 0 ? /* @__PURE__ */ a(
    wu,
    {
      items: o,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, V = n ? /* @__PURE__ */ a("p", { className: "rpl-page-header__date", children: n }) : null, Y = /* @__PURE__ */ w("div", { className: "rpl-page-header__heading-row", children: [
    /* @__PURE__ */ a(
      "h1",
      {
        className: [
          "rpl-page-header__title",
          d ? "rpl-page-header__title--compact" : "",
          p ? "rpl-page-header__title--truncate" : ""
        ].filter(Boolean).join(" "),
        title: p ? e : void 0,
        children: e
      }
    ),
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map((O, j) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: O }, j)
    )) })
  ] }), W = t ? /* @__PURE__ */ a("p", { className: "rpl-page-header__description", children: t }) : null, $ = /* @__PURE__ */ w("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
    f && /* @__PURE__ */ a("div", { className: "rpl-page-header__meta-row", children: /* @__PURE__ */ a("span", { className: "rpl-page-header__last-update", children: f }) }),
    /* @__PURE__ */ w(
      "div",
      {
        ref: _,
        className: [
          "rpl-page-header__main-row",
          p ? "rpl-page-header__main-row--split" : ""
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ w("div", { ref: N, className: "rpl-page-header__title-area", children: [
            z,
            V,
            Y,
            W
          ] }),
          R && /* @__PURE__ */ w(
            "div",
            {
              ref: y,
              className: "rpl-page-header__actions",
              children: [
                c && /* @__PURE__ */ a(
                  "div",
                  {
                    ref: C,
                    className: "rpl-page-header__secondary-toolbar",
                    children: c
                  }
                ),
                I && /* @__PURE__ */ a(
                  "div",
                  {
                    className: "rpl-page-header__toolbar-divider",
                    role: "separator",
                    "aria-hidden": "true"
                  }
                ),
                P && /* @__PURE__ */ a(
                  Ru,
                  {
                    actions: l,
                    variant: v,
                    className: "rpl-page-header__main-actions"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] }), B = /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-layout", "aria-hidden": "true", children: [
    T && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-back", children: T.href ? /* @__PURE__ */ w(
      "a",
      {
        href: T.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? (O) => {
          O.preventDefault(), i(T.href);
        } : void 0,
        children: [
          /* @__PURE__ */ a(ft, { size: 16, "aria-hidden": "true" }),
          T.label
        ]
      }
    ) : /* @__PURE__ */ w("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ a(ft, { size: 16, "aria-hidden": "true" }),
      T.label
    ] }) }),
    V,
    Y,
    W,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-tags", children: s.map((O, j) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: O }, j)
    )) }),
    f && /* @__PURE__ */ a("p", { className: "rpl-page-header__last-update", children: f }),
    c && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-secondary", children: c }),
    P && /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-actions", children: [
      A && /* @__PURE__ */ w(Ge, { children: [
        /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
          me,
          {
            icon: /* @__PURE__ */ a(Qr, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ a(Ye, { align: "start", sideOffset: 4, children: k.map((O, j) => {
          var K;
          return /* @__PURE__ */ w("span", { children: [
            j > 0 && O.type !== ((K = k[j - 1]) == null ? void 0 : K.type) && /* @__PURE__ */ a(Et, {}),
            /* @__PURE__ */ w(
              ae,
              {
                disabled: O.disabled,
                onSelect: O.onClick,
                children: [
                  O.icon && /* @__PURE__ */ a("span", { "aria-hidden": "true", children: O.icon }),
                  O.label
                ]
              }
            )
          ] }, O.id);
        }) })
      ] }),
      S && /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          className: "rpl-page-header__mobile-primary",
          disabled: S.disabled,
          onClick: S.onClick,
          children: [
            S.loading ? /* @__PURE__ */ a("span", { className: "rpl-page-header__mobile-spinner", "aria-hidden": "true" }) : S.icon ? /* @__PURE__ */ a("span", { "aria-hidden": "true", children: S.icon }) : null,
            S.label
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ w(
    "header",
    {
      className: [
        "rpl-page-header",
        u ? "rpl-page-header--sticky" : "",
        d ? "rpl-page-header--compact" : "",
        h
      ].filter(Boolean).join(" "),
      style: b,
      children: [
        $,
        B
      ]
    }
  );
}
function gm({
  label: e,
  value: t = 0,
  valueLabel: n,
  hint: r,
  state: o = "active",
  indeterminate: i = !1,
  hideLabel: s = !1,
  hideValue: l = !1,
  className: c,
  style: f
}) {
  const u = ee(), d = `${u}-label`, p = `${u}-live`, h = Math.min(100, Math.max(0, t)), b = i || o === "success" ? void 0 : `${h}%`, v = i ? { role: "progressbar", "aria-label": e } : {
    role: "progressbar",
    "aria-valuenow": o === "success" ? 100 : h,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-labelledby": d
  }, g = l ? null : o === "success" ? /* @__PURE__ */ a(Ie, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : o === "error" ? /* @__PURE__ */ a(Ne, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ a("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${h}%` }), _ = o === "success" ? `${e} complete` : o === "error" ? `${e} failed` : "";
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["progress-bar", c].filter(Boolean).join(" "),
      "data-state": o,
      "data-indeterminate": i ? "" : void 0,
      style: f,
      children: [
        (!s || g) && /* @__PURE__ */ w("div", { className: "progress-bar__header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              id: d,
              className: [
                "progress-bar__label",
                s ? "progress-bar__label--hidden" : ""
              ].filter(Boolean).join(" "),
              children: e
            }
          ),
          g
        ] }),
        /* @__PURE__ */ a("div", { className: "progress-bar__track", ...v, children: /* @__PURE__ */ a(
          "div",
          {
            className: "progress-bar__fill",
            style: b ? { width: b } : void 0
          }
        ) }),
        r && /* @__PURE__ */ a("p", { className: "progress-bar__hint", children: r }),
        /* @__PURE__ */ a(
          "span",
          {
            id: p,
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            className: "progress-bar__live",
            children: _
          }
        )
      ]
    }
  );
}
function Ef(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Mf(e) {
  return Math.max(3, Math.floor(e * 0.06));
}
function Pf(e, t) {
  return (e - t) / 2;
}
function If(e) {
  return 2 * Math.PI * e;
}
function Af(e, t) {
  return e * (1 - t / 100);
}
function Of(e, t) {
  const n = Math.floor(e * 0.25);
  return Math.max(12, t !== void 0 ? t : n);
}
function bm({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: o = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Ef(e, 0, 100), f = Mf(n), u = Pf(n, f), d = If(u), p = Af(d, c), h = n / 2, b = n / 2, v = Of(n, r), g = t !== void 0 ? t : `${c}%`, _ = i ?? g;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["progress-circle", s].filter(Boolean).join(" "),
      "data-variant": o,
      style: {
        width: n,
        height: n,
        ...l
      },
      role: "progressbar",
      "aria-valuenow": c,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": _,
      children: [
        /* @__PURE__ */ w(
          "svg",
          {
            className: "progress-circle__svg",
            width: n,
            height: n,
            viewBox: `0 0 ${n} ${n}`,
            "aria-hidden": "true",
            focusable: "false",
            children: [
              /* @__PURE__ */ a(
                "circle",
                {
                  className: "progress-circle__track",
                  cx: h,
                  cy: b,
                  r: u,
                  fill: "none",
                  strokeWidth: f
                }
              ),
              /* @__PURE__ */ a(
                "circle",
                {
                  className: "progress-circle__arc",
                  cx: h,
                  cy: b,
                  r: u,
                  fill: "none",
                  strokeWidth: f,
                  strokeLinecap: "round",
                  strokeDasharray: d,
                  strokeDashoffset: p,
                  transform: `rotate(-90 ${h} ${b})`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          "span",
          {
            className: "progress-circle__label",
            "aria-hidden": "true",
            style: { fontSize: v },
            children: g
          }
        )
      ]
    }
  );
}
const di = Bn(null);
function Tf() {
  const e = Fn(di);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function kf({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ a(Yt, { ...t }) : e === "notice" ? /* @__PURE__ */ a(st, { ...t }) : /* @__PURE__ */ a(ze, { ...t });
}
const _m = E.forwardRef(
  function({ value: t, label: n, disabled: r, id: o, className: i, ...s }, l) {
    const c = Tf(), f = ee(), u = o ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
    return /* @__PURE__ */ w(
      "label",
      {
        htmlFor: u,
        className: ["radio", i].filter(Boolean).join(" "),
        "data-disabled": d || void 0,
        "data-checked": p || void 0,
        children: [
          /* @__PURE__ */ w("span", { className: "radio__control", children: [
            /* @__PURE__ */ a(
              "input",
              {
                ref: l,
                id: u,
                type: "radio",
                className: "radio__input",
                name: c.name,
                value: t,
                checked: p,
                disabled: d,
                onChange: () => c.onValueChange(t),
                ...s
              }
            ),
            /* @__PURE__ */ a("span", { className: "radio__circle", "aria-hidden": "true" })
          ] }),
          n && /* @__PURE__ */ a("span", { className: "radio__label", children: n })
        ]
      }
    );
  }
), wm = E.forwardRef(
  function({
    value: t,
    onValueChange: n,
    label: r,
    description: o,
    hint: i,
    validation: s,
    validationMessage: l,
    required: c,
    disabled: f = !1,
    name: u,
    layout: d = "stacked",
    children: p,
    className: h,
    style: b
  }, v) {
    const g = ee(), _ = u ?? g, N = ee(), y = ee(), C = [
      i ? N : null,
      l ? y : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a(di.Provider, { value: { groupValue: t, onValueChange: n, name: _, groupDisabled: f }, children: /* @__PURE__ */ w(
      "fieldset",
      {
        ref: v,
        className: ["radio-group", h].filter(Boolean).join(" "),
        "data-validation": s,
        "data-layout": d,
        "data-disabled": f || void 0,
        "aria-describedby": C,
        "aria-required": c || void 0,
        style: b,
        children: [
          r && /* @__PURE__ */ w("legend", { className: "radio-group__legend", children: [
            r,
            c && /* @__PURE__ */ a("span", { className: "radio-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          o && /* @__PURE__ */ a("p", { className: "radio-group__description", children: o }),
          /* @__PURE__ */ a("div", { className: "radio-group__items", children: p }),
          i && /* @__PURE__ */ a("p", { id: N, className: "radio-group__hint", children: i }),
          l && s && /* @__PURE__ */ w(
            "p",
            {
              id: y,
              className: "radio-group__message",
              role: s === "negative" ? "alert" : void 0,
              children: [
                /* @__PURE__ */ a(kf, { validation: s }),
                l
              ]
            }
          )
        ]
      }
    ) });
  }
), Df = { small: 16, medium: 20 };
function at(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function An(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function Lf(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const o = (n - t) / r, i = o > 10 ? Math.ceil(o / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function On({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: o,
  visible: i
}) {
  const s = at(e, t, n), l = An(s, r);
  return /* @__PURE__ */ a(
    "div",
    {
      className: "range__tooltip",
      style: { left: l },
      "aria-hidden": "true",
      "data-visible": i || void 0,
      children: o(e)
    }
  );
}
function ui({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: o
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ w(_e, { children: [
    e.length > 0 && /* @__PURE__ */ a("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ a(
      "div",
      {
        className: "range__marker",
        style: { left: An(at(i, n, r), o) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ a("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ a(
      "span",
      {
        className: "range__indicator",
        style: { left: An(at(i.value, n, r), o) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function ym(e) {
  const {
    label: t,
    labelPosition: n = "top",
    hideLabel: r = !1,
    min: o = 0,
    max: i = 100,
    step: s = 1,
    size: l = "medium",
    markers: c = !1,
    indicators: f = [],
    showMinMax: u = !1,
    hint: d,
    validation: p,
    validationMessage: h,
    formatValue: b = String,
    disabled: v = !1,
    className: g,
    style: _
  } = e, N = ee(), y = ee(), C = ee(), M = Df[l], P = Lt(
    () => c ? Lf(c, o, i, s) : [],
    [c, o, i, s]
  ), R = f.length > 0, I = [
    d ? y : null,
    h ? C : null
  ].filter(Boolean).join(" ") || void 0, T = /* @__PURE__ */ a(
    "label",
    {
      id: N,
      className: [
        "range__label",
        r ? "range__label--hidden" : ""
      ].filter(Boolean).join(" "),
      children: t
    }
  );
  return /* @__PURE__ */ w(
    "div",
    {
      className: [
        "range",
        `range--${l}`,
        n === "left" ? "range--left-label" : "",
        g
      ].filter(Boolean).join(" "),
      "data-validation": p,
      "data-disabled": v || void 0,
      style: _,
      children: [
        n === "top" && T,
        /* @__PURE__ */ w("div", { className: "range__body", children: [
          n === "left" && T,
          /* @__PURE__ */ w("div", { className: "range__track-column", children: [
            u && /* @__PURE__ */ w("div", { className: "range__minmax", "aria-hidden": "true", children: [
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: b(o) }),
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: b(i) })
            ] }),
            /* @__PURE__ */ a(
              "div",
              {
                className: [
                  "range__track-area",
                  R ? "range__track-area--has-indicators" : ""
                ].filter(Boolean).join(" "),
                children: e.dual ? /* @__PURE__ */ a(
                  Ff,
                  {
                    ...e,
                    min: o,
                    max: i,
                    step: s,
                    size: l,
                    thumbSize: M,
                    markerValues: P,
                    indicators: f,
                    formatValue: b,
                    disabled: v,
                    labelId: N,
                    describedBy: I
                  }
                ) : /* @__PURE__ */ a(
                  Bf,
                  {
                    ...e,
                    min: o,
                    max: i,
                    step: s,
                    size: l,
                    thumbSize: M,
                    markerValues: P,
                    indicators: f,
                    formatValue: b,
                    disabled: v,
                    labelId: N,
                    describedBy: I
                  }
                )
              }
            ),
            d && /* @__PURE__ */ a("p", { id: y, className: "range__hint", children: d }),
            h && p && /* @__PURE__ */ w(
              "p",
              {
                id: C,
                className: "range__message",
                role: p === "negative" ? "alert" : void 0,
                children: [
                  /* @__PURE__ */ a(ze, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
                  h
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Bf({
  value: e,
  onChange: t,
  min: n,
  max: r,
  step: o,
  thumbSize: i,
  markerValues: s,
  indicators: l,
  formatValue: c,
  disabled: f,
  labelId: u,
  describedBy: d
}) {
  const [p, h] = q(!1), v = `${at(e, n, r)}%`;
  return /* @__PURE__ */ w(_e, { children: [
    /* @__PURE__ */ a(
      On,
      {
        value: e,
        min: n,
        max: r,
        thumbSize: i,
        formatValue: c,
        visible: p
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        type: "range",
        className: "range__input",
        min: n,
        max: r,
        step: o,
        value: e,
        disabled: f,
        "aria-labelledby": u,
        "aria-describedby": d,
        "aria-valuetext": c(e),
        style: { "--_fill-pct": v },
        onChange: (g) => t(Number(g.target.value)),
        onFocus: () => h(!0),
        onBlur: () => h(!1),
        onPointerDown: () => h(!0),
        onPointerUp: () => h(!1)
      }
    ),
    /* @__PURE__ */ a(
      ui,
      {
        markerValues: s,
        indicators: l,
        min: n,
        max: r,
        thumbSize: i
      }
    )
  ] });
}
function Ff({
  value: e,
  onChange: t,
  label: n,
  lowLabel: r,
  highLabel: o,
  min: i,
  max: s,
  step: l,
  thumbSize: c,
  markerValues: f,
  indicators: u,
  formatValue: d,
  disabled: p,
  describedBy: h
}) {
  const [b, v] = e, [g, _] = q(null), N = ie(null), y = ie(null), C = at(b, i, s), M = at(v, i, s);
  function P(k) {
    const S = Math.min(Number(k.target.value), v - l);
    t([S, v]);
  }
  function R(k) {
    const S = Math.max(Number(k.target.value), b + l);
    t([b, S]);
  }
  const I = r ?? `Minimum ${n}`, T = o ?? `Maximum ${n}`;
  return /* @__PURE__ */ w(_e, { children: [
    /* @__PURE__ */ a(
      On,
      {
        value: b,
        min: i,
        max: s,
        thumbSize: c,
        formatValue: d,
        visible: g === "low"
      }
    ),
    /* @__PURE__ */ a(
      On,
      {
        value: v,
        min: i,
        max: s,
        thumbSize: c,
        formatValue: d,
        visible: g === "high"
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        className: "range__dual-fill",
        style: {
          left: `${C}%`,
          width: `${M - C}%`
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        ref: N,
        type: "range",
        className: "range__input range__input--dual",
        min: i,
        max: s,
        step: l,
        value: b,
        disabled: p,
        "aria-label": I,
        "aria-describedby": h,
        "aria-valuetext": d(b),
        style: { zIndex: g === "low" ? 2 : 1 },
        onChange: P,
        onFocus: () => _("low"),
        onBlur: () => _(null),
        onPointerDown: () => _("low"),
        onPointerUp: () => {
          document.activeElement !== N.current && _(null);
        }
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        ref: y,
        type: "range",
        className: "range__input range__input--dual",
        min: i,
        max: s,
        step: l,
        value: v,
        disabled: p,
        "aria-label": T,
        "aria-describedby": h,
        "aria-valuetext": d(v),
        style: { zIndex: g === "high" ? 2 : 1 },
        onChange: R,
        onFocus: () => _("high"),
        onBlur: () => _(null),
        onPointerDown: () => _("high"),
        onPointerUp: () => {
          document.activeElement !== y.current && _(null);
        }
      }
    ),
    /* @__PURE__ */ a(
      ui,
      {
        markerValues: f,
        indicators: u,
        min: i,
        max: s,
        thumbSize: c
      }
    )
  ] });
}
function Xr({ item: e }) {
  const t = e.count && e.count > 0 ? `${e.label} (${e.count > 99 ? "99+" : e.count})` : e.label;
  return /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        className: "navbar__nav-btn",
        "aria-label": t,
        "aria-pressed": e.selected ?? !1,
        disabled: e.disabled,
        "aria-disabled": e.disabled,
        onClick: e.onClick,
        "data-selected": e.selected ? "" : void 0,
        children: [
          /* @__PURE__ */ a("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: e.icon }),
          e.count !== void 0 && e.count > 0 && /* @__PURE__ */ a(
            pr,
            {
              count: e.count,
              size: "small",
              variant: "fill",
              color: e.countColor ?? "primary",
              "aria-hidden": "true",
              className: "navbar__counter"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a("span", { className: "navbar__tooltip", role: "tooltip", children: t })
  ] });
}
function $f({
  logo: e,
  productName: t,
  onLogoClick: n,
  tenantLabel: r,
  tenantColor: o = "notice",
  globalNavItems: i = [],
  contextualNavItems: s = [],
  showContextualDivider: l = !0,
  userName: c = "User",
  userAvatarSrc: f,
  userMenuItems: u = [],
  className: d,
  style: p
}) {
  const h = i.slice(0, 5), b = s.slice(0, 4), v = s.slice(4), g = s.length > 0, _ = v.length > 0, N = /* @__PURE__ */ w(_e, { children: [
    /* @__PURE__ */ a("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ a(zf, {}) }),
    t && /* @__PURE__ */ a("span", { className: "navbar__product-name", "aria-hidden": "true", children: t })
  ] });
  return /* @__PURE__ */ w(
    "nav",
    {
      className: ["navbar", d].filter(Boolean).join(" "),
      "aria-label": "Application navigation",
      style: p,
      children: [
        n ? /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "navbar__logo navbar__logo--interactive",
            "aria-label": "Go to home",
            onClick: n,
            children: N
          }
        ) : /* @__PURE__ */ a("div", { className: "navbar__logo", children: N }),
        r && /* @__PURE__ */ a("div", { className: "navbar__tenant", children: /* @__PURE__ */ a(
          Gu,
          {
            variant: "fill",
            size: "small",
            color: o,
            className: "navbar__tenant-badge",
            title: r,
            children: r
          }
        ) }),
        h.length > 0 && /* @__PURE__ */ a("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: h.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Xr, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ w(_e, { children: [
          l && /* @__PURE__ */ a("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ w("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            b.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Xr, { item: y }) }, y.id)),
            _ && /* @__PURE__ */ a("li", { children: /* @__PURE__ */ w(Ge, { children: [
              /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
                /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__nav-btn",
                    "aria-label": "More navigation items",
                    children: /* @__PURE__ */ a("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Xe, { size: 20 }) })
                  }
                ) }),
                /* @__PURE__ */ a("span", { className: "navbar__tooltip", role: "tooltip", children: "More" })
              ] }),
              /* @__PURE__ */ a(Ye, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ w(
                ae,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ a("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ a(
                      pr,
                      {
                        count: y.count,
                        size: "small",
                        variant: "fill",
                        color: y.countColor ?? "primary",
                        "aria-hidden": "true",
                        className: "navbar__overflow-counter"
                      }
                    )
                  ]
                },
                y.id
              )) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "navbar__spacer", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "navbar__user", children: /* @__PURE__ */ w(Ge, { children: [
          /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
            /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
              Yu,
              {
                name: c,
                src: f,
                size: "m",
                "aria-label": `${c} — open user menu`,
                className: "navbar__avatar-trigger"
              }
            ) }),
            /* @__PURE__ */ a("span", { className: "navbar__tooltip", role: "tooltip", children: c })
          ] }),
          /* @__PURE__ */ w(Ye, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ a(ti, { children: c }),
            u.map((y) => /* @__PURE__ */ w("span", { children: [
              y.separator && /* @__PURE__ */ a(Et, {}),
              /* @__PURE__ */ w(ae, { onSelect: y.onClick, children: [
                y.icon && /* @__PURE__ */ a("span", { "aria-hidden": "true", children: y.icon }),
                y.label
              ] })
            ] }, y.id))
          ] })
        ] }) })
      ]
    }
  );
}
function zf() {
  return /* @__PURE__ */ w(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ a("rect", { width: "32", height: "32", rx: "8", fill: "var(--color-primary)" }),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M10 22V10h4l2 8 2-8h4v12h-3v-7l-2 7h-2l-2-7v7H10z",
            fill: "white"
          }
        )
      ]
    }
  );
}
function jf() {
  return /* @__PURE__ */ a("span", { className: "split-button__spinner", "aria-hidden": "true" });
}
function Nm({
  label: e,
  onClick: t,
  items: n,
  variant: r = "fill",
  color: o = "primary",
  size: i = "medium",
  iconStart: s,
  disabled: l = !1,
  loading: c = !1,
  triggerLabel: f = "More options",
  className: u,
  style: d
}) {
  return /* @__PURE__ */ w(Ct, { children: [
    /* @__PURE__ */ w(
      "div",
      {
        className: ["split-button", u].filter(Boolean).join(" "),
        "data-variant": r,
        "data-color": o,
        "data-size": i,
        "data-disabled": l || void 0,
        style: d,
        children: [
          /* @__PURE__ */ w(
            "button",
            {
              className: "split-button__primary",
              onClick: t,
              disabled: l || c,
              "aria-busy": c || void 0,
              "data-loading": c ? "true" : void 0,
              children: [
                c ? /* @__PURE__ */ a(jf, {}) : s,
                e
              ]
            }
          ),
          /* @__PURE__ */ a("span", { className: "split-button__divider", "aria-hidden": "true" }),
          /* @__PURE__ */ a(xt, { asChild: !0, children: /* @__PURE__ */ a(
            "button",
            {
              className: "split-button__trigger",
              "aria-label": f,
              disabled: l,
              children: /* @__PURE__ */ a(gt, { className: "split-button__chevron", "aria-hidden": "true" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a(dt, { children: /* @__PURE__ */ a(
      St,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ w(
          Rt,
          {
            className: "split-button__menu-item",
            disabled: p.disabled,
            onSelect: p.disabled ? void 0 : p.onSelect,
            "data-disabled": p.disabled ? "" : void 0,
            children: [
              p.icon && /* @__PURE__ */ a("span", { className: "split-button__menu-icon", "aria-hidden": "true", children: p.icon }),
              p.label
            ]
          },
          p.id
        ))
      }
    ) })
  ] });
}
const Wf = {
  negative: /* @__PURE__ */ a(ze, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  notice: /* @__PURE__ */ a(st, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ a(Yt, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, Cm = E.forwardRef(
  function({
    label: t,
    hint: n,
    validation: r,
    validationMessage: o,
    resize: i = "vertical",
    minHeight: s,
    maxHeight: l,
    showCounter: c = !1,
    className: f,
    style: u,
    // Extracted from rest to set defaults or handle separately
    rows: d = 3,
    maxLength: p,
    required: h,
    disabled: b,
    value: v,
    defaultValue: g,
    onChange: _,
    ...N
  }, y) {
    const C = ee(), M = ee(), P = ee(), R = ee(), [I, T] = q(() => String(v ?? g ?? "").length), k = v !== void 0 ? String(v).length : I, S = ie(null);
    Ln(y, () => S.current, []), Dn(() => {
      if (i !== "auto") return;
      const W = S.current;
      if (!W) return;
      W.style.height = "auto";
      const $ = W.scrollHeight, B = l !== void 0 ? Math.min($, l) : $, O = s !== void 0 ? Math.max(B, s) : B;
      W.style.height = `${O}px`, W.style.overflowY = l !== void 0 && $ >= l ? "auto" : "hidden";
    }, [k, i, s, l]);
    function A(W) {
      T(W.target.value.length), _ == null || _(W);
    }
    const z = !!(o && r), V = [
      z ? P : n ? M : null,
      c && p != null ? R : null
    ].filter(Boolean).join(" ") || void 0, Y = i === "auto" && s != null ? { minHeight: s } : {};
    return /* @__PURE__ */ w(
      "div",
      {
        className: ["textarea", f].filter(Boolean).join(" "),
        "data-validation": r,
        "data-disabled": b || void 0,
        style: u,
        children: [
          /* @__PURE__ */ w("label", { htmlFor: C, className: "textarea__label", children: [
            t,
            h && /* @__PURE__ */ a("span", { className: "textarea__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: S,
              id: C,
              className: "textarea__field",
              rows: d,
              maxLength: p,
              required: h,
              disabled: b,
              value: v,
              defaultValue: g,
              onChange: A,
              "aria-required": h || void 0,
              "aria-invalid": r === "negative" || void 0,
              "aria-describedby": V,
              "data-resize": i,
              style: Y,
              ...N
            }
          ),
          (n || z || c && p != null) && /* @__PURE__ */ w("div", { className: "textarea__footer", children: [
            z ? /* @__PURE__ */ w(
              "p",
              {
                id: P,
                className: "textarea__message",
                role: r === "negative" ? "alert" : void 0,
                children: [
                  Wf[r],
                  o
                ]
              }
            ) : n ? /* @__PURE__ */ a("p", { id: M, className: "textarea__hint", children: n }) : null,
            c && p != null && /* @__PURE__ */ w(
              "div",
              {
                id: R,
                className: [
                  "textarea__counter",
                  k >= p ? "textarea__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                "aria-live": "off",
                children: [
                  k,
                  " / ",
                  p
                ]
              }
            )
          ] }),
          c && p != null && /* @__PURE__ */ a("div", { className: "textarea__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: k >= p ? `Character limit of ${p} reached` : "" })
        ]
      }
    );
  }
), Vf = {
  negative: /* @__PURE__ */ a(ze, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ a(st, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ a(Yt, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, Hf = { small: 14, medium: 16, large: 18 }, xm = E.forwardRef(
  function({
    label: t,
    hideLabel: n = !1,
    hint: r,
    validation: o,
    validationMessage: i,
    size: s = "medium",
    prefix: l,
    suffix: c,
    iconStart: f,
    iconEnd: u,
    showCounter: d = !1,
    onClear: p,
    className: h,
    style: b,
    // Extracted to handle behaviour
    type: v = "text",
    required: g,
    disabled: _,
    readOnly: N,
    value: y,
    defaultValue: C,
    onChange: M,
    onFocus: P,
    onBlur: R,
    maxLength: I,
    ...T
  }, k) {
    const S = ee(), A = ee(), z = ee(), V = ee(), [Y, W] = q(!1), [$, B] = q(!1), [O, j] = q(() => String(y ?? C ?? "").length), K = y !== void 0 ? String(y).length : O, X = ie(null);
    Ln(k, () => X.current, []);
    const re = v === "password" && Y ? "text" : v, te = Hf[s], D = v === "search" && !f ? /* @__PURE__ */ a(Wi, { size: te, "aria-hidden": "true" }) : f;
    let H = null;
    v === "password" ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": Y ? "Hide password" : "Show password",
        tabIndex: 0,
        onClick: () => {
          var F;
          W((ue) => !ue), (F = X.current) == null || F.focus();
        },
        children: Y ? /* @__PURE__ */ a(eo, { size: te, "aria-hidden": "true" }) : /* @__PURE__ */ a(Vi, { size: te, "aria-hidden": "true" })
      }
    ) : v === "search" && K > 0 ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const F = X.current;
          F && (F.value = "", F.focus()), j(0), p == null || p();
        },
        children: /* @__PURE__ */ a(Ne, { size: te, "aria-hidden": "true" })
      }
    ) : H = u ?? null;
    const G = !!D, J = !!H, Z = !!(i && o), oe = [
      Z ? z : r ? A : null,
      d && I != null ? V : null
    ].filter(Boolean).join(" ") || void 0;
    function fe(F) {
      j(F.target.value.length), M == null || M(F);
    }
    function x(F) {
      B(!0), P == null || P(F);
    }
    function L(F) {
      B(!1), R == null || R(F);
    }
    return /* @__PURE__ */ w(
      "div",
      {
        className: ["text-input", h].filter(Boolean).join(" "),
        "data-size": s,
        "data-validation": o,
        "data-disabled": _ || void 0,
        style: b,
        children: [
          /* @__PURE__ */ w(
            "label",
            {
              htmlFor: S,
              className: [
                "text-input__label",
                n ? "text-input__label--hidden" : ""
              ].filter(Boolean).join(" "),
              children: [
                t,
                g && /* @__PURE__ */ a("span", { className: "text-input__required", "aria-hidden": "true", children: " *" })
              ]
            }
          ),
          /* @__PURE__ */ w(
            "div",
            {
              className: "text-input__wrapper",
              "data-focused": $ || void 0,
              "data-disabled": _ || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ a("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": G || void 0,
                    "data-icon-end": J || void 0,
                    children: [
                      D && /* @__PURE__ */ a("span", { className: "text-input__icon-start", "aria-hidden": "true", children: D }),
                      /* @__PURE__ */ a(
                        "input",
                        {
                          ref: X,
                          id: S,
                          className: "text-input__field",
                          type: re,
                          required: g,
                          disabled: _,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: I,
                          onChange: fe,
                          onFocus: x,
                          onBlur: L,
                          "aria-required": g || void 0,
                          "aria-invalid": o === "negative" || void 0,
                          "aria-describedby": oe,
                          ...T
                        }
                      ),
                      H && /* @__PURE__ */ a("span", { className: "text-input__icon-end", children: H })
                    ]
                  }
                ),
                c != null && /* @__PURE__ */ a("div", { className: "text-input__suffix", "aria-hidden": "true", children: c })
              ]
            }
          ),
          (r || Z || d && I != null) && /* @__PURE__ */ w("div", { className: "text-input__footer", children: [
            Z ? /* @__PURE__ */ w(
              "p",
              {
                id: z,
                className: "text-input__message",
                role: o === "negative" ? "alert" : void 0,
                children: [
                  Vf[o],
                  i
                ]
              }
            ) : r ? /* @__PURE__ */ a("p", { id: A, className: "text-input__hint", children: r }) : null,
            d && I != null && /* @__PURE__ */ w(
              "div",
              {
                id: V,
                className: [
                  "text-input__counter",
                  K >= I ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  K,
                  " / ",
                  I
                ]
              }
            )
          ] }),
          d && I != null && /* @__PURE__ */ a("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: K >= I ? `Character limit of ${I} reached` : "" })
        ]
      }
    );
  }
), Uf = {
  neutral: 6e3,
  positive: 6e3,
  notice: 0,
  negative: 0
}, Gf = {
  neutral: ro,
  positive: Yt,
  notice: to,
  negative: ze
}, fi = Bn(null);
function Kf({ toast: e, onExitStart: t, onExitComplete: n }) {
  const r = ie(!1);
  ce(() => {
    if (!e.duration || e.exiting) return;
    const l = setTimeout(() => t(e.id), e.duration);
    return () => clearTimeout(l);
  }, [e.id, e.duration, e.exiting, t]), ce(() => {
    if (!e.exiting) return;
    const l = setTimeout(() => {
      r.current || (r.current = !0, n(e.id));
    }, 320);
    return () => clearTimeout(l);
  }, [e.exiting, e.id, n]);
  function o(l) {
    l.animationName === "toast-exit" && !r.current && (r.current = !0, n(e.id));
  }
  const i = e.variant === "notice" || e.variant === "negative", s = e.variant === "neutral" && e.icon ? e.icon : Gf[e.variant];
  return /* @__PURE__ */ w(
    "div",
    {
      className: "toast",
      "data-variant": e.variant,
      "data-exiting": e.exiting || void 0,
      role: i ? "alert" : "status",
      "aria-live": i ? "assertive" : "polite",
      "aria-atomic": "true",
      style: e.showProgress && e.duration > 0 ? { "--_duration": `${e.duration}ms` } : void 0,
      onAnimationEnd: o,
      children: [
        /* @__PURE__ */ a("span", { className: "toast__icon", "aria-hidden": "true", children: /* @__PURE__ */ a(s, { size: 20 }) }),
        /* @__PURE__ */ w("div", { className: "toast__body", children: [
          /* @__PURE__ */ a("p", { className: "toast__title", children: e.title }),
          e.description && /* @__PURE__ */ a("p", { className: "toast__description", children: e.description }),
          e.timestamp && /* @__PURE__ */ a("p", { className: "toast__timestamp", children: e.timestamp }),
          e.action && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "toast__action",
              onClick: () => {
                e.action.onClick(), t(e.id);
              },
              children: e.action.label
            }
          )
        ] }),
        e.showCloseButton && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "toast__close",
            "aria-label": "Dismiss notification",
            onClick: () => t(e.id),
            children: /* @__PURE__ */ a(Ne, { size: 16, "aria-hidden": "true" })
          }
        ),
        e.showProgress && e.duration > 0 && !e.exiting && /* @__PURE__ */ a("div", { className: "toast__progress", "aria-hidden": "true", children: /* @__PURE__ */ a("div", { className: "toast__progress-bar" }) })
      ]
    }
  );
}
function Sm({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, o] = q([]), [i, s] = q(t), l = le((d) => {
    const p = d.variant ?? "neutral", h = d.duration !== void 0 ? d.duration : Uf[p], b = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
      id: crypto.randomUUID(),
      variant: p,
      title: d.title,
      description: d.description,
      timestamp: d.timestamp,
      icon: d.icon,
      action: d.action,
      showCloseButton: b,
      duration: h,
      showProgress: d.showProgress ?? !1,
      exiting: !1
    };
    return o((g) => {
      const _ = [v, ...g];
      return _.length > n ? _.slice(0, n) : _;
    }), v.id;
  }, [n]), c = le((d) => {
    o((p) => p.map((h) => h.id === d ? { ...h, exiting: !0 } : h));
  }, []), f = le(() => {
    o((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = le((d) => {
    o((p) => p.filter((h) => h.id !== d));
  }, []);
  return /* @__PURE__ */ w(fi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Ri(
      /* @__PURE__ */ a("div", { className: "toast-container", "data-position": i, "aria-label": "Notifications", children: r.map((d) => /* @__PURE__ */ a(
        Kf,
        {
          toast: d,
          onExitStart: c,
          onExitComplete: u
        },
        d.id
      )) }),
      document.body
    )
  ] });
}
function Rm() {
  const e = Fn(fi);
  if (!e) throw new Error("useToast must be used within a ToastProvider");
  return e;
}
var Yf = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Xf = "VisuallyHidden", pi = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...Yf, ...e.style }
    }
  )
);
pi.displayName = Xf;
var qf = pi, [ln] = je("Tooltip", [
  rn
]), cn = rn(), mi = "TooltipProvider", Zf = 700, Tn = "tooltip.open", [Qf, mr] = ln(mi), hi = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Zf,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, s = m.useRef(!0), l = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ a(
    Qf,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), s.current = !1;
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: m.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
hi.displayName = mi;
var vt = "Tooltip", [Jf, Mt] = ln(vt), vi = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = mr(vt, e.__scopeTooltip), f = cn(t), [u, d] = m.useState(null), p = Be(), h = m.useRef(0), b = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = m.useRef(!1), [_, N] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (R) => {
      R ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Tn))) : c.onClose(), i == null || i(R);
    },
    caller: vt
  }), y = m.useMemo(() => _ ? g.current ? "delayed-open" : "instant-open" : "closed", [_]), C = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, N(!0);
  }, [N]), M = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, N(!1);
  }, [N]), P = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, N(!0), h.current = 0;
    }, v);
  }, [v, N]);
  return m.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ a(rr, { ...f, children: /* @__PURE__ */ a(
    Jf,
    {
      scope: t,
      contentId: p,
      open: _,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : C();
      }, [c.isOpenDelayedRef, P, C]),
      onTriggerLeave: m.useCallback(() => {
        b ? M() : (window.clearTimeout(h.current), h.current = 0);
      }, [M, b]),
      onOpen: C,
      onClose: M,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
vi.displayName = vt;
var kn = "TooltipTrigger", gi = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Mt(kn, n), i = mr(kn, n), s = cn(n), l = m.useRef(null), c = se(t, l, o.onTriggerChange), f = m.useRef(!1), u = m.useRef(!1), d = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ a(Yo, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: U(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: U(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: U(e.onPointerDown, () => {
          o.open && o.onClose(), f.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: U(e.onFocus, () => {
          f.current || o.onOpen();
        }),
        onBlur: U(e.onBlur, o.onClose),
        onClick: U(e.onClick, o.onClose)
      }
    ) });
  }
);
gi.displayName = kn;
var hr = "TooltipPortal", [ep, tp] = ln(hr, {
  forceMount: void 0
}), bi = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = Mt(hr, t);
  return /* @__PURE__ */ a(ep, { scope: t, forceMount: n, children: /* @__PURE__ */ a(We, { present: n || i.open, children: /* @__PURE__ */ a(or, { asChild: !0, container: o, children: r }) }) });
};
bi.displayName = hr;
var it = "TooltipContent", _i = m.forwardRef(
  (e, t) => {
    const n = tp(it, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = Mt(it, e.__scopeTooltip);
    return /* @__PURE__ */ a(We, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ a(wi, { side: o, ...i, ref: t }) : /* @__PURE__ */ a(np, { side: o, ...i, ref: t }) });
  }
), np = m.forwardRef((e, t) => {
  const n = Mt(it, e.__scopeTooltip), r = mr(it, e.__scopeTooltip), o = m.useRef(null), i = se(t, o), [s, l] = m.useState(null), { trigger: c, onClose: f } = n, u = o.current, { onPointerInTransitChange: d } = r, p = m.useCallback(() => {
    l(null), d(!1);
  }, [d]), h = m.useCallback(
    (b, v) => {
      const g = b.currentTarget, _ = { x: b.clientX, y: b.clientY }, N = ip(_, g.getBoundingClientRect()), y = sp(_, N), C = lp(v.getBoundingClientRect()), M = dp([...y, ...C]);
      l(M), d(!0);
    },
    [d]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (c && u) {
      const b = (g) => h(g, u), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", b), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", b), u.removeEventListener("pointerleave", v);
      };
    }
  }, [c, u, h, p]), m.useEffect(() => {
    if (s) {
      const b = (v) => {
        const g = v.target, _ = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !cp(_, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ a(wi, { ...e, ref: i });
}), [rp, op] = ln(vt, { isInside: !1 }), ap = /* @__PURE__ */ Yi("TooltipContent"), wi = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = Mt(it, n), f = cn(n), { onClose: u } = c;
    return m.useEffect(() => (document.addEventListener(Tn, u), () => document.removeEventListener(Tn, u)), [u]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ a(
      Yn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ w(
          Xo,
          {
            "data-state": c.stateAttribute,
            ...f,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ a(ap, { children: r }),
              /* @__PURE__ */ a(rp, { scope: n, isInside: !0, children: /* @__PURE__ */ a(qf, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
_i.displayName = it;
var yi = "TooltipArrow", Ni = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = cn(n);
    return op(
      yi,
      n
    ).isInside ? null : /* @__PURE__ */ a(qo, { ...o, ...r, ref: t });
  }
);
Ni.displayName = yi;
function ip(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function sp(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function lp(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function cp(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function dp(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), up(t);
}
function up(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var fp = hi, pp = vi, mp = gi, hp = bi, vp = _i, gp = Ni;
function bp(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Em({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: o = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ a(_e, { children: t });
  const { side: l, align: c } = bp(n);
  return /* @__PURE__ */ a(fp, { delayDuration: o, children: /* @__PURE__ */ w(pp, { children: [
    /* @__PURE__ */ a(mp, { asChild: !0, children: t }),
    /* @__PURE__ */ a(hp, { children: /* @__PURE__ */ w(
      vp,
      {
        className: "tooltip-content",
        side: l,
        align: c,
        sideOffset: 8,
        style: { maxWidth: s },
        children: [
          e,
          r && /* @__PURE__ */ a(gp, { className: "tooltip-arrow", width: 12, height: 6 })
        ]
      }
    ) })
  ] }) });
}
const _p = {
  positive: no,
  notice: st,
  negative: ze
};
function Mm({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const o = _p[t], i = t === "negative";
  return /* @__PURE__ */ w(
    "p",
    {
      id: n,
      className: ["validation-message", r].filter(Boolean).join(" "),
      "data-variant": t,
      role: i ? "alert" : "status",
      "aria-live": i ? "assertive" : "polite",
      "aria-atomic": "true",
      children: [
        /* @__PURE__ */ a(o, { size: 16, "aria-hidden": "true", className: "validation-message__icon" }),
        e
      ]
    }
  );
}
const qr = 200, wp = [];
function yp(e, t) {
  const n = new Map(t.map((i) => [i.id, i])), r = /* @__PURE__ */ new Set(), o = [];
  for (const i of e)
    if (!i.groupId)
      o.push({ kind: "tab", tab: i });
    else if (!r.has(i.groupId)) {
      r.add(i.groupId);
      const s = n.get(i.groupId);
      s ? o.push({ kind: "group", group: s, tabs: e.filter((l) => l.groupId === i.groupId) }) : o.push({ kind: "tab", tab: i });
    }
  return o;
}
function Np({
  tabs: e,
  activeTabId: t,
  groups: n = wp,
  onTabActivate: r,
  onTabClose: o,
  onTabLock: i,
  onTabUnlock: s,
  onTabPin: l,
  onTabUnpin: c,
  onAddTabToGroup: f,
  onGroupEdit: u,
  onGroupUngroup: d,
  onGroupClose: p,
  onCloseAllTabs: h,
  onCloseOtherTabs: b,
  className: v
}) {
  const g = ie(null), [_, N] = q(!1), [y, C] = q(!1), [M, P] = q(/* @__PURE__ */ new Set()), R = le(() => {
    const S = g.current;
    S && (N(S.scrollLeft > 0), C(S.scrollLeft + S.clientWidth < S.scrollWidth - 1));
  }, []);
  ce(() => {
    const S = g.current;
    if (!S) return;
    R(), S.addEventListener("scroll", R, { passive: !0 });
    const A = new ResizeObserver(R);
    return A.observe(S), () => {
      S.removeEventListener("scroll", R), A.disconnect();
    };
  }, [R]);
  function I(S) {
    var A;
    (A = g.current) == null || A.scrollBy({ left: S, behavior: "smooth" });
  }
  function T(S) {
    P((A) => {
      const z = new Set(A);
      return z.has(S) ? z.delete(S) : z.add(S), z;
    });
  }
  const k = yp(e, n);
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ w(Ge, { children: [
          /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Xe, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ w(Ye, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ w(_e, { children: [
              /* @__PURE__ */ a(ti, { children: "Open tabs" }),
              /* @__PURE__ */ a($u, { children: e.map((S) => /* @__PURE__ */ a(
                ae,
                {
                  onSelect: () => r(S.id),
                  "data-active-tab": S.id === t ? "" : void 0,
                  children: S.label
                },
                S.id
              )) }),
              /* @__PURE__ */ a(Et, {})
            ] }),
            /* @__PURE__ */ a(
              ae,
              {
                onSelect: () => h == null ? void 0 : h(),
                disabled: !h || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(
          ge,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(ft, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !_,
            onClick: () => I(-qr),
            className: "footer__scroll-btn"
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: g,
            className: "footer__content",
            role: "tablist",
            "aria-label": "Open tabs",
            children: k.map(
              (S) => S.kind === "tab" ? /* @__PURE__ */ a(
                Ci,
                {
                  tab: S.tab,
                  isActive: S.tab.id === t,
                  groups: n,
                  onActivate: () => r(S.tab.id),
                  onClose: o ? () => o(S.tab.id) : void 0,
                  onLock: i ? () => i(S.tab.id) : void 0,
                  onUnlock: s ? () => s(S.tab.id) : void 0,
                  onPin: l ? () => l(S.tab.id) : void 0,
                  onUnpin: c ? () => c(S.tab.id) : void 0,
                  onAddToGroup: f ? () => f(S.tab.id) : void 0,
                  onCloseOthers: b ? () => b(S.tab.id) : void 0,
                  onCloseAll: h
                },
                S.tab.id
              ) : /* @__PURE__ */ a(
                Cp,
                {
                  group: S.group,
                  tabs: S.tabs,
                  activeTabId: t,
                  isExpanded: !M.has(S.group.id),
                  onToggle: () => T(S.group.id),
                  onTabActivate: r,
                  onTabClose: o,
                  onTabLock: i,
                  onTabUnlock: s,
                  onTabPin: l,
                  onTabUnpin: c,
                  onAddTabToGroup: f,
                  onCloseOtherTabs: b,
                  onCloseAllTabs: h,
                  onGroupEdit: u ? () => u(S.group.id) : void 0,
                  onGroupUngroup: d ? () => d(S.group.id) : void 0,
                  onGroupClose: p ? () => p(S.group.id) : void 0,
                  allGroups: n
                },
                S.group.id
              )
            )
          }
        ),
        /* @__PURE__ */ a(
          ge,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(rt, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => I(qr),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function Ci({
  tab: e,
  isActive: t,
  groups: n,
  onActivate: r,
  onClose: o,
  onLock: i,
  onUnlock: s,
  onPin: l,
  onUnpin: c,
  onAddToGroup: f,
  onCloseOthers: u,
  onCloseAll: d
}) {
  const p = e.type ?? "standard";
  return /* @__PURE__ */ w(
    "div",
    {
      className: "footer-tab",
      "data-active": t ? "" : void 0,
      "data-type": p,
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-label": `${e.label}, ${p} tab`,
            className: "footer-tab__trigger",
            onClick: r,
            children: [
              e.icon && /* @__PURE__ */ a("span", { className: "footer-tab__icon", "aria-hidden": "true", children: e.icon }),
              /* @__PURE__ */ a("span", { className: "footer-tab__label", children: e.label }),
              p === "locked" && /* @__PURE__ */ a(Hi, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ a(Ui, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ w("span", { className: "footer-tab__actions", children: [
          p === "standard" && o && /* @__PURE__ */ a(
            ge,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Ne, { size: 12 }),
              "aria-label": `Close ${e.label}`,
              className: "footer-tab__close-btn",
              onClick: o
            }
          ),
          /* @__PURE__ */ w(Ge, { children: [
            /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
              ge,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Ye, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ a(ae, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ a(ae, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ a(ae, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ a(ae, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ a(ae, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ a(Et, {}),
              p === "standard" && o && /* @__PURE__ */ a(ae, { onSelect: o, children: "Close this tab" }),
              u && /* @__PURE__ */ a(ae, { onSelect: u, children: "Close all other tabs" }),
              p === "standard" && d && /* @__PURE__ */ a(ae, { onSelect: d, children: "Close all tabs" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Cp({
  group: e,
  tabs: t,
  activeTabId: n,
  isExpanded: r,
  onToggle: o,
  onTabActivate: i,
  onTabClose: s,
  onTabLock: l,
  onTabUnlock: c,
  onTabPin: f,
  onTabUnpin: u,
  onAddTabToGroup: d,
  onCloseOtherTabs: p,
  onCloseAllTabs: h,
  onGroupEdit: b,
  onGroupUngroup: v,
  onGroupClose: g,
  allGroups: _
}) {
  const N = e.color ?? "gray";
  return /* @__PURE__ */ w(
    "div",
    {
      className: "footer-group",
      "data-color": N,
      "data-expanded": r ? "" : void 0,
      role: "group",
      "aria-label": `${e.label}, contains ${t.length} tab${t.length !== 1 ? "s" : ""}`,
      children: [
        /* @__PURE__ */ w("div", { className: "footer-group__header", children: [
          /* @__PURE__ */ a(
            qu,
            {
              color: N,
              size: "small",
              className: "footer-group__tag",
              role: "button",
              tabIndex: 0,
              onClick: o,
              onKeyDown: (y) => {
                (y.key === "Enter" || y.key === " ") && (y.preventDefault(), o());
              },
              "aria-expanded": r,
              "aria-label": `${e.label} group — ${r ? "collapse" : "expand"}`,
              children: e.label
            }
          ),
          r && (b || v || g) && /* @__PURE__ */ w(Ge, { children: [
            /* @__PURE__ */ a(Ke, { asChild: !0, children: /* @__PURE__ */ a(
              ge,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Ye, { side: "top", align: "start", sideOffset: 8, children: [
              b && /* @__PURE__ */ a(ae, { onSelect: b, children: "Edit group" }),
              v && /* @__PURE__ */ a(ae, { onSelect: v, children: "Ungroup" }),
              (b || v) && /* @__PURE__ */ a(Et, {}),
              p && t[0] && /* @__PURE__ */ a(ae, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ a(ae, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ a("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ a(
          Ci,
          {
            tab: y,
            isActive: y.id === n,
            groups: _,
            onActivate: () => i(y.id),
            onClose: s ? () => s(y.id) : void 0,
            onLock: l ? () => l(y.id) : void 0,
            onUnlock: c ? () => c(y.id) : void 0,
            onPin: f ? () => f(y.id) : void 0,
            onUnpin: u ? () => u(y.id) : void 0,
            onAddToGroup: d ? () => d(y.id) : void 0,
            onCloseOthers: p ? () => p(y.id) : void 0,
            onCloseAll: h
          },
          y.id
        )) })
      ]
    }
  );
}
function xp({
  logo: e,
  productName: t,
  onLogoClick: n,
  tenantLabel: r,
  tenantColor: o,
  globalNavItems: i = [],
  contextualNavItems: s = [],
  showContextualDivider: l,
  userName: c,
  userAvatarSrc: f,
  userMenuItems: u,
  drawers: d = [],
  openDrawerId: p,
  onDrawerChange: h,
  children: b,
  className: v
}) {
  const g = p !== void 0, [_, N] = q(null), y = g ? p : _;
  function C(A) {
    g || N(A), h == null || h(A);
  }
  function M(A) {
    C(y === A ? null : A);
  }
  function P(A) {
    if (!A.drawerId) return A;
    const { drawerId: z, ...V } = A;
    return {
      ...V,
      selected: y === z,
      onClick: () => {
        var Y;
        (Y = A.onClick) == null || Y.call(A), M(z);
      }
    };
  }
  const R = i.map(P), I = s.map(P), T = d.find((A) => A.id === y) ?? null, k = T != null && T.persistent ? T : null, S = d.filter((A) => !A.persistent);
  return /* @__PURE__ */ w("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a(
      $f,
      {
        logo: e,
        productName: t,
        onLogoClick: n,
        tenantLabel: r,
        tenantColor: o,
        globalNavItems: R,
        contextualNavItems: I,
        showContextualDivider: l,
        userName: c,
        userAvatarSrc: f,
        userMenuItems: u
      }
    ),
    k && /* @__PURE__ */ a(
      "div",
      {
        className: "main-navigation__panel",
        "data-size": k.size ?? "medium",
        role: "complementary",
        "aria-label": "Navigation panel",
        children: k.content
      }
    ),
    /* @__PURE__ */ a("div", { className: "main-navigation__content", children: b }),
    S.map((A) => /* @__PURE__ */ a(
      Uu,
      {
        open: y === A.id,
        onClose: () => C(null),
        size: A.size ?? "medium",
        side: A.side ?? "right",
        className: A.side === "left" ? "main-navigation__modal-drawer" : void 0,
        children: A.content
      },
      A.id
    ))
  ] });
}
function Pm({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ w(_e, { children: [
    /* @__PURE__ */ a(
      xp,
      {
        ...e,
        className: ["micro-navigation", e.className, r].filter(Boolean).join(" "),
        children: /* @__PURE__ */ a("main", { className: "micro-navigation__main", children: n })
      }
    ),
    /* @__PURE__ */ a(Np, { ...t })
  ] });
}
export {
  Pp as Accordion,
  Yu as Avatar,
  rm as AvatarGroup,
  om as AvatarWithStatus,
  Gu as Badge,
  pm as BannerAlert,
  wu as Breadcrumbs,
  ge as Button,
  Ru as ButtonsToolbar,
  am as Card,
  cm as CardContent,
  lm as CardDescription,
  fm as CardDivider,
  dm as CardFooter,
  im as CardHeader,
  um as CardSection,
  sm as CardTitle,
  Ip as Checkbox,
  Ap as CheckboxGroup,
  Op as Chip,
  Tp as ChipGroup,
  kp as Combobox,
  pr as Counter,
  uf as Dialog,
  pf as DialogBody,
  mf as DialogFooter,
  ff as DialogHeader,
  Zu as Divider,
  Uu as Drawer,
  Xp as DrawerContent,
  tm as DrawerContextButton,
  Kp as DrawerHeader,
  Jp as DrawerListItem,
  Zp as DrawerMenuItem,
  Qp as DrawerMultiLevelItem,
  em as DrawerNotificationItem,
  qp as DrawerSection,
  Yp as DrawerTools,
  Dp as Dropdown,
  Lp as FieldLabel,
  Bp as FileUploader,
  Up as FileViewer,
  Ge as FlyoutMenu,
  Fp as FlyoutMenuCheckboxItem,
  Ye as FlyoutMenuContent,
  $u as FlyoutMenuGroup,
  ae as FlyoutMenuItem,
  ti as FlyoutMenuLabel,
  $p as FlyoutMenuRadioGroup,
  zp as FlyoutMenuRadioItem,
  Et as FlyoutMenuSeparator,
  Hp as FlyoutMenuShortcut,
  jp as FlyoutMenuSub,
  Vp as FlyoutMenuSubContent,
  Wp as FlyoutMenuSubTrigger,
  Ke as FlyoutMenuTrigger,
  Np as Footer,
  Gp as Hint,
  hm as IconBadge,
  me as IconButton,
  nm as Link,
  yf as List,
  Nf as ListItem,
  xp as MainNavigation,
  Pm as MicroNavigation,
  $f as Navbar,
  vm as PageHeader,
  nf as Panel,
  of as PanelBody,
  af as PanelFooter,
  rf as PanelHeader,
  gm as ProgressBar,
  bm as ProgressCircle,
  _m as Radio,
  wm as RadioGroup,
  ym as Range,
  sf as Section,
  Dt as Spinner,
  Nm as SplitButton,
  Cf as Stepper,
  xf as StepperStep,
  mm as Switch,
  bf as Tab,
  gf as TabList,
  _f as TabPanel,
  vf as Tabs,
  qu as Tag,
  Cm as TextArea,
  xm as TextInput,
  Sm as ToastProvider,
  Em as Tooltip,
  Mm as ValidationMessage,
  Rm as useToast
};
