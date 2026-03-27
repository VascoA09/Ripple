import { jsx as a, Fragment as we, jsxs as w } from "react/jsx-runtime";
import * as m from "react";
import R, { useLayoutEffect as Jt, useState as J, useId as oe, useRef as se, useImperativeHandle as Wn, useEffect as fe, useMemo as at, useCallback as de, createContext as Vn, useContext as Hn } from "react";
import * as oo from "react-dom";
import Un, { createPortal as Bi } from "react-dom";
import { Check as Fe, ChevronRight as lt, MoreHorizontal as Je, MoreVertical as ao, X as ke, ChevronDown as St, HelpCircle as Fi, UploadCloud as $i, Loader2 as zi, AlertCircle as pt, Upload as ji, Image as Wi, FileText as Mn, Archive as Vi, File as Hi, ZoomOut as Ui, ZoomIn as Gi, RotateCw as Ki, Maximize2 as Yi, Download as Cr, ScanSearch as Xi, ExternalLink as io, ChevronLeft as _t, FileX as qi, EyeOff as so, FileSpreadsheet as Zi, XCircle as Ke, AlertTriangle as lo, CheckCircle2 as co, Info as uo, EllipsisVertical as Qi, CheckCircle as en, Search as Ji, Eye as es, Lock as ts, Pin as ns } from "lucide-react";
function Ye(e, t = []) {
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
  return o.scopeName = e, [r, rs(o, ...t)];
}
function rs(...e) {
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
function xr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function tn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = xr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : xr(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return m.useCallback(tn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  const t = /* @__PURE__ */ os(e), n = m.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = m.Children.toArray(i), c = l.find(is);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ a(t, { ...s, ref: o, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ a(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const s = ls(o), l = ss(i, o.props);
      return o.type !== m.Fragment && (l.ref = r ? tn(r, s) : s), m.cloneElement(o, l);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fo = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a(we, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = fo, t;
}
function is(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fo;
}
function ss(e, t) {
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
function ls(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Gn(e) {
  const t = e + "CollectionProvider", [n, r] = Ye(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: _ } = v, N = R.useRef(null), y = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: g, itemMap: y, collectionRef: N, children: _ });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ Ut(l), f = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N } = v, y = i(l, _), C = ue(g, y.collectionRef);
      return /* @__PURE__ */ a(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Ut(u), h = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N, ...y } = v, C = R.useRef(null), E = ue(g, C), M = i(u, _);
      return R.useEffect(() => (M.itemMap.set(C, { ref: C, ...y }), () => void M.itemMap.delete(C))), /* @__PURE__ */ a(p, { [d]: "", ref: E, children: N });
    }
  );
  h.displayName = u;
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
    { Provider: s, Slot: f, ItemSlot: h },
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
var $e = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, cs = m[" useInsertionEffect ".trim().toString()] || $e;
function et({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = ds({
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
        const p = us(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function ds({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return cs(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function us(e) {
  return typeof e == "function";
}
var fs = [
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
], le = fs.reduce((e, t) => {
  const n = /* @__PURE__ */ Ut(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function po(e, t) {
  e && oo.flushSync(() => e.dispatchEvent(t));
}
function ps(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Xe = (e) => {
  const { present: t, children: n } = e, r = hs(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ue(r.ref, ms(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Xe.displayName = "Presence";
function hs(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = ps(s, {
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
    const f = kt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), $e(() => {
    const f = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, h = kt(f);
      e ? c("MOUNT") : h === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), $e(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = kt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = kt(r.current));
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
function kt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ms(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vs = m[" useId ".trim().toString()] || (() => {
}), gs = 0;
function He(e) {
  const [t, n] = m.useState(vs());
  return $e(() => {
    n((r) => r ?? String(gs++));
  }, [e]), t ? `radix-${t}` : "";
}
var nn = "Collapsible", [bs, ho] = Ye(nn), [_s, Kn] = bs(nn), mo = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c, f] = et({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: nn
    });
    return /* @__PURE__ */ a(
      _s,
      {
        scope: n,
        disabled: i,
        contentId: He(),
        open: c,
        onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ a(
          le.div,
          {
            "data-state": Xn(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
mo.displayName = nn;
var vo = "CollapsibleTrigger", go = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Kn(vo, n);
    return /* @__PURE__ */ a(
      le.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Xn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: K(e.onClick, o.onOpenToggle)
      }
    );
  }
);
go.displayName = vo;
var Yn = "CollapsibleContent", bo = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Kn(Yn, e.__scopeCollapsible);
    return /* @__PURE__ */ a(Xe, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(ws, { ...r, ref: t, present: i }) });
  }
);
bo.displayName = Yn;
var ws = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = Kn(Yn, n), [l, c] = m.useState(r), f = m.useRef(null), u = ue(t, f), d = m.useRef(0), p = d.current, h = m.useRef(0), b = h.current, v = s.open || l, g = m.useRef(v), _ = m.useRef(void 0);
  return m.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), $e(() => {
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
    le.div,
    {
      "data-state": Xn(s.open),
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
function Xn(e) {
  return e ? "open" : "closed";
}
var ys = mo, Ns = go, Cs = bo, xs = m.createContext(void 0);
function qn(e) {
  const t = m.useContext(xs);
  return e || t || "ltr";
}
var Se = "Accordion", Ss = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Zn, Rs, Es] = Gn(Se), [rn] = Ye(Se, [
  Es,
  ho
]), Qn = ho(), _o = R.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ a(Zn.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ a(As, { ...i, ref: t }) : /* @__PURE__ */ a(Is, { ...o, ref: t }) });
  }
);
_o.displayName = Se;
var [wo, Ms] = rn(Se), [yo, Ps] = rn(
  Se,
  { collapsible: !1 }
), Is = R.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [l, c] = et({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Se
    });
    return /* @__PURE__ */ a(
      wo,
      {
        scope: e.__scopeAccordion,
        value: R.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: R.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ a(yo, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ a(No, { ...s, ref: t }) })
      }
    );
  }
), As = R.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, l] = et({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Se
  }), c = R.useCallback(
    (u) => l((d = []) => [...d, u]),
    [l]
  ), f = R.useCallback(
    (u) => l((d = []) => d.filter((p) => p !== u)),
    [l]
  );
  return /* @__PURE__ */ a(
    wo,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ a(yo, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ a(No, { ...i, ref: t }) })
    }
  );
}), [Os, on] = rn(Se), No = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, l = R.useRef(null), c = ue(l, t), f = Rs(n), d = qn(o) === "ltr", p = K(e.onKeyDown, (h) => {
      var I;
      if (!Ss.includes(h.key)) return;
      const b = h.target, v = f().filter((k) => {
        var T;
        return !((T = k.ref.current) != null && T.disabled);
      }), g = v.findIndex((k) => k.ref.current === b), _ = v.length;
      if (g === -1) return;
      h.preventDefault();
      let N = g;
      const y = 0, C = _ - 1, E = () => {
        N = g + 1, N > C && (N = y);
      }, M = () => {
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
      const x = N % _;
      (I = v[x].ref.current) == null || I.focus();
    });
    return /* @__PURE__ */ a(
      Os,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ a(Zn.Slot, { scope: n, children: /* @__PURE__ */ a(
          le.div,
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
), Gt = "AccordionItem", [Ts, Jn] = rn(Gt), Co = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, i = on(Gt, n), s = Ms(Gt, n), l = Qn(n), c = He(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ a(
      Ts,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ a(
          ys,
          {
            "data-orientation": i.orientation,
            "data-state": Po(f),
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
Co.displayName = Gt;
var xo = "AccordionHeader", So = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = on(Se, n), i = Jn(xo, n);
    return /* @__PURE__ */ a(
      le.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Po(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
So.displayName = xo;
var Pn = "AccordionTrigger", Ro = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = on(Se, n), i = Jn(Pn, n), s = Ps(Pn, n), l = Qn(n);
    return /* @__PURE__ */ a(Zn.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      Ns,
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
Ro.displayName = Pn;
var Eo = "AccordionContent", Mo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = on(Se, n), i = Jn(Eo, n), s = Qn(n);
    return /* @__PURE__ */ a(
      Cs,
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
Mo.displayName = Eo;
function Po(e) {
  return e ? "open" : "closed";
}
var ks = _o, Ds = Co, Ls = So, Bs = Ro, Fs = Mo;
function $s() {
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
function Fp({
  items: e,
  size: t = "medium",
  defaultValue: n,
  value: r,
  onValueChange: o,
  className: i
}) {
  return /* @__PURE__ */ a(
    ks,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: o } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ w(
        Ds,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ a(Ls, { className: "accordion__header", children: /* @__PURE__ */ w(Bs, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ a("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ a("span", { className: "accordion__title", children: l.header }),
              l.afterElement && /* @__PURE__ */ a("span", { className: "accordion__after", children: l.afterElement }),
              /* @__PURE__ */ a($s, {})
            ] }) }),
            /* @__PURE__ */ a(Fs, { className: "accordion__content", children: /* @__PURE__ */ a("div", { className: "accordion__content-inner", children: l.content }) })
          ]
        },
        l.value
      ))
    }
  );
}
function Ie(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function zs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var js = "DismissableLayer", In = "dismissableLayer.update", Ws = "dismissableLayer.pointerDownOutside", Vs = "dismissableLayer.focusOutside", Sr, Io = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), er = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = m.useContext(Io), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), b = ue(t, (x) => d(x)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= _, E = Gs((x) => {
      const I = x.target, k = [...f.branches].some((T) => T.contains(I));
      !C || k || (o == null || o(x), s == null || s(x), x.defaultPrevented || l == null || l());
    }, p), M = Ks((x) => {
      const I = x.target;
      [...f.branches].some((T) => T.contains(I)) || (i == null || i(x), s == null || s(x), x.defaultPrevented || l == null || l());
    }, p);
    return zs((x) => {
      N === f.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && l && (x.preventDefault(), l()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Sr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Rr(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Sr);
        };
    }, [u, p, n, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Rr());
    }, [u, f]), m.useEffect(() => {
      const x = () => h({});
      return document.addEventListener(In, x), () => document.removeEventListener(In, x);
    }, []), /* @__PURE__ */ a(
      le.div,
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
er.displayName = js;
var Hs = "DismissableLayerBranch", Us = m.forwardRef((e, t) => {
  const n = m.useContext(Io), r = m.useRef(null), o = ue(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(le.div, { ...e, ref: o });
});
Us.displayName = Hs;
function Gs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          Ao(
            Ws,
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
function Ks(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ao(Vs, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Rr() {
  const e = new CustomEvent(In);
  document.dispatchEvent(e);
}
function Ao(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? po(o, i) : o.dispatchEvent(i);
}
var gn = 0;
function Ys() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Er()), document.body.insertAdjacentElement("beforeend", e[1] ?? Er()), gn++, () => {
      gn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gn--;
    };
  }, []);
}
function Er() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var bn = "focusScope.autoFocusOnMount", _n = "focusScope.autoFocusOnUnmount", Mr = { bubbles: !1, cancelable: !0 }, Xs = "FocusScope", Oo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = m.useState(null), f = Ie(o), u = Ie(i), d = m.useRef(null), p = ue(t, (v) => c(v)), h = m.useRef({
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
        l.contains(C) ? d.current = C : Ve(d.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || Ve(d.current, { select: !0 }));
      }, _ = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && Ve(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(_);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, h.paused]), m.useEffect(() => {
    if (l) {
      Ir.add(h);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const _ = new CustomEvent(bn, Mr);
        l.addEventListener(bn, f), l.dispatchEvent(_), _.defaultPrevented || (qs(tl(To(l)), { select: !0 }), document.activeElement === v && Ve(l));
      }
      return () => {
        l.removeEventListener(bn, f), setTimeout(() => {
          const _ = new CustomEvent(_n, Mr);
          l.addEventListener(_n, u), l.dispatchEvent(_), _.defaultPrevented || Ve(v ?? document.body, { select: !0 }), l.removeEventListener(_n, u), Ir.remove(h);
        }, 0);
      };
    }
  }, [l, f, u, h]);
  const b = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, _ = document.activeElement;
      if (g && _) {
        const N = v.currentTarget, [y, C] = Zs(N);
        y && C ? !v.shiftKey && _ === C ? (v.preventDefault(), n && Ve(y, { select: !0 })) : v.shiftKey && _ === y && (v.preventDefault(), n && Ve(C, { select: !0 })) : _ === N && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ a(le.div, { tabIndex: -1, ...s, ref: p, onKeyDown: b });
});
Oo.displayName = Xs;
function qs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ve(r, { select: t }), document.activeElement !== n) return;
}
function Zs(e) {
  const t = To(e), n = Pr(t, e), r = Pr(t.reverse(), e);
  return [n, r];
}
function To(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pr(e, t) {
  for (const n of e)
    if (!Qs(n, { upTo: t })) return n;
}
function Qs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Js(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Js(e) && t && e.select();
  }
}
var Ir = el();
function el() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ar(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ar(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ar(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function tl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const nl = ["top", "right", "bottom", "left"], Ue = Math.min, be = Math.max, Kt = Math.round, Dt = Math.floor, Pe = (e) => ({
  x: e,
  y: e
}), rl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function An(e, t, n) {
  return be(e, Ue(t, n));
}
function ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function ht(e) {
  return e.split("-")[1];
}
function tr(e) {
  return e === "x" ? "y" : "x";
}
function nr(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function rr(e) {
  return tr(Me(e));
}
function ol(e, t, n) {
  n === void 0 && (n = !1);
  const r = ht(e), o = rr(e), i = nr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Yt(s)), [s, Yt(s)];
}
function al(e) {
  const t = Yt(e);
  return [On(e), t, On(t)];
}
function On(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Or = ["left", "right"], Tr = ["right", "left"], il = ["top", "bottom"], sl = ["bottom", "top"];
function ll(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Tr : Or : t ? Or : Tr;
    case "left":
    case "right":
      return t ? il : sl;
    default:
      return [];
  }
}
function cl(e, t, n, r) {
  const o = ht(e);
  let i = ll(je(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(On)))), i;
}
function Yt(e) {
  const t = je(e);
  return rl[t] + e.slice(t.length);
}
function dl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ko(e) {
  return typeof e != "number" ? dl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xt(e) {
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
function kr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Me(t), s = rr(t), l = nr(s), c = je(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
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
  switch (ht(t)) {
    case "start":
      h[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && f ? -1 : 1);
      break;
  }
  return h;
}
async function ul(e, t) {
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
  } = ze(t, e), b = ko(h), g = l[p ? d === "floating" ? "reference" : "floating" : d], _ = Xt(await i.getClippingRect({
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
  }, E = Xt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: N,
    offsetParent: y,
    strategy: c
  }) : N);
  return {
    top: (_.top - E.top + b.top) / C.y,
    bottom: (E.bottom - _.bottom + b.bottom) / C.y,
    left: (_.left - E.left + b.left) / C.x,
    right: (E.right - _.right + b.right) / C.x
  };
}
const fl = 50, pl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: ul
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = kr(f, r, c), p = r, h = 0;
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
    u = y ?? u, d = C ?? d, b[_] = {
      ...b[_],
      ...E
    }, M && h < fl && (h++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (f = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : M.rects), {
      x: u,
      y: d
    } = kr(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: b
  };
}, hl = (e) => ({
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
    } = ze(e, t) || {};
    if (f == null)
      return {};
    const d = ko(u), p = {
      x: n,
      y: r
    }, h = rr(o), b = nr(h), v = await s.getDimensions(f), g = h === "y", _ = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[h] - p[h] - i.floating[b], E = p[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let x = M ? M[y] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(M))) && (x = l.floating[y] || i.floating[b]);
    const I = C / 2 - E / 2, k = x / 2 - v[b] / 2 - 1, T = Ue(d[_], k), S = Ue(d[N], k), P = T, F = x - v[b] - S, V = x / 2 - v[b] / 2 + I, Y = An(P, V, F), z = !c.arrow && ht(o) != null && V !== Y && i.reference[b] / 2 - (V < P ? T : S) - v[b] / 2 < 0, j = z ? V < P ? V - P : V - F : 0;
    return {
      [h]: p[h] + j,
      data: {
        [h]: Y,
        centerOffset: V - Y - j,
        ...z && {
          alignmentOffset: j
        }
      },
      reset: z
    };
  }
}), ml = function(e) {
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
      } = ze(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = je(o), N = Me(l), y = je(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), E = p || (y || !v ? [Yt(l)] : al(l)), M = b !== "none";
      !p && M && E.push(...cl(l, v, b, C));
      const x = [l, ...E], I = await c.detectOverflow(t, g), k = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && k.push(I[_]), d) {
        const V = ol(o, s, C);
        k.push(I[V[0]], I[V[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: k
      }], !k.every((V) => V <= 0)) {
        var S, P;
        const V = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, Y = x[V];
        if (Y && (!(d === "alignment" ? N !== Me(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((B) => Me(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: V,
              overflows: T
            },
            reset: {
              placement: Y
            }
          };
        let z = (P = T.filter((j) => j.overflows[0] <= 0).sort((j, B) => j.overflows[1] - B.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!z)
          switch (h) {
            case "bestFit": {
              var F;
              const j = (F = T.filter((B) => {
                if (M) {
                  const D = Me(B.placement);
                  return D === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((D) => D > 0).reduce((D, Z) => D + Z, 0)]).sort((B, D) => B[1] - D[1])[0]) == null ? void 0 : F[0];
              j && (z = j);
              break;
            }
            case "initialPlacement":
              z = l;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Dr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Lr(e) {
  return nl.some((t) => e[t] >= 0);
}
const vl = function(e) {
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
      } = ze(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Dr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Lr(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Dr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Lr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Do = /* @__PURE__ */ new Set(["left", "top"]);
async function gl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = je(n), l = ht(n), c = Me(n) === "y", f = Do.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = ze(t, e);
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
const bl = function(e) {
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
      } = t, c = await gl(t, e);
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
}, _l = function(e) {
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
      } = ze(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Me(je(o)), h = tr(p);
      let b = u[h], v = u[p];
      if (s) {
        const _ = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", y = b + d[_], C = b - d[N];
        b = An(y, b, C);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[_], C = v - d[N];
        v = An(y, v, C);
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
}, wl = function(e) {
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
      } = ze(e, t), u = {
        x: n,
        y: r
      }, d = Me(o), p = tr(d);
      let h = u[p], b = u[d];
      const v = ze(l, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[y] + g.mainAxis, E = i.reference[p] + i.reference[y] - g.mainAxis;
        h < C ? h = C : h > E && (h = E);
      }
      if (f) {
        var _, N;
        const y = p === "y" ? "width" : "height", C = Do.has(je(o)), E = i.reference[d] - i.floating[y] + (C && ((_ = s.offset) == null ? void 0 : _[d]) || 0) + (C ? 0 : g.crossAxis), M = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        b < E ? b = E : b > M && (b = M);
      }
      return {
        [p]: h,
        [d]: b
      };
    }
  };
}, yl = function(e) {
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
      } = ze(e, t), u = await s.detectOverflow(t, f), d = je(o), p = ht(o), h = Me(o) === "y", {
        width: b,
        height: v
      } = i.floating;
      let g, _;
      d === "top" || d === "bottom" ? (g = d, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = b - u.left - u.right, C = Ue(v - u[g], N), E = Ue(b - u[_], y), M = !t.middlewareData.shift;
      let x = C, I = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = y), (r = t.middlewareData.shift) != null && r.enabled.y && (x = N), M && !p) {
        const T = be(u.left, 0), S = be(u.right, 0), P = be(u.top, 0), F = be(u.bottom, 0);
        h ? I = b - 2 * (T !== 0 || S !== 0 ? T + S : be(u.left, u.right)) : x = v - 2 * (P !== 0 || F !== 0 ? P + F : be(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: I,
        availableHeight: x
      });
      const k = await s.getDimensions(l.floating);
      return b !== k.width || v !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function an() {
  return typeof window < "u";
}
function mt(e) {
  return Lo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (Lo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Lo(e) {
  return an() ? e instanceof Node || e instanceof _e(e).Node : !1;
}
function Ce(e) {
  return an() ? e instanceof Element || e instanceof _e(e).Element : !1;
}
function We(e) {
  return an() ? e instanceof HTMLElement || e instanceof _e(e).HTMLElement : !1;
}
function Br(e) {
  return !an() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _e(e).ShadowRoot;
}
function Rt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Nl(e) {
  return /^(table|td|th)$/.test(mt(e));
}
function sn(e) {
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
const Cl = /transform|translate|scale|rotate|perspective|filter/, xl = /paint|layout|strict|content/, Ze = (e) => !!e && e !== "none";
let wn;
function or(e) {
  const t = Ce(e) ? xe(e) : e;
  return Ze(t.transform) || Ze(t.translate) || Ze(t.scale) || Ze(t.rotate) || Ze(t.perspective) || !ar() && (Ze(t.backdropFilter) || Ze(t.filter)) || Cl.test(t.willChange || "") || xl.test(t.contain || "");
}
function Sl(e) {
  let t = Ge(e);
  for (; We(t) && !ct(t); ) {
    if (or(t))
      return t;
    if (sn(t))
      return null;
    t = Ge(t);
  }
  return null;
}
function ar() {
  return wn == null && (wn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), wn;
}
function ct(e) {
  return /^(html|body|#document)$/.test(mt(e));
}
function xe(e) {
  return _e(e).getComputedStyle(e);
}
function ln(e) {
  return Ce(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ge(e) {
  if (mt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Br(e) && e.host || // Fallback.
    De(e)
  );
  return Br(t) ? t.host : t;
}
function Bo(e) {
  const t = Ge(e);
  return ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : We(t) && Rt(t) ? t : Bo(t);
}
function wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Bo(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = _e(o);
  if (i) {
    const l = Tn(s);
    return t.concat(s, s.visualViewport || [], Rt(o) ? o : [], l && n ? wt(l) : []);
  } else
    return t.concat(o, wt(o, [], n));
}
function Tn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fo(e) {
  const t = xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = We(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Kt(n) !== i || Kt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function ir(e) {
  return Ce(e) ? e : e.contextElement;
}
function it(e) {
  const t = ir(e);
  if (!We(t))
    return Pe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Fo(t);
  let s = (i ? Kt(n.width) : n.width) / r, l = (i ? Kt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Rl = /* @__PURE__ */ Pe(0);
function $o(e) {
  const t = _e(e);
  return !ar() || !t.visualViewport ? Rl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function El(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _e(e) ? !1 : t;
}
function Qe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ir(e);
  let s = Pe(1);
  t && (r ? Ce(r) && (s = it(r)) : s = it(e));
  const l = El(i, n, r) ? $o(i) : Pe(0);
  let c = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = _e(i), h = r && Ce(r) ? _e(r) : r;
    let b = p, v = Tn(b);
    for (; v && r && h !== b; ) {
      const g = it(v), _ = v.getBoundingClientRect(), N = xe(v), y = _.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = _.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, b = _e(v), v = Tn(b);
    }
  }
  return Xt({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function cn(e, t) {
  const n = ln(e).scrollLeft;
  return t ? t.left + n : Qe(De(e)).left + n;
}
function zo(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - cn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ml(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = De(r), l = t ? sn(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Pe(1);
  const u = Pe(0), d = We(r);
  if ((d || !d && !i) && ((mt(r) !== "body" || Rt(s)) && (c = ln(r)), d)) {
    const h = Qe(r);
    f = it(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !d && !i ? zo(s, c) : Pe(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
  };
}
function Pl(e) {
  return Array.from(e.getClientRects());
}
function Il(e) {
  const t = De(e), n = ln(e), r = e.ownerDocument.body, o = be(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = be(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + cn(e);
  const l = -n.scrollTop;
  return xe(r).direction === "rtl" && (s += be(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const Fr = 25;
function Al(e, t) {
  const n = _e(e), r = De(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = ar();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  const f = cn(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - h);
    b <= Fr && (i -= b);
  } else f <= Fr && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Ol(e, t) {
  const n = Qe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = We(e) ? it(e) : Pe(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = o * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function $r(e, t, n) {
  let r;
  if (t === "viewport")
    r = Al(e, n);
  else if (t === "document")
    r = Il(De(e));
  else if (Ce(t))
    r = Ol(t, n);
  else {
    const o = $o(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Xt(r);
}
function jo(e, t) {
  const n = Ge(e);
  return n === t || !Ce(n) || ct(n) ? !1 : xe(n).position === "fixed" || jo(n, t);
}
function Tl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wt(e, [], !1).filter((l) => Ce(l) && mt(l) !== "body"), o = null;
  const i = xe(e).position === "fixed";
  let s = i ? Ge(e) : e;
  for (; Ce(s) && !ct(s); ) {
    const l = xe(s), c = or(s);
    !c && l.position === "fixed" && (o = null), (i ? !c && !o : !c && l.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Rt(s) && !c && jo(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = Ge(s);
  }
  return t.set(e, r), r;
}
function kl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? sn(t) ? [] : Tl(t, this._c) : [].concat(n), r], l = $r(t, s[0], o);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const h = $r(t, s[p], o);
    c = be(h.top, c), f = Ue(h.right, f), u = Ue(h.bottom, u), d = be(h.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function Dl(e) {
  const {
    width: t,
    height: n
  } = Fo(e);
  return {
    width: t,
    height: n
  };
}
function Ll(e, t, n) {
  const r = We(t), o = De(t), i = n === "fixed", s = Qe(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Pe(0);
  function f() {
    c.x = cn(o);
  }
  if (r || !r && !i)
    if ((mt(t) !== "body" || Rt(o)) && (l = ln(t)), r) {
      const h = Qe(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && f();
  i && !r && o && f();
  const u = o && !r && !i ? zo(o, l) : Pe(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function yn(e) {
  return xe(e).position === "static";
}
function zr(e, t) {
  if (!We(e) || xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return De(e) === n && (n = n.ownerDocument.body), n;
}
function Wo(e, t) {
  const n = _e(e);
  if (sn(e))
    return n;
  if (!We(e)) {
    let o = Ge(e);
    for (; o && !ct(o); ) {
      if (Ce(o) && !yn(o))
        return o;
      o = Ge(o);
    }
    return n;
  }
  let r = zr(e, t);
  for (; r && Nl(r) && yn(r); )
    r = zr(r, t);
  return r && ct(r) && yn(r) && !or(r) ? n : r || Sl(e) || n;
}
const Bl = async function(e) {
  const t = this.getOffsetParent || Wo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ll(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Fl(e) {
  return xe(e).direction === "rtl";
}
const $l = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ml,
  getDocumentElement: De,
  getClippingRect: kl,
  getOffsetParent: Wo,
  getElementRects: Bl,
  getClientRects: Pl,
  getDimensions: Dl,
  getScale: it,
  isElement: Ce,
  isRTL: Fl
};
function Vo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zl(e, t) {
  let n = null, r;
  const o = De(e);
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
    const b = Dt(d), v = Dt(o.clientWidth - (u + p)), g = Dt(o.clientHeight - (d + h)), _ = Dt(u), y = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -_ + "px",
      threshold: be(0, Ue(1, c)) || 1
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
      x === 1 && !Vo(f, e.getBoundingClientRect()) && s(), C = !1;
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
function jl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = ir(e), u = o || i ? [...f ? wt(f) : [], ...t ? wt(t) : []] : [];
  u.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const d = f && l ? zl(f, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((_) => {
    let [N] = _;
    N && N.target === f && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), f && !c && h.observe(f), t && h.observe(t));
  let b, v = c ? Qe(e) : null;
  c && g();
  function g() {
    const _ = Qe(e);
    v && !Vo(v, _) && n(), v = _, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var _;
    u.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (_ = h) == null || _.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const Wl = bl, Vl = _l, Hl = ml, Ul = yl, Gl = vl, jr = hl, Kl = wl, Yl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $l,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return pl(e, t, {
    ...o,
    platform: i
  });
};
var Xl = typeof document < "u", ql = function() {
}, Wt = Xl ? Jt : ql;
function qt(e, t) {
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
        if (!qt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !qt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ho(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wr(e, t) {
  const n = Ho(e);
  return Math.round(t * n) / n;
}
function Nn(e) {
  const t = m.useRef(e);
  return Wt(() => {
    t.current = e;
  }), t;
}
function Zl(e) {
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
  qt(p, r) || h(r);
  const [b, v] = m.useState(null), [g, _] = m.useState(null), N = m.useCallback((B) => {
    B !== M.current && (M.current = B, v(B));
  }, []), y = m.useCallback((B) => {
    B !== x.current && (x.current = B, _(B));
  }, []), C = i || b, E = s || g, M = m.useRef(null), x = m.useRef(null), I = m.useRef(u), k = c != null, T = Nn(c), S = Nn(o), P = Nn(f), F = m.useCallback(() => {
    if (!M.current || !x.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    S.current && (B.platform = S.current), Yl(M.current, x.current, B).then((D) => {
      const Z = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      V.current && !qt(I.current, Z) && (I.current = Z, oo.flushSync(() => {
        d(Z);
      }));
    });
  }, [p, t, n, S, P]);
  Wt(() => {
    f === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const V = m.useRef(!1);
  Wt(() => (V.current = !0, () => {
    V.current = !1;
  }), []), Wt(() => {
    if (C && (M.current = C), E && (x.current = E), C && E) {
      if (T.current)
        return T.current(C, E, F);
      F();
    }
  }, [C, E, F, T, k]);
  const Y = m.useMemo(() => ({
    reference: M,
    floating: x,
    setReference: N,
    setFloating: y
  }), [N, y]), z = m.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), j = m.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return B;
    const D = Wr(z.floating, u.x), Z = Wr(z.floating, u.y);
    return l ? {
      ...B,
      transform: "translate(" + D + "px, " + Z + "px)",
      ...Ho(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: Z
    };
  }, [n, l, z.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: F,
    refs: Y,
    elements: z,
    floatingStyles: j
  }), [u, F, Y, z, j]);
}
const Ql = (e) => {
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
      return r && t(r) ? r.current != null ? jr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? jr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Jl = (e, t) => {
  const n = Wl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ec = (e, t) => {
  const n = Vl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, tc = (e, t) => ({
  fn: Kl(e).fn,
  options: [e, t]
}), nc = (e, t) => {
  const n = Hl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, rc = (e, t) => {
  const n = Ul(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, oc = (e, t) => {
  const n = Gl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ac = (e, t) => {
  const n = Ql(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var ic = "Arrow", Uo = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ a(
    le.svg,
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
Uo.displayName = ic;
var sc = Uo;
function lc(e) {
  const [t, n] = m.useState(void 0);
  return $e(() => {
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
var sr = "Popper", [Go, dn] = Ye(sr), [cc, Ko] = Go(sr), Yo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ a(cc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Yo.displayName = sr;
var Xo = "PopperAnchor", qo = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Ko(Xo, n), s = m.useRef(null), l = ue(t, s), c = m.useRef(null);
    return m.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ a(le.div, { ...o, ref: l });
  }
);
qo.displayName = Xo;
var lr = "PopperContent", [dc, uc] = Go(lr), Zo = m.forwardRef(
  (e, t) => {
    var G, ne, X, ce, pe, L;
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
    } = e, g = Ko(lr, n), [_, N] = m.useState(null), y = ue(t, (W) => N(W)), [C, E] = m.useState(null), M = lc(C), x = (M == null ? void 0 : M.width) ?? 0, I = (M == null ? void 0 : M.height) ?? 0, k = r + (i !== "center" ? "-" + i : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, S = Array.isArray(f) ? f : [f], P = S.length > 0, F = {
      padding: T,
      boundary: S.filter(pc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: V, floatingStyles: Y, placement: z, isPositioned: j, middlewareData: B } = Zl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...W) => jl(...W, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Jl({ mainAxis: o + I, alignmentAxis: s }),
        c && ec({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? tc() : void 0,
          ...F
        }),
        c && nc({ ...F }),
        rc({
          ...F,
          apply: ({ elements: W, rects: q, availableWidth: Ne, availableHeight: re }) => {
            const { width: he, height: Le } = q.reference, Re = W.floating.style;
            Re.setProperty("--radix-popper-available-width", `${Ne}px`), Re.setProperty("--radix-popper-available-height", `${re}px`), Re.setProperty("--radix-popper-anchor-width", `${he}px`), Re.setProperty("--radix-popper-anchor-height", `${Le}px`);
          }
        }),
        C && ac({ element: C, padding: l }),
        hc({ arrowWidth: x, arrowHeight: I }),
        p && oc({ strategy: "referenceHidden", ...F })
      ]
    }), [D, Z] = ea(z), ee = Ie(b);
    $e(() => {
      j && (ee == null || ee());
    }, [j, ee]);
    const U = (G = B.arrow) == null ? void 0 : G.x, $ = (ne = B.arrow) == null ? void 0 : ne.y, Q = ((X = B.arrow) == null ? void 0 : X.centerOffset) !== 0, [O, H] = m.useState();
    return $e(() => {
      _ && H(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ a(
      "div",
      {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: j ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O,
          "--radix-popper-transform-origin": [
            (ce = B.transformOrigin) == null ? void 0 : ce.x,
            (pe = B.transformOrigin) == null ? void 0 : pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((L = B.hide) == null ? void 0 : L.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a(
          dc,
          {
            scope: n,
            placedSide: D,
            onArrowChange: E,
            arrowX: U,
            arrowY: $,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ a(
              le.div,
              {
                "data-side": D,
                "data-align": Z,
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
Zo.displayName = lr;
var Qo = "PopperArrow", fc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Jo = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = uc(Qo, r), s = fc[i.placedSide];
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
          sc,
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
Jo.displayName = Qo;
function pc(e) {
  return e !== null;
}
var hc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, _, N;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = ea(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((_ = o.arrow) == null ? void 0 : _.x) ?? 0) + l / 2, h = (((N = o.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let b = "", v = "";
    return f === "bottom" ? (b = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (b = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, v = s ? d : `${h}px`) : f === "left" && (b = `${r.floating.width + c}px`, v = s ? d : `${h}px`), { data: { x: b, y: v } };
  }
});
function ea(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cr = Yo, ta = qo, na = Zo, ra = Jo, mc = "Portal", dr = m.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  $e(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? Un.createPortal(/* @__PURE__ */ a(le.div, { ...r, ref: t }), s) : null;
});
dr.displayName = mc;
var Cn = "rovingFocusGroup.onEntryFocus", vc = { bubbles: !1, cancelable: !0 }, Et = "RovingFocusGroup", [kn, oa, gc] = Gn(Et), [bc, aa] = Ye(
  Et,
  [gc]
), [_c, wc] = bc(Et), ia = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(kn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(kn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(yc, { ...e, ref: t }) }) })
);
ia.displayName = Et;
var yc = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = ue(t, p), b = qn(i), [v, g] = et({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: Et
  }), [_, N] = m.useState(!1), y = Ie(f), C = oa(n), E = m.useRef(!1), [M, x] = m.useState(0);
  return m.useEffect(() => {
    const I = p.current;
    if (I)
      return I.addEventListener(Cn, y), () => I.removeEventListener(Cn, y);
  }, [y]), /* @__PURE__ */ a(
    _c,
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
        () => x((I) => I + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => x((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        le.div,
        {
          tabIndex: _ || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: K(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: K(e.onFocus, (I) => {
            const k = !E.current;
            if (I.target === I.currentTarget && k && !_) {
              const T = new CustomEvent(Cn, vc);
              if (I.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const S = C().filter((z) => z.focusable), P = S.find((z) => z.active), F = S.find((z) => z.id === v), Y = [P, F, ...S].filter(
                  Boolean
                ).map((z) => z.ref.current);
                ca(Y, u);
              }
            }
            E.current = !1;
          }),
          onBlur: K(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), sa = "RovingFocusGroupItem", la = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = He(), f = i || c, u = wc(sa, n), d = u.currentTabStopId === f, p = oa(n), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ a(
      kn.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          le.span,
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
              const _ = xc(g, u.orientation, u.dir);
              if (_ !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (_ === "last") y.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && y.reverse();
                  const C = y.indexOf(g.currentTarget);
                  y = u.loop ? Sc(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => ca(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
la.displayName = sa;
var Nc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Cc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function xc(e, t, n) {
  const r = Cc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Nc[r];
}
function ca(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Sc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Rc = ia, Ec = la, Mc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nt = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Bt = {}, xn = 0, da = function(e) {
  return e && (e.host || da(e.parentNode));
}, Pc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = da(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ic = function(e, t, n, r) {
  var o = Pc(t, Array.isArray(e) ? e : [e]);
  Bt[n] || (Bt[n] = /* @__PURE__ */ new WeakMap());
  var i = Bt[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  o.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), b = h !== null && h !== "false", v = (nt.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          nt.set(p, v), i.set(p, g), s.push(p), v === 1 && b && Lt.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), l.clear(), xn++, function() {
    s.forEach(function(d) {
      var p = nt.get(d) - 1, h = i.get(d) - 1;
      nt.set(d, p), i.set(d, h), p || (Lt.has(d) || d.removeAttribute(r), Lt.delete(d)), h || d.removeAttribute(n);
    }), xn--, xn || (nt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Bt = {});
  };
}, Ac = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ic(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function ua(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Oc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Vt = "right-scroll-bar-position", Ht = "width-before-scroll-bar", Tc = "with-scroll-bars-hidden", kc = "--removed-body-scroll-bar-size";
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Dc(e, t) {
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
var Lc = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Vr = /* @__PURE__ */ new WeakMap();
function Bc(e, t) {
  var n = Dc(null, function(r) {
    return e.forEach(function(o) {
      return Sn(o, r);
    });
  });
  return Lc(function() {
    var r = Vr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || Sn(l, null);
      }), i.forEach(function(l) {
        o.has(l) || Sn(l, s);
      });
    }
    Vr.set(n, e);
  }, [e]), n;
}
function Fc(e) {
  return e;
}
function $c(e, t) {
  t === void 0 && (t = Fc);
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
function zc(e) {
  e === void 0 && (e = {});
  var t = $c(null);
  return t.options = Ee({ async: !0, ssr: !1 }, e), t;
}
var fa = function(e) {
  var t = e.sideCar, n = ua(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, Ee({}, n));
};
fa.isSideCarExport = !0;
function jc(e, t) {
  return e.useMedium(t), fa;
}
var pa = zc(), Rn = function() {
}, un = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Rn,
    onWheelCapture: Rn,
    onTouchMoveCapture: Rn
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, _ = e.as, N = _ === void 0 ? "div" : _, y = e.gapMode, C = ua(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, M = Bc([n, t]), x = Ee(Ee({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(E, { sideCar: pa, removeScrollBar: f, shards: d, noRelative: h, noIsolation: b, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(l), Ee(Ee({}, x), { ref: M })) : m.createElement(N, Ee({}, x, { className: c, ref: M }), l)
  );
});
un.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
un.classNames = {
  fullWidth: Ht,
  zeroRight: Vt
};
var Wc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Vc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Wc();
  return t && e.setAttribute("nonce", t), e;
}
function Hc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Uc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Gc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Vc()) && (Hc(t, n), Uc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Kc = function() {
  var e = Gc();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ha = function() {
  var e = Kc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Yc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, En = function(e) {
  return parseInt(e || "", 10) || 0;
}, Xc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [En(n), En(r), En(o)];
}, qc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yc;
  var t = Xc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Zc = ha(), st = "data-scroll-locked", Qc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Tc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(st, `] {
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
  
  .`).concat(Vt, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ht, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ht, " .").concat(Ht, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(st, `] {
    `).concat(kc, ": ").concat(l, `px;
  }
`);
}, Hr = function() {
  var e = parseInt(document.body.getAttribute(st) || "0", 10);
  return isFinite(e) ? e : 0;
}, Jc = function() {
  m.useEffect(function() {
    return document.body.setAttribute(st, (Hr() + 1).toString()), function() {
      var e = Hr() - 1;
      e <= 0 ? document.body.removeAttribute(st) : document.body.setAttribute(st, e.toString());
    };
  }, []);
}, ed = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Jc();
  var i = m.useMemo(function() {
    return qc(o);
  }, [o]);
  return m.createElement(Zc, { styles: Qc(i, !t, o, n ? "" : "!important") });
}, Dn = !1;
if (typeof window < "u")
  try {
    var Ft = Object.defineProperty({}, "passive", {
      get: function() {
        return Dn = !0, !0;
      }
    });
    window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Dn = !1;
  }
var rt = Dn ? { passive: !1 } : !1, td = function(e) {
  return e.tagName === "TEXTAREA";
}, ma = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !td(e) && n[t] === "visible")
  );
}, nd = function(e) {
  return ma(e, "overflowY");
}, rd = function(e) {
  return ma(e, "overflowX");
}, Ur = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = va(e, r);
    if (o) {
      var i = ga(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, od = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ad = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, va = function(e, t) {
  return e === "v" ? nd(t) : rd(t);
}, ga = function(e, t) {
  return e === "v" ? od(t) : ad(t);
}, id = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, sd = function(e, t, n, r, o) {
  var i = id(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var h = ga(e, l), b = h[0], v = h[1], g = h[2], _ = v - g - i * b;
    (b || _) && va(e, l) && (d += _, p += b);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, $t = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gr = function(e) {
  return [e.deltaX, e.deltaY];
}, Kr = function(e) {
  return e && "current" in e ? e.current : e;
}, ld = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, cd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, dd = 0, ot = [];
function ud(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(dd++)[0], i = m.useState(ha)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Oc([e.lockRef.current], (e.shards || []).map(Kr), !0).filter(Boolean);
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
    var _ = $t(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - _[0], C = "deltaY" in v ? v.deltaY : N[1] - _[1], E, M = v.target, x = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && x === "h" && M.type === "range")
      return !1;
    var I = window.getSelection(), k = I && I.anchorNode, T = k ? k === M || k.contains(M) : !1;
    if (T)
      return !1;
    var S = Ur(x, M);
    if (!S)
      return !0;
    if (S ? E = x : (E = x === "v" ? "h" : "v", S = Ur(x, M)), !S)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return sd(P, g, v, P === "h" ? y : C);
  }, []), c = m.useCallback(function(v) {
    var g = v;
    if (!(!ot.length || ot[ot.length - 1] !== i)) {
      var _ = "deltaY" in g ? Gr(g) : $t(g), N = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && ld(E.delta, _);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(Kr).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(v, g, _, N) {
    var y = { name: v, delta: g, target: _, should: N, shadowParent: fd(_) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = $t(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    f(v.type, Gr(v), v.target, l(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    f(v.type, $t(v), v.target, l(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return ot.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, rt), document.addEventListener("touchmove", c, rt), document.addEventListener("touchstart", u, rt), function() {
      ot = ot.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, rt), document.removeEventListener("touchmove", c, rt), document.removeEventListener("touchstart", u, rt);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: cd(o) }) : null,
    h ? m.createElement(ed, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function fd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const pd = jc(pa, ud);
var ba = m.forwardRef(function(e, t) {
  return m.createElement(un, Ee({}, e, { ref: t, sideCar: pd }));
});
ba.classNames = un.classNames;
var Ln = ["Enter", " "], hd = ["ArrowDown", "PageUp", "Home"], _a = ["ArrowUp", "PageDown", "End"], md = [...hd, ..._a], vd = {
  ltr: [...Ln, "ArrowRight"],
  rtl: [...Ln, "ArrowLeft"]
}, gd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Mt = "Menu", [yt, bd, _d] = Gn(Mt), [tt, wa] = Ye(Mt, [
  _d,
  dn,
  aa
]), Pt = dn(), ya = aa(), [Na, qe] = tt(Mt), [wd, It] = tt(Mt), Ca = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = Pt(t), [c, f] = m.useState(null), u = m.useRef(!1), d = Ie(i), p = qn(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(cr, { ...l, children: /* @__PURE__ */ a(
    Na,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ a(
        wd,
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
Ca.displayName = Mt;
var yd = "MenuAnchor", ur = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ a(ta, { ...o, ...r, ref: t });
  }
);
ur.displayName = yd;
var fr = "MenuPortal", [Nd, xa] = tt(fr, {
  forceMount: void 0
}), Sa = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = qe(fr, t);
  return /* @__PURE__ */ a(Nd, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Xe, { present: n || i.open, children: /* @__PURE__ */ a(dr, { asChild: !0, container: o, children: r }) }) });
};
Sa.displayName = fr;
var ye = "MenuContent", [Cd, pr] = tt(ye), Ra = m.forwardRef(
  (e, t) => {
    const n = xa(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = qe(ye, e.__scopeMenu), s = It(ye, e.__scopeMenu);
    return /* @__PURE__ */ a(yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Xe, { present: r || i.open, children: /* @__PURE__ */ a(yt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(xd, { ...o, ref: t }) : /* @__PURE__ */ a(Sd, { ...o, ref: t }) }) }) });
  }
), xd = m.forwardRef(
  (e, t) => {
    const n = qe(ye, e.__scopeMenu), r = m.useRef(null), o = ue(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Ac(i);
    }, []), /* @__PURE__ */ a(
      hr,
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
), Sd = m.forwardRef((e, t) => {
  const n = qe(ye, e.__scopeMenu);
  return /* @__PURE__ */ a(
    hr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Rd = /* @__PURE__ */ Ut("MenuContent.ScrollLock"), hr = m.forwardRef(
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
    } = e, g = qe(ye, n), _ = It(ye, n), N = Pt(n), y = ya(n), C = bd(n), [E, M] = m.useState(null), x = m.useRef(null), I = ue(t, x, g.onContentChange), k = m.useRef(0), T = m.useRef(""), S = m.useRef(0), P = m.useRef(null), F = m.useRef("right"), V = m.useRef(0), Y = b ? ba : m.Fragment, z = b ? { as: Rd, allowPinchZoom: !0 } : void 0, j = (D) => {
      var G, ne;
      const Z = T.current + D, ee = C().filter((X) => !X.disabled), U = document.activeElement, $ = (G = ee.find((X) => X.ref.current === U)) == null ? void 0 : G.textValue, Q = ee.map((X) => X.textValue), O = Fd(Q, Z, $), H = (ne = ee.find((X) => X.textValue === O)) == null ? void 0 : ne.ref.current;
      (function X(ce) {
        T.current = ce, window.clearTimeout(k.current), ce !== "" && (k.current = window.setTimeout(() => X(""), 1e3));
      })(Z), H && setTimeout(() => H.focus());
    };
    m.useEffect(() => () => window.clearTimeout(k.current), []), Ys();
    const B = m.useCallback((D) => {
      var ee, U;
      return F.current === ((ee = P.current) == null ? void 0 : ee.side) && zd(D, (U = P.current) == null ? void 0 : U.area);
    }, []);
    return /* @__PURE__ */ a(
      Cd,
      {
        scope: n,
        searchRef: T,
        onItemEnter: m.useCallback(
          (D) => {
            B(D) && D.preventDefault();
          },
          [B]
        ),
        onItemLeave: m.useCallback(
          (D) => {
            var Z;
            B(D) || ((Z = x.current) == null || Z.focus(), M(null));
          },
          [B]
        ),
        onTriggerLeave: m.useCallback(
          (D) => {
            B(D) && D.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: S,
        onPointerGraceIntentChange: m.useCallback((D) => {
          P.current = D;
        }, []),
        children: /* @__PURE__ */ a(Y, { ...z, children: /* @__PURE__ */ a(
          Oo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: K(i, (D) => {
              var Z;
              D.preventDefault(), (Z = x.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              er,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ a(
                  Rc,
                  {
                    asChild: !0,
                    ...y,
                    dir: _.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: K(c, (D) => {
                      _.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      na,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Va(g.open),
                        "data-radix-menu-content": "",
                        dir: _.dir,
                        ...N,
                        ...v,
                        ref: I,
                        style: { outline: "none", ...v.style },
                        onKeyDown: K(v.onKeyDown, (D) => {
                          const ee = D.target.closest("[data-radix-menu-content]") === D.currentTarget, U = D.ctrlKey || D.altKey || D.metaKey, $ = D.key.length === 1;
                          ee && (D.key === "Tab" && D.preventDefault(), !U && $ && j(D.key));
                          const Q = x.current;
                          if (D.target !== Q || !md.includes(D.key)) return;
                          D.preventDefault();
                          const H = C().filter((G) => !G.disabled).map((G) => G.ref.current);
                          _a.includes(D.key) && H.reverse(), Ld(H);
                        }),
                        onBlur: K(e.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(k.current), T.current = "");
                        }),
                        onPointerMove: K(
                          e.onPointerMove,
                          Nt((D) => {
                            const Z = D.target, ee = V.current !== D.clientX;
                            if (D.currentTarget.contains(Z) && ee) {
                              const U = D.clientX > V.current ? "right" : "left";
                              F.current = U, V.current = D.clientX;
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
Ra.displayName = ye;
var Ed = "MenuGroup", mr = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(le.div, { role: "group", ...r, ref: t });
  }
);
mr.displayName = Ed;
var Md = "MenuLabel", Ea = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(le.div, { ...r, ref: t });
  }
);
Ea.displayName = Md;
var Zt = "MenuItem", Yr = "menu.itemSelect", fn = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), s = It(Zt, e.__scopeMenu), l = pr(Zt, e.__scopeMenu), c = ue(t, i), f = m.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(Yr, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Yr, (h) => r == null ? void 0 : r(h), { once: !0 }), po(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      Ma,
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
          n || p && d.key === " " || Ln.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
fn.displayName = Zt;
var Ma = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = pr(Zt, n), l = ya(n), c = m.useRef(null), f = ue(t, c), [u, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const b = c.current;
      b && h((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      yt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a(Ec, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          le.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: K(
              e.onPointerMove,
              Nt((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: K(
              e.onPointerLeave,
              Nt((b) => s.onItemLeave(b))
            ),
            onFocus: K(e.onFocus, () => d(!0)),
            onBlur: K(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Pd = "MenuCheckboxItem", Pa = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(ka, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      fn,
      {
        role: "menuitemcheckbox",
        "aria-checked": Qt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": br(n),
        onSelect: K(
          o.onSelect,
          () => r == null ? void 0 : r(Qt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Pa.displayName = Pd;
var Ia = "MenuRadioGroup", [Id, Ad] = tt(
  Ia,
  { value: void 0, onValueChange: () => {
  } }
), Aa = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ie(r);
    return /* @__PURE__ */ a(Id, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(mr, { ...o, ref: t }) });
  }
);
Aa.displayName = Ia;
var Oa = "MenuRadioItem", Ta = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Ad(Oa, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(ka, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      fn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": br(i),
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
Ta.displayName = Oa;
var vr = "MenuItemIndicator", [ka, Od] = tt(
  vr,
  { checked: !1 }
), Da = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = Od(vr, n);
    return /* @__PURE__ */ a(
      Xe,
      {
        present: r || Qt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          le.span,
          {
            ...o,
            ref: t,
            "data-state": br(i.checked)
          }
        )
      }
    );
  }
);
Da.displayName = vr;
var Td = "MenuSeparator", La = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      le.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
La.displayName = Td;
var kd = "MenuArrow", Ba = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ a(ra, { ...o, ...r, ref: t });
  }
);
Ba.displayName = kd;
var gr = "MenuSub", [Dd, Fa] = tt(gr), $a = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = qe(gr, t), s = Pt(t), [l, c] = m.useState(null), [f, u] = m.useState(null), d = Ie(o);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ a(cr, { ...s, children: /* @__PURE__ */ a(
    Na,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        Dd,
        {
          scope: t,
          contentId: He(),
          triggerId: He(),
          trigger: l,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
$a.displayName = gr;
var bt = "MenuSubTrigger", za = m.forwardRef(
  (e, t) => {
    const n = qe(bt, e.__scopeMenu), r = It(bt, e.__scopeMenu), o = Fa(bt, e.__scopeMenu), i = pr(bt, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(ur, { asChild: !0, ...f, children: /* @__PURE__ */ a(
      Ma,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Va(n.open),
        ...e,
        ref: tn(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: K(
          e.onPointerMove,
          Nt((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: K(
          e.onPointerLeave,
          Nt((d) => {
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
        onKeyDown: K(e.onKeyDown, (d) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || vd[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
za.displayName = bt;
var ja = "MenuSubContent", Wa = m.forwardRef(
  (e, t) => {
    const n = xa(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = qe(ye, e.__scopeMenu), s = It(ye, e.__scopeMenu), l = Fa(ja, e.__scopeMenu), c = m.useRef(null), f = ue(t, c);
    return /* @__PURE__ */ a(yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Xe, { present: r || i.open, children: /* @__PURE__ */ a(yt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      hr,
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
          const d = u.currentTarget.contains(u.target), p = gd[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Wa.displayName = ja;
function Va(e) {
  return e ? "open" : "closed";
}
function Qt(e) {
  return e === "indeterminate";
}
function br(e) {
  return Qt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ld(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Bd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Fd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Bd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $d(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function zd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $d(n, t);
}
function Nt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var jd = Ca, Wd = ur, Vd = Sa, Hd = Ra, Ud = mr, Gd = Ea, Kd = fn, Yd = Pa, Xd = Aa, qd = Ta, Zd = Da, Qd = La, Jd = Ba, eu = $a, tu = za, nu = Wa, pn = "DropdownMenu", [ru] = Ye(
  pn,
  [wa]
), ve = wa(), [ou, Ha] = ru(pn), Ua = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = ve(t), f = m.useRef(null), [u, d] = et({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: pn
  });
  return /* @__PURE__ */ a(
    ou,
    {
      scope: t,
      triggerId: He(),
      triggerRef: f,
      contentId: He(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ a(jd, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Ua.displayName = pn;
var Ga = "DropdownMenuTrigger", Ka = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Ha(Ga, n), s = ve(n);
    return /* @__PURE__ */ a(Wd, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      le.button,
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
        ref: tn(t, i.triggerRef),
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
Ka.displayName = Ga;
var au = "DropdownMenuPortal", Ya = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ve(t);
  return /* @__PURE__ */ a(Vd, { ...r, ...n });
};
Ya.displayName = au;
var Xa = "DropdownMenuContent", qa = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ha(Xa, n), i = ve(n), s = m.useRef(!1);
    return /* @__PURE__ */ a(
      Hd,
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
qa.displayName = Xa;
var iu = "DropdownMenuGroup", Za = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
    return /* @__PURE__ */ a(Ud, { ...o, ...r, ref: t });
  }
);
Za.displayName = iu;
var su = "DropdownMenuLabel", Qa = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
    return /* @__PURE__ */ a(Gd, { ...o, ...r, ref: t });
  }
);
Qa.displayName = su;
var lu = "DropdownMenuItem", Ja = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
    return /* @__PURE__ */ a(Kd, { ...o, ...r, ref: t });
  }
);
Ja.displayName = lu;
var cu = "DropdownMenuCheckboxItem", ei = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(Yd, { ...o, ...r, ref: t });
});
ei.displayName = cu;
var du = "DropdownMenuRadioGroup", ti = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(Xd, { ...o, ...r, ref: t });
});
ti.displayName = du;
var uu = "DropdownMenuRadioItem", ni = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(qd, { ...o, ...r, ref: t });
});
ni.displayName = uu;
var fu = "DropdownMenuItemIndicator", ri = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(Zd, { ...o, ...r, ref: t });
});
ri.displayName = fu;
var pu = "DropdownMenuSeparator", oi = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(Qd, { ...o, ...r, ref: t });
});
oi.displayName = pu;
var hu = "DropdownMenuArrow", mu = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
    return /* @__PURE__ */ a(Jd, { ...o, ...r, ref: t });
  }
);
mu.displayName = hu;
var vu = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = ve(t), [l, c] = et({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a(eu, { ...s, open: l, onOpenChange: c, children: n });
}, gu = "DropdownMenuSubTrigger", ai = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(tu, { ...o, ...r, ref: t });
});
ai.displayName = gu;
var bu = "DropdownMenuSubContent", ii = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ve(n);
  return /* @__PURE__ */ a(
    nu,
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
ii.displayName = bu;
var si = Ua, li = Ka, _r = Ya, ci = qa, _u = Za, wu = Qa, di = Ja, yu = ei, Nu = ti, Cu = ni, ui = ri, xu = oi, Su = vu, Ru = ai, Eu = ii;
const fi = R.forwardRef(
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
), Ae = si, Oe = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    li,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Te = R.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: o, ...i }, s) {
  return /* @__PURE__ */ a(_r, { container: o, children: /* @__PURE__ */ a(
    ci,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), pi = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    wu,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Mu = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(_u, { ref: n, ...t });
}), ie = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    di,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), $p = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    yu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ui, { children: /* @__PURE__ */ a(Fe, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), zp = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ a(Nu, { ref: n, ...t });
}), jp = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    Cu,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ a(ui, { children: /* @__PURE__ */ a(Fe, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), dt = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(xu, { asChild: !0, ...n, children: /* @__PURE__ */ a(
    fi,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" ")
    }
  ) });
}), Wp = Su, Vp = R.forwardRef(function({ className: t, children: n, ...r }, o) {
  return /* @__PURE__ */ w(
    Ru,
    {
      ref: o,
      className: ["flyout-menu-item", "flyout-menu-sub-trigger", t].filter(Boolean).join(" "),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a(lt, { size: 16, className: "flyout-menu-sub-trigger__chevron", "aria-hidden": !0 })
      ]
    }
  );
}), Hp = R.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...o }, i) {
  return /* @__PURE__ */ a(_r, { container: r, children: /* @__PURE__ */ a(
    Eu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...o
    }
  ) });
}), Up = R.forwardRef(
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
function Xr({ type: e }) {
  return /* @__PURE__ */ a("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ a(lt, { size: 16 }) : /* @__PURE__ */ a("span", { children: "/" }) });
}
function Pu({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(Ae, { children: [
    /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        children: /* @__PURE__ */ a(Je, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ a(Te, { sideOffset: 4, align: "start", children: e.map((n, r) => /* @__PURE__ */ a(
      ie,
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
function Iu({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(Ae, { children: [
    /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ w(
      "button",
      {
        className: "breadcrumbs__menu-trigger",
        "aria-haspopup": "menu",
        title: e.label,
        children: [
          /* @__PURE__ */ a("span", { className: "breadcrumbs__label", children: e.label }),
          /* @__PURE__ */ a(lt, { size: 12, className: "breadcrumbs__menu-chevron" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(Te, { sideOffset: 4, align: "start", children: e.menu.map((n, r) => /* @__PURE__ */ a(
      ie,
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
function Au({
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
    return /* @__PURE__ */ a(Iu, { item: e, onNavigate: t });
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
function Ou({
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
      /* @__PURE__ */ a(Xr, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(Pu, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ a(Xr, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ a("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a(Au, { item: f, onNavigate: r }) }, u)
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
function Tu() {
  return /* @__PURE__ */ a("span", { className: "button__spinner", "aria-hidden": "true" });
}
const me = R.forwardRef(
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
          (s || o) && (s ? /* @__PURE__ */ a(Tu, {}) : o),
          c,
          !s && i
        ]
      }
    );
  }
), ge = R.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ a(me, { ref: r, iconStart: t, ...n });
  }
), ku = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function Du(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function Lu(e) {
  return e === "primary" ? "primary" : "neutral";
}
function qr({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = Du(e.type), o = Lu(e.type);
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
    me,
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
function Bu({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ w(Ae, { children: [
    /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
      ge,
      {
        icon: /* @__PURE__ */ a(ao, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ a(
      Te,
      {
        sideOffset: 4,
        align: t === "right" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ w(
          ie,
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
function Fu({
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
  })(), l = e[s], c = e.filter((N, y) => y !== s), f = ku[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const h = d.length > 0 ? /* @__PURE__ */ a(
    Bu,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, v = (r === "left" ? [...u].reverse() : u).map((N) => /* @__PURE__ */ a(qr, { action: N, iconOnly: n }, N.id)), g = /* @__PURE__ */ a(qr, { action: l, iconOnly: n }, l.id), _ = r === "right" ? [h, ...v, g] : [g, ...v, h];
  return /* @__PURE__ */ a(
    "div",
    {
      role: "toolbar",
      "aria-label": "Page actions",
      className: ["buttons-toolbar", o].filter(Boolean).join(" "),
      "data-variant": t,
      "data-alignment": r,
      style: i,
      children: _
    }
  );
}
function $u() {
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
function zu() {
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
const Gp = R.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: o, id: i, className: s, ...l }, c) {
    const f = oe(), u = i ?? f, d = se(null);
    return Wn(c, () => d.current), fe(() => {
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
              /* @__PURE__ */ a($u, {}),
              /* @__PURE__ */ a(zu, {})
            ] })
          ] }),
          t && /* @__PURE__ */ a("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), Kp = R.forwardRef(
  function({ legend: t, required: n, hint: r, validation: o, validationMessage: i, children: s, className: l }, c) {
    const f = oe(), u = oe();
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
), Ct = R.forwardRef(
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
), ju = { small: 12, medium: 16 }, zt = R.forwardRef(
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
    const [h, b] = J(c), v = l !== void 0, g = v ? l : h, _ = ju[i];
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
              Fe,
              {
                className: "chip__check",
                size: _,
                "aria-hidden": "true"
              }
            ),
            r && /* @__PURE__ */ a("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
            /* @__PURE__ */ a("span", { className: "chip__label", children: t }),
            o !== void 0 && /* @__PURE__ */ a(
              Ct,
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
          o !== void 0 && /* @__PURE__ */ a(
            Ct,
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
              children: /* @__PURE__ */ a(ke, { size: _, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function Yp({
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
function Wu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function Vu(e) {
  return e.flatMap((t) => t.items);
}
const Xp = R.forwardRef(
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
    } = t, g = t.selection === "multi", _ = g ? t.chipPlacement ?? "below" : "inline", N = oe(), y = b ?? `combobox-${N}`, C = `${y}-listbox`, E = `${y}-hint`, M = `${y}-message`, x = se(null), I = se(null), k = se(null), T = se([]), [S, P] = J(0);
    fe(() => {
      n && (typeof n == "function" ? n(I.current) : n.current = I.current);
    }, [n]);
    const [F, V] = J(!1), [Y, z] = J(""), [j, B] = J(-1), D = t.value !== void 0, [Z, ee] = J(() => {
      if (g) return t.value ?? [];
      const A = t.value;
      return A ? [A] : [];
    }), U = D ? g ? t.value ?? [] : t.value ? [t.value] : [] : Z, $ = at(
      () => U.map((A) => r.find((te) => te.value === A)).filter(Boolean),
      [U, r]
    ), Q = at(() => {
      const A = Y.toLowerCase().trim(), te = A ? r.filter((ae) => ae.label.toLowerCase().includes(A)) : r;
      return Wu(te);
    }, [r, Y]), O = at(() => Vu(Q), [Q]), H = at(
      () => r.filter((A) => !A.disabled).map((A) => A.value),
      [r]
    ), G = at(
      () => H.length > 0 && H.every((A) => U.includes(A)),
      [H, U]
    ), ne = de(
      (A) => U.includes(A),
      [U]
    ), X = de(
      (A) => {
        var te, ae;
        D || ee(A), g ? (te = t.onChange) == null || te.call(t, A) : (ae = t.onChange) == null || ae.call(t, A[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [D, g]
    ), ce = de(
      (A) => {
        var te;
        if (!A.disabled)
          if (g) {
            const ae = ne(A.value) ? U.filter((Be) => Be !== A.value) : [...U, A.value];
            X(ae), z(""), (te = I.current) == null || te.focus();
          } else
            X([A.value]), z(""), V(!1), B(-1);
      },
      [g, ne, U, X]
    ), pe = de(
      (A) => {
        X(U.filter((te) => te !== A));
      },
      [U, X]
    ), L = de(() => {
      const A = k.current;
      if (!A) return;
      const te = T.current;
      if (te.length === 0) {
        P(0);
        return;
      }
      const ae = A.clientWidth, Be = 8;
      if (te.reduce((gt, Tt, Li) => gt + Tt + (Li > 0 ? Be : 0), 0) <= ae) {
        P(0);
        return;
      }
      let Ot = ae - 72 - Be, vn = 0;
      for (let gt = te.length - 1; gt >= 0; gt--) {
        const Tt = te[gt] + (vn > 0 ? Be : 0);
        if (Ot >= Tt)
          Ot -= Tt, vn++;
        else break;
      }
      P(te.length - vn);
    }, []);
    Jt(() => {
      if (_ !== "inline" || !k.current) {
        P(0);
        return;
      }
      const A = Array.from(
        k.current.querySelectorAll("[data-chip-ghost]")
      );
      T.current = A.map((te) => te.getBoundingClientRect().width), L();
    }, [$, _, L]), fe(() => {
      if (_ !== "inline" || !k.current) return;
      const A = new ResizeObserver(L);
      return A.observe(k.current), () => A.disconnect();
    }, [_, L]);
    const W = () => {
      d || (V(!0), B(-1));
    }, q = () => {
      V(!1), z(""), B(-1);
    };
    fe(() => {
      if (!F) return;
      const A = (te) => {
        var ae;
        (ae = x.current) != null && ae.contains(te.target) || q();
      };
      return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
    }, [F]);
    const Ne = !g && !F && $.length > 0 ? $[0].label : Y, re = (A) => {
      switch (A.key) {
        case "ArrowDown": {
          if (A.preventDefault(), !F) {
            W();
            return;
          }
          B((te) => Math.min(te + 1, O.length - 1));
          break;
        }
        case "ArrowUp": {
          A.preventDefault(), B((te) => Math.max(te - 1, 0));
          break;
        }
        case "Enter": {
          if (A.preventDefault(), !F) {
            W();
            return;
          }
          j >= 0 && O[j] && ce(O[j]);
          break;
        }
        case "Escape": {
          A.preventDefault(), q();
          break;
        }
        case "Backspace": {
          g && Y === "" && U.length > 0 && pe(U[U.length - 1]);
          break;
        }
      }
    };
    fe(() => {
      B(-1);
    }, [Y]);
    const he = se(null);
    fe(() => {
      if (j < 0 || !he.current) return;
      const A = he.current.querySelector(`[data-index="${j}"]`);
      A == null || A.scrollIntoView({ block: "nearest" });
    }, [j]);
    const Le = j >= 0 && O[j] ? `${C}-${O[j].value}` : void 0, Re = [
      s ? E : null,
      c ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: x,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": F || void 0,
        "data-disabled": d || void 0,
        children: [
          o && /* @__PURE__ */ w("label", { className: "combobox__label", htmlFor: y, children: [
            o,
            p && /* @__PURE__ */ a("span", { className: "combobox__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ w("div", { className: g && _ === "inline" ? "combobox__field-row" : void 0, children: [
            /* @__PURE__ */ w("div", { className: "combobox__field-wrap", children: [
              /* @__PURE__ */ w(
                "div",
                {
                  className: "combobox__field",
                  onClick: () => {
                    var A;
                    F || W(), (A = I.current) == null || A.focus();
                  },
                  children: [
                    !g && $.length > 0 && $[0].icon && /* @__PURE__ */ a("span", { className: "combobox__field-leading", "aria-hidden": "true", children: $[0].icon }),
                    /* @__PURE__ */ a(
                      "input",
                      {
                        ref: I,
                        id: y,
                        type: "text",
                        role: "combobox",
                        className: "combobox__input",
                        value: Ne,
                        placeholder: g && $.length > 0 ? "" : i,
                        disabled: d,
                        required: p,
                        "aria-expanded": F,
                        "aria-controls": F ? C : void 0,
                        "aria-activedescendant": Le,
                        "aria-autocomplete": "list",
                        "aria-describedby": Re,
                        "aria-required": p,
                        autoComplete: "off",
                        onChange: (A) => {
                          z(A.target.value), F || W(), !g && A.target.value === "" && U.length > 0 && X([]);
                        },
                        onFocus: W,
                        onKeyDown: re
                      }
                    ),
                    /* @__PURE__ */ a(
                      St,
                      {
                        className: "combobox__chevron",
                        size: 16,
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              F && /* @__PURE__ */ w("div", { className: "combobox__panel", children: [
                /* @__PURE__ */ a(
                  "ul",
                  {
                    ref: he,
                    id: C,
                    role: "listbox",
                    className: "combobox__listbox",
                    "aria-label": o,
                    "aria-multiselectable": g || void 0,
                    children: O.length === 0 ? /* @__PURE__ */ a("li", { className: "combobox__no-results", role: "presentation", children: h }) : Q.map((A, te) => /* @__PURE__ */ w(R.Fragment, { children: [
                      A.name && /* @__PURE__ */ a("li", { role: "presentation", className: "combobox__group-header", children: A.name }),
                      te > 0 && !A.name && /* @__PURE__ */ a("li", { role: "separator", className: "combobox__group-divider" }),
                      A.items.map((ae) => {
                        const Be = O.indexOf(ae), vt = ne(ae.value), Nr = Be === j;
                        return /* @__PURE__ */ w(
                          "li",
                          {
                            id: `${C}-${ae.value}`,
                            role: "option",
                            "aria-selected": vt,
                            "aria-disabled": ae.disabled || void 0,
                            className: "combobox__option",
                            "data-index": Be,
                            "data-active": Nr || void 0,
                            "data-selected": vt || void 0,
                            "data-disabled": ae.disabled || void 0,
                            onMouseDown: (Ot) => {
                              Ot.preventDefault(), ce(ae);
                            },
                            onMouseEnter: () => B(Be),
                            children: [
                              !g && /* @__PURE__ */ a(
                                Fe,
                                {
                                  className: "combobox__option-selected-icon",
                                  size: 16,
                                  "aria-hidden": "true",
                                  style: { visibility: vt ? "visible" : "hidden" }
                                }
                              ),
                              g && /* @__PURE__ */ a("span", { className: "combobox__option-check", "aria-hidden": "true", children: vt && /* @__PURE__ */ a(Fe, { size: 12 }) }),
                              ae.icon && /* @__PURE__ */ a("span", { className: "combobox__option-icon", "aria-hidden": "true", children: ae.icon }),
                              /* @__PURE__ */ w("span", { className: "combobox__option-content", children: [
                                /* @__PURE__ */ a("span", { className: "combobox__option-label", children: ae.label }),
                                ae.description && /* @__PURE__ */ a("span", { className: "combobox__option-description", children: ae.description })
                              ] })
                            ]
                          },
                          ae.value
                        );
                      })
                    ] }, A.name ?? `__group-${te}`))
                  }
                ),
                g && /* @__PURE__ */ w("div", { className: "combobox__footer", children: [
                  /* @__PURE__ */ a(
                    me,
                    {
                      variant: "outline",
                      color: "neutral",
                      size: "small",
                      disabled: U.length === 0,
                      onMouseDown: (A) => {
                        A.preventDefault(), X([]);
                      },
                      children: "Clear"
                    }
                  ),
                  /* @__PURE__ */ a(
                    me,
                    {
                      variant: "fill",
                      color: "primary",
                      size: "small",
                      disabled: G,
                      onMouseDown: (A) => {
                        A.preventDefault(), X(H);
                      },
                      children: "Select all"
                    }
                  )
                ] })
              ] })
            ] }),
            g && _ === "inline" && $.length > 0 && /* @__PURE__ */ w("div", { ref: k, className: "combobox__chips combobox__chips--inline", children: [
              $.map((A) => /* @__PURE__ */ a("span", { "data-chip-ghost": !0, "aria-hidden": "true", className: "combobox__chip-ghost", children: /* @__PURE__ */ a(zt, { variant: "removable", label: A.label, size: "small" }) }, `ghost-${A.value}`)),
              S > 0 && /* @__PURE__ */ a(
                zt,
                {
                  variant: "removable",
                  label: `+${S}`,
                  size: "small",
                  onRemove: d ? void 0 : () => {
                    const A = $.slice(0, S).map((te) => te.value);
                    X(U.filter((te) => !A.includes(te)));
                  }
                }
              ),
              $.slice(S).map((A) => /* @__PURE__ */ a(
                zt,
                {
                  variant: "removable",
                  label: A.label,
                  size: "small",
                  onRemove: d ? void 0 : () => pe(A.value)
                },
                A.value
              ))
            ] })
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
          ),
          g && _ === "below" && $.length > 0 && /* @__PURE__ */ a("div", { className: "combobox__chips", children: $.map((A) => /* @__PURE__ */ a(
            zt,
            {
              variant: "removable",
              label: A.label,
              size: "small",
              onRemove: d ? void 0 : () => pe(A.value)
            },
            A.value
          )) })
        ]
      }
    );
  }
);
function Hu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? "";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function Uu(e) {
  return Array.from(e.values()).flat();
}
function qp({
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
  const v = oe(), g = p ?? v, _ = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, E = n !== void 0, [M, x] = J(r ?? ""), I = E ? n ?? "" : M, [k, T] = J(!1), [S, P] = J(-1), F = se(null), V = se(null), Y = se(null), z = Hu(o), j = Uu(z), B = (L) => `${g}-option-${L}`, D = (L) => {
    for (let W = L + 1; W < j.length; W++)
      if (!j[W].disabled) return W;
    return L;
  }, Z = (L) => {
    for (let W = L - 1; W >= 0; W--)
      if (!j[W].disabled) return W;
    return L;
  }, ee = () => j.findIndex((L) => !L.disabled), U = () => {
    for (let L = j.length - 1; L >= 0; L--)
      if (!j[L].disabled) return L;
    return -1;
  };
  fe(() => {
    if (!k) return;
    const L = (W) => {
      var q;
      (q = Y.current) != null && q.contains(W.target) || (T(!1), P(-1));
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [k]), fe(() => {
    if (S < 0 || !V.current) return;
    const L = V.current.querySelector(`#${CSS.escape(B(S))}`);
    L == null || L.scrollIntoView({ block: "nearest" });
  }, [S]);
  const $ = (L) => {
    var W;
    L.disabled || (E || x(L.value), i == null || i(L.value), T(!1), P(-1), (W = F.current) == null || W.focus());
  }, Q = (L) => {
    const W = L !== void 0 ? L : I ? j.findIndex((q) => q.value === I) : ee();
    P(W >= 0 ? W : ee()), T(!0);
  }, O = (L) => {
    switch (L.key) {
      case "Enter":
      case " ":
        L.preventDefault(), k ? S >= 0 && $(j[S]) : Q();
        break;
      case "ArrowDown":
        L.preventDefault(), k ? P((W) => D(W < 0 ? -1 : W)) : Q(ee());
        break;
      case "ArrowUp":
        L.preventDefault(), k ? P((W) => Z(W < 0 ? j.length : W)) : Q(U());
        break;
      case "Home":
        L.preventDefault(), k && P(ee());
        break;
      case "End":
        L.preventDefault(), k && P(U());
        break;
      case "Escape":
        L.preventDefault(), T(!1), P(-1);
        break;
      case "Tab":
        T(!1), P(-1);
        break;
    }
  }, H = j.find((L) => L.value === I), G = c === "small" ? 14 : c === "large" ? 18 : 16, ne = S >= 0 && k ? B(S) : void 0, X = [];
  let ce = 0;
  for (const [L, W] of z.entries())
    X.push({
      groupName: L,
      items: W.map((q) => ({ option: q, idx: ce++ }))
    });
  const pe = X.some((L) => L.groupName !== "");
  return /* @__PURE__ */ w(
    "div",
    {
      ref: Y,
      className: ["dropdown", h].filter(Boolean).join(" "),
      "data-size": c,
      "data-open": k || void 0,
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
            ref: F,
            id: g,
            type: "button",
            className: "dropdown__trigger",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": k,
            "aria-controls": N,
            "aria-labelledby": b ? void 0 : _,
            "aria-label": b,
            "aria-activedescendant": ne,
            "aria-describedby": [y, C].filter(Boolean).join(" ") || void 0,
            "aria-required": l || void 0,
            "aria-invalid": f === "negative" || void 0,
            disabled: s,
            onClick: () => {
              k ? (T(!1), P(-1)) : Q();
            },
            onKeyDown: O,
            children: [
              /* @__PURE__ */ a("span", { className: H ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: H ? H.label : t }),
              /* @__PURE__ */ a(St, { size: G, className: "dropdown__chevron", "aria-hidden": "true" })
            ]
          }
        ),
        k && /* @__PURE__ */ a(
          "ul",
          {
            ref: V,
            id: N,
            role: "listbox",
            className: "dropdown__listbox",
            "aria-label": b ?? e,
            children: X.map((L, W) => /* @__PURE__ */ w(R.Fragment, { children: [
              pe && W > 0 && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
              L.groupName && /* @__PURE__ */ a("li", { role: "presentation", className: "dropdown__group-header", children: L.groupName }),
              L.items.map(({ option: q, idx: Ne }) => {
                const re = q.value === I, he = S === Ne;
                return /* @__PURE__ */ w(
                  "li",
                  {
                    id: B(Ne),
                    role: "option",
                    className: "dropdown__option",
                    "aria-selected": re,
                    "aria-disabled": q.disabled || void 0,
                    "data-selected": re || void 0,
                    "data-active": he || void 0,
                    "data-disabled": q.disabled || void 0,
                    onMouseDown: (Le) => Le.preventDefault(),
                    onMouseEnter: () => !q.disabled && P(Ne),
                    onClick: () => $(q),
                    children: [
                      /* @__PURE__ */ a("span", { className: "dropdown__option-check", "aria-hidden": "true", children: re && /* @__PURE__ */ a(Fe, { size: 12, strokeWidth: 2.5 }) }),
                      q.icon && /* @__PURE__ */ a("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: q.icon }),
                      /* @__PURE__ */ w("span", { className: "dropdown__option-content", children: [
                        /* @__PURE__ */ a("span", { className: "dropdown__option-label", children: q.label }),
                        q.description && /* @__PURE__ */ a("span", { className: "dropdown__option-description", children: q.description })
                      ] })
                    ]
                  },
                  q.value
                );
              })
            ] }, L.groupName || "__ungrouped"))
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
function Zp({
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
                children: /* @__PURE__ */ a(Fi, { size: 14, "aria-hidden": "true" })
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
function Gu() {
  return Math.random().toString(36).slice(2, 9);
}
function Bn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Ku(e, t, n) {
  var r;
  if (t) {
    const o = t.split(",").map((c) => c.trim().toLowerCase()), i = "." + ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()), s = e.type.toLowerCase();
    if (!o.some((c) => c.endsWith("/*") ? s.startsWith(c.slice(0, -1)) : c.startsWith(".") ? i === c : s === c)) {
      const c = o.filter((f) => f.startsWith(".")).map((f) => f.slice(1).toUpperCase()).join(", ");
      return c ? `Invalid file type. Accepted: ${c}` : "Invalid file type";
    }
  }
  return n && e.size > n ? `File exceeds ${Bn(n)} limit` : null;
}
function Yu({ file: e, size: t = 16 }) {
  var o;
  const n = e.type.toLowerCase(), r = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ a(Wi, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ a(Mn, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ a(Mn, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ a(Vi, { size: t }) : /* @__PURE__ */ a(Hi, { size: t });
}
function Qp({
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
  const _ = oe(), N = v ?? _, y = `${N}-input`, C = e ? `${N}-label` : void 0, E = `${N}-live`, M = se(null), [x, I] = J([]), [k, T] = J(!1), [S, P] = J(""), F = de((O) => {
    if (u) return;
    const G = Array.from(O).map((L) => {
      const W = Ku(L, l, c);
      return { id: Gu(), file: L, status: W ? "error" : "added", errorMessage: W ?? void 0 };
    });
    I((L) => d ? [...L, ...G] : G);
    const ne = G.filter((L) => L.status === "added").map((L) => L.file);
    ne.length > 0 && (p == null || p(ne));
    const X = G.filter((L) => L.status === "added").length, ce = G.filter((L) => L.status === "error").length, pe = [];
    X && pe.push(`${X} file${X > 1 ? "s" : ""} added`), ce && pe.push(`${ce} file${ce > 1 ? "s" : ""} failed validation`), P(pe.join(". ")), M.current && (M.current.value = "");
  }, [u, l, c, d, p]), V = de((O) => {
    I((H) => {
      const G = H.find((ne) => ne.id === O);
      return G && P(`${G.file.name} removed`), H.filter((ne) => ne.id !== O);
    }), b == null || b(O);
  }, [b]), Y = de(async () => {
    if (!h) return;
    const O = x.filter((H) => H.status === "added" || H.status === "error");
    if (O.length) {
      I((H) => H.map(
        (G) => O.find((ne) => ne.id === G.id) ? { ...G, status: "uploading", errorMessage: void 0 } : G
      )), P("Uploading files…");
      try {
        await h(O.map((H) => H.file)), I((H) => H.map(
          (G) => O.find((ne) => ne.id === G.id) ? { ...G, status: "uploaded" } : G
        )), P(`${O.length} file${O.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (H) {
        const G = H instanceof Error ? H.message : "Upload failed";
        I((ne) => ne.map(
          (X) => O.find((ce) => ce.id === X.id) ? { ...X, status: "error", errorMessage: G } : X
        )), P(`Upload failed: ${G}`);
      }
    }
  }, [x, h]), z = (O) => {
    O.preventDefault(), u || T(!0);
  }, j = (O) => {
    O.currentTarget.contains(O.relatedTarget) || T(!1);
  }, B = (O) => {
    O.preventDefault(), T(!1), !u && F(O.dataTransfer.files);
  }, D = (O) => {
    var H;
    (H = O.target.files) != null && H.length && F(O.target.files);
  }, Z = () => {
    var O;
    u || (O = M.current) == null || O.click();
  }, ee = x.length > 0, U = x.some((O) => O.status === "added"), $ = x.some((O) => O.status === "uploading"), Q = [
    f,
    c ? `Max ${Bn(c)}` : null
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
            id: E,
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
              "data-dragging": k || void 0,
              "aria-labelledby": C,
              "aria-label": e ? void 0 : o ?? "File upload area",
              "aria-disabled": u || void 0,
              onDragOver: z,
              onDragLeave: j,
              onDrop: B,
              onClick: Z,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (O) => {
                (O.key === "Enter" || O.key === " ") && (O.preventDefault(), Z());
              },
              children: [
                /* @__PURE__ */ a($i, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ a("span", { className: "file-uploader__zone-text", children: "Drag & drop files here" }),
                /* @__PURE__ */ w("span", { className: "file-uploader__zone-browse", children: [
                  "or",
                  " ",
                  /* @__PURE__ */ a("span", { className: "file-uploader__browse-link", children: "browse files" })
                ] }),
                Q && /* @__PURE__ */ a("span", { className: "file-uploader__zone-hint", children: Q })
              ]
            }
          ),
          ee && /* @__PURE__ */ a("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: x.map((O) => /* @__PURE__ */ w(
            "li",
            {
              className: "file-uploader__item",
              "data-status": O.status,
              children: [
                /* @__PURE__ */ a("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Yu, { file: O.file, size: 16 }) }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ a("span", { className: "file-uploader__item-name", title: O.file.name, children: O.file.name }),
                  /* @__PURE__ */ w("span", { className: "file-uploader__item-meta", children: [
                    Bn(O.file.size),
                    O.errorMessage && /* @__PURE__ */ w("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      O.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  O.status === "uploading" && /* @__PURE__ */ a(zi, { size: 16, className: "file-uploader__spin" }),
                  O.status === "uploaded" && /* @__PURE__ */ a(Fe, { size: 16 }),
                  O.status === "error" && /* @__PURE__ */ a(pt, { size: 16 })
                ] }),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${O.file.name}`,
                    disabled: O.status === "uploading",
                    onClick: () => V(O.id),
                    children: /* @__PURE__ */ a(ke, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            O.id
          )) })
        ] }),
        s && h && ee && /* @__PURE__ */ a("div", { className: "file-uploader__actions", children: /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !U || $ || u,
            onClick: Y,
            children: [
              /* @__PURE__ */ a(ji, { size: 14, "aria-hidden": "true" }),
              $ ? "Uploading…" : "Upload files"
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
            onChange: D
          }
        )
      ]
    }
  );
}
const Xu = {
  s: { svgSize: 16, strokeWidth: 2, r: 6, cx: 8, cy: 8 },
  m: { svgSize: 32, strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l: { svgSize: 64, strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 }
};
function jt({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": o,
  className: i
}) {
  const s = R.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = Xu[e], p = 2 * Math.PI * f, h = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
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
function qu(e) {
  var r;
  const t = e.type.toLowerCase(), n = ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "";
  return t.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"].includes(n) ? "image" : t === "application/pdf" || n === "pdf" ? "pdf" : t === "text/plain" || n === "txt" ? "text" : t === "text/csv" || n === "csv" ? "csv" : "unsupported";
}
function Zu(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Qu(e) {
  return e.trim().split(`
`).map(
    (t) => t.split(",").map((n) => n.trim().replace(/^"(.*)"$/, "$1"))
  );
}
const Zr = 50, Qr = 200, Jr = 25;
function Jp({
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
  const v = oe(), g = qu(e), [_, N] = J(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = J(100), [E, M] = J(0), [x, I] = J(1), [k, T] = J(null), [S, P] = J(null), [F, V] = J("");
  fe(() => {
    C(100), M(0), I(1), T(null), P(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), fe(() => {
    if (g !== "text" && g !== "csv") return;
    let re = !1;
    return fetch(e.url).then((he) => {
      if (!he.ok) throw new Error(`HTTP ${he.status}`);
      return he.text();
    }).then((he) => {
      re || (g === "text" ? T(he) : P(Qu(he)), N("loaded"));
    }).catch(() => {
      re || N("error");
    }), () => {
      re = !0;
    };
  }, [e.url, g]);
  const Y = () => {
    N("loaded"), V("File loaded");
  }, z = () => {
    N("error"), V("File failed to load");
  }, j = () => N("loaded"), B = de(() => C((re) => Math.min(re + Jr, Qr)), []), D = de(() => C((re) => Math.max(re - Jr, Zr)), []), Z = de(() => M((re) => (re + 90) % 360), []), ee = de(() => {
    C(100), M(0);
  }, []), U = (t == null ? void 0 : t.length) ?? 0, $ = U > 1 && n > 0, Q = U > 1 && n < U - 1, O = () => p == null ? void 0 : p(n - 1), H = () => p == null ? void 0 : p(n + 1), G = e.pageCount ?? 0, ne = G > 1 && x > 1, X = G > 1 && x < G, ce = () => {
    if (u)
      u(e);
    else {
      const re = document.createElement("a");
      re.href = e.url, re.download = e.name, re.click();
    }
  }, pe = `scale(${y / 100}) rotate(${E}deg)`, L = () => {
    if (_ === "error")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(qi, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (_ === "unsupported")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ a(so, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ w("button", { type: "button", className: "file-viewer__empty-action", onClick: ce, children: [
          /* @__PURE__ */ a(Cr, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ w("div", { className: "file-viewer__img-wrap", children: [
        _ === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(jt, { size: "m" }) }),
        /* @__PURE__ */ a(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": _ === "loaded" || void 0,
            style: { transform: pe },
            onLoad: Y,
            onError: z
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ w("div", { className: "file-viewer__pdf-wrap", children: [
        _ === "loading" && /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(jt, { size: "m" }) }),
        /* @__PURE__ */ a(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": _ === "loaded" || void 0,
            onLoad: j
          }
        )
      ] });
    if (g === "text")
      return _ === "loading" ? /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(jt, { size: "m" }) }) : /* @__PURE__ */ w("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ w("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ a(Mn, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ a("pre", { className: "file-viewer__text", children: k })
      ] });
    if (g === "csv") {
      if (_ === "loading")
        return /* @__PURE__ */ a("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ a(jt, { size: "m" }) });
      if (!(S != null && S.length))
        return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ a(Zi, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ a("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [re, ...he] = S;
      return /* @__PURE__ */ a("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ w("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: re.map((Le, Re) => /* @__PURE__ */ a("th", { className: "file-viewer__th", children: Le }, Re)) }) }),
        /* @__PURE__ */ a("tbody", { children: he.map((Le, Re) => /* @__PURE__ */ a("tr", { className: "file-viewer__tr", children: Le.map((A, te) => /* @__PURE__ */ a("td", { className: "file-viewer__td", children: A }, te)) }, Re)) })
      ] }) });
    }
    return null;
  }, W = g === "image", q = W && l, Ne = W && c;
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
            children: F
          }
        ),
        r && /* @__PURE__ */ w("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ a("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ w("div", { className: "file-viewer__header-actions", children: [
            q && /* @__PURE__ */ w("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Ui, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= Zr,
                  onClick: D
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Gi, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= Qr,
                  onClick: B
                }
              )
            ] }),
            Ne && /* @__PURE__ */ a(
              ge,
              {
                icon: /* @__PURE__ */ a(Ki, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: Z
              }
            ),
            s && d && /* @__PURE__ */ a(
              ge,
              {
                icon: /* @__PURE__ */ a(Yi, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ w(Ae, { children: [
              /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(Je, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ w(Te, { align: "end", children: [
                i && /* @__PURE__ */ w(ie, { onSelect: ce, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Cr, { size: 14 }) }),
                  "Download"
                ] }),
                W && /* @__PURE__ */ w(ie, { onSelect: ee, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Xi, { size: 14 }) }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ w(ie, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(io, { size: 14 }) }),
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
            children: L()
          }
        ),
        o && /* @__PURE__ */ w("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ w("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: Zu(e.size) }),
            e.uploadDate && /* @__PURE__ */ a("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ w("div", { className: "file-viewer__footer-nav", children: [
            G > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(_t, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !ne,
                  onClick: () => I((re) => re - 1)
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                x,
                " / ",
                G
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(lt, { size: 14 }),
                  "aria-label": "Next page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !X,
                  onClick: () => I((re) => re + 1)
                }
              )
            ] }),
            U > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(_t, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !$,
                  onClick: O
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                n + 1,
                " / ",
                U,
                " files"
              ] }),
              /* @__PURE__ */ a(
                ge,
                {
                  icon: /* @__PURE__ */ a(lt, { size: 14 }),
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
function eh({ text: e, id: t, children: n, className: r }) {
  return /* @__PURE__ */ a(
    "p",
    {
      id: t,
      className: ["hint", r].filter(Boolean).join(" "),
      children: n ?? e
    }
  );
}
const hi = Vn({ onClose: () => {
}, titleId: "" }), Ju = () => Hn(hi), eo = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function ef(e, t) {
  fe(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(eo);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(eo));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [t, e]);
}
function tf({
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
  const f = oe(), u = se(null), d = se(null), [p, h] = J(e), [b, v] = J(!1);
  if (fe(() => {
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
  }, [e]), fe(() => {
    if (!e) return;
    const _ = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [e, t]), fe(() => {
    if (!e || i) return;
    const _ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = _;
    };
  }, [e, i]), ef(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ w(hi.Provider, { value: { onClose: t, titleId: f }, children: [
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
  return i ? g : Un.createPortal(g, document.body);
}
function th({ title: e, description: t, actions: n, className: r }) {
  const { onClose: o, titleId: i } = Ju();
  return /* @__PURE__ */ w("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ a("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ a("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ w("div", { className: "drawer__header-actions", children: [
      n,
      /* @__PURE__ */ a(
        ge,
        {
          icon: /* @__PURE__ */ a(ke, { size: 18, "aria-hidden": "true" }),
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
function nh({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__tools", t].filter(Boolean).join(" "), children: e });
}
function rh({ children: e, className: t }) {
  return /* @__PURE__ */ a("div", { className: ["drawer__content", t].filter(Boolean).join(" "), children: e });
}
function oh({ title: e, count: t, link: n, divider: r, children: o, className: i }) {
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
function ah({
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
function ih({
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
  const d = s !== void 0, [p, h] = J(l), b = d ? s : p, v = () => {
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
                St,
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
function sh({
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
function lh({
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
function ch({
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
      children: /* @__PURE__ */ a(Je, { size: 14, "aria-hidden": "true" })
    }
  );
}
const dh = R.forwardRef(
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
          f && /* @__PURE__ */ a(io, { "aria-hidden": "true" })
        ]
      }
    );
  }
), nf = R.forwardRef(
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
);
function rf(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const of = R.forwardRef(
  function({ name: t, src: n, size: r = "l", href: o, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, h] = R.useState(!1), b = !!n && !p, v = rf(t, r), g = !!o || !!i, _ = {
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
), uh = R.forwardRef(
  function({ children: t, max: n, overlap: r = !0, size: o = "l", className: i, ...s }, l) {
    const c = R.Children.toArray(t), f = n !== void 0 ? c.slice(0, n) : c, u = n !== void 0 ? Math.max(0, c.length - n) : 0;
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
), af = {
  active: "Active",
  away: "Away",
  busy: "Busy",
  offline: "Offline"
}, fh = R.forwardRef(
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
              "aria-label": af[n]
            }
          )
        ]
      }
    );
  }
), sf = R.forwardRef(
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
), ph = R.forwardRef(
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
), hh = R.forwardRef(
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
), mh = R.forwardRef(
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
), vh = R.forwardRef(
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
), gh = R.forwardRef(
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
), bh = R.forwardRef(
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
), _h = R.forwardRef(
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
), wh = R.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ a(
      fi,
      {
        ref: r,
        orientation: "horizontal",
        variant: "full",
        className: t,
        ...n
      }
    );
  }
), lf = {
  informative: uo,
  positive: co,
  notice: lo,
  negative: Ke
}, cf = {
  informative: "status",
  positive: "status",
  notice: "alert",
  negative: "alert"
}, df = {
  informative: "polite",
  positive: "polite",
  notice: "assertive",
  negative: "assertive"
}, yh = R.forwardRef(
  function({
    variant: t = "informative",
    title: n,
    children: r,
    actions: o,
    onClose: i,
    className: s,
    ...l
  }, c) {
    const f = lf[t];
    return /* @__PURE__ */ w(
      "div",
      {
        ref: c,
        role: cf[t],
        "aria-live": df[t],
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
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(ke, { size: 14, "aria-hidden": "true" }),
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
), mi = R.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function uf() {
  return R.useContext(mi);
}
const ff = R.forwardRef(
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
        var _;
        const g = !v;
        return (_ = u.current) == null || _.call(u, g), g;
      });
    }, []), p = R.Children.toArray(o), h = p.find(
      (v) => R.isValidElement(v) && v.type.displayName === "PanelHeader"
    ), b = p.filter(
      (v) => !R.isValidElement(v) || v.type.displayName !== "PanelHeader"
    );
    return /* @__PURE__ */ a(mi.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ w(
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
ff.displayName = "Panel";
const pf = R.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: o, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = uf();
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
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(
                St,
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
pf.displayName = "PanelHeader";
const hf = R.forwardRef(
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
hf.displayName = "PanelBody";
const mf = R.forwardRef(
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
mf.displayName = "PanelFooter";
const vf = R.forwardRef(
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
    return i ? /* @__PURE__ */ w(we, { children: [
      d,
      /* @__PURE__ */ a("hr", { className: "section__divider" })
    ] }) : d;
  }
);
vf.displayName = "Section";
const vi = R.createContext({
  onClose: () => {
  },
  titleId: ""
});
function gf() {
  return R.useContext(vi);
}
const to = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function bf(e, t) {
  R.useEffect(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(to);
    r == null || r.focus();
    function o(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(to));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [t, e]);
}
let _f = 0;
function wf({ open: e, onClose: t, size: n = "medium", children: r, className: o }) {
  const [i] = R.useState(() => `dialog-title-${++_f}`), s = R.useRef(null), [l, c] = R.useState(e), [f, u] = R.useState(e);
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
  }, [e]), bf(s, e), l ? Un.createPortal(
    /* @__PURE__ */ w(vi.Provider, { value: { onClose: t, titleId: i }, children: [
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
wf.displayName = "Dialog";
const yf = R.forwardRef(
  function({ icon: t, children: n, className: r, ...o }, i) {
    const { onClose: s, titleId: l } = gf();
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
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(ke, { "aria-hidden": "true" }),
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
yf.displayName = "DialogHeader";
const Nf = R.forwardRef(
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
Nf.displayName = "DialogBody";
const Cf = R.forwardRef(
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
Cf.displayName = "DialogFooter";
const gi = R.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function bi() {
  return R.useContext(gi);
}
let xf = 0;
function Sf({
  value: e,
  onValueChange: t,
  size: n = "medium",
  children: r,
  className: o,
  ...i
}) {
  const [s] = R.useState(() => `tabs-${++xf}`);
  return /* @__PURE__ */ a(gi.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ a("div", { className: ["tabs", o].filter(Boolean).join(" "), ...i, children: r }) });
}
Sf.displayName = "Tabs";
function Rf({ variant: e = "loud", padding: t, children: n, className: r, style: o }) {
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
Rf.displayName = "TabList";
function Ef({
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
  const { activeTab: f, onChange: u, size: d, baseId: p } = bi(), h = f === e, b = r || !!i;
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
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Qi, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: h ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ a(
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(ke, { size: 14 }),
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
Ef.displayName = "Tab";
function Mf({ value: e, children: t, className: n, style: r }) {
  const { activeTab: o, baseId: i } = bi();
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
Mf.displayName = "TabPanel";
const _i = R.createContext({ size: "medium" });
function Pf() {
  return R.useContext(_i);
}
function If({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ a(_i.Provider, { value: { size: e }, children: /* @__PURE__ */ a(
    "ul",
    {
      role: "list",
      className: ["list", n].filter(Boolean).join(" "),
      style: r,
      children: t
    }
  ) });
}
If.displayName = "List";
function Af({
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
  const { size: b } = Pf(), v = o ?? b, g = i || !!s || !!l, _ = /* @__PURE__ */ w(we, { children: [
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
Af.displayName = "ListItem";
const Nh = R.forwardRef(
  function({ label: t, labelPosition: n = "after", disabled: r, id: o, className: i, ...s }, l) {
    const c = oe(), f = o ?? c;
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
), wi = R.createContext({
  variant: "ordered",
  interactive: !1
});
function Of({
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
  return /* @__PURE__ */ a(wi.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ a(
    "ol",
    {
      className: ["stepper", r].filter(Boolean).join(" "),
      "data-variant": e,
      ...o,
      children: s
    }
  ) });
}
Of.displayName = "Stepper";
function Tf({
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
  const { variant: p, interactive: h } = R.useContext(wi), b = h && !o && !!l, v = () => n === "checked" ? /* @__PURE__ */ a(Fe, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ a(pt, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ a(Ke, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ a("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ w(we, { children: [
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
Tf.displayName = "StepperStep";
const Ch = R.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: o, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          o,
          /* @__PURE__ */ a("span", { className: "icon-badge__counter", children: /* @__PURE__ */ a(Ct, { count: t, size: "small", color: n, variant: r }) })
        ]
      }
    );
  }
);
function kf(e, t) {
  if (t <= 1) return "full";
  const n = Math.min(t, 5), r = Math.min(t, 3), o = n * 120 + Math.max(n - 1, 0) * 8, i = r * 105 + Math.max(r - 1, 0) * 8;
  return e >= o ? "full" : e >= i ? "compact" : "minimal";
}
function yi(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Df(e) {
  const t = yi(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function xh({
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
  className: b,
  style: v
}) {
  const [g, _] = J("minimal"), N = se(null), y = se(null), C = se(null), E = se(null), M = de(() => {
    var Q, O, H;
    if (!(l != null && l.length)) return;
    let $;
    if (h)
      $ = ((Q = C.current) == null ? void 0 : Q.offsetWidth) ?? 0;
    else {
      const G = ((O = N.current) == null ? void 0 : O.offsetWidth) ?? 0, ne = ((H = y.current) == null ? void 0 : H.scrollWidth) ?? 0;
      $ = G - ne - 24;
    }
    c && E.current && ($ -= E.current.offsetWidth + 17), _(kf($, l.length));
  }, [l, c, h]);
  Jt(() => {
    M();
    const $ = h ? C.current : N.current;
    if (!$) return;
    const Q = new ResizeObserver(M);
    return Q.observe($), () => Q.disconnect();
  }, [M, h]);
  const x = !!(l != null && l.length), I = x || !!c || !!u, k = !!c && x, T = r && o.length >= 2 ? o[o.length - 2] : null, S = l ? Df(l) : [], P = l ? yi(l) : void 0, F = S.length > 0 || ((f == null ? void 0 : f.length) ?? 0) > 0, V = x || ((f == null ? void 0 : f.length) ?? 0) > 0, Y = r && o.length > 0 ? /* @__PURE__ */ a(
    Ou,
    {
      items: o,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, z = n ? /* @__PURE__ */ a("p", { className: "rpl-page-header__date", children: n }) : null, j = /* @__PURE__ */ a(
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
  ), B = /* @__PURE__ */ w("div", { className: "rpl-page-header__heading-row", children: [
    j,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map(($, Q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: $ }, Q)
    )) })
  ] }), D = /* @__PURE__ */ a("div", { className: "rpl-page-header__heading-row", children: j }), Z = t ? /* @__PURE__ */ a("p", { className: "rpl-page-header__description", children: t }) : null, ee = /* @__PURE__ */ w("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
    Y,
    /* @__PURE__ */ w(
      "div",
      {
        ref: N,
        className: [
          "rpl-page-header__main-row",
          h ? "rpl-page-header__main-row--split" : ""
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ w("div", { ref: y, className: "rpl-page-header__title-area", children: [
            z,
            B,
            Z
          ] }),
          I && /* @__PURE__ */ w(
            "div",
            {
              ref: C,
              className: "rpl-page-header__actions",
              children: [
                u && /* @__PURE__ */ a("span", { className: "rpl-page-header__last-update", children: u }),
                (x || !!c) && /* @__PURE__ */ w("div", { className: "rpl-page-header__actions-row", children: [
                  c && /* @__PURE__ */ a(
                    "div",
                    {
                      ref: E,
                      className: "rpl-page-header__secondary-toolbar",
                      children: c
                    }
                  ),
                  k && /* @__PURE__ */ a(
                    "div",
                    {
                      className: "rpl-page-header__toolbar-divider",
                      role: "separator",
                      "aria-hidden": "true"
                    }
                  ),
                  x && /* @__PURE__ */ a(
                    Fu,
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
  ] }), U = /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-layout", "aria-hidden": "true", children: [
    T && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-back", children: T.href ? /* @__PURE__ */ w(
      "a",
      {
        href: T.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? ($) => {
          $.preventDefault(), i(T.href);
        } : void 0,
        children: [
          /* @__PURE__ */ a(_t, { size: 16, "aria-hidden": "true" }),
          T.label
        ]
      }
    ) : /* @__PURE__ */ w("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ a(_t, { size: 16, "aria-hidden": "true" }),
      T.label
    ] }) }),
    z,
    D,
    Z,
    s.length > 0 && /* @__PURE__ */ a("div", { className: "rpl-page-header__mobile-tags", children: s.map(($, Q) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ a("span", { className: "rpl-page-header__tag-item", children: $ }, Q)
    )) }),
    u && /* @__PURE__ */ a("p", { className: "rpl-page-header__last-update", children: u }),
    V && /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-actions", children: [
      F && /* @__PURE__ */ w(Ae, { children: [
        /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
          ge,
          {
            icon: /* @__PURE__ */ a(ao, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ w(Te, { align: "start", sideOffset: 4, children: [
          f && f.length > 0 && /* @__PURE__ */ w(we, { children: [
            f.map(($) => /* @__PURE__ */ w(
              ie,
              {
                disabled: $.disabled,
                onSelect: $.onClick,
                children: [
                  $.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: $.icon }),
                  $.label
                ]
              },
              $.id
            )),
            S.length > 0 && /* @__PURE__ */ a(dt, {})
          ] }),
          S.map(($, Q) => {
            var O;
            return /* @__PURE__ */ w("span", { children: [
              Q > 0 && $.type !== ((O = S[Q - 1]) == null ? void 0 : O.type) && /* @__PURE__ */ a(dt, {}),
              /* @__PURE__ */ w(
                ie,
                {
                  disabled: $.disabled,
                  onSelect: $.onClick,
                  children: [
                    $.icon && /* @__PURE__ */ a("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: $.icon }),
                    $.label
                  ]
                }
              )
            ] }, $.id);
          })
        ] })
      ] }),
      P && /* @__PURE__ */ a(
        me,
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
  return /* @__PURE__ */ w(
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
        ee,
        U
      ]
    }
  );
}
function Sh({
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
  const u = oe(), d = `${u}-label`, p = `${u}-live`, h = Math.min(100, Math.max(0, t)), b = i || o === "success" ? void 0 : `${h}%`, v = i ? { role: "progressbar", "aria-label": e } : {
    role: "progressbar",
    "aria-valuenow": o === "success" ? 100 : h,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-labelledby": d
  }, g = l ? null : o === "success" ? /* @__PURE__ */ a(Fe, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : o === "error" ? /* @__PURE__ */ a(ke, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ a("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${h}%` }), _ = o === "success" ? `${e} complete` : o === "error" ? `${e} failed` : "";
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
function Lf(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Bf(e) {
  return Math.max(3, Math.floor(e * 0.06));
}
function Ff(e, t) {
  return (e - t) / 2;
}
function $f(e) {
  return 2 * Math.PI * e;
}
function zf(e, t) {
  return e * (1 - t / 100);
}
function jf(e, t) {
  const n = Math.floor(e * 0.25);
  return Math.max(12, t !== void 0 ? t : n);
}
function Rh({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: o = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Lf(e, 0, 100), f = Bf(n), u = Ff(n, f), d = $f(u), p = zf(d, c), h = n / 2, b = n / 2, v = jf(n, r), g = t !== void 0 ? t : `${c}%`, _ = i ?? g;
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
const Ni = Vn(null);
function Wf() {
  const e = Hn(Ni);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function Vf({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ a(en, { ...t }) : e === "notice" ? /* @__PURE__ */ a(pt, { ...t }) : /* @__PURE__ */ a(Ke, { ...t });
}
const Eh = R.forwardRef(
  function({ value: t, label: n, disabled: r, id: o, className: i, ...s }, l) {
    const c = Wf(), f = oe(), u = o ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
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
), Mh = R.forwardRef(
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
    const g = oe(), _ = u ?? g, N = oe(), y = oe(), C = [
      i ? N : null,
      l ? y : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a(Ni.Provider, { value: { groupValue: t, onValueChange: n, name: _, groupDisabled: f }, children: /* @__PURE__ */ w(
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
                /* @__PURE__ */ a(Vf, { validation: s }),
                l
              ]
            }
          )
        ]
      }
    ) });
  }
), Hf = { small: 16, medium: 20 };
function ut(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function Fn(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function Uf(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const o = (n - t) / r, i = o > 10 ? Math.ceil(o / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function $n({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: o,
  visible: i
}) {
  const s = ut(e, t, n), l = Fn(s, r);
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
function Ci({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: o
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ w(we, { children: [
    e.length > 0 && /* @__PURE__ */ a("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ a(
      "div",
      {
        className: "range__marker",
        style: { left: Fn(ut(i, n, r), o) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ a("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ a(
      "span",
      {
        className: "range__indicator",
        style: { left: Fn(ut(i.value, n, r), o) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function Ph(e) {
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
  } = e, N = oe(), y = oe(), C = oe(), E = Hf[l], M = at(
    () => c ? Uf(c, o, i, s) : [],
    [c, o, i, s]
  ), x = f.length > 0, I = [
    d ? y : null,
    h ? C : null
  ].filter(Boolean).join(" ") || void 0, k = /* @__PURE__ */ a(
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
        n === "top" && k,
        /* @__PURE__ */ w("div", { className: "range__body", children: [
          n === "left" && k,
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
                  x ? "range__track-area--has-indicators" : ""
                ].filter(Boolean).join(" "),
                children: e.dual ? /* @__PURE__ */ a(
                  Kf,
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
                  Gf,
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
            h && p && /* @__PURE__ */ w(
              "p",
              {
                id: C,
                className: "range__message",
                role: p === "negative" ? "alert" : void 0,
                children: [
                  /* @__PURE__ */ a(Ke, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
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
function Gf({
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
  const [p, h] = J(!1), v = `${ut(e, n, r)}%`;
  return /* @__PURE__ */ w(we, { children: [
    /* @__PURE__ */ a(
      $n,
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
      Ci,
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
function Kf({
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
  const [b, v] = e, [g, _] = J(null), N = se(null), y = se(null), C = ut(b, i, s), E = ut(v, i, s);
  function M(T) {
    const S = Math.min(Number(T.target.value), v - l);
    t([S, v]);
  }
  function x(T) {
    const S = Math.max(Number(T.target.value), b + l);
    t([b, S]);
  }
  const I = r ?? `Minimum ${n}`, k = o ?? `Maximum ${n}`;
  return /* @__PURE__ */ w(we, { children: [
    /* @__PURE__ */ a(
      $n,
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
      $n,
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
        "aria-describedby": h,
        "aria-valuetext": d(b),
        style: { zIndex: g === "low" ? 2 : 1 },
        onChange: M,
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
        "aria-label": k,
        "aria-describedby": h,
        "aria-valuetext": d(v),
        style: { zIndex: g === "high" ? 2 : 1 },
        onChange: x,
        onFocus: () => _("high"),
        onBlur: () => _(null),
        onPointerDown: () => _("high"),
        onPointerUp: () => {
          document.activeElement !== y.current && _(null);
        }
      }
    ),
    /* @__PURE__ */ a(
      Ci,
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
function no({ item: e }) {
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
            Ct,
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
function Yf({
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
  const h = i.slice(0, 5), b = s.slice(0, 4), v = s.slice(4), g = s.length > 0, _ = v.length > 0, N = /* @__PURE__ */ w(we, { children: [
    /* @__PURE__ */ a("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ a(Xf, {}) }),
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
          nf,
          {
            variant: "fill",
            size: "small",
            color: o,
            className: "navbar__tenant-badge",
            title: r,
            children: r
          }
        ) }),
        h.length > 0 && /* @__PURE__ */ a("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: h.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(no, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ w(we, { children: [
          l && /* @__PURE__ */ a("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ w("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            b.map((y) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(no, { item: y }) }, y.id)),
            _ && /* @__PURE__ */ a("li", { children: /* @__PURE__ */ w(Ae, { children: [
              /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
                /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__nav-btn",
                    "aria-label": "More navigation items",
                    children: /* @__PURE__ */ a("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Je, { size: 20 }) })
                  }
                ) }),
                /* @__PURE__ */ a("span", { className: "navbar__tooltip", role: "tooltip", children: "More" })
              ] }),
              /* @__PURE__ */ a(Te, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ w(
                ie,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ a("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ a(
                      Ct,
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
        /* @__PURE__ */ a("div", { className: "navbar__user", children: /* @__PURE__ */ w(Ae, { children: [
          /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
            /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
              of,
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
          /* @__PURE__ */ w(Te, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ a(pi, { children: c }),
            u.map((y) => /* @__PURE__ */ w("span", { children: [
              y.separator && /* @__PURE__ */ a(dt, {}),
              /* @__PURE__ */ w(ie, { onSelect: y.onClick, children: [
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
function Xf() {
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
function qf() {
  return /* @__PURE__ */ a("span", { className: "split-button__spinner", "aria-hidden": "true" });
}
function Ih({
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
  return /* @__PURE__ */ w(si, { children: [
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
                c ? /* @__PURE__ */ a(qf, {}) : s,
                e
              ]
            }
          ),
          /* @__PURE__ */ a("span", { className: "split-button__divider", "aria-hidden": "true" }),
          /* @__PURE__ */ a(li, { asChild: !0, children: /* @__PURE__ */ a(
            "button",
            {
              className: "split-button__trigger",
              "aria-label": f,
              disabled: l,
              children: /* @__PURE__ */ a(St, { className: "split-button__chevron", "aria-hidden": "true" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a(_r, { children: /* @__PURE__ */ a(
      ci,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ w(
          di,
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
const Zf = {
  negative: /* @__PURE__ */ a(Ke, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  notice: /* @__PURE__ */ a(pt, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ a(en, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, Ah = R.forwardRef(
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
    const C = oe(), E = oe(), M = oe(), x = oe(), [I, k] = J(() => String(v ?? g ?? "").length), T = v !== void 0 ? String(v).length : I, S = se(null);
    Wn(y, () => S.current, []), Jt(() => {
      if (i !== "auto") return;
      const z = S.current;
      if (!z) return;
      z.style.height = "auto";
      const j = z.scrollHeight, B = l !== void 0 ? Math.min(j, l) : j, D = s !== void 0 ? Math.max(B, s) : B;
      z.style.height = `${D}px`, z.style.overflowY = l !== void 0 && j >= l ? "auto" : "hidden";
    }, [T, i, s, l]);
    function P(z) {
      k(z.target.value.length), _ == null || _(z);
    }
    const F = !!(o && r), V = [
      F ? M : n ? E : null,
      c && p != null ? x : null
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
              onChange: P,
              "aria-required": h || void 0,
              "aria-invalid": r === "negative" || void 0,
              "aria-describedby": V,
              "data-resize": i,
              style: Y,
              ...N
            }
          ),
          (n || F || c && p != null) && /* @__PURE__ */ w("div", { className: "textarea__footer", children: [
            F ? /* @__PURE__ */ w(
              "p",
              {
                id: M,
                className: "textarea__message",
                role: r === "negative" ? "alert" : void 0,
                children: [
                  Zf[r],
                  o
                ]
              }
            ) : n ? /* @__PURE__ */ a("p", { id: E, className: "textarea__hint", children: n }) : null,
            c && p != null && /* @__PURE__ */ w(
              "div",
              {
                id: x,
                className: [
                  "textarea__counter",
                  T >= p ? "textarea__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                "aria-live": "off",
                children: [
                  T,
                  " / ",
                  p
                ]
              }
            )
          ] }),
          c && p != null && /* @__PURE__ */ a("div", { className: "textarea__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: T >= p ? `Character limit of ${p} reached` : "" })
        ]
      }
    );
  }
), Qf = {
  negative: /* @__PURE__ */ a(Ke, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ a(pt, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ a(en, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, Jf = { small: 14, medium: 16, large: 18 }, Oh = R.forwardRef(
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
    onChange: E,
    onFocus: M,
    onBlur: x,
    maxLength: I,
    ...k
  }, T) {
    const S = oe(), P = oe(), F = oe(), V = oe(), [Y, z] = J(!1), [j, B] = J(!1), [D, Z] = J(() => String(y ?? C ?? "").length), ee = y !== void 0 ? String(y).length : D, U = se(null);
    Wn(T, () => U.current, []);
    const $ = v === "password" && Y ? "text" : v, Q = Jf[s], O = v === "search" && !f ? /* @__PURE__ */ a(Ji, { size: Q, "aria-hidden": "true" }) : f;
    let H = null;
    v === "password" ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": Y ? "Hide password" : "Show password",
        tabIndex: 0,
        onClick: () => {
          var q;
          z((Ne) => !Ne), (q = U.current) == null || q.focus();
        },
        children: Y ? /* @__PURE__ */ a(so, { size: Q, "aria-hidden": "true" }) : /* @__PURE__ */ a(es, { size: Q, "aria-hidden": "true" })
      }
    ) : v === "search" && ee > 0 ? H = /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const q = U.current;
          q && (q.value = "", q.focus()), Z(0), p == null || p();
        },
        children: /* @__PURE__ */ a(ke, { size: Q, "aria-hidden": "true" })
      }
    ) : H = u ?? null;
    const G = !!O, ne = !!H, X = !!(i && o), ce = [
      X ? F : r ? P : null,
      d && I != null ? V : null
    ].filter(Boolean).join(" ") || void 0;
    function pe(q) {
      Z(q.target.value.length), E == null || E(q);
    }
    function L(q) {
      B(!0), M == null || M(q);
    }
    function W(q) {
      B(!1), x == null || x(q);
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
              "data-focused": j || void 0,
              "data-disabled": _ || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ a("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": G || void 0,
                    "data-icon-end": ne || void 0,
                    children: [
                      O && /* @__PURE__ */ a("span", { className: "text-input__icon-start", "aria-hidden": "true", children: O }),
                      /* @__PURE__ */ a(
                        "input",
                        {
                          ref: U,
                          id: S,
                          className: "text-input__field",
                          type: $,
                          required: g,
                          disabled: _,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: I,
                          onChange: pe,
                          onFocus: L,
                          onBlur: W,
                          "aria-required": g || void 0,
                          "aria-invalid": o === "negative" || void 0,
                          "aria-describedby": ce,
                          ...k
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
          (r || X || d && I != null) && /* @__PURE__ */ w("div", { className: "text-input__footer", children: [
            X ? /* @__PURE__ */ w(
              "p",
              {
                id: F,
                className: "text-input__message",
                role: o === "negative" ? "alert" : void 0,
                children: [
                  Qf[o],
                  i
                ]
              }
            ) : r ? /* @__PURE__ */ a("p", { id: P, className: "text-input__hint", children: r }) : null,
            d && I != null && /* @__PURE__ */ w(
              "div",
              {
                id: V,
                className: [
                  "text-input__counter",
                  ee >= I ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  ee,
                  " / ",
                  I
                ]
              }
            )
          ] }),
          d && I != null && /* @__PURE__ */ a("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: ee >= I ? `Character limit of ${I} reached` : "" })
        ]
      }
    );
  }
), ep = {
  neutral: 6e3,
  positive: 6e3,
  notice: 0,
  negative: 0
}, tp = {
  neutral: uo,
  positive: en,
  notice: lo,
  negative: Ke
}, xi = Vn(null);
function np({ toast: e, onExitStart: t, onExitComplete: n }) {
  const r = se(!1);
  fe(() => {
    if (!e.duration || e.exiting) return;
    const l = setTimeout(() => t(e.id), e.duration);
    return () => clearTimeout(l);
  }, [e.id, e.duration, e.exiting, t]), fe(() => {
    if (!e.exiting) return;
    const l = setTimeout(() => {
      r.current || (r.current = !0, n(e.id));
    }, 320);
    return () => clearTimeout(l);
  }, [e.exiting, e.id, n]);
  function o(l) {
    l.animationName === "toast-exit" && !r.current && (r.current = !0, n(e.id));
  }
  const i = e.variant === "notice" || e.variant === "negative", s = e.variant === "neutral" && e.icon ? e.icon : tp[e.variant];
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
            children: /* @__PURE__ */ a(ke, { size: 16, "aria-hidden": "true" })
          }
        ),
        e.showProgress && e.duration > 0 && !e.exiting && /* @__PURE__ */ a("div", { className: "toast__progress", "aria-hidden": "true", children: /* @__PURE__ */ a("div", { className: "toast__progress-bar" }) })
      ]
    }
  );
}
function Th({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, o] = J([]), [i, s] = J(t), l = de((d) => {
    const p = d.variant ?? "neutral", h = d.duration !== void 0 ? d.duration : ep[p], b = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
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
  }, [n]), c = de((d) => {
    o((p) => p.map((h) => h.id === d ? { ...h, exiting: !0 } : h));
  }, []), f = de(() => {
    o((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = de((d) => {
    o((p) => p.filter((h) => h.id !== d));
  }, []);
  return /* @__PURE__ */ w(xi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Bi(
      /* @__PURE__ */ a("div", { className: "toast-container", "data-position": i, "aria-label": "Notifications", children: r.map((d) => /* @__PURE__ */ a(
        np,
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
function kh() {
  const e = Hn(xi);
  if (!e) throw new Error("useToast must be used within a ToastProvider");
  return e;
}
var rp = Object.freeze({
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
}), op = "VisuallyHidden", Si = m.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    le.span,
    {
      ...e,
      ref: t,
      style: { ...rp, ...e.style }
    }
  )
);
Si.displayName = op;
var ap = Si, [hn] = Ye("Tooltip", [
  dn
]), mn = dn(), Ri = "TooltipProvider", ip = 700, zn = "tooltip.open", [sp, wr] = hn(Ri), Ei = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ip,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, s = m.useRef(!0), l = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ a(
    sp,
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
Ei.displayName = Ri;
var xt = "Tooltip", [lp, At] = hn(xt), Mi = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = wr(xt, e.__scopeTooltip), f = mn(t), [u, d] = m.useState(null), p = He(), h = m.useRef(0), b = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = m.useRef(!1), [_, N] = et({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (x) => {
      x ? (c.onOpen(), document.dispatchEvent(new CustomEvent(zn))) : c.onClose(), i == null || i(x);
    },
    caller: xt
  }), y = m.useMemo(() => _ ? g.current ? "delayed-open" : "instant-open" : "closed", [_]), C = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, N(!0);
  }, [N]), E = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, N(!1);
  }, [N]), M = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, N(!0), h.current = 0;
    }, v);
  }, [v, N]);
  return m.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ a(cr, { ...f, children: /* @__PURE__ */ a(
    lp,
    {
      scope: t,
      contentId: p,
      open: _,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? M() : C();
      }, [c.isOpenDelayedRef, M, C]),
      onTriggerLeave: m.useCallback(() => {
        b ? E() : (window.clearTimeout(h.current), h.current = 0);
      }, [E, b]),
      onOpen: C,
      onClose: E,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
Mi.displayName = xt;
var jn = "TooltipTrigger", Pi = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = At(jn, n), i = wr(jn, n), s = mn(n), l = m.useRef(null), c = ue(t, l, o.onTriggerChange), f = m.useRef(!1), u = m.useRef(!1), d = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ a(ta, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      le.button,
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
Pi.displayName = jn;
var yr = "TooltipPortal", [cp, dp] = hn(yr, {
  forceMount: void 0
}), Ii = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = At(yr, t);
  return /* @__PURE__ */ a(cp, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Xe, { present: n || i.open, children: /* @__PURE__ */ a(dr, { asChild: !0, container: o, children: r }) }) });
};
Ii.displayName = yr;
var ft = "TooltipContent", Ai = m.forwardRef(
  (e, t) => {
    const n = dp(ft, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = At(ft, e.__scopeTooltip);
    return /* @__PURE__ */ a(Xe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ a(Oi, { side: o, ...i, ref: t }) : /* @__PURE__ */ a(up, { side: o, ...i, ref: t }) });
  }
), up = m.forwardRef((e, t) => {
  const n = At(ft, e.__scopeTooltip), r = wr(ft, e.__scopeTooltip), o = m.useRef(null), i = ue(t, o), [s, l] = m.useState(null), { trigger: c, onClose: f } = n, u = o.current, { onPointerInTransitChange: d } = r, p = m.useCallback(() => {
    l(null), d(!1);
  }, [d]), h = m.useCallback(
    (b, v) => {
      const g = b.currentTarget, _ = { x: b.clientX, y: b.clientY }, N = mp(_, g.getBoundingClientRect()), y = vp(_, N), C = gp(v.getBoundingClientRect()), E = _p([...y, ...C]);
      l(E), d(!0);
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
        const g = v.target, _ = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !bp(_, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ a(Oi, { ...e, ref: i });
}), [fp, pp] = hn(xt, { isInside: !1 }), hp = /* @__PURE__ */ as("TooltipContent"), Oi = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = At(ft, n), f = mn(n), { onClose: u } = c;
    return m.useEffect(() => (document.addEventListener(zn, u), () => document.removeEventListener(zn, u)), [u]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ a(
      er,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ w(
          na,
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
              /* @__PURE__ */ a(hp, { children: r }),
              /* @__PURE__ */ a(fp, { scope: n, isInside: !0, children: /* @__PURE__ */ a(ap, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Ai.displayName = ft;
var Ti = "TooltipArrow", ki = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = mn(n);
    return pp(
      Ti,
      n
    ).isInside ? null : /* @__PURE__ */ a(ra, { ...o, ...r, ref: t });
  }
);
ki.displayName = Ti;
function mp(e, t) {
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
function vp(e, t, n = 5) {
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
function gp(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function bp(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (o = !o);
  }
  return o;
}
function _p(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), wp(t);
}
function wp(e) {
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
var yp = Ei, Np = Mi, Cp = Pi, xp = Ii, Sp = Ai, Rp = ki;
function Ep(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Dh({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: o = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ a(we, { children: t });
  const { side: l, align: c } = Ep(n);
  return /* @__PURE__ */ a(yp, { delayDuration: o, children: /* @__PURE__ */ w(Np, { children: [
    /* @__PURE__ */ a(Cp, { asChild: !0, children: t }),
    /* @__PURE__ */ a(xp, { children: /* @__PURE__ */ w(
      Sp,
      {
        className: "tooltip-content",
        side: l,
        align: c,
        sideOffset: 8,
        style: { maxWidth: s },
        children: [
          e,
          r && /* @__PURE__ */ a(Rp, { className: "tooltip-arrow", width: 12, height: 6 })
        ]
      }
    ) })
  ] }) });
}
const Mp = {
  positive: co,
  notice: pt,
  negative: Ke
};
function Lh({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const o = Mp[t], i = t === "negative";
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
const ro = 200, Pp = [];
function Ip(e, t) {
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
function Ap({
  tabs: e,
  activeTabId: t,
  groups: n = Pp,
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
  const g = se(null), [_, N] = J(!1), [y, C] = J(!1), [E, M] = J(/* @__PURE__ */ new Set()), x = de(() => {
    const S = g.current;
    S && (N(S.scrollLeft > 0), C(S.scrollLeft + S.clientWidth < S.scrollWidth - 1));
  }, []);
  fe(() => {
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
  function k(S) {
    M((P) => {
      const F = new Set(P);
      return F.has(S) ? F.delete(S) : F.add(S), F;
    });
  }
  const T = Ip(e, n);
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ w(Ae, { children: [
          /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(Je, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ w(Te, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ w(we, { children: [
              /* @__PURE__ */ a(pi, { children: "Open tabs" }),
              /* @__PURE__ */ a(Mu, { children: e.map((S) => /* @__PURE__ */ a(
                ie,
                {
                  onSelect: () => r(S.id),
                  "data-active-tab": S.id === t ? "" : void 0,
                  children: S.label
                },
                S.id
              )) }),
              /* @__PURE__ */ a(dt, {})
            ] }),
            /* @__PURE__ */ a(
              ie,
              {
                onSelect: () => h == null ? void 0 : h(),
                disabled: !h || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(
          me,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(_t, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !_,
            onClick: () => I(-ro),
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
            children: T.map(
              (S) => S.kind === "tab" ? /* @__PURE__ */ a(
                Di,
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
                Op,
                {
                  group: S.group,
                  tabs: S.tabs,
                  activeTabId: t,
                  isExpanded: !E.has(S.group.id),
                  onToggle: () => k(S.group.id),
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
          me,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ a(lt, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => I(ro),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function Di({
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
              p === "locked" && /* @__PURE__ */ a(ts, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ a(ns, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ w("span", { className: "footer-tab__actions", children: [
          p === "standard" && o && /* @__PURE__ */ a(
            me,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ a(ke, { size: 12 }),
              "aria-label": `Close ${e.label}`,
              className: "footer-tab__close-btn",
              onClick: o
            }
          ),
          /* @__PURE__ */ w(Ae, { children: [
            /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
              me,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Je, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Te, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ a(ie, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ a(ie, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ a(ie, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ a(ie, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ a(ie, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ a(dt, {}),
              p === "standard" && o && /* @__PURE__ */ a(ie, { onSelect: o, children: "Close this tab" }),
              u && /* @__PURE__ */ a(ie, { onSelect: u, children: "Close all other tabs" }),
              p === "standard" && d && /* @__PURE__ */ a(ie, { onSelect: d, children: "Close all tabs" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Op({
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
            sf,
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
          r && (b || v || g) && /* @__PURE__ */ w(Ae, { children: [
            /* @__PURE__ */ a(Oe, { asChild: !0, children: /* @__PURE__ */ a(
              me,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ a(Je, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Te, { side: "top", align: "start", sideOffset: 8, children: [
              b && /* @__PURE__ */ a(ie, { onSelect: b, children: "Edit group" }),
              v && /* @__PURE__ */ a(ie, { onSelect: v, children: "Ungroup" }),
              (b || v) && /* @__PURE__ */ a(dt, {}),
              p && t[0] && /* @__PURE__ */ a(ie, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ a(ie, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ a("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ a(
          Di,
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
function Tp({
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
  const g = p !== void 0, [_, N] = J(null), y = g ? p : _;
  function C(P) {
    g || N(P), h == null || h(P);
  }
  function E(P) {
    C(y === P ? null : P);
  }
  function M(P) {
    if (!P.drawerId) return P;
    const { drawerId: F, ...V } = P;
    return {
      ...V,
      selected: y === F,
      onClick: () => {
        var Y;
        (Y = P.onClick) == null || Y.call(P), E(F);
      }
    };
  }
  const x = i.map(M), I = s.map(M), k = d.find((P) => P.id === y) ?? null, T = k != null && k.persistent ? k : null, S = d.filter((P) => !P.persistent);
  return /* @__PURE__ */ w("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a(
      Yf,
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
    T && /* @__PURE__ */ a(
      "div",
      {
        className: "main-navigation__panel",
        "data-size": T.size ?? "medium",
        role: "complementary",
        "aria-label": "Navigation panel",
        children: T.content
      }
    ),
    /* @__PURE__ */ a("div", { className: "main-navigation__content", children: b }),
    S.map((P) => /* @__PURE__ */ a(
      tf,
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
function Bh({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ w(we, { children: [
    /* @__PURE__ */ a(
      Tp,
      {
        ...e,
        className: ["micro-navigation", e.className, r].filter(Boolean).join(" "),
        children: /* @__PURE__ */ a("main", { className: "micro-navigation__main", children: n })
      }
    ),
    /* @__PURE__ */ a(Ap, { ...t })
  ] });
}
export {
  Fp as Accordion,
  of as Avatar,
  uh as AvatarGroup,
  fh as AvatarWithStatus,
  nf as Badge,
  yh as BannerAlert,
  Ou as Breadcrumbs,
  me as Button,
  Fu as ButtonsToolbar,
  ph as Card,
  gh as CardContent,
  vh as CardDescription,
  wh as CardDivider,
  bh as CardFooter,
  hh as CardHeader,
  _h as CardSection,
  mh as CardTitle,
  Gp as Checkbox,
  Kp as CheckboxGroup,
  zt as Chip,
  Yp as ChipGroup,
  Xp as Combobox,
  Ct as Counter,
  wf as Dialog,
  Nf as DialogBody,
  Cf as DialogFooter,
  yf as DialogHeader,
  fi as Divider,
  tf as Drawer,
  rh as DrawerContent,
  ch as DrawerContextButton,
  th as DrawerHeader,
  sh as DrawerListItem,
  ah as DrawerMenuItem,
  ih as DrawerMultiLevelItem,
  lh as DrawerNotificationItem,
  oh as DrawerSection,
  nh as DrawerTools,
  qp as Dropdown,
  Zp as FieldLabel,
  Qp as FileUploader,
  Jp as FileViewer,
  Ae as FlyoutMenu,
  $p as FlyoutMenuCheckboxItem,
  Te as FlyoutMenuContent,
  Mu as FlyoutMenuGroup,
  ie as FlyoutMenuItem,
  pi as FlyoutMenuLabel,
  zp as FlyoutMenuRadioGroup,
  jp as FlyoutMenuRadioItem,
  dt as FlyoutMenuSeparator,
  Up as FlyoutMenuShortcut,
  Wp as FlyoutMenuSub,
  Hp as FlyoutMenuSubContent,
  Vp as FlyoutMenuSubTrigger,
  Oe as FlyoutMenuTrigger,
  Ap as Footer,
  eh as Hint,
  Ch as IconBadge,
  ge as IconButton,
  dh as Link,
  If as List,
  Af as ListItem,
  Tp as MainNavigation,
  Bh as MicroNavigation,
  Yf as Navbar,
  xh as PageHeader,
  ff as Panel,
  hf as PanelBody,
  mf as PanelFooter,
  pf as PanelHeader,
  Sh as ProgressBar,
  Rh as ProgressCircle,
  Eh as Radio,
  Mh as RadioGroup,
  Ph as Range,
  vf as Section,
  jt as Spinner,
  Ih as SplitButton,
  Of as Stepper,
  Tf as StepperStep,
  Nh as Switch,
  Ef as Tab,
  Rf as TabList,
  Mf as TabPanel,
  Sf as Tabs,
  sf as Tag,
  Ah as TextArea,
  Oh as TextInput,
  Th as ToastProvider,
  Dh as Tooltip,
  Lh as ValidationMessage,
  kh as useToast
};
