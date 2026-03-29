import { jsx as o, Fragment as xe, jsxs as w } from "react/jsx-runtime";
import * as m from "react";
import R, { useLayoutEffect as Rt, useState as J, useId as ae, useRef as le, useImperativeHandle as qn, useEffect as me, useMemo as pt, useCallback as pe, createContext as Zn, useContext as Qn } from "react";
import * as fo from "react-dom";
import Jn, { createPortal as Yi } from "react-dom";
import { Check as je, ChevronRight as vt, MoreHorizontal as at, MoreVertical as po, X as Fe, XCircle as qe, AlertCircle as Nt, CheckCircle2 as ho, ChevronDown as Ot, HelpCircle as Xi, UploadCloud as qi, Loader2 as Zi, Upload as Qi, Image as Ji, FileText as Dn, Archive as es, File as ts, ZoomOut as ns, ZoomIn as rs, RotateCw as os, Maximize2 as as, Download as Ir, ScanSearch as is, ExternalLink as mo, ChevronLeft as Et, FileX as ss, EyeOff as vo, FileSpreadsheet as ls, AlertTriangle as go, Info as bo, EllipsisVertical as cs, CheckCircle as on, Search as ds, Eye as us, Lock as fs, Pin as ps } from "lucide-react";
function Ze(e, t = []) {
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
  return a.scopeName = e, [r, hs(a, ...t)];
}
function hs(...e) {
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
function Ar(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function an(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const i = Ar(a, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const i = r[a];
          typeof i == "function" ? i() : Ar(e[a], null);
        }
      };
  };
}
function ve(...e) {
  return m.useCallback(an(...e), e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ ms(e), n = m.forwardRef((r, a) => {
    const { children: i, ...s } = r, l = m.Children.toArray(i), c = l.find(gs);
    if (c) {
      const f = c.props.children, u = l.map((d) => d === c ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ o(t, { ...s, ref: a, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ o(t, { ...s, ref: a, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  const t = m.forwardRef((n, r) => {
    const { children: a, ...i } = n;
    if (m.isValidElement(a)) {
      const s = _s(a), l = bs(i, a.props);
      return a.type !== m.Fragment && (l.ref = r ? an(r, s) : s), m.cloneElement(a, l);
    }
    return m.Children.count(a) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _o = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = ({ children: n }) => /* @__PURE__ */ o(xe, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = _o, t;
}
function gs(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _o;
}
function bs(e, t) {
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
function _s(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function er(e) {
  const t = e + "CollectionProvider", [n, r] = Ze(t), [a, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: _ } = v, N = R.useRef(null), y = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ o(a, { scope: g, itemMap: y, collectionRef: N, children: _ });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = /* @__PURE__ */ qt(l), f = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N } = v, y = i(l, _), C = ve(g, y.collectionRef);
      return /* @__PURE__ */ o(c, { ref: C, children: N });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ qt(u), h = R.forwardRef(
    (v, g) => {
      const { scope: _, children: N, ...y } = v, C = R.useRef(null), E = ve(g, C), M = i(u, _);
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
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
var We = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, ws = m[" useInsertionEffect ".trim().toString()] || We;
function it({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, i, s] = ys({
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
        const p = Ns(u) ? u(e) : u;
        p !== e && ((d = s.current) == null || d.call(s, p));
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function ys({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), a = m.useRef(n), i = m.useRef(t);
  return ws(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    a.current !== n && ((s = i.current) == null || s.call(i, n), a.current = n);
  }, [n, a]), [n, r, i];
}
function Ns(e) {
  return typeof e == "function";
}
var Cs = [
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
], ue = Cs.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = m.forwardRef((a, i) => {
    const { asChild: s, ...l } = a, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function wo(e, t) {
  e && fo.flushSync(() => e.dispatchEvent(t));
}
function xs(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Qe = (e) => {
  const { present: t, children: n } = e, r = Ss(t), a = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ve(r.ref, Rs(a));
  return typeof n == "function" || r.isPresent ? m.cloneElement(a, { ref: i }) : null;
};
Qe.displayName = "Presence";
function Ss(e) {
  const [t, n] = m.useState(), r = m.useRef(null), a = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = xs(s, {
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
    const f = zt(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), We(() => {
    const f = r.current, u = a.current;
    if (u !== e) {
      const p = i.current, h = zt(f);
      e ? c("MOUNT") : h === "none" || (f == null ? void 0 : f.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, c]), We(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = zt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = zt(r.current));
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
function zt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Rs(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Es = m[" useId ".trim().toString()] || (() => {
}), Ms = 0;
function Ke(e) {
  const [t, n] = m.useState(Es());
  return We(() => {
    n((r) => r ?? String(Ms++));
  }, [e]), t ? `radix-${t}` : "";
}
var sn = "Collapsible", [Ps, yo] = Ze(sn), [Is, tr] = Ps(sn), No = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: a,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c, f] = it({
      prop: r,
      defaultProp: a ?? !1,
      onChange: s,
      caller: sn
    });
    return /* @__PURE__ */ o(
      Is,
      {
        scope: n,
        disabled: i,
        contentId: Ke(),
        open: c,
        onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ o(
          ue.div,
          {
            "data-state": rr(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
No.displayName = sn;
var Co = "CollapsibleTrigger", xo = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, a = tr(Co, n);
    return /* @__PURE__ */ o(
      ue.button,
      {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": rr(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...r,
        ref: t,
        onClick: q(e.onClick, a.onOpenToggle)
      }
    );
  }
);
xo.displayName = Co;
var nr = "CollapsibleContent", So = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = tr(nr, e.__scopeCollapsible);
    return /* @__PURE__ */ o(Qe, { present: n || a.open, children: ({ present: i }) => /* @__PURE__ */ o(As, { ...r, ref: t, present: i }) });
  }
);
So.displayName = nr;
var As = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: a, ...i } = e, s = tr(nr, n), [l, c] = m.useState(r), f = m.useRef(null), u = ve(t, f), d = m.useRef(0), p = d.current, h = m.useRef(0), b = h.current, v = s.open || l, g = m.useRef(v), _ = m.useRef(void 0);
  return m.useEffect(() => {
    const N = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), We(() => {
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
    ue.div,
    {
      "data-state": rr(s.open),
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
function rr(e) {
  return e ? "open" : "closed";
}
var Os = No, Ts = xo, ks = So, Ds = m.createContext(void 0);
function or(e) {
  const t = m.useContext(Ds);
  return e || t || "ltr";
}
var Ie = "Accordion", Ls = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [ar, Bs, Fs] = er(Ie), [ln] = Ze(Ie, [
  Fs,
  yo
]), ir = yo(), Ro = R.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, a = r, i = r;
    return /* @__PURE__ */ o(ar.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ o(Ws, { ...i, ref: t }) : /* @__PURE__ */ o(js, { ...a, ref: t }) });
  }
);
Ro.displayName = Ie;
var [Eo, $s] = ln(Ie), [Mo, zs] = ln(
  Ie,
  { collapsible: !1 }
), js = R.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: a = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [l, c] = it({
      prop: n,
      defaultProp: r ?? "",
      onChange: a,
      caller: Ie
    });
    return /* @__PURE__ */ o(
      Eo,
      {
        scope: e.__scopeAccordion,
        value: R.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: c,
        onItemClose: R.useCallback(() => i && c(""), [i, c]),
        children: /* @__PURE__ */ o(Mo, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ o(Po, { ...s, ref: t }) })
      }
    );
  }
), Ws = R.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: a = () => {
    },
    ...i
  } = e, [s, l] = it({
    prop: n,
    defaultProp: r ?? [],
    onChange: a,
    caller: Ie
  }), c = R.useCallback(
    (u) => l((d = []) => [...d, u]),
    [l]
  ), f = R.useCallback(
    (u) => l((d = []) => d.filter((p) => p !== u)),
    [l]
  );
  return /* @__PURE__ */ o(
    Eo,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: c,
      onItemClose: f,
      children: /* @__PURE__ */ o(Mo, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ o(Po, { ...i, ref: t }) })
    }
  );
}), [Vs, cn] = ln(Ie), Po = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: a, orientation: i = "vertical", ...s } = e, l = R.useRef(null), c = ve(l, t), f = Bs(n), d = or(a) === "ltr", p = q(e.onKeyDown, (h) => {
      var A;
      if (!Ls.includes(h.key)) return;
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
      const S = N % _;
      (A = v[S].ref.current) == null || A.focus();
    });
    return /* @__PURE__ */ o(
      Vs,
      {
        scope: n,
        disabled: r,
        direction: a,
        orientation: i,
        children: /* @__PURE__ */ o(ar.Slot, { scope: n, children: /* @__PURE__ */ o(
          ue.div,
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
), Zt = "AccordionItem", [Hs, sr] = ln(Zt), Io = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...a } = e, i = cn(Zt, n), s = $s(Zt, n), l = ir(n), c = Ke(), f = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ o(
      Hs,
      {
        scope: n,
        open: f,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ o(
          Os,
          {
            "data-orientation": i.orientation,
            "data-state": Lo(f),
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
Io.displayName = Zt;
var Ao = "AccordionHeader", Oo = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = cn(Ie, n), i = sr(Ao, n);
    return /* @__PURE__ */ o(
      ue.h3,
      {
        "data-orientation": a.orientation,
        "data-state": Lo(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Oo.displayName = Ao;
var Ln = "AccordionTrigger", To = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = cn(Ie, n), i = sr(Ln, n), s = zs(Ln, n), l = ir(n);
    return /* @__PURE__ */ o(ar.ItemSlot, { scope: n, children: /* @__PURE__ */ o(
      Ts,
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
To.displayName = Ln;
var ko = "AccordionContent", Do = R.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, a = cn(Ie, n), i = sr(ko, n), s = ir(n);
    return /* @__PURE__ */ o(
      ks,
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
Do.displayName = ko;
function Lo(e) {
  return e ? "open" : "closed";
}
var Us = Ro, Gs = Io, Ks = Oo, Ys = To, Xs = Do;
function qs() {
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
function Xp({
  items: e,
  size: t = "medium",
  defaultValue: n,
  value: r,
  onValueChange: a,
  className: i
}) {
  return /* @__PURE__ */ o(
    Us,
    {
      ...r !== void 0 ? { type: "multiple", value: r, onValueChange: a } : { type: "multiple", defaultValue: n },
      className: ["accordion", i].filter(Boolean).join(" "),
      "data-size": t,
      children: e.map((l) => /* @__PURE__ */ w(
        Gs,
        {
          value: l.value,
          className: "accordion__item",
          disabled: l.disabled,
          children: [
            /* @__PURE__ */ o(Ks, { className: "accordion__header", children: /* @__PURE__ */ w(Ys, { className: "accordion__trigger", children: [
              l.beforeElement && /* @__PURE__ */ o("span", { className: "accordion__before", "aria-hidden": "true", children: l.beforeElement }),
              /* @__PURE__ */ o("span", { className: "accordion__title", children: l.header }),
              l.afterElement && /* @__PURE__ */ o("span", { className: "accordion__after", children: l.afterElement }),
              /* @__PURE__ */ o(qs, {})
            ] }) }),
            /* @__PURE__ */ o(Xs, { className: "accordion__content", children: /* @__PURE__ */ o("div", { className: "accordion__content-inner", children: l.content }) })
          ]
        },
        l.value
      ))
    }
  );
}
function ke(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Zs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e);
  m.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Qs = "DismissableLayer", Bn = "dismissableLayer.update", Js = "dismissableLayer.pointerDownOutside", el = "dismissableLayer.focusOutside", Or, Bo = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lr = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = m.useContext(Bo), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), b = ve(t, (S) => d(S)), v = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = v.indexOf(g), N = u ? v.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, C = N >= _, E = rl((S) => {
      const A = S.target, k = [...f.branches].some((T) => T.contains(A));
      !C || k || (a == null || a(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p), M = ol((S) => {
      const A = S.target;
      [...f.branches].some((T) => T.contains(A)) || (i == null || i(S), s == null || s(S), S.defaultPrevented || l == null || l());
    }, p);
    return Zs((S) => {
      N === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Or = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Tr(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Or);
        };
    }, [u, p, n, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Tr());
    }, [u, f]), m.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(Bn, S), () => document.removeEventListener(Bn, S);
    }, []), /* @__PURE__ */ o(
      ue.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
lr.displayName = Qs;
var tl = "DismissableLayerBranch", nl = m.forwardRef((e, t) => {
  const n = m.useContext(Bo), r = m.useRef(null), a = ve(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ o(ue.div, { ...e, ref: a });
});
nl.displayName = tl;
function rl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e), r = m.useRef(!1), a = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          Fo(
            Js,
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
function ol(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const a = (i) => {
      i.target && !r.current && Fo(el, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Tr() {
  const e = new CustomEvent(Bn);
  document.dispatchEvent(e);
}
function Fo(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? wo(a, i) : a.dispatchEvent(i);
}
var xn = 0;
function al() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? kr()), document.body.insertAdjacentElement("beforeend", e[1] ?? kr()), xn++, () => {
      xn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), xn--;
    };
  }, []);
}
function kr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Sn = "focusScope.autoFocusOnMount", Rn = "focusScope.autoFocusOnUnmount", Dr = { bubbles: !1, cancelable: !0 }, il = "FocusScope", $o = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = m.useState(null), f = ke(a), u = ke(i), d = m.useRef(null), p = ve(t, (v) => c(v)), h = m.useRef({
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
        l.contains(C) ? d.current = C : Ge(d.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !l) return;
        const C = y.relatedTarget;
        C !== null && (l.contains(C) || Ge(d.current, { select: !0 }));
      }, _ = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && Ge(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const N = new MutationObserver(_);
      return l && N.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), N.disconnect();
      };
    }
  }, [r, l, h.paused]), m.useEffect(() => {
    if (l) {
      Br.add(h);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const _ = new CustomEvent(Sn, Dr);
        l.addEventListener(Sn, f), l.dispatchEvent(_), _.defaultPrevented || (sl(fl(zo(l)), { select: !0 }), document.activeElement === v && Ge(l));
      }
      return () => {
        l.removeEventListener(Sn, f), setTimeout(() => {
          const _ = new CustomEvent(Rn, Dr);
          l.addEventListener(Rn, u), l.dispatchEvent(_), _.defaultPrevented || Ge(v ?? document.body, { select: !0 }), l.removeEventListener(Rn, u), Br.remove(h);
        }, 0);
      };
    }
  }, [l, f, u, h]);
  const b = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, _ = document.activeElement;
      if (g && _) {
        const N = v.currentTarget, [y, C] = ll(N);
        y && C ? !v.shiftKey && _ === C ? (v.preventDefault(), n && Ge(y, { select: !0 })) : v.shiftKey && _ === y && (v.preventDefault(), n && Ge(C, { select: !0 })) : _ === N && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ o(ue.div, { tabIndex: -1, ...s, ref: p, onKeyDown: b });
});
$o.displayName = il;
function sl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ge(r, { select: t }), document.activeElement !== n) return;
}
function ll(e) {
  const t = zo(e), n = Lr(t, e), r = Lr(t.reverse(), e);
  return [n, r];
}
function zo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Lr(e, t) {
  for (const n of e)
    if (!cl(n, { upTo: t })) return n;
}
function cl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dl(e) && t && e.select();
  }
}
var Br = ul();
function ul() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Fr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Fr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Fr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const pl = ["top", "right", "bottom", "left"], Ye = Math.min, Ne = Math.max, Qt = Math.round, jt = Math.floor, Te = (e) => ({
  x: e,
  y: e
}), hl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fn(e, t, n) {
  return Ne(e, Ye(t, n));
}
function Ve(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e) {
  return e.split("-")[0];
}
function Ct(e) {
  return e.split("-")[1];
}
function cr(e) {
  return e === "x" ? "y" : "x";
}
function dr(e) {
  return e === "y" ? "height" : "width";
}
function Oe(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ur(e) {
  return cr(Oe(e));
}
function ml(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ct(e), a = ur(e), i = dr(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Jt(s)), [s, Jt(s)];
}
function vl(e) {
  const t = Jt(e);
  return [$n(e), t, $n(t)];
}
function $n(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const $r = ["left", "right"], zr = ["right", "left"], gl = ["top", "bottom"], bl = ["bottom", "top"];
function _l(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zr : $r : t ? $r : zr;
    case "left":
    case "right":
      return t ? gl : bl;
    default:
      return [];
  }
}
function wl(e, t, n, r) {
  const a = Ct(e);
  let i = _l(He(e), n === "start", r);
  return a && (i = i.map((s) => s + "-" + a), t && (i = i.concat(i.map($n)))), i;
}
function Jt(e) {
  const t = He(e);
  return hl[t] + e.slice(t.length);
}
function yl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jo(e) {
  return typeof e != "number" ? yl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function en(e) {
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
function jr(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Oe(t), s = ur(t), l = dr(s), c = He(t), f = i === "y", u = r.x + r.width / 2 - a.width / 2, d = r.y + r.height / 2 - a.height / 2, p = r[l] / 2 - a[l] / 2;
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
  switch (Ct(t)) {
    case "start":
      h[s] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && f ? -1 : 1);
      break;
  }
  return h;
}
async function Nl(e, t) {
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
  } = Ve(t, e), b = jo(h), g = l[p ? d === "floating" ? "reference" : "floating" : d], _ = en(await i.getClippingRect({
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
  }, E = en(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Cl = 50, xl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Nl
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: d
  } = jr(f, r, c), p = r, h = 0;
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
    }, M && h < Cl && (h++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (f = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : M.rects), {
      x: u,
      y: d
    } = jr(f, p, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: a,
    middlewareData: b
  };
}, Sl = (e) => ({
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
    } = Ve(e, t) || {};
    if (f == null)
      return {};
    const d = jo(u), p = {
      x: n,
      y: r
    }, h = ur(a), b = dr(h), v = await s.getDimensions(f), g = h === "y", _ = g ? "top" : "left", N = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[h] - p[h] - i.floating[b], E = p[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let S = M ? M[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(M))) && (S = l.floating[y] || i.floating[b]);
    const A = C / 2 - E / 2, k = S / 2 - v[b] / 2 - 1, T = Ye(d[_], k), x = Ye(d[N], k), P = T, $ = S - v[b] - x, j = S / 2 - v[b] / 2 + A, Z = Fn(P, j, $), F = !c.arrow && Ct(a) != null && j !== Z && i.reference[b] / 2 - (j < P ? T : x) - v[b] / 2 < 0, W = F ? j < P ? j - P : j - $ : 0;
    return {
      [h]: p[h] + W,
      data: {
        [h]: Z,
        centerOffset: j - Z - W,
        ...F && {
          alignmentOffset: W
        }
      },
      reset: F
    };
  }
}), Rl = function(e) {
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
      } = Ve(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = He(a), N = Oe(l), y = He(l) === l, C = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), E = p || (y || !v ? [Jt(l)] : vl(l)), M = b !== "none";
      !p && M && E.push(...wl(l, v, b, C));
      const S = [l, ...E], A = await c.detectOverflow(t, g), k = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && k.push(A[_]), d) {
        const j = ml(a, s, C);
        k.push(A[j[0]], A[j[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: k
      }], !k.every((j) => j <= 0)) {
        var x, P;
        const j = (((x = i.flip) == null ? void 0 : x.index) || 0) + 1, Z = S[j];
        if (Z && (!(d === "alignment" ? N !== Oe(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((B) => Oe(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: T
            },
            reset: {
              placement: Z
            }
          };
        let F = (P = T.filter((W) => W.overflows[0] <= 0).sort((W, B) => W.overflows[1] - B.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!F)
          switch (h) {
            case "bestFit": {
              var $;
              const W = ($ = T.filter((B) => {
                if (M) {
                  const O = Oe(B.placement);
                  return O === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((O) => O > 0).reduce((O, K) => O + K, 0)]).sort((B, O) => B[1] - O[1])[0]) == null ? void 0 : $[0];
              W && (F = W);
              break;
            }
            case "initialPlacement":
              F = l;
              break;
          }
        if (a !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function Wr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Vr(e) {
  return pl.some((t) => e[t] >= 0);
}
const El = function(e) {
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
      } = Ve(e, t);
      switch (a) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Wr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Vr(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Wr(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Vr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wo = /* @__PURE__ */ new Set(["left", "top"]);
async function Ml(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = He(n), l = Ct(n), c = Oe(n) === "y", f = Wo.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = Ve(t, e);
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
const Pl = function(e) {
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
      } = t, c = await Ml(t, e);
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
}, Il = function(e) {
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
      } = Ve(e, t), u = {
        x: n,
        y: r
      }, d = await i.detectOverflow(t, f), p = Oe(He(a)), h = cr(p);
      let b = u[h], v = u[p];
      if (s) {
        const _ = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", y = b + d[_], C = b - d[N];
        b = Fn(y, b, C);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", y = v + d[_], C = v - d[N];
        v = Fn(y, v, C);
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
}, Al = function(e) {
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
      } = Ve(e, t), u = {
        x: n,
        y: r
      }, d = Oe(a), p = cr(d);
      let h = u[p], b = u[d];
      const v = Ve(l, t), g = typeof v == "number" ? {
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
        const y = p === "y" ? "width" : "height", C = Wo.has(He(a)), E = i.reference[d] - i.floating[y] + (C && ((_ = s.offset) == null ? void 0 : _[d]) || 0) + (C ? 0 : g.crossAxis), M = i.reference[d] + i.reference[y] + (C ? 0 : ((N = s.offset) == null ? void 0 : N[d]) || 0) - (C ? g.crossAxis : 0);
        b < E ? b = E : b > M && (b = M);
      }
      return {
        [p]: h,
        [d]: b
      };
    }
  };
}, Ol = function(e) {
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
      } = Ve(e, t), u = await s.detectOverflow(t, f), d = He(a), p = Ct(a), h = Oe(a) === "y", {
        width: b,
        height: v
      } = i.floating;
      let g, _;
      d === "top" || d === "bottom" ? (g = d, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = p === "end" ? "top" : "bottom");
      const N = v - u.top - u.bottom, y = b - u.left - u.right, C = Ye(v - u[g], N), E = Ye(b - u[_], y), M = !t.middlewareData.shift;
      let S = C, A = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = N), M && !p) {
        const T = Ne(u.left, 0), x = Ne(u.right, 0), P = Ne(u.top, 0), $ = Ne(u.bottom, 0);
        h ? A = b - 2 * (T !== 0 || x !== 0 ? T + x : Ne(u.left, u.right)) : S = v - 2 * (P !== 0 || $ !== 0 ? P + $ : Ne(u.top, u.bottom));
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
function dn() {
  return typeof window < "u";
}
function xt(e) {
  return Vo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $e(e) {
  var t;
  return (t = (Vo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vo(e) {
  return dn() ? e instanceof Node || e instanceof Ce(e).Node : !1;
}
function Me(e) {
  return dn() ? e instanceof Element || e instanceof Ce(e).Element : !1;
}
function Ue(e) {
  return dn() ? e instanceof HTMLElement || e instanceof Ce(e).HTMLElement : !1;
}
function Hr(e) {
  return !dn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ce(e).ShadowRoot;
}
function Tt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && a !== "inline" && a !== "contents";
}
function Tl(e) {
  return /^(table|td|th)$/.test(xt(e));
}
function un(e) {
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
const kl = /transform|translate|scale|rotate|perspective|filter/, Dl = /paint|layout|strict|content/, rt = (e) => !!e && e !== "none";
let En;
function fr(e) {
  const t = Me(e) ? Pe(e) : e;
  return rt(t.transform) || rt(t.translate) || rt(t.scale) || rt(t.rotate) || rt(t.perspective) || !pr() && (rt(t.backdropFilter) || rt(t.filter)) || kl.test(t.willChange || "") || Dl.test(t.contain || "");
}
function Ll(e) {
  let t = Xe(e);
  for (; Ue(t) && !gt(t); ) {
    if (fr(t))
      return t;
    if (un(t))
      return null;
    t = Xe(t);
  }
  return null;
}
function pr() {
  return En == null && (En = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), En;
}
function gt(e) {
  return /^(html|body|#document)$/.test(xt(e));
}
function Pe(e) {
  return Ce(e).getComputedStyle(e);
}
function fn(e) {
  return Me(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Xe(e) {
  if (xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hr(e) && e.host || // Fallback.
    $e(e)
  );
  return Hr(t) ? t.host : t;
}
function Ho(e) {
  const t = Xe(e);
  return gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && Tt(t) ? t : Ho(t);
}
function Mt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Ho(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ce(a);
  if (i) {
    const l = zn(s);
    return t.concat(s, s.visualViewport || [], Tt(a) ? a : [], l && n ? Mt(l) : []);
  } else
    return t.concat(a, Mt(a, [], n));
}
function zn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Uo(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Ue(e), i = a ? e.offsetWidth : n, s = a ? e.offsetHeight : r, l = Qt(n) !== i || Qt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function hr(e) {
  return Me(e) ? e : e.contextElement;
}
function ht(e) {
  const t = hr(e);
  if (!Ue(t))
    return Te(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = Uo(t);
  let s = (i ? Qt(n.width) : n.width) / r, l = (i ? Qt(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Bl = /* @__PURE__ */ Te(0);
function Go(e) {
  const t = Ce(e);
  return !pr() || !t.visualViewport ? Bl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ce(e) ? !1 : t;
}
function ot(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = hr(e);
  let s = Te(1);
  t && (r ? Me(r) && (s = ht(r)) : s = ht(e));
  const l = Fl(i, n, r) ? Go(i) : Te(0);
  let c = (a.left + l.x) / s.x, f = (a.top + l.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (i) {
    const p = Ce(i), h = r && Me(r) ? Ce(r) : r;
    let b = p, v = zn(b);
    for (; v && r && h !== b; ) {
      const g = ht(v), _ = v.getBoundingClientRect(), N = Pe(v), y = _.left + (v.clientLeft + parseFloat(N.paddingLeft)) * g.x, C = _.top + (v.clientTop + parseFloat(N.paddingTop)) * g.y;
      c *= g.x, f *= g.y, u *= g.x, d *= g.y, c += y, f += C, b = Ce(v), v = zn(b);
    }
  }
  return en({
    width: u,
    height: d,
    x: c,
    y: f
  });
}
function pn(e, t) {
  const n = fn(e).scrollLeft;
  return t ? t.left + n : ot($e(e)).left + n;
}
function Ko(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - pn(e, n), a = n.top + t.scrollTop;
  return {
    x: r,
    y: a
  };
}
function $l(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", s = $e(r), l = t ? un(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Te(1);
  const u = Te(0), d = Ue(r);
  if ((d || !d && !i) && ((xt(r) !== "body" || Tt(s)) && (c = fn(r)), d)) {
    const h = ot(r);
    f = ht(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !d && !i ? Ko(s, c) : Te(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
  };
}
function zl(e) {
  return Array.from(e.getClientRects());
}
function jl(e) {
  const t = $e(e), n = fn(e), r = e.ownerDocument.body, a = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + pn(e);
  const l = -n.scrollTop;
  return Pe(r).direction === "rtl" && (s += Ne(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const Ur = 25;
function Wl(e, t) {
  const n = Ce(e), r = $e(e), a = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (a) {
    i = a.width, s = a.height;
    const u = pr();
    (!u || u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  const f = pn(r);
  if (f <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - h);
    b <= Ur && (i -= b);
  } else f <= Ur && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Vl(e, t) {
  const n = ot(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = Ue(e) ? ht(e) : Te(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = a * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Gr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Wl(e, n);
  else if (t === "document")
    r = jl($e(e));
  else if (Me(t))
    r = Vl(t, n);
  else {
    const a = Go(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return en(r);
}
function Yo(e, t) {
  const n = Xe(e);
  return n === t || !Me(n) || gt(n) ? !1 : Pe(n).position === "fixed" || Yo(n, t);
}
function Hl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Mt(e, [], !1).filter((l) => Me(l) && xt(l) !== "body"), a = null;
  const i = Pe(e).position === "fixed";
  let s = i ? Xe(e) : e;
  for (; Me(s) && !gt(s); ) {
    const l = Pe(s), c = fr(s);
    !c && l.position === "fixed" && (a = null), (i ? !c && !a : !c && l.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || Tt(s) && !c && Yo(e, s)) ? r = r.filter((u) => u !== s) : a = l, s = Xe(s);
  }
  return t.set(e, r), r;
}
function Ul(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? un(t) ? [] : Hl(t, this._c) : [].concat(n), r], l = Gr(t, s[0], a);
  let c = l.top, f = l.right, u = l.bottom, d = l.left;
  for (let p = 1; p < s.length; p++) {
    const h = Gr(t, s[p], a);
    c = Ne(h.top, c), f = Ye(h.right, f), u = Ye(h.bottom, u), d = Ne(h.left, d);
  }
  return {
    width: f - d,
    height: u - c,
    x: d,
    y: c
  };
}
function Gl(e) {
  const {
    width: t,
    height: n
  } = Uo(e);
  return {
    width: t,
    height: n
  };
}
function Kl(e, t, n) {
  const r = Ue(t), a = $e(t), i = n === "fixed", s = ot(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Te(0);
  function f() {
    c.x = pn(a);
  }
  if (r || !r && !i)
    if ((xt(t) !== "body" || Tt(a)) && (l = fn(t)), r) {
      const h = ot(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const u = a && !r && !i ? Ko(a, l) : Te(0), d = s.left + l.scrollLeft - c.x - u.x, p = s.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Mn(e) {
  return Pe(e).position === "static";
}
function Kr(e, t) {
  if (!Ue(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return $e(e) === n && (n = n.ownerDocument.body), n;
}
function Xo(e, t) {
  const n = Ce(e);
  if (un(e))
    return n;
  if (!Ue(e)) {
    let a = Xe(e);
    for (; a && !gt(a); ) {
      if (Me(a) && !Mn(a))
        return a;
      a = Xe(a);
    }
    return n;
  }
  let r = Kr(e, t);
  for (; r && Tl(r) && Mn(r); )
    r = Kr(r, t);
  return r && gt(r) && Mn(r) && !fr(r) ? n : r || Ll(e) || n;
}
const Yl = async function(e) {
  const t = this.getOffsetParent || Xo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Kl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Xl(e) {
  return Pe(e).direction === "rtl";
}
const ql = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $l,
  getDocumentElement: $e,
  getClippingRect: Ul,
  getOffsetParent: Xo,
  getElementRects: Yl,
  getClientRects: zl,
  getDimensions: Gl,
  getScale: ht,
  isElement: Me,
  isRTL: Xl
};
function qo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zl(e, t) {
  let n = null, r;
  const a = $e(e);
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
    const b = jt(d), v = jt(a.clientWidth - (u + p)), g = jt(a.clientHeight - (d + h)), _ = jt(u), y = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -_ + "px",
      threshold: Ne(0, Ye(1, c)) || 1
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
      S === 1 && !qo(f, e.getBoundingClientRect()) && s(), C = !1;
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
function Ql(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = hr(e), u = a || i ? [...f ? Mt(f) : [], ...t ? Mt(t) : []] : [];
  u.forEach((_) => {
    a && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const d = f && l ? Zl(f, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((_) => {
    let [N] = _;
    N && N.target === f && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), f && !c && h.observe(f), t && h.observe(t));
  let b, v = c ? ot(e) : null;
  c && g();
  function g() {
    const _ = ot(e);
    v && !qo(v, _) && n(), v = _, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var _;
    u.forEach((N) => {
      a && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), d == null || d(), (_ = h) == null || _.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const Jl = Pl, ec = Il, tc = Rl, nc = Ol, rc = El, Yr = Sl, oc = Al, ac = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: ql,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return xl(e, t, {
    ...a,
    platform: i
  });
};
var ic = typeof document < "u", sc = function() {
}, Kt = ic ? Rt : sc;
function tn(e, t) {
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
        if (!tn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !tn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xr(e, t) {
  const n = Zo(e);
  return Math.round(t * n) / n;
}
function Pn(e) {
  const t = m.useRef(e);
  return Kt(() => {
    t.current = e;
  }), t;
}
function lc(e) {
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
  tn(p, r) || h(r);
  const [b, v] = m.useState(null), [g, _] = m.useState(null), N = m.useCallback((B) => {
    B !== M.current && (M.current = B, v(B));
  }, []), y = m.useCallback((B) => {
    B !== S.current && (S.current = B, _(B));
  }, []), C = i || b, E = s || g, M = m.useRef(null), S = m.useRef(null), A = m.useRef(u), k = c != null, T = Pn(c), x = Pn(a), P = Pn(f), $ = m.useCallback(() => {
    if (!M.current || !S.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    x.current && (B.platform = x.current), ac(M.current, S.current, B).then((O) => {
      const K = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      j.current && !tn(A.current, K) && (A.current = K, fo.flushSync(() => {
        d(K);
      }));
    });
  }, [p, t, n, x, P]);
  Kt(() => {
    f === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const j = m.useRef(!1);
  Kt(() => (j.current = !0, () => {
    j.current = !1;
  }), []), Kt(() => {
    if (C && (M.current = C), E && (S.current = E), C && E) {
      if (T.current)
        return T.current(C, E, $);
      $();
    }
  }, [C, E, $, T, k]);
  const Z = m.useMemo(() => ({
    reference: M,
    floating: S,
    setReference: N,
    setFloating: y
  }), [N, y]), F = m.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), W = m.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return B;
    const O = Xr(F.floating, u.x), K = Xr(F.floating, u.y);
    return l ? {
      ...B,
      transform: "translate(" + O + "px, " + K + "px)",
      ...Zo(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: K
    };
  }, [n, l, F.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: $,
    refs: Z,
    elements: F,
    floatingStyles: W
  }), [u, $, Z, F, W]);
}
const cc = (e) => {
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
      return r && t(r) ? r.current != null ? Yr({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Yr({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, dc = (e, t) => {
  const n = Jl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, uc = (e, t) => {
  const n = ec(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, fc = (e, t) => ({
  fn: oc(e).fn,
  options: [e, t]
}), pc = (e, t) => {
  const n = tc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, hc = (e, t) => {
  const n = nc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, mc = (e, t) => {
  const n = rc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, vc = (e, t) => {
  const n = cc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var gc = "Arrow", Qo = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...i } = e;
  return /* @__PURE__ */ o(
    ue.svg,
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
Qo.displayName = gc;
var bc = Qo;
function _c(e) {
  const [t, n] = m.useState(void 0);
  return We(() => {
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
var mr = "Popper", [Jo, hn] = Ze(mr), [wc, ea] = Jo(mr), ta = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = m.useState(null);
  return /* @__PURE__ */ o(wc, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
ta.displayName = mr;
var na = "PopperAnchor", ra = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, i = ea(na, n), s = m.useRef(null), l = ve(t, s), c = m.useRef(null);
    return m.useEffect(() => {
      const f = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ o(ue.div, { ...a, ref: l });
  }
);
ra.displayName = na;
var vr = "PopperContent", [yc, Nc] = Jo(vr), oa = m.forwardRef(
  (e, t) => {
    var Y, z, H, ce, de, oe;
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
    } = e, g = ea(vr, n), [_, N] = m.useState(null), y = ve(t, (fe) => N(fe)), [C, E] = m.useState(null), M = _c(C), S = (M == null ? void 0 : M.width) ?? 0, A = (M == null ? void 0 : M.height) ?? 0, k = r + (i !== "center" ? "-" + i : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, x = Array.isArray(f) ? f : [f], P = x.length > 0, $ = {
      padding: T,
      boundary: x.filter(xc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: j, floatingStyles: Z, placement: F, isPositioned: W, middlewareData: B } = lc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...fe) => Ql(...fe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        dc({ mainAxis: a + A, alignmentAxis: s }),
        c && uc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? fc() : void 0,
          ...$
        }),
        c && pc({ ...$ }),
        hc({
          ...$,
          apply: ({ elements: fe, rects: ie, availableWidth: he, availableHeight: L }) => {
            const { width: X, height: ne } = ie.reference, ge = fe.floating.style;
            ge.setProperty("--radix-popper-available-width", `${he}px`), ge.setProperty("--radix-popper-available-height", `${L}px`), ge.setProperty("--radix-popper-anchor-width", `${X}px`), ge.setProperty("--radix-popper-anchor-height", `${ne}px`);
          }
        }),
        C && vc({ element: C, padding: l }),
        Sc({ arrowWidth: S, arrowHeight: A }),
        p && mc({ strategy: "referenceHidden", ...$ })
      ]
    }), [O, K] = sa(F), Q = ke(b);
    We(() => {
      W && (Q == null || Q());
    }, [W, Q]);
    const ee = (Y = B.arrow) == null ? void 0 : Y.x, V = (z = B.arrow) == null ? void 0 : z.y, te = ((H = B.arrow) == null ? void 0 : H.centerOffset) !== 0, [D, U] = m.useState();
    return We(() => {
      _ && U(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ o(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: W ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D,
          "--radix-popper-transform-origin": [
            (ce = B.transformOrigin) == null ? void 0 : ce.x,
            (de = B.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((oe = B.hide) == null ? void 0 : oe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ o(
          yc,
          {
            scope: n,
            placedSide: O,
            onArrowChange: E,
            arrowX: ee,
            arrowY: V,
            shouldHideArrow: te,
            children: /* @__PURE__ */ o(
              ue.div,
              {
                "data-side": O,
                "data-align": K,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
oa.displayName = vr;
var aa = "PopperArrow", Cc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ia = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, i = Nc(aa, r), s = Cc[i.placedSide];
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
          bc,
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
ia.displayName = aa;
function xc(e) {
  return e !== null;
}
var Sc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, _, N;
    const { placement: n, rects: r, middlewareData: a } = t, s = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = sa(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((_ = a.arrow) == null ? void 0 : _.x) ?? 0) + l / 2, h = (((N = a.arrow) == null ? void 0 : N.y) ?? 0) + c / 2;
    let b = "", v = "";
    return f === "bottom" ? (b = s ? d : `${p}px`, v = `${-c}px`) : f === "top" ? (b = s ? d : `${p}px`, v = `${r.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, v = s ? d : `${h}px`) : f === "left" && (b = `${r.floating.width + c}px`, v = s ? d : `${h}px`), { data: { x: b, y: v } };
  }
});
function sa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var gr = ta, la = ra, ca = oa, da = ia, Rc = "Portal", br = m.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [a, i] = m.useState(!1);
  We(() => i(!0), []);
  const s = n || a && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? Jn.createPortal(/* @__PURE__ */ o(ue.div, { ...r, ref: t }), s) : null;
});
br.displayName = Rc;
var In = "rovingFocusGroup.onEntryFocus", Ec = { bubbles: !1, cancelable: !0 }, kt = "RovingFocusGroup", [jn, ua, Mc] = er(kt), [Pc, fa] = Ze(
  kt,
  [Mc]
), [Ic, Ac] = Pc(kt), pa = m.forwardRef(
  (e, t) => /* @__PURE__ */ o(jn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o(jn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o(Oc, { ...e, ref: t }) }) })
);
pa.displayName = kt;
var Oc = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = ve(t, p), b = or(i), [v, g] = it({
    prop: s,
    defaultProp: l ?? null,
    onChange: c,
    caller: kt
  }), [_, N] = m.useState(!1), y = ke(f), C = ua(n), E = m.useRef(!1), [M, S] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(In, y), () => A.removeEventListener(In, y);
  }, [y]), /* @__PURE__ */ o(
    Ic,
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
        ue.div,
        {
          tabIndex: _ || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: q(e.onFocus, (A) => {
            const k = !E.current;
            if (A.target === A.currentTarget && k && !_) {
              const T = new CustomEvent(In, Ec);
              if (A.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const x = C().filter((F) => F.focusable), P = x.find((F) => F.active), $ = x.find((F) => F.id === v), Z = [P, $, ...x].filter(
                  Boolean
                ).map((F) => F.ref.current);
                va(Z, u);
              }
            }
            E.current = !1;
          }),
          onBlur: q(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), ha = "RovingFocusGroupItem", ma = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: a = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, c = Ke(), f = i || c, u = Ac(ha, n), d = u.currentTabStopId === f, p = ua(n), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ o(
      jn.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: r,
        active: a,
        children: /* @__PURE__ */ o(
          ue.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...l,
            ref: t,
            onMouseDown: q(e.onMouseDown, (g) => {
              r ? u.onItemFocus(f) : g.preventDefault();
            }),
            onFocus: q(e.onFocus, () => u.onItemFocus(f)),
            onKeyDown: q(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const _ = Dc(g, u.orientation, u.dir);
              if (_ !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (_ === "last") y.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && y.reverse();
                  const C = y.indexOf(g.currentTarget);
                  y = u.loop ? Lc(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => va(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
ma.displayName = ha;
var Tc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function kc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Dc(e, t, n) {
  const r = kc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Tc[r];
}
function va(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Lc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Bc = pa, Fc = ma, $c = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ct = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Vt = {}, An = 0, ga = function(e) {
  return e && (e.host || ga(e.parentNode));
}, zc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ga(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jc = function(e, t, n, r) {
  var a = zc(t, Array.isArray(e) ? e : [e]);
  Vt[n] || (Vt[n] = /* @__PURE__ */ new WeakMap());
  var i = Vt[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(a), f = function(d) {
    !d || l.has(d) || (l.add(d), f(d.parentNode));
  };
  a.forEach(f);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (l.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), b = h !== null && h !== "false", v = (ct.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          ct.set(p, v), i.set(p, g), s.push(p), v === 1 && b && Wt.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), l.clear(), An++, function() {
    s.forEach(function(d) {
      var p = ct.get(d) - 1, h = i.get(d) - 1;
      ct.set(d, p), i.set(d, h), p || (Wt.has(d) || d.removeAttribute(r), Wt.delete(d)), h || d.removeAttribute(n);
    }), An--, An || (ct = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Vt = {});
  };
}, Wc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = $c(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), jc(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Ae = function() {
  return Ae = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ae.apply(this, arguments);
};
function ba(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Vc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Yt = "right-scroll-bar-position", Xt = "width-before-scroll-bar", Hc = "with-scroll-bars-hidden", Uc = "--removed-body-scroll-bar-size";
function On(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Gc(e, t) {
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
var Kc = typeof window < "u" ? m.useLayoutEffect : m.useEffect, qr = /* @__PURE__ */ new WeakMap();
function Yc(e, t) {
  var n = Gc(null, function(r) {
    return e.forEach(function(a) {
      return On(a, r);
    });
  });
  return Kc(function() {
    var r = qr.get(n);
    if (r) {
      var a = new Set(r), i = new Set(e), s = n.current;
      a.forEach(function(l) {
        i.has(l) || On(l, null);
      }), i.forEach(function(l) {
        a.has(l) || On(l, s);
      });
    }
    qr.set(n, e);
  }, [e]), n;
}
function Xc(e) {
  return e;
}
function qc(e, t) {
  t === void 0 && (t = Xc);
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
function Zc(e) {
  e === void 0 && (e = {});
  var t = qc(null);
  return t.options = Ae({ async: !0, ssr: !1 }, e), t;
}
var _a = function(e) {
  var t = e.sideCar, n = ba(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, Ae({}, n));
};
_a.isSideCarExport = !0;
function Qc(e, t) {
  return e.useMedium(t), _a;
}
var wa = Zc(), Tn = function() {
}, mn = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Tn,
    onWheelCapture: Tn,
    onTouchMoveCapture: Tn
  }), a = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, _ = e.as, N = _ === void 0 ? "div" : _, y = e.gapMode, C = ba(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, M = Yc([n, t]), S = Ae(Ae({}, C), a);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(E, { sideCar: wa, removeScrollBar: f, shards: d, noRelative: h, noIsolation: b, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(l), Ae(Ae({}, S), { ref: M })) : m.createElement(N, Ae({}, S, { className: c, ref: M }), l)
  );
});
mn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
mn.classNames = {
  fullWidth: Xt,
  zeroRight: Yt
};
var Jc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ed() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Jc();
  return t && e.setAttribute("nonce", t), e;
}
function td(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function nd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rd = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ed()) && (td(t, n), nd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, od = function() {
  var e = rd();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ya = function() {
  var e = od(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ad = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kn = function(e) {
  return parseInt(e || "", 10) || 0;
}, id = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kn(n), kn(r), kn(a)];
}, sd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ad;
  var t = id(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ld = ya(), mt = "data-scroll-locked", cd = function(e, t, n, r) {
  var a = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Hc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(mt, `] {
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
  
  .`).concat(Yt, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Xt, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Yt, " .").concat(Yt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xt, " .").concat(Xt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(mt, `] {
    `).concat(Uc, ": ").concat(l, `px;
  }
`);
}, Zr = function() {
  var e = parseInt(document.body.getAttribute(mt) || "0", 10);
  return isFinite(e) ? e : 0;
}, dd = function() {
  m.useEffect(function() {
    return document.body.setAttribute(mt, (Zr() + 1).toString()), function() {
      var e = Zr() - 1;
      e <= 0 ? document.body.removeAttribute(mt) : document.body.setAttribute(mt, e.toString());
    };
  }, []);
}, ud = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  dd();
  var i = m.useMemo(function() {
    return sd(a);
  }, [a]);
  return m.createElement(ld, { styles: cd(i, !t, a, n ? "" : "!important") });
}, Wn = !1;
if (typeof window < "u")
  try {
    var Ht = Object.defineProperty({}, "passive", {
      get: function() {
        return Wn = !0, !0;
      }
    });
    window.addEventListener("test", Ht, Ht), window.removeEventListener("test", Ht, Ht);
  } catch {
    Wn = !1;
  }
var dt = Wn ? { passive: !1 } : !1, fd = function(e) {
  return e.tagName === "TEXTAREA";
}, Na = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fd(e) && n[t] === "visible")
  );
}, pd = function(e) {
  return Na(e, "overflowY");
}, hd = function(e) {
  return Na(e, "overflowX");
}, Qr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Ca(e, r);
    if (a) {
      var i = xa(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, md = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, vd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ca = function(e, t) {
  return e === "v" ? pd(t) : hd(t);
}, xa = function(e, t) {
  return e === "v" ? md(t) : vd(t);
}, gd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bd = function(e, t, n, r, a) {
  var i = gd(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, d = 0, p = 0;
  do {
    if (!l)
      break;
    var h = xa(e, l), b = h[0], v = h[1], g = h[2], _ = v - g - i * b;
    (b || _) && Ca(e, l) && (d += _, p += b);
    var N = l.parentNode;
    l = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, Ut = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Jr = function(e) {
  return [e.deltaX, e.deltaY];
}, eo = function(e) {
  return e && "current" in e ? e.current : e;
}, _d = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yd = 0, ut = [];
function Nd(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), a = m.useState(yd++)[0], i = m.useState(ya)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = Vc([e.lockRef.current], (e.shards || []).map(eo), !0).filter(Boolean);
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
    var _ = Ut(v), N = n.current, y = "deltaX" in v ? v.deltaX : N[0] - _[0], C = "deltaY" in v ? v.deltaY : N[1] - _[1], E, M = v.target, S = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && S === "h" && M.type === "range")
      return !1;
    var A = window.getSelection(), k = A && A.anchorNode, T = k ? k === M || k.contains(M) : !1;
    if (T)
      return !1;
    var x = Qr(S, M);
    if (!x)
      return !0;
    if (x ? E = S : (E = S === "v" ? "h" : "v", x = Qr(S, M)), !x)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return bd(P, g, v, P === "h" ? y : C);
  }, []), c = m.useCallback(function(v) {
    var g = v;
    if (!(!ut.length || ut[ut.length - 1] !== i)) {
      var _ = "deltaY" in g ? Jr(g) : Ut(g), N = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && _d(E.delta, _);
      })[0];
      if (N && N.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!N) {
        var y = (s.current.shards || []).map(eo).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), C = y.length > 0 ? l(g, y[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(v, g, _, N) {
    var y = { name: v, delta: g, target: _, should: N, shadowParent: Cd(_) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = Ut(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    f(v.type, Jr(v), v.target, l(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    f(v.type, Ut(v), v.target, l(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return ut.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, dt), document.addEventListener("touchmove", c, dt), document.addEventListener("touchstart", u, dt), function() {
      ut = ut.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, dt), document.removeEventListener("touchmove", c, dt), document.removeEventListener("touchstart", u, dt);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: wd(a) }) : null,
    h ? m.createElement(ud, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Cd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const xd = Qc(wa, Nd);
var Sa = m.forwardRef(function(e, t) {
  return m.createElement(mn, Ae({}, e, { ref: t, sideCar: xd }));
});
Sa.classNames = mn.classNames;
var Vn = ["Enter", " "], Sd = ["ArrowDown", "PageUp", "Home"], Ra = ["ArrowUp", "PageDown", "End"], Rd = [...Sd, ...Ra], Ed = {
  ltr: [...Vn, "ArrowRight"],
  rtl: [...Vn, "ArrowLeft"]
}, Md = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Dt = "Menu", [Pt, Pd, Id] = er(Dt), [st, Ea] = Ze(Dt, [
  Id,
  hn,
  fa
]), Lt = hn(), Ma = fa(), [Pa, Je] = st(Dt), [Ad, Bt] = st(Dt), Ia = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: i, modal: s = !0 } = e, l = Lt(t), [c, f] = m.useState(null), u = m.useRef(!1), d = ke(i), p = or(a);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ o(gr, { ...l, children: /* @__PURE__ */ o(
    Pa,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ o(
        Ad,
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
Ia.displayName = Dt;
var Od = "MenuAnchor", _r = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = Lt(n);
    return /* @__PURE__ */ o(la, { ...a, ...r, ref: t });
  }
);
_r.displayName = Od;
var wr = "MenuPortal", [Td, Aa] = st(wr, {
  forceMount: void 0
}), Oa = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, i = Je(wr, t);
  return /* @__PURE__ */ o(Td, { scope: t, forceMount: n, children: /* @__PURE__ */ o(Qe, { present: n || i.open, children: /* @__PURE__ */ o(br, { asChild: !0, container: a, children: r }) }) });
};
Oa.displayName = wr;
var Se = "MenuContent", [kd, yr] = st(Se), Ta = m.forwardRef(
  (e, t) => {
    const n = Aa(Se, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, i = Je(Se, e.__scopeMenu), s = Bt(Se, e.__scopeMenu);
    return /* @__PURE__ */ o(Pt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(Qe, { present: r || i.open, children: /* @__PURE__ */ o(Pt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ o(Dd, { ...a, ref: t }) : /* @__PURE__ */ o(Ld, { ...a, ref: t }) }) }) });
  }
), Dd = m.forwardRef(
  (e, t) => {
    const n = Je(Se, e.__scopeMenu), r = m.useRef(null), a = ve(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Wc(i);
    }, []), /* @__PURE__ */ o(
      Nr,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ld = m.forwardRef((e, t) => {
  const n = Je(Se, e.__scopeMenu);
  return /* @__PURE__ */ o(
    Nr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Bd = /* @__PURE__ */ qt("MenuContent.ScrollLock"), Nr = m.forwardRef(
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
    } = e, g = Je(Se, n), _ = Bt(Se, n), N = Lt(n), y = Ma(n), C = Pd(n), [E, M] = m.useState(null), S = m.useRef(null), A = ve(t, S, g.onContentChange), k = m.useRef(0), T = m.useRef(""), x = m.useRef(0), P = m.useRef(null), $ = m.useRef("right"), j = m.useRef(0), Z = b ? Sa : m.Fragment, F = b ? { as: Bd, allowPinchZoom: !0 } : void 0, W = (O) => {
      var Y, z;
      const K = T.current + O, Q = C().filter((H) => !H.disabled), ee = document.activeElement, V = (Y = Q.find((H) => H.ref.current === ee)) == null ? void 0 : Y.textValue, te = Q.map((H) => H.textValue), D = Xd(te, K, V), U = (z = Q.find((H) => H.textValue === D)) == null ? void 0 : z.ref.current;
      (function H(ce) {
        T.current = ce, window.clearTimeout(k.current), ce !== "" && (k.current = window.setTimeout(() => H(""), 1e3));
      })(K), U && setTimeout(() => U.focus());
    };
    m.useEffect(() => () => window.clearTimeout(k.current), []), al();
    const B = m.useCallback((O) => {
      var Q, ee;
      return $.current === ((Q = P.current) == null ? void 0 : Q.side) && Zd(O, (ee = P.current) == null ? void 0 : ee.area);
    }, []);
    return /* @__PURE__ */ o(
      kd,
      {
        scope: n,
        searchRef: T,
        onItemEnter: m.useCallback(
          (O) => {
            B(O) && O.preventDefault();
          },
          [B]
        ),
        onItemLeave: m.useCallback(
          (O) => {
            var K;
            B(O) || ((K = S.current) == null || K.focus(), M(null));
          },
          [B]
        ),
        onTriggerLeave: m.useCallback(
          (O) => {
            B(O) && O.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: x,
        onPointerGraceIntentChange: m.useCallback((O) => {
          P.current = O;
        }, []),
        children: /* @__PURE__ */ o(Z, { ...F, children: /* @__PURE__ */ o(
          $o,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: q(i, (O) => {
              var K;
              O.preventDefault(), (K = S.current) == null || K.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ o(
              lr,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ o(
                  Bc,
                  {
                    asChild: !0,
                    ...y,
                    dir: _.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: q(c, (O) => {
                      _.isUsingKeyboardRef.current || O.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ o(
                      ca,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": qa(g.open),
                        "data-radix-menu-content": "",
                        dir: _.dir,
                        ...N,
                        ...v,
                        ref: A,
                        style: { outline: "none", ...v.style },
                        onKeyDown: q(v.onKeyDown, (O) => {
                          const Q = O.target.closest("[data-radix-menu-content]") === O.currentTarget, ee = O.ctrlKey || O.altKey || O.metaKey, V = O.key.length === 1;
                          Q && (O.key === "Tab" && O.preventDefault(), !ee && V && W(O.key));
                          const te = S.current;
                          if (O.target !== te || !Rd.includes(O.key)) return;
                          O.preventDefault();
                          const U = C().filter((Y) => !Y.disabled).map((Y) => Y.ref.current);
                          Ra.includes(O.key) && U.reverse(), Kd(U);
                        }),
                        onBlur: q(e.onBlur, (O) => {
                          O.currentTarget.contains(O.target) || (window.clearTimeout(k.current), T.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          It((O) => {
                            const K = O.target, Q = j.current !== O.clientX;
                            if (O.currentTarget.contains(K) && Q) {
                              const ee = O.clientX > j.current ? "right" : "left";
                              $.current = ee, j.current = O.clientX;
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
Ta.displayName = Se;
var Fd = "MenuGroup", Cr = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(ue.div, { role: "group", ...r, ref: t });
  }
);
Cr.displayName = Fd;
var $d = "MenuLabel", ka = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(ue.div, { ...r, ref: t });
  }
);
ka.displayName = $d;
var nn = "MenuItem", to = "menu.itemSelect", vn = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...a } = e, i = m.useRef(null), s = Bt(nn, e.__scopeMenu), l = yr(nn, e.__scopeMenu), c = ve(t, i), f = m.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(to, { bubbles: !0, cancelable: !0 });
        d.addEventListener(to, (h) => r == null ? void 0 : r(h), { once: !0 }), wo(d, p), p.defaultPrevented ? f.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ o(
      Da,
      {
        ...a,
        ref: c,
        disabled: n,
        onClick: q(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), f.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (d) => {
          var p;
          f.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          const p = l.searchRef.current !== "";
          n || p && d.key === " " || Vn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
vn.displayName = nn;
var Da = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: a, ...i } = e, s = yr(nn, n), l = Ma(n), c = m.useRef(null), f = ve(t, c), [u, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const b = c.current;
      b && h((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ o(
      Pt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: a ?? p,
        children: /* @__PURE__ */ o(Fc, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ o(
          ue.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: q(
              e.onPointerMove,
              It((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              It((b) => s.onItemLeave(b))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), zd = "MenuCheckboxItem", La = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...a } = e;
    return /* @__PURE__ */ o(ja, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ o(
      vn,
      {
        role: "menuitemcheckbox",
        "aria-checked": rn(n) ? "mixed" : n,
        ...a,
        ref: t,
        "data-state": Rr(n),
        onSelect: q(
          a.onSelect,
          () => r == null ? void 0 : r(rn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
La.displayName = zd;
var Ba = "MenuRadioGroup", [jd, Wd] = st(
  Ba,
  { value: void 0, onValueChange: () => {
  } }
), Fa = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...a } = e, i = ke(r);
    return /* @__PURE__ */ o(jd, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ o(Cr, { ...a, ref: t }) });
  }
);
Fa.displayName = Ba;
var $a = "MenuRadioItem", za = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, a = Wd($a, e.__scopeMenu), i = n === a.value;
    return /* @__PURE__ */ o(ja, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ o(
      vn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Rr(i),
        onSelect: q(
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
za.displayName = $a;
var xr = "MenuItemIndicator", [ja, Vd] = st(
  xr,
  { checked: !1 }
), Wa = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...a } = e, i = Vd(xr, n);
    return /* @__PURE__ */ o(
      Qe,
      {
        present: r || rn(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ o(
          ue.span,
          {
            ...a,
            ref: t,
            "data-state": Rr(i.checked)
          }
        )
      }
    );
  }
);
Wa.displayName = xr;
var Hd = "MenuSeparator", Va = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ o(
      ue.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Va.displayName = Hd;
var Ud = "MenuArrow", Ha = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = Lt(n);
    return /* @__PURE__ */ o(da, { ...a, ...r, ref: t });
  }
);
Ha.displayName = Ud;
var Sr = "MenuSub", [Gd, Ua] = st(Sr), Ga = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: a } = e, i = Je(Sr, t), s = Lt(t), [l, c] = m.useState(null), [f, u] = m.useState(null), d = ke(a);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ o(gr, { ...s, children: /* @__PURE__ */ o(
    Pa,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: f,
      onContentChange: u,
      children: /* @__PURE__ */ o(
        Gd,
        {
          scope: t,
          contentId: Ke(),
          triggerId: Ke(),
          trigger: l,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Ga.displayName = Sr;
var St = "MenuSubTrigger", Ka = m.forwardRef(
  (e, t) => {
    const n = Je(St, e.__scopeMenu), r = Bt(St, e.__scopeMenu), a = Ua(St, e.__scopeMenu), i = yr(St, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = l.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [l, c]), /* @__PURE__ */ o(_r, { asChild: !0, ...f, children: /* @__PURE__ */ o(
      Da,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": a.contentId,
        "data-state": qa(n.open),
        ...e,
        ref: an(t, a.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          It((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          It((d) => {
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
        onKeyDown: q(e.onKeyDown, (d) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || Ed[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Ka.displayName = St;
var Ya = "MenuSubContent", Xa = m.forwardRef(
  (e, t) => {
    const n = Aa(Se, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, i = Je(Se, e.__scopeMenu), s = Bt(Se, e.__scopeMenu), l = Ua(Ya, e.__scopeMenu), c = m.useRef(null), f = ve(t, c);
    return /* @__PURE__ */ o(Pt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(Qe, { present: r || i.open, children: /* @__PURE__ */ o(Pt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ o(
      Nr,
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
        onFocusOutside: q(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = Md[s.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Xa.displayName = Ya;
function qa(e) {
  return e ? "open" : "closed";
}
function rn(e) {
  return e === "indeterminate";
}
function Rr(e) {
  return rn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Kd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Yd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Xd(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Yd(e, Math.max(i, 0));
  a.length === 1 && (s = s.filter((f) => f !== n));
  const c = s.find(
    (f) => f.toLowerCase().startsWith(a.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function qd(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (a = !a);
  }
  return a;
}
function Zd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return qd(n, t);
}
function It(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Qd = Ia, Jd = _r, eu = Oa, tu = Ta, nu = Cr, ru = ka, ou = vn, au = La, iu = Fa, su = za, lu = Wa, cu = Va, du = Ha, uu = Ga, fu = Ka, pu = Xa, gn = "DropdownMenu", [hu] = Ze(
  gn,
  [Ea]
), _e = Ea(), [mu, Za] = hu(gn), Qa = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: a,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = _e(t), f = m.useRef(null), [u, d] = it({
    prop: a,
    defaultProp: i ?? !1,
    onChange: s,
    caller: gn
  });
  return /* @__PURE__ */ o(
    mu,
    {
      scope: t,
      triggerId: Ke(),
      triggerRef: f,
      contentId: Ke(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: /* @__PURE__ */ o(Qd, { ...c, open: u, onOpenChange: d, dir: r, modal: l, children: n })
    }
  );
};
Qa.displayName = gn;
var Ja = "DropdownMenuTrigger", ei = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, i = Za(Ja, n), s = _e(n);
    return /* @__PURE__ */ o(Jd, { asChild: !0, ...s, children: /* @__PURE__ */ o(
      ue.button,
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
        ref: an(t, i.triggerRef),
        onPointerDown: q(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
ei.displayName = Ja;
var vu = "DropdownMenuPortal", ti = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _e(t);
  return /* @__PURE__ */ o(eu, { ...r, ...n });
};
ti.displayName = vu;
var ni = "DropdownMenuContent", ri = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = Za(ni, n), i = _e(n), s = m.useRef(!1);
    return /* @__PURE__ */ o(
      tu,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = a.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (l) => {
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
ri.displayName = ni;
var gu = "DropdownMenuGroup", oi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
    return /* @__PURE__ */ o(nu, { ...a, ...r, ref: t });
  }
);
oi.displayName = gu;
var bu = "DropdownMenuLabel", ai = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
    return /* @__PURE__ */ o(ru, { ...a, ...r, ref: t });
  }
);
ai.displayName = bu;
var _u = "DropdownMenuItem", ii = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
    return /* @__PURE__ */ o(ou, { ...a, ...r, ref: t });
  }
);
ii.displayName = _u;
var wu = "DropdownMenuCheckboxItem", si = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(au, { ...a, ...r, ref: t });
});
si.displayName = wu;
var yu = "DropdownMenuRadioGroup", li = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(iu, { ...a, ...r, ref: t });
});
li.displayName = yu;
var Nu = "DropdownMenuRadioItem", ci = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(su, { ...a, ...r, ref: t });
});
ci.displayName = Nu;
var Cu = "DropdownMenuItemIndicator", di = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(lu, { ...a, ...r, ref: t });
});
di.displayName = Cu;
var xu = "DropdownMenuSeparator", ui = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(cu, { ...a, ...r, ref: t });
});
ui.displayName = xu;
var Su = "DropdownMenuArrow", Ru = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
    return /* @__PURE__ */ o(du, { ...a, ...r, ref: t });
  }
);
Ru.displayName = Su;
var Eu = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: a, defaultOpen: i } = e, s = _e(t), [l, c] = it({
    prop: r,
    defaultProp: i ?? !1,
    onChange: a,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ o(uu, { ...s, open: l, onOpenChange: c, children: n });
}, Mu = "DropdownMenuSubTrigger", fi = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(fu, { ...a, ...r, ref: t });
});
fi.displayName = Mu;
var Pu = "DropdownMenuSubContent", pi = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o(
    pu,
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
pi.displayName = Pu;
var hi = Qa, mi = ei, Er = ti, vi = ri, Iu = oi, Au = ai, gi = ii, Ou = si, Tu = li, ku = ci, bi = di, Du = ui, Lu = Eu, Bu = fi, Fu = pi;
const _i = R.forwardRef(
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
), De = hi, Le = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    mi,
    {
      ref: r,
      className: ["flyout-menu-trigger", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Be = R.forwardRef(function({ className: t, sideOffset: n = 4, align: r = "start", container: a, ...i }, s) {
  return /* @__PURE__ */ o(Er, { container: a, children: /* @__PURE__ */ o(
    vi,
    {
      ref: s,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      align: r,
      ...i
    }
  ) });
}), wi = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    Au,
    {
      ref: r,
      className: ["flyout-menu-label", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), $u = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ o(Iu, { ref: n, ...t });
}), se = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(
    gi,
    {
      ref: r,
      className: ["flyout-menu-item", t].filter(Boolean).join(" "),
      ...n
    }
  );
}), qp = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    Ou,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ o(bi, { children: /* @__PURE__ */ o(je, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), Zp = R.forwardRef(function({ ...t }, n) {
  return /* @__PURE__ */ o(Tu, { ref: n, ...t });
}), Qp = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    ku,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-item--has-indicator", t].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("span", { className: "flyout-menu-item-indicator", children: /* @__PURE__ */ o(bi, { children: /* @__PURE__ */ o(je, { size: 14, "aria-hidden": !0 }) }) }),
        n
      ]
    }
  );
}), bt = R.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ o(Du, { asChild: !0, ...n, children: /* @__PURE__ */ o(
    _i,
    {
      ref: r,
      className: ["flyout-menu-separator", t].filter(Boolean).join(" ")
    }
  ) });
}), Jp = Lu, eh = R.forwardRef(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ w(
    Bu,
    {
      ref: a,
      className: ["flyout-menu-item", "flyout-menu-sub-trigger", t].filter(Boolean).join(" "),
      ...r,
      children: [
        n,
        /* @__PURE__ */ o(vt, { size: 16, className: "flyout-menu-sub-trigger__chevron", "aria-hidden": !0 })
      ]
    }
  );
}), th = R.forwardRef(function({ className: t, sideOffset: n = 4, container: r, ...a }, i) {
  return /* @__PURE__ */ o(Er, { container: r, children: /* @__PURE__ */ o(
    Fu,
    {
      ref: i,
      className: ["flyout-menu-content", t].filter(Boolean).join(" "),
      sideOffset: n,
      ...a
    }
  ) });
}), nh = R.forwardRef(
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
function no({ type: e }) {
  return /* @__PURE__ */ o("li", { className: "breadcrumbs__separator", "aria-hidden": "true", children: e === "chevron" ? /* @__PURE__ */ o(vt, { size: 16 }) : /* @__PURE__ */ o("span", { children: "/" }) });
}
function zu({
  items: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
      "button",
      {
        className: "breadcrumbs__overflow",
        "aria-label": "Show more breadcrumbs",
        children: /* @__PURE__ */ o(at, { size: 16 })
      }
    ) }),
    /* @__PURE__ */ o(Be, { sideOffset: 4, align: "start", children: e.map((n, r) => /* @__PURE__ */ o(
      se,
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
function ju({
  item: e,
  onNavigate: t
}) {
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ w(
      "button",
      {
        className: "breadcrumbs__menu-trigger",
        "aria-haspopup": "menu",
        title: e.label,
        children: [
          /* @__PURE__ */ o("span", { className: "breadcrumbs__label", children: e.label }),
          /* @__PURE__ */ o(vt, { size: 12, className: "breadcrumbs__menu-chevron" })
        ]
      }
    ) }),
    /* @__PURE__ */ o(Be, { sideOffset: 4, align: "start", children: e.menu.map((n, r) => /* @__PURE__ */ o(
      se,
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
function Wu({
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
    return /* @__PURE__ */ o(ju, { item: e, onNavigate: t });
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
function Vu({
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
      /* @__PURE__ */ o(no, { type: t }, `sep-${u}`)
    ), u === 1 && i && s.length > 0 && (c.push(
      /* @__PURE__ */ o("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ o(zu, { items: s, onNavigate: r }) }, "overflow")
    ), c.push(
      /* @__PURE__ */ o(no, { type: t }, "sep-overflow")
    )), c.push(
      /* @__PURE__ */ o("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ o(Wu, { item: f, onNavigate: r }) }, u)
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
function Hu() {
  return /* @__PURE__ */ o("span", { className: "button__spinner", "aria-hidden": "true" });
}
const be = R.forwardRef(
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
          (s || a) && (s ? /* @__PURE__ */ o(Hu, {}) : a),
          c,
          !s && i
        ]
      }
    );
  }
), ye = R.forwardRef(
  function({ icon: t, ...n }, r) {
    return /* @__PURE__ */ o(be, { ref: r, iconStart: t, ...n });
  }
), Uu = {
  full: 4,
  // 4 non-primary + 1 primary = 5 total
  compact: 2,
  // 2 non-primary + 1 primary = 3 total
  minimal: 0
  // primary only
};
function Gu(e) {
  return e === "primary" ? "fill" : e === "secondary" ? "outline" : "ghost";
}
function Ku(e) {
  return e === "primary" ? "primary" : "neutral";
}
function ro({
  action: e,
  iconOnly: t
}) {
  const n = e.size ?? "medium", r = Gu(e.type), a = Ku(e.type);
  return t && e.icon ? /* @__PURE__ */ o(
    ye,
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
    be,
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
function Yu({
  actions: e,
  alignment: t
}) {
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
      ye,
      {
        icon: /* @__PURE__ */ o(po, { size: 16 }),
        "aria-label": "More actions",
        variant: "ghost",
        color: "neutral",
        size: "medium"
      }
    ) }),
    /* @__PURE__ */ o(
      Be,
      {
        sideOffset: 4,
        align: t === "right" ? "start" : "end",
        children: e.map((n) => /* @__PURE__ */ w(
          se,
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
function Xu({
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
  })(), l = e[s], c = e.filter((N, y) => y !== s), f = Uu[t];
  let u, d;
  f === 0 || c.length === 0 ? (u = [], d = c) : c.length <= f ? (u = c, d = []) : (u = c.slice(-f), d = c.slice(0, -f));
  const h = d.length > 0 ? /* @__PURE__ */ o(
    Yu,
    {
      actions: d,
      alignment: r
    },
    "__overflow"
  ) : null, v = (r === "left" ? [...u].reverse() : u).map((N) => /* @__PURE__ */ o(ro, { action: N, iconOnly: n }, N.id)), g = /* @__PURE__ */ o(ro, { action: l, iconOnly: n }, l.id), _ = r === "right" ? [h, ...v, g] : [g, ...v, h];
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
function qu() {
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
function Zu() {
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
const rh = R.forwardRef(
  function({ label: t, indeterminate: n, validation: r, disabled: a, id: i, className: s, ...l }, c) {
    const f = ae(), u = i ?? f, d = le(null);
    return qn(c, () => d.current), me(() => {
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
              /* @__PURE__ */ o(qu, {}),
              /* @__PURE__ */ o(Zu, {})
            ] })
          ] }),
          t && /* @__PURE__ */ o("span", { className: "checkbox__label", children: t })
        ]
      }
    );
  }
), oh = R.forwardRef(
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
), _t = R.forwardRef(
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
), Qu = { small: 12, medium: 16 }, ft = R.forwardRef(
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
    const [h, b] = J(c), v = l !== void 0, g = v ? l : h, _ = Qu[i];
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
              je,
              {
                className: "chip__check",
                size: _,
                "aria-hidden": "true"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: "chip__icon", "aria-hidden": "true", children: r }),
            /* @__PURE__ */ o("span", { className: "chip__label", children: t }),
            a !== void 0 && /* @__PURE__ */ o(
              _t,
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
            _t,
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
              children: /* @__PURE__ */ o(Fe, { size: _, "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
function ah({
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
function yi({ text: e, id: t, children: n, className: r }) {
  return /* @__PURE__ */ o(
    "p",
    {
      id: t,
      className: ["hint", r].filter(Boolean).join(" "),
      children: n ?? e
    }
  );
}
const Ju = {
  positive: ho,
  notice: Nt,
  negative: qe
};
function Ni({
  message: e,
  variant: t,
  id: n,
  className: r
}) {
  const a = Ju[t], i = t === "negative";
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
function ef(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? null;
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return Array.from(t.entries()).map(([n, r]) => ({ name: n, items: r }));
}
function tf(e) {
  return e.flatMap((t) => t.items);
}
const ih = R.forwardRef(
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
    } = t, g = t.selection === "multi", _ = g ? t.chipPlacement ?? "below" : "inline", N = ae(), y = b ?? `combobox-${N}`, C = `${y}-listbox`, E = `${y}-hint`, M = `${y}-message`, S = le(null), A = le(null), k = le(null), T = le([]), x = le(null), P = le([]), [$, j] = J(0), [Z, F] = J(0);
    me(() => {
      n && (typeof n == "function" ? n(A.current) : n.current = A.current);
    }, [n]);
    const [W, B] = J(!1), [O, K] = J(""), [Q, ee] = J(-1), [V, te] = J(!1), D = t.value !== void 0, [U, Y] = J(() => {
      if (g) return t.value ?? [];
      const I = t.value;
      return I ? [I] : [];
    }), z = D ? g ? t.value ?? [] : t.value ? [t.value] : [] : U, H = pt(
      () => z.map((I) => r.find((G) => G.value === I)).filter(Boolean),
      [z, r]
    ), ce = pt(() => {
      const I = O.toLowerCase().trim(), G = I ? r.filter((re) => re.label.toLowerCase().includes(I)) : r;
      return ef(G);
    }, [r, O]), de = pt(() => tf(ce), [ce]), oe = pt(
      () => r.filter((I) => !I.disabled).map((I) => I.value),
      [r]
    ), fe = pt(
      () => oe.length > 0 && oe.every((I) => z.includes(I)),
      [oe, z]
    ), ie = pe(
      (I) => z.includes(I),
      [z]
    ), he = pe(
      (I) => {
        var G, re;
        D || Y(I), g ? (G = t.onChange) == null || G.call(t, I) : (re = t.onChange) == null || re.call(t, I[0] ?? null);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [D, g]
    ), L = pe(
      (I) => {
        var G;
        if (!I.disabled)
          if (g) {
            const re = ie(I.value) ? z.filter((we) => we !== I.value) : [...z, I.value];
            he(re), K(""), (G = A.current) == null || G.focus();
          } else
            he([I.value]), K(""), B(!1), ee(-1);
      },
      [g, ie, z, he]
    ), X = pe(
      (I) => {
        he(z.filter((G) => G !== I));
      },
      [z, he]
    ), ne = pe(() => {
      const I = k.current;
      if (!I) return;
      const G = T.current;
      if (G.length === 0) {
        j(0);
        return;
      }
      const re = I.clientWidth, we = 8;
      if (G.reduce((Ee, ze, Cn) => Ee + ze + (Cn > 0 ? we : 0), 0) <= re) {
        j(0);
        return;
      }
      let tt = re - 72 - we, nt = 0;
      for (let Ee = G.length - 1; Ee >= 0; Ee--) {
        const ze = G[Ee] + (nt > 0 ? we : 0);
        if (tt >= ze)
          tt -= ze, nt++;
        else break;
      }
      j(G.length - nt);
    }, []);
    Rt(() => {
      if (_ !== "inline" || !k.current) {
        j(0);
        return;
      }
      const I = Array.from(
        k.current.querySelectorAll("[data-chip-ghost]")
      );
      T.current = I.map((G) => G.getBoundingClientRect().width), ne();
    }, [H, _, ne]), me(() => {
      if (_ !== "inline" || !k.current) return;
      const I = new ResizeObserver(ne);
      return I.observe(k.current), () => I.disconnect();
    }, [_, ne]);
    const ge = pe(() => {
      const I = x.current;
      if (!I) return;
      const G = P.current;
      if (G.length === 0) {
        F(0);
        return;
      }
      const re = I.clientWidth, we = 8;
      if (G.reduce((Ee, ze, Cn) => Ee + ze + (Cn > 0 ? we : 0), 0) <= re) {
        F(0);
        return;
      }
      let tt = re - 72 - we, nt = 0;
      for (let Ee = G.length - 1; Ee >= 0; Ee--) {
        const ze = G[Ee] + (nt > 0 ? we : 0);
        if (tt >= ze)
          tt -= ze, nt++;
        else break;
      }
      F(G.length - nt);
    }, []);
    Rt(() => {
      if (_ !== "below" || !x.current) {
        F(0);
        return;
      }
      const I = Array.from(
        x.current.querySelectorAll("[data-chip-ghost]")
      );
      P.current = I.map((G) => G.getBoundingClientRect().width), ge();
    }, [H, _, ge]), me(() => {
      if (_ !== "below" || !x.current) return;
      const I = new ResizeObserver(ge);
      return I.observe(x.current), () => I.disconnect();
    }, [_, ge]);
    const Re = () => {
      d || (B(!0), ee(-1));
    }, et = () => {
      B(!1), K(""), ee(-1);
    };
    me(() => {
      if (!W) return;
      const I = (G) => {
        var re;
        (re = S.current) != null && re.contains(G.target) || et();
      };
      return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
    }, [W]);
    const wn = !g && !W && H.length > 0 ? H[0].label : O, Ui = (I) => {
      switch (I.key) {
        case "ArrowDown": {
          if (I.preventDefault(), !W) {
            Re();
            return;
          }
          te(!0), ee((G) => Math.min(G + 1, de.length - 1));
          break;
        }
        case "ArrowUp": {
          I.preventDefault(), te(!0), ee((G) => Math.max(G - 1, 0));
          break;
        }
        case "Enter": {
          if (I.preventDefault(), !W) {
            Re();
            return;
          }
          Q >= 0 && de[Q] && L(de[Q]);
          break;
        }
        case "Escape": {
          I.preventDefault(), et();
          break;
        }
        case "Backspace": {
          g && O === "" && z.length > 0 && X(z[z.length - 1]);
          break;
        }
      }
    };
    me(() => {
      ee(-1);
    }, [O]);
    const yn = le(null);
    me(() => {
      if (Q < 0 || !yn.current) return;
      const I = yn.current.querySelector(`[data-index="${Q}"]`);
      I == null || I.scrollIntoView({ block: "nearest" });
    }, [Q]);
    const Gi = Q >= 0 && de[Q] ? `${C}-${de[Q].value}` : void 0, Nn = l === "negative", Ki = [
      s ? E : null,
      c && !Nn ? M : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: S,
        className: ["combobox", v].filter(Boolean).join(" "),
        "data-size": f,
        "data-label-position": u,
        "data-validation": l,
        "data-open": W || void 0,
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
                    W || Re(), (I = A.current) == null || I.focus();
                  },
                  children: [
                    !g && H.length > 0 && H[0].icon && /* @__PURE__ */ o("span", { className: "combobox__field-leading", "aria-hidden": "true", children: H[0].icon }),
                    /* @__PURE__ */ o(
                      "input",
                      {
                        ref: A,
                        id: y,
                        type: "text",
                        role: "combobox",
                        className: "combobox__input",
                        value: wn,
                        placeholder: g && H.length > 0 ? "" : i,
                        disabled: d,
                        required: p,
                        "aria-expanded": W,
                        "aria-controls": W ? C : void 0,
                        "aria-activedescendant": Gi,
                        "aria-autocomplete": "list",
                        "aria-describedby": Ki,
                        "aria-invalid": Nn && c ? !0 : void 0,
                        "aria-errormessage": Nn && c ? M : void 0,
                        "aria-required": p,
                        autoComplete: "off",
                        onChange: (I) => {
                          K(I.target.value), W || Re(), !g && I.target.value === "" && z.length > 0 && he([]);
                        },
                        onFocus: Re,
                        onKeyDown: Ui
                      }
                    ),
                    /* @__PURE__ */ o(
                      Ot,
                      {
                        className: "combobox__chevron",
                        size: 16,
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              W && /* @__PURE__ */ w("div", { className: "combobox__panel", children: [
                /* @__PURE__ */ o(
                  "ul",
                  {
                    ref: yn,
                    id: C,
                    role: "listbox",
                    className: "combobox__listbox",
                    "aria-label": a,
                    "aria-multiselectable": g || void 0,
                    children: de.length === 0 ? /* @__PURE__ */ o("li", { className: "combobox__no-results", role: "presentation", children: h }) : ce.map((I, G) => /* @__PURE__ */ w(R.Fragment, { children: [
                      I.name && /* @__PURE__ */ o("li", { role: "presentation", className: "combobox__group-header", children: I.name }),
                      G > 0 && !I.name && /* @__PURE__ */ o("li", { role: "separator", className: "combobox__group-divider" }),
                      I.items.map((re) => {
                        const we = de.indexOf(re), lt = ie(re.value), $t = we === Q;
                        return /* @__PURE__ */ w(
                          "li",
                          {
                            id: `${C}-${re.value}`,
                            role: "option",
                            "aria-selected": lt,
                            "aria-disabled": re.disabled || void 0,
                            className: "combobox__option",
                            "data-index": we,
                            "data-active": $t || void 0,
                            "data-keyboard-active": $t && V ? !0 : void 0,
                            "data-selected": lt || void 0,
                            "data-disabled": re.disabled || void 0,
                            onMouseDown: (tt) => {
                              tt.preventDefault(), L(re);
                            },
                            onMouseEnter: () => {
                              ee(we), te(!1);
                            },
                            children: [
                              !g && /* @__PURE__ */ o(
                                je,
                                {
                                  className: "combobox__option-selected-icon",
                                  size: 16,
                                  "aria-hidden": "true",
                                  style: { visibility: lt ? "visible" : "hidden" }
                                }
                              ),
                              g && /* @__PURE__ */ o("span", { className: "combobox__option-check", "aria-hidden": "true", children: lt && /* @__PURE__ */ o(je, { size: 12 }) }),
                              re.icon && /* @__PURE__ */ o("span", { className: "combobox__option-icon", "aria-hidden": "true", children: re.icon }),
                              /* @__PURE__ */ w("span", { className: "combobox__option-content", children: [
                                /* @__PURE__ */ o("span", { className: "combobox__option-label", children: re.label }),
                                re.description && /* @__PURE__ */ o("span", { className: "combobox__option-description", children: re.description })
                              ] })
                            ]
                          },
                          re.value
                        );
                      })
                    ] }, I.name ?? `__group-${G}`))
                  }
                ),
                g && /* @__PURE__ */ w("div", { className: "combobox__footer", children: [
                  /* @__PURE__ */ o(
                    be,
                    {
                      variant: "outline",
                      color: "neutral",
                      size: "small",
                      disabled: z.length === 0,
                      onMouseDown: (I) => {
                        I.preventDefault(), he([]);
                      },
                      children: "Clear"
                    }
                  ),
                  /* @__PURE__ */ o(
                    be,
                    {
                      variant: "fill",
                      color: "primary",
                      size: "small",
                      disabled: fe,
                      onMouseDown: (I) => {
                        I.preventDefault(), he(oe);
                      },
                      children: "Select all"
                    }
                  )
                ] })
              ] })
            ] }),
            g && _ === "inline" && H.length > 0 && /* @__PURE__ */ w("div", { ref: k, className: "combobox__chips combobox__chips--inline", children: [
              H.map((I) => /* @__PURE__ */ o("span", { "data-chip-ghost": !0, "aria-hidden": "true", className: "combobox__chip-ghost", children: /* @__PURE__ */ o(ft, { variant: "removable", label: I.label, size: "small" }) }, `ghost-${I.value}`)),
              $ > 0 && /* @__PURE__ */ o(
                ft,
                {
                  variant: "removable",
                  label: `+${$}`,
                  size: "small",
                  onRemove: d ? void 0 : () => {
                    const I = H.slice(0, $).map((G) => G.value);
                    he(z.filter((G) => !I.includes(G)));
                  }
                }
              ),
              H.slice($).map((I) => /* @__PURE__ */ o(
                ft,
                {
                  variant: "removable",
                  label: I.label,
                  size: "small",
                  onRemove: d ? void 0 : () => X(I.value)
                },
                I.value
              ))
            ] })
          ] }),
          s && /* @__PURE__ */ o(yi, { id: E, text: s }),
          c && l && /* @__PURE__ */ o(Ni, { id: M, message: c, variant: l }),
          g && _ === "below" && H.length > 0 && /* @__PURE__ */ w("div", { ref: x, className: "combobox__chips", children: [
            H.map((I) => /* @__PURE__ */ o("span", { "data-chip-ghost": !0, "aria-hidden": "true", className: "combobox__chip-ghost", children: /* @__PURE__ */ o(ft, { variant: "removable", label: I.label, size: "small" }) }, `ghost-below-${I.value}`)),
            Z > 0 && /* @__PURE__ */ o(
              ft,
              {
                variant: "removable",
                label: `+${Z}`,
                size: "small",
                onRemove: d ? void 0 : () => {
                  const I = H.slice(0, Z).map((G) => G.value);
                  he(z.filter((G) => !I.includes(G)));
                }
              }
            ),
            H.slice(Z).map((I) => /* @__PURE__ */ o(
              ft,
              {
                variant: "removable",
                label: I.label,
                size: "small",
                onRemove: d ? void 0 : () => X(I.value)
              },
              I.value
            ))
          ] })
        ]
      }
    );
  }
);
function nf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.group ?? "";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function rf(e) {
  return Array.from(e.values()).flat();
}
function sh({
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
  const v = ae(), g = p ?? v, _ = e ? `${g}-label` : void 0, N = `${g}-listbox`, y = d ? `${g}-helper` : void 0, C = u ? `${g}-msg` : void 0, E = n !== void 0, [M, S] = J(r ?? ""), A = E ? n ?? "" : M, [k, T] = J(!1), [x, P] = J(-1), [$, j] = J(!1), Z = le(null), F = le(null), W = le(null), B = nf(a), O = rf(B), K = (L) => `${g}-option-${L}`, Q = (L) => {
    for (let X = L + 1; X < O.length; X++)
      if (!O[X].disabled) return X;
    return L;
  }, ee = (L) => {
    for (let X = L - 1; X >= 0; X--)
      if (!O[X].disabled) return X;
    return L;
  }, V = () => O.findIndex((L) => !L.disabled), te = () => {
    for (let L = O.length - 1; L >= 0; L--)
      if (!O[L].disabled) return L;
    return -1;
  };
  me(() => {
    if (!k) return;
    const L = (X) => {
      var ne;
      (ne = W.current) != null && ne.contains(X.target) || (T(!1), P(-1));
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [k]), me(() => {
    if (x < 0 || !F.current) return;
    const L = F.current.querySelector(`#${CSS.escape(K(x))}`);
    L == null || L.scrollIntoView({ block: "nearest" });
  }, [x]);
  const D = (L) => {
    var X;
    L.disabled || (E || S(L.value), i == null || i(L.value), T(!1), P(-1), (X = Z.current) == null || X.focus());
  }, U = (L) => {
    const X = L !== void 0 ? L : A ? O.findIndex((ne) => ne.value === A) : V();
    P(X >= 0 ? X : V()), T(!0);
  }, Y = (L) => {
    switch (L.key) {
      case "Enter":
      case " ":
        L.preventDefault(), k ? x >= 0 && D(O[x]) : U();
        break;
      case "ArrowDown":
        L.preventDefault(), j(!0), k ? P((X) => Q(X < 0 ? -1 : X)) : U(V());
        break;
      case "ArrowUp":
        L.preventDefault(), j(!0), k ? P((X) => ee(X < 0 ? O.length : X)) : U(te());
        break;
      case "Home":
        L.preventDefault(), k && P(V());
        break;
      case "End":
        L.preventDefault(), k && P(te());
        break;
      case "Escape":
        L.preventDefault(), T(!1), P(-1);
        break;
      case "Tab":
        T(!1), P(-1);
        break;
    }
  }, z = O.find((L) => L.value === A), H = c === "small" ? 14 : c === "large" ? 18 : 16, ce = x >= 0 && k ? K(x) : void 0, de = f === "negative", oe = [y, de ? void 0 : C].filter(Boolean).join(" ") || void 0, fe = [];
  let ie = 0;
  for (const [L, X] of B.entries())
    fe.push({
      groupName: L,
      items: X.map((ne) => ({ option: ne, idx: ie++ }))
    });
  const he = fe.some((L) => L.groupName !== "");
  return /* @__PURE__ */ w(
    "div",
    {
      ref: W,
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
        /* @__PURE__ */ w("div", { className: "dropdown__field-wrap", children: [
          /* @__PURE__ */ w(
            "button",
            {
              ref: Z,
              id: g,
              type: "button",
              className: "dropdown__trigger",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": k,
              "aria-controls": N,
              "aria-labelledby": b ? void 0 : _,
              "aria-label": b,
              "aria-activedescendant": ce,
              "aria-describedby": oe,
              "aria-errormessage": de ? C : void 0,
              "aria-required": l || void 0,
              "aria-invalid": de || void 0,
              disabled: s,
              onClick: () => {
                k ? (T(!1), P(-1)) : U();
              },
              onKeyDown: Y,
              children: [
                (z == null ? void 0 : z.icon) && /* @__PURE__ */ o("span", { className: "dropdown__trigger-leading", "aria-hidden": "true", children: z.icon }),
                /* @__PURE__ */ o("span", { className: z ? "dropdown__trigger-value" : "dropdown__trigger-placeholder", children: z ? z.label : t }),
                /* @__PURE__ */ o(Ot, { size: H, className: "dropdown__chevron", "aria-hidden": "true" })
              ]
            }
          ),
          k && /* @__PURE__ */ o(
            "ul",
            {
              ref: F,
              id: N,
              role: "listbox",
              className: "dropdown__listbox",
              "aria-label": b ?? e,
              children: fe.map((L, X) => /* @__PURE__ */ w(R.Fragment, { children: [
                he && X > 0 && /* @__PURE__ */ o("li", { role: "presentation", className: "dropdown__group-divider", "aria-hidden": "true" }),
                L.groupName && /* @__PURE__ */ o("li", { role: "presentation", className: "dropdown__group-header", children: L.groupName }),
                L.items.map(({ option: ne, idx: ge }) => {
                  const Re = ne.value === A, et = x === ge;
                  return /* @__PURE__ */ w(
                    "li",
                    {
                      id: K(ge),
                      role: "option",
                      className: "dropdown__option",
                      "aria-selected": Re,
                      "aria-disabled": ne.disabled || void 0,
                      "data-selected": Re || void 0,
                      "data-active": et || void 0,
                      "data-disabled": ne.disabled || void 0,
                      "data-keyboard-active": et && $ ? !0 : void 0,
                      onMouseDown: (wn) => wn.preventDefault(),
                      onMouseEnter: () => {
                        ne.disabled || (P(ge), j(!1));
                      },
                      onClick: () => D(ne),
                      children: [
                        /* @__PURE__ */ o("span", { className: "dropdown__option-check", "aria-hidden": "true", children: Re && /* @__PURE__ */ o(je, { size: 12, strokeWidth: 2.5 }) }),
                        ne.icon && /* @__PURE__ */ o("span", { className: "dropdown__option-icon", "aria-hidden": "true", children: ne.icon }),
                        /* @__PURE__ */ w("span", { className: "dropdown__option-content", children: [
                          /* @__PURE__ */ o("span", { className: "dropdown__option-label", children: ne.label }),
                          ne.description && /* @__PURE__ */ o("span", { className: "dropdown__option-description", children: ne.description })
                        ] })
                      ]
                    },
                    ne.value
                  );
                })
              ] }, L.groupName || "__ungrouped"))
            }
          )
        ] }),
        d && !u && /* @__PURE__ */ o(yi, { id: y, text: d }),
        u && f && /* @__PURE__ */ o(Ni, { id: C, message: u, variant: f })
      ]
    }
  );
}
function lh({
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
                children: /* @__PURE__ */ o(Xi, { size: 14, "aria-hidden": "true" })
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
function of() {
  return Math.random().toString(36).slice(2, 9);
}
function Hn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function af(e, t, n) {
  var r;
  if (t) {
    const a = t.split(",").map((c) => c.trim().toLowerCase()), i = "." + ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()), s = e.type.toLowerCase();
    if (!a.some((c) => c.endsWith("/*") ? s.startsWith(c.slice(0, -1)) : c.startsWith(".") ? i === c : s === c)) {
      const c = a.filter((f) => f.startsWith(".")).map((f) => f.slice(1).toUpperCase()).join(", ");
      return c ? `Invalid file type. Accepted: ${c}` : "Invalid file type";
    }
  }
  return n && e.size > n ? `File exceeds ${Hn(n)} limit` : null;
}
function sf({ file: e, size: t = 16 }) {
  var a;
  const n = e.type.toLowerCase(), r = ((a = e.name.split(".").pop()) == null ? void 0 : a.toLowerCase()) ?? "";
  return n.startsWith("image/") ? /* @__PURE__ */ o(Ji, { size: t }) : n === "application/pdf" || r === "pdf" ? /* @__PURE__ */ o(Dn, { size: t }) : r === "doc" || r === "docx" || r === "txt" || r === "rtf" ? /* @__PURE__ */ o(Dn, { size: t }) : r === "zip" || r === "rar" || r === "tar" || r === "gz" ? /* @__PURE__ */ o(es, { size: t }) : /* @__PURE__ */ o(ts, { size: t });
}
function ch({
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
  const _ = ae(), N = v ?? _, y = `${N}-input`, C = e ? `${N}-label` : void 0, E = `${N}-live`, M = le(null), [S, A] = J([]), [k, T] = J(!1), [x, P] = J(""), $ = pe((D) => {
    if (u) return;
    const Y = Array.from(D).map((oe) => {
      const fe = af(oe, l, c);
      return { id: of(), file: oe, status: fe ? "error" : "added", errorMessage: fe ?? void 0 };
    });
    A((oe) => d ? [...oe, ...Y] : Y);
    const z = Y.filter((oe) => oe.status === "added").map((oe) => oe.file);
    z.length > 0 && (p == null || p(z));
    const H = Y.filter((oe) => oe.status === "added").length, ce = Y.filter((oe) => oe.status === "error").length, de = [];
    H && de.push(`${H} file${H > 1 ? "s" : ""} added`), ce && de.push(`${ce} file${ce > 1 ? "s" : ""} failed validation`), P(de.join(". ")), M.current && (M.current.value = "");
  }, [u, l, c, d, p]), j = pe((D) => {
    A((U) => {
      const Y = U.find((z) => z.id === D);
      return Y && P(`${Y.file.name} removed`), U.filter((z) => z.id !== D);
    }), b == null || b(D);
  }, [b]), Z = pe(async () => {
    if (!h) return;
    const D = S.filter((U) => U.status === "added" || U.status === "error");
    if (D.length) {
      A((U) => U.map(
        (Y) => D.find((z) => z.id === Y.id) ? { ...Y, status: "uploading", errorMessage: void 0 } : Y
      )), P("Uploading files…");
      try {
        await h(D.map((U) => U.file)), A((U) => U.map(
          (Y) => D.find((z) => z.id === Y.id) ? { ...Y, status: "uploaded" } : Y
        )), P(`${D.length} file${D.length > 1 ? "s" : ""} uploaded successfully`);
      } catch (U) {
        const Y = U instanceof Error ? U.message : "Upload failed";
        A((z) => z.map(
          (H) => D.find((ce) => ce.id === H.id) ? { ...H, status: "error", errorMessage: Y } : H
        )), P(`Upload failed: ${Y}`);
      }
    }
  }, [S, h]), F = (D) => {
    D.preventDefault(), u || T(!0);
  }, W = (D) => {
    D.currentTarget.contains(D.relatedTarget) || T(!1);
  }, B = (D) => {
    D.preventDefault(), T(!1), !u && $(D.dataTransfer.files);
  }, O = (D) => {
    var U;
    (U = D.target.files) != null && U.length && $(D.target.files);
  }, K = () => {
    var D;
    u || (D = M.current) == null || D.click();
  }, Q = S.length > 0, ee = S.some((D) => D.status === "added"), V = S.some((D) => D.status === "uploading"), te = [
    f,
    c ? `Max ${Hn(c)}` : null
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
              onDragOver: F,
              onDragLeave: W,
              onDrop: B,
              onClick: K,
              role: "button",
              tabIndex: u ? -1 : 0,
              onKeyDown: (D) => {
                (D.key === "Enter" || D.key === " ") && (D.preventDefault(), K());
              },
              children: [
                /* @__PURE__ */ o(qi, { size: 32, className: "file-uploader__zone-icon", "aria-hidden": "true" }),
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
          Q && /* @__PURE__ */ o("ul", { className: "file-uploader__list", "aria-label": "Selected files", children: S.map((D) => /* @__PURE__ */ w(
            "li",
            {
              className: "file-uploader__item",
              "data-status": D.status,
              children: [
                /* @__PURE__ */ o("span", { className: "file-uploader__item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(sf, { file: D.file, size: 16 }) }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-info", children: [
                  /* @__PURE__ */ o("span", { className: "file-uploader__item-name", title: D.file.name, children: D.file.name }),
                  /* @__PURE__ */ w("span", { className: "file-uploader__item-meta", children: [
                    Hn(D.file.size),
                    D.errorMessage && /* @__PURE__ */ w("span", { className: "file-uploader__item-error", children: [
                      " · ",
                      D.errorMessage
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ w("span", { className: "file-uploader__item-status", "aria-hidden": "true", children: [
                  D.status === "uploading" && /* @__PURE__ */ o(Zi, { size: 16, className: "file-uploader__spin" }),
                  D.status === "uploaded" && /* @__PURE__ */ o(je, { size: 16 }),
                  D.status === "error" && /* @__PURE__ */ o(Nt, { size: 16 })
                ] }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: "file-uploader__item-remove",
                    "aria-label": `Remove ${D.file.name}`,
                    disabled: D.status === "uploading",
                    onClick: () => j(D.id),
                    children: /* @__PURE__ */ o(Fe, { size: 14, "aria-hidden": "true" })
                  }
                )
              ]
            },
            D.id
          )) })
        ] }),
        s && h && Q && /* @__PURE__ */ o("div", { className: "file-uploader__actions", children: /* @__PURE__ */ w(
          "button",
          {
            type: "button",
            className: "file-uploader__upload-btn",
            disabled: !ee || V || u,
            onClick: Z,
            children: [
              /* @__PURE__ */ o(Qi, { size: 14, "aria-hidden": "true" }),
              V ? "Uploading…" : "Upload files"
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
            onChange: O
          }
        )
      ]
    }
  );
}
const lf = {
  s: { svgSize: 16, strokeWidth: 2, r: 6, cx: 8, cy: 8 },
  m: { svgSize: 32, strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l: { svgSize: 64, strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 }
};
function Gt({
  size: e = "m",
  variant: t = "primary",
  label: n,
  labelPosition: r = "stacked",
  "aria-label": a,
  className: i
}) {
  const s = R.useId(), { svgSize: l, strokeWidth: c, r: f, cx: u, cy: d } = lf[e], p = 2 * Math.PI * f, h = `${(p * 0.75).toFixed(2)} ${p.toFixed(2)}`;
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
function cf(e) {
  var r;
  const t = e.type.toLowerCase(), n = ((r = e.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "";
  return t.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"].includes(n) ? "image" : t === "application/pdf" || n === "pdf" ? "pdf" : t === "text/plain" || n === "txt" ? "text" : t === "text/csv" || n === "csv" ? "csv" : "unsupported";
}
function df(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function uf(e) {
  return e.trim().split(`
`).map(
    (t) => t.split(",").map((n) => n.trim().replace(/^"(.*)"$/, "$1"))
  );
}
const oo = 50, ao = 200, io = 25;
function dh({
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
  const v = ae(), g = cf(e), [_, N] = J(
    g === "unsupported" ? "unsupported" : "loading"
  ), [y, C] = J(100), [E, M] = J(0), [S, A] = J(1), [k, T] = J(null), [x, P] = J(null), [$, j] = J("");
  me(() => {
    C(100), M(0), A(1), T(null), P(null), N(g === "unsupported" ? "unsupported" : "loading");
  }, [e.url, g]), me(() => {
    if (g !== "text" && g !== "csv") return;
    let L = !1;
    return fetch(e.url).then((X) => {
      if (!X.ok) throw new Error(`HTTP ${X.status}`);
      return X.text();
    }).then((X) => {
      L || (g === "text" ? T(X) : P(uf(X)), N("loaded"));
    }).catch(() => {
      L || N("error");
    }), () => {
      L = !0;
    };
  }, [e.url, g]);
  const Z = () => {
    N("loaded"), j("File loaded");
  }, F = () => {
    N("error"), j("File failed to load");
  }, W = () => N("loaded"), B = pe(() => C((L) => Math.min(L + io, ao)), []), O = pe(() => C((L) => Math.max(L - io, oo)), []), K = pe(() => M((L) => (L + 90) % 360), []), Q = pe(() => {
    C(100), M(0);
  }, []), ee = (t == null ? void 0 : t.length) ?? 0, V = ee > 1 && n > 0, te = ee > 1 && n < ee - 1, D = () => p == null ? void 0 : p(n - 1), U = () => p == null ? void 0 : p(n + 1), Y = e.pageCount ?? 0, z = Y > 1 && S > 1, H = Y > 1 && S < Y, ce = () => {
    if (u)
      u(e);
    else {
      const L = document.createElement("a");
      L.href = e.url, L.download = e.name, L.click();
    }
  }, de = `scale(${y / 100}) rotate(${E}deg)`, oe = () => {
    if (_ === "error")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ o(ss, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No data found" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "Unable to load file data" })
      ] });
    if (_ === "unsupported")
      return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
        /* @__PURE__ */ o(vo, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No preview available" }),
        /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "This file has no supported preview" }),
        i && /* @__PURE__ */ w("button", { type: "button", className: "file-viewer__empty-action", onClick: ce, children: [
          /* @__PURE__ */ o(Ir, { size: 14, "aria-hidden": "true" }),
          "Download file"
        ] })
      ] });
    if (g === "image")
      return /* @__PURE__ */ w("div", { className: "file-viewer__img-wrap", children: [
        _ === "loading" && /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Gt, { size: "m" }) }),
        /* @__PURE__ */ o(
          "img",
          {
            src: e.url,
            alt: e.name,
            className: "file-viewer__img",
            "data-loaded": _ === "loaded" || void 0,
            style: { transform: de },
            onLoad: Z,
            onError: F
          }
        )
      ] });
    if (g === "pdf")
      return /* @__PURE__ */ w("div", { className: "file-viewer__pdf-wrap", children: [
        _ === "loading" && /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Gt, { size: "m" }) }),
        /* @__PURE__ */ o(
          "iframe",
          {
            src: e.url,
            title: e.name,
            className: "file-viewer__iframe",
            "data-loaded": _ === "loaded" || void 0,
            onLoad: W
          }
        )
      ] });
    if (g === "text")
      return _ === "loading" ? /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Gt, { size: "m" }) }) : /* @__PURE__ */ w("div", { className: "file-viewer__text-wrap", children: [
        /* @__PURE__ */ w("div", { className: "file-viewer__text-meta", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(Dn, { size: 14 }),
          e.name
        ] }),
        /* @__PURE__ */ o("pre", { className: "file-viewer__text", children: k })
      ] });
    if (g === "csv") {
      if (_ === "loading")
        return /* @__PURE__ */ o("div", { className: "file-viewer__spinner", children: /* @__PURE__ */ o(Gt, { size: "m" }) });
      if (!(x != null && x.length))
        return /* @__PURE__ */ w("div", { className: "file-viewer__empty", children: [
          /* @__PURE__ */ o(ls, { size: 48, className: "file-viewer__empty-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ o("span", { className: "file-viewer__empty-title", children: "No data found" }),
          /* @__PURE__ */ o("span", { className: "file-viewer__empty-desc", children: "The file appears to be empty" })
        ] });
      const [L, ...X] = x;
      return /* @__PURE__ */ o("div", { className: "file-viewer__table-wrap", children: /* @__PURE__ */ w("table", { className: "file-viewer__table", children: [
        /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: L.map((ne, ge) => /* @__PURE__ */ o("th", { className: "file-viewer__th", children: ne }, ge)) }) }),
        /* @__PURE__ */ o("tbody", { children: X.map((ne, ge) => /* @__PURE__ */ o("tr", { className: "file-viewer__tr", children: ne.map((Re, et) => /* @__PURE__ */ o("td", { className: "file-viewer__td", children: Re }, et)) }, ge)) })
      ] }) });
    }
    return null;
  }, fe = g === "image", ie = fe && l, he = fe && c;
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
            children: $
          }
        ),
        r && /* @__PURE__ */ w("div", { className: "file-viewer__header", children: [
          /* @__PURE__ */ o("span", { id: v, className: "file-viewer__filename", title: e.name, children: e.name }),
          /* @__PURE__ */ w("div", { className: "file-viewer__header-actions", children: [
            ie && /* @__PURE__ */ w("div", { className: "file-viewer__zoom-controls", children: [
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(ns, { size: 16 }),
                  "aria-label": "Zoom out",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y <= oo,
                  onClick: O
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__zoom-level", "aria-live": "polite", "aria-atomic": "true", children: [
                y,
                "%"
              ] }),
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(rs, { size: 16 }),
                  "aria-label": "Zoom in",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: y >= ao,
                  onClick: B
                }
              )
            ] }),
            he && /* @__PURE__ */ o(
              ye,
              {
                icon: /* @__PURE__ */ o(os, { size: 16 }),
                "aria-label": "Rotate 90°",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: K
              }
            ),
            s && d && /* @__PURE__ */ o(
              ye,
              {
                icon: /* @__PURE__ */ o(as, { size: 16 }),
                "aria-label": "Expand",
                variant: "ghost",
                color: "neutral",
                size: "small",
                onClick: () => d(e)
              }
            ),
            /* @__PURE__ */ w(De, { children: [
              /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(at, { size: 16 }),
                  "aria-label": "More options",
                  variant: "ghost",
                  color: "neutral",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ w(Be, { align: "end", children: [
                i && /* @__PURE__ */ w(se, { onSelect: ce, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(Ir, { size: 14 }) }),
                  "Download"
                ] }),
                fe && /* @__PURE__ */ w(se, { onSelect: Q, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(is, { size: 14 }) }),
                  "Fit (reset zoom & rotation)"
                ] }),
                /* @__PURE__ */ w(se, { onSelect: () => {
                  window.open(e.url, "_blank", "noopener,noreferrer");
                }, children: [
                  /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(mo, { size: 14 }) }),
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
            children: oe()
          }
        ),
        a && /* @__PURE__ */ w("div", { className: "file-viewer__footer", children: [
          /* @__PURE__ */ w("div", { className: "file-viewer__meta", children: [
            e.size && /* @__PURE__ */ o("span", { className: "file-viewer__meta-item", children: df(e.size) }),
            e.uploadDate && /* @__PURE__ */ o("span", { className: "file-viewer__meta-item", children: e.uploadDate })
          ] }),
          /* @__PURE__ */ w("div", { className: "file-viewer__footer-nav", children: [
            Y > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__page-nav", "aria-label": "Page navigation", children: [
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(Et, { size: 14 }),
                  "aria-label": "Previous page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !z,
                  onClick: () => A((L) => L - 1)
                }
              ),
              /* @__PURE__ */ w("span", { className: "file-viewer__nav-label", "aria-live": "polite", children: [
                S,
                " / ",
                Y
              ] }),
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(vt, { size: 14 }),
                  "aria-label": "Next page",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !H,
                  onClick: () => A((L) => L + 1)
                }
              )
            ] }),
            ee > 1 && /* @__PURE__ */ w("div", { className: "file-viewer__file-nav", "aria-label": "File navigation", children: [
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(Et, { size: 14 }),
                  "aria-label": "Previous file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !V,
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
                ye,
                {
                  icon: /* @__PURE__ */ o(vt, { size: 14 }),
                  "aria-label": "Next file",
                  variant: "ghost",
                  color: "neutral",
                  size: "small",
                  disabled: !te,
                  onClick: U
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
const Ci = Zn({ onClose: () => {
}, titleId: "" }), ff = () => Qn(Ci), so = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function pf(e, t) {
  me(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(so);
    r == null || r.focus();
    function a(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(so));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t, e]);
}
function hf({
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
  const f = ae(), u = le(null), d = le(null), [p, h] = J(e), [b, v] = J(!1);
  if (me(() => {
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
  }, [e]), me(() => {
    if (!e) return;
    const _ = (N) => {
      var y;
      N.key === "Escape" && (t(), (y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [e, t]), me(() => {
    if (!e || i) return;
    const _ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = _;
    };
  }, [e, i]), pf(u, e && !i), !p) return null;
  const g = /* @__PURE__ */ w(Ci.Provider, { value: { onClose: t, titleId: f }, children: [
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
  return i ? g : Jn.createPortal(g, document.body);
}
function uh({ title: e, description: t, actions: n, className: r }) {
  const { onClose: a, titleId: i } = ff();
  return /* @__PURE__ */ w("div", { className: ["drawer__header", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: "drawer__header-main", children: [
      /* @__PURE__ */ o("h2", { id: i, className: "drawer__title", children: e }),
      t && /* @__PURE__ */ o("p", { className: "drawer__description", children: t })
    ] }),
    /* @__PURE__ */ w("div", { className: "drawer__header-actions", children: [
      n,
      /* @__PURE__ */ o(
        ye,
        {
          icon: /* @__PURE__ */ o(Fe, { size: 18, "aria-hidden": "true" }),
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
function fh({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { className: ["drawer__tools", t].filter(Boolean).join(" "), children: e });
}
function ph({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { className: ["drawer__content", t].filter(Boolean).join(" "), children: e });
}
function hh({ title: e, count: t, link: n, divider: r, children: a, className: i }) {
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
            t !== void 0 && /* @__PURE__ */ o(_t, { count: t, variant: "outline", size: "small", color: "neutral" })
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
function mh({
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
function vh({
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
                Ot,
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
function gh({
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
function bh({
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
function _h({
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
      children: /* @__PURE__ */ o(at, { size: 14, "aria-hidden": "true" })
    }
  );
}
const wh = R.forwardRef(
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
          f && /* @__PURE__ */ o(mo, { "aria-hidden": "true" })
        ]
      }
    );
  }
), mf = R.forwardRef(
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
function vf(e, t) {
  const n = e.trim().split(/\s+/).filter(Boolean);
  return n.length === 0 ? "" : t === "s" || n.length === 1 ? n[0][0].toUpperCase() : (n[0][0] + n[n.length - 1][0]).toUpperCase();
}
const gf = R.forwardRef(
  function({ name: t, src: n, size: r = "l", href: a, onClick: i, className: s, style: l, "aria-label": c, tabIndex: f, id: u }, d) {
    const [p, h] = R.useState(!1), b = !!n && !p, v = vf(t, r), g = !!a || !!i, _ = {
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
), yh = R.forwardRef(
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
), bf = {
  active: "Active",
  away: "Away",
  busy: "Busy",
  offline: "Offline"
}, Nh = R.forwardRef(
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
              "aria-label": bf[n]
            }
          )
        ]
      }
    );
  }
), _f = R.forwardRef(
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
), Ch = R.forwardRef(
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
), xh = R.forwardRef(
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
), Sh = R.forwardRef(
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
), Rh = R.forwardRef(
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
), Eh = R.forwardRef(
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
), Mh = R.forwardRef(
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
), Ph = R.forwardRef(
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
), Ih = R.forwardRef(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ o(
      _i,
      {
        ref: r,
        orientation: "horizontal",
        variant: "full",
        className: t,
        ...n
      }
    );
  }
), wf = {
  informative: bo,
  positive: ho,
  notice: go,
  negative: qe
}, yf = {
  informative: "status",
  positive: "status",
  notice: "alert",
  negative: "alert"
}, Nf = {
  informative: "polite",
  positive: "polite",
  notice: "assertive",
  negative: "assertive"
}, Ah = R.forwardRef(
  function({
    variant: t = "informative",
    title: n,
    children: r,
    actions: a,
    onClose: i,
    className: s,
    ...l
  }, c) {
    const f = wf[t];
    return /* @__PURE__ */ w(
      "div",
      {
        ref: c,
        role: yf[t],
        "aria-live": Nf[t],
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
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Fe, { size: 14, "aria-hidden": "true" }),
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
), xi = R.createContext({
  collapsible: !1,
  expanded: !0,
  toggle: () => {
  }
});
function Cf() {
  return R.useContext(xi);
}
const xf = R.forwardRef(
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
    return /* @__PURE__ */ o(xi.Provider, { value: { collapsible: t, expanded: c, toggle: d }, children: /* @__PURE__ */ w(
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
xf.displayName = "Panel";
const Sf = R.forwardRef(
  function({ icon: t, subtitle: n, actions: r, children: a, className: i, ...s }, l) {
    const { collapsible: c, expanded: f, toggle: u } = Cf();
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
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(
                Ot,
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
Sf.displayName = "PanelHeader";
const Rf = R.forwardRef(
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
Rf.displayName = "PanelBody";
const Ef = R.forwardRef(
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
Ef.displayName = "PanelFooter";
const Mf = R.forwardRef(
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
    return i ? /* @__PURE__ */ w(xe, { children: [
      d,
      /* @__PURE__ */ o("hr", { className: "section__divider" })
    ] }) : d;
  }
);
Mf.displayName = "Section";
const Si = R.createContext({
  onClose: () => {
  },
  titleId: ""
});
function Pf() {
  return R.useContext(Si);
}
const lo = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function If(e, t) {
  R.useEffect(() => {
    if (!t || !e.current) return;
    const n = e.current, r = n.querySelector(lo);
    r == null || r.focus();
    function a(i) {
      if (i.key !== "Tab") return;
      const s = Array.from(n.querySelectorAll(lo));
      if (!s.length) return;
      const l = s[0], c = s[s.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), c.focus()) : document.activeElement === c && (i.preventDefault(), l.focus());
    }
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t, e]);
}
let Af = 0;
function Of({ open: e, onClose: t, size: n = "medium", children: r, className: a }) {
  const [i] = R.useState(() => `dialog-title-${++Af}`), s = R.useRef(null), [l, c] = R.useState(e), [f, u] = R.useState(e);
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
  }, [e]), If(s, e), l ? Jn.createPortal(
    /* @__PURE__ */ w(Si.Provider, { value: { onClose: t, titleId: i }, children: [
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
Of.displayName = "Dialog";
const Tf = R.forwardRef(
  function({ icon: t, children: n, className: r, ...a }, i) {
    const { onClose: s, titleId: l } = Pf();
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
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Fe, { "aria-hidden": "true" }),
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
Tf.displayName = "DialogHeader";
const kf = R.forwardRef(
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
kf.displayName = "DialogBody";
const Df = R.forwardRef(
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
Df.displayName = "DialogFooter";
const Ri = R.createContext({
  activeTab: "",
  onChange: () => {
  },
  size: "medium",
  baseId: ""
});
function Ei() {
  return R.useContext(Ri);
}
let Lf = 0;
function Bf({
  value: e,
  onValueChange: t,
  size: n = "medium",
  children: r,
  className: a,
  ...i
}) {
  const [s] = R.useState(() => `tabs-${++Lf}`);
  return /* @__PURE__ */ o(Ri.Provider, { value: { activeTab: e, onChange: t, size: n, baseId: s }, children: /* @__PURE__ */ o("div", { className: ["tabs", a].filter(Boolean).join(" "), ...i, children: r }) });
}
Bf.displayName = "Tabs";
function Ff({ variant: e = "loud", padding: t, children: n, className: r, style: a }) {
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
Ff.displayName = "TabList";
function $f({
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
  const { activeTab: f, onChange: u, size: d, baseId: p } = Ei(), h = f === e, b = r || !!i;
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
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(cs, { size: 14 }),
              "aria-label": "Tab options",
              tabIndex: h ? 0 : -1,
              onClick: i
            }
          ),
          r && /* @__PURE__ */ o(
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Fe, { size: 14 }),
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
$f.displayName = "Tab";
function zf({ value: e, children: t, className: n, style: r }) {
  const { activeTab: a, baseId: i } = Ei();
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
zf.displayName = "TabPanel";
const Mi = R.createContext({ size: "medium" });
function jf() {
  return R.useContext(Mi);
}
function Wf({ size: e = "medium", children: t, className: n, style: r }) {
  return /* @__PURE__ */ o(Mi.Provider, { value: { size: e }, children: /* @__PURE__ */ o(
    "ul",
    {
      role: "list",
      className: ["list", n].filter(Boolean).join(" "),
      style: r,
      children: t
    }
  ) });
}
Wf.displayName = "List";
function Vf({
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
  const { size: b } = jf(), v = a ?? b, g = i || !!s || !!l, _ = /* @__PURE__ */ w(xe, { children: [
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
Vf.displayName = "ListItem";
const Oh = R.forwardRef(
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
), Pi = R.createContext({
  variant: "ordered",
  interactive: !1
});
function Hf({
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
  return /* @__PURE__ */ o(Pi.Provider, { value: { variant: e, interactive: t }, children: /* @__PURE__ */ o(
    "ol",
    {
      className: ["stepper", r].filter(Boolean).join(" "),
      "data-variant": e,
      ...a,
      children: s
    }
  ) });
}
Hf.displayName = "Stepper";
function Uf({
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
  const { variant: p, interactive: h } = R.useContext(Pi), b = h && !a && !!l, v = () => n === "checked" ? /* @__PURE__ */ o(je, { size: 16, "aria-hidden": "true" }) : n === "notice" ? /* @__PURE__ */ o(Nt, { size: 16, "aria-hidden": "true" }) : n === "error" ? /* @__PURE__ */ o(qe, { size: 16, "aria-hidden": "true" }) : p === "icons" ? i ?? null : p === "unordered" ? /* @__PURE__ */ o("span", { className: "stepper-step__dot", "aria-hidden": "true" }) : c ?? null, g = /* @__PURE__ */ w(xe, { children: [
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
Uf.displayName = "StepperStep";
const Th = R.forwardRef(
  function({ count: t, color: n = "negative", variant: r = "fill", children: a, className: i, ...s }, l) {
    return /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: ["icon-badge", i].filter(Boolean).join(" "),
        ...s,
        children: [
          a,
          /* @__PURE__ */ o("span", { className: "icon-badge__counter", children: /* @__PURE__ */ o(_t, { count: t, size: "small", color: n, variant: r }) })
        ]
      }
    );
  }
);
function Gf(e, t) {
  if (t <= 1) return "full";
  const n = Math.min(t, 5), r = Math.min(t, 3), a = n * 120 + Math.max(n - 1, 0) * 8, i = r * 105 + Math.max(r - 1, 0) * 8;
  return e >= a ? "full" : e >= i ? "compact" : "minimal";
}
function Ii(e) {
  const t = [...e].reverse().findIndex((n) => n.type === "primary");
  return t === -1 ? e[e.length - 1] : e[e.length - 1 - t];
}
function Kf(e) {
  const t = Ii(e);
  return e.filter((n) => n.id !== (t == null ? void 0 : t.id));
}
function kh({
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
  const [g, _] = J("minimal"), N = le(null), y = le(null), C = le(null), E = le(null), M = pe(() => {
    var te, D, U;
    if (!(l != null && l.length)) return;
    let V;
    if (h)
      V = ((te = C.current) == null ? void 0 : te.offsetWidth) ?? 0;
    else {
      const Y = ((D = N.current) == null ? void 0 : D.offsetWidth) ?? 0, z = ((U = y.current) == null ? void 0 : U.scrollWidth) ?? 0;
      V = Y - z - 24;
    }
    c && E.current && (V -= E.current.offsetWidth + 17), _(Gf(V, l.length));
  }, [l, c, h]);
  Rt(() => {
    M();
    const V = h ? C.current : N.current;
    if (!V) return;
    const te = new ResizeObserver(M);
    return te.observe(V), () => te.disconnect();
  }, [M, h]);
  const S = !!(l != null && l.length), A = S || !!c || !!u, k = !!c && S, T = r && a.length >= 2 ? a[a.length - 2] : null, x = l ? Kf(l) : [], P = l ? Ii(l) : void 0, $ = x.length > 0 || ((f == null ? void 0 : f.length) ?? 0) > 0, j = S || ((f == null ? void 0 : f.length) ?? 0) > 0, Z = r && a.length > 0 ? /* @__PURE__ */ o(
    Vu,
    {
      items: a,
      onNavigate: i,
      className: "rpl-page-header__breadcrumbs"
    }
  ) : null, F = n ? /* @__PURE__ */ o("p", { className: "rpl-page-header__date", children: n }) : null, W = /* @__PURE__ */ o(
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
    W,
    s.length > 0 && /* @__PURE__ */ o("div", { className: "rpl-page-header__tags", "aria-label": "Tags", children: s.map((V, te) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ o("span", { className: "rpl-page-header__tag-item", children: V }, te)
    )) })
  ] }), O = /* @__PURE__ */ o("div", { className: "rpl-page-header__heading-row", children: W }), K = t ? /* @__PURE__ */ o("p", { className: "rpl-page-header__description", children: t }) : null, Q = /* @__PURE__ */ w("div", { className: "rpl-page-header__desktop-layout", "aria-hidden": "false", children: [
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
            F,
            B,
            K
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
                    Xu,
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
    T && /* @__PURE__ */ o("div", { className: "rpl-page-header__mobile-back", children: T.href ? /* @__PURE__ */ w(
      "a",
      {
        href: T.href,
        className: "rpl-page-header__mobile-back-link",
        onClick: i ? (V) => {
          V.preventDefault(), i(T.href);
        } : void 0,
        children: [
          /* @__PURE__ */ o(Et, { size: 16, "aria-hidden": "true" }),
          T.label
        ]
      }
    ) : /* @__PURE__ */ w("span", { className: "rpl-page-header__mobile-back-link", children: [
      /* @__PURE__ */ o(Et, { size: 16, "aria-hidden": "true" }),
      T.label
    ] }) }),
    F,
    O,
    K,
    s.length > 0 && /* @__PURE__ */ o("div", { className: "rpl-page-header__mobile-tags", children: s.map((V, te) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ o("span", { className: "rpl-page-header__tag-item", children: V }, te)
    )) }),
    u && /* @__PURE__ */ o("p", { className: "rpl-page-header__last-update", children: u }),
    j && /* @__PURE__ */ w("div", { className: "rpl-page-header__mobile-actions", children: [
      $ && /* @__PURE__ */ w(De, { children: [
        /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
          ye,
          {
            icon: /* @__PURE__ */ o(po, { size: 16 }),
            "aria-label": "More actions",
            variant: "outline",
            color: "neutral",
            size: "medium"
          }
        ) }),
        /* @__PURE__ */ w(Be, { align: "start", sideOffset: 4, children: [
          f && f.length > 0 && /* @__PURE__ */ w(xe, { children: [
            f.map((V) => /* @__PURE__ */ w(
              se,
              {
                disabled: V.disabled,
                onSelect: V.onClick,
                children: [
                  V.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: V.icon }),
                  V.label
                ]
              },
              V.id
            )),
            x.length > 0 && /* @__PURE__ */ o(bt, {})
          ] }),
          x.map((V, te) => {
            var D;
            return /* @__PURE__ */ w("span", { children: [
              te > 0 && V.type !== ((D = x[te - 1]) == null ? void 0 : D.type) && /* @__PURE__ */ o(bt, {}),
              /* @__PURE__ */ w(
                se,
                {
                  disabled: V.disabled,
                  onSelect: V.onClick,
                  children: [
                    V.icon && /* @__PURE__ */ o("span", { className: "flyout-menu-item-icon", "aria-hidden": "true", children: V.icon }),
                    V.label
                  ]
                }
              )
            ] }, V.id);
          })
        ] })
      ] }),
      P && /* @__PURE__ */ o(
        be,
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
        Q,
        ee
      ]
    }
  );
}
function Dh({
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
  }, g = l ? null : a === "success" ? /* @__PURE__ */ o(je, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : a === "error" ? /* @__PURE__ */ o(Fe, { size: 16, "aria-hidden": "true", className: "progress-bar__state-icon" }) : i ? null : /* @__PURE__ */ o("span", { className: "progress-bar__value", "aria-hidden": "true", children: n ?? `${h}%` }), _ = a === "success" ? `${e} complete` : a === "error" ? `${e} failed` : "";
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
function Yf(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Xf(e) {
  return Math.max(3, Math.floor(e * 0.06));
}
function qf(e, t) {
  return (e - t) / 2;
}
function Zf(e) {
  return 2 * Math.PI * e;
}
function Qf(e, t) {
  return e * (1 - t / 100);
}
function Jf(e, t) {
  const n = Math.floor(e * 0.25);
  return Math.max(12, t !== void 0 ? t : n);
}
function Lh({
  value: e,
  label: t,
  size: n = 120,
  labelFontSize: r,
  variant: a = "primary",
  ariaLabel: i,
  className: s,
  style: l
}) {
  const c = Yf(e, 0, 100), f = Xf(n), u = qf(n, f), d = Zf(u), p = Qf(d, c), h = n / 2, b = n / 2, v = Jf(n, r), g = t !== void 0 ? t : `${c}%`, _ = i ?? g;
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
const Ai = Zn(null);
function ep() {
  const e = Qn(Ai);
  if (!e) throw new Error("<Radio> must be a descendant of <RadioGroup>");
  return e;
}
function tp({ validation: e }) {
  const t = { size: 14, "aria-hidden": !0, className: "radio-group__msg-icon" };
  return e === "positive" ? /* @__PURE__ */ o(on, { ...t }) : e === "notice" ? /* @__PURE__ */ o(Nt, { ...t }) : /* @__PURE__ */ o(qe, { ...t });
}
const Bh = R.forwardRef(
  function({ value: t, label: n, disabled: r, id: a, className: i, ...s }, l) {
    const c = ep(), f = ae(), u = a ?? f, d = r || c.groupDisabled, p = c.groupValue === t;
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
), Fh = R.forwardRef(
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
    return /* @__PURE__ */ o(Ai.Provider, { value: { groupValue: t, onValueChange: n, name: _, groupDisabled: f }, children: /* @__PURE__ */ w(
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
                /* @__PURE__ */ o(tp, { validation: s }),
                l
              ]
            }
          )
        ]
      }
    ) });
  }
), np = { small: 16, medium: 20 };
function wt(e, t, n) {
  return (e - t) / (n - t) * 100;
}
function Un(e, t) {
  const n = t * 0.5 - e / 100 * t;
  return `calc(${e}% + ${n}px)`;
}
function rp(e, t, n, r) {
  if (Array.isArray(e)) return e;
  const a = (n - t) / r, i = a > 10 ? Math.ceil(a / 10) * r : r, s = [];
  for (let l = t; l <= n; l += i) s.push(l);
  return s[s.length - 1] !== n && s.push(n), s;
}
function Gn({
  value: e,
  min: t,
  max: n,
  thumbSize: r,
  formatValue: a,
  visible: i
}) {
  const s = wt(e, t, n), l = Un(s, r);
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
function Oi({
  markerValues: e,
  indicators: t,
  min: n,
  max: r,
  thumbSize: a
}) {
  return e.length === 0 && t.length === 0 ? null : /* @__PURE__ */ w(xe, { children: [
    e.length > 0 && /* @__PURE__ */ o("div", { className: "range__markers", "aria-hidden": "true", children: e.map((i) => /* @__PURE__ */ o(
      "div",
      {
        className: "range__marker",
        style: { left: Un(wt(i, n, r), a) }
      },
      i
    )) }),
    t.length > 0 && /* @__PURE__ */ o("div", { className: "range__indicators", "aria-hidden": "true", children: t.map((i) => /* @__PURE__ */ o(
      "span",
      {
        className: "range__indicator",
        style: { left: Un(wt(i.value, n, r), a) },
        children: i.label
      },
      i.value
    )) })
  ] });
}
function $h(e) {
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
  } = e, N = ae(), y = ae(), C = ae(), E = np[l], M = pt(
    () => c ? rp(c, a, i, s) : [],
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
                  ap,
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
                  op,
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
                  /* @__PURE__ */ o(qe, { size: 14, "aria-hidden": "true", className: "range__msg-icon" }),
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
function op({
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
  const [p, h] = J(!1), v = `${wt(e, n, r)}%`;
  return /* @__PURE__ */ w(xe, { children: [
    /* @__PURE__ */ o(
      Gn,
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
      Oi,
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
function ap({
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
  const [b, v] = e, [g, _] = J(null), N = le(null), y = le(null), C = wt(b, i, s), E = wt(v, i, s);
  function M(T) {
    const x = Math.min(Number(T.target.value), v - l);
    t([x, v]);
  }
  function S(T) {
    const x = Math.max(Number(T.target.value), b + l);
    t([b, x]);
  }
  const A = r ?? `Minimum ${n}`, k = a ?? `Maximum ${n}`;
  return /* @__PURE__ */ w(xe, { children: [
    /* @__PURE__ */ o(
      Gn,
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
      Gn,
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
      Oi,
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
var ip = Object.freeze({
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
}), sp = "VisuallyHidden", Ti = m.forwardRef(
  (e, t) => /* @__PURE__ */ o(
    ue.span,
    {
      ...e,
      ref: t,
      style: { ...ip, ...e.style }
    }
  )
);
Ti.displayName = sp;
var lp = Ti, [bn] = Ze("Tooltip", [
  hn
]), _n = hn(), ki = "TooltipProvider", cp = 700, Kn = "tooltip.open", [dp, Mr] = bn(ki), Di = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = cp,
    skipDelayDuration: r = 300,
    disableHoverableContent: a = !1,
    children: i
  } = e, s = m.useRef(!0), l = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ o(
    dp,
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
Di.displayName = ki;
var At = "Tooltip", [up, Ft] = bn(At), Li = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: l
  } = e, c = Mr(At, e.__scopeTooltip), f = _n(t), [u, d] = m.useState(null), p = Ke(), h = m.useRef(0), b = s ?? c.disableHoverableContent, v = l ?? c.delayDuration, g = m.useRef(!1), [_, N] = it({
    prop: r,
    defaultProp: a ?? !1,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Kn))) : c.onClose(), i == null || i(S);
    },
    caller: At
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
  }, []), /* @__PURE__ */ o(gr, { ...f, children: /* @__PURE__ */ o(
    up,
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
Li.displayName = At;
var Yn = "TooltipTrigger", Bi = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, a = Ft(Yn, n), i = Mr(Yn, n), s = _n(n), l = m.useRef(null), c = ve(t, l, a.onTriggerChange), f = m.useRef(!1), u = m.useRef(!1), d = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ o(la, { asChild: !0, ...s, children: /* @__PURE__ */ o(
      ue.button,
      {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: q(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          a.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          a.open && a.onClose(), f.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          f.current || a.onOpen();
        }),
        onBlur: q(e.onBlur, a.onClose),
        onClick: q(e.onClick, a.onClose)
      }
    ) });
  }
);
Bi.displayName = Yn;
var Pr = "TooltipPortal", [fp, pp] = bn(Pr, {
  forceMount: void 0
}), Fi = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: a } = e, i = Ft(Pr, t);
  return /* @__PURE__ */ o(fp, { scope: t, forceMount: n, children: /* @__PURE__ */ o(Qe, { present: n || i.open, children: /* @__PURE__ */ o(br, { asChild: !0, container: a, children: r }) }) });
};
Fi.displayName = Pr;
var yt = "TooltipContent", $i = m.forwardRef(
  (e, t) => {
    const n = pp(yt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: a = "top", ...i } = e, s = Ft(yt, e.__scopeTooltip);
    return /* @__PURE__ */ o(Qe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ o(zi, { side: a, ...i, ref: t }) : /* @__PURE__ */ o(hp, { side: a, ...i, ref: t }) });
  }
), hp = m.forwardRef((e, t) => {
  const n = Ft(yt, e.__scopeTooltip), r = Mr(yt, e.__scopeTooltip), a = m.useRef(null), i = ve(t, a), [s, l] = m.useState(null), { trigger: c, onClose: f } = n, u = a.current, { onPointerInTransitChange: d } = r, p = m.useCallback(() => {
    l(null), d(!1);
  }, [d]), h = m.useCallback(
    (b, v) => {
      const g = b.currentTarget, _ = { x: b.clientX, y: b.clientY }, N = bp(_, g.getBoundingClientRect()), y = _p(_, N), C = wp(v.getBoundingClientRect()), E = Np([...y, ...C]);
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
        const g = v.target, _ = { x: v.clientX, y: v.clientY }, N = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !yp(_, s);
        N ? p() : y && (p(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, u, s, f, p]), /* @__PURE__ */ o(zi, { ...e, ref: i });
}), [mp, vp] = bn(At, { isInside: !1 }), gp = /* @__PURE__ */ vs("TooltipContent"), zi = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": a,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...l
    } = e, c = Ft(yt, n), f = _n(n), { onClose: u } = c;
    return m.useEffect(() => (document.addEventListener(Kn, u), () => document.removeEventListener(Kn, u)), [u]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ o(
      lr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ w(
          ca,
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
              /* @__PURE__ */ o(gp, { children: r }),
              /* @__PURE__ */ o(mp, { scope: n, isInside: !0, children: /* @__PURE__ */ o(lp, { id: c.contentId, role: "tooltip", children: a || r }) })
            ]
          }
        )
      }
    );
  }
);
$i.displayName = yt;
var ji = "TooltipArrow", Wi = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, a = _n(n);
    return vp(
      ji,
      n
    ).isInside ? null : /* @__PURE__ */ o(da, { ...a, ...r, ref: t });
  }
);
Wi.displayName = ji;
function bp(e, t) {
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
function _p(e, t, n = 5) {
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
function wp(e) {
  const { top: t, right: n, bottom: r, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: a, y: r }
  ];
}
function yp(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], c = t[s], f = l.x, u = l.y, d = c.x, p = c.y;
    u > r != p > r && n < (d - f) * (r - u) / (p - u) + f && (a = !a);
  }
  return a;
}
function Np(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Cp(t);
}
function Cp(e) {
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
var xp = Di, Sp = Li, Rp = Bi, Ep = Fi, Mp = $i, Pp = Wi;
function Ip(e) {
  const t = e.split("-");
  return {
    side: t[0],
    align: t[1] ?? "center"
  };
}
function Xn({
  content: e,
  children: t,
  placement: n = "top",
  showArrow: r = !0,
  delay: a = 300,
  disabled: i = !1,
  maxWidth: s = "200px"
}) {
  if (i) return /* @__PURE__ */ o(xe, { children: t });
  const { side: l, align: c } = Ip(n);
  return /* @__PURE__ */ o(xp, { delayDuration: a, children: /* @__PURE__ */ w(Sp, { children: [
    /* @__PURE__ */ o(Rp, { asChild: !0, children: t }),
    /* @__PURE__ */ o(Ep, { children: /* @__PURE__ */ w(
      Mp,
      {
        className: "tooltip-content",
        side: l,
        align: c,
        sideOffset: 8,
        style: { maxWidth: s },
        children: [
          e,
          r && /* @__PURE__ */ o(Pp, { className: "tooltip-arrow", width: 12, height: 6 })
        ]
      }
    ) })
  ] }) });
}
function co({ item: e }) {
  const t = e.count && e.count > 0 ? `${e.label} (${e.count > 99 ? "99+" : e.count})` : e.label;
  return /* @__PURE__ */ o(Xn, { content: t, placement: "right", children: /* @__PURE__ */ w(
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
          _t,
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
  ) });
}
function Ap({
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
  const h = i.slice(0, 5), b = s.slice(0, 4), v = s.slice(4), g = s.length > 0, _ = v.length > 0, N = /* @__PURE__ */ w(xe, { children: [
    /* @__PURE__ */ o("span", { className: "navbar__logo-icon", "aria-hidden": "true", children: e ?? /* @__PURE__ */ o(Op, {}) }),
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
          mf,
          {
            variant: "fill",
            size: "small",
            color: a,
            className: "navbar__tenant-badge",
            title: r,
            children: r
          }
        ) }),
        h.length > 0 && /* @__PURE__ */ o("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Global navigation", children: h.map((y) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(co, { item: y }) }, y.id)) }),
        g && /* @__PURE__ */ w(xe, { children: [
          l && /* @__PURE__ */ o("div", { className: "navbar__divider", role: "separator", "aria-hidden": "true" }),
          /* @__PURE__ */ w("ul", { className: "navbar__nav-list", role: "list", "aria-label": "Contextual navigation", children: [
            b.map((y) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(co, { item: y }) }, y.id)),
            _ && /* @__PURE__ */ o("li", { children: /* @__PURE__ */ w(De, { children: [
              /* @__PURE__ */ o(Xn, { content: "More", placement: "right", children: /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: "navbar__nav-btn",
                  "aria-label": "More navigation items",
                  children: /* @__PURE__ */ o("span", { className: "navbar__nav-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ o(at, { size: 20 }) })
                }
              ) }) }),
              /* @__PURE__ */ o(Be, { side: "right", align: "start", sideOffset: 12, children: v.map((y) => /* @__PURE__ */ w(
                se,
                {
                  disabled: y.disabled,
                  onSelect: y.onClick,
                  children: [
                    y.icon && /* @__PURE__ */ o("span", { className: "navbar__overflow-icon", "aria-hidden": "true", children: y.icon }),
                    y.label,
                    y.count !== void 0 && y.count > 0 && /* @__PURE__ */ o(
                      _t,
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
        /* @__PURE__ */ o("div", { className: "navbar__user", children: /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ o(Xn, { content: c, placement: "right", children: /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
            gf,
            {
              name: c,
              src: f,
              size: "m",
              "aria-label": `${c} — open user menu`,
              className: "navbar__avatar-trigger"
            }
          ) }) }),
          /* @__PURE__ */ w(Be, { side: "right", align: "end", sideOffset: 12, children: [
            /* @__PURE__ */ o(wi, { children: c }),
            u.map((y) => /* @__PURE__ */ w("span", { children: [
              y.separator && /* @__PURE__ */ o(bt, {}),
              /* @__PURE__ */ w(se, { onSelect: y.onClick, children: [
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
function Op() {
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
function Tp() {
  return /* @__PURE__ */ o("span", { className: "split-button__spinner", "aria-hidden": "true" });
}
function zh({
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
  return /* @__PURE__ */ w(hi, { children: [
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
                c ? /* @__PURE__ */ o(Tp, {}) : s,
                e
              ]
            }
          ),
          /* @__PURE__ */ o("span", { className: "split-button__divider", "aria-hidden": "true" }),
          /* @__PURE__ */ o(mi, { asChild: !0, children: /* @__PURE__ */ o(
            "button",
            {
              className: "split-button__trigger",
              "aria-label": f,
              disabled: l,
              children: /* @__PURE__ */ o(Ot, { className: "split-button__chevron", "aria-hidden": "true" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ o(Er, { children: /* @__PURE__ */ o(
      vi,
      {
        className: "split-button__menu",
        sideOffset: 4,
        align: "end",
        children: n.map((p) => /* @__PURE__ */ w(
          gi,
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
const kp = {
  negative: /* @__PURE__ */ o(qe, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  notice: /* @__PURE__ */ o(Nt, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" }),
  positive: /* @__PURE__ */ o(on, { size: 14, "aria-hidden": "true", className: "textarea__msg-icon" })
}, jh = R.forwardRef(
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
    const C = ae(), E = ae(), M = ae(), S = ae(), [A, k] = J(() => String(v ?? g ?? "").length), T = v !== void 0 ? String(v).length : A, x = le(null);
    qn(y, () => x.current, []), Rt(() => {
      if (i !== "auto") return;
      const F = x.current;
      if (!F) return;
      F.style.height = "auto";
      const W = F.scrollHeight, B = l !== void 0 ? Math.min(W, l) : W, O = s !== void 0 ? Math.max(B, s) : B;
      F.style.height = `${O}px`, F.style.overflowY = l !== void 0 && W >= l ? "auto" : "hidden";
    }, [T, i, s, l]);
    function P(F) {
      k(F.target.value.length), _ == null || _(F);
    }
    const $ = !!(a && r), j = [
      $ ? M : n ? E : null,
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
              "aria-describedby": j,
              "data-resize": i,
              style: Z,
              ...N
            }
          ),
          (n || $ || c && p != null) && /* @__PURE__ */ w("div", { className: "textarea__footer", children: [
            $ ? /* @__PURE__ */ w(
              "p",
              {
                id: M,
                className: "textarea__message",
                role: r === "negative" ? "alert" : void 0,
                children: [
                  kp[r],
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
          c && p != null && /* @__PURE__ */ o("div", { className: "textarea__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: T >= p ? `Character limit of ${p} reached` : "" })
        ]
      }
    );
  }
), Dp = {
  negative: /* @__PURE__ */ o(qe, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  notice: /* @__PURE__ */ o(Nt, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" }),
  positive: /* @__PURE__ */ o(on, { size: 14, "aria-hidden": "true", className: "text-input__msg-icon" })
}, Lp = { small: 14, medium: 16, large: 18 }, Wh = R.forwardRef(
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
  }, T) {
    const x = ae(), P = ae(), $ = ae(), j = ae(), [Z, F] = J(!1), [W, B] = J(!1), [O, K] = J(() => String(y ?? C ?? "").length), Q = y !== void 0 ? String(y).length : O, ee = le(null);
    qn(T, () => ee.current, []);
    const V = v === "password" && Z ? "text" : v, te = Lp[s], D = v === "search" && !f ? /* @__PURE__ */ o(ds, { size: te, "aria-hidden": "true" }) : f;
    let U = null;
    v === "password" ? U = /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": Z ? "Hide password" : "Show password",
        tabIndex: 0,
        onClick: () => {
          var ie;
          F((he) => !he), (ie = ee.current) == null || ie.focus();
        },
        children: Z ? /* @__PURE__ */ o(vo, { size: te, "aria-hidden": "true" }) : /* @__PURE__ */ o(us, { size: te, "aria-hidden": "true" })
      }
    ) : v === "search" && Q > 0 ? U = /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "text-input__action-btn",
        "aria-label": "Clear",
        tabIndex: 0,
        onClick: () => {
          const ie = ee.current;
          ie && (ie.value = "", ie.focus()), K(0), p == null || p();
        },
        children: /* @__PURE__ */ o(Fe, { size: te, "aria-hidden": "true" })
      }
    ) : U = u ?? null;
    const Y = !!D, z = !!U, H = !!(i && a), ce = [
      H ? $ : r ? P : null,
      d && A != null ? j : null
    ].filter(Boolean).join(" ") || void 0;
    function de(ie) {
      K(ie.target.value.length), E == null || E(ie);
    }
    function oe(ie) {
      B(!0), M == null || M(ie);
    }
    function fe(ie) {
      B(!1), S == null || S(ie);
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
              "data-focused": W || void 0,
              "data-disabled": _ || void 0,
              "data-readonly": N || void 0,
              children: [
                l != null && /* @__PURE__ */ o("div", { className: "text-input__prefix", "aria-hidden": "true", children: l }),
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "text-input__inner",
                    "data-icon-start": Y || void 0,
                    "data-icon-end": z || void 0,
                    children: [
                      D && /* @__PURE__ */ o("span", { className: "text-input__icon-start", "aria-hidden": "true", children: D }),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          ref: ee,
                          id: x,
                          className: "text-input__field",
                          type: V,
                          required: g,
                          disabled: _,
                          readOnly: N,
                          value: y,
                          defaultValue: C,
                          maxLength: A,
                          onChange: de,
                          onFocus: oe,
                          onBlur: fe,
                          "aria-required": g || void 0,
                          "aria-invalid": a === "negative" || void 0,
                          "aria-describedby": ce,
                          ...k
                        }
                      ),
                      U && /* @__PURE__ */ o("span", { className: "text-input__icon-end", children: U })
                    ]
                  }
                ),
                c != null && /* @__PURE__ */ o("div", { className: "text-input__suffix", "aria-hidden": "true", children: c })
              ]
            }
          ),
          (r || H || d && A != null) && /* @__PURE__ */ w("div", { className: "text-input__footer", children: [
            H ? /* @__PURE__ */ w(
              "p",
              {
                id: $,
                className: "text-input__message",
                role: a === "negative" ? "alert" : void 0,
                children: [
                  Dp[a],
                  i
                ]
              }
            ) : r ? /* @__PURE__ */ o("p", { id: P, className: "text-input__hint", children: r }) : null,
            d && A != null && /* @__PURE__ */ w(
              "div",
              {
                id: j,
                className: [
                  "text-input__counter",
                  Q >= A ? "text-input__counter--at-limit" : ""
                ].filter(Boolean).join(" "),
                children: [
                  Q,
                  " / ",
                  A
                ]
              }
            )
          ] }),
          d && A != null && /* @__PURE__ */ o("div", { className: "text-input__sr-announce", "aria-live": "polite", "aria-atomic": "true", children: Q >= A ? `Character limit of ${A} reached` : "" })
        ]
      }
    );
  }
), Bp = {
  neutral: 6e3,
  positive: 6e3,
  notice: 0,
  negative: 0
}, Fp = {
  neutral: bo,
  positive: on,
  notice: go,
  negative: qe
}, Vi = Zn(null);
function $p({ toast: e, onExitStart: t, onExitComplete: n }) {
  const r = le(!1);
  me(() => {
    if (!e.duration || e.exiting) return;
    const l = setTimeout(() => t(e.id), e.duration);
    return () => clearTimeout(l);
  }, [e.id, e.duration, e.exiting, t]), me(() => {
    if (!e.exiting) return;
    const l = setTimeout(() => {
      r.current || (r.current = !0, n(e.id));
    }, 320);
    return () => clearTimeout(l);
  }, [e.exiting, e.id, n]);
  function a(l) {
    l.animationName === "toast-exit" && !r.current && (r.current = !0, n(e.id));
  }
  const i = e.variant === "notice" || e.variant === "negative", s = e.variant === "neutral" && e.icon ? e.icon : Fp[e.variant];
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
            children: /* @__PURE__ */ o(Fe, { size: 16, "aria-hidden": "true" })
          }
        ),
        e.showProgress && e.duration > 0 && !e.exiting && /* @__PURE__ */ o("div", { className: "toast__progress", "aria-hidden": "true", children: /* @__PURE__ */ o("div", { className: "toast__progress-bar" }) })
      ]
    }
  );
}
function Vh({
  children: e,
  position: t = "top-right",
  maxToasts: n = 5
}) {
  const [r, a] = J([]), [i, s] = J(t), l = pe((d) => {
    const p = d.variant ?? "neutral", h = d.duration !== void 0 ? d.duration : Bp[p], b = d.showCloseButton !== void 0 ? d.showCloseButton : p === "notice" || p === "negative", v = {
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
  }, [n]), c = pe((d) => {
    a((p) => p.map((h) => h.id === d ? { ...h, exiting: !0 } : h));
  }, []), f = pe(() => {
    a((d) => d.map((p) => ({ ...p, exiting: !0 })));
  }, []), u = pe((d) => {
    a((p) => p.filter((h) => h.id !== d));
  }, []);
  return /* @__PURE__ */ w(Vi.Provider, { value: { addToast: l, removeToast: c, removeAllToasts: f, setPosition: s }, children: [
    e,
    Yi(
      /* @__PURE__ */ o("div", { className: "toast-container", "data-position": i, "aria-label": "Notifications", children: r.map((d) => /* @__PURE__ */ o(
        $p,
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
function Hh() {
  const e = Qn(Vi);
  if (!e) throw new Error("useToast must be used within a ToastProvider");
  return e;
}
const uo = 200, zp = [];
function jp(e, t) {
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
function Wp({
  tabs: e,
  activeTabId: t,
  groups: n = zp,
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
  const g = le(null), [_, N] = J(!1), [y, C] = J(!1), [E, M] = J(/* @__PURE__ */ new Set()), S = pe(() => {
    const x = g.current;
    x && (N(x.scrollLeft > 0), C(x.scrollLeft + x.clientWidth < x.scrollWidth - 1));
  }, []);
  me(() => {
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
      const $ = new Set(P);
      return $.has(x) ? $.delete(x) : $.add(x), $;
    });
  }
  const T = jp(e, n);
  return /* @__PURE__ */ w(
    "div",
    {
      className: ["footer", v].filter(Boolean).join(" "),
      role: "navigation",
      "aria-label": "Open tabs",
      children: [
        /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(at, { size: 16 }),
              "aria-label": "Footer menu, open tabs and actions",
              className: "footer__menu-btn"
            }
          ) }),
          /* @__PURE__ */ w(Be, { side: "top", align: "start", sideOffset: 8, children: [
            e.length > 0 && /* @__PURE__ */ w(xe, { children: [
              /* @__PURE__ */ o(wi, { children: "Open tabs" }),
              /* @__PURE__ */ o($u, { children: e.map((x) => /* @__PURE__ */ o(
                se,
                {
                  onSelect: () => r(x.id),
                  "data-active-tab": x.id === t ? "" : void 0,
                  children: x.label
                },
                x.id
              )) }),
              /* @__PURE__ */ o(bt, {})
            ] }),
            /* @__PURE__ */ o(
              se,
              {
                onSelect: () => h == null ? void 0 : h(),
                disabled: !h || e.length === 0,
                children: "Close all tabs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o(
          be,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ o(Et, { size: 16 }),
            "aria-label": "Scroll tabs left",
            disabled: !_,
            onClick: () => A(-uo),
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
            children: T.map(
              (x) => x.kind === "tab" ? /* @__PURE__ */ o(
                Hi,
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
                Vp,
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
          be,
          {
            variant: "ghost",
            size: "small",
            color: "neutral",
            iconStart: /* @__PURE__ */ o(vt, { size: 16 }),
            "aria-label": "Scroll tabs right",
            disabled: !y,
            onClick: () => A(uo),
            className: "footer__scroll-btn"
          }
        )
      ]
    }
  );
}
function Hi({
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
              p === "locked" && /* @__PURE__ */ o(fs, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" }),
              p === "pinned" && /* @__PURE__ */ o(ps, { size: 13, className: "footer-tab__type-icon", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ w("span", { className: "footer-tab__actions", children: [
          p === "standard" && a && /* @__PURE__ */ o(
            be,
            {
              variant: "ghost",
              size: "small",
              color: "neutral",
              iconStart: /* @__PURE__ */ o(Fe, { size: 12 }),
              "aria-label": `Close ${e.label}`,
              className: "footer-tab__close-btn",
              onClick: a
            }
          ),
          /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
              be,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ o(at, { size: 14 }),
                "aria-label": `More actions for ${e.label}`,
                className: "footer-tab__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Be, { side: "top", align: "start", sideOffset: 8, children: [
              p === "standard" && i && /* @__PURE__ */ o(se, { onSelect: i, children: "Lock tab" }),
              p === "locked" && s && /* @__PURE__ */ o(se, { onSelect: s, children: "Unlock tab" }),
              p !== "pinned" && l && /* @__PURE__ */ o(se, { onSelect: l, children: "Pin to left of screen" }),
              p === "pinned" && c && /* @__PURE__ */ o(se, { onSelect: c, children: "Unpin tab" }),
              n.length > 0 && f && /* @__PURE__ */ o(se, { onSelect: f, children: "Add to group" }),
              /* @__PURE__ */ o(bt, {}),
              p === "standard" && a && /* @__PURE__ */ o(se, { onSelect: a, children: "Close this tab" }),
              u && /* @__PURE__ */ o(se, { onSelect: u, children: "Close all other tabs" }),
              p === "standard" && d && /* @__PURE__ */ o(se, { onSelect: d, children: "Close all tabs" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Vp({
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
            _f,
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
          r && (b || v || g) && /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ o(Le, { asChild: !0, children: /* @__PURE__ */ o(
              be,
              {
                variant: "ghost",
                size: "small",
                color: "neutral",
                iconStart: /* @__PURE__ */ o(at, { size: 14 }),
                "aria-label": `More actions for ${e.label} group`,
                className: "footer-group__more-btn"
              }
            ) }),
            /* @__PURE__ */ w(Be, { side: "top", align: "start", sideOffset: 8, children: [
              b && /* @__PURE__ */ o(se, { onSelect: b, children: "Edit group" }),
              v && /* @__PURE__ */ o(se, { onSelect: v, children: "Ungroup" }),
              (b || v) && /* @__PURE__ */ o(bt, {}),
              p && t[0] && /* @__PURE__ */ o(se, { onSelect: () => p(t[0].id), children: "Close all other tabs" }),
              g && /* @__PURE__ */ o(se, { onSelect: g, children: "Close group" })
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ o("div", { className: "footer-group__tabs", children: t.map((y) => /* @__PURE__ */ o(
          Hi,
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
function Hp({
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
    const { drawerId: $, ...j } = P;
    return {
      ...j,
      selected: y === $,
      onClick: () => {
        var Z;
        (Z = P.onClick) == null || Z.call(P), E($);
      }
    };
  }
  const S = i.map(M), A = s.map(M), k = d.find((P) => P.id === y) ?? null, T = k != null && k.persistent ? k : null, x = d.filter((P) => !P.persistent);
  return /* @__PURE__ */ w("div", { className: ["main-navigation", v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o(
      Ap,
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
    T && /* @__PURE__ */ o(
      "div",
      {
        className: "main-navigation__panel",
        "data-size": T.size ?? "medium",
        role: "complementary",
        "aria-label": "Navigation panel",
        children: T.content
      }
    ),
    /* @__PURE__ */ o("div", { className: "main-navigation__content", children: b }),
    x.map((P) => /* @__PURE__ */ o(
      hf,
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
function Uh({
  nav: e,
  footer: t,
  children: n,
  className: r
}) {
  return /* @__PURE__ */ w(xe, { children: [
    /* @__PURE__ */ o(
      Hp,
      {
        ...e,
        className: ["micro-navigation", e.className, r].filter(Boolean).join(" "),
        children: /* @__PURE__ */ o("main", { className: "micro-navigation__main", children: n })
      }
    ),
    /* @__PURE__ */ o(Wp, { ...t })
  ] });
}
export {
  Xp as Accordion,
  gf as Avatar,
  yh as AvatarGroup,
  Nh as AvatarWithStatus,
  mf as Badge,
  Ah as BannerAlert,
  Vu as Breadcrumbs,
  be as Button,
  Xu as ButtonsToolbar,
  Ch as Card,
  Eh as CardContent,
  Rh as CardDescription,
  Ih as CardDivider,
  Mh as CardFooter,
  xh as CardHeader,
  Ph as CardSection,
  Sh as CardTitle,
  rh as Checkbox,
  oh as CheckboxGroup,
  ft as Chip,
  ah as ChipGroup,
  ih as Combobox,
  _t as Counter,
  Of as Dialog,
  kf as DialogBody,
  Df as DialogFooter,
  Tf as DialogHeader,
  _i as Divider,
  hf as Drawer,
  ph as DrawerContent,
  _h as DrawerContextButton,
  uh as DrawerHeader,
  gh as DrawerListItem,
  mh as DrawerMenuItem,
  vh as DrawerMultiLevelItem,
  bh as DrawerNotificationItem,
  hh as DrawerSection,
  fh as DrawerTools,
  sh as Dropdown,
  lh as FieldLabel,
  ch as FileUploader,
  dh as FileViewer,
  De as FlyoutMenu,
  qp as FlyoutMenuCheckboxItem,
  Be as FlyoutMenuContent,
  $u as FlyoutMenuGroup,
  se as FlyoutMenuItem,
  wi as FlyoutMenuLabel,
  Zp as FlyoutMenuRadioGroup,
  Qp as FlyoutMenuRadioItem,
  bt as FlyoutMenuSeparator,
  nh as FlyoutMenuShortcut,
  Jp as FlyoutMenuSub,
  th as FlyoutMenuSubContent,
  eh as FlyoutMenuSubTrigger,
  Le as FlyoutMenuTrigger,
  Wp as Footer,
  yi as Hint,
  Th as IconBadge,
  ye as IconButton,
  wh as Link,
  Wf as List,
  Vf as ListItem,
  Hp as MainNavigation,
  Uh as MicroNavigation,
  Ap as Navbar,
  kh as PageHeader,
  xf as Panel,
  Rf as PanelBody,
  Ef as PanelFooter,
  Sf as PanelHeader,
  Dh as ProgressBar,
  Lh as ProgressCircle,
  Bh as Radio,
  Fh as RadioGroup,
  $h as Range,
  Mf as Section,
  Gt as Spinner,
  zh as SplitButton,
  Hf as Stepper,
  Uf as StepperStep,
  Oh as Switch,
  $f as Tab,
  Ff as TabList,
  zf as TabPanel,
  Bf as Tabs,
  _f as Tag,
  jh as TextArea,
  Wh as TextInput,
  Vh as ToastProvider,
  Xn as Tooltip,
  Ni as ValidationMessage,
  Hh as useToast
};
