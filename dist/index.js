import { jsx as a, Fragment as we, jsxs as _ } from "react/jsx-runtime";
import * as h from "react";
import R, { useLayoutEffect as Tn, useState as ee, useId as oe, useRef as le, useImperativeHandle as kn, useEffect as ue, useMemo as tt, useCallback as de, createContext as Dn, useContext as Ln } from "react";
import * as qr from "react-dom";
import Bn, { createPortal as Mi } from "react-dom";
import { Check as ke, ChevronRight as ot, MoreHorizontal as Xe, MoreVertical as Zr, X as Oe, ChevronDown as _t, HelpCircle as Pi, UploadCloud as Ii, Loader2 as Ai, AlertCircle as ct, Upload as Oi, Image as Ti, FileText as _n, Archive as ki, File as Di, ZoomOut as Li, ZoomIn as Bi, RotateCw as Fi, Maximize2 as $i, Download as mr, ScanSearch as zi, ExternalLink as Qr, ChevronLeft as pt, FileX as ji, EyeOff as Jr, FileSpreadsheet as Wi, XCircle as Ve, AlertTriangle as eo, CheckCircle2 as to, Info as no, EllipsisVertical as Vi, CheckCircle as Ht, Search as Hi, Eye as Ui, Lock as Gi, Pin as Ki } from "lucide-react";
function He(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = h.createContext(s), c = n.length;
    n = [...n, s];
    const f = (d) => {
      var w;
      const { scope: p, children: m, ...b } = d, v = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[c]) || l, g = h.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ a(v.Provider, { value: g, children: m });
    };
    f.displayName = i + "Provider";
    function u(d, p) {
      var v;
      const m = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[c]) || l, b = h.useContext(m);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [f, u];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return h.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, Yi(o, ...t)];
}
function Yi(...e) {
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
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function hr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ut(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = hr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : hr(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return h.useCallback(Ut(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ Xi(e), n = h.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = h.Children.toArray(i), c = l.find(Zi);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? h.Children.count(f) > 1 ? h.Children.only(null) : h.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ a(t, { ...s, ref: o, children: h.isValidElement(f) ? h.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ a(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = Ji(o), l = Qi(i, o.props);
      return o.type !== h.Fragment && (l.ref = r ? Ut(r, s) : s), h.cloneElement(o, l);
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ro = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function qi(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a(we, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ro, t;
}
function Zi(e) {
  return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ro;
}
function Qi(e, t) {
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
function Ji(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Fn(e) {
  const t = e + "CollectionProvider", [n, r] = He(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, N = R.useRef(null), y = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: g, itemMap: y, collectionRef: N, children: w });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ Lt(l), f = R.forwardRef(
    (v, g) => {
      const { scope: w, children: N } = v, y = i(l, w), C = ce(g, y.collectionRef);
      return /* @__PURE__ */ a(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Lt(u), m = R.forwardRef(
    (v, g) => {
      const { scope: w, children: N, ...y } = v, C = R.useRef(null), E = ce(g, C), M = i(u, w);
      return R.useEffect(() => (M.itemMap.set(C, { ref: C, ...y }), () => void M.itemMap.delete(C))), /* @__PURE__ */ a(p, { [d]: "", ref: E, children: N });
    }
  );
  m.displayName = u;
  function b(v) {
    const g = i(e + "CollectionConsumer", v);
    return R.useCallback(() => {
      const N = g.collectionRef.current;
      if (!N) return [];
      const y = Array.from(N.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, x) => y.indexOf(M.ref.current) - y.indexOf(x.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: f, ItemSlot: m },
    b,
    r
  ];
}
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var De = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {
}, es = h[" useInsertionEffect ".trim().toString()] || De;
function qe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = ts({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, c = l ? e : o;
  {
    const u = h.useRef(e !== void 0);
    h.useEffect(() => {
      const d = u.current;
      d !== l && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, r]);
  }
  const f = h.useCallback(
    (u) => {
      var d;
      if (l) {
        const p = ns(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function ts({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = h.useState(e), o = h.useRef(n), i = h.useRef(t);
  return es(() => {
    i.current = t;
  }, [t]), h.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function ns(e) {
  return typeof e == "function";
}
var rs = [
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
], ie = rs.reduce((e, t) => {
  const n = /* @__PURE__ */ Lt(`Primitive.${t}`), r = h.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function oo(e, t) {
  e && qr.flushSync(() => e.dispatchEvent(t));
}
function os(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ue = (e) => {
  const { present: t, children: n } = e, r = as(t), o = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), i = ce(r.ref, is(o));
  return typeof n == "function" || r.isPresent ? h.cloneElement(o, { ref: i }) : null;
};
Ue.displayName = "Presence";
function as(e) {
  const [t, n] = h.useState(), r = h.useRef(null), o = h.useRef(e), i = h.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = os(s, {
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
  return h.useEffect(() => {
    const f = Rt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), De(() => {
    const f = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, m = Rt(f);
      e ? c("MOUNT") : m === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), De(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (m) => {
        const v = Rt(r.current).includes(CSS.escape(m.animationName));
        if (m.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (m) => {
        m.target === t && (i.current = Rt(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(f), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: h.useCallback((f) => {
      r.current = f ? getComputedStyle(f) : null, n(f);
    }, [])
  };
}
function Rt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function is(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ss = h[" useId ".trim().toString()] || (() => {
}), ls = 0;
function ze(e) {
  const [t, n] = h.useState(ss());
  return De(() => {
    n((r) => r ?? String(ls++));
  }, [e]), t ? `radix-${t}` : "";
}
var Gt = "Collapsible", [cs, ao] = He(Gt), [ds, $n] = cs(Gt), io = h.forwardRef(
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
      caller: Gt
    });
    return /* @__PURE__ */ a(
      ds,
      {
        scope: n,
        disabled: i,
        contentId: ze(),
        open: c,
        onOpenToggle: h.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ a(
          ie.div,
          {
            "data-state": jn(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
io.displayName = Gt;
var so = "CollapsibleTrigger", lo = h.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = $n(so, n);
    return /* @__PURE__ */ a(
      ie.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": jn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: K(e.onClick, o.onOpenToggle)
      }
    );
  }
);
lo.displayName = so;
var zn = "CollapsibleContent", co = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = $n(zn, e.__scopeCollapsible);
    return /* @__PURE__ */ a(Ue, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(us, { ...r, ref: t, present: i }) });
  }
);
co.displayName = zn;
var us = h.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = $n(zn, n), [l, c] = h.useState(r), f = h.useRef(null), u = ce(t, f), d = h.useRef(0), p = d.current, m = h.useRef(0), b = m.current, v = s.open || l, g = h.useRef(v), w = h.useRef(void 0);
  return h.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), De(() => {
    const N = f.current;
    if (N) {
      w.current = w.current || {
        transitionDuration: N.style.transitionDuration,
        animationName: N.style.animationName
      }, N.style.transitionDuration = "0s", N.style.animationName = "none";
      const y = N.getBoundingClientRect();
      d.current = y.height, m.current = y.width, g.current || (N.style.transitionDuration = w.current.transitionDuration, N.style.animationName = w.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ a(
    ie.div,
    {
      "data-state": jn(s.open),
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
function jn(e) {
  return e ? "open" : "closed";
}
var fs = io, ps = lo, ms = co, hs = h.createContext(void 0);
function Wn(e) {
  const t = h.useContext(hs);
  return e || t || "ltr";
}
var xe = "Accordion", vs = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Vn, gs, bs] = Fn(xe), [Kt] = He(xe, [
  bs,
  ao
]), Hn = ao(), uo = R.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ a(Vn.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ a(Ns, { ...i, ref: t }) : /* @__PURE__ */ a(ys, { ...o, ref: t }) });
  }
);
uo.displayName = xe;
var [fo, _s] = Kt(xe), [po, ws] = Kt(
  xe,
  { collapsible: !1 }
), ys = R.forwardRef(
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
      caller: xe
    });
    return /* @__PURE__ */ a(
      fo,
      {
        scope: e.__scopeAccordion,
        value: R.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: R.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ a(po, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ a(mo, { ...s, ref: t }) })
      }
    );
  }
), Ns = R.forwardRef((e, t) => {
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
    caller: xe
  }), c = R.useCallback(
    (u) => l((d = []) => [...d, u]),
    [l]
  ), f = R.useCallback(
    (u) => l((d = []) => d.filter((p) => p !== u)),
    [l]
  );
  return /* @__PURE__ */ a(
    fo,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ a(po, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ a(mo, { ...i, ref: t }) })
    }
  );
}), [Cs, Yt] = Kt(xe), mo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, l = R.useRef(null), c = ce(l, t), f = gs(n), d = Wn(o) === "ltr", p = K(e.onKeyDown, (m) => {
      var I;
      if (!vs.includes(m.key)) return;
      const b = m.target, v = f().filter((A) => {
        var k;
        return !((k = A.ref.current) != null && k.disabled);
      }), g = v.findIndex((A) => A.ref.current === b), w = v.length;
      if (g === -1) return;
      m.preventDefault();
      let N = g;
      const y = 0, C = w - 1, E = () => {
        N = g + 1, N > C && (N = y);
      }, M = () => {
        N = g - 1, N < y && (N = C);
      };
      switch (m.key) {
        case "Home":
          N = y;
          break;
        case "End":
          N = C;
          break;
        case "ArrowRight":
          i === "horizontal" && (d ? E() : M());
          break;
        case "ArrowDown":
          i === "vertical" && E();
          break;
        case "ArrowLeft":
          i === "horizontal" && (d ? M() : E());
          break;
        case "ArrowUp":
          i === "vertical" && M();
          break;
      }
      const x = N % w;
      (I = v[x].ref.current) == null || I.focus();
    });
    return /* @__PURE__ */ a(
      Cs,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ a(Vn.Slot, { scope: n, children: /* @__PURE__ */ a(
          ie.div,
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
), Bt = "AccordionItem", [xs, Un] = Kt(Bt), ho = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, i = Yt(Bt, n), s = _s(Bt, n), l = Hn(n), c = ze(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ a(
      xs,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ a(
          fs,
          {
            "data-orientation": i.orientation,
            "data-state": yo(f),
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
ho.displayName = Bt;
var vo = "AccordionHeader", go = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Yt(xe, n), i = Un(vo, n);
    return /* @__PURE__ */ a(
      ie.h3,
      {
        "data-orientation": o.orientation,
        "data-state": yo(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
go.displayName = vo;
var wn = "AccordionTrigger", bo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Yt(xe, n), i = Un(wn, n), s = ws(wn, n), l = Hn(n);
    return /* @__PURE__ */ a(Vn.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      ps,
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
bo.displayName = wn;
var _o = "AccordionContent", wo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Yt(xe, n), i = Un(_o, n), s = Hn(n);
    return /* @__PURE__ */ a(
      ms,
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
wo.displayName = _o;
function yo(e) {
  return e ? "open" : "closed";
}
var Ss = uo, Rs = ho, Es = go, Ms = bo, Ps = wo;
function Is() {
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
    Ss,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: o } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ _(
        Rs,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ a(Es, { className: "accordion__header", children: /* @__PURE__ */ _(Ms, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ a("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ a("span", { className: "accordion__title", children: l.header }),
              l.afterElement && /* @__PURE__ */ a("span", { className: "accordion__after", children: l.afterElement }),
              /* @__PURE__ */ a(Is, {})
            ] }) }),
            /* @__PURE__ */ a(Ps, { className: "accordion__content", children: /* @__PURE__ */ a("div", { className: "accordion__content-inner", children: l.content }) })
          ]
        },
        l.value
      ))
    }
  );
}
function Me(e) {
  const t = h.useRef(e);
  return h.useEffect(() => {
    t.current = e;
  }), h.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function As(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e);
  h.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Os = "DismissableLayer", yn = "dismissableLayer.update", Ts = "dismissableLayer.pointerDownOutside", ks = "dismissableLayer.focusOutside", vr, No = h.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Gn = h.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = h.useContext(No), [u, d] = h.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = h.useState({}), b = ce(t, (x) => d(x)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= w, E = Bs((x) => {
      const I = x.target, A = [...f.branches].some((k) => k.contains(I));
      !C || A || (o == null || o(x), s == null || s(x), x.defaultPrevented || l == null || l());
    }, p), M = Fs((x) => {
      const I = x.target;
      [...f.branches].some((k) => k.contains(I)) || (i == null || i(x), s == null || s(x), x.defaultPrevented || l == null || l());
    }, p);
    return As((x) => {
      N === f.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && l && (x.preventDefault(), l()));
    }, p), h.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (vr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), gr(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = vr);
        };
    }, [u, p, n, f]), h.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), gr());
    }, [u, f]), h.useEffect(() => {
      const x = () => m({});
      return document.addEventListener(yn, x), () => document.removeEventListener(yn, x);
    }, []), /* @__PURE__ */ a(
      ie.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: K(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: K(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Gn.displayName = Os;
var Ds = "DismissableLayerBranch", Ls = h.forwardRef((e, t) => {
  const n = h.useContext(No), r = h.useRef(null), o = ce(t, r);
  return h.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(ie.div, { ...e, ref: o });
});
Ls.displayName = Ds;
function Bs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = h.useRef(!1), o = h.useRef(() => {
  });
  return h.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          Co(
            Ts,
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
function Fs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = h.useRef(!1);
  return h.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Co(ks, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function gr() {
  const e = new CustomEvent(yn);
  document.dispatchEvent(e);
}
function Co(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? oo(o, i) : o.dispatchEvent(i);
}
var ln = 0;
function $s() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? br()), document.body.insertAdjacentElement("beforeend", e[1] ?? br()), ln++, () => {
      ln === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ln--;
    };
  }, []);
}
function br() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var cn = "focusScope.autoFocusOnMount", dn = "focusScope.autoFocusOnUnmount", _r = { bubbles: !1, cancelable: !0 }, zs = "FocusScope", xo = h.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = h.useState(null), f = Me(o), u = Me(i), d = h.useRef(null), p = ce(t, (v) => c(v)), m = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !l) return;
        const C = y.target;
        l.contains(C) ? d.current = C : $e(d.current, { select: !0 });
      }, g = function(y) {
        if (m.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || $e(d.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && $e(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(w);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, m.paused]), h.useEffect(() => {
    if (l) {
      yr.add(m);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const w = new CustomEvent(cn, _r);
        l.addEventListener(cn, f), l.dispatchEvent(w), w.defaultPrevented || (js(Gs(So(l)), { select: !0 }), document.activeElement === v && $e(l));
      }
      return () => {
        l.removeEventListener(cn, f), setTimeout(() => {
          const w = new CustomEvent(dn, _r);
          l.addEventListener(dn, u), l.dispatchEvent(w), w.defaultPrevented || $e(v ?? document.body, { select: !0 }), l.removeEventListener(dn, u), yr.remove(m);
        }, 0);
      };
    }
  }, [l, f, u, m]);
  const b = h.useCallback(
    (v) => {
      if (!n && !r || m.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const N = v.currentTarget, [y, C] = Ws(N);
        y && C ? !v.shiftKey && w === C ? (v.preventDefault(), n && $e(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && $e(C, { select: !0 })) : w === N && v.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ a(ie.div, { tabIndex: -1, ...s, ref: p, onKeyDown: b });
});
xo.displayName = zs;
function js(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($e(r, { select: t }), document.activeElement !== n) return;
}
function Ws(e) {
  const t = So(e), n = wr(t, e), r = wr(t.reverse(), e);
  return [n, r];
}
function So(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wr(e, t) {
  for (const n of e)
    if (!Vs(n, { upTo: t })) return n;
}
function Vs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Hs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $e(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Hs(e) && t && e.select();
  }
}
var yr = Us();
function Us() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Nr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Nr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Nr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gs(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ks = ["top", "right", "bottom", "left"], je = Math.min, be = Math.max, Ft = Math.round, Et = Math.floor, Ee = (e) => ({
  x: e,
  y: e
}), Ys = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nn(e, t, n) {
  return be(e, je(t, n));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e) {
  return e.split("-")[0];
}
function dt(e) {
  return e.split("-")[1];
}
function Kn(e) {
  return e === "x" ? "y" : "x";
}
function Yn(e) {
  return e === "y" ? "height" : "width";
}
function Re(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Xn(e) {
  return Kn(Re(e));
}
function Xs(e, t, n) {
  n === void 0 && (n = !1);
  const r = dt(e), o = Xn(e), i = Yn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = $t(s)), [s, $t(s)];
}
function qs(e) {
  const t = $t(e);
  return [Cn(e), t, Cn(t)];
}
function Cn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Cr = ["left", "right"], xr = ["right", "left"], Zs = ["top", "bottom"], Qs = ["bottom", "top"];
function Js(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xr : Cr : t ? Cr : xr;
    case "left":
    case "right":
      return t ? Zs : Qs;
    default:
      return [];
  }
}
function el(e, t, n, r) {
  const o = dt(e);
  let i = Js(Be(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Cn)))), i;
}
function $t(e) {
  const t = Be(e);
  return Ys[t] + e.slice(t.length);
}
function tl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ro(e) {
  return typeof e != "number" ? tl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zt(e) {
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
function Sr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Re(t), s = Xn(t), l = Yn(s), c = Be(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (dt(t)) {
    case "start":
      m[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && f ? -1 : 1);
      break;
  }
  return m;
}
async function nl(e, t) {
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
    padding: m = 0
  } = Le(t, e), b = Ro(m), g = l[p ? d === "floating" ? "reference" : "floating" : d], w = zt(await i.getClippingRect({
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
  }, E = zt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: N,
    offsetParent: y,
    strategy: c
  }) : N);
  return {
    top: (w.top - E.top + b.top) / C.y,
    bottom: (E.bottom - w.bottom + b.bottom) / C.y,
    left: (w.left - E.left + b.left) / C.x,
    right: (E.right - w.right + b.right) / C.x
  };
}
const rl = 50, ol = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: nl
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Sr(f, r, c), p = r, m = 0;
  const b = {};
  for (let v = 0; v < i.length; v++) {
    const g = i[v];
    if (!g)
      continue;
    const {
      name: w,
      fn: N
    } = g, {
      x: y,
      y: C,
      data: E,
      reset: M
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
    u = y ?? u, d = C ?? d, b[w] = {
      ...b[w],
      ...E
    }, M && m < rl && (m++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (f = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : M.rects), {
      x: u,
      y: d
    } = Sr(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: b
  };
}, al = (e) => ({
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
    } = Le(e, t) || {};
    if (f == null)
      return {};
    const d = Ro(u), p = {
      x: n,
      y: r
    }, m = Xn(o), b = Yn(m), v = await s.getDimensions(f), g = m === "y", w = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[m] - p[m] - i.floating[b], E = p[m] - i.reference[m], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let x = M ? M[y] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(M))) && (x = l.floating[y] || i.floating[b]);
    const I = C / 2 - E / 2, A = x / 2 - v[b] / 2 - 1, k = je(d[w], A), S = je(d[N], A), P = k, F = x - v[b] - S, z = x / 2 - v[b] / 2 + I, Z = Nn(P, z, F), $ = !c.arrow && dt(o) != null && z !== Z && i.reference[b] / 2 - (z < P ? k : S) - v[b] / 2 < 0, j = $ ? z < P ? z - P : z - F : 0;
    return {
      [m]: p[m] + j,
      data: {
        [m]: Z,
        centerOffset: z - Z - j,
        ...$ && {
          alignmentOffset: j
        }
      },
      reset: $
    };
  }
}), il = function(e) {
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...g
      } = Le(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Be(o), N = Re(l), y = Be(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), E = p || (y || !v ? [$t(l)] : qs(l)), M = b !== "none";
      !p && M && E.push(...el(l, v, b, C));
      const x = [l, ...E], I = await c.detectOverflow(t, g), A = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && A.push(I[w]), d) {
        const z = Xs(o, s, C);
        A.push(I[z[0]], I[z[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: A
      }], !A.every((z) => z <= 0)) {
        var S, P;
        const z = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, Z = x[z];
        if (Z && (!(d === "alignment" ? N !== Re(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((D) => Re(D.placement) === N ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: k
            },
            reset: {
              placement: Z
            }
          };
        let $ = (P = k.filter((j) => j.overflows[0] <= 0).sort((j, D) => j.overflows[1] - D.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!$)
          switch (m) {
            case "bestFit": {
              var F;
              const j = (F = k.filter((D) => {
                if (M) {
                  const O = Re(D.placement);
                  return O === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((O) => O > 0).reduce((O, Y) => O + Y, 0)]).sort((D, O) => D[1] - O[1])[0]) == null ? void 0 : F[0];
              j && ($ = j);
              break;
            }
            case "initialPlacement":
              $ = l;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function Rr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Er(e) {
  return Ks.some((t) => e[t] >= 0);
}
const sl = function(e) {
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
      } = Le(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Rr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Er(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Rr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Er(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Eo = /* @__PURE__ */ new Set(["left", "top"]);
async function ll(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Be(n), l = dt(n), c = Re(n) === "y", f = Eo.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = Le(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
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
  return l && typeof b == "number" && (m = l === "end" ? b * -1 : b), c ? {
    x: m * u,
    y: p * f
  } : {
    x: p * f,
    y: m * u
  };
}
const cl = function(e) {
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
      } = t, c = await ll(t, e);
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
}, dl = function(e) {
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
          fn: (w) => {
            let {
              x: N,
              y
            } = w;
            return {
              x: N,
              y
            };
          }
        },
        ...f
      } = Le(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Re(Be(o)), m = Kn(p);
      let b = u[m], v = u[p];
      if (s) {
        const w = m === "y" ? "top" : "left", N = m === "y" ? "bottom" : "right", y = b + d[w], C = b - d[N];
        b = Nn(y, b, C);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[w], C = v - d[N];
        v = Nn(y, v, C);
      }
      const g = c.fn({
        ...t,
        [m]: b,
        [p]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [m]: s,
            [p]: l
          }
        }
      };
    }
  };
}, ul = function(e) {
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
      } = Le(e, t), u = {
        x: n,
        y: r
      }, d = Re(o), p = Kn(d);
      let m = u[p], b = u[d];
      const v = Le(l, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[y] + g.mainAxis, E = i.reference[p] + i.reference[y] - g.mainAxis;
        m < C ? m = C : m > E && (m = E);
      }
      if (f) {
        var w, N;
        const y = p === "y" ? "width" : "height", C = Eo.has(Be(o)), E = i.reference[d] - i.floating[y] + (C && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : g.crossAxis), M = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        b < E ? b = E : b > M && (b = M);
      }
      return {
        [p]: m,
        [d]: b
      };
    }
  };
}, fl = function(e) {
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
      } = Le(e, t), u = await s.detectOverflow(t, f), d = Be(o), p = dt(o), m = Re(o) === "y", {
        width: b,
        height: v
      } = i.floating;
      let g, w;
      d === "top" || d === "bottom" ? (g = d, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = b - u.left - u.right, C = je(v - u[g], N), E = je(b - u[w], y), M = !t.middlewareData.shift;
      let x = C, I = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (x = N), M && !p) {
        const k = be(u.left, 0), S = be(u.right, 0), P = be(u.top, 0), F = be(u.bottom, 0);
        m ? I = b - 2 * (k !== 0 || S !== 0 ? k + S : be(u.left, u.right)) : x = v - 2 * (P !== 0 || F !== 0 ? P + F : be(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: I,
        availableHeight: x
      });
      const A = await s.getDimensions(l.floating);
      return b !== A.width || v !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Xt() {
  return typeof window < "u";
}
function ut(e) {
  return Mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Te(e) {
  var t;
  return (t = (Mo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mo(e) {
  return Xt() ? e instanceof Node || e instanceof _e(e).Node : !1;
}
function Ne(e) {
  return Xt() ? e instanceof Element || e instanceof _e(e).Element : !1;
}
function Fe(e) {
  return Xt() ? e instanceof HTMLElement || e instanceof _e(e).HTMLElement : !1;
}
function Mr(e) {
  return !Xt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _e(e).ShadowRoot;
}
function wt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function pl(e) {
  return /^(table|td|th)$/.test(ut(e));
}
function qt(e) {
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
const ml = /transform|translate|scale|rotate|perspective|filter/, hl = /paint|layout|strict|content/, Ke = (e) => !!e && e !== "none";
let un;
function qn(e) {
  const t = Ne(e) ? Ce(e) : e;
  return Ke(t.transform) || Ke(t.translate) || Ke(t.scale) || Ke(t.rotate) || Ke(t.perspective) || !Zn() && (Ke(t.backdropFilter) || Ke(t.filter)) || ml.test(t.willChange || "") || hl.test(t.contain || "");
}
function vl(e) {
  let t = We(e);
  for (; Fe(t) && !at(t); ) {
    if (qn(t))
      return t;
    if (qt(t))
      return null;
    t = We(t);
  }
  return null;
}
function Zn() {
  return un == null && (un = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), un;
}
function at(e) {
  return /^(html|body|#document)$/.test(ut(e));
}
function Ce(e) {
  return _e(e).getComputedStyle(e);
}
function Zt(e) {
  return Ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function We(e) {
  if (ut(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Mr(e) && e.host || // Fallback.
    Te(e)
  );
  return Mr(t) ? t.host : t;
}
function Po(e) {
  const t = We(e);
  return at(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fe(t) && wt(t) ? t : Po(t);
}
function mt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Po(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = _e(o);
  if (i) {
    const l = xn(s);
    return t.concat(s, s.visualViewport || [], wt(o) ? o : [], l && n ? mt(l) : []);
  } else
    return t.concat(o, mt(o, [], n));
}
function xn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Io(e) {
  const t = Ce(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Fe(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Ft(n) !== i || Ft(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function Qn(e) {
  return Ne(e) ? e : e.contextElement;
}
function nt(e) {
  const t = Qn(e);
  if (!Fe(t))
    return Ee(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Io(t);
  let s = (i ? Ft(n.width) : n.width) / r, l = (i ? Ft(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const gl = /* @__PURE__ */ Ee(0);
function Ao(e) {
  const t = _e(e);
  return !Zn() || !t.visualViewport ? gl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _e(e) ? !1 : t;
}
function Ye(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Qn(e);
  let s = Ee(1);
  t && (r ? Ne(r) && (s = nt(r)) : s = nt(e));
  const l = bl(i, n, r) ? Ao(i) : Ee(0);
  let c = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = _e(i), m = r && Ne(r) ? _e(r) : r;
    let b = p, v = xn(b);
    for (; v && r && m !== b; ) {
      const g = nt(v), w = v.getBoundingClientRect(), N = Ce(v), y = w.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = w.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, b = _e(v), v = xn(b);
    }
  }
  return zt({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function Qt(e, t) {
  const n = Zt(e).scrollLeft;
  return t ? t.left + n : Ye(Te(e)).left + n;
}
function Oo(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Qt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function _l(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Te(r), l = t ? qt(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Ee(1);
  const u = Ee(0), d = Fe(r);
  if ((d || !d && !i) && ((ut(r) !== "body" || wt(s)) && (c = Zt(r)), d)) {
    const m = Ye(r);
    f = nt(r), u.x = m.x + r.clientLeft, u.y = m.y + r.clientTop;
  }
  const p = s && !d && !i ? Oo(s, c) : Ee(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
  };
}
function wl(e) {
  return Array.from(e.getClientRects());
}
function yl(e) {
  const t = Te(e), n = Zt(e), r = e.ownerDocument.body, o = be(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = be(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Qt(e);
  const l = -n.scrollTop;
  return Ce(r).direction === "rtl" && (s += be(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const Pr = 25;
function Nl(e, t) {
  const n = _e(e), r = Te(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Zn();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  const f = Qt(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), m = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - m);
    b <= Pr && (i -= b);
  } else f <= Pr && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Cl(e, t) {
  const n = Ye(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Fe(e) ? nt(e) : Ee(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = o * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Ir(e, t, n) {
  let r;
  if (t === "viewport")
    r = Nl(e, n);
  else if (t === "document")
    r = yl(Te(e));
  else if (Ne(t))
    r = Cl(t, n);
  else {
    const o = Ao(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return zt(r);
}
function To(e, t) {
  const n = We(e);
  return n === t || !Ne(n) || at(n) ? !1 : Ce(n).position === "fixed" || To(n, t);
}
function xl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = mt(e, [], !1).filter((l) => Ne(l) && ut(l) !== "body"), o = null;
  const i = Ce(e).position === "fixed";
  let s = i ? We(e) : e;
  for (; Ne(s) && !at(s); ) {
    const l = Ce(s), c = qn(s);
    !c && l.position === "fixed" && (o = null), (i ? !c && !o : !c && l.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || wt(s) && !c && To(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = We(s);
  }
  return t.set(e, r), r;
}
function Sl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? qt(t) ? [] : xl(t, this._c) : [].concat(n), r], l = Ir(t, s[0], o);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const m = Ir(t, s[p], o);
    c = be(m.top, c), f = je(m.right, f), u = je(m.bottom, u), d = be(m.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function Rl(e) {
  const {
    width: t,
    height: n
  } = Io(e);
  return {
    width: t,
    height: n
  };
}
function El(e, t, n) {
  const r = Fe(t), o = Te(t), i = n === "fixed", s = Ye(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ee(0);
  function f() {
    c.x = Qt(o);
  }
  if (r || !r && !i)
    if ((ut(t) !== "body" || wt(o)) && (l = Zt(t)), r) {
      const m = Ye(t, !0, i, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && f();
  i && !r && o && f();
  const u = o && !r && !i ? Oo(o, l) : Ee(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function fn(e) {
  return Ce(e).position === "static";
}
function Ar(e, t) {
  if (!Fe(e) || Ce(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Te(e) === n && (n = n.ownerDocument.body), n;
}
function ko(e, t) {
  const n = _e(e);
  if (qt(e))
    return n;
  if (!Fe(e)) {
    let o = We(e);
    for (; o && !at(o); ) {
      if (Ne(o) && !fn(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = Ar(e, t);
  for (; r && pl(r) && fn(r); )
    r = Ar(r, t);
  return r && at(r) && fn(r) && !qn(r) ? n : r || vl(e) || n;
}
const Ml = async function(e) {
  const t = this.getOffsetParent || ko, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: El(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Pl(e) {
  return Ce(e).direction === "rtl";
}
const Il = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _l,
  getDocumentElement: Te,
  getClippingRect: Sl,
  getOffsetParent: ko,
  getElementRects: Ml,
  getClientRects: wl,
  getDimensions: Rl,
  getScale: nt,
  isElement: Ne,
  isRTL: Pl
};
function Do(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Al(e, t) {
  let n = null, r;
  const o = Te(e);
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
      height: m
    } = f;
    if (l || t(), !p || !m)
      return;
    const b = Et(d), v = Et(o.clientWidth - (u + p)), g = Et(o.clientHeight - (d + m)), w = Et(u), y = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: be(0, je(1, c)) || 1
    };
    let C = !0;
    function E(M) {
      const x = M[0].intersectionRatio;
      if (x !== c) {
        if (!C)
          return s();
        x ? s(!1, x) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !Do(f, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ol(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = Qn(e), u = o || i ? [...f ? mt(f) : [], ...t ? mt(t) : []] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = f && l ? Al(f, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((w) => {
    let [N] = w;
    N && N.target === f && m && t && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), f && !c && m.observe(f), t && m.observe(t));
  let b, v = c ? Ye(e) : null;
  c && g();
  function g() {
    const w = Ye(e);
    v && !Do(v, w) && n(), v = w, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (w = m) == null || w.disconnect(), m = null, c && cancelAnimationFrame(b);
  };
}
const Tl = cl, kl = dl, Dl = il, Ll = fl, Bl = sl, Or = al, Fl = ul, $l = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Il,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ol(e, t, {
    ...o,
    platform: i
  });
};
var zl = typeof document < "u", jl = function() {
}, Tt = zl ? Tn : jl;
function jt(e, t) {
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
        if (!jt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !jt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Lo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tr(e, t) {
  const n = Lo(e);
  return Math.round(t * n) / n;
}
function pn(e) {
  const t = h.useRef(e);
  return Tt(() => {
    t.current = e;
  }), t;
}
function Wl(e) {
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
  } = e, [u, d] = h.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = h.useState(r);
  jt(p, r) || m(r);
  const [b, v] = h.useState(null), [g, w] = h.useState(null), N = h.useCallback((D) => {
    D !== M.current && (M.current = D, v(D));
  }, []), y = h.useCallback((D) => {
    D !== x.current && (x.current = D, w(D));
  }, []), C = i || b, E = s || g, M = h.useRef(null), x = h.useRef(null), I = h.useRef(u), A = c != null, k = pn(c), S = pn(o), P = pn(f), F = h.useCallback(() => {
    if (!M.current || !x.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    S.current && (D.platform = S.current), $l(M.current, x.current, D).then((O) => {
      const Y = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      z.current && !jt(I.current, Y) && (I.current = Y, qr.flushSync(() => {
        d(Y);
      }));
    });
  }, [p, t, n, S, P]);
  Tt(() => {
    f === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [f]);
  const z = h.useRef(!1);
  Tt(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Tt(() => {
    if (C && (M.current = C), E && (x.current = E), C && E) {
      if (k.current)
        return k.current(C, E, F);
      F();
    }
  }, [C, E, F, k, A]);
  const Z = h.useMemo(() => ({
    reference: M,
    floating: x,
    setReference: N,
    setFloating: y
  }), [N, y]), $ = h.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), j = h.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return D;
    const O = Tr($.floating, u.x), Y = Tr($.floating, u.y);
    return l ? {
      ...D,
      transform: "translate(" + O + "px, " + Y + "px)",
      ...Lo($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: Y
    };
  }, [n, l, $.floating, u.x, u.y]);
  return h.useMemo(() => ({
    ...u,
    update: F,
    refs: Z,
    elements: $,
    floatingStyles: j
  }), [u, F, Z, $, j]);
}
const Vl = (e) => {
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
      return r && t(r) ? r.current != null ? Or({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Or({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Hl = (e, t) => {
  const n = Tl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ul = (e, t) => {
  const n = kl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gl = (e, t) => ({
  fn: Fl(e).fn,
  options: [e, t]
}), Kl = (e, t) => {
  const n = Dl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yl = (e, t) => {
  const n = Ll(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xl = (e, t) => {
  const n = Bl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ql = (e, t) => {
  const n = Vl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Zl = "Arrow", Bo = h.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ a(
    ie.svg,
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
Bo.displayName = Zl;
var Ql = Bo;
function Jl(e) {
  const [t, n] = h.useState(void 0);
  return De(() => {
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
var Jn = "Popper", [Fo, Jt] = He(Jn), [ec, $o] = Fo(Jn), zo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = h.useState(null);
  return /* @__PURE__ */ a(ec, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
zo.displayName = Jn;
var jo = "PopperAnchor", Wo = h.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = $o(jo, n), s = h.useRef(null), l = ce(t, s), c = h.useRef(null);
    return h.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ a(ie.div, { ...o, ref: l });
  }
);
Wo.displayName = jo;
var er = "PopperContent", [tc, nc] = Fo(er), Vo = h.forwardRef(
  (e, t) => {
    var U, re, te, se, me, B;
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
      updatePositionStrategy: m = "optimized",
      onPlaced: b,
      ...v
    } = e, g = $o(er, n), [w, N] = h.useState(null), y = ce(t, (G) => N(G)), [C, E] = h.useState(null), M = Jl(C), x = (M == null ? void 0 : M.width) ?? 0, I = (M == null ? void 0 : M.height) ?? 0, A = r + (i !== "center" ? "-" + i : ""), k = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, S = Array.isArray(f) ? f : [f], P = S.length > 0, F = {
      padding: k,
      boundary: S.filter(oc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: z, floatingStyles: Z, placement: $, isPositioned: j, middlewareData: D } = Wl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...G) => Ol(...G, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Hl({ mainAxis: o + I, alignmentAxis: s }),
        c && Ul({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Gl() : void 0,
          ...F
        }),
        c && Kl({ ...F }),
        Yl({
          ...F,
          apply: ({ elements: G, rects: q, availableWidth: L, availableHeight: V }) => {
            const { width: J, height: he } = q.reference, ve = G.floating.style;
            ve.setProperty("--radix-popper-available-width", `${L}px`), ve.setProperty("--radix-popper-available-height", `${V}px`), ve.setProperty("--radix-popper-anchor-width", `${J}px`), ve.setProperty("--radix-popper-anchor-height", `${he}px`);
          }
        }),
        C && ql({ element: C, padding: l }),
        ac({ arrowWidth: x, arrowHeight: I }),
        p && Xl({ strategy: "referenceHidden", ...F })
      ]
    }), [O, Y] = Go($), X = Me(b);
    De(() => {
      j && (X == null || X());
    }, [j, X]);
    const ne = (U = D.arrow) == null ? void 0 : U.x, W = (re = D.arrow) == null ? void 0 : re.y, Q = ((te = D.arrow) == null ? void 0 : te.centerOffset) !== 0, [T, H] = h.useState();
    return De(() => {
      w && H(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ a(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: j ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T,
          "--radix-popper-transform-origin": [
            (se = D.transformOrigin) == null ? void 0 : se.x,
            (me = D.transformOrigin) == null ? void 0 : me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((B = D.hide) == null ? void 0 : B.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a(
          tc,
          {
            scope: n,
            placedSide: O,
            onArrowChange: E,
            arrowX: ne,
            arrowY: W,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ a(
              ie.div,
              {
                "data-side": O,
                "data-align": Y,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Vo.displayName = er;
var Ho = "PopperArrow", rc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Uo = h.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = nc(Ho, r), s = rc[i.placedSide];
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
          Ql,
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
Uo.displayName = Ho;
function oc(e) {
  return e !== null;
}
var ac = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, N;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = Go(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + l / 2, m = (((N = o.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let b = "", v = "";
    return f === "bottom" ? (b = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (b = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, v = s ? d : `${m}px`) : f === "left" && (b = `${r.floating.width + c}px`, v = s ? d : `${m}px`), { data: { x: b, y: v } };
  }
});
function Go(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tr = zo, Ko = Wo, Yo = Vo, Xo = Uo, ic = "Portal", nr = h.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = h.useState(!1);
  De(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? Bn.createPortal(/* @__PURE__ */ a(ie.div, { ...r, ref: t }), s) : null;
});
nr.displayName = ic;
var mn = "rovingFocusGroup.onEntryFocus", sc = { bubbles: !1, cancelable: !0 }, yt = "RovingFocusGroup", [Sn, qo, lc] = Fn(yt), [cc, Zo] = He(
  yt,
  [lc]
), [dc, uc] = cc(yt), Qo = h.forwardRef(
  (e, t) => /* @__PURE__ */ a(Sn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(Sn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(fc, { ...e, ref: t }) }) })
);
Qo.displayName = yt;
var fc = h.forwardRef((e, t) => {
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
  } = e, p = h.useRef(null), m = ce(t, p), b = Wn(i), [v, g] = qe({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: yt
  }), [w, N] = h.useState(!1), y = Me(f), C = qo(n), E = h.useRef(!1), [M, x] = h.useState(0);
  return h.useEffect(() => {
    const I = p.current;
    if (I)
      return I.addEventListener(mn, y), () => I.removeEventListener(mn, y);
  }, [y]), /* @__PURE__ */ a(
    dc,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: v,
      onItemFocus: h.useCallback(
        (I) => g(I),
        [g]
      ),
      onItemShiftTab: h.useCallback(() => N(!0), []),
      onFocusableItemAdd: h.useCallback(
        () => x((I) => I + 1),
        []
      ),
      onFocusableItemRemove: h.useCallback(
        () => x((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        ie.div,
        {
          tabIndex: w || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: K(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: K(e.onFocus, (I) => {
            const A = !E.current;
            if (I.target === I.currentTarget && A && !w) {
              const k = new CustomEvent(mn, sc);
              if (I.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const S = C().filter(($) => $.focusable), P = S.find(($) => $.active), F = S.find(($) => $.id === v), Z = [P, F, ...S].filter(
                  Boolean
                ).map(($) => $.ref.current);
                ta(Z, u);
              }
            }
            E.current = !1;
          }),
          onBlur: K(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), Jo = "RovingFocusGroupItem", ea = h.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = ze(), f = i || c, u = uc(Jo, n), d = u.currentTabStopId === f, p = qo(n), { onFocusableItemAdd: m, onFocusableItemRemove: b, currentTabStopId: v } = u;
    return h.useEffect(() => {
      if (r)
        return m(), () => b();
    }, [r, m, b]), /* @__PURE__ */ a(
      Sn.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          ie.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: K(e.onMouseDown, (g) => {
              r ? u.onItemFocus(f) : g.preventDefault();
            }),
            onFocus: K(e.onFocus, () => u.onItemFocus(f)),
            onKeyDown: K(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = hc(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const C = y.indexOf(g.currentTarget);
                  y = u.loop ? vc(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => ta(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
ea.displayName = Jo;
var pc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function mc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function hc(e, t, n) {
  const r = mc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return pc[r];
}
function ta(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function vc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var gc = Qo, bc = ea, _c = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qe = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Pt = {}, hn = 0, na = function(e) {
  return e && (e.host || na(e.parentNode));
}, wc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = na(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, yc = function(e, t, n, r) {
  var o = wc(t, Array.isArray(e) ? e : [e]);
  Pt[n] || (Pt[n] = /* @__PURE__ */ new WeakMap());
  var i = Pt[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  o.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), b = m !== null && m !== "false", v = (Qe.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          Qe.set(p, v), i.set(p, g), s.push(p), v === 1 && b && Mt.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), l.clear(), hn++, function() {
    s.forEach(function(d) {
      var p = Qe.get(d) - 1, m = i.get(d) - 1;
      Qe.set(d, p), i.set(d, m), p || (Mt.has(d) || d.removeAttribute(r), Mt.delete(d)), m || d.removeAttribute(n);
    }), hn--, hn || (Qe = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Pt = {});
  };
}, Nc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = _c(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), yc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function ra(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Cc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var kt = "right-scroll-bar-position", Dt = "width-before-scroll-bar", xc = "with-scroll-bars-hidden", Sc = "--removed-body-scroll-bar-size";
function vn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Rc(e, t) {
  var n = ee(function() {
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
var Ec = typeof window < "u" ? h.useLayoutEffect : h.useEffect, kr = /* @__PURE__ */ new WeakMap();
function Mc(e, t) {
  var n = Rc(null, function(r) {
    return e.forEach(function(o) {
      return vn(o, r);
    });
  });
  return Ec(function() {
    var r = kr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || vn(l, null);
      }), i.forEach(function(l) {
        o.has(l) || vn(l, s);
      });
    }
    kr.set(n, e);
  }, [e]), n;
}
function Pc(e) {
  return e;
}
function Ic(e, t) {
  t === void 0 && (t = Pc);
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
function Ac(e) {
  e === void 0 && (e = {});
  var t = Ic(null);
  return t.options = Se({ async: !0, ssr: !1 }, e), t;
}
var oa = function(e) {
  var t = e.sideCar, n = ra(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return h.createElement(r, Se({}, n));
};
oa.isSideCarExport = !0;
function Oc(e, t) {
  return e.useMedium(t), oa;
}
var aa = Ac(), gn = function() {
}, en = h.forwardRef(function(e, t) {
  var n = h.useRef(null), r = h.useState({
    onScrollCapture: gn,
    onWheelCapture: gn,
    onTouchMoveCapture: gn
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, N = w === void 0 ? "div" : w, y = e.gapMode, C = ra(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, M = Mc([n, t]), x = Se(Se({}, C), o);
  return h.createElement(
    h.Fragment,
    null,
    u && h.createElement(E, { sideCar: aa, removeScrollBar: f, shards: d, noRelative: m, noIsolation: b, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? h.cloneElement(h.Children.only(l), Se(Se({}, x), { ref: M })) : h.createElement(N, Se({}, x, { className: c, ref: M }), l)
  );
});
en.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
en.classNames = {
  fullWidth: Dt,
  zeroRight: kt
};
var Tc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function kc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Tc();
  return t && e.setAttribute("nonce", t), e;
}
function Dc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = kc()) && (Dc(t, n), Lc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Fc = function() {
  var e = Bc();
  return function(t, n) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ia = function() {
  var e = Fc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, $c = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bn = function(e) {
  return parseInt(e || "", 10) || 0;
}, zc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bn(n), bn(r), bn(o)];
}, jc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return $c;
  var t = zc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Wc = ia(), rt = "data-scroll-locked", Vc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(rt, `] {
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
  
  .`).concat(kt, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Dt, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Dt, " .").concat(Dt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(rt, `] {
    `).concat(Sc, ": ").concat(l, `px;
  }
`);
}, Dr = function() {
  var e = parseInt(document.body.getAttribute(rt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Hc = function() {
  h.useEffect(function() {
    return document.body.setAttribute(rt, (Dr() + 1).toString()), function() {
      var e = Dr() - 1;
      e <= 0 ? document.body.removeAttribute(rt) : document.body.setAttribute(rt, e.toString());
    };
  }, []);
}, Uc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Hc();
  var i = h.useMemo(function() {
    return jc(o);
  }, [o]);
  return h.createElement(Wc, { styles: Vc(i, !t, o, n ? "" : "!important") });
}, Rn = !1;
if (typeof window < "u")
  try {
    var It = Object.defineProperty({}, "passive", {
      get: function() {
        return Rn = !0, !0;
      }
    });
    window.addEventListener("test", It, It), window.removeEventListener("test", It, It);
  } catch {
    Rn = !1;
  }
var Je = Rn ? { passive: !1 } : !1, Gc = function(e) {
  return e.tagName === "TEXTAREA";
}, sa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gc(e) && n[t] === "visible")
  );
}, Kc = function(e) {
  return sa(e, "overflowY");
}, Yc = function(e) {
  return sa(e, "overflowX");
}, Lr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = la(e, r);
    if (o) {
      var i = ca(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Xc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, qc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, la = function(e, t) {
  return e === "v" ? Kc(t) : Yc(t);
}, ca = function(e, t) {
  return e === "v" ? Xc(t) : qc(t);
}, Zc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Qc = function(e, t, n, r, o) {
  var i = Zc(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var m = ca(e, l), b = m[0], v = m[1], g = m[2], w = v - g - i * b;
    (b || w) && la(e, l) && (d += w, p += b);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, At = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Br = function(e) {
  return [e.deltaX, e.deltaY];
}, Fr = function(e) {
  return e && "current" in e ? e.current : e;
}, Jc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ed = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, td = 0, et = [];
function nd(e) {
  var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), o = h.useState(td++)[0], i = h.useState(ia)[0], s = h.useRef(e);
  h.useEffect(function() {
    s.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Cc([e.lockRef.current], (e.shards || []).map(Fr), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = h.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = At(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - w[0], C = "deltaY" in v ? v.deltaY : N[1] - w[1], E, M = v.target, x = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && x === "h" && M.type === "range")
      return !1;
    var I = window.getSelection(), A = I && I.anchorNode, k = A ? A === M || A.contains(M) : !1;
    if (k)
      return !1;
    var S = Lr(x, M);
    if (!S)
      return !0;
    if (S ? E = x : (E = x === "v" ? "h" : "v", S = Lr(x, M)), !S)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return Qc(P, g, v, P === "h" ? y : C);
  }, []), c = h.useCallback(function(v) {
    var g = v;
    if (!(!et.length || et[et.length - 1] !== i)) {
      var w = "deltaY" in g ? Br(g) : At(g), N = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && Jc(E.delta, w);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(Fr).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = h.useCallback(function(v, g, w, N) {
    var y = { name: v, delta: g, target: w, should: N, shadowParent: rd(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = h.useCallback(function(v) {
    n.current = At(v), r.current = void 0;
  }, []), d = h.useCallback(function(v) {
    f(v.type, Br(v), v.target, l(v, e.lockRef.current));
  }, []), p = h.useCallback(function(v) {
    f(v.type, At(v), v.target, l(v, e.lockRef.current));
  }, []);
  h.useEffect(function() {
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
  var m = e.removeScrollBar, b = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    b ? h.createElement(i, { styles: ed(o) }) : null,
    m ? h.createElement(Uc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function rd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const od = Oc(aa, nd);
var da = h.forwardRef(function(e, t) {
  return h.createElement(en, Se({}, e, { ref: t, sideCar: od }));
});
da.classNames = en.classNames;
var En = ["Enter", " "], ad = ["ArrowDown", "PageUp", "Home"], ua = ["ArrowUp", "PageDown", "End"], id = [...ad, ...ua], sd = {
  ltr: [...En, "ArrowRight"],
  rtl: [...En, "ArrowLeft"]
}, ld = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Nt = "Menu", [ht, cd, dd] = Fn(Nt), [Ze, fa] = He(Nt, [
  dd,
  Jt,
  Zo
]), Ct = Jt(), pa = Zo(), [ma, Ge] = Ze(Nt), [ud, xt] = Ze(Nt), ha = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = Ct(t), [c, f] = h.useState(null), u = h.useRef(!1), d = Me(i), p = Wn(o);
  return h.useEffect(() => {
    const m = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(tr, { ...l, children: /* @__PURE__ */ a(
    ma,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ a(
        ud,
        {
          scope: t,
          onClose: h.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
ha.displayName = Nt;
var fd = "MenuAnchor", rr = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ct(n);
    return /* @__PURE__ */ a(Ko, { ...o, ...r, ref: t });
  }
);
rr.displayName = fd;
var or = "MenuPortal", [pd, va] = Ze(or, {
  forceMount: void 0
}), ga = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Ge(or, t);
  return /* @__PURE__ */ a(pd, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Ue, { present: n || i.open, children: /* @__PURE__ */ a(nr, { asChild: !0, container: o, children: r }) }) });
};
ga.displayName = or;
var ye = "MenuContent", [md, ar] = Ze(ye), ba = h.forwardRef(
  (e, t) => {
    const n = va(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ge(ye, e.__scopeMenu), s = xt(ye, e.__scopeMenu);
    return /* @__PURE__ */ a(ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Ue, { present: r || i.open, children: /* @__PURE__ */ a(ht.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(hd, { ...o, ref: t }) : /* @__PURE__ */ a(vd, { ...o, ref: t }) }) }) });
  }
), hd = h.forwardRef(
  (e, t) => {
    const n = Ge(ye, e.__scopeMenu), r = h.useRef(null), o = ce(t, r);
    return h.useEffect(() => {
      const i = r.current;
      if (i) return Nc(i);
    }, []), /* @__PURE__ */ a(
      ir,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: K(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), vd = h.forwardRef((e, t) => {
  const n = Ge(ye, e.__scopeMenu);
  return /* @__PURE__ */ a(
    ir,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), gd = /* @__PURE__ */ Lt("MenuContent.ScrollLock"), ir = h.forwardRef(
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
      onDismiss: m,
      disableOutsideScroll: b,
      ...v
    } = e, g = Ge(ye, n), w = xt(ye, n), N = Ct(n), y = pa(n), C = cd(n), [E, M] = h.useState(null), x = h.useRef(null), I = ce(t, x, g.onContentChange), A = h.useRef(0), k = h.useRef(""), S = h.useRef(0), P = h.useRef(null), F = h.useRef("right"), z = h.useRef(0), Z = b ? da : h.Fragment, $ = b ? { as: gd, allowPinchZoom: !0 } : void 0, j = (O) => {
      var U, re;
      const Y = k.current + O, X = C().filter((te) => !te.disabled), ne = document.activeElement, W = (U = X.find((te) => te.ref.current === ne)) == null ? void 0 : U.textValue, Q = X.map((te) => te.textValue), T = Pd(Q, Y, W), H = (re = X.find((te) => te.textValue === T)) == null ? void 0 : re.ref.current;
      (function te(se) {
        k.current = se, window.clearTimeout(A.current), se !== "" && (A.current = window.setTimeout(() => te(""), 1e3));
      })(Y), H && setTimeout(() => H.focus());
    };
    h.useEffect(() => () => window.clearTimeout(A.current), []), $s();
    const D = h.useCallback((O) => {
      var X, ne;
      return F.current === ((X = P.current) == null ? void 0 : X.side) && Ad(O, (ne = P.current) == null ? void 0 : ne.area);
    }, []);
    return /* @__PURE__ */ a(
      md,
      {
        scope: n,
        searchRef: k,
        onItemEnter: h.useCallback(
          (O) => {
            D(O) && O.preventDefault();
          },
          [D]
        ),
        onItemLeave: h.useCallback(
          (O) => {
            var Y;
            D(O) || ((Y = x.current) == null || Y.focus(), M(null));
          },
          [D]
        ),
        onTriggerLeave: h.useCallback(
          (O) => {
            D(O) && O.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: S,
        onPointerGraceIntentChange: h.useCallback((O) => {
          P.current = O;
        }, []),
        children: /* @__PURE__ */ a(Z, { ...$, children: /* @__PURE__ */ a(
          xo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: K(i, (O) => {
              var Y;
              O.preventDefault(), (Y = x.current) == null || Y.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              Gn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ a(
                  gc,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: K(c, (O) => {
                      w.isUsingKeyboardRef.current || O.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      Yo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Da(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...N,
                        ...v,
                        ref: I,
                        style: { outline: "none", ...v.style },
                        onKeyDown: K(v.onKeyDown, (O) => {
                          const X = O.target.closest("[data-radix-menu-content]") === O.currentTarget, ne = O.ctrlKey || O.altKey || O.metaKey, W = O.key.length === 1;
                          X && (O.key === "Tab" && O.preventDefault(), !ne && W && j(O.key));
                          const Q = x.current;
                          if (O.target !== Q || !id.includes(O.key)) return;
                          O.preventDefault();
                          const H = C().filter((U) => !U.disabled).map((U) => U.ref.current);
                          ua.includes(O.key) && H.reverse(), Ed(H);
                        }),
                        onBlur: K(e.onBlur, (O) => {
                          O.currentTarget.contains(O.target) || (window.clearTimeout(A.current), k.current = "");
                        }),
                        onPointerMove: K(
                          e.onPointerMove,
                          vt((O) => {
                            const Y = O.target, X = z.current !== O.clientX;
                            if (O.currentTarget.contains(Y) && X) {
                              const ne = O.clientX > z.current ? "right" : "left";
                              F.current = ne, z.current = O.clientX;
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
ba.displayName = ye;
var bd = "MenuGroup", sr = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(ie.div, { role: "group", ...r, ref: t });
  }
);
sr.displayName = bd;
var _d = "MenuLabel", _a = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(ie.div, { ...r, ref: t });
  }
);
_a.displayName = _d;
var Wt = "MenuItem", $r = "menu.itemSelect", tn = h.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = h.useRef(null), s = xt(Wt, e.__scopeMenu), l = ar(Wt, e.__scopeMenu), c = ce(t, i), f = h.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent($r, { bubbles: !0, cancelable: !0 });
        d.addEventListener($r, (m) => r == null ? void 0 : r(m), { once: !0 }), oo(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      wa,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: K(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), f.current = !0;
        },
        onPointerUp: K(e.onPointerUp, (d) => {
          var p;
          f.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: K(e.onKeyDown, (d) => {
          const p = l.searchRef.current !== "";
          n || p && d.key === " " || En.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
tn.displayName = Wt;
var wa = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = ar(Wt, n), l = pa(n), c = h.useRef(null), f = ce(t, c), [u, d] = h.useState(!1), [p, m] = h.useState("");
    return h.useEffect(() => {
      const b = c.current;
      b && m((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      ht.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a(bc, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          ie.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: K(
              e.onPointerMove,
              vt((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: K(
              e.onPointerLeave,
              vt((b) => s.onItemLeave(b))
            ),
            onFocus: K(e.onFocus, () => d(!0)),
            onBlur: K(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), wd = "MenuCheckboxItem", ya = h.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(Ra, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      tn,
      {
        role: "menuitemcheckbox",
        "aria-checked": Vt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": dr(n),
        onSelect: K(
          o.onSelect,
          () => r == null ? void 0 : r(Vt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ya.displayName = wd;
var Na = "MenuRadioGroup", [yd, Nd] = Ze(
  Na,
  { value: void 0, onValueChange: () => {
  } }
), Ca = h.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Me(r);
    return /* @__PURE__ */ a(yd, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(sr, { ...o, ref: t }) });
  }
);
Ca.displayName = Na;
var xa = "MenuRadioItem", Sa = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Nd(xa, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(Ra, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      tn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": dr(i),
        onSelect: K(
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
Sa.displayName = xa;
var lr = "MenuItemIndicator", [Ra, Cd] = Ze(
  lr,
  { checked: !1 }
), Ea = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = Cd(lr, n);
    return /* @__PURE__ */ a(
      Ue,
      {
        present: r || Vt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          ie.span,
          {
            ...o,
            ref: t,
            "data-state": dr(i.checked)
          }
        )
      }
    );
  }
);
Ea.displayName = lr;
var xd = "MenuSeparator", Ma = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      ie.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ma.displayName = xd;
var Sd = "MenuArrow", Pa = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ct(n);
    return /* @__PURE__ */ a(Xo, { ...o, ...r, ref: t });
  }
);
Pa.displayName = Sd;
var cr = "MenuSub", [Rd, Ia] = Ze(cr), Aa = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Ge(cr, t), s = Ct(t), [l, c] = h.useState(null), [f, u] = h.useState(null), d = Me(o);
  return h.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ a(tr, { ...s, children: /* @__PURE__ */ a(
    ma,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        Rd,
        {
          scope: t,
          contentId: ze(),
          triggerId: ze(),
          trigger: l,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Aa.displayName = cr;
var ft = "MenuSubTrigger", Oa = h.forwardRef(
  (e, t) => {
    const n = Ge(ft, e.__scopeMenu), r = xt(ft, e.__scopeMenu), o = Ia(ft, e.__scopeMenu), i = ar(ft, e.__scopeMenu), s = h.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = h.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return h.useEffect(() => u, [u]), h.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(rr, { asChild: !0, ...f, children: /* @__PURE__ */ a(
      wa,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Da(n.open),
        ...e,
        ref: Ut(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: K(
          e.onPointerMove,
          vt((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: K(
          e.onPointerLeave,
          vt((d) => {
            var m, b;
            u();
            const p = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (p) {
              const v = (b = n.content) == null ? void 0 : b.dataset.side, g = v === "right", w = g ? -5 : 5, N = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + w, y: d.clientY },
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
        onKeyDown: K(e.onKeyDown, (d) => {
          var m;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || sd[r.dir].includes(d.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Oa.displayName = ft;
var Ta = "MenuSubContent", ka = h.forwardRef(
  (e, t) => {
    const n = va(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ge(ye, e.__scopeMenu), s = xt(ye, e.__scopeMenu), l = Ia(Ta, e.__scopeMenu), c = h.useRef(null), f = ce(t, c);
    return /* @__PURE__ */ a(ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Ue, { present: r || i.open, children: /* @__PURE__ */ a(ht.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      ir,
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
        onFocusOutside: K(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: K(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: K(e.onKeyDown, (u) => {
          var m;
          const d = u.currentTarget.contains(u.target), p = ld[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (m = l.trigger) == null || m.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
ka.displayName = Ta;
function Da(e) {
  return e ? "open" : "closed";
}
function Vt(e) {
  return e === "indeterminate";
}
function dr(e) {
  return Vt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ed(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Md(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Pd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Md(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Id(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function Ad(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Id(n, t);
}
function vt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Od = ha, Td = rr, kd = ga, Dd = ba, Ld = sr, Bd = _a, Fd = tn, $d = ya, zd = Ca, jd = Sa, Wd = Ea, Vd = Ma, Hd = Pa, Ud = Aa, Gd = Oa, Kd = ka, nn = "DropdownMenu", [Yd] = He(
  nn,
  [fa]
), pe = fa(), [Xd, La] = Yd(nn), Ba = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = pe(t), f = h.useRef(null), [u, d] = qe({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: nn
  });
  return /* @__PURE__ */ a(
    Xd,
    {
      scope: t,
      triggerId: ze(),
      triggerRef: f,
      contentId: ze(),
      open: u,
      onOpenChange: d,
      onOpenToggle: h.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ a(Od, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Ba.displayName = nn;
var Fa = "DropdownMenuTrigger", $a = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = La(Fa, n), s = pe(n);
    return /* @__PURE__ */ a(Td, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      ie.button,
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
        ref: Ut(t, i.triggerRef),
        onPointerDown: K(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: K(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
$a.displayName = Fa;
var qd = "DropdownMenuPortal", za = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = pe(t);
  return /* @__PURE__ */ a(kd, { ...r, ...n });
};
za.displayName = qd;
var ja = "DropdownMenuContent", Wa = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = La(ja, n), i = pe(n), s = h.useRef(!1);
    return /* @__PURE__ */ a(
      Dd,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: K(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = o.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: K(e.onInteractOutside, (l) => {
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
Wa.displayName = ja;
var Zd = "DropdownMenuGroup", Va = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ a(Ld, { ...o, ...r, ref: t });
  }
);
Va.displayName = Zd;
var Qd = "DropdownMenuLabel", Ha = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ a(Bd, { ...o, ...r, ref: t });
  }
);
Ha.displayName = Qd;
var Jd = "DropdownMenuItem", Ua = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ a(Fd, { ...o, ...r, ref: t });
  }
);
Ua.displayName = Jd;
var eu = "DropdownMenuCheckboxItem", Ga = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a($d, { ...o, ...r, ref: t });
});
Ga.displayName = eu;
var tu = "DropdownMenuRadioGroup", Ka = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(zd, { ...o, ...r, ref: t });
});
Ka.displayName = tu;
var nu = "DropdownMenuRadioItem", Ya = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(jd, { ...o, ...r, ref: t });
});
Ya.displayName = nu;
var ru = "DropdownMenuItemIndicator", Xa = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(Wd, { ...o, ...r, ref: t });
});
Xa.displayName = ru;
var ou = "DropdownMenuSeparator", qa = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(Vd, { ...o, ...r, ref: t });
});
qa.displayName = ou;
var au = "DropdownMenuArrow", iu = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ a(Hd, { ...o, ...r, ref: t });
  }
);
iu.displayName = au;
var su = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = pe(t), [l, c] = qe({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a(Ud, { ...s, open: l, onOpenChange: c, children: n });
}, lu = "DropdownMenuSubTrigger", Za = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(Gd, { ...o, ...r, ref: t });
});
Za.displayName = lu;
var cu = "DropdownMenuSubContent", Qa = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = pe(n);
  return /* @__PURE__ */ a(
    Kd,
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
Qa.displayName = cu;
var Ja = Ba, ei = $a, ur = za, ti = Wa, du = Va, uu = Ha, ni = Ua, fu = Ga, pu = Ka, mu = Ya, ri = Xa, hu = qa, vu = su, gu = Za, bu = Qa;
const oi = R.forwardRef(
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
), Pe = Ja, Ie = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    ei,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ae = R.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: o, ...i }, s) {
  return /* @__PURE__ */ a(ur, { container: o, children: /* @__PURE__ */ a(
    ti,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), ai = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    uu,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), _u = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(du, { ref: n, ...t });
}), ae = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    ni,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ip = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ _(
    fu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ri, { children: /* @__PURE__ */ a(ke, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), Ap = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(pu, { ref: n, ...t });
}), Op = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ _(
    mu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ri, { children: /* @__PURE__ */ a(ke, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), it = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(hu, { asChild: !0, ...n, children: /* @__PURE__ */ a(
    oi,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" ")
    }
  ) });
}), Tp = vu, kp = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ _(
    gu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-sub-trigger", t].filter(Boolean).join(" "),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a(ot, { size: 16, className: "flyout-menu-sub-trigger__chevron", "aria-hidden": !0 })
      ]
    }
  );
}), Dp = R.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...o }, i) {
  return /* @__PURE__ */ a(ur, { container: r, children: /* @__PURE__ */ a(
    bu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...o
    }
  ) });
}), Lp = R.forwardRef(
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
function zr({ type: e }) {
  return /* @__PURE__ */ a("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ a(ot, { size: 16 }) : /* @__PURE__ */ a("span", { children: "/" }) });
}
function wu({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ _(Pe, { children: [
    /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        children: /* @__PURE__ */ a(Xe, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ a(Ae, { sideOffset: 4, align: "start", children: e.map((n, r) => /* @__PURE__ */ a(
      ae,
      {
        onSelect: () => {
          n.href && (t ? t(n.href) : window.location.href = n.href);
        },
        children: n.label
      },
      r
    )) })
  ] });
}
function yu({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ _(Pe, { children: [
    /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ _(
      "button",
      {
        className: "breadcrumbs__menu-trigger",
        "aria-haspopup": "menu",
        title: e.label,
        children: [
          /* @__PURE__ */ a("span", { className: "breadcrumbs__label", children: e.label }),
          /* @__PURE__ */ a(ot, { size: 12, className: "breadcrumbs__menu-chevron" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(Ae, { sideOffset: 4, align: "start", children: e.menu.map((n, r) => /* @__PURE__ */ a(
      ae,
      {
        onSelect: () => {
          t ? t(n.href) : window.location.href = n.href;
        },
        children: n.label
      },
      r
    )) })
  ] });
}
function Nu({
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
    return /* @__PURE__ */ a(yu, { item: e, onNavigate: t });
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
function Cu({
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
      /* @__PURE__ */ a(zr, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(wu, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ a(zr, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(Nu, { item: f, onNavigate: r }) }, u)
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
function xu() {
  return /* @__PURE__ */ a("span", { className: "button__spinner", "aria-hidden": "true" });
}
const fe = R.forwardRef(
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
    const p = c == null, m = s || !!o, b = !s && !!i;
    return /* @__PURE__ */ _(
      "button",
      {
        ref: d,
        className: ["button", f].filter(Boolean).join(" "),
        "data-variant": t,
        "data-size": n,
        "data-color": r,
        "data-loading": s ? "true" : void 0,
        "data-icon-only": p ? "" : void 0,
        "data-icon-start": m ? "" : void 0,
        "data-icon-end": b ? "" : void 0,
        disabled: l || s,
        "aria-busy": s ? !0 : void 0,
        ...u,
        children: [
          (s || o) && (s ? /* @__PURE__ */ a(xu, {}) : o),
          c,
          !s && i
        ]
      }
    );
  }
), ge = R.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ a(fe, { ref: r, iconStart: t, ...n });
  }
), Su = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function Ru(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function Eu(e) {
  return e === "primary" ? "primary" : "neutral";
}
function jr({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = Ru(e.type), o = Eu(e.type);
  return t && e.icon ? /* @__PURE__ */ a(
    ge,
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
    fe,
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
function Mu({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ _(Pe, { children: [
    /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
      ge,
      {
        icon: /* @__PURE__ */ a(Zr, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ a(
      Ae,
      {
        sideOffset: 4,
        align: t === "right" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ _(
          ae,
          {
            disabled: n.disabled,
            onSelect: n.disabled ? void 0 : n.onClick,
            children: [
              n.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: n.icon }),
              n.label
            ]
          },
          n.id
        ))
      }
    )
  ] });
}
function Pu({
  actions: e,
  variant: t = "full",
  iconOnly: n = !1,
  alignment: r = "right",
  className: o,
  style: i
}) {
  const s = (() => {
    const N = [...e].reverse().findIndex((y) => y.type === "primary");
    return N === -1 ? e.length - 1 : e.length - 1 - N;
  })(), l = e[s], c = e.filter((N, y) => y !== s), f = Su[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const m = d.length > 0 ? /* @__PURE__ */ a(
    Mu,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, v = (r === "left" ? [...u].reverse() : u).map((N) => /* @__PURE__ */ a(jr, { action: N, iconOnly: n }, N.id)), g = /* @__PURE__ */ a(jr, { action: l, iconOnly: n }, l.id), w = r === "right" ? [m, ...v, g] : [g, ...v, m];
  return /* @__PURE__ */ a(
    "div",
    {
      role: "toolbar",
      "aria-label": "Page actions",
      className: ["buttons-toolbar", o].filter(Boolean).join(" "),
      "data-variant": t,
      "data-alignment": r,
      style: i,
      children: w
    }
  );
}
function Iu() {
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
function Au() {
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
const Bp = R.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: o, id: i, className: s, ...l }, c) {
    const f = oe(), u = i ?? f, d = le(null);
    return kn(c, () => d.current), ue(() => {
      d.current && (d.current.indeterminate = n ?? !1);
    }, [n]), /* @__PURE__ */ _(
      "label",
      {
        htmlFor: u,
        className: ["checkbox", s].filter(Boolean).join(" "),
        "data-disabled": o || void 0,
        "data-validation": r,
        children: [
          /* @__PURE__ */ _("span", { className: "checkbox__control", children: [
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
            /* @__PURE__ */ _("span", { className: "checkbox__box", "aria-hidden": "true", children: [
              /* @__PURE__ */ a(Iu, {}),
              /* @__PURE__ */ a(Au, {})
            ] })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), Fp = R.forwardRef(
  function({ legend: t, required: n, hint: r, validation: o, validationMessage: i, children: s, className: l }, c) {
    const f = oe(), u = oe();
    return /* @__PURE__ */ _(
      "fieldset",
      {
        ref: c,
        className: ["checkbox-group", l].filter(Boolean).join(" "),
        "data-validation": o,
        "aria-describedby": [r ? f : null, i ? u : null].filter(Boolean).join(" ") || void 0,
        children: [
          /* @__PURE__ */ _("legend", { className: "checkbox-group__legend", children: [
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
), gt = R.forwardRef(
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
), Ou = { small: 12, medium: 16 }, Wr = R.forwardRef(
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
    const [m, b] = ee(c), v = l !== void 0, g = v ? l : m, w = Ou[i];
    if (n === "selectable") {
      const N = () => {
        if (s) return;
        const y = !g;
        v || b(y), f == null || f(y);
      };
      return /* @__PURE__ */ _(
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
              ke,
              {
                className: "chip__check",
                size: w,
                "aria-hidden": "true"
              }
            ),
            r && /* @__PURE__ */ a("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
            /* @__PURE__ */ a("span", { className: "chip__label", children: t }),
            o !== void 0 && /* @__PURE__ */ a(
              gt,
              {
                count: o,
                variant: "outline",
                color: "neutral",
                size: "medium",
                "aria-label": `${o} items`
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ _(
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
          o !== void 0 && /* @__PURE__ */ a(
            gt,
            {
              count: o,
              variant: "outline",
              color: "neutral",
              size: "small",
              "aria-label": `${o} items`
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "chip__remove",
              "aria-label": `Remove ${t}`,
              disabled: s,
              onClick: u,
              tabIndex: s ? -1 : void 0,
              children: /* @__PURE__ */ a(Oe, { size: w, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function $p({
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
function Tu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function ku(e) {
  return e.flatMap((t) => t.items);
}
const zp = R.forwardRef(
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
      noResultsText: m = "No results found",
      id: b,
      className: v
    } = t, g = t.selection === "multi", w = g ? t.chipPlacement ?? "below" : "inline", N = oe(), y = b ?? `combobox-${N}`, C = `${y}-listbox`, E = `${y}-hint`, M = `${y}-message`, x = le(null), I = le(null);
    ue(() => {
      n && (typeof n == "function" ? n(I.current) : n.current = I.current);
    }, [n]);
    const [A, k] = ee(!1), [S, P] = ee(""), [F, z] = ee(-1), Z = t.value !== void 0, [$, j] = ee(() => {
      if (g) return t.value ?? [];
      const L = t.value;
      return L ? [L] : [];
    }), D = Z ? g ? t.value ?? [] : t.value ? [t.value] : [] : $, O = tt(
      () => D.map((L) => r.find((V) => V.value === L)).filter(Boolean),
      [D, r]
    ), Y = tt(() => {
      const L = S.toLowerCase().trim(), V = L ? r.filter((J) => J.label.toLowerCase().includes(L)) : r;
      return Tu(V);
    }, [r, S]), X = tt(() => ku(Y), [Y]), ne = tt(
      () => r.filter((L) => !L.disabled).map((L) => L.value),
      [r]
    ), W = tt(
      () => ne.length > 0 && ne.every((L) => D.includes(L)),
      [ne, D]
    ), Q = de(
      (L) => D.includes(L),
      [D]
    ), T = de(
      (L) => {
        var V, J;
        Z || j(L), g ? (V = t.onChange) == null || V.call(t, L) : (J = t.onChange) == null || J.call(t, L[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [Z, g]
    ), H = de(
      (L) => {
        var V;
        if (!L.disabled)
          if (g) {
            const J = Q(L.value) ? D.filter((he) => he !== L.value) : [...D, L.value];
            T(J), P(""), (V = I.current) == null || V.focus();
          } else
            T([L.value]), P(""), k(!1), z(-1);
      },
      [g, Q, D, T]
    ), U = de(
      (L) => {
        T(D.filter((V) => V !== L));
      },
      [D, T]
    ), re = () => {
      d || (k(!0), z(-1));
    }, te = () => {
      k(!1), P(""), z(-1);
    };
    ue(() => {
      if (!A) return;
      const L = (V) => {
        var J;
        (J = x.current) != null && J.contains(V.target) || te();
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [A]);
    const se = !g && !A && O.length > 0 ? O[0].label : S, me = (L) => {
      switch (L.key) {
        case "ArrowDown": {
          if (L.preventDefault(), !A) {
            re();
            return;
          }
          z((V) => Math.min(V + 1, X.length - 1));
          break;
        }
        case "ArrowUp": {
          L.preventDefault(), z((V) => Math.max(V - 1, 0));
          break;
        }
        case "Enter": {
          if (L.preventDefault(), !A) {
            re();
            return;
          }
          F >= 0 && X[F] && H(X[F]);
          break;
        }
        case "Escape": {
          L.preventDefault(), te();
          break;
        }
        case "Backspace": {
          g && S === "" && D.length > 0 && U(D[D.length - 1]);
          break;
        }
      }
    };
    ue(() => {
      z(-1);
    }, [S]);
    const B = le(null);
    ue(() => {
      if (F < 0 || !B.current) return;
      const L = B.current.querySelector(`[data-index="${F}"]`);
      L == null || L.scrollIntoView({ block: "nearest" });
    }, [F]);
    const G = F >= 0 && X[F] ? `${C}-${X[F].value}` : void 0, q = [
      s ? E : null,
      c ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ _(
      "div",
      {
        ref: x,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": A || void 0,
        "data-disabled": d || void 0,
        children: [
          o && /* @__PURE__ */ _("label", { className: "combobox__label", htmlFor: y, children: [
            o,
            p && /* @__PURE__ */ a("span", { className: "combobox__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ _("div", { className: "combobox__field-wrap", children: [
            /* @__PURE__ */ _(
              "div",
              {
                className: "combobox__field",
                onClick: () => {
                  var L;
                  A || re(), (L = I.current) == null || L.focus();
                },
                children: [
                  g && w === "inline" && O.map((L) => /* @__PURE__ */ a(
                    Wr,
                    {
                      variant: "removable",
                      label: L.label,
                      size: "small",
                      onRemove: d ? void 0 : () => U(L.value)
                    },
                    L.value
                  )),
                  !g && O.length > 0 && O[0].icon && /* @__PURE__ */ a("span", { className: "combobox__field-leading", "aria-hidden": "true", children: O[0].icon }),
                  /* @__PURE__ */ a(
                    "input",
                    {
                      ref: I,
                      id: y,
                      type: "text",
                      role: "combobox",
                      className: "combobox__input",
                      value: se,
                      placeholder: g && O.length > 0 ? "" : i,
                      disabled: d,
                      required: p,
                      "aria-expanded": A,
                      "aria-controls": A ? C : void 0,
                      "aria-activedescendant": G,
                      "aria-autocomplete": "list",
                      "aria-describedby": q,
                      "aria-required": p,
                      autoComplete: "off",
                      onChange: (L) => {
                        P(L.target.value), A || re(), !g && L.target.value === "" && D.length > 0 && T([]);
                      },
                      onFocus: re,
                      onKeyDown: me
                    }
                  ),
                  /* @__PURE__ */ a(
                    _t,
                    {
                      className: "combobox__chevron",
                      size: 16,
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ),
            A && /* @__PURE__ */ _("div", { className: "combobox__panel", children: [
              /* @__PURE__ */ a(
                "ul",
                {
                  ref: B,
                  id: C,
                  role: "listbox",
                  className: "combobox__listbox",
                  "aria-label": o,
                  "aria-multiselectable": g || void 0,
                  children: X.length === 0 ? /* @__PURE__ */ a("li", { className: "combobox__no-results", role: "presentation", children: m }) : Y.map((L, V) => /* @__PURE__ */ _(R.Fragment, { children: [
                    L.name && /* @__PURE__ */ a("li", { role: "presentation", className: "combobox__group-header", children: L.name }),
                    V > 0 && !L.name && /* @__PURE__ */ a("li", { role: "separator", className: "combobox__group-divider" }),
                    L.items.map((J) => {
                      const he = X.indexOf(J), ve = Q(J.value), an = he === F;
                      return /* @__PURE__ */ _(
                        "li",
                        {
                          id: `${C}-${J.value}`,
                          role: "option",
                          "aria-selected": ve,
                          "aria-disabled": J.disabled || void 0,
                          className: "combobox__option",
                          "data-index": he,
                          "data-active": an || void 0,
                          "data-selected": ve || void 0,
                          "data-disabled": J.disabled || void 0,
                          onMouseDown: (sn) => {
                            sn.preventDefault(), H(J);
                          },
                          onMouseEnter: () => z(he),
                          children: [
                            !g && /* @__PURE__ */ a(
                              ke,
                              {
                                className: "combobox__option-selected-icon",
                                size: 16,
                                "aria-hidden": "true",
                                style: { visibility: ve ? "visible" : "hidden" }
                              }
                            ),
                            g && /* @__PURE__ */ a("span", { className: "combobox__option-check", "aria-hidden": "true", children: ve && /* @__PURE__ */ a(ke, { size: 12 }) }),
                            J.icon && /* @__PURE__ */ a("span", { className: "combobox__option-icon", "aria-hidden": "true", children: J.icon }),
                            /* @__PURE__ */ _("span", { className: "combobox__option-content", children: [
                              /* @__PURE__ */ a("span", { className: "combobox__option-label", children: J.label }),
                              J.description && /* @__PURE__ */ a("span", { className: "combobox__option-description", children: J.description })
                            ] })
                          ]
                        },
                        J.value
                      );
                    })
                  ] }, L.name ?? `__group-${V}`))
                }
              ),
              g && /* @__PURE__ */ _("div", { className: "combobox__footer", children: [
                /* @__PURE__ */ a(
                  fe,
                  {
                    variant: "outline",
                    color: "neutral",
                    size: "small",
                    disabled: D.length === 0,
                    onMouseDown: (L) => {
                      L.preventDefault(), T([]);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ a(
                  fe,
                  {
                    variant: "fill",
                    color: "primary",
                    size: "small",
                    disabled: W,
                    onMouseDown: (L) => {
                      L.preventDefault(), T(ne);
                    },
                    children: "Select all"
                  }
                )
              ] })
            ] }),
            g && w === "below" && O.length > 0 && /* @__PURE__ */ a("div", { className: "combobox__chips", children: O.map((L) => /* @__PURE__ */ a(
              Wr,
              {
                variant: "removable",
                label: L.label,
                size: "small",
                onRemove: d ? void 0 : () => U(L.value)
              },
              L.value
            )) })
          ] }),
          s && /* @__PURE__ */ a("p", { id: E, className: "combobox__hint", children: s }),
          c && /* @__PURE__ */ a(
            "p",
            {
              id: M,
              className: "combobox__message",
              role: l === "negative" ? "alert" : void 0,
              children: c
            }
          )
        ]
      }
    );
  }
);
function Du(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? "";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function Lu(e) {
  return Array.from(e.values()).flat();
}
function jp({
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
  className: m,
  "aria-label": b
}) {
  const v = oe(), g = p ?? v, w = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, E = n !== void 0, [M, x] = ee(r ?? ""), I = E ? n ?? "" : M, [A, k] = ee(!1), [S, P] = ee(-1), F = le(null), z = le(null), Z = le(null), $ = Du(o), j = Lu($), D = (B) => `${g}-option-${B}`, O = (B) => {
    for (let G = B + 1; G < j.length; G++)
      if (!j[G].disabled) return G;
    return B;
  }, Y = (B) => {
    for (let G = B - 1; G >= 0; G--)
      if (!j[G].disabled) return G;
    return B;
  }, X = () => j.findIndex((B) => !B.disabled), ne = () => {
    for (let B = j.length - 1; B >= 0; B--)
      if (!j[B].disabled) return B;
    return -1;
  };
  ue(() => {
    if (!A) return;
    const B = (G) => {
      var q;
      (q = Z.current) != null && q.contains(G.target) || (k(!1), P(-1));
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, [A]), ue(() => {
    if (S < 0 || !z.current) return;
    const B = z.current.querySelector(`#${CSS.escape(D(S))}`);
    B == null || B.scrollIntoView({ block: "nearest" });
  }, [S]);
  const W = (B) => {
    var G;
    B.disabled || (E || x(B.value), i == null || i(B.value), k(!1), P(-1), (G = F.current) == null || G.focus());
  }, Q = (B) => {
    const G = B !== void 0 ? B : I ? j.findIndex((q) => q.value === I) : X();
    P(G >= 0 ? G : X()), k(!0);
  }, T = (B) => {
    switch (B.key) {
      case "Enter":
      case " ":
        B.preventDefault(), A ? S >= 0 && W(j[S]) : Q();
        break;
      case "ArrowDown":
        B.preventDefault(), A ? P((G) => O(G < 0 ? -1 : G)) : Q(X());
        break;
      case "ArrowUp":
        B.preventDefault(), A ? P((G) => Y(G < 0 ? j.length : G)) : Q(ne());
        break;
      case "Home":
        B.preventDefault(), A && P(X());
        break;
      case "End":
        B.preventDefault(), A && P(ne());
        break;
      case "Escape":
        B.preventDefault(), k(!1), P(-1);
        break;
      case "Tab":
        k(!1), P(-1);
        break;
    }
  }, H = j.find((B) => B.value === I), U = c === "small" ? 14 : c === "large" ? 18 : 16, re = S >= 0 && A ? D(S) : void 0, te = [];
  let se = 0;
  for (const [B, G] of $.entries())
    te.push({
      groupName: B,
      items: G.map((q) => ({ option: q, idx: se++ }))
    });
  const me = te.some((B) => B.groupName !== "");
  return /* @__PURE__ */ _(
    "div",
    {
      ref: Z,
      className: ["dropdown", m].filter(Boolean).join(" "),
      "data-size": c,
      "data-open": A || void 0,
      "data-disabled": s || void 0,
      "data-validation": f,
      children: [
        e && /* @__PURE__ */ _("label", { id: w, htmlFor: g, className: "dropdown__label", children: [
          e,
          l && /* @__PURE__ */ a("span", { className: "dropdown__required", "aria-hidden": "true", children: " *" })
        ] }),
        /* @__PURE__ */ _(
          "button",
          {
            ref: F,
            id: g,
            type: "button",
            className: "dropdown__trigger",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": A,
            "aria-controls": N,
            "aria-labelledby": b ? void 0 : w,
            "aria-label": b,
            "aria-activedescendant": re,
            "aria-describedby": [y, C].filter(Boolean).join(" ") || void 0,
            "aria-required": l || void 0,
            "aria-invalid": f === "negative" || void 0,
            disabled: s,
            onClick: () => {
              A ? (k(!1), P(-1)) : Q();
            },
            onKeyDown: T,
            children: [
              /* @__PURE__ */ a("span", { className: H ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: H ? H.label : t }),
              /* @__PURE__ */ a(_t, { size: U, className: "dropdown__chevron", "aria-hidden": "true" })
            ]
          }
        ),
        A && /* @__PURE__ */ a(
          "ul",
          {
            ref: z,
            id: N,
            role: "listbox",
            className: "dropdown__listbox",
            "aria-label": b ?? e,
            children: te.map((B, G) => /* @__PURE__ */ _(R.Fragment, { children: [
              me && G > 0 && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
              B.groupName && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-header", children: B.groupName }),
              B.items.map(({ option: q, idx: L }) => {
                const V = q.value === I, J = S === L;
                return /* @__PURE__ */ _(
                  "li",
                  {
                    id: D(L),
                    role: "option",
                    className: "dropdown__option",
                    "aria-selected": V,
                    "aria-disabled": q.disabled || void 0,
                    "data-selected": V || void 0,
                    "data-active": J || void 0,
                    "data-disabled": q.disabled || void 0,
                    onMouseDown: (he) => he.preventDefault(),
                    onMouseEnter: () => !q.disabled && P(L),
                    onClick: () => W(q),
                    children: [
                      /* @__PURE__ */ a("span", { className: "dropdown__option-check", "aria-hidden": "true", children: V && /* @__PURE__ */ a(ke, { size: 12, strokeWidth: 2.5 }) }),
                      q.icon && /* @__PURE__ */ a("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: q.icon }),
                      /* @__PURE__ */ _("span", { className: "dropdown__option-content", children: [
                        /* @__PURE__ */ a("span", { className: "dropdown__option-label", children: q.label }),
                        q.description && /* @__PURE__ */ a("span", { className: "dropdown__option-description", children: q.description })
                      ] })
                    ]
                  },
                  q.value
                );
              })
            ] }, B.groupName || "__ungrouped"))
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
function Wp({
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
  const f = oe();
  return /* @__PURE__ */ _(
    s ? "label" : "div",
    {
      htmlFor: s,
      id: l,
      className: ["field-label", c].filter(Boolean).join(" "),
      "data-position": i !== "stacked" ? i : void 0,
      children: [
        /* @__PURE__ */ _("span", { className: "field-label__header", children: [
          /* @__PURE__ */ a("span", { className: "field-label__text", title: e, children: e }),
          n && !r && /* @__PURE__ */ a("span", { className: "field-label__required", "aria-hidden": "true", children: " *" }),
          r && !n && /* @__PURE__ */ a("span", { className: "field-label__optional", children: " (optional)" }),
          o && /* @__PURE__ */ _("span", { className: "field-label__help", children: [
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "field-label__help-btn",
                "aria-label": "Help information",
                "aria-describedby": f,
                children: /* @__PURE__ */ a(Pi, { size: 14, "aria-hidden": "true" })
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
function Bu() {
  return Math.random().toString(36).slice(2, 9);
}
function Mn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Fu(e, t, n) {
  var r;
  if (t) {
    const o = t.split(",").map((c) => c.trim().toLowerCase()), i = "." + ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()), s = e.type.toLowerCase();
    if (!o.some((c) => c.endsWith("/*") ? s.startsWith(c.slice(0, -1)) : c.startsWith(".") ? i === c : s === c)) {
      const c = o.filter((f) => f.startsWith(".")).map((f) => f.slice(1).toUpperCase()).join(", ");
      return c ? `Invalid file type. Accepted: ${c}` : "Invalid file type";
    }
  }
  return n && e.size > n ? `File exceeds ${Mn(n)} limit` : null;
}
function $u({ file: e, size: t = 16 }) {
  var o;
  const n = e.type.toLowerCase(), r = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ a(Ti, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ a(_n, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ a(_n, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ a(ki, { size: t }) : /* @__PURE__ */ a(Di, { size: t });
}
function Vp({
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
  onUpload: m,
  onFileRemove: b,
  id: v,
  className: g
}) {
  const w = oe(), N = v ?? w, y = `${N}-input`, C = e ? `${N}-label` : void 0, E = `${N}-live`, M = le(null), [x, I] = ee([]), [A, k] = ee(!1), [S, P] = ee(""), F = de((T) => {
    if (u) return;
    const U = Array.from(T).map((B) => {
      const G = Fu(B, l, c);
      return { id: Bu(), file: B, status: G ? "error" : "added", errorMessage: G ?? void 0 };
    });
    I((B) => d ? [...B, ...U] : U);
    const re = U.filter((B) => B.status === "added").map((B) => B.file);
    re.length > 0 && (p == null || p(re));
    const te = U.filter((B) => B.status === "added").length, se = U.filter((B) => B.status === "error").length, me = [];
    te && me.push(`${te} file${te > 1 ? "s" : ""} added`), se && me.push(`${se} file${se > 1 ? "s" : ""} failed validation`), P(me.join(". ")), M.current && (M.current.value = "");
  }, [u, l, c, d, p]), z = de((T) => {
    I((H) => {
      const U = H.find((re) => re.id === T);
      return U && P(`${U.file.name} removed`), H.filter((re) => re.id !== T);
    }), b == null || b(T);
  }, [b]), Z = de(async () => {
    if (!m) return;
    const T = x.filter((H) => H.status === "added" || H.status === "error");
    if (T.length) {
      I((H) => H.map(
        (U) => T.find((re) => re.id === U.id) ? { ...U, status: "uploading", errorMessage: void 0 } : U
      )), P("Uploading files…");
      try {
        await m(T.map((H) => H.file)), I((H) => H.map(
          (U) => T.find((re) => re.id === U.id) ? { ...U, status: "uploaded" } : U
        )), P(`${T.length} file${T.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (H) {
        const U = H instanceof Error ? H.message : "Upload failed";
        I((re) => re.map(
          (te) => T.find((se) => se.id === te.id) ? { ...te, status: "error", errorMessage: U } : te
        )), P(`Upload failed: ${U}`);
      }
    }
  }, [x, m]), $ = (T) => {
    T.preventDefault(), u || k(!0);
  }, j = (T) => {
    T.currentTarget.contains(T.relatedTarget) || k(!1);
  }, D = (T) => {
    T.preventDefault(), k(!1), !u && F(T.dataTransfer.files);
  }, O = (T) => {
    var H;
    (H = T.target.files) != null && H.length && F(T.target.files);
  }, Y = () => {
    var T;
    u || (T = M.current) == null || T.click();
  }, X = x.length > 0, ne = x.some((T) => T.status === "added"), W = x.some((T) => T.status === "uploading"), Q = [
    f,
    c ? `Max ${Mn(c)}` : null
  ].filter(Boolean).join(" · ");
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["file-uploader", g].filter(Boolean).join(" "),
      "data-position": i !== "bottom" ? i : void 0,
      "data-disabled": u || void 0,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            id: E,
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "false",
            className: "file-uploader__sr-only",
            children: S
          }
        ),
        e && /* @__PURE__ */ _("span", { id: C, className: "file-uploader__label", children: [
          e,
          n && /* @__PURE__ */ a("span", { className: "file-uploader__required", "aria-hidden": "true", children: " *" })
        ] }),
        t && /* @__PURE__ */ a("span", { className: "file-uploader__description", children: t }),
        /* @__PURE__ */ _("div", { className: "file-uploader__body", children: [
          /* @__PURE__ */ _(
            "div",
            {
              className: "file-uploader__zone",
              "data-dragging": A || void 0,
              "aria-labelledby": C,
              "aria-label": e ? void 0 : o ?? "File upload area",
              "aria-disabled": u || void 0,
              onDragOver: $,
              onDragLeave: j,
              onDrop: D,
              onClick: Y,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), Y());
              },
              children: [
                /* @__PURE__ */ a(Ii, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ a("span", { className: "file-uploader__zone-text", children: "Drag & drop files here" }),
                /* @__PURE__ */ _("span", { className: "file-uploader__zone-browse", children: [
                  "or",
                  " ",
                  /* @__PURE__ */ a("span", { className: "file-uploader__browse-link", children: "browse files" })
                ] }),
                Q && /* @__PURE__ */ a("span", { className: "file-uploader__zone-hint", children: Q })
              ]
            }
          ),
          X && /* @__PURE__ */ a("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: x.map((T) => /* @__PURE__ */ _(
            "li",
            {
              className: "file-uploader__item",
              "data-status": T.status,
              children: [
                /* @__PURE__ */ a("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a($u, { file: T.file, size: 16 }) }),
                /* @__PURE__ */ _("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ a("span", { className: "file-uploader__item-name", title: T.file.name, children: T.file.name }),
                  /* @__PURE__ */ _("span", { className: "file-uploader__item-meta", children: [
                    Mn(T.file.size),
                    T.errorMessage && /* @__PURE__ */ _("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      T.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ _("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  T.status === "uploading" && /* @__PURE__ */ a(Ai, { size: 16, className: "file-uploader__spin" }),
                  T.status === "uploaded" && /* @__PURE__ */ a(ke, { size: 16 }),
                  T.status === "error" && /* @__PURE__ */ a(ct, { size: 16 })
                ] }),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${T.file.name}`,
                    disabled: T.status === "uploading",
                    onClick: () => z(T.id),
                    children: /* @__PURE__ */ a(Oe, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            T.id
          )) })
        ] }),
        s && m && X && /* @__PURE__ */ a("div", { className: "file-uploader__actions", children: /* @__PURE__ */ _(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !ne || W || u,
            onClick: Z,
            children: [
              /* @__PURE__ */ a(Oi, { size: 14, "aria-hidden": "true" }),
              W ? "Uploading…" : "Upload files"
            ]
          }
        ) }),
        r && /* @__PURE__ */ a("span", { className: "file-uploader__hint", children: r }),
        /* @__PURE__ */ a(
          "input",
          {
            ref: M,
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
const zu = {
  s: { svgSize: 16, strokeWidth: 2, r: 6, cx: 8, cy: 8 },
  m: { svgSize: 32, strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l: { svgSize: 64, strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 }
};
function Ot({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": o,
  className: i
}) {
  const s = R.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = zu[e], p = 2 * Math.PI * f, m = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _(
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
                  strokeDasharray: m,
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
function ju(e) {
  var r;
  const t = e.type.toLowerCase(), n = ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "";
  return t.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"].includes(n) ? "image" : t === "application/pdf" || n === "pdf" ? "pdf" : t === "text/plain" || n === "txt" ? "text" : t === "text/csv" || n === "csv" ? "csv" : "unsupported";
}
function Wu(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Vu(e) {
  return e.trim().split(`
`).map(
    (t) => t.split(",").map((n) => n.trim().replace(/^"(.*)"$/, "$1"))
  );
}
const Vr = 50, Hr = 200, Ur = 25;
function Hp({
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
  className: m,
  "aria-label": b
}) {
  const v = oe(), g = ju(e), [w, N] = ee(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = ee(100), [E, M] = ee(0), [x, I] = ee(1), [A, k] = ee(null), [S, P] = ee(null), [F, z] = ee("");
  ue(() => {
    C(100), M(0), I(1), k(null), P(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), ue(() => {
    if (g !== "text" && g !== "csv") return;
    let V = !1;
    return fetch(e.url).then((J) => {
      if (!J.ok) throw new Error(`HTTP ${J.status}`);
      return J.text();
    }).then((J) => {
      V || (g === "text" ? k(J) : P(Vu(J)), N("loaded"));
    }).catch(() => {
      V || N("error");
    }), () => {
      V = !0;
    };
  }, [e.url, g]);
  const Z = () => {
    N("loaded"), z("File loaded");
  }, $ = () => {
    N("error"), z("File failed to load");
  }, j = () => N("loaded"), D = de(() => C((V) => Math.min(V + Ur, Hr)), []), O = de(() => C((V) => Math.max(V - Ur, Vr)), []), Y = de(() => M((V) => (V + 90) % 360), []), X = de(() => {
    C(100), M(0);
  }, []), ne = (t == null ? void 0 : t.length) ?? 0, W = ne > 1 && n > 0, Q = ne > 1 && n < ne - 1, T = () => p == null ? void 0 : p(n - 1), H = () => p == null ? void 0 : p(n + 1), U = e.pageCount ?? 0, re = U > 1 && x > 1, te = U > 1 && x < U, se = () => {
    if (u)
      u(e);
    else {
      const V = document.createElement("a");
      V.href = e.url, V.download = e.name, V.click();
    }
  }, me = `scale(${y / 100}) rotate(${E}deg)`, B = () => {
    if (w === "error")
      return /* @__PURE__ */ _("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(ji, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (w === "unsupported")
      return /* @__PURE__ */ _("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(Jr, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ _("button", { type: "button", className: "file-viewer__empty-action", onClick: se, children: [
          /* @__PURE__ */ a(mr, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ _("div", { className: "file-viewer__img-wrap", children: [
        w === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Ot, { size: "m" }) }),
        /* @__PURE__ */ a(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": w === "loaded" || void 0,
            style: { transform: me },
            onLoad: Z,
            onError: $
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ _("div", { className: "file-viewer__pdf-wrap", children: [
        w === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Ot, { size: "m" }) }),
        /* @__PURE__ */ a(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": w === "loaded" || void 0,
            onLoad: j
          }
        )
      ] });
    if (g === "text")
      return w === "loading" ? /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Ot, { size: "m" }) }) : /* @__PURE__ */ _("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ _("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ a(_n, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ a("pre", { className: "file-viewer__text", children: A })
      ] });
    if (g === "csv") {
      if (w === "loading")
        return /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(Ot, { size: "m" }) });
      if (!(S != null && S.length))
        return /* @__PURE__ */ _("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ a(Wi, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [V, ...J] = S;
      return /* @__PURE__ */ a("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ _("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: V.map((he, ve) => /* @__PURE__ */ a("th", { className: "file-viewer__th", children: he }, ve)) }) }),
        /* @__PURE__ */ a("tbody", { children: J.map((he, ve) => /* @__PURE__ */ a("tr", { className: "file-viewer__tr", children: he.map((an, sn) => /* @__PURE__ */ a("td", { className: "file-viewer__td", children: an }, sn)) }, ve)) })
      ] }) });
    }
    return null;
  }, G = g === "image", q = G && l, L = G && c;
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["file-viewer", m].filter(Boolean).join(" "),
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
            children: F
          }
        ),
        r && /* @__PURE__ */ _("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ a("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ _("div", { className: "file-viewer__header-actions", children: [
            q && /* @__PURE__ */ _("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Li, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= Vr,
                  onClick: O
                }
              ),
              /* @__PURE__ */ _("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Bi, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= Hr,
                  onClick: D
                }
              )
            ] }),
            L && /* @__PURE__ */ a(
              ge,
              {
                icon: /* @__PURE__ */ a(Fi, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: Y
              }
            ),
            s && d && /* @__PURE__ */ a(
              ge,
              {
                icon: /* @__PURE__ */ a($i, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ _(Pe, { children: [
              /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Xe, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ _(Ae, { align: "end", children: [
                i && /* @__PURE__ */ _(ae, { onSelect: se, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(mr, { size: 14 }) }),
                  "Download"
                ] }),
                G && /* @__PURE__ */ _(ae, { onSelect: X, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(zi, { size: 14 }) }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ _(ae, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Qr, { size: 14 }) }),
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
            children: B()
          }
        ),
        o && /* @__PURE__ */ _("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ _("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: Wu(e.size) }),
            e.uploadDate && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ _("div", { className: "file-viewer__footer-nav", children: [
            U > 1 && /* @__PURE__ */ _("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(pt, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !re,
                  onClick: () => I((V) => V - 1)
                }
              ),
              /* @__PURE__ */ _("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                x,
                " / ",
                U
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(ot, { size: 14 }),
                  "aria-label": "Next page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !te,
                  onClick: () => I((V) => V + 1)
                }
              )
            ] }),
            ne > 1 && /* @__PURE__ */ _("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(pt, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !W,
                  onClick: T
                }
              ),
              /* @__PURE__ */ _("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                n + 1,
                " / ",
                ne,
                " files"
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(ot, { size: 14 }),
                  "aria-label": "Next file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !Q,
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
function Up({ text: e, id: t, children: n, className: r }) {
  return /* @__PURE__ */ a(
    "p",
    {
      id: t,
      className: ["hint", r].filter(Boolean).join(" "),
      children: n ?? e
    }
  );
}
const ii = Dn({ onClose: () => {
}, titleId: "" }), Hu = () => Ln(ii), Gr = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function Uu(e, t) {
  ue(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(Gr);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(Gr));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [t, e]);
}
function Gu({
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
  const f = oe(), u = le(null), d = le(null), [p, m] = ee(e), [b, v] = ee(!1);
  if (ue(() => {
    if (e) {
      d.current = document.activeElement, m(!0);
      const w = requestAnimationFrame(
        () => requestAnimationFrame(() => v(!0))
      );
      return () => cancelAnimationFrame(w);
    } else {
      v(!1);
      const w = window.setTimeout(() => m(!1), 260);
      return () => window.clearTimeout(w);
    }
  }, [e]), ue(() => {
    if (!e) return;
    const w = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [e, t]), ue(() => {
    if (!e || i) return;
    const w = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = w;
    };
  }, [e, i]), Uu(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ _(ii.Provider, { value: { onClose: t, titleId: f }, children: [
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
  return i ? g : Bn.createPortal(g, document.body);
}
function Gp({ title: e, description: t, actions: n, className: r }) {
  const { onClose: o, titleId: i } = Hu();
  return /* @__PURE__ */ _("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ _("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ a("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ a("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ _("div", { className: "drawer__header-actions", children: [
      n,
      /* @__PURE__ */ a(
        ge,
        {
          icon: /* @__PURE__ */ a(Oe, { size: 18, "aria-hidden": "true" }),
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
function Kp({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__tools", t].filter(Boolean).join(" "), children: e });
}
function Yp({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__content", t].filter(Boolean).join(" "), children: e });
}
function Xp({ title: e, count: t, link: n, divider: r, children: o, className: i }) {
  const s = e || t !== void 0 || n;
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["drawer__section", i].filter(Boolean).join(" "),
      "data-divider": r || void 0,
      children: [
        s && /* @__PURE__ */ _("div", { className: "drawer__section-header", children: [
          /* @__PURE__ */ _("div", { className: "drawer__section-header-start", children: [
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
function qp({
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
  return /* @__PURE__ */ _(
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
function Zp({
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
  const d = s !== void 0, [p, m] = ee(l), b = d ? s : p, v = () => {
    if (r) return;
    const w = !b;
    d || m(w), c == null || c(w), i == null || i();
  }, g = o ? "a" : "button";
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["drawer__multi-item", u].filter(Boolean).join(" "),
      "data-expanded": b || void 0,
      children: [
        /* @__PURE__ */ _(
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
                _t,
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
function Qp({
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
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("span", { className: "drawer__list-item-main", children: [
          /* @__PURE__ */ _("span", { className: "drawer__list-item-top", children: [
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
function Jp({
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
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("span", { className: "drawer__notification-body", children: [
          /* @__PURE__ */ _("span", { className: "drawer__notification-top", children: [
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
function em({
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
const tm = R.forwardRef(
  function({ variant: t = "loud", size: n = "100", target: r, rel: o, children: i, className: s, ...l }, c) {
    const f = r === "_blank", u = f ? "noopener noreferrer" : o;
    return /* @__PURE__ */ _(
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
          f && /* @__PURE__ */ a(Qr, { "aria-hidden": "true" })
        ]
      }
    );
  }
), Ku = R.forwardRef(
  function({ variant: t = "fill", size: n = "medium", color: r = "primary", icon: o, children: i, className: s, title: l, ...c }, f) {
    const d = l ?? (typeof i == "string" ? i : void 0);
    return /* @__PURE__ */ _(
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
);
function Yu(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const Xu = R.forwardRef(
  function({ name: t, src: n, size: r = "l", href: o, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, m] = R.useState(!1), b = !!n && !p, v = Yu(t, r), g = !!o || !!i, w = {
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
        onError: () => m(!0)
      }
    ) : /* @__PURE__ */ a("span", { className: "avatar__initials", "aria-hidden": "true", children: v });
    return o ? /* @__PURE__ */ a(
      "a",
      {
        ref: d,
        href: o,
        tabIndex: f,
        ...w,
        children: N
      }
    ) : i ? /* @__PURE__ */ a(
      "button",
      {
        ref: d,
        type: "button",
        onClick: i,
        tabIndex: f,
        ...w,
        children: N
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        ref: d,
        tabIndex: f,
        ...w,
        children: N
      }
    );
  }
), nm = R.forwardRef(
  function({ children: t, max: n, overlap: r = !0, size: o = "l", className: i, ...s }, l) {
    const c = R.Children.toArray(t), f = n !== void 0 ? c.slice(0, n) : c, u = n !== void 0 ? Math.max(0, c.length - n) : 0;
    return /* @__PURE__ */ _(
      "div",
      {
        ref: l,
        className: ["avatar-group", i].filter(Boolean).join(" "),
        "data-overlap": r ? "true" : "false",
        ...s,
        children: [
          f,
          u > 0 && /* @__PURE__ */ _(
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
), qu = {
  active: "Active",
  away: "Away",
  busy: "Busy",
  offline: "Offline"
}, rm = R.forwardRef(
  function({ children: t, status: n, size: r = "l", className: o, style: i }, s) {
    return /* @__PURE__ */ _(
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
              "aria-label": qu[n]
            }
          )
        ]
      }
    );
  }
), Zu = R.forwardRef(
  function({ children: t, size: n = "medium", color: r = "gray", icon: o, className: i, ...s }, l) {
    return /* @__PURE__ */ _(
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
), om = R.forwardRef(
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
), am = R.forwardRef(
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
), im = R.forwardRef(
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
), sm = R.forwardRef(
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
), lm = R.forwardRef(
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
), cm = R.forwardRef(
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
), dm = R.forwardRef(
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
), um = R.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ a(
      oi,
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
  informative: no,
  positive: to,
  notice: eo,
  negative: Ve
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
}, fm = R.forwardRef(
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
    return /* @__PURE__ */ _(
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
          /* @__PURE__ */ _("div", { className: "banner-alert__content", children: [
            n && /* @__PURE__ */ a("strong", { className: "banner-alert__title", children: n }),
            /* @__PURE__ */ a("p", { className: "banner-alert__message", children: r })
          ] }),
          i && /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Oe, { size: 14, "aria-hidden": "true" }),
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
), si = R.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function tf() {
  return R.useContext(si);
}
const nf = R.forwardRef(
  function({
    collapsible: t = !1,
    defaultExpanded: n = !0,
    onExpandedChange: r,
    children: o,
    className: i,
    ...s
  }, l) {
    const [c, f] = R.useState(n), u = R.useRef(r);
    u.current = r;
    const d = R.useCallback(() => {
      f((v) => {
        var w;
        const g = !v;
        return (w = u.current) == null || w.call(u, g), g;
      });
    }, []), p = R.Children.toArray(o), m = p.find(
      (v) => R.isValidElement(v) && v.type.displayName === "PanelHeader"
    ), b = p.filter(
      (v) => !R.isValidElement(v) || v.type.displayName !== "PanelHeader"
    );
    return /* @__PURE__ */ a(si.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ _(
      "div",
      {
        ref: l,
        className: ["panel", i].filter(Boolean).join(" "),
        "data-expanded": t ? String(c) : void 0,
        ...s,
        children: [
          m,
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
const rf = R.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: o, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = tf();
    return /* @__PURE__ */ _(
      "div",
      {
        ref: l,
        className: ["panel__header", i].filter(Boolean).join(" "),
        ...s,
        children: [
          /* @__PURE__ */ _("div", { className: "panel__header-title", children: [
            /* @__PURE__ */ _("div", { className: "panel__header-title-row", children: [
              t && /* @__PURE__ */ a("span", { className: "panel__header-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ a("strong", { className: "panel__title typography-heading-m", children: o })
            ] }),
            n && /* @__PURE__ */ a("p", { className: "panel__subtitle", children: n })
          ] }),
          c ? /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(
                _t,
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
const of = R.forwardRef(
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
const af = R.forwardRef(
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
const sf = R.forwardRef(
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
    const u = r, d = /* @__PURE__ */ _(
      "section",
      {
        ref: f,
        className: ["section", l].filter(Boolean).join(" "),
        "data-variant": t,
        ...c,
        children: [
          (n || o) && /* @__PURE__ */ _("div", { className: "section__header", children: [
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
    return i ? /* @__PURE__ */ _(we, { children: [
      d,
      /* @__PURE__ */ a("hr", { className: "section__divider" })
    ] }) : d;
  }
);
sf.displayName = "Section";
const li = R.createContext({
  onClose: () => {
  },
  titleId: ""
});
function lf() {
  return R.useContext(li);
}
const Kr = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function cf(e, t) {
  R.useEffect(() => {
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
let df = 0;
function uf({ open: e, onClose: t, size: n = "medium", children: r, className: o }) {
  const [i] = R.useState(() => `dialog-title-${++df}`), s = R.useRef(null), [l, c] = R.useState(e), [f, u] = R.useState(e);
  return R.useEffect(() => {
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
  }, [e]), R.useEffect(() => {
    if (!e) return;
    function d(p) {
      p.key === "Escape" && t();
    }
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [e, t]), R.useEffect(() => {
    if (!e) return;
    const d = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = d;
    };
  }, [e]), cf(s, e), l ? Bn.createPortal(
    /* @__PURE__ */ _(li.Provider, { value: { onClose: t, titleId: i }, children: [
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
const ff = R.forwardRef(
  function({ icon: t, children: n, className: r, ...o }, i) {
    const { onClose: s, titleId: l } = lf();
    return /* @__PURE__ */ _(
      "div",
      {
        ref: i,
        className: ["dialog__header", r].filter(Boolean).join(" "),
        ...o,
        children: [
          /* @__PURE__ */ _("div", { className: "dialog__header-start", children: [
            t && /* @__PURE__ */ a("span", { className: "dialog__header-icon", "aria-hidden": "true", children: t }),
            /* @__PURE__ */ a("h2", { id: l, className: "dialog__title", children: n })
          ] }),
          /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Oe, { "aria-hidden": "true" }),
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
const pf = R.forwardRef(
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
const mf = R.forwardRef(
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
const ci = R.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function di() {
  return R.useContext(ci);
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
  const [s] = R.useState(() => `tabs-${++hf}`);
  return /* @__PURE__ */ a(ci.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ a("div", { className: ["tabs", o].filter(Boolean).join(" "), ...i, children: r }) });
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
  const { activeTab: f, onChange: u, size: d, baseId: p } = di(), m = f === e, b = r || !!i;
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["tab-item", c].filter(Boolean).join(" "),
      "data-selected": m ? "" : void 0,
      "data-size": d,
      "data-disabled": s ? "" : void 0,
      children: [
        /* @__PURE__ */ _(
          "button",
          {
            type: "button",
            role: "tab",
            id: `${p}-tab-${e}`,
            "aria-selected": m,
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
        b && /* @__PURE__ */ _("span", { className: "tab__actions", children: [
          i && /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Vi, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: m ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Oe, { size: 14 }),
              "aria-label": "Close tab",
              tabIndex: m ? 0 : -1,
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
  const { activeTab: o, baseId: i } = di();
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
const ui = R.createContext({ size: "medium" });
function wf() {
  return R.useContext(ui);
}
function yf({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ a(ui.Provider, { value: { size: e }, children: /* @__PURE__ */ a(
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
  className: m
}) {
  const { size: b } = wf(), v = o ?? b, g = i || !!s || !!l, w = /* @__PURE__ */ _(we, { children: [
    n && /* @__PURE__ */ a("span", { className: "list-item__before", children: n }),
    /* @__PURE__ */ _("span", { className: "list-item__content", children: [
      /* @__PURE__ */ a("span", { className: "list-item__header", children: e }),
      t && /* @__PURE__ */ a("span", { className: "list-item__description", children: t })
    ] }),
    r && /* @__PURE__ */ a("span", { className: "list-item__after", children: r })
  ] }), N = l ? /* @__PURE__ */ a("a", { href: l, className: "list-item__inner", children: w }) : s ? /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "list-item__inner",
      onClick: s,
      disabled: p,
      children: w
    }
  ) : /* @__PURE__ */ a("div", { className: "list-item__inner", children: w });
  return /* @__PURE__ */ _(
    "li",
    {
      className: ["list-item", m].filter(Boolean).join(" "),
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
const pm = R.forwardRef(
  function({ label: t, labelPosition: n = "after", disabled: r, id: o, className: i, ...s }, l) {
    const c = oe(), f = o ?? c;
    return /* @__PURE__ */ _(
      "label",
      {
        htmlFor: f,
        className: ["switch", i].filter(Boolean).join(" "),
        "data-disabled": r || void 0,
        "data-label-position": t ? n : void 0,
        children: [
          t && n === "before" && /* @__PURE__ */ a("span", { className: "switch__label", children: t }),
          /* @__PURE__ */ _("span", { className: "switch__control", children: [
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
), fi = R.createContext({
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
  const s = R.Children.map(n, (l) => R.isValidElement(l) ? (i++, R.cloneElement(l, {
    _stepNumber: i
  })) : l);
  return /* @__PURE__ */ a(fi.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ a(
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
  const { variant: p, interactive: m } = R.useContext(fi), b = m && !o && !!l, v = () => n === "checked" ? /* @__PURE__ */ a(ke, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ a(ct, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ a(Ve, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ a("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ _(we, { children: [
    /* @__PURE__ */ a("p", { className: "stepper-step__title", children: e }),
    t && /* @__PURE__ */ a("p", { className: "stepper-step__description", children: t })
  ] });
  return /* @__PURE__ */ _(
    "li",
    {
      className: ["stepper-step", u].filter(Boolean).join(" "),
      "data-type": n,
      "data-active": r || void 0,
      "data-disabled": o || void 0,
      "data-interactive": m && !o || void 0,
      "aria-current": r ? "step" : void 0,
      ...d,
      children: [
        /* @__PURE__ */ _("div", { className: "stepper-step__track", "aria-hidden": "true", children: [
          /* @__PURE__ */ a("div", { className: "stepper-step__indicator", children: v() }),
          /* @__PURE__ */ a("div", { className: "stepper-step__connector" })
        ] }),
        /* @__PURE__ */ _("div", { className: "stepper-step__body", children: [
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
const mm = R.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: o, className: i, ...s }, l) {
    return /* @__PURE__ */ _(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          o,
          /* @__PURE__ */ a("span", { className: "icon-badge__counter", children: /* @__PURE__ */ a(gt, { count: t, size: "small", color: n, variant: r }) })
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
function pi(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Rf(e) {
  const t = pi(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function hm({
  title: e,
  description: t,
  date: n,
  showBreadcrumb: r = !1,
  breadcrumbItems: o = [],
  onBreadcrumbNavigate: i,
  tags: s = [],
  mainActions: l,
  secondaryToolbar: c,
  mobileMenuActions: f,
  lastUpdateInfo: u,
  sticky: d = !1,
  compact: p = !1,
  truncateTitle: m = !1,
  className: b,
  style: v
}) {
  const [g, w] = ee("minimal"), N = le(null), y = le(null), C = le(null), E = le(null), M = de(() => {
    var Q, T, H;
    if (!(l != null && l.length)) return;
    let W;
    if (m)
      W = ((Q = C.current) == null ? void 0 : Q.offsetWidth) ?? 0;
    else {
      const U = ((T = N.current) == null ? void 0 : T.offsetWidth) ?? 0, re = ((H = y.current) == null ? void 0 : H.scrollWidth) ?? 0;
      W = U - re - 24;
    }
    c && E.current && (W -= E.current.offsetWidth + 17), w(Sf(W, l.length));
  }, [l, c, m]);
  Tn(() => {
    M();
    const W = m ? C.current : N.current;
    if (!W) return;
    const Q = new ResizeObserver(M);
    return Q.observe(W), () => Q.disconnect();
  }, [M, m]);
  const x = !!(l != null && l.length), I = x || !!c || !!u, A = !!c && x, k = r && o.length >= 2 ? o[o.length - 2] : null, S = l ? Rf(l) : [], P = l ? pi(l) : void 0, F = S.length > 0 || ((f == null ? void 0 : f.length) ?? 0) > 0, z = x || ((f == null ? void 0 : f.length) ?? 0) > 0, Z = r && o.length > 0 ? /* @__PURE__ */ a(
    Cu,
    {
      items: o,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, $ = n ? /* @__PURE__ */ a("p", { className: "rpl-page-header__date", children: n }) : null, j = /* @__PURE__ */ a(
    "h1",
    {
      className: [
        "rpl-page-header__title",
        p ? "rpl-page-header__title--compact" : "",
        m ? "rpl-page-header__title--truncate" : ""
      ].filter(Boolean).join(" "),
      title: m ? e : void 0,
      children: e
    }
  ), D = /* @__PURE__ */ _("div", { className: "rpl-page-header__heading-row", children: [
    j,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map((W, Q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: W }, Q)
    )) })
  ] }), O = /* @__PURE__ */ a("div", { className: "rpl-page-header__heading-row", children: j }), Y = t ? /* @__PURE__ */ a("p", { className: "rpl-page-header__description", children: t }) : null, X = /* @__PURE__ */ _("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
    Z,
    /* @__PURE__ */ _(
      "div",
      {
        ref: N,
        className: [
          "rpl-page-header__main-row",
          m ? "rpl-page-header__main-row--split" : ""
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ _("div", { ref: y, className: "rpl-page-header__title-area", children: [
            $,
            D,
            Y
          ] }),
          I && /* @__PURE__ */ _(
            "div",
            {
              ref: C,
              className: "rpl-page-header__actions",
              children: [
                u && /* @__PURE__ */ a("span", { className: "rpl-page-header__last-update", children: u }),
                (x || !!c) && /* @__PURE__ */ _("div", { className: "rpl-page-header__actions-row", children: [
                  c && /* @__PURE__ */ a(
                    "div",
                    {
                      ref: E,
                      className: "rpl-page-header__secondary-toolbar",
                      children: c
                    }
                  ),
                  A && /* @__PURE__ */ a(
                    "div",
                    {
                      className: "rpl-page-header__toolbar-divider",
                      role: "separator",
                      "aria-hidden": "true"
                    }
                  ),
                  x && /* @__PURE__ */ a(
                    Pu,
                    {
                      actions: l,
                      variant: g,
                      className: "rpl-page-header__main-actions"
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] }), ne = /* @__PURE__ */ _("div", { className: "rpl-page-header__mobile-layout", "aria-hidden": "true", children: [
    k && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-back", children: k.href ? /* @__PURE__ */ _(
      "a",
      {
        href: k.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? (W) => {
          W.preventDefault(), i(k.href);
        } : void 0,
        children: [
          /* @__PURE__ */ a(pt, { size: 16, "aria-hidden": "true" }),
          k.label
        ]
      }
    ) : /* @__PURE__ */ _("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ a(pt, { size: 16, "aria-hidden": "true" }),
      k.label
    ] }) }),
    $,
    O,
    Y,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-tags", children: s.map((W, Q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: W }, Q)
    )) }),
    u && /* @__PURE__ */ a("p", { className: "rpl-page-header__last-update", children: u }),
    z && /* @__PURE__ */ _("div", { className: "rpl-page-header__mobile-actions", children: [
      F && /* @__PURE__ */ _(Pe, { children: [
        /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
          ge,
          {
            icon: /* @__PURE__ */ a(Zr, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ _(Ae, { align: "start", sideOffset: 4, children: [
          f && f.length > 0 && /* @__PURE__ */ _(we, { children: [
            f.map((W) => /* @__PURE__ */ _(
              ae,
              {
                disabled: W.disabled,
                onSelect: W.onClick,
                children: [
                  W.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: W.icon }),
                  W.label
                ]
              },
              W.id
            )),
            S.length > 0 && /* @__PURE__ */ a(it, {})
          ] }),
          S.map((W, Q) => {
            var T;
            return /* @__PURE__ */ _("span", { children: [
              Q > 0 && W.type !== ((T = S[Q - 1]) == null ? void 0 : T.type) && /* @__PURE__ */ a(it, {}),
              /* @__PURE__ */ _(
                ae,
                {
                  disabled: W.disabled,
                  onSelect: W.onClick,
                  children: [
                    W.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: W.icon }),
                    W.label
                  ]
                }
              )
            ] }, W.id);
          })
        ] })
      ] }),
      P && /* @__PURE__ */ a(
        fe,
        {
          variant: "fill",
          color: "primary",
          size: "medium",
          disabled: P.disabled,
          loading: P.loading,
          iconStart: P.icon,
          onClick: P.onClick,
          className: "rpl-page-header__mobile-primary",
          children: P.label
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ _(
    "header",
    {
      className: [
        "rpl-page-header",
        d ? "rpl-page-header--sticky" : "",
        p ? "rpl-page-header--compact" : "",
        b
      ].filter(Boolean).join(" "),
      style: v,
      children: [
        X,
        ne
      ]
    }
  );
}
function vm({
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
  const u = oe(), d = `${u}-label`, p = `${u}-live`, m = Math.min(100, Math.max(0, t)), b = i || o === "success" ? void 0 : `${m}%`, v = i ? { role: "progressbar", "aria-label": e } : {
    role: "progressbar",
    "aria-valuenow": o === "success" ? 100 : m,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-labelledby": d
  }, g = l ? null : o === "success" ? /* @__PURE__ */ a(ke, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : o === "error" ? /* @__PURE__ */ a(Oe, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ a("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${m}%` }), w = o === "success" ? `${e} complete` : o === "error" ? `${e} failed` : "";
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["progress-bar", c].filter(Boolean).join(" "),
      "data-state": o,
      "data-indeterminate": i ? "" : void 0,
      style: f,
      children: [
        (!s || g) && /* @__PURE__ */ _("div", { className: "progress-bar__header", children: [
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
            children: w
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
function gm({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: o = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Ef(e, 0, 100), f = Mf(n), u = Pf(n, f), d = If(u), p = Af(d, c), m = n / 2, b = n / 2, v = Of(n, r), g = t !== void 0 ? t : `${c}%`, w = i ?? g;
  return /* @__PURE__ */ _(
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
      "aria-label": w,
      children: [
        /* @__PURE__ */ _(
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
                  cx: m,
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
                  cx: m,
                  cy: b,
                  r: u,
                  fill: "none",
                  strokeWidth: f,
                  strokeLinecap: "round",
                  strokeDasharray: d,
                  strokeDashoffset: p,
                  transform: `rotate(-90 ${m} ${b})`
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
const mi = Dn(null);
function Tf() {
  const e = Ln(mi);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function kf({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ a(Ht, { ...t }) : e === "notice" ? /* @__PURE__ */ a(ct, { ...t }) : /* @__PURE__ */ a(Ve, { ...t });
}
const bm = R.forwardRef(
  function({ value: t, label: n, disabled: r, id: o, className: i, ...s }, l) {
    const c = Tf(), f = oe(), u = o ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
    return /* @__PURE__ */ _(
      "label",
      {
        htmlFor: u,
        className: ["radio", i].filter(Boolean).join(" "),
        "data-disabled": d || void 0,
        "data-checked": p || void 0,
        children: [
          /* @__PURE__ */ _("span", { className: "radio__control", children: [
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
), _m = R.forwardRef(
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
    className: m,
    style: b
  }, v) {
    const g = oe(), w = u ?? g, N = oe(), y = oe(), C = [
      i ? N : null,
      l ? y : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a(mi.Provider, { value: { groupValue: t, onValueChange: n, name: w, groupDisabled: f }, children: /* @__PURE__ */ _(
      "fieldset",
      {
        ref: v,
        className: ["radio-group", m].filter(Boolean).join(" "),
        "data-validation": s,
        "data-layout": d,
        "data-disabled": f || void 0,
        "aria-describedby": C,
        "aria-required": c || void 0,
        style: b,
        children: [
          r && /* @__PURE__ */ _("legend", { className: "radio-group__legend", children: [
            r,
            c && /* @__PURE__ */ a("span", { className: "radio-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          o && /* @__PURE__ */ a("p", { className: "radio-group__description", children: o }),
          /* @__PURE__ */ a("div", { className: "radio-group__items", children: p }),
          i && /* @__PURE__ */ a("p", { id: N, className: "radio-group__hint", children: i }),
          l && s && /* @__PURE__ */ _(
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
function st(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function Pn(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function Lf(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const o = (n - t) / r, i = o > 10 ? Math.ceil(o / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function In({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: o,
  visible: i
}) {
  const s = st(e, t, n), l = Pn(s, r);
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
function hi({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: o
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ _(we, { children: [
    e.length > 0 && /* @__PURE__ */ a("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ a(
      "div",
      {
        className: "range__marker",
        style: { left: Pn(st(i, n, r), o) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ a("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ a(
      "span",
      {
        className: "range__indicator",
        style: { left: Pn(st(i.value, n, r), o) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function wm(e) {
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
    validationMessage: m,
    formatValue: b = String,
    disabled: v = !1,
    className: g,
    style: w
  } = e, N = oe(), y = oe(), C = oe(), E = Df[l], M = tt(
    () => c ? Lf(c, o, i, s) : [],
    [c, o, i, s]
  ), x = f.length > 0, I = [
    d ? y : null,
    m ? C : null
  ].filter(Boolean).join(" ") || void 0, A = /* @__PURE__ */ a(
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
  return /* @__PURE__ */ _(
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
      style: w,
      children: [
        n === "top" && A,
        /* @__PURE__ */ _("div", { className: "range__body", children: [
          n === "left" && A,
          /* @__PURE__ */ _("div", { className: "range__track-column", children: [
            u && /* @__PURE__ */ _("div", { className: "range__minmax", "aria-hidden": "true", children: [
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: b(o) }),
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: b(i) })
            ] }),
            /* @__PURE__ */ a(
              "div",
              {
                className: [
                  "range__track-area",
                  x ? "range__track-area--has-indicators" : ""
                ].filter(Boolean).join(" "),
                children: e.dual ? /* @__PURE__ */ a(
                  Ff,
                  {
                    ...e,
                    min: o,
                    max: i,
                    step: s,
                    size: l,
                    thumbSize: E,
                    markerValues: M,
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
                    thumbSize: E,
                    markerValues: M,
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
            m && p && /* @__PURE__ */ _(
              "p",
              {
                id: C,
                className: "range__message",
                role: p === "negative" ? "alert" : void 0,
                children: [
                  /* @__PURE__ */ a(Ve, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
                  m
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
  const [p, m] = ee(!1), v = `${st(e, n, r)}%`;
  return /* @__PURE__ */ _(we, { children: [
    /* @__PURE__ */ a(
      In,
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
        onFocus: () => m(!0),
        onBlur: () => m(!1),
        onPointerDown: () => m(!0),
        onPointerUp: () => m(!1)
      }
    ),
    /* @__PURE__ */ a(
      hi,
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
  describedBy: m
}) {
  const [b, v] = e, [g, w] = ee(null), N = le(null), y = le(null), C = st(b, i, s), E = st(v, i, s);
  function M(k) {
    const S = Math.min(Number(k.target.value), v - l);
    t([S, v]);
  }
  function x(k) {
    const S = Math.max(Number(k.target.value), b + l);
    t([b, S]);
  }
  const I = r ?? `Minimum ${n}`, A = o ?? `Maximum ${n}`;
  return /* @__PURE__ */ _(we, { children: [
    /* @__PURE__ */ a(
      In,
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
      In,
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
          width: `${E - C}%`
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
        "aria-describedby": m,
        "aria-valuetext": d(b),
        style: { zIndex: g === "low" ? 2 : 1 },
        onChange: M,
        onFocus: () => w("low"),
        onBlur: () => w(null),
        onPointerDown: () => w("low"),
        onPointerUp: () => {
          document.activeElement !== N.current && w(null);
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
        "aria-label": A,
        "aria-describedby": m,
        "aria-valuetext": d(v),
        style: { zIndex: g === "high" ? 2 : 1 },
        onChange: x,
        onFocus: () => w("high"),
        onBlur: () => w(null),
        onPointerDown: () => w("high"),
        onPointerUp: () => {
          document.activeElement !== y.current && w(null);
        }
      }
    ),
    /* @__PURE__ */ a(
      hi,
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
function Yr({ item: e }) {
  const t = e.count && e.count > 0 ? `${e.label} (${e.count > 99 ? "99+" : e.count})` : e.label;
  return /* @__PURE__ */ _("div", { className: "navbar__nav-btn-wrapper", children: [
    /* @__PURE__ */ _(
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
            gt,
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
  const m = i.slice(0, 5), b = s.slice(0, 4), v = s.slice(4), g = s.length > 0, w = v.length > 0, N = /* @__PURE__ */ _(we, { children: [
    /* @__PURE__ */ a("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ a(zf, {}) }),
    t && /* @__PURE__ */ a("span", { className: "navbar__product-name", "aria-hidden": "true", children: t })
  ] });
  return /* @__PURE__ */ _(
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
          Ku,
          {
            variant: "fill",
            size: "small",
            color: o,
            className: "navbar__tenant-badge",
            title: r,
            children: r
          }
        ) }),
        m.length > 0 && /* @__PURE__ */ a("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: m.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Yr, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ _(we, { children: [
          l && /* @__PURE__ */ a("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ _("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            b.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Yr, { item: y }) }, y.id)),
            w && /* @__PURE__ */ a("li", { children: /* @__PURE__ */ _(Pe, { children: [
              /* @__PURE__ */ _("div", { className: "navbar__nav-btn-wrapper", children: [
                /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
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
              /* @__PURE__ */ a(Ae, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ _(
                ae,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ a("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ a(
                      gt,
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
        /* @__PURE__ */ a("div", { className: "navbar__user", children: /* @__PURE__ */ _(Pe, { children: [
          /* @__PURE__ */ _("div", { className: "navbar__nav-btn-wrapper", children: [
            /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
              Xu,
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
          /* @__PURE__ */ _(Ae, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ a(ai, { children: c }),
            u.map((y) => /* @__PURE__ */ _("span", { children: [
              y.separator && /* @__PURE__ */ a(it, {}),
              /* @__PURE__ */ _(ae, { onSelect: y.onClick, children: [
                y.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: y.icon }),
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
  return /* @__PURE__ */ _(
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
function ym({
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
  return /* @__PURE__ */ _(Ja, { children: [
    /* @__PURE__ */ _(
      "div",
      {
        className: ["split-button", u].filter(Boolean).join(" "),
        "data-variant": r,
        "data-color": o,
        "data-size": i,
        "data-disabled": l || void 0,
        style: d,
        children: [
          /* @__PURE__ */ _(
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
          /* @__PURE__ */ a(ei, { asChild: !0, children: /* @__PURE__ */ a(
            "button",
            {
              className: "split-button__trigger",
              "aria-label": f,
              disabled: l,
              children: /* @__PURE__ */ a(_t, { className: "split-button__chevron", "aria-hidden": "true" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a(ur, { children: /* @__PURE__ */ a(
      ti,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ _(
          ni,
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
  negative: /* @__PURE__ */ a(Ve, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  notice: /* @__PURE__ */ a(ct, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ a(Ht, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, Nm = R.forwardRef(
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
    required: m,
    disabled: b,
    value: v,
    defaultValue: g,
    onChange: w,
    ...N
  }, y) {
    const C = oe(), E = oe(), M = oe(), x = oe(), [I, A] = ee(() => String(v ?? g ?? "").length), k = v !== void 0 ? String(v).length : I, S = le(null);
    kn(y, () => S.current, []), Tn(() => {
      if (i !== "auto") return;
      const $ = S.current;
      if (!$) return;
      $.style.height = "auto";
      const j = $.scrollHeight, D = l !== void 0 ? Math.min(j, l) : j, O = s !== void 0 ? Math.max(D, s) : D;
      $.style.height = `${O}px`, $.style.overflowY = l !== void 0 && j >= l ? "auto" : "hidden";
    }, [k, i, s, l]);
    function P($) {
      A($.target.value.length), w == null || w($);
    }
    const F = !!(o && r), z = [
      F ? M : n ? E : null,
      c && p != null ? x : null
    ].filter(Boolean).join(" ") || void 0, Z = i === "auto" && s != null ? { minHeight: s } : {};
    return /* @__PURE__ */ _(
      "div",
      {
        className: ["textarea", f].filter(Boolean).join(" "),
        "data-validation": r,
        "data-disabled": b || void 0,
        style: u,
        children: [
          /* @__PURE__ */ _("label", { htmlFor: C, className: "textarea__label", children: [
            t,
            m && /* @__PURE__ */ a("span", { className: "textarea__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: S,
              id: C,
              className: "textarea__field",
              rows: d,
              maxLength: p,
              required: m,
              disabled: b,
              value: v,
              defaultValue: g,
              onChange: P,
              "aria-required": m || void 0,
              "aria-invalid": r === "negative" || void 0,
              "aria-describedby": z,
              "data-resize": i,
              style: Z,
              ...N
            }
          ),
          (n || F || c && p != null) && /* @__PURE__ */ _("div", { className: "textarea__footer", children: [
            F ? /* @__PURE__ */ _(
              "p",
              {
                id: M,
                className: "textarea__message",
                role: r === "negative" ? "alert" : void 0,
                children: [
                  Wf[r],
                  o
                ]
              }
            ) : n ? /* @__PURE__ */ a("p", { id: E, className: "textarea__hint", children: n }) : null,
            c && p != null && /* @__PURE__ */ _(
              "div",
              {
                id: x,
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
  negative: /* @__PURE__ */ a(Ve, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ a(ct, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ a(Ht, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, Hf = { small: 14, medium: 16, large: 18 }, Cm = R.forwardRef(
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
    className: m,
    style: b,
    // Extracted to handle behaviour
    type: v = "text",
    required: g,
    disabled: w,
    readOnly: N,
    value: y,
    defaultValue: C,
    onChange: E,
    onFocus: M,
    onBlur: x,
    maxLength: I,
    ...A
  }, k) {
    const S = oe(), P = oe(), F = oe(), z = oe(), [Z, $] = ee(!1), [j, D] = ee(!1), [O, Y] = ee(() => String(y ?? C ?? "").length), X = y !== void 0 ? String(y).length : O, ne = le(null);
    kn(k, () => ne.current, []);
    const W = v === "password" && Z ? "text" : v, Q = Hf[s], T = v === "search" && !f ? /* @__PURE__ */ a(Hi, { size: Q, "aria-hidden": "true" }) : f;
    let H = null;
    v === "password" ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": Z ? "Hide password" : "Show password",
        tabIndex: 0,
        onClick: () => {
          var q;
          $((L) => !L), (q = ne.current) == null || q.focus();
        },
        children: Z ? /* @__PURE__ */ a(Jr, { size: Q, "aria-hidden": "true" }) : /* @__PURE__ */ a(Ui, { size: Q, "aria-hidden": "true" })
      }
    ) : v === "search" && X > 0 ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const q = ne.current;
          q && (q.value = "", q.focus()), Y(0), p == null || p();
        },
        children: /* @__PURE__ */ a(Oe, { size: Q, "aria-hidden": "true" })
      }
    ) : H = u ?? null;
    const U = !!T, re = !!H, te = !!(i && o), se = [
      te ? F : r ? P : null,
      d && I != null ? z : null
    ].filter(Boolean).join(" ") || void 0;
    function me(q) {
      Y(q.target.value.length), E == null || E(q);
    }
    function B(q) {
      D(!0), M == null || M(q);
    }
    function G(q) {
      D(!1), x == null || x(q);
    }
    return /* @__PURE__ */ _(
      "div",
      {
        className: ["text-input", m].filter(Boolean).join(" "),
        "data-size": s,
        "data-validation": o,
        "data-disabled": w || void 0,
        style: b,
        children: [
          /* @__PURE__ */ _(
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
          /* @__PURE__ */ _(
            "div",
            {
              className: "text-input__wrapper",
              "data-focused": j || void 0,
              "data-disabled": w || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ a("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ _(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": U || void 0,
                    "data-icon-end": re || void 0,
                    children: [
                      T && /* @__PURE__ */ a("span", { className: "text-input__icon-start", "aria-hidden": "true", children: T }),
                      /* @__PURE__ */ a(
                        "input",
                        {
                          ref: ne,
                          id: S,
                          className: "text-input__field",
                          type: W,
                          required: g,
                          disabled: w,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: I,
                          onChange: me,
                          onFocus: B,
                          onBlur: G,
                          "aria-required": g || void 0,
                          "aria-invalid": o === "negative" || void 0,
                          "aria-describedby": se,
                          ...A
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
          (r || te || d && I != null) && /* @__PURE__ */ _("div", { className: "text-input__footer", children: [
            te ? /* @__PURE__ */ _(
              "p",
              {
                id: F,
                className: "text-input__message",
                role: o === "negative" ? "alert" : void 0,
                children: [
                  Vf[o],
                  i
                ]
              }
            ) : r ? /* @__PURE__ */ a("p", { id: P, className: "text-input__hint", children: r }) : null,
            d && I != null && /* @__PURE__ */ _(
              "div",
              {
                id: z,
                className: [
                  "text-input__counter",
                  X >= I ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  X,
                  " / ",
                  I
                ]
              }
            )
          ] }),
          d && I != null && /* @__PURE__ */ a("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: X >= I ? `Character limit of ${I} reached` : "" })
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
  neutral: no,
  positive: Ht,
  notice: eo,
  negative: Ve
}, vi = Dn(null);
function Kf({ toast: e, onExitStart: t, onExitComplete: n }) {
  const r = le(!1);
  ue(() => {
    if (!e.duration || e.exiting) return;
    const l = setTimeout(() => t(e.id), e.duration);
    return () => clearTimeout(l);
  }, [e.id, e.duration, e.exiting, t]), ue(() => {
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
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("div", { className: "toast__body", children: [
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
            children: /* @__PURE__ */ a(Oe, { size: 16, "aria-hidden": "true" })
          }
        ),
        e.showProgress && e.duration > 0 && !e.exiting && /* @__PURE__ */ a("div", { className: "toast__progress", "aria-hidden": "true", children: /* @__PURE__ */ a("div", { className: "toast__progress-bar" }) })
      ]
    }
  );
}
function xm({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, o] = ee([]), [i, s] = ee(t), l = de((d) => {
    const p = d.variant ?? "neutral", m = d.duration !== void 0 ? d.duration : Uf[p], b = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
      id: crypto.randomUUID(),
      variant: p,
      title: d.title,
      description: d.description,
      timestamp: d.timestamp,
      icon: d.icon,
      action: d.action,
      showCloseButton: b,
      duration: m,
      showProgress: d.showProgress ?? !1,
      exiting: !1
    };
    return o((g) => {
      const w = [v, ...g];
      return w.length > n ? w.slice(0, n) : w;
    }), v.id;
  }, [n]), c = de((d) => {
    o((p) => p.map((m) => m.id === d ? { ...m, exiting: !0 } : m));
  }, []), f = de(() => {
    o((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = de((d) => {
    o((p) => p.filter((m) => m.id !== d));
  }, []);
  return /* @__PURE__ */ _(vi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Mi(
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
function Sm() {
  const e = Ln(vi);
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
}), Xf = "VisuallyHidden", gi = h.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    ie.span,
    {
      ...e,
      ref: t,
      style: { ...Yf, ...e.style }
    }
  )
);
gi.displayName = Xf;
var qf = gi, [rn] = He("Tooltip", [
  Jt
]), on = Jt(), bi = "TooltipProvider", Zf = 700, An = "tooltip.open", [Qf, fr] = rn(bi), _i = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Zf,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, s = h.useRef(!0), l = h.useRef(!1), c = h.useRef(0);
  return h.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ a(
    Qf,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: h.useCallback(() => {
        window.clearTimeout(c.current), s.current = !1;
      }, []),
      onClose: h.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: h.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
_i.displayName = bi;
var bt = "Tooltip", [Jf, St] = rn(bt), wi = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = fr(bt, e.__scopeTooltip), f = on(t), [u, d] = h.useState(null), p = ze(), m = h.useRef(0), b = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = h.useRef(!1), [w, N] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (x) => {
      x ? (c.onOpen(), document.dispatchEvent(new CustomEvent(An))) : c.onClose(), i == null || i(x);
    },
    caller: bt
  }), y = h.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), C = h.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, g.current = !1, N(!0);
  }, [N]), E = h.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, N(!1);
  }, [N]), M = h.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, N(!0), m.current = 0;
    }, v);
  }, [v, N]);
  return h.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ a(tr, { ...f, children: /* @__PURE__ */ a(
    Jf,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: h.useCallback(() => {
        c.isOpenDelayedRef.current ? M() : C();
      }, [c.isOpenDelayedRef, M, C]),
      onTriggerLeave: h.useCallback(() => {
        b ? E() : (window.clearTimeout(m.current), m.current = 0);
      }, [E, b]),
      onOpen: C,
      onClose: E,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
wi.displayName = bt;
var On = "TooltipTrigger", yi = h.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = St(On, n), i = fr(On, n), s = on(n), l = h.useRef(null), c = ce(t, l, o.onTriggerChange), f = h.useRef(!1), u = h.useRef(!1), d = h.useCallback(() => f.current = !1, []);
    return h.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ a(Ko, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      ie.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: K(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: K(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: K(e.onPointerDown, () => {
          o.open && o.onClose(), f.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: K(e.onFocus, () => {
          f.current || o.onOpen();
        }),
        onBlur: K(e.onBlur, o.onClose),
        onClick: K(e.onClick, o.onClose)
      }
    ) });
  }
);
yi.displayName = On;
var pr = "TooltipPortal", [ep, tp] = rn(pr, {
  forceMount: void 0
}), Ni = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = St(pr, t);
  return /* @__PURE__ */ a(ep, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Ue, { present: n || i.open, children: /* @__PURE__ */ a(nr, { asChild: !0, container: o, children: r }) }) });
};
Ni.displayName = pr;
var lt = "TooltipContent", Ci = h.forwardRef(
  (e, t) => {
    const n = tp(lt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = St(lt, e.__scopeTooltip);
    return /* @__PURE__ */ a(Ue, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ a(xi, { side: o, ...i, ref: t }) : /* @__PURE__ */ a(np, { side: o, ...i, ref: t }) });
  }
), np = h.forwardRef((e, t) => {
  const n = St(lt, e.__scopeTooltip), r = fr(lt, e.__scopeTooltip), o = h.useRef(null), i = ce(t, o), [s, l] = h.useState(null), { trigger: c, onClose: f } = n, u = o.current, { onPointerInTransitChange: d } = r, p = h.useCallback(() => {
    l(null), d(!1);
  }, [d]), m = h.useCallback(
    (b, v) => {
      const g = b.currentTarget, w = { x: b.clientX, y: b.clientY }, N = ip(w, g.getBoundingClientRect()), y = sp(w, N), C = lp(v.getBoundingClientRect()), E = dp([...y, ...C]);
      l(E), d(!0);
    },
    [d]
  );
  return h.useEffect(() => () => p(), [p]), h.useEffect(() => {
    if (c && u) {
      const b = (g) => m(g, u), v = (g) => m(g, c);
      return c.addEventListener("pointerleave", b), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", b), u.removeEventListener("pointerleave", v);
      };
    }
  }, [c, u, m, p]), h.useEffect(() => {
    if (s) {
      const b = (v) => {
        const g = v.target, w = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !cp(w, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ a(xi, { ...e, ref: i });
}), [rp, op] = rn(bt, { isInside: !1 }), ap = /* @__PURE__ */ qi("TooltipContent"), xi = h.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = St(lt, n), f = on(n), { onClose: u } = c;
    return h.useEffect(() => (document.addEventListener(An, u), () => document.removeEventListener(An, u)), [u]), h.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const m = p.target;
          m != null && m.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ a(
      Gn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ _(
          Yo,
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
Ci.displayName = lt;
var Si = "TooltipArrow", Ri = h.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = on(n);
    return op(
      Si,
      n
    ).isInside ? null : /* @__PURE__ */ a(Xo, { ...o, ...r, ref: t });
  }
);
Ri.displayName = Si;
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
var fp = _i, pp = wi, mp = yi, hp = Ni, vp = Ci, gp = Ri;
function bp(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Rm({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: o = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ a(we, { children: t });
  const { side: l, align: c } = bp(n);
  return /* @__PURE__ */ a(fp, { delayDuration: o, children: /* @__PURE__ */ _(pp, { children: [
    /* @__PURE__ */ a(mp, { asChild: !0, children: t }),
    /* @__PURE__ */ a(hp, { children: /* @__PURE__ */ _(
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
  positive: to,
  notice: ct,
  negative: Ve
};
function Em({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const o = _p[t], i = t === "negative";
  return /* @__PURE__ */ _(
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
const Xr = 200, wp = [];
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
  onCloseAllTabs: m,
  onCloseOtherTabs: b,
  className: v
}) {
  const g = le(null), [w, N] = ee(!1), [y, C] = ee(!1), [E, M] = ee(/* @__PURE__ */ new Set()), x = de(() => {
    const S = g.current;
    S && (N(S.scrollLeft > 0), C(S.scrollLeft + S.clientWidth < S.scrollWidth - 1));
  }, []);
  ue(() => {
    const S = g.current;
    if (!S) return;
    x(), S.addEventListener("scroll", x, { passive: !0 });
    const P = new ResizeObserver(x);
    return P.observe(S), () => {
      S.removeEventListener("scroll", x), P.disconnect();
    };
  }, [x]);
  function I(S) {
    var P;
    (P = g.current) == null || P.scrollBy({ left: S, behavior: "smooth" });
  }
  function A(S) {
    M((P) => {
      const F = new Set(P);
      return F.has(S) ? F.delete(S) : F.add(S), F;
    });
  }
  const k = yp(e, n);
  return /* @__PURE__ */ _(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ _(Pe, { children: [
          /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Xe, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ _(Ae, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ _(we, { children: [
              /* @__PURE__ */ a(ai, { children: "Open tabs" }),
              /* @__PURE__ */ a(_u, { children: e.map((S) => /* @__PURE__ */ a(
                ae,
                {
                  onSelect: () => r(S.id),
                  "data-active-tab": S.id === t ? "" : void 0,
                  children: S.label
                },
                S.id
              )) }),
              /* @__PURE__ */ a(it, {})
            ] }),
            /* @__PURE__ */ a(
              ae,
              {
                onSelect: () => m == null ? void 0 : m(),
                disabled: !m || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(
          fe,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(pt, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !w,
            onClick: () => I(-Xr),
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
                Ei,
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
                  onCloseAll: m
                },
                S.tab.id
              ) : /* @__PURE__ */ a(
                Cp,
                {
                  group: S.group,
                  tabs: S.tabs,
                  activeTabId: t,
                  isExpanded: !E.has(S.group.id),
                  onToggle: () => A(S.group.id),
                  onTabActivate: r,
                  onTabClose: o,
                  onTabLock: i,
                  onTabUnlock: s,
                  onTabPin: l,
                  onTabUnpin: c,
                  onAddTabToGroup: f,
                  onCloseOtherTabs: b,
                  onCloseAllTabs: m,
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
          fe,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(ot, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => I(Xr),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function Ei({
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
  return /* @__PURE__ */ _(
    "div",
    {
      className: "footer-tab",
      "data-active": t ? "" : void 0,
      "data-type": p,
      children: [
        /* @__PURE__ */ _(
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
              p === "locked" && /* @__PURE__ */ a(Gi, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ a(Ki, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ _("span", { className: "footer-tab__actions", children: [
          p === "standard" && o && /* @__PURE__ */ a(
            fe,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Oe, { size: 12 }),
              "aria-label": `Close ${e.label}`,
              className: "footer-tab__close-btn",
              onClick: o
            }
          ),
          /* @__PURE__ */ _(Pe, { children: [
            /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
              fe,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ _(Ae, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ a(ae, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ a(ae, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ a(ae, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ a(ae, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ a(ae, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ a(it, {}),
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
  onCloseAllTabs: m,
  onGroupEdit: b,
  onGroupUngroup: v,
  onGroupClose: g,
  allGroups: w
}) {
  const N = e.color ?? "gray";
  return /* @__PURE__ */ _(
    "div",
    {
      className: "footer-group",
      "data-color": N,
      "data-expanded": r ? "" : void 0,
      role: "group",
      "aria-label": `${e.label}, contains ${t.length} tab${t.length !== 1 ? "s" : ""}`,
      children: [
        /* @__PURE__ */ _("div", { className: "footer-group__header", children: [
          /* @__PURE__ */ a(
            Zu,
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
          r && (b || v || g) && /* @__PURE__ */ _(Pe, { children: [
            /* @__PURE__ */ a(Ie, { asChild: !0, children: /* @__PURE__ */ a(
              fe,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ _(Ae, { side: "top", align: "start", sideOffset: 8, children: [
              b && /* @__PURE__ */ a(ae, { onSelect: b, children: "Edit group" }),
              v && /* @__PURE__ */ a(ae, { onSelect: v, children: "Ungroup" }),
              (b || v) && /* @__PURE__ */ a(it, {}),
              p && t[0] && /* @__PURE__ */ a(ae, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ a(ae, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ a("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ a(
          Ei,
          {
            tab: y,
            isActive: y.id === n,
            groups: w,
            onActivate: () => i(y.id),
            onClose: s ? () => s(y.id) : void 0,
            onLock: l ? () => l(y.id) : void 0,
            onUnlock: c ? () => c(y.id) : void 0,
            onPin: f ? () => f(y.id) : void 0,
            onUnpin: u ? () => u(y.id) : void 0,
            onAddToGroup: d ? () => d(y.id) : void 0,
            onCloseOthers: p ? () => p(y.id) : void 0,
            onCloseAll: m
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
  onDrawerChange: m,
  children: b,
  className: v
}) {
  const g = p !== void 0, [w, N] = ee(null), y = g ? p : w;
  function C(P) {
    g || N(P), m == null || m(P);
  }
  function E(P) {
    C(y === P ? null : P);
  }
  function M(P) {
    if (!P.drawerId) return P;
    const { drawerId: F, ...z } = P;
    return {
      ...z,
      selected: y === F,
      onClick: () => {
        var Z;
        (Z = P.onClick) == null || Z.call(P), E(F);
      }
    };
  }
  const x = i.map(M), I = s.map(M), A = d.find((P) => P.id === y) ?? null, k = A != null && A.persistent ? A : null, S = d.filter((P) => !P.persistent);
  return /* @__PURE__ */ _("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a(
      $f,
      {
        logo: e,
        productName: t,
        onLogoClick: n,
        tenantLabel: r,
        tenantColor: o,
        globalNavItems: x,
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
    S.map((P) => /* @__PURE__ */ a(
      Gu,
      {
        open: y === P.id,
        onClose: () => C(null),
        size: P.size ?? "medium",
        side: P.side ?? "right",
        className: P.side === "left" ? "main-navigation__modal-drawer" : void 0,
        children: P.content
      },
      P.id
    ))
  ] });
}
function Mm({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ _(we, { children: [
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
  Xu as Avatar,
  nm as AvatarGroup,
  rm as AvatarWithStatus,
  Ku as Badge,
  fm as BannerAlert,
  Cu as Breadcrumbs,
  fe as Button,
  Pu as ButtonsToolbar,
  om as Card,
  lm as CardContent,
  sm as CardDescription,
  um as CardDivider,
  cm as CardFooter,
  am as CardHeader,
  dm as CardSection,
  im as CardTitle,
  Bp as Checkbox,
  Fp as CheckboxGroup,
  Wr as Chip,
  $p as ChipGroup,
  zp as Combobox,
  gt as Counter,
  uf as Dialog,
  pf as DialogBody,
  mf as DialogFooter,
  ff as DialogHeader,
  oi as Divider,
  Gu as Drawer,
  Yp as DrawerContent,
  em as DrawerContextButton,
  Gp as DrawerHeader,
  Qp as DrawerListItem,
  qp as DrawerMenuItem,
  Zp as DrawerMultiLevelItem,
  Jp as DrawerNotificationItem,
  Xp as DrawerSection,
  Kp as DrawerTools,
  jp as Dropdown,
  Wp as FieldLabel,
  Vp as FileUploader,
  Hp as FileViewer,
  Pe as FlyoutMenu,
  Ip as FlyoutMenuCheckboxItem,
  Ae as FlyoutMenuContent,
  _u as FlyoutMenuGroup,
  ae as FlyoutMenuItem,
  ai as FlyoutMenuLabel,
  Ap as FlyoutMenuRadioGroup,
  Op as FlyoutMenuRadioItem,
  it as FlyoutMenuSeparator,
  Lp as FlyoutMenuShortcut,
  Tp as FlyoutMenuSub,
  Dp as FlyoutMenuSubContent,
  kp as FlyoutMenuSubTrigger,
  Ie as FlyoutMenuTrigger,
  Np as Footer,
  Up as Hint,
  mm as IconBadge,
  ge as IconButton,
  tm as Link,
  yf as List,
  Nf as ListItem,
  xp as MainNavigation,
  Mm as MicroNavigation,
  $f as Navbar,
  hm as PageHeader,
  nf as Panel,
  of as PanelBody,
  af as PanelFooter,
  rf as PanelHeader,
  vm as ProgressBar,
  gm as ProgressCircle,
  bm as Radio,
  _m as RadioGroup,
  wm as Range,
  sf as Section,
  Ot as Spinner,
  ym as SplitButton,
  Cf as Stepper,
  xf as StepperStep,
  pm as Switch,
  bf as Tab,
  gf as TabList,
  _f as TabPanel,
  vf as Tabs,
  Zu as Tag,
  Nm as TextArea,
  Cm as TextInput,
  xm as ToastProvider,
  Rm as Tooltip,
  Em as ValidationMessage,
  Sm as useToast
};
