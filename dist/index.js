import { jsx as a, Fragment as _e, jsxs as b } from "react/jsx-runtime";
import * as m from "react";
import E, { useLayoutEffect as In, useState as J, useId as ne, useRef as ie, useImperativeHandle as An, useEffect as ce, useMemo as At, useCallback as le, createContext as On, useContext as Tn } from "react";
import * as Kr from "react-dom";
import kn, { createPortal as Ei } from "react-dom";
import { Check as Te, ChevronRight as rt, MoreHorizontal as Xe, MoreVertical as Yr, X as Ne, ChevronDown as gt, HelpCircle as Mi, UploadCloud as Pi, Loader2 as Ii, AlertCircle as lt, Upload as Ai, Image as Oi, FileText as vn, Archive as Ti, File as ki, ZoomOut as Di, ZoomIn as Li, RotateCw as Bi, Maximize2 as Fi, Download as fr, ScanSearch as $i, ExternalLink as Xr, ChevronLeft as ft, FileX as zi, EyeOff as qr, FileSpreadsheet as ji, XCircle as Ve, AlertTriangle as Zr, CheckCircle2 as Qr, Info as Jr, EllipsisVertical as Wi, CheckCircle as Vt, Search as Vi, Eye as Hi, Lock as Ui, Pin as Gi } from "lucide-react";
function He(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = m.createContext(s), c = n.length;
    n = [...n, s];
    const f = (d) => {
      var w;
      const { scope: p, children: h, ..._ } = d, v = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[c]) || l, g = m.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ a(v.Provider, { value: g, children: h });
    };
    f.displayName = i + "Provider";
    function u(d, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[c]) || l, _ = m.useContext(h);
      if (_) return _;
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
  return o.scopeName = e, [r, Ki(o, ...t)];
}
function Ki(...e) {
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
function pr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ht(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = pr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : pr(e[o], null);
        }
      };
  };
}
function se(...e) {
  return m.useCallback(Ht(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  const t = /* @__PURE__ */ Yi(e), n = m.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = m.Children.toArray(i), c = l.find(qi);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ a(t, { ...s, ref: o, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ a(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const s = Qi(o), l = Zi(i, o.props);
      return o.type !== m.Fragment && (l.ref = r ? Ht(r, s) : s), m.cloneElement(o, l);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var eo = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a(_e, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = eo, t;
}
function qi(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === eo;
}
function Zi(e, t) {
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
function Qi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Dn(e) {
  const t = e + "CollectionProvider", [n, r] = He(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, N = E.useRef(null), y = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: g, itemMap: y, collectionRef: N, children: w });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ Dt(l), f = E.forwardRef(
    (v, g) => {
      const { scope: w, children: N } = v, y = i(l, w), C = se(g, y.collectionRef);
      return /* @__PURE__ */ a(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Dt(u), h = E.forwardRef(
    (v, g) => {
      const { scope: w, children: N, ...y } = v, C = E.useRef(null), M = se(g, C), P = i(u, w);
      return E.useEffect(() => (P.itemMap.set(C, { ref: C, ...y }), () => void P.itemMap.delete(C))), /* @__PURE__ */ a(p, { [d]: "", ref: M, children: N });
    }
  );
  h.displayName = u;
  function _(v) {
    const g = i(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const N = g.collectionRef.current;
      if (!N) return [];
      const y = Array.from(N.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, S) => y.indexOf(P.ref.current) - y.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: f, ItemSlot: h },
    _,
    r
  ];
}
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var ke = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Ji = m[" useInsertionEffect ".trim().toString()] || ke;
function qe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = es({
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
        const p = ts(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function es({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Ji(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function ts(e) {
  return typeof e == "function";
}
var ns = [
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
], oe = ns.reduce((e, t) => {
  const n = /* @__PURE__ */ Dt(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function to(e, t) {
  e && Kr.flushSync(() => e.dispatchEvent(t));
}
function rs(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ue = (e) => {
  const { present: t, children: n } = e, r = os(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = se(r.ref, as(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Ue.displayName = "Presence";
function os(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = rs(s, {
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
    const f = xt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), ke(() => {
    const f = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, h = xt(f);
      e ? c("MOUNT") : h === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ke(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = xt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = xt(r.current));
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
function xt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function as(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var is = m[" useId ".trim().toString()] || (() => {
}), ss = 0;
function ze(e) {
  const [t, n] = m.useState(is());
  return ke(() => {
    n((r) => r ?? String(ss++));
  }, [e]), t ? `radix-${t}` : "";
}
var Ut = "Collapsible", [ls, no] = He(Ut), [cs, Ln] = ls(Ut), ro = m.forwardRef(
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
      caller: Ut
    });
    return /* @__PURE__ */ a(
      cs,
      {
        scope: n,
        disabled: i,
        contentId: ze(),
        open: c,
        onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ a(
          oe.div,
          {
            "data-state": Fn(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
ro.displayName = Ut;
var oo = "CollapsibleTrigger", ao = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ln(oo, n);
    return /* @__PURE__ */ a(
      oe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Fn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: K(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ao.displayName = oo;
var Bn = "CollapsibleContent", io = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ln(Bn, e.__scopeCollapsible);
    return /* @__PURE__ */ a(Ue, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(ds, { ...r, ref: t, present: i }) });
  }
);
io.displayName = Bn;
var ds = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = Ln(Bn, n), [l, c] = m.useState(r), f = m.useRef(null), u = se(t, f), d = m.useRef(0), p = d.current, h = m.useRef(0), _ = h.current, v = s.open || l, g = m.useRef(v), w = m.useRef(void 0);
  return m.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), ke(() => {
    const N = f.current;
    if (N) {
      w.current = w.current || {
        transitionDuration: N.style.transitionDuration,
        animationName: N.style.animationName
      }, N.style.transitionDuration = "0s", N.style.animationName = "none";
      const y = N.getBoundingClientRect();
      d.current = y.height, h.current = y.width, g.current || (N.style.transitionDuration = w.current.transitionDuration, N.style.animationName = w.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ a(
    oe.div,
    {
      "data-state": Fn(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...i,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": _ ? `${_}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Fn(e) {
  return e ? "open" : "closed";
}
var us = ro, fs = ao, ps = io, hs = m.createContext(void 0);
function $n(e) {
  const t = m.useContext(hs);
  return e || t || "ltr";
}
var Ce = "Accordion", ms = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [zn, vs, gs] = Dn(Ce), [Gt] = He(Ce, [
  gs,
  no
]), jn = no(), so = E.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ a(zn.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ a(ys, { ...i, ref: t }) : /* @__PURE__ */ a(ws, { ...o, ref: t }) });
  }
);
so.displayName = Ce;
var [lo, _s] = Gt(Ce), [co, bs] = Gt(
  Ce,
  { collapsible: !1 }
), ws = E.forwardRef(
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
      lo,
      {
        scope: e.__scopeAccordion,
        value: E.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: E.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ a(co, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ a(uo, { ...s, ref: t }) })
      }
    );
  }
), ys = E.forwardRef((e, t) => {
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
    lo,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ a(co, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ a(uo, { ...i, ref: t }) })
    }
  );
}), [Ns, Kt] = Gt(Ce), uo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, l = E.useRef(null), c = se(l, t), f = vs(n), d = $n(o) === "ltr", p = K(e.onKeyDown, (h) => {
      var A;
      if (!ms.includes(h.key)) return;
      const _ = h.target, v = f().filter((D) => {
        var O;
        return !((O = D.ref.current) != null && O.disabled);
      }), g = v.findIndex((D) => D.ref.current === _), w = v.length;
      if (g === -1) return;
      h.preventDefault();
      let N = g;
      const y = 0, C = w - 1, M = () => {
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
      const S = N % w;
      (A = v[S].ref.current) == null || A.focus();
    });
    return /* @__PURE__ */ a(
      Ns,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ a(zn.Slot, { scope: n, children: /* @__PURE__ */ a(
          oe.div,
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
), Lt = "AccordionItem", [Cs, Wn] = Gt(Lt), fo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, i = Kt(Lt, n), s = _s(Lt, n), l = jn(n), c = ze(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ a(
      Cs,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ a(
          us,
          {
            "data-orientation": i.orientation,
            "data-state": _o(f),
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
fo.displayName = Lt;
var po = "AccordionHeader", ho = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kt(Ce, n), i = Wn(po, n);
    return /* @__PURE__ */ a(
      oe.h3,
      {
        "data-orientation": o.orientation,
        "data-state": _o(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ho.displayName = po;
var gn = "AccordionTrigger", mo = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kt(Ce, n), i = Wn(gn, n), s = bs(gn, n), l = jn(n);
    return /* @__PURE__ */ a(zn.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      fs,
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
mo.displayName = gn;
var vo = "AccordionContent", go = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kt(Ce, n), i = Wn(vo, n), s = jn(n);
    return /* @__PURE__ */ a(
      ps,
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
go.displayName = vo;
function _o(e) {
  return e ? "open" : "closed";
}
var xs = so, Ss = fo, Rs = ho, Es = mo, Ms = go;
function Ps() {
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
    xs,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: o } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ b(
        Ss,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ a(Rs, { className: "accordion__header", children: /* @__PURE__ */ b(Es, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ a("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ a("span", { className: "accordion__title", children: l.header }),
              l.afterElement && /* @__PURE__ */ a("span", { className: "accordion__after", children: l.afterElement }),
              /* @__PURE__ */ a(Ps, {})
            ] }) }),
            /* @__PURE__ */ a(Ms, { className: "accordion__content", children: /* @__PURE__ */ a("div", { className: "accordion__content-inner", children: l.content }) })
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
function Is(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var As = "DismissableLayer", _n = "dismissableLayer.update", Os = "dismissableLayer.pointerDownOutside", Ts = "dismissableLayer.focusOutside", hr, bo = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vn = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = m.useContext(bo), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), _ = se(t, (S) => d(S)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= w, M = Ls((S) => {
      const A = S.target, D = [...f.branches].some((O) => O.contains(A));
      !C || D || (o == null || o(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p), P = Bs((S) => {
      const A = S.target;
      [...f.branches].some((O) => O.contains(A)) || (i == null || i(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p);
    return Is((S) => {
      N === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (hr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), mr(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = hr);
        };
    }, [u, p, n, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), mr());
    }, [u, f]), m.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(_n, S), () => document.removeEventListener(_n, S);
    }, []), /* @__PURE__ */ a(
      oe.div,
      {
        ...c,
        ref: _,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: K(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: K(
          e.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }
);
Vn.displayName = As;
var ks = "DismissableLayerBranch", Ds = m.forwardRef((e, t) => {
  const n = m.useContext(bo), r = m.useRef(null), o = se(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(oe.div, { ...e, ref: o });
});
Ds.displayName = ks;
function Ls(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          wo(
            Os,
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
function Bs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && wo(Ts, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function mr() {
  const e = new CustomEvent(_n);
  document.dispatchEvent(e);
}
function wo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? to(o, i) : o.dispatchEvent(i);
}
var on = 0;
function Fs() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? vr()), document.body.insertAdjacentElement("beforeend", e[1] ?? vr()), on++, () => {
      on === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), on--;
    };
  }, []);
}
function vr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var an = "focusScope.autoFocusOnMount", sn = "focusScope.autoFocusOnUnmount", gr = { bubbles: !1, cancelable: !0 }, $s = "FocusScope", yo = m.forwardRef((e, t) => {
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
        l.contains(C) ? d.current = C : $e(d.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || $e(d.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const M of y)
            M.removedNodes.length > 0 && $e(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(w);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, h.paused]), m.useEffect(() => {
    if (l) {
      br.add(h);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const w = new CustomEvent(an, gr);
        l.addEventListener(an, f), l.dispatchEvent(w), w.defaultPrevented || (zs(Us(No(l)), { select: !0 }), document.activeElement === v && $e(l));
      }
      return () => {
        l.removeEventListener(an, f), setTimeout(() => {
          const w = new CustomEvent(sn, gr);
          l.addEventListener(sn, u), l.dispatchEvent(w), w.defaultPrevented || $e(v ?? document.body, { select: !0 }), l.removeEventListener(sn, u), br.remove(h);
        }, 0);
      };
    }
  }, [l, f, u, h]);
  const _ = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const N = v.currentTarget, [y, C] = js(N);
        y && C ? !v.shiftKey && w === C ? (v.preventDefault(), n && $e(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && $e(C, { select: !0 })) : w === N && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ a(oe.div, { tabIndex: -1, ...s, ref: p, onKeyDown: _ });
});
yo.displayName = $s;
function zs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($e(r, { select: t }), document.activeElement !== n) return;
}
function js(e) {
  const t = No(e), n = _r(t, e), r = _r(t.reverse(), e);
  return [n, r];
}
function No(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _r(e, t) {
  for (const n of e)
    if (!Ws(n, { upTo: t })) return n;
}
function Ws(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Vs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $e(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Vs(e) && t && e.select();
  }
}
var br = Hs();
function Hs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = wr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = wr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function wr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Us(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Gs = ["top", "right", "bottom", "left"], je = Math.min, ve = Math.max, Bt = Math.round, St = Math.floor, Re = (e) => ({
  x: e,
  y: e
}), Ks = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bn(e, t, n) {
  return ve(e, je(t, n));
}
function De(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Le(e) {
  return e.split("-")[0];
}
function ct(e) {
  return e.split("-")[1];
}
function Hn(e) {
  return e === "x" ? "y" : "x";
}
function Un(e) {
  return e === "y" ? "height" : "width";
}
function Se(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Gn(e) {
  return Hn(Se(e));
}
function Ys(e, t, n) {
  n === void 0 && (n = !1);
  const r = ct(e), o = Gn(e), i = Un(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ft(s)), [s, Ft(s)];
}
function Xs(e) {
  const t = Ft(e);
  return [wn(e), t, wn(t)];
}
function wn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const yr = ["left", "right"], Nr = ["right", "left"], qs = ["top", "bottom"], Zs = ["bottom", "top"];
function Qs(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Nr : yr : t ? yr : Nr;
    case "left":
    case "right":
      return t ? qs : Zs;
    default:
      return [];
  }
}
function Js(e, t, n, r) {
  const o = ct(e);
  let i = Qs(Le(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(wn)))), i;
}
function Ft(e) {
  const t = Le(e);
  return Ks[t] + e.slice(t.length);
}
function el(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Co(e) {
  return typeof e != "number" ? el(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $t(e) {
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
function Cr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Se(t), s = Gn(t), l = Un(s), c = Le(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
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
  switch (ct(t)) {
    case "start":
      h[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && f ? -1 : 1);
      break;
  }
  return h;
}
async function tl(e, t) {
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
  } = De(t, e), _ = Co(h), g = l[p ? d === "floating" ? "reference" : "floating" : d], w = $t(await i.getClippingRect({
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
  }, M = $t(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: N,
    offsetParent: y,
    strategy: c
  }) : N);
  return {
    top: (w.top - M.top + _.top) / C.y,
    bottom: (M.bottom - w.bottom + _.bottom) / C.y,
    left: (w.left - M.left + _.left) / C.x,
    right: (M.right - w.right + _.right) / C.x
  };
}
const nl = 50, rl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: tl
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Cr(f, r, c), p = r, h = 0;
  const _ = {};
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
      data: M,
      reset: P
    } = await N({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: _,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, d = C ?? d, _[w] = {
      ..._[w],
      ...M
    }, P && h < nl && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (f = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = Cr(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: _
  };
}, ol = (e) => ({
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
    } = De(e, t) || {};
    if (f == null)
      return {};
    const d = Co(u), p = {
      x: n,
      y: r
    }, h = Gn(o), _ = Un(h), v = await s.getDimensions(f), g = h === "y", w = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[_] + i.reference[h] - p[h] - i.floating[_], M = p[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let S = P ? P[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(P))) && (S = l.floating[y] || i.floating[_]);
    const A = C / 2 - M / 2, D = S / 2 - v[_] / 2 - 1, O = je(d[w], D), R = je(d[N], D), I = O, z = S - v[_] - R, W = S / 2 - v[_] / 2 + A, Y = bn(I, W, z), j = !c.arrow && ct(o) != null && W !== Y && i.reference[_] / 2 - (W < I ? O : R) - v[_] / 2 < 0, $ = j ? W < I ? W - I : W - z : 0;
    return {
      [h]: p[h] + $,
      data: {
        [h]: Y,
        centerOffset: W - Y - $,
        ...j && {
          alignmentOffset: $
        }
      },
      reset: j
    };
  }
}), al = function(e) {
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
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: v = !0,
        ...g
      } = De(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Le(o), N = Se(l), y = Le(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), M = p || (y || !v ? [Ft(l)] : Xs(l)), P = _ !== "none";
      !p && P && M.push(...Js(l, v, _, C));
      const S = [l, ...M], A = await c.detectOverflow(t, g), D = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && D.push(A[w]), d) {
        const W = Ys(o, s, C);
        D.push(A[W[0]], A[W[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: D
      }], !D.every((W) => W <= 0)) {
        var R, I;
        const W = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, Y = S[W];
        if (Y && (!(d === "alignment" ? N !== Se(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((B) => Se(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: W,
              overflows: O
            },
            reset: {
              placement: Y
            }
          };
        let j = (I = O.filter(($) => $.overflows[0] <= 0).sort(($, B) => $.overflows[1] - B.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!j)
          switch (h) {
            case "bestFit": {
              var z;
              const $ = (z = O.filter((B) => {
                if (P) {
                  const k = Se(B.placement);
                  return k === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((k) => k > 0).reduce((k, U) => k + U, 0)]).sort((B, k) => B[1] - k[1])[0]) == null ? void 0 : z[0];
              $ && (j = $);
              break;
            }
            case "initialPlacement":
              j = l;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function xr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sr(e) {
  return Gs.some((t) => e[t] >= 0);
}
const il = function(e) {
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
      } = De(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = xr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Sr(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = xr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Sr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, xo = /* @__PURE__ */ new Set(["left", "top"]);
async function sl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Le(n), l = ct(n), c = Se(n) === "y", f = xo.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = De(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: _
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof _ == "number" && (h = l === "end" ? _ * -1 : _), c ? {
    x: h * u,
    y: p * f
  } : {
    x: p * f,
    y: h * u
  };
}
const ll = function(e) {
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
      } = t, c = await sl(t, e);
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
}, cl = function(e) {
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
      } = De(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Se(Le(o)), h = Hn(p);
      let _ = u[h], v = u[p];
      if (s) {
        const w = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", y = _ + d[w], C = _ - d[N];
        _ = bn(y, _, C);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[w], C = v - d[N];
        v = bn(y, v, C);
      }
      const g = c.fn({
        ...t,
        [h]: _,
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
}, dl = function(e) {
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
      } = De(e, t), u = {
        x: n,
        y: r
      }, d = Se(o), p = Hn(d);
      let h = u[p], _ = u[d];
      const v = De(l, t), g = typeof v == "number" ? {
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
        var w, N;
        const y = p === "y" ? "width" : "height", C = xo.has(Le(o)), M = i.reference[d] - i.floating[y] + (C && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : g.crossAxis), P = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        _ < M ? _ = M : _ > P && (_ = P);
      }
      return {
        [p]: h,
        [d]: _
      };
    }
  };
}, ul = function(e) {
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
      } = De(e, t), u = await s.detectOverflow(t, f), d = Le(o), p = ct(o), h = Se(o) === "y", {
        width: _,
        height: v
      } = i.floating;
      let g, w;
      d === "top" || d === "bottom" ? (g = d, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = _ - u.left - u.right, C = je(v - u[g], N), M = je(_ - u[w], y), P = !t.middlewareData.shift;
      let S = C, A = M;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = N), P && !p) {
        const O = ve(u.left, 0), R = ve(u.right, 0), I = ve(u.top, 0), z = ve(u.bottom, 0);
        h ? A = _ - 2 * (O !== 0 || R !== 0 ? O + R : ve(u.left, u.right)) : S = v - 2 * (I !== 0 || z !== 0 ? I + z : ve(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: S
      });
      const D = await s.getDimensions(l.floating);
      return _ !== D.width || v !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yt() {
  return typeof window < "u";
}
function dt(e) {
  return So(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ae(e) {
  var t;
  return (t = (So(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function So(e) {
  return Yt() ? e instanceof Node || e instanceof ge(e).Node : !1;
}
function we(e) {
  return Yt() ? e instanceof Element || e instanceof ge(e).Element : !1;
}
function Be(e) {
  return Yt() ? e instanceof HTMLElement || e instanceof ge(e).HTMLElement : !1;
}
function Rr(e) {
  return !Yt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ge(e).ShadowRoot;
}
function _t(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function fl(e) {
  return /^(table|td|th)$/.test(dt(e));
}
function Xt(e) {
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
const pl = /transform|translate|scale|rotate|perspective|filter/, hl = /paint|layout|strict|content/, Ke = (e) => !!e && e !== "none";
let ln;
function Kn(e) {
  const t = we(e) ? ye(e) : e;
  return Ke(t.transform) || Ke(t.translate) || Ke(t.scale) || Ke(t.rotate) || Ke(t.perspective) || !Yn() && (Ke(t.backdropFilter) || Ke(t.filter)) || pl.test(t.willChange || "") || hl.test(t.contain || "");
}
function ml(e) {
  let t = We(e);
  for (; Be(t) && !ot(t); ) {
    if (Kn(t))
      return t;
    if (Xt(t))
      return null;
    t = We(t);
  }
  return null;
}
function Yn() {
  return ln == null && (ln = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ln;
}
function ot(e) {
  return /^(html|body|#document)$/.test(dt(e));
}
function ye(e) {
  return ge(e).getComputedStyle(e);
}
function qt(e) {
  return we(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function We(e) {
  if (dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Rr(e) && e.host || // Fallback.
    Ae(e)
  );
  return Rr(t) ? t.host : t;
}
function Ro(e) {
  const t = We(e);
  return ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Be(t) && _t(t) ? t : Ro(t);
}
function pt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ro(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ge(o);
  if (i) {
    const l = yn(s);
    return t.concat(s, s.visualViewport || [], _t(o) ? o : [], l && n ? pt(l) : []);
  } else
    return t.concat(o, pt(o, [], n));
}
function yn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Eo(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Be(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Bt(n) !== i || Bt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function Xn(e) {
  return we(e) ? e : e.contextElement;
}
function tt(e) {
  const t = Xn(e);
  if (!Be(t))
    return Re(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Eo(t);
  let s = (i ? Bt(n.width) : n.width) / r, l = (i ? Bt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const vl = /* @__PURE__ */ Re(0);
function Mo(e) {
  const t = ge(e);
  return !Yn() || !t.visualViewport ? vl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function gl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ge(e) ? !1 : t;
}
function Ye(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Xn(e);
  let s = Re(1);
  t && (r ? we(r) && (s = tt(r)) : s = tt(e));
  const l = gl(i, n, r) ? Mo(i) : Re(0);
  let c = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = ge(i), h = r && we(r) ? ge(r) : r;
    let _ = p, v = yn(_);
    for (; v && r && h !== _; ) {
      const g = tt(v), w = v.getBoundingClientRect(), N = ye(v), y = w.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = w.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, _ = ge(v), v = yn(_);
    }
  }
  return $t({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function Zt(e, t) {
  const n = qt(e).scrollLeft;
  return t ? t.left + n : Ye(Ae(e)).left + n;
}
function Po(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Zt(e, n), o = n.top + t.scrollTop;
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
  const i = o === "fixed", s = Ae(r), l = t ? Xt(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Re(1);
  const u = Re(0), d = Be(r);
  if ((d || !d && !i) && ((dt(r) !== "body" || _t(s)) && (c = qt(r)), d)) {
    const h = Ye(r);
    f = tt(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !d && !i ? Po(s, c) : Re(0);
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
function wl(e) {
  const t = Ae(e), n = qt(e), r = e.ownerDocument.body, o = ve(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ve(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Zt(e);
  const l = -n.scrollTop;
  return ye(r).direction === "rtl" && (s += ve(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const Er = 25;
function yl(e, t) {
  const n = ge(e), r = Ae(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Yn();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  const f = Zt(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, _ = Math.abs(r.clientWidth - d.clientWidth - h);
    _ <= Er && (i -= _);
  } else f <= Er && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Nl(e, t) {
  const n = Ye(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Be(e) ? tt(e) : Re(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = o * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Mr(e, t, n) {
  let r;
  if (t === "viewport")
    r = yl(e, n);
  else if (t === "document")
    r = wl(Ae(e));
  else if (we(t))
    r = Nl(t, n);
  else {
    const o = Mo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $t(r);
}
function Io(e, t) {
  const n = We(e);
  return n === t || !we(n) || ot(n) ? !1 : ye(n).position === "fixed" || Io(n, t);
}
function Cl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pt(e, [], !1).filter((l) => we(l) && dt(l) !== "body"), o = null;
  const i = ye(e).position === "fixed";
  let s = i ? We(e) : e;
  for (; we(s) && !ot(s); ) {
    const l = ye(s), c = Kn(s);
    !c && l.position === "fixed" && (o = null), (i ? !c && !o : !c && l.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || _t(s) && !c && Io(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = We(s);
  }
  return t.set(e, r), r;
}
function xl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Xt(t) ? [] : Cl(t, this._c) : [].concat(n), r], l = Mr(t, s[0], o);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const h = Mr(t, s[p], o);
    c = ve(h.top, c), f = je(h.right, f), u = je(h.bottom, u), d = ve(h.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function Sl(e) {
  const {
    width: t,
    height: n
  } = Eo(e);
  return {
    width: t,
    height: n
  };
}
function Rl(e, t, n) {
  const r = Be(t), o = Ae(t), i = n === "fixed", s = Ye(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Re(0);
  function f() {
    c.x = Zt(o);
  }
  if (r || !r && !i)
    if ((dt(t) !== "body" || _t(o)) && (l = qt(t)), r) {
      const h = Ye(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && f();
  i && !r && o && f();
  const u = o && !r && !i ? Po(o, l) : Re(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function cn(e) {
  return ye(e).position === "static";
}
function Pr(e, t) {
  if (!Be(e) || ye(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ae(e) === n && (n = n.ownerDocument.body), n;
}
function Ao(e, t) {
  const n = ge(e);
  if (Xt(e))
    return n;
  if (!Be(e)) {
    let o = We(e);
    for (; o && !ot(o); ) {
      if (we(o) && !cn(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = Pr(e, t);
  for (; r && fl(r) && cn(r); )
    r = Pr(r, t);
  return r && ot(r) && cn(r) && !Kn(r) ? n : r || ml(e) || n;
}
const El = async function(e) {
  const t = this.getOffsetParent || Ao, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Rl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ml(e) {
  return ye(e).direction === "rtl";
}
const Pl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _l,
  getDocumentElement: Ae,
  getClippingRect: xl,
  getOffsetParent: Ao,
  getElementRects: El,
  getClientRects: bl,
  getDimensions: Sl,
  getScale: tt,
  isElement: we,
  isRTL: Ml
};
function Oo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Il(e, t) {
  let n = null, r;
  const o = Ae(e);
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
    const _ = St(d), v = St(o.clientWidth - (u + p)), g = St(o.clientHeight - (d + h)), w = St(u), y = {
      rootMargin: -_ + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: ve(0, je(1, c)) || 1
    };
    let C = !0;
    function M(P) {
      const S = P[0].intersectionRatio;
      if (S !== c) {
        if (!C)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Oo(f, e.getBoundingClientRect()) && s(), C = !1;
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
function Al(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = Xn(e), u = o || i ? [...f ? pt(f) : [], ...t ? pt(t) : []] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = f && l ? Il(f, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [N] = w;
    N && N.target === f && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), f && !c && h.observe(f), t && h.observe(t));
  let _, v = c ? Ye(e) : null;
  c && g();
  function g() {
    const w = Ye(e);
    v && !Oo(v, w) && n(), v = w, _ = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(_);
  };
}
const Ol = ll, Tl = cl, kl = al, Dl = ul, Ll = il, Ir = ol, Bl = dl, Fl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Pl,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return rl(e, t, {
    ...o,
    platform: i
  });
};
var $l = typeof document < "u", zl = function() {
}, Ot = $l ? In : zl;
function zt(e, t) {
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
        if (!zt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !zt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function To(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ar(e, t) {
  const n = To(e);
  return Math.round(t * n) / n;
}
function dn(e) {
  const t = m.useRef(e);
  return Ot(() => {
    t.current = e;
  }), t;
}
function jl(e) {
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
  zt(p, r) || h(r);
  const [_, v] = m.useState(null), [g, w] = m.useState(null), N = m.useCallback((B) => {
    B !== P.current && (P.current = B, v(B));
  }, []), y = m.useCallback((B) => {
    B !== S.current && (S.current = B, w(B));
  }, []), C = i || _, M = s || g, P = m.useRef(null), S = m.useRef(null), A = m.useRef(u), D = c != null, O = dn(c), R = dn(o), I = dn(f), z = m.useCallback(() => {
    if (!P.current || !S.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    R.current && (B.platform = R.current), Fl(P.current, S.current, B).then((k) => {
      const U = {
        ...k,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      W.current && !zt(A.current, U) && (A.current = U, Kr.flushSync(() => {
        d(U);
      }));
    });
  }, [p, t, n, R, I]);
  Ot(() => {
    f === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const W = m.useRef(!1);
  Ot(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Ot(() => {
    if (C && (P.current = C), M && (S.current = M), C && M) {
      if (O.current)
        return O.current(C, M, z);
      z();
    }
  }, [C, M, z, O, D]);
  const Y = m.useMemo(() => ({
    reference: P,
    floating: S,
    setReference: N,
    setFloating: y
  }), [N, y]), j = m.useMemo(() => ({
    reference: C,
    floating: M
  }), [C, M]), $ = m.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return B;
    const k = Ar(j.floating, u.x), U = Ar(j.floating, u.y);
    return l ? {
      ...B,
      transform: "translate(" + k + "px, " + U + "px)",
      ...To(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: k,
      top: U
    };
  }, [n, l, j.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: z,
    refs: Y,
    elements: j,
    floatingStyles: $
  }), [u, z, Y, j, $]);
}
const Wl = (e) => {
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
      return r && t(r) ? r.current != null ? Ir({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ir({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Vl = (e, t) => {
  const n = Ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hl = (e, t) => {
  const n = Tl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ul = (e, t) => ({
  fn: Bl(e).fn,
  options: [e, t]
}), Gl = (e, t) => {
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
  const n = Ll(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xl = (e, t) => {
  const n = Wl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var ql = "Arrow", ko = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ a(
    oe.svg,
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
ko.displayName = ql;
var Zl = ko;
function Ql(e) {
  const [t, n] = m.useState(void 0);
  return ke(() => {
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
var qn = "Popper", [Do, Qt] = He(qn), [Jl, Lo] = Do(qn), Bo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ a(Jl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Bo.displayName = qn;
var Fo = "PopperAnchor", $o = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Lo(Fo, n), s = m.useRef(null), l = se(t, s), c = m.useRef(null);
    return m.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ a(oe.div, { ...o, ref: l });
  }
);
$o.displayName = Fo;
var Zn = "PopperContent", [ec, tc] = Do(Zn), zo = m.forwardRef(
  (e, t) => {
    var G, te, Q, ae, fe, x;
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
      onPlaced: _,
      ...v
    } = e, g = Lo(Zn, n), [w, N] = m.useState(null), y = se(t, (L) => N(L)), [C, M] = m.useState(null), P = Ql(C), S = (P == null ? void 0 : P.width) ?? 0, A = (P == null ? void 0 : P.height) ?? 0, D = r + (i !== "center" ? "-" + i : ""), O = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, R = Array.isArray(f) ? f : [f], I = R.length > 0, z = {
      padding: O,
      boundary: R.filter(rc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: W, floatingStyles: Y, placement: j, isPositioned: $, middlewareData: B } = jl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...L) => Al(...L, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Vl({ mainAxis: o + A, alignmentAxis: s }),
        c && Hl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Ul() : void 0,
          ...z
        }),
        c && Gl({ ...z }),
        Kl({
          ...z,
          apply: ({ elements: L, rects: F, availableWidth: ue, availableHeight: ee }) => {
            const { width: pe, height: Oe } = F.reference, Fe = L.floating.style;
            Fe.setProperty("--radix-popper-available-width", `${ue}px`), Fe.setProperty("--radix-popper-available-height", `${ee}px`), Fe.setProperty("--radix-popper-anchor-width", `${pe}px`), Fe.setProperty("--radix-popper-anchor-height", `${Oe}px`);
          }
        }),
        C && Xl({ element: C, padding: l }),
        oc({ arrowWidth: S, arrowHeight: A }),
        p && Yl({ strategy: "referenceHidden", ...z })
      ]
    }), [k, U] = Vo(j), X = Ee(_);
    ke(() => {
      $ && (X == null || X());
    }, [$, X]);
    const Z = (G = B.arrow) == null ? void 0 : G.x, V = (te = B.arrow) == null ? void 0 : te.y, q = ((Q = B.arrow) == null ? void 0 : Q.centerOffset) !== 0, [T, H] = m.useState();
    return ke(() => {
      w && H(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ a(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: $ ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T,
          "--radix-popper-transform-origin": [
            (ae = B.transformOrigin) == null ? void 0 : ae.x,
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
          ec,
          {
            scope: n,
            placedSide: k,
            onArrowChange: M,
            arrowX: Z,
            arrowY: V,
            shouldHideArrow: q,
            children: /* @__PURE__ */ a(
              oe.div,
              {
                "data-side": k,
                "data-align": U,
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
zo.displayName = Zn;
var jo = "PopperArrow", nc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Wo = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = tc(jo, r), s = nc[i.placedSide];
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
          Zl,
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
Wo.displayName = jo;
function rc(e) {
  return e !== null;
}
var oc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, N;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = Vo(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + l / 2, h = (((N = o.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let _ = "", v = "";
    return f === "bottom" ? (_ = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (_ = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (_ = `${-c}px`, v = s ? d : `${h}px`) : f === "left" && (_ = `${r.floating.width + c}px`, v = s ? d : `${h}px`), { data: { x: _, y: v } };
  }
});
function Vo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Qn = Bo, Ho = $o, Uo = zo, Go = Wo, ac = "Portal", Jn = m.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  ke(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? kn.createPortal(/* @__PURE__ */ a(oe.div, { ...r, ref: t }), s) : null;
});
Jn.displayName = ac;
var un = "rovingFocusGroup.onEntryFocus", ic = { bubbles: !1, cancelable: !0 }, bt = "RovingFocusGroup", [Nn, Ko, sc] = Dn(bt), [lc, Yo] = He(
  bt,
  [sc]
), [cc, dc] = lc(bt), Xo = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(Nn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(Nn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(uc, { ...e, ref: t }) }) })
);
Xo.displayName = bt;
var uc = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = se(t, p), _ = $n(i), [v, g] = qe({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: bt
  }), [w, N] = m.useState(!1), y = Ee(f), C = Ko(n), M = m.useRef(!1), [P, S] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(un, y), () => A.removeEventListener(un, y);
  }, [y]), /* @__PURE__ */ a(
    cc,
    {
      scope: n,
      orientation: r,
      dir: _,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (A) => g(A),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => N(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => S((A) => A + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => S((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        oe.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: K(e.onMouseDown, () => {
            M.current = !0;
          }),
          onFocus: K(e.onFocus, (A) => {
            const D = !M.current;
            if (A.target === A.currentTarget && D && !w) {
              const O = new CustomEvent(un, ic);
              if (A.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const R = C().filter((j) => j.focusable), I = R.find((j) => j.active), z = R.find((j) => j.id === v), Y = [I, z, ...R].filter(
                  Boolean
                ).map((j) => j.ref.current);
                Qo(Y, u);
              }
            }
            M.current = !1;
          }),
          onBlur: K(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), qo = "RovingFocusGroupItem", Zo = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = ze(), f = i || c, u = dc(qo, n), d = u.currentTabStopId === f, p = Ko(n), { onFocusableItemAdd: h, onFocusableItemRemove: _, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => _();
    }, [r, h, _]), /* @__PURE__ */ a(
      Nn.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          oe.span,
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
                  y = u.loop ? mc(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => Qo(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
Zo.displayName = qo;
var fc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function pc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function hc(e, t, n) {
  const r = pc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return fc[r];
}
function Qo(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function mc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var vc = Xo, gc = Zo, _c = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qe = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Et = {}, fn = 0, Jo = function(e) {
  return e && (e.host || Jo(e.parentNode));
}, bc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Jo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, wc = function(e, t, n, r) {
  var o = bc(t, Array.isArray(e) ? e : [e]);
  Et[n] || (Et[n] = /* @__PURE__ */ new WeakMap());
  var i = Et[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  o.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), _ = h !== null && h !== "false", v = (Qe.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          Qe.set(p, v), i.set(p, g), s.push(p), v === 1 && _ && Rt.set(p, !0), g === 1 && p.setAttribute(n, "true"), _ || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), l.clear(), fn++, function() {
    s.forEach(function(d) {
      var p = Qe.get(d) - 1, h = i.get(d) - 1;
      Qe.set(d, p), i.set(d, h), p || (Rt.has(d) || d.removeAttribute(r), Rt.delete(d)), h || d.removeAttribute(n);
    }), fn--, fn || (Qe = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Et = {});
  };
}, yc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = _c(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), wc(r, o, n, "aria-hidden")) : function() {
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
function ea(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Nc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Tt = "right-scroll-bar-position", kt = "width-before-scroll-bar", Cc = "with-scroll-bars-hidden", xc = "--removed-body-scroll-bar-size";
function pn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Sc(e, t) {
  var n = J(function() {
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
var Rc = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Or = /* @__PURE__ */ new WeakMap();
function Ec(e, t) {
  var n = Sc(null, function(r) {
    return e.forEach(function(o) {
      return pn(o, r);
    });
  });
  return Rc(function() {
    var r = Or.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || pn(l, null);
      }), i.forEach(function(l) {
        o.has(l) || pn(l, s);
      });
    }
    Or.set(n, e);
  }, [e]), n;
}
function Mc(e) {
  return e;
}
function Pc(e, t) {
  t === void 0 && (t = Mc);
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
function Ic(e) {
  e === void 0 && (e = {});
  var t = Pc(null);
  return t.options = xe({ async: !0, ssr: !1 }, e), t;
}
var ta = function(e) {
  var t = e.sideCar, n = ea(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, xe({}, n));
};
ta.isSideCarExport = !0;
function Ac(e, t) {
  return e.useMedium(t), ta;
}
var na = Ic(), hn = function() {
}, Jt = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: hn,
    onWheelCapture: hn,
    onTouchMoveCapture: hn
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, _ = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, N = w === void 0 ? "div" : w, y = e.gapMode, C = ea(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), M = p, P = Ec([n, t]), S = xe(xe({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(M, { sideCar: na, removeScrollBar: f, shards: d, noRelative: h, noIsolation: _, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(l), xe(xe({}, S), { ref: P })) : m.createElement(N, xe({}, S, { className: c, ref: P }), l)
  );
});
Jt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jt.classNames = {
  fullWidth: kt,
  zeroRight: Tt
};
var Oc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Oc();
  return t && e.setAttribute("nonce", t), e;
}
function kc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Dc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Lc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Tc()) && (kc(t, n), Dc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Bc = function() {
  var e = Lc();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ra = function() {
  var e = Bc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Fc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, mn = function(e) {
  return parseInt(e || "", 10) || 0;
}, $c = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [mn(n), mn(r), mn(o)];
}, zc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Fc;
  var t = $c(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, jc = ra(), nt = "data-scroll-locked", Wc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Cc, ` {
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
  
  .`).concat(Tt, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(kt, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Tt, " .").concat(Tt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nt, `] {
    `).concat(xc, ": ").concat(l, `px;
  }
`);
}, Tr = function() {
  var e = parseInt(document.body.getAttribute(nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Vc = function() {
  m.useEffect(function() {
    return document.body.setAttribute(nt, (Tr() + 1).toString()), function() {
      var e = Tr() - 1;
      e <= 0 ? document.body.removeAttribute(nt) : document.body.setAttribute(nt, e.toString());
    };
  }, []);
}, Hc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Vc();
  var i = m.useMemo(function() {
    return zc(o);
  }, [o]);
  return m.createElement(jc, { styles: Wc(i, !t, o, n ? "" : "!important") });
}, Cn = !1;
if (typeof window < "u")
  try {
    var Mt = Object.defineProperty({}, "passive", {
      get: function() {
        return Cn = !0, !0;
      }
    });
    window.addEventListener("test", Mt, Mt), window.removeEventListener("test", Mt, Mt);
  } catch {
    Cn = !1;
  }
var Je = Cn ? { passive: !1 } : !1, Uc = function(e) {
  return e.tagName === "TEXTAREA";
}, oa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Uc(e) && n[t] === "visible")
  );
}, Gc = function(e) {
  return oa(e, "overflowY");
}, Kc = function(e) {
  return oa(e, "overflowX");
}, kr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = aa(e, r);
    if (o) {
      var i = ia(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Yc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Xc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, aa = function(e, t) {
  return e === "v" ? Gc(t) : Kc(t);
}, ia = function(e, t) {
  return e === "v" ? Yc(t) : Xc(t);
}, qc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Zc = function(e, t, n, r, o) {
  var i = qc(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var h = ia(e, l), _ = h[0], v = h[1], g = h[2], w = v - g - i * _;
    (_ || w) && aa(e, l) && (d += w, p += _);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, Pt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Dr = function(e) {
  return [e.deltaX, e.deltaY];
}, Lr = function(e) {
  return e && "current" in e ? e.current : e;
}, Qc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Jc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ed = 0, et = [];
function td(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(ed++)[0], i = m.useState(ra)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Nc([e.lockRef.current], (e.shards || []).map(Lr), !0).filter(Boolean);
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
    var w = Pt(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - w[0], C = "deltaY" in v ? v.deltaY : N[1] - w[1], M, P = v.target, S = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && S === "h" && P.type === "range")
      return !1;
    var A = window.getSelection(), D = A && A.anchorNode, O = D ? D === P || D.contains(P) : !1;
    if (O)
      return !1;
    var R = kr(S, P);
    if (!R)
      return !0;
    if (R ? M = S : (M = S === "v" ? "h" : "v", R = kr(S, P)), !R)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = M), !M)
      return !0;
    var I = r.current || M;
    return Zc(I, g, v, I === "h" ? y : C);
  }, []), c = m.useCallback(function(v) {
    var g = v;
    if (!(!et.length || et[et.length - 1] !== i)) {
      var w = "deltaY" in g ? Dr(g) : Pt(g), N = t.current.filter(function(M) {
        return M.name === g.type && (M.target === g.target || g.target === M.shadowParent) && Qc(M.delta, w);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(Lr).filter(Boolean).filter(function(M) {
          return M.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(v, g, w, N) {
    var y = { name: v, delta: g, target: w, should: N, shadowParent: nd(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = Pt(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    f(v.type, Dr(v), v.target, l(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    f(v.type, Pt(v), v.target, l(v, e.lockRef.current));
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
  var h = e.removeScrollBar, _ = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    _ ? m.createElement(i, { styles: Jc(o) }) : null,
    h ? m.createElement(Hc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function nd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const rd = Ac(na, td);
var sa = m.forwardRef(function(e, t) {
  return m.createElement(Jt, xe({}, e, { ref: t, sideCar: rd }));
});
sa.classNames = Jt.classNames;
var xn = ["Enter", " "], od = ["ArrowDown", "PageUp", "Home"], la = ["ArrowUp", "PageDown", "End"], ad = [...od, ...la], id = {
  ltr: [...xn, "ArrowRight"],
  rtl: [...xn, "ArrowLeft"]
}, sd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, wt = "Menu", [ht, ld, cd] = Dn(wt), [Ze, ca] = He(wt, [
  cd,
  Qt,
  Yo
]), yt = Qt(), da = Yo(), [ua, Ge] = Ze(wt), [dd, Nt] = Ze(wt), fa = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = yt(t), [c, f] = m.useState(null), u = m.useRef(!1), d = Ee(i), p = $n(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", _, { capture: !0, once: !0 }), document.addEventListener("pointermove", _, { capture: !0, once: !0 });
    }, _ = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", _, { capture: !0 }), document.removeEventListener("pointermove", _, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(Qn, { ...l, children: /* @__PURE__ */ a(
    ua,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ a(
        dd,
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
fa.displayName = wt;
var ud = "MenuAnchor", er = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ a(Ho, { ...o, ...r, ref: t });
  }
);
er.displayName = ud;
var tr = "MenuPortal", [fd, pa] = Ze(tr, {
  forceMount: void 0
}), ha = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Ge(tr, t);
  return /* @__PURE__ */ a(fd, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Ue, { present: n || i.open, children: /* @__PURE__ */ a(Jn, { asChild: !0, container: o, children: r }) }) });
};
ha.displayName = tr;
var be = "MenuContent", [pd, nr] = Ze(be), ma = m.forwardRef(
  (e, t) => {
    const n = pa(be, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ge(be, e.__scopeMenu), s = Nt(be, e.__scopeMenu);
    return /* @__PURE__ */ a(ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Ue, { present: r || i.open, children: /* @__PURE__ */ a(ht.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(hd, { ...o, ref: t }) : /* @__PURE__ */ a(md, { ...o, ref: t }) }) }) });
  }
), hd = m.forwardRef(
  (e, t) => {
    const n = Ge(be, e.__scopeMenu), r = m.useRef(null), o = se(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return yc(i);
    }, []), /* @__PURE__ */ a(
      rr,
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
), md = m.forwardRef((e, t) => {
  const n = Ge(be, e.__scopeMenu);
  return /* @__PURE__ */ a(
    rr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), vd = /* @__PURE__ */ Dt("MenuContent.ScrollLock"), rr = m.forwardRef(
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
      disableOutsideScroll: _,
      ...v
    } = e, g = Ge(be, n), w = Nt(be, n), N = yt(n), y = da(n), C = ld(n), [M, P] = m.useState(null), S = m.useRef(null), A = se(t, S, g.onContentChange), D = m.useRef(0), O = m.useRef(""), R = m.useRef(0), I = m.useRef(null), z = m.useRef("right"), W = m.useRef(0), Y = _ ? sa : m.Fragment, j = _ ? { as: vd, allowPinchZoom: !0 } : void 0, $ = (k) => {
      var G, te;
      const U = O.current + k, X = C().filter((Q) => !Q.disabled), Z = document.activeElement, V = (G = X.find((Q) => Q.ref.current === Z)) == null ? void 0 : G.textValue, q = X.map((Q) => Q.textValue), T = Md(q, U, V), H = (te = X.find((Q) => Q.textValue === T)) == null ? void 0 : te.ref.current;
      (function Q(ae) {
        O.current = ae, window.clearTimeout(D.current), ae !== "" && (D.current = window.setTimeout(() => Q(""), 1e3));
      })(U), H && setTimeout(() => H.focus());
    };
    m.useEffect(() => () => window.clearTimeout(D.current), []), Fs();
    const B = m.useCallback((k) => {
      var X, Z;
      return z.current === ((X = I.current) == null ? void 0 : X.side) && Id(k, (Z = I.current) == null ? void 0 : Z.area);
    }, []);
    return /* @__PURE__ */ a(
      pd,
      {
        scope: n,
        searchRef: O,
        onItemEnter: m.useCallback(
          (k) => {
            B(k) && k.preventDefault();
          },
          [B]
        ),
        onItemLeave: m.useCallback(
          (k) => {
            var U;
            B(k) || ((U = S.current) == null || U.focus(), P(null));
          },
          [B]
        ),
        onTriggerLeave: m.useCallback(
          (k) => {
            B(k) && k.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: R,
        onPointerGraceIntentChange: m.useCallback((k) => {
          I.current = k;
        }, []),
        children: /* @__PURE__ */ a(Y, { ...j, children: /* @__PURE__ */ a(
          yo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: K(i, (k) => {
              var U;
              k.preventDefault(), (U = S.current) == null || U.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              Vn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ a(
                  vc,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: M,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: K(c, (k) => {
                      w.isUsingKeyboardRef.current || k.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      Uo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Oa(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...N,
                        ...v,
                        ref: A,
                        style: { outline: "none", ...v.style },
                        onKeyDown: K(v.onKeyDown, (k) => {
                          const X = k.target.closest("[data-radix-menu-content]") === k.currentTarget, Z = k.ctrlKey || k.altKey || k.metaKey, V = k.key.length === 1;
                          X && (k.key === "Tab" && k.preventDefault(), !Z && V && $(k.key));
                          const q = S.current;
                          if (k.target !== q || !ad.includes(k.key)) return;
                          k.preventDefault();
                          const H = C().filter((G) => !G.disabled).map((G) => G.ref.current);
                          la.includes(k.key) && H.reverse(), Rd(H);
                        }),
                        onBlur: K(e.onBlur, (k) => {
                          k.currentTarget.contains(k.target) || (window.clearTimeout(D.current), O.current = "");
                        }),
                        onPointerMove: K(
                          e.onPointerMove,
                          mt((k) => {
                            const U = k.target, X = W.current !== k.clientX;
                            if (k.currentTarget.contains(U) && X) {
                              const Z = k.clientX > W.current ? "right" : "left";
                              z.current = Z, W.current = k.clientX;
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
ma.displayName = be;
var gd = "MenuGroup", or = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(oe.div, { role: "group", ...r, ref: t });
  }
);
or.displayName = gd;
var _d = "MenuLabel", va = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(oe.div, { ...r, ref: t });
  }
);
va.displayName = _d;
var jt = "MenuItem", Br = "menu.itemSelect", en = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), s = Nt(jt, e.__scopeMenu), l = nr(jt, e.__scopeMenu), c = se(t, i), f = m.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(Br, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Br, (h) => r == null ? void 0 : r(h), { once: !0 }), to(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      ga,
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
          n || p && d.key === " " || xn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
en.displayName = jt;
var ga = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = nr(jt, n), l = da(n), c = m.useRef(null), f = se(t, c), [u, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const _ = c.current;
      _ && h((_.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      ht.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a(gc, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          oe.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: K(
              e.onPointerMove,
              mt((_) => {
                r ? s.onItemLeave(_) : (s.onItemEnter(_), _.defaultPrevented || _.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: K(
              e.onPointerLeave,
              mt((_) => s.onItemLeave(_))
            ),
            onFocus: K(e.onFocus, () => d(!0)),
            onBlur: K(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), bd = "MenuCheckboxItem", _a = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(Ca, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      en,
      {
        role: "menuitemcheckbox",
        "aria-checked": Wt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": sr(n),
        onSelect: K(
          o.onSelect,
          () => r == null ? void 0 : r(Wt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
_a.displayName = bd;
var ba = "MenuRadioGroup", [wd, yd] = Ze(
  ba,
  { value: void 0, onValueChange: () => {
  } }
), wa = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ee(r);
    return /* @__PURE__ */ a(wd, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(or, { ...o, ref: t }) });
  }
);
wa.displayName = ba;
var ya = "MenuRadioItem", Na = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = yd(ya, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(Ca, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      en,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": sr(i),
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
Na.displayName = ya;
var ar = "MenuItemIndicator", [Ca, Nd] = Ze(
  ar,
  { checked: !1 }
), xa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = Nd(ar, n);
    return /* @__PURE__ */ a(
      Ue,
      {
        present: r || Wt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          oe.span,
          {
            ...o,
            ref: t,
            "data-state": sr(i.checked)
          }
        )
      }
    );
  }
);
xa.displayName = ar;
var Cd = "MenuSeparator", Sa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      oe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Sa.displayName = Cd;
var xd = "MenuArrow", Ra = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ a(Go, { ...o, ...r, ref: t });
  }
);
Ra.displayName = xd;
var ir = "MenuSub", [Sd, Ea] = Ze(ir), Ma = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Ge(ir, t), s = yt(t), [l, c] = m.useState(null), [f, u] = m.useState(null), d = Ee(o);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ a(Qn, { ...s, children: /* @__PURE__ */ a(
    ua,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        Sd,
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
Ma.displayName = ir;
var ut = "MenuSubTrigger", Pa = m.forwardRef(
  (e, t) => {
    const n = Ge(ut, e.__scopeMenu), r = Nt(ut, e.__scopeMenu), o = Ea(ut, e.__scopeMenu), i = nr(ut, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(er, { asChild: !0, ...f, children: /* @__PURE__ */ a(
      ga,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Oa(n.open),
        ...e,
        ref: Ht(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: K(
          e.onPointerMove,
          mt((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: K(
          e.onPointerLeave,
          mt((d) => {
            var h, _;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (_ = n.content) == null ? void 0 : _.dataset.side, g = v === "right", w = g ? -5 : 5, N = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
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
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || id[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Pa.displayName = ut;
var Ia = "MenuSubContent", Aa = m.forwardRef(
  (e, t) => {
    const n = pa(be, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ge(be, e.__scopeMenu), s = Nt(be, e.__scopeMenu), l = Ea(Ia, e.__scopeMenu), c = m.useRef(null), f = se(t, c);
    return /* @__PURE__ */ a(ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Ue, { present: r || i.open, children: /* @__PURE__ */ a(ht.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      rr,
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
          var h;
          const d = u.currentTarget.contains(u.target), p = sd[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Aa.displayName = Ia;
function Oa(e) {
  return e ? "open" : "closed";
}
function Wt(e) {
  return e === "indeterminate";
}
function sr(e) {
  return Wt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ed(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Md(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Ed(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Pd(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function Id(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Pd(n, t);
}
function mt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ad = fa, Od = er, Td = ha, kd = ma, Dd = or, Ld = va, Bd = en, Fd = _a, $d = wa, zd = Na, jd = xa, Wd = Sa, Vd = Ra, Hd = Ma, Ud = Pa, Gd = Aa, tn = "DropdownMenu", [Kd] = He(
  tn,
  [ca]
), de = ca(), [Yd, Ta] = Kd(tn), ka = (e) => {
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
    caller: tn
  });
  return /* @__PURE__ */ a(
    Yd,
    {
      scope: t,
      triggerId: ze(),
      triggerRef: f,
      contentId: ze(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ a(Ad, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
ka.displayName = tn;
var Da = "DropdownMenuTrigger", La = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Ta(Da, n), s = de(n);
    return /* @__PURE__ */ a(Od, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      oe.button,
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
        ref: Ht(t, i.triggerRef),
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
La.displayName = Da;
var Xd = "DropdownMenuPortal", Ba = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = de(t);
  return /* @__PURE__ */ a(Td, { ...r, ...n });
};
Ba.displayName = Xd;
var Fa = "DropdownMenuContent", $a = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ta(Fa, n), i = de(n), s = m.useRef(!1);
    return /* @__PURE__ */ a(
      kd,
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
$a.displayName = Fa;
var qd = "DropdownMenuGroup", za = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Dd, { ...o, ...r, ref: t });
  }
);
za.displayName = qd;
var Zd = "DropdownMenuLabel", ja = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Ld, { ...o, ...r, ref: t });
  }
);
ja.displayName = Zd;
var Qd = "DropdownMenuItem", Wa = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Bd, { ...o, ...r, ref: t });
  }
);
Wa.displayName = Qd;
var Jd = "DropdownMenuCheckboxItem", Va = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Fd, { ...o, ...r, ref: t });
});
Va.displayName = Jd;
var eu = "DropdownMenuRadioGroup", Ha = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a($d, { ...o, ...r, ref: t });
});
Ha.displayName = eu;
var tu = "DropdownMenuRadioItem", Ua = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(zd, { ...o, ...r, ref: t });
});
Ua.displayName = tu;
var nu = "DropdownMenuItemIndicator", Ga = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(jd, { ...o, ...r, ref: t });
});
Ga.displayName = nu;
var ru = "DropdownMenuSeparator", Ka = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Wd, { ...o, ...r, ref: t });
});
Ka.displayName = ru;
var ou = "DropdownMenuArrow", au = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ a(Vd, { ...o, ...r, ref: t });
  }
);
au.displayName = ou;
var iu = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = de(t), [l, c] = qe({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a(Hd, { ...s, open: l, onOpenChange: c, children: n });
}, su = "DropdownMenuSubTrigger", Ya = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(Ud, { ...o, ...r, ref: t });
});
Ya.displayName = su;
var lu = "DropdownMenuSubContent", Xa = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ a(
    Gd,
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
Xa.displayName = lu;
var qa = ka, Za = La, lr = Ba, Qa = $a, cu = za, du = ja, Ja = Wa, uu = Va, fu = Ha, pu = Ua, ei = Ga, hu = Ka, mu = iu, vu = Ya, gu = Xa;
const ti = E.forwardRef(
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
), Me = qa, Pe = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    Za,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ie = E.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: o, ...i }, s) {
  return /* @__PURE__ */ a(lr, { container: o, children: /* @__PURE__ */ a(
    Qa,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), ni = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    du,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), _u = E.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(cu, { ref: n, ...t });
}), re = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    Ja,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ip = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ b(
    uu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ei, { children: /* @__PURE__ */ a(Te, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), Ap = E.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(fu, { ref: n, ...t });
}), Op = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ b(
    pu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ei, { children: /* @__PURE__ */ a(Te, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), at = E.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(hu, { asChild: !0, ...n, children: /* @__PURE__ */ a(
    ti,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" ")
    }
  ) });
}), Tp = mu, kp = E.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ b(
    vu,
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
}), Dp = E.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...o }, i) {
  return /* @__PURE__ */ a(lr, { container: r, children: /* @__PURE__ */ a(
    gu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...o
    }
  ) });
}), Lp = E.forwardRef(
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
function Fr({ type: e }) {
  return /* @__PURE__ */ a("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ a(rt, { size: 16 }) : /* @__PURE__ */ a("span", { children: "/" }) });
}
function bu({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ b(Me, { children: [
    /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        children: /* @__PURE__ */ a(Xe, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ a(Ie, { sideOffset: 4, align: "start", children: e.map((n, r) => /* @__PURE__ */ a(
      re,
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
function wu({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ b(Me, { children: [
    /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ b(
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
    /* @__PURE__ */ a(Ie, { sideOffset: 4, align: "start", children: e.menu.map((n, r) => /* @__PURE__ */ a(
      re,
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
function yu({
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
    return /* @__PURE__ */ a(wu, { item: e, onNavigate: t });
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
function Nu({
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
      /* @__PURE__ */ a(Fr, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(bu, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ a(Fr, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(yu, { item: f, onNavigate: r }) }, u)
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
function Cu() {
  return /* @__PURE__ */ a("span", { className: "button__spinner", "aria-hidden": "true" });
}
const he = E.forwardRef(
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
    const p = c == null, h = s || !!o, _ = !s && !!i;
    return /* @__PURE__ */ b(
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
        "data-icon-end": _ ? "" : void 0,
        disabled: l || s,
        "aria-busy": s ? !0 : void 0,
        ...u,
        children: [
          (s || o) && (s ? /* @__PURE__ */ a(Cu, {}) : o),
          c,
          !s && i
        ]
      }
    );
  }
), me = E.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ a(he, { ref: r, iconStart: t, ...n });
  }
), xu = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function Su(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function Ru(e) {
  return e === "primary" ? "primary" : "neutral";
}
function $r({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = Su(e.type), o = Ru(e.type);
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
    he,
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
function Eu({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ b(Me, { children: [
    /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
      me,
      {
        icon: /* @__PURE__ */ a(Yr, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ a(
      Ie,
      {
        sideOffset: 4,
        align: t === "left" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ b(
          re,
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
function Mu({
  actions: e,
  variant: t = "full",
  iconOnly: n = !1,
  alignment: r = "left",
  className: o,
  style: i
}) {
  const s = (() => {
    const N = [...e].reverse().findIndex((y) => y.type === "primary");
    return N === -1 ? e.length - 1 : e.length - 1 - N;
  })(), l = e[s], c = e.filter((N, y) => y !== s), f = xu[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const h = d.length > 0 ? /* @__PURE__ */ a(
    Eu,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, v = (r === "right" ? [...u].reverse() : u).map((N) => /* @__PURE__ */ a($r, { action: N, iconOnly: n }, N.id)), g = /* @__PURE__ */ a($r, { action: l, iconOnly: n }, l.id), w = r === "left" ? [h, ...v, g] : [g, ...v, h];
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
function Pu() {
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
function Iu() {
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
const Bp = E.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: o, id: i, className: s, ...l }, c) {
    const f = ne(), u = i ?? f, d = ie(null);
    return An(c, () => d.current), ce(() => {
      d.current && (d.current.indeterminate = n ?? !1);
    }, [n]), /* @__PURE__ */ b(
      "label",
      {
        htmlFor: u,
        className: ["checkbox", s].filter(Boolean).join(" "),
        "data-disabled": o || void 0,
        "data-validation": r,
        children: [
          /* @__PURE__ */ b("span", { className: "checkbox__control", children: [
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
            /* @__PURE__ */ b("span", { className: "checkbox__box", "aria-hidden": "true", children: [
              /* @__PURE__ */ a(Pu, {}),
              /* @__PURE__ */ a(Iu, {})
            ] })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), Fp = E.forwardRef(
  function({ legend: t, required: n, hint: r, validation: o, validationMessage: i, children: s, className: l }, c) {
    const f = ne(), u = ne();
    return /* @__PURE__ */ b(
      "fieldset",
      {
        ref: c,
        className: ["checkbox-group", l].filter(Boolean).join(" "),
        "data-validation": o,
        "aria-describedby": [r ? f : null, i ? u : null].filter(Boolean).join(" ") || void 0,
        children: [
          /* @__PURE__ */ b("legend", { className: "checkbox-group__legend", children: [
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
), Au = { small: 12, medium: 16 }, $p = E.forwardRef(
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
    const [h, _] = J(c), v = l !== void 0, g = v ? l : h, w = Au[i];
    if (n === "selectable") {
      const N = () => {
        if (s) return;
        const y = !g;
        v || _(y), f == null || f(y);
      };
      return /* @__PURE__ */ b(
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
              Te,
              {
                className: "chip__check",
                size: w,
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
    return /* @__PURE__ */ b(
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
              children: /* @__PURE__ */ a(Ne, { size: w, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function zp({
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
function Ou(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function Tu(e) {
  return e.flatMap((t) => t.items);
}
function ku({
  label: e,
  onRemove: t,
  disabled: n
}) {
  return /* @__PURE__ */ b("span", { className: "combobox__tag", children: [
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
const jp = E.forwardRef(
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
      id: _,
      className: v
    } = t, g = t.selection === "multi", w = ne(), N = _ ?? `combobox-${w}`, y = `${N}-listbox`, C = `${N}-hint`, M = `${N}-message`, P = ie(null), S = ie(null);
    ce(() => {
      n && (typeof n == "function" ? n(S.current) : n.current = S.current);
    }, [n]);
    const [A, D] = J(!1), [O, R] = J(""), [I, z] = J(-1), W = t.value !== void 0, [Y, j] = J(() => {
      if (g) return t.value ?? [];
      const x = t.value;
      return x ? [x] : [];
    }), $ = W ? g ? t.value ?? [] : t.value ? [t.value] : [] : Y, B = At(
      () => $.map((x) => r.find((L) => L.value === x)).filter(Boolean),
      [$, r]
    ), k = At(() => {
      const x = O.toLowerCase().trim(), L = x ? r.filter((F) => F.label.toLowerCase().includes(x)) : r;
      return Ou(L);
    }, [r, O]), U = At(() => Tu(k), [k]), X = le(
      (x) => $.includes(x),
      [$]
    ), Z = le(
      (x) => {
        var L, F;
        W || j(x), g ? (L = t.onChange) == null || L.call(t, x) : (F = t.onChange) == null || F.call(t, x[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [W, g]
    ), V = le(
      (x) => {
        var L;
        if (!x.disabled)
          if (g) {
            const F = X(x.value) ? $.filter((ue) => ue !== x.value) : [...$, x.value];
            Z(F), R(""), (L = S.current) == null || L.focus();
          } else
            Z([x.value]), R(""), D(!1), z(-1);
      },
      [g, X, $, Z]
    ), q = le(
      (x) => {
        Z($.filter((L) => L !== x));
      },
      [$, Z]
    ), T = () => {
      d || (D(!0), z(-1));
    }, H = () => {
      D(!1), R(""), z(-1);
    };
    ce(() => {
      if (!A) return;
      const x = (L) => {
        var F;
        (F = P.current) != null && F.contains(L.target) || H();
      };
      return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
    }, [A]);
    const G = !g && !A && B.length > 0 ? B[0].label : O, te = (x) => {
      switch (x.key) {
        case "ArrowDown": {
          if (x.preventDefault(), !A) {
            T();
            return;
          }
          z((L) => Math.min(L + 1, U.length - 1));
          break;
        }
        case "ArrowUp": {
          x.preventDefault(), z((L) => Math.max(L - 1, 0));
          break;
        }
        case "Enter": {
          if (x.preventDefault(), !A) {
            T();
            return;
          }
          I >= 0 && U[I] && V(U[I]);
          break;
        }
        case "Escape": {
          x.preventDefault(), H();
          break;
        }
        case "Backspace": {
          g && O === "" && $.length > 0 && q($[$.length - 1]);
          break;
        }
      }
    };
    ce(() => {
      z(-1);
    }, [O]);
    const Q = ie(null);
    ce(() => {
      if (I < 0 || !Q.current) return;
      const x = Q.current.querySelector(`[data-index="${I}"]`);
      x == null || x.scrollIntoView({ block: "nearest" });
    }, [I]);
    const ae = I >= 0 && U[I] ? `${y}-${U[I].value}` : void 0, fe = [
      s ? C : null,
      c ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ b(
      "div",
      {
        ref: P,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": A || void 0,
        "data-disabled": d || void 0,
        children: [
          o && /* @__PURE__ */ b("label", { className: "combobox__label", htmlFor: N, children: [
            o,
            p && /* @__PURE__ */ a("span", { className: "combobox__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ b(
            "div",
            {
              className: "combobox__field",
              onClick: () => {
                var x;
                A || T(), (x = S.current) == null || x.focus();
              },
              children: [
                g && B.map((x) => /* @__PURE__ */ a(
                  ku,
                  {
                    label: x.label,
                    disabled: d,
                    onRemove: () => q(x.value)
                  },
                  x.value
                )),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: S,
                    id: N,
                    type: "text",
                    role: "combobox",
                    className: "combobox__input",
                    value: G,
                    placeholder: g && B.length > 0 ? "" : i,
                    disabled: d,
                    required: p,
                    "aria-expanded": A,
                    "aria-controls": A ? y : void 0,
                    "aria-activedescendant": ae,
                    "aria-autocomplete": "list",
                    "aria-describedby": fe,
                    "aria-required": p,
                    autoComplete: "off",
                    onChange: (x) => {
                      R(x.target.value), A || T(), !g && x.target.value === "" && $.length > 0 && Z([]);
                    },
                    onFocus: T,
                    onKeyDown: te
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
          A && /* @__PURE__ */ a(
            "ul",
            {
              ref: Q,
              id: y,
              role: "listbox",
              className: "combobox__listbox",
              "aria-label": o,
              "aria-multiselectable": g || void 0,
              children: U.length === 0 ? /* @__PURE__ */ a("li", { className: "combobox__no-results", role: "presentation", children: h }) : k.map((x, L) => /* @__PURE__ */ b(E.Fragment, { children: [
                x.name && /* @__PURE__ */ a("li", { role: "presentation", className: "combobox__group-header", children: x.name }),
                L > 0 && !x.name && /* @__PURE__ */ a("li", { role: "separator", className: "combobox__group-divider" }),
                x.items.map((F) => {
                  const ue = U.indexOf(F), ee = X(F.value), pe = ue === I;
                  return /* @__PURE__ */ b(
                    "li",
                    {
                      id: `${y}-${F.value}`,
                      role: "option",
                      "aria-selected": ee,
                      "aria-disabled": F.disabled || void 0,
                      className: "combobox__option",
                      "data-index": ue,
                      "data-active": pe || void 0,
                      "data-selected": ee || void 0,
                      "data-disabled": F.disabled || void 0,
                      onMouseDown: (Oe) => {
                        Oe.preventDefault(), V(F);
                      },
                      onMouseEnter: () => z(ue),
                      children: [
                        g && /* @__PURE__ */ a("span", { className: "combobox__option-check", "aria-hidden": "true", children: ee && /* @__PURE__ */ a(Te, { size: 12 }) }),
                        F.icon && /* @__PURE__ */ a("span", { className: "combobox__option-icon", "aria-hidden": "true", children: F.icon }),
                        /* @__PURE__ */ b("span", { className: "combobox__option-content", children: [
                          /* @__PURE__ */ a("span", { className: "combobox__option-label", children: F.label }),
                          F.description && /* @__PURE__ */ a("span", { className: "combobox__option-description", children: F.description })
                        ] }),
                        !g && ee && /* @__PURE__ */ a(
                          Te,
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
function Wp({
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
  "aria-label": _
}) {
  const v = ne(), g = p ?? v, w = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, M = n !== void 0, [P, S] = J(r ?? ""), A = M ? n ?? "" : P, [D, O] = J(!1), [R, I] = J(-1), z = ie(null), W = ie(null), Y = ie(null), j = Du(o), $ = Lu(j), B = (x) => `${g}-option-${x}`, k = (x) => {
    for (let L = x + 1; L < $.length; L++)
      if (!$[L].disabled) return L;
    return x;
  }, U = (x) => {
    for (let L = x - 1; L >= 0; L--)
      if (!$[L].disabled) return L;
    return x;
  }, X = () => $.findIndex((x) => !x.disabled), Z = () => {
    for (let x = $.length - 1; x >= 0; x--)
      if (!$[x].disabled) return x;
    return -1;
  };
  ce(() => {
    if (!D) return;
    const x = (L) => {
      var F;
      (F = Y.current) != null && F.contains(L.target) || (O(!1), I(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [D]), ce(() => {
    if (R < 0 || !W.current) return;
    const x = W.current.querySelector(`#${CSS.escape(B(R))}`);
    x == null || x.scrollIntoView({ block: "nearest" });
  }, [R]);
  const V = (x) => {
    var L;
    x.disabled || (M || S(x.value), i == null || i(x.value), O(!1), I(-1), (L = z.current) == null || L.focus());
  }, q = (x) => {
    const L = x !== void 0 ? x : A ? $.findIndex((F) => F.value === A) : X();
    I(L >= 0 ? L : X()), O(!0);
  }, T = (x) => {
    switch (x.key) {
      case "Enter":
      case " ":
        x.preventDefault(), D ? R >= 0 && V($[R]) : q();
        break;
      case "ArrowDown":
        x.preventDefault(), D ? I((L) => k(L < 0 ? -1 : L)) : q(X());
        break;
      case "ArrowUp":
        x.preventDefault(), D ? I((L) => U(L < 0 ? $.length : L)) : q(Z());
        break;
      case "Home":
        x.preventDefault(), D && I(X());
        break;
      case "End":
        x.preventDefault(), D && I(Z());
        break;
      case "Escape":
        x.preventDefault(), O(!1), I(-1);
        break;
      case "Tab":
        O(!1), I(-1);
        break;
    }
  }, H = $.find((x) => x.value === A), G = c === "small" ? 14 : c === "large" ? 18 : 16, te = R >= 0 && D ? B(R) : void 0, Q = [];
  let ae = 0;
  for (const [x, L] of j.entries())
    Q.push({
      groupName: x,
      items: L.map((F) => ({ option: F, idx: ae++ }))
    });
  const fe = Q.some((x) => x.groupName !== "");
  return /* @__PURE__ */ b(
    "div",
    {
      ref: Y,
      className: ["dropdown", h].filter(Boolean).join(" "),
      "data-size": c,
      "data-open": D || void 0,
      "data-disabled": s || void 0,
      "data-validation": f,
      children: [
        e && /* @__PURE__ */ b("label", { id: w, htmlFor: g, className: "dropdown__label", children: [
          e,
          l && /* @__PURE__ */ a("span", { className: "dropdown__required", "aria-hidden": "true", children: " *" })
        ] }),
        /* @__PURE__ */ b(
          "button",
          {
            ref: z,
            id: g,
            type: "button",
            className: "dropdown__trigger",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": D,
            "aria-controls": N,
            "aria-labelledby": _ ? void 0 : w,
            "aria-label": _,
            "aria-activedescendant": te,
            "aria-describedby": [y, C].filter(Boolean).join(" ") || void 0,
            "aria-required": l || void 0,
            "aria-invalid": f === "negative" || void 0,
            disabled: s,
            onClick: () => {
              D ? (O(!1), I(-1)) : q();
            },
            onKeyDown: T,
            children: [
              /* @__PURE__ */ a("span", { className: H ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: H ? H.label : t }),
              /* @__PURE__ */ a(gt, { size: G, className: "dropdown__chevron", "aria-hidden": "true" })
            ]
          }
        ),
        D && /* @__PURE__ */ a(
          "ul",
          {
            ref: W,
            id: N,
            role: "listbox",
            className: "dropdown__listbox",
            "aria-label": _ ?? e,
            children: Q.map((x, L) => /* @__PURE__ */ b(E.Fragment, { children: [
              fe && L > 0 && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
              x.groupName && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-header", children: x.groupName }),
              x.items.map(({ option: F, idx: ue }) => {
                const ee = F.value === A, pe = R === ue;
                return /* @__PURE__ */ b(
                  "li",
                  {
                    id: B(ue),
                    role: "option",
                    className: "dropdown__option",
                    "aria-selected": ee,
                    "aria-disabled": F.disabled || void 0,
                    "data-selected": ee || void 0,
                    "data-active": pe || void 0,
                    "data-disabled": F.disabled || void 0,
                    onMouseDown: (Oe) => Oe.preventDefault(),
                    onMouseEnter: () => !F.disabled && I(ue),
                    onClick: () => V(F),
                    children: [
                      /* @__PURE__ */ a("span", { className: "dropdown__option-check", "aria-hidden": "true", children: ee && /* @__PURE__ */ a(Te, { size: 12, strokeWidth: 2.5 }) }),
                      F.icon && /* @__PURE__ */ a("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: F.icon }),
                      /* @__PURE__ */ b("span", { className: "dropdown__option-content", children: [
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
function Vp({
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
  const f = ne();
  return /* @__PURE__ */ b(
    s ? "label" : "div",
    {
      htmlFor: s,
      id: l,
      className: ["field-label", c].filter(Boolean).join(" "),
      "data-position": i !== "stacked" ? i : void 0,
      children: [
        /* @__PURE__ */ b("span", { className: "field-label__header", children: [
          /* @__PURE__ */ a("span", { className: "field-label__text", title: e, children: e }),
          n && !r && /* @__PURE__ */ a("span", { className: "field-label__required", "aria-hidden": "true", children: " *" }),
          r && !n && /* @__PURE__ */ a("span", { className: "field-label__optional", children: " (optional)" }),
          o && /* @__PURE__ */ b("span", { className: "field-label__help", children: [
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "field-label__help-btn",
                "aria-label": "Help information",
                "aria-describedby": f,
                children: /* @__PURE__ */ a(Mi, { size: 14, "aria-hidden": "true" })
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
function Sn(e) {
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
  return n && e.size > n ? `File exceeds ${Sn(n)} limit` : null;
}
function $u({ file: e, size: t = 16 }) {
  var o;
  const n = e.type.toLowerCase(), r = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ a(Oi, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ a(vn, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ a(vn, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ a(Ti, { size: t }) : /* @__PURE__ */ a(ki, { size: t });
}
function Hp({
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
  onFileRemove: _,
  id: v,
  className: g
}) {
  const w = ne(), N = v ?? w, y = `${N}-input`, C = e ? `${N}-label` : void 0, M = `${N}-live`, P = ie(null), [S, A] = J([]), [D, O] = J(!1), [R, I] = J(""), z = le((T) => {
    if (u) return;
    const G = Array.from(T).map((x) => {
      const L = Fu(x, l, c);
      return { id: Bu(), file: x, status: L ? "error" : "added", errorMessage: L ?? void 0 };
    });
    A((x) => d ? [...x, ...G] : G);
    const te = G.filter((x) => x.status === "added").map((x) => x.file);
    te.length > 0 && (p == null || p(te));
    const Q = G.filter((x) => x.status === "added").length, ae = G.filter((x) => x.status === "error").length, fe = [];
    Q && fe.push(`${Q} file${Q > 1 ? "s" : ""} added`), ae && fe.push(`${ae} file${ae > 1 ? "s" : ""} failed validation`), I(fe.join(". ")), P.current && (P.current.value = "");
  }, [u, l, c, d, p]), W = le((T) => {
    A((H) => {
      const G = H.find((te) => te.id === T);
      return G && I(`${G.file.name} removed`), H.filter((te) => te.id !== T);
    }), _ == null || _(T);
  }, [_]), Y = le(async () => {
    if (!h) return;
    const T = S.filter((H) => H.status === "added" || H.status === "error");
    if (T.length) {
      A((H) => H.map(
        (G) => T.find((te) => te.id === G.id) ? { ...G, status: "uploading", errorMessage: void 0 } : G
      )), I("Uploading files…");
      try {
        await h(T.map((H) => H.file)), A((H) => H.map(
          (G) => T.find((te) => te.id === G.id) ? { ...G, status: "uploaded" } : G
        )), I(`${T.length} file${T.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (H) {
        const G = H instanceof Error ? H.message : "Upload failed";
        A((te) => te.map(
          (Q) => T.find((ae) => ae.id === Q.id) ? { ...Q, status: "error", errorMessage: G } : Q
        )), I(`Upload failed: ${G}`);
      }
    }
  }, [S, h]), j = (T) => {
    T.preventDefault(), u || O(!0);
  }, $ = (T) => {
    T.currentTarget.contains(T.relatedTarget) || O(!1);
  }, B = (T) => {
    T.preventDefault(), O(!1), !u && z(T.dataTransfer.files);
  }, k = (T) => {
    var H;
    (H = T.target.files) != null && H.length && z(T.target.files);
  }, U = () => {
    var T;
    u || (T = P.current) == null || T.click();
  }, X = S.length > 0, Z = S.some((T) => T.status === "added"), V = S.some((T) => T.status === "uploading"), q = [
    f,
    c ? `Max ${Sn(c)}` : null
  ].filter(Boolean).join(" · ");
  return /* @__PURE__ */ b(
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
            children: R
          }
        ),
        e && /* @__PURE__ */ b("span", { id: C, className: "file-uploader__label", children: [
          e,
          n && /* @__PURE__ */ a("span", { className: "file-uploader__required", "aria-hidden": "true", children: " *" })
        ] }),
        t && /* @__PURE__ */ a("span", { className: "file-uploader__description", children: t }),
        /* @__PURE__ */ b("div", { className: "file-uploader__body", children: [
          /* @__PURE__ */ b(
            "div",
            {
              className: "file-uploader__zone",
              "data-dragging": D || void 0,
              "aria-labelledby": C,
              "aria-label": e ? void 0 : o ?? "File upload area",
              "aria-disabled": u || void 0,
              onDragOver: j,
              onDragLeave: $,
              onDrop: B,
              onClick: U,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), U());
              },
              children: [
                /* @__PURE__ */ a(Pi, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ a("span", { className: "file-uploader__zone-text", children: "Drag & drop files here" }),
                /* @__PURE__ */ b("span", { className: "file-uploader__zone-browse", children: [
                  "or",
                  " ",
                  /* @__PURE__ */ a("span", { className: "file-uploader__browse-link", children: "browse files" })
                ] }),
                q && /* @__PURE__ */ a("span", { className: "file-uploader__zone-hint", children: q })
              ]
            }
          ),
          X && /* @__PURE__ */ a("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: S.map((T) => /* @__PURE__ */ b(
            "li",
            {
              className: "file-uploader__item",
              "data-status": T.status,
              children: [
                /* @__PURE__ */ a("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a($u, { file: T.file, size: 16 }) }),
                /* @__PURE__ */ b("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ a("span", { className: "file-uploader__item-name", title: T.file.name, children: T.file.name }),
                  /* @__PURE__ */ b("span", { className: "file-uploader__item-meta", children: [
                    Sn(T.file.size),
                    T.errorMessage && /* @__PURE__ */ b("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      T.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ b("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  T.status === "uploading" && /* @__PURE__ */ a(Ii, { size: 16, className: "file-uploader__spin" }),
                  T.status === "uploaded" && /* @__PURE__ */ a(Te, { size: 16 }),
                  T.status === "error" && /* @__PURE__ */ a(lt, { size: 16 })
                ] }),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${T.file.name}`,
                    disabled: T.status === "uploading",
                    onClick: () => W(T.id),
                    children: /* @__PURE__ */ a(Ne, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            T.id
          )) })
        ] }),
        s && h && X && /* @__PURE__ */ a("div", { className: "file-uploader__actions", children: /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !Z || V || u,
            onClick: Y,
            children: [
              /* @__PURE__ */ a(Ai, { size: 14, "aria-hidden": "true" }),
              V ? "Uploading…" : "Upload files"
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
            onChange: k
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
function It({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": o,
  className: i
}) {
  const s = E.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = zu[e], p = 2 * Math.PI * f, h = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b(
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
const zr = 50, jr = 200, Wr = 25;
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
  "aria-label": _
}) {
  const v = ne(), g = ju(e), [w, N] = J(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = J(100), [M, P] = J(0), [S, A] = J(1), [D, O] = J(null), [R, I] = J(null), [z, W] = J("");
  ce(() => {
    C(100), P(0), A(1), O(null), I(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), ce(() => {
    if (g !== "text" && g !== "csv") return;
    let ee = !1;
    return fetch(e.url).then((pe) => {
      if (!pe.ok) throw new Error(`HTTP ${pe.status}`);
      return pe.text();
    }).then((pe) => {
      ee || (g === "text" ? O(pe) : I(Vu(pe)), N("loaded"));
    }).catch(() => {
      ee || N("error");
    }), () => {
      ee = !0;
    };
  }, [e.url, g]);
  const Y = () => {
    N("loaded"), W("File loaded");
  }, j = () => {
    N("error"), W("File failed to load");
  }, $ = () => N("loaded"), B = le(() => C((ee) => Math.min(ee + Wr, jr)), []), k = le(() => C((ee) => Math.max(ee - Wr, zr)), []), U = le(() => P((ee) => (ee + 90) % 360), []), X = le(() => {
    C(100), P(0);
  }, []), Z = (t == null ? void 0 : t.length) ?? 0, V = Z > 1 && n > 0, q = Z > 1 && n < Z - 1, T = () => p == null ? void 0 : p(n - 1), H = () => p == null ? void 0 : p(n + 1), G = e.pageCount ?? 0, te = G > 1 && S > 1, Q = G > 1 && S < G, ae = () => {
    if (u)
      u(e);
    else {
      const ee = document.createElement("a");
      ee.href = e.url, ee.download = e.name, ee.click();
    }
  }, fe = `scale(${y / 100}) rotate(${M}deg)`, x = () => {
    if (w === "error")
      return /* @__PURE__ */ b("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(zi, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (w === "unsupported")
      return /* @__PURE__ */ b("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(qr, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ b("button", { type: "button", className: "file-viewer__empty-action", onClick: ae, children: [
          /* @__PURE__ */ a(fr, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ b("div", { className: "file-viewer__img-wrap", children: [
        w === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(It, { size: "m" }) }),
        /* @__PURE__ */ a(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": w === "loaded" || void 0,
            style: { transform: fe },
            onLoad: Y,
            onError: j
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ b("div", { className: "file-viewer__pdf-wrap", children: [
        w === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(It, { size: "m" }) }),
        /* @__PURE__ */ a(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": w === "loaded" || void 0,
            onLoad: $
          }
        )
      ] });
    if (g === "text")
      return w === "loading" ? /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(It, { size: "m" }) }) : /* @__PURE__ */ b("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ b("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ a(vn, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ a("pre", { className: "file-viewer__text", children: D })
      ] });
    if (g === "csv") {
      if (w === "loading")
        return /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(It, { size: "m" }) });
      if (!(R != null && R.length))
        return /* @__PURE__ */ b("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ a(ji, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [ee, ...pe] = R;
      return /* @__PURE__ */ a("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ b("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: ee.map((Oe, Fe) => /* @__PURE__ */ a("th", { className: "file-viewer__th", children: Oe }, Fe)) }) }),
        /* @__PURE__ */ a("tbody", { children: pe.map((Oe, Fe) => /* @__PURE__ */ a("tr", { className: "file-viewer__tr", children: Oe.map((Si, Ri) => /* @__PURE__ */ a("td", { className: "file-viewer__td", children: Si }, Ri)) }, Fe)) })
      ] }) });
    }
    return null;
  }, L = g === "image", F = L && l, ue = L && c;
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["file-viewer", h].filter(Boolean).join(" "),
      role: "region",
      "aria-label": _ ?? `File preview: ${e.name}`,
      "aria-labelledby": _ ? void 0 : v,
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
        r && /* @__PURE__ */ b("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ a("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ b("div", { className: "file-viewer__header-actions", children: [
            F && /* @__PURE__ */ b("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(Di, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= zr,
                  onClick: k
                }
              ),
              /* @__PURE__ */ b("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(Li, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= jr,
                  onClick: B
                }
              )
            ] }),
            ue && /* @__PURE__ */ a(
              me,
              {
                icon: /* @__PURE__ */ a(Bi, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: U
              }
            ),
            s && d && /* @__PURE__ */ a(
              me,
              {
                icon: /* @__PURE__ */ a(Fi, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ b(Me, { children: [
              /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(Xe, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ b(Ie, { align: "end", children: [
                i && /* @__PURE__ */ b(re, { onSelect: ae, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(fr, { size: 14 }) }),
                  "Download"
                ] }),
                L && /* @__PURE__ */ b(re, { onSelect: X, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a($i, { size: 14 }) }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ b(re, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Xr, { size: 14 }) }),
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
        o && /* @__PURE__ */ b("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ b("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: Wu(e.size) }),
            e.uploadDate && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ b("div", { className: "file-viewer__footer-nav", children: [
            G > 1 && /* @__PURE__ */ b("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(ft, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !te,
                  onClick: () => A((ee) => ee - 1)
                }
              ),
              /* @__PURE__ */ b("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                S,
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
                  disabled: !Q,
                  onClick: () => A((ee) => ee + 1)
                }
              )
            ] }),
            Z > 1 && /* @__PURE__ */ b("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ a(
                me,
                {
                  icon: /* @__PURE__ */ a(ft, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !V,
                  onClick: T
                }
              ),
              /* @__PURE__ */ b("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                n + 1,
                " / ",
                Z,
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
                  disabled: !q,
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
const ri = On({ onClose: () => {
}, titleId: "" }), Hu = () => Tn(ri), Vr = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function Uu(e, t) {
  ce(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(Vr);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(Vr));
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
  const f = ne(), u = ie(null), d = ie(null), [p, h] = J(e), [_, v] = J(!1);
  if (ce(() => {
    if (e) {
      d.current = document.activeElement, h(!0);
      const w = requestAnimationFrame(
        () => requestAnimationFrame(() => v(!0))
      );
      return () => cancelAnimationFrame(w);
    } else {
      v(!1);
      const w = window.setTimeout(() => h(!1), 260);
      return () => window.clearTimeout(w);
    }
  }, [e]), ce(() => {
    if (!e) return;
    const w = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [e, t]), ce(() => {
    if (!e || i) return;
    const w = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = w;
    };
  }, [e, i]), Uu(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ b(ri.Provider, { value: { onClose: t, titleId: f }, children: [
    !i && /* @__PURE__ */ a(
      "div",
      {
        className: "drawer-overlay",
        "data-open": String(_),
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
        "data-open": String(_),
        "data-persistent": i || void 0,
        children: l
      }
    )
  ] });
  return i ? g : kn.createPortal(g, document.body);
}
function Kp({ title: e, description: t, actions: n, className: r }) {
  const { onClose: o, titleId: i } = Hu();
  return /* @__PURE__ */ b("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ b("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ a("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ a("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ b("div", { className: "drawer__header-actions", children: [
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
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["drawer__section", i].filter(Boolean).join(" "),
      "data-divider": r || void 0,
      children: [
        s && /* @__PURE__ */ b("div", { className: "drawer__section-header", children: [
          /* @__PURE__ */ b("div", { className: "drawer__section-header-start", children: [
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
  return /* @__PURE__ */ b(
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
  const d = s !== void 0, [p, h] = J(l), _ = d ? s : p, v = () => {
    if (r) return;
    const w = !_;
    d || h(w), c == null || c(w), i == null || i();
  }, g = o ? "a" : "button";
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["drawer__multi-item", u].filter(Boolean).join(" "),
      "data-expanded": _ || void 0,
      children: [
        /* @__PURE__ */ b(
          g,
          {
            ...o ? { href: o } : { type: "button" },
            className: "drawer__multi-item-trigger",
            "aria-expanded": _,
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
        _ && /* @__PURE__ */ a("div", { className: "drawer__multi-item-children", children: f })
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
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b("span", { className: "drawer__list-item-main", children: [
          /* @__PURE__ */ b("span", { className: "drawer__list-item-top", children: [
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
function eh({
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
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b("span", { className: "drawer__notification-body", children: [
          /* @__PURE__ */ b("span", { className: "drawer__notification-top", children: [
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
function th({
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
const nh = E.forwardRef(
  function({ variant: t = "loud", size: n = "100", target: r, rel: o, children: i, className: s, ...l }, c) {
    const f = r === "_blank", u = f ? "noopener noreferrer" : o;
    return /* @__PURE__ */ b(
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
          f && /* @__PURE__ */ a(Xr, { "aria-hidden": "true" })
        ]
      }
    );
  }
), Ku = E.forwardRef(
  function({ variant: t = "fill", size: n = "medium", color: r = "primary", icon: o, children: i, className: s, title: l, ...c }, f) {
    const d = l ?? (typeof i == "string" ? i : void 0);
    return /* @__PURE__ */ b(
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
), cr = E.forwardRef(
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
function Yu(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const Xu = E.forwardRef(
  function({ name: t, src: n, size: r = "l", href: o, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, h] = E.useState(!1), _ = !!n && !p, v = Yu(t, r), g = !!o || !!i, w = {
      className: ["avatar", s].filter(Boolean).join(" "),
      "data-size": r,
      "data-variant": _ ? "image" : "initials",
      "aria-label": c ?? t,
      style: l,
      id: u,
      ...g ? { "data-interactive": "" } : {}
    }, N = _ ? /* @__PURE__ */ a(
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
), rh = E.forwardRef(
  function({ children: t, max: n, overlap: r = !0, size: o = "l", className: i, ...s }, l) {
    const c = E.Children.toArray(t), f = n !== void 0 ? c.slice(0, n) : c, u = n !== void 0 ? Math.max(0, c.length - n) : 0;
    return /* @__PURE__ */ b(
      "div",
      {
        ref: l,
        className: ["avatar-group", i].filter(Boolean).join(" "),
        "data-overlap": r ? "true" : "false",
        ...s,
        children: [
          f,
          u > 0 && /* @__PURE__ */ b(
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
}, oh = E.forwardRef(
  function({ children: t, status: n, size: r = "l", className: o, style: i }, s) {
    return /* @__PURE__ */ b(
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
), Zu = E.forwardRef(
  function({ children: t, size: n = "medium", color: r = "gray", icon: o, className: i, ...s }, l) {
    return /* @__PURE__ */ b(
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
), ah = E.forwardRef(
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
), ih = E.forwardRef(
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
), sh = E.forwardRef(
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
), lh = E.forwardRef(
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
), ch = E.forwardRef(
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
), dh = E.forwardRef(
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
), uh = E.forwardRef(
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
), fh = E.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ a(
      ti,
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
  informative: Jr,
  positive: Qr,
  notice: Zr,
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
}, ph = E.forwardRef(
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
    return /* @__PURE__ */ b(
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
          /* @__PURE__ */ b("div", { className: "banner-alert__content", children: [
            n && /* @__PURE__ */ a("strong", { className: "banner-alert__title", children: n }),
            /* @__PURE__ */ a("p", { className: "banner-alert__message", children: r })
          ] }),
          i && /* @__PURE__ */ a(
            he,
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
), oi = E.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function tf() {
  return E.useContext(oi);
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
        var w;
        const g = !v;
        return (w = u.current) == null || w.call(u, g), g;
      });
    }, []), p = E.Children.toArray(o), h = p.find(
      (v) => E.isValidElement(v) && v.type.displayName === "PanelHeader"
    ), _ = p.filter(
      (v) => !E.isValidElement(v) || v.type.displayName !== "PanelHeader"
    );
    return /* @__PURE__ */ a(oi.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ b(
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
              children: /* @__PURE__ */ a("div", { className: "panel__collapsible-inner", children: _ })
            }
          ) : _
        ]
      }
    ) });
  }
);
nf.displayName = "Panel";
const rf = E.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: o, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = tf();
    return /* @__PURE__ */ b(
      "div",
      {
        ref: l,
        className: ["panel__header", i].filter(Boolean).join(" "),
        ...s,
        children: [
          /* @__PURE__ */ b("div", { className: "panel__header-title", children: [
            /* @__PURE__ */ b("div", { className: "panel__header-title-row", children: [
              t && /* @__PURE__ */ a("span", { className: "panel__header-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ a("strong", { className: "panel__title typography-heading-m", children: o })
            ] }),
            n && /* @__PURE__ */ a("p", { className: "panel__subtitle", children: n })
          ] }),
          c ? /* @__PURE__ */ a(
            he,
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
    const u = r, d = /* @__PURE__ */ b(
      "section",
      {
        ref: f,
        className: ["section", l].filter(Boolean).join(" "),
        "data-variant": t,
        ...c,
        children: [
          (n || o) && /* @__PURE__ */ b("div", { className: "section__header", children: [
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
    return i ? /* @__PURE__ */ b(_e, { children: [
      d,
      /* @__PURE__ */ a("hr", { className: "section__divider" })
    ] }) : d;
  }
);
sf.displayName = "Section";
const ai = E.createContext({
  onClose: () => {
  },
  titleId: ""
});
function lf() {
  return E.useContext(ai);
}
const Hr = [
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
    const n = e.current, r = n.querySelector(Hr);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(Hr));
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
  }, [e]), cf(s, e), l ? kn.createPortal(
    /* @__PURE__ */ b(ai.Provider, { value: { onClose: t, titleId: i }, children: [
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
    return /* @__PURE__ */ b(
      "div",
      {
        ref: i,
        className: ["dialog__header", r].filter(Boolean).join(" "),
        ...o,
        children: [
          /* @__PURE__ */ b("div", { className: "dialog__header-start", children: [
            t && /* @__PURE__ */ a("span", { className: "dialog__header-icon", "aria-hidden": "true", children: t }),
            /* @__PURE__ */ a("h2", { id: l, className: "dialog__title", children: n })
          ] }),
          /* @__PURE__ */ a(
            he,
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
const hf = E.forwardRef(
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
hf.displayName = "DialogFooter";
const ii = E.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function si() {
  return E.useContext(ii);
}
let mf = 0;
function vf({
  value: e,
  onValueChange: t,
  size: n = "medium",
  children: r,
  className: o,
  ...i
}) {
  const [s] = E.useState(() => `tabs-${++mf}`);
  return /* @__PURE__ */ a(ii.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ a("div", { className: ["tabs", o].filter(Boolean).join(" "), ...i, children: r }) });
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
function _f({
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
  const { activeTab: f, onChange: u, size: d, baseId: p } = si(), h = f === e, _ = r || !!i;
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["tab-item", c].filter(Boolean).join(" "),
      "data-selected": h ? "" : void 0,
      "data-size": d,
      "data-disabled": s ? "" : void 0,
      children: [
        /* @__PURE__ */ b(
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
        _ && /* @__PURE__ */ b("span", { className: "tab__actions", children: [
          i && /* @__PURE__ */ a(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Wi, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: h ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ a(
            he,
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
_f.displayName = "Tab";
function bf({ value: e, children: t, className: n, style: r }) {
  const { activeTab: o, baseId: i } = si();
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
bf.displayName = "TabPanel";
const li = E.createContext({ size: "medium" });
function wf() {
  return E.useContext(li);
}
function yf({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ a(li.Provider, { value: { size: e }, children: /* @__PURE__ */ a(
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
  const { size: _ } = wf(), v = o ?? _, g = i || !!s || !!l, w = /* @__PURE__ */ b(_e, { children: [
    n && /* @__PURE__ */ a("span", { className: "list-item__before", children: n }),
    /* @__PURE__ */ b("span", { className: "list-item__content", children: [
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
  return /* @__PURE__ */ b(
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
const hh = E.forwardRef(
  function({ label: t, labelPosition: n = "after", disabled: r, id: o, className: i, ...s }, l) {
    const c = ne(), f = o ?? c;
    return /* @__PURE__ */ b(
      "label",
      {
        htmlFor: f,
        className: ["switch", i].filter(Boolean).join(" "),
        "data-disabled": r || void 0,
        "data-label-position": t ? n : void 0,
        children: [
          t && n === "before" && /* @__PURE__ */ a("span", { className: "switch__label", children: t }),
          /* @__PURE__ */ b("span", { className: "switch__control", children: [
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
), ci = E.createContext({
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
  return /* @__PURE__ */ a(ci.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ a(
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
  const { variant: p, interactive: h } = E.useContext(ci), _ = h && !o && !!l, v = () => n === "checked" ? /* @__PURE__ */ a(Te, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ a(lt, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ a(Ve, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ a("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ b(_e, { children: [
    /* @__PURE__ */ a("p", { className: "stepper-step__title", children: e }),
    t && /* @__PURE__ */ a("p", { className: "stepper-step__description", children: t })
  ] });
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b("div", { className: "stepper-step__track", "aria-hidden": "true", children: [
          /* @__PURE__ */ a("div", { className: "stepper-step__indicator", children: v() }),
          /* @__PURE__ */ a("div", { className: "stepper-step__connector" })
        ] }),
        /* @__PURE__ */ b("div", { className: "stepper-step__body", children: [
          _ ? /* @__PURE__ */ a(
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
const mh = E.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: o, className: i, ...s }, l) {
    return /* @__PURE__ */ b(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          o,
          /* @__PURE__ */ a("span", { className: "icon-badge__counter", children: /* @__PURE__ */ a(cr, { count: t, size: "small", color: n, variant: r }) })
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
function di(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Rf(e) {
  const t = di(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function vh({
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
  truncateTitle: h = !1,
  className: _,
  style: v
}) {
  const [g, w] = J("minimal"), N = ie(null), y = ie(null), C = ie(null), M = ie(null), P = le(() => {
    var q, T, H;
    if (!(l != null && l.length)) return;
    let V;
    if (h)
      V = ((q = C.current) == null ? void 0 : q.offsetWidth) ?? 0;
    else {
      const G = ((T = N.current) == null ? void 0 : T.offsetWidth) ?? 0, te = ((H = y.current) == null ? void 0 : H.scrollWidth) ?? 0;
      V = G - te - 24;
    }
    c && M.current && (V -= M.current.offsetWidth + 17), w(Sf(V, l.length));
  }, [l, c, h]);
  In(() => {
    P();
    const V = h ? C.current : N.current;
    if (!V) return;
    const q = new ResizeObserver(P);
    return q.observe(V), () => q.disconnect();
  }, [P, h]);
  const S = !!(l != null && l.length), A = S || !!c || !!u, D = !!c && S, O = r && o.length >= 2 ? o[o.length - 2] : null, R = l ? Rf(l) : [], I = l ? di(l) : void 0, z = R.length > 0 || ((f == null ? void 0 : f.length) ?? 0) > 0, W = S || ((f == null ? void 0 : f.length) ?? 0) > 0, Y = r && o.length > 0 ? /* @__PURE__ */ a(
    Nu,
    {
      items: o,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, j = n ? /* @__PURE__ */ a("p", { className: "rpl-page-header__date", children: n }) : null, $ = /* @__PURE__ */ a(
    "h1",
    {
      className: [
        "rpl-page-header__title",
        p ? "rpl-page-header__title--compact" : "",
        h ? "rpl-page-header__title--truncate" : ""
      ].filter(Boolean).join(" "),
      title: h ? e : void 0,
      children: e
    }
  ), B = /* @__PURE__ */ b("div", { className: "rpl-page-header__heading-row", children: [
    $,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map((V, q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: V }, q)
    )) })
  ] }), k = /* @__PURE__ */ a("div", { className: "rpl-page-header__heading-row", children: $ }), U = t ? /* @__PURE__ */ a("p", { className: "rpl-page-header__description", children: t }) : null, X = /* @__PURE__ */ b("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
    Y,
    /* @__PURE__ */ b(
      "div",
      {
        ref: N,
        className: [
          "rpl-page-header__main-row",
          h ? "rpl-page-header__main-row--split" : ""
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ b("div", { ref: y, className: "rpl-page-header__title-area", children: [
            j,
            B,
            U
          ] }),
          A && /* @__PURE__ */ b(
            "div",
            {
              ref: C,
              className: "rpl-page-header__actions",
              children: [
                u && /* @__PURE__ */ a("span", { className: "rpl-page-header__last-update", children: u }),
                (S || !!c) && /* @__PURE__ */ b("div", { className: "rpl-page-header__actions-row", children: [
                  c && /* @__PURE__ */ a(
                    "div",
                    {
                      ref: M,
                      className: "rpl-page-header__secondary-toolbar",
                      children: c
                    }
                  ),
                  D && /* @__PURE__ */ a(
                    "div",
                    {
                      className: "rpl-page-header__toolbar-divider",
                      role: "separator",
                      "aria-hidden": "true"
                    }
                  ),
                  S && /* @__PURE__ */ a(
                    Mu,
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
  ] }), Z = /* @__PURE__ */ b("div", { className: "rpl-page-header__mobile-layout", "aria-hidden": "true", children: [
    O && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-back", children: O.href ? /* @__PURE__ */ b(
      "a",
      {
        href: O.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? (V) => {
          V.preventDefault(), i(O.href);
        } : void 0,
        children: [
          /* @__PURE__ */ a(ft, { size: 16, "aria-hidden": "true" }),
          O.label
        ]
      }
    ) : /* @__PURE__ */ b("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ a(ft, { size: 16, "aria-hidden": "true" }),
      O.label
    ] }) }),
    j,
    k,
    U,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-tags", children: s.map((V, q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: V }, q)
    )) }),
    u && /* @__PURE__ */ a("p", { className: "rpl-page-header__last-update", children: u }),
    W && /* @__PURE__ */ b("div", { className: "rpl-page-header__mobile-actions", children: [
      z && /* @__PURE__ */ b(Me, { children: [
        /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
          me,
          {
            icon: /* @__PURE__ */ a(Yr, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ b(Ie, { align: "start", sideOffset: 4, children: [
          f && f.length > 0 && /* @__PURE__ */ b(_e, { children: [
            f.map((V) => /* @__PURE__ */ b(
              re,
              {
                disabled: V.disabled,
                onSelect: V.onClick,
                children: [
                  V.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: V.icon }),
                  V.label
                ]
              },
              V.id
            )),
            R.length > 0 && /* @__PURE__ */ a(at, {})
          ] }),
          R.map((V, q) => {
            var T;
            return /* @__PURE__ */ b("span", { children: [
              q > 0 && V.type !== ((T = R[q - 1]) == null ? void 0 : T.type) && /* @__PURE__ */ a(at, {}),
              /* @__PURE__ */ b(
                re,
                {
                  disabled: V.disabled,
                  onSelect: V.onClick,
                  children: [
                    V.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: V.icon }),
                    V.label
                  ]
                }
              )
            ] }, V.id);
          })
        ] })
      ] }),
      I && /* @__PURE__ */ a(
        he,
        {
          variant: "fill",
          color: "primary",
          size: "medium",
          disabled: I.disabled,
          loading: I.loading,
          iconStart: I.icon,
          onClick: I.onClick,
          className: "rpl-page-header__mobile-primary",
          children: I.label
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ b(
    "header",
    {
      className: [
        "rpl-page-header",
        d ? "rpl-page-header--sticky" : "",
        p ? "rpl-page-header--compact" : "",
        _
      ].filter(Boolean).join(" "),
      style: v,
      children: [
        X,
        Z
      ]
    }
  );
}
function gh({
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
  const u = ne(), d = `${u}-label`, p = `${u}-live`, h = Math.min(100, Math.max(0, t)), _ = i || o === "success" ? void 0 : `${h}%`, v = i ? { role: "progressbar", "aria-label": e } : {
    role: "progressbar",
    "aria-valuenow": o === "success" ? 100 : h,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-labelledby": d
  }, g = l ? null : o === "success" ? /* @__PURE__ */ a(Te, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : o === "error" ? /* @__PURE__ */ a(Ne, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ a("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${h}%` }), w = o === "success" ? `${e} complete` : o === "error" ? `${e} failed` : "";
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["progress-bar", c].filter(Boolean).join(" "),
      "data-state": o,
      "data-indeterminate": i ? "" : void 0,
      style: f,
      children: [
        (!s || g) && /* @__PURE__ */ b("div", { className: "progress-bar__header", children: [
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
            style: _ ? { width: _ } : void 0
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
function _h({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: o = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Ef(e, 0, 100), f = Mf(n), u = Pf(n, f), d = If(u), p = Af(d, c), h = n / 2, _ = n / 2, v = Of(n, r), g = t !== void 0 ? t : `${c}%`, w = i ?? g;
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b(
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
                  cy: _,
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
                  cy: _,
                  r: u,
                  fill: "none",
                  strokeWidth: f,
                  strokeLinecap: "round",
                  strokeDasharray: d,
                  strokeDashoffset: p,
                  transform: `rotate(-90 ${h} ${_})`
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
const ui = On(null);
function Tf() {
  const e = Tn(ui);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function kf({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ a(Vt, { ...t }) : e === "notice" ? /* @__PURE__ */ a(lt, { ...t }) : /* @__PURE__ */ a(Ve, { ...t });
}
const bh = E.forwardRef(
  function({ value: t, label: n, disabled: r, id: o, className: i, ...s }, l) {
    const c = Tf(), f = ne(), u = o ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
    return /* @__PURE__ */ b(
      "label",
      {
        htmlFor: u,
        className: ["radio", i].filter(Boolean).join(" "),
        "data-disabled": d || void 0,
        "data-checked": p || void 0,
        children: [
          /* @__PURE__ */ b("span", { className: "radio__control", children: [
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
), wh = E.forwardRef(
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
    style: _
  }, v) {
    const g = ne(), w = u ?? g, N = ne(), y = ne(), C = [
      i ? N : null,
      l ? y : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a(ui.Provider, { value: { groupValue: t, onValueChange: n, name: w, groupDisabled: f }, children: /* @__PURE__ */ b(
      "fieldset",
      {
        ref: v,
        className: ["radio-group", h].filter(Boolean).join(" "),
        "data-validation": s,
        "data-layout": d,
        "data-disabled": f || void 0,
        "aria-describedby": C,
        "aria-required": c || void 0,
        style: _,
        children: [
          r && /* @__PURE__ */ b("legend", { className: "radio-group__legend", children: [
            r,
            c && /* @__PURE__ */ a("span", { className: "radio-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          o && /* @__PURE__ */ a("p", { className: "radio-group__description", children: o }),
          /* @__PURE__ */ a("div", { className: "radio-group__items", children: p }),
          i && /* @__PURE__ */ a("p", { id: N, className: "radio-group__hint", children: i }),
          l && s && /* @__PURE__ */ b(
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
function it(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function Rn(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function Lf(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const o = (n - t) / r, i = o > 10 ? Math.ceil(o / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function En({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: o,
  visible: i
}) {
  const s = it(e, t, n), l = Rn(s, r);
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
function fi({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: o
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ b(_e, { children: [
    e.length > 0 && /* @__PURE__ */ a("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ a(
      "div",
      {
        className: "range__marker",
        style: { left: Rn(it(i, n, r), o) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ a("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ a(
      "span",
      {
        className: "range__indicator",
        style: { left: Rn(it(i.value, n, r), o) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function yh(e) {
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
    formatValue: _ = String,
    disabled: v = !1,
    className: g,
    style: w
  } = e, N = ne(), y = ne(), C = ne(), M = Df[l], P = At(
    () => c ? Lf(c, o, i, s) : [],
    [c, o, i, s]
  ), S = f.length > 0, A = [
    d ? y : null,
    h ? C : null
  ].filter(Boolean).join(" ") || void 0, D = /* @__PURE__ */ a(
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
  return /* @__PURE__ */ b(
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
        n === "top" && D,
        /* @__PURE__ */ b("div", { className: "range__body", children: [
          n === "left" && D,
          /* @__PURE__ */ b("div", { className: "range__track-column", children: [
            u && /* @__PURE__ */ b("div", { className: "range__minmax", "aria-hidden": "true", children: [
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: _(o) }),
              /* @__PURE__ */ a("span", { className: "range__minmax-label", children: _(i) })
            ] }),
            /* @__PURE__ */ a(
              "div",
              {
                className: [
                  "range__track-area",
                  S ? "range__track-area--has-indicators" : ""
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
                    formatValue: _,
                    disabled: v,
                    labelId: N,
                    describedBy: A
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
                    formatValue: _,
                    disabled: v,
                    labelId: N,
                    describedBy: A
                  }
                )
              }
            ),
            d && /* @__PURE__ */ a("p", { id: y, className: "range__hint", children: d }),
            h && p && /* @__PURE__ */ b(
              "p",
              {
                id: C,
                className: "range__message",
                role: p === "negative" ? "alert" : void 0,
                children: [
                  /* @__PURE__ */ a(Ve, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
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
  const [p, h] = J(!1), v = `${it(e, n, r)}%`;
  return /* @__PURE__ */ b(_e, { children: [
    /* @__PURE__ */ a(
      En,
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
      fi,
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
  const [_, v] = e, [g, w] = J(null), N = ie(null), y = ie(null), C = it(_, i, s), M = it(v, i, s);
  function P(O) {
    const R = Math.min(Number(O.target.value), v - l);
    t([R, v]);
  }
  function S(O) {
    const R = Math.max(Number(O.target.value), _ + l);
    t([_, R]);
  }
  const A = r ?? `Minimum ${n}`, D = o ?? `Maximum ${n}`;
  return /* @__PURE__ */ b(_e, { children: [
    /* @__PURE__ */ a(
      En,
      {
        value: _,
        min: i,
        max: s,
        thumbSize: c,
        formatValue: d,
        visible: g === "low"
      }
    ),
    /* @__PURE__ */ a(
      En,
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
        value: _,
        disabled: p,
        "aria-label": A,
        "aria-describedby": h,
        "aria-valuetext": d(_),
        style: { zIndex: g === "low" ? 2 : 1 },
        onChange: P,
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
        "aria-label": D,
        "aria-describedby": h,
        "aria-valuetext": d(v),
        style: { zIndex: g === "high" ? 2 : 1 },
        onChange: S,
        onFocus: () => w("high"),
        onBlur: () => w(null),
        onPointerDown: () => w("high"),
        onPointerUp: () => {
          document.activeElement !== y.current && w(null);
        }
      }
    ),
    /* @__PURE__ */ a(
      fi,
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
function Ur({ item: e }) {
  const t = e.count && e.count > 0 ? `${e.label} (${e.count > 99 ? "99+" : e.count})` : e.label;
  return /* @__PURE__ */ b("div", { className: "navbar__nav-btn-wrapper", children: [
    /* @__PURE__ */ b(
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
            cr,
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
  const h = i.slice(0, 5), _ = s.slice(0, 4), v = s.slice(4), g = s.length > 0, w = v.length > 0, N = /* @__PURE__ */ b(_e, { children: [
    /* @__PURE__ */ a("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ a(zf, {}) }),
    t && /* @__PURE__ */ a("span", { className: "navbar__product-name", "aria-hidden": "true", children: t })
  ] });
  return /* @__PURE__ */ b(
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
        h.length > 0 && /* @__PURE__ */ a("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: h.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Ur, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ b(_e, { children: [
          l && /* @__PURE__ */ a("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ b("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            _.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Ur, { item: y }) }, y.id)),
            w && /* @__PURE__ */ a("li", { children: /* @__PURE__ */ b(Me, { children: [
              /* @__PURE__ */ b("div", { className: "navbar__nav-btn-wrapper", children: [
                /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
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
              /* @__PURE__ */ a(Ie, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ b(
                re,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ a("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ a(
                      cr,
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
        /* @__PURE__ */ a("div", { className: "navbar__user", children: /* @__PURE__ */ b(Me, { children: [
          /* @__PURE__ */ b("div", { className: "navbar__nav-btn-wrapper", children: [
            /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ b(Ie, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ a(ni, { children: c }),
            u.map((y) => /* @__PURE__ */ b("span", { children: [
              y.separator && /* @__PURE__ */ a(at, {}),
              /* @__PURE__ */ b(re, { onSelect: y.onClick, children: [
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
  return /* @__PURE__ */ b(
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
function Nh({
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
  return /* @__PURE__ */ b(qa, { children: [
    /* @__PURE__ */ b(
      "div",
      {
        className: ["split-button", u].filter(Boolean).join(" "),
        "data-variant": r,
        "data-color": o,
        "data-size": i,
        "data-disabled": l || void 0,
        style: d,
        children: [
          /* @__PURE__ */ b(
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
          /* @__PURE__ */ a(Za, { asChild: !0, children: /* @__PURE__ */ a(
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
    /* @__PURE__ */ a(lr, { children: /* @__PURE__ */ a(
      Qa,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ b(
          Ja,
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
  notice: /* @__PURE__ */ a(lt, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ a(Vt, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, Ch = E.forwardRef(
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
    disabled: _,
    value: v,
    defaultValue: g,
    onChange: w,
    ...N
  }, y) {
    const C = ne(), M = ne(), P = ne(), S = ne(), [A, D] = J(() => String(v ?? g ?? "").length), O = v !== void 0 ? String(v).length : A, R = ie(null);
    An(y, () => R.current, []), In(() => {
      if (i !== "auto") return;
      const j = R.current;
      if (!j) return;
      j.style.height = "auto";
      const $ = j.scrollHeight, B = l !== void 0 ? Math.min($, l) : $, k = s !== void 0 ? Math.max(B, s) : B;
      j.style.height = `${k}px`, j.style.overflowY = l !== void 0 && $ >= l ? "auto" : "hidden";
    }, [O, i, s, l]);
    function I(j) {
      D(j.target.value.length), w == null || w(j);
    }
    const z = !!(o && r), W = [
      z ? P : n ? M : null,
      c && p != null ? S : null
    ].filter(Boolean).join(" ") || void 0, Y = i === "auto" && s != null ? { minHeight: s } : {};
    return /* @__PURE__ */ b(
      "div",
      {
        className: ["textarea", f].filter(Boolean).join(" "),
        "data-validation": r,
        "data-disabled": _ || void 0,
        style: u,
        children: [
          /* @__PURE__ */ b("label", { htmlFor: C, className: "textarea__label", children: [
            t,
            h && /* @__PURE__ */ a("span", { className: "textarea__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: R,
              id: C,
              className: "textarea__field",
              rows: d,
              maxLength: p,
              required: h,
              disabled: _,
              value: v,
              defaultValue: g,
              onChange: I,
              "aria-required": h || void 0,
              "aria-invalid": r === "negative" || void 0,
              "aria-describedby": W,
              "data-resize": i,
              style: Y,
              ...N
            }
          ),
          (n || z || c && p != null) && /* @__PURE__ */ b("div", { className: "textarea__footer", children: [
            z ? /* @__PURE__ */ b(
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
            c && p != null && /* @__PURE__ */ b(
              "div",
              {
                id: S,
                className: [
                  "textarea__counter",
                  O >= p ? "textarea__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                "aria-live": "off",
                children: [
                  O,
                  " / ",
                  p
                ]
              }
            )
          ] }),
          c && p != null && /* @__PURE__ */ a("div", { className: "textarea__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: O >= p ? `Character limit of ${p} reached` : "" })
        ]
      }
    );
  }
), Vf = {
  negative: /* @__PURE__ */ a(Ve, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ a(lt, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ a(Vt, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, Hf = { small: 14, medium: 16, large: 18 }, xh = E.forwardRef(
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
    style: _,
    // Extracted to handle behaviour
    type: v = "text",
    required: g,
    disabled: w,
    readOnly: N,
    value: y,
    defaultValue: C,
    onChange: M,
    onFocus: P,
    onBlur: S,
    maxLength: A,
    ...D
  }, O) {
    const R = ne(), I = ne(), z = ne(), W = ne(), [Y, j] = J(!1), [$, B] = J(!1), [k, U] = J(() => String(y ?? C ?? "").length), X = y !== void 0 ? String(y).length : k, Z = ie(null);
    An(O, () => Z.current, []);
    const V = v === "password" && Y ? "text" : v, q = Hf[s], T = v === "search" && !f ? /* @__PURE__ */ a(Vi, { size: q, "aria-hidden": "true" }) : f;
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
          j((ue) => !ue), (F = Z.current) == null || F.focus();
        },
        children: Y ? /* @__PURE__ */ a(qr, { size: q, "aria-hidden": "true" }) : /* @__PURE__ */ a(Hi, { size: q, "aria-hidden": "true" })
      }
    ) : v === "search" && X > 0 ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const F = Z.current;
          F && (F.value = "", F.focus()), U(0), p == null || p();
        },
        children: /* @__PURE__ */ a(Ne, { size: q, "aria-hidden": "true" })
      }
    ) : H = u ?? null;
    const G = !!T, te = !!H, Q = !!(i && o), ae = [
      Q ? z : r ? I : null,
      d && A != null ? W : null
    ].filter(Boolean).join(" ") || void 0;
    function fe(F) {
      U(F.target.value.length), M == null || M(F);
    }
    function x(F) {
      B(!0), P == null || P(F);
    }
    function L(F) {
      B(!1), S == null || S(F);
    }
    return /* @__PURE__ */ b(
      "div",
      {
        className: ["text-input", h].filter(Boolean).join(" "),
        "data-size": s,
        "data-validation": o,
        "data-disabled": w || void 0,
        style: _,
        children: [
          /* @__PURE__ */ b(
            "label",
            {
              htmlFor: R,
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
          /* @__PURE__ */ b(
            "div",
            {
              className: "text-input__wrapper",
              "data-focused": $ || void 0,
              "data-disabled": w || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ a("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": G || void 0,
                    "data-icon-end": te || void 0,
                    children: [
                      T && /* @__PURE__ */ a("span", { className: "text-input__icon-start", "aria-hidden": "true", children: T }),
                      /* @__PURE__ */ a(
                        "input",
                        {
                          ref: Z,
                          id: R,
                          className: "text-input__field",
                          type: V,
                          required: g,
                          disabled: w,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: A,
                          onChange: fe,
                          onFocus: x,
                          onBlur: L,
                          "aria-required": g || void 0,
                          "aria-invalid": o === "negative" || void 0,
                          "aria-describedby": ae,
                          ...D
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
          (r || Q || d && A != null) && /* @__PURE__ */ b("div", { className: "text-input__footer", children: [
            Q ? /* @__PURE__ */ b(
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
            ) : r ? /* @__PURE__ */ a("p", { id: I, className: "text-input__hint", children: r }) : null,
            d && A != null && /* @__PURE__ */ b(
              "div",
              {
                id: W,
                className: [
                  "text-input__counter",
                  X >= A ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  X,
                  " / ",
                  A
                ]
              }
            )
          ] }),
          d && A != null && /* @__PURE__ */ a("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: X >= A ? `Character limit of ${A} reached` : "" })
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
  neutral: Jr,
  positive: Vt,
  notice: Zr,
  negative: Ve
}, pi = On(null);
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
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b("div", { className: "toast__body", children: [
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
function Sh({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, o] = J([]), [i, s] = J(t), l = le((d) => {
    const p = d.variant ?? "neutral", h = d.duration !== void 0 ? d.duration : Uf[p], _ = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
      id: crypto.randomUUID(),
      variant: p,
      title: d.title,
      description: d.description,
      timestamp: d.timestamp,
      icon: d.icon,
      action: d.action,
      showCloseButton: _,
      duration: h,
      showProgress: d.showProgress ?? !1,
      exiting: !1
    };
    return o((g) => {
      const w = [v, ...g];
      return w.length > n ? w.slice(0, n) : w;
    }), v.id;
  }, [n]), c = le((d) => {
    o((p) => p.map((h) => h.id === d ? { ...h, exiting: !0 } : h));
  }, []), f = le(() => {
    o((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = le((d) => {
    o((p) => p.filter((h) => h.id !== d));
  }, []);
  return /* @__PURE__ */ b(pi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Ei(
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
function Rh() {
  const e = Tn(pi);
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
}), Xf = "VisuallyHidden", hi = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    oe.span,
    {
      ...e,
      ref: t,
      style: { ...Yf, ...e.style }
    }
  )
);
hi.displayName = Xf;
var qf = hi, [nn] = He("Tooltip", [
  Qt
]), rn = Qt(), mi = "TooltipProvider", Zf = 700, Mn = "tooltip.open", [Qf, dr] = nn(mi), vi = (e) => {
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
vi.displayName = mi;
var vt = "Tooltip", [Jf, Ct] = nn(vt), gi = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = dr(vt, e.__scopeTooltip), f = rn(t), [u, d] = m.useState(null), p = ze(), h = m.useRef(0), _ = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = m.useRef(!1), [w, N] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Mn))) : c.onClose(), i == null || i(S);
    },
    caller: vt
  }), y = m.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), C = m.useCallback(() => {
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
  }, []), /* @__PURE__ */ a(Qn, { ...f, children: /* @__PURE__ */ a(
    Jf,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : C();
      }, [c.isOpenDelayedRef, P, C]),
      onTriggerLeave: m.useCallback(() => {
        _ ? M() : (window.clearTimeout(h.current), h.current = 0);
      }, [M, _]),
      onOpen: C,
      onClose: M,
      disableHoverableContent: _,
      children: n
    }
  ) });
};
gi.displayName = vt;
var Pn = "TooltipTrigger", _i = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ct(Pn, n), i = dr(Pn, n), s = rn(n), l = m.useRef(null), c = se(t, l, o.onTriggerChange), f = m.useRef(!1), u = m.useRef(!1), d = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ a(Ho, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      oe.button,
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
_i.displayName = Pn;
var ur = "TooltipPortal", [ep, tp] = nn(ur, {
  forceMount: void 0
}), bi = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = Ct(ur, t);
  return /* @__PURE__ */ a(ep, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Ue, { present: n || i.open, children: /* @__PURE__ */ a(Jn, { asChild: !0, container: o, children: r }) }) });
};
bi.displayName = ur;
var st = "TooltipContent", wi = m.forwardRef(
  (e, t) => {
    const n = tp(st, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = Ct(st, e.__scopeTooltip);
    return /* @__PURE__ */ a(Ue, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ a(yi, { side: o, ...i, ref: t }) : /* @__PURE__ */ a(np, { side: o, ...i, ref: t }) });
  }
), np = m.forwardRef((e, t) => {
  const n = Ct(st, e.__scopeTooltip), r = dr(st, e.__scopeTooltip), o = m.useRef(null), i = se(t, o), [s, l] = m.useState(null), { trigger: c, onClose: f } = n, u = o.current, { onPointerInTransitChange: d } = r, p = m.useCallback(() => {
    l(null), d(!1);
  }, [d]), h = m.useCallback(
    (_, v) => {
      const g = _.currentTarget, w = { x: _.clientX, y: _.clientY }, N = ip(w, g.getBoundingClientRect()), y = sp(w, N), C = lp(v.getBoundingClientRect()), M = dp([...y, ...C]);
      l(M), d(!0);
    },
    [d]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (c && u) {
      const _ = (g) => h(g, u), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", _), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", _), u.removeEventListener("pointerleave", v);
      };
    }
  }, [c, u, h, p]), m.useEffect(() => {
    if (s) {
      const _ = (v) => {
        const g = v.target, w = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !cp(w, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", _), () => document.removeEventListener("pointermove", _);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ a(yi, { ...e, ref: i });
}), [rp, op] = nn(vt, { isInside: !1 }), ap = /* @__PURE__ */ Xi("TooltipContent"), yi = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = Ct(st, n), f = rn(n), { onClose: u } = c;
    return m.useEffect(() => (document.addEventListener(Mn, u), () => document.removeEventListener(Mn, u)), [u]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ a(
      Vn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ b(
          Uo,
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
wi.displayName = st;
var Ni = "TooltipArrow", Ci = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = rn(n);
    return op(
      Ni,
      n
    ).isInside ? null : /* @__PURE__ */ a(Go, { ...o, ...r, ref: t });
  }
);
Ci.displayName = Ni;
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
var fp = vi, pp = gi, hp = _i, mp = bi, vp = wi, gp = Ci;
function _p(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Eh({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: o = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ a(_e, { children: t });
  const { side: l, align: c } = _p(n);
  return /* @__PURE__ */ a(fp, { delayDuration: o, children: /* @__PURE__ */ b(pp, { children: [
    /* @__PURE__ */ a(hp, { asChild: !0, children: t }),
    /* @__PURE__ */ a(mp, { children: /* @__PURE__ */ b(
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
const bp = {
  positive: Qr,
  notice: lt,
  negative: Ve
};
function Mh({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const o = bp[t], i = t === "negative";
  return /* @__PURE__ */ b(
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
const Gr = 200, wp = [];
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
  onCloseOtherTabs: _,
  className: v
}) {
  const g = ie(null), [w, N] = J(!1), [y, C] = J(!1), [M, P] = J(/* @__PURE__ */ new Set()), S = le(() => {
    const R = g.current;
    R && (N(R.scrollLeft > 0), C(R.scrollLeft + R.clientWidth < R.scrollWidth - 1));
  }, []);
  ce(() => {
    const R = g.current;
    if (!R) return;
    S(), R.addEventListener("scroll", S, { passive: !0 });
    const I = new ResizeObserver(S);
    return I.observe(R), () => {
      R.removeEventListener("scroll", S), I.disconnect();
    };
  }, [S]);
  function A(R) {
    var I;
    (I = g.current) == null || I.scrollBy({ left: R, behavior: "smooth" });
  }
  function D(R) {
    P((I) => {
      const z = new Set(I);
      return z.has(R) ? z.delete(R) : z.add(R), z;
    });
  }
  const O = yp(e, n);
  return /* @__PURE__ */ b(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ b(Me, { children: [
          /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Xe, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ b(Ie, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ b(_e, { children: [
              /* @__PURE__ */ a(ni, { children: "Open tabs" }),
              /* @__PURE__ */ a(_u, { children: e.map((R) => /* @__PURE__ */ a(
                re,
                {
                  onSelect: () => r(R.id),
                  "data-active-tab": R.id === t ? "" : void 0,
                  children: R.label
                },
                R.id
              )) }),
              /* @__PURE__ */ a(at, {})
            ] }),
            /* @__PURE__ */ a(
              re,
              {
                onSelect: () => h == null ? void 0 : h(),
                disabled: !h || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(
          he,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(ft, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !w,
            onClick: () => A(-Gr),
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
            children: O.map(
              (R) => R.kind === "tab" ? /* @__PURE__ */ a(
                xi,
                {
                  tab: R.tab,
                  isActive: R.tab.id === t,
                  groups: n,
                  onActivate: () => r(R.tab.id),
                  onClose: o ? () => o(R.tab.id) : void 0,
                  onLock: i ? () => i(R.tab.id) : void 0,
                  onUnlock: s ? () => s(R.tab.id) : void 0,
                  onPin: l ? () => l(R.tab.id) : void 0,
                  onUnpin: c ? () => c(R.tab.id) : void 0,
                  onAddToGroup: f ? () => f(R.tab.id) : void 0,
                  onCloseOthers: _ ? () => _(R.tab.id) : void 0,
                  onCloseAll: h
                },
                R.tab.id
              ) : /* @__PURE__ */ a(
                Cp,
                {
                  group: R.group,
                  tabs: R.tabs,
                  activeTabId: t,
                  isExpanded: !M.has(R.group.id),
                  onToggle: () => D(R.group.id),
                  onTabActivate: r,
                  onTabClose: o,
                  onTabLock: i,
                  onTabUnlock: s,
                  onTabPin: l,
                  onTabUnpin: c,
                  onAddTabToGroup: f,
                  onCloseOtherTabs: _,
                  onCloseAllTabs: h,
                  onGroupEdit: u ? () => u(R.group.id) : void 0,
                  onGroupUngroup: d ? () => d(R.group.id) : void 0,
                  onGroupClose: p ? () => p(R.group.id) : void 0,
                  allGroups: n
                },
                R.group.id
              )
            )
          }
        ),
        /* @__PURE__ */ a(
          he,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(rt, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => A(Gr),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function xi({
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
  return /* @__PURE__ */ b(
    "div",
    {
      className: "footer-tab",
      "data-active": t ? "" : void 0,
      "data-type": p,
      children: [
        /* @__PURE__ */ b(
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
              p === "locked" && /* @__PURE__ */ a(Ui, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ a(Gi, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ b("span", { className: "footer-tab__actions", children: [
          p === "standard" && o && /* @__PURE__ */ a(
            he,
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
          /* @__PURE__ */ b(Me, { children: [
            /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
              he,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ b(Ie, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ a(re, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ a(re, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ a(re, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ a(re, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ a(re, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ a(at, {}),
              p === "standard" && o && /* @__PURE__ */ a(re, { onSelect: o, children: "Close this tab" }),
              u && /* @__PURE__ */ a(re, { onSelect: u, children: "Close all other tabs" }),
              p === "standard" && d && /* @__PURE__ */ a(re, { onSelect: d, children: "Close all tabs" })
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
  onGroupEdit: _,
  onGroupUngroup: v,
  onGroupClose: g,
  allGroups: w
}) {
  const N = e.color ?? "gray";
  return /* @__PURE__ */ b(
    "div",
    {
      className: "footer-group",
      "data-color": N,
      "data-expanded": r ? "" : void 0,
      role: "group",
      "aria-label": `${e.label}, contains ${t.length} tab${t.length !== 1 ? "s" : ""}`,
      children: [
        /* @__PURE__ */ b("div", { className: "footer-group__header", children: [
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
          r && (_ || v || g) && /* @__PURE__ */ b(Me, { children: [
            /* @__PURE__ */ a(Pe, { asChild: !0, children: /* @__PURE__ */ a(
              he,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Xe, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ b(Ie, { side: "top", align: "start", sideOffset: 8, children: [
              _ && /* @__PURE__ */ a(re, { onSelect: _, children: "Edit group" }),
              v && /* @__PURE__ */ a(re, { onSelect: v, children: "Ungroup" }),
              (_ || v) && /* @__PURE__ */ a(at, {}),
              p && t[0] && /* @__PURE__ */ a(re, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ a(re, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ a("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ a(
          xi,
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
  children: _,
  className: v
}) {
  const g = p !== void 0, [w, N] = J(null), y = g ? p : w;
  function C(I) {
    g || N(I), h == null || h(I);
  }
  function M(I) {
    C(y === I ? null : I);
  }
  function P(I) {
    if (!I.drawerId) return I;
    const { drawerId: z, ...W } = I;
    return {
      ...W,
      selected: y === z,
      onClick: () => {
        var Y;
        (Y = I.onClick) == null || Y.call(I), M(z);
      }
    };
  }
  const S = i.map(P), A = s.map(P), D = d.find((I) => I.id === y) ?? null, O = D != null && D.persistent ? D : null, R = d.filter((I) => !I.persistent);
  return /* @__PURE__ */ b("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a(
      $f,
      {
        logo: e,
        productName: t,
        onLogoClick: n,
        tenantLabel: r,
        tenantColor: o,
        globalNavItems: S,
        contextualNavItems: A,
        showContextualDivider: l,
        userName: c,
        userAvatarSrc: f,
        userMenuItems: u
      }
    ),
    O && /* @__PURE__ */ a(
      "div",
      {
        className: "main-navigation__panel",
        "data-size": O.size ?? "medium",
        role: "complementary",
        "aria-label": "Navigation panel",
        children: O.content
      }
    ),
    /* @__PURE__ */ a("div", { className: "main-navigation__content", children: _ }),
    R.map((I) => /* @__PURE__ */ a(
      Gu,
      {
        open: y === I.id,
        onClose: () => C(null),
        size: I.size ?? "medium",
        side: I.side ?? "right",
        className: I.side === "left" ? "main-navigation__modal-drawer" : void 0,
        children: I.content
      },
      I.id
    ))
  ] });
}
function Ph({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ b(_e, { children: [
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
  rh as AvatarGroup,
  oh as AvatarWithStatus,
  Ku as Badge,
  ph as BannerAlert,
  Nu as Breadcrumbs,
  he as Button,
  Mu as ButtonsToolbar,
  ah as Card,
  ch as CardContent,
  lh as CardDescription,
  fh as CardDivider,
  dh as CardFooter,
  ih as CardHeader,
  uh as CardSection,
  sh as CardTitle,
  Bp as Checkbox,
  Fp as CheckboxGroup,
  $p as Chip,
  zp as ChipGroup,
  jp as Combobox,
  cr as Counter,
  uf as Dialog,
  pf as DialogBody,
  hf as DialogFooter,
  ff as DialogHeader,
  ti as Divider,
  Gu as Drawer,
  Xp as DrawerContent,
  th as DrawerContextButton,
  Kp as DrawerHeader,
  Jp as DrawerListItem,
  Zp as DrawerMenuItem,
  Qp as DrawerMultiLevelItem,
  eh as DrawerNotificationItem,
  qp as DrawerSection,
  Yp as DrawerTools,
  Wp as Dropdown,
  Vp as FieldLabel,
  Hp as FileUploader,
  Up as FileViewer,
  Me as FlyoutMenu,
  Ip as FlyoutMenuCheckboxItem,
  Ie as FlyoutMenuContent,
  _u as FlyoutMenuGroup,
  re as FlyoutMenuItem,
  ni as FlyoutMenuLabel,
  Ap as FlyoutMenuRadioGroup,
  Op as FlyoutMenuRadioItem,
  at as FlyoutMenuSeparator,
  Lp as FlyoutMenuShortcut,
  Tp as FlyoutMenuSub,
  Dp as FlyoutMenuSubContent,
  kp as FlyoutMenuSubTrigger,
  Pe as FlyoutMenuTrigger,
  Np as Footer,
  Gp as Hint,
  mh as IconBadge,
  me as IconButton,
  nh as Link,
  yf as List,
  Nf as ListItem,
  xp as MainNavigation,
  Ph as MicroNavigation,
  $f as Navbar,
  vh as PageHeader,
  nf as Panel,
  of as PanelBody,
  af as PanelFooter,
  rf as PanelHeader,
  gh as ProgressBar,
  _h as ProgressCircle,
  bh as Radio,
  wh as RadioGroup,
  yh as Range,
  sf as Section,
  It as Spinner,
  Nh as SplitButton,
  Cf as Stepper,
  xf as StepperStep,
  hh as Switch,
  _f as Tab,
  gf as TabList,
  bf as TabPanel,
  vf as Tabs,
  Zu as Tag,
  Ch as TextArea,
  xh as TextInput,
  Sh as ToastProvider,
  Eh as Tooltip,
  Mh as ValidationMessage,
  Rh as useToast
};
