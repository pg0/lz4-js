/*! lz4.js v0.3.3 Released under the MIT license. https://github.com/ukyo/lz4.js/LICENSE */
var lz4 = {};
(function () {
    var c;
    c || (c = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
    var l = {}, n;
    for (n in c) c.hasOwnProperty(n) && (l[n] = c[n]);
    var q = "object" === typeof window, v = "function" === typeof importScripts,
        w = "object" === typeof process && "function" === typeof require && !q && !v, aa = !q && !w && !v;
    if (w) {
        c.print || (c.print = function (a) {
            process.stdout.write(a + "\n")
        });
        c.printErr || (c.printErr = function (a) {
            process.stderr.write(a + "\n")
        });
        var ba = require("fs"), ca = require("path");
        c.read = function (a, b) {
            a = ca.normalize(a);
            var d = ba.readFileSync(a);
            d || a == ca.resolve(a) || (a = path.join(__dirname, "..", "src", a), d = ba.readFileSync(a));
            d && !b && (d = d.toString());
            return d
        };
        c.readBinary = function (a) {
            a = c.read(a, !0);
            a.buffer || (a = new Uint8Array(a));
            assert(a.buffer);
            return a
        };
        c.load = function (a) {
            da(read(a))
        };
        c.thisProgram || (c.thisProgram =
            1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program");
        c.arguments = process.argv.slice(2);
        "undefined" !== typeof module && (module.exports = c);
        process.on("uncaughtException", function (a) {
            if (!(a instanceof x)) throw a;
        });
        c.inspect = function () {
            return "[Emscripten Module object]"
        }
    } else if (aa) c.print || (c.print = print), "undefined" != typeof printErr && (c.printErr = printErr), c.read = "undefined" != typeof read ? read : function () {
        throw"no read() available (jsc?)";
    }, c.readBinary = function (a) {
        if ("function" ===
            typeof readbuffer) return new Uint8Array(readbuffer(a));
        a = read(a, "binary");
        assert("object" === typeof a);
        return a
    }, "undefined" != typeof scriptArgs ? c.arguments = scriptArgs : "undefined" != typeof arguments && (c.arguments = arguments), eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); else if (q || v) c.read = function (a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    }, "undefined" != typeof arguments && (c.arguments = arguments), "undefined" !==
    typeof console ? (c.print || (c.print = function (a) {
        console.log(a)
    }), c.printErr || (c.printErr = function (a) {
        console.log(a)
    })) : c.print || (c.print = function () {
    }), v && (c.load = importScripts), "undefined" === typeof c.setWindowTitle && (c.setWindowTitle = function (a) {
        document.title = a
    }); else throw"Unknown runtime environment. Where are we?";

    function da(a) {
        eval.call(null, a)
    }

    !c.load && c.read && (c.load = function (a) {
        da(c.read(a))
    });
    c.print || (c.print = function () {
    });
    c.printErr || (c.printErr = c.print);
    c.arguments || (c.arguments = []);
    c.thisProgram || (c.thisProgram = "./this.program");
    c.print = c.print;
    c.K = c.printErr;
    c.preRun = [];
    c.postRun = [];
    for (n in l) l.hasOwnProperty(n) && (c[n] = l[n]);
    var z = {
        ja: function (a) {
            ea = a
        }, ha: function () {
            return ea
        }, T: function () {
            return y
        }, S: function (a) {
            y = a
        }, Q: function (a) {
            switch (a) {
                case "i1":
                case "i8":
                    return 1;
                case "i16":
                    return 2;
                case "i32":
                    return 4;
                case "i64":
                    return 8;
                case "float":
                    return 4;
                case "double":
                    return 8;
                default:
                    return "*" === a[a.length - 1] ? z.F : "i" === a[0] ? (a = parseInt(a.substr(1)), assert(0 === a % 8), a / 8) : 0
            }
        }, ga: function (a) {
            return Math.max(z.Q(a), z.F)
        }, la: 16, xa: function (a, b) {
            "double" === b || "i64" === b ? a & 7 && (assert(4 === (a & 7)), a += 4) : assert(0 === (a & 3));
            return a
        },
        ra: function (a, b, d) {
            return d || "i64" != a && "double" != a ? a ? Math.min(b || (a ? z.ga(a) : 0), z.F) : Math.min(b, 8) : 8
        }, I: function (a, b, d) {
            return d && d.length ? (d.splice || (d = Array.prototype.slice.call(d)), d.splice(0, 0, b), c["dynCall_" + a].apply(null, d)) : c["dynCall_" + a].call(null, b)
        }, C: [], V: function (a) {
            for (var b = 0; b < z.C.length; b++) if (!z.C[b]) return z.C[b] = a, 2 * (1 + b);
            throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
        }, ia: function (a) {
            z.C[(a - 2) / 2] = null
        }, r: function (a) {
            z.r.L ||
            (z.r.L = {});
            z.r.L[a] || (z.r.L[a] = 1, c.K(a))
        }, J: {}, ta: function (a, b) {
            assert(b);
            z.J[b] || (z.J[b] = {});
            var d = z.J[b];
            d[a] || (d[a] = function () {
                return z.I(b, a, arguments)
            });
            return d[a]
        }, sa: function () {
            throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
        }, D: function (a) {
            var b = y;
            y = y + a | 0;
            y = y + 15 & -16;
            return b
        }, ka: function (a) {
            var b = A;
            A = A + a | 0;
            A = A + 15 & -16;
            return b
        }, B: function (a) {
            var b = C;
            C = C + a | 0;
            C = C + 15 & -16;
            if (a = C >= D) E("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
                D + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "), a = !0;
            return a ? (C = b, 0) : b
        }, G: function (a, b) {
            return Math.ceil(a / (b ? b : 16)) * (b ? b : 16)
        }, wa: function (a, b, d) {
            return d ? +(a >>> 0) + 4294967296 * +(b >>> 0) : +(a >>> 0) + 4294967296 * +(b | 0)
        }, U: 8, F: 4, ma: 0
    };
    z.addFunction = z.V;
    z.removeFunction = z.ia;
    var F = !1, G, H, ea;

    function assert(a, b) {
        a || E("Assertion failed: " + b)
    }

    (function () {
        var a = {
            stackSave: function () {
                z.T()
            }, stackRestore: function () {
                z.S()
            }, arrayToC: function (a) {
                for (var b = z.D(a.length), d = b, h = 0; h < a.length; h++) I[d++ >> 0] = a[h];
                return b
            }, stringToC: function (a) {
                var b = 0;
                null !== a && void 0 !== a && 0 !== a && (b = z.D((a.length << 2) + 1), fa(a, b));
                return b
            }
        }, b = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/, d;
        for (d in a) a.hasOwnProperty(d) && a[d].toString().match(b).slice(1)
    })();

    function ga(a) {
        var b;
        b = "i32";
        "*" === b.charAt(b.length - 1) && (b = "i32");
        switch (b) {
            case "i1":
                return I[a >> 0];
            case "i8":
                return I[a >> 0];
            case "i16":
                return J[a >> 1];
            case "i32":
                return K[a >> 2];
            case "i64":
                return K[a >> 2];
            case "float":
                return L[a >> 2];
            case "double":
                return M[a >> 3];
            default:
                E("invalid type for setValue: " + b)
        }
        return null
    }

    function N(a, b, d, e) {
        var g, k;
        "number" === typeof a ? (g = !0, k = a) : (g = !1, k = a.length);
        var h = "string" === typeof b ? b : null;
        d = 4 == d ? e : [O, z.D, z.ka, z.B][void 0 === d ? 2 : d](Math.max(k, h ? 1 : b.length));
        if (g) {
            e = d;
            assert(0 == (d & 3));
            for (a = d + (k & -4); e < a; e += 4) K[e >> 2] = 0;
            for (a = d + k; e < a;) I[e++ >> 0] = 0;
            return d
        }
        if ("i8" === h) return a.subarray || a.slice ? P.set(a, d) : P.set(new Uint8Array(a), d), d;
        e = 0;
        for (var f, u; e < k;) {
            var m = a[e];
            "function" === typeof m && (m = z.ua(m));
            g = h || b[e];
            if (0 === g) e++; else {
                "i64" == g && (g = "i32");
                var p = d + e, t = g, t = t || "i8";
                "*" === t.charAt(t.length -
                    1) && (t = "i32");
                switch (t) {
                    case "i1":
                        I[p >> 0] = m;
                        break;
                    case "i8":
                        I[p >> 0] = m;
                        break;
                    case "i16":
                        J[p >> 1] = m;
                        break;
                    case "i32":
                        K[p >> 2] = m;
                        break;
                    case "i64":
                        H = [m >>> 0, (G = m, 1 <= +ha(G) ? 0 < G ? (ja(+ka(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+la((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                        K[p >> 2] = H[0];
                        K[p + 4 >> 2] = H[1];
                        break;
                    case "float":
                        L[p >> 2] = m;
                        break;
                    case "double":
                        M[p >> 3] = m;
                        break;
                    default:
                        E("invalid type for setValue: " + t)
                }
                u !== g && (f = z.Q(g), u = g);
                e += f
            }
        }
        return d
    }

    function ma(a) {
        var b;
        if (0 === b || !a) return "";
        for (var d = 0, e, g = 0; ;) {
            e = P[a + g >> 0];
            d |= e;
            if (0 == e && !b) break;
            g++;
            if (b && g == b) break
        }
        b || (b = g);
        e = "";
        if (128 > d) {
            for (; 0 < b;) d = String.fromCharCode.apply(String, P.subarray(a, a + Math.min(b, 1024))), e = e ? e + d : d, a += 1024, b -= 1024;
            return e
        }
        return c.UTF8ToString(a)
    }

    function na(a) {
        function b(d, e, g) {
            e = e || Infinity;
            var t = "", k = [], h;
            if ("N" === a[f]) {
                f++;
                "K" === a[f] && f++;
                for (h = []; "E" !== a[f];) if ("S" === a[f]) {
                    f++;
                    var r = a.indexOf("_", f);
                    h.push(m[a.substring(f, r) || 0] || "?");
                    f = r + 1
                } else if ("C" === a[f]) h.push(h[h.length - 1]), f += 2; else {
                    var r = parseInt(a.substr(f)), B = r.toString().length;
                    if (!r || !B) {
                        f--;
                        break
                    }
                    var ia = a.substr(f + B, r);
                    h.push(ia);
                    m.push(ia);
                    f += B + r
                }
                f++;
                h = h.join("::");
                e--;
                if (0 === e) return d ? [h] : h
            } else if (("K" === a[f] || p && "L" === a[f]) && f++, r = parseInt(a.substr(f))) B = r.toString().length,
                h = a.substr(f + B, r), f += B + r;
            p = !1;
            "I" === a[f] ? (f++, r = b(!0), B = b(!0, 1, !0), t += B[0] + " " + h + "<" + r.join(", ") + ">") : t = h;
            a:for (; f < a.length && 0 < e--;) if (h = a[f++], h in u) k.push(u[h]); else switch (h) {
                case "P":
                    k.push(b(!0, 1, !0)[0] + "*");
                    break;
                case "R":
                    k.push(b(!0, 1, !0)[0] + "&");
                    break;
                case "L":
                    f++;
                    r = a.indexOf("E", f) - f;
                    k.push(a.substr(f, r));
                    f += r + 2;
                    break;
                case "A":
                    r = parseInt(a.substr(f));
                    f += r.toString().length;
                    if ("_" !== a[f]) throw"?";
                    f++;
                    k.push(b(!0, 1, !0)[0] + " [" + r + "]");
                    break;
                case "E":
                    break a;
                default:
                    t += "?" + h;
                    break a
            }
            g || 1 !==
            k.length || "void" !== k[0] || (k = []);
            return d ? (t && k.push(t + "?"), k) : t + ("(" + k.join(", ") + ")")
        }

        var d = !!c.___cxa_demangle;
        if (d) try {
            var e = O(a.length);
            fa(a.substr(1), e);
            var g = O(4), k = c.___cxa_demangle(e, 0, 0, g);
            if (0 === ga(g) && k) return ma(k)
        } catch (h) {
        } finally {
            e && Q(e), g && Q(g), k && Q(k)
        }
        var f = 3, u = {
                v: "void",
                b: "bool",
                c: "char",
                s: "short",
                i: "int",
                l: "long",
                f: "float",
                d: "double",
                w: "wchar_t",
                a: "signed char",
                h: "unsigned char",
                t: "unsigned short",
                j: "unsigned int",
                m: "unsigned long",
                x: "long long",
                y: "unsigned long long",
                z: "..."
            },
            m = [], p = !0, e = a;
        try {
            if ("Object._main" == a || "_main" == a) return "main()";
            "number" === typeof a && (a = ma(a));
            if ("_" !== a[0] || "_" !== a[1] || "Z" !== a[2]) return a;
            switch (a[3]) {
                case "n":
                    return "operator new()";
                case "d":
                    return "operator delete()"
            }
            e = b()
        } catch (t) {
            e += "?"
        }
        0 <= e.indexOf("?") && !d && z.r("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
        return e
    }

    function oa() {
        return pa().replace(/__Z[\w\d_]+/g, function (a) {
            var b = na(a);
            return a === b ? a : a + " [" + b + "]"
        })
    }

    function pa() {
        var a = Error();
        if (!a.stack) {
            try {
                throw Error(0);
            } catch (b) {
                a = b
            }
            if (!a.stack) return "(no stack trace available)"
        }
        return a.stack.toString()
    }

    function qa() {
        var a = C;
        0 < a % 4096 && (a += 4096 - a % 4096);
        return a
    }

    for (var I, P, J, ra, K, sa, L, M, ta = 0, A = 0, ua = 0, y = 0, R = 0, va = 0, C = 0, wa = c.TOTAL_STACK || 5242880, D = c.TOTAL_MEMORY || 33554432, S = 65536; S < D || S < 2 * wa;) S = 16777216 > S ? 2 * S : S + 16777216;
    S !== D && (D = S);
    assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "JS engine does not provide full typed array support");
    var buffer;
    buffer = new ArrayBuffer(D);
    I = new Int8Array(buffer);
    J = new Int16Array(buffer);
    K = new Int32Array(buffer);
    P = new Uint8Array(buffer);
    ra = new Uint16Array(buffer);
    sa = new Uint32Array(buffer);
    L = new Float32Array(buffer);
    M = new Float64Array(buffer);
    K[0] = 255;
    assert(255 === P[0] && 0 === P[3], "Typed arrays 2 must be run on a little-endian system");
    c.HEAP = void 0;
    c.buffer = buffer;
    c.HEAP8 = I;
    c.HEAP16 = J;
    c.HEAP32 = K;
    c.HEAPU8 = P;
    c.HEAPU16 = ra;
    c.HEAPU32 = sa;
    c.HEAPF32 = L;
    c.HEAPF64 = M;

    function T(a) {
        for (; 0 < a.length;) {
            var b = a.shift();
            if ("function" == typeof b) b(); else {
                var d = b.qa;
                "number" === typeof d ? void 0 === b.H ? z.I("v", d) : z.I("vi", d, [b.H]) : d(void 0 === b.H ? null : b.H)
            }
        }
    }

    var U = [], V = [], xa = [], ya = [], za = [], W = !1;

    function Aa() {
        var a = c.preRun.shift();
        U.unshift(a)
    }

    function Ba(a, b) {
        for (var d = 0, e = 0; e < a.length; ++e) {
            var g = a.charCodeAt(e);
            55296 <= g && 57343 >= g && (g = 65536 + ((g & 1023) << 10) | a.charCodeAt(++e) & 1023);
            127 >= g ? ++d : d = 2047 >= g ? d + 2 : 65535 >= g ? d + 3 : 2097151 >= g ? d + 4 : 67108863 >= g ? d + 5 : d + 6
        }
        d = Array(d + 1);
        var k = d.length, e = 0;
        if (0 < k) {
            for (var g = e, k = e + k - 1, h = 0; h < a.length; ++h) {
                var f = a.charCodeAt(h);
                55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++h) & 1023);
                if (127 >= f) {
                    if (e >= k) break;
                    d[e++] = f
                } else {
                    if (2047 >= f) {
                        if (e + 1 >= k) break;
                        d[e++] = 192 | f >> 6
                    } else {
                        if (65535 >= f) {
                            if (e + 2 >= k) break;
                            d[e++] =
                                224 | f >> 12
                        } else {
                            if (2097151 >= f) {
                                if (e + 3 >= k) break;
                                d[e++] = 240 | f >> 18
                            } else {
                                if (67108863 >= f) {
                                    if (e + 4 >= k) break;
                                    d[e++] = 248 | f >> 24
                                } else {
                                    if (e + 5 >= k) break;
                                    d[e++] = 252 | f >> 30;
                                    d[e++] = 128 | f >> 24 & 63
                                }
                                d[e++] = 128 | f >> 18 & 63
                            }
                            d[e++] = 128 | f >> 12 & 63
                        }
                        d[e++] = 128 | f >> 6 & 63
                    }
                    d[e++] = 128 | f & 63
                }
            }
            d[e] = 0;
            e = e - g
        } else e = 0;
        b && (d.length = e);
        return d
    }

    function fa(a, b) {
        for (var d = Ba(a, void 0), e = 0; e < d.length;) I[b + e >> 0] = d[e], e += 1
    }

    Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (a, b) {
        var d = a & 65535, e = b & 65535;
        return d * e + ((a >>> 16) * e + d * (b >>> 16) << 16) | 0
    });
    Math.va = Math.imul;
    Math.clz32 || (Math.clz32 = function (a) {
        a = a >>> 0;
        for (var b = 0; 32 > b; b++) if (a & 1 << 31 - b) return b;
        return 32
    });
    Math.oa = Math.clz32;
    var ha = Math.abs, la = Math.ceil, ka = Math.floor, ja = Math.min;
    c.preloadedImages = {};
    c.preloadedAudios = {};
    var Ca = [function (a, b) {
        a:for (var d = b, e = P, g, k, h, f, u, m, p = ""; ;) {
            g = e[d++];
            if (!g) break a;
            g & 128 ? (k = e[d++] & 63, 192 == (g & 224) ? p += String.fromCharCode((g & 31) << 6 | k) : (h = e[d++] & 63, 224 == (g & 240) ? g = (g & 15) << 12 | k << 6 | h : (f = e[d++] & 63, 240 == (g & 248) ? g = (g & 7) << 18 | k << 12 | h << 6 | f : (u = e[d++] & 63, 248 == (g & 252) ? g = (g & 3) << 24 | k << 18 | h << 12 | f << 6 | u : (m = e[d++] & 63, g = (g & 1) << 30 | k << 24 | h << 18 | f << 12 | u << 6 | m))), 65536 > g ? p += String.fromCharCode(g) : (g -= 65536, p += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)))) : p += String.fromCharCode(g)
        }
        X[a].n = Error(p)
    }, function (a,
                 b, d) {
        X[a].A(b, d)
    }, function (a, b, d) {
        return X[a].u(b, d)
    }], ta = 8, A = ta + 1296;
    V.push();
    N([0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 3, 0, 0, 47, 3, 0, 0, 61, 3, 0, 0, 88, 3, 0, 0, 112, 3, 0, 0, 146, 3, 0, 0, 177, 3, 0, 0, 203, 3, 0, 0, 235, 3, 0, 0, 2, 4, 0, 0, 26, 4, 0, 0, 49, 4, 0, 0, 75, 4, 0, 0, 104, 4, 0, 0, 128, 4, 0, 0, 150, 4, 0, 0, 169, 4, 0, 0, 195, 4, 0, 0, 224, 4, 0, 0, 254, 4, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 16, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 114, 101, 116, 117, 114, 110,
        32, 76, 90, 52, 74, 83, 95, 114, 101, 97, 100, 40, 36, 48, 44, 32, 36, 49, 44, 32, 36, 50, 41, 125, 0, 123, 76, 90, 52, 74, 83, 95, 119, 114, 105, 116, 101, 40, 36, 48, 44, 32, 36, 49, 44, 32, 36, 50, 41, 125, 0, 123, 76, 90, 52, 74, 83, 95, 101, 114, 114, 111, 114, 40, 36, 48, 44, 32, 36, 49, 41, 125, 0, 79, 75, 95, 78, 111, 69, 114, 114, 111, 114, 0, 69, 82, 82, 79, 82, 95, 71, 69, 78, 69, 82, 73, 67, 0, 69, 82, 82, 79, 82, 95, 109, 97, 120, 66, 108, 111, 99, 107, 83, 105, 122, 101, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79, 82, 95, 98, 108, 111, 99, 107, 77, 111, 100, 101, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79,
        82, 95, 99, 111, 110, 116, 101, 110, 116, 67, 104, 101, 99, 107, 115, 117, 109, 70, 108, 97, 103, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79, 82, 95, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 76, 101, 118, 101, 108, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79, 82, 95, 104, 101, 97, 100, 101, 114, 86, 101, 114, 115, 105, 111, 110, 95, 119, 114, 111, 110, 103, 0, 69, 82, 82, 79, 82, 95, 98, 108, 111, 99, 107, 67, 104, 101, 99, 107, 115, 117, 109, 95, 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 69, 82, 82, 79, 82, 95, 114, 101, 115, 101, 114, 118, 101, 100, 70, 108, 97, 103, 95, 115, 101,
        116, 0, 69, 82, 82, 79, 82, 95, 97, 108, 108, 111, 99, 97, 116, 105, 111, 110, 95, 102, 97, 105, 108, 101, 100, 0, 69, 82, 82, 79, 82, 95, 115, 114, 99, 83, 105, 122, 101, 95, 116, 111, 111, 76, 97, 114, 103, 101, 0, 69, 82, 82, 79, 82, 95, 100, 115, 116, 77, 97, 120, 83, 105, 122, 101, 95, 116, 111, 111, 83, 109, 97, 108, 108, 0, 69, 82, 82, 79, 82, 95, 102, 114, 97, 109, 101, 72, 101, 97, 100, 101, 114, 95, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 0, 69, 82, 82, 79, 82, 95, 102, 114, 97, 109, 101, 84, 121, 112, 101, 95, 117, 110, 107, 110, 111, 119, 110, 0, 69, 82, 82, 79, 82, 95, 102, 114, 97, 109, 101, 83, 105, 122, 101, 95,
        119, 114, 111, 110, 103, 0, 69, 82, 82, 79, 82, 95, 115, 114, 99, 80, 116, 114, 95, 119, 114, 111, 110, 103, 0, 69, 82, 82, 79, 82, 95, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 70, 97, 105, 108, 101, 100, 0, 69, 82, 82, 79, 82, 95, 104, 101, 97, 100, 101, 114, 67, 104, 101, 99, 107, 115, 117, 109, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79, 82, 95, 99, 111, 110, 116, 101, 110, 116, 67, 104, 101, 99, 107, 115, 117, 109, 95, 105, 110, 118, 97, 108, 105, 100, 0, 69, 82, 82, 79, 82, 95, 109, 97, 120, 67, 111, 100, 101, 0], "i8", 4, z.U);
    var Da = z.G(N(12, "i8", 2), 8);
    assert(0 == Da % 8);
    c._i64Subtract = Ea;
    c._i64Add = Fa;
    c._memset = Ga;
    c._bitshift64Lshr = Ha;
    c._bitshift64Shl = Ia;
    c._memcpy = Ja;

    function Ka(a) {
        c.___errno_location && (K[c.___errno_location() >> 2] = a);
        return a
    }

    function Y(a) {
        Y.fa || (C = qa(), Y.fa = !0, assert(z.B), Y.ea = z.B, z.B = function () {
            E("cannot dynamically allocate, sbrk now has control")
        });
        var b = C;
        return 0 == a || Y.ea(a) ? b : 4294967295
    }

    c._memmove = La;
    var Ma = N([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0,
        1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 2);
    c._llvm_cttz_i32 = Na;
    ua = y = z.G(A);
    R = ua + wa;
    va = C = z.G(R);
    assert(va < D, "TOTAL_MEMORY not big enough for stack");
    c.W = {
        Math: Math,
        Int8Array: Int8Array,
        Int16Array: Int16Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array,
        NaN: NaN,
        Infinity: Infinity
    };
    c.X = {
        abort: E, assert: assert, invoke_iiiiiii: function (a, b, d, e, g, k, h) {
            try {
                return c.dynCall_iiiiiii(a, b, d, e, g, k, h)
            } catch (f) {
                if ("number" !== typeof f && "longjmp" !== f) throw f;
                Z.setThrew(1, 0)
            }
        }, _sysconf: function (a) {
            switch (a) {
                case 30:
                    return 4096;
                case 85:
                    return S / 4096;
                case 132:
                case 133:
                case 12:
                case 137:
                case 138:
                case 15:
                case 235:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 149:
                case 13:
                case 10:
                case 236:
                case 153:
                case 9:
                case 21:
                case 22:
                case 159:
                case 154:
                case 14:
                case 77:
                case 78:
                case 139:
                case 80:
                case 81:
                case 82:
                case 68:
                case 67:
                case 164:
                case 11:
                case 29:
                case 47:
                case 48:
                case 95:
                case 52:
                case 51:
                case 46:
                    return 200809;
                case 79:
                    return 0;
                case 27:
                case 246:
                case 127:
                case 128:
                case 23:
                case 24:
                case 160:
                case 161:
                case 181:
                case 182:
                case 242:
                case 183:
                case 184:
                case 243:
                case 244:
                case 245:
                case 165:
                case 178:
                case 179:
                case 49:
                case 50:
                case 168:
                case 169:
                case 175:
                case 170:
                case 171:
                case 172:
                case 97:
                case 76:
                case 32:
                case 173:
                case 35:
                    return -1;
                case 176:
                case 177:
                case 7:
                case 155:
                case 8:
                case 157:
                case 125:
                case 126:
                case 92:
                case 93:
                case 129:
                case 130:
                case 131:
                case 94:
                case 91:
                    return 1;
                case 74:
                case 60:
                case 69:
                case 70:
                case 4:
                    return 1024;
                case 31:
                case 42:
                case 72:
                    return 32;
                case 87:
                case 26:
                case 33:
                    return 2147483647;
                case 34:
                case 1:
                    return 47839;
                case 38:
                case 36:
                    return 99;
                case 43:
                case 37:
                    return 2048;
                case 0:
                    return 2097152;
                case 3:
                    return 65536;
                case 28:
                    return 32768;
                case 44:
                    return 32767;
                case 75:
                    return 16384;
                case 39:
                    return 1E3;
                case 89:
                    return 700;
                case 71:
                    return 256;
                case 40:
                    return 255;
                case 2:
                    return 100;
                case 180:
                    return 64;
                case 25:
                    return 20;
                case 5:
                    return 16;
                case 6:
                    return 6;
                case 73:
                    return 4;
                case 84:
                    return "object" === typeof navigator ? navigator.hardwareConcurrency || 1 : 1
            }
            Ka(22);
            return -1
        },
        _pthread_self: function () {
            return 0
        }, _abort: function () {
            c.abort()
        }, ___setErrNo: Ka, _sbrk: Y, _time: function (a) {
            var b = Date.now() / 1E3 | 0;
            a && (K[a >> 2] = b);
            return b
        }, _emscripten_memcpy_big: function (a, b, d) {
            P.set(P.subarray(b, b + d), a);
            return a
        }, _emscripten_asm_const_3: function (a, b, d, e) {
            return Ca[a](b, d, e)
        }, _emscripten_asm_const_2: function (a, b, d) {
            return Ca[a](b, d)
        }, STACKTOP: y, STACK_MAX: R, tempDoublePtr: Da, ABORT: F, cttz_i8: Ma
    };// EMSCRIPTEN_START_ASM

    var Z = (function (global, env, buffer) {
        "use asm";
        var a = new global.Int8Array(buffer);
        var b = new global.Int16Array(buffer);
        var c = new global.Int32Array(buffer);
        var d = new global.Uint8Array(buffer);
        var e = new global.Uint16Array(buffer);
        var f = new global.Uint32Array(buffer);
        var g = new global.Float32Array(buffer);
        var h = new global.Float64Array(buffer);
        var i = env.STACKTOP | 0;
        var j = env.STACK_MAX | 0;
        var k = env.tempDoublePtr | 0;
        var l = env.ABORT | 0;
        var m = env.cttz_i8 | 0;
        var n = 0;
        var o = 0;
        var p = 0;
        var q = 0;
        var r = global.NaN, s = global.Infinity;
        var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
        var C = 0;
        var D = 0;
        var E = 0;
        var F = 0;
        var G = 0;
        var H = 0;
        var I = 0;
        var J = 0;
        var K = 0;
        var L = 0;
        var M = global.Math.floor;
        var N = global.Math.abs;
        var O = global.Math.sqrt;
        var P = global.Math.pow;
        var Q = global.Math.cos;
        var R = global.Math.sin;
        var S = global.Math.tan;
        var T = global.Math.acos;
        var U = global.Math.asin;
        var V = global.Math.atan;
        var W = global.Math.atan2;
        var X = global.Math.exp;
        var Y = global.Math.log;
        var Z = global.Math.ceil;
        var _ = global.Math.imul;
        var $ = global.Math.min;
        var aa = global.Math.clz32;
        var ba = env.abort;
        var ca = env.assert;
        var da = env.invoke_iiiiiii;
        var ea = env._sysconf;
        var fa = env._pthread_self;
        var ga = env._abort;
        var ha = env.___setErrNo;
        var ia = env._sbrk;
        var ja = env._time;
        var ka = env._emscripten_memcpy_big;
        var la = env._emscripten_asm_const_3;
        var ma = env._emscripten_asm_const_2;
        var na = 0.0;

// EMSCRIPTEN_START_FUNCS
        function pa(a) {
            a = a | 0;
            var b = 0;
            b = i;
            i = i + a | 0;
            i = i + 15 & -16;
            return b | 0
        }

        function qa() {
            return i | 0
        }

        function ra(a) {
            a = a | 0;
            i = a
        }

        function sa(a, b) {
            a = a | 0;
            b = b | 0;
            i = a;
            j = b
        }

        function ta(a, b) {
            a = a | 0;
            b = b | 0;
            if (!n) {
                n = a;
                o = b
            }
        }

        function ua(b) {
            b = b | 0;
            a[k >> 0] = a[b >> 0];
            a[k + 1 >> 0] = a[b + 1 >> 0];
            a[k + 2 >> 0] = a[b + 2 >> 0];
            a[k + 3 >> 0] = a[b + 3 >> 0]
        }

        function va(b) {
            b = b | 0;
            a[k >> 0] = a[b >> 0];
            a[k + 1 >> 0] = a[b + 1 >> 0];
            a[k + 2 >> 0] = a[b + 2 >> 0];
            a[k + 3 >> 0] = a[b + 3 >> 0];
            a[k + 4 >> 0] = a[b + 4 >> 0];
            a[k + 5 >> 0] = a[b + 5 >> 0];
            a[k + 6 >> 0] = a[b + 6 >> 0];
            a[k + 7 >> 0] = a[b + 7 >> 0]
        }

        function wa(a) {
            a = a | 0;
            C = a
        }

        function xa() {
            return C | 0
        }

        function ya() {
            c[3] = _a(8192) | 0;
            c[4] = _a(8192) | 0;
            return
        }

        function za(a, b, d, e) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            var f = 0, g = 0;
            g = _a(64) | 0;
            f = _a(152) | 0;
            if (!f) {
                $a(g);
                g = 0;
                return g | 0
            }
            if (c[f + -4 >> 2] & 3) db(f | 0, 0, 152) | 0;
            c[f + 56 >> 2] = 100;
            c[f + 60 >> 2] = 0;
            c[g + 4 >> 2] = f;
            f = g + 8 | 0;
            c[f >> 2] = a;
            c[g + 12 >> 2] = b;
            c[g + 16 >> 2] = d;
            d = g + 20 | 0;
            c[d >> 2] = 0;
            c[d + 4 >> 2] = 0;
            c[d + 8 >> 2] = 0;
            c[d + 12 >> 2] = 0;
            c[d + 16 >> 2] = 0;
            c[g + 40 >> 2] = e;
            d = g + 44 | 0;
            c[d >> 2] = 0;
            c[d + 4 >> 2] = 0;
            c[d + 8 >> 2] = 0;
            c[d + 12 >> 2] = 0;
            c[d + 16 >> 2] = 0;
            f = Ha(8192, f) | 0;
            if (f >>> 0 <= (c[2] | 0) >>> 0) return g | 0;
            $a(c[4] | 0);
            c[2] = f;
            c[4] = _a(f) | 0;
            return g | 0
        }

        function Aa(a) {
            a = a | 0;
            var b = 0;
            b = c[a + 4 >> 2] | 0;
            if (!b) {
                $a(a);
                return
            }
            $a(c[b + 144 >> 2] | 0);
            $a(c[b + 72 >> 2] | 0);
            $a(b);
            $a(a);
            return
        }

        function Ba(b) {
            b = b | 0;
            var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
            k = c[b + 4 >> 2] | 0;
            l = c[4] | 0;
            d = b + 8 | 0;
            do if ((c[2] | 0) >>> 0 >= 15) {
                m = k + 60 | 0;
                if (!(c[m >> 2] | 0)) {
                    f = k;
                    e = f + 56 | 0;
                    do {
                        c[f >> 2] = c[d >> 2];
                        f = f + 4 | 0;
                        d = d + 4 | 0
                    } while ((f | 0) < (e | 0));
                    j = k + 32 | 0;
                    d = (c[j >> 2] | 0) < 3 ? 1 : 2;
                    e = k + 148 | 0;
                    if ((c[e >> 2] | 0) >>> 0 < d >>> 0) {
                        f = k + 144 | 0;
                        $a(c[f >> 2] | 0);
                        if ((c[j >> 2] | 0) < 3) {
                            g = _a(16416) | 0;
                            if ((g | 0) != 0 ? (c[g + -4 >> 2] & 3 | 0) != 0 : 0) db(g | 0, 0, 16416) | 0;
                            db(g | 0, 0, 16416) | 0;
                            c[f >> 2] = g
                        } else c[f >> 2] = _a(262192) | 0;
                        c[e >> 2] = d
                    }
                    d = c[k >> 2] | 0;
                    if (d) {
                        d = d + -4 | 0;
                        if (d >>> 0 > 3) d = -2; else h = 14
                    } else {
                        c[k >> 2] = 4;
                        d = 0;
                        h = 14
                    }
                    if ((h | 0) == 14) d = c[100 + (d << 2) >> 2] | 0;
                    c[k + 64 >> 2] = d;
                    i = k + 4 | 0;
                    f = (c[i >> 2] | 0) == 0 & 1;
                    f = (c[b + 44 >> 2] | 0) == 0 ? d + (f << 17) | 0 : f << 16;
                    d = k + 68 | 0;
                    if ((c[d >> 2] | 0) >>> 0 < f >>> 0) {
                        c[d >> 2] = f;
                        e = k + 72 | 0;
                        $a(c[e >> 2] | 0);
                        d = _a(f) | 0;
                        if (!d) {
                            c[e >> 2] = d;
                            d = -9;
                            break
                        }
                        if (c[d + -4 >> 2] & 3) db(d | 0, 0, f | 0) | 0;
                        c[e >> 2] = d
                    } else d = c[k + 72 >> 2] | 0;
                    c[k + 76 >> 2] = d;
                    c[k + 80 >> 2] = 0;
                    d = k + 96 | 0;
                    c[k + 104 >> 2] = 0;
                    c[d + 12 >> 2] = 606290984;
                    c[k + 112 >> 2] = -2048144777;
                    c[d + 20 >> 2] = 0;
                    c[k + 120 >> 2] = 1640531535;
                    e = d;
                    c[e >> 2] = 0;
                    c[e + 4 >> 2] = 0;
                    c[d + 44 >> 2] = 0;
                    d = c[j >> 2] | 0;
                    e = k + 144 | 0;
                    if ((d | 0) < 3) db(c[e >> 2] | 0, 0, 16416) | 0; else {
                        j = c[e >> 2] | 0;
                        c[j + 262148 >> 2] = 0;
                        c[j + 262172 >> 2] = d
                    }
                    g = l;
                    a[g >> 0] = 4;
                    a[g + 1 >> 0] = 34;
                    a[g + 2 >> 0] = 77;
                    a[g + 3 >> 0] = 24;
                    h = g + 4 | 0;
                    f = k + 16 | 0;
                    d = f;
                    a[h >> 0] = c[i >> 2] << 5 & 32 | c[k + 8 >> 2] << 2 & 4 | (((c[d >> 2] | 0) != 0 | (c[d + 4 >> 2] | 0) != 0) & 1) << 3 | 64;
                    d = g + 6 | 0;
                    a[g + 5 >> 0] = c[k >> 2] << 4 & 112;
                    e = c[f >> 2] | 0;
                    f = c[f + 4 >> 2] | 0;
                    if ((e | 0) == 0 & (f | 0) == 0) e = 7; else {
                        a[d >> 0] = e;
                        d = eb(e | 0, f | 0, 8) | 0;
                        a[g + 7 >> 0] = d;
                        d = eb(e | 0, f | 0, 16) | 0;
                        a[g + 8 >> 0] = d;
                        d = eb(e | 0, f | 0, 24) | 0;
                        a[g + 9 >> 0] = d;
                        a[g + 10 >> 0] = f;
                        d = eb(e | 0, f | 0, 40) | 0;
                        a[g + 11 >> 0] = d;
                        d = eb(e | 0, f | 0, 48) | 0;
                        a[g + 12 >> 0] = d;
                        e = eb(e | 0, f | 0, 56) | 0;
                        a[g + 13 >> 0] = e;
                        e = k + 88 | 0;
                        c[e >> 2] = 0;
                        c[e + 4 >> 2] = 0;
                        e = 15;
                        d = g + 14 | 0
                    }
                    a[d >> 0] = Ia(h, d - h | 0) | 0;
                    c[m >> 2] = 1;
                    d = g + e - l | 0;
                    if (d >>> 0 <= 4294967277) {
                        la(1, b | 0, c[4] | 0, d | 0) | 0;
                        b = 1;
                        return b | 0
                    }
                } else d = -1
            } else d = -11; while (0);
            ma(0, b | 0, c[20 + (0 - d << 2) >> 2] | 0) | 0;
            b = 0;
            return b | 0
        }

        function Ca(a) {
            a = a | 0;
            var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0,
                s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
            y = i;
            i = i + 16 | 0;
            p = y;
            s = c[a + 4 >> 2] | 0;
            t = c[4] | 0;
            b = c[2] | 0;
            u = c[3] | 0;
            v = la(2, a | 0, u | 0, 8192) | 0;
            d = u;
            q = c[s + 64 >> 2] | 0;
            w = u + v | 0;
            m = w;
            a:do if ((c[s + 60 >> 2] | 0) == 1) if (b >>> 0 >= (Ha(v, s) | 0) >>> 0) {
                c[p >> 2] = 0;
                n = s + 4 | 0;
                l = s + 32 | 0;
                g = (c[n >> 2] | 0) == 1;
                g = (c[l >> 2] | 0) < 3 ? (g ? 1 : 2) : g ? 3 : 4;
                r = s + 80 | 0;
                b = c[r >> 2] | 0;
                do if (!b) {
                    b = t;
                    f = 0
                } else {
                    e = q - b | 0;
                    d = s + 76 | 0;
                    b = (c[d >> 2] | 0) + b | 0;
                    if (e >>> 0 > v >>> 0) {
                        gb(b | 0, u | 0, v | 0) | 0;
                        c[r >> 2] = (c[r >> 2] | 0) + v;
                        b = t;
                        f = 0;
                        d = m;
                        break
                    }
                    gb(b | 0, u | 0, e | 0) | 0;
                    b = t;
                    b = b + (Ja(b, c[d >> 2] | 0, q, g, c[s + 144 >> 2] | 0, c[l >> 2] | 0) | 0) | 0;
                    if (!(c[n >> 2] | 0)) c[d >> 2] = (c[d >> 2] | 0) + q;
                    c[r >> 2] = 0;
                    f = 1;
                    d = u + e | 0
                } while (0);
                o = w;
                j = s + 144 | 0;
                h = f;
                while (1) {
                    e = d;
                    f = o - d | 0;
                    if (f >>> 0 < q >>> 0) break;
                    h = b;
                    b = h + (Ja(h, e, q, g, c[j >> 2] | 0, c[l >> 2] | 0) | 0) | 0;
                    h = 2;
                    d = e + q | 0
                }
                k = s + 36 | 0;
                if ((c[k >> 2] | 0) != 0 & e >>> 0 < w >>> 0) {
                    g = b + (Ja(b, e, f, g, c[j >> 2] | 0, c[l >> 2] | 0) | 0) | 0;
                    b = 2;
                    f = m
                } else {
                    g = b;
                    b = h;
                    f = d
                }
                do if ((c[n >> 2] | 0) == 0 & (b | 0) == 2) {
                    if (c[p >> 2] | 0) {
                        c[s + 76 >> 2] = c[s + 72 >> 2];
                        break
                    }
                    b = Ka(s) | 0;
                    if (!b) {
                        b = -1;
                        x = 26;
                        break a
                    }
                    c[s + 76 >> 2] = (c[s + 72 >> 2] | 0) + b
                } while (0);
                d = s + 76 | 0;
                b = c[d >> 2] | 0;
                e = s + 72 | 0;
                if ((b + q | 0) >>> 0 > ((c[e >> 2] | 0) + (c[s + 68 >> 2] | 0) | 0) >>> 0 ? (c[k >> 2] | 0) == 0 : 0) {
                    b = Ka(s) | 0;
                    b = (c[e >> 2] | 0) + b | 0;
                    c[d >> 2] = b
                }
                d = f;
                if (d >>> 0 < w >>> 0) {
                    w = o - f | 0;
                    gb(b | 0, d | 0, w | 0) | 0;
                    c[r >> 2] = w
                }
                if ((c[s + 8 >> 2] | 0) == 1) Ra(s + 96 | 0, u, v);
                b = s + 88 | 0;
                w = b;
                w = cb(c[w >> 2] | 0, c[w + 4 >> 2] | 0, v | 0, 0) | 0;
                c[b >> 2] = w;
                c[b + 4 >> 2] = C;
                b = g - t | 0;
                if (b >>> 0 <= 4294967277) {
                    la(1, a | 0, c[4] | 0, b | 0) | 0;
                    x = 1;
                    i = y;
                    return x | 0
                }
            } else {
                b = -11;
                x = 26
            } else {
                b = -1;
                x = 26
            } while (0);
            ma(0, a | 0, c[20 + (0 - b << 2) >> 2] | 0) | 0;
            x = 0;
            i = y;
            return x | 0
        }

        function Da(b) {
            b = b | 0;
            var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
            j = c[b + 4 >> 2] | 0;
            k = c[4] | 0;
            d = c[2] | 0;
            if (c[j + 80 >> 2] | 0) if ((c[j + 60 >> 2] | 0) == 1) {
                g = j + 80 | 0;
                e = c[g >> 2] | 0;
                if (d >>> 0 >= (e + 8 | 0) >>> 0) {
                    f = j + 4 | 0;
                    d = c[j + 32 >> 2] | 0;
                    l = (c[f >> 2] | 0) == 1;
                    m = k;
                    h = j + 76 | 0;
                    e = m + (Ja(m, c[h >> 2] | 0, e, (d | 0) < 3 ? (l ? 1 : 2) : l ? 3 : 4, c[j + 144 >> 2] | 0, d) | 0) | 0;
                    if (!(c[f >> 2] | 0)) {
                        f = (c[h >> 2] | 0) + (c[g >> 2] | 0) | 0;
                        c[h >> 2] = f
                    } else f = c[h >> 2] | 0;
                    c[g >> 2] = 0;
                    d = j + 72 | 0;
                    if ((f + (c[j + 64 >> 2] | 0) | 0) >>> 0 > ((c[d >> 2] | 0) + (c[j + 68 >> 2] | 0) | 0) >>> 0) {
                        m = Ka(j) | 0;
                        c[h >> 2] = (c[d >> 2] | 0) + m
                    }
                    d = e - k | 0;
                    if (d >>> 0 <= 4294967277) i = 10
                } else d = -11
            } else d = -1; else {
                d = 0;
                i = 10
            }
            do if ((i | 0) == 10) {
                e = k;
                a[e + d >> 0] = 0;
                a[e + (d + 1) >> 0] = 0;
                a[e + (d + 2) >> 0] = 0;
                a[e + (d + 3) >> 0] = 0;
                f = e + (d + 4) | 0;
                if ((c[j + 8 >> 2] | 0) == 1) {
                    m = Sa(j + 96 | 0) | 0;
                    a[f >> 0] = m;
                    a[e + (d + 5) >> 0] = m >>> 8;
                    a[e + (d + 6) >> 0] = m >>> 16;
                    a[e + (d + 7) >> 0] = m >>> 24;
                    d = e + (d + 8) | 0
                } else d = f;
                c[j + 60 >> 2] = 0;
                f = j + 16 | 0;
                e = c[f >> 2] | 0;
                f = c[f + 4 >> 2] | 0;
                if (!((e | 0) == 0 & (f | 0) == 0) ? (m = j + 88 | 0, !((e | 0) == (c[m >> 2] | 0) ? (f | 0) == (c[m + 4 >> 2] | 0) : 0)) : 0) {
                    d = -14;
                    break
                }
                d = d - k | 0;
                if (d >>> 0 <= 4294967277) {
                    la(1, b | 0, c[4] | 0, d | 0) | 0;
                    m = 1;
                    return m | 0
                }
            } while (0);
            ma(0, b | 0, c[20 + (0 - d << 2) >> 2] | 0) | 0;
            m = 0;
            return m | 0
        }

        function Ea() {
            var a = 0, b = 0;
            a = _a(4) | 0;
            b = _a(160) | 0;
            if (!b) {
                b = 0;
                return b | 0
            }
            if (c[b + -4 >> 2] & 3) db(b | 0, 0, 160) | 0;
            c[b + 32 >> 2] = 100;
            c[a >> 2] = b;
            if ((c[2] | 0) >>> 0 >= 8192) {
                b = a;
                return b | 0
            }
            $a(c[4] | 0);
            c[2] = 8192;
            c[4] = _a(8192) | 0;
            b = a;
            return b | 0
        }

        function Fa(a) {
            a = a | 0;
            a = c[a >> 2] | 0;
            if (!a) return;
            $a(c[a + 60 >> 2] | 0);
            $a(c[a + 72 >> 2] | 0);
            $a(a);
            return
        }

        function Ga(b) {
            b = b | 0;
            var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0,
                u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0,
                K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0,
                Z = 0;
            X = i;
            i = i + 16 | 0;
            V = X;
            N = la(2, b | 0, c[3] | 0, 8192) | 0;
            e = 8192;
            U = 0;
            a:while (1) {
                D = c[b >> 2] | 0;
                O = c[4] | 0;
                T = c[3] | 0;
                S = T + U | 0;
                T = T + N | 0;
                F = O;
                B = F + e | 0;
                c[V >> 2] = 0;
                I = D + 56 | 0;
                M = c[I >> 2] | 0;
                if (!((M | 0) == 0 | (S | 0) == (M | 0))) {
                    e = -15;
                    W = 99;
                    break
                }
                m = D + 36 | 0;
                n = T;
                o = D + 64 | 0;
                p = D + 68 | 0;
                q = D + 60 | 0;
                r = D + 48 | 0;
                s = B;
                t = D + 8 | 0;
                u = D + 16 | 0;
                v = D + 4 | 0;
                w = D + 40 | 0;
                x = D + 96 | 0;
                G = D + 88 | 0;
                J = D + 92 | 0;
                y = D + 84 | 0;
                z = D + 144 | 0;
                K = D + 76 | 0;
                L = D + 80 | 0;
                M = D + 72 | 0;
                A = D + 148 | 0;
                E = 1;
                l = O;
                H = 1;
                k = 0;
                j = S;
                b:while (1) {
                    if (!E) break;
                    c:do switch (c[m >> 2] | 0) {
                        case 0: {
                            h = j;
                            e = n - j | 0;
                            if (e >>> 0 <= 14) {
                                c[o >> 2] = 0;
                                c[p >> 2] = 7;
                                c[m >> 2] = 1;
                                f = 7;
                                g = 0;
                                W = 11;
                                break c
                            }
                            e = La(D, h, e) | 0;
                            if (e >>> 0 > 4294967277) {
                                W = 99;
                                break a
                            }
                            Z = k;
                            Y = H;
                            f = l;
                            g = E;
                            j = h + e | 0;
                            k = Z;
                            H = Y;
                            l = f;
                            E = g;
                            continue b
                        }
                        case 1: {
                            e = n - j | 0;
                            h = j;
                            f = c[p >> 2] | 0;
                            g = c[o >> 2] | 0;
                            W = 11;
                            break
                        }
                        case 2:
                            if ((n - j | 0) >>> 0 > 3) {
                                h = j;
                                f = j + 4 | 0;
                                W = 20;
                                break c
                            } else {
                                c[o >> 2] = 0;
                                c[m >> 2] = 3;
                                W = 17;
                                break c
                            }
                        case 3: {
                            W = 17;
                            break
                        }
                        case 4: {
                            h = c[p >> 2] | 0;
                            e = j;
                            f = n - j | 0;
                            h = f >>> 0 < h >>> 0 ? f : h;
                            f = l;
                            Z = s - l | 0;
                            h = Z >>> 0 < h >>> 0 ? Z : h;
                            gb(f | 0, e | 0, h | 0) | 0;
                            if (c[t >> 2] | 0) Ra(x, e, h);
                            Z = u;
                            if (!((c[Z >> 2] | 0) == 0 & (c[Z + 4 >> 2] | 0) == 0)) {
                                Y = w;
                                Y = bb(c[Y >> 2] | 0, c[Y + 4 >> 2] | 0, h | 0, 0) | 0;
                                Z = w;
                                c[Z >> 2] = Y;
                                c[Z + 4 >> 2] = C
                            }
                            if (!(c[v >> 2] | 0)) Ma(D, f, h, F, 0);
                            g = e + h | 0;
                            e = f + h | 0;
                            f = c[p >> 2] | 0;
                            if ((f | 0) == (h | 0)) {
                                c[m >> 2] = 2;
                                h = k;
                                Y = H;
                                Z = E;
                                l = e;
                                j = g;
                                k = h;
                                H = Y;
                                E = Z;
                                continue b
                            } else {
                                H = f - h | 0;
                                c[p >> 2] = H;
                                Z = k;
                                E = 0;
                                l = e;
                                H = H + 4 | 0;
                                j = g;
                                k = Z;
                                continue b
                            }
                        }
                        case 5: {
                            e = c[p >> 2] | 0;
                            if ((n - j | 0) >>> 0 < e >>> 0) {
                                c[o >> 2] = 0;
                                c[m >> 2] = 6;
                                f = j;
                                g = k;
                                h = H;
                                Y = l;
                                Z = E;
                                j = f;
                                k = g;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            } else {
                                c[m >> 2] = 7;
                                k = j;
                                h = H;
                                Y = l;
                                Z = E;
                                j = j + e | 0;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            }
                        }
                        case 6: {
                            e = c[o >> 2] | 0;
                            f = (c[p >> 2] | 0) - e | 0;
                            g = j;
                            Z = n - j | 0;
                            f = f >>> 0 > Z >>> 0 ? Z : f;
                            gb((c[q >> 2] | 0) + e | 0, g | 0, f | 0) | 0;
                            e = (c[o >> 2] | 0) + f | 0;
                            c[o >> 2] = e;
                            f = g + f | 0;
                            g = c[p >> 2] | 0;
                            if (g >>> 0 > e >>> 0) {
                                Y = k;
                                Z = l;
                                E = 0;
                                H = g - e + 4 | 0;
                                j = f;
                                k = Y;
                                l = Z;
                                continue b
                            } else {
                                k = c[q >> 2] | 0;
                                c[m >> 2] = 7;
                                h = H;
                                Y = l;
                                Z = E;
                                j = f;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            }
                        }
                        case 7:
                            if ((s - l | 0) >>> 0 < (c[r >> 2] | 0) >>> 0) {
                                c[m >> 2] = 9;
                                f = j;
                                g = k;
                                h = H;
                                Y = l;
                                Z = E;
                                j = f;
                                k = g;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            } else {
                                c[m >> 2] = 8;
                                f = j;
                                g = k;
                                h = H;
                                Y = l;
                                Z = E;
                                j = f;
                                k = g;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            }
                        case 8: {
                            e = l;
                            f = oa[((c[v >> 2] | 0) == 0 ? 5 : 6) & 7](k, e, c[p >> 2] | 0, c[r >> 2] | 0, c[K >> 2] | 0, c[L >> 2] | 0) | 0;
                            if ((f | 0) < 0) {
                                e = -1;
                                W = 99;
                                break a
                            }
                            if (c[t >> 2] | 0) Ra(x, e, f);
                            Z = u;
                            if (!((c[Z >> 2] | 0) == 0 & (c[Z + 4 >> 2] | 0) == 0)) {
                                Y = w;
                                Y = bb(c[Y >> 2] | 0, c[Y + 4 >> 2] | 0, f | 0, ((f | 0) < 0) << 31 >> 31 | 0) | 0;
                                Z = w;
                                c[Z >> 2] = Y;
                                c[Z + 4 >> 2] = C
                            }
                            if (!(c[v >> 2] | 0)) Ma(D, e, f, F, 0);
                            c[m >> 2] = 2;
                            g = j;
                            h = k;
                            Y = H;
                            Z = E;
                            l = e + f | 0;
                            j = g;
                            k = h;
                            H = Y;
                            E = Z;
                            continue b
                        }
                        case 9: {
                            do if (!(c[v >> 2] | 0)) {
                                e = c[K >> 2] | 0;
                                f = c[M >> 2] | 0;
                                g = c[L >> 2] | 0;
                                if ((e | 0) != (f | 0)) {
                                    h = f + (g >>> 0 > 65536 ? 65536 : g) | 0;
                                    c[y >> 2] = h;
                                    f = g;
                                    e = 5;
                                    break
                                }
                                if (g >>> 0 > 131072) {
                                    gb(e | 0, e + (g + -65536) | 0, 65536) | 0;
                                    c[L >> 2] = 65536;
                                    e = c[M >> 2] | 0;
                                    f = 65536
                                } else f = g;
                                h = e + f | 0;
                                c[y >> 2] = h;
                                e = 5
                            } else {
                                h = c[y >> 2] | 0;
                                f = c[L >> 2] | 0;
                                e = 6
                            } while (0);
                            e = oa[e & 7](k, h, c[p >> 2] | 0, c[r >> 2] | 0, c[K >> 2] | 0, f) | 0;
                            if ((e | 0) < 0) {
                                e = -16;
                                W = 99;
                                break a
                            }
                            if (c[t >> 2] | 0) Ra(x, c[y >> 2] | 0, e);
                            Z = u;
                            if (!((c[Z >> 2] | 0) == 0 & (c[Z + 4 >> 2] | 0) == 0)) {
                                Y = w;
                                Y = bb(c[Y >> 2] | 0, c[Y + 4 >> 2] | 0, e | 0, ((e | 0) < 0) << 31 >> 31 | 0) | 0;
                                Z = w;
                                c[Z >> 2] = Y;
                                c[Z + 4 >> 2] = C
                            }
                            c[G >> 2] = e;
                            c[J >> 2] = 0;
                            c[m >> 2] = 10;
                            f = j;
                            g = k;
                            h = H;
                            Y = l;
                            Z = E;
                            j = f;
                            k = g;
                            H = h;
                            l = Y;
                            E = Z;
                            continue b
                        }
                        case 10: {
                            Z = c[J >> 2] | 0;
                            e = (c[G >> 2] | 0) - Z | 0;
                            f = l;
                            Y = s - l | 0;
                            e = e >>> 0 > Y >>> 0 ? Y : e;
                            gb(f | 0, (c[y >> 2] | 0) + Z | 0, e | 0) | 0;
                            if (!(c[v >> 2] | 0)) Ma(D, f, e, F, 1);
                            Z = (c[J >> 2] | 0) + e | 0;
                            c[J >> 2] = Z;
                            e = f + e | 0;
                            if ((Z | 0) != (c[G >> 2] | 0)) {
                                Y = j;
                                Z = k;
                                E = 0;
                                l = e;
                                H = 4;
                                j = Y;
                                k = Z;
                                continue b
                            }
                            c[m >> 2] = 2;
                            g = j;
                            h = k;
                            Y = H;
                            Z = E;
                            l = e;
                            j = g;
                            k = h;
                            H = Y;
                            E = Z;
                            continue b
                        }
                        case 11: {
                            Z = w;
                            if (!((c[Z >> 2] | 0) == 0 & (c[Z + 4 >> 2] | 0) == 0)) {
                                e = -14;
                                W = 99;
                                break a
                            }
                            if (!(c[t >> 2] & 1073741823)) {
                                c[m >> 2] = 0;
                                h = j;
                                Y = k;
                                Z = l;
                                E = 0;
                                H = 0;
                                j = h;
                                k = Y;
                                l = Z;
                                continue b
                            }
                            if ((n - j | 0) < 4) {
                                c[o >> 2] = 0;
                                c[m >> 2] = 12;
                                W = 75;
                                break c
                            } else {
                                g = j;
                                e = j + 4 | 0;
                                W = 78;
                                break c
                            }
                        }
                        case 12: {
                            W = 75;
                            break
                        }
                        case 13:
                            if ((n - j | 0) > 3) {
                                f = j;
                                e = j + 4 | 0;
                                W = 85;
                                break c
                            } else {
                                c[o >> 2] = 4;
                                c[p >> 2] = 8;
                                c[m >> 2] = 14;
                                W = 82;
                                break c
                            }
                        case 14: {
                            W = 82;
                            break
                        }
                        case 15: {
                            Y = c[p >> 2] | 0;
                            Z = n - j | 0;
                            Z = Y >>> 0 > Z >>> 0 ? Z : Y;
                            f = j + Z | 0;
                            e = Y - Z | 0;
                            c[p >> 2] = e;
                            if ((Y | 0) != (Z | 0)) {
                                Y = k;
                                Z = l;
                                E = 0;
                                H = e;
                                j = f;
                                k = Y;
                                l = Z;
                                continue b
                            }
                            c[m >> 2] = 0;
                            Y = k;
                            Z = l;
                            E = 0;
                            H = 0;
                            j = f;
                            k = Y;
                            l = Z;
                            continue b
                        }
                        default: {
                            f = j;
                            g = k;
                            h = H;
                            Y = l;
                            Z = E;
                            j = f;
                            k = g;
                            H = h;
                            l = Y;
                            E = Z;
                            continue b
                        }
                    } while (0);
                    do if ((W | 0) == 11) {
                        W = 0;
                        f = f - g | 0;
                        e = f >>> 0 > e >>> 0 ? e : f;
                        gb(D + 144 + g | 0, h | 0, e | 0) | 0;
                        f = (c[o >> 2] | 0) + e | 0;
                        c[o >> 2] = f;
                        g = h + e | 0;
                        e = c[p >> 2] | 0;
                        if (e >>> 0 <= f >>> 0) {
                            e = La(D, z, e) | 0;
                            if (e >>> 0 > 4294967277) {
                                W = 99;
                                break a
                            } else {
                                f = k;
                                h = H;
                                Y = l;
                                Z = E;
                                j = g;
                                k = f;
                                H = h;
                                l = Y;
                                E = Z;
                                continue b
                            }
                        } else {
                            Y = k;
                            Z = l;
                            E = 0;
                            H = e - f + 4 | 0;
                            j = g;
                            k = Y;
                            l = Z;
                            continue b
                        }
                    } else if ((W | 0) == 17) {
                        W = 0;
                        Z = c[o >> 2] | 0;
                        e = 4 - Z | 0;
                        f = j;
                        Y = n - j | 0;
                        e = e >>> 0 > Y >>> 0 ? Y : e;
                        gb((c[q >> 2] | 0) + Z | 0, f | 0, e | 0) | 0;
                        f = f + e | 0;
                        e = (c[o >> 2] | 0) + e | 0;
                        c[o >> 2] = e;
                        if (e >>> 0 < 4) {
                            Y = k;
                            Z = l;
                            E = 0;
                            H = 4 - e | 0;
                            j = f;
                            k = Y;
                            l = Z;
                            continue b
                        } else {
                            h = c[q >> 2] | 0;
                            W = 20;
                            break
                        }
                    } else if ((W | 0) == 75) {
                        W = 0;
                        Z = c[o >> 2] | 0;
                        e = 4 - Z | 0;
                        f = j;
                        Y = n - j | 0;
                        e = e >>> 0 > Y >>> 0 ? Y : e;
                        gb((c[q >> 2] | 0) + Z | 0, f | 0, e | 0) | 0;
                        f = f + e | 0;
                        e = (c[o >> 2] | 0) + e | 0;
                        c[o >> 2] = e;
                        if (e >>> 0 < 4) {
                            Y = k;
                            Z = l;
                            E = 0;
                            H = 4 - e | 0;
                            j = f;
                            k = Y;
                            l = Z;
                            continue b
                        } else {
                            g = c[q >> 2] | 0;
                            e = f;
                            W = 78;
                            break
                        }
                    } else if ((W | 0) == 82) {
                        W = 0;
                        g = c[o >> 2] | 0;
                        f = (c[p >> 2] | 0) - g | 0;
                        e = j;
                        Z = n - j | 0;
                        f = f >>> 0 > Z >>> 0 ? Z : f;
                        gb(D + 144 + g | 0, e | 0, f | 0) | 0;
                        e = e + f | 0;
                        f = (c[o >> 2] | 0) + f | 0;
                        c[o >> 2] = f;
                        g = c[p >> 2] | 0;
                        if (g >>> 0 > f >>> 0) {
                            Y = k;
                            Z = l;
                            E = 0;
                            H = g - f | 0;
                            j = e;
                            k = Y;
                            l = Z;
                            continue b
                        } else {
                            f = A;
                            W = 85
                        }
                    } while (0);
                    if ((W | 0) == 20) {
                        W = 0;
                        g = h;
                        e = g + 3 | 0;
                        g = d[g >> 0] | d[g + 1 >> 0] << 8 | d[g + 2 >> 0] << 16 | d[e >> 0] << 24 & 2130706432;
                        if (!g) {
                            c[m >> 2] = 11;
                            g = H;
                            Y = l;
                            Z = E;
                            k = h;
                            j = f;
                            H = g;
                            l = Y;
                            E = Z;
                            continue
                        }
                        if (g >>> 0 > (c[r >> 2] | 0) >>> 0) {
                            e = -1;
                            W = 99;
                            break a
                        }
                        c[p >> 2] = g;
                        if ((a[e >> 0] | 0) < 0) {
                            c[m >> 2] = 4;
                            g = H;
                            Y = l;
                            Z = E;
                            k = h;
                            j = f;
                            H = g;
                            l = Y;
                            E = Z;
                            continue
                        } else {
                            c[m >> 2] = 5;
                            k = (l | 0) == (B | 0);
                            Z = l;
                            E = k ? 0 : E;
                            H = k ? g + 4 | 0 : H;
                            k = h;
                            j = f;
                            l = Z;
                            continue
                        }
                    } else if ((W | 0) == 78) {
                        W = 0;
                        Z = g;
                        Z = d[Z >> 0] | d[Z + 1 >> 0] << 8 | d[Z + 2 >> 0] << 16 | d[Z + 3 >> 0] << 24;
                        if ((Z | 0) != (Sa(x) | 0)) {
                            e = -18;
                            W = 99;
                            break a
                        }
                        c[m >> 2] = 0;
                        Z = l;
                        E = 0;
                        H = 0;
                        k = g;
                        j = e;
                        l = Z;
                        continue
                    } else if ((W | 0) == 85) {
                        W = 0;
                        h = f;
                        h = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                        Y = u;
                        c[Y >> 2] = h;
                        c[Y + 4 >> 2] = 0;
                        c[p >> 2] = h;
                        c[m >> 2] = 15;
                        h = H;
                        Y = l;
                        Z = E;
                        k = f;
                        j = e;
                        H = h;
                        l = Y;
                        E = Z;
                        continue
                    }
                }
                do if (((c[v >> 2] | 0) == 0 ? (P = c[K >> 2] | 0, Q = c[M >> 2] | 0, (P | 0) != (Q | 0) & (c[V >> 2] | 0) == 0) : 0) ? (R = c[m >> 2] | 0, (R + -1 | 0) >>> 0 < 10) : 0) {
                    if ((R | 0) != 10) {
                        Y = c[L >> 2] | 0;
                        Z = Y >>> 0 > 65536 ? 65536 : Y;
                        gb(Q | 0, P + (Y - Z) | 0, Z | 0) | 0;
                        Y = c[M >> 2] | 0;
                        c[K >> 2] = Y;
                        c[L >> 2] = Z;
                        c[y >> 2] = Y + Z;
                        break
                    }
                    f = (c[y >> 2] | 0) - Q | 0;
                    e = c[G >> 2] | 0;
                    if (e >>> 0 > 65536) e = 0; else {
                        e = 65536 - e | 0;
                        e = e >>> 0 > f >>> 0 ? f : e
                    }
                    gb(Q + (f - e) | 0, P + ((c[L >> 2] | 0) - (c[J >> 2] | 0) - e) | 0, e | 0) | 0;
                    c[K >> 2] = c[M >> 2];
                    c[L >> 2] = f + (c[J >> 2] | 0)
                } while (0);
                if (j >>> 0 < T >>> 0) c[I >> 2] = j; else c[I >> 2] = 0;
                e = l - O | 0;
                if (H >>> 0 > 4294967277) {
                    e = H;
                    break
                }
                U = j - S + U | 0;
                if (e) la(1, b | 0, c[4] | 0, e | 0) | 0;
                if (!H) {
                    e = 1;
                    W = 106;
                    break
                }
                if (!(N >>> 0 > U >>> 0 | (e | 0) == 8192)) {
                    e = 1;
                    W = 106;
                    break
                }
            }
            if ((W | 0) != 99) if ((W | 0) == 106) {
                i = X;
                return e | 0
            }
            ma(0, b | 0, c[20 + (0 - e << 2) >> 2] | 0) | 0;
            Z = 0;
            i = X;
            return Z | 0
        }

        function Ha(a, b) {
            a = a | 0;
            b = b | 0;
            var d = 0, e = 0, f = 0, g = 0, h = 0;
            h = i;
            i = i + 64 | 0;
            d = h;
            e = d;
            f = e + 56 | 0;
            do {
                c[e >> 2] = 0;
                e = e + 4 | 0
            } while ((e | 0) < (f | 0));
            c[d + 8 >> 2] = 1;
            f = (b | 0) == 0 ? d : b;
            b = c[f >> 2] | 0;
            if (b) {
                b = b + -4 | 0;
                if (b >>> 0 > 3) e = -2; else g = 3
            } else {
                b = 0;
                g = 3
            }
            if ((g | 0) == 3) e = c[100 + (b << 2) >> 2] | 0;
            d = (a >>> 0) / (e >>> 0) | 0;
            if (!(c[f + 36 >> 2] | 0)) b = e; else b = (a >>> 0) % (e >>> 0) | 0;
            a = (d << 2) + 4 + (_(e, d) | 0) + b + ((c[f + 8 >> 2] << 2) + 4) | 0;
            i = h;
            return a | 0
        }

        function Ia(a, b) {
            a = a | 0;
            b = b | 0;
            var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
            e = a;
            n = a + b | 0;
            f = b >>> 0 > 15;
            if (!(e & 3)) {
                if (f) {
                    i = a + (b + -16) | 0;
                    j = 606290984;
                    k = -2048144777;
                    l = 0;
                    m = 1640531535;
                    do {
                        f = j + (_(c[e >> 2] | 0, -2048144777) | 0) | 0;
                        f = f << 13 | f >>> 19;
                        j = _(f, -1640531535) | 0;
                        o = e;
                        a = k + (_(c[o + 4 >> 2] | 0, -2048144777) | 0) | 0;
                        a = a << 13 | a >>> 19;
                        k = _(a, -1640531535) | 0;
                        g = l + (_(c[o + 8 >> 2] | 0, -2048144777) | 0) | 0;
                        g = g << 13 | g >>> 19;
                        l = _(g, -1640531535) | 0;
                        h = m + (_(c[o + 12 >> 2] | 0, -2048144777) | 0) | 0;
                        h = h << 13 | h >>> 19;
                        m = _(h, -1640531535) | 0;
                        o = o + 16 | 0;
                        e = o
                    } while (o >>> 0 <= i >>> 0);
                    f = (_(f, 1013904226) | 0 | j >>> 31) + (_(a, 465361024) | 0 | k >>> 25) + (_(g, 2006650880) | 0 | l >>> 20) + (_(h, -423362560) | 0 | m >>> 14) | 0
                } else f = 374761393;
                a = f + b | 0;
                while (1) {
                    f = e + 4 | 0;
                    if (f >>> 0 > n >>> 0) break;
                    o = a + (_(c[e >> 2] | 0, -1028477379) | 0) | 0;
                    a = _(o << 17 | o >>> 15, 668265263) | 0;
                    e = f
                }
                while (1) {
                    if (e >>> 0 >= n >>> 0) break;
                    o = a + (_(d[e >> 0] | 0, 374761393) | 0) | 0;
                    a = _(o << 11 | o >>> 21, -1640531535) | 0;
                    e = e + 1 | 0
                }
                o = _(a ^ a >>> 15, -2048144777) | 0;
                o = _(o ^ o >>> 13, -1028477379) | 0;
                o = o ^ o >>> 16;
                o = o >>> 8;
                o = o & 255;
                return o | 0
            } else {
                if (f) {
                    h = a + (b + -16) | 0;
                    j = 606290984;
                    k = -2048144777;
                    l = 0;
                    m = 1640531535;
                    do {
                        i = e;
                        i = j + (_(d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24, -2048144777) | 0) | 0;
                        i = i << 13 | i >>> 19;
                        j = _(i, -1640531535) | 0;
                        o = e;
                        f = o + 4 | 0;
                        f = k + (_(d[f >> 0] | d[f + 1 >> 0] << 8 | d[f + 2 >> 0] << 16 | d[f + 3 >> 0] << 24, -2048144777) | 0) | 0;
                        f = f << 13 | f >>> 19;
                        k = _(f, -1640531535) | 0;
                        a = o + 8 | 0;
                        a = l + (_(d[a >> 0] | d[a + 1 >> 0] << 8 | d[a + 2 >> 0] << 16 | d[a + 3 >> 0] << 24, -2048144777) | 0) | 0;
                        a = a << 13 | a >>> 19;
                        l = _(a, -1640531535) | 0;
                        g = o + 12 | 0;
                        g = m + (_(d[g >> 0] | d[g + 1 >> 0] << 8 | d[g + 2 >> 0] << 16 | d[g + 3 >> 0] << 24, -2048144777) | 0) | 0;
                        g = g << 13 | g >>> 19;
                        m = _(g, -1640531535) | 0;
                        o = o + 16 | 0;
                        e = o
                    } while (o >>> 0 <= h >>> 0);
                    f = (_(i, 1013904226) | 0 | j >>> 31) + (_(f, 465361024) | 0 | k >>> 25) + (_(a, 2006650880) | 0 | l >>> 20) + (_(g, -423362560) | 0 | m >>> 14) | 0
                } else f = 374761393;
                a = f + b | 0;
                while (1) {
                    f = e + 4 | 0;
                    if (f >>> 0 > n >>> 0) break;
                    o = e;
                    o = a + (_(d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24, -1028477379) | 0) | 0;
                    a = _(o << 17 | o >>> 15, 668265263) | 0;
                    e = f
                }
                while (1) {
                    if (e >>> 0 >= n >>> 0) break;
                    o = a + (_(d[e >> 0] | 0, 374761393) | 0) | 0;
                    a = _(o << 11 | o >>> 21, -1640531535) | 0;
                    e = e + 1 | 0
                }
                o = _(a ^ a >>> 15, -2048144777) | 0;
                o = _(o ^ o >>> 13, -1028477379) | 0;
                o = o ^ o >>> 16;
                o = o >>> 8;
                o = o & 255;
                return o | 0
            }
            return 0
        }

        function Ja(b, c, d, e, f, g) {
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            var h = 0, i = 0;
            i = b + 4 | 0;
            g = oa[e & 7](f, c, i, d, d + -1 | 0, g) | 0;
            a[b >> 0] = g;
            f = b + 1 | 0;
            a[f >> 0] = g >>> 8;
            h = b + 2 | 0;
            a[h >> 0] = g >>> 16;
            e = b + 3 | 0;
            a[e >> 0] = g >>> 24;
            if (g) {
                d = g;
                d = d + 4 | 0;
                return d | 0
            }
            a[b >> 0] = d;
            a[f >> 0] = d >>> 8;
            a[h >> 0] = d >>> 16;
            a[e >> 0] = d >>> 24 ^ 128;
            gb(i | 0, c | 0, d | 0) | 0;
            d = d + 4 | 0;
            return d | 0
        }

        function Ka(a) {
            a = a | 0;
            var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
            b = a + 144 | 0;
            if ((c[a + 32 >> 2] | 0) < 3) {
                b = c[b >> 2] | 0;
                e = c[a + 72 >> 2] | 0;
                a = b + 16400 | 0;
                d = c[a >> 2] | 0;
                d = d >>> 0 < 65536 ? d : 65536;
                hb(e | 0, (c[b + 16392 >> 2] | 0) + ((c[b + 16400 >> 2] | 0) - d) | 0, d | 0) | 0;
                c[b + 16392 >> 2] = e;
                c[a >> 2] = d;
                return d | 0
            }
            e = c[b >> 2] | 0;
            f = e + 262160 | 0;
            d = (c[e + 262144 >> 2] | 0) - ((c[e + 262148 >> 2] | 0) + (c[f >> 2] | 0)) | 0;
            d = (d | 0) < 65536 ? d : 65536;
            g = c[a + 72 >> 2] | 0;
            h = e + 262144 | 0;
            hb(g | 0, (c[h >> 2] | 0) + (0 - d) | 0, d | 0) | 0;
            a = e + 262148 | 0;
            b = (c[h >> 2] | 0) - (c[a >> 2] | 0) | 0;
            c[h >> 2] = g + d;
            c[a >> 2] = g + (d - b);
            b = b - d | 0;
            c[f >> 2] = b;
            c[e + 262164 >> 2] = b;
            a = e + 262168 | 0;
            if ((c[a >> 2] | 0) >>> 0 >= b >>> 0) {
                h = d;
                return h | 0
            }
            c[a >> 2] = b;
            h = d;
            return h | 0
        }

        function La(b, e, f) {
            b = b | 0;
            e = e | 0;
            f = f | 0;
            var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
            if (f >>> 0 < 7) {
                b = -12;
                return b | 0
            }
            ;c[b >> 2] = 0;
            c[b + 4 >> 2] = 0;
            c[b + 8 >> 2] = 0;
            c[b + 12 >> 2] = 0;
            c[b + 16 >> 2] = 0;
            c[b + 20 >> 2] = 0;
            c[b + 24 >> 2] = 0;
            c[b + 28 >> 2] = 0;
            i = d[e >> 0] | 0;
            j = d[e + 1 >> 0] << 8;
            g = d[e + 2 >> 0] << 16;
            h = d[e + 3 >> 0] << 24;
            if ((i & 240 | j | g | h | 0) == 407710288) {
                c[b + 12 >> 2] = 1;
                if ((b + 144 | 0) == (e | 0)) {
                    c[b + 64 >> 2] = f;
                    c[b + 68 >> 2] = 8;
                    c[b + 36 >> 2] = 14;
                    b = f;
                    return b | 0
                } else {
                    c[b + 36 >> 2] = 13;
                    b = 4;
                    return b | 0
                }
            }
            if ((i | j | g | h | 0) != 407708164) {
                b = -13;
                return b | 0
            }
            c[b + 12 >> 2] = 0;
            i = e + 4 | 0;
            j = a[i >> 0] | 0;
            k = j & 255;
            h = k >>> 5 & 1;
            l = k & 16;
            m = k >>> 3 & 1;
            n = k >>> 2 & 1;
            o = m << 3 | 7;
            if (o >>> 0 > f >>> 0) {
                g = b + 144 | 0;
                if ((g | 0) != (e | 0)) gb(g | 0, e | 0, f | 0) | 0;
                c[b + 64 >> 2] = f;
                c[b + 68 >> 2] = o;
                c[b + 36 >> 2] = 1;
                b = f;
                return b | 0
            }
            g = a[e + 5 >> 0] | 0;
            f = (g & 255) >>> 4 & 7;
            if ((k & 192 | 0) != 64) {
                b = -6;
                return b | 0
            }
            if (l) {
                b = -7;
                return b | 0
            }
            if ((j & 3) != 0 | g << 24 >> 24 < 0) {
                b = -8;
                return b | 0
            }
            if (f >>> 0 < 4) {
                b = -2;
                return b | 0
            }
            if (g & 15) {
                b = -8;
                return b | 0
            }
            l = Ia(i, o + -5 | 0) | 0;
            if (l << 24 >> 24 != (a[e + (o + -1) >> 0] | 0)) {
                b = -17;
                return b | 0
            }
            i = b + 4 | 0;
            c[i >> 2] = h;
            c[b + 8 >> 2] = n;
            c[b >> 2] = f;
            g = f + -4 | 0;
            if (g >>> 0 > 3) g = -2; else g = c[100 + (g << 2) >> 2] | 0;
            l = b + 48 | 0;
            c[l >> 2] = g;
            if (m) {
                r = d[e + 6 >> 0] | 0;
                q = fb(d[e + 7 >> 0] | 0, 0, 8) | 0;
                m = C;
                p = fb(d[e + 8 >> 0] | 0, 0, 16) | 0;
                m = m | C;
                j = fb(d[e + 9 >> 0] | 0, 0, 24) | 0;
                m = m | C | d[e + 10 >> 0];
                f = fb(d[e + 11 >> 0] | 0, 0, 40) | 0;
                m = m | C;
                k = fb(d[e + 12 >> 0] | 0, 0, 48) | 0;
                k = cb(r | q | p | j | f | 0, m | 0, k | 0, C | 0) | 0;
                m = C;
                f = fb(d[e + 13 >> 0] | 0, 0, 56) | 0;
                f = cb(k | 0, m | 0, f | 0, C | 0) | 0;
                m = C;
                e = b + 16 | 0;
                c[e >> 2] = f;
                c[e + 4 >> 2] = m;
                e = b + 40 | 0;
                c[e >> 2] = f;
                c[e + 4 >> 2] = m
            }
            if (n) {
                h = b + 96 | 0;
                c[b + 104 >> 2] = 0;
                c[h + 12 >> 2] = 606290984;
                c[b + 112 >> 2] = -2048144777;
                c[h + 20 >> 2] = 0;
                c[b + 120 >> 2] = 1640531535;
                g = h;
                c[g >> 2] = 0;
                c[g + 4 >> 2] = 0;
                c[h + 44 >> 2] = 0;
                h = c[i >> 2] | 0;
                g = c[l >> 2] | 0
            }
            g = g + (((h | 0) == 0 & 1) << 17) | 0;
            i = b + 52 | 0;
            if (g >>> 0 > (c[i >> 2] | 0) >>> 0) {
                j = b + 60 | 0;
                $a(c[j >> 2] | 0);
                k = b + 72 | 0;
                $a(c[k >> 2] | 0);
                c[i >> 2] = g;
                g = c[l >> 2] | 0;
                h = _a(g) | 0;
                if (!h) {
                    c[j >> 2] = h;
                    r = -1;
                    return r | 0
                }
                if (c[h + -4 >> 2] & 3) db(h | 0, 0, g | 0) | 0;
                c[j >> 2] = h;
                h = c[i >> 2] | 0;
                g = _a(h) | 0;
                if (!g) {
                    c[k >> 2] = g;
                    r = -1;
                    return r | 0
                }
                if (c[g + -4 >> 2] & 3) db(g | 0, 0, h | 0) | 0;
                c[k >> 2] = g
            } else g = c[b + 72 >> 2] | 0;
            c[b + 64 >> 2] = 0;
            c[b + 68 >> 2] = 0;
            c[b + 76 >> 2] = g;
            c[b + 80 >> 2] = 0;
            c[b + 84 >> 2] = g;
            c[b + 92 >> 2] = 0;
            c[b + 88 >> 2] = 0;
            c[b + 36 >> 2] = 2;
            r = o;
            return r | 0
        }

        function Ma(a, b, d, e, f) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
            m = a + 80 | 0;
            g = c[m >> 2] | 0;
            if (!g) {
                l = a + 76 | 0;
                c[l >> 2] = b;
                h = b
            } else {
                h = a + 76 | 0;
                l = h;
                h = c[h >> 2] | 0
            }
            if ((h + g | 0) == (b | 0)) {
                c[m >> 2] = g + d;
                return
            }
            i = b - e + d | 0;
            if (i >>> 0 > 65535) {
                c[l >> 2] = e;
                c[m >> 2] = i;
                return
            }
            j = a + 72 | 0;
            k = c[j >> 2] | 0;
            i = (h | 0) == (k | 0);
            if (!f) {
                if (!i) {
                    a = 65536 - d | 0;
                    a = a >>> 0 > g >>> 0 ? g : a;
                    gb(k | 0, h + (g - a) | 0, a | 0) | 0;
                    gb((c[j >> 2] | 0) + a | 0, b | 0, d | 0) | 0;
                    c[l >> 2] = c[j >> 2];
                    c[m >> 2] = a + d;
                    return
                }
                if ((g + d | 0) >>> 0 > (c[a + 52 >> 2] | 0) >>> 0) {
                    l = 65536 - d | 0;
                    gb(h | 0, h + (g - l) | 0, l | 0) | 0;
                    c[m >> 2] = l;
                    h = c[j >> 2] | 0;
                    g = l
                }
                gb(h + g | 0, b | 0, d | 0) | 0;
                c[m >> 2] = (c[m >> 2] | 0) + d;
                return
            } else {
                if (i) {
                    c[m >> 2] = g + d;
                    return
                }
                f = (c[a + 84 >> 2] | 0) - k | 0;
                i = c[a + 88 >> 2] | 0;
                e = a + 92 | 0;
                if (i >>> 0 > 65536) i = 0; else {
                    i = 65536 - i | 0;
                    i = i >>> 0 > f >>> 0 ? f : i
                }
                gb(k + (f - i) | 0, h + (g - (c[e >> 2] | 0) - i) | 0, i | 0) | 0;
                c[l >> 2] = c[j >> 2];
                c[m >> 2] = f + (c[e >> 2] | 0) + d;
                return
            }
        }

        function Na(b, e, f, g, h, i) {
            b = b | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0,
                y = 0, z = 0, A = 0, B = 0;
            i = b;
            h = e;
            u = b + f | 0;
            v = e + g | 0;
            if (!g) {
                if ((f | 0) == 1) i = (a[b >> 0] | 0) != 0; else i = 1;
                z = i << 31 >> 31;
                return z | 0
            }
            w = e + (g + -8) | 0;
            x = e + (g + -5) | 0;
            y = e;
            q = e + (g + -12) | 0;
            r = w;
            s = b + (f + -5) | 0;
            t = b + (f + -8) | 0;
            p = b + (f + -15) | 0;
            a:while (1) {
                j = i;
                i = j + 1 | 0;
                j = d[j >> 0] | 0;
                g = j >>> 4;
                if ((g | 0) == 15) {
                    g = 15;
                    do {
                        o = i;
                        n = o + 1 | 0;
                        i = n;
                        o = a[o >> 0] | 0;
                        g = g + (o & 255) | 0
                    } while (n >>> 0 < p >>> 0 & o << 24 >> 24 == -1);
                    if ((g | 0) < 0) break
                }
                o = h;
                m = o + g | 0;
                if (m >>> 0 > q >>> 0) {
                    z = 11;
                    break
                }
                f = i;
                if ((f + g | 0) >>> 0 > t >>> 0) {
                    z = 11;
                    break
                } else i = f;
                while (1) {
                    l = i;
                    A = l;
                    A = d[A >> 0] | d[A + 1 >> 0] << 8 | d[A + 2 >> 0] << 16 | d[A + 3 >> 0] << 24;
                    l = l + 4 | 0;
                    l = d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24;
                    n = h;
                    k = n;
                    a[k >> 0] = A;
                    a[k + 1 >> 0] = A >> 8;
                    a[k + 2 >> 0] = A >> 16;
                    a[k + 3 >> 0] = A >> 24;
                    n = n + 4 | 0;
                    a[n >> 0] = l;
                    a[n + 1 >> 0] = l >> 8;
                    a[n + 2 >> 0] = l >> 16;
                    a[n + 3 >> 0] = l >> 24;
                    h = h + 8 | 0;
                    if (h >>> 0 >= m >>> 0) break; else i = i + 8 | 0
                }
                k = f + g | 0;
                k = g - ((d[k >> 0] | d[k + 1 >> 0] << 8) & 65535) | 0;
                l = o + k | 0;
                i = f + (g + 2) | 0;
                if (l >>> 0 < e >>> 0) break;
                h = j & 15;
                if ((h | 0) == 15) {
                    h = 15;
                    do {
                        f = i;
                        if (f >>> 0 > s >>> 0) break a;
                        i = f + 1 | 0;
                        A = a[f >> 0] | 0;
                        h = h + (A & 255) | 0
                    } while (A << 24 >> 24 == -1);
                    if ((h | 0) < 0) break
                }
                n = o + (g + (h + 4)) | 0;
                h = n;
                f = m - l | 0;
                if ((f | 0) < 8) {
                    A = c[116 + (f << 2) >> 2] | 0;
                    a[m >> 0] = a[l >> 0] | 0;
                    a[o + (g + 1) >> 0] = a[o + (k + 1) >> 0] | 0;
                    a[o + (g + 2) >> 0] = a[o + (k + 2) >> 0] | 0;
                    a[o + (g + 3) >> 0] = a[o + (k + 3) >> 0] | 0;
                    k = k + (c[148 + (f << 2) >> 2] | 0) | 0;
                    l = o + k | 0;
                    m = o + (g + 4) | 0;
                    l = d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24;
                    a[m >> 0] = l;
                    a[m + 1 >> 0] = l >> 8;
                    a[m + 2 >> 0] = l >> 16;
                    a[m + 3 >> 0] = l >> 24;
                    k = k - A | 0
                } else {
                    j = l;
                    j = d[j >> 0] | d[j + 1 >> 0] << 8 | d[j + 2 >> 0] << 16 | d[j + 3 >> 0] << 24;
                    l = l + 4 | 0;
                    l = d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24;
                    A = m;
                    m = A;
                    a[m >> 0] = j;
                    a[m + 1 >> 0] = j >> 8;
                    a[m + 2 >> 0] = j >> 16;
                    a[m + 3 >> 0] = j >> 24;
                    A = A + 4 | 0;
                    a[A >> 0] = l;
                    a[A + 1 >> 0] = l >> 8;
                    a[A + 2 >> 0] = l >> 16;
                    a[A + 3 >> 0] = l >> 24;
                    k = k + 8 | 0
                }
                j = o + (g + 8) | 0;
                f = o + k | 0;
                g = j;
                if (n >>> 0 <= q >>> 0) {
                    g = j;
                    while (1) {
                        o = f;
                        l = o;
                        l = d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24;
                        o = o + 4 | 0;
                        o = d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24;
                        A = g;
                        m = A;
                        a[m >> 0] = l;
                        a[m + 1 >> 0] = l >> 8;
                        a[m + 2 >> 0] = l >> 16;
                        a[m + 3 >> 0] = l >> 24;
                        A = A + 4 | 0;
                        a[A >> 0] = o;
                        a[A + 1 >> 0] = o >> 8;
                        a[A + 2 >> 0] = o >> 16;
                        a[A + 3 >> 0] = o >> 24;
                        g = g + 8 | 0;
                        if (g >>> 0 < n >>> 0) f = f + 8 | 0; else continue a
                    }
                }
                if (n >>> 0 > x >>> 0) break;
                if (j >>> 0 < w >>> 0) {
                    g = j;
                    j = g;
                    while (1) {
                        m = f;
                        B = m;
                        B = d[B >> 0] | d[B + 1 >> 0] << 8 | d[B + 2 >> 0] << 16 | d[B + 3 >> 0] << 24;
                        m = m + 4 | 0;
                        m = d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24;
                        A = j;
                        l = A;
                        a[l >> 0] = B;
                        a[l + 1 >> 0] = B >> 8;
                        a[l + 2 >> 0] = B >> 16;
                        a[l + 3 >> 0] = B >> 24;
                        A = A + 4 | 0;
                        a[A >> 0] = m;
                        a[A + 1 >> 0] = m >> 8;
                        a[A + 2 >> 0] = m >> 16;
                        a[A + 3 >> 0] = m >> 24;
                        j = j + 8 | 0;
                        if (j >>> 0 >= w >>> 0) break; else f = f + 8 | 0
                    }
                    f = o + (k + (r - g)) | 0;
                    g = r
                }
                while (1) {
                    if (g >>> 0 >= n >>> 0) continue a;
                    a[g >> 0] = a[f >> 0] | 0;
                    f = f + 1 | 0;
                    g = g + 1 | 0
                }
            }
            if ((z | 0) == 11) if (!((i + g | 0) != (u | 0) | m >>> 0 > v >>> 0)) {
                gb(o | 0, i | 0, g | 0) | 0;
                B = m - y | 0;
                return B | 0
            }
            B = b - i + -1 | 0;
            return B | 0
        }

        function Oa(f, g, h, i, j, k) {
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            j = j | 0;
            k = k | 0;
            var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0,
                A = 0;
            l = h;
            db(f | 0, 0, 16416) | 0;
            o = i >>> 0 > 2113929216;
            if (o) m = 0; else m = ((i | 0) / 255 | 0) + i + 16 | 0;
            q = (i | 0) < 65547;
            n = g;
            k = g + i | 0;
            z = g + (i + -12) | 0;
            A = g + (i + -5) | 0;
            if ((m | 0) <= (j | 0)) if (q) {
                if (o) {
                    h = 0;
                    return h | 0
                }
                a:do if ((i | 0) < 13) r = n; else {
                    Ua(g, f, 2, g);
                    m = g + 1 | 0;
                    u = g;
                    o = m;
                    m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 19;
                    while (1) {
                        i = 64;
                        r = 1;
                        while (1) {
                            q = o + r | 0;
                            r = i >>> 6;
                            if (q >>> 0 > z >>> 0) {
                                r = n;
                                break a
                            }
                            p = g + (e[f + (m << 1) >> 1] | 0) | 0;
                            j = m;
                            m = (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -1640531535) | 0) >>> 19;
                            b[f + (j << 1) >> 1] = o - u;
                            j = p;
                            if ((d[j >> 0] | d[j + 1 >> 0] << 8 | d[j + 2 >> 0] << 16 | d[j + 3 >> 0] << 24 | 0) == (d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0)) break; else {
                                o = q;
                                i = i + 1 | 0
                            }
                        }
                        i = n;
                        while (1) {
                            t = o;
                            if (o >>> 0 <= i >>> 0) break;
                            m = p;
                            if (m >>> 0 <= g >>> 0) break;
                            q = o + -1 | 0;
                            m = m + -1 | 0;
                            if ((a[q >> 0] | 0) != (a[m >> 0] | 0)) break;
                            o = q;
                            p = m
                        }
                        m = o;
                        s = m - n | 0;
                        o = l + 1 | 0;
                        if (s >>> 0 > 14) {
                            a[l >> 0] = -16;
                            r = m + 241 | 0;
                            q = n + 14 - m | 0;
                            m = m + 240 + ((q | 0) > -255 ? q : -255) - n | 0;
                            q = (m >>> 0) % 255 | 0;
                            i = s + -15 | 0;
                            while (1) {
                                if ((i | 0) <= 254) break;
                                j = o;
                                a[j >> 0] = -1;
                                i = i + -255 | 0;
                                o = j + 1 | 0
                            }
                            a[o >> 0] = r - n + (q - m);
                            o = o + 1 | 0
                        } else a[l >> 0] = s << 4;
                        m = o + s | 0;
                        while (1) {
                            y = n;
                            w = y;
                            w = d[w >> 0] | d[w + 1 >> 0] << 8 | d[w + 2 >> 0] << 16 | d[w + 3 >> 0] << 24;
                            y = y + 4 | 0;
                            y = d[y >> 0] | d[y + 1 >> 0] << 8 | d[y + 2 >> 0] << 16 | d[y + 3 >> 0] << 24;
                            j = o;
                            x = j;
                            a[x >> 0] = w;
                            a[x + 1 >> 0] = w >> 8;
                            a[x + 2 >> 0] = w >> 16;
                            a[x + 3 >> 0] = w >> 24;
                            j = j + 4 | 0;
                            a[j >> 0] = y;
                            a[j + 1 >> 0] = y >> 8;
                            a[j + 2 >> 0] = y >> 16;
                            a[j + 3 >> 0] = y >> 24;
                            o = o + 8 | 0;
                            if (o >>> 0 >= m >>> 0) {
                                n = t;
                                break
                            } else n = n + 8 | 0
                        }
                        while (1) {
                            r = n;
                            o = n - p & 65535;
                            a[m >> 0] = o;
                            a[m + 1 >> 0] = o >> 8;
                            m = m + 2 | 0;
                            o = Va(r + 4 | 0, p + 4 | 0, A) | 0;
                            r = r + (o + 4) | 0;
                            n = d[l >> 0] | 0;
                            if (o >>> 0 > 14) {
                                a[l >> 0] = n + 15;
                                p = o + -15 | 0;
                                n = 14 - o | 0;
                                n = o + 495 + (n >>> 0 > 4294966786 ? n : -510) | 0;
                                o = (n >>> 0) % 510 | 0;
                                l = p;
                                while (1) {
                                    if (l >>> 0 <= 509) break;
                                    j = m;
                                    a[j >> 0] = -1;
                                    a[j + 1 >> 0] = -1;
                                    m = j + 2 | 0;
                                    l = l + -510 | 0
                                }
                                l = p + (o - n) | 0;
                                if (l >>> 0 > 254) {
                                    a[m >> 0] = -1;
                                    l = l + -255 | 0;
                                    m = m + 1 | 0
                                }
                                j = m;
                                a[j >> 0] = l;
                                l = j + 1 | 0
                            } else {
                                a[l >> 0] = n + o;
                                l = m
                            }
                            n = r;
                            if (n >>> 0 > z >>> 0) break a;
                            Ua(n + -2 | 0, f, 2, g);
                            m = r;
                            p = g + (e[f + ((_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 19 << 1) >> 1] | 0) | 0;
                            Ua(n, f, 2, g);
                            o = p;
                            if ((o + 65535 | 0) >>> 0 < n >>> 0) break;
                            if ((d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0) != (d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0)) break;
                            a[l >> 0] = 0;
                            n = r;
                            m = l + 1 | 0
                        }
                        m = n + 1 | 0;
                        n = r;
                        o = m;
                        m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 19
                    }
                } while (0);
                i = r;
                q = k - r | 0;
                if (q >>> 0 > 14) {
                    p = l;
                    a[p >> 0] = -16;
                    o = k + 241 | 0;
                    m = r + 14 - k | 0;
                    k = k + (m >>> 0 > 4294967041 ? m : -255) + 240 - r | 0;
                    m = (k >>> 0) % 255 | 0;
                    n = q + -15 | 0;
                    while (1) {
                        l = p + 1 | 0;
                        if (n >>> 0 <= 254) break;
                        a[l >> 0] = -1;
                        p = l;
                        n = n + -255 | 0
                    }
                    a[l >> 0] = o - r + (m - k);
                    k = p + 2 | 0
                } else {
                    k = l;
                    a[k >> 0] = q << 4;
                    l = k;
                    k = k + 1 | 0
                }
                gb(k | 0, i | 0, q | 0) | 0;
                h = l + (q + 1) - h | 0;
                return h | 0
            } else {
                if (o) {
                    h = 0;
                    return h | 0
                }
                Ua(g, f, 0, g);
                m = g + 1 | 0;
                o = m;
                m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                b:while (1) {
                    r = 64;
                    s = 1;
                    while (1) {
                        t = o;
                        i = o;
                        o = o + s | 0;
                        j = r;
                        r = r + 1 | 0;
                        s = j >>> 6;
                        if (o >>> 0 > z >>> 0) {
                            r = n;
                            break b
                        }
                        p = c[f + (m << 2) >> 2] | 0;
                        q = m;
                        m = (_(d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        c[f + (q << 2) >> 2] = t;
                        q = p;
                        if ((q + 65535 | 0) >>> 0 < i >>> 0) continue;
                        if ((d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24 | 0) == (d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24 | 0)) break
                    }
                    i = n;
                    while (1) {
                        m = t;
                        if (m >>> 0 <= i >>> 0) break;
                        o = p;
                        if (o >>> 0 <= g >>> 0) break;
                        q = m + -1 | 0;
                        m = o + -1 | 0;
                        if ((a[q >> 0] | 0) != (a[m >> 0] | 0)) break;
                        t = q;
                        p = m
                    }
                    s = t - n | 0;
                    o = l + 1 | 0;
                    if (s >>> 0 > 14) {
                        a[l >> 0] = -16;
                        m = t + 241 | 0;
                        q = n + 14 - t | 0;
                        q = t + 240 + ((q | 0) > -255 ? q : -255) - n | 0;
                        i = (q >>> 0) % 255 | 0;
                        r = s + -15 | 0;
                        while (1) {
                            if ((r | 0) <= 254) break;
                            j = o;
                            a[j >> 0] = -1;
                            r = r + -255 | 0;
                            o = j + 1 | 0
                        }
                        a[o >> 0] = m - n + (i - q);
                        o = o + 1 | 0
                    } else a[l >> 0] = s << 4;
                    m = o + s | 0;
                    while (1) {
                        y = n;
                        w = y;
                        w = d[w >> 0] | d[w + 1 >> 0] << 8 | d[w + 2 >> 0] << 16 | d[w + 3 >> 0] << 24;
                        y = y + 4 | 0;
                        y = d[y >> 0] | d[y + 1 >> 0] << 8 | d[y + 2 >> 0] << 16 | d[y + 3 >> 0] << 24;
                        j = o;
                        x = j;
                        a[x >> 0] = w;
                        a[x + 1 >> 0] = w >> 8;
                        a[x + 2 >> 0] = w >> 16;
                        a[x + 3 >> 0] = w >> 24;
                        j = j + 4 | 0;
                        a[j >> 0] = y;
                        a[j + 1 >> 0] = y >> 8;
                        a[j + 2 >> 0] = y >> 16;
                        a[j + 3 >> 0] = y >> 24;
                        o = o + 8 | 0;
                        if (o >>> 0 >= m >>> 0) {
                            n = t;
                            break
                        } else n = n + 8 | 0
                    }
                    while (1) {
                        r = n;
                        o = n - p & 65535;
                        a[m >> 0] = o;
                        a[m + 1 >> 0] = o >> 8;
                        m = m + 2 | 0;
                        o = Va(r + 4 | 0, p + 4 | 0, A) | 0;
                        r = r + (o + 4) | 0;
                        n = d[l >> 0] | 0;
                        if (o >>> 0 > 14) {
                            a[l >> 0] = n + 15;
                            p = o + -15 | 0;
                            n = 14 - o | 0;
                            n = o + 495 + (n >>> 0 > 4294966786 ? n : -510) | 0;
                            o = (n >>> 0) % 510 | 0;
                            l = p;
                            while (1) {
                                if (l >>> 0 <= 509) break;
                                j = m;
                                a[j >> 0] = -1;
                                a[j + 1 >> 0] = -1;
                                m = j + 2 | 0;
                                l = l + -510 | 0
                            }
                            l = p + (o - n) | 0;
                            if (l >>> 0 > 254) {
                                a[m >> 0] = -1;
                                l = l + -255 | 0;
                                m = m + 1 | 0
                            }
                            j = m;
                            a[j >> 0] = l;
                            l = j + 1 | 0
                        } else {
                            a[l >> 0] = n + o;
                            l = m
                        }
                        n = r;
                        if (n >>> 0 > z >>> 0) break b;
                        Ua(n + -2 | 0, f, 0, g);
                        m = r;
                        p = c[f + ((_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0;
                        Ua(n, f, 0, g);
                        o = p;
                        if ((o + 65535 | 0) >>> 0 < n >>> 0) break;
                        if ((d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0) != (d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0)) break;
                        a[l >> 0] = 0;
                        n = r;
                        m = l + 1 | 0
                    }
                    m = n + 1 | 0;
                    n = r;
                    o = m;
                    m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                }
                i = r;
                q = k - r | 0;
                if (q >>> 0 > 14) {
                    a[l >> 0] = -16;
                    p = k + 241 | 0;
                    n = r + 14 - k | 0;
                    k = k + (n >>> 0 > 4294967041 ? n : -255) + 240 - r | 0;
                    n = (k >>> 0) % 255 | 0;
                    o = q + -15 | 0;
                    while (1) {
                        m = l + 1 | 0;
                        if (o >>> 0 <= 254) break;
                        a[m >> 0] = -1;
                        l = m;
                        o = o + -255 | 0
                    }
                    a[m >> 0] = p - r + (n - k);
                    k = l + 2 | 0
                } else {
                    k = l;
                    a[k >> 0] = q << 4;
                    m = k;
                    k = k + 1 | 0
                }
                gb(k | 0, i | 0, q | 0) | 0;
                h = m + (q + 1) - h | 0;
                return h | 0
            }
            y = h + j | 0;
            if (!q) {
                if (o) {
                    h = 0;
                    return h | 0
                }
                Ua(g, f, 0, g);
                m = g + 1 | 0;
                o = m;
                m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                c:while (1) {
                    r = 64;
                    s = 1;
                    while (1) {
                        t = o;
                        i = o;
                        o = o + s | 0;
                        w = r;
                        r = r + 1 | 0;
                        s = w >>> 6;
                        if (o >>> 0 > z >>> 0) {
                            x = n;
                            v = l;
                            l = 160;
                            break c
                        }
                        q = c[f + (m << 2) >> 2] | 0;
                        p = m;
                        m = (_(d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        c[f + (p << 2) >> 2] = t;
                        p = q;
                        if ((p + 65535 | 0) >>> 0 < i >>> 0) continue;
                        if ((d[p >> 0] | d[p + 1 >> 0] << 8 | d[p + 2 >> 0] << 16 | d[p + 3 >> 0] << 24 | 0) == (d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24 | 0)) break
                    }
                    i = n;
                    while (1) {
                        m = t;
                        if (m >>> 0 <= i >>> 0) break;
                        o = q;
                        if (o >>> 0 <= g >>> 0) break;
                        p = m + -1 | 0;
                        m = o + -1 | 0;
                        if ((a[p >> 0] | 0) != (a[m >> 0] | 0)) break;
                        t = p;
                        q = m
                    }
                    s = t - n | 0;
                    m = l + 1 | 0;
                    if ((l + (s + 8 + ((s >>> 0) / 255 | 0) + 1) | 0) >>> 0 > y >>> 0) {
                        u = 0;
                        l = 168;
                        break
                    }
                    if (s >>> 0 > 14) {
                        a[l >> 0] = -16;
                        o = t + 241 | 0;
                        p = n + 14 - t | 0;
                        p = t + 240 + ((p | 0) > -255 ? p : -255) - n | 0;
                        i = (p >>> 0) % 255 | 0;
                        r = s + -15 | 0;
                        while (1) {
                            if ((r | 0) <= 254) break;
                            w = m;
                            a[w >> 0] = -1;
                            r = r + -255 | 0;
                            m = w + 1 | 0
                        }
                        a[m >> 0] = o - n + (i - p);
                        m = m + 1 | 0
                    } else a[l >> 0] = s << 4;
                    o = m + s | 0;
                    while (1) {
                        s = n;
                        i = s;
                        i = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                        s = s + 4 | 0;
                        s = d[s >> 0] | d[s + 1 >> 0] << 8 | d[s + 2 >> 0] << 16 | d[s + 3 >> 0] << 24;
                        w = m;
                        r = w;
                        a[r >> 0] = i;
                        a[r + 1 >> 0] = i >> 8;
                        a[r + 2 >> 0] = i >> 16;
                        a[r + 3 >> 0] = i >> 24;
                        w = w + 4 | 0;
                        a[w >> 0] = s;
                        a[w + 1 >> 0] = s >> 8;
                        a[w + 2 >> 0] = s >> 16;
                        a[w + 3 >> 0] = s >> 24;
                        m = m + 8 | 0;
                        if (m >>> 0 >= o >>> 0) {
                            n = t;
                            break
                        } else n = n + 8 | 0
                    }
                    while (1) {
                        w = n;
                        m = n - q & 65535;
                        a[o >> 0] = m;
                        a[o + 1 >> 0] = m >> 8;
                        m = o + 2 | 0;
                        p = Va(w + 4 | 0, q + 4 | 0, A) | 0;
                        n = w + (p + 4) | 0;
                        if ((o + ((p >>> 8) + 8) | 0) >>> 0 > y >>> 0) {
                            u = 0;
                            l = 168;
                            break c
                        }
                        o = d[l >> 0] | 0;
                        if (p >>> 0 > 14) {
                            a[l >> 0] = o + 15;
                            q = p + -15 | 0;
                            o = 14 - p | 0;
                            o = p + 495 + (o >>> 0 > 4294966786 ? o : -510) | 0;
                            p = (o >>> 0) % 510 | 0;
                            l = q;
                            while (1) {
                                if (l >>> 0 <= 509) break;
                                w = m;
                                a[w >> 0] = -1;
                                a[w + 1 >> 0] = -1;
                                m = w + 2 | 0;
                                l = l + -510 | 0
                            }
                            l = q + (p - o) | 0;
                            if (l >>> 0 > 254) {
                                a[m >> 0] = -1;
                                l = l + -255 | 0;
                                m = m + 1 | 0
                            }
                            w = m;
                            a[w >> 0] = l;
                            l = w + 1 | 0
                        } else {
                            a[l >> 0] = o + p;
                            l = m
                        }
                        o = n;
                        if (o >>> 0 > z >>> 0) {
                            x = n;
                            v = l;
                            l = 160;
                            break c
                        }
                        Ua(o + -2 | 0, f, 0, g);
                        m = n;
                        q = c[f + ((_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0;
                        Ua(o, f, 0, g);
                        p = q;
                        if ((p + 65535 | 0) >>> 0 < o >>> 0) break;
                        if ((d[p >> 0] | d[p + 1 >> 0] << 8 | d[p + 2 >> 0] << 16 | d[p + 3 >> 0] << 24 | 0) != (d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0)) break;
                        a[l >> 0] = 0;
                        o = l + 1 | 0
                    }
                    m = o + 1 | 0;
                    o = m;
                    m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                }
                if ((l | 0) == 160) {
                    i = x;
                    q = k - x | 0;
                    if ((v - h + q + 1 + (((q + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 > j >>> 0) {
                        h = 0;
                        return h | 0
                    }
                    if (q >>> 0 > 14) {
                        p = v;
                        a[p >> 0] = -16;
                        o = k + 241 | 0;
                        m = x + 14 - k | 0;
                        k = k + (m >>> 0 > 4294967041 ? m : -255) + 240 - x | 0;
                        m = (k >>> 0) % 255 | 0;
                        n = q + -15 | 0;
                        while (1) {
                            l = p + 1 | 0;
                            if (n >>> 0 <= 254) break;
                            a[l >> 0] = -1;
                            p = l;
                            n = n + -255 | 0
                        }
                        a[l >> 0] = o - x + (m - k);
                        k = p + 2 | 0
                    } else {
                        k = v;
                        a[k >> 0] = q << 4;
                        l = k;
                        k = k + 1 | 0
                    }
                    gb(k | 0, i | 0, q | 0) | 0;
                    h = l + (q + 1) - h | 0;
                    return h | 0
                } else if ((l | 0) == 168) return u | 0
            } else {
                if (o) {
                    h = 0;
                    return h | 0
                }
                d:do if ((i | 0) >= 13) {
                    Ua(g, f, 2, g);
                    m = g + 1 | 0;
                    v = g;
                    o = m;
                    m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 19;
                    e:while (1) {
                        r = 64;
                        s = 1;
                        while (1) {
                            q = o + s | 0;
                            s = r >>> 6;
                            if (q >>> 0 > z >>> 0) {
                                w = n;
                                p = l;
                                break d
                            }
                            i = g + (e[f + (m << 1) >> 1] | 0) | 0;
                            x = m;
                            m = (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -1640531535) | 0) >>> 19;
                            b[f + (x << 1) >> 1] = o - v;
                            x = i;
                            if ((d[x >> 0] | d[x + 1 >> 0] << 8 | d[x + 2 >> 0] << 16 | d[x + 3 >> 0] << 24 | 0) == (d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0)) break; else {
                                o = q;
                                r = r + 1 | 0
                            }
                        }
                        r = n;
                        while (1) {
                            u = o;
                            if (o >>> 0 <= r >>> 0) break;
                            m = i;
                            if (m >>> 0 <= g >>> 0) break;
                            q = o + -1 | 0;
                            m = m + -1 | 0;
                            if ((a[q >> 0] | 0) != (a[m >> 0] | 0)) break;
                            o = q;
                            i = m
                        }
                        t = o - n | 0;
                        m = l + 1 | 0;
                        if ((l + (t + 8 + ((t >>> 0) / 255 | 0) + 1) | 0) >>> 0 > y >>> 0) {
                            u = 0;
                            l = 168;
                            break
                        }
                        if (t >>> 0 > 14) {
                            a[l >> 0] = -16;
                            s = o + 241 | 0;
                            q = n + 14 - o | 0;
                            o = o + 240 + ((q | 0) > -255 ? q : -255) - n | 0;
                            q = (o >>> 0) % 255 | 0;
                            r = t + -15 | 0;
                            while (1) {
                                if ((r | 0) <= 254) break;
                                x = m;
                                a[x >> 0] = -1;
                                r = r + -255 | 0;
                                m = x + 1 | 0
                            }
                            a[m >> 0] = s - n + (q - o);
                            m = m + 1 | 0
                        } else a[l >> 0] = t << 4;
                        o = m + t | 0;
                        while (1) {
                            t = n;
                            r = t;
                            r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
                            t = t + 4 | 0;
                            t = d[t >> 0] | d[t + 1 >> 0] << 8 | d[t + 2 >> 0] << 16 | d[t + 3 >> 0] << 24;
                            x = m;
                            s = x;
                            a[s >> 0] = r;
                            a[s + 1 >> 0] = r >> 8;
                            a[s + 2 >> 0] = r >> 16;
                            a[s + 3 >> 0] = r >> 24;
                            x = x + 4 | 0;
                            a[x >> 0] = t;
                            a[x + 1 >> 0] = t >> 8;
                            a[x + 2 >> 0] = t >> 16;
                            a[x + 3 >> 0] = t >> 24;
                            m = m + 8 | 0;
                            if (m >>> 0 >= o >>> 0) {
                                n = u;
                                break
                            } else n = n + 8 | 0
                        }
                        while (1) {
                            x = n;
                            m = n - i & 65535;
                            a[o >> 0] = m;
                            a[o + 1 >> 0] = m >> 8;
                            m = o + 2 | 0;
                            q = Va(x + 4 | 0, i + 4 | 0, A) | 0;
                            n = x + (q + 4) | 0;
                            if ((o + ((q >>> 8) + 8) | 0) >>> 0 > y >>> 0) {
                                u = 0;
                                l = 168;
                                break e
                            }
                            o = d[l >> 0] | 0;
                            if (q >>> 0 > 14) {
                                a[l >> 0] = o + 15;
                                i = q + -15 | 0;
                                o = 14 - q | 0;
                                o = q + 495 + (o >>> 0 > 4294966786 ? o : -510) | 0;
                                q = (o >>> 0) % 510 | 0;
                                l = i;
                                while (1) {
                                    if (l >>> 0 <= 509) break;
                                    x = m;
                                    a[x >> 0] = -1;
                                    a[x + 1 >> 0] = -1;
                                    m = x + 2 | 0;
                                    l = l + -510 | 0
                                }
                                l = i + (q - o) | 0;
                                if (l >>> 0 > 254) {
                                    a[m >> 0] = -1;
                                    l = l + -255 | 0;
                                    m = m + 1 | 0
                                }
                                x = m;
                                a[x >> 0] = l;
                                l = x + 1 | 0
                            } else {
                                a[l >> 0] = o + q;
                                l = m
                            }
                            m = n;
                            if (m >>> 0 > z >>> 0) {
                                w = n;
                                p = l;
                                break d
                            }
                            Ua(m + -2 | 0, f, 2, g);
                            o = n;
                            i = g + (e[f + ((_(d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24, -1640531535) | 0) >>> 19 << 1) >> 1] | 0) | 0;
                            Ua(m, f, 2, g);
                            q = i;
                            if ((q + 65535 | 0) >>> 0 < m >>> 0) break;
                            if ((d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24 | 0) != (d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0)) break;
                            a[l >> 0] = 0;
                            o = l + 1 | 0
                        }
                        m = m + 1 | 0;
                        o = m;
                        m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 19
                    }
                    if ((l | 0) == 168) return u | 0
                } else {
                    w = n;
                    p = l
                } while (0);
                i = w;
                q = k - w | 0;
                if ((p - h + q + 1 + (((q + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 > j >>> 0) {
                    h = 0;
                    return h | 0
                }
                if (q >>> 0 > 14) {
                    a[p >> 0] = -16;
                    o = k + 241 | 0;
                    m = w + 14 - k | 0;
                    k = k + (m >>> 0 > 4294967041 ? m : -255) + 240 - w | 0;
                    m = (k >>> 0) % 255 | 0;
                    n = q + -15 | 0;
                    while (1) {
                        l = p + 1 | 0;
                        if (n >>> 0 <= 254) break;
                        a[l >> 0] = -1;
                        p = l;
                        n = n + -255 | 0
                    }
                    a[l >> 0] = o - w + (m - k);
                    k = p + 2 | 0
                } else {
                    k = p;
                    a[k >> 0] = q << 4;
                    l = k;
                    k = k + 1 | 0
                }
                gb(k | 0, i | 0, q | 0) | 0;
                h = l + (q + 1) - h | 0;
                return h | 0
            }
            return 0
        }

        function Pa(b, e, f, g, h, i) {
            b = b | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0,
                y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
            G = e;
            j = f;
            F = b + 16392 | 0;
            n = c[F >> 2] | 0;
            I = b + 16400 | 0;
            o = c[I >> 2] | 0;
            p = n + o | 0;
            k = n;
            if (c[b + 16388 >> 2] | 0) {
                g = 0;
                return g | 0
            }
            H = b + 16384 | 0;
            i = c[H >> 2] | 0;
            if (i >>> 0 > 2147483648 ? 1 : i >>> 0 > ((o | 0) != 0 & p >>> 0 < e >>> 0 ? p : G) >>> 0) {
                i = i + -65536 | 0;
                k = 0;
                while (1) {
                    if ((k | 0) == 4096) break;
                    E = b + (k << 2) | 0;
                    D = c[E >> 2] | 0;
                    c[E >> 2] = D >>> 0 < i >>> 0 ? 0 : D - i | 0;
                    k = k + 1 | 0
                }
                c[H >> 2] = 65536;
                i = c[I >> 2] | 0;
                if (i >>> 0 > 65536) {
                    c[I >> 2] = 65536;
                    i = 65536
                }
                k = n + (o - i) | 0;
                c[F >> 2] = k;
                m = k;
                r = 65536;
                l = i
            } else {
                m = n;
                r = i;
                l = o
            }
            i = e + g | 0;
            if (i >>> 0 > m >>> 0 & i >>> 0 < p >>> 0) {
                k = p - i | 0;
                if (k >>> 0 > 65536) {
                    k = 65536;
                    l = 65536
                } else {
                    l = k;
                    E = l >>> 0 < 4;
                    k = E ? 0 : l;
                    l = E ? 0 : l
                }
                c[I >> 2] = l;
                E = n + (o - k) | 0;
                c[F >> 2] = E;
                l = k;
                k = E
            }
            m = l >>> 0 < 65536 & l >>> 0 < r >>> 0;
            if ((p | 0) == (e | 0)) {
                t = e + (0 - l) | 0;
                q = e;
                x = e + (g + -12) | 0;
                y = e + (g + -5) | 0;
                z = f + h | 0;
                k = g >>> 0 > 2113929216;
                a:do if (m) if (!k) {
                    u = e + (0 - r) | 0;
                    v = t;
                    b:do if ((g | 0) >= 13) {
                        w = u;
                        Ua(e, b, 1, w);
                        k = e + 1 | 0;
                        l = k;
                        k = (_(d[k >> 0] | d[k + 1 >> 0] << 8 | d[k + 2 >> 0] << 16 | d[k + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        while (1) {
                            p = 64;
                            r = 1;
                            while (1) {
                                m = l + r | 0;
                                G = p;
                                p = p + 1 | 0;
                                r = G >>> 6;
                                if (m >>> 0 > x >>> 0) break b;
                                n = w + (c[b + (k << 2) >> 2] | 0) | 0;
                                G = k;
                                k = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                                c[b + (G << 2) >> 2] = l - u;
                                if (n >>> 0 < t >>> 0) {
                                    l = m;
                                    continue
                                }
                                o = n;
                                if ((o + 65535 | 0) >>> 0 < l >>> 0) {
                                    l = m;
                                    continue
                                }
                                if ((d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0) == (d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24 | 0)) break; else l = m
                            }
                            o = q;
                            p = v;
                            while (1) {
                                s = l;
                                if (l >>> 0 <= o >>> 0) break;
                                k = n;
                                if (k >>> 0 <= p >>> 0) break;
                                m = l + -1 | 0;
                                k = k + -1 | 0;
                                if ((a[m >> 0] | 0) != (a[k >> 0] | 0)) break;
                                l = m;
                                n = k
                            }
                            r = l - q | 0;
                            k = j + 1 | 0;
                            if ((j + (r + 8 + ((r >>> 0) / 255 | 0) + 1) | 0) >>> 0 > z >>> 0) {
                                i = 0;
                                break a
                            }
                            if (r >>> 0 > 14) {
                                a[j >> 0] = -16;
                                p = l + 241 | 0;
                                m = q + 14 - l | 0;
                                l = l + 240 + ((m | 0) > -255 ? m : -255) - q | 0;
                                m = (l >>> 0) % 255 | 0;
                                o = r + -15 | 0;
                                while (1) {
                                    if ((o | 0) <= 254) break;
                                    G = k;
                                    a[G >> 0] = -1;
                                    o = o + -255 | 0;
                                    k = G + 1 | 0
                                }
                                a[k >> 0] = p - q + (m - l);
                                k = k + 1 | 0
                            } else a[j >> 0] = r << 4;
                            l = k + r | 0;
                            while (1) {
                                F = q;
                                E = F;
                                E = d[E >> 0] | d[E + 1 >> 0] << 8 | d[E + 2 >> 0] << 16 | d[E + 3 >> 0] << 24;
                                F = F + 4 | 0;
                                F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                                G = k;
                                e = G;
                                a[e >> 0] = E;
                                a[e + 1 >> 0] = E >> 8;
                                a[e + 2 >> 0] = E >> 16;
                                a[e + 3 >> 0] = E >> 24;
                                G = G + 4 | 0;
                                a[G >> 0] = F;
                                a[G + 1 >> 0] = F >> 8;
                                a[G + 2 >> 0] = F >> 16;
                                a[G + 3 >> 0] = F >> 24;
                                k = k + 8 | 0;
                                if (k >>> 0 >= l >>> 0) {
                                    q = s;
                                    break
                                } else q = q + 8 | 0
                            }
                            while (1) {
                                G = q;
                                k = q - n & 65535;
                                a[l >> 0] = k;
                                a[l + 1 >> 0] = k >> 8;
                                k = l + 2 | 0;
                                m = Va(G + 4 | 0, n + 4 | 0, y) | 0;
                                q = G + (m + 4) | 0;
                                if ((l + ((m >>> 8) + 8) | 0) >>> 0 > z >>> 0) {
                                    i = 0;
                                    break a
                                }
                                l = d[j >> 0] | 0;
                                if (m >>> 0 > 14) {
                                    a[j >> 0] = l + 15;
                                    n = m + -15 | 0;
                                    l = 14 - m | 0;
                                    l = m + 495 + (l >>> 0 > 4294966786 ? l : -510) | 0;
                                    m = (l >>> 0) % 510 | 0;
                                    j = n;
                                    while (1) {
                                        if (j >>> 0 <= 509) break;
                                        G = k;
                                        a[G >> 0] = -1;
                                        a[G + 1 >> 0] = -1;
                                        k = G + 2 | 0;
                                        j = j + -510 | 0
                                    }
                                    j = n + (m - l) | 0;
                                    if (j >>> 0 > 254) {
                                        a[k >> 0] = -1;
                                        j = j + -255 | 0;
                                        k = k + 1 | 0
                                    }
                                    G = k;
                                    a[G >> 0] = j;
                                    j = G + 1 | 0
                                } else {
                                    a[j >> 0] = l + m;
                                    j = k
                                }
                                k = q;
                                if (k >>> 0 > x >>> 0) break b;
                                Ua(k + -2 | 0, b, 1, w);
                                l = q;
                                n = w + (c[b + ((_(d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0) | 0;
                                Ua(k, b, 1, w);
                                m = n;
                                if (m >>> 0 < t >>> 0 | (m + 65535 | 0) >>> 0 < k >>> 0) break;
                                if ((d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0) != (d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24 | 0)) break;
                                a[j >> 0] = 0;
                                l = j + 1 | 0
                            }
                            k = k + 1 | 0;
                            l = k;
                            k = (_(d[k >> 0] | d[k + 1 >> 0] << 8 | d[k + 2 >> 0] << 16 | d[k + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                        }
                    } while (0);
                    p = q;
                    o = i - q | 0;
                    if ((j - f + o + 1 + (((o + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 <= h >>> 0) {
                        if (o >>> 0 > 14) {
                            n = j;
                            a[n >> 0] = -16;
                            m = i + 241 | 0;
                            k = q + 14 - i | 0;
                            i = i + (k >>> 0 > 4294967041 ? k : -255) + 240 - q | 0;
                            k = (i >>> 0) % 255 | 0;
                            l = o + -15 | 0;
                            while (1) {
                                j = n + 1 | 0;
                                if (l >>> 0 <= 254) break;
                                a[j >> 0] = -1;
                                n = j;
                                l = l + -255 | 0
                            }
                            a[j >> 0] = m - q + (k - i);
                            i = n + 2 | 0
                        } else {
                            i = j;
                            a[i >> 0] = o << 4;
                            j = i;
                            i = i + 1 | 0
                        }
                        gb(i | 0, p | 0, o | 0) | 0;
                        i = j + (o + 1) - f | 0
                    } else i = 0
                } else i = 0; else if (!k) {
                    v = e + (0 - r) | 0;
                    c:do if ((g | 0) >= 13) {
                        u = v;
                        Ua(e, b, 1, u);
                        k = e + 1 | 0;
                        l = k;
                        k = (_(d[k >> 0] | d[k + 1 >> 0] << 8 | d[k + 2 >> 0] << 16 | d[k + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        while (1) {
                            p = 64;
                            r = 1;
                            while (1) {
                                m = l + r | 0;
                                G = p;
                                p = p + 1 | 0;
                                r = G >>> 6;
                                if (m >>> 0 > x >>> 0) break c;
                                n = u + (c[b + (k << 2) >> 2] | 0) | 0;
                                o = k;
                                k = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                                c[b + (o << 2) >> 2] = l - v;
                                o = n;
                                if ((o + 65535 | 0) >>> 0 < l >>> 0) {
                                    l = m;
                                    continue
                                }
                                if ((d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24 | 0) == (d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24 | 0)) break; else l = m
                            }
                            o = q;
                            p = t;
                            while (1) {
                                s = l;
                                if (l >>> 0 <= o >>> 0) break;
                                k = n;
                                if (k >>> 0 <= p >>> 0) break;
                                m = l + -1 | 0;
                                k = k + -1 | 0;
                                if ((a[m >> 0] | 0) != (a[k >> 0] | 0)) break;
                                l = m;
                                n = k
                            }
                            k = l;
                            r = k - q | 0;
                            l = j + 1 | 0;
                            if ((j + (r + 8 + ((r >>> 0) / 255 | 0) + 1) | 0) >>> 0 > z >>> 0) {
                                i = 0;
                                break a
                            }
                            if (r >>> 0 > 14) {
                                a[j >> 0] = -16;
                                p = k + 241 | 0;
                                m = q + 14 - k | 0;
                                k = k + 240 + ((m | 0) > -255 ? m : -255) - q | 0;
                                m = (k >>> 0) % 255 | 0;
                                o = r + -15 | 0;
                                while (1) {
                                    if ((o | 0) <= 254) break;
                                    G = l;
                                    a[G >> 0] = -1;
                                    o = o + -255 | 0;
                                    l = G + 1 | 0
                                }
                                a[l >> 0] = p - q + (m - k);
                                l = l + 1 | 0
                            } else a[j >> 0] = r << 4;
                            m = l + r | 0;
                            k = q;
                            while (1) {
                                F = k;
                                E = F;
                                E = d[E >> 0] | d[E + 1 >> 0] << 8 | d[E + 2 >> 0] << 16 | d[E + 3 >> 0] << 24;
                                F = F + 4 | 0;
                                F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                                G = l;
                                e = G;
                                a[e >> 0] = E;
                                a[e + 1 >> 0] = E >> 8;
                                a[e + 2 >> 0] = E >> 16;
                                a[e + 3 >> 0] = E >> 24;
                                G = G + 4 | 0;
                                a[G >> 0] = F;
                                a[G + 1 >> 0] = F >> 8;
                                a[G + 2 >> 0] = F >> 16;
                                a[G + 3 >> 0] = F >> 24;
                                l = l + 8 | 0;
                                if (l >>> 0 >= m >>> 0) {
                                    q = s;
                                    l = m;
                                    break
                                } else k = k + 8 | 0
                            }
                            while (1) {
                                G = q;
                                k = q - n & 65535;
                                a[l >> 0] = k;
                                a[l + 1 >> 0] = k >> 8;
                                k = l + 2 | 0;
                                m = Va(G + 4 | 0, n + 4 | 0, y) | 0;
                                q = G + (m + 4) | 0;
                                if ((l + ((m >>> 8) + 8) | 0) >>> 0 > z >>> 0) {
                                    i = 0;
                                    break a
                                }
                                l = d[j >> 0] | 0;
                                if (m >>> 0 > 14) {
                                    a[j >> 0] = l + 15;
                                    n = m + -15 | 0;
                                    l = 14 - m | 0;
                                    l = m + 495 + (l >>> 0 > 4294966786 ? l : -510) | 0;
                                    m = (l >>> 0) % 510 | 0;
                                    j = n;
                                    while (1) {
                                        if (j >>> 0 <= 509) break;
                                        G = k;
                                        a[G >> 0] = -1;
                                        a[G + 1 >> 0] = -1;
                                        k = G + 2 | 0;
                                        j = j + -510 | 0
                                    }
                                    j = n + (m - l) | 0;
                                    if (j >>> 0 > 254) {
                                        a[k >> 0] = -1;
                                        j = j + -255 | 0;
                                        k = k + 1 | 0
                                    }
                                    G = k;
                                    a[G >> 0] = j;
                                    j = G + 1 | 0
                                } else {
                                    a[j >> 0] = l + m;
                                    j = k
                                }
                                k = q;
                                if (k >>> 0 > x >>> 0) break c;
                                Ua(k + -2 | 0, b, 1, u);
                                l = q;
                                n = u + (c[b + ((_(d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0) | 0;
                                Ua(k, b, 1, u);
                                m = n;
                                if ((m + 65535 | 0) >>> 0 < k >>> 0) break;
                                if ((d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0) != (d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24 | 0)) break;
                                a[j >> 0] = 0;
                                l = j + 1 | 0
                            }
                            k = k + 1 | 0;
                            l = k;
                            k = (_(d[k >> 0] | d[k + 1 >> 0] << 8 | d[k + 2 >> 0] << 16 | d[k + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                        }
                    } while (0);
                    p = q;
                    o = i - q | 0;
                    if ((j - f + o + 1 + (((o + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 <= h >>> 0) {
                        if (o >>> 0 > 14) {
                            a[j >> 0] = -16;
                            n = i + 241 | 0;
                            l = q + 14 - i | 0;
                            i = i + (l >>> 0 > 4294967041 ? l : -255) + 240 - q | 0;
                            l = (i >>> 0) % 255 | 0;
                            m = o + -15 | 0;
                            while (1) {
                                k = j + 1 | 0;
                                if (m >>> 0 <= 254) break;
                                a[k >> 0] = -1;
                                j = k;
                                m = m + -255 | 0
                            }
                            a[k >> 0] = n - q + (l - i);
                            i = j + 2 | 0
                        } else {
                            i = j;
                            a[i >> 0] = o << 4;
                            k = i;
                            i = i + 1 | 0
                        }
                        gb(i | 0, p | 0, o | 0) | 0;
                        i = k + (o + 1) - f | 0
                    } else i = 0
                } else i = 0; while (0);
                c[I >> 2] = (c[I >> 2] | 0) + g;
                c[H >> 2] = (c[H >> 2] | 0) + g;
                g = i;
                return g | 0
            }
            d:do if (m) {
                E = e + (0 - l) | 0;
                D = k;
                y = D + l | 0;
                q = e;
                z = y - q | 0;
                A = e + (g + -12) | 0;
                B = e + (g + -5) | 0;
                C = f + h | 0;
                if (g >>> 0 <= 2113929216) {
                    w = e + (0 - r) | 0;
                    e:do if ((g | 0) >= 13) {
                        x = w;
                        Ua(e, b, 1, x);
                        l = e + 1 | 0;
                        m = l;
                        l = (_(d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        while (1) {
                            s = 64;
                            t = 1;
                            while (1) {
                                p = m + t | 0;
                                v = s;
                                s = s + 1 | 0;
                                t = v >>> 6;
                                if (p >>> 0 > A >>> 0) break e;
                                o = x + (c[b + (l << 2) >> 2] | 0) | 0;
                                v = o >>> 0 < e >>> 0;
                                n = v ? z : 0;
                                v = v ? k : G;
                                u = l;
                                l = (_(d[p >> 0] | d[p + 1 >> 0] << 8 | d[p + 2 >> 0] << 16 | d[p + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                                c[b + (u << 2) >> 2] = m - w;
                                if (o >>> 0 < E >>> 0) {
                                    m = p;
                                    continue
                                }
                                r = o;
                                if ((r + 65535 | 0) >>> 0 < m >>> 0) {
                                    m = p;
                                    continue
                                }
                                u = r + n | 0;
                                if ((d[u >> 0] | d[u + 1 >> 0] << 8 | d[u + 2 >> 0] << 16 | d[u + 3 >> 0] << 24 | 0) == (d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24 | 0)) break; else m = p
                            }
                            r = q;
                            s = v;
                            t = n + -1 | 0;
                            while (1) {
                                u = m;
                                if (m >>> 0 <= r >>> 0) break;
                                l = o;
                                if ((l + n | 0) >>> 0 <= s >>> 0) break;
                                p = m + -1 | 0;
                                if ((a[p >> 0] | 0) != (a[l + t >> 0] | 0)) break;
                                m = p;
                                o = l + -1 | 0
                            }
                            t = m - q | 0;
                            l = j + 1 | 0;
                            if ((j + (t + 8 + ((t >>> 0) / 255 | 0) + 1) | 0) >>> 0 > C >>> 0) {
                                j = F;
                                i = 0;
                                break d
                            }
                            if (t >>> 0 > 14) {
                                a[j >> 0] = -16;
                                s = m + 241 | 0;
                                p = q + 14 - m | 0;
                                m = m + 240 + ((p | 0) > -255 ? p : -255) - q | 0;
                                p = (m >>> 0) % 255 | 0;
                                r = t + -15 | 0;
                                while (1) {
                                    if ((r | 0) <= 254) break;
                                    J = l;
                                    a[J >> 0] = -1;
                                    r = r + -255 | 0;
                                    l = J + 1 | 0
                                }
                                a[l >> 0] = s - q + (p - m);
                                l = l + 1 | 0
                            } else a[j >> 0] = t << 4;
                            m = l + t | 0;
                            while (1) {
                                t = q;
                                r = t;
                                r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
                                t = t + 4 | 0;
                                t = d[t >> 0] | d[t + 1 >> 0] << 8 | d[t + 2 >> 0] << 16 | d[t + 3 >> 0] << 24;
                                J = l;
                                s = J;
                                a[s >> 0] = r;
                                a[s + 1 >> 0] = r >> 8;
                                a[s + 2 >> 0] = r >> 16;
                                a[s + 3 >> 0] = r >> 24;
                                J = J + 4 | 0;
                                a[J >> 0] = t;
                                a[J + 1 >> 0] = t >> 8;
                                a[J + 2 >> 0] = t >> 16;
                                a[J + 3 >> 0] = t >> 24;
                                l = l + 8 | 0;
                                if (l >>> 0 >= m >>> 0) {
                                    q = u;
                                    r = v;
                                    s = m;
                                    break
                                } else q = q + 8 | 0
                            }
                            while (1) {
                                p = q;
                                m = o;
                                l = q - o & 65535;
                                a[s >> 0] = l;
                                a[s + 1 >> 0] = l >> 8;
                                l = s + 2 | 0;
                                if ((r | 0) == (D | 0)) {
                                    J = p + (y - (m + n)) | 0;
                                    J = J >>> 0 > B >>> 0 ? B : J;
                                    o = Va(p + 4 | 0, m + (n + 4) | 0, J) | 0;
                                    m = o + 4 | 0;
                                    n = p + m | 0;
                                    if ((n | 0) == (J | 0)) {
                                        J = Va(n, e, B) | 0;
                                        n = p + (m + J) | 0;
                                        o = o + J | 0
                                    }
                                } else {
                                    o = Va(p + 4 | 0, m + 4 | 0, B) | 0;
                                    n = p + (o + 4) | 0
                                }
                                q = n;
                                if ((s + ((o >>> 8) + 8) | 0) >>> 0 > C >>> 0) {
                                    j = F;
                                    i = 0;
                                    break d
                                }
                                m = d[j >> 0] | 0;
                                if (o >>> 0 > 14) {
                                    a[j >> 0] = m + 15;
                                    p = o + -15 | 0;
                                    m = 14 - o | 0;
                                    m = o + 495 + (m >>> 0 > 4294966786 ? m : -510) | 0;
                                    o = (m >>> 0) % 510 | 0;
                                    j = p;
                                    while (1) {
                                        if (j >>> 0 <= 509) break;
                                        J = l;
                                        a[J >> 0] = -1;
                                        a[J + 1 >> 0] = -1;
                                        l = J + 2 | 0;
                                        j = j + -510 | 0
                                    }
                                    j = p + (o - m) | 0;
                                    if (j >>> 0 > 254) {
                                        a[l >> 0] = -1;
                                        j = j + -255 | 0;
                                        l = l + 1 | 0
                                    }
                                    J = l;
                                    a[J >> 0] = j;
                                    j = J + 1 | 0
                                } else {
                                    a[j >> 0] = m + o;
                                    j = l
                                }
                                if (n >>> 0 > A >>> 0) break e;
                                Ua(n + -2 | 0, b, 1, x);
                                o = x + (c[b + ((_(d[n >> 0] | d[n + 1 >> 0] << 8 | d[n + 2 >> 0] << 16 | d[n + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0) | 0;
                                m = o >>> 0 < e >>> 0;
                                p = m ? z : 0;
                                Ua(n, b, 1, x);
                                l = o;
                                if (l >>> 0 < E >>> 0 | (l + 65535 | 0) >>> 0 < n >>> 0) break;
                                J = l + p | 0;
                                if ((d[J >> 0] | d[J + 1 >> 0] << 8 | d[J + 2 >> 0] << 16 | d[J + 3 >> 0] << 24 | 0) != (d[n >> 0] | d[n + 1 >> 0] << 8 | d[n + 2 >> 0] << 16 | d[n + 3 >> 0] << 24 | 0)) break;
                                a[j >> 0] = 0;
                                r = m ? k : G;
                                s = j + 1 | 0;
                                n = p
                            }
                            l = n + 1 | 0;
                            m = l;
                            l = (_(d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                        }
                    } while (0);
                    o = q;
                    p = i - q | 0;
                    if ((j - f + p + 1 + (((p + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 <= h >>> 0) {
                        if (p >>> 0 > 14) {
                            a[j >> 0] = -16;
                            n = i + 241 | 0;
                            l = q + 14 - i | 0;
                            i = i + (l >>> 0 > 4294967041 ? l : -255) + 240 - q | 0;
                            l = (i >>> 0) % 255 | 0;
                            m = p + -15 | 0;
                            while (1) {
                                k = j + 1 | 0;
                                if (m >>> 0 <= 254) break;
                                a[k >> 0] = -1;
                                j = k;
                                m = m + -255 | 0
                            }
                            a[k >> 0] = n - q + (l - i);
                            i = j + 2 | 0
                        } else {
                            i = j;
                            a[i >> 0] = p << 4;
                            k = i;
                            i = i + 1 | 0
                        }
                        gb(i | 0, o | 0, p | 0) | 0;
                        j = F;
                        i = k + (p + 1) - f | 0
                    } else {
                        j = F;
                        i = 0
                    }
                } else {
                    j = F;
                    i = 0
                }
            } else {
                D = k;
                y = D + l | 0;
                l = e;
                z = y - l | 0;
                A = e + (g + -12) | 0;
                B = e + (g + -5) | 0;
                C = f + h | 0;
                if (g >>> 0 <= 2113929216) {
                    w = e + (0 - r) | 0;
                    f:do if ((g | 0) < 13) q = l; else {
                        x = w;
                        Ua(e, b, 1, x);
                        m = e + 1 | 0;
                        n = m;
                        m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                        while (1) {
                            s = 64;
                            t = 1;
                            while (1) {
                                q = n + t | 0;
                                J = s;
                                s = s + 1 | 0;
                                t = J >>> 6;
                                if (q >>> 0 > A >>> 0) {
                                    q = l;
                                    break f
                                }
                                o = x + (c[b + (m << 2) >> 2] | 0) | 0;
                                v = o >>> 0 < e >>> 0;
                                p = v ? z : 0;
                                v = v ? k : G;
                                r = m;
                                m = (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -1640531535) | 0) >>> 20;
                                c[b + (r << 2) >> 2] = n - w;
                                r = o;
                                if ((r + 65535 | 0) >>> 0 < n >>> 0) {
                                    n = q;
                                    continue
                                }
                                J = r + p | 0;
                                if ((d[J >> 0] | d[J + 1 >> 0] << 8 | d[J + 2 >> 0] << 16 | d[J + 3 >> 0] << 24 | 0) == (d[n >> 0] | d[n + 1 >> 0] << 8 | d[n + 2 >> 0] << 16 | d[n + 3 >> 0] << 24 | 0)) break; else n = q
                            }
                            r = l;
                            s = v;
                            t = p + -1 | 0;
                            while (1) {
                                u = n;
                                if (n >>> 0 <= r >>> 0) break;
                                m = o;
                                if ((m + p | 0) >>> 0 <= s >>> 0) break;
                                q = n + -1 | 0;
                                if ((a[q >> 0] | 0) != (a[m + t >> 0] | 0)) break;
                                n = q;
                                o = m + -1 | 0
                            }
                            t = n - l | 0;
                            m = j + 1 | 0;
                            if ((j + (t + 8 + ((t >>> 0) / 255 | 0) + 1) | 0) >>> 0 > C >>> 0) {
                                j = F;
                                i = 0;
                                break d
                            }
                            if (t >>> 0 > 14) {
                                a[j >> 0] = -16;
                                s = n + 241 | 0;
                                q = l + 14 - n | 0;
                                n = n + 240 + ((q | 0) > -255 ? q : -255) - l | 0;
                                q = (n >>> 0) % 255 | 0;
                                r = t + -15 | 0;
                                while (1) {
                                    if ((r | 0) <= 254) break;
                                    J = m;
                                    a[J >> 0] = -1;
                                    r = r + -255 | 0;
                                    m = J + 1 | 0
                                }
                                a[m >> 0] = s - l + (q - n);
                                m = m + 1 | 0
                            } else a[j >> 0] = t << 4;
                            n = m + t | 0;
                            while (1) {
                                E = l;
                                s = E;
                                s = d[s >> 0] | d[s + 1 >> 0] << 8 | d[s + 2 >> 0] << 16 | d[s + 3 >> 0] << 24;
                                E = E + 4 | 0;
                                E = d[E >> 0] | d[E + 1 >> 0] << 8 | d[E + 2 >> 0] << 16 | d[E + 3 >> 0] << 24;
                                J = m;
                                t = J;
                                a[t >> 0] = s;
                                a[t + 1 >> 0] = s >> 8;
                                a[t + 2 >> 0] = s >> 16;
                                a[t + 3 >> 0] = s >> 24;
                                J = J + 4 | 0;
                                a[J >> 0] = E;
                                a[J + 1 >> 0] = E >> 8;
                                a[J + 2 >> 0] = E >> 16;
                                a[J + 3 >> 0] = E >> 24;
                                m = m + 8 | 0;
                                if (m >>> 0 >= n >>> 0) {
                                    l = u;
                                    r = v;
                                    s = n;
                                    break
                                } else l = l + 8 | 0
                            }
                            while (1) {
                                q = l;
                                n = o;
                                m = l - o & 65535;
                                a[s >> 0] = m;
                                a[s + 1 >> 0] = m >> 8;
                                m = s + 2 | 0;
                                if ((r | 0) == (D | 0)) {
                                    J = q + (y - (n + p)) | 0;
                                    J = J >>> 0 > B >>> 0 ? B : J;
                                    o = Va(q + 4 | 0, n + (p + 4) | 0, J) | 0;
                                    l = o + 4 | 0;
                                    n = q + l | 0;
                                    if ((n | 0) == (J | 0)) {
                                        J = Va(n, e, B) | 0;
                                        q = q + (l + J) | 0;
                                        o = o + J | 0
                                    } else q = n
                                } else {
                                    o = Va(q + 4 | 0, n + 4 | 0, B) | 0;
                                    q = q + (o + 4) | 0
                                }
                                l = q;
                                if ((s + ((o >>> 8) + 8) | 0) >>> 0 > C >>> 0) {
                                    j = F;
                                    i = 0;
                                    break d
                                }
                                n = d[j >> 0] | 0;
                                if (o >>> 0 > 14) {
                                    a[j >> 0] = n + 15;
                                    p = o + -15 | 0;
                                    n = 14 - o | 0;
                                    n = o + 495 + (n >>> 0 > 4294966786 ? n : -510) | 0;
                                    o = (n >>> 0) % 510 | 0;
                                    j = p;
                                    while (1) {
                                        if (j >>> 0 <= 509) break;
                                        J = m;
                                        a[J >> 0] = -1;
                                        a[J + 1 >> 0] = -1;
                                        m = J + 2 | 0;
                                        j = j + -510 | 0
                                    }
                                    j = p + (o - n) | 0;
                                    if (j >>> 0 > 254) {
                                        a[m >> 0] = -1;
                                        j = j + -255 | 0;
                                        m = m + 1 | 0
                                    }
                                    J = m;
                                    a[J >> 0] = j;
                                    j = J + 1 | 0
                                } else {
                                    a[j >> 0] = n + o;
                                    j = m
                                }
                                if (q >>> 0 > A >>> 0) {
                                    q = l;
                                    break f
                                }
                                Ua(q + -2 | 0, b, 1, x);
                                o = x + (c[b + ((_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -1640531535) | 0) >>> 20 << 2) >> 2] | 0) | 0;
                                n = o >>> 0 < e >>> 0;
                                p = n ? z : 0;
                                Ua(q, b, 1, x);
                                m = o;
                                if ((m + 65535 | 0) >>> 0 < q >>> 0) break;
                                J = m + p | 0;
                                if ((d[J >> 0] | d[J + 1 >> 0] << 8 | d[J + 2 >> 0] << 16 | d[J + 3 >> 0] << 24 | 0) != (d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24 | 0)) break;
                                a[j >> 0] = 0;
                                r = n ? k : G;
                                s = j + 1 | 0
                            }
                            m = q + 1 | 0;
                            n = m;
                            m = (_(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -1640531535) | 0) >>> 20
                        }
                    } while (0);
                    o = q;
                    p = i - q | 0;
                    if ((j - f + p + 1 + (((p + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 <= h >>> 0) {
                        if (p >>> 0 > 14) {
                            a[j >> 0] = -16;
                            n = i + 241 | 0;
                            l = q + 14 - i | 0;
                            i = i + (l >>> 0 > 4294967041 ? l : -255) + 240 - q | 0;
                            l = (i >>> 0) % 255 | 0;
                            m = p + -15 | 0;
                            while (1) {
                                k = j + 1 | 0;
                                if (m >>> 0 <= 254) break;
                                a[k >> 0] = -1;
                                j = k;
                                m = m + -255 | 0
                            }
                            a[k >> 0] = n - q + (l - i);
                            i = j + 2 | 0
                        } else {
                            i = j;
                            a[i >> 0] = p << 4;
                            k = i;
                            i = i + 1 | 0
                        }
                        gb(i | 0, o | 0, p | 0) | 0;
                        j = F;
                        i = k + (p + 1) - f | 0
                    } else {
                        j = F;
                        i = 0
                    }
                } else {
                    j = F;
                    i = 0
                }
            } while (0);
            c[j >> 2] = G;
            c[I >> 2] = g;
            c[H >> 2] = (c[H >> 2] | 0) + g;
            J = i;
            return J | 0
        }

        function Qa(a, b, c, d, e, f) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            if (d >>> 0 > 2113929216) f = 0; else f = ((d | 0) / 255 | 0) + d + 16 | 0;
            if ((f | 0) > (e | 0)) {
                d = Ya(a, b, c, d, e, 1) | 0;
                return d | 0
            } else {
                d = Ya(a, b, c, d, e, 0) | 0;
                return d | 0
            }
            return 0
        }

        function Ra(a, b, e) {
            a = a | 0;
            b = b | 0;
            e = e | 0;
            var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
            n = b + e | 0;
            f = a;
            f = cb(c[f >> 2] | 0, c[f + 4 >> 2] | 0, e | 0, 0) | 0;
            o = a;
            c[o >> 2] = f;
            c[o + 4 >> 2] = C;
            o = a + 44 | 0;
            f = c[o >> 2] | 0;
            if ((f + e | 0) >>> 0 < 16) {
                gb(a + 28 + f | 0, b | 0, e | 0) | 0;
                c[o >> 2] = (c[o >> 2] | 0) + e;
                return
            }
            if (!f) f = b; else {
                l = a + 28 | 0;
                gb(l + f | 0, b | 0, 16 - f | 0) | 0;
                l = _(d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24, -2048144777) | 0;
                f = a + 12 | 0;
                l = (c[f >> 2] | 0) + l | 0;
                c[f >> 2] = _(l << 13 | l >>> 19, -1640531535) | 0;
                f = a + 32 | 0;
                l = _(d[f >> 0] | d[f + 1 >> 0] << 8 | d[f + 2 >> 0] << 16 | d[f + 3 >> 0] << 24, -2048144777) | 0;
                m = a + 16 | 0;
                l = (c[m >> 2] | 0) + l | 0;
                c[m >> 2] = _(l << 13 | l >>> 19, -1640531535) | 0;
                f = f + 4 | 0;
                f = _(d[f >> 0] | d[f + 1 >> 0] << 8 | d[f + 2 >> 0] << 16 | d[f + 3 >> 0] << 24, -2048144777) | 0;
                m = a + 20 | 0;
                f = (c[m >> 2] | 0) + f | 0;
                c[m >> 2] = _(f << 13 | f >>> 19, -1640531535) | 0;
                m = a + 40 | 0;
                m = _(d[m >> 0] | d[m + 1 >> 0] << 8 | d[m + 2 >> 0] << 16 | d[m + 3 >> 0] << 24, -2048144777) | 0;
                f = a + 24 | 0;
                m = (c[f >> 2] | 0) + m | 0;
                c[f >> 2] = _(m << 13 | m >>> 19, -1640531535) | 0;
                f = b + (16 - (c[o >> 2] | 0)) | 0;
                c[o >> 2] = 0
            }
            g = f;
            m = b + (e + -16) | 0;
            if (f >>> 0 <= m >>> 0) {
                i = a + 12 | 0;
                j = a + 16 | 0;
                k = a + 20 | 0;
                l = a + 24 | 0;
                f = c[i >> 2] | 0;
                b = c[j >> 2] | 0;
                e = c[k >> 2] | 0;
                h = c[l >> 2] | 0;
                do {
                    p = g;
                    p = f + (_(d[p >> 0] | d[p + 1 >> 0] << 8 | d[p + 2 >> 0] << 16 | d[p + 3 >> 0] << 24, -2048144777) | 0) | 0;
                    f = _(p << 13 | p >>> 19, -1640531535) | 0;
                    p = g;
                    q = p + 4 | 0;
                    q = b + (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -2048144777) | 0) | 0;
                    b = _(q << 13 | q >>> 19, -1640531535) | 0;
                    q = p + 8 | 0;
                    q = e + (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -2048144777) | 0) | 0;
                    e = _(q << 13 | q >>> 19, -1640531535) | 0;
                    q = p + 12 | 0;
                    q = h + (_(d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24, -2048144777) | 0) | 0;
                    h = _(q << 13 | q >>> 19, -1640531535) | 0;
                    p = p + 16 | 0;
                    g = p
                } while (p >>> 0 <= m >>> 0);
                c[i >> 2] = f;
                c[j >> 2] = b;
                c[k >> 2] = e;
                c[l >> 2] = h
            }
            f = g;
            if (f >>> 0 >= n >>> 0) return;
            q = n - g | 0;
            gb(a + 28 | 0, f | 0, q | 0) | 0;
            c[o >> 2] = q;
            return
        }

        function Sa(a) {
            a = a | 0;
            var b = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
            b = a + 28 | 0;
            f = b + (c[a + 44 >> 2] | 0) | 0;
            g = a;
            e = c[g >> 2] | 0;
            g = c[g + 4 >> 2] | 0;
            if (g >>> 0 > 0 | (g | 0) == 0 & e >>> 0 > 15) {
                i = c[a + 12 >> 2] | 0;
                h = c[a + 16 >> 2] | 0;
                g = c[a + 20 >> 2] | 0;
                a = c[a + 24 >> 2] | 0;
                a = (i << 1 | i >>> 31) + (h << 7 | h >>> 25) + (g << 12 | g >>> 20) + (a << 18 | a >>> 14) | 0
            } else a = (c[a + 8 >> 2] | 0) + 374761393 | 0;
            e = a + e | 0;
            while (1) {
                a = b + 4 | 0;
                if (a >>> 0 > f >>> 0) break;
                i = b;
                i = e + (_(d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24, -1028477379) | 0) | 0;
                e = _(i << 17 | i >>> 15, 668265263) | 0;
                b = a
            }
            while (1) {
                if (b >>> 0 >= f >>> 0) break;
                i = e + (_(d[b >> 0] | 0, 374761393) | 0) | 0;
                e = _(i << 11 | i >>> 21, -1640531535) | 0;
                b = b + 1 | 0
            }
            i = _(e ^ e >>> 15, -2048144777) | 0;
            i = _(i ^ i >>> 13, -1028477379) | 0;
            return i ^ i >>> 16 | 0
        }

        function Ta(b, e, f, g, h, i) {
            b = b | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0,
                y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
            j = b;
            D = e;
            if (!i) {
                A = b + f | 0;
                B = e + g | 0;
                if (!g) {
                    if ((f | 0) == 1) j = (a[b >> 0] | 0) != 0; else j = 1;
                    E = j << 31 >> 31;
                    return E | 0
                }
                x = e + (g + -8) | 0;
                y = e + (g + -5) | 0;
                z = e;
                t = e + (g + -12) | 0;
                u = x;
                v = b + (f + -5) | 0;
                w = b + (f + -8) | 0;
                s = b + (f + -15) | 0;
                g = D;
                a:while (1) {
                    l = j;
                    j = l + 1 | 0;
                    l = d[l >> 0] | 0;
                    k = l >>> 4;
                    if ((k | 0) == 15) {
                        k = 15;
                        do {
                            h = j;
                            D = h + 1 | 0;
                            j = D;
                            h = a[h >> 0] | 0;
                            k = k + (h & 255) | 0
                        } while (D >>> 0 < s >>> 0 & h << 24 >> 24 == -1);
                        if ((k | 0) < 0) break
                    }
                    r = g;
                    o = r + k | 0;
                    if (o >>> 0 > t >>> 0) {
                        E = 12;
                        break
                    }
                    f = j;
                    if ((f + k | 0) >>> 0 > w >>> 0) {
                        E = 12;
                        break
                    } else {
                        j = g;
                        g = f
                    }
                    while (1) {
                        D = g;
                        C = D;
                        C = d[C >> 0] | d[C + 1 >> 0] << 8 | d[C + 2 >> 0] << 16 | d[C + 3 >> 0] << 24;
                        D = D + 4 | 0;
                        D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                        h = j;
                        i = h;
                        a[i >> 0] = C;
                        a[i + 1 >> 0] = C >> 8;
                        a[i + 2 >> 0] = C >> 16;
                        a[i + 3 >> 0] = C >> 24;
                        h = h + 4 | 0;
                        a[h >> 0] = D;
                        a[h + 1 >> 0] = D >> 8;
                        a[h + 2 >> 0] = D >> 16;
                        a[h + 3 >> 0] = D >> 24;
                        j = j + 8 | 0;
                        if (j >>> 0 >= o >>> 0) break; else g = g + 8 | 0
                    }
                    m = f + k | 0;
                    m = k - ((d[m >> 0] | d[m + 1 >> 0] << 8) & 65535) | 0;
                    n = r + m | 0;
                    j = f + (k + 2) | 0;
                    if (n >>> 0 < e >>> 0) break;
                    g = l & 15;
                    if ((g | 0) == 15) {
                        g = 15;
                        do {
                            f = j;
                            if (f >>> 0 > v >>> 0) break a;
                            j = f + 1 | 0;
                            h = a[f >> 0] | 0;
                            g = g + (h & 255) | 0
                        } while (h << 24 >> 24 == -1);
                        if ((g | 0) < 0) break
                    }
                    p = r + (k + (g + 4)) | 0;
                    q = p;
                    g = o - n | 0;
                    if ((g | 0) < 8) {
                        l = c[116 + (g << 2) >> 2] | 0;
                        a[o >> 0] = a[n >> 0] | 0;
                        a[r + (k + 1) >> 0] = a[r + (m + 1) >> 0] | 0;
                        a[r + (k + 2) >> 0] = a[r + (m + 2) >> 0] | 0;
                        a[r + (k + 3) >> 0] = a[r + (m + 3) >> 0] | 0;
                        h = m + (c[148 + (g << 2) >> 2] | 0) | 0;
                        i = r + h | 0;
                        D = r + (k + 4) | 0;
                        i = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                        a[D >> 0] = i;
                        a[D + 1 >> 0] = i >> 8;
                        a[D + 2 >> 0] = i >> 16;
                        a[D + 3 >> 0] = i >> 24;
                        l = h - l | 0
                    } else {
                        h = n;
                        i = h;
                        i = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                        h = h + 4 | 0;
                        h = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                        l = o;
                        D = l;
                        a[D >> 0] = i;
                        a[D + 1 >> 0] = i >> 8;
                        a[D + 2 >> 0] = i >> 16;
                        a[D + 3 >> 0] = i >> 24;
                        l = l + 4 | 0;
                        a[l >> 0] = h;
                        a[l + 1 >> 0] = h >> 8;
                        a[l + 2 >> 0] = h >> 16;
                        a[l + 3 >> 0] = h >> 24;
                        l = m + 8 | 0
                    }
                    f = r + (k + 8) | 0;
                    g = r + l | 0;
                    k = f;
                    if (p >>> 0 <= t >>> 0) {
                        k = f;
                        while (1) {
                            D = g;
                            C = D;
                            C = d[C >> 0] | d[C + 1 >> 0] << 8 | d[C + 2 >> 0] << 16 | d[C + 3 >> 0] << 24;
                            D = D + 4 | 0;
                            D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                            h = k;
                            i = h;
                            a[i >> 0] = C;
                            a[i + 1 >> 0] = C >> 8;
                            a[i + 2 >> 0] = C >> 16;
                            a[i + 3 >> 0] = C >> 24;
                            h = h + 4 | 0;
                            a[h >> 0] = D;
                            a[h + 1 >> 0] = D >> 8;
                            a[h + 2 >> 0] = D >> 16;
                            a[h + 3 >> 0] = D >> 24;
                            k = k + 8 | 0;
                            if (k >>> 0 < p >>> 0) g = g + 8 | 0; else {
                                g = q;
                                continue a
                            }
                        }
                    }
                    if (p >>> 0 > y >>> 0) break;
                    if (f >>> 0 < x >>> 0) {
                        k = f;
                        f = k;
                        while (1) {
                            D = g;
                            C = D;
                            C = d[C >> 0] | d[C + 1 >> 0] << 8 | d[C + 2 >> 0] << 16 | d[C + 3 >> 0] << 24;
                            D = D + 4 | 0;
                            D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                            h = f;
                            i = h;
                            a[i >> 0] = C;
                            a[i + 1 >> 0] = C >> 8;
                            a[i + 2 >> 0] = C >> 16;
                            a[i + 3 >> 0] = C >> 24;
                            h = h + 4 | 0;
                            a[h >> 0] = D;
                            a[h + 1 >> 0] = D >> 8;
                            a[h + 2 >> 0] = D >> 16;
                            a[h + 3 >> 0] = D >> 24;
                            f = f + 8 | 0;
                            if (f >>> 0 >= x >>> 0) break; else g = g + 8 | 0
                        }
                        g = r + (l + (u - k)) | 0;
                        k = u
                    }
                    while (1) {
                        if (k >>> 0 >= p >>> 0) {
                            g = q;
                            continue a
                        }
                        a[k >> 0] = a[g >> 0] | 0;
                        g = g + 1 | 0;
                        k = k + 1 | 0
                    }
                }
                if ((E | 0) == 12) if (!((j + k | 0) != (A | 0) | o >>> 0 > B >>> 0)) {
                    gb(r | 0, j | 0, k | 0) | 0;
                    E = o - z | 0;
                    return E | 0
                }
                E = b - j + -1 | 0;
                return E | 0
            }
            C = h + i | 0;
            if ((C | 0) != (e | 0)) {
                w = b + f | 0;
                x = e + g | 0;
                y = e + (0 - i) | 0;
                z = i >>> 0 < 65536;
                if (!g) {
                    if ((f | 0) == 1) j = (a[b >> 0] | 0) != 0; else j = 1;
                    E = j << 31 >> 31;
                    return E | 0
                }
                A = e + (g + -8) | 0;
                B = e + (g + -5) | 0;
                C = e;
                s = e + (g + -12) | 0;
                t = A;
                u = b + (f + -5) | 0;
                v = b + (f + -8) | 0;
                r = b + (f + -15) | 0;
                l = D;
                b:while (1) {
                    f = j;
                    j = f + 1 | 0;
                    f = d[f >> 0] | 0;
                    k = f >>> 4;
                    if ((k | 0) == 15) {
                        k = 15;
                        do {
                            q = j;
                            p = q + 1 | 0;
                            j = p;
                            q = a[q >> 0] | 0;
                            k = k + (q & 255) | 0
                        } while (p >>> 0 < r >>> 0 & q << 24 >> 24 == -1);
                        if ((k | 0) < 0) break
                    }
                    q = l;
                    p = q + k | 0;
                    if (p >>> 0 > s >>> 0) {
                        E = 107;
                        break
                    }
                    g = j;
                    if ((g + k | 0) >>> 0 > v >>> 0) {
                        E = 107;
                        break
                    } else j = g;
                    while (1) {
                        n = j;
                        F = n;
                        F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                        n = n + 4 | 0;
                        n = d[n >> 0] | d[n + 1 >> 0] << 8 | d[n + 2 >> 0] << 16 | d[n + 3 >> 0] << 24;
                        o = l;
                        m = o;
                        a[m >> 0] = F;
                        a[m + 1 >> 0] = F >> 8;
                        a[m + 2 >> 0] = F >> 16;
                        a[m + 3 >> 0] = F >> 24;
                        o = o + 4 | 0;
                        a[o >> 0] = n;
                        a[o + 1 >> 0] = n >> 8;
                        a[o + 2 >> 0] = n >> 16;
                        a[o + 3 >> 0] = n >> 24;
                        l = l + 8 | 0;
                        if (l >>> 0 >= p >>> 0) break; else j = j + 8 | 0
                    }
                    m = g + k | 0;
                    m = k - ((d[m >> 0] | d[m + 1 >> 0] << 8) & 65535) | 0;
                    o = q + m | 0;
                    j = g + (k + 2) | 0;
                    if (z & o >>> 0 < y >>> 0) break;
                    g = f & 15;
                    if ((g | 0) == 15) {
                        g = 15;
                        do {
                            f = j;
                            if (f >>> 0 > u >>> 0) break b;
                            j = f + 1 | 0;
                            F = a[f >> 0] | 0;
                            g = g + (F & 255) | 0
                        } while (F << 24 >> 24 == -1);
                        if ((g | 0) < 0) break
                    }
                    n = g + 4 | 0;
                    l = q + (k + n) | 0;
                    if (o >>> 0 < e >>> 0) {
                        if (l >>> 0 > B >>> 0) break;
                        g = o;
                        m = C - g | 0;
                        if (n >>> 0 <= m >>> 0) {
                            hb(p | 0, h + (g - C + i) | 0, n | 0) | 0;
                            continue
                        }
                        gb(p | 0, h + (i - m) | 0, m | 0) | 0;
                        f = q + (k + m) | 0;
                        l = f;
                        g = n - m | 0;
                        if (g >>> 0 <= (l - C | 0) >>> 0) {
                            gb(f | 0, e | 0, g | 0) | 0;
                            l = q + (k + n) | 0;
                            continue
                        }
                        g = q + (k + n) | 0;
                        f = D;
                        while (1) {
                            k = l;
                            if (k >>> 0 >= g >>> 0) continue b;
                            l = f;
                            a[k >> 0] = a[l >> 0] | 0;
                            f = l + 1 | 0;
                            l = k + 1 | 0
                        }
                    }
                    n = l;
                    g = p - o | 0;
                    if ((g | 0) < 8) {
                        F = c[116 + (g << 2) >> 2] | 0;
                        a[p >> 0] = a[o >> 0] | 0;
                        a[q + (k + 1) >> 0] = a[q + (m + 1) >> 0] | 0;
                        a[q + (k + 2) >> 0] = a[q + (m + 2) >> 0] | 0;
                        a[q + (k + 3) >> 0] = a[q + (m + 3) >> 0] | 0;
                        m = m + (c[148 + (g << 2) >> 2] | 0) | 0;
                        o = q + m | 0;
                        p = q + (k + 4) | 0;
                        o = d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24;
                        a[p >> 0] = o;
                        a[p + 1 >> 0] = o >> 8;
                        a[p + 2 >> 0] = o >> 16;
                        a[p + 3 >> 0] = o >> 24;
                        m = m - F | 0
                    } else {
                        f = o;
                        f = d[f >> 0] | d[f + 1 >> 0] << 8 | d[f + 2 >> 0] << 16 | d[f + 3 >> 0] << 24;
                        o = o + 4 | 0;
                        o = d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24;
                        F = p;
                        p = F;
                        a[p >> 0] = f;
                        a[p + 1 >> 0] = f >> 8;
                        a[p + 2 >> 0] = f >> 16;
                        a[p + 3 >> 0] = f >> 24;
                        F = F + 4 | 0;
                        a[F >> 0] = o;
                        a[F + 1 >> 0] = o >> 8;
                        a[F + 2 >> 0] = o >> 16;
                        a[F + 3 >> 0] = o >> 24;
                        m = m + 8 | 0
                    }
                    f = q + (k + 8) | 0;
                    g = q + m | 0;
                    k = f;
                    if (l >>> 0 <= s >>> 0) {
                        k = f;
                        while (1) {
                            q = g;
                            o = q;
                            o = d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24;
                            q = q + 4 | 0;
                            q = d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24;
                            F = k;
                            p = F;
                            a[p >> 0] = o;
                            a[p + 1 >> 0] = o >> 8;
                            a[p + 2 >> 0] = o >> 16;
                            a[p + 3 >> 0] = o >> 24;
                            F = F + 4 | 0;
                            a[F >> 0] = q;
                            a[F + 1 >> 0] = q >> 8;
                            a[F + 2 >> 0] = q >> 16;
                            a[F + 3 >> 0] = q >> 24;
                            k = k + 8 | 0;
                            if (k >>> 0 < l >>> 0) g = g + 8 | 0; else {
                                l = n;
                                continue b
                            }
                        }
                    }
                    if (l >>> 0 > B >>> 0) break;
                    if (f >>> 0 < A >>> 0) {
                        k = f;
                        f = k;
                        while (1) {
                            p = g;
                            G = p;
                            G = d[G >> 0] | d[G + 1 >> 0] << 8 | d[G + 2 >> 0] << 16 | d[G + 3 >> 0] << 24;
                            p = p + 4 | 0;
                            p = d[p >> 0] | d[p + 1 >> 0] << 8 | d[p + 2 >> 0] << 16 | d[p + 3 >> 0] << 24;
                            F = f;
                            o = F;
                            a[o >> 0] = G;
                            a[o + 1 >> 0] = G >> 8;
                            a[o + 2 >> 0] = G >> 16;
                            a[o + 3 >> 0] = G >> 24;
                            F = F + 4 | 0;
                            a[F >> 0] = p;
                            a[F + 1 >> 0] = p >> 8;
                            a[F + 2 >> 0] = p >> 16;
                            a[F + 3 >> 0] = p >> 24;
                            f = f + 8 | 0;
                            if (f >>> 0 >= A >>> 0) break; else g = g + 8 | 0
                        }
                        g = q + (m + (t - k)) | 0;
                        k = t
                    }
                    while (1) {
                        if (k >>> 0 >= l >>> 0) {
                            l = n;
                            continue b
                        }
                        a[k >> 0] = a[g >> 0] | 0;
                        g = g + 1 | 0;
                        k = k + 1 | 0
                    }
                }
                if ((E | 0) == 107) if (!((j + k | 0) != (w | 0) | p >>> 0 > x >>> 0)) {
                    gb(q | 0, j | 0, k | 0) | 0;
                    G = p - C | 0;
                    return G | 0
                }
                G = b - j + -1 | 0;
                return G | 0
            }
            if ((i | 0) > 65534) {
                A = h + (i + -65536) | 0;
                B = b + f | 0;
                k = i + g | 0;
                z = h + k | 0;
                if (!g) {
                    if ((f | 0) == 1) j = (a[b >> 0] | 0) != 0; else j = 1;
                    G = j << 31 >> 31;
                    return G | 0
                }
                x = h + (k + -8) | 0;
                y = h + (k + -5) | 0;
                t = h + (k + -12) | 0;
                u = x;
                v = b + (f + -5) | 0;
                w = b + (f + -8) | 0;
                s = b + (f + -15) | 0;
                g = D;
                c:while (1) {
                    l = j;
                    j = l + 1 | 0;
                    l = d[l >> 0] | 0;
                    k = l >>> 4;
                    if ((k | 0) == 15) {
                        k = 15;
                        do {
                            G = j;
                            F = G + 1 | 0;
                            j = F;
                            G = a[G >> 0] | 0;
                            k = k + (G & 255) | 0
                        } while (F >>> 0 < s >>> 0 & G << 24 >> 24 == -1);
                        if ((k | 0) < 0) break
                    }
                    r = g;
                    o = r + k | 0;
                    if (o >>> 0 > t >>> 0) {
                        E = 45;
                        break
                    }
                    f = j;
                    if ((f + k | 0) >>> 0 > w >>> 0) {
                        E = 45;
                        break
                    } else {
                        j = g;
                        g = f
                    }
                    while (1) {
                        F = g;
                        e = F;
                        e = d[e >> 0] | d[e + 1 >> 0] << 8 | d[e + 2 >> 0] << 16 | d[e + 3 >> 0] << 24;
                        F = F + 4 | 0;
                        F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                        G = j;
                        h = G;
                        a[h >> 0] = e;
                        a[h + 1 >> 0] = e >> 8;
                        a[h + 2 >> 0] = e >> 16;
                        a[h + 3 >> 0] = e >> 24;
                        G = G + 4 | 0;
                        a[G >> 0] = F;
                        a[G + 1 >> 0] = F >> 8;
                        a[G + 2 >> 0] = F >> 16;
                        a[G + 3 >> 0] = F >> 24;
                        j = j + 8 | 0;
                        if (j >>> 0 >= o >>> 0) break; else g = g + 8 | 0
                    }
                    m = f + k | 0;
                    m = k - ((d[m >> 0] | d[m + 1 >> 0] << 8) & 65535) | 0;
                    n = r + m | 0;
                    j = f + (k + 2) | 0;
                    if (n >>> 0 < A >>> 0) break;
                    g = l & 15;
                    if ((g | 0) == 15) {
                        g = 15;
                        do {
                            f = j;
                            if (f >>> 0 > v >>> 0) break c;
                            j = f + 1 | 0;
                            G = a[f >> 0] | 0;
                            g = g + (G & 255) | 0
                        } while (G << 24 >> 24 == -1);
                        if ((g | 0) < 0) break
                    }
                    p = r + (k + (g + 4)) | 0;
                    q = p;
                    g = o - n | 0;
                    if ((g | 0) < 8) {
                        l = c[116 + (g << 2) >> 2] | 0;
                        a[o >> 0] = a[n >> 0] | 0;
                        a[r + (k + 1) >> 0] = a[r + (m + 1) >> 0] | 0;
                        a[r + (k + 2) >> 0] = a[r + (m + 2) >> 0] | 0;
                        a[r + (k + 3) >> 0] = a[r + (m + 3) >> 0] | 0;
                        G = m + (c[148 + (g << 2) >> 2] | 0) | 0;
                        h = r + G | 0;
                        F = r + (k + 4) | 0;
                        h = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                        a[F >> 0] = h;
                        a[F + 1 >> 0] = h >> 8;
                        a[F + 2 >> 0] = h >> 16;
                        a[F + 3 >> 0] = h >> 24;
                        l = G - l | 0
                    } else {
                        G = n;
                        h = G;
                        h = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                        G = G + 4 | 0;
                        G = d[G >> 0] | d[G + 1 >> 0] << 8 | d[G + 2 >> 0] << 16 | d[G + 3 >> 0] << 24;
                        l = o;
                        F = l;
                        a[F >> 0] = h;
                        a[F + 1 >> 0] = h >> 8;
                        a[F + 2 >> 0] = h >> 16;
                        a[F + 3 >> 0] = h >> 24;
                        l = l + 4 | 0;
                        a[l >> 0] = G;
                        a[l + 1 >> 0] = G >> 8;
                        a[l + 2 >> 0] = G >> 16;
                        a[l + 3 >> 0] = G >> 24;
                        l = m + 8 | 0
                    }
                    f = r + (k + 8) | 0;
                    g = r + l | 0;
                    k = f;
                    if (p >>> 0 <= t >>> 0) {
                        k = f;
                        while (1) {
                            F = g;
                            e = F;
                            e = d[e >> 0] | d[e + 1 >> 0] << 8 | d[e + 2 >> 0] << 16 | d[e + 3 >> 0] << 24;
                            F = F + 4 | 0;
                            F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                            G = k;
                            h = G;
                            a[h >> 0] = e;
                            a[h + 1 >> 0] = e >> 8;
                            a[h + 2 >> 0] = e >> 16;
                            a[h + 3 >> 0] = e >> 24;
                            G = G + 4 | 0;
                            a[G >> 0] = F;
                            a[G + 1 >> 0] = F >> 8;
                            a[G + 2 >> 0] = F >> 16;
                            a[G + 3 >> 0] = F >> 24;
                            k = k + 8 | 0;
                            if (k >>> 0 < p >>> 0) g = g + 8 | 0; else {
                                g = q;
                                continue c
                            }
                        }
                    }
                    if (p >>> 0 > y >>> 0) break;
                    if (f >>> 0 < x >>> 0) {
                        k = f;
                        f = k;
                        while (1) {
                            F = g;
                            e = F;
                            e = d[e >> 0] | d[e + 1 >> 0] << 8 | d[e + 2 >> 0] << 16 | d[e + 3 >> 0] << 24;
                            F = F + 4 | 0;
                            F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                            G = f;
                            h = G;
                            a[h >> 0] = e;
                            a[h + 1 >> 0] = e >> 8;
                            a[h + 2 >> 0] = e >> 16;
                            a[h + 3 >> 0] = e >> 24;
                            G = G + 4 | 0;
                            a[G >> 0] = F;
                            a[G + 1 >> 0] = F >> 8;
                            a[G + 2 >> 0] = F >> 16;
                            a[G + 3 >> 0] = F >> 24;
                            f = f + 8 | 0;
                            if (f >>> 0 >= x >>> 0) break; else g = g + 8 | 0
                        }
                        g = r + (l + (u - k)) | 0;
                        k = u
                    }
                    while (1) {
                        if (k >>> 0 >= p >>> 0) {
                            g = q;
                            continue c
                        }
                        a[k >> 0] = a[g >> 0] | 0;
                        g = g + 1 | 0;
                        k = k + 1 | 0
                    }
                }
                if ((E | 0) == 45) if (!((j + k | 0) != (B | 0) | o >>> 0 > z >>> 0)) {
                    gb(r | 0, j | 0, k | 0) | 0;
                    G = o - C | 0;
                    return G | 0
                }
                G = b - j + -1 | 0;
                return G | 0
            } else {
                A = b + f | 0;
                k = i + g | 0;
                z = h + k | 0;
                if (!g) {
                    if ((f | 0) == 1) j = (a[b >> 0] | 0) != 0; else j = 1;
                    G = j << 31 >> 31;
                    return G | 0
                }
                x = h + (k + -8) | 0;
                y = h + (k + -5) | 0;
                t = h + (k + -12) | 0;
                u = x;
                v = b + (f + -5) | 0;
                w = b + (f + -8) | 0;
                s = b + (f + -15) | 0;
                g = D;
                d:while (1) {
                    l = j;
                    j = l + 1 | 0;
                    l = d[l >> 0] | 0;
                    k = l >>> 4;
                    if ((k | 0) == 15) {
                        k = 15;
                        do {
                            G = j;
                            F = G + 1 | 0;
                            j = F;
                            G = a[G >> 0] | 0;
                            k = k + (G & 255) | 0
                        } while (F >>> 0 < s >>> 0 & G << 24 >> 24 == -1);
                        if ((k | 0) < 0) break
                    }
                    r = g;
                    o = r + k | 0;
                    if (o >>> 0 > t >>> 0) {
                        E = 76;
                        break
                    }
                    f = j;
                    if ((f + k | 0) >>> 0 > w >>> 0) {
                        E = 76;
                        break
                    } else {
                        j = g;
                        g = f
                    }
                    while (1) {
                        F = g;
                        D = F;
                        D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                        F = F + 4 | 0;
                        F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                        G = j;
                        e = G;
                        a[e >> 0] = D;
                        a[e + 1 >> 0] = D >> 8;
                        a[e + 2 >> 0] = D >> 16;
                        a[e + 3 >> 0] = D >> 24;
                        G = G + 4 | 0;
                        a[G >> 0] = F;
                        a[G + 1 >> 0] = F >> 8;
                        a[G + 2 >> 0] = F >> 16;
                        a[G + 3 >> 0] = F >> 24;
                        j = j + 8 | 0;
                        if (j >>> 0 >= o >>> 0) break; else g = g + 8 | 0
                    }
                    m = f + k | 0;
                    m = k - ((d[m >> 0] | d[m + 1 >> 0] << 8) & 65535) | 0;
                    n = r + m | 0;
                    j = f + (k + 2) | 0;
                    if (n >>> 0 < h >>> 0) break;
                    g = l & 15;
                    if ((g | 0) == 15) {
                        g = 15;
                        do {
                            f = j;
                            if (f >>> 0 > v >>> 0) break d;
                            j = f + 1 | 0;
                            G = a[f >> 0] | 0;
                            g = g + (G & 255) | 0
                        } while (G << 24 >> 24 == -1);
                        if ((g | 0) < 0) break
                    }
                    p = r + (k + (g + 4)) | 0;
                    q = p;
                    g = o - n | 0;
                    if ((g | 0) < 8) {
                        l = c[116 + (g << 2) >> 2] | 0;
                        a[o >> 0] = a[n >> 0] | 0;
                        a[r + (k + 1) >> 0] = a[r + (m + 1) >> 0] | 0;
                        a[r + (k + 2) >> 0] = a[r + (m + 2) >> 0] | 0;
                        a[r + (k + 3) >> 0] = a[r + (m + 3) >> 0] | 0;
                        G = m + (c[148 + (g << 2) >> 2] | 0) | 0;
                        e = r + G | 0;
                        F = r + (k + 4) | 0;
                        e = d[e >> 0] | d[e + 1 >> 0] << 8 | d[e + 2 >> 0] << 16 | d[e + 3 >> 0] << 24;
                        a[F >> 0] = e;
                        a[F + 1 >> 0] = e >> 8;
                        a[F + 2 >> 0] = e >> 16;
                        a[F + 3 >> 0] = e >> 24;
                        l = G - l | 0
                    } else {
                        G = n;
                        e = G;
                        e = d[e >> 0] | d[e + 1 >> 0] << 8 | d[e + 2 >> 0] << 16 | d[e + 3 >> 0] << 24;
                        G = G + 4 | 0;
                        G = d[G >> 0] | d[G + 1 >> 0] << 8 | d[G + 2 >> 0] << 16 | d[G + 3 >> 0] << 24;
                        l = o;
                        F = l;
                        a[F >> 0] = e;
                        a[F + 1 >> 0] = e >> 8;
                        a[F + 2 >> 0] = e >> 16;
                        a[F + 3 >> 0] = e >> 24;
                        l = l + 4 | 0;
                        a[l >> 0] = G;
                        a[l + 1 >> 0] = G >> 8;
                        a[l + 2 >> 0] = G >> 16;
                        a[l + 3 >> 0] = G >> 24;
                        l = m + 8 | 0
                    }
                    f = r + (k + 8) | 0;
                    g = r + l | 0;
                    k = f;
                    if (p >>> 0 <= t >>> 0) {
                        k = f;
                        while (1) {
                            F = g;
                            D = F;
                            D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                            F = F + 4 | 0;
                            F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                            G = k;
                            e = G;
                            a[e >> 0] = D;
                            a[e + 1 >> 0] = D >> 8;
                            a[e + 2 >> 0] = D >> 16;
                            a[e + 3 >> 0] = D >> 24;
                            G = G + 4 | 0;
                            a[G >> 0] = F;
                            a[G + 1 >> 0] = F >> 8;
                            a[G + 2 >> 0] = F >> 16;
                            a[G + 3 >> 0] = F >> 24;
                            k = k + 8 | 0;
                            if (k >>> 0 < p >>> 0) g = g + 8 | 0; else {
                                g = q;
                                continue d
                            }
                        }
                    }
                    if (p >>> 0 > y >>> 0) break;
                    if (f >>> 0 < x >>> 0) {
                        k = f;
                        f = k;
                        while (1) {
                            F = g;
                            D = F;
                            D = d[D >> 0] | d[D + 1 >> 0] << 8 | d[D + 2 >> 0] << 16 | d[D + 3 >> 0] << 24;
                            F = F + 4 | 0;
                            F = d[F >> 0] | d[F + 1 >> 0] << 8 | d[F + 2 >> 0] << 16 | d[F + 3 >> 0] << 24;
                            G = f;
                            e = G;
                            a[e >> 0] = D;
                            a[e + 1 >> 0] = D >> 8;
                            a[e + 2 >> 0] = D >> 16;
                            a[e + 3 >> 0] = D >> 24;
                            G = G + 4 | 0;
                            a[G >> 0] = F;
                            a[G + 1 >> 0] = F >> 8;
                            a[G + 2 >> 0] = F >> 16;
                            a[G + 3 >> 0] = F >> 24;
                            f = f + 8 | 0;
                            if (f >>> 0 >= x >>> 0) break; else g = g + 8 | 0
                        }
                        g = r + (l + (u - k)) | 0;
                        k = u
                    }
                    while (1) {
                        if (k >>> 0 >= p >>> 0) {
                            g = q;
                            continue d
                        }
                        a[k >> 0] = a[g >> 0] | 0;
                        g = g + 1 | 0;
                        k = k + 1 | 0
                    }
                }
                if ((E | 0) == 76) if (!((j + k | 0) != (A | 0) | o >>> 0 > z >>> 0)) {
                    gb(r | 0, j | 0, k | 0) | 0;
                    G = o - C | 0;
                    return G | 0
                }
                G = b - j + -1 | 0;
                return G | 0
            }
            return 0
        }

        function Ua(a, e, f, g) {
            a = a | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            var h = 0;
            h = _(d[a >> 0] | d[a + 1 >> 0] << 8 | d[a + 2 >> 0] << 16 | d[a + 3 >> 0] << 24, -1640531535) | 0;
            if ((f | 0) == 2) {
                b[e + (h >>> 19 << 1) >> 1] = a - g;
                return
            }
            h = h >>> 20;
            switch (f | 0) {
                case 0: {
                    c[e + (h << 2) >> 2] = a;
                    return
                }
                case 1: {
                    c[e + (h << 2) >> 2] = a - g;
                    return
                }
                default:
                    return
            }
        }

        function Va(b, c, e) {
            b = b | 0;
            c = c | 0;
            e = e | 0;
            var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
            j = e + -3 | 0;
            h = c;
            i = b;
            while (1) {
                c = i;
                g = h;
                if (i >>> 0 >= j >>> 0) break;
                c = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                f = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                if ((c | 0) != (f | 0)) {
                    k = 5;
                    break
                }
                h = h + 4 | 0;
                i = i + 4 | 0
            }
            if ((k | 0) == 5) {
                b = i + ((ib(c ^ f | 0) | 0) >>> 3) - b | 0;
                return b | 0
            }
            if (i >>> 0 < (e + -1 | 0) >>> 0 ? (d[h >> 0] | d[h + 1 >> 0] << 8) << 16 >> 16 == (d[i >> 0] | d[i + 1 >> 0] << 8) << 16 >> 16 : 0) {
                g = h + 2 | 0;
                c = i + 2 | 0
            }
            f = c;
            if (f >>> 0 < e >>> 0 ? (a[g >> 0] | 0) == (a[f >> 0] | 0) : 0) c = f + 1 | 0;
            b = c - b | 0;
            return b | 0
        }

        function Wa(a, b, d, e, f, g) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            var h = 0;
            if (a & 3) {
                a = 0;
                return a | 0
            }
            db(a | 0, 0, 131072) | 0;
            db(a + 131072 | 0, -1, 131072) | 0;
            c[a + 262168 >> 2] = 65536;
            h = b + -65536 | 0;
            c[a + 262148 >> 2] = h;
            c[a + 262144 >> 2] = b;
            c[a + 262152 >> 2] = h;
            c[a + 262160 >> 2] = 65536;
            c[a + 262164 >> 2] = 65536;
            if (e >>> 0 > 2113929216) h = 0; else h = ((e | 0) / 255 | 0) + e + 16 | 0;
            if ((h | 0) > (f | 0)) {
                a = Xa(a, b, d, e, f, g, 1) | 0;
                return a | 0
            } else {
                a = Xa(a, b, d, e, f, g, 0) | 0;
                return a | 0
            }
            return 0
        }

        function Xa(f, g, h, i, j, k, l) {
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            j = j | 0;
            k = k | 0;
            l = l | 0;
            var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0,
                B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0,
                Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0, ca = 0;
            m = g + i | 0;
            Y = g + (i + -12) | 0;
            $ = g + (i + -5) | 0;
            aa = $;
            ba = h + j | 0;
            W = 1 << ((k | 0) > 16 ? 16 : (k | 0) < 1 ? 9 : k) + -1;
            Q = f + 262144 | 0;
            c[Q >> 2] = (c[Q >> 2] | 0) + i;
            Q = f + 131072 | 0;
            R = f + 262148 | 0;
            S = f + 262152 | 0;
            T = f + 262160 | 0;
            U = f + 262164 | 0;
            V = f + 262168 | 0;
            X = (l | 0) == 0;
            D = g;
            l = g + 1 | 0;
            k = h;
            i = 0;
            n = 0;
            B = 0;
            C = 0;
            A = 0;
            a:while (1) {
                z = l;
                o = i;
                while (1) {
                    w = z;
                    if (w >>> 0 >= Y >>> 0) {
                        ca = 187;
                        break a
                    }
                    i = c[R >> 2] | 0;
                    g = c[S >> 2] | 0;
                    x = c[T >> 2] | 0;
                    l = c[U >> 2] | 0;
                    y = i;
                    v = z - i | 0;
                    v = (l + 65536 | 0) >>> 0 > v >>> 0 ? l : v + -65535 | 0;
                    i = z - i | 0;
                    l = c[V >> 2] | 0;
                    while (1) {
                        if (l >>> 0 >= i >>> 0) break;
                        P = y + l | 0;
                        P = f + ((_(d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24, -1640531535) | 0) >>> 17 << 2) | 0;
                        O = l - (c[P >> 2] | 0) | 0;
                        b[Q + ((l & 65535) << 1) >> 1] = O >>> 0 > 65535 ? 65535 : O;
                        c[P >> 2] = l;
                        l = l + 1 | 0
                    }
                    c[V >> 2] = i;
                    t = z;
                    t = d[t >> 0] | d[t + 1 >> 0] << 8 | d[t + 2 >> 0] << 16 | d[t + 3 >> 0] << 24;
                    r = w + 4 | 0;
                    s = y + x | 0;
                    u = 0;
                    i = W;
                    q = c[f + ((_(t, -1640531535) | 0) >>> 17 << 2) >> 2] | 0;
                    while (1) {
                        if (!(q >>> 0 >= v >>> 0 & (i | 0) != 0)) break;
                        p = i + -1 | 0;
                        if (x >>> 0 > q >>> 0) {
                            P = g + q | 0;
                            if ((d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24 | 0) == (t | 0)) {
                                l = w + (x - q) | 0;
                                l = l >>> 0 > $ >>> 0 ? aa : l;
                                i = (Za(r, g + (q + 4) | 0, l) | 0) + 4 | 0;
                                if ((w + i | 0) == (l | 0) & l >>> 0 < $ >>> 0) i = i + (Za(l, s, $) | 0) | 0;
                                if (i >>> 0 > u >>> 0) o = y + q | 0; else i = u
                            } else i = u
                        } else {
                            P = y + q | 0;
                            l = P;
                            if ((a[y + (q + u) >> 0] | 0) == (a[w + u >> 0] | 0) ? (d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24 | 0) == (t | 0) : 0) {
                                i = (Za(r, y + (q + 4) | 0, $) | 0) + 4 | 0;
                                P = i >>> 0 > u >>> 0;
                                i = P ? i : u;
                                o = P ? l : o
                            } else i = u
                        }
                        u = i;
                        i = p;
                        q = q - (e[Q + ((q & 65535) << 1) >> 1] | 0) | 0
                    }
                    if (u) {
                        M = D;
                        g = z;
                        p = u;
                        l = o;
                        H = o;
                        G = z;
                        i = C;
                        break
                    }
                    z = w + 1 | 0
                }
                b:while (1) {
                    F = G;
                    I = g;
                    K = p;
                    L = l;
                    while (1) {
                        E = I;
                        J = E + K | 0;
                        if (J >>> 0 >= Y >>> 0) {
                            q = n;
                            r = i;
                            ca = 46;
                            break b
                        }
                        z = K + -2 | 0;
                        l = E + z | 0;
                        g = c[R >> 2] | 0;
                        C = c[T >> 2] | 0;
                        y = g;
                        D = y + C | 0;
                        p = c[U >> 2] | 0;
                        o = l;
                        x = o - g | 0;
                        x = (p + 65536 | 0) >>> 0 > x >>> 0 ? p : x + -65535 | 0;
                        p = c[S >> 2] | 0;
                        g = o - g | 0;
                        o = c[V >> 2] | 0;
                        while (1) {
                            if (o >>> 0 >= g >>> 0) break;
                            P = y + o | 0;
                            P = f + ((_(d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24, -1640531535) | 0) >>> 17 << 2) | 0;
                            O = o - (c[P >> 2] | 0) | 0;
                            b[Q + ((o & 65535) << 1) >> 1] = O >>> 0 > 65535 ? 65535 : O;
                            c[P >> 2] = o;
                            o = o + 1 | 0
                        }
                        c[V >> 2] = g;
                        w = d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24;
                        t = p;
                        v = E + (K + 2) | 0;
                        p = K;
                        l = W;
                        s = c[f + ((_(w, -1640531535) | 0) >>> 17 << 2) >> 2] | 0;
                        while (1) {
                            if (!(s >>> 0 >= x >>> 0 & (l | 0) != 0)) {
                                g = i;
                                break
                            }
                            r = l + -1 | 0;
                            if (C >>> 0 > s >>> 0) {
                                P = t + s | 0;
                                if ((d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24 | 0) == (w | 0)) {
                                    l = E + (z + (C - s)) | 0;
                                    l = l >>> 0 > $ >>> 0 ? aa : l;
                                    g = (Za(v, t + (s + 4) | 0, l) | 0) + 4 | 0;
                                    if (l >>> 0 < $ >>> 0 ? (E + (z + g) | 0) == (l | 0) : 0) g = g + (Za(l, D, $) | 0) | 0;
                                    o = 0;
                                    while (1) {
                                        P = z + o | 0;
                                        q = E + P | 0;
                                        if (!((P | 0) > 1 & (s + o | 0) >>> 0 > x >>> 0)) break;
                                        l = o + -1 | 0;
                                        if ((a[E + (z + l) >> 0] | 0) == (a[t + (s + l) >> 0] | 0)) o = l; else break
                                    }
                                    l = g - o | 0;
                                    if ((l | 0) > (p | 0)) {
                                        p = l;
                                        n = y + (s + o) | 0;
                                        i = q
                                    }
                                }
                            } else if ((a[E + (p + 1) >> 0] | 0) == (a[y + (s - (K + -3) + p) >> 0] | 0) ? (P = y + s | 0, (d[P >> 0] | d[P + 1 >> 0] << 8 | d[P + 2 >> 0] << 16 | d[P + 3 >> 0] << 24 | 0) == (w | 0)) : 0) {
                                l = (Za(v, y + (s + 4) | 0, $) | 0) + 4 | 0;
                                o = 0;
                                while (1) {
                                    P = z + o | 0;
                                    q = E + P | 0;
                                    if (!((P | 0) > 1 & (s + o | 0) > (C | 0))) break;
                                    g = o + -1 | 0;
                                    if ((a[E + (z + g) >> 0] | 0) == (a[y + (s + g) >> 0] | 0)) o = g; else break
                                }
                                l = l - o | 0;
                                if ((l | 0) > (p | 0)) {
                                    p = l;
                                    n = y + (s + o) | 0;
                                    i = q
                                }
                            }
                            l = r;
                            s = s - (e[Q + ((s & 65535) << 1) >> 1] | 0) | 0
                        }
                        if ((p | 0) == (K | 0)) {
                            q = n;
                            r = g;
                            ca = 46;
                            break b
                        }
                        P = g;
                        l = F >>> 0 < E >>> 0 & P >>> 0 < (E + u | 0) >>> 0;
                        o = l ? H : L;
                        i = l ? G : I;
                        l = l ? u : K;
                        if ((P - i | 0) < 3) {
                            I = g;
                            K = p;
                            L = n;
                            i = g
                        } else {
                            N = M;
                            O = i;
                            s = l;
                            P = o;
                            l = B;
                            i = A;
                            break
                        }
                    }
                    c:while (1) {
                        L = O;
                        I = (s | 0) > 18;
                        H = L + (s + 3) | 0;
                        M = L + s | 0;
                        o = p;
                        t = l;
                        q = i;
                        while (1) {
                            l = g;
                            i = g - O | 0;
                            if ((i | 0) < 18 ? (Z = I ? 18 : s, Z = ((L + Z | 0) >>> 0 > (l + (o + -4) | 0) >>> 0 ? i + o + -4 | 0 : Z) + (O - g) | 0, (Z | 0) > 0) : 0) {
                                K = o - Z | 0;
                                v = n + Z | 0;
                                r = l + Z | 0
                            } else {
                                K = o;
                                v = n;
                                r = g
                            }
                            G = r;
                            J = G + K | 0;
                            if (J >>> 0 >= Y >>> 0) {
                                A = q;
                                break b
                            }
                            B = K + -3 | 0;
                            i = G + B | 0;
                            l = c[R >> 2] | 0;
                            C = c[T >> 2] | 0;
                            z = l;
                            D = z + C | 0;
                            n = c[U >> 2] | 0;
                            E = i;
                            y = E - l | 0;
                            y = (n + 65536 | 0) >>> 0 > y >>> 0 ? n : y + -65535 | 0;
                            n = c[S >> 2] | 0;
                            F = r;
                            l = E - l | 0;
                            g = c[V >> 2] | 0;
                            while (1) {
                                if (g >>> 0 >= l >>> 0) break;
                                A = z + g | 0;
                                A = f + ((_(d[A >> 0] | d[A + 1 >> 0] << 8 | d[A + 2 >> 0] << 16 | d[A + 3 >> 0] << 24, -1640531535) | 0) >>> 17 << 2) | 0;
                                x = g - (c[A >> 2] | 0) | 0;
                                b[Q + ((g & 65535) << 1) >> 1] = x >>> 0 > 65535 ? 65535 : x;
                                c[A >> 2] = g;
                                g = g + 1 | 0
                            }
                            c[V >> 2] = l;
                            x = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                            w = G + (K + 1) | 0;
                            p = K;
                            l = W;
                            g = t;
                            A = q;
                            u = c[f + ((_(x, -1640531535) | 0) >>> 17 << 2) >> 2] | 0;
                            while (1) {
                                if (!(u >>> 0 >= y >>> 0 & (l | 0) != 0)) {
                                    t = g;
                                    break
                                }
                                t = l + -1 | 0;
                                if (C >>> 0 > u >>> 0) {
                                    q = n + u | 0;
                                    if ((d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24 | 0) == (x | 0)) {
                                        i = G + (B + (C - u)) | 0;
                                        i = i >>> 0 > $ >>> 0 ? aa : i;
                                        l = (Za(w, n + (u + 4) | 0, i) | 0) + 4 | 0;
                                        if (i >>> 0 < $ >>> 0 ? (G + (B + l) | 0) == (i | 0) : 0) l = l + (Za(i, D, $) | 0) | 0;
                                        o = 0;
                                        while (1) {
                                            q = G + (B + o) | 0;
                                            if (!(q >>> 0 > F >>> 0 & (u + o | 0) >>> 0 > y >>> 0)) break;
                                            i = o + -1 | 0;
                                            if ((a[G + (B + i) >> 0] | 0) == (a[n + (u + i) >> 0] | 0)) o = i; else break
                                        }
                                        i = l - o | 0;
                                        if ((i | 0) > (p | 0)) {
                                            p = i;
                                            g = z + (u + o) | 0;
                                            i = q
                                        } else i = A
                                    } else i = A
                                } else if ((a[F + p >> 0] | 0) == (a[z + (u + (r - E) + p) >> 0] | 0) ? (q = z + u | 0, (d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24 | 0) == (x | 0)) : 0) {
                                    i = (Za(w, z + (u + 4) | 0, $) | 0) + 4 | 0;
                                    o = 0;
                                    while (1) {
                                        q = G + (B + o) | 0;
                                        if (!(q >>> 0 > F >>> 0 & (u + o | 0) > (C | 0))) break;
                                        l = o + -1 | 0;
                                        if ((a[G + (B + l) >> 0] | 0) == (a[z + (u + l) >> 0] | 0)) o = l; else break
                                    }
                                    i = i - o | 0;
                                    if ((i | 0) > (p | 0)) {
                                        p = i;
                                        g = z + (u + o) | 0;
                                        i = q
                                    } else i = A
                                } else i = A;
                                l = t;
                                A = i;
                                u = u - (e[Q + ((u & 65535) << 1) >> 1] | 0) | 0
                            }
                            if ((p | 0) == (K | 0)) break b;
                            i = A;
                            if (i >>> 0 >= H >>> 0) break;
                            if (i >>> 0 < M >>> 0) {
                                o = p;
                                n = t;
                                g = A;
                                q = A
                            } else break c
                        }
                        if (G >>> 0 < M >>> 0) {
                            i = r - O | 0;
                            if ((i | 0) < 15) {
                                l = I ? 18 : s;
                                i = (L + l | 0) >>> 0 > (G + (K + -4) | 0) >>> 0 ? i + K + -4 | 0 : l;
                                l = i + (O - r) | 0;
                                if ((l | 0) > 0) {
                                    u = i;
                                    s = K - l | 0;
                                    v = v + l | 0;
                                    r = G + l | 0
                                } else {
                                    u = i;
                                    s = K
                                }
                            } else {
                                u = i;
                                s = K
                            }
                        } else {
                            u = s;
                            s = K
                        }
                        q = O - N | 0;
                        i = k + 1 | 0;
                        if (!X ? (k + ((q >> 8) + q + 9) | 0) >>> 0 > ba >>> 0 : 0) {
                            m = 0;
                            ca = 196;
                            break a
                        }
                        if ((q | 0) > 14) {
                            a[k >> 0] = -16;
                            g = O + 241 | 0;
                            n = N + 14 - O | 0;
                            n = O + 240 + ((n | 0) > -255 ? n : -255) - N | 0;
                            o = (n >>> 0) % 255 | 0;
                            l = q + -15 | 0;
                            while (1) {
                                if ((l | 0) <= 254) break;
                                M = i;
                                a[M >> 0] = -1;
                                i = M + 1 | 0;
                                l = l + -255 | 0
                            }
                            a[i >> 0] = g - N + (o - n);
                            i = i + 1 | 0
                        } else a[k >> 0] = q << 4;
                        n = i;
                        g = n + q | 0;
                        l = i;
                        i = N;
                        while (1) {
                            M = i;
                            J = M;
                            J = d[J >> 0] | d[J + 1 >> 0] << 8 | d[J + 2 >> 0] << 16 | d[J + 3 >> 0] << 24;
                            M = M + 4 | 0;
                            M = d[M >> 0] | d[M + 1 >> 0] << 8 | d[M + 2 >> 0] << 16 | d[M + 3 >> 0] << 24;
                            N = l;
                            K = N;
                            a[K >> 0] = J;
                            a[K + 1 >> 0] = J >> 8;
                            a[K + 2 >> 0] = J >> 16;
                            a[K + 3 >> 0] = J >> 24;
                            N = N + 4 | 0;
                            a[N >> 0] = M;
                            a[N + 1 >> 0] = M >> 8;
                            a[N + 2 >> 0] = M >> 16;
                            a[N + 3 >> 0] = M >> 24;
                            l = l + 8 | 0;
                            if (l >>> 0 >= g >>> 0) break; else i = i + 8 | 0
                        }
                        P = O - P & 65535;
                        a[g >> 0] = P;
                        a[g + 1 >> 0] = P >> 8;
                        P = q + 2 | 0;
                        i = n + P | 0;
                        g = u + -4 | 0;
                        if (!X ? (n + (P + ((g >> 8) + 6)) | 0) >>> 0 > ba >>> 0 : 0) {
                            m = 0;
                            ca = 196;
                            break a
                        }
                        l = d[k >> 0] | 0;
                        if ((g | 0) > 14) {
                            a[k >> 0] = l + 15;
                            l = 18 - u | 0;
                            l = u + 491 + ((l | 0) > -510 ? l : -510) | 0;
                            g = (l >>> 0) % 510 | 0;
                            k = u + -19 | 0;
                            while (1) {
                                if ((k | 0) <= 509) break;
                                P = i;
                                a[P >> 0] = -1;
                                a[P + 1 >> 0] = -1;
                                i = P + 2 | 0;
                                k = k + -510 | 0
                            }
                            k = u + -19 + (g - l) | 0;
                            if ((k | 0) > 254) {
                                a[i >> 0] = -1;
                                k = k + -255 | 0;
                                i = i + 1 | 0
                            }
                            P = i;
                            a[P >> 0] = k;
                            k = P + 1 | 0
                        } else {
                            a[k >> 0] = l + g;
                            k = i
                        }
                        N = L + u | 0;
                        O = r;
                        P = v;
                        n = t;
                        l = t;
                        g = A;
                        i = A
                    }
                    if (G >>> 0 < M >>> 0) {
                        L = M;
                        J = L - r | 0;
                        u = K - J | 0;
                        r = (u | 0) < 4;
                        u = r ? p : u;
                        v = r ? t : v + J | 0;
                        r = r ? A : L
                    } else u = K;
                    o = O - N | 0;
                    q = k;
                    k = q + 1 | 0;
                    if (!X ? (q + ((o >> 8) + o + 9) | 0) >>> 0 > ba >>> 0 : 0) {
                        m = 0;
                        ca = 196;
                        break a
                    }
                    if ((o | 0) > 14) {
                        a[q >> 0] = -16;
                        l = O + 241 | 0;
                        g = N + 14 - O | 0;
                        g = O + 240 + ((g | 0) > -255 ? g : -255) - N | 0;
                        n = (g >>> 0) % 255 | 0;
                        i = o + -15 | 0;
                        while (1) {
                            if ((i | 0) <= 254) break;
                            L = k;
                            a[L >> 0] = -1;
                            k = L + 1 | 0;
                            i = i + -255 | 0
                        }
                        a[k >> 0] = l - N + (n - g);
                        k = k + 1 | 0
                    } else a[q >> 0] = o << 4;
                    g = k;
                    l = g + o | 0;
                    i = k;
                    k = N;
                    while (1) {
                        L = k;
                        J = L;
                        J = d[J >> 0] | d[J + 1 >> 0] << 8 | d[J + 2 >> 0] << 16 | d[J + 3 >> 0] << 24;
                        L = L + 4 | 0;
                        L = d[L >> 0] | d[L + 1 >> 0] << 8 | d[L + 2 >> 0] << 16 | d[L + 3 >> 0] << 24;
                        N = i;
                        K = N;
                        a[K >> 0] = J;
                        a[K + 1 >> 0] = J >> 8;
                        a[K + 2 >> 0] = J >> 16;
                        a[K + 3 >> 0] = J >> 24;
                        N = N + 4 | 0;
                        a[N >> 0] = L;
                        a[N + 1 >> 0] = L >> 8;
                        a[N + 2 >> 0] = L >> 16;
                        a[N + 3 >> 0] = L >> 24;
                        i = i + 8 | 0;
                        if (i >>> 0 >= l >>> 0) break; else k = k + 8 | 0
                    }
                    P = O - P & 65535;
                    a[l >> 0] = P;
                    a[l + 1 >> 0] = P >> 8;
                    P = o + 2 | 0;
                    k = g + P | 0;
                    l = s + -4 | 0;
                    if (!X ? (g + (P + ((l >> 8) + 6)) | 0) >>> 0 > ba >>> 0 : 0) {
                        m = 0;
                        ca = 196;
                        break a
                    }
                    i = d[q >> 0] | 0;
                    if ((l | 0) > 14) {
                        a[q >> 0] = i + 15;
                        l = 18 - s | 0;
                        l = s + 491 + ((l | 0) > -510 ? l : -510) | 0;
                        g = (l >>> 0) % 510 | 0;
                        i = s + -19 | 0;
                        while (1) {
                            if ((i | 0) <= 509) break;
                            P = k;
                            a[P >> 0] = -1;
                            a[P + 1 >> 0] = -1;
                            k = P + 2 | 0;
                            i = i + -510 | 0
                        }
                        i = s + -19 + (g - l) | 0;
                        if ((i | 0) > 254) {
                            a[k >> 0] = -1;
                            i = i + -255 | 0;
                            k = k + 1 | 0
                        }
                        a[k >> 0] = i;
                        k = k + 1 | 0
                    } else a[q >> 0] = i + l;
                    g = A;
                    l = t;
                    H = v;
                    n = v;
                    B = t;
                    G = r;
                    i = r
                }
                if ((ca | 0) == 46) {
                    ca = 0;
                    p = I - M | 0;
                    i = k + 1 | 0;
                    if (!X ? (k + ((p >> 8) + p + 9) | 0) >>> 0 > ba >>> 0 : 0) {
                        m = 0;
                        ca = 196;
                        break
                    }
                    if ((p | 0) > 14) {
                        a[k >> 0] = -16;
                        g = I + 241 | 0;
                        n = M + 14 - I | 0;
                        n = I + 240 + ((n | 0) > -255 ? n : -255) - M | 0;
                        o = (n >>> 0) % 255 | 0;
                        l = p + -15 | 0;
                        while (1) {
                            if ((l | 0) <= 254) break;
                            P = i;
                            a[P >> 0] = -1;
                            i = P + 1 | 0;
                            l = l + -255 | 0
                        }
                        a[i >> 0] = g - M + (o - n);
                        i = i + 1 | 0
                    } else a[k >> 0] = p << 4;
                    n = i;
                    g = n + p | 0;
                    l = i;
                    i = M;
                    while (1) {
                        O = i;
                        M = O;
                        M = d[M >> 0] | d[M + 1 >> 0] << 8 | d[M + 2 >> 0] << 16 | d[M + 3 >> 0] << 24;
                        O = O + 4 | 0;
                        O = d[O >> 0] | d[O + 1 >> 0] << 8 | d[O + 2 >> 0] << 16 | d[O + 3 >> 0] << 24;
                        P = l;
                        N = P;
                        a[N >> 0] = M;
                        a[N + 1 >> 0] = M >> 8;
                        a[N + 2 >> 0] = M >> 16;
                        a[N + 3 >> 0] = M >> 24;
                        P = P + 4 | 0;
                        a[P >> 0] = O;
                        a[P + 1 >> 0] = O >> 8;
                        a[P + 2 >> 0] = O >> 16;
                        a[P + 3 >> 0] = O >> 24;
                        l = l + 8 | 0;
                        if (l >>> 0 >= g >>> 0) break; else i = i + 8 | 0
                    }
                    P = I - L & 65535;
                    a[g >> 0] = P;
                    a[g + 1 >> 0] = P >> 8;
                    P = p + 2 | 0;
                    i = n + P | 0;
                    g = K + -4 | 0;
                    if (!X ? (n + (P + ((g >> 8) + 6)) | 0) >>> 0 > ba >>> 0 : 0) {
                        m = 0;
                        ca = 196;
                        break
                    }
                    l = d[k >> 0] | 0;
                    if ((g | 0) > 14) {
                        a[k >> 0] = l + 15;
                        l = 18 - K | 0;
                        l = K + 491 + ((l | 0) > -510 ? l : -510) | 0;
                        g = (l >>> 0) % 510 | 0;
                        k = K + -19 | 0;
                        while (1) {
                            if ((k | 0) <= 509) break;
                            P = i;
                            a[P >> 0] = -1;
                            a[P + 1 >> 0] = -1;
                            i = P + 2 | 0;
                            k = k + -510 | 0
                        }
                        k = K + -19 + (g - l) | 0;
                        if ((k | 0) > 254) {
                            a[i >> 0] = -1;
                            k = k + -255 | 0;
                            i = i + 1 | 0
                        }
                        P = i;
                        a[P >> 0] = k;
                        k = P + 1 | 0
                    } else {
                        a[k >> 0] = l + g;
                        k = i
                    }
                    l = J;
                    D = l;
                    i = L;
                    n = q;
                    C = r;
                    continue
                }
                q = G >>> 0 < M >>> 0 ? r - O | 0 : s;
                p = O - N | 0;
                i = k + 1 | 0;
                if (!X ? (k + ((p >> 8) + p + 9) | 0) >>> 0 > ba >>> 0 : 0) {
                    m = 0;
                    ca = 196;
                    break
                }
                if ((p | 0) > 14) {
                    a[k >> 0] = -16;
                    g = O + 241 | 0;
                    n = N + 14 - O | 0;
                    n = O + 240 + ((n | 0) > -255 ? n : -255) - N | 0;
                    o = (n >>> 0) % 255 | 0;
                    l = p + -15 | 0;
                    while (1) {
                        if ((l | 0) <= 254) break;
                        M = i;
                        a[M >> 0] = -1;
                        i = M + 1 | 0;
                        l = l + -255 | 0
                    }
                    a[i >> 0] = g - N + (o - n);
                    i = i + 1 | 0
                } else a[k >> 0] = p << 4;
                n = i;
                g = n + p | 0;
                l = i;
                i = N;
                while (1) {
                    M = i;
                    H = M;
                    H = d[H >> 0] | d[H + 1 >> 0] << 8 | d[H + 2 >> 0] << 16 | d[H + 3 >> 0] << 24;
                    M = M + 4 | 0;
                    M = d[M >> 0] | d[M + 1 >> 0] << 8 | d[M + 2 >> 0] << 16 | d[M + 3 >> 0] << 24;
                    N = l;
                    I = N;
                    a[I >> 0] = H;
                    a[I + 1 >> 0] = H >> 8;
                    a[I + 2 >> 0] = H >> 16;
                    a[I + 3 >> 0] = H >> 24;
                    N = N + 4 | 0;
                    a[N >> 0] = M;
                    a[N + 1 >> 0] = M >> 8;
                    a[N + 2 >> 0] = M >> 16;
                    a[N + 3 >> 0] = M >> 24;
                    l = l + 8 | 0;
                    if (l >>> 0 >= g >>> 0) break; else i = i + 8 | 0
                }
                O = O - P & 65535;
                a[g >> 0] = O;
                a[g + 1 >> 0] = O >> 8;
                O = p + 2 | 0;
                i = n + O | 0;
                g = q + -4 | 0;
                if (!X ? (n + (O + ((g >> 8) + 6)) | 0) >>> 0 > ba >>> 0 : 0) {
                    m = 0;
                    ca = 196;
                    break
                }
                l = d[k >> 0] | 0;
                if ((g | 0) > 14) {
                    a[k >> 0] = l + 15;
                    l = 18 - q | 0;
                    l = q + 491 + ((l | 0) > -510 ? l : -510) | 0;
                    g = (l >>> 0) % 510 | 0;
                    k = q + -19 | 0;
                    while (1) {
                        if ((k | 0) <= 509) break;
                        O = i;
                        a[O >> 0] = -1;
                        a[O + 1 >> 0] = -1;
                        i = O + 2 | 0;
                        k = k + -510 | 0
                    }
                    k = q + -19 + (g - l) | 0;
                    if ((k | 0) > 254) {
                        a[i >> 0] = -1;
                        k = k + -255 | 0;
                        i = i + 1 | 0
                    }
                    a[i >> 0] = k;
                    i = i + 1 | 0
                } else a[k >> 0] = l + g;
                o = L + q | 0;
                p = r - o | 0;
                q = i;
                k = q + 1 | 0;
                if (!X ? (q + ((p >> 8) + p + 9) | 0) >>> 0 > ba >>> 0 : 0) {
                    m = 0;
                    ca = 196;
                    break
                }
                if ((p | 0) > 14) {
                    a[q >> 0] = -16;
                    l = r + 241 | 0;
                    g = o + 14 - r | 0;
                    g = r + 240 + ((g | 0) > -255 ? g : -255) - o | 0;
                    n = (g >>> 0) % 255 | 0;
                    i = p + -15 | 0;
                    while (1) {
                        if ((i | 0) <= 254) break;
                        O = k;
                        a[O >> 0] = -1;
                        k = O + 1 | 0;
                        i = i + -255 | 0
                    }
                    a[k >> 0] = l - o + (n - g);
                    k = k + 1 | 0
                } else a[q >> 0] = p << 4;
                g = k;
                l = g + p | 0;
                i = k;
                k = o;
                while (1) {
                    N = k;
                    L = N;
                    L = d[L >> 0] | d[L + 1 >> 0] << 8 | d[L + 2 >> 0] << 16 | d[L + 3 >> 0] << 24;
                    N = N + 4 | 0;
                    N = d[N >> 0] | d[N + 1 >> 0] << 8 | d[N + 2 >> 0] << 16 | d[N + 3 >> 0] << 24;
                    O = i;
                    M = O;
                    a[M >> 0] = L;
                    a[M + 1 >> 0] = L >> 8;
                    a[M + 2 >> 0] = L >> 16;
                    a[M + 3 >> 0] = L >> 24;
                    O = O + 4 | 0;
                    a[O >> 0] = N;
                    a[O + 1 >> 0] = N >> 8;
                    a[O + 2 >> 0] = N >> 16;
                    a[O + 3 >> 0] = N >> 24;
                    i = i + 8 | 0;
                    if (i >>> 0 >= l >>> 0) break; else k = k + 8 | 0
                }
                O = r - v & 65535;
                a[l >> 0] = O;
                a[l + 1 >> 0] = O >> 8;
                O = p + 2 | 0;
                k = g + O | 0;
                l = K + -4 | 0;
                if (!X ? (g + (O + ((l >> 8) + 6)) | 0) >>> 0 > ba >>> 0 : 0) {
                    m = 0;
                    ca = 196;
                    break
                }
                i = d[q >> 0] | 0;
                if ((l | 0) > 14) {
                    a[q >> 0] = i + 15;
                    l = 18 - K | 0;
                    l = K + 491 + ((l | 0) > -510 ? l : -510) | 0;
                    g = (l >>> 0) % 510 | 0;
                    i = K + -19 | 0;
                    while (1) {
                        if ((i | 0) <= 509) break;
                        O = k;
                        a[O >> 0] = -1;
                        a[O + 1 >> 0] = -1;
                        k = O + 2 | 0;
                        i = i + -510 | 0
                    }
                    i = K + -19 + (g - l) | 0;
                    if ((i | 0) > 254) {
                        a[k >> 0] = -1;
                        i = i + -255 | 0;
                        k = k + 1 | 0
                    }
                    a[k >> 0] = i;
                    k = k + 1 | 0
                } else a[q >> 0] = i + l;
                l = J;
                D = l;
                i = P;
                n = v;
                B = t;
                C = r
            }
            if ((ca | 0) == 187) {
                p = D;
                o = m - D | 0;
                if (!X ? (k - h + o + 1 + (((o + 240 | 0) >>> 0) / 255 | 0) | 0) >>> 0 > j >>> 0 : 0) {
                    h = 0;
                    return h | 0
                }
                if ((o | 0) > 14) {
                    n = k;
                    a[n >> 0] = -16;
                    g = m + 241 | 0;
                    i = D + 14 - m | 0;
                    m = m + ((i | 0) > -255 ? i : -255) + 240 - D | 0;
                    i = (m >>> 0) % 255 | 0;
                    l = o + -15 | 0;
                    while (1) {
                        k = n + 1 | 0;
                        if ((l | 0) <= 254) break;
                        a[k >> 0] = -1;
                        n = k;
                        l = l + -255 | 0
                    }
                    a[k >> 0] = g - D + (i - m);
                    m = n + 2 | 0
                } else {
                    m = k;
                    a[m >> 0] = o << 4;
                    k = m;
                    m = m + 1 | 0
                }
                gb(m | 0, p | 0, o | 0) | 0;
                h = k + (o + 1) - h | 0;
                return h | 0
            } else if ((ca | 0) == 196) return m | 0;
            return 0
        }

        function Ya(a, e, f, g, h, i) {
            a = a | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            h = h | 0;
            i = i | 0;
            var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
            s = e;
            r = a + 262148 | 0;
            k = c[r >> 2] | 0;
            if (!k) {
                db(a | 0, 0, 131072) | 0;
                db(a + 131072 | 0, -1, 131072) | 0;
                c[a + 262168 >> 2] = 65536;
                k = e + -65536 | 0;
                c[r >> 2] = k;
                q = a + 262144 | 0;
                c[q >> 2] = s;
                c[a + 262152 >> 2] = k;
                c[a + 262160 >> 2] = 65536;
                c[a + 262164 >> 2] = 65536;
                j = e
            } else {
                j = a + 262144 | 0;
                q = j;
                j = c[j >> 2] | 0
            }
            if ((j - k | 0) >>> 0 > 2147483648) {
                k = j - k - (c[a + 262160 >> 2] | 0) | 0;
                k = k >>> 0 > 65536 ? 65536 : k;
                l = 0 - k | 0;
                db(a | 0, 0, 131072) | 0;
                db(a + 131072 | 0, -1, 131072) | 0;
                m = a + 262168 | 0;
                c[m >> 2] = 65536;
                p = j + (l + -65536) | 0;
                c[a + 262148 >> 2] = p;
                n = a + 262144 | 0;
                c[n >> 2] = j + l;
                c[a + 262152 >> 2] = p;
                c[a + 262160 >> 2] = 65536;
                c[a + 262164 >> 2] = 65536;
                if ((k | 0) > 3) {
                    o = k + 65533 | 0;
                    p = 65536;
                    while (1) {
                        if (p >>> 0 >= o >>> 0) break;
                        t = j + (l + (p + -65536)) | 0;
                        t = a + ((_(d[t >> 0] | d[t + 1 >> 0] << 8 | d[t + 2 >> 0] << 16 | d[t + 3 >> 0] << 24, -1640531535) | 0) >>> 17 << 2) | 0;
                        u = p - (c[t >> 2] | 0) | 0;
                        b[a + 131072 + ((p & 65535) << 1) >> 1] = u >>> 0 > 65535 ? 65535 : u;
                        c[t >> 2] = p;
                        p = p + 1 | 0
                    }
                    c[m >> 2] = o
                }
                c[n >> 2] = j + (l + k);
                j = c[q >> 2] | 0
            }
            if ((j | 0) != (e | 0)) {
                l = a + 262144 | 0;
                if (j >>> 0 < ((c[r >> 2] | 0) + 4 | 0) >>> 0) {
                    k = a + 262148 | 0;
                    j = a + 262168 | 0
                } else {
                    k = a + 262148 | 0;
                    n = c[k >> 2] | 0;
                    m = (c[l >> 2] | 0) + -3 - n | 0;
                    j = a + 262168 | 0;
                    o = c[j >> 2] | 0;
                    while (1) {
                        if (o >>> 0 >= m >>> 0) break;
                        u = n + o | 0;
                        u = a + ((_(d[u >> 0] | d[u + 1 >> 0] << 8 | d[u + 2 >> 0] << 16 | d[u + 3 >> 0] << 24, -1640531535) | 0) >>> 17 << 2) | 0;
                        t = o - (c[u >> 2] | 0) | 0;
                        b[a + 131072 + ((o & 65535) << 1) >> 1] = t >>> 0 > 65535 ? 65535 : t;
                        c[u >> 2] = o;
                        o = o + 1 | 0
                    }
                    c[j >> 2] = m
                }
                r = a + 262160 | 0;
                c[a + 262164 >> 2] = c[r >> 2];
                t = c[k >> 2] | 0;
                u = (c[l >> 2] | 0) - t | 0;
                c[r >> 2] = u;
                c[a + 262152 >> 2] = t;
                c[k >> 2] = e + (0 - u);
                c[l >> 2] = s;
                c[j >> 2] = u
            }
            j = e + g | 0;
            k = c[a + 262152 >> 2] | 0;
            l = a + 262164 | 0;
            m = c[a + 262160 >> 2] | 0;
            n = k + m | 0;
            if (!(n >>> 0 > e >>> 0 ? j >>> 0 > (k + (c[l >> 2] | 0) | 0) >>> 0 : 0)) {
                u = a + 262172 | 0;
                u = c[u >> 2] | 0;
                u = Xa(a, e, f, g, h, u, i) | 0;
                return u | 0
            }
            u = (j >>> 0 > n >>> 0 ? n : j) - k | 0;
            c[l >> 2] = u;
            c[l >> 2] = (m - u | 0) >>> 0 < 4 ? m : u;
            u = a + 262172 | 0;
            u = c[u >> 2] | 0;
            u = Xa(a, e, f, g, h, u, i) | 0;
            return u | 0
        }

        function Za(b, c, e) {
            b = b | 0;
            c = c | 0;
            e = e | 0;
            var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
            j = e + -3 | 0;
            h = c;
            i = b;
            while (1) {
                c = i;
                g = h;
                if (i >>> 0 >= j >>> 0) break;
                c = d[h >> 0] | d[h + 1 >> 0] << 8 | d[h + 2 >> 0] << 16 | d[h + 3 >> 0] << 24;
                f = d[i >> 0] | d[i + 1 >> 0] << 8 | d[i + 2 >> 0] << 16 | d[i + 3 >> 0] << 24;
                if ((c | 0) != (f | 0)) {
                    k = 5;
                    break
                }
                h = h + 4 | 0;
                i = i + 4 | 0
            }
            if ((k | 0) == 5) {
                b = i + ((ib(c ^ f | 0) | 0) >>> 3) - b | 0;
                return b | 0
            }
            if (i >>> 0 < (e + -1 | 0) >>> 0 ? (d[h >> 0] | d[h + 1 >> 0] << 8) << 16 >> 16 == (d[i >> 0] | d[i + 1 >> 0] << 8) << 16 >> 16 : 0) {
                g = h + 2 | 0;
                c = i + 2 | 0
            }
            f = c;
            if (f >>> 0 < e >>> 0 ? (a[g >> 0] | 0) == (a[f >> 0] | 0) : 0) c = f + 1 | 0;
            b = c - b | 0;
            return b | 0
        }

        function _a(a) {
            a = a | 0;
            var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0,
                r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0,
                G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
            do if (a >>> 0 < 245) {
                o = a >>> 0 < 11 ? 16 : a + 11 & -8;
                a = o >>> 3;
                i = c[57] | 0;
                b = i >>> a;
                if (b & 3) {
                    b = (b & 1 ^ 1) + a | 0;
                    e = b << 1;
                    d = 268 + (e << 2) | 0;
                    e = 268 + (e + 2 << 2) | 0;
                    f = c[e >> 2] | 0;
                    g = f + 8 | 0;
                    h = c[g >> 2] | 0;
                    do if ((d | 0) != (h | 0)) {
                        if (h >>> 0 < (c[61] | 0) >>> 0) ga();
                        a = h + 12 | 0;
                        if ((c[a >> 2] | 0) == (f | 0)) {
                            c[a >> 2] = d;
                            c[e >> 2] = h;
                            break
                        } else ga()
                    } else c[57] = i & ~(1 << b); while (0);
                    L = b << 3;
                    c[f + 4 >> 2] = L | 3;
                    L = f + (L | 4) | 0;
                    c[L >> 2] = c[L >> 2] | 1;
                    L = g;
                    return L | 0
                }
                h = c[59] | 0;
                if (o >>> 0 > h >>> 0) {
                    if (b) {
                        e = 2 << a;
                        e = b << a & (e | 0 - e);
                        e = (e & 0 - e) + -1 | 0;
                        j = e >>> 12 & 16;
                        e = e >>> j;
                        f = e >>> 5 & 8;
                        e = e >>> f;
                        g = e >>> 2 & 4;
                        e = e >>> g;
                        d = e >>> 1 & 2;
                        e = e >>> d;
                        b = e >>> 1 & 1;
                        b = (f | j | g | d | b) + (e >>> b) | 0;
                        e = b << 1;
                        d = 268 + (e << 2) | 0;
                        e = 268 + (e + 2 << 2) | 0;
                        g = c[e >> 2] | 0;
                        j = g + 8 | 0;
                        f = c[j >> 2] | 0;
                        do if ((d | 0) != (f | 0)) {
                            if (f >>> 0 < (c[61] | 0) >>> 0) ga();
                            a = f + 12 | 0;
                            if ((c[a >> 2] | 0) == (g | 0)) {
                                c[a >> 2] = d;
                                c[e >> 2] = f;
                                k = c[59] | 0;
                                break
                            } else ga()
                        } else {
                            c[57] = i & ~(1 << b);
                            k = h
                        } while (0);
                        L = b << 3;
                        h = L - o | 0;
                        c[g + 4 >> 2] = o | 3;
                        i = g + o | 0;
                        c[g + (o | 4) >> 2] = h | 1;
                        c[g + L >> 2] = h;
                        if (k) {
                            f = c[62] | 0;
                            d = k >>> 3;
                            a = d << 1;
                            e = 268 + (a << 2) | 0;
                            b = c[57] | 0;
                            d = 1 << d;
                            if (b & d) {
                                b = 268 + (a + 2 << 2) | 0;
                                a = c[b >> 2] | 0;
                                if (a >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                    l = b;
                                    m = a
                                }
                            } else {
                                c[57] = b | d;
                                l = 268 + (a + 2 << 2) | 0;
                                m = e
                            }
                            c[l >> 2] = f;
                            c[m + 12 >> 2] = f;
                            c[f + 8 >> 2] = m;
                            c[f + 12 >> 2] = e
                        }
                        c[59] = h;
                        c[62] = i;
                        L = j;
                        return L | 0
                    }
                    a = c[58] | 0;
                    if (a) {
                        i = (a & 0 - a) + -1 | 0;
                        K = i >>> 12 & 16;
                        i = i >>> K;
                        J = i >>> 5 & 8;
                        i = i >>> J;
                        L = i >>> 2 & 4;
                        i = i >>> L;
                        b = i >>> 1 & 2;
                        i = i >>> b;
                        j = i >>> 1 & 1;
                        j = c[532 + ((J | K | L | b | j) + (i >>> j) << 2) >> 2] | 0;
                        i = (c[j + 4 >> 2] & -8) - o | 0;
                        b = j;
                        while (1) {
                            a = c[b + 16 >> 2] | 0;
                            if (!a) {
                                a = c[b + 20 >> 2] | 0;
                                if (!a) break
                            }
                            b = (c[a + 4 >> 2] & -8) - o | 0;
                            L = b >>> 0 < i >>> 0;
                            i = L ? b : i;
                            b = a;
                            j = L ? a : j
                        }
                        f = c[61] | 0;
                        if (j >>> 0 < f >>> 0) ga();
                        h = j + o | 0;
                        if (j >>> 0 >= h >>> 0) ga();
                        g = c[j + 24 >> 2] | 0;
                        d = c[j + 12 >> 2] | 0;
                        do if ((d | 0) == (j | 0)) {
                            b = j + 20 | 0;
                            a = c[b >> 2] | 0;
                            if (!a) {
                                b = j + 16 | 0;
                                a = c[b >> 2] | 0;
                                if (!a) {
                                    n = 0;
                                    break
                                }
                            }
                            while (1) {
                                d = a + 20 | 0;
                                e = c[d >> 2] | 0;
                                if (e) {
                                    a = e;
                                    b = d;
                                    continue
                                }
                                d = a + 16 | 0;
                                e = c[d >> 2] | 0;
                                if (!e) break; else {
                                    a = e;
                                    b = d
                                }
                            }
                            if (b >>> 0 < f >>> 0) ga(); else {
                                c[b >> 2] = 0;
                                n = a;
                                break
                            }
                        } else {
                            e = c[j + 8 >> 2] | 0;
                            if (e >>> 0 < f >>> 0) ga();
                            a = e + 12 | 0;
                            if ((c[a >> 2] | 0) != (j | 0)) ga();
                            b = d + 8 | 0;
                            if ((c[b >> 2] | 0) == (j | 0)) {
                                c[a >> 2] = d;
                                c[b >> 2] = e;
                                n = d;
                                break
                            } else ga()
                        } while (0);
                        do if (g) {
                            a = c[j + 28 >> 2] | 0;
                            b = 532 + (a << 2) | 0;
                            if ((j | 0) == (c[b >> 2] | 0)) {
                                c[b >> 2] = n;
                                if (!n) {
                                    c[58] = c[58] & ~(1 << a);
                                    break
                                }
                            } else {
                                if (g >>> 0 < (c[61] | 0) >>> 0) ga();
                                a = g + 16 | 0;
                                if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
                                if (!n) break
                            }
                            b = c[61] | 0;
                            if (n >>> 0 < b >>> 0) ga();
                            c[n + 24 >> 2] = g;
                            a = c[j + 16 >> 2] | 0;
                            do if (a) if (a >>> 0 < b >>> 0) ga(); else {
                                c[n + 16 >> 2] = a;
                                c[a + 24 >> 2] = n;
                                break
                            } while (0);
                            a = c[j + 20 >> 2] | 0;
                            if (a) if (a >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                c[n + 20 >> 2] = a;
                                c[a + 24 >> 2] = n;
                                break
                            }
                        } while (0);
                        if (i >>> 0 < 16) {
                            L = i + o | 0;
                            c[j + 4 >> 2] = L | 3;
                            L = j + (L + 4) | 0;
                            c[L >> 2] = c[L >> 2] | 1
                        } else {
                            c[j + 4 >> 2] = o | 3;
                            c[j + (o | 4) >> 2] = i | 1;
                            c[j + (i + o) >> 2] = i;
                            a = c[59] | 0;
                            if (a) {
                                f = c[62] | 0;
                                d = a >>> 3;
                                a = d << 1;
                                e = 268 + (a << 2) | 0;
                                b = c[57] | 0;
                                d = 1 << d;
                                if (b & d) {
                                    a = 268 + (a + 2 << 2) | 0;
                                    b = c[a >> 2] | 0;
                                    if (b >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                        p = a;
                                        q = b
                                    }
                                } else {
                                    c[57] = b | d;
                                    p = 268 + (a + 2 << 2) | 0;
                                    q = e
                                }
                                c[p >> 2] = f;
                                c[q + 12 >> 2] = f;
                                c[f + 8 >> 2] = q;
                                c[f + 12 >> 2] = e
                            }
                            c[59] = i;
                            c[62] = h
                        }
                        L = j + 8 | 0;
                        return L | 0
                    }
                }
            } else if (a >>> 0 <= 4294967231) {
                a = a + 11 | 0;
                o = a & -8;
                j = c[58] | 0;
                if (j) {
                    b = 0 - o | 0;
                    a = a >>> 8;
                    if (a) if (o >>> 0 > 16777215) i = 31; else {
                        q = (a + 1048320 | 0) >>> 16 & 8;
                        x = a << q;
                        p = (x + 520192 | 0) >>> 16 & 4;
                        x = x << p;
                        i = (x + 245760 | 0) >>> 16 & 2;
                        i = 14 - (p | q | i) + (x << i >>> 15) | 0;
                        i = o >>> (i + 7 | 0) & 1 | i << 1
                    } else i = 0;
                    a = c[532 + (i << 2) >> 2] | 0;
                    a:do if (!a) {
                        d = 0;
                        a = 0;
                        x = 86
                    } else {
                        f = b;
                        d = 0;
                        g = o << ((i | 0) == 31 ? 0 : 25 - (i >>> 1) | 0);
                        h = a;
                        a = 0;
                        while (1) {
                            e = c[h + 4 >> 2] & -8;
                            b = e - o | 0;
                            if (b >>> 0 < f >>> 0) if ((e | 0) == (o | 0)) {
                                e = h;
                                a = h;
                                x = 90;
                                break a
                            } else a = h; else b = f;
                            x = c[h + 20 >> 2] | 0;
                            h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
                            d = (x | 0) == 0 | (x | 0) == (h | 0) ? d : x;
                            if (!h) {
                                x = 86;
                                break
                            } else {
                                f = b;
                                g = g << 1
                            }
                        }
                    } while (0);
                    if ((x | 0) == 86) {
                        if ((d | 0) == 0 & (a | 0) == 0) {
                            a = 2 << i;
                            a = j & (a | 0 - a);
                            if (!a) break;
                            a = (a & 0 - a) + -1 | 0;
                            n = a >>> 12 & 16;
                            a = a >>> n;
                            m = a >>> 5 & 8;
                            a = a >>> m;
                            p = a >>> 2 & 4;
                            a = a >>> p;
                            q = a >>> 1 & 2;
                            a = a >>> q;
                            d = a >>> 1 & 1;
                            d = c[532 + ((m | n | p | q | d) + (a >>> d) << 2) >> 2] | 0;
                            a = 0
                        }
                        if (!d) {
                            i = b;
                            j = a
                        } else {
                            e = d;
                            x = 90
                        }
                    }
                    if ((x | 0) == 90) while (1) {
                        x = 0;
                        q = (c[e + 4 >> 2] & -8) - o | 0;
                        d = q >>> 0 < b >>> 0;
                        b = d ? q : b;
                        a = d ? e : a;
                        d = c[e + 16 >> 2] | 0;
                        if (d) {
                            e = d;
                            x = 90;
                            continue
                        }
                        e = c[e + 20 >> 2] | 0;
                        if (!e) {
                            i = b;
                            j = a;
                            break
                        } else x = 90
                    }
                    if ((j | 0) != 0 ? i >>> 0 < ((c[59] | 0) - o | 0) >>> 0 : 0) {
                        f = c[61] | 0;
                        if (j >>> 0 < f >>> 0) ga();
                        h = j + o | 0;
                        if (j >>> 0 >= h >>> 0) ga();
                        g = c[j + 24 >> 2] | 0;
                        d = c[j + 12 >> 2] | 0;
                        do if ((d | 0) == (j | 0)) {
                            b = j + 20 | 0;
                            a = c[b >> 2] | 0;
                            if (!a) {
                                b = j + 16 | 0;
                                a = c[b >> 2] | 0;
                                if (!a) {
                                    s = 0;
                                    break
                                }
                            }
                            while (1) {
                                d = a + 20 | 0;
                                e = c[d >> 2] | 0;
                                if (e) {
                                    a = e;
                                    b = d;
                                    continue
                                }
                                d = a + 16 | 0;
                                e = c[d >> 2] | 0;
                                if (!e) break; else {
                                    a = e;
                                    b = d
                                }
                            }
                            if (b >>> 0 < f >>> 0) ga(); else {
                                c[b >> 2] = 0;
                                s = a;
                                break
                            }
                        } else {
                            e = c[j + 8 >> 2] | 0;
                            if (e >>> 0 < f >>> 0) ga();
                            a = e + 12 | 0;
                            if ((c[a >> 2] | 0) != (j | 0)) ga();
                            b = d + 8 | 0;
                            if ((c[b >> 2] | 0) == (j | 0)) {
                                c[a >> 2] = d;
                                c[b >> 2] = e;
                                s = d;
                                break
                            } else ga()
                        } while (0);
                        do if (g) {
                            a = c[j + 28 >> 2] | 0;
                            b = 532 + (a << 2) | 0;
                            if ((j | 0) == (c[b >> 2] | 0)) {
                                c[b >> 2] = s;
                                if (!s) {
                                    c[58] = c[58] & ~(1 << a);
                                    break
                                }
                            } else {
                                if (g >>> 0 < (c[61] | 0) >>> 0) ga();
                                a = g + 16 | 0;
                                if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = s; else c[g + 20 >> 2] = s;
                                if (!s) break
                            }
                            b = c[61] | 0;
                            if (s >>> 0 < b >>> 0) ga();
                            c[s + 24 >> 2] = g;
                            a = c[j + 16 >> 2] | 0;
                            do if (a) if (a >>> 0 < b >>> 0) ga(); else {
                                c[s + 16 >> 2] = a;
                                c[a + 24 >> 2] = s;
                                break
                            } while (0);
                            a = c[j + 20 >> 2] | 0;
                            if (a) if (a >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                c[s + 20 >> 2] = a;
                                c[a + 24 >> 2] = s;
                                break
                            }
                        } while (0);
                        b:do if (i >>> 0 >= 16) {
                            c[j + 4 >> 2] = o | 3;
                            c[j + (o | 4) >> 2] = i | 1;
                            c[j + (i + o) >> 2] = i;
                            a = i >>> 3;
                            if (i >>> 0 < 256) {
                                b = a << 1;
                                e = 268 + (b << 2) | 0;
                                d = c[57] | 0;
                                a = 1 << a;
                                if (d & a) {
                                    a = 268 + (b + 2 << 2) | 0;
                                    b = c[a >> 2] | 0;
                                    if (b >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                        t = a;
                                        u = b
                                    }
                                } else {
                                    c[57] = d | a;
                                    t = 268 + (b + 2 << 2) | 0;
                                    u = e
                                }
                                c[t >> 2] = h;
                                c[u + 12 >> 2] = h;
                                c[j + (o + 8) >> 2] = u;
                                c[j + (o + 12) >> 2] = e;
                                break
                            }
                            a = i >>> 8;
                            if (a) if (i >>> 0 > 16777215) e = 31; else {
                                K = (a + 1048320 | 0) >>> 16 & 8;
                                L = a << K;
                                J = (L + 520192 | 0) >>> 16 & 4;
                                L = L << J;
                                e = (L + 245760 | 0) >>> 16 & 2;
                                e = 14 - (J | K | e) + (L << e >>> 15) | 0;
                                e = i >>> (e + 7 | 0) & 1 | e << 1
                            } else e = 0;
                            a = 532 + (e << 2) | 0;
                            c[j + (o + 28) >> 2] = e;
                            c[j + (o + 20) >> 2] = 0;
                            c[j + (o + 16) >> 2] = 0;
                            b = c[58] | 0;
                            d = 1 << e;
                            if (!(b & d)) {
                                c[58] = b | d;
                                c[a >> 2] = h;
                                c[j + (o + 24) >> 2] = a;
                                c[j + (o + 12) >> 2] = h;
                                c[j + (o + 8) >> 2] = h;
                                break
                            }
                            a = c[a >> 2] | 0;
                            c:do if ((c[a + 4 >> 2] & -8 | 0) != (i | 0)) {
                                e = i << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
                                while (1) {
                                    d = a + 16 + (e >>> 31 << 2) | 0;
                                    b = c[d >> 2] | 0;
                                    if (!b) break;
                                    if ((c[b + 4 >> 2] & -8 | 0) == (i | 0)) {
                                        w = b;
                                        break c
                                    } else {
                                        e = e << 1;
                                        a = b
                                    }
                                }
                                if (d >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                    c[d >> 2] = h;
                                    c[j + (o + 24) >> 2] = a;
                                    c[j + (o + 12) >> 2] = h;
                                    c[j + (o + 8) >> 2] = h;
                                    break b
                                }
                            } else w = a; while (0);
                            a = w + 8 | 0;
                            b = c[a >> 2] | 0;
                            L = c[61] | 0;
                            if (b >>> 0 >= L >>> 0 & w >>> 0 >= L >>> 0) {
                                c[b + 12 >> 2] = h;
                                c[a >> 2] = h;
                                c[j + (o + 8) >> 2] = b;
                                c[j + (o + 12) >> 2] = w;
                                c[j + (o + 24) >> 2] = 0;
                                break
                            } else ga()
                        } else {
                            L = i + o | 0;
                            c[j + 4 >> 2] = L | 3;
                            L = j + (L + 4) | 0;
                            c[L >> 2] = c[L >> 2] | 1
                        } while (0);
                        L = j + 8 | 0;
                        return L | 0
                    }
                }
            } else o = -1; while (0);
            d = c[59] | 0;
            if (d >>> 0 >= o >>> 0) {
                a = d - o | 0;
                b = c[62] | 0;
                if (a >>> 0 > 15) {
                    c[62] = b + o;
                    c[59] = a;
                    c[b + (o + 4) >> 2] = a | 1;
                    c[b + d >> 2] = a;
                    c[b + 4 >> 2] = o | 3
                } else {
                    c[59] = 0;
                    c[62] = 0;
                    c[b + 4 >> 2] = d | 3;
                    L = b + (d + 4) | 0;
                    c[L >> 2] = c[L >> 2] | 1
                }
                L = b + 8 | 0;
                return L | 0
            }
            a = c[60] | 0;
            if (a >>> 0 > o >>> 0) {
                K = a - o | 0;
                c[60] = K;
                L = c[63] | 0;
                c[63] = L + o;
                c[L + (o + 4) >> 2] = K | 1;
                c[L + 4 >> 2] = o | 3;
                L = L + 8 | 0;
                return L | 0
            }
            do if (!(c[175] | 0)) {
                a = ea(30) | 0;
                if (!(a + -1 & a)) {
                    c[177] = a;
                    c[176] = a;
                    c[178] = -1;
                    c[179] = -1;
                    c[180] = 0;
                    c[168] = 0;
                    c[175] = (ja(0) | 0) & -16 ^ 1431655768;
                    break
                } else ga()
            } while (0);
            g = o + 48 | 0;
            f = c[177] | 0;
            h = o + 47 | 0;
            e = f + h | 0;
            f = 0 - f | 0;
            i = e & f;
            if (i >>> 0 <= o >>> 0) {
                L = 0;
                return L | 0
            }
            a = c[167] | 0;
            if ((a | 0) != 0 ? (u = c[165] | 0, w = u + i | 0, w >>> 0 <= u >>> 0 | w >>> 0 > a >>> 0) : 0) {
                L = 0;
                return L | 0
            }
            d:do if (!(c[168] & 4)) {
                d = c[63] | 0;
                e:do if (d) {
                    a = 676;
                    while (1) {
                        b = c[a >> 2] | 0;
                        if (b >>> 0 <= d >>> 0 ? (r = a + 4 | 0, (b + (c[r >> 2] | 0) | 0) >>> 0 > d >>> 0) : 0) break;
                        a = c[a + 8 >> 2] | 0;
                        if (!a) {
                            x = 174;
                            break e
                        }
                    }
                    b = e - (c[60] | 0) & f;
                    if (b >>> 0 < 2147483647) {
                        d = ia(b | 0) | 0;
                        w = (d | 0) == ((c[a >> 2] | 0) + (c[r >> 2] | 0) | 0);
                        a = w ? b : 0;
                        if (w) {
                            if ((d | 0) != (-1 | 0)) {
                                r = d;
                                q = a;
                                x = 194;
                                break d
                            }
                        } else x = 184
                    } else a = 0
                } else x = 174; while (0);
                do if ((x | 0) == 174) {
                    e = ia(0) | 0;
                    if ((e | 0) != (-1 | 0)) {
                        a = e;
                        b = c[176] | 0;
                        d = b + -1 | 0;
                        if (!(d & a)) b = i; else b = i - a + (d + a & 0 - b) | 0;
                        a = c[165] | 0;
                        d = a + b | 0;
                        if (b >>> 0 > o >>> 0 & b >>> 0 < 2147483647) {
                            w = c[167] | 0;
                            if ((w | 0) != 0 ? d >>> 0 <= a >>> 0 | d >>> 0 > w >>> 0 : 0) {
                                a = 0;
                                break
                            }
                            d = ia(b | 0) | 0;
                            x = (d | 0) == (e | 0);
                            a = x ? b : 0;
                            if (x) {
                                r = e;
                                q = a;
                                x = 194;
                                break d
                            } else x = 184
                        } else a = 0
                    } else a = 0
                } while (0);
                f:do if ((x | 0) == 184) {
                    e = 0 - b | 0;
                    do if (g >>> 0 > b >>> 0 & (b >>> 0 < 2147483647 & (d | 0) != (-1 | 0)) ? (v = c[177] | 0, v = h - b + v & 0 - v, v >>> 0 < 2147483647) : 0) if ((ia(v | 0) | 0) == (-1 | 0)) {
                        ia(e | 0) | 0;
                        break f
                    } else {
                        b = v + b | 0;
                        break
                    } while (0);
                    if ((d | 0) != (-1 | 0)) {
                        r = d;
                        q = b;
                        x = 194;
                        break d
                    }
                } while (0);
                c[168] = c[168] | 4;
                x = 191
            } else {
                a = 0;
                x = 191
            } while (0);
            if ((((x | 0) == 191 ? i >>> 0 < 2147483647 : 0) ? (y = ia(i | 0) | 0, z = ia(0) | 0, y >>> 0 < z >>> 0 & ((y | 0) != (-1 | 0) & (z | 0) != (-1 | 0))) : 0) ? (A = z - y | 0, B = A >>> 0 > (o + 40 | 0) >>> 0, B) : 0) {
                r = y;
                q = B ? A : a;
                x = 194
            }
            if ((x | 0) == 194) {
                a = (c[165] | 0) + q | 0;
                c[165] = a;
                if (a >>> 0 > (c[166] | 0) >>> 0) c[166] = a;
                h = c[63] | 0;
                g:do if (h) {
                    f = 676;
                    while (1) {
                        a = c[f >> 2] | 0;
                        b = f + 4 | 0;
                        d = c[b >> 2] | 0;
                        if ((r | 0) == (a + d | 0)) {
                            x = 204;
                            break
                        }
                        e = c[f + 8 >> 2] | 0;
                        if (!e) break; else f = e
                    }
                    if (((x | 0) == 204 ? (c[f + 12 >> 2] & 8 | 0) == 0 : 0) ? h >>> 0 < r >>> 0 & h >>> 0 >= a >>> 0 : 0) {
                        c[b >> 2] = d + q;
                        L = (c[60] | 0) + q | 0;
                        K = h + 8 | 0;
                        K = (K & 7 | 0) == 0 ? 0 : 0 - K & 7;
                        J = L - K | 0;
                        c[63] = h + K;
                        c[60] = J;
                        c[h + (K + 4) >> 2] = J | 1;
                        c[h + (L + 4) >> 2] = 40;
                        c[64] = c[179];
                        break
                    }
                    a = c[61] | 0;
                    if (r >>> 0 < a >>> 0) {
                        c[61] = r;
                        j = r
                    } else j = a;
                    b = r + q | 0;
                    a = 676;
                    while (1) {
                        if ((c[a >> 2] | 0) == (b | 0)) {
                            x = 212;
                            break
                        }
                        a = c[a + 8 >> 2] | 0;
                        if (!a) {
                            b = 676;
                            break
                        }
                    }
                    if ((x | 0) == 212) if (!(c[a + 12 >> 2] & 8)) {
                        c[a >> 2] = r;
                        n = a + 4 | 0;
                        c[n >> 2] = (c[n >> 2] | 0) + q;
                        n = r + 8 | 0;
                        n = (n & 7 | 0) == 0 ? 0 : 0 - n & 7;
                        k = r + (q + 8) | 0;
                        k = (k & 7 | 0) == 0 ? 0 : 0 - k & 7;
                        a = r + (k + q) | 0;
                        m = n + o | 0;
                        p = r + m | 0;
                        l = a - (r + n) - o | 0;
                        c[r + (n + 4) >> 2] = o | 3;
                        h:do if ((a | 0) != (h | 0)) {
                            if ((a | 0) == (c[62] | 0)) {
                                L = (c[59] | 0) + l | 0;
                                c[59] = L;
                                c[62] = p;
                                c[r + (m + 4) >> 2] = L | 1;
                                c[r + (L + m) >> 2] = L;
                                break
                            }
                            h = q + 4 | 0;
                            b = c[r + (h + k) >> 2] | 0;
                            if ((b & 3 | 0) == 1) {
                                i = b & -8;
                                f = b >>> 3;
                                i:do if (b >>> 0 >= 256) {
                                    g = c[r + ((k | 24) + q) >> 2] | 0;
                                    e = c[r + (q + 12 + k) >> 2] | 0;
                                    do if ((e | 0) == (a | 0)) {
                                        d = k | 16;
                                        e = r + (h + d) | 0;
                                        b = c[e >> 2] | 0;
                                        if (!b) {
                                            d = r + (d + q) | 0;
                                            b = c[d >> 2] | 0;
                                            if (!b) {
                                                I = 0;
                                                break
                                            }
                                        } else d = e;
                                        while (1) {
                                            e = b + 20 | 0;
                                            f = c[e >> 2] | 0;
                                            if (f) {
                                                b = f;
                                                d = e;
                                                continue
                                            }
                                            e = b + 16 | 0;
                                            f = c[e >> 2] | 0;
                                            if (!f) break; else {
                                                b = f;
                                                d = e
                                            }
                                        }
                                        if (d >>> 0 < j >>> 0) ga(); else {
                                            c[d >> 2] = 0;
                                            I = b;
                                            break
                                        }
                                    } else {
                                        f = c[r + ((k | 8) + q) >> 2] | 0;
                                        if (f >>> 0 < j >>> 0) ga();
                                        b = f + 12 | 0;
                                        if ((c[b >> 2] | 0) != (a | 0)) ga();
                                        d = e + 8 | 0;
                                        if ((c[d >> 2] | 0) == (a | 0)) {
                                            c[b >> 2] = e;
                                            c[d >> 2] = f;
                                            I = e;
                                            break
                                        } else ga()
                                    } while (0);
                                    if (!g) break;
                                    b = c[r + (q + 28 + k) >> 2] | 0;
                                    d = 532 + (b << 2) | 0;
                                    do if ((a | 0) != (c[d >> 2] | 0)) {
                                        if (g >>> 0 < (c[61] | 0) >>> 0) ga();
                                        b = g + 16 | 0;
                                        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = I; else c[g + 20 >> 2] = I;
                                        if (!I) break i
                                    } else {
                                        c[d >> 2] = I;
                                        if (I) break;
                                        c[58] = c[58] & ~(1 << b);
                                        break i
                                    } while (0);
                                    d = c[61] | 0;
                                    if (I >>> 0 < d >>> 0) ga();
                                    c[I + 24 >> 2] = g;
                                    a = k | 16;
                                    b = c[r + (a + q) >> 2] | 0;
                                    do if (b) if (b >>> 0 < d >>> 0) ga(); else {
                                        c[I + 16 >> 2] = b;
                                        c[b + 24 >> 2] = I;
                                        break
                                    } while (0);
                                    a = c[r + (h + a) >> 2] | 0;
                                    if (!a) break;
                                    if (a >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                        c[I + 20 >> 2] = a;
                                        c[a + 24 >> 2] = I;
                                        break
                                    }
                                } else {
                                    d = c[r + ((k | 8) + q) >> 2] | 0;
                                    e = c[r + (q + 12 + k) >> 2] | 0;
                                    b = 268 + (f << 1 << 2) | 0;
                                    do if ((d | 0) != (b | 0)) {
                                        if (d >>> 0 < j >>> 0) ga();
                                        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
                                        ga()
                                    } while (0);
                                    if ((e | 0) == (d | 0)) {
                                        c[57] = c[57] & ~(1 << f);
                                        break
                                    }
                                    do if ((e | 0) == (b | 0)) E = e + 8 | 0; else {
                                        if (e >>> 0 < j >>> 0) ga();
                                        b = e + 8 | 0;
                                        if ((c[b >> 2] | 0) == (a | 0)) {
                                            E = b;
                                            break
                                        }
                                        ga()
                                    } while (0);
                                    c[d + 12 >> 2] = e;
                                    c[E >> 2] = d
                                } while (0);
                                a = r + ((i | k) + q) | 0;
                                f = i + l | 0
                            } else f = l;
                            a = a + 4 | 0;
                            c[a >> 2] = c[a >> 2] & -2;
                            c[r + (m + 4) >> 2] = f | 1;
                            c[r + (f + m) >> 2] = f;
                            a = f >>> 3;
                            if (f >>> 0 < 256) {
                                b = a << 1;
                                e = 268 + (b << 2) | 0;
                                d = c[57] | 0;
                                a = 1 << a;
                                do if (!(d & a)) {
                                    c[57] = d | a;
                                    J = 268 + (b + 2 << 2) | 0;
                                    K = e
                                } else {
                                    a = 268 + (b + 2 << 2) | 0;
                                    b = c[a >> 2] | 0;
                                    if (b >>> 0 >= (c[61] | 0) >>> 0) {
                                        J = a;
                                        K = b;
                                        break
                                    }
                                    ga()
                                } while (0);
                                c[J >> 2] = p;
                                c[K + 12 >> 2] = p;
                                c[r + (m + 8) >> 2] = K;
                                c[r + (m + 12) >> 2] = e;
                                break
                            }
                            a = f >>> 8;
                            do if (!a) e = 0; else {
                                if (f >>> 0 > 16777215) {
                                    e = 31;
                                    break
                                }
                                J = (a + 1048320 | 0) >>> 16 & 8;
                                K = a << J;
                                I = (K + 520192 | 0) >>> 16 & 4;
                                K = K << I;
                                e = (K + 245760 | 0) >>> 16 & 2;
                                e = 14 - (I | J | e) + (K << e >>> 15) | 0;
                                e = f >>> (e + 7 | 0) & 1 | e << 1
                            } while (0);
                            a = 532 + (e << 2) | 0;
                            c[r + (m + 28) >> 2] = e;
                            c[r + (m + 20) >> 2] = 0;
                            c[r + (m + 16) >> 2] = 0;
                            b = c[58] | 0;
                            d = 1 << e;
                            if (!(b & d)) {
                                c[58] = b | d;
                                c[a >> 2] = p;
                                c[r + (m + 24) >> 2] = a;
                                c[r + (m + 12) >> 2] = p;
                                c[r + (m + 8) >> 2] = p;
                                break
                            }
                            a = c[a >> 2] | 0;
                            j:do if ((c[a + 4 >> 2] & -8 | 0) != (f | 0)) {
                                e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
                                while (1) {
                                    d = a + 16 + (e >>> 31 << 2) | 0;
                                    b = c[d >> 2] | 0;
                                    if (!b) break;
                                    if ((c[b + 4 >> 2] & -8 | 0) == (f | 0)) {
                                        L = b;
                                        break j
                                    } else {
                                        e = e << 1;
                                        a = b
                                    }
                                }
                                if (d >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                    c[d >> 2] = p;
                                    c[r + (m + 24) >> 2] = a;
                                    c[r + (m + 12) >> 2] = p;
                                    c[r + (m + 8) >> 2] = p;
                                    break h
                                }
                            } else L = a; while (0);
                            a = L + 8 | 0;
                            b = c[a >> 2] | 0;
                            K = c[61] | 0;
                            if (b >>> 0 >= K >>> 0 & L >>> 0 >= K >>> 0) {
                                c[b + 12 >> 2] = p;
                                c[a >> 2] = p;
                                c[r + (m + 8) >> 2] = b;
                                c[r + (m + 12) >> 2] = L;
                                c[r + (m + 24) >> 2] = 0;
                                break
                            } else ga()
                        } else {
                            L = (c[60] | 0) + l | 0;
                            c[60] = L;
                            c[63] = p;
                            c[r + (m + 4) >> 2] = L | 1
                        } while (0);
                        L = r + (n | 8) | 0;
                        return L | 0
                    } else b = 676;
                    while (1) {
                        a = c[b >> 2] | 0;
                        if (a >>> 0 <= h >>> 0 ? (C = c[b + 4 >> 2] | 0, D = a + C | 0, D >>> 0 > h >>> 0) : 0) break;
                        b = c[b + 8 >> 2] | 0
                    }
                    b = a + (C + -39) | 0;
                    b = a + (C + -47 + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7)) | 0;
                    f = h + 16 | 0;
                    b = b >>> 0 < f >>> 0 ? h : b;
                    a = b + 8 | 0;
                    d = r + 8 | 0;
                    d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;
                    L = q + -40 - d | 0;
                    c[63] = r + d;
                    c[60] = L;
                    c[r + (d + 4) >> 2] = L | 1;
                    c[r + (q + -36) >> 2] = 40;
                    c[64] = c[179];
                    d = b + 4 | 0;
                    c[d >> 2] = 27;
                    c[a >> 2] = c[169];
                    c[a + 4 >> 2] = c[170];
                    c[a + 8 >> 2] = c[171];
                    c[a + 12 >> 2] = c[172];
                    c[169] = r;
                    c[170] = q;
                    c[172] = 0;
                    c[171] = a;
                    a = b + 28 | 0;
                    c[a >> 2] = 7;
                    if ((b + 32 | 0) >>> 0 < D >>> 0) do {
                        L = a;
                        a = a + 4 | 0;
                        c[a >> 2] = 7
                    } while ((L + 8 | 0) >>> 0 < D >>> 0);
                    if ((b | 0) != (h | 0)) {
                        g = b - h | 0;
                        c[d >> 2] = c[d >> 2] & -2;
                        c[h + 4 >> 2] = g | 1;
                        c[b >> 2] = g;
                        a = g >>> 3;
                        if (g >>> 0 < 256) {
                            b = a << 1;
                            e = 268 + (b << 2) | 0;
                            d = c[57] | 0;
                            a = 1 << a;
                            if (d & a) {
                                a = 268 + (b + 2 << 2) | 0;
                                b = c[a >> 2] | 0;
                                if (b >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                    F = a;
                                    G = b
                                }
                            } else {
                                c[57] = d | a;
                                F = 268 + (b + 2 << 2) | 0;
                                G = e
                            }
                            c[F >> 2] = h;
                            c[G + 12 >> 2] = h;
                            c[h + 8 >> 2] = G;
                            c[h + 12 >> 2] = e;
                            break
                        }
                        a = g >>> 8;
                        if (a) if (g >>> 0 > 16777215) e = 31; else {
                            K = (a + 1048320 | 0) >>> 16 & 8;
                            L = a << K;
                            J = (L + 520192 | 0) >>> 16 & 4;
                            L = L << J;
                            e = (L + 245760 | 0) >>> 16 & 2;
                            e = 14 - (J | K | e) + (L << e >>> 15) | 0;
                            e = g >>> (e + 7 | 0) & 1 | e << 1
                        } else e = 0;
                        d = 532 + (e << 2) | 0;
                        c[h + 28 >> 2] = e;
                        c[h + 20 >> 2] = 0;
                        c[f >> 2] = 0;
                        a = c[58] | 0;
                        b = 1 << e;
                        if (!(a & b)) {
                            c[58] = a | b;
                            c[d >> 2] = h;
                            c[h + 24 >> 2] = d;
                            c[h + 12 >> 2] = h;
                            c[h + 8 >> 2] = h;
                            break
                        }
                        a = c[d >> 2] | 0;
                        k:do if ((c[a + 4 >> 2] & -8 | 0) != (g | 0)) {
                            e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
                            while (1) {
                                d = a + 16 + (e >>> 31 << 2) | 0;
                                b = c[d >> 2] | 0;
                                if (!b) break;
                                if ((c[b + 4 >> 2] & -8 | 0) == (g | 0)) {
                                    H = b;
                                    break k
                                } else {
                                    e = e << 1;
                                    a = b
                                }
                            }
                            if (d >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                                c[d >> 2] = h;
                                c[h + 24 >> 2] = a;
                                c[h + 12 >> 2] = h;
                                c[h + 8 >> 2] = h;
                                break g
                            }
                        } else H = a; while (0);
                        a = H + 8 | 0;
                        b = c[a >> 2] | 0;
                        L = c[61] | 0;
                        if (b >>> 0 >= L >>> 0 & H >>> 0 >= L >>> 0) {
                            c[b + 12 >> 2] = h;
                            c[a >> 2] = h;
                            c[h + 8 >> 2] = b;
                            c[h + 12 >> 2] = H;
                            c[h + 24 >> 2] = 0;
                            break
                        } else ga()
                    }
                } else {
                    L = c[61] | 0;
                    if ((L | 0) == 0 | r >>> 0 < L >>> 0) c[61] = r;
                    c[169] = r;
                    c[170] = q;
                    c[172] = 0;
                    c[66] = c[175];
                    c[65] = -1;
                    a = 0;
                    do {
                        L = a << 1;
                        K = 268 + (L << 2) | 0;
                        c[268 + (L + 3 << 2) >> 2] = K;
                        c[268 + (L + 2 << 2) >> 2] = K;
                        a = a + 1 | 0
                    } while ((a | 0) != 32);
                    L = r + 8 | 0;
                    L = (L & 7 | 0) == 0 ? 0 : 0 - L & 7;
                    K = q + -40 - L | 0;
                    c[63] = r + L;
                    c[60] = K;
                    c[r + (L + 4) >> 2] = K | 1;
                    c[r + (q + -36) >> 2] = 40;
                    c[64] = c[179]
                } while (0);
                a = c[60] | 0;
                if (a >>> 0 > o >>> 0) {
                    K = a - o | 0;
                    c[60] = K;
                    L = c[63] | 0;
                    c[63] = L + o;
                    c[L + (o + 4) >> 2] = K | 1;
                    c[L + 4 >> 2] = o | 3;
                    L = L + 8 | 0;
                    return L | 0
                }
            }
            if (!(c[45] | 0)) a = 224; else a = c[(fa() | 0) + 60 >> 2] | 0;
            c[a >> 2] = 12;
            L = 0;
            return L | 0
        }

        function $a(a) {
            a = a | 0;
            var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0,
                r = 0, s = 0, t = 0, u = 0;
            if (!a) return;
            b = a + -8 | 0;
            i = c[61] | 0;
            if (b >>> 0 < i >>> 0) ga();
            d = c[a + -4 >> 2] | 0;
            e = d & 3;
            if ((e | 0) == 1) ga();
            o = d & -8;
            q = a + (o + -8) | 0;
            do if (!(d & 1)) {
                b = c[b >> 2] | 0;
                if (!e) return;
                j = -8 - b | 0;
                l = a + j | 0;
                m = b + o | 0;
                if (l >>> 0 < i >>> 0) ga();
                if ((l | 0) == (c[62] | 0)) {
                    b = a + (o + -4) | 0;
                    d = c[b >> 2] | 0;
                    if ((d & 3 | 0) != 3) {
                        u = l;
                        g = m;
                        break
                    }
                    c[59] = m;
                    c[b >> 2] = d & -2;
                    c[a + (j + 4) >> 2] = m | 1;
                    c[q >> 2] = m;
                    return
                }
                f = b >>> 3;
                if (b >>> 0 < 256) {
                    e = c[a + (j + 8) >> 2] | 0;
                    d = c[a + (j + 12) >> 2] | 0;
                    b = 268 + (f << 1 << 2) | 0;
                    if ((e | 0) != (b | 0)) {
                        if (e >>> 0 < i >>> 0) ga();
                        if ((c[e + 12 >> 2] | 0) != (l | 0)) ga()
                    }
                    if ((d | 0) == (e | 0)) {
                        c[57] = c[57] & ~(1 << f);
                        u = l;
                        g = m;
                        break
                    }
                    if ((d | 0) != (b | 0)) {
                        if (d >>> 0 < i >>> 0) ga();
                        b = d + 8 | 0;
                        if ((c[b >> 2] | 0) == (l | 0)) h = b; else ga()
                    } else h = d + 8 | 0;
                    c[e + 12 >> 2] = d;
                    c[h >> 2] = e;
                    u = l;
                    g = m;
                    break
                }
                h = c[a + (j + 24) >> 2] | 0;
                e = c[a + (j + 12) >> 2] | 0;
                do if ((e | 0) == (l | 0)) {
                    d = a + (j + 20) | 0;
                    b = c[d >> 2] | 0;
                    if (!b) {
                        d = a + (j + 16) | 0;
                        b = c[d >> 2] | 0;
                        if (!b) {
                            k = 0;
                            break
                        }
                    }
                    while (1) {
                        e = b + 20 | 0;
                        f = c[e >> 2] | 0;
                        if (f) {
                            b = f;
                            d = e;
                            continue
                        }
                        e = b + 16 | 0;
                        f = c[e >> 2] | 0;
                        if (!f) break; else {
                            b = f;
                            d = e
                        }
                    }
                    if (d >>> 0 < i >>> 0) ga(); else {
                        c[d >> 2] = 0;
                        k = b;
                        break
                    }
                } else {
                    f = c[a + (j + 8) >> 2] | 0;
                    if (f >>> 0 < i >>> 0) ga();
                    b = f + 12 | 0;
                    if ((c[b >> 2] | 0) != (l | 0)) ga();
                    d = e + 8 | 0;
                    if ((c[d >> 2] | 0) == (l | 0)) {
                        c[b >> 2] = e;
                        c[d >> 2] = f;
                        k = e;
                        break
                    } else ga()
                } while (0);
                if (h) {
                    b = c[a + (j + 28) >> 2] | 0;
                    d = 532 + (b << 2) | 0;
                    if ((l | 0) == (c[d >> 2] | 0)) {
                        c[d >> 2] = k;
                        if (!k) {
                            c[58] = c[58] & ~(1 << b);
                            u = l;
                            g = m;
                            break
                        }
                    } else {
                        if (h >>> 0 < (c[61] | 0) >>> 0) ga();
                        b = h + 16 | 0;
                        if ((c[b >> 2] | 0) == (l | 0)) c[b >> 2] = k; else c[h + 20 >> 2] = k;
                        if (!k) {
                            u = l;
                            g = m;
                            break
                        }
                    }
                    d = c[61] | 0;
                    if (k >>> 0 < d >>> 0) ga();
                    c[k + 24 >> 2] = h;
                    b = c[a + (j + 16) >> 2] | 0;
                    do if (b) if (b >>> 0 < d >>> 0) ga(); else {
                        c[k + 16 >> 2] = b;
                        c[b + 24 >> 2] = k;
                        break
                    } while (0);
                    b = c[a + (j + 20) >> 2] | 0;
                    if (b) if (b >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                        c[k + 20 >> 2] = b;
                        c[b + 24 >> 2] = k;
                        u = l;
                        g = m;
                        break
                    } else {
                        u = l;
                        g = m
                    }
                } else {
                    u = l;
                    g = m
                }
            } else {
                u = b;
                g = o
            } while (0);
            if (u >>> 0 >= q >>> 0) ga();
            b = a + (o + -4) | 0;
            d = c[b >> 2] | 0;
            if (!(d & 1)) ga();
            if (!(d & 2)) {
                if ((q | 0) == (c[63] | 0)) {
                    t = (c[60] | 0) + g | 0;
                    c[60] = t;
                    c[63] = u;
                    c[u + 4 >> 2] = t | 1;
                    if ((u | 0) != (c[62] | 0)) return;
                    c[62] = 0;
                    c[59] = 0;
                    return
                }
                if ((q | 0) == (c[62] | 0)) {
                    t = (c[59] | 0) + g | 0;
                    c[59] = t;
                    c[62] = u;
                    c[u + 4 >> 2] = t | 1;
                    c[u + t >> 2] = t;
                    return
                }
                g = (d & -8) + g | 0;
                f = d >>> 3;
                do if (d >>> 0 >= 256) {
                    h = c[a + (o + 16) >> 2] | 0;
                    b = c[a + (o | 4) >> 2] | 0;
                    do if ((b | 0) == (q | 0)) {
                        d = a + (o + 12) | 0;
                        b = c[d >> 2] | 0;
                        if (!b) {
                            d = a + (o + 8) | 0;
                            b = c[d >> 2] | 0;
                            if (!b) {
                                p = 0;
                                break
                            }
                        }
                        while (1) {
                            e = b + 20 | 0;
                            f = c[e >> 2] | 0;
                            if (f) {
                                b = f;
                                d = e;
                                continue
                            }
                            e = b + 16 | 0;
                            f = c[e >> 2] | 0;
                            if (!f) break; else {
                                b = f;
                                d = e
                            }
                        }
                        if (d >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                            c[d >> 2] = 0;
                            p = b;
                            break
                        }
                    } else {
                        d = c[a + o >> 2] | 0;
                        if (d >>> 0 < (c[61] | 0) >>> 0) ga();
                        e = d + 12 | 0;
                        if ((c[e >> 2] | 0) != (q | 0)) ga();
                        f = b + 8 | 0;
                        if ((c[f >> 2] | 0) == (q | 0)) {
                            c[e >> 2] = b;
                            c[f >> 2] = d;
                            p = b;
                            break
                        } else ga()
                    } while (0);
                    if (h) {
                        b = c[a + (o + 20) >> 2] | 0;
                        d = 532 + (b << 2) | 0;
                        if ((q | 0) == (c[d >> 2] | 0)) {
                            c[d >> 2] = p;
                            if (!p) {
                                c[58] = c[58] & ~(1 << b);
                                break
                            }
                        } else {
                            if (h >>> 0 < (c[61] | 0) >>> 0) ga();
                            b = h + 16 | 0;
                            if ((c[b >> 2] | 0) == (q | 0)) c[b >> 2] = p; else c[h + 20 >> 2] = p;
                            if (!p) break
                        }
                        d = c[61] | 0;
                        if (p >>> 0 < d >>> 0) ga();
                        c[p + 24 >> 2] = h;
                        b = c[a + (o + 8) >> 2] | 0;
                        do if (b) if (b >>> 0 < d >>> 0) ga(); else {
                            c[p + 16 >> 2] = b;
                            c[b + 24 >> 2] = p;
                            break
                        } while (0);
                        b = c[a + (o + 12) >> 2] | 0;
                        if (b) if (b >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                            c[p + 20 >> 2] = b;
                            c[b + 24 >> 2] = p;
                            break
                        }
                    }
                } else {
                    e = c[a + o >> 2] | 0;
                    d = c[a + (o | 4) >> 2] | 0;
                    b = 268 + (f << 1 << 2) | 0;
                    if ((e | 0) != (b | 0)) {
                        if (e >>> 0 < (c[61] | 0) >>> 0) ga();
                        if ((c[e + 12 >> 2] | 0) != (q | 0)) ga()
                    }
                    if ((d | 0) == (e | 0)) {
                        c[57] = c[57] & ~(1 << f);
                        break
                    }
                    if ((d | 0) != (b | 0)) {
                        if (d >>> 0 < (c[61] | 0) >>> 0) ga();
                        b = d + 8 | 0;
                        if ((c[b >> 2] | 0) == (q | 0)) n = b; else ga()
                    } else n = d + 8 | 0;
                    c[e + 12 >> 2] = d;
                    c[n >> 2] = e
                } while (0);
                c[u + 4 >> 2] = g | 1;
                c[u + g >> 2] = g;
                if ((u | 0) == (c[62] | 0)) {
                    c[59] = g;
                    return
                }
            } else {
                c[b >> 2] = d & -2;
                c[u + 4 >> 2] = g | 1;
                c[u + g >> 2] = g
            }
            b = g >>> 3;
            if (g >>> 0 < 256) {
                d = b << 1;
                f = 268 + (d << 2) | 0;
                e = c[57] | 0;
                b = 1 << b;
                if (e & b) {
                    b = 268 + (d + 2 << 2) | 0;
                    d = c[b >> 2] | 0;
                    if (d >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                        r = b;
                        s = d
                    }
                } else {
                    c[57] = e | b;
                    r = 268 + (d + 2 << 2) | 0;
                    s = f
                }
                c[r >> 2] = u;
                c[s + 12 >> 2] = u;
                c[u + 8 >> 2] = s;
                c[u + 12 >> 2] = f;
                return
            }
            b = g >>> 8;
            if (b) if (g >>> 0 > 16777215) f = 31; else {
                r = (b + 1048320 | 0) >>> 16 & 8;
                s = b << r;
                q = (s + 520192 | 0) >>> 16 & 4;
                s = s << q;
                f = (s + 245760 | 0) >>> 16 & 2;
                f = 14 - (q | r | f) + (s << f >>> 15) | 0;
                f = g >>> (f + 7 | 0) & 1 | f << 1
            } else f = 0;
            b = 532 + (f << 2) | 0;
            c[u + 28 >> 2] = f;
            c[u + 20 >> 2] = 0;
            c[u + 16 >> 2] = 0;
            d = c[58] | 0;
            e = 1 << f;
            a:do if (d & e) {
                b = c[b >> 2] | 0;
                b:do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
                    f = g << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
                    while (1) {
                        e = b + 16 + (f >>> 31 << 2) | 0;
                        d = c[e >> 2] | 0;
                        if (!d) break;
                        if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
                            t = d;
                            break b
                        } else {
                            f = f << 1;
                            b = d
                        }
                    }
                    if (e >>> 0 < (c[61] | 0) >>> 0) ga(); else {
                        c[e >> 2] = u;
                        c[u + 24 >> 2] = b;
                        c[u + 12 >> 2] = u;
                        c[u + 8 >> 2] = u;
                        break a
                    }
                } else t = b; while (0);
                b = t + 8 | 0;
                d = c[b >> 2] | 0;
                s = c[61] | 0;
                if (d >>> 0 >= s >>> 0 & t >>> 0 >= s >>> 0) {
                    c[d + 12 >> 2] = u;
                    c[b >> 2] = u;
                    c[u + 8 >> 2] = d;
                    c[u + 12 >> 2] = t;
                    c[u + 24 >> 2] = 0;
                    break
                } else ga()
            } else {
                c[58] = d | e;
                c[b >> 2] = u;
                c[u + 24 >> 2] = b;
                c[u + 12 >> 2] = u;
                c[u + 8 >> 2] = u
            } while (0);
            u = (c[65] | 0) + -1 | 0;
            c[65] = u;
            if (!u) b = 684; else return;
            while (1) {
                b = c[b >> 2] | 0;
                if (!b) break; else b = b + 8 | 0
            }
            c[65] = -1;
            return
        }

        function ab() {
        }

        function bb(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
            return (C = d, a - c >>> 0 | 0) | 0
        }

        function cb(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            c = a + c >>> 0;
            return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0
        }

        function db(b, d, e) {
            b = b | 0;
            d = d | 0;
            e = e | 0;
            var f = 0, g = 0, h = 0, i = 0;
            f = b + e | 0;
            if ((e | 0) >= 20) {
                d = d & 255;
                h = b & 3;
                i = d | d << 8 | d << 16 | d << 24;
                g = f & ~3;
                if (h) {
                    h = b + 4 - h | 0;
                    while ((b | 0) < (h | 0)) {
                        a[b >> 0] = d;
                        b = b + 1 | 0
                    }
                }
                while ((b | 0) < (g | 0)) {
                    c[b >> 2] = i;
                    b = b + 4 | 0
                }
            }
            while ((b | 0) < (f | 0)) {
                a[b >> 0] = d;
                b = b + 1 | 0
            }
            return b - e | 0
        }

        function eb(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            if ((c | 0) < 32) {
                C = b >>> c;
                return a >>> c | (b & (1 << c) - 1) << 32 - c
            }
            C = 0;
            return b >>> c - 32 | 0
        }

        function fb(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            if ((c | 0) < 32) {
                C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
                return a << c
            }
            C = a << c - 32;
            return 0
        }

        function gb(b, d, e) {
            b = b | 0;
            d = d | 0;
            e = e | 0;
            var f = 0;
            if ((e | 0) >= 4096) return ka(b | 0, d | 0, e | 0) | 0;
            f = b | 0;
            if ((b & 3) == (d & 3)) {
                while (b & 3) {
                    if (!e) return f | 0;
                    a[b >> 0] = a[d >> 0] | 0;
                    b = b + 1 | 0;
                    d = d + 1 | 0;
                    e = e - 1 | 0
                }
                while ((e | 0) >= 4) {
                    c[b >> 2] = c[d >> 2];
                    b = b + 4 | 0;
                    d = d + 4 | 0;
                    e = e - 4 | 0
                }
            }
            while ((e | 0) > 0) {
                a[b >> 0] = a[d >> 0] | 0;
                b = b + 1 | 0;
                d = d + 1 | 0;
                e = e - 1 | 0
            }
            return f | 0
        }

        function hb(b, c, d) {
            b = b | 0;
            c = c | 0;
            d = d | 0;
            var e = 0;
            if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
                e = b;
                c = c + d | 0;
                b = b + d | 0;
                while ((d | 0) > 0) {
                    b = b - 1 | 0;
                    c = c - 1 | 0;
                    d = d - 1 | 0;
                    a[b >> 0] = a[c >> 0] | 0
                }
                b = e
            } else gb(b, c, d) | 0;
            return b | 0
        }

        function ib(b) {
            b = b | 0;
            var c = 0;
            c = a[m + (b & 255) >> 0] | 0;
            if ((c | 0) < 8) return c | 0;
            c = a[m + (b >> 8 & 255) >> 0] | 0;
            if ((c | 0) < 8) return c + 8 | 0;
            c = a[m + (b >> 16 & 255) >> 0] | 0;
            if ((c | 0) < 8) return c + 16 | 0;
            return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0
        }

        function jb(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            if ((c | 0) < 32) {
                C = b >> c;
                return a >>> c | (b & (1 << c) - 1) << 32 - c
            }
            C = (b | 0) < 0 ? -1 : 0;
            return b >> c - 32 | 0
        }

        function kb(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0, d = 0, e = 0, f = 0;
            f = a & 65535;
            e = b & 65535;
            c = _(e, f) | 0;
            d = a >>> 16;
            a = (c >>> 16) + (_(e, d) | 0) | 0;
            e = b >>> 16;
            b = _(e, f) | 0;
            return (C = (a >>> 16) + (_(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0
        }

        function lb(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
            j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
            i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
            f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
            e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
            h = bb(j ^ a, i ^ b, j, i) | 0;
            g = C;
            a = f ^ j;
            b = e ^ i;
            return bb((qb(h, g, bb(f ^ c, e ^ d, f, e) | 0, C, 0) | 0) ^ a, C ^ b, a, b) | 0
        }

        function mb(a, b, d, e) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
            f = i;
            i = i + 16 | 0;
            j = f | 0;
            h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
            g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
            l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
            k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
            a = bb(h ^ a, g ^ b, h, g) | 0;
            b = C;
            qb(a, b, bb(l ^ d, k ^ e, l, k) | 0, C, j) | 0;
            e = bb(c[j >> 2] ^ h, c[j + 4 >> 2] ^ g, h, g) | 0;
            d = C;
            i = f;
            return (C = d, e) | 0
        }

        function nb(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            var e = 0, f = 0;
            e = a;
            f = c;
            c = kb(e, f) | 0;
            a = C;
            return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0
        }

        function ob(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            return qb(a, b, c, d, 0) | 0
        }

        function pb(a, b, d, e) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            var f = 0, g = 0;
            g = i;
            i = i + 16 | 0;
            f = g | 0;
            qb(a, b, d, e, f) | 0;
            i = g;
            return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0
        }

        function qb(a, b, d, e, f) {
            a = a | 0;
            b = b | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
            l = a;
            j = b;
            k = j;
            h = d;
            n = e;
            i = n;
            if (!k) {
                g = (f | 0) != 0;
                if (!i) {
                    if (g) {
                        c[f >> 2] = (l >>> 0) % (h >>> 0);
                        c[f + 4 >> 2] = 0
                    }
                    n = 0;
                    f = (l >>> 0) / (h >>> 0) >>> 0;
                    return (C = n, f) | 0
                } else {
                    if (!g) {
                        n = 0;
                        f = 0;
                        return (C = n, f) | 0
                    }
                    c[f >> 2] = a | 0;
                    c[f + 4 >> 2] = b & 0;
                    n = 0;
                    f = 0;
                    return (C = n, f) | 0
                }
            }
            g = (i | 0) == 0;
            do if (h) {
                if (!g) {
                    g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
                    if (g >>> 0 <= 31) {
                        m = g + 1 | 0;
                        i = 31 - g | 0;
                        b = g - 31 >> 31;
                        h = m;
                        a = l >>> (m >>> 0) & b | k << i;
                        b = k >>> (m >>> 0) & b;
                        g = 0;
                        i = l << i;
                        break
                    }
                    if (!f) {
                        n = 0;
                        f = 0;
                        return (C = n, f) | 0
                    }
                    c[f >> 2] = a | 0;
                    c[f + 4 >> 2] = j | b & 0;
                    n = 0;
                    f = 0;
                    return (C = n, f) | 0
                }
                g = h - 1 | 0;
                if (g & h) {
                    i = (aa(h | 0) | 0) + 33 - (aa(k | 0) | 0) | 0;
                    p = 64 - i | 0;
                    m = 32 - i | 0;
                    j = m >> 31;
                    o = i - 32 | 0;
                    b = o >> 31;
                    h = i;
                    a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
                    b = b & k >>> (i >>> 0);
                    g = l << p & j;
                    i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
                    break
                }
                if (f) {
                    c[f >> 2] = g & l;
                    c[f + 4 >> 2] = 0
                }
                if ((h | 0) == 1) {
                    o = j | b & 0;
                    p = a | 0 | 0;
                    return (C = o, p) | 0
                } else {
                    p = ib(h | 0) | 0;
                    o = k >>> (p >>> 0) | 0;
                    p = k << 32 - p | l >>> (p >>> 0) | 0;
                    return (C = o, p) | 0
                }
            } else {
                if (g) {
                    if (f) {
                        c[f >> 2] = (k >>> 0) % (h >>> 0);
                        c[f + 4 >> 2] = 0
                    }
                    o = 0;
                    p = (k >>> 0) / (h >>> 0) >>> 0;
                    return (C = o, p) | 0
                }
                if (!l) {
                    if (f) {
                        c[f >> 2] = 0;
                        c[f + 4 >> 2] = (k >>> 0) % (i >>> 0)
                    }
                    o = 0;
                    p = (k >>> 0) / (i >>> 0) >>> 0;
                    return (C = o, p) | 0
                }
                g = i - 1 | 0;
                if (!(g & i)) {
                    if (f) {
                        c[f >> 2] = a | 0;
                        c[f + 4 >> 2] = g & k | b & 0
                    }
                    o = 0;
                    p = k >>> ((ib(i | 0) | 0) >>> 0);
                    return (C = o, p) | 0
                }
                g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
                if (g >>> 0 <= 30) {
                    b = g + 1 | 0;
                    i = 31 - g | 0;
                    h = b;
                    a = k << i | l >>> (b >>> 0);
                    b = k >>> (b >>> 0);
                    g = 0;
                    i = l << i;
                    break
                }
                if (!f) {
                    o = 0;
                    p = 0;
                    return (C = o, p) | 0
                }
                c[f >> 2] = a | 0;
                c[f + 4 >> 2] = j | b & 0;
                o = 0;
                p = 0;
                return (C = o, p) | 0
            } while (0);
            if (!h) {
                k = i;
                j = 0;
                i = 0
            } else {
                m = d | 0 | 0;
                l = n | e & 0;
                k = cb(m | 0, l | 0, -1, -1) | 0;
                d = C;
                j = i;
                i = 0;
                do {
                    e = j;
                    j = g >>> 31 | j << 1;
                    g = i | g << 1;
                    e = a << 1 | e >>> 31 | 0;
                    n = a >>> 31 | b << 1 | 0;
                    bb(k, d, e, n) | 0;
                    p = C;
                    o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
                    i = o & 1;
                    a = bb(e, n, o & m, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l) | 0;
                    b = C;
                    h = h - 1 | 0
                } while ((h | 0) != 0);
                k = j;
                j = 0
            }
            h = 0;
            if (f) {
                c[f >> 2] = a;
                c[f + 4 >> 2] = b
            }
            o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
            p = (g << 1 | 0 >>> 31) & -2 | i;
            return (C = o, p) | 0
        }

        function rb(a, b, c, d, e, f, g) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            g = g | 0;
            return oa[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0
        }

        function sb(a, b, c, d, e, f) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            ba(0);
            return 0
        }

// EMSCRIPTEN_END_FUNCS
        var oa = [sb, Oa, Pa, Wa, Qa, Ta, Na, sb];
        return {
            _memmove: hb,
            _malloc: _a,
            _i64Subtract: bb,
            _free: $a,
            _memcpy: gb,
            _LZ4JS_compressBegin: Ba,
            _LZ4JS_freeCompressionContext: Aa,
            _LZ4JS_freeDecompressionContext: Fa,
            _memset: db,
            _llvm_cttz_i32: ib,
            _LZ4JS_init: ya,
            _i64Add: cb,
            _LZ4JS_compressEnd: Da,
            _LZ4JS_compressUpdate: Ca,
            _LZ4JS_decompress: Ga,
            _bitshift64Lshr: eb,
            _LZ4JS_createDecompressionContext: Ea,
            _LZ4JS_createCompressionContext: za,
            _bitshift64Shl: fb,
            runPostSets: ab,
            stackAlloc: pa,
            stackSave: qa,
            stackRestore: ra,
            establishStackSpace: sa,
            setThrew: ta,
            setTempRet0: wa,
            getTempRet0: xa,
            dynCall_iiiiiii: rb
        }
    })


    // EMSCRIPTEN_END_ASM
    (c.W, c.X, buffer), Oa = c._LZ4JS_init = Z._LZ4JS_init, Ea = c._i64Subtract = Z._i64Subtract, Q = c._free = Z._free;
    c.runPostSets = Z.runPostSets;
    var Pa = c._LZ4JS_compressBegin = Z._LZ4JS_compressBegin, La = c._memmove = Z._memmove,
        Qa = c._LZ4JS_freeDecompressionContext = Z._LZ4JS_freeDecompressionContext,
        Ra = c._LZ4JS_decompress = Z._LZ4JS_decompress, Ga = c._memset = Z._memset,
        Sa = c._LZ4JS_compressUpdate = Z._LZ4JS_compressUpdate, Na = c._llvm_cttz_i32 = Z._llvm_cttz_i32,
        O = c._malloc = Z._malloc, Fa = c._i64Add = Z._i64Add, Ta = c._LZ4JS_compressEnd = Z._LZ4JS_compressEnd,
        Ja = c._memcpy = Z._memcpy, Ua = c._LZ4JS_freeCompressionContext = Z._LZ4JS_freeCompressionContext,
        Ha = c._bitshift64Lshr =
            Z._bitshift64Lshr, Va = c._LZ4JS_createDecompressionContext = Z._LZ4JS_createDecompressionContext,
        Wa = c._LZ4JS_createCompressionContext = Z._LZ4JS_createCompressionContext,
        Ia = c._bitshift64Shl = Z._bitshift64Shl;
    c.dynCall_iiiiiii = Z.dynCall_iiiiiii;
    z.D = Z.stackAlloc;
    z.T = Z.stackSave;
    z.S = Z.stackRestore;
    z.pa = Z.establishStackSpace;
    z.ja = Z.setTempRet0;
    z.ha = Z.getTempRet0;

    function x(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a
    }

    x.prototype = Error();
    x.prototype.constructor = x;
    var Xa = null;
    c.callMain = c.na = function (a) {
        function b() {
            for (var a = 0; 3 > a; a++) e.push(0)
        }

        assert(!0, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
        assert(0 == U.length, "cannot call main when preRun functions remain to be called");
        a = a || [];
        W || (W = !0, T(V));
        var d = a.length + 1, e = [N(Ba(c.thisProgram), "i8", 0)];
        b();
        for (var g = 0; g < d - 1; g += 1) e.push(N(Ba(a[g]), "i8", 0)), b();
        e.push(0);
        e = N(e, "i32", 0);
        try {
            var k = c._main(d, e, 0);
            Ya(k, !0)
        } catch (h) {
            if (!(h instanceof x)) if ("SimulateInfiniteLoop" == h) c.noExitRuntime = !0;
            else throw h && "object" === typeof h && h.stack && c.K("exception thrown: " + [h, h.stack]), h;
        } finally {
        }
    };

    function Za(a) {
        function b() {
            if (!c.calledRun && (c.calledRun = !0, !F)) {
                W || (W = !0, T(V));
                T(xa);
                if (c.onRuntimeInitialized) c.onRuntimeInitialized();
                c._main && $a && c.callMain(a);
                if (c.postRun) for ("function" == typeof c.postRun && (c.postRun = [c.postRun]); c.postRun.length;) {
                    var b = c.postRun.shift();
                    za.unshift(b)
                }
                T(za)
            }
        }

        a = a || c.arguments;
        null === Xa && (Xa = Date.now());
        if (c.preRun) for ("function" == typeof c.preRun && (c.preRun = [c.preRun]); c.preRun.length;) Aa();
        T(U);
        c.calledRun || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
                    c.setStatus("")
                },
                1);
            b()
        }, 1)) : b())
    }

    c.run = c.run = Za;

    function Ya(a, b) {
        if (!b || !c.noExitRuntime) {
            if (!c.noExitRuntime && (F = !0, y = void 0, T(ya), c.onExit)) c.onExit(a);
            w ? (process.stdout.once("drain", function () {
                process.exit(a)
            }), console.log(" "), setTimeout(function () {
                process.exit(a)
            }, 500)) : aa && "function" === typeof quit && quit(a);
            throw new x(a);
        }
    }

    c.exit = c.exit = Ya;
    var ab = [];

    function E(a) {
        void 0 !== a ? (c.print(a), c.K(a), a = JSON.stringify(a)) : a = "";
        F = !0;
        var b = "abort(" + a + ") at " + oa() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
        ab && ab.forEach(function (d) {
            b = d(b, a)
        });
        throw b;
    }

    c.abort = c.abort = E;
    if (c.preInit) for ("function" == typeof c.preInit && (c.preInit = [c.preInit]); 0 < c.preInit.length;) c.preInit.pop()();
    var $a = !0;
    c.noInitialRun && ($a = !1);
    Za();
    var X = {};
    (function () {
        function a(a) {
            Array.prototype.slice.call(arguments, 1).forEach(function (b) {
                null != b && "object" === typeof b && Object.keys(b).forEach(function (d) {
                    a[d] = b[d]
                })
            });
            return a
        }

        function b(a) {
            var b, d, e = 0;
            b = a.map(function (a) {
                return a.length
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            d = new Uint8Array(b);
            a.forEach(function (a) {
                d.set(a, e);
                e += a.length
            });
            return d
        }

        function d(a) {
            return function (b) {
                var d = a.apply(null, arguments);
                return Buffer.isBuffer(b) ? new Buffer(d.buffer, d.byteOffset, d.byteOffset + d.length) : d
            }
        }

        function e(b) {
            this.options =
                a({}, p, b);
            this.g = Wa(this.options.Z, +this.options.Y, +this.options.ba, this.options.aa);
            if (!this.g) throw Error("LZ4JS_createCompressionContext");
            X[this.g] = this;
            this.n = null
        }

        function g() {
            this.p = Va();
            if (!this.p) throw Error("LZ4JS_createDecompressionContext");
            X[this.p] = this
        }

        function k(a, b) {
            e.call(this, b);
            this.src = a;
            this.offset = 0;
            this.o = [];
            this.e = 0
        }

        function h(a, d) {
            var e = new k(a, d);
            e.M();
            e.$();
            e.N();
            return b(e.o)
        }

        function f(a) {
            g.call(this);
            this.src = a;
            this.offset = 0;
            this.o = [];
            this.e = 0
        }

        function u(a) {
            var d = new f(a);
            d.da();
            d = b(d.o);
            return a instanceof Uint8Array ? d : new Buffer(d.buffer)
        }

        var m = this;
        "function" === typeof define && define.amd ? define("lz4", function () {
            return m
        }) : w && (module.exports = m);
        Oa();
        m.BLOCK_MAX_SIZE_64KB = 4;
        m.BLOCK_MAX_SIZE_256KB = 5;
        m.BLOCK_MAX_SIZE_1MB = 6;
        var p = {Z: m.BLOCK_MAX_SIZE_4MB = 7, Y: !1, ba: !1, aa: 0};
        e.prototype.M = function () {
            Pa(this.g) || this.k()
        };
        e.prototype.O = function () {
            Sa(this.g) || this.k()
        };
        e.prototype.N = function () {
            Ta(this.g);
            this.k()
        };
        e.prototype.k = function () {
            Ua(this.g);
            delete X[this.g];
            if (this.n) throw this.n;
        };
        g.prototype.P = function () {
            Ra(this.p) || this.k()
        };
        g.prototype.k = function () {
            Qa(this.p);
            delete X[this.p];
            if (this.n) throw this.n;
        };
        w && function () {
            function b(a) {
                e.call(this, a);
                f.call(this, this.options);
                this.R = !1;
                this.e = 0;
                this.src = new Buffer(0);
                this.q = new Buffer(0)
            }

            function d() {
                g.call(this);
                f.call(this, {});
                this.e = 0;
                this.src = new Buffer(0);
                this.q = new Buffer(0)
            }

            var f = require("stream").Transform, h = require("util").inherits;
            h(b, f);
            a(b.prototype, e.prototype);
            b.prototype.u = function (a) {
                P.set(new Uint8Array(this.src.buffer,
                    this.src.byteOffset, this.e), a);
                return this.e
            };
            b.prototype.A = function (a, b) {
                this.q = (new Buffer(P.buffer)).slice(a, a + b);
                this.push(new Buffer(this.q))
            };
            b.prototype._transform = function (a, b, d) {
                try {
                    this.R || (this.M(), this.R = !0);
                    var e;
                    for (e = 0; e < a.length; e += 8192) this.e = Math.min(a.length - e, 8192), this.src = a.slice(e, e + this.e), this.O();
                    d()
                } catch (f) {
                    d(f)
                }
            };
            b.prototype._flush = function (a) {
                try {
                    this.N(), a()
                } catch (b) {
                    a(b)
                }
            };
            m.createCompressStream = function (a) {
                return new b(a)
            };
            h(d, f);
            a(d.prototype, g.prototype);
            d.prototype.u =
                function (a) {
                    P.set(new Uint8Array(this.src.buffer, this.src.byteOffset, this.e), a);
                    return this.e
                };
            d.prototype.A = function (a, b) {
                this.q = (new Buffer(P.buffer)).slice(a, a + b);
                this.push(new Buffer(this.q))
            };
            d.prototype._transform = function (a, b, d) {
                try {
                    var e;
                    for (e = 0; e < a.length; e += 8192) this.e = Math.min(a.length - e, 8192), this.src = a.slice(e, e + this.e), this.P();
                    d()
                } catch (f) {
                    d(f)
                }
            };
            d.prototype._flush = function (a) {
                this.k();
                a()
            };
            m.createDecompressStream = function () {
                return new d
            }
        }();
        a(k.prototype, e.prototype);
        k.prototype.A =
            function (a, b) {
                this.o.push(new Uint8Array(P.subarray(a, a + b)))
            };
        k.prototype.u = function (a) {
            P.set(this.src.subarray(this.offset, this.offset + this.e), a);
            return this.e
        };
        k.prototype.$ = function () {
            for (; this.offset < this.src.length; this.offset += 8192) this.e = Math.min(this.src.length - this.offset, 8192), this.O()
        };
        m.compress = w ? d(h) : h;
        a(f.prototype, g.prototype);
        f.prototype.A = function (a, b) {
            this.o.push(new Uint8Array(P.subarray(a, a + b)))
        };
        f.prototype.u = function (a) {
            P.set(this.src.subarray(this.offset, this.offset + this.e),
                a);
            return this.e
        };
        f.prototype.da = function () {
            for (; this.offset < this.src.length; this.offset += 8192) this.e = Math.min(this.src.length - this.offset, 8192), this.P();
            this.k()
        };
        m.decompress = w ? d(u) : u
    }).call(this);


}).call(lz4);