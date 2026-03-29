import { jsx as o, Fragment as Ce, jsxs as w } from "react/jsx-runtime";
import * as m from "react";
import R, { useLayoutEffect as Ct, useState as J, useId as ae, useRef as se, useImperativeHandle as Yn, useEffect as ue, useMemo as ut, useCallback as de, createContext as Xn, useContext as qn } from "react";
import * as co from "react-dom";
import Zn, { createPortal as Vi } from "react-dom";
import { Check as ze, ChevronRight as ht, MoreHorizontal as rt, MoreVertical as uo, X as Be, XCircle as Xe, AlertCircle as _t, CheckCircle2 as fo, ChevronDown as It, HelpCircle as Hi, UploadCloud as Ui, Loader2 as Gi, Upload as Ki, Image as Yi, FileText as kn, Archive as Xi, File as qi, ZoomOut as Zi, ZoomIn as Qi, RotateCw as Ji, Maximize2 as es, Download as Mr, ScanSearch as ts, ExternalLink as po, ChevronLeft as xt, FileX as ns, EyeOff as ho, FileSpreadsheet as rs, AlertTriangle as mo, Info as vo, EllipsisVertical as os, CheckCircle as tn, Search as as, Eye as is, Lock as ss, Pin as ls } from "lucide-react";
function qe(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = m.createContext(s), c = n.length;
    n = [...n, s];
    const f = (d) => {
      var _;
      const { scope: p, children: h, ...b } = d, v = ((_ = p == null ? void 0 : p[e]) == null ? void 0 : _[c]) || l, g = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ o(v.Provider, { value: g, children: h });
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
  const a = () => {
    const i = n.map((s) => m.createContext(s));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return a.scopeName = e, [r, cs(a, ...t)];
}
function cs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
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
function Pr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function nn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const i = Pr(a, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const i = r[a];
          typeof i == "function" ? i() : Pr(e[a], null);
        }
      };
  };
}
function fe(...e) {
  return m.useCallback(nn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  const t = /* @__PURE__ */ ds(e), n = m.forwardRef((r, a) => {
    const { children: i, ...s } = r, l = m.Children.toArray(i), c = l.find(fs);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ o(t, { ...s, ref: a, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ o(t, { ...s, ref: a, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = m.forwardRef((n, r) => {
    const { children: a, ...i } = n;
    if (m.isValidElement(a)) {
      const s = hs(a), l = ps(i, a.props);
      return a.type !== m.Fragment && (l.ref = r ? nn(r, s) : s), m.cloneElement(a, l);
    }
    return m.Children.count(a) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var go = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = ({ children: n }) => /* @__PURE__ */ o(Ce, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = go, t;
}
function fs(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === go;
}
function ps(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? a && i ? n[r] = (...l) => {
      const c = i(...l);
      return a(...l), c;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...i } : r === "className" && (n[r] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function hs(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Qn(e) {
  const t = e + "CollectionProvider", [n, r] = qe(t), [a, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: _ } = v, N = R.useRef(null), y = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ o(a, { scope: g, itemMap: y, collectionRef: N, children: _ });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ Kt(l), f = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N } = v, y = i(l, _), C = fe(g, y.collectionRef);
      return /* @__PURE__ */ o(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Kt(u), h = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N, ...y } = v, C = R.useRef(null), E = fe(g, C), M = i(u, _);
      return R.useEffect(() => (M.itemMap.set(C, { ref: C, ...y }), () => void M.itemMap.delete(C))), /* @__PURE__ */ o(p, { [d]: "", ref: E, children: N });
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
        (M, S) => y.indexOf(M.ref.current) - y.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: f, ItemSlot: h },
    b,
    r
  ];
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
var je = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, ms = m[" useInsertionEffect ".trim().toString()] || je;
function ot({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, i, s] = vs({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, c = l ? e : a;
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
        const p = gs(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function vs({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), a = m.useRef(n), i = m.useRef(t);
  return ms(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    a.current !== n && ((s = i.current) == null || s.call(i, n), a.current = n);
  }, [n, a]), [n, r, i];
}
function gs(e) {
  return typeof e == "function";
}
var bs = [
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
], ce = bs.reduce((e, t) => {
  const n = /* @__PURE__ */ Kt(`Primitive.${t}`), r = m.forwardRef((a, i) => {
    const { asChild: s, ...l } = a, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function bo(e, t) {
  e && co.flushSync(() => e.dispatchEvent(t));
}
function _s(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ze = (e) => {
  const { present: t, children: n } = e, r = ws(t), a = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = fe(r.ref, ys(a));
  return typeof n == "function" || r.isPresent ? m.cloneElement(a, { ref: i }) : null;
};
Ze.displayName = "Presence";
function ws(e) {
  const [t, n] = m.useState(), r = m.useRef(null), a = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = _s(s, {
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
    const f = Bt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), je(() => {
    const f = r.current, u = a.current;
    if (u !== e) {
      const p = i.current, h = Bt(f);
      e ? c("MOUNT") : h === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, c]), je(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = Bt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = Bt(r.current));
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
function Bt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ys(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ns = m[" useId ".trim().toString()] || (() => {
}), Cs = 0;
function Ge(e) {
  const [t, n] = m.useState(Ns());
  return je(() => {
    n((r) => r ?? String(Cs++));
  }, [e]), t ? `radix-${t}` : "";
}
var rn = "Collapsible", [xs, _o] = qe(rn), [Ss, Jn] = xs(rn), wo = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: a,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c, f] = ot({
      prop: r,
      defaultProp: a ?? !1,
      onChange: s,
      caller: rn
    });
    return /* @__PURE__ */ o(
      Ss,
      {
        scope: n,
        disabled: i,
        contentId: Ge(),
        open: c,
        onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ o(
          ce.div,
          {
            "data-state": tr(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
wo.displayName = rn;
var yo = "CollapsibleTrigger", No = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, a = Jn(yo, n);
    return /* @__PURE__ */ o(
      ce.button,
      {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": tr(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...r,
        ref: t,
        onClick: Y(e.onClick, a.onOpenToggle)
      }
    );
  }
);
No.displayName = yo;
var er = "CollapsibleContent", Co = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = Jn(er, e.__scopeCollapsible);
    return /* @__PURE__ */ o(Ze, { present: n || a.open, children: ({ present: i }) => /* @__PURE__ */ o(Rs, { ...r, ref: t, present: i }) });
  }
);
Co.displayName = er;
var Rs = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: a, ...i } = e, s = Jn(er, n), [l, c] = m.useState(r), f = m.useRef(null), u = fe(t, f), d = m.useRef(0), p = d.current, h = m.useRef(0), b = h.current, v = s.open || l, g = m.useRef(v), _ = m.useRef(void 0);
  return m.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), je(() => {
    const N = f.current;
    if (N) {
      _.current = _.current || {
        transitionDuration: N.style.transitionDuration,
        animationName: N.style.animationName
      }, N.style.transitionDuration = "0s", N.style.animationName = "none";
      const y = N.getBoundingClientRect();
      d.current = y.height, h.current = y.width, g.current || (N.style.transitionDuration = _.current.transitionDuration, N.style.animationName = _.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ o(
    ce.div,
    {
      "data-state": tr(s.open),
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
      children: v && a
    }
  );
});
function tr(e) {
  return e ? "open" : "closed";
}
var Es = wo, Ms = No, Ps = Co, Is = m.createContext(void 0);
function nr(e) {
  const t = m.useContext(Is);
  return e || t || "ltr";
}
var Pe = "Accordion", As = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [rr, Os, Ts] = Qn(Pe), [on] = qe(Pe, [
  Ts,
  _o
]), or = _o(), xo = R.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, a = r, i = r;
    return /* @__PURE__ */ o(rr.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ o(Bs, { ...i, ref: t }) : /* @__PURE__ */ o(Ls, { ...a, ref: t }) });
  }
);
xo.displayName = Pe;
var [So, ks] = on(Pe), [Ro, Ds] = on(
  Pe,
  { collapsible: !1 }
), Ls = R.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: a = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [l, c] = ot({
      prop: n,
      defaultProp: r ?? "",
      onChange: a,
      caller: Pe
    });
    return /* @__PURE__ */ o(
      So,
      {
        scope: e.__scopeAccordion,
        value: R.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: R.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ o(Ro, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ o(Eo, { ...s, ref: t }) })
      }
    );
  }
), Bs = R.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: a = () => {
    },
    ...i
  } = e, [s, l] = ot({
    prop: n,
    defaultProp: r ?? [],
    onChange: a,
    caller: Pe
  }), c = R.useCallback(
    (u) => l((d = []) => [...d, u]),
    [l]
  ), f = R.useCallback(
    (u) => l((d = []) => d.filter((p) => p !== u)),
    [l]
  );
  return /* @__PURE__ */ o(
    So,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ o(Ro, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ o(Eo, { ...i, ref: t }) })
    }
  );
}), [Fs, an] = on(Pe), Eo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: a, orientation: i = "vertical", ...s } = e, l = R.useRef(null), c = fe(l, t), f = Os(n), d = nr(a) === "ltr", p = Y(e.onKeyDown, (h) => {
      var A;
      if (!As.includes(h.key)) return;
      const b = h.target, v = f().filter((k) => {
        var O;
        return !((O = k.ref.current) != null && O.disabled);
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
      const S = N % _;
      (A = v[S].ref.current) == null || A.focus();
    });
    return /* @__PURE__ */ o(
      Fs,
      {
        scope: n,
        disabled: r,
        direction: a,
        orientation: i,
        children: /* @__PURE__ */ o(rr.Slot, { scope: n, children: /* @__PURE__ */ o(
          ce.div,
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
), Yt = "AccordionItem", [$s, ar] = on(Yt), Mo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...a } = e, i = an(Yt, n), s = ks(Yt, n), l = or(n), c = Ge(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ o(
      $s,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ o(
          Es,
          {
            "data-orientation": i.orientation,
            "data-state": ko(f),
            ...l,
            ...a,
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
Mo.displayName = Yt;
var Po = "AccordionHeader", Io = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = an(Pe, n), i = ar(Po, n);
    return /* @__PURE__ */ o(
      ce.h3,
      {
        "data-orientation": a.orientation,
        "data-state": ko(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Io.displayName = Po;
var Dn = "AccordionTrigger", Ao = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = an(Pe, n), i = ar(Dn, n), s = Ds(Dn, n), l = or(n);
    return /* @__PURE__ */ o(rr.ItemSlot, { scope: n, children: /* @__PURE__ */ o(
      Ms,
      {
        "aria-disabled": i.open && !s.collapsible || void 0,
        "data-orientation": a.orientation,
        id: i.triggerId,
        ...l,
        ...r,
        ref: t
      }
    ) });
  }
);
Ao.displayName = Dn;
var Oo = "AccordionContent", To = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = an(Pe, n), i = ar(Oo, n), s = or(n);
    return /* @__PURE__ */ o(
      Ps,
      {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": a.orientation,
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
To.displayName = Oo;
function ko(e) {
  return e ? "open" : "closed";
}
var zs = xo, js = Mo, Ws = Io, Vs = Ao, Hs = To;
function Us() {
  return /* @__PURE__ */ o(
    "svg",
    {
      className: "accordion__chevron",
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(
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
function Gp({
  items: e,
  size: t = "medium",
  defaultValue: n,
  value: r,
  onValueChange: a,
  className: i
}) {
  return /* @__PURE__ */ o(
    zs,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: a } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ w(
        js,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ o(Ws, { className: "accordion__header", children: /* @__PURE__ */ w(Vs, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ o("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ o("span", { className: "accordion__title", children: l.header }),
              l.afterElement && /* @__PURE__ */ o("span", { className: "accordion__after", children: l.afterElement }),
              /* @__PURE__ */ o(Us, {})
            ] }) }),
            /* @__PURE__ */ o(Hs, { className: "accordion__content", children: /* @__PURE__ */ o("div", { className: "accordion__content-inner", children: l.content }) })
          ]
        },
        l.value
      ))
    }
  );
}
function Te(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Gs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e);
  m.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ks = "DismissableLayer", Ln = "dismissableLayer.update", Ys = "dismissableLayer.pointerDownOutside", Xs = "dismissableLayer.focusOutside", Ir, Do = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ir = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = m.useContext(Do), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), b = fe(t, (S) => d(S)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= _, E = Qs((S) => {
      const A = S.target, k = [...f.branches].some((O) => O.contains(A));
      !C || k || (a == null || a(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p), M = Js((S) => {
      const A = S.target;
      [...f.branches].some((O) => O.contains(A)) || (i == null || i(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p);
    return Gs((S) => {
      N === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Ir = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Ar(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ir);
        };
    }, [u, p, n, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Ar());
    }, [u, f]), m.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(Ln, S), () => document.removeEventListener(Ln, S);
    }, []), /* @__PURE__ */ o(
      ce.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
ir.displayName = Ks;
var qs = "DismissableLayerBranch", Zs = m.forwardRef((e, t) => {
  const n = m.useContext(Do), r = m.useRef(null), a = fe(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ o(ce.div, { ...e, ref: a });
});
Zs.displayName = qs;
function Qs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = m.useRef(!1), a = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          Lo(
            Ys,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = c, t.addEventListener("click", a.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Js(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const a = (i) => {
      i.target && !r.current && Lo(Xs, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ar() {
  const e = new CustomEvent(Ln);
  document.dispatchEvent(e);
}
function Lo(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? bo(a, i) : a.dispatchEvent(i);
}
var Cn = 0;
function el() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Or()), document.body.insertAdjacentElement("beforeend", e[1] ?? Or()), Cn++, () => {
      Cn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Cn--;
    };
  }, []);
}
function Or() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var xn = "focusScope.autoFocusOnMount", Sn = "focusScope.autoFocusOnUnmount", Tr = { bubbles: !1, cancelable: !0 }, tl = "FocusScope", Bo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = m.useState(null), f = Te(a), u = Te(i), d = m.useRef(null), p = fe(t, (v) => c(v)), h = m.useRef({
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
        l.contains(C) ? d.current = C : Ue(d.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || Ue(d.current, { select: !0 }));
      }, _ = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && Ue(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(_);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, h.paused]), m.useEffect(() => {
    if (l) {
      Dr.add(h);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const _ = new CustomEvent(xn, Tr);
        l.addEventListener(xn, f), l.dispatchEvent(_), _.defaultPrevented || (nl(sl(Fo(l)), { select: !0 }), document.activeElement === v && Ue(l));
      }
      return () => {
        l.removeEventListener(xn, f), setTimeout(() => {
          const _ = new CustomEvent(Sn, Tr);
          l.addEventListener(Sn, u), l.dispatchEvent(_), _.defaultPrevented || Ue(v ?? document.body, { select: !0 }), l.removeEventListener(Sn, u), Dr.remove(h);
        }, 0);
      };
    }
  }, [l, f, u, h]);
  const b = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, _ = document.activeElement;
      if (g && _) {
        const N = v.currentTarget, [y, C] = rl(N);
        y && C ? !v.shiftKey && _ === C ? (v.preventDefault(), n && Ue(y, { select: !0 })) : v.shiftKey && _ === y && (v.preventDefault(), n && Ue(C, { select: !0 })) : _ === N && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ o(ce.div, { tabIndex: -1, ...s, ref: p, onKeyDown: b });
});
Bo.displayName = tl;
function nl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ue(r, { select: t }), document.activeElement !== n) return;
}
function rl(e) {
  const t = Fo(e), n = kr(t, e), r = kr(t.reverse(), e);
  return [n, r];
}
function Fo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function kr(e, t) {
  for (const n of e)
    if (!ol(n, { upTo: t })) return n;
}
function ol(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function al(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ue(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && al(e) && t && e.select();
  }
}
var Dr = il();
function il() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Lr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function sl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ll = ["top", "right", "bottom", "left"], Ke = Math.min, ye = Math.max, Xt = Math.round, Ft = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), cl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bn(e, t, n) {
  return ye(e, Ke(t, n));
}
function We(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e) {
  return e.split("-")[0];
}
function wt(e) {
  return e.split("-")[1];
}
function sr(e) {
  return e === "x" ? "y" : "x";
}
function lr(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function cr(e) {
  return sr(Ae(e));
}
function dl(e, t, n) {
  n === void 0 && (n = !1);
  const r = wt(e), a = cr(e), i = lr(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = qt(s)), [s, qt(s)];
}
function ul(e) {
  const t = qt(e);
  return [Fn(e), t, Fn(t)];
}
function Fn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Br = ["left", "right"], Fr = ["right", "left"], fl = ["top", "bottom"], pl = ["bottom", "top"];
function hl(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Fr : Br : t ? Br : Fr;
    case "left":
    case "right":
      return t ? fl : pl;
    default:
      return [];
  }
}
function ml(e, t, n, r) {
  const a = wt(e);
  let i = hl(Ve(e), n === "start", r);
  return a && (i = i.map((s) => s + "-" + a), t && (i = i.concat(i.map(Fn)))), i;
}
function qt(e) {
  const t = Ve(e);
  return cl[t] + e.slice(t.length);
}
function vl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $o(e) {
  return typeof e != "number" ? vl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: a
  } = e;
  return {
    width: r,
    height: a,
    top: n,
    left: t,
    right: t + r,
    bottom: n + a,
    x: t,
    y: n
  };
}
function $r(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Ae(t), s = cr(t), l = lr(s), c = Ve(t), f = i === "y", u = r.x + r.width / 2 - a.width / 2, d = r.y + r.height / 2 - a.height / 2, p = r[l] / 2 - a[l] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - a.height
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
        x: r.x - a.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (wt(t)) {
    case "start":
      h[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && f ? -1 : 1);
      break;
  }
  return h;
}
async function gl(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
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
  } = We(t, e), b = $o(h), g = l[p ? d === "floating" ? "reference" : "floating" : d], _ = Zt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: c
  })), N = d === "floating" ? {
    x: r,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), C = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Zt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const bl = 50, _l = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: gl
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: d
  } = $r(f, r, c), p = r, h = 0;
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
      strategy: a,
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
    }, M && h < bl && (h++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (f = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : M.rects), {
      x: u,
      y: d
    } = $r(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: a,
    middlewareData: b
  };
}, wl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: c
    } = t, {
      element: f,
      padding: u = 0
    } = We(e, t) || {};
    if (f == null)
      return {};
    const d = $o(u), p = {
      x: n,
      y: r
    }, h = cr(a), b = lr(h), v = await s.getDimensions(f), g = h === "y", _ = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[h] - p[h] - i.floating[b], E = p[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let S = M ? M[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(M))) && (S = l.floating[y] || i.floating[b]);
    const A = C / 2 - E / 2, k = S / 2 - v[b] / 2 - 1, O = Ke(d[_], k), x = Ke(d[N], k), P = O, W = S - v[b] - x, H = S / 2 - v[b] / 2 + A, Z = Bn(P, H, W), j = !c.arrow && wt(a) != null && H !== Z && i.reference[b] / 2 - (H < P ? O : x) - v[b] / 2 < 0, z = j ? H < P ? H - P : H - W : 0;
    return {
      [h]: p[h] + z,
      data: {
        [h]: Z,
        centerOffset: H - Z - z,
        ...j && {
          alignmentOffset: z
        }
      },
      reset: j
    };
  }
}), yl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
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
      } = We(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Ve(a), N = Ae(l), y = Ve(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), E = p || (y || !v ? [qt(l)] : ul(l)), M = b !== "none";
      !p && M && E.push(...ml(l, v, b, C));
      const S = [l, ...E], A = await c.detectOverflow(t, g), k = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && k.push(A[_]), d) {
        const H = dl(a, s, C);
        k.push(A[H[0]], A[H[1]]);
      }
      if (O = [...O, {
        placement: a,
        overflows: k
      }], !k.every((H) => H <= 0)) {
        var x, P;
        const H = (((x = i.flip) == null ? void 0 : x.index) || 0) + 1, Z = S[H];
        if (Z && (!(d === "alignment" ? N !== Ae(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((B) => Ae(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: O
            },
            reset: {
              placement: Z
            }
          };
        let j = (P = O.filter((z) => z.overflows[0] <= 0).sort((z, B) => z.overflows[1] - B.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!j)
          switch (h) {
            case "bestFit": {
              var W;
              const z = (W = O.filter((B) => {
                if (M) {
                  const T = Ae(B.placement);
                  return T === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((T) => T > 0).reduce((T, X) => T + X, 0)]).sort((B, T) => B[1] - T[1])[0]) == null ? void 0 : W[0];
              z && (j = z);
              break;
            }
            case "initialPlacement":
              j = l;
              break;
          }
        if (a !== j)
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
function zr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jr(e) {
  return ll.some((t) => e[t] >= 0);
}
const Nl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: a = "referenceHidden",
        ...i
      } = We(e, t);
      switch (a) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = zr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: jr(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = zr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: jr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, zo = /* @__PURE__ */ new Set(["left", "top"]);
async function Cl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = Ve(n), l = wt(n), c = Ae(n) === "y", f = zo.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = We(t, e);
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
const xl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: i,
        placement: s,
        middlewareData: l
      } = t, c = await Cl(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: a + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Sl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
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
      } = We(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Ae(Ve(a)), h = sr(p);
      let b = u[h], v = u[p];
      if (s) {
        const _ = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", y = b + d[_], C = b - d[N];
        b = Bn(y, b, C);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[_], C = v - d[N];
        v = Bn(y, v, C);
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
}, Rl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: i,
        middlewareData: s
      } = t, {
        offset: l = 0,
        mainAxis: c = !0,
        crossAxis: f = !0
      } = We(e, t), u = {
        x: n,
        y: r
      }, d = Ae(a), p = sr(d);
      let h = u[p], b = u[d];
      const v = We(l, t), g = typeof v == "number" ? {
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
        const y = p === "y" ? "width" : "height", C = zo.has(Ve(a)), E = i.reference[d] - i.floating[y] + (C && ((_ = s.offset) == null ? void 0 : _[d]) || 0) + (C ? 0 : g.crossAxis), M = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        b < E ? b = E : b > M && (b = M);
      }
      return {
        [p]: h,
        [d]: b
      };
    }
  };
}, El = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: c = () => {
        },
        ...f
      } = We(e, t), u = await s.detectOverflow(t, f), d = Ve(a), p = wt(a), h = Ae(a) === "y", {
        width: b,
        height: v
      } = i.floating;
      let g, _;
      d === "top" || d === "bottom" ? (g = d, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = b - u.left - u.right, C = Ke(v - u[g], N), E = Ke(b - u[_], y), M = !t.middlewareData.shift;
      let S = C, A = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = N), M && !p) {
        const O = ye(u.left, 0), x = ye(u.right, 0), P = ye(u.top, 0), W = ye(u.bottom, 0);
        h ? A = b - 2 * (O !== 0 || x !== 0 ? O + x : ye(u.left, u.right)) : S = v - 2 * (P !== 0 || W !== 0 ? P + W : ye(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: S
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
function sn() {
  return typeof window < "u";
}
function yt(e) {
  return jo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fe(e) {
  var t;
  return (t = (jo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jo(e) {
  return sn() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Ee(e) {
  return sn() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function He(e) {
  return sn() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function Wr(e) {
  return !sn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function At(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && a !== "inline" && a !== "contents";
}
function Ml(e) {
  return /^(table|td|th)$/.test(yt(e));
}
function ln(e) {
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
const Pl = /transform|translate|scale|rotate|perspective|filter/, Il = /paint|layout|strict|content/, tt = (e) => !!e && e !== "none";
let Rn;
function dr(e) {
  const t = Ee(e) ? Me(e) : e;
  return tt(t.transform) || tt(t.translate) || tt(t.scale) || tt(t.rotate) || tt(t.perspective) || !ur() && (tt(t.backdropFilter) || tt(t.filter)) || Pl.test(t.willChange || "") || Il.test(t.contain || "");
}
function Al(e) {
  let t = Ye(e);
  for (; He(t) && !mt(t); ) {
    if (dr(t))
      return t;
    if (ln(t))
      return null;
    t = Ye(t);
  }
  return null;
}
function ur() {
  return Rn == null && (Rn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Rn;
}
function mt(e) {
  return /^(html|body|#document)$/.test(yt(e));
}
function Me(e) {
  return Ne(e).getComputedStyle(e);
}
function cn(e) {
  return Ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ye(e) {
  if (yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wr(e) && e.host || // Fallback.
    Fe(e)
  );
  return Wr(t) ? t.host : t;
}
function Wo(e) {
  const t = Ye(e);
  return mt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && At(t) ? t : Wo(t);
}
function St(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Wo(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ne(a);
  if (i) {
    const l = $n(s);
    return t.concat(s, s.visualViewport || [], At(a) ? a : [], l && n ? St(l) : []);
  } else
    return t.concat(a, St(a, [], n));
}
function $n(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vo(e) {
  const t = Me(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = He(e), i = a ? e.offsetWidth : n, s = a ? e.offsetHeight : r, l = Xt(n) !== i || Xt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function fr(e) {
  return Ee(e) ? e : e.contextElement;
}
function ft(e) {
  const t = fr(e);
  if (!He(t))
    return Oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = Vo(t);
  let s = (i ? Xt(n.width) : n.width) / r, l = (i ? Xt(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Ol = /* @__PURE__ */ Oe(0);
function Ho(e) {
  const t = Ne(e);
  return !ur() || !t.visualViewport ? Ol : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ne(e) ? !1 : t;
}
function nt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = fr(e);
  let s = Oe(1);
  t && (r ? Ee(r) && (s = ft(r)) : s = ft(e));
  const l = Tl(i, n, r) ? Ho(i) : Oe(0);
  let c = (a.left + l.x) / s.x, f = (a.top + l.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (i) {
    const p = Ne(i), h = r && Ee(r) ? Ne(r) : r;
    let b = p, v = $n(b);
    for (; v && r && h !== b; ) {
      const g = ft(v), _ = v.getBoundingClientRect(), N = Me(v), y = _.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = _.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, b = Ne(v), v = $n(b);
    }
  }
  return Zt({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function dn(e, t) {
  const n = cn(e).scrollLeft;
  return t ? t.left + n : nt(Fe(e)).left + n;
}
function Uo(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - dn(e, n), a = n.top + t.scrollTop;
  return {
    x: r,
    y: a
  };
}
function kl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", s = Fe(r), l = t ? ln(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Oe(1);
  const u = Oe(0), d = He(r);
  if ((d || !d && !i) && ((yt(r) !== "body" || At(s)) && (c = cn(r)), d)) {
    const h = nt(r);
    f = ft(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !d && !i ? Uo(s, c) : Oe(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
  };
}
function Dl(e) {
  return Array.from(e.getClientRects());
}
function Ll(e) {
  const t = Fe(e), n = cn(e), r = e.ownerDocument.body, a = ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + dn(e);
  const l = -n.scrollTop;
  return Me(r).direction === "rtl" && (s += ye(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const Vr = 25;
function Bl(e, t) {
  const n = Ne(e), r = Fe(e), a = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (a) {
    i = a.width, s = a.height;
    const u = ur();
    (!u || u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  const f = dn(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - h);
    b <= Vr && (i -= b);
  } else f <= Vr && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Fl(e, t) {
  const n = nt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = He(e) ? ft(e) : Oe(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = a * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Hr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Bl(e, n);
  else if (t === "document")
    r = Ll(Fe(e));
  else if (Ee(t))
    r = Fl(t, n);
  else {
    const a = Ho(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Zt(r);
}
function Go(e, t) {
  const n = Ye(e);
  return n === t || !Ee(n) || mt(n) ? !1 : Me(n).position === "fixed" || Go(n, t);
}
function $l(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = St(e, [], !1).filter((l) => Ee(l) && yt(l) !== "body"), a = null;
  const i = Me(e).position === "fixed";
  let s = i ? Ye(e) : e;
  for (; Ee(s) && !mt(s); ) {
    const l = Me(s), c = dr(s);
    !c && l.position === "fixed" && (a = null), (i ? !c && !a : !c && l.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || At(s) && !c && Go(e, s)) ? r = r.filter((u) => u !== s) : a = l, s = Ye(s);
  }
  return t.set(e, r), r;
}
function zl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? ln(t) ? [] : $l(t, this._c) : [].concat(n), r], l = Hr(t, s[0], a);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const h = Hr(t, s[p], a);
    c = ye(h.top, c), f = Ke(h.right, f), u = Ke(h.bottom, u), d = ye(h.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function jl(e) {
  const {
    width: t,
    height: n
  } = Vo(e);
  return {
    width: t,
    height: n
  };
}
function Wl(e, t, n) {
  const r = He(t), a = Fe(t), i = n === "fixed", s = nt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Oe(0);
  function f() {
    c.x = dn(a);
  }
  if (r || !r && !i)
    if ((yt(t) !== "body" || At(a)) && (l = cn(t)), r) {
      const h = nt(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const u = a && !r && !i ? Uo(a, l) : Oe(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function En(e) {
  return Me(e).position === "static";
}
function Ur(e, t) {
  if (!He(e) || Me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Fe(e) === n && (n = n.ownerDocument.body), n;
}
function Ko(e, t) {
  const n = Ne(e);
  if (ln(e))
    return n;
  if (!He(e)) {
    let a = Ye(e);
    for (; a && !mt(a); ) {
      if (Ee(a) && !En(a))
        return a;
      a = Ye(a);
    }
    return n;
  }
  let r = Ur(e, t);
  for (; r && Ml(r) && En(r); )
    r = Ur(r, t);
  return r && mt(r) && En(r) && !dr(r) ? n : r || Al(e) || n;
}
const Vl = async function(e) {
  const t = this.getOffsetParent || Ko, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Wl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Hl(e) {
  return Me(e).direction === "rtl";
}
const Ul = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kl,
  getDocumentElement: Fe,
  getClippingRect: zl,
  getOffsetParent: Ko,
  getElementRects: Vl,
  getClientRects: Dl,
  getDimensions: jl,
  getScale: ft,
  isElement: Ee,
  isRTL: Hl
};
function Yo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gl(e, t) {
  let n = null, r;
  const a = Fe(e);
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
    const b = Ft(d), v = Ft(a.clientWidth - (u + p)), g = Ft(a.clientHeight - (d + h)), _ = Ft(u), y = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -_ + "px",
      threshold: ye(0, Ke(1, c)) || 1
    };
    let C = !0;
    function E(M) {
      const S = M[0].intersectionRatio;
      if (S !== c) {
        if (!C)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Yo(f, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Kl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = fr(e), u = a || i ? [...f ? St(f) : [], ...t ? St(t) : []] : [];
  u.forEach((_) => {
    a && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const d = f && l ? Gl(f, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((_) => {
    let [N] = _;
    N && N.target === f && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), f && !c && h.observe(f), t && h.observe(t));
  let b, v = c ? nt(e) : null;
  c && g();
  function g() {
    const _ = nt(e);
    v && !Yo(v, _) && n(), v = _, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var _;
    u.forEach((N) => {
      a && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (_ = h) == null || _.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const Yl = xl, Xl = Sl, ql = yl, Zl = El, Ql = Nl, Gr = wl, Jl = Rl, ec = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: Ul,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return _l(e, t, {
    ...a,
    platform: i
  });
};
var tc = typeof document < "u", nc = function() {
}, Ht = tc ? Ct : nc;
function Qt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Qt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = a[r];
      if (!(i === "_owner" && e.$$typeof) && !Qt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kr(e, t) {
  const n = Xo(e);
  return Math.round(t * n) / n;
}
function Mn(e) {
  const t = m.useRef(e);
  return Ht(() => {
    t.current = e;
  }), t;
}
function rc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
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
  Qt(p, r) || h(r);
  const [b, v] = m.useState(null), [g, _] = m.useState(null), N = m.useCallback((B) => {
    B !== M.current && (M.current = B, v(B));
  }, []), y = m.useCallback((B) => {
    B !== S.current && (S.current = B, _(B));
  }, []), C = i || b, E = s || g, M = m.useRef(null), S = m.useRef(null), A = m.useRef(u), k = c != null, O = Mn(c), x = Mn(a), P = Mn(f), W = m.useCallback(() => {
    if (!M.current || !S.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    x.current && (B.platform = x.current), ec(M.current, S.current, B).then((T) => {
      const X = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      H.current && !Qt(A.current, X) && (A.current = X, co.flushSync(() => {
        d(X);
      }));
    });
  }, [p, t, n, x, P]);
  Ht(() => {
    f === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const H = m.useRef(!1);
  Ht(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Ht(() => {
    if (C && (M.current = C), E && (S.current = E), C && E) {
      if (O.current)
        return O.current(C, E, W);
      W();
    }
  }, [C, E, W, O, k]);
  const Z = m.useMemo(() => ({
    reference: M,
    floating: S,
    setReference: N,
    setFloating: y
  }), [N, y]), j = m.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), z = m.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return B;
    const T = Kr(j.floating, u.x), X = Kr(j.floating, u.y);
    return l ? {
      ...B,
      transform: "translate(" + T + "px, " + X + "px)",
      ...Xo(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: X
    };
  }, [n, l, j.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: W,
    refs: Z,
    elements: j,
    floatingStyles: z
  }), [u, W, Z, j, z]);
}
const oc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Gr({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Gr({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, ac = (e, t) => {
  const n = Yl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ic = (e, t) => {
  const n = Xl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, sc = (e, t) => ({
  fn: Jl(e).fn,
  options: [e, t]
}), lc = (e, t) => {
  const n = ql(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, cc = (e, t) => {
  const n = Zl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, dc = (e, t) => {
  const n = Ql(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, uc = (e, t) => {
  const n = oc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var fc = "Arrow", qo = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...i } = e;
  return /* @__PURE__ */ o(
    ce.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ o("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
qo.displayName = fc;
var pc = qo;
function hc(e) {
  const [t, n] = m.useState(void 0);
  return je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const i = a[0];
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
var pr = "Popper", [Zo, un] = qe(pr), [mc, Qo] = Zo(pr), Jo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = m.useState(null);
  return /* @__PURE__ */ o(mc, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
Jo.displayName = pr;
var ea = "PopperAnchor", ta = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, i = Qo(ea, n), s = m.useRef(null), l = fe(t, s), c = m.useRef(null);
    return m.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ o(ce.div, { ...a, ref: l });
  }
);
ta.displayName = ea;
var hr = "PopperContent", [vc, gc] = Zo(hr), na = m.forwardRef(
  (e, t) => {
    var $, ne, Q, le, ve, L;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: a = 0,
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
    } = e, g = Qo(hr, n), [_, N] = m.useState(null), y = fe(t, (V) => N(V)), [C, E] = m.useState(null), M = hc(C), S = (M == null ? void 0 : M.width) ?? 0, A = (M == null ? void 0 : M.height) ?? 0, k = r + (i !== "center" ? "-" + i : ""), O = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, x = Array.isArray(f) ? f : [f], P = x.length > 0, W = {
      padding: O,
      boundary: x.filter(_c),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: H, floatingStyles: Z, placement: j, isPositioned: z, middlewareData: B } = rc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...V) => Kl(...V, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        ac({ mainAxis: a + A, alignmentAxis: s }),
        c && ic({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? sc() : void 0,
          ...W
        }),
        c && lc({ ...W }),
        cc({
          ...W,
          apply: ({ elements: V, rects: q, availableWidth: ge, availableHeight: re }) => {
            const { width: pe, height: be } = q.reference, Se = V.floating.style;
            Se.setProperty("--radix-popper-available-width", `${ge}px`), Se.setProperty("--radix-popper-available-height", `${re}px`), Se.setProperty("--radix-popper-anchor-width", `${pe}px`), Se.setProperty("--radix-popper-anchor-height", `${be}px`);
          }
        }),
        C && uc({ element: C, padding: l }),
        wc({ arrowWidth: S, arrowHeight: A }),
        p && dc({ strategy: "referenceHidden", ...W })
      ]
    }), [T, X] = aa(j), K = Te(b);
    je(() => {
      z && (K == null || K());
    }, [z, K]);
    const ee = ($ = B.arrow) == null ? void 0 : $.x, U = (ne = B.arrow) == null ? void 0 : ne.y, te = ((Q = B.arrow) == null ? void 0 : Q.centerOffset) !== 0, [D, F] = m.useState();
    return je(() => {
      _ && F(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ o(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: z ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D,
          "--radix-popper-transform-origin": [
            (le = B.transformOrigin) == null ? void 0 : le.x,
            (ve = B.transformOrigin) == null ? void 0 : ve.y
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
        children: /* @__PURE__ */ o(
          vc,
          {
            scope: n,
            placedSide: T,
            onArrowChange: E,
            arrowX: ee,
            arrowY: U,
            shouldHideArrow: te,
            children: /* @__PURE__ */ o(
              ce.div,
              {
                "data-side": T,
                "data-align": X,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
na.displayName = hr;
var ra = "PopperArrow", bc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, oa = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, i = gc(ra, r), s = bc[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ o(
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
        children: /* @__PURE__ */ o(
          pc,
          {
            ...a,
            ref: n,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
oa.displayName = ra;
function _c(e) {
  return e !== null;
}
var wc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, _, N;
    const { placement: n, rects: r, middlewareData: a } = t, s = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = aa(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((_ = a.arrow) == null ? void 0 : _.x) ?? 0) + l / 2, h = (((N = a.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let b = "", v = "";
    return f === "bottom" ? (b = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (b = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, v = s ? d : `${h}px`) : f === "left" && (b = `${r.floating.width + c}px`, v = s ? d : `${h}px`), { data: { x: b, y: v } };
  }
});
function aa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var mr = Jo, ia = ta, sa = na, la = oa, yc = "Portal", vr = m.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [a, i] = m.useState(!1);
  je(() => i(!0), []);
  const s = n || a && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? Zn.createPortal(/* @__PURE__ */ o(ce.div, { ...r, ref: t }), s) : null;
});
vr.displayName = yc;
var Pn = "rovingFocusGroup.onEntryFocus", Nc = { bubbles: !1, cancelable: !0 }, Ot = "RovingFocusGroup", [zn, ca, Cc] = Qn(Ot), [xc, da] = qe(
  Ot,
  [Cc]
), [Sc, Rc] = xc(Ot), ua = m.forwardRef(
  (e, t) => /* @__PURE__ */ o(zn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o(zn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o(Ec, { ...e, ref: t }) }) })
);
ua.displayName = Ot;
var Ec = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: a = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: c,
    onEntryFocus: f,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = m.useRef(null), h = fe(t, p), b = nr(i), [v, g] = ot({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: Ot
  }), [_, N] = m.useState(!1), y = Te(f), C = ca(n), E = m.useRef(!1), [M, S] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(Pn, y), () => A.removeEventListener(Pn, y);
  }, [y]), /* @__PURE__ */ o(
    Sc,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: a,
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
      children: /* @__PURE__ */ o(
        ce.div,
        {
          tabIndex: _ || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: Y(e.onFocus, (A) => {
            const k = !E.current;
            if (A.target === A.currentTarget && k && !_) {
              const O = new CustomEvent(Pn, Nc);
              if (A.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const x = C().filter((j) => j.focusable), P = x.find((j) => j.active), W = x.find((j) => j.id === v), Z = [P, W, ...x].filter(
                  Boolean
                ).map((j) => j.ref.current);
                ha(Z, u);
              }
            }
            E.current = !1;
          }),
          onBlur: Y(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), fa = "RovingFocusGroupItem", pa = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: a = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = Ge(), f = i || c, u = Rc(fa, n), d = u.currentTabStopId === f, p = ca(n), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ o(
      zn.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: a,
        children: /* @__PURE__ */ o(
          ce.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (g) => {
              r ? u.onItemFocus(f) : g.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => u.onItemFocus(f)),
            onKeyDown: Y(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const _ = Ic(g, u.orientation, u.dir);
              if (_ !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (_ === "last") y.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && y.reverse();
                  const C = y.indexOf(g.currentTarget);
                  y = u.loop ? Ac(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => ha(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
pa.displayName = fa;
var Mc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Pc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ic(e, t, n) {
  const r = Pc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Mc[r];
}
function ha(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Ac(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Oc = ua, Tc = pa, kc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, st = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), zt = {}, In = 0, ma = function(e) {
  return e && (e.host || ma(e.parentNode));
}, Dc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ma(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Lc = function(e, t, n, r) {
  var a = Dc(t, Array.isArray(e) ? e : [e]);
  zt[n] || (zt[n] = /* @__PURE__ */ new WeakMap());
  var i = zt[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(a), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  a.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), b = h !== null && h !== "false", v = (st.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          st.set(p, v), i.set(p, g), s.push(p), v === 1 && b && $t.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), l.clear(), In++, function() {
    s.forEach(function(d) {
      var p = st.get(d) - 1, h = i.get(d) - 1;
      st.set(d, p), i.set(d, h), p || ($t.has(d) || d.removeAttribute(r), $t.delete(d)), h || d.removeAttribute(n);
    }), In--, In || (st = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), zt = {});
  };
}, Bc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = kc(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Lc(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function va(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Fc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ut = "right-scroll-bar-position", Gt = "width-before-scroll-bar", $c = "with-scroll-bars-hidden", zc = "--removed-body-scroll-bar-size";
function An(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function jc(e, t) {
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
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Wc = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Yr = /* @__PURE__ */ new WeakMap();
function Vc(e, t) {
  var n = jc(null, function(r) {
    return e.forEach(function(a) {
      return An(a, r);
    });
  });
  return Wc(function() {
    var r = Yr.get(n);
    if (r) {
      var a = new Set(r), i = new Set(e), s = n.current;
      a.forEach(function(l) {
        i.has(l) || An(l, null);
      }), i.forEach(function(l) {
        a.has(l) || An(l, s);
      });
    }
    Yr.set(n, e);
  }, [e]), n;
}
function Hc(e) {
  return e;
}
function Uc(e, t) {
  t === void 0 && (t = Hc);
  var n = [], r = !1, a = {
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
  return a;
}
function Gc(e) {
  e === void 0 && (e = {});
  var t = Uc(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var ga = function(e) {
  var t = e.sideCar, n = va(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, Ie({}, n));
};
ga.isSideCarExport = !0;
function Kc(e, t) {
  return e.useMedium(t), ga;
}
var ba = Gc(), On = function() {
}, fn = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: On,
    onWheelCapture: On,
    onTouchMoveCapture: On
  }), a = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, _ = e.as, N = _ === void 0 ? "div" : _, y = e.gapMode, C = va(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, M = Vc([n, t]), S = Ie(Ie({}, C), a);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(E, { sideCar: ba, removeScrollBar: f, shards: d, noRelative: h, noIsolation: b, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(l), Ie(Ie({}, S), { ref: M })) : m.createElement(N, Ie({}, S, { className: c, ref: M }), l)
  );
});
fn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fn.classNames = {
  fullWidth: Gt,
  zeroRight: Ut
};
var Yc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yc();
  return t && e.setAttribute("nonce", t), e;
}
function qc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Zc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Qc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xc()) && (qc(t, n), Zc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Jc = function() {
  var e = Qc();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, _a = function() {
  var e = Jc(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ed = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tn = function(e) {
  return parseInt(e || "", 10) || 0;
}, td = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tn(n), Tn(r), Tn(a)];
}, nd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ed;
  var t = td(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, rd = _a(), pt = "data-scroll-locked", od = function(e, t, n, r) {
  var a = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($c, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(pt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ut, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Gt, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ut, " .").concat(Ut, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Gt, " .").concat(Gt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(pt, `] {
    `).concat(zc, ": ").concat(l, `px;
  }
`);
}, Xr = function() {
  var e = parseInt(document.body.getAttribute(pt) || "0", 10);
  return isFinite(e) ? e : 0;
}, ad = function() {
  m.useEffect(function() {
    return document.body.setAttribute(pt, (Xr() + 1).toString()), function() {
      var e = Xr() - 1;
      e <= 0 ? document.body.removeAttribute(pt) : document.body.setAttribute(pt, e.toString());
    };
  }, []);
}, id = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  ad();
  var i = m.useMemo(function() {
    return nd(a);
  }, [a]);
  return m.createElement(rd, { styles: od(i, !t, a, n ? "" : "!important") });
}, jn = !1;
if (typeof window < "u")
  try {
    var jt = Object.defineProperty({}, "passive", {
      get: function() {
        return jn = !0, !0;
      }
    });
    window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
  } catch {
    jn = !1;
  }
var lt = jn ? { passive: !1 } : !1, sd = function(e) {
  return e.tagName === "TEXTAREA";
}, wa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !sd(e) && n[t] === "visible")
  );
}, ld = function(e) {
  return wa(e, "overflowY");
}, cd = function(e) {
  return wa(e, "overflowX");
}, qr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = ya(e, r);
    if (a) {
      var i = Na(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, dd = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ud = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ya = function(e, t) {
  return e === "v" ? ld(t) : cd(t);
}, Na = function(e, t) {
  return e === "v" ? dd(t) : ud(t);
}, fd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, pd = function(e, t, n, r, a) {
  var i = fd(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var h = Na(e, l), b = h[0], v = h[1], g = h[2], _ = v - g - i * b;
    (b || _) && ya(e, l) && (d += _, p += b);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, Wt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zr = function(e) {
  return [e.deltaX, e.deltaY];
}, Qr = function(e) {
  return e && "current" in e ? e.current : e;
}, hd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, md = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, vd = 0, ct = [];
function gd(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), a = m.useState(vd++)[0], i = m.useState(_a)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = Fc([e.lockRef.current], (e.shards || []).map(Qr), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = m.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var _ = Wt(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - _[0], C = "deltaY" in v ? v.deltaY : N[1] - _[1], E, M = v.target, S = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && S === "h" && M.type === "range")
      return !1;
    var A = window.getSelection(), k = A && A.anchorNode, O = k ? k === M || k.contains(M) : !1;
    if (O)
      return !1;
    var x = qr(S, M);
    if (!x)
      return !0;
    if (x ? E = S : (E = S === "v" ? "h" : "v", x = qr(S, M)), !x)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return pd(P, g, v, P === "h" ? y : C);
  }, []), c = m.useCallback(function(v) {
    var g = v;
    if (!(!ct.length || ct[ct.length - 1] !== i)) {
      var _ = "deltaY" in g ? Zr(g) : Wt(g), N = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && hd(E.delta, _);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(Qr).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(v, g, _, N) {
    var y = { name: v, delta: g, target: _, should: N, shadowParent: bd(_) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = Wt(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    f(v.type, Zr(v), v.target, l(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    f(v.type, Wt(v), v.target, l(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return ct.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, lt), document.addEventListener("touchmove", c, lt), document.addEventListener("touchstart", u, lt), function() {
      ct = ct.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, lt), document.removeEventListener("touchmove", c, lt), document.removeEventListener("touchstart", u, lt);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: md(a) }) : null,
    h ? m.createElement(id, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function bd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const _d = Kc(ba, gd);
var Ca = m.forwardRef(function(e, t) {
  return m.createElement(fn, Ie({}, e, { ref: t, sideCar: _d }));
});
Ca.classNames = fn.classNames;
var Wn = ["Enter", " "], wd = ["ArrowDown", "PageUp", "Home"], xa = ["ArrowUp", "PageDown", "End"], yd = [...wd, ...xa], Nd = {
  ltr: [...Wn, "ArrowRight"],
  rtl: [...Wn, "ArrowLeft"]
}, Cd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Tt = "Menu", [Rt, xd, Sd] = Qn(Tt), [at, Sa] = qe(Tt, [
  Sd,
  un,
  da
]), kt = un(), Ra = da(), [Ea, Qe] = at(Tt), [Rd, Dt] = at(Tt), Ma = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: i, modal: s = !0 } = e, l = kt(t), [c, f] = m.useState(null), u = m.useRef(!1), d = Te(i), p = nr(a);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ o(mr, { ...l, children: /* @__PURE__ */ o(
    Ea,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ o(
        Rd,
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
Ma.displayName = Tt;
var Ed = "MenuAnchor", gr = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = kt(n);
    return /* @__PURE__ */ o(ia, { ...a, ...r, ref: t });
  }
);
gr.displayName = Ed;
var br = "MenuPortal", [Md, Pa] = at(br, {
  forceMount: void 0
}), Ia = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, i = Qe(br, t);
  return /* @__PURE__ */ o(Md, { scope: t, forceMount: n, children: /* @__PURE__ */ o(Ze, { present: n || i.open, children: /* @__PURE__ */ o(vr, { asChild: !0, container: a, children: r }) }) });
};
Ia.displayName = br;
var xe = "MenuContent", [Pd, _r] = at(xe), Aa = m.forwardRef(
  (e, t) => {
    const n = Pa(xe, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, i = Qe(xe, e.__scopeMenu), s = Dt(xe, e.__scopeMenu);
    return /* @__PURE__ */ o(Rt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(Ze, { present: r || i.open, children: /* @__PURE__ */ o(Rt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ o(Id, { ...a, ref: t }) : /* @__PURE__ */ o(Ad, { ...a, ref: t }) }) }) });
  }
), Id = m.forwardRef(
  (e, t) => {
    const n = Qe(xe, e.__scopeMenu), r = m.useRef(null), a = fe(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Bc(i);
    }, []), /* @__PURE__ */ o(
      wr,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Y(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ad = m.forwardRef((e, t) => {
  const n = Qe(xe, e.__scopeMenu);
  return /* @__PURE__ */ o(
    wr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Od = /* @__PURE__ */ Kt("MenuContent.ScrollLock"), wr = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: a,
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
    } = e, g = Qe(xe, n), _ = Dt(xe, n), N = kt(n), y = Ra(n), C = xd(n), [E, M] = m.useState(null), S = m.useRef(null), A = fe(t, S, g.onContentChange), k = m.useRef(0), O = m.useRef(""), x = m.useRef(0), P = m.useRef(null), W = m.useRef("right"), H = m.useRef(0), Z = b ? Ca : m.Fragment, j = b ? { as: Od, allowPinchZoom: !0 } : void 0, z = (T) => {
      var $, ne;
      const X = O.current + T, K = C().filter((Q) => !Q.disabled), ee = document.activeElement, U = ($ = K.find((Q) => Q.ref.current === ee)) == null ? void 0 : $.textValue, te = K.map((Q) => Q.textValue), D = Hd(te, X, U), F = (ne = K.find((Q) => Q.textValue === D)) == null ? void 0 : ne.ref.current;
      (function Q(le) {
        O.current = le, window.clearTimeout(k.current), le !== "" && (k.current = window.setTimeout(() => Q(""), 1e3));
      })(X), F && setTimeout(() => F.focus());
    };
    m.useEffect(() => () => window.clearTimeout(k.current), []), el();
    const B = m.useCallback((T) => {
      var K, ee;
      return W.current === ((K = P.current) == null ? void 0 : K.side) && Gd(T, (ee = P.current) == null ? void 0 : ee.area);
    }, []);
    return /* @__PURE__ */ o(
      Pd,
      {
        scope: n,
        searchRef: O,
        onItemEnter: m.useCallback(
          (T) => {
            B(T) && T.preventDefault();
          },
          [B]
        ),
        onItemLeave: m.useCallback(
          (T) => {
            var X;
            B(T) || ((X = S.current) == null || X.focus(), M(null));
          },
          [B]
        ),
        onTriggerLeave: m.useCallback(
          (T) => {
            B(T) && T.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: x,
        onPointerGraceIntentChange: m.useCallback((T) => {
          P.current = T;
        }, []),
        children: /* @__PURE__ */ o(Z, { ...j, children: /* @__PURE__ */ o(
          Bo,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: Y(i, (T) => {
              var X;
              T.preventDefault(), (X = S.current) == null || X.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ o(
              ir,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ o(
                  Oc,
                  {
                    asChild: !0,
                    ...y,
                    dir: _.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: Y(c, (T) => {
                      _.isUsingKeyboardRef.current || T.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ o(
                      sa,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ya(g.open),
                        "data-radix-menu-content": "",
                        dir: _.dir,
                        ...N,
                        ...v,
                        ref: A,
                        style: { outline: "none", ...v.style },
                        onKeyDown: Y(v.onKeyDown, (T) => {
                          const K = T.target.closest("[data-radix-menu-content]") === T.currentTarget, ee = T.ctrlKey || T.altKey || T.metaKey, U = T.key.length === 1;
                          K && (T.key === "Tab" && T.preventDefault(), !ee && U && z(T.key));
                          const te = S.current;
                          if (T.target !== te || !yd.includes(T.key)) return;
                          T.preventDefault();
                          const F = C().filter(($) => !$.disabled).map(($) => $.ref.current);
                          xa.includes(T.key) && F.reverse(), Wd(F);
                        }),
                        onBlur: Y(e.onBlur, (T) => {
                          T.currentTarget.contains(T.target) || (window.clearTimeout(k.current), O.current = "");
                        }),
                        onPointerMove: Y(
                          e.onPointerMove,
                          Et((T) => {
                            const X = T.target, K = H.current !== T.clientX;
                            if (T.currentTarget.contains(X) && K) {
                              const ee = T.clientX > H.current ? "right" : "left";
                              W.current = ee, H.current = T.clientX;
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
Aa.displayName = xe;
var Td = "MenuGroup", yr = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(ce.div, { role: "group", ...r, ref: t });
  }
);
yr.displayName = Td;
var kd = "MenuLabel", Oa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(ce.div, { ...r, ref: t });
  }
);
Oa.displayName = kd;
var Jt = "MenuItem", Jr = "menu.itemSelect", pn = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...a } = e, i = m.useRef(null), s = Dt(Jt, e.__scopeMenu), l = _r(Jt, e.__scopeMenu), c = fe(t, i), f = m.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(Jr, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Jr, (h) => r == null ? void 0 : r(h), { once: !0 }), bo(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ o(
      Ta,
      {
        ...a,
        ref: c,
        disabled: n,
        onClick: Y(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), f.current = !0;
        },
        onPointerUp: Y(e.onPointerUp, (d) => {
          var p;
          f.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: Y(e.onKeyDown, (d) => {
          const p = l.searchRef.current !== "";
          n || p && d.key === " " || Wn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
pn.displayName = Jt;
var Ta = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: a, ...i } = e, s = _r(Jt, n), l = Ra(n), c = m.useRef(null), f = fe(t, c), [u, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const b = c.current;
      b && h((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ o(
      Rt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: a ?? p,
        children: /* @__PURE__ */ o(Tc, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ o(
          ce.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: Y(
              e.onPointerMove,
              Et((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Y(
              e.onPointerLeave,
              Et((b) => s.onItemLeave(b))
            ),
            onFocus: Y(e.onFocus, () => d(!0)),
            onBlur: Y(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Dd = "MenuCheckboxItem", ka = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...a } = e;
    return /* @__PURE__ */ o($a, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ o(
      pn,
      {
        role: "menuitemcheckbox",
        "aria-checked": en(n) ? "mixed" : n,
        ...a,
        ref: t,
        "data-state": xr(n),
        onSelect: Y(
          a.onSelect,
          () => r == null ? void 0 : r(en(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ka.displayName = Dd;
var Da = "MenuRadioGroup", [Ld, Bd] = at(
  Da,
  { value: void 0, onValueChange: () => {
  } }
), La = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...a } = e, i = Te(r);
    return /* @__PURE__ */ o(Ld, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ o(yr, { ...a, ref: t }) });
  }
);
La.displayName = Da;
var Ba = "MenuRadioItem", Fa = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, a = Bd(Ba, e.__scopeMenu), i = n === a.value;
    return /* @__PURE__ */ o($a, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ o(
      pn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": xr(i),
        onSelect: Y(
          r.onSelect,
          () => {
            var s;
            return (s = a.onValueChange) == null ? void 0 : s.call(a, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Fa.displayName = Ba;
var Nr = "MenuItemIndicator", [$a, Fd] = at(
  Nr,
  { checked: !1 }
), za = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...a } = e, i = Fd(Nr, n);
    return /* @__PURE__ */ o(
      Ze,
      {
        present: r || en(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ o(
          ce.span,
          {
            ...a,
            ref: t,
            "data-state": xr(i.checked)
          }
        )
      }
    );
  }
);
za.displayName = Nr;
var $d = "MenuSeparator", ja = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(
      ce.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
ja.displayName = $d;
var zd = "MenuArrow", Wa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = kt(n);
    return /* @__PURE__ */ o(la, { ...a, ...r, ref: t });
  }
);
Wa.displayName = zd;
var Cr = "MenuSub", [jd, Va] = at(Cr), Ha = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: a } = e, i = Qe(Cr, t), s = kt(t), [l, c] = m.useState(null), [f, u] = m.useState(null), d = Te(a);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ o(mr, { ...s, children: /* @__PURE__ */ o(
    Ea,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ o(
        jd,
        {
          scope: t,
          contentId: Ge(),
          triggerId: Ge(),
          trigger: l,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Ha.displayName = Cr;
var Nt = "MenuSubTrigger", Ua = m.forwardRef(
  (e, t) => {
    const n = Qe(Nt, e.__scopeMenu), r = Dt(Nt, e.__scopeMenu), a = Va(Nt, e.__scopeMenu), i = _r(Nt, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ o(gr, { asChild: !0, ...f, children: /* @__PURE__ */ o(
      Ta,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": a.contentId,
        "data-state": Ya(n.open),
        ...e,
        ref: nn(t, a.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Y(
          e.onPointerMove,
          Et((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: Y(
          e.onPointerLeave,
          Et((d) => {
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
        onKeyDown: Y(e.onKeyDown, (d) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || Nd[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Ua.displayName = Nt;
var Ga = "MenuSubContent", Ka = m.forwardRef(
  (e, t) => {
    const n = Pa(xe, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, i = Qe(xe, e.__scopeMenu), s = Dt(xe, e.__scopeMenu), l = Va(Ga, e.__scopeMenu), c = m.useRef(null), f = fe(t, c);
    return /* @__PURE__ */ o(Rt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(Ze, { present: r || i.open, children: /* @__PURE__ */ o(Rt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(
      wr,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...a,
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
        onFocusOutside: Y(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: Y(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: Y(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = Cd[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ka.displayName = Ga;
function Ya(e) {
  return e ? "open" : "closed";
}
function en(e) {
  return e === "indeterminate";
}
function xr(e) {
  return en(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Vd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Hd(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Vd(e, Math.max(i, 0));
  a.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(a.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Ud(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (a = !a);
  }
  return a;
}
function Gd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ud(n, t);
}
function Et(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Kd = Ma, Yd = gr, Xd = Ia, qd = Aa, Zd = yr, Qd = Oa, Jd = pn, eu = ka, tu = La, nu = Fa, ru = za, ou = ja, au = Wa, iu = Ha, su = Ua, lu = Ka, hn = "DropdownMenu", [cu] = qe(
  hn,
  [Sa]
), me = Sa(), [du, Xa] = cu(hn), qa = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: a,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = me(t), f = m.useRef(null), [u, d] = ot({
    prop: a,
    defaultProp: i ?? !1,
    onChange: s,
    caller: hn
  });
  return /* @__PURE__ */ o(
    du,
    {
      scope: t,
      triggerId: Ge(),
      triggerRef: f,
      contentId: Ge(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ o(Kd, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
qa.displayName = hn;
var Za = "DropdownMenuTrigger", Qa = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, i = Xa(Za, n), s = me(n);
    return /* @__PURE__ */ o(Yd, { asChild: !0, ...s, children: /* @__PURE__ */ o(
      ce.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...a,
        ref: nn(t, i.triggerRef),
        onPointerDown: Y(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: Y(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Qa.displayName = Za;
var uu = "DropdownMenuPortal", Ja = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = me(t);
  return /* @__PURE__ */ o(Xd, { ...r, ...n });
};
Ja.displayName = uu;
var ei = "DropdownMenuContent", ti = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = Xa(ei, n), i = me(n), s = m.useRef(!1);
    return /* @__PURE__ */ o(
      qd,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = a.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: Y(e.onInteractOutside, (l) => {
          const c = l.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || f;
          (!a.modal || u) && (s.current = !0);
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
ti.displayName = ei;
var fu = "DropdownMenuGroup", ni = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
    return /* @__PURE__ */ o(Zd, { ...a, ...r, ref: t });
  }
);
ni.displayName = fu;
var pu = "DropdownMenuLabel", ri = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
    return /* @__PURE__ */ o(Qd, { ...a, ...r, ref: t });
  }
);
ri.displayName = pu;
var hu = "DropdownMenuItem", oi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
    return /* @__PURE__ */ o(Jd, { ...a, ...r, ref: t });
  }
);
oi.displayName = hu;
var mu = "DropdownMenuCheckboxItem", ai = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(eu, { ...a, ...r, ref: t });
});
ai.displayName = mu;
var vu = "DropdownMenuRadioGroup", ii = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(tu, { ...a, ...r, ref: t });
});
ii.displayName = vu;
var gu = "DropdownMenuRadioItem", si = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(nu, { ...a, ...r, ref: t });
});
si.displayName = gu;
var bu = "DropdownMenuItemIndicator", li = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(ru, { ...a, ...r, ref: t });
});
li.displayName = bu;
var _u = "DropdownMenuSeparator", ci = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(ou, { ...a, ...r, ref: t });
});
ci.displayName = _u;
var wu = "DropdownMenuArrow", yu = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
    return /* @__PURE__ */ o(au, { ...a, ...r, ref: t });
  }
);
yu.displayName = wu;
var Nu = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: a, defaultOpen: i } = e, s = me(t), [l, c] = ot({
    prop: r,
    defaultProp: i ?? !1,
    onChange: a,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ o(iu, { ...s, open: l, onOpenChange: c, children: n });
}, Cu = "DropdownMenuSubTrigger", di = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(su, { ...a, ...r, ref: t });
});
di.displayName = Cu;
var xu = "DropdownMenuSubContent", ui = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = me(n);
  return /* @__PURE__ */ o(
    lu,
    {
      ...a,
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
ui.displayName = xu;
var fi = qa, pi = Qa, Sr = Ja, hi = ti, Su = ni, Ru = ri, mi = oi, Eu = ai, Mu = ii, Pu = si, vi = li, Iu = ci, Au = Nu, Ou = di, Tu = ui;
const gi = R.forwardRef(
  function({
    orientation: t = "horizontal",
    variant: n = "full",
    children: r,
    className: a,
    ...i
  }, s) {
    const l = t === "horizontal" && !r, c = l ? {} : {
      role: "separator",
      "aria-orientation": t === "vertical" ? "vertical" : void 0,
      "aria-label": typeof r == "string" ? r : void 0
    }, f = ["divider", a].filter(Boolean).join(" ");
    return l ? /* @__PURE__ */ o(
      "hr",
      {
        ref: s,
        className: f,
        "data-orientation": t,
        "data-variant": n,
        ...i
      }
    ) : /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: f,
        "data-orientation": t,
        "data-variant": n,
        ...c,
        ...i,
        children: r && /* @__PURE__ */ o("span", { className: "divider__label", "aria-hidden": "true", children: r })
      }
    );
  }
), ke = fi, De = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    pi,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Le = R.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: a, ...i }, s) {
  return /* @__PURE__ */ o(Sr, { container: a, children: /* @__PURE__ */ o(
    hi,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), bi = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    Ru,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), ku = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ o(Su, { ref: n, ...t });
}), ie = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    mi,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Kp = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    Eu,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ o(vi, { children: /* @__PURE__ */ o(ze, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), Yp = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ o(Mu, { ref: n, ...t });
}), Xp = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    Pu,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ o(vi, { children: /* @__PURE__ */ o(ze, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), vt = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(Iu, { asChild: !0, ...n, children: /* @__PURE__ */ o(
    gi,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" ")
    }
  ) });
}), qp = Au, Zp = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    Ou,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-sub-trigger", t].filter(Boolean).join(" "),
      ...r,
      children: [
        n,
        /* @__PURE__ */ o(ht, { size: 16, className: "flyout-menu-sub-trigger__chevron", "aria-hidden": !0 })
      ]
    }
  );
}), Qp = R.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...a }, i) {
  return /* @__PURE__ */ o(Sr, { container: r, children: /* @__PURE__ */ o(
    Tu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...a
    }
  ) });
}), Jp = R.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ o(
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
function eo({ type: e }) {
  return /* @__PURE__ */ o("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ o(ht, { size: 16 }) : /* @__PURE__ */ o("span", { children: "/" }) });
}
function Du({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(ke, { children: [
    /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        children: /* @__PURE__ */ o(rt, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ o(Le, { sideOffset: 4, align: "start", children: e.map((n, r) => /* @__PURE__ */ o(
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
function Lu({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(ke, { children: [
    /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ w(
      "button",
      {
        className: "breadcrumbs__menu-trigger",
        "aria-haspopup": "menu",
        title: e.label,
        children: [
          /* @__PURE__ */ o("span", { className: "breadcrumbs__label", children: e.label }),
          /* @__PURE__ */ o(ht, { size: 12, className: "breadcrumbs__menu-chevron" })
        ]
      }
    ) }),
    /* @__PURE__ */ o(Le, { sideOffset: 4, align: "start", children: e.menu.map((n, r) => /* @__PURE__ */ o(
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
function Bu({
  item: e,
  onNavigate: t
}) {
  if (e.current)
    return /* @__PURE__ */ o(
      "span",
      {
        className: "breadcrumbs__current",
        "aria-current": "page",
        title: e.label,
        children: /* @__PURE__ */ o("span", { className: "breadcrumbs__label", children: e.label })
      }
    );
  if (e.menu && e.menu.length > 0)
    return /* @__PURE__ */ o(Lu, { item: e, onNavigate: t });
  const n = (r) => {
    t && e.href && (r.preventDefault(), t(e.href));
  };
  return /* @__PURE__ */ o(
    "a",
    {
      className: "breadcrumbs__link",
      href: e.href,
      title: e.label,
      onClick: n,
      children: /* @__PURE__ */ o("span", { className: "breadcrumbs__label", children: e.label })
    }
  );
}
function Fu({
  items: e,
  separator: t = "chevron",
  maxItems: n,
  onNavigate: r,
  className: a
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
      /* @__PURE__ */ o(eo, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ o("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ o(Du, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ o(eo, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ o("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ o(Bu, { item: f, onNavigate: r }) }, u)
    );
  }), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: ["breadcrumbs", a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: "breadcrumbs__list", children: c })
    }
  );
}
function $u() {
  return /* @__PURE__ */ o("span", { className: "button__spinner", "aria-hidden": "true" });
}
const he = R.forwardRef(
  function({
    variant: t = "fill",
    size: n = "medium",
    color: r = "primary",
    iconStart: a,
    iconEnd: i,
    loading: s = !1,
    disabled: l = !1,
    children: c,
    className: f,
    ...u
  }, d) {
    const p = c == null, h = s || !!a, b = !s && !!i;
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
          (s || a) && (s ? /* @__PURE__ */ o($u, {}) : a),
          c,
          !s && i
        ]
      }
    );
  }
), we = R.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ o(he, { ref: r, iconStart: t, ...n });
  }
), zu = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function ju(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function Wu(e) {
  return e === "primary" ? "primary" : "neutral";
}
function to({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = ju(e.type), a = Wu(e.type);
  return t && e.icon ? /* @__PURE__ */ o(
    we,
    {
      icon: e.icon,
      "aria-label": e.label,
      variant: r,
      color: a,
      size: n,
      disabled: e.disabled,
      loading: e.loading,
      onClick: e.onClick,
      title: e.tooltip ?? e.label
    }
  ) : /* @__PURE__ */ o(
    he,
    {
      variant: r,
      color: a,
      size: n,
      iconStart: e.icon,
      disabled: e.disabled,
      loading: e.loading,
      onClick: e.onClick,
      children: e.label
    }
  );
}
function Vu({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ w(ke, { children: [
    /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
      we,
      {
        icon: /* @__PURE__ */ o(uo, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ o(
      Le,
      {
        sideOffset: 4,
        align: t === "right" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ w(
          ie,
          {
            disabled: n.disabled,
            onSelect: n.disabled ? void 0 : n.onClick,
            children: [
              n.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: n.icon }),
              n.label
            ]
          },
          n.id
        ))
      }
    )
  ] });
}
function Hu({
  actions: e,
  variant: t = "full",
  iconOnly: n = !1,
  alignment: r = "right",
  className: a,
  style: i
}) {
  const s = (() => {
    const N = [...e].reverse().findIndex((y) => y.type === "primary");
    return N === -1 ? e.length - 1 : e.length - 1 - N;
  })(), l = e[s], c = e.filter((N, y) => y !== s), f = zu[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const h = d.length > 0 ? /* @__PURE__ */ o(
    Vu,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, v = (r === "left" ? [...u].reverse() : u).map((N) => /* @__PURE__ */ o(to, { action: N, iconOnly: n }, N.id)), g = /* @__PURE__ */ o(to, { action: l, iconOnly: n }, l.id), _ = r === "right" ? [h, ...v, g] : [g, ...v, h];
  return /* @__PURE__ */ o(
    "div",
    {
      role: "toolbar",
      "aria-label": "Page actions",
      className: ["buttons-toolbar", a].filter(Boolean).join(" "),
      "data-variant": t,
      "data-alignment": r,
      style: i,
      children: _
    }
  );
}
function Uu() {
  return /* @__PURE__ */ o(
    "svg",
    {
      className: "checkbox__icon checkbox__icon--check",
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(
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
function Gu() {
  return /* @__PURE__ */ o(
    "svg",
    {
      className: "checkbox__icon checkbox__icon--dash",
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(
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
const eh = R.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: a, id: i, className: s, ...l }, c) {
    const f = ae(), u = i ?? f, d = se(null);
    return Yn(c, () => d.current), ue(() => {
      d.current && (d.current.indeterminate = n ?? !1);
    }, [n]), /* @__PURE__ */ w(
      "label",
      {
        htmlFor: u,
        className: ["checkbox", s].filter(Boolean).join(" "),
        "data-disabled": a || void 0,
        "data-validation": r,
        children: [
          /* @__PURE__ */ w("span", { className: "checkbox__control", children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: d,
                id: u,
                type: "checkbox",
                className: "checkbox__input",
                disabled: a,
                ...l
              }
            ),
            /* @__PURE__ */ w("span", { className: "checkbox__box", "aria-hidden": "true", children: [
              /* @__PURE__ */ o(Uu, {}),
              /* @__PURE__ */ o(Gu, {})
            ] })
          ] }),
          t && /* @__PURE__ */ o("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), th = R.forwardRef(
  function({ legend: t, required: n, hint: r, validation: a, validationMessage: i, children: s, className: l }, c) {
    const f = ae(), u = ae();
    return /* @__PURE__ */ w(
      "fieldset",
      {
        ref: c,
        className: ["checkbox-group", l].filter(Boolean).join(" "),
        "data-validation": a,
        "aria-describedby": [r ? f : null, i ? u : null].filter(Boolean).join(" ") || void 0,
        children: [
          /* @__PURE__ */ w("legend", { className: "checkbox-group__legend", children: [
            t,
            n && /* @__PURE__ */ o("span", { className: "checkbox-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          r && /* @__PURE__ */ o("p", { id: f, className: "checkbox-group__hint", children: r }),
          /* @__PURE__ */ o("div", { className: "checkbox-group__items", children: s }),
          i && /* @__PURE__ */ o(
            "p",
            {
              id: u,
              className: "checkbox-group__message",
              role: a === "negative" ? "alert" : void 0,
              children: i
            }
          )
        ]
      }
    );
  }
), Mt = R.forwardRef(
  function({ count: t, variant: n = "fill", size: r = "medium", color: a = "primary", className: i, ...s }, l) {
    const c = t > 99 ? "99+" : String(t);
    return /* @__PURE__ */ o(
      "span",
      {
        ref: l,
        className: ["counter", i].filter(Boolean).join(" "),
        "data-variant": n,
        "data-size": r,
        "data-color": a,
        ...s,
        children: c
      }
    );
  }
), Ku = { small: 12, medium: 16 }, dt = R.forwardRef(
  function({
    label: t,
    variant: n,
    icon: r,
    count: a,
    size: i = "medium",
    disabled: s,
    selected: l,
    defaultSelected: c = !1,
    onChange: f,
    onRemove: u,
    className: d
  }, p) {
    const [h, b] = J(c), v = l !== void 0, g = v ? l : h, _ = Ku[i];
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
            g && /* @__PURE__ */ o(
              ze,
              {
                className: "chip__check",
                size: _,
                "aria-hidden": "true"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
            /* @__PURE__ */ o("span", { className: "chip__label", children: t }),
            a !== void 0 && /* @__PURE__ */ o(
              Mt,
              {
                count: a,
                variant: "outline",
                color: "neutral",
                size: "medium",
                "aria-label": `${a} items`
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
          r && /* @__PURE__ */ o("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
          /* @__PURE__ */ o("span", { className: "chip__label", children: t }),
          a !== void 0 && /* @__PURE__ */ o(
            Mt,
            {
              count: a,
              variant: "outline",
              color: "neutral",
              size: "small",
              "aria-label": `${a} items`
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: "chip__remove",
              "aria-label": `Remove ${t}`,
              disabled: s,
              onClick: u,
              tabIndex: s ? -1 : void 0,
              children: /* @__PURE__ */ o(Be, { size: _, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function nh({
  "aria-label": e,
  gap: t = "default",
  children: n,
  className: r
}) {
  return /* @__PURE__ */ o(
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
function Yu({ text: e, id: t, children: n, className: r }) {
  return /* @__PURE__ */ o(
    "p",
    {
      id: t,
      className: ["hint", r].filter(Boolean).join(" "),
      children: n ?? e
    }
  );
}
const Xu = {
  positive: fo,
  notice: _t,
  negative: Xe
};
function qu({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const a = Xu[t], i = t === "negative";
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
        /* @__PURE__ */ o(a, { size: 16, "aria-hidden": "true", className: "validation-message__icon" }),
        e
      ]
    }
  );
}
function Zu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function Qu(e) {
  return e.flatMap((t) => t.items);
}
const rh = R.forwardRef(
  function(t, n) {
    const {
      options: r,
      label: a,
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
    } = t, g = t.selection === "multi", _ = g ? t.chipPlacement ?? "below" : "inline", N = ae(), y = b ?? `combobox-${N}`, C = `${y}-listbox`, E = `${y}-hint`, M = `${y}-message`, S = se(null), A = se(null), k = se(null), O = se([]), x = se(null), P = se([]), [W, H] = J(0), [Z, j] = J(0);
    ue(() => {
      n && (typeof n == "function" ? n(A.current) : n.current = A.current);
    }, [n]);
    const [z, B] = J(!1), [T, X] = J(""), [K, ee] = J(-1), U = t.value !== void 0, [te, D] = J(() => {
      if (g) return t.value ?? [];
      const I = t.value;
      return I ? [I] : [];
    }), F = U ? g ? t.value ?? [] : t.value ? [t.value] : [] : te, $ = ut(
      () => F.map((I) => r.find((G) => G.value === I)).filter(Boolean),
      [F, r]
    ), ne = ut(() => {
      const I = T.toLowerCase().trim(), G = I ? r.filter((oe) => oe.label.toLowerCase().includes(I)) : r;
      return Zu(G);
    }, [r, T]), Q = ut(() => Qu(ne), [ne]), le = ut(
      () => r.filter((I) => !I.disabled).map((I) => I.value),
      [r]
    ), ve = ut(
      () => le.length > 0 && le.every((I) => F.includes(I)),
      [le, F]
    ), L = de(
      (I) => F.includes(I),
      [F]
    ), V = de(
      (I) => {
        var G, oe;
        U || D(I), g ? (G = t.onChange) == null || G.call(t, I) : (oe = t.onChange) == null || oe.call(t, I[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [U, g]
    ), q = de(
      (I) => {
        var G;
        if (!I.disabled)
          if (g) {
            const oe = L(I.value) ? F.filter((_e) => _e !== I.value) : [...F, I.value];
            V(oe), X(""), (G = A.current) == null || G.focus();
          } else
            V([I.value]), X(""), B(!1), ee(-1);
      },
      [g, L, F, V]
    ), ge = de(
      (I) => {
        V(F.filter((G) => G !== I));
      },
      [F, V]
    ), re = de(() => {
      const I = k.current;
      if (!I) return;
      const G = O.current;
      if (G.length === 0) {
        H(0);
        return;
      }
      const oe = I.clientWidth, _e = 8;
      if (G.reduce((Re, $e, Nn) => Re + $e + (Nn > 0 ? _e : 0), 0) <= oe) {
        H(0);
        return;
      }
      let Je = oe - 72 - _e, et = 0;
      for (let Re = G.length - 1; Re >= 0; Re--) {
        const $e = G[Re] + (et > 0 ? _e : 0);
        if (Je >= $e)
          Je -= $e, et++;
        else break;
      }
      H(G.length - et);
    }, []);
    Ct(() => {
      if (_ !== "inline" || !k.current) {
        H(0);
        return;
      }
      const I = Array.from(
        k.current.querySelectorAll("[data-chip-ghost]")
      );
      O.current = I.map((G) => G.getBoundingClientRect().width), re();
    }, [$, _, re]), ue(() => {
      if (_ !== "inline" || !k.current) return;
      const I = new ResizeObserver(re);
      return I.observe(k.current), () => I.disconnect();
    }, [_, re]);
    const pe = de(() => {
      const I = x.current;
      if (!I) return;
      const G = P.current;
      if (G.length === 0) {
        j(0);
        return;
      }
      const oe = I.clientWidth, _e = 8;
      if (G.reduce((Re, $e, Nn) => Re + $e + (Nn > 0 ? _e : 0), 0) <= oe) {
        j(0);
        return;
      }
      let Je = oe - 72 - _e, et = 0;
      for (let Re = G.length - 1; Re >= 0; Re--) {
        const $e = G[Re] + (et > 0 ? _e : 0);
        if (Je >= $e)
          Je -= $e, et++;
        else break;
      }
      j(G.length - et);
    }, []);
    Ct(() => {
      if (_ !== "below" || !x.current) {
        j(0);
        return;
      }
      const I = Array.from(
        x.current.querySelectorAll("[data-chip-ghost]")
      );
      P.current = I.map((G) => G.getBoundingClientRect().width), pe();
    }, [$, _, pe]), ue(() => {
      if (_ !== "below" || !x.current) return;
      const I = new ResizeObserver(pe);
      return I.observe(x.current), () => I.disconnect();
    }, [_, pe]);
    const be = () => {
      d || (B(!0), ee(-1));
    }, Se = () => {
      B(!1), X(""), ee(-1);
    };
    ue(() => {
      if (!z) return;
      const I = (G) => {
        var oe;
        (oe = S.current) != null && oe.contains(G.target) || Se();
      };
      return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
    }, [z]);
    const gn = !g && !z && $.length > 0 ? $[0].label : T, bn = (I) => {
      switch (I.key) {
        case "ArrowDown": {
          if (I.preventDefault(), !z) {
            be();
            return;
          }
          ee((G) => Math.min(G + 1, Q.length - 1));
          break;
        }
        case "ArrowUp": {
          I.preventDefault(), ee((G) => Math.max(G - 1, 0));
          break;
        }
        case "Enter": {
          if (I.preventDefault(), !z) {
            be();
            return;
          }
          K >= 0 && Q[K] && q(Q[K]);
          break;
        }
        case "Escape": {
          I.preventDefault(), Se();
          break;
        }
        case "Backspace": {
          g && T === "" && F.length > 0 && ge(F[F.length - 1]);
          break;
        }
      }
    };
    ue(() => {
      ee(-1);
    }, [T]);
    const _n = se(null);
    ue(() => {
      if (K < 0 || !_n.current) return;
      const I = _n.current.querySelector(`[data-index="${K}"]`);
      I == null || I.scrollIntoView({ block: "nearest" });
    }, [K]);
    const ji = K >= 0 && Q[K] ? `${C}-${Q[K].value}` : void 0, wn = l === "negative", Wi = [
      s ? E : null,
      c && !wn ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: S,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": z || void 0,
        "data-disabled": d || void 0,
        children: [
          a && /* @__PURE__ */ w("label", { className: "combobox__label", htmlFor: y, children: [
            a,
            p && /* @__PURE__ */ o("span", { className: "combobox__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ w("div", { className: g && _ === "inline" ? "combobox__field-row" : void 0, children: [
            /* @__PURE__ */ w("div", { className: "combobox__field-wrap", children: [
              /* @__PURE__ */ w(
                "div",
                {
                  className: "combobox__field",
                  onClick: () => {
                    var I;
                    z || be(), (I = A.current) == null || I.focus();
                  },
                  children: [
                    !g && $.length > 0 && $[0].icon && /* @__PURE__ */ o("span", { className: "combobox__field-leading", "aria-hidden": "true", children: $[0].icon }),
                    /* @__PURE__ */ o(
                      "input",
                      {
                        ref: A,
                        id: y,
                        type: "text",
                        role: "combobox",
                        className: "combobox__input",
                        value: gn,
                        placeholder: g && $.length > 0 ? "" : i,
                        disabled: d,
                        required: p,
                        "aria-expanded": z,
                        "aria-controls": z ? C : void 0,
                        "aria-activedescendant": ji,
                        "aria-autocomplete": "list",
                        "aria-describedby": Wi,
                        "aria-invalid": wn && c ? !0 : void 0,
                        "aria-errormessage": wn && c ? M : void 0,
                        "aria-required": p,
                        autoComplete: "off",
                        onChange: (I) => {
                          X(I.target.value), z || be(), !g && I.target.value === "" && F.length > 0 && V([]);
                        },
                        onFocus: be,
                        onKeyDown: bn
                      }
                    ),
                    /* @__PURE__ */ o(
                      It,
                      {
                        className: "combobox__chevron",
                        size: 16,
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              z && /* @__PURE__ */ w("div", { className: "combobox__panel", children: [
                /* @__PURE__ */ o(
                  "ul",
                  {
                    ref: _n,
                    id: C,
                    role: "listbox",
                    className: "combobox__listbox",
                    "aria-label": a,
                    "aria-multiselectable": g || void 0,
                    children: Q.length === 0 ? /* @__PURE__ */ o("li", { className: "combobox__no-results", role: "presentation", children: h }) : ne.map((I, G) => /* @__PURE__ */ w(R.Fragment, { children: [
                      I.name && /* @__PURE__ */ o("li", { role: "presentation", className: "combobox__group-header", children: I.name }),
                      G > 0 && !I.name && /* @__PURE__ */ o("li", { role: "separator", className: "combobox__group-divider" }),
                      I.items.map((oe) => {
                        const _e = Q.indexOf(oe), it = L(oe.value), yn = _e === K;
                        return /* @__PURE__ */ w(
                          "li",
                          {
                            id: `${C}-${oe.value}`,
                            role: "option",
                            "aria-selected": it,
                            "aria-disabled": oe.disabled || void 0,
                            className: "combobox__option",
                            "data-index": _e,
                            "data-active": yn || void 0,
                            "data-selected": it || void 0,
                            "data-disabled": oe.disabled || void 0,
                            onMouseDown: (Je) => {
                              Je.preventDefault(), q(oe);
                            },
                            onMouseEnter: () => ee(_e),
                            children: [
                              !g && /* @__PURE__ */ o(
                                ze,
                                {
                                  className: "combobox__option-selected-icon",
                                  size: 16,
                                  "aria-hidden": "true",
                                  style: { visibility: it ? "visible" : "hidden" }
                                }
                              ),
                              g && /* @__PURE__ */ o("span", { className: "combobox__option-check", "aria-hidden": "true", children: it && /* @__PURE__ */ o(ze, { size: 12 }) }),
                              oe.icon && /* @__PURE__ */ o("span", { className: "combobox__option-icon", "aria-hidden": "true", children: oe.icon }),
                              /* @__PURE__ */ w("span", { className: "combobox__option-content", children: [
                                /* @__PURE__ */ o("span", { className: "combobox__option-label", children: oe.label }),
                                oe.description && /* @__PURE__ */ o("span", { className: "combobox__option-description", children: oe.description })
                              ] })
                            ]
                          },
                          oe.value
                        );
                      })
                    ] }, I.name ?? `__group-${G}`))
                  }
                ),
                g && /* @__PURE__ */ w("div", { className: "combobox__footer", children: [
                  /* @__PURE__ */ o(
                    he,
                    {
                      variant: "outline",
                      color: "neutral",
                      size: "small",
                      disabled: F.length === 0,
                      onMouseDown: (I) => {
                        I.preventDefault(), V([]);
                      },
                      children: "Clear"
                    }
                  ),
                  /* @__PURE__ */ o(
                    he,
                    {
                      variant: "fill",
                      color: "primary",
                      size: "small",
                      disabled: ve,
                      onMouseDown: (I) => {
                        I.preventDefault(), V(le);
                      },
                      children: "Select all"
                    }
                  )
                ] })
              ] })
            ] }),
            g && _ === "inline" && $.length > 0 && /* @__PURE__ */ w("div", { ref: k, className: "combobox__chips combobox__chips--inline", children: [
              $.map((I) => /* @__PURE__ */ o("span", { "data-chip-ghost": !0, "aria-hidden": "true", className: "combobox__chip-ghost", children: /* @__PURE__ */ o(dt, { variant: "removable", label: I.label, size: "small" }) }, `ghost-${I.value}`)),
              W > 0 && /* @__PURE__ */ o(
                dt,
                {
                  variant: "removable",
                  label: `+${W}`,
                  size: "small",
                  onRemove: d ? void 0 : () => {
                    const I = $.slice(0, W).map((G) => G.value);
                    V(F.filter((G) => !I.includes(G)));
                  }
                }
              ),
              $.slice(W).map((I) => /* @__PURE__ */ o(
                dt,
                {
                  variant: "removable",
                  label: I.label,
                  size: "small",
                  onRemove: d ? void 0 : () => ge(I.value)
                },
                I.value
              ))
            ] })
          ] }),
          s && /* @__PURE__ */ o(Yu, { id: E, text: s }),
          c && l && /* @__PURE__ */ o(qu, { id: M, message: c, variant: l }),
          g && _ === "below" && $.length > 0 && /* @__PURE__ */ w("div", { ref: x, className: "combobox__chips", children: [
            $.map((I) => /* @__PURE__ */ o("span", { "data-chip-ghost": !0, "aria-hidden": "true", className: "combobox__chip-ghost", children: /* @__PURE__ */ o(dt, { variant: "removable", label: I.label, size: "small" }) }, `ghost-below-${I.value}`)),
            Z > 0 && /* @__PURE__ */ o(
              dt,
              {
                variant: "removable",
                label: `+${Z}`,
                size: "small",
                onRemove: d ? void 0 : () => {
                  const I = $.slice(0, Z).map((G) => G.value);
                  V(F.filter((G) => !I.includes(G)));
                }
              }
            ),
            $.slice(Z).map((I) => /* @__PURE__ */ o(
              dt,
              {
                variant: "removable",
                label: I.label,
                size: "small",
                onRemove: d ? void 0 : () => ge(I.value)
              },
              I.value
            ))
          ] })
        ]
      }
    );
  }
);
function Ju(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? "";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function ef(e) {
  return Array.from(e.values()).flat();
}
function oh({
  label: e,
  placeholder: t = "Select...",
  value: n,
  defaultValue: r,
  options: a,
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
  const v = ae(), g = p ?? v, _ = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, E = n !== void 0, [M, S] = J(r ?? ""), A = E ? n ?? "" : M, [k, O] = J(!1), [x, P] = J(-1), W = se(null), H = se(null), Z = se(null), j = Ju(a), z = ef(j), B = (L) => `${g}-option-${L}`, T = (L) => {
    for (let V = L + 1; V < z.length; V++)
      if (!z[V].disabled) return V;
    return L;
  }, X = (L) => {
    for (let V = L - 1; V >= 0; V--)
      if (!z[V].disabled) return V;
    return L;
  }, K = () => z.findIndex((L) => !L.disabled), ee = () => {
    for (let L = z.length - 1; L >= 0; L--)
      if (!z[L].disabled) return L;
    return -1;
  };
  ue(() => {
    if (!k) return;
    const L = (V) => {
      var q;
      (q = Z.current) != null && q.contains(V.target) || (O(!1), P(-1));
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [k]), ue(() => {
    if (x < 0 || !H.current) return;
    const L = H.current.querySelector(`#${CSS.escape(B(x))}`);
    L == null || L.scrollIntoView({ block: "nearest" });
  }, [x]);
  const U = (L) => {
    var V;
    L.disabled || (E || S(L.value), i == null || i(L.value), O(!1), P(-1), (V = W.current) == null || V.focus());
  }, te = (L) => {
    const V = L !== void 0 ? L : A ? z.findIndex((q) => q.value === A) : K();
    P(V >= 0 ? V : K()), O(!0);
  }, D = (L) => {
    switch (L.key) {
      case "Enter":
      case " ":
        L.preventDefault(), k ? x >= 0 && U(z[x]) : te();
        break;
      case "ArrowDown":
        L.preventDefault(), k ? P((V) => T(V < 0 ? -1 : V)) : te(K());
        break;
      case "ArrowUp":
        L.preventDefault(), k ? P((V) => X(V < 0 ? z.length : V)) : te(ee());
        break;
      case "Home":
        L.preventDefault(), k && P(K());
        break;
      case "End":
        L.preventDefault(), k && P(ee());
        break;
      case "Escape":
        L.preventDefault(), O(!1), P(-1);
        break;
      case "Tab":
        O(!1), P(-1);
        break;
    }
  }, F = z.find((L) => L.value === A), $ = c === "small" ? 14 : c === "large" ? 18 : 16, ne = x >= 0 && k ? B(x) : void 0, Q = [];
  let le = 0;
  for (const [L, V] of j.entries())
    Q.push({
      groupName: L,
      items: V.map((q) => ({ option: q, idx: le++ }))
    });
  const ve = Q.some((L) => L.groupName !== "");
  return /* @__PURE__ */ w(
    "div",
    {
      ref: Z,
      className: ["dropdown", h].filter(Boolean).join(" "),
      "data-size": c,
      "data-open": k || void 0,
      "data-disabled": s || void 0,
      "data-validation": f,
      children: [
        e && /* @__PURE__ */ w("label", { id: _, htmlFor: g, className: "dropdown__label", children: [
          e,
          l && /* @__PURE__ */ o("span", { className: "dropdown__required", "aria-hidden": "true", children: " *" })
        ] }),
        /* @__PURE__ */ w(
          "button",
          {
            ref: W,
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
              k ? (O(!1), P(-1)) : te();
            },
            onKeyDown: D,
            children: [
              /* @__PURE__ */ o("span", { className: F ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: F ? F.label : t }),
              /* @__PURE__ */ o(It, { size: $, className: "dropdown__chevron", "aria-hidden": "true" })
            ]
          }
        ),
        k && /* @__PURE__ */ o(
          "ul",
          {
            ref: H,
            id: N,
            role: "listbox",
            className: "dropdown__listbox",
            "aria-label": b ?? e,
            children: Q.map((L, V) => /* @__PURE__ */ w(R.Fragment, { children: [
              ve && V > 0 && /* @__PURE__ */ o("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
              L.groupName && /* @__PURE__ */ o("li", { role: "presentation", className: "dropdown__group-header", children: L.groupName }),
              L.items.map(({ option: q, idx: ge }) => {
                const re = q.value === A, pe = x === ge;
                return /* @__PURE__ */ w(
                  "li",
                  {
                    id: B(ge),
                    role: "option",
                    className: "dropdown__option",
                    "aria-selected": re,
                    "aria-disabled": q.disabled || void 0,
                    "data-selected": re || void 0,
                    "data-active": pe || void 0,
                    "data-disabled": q.disabled || void 0,
                    onMouseDown: (be) => be.preventDefault(),
                    onMouseEnter: () => !q.disabled && P(ge),
                    onClick: () => U(q),
                    children: [
                      /* @__PURE__ */ o("span", { className: "dropdown__option-check", "aria-hidden": "true", children: re && /* @__PURE__ */ o(ze, { size: 12, strokeWidth: 2.5 }) }),
                      q.icon && /* @__PURE__ */ o("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: q.icon }),
                      /* @__PURE__ */ w("span", { className: "dropdown__option-content", children: [
                        /* @__PURE__ */ o("span", { className: "dropdown__option-label", children: q.label }),
                        q.description && /* @__PURE__ */ o("span", { className: "dropdown__option-description", children: q.description })
                      ] })
                    ]
                  },
                  q.value
                );
              })
            ] }, L.groupName || "__ungrouped"))
          }
        ),
        d && !u && /* @__PURE__ */ o("p", { id: y, className: "dropdown__hint", children: d }),
        u && /* @__PURE__ */ o(
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
function ah({
  label: e,
  description: t,
  required: n,
  optional: r,
  helpText: a,
  position: i = "stacked",
  htmlFor: s,
  id: l,
  className: c
}) {
  const f = ae();
  return /* @__PURE__ */ w(
    s ? "label" : "div",
    {
      htmlFor: s,
      id: l,
      className: ["field-label", c].filter(Boolean).join(" "),
      "data-position": i !== "stacked" ? i : void 0,
      children: [
        /* @__PURE__ */ w("span", { className: "field-label__header", children: [
          /* @__PURE__ */ o("span", { className: "field-label__text", title: e, children: e }),
          n && !r && /* @__PURE__ */ o("span", { className: "field-label__required", "aria-hidden": "true", children: " *" }),
          r && !n && /* @__PURE__ */ o("span", { className: "field-label__optional", children: " (optional)" }),
          a && /* @__PURE__ */ w("span", { className: "field-label__help", children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: "field-label__help-btn",
                "aria-label": "Help information",
                "aria-describedby": f,
                children: /* @__PURE__ */ o(Hi, { size: 14, "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ o(
              "span",
              {
                id: f,
                role: "tooltip",
                className: "field-label__tooltip",
                children: a
              }
            )
          ] })
        ] }),
        t && /* @__PURE__ */ o("span", { className: "field-label__description", children: t })
      ]
    }
  );
}
function tf() {
  return Math.random().toString(36).slice(2, 9);
}
function Vn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function nf(e, t, n) {
  var r;
  if (t) {
    const a = t.split(",").map((c) => c.trim().toLowerCase()), i = "." + ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()), s = e.type.toLowerCase();
    if (!a.some((c) => c.endsWith("/*") ? s.startsWith(c.slice(0, -1)) : c.startsWith(".") ? i === c : s === c)) {
      const c = a.filter((f) => f.startsWith(".")).map((f) => f.slice(1).toUpperCase()).join(", ");
      return c ? `Invalid file type. Accepted: ${c}` : "Invalid file type";
    }
  }
  return n && e.size > n ? `File exceeds ${Vn(n)} limit` : null;
}
function rf({ file: e, size: t = 16 }) {
  var a;
  const n = e.type.toLowerCase(), r = ((a = e.name.split(".").pop()) == null ? void 0 : a.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ o(Yi, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ o(kn, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ o(kn, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ o(Xi, { size: t }) : /* @__PURE__ */ o(qi, { size: t });
}
function ih({
  label: e,
  description: t,
  required: n,
  hint: r,
  "aria-label": a,
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
  const _ = ae(), N = v ?? _, y = `${N}-input`, C = e ? `${N}-label` : void 0, E = `${N}-live`, M = se(null), [S, A] = J([]), [k, O] = J(!1), [x, P] = J(""), W = de((D) => {
    if (u) return;
    const $ = Array.from(D).map((L) => {
      const V = nf(L, l, c);
      return { id: tf(), file: L, status: V ? "error" : "added", errorMessage: V ?? void 0 };
    });
    A((L) => d ? [...L, ...$] : $);
    const ne = $.filter((L) => L.status === "added").map((L) => L.file);
    ne.length > 0 && (p == null || p(ne));
    const Q = $.filter((L) => L.status === "added").length, le = $.filter((L) => L.status === "error").length, ve = [];
    Q && ve.push(`${Q} file${Q > 1 ? "s" : ""} added`), le && ve.push(`${le} file${le > 1 ? "s" : ""} failed validation`), P(ve.join(". ")), M.current && (M.current.value = "");
  }, [u, l, c, d, p]), H = de((D) => {
    A((F) => {
      const $ = F.find((ne) => ne.id === D);
      return $ && P(`${$.file.name} removed`), F.filter((ne) => ne.id !== D);
    }), b == null || b(D);
  }, [b]), Z = de(async () => {
    if (!h) return;
    const D = S.filter((F) => F.status === "added" || F.status === "error");
    if (D.length) {
      A((F) => F.map(
        ($) => D.find((ne) => ne.id === $.id) ? { ...$, status: "uploading", errorMessage: void 0 } : $
      )), P("Uploading files…");
      try {
        await h(D.map((F) => F.file)), A((F) => F.map(
          ($) => D.find((ne) => ne.id === $.id) ? { ...$, status: "uploaded" } : $
        )), P(`${D.length} file${D.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (F) {
        const $ = F instanceof Error ? F.message : "Upload failed";
        A((ne) => ne.map(
          (Q) => D.find((le) => le.id === Q.id) ? { ...Q, status: "error", errorMessage: $ } : Q
        )), P(`Upload failed: ${$}`);
      }
    }
  }, [S, h]), j = (D) => {
    D.preventDefault(), u || O(!0);
  }, z = (D) => {
    D.currentTarget.contains(D.relatedTarget) || O(!1);
  }, B = (D) => {
    D.preventDefault(), O(!1), !u && W(D.dataTransfer.files);
  }, T = (D) => {
    var F;
    (F = D.target.files) != null && F.length && W(D.target.files);
  }, X = () => {
    var D;
    u || (D = M.current) == null || D.click();
  }, K = S.length > 0, ee = S.some((D) => D.status === "added"), U = S.some((D) => D.status === "uploading"), te = [
    f,
    c ? `Max ${Vn(c)}` : null
  ].filter(Boolean).join(" · ");
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["file-uploader", g].filter(Boolean).join(" "),
      "data-position": i !== "bottom" ? i : void 0,
      "data-disabled": u || void 0,
      children: [
        /* @__PURE__ */ o(
          "span",
          {
            id: E,
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "false",
            className: "file-uploader__sr-only",
            children: x
          }
        ),
        e && /* @__PURE__ */ w("span", { id: C, className: "file-uploader__label", children: [
          e,
          n && /* @__PURE__ */ o("span", { className: "file-uploader__required", "aria-hidden": "true", children: " *" })
        ] }),
        t && /* @__PURE__ */ o("span", { className: "file-uploader__description", children: t }),
        /* @__PURE__ */ w("div", { className: "file-uploader__body", children: [
          /* @__PURE__ */ w(
            "div",
            {
              className: "file-uploader__zone",
              "data-dragging": k || void 0,
              "aria-labelledby": C,
              "aria-label": e ? void 0 : a ?? "File upload area",
              "aria-disabled": u || void 0,
              onDragOver: j,
              onDragLeave: z,
              onDrop: B,
              onClick: X,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (D) => {
                (D.key === "Enter" || D.key === " ") && (D.preventDefault(), X());
              },
              children: [
                /* @__PURE__ */ o(Ui, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ o("span", { className: "file-uploader__zone-text", children: "Drag & drop files here" }),
                /* @__PURE__ */ w("span", { className: "file-uploader__zone-browse", children: [
                  "or",
                  " ",
                  /* @__PURE__ */ o("span", { className: "file-uploader__browse-link", children: "browse files" })
                ] }),
                te && /* @__PURE__ */ o("span", { className: "file-uploader__zone-hint", children: te })
              ]
            }
          ),
          K && /* @__PURE__ */ o("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: S.map((D) => /* @__PURE__ */ w(
            "li",
            {
              className: "file-uploader__item",
              "data-status": D.status,
              children: [
                /* @__PURE__ */ o("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(rf, { file: D.file, size: 16 }) }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ o("span", { className: "file-uploader__item-name", title: D.file.name, children: D.file.name }),
                  /* @__PURE__ */ w("span", { className: "file-uploader__item-meta", children: [
                    Vn(D.file.size),
                    D.errorMessage && /* @__PURE__ */ w("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      D.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  D.status === "uploading" && /* @__PURE__ */ o(Gi, { size: 16, className: "file-uploader__spin" }),
                  D.status === "uploaded" && /* @__PURE__ */ o(ze, { size: 16 }),
                  D.status === "error" && /* @__PURE__ */ o(_t, { size: 16 })
                ] }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${D.file.name}`,
                    disabled: D.status === "uploading",
                    onClick: () => H(D.id),
                    children: /* @__PURE__ */ o(Be, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            D.id
          )) })
        ] }),
        s && h && K && /* @__PURE__ */ o("div", { className: "file-uploader__actions", children: /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !ee || U || u,
            onClick: Z,
            children: [
              /* @__PURE__ */ o(Ki, { size: 14, "aria-hidden": "true" }),
              U ? "Uploading…" : "Upload files"
            ]
          }
        ) }),
        r && /* @__PURE__ */ o("span", { className: "file-uploader__hint", children: r }),
        /* @__PURE__ */ o(
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
            onChange: T
          }
        )
      ]
    }
  );
}
const of = {
  s: { svgSize: 16, strokeWidth: 2, r: 6, cx: 8, cy: 8 },
  m: { svgSize: 32, strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l: { svgSize: 64, strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 }
};
function Vt({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": a,
  className: i
}) {
  const s = R.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = of[e], p = 2 * Math.PI * f, h = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["spinner", i].filter(Boolean).join(" "),
      role: "status",
      "aria-live": "polite",
      "aria-label": n ? void 0 : a ?? "Loading",
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
              /* @__PURE__ */ o(
                "circle",
                {
                  className: "spinner__track",
                  cx: u,
                  cy: d,
                  r: f,
                  strokeWidth: c
                }
              ),
              /* @__PURE__ */ o(
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
        n && /* @__PURE__ */ o("span", { id: s, className: "spinner__label", children: n })
      ]
    }
  );
}
function af(e) {
  var r;
  const t = e.type.toLowerCase(), n = ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "";
  return t.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"].includes(n) ? "image" : t === "application/pdf" || n === "pdf" ? "pdf" : t === "text/plain" || n === "txt" ? "text" : t === "text/csv" || n === "csv" ? "csv" : "unsupported";
}
function sf(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function lf(e) {
  return e.trim().split(`
`).map(
    (t) => t.split(",").map((n) => n.trim().replace(/^"(.*)"$/, "$1"))
  );
}
const no = 50, ro = 200, oo = 25;
function sh({
  file: e,
  files: t,
  currentFileIndex: n = 0,
  showHeader: r = !0,
  showFooter: a = !1,
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
  const v = ae(), g = af(e), [_, N] = J(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = J(100), [E, M] = J(0), [S, A] = J(1), [k, O] = J(null), [x, P] = J(null), [W, H] = J("");
  ue(() => {
    C(100), M(0), A(1), O(null), P(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), ue(() => {
    if (g !== "text" && g !== "csv") return;
    let re = !1;
    return fetch(e.url).then((pe) => {
      if (!pe.ok) throw new Error(`HTTP ${pe.status}`);
      return pe.text();
    }).then((pe) => {
      re || (g === "text" ? O(pe) : P(lf(pe)), N("loaded"));
    }).catch(() => {
      re || N("error");
    }), () => {
      re = !0;
    };
  }, [e.url, g]);
  const Z = () => {
    N("loaded"), H("File loaded");
  }, j = () => {
    N("error"), H("File failed to load");
  }, z = () => N("loaded"), B = de(() => C((re) => Math.min(re + oo, ro)), []), T = de(() => C((re) => Math.max(re - oo, no)), []), X = de(() => M((re) => (re + 90) % 360), []), K = de(() => {
    C(100), M(0);
  }, []), ee = (t == null ? void 0 : t.length) ?? 0, U = ee > 1 && n > 0, te = ee > 1 && n < ee - 1, D = () => p == null ? void 0 : p(n - 1), F = () => p == null ? void 0 : p(n + 1), $ = e.pageCount ?? 0, ne = $ > 1 && S > 1, Q = $ > 1 && S < $, le = () => {
    if (u)
      u(e);
    else {
      const re = document.createElement("a");
      re.href = e.url, re.download = e.name, re.click();
    }
  }, ve = `scale(${y / 100}) rotate(${E}deg)`, L = () => {
    if (_ === "error")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ o(ns, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (_ === "unsupported")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ o(ho, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ w("button", { type: "button", className: "file-viewer__empty-action", onClick: le, children: [
          /* @__PURE__ */ o(Mr, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ w("div", { className: "file-viewer__img-wrap", children: [
        _ === "loading" && /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Vt, { size: "m" }) }),
        /* @__PURE__ */ o(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": _ === "loaded" || void 0,
            style: { transform: ve },
            onLoad: Z,
            onError: j
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ w("div", { className: "file-viewer__pdf-wrap", children: [
        _ === "loading" && /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Vt, { size: "m" }) }),
        /* @__PURE__ */ o(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": _ === "loaded" || void 0,
            onLoad: z
          }
        )
      ] });
    if (g === "text")
      return _ === "loading" ? /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Vt, { size: "m" }) }) : /* @__PURE__ */ w("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ w("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(kn, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ o("pre", { className: "file-viewer__text", children: k })
      ] });
    if (g === "csv") {
      if (_ === "loading")
        return /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Vt, { size: "m" }) });
      if (!(x != null && x.length))
        return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ o(rs, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [re, ...pe] = x;
      return /* @__PURE__ */ o("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ w("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: re.map((be, Se) => /* @__PURE__ */ o("th", { className: "file-viewer__th", children: be }, Se)) }) }),
        /* @__PURE__ */ o("tbody", { children: pe.map((be, Se) => /* @__PURE__ */ o("tr", { className: "file-viewer__tr", children: be.map((gn, bn) => /* @__PURE__ */ o("td", { className: "file-viewer__td", children: gn }, bn)) }, Se)) })
      ] }) });
    }
    return null;
  }, V = g === "image", q = V && l, ge = V && c;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["file-viewer", h].filter(Boolean).join(" "),
      role: "region",
      "aria-label": b ?? `File preview: ${e.name}`,
      "aria-labelledby": b ? void 0 : v,
      children: [
        /* @__PURE__ */ o(
          "span",
          {
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            className: "file-viewer__sr-only",
            children: W
          }
        ),
        r && /* @__PURE__ */ w("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ o("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ w("div", { className: "file-viewer__header-actions", children: [
            q && /* @__PURE__ */ w("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(Zi, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= no,
                  onClick: T
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(Qi, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= ro,
                  onClick: B
                }
              )
            ] }),
            ge && /* @__PURE__ */ o(
              we,
              {
                icon: /* @__PURE__ */ o(Ji, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: X
              }
            ),
            s && d && /* @__PURE__ */ o(
              we,
              {
                icon: /* @__PURE__ */ o(es, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ w(ke, { children: [
              /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(rt, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ w(Le, { align: "end", children: [
                i && /* @__PURE__ */ w(ie, { onSelect: le, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(Mr, { size: 14 }) }),
                  "Download"
                ] }),
                V && /* @__PURE__ */ w(ie, { onSelect: K, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(ts, { size: 14 }) }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ w(ie, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(po, { size: 14 }) }),
                  "Open in new tab"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "file-viewer__preview",
            style: { maxHeight: f },
            children: L()
          }
        ),
        a && /* @__PURE__ */ w("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ w("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ o("span", { className: "file-viewer__meta-item", children: sf(e.size) }),
            e.uploadDate && /* @__PURE__ */ o("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ w("div", { className: "file-viewer__footer-nav", children: [
            $ > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(xt, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !ne,
                  onClick: () => A((re) => re - 1)
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                S,
                " / ",
                $
              ] }),
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(ht, { size: 14 }),
                  "aria-label": "Next page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !Q,
                  onClick: () => A((re) => re + 1)
                }
              )
            ] }),
            ee > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(xt, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !U,
                  onClick: D
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                n + 1,
                " / ",
                ee,
                " files"
              ] }),
              /* @__PURE__ */ o(
                we,
                {
                  icon: /* @__PURE__ */ o(ht, { size: 14 }),
                  "aria-label": "Next file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !te,
                  onClick: F
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
const _i = Xn({ onClose: () => {
}, titleId: "" }), cf = () => qn(_i), ao = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function df(e, t) {
  ue(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(ao);
    r == null || r.focus();
    function a(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(ao));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t, e]);
}
function uf({
  open: e,
  onClose: t,
  side: n = "right",
  size: r = "medium",
  closeOnOverlayClick: a = !0,
  persistent: i = !1,
  "aria-label": s,
  children: l,
  className: c
}) {
  const f = ae(), u = se(null), d = se(null), [p, h] = J(e), [b, v] = J(!1);
  if (ue(() => {
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
  }, [e]), ue(() => {
    if (!e) return;
    const _ = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [e, t]), ue(() => {
    if (!e || i) return;
    const _ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = _;
    };
  }, [e, i]), df(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ w(_i.Provider, { value: { onClose: t, titleId: f }, children: [
    !i && /* @__PURE__ */ o(
      "div",
      {
        className: "drawer-overlay",
        "data-open": String(b),
        "aria-hidden": "true",
        onClick: a ? t : void 0
      }
    ),
    /* @__PURE__ */ o(
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
  return i ? g : Zn.createPortal(g, document.body);
}
function lh({ title: e, description: t, actions: n, className: r }) {
  const { onClose: a, titleId: i } = cf();
  return /* @__PURE__ */ w("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ o("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ o("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ w("div", { className: "drawer__header-actions", children: [
      n,
      /* @__PURE__ */ o(
        we,
        {
          icon: /* @__PURE__ */ o(Be, { size: 18, "aria-hidden": "true" }),
          "aria-label": "Close drawer",
          variant: "ghost",
          color: "neutral",
          size: "small",
          onClick: a
        }
      )
    ] })
  ] });
}
function ch({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { className: ["drawer__tools", t].filter(Boolean).join(" "), children: e });
}
function dh({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { className: ["drawer__content", t].filter(Boolean).join(" "), children: e });
}
function uh({ title: e, count: t, link: n, divider: r, children: a, className: i }) {
  const s = e || t !== void 0 || n;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["drawer__section", i].filter(Boolean).join(" "),
      "data-divider": r || void 0,
      children: [
        s && /* @__PURE__ */ w("div", { className: "drawer__section-header", children: [
          /* @__PURE__ */ w("div", { className: "drawer__section-header-start", children: [
            e && /* @__PURE__ */ o("span", { className: "drawer__section-title", children: e }),
            t !== void 0 && /* @__PURE__ */ o("span", { className: "drawer__section-count", children: t })
          ] }),
          n && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: "drawer__section-link",
              onClick: n.onClick,
              children: n.label
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "drawer__section-body", children: a })
      ]
    }
  );
}
function fh({
  label: e,
  icon: t,
  code: n,
  active: r,
  disabled: a,
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
      "aria-disabled": a || void 0,
      "data-active": r || void 0,
      "data-disabled": a || void 0,
      onClick: a ? void 0 : s,
      children: [
        t && /* @__PURE__ */ o("span", { className: "drawer__menu-item-icon", "aria-hidden": "true", children: t }),
        /* @__PURE__ */ o("span", { className: "drawer__menu-item-label", children: e }),
        n && /* @__PURE__ */ o("span", { className: "drawer__menu-item-code", children: n }),
        l && /* @__PURE__ */ o(
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
function ph({
  label: e,
  icon: t,
  active: n,
  disabled: r,
  href: a,
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
  }, g = a ? "a" : "button";
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["drawer__multi-item", u].filter(Boolean).join(" "),
      "data-expanded": b || void 0,
      children: [
        /* @__PURE__ */ w(
          g,
          {
            ...a ? { href: a } : { type: "button" },
            className: "drawer__multi-item-trigger",
            "aria-expanded": b,
            "aria-haspopup": "true",
            "aria-current": n ? "page" : void 0,
            "data-active": n || void 0,
            "data-disabled": r || void 0,
            "aria-disabled": r || void 0,
            onClick: v,
            children: [
              t && /* @__PURE__ */ o("span", { className: "drawer__menu-item-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ o("span", { className: "drawer__menu-item-label", children: e }),
              /* @__PURE__ */ o(
                It,
                {
                  size: 14,
                  className: "drawer__multi-item-chevron",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        b && /* @__PURE__ */ o("div", { className: "drawer__multi-item-children", children: f })
      ]
    }
  );
}
function hh({
  header: e,
  secondary: t,
  message: n,
  timestamp: r,
  unread: a,
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
      "data-unread": a || void 0,
      "data-disabled": c || void 0,
      "aria-disabled": c || void 0,
      onClick: c ? void 0 : l,
      children: [
        a && /* @__PURE__ */ o("span", { className: "drawer__unread-dot", "aria-label": "Unread" }),
        i && /* @__PURE__ */ o("span", { className: "drawer__list-item-before", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ w("span", { className: "drawer__list-item-main", children: [
          /* @__PURE__ */ w("span", { className: "drawer__list-item-top", children: [
            /* @__PURE__ */ o("span", { className: "drawer__list-item-header", children: e }),
            r && /* @__PURE__ */ o("span", { className: "drawer__list-item-timestamp", children: r })
          ] }),
          t && /* @__PURE__ */ o("span", { className: "drawer__list-item-secondary", children: t }),
          n && /* @__PURE__ */ o("span", { className: "drawer__list-item-message", children: n })
        ] }),
        s && /* @__PURE__ */ o("span", { className: "drawer__list-item-after", children: s })
      ]
    }
  );
}
function mh({
  title: e,
  message: t,
  timestamp: n,
  unread: r,
  avatar: a,
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
        r && /* @__PURE__ */ o("span", { className: "drawer__unread-dot", "aria-label": "Unread" }),
        a && /* @__PURE__ */ o("span", { className: "drawer__notification-avatar", "aria-hidden": "true", children: a }),
        /* @__PURE__ */ w("span", { className: "drawer__notification-body", children: [
          /* @__PURE__ */ w("span", { className: "drawer__notification-top", children: [
            /* @__PURE__ */ o("span", { className: "drawer__notification-title", children: e }),
            n && /* @__PURE__ */ o("span", { className: "drawer__list-item-timestamp", children: n })
          ] }),
          t && /* @__PURE__ */ o("span", { className: "drawer__list-item-message", children: t }),
          i && /* @__PURE__ */ o("span", { className: "drawer__notification-action", children: i })
        ] })
      ]
    }
  );
}
function vh({
  onClick: e,
  "aria-label": t = "More options"
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: "drawer__context-btn",
      "aria-label": t,
      onClick: e,
      children: /* @__PURE__ */ o(rt, { size: 14, "aria-hidden": "true" })
    }
  );
}
const gh = R.forwardRef(
  function({ variant: t = "loud", size: n = "100", target: r, rel: a, children: i, className: s, ...l }, c) {
    const f = r === "_blank", u = f ? "noopener noreferrer" : a;
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
          f && /* @__PURE__ */ o(po, { "aria-hidden": "true" })
        ]
      }
    );
  }
), ff = R.forwardRef(
  function({ variant: t = "fill", size: n = "medium", color: r = "primary", icon: a, children: i, className: s, title: l, ...c }, f) {
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
          a && /* @__PURE__ */ o("span", { className: "badge__icon", "aria-hidden": "true", children: a }),
          /* @__PURE__ */ o("span", { className: "badge__label", children: i })
        ]
      }
    );
  }
);
function pf(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const hf = R.forwardRef(
  function({ name: t, src: n, size: r = "l", href: a, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, h] = R.useState(!1), b = !!n && !p, v = pf(t, r), g = !!a || !!i, _ = {
      className: ["avatar", s].filter(Boolean).join(" "),
      "data-size": r,
      "data-variant": b ? "image" : "initials",
      "aria-label": c ?? t,
      style: l,
      id: u,
      ...g ? { "data-interactive": "" } : {}
    }, N = b ? /* @__PURE__ */ o(
      "img",
      {
        src: n,
        alt: "",
        className: "avatar__img",
        onError: () => h(!0)
      }
    ) : /* @__PURE__ */ o("span", { className: "avatar__initials", "aria-hidden": "true", children: v });
    return a ? /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        href: a,
        tabIndex: f,
        ..._,
        children: N
      }
    ) : i ? /* @__PURE__ */ o(
      "button",
      {
        ref: d,
        type: "button",
        onClick: i,
        tabIndex: f,
        ..._,
        children: N
      }
    ) : /* @__PURE__ */ o(
      "span",
      {
        ref: d,
        tabIndex: f,
        ..._,
        children: N
      }
    );
  }
), bh = R.forwardRef(
  function({ children: t, max: n, overlap: r = !0, size: a = "l", className: i, ...s }, l) {
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
              "data-size": a,
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
), mf = {
  active: "Active",
  away: "Away",
  busy: "Busy",
  offline: "Offline"
}, _h = R.forwardRef(
  function({ children: t, status: n, size: r = "l", className: a, style: i }, s) {
    return /* @__PURE__ */ w(
      "div",
      {
        ref: s,
        className: ["avatar-with-status", a].filter(Boolean).join(" "),
        "data-avatar-size": r,
        style: i,
        children: [
          t,
          /* @__PURE__ */ o(
            "span",
            {
              className: "avatar-with-status__dot",
              "data-status": n,
              role: "img",
              "aria-label": mf[n]
            }
          )
        ]
      }
    );
  }
), vf = R.forwardRef(
  function({ children: t, size: n = "medium", color: r = "gray", icon: a, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["tag", i].filter(Boolean).join(" "),
        "data-size": n,
        "data-color": r,
        ...s,
        children: [
          a && /* @__PURE__ */ o("span", { className: "tag__icon", "aria-hidden": "true", children: a }),
          t
        ]
      }
    );
  }
), wh = R.forwardRef(
  function({
    variant: t = "elevated",
    interactive: n = !1,
    href: r,
    children: a,
    className: i,
    onClick: s,
    onKeyDown: l,
    ...c
  }, f) {
    const u = ["card", i].filter(Boolean).join(" "), d = (p) => {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), s == null || s(p)), l == null || l(p);
    };
    return n && r ? /* @__PURE__ */ o(
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
        children: a
      }
    ) : n ? /* @__PURE__ */ o(
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
        children: a
      }
    ) : /* @__PURE__ */ o(
      "div",
      {
        ref: f,
        className: u,
        "data-variant": t,
        onClick: s,
        onKeyDown: l,
        ...c,
        children: a
      }
    );
  }
), yh = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["card-header", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
), Nh = R.forwardRef(
  function({ as: t = "h3", children: n, className: r, ...a }, i) {
    return /* @__PURE__ */ o(
      t,
      {
        ref: i,
        className: ["card-title", r].filter(Boolean).join(" "),
        ...a,
        children: n
      }
    );
  }
), Ch = R.forwardRef(
  function({ children: t, className: n, ...r }, a) {
    return /* @__PURE__ */ o(
      "p",
      {
        ref: a,
        className: ["card-description", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
), xh = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["card-content", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
), Sh = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["card-footer", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
), Rh = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["card-section", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
), Eh = R.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ o(
      gi,
      {
        ref: r,
        orientation: "horizontal",
        variant: "full",
        className: t,
        ...n
      }
    );
  }
), gf = {
  informative: vo,
  positive: fo,
  notice: mo,
  negative: Xe
}, bf = {
  informative: "status",
  positive: "status",
  notice: "alert",
  negative: "alert"
}, _f = {
  informative: "polite",
  positive: "polite",
  notice: "assertive",
  negative: "assertive"
}, Mh = R.forwardRef(
  function({
    variant: t = "informative",
    title: n,
    children: r,
    actions: a,
    onClose: i,
    className: s,
    ...l
  }, c) {
    const f = gf[t];
    return /* @__PURE__ */ w(
      "div",
      {
        ref: c,
        role: bf[t],
        "aria-live": _f[t],
        className: ["banner-alert", s].filter(Boolean).join(" "),
        "data-variant": t,
        ...l,
        children: [
          /* @__PURE__ */ o("span", { className: "banner-alert__icon", "aria-hidden": "true", children: /* @__PURE__ */ o(f, {}) }),
          /* @__PURE__ */ w("div", { className: "banner-alert__content", children: [
            n && /* @__PURE__ */ o("strong", { className: "banner-alert__title", children: n }),
            /* @__PURE__ */ o("p", { className: "banner-alert__message", children: r })
          ] }),
          i && /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Be, { size: 14, "aria-hidden": "true" }),
              "aria-label": "Close banner",
              onClick: i,
              className: "banner-alert__close"
            }
          ),
          a && /* @__PURE__ */ o("div", { className: "banner-alert__actions", children: a })
        ]
      }
    );
  }
), wi = R.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function wf() {
  return R.useContext(wi);
}
const yf = R.forwardRef(
  function({
    collapsible: t = !1,
    defaultExpanded: n = !0,
    onExpandedChange: r,
    children: a,
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
    }, []), p = R.Children.toArray(a), h = p.find(
      (v) => R.isValidElement(v) && v.type.displayName === "PanelHeader"
    ), b = p.filter(
      (v) => !R.isValidElement(v) || v.type.displayName !== "PanelHeader"
    );
    return /* @__PURE__ */ o(wi.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ w(
      "div",
      {
        ref: l,
        className: ["panel", i].filter(Boolean).join(" "),
        "data-expanded": t ? String(c) : void 0,
        ...s,
        children: [
          h,
          t ? /* @__PURE__ */ o(
            "div",
            {
              className: "panel__collapsible",
              "data-collapsed": c ? void 0 : "",
              "aria-hidden": c ? void 0 : !0,
              children: /* @__PURE__ */ o("div", { className: "panel__collapsible-inner", children: b })
            }
          ) : b
        ]
      }
    ) });
  }
);
yf.displayName = "Panel";
const Nf = R.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: a, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = wf();
    return /* @__PURE__ */ w(
      "div",
      {
        ref: l,
        className: ["panel__header", i].filter(Boolean).join(" "),
        ...s,
        children: [
          /* @__PURE__ */ w("div", { className: "panel__header-title", children: [
            /* @__PURE__ */ w("div", { className: "panel__header-title-row", children: [
              t && /* @__PURE__ */ o("span", { className: "panel__header-icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ o("strong", { className: "panel__title typography-heading-m", children: a })
            ] }),
            n && /* @__PURE__ */ o("p", { className: "panel__subtitle", children: n })
          ] }),
          c ? /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(
                It,
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
          ) : r && /* @__PURE__ */ o("div", { className: "panel__header-end", children: r })
        ]
      }
    );
  }
);
Nf.displayName = "PanelHeader";
const Cf = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["panel__body", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
);
Cf.displayName = "PanelBody";
const xf = R.forwardRef(
  function({ padding: t, children: n, className: r, style: a, ...i }, s) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: ["panel__footer", r].filter(Boolean).join(" "),
        style: t ? { ...a, padding: t } : a,
        ...i,
        children: n
      }
    );
  }
);
xf.displayName = "PanelFooter";
const Sf = R.forwardRef(
  function({
    variant: t = "flat",
    heading: n,
    headingLevel: r = "h2",
    description: a,
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
          (n || a) && /* @__PURE__ */ w("div", { className: "section__header", children: [
            n && /* @__PURE__ */ o(
              u,
              {
                className: "section__title",
                "data-level": r,
                children: n
              }
            ),
            a && /* @__PURE__ */ o("p", { className: "section__description", children: a })
          ] }),
          s && /* @__PURE__ */ o("div", { className: "section__body", children: s })
        ]
      }
    );
    return i ? /* @__PURE__ */ w(Ce, { children: [
      d,
      /* @__PURE__ */ o("hr", { className: "section__divider" })
    ] }) : d;
  }
);
Sf.displayName = "Section";
const yi = R.createContext({
  onClose: () => {
  },
  titleId: ""
});
function Rf() {
  return R.useContext(yi);
}
const io = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function Ef(e, t) {
  R.useEffect(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(io);
    r == null || r.focus();
    function a(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(io));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t, e]);
}
let Mf = 0;
function Pf({ open: e, onClose: t, size: n = "medium", children: r, className: a }) {
  const [i] = R.useState(() => `dialog-title-${++Mf}`), s = R.useRef(null), [l, c] = R.useState(e), [f, u] = R.useState(e);
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
  }, [e]), Ef(s, e), l ? Zn.createPortal(
    /* @__PURE__ */ w(yi.Provider, { value: { onClose: t, titleId: i }, children: [
      /* @__PURE__ */ o(
        "div",
        {
          className: "dialog-backdrop",
          "data-open": String(f),
          "aria-hidden": "true",
          onClick: t
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          className: "dialog-positioner",
          onClick: t,
          children: /* @__PURE__ */ o(
            "div",
            {
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": i,
              "data-size": n,
              "data-open": String(f),
              className: ["dialog", a].filter(Boolean).join(" "),
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
Pf.displayName = "Dialog";
const If = R.forwardRef(
  function({ icon: t, children: n, className: r, ...a }, i) {
    const { onClose: s, titleId: l } = Rf();
    return /* @__PURE__ */ w(
      "div",
      {
        ref: i,
        className: ["dialog__header", r].filter(Boolean).join(" "),
        ...a,
        children: [
          /* @__PURE__ */ w("div", { className: "dialog__header-start", children: [
            t && /* @__PURE__ */ o("span", { className: "dialog__header-icon", "aria-hidden": "true", children: t }),
            /* @__PURE__ */ o("h2", { id: l, className: "dialog__title", children: n })
          ] }),
          /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Be, { "aria-hidden": "true" }),
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
If.displayName = "DialogHeader";
const Af = R.forwardRef(
  function({ children: t, className: n, ...r }, a) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        className: ["dialog__body", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
);
Af.displayName = "DialogBody";
const Of = R.forwardRef(
  function({ children: t, className: n, ...r }, a) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        className: ["dialog__footer", n].filter(Boolean).join(" "),
        ...r,
        children: t
      }
    );
  }
);
Of.displayName = "DialogFooter";
const Ni = R.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function Ci() {
  return R.useContext(Ni);
}
let Tf = 0;
function kf({
  value: e,
  onValueChange: t,
  size: n = "medium",
  children: r,
  className: a,
  ...i
}) {
  const [s] = R.useState(() => `tabs-${++Tf}`);
  return /* @__PURE__ */ o(Ni.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ o("div", { className: ["tabs", a].filter(Boolean).join(" "), ...i, children: r }) });
}
kf.displayName = "Tabs";
function Df({ variant: e = "loud", padding: t, children: n, className: r, style: a }) {
  const i = t ? { ...a, paddingLeft: t, paddingRight: t, "--_tab-inset": t } : a ?? {};
  return /* @__PURE__ */ o(
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
Df.displayName = "TabList";
function Lf({
  value: e,
  icon: t,
  counter: n,
  closable: r,
  onClose: a,
  onMenuClick: i,
  disabled: s,
  children: l,
  className: c
}) {
  const { activeTab: f, onChange: u, size: d, baseId: p } = Ci(), h = f === e, b = r || !!i;
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
              t && /* @__PURE__ */ o("span", { className: "tab__icon", "aria-hidden": "true", children: t }),
              /* @__PURE__ */ o("span", { className: "tab__label", children: l }),
              n && /* @__PURE__ */ o("span", { className: "tab__counter", children: n })
            ]
          }
        ),
        b && /* @__PURE__ */ w("span", { className: "tab__actions", children: [
          i && /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(os, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: h ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Be, { size: 14 }),
              "aria-label": "Close tab",
              tabIndex: h ? 0 : -1,
              onClick: a
            }
          )
        ] })
      ]
    }
  );
}
Lf.displayName = "Tab";
function Bf({ value: e, children: t, className: n, style: r }) {
  const { activeTab: a, baseId: i } = Ci();
  return a !== e ? null : /* @__PURE__ */ o(
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
Bf.displayName = "TabPanel";
const xi = R.createContext({ size: "medium" });
function Ff() {
  return R.useContext(xi);
}
function $f({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ o(xi.Provider, { value: { size: e }, children: /* @__PURE__ */ o(
    "ul",
    {
      role: "list",
      className: ["list", n].filter(Boolean).join(" "),
      style: r,
      children: t
    }
  ) });
}
$f.displayName = "List";
function zf({
  header: e,
  description: t,
  contentBefore: n,
  contentAfter: r,
  size: a,
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
  const { size: b } = Ff(), v = a ?? b, g = i || !!s || !!l, _ = /* @__PURE__ */ w(Ce, { children: [
    n && /* @__PURE__ */ o("span", { className: "list-item__before", children: n }),
    /* @__PURE__ */ w("span", { className: "list-item__content", children: [
      /* @__PURE__ */ o("span", { className: "list-item__header", children: e }),
      t && /* @__PURE__ */ o("span", { className: "list-item__description", children: t })
    ] }),
    r && /* @__PURE__ */ o("span", { className: "list-item__after", children: r })
  ] }), N = l ? /* @__PURE__ */ o("a", { href: l, className: "list-item__inner", children: _ }) : s ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: "list-item__inner",
      onClick: s,
      disabled: p,
      children: _
    }
  ) : /* @__PURE__ */ o("div", { className: "list-item__inner", children: _ });
  return /* @__PURE__ */ w(
    "li",
    {
      className: ["list-item", h].filter(Boolean).join(" "),
      "data-size": v,
      "data-interactive": g ? "" : void 0,
      "data-unread": d ? "" : void 0,
      "data-disabled": p ? "" : void 0,
      children: [
        c && /* @__PURE__ */ o(
          "span",
          {
            className: "list-item__bulk-select",
            onClick: (y) => y.stopPropagation(),
            children: /* @__PURE__ */ o(
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
zf.displayName = "ListItem";
const Ph = R.forwardRef(
  function({ label: t, labelPosition: n = "after", disabled: r, id: a, className: i, ...s }, l) {
    const c = ae(), f = a ?? c;
    return /* @__PURE__ */ w(
      "label",
      {
        htmlFor: f,
        className: ["switch", i].filter(Boolean).join(" "),
        "data-disabled": r || void 0,
        "data-label-position": t ? n : void 0,
        children: [
          t && n === "before" && /* @__PURE__ */ o("span", { className: "switch__label", children: t }),
          /* @__PURE__ */ w("span", { className: "switch__control", children: [
            /* @__PURE__ */ o(
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
            /* @__PURE__ */ o("span", { className: "switch__track", "aria-hidden": "true", children: /* @__PURE__ */ o("span", { className: "switch__handle" }) })
          ] }),
          t && n === "after" && /* @__PURE__ */ o("span", { className: "switch__label", children: t })
        ]
      }
    );
  }
), Si = R.createContext({
  variant: "ordered",
  interactive: !1
});
function jf({
  variant: e = "ordered",
  interactive: t = !1,
  children: n,
  className: r,
  ...a
}) {
  let i = 0;
  const s = R.Children.map(n, (l) => R.isValidElement(l) ? (i++, R.cloneElement(l, {
    _stepNumber: i
  })) : l);
  return /* @__PURE__ */ o(Si.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ o(
    "ol",
    {
      className: ["stepper", r].filter(Boolean).join(" "),
      "data-variant": e,
      ...a,
      children: s
    }
  ) });
}
jf.displayName = "Stepper";
function Wf({
  title: e,
  description: t,
  type: n = "default",
  active: r,
  disabled: a,
  icon: i,
  extras: s,
  onClick: l,
  _stepNumber: c,
  children: f,
  className: u,
  ...d
}) {
  const { variant: p, interactive: h } = R.useContext(Si), b = h && !a && !!l, v = () => n === "checked" ? /* @__PURE__ */ o(ze, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ o(_t, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ o(Xe, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ o("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ o("p", { className: "stepper-step__title", children: e }),
    t && /* @__PURE__ */ o("p", { className: "stepper-step__description", children: t })
  ] });
  return /* @__PURE__ */ w(
    "li",
    {
      className: ["stepper-step", u].filter(Boolean).join(" "),
      "data-type": n,
      "data-active": r || void 0,
      "data-disabled": a || void 0,
      "data-interactive": h && !a || void 0,
      "aria-current": r ? "step" : void 0,
      ...d,
      children: [
        /* @__PURE__ */ w("div", { className: "stepper-step__track", "aria-hidden": "true", children: [
          /* @__PURE__ */ o("div", { className: "stepper-step__indicator", children: v() }),
          /* @__PURE__ */ o("div", { className: "stepper-step__connector" })
        ] }),
        /* @__PURE__ */ w("div", { className: "stepper-step__body", children: [
          b ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: "stepper-step__trigger",
              onClick: l,
              children: g
            }
          ) : /* @__PURE__ */ o("div", { className: "stepper-step__header", children: g }),
          s && /* @__PURE__ */ o("div", { className: "stepper-step__extras", children: s }),
          f
        ] })
      ]
    }
  );
}
Wf.displayName = "StepperStep";
const Ih = R.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: a, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          a,
          /* @__PURE__ */ o("span", { className: "icon-badge__counter", children: /* @__PURE__ */ o(Mt, { count: t, size: "small", color: n, variant: r }) })
        ]
      }
    );
  }
);
function Vf(e, t) {
  if (t <= 1) return "full";
  const n = Math.min(t, 5), r = Math.min(t, 3), a = n * 120 + Math.max(n - 1, 0) * 8, i = r * 105 + Math.max(r - 1, 0) * 8;
  return e >= a ? "full" : e >= i ? "compact" : "minimal";
}
function Ri(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Hf(e) {
  const t = Ri(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function Ah({
  title: e,
  description: t,
  date: n,
  showBreadcrumb: r = !1,
  breadcrumbItems: a = [],
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
    var te, D, F;
    if (!(l != null && l.length)) return;
    let U;
    if (h)
      U = ((te = C.current) == null ? void 0 : te.offsetWidth) ?? 0;
    else {
      const $ = ((D = N.current) == null ? void 0 : D.offsetWidth) ?? 0, ne = ((F = y.current) == null ? void 0 : F.scrollWidth) ?? 0;
      U = $ - ne - 24;
    }
    c && E.current && (U -= E.current.offsetWidth + 17), _(Vf(U, l.length));
  }, [l, c, h]);
  Ct(() => {
    M();
    const U = h ? C.current : N.current;
    if (!U) return;
    const te = new ResizeObserver(M);
    return te.observe(U), () => te.disconnect();
  }, [M, h]);
  const S = !!(l != null && l.length), A = S || !!c || !!u, k = !!c && S, O = r && a.length >= 2 ? a[a.length - 2] : null, x = l ? Hf(l) : [], P = l ? Ri(l) : void 0, W = x.length > 0 || ((f == null ? void 0 : f.length) ?? 0) > 0, H = S || ((f == null ? void 0 : f.length) ?? 0) > 0, Z = r && a.length > 0 ? /* @__PURE__ */ o(
    Fu,
    {
      items: a,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, j = n ? /* @__PURE__ */ o("p", { className: "rpl-page-header__date", children: n }) : null, z = /* @__PURE__ */ o(
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
    z,
    s.length > 0 && /* @__PURE__ */ o("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map((U, te) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ o("span", { className: "rpl-page-header__tag-item", children: U }, te)
    )) })
  ] }), T = /* @__PURE__ */ o("div", { className: "rpl-page-header__heading-row", children: z }), X = t ? /* @__PURE__ */ o("p", { className: "rpl-page-header__description", children: t }) : null, K = /* @__PURE__ */ w("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
    Z,
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
            j,
            B,
            X
          ] }),
          A && /* @__PURE__ */ w(
            "div",
            {
              ref: C,
              className: "rpl-page-header__actions",
              children: [
                u && /* @__PURE__ */ o("span", { className: "rpl-page-header__last-update", children: u }),
                (S || !!c) && /* @__PURE__ */ w("div", { className: "rpl-page-header__actions-row", children: [
                  c && /* @__PURE__ */ o(
                    "div",
                    {
                      ref: E,
                      className: "rpl-page-header__secondary-toolbar",
                      children: c
                    }
                  ),
                  k && /* @__PURE__ */ o(
                    "div",
                    {
                      className: "rpl-page-header__toolbar-divider",
                      role: "separator",
                      "aria-hidden": "true"
                    }
                  ),
                  S && /* @__PURE__ */ o(
                    Hu,
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
  ] }), ee = /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-layout", "aria-hidden": "true", children: [
    O && /* @__PURE__ */ o("div", { className: "rpl-page-header__mobile-back", children: O.href ? /* @__PURE__ */ w(
      "a",
      {
        href: O.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? (U) => {
          U.preventDefault(), i(O.href);
        } : void 0,
        children: [
          /* @__PURE__ */ o(xt, { size: 16, "aria-hidden": "true" }),
          O.label
        ]
      }
    ) : /* @__PURE__ */ w("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ o(xt, { size: 16, "aria-hidden": "true" }),
      O.label
    ] }) }),
    j,
    T,
    X,
    s.length > 0 && /* @__PURE__ */ o("div", { className: "rpl-page-header__mobile-tags", children: s.map((U, te) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ o("span", { className: "rpl-page-header__tag-item", children: U }, te)
    )) }),
    u && /* @__PURE__ */ o("p", { className: "rpl-page-header__last-update", children: u }),
    H && /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-actions", children: [
      W && /* @__PURE__ */ w(ke, { children: [
        /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
          we,
          {
            icon: /* @__PURE__ */ o(uo, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ w(Le, { align: "start", sideOffset: 4, children: [
          f && f.length > 0 && /* @__PURE__ */ w(Ce, { children: [
            f.map((U) => /* @__PURE__ */ w(
              ie,
              {
                disabled: U.disabled,
                onSelect: U.onClick,
                children: [
                  U.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: U.icon }),
                  U.label
                ]
              },
              U.id
            )),
            x.length > 0 && /* @__PURE__ */ o(vt, {})
          ] }),
          x.map((U, te) => {
            var D;
            return /* @__PURE__ */ w("span", { children: [
              te > 0 && U.type !== ((D = x[te - 1]) == null ? void 0 : D.type) && /* @__PURE__ */ o(vt, {}),
              /* @__PURE__ */ w(
                ie,
                {
                  disabled: U.disabled,
                  onSelect: U.onClick,
                  children: [
                    U.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: U.icon }),
                    U.label
                  ]
                }
              )
            ] }, U.id);
          })
        ] })
      ] }),
      P && /* @__PURE__ */ o(
        he,
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
        K,
        ee
      ]
    }
  );
}
function Oh({
  label: e,
  value: t = 0,
  valueLabel: n,
  hint: r,
  state: a = "active",
  indeterminate: i = !1,
  hideLabel: s = !1,
  hideValue: l = !1,
  className: c,
  style: f
}) {
  const u = ae(), d = `${u}-label`, p = `${u}-live`, h = Math.min(100, Math.max(0, t)), b = i || a === "success" ? void 0 : `${h}%`, v = i ? { role: "progressbar", "aria-label": e } : {
    role: "progressbar",
    "aria-valuenow": a === "success" ? 100 : h,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-labelledby": d
  }, g = l ? null : a === "success" ? /* @__PURE__ */ o(ze, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : a === "error" ? /* @__PURE__ */ o(Be, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ o("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${h}%` }), _ = a === "success" ? `${e} complete` : a === "error" ? `${e} failed` : "";
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["progress-bar", c].filter(Boolean).join(" "),
      "data-state": a,
      "data-indeterminate": i ? "" : void 0,
      style: f,
      children: [
        (!s || g) && /* @__PURE__ */ w("div", { className: "progress-bar__header", children: [
          /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("div", { className: "progress-bar__track", ...v, children: /* @__PURE__ */ o(
          "div",
          {
            className: "progress-bar__fill",
            style: b ? { width: b } : void 0
          }
        ) }),
        r && /* @__PURE__ */ o("p", { className: "progress-bar__hint", children: r }),
        /* @__PURE__ */ o(
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
function Uf(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Gf(e) {
  return Math.max(3, Math.floor(e * 0.06));
}
function Kf(e, t) {
  return (e - t) / 2;
}
function Yf(e) {
  return 2 * Math.PI * e;
}
function Xf(e, t) {
  return e * (1 - t / 100);
}
function qf(e, t) {
  const n = Math.floor(e * 0.25);
  return Math.max(12, t !== void 0 ? t : n);
}
function Th({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: a = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Uf(e, 0, 100), f = Gf(n), u = Kf(n, f), d = Yf(u), p = Xf(d, c), h = n / 2, b = n / 2, v = qf(n, r), g = t !== void 0 ? t : `${c}%`, _ = i ?? g;
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["progress-circle", s].filter(Boolean).join(" "),
      "data-variant": a,
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
              /* @__PURE__ */ o(
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
              /* @__PURE__ */ o(
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
        /* @__PURE__ */ o(
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
const Ei = Xn(null);
function Zf() {
  const e = qn(Ei);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function Qf({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ o(tn, { ...t }) : e === "notice" ? /* @__PURE__ */ o(_t, { ...t }) : /* @__PURE__ */ o(Xe, { ...t });
}
const kh = R.forwardRef(
  function({ value: t, label: n, disabled: r, id: a, className: i, ...s }, l) {
    const c = Zf(), f = ae(), u = a ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
    return /* @__PURE__ */ w(
      "label",
      {
        htmlFor: u,
        className: ["radio", i].filter(Boolean).join(" "),
        "data-disabled": d || void 0,
        "data-checked": p || void 0,
        children: [
          /* @__PURE__ */ w("span", { className: "radio__control", children: [
            /* @__PURE__ */ o(
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
            /* @__PURE__ */ o("span", { className: "radio__circle", "aria-hidden": "true" })
          ] }),
          n && /* @__PURE__ */ o("span", { className: "radio__label", children: n })
        ]
      }
    );
  }
), Dh = R.forwardRef(
  function({
    value: t,
    onValueChange: n,
    label: r,
    description: a,
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
    const g = ae(), _ = u ?? g, N = ae(), y = ae(), C = [
      i ? N : null,
      l ? y : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ o(Ei.Provider, { value: { groupValue: t, onValueChange: n, name: _, groupDisabled: f }, children: /* @__PURE__ */ w(
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
            c && /* @__PURE__ */ o("span", { className: "radio-group__required", "aria-hidden": "true", children: " *" })
          ] }),
          a && /* @__PURE__ */ o("p", { className: "radio-group__description", children: a }),
          /* @__PURE__ */ o("div", { className: "radio-group__items", children: p }),
          i && /* @__PURE__ */ o("p", { id: N, className: "radio-group__hint", children: i }),
          l && s && /* @__PURE__ */ w(
            "p",
            {
              id: y,
              className: "radio-group__message",
              role: s === "negative" ? "alert" : void 0,
              children: [
                /* @__PURE__ */ o(Qf, { validation: s }),
                l
              ]
            }
          )
        ]
      }
    ) });
  }
), Jf = { small: 16, medium: 20 };
function gt(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function Hn(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function ep(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const a = (n - t) / r, i = a > 10 ? Math.ceil(a / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function Un({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: a,
  visible: i
}) {
  const s = gt(e, t, n), l = Hn(s, r);
  return /* @__PURE__ */ o(
    "div",
    {
      className: "range__tooltip",
      style: { left: l },
      "aria-hidden": "true",
      "data-visible": i || void 0,
      children: a(e)
    }
  );
}
function Mi({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: a
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ w(Ce, { children: [
    e.length > 0 && /* @__PURE__ */ o("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ o(
      "div",
      {
        className: "range__marker",
        style: { left: Hn(gt(i, n, r), a) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ o("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ o(
      "span",
      {
        className: "range__indicator",
        style: { left: Hn(gt(i.value, n, r), a) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function Lh(e) {
  const {
    label: t,
    labelPosition: n = "top",
    hideLabel: r = !1,
    min: a = 0,
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
  } = e, N = ae(), y = ae(), C = ae(), E = Jf[l], M = ut(
    () => c ? ep(c, a, i, s) : [],
    [c, a, i, s]
  ), S = f.length > 0, A = [
    d ? y : null,
    h ? C : null
  ].filter(Boolean).join(" ") || void 0, k = /* @__PURE__ */ o(
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
              /* @__PURE__ */ o("span", { className: "range__minmax-label", children: b(a) }),
              /* @__PURE__ */ o("span", { className: "range__minmax-label", children: b(i) })
            ] }),
            /* @__PURE__ */ o(
              "div",
              {
                className: [
                  "range__track-area",
                  S ? "range__track-area--has-indicators" : ""
                ].filter(Boolean).join(" "),
                children: e.dual ? /* @__PURE__ */ o(
                  np,
                  {
                    ...e,
                    min: a,
                    max: i,
                    step: s,
                    size: l,
                    thumbSize: E,
                    markerValues: M,
                    indicators: f,
                    formatValue: b,
                    disabled: v,
                    labelId: N,
                    describedBy: A
                  }
                ) : /* @__PURE__ */ o(
                  tp,
                  {
                    ...e,
                    min: a,
                    max: i,
                    step: s,
                    size: l,
                    thumbSize: E,
                    markerValues: M,
                    indicators: f,
                    formatValue: b,
                    disabled: v,
                    labelId: N,
                    describedBy: A
                  }
                )
              }
            ),
            d && /* @__PURE__ */ o("p", { id: y, className: "range__hint", children: d }),
            h && p && /* @__PURE__ */ w(
              "p",
              {
                id: C,
                className: "range__message",
                role: p === "negative" ? "alert" : void 0,
                children: [
                  /* @__PURE__ */ o(Xe, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
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
function tp({
  value: e,
  onChange: t,
  min: n,
  max: r,
  step: a,
  thumbSize: i,
  markerValues: s,
  indicators: l,
  formatValue: c,
  disabled: f,
  labelId: u,
  describedBy: d
}) {
  const [p, h] = J(!1), v = `${gt(e, n, r)}%`;
  return /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ o(
      Un,
      {
        value: e,
        min: n,
        max: r,
        thumbSize: i,
        formatValue: c,
        visible: p
      }
    ),
    /* @__PURE__ */ o(
      "input",
      {
        type: "range",
        className: "range__input",
        min: n,
        max: r,
        step: a,
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
    /* @__PURE__ */ o(
      Mi,
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
function np({
  value: e,
  onChange: t,
  label: n,
  lowLabel: r,
  highLabel: a,
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
  const [b, v] = e, [g, _] = J(null), N = se(null), y = se(null), C = gt(b, i, s), E = gt(v, i, s);
  function M(O) {
    const x = Math.min(Number(O.target.value), v - l);
    t([x, v]);
  }
  function S(O) {
    const x = Math.max(Number(O.target.value), b + l);
    t([b, x]);
  }
  const A = r ?? `Minimum ${n}`, k = a ?? `Maximum ${n}`;
  return /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ o(
      Un,
      {
        value: b,
        min: i,
        max: s,
        thumbSize: c,
        formatValue: d,
        visible: g === "low"
      }
    ),
    /* @__PURE__ */ o(
      Un,
      {
        value: v,
        min: i,
        max: s,
        thumbSize: c,
        formatValue: d,
        visible: g === "high"
      }
    ),
    /* @__PURE__ */ o(
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
    /* @__PURE__ */ o(
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
        "aria-label": A,
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
    /* @__PURE__ */ o(
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
        onChange: S,
        onFocus: () => _("high"),
        onBlur: () => _(null),
        onPointerDown: () => _("high"),
        onPointerUp: () => {
          document.activeElement !== y.current && _(null);
        }
      }
    ),
    /* @__PURE__ */ o(
      Mi,
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
function so({ item: e }) {
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
          /* @__PURE__ */ o("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: e.icon }),
          e.count !== void 0 && e.count > 0 && /* @__PURE__ */ o(
            Mt,
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
    /* @__PURE__ */ o("span", { className: "navbar__tooltip", role: "tooltip", children: t })
  ] });
}
function rp({
  logo: e,
  productName: t,
  onLogoClick: n,
  tenantLabel: r,
  tenantColor: a = "notice",
  globalNavItems: i = [],
  contextualNavItems: s = [],
  showContextualDivider: l = !0,
  userName: c = "User",
  userAvatarSrc: f,
  userMenuItems: u = [],
  className: d,
  style: p
}) {
  const h = i.slice(0, 5), b = s.slice(0, 4), v = s.slice(4), g = s.length > 0, _ = v.length > 0, N = /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ o("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ o(op, {}) }),
    t && /* @__PURE__ */ o("span", { className: "navbar__product-name", "aria-hidden": "true", children: t })
  ] });
  return /* @__PURE__ */ w(
    "nav",
    {
      className: ["navbar", d].filter(Boolean).join(" "),
      "aria-label": "Application navigation",
      style: p,
      children: [
        n ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "navbar__logo navbar__logo--interactive",
            "aria-label": "Go to home",
            onClick: n,
            children: N
          }
        ) : /* @__PURE__ */ o("div", { className: "navbar__logo", children: N }),
        r && /* @__PURE__ */ o("div", { className: "navbar__tenant", children: /* @__PURE__ */ o(
          ff,
          {
            variant: "fill",
            size: "small",
            color: a,
            className: "navbar__tenant-badge",
            title: r,
            children: r
          }
        ) }),
        h.length > 0 && /* @__PURE__ */ o("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: h.map((y) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(so, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ w(Ce, { children: [
          l && /* @__PURE__ */ o("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ w("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            b.map((y) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(so, { item: y }) }, y.id)),
            _ && /* @__PURE__ */ o("li", { children: /* @__PURE__ */ w(ke, { children: [
              /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
                /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: "navbar__nav-btn",
                    "aria-label": "More navigation items",
                    children: /* @__PURE__ */ o("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(rt, { size: 20 }) })
                  }
                ) }),
                /* @__PURE__ */ o("span", { className: "navbar__tooltip", role: "tooltip", children: "More" })
              ] }),
              /* @__PURE__ */ o(Le, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ w(
                ie,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ o("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ o(
                      Mt,
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
        /* @__PURE__ */ o("div", { className: "navbar__spacer", "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: "navbar__user", children: /* @__PURE__ */ w(ke, { children: [
          /* @__PURE__ */ w("div", { className: "navbar__nav-btn-wrapper", children: [
            /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
              hf,
              {
                name: c,
                src: f,
                size: "m",
                "aria-label": `${c} — open user menu`,
                className: "navbar__avatar-trigger"
              }
            ) }),
            /* @__PURE__ */ o("span", { className: "navbar__tooltip", role: "tooltip", children: c })
          ] }),
          /* @__PURE__ */ w(Le, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ o(bi, { children: c }),
            u.map((y) => /* @__PURE__ */ w("span", { children: [
              y.separator && /* @__PURE__ */ o(vt, {}),
              /* @__PURE__ */ w(ie, { onSelect: y.onClick, children: [
                y.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: y.icon }),
                y.label
              ] })
            ] }, y.id))
          ] })
        ] }) })
      ]
    }
  );
}
function op() {
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
        /* @__PURE__ */ o("rect", { width: "32", height: "32", rx: "8", fill: "var(--color-primary)" }),
        /* @__PURE__ */ o(
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
function ap() {
  return /* @__PURE__ */ o("span", { className: "split-button__spinner", "aria-hidden": "true" });
}
function Bh({
  label: e,
  onClick: t,
  items: n,
  variant: r = "fill",
  color: a = "primary",
  size: i = "medium",
  iconStart: s,
  disabled: l = !1,
  loading: c = !1,
  triggerLabel: f = "More options",
  className: u,
  style: d
}) {
  return /* @__PURE__ */ w(fi, { children: [
    /* @__PURE__ */ w(
      "div",
      {
        className: ["split-button", u].filter(Boolean).join(" "),
        "data-variant": r,
        "data-color": a,
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
                c ? /* @__PURE__ */ o(ap, {}) : s,
                e
              ]
            }
          ),
          /* @__PURE__ */ o("span", { className: "split-button__divider", "aria-hidden": "true" }),
          /* @__PURE__ */ o(pi, { asChild: !0, children: /* @__PURE__ */ o(
            "button",
            {
              className: "split-button__trigger",
              "aria-label": f,
              disabled: l,
              children: /* @__PURE__ */ o(It, { className: "split-button__chevron", "aria-hidden": "true" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ o(Sr, { children: /* @__PURE__ */ o(
      hi,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ w(
          mi,
          {
            className: "split-button__menu-item",
            disabled: p.disabled,
            onSelect: p.disabled ? void 0 : p.onSelect,
            "data-disabled": p.disabled ? "" : void 0,
            children: [
              p.icon && /* @__PURE__ */ o("span", { className: "split-button__menu-icon", "aria-hidden": "true", children: p.icon }),
              p.label
            ]
          },
          p.id
        ))
      }
    ) })
  ] });
}
const ip = {
  negative: /* @__PURE__ */ o(Xe, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  notice: /* @__PURE__ */ o(_t, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ o(tn, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, Fh = R.forwardRef(
  function({
    label: t,
    hint: n,
    validation: r,
    validationMessage: a,
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
    const C = ae(), E = ae(), M = ae(), S = ae(), [A, k] = J(() => String(v ?? g ?? "").length), O = v !== void 0 ? String(v).length : A, x = se(null);
    Yn(y, () => x.current, []), Ct(() => {
      if (i !== "auto") return;
      const j = x.current;
      if (!j) return;
      j.style.height = "auto";
      const z = j.scrollHeight, B = l !== void 0 ? Math.min(z, l) : z, T = s !== void 0 ? Math.max(B, s) : B;
      j.style.height = `${T}px`, j.style.overflowY = l !== void 0 && z >= l ? "auto" : "hidden";
    }, [O, i, s, l]);
    function P(j) {
      k(j.target.value.length), _ == null || _(j);
    }
    const W = !!(a && r), H = [
      W ? M : n ? E : null,
      c && p != null ? S : null
    ].filter(Boolean).join(" ") || void 0, Z = i === "auto" && s != null ? { minHeight: s } : {};
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
            h && /* @__PURE__ */ o("span", { className: "textarea__required", "aria-hidden": "true", children: " *" })
          ] }),
          /* @__PURE__ */ o(
            "textarea",
            {
              ref: x,
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
              "aria-describedby": H,
              "data-resize": i,
              style: Z,
              ...N
            }
          ),
          (n || W || c && p != null) && /* @__PURE__ */ w("div", { className: "textarea__footer", children: [
            W ? /* @__PURE__ */ w(
              "p",
              {
                id: M,
                className: "textarea__message",
                role: r === "negative" ? "alert" : void 0,
                children: [
                  ip[r],
                  a
                ]
              }
            ) : n ? /* @__PURE__ */ o("p", { id: E, className: "textarea__hint", children: n }) : null,
            c && p != null && /* @__PURE__ */ w(
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
          c && p != null && /* @__PURE__ */ o("div", { className: "textarea__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: O >= p ? `Character limit of ${p} reached` : "" })
        ]
      }
    );
  }
), sp = {
  negative: /* @__PURE__ */ o(Xe, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ o(_t, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ o(tn, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, lp = { small: 14, medium: 16, large: 18 }, $h = R.forwardRef(
  function({
    label: t,
    hideLabel: n = !1,
    hint: r,
    validation: a,
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
    onBlur: S,
    maxLength: A,
    ...k
  }, O) {
    const x = ae(), P = ae(), W = ae(), H = ae(), [Z, j] = J(!1), [z, B] = J(!1), [T, X] = J(() => String(y ?? C ?? "").length), K = y !== void 0 ? String(y).length : T, ee = se(null);
    Yn(O, () => ee.current, []);
    const U = v === "password" && Z ? "text" : v, te = lp[s], D = v === "search" && !f ? /* @__PURE__ */ o(as, { size: te, "aria-hidden": "true" }) : f;
    let F = null;
    v === "password" ? F = /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": Z ? "Hide password" : "Show password",
        tabIndex: 0,
        onClick: () => {
          var q;
          j((ge) => !ge), (q = ee.current) == null || q.focus();
        },
        children: Z ? /* @__PURE__ */ o(ho, { size: te, "aria-hidden": "true" }) : /* @__PURE__ */ o(is, { size: te, "aria-hidden": "true" })
      }
    ) : v === "search" && K > 0 ? F = /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const q = ee.current;
          q && (q.value = "", q.focus()), X(0), p == null || p();
        },
        children: /* @__PURE__ */ o(Be, { size: te, "aria-hidden": "true" })
      }
    ) : F = u ?? null;
    const $ = !!D, ne = !!F, Q = !!(i && a), le = [
      Q ? W : r ? P : null,
      d && A != null ? H : null
    ].filter(Boolean).join(" ") || void 0;
    function ve(q) {
      X(q.target.value.length), E == null || E(q);
    }
    function L(q) {
      B(!0), M == null || M(q);
    }
    function V(q) {
      B(!1), S == null || S(q);
    }
    return /* @__PURE__ */ w(
      "div",
      {
        className: ["text-input", h].filter(Boolean).join(" "),
        "data-size": s,
        "data-validation": a,
        "data-disabled": _ || void 0,
        style: b,
        children: [
          /* @__PURE__ */ w(
            "label",
            {
              htmlFor: x,
              className: [
                "text-input__label",
                n ? "text-input__label--hidden" : ""
              ].filter(Boolean).join(" "),
              children: [
                t,
                g && /* @__PURE__ */ o("span", { className: "text-input__required", "aria-hidden": "true", children: " *" })
              ]
            }
          ),
          /* @__PURE__ */ w(
            "div",
            {
              className: "text-input__wrapper",
              "data-focused": z || void 0,
              "data-disabled": _ || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ o("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": $ || void 0,
                    "data-icon-end": ne || void 0,
                    children: [
                      D && /* @__PURE__ */ o("span", { className: "text-input__icon-start", "aria-hidden": "true", children: D }),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          ref: ee,
                          id: x,
                          className: "text-input__field",
                          type: U,
                          required: g,
                          disabled: _,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: A,
                          onChange: ve,
                          onFocus: L,
                          onBlur: V,
                          "aria-required": g || void 0,
                          "aria-invalid": a === "negative" || void 0,
                          "aria-describedby": le,
                          ...k
                        }
                      ),
                      F && /* @__PURE__ */ o("span", { className: "text-input__icon-end", children: F })
                    ]
                  }
                ),
                c != null && /* @__PURE__ */ o("div", { className: "text-input__suffix", "aria-hidden": "true", children: c })
              ]
            }
          ),
          (r || Q || d && A != null) && /* @__PURE__ */ w("div", { className: "text-input__footer", children: [
            Q ? /* @__PURE__ */ w(
              "p",
              {
                id: W,
                className: "text-input__message",
                role: a === "negative" ? "alert" : void 0,
                children: [
                  sp[a],
                  i
                ]
              }
            ) : r ? /* @__PURE__ */ o("p", { id: P, className: "text-input__hint", children: r }) : null,
            d && A != null && /* @__PURE__ */ w(
              "div",
              {
                id: H,
                className: [
                  "text-input__counter",
                  K >= A ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  K,
                  " / ",
                  A
                ]
              }
            )
          ] }),
          d && A != null && /* @__PURE__ */ o("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: K >= A ? `Character limit of ${A} reached` : "" })
        ]
      }
    );
  }
), cp = {
  neutral: 6e3,
  positive: 6e3,
  notice: 0,
  negative: 0
}, dp = {
  neutral: vo,
  positive: tn,
  notice: mo,
  negative: Xe
}, Pi = Xn(null);
function up({ toast: e, onExitStart: t, onExitComplete: n }) {
  const r = se(!1);
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
  function a(l) {
    l.animationName === "toast-exit" && !r.current && (r.current = !0, n(e.id));
  }
  const i = e.variant === "notice" || e.variant === "negative", s = e.variant === "neutral" && e.icon ? e.icon : dp[e.variant];
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
      onAnimationEnd: a,
      children: [
        /* @__PURE__ */ o("span", { className: "toast__icon", "aria-hidden": "true", children: /* @__PURE__ */ o(s, { size: 20 }) }),
        /* @__PURE__ */ w("div", { className: "toast__body", children: [
          /* @__PURE__ */ o("p", { className: "toast__title", children: e.title }),
          e.description && /* @__PURE__ */ o("p", { className: "toast__description", children: e.description }),
          e.timestamp && /* @__PURE__ */ o("p", { className: "toast__timestamp", children: e.timestamp }),
          e.action && /* @__PURE__ */ o(
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
        e.showCloseButton && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "toast__close",
            "aria-label": "Dismiss notification",
            onClick: () => t(e.id),
            children: /* @__PURE__ */ o(Be, { size: 16, "aria-hidden": "true" })
          }
        ),
        e.showProgress && e.duration > 0 && !e.exiting && /* @__PURE__ */ o("div", { className: "toast__progress", "aria-hidden": "true", children: /* @__PURE__ */ o("div", { className: "toast__progress-bar" }) })
      ]
    }
  );
}
function zh({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, a] = J([]), [i, s] = J(t), l = de((d) => {
    const p = d.variant ?? "neutral", h = d.duration !== void 0 ? d.duration : cp[p], b = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
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
    return a((g) => {
      const _ = [v, ...g];
      return _.length > n ? _.slice(0, n) : _;
    }), v.id;
  }, [n]), c = de((d) => {
    a((p) => p.map((h) => h.id === d ? { ...h, exiting: !0 } : h));
  }, []), f = de(() => {
    a((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = de((d) => {
    a((p) => p.filter((h) => h.id !== d));
  }, []);
  return /* @__PURE__ */ w(Pi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Vi(
      /* @__PURE__ */ o("div", { className: "toast-container", "data-position": i, "aria-label": "Notifications", children: r.map((d) => /* @__PURE__ */ o(
        up,
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
function jh() {
  const e = qn(Pi);
  if (!e) throw new Error("useToast must be used within a ToastProvider");
  return e;
}
var fp = Object.freeze({
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
}), pp = "VisuallyHidden", Ii = m.forwardRef(
  (e, t) => /* @__PURE__ */ o(
    ce.span,
    {
      ...e,
      ref: t,
      style: { ...fp, ...e.style }
    }
  )
);
Ii.displayName = pp;
var hp = Ii, [mn] = qe("Tooltip", [
  un
]), vn = un(), Ai = "TooltipProvider", mp = 700, Gn = "tooltip.open", [vp, Rr] = mn(Ai), Oi = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = mp,
    skipDelayDuration: r = 300,
    disableHoverableContent: a = !1,
    children: i
  } = e, s = m.useRef(!0), l = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ o(
    vp,
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
      disableHoverableContent: a,
      children: i
    }
  );
};
Oi.displayName = Ai;
var Pt = "Tooltip", [gp, Lt] = mn(Pt), Ti = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = Rr(Pt, e.__scopeTooltip), f = vn(t), [u, d] = m.useState(null), p = Ge(), h = m.useRef(0), b = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = m.useRef(!1), [_, N] = ot({
    prop: r,
    defaultProp: a ?? !1,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Gn))) : c.onClose(), i == null || i(S);
    },
    caller: Pt
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
  }, []), /* @__PURE__ */ o(mr, { ...f, children: /* @__PURE__ */ o(
    gp,
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
Ti.displayName = Pt;
var Kn = "TooltipTrigger", ki = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, a = Lt(Kn, n), i = Rr(Kn, n), s = vn(n), l = m.useRef(null), c = fe(t, l, a.onTriggerChange), f = m.useRef(!1), u = m.useRef(!1), d = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ o(ia, { asChild: !0, ...s, children: /* @__PURE__ */ o(
      ce.button,
      {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Y(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Y(e.onPointerLeave, () => {
          a.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Y(e.onPointerDown, () => {
          a.open && a.onClose(), f.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: Y(e.onFocus, () => {
          f.current || a.onOpen();
        }),
        onBlur: Y(e.onBlur, a.onClose),
        onClick: Y(e.onClick, a.onClose)
      }
    ) });
  }
);
ki.displayName = Kn;
var Er = "TooltipPortal", [bp, _p] = mn(Er, {
  forceMount: void 0
}), Di = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: a } = e, i = Lt(Er, t);
  return /* @__PURE__ */ o(bp, { scope: t, forceMount: n, children: /* @__PURE__ */ o(Ze, { present: n || i.open, children: /* @__PURE__ */ o(vr, { asChild: !0, container: a, children: r }) }) });
};
Di.displayName = Er;
var bt = "TooltipContent", Li = m.forwardRef(
  (e, t) => {
    const n = _p(bt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: a = "top", ...i } = e, s = Lt(bt, e.__scopeTooltip);
    return /* @__PURE__ */ o(Ze, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ o(Bi, { side: a, ...i, ref: t }) : /* @__PURE__ */ o(wp, { side: a, ...i, ref: t }) });
  }
), wp = m.forwardRef((e, t) => {
  const n = Lt(bt, e.__scopeTooltip), r = Rr(bt, e.__scopeTooltip), a = m.useRef(null), i = fe(t, a), [s, l] = m.useState(null), { trigger: c, onClose: f } = n, u = a.current, { onPointerInTransitChange: d } = r, p = m.useCallback(() => {
    l(null), d(!1);
  }, [d]), h = m.useCallback(
    (b, v) => {
      const g = b.currentTarget, _ = { x: b.clientX, y: b.clientY }, N = xp(_, g.getBoundingClientRect()), y = Sp(_, N), C = Rp(v.getBoundingClientRect()), E = Mp([...y, ...C]);
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
        const g = v.target, _ = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !Ep(_, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ o(Bi, { ...e, ref: i });
}), [yp, Np] = mn(Pt, { isInside: !1 }), Cp = /* @__PURE__ */ us("TooltipContent"), Bi = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": a,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = Lt(bt, n), f = vn(n), { onClose: u } = c;
    return m.useEffect(() => (document.addEventListener(Gn, u), () => document.removeEventListener(Gn, u)), [u]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ o(
      ir,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ w(
          sa,
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
              /* @__PURE__ */ o(Cp, { children: r }),
              /* @__PURE__ */ o(yp, { scope: n, isInside: !0, children: /* @__PURE__ */ o(hp, { id: c.contentId, role: "tooltip", children: a || r }) })
            ]
          }
        )
      }
    );
  }
);
Li.displayName = bt;
var Fi = "TooltipArrow", $i = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, a = vn(n);
    return Np(
      Fi,
      n
    ).isInside ? null : /* @__PURE__ */ o(la, { ...a, ...r, ref: t });
  }
);
$i.displayName = Fi;
function xp(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, a, i)) {
    case i:
      return "left";
    case a:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Sp(e, t, n = 5) {
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
function Rp(e) {
  const { top: t, right: n, bottom: r, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: a, y: r }
  ];
}
function Ep(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (a = !a);
  }
  return a;
}
function Mp(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Pp(t);
}
function Pp(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (a.y - s.y) >= (i.y - s.y) * (a.x - s.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const a = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (a.y - s.y) >= (i.y - s.y) * (a.x - s.x)) n.pop();
      else break;
    }
    n.push(a);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ip = Oi, Ap = Ti, Op = ki, Tp = Di, kp = Li, Dp = $i;
function Lp(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Wh({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: a = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ o(Ce, { children: t });
  const { side: l, align: c } = Lp(n);
  return /* @__PURE__ */ o(Ip, { delayDuration: a, children: /* @__PURE__ */ w(Ap, { children: [
    /* @__PURE__ */ o(Op, { asChild: !0, children: t }),
    /* @__PURE__ */ o(Tp, { children: /* @__PURE__ */ w(
      kp,
      {
        className: "tooltip-content",
        side: l,
        align: c,
        sideOffset: 8,
        style: { maxWidth: s },
        children: [
          e,
          r && /* @__PURE__ */ o(Dp, { className: "tooltip-arrow", width: 12, height: 6 })
        ]
      }
    ) })
  ] }) });
}
const lo = 200, Bp = [];
function Fp(e, t) {
  const n = new Map(t.map((i) => [i.id, i])), r = /* @__PURE__ */ new Set(), a = [];
  for (const i of e)
    if (!i.groupId)
      a.push({ kind: "tab", tab: i });
    else if (!r.has(i.groupId)) {
      r.add(i.groupId);
      const s = n.get(i.groupId);
      s ? a.push({ kind: "group", group: s, tabs: e.filter((l) => l.groupId === i.groupId) }) : a.push({ kind: "tab", tab: i });
    }
  return a;
}
function $p({
  tabs: e,
  activeTabId: t,
  groups: n = Bp,
  onTabActivate: r,
  onTabClose: a,
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
  const g = se(null), [_, N] = J(!1), [y, C] = J(!1), [E, M] = J(/* @__PURE__ */ new Set()), S = de(() => {
    const x = g.current;
    x && (N(x.scrollLeft > 0), C(x.scrollLeft + x.clientWidth < x.scrollWidth - 1));
  }, []);
  ue(() => {
    const x = g.current;
    if (!x) return;
    S(), x.addEventListener("scroll", S, { passive: !0 });
    const P = new ResizeObserver(S);
    return P.observe(x), () => {
      x.removeEventListener("scroll", S), P.disconnect();
    };
  }, [S]);
  function A(x) {
    var P;
    (P = g.current) == null || P.scrollBy({ left: x, behavior: "smooth" });
  }
  function k(x) {
    M((P) => {
      const W = new Set(P);
      return W.has(x) ? W.delete(x) : W.add(x), W;
    });
  }
  const O = Fp(e, n);
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ w(ke, { children: [
          /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(rt, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ w(Le, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ w(Ce, { children: [
              /* @__PURE__ */ o(bi, { children: "Open tabs" }),
              /* @__PURE__ */ o(ku, { children: e.map((x) => /* @__PURE__ */ o(
                ie,
                {
                  onSelect: () => r(x.id),
                  "data-active-tab": x.id === t ? "" : void 0,
                  children: x.label
                },
                x.id
              )) }),
              /* @__PURE__ */ o(vt, {})
            ] }),
            /* @__PURE__ */ o(
              ie,
              {
                onSelect: () => h == null ? void 0 : h(),
                disabled: !h || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o(
          he,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ o(xt, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !_,
            onClick: () => A(-lo),
            className: "footer__scroll-btn"
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            ref: g,
            className: "footer__content",
            role: "tablist",
            "aria-label": "Open tabs",
            children: O.map(
              (x) => x.kind === "tab" ? /* @__PURE__ */ o(
                zi,
                {
                  tab: x.tab,
                  isActive: x.tab.id === t,
                  groups: n,
                  onActivate: () => r(x.tab.id),
                  onClose: a ? () => a(x.tab.id) : void 0,
                  onLock: i ? () => i(x.tab.id) : void 0,
                  onUnlock: s ? () => s(x.tab.id) : void 0,
                  onPin: l ? () => l(x.tab.id) : void 0,
                  onUnpin: c ? () => c(x.tab.id) : void 0,
                  onAddToGroup: f ? () => f(x.tab.id) : void 0,
                  onCloseOthers: b ? () => b(x.tab.id) : void 0,
                  onCloseAll: h
                },
                x.tab.id
              ) : /* @__PURE__ */ o(
                zp,
                {
                  group: x.group,
                  tabs: x.tabs,
                  activeTabId: t,
                  isExpanded: !E.has(x.group.id),
                  onToggle: () => k(x.group.id),
                  onTabActivate: r,
                  onTabClose: a,
                  onTabLock: i,
                  onTabUnlock: s,
                  onTabPin: l,
                  onTabUnpin: c,
                  onAddTabToGroup: f,
                  onCloseOtherTabs: b,
                  onCloseAllTabs: h,
                  onGroupEdit: u ? () => u(x.group.id) : void 0,
                  onGroupUngroup: d ? () => d(x.group.id) : void 0,
                  onGroupClose: p ? () => p(x.group.id) : void 0,
                  allGroups: n
                },
                x.group.id
              )
            )
          }
        ),
        /* @__PURE__ */ o(
          he,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ o(ht, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => A(lo),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function zi({
  tab: e,
  isActive: t,
  groups: n,
  onActivate: r,
  onClose: a,
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
              e.icon && /* @__PURE__ */ o("span", { className: "footer-tab__icon", "aria-hidden": "true", children: e.icon }),
              /* @__PURE__ */ o("span", { className: "footer-tab__label", children: e.label }),
              p === "locked" && /* @__PURE__ */ o(ss, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ o(ls, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ w("span", { className: "footer-tab__actions", children: [
          p === "standard" && a && /* @__PURE__ */ o(
            he,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Be, { size: 12 }),
              "aria-label": `Close ${e.label}`,
              className: "footer-tab__close-btn",
              onClick: a
            }
          ),
          /* @__PURE__ */ w(ke, { children: [
            /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
              he,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ o(rt, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Le, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ o(ie, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ o(ie, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ o(ie, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ o(ie, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ o(ie, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ o(vt, {}),
              p === "standard" && a && /* @__PURE__ */ o(ie, { onSelect: a, children: "Close this tab" }),
              u && /* @__PURE__ */ o(ie, { onSelect: u, children: "Close all other tabs" }),
              p === "standard" && d && /* @__PURE__ */ o(ie, { onSelect: d, children: "Close all tabs" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function zp({
  group: e,
  tabs: t,
  activeTabId: n,
  isExpanded: r,
  onToggle: a,
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
          /* @__PURE__ */ o(
            vf,
            {
              color: N,
              size: "small",
              className: "footer-group__tag",
              role: "button",
              tabIndex: 0,
              onClick: a,
              onKeyDown: (y) => {
                (y.key === "Enter" || y.key === " ") && (y.preventDefault(), a());
              },
              "aria-expanded": r,
              "aria-label": `${e.label} group — ${r ? "collapse" : "expand"}`,
              children: e.label
            }
          ),
          r && (b || v || g) && /* @__PURE__ */ w(ke, { children: [
            /* @__PURE__ */ o(De, { asChild: !0, children: /* @__PURE__ */ o(
              he,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ o(rt, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Le, { side: "top", align: "start", sideOffset: 8, children: [
              b && /* @__PURE__ */ o(ie, { onSelect: b, children: "Edit group" }),
              v && /* @__PURE__ */ o(ie, { onSelect: v, children: "Ungroup" }),
              (b || v) && /* @__PURE__ */ o(vt, {}),
              p && t[0] && /* @__PURE__ */ o(ie, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ o(ie, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ o("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ o(
          zi,
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
function jp({
  logo: e,
  productName: t,
  onLogoClick: n,
  tenantLabel: r,
  tenantColor: a,
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
    const { drawerId: W, ...H } = P;
    return {
      ...H,
      selected: y === W,
      onClick: () => {
        var Z;
        (Z = P.onClick) == null || Z.call(P), E(W);
      }
    };
  }
  const S = i.map(M), A = s.map(M), k = d.find((P) => P.id === y) ?? null, O = k != null && k.persistent ? k : null, x = d.filter((P) => !P.persistent);
  return /* @__PURE__ */ w("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o(
      rp,
      {
        logo: e,
        productName: t,
        onLogoClick: n,
        tenantLabel: r,
        tenantColor: a,
        globalNavItems: S,
        contextualNavItems: A,
        showContextualDivider: l,
        userName: c,
        userAvatarSrc: f,
        userMenuItems: u
      }
    ),
    O && /* @__PURE__ */ o(
      "div",
      {
        className: "main-navigation__panel",
        "data-size": O.size ?? "medium",
        role: "complementary",
        "aria-label": "Navigation panel",
        children: O.content
      }
    ),
    /* @__PURE__ */ o("div", { className: "main-navigation__content", children: b }),
    x.map((P) => /* @__PURE__ */ o(
      uf,
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
function Vh({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ o(
      jp,
      {
        ...e,
        className: ["micro-navigation", e.className, r].filter(Boolean).join(" "),
        children: /* @__PURE__ */ o("main", { className: "micro-navigation__main", children: n })
      }
    ),
    /* @__PURE__ */ o($p, { ...t })
  ] });
}
export {
  Gp as Accordion,
  hf as Avatar,
  bh as AvatarGroup,
  _h as AvatarWithStatus,
  ff as Badge,
  Mh as BannerAlert,
  Fu as Breadcrumbs,
  he as Button,
  Hu as ButtonsToolbar,
  wh as Card,
  xh as CardContent,
  Ch as CardDescription,
  Eh as CardDivider,
  Sh as CardFooter,
  yh as CardHeader,
  Rh as CardSection,
  Nh as CardTitle,
  eh as Checkbox,
  th as CheckboxGroup,
  dt as Chip,
  nh as ChipGroup,
  rh as Combobox,
  Mt as Counter,
  Pf as Dialog,
  Af as DialogBody,
  Of as DialogFooter,
  If as DialogHeader,
  gi as Divider,
  uf as Drawer,
  dh as DrawerContent,
  vh as DrawerContextButton,
  lh as DrawerHeader,
  hh as DrawerListItem,
  fh as DrawerMenuItem,
  ph as DrawerMultiLevelItem,
  mh as DrawerNotificationItem,
  uh as DrawerSection,
  ch as DrawerTools,
  oh as Dropdown,
  ah as FieldLabel,
  ih as FileUploader,
  sh as FileViewer,
  ke as FlyoutMenu,
  Kp as FlyoutMenuCheckboxItem,
  Le as FlyoutMenuContent,
  ku as FlyoutMenuGroup,
  ie as FlyoutMenuItem,
  bi as FlyoutMenuLabel,
  Yp as FlyoutMenuRadioGroup,
  Xp as FlyoutMenuRadioItem,
  vt as FlyoutMenuSeparator,
  Jp as FlyoutMenuShortcut,
  qp as FlyoutMenuSub,
  Qp as FlyoutMenuSubContent,
  Zp as FlyoutMenuSubTrigger,
  De as FlyoutMenuTrigger,
  $p as Footer,
  Yu as Hint,
  Ih as IconBadge,
  we as IconButton,
  gh as Link,
  $f as List,
  zf as ListItem,
  jp as MainNavigation,
  Vh as MicroNavigation,
  rp as Navbar,
  Ah as PageHeader,
  yf as Panel,
  Cf as PanelBody,
  xf as PanelFooter,
  Nf as PanelHeader,
  Oh as ProgressBar,
  Th as ProgressCircle,
  kh as Radio,
  Dh as RadioGroup,
  Lh as Range,
  Sf as Section,
  Vt as Spinner,
  Bh as SplitButton,
  jf as Stepper,
  Wf as StepperStep,
  Ph as Switch,
  Lf as Tab,
  Df as TabList,
  Bf as TabPanel,
  kf as Tabs,
  vf as Tag,
  Fh as TextArea,
  $h as TextInput,
  zh as ToastProvider,
  Wh as Tooltip,
  qu as ValidationMessage,
  jh as useToast
};
