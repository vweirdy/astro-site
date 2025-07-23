(function() {
    'use strict';
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var k = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    };
    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var m = ba(this),
        p = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        q = {},
        t = {};
    function u(a, b, c) {
        if (!c || a != null) {
            c = t[b];
            if (c == null)
                return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }
    function w(a, b, c) {
        if (b)
            a:
            {
                var d = a.split(".");
                a = d.length === 1;
                var f = d[0],
                    g;
                !a && f in q ? g = q : g = m;
                for (f = 0; f < d.length - 1; f++) {
                    var e = d[f];
                    if (!(e in g))
                        break a;
                    g = g[e]
                }
                d = d[d.length - 1];
                c = p && c === "es6" ? g[d] : null;
                b = b(c);
                b != null && (a ? k(q, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (t[d] === void 0 && (a = Math.random() * 1E9 >>> 0, t[d] = p ? m.Symbol(d) : "$jscp$" + a + "$" + d), k(g, t[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    w("Symbol", function(a) {
        function b(g) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + f++, g)
        }
        function c(g, e) {
            this.g = g;
            k(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            f = 0;
        return b
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0, q.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = m[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && k(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ca(aa(this))
                }
            })
        }
        return a
    }, "es6");
    function ca(a) {
        a = {
            next: a
        };
        a[u(q.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    var da = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        x;
    if (p && typeof Object.setPrototypeOf == "function")
        x = Object.setPrototypeOf;
    else {
        var z;
        a:
        {
            var ea = {
                    a: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                z = fa.a;
                break a
            } catch (a) {}
            z = !1
        }x = z ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ha = x;
    function A(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ha)
            ha(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Y = b.prototype
    }
    function ia(a) {
        var b = typeof q.Symbol != "undefined" && u(q.Symbol, "iterator") && a[u(q.Symbol, "iterator")];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    function B(a) {
        return ja(a, a)
    }
    function ja(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a), Object.freeze(b));
        return a
    }
    var ka = p && typeof u(Object, "assign") == "function" ? u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var f in d)
                    Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f])
        }
        return a
    };
    w("Object.assign", function(a) {
        return a || ka
    }, "es6");
    function C() {
        this.s = !1;
        this.i = null;
        this.h = void 0;
        this.g = 1;
        this.A = this.m = 0;
        this.l = null
    }
    function D(a) {
        if (a.s)
            throw new TypeError("Generator is already running");
        a.s = !0
    }
    C.prototype.v = function(a) {
        this.h = a
    };
    function E(a, b) {
        a.l = {
            L: b,
            U: !0
        };
        a.g = a.m || a.A
    }
    C.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.g = this.A
    };
    function F(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
    function G(a) {
        a.m = 0;
        var b = a.l.L;
        a.l = null;
        return b
    }
    function la(a) {
        this.g = new C;
        this.h = a
    }
    function ma(a, b) {
        D(a.g);
        var c = a.g.i;
        if (c)
            return H(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
        a.g.return(b);
        return I(a)
    }
    function H(a, b, c, d) {
        try {
            var f = b.call(a.g.i, c);
            if (!(f instanceof Object))
                throw new TypeError("Iterator result " + f + " is not an object");
            if (!f.done)
                return a.g.s = !1, f;
            var g = f.value
        } catch (e) {
            return a.g.i = null, E(a.g, e), I(a)
        }
        a.g.i = null;
        d.call(a.g, g);
        return I(a)
    }
    function I(a) {
        for (; a.g.g;)
            try {
                var b = a.h(a.g);
                if (b)
                    return a.g.s = !1, {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.h = void 0,
                E(a.g, c)
            }
        a.g.s = !1;
        if (a.g.l) {
            b = a.g.l;
            a.g.l = null;
            if (b.U)
                throw b.L;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
    function na(a) {
        this.next = function(b) {
            D(a.g);
            a.g.i ? b = H(a, a.g.i.next, b, a.g.v) : (a.g.v(b), b = I(a));
            return b
        };
        this.throw = function(b) {
            D(a.g);
            a.g.i ? b = H(a, a.g.i["throw"], b, a.g.v) : (E(a.g, b), b = I(a));
            return b
        };
        this.return = function(b) {
            return ma(a, b)
        };
        this[u(q.Symbol, "iterator")] = function() {
            return this
        }
    }
    function oa(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new q.Promise(function(d, f) {
            function g(e) {
                e.done ? d(e.value) : q.Promise.resolve(e.value).then(b, c).then(g, f)
            }
            g(a.next())
        })
    }
    function J(a) {
        return oa(new na(new la(a)))
    }
    function pa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    w("globalThis", function(a) {
        return a || m
    }, "es_2020");
    w("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.v = !1;
            var h = this.l();
            try {
                e(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        }
        function c() {
            this.g = null
        }
        function d(e) {
            return e instanceof b ? e : new b(function(h) {
                h(e)
            })
        }
        if (a)
            return a;
        c.prototype.h = function(e) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.m()
                })
            }
            this.g.push(e)
        };
        var f = m.setTimeout;
        c.prototype.i = function(e) {
            f(e, 0)
        };
        c.prototype.m = function() {
            for (; this.g && this.g.length;) {
                var e = this.g;
                this.g = [];
                for (var h = 0; h < e.length; ++h) {
                    var l =
                    e[h];
                    e[h] = null;
                    try {
                        l()
                    } catch (n) {
                        this.l(n)
                    }
                }
            }
            this.g = null
        };
        c.prototype.l = function(e) {
            this.i(function() {
                throw e;
            })
        };
        b.prototype.l = function() {
            function e(n) {
                return function(r) {
                    l || (l = !0, n.call(h, r))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: e(this.P),
                reject: e(this.m)
            }
        };
        b.prototype.P = function(e) {
            if (e === this)
                this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b)
                this.S(e);
            else {
                a:
                switch (typeof e) {
                case "object":
                    var h = e != null;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.O(e) : this.s(e)
            }
        };
        b.prototype.O = function(e) {
            var h = void 0;
            try {
                h = e.then
            } catch (l) {
                this.m(l);
                return
            }
            typeof h == "function" ? this.T(h, e) : this.s(e)
        };
        b.prototype.m = function(e) {
            this.A(2, e)
        };
        b.prototype.s = function(e) {
            this.A(1, e)
        };
        b.prototype.A = function(e, h) {
            if (this.h != 0)
                throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = h;
            this.h === 2 && this.R();
            this.V()
        };
        b.prototype.R = function() {
            var e = this;
            f(function() {
                if (e.W()) {
                    var h = m.console;
                    typeof h !== "undefined" && h.error(e.i)
                }
            }, 1)
        };
        b.prototype.W =
        function() {
            if (this.v)
                return !1;
            var e = m.CustomEvent,
                h = m.Event,
                l = m.dispatchEvent;
            if (typeof l === "undefined")
                return !0;
            typeof e === "function" ? e = new e("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? e = new h("unhandledrejection", {
                cancelable: !0
            }) : (e = m.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
            e.promise = this;
            e.reason = this.i;
            return l(e)
        };
        b.prototype.V = function() {
            if (this.g != null) {
                for (var e = 0; e < this.g.length; ++e)
                    g.h(this.g[e]);
                this.g = null
            }
        };
        var g = new c;
        b.prototype.S =
        function(e) {
            var h = this.l();
            e.D(h.resolve, h.reject)
        };
        b.prototype.T = function(e, h) {
            var l = this.l();
            try {
                e.call(h, l.resolve, l.reject)
            } catch (n) {
                l.reject(n)
            }
        };
        b.prototype.then = function(e, h) {
            function l(v, y) {
                return typeof v == "function" ? function(Q) {
                    try {
                        n(v(Q))
                    } catch (R) {
                        r(R)
                    }
                } : y
            }
            var n,
                r,
                S = new b(function(v, y) {
                    n = v;
                    r = y
                });
            this.D(l(e, n), l(h, r));
            return S
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.D = function(e, h) {
            function l() {
                switch (n.h) {
                case 1:
                    e(n.i);
                    break;
                case 2:
                    h(n.i);
                    break;
                default:
                    throw Error("Unexpected state: " +
                    n.h);
                }
            }
            var n = this;
            this.g == null ? g.h(l) : this.g.push(l);
            this.v = !0
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(h, l) {
                l(e)
            })
        };
        b.race = function(e) {
            return new b(function(h, l) {
                for (var n = ia(e), r = n.next(); !r.done; r = n.next())
                    d(r.value).D(h, l)
            })
        };
        b.all = function(e) {
            var h = ia(e),
                l = h.next();
            return l.done ? d([]) : new b(function(n, r) {
                function S(Q) {
                    return function(R) {
                        v[Q] = R;
                        y--;
                        y == 0 && n(v)
                    }
                }
                var v = [],
                    y = 0;
                do v.push(void 0),
                y++,
                d(l.value).D(S(v.length - 1), r),
                l = h.next();
                while (!l.done)
            })
        };
        return b
    }, "es6");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var f = [],
                g = typeof q.Symbol != "undefined" && u(q.Symbol, "iterator") && b[u(q.Symbol, "iterator")];
            if (typeof g == "function") {
                b = g.call(b);
                for (var e = 0; !(g = b.next()).done;)
                    f.push(c.call(d, g.value, e++))
            } else
                for (g = b.length, e = 0; e < g; e++)
                    f.push(c.call(d, b[e], e));
            return f
        }
    }, "es6");
    w("Promise.allSettled", function(a) {
        function b(d) {
            return {
                status: "fulfilled",
                value: d
            }
        }
        function c(d) {
            return {
                status: "rejected",
                reason: d
            }
        }
        return a ? a : function(d) {
            var f = this;
            d = u(Array, "from").call(Array, d, function(g) {
                return f.resolve(g).then(b, c)
            });
            return f.all(d)
        }
    }, "es_2020"); /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */




    var qa = q.globalThis.trustedTypes,
        K;
    function ra() {
        var a = null;
        if (!qa)
            return a;
        try {
            var b = function(c) {
                return c
            };
            a = qa.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }
    ;
    function L(a) {
        this.g = a
    }
    L.prototype.toString = function() {
        return this.g + ""
    };
    function M(a) {
        var b;
        K === void 0 && (K = ra());
        a = (b = K) ? b.createScriptURL(a) : a;
        return new L(a)
    }
    function sa(a) {
        if (a instanceof L)
            return a.g;
        throw Error("");
    }
    ;
    function N(a) {
        var b = pa.apply(1, arguments);
        if (b.length === 0)
            return M(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return M(c)
    }
    ;
    var ta = B(["https://www.google.com/recaptcha/api2/aframe"]),
        ua = N(ta);
    function va(a, b) {
        a.src = sa(b);
        var c;
        b = a.ownerDocument;
        b = b === void 0 ? document : b;
        var d;
        b = (d = (c = b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
        (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
    }
    ;
    function O(a, b, c) {
        typeof a.addEventListener === "function" && a.addEventListener(b, c, !1)
    }
    ;
    function wa(a, b) {
        var c = !1;
        c = c === void 0 ? !1 : c;
        return new q.Promise(function(d, f) {
            function g() {
                e.onload = null;
                e.onerror = null;
                var h;
                (h = e.parentElement) == null || h.removeChild(e)
            }
            var e = b.document.createElement("script");
            e.onload = function() {
                g();
                d()
            };
            e.onerror = function() {
                g();
                f(7)
            };
            e.type = "text/javascript";
            va(e, a);
            c && b.document.readyState !== "complete" ? O(b, "load", function() {
                b.document.body.appendChild(e)
            }) : b.document.body.appendChild(e)
        })
    }
    function xa(a, b) {
        var c = window;
        return new q.Promise(function(d) {
            b === void 0 && (b = c.document.createElement("iframe"));
            b.addEventListener("load", function() {
                d(b)
            });
            b.src = sa(a).toString();
            b.width = "0";
            b.height = "0";
            b.style.display = "none";
            c.document.body.appendChild(b)
        })
    }
    ;
    function ya(a) {
        return new q.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    }
    function za(a) {
        a = a === void 0 ? document : a;
        return a.createElement("img")
    }
    ;
    var Aa = B(["https://ep1.adtrafficquality.google/bg/", ".js"]),
        Ba = B(["https://pagead2.googlesyndication.com/bg/", ".js"]);
    function P(a, b, c, d) {
        var f = window;
        f = f === void 0 ? window : f;
        this.J = b;
        this.h = f;
        this.o = c === void 0 ? 0 : c;
        this.i = (d === void 0 ? 0 : d) ? N(Aa, encodeURIComponent(a)) : N(Ba, encodeURIComponent(a))
    }
    function Ca(a) {
        return J(function(b) {
            switch (b.g) {
            case 1:
                return F(b, Da(a), 2);
            case 2:
                return F(b, Ea(a), 3);
            case 3:
                if (!(a.o > 0)) {
                    b.g = 4;
                    break
                }
                return F(b, ya(a.o), 4);
            case 4:
                return b.return(Fa(a))
            }
        })
    }
    function Da(a) {
        var b;
        return J(function(c) {
            b = document.createElement("iframe");
            b.style.display = "none";
            document.body.appendChild(b);
            if (!b.contentWindow)
                throw 3;
            a.h = b.contentWindow;
            return c.return(wa(a.i, a.h))
        })
    }
    function Ea(a) {
        return new q.Promise(function(b, c) {
            a.h.botguard && a.h.botguard.bg ? a.g = new a.h.botguard.bg(a.J, b) : c(5)
        })
    }
    P.prototype.snapshotSync = function() {
        var a = void 0;
        if (this.g && this.g.invoke && (this.g.invoke(function(b) {
            a = b
        }, !1), a))
            return a;
        throw 6;
    };
    function Fa(a) {
        return new q.Promise(function(b, c) {
            a.g && a.g.invoke ? a.g.invoke(function(d) {
                b(d)
            }, !0) : c(6)
        })
    }
    ;
    function Ga(a) {
        return a === void 0 || a === "0" ? !1 : !0
    }
    function Ha() {
        var a = window.GoogleGcLKhOms;
        if (a && a.length > 0 && (a = a.shift())) {
            a:
            {
                var b = a._ctx_;
                switch (b) {
                case "pt":
                case "cr":
                    break a;
                default:
                    b = ""
                }
            }a:
            {
                var c = a._st_;
                switch (c) {
                case "env":
                case "int":
                    break a;
                default:
                    c = "env"
                }
            }b = {
                context: b,
                C: a._bgv_,
                B: a._bgp_,
                I: a._li_,
                F: a._jk_,
                K: c,
                o: a._dl_,
                G: a._g2_,
                j: Ga(a._atqg_)
            };
            a._rc_ !== void 0 && (b = u(Object, "assign").call(Object, {}, b, {
                H: a._rc_
            }));
            a._wvp_ !== void 0 && (b = u(Object, "assign").call(Object, {}, b, {
                u: Ga(a._wvp_)
            }));
            return b
        }
    }
    function Ia() {
        var a = window;
        if (a.GoogleDX5YKUSk)
            return a.GoogleDX5YKUSk[0];
        var b = new q.Promise(function(c) {
            a.GoogleDX5YKUSk = [b, c]
        });
        return b
    }
    function Ja() {
        return window.GoogleGcLKhOms === void 0 ? 13 : 1
    }
    ;
    function T(a, b) {
        this.h = a;
        this.j = b
    }
    function Ka(a, b) {
        T.call(this, a, b);
        var c = this;
        this.g = !1;
        var d = new MessageChannel;
        this.port = d.port1;
        this.i = new q.Promise(function(f) {
            c.port.onmessage = function() {
                f()
            };
            var g = b ? "https://ep2.adtrafficquality.google" : "https://tpc.googlesyndication.com";
            c.h.postMessage("GoogleBasRYoCJlVEB", g.indexOf("https:") === -1 ? "http:" + g : g, [d.port2])
        })
    }
    A(Ka, T);
    function La(a, b) {
        return J(function(c) {
            return c.g == 1 ? F(c, a.i, 2) : c.return(new q.Promise(function(d, f) {
                var g = new MessageChannel;
                g.port1.onmessage = function(e) {
                    g.port1.close();
                    Array.isArray(e.data) ? d(e.data) : f(9)
                };
                a.port.postMessage(b, [g.port2])
            }))
        })
    }
    function Ma(a, b) {
        var c;
        return J(function(d) {
            if (d.g == 1)
                return d.m = 2, F(d, La(a, [1, b.X, b.J, b.o]), 4);
            if (d.g != 2)
                return c = d.h, d.return({
                    response: c[0],
                    error: c[1]
                });
            G(d);
            return d.return({
                error: 9
            })
        })
    }
    function Na() {
        T.apply(this, arguments);
        this.g = !0
    }
    A(Na, T); /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */




    function Oa(a, b) {
        Pa(a, b === void 0 ? null : b)
    }
    function Pa(a, b) {
        var c = window,
            d = !1;
        d = d === void 0 ? !1 : d;
        c.google_image_requests || (c.google_image_requests = []);
        var f = za(c.document);
        if (b) {
            var g = function(e) {
                b && b(e);
                typeof f.removeEventListener === "function" && f.removeEventListener("load", g, !1);
                typeof f.removeEventListener === "function" && f.removeEventListener("error", g, !1)
            };
            O(f, "load", g);
            O(f, "error", g)
        }
        d && (f.attributionSrc = "");
        f.src = a;
        c.google_image_requests.push(f)
    }
    ;
    function Qa(a) {
        this.url = (this.j = a) ? "https://ep1.adtrafficquality.google/pagead/gen_204?id=sodar2&v=237" : "https://pagead2.googlesyndication.com/pagead/gen_204?id=sodar2&v=237"
    }
    function U(a, b, c) {
        a.url += "&" + b + "=" + encodeURIComponent(c.toString())
    }
    function V(a, b, c) {
        var d = new Qa(b === void 0 ? !1 : b.j),
            f = b === void 0 || b.G !== "0";
        c !== !1 && f || (d.url = d.j ? "https://ep1.adtrafficquality.google/pagead/sodar?id=sodar2&v=237" : "https://pagead2.googlesyndication.com/pagead/sodar?id=sodar2&v=237");
        U(d, "t", a);
        b && (U(d, "li", b.I), U(d, b.context === "cr" ? "bgai" : "jk", b.F));
        return d
    }
    function Ra(a) {
        return new q.Promise(function(b) {
            Oa(a, function() {
                b()
            })
        })
    }
    function W(a, b, c, d) {
        b = V(1, b);
        U(b, "e", a);
        c && U(b, "ds", c);
        d !== void 0 && U(b, "lat", String(d));
        return Ra(b.url)
    }
    function Sa(a, b, c, d) {
        var f = V(2, a, b !== void 0);
        b !== void 0 ? U(f, "bg", b) : c !== void 0 && U(f, "wvpt", c);
        d !== void 0 && U(f, "lat", String(d));
        return f.url.length > 6E4 ? W(4, a) : Ra(f.url)
    }
    ;
    var X = {},
        Ta = (X["internal-error"] = -1, X["non-recoverable-error"] = -2, X["api-disabled-by-application"] = -3, X["invalid-argument"] = -4, X["token-provider-invalid"] = -5, X);
    function Ua() {
        this.u = !1
    }
    var Va;
    function Y() {
        Va || (Va = new Ua);
        return Va
    }
    function Wa(a) {
        var b;
        return J(function(c) {
            if (c.g == 1)
                return c.m = 2, F(c, window.android.webview.getExperimentalMediaIntegrityTokenProvider({
                    cloudProjectNumber: 187810013193
                }), 4);
            c.g != 2 ? (a.h = c.h, a.g = void 0, c.g = 0, c.m = 0) : (b = G(c), a.g = Xa(b), c.g = 0)
        })
    }
    function Ya(a, b) {
        var c,
            d;
        return J(function(f) {
            switch (f.g) {
            case 1:
                return Za() && a.u ? F(f, a.i, 2) : f.return();
            case 2:
                if (!a.h)
                    return a.g === void 0 && (a.g = 100), f.return();
                c = {};
                f.m = 3;
                return F(f, a.h.requestToken(b), 5);
            case 5:
                c.N = f.h;
                f.g = 4;
                f.m = 0;
                break;
            case 3:
                d = G(f),
                c.M = Xa(d);
            case 4:
                return f.return(c)
            }
        })
    }
    function Xa(a) {
        var b = 0;
        a.mediaIntegrityErrorName ? b || (b = Ta[a.mediaIntegrityErrorName]) : a.code && (b = a.code());
        return b
    }
    function Za() {
        return window.android && window.android.webview && window.android.webview.getExperimentalMediaIntegrityTokenProvider
    }
    ;
    function $a() {
        var a = this;
        this.promise = new q.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    }
    ;
    function Z(a) {
        this.config = a;
        this.o = 0;
        this.j = !1;
        this.o = Number(this.config.o) || 0;
        this.j = a.j
    }
    function ab(a) {
        return J(function(b) {
            if (b.g == 1) {
                if (bb(a))
                    throw 7;
                a.g = new P(a.config.C, a.config.B, a.o, a.j);
                return F(b, Da(a.g), 2)
            }
            return F(b, Ea(a.g), 0)
        })
    }
    Z.prototype.snapshotSync = function() {
        if (this.g)
            return this.g.snapshotSync()
    };
    function cb(a) {
        return J(function(b) {
            if (b.g == 1) {
                if (bb(a))
                    var c = db(a);
                else
                    a.g = new P(a.config.C, a.config.B, a.o, a.config.j),
                    c = Ca(a.g);
                return F(b, c, 2)
            }
            a.l = b.h;
            a.l ? b = F(b, Sa(a.config, a.l), 0) : (b.g = 0, b = void 0);
            return b
        })
    }
    function eb(a) {
        var b,
            c,
            d;
        return J(function(f) {
            switch (f.g) {
            case 1:
                if (!Y().u)
                    return f.return();
                b = Date.now();
                return F(f, Ya(Y(), a.config.F), 2);
            case 2:
                if (c = f.h) {
                    f.g = 3;
                    break
                }
                Y();
                if (Za() === void 0) {
                    f.g = 4;
                    break
                }
                return F(f, W(17, a.config, "ftpe=" + String(Y().g)), 4);
            case 4:
                return f.return();
            case 3:
                return d = Date.now() - b, c.N ? F(f, Sa(a.config, void 0, c.N, d), 0) : c.M ? F(f, W(16, a.config, "ftpe=" + String(Y().g) + ",ptb=" + String(c.M), d), 0) : F(f, W(18, a.config, "ftpe=" + String(Y().g), d), 0)
            }
        })
    }
    function fb(a, b) {
        function c(g) {
            g && g.data !== null && g.origin === "https://www.google.com" && g.source != null && g.source === b.contentWindow && (a.h = "id=sodar2&v=237", a.config && (a.h += "&li=" + encodeURIComponent(a.config.I.toString()), a.h += "&" + (a.config.context === "cr" ? "bgai" : "jk") + "=" + encodeURIComponent(a.config.F.toString()), g.source.postMessage(JSON.stringify({
                id: "sodar",
                params: a.h
            }), "https://www.google.com"), d.removeEventListener("message", c, !1)), f.resolve())
        }
        var d = window,
            f = new $a;
        d.addEventListener("message",
        c, !1);
        return f.promise
    }
    function gb(a) {
        var b,
            c,
            d,
            f;
        return J(function(g) {
            if (g.g == 1) {
                if (a.config.H !== "y")
                    return g.return();
                b = window.document.createElement("iframe");
                c = xa(ua, b);
                d = fb(a, b);
                return F(g, q.Promise.all([c, d]), 2)
            }
            f = g.h;
            if (f[0].contentWindow === null)
                throw 15;
            g.g = 0
        })
    }
    function hb(a) {
        return J(function(b) {
            return F(b, u(q.Promise, "allSettled").call(q.Promise, [cb(a), gb(a), eb(a)]), 0)
        })
    }
    function bb(a) {
        return window.location.host === (a.j ? "ep2.adtrafficquality.google" : "tpc.googlesyndication.com") || a.config.K === "int" ? !1 : !0
    }
    function db(a) {
        var b,
            c,
            d;
        return J(function(f) {
            if (f.g == 1)
                return b = M((a.j ? "https://ep2.adtrafficquality.google/sodar/" : "https://tpc.googlesyndication.com/sodar/") + "sodar2/237/runner.html"), F(f, xa(b), 2);
            if (f.g != 4) {
                c = f.h;
                if (!c.contentWindow)
                    throw 3;
                var g = c.contentWindow;
                var e = a.j;
                g = window.hasOwnProperty("MessageChannel") ? new Ka(g, e) : new Na(g, e);
                a.i = g;
                return a.i.g ? (g = a.config, e = g.j ? "https://ep2.adtrafficquality.google" : "https://tpc.googlesyndication.com", e = e.indexOf("https:") === -1 ? "http:" + e : e, a.i.h.postMessage(JSON.stringify([g.context,
                g.C, g.B, g.I, g.F, g.K, g.H === void 0 ? "n" : g.H, g.o === void 0 ? "0" : g.o, g.G === void 0 ? "1" : g.G, g.j === void 0 ? "0" : g.j ? "1" : "0"]), e), f.return(void 0)) : F(f, Ma(a.i, {
                    X: a.config.C,
                    J: a.config.B,
                    o: a.o,
                    j: a.config.j
                }), 4)
            }
            d = f.h;
            c.parentNode && c.parentNode.removeChild(c);
            if (d.error)
                throw d.error;
            return f.return(d.response)
        })
    }
    ;
    function ib() {
        Z.apply(this, arguments)
    }
    A(ib, Z);
    ib.prototype.init = function() {
        var a = this,
            b;
        return J(function(c) {
            if (c.g == 1) {
                if (a.config.K === "env")
                    return F(c, hb(a), 0);
                b = window;
                return b.GoogleA13IjpGc ? c.return() : F(c, ab(a), 4)
            }
            b.GoogleA13IjpGc = a;
            c.g = 0
        })
    };
    function jb() {
        Z.apply(this, arguments)
    }
    A(jb, Z);
    jb.prototype.init = function() {
        var a = this;
        return J(function(b) {
            return F(b, hb(a), 0)
        })
    };
    function kb(a, b) {
        if (typeof a === "number")
            b = W(a, b);
        else {
            var c = V(3, b);
            U(c, "c", "init");
            var d = a.toString();
            a.name && d.indexOf(a.name) == -1 && (d += ": " + a.name);
            a.message && d.indexOf(a.message) == -1 && (d += ": " + a.message);
            if (a.stack)
                a:
                {
                    a = a.stack;
                    var f = d;
                    try {
                        a.indexOf(f) == -1 && (a = f + "\n" + a);
                        for (var g; a != g;)
                            g = a,
                            a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                        d = a.replace(RegExp("\n *", "g"), "\n");
                        break a
                    } catch (e) {
                        d = f;
                        break a
                    }
                    d = void 0
                }U(c, "ex", d);
            b = c.url.length > 6E4 ? W(11, b) : Ra(c.url)
        }
        return b
    }
    function lb(a) {
        if (a.u === !0) {
            Y().u = !0;
            var b = Y();
            Za() && b.u && (b.i = Wa(b))
        }
        switch (a.context) {
        case "pt":
            a = new jb(a);
            break;
        case "cr":
            a = new ib(a);
            break;
        default:
            throw 2;
        }
        if (!window.postMessage && bb(a))
            throw 8;
        return a.init()
    }
    ;
    (function() {
        var a = Ha();
        try {
            return a ? lb(a) : q.Promise.race([Ia(), new q.Promise(function(b, c) {
                setTimeout(function() {
                    c(Ja())
                }, 5E3)
            })]).then(function() {
                a = Ha();
                if (!a)
                    throw Ja();
                return lb(a)
            }, function(b) {
                return kb(b, a)
            })
        } catch (b) {
            return kb(b, a)
        }
    })();
}).call(this);
